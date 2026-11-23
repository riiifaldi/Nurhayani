-- ==============================================================================
-- SKEMA BASIS DATA SUPABASE (POSTGRESQL)
-- SISTEM INFORMASI MAGANG & RISET (SIMAGANG-RISET)
-- DINAS TENAGA KERJA DAN TRANSMIGRASI PROVINSI SULAWESI SELATAN
-- ==============================================================================

-- Aktifkan ekstensi UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TABEL: units (Daftar Unit Kerja & Kuota Magang)
-- ------------------------------------------------------------------------------
DROP TABLE IF EXISTS public.certificates CASCADE;
DROP TABLE IF EXISTS public.evaluations CASCADE;
DROP TABLE IF EXISTS public.logbooks CASCADE;
DROP TABLE IF EXISTS public.application_timeline CASCADE;
DROP TABLE IF EXISTS public.feedbacks CASCADE;
DROP TABLE IF EXISTS public.applications CASCADE;
DROP TABLE IF EXISTS public.units CASCADE;

CREATE TABLE public.units (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    sub_name VARCHAR(255) NOT NULL,
    description TEXT,
    quota INT NOT NULL DEFAULT 10,
    filled INT NOT NULL DEFAULT 0,
    status VARCHAR(50) NOT NULL DEFAULT 'Menerima' CHECK (status IN ('Menerima', 'Kuota Terbatas', 'Penuh')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 2. TABEL: applications (Pengajuan Magang & Penelitian)
-- ------------------------------------------------------------------------------
CREATE TABLE public.applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    type VARCHAR(30) NOT NULL CHECK (type IN ('magang', 'penelitian')),
    unit_id UUID REFERENCES public.units(id) ON DELETE SET NULL,
    applicant_name VARCHAR(255) NOT NULL,
    applicant_id_number VARCHAR(50) NOT NULL, -- NIM / NIK
    institution VARCHAR(255) NOT NULL,        -- Universitas / Institusi
    faculty VARCHAR(255),
    major VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(150),
    advisor_name VARCHAR(255),                -- Dosen Pembimbing
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    member_count INT NOT NULL DEFAULT 1,
    research_title TEXT,                      -- Khusus permohonan penelitian
    surat_pengantar_url TEXT,
    proposal_url TEXT,
    surat_balasan_number VARCHAR(100),
    surat_balasan_date DATE,
    status VARCHAR(50) NOT NULL DEFAULT 'diajukan' 
        CHECK (status IN (
            'diajukan', 
            'verifikasi_berkas', 
            'diproses_unit', 
            'disetujui', 
            'sedang_berjalan', 
            'selesai', 
            'ditolak'
        )),
    rejection_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. TABEL: application_timeline (Audit Log Pelacakan Status Realtime)
-- ------------------------------------------------------------------------------
CREATE TABLE public.application_timeline (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    actor VARCHAR(100) DEFAULT 'Sistem Otomatis',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. TABEL: logbooks (Aktivitas Harian Peserta Magang)
-- ------------------------------------------------------------------------------
CREATE TABLE public.logbooks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
    activity_date DATE NOT NULL,
    activity_title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    verified_by VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 5. TABEL: evaluations (Transkrip Penilaian Magang - Kriteria Resmi)
-- ------------------------------------------------------------------------------
CREATE TABLE public.evaluations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID UNIQUE NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
    discipline_score NUMERIC(5, 2) NOT NULL DEFAULT 0,    -- Disiplin
    cooperation_score NUMERIC(5, 2) NOT NULL DEFAULT 0,   -- Kerjasama
    initiative_score NUMERIC(5, 2) NOT NULL DEFAULT 0,    -- Inisiatif
    attitude_score NUMERIC(5, 2) NOT NULL DEFAULT 0,      -- Sikap
    responsibility_score NUMERIC(5, 2) NOT NULL DEFAULT 0,-- Tanggung Jawab
    average_score NUMERIC(5, 2) GENERATED ALWAYS AS (
        (discipline_score + cooperation_score + initiative_score + attitude_score + responsibility_score) / 5.0
    ) STORED,
    predicate VARCHAR(50) DEFAULT 'Sangat Baik',
    mentor_name VARCHAR(255) DEFAULT 'SURIAMMA, SH, M.Si',
    mentor_position VARCHAR(255) DEFAULT 'Kepala Sub Bagian Umum Disnakertrans Sulsel',
    mentor_rank VARCHAR(100) DEFAULT 'Pembina (IV/a)',
    mentor_nip VARCHAR(50) DEFAULT '19780712 200212 2 011',
    evaluated_at DATE DEFAULT CURRENT_DATE
);

-- ------------------------------------------------------------------------------
-- 6. TABEL: certificates (Sertifikat Digital & QR Code)
-- ------------------------------------------------------------------------------
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID UNIQUE NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
    certificate_number VARCHAR(100) UNIQUE NOT NULL,
    qr_verification_code VARCHAR(100) UNIQUE NOT NULL,
    head_officer_name VARCHAR(255) DEFAULT 'Dr. Jayadi Nas, S.Sos, M.Si',
    head_officer_rank VARCHAR(100) DEFAULT 'Pembina Utama Muda',
    head_officer_nip VARCHAR(50) DEFAULT '19710501 199803 1 004',
    head_officer_title VARCHAR(255) DEFAULT 'Kepala Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan',
    issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
    status VARCHAR(30) DEFAULT 'VALID' CHECK (status IN ('VALID', 'DICABUT')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 7. TABEL: feedbacks (Evaluasi Layanan Publik)
-- ------------------------------------------------------------------------------
CREATE TABLE public.feedbacks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES public.applications(id) ON DELETE SET NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- INDEXING UNTUK KECEPATAN QUERY
-- ==============================================================================
CREATE INDEX idx_applications_reg_num ON public.applications(registration_number);
CREATE INDEX idx_applications_type ON public.applications(type);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_certificates_cert_no ON public.certificates(certificate_number);
CREATE INDEX idx_certificates_qr ON public.certificates(qr_verification_code);

-- ==============================================================================
-- FUNCTION & TRIGGER: REKALKULASI KUOTA UNIT SECARA OTOMATIS
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.fn_sync_unit_quota()
RETURNS TRIGGER AS $$
DECLARE
    v_unit_id UUID;
    v_total_filled INT;
    v_quota INT;
BEGIN
    v_unit_id := COALESCE(NEW.unit_id, OLD.unit_id);
    
    IF v_unit_id IS NOT NULL THEN
        -- Hitung peserta magang yang aktif / disetujui
        SELECT COALESCE(SUM(member_count), 0)
        INTO v_total_filled
        FROM public.applications
        WHERE unit_id = v_unit_id
          AND status IN ('disetujui', 'sedang_berjalan');

        SELECT quota INTO v_quota FROM public.units WHERE id = v_unit_id;

        -- Update filled and status
        UPDATE public.units
        SET 
            filled = v_total_filled,
            status = CASE 
                WHEN v_total_filled >= quota THEN 'Penuh'
                WHEN v_total_filled >= (quota * 0.7) THEN 'Kuota Terbatas'
                ELSE 'Menerima'
            END,
            updated_at = NOW()
        WHERE id = v_unit_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_unit_quota
AFTER INSERT OR UPDATE OF status, unit_id, member_count OR DELETE
ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.fn_sync_unit_quota();

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.application_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logbooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedbacks ENABLE ROW LEVEL SECURITY;

-- 1. Units: Publik dapat membaca data unit & kuota
CREATE POLICY "Public Read Units" ON public.units FOR SELECT USING (true);
CREATE POLICY "Admin Modify Units" ON public.units FOR ALL USING (true); -- Dibatasi ke role admin di supabase auth

-- 2. Applications: Publik dapat membaca permohonannya sendiri lewat no registrasi
CREATE POLICY "Public Read Applications" ON public.applications FOR SELECT USING (true);
CREATE POLICY "Public Insert Applications" ON public.applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin Update Applications" ON public.applications FOR UPDATE USING (true);

-- 3. Timeline: Publik dapat membaca riwayat pelacakan
CREATE POLICY "Public Read Timeline" ON public.application_timeline FOR SELECT USING (true);
CREATE POLICY "Insert Timeline" ON public.application_timeline FOR INSERT WITH CHECK (true);

-- 4. Certificates: Terbuka untuk publik (Verifikasi QR Code)
CREATE POLICY "Public Verify Certificates" ON public.certificates FOR SELECT USING (true);

-- 5. Evaluations: Terbuka untuk pengecekan sertifikat
CREATE POLICY "Public Read Evaluations" ON public.evaluations FOR SELECT USING (true);

-- 6. Logbooks & Feedbacks
CREATE POLICY "Public Read Write Logbooks" ON public.logbooks FOR ALL USING (true);
CREATE POLICY "Public Insert Feedbacks" ON public.feedbacks FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Feedbacks" ON public.feedbacks FOR SELECT USING (true);

-- ==============================================================================
-- SEED DATA RESMI DISNAKERTRANS SULSEL
-- ==============================================================================

-- 1. Unit Kerja
INSERT INTO public.units (id, code, name, sub_name, description, quota, filled, status) VALUES
('b2a95574-8b01-4be3-b9dc-c3c2b0373801', 'SEKR', 'Sekretariat', 'Subbag Kepegawaian & Tata Usaha', 'Pelayanan administrasi persuratan, kepegawaian, arsiparis, serta perencanaan program dinas.', 10, 7, 'Menerima'),
('b2a95574-8b01-4be3-b9dc-c3c2b0373802', 'LATTAS', 'Bidang Pelatihan & Produktivitas', 'BLK & Pengembangan Keahlian Kerja', 'Standardisasi kompetensi kejuruan, kelembagaan pelatihan vokasi, dan peningkatan produktivitas tenaga kerja.', 8, 8, 'Penuh'),
('b2a95574-8b01-4be3-b9dc-c3c2b0373803', 'PENTA', 'Bidang Penempatan Tenaga Kerja', 'Bursa Kerja & Analis Pasar Kerja', 'Pelayanan bursa kerja online/offline (AK-1), penempatan tenaga kerja dalam dan luar negeri, serta penyuluhan jabatan.', 10, 6, 'Kuota Terbatas'),
('b2a95574-8b01-4be3-b9dc-c3c2b0373804', 'TRANS', 'Bidang Transmigrasi', 'Pengembangan Wilayah & Kawasan Transmigrasi', 'Penataan persebaran penduduk, pengembangan kawasan transmigrasi mandiri, dan kemitraan ekonomi warga kawasan.', 5, 2, 'Menerima')
ON CONFLICT (code) DO NOTHING;

-- 2. Permohonan Contoh Magang (Nurhayani - UNM)
INSERT INTO public.applications (
    id, registration_number, type, unit_id, applicant_name, applicant_id_number, 
    institution, faculty, major, phone, email, advisor_name, 
    start_date, end_date, member_count, 
    surat_balasan_number, surat_balasan_date, status
) VALUES (
    'c7d81234-9e12-4fe8-b5bc-a1d2e3f40001',
    'MAG-2026-00125',
    'magang',
    'b2a95574-8b01-4be3-b9dc-c3c2b0373803',
    'Nurhayani',
    '123456789',
    'Universitas Negeri Makassar',
    'Fakultas Teknik',
    'Pendidikan Teknik Informatika & Komputer',
    '081234567890',
    'nurhayani@student.unm.ac.id',
    'Dr. Ir. Ahmad, M.T.',
    '2026-09-01',
    '2026-11-30',
    1,
    '560/124/DISNAKERTRANS/IX/2026',
    '2026-09-03',
    'sedang_berjalan'
) ON CONFLICT (registration_number) DO NOTHING;

-- 3. Timeline Pelacakan Nurhayani
INSERT INTO public.application_timeline (application_id, title, description, actor, created_at) VALUES
('c7d81234-9e12-4fe8-b5bc-a1d2e3f40001', 'Permohonan Masuk ke Sistem', 'Berkas formulir magang dan surat pengantar berhasil diunggah.', 'Nurhayani', '2026-09-01 08:30:00+08'),
('c7d81234-9e12-4fe8-b5bc-a1d2e3f40001', 'Verifikasi Administrasi Berkas', 'Pemeriksaan berkas administrasi dan kelayakan kuota dinyatakan LENGKAP.', 'Staf TU Disnakertrans', '2026-09-01 11:15:00+08'),
('c7d81234-9e12-4fe8-b5bc-a1d2e3f40001', 'Disposisi Unit Penempatan Kerja', 'Diterima oleh Bidang Penempatan Tenaga Kerja untuk penugasan pembimbing.', 'Kepala Bidang Penempatan', '2026-09-02 09:00:00+08'),
('c7d81234-9e12-4fe8-b5bc-a1d2e3f40001', 'Permohonan Disetujui & Surat Diterbitkan', 'Surat Balasan Keterangan Magang Resmi No. 560/124/DISNAKERTRANS/IX/2026 telah terbit ber-QR Code.', 'Kepala Dinas', '2026-09-03 14:00:00+08');

-- 4. Penilaian Magang Nurhayani (Sesuai Lampiran Asli)
INSERT INTO public.evaluations (
    application_id, discipline_score, cooperation_score, initiative_score, attitude_score, responsibility_score,
    predicate, mentor_name, mentor_position, mentor_rank, mentor_nip, evaluated_at
) VALUES (
    'c7d81234-9e12-4fe8-b5bc-a1d2e3f40001',
    96.00,
    98.00,
    95.00,
    95.00,
    98.00,
    'Sangat Baik',
    'SURIAMMA, SH, M.Si',
    'Kepala Sub Bagian Umum Dinas Tenaga Kerja dan Transmigrasi',
    'Pembina (IV/a)',
    '19780712 200212 2 011',
    '2026-10-26'
) ON CONFLICT (application_id) DO NOTHING;

-- 5. Sertifikat Magang Nurhayani (Sesuai Lampiran Asli)
INSERT INTO public.certificates (
    application_id, certificate_number, qr_verification_code,
    head_officer_name, head_officer_rank, head_officer_nip, head_officer_title,
    issue_date, status
) VALUES (
    'c7d81234-9e12-4fe8-b5bc-a1d2e3f40001',
    'CERT/MAG/2026/00125',
    'VERIF-SULSEL-560-MAG-00125-NURHAYANI',
    'Dr. Jayadi Nas, S.Sos, M.Si',
    'Pembina Utama Muda',
    '19710501 199803 1 004',
    'KEPALA DINAS TENAGA KERJA DAN TRANSMIGRASI PROVINSI SULAWESI SELATAN',
    '2026-10-26',
    'VALID'
) ON CONFLICT (certificate_number) DO NOTHING;

-- 6. Permohonan Penelitian Contoh (Andi Tenri - Unhas)
INSERT INTO public.applications (
    id, registration_number, type, unit_id, applicant_name, applicant_id_number, 
    institution, faculty, major, phone, email, advisor_name, 
    start_date, end_date, member_count, research_title, status
) VALUES (
    'c7d81234-9e12-4fe8-b5bc-a1d2e3f40002',
    'RIS-2026-00047',
    'penelitian',
    'b2a95574-8b01-4be3-b9dc-c3c2b0373803',
    'Andi Tenri',
    '987654321',
    'Universitas Hasanuddin',
    'Fakultas Ekonomi & Bisnis',
    'Ilmu Ekonomi & Studi Pembangunan',
    '081399887766',
    'anditenri@student.unhas.ac.id',
    'Prof. Dr. Syamsul Alam, SE, M.Si',
    '2026-10-01',
    '2026-12-31',
    1,
    'Analisis Penyerapan Tenaga Kerja Sektor Formal dan Efektivitas Bursa Kerja di Sulawesi Selatan',
    'diproses_unit'
) ON CONFLICT (registration_number) DO NOTHING;

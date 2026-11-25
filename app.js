/**
 * SIMAGANG-RISET - Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan
 * Logika Aplikasi & Integrasi Database Supabase
 */

// ==============================================================================
// 1. DATA DEFAULT RESMI (FALLBACK / INITIAL REPOSITORY)
// ==============================================================================
// Daftar unit dikosongkan secara default; Admin mengisi/mengelola melalui Panel Admin atau Supabase
const INITIAL_UNITS = [];

const INITIAL_APPLICATIONS = [
    {
        id: "c7d81234-9e12-4fe8-b5bc-a1d2e3f40001",
        registration_number: "MAG-2026-00125",
        type: "magang",
        unit_id: "b2a95574-8b01-4be3-b9dc-c3c2b0373803",
        unit_name: "Bidang Penempatan Tenaga Kerja",
        applicant_name: "Nurhayani",
        applicant_id_number: "123456789",
        institution: "Universitas Negeri Makassar",
        faculty: "Fakultas Teknik",
        major: "Pendidikan Teknik Informatika & Komputer",
        phone: "081234567890",
        email: "nurhayani@student.unm.ac.id",
        advisor_name: "Dr. Ir. Ahmad, M.T.",
        start_date: "2026-08-26",
        end_date: "2026-10-27",
        member_count: 1,
        surat_balasan_number: "560/124/DISNAKERTRANS/IX/2026",
        surat_balasan_date: "2026-09-03",
        status: "selesai",
        timeline: [
            { time: "2026-08-20 08:30 WITA", title: "Permohonan Masuk ke Sistem", note: "Berkas formulir magang dan surat pengantar kampus terunggah.", actor: "Nurhayani" },
            { time: "2026-08-21 11:15 WITA", title: "Verifikasi Berkas Administrasi", note: "Pemeriksaan berkas administrasi dan kuota dinyatakan LENGKAP & VALID.", actor: "Staf TU Disnakertrans" },
            { time: "2026-08-22 09:00 WITA", title: "Disposisi Unit Kerja", note: "Diterima oleh Bidang Penempatan Tenaga Kerja untuk penugasan pembimbing.", actor: "Kepala Bidang Penempatan" },
            { time: "2026-08-23 14:00 WITA", title: "Surat Balasan Diterbitkan", note: "Surat Balasan No. 560/124/DISNAKERTRANS/IX/2026 diterbitkan.", actor: "Kepala Dinas" },
            { time: "2026-10-26 15:30 WITA", title: "Evaluasi Selesai & Sertifikat Terbit", note: "Seluruh tahapan magang selesai dengan predikat SANGAT BAIK.", actor: "Pembimbing Instansi" }
        ],
        evaluation: {
            discipline: 96,
            cooperation: 98,
            initiative: 95,
            attitude: 95,
            responsibility: 98,
            average: 96.4,
            predicate: "SANGAT BAIK",
            mentor_name: "SURIAMMA, SH, M.Si",
            mentor_position: "Kepala Sub Bagian Umum Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan",
            mentor_rank: "Pembina (IV/a)",
            mentor_nip: "19780712 200212 2 011",
            evaluated_at: "26 Oktober 2026"
        },
        certificate: {
            number: "CERT/MAG/2026/00125",
            qr_code: "VERIF-SULSEL-560-MAG-00125-NURHAYANI",
            head_officer: "Dr. Jayadi Nas, S.Sos, M.Si",
            head_rank: "Pembina Utama Muda",
            head_nip: "19710501 199803 1 004",
            head_title: "KEPALA DINAS TENAGA KERJA DAN TRANSMIGRASI PROVINSI SULAWESI SELATAN",
            issue_date: "26 Oktober 2026"
        }
    },
    {
        id: "c7d81234-9e12-4fe8-b5bc-a1d2e3f40002",
        registration_number: "RIS-2026-00047",
        type: "penelitian",
        unit_id: "b2a95574-8b01-4be3-b9dc-c3c2b0373803",
        unit_name: "Bidang Penempatan Tenaga Kerja",
        applicant_name: "Andi Tenri",
        applicant_id_number: "987654321",
        institution: "Universitas Hasanuddin",
        faculty: "Fakultas Ekonomi & Bisnis",
        major: "Ilmu Ekonomi & Studi Pembangunan",
        phone: "081399887766",
        email: "anditenri@student.unhas.ac.id",
        advisor_name: "Prof. Dr. Syamsul Alam, SE, M.Si",
        start_date: "2026-10-01",
        end_date: "2026-12-31",
        member_count: 1,
        research_title: "Analisis Penyerapan Tenaga Kerja Sektor Formal dan Efektivitas Bursa Kerja di Sulawesi Selatan",
        status: "diproses_unit",
        timeline: [
            { time: "2026-09-28 09:10 WITA", title: "Permohonan Riset Masuk", note: "Proposal dan surat izin riset kampus berhasil diunggah.", actor: "Andi Tenri" },
            { time: "2026-09-29 13:45 WITA", title: "Verifikasi Berkas Riset", note: "Proposal disetujui untuk pengambilan data dinas.", actor: "Tim Riset Disnakertrans" }
        ]
    },
    {
        id: "c7d81234-9e12-4fe8-b5bc-a1d2e3f40003",
        registration_number: "MAG-2026-00128",
        type: "magang",
        unit_id: "b2a95574-8b01-4be3-b9dc-c3c2b0373802",
        unit_name: "Bidang Pelatihan & Produktivitas",
        applicant_name: "Ahmad Fauzan",
        applicant_id_number: "135792468",
        institution: "Universitas Hasanuddin",
        faculty: "Fakultas Ilmu Sosial & Ilmu Politik",
        major: "Administrasi Publik",
        phone: "082199887711",
        email: "ahmadfauzan@student.unhas.ac.id",
        advisor_name: "Drs. H. M. Kasim, M.Si",
        start_date: "2026-11-01",
        end_date: "2027-01-31",
        member_count: 2,
        status: "verifikasi_berkas",
        timeline: [
            { time: "2026-10-25 10:00 WITA", title: "Permohonan Dikirim", note: "Menunggu verifikasi administrasi staf TU.", actor: "Ahmad Fauzan" }
        ]
    }
];

// Logbook Dummy Nurhayani
const INITIAL_LOGBOOKS = [
    { id: 1, date: "26 Agustus 2026", title: "Orientasi & Pengenalan Struktur Organisasi Disnakertrans", status: "Terverifikasi" },
    { id: 2, date: "02 September 2026", title: "Pendataan Rekapitulasi Pencari Kerja Terdaftar (Kartu AK-1)", status: "Terverifikasi" },
    { id: 3, date: "15 September 2026", title: "Penyusunan Laporan Penempatan Tenaga Kerja Khusus Vokasi", status: "Terverifikasi" },
    { id: 4, date: "20 Oktober 2026", title: "Finalisasi Data Penempatan & Evaluasi Bursa Kerja Triwulan III", status: "Terverifikasi" }
];

// ==============================================================================
// 2. STATE MANAGER & PERSISTENCE
// ==============================================================================
class AppState {
    constructor() {
        this.supabase = null;
        this.isSupabaseConnected = false;
        this.units = this.load('disnakertrans_units_v2', INITIAL_UNITS);
        this.applications = this.load('disnakertrans_apps', INITIAL_APPLICATIONS);
        this.logbooks = this.load('disnakertrans_logs', INITIAL_LOGBOOKS);
        this.currentUser = this.load('disnakertrans_auth_user', null);
        this.currentCert = null;
        this.currentLetter = null;
        this.initSupabase();
    }

    load(key, fallback) {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    save() {
        try {
            localStorage.setItem('disnakertrans_units_v2', JSON.stringify(this.units));
            localStorage.setItem('disnakertrans_apps', JSON.stringify(this.applications));
            localStorage.setItem('disnakertrans_logs', JSON.stringify(this.logbooks));
            if (this.currentUser) {
                localStorage.setItem('disnakertrans_auth_user', JSON.stringify(this.currentUser));
            } else {
                localStorage.removeItem('disnakertrans_auth_user');
            }
        } catch (e) {
            console.warn("Gagal menyimpan ke localStorage:", e);
        }
    }

    initSupabase() {
        const DEFAULT_URL = 'https://wnouqolivmlpcaesmusb.supabase.co';
        const DEFAULT_KEY = 'sb_publishable_F_iaW6gj63vYlO8T8m5p0g_cu7hCEhb';
        const url = localStorage.getItem('supabase_url') || window.SUPABASE_URL || DEFAULT_URL;
        const key = localStorage.getItem('supabase_key') || window.SUPABASE_ANON_KEY || DEFAULT_KEY;

        if (url && key && window.supabase) {
            try {
                this.supabase = window.supabase.createClient(url, key);
                this.isSupabaseConnected = true;
                this.syncFromSupabase();
                console.log("Supabase Client berhasil diinisialisasi ke project:", url);
            } catch (err) {
                console.error("Gagal menginisialisasi Supabase:", err);
                this.isSupabaseConnected = false;
            }
        }
        this.updateConnectionStatusBadge();
    }

    async syncFromSupabase() {
        if (!this.supabase) return;
        try {
            const { data: unitsData, error: uErr } = await this.supabase.from('units').select('*');
            if (!uErr && unitsData && unitsData.length > 0) {
                this.units = unitsData;
            }

            const { data: appsData, error: aErr } = await this.supabase.from('applications').select(`
                *,
                application_timeline (*),
                evaluations (*),
                certificates (*)
            `);
            if (!aErr && appsData && appsData.length > 0) {
                this.applications = appsData.map(a => ({
                    ...a,
                    timeline: (a.application_timeline || []).map(t => ({
                        time: new Date(t.created_at).toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
                        title: t.title,
                        note: t.description,
                        actor: t.actor
                    })),
                    evaluation: a.evaluations && a.evaluations[0] ? {
                        discipline: a.evaluations[0].discipline_score,
                        cooperation: a.evaluations[0].cooperation_score,
                        initiative: a.evaluations[0].initiative_score,
                        attitude: a.evaluations[0].attitude_score,
                        responsibility: a.evaluations[0].responsibility_score,
                        average: a.evaluations[0].average_score,
                        predicate: a.evaluations[0].predicate,
                        mentor_name: a.evaluations[0].mentor_name,
                        mentor_position: a.evaluations[0].mentor_position,
                        mentor_rank: a.evaluations[0].mentor_rank,
                        mentor_nip: a.evaluations[0].mentor_nip,
                        evaluated_at: a.evaluations[0].evaluated_at
                    } : null,
                    certificate: a.certificates && a.certificates[0] ? {
                        number: a.certificates[0].certificate_number,
                        qr_code: a.certificates[0].qr_verification_code,
                        head_officer: a.certificates[0].head_officer_name,
                        head_rank: a.certificates[0].head_officer_rank,
                        head_nip: a.certificates[0].head_officer_nip,
                        head_title: a.certificates[0].head_officer_title,
                        issue_date: a.certificates[0].issue_date
                    } : null
                }));
            }
            this.save();
            renderUnitsTable();
            renderAdminTable();
        } catch (e) {
            console.warn("Sinkronisasi Supabase menggunakan local state:", e);
        }
    }

    updateConnectionStatusBadge() {
        const badge = document.getElementById('supabase-status-badge');
        if (!badge) return;
        if (this.isSupabaseConnected) {
            badge.className = "inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-emerald-100 transition shadow-sm";
            badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span>Supabase Terhubung</span>';
            badge.onclick = () => openSupabaseModal();
        } else {
            badge.className = "inline-flex items-center space-x-1.5 bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-slate-200 transition";
            badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span><span>Mode Data Lokal</span>';
            badge.onclick = () => openSupabaseModal();
        }
    }
}

const state = new AppState();

// ==============================================================================
// 3. NAVIGASI TAB & TAMPILAN
// ==============================================================================
function switchTab(tabId) {
    // Proteksi Login untuk Dashboard Peserta & Panel Admin
    if (tabId === 'dashboard-admin' && (!state.currentUser || state.currentUser.role !== 'admin')) {
        openLoginModal('admin');
        return;
    }
    if (tabId === 'dashboard-peserta' && (!state.currentUser || state.currentUser.role !== 'peserta')) {
        openLoginModal('peserta');
        return;
    }

    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.classList.remove('text-blue-900', 'font-bold', 'border-b-2', 'border-blue-900', 'bg-slate-100');
        btn.classList.add('text-slate-700', 'font-medium');
        if (btn.dataset.target === tabId) {
            btn.classList.add('text-blue-900', 'font-bold', 'border-b-2', 'border-blue-900', 'bg-slate-100');
            btn.classList.remove('text-slate-700', 'font-medium');
        }
    });

    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (tabId === 'unit-kuota') renderUnitsTable();
    if (tabId === 'dashboard-admin') {
        renderAdminUnitsTable();
        renderAdminTable();
    }
    if (tabId === 'dashboard-peserta') renderPesertaDashboardHeader();
    if (tabId === 'sertifikat') renderCertificatesList();
}

function toggleMobileMenu() {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
}

// ==============================================================================
// 4. TABEL UNIT & KUOTA REALTIME
// ==============================================================================
function renderUnitsTable() {
    const tbody = document.getElementById('units-table-body');
    const searchVal = (document.getElementById('search-unit-input')?.value || '').toLowerCase();
    const filterStatus = document.getElementById('filter-unit-status')?.value || 'all';

    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = state.units.filter(u => {
        const matchSearch = u.name.toLowerCase().includes(searchVal) || u.sub_name.toLowerCase().includes(searchVal);
        const matchStatus = filterStatus === 'all' || u.status === filterStatus;
        return matchSearch && matchStatus;
    });

    if (filtered.length === 0) {
        if (state.units.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center py-12 px-4">
                        <div class="max-w-md mx-auto">
                            <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center text-xl mx-auto mb-3">
                                <i class="fa-solid fa-folder-open"></i>
                            </div>
                            <p class="font-bold text-slate-800 text-sm">Belum Ada Unit / Bidang Terdaftar</p>
                            <p class="text-xs text-slate-500 mt-1">Daftar unit penempatan dan kuota belum ditambahkan oleh Admin Disnakertrans.</p>
                        </div>
                    </td>
                </tr>`;
        } else {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-8 text-slate-500 text-sm">Tidak ada unit kerja yang sesuai filter.</td></tr>`;
        }
        populateUnitDropdowns();
        return;
    }

    filtered.forEach(u => {
        let badgeHtml = '';
        let buttonDisabled = false;

        if (u.status === 'Menerima') {
            badgeHtml = `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>Menerima
            </span>`;
        } else if (u.status === 'Kuota Terbatas') {
            badgeHtml = `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>Kuota Terbatas
            </span>`;
        } else {
            badgeHtml = `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>Penuh
            </span>`;
            buttonDisabled = true;
        }

        const remaining = Math.max(0, u.quota - u.filled);

        const tr = document.createElement('tr');
        tr.className = "border-b border-slate-200 hover:bg-slate-50/80 transition-colors";
        tr.innerHTML = `
            <td class="py-4 px-4 text-left">
                <div class="font-bold text-slate-900 text-base">${u.name}</div>
                <div class="text-xs text-slate-600 mt-0.5">${u.sub_name}</div>
                <div class="text-xs text-slate-500 mt-1 max-w-md hidden sm:block">${u.description}</div>
            </td>
            <td class="py-4 px-4 text-center font-bold text-slate-800">${u.quota} Orang</td>
            <td class="py-4 px-4 text-center">
                <div class="font-bold text-slate-900">${u.filled} Terisi</div>
                <div class="text-xs text-slate-500">Sisa: ${remaining}</div>
            </td>
            <td class="py-4 px-4 text-center">${badgeHtml}</td>
            <td class="py-4 px-4 text-right">
                ${buttonDisabled ? 
                    `<button disabled class="cursor-not-allowed bg-slate-100 text-slate-400 font-semibold px-4 py-2 rounded-lg text-xs">Penuh</button>` :
                    `<button onclick="selectUnitForApplication('${u.id}', '${u.name}')" class="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg text-xs transition shadow-sm">Pilih Unit</button>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Perbarui dropdown form magang
    populateUnitDropdowns();
}

function populateUnitDropdowns() {
    const sel = document.getElementById('form-magang-unit');
    if (!sel) return;
    const currentVal = sel.value;
    sel.innerHTML = '';
    if (state.units.length === 0) {
        const opt = document.createElement('option');
        opt.value = "";
        opt.textContent = "Belum ada unit tersedia (Menunggu Admin)";
        opt.disabled = true;
        opt.selected = true;
        sel.appendChild(opt);
        return;
    }
    state.units.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.textContent = `${u.name} (Sisa: ${Math.max(0, u.quota - u.filled)} orang - ${u.status})`;
        if (u.status === 'Penuh') opt.disabled = true;
        sel.appendChild(opt);
    });
    if (currentVal) sel.value = currentVal;
}

function selectUnitForApplication(unitId, unitName) {
    switchTab('formulir-magang');
    const sel = document.getElementById('form-magang-unit');
    if (sel) {
        for (let i = 0; i < sel.options.length; i++) {
            if (sel.options[i].value === unitName) {
                sel.selectedIndex = i;
                break;
            }
        }
    }
    showAlert("Unit " + unitName + " dipilih. Silakan lengkapi formulir di bawah ini.", "Unit Terpilih");
}

// ==============================================================================
// 5. PENGIRIMAN FORMULIR PENGAJUAN (MAGANG & RISET)
// ==============================================================================
function handleMagangSubmit(e) {
    e.preventDefault();
    const nama = document.getElementById('m-nama').value.trim();
    const nim = document.getElementById('m-nim').value.trim();
    const univ = document.getElementById('m-univ').value.trim();
    const fakultas = document.getElementById('m-fakultas').value.trim();
    const prodi = document.getElementById('m-prodi').value.trim();
    const hp = document.getElementById('m-hp').value.trim();
    const unit = document.getElementById('form-magang-unit').value;
    const startDate = document.getElementById('m-start-date').value;
    const endDate = document.getElementById('m-end-date').value;
    const jumlah = parseInt(document.getElementById('m-jumlah').value) || 1;
    const dosen = document.getElementById('m-dosen').value.trim();

    // Generate Nomor Registrasi Resmi
    const seq = String(state.applications.length + 126).padStart(5, '0');
    const regNumber = `MAG-2026-${seq}`;

    const newApp = {
        id: "app-" + Date.now(),
        registration_number: regNumber,
        type: "magang",
        unit_name: unit,
        applicant_name: nama,
        applicant_id_number: nim,
        institution: univ,
        faculty: fakultas,
        major: prodi,
        phone: hp,
        advisor_name: dosen,
        start_date: startDate,
        end_date: endDate,
        member_count: jumlah,
        status: "verifikasi_berkas",
        timeline: [
            {
                time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
                title: "Permohonan Berhasil Dikirim",
                note: "Berkas berhasil masuk ke antrean verifikasi administrasi staf Disnakertrans Sulsel.",
                actor: nama
            }
        ]
    };

    state.applications.unshift(newApp);
    state.save();

    // Update Supabase jika terhubung
    if (state.supabase) {
        state.supabase.from('applications').insert([{
            registration_number: regNumber,
            type: 'magang',
            applicant_name: nama,
            applicant_id_number: nim,
            institution: univ,
            faculty: fakultas,
            major: prodi,
            phone: hp,
            advisor_name: dosen,
            start_date: startDate,
            end_date: endDate,
            member_count: jumlah,
            status: 'verifikasi_berkas'
        }]).then(({ error }) => {
            if (error) console.error("Supabase insert error:", error);
        });
    }

    e.target.reset();
    showAlert(`Permohonan magang atas nama ${nama} berhasil didaftarkan!\n\nNomor Registrasi Resmi Anda:\n${regNumber}\n\nGunakan nomor ini untuk memantau status secara berkala.`, "Pengajuan Berhasil Dikirim", () => {
        switchTab('tracking');
        document.getElementById('track-search-input').value = regNumber;
        runTrackingSearch();
    });
}

function handleRisetSubmit(e) {
    e.preventDefault();
    const nama = document.getElementById('r-nama').value.trim();
    const nim = document.getElementById('r-nim').value.trim();
    const univ = document.getElementById('r-univ').value.trim();
    const prodi = document.getElementById('r-prodi').value.trim();
    const hp = document.getElementById('r-hp').value.trim();
    const judul = document.getElementById('r-judul').value.trim();
    const unit = document.getElementById('r-unit').value;
    const startDate = document.getElementById('r-start-date').value;
    const endDate = document.getElementById('r-end-date').value;

    const seq = String(state.applications.length + 48).padStart(5, '0');
    const regNumber = `RIS-2026-${seq}`;

    const newApp = {
        id: "ris-" + Date.now(),
        registration_number: regNumber,
        type: "penelitian",
        unit_name: unit,
        applicant_name: nama,
        applicant_id_number: nim,
        institution: univ,
        faculty: "Ekonomi / Terkait",
        major: prodi,
        phone: hp,
        start_date: startDate,
        end_date: endDate,
        research_title: judul,
        member_count: 1,
        status: "verifikasi_berkas",
        timeline: [
            {
                time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
                title: "Permohonan Riset Terdaftar",
                note: "Proposal penelitian dalam penelaahan relevansi bidang.",
                actor: nama
            }
        ]
    };

    state.applications.unshift(newApp);
    state.save();

    e.target.reset();
    showAlert(`Permohonan penelitian ilmiah atas nama ${nama} berhasil dikirim!\n\nNomor Registrasi Riset Anda:\n${regNumber}`, "Pengajuan Riset Diterima", () => {
        switchTab('tracking');
        document.getElementById('track-search-input').value = regNumber;
        runTrackingSearch();
    });
}

// ==============================================================================
// 6. PELACAKAN STATUS REALTIME (TRACKING TIMELINE)
// ==============================================================================
function runTrackingSearch() {
    const input = document.getElementById('track-search-input');
    const resultBox = document.getElementById('tracking-result-box');
    const query = (input?.value || '').trim().toUpperCase();

    if (!query) {
        showAlert("Silakan masukkan Nomor Registrasi (contoh: MAG-2026-00125)", "Peringatan");
        return;
    }

    const app = state.applications.find(a => a.registration_number.toUpperCase() === query);

    if (!app) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = `
            <div class="bg-amber-50 border border-amber-300 rounded-2xl p-6 text-center">
                <i class="fa-solid fa-circle-exclamation text-amber-600 text-3xl mb-2"></i>
                <h4 class="font-bold text-amber-900 text-lg">Nomor Registrasi Tidak Ditemukan</h4>
                <p class="text-xs text-amber-800 mt-1">Pastikan Anda memasukkan nomor dengan format yang benar (misal: MAG-2026-00125 atau RIS-2026-00047).</p>
            </div>
        `;
        return;
    }

    // Build timeline UI
    let statusBadge = '';
    let statusLabel = '';
    if (app.status === 'selesai' || app.status === 'disetujui') {
        statusBadge = '<span class="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full text-xs font-bold"><i class="fa-solid fa-circle-check mr-1 text-emerald-600"></i> Disetujui / Selesai</span>';
        statusLabel = "Permohonan telah disetujui & dokumen resmi tersedia.";
    } else if (app.status === 'verifikasi_berkas' || app.status === 'diajukan') {
        statusBadge = '<span class="bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold"><i class="fa-solid fa-clock mr-1 text-amber-600"></i> Verifikasi Berkas Administrasi</span>';
        statusLabel = "Berkas sedang diperiksa oleh Staf Tata Usaha Disnakertrans Sulsel.";
    } else {
        statusBadge = '<span class="bg-blue-100 text-blue-800 border border-blue-300 px-3 py-1 rounded-full text-xs font-bold"><i class="fa-solid fa-building-user mr-1 text-blue-600"></i> Disposisi Unit</span>';
        statusLabel = "Sedang diproses oleh Kepala Bidang terkait.";
    }

    let timelineItemsHtml = '';
    (app.timeline || []).forEach((t, idx) => {
        const isLatest = idx === (app.timeline.length - 1);
        timelineItemsHtml += `
            <div class="flex items-start space-x-4 relative">
                <div class="w-8 h-8 rounded-full ${isLatest ? 'bg-blue-900 text-white ring-4 ring-blue-100' : 'bg-emerald-600 text-white'} flex items-center justify-center font-bold text-xs shrink-0 shadow">
                    <i class="fa-solid ${isLatest ? 'fa-check-double' : 'fa-check'}"></i>
                </div>
                <div class="flex-grow pb-6 border-l-2 ${isLatest ? 'border-transparent' : 'border-slate-200'} pl-4 -ml-4">
                    <p class="font-bold text-slate-900 text-sm">${t.title}</p>
                    <p class="text-xs text-slate-500 mt-0.5">${t.time} • Oleh: <strong class="text-slate-700">${t.actor}</strong></p>
                    <p class="text-xs text-slate-600 mt-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200">${t.note}</p>
                </div>
            </div>
        `;
    });

    let actionButtons = '';
    if (app.surat_balasan_number) {
        actionButtons += `
            <button onclick="openSuratModal('${app.registration_number}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition shadow">
                <i class="fa-solid fa-file-contract"></i>
                <span>Lihat Surat Balasan Resmi</span>
            </button>
        `;
    }
    if (app.certificate) {
        actionButtons += `
            <button onclick="openCertificateModal('${app.registration_number}')" class="bg-amber-600 hover:bg-amber-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition shadow">
                <i class="fa-solid fa-award"></i>
                <span>Lihat & Cetak Sertifikat Digital</span>
            </button>
        `;
    }

    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-200 gap-4">
                <div>
                    <span class="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Nomor Registrasi: ${app.registration_number}</span>
                    <h3 class="text-2xl font-black text-slate-900 mt-2">${app.applicant_name}</h3>
                    <p class="text-xs text-slate-600 mt-0.5">${app.institution} • ${app.major}</p>
                </div>
                <div>${statusBadge}</div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                    <span class="text-slate-500 block">Jenis Pelayanan</span>
                    <strong class="text-slate-900 uppercase">${app.type}</strong>
                </div>
                <div>
                    <span class="text-slate-500 block">Unit Penempatan</span>
                    <strong class="text-slate-900">${app.unit_name || 'Sekretariat'}</strong>
                </div>
                <div>
                    <span class="text-slate-500 block">Periode</span>
                    <strong class="text-slate-900">${app.start_date} s/d ${app.end_date}</strong>
                </div>
            </div>

            <h4 class="font-bold text-slate-900 text-sm mb-4">Riwayat Pemeriksaan & Disposisi (Audit Trail)</h4>
            <div class="space-y-1">
                ${timelineItemsHtml}
            </div>

            ${actionButtons ? `<div class="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-3">${actionButtons}</div>` : ''}
        </div>
    `;
}

// ==============================================================================
// 7. SURAT BALASAN RESMI KEDINASAN (MODAL & CETAK)
// ==============================================================================
function openSuratModal(regNo = 'MAG-2026-00125') {
    const app = state.applications.find(a => a.registration_number === regNo) || state.applications[0];
    state.currentLetter = app;

    document.getElementById('letter-reg-no').innerText = app.registration_number;
    document.getElementById('letter-nomor-surat').innerText = app.surat_balasan_number || '560/124/DISNAKERTRANS/IX/2026';
    document.getElementById('letter-applicant-name').innerText = app.applicant_name;
    document.getElementById('letter-applicant-nim').innerText = app.applicant_id_number;
    document.getElementById('letter-institution').innerText = app.institution;
    document.getElementById('letter-unit-name').innerText = app.unit_name;
    document.getElementById('letter-periode').innerText = `${app.start_date} s/d ${app.end_date}`;

    // Generate QR Code untuk surat
    generateQrCode('letter-qr-container', `https://disnakertrans.sulselprov.go.id/verifikasi?doc=${app.surat_balasan_number || '560-124'}`);

    document.getElementById('modal-surat-balasan').classList.remove('hidden');
}

function closeSuratModal() {
    document.getElementById('modal-surat-balasan').classList.add('hidden');
}

// ==============================================================================
// 8. SERTIFIKAT DIGITAL 2 SISI & TRANSKRIP PENILAIAN RESMI
// ==============================================================================
function openCertificateModal(regNo = 'MAG-2026-00125') {
    const app = state.applications.find(a => a.registration_number === regNo && a.certificate) || state.applications[0];
    state.currentCert = app;

    const cert = app.certificate || {
        number: "CERT/MAG/2026/00125",
        qr_code: "VERIF-SULSEL-560-MAG-00125-NURHAYANI",
        head_officer: "Dr. Jayadi Nas, S.Sos, M.Si",
        head_rank: "Pembina Utama Muda",
        head_nip: "19710501 199803 1 004",
        head_title: "KEPALA DINAS TENAGA KERJA DAN TRANSMIGRASI PROVINSI SULAWESI SELATAN",
        issue_date: "26 Oktober 2026"
    };

    const ev = app.evaluation || {
        discipline: 96,
        cooperation: 98,
        initiative: 95,
        attitude: 95,
        responsibility: 98,
        average: 96.4,
        predicate: "SANGAT BAIK",
        mentor_name: "SURIAMMA, SH, M.Si",
        mentor_position: "Kepala Sub Bagian Umum Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan",
        mentor_rank: "Pembina (IV/a)",
        mentor_nip: "19780712 200212 2 011",
        evaluated_at: "26 Oktober 2026"
    };

    // Sisi Depan (Muka Sertifikat)
    document.getElementById('cert-number').innerText = cert.number;
    document.getElementById('cert-applicant-name').innerText = app.applicant_name.toUpperCase();
    document.getElementById('cert-institution').innerText = app.institution.toUpperCase();
    document.getElementById('cert-date-range').innerText = `pada 26 Agustus 2026 sampai dengan 27 Oktober 2026`;
    document.getElementById('cert-predicate').innerText = ev.predicate;
    document.getElementById('cert-head-officer').innerText = cert.head_officer;
    document.getElementById('cert-head-rank').innerText = cert.head_rank;
    document.getElementById('cert-head-nip').innerText = cert.head_nip;

    // Sisi Belakang (Transkrip Kriteria Penilaian Sesuai Lampiran Pengguna)
    document.getElementById('eval-score-disiplin').innerText = ev.discipline;
    document.getElementById('eval-score-kerjasama').innerText = ev.cooperation;
    document.getElementById('eval-score-inisiatif').innerText = ev.initiative;
    document.getElementById('eval-score-sikap').innerText = ev.attitude;
    document.getElementById('eval-score-tanggungjawab').innerText = ev.responsibility;
    document.getElementById('eval-score-average').innerText = ev.average;
    document.getElementById('eval-mentor-name').innerText = ev.mentor_name;
    document.getElementById('eval-mentor-position').innerText = ev.mentor_position;
    document.getElementById('eval-mentor-rank').innerText = ev.mentor_rank;
    document.getElementById('eval-mentor-nip').innerText = ev.mentor_nip;

    // QR Codes
    generateQrCode('cert-front-qr', `https://disnakertrans.sulselprov.go.id/verifikasi?cert=${cert.number}`);
    generateQrCode('cert-back-qr', `https://disnakertrans.sulselprov.go.id/verifikasi?eval=${cert.number}`);

    document.getElementById('modal-sertifikat').classList.remove('hidden');
    switchCertView('front');
}

function switchCertView(side) {
    const frontView = document.getElementById('cert-view-front');
    const backView = document.getElementById('cert-view-back');
    const btnFront = document.getElementById('btn-cert-side-front');
    const btnBack = document.getElementById('btn-cert-side-back');

    if (side === 'front') {
        frontView.classList.remove('hidden');
        backView.classList.add('hidden');
        btnFront.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white shadow";
        btnBack.className = "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200";
    } else {
        frontView.classList.add('hidden');
        backView.classList.remove('hidden');
        btnBack.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white shadow";
        btnFront.className = "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200";
    }
}

function closeCertificateModal() {
    document.getElementById('modal-sertifikat').classList.add('hidden');
}

function printCurrentCertificate() {
    window.print();
}

// ==============================================================================
// 9. VERIFIKASI KEASLIAN DOKUMEN & SERTIFIKAT PUBLIK
// ==============================================================================
function runVerification() {
    const input = document.getElementById('verify-cert-input');
    const resultBox = document.getElementById('verify-result-box');
    const code = (input?.value || '').trim();

    if (!code) {
        showAlert("Silakan masukkan Nomor Sertifikat atau Kode QR Verifikasi.", "Input Kosong");
        return;
    }

    const app = state.applications.find(a => 
        (a.certificate && a.certificate.number.toLowerCase() === code.toLowerCase()) ||
        (a.certificate && a.certificate.qr_code.toLowerCase() === code.toLowerCase()) ||
        (a.registration_number.toLowerCase() === code.toLowerCase())
    );

    resultBox.classList.remove('hidden');

    if (app && app.certificate) {
        resultBox.innerHTML = `
            <div class="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 text-left animate-fade">
                <div class="flex items-center space-x-3 pb-4 border-b border-emerald-200">
                    <div class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow">
                        <i class="fa-solid fa-stamp"></i>
                    </div>
                    <div>
                        <span class="bg-emerald-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Resmi Terdaftar</span>
                        <h4 class="font-black text-emerald-900 text-xl mt-0.5">SERTIFIKAT ASLI & TERVERIFIKASI</h4>
                        <p class="text-xs text-emerald-800">Database Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-slate-700">
                    <div>
                        <span class="text-slate-500 block">Nama Peserta:</span>
                        <strong class="text-slate-900 text-sm">${app.applicant_name}</strong>
                    </div>
                    <div>
                        <span class="text-slate-500 block">Nomor Sertifikat:</span>
                        <strong class="text-slate-900 text-sm font-mono">${app.certificate.number}</strong>
                    </div>
                    <div>
                        <span class="text-slate-500 block">Asal Perguruan Tinggi:</span>
                        <strong class="text-slate-900">${app.institution}</strong>
                    </div>
                    <div>
                        <span class="text-slate-500 block">Unit Penempatan:</span>
                        <strong class="text-slate-900">${app.unit_name}</strong>
                    </div>
                    <div>
                        <span class="text-slate-500 block">Predikat Kinerja:</span>
                        <strong class="text-emerald-700 font-bold">${app.evaluation?.predicate || 'Sangat Baik'} (Nilai: ${app.evaluation?.average || '96.4'})</strong>
                    </div>
                    <div>
                        <span class="text-slate-500 block">Pejabat Penandatangan:</span>
                        <strong class="text-slate-900">${app.certificate.head_officer}</strong>
                    </div>
                </div>

                <div class="mt-6 pt-4 border-t border-emerald-200 flex justify-end">
                    <button onclick="openCertificateModal('${app.registration_number}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 shadow">
                        <i class="fa-solid fa-eye"></i>
                        <span>Buka Tampilan Sertifikat Lengkap</span>
                    </button>
                </div>
            </div>
        `;
    } else {
        resultBox.innerHTML = `
            <div class="bg-rose-50 border-2 border-rose-400 rounded-2xl p-6 sm:p-8 text-center animate-fade">
                <i class="fa-solid fa-triangle-exclamation text-rose-600 text-3xl mb-2"></i>
                <h4 class="font-black text-rose-900 text-lg">DOKUMEN TIDAK TERDAFTAR</h4>
                <p class="text-xs text-rose-800 max-w-md mx-auto mt-1">
                    Nomor sertifikat <strong>"${code}"</strong> tidak ditemukan dalam basis data resmi Disnakertrans Sulsel. Harap periksa kembali nomor yang Anda masukkan.
                </p>
            </div>
        `;
    }
}

// ==============================================================================
// 10. LIST SERTIFIKAT TERBIT DI TAB SERTIFIKAT
// ==============================================================================
function renderCertificatesList() {
    const container = document.getElementById('certs-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const validCerts = state.applications.filter(a => a.certificate);

    validCerts.forEach(a => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between hover:shadow-xl transition";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-4">
                    <span class="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase">Sertifikat Resmi</span>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">🟢 Valid</span>
                </div>
                <h3 class="text-xl font-black text-slate-900">${a.applicant_name}</h3>
                <p class="text-xs text-slate-600 font-semibold mt-0.5">${a.institution}</p>
                <div class="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                    <p><strong class="text-slate-800">Nomor:</strong> <span class="font-mono">${a.certificate.number}</span></p>
                    <p><strong class="text-slate-800">Unit:</strong> ${a.unit_name}</p>
                    <p><strong class="text-slate-800">Predikat:</strong> <span class="text-emerald-700 font-bold">${a.evaluation?.predicate || 'Sangat Baik'}</span></p>
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                <button onclick="openCertificateModal('${a.registration_number}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl text-xs transition shadow flex items-center space-x-1.5">
                    <i class="fa-solid fa-eye"></i><span>Lihat Dokumen</span>
                </button>
                <button onclick="openCertificateModal('${a.registration_number}'); setTimeout(printCurrentCertificate, 300);" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl text-xs transition flex items-center space-x-1">
                    <i class="fa-solid fa-print"></i><span>Cetak</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==============================================================================
// 11. PANEL ADMIN LAYANAN (MODERASI & PENILAIAN)
// ==============================================================================
function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Hitung statistik
    document.getElementById('stat-total-magang').innerText = state.applications.filter(a => a.type === 'magang').length;
    document.getElementById('stat-total-riset').innerText = state.applications.filter(a => a.type === 'penelitian').length;
    document.getElementById('stat-pending-verify').innerText = state.applications.filter(a => a.status === 'verifikasi_berkas' || a.status === 'diajukan').length;
    document.getElementById('stat-total-cert').innerText = state.applications.filter(a => a.certificate).length;

    state.applications.forEach(a => {
        let badgeHtml = '';
        if (a.status === 'selesai' || a.status === 'disetujui') {
            badgeHtml = '<span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">🟢 Disetujui/Selesai</span>';
        } else if (a.status === 'verifikasi_berkas') {
            badgeHtml = '<span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-bold">🟡 Verifikasi TU</span>';
        } else {
            badgeHtml = '<span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-bold">🔵 Diproses Unit</span>';
        }

        const tr = document.createElement('tr');
        tr.className = "border-b border-slate-200 hover:bg-slate-50 transition text-sm";
        tr.innerHTML = `
            <td class="py-4 px-4">
                <strong class="text-blue-900 block font-mono text-xs">${a.registration_number}</strong>
                <span class="font-bold text-slate-900">${a.applicant_name}</span>
                <span class="text-xs text-slate-500 block uppercase">${a.type}</span>
            </td>
            <td class="py-4 px-4">
                <span class="text-slate-800 font-medium">${a.institution}</span>
                <span class="text-xs text-slate-500 block">${a.major}</span>
            </td>
            <td class="py-4 px-4 text-slate-700 font-medium">${a.unit_name || 'Sekretariat'}</td>
            <td class="py-4 px-4 text-center">${badgeHtml}</td>
            <td class="py-4 px-4 text-right space-x-1">
                ${a.status === 'verifikasi_berkas' ? `
                    <button onclick="adminApproveApp('${a.registration_number}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow transition">Setujui</button>
                    <button onclick="adminRejectApp('${a.registration_number}')" class="bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-3 py-1.5 rounded-lg text-xs transition">Tolak</button>
                ` : ''}
                ${!a.certificate ? `
                    <button onclick="openEvaluationModal('${a.registration_number}')" class="bg-amber-600 hover:bg-amber-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow transition">Input Nilai & Sertifikat</button>
                ` : `
                    <button onclick="openCertificateModal('${a.registration_number}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition">Sertifikat Aktif</button>
                `}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function adminApproveApp(regNo) {
    const app = state.applications.find(a => a.registration_number === regNo);
    if (!app) return;

    app.status = "disetujui";
    app.surat_balasan_number = `560/${Math.floor(100 + Math.random() * 899)}/DISNAKERTRANS/X/2026`;
    app.timeline.push({
        time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
        title: "Permohonan Disetujui Pimpinan",
        note: `Surat balasan resmi telah diterbitkan dengan Nomor: ${app.surat_balasan_number}.`,
        actor: "Admin Disnakertrans"
    });

    state.save();
    renderAdminTable();
    showAlert(`Permohonan ${regNo} atas nama ${app.applicant_name} telah disetujui.\nSurat Balasan diterbitkan otomatis.`, "Persetujuan Berhasil");
}

function adminRejectApp(regNo) {
    const reason = prompt("Masukkan alasan penolakan/revisi:", "Berkas pengantar belum berstempel basah universitas.");
    if (!reason) return;

    const app = state.applications.find(a => a.registration_number === regNo);
    if (!app) return;

    app.status = "ditolak";
    app.timeline.push({
        time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
        title: "Permohonan Perlu Perbaikan / Ditolak",
        note: reason,
        actor: "Staf Verifikator TU"
    });

    state.save();
    renderAdminTable();
    showAlert(`Permohonan ${regNo} telah ditolak dengan catatan: ${reason}`, "Penolakan Dicatat");
}

function openEvaluationModal(regNo) {
    const app = state.applications.find(a => a.registration_number === regNo);
    if (!app) return;

    document.getElementById('eval-modal-applicant-name').innerText = app.applicant_name;
    document.getElementById('eval-modal-reg-no').value = app.registration_number;
    document.getElementById('modal-input-penilaian').classList.remove('hidden');
}

function closeEvaluationModal() {
    document.getElementById('modal-input-penilaian').classList.add('hidden');
}

function submitEvaluationAndIssueCertificate(e) {
    e.preventDefault();
    const regNo = document.getElementById('eval-modal-reg-no').value;
    const app = state.applications.find(a => a.registration_number === regNo);
    if (!app) return;

    const nDisiplin = parseFloat(document.getElementById('input-eval-disiplin').value) || 95;
    const nKerjasama = parseFloat(document.getElementById('input-eval-kerjasama').value) || 95;
    const nInisiatif = parseFloat(document.getElementById('input-eval-inisiatif').value) || 95;
    const nSikap = parseFloat(document.getElementById('input-eval-sikap').value) || 95;
    const nTanggungJawab = parseFloat(document.getElementById('input-eval-tanggungjawab').value) || 95;

    const avg = ((nDisiplin + nKerjasama + nInisiatif + nSikap + nTanggungJawab) / 5).toFixed(1);
    let predikat = "SANGAT BAIK";
    if (avg < 60) predikat = "KURANG";
    else if (avg < 75) predikat = "CUKUP";
    else if (avg < 90) predikat = "BAIK";

    app.evaluation = {
        discipline: nDisiplin,
        cooperation: nKerjasama,
        initiative: nInisiatif,
        attitude: nSikap,
        responsibility: nTanggungJawab,
        average: avg,
        predicate: predikat,
        mentor_name: "SURIAMMA, SH, M.Si",
        mentor_position: "Kepala Sub Bagian Umum Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan",
        mentor_rank: "Pembina (IV/a)",
        mentor_nip: "19780712 200212 2 011",
        evaluated_at: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    const certSeq = String(Math.floor(100 + Math.random() * 899)).padStart(5, '0');
    app.certificate = {
        number: `CERT/MAG/2026/${certSeq}`,
        qr_code: `VERIF-SULSEL-560-MAG-${certSeq}-${app.applicant_name.replace(/\s+/g, '').toUpperCase()}`,
        head_officer: "Dr. Jayadi Nas, S.Sos, M.Si",
        head_rank: "Pembina Utama Muda",
        head_nip: "19710501 199803 1 004",
        head_title: "KEPALA DINAS TENAGA KERJA DAN TRANSMIGRASI PROVINSI SULAWESI SELATAN",
        issue_date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    app.status = "selesai";
    app.timeline.push({
        time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }) + ' WITA',
        title: "Sertifikat Magang & Transkrip Terbit",
        note: `Nomor Sertifikat: ${app.certificate.number} dengan nilai rata-rata ${avg} (${predikat}).`,
        actor: "Pembimbing & Kepala Dinas"
    });

    state.save();
    closeEvaluationModal();
    renderAdminTable();
    showAlert(`Sertifikat Resmi dan Transkrip Nilai untuk ${app.applicant_name} berhasil diterbitkan!\nNomor: ${app.certificate.number}`, "Sertifikat Berhasil Diterbitkan", () => {
        openCertificateModal(regNo);
    });
}

// ==============================================================================
// 12. LOGBOOK & FEEDBACK PESERTA
// ==============================================================================
function addLogbookEntry(e) {
    e.preventDefault();
    const title = document.getElementById('log-title').value.trim();
    const date = document.getElementById('log-date').value;

    const newLog = {
        id: Date.now(),
        date: date || new Date().toLocaleDateString('id-ID'),
        title: title,
        status: "Menunggu Verifikasi"
    };

    state.logbooks.unshift(newLog);
    state.save();
    e.target.reset();
    renderLogbooks();
    showAlert("Catatan logbook berhasil ditambahkan dan menunggu paraf pembimbing.", "Logbook Tersimpan");
}

function renderLogbooks() {
    const list = document.getElementById('logbook-list');
    if (!list) return;
    list.innerHTML = '';
    state.logbooks.forEach(l => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs";
        item.innerHTML = `
            <div>
                <strong class="text-slate-900 block text-sm">${l.title}</strong>
                <span class="text-slate-500">${l.date}</span>
            </div>
            <span class="px-2.5 py-1 rounded-full font-bold ${l.status === 'Terverifikasi' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                ${l.status}
            </span>
        `;
        list.appendChild(item);
    });
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    showAlert("Terima kasih atas ulasan Anda. Masukan ini menjadi bagian dari Indeks Kepuasan Masyarakat (IKM) Disnakertrans Sulsel.", "Evaluasi Diterima");
    e.target.reset();
}

// ==============================================================================
// 13. MODAL ALERT SISTEM & KONFIGURASI SUPABASE
// ==============================================================================
function showAlert(message, title = "Informasi Layanan", callback = null) {
    document.getElementById('sys-modal-title').innerText = title;
    document.getElementById('sys-modal-message').innerText = message;
    const modal = document.getElementById('modal-system-alert');
    modal.classList.remove('hidden');

    const okBtn = document.getElementById('sys-modal-btn');
    okBtn.onclick = () => {
        modal.classList.add('hidden');
        if (typeof callback === 'function') callback();
    };
}

function closeSystemAlert() {
    document.getElementById('modal-system-alert').classList.add('hidden');
}

function openSupabaseModal() {
    document.getElementById('supabase-url-input').value = localStorage.getItem('supabase_url') || window.SUPABASE_URL || 'https://wnouqolivmlpcaesmusb.supabase.co';
    document.getElementById('supabase-key-input').value = localStorage.getItem('supabase_key') || window.SUPABASE_ANON_KEY || 'sb_publishable_F_iaW6gj63vYlO8T8m5p0g_cu7hCEhb';
    document.getElementById('modal-supabase-config').classList.remove('hidden');
}

function closeSupabaseModal() {
    document.getElementById('modal-supabase-config').classList.add('hidden');
}

function saveSupabaseConfig(e) {
    e.preventDefault();
    const url = document.getElementById('supabase-url-input').value.trim();
    const key = document.getElementById('supabase-key-input').value.trim();

    if (url && key) {
        localStorage.setItem('supabase_url', url);
        localStorage.setItem('supabase_key', key);
        state.initSupabase();
        closeSupabaseModal();
        showAlert("Koneksi Supabase berhasil disimpan! Sistem akan menyinkronkan data dengan tabel PostgreSQL Anda.", "Supabase Terhubung");
    } else {
        localStorage.removeItem('supabase_url');
        localStorage.removeItem('supabase_key');
        state.isSupabaseConnected = false;
        state.updateConnectionStatusBadge();
        closeSupabaseModal();
        showAlert("Konfigurasi dihapus. Aplikasi kembali menggunakan data lokal yang tersimpan di peramban.", "Mode Lokal Aktif");
    }
}

// Generator QR Code
function generateQrCode(elementId, text) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = '';
    if (window.QRCode) {
        new QRCode(el, {
            text: text,
            width: 72,
            height: 72,
            colorDark: "#0B2545",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });
    } else {
        el.innerText = "[QR VALID]";
    }
}

// ==============================================================================
// 14. SISTEM LOGIN (PESERTA & ADMIN) + MANAJEMEN UNIT ADMIN
// ==============================================================================
function openLoginModal(defaultRole = 'peserta') {
    switchLoginRole(defaultRole);
    document.getElementById('modal-login').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('modal-login').classList.add('hidden');
}

function switchLoginRole(role) {
    const tabPeserta = document.getElementById('login-tab-peserta');
    const tabAdmin = document.getElementById('login-tab-admin');
    const formPeserta = document.getElementById('form-login-peserta');
    const formAdmin = document.getElementById('form-login-admin');

    if (role === 'admin') {
        tabAdmin.className = "py-2 rounded-lg bg-white text-slate-900 shadow-sm transition";
        tabPeserta.className = "py-2 rounded-lg text-slate-600 hover:text-slate-900 transition";
        formAdmin.classList.remove('hidden');
        formPeserta.classList.add('hidden');
    } else {
        tabPeserta.className = "py-2 rounded-lg bg-white text-blue-700 shadow-sm transition";
        tabAdmin.className = "py-2 rounded-lg text-slate-600 hover:text-slate-900 transition";
        formPeserta.classList.remove('hidden');
        formAdmin.classList.add('hidden');
    }
}

function handlePesertaLogin(e) {
    e.preventDefault();
    const idVal = document.getElementById('login-peserta-id').value.trim();
    const passVal = document.getElementById('login-peserta-pass').value.trim();

    const matchedApp = state.applications.find(a =>
        (a.registration_number.toLowerCase() === idVal.toLowerCase() || a.applicant_id_number === idVal) &&
        a.applicant_id_number === passVal
    );

    if (!matchedApp) {
        showAlert("Nomor Registrasi / NIM atau Kata Sandi tidak cocok. Pastikan Anda memasukkan NIM dengan benar.", "Login Gagal");
        return;
    }

    state.currentUser = {
        role: 'peserta',
        name: matchedApp.applicant_name,
        identifier: matchedApp.applicant_id_number,
        regNo: matchedApp.registration_number,
        institution: matchedApp.institution,
        major: matchedApp.major,
        status: matchedApp.status
    };
    state.save();
    updateAuthNavbarUI();
    closeLoginModal();
    e.target.reset();
    switchTab('dashboard-peserta');
}

async function handleAdminLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-admin-email').value.trim();
    const password = document.getElementById('login-admin-pass').value.trim();

    let authenticated = false;

    // 1. Cek via Supabase Auth jika user terdaftar di Supabase
    if (state.supabase && email.includes('@')) {
        try {
            const { data, error } = await state.supabase.auth.signInWithPassword({ email, password });
            if (!error && data?.user) {
                authenticated = true;
            }
        } catch (err) {
            console.warn("Supabase auth fallback ke kredensial lokal:", err);
        }
    }

    // 2. Fallback kredensial Admin Instansi standar
    if (!authenticated && (email === 'admin@disnaker.sulsel.go.id' || email === 'admin') && password === 'admin123') {
        authenticated = true;
    }

    if (!authenticated) {
        showAlert("Email / Username atau Kata Sandi Admin salah.", "Akses Ditolak");
        return;
    }

    state.currentUser = {
        role: 'admin',
        name: 'Operator Admin Disnaker',
        email: email
    };
    state.save();
    updateAuthNavbarUI();
    closeLoginModal();
    e.target.reset();
    switchTab('dashboard-admin');
}

async function logoutUser() {
    if (state.supabase) {
        try { await state.supabase.auth.signOut(); } catch (e) {}
    }
    state.currentUser = null;
    state.save();
    updateAuthNavbarUI();
    switchTab('beranda');
    showAlert("Anda telah keluar dari sistem.", "Logout Berhasil");
}

function updateAuthNavbarUI() {
    const pesertaLabel = document.getElementById('nav-label-peserta');
    const adminLabel = document.getElementById('nav-label-admin');
    if (pesertaLabel) {
        pesertaLabel.innerText = (state.currentUser && state.currentUser.role === 'peserta')
            ? state.currentUser.name.split(' ')[0]
            : 'Peserta';
    }
    if (adminLabel) {
        adminLabel.innerText = (state.currentUser && state.currentUser.role === 'admin')
            ? 'Panel Admin'
            : 'Admin';
    }
}

function renderPesertaDashboardHeader() {
    if (!state.currentUser || state.currentUser.role !== 'peserta') return;
    const nameEl = document.getElementById('peserta-dash-name');
    const metaEl = document.getElementById('peserta-dash-meta');
    if (nameEl) nameEl.innerText = state.currentUser.name;
    if (metaEl) metaEl.innerText = `NIM: ${state.currentUser.identifier} • ${state.currentUser.institution} • ${state.currentUser.major}`;
}

// --- CRUD Unit / Bidang oleh Admin ---
function renderAdminUnitsTable() {
    const tbody = document.getElementById('admin-units-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (state.units.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-8 text-slate-500 text-xs">
                    Belum ada unit/bidang yang ditambahkan. Klik <strong>"+ Tambah Unit / Bidang"</strong> di atas untuk mengisi data.
                </td>
            </tr>`;
        return;
    }

    state.units.forEach(u => {
        const badgeClass = u.status === 'Menerima'
            ? 'bg-emerald-100 text-emerald-800'
            : u.status === 'Kuota Terbatas'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800';

        const tr = document.createElement('tr');
        tr.className = "border-b border-slate-200 hover:bg-slate-50 transition text-xs";
        tr.innerHTML = `
            <td class="p-4">
                <span class="font-mono text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">${u.code}</span>
                <strong class="block text-slate-900 text-sm mt-1">${u.name}</strong>
                <span class="text-slate-500">${u.sub_name}</span>
            </td>
            <td class="p-4 text-center font-bold">${u.quota} Orang</td>
            <td class="p-4 text-center font-bold">${u.filled} Terisi</td>
            <td class="p-4 text-center"><span class="px-2.5 py-1 rounded-full font-bold ${badgeClass}">${u.status}</span></td>
            <td class="p-4 text-right space-x-1">
                <button onclick="openUnitModal('${u.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-lg transition">Edit</button>
                <button onclick="deleteUnit('${u.id}')" class="bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-3 py-1.5 rounded-lg transition">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openUnitModal(unitId = null) {
    const titleEl = document.getElementById('unit-modal-title');
    if (unitId) {
        const u = state.units.find(x => x.id === unitId);
        if (!u) return;
        titleEl.innerText = "Edit Unit / Bidang";
        document.getElementById('unit-form-id').value = u.id;
        document.getElementById('unit-form-code').value = u.code;
        document.getElementById('unit-form-name').value = u.name;
        document.getElementById('unit-form-subname').value = u.sub_name;
        document.getElementById('unit-form-desc').value = u.description || '';
        document.getElementById('unit-form-quota').value = u.quota;
        document.getElementById('unit-form-filled').value = u.filled;
        document.getElementById('unit-form-status').value = u.status;
    } else {
        titleEl.innerText = "Tambah Unit / Bidang Magang";
        document.getElementById('unit-form-id').value = '';
        document.getElementById('unit-form-code').value = '';
        document.getElementById('unit-form-name').value = '';
        document.getElementById('unit-form-subname').value = '';
        document.getElementById('unit-form-desc').value = '';
        document.getElementById('unit-form-quota').value = 10;
        document.getElementById('unit-form-filled').value = 0;
        document.getElementById('unit-form-status').value = 'Menerima';
    }
    document.getElementById('modal-unit-form').classList.remove('hidden');
}

function closeUnitModal() {
    document.getElementById('modal-unit-form').classList.add('hidden');
}

async function saveUnitForm(e) {
    e.preventDefault();
    const id = document.getElementById('unit-form-id').value;
    const payload = {
        code: document.getElementById('unit-form-code').value.trim().toUpperCase(),
        name: document.getElementById('unit-form-name').value.trim(),
        sub_name: document.getElementById('unit-form-subname').value.trim(),
        description: document.getElementById('unit-form-desc').value.trim(),
        quota: parseInt(document.getElementById('unit-form-quota').value, 10) || 10,
        filled: parseInt(document.getElementById('unit-form-filled').value, 10) || 0,
        status: document.getElementById('unit-form-status').value
    };

    if (id) {
        const idx = state.units.findIndex(u => u.id === id);
        if (idx !== -1) state.units[idx] = { ...state.units[idx], ...payload };
        if (state.supabase) {
            await state.supabase.from('units').update(payload).eq('id', id);
        }
    } else {
        const newUnit = {
            id: (crypto && crypto.randomUUID) ? crypto.randomUUID() : 'unit-' + Date.now(),
            ...payload
        };
        state.units.push(newUnit);
        if (state.supabase) {
            await state.supabase.from('units').insert([newUnit]);
        }
    }

    state.save();
    renderAdminUnitsTable();
    renderUnitsTable();
    closeUnitModal();
    showAlert(`Unit "${payload.name}" berhasil disimpan.`, "Unit Diperbarui");
}

async function deleteUnit(unitId) {
    state.units = state.units.filter(u => u.id !== unitId);
    state.save();
    if (state.supabase) {
        await state.supabase.from('units').delete().eq('id', unitId);
    }
    renderAdminUnitsTable();
    renderUnitsTable();
    showAlert("Unit telah dihapus dari daftar.", "Unit Dihapus");
}

// ==============================================================================
// 15. INISIALISASI SAAT DOM READY
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
    updateAuthNavbarUI();
    renderUnitsTable();
    renderAdminUnitsTable();
    renderLogbooks();
    renderAdminTable();
    renderCertificatesList();
});

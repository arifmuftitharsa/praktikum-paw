import Link from "next/link";

const fokus = [
  {
    judul: "AI Agent Engineering",
    deskripsi: "Membangun agen AI: LLM, RAG, tool use, dan orkestrasi.",
  },
  {
    judul: "Data Science & MLOps",
    deskripsi: "Fondasi pendukung untuk memahami data dan deployment model.",
  },
  {
    judul: "Pengembangan Web",
    deskripsi: "Backend dan API untuk menjalankan sistem AI yang dibangun.",
  },
];

const kolom =
  "rounded border px-3 py-2 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function Beranda() {
  return (
    <>
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
        Lewati ke konten utama
      </a>
      <header className="border-b">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl flex-col gap-3 p-4
                        sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href="/" className="text-lg font-bold text-brand">
            Arif Mufti Tharsa
          </Link>
          <ul className="flex gap-6">
            <li>
              <a href="#fitur">Fokus Saya</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="konten" className="mx-auto max-w-6xl p-4">
        <section aria-labelledby="judul-utama">
          <h1 id="judul-utama">
            Mahasiswa Ilmu Komputer yang fokus membangun AI Agent
          </h1>
          <p>
            Belajar dari fondasi engineering hingga AI Agent Engineering, dengan
            Data Science dan MLOps sebagai pendukung.
          </p>
        </section>

        <section id="fitur" aria-labelledby="judul-fitur">
          <h2 id="judul-fitur">Fokus Saya</h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fokus.map((f) => (
              <li key={f.judul}>
                <article className="h-full rounded-lg border p-6">
                  <h3 className="text-lg font-semibold">{f.judul}</h3>
                  <p className="mt-2 text-gray-700">{f.deskripsi}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section aria-labelledby="judul-cara">
            <h2 id="judul-cara">Cara Saya Belajar</h2>
            <p className="mt-2 text-gray-700">
              Kuat di konsep, dan sedang memperdalam sisi implementasi lewat
              praktik langsung. Mengikuti roadmap bertahap dari fondasi
              engineering menuju AI Agent Engineering.
            </p>
          </section>

          <aside
            aria-label="Informasi tambahan"
            className="rounded-lg bg-gray-100 p-6"
          >
            <h3 className="font-semibold">Info Singkat</h3>
            <p className="mt-2 text-sm text-gray-700">
              Semester 5, Ilmu Komputer, Universitas Pertamina
            </p>
          </aside>
        </div>

        <section id="kontak" aria-labelledby="judul-kontak">
          <h2 id="judul-kontak">Hubungi Saya</h2>
          <form className="mt-4 grid max-w-xl gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="nama" className="font-medium">
                Nama lengkap
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                autoComplete="name"
                className={kolom}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Surel
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-describedby="email-bantuan"
                className={kolom}
              />
              <p id="email-bantuan" className="text-sm text-gray-600">
                Gunakan alamat surel yang aktif.
              </p>
            </div>

            <fieldset className="flex flex-col gap-1">
              <legend className="font-medium">Perihal</legend>
              <label>
                <input type="radio" name="perihal" value="kolaborasi" />{" "}
                Kolaborasi proyek
              </label>
              <label>
                <input type="radio" name="perihal" value="tanya" /> Tanya jawab
              </label>
            </fieldset>

            <div className="flex flex-col gap-1">
              <label htmlFor="pesan" className="font-medium">
                Pesan
              </label>
              <textarea id="pesan" name="pesan" rows={4} className={kolom} />
            </div>

            <button
              type="submit"
              className={kolom + " bg-brand font-semibold text-white"}
            >
              Kirim
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t">
        <p>© 2026 Arif Mufti Tharsa</p>
      </footer>
    </>
  );
}

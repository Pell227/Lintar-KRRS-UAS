"use client";

import { useState } from "react";

const courses = [
  { id: "IF301", name: "Basis Data", sks: 4, dosen: "Dr. Budi Santoso" },
  { id: "IF302", name: "Pemrograman Web", sks: 4, dosen: "Rina Kartika, M.Kom." },
  { id: "IF303", name: "Rekayasa Perangkat Lunak", sks: 2, dosen: "Andi Pratama, M.T." },
  { id: "IF304", name: "Jaringan Komputer", sks: 4, dosen: "Dewi Lestari, M.Kom." },
  { id: "MKU201", name: "Bahasa Inggris", sks: 2, dosen: "Sarah Wijaya, M.Pd." },
];

export default function Krrs() {
  const [selected, setSelected] = useState<string[]>(["IF301", "IF302"]);
  const totalCredits = courses
    .filter((course) => selected.includes(course.id))
    .reduce((total, course) => total + course.sks, 0);

  function toggleCourse(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-800 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-2xl bg-[linear-gradient(115deg,#7c1009_0%,#ab1509_60%,#c52a1d_100%)] px-6 py-7 text-white shadow-lg shadow-[#ab1509]/20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Portal Akademik</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pengisian KRRS</h1>
          <p className="mt-2 text-white/85">Pilih mata kuliah untuk rencana studi semester ini.</p>
        </header>

        <section className="mb-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-black/5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Mahasiswa</p>
            <p className="mt-1 font-semibold">Windriew</p>
            <p className="text-sm text-slate-600">535250168</p>
          </div>
          <label className="text-sm font-medium text-slate-700">
            Semester
            <select className="mt-2 block w-full rounded-lg border border-[#d8c89b] bg-white px-3 py-2 text-slate-800 outline-none focus:border-[#ab1509] focus:ring-2 focus:ring-[#ab1509]/15" defaultValue="Ganjil 2026/2027">
              <option>Ganjil 2026/2027</option>
              <option>Genap 2026/2027</option>
            </select>
          </label>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-black/5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eee4c7] px-5 py-4">
            <div>
              <h2 className="font-semibold">Daftar Mata Kuliah</h2>
              <p className="mt-1 text-sm text-slate-500">Pilih mata kuliah yang ingin diambil.</p>
            </div>
            <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-[#ab1509]">{selected.length} mata kuliah dipilih</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="w-14 px-5 py-3">Pilih</th>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Mata Kuliah</th>
                  <th className="px-4 py-3">Dosen</th>
                  <th className="px-5 py-3 text-right">SKS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <input aria-label={`Pilih ${course.name}`} type="checkbox" checked={selected.includes(course.id)} onChange={() => toggleCourse(course.id)} className="h-4 w-4 rounded border-slate-300 accent-[#ab1509]" />
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-600">{course.id}</td>
                    <td className="px-4 py-4 font-semibold">{course.name}</td>
                    <td className="px-4 py-4 text-slate-600">{course.dosen}</td>
                    <td className="px-5 py-4 text-right">{course.sks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">Batas pengambilan semester ini: <strong>24 SKS</strong></p>
            <div className="flex items-center justify-between gap-5 sm:justify-end">
              <p className="text-sm text-slate-600">Total: <strong className="text-lg text-slate-900">{totalCredits} SKS</strong></p>
              <button type="button" className="rounded-lg bg-[#ab1509] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#861007]">Simpan KRRS</button>
            </div>
          </div>
        </section>
        <p className="mt-4 text-center text-xs text-slate-500">Mockup tampilan awal · Data mata kuliah masih contoh</p>
      </div>
    </main>
  );
}

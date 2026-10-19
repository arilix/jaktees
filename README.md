# Jaktees

Situs web jasa sablon kaos Jakarta, dibangun ulang dengan Next.js 16, React 19, Tailwind CSS v4, dan shadcn/ui.

## Halaman

| Rute | Deskripsi |
| --- | --- |
| `/` | Beranda |
| `/about` | Tentang |
| `/services` | Layanan |
| `/portfolio` | Portofolio |
| `/blog` | Blog |
| `/contact` | Kontak |
| `/order` | Pemesanan (formulir mengarah ke WhatsApp) |
| `/jasa-sablon-kaos-jakarta` | Halaman landing |

## Tech Stack

- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS v4
- shadcn/ui (Base UI) dan Lucide React
- Font: Bebas Neue dan Barlow

## Memulai

Membutuhkan Node.js >= 24.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan dev server |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Pengecekan ESLint |
| `npm run typecheck` | Pengecekan TypeScript |
| `npm run check` | Lint + typecheck + build |

## Struktur

```
src/
  app/                       # Rute Next.js
  components/sites/jaktees/  # Komponen situs (Header, Footer, pages, forms, dll.)
public/
  fonts/  images/            # Aset statis
docs/
  research/                  # Catatan riset dan evidence
  design-references/         # Screenshot referensi
```

## Catatan

- Formulir pemesanan dan kontak membuka WhatsApp (tanpa backend).
- Data layanan dibangun ulang dari informasi publik; blog dan grid Instagram masih kosong.

## Lisensi

MIT

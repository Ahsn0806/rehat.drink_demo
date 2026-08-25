import { useState } from 'react'
import imgHero from '@/imports/SaveClip.App_755246494_18149732701486126_7311757209999406296_n.jpg'
import imgMenu from '@/imports/SaveClip.App_760604240_18150752089486126_1817505870450850355_n.jpg'
import imgTired from '@/imports/SaveClip.App_758409365_18150160462486126_5255168974009828113_n.jpg'
import imgLogo from '@/imports/SaveClip.App_756138179_18149961757486126_6277398987361860618_n.jpg'

const WA_NUMBER = '6285799800175'
const IG_HANDLE = 'rehat.drink'

const products = [
  {
    name: 'Banana',
    desc: 'Creamy, smooth, fresh',
    price: '12K',
    color: '#f5d77a',
    accent: '#c9a824',
  },
  {
    name: 'Cappucino',
    desc: 'Bold, classic, intense.',
    price: '10K',
    color: '#c8a07a',
    accent: '#8a5c30',
  },
  {
    name: 'Thai Tea',
    desc: 'Rich, aromatic, refreshing.',
    price: '10K',
    color: '#e09050',
    accent: '#b05a10',
  },
  {
    name: 'Matcha',
    desc: 'Earthy, calm, authentic.',
    price: '12K',
    color: '#8ab860',
    accent: '#4a7a2a',
  },
]

// Decorative palm leaf SVG (matches brand aesthetic)
function PalmLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M80 10 C60 60 20 100 10 180 M80 10 C100 60 140 100 150 180 M80 10 C50 80 30 140 40 210 M80 10 C110 80 130 140 120 210 M80 10 C70 90 60 150 55 220 M80 10 C90 90 100 150 105 220"
        stroke="#3b1f2b"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  )
}

// Minimal QR pattern (decorative)
function QRCode() {
  const size = 19
  const seed = WA_NUMBER.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const cells: boolean[][] = []
  for (let r = 0; r < size; r++) {
    cells[r] = []
    for (let c = 0; c < size; c++) {
      const finder =
        (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7)
      if (finder) {
        const fr = r < 7 ? r : r - (size - 7)
        const fc = c < 7 ? c : c >= size - 7 ? c - (size - 7) : c
        cells[r][c] =
          fr === 0 || fr === 6 || fc === 0 || fc === 6 || (fr >= 2 && fr <= 4 && fc >= 2 && fc <= 4)
      } else {
        const h = ((seed * 31 + r * 17 + c * 13) ^ (r * 7) ^ (c * 11)) % 100
        cells[r][c] = h < 46
      }
    }
  }
  const cell = 9
  const q = 10
  const total = size * cell + q * 2
  return (
    <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`} xmlns="http://www.w3.org/2000/svg">
      <rect width={total} height={total} fill="#f0e6c4" rx="6" />
      {cells.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect key={`${r}-${c}`} x={q + c * cell} y={q + r * cell} width={cell - 1} height={cell - 1} rx={1} fill="#3b1f2b" />
          ) : null
        )
      )}
    </svg>
  )
}

// Rehat logo mark in brand colors
function RehatLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'text-5xl' : size === 'sm' ? 'text-xl' : 'text-3xl'
  const sub = size === 'lg' ? 'text-sm tracking-[0.35em]' : size === 'sm' ? 'text-[9px] tracking-[0.25em]' : 'text-xs tracking-[0.3em]'
  return (
    <div className="leading-none text-left">
      <div className={`font-display ${cls} leading-[0.9]`}>
        <span style={{ color: '#1e4a30' }}>re</span>
        <br />
        <span style={{ color: '#e07a1e' }}>hat.</span>
      </div>
      <div className={`font-display ${sub} mt-1`} style={{ color: '#3b1f2b' }}>
        d r i n k
      </div>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState<'menu' | 'order'>('menu')

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#f0e6c4' }}>
      {/* Palm leaves decoration */}
      <PalmLeaf className="fixed top-0 left-0 w-32 h-44 pointer-events-none" />
      <PalmLeaf className="fixed top-0 right-0 w-32 h-44 pointer-events-none scale-x-[-1]" />
      <PalmLeaf className="fixed bottom-0 right-0 w-28 h-40 pointer-events-none rotate-180" />

      <div className="relative max-w-md mx-auto">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <img
            src={imgHero}
            alt="rehat.drink — Your New Friend Has Come"
            className="w-full object-cover"
            style={{ maxHeight: 520 }}
          />
          {/* Brand badge overlay */}
          <div
            className="absolute bottom-4 left-4 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(240,230,196,0.9)', backdropFilter: 'blur(6px)' }}
          >
            <RehatLogo size="sm" />
          </div>
        </section>

        {/* ── TAGLINE STRIP ── */}
        <div
          className="px-6 py-5 text-center"
          style={{ background: '#3b1f2b' }}
        >
          <p className="font-display text-sm tracking-widest uppercase" style={{ color: '#e07a1e' }}>
            Kalau Capek,
          </p>
          <p className="font-script text-3xl mt-0.5" style={{ color: '#f0e6c4' }}>
            Rehat Dulu Aja!
          </p>
        </div>

        {/* ── TABS ── */}
        <div className="flex border-b-2" style={{ borderColor: '#3b1f2b22', background: '#ede0b4' }}>
          {(['menu', 'order'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className="flex-1 py-3 font-display text-sm uppercase tracking-widest transition-all"
              style={
                activeSection === tab
                  ? { color: '#e07a1e', borderBottom: '3px solid #e07a1e', background: 'transparent' }
                  : { color: '#3b1f2b88', borderBottom: '3px solid transparent' }
              }
            >
              {tab === 'menu' ? 'Menu' : 'Pesan'}
            </button>
          ))}
        </div>

        {/* ── MENU SECTION ── */}
        {activeSection === 'menu' && (
          <div className="px-4 py-6 space-y-4">

            {/* Promo header */}
            <div className="text-center mb-2">
              <p className="font-display text-xs tracking-widest uppercase" style={{ color: '#8a6030' }}>
                Our Drinks
              </p>
              <h2 className="font-display text-3xl mt-1" style={{ color: '#3b1f2b' }}>
                YOUR FRIEND
              </h2>
              <p className="font-script text-2xl" style={{ color: '#e07a1e' }}>
                Is Ready!
              </p>
            </div>

            {/* Product cards */}
            {products.map(p => (
              <div
                key={p.name}
                className="flex items-center justify-between rounded-2xl px-5 py-4 relative overflow-hidden"
                style={{ background: p.color + '28', border: `1.5px solid ${p.color}55` }}
              >
                {/* Color blob */}
                <div
                  className="absolute right-0 top-0 w-24 h-24 rounded-full opacity-20 -translate-y-4 translate-x-6"
                  style={{ background: p.accent }}
                />
                <div className="relative">
                  <h3 className="font-display text-xl" style={{ color: '#3b1f2b' }}>
                    {p.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: '#3b1f2b99' }}>
                    {p.desc}
                  </p>
                </div>
                <div
                  className="font-display text-3xl relative"
                  style={{ color: p.accent }}
                >
                  {p.price}
                </div>
              </div>
            ))}

            {/* Menu poster image */}
            <div className="rounded-2xl overflow-hidden mt-2" style={{ border: '1.5px solid #3b1f2b18' }}>
              <img
                src={imgMenu}
                alt="Menu lengkap rehat.drink — Banana, Cappucino, Thai Tea, Matcha"
                className="w-full object-cover"
              />
            </div>

            {/* "When you tired" promo image */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid #3b1f2b18' }}>
              <img
                src={imgTired}
                alt="Your friend when you tired — Thai Tea dan Matcha"
                className="w-full object-cover"
              />
            </div>

            {/* Logo / brand image */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid #3b1f2b18' }}>
              <img
                src={imgLogo}
                alt="rehat.drink logo — Kalau Capek, Rehat Dulu Aja!"
                className="w-full object-cover"
              />
            </div>

            {/* Order CTA — always visible at bottom of menu */}
            <div className="pt-2 pb-4">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-5 rounded-2xl transition-all hover:opacity-90 active:scale-95 group"
                style={{ background: '#25D366', color: '#fff', boxShadow: '0 10px 30px #25D36660' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-base uppercase tracking-wider">Click Here to Order</div>
                    <div className="text-xs opacity-80 mt-0.5">+62 857-9980-0175</div>
                  </div>
                </div>
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* ── ORDER SECTION ── */}
        {activeSection === 'order' && (
          <div className="px-4 py-8 space-y-6">

            {/* Brand center */}
            <div className="flex justify-center">
              <RehatLogo size="lg" />
            </div>

            <p className="text-center text-sm" style={{ color: '#8a6030' }}>
              Maksimal pemesanan <strong>H-1</strong> sebelum hari pengiriman
            </p>

            {/* Click to Order */}
            <div
              className="rounded-3xl p-6 text-center space-y-5"
              style={{ background: 'rgba(255,255,255,0.55)', border: '1.5px solid #3b1f2b18' }}
            >
              <div>
                <p className="font-display text-xs tracking-widest uppercase" style={{ color: '#8a6030' }}>
                  Siap order?
                </p>
                <p className="font-script text-2xl mt-1" style={{ color: '#3b1f2b' }}>
                  Langsung chat aja!
                </p>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-4 rounded-2xl font-display uppercase tracking-wider transition-all hover:opacity-90 active:scale-95 group"
                style={{ background: '#25D366', color: '#fff', boxShadow: '0 8px 24px #25D36655' }}
              >
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-base">Click Here to Order</div>
                    <div className="text-xs font-normal opacity-80 tracking-normal normal-case">+62 857-9980-0175</div>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Instagram */}
            <div
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.45)', border: '1.5px solid #3b1f2b18' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-xs tracking-widest uppercase" style={{ color: '#8a6030' }}>
                  Follow kami
                </p>
                <a
                  href={`https://instagram.com/${IG_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-base transition-opacity hover:opacity-70"
                  style={{ color: '#3b1f2b' }}
                >
                  @{IG_HANDLE}
                </a>
              </div>
            </div>

            {/* Order note */}
            <div
              className="rounded-2xl p-4 text-center"
              style={{ background: '#e07a1e18', border: '1.5px solid #e07a1e44' }}
            >
              <p className="text-sm" style={{ color: '#3b1f2b' }}>
                <span className="font-display">DM for order</span> via Instagram atau WhatsApp.
                <br />
                <span className="text-xs" style={{ color: '#8a6030' }}>
                  Tiktok: rehat.drink
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer
          className="text-center py-6 px-4"
          style={{ borderTop: '1px solid #3b1f2b18' }}
        >
          <RehatLogo size="sm" />
          <div className="flex items-center justify-center gap-1.5 mt-3" style={{ color: '#8a6030' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span className="text-xs">Yogyakarta</span>
          </div>
          <p className="text-xs mt-1.5" style={{ color: '#8a605088' }}>
            © 2026 rehat.drink · Kalau Capek, Rehat Dulu Aja!
          </p>
        </footer>

      </div>
    </div>
  )
}

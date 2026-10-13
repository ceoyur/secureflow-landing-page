import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    links: [
      ['Features', '#features'],
      ['Platform', '#platform'],
      ['Pricing', '#pricing'],
      ['FAQ', '#faq'],
    ],
    demo: 'Request demo',
    navLabel: 'Primary navigation',
    menuLabel: 'Toggle menu',
    homeLabel: 'SecureFlow home',
  },
  ru: {
    links: [
      ['Возможности', '#features'],
      ['Платформа', '#platform'],
      ['Тарифы', '#pricing'],
      ['FAQ', '#faq'],
    ],
    demo: 'Запросить демо',
    navLabel: 'Основная навигация',
    menuLabel: 'Открыть меню',
    homeLabel: 'SecureFlow — главная',
  },
}

function LanguageSwitch({ lang, setLang, compact = false }) {
  return (
    <div className={`flex items-center rounded-xl border border-white/10 bg-white/5 p-1 ${compact ? 'w-fit' : ''}`} aria-label="Language switcher">
      {['en', 'ru'].map((value) => {
        const active = lang === value
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLang(value)}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              active ? 'bg-cyan-300 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
            aria-pressed={active}
          >
            {value.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = copy[lang]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white" aria-label={t.homeLabel}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
            <ShieldCheck size={19} />
          </span>
          <span className="text-lg tracking-tight">SecureFlow</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label={t.navLabel}>
          {t.links.map(([label, href]) => (
            <a key={href} href={href} className="text-[15px] text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <a href="#contact" className="button-lift rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            {t.demo}
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.menuLabel}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <div className="mb-2 px-3">
              <LanguageSwitch lang={lang} setLang={setLang} compact />
            </div>
            {t.links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950">
              {t.demo}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

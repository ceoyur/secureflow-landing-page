import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

export default function Footer() {
  const { lang } = useLanguage()
  const copy = lang === 'ru'
    ? { platform: 'Платформа', contact: 'Контакты' }
    : { platform: 'Platform', contact: 'Contact' }

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-page flex flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-300 transition hover:text-white">
          <ShieldCheck size={17} className="text-cyan-300" />
          <span className="font-medium text-white">SecureFlow</span>
        </a>
        <div className="flex items-center gap-5">
          <a href="#platform" className="transition hover:text-slate-300">{copy.platform}</a>
          <a href="#contact" className="transition hover:text-slate-300">{copy.contact}</a>
        </div>
        <p>© 2026 SecureFlow</p>
      </div>
    </footer>
  )
}

import { useLanguage } from '../i18n.jsx'

const copy = {
  en: [
    ['65%', 'less alert noise'],
    ['4.8×', 'faster triage'],
    ['99.9%', 'platform uptime'],
    ['24/7', 'continuous visibility'],
  ],
  ru: [
    ['65%', 'меньше шума от алертов'],
    ['4.8×', 'быстрее первичный анализ'],
    ['99.9%', 'доступность платформы'],
    ['24/7', 'непрерывный мониторинг'],
  ],
}

export default function Metrics() {
  const { lang } = useLanguage()
  const metrics = copy[lang]

  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div data-reveal className="container-page grid grid-cols-2 divide-x divide-y divide-white/5 sm:grid-cols-4 sm:divide-y-0">
        {metrics.map(([value, label]) => (
          <div key={label} className="px-4 py-8 text-center sm:py-10">
            <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[.16em] text-slate-500 sm:text-xs">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

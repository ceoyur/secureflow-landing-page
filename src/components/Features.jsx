import { Activity, BellRing, Fingerprint, Network, ShieldAlert, Workflow } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

const icons = [Activity, ShieldAlert, Network, Fingerprint, BellRing, Workflow]

const copy = {
  en: {
    kicker: 'Built for focused teams',
    title: 'Everything you need to turn signals into decisions.',
    intro: 'SecureFlow is designed for lean security teams that need visibility, context and repeatable response — without adding another noisy dashboard.',
    features: [
      ['Unified telemetry', 'Bring endpoint, network and data-protection signals into one investigation timeline.'],
      ['Threat prioritization', 'Reduce alert fatigue with context-aware scoring and risk-based incident grouping.'],
      ['Network visibility', 'Spot unusual connections, lateral movement and abnormal device behavior quickly.'],
      ['Identity context', 'Connect user, device and access events to understand who did what and where.'],
      ['Smart detections', 'Turn noisy indicators into actionable alerts with clear evidence and next steps.'],
      ['Response workflows', 'Standardize triage and remediation with guided actions your team can repeat.'],
    ],
  },
  ru: {
    kicker: 'Для компактных команд ИБ',
    title: 'Всё необходимое, чтобы превращать сигналы в решения.',
    intro: 'SecureFlow создан для команд, которым нужны видимость, контекст и повторяемый процесс реагирования — без ещё одной перегруженной консоли.',
    features: [
      ['Единая телеметрия', 'Объединяйте события с конечных устройств, сети и средств защиты данных в одной временной линии расследования.'],
      ['Приоритизация угроз', 'Снижайте усталость от алертов с помощью контекстной оценки и группировки инцидентов по риску.'],
      ['Видимость сети', 'Быстро выявляйте необычные соединения, латеральное перемещение и аномальное поведение устройств.'],
      ['Контекст идентификации', 'Связывайте пользователя, устройство и события доступа, чтобы понимать, кто, что и где сделал.'],
      ['Умные обнаружения', 'Преобразуйте шумные индикаторы в понятные алерты с доказательствами и следующими шагами.'],
      ['Сценарии реагирования', 'Стандартизируйте первичный анализ и устранение последствий с помощью повторяемых действий.'],
    ],
  },
}

export default function Features() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div data-reveal className="max-w-3xl">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-7 text-slate-400">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.features.map(([title, text], index) => {
            const Icon = icons[index]
            return (
              <article data-reveal key={title} className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-white/[0.065] hover:shadow-glow">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-105">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-slate-400">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

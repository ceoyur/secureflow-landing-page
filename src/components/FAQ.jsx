import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    kicker: 'FAQ',
    title: 'Questions before you start?',
    intro: 'A few common answers about deployment, integrations and how SecureFlow fits into an existing security stack.',
    faqs: [
      ['How long does setup take?', 'Most teams connect their first data source in under 30 minutes. SecureFlow is designed to work with existing security tooling rather than replace it on day one.'],
      ['Do we need to replace our EDR or DLP?', 'No. SecureFlow sits above your existing telemetry and helps correlate, investigate and prioritize what those tools already detect.'],
      ['Can SecureFlow support hybrid environments?', 'Yes. The platform is designed for cloud, on-premises and hybrid environments, with role-based access and flexible integrations.'],
      ['Is this suitable for a small security team?', 'Yes. The workflow is intentionally streamlined for teams that need strong visibility without operating a large SOC stack.'],
    ],
  },
  ru: {
    kicker: 'FAQ',
    title: 'Есть вопросы перед началом?',
    intro: 'Короткие ответы о внедрении, интеграциях и месте SecureFlow в существующей инфраструктуре безопасности.',
    faqs: [
      ['Сколько времени занимает подключение?', 'Большинство команд подключают первый источник данных менее чем за 30 минут. SecureFlow дополняет существующие средства защиты, а не требует заменять их в первый день.'],
      ['Нужно ли заменять существующие EDR или DLP?', 'Нет. SecureFlow использует уже имеющуюся телеметрию и помогает коррелировать, расследовать и приоритизировать то, что обнаруживают ваши средства защиты.'],
      ['Поддерживаются ли гибридные среды?', 'Да. Платформа рассчитана на облачную, локальную и гибридную инфраструктуру, поддерживает ролевой доступ и гибкие интеграции.'],
      ['Подойдёт ли платформа небольшой команде ИБ?', 'Да. Рабочий процесс специально упрощён для команд, которым нужна хорошая видимость без необходимости разворачивать большой SOC-стек.'],
    ],
  },
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="faq" className="scroll-mt-20 border-y border-white/5 bg-white/[0.018] py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div data-reveal>
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-4 max-w-lg text-[1.02rem] leading-7 text-slate-400">{t.intro}</p>
        </div>

        <div className="space-y-3">
          {t.faqs.map(([q, a], index) => {
            const active = open === index
            return (
              <div data-reveal key={q} className="glass-card overflow-hidden rounded-2xl transition hover:border-cyan-300/15">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                >
                  <span className="text-[15px] font-medium text-white sm:text-base">{q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-slate-400 transition ${active ? 'rotate-180' : ''}`} />
                </button>
                {active && <p className="px-5 pb-5 text-[15px] leading-6 text-slate-400">{a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Check } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    kicker: 'Simple pricing',
    title: 'Start small. Scale when you need it.',
    intro: 'No long implementation cycle. Choose a plan and connect your first data source in minutes.',
    popular: 'Popular',
    perMonth: '/ month',
    contactSales: 'Contact sales',
    startFree: 'Start free',
    plans: [
      ['Monitor', '$49', 'For small teams building security visibility.', ['Up to 250 endpoints', 'Core detections', '30-day retention', 'Email support']],
      ['Respond', '$149', 'For teams that investigate and respond every day.', ['Up to 1,500 endpoints', 'Advanced correlation', '90-day retention', 'Response workflows', 'Priority support']],
      ['Enterprise', 'Custom', 'For complex environments and multiple business units.', ['Unlimited scale', 'Custom integrations', '365-day retention', 'SSO / RBAC', 'Dedicated success engineer']],
    ],
  },
  ru: {
    kicker: 'Простые тарифы',
    title: 'Начните с малого. Масштабируйтесь по мере роста.',
    intro: 'Без длительного внедрения. Выберите тариф и подключите первый источник данных за несколько минут.',
    popular: 'Популярный',
    perMonth: '/ месяц',
    contactSales: 'Связаться с отделом продаж',
    startFree: 'Начать бесплатно',
    plans: [
      ['Monitor', '$49', 'Для небольших команд, которым нужна базовая видимость ИБ.', ['До 250 конечных устройств', 'Базовые обнаружения', 'Хранение 30 дней', 'Поддержка по e-mail']],
      ['Respond', '$149', 'Для команд, которые ежедневно расследуют события и реагируют на них.', ['До 1 500 конечных устройств', 'Расширенная корреляция', 'Хранение 90 дней', 'Сценарии реагирования', 'Приоритетная поддержка']],
      ['Enterprise', 'По запросу', 'Для сложной инфраструктуры и нескольких бизнес-подразделений.', ['Неограниченное масштабирование', 'Индивидуальные интеграции', 'Хранение 365 дней', 'SSO / RBAC', 'Выделенный специалист сопровождения']],
    ],
  },
}

export default function Pricing() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-4 text-[1.02rem] leading-7 text-slate-400">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {t.plans.map(([name, price, desc, features], index) => {
            const featured = index === 1
            const custom = index === 2
            return (
              <article data-reveal key={name} className={`relative rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${featured ? 'border border-cyan-300/30 bg-cyan-300/[0.055] shadow-glow' : 'glass-card hover:border-cyan-300/20'}`}>
                {featured && <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-slate-950">{t.popular}</span>}
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 min-h-12 text-[15px] leading-6 text-slate-400">{desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-white">{price}</span>
                  {!custom && <span className="pb-1 text-sm text-slate-500">{t.perMonth}</span>}
                </div>
                <a href="#contact" className={`mt-6 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${featured ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}>
                  {custom ? t.contactSales : t.startFree}
                </a>
                <div className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-[15px] text-slate-300">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check size={12} /></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

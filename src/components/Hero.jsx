import { ArrowRight, CheckCircle2, Radio, ShieldCheck, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    badge: 'AI-powered security operations',
    titleA: 'See threats early.',
    titleB: 'Respond faster.',
    description: 'SecureFlow unifies endpoint, network and data-loss signals into one focused workspace — so security teams can investigate less noise and act on what matters.',
    primary: 'Start free assessment',
    secondary: 'Explore platform',
    benefits: ['No credit card', 'Deploy in minutes', 'SOC-ready workflows'],
    overview: 'Security overview',
    telemetry: 'Live environment telemetry',
    live: 'Live',
    stats: [['98.7%', 'Protected endpoints'], ['07', 'Open incidents'], ['3.2m', 'Events / day']],
    detections: 'Recent detections',
    last15: 'Last 15 min',
    events: [['Endpoint-044', 'Suspicious PowerShell chain', 'High'], ['VPN-Gateway', 'Impossible travel blocked', 'Medium'], ['Finance-LT12', 'Sensitive upload prevented', 'High']],
    severity: { High: 'High', Medium: 'Medium' },
    risk: 'Risk posture',
    week: '+6 this week',
  },
  ru: {
    badge: 'Операции ИБ с поддержкой ИИ',
    titleA: 'Замечайте угрозы раньше.',
    titleB: 'Реагируйте быстрее.',
    description: 'SecureFlow объединяет сигналы с конечных устройств, сети и DLP в едином рабочем пространстве, чтобы команда ИБ быстрее расследовала важные события и не терялась в шуме.',
    primary: 'Начать бесплатную оценку',
    secondary: 'Посмотреть платформу',
    benefits: ['Без банковской карты', 'Запуск за несколько минут', 'Готовые SOC-процессы'],
    overview: 'Обзор безопасности',
    telemetry: 'Телеметрия среды в реальном времени',
    live: 'Онлайн',
    stats: [['98.7%', 'Защищённых устройств'], ['07', 'Открытых инцидентов'], ['3.2m', 'Событий в сутки']],
    detections: 'Последние обнаружения',
    last15: 'За 15 минут',
    events: [['Endpoint-044', 'Подозрительная цепочка PowerShell', 'High'], ['VPN-Gateway', 'Заблокирован невозможный маршрут входа', 'Medium'], ['Finance-LT12', 'Заблокирована отправка конфиденциальных данных', 'High']],
    severity: { High: 'Высокий', Medium: 'Средний' },
    risk: 'Уровень защищённости',
    week: '+6 за неделю',
  },
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      <div className="container-page relative grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20 xl:gap-16">
        <div data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3.5 py-2 text-xs font-medium text-cyan-200 sm:text-sm">
            <Sparkles size={14} /> {t.badge}
          </div>

          <h1 className="mt-6 max-w-3xl text-[2.85rem] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[3.55rem] lg:text-[4.1rem] xl:text-[4.45rem]">
            {t.titleA} <span className="text-cyan-300">{t.titleB}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-slate-400 sm:text-lg">{t.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="button-lift inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200 sm:text-[15px]">
              {t.primary} <ArrowRight size={17} />
            </a>
            <a href="#platform" className="button-lift inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10 sm:text-[15px]">
              {t.secondary}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 sm:text-[15px]">
            {t.benefits.map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-cyan-300" /> {item}</span>)}
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/[0.06] blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[1.7rem] p-4 shadow-glow sm:p-5 lg:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="text-[15px] font-semibold text-white">{t.overview}</p><p className="mt-1 text-[13px] text-slate-500">{t.telemetry}</p></div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"><Radio size={12} className="animate-pulse" /> {t.live}</div>
            </div>

            <div className="grid gap-3 py-4 sm:grid-cols-3">
              {t.stats.map(([value, label]) => <div key={label} className="rounded-2xl border border-white/8 bg-slate-950/50 p-4 transition hover:border-cyan-300/15"><div className="text-xl font-semibold text-white">{value}</div><div className="mt-1 text-[13px] leading-5 text-slate-500">{label}</div></div>)}
            </div>

            <div className="rounded-2xl border border-white/8 bg-slate-950/55 p-4">
              <div className="mb-4 flex items-center justify-between"><span className="text-[15px] font-medium text-white">{t.detections}</span><span className="text-xs text-slate-500">{t.last15}</span></div>
              <div className="space-y-3">
                {t.events.map(([host, alert, severity]) => (
                  <div key={`${host}-${alert}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition hover:bg-white/[0.045]">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300"><ShieldCheck size={17} /></span>
                    <div className="min-w-0"><p className="truncate text-sm font-medium text-slate-200 sm:text-[15px]">{alert}</p><p className="mt-0.5 text-xs text-slate-500">{host}</p></div>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${severity === 'High' ? 'bg-rose-400/10 text-rose-300' : 'bg-amber-400/10 text-amber-300'}`}>{t.severity[severity]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
              <div><p className="text-xs uppercase tracking-[.18em] text-slate-500">{t.risk}</p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="animate-line h-full w-[82%] rounded-full bg-cyan-300" /></div></div>
              <div className="text-right"><div className="text-2xl font-semibold text-white">82</div><div className="text-xs text-emerald-300">{t.week}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

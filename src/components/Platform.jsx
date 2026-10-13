import { ArrowDownRight, Check, CircleDotDashed, Laptop, Server, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    kicker: 'How it works',
    title: 'One workflow from detection to response.',
    intro: 'Keep investigations consistent. SecureFlow gives analysts the same context and response path every time, whether the signal came from an endpoint, the network or a data-loss policy.',
    steps: [
      ['01', 'Connect', 'Add your endpoint, network and DLP sources through lightweight integrations.'],
      ['02', 'Correlate', 'SecureFlow links events across users, hosts and network activity automatically.'],
      ['03', 'Investigate', 'Review a focused timeline with the evidence needed to make a decision.'],
      ['04', 'Respond', 'Apply guided remediation and document the result in one workflow.'],
    ],
    healthy: 'Healthy',
    endpointFleet: 'Endpoint fleet',
    devices: '1,248 devices reporting',
    monitored: 'Monitored',
    coreServices: 'Core services',
    assets: '46 critical assets',
    incidentCorrelation: 'Incident correlation',
    incidentName: 'Account compromise · Finance-LT12',
    timeline: [
      ['08:41', 'New sign-in from unusual location'],
      ['08:43', 'Suspicious PowerShell child process'],
      ['08:45', 'Sensitive file upload blocked'],
    ],
    actions: ['Reset session', 'Isolate host', 'Open case'],
    recommendation: 'Recommended containment actions are ready.',
  },
  ru: {
    kicker: 'Как это работает',
    title: 'Единый процесс от обнаружения до реагирования.',
    intro: 'Сделайте расследования последовательными. SecureFlow даёт аналитику одинаковый контекст и маршрут реагирования независимо от того, пришёл сигнал с конечного устройства, из сети или из DLP-политики.',
    steps: [
      ['01', 'Подключение', 'Добавьте источники телеметрии конечных устройств, сети и DLP через лёгкие интеграции.'],
      ['02', 'Корреляция', 'SecureFlow автоматически связывает события пользователей, узлов и сетевой активности.'],
      ['03', 'Расследование', 'Анализируйте единую временную линию с доказательствами, необходимыми для принятия решения.'],
      ['04', 'Реагирование', 'Выполняйте рекомендуемые действия и фиксируйте результат в одном процессе.'],
    ],
    healthy: 'В норме',
    endpointFleet: 'Конечные устройства',
    devices: '1 248 устройств передают данные',
    monitored: 'Под контролем',
    coreServices: 'Критичные сервисы',
    assets: '46 критичных активов',
    incidentCorrelation: 'Корреляция инцидента',
    incidentName: 'Компрометация учётной записи · Finance-LT12',
    timeline: [
      ['08:41', 'Новый вход из необычного местоположения'],
      ['08:43', 'Подозрительный дочерний процесс PowerShell'],
      ['08:45', 'Заблокирована отправка конфиденциального файла'],
    ],
    actions: ['Сбросить сессию', 'Изолировать узел', 'Открыть кейс'],
    recommendation: 'Рекомендуемые действия по локализации готовы.',
  },
}

export default function Platform() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="platform" className="scroll-mt-20 border-y border-white/5 bg-white/[0.018] py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div data-reveal>
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-7 text-slate-400">{t.intro}</p>

          <div className="mt-8 space-y-4">
            {t.steps.map(([num, title, text]) => (
              <div key={num} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-cyan-300">{num}</div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-[15px] leading-6 text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/[0.06] blur-3xl" />
          <div className="glass-card relative rounded-[1.75rem] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/10 text-blue-300"><Laptop size={19} /></span>
                  <span className="text-xs text-emerald-300">{t.healthy}</span>
                </div>
                <p className="mt-5 text-sm font-semibold text-white">{t.endpointFleet}</p>
                <p className="mt-1 text-xs text-slate-500">{t.devices}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300"><Server size={19} /></span>
                  <span className="text-xs text-cyan-300">{t.monitored}</span>
                </div>
                <p className="mt-5 text-sm font-semibold text-white">{t.coreServices}</p>
                <p className="mt-1 text-xs text-slate-500">{t.assets}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/8 bg-slate-950/60 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{t.incidentCorrelation}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.incidentName}</p>
                </div>
                <ShieldCheck className="text-cyan-300" size={21} />
              </div>

              <div className="mt-6 space-y-3">
                {t.timeline.map(([time, event], index) => (
                  <div key={event} className="grid grid-cols-[auto_auto_1fr] items-center gap-3 text-sm">
                    <span className="w-11 text-xs text-slate-600">{time}</span>
                    <CircleDotDashed size={15} className={index === 2 ? 'text-rose-300' : 'text-cyan-300'} />
                    <span className="text-slate-300">{event}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.actions.map((action) => (
                  <button key={action} type="button" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] p-4 text-sm text-emerald-200">
              <Check size={17} />
              {t.recommendation}
              <ArrowDownRight className="ml-auto shrink-0" size={17} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

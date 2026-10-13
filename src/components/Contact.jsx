import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const copy = {
  en: {
    title: 'See the full security picture in one place.',
    intro: 'Tell us what you want to improve. SecureFlow helps bring endpoint, network and data-protection signals into one clear workflow.',
    name: 'Name', namePlaceholder: 'Alex Morgan', email: 'Work email', message: 'What would you like to improve?',
    messagePlaceholder: 'Alert triage, endpoint visibility, DLP investigations...', submit: 'Request assessment', submitted: 'Request received',
    success: 'Thanks. Your request has been validated successfully.',
  },
  ru: {
    title: 'Контролируйте события безопасности в одном месте.',
    intro: 'Расскажите, что хотите улучшить. SecureFlow объединяет сигналы конечных устройств, сети и защиты данных в понятный рабочий процесс.',
    name: 'Имя', namePlaceholder: 'Алексей Иванов', email: 'Рабочая почта', message: 'Что вы хотите улучшить?',
    messagePlaceholder: 'Разбор алертов, видимость конечных устройств, расследования DLP...', submit: 'Запросить оценку', submitted: 'Заявка принята',
    success: 'Спасибо. Данные формы успешно прошли проверку.',
  },
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { lang } = useLanguage()
  const t = copy[lang]
  useEffect(() => setSent(false), [lang])

  function submit(e) {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div data-reveal className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.09] via-white/[0.035] to-blue-500/[0.06] p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><ShieldCheck /></span>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-[2.55rem] sm:leading-[1.08]">{t.title}</h2>
              <p className="mt-4 max-w-xl text-[1.02rem] leading-7 text-slate-400">{t.intro}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-300 sm:text-[15px]"><Mail size={17} className="text-cyan-300" /> hello@secureflow.demo</div>
            </div>

            <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 sm:p-6" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-300 sm:text-[15px]">{t.name}<input name="name" required minLength="2" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40" placeholder={t.namePlaceholder} /></label>
                <label className="text-sm text-slate-300 sm:text-[15px]">{t.email}<input name="email" required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40" placeholder="alex@company.com" /></label>
              </div>
              <label className="mt-4 block text-sm text-slate-300 sm:text-[15px]">{t.message}<textarea name="message" required minLength="8" rows="4" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40" placeholder={t.messagePlaceholder} /></label>
              <button type="submit" className="button-lift mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200 sm:text-[15px]">{sent ? t.submitted : t.submit} {!sent && <ArrowRight size={17} />}</button>
              <div aria-live="polite" className="min-h-7">{sent && <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-emerald-300"><CheckCircle2 size={15} />{t.success}</p>}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

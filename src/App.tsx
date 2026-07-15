import { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from './lib/utils'
import { submitLead } from './lib/telegram'
import { ProblemSection } from './sections/ProblemSection'
import { ProgramSection } from './sections/ProgramSection'
import { ResultsSection } from './sections/ResultsSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { InviteSection } from './sections/InviteSection'

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose to-violet-deep flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display font-semibold text-sm tracking-tight text-foreground">
            Проект на автопилоте
          </span>
        </div>

        <a
          href="#form"
          className="rounded-full bg-violet-deep hover:bg-violet-deep/90 text-white px-5 h-10 text-sm font-semibold inline-flex items-center transition-colors"
        >
          Записаться на разбор
        </a>
      </div>
    </header>
  )
}

const HIGHLIGHTS = [
  { label: '6 недель', desc: 'от идеи до запущенного проекта с ИИ-системой' },
  { label: '3 блока', desc: 'второй мозг · упаковка · автопилот' },
  { label: '5 мест', desc: 'пилотная группа — ограниченный набор' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute right-[-80px] top-[-60px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-lavender/20 to-rose/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col items-start gap-6">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Диагностическая сессия
            </div>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-md italic">
              Если у тебя есть сильная идея или экспертность, но она застряла в заметках, а руки не доходят её запустить…
            </p>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-foreground">
              Запусти свой проект{' '}
              <span className="text-gradient">на автопилоте</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              За 6 недель твоя идея превратится в запущенный проект — а рутину
              вроде контента, прогревов и продаж возьмёт на себя ИИ.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href="#form"
                className={cn(
                  'rounded-full bg-violet-deep hover:bg-violet-deep/90',
                  'text-white px-7 h-12 text-base font-semibold',
                  'inline-flex items-center gap-2',
                  'shadow-lg shadow-violet-deep/30 animate-glow-pulse',
                  'transition-colors'
                )}
              >
                Записаться на разбор
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground">
                Бесплатно · 45 минут · онлайн
              </span>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:items-end gap-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose/20 to-violet-deep/15 blur-2xl scale-95"
            />

            <img
              src="/images/photo_2026-06-11_10-13-08.jpg"
              alt="Автор программы"
              className="relative rounded-[2rem] border border-border/60 shadow-2xl shadow-violet-deep/10 object-contain w-full max-w-sm"
              loading="eager"
            />

            <div className="relative rounded-[2rem] bg-card/80 backdrop-blur-xl border border-border/60 shadow-2xl shadow-violet-deep/10 p-8 max-w-sm w-full animate-float-card">
              <p className="text-xs uppercase tracking-[0.25em] text-violet-deep font-semibold mb-6">
                Программа «Проект на автопилоте»
              </p>

              <div className="flex flex-col gap-5">
                {HIGHLIGHTS.map(({ label, desc }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-lavender/30 to-rose/20 flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-violet-deep leading-tight text-center">{label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-muted/60 border border-border/50 px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                Работаем сразу: второй мозг на ИИ, упаковка идеи и автоматизация контента и продаж.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    setErrorMsg('')

    try {
      await submitLead({
        name: String(data.get('name') || ''),
        contact: String(data.get('contact') || ''),
        about: String(data.get('about') || ''),
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Не удалось отправить заявку')
    }
  }

  const isSending = status === 'sending'

  return (
    <section id="form" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-xl px-5">
        <div className="text-center mb-10">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Запись
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Оставь заявку
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Выйду на связь в течение 24 часов и согласуем удобное время.
          </p>
        </div>

        <div className="rounded-3xl bg-card border border-border/60 shadow-card p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center gap-4 py-6">
              <div className="h-14 w-14 rounded-full bg-rose/20 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-violet-deep" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Заявка отправлена!
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Свяжусь с тобой в течение 24 часов и согласуем удобное время для разбора.
              </p>
              <a
                href="https://t.me/anna_sokol_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-violet-deep hover:underline"
              >
                Или напиши мне сразу — @anna_sokol_ai
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Как тебя зовут?"
                  className="h-12 rounded-xl border border-border/80 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="contact">
                  Telegram или телефон
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="@username или +7 999..."
                  className="h-12 rounded-xl border border-border/80 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="about">
                  Кратко о себе и своём деле
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  placeholder="Чем занимаешься, какая идея или проект, где сейчас «затык»..."
                  className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 w-full rounded-xl h-12 bg-violet-deep hover:bg-violet-deep/90 text-white text-base font-semibold shadow-cta transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Отправляю...
                  </>
                ) : (
                  'Записаться на разбор'
                )}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-destructive">
                  {errorMsg || 'Не удалось отправить. Попробуй ещё раз или напиши напрямую ниже.'}
                </p>
              )}

              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, ты соглашаешься с{' '}
                <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-violet-deep transition-colors">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="https://t.me/anna_sokol_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-6 h-11 text-sm font-semibold text-foreground hover:border-violet-deep/50 transition-colors"
          >
            <Send className="h-4 w-4 text-violet-deep" />
            Написать напрямую — @anna_sokol_ai
          </a>
          <p className="text-sm text-muted-foreground">
            Из России удобнее в MAX?{' '}
            <a href="tel:+79200055132" className="font-semibold text-violet-deep hover:underline">
              +7 920 005-51-32
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ProgramSection />
        <HowItWorksSection />
        <ResultsSection />
        <InviteSection />
        <FormSection />
      </main>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-7xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Проект на автопилоте</span>
          <a href="/privacy.html" className="hover:text-violet-deep transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  )
}

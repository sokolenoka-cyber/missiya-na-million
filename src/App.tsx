import { Sparkles, ArrowRight } from 'lucide-react'
import { cn } from './lib/utils'
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
            Миссия на миллион
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

const PAIN_POINTS = [
  'Работаешь много, а денег всё равно не хватает',
  'Не понимаешь, в чём твоя настоящая ценность',
  'Боишься поднять цену — вдруг уйдут все клиенты',
]

const HIGHLIGHTS = [
  { label: '6 недель', desc: 'от идеи до реального проекта' },
  { label: '3 уровня', desc: 'мышление · упаковка · реализация' },
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
              Если у тебя слишком много дипломов, но заработок и проявленность так и остались в мечтах…
            </p>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-foreground">
              Найди свою{' '}
              <span className="text-gradient">Миссию<br className="hidden sm:block" /> на миллион</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Ты чувствуешь, что топчешься на месте: доход не растёт,
              а дело не приносит радости. На разборе найдём, где застряла
              твоя энергия — и что с этим делать прямо сейчас.
            </p>

            <ul className="flex flex-col gap-2.5">
              {PAIN_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-[3px] h-4 w-4 flex-shrink-0 rounded-full bg-rose/30 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-deep" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

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
                Программа «От идеи до реализации»
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
                Работаем сразу: с мышлением, упаковкой и современными ИИ-инструментами.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Заявка отправлена! Свяжусь с тобой в течение 24 часов.')
  }

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="name">
                Имя
              </label>
              <input
                id="name"
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
                rows={4}
                placeholder="Чем занимаешься, в чём чувствуешь «затык»..."
                className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl h-12 bg-violet-deep hover:bg-violet-deep/90 text-white text-base font-semibold shadow-cta transition-colors"
            >
              Записаться на разбор
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Нажимая кнопку, ты соглашаешься с политикой конфиденциальности
            </p>
          </form>
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
          <span>© 2024 Миссия на миллион</span>
          <span>Политика конфиденциальности</span>
        </div>
      </footer>
    </div>
  )
}

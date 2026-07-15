import { CheckCircle2, Quote } from 'lucide-react'

const REVIEWS = [
  {
    text: 'Если раньше я была невидимкой, то сейчас без стеснения везде выкладываю свои объявления и откликаюсь на вакансии. Приходят, спрашивают — сейчас 4 человека на этапе переговоров 🔥',
    author: 'Участница пилотной группы',
  },
  {
    text: 'Слушай, как ты это сделала? 🙌 Можно мини-инструкцию? Пушка-бомба 💣',
    author: 'Участница пилотной группы',
  },
]

const RESULTS = [
  'Упакованная идея, превращённая в понятный проект',
  'Твой второй мозг на ИИ — система, которая помнит и помогает',
  'Продающий сайт или лендинг проекта',
  'Настроенные ИИ-агенты и автоматизация под твои задачи',
  'Контент-система: осмысленные статьи и прогревы с триггерами продаж',
  'Автоматизация постинга в нескольких соцсетях',
  'Маркетинговое исследование ниши и позиционирование',
  'Дорожная карта запуска на ближайшие 90 дней',
]

export function ResultsSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — results list */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-4">
              Результат
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-8">
              Что ты получишь<br />
              <span className="text-gradient">через 6 недель</span>
            </h2>

            <ul className="flex flex-col gap-4">
              {RESULTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-violet-deep mt-[2px]" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — reviews screenshots + invite card */}
          <div className="relative flex flex-col gap-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lavender/25 to-rose/15 blur-2xl scale-95"
            />

            <div className="relative grid gap-4">
              {REVIEWS.map(({ text, author }) => (
                <div
                  key={author + text.slice(0, 12)}
                  className="rounded-2xl bg-card border border-border/60 shadow-lg shadow-violet-deep/10 p-6"
                >
                  <Quote className="h-5 w-5 text-violet-deep/60 mb-3" />
                  <p className="text-foreground leading-relaxed mb-4">{text}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    {author}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative rounded-[2rem] bg-card border border-border/60 shadow-card p-8 lg:p-10 animate-float-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose/20 px-3 py-1 text-xs font-semibold text-violet-deep mb-6 uppercase tracking-widest">
                Пилотная группа
              </div>

              <p className="font-display font-bold text-2xl text-foreground leading-snug mb-6">
                Первый поток — всего 5 мест.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Беру небольшую группу, чтобы вести каждого лично — от идеи до
                запущенного проекта.
              </p>

              {/* Spots counter */}
              <div className="rounded-xl bg-muted/60 border border-border/50 px-5 py-4 flex items-center justify-between mb-8">
                <span className="text-sm text-muted-foreground">Свободных мест</span>
                <span className="font-display font-bold text-2xl text-violet-deep">5</span>
              </div>

              <a
                href="#form"
                className="w-full rounded-xl h-12 bg-violet-deep hover:bg-violet-deep/90 text-white text-base font-semibold shadow-cta transition-colors inline-flex items-center justify-center"
              >
                Хочу в программу
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

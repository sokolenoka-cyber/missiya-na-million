import { CheckCircle2 } from 'lucide-react'

const RESULTS = [
  'Чёткое понимание своей идеи и направления развития',
  'Упакованная концепция проекта или экспертности',
  'Позиционирование и уникальное сообщение для аудитории',
  'План действий на ближайшие 90 дней',
  'Контент-стратегия и идеи для проявления',
  'Подобранные ИИ-инструменты под ваш проект',
  'Снятие основных внутренних ограничений, мешающих действовать',
  'Первые реальные шаги по запуску проекта',
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
              Что вы получите<br />
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

            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="/images/2026-06-11_10-14-26.png"
                alt="Отзыв участницы"
                className="relative rounded-2xl border border-border/60 shadow-lg shadow-violet-deep/10 object-contain bg-white w-full"
                loading="lazy"
              />
              <img
                src="/images/2026-06-11_10-15-08.png"
                alt="Отзыв участницы"
                className="relative rounded-2xl border border-border/60 shadow-lg shadow-violet-deep/10 object-contain bg-white w-full"
                loading="lazy"
              />
            </div>

            <div className="relative rounded-[2rem] bg-card border border-border/60 shadow-card p-8 lg:p-10 animate-float-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose/20 px-3 py-1 text-xs font-semibold text-violet-deep mb-6 uppercase tracking-widest">
                Пилотная группа
              </div>

              <p className="font-display font-bold text-2xl text-foreground leading-snug mb-6">
                «Ищу 5 человек, у которых есть идея проекта, блога, практики или продукта,
                но они не могут начать.»
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Хочу провести пилотную группу и помочь пройти путь от идеи к первым
                действиям — вместе, в поддерживающем пространстве.
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

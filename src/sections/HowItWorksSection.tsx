const WEEKS = [
  {
    week: '01',
    title: 'Идея и второй мозг',
    text: 'Формулируем идею и мотивацию. Собираем твою экспертность в ИИ-систему — второй мозг проекта.',
  },
  {
    week: '02',
    title: 'Аудитория и маркетинг-исследование',
    text: 'Определяем, для кого проект и какую боль он решает. Через ИИ проводим маркетинговое исследование ниши и конкурентов.',
  },
  {
    week: '03',
    title: 'Упаковка и сайт',
    text: 'Собираем позиционирование, оффер и продающий сайт или лендинг — быстро, с помощью ИИ.',
  },
  {
    week: '04',
    title: 'ИИ-агенты и автоматизация',
    text: 'Настраиваем агентов и автоматизацию под твой проект: то, что занимало дни, начинает работать само.',
  },
  {
    week: '05',
    title: 'Контент и прогревы на автопилоте',
    text: 'Строим контент-систему: осмысленные статьи и прогревы с триггерами продаж и вирусными схемами, автопостинг в соцсети.',
  },
  {
    week: '06',
    title: 'Запуск и план на 90 дней',
    text: 'Запускаем проект в мир, фиксируем результаты и собираем дорожную карту на три месяца вперёд.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-4">
              Как это работает
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
              6 недель до автопилота
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Каждая неделя — конкретный блок системы и конкретный результат.
              Никакой воды, только то, что запускает твой проект.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lavender/25 to-rose/15 blur-2xl scale-95"
            />
            <img
              src="/images/photo_2026-06-11_10-13-06.jpg"
              alt="Погружение в работу над проектом"
              className="relative rounded-[2rem] border border-border/60 shadow-2xl shadow-violet-deep/10 object-contain w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent"
          />

          <div className="flex flex-col gap-6">
            {WEEKS.map(({ week, title, text }, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={week}
                  className={`grid lg:grid-cols-2 gap-4 lg:gap-8 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-2'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`rounded-2xl bg-card border border-border/60 shadow-card p-6 ${
                      isEven ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-violet-deep font-semibold mb-2">
                      Неделя {week}
                    </p>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>

                  {/* Week number — center badge */}
                  <div className={`hidden lg:flex ${isEven ? 'justify-start pl-4' : 'justify-end pr-4'} relative z-10`}>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-lavender/40 to-violet-deep/20 border border-border/60 flex items-center justify-center shadow-card">
                      <span className="font-display font-bold text-sm text-violet-deep">{week}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

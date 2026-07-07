import { AlertCircle, Clock, Eye, TrendingDown, Lock, Zap } from 'lucide-react'

const PAINS = [
  {
    icon: AlertCircle,
    title: 'Идея есть, а начать не можете',
    text: 'Откладываете запуск снова и снова, продолжая «готовиться» вместо действий.',
  },
  {
    icon: Eye,
    title: 'Не понимаете свою уникальность',
    text: 'Сложно объяснить, чем вы ценны, — а значит, сложно продавать себя.',
  },
  {
    icon: Lock,
    title: 'Страх проявляться',
    text: 'Внутренние ограничения не дают заявить о себе в полный голос.',
  },
  {
    icon: Clock,
    title: 'Хаос вместо системы',
    text: 'Мысли, идеи, планы — всё перемешано. Непонятно, с чего начать и куда двигаться.',
  },
  {
    icon: TrendingDown,
    title: 'Потенциал больше, чем результат',
    text: 'Вы чувствуете, что способны на большее, но что-то снова и снова тормозит.',
  },
  {
    icon: Zap,
    title: 'ИИ пугает или кажется чужим',
    text: 'Слышите про ИИ-инструменты, но не знаете, как применить их к своему проекту.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-4">
            Узнаёте себя?
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Почему идея остаётся идеей
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Дело не в отсутствии таланта или ресурсов. Дело в том,
            что никто не показал путь от хаоса до реального проекта.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAINS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-float-card"
            >
              <div className="h-10 w-10 rounded-xl bg-rose/20 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-violet-deep" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

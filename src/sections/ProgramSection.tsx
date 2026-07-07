import { Brain, Package, Rocket } from 'lucide-react'

const LEVELS = [
  {
    icon: Brain,
    label: 'Уровень 1',
    title: 'Мышление и ограничения',
    text: 'Работаем с внутренними блоками, страхом проявляться и убеждениями, которые тормозят.',
    color: 'from-rose/30 to-rose/10',
    iconBg: 'bg-rose/20',
  },
  {
    icon: Package,
    label: 'Уровень 2',
    title: 'Упаковка и позиционирование',
    text: 'Формулируем идею, находим уникальность, создаём понятное сообщение для вашей аудитории.',
    color: 'from-lavender/30 to-lavender/10',
    iconBg: 'bg-lavender/20',
  },
  {
    icon: Rocket,
    label: 'Уровень 3',
    title: 'Реализация через ИИ',
    text: 'Подбираем инструменты ИИ под ваш проект, делаем первые реальные шаги к запуску.',
    color: 'from-violet-deep/20 to-violet-deep/5',
    iconBg: 'bg-violet-deep/15',
  },
]

export function ProgramSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-4">
            Программа
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            От идеи до реализации
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Для экспертов, специалистов, консультантов, авторов проектов и творческих людей,
            которые чувствуют потенциал для большего, но не могут превратить идею в реальный проект.
          </p>
        </div>

        {/* Badge + tagline */}
        <div className="flex justify-center mb-16">
          <div className="glass rounded-2xl px-8 py-5 text-center max-w-lg">
            <p className="font-display font-bold text-2xl text-foreground mb-1">6 недель</p>
            <p className="text-muted-foreground text-sm">
              от хаоса в голове до понятной концепции, упаковки и первых шагов реализации
            </p>
          </div>
        </div>

        {/* Three levels */}
        <div className="grid md:grid-cols-3 gap-6">
          {LEVELS.map(({ icon: Icon, label, title, text, color, iconBg }) => (
            <div
              key={title}
              className={`relative rounded-3xl bg-gradient-to-br ${color} border border-border/60 p-8 overflow-hidden animate-float-card`}
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/10 blur-2xl"
              />
              <p className="text-xs uppercase tracking-[0.25em] text-violet-deep font-semibold mb-4">
                {label}
              </p>
              <div className={`h-11 w-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-violet-deep" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          Это не просто обучение.{' '}
          <span className="text-foreground font-medium">
            Это пространство, где идея перестаёт быть мечтой и становится реальным проектом.
          </span>
        </p>
      </div>
    </section>
  )
}

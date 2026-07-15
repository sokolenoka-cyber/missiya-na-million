import { AlertCircle, Clock, Eye, TrendingDown, Lock, Zap } from 'lucide-react'

const PAINS = [
  {
    icon: AlertCircle,
    title: 'Идея есть, а проекта нет',
    text: 'Экспертность и идеи копятся в заметках и в голове, но так и не превращаются в реальный проект.',
  },
  {
    icon: TrendingDown,
    title: 'Всё держится на тебе',
    text: 'Контент, прогревы, продажи — всё вручную. Масштабироваться некуда: ты и есть узкое горлышко.',
  },
  {
    icon: Zap,
    title: 'ИИ используешь хаотично',
    text: 'ChatGPT под рукой, но на выходе потоковый текст без смысла, стратегии и продаж.',
  },
  {
    icon: Clock,
    title: 'Нет системы и второго мозга',
    text: 'Знания, наработки и контент разбросаны. Каждый раз начинаешь с нуля вместо опоры на систему.',
  },
  {
    icon: Eye,
    title: 'Контент не продаёт',
    text: 'Пишешь посты и статьи, но без маркетингового исследования и триггеров они не цепляют и не приводят клиентов.',
  },
  {
    icon: Lock,
    title: 'Кажется, что это слишком сложно',
    text: 'Агенты и автоматизация выглядят как что-то для программистов. Непонятно, с чего вообще начать.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-deep font-semibold mb-4">
            Узнаёшь себя?
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Почему идея остаётся в заметках
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Дело не в нехватке знаний или таланта. Не хватает системы,
            которая упаковывает идею и запускает её — а ИИ делает это
            за часы, а не за месяцы.
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

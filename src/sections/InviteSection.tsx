import { ArrowRight, Sparkles } from 'lucide-react'

export function InviteSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark aurora bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, oklch(0.52 0.16 300 / 0.30) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 70%, oklch(0.87 0.06 350 / 0.20) 0%, transparent 55%),
            oklch(0.18 0.06 295)
          `,
        }}
      />

      {/* Background photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: 'url(/images/cyberpunk_transformation.png)' }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] font-semibold mb-8 bg-white/10 text-white/70 border border-white/15">
          <Sparkles className="h-3.5 w-3.5" />
          Личное приглашение
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
          Твоя идея готова<br />
          <span
            style={{
              background: 'linear-gradient(135deg, oklch(0.87 0.06 350), oklch(0.78 0.10 305))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            стать проектом
          </span>
        </h2>

        <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
          Ищу 5 человек, у кого есть идея — проекта, блога, практики или продукта, —
          но всё держится на ручном труде и откладывается.
        </p>
        <p className="text-white/70 leading-relaxed mb-12 max-w-xl mx-auto">
          Проведу пилотную группу лично: по шагам соберём твою ИИ-систему, упакуем
          идею и запустим проект — с автоматизацией контента, прогревов и продаж.
        </p>

        <a
          href="#form"
          className="inline-flex items-center gap-2 rounded-full bg-white text-violet-deep px-8 h-14 text-base font-bold shadow-cta hover:bg-white/90 transition-colors animate-glow-pulse"
        >
          Записаться на разбор
          <ArrowRight className="h-5 w-5" />
        </a>

        <p className="mt-6 text-white/40 text-sm">
          Бесплатная диагностика · Онлайн · Осталось 5 мест
        </p>
      </div>
    </section>
  )
}

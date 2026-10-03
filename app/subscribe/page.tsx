'use client'

import { Check, Crown, Play } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 'ETB 299',
    period: '/mo',
    description: 'Perfect for casual viewers',
    features: ['HD streaming (720p)', 'Watch on 1 device', 'Limited library access', 'Ad-supported'],
    cta: 'Get Basic',
    highlight: false,
  },
  {
    name: 'Premium',
    price: 'ETB 749',
    period: '/mo',
    description: 'The full StreamVibe experience',
    features: ['4K Ultra HD streaming', 'Watch on 4 devices', 'Full library access', 'No ads', 'Offline downloads', 'Early access to new content'],
    cta: 'Get Premium',
    highlight: true,
  },
  {
    name: 'Family',
    price: 'ETB 1,199',
    period: '/mo',
    description: 'Share with everyone you love',
    features: ['4K Ultra HD streaming', 'Watch on 6 devices', 'Full library access', 'No ads', 'Offline downloads', '6 individual profiles'],
    cta: 'Get Family',
    highlight: false,
  },
]

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#0d0b18] text-white">
      {/* Header */}
      <header className="border-b border-white/[.07] bg-[#0d0b18]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-5xl items-center gap-5 px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20">
              <Play className="ml-0.5 size-4 fill-white text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Stream<span className="text-red-400">Vibe</span></span>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Hero */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            <Crown className="size-3.5" />
            Unlock Premium
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Unlimited streaming,<br />
            <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">zero limits.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            Choose a plan that works for you. Cancel anytime, no questions asked.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition ${
                plan.highlight
                  ? 'border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-transparent shadow-xl shadow-amber-400/5'
                  : 'border-white/10 bg-white/[.03]'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-950 shadow">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  {plan.highlight && <Crown className="size-4 text-amber-400" />}
                  <p className={`text-sm font-semibold ${plan.highlight ? 'text-amber-300' : 'text-slate-300'}`}>{plan.name}</p>
                </div>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="mb-1 text-sm text-slate-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className={`grid size-4 shrink-0 place-items-center rounded-full ${plan.highlight ? 'bg-amber-400/20 text-amber-400' : 'bg-white/10 text-slate-400'}`}>
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full rounded-xl py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-amber-400 text-amber-950 hover:bg-amber-300'
                    : 'border border-white/10 bg-white/[.06] text-white hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </section>
    </main>
  )
}

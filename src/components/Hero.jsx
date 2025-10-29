import React from "react";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Buy, sell, and swap study essentials on your campus
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            A safe, student-first marketplace for textbooks, lab gear, calculators, dorm items and more.
            Verified with your campus email for smooth, local handoffs.
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-2 rounded-xl border bg-white p-2 shadow-sm max-w-xl">
              <Search className="mx-2 text-slate-500" size={18} />
              <input
                aria-label="Search items"
                placeholder="Search for 'Calculus textbook', 'Chem lab coat', 'Desk lamp'..."
                className="w-full outline-none text-sm py-2"
              />
              <button className="rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700">
                Search
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">Popular: TI-84, Organic Chemistry, Macbook charger, Microecon</p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <HeroCard color="from-blue-500 to-indigo-500" title="Textbooks" subtitle="Save up to 80%" />
            <HeroCard color="from-emerald-500 to-teal-500" title="Lab & Tech" subtitle="Gear that works" />
            <HeroCard color="from-rose-500 to-pink-500" title="Dorm & Living" subtitle="Furnish for less" />
            <HeroCard color="from-amber-500 to-orange-500" title="Swap Zone" subtitle="Trade what you have" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ color, title, subtitle }) {
  return (
    <div className={`rounded-2xl p-5 h-36 text-white bg-gradient-to-br ${color} shadow-lg flex flex-col justify-between`}> 
      <div className="text-sm/none opacity-90">{subtitle}</div>
      <div className="text-xl font-semibold">{title}</div>
    </div>
  );
}

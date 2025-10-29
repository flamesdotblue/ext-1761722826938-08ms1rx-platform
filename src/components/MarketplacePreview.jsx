import React from "react";
import { ShoppingBag } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals (8th)",
    course: "MATH 101",
    price: 35,
    condition: "Good",
    campus: "North Campus",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 2,
    title: "Organic Chemistry Model Kit",
    course: "CHEM 231",
    price: 15,
    condition: "Like New",
    campus: "Science Quad",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "TI-84 Plus Calculator",
    course: "Any STEM",
    price: 40,
    condition: "Very Good",
    campus: "Library",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Desk Lamp + Bulb (Swap)",
    course: "Dorm Essentials",
    price: 0,
    condition: "Good",
    campus: "South Residences",
    color: "from-rose-500 to-pink-500",
  },
];

export default function MarketplacePreview() {
  return (
    <section id="market" className="max-w-7xl mx-auto px-6 py-4 md:py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Hot on your campus</h2>
          <p className="mt-2 text-slate-600">Browse what's trending this week. Meet in person—no shipping needed.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
          <ShoppingBag size={18} /> Explore Marketplace
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {items.map((item) => (
          <article key={item.id} className="group rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className={`h-36 bg-gradient-to-br ${item.color} relative`}>
              <div className="absolute inset-0 opacity-15 [mask-image:radial-gradient(closest-side,white,transparent)]" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5">{item.course}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5">{item.condition}</span>
              </div>
              <h3 className="mt-2 font-semibold line-clamp-2 min-h-[3rem]">{item.title}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">
                  {item.price > 0 ? `$${item.price}` : "Swap"}
                </span>
                <span className="text-xs text-slate-500">{item.campus}</span>
              </div>
              <button className="mt-4 w-full rounded-lg border bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50">View details</button>
            </div>
          </article>
        ))}
      </div>

      <div id="how" className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-slate-600">
        <Step number={1} title="Create a listing" desc="Add photos, set a price or swap, tag the course and condition." />
        <Step number={2} title="Chat and agree" desc="Message students, confirm price or trade, choose a pickup spot." />
        <Step number={3} title="Meet on campus" desc="Handoff in minutes—no shipping, no strangers, just classmates." />
      </div>
    </section>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">{number}</div>
      <h4 className="mt-2 font-semibold">{title}</h4>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

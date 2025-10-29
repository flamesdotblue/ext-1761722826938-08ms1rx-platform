import React from "react";
import { Shield, DollarSign, RefreshCw, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Campus-verified accounts",
    desc: "Sign up with your .edu email for a trusted, student-only marketplace.",
  },
  {
    icon: DollarSign,
    title: "Fair, transparent deals",
    desc: "No hidden fees. Simple listings and clear messaging to agree on price or swaps.",
  },
  {
    icon: RefreshCw,
    title: "Buy, sell, or swap",
    desc: "List items for cash or trade textbooks and gear you no longer need.",
  },
  {
    icon: BookOpen,
    title: "Built for study life",
    desc: "Course tags, condition labels, and campus pickup make exchanges effortless.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Safe, simple, student-first</h2>
        <p className="mt-2 text-slate-600">
          Everything you need to keep transactions local, quick, and reliable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <f.icon size={18} />
            </div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

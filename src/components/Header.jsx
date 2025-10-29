import React from "react";
import { BookOpen, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm">
            <BookOpen size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">Campus Swap</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#market" className="hover:text-slate-900 transition">Marketplace</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-slate-50">
            <User size={18} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3.5 py-2 text-sm font-semibold hover:bg-blue-700 shadow-sm">
            <ShoppingBag size={18} /> Sell an item
          </button>
        </div>
      </div>
    </header>
  );
}

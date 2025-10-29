import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import MarketplacePreview from "./components/MarketplacePreview";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <MarketplacePreview />
      </main>
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Campus Swap. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-900 transition" href="#">Privacy</a>
            <a className="hover:text-slate-900 transition" href="#">Terms</a>
            <a className="hover:text-slate-900 transition" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

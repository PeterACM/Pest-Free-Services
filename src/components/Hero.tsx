import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/pestData';
import { ShieldCheck, Calendar, PhoneCall, CheckCircle2, ArrowRight, Sparkles, Leaf, Award, Bug, Footprints, ShieldAlert, Wrench, Shield, Check } from 'lucide-react';
import heroWoodBorerImg from '../assets/images/hero_wood_borer_eco_1784765733472.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
  onNavigateToAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToServices, onNavigateToAbout }) => {
  const [activePestIcon, setActivePestIcon] = useState<string>('borer');

  const interactivePests = [
    { id: 'borer', name: 'Wood-Borer', icon: Bug, desc: 'Frass powder on floorboards or timber frames. Non-fumigation bio deep penetration.', color: 'bg-emerald-600' },
    { id: 'termite', name: 'Termite Swarm', icon: ShieldAlert, desc: 'Mud tubes or subterranean swarms. Soil perimeter barrier + non-toxic bio application.', color: 'bg-red-600' },
    { id: 'cockroach', name: 'Roach Gel', icon: Footprints, desc: 'Kitchen & food safe odorless bait geling. Eradicates German & American roaches.', color: 'bg-emerald-700' },
    { id: 'snake', name: 'Snake Rescue', icon: ShieldCheck, desc: 'Urgent humane relocation for cobras, mambas & adders across Durban.', color: 'bg-red-700' },
    { id: 'repair', name: 'Timber Repair', icon: Wrench, desc: 'Grant repairs wood sills, sashes, & doors damaged by borer or water rot.', color: 'bg-emerald-800' },
  ];

  const selectedPest = interactivePests.find(p => p.id === activePestIcon) || interactivePests[0];

  return (
    <section id="hero-section" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden py-12 lg:py-20 border-b-4 border-emerald-600">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700 text-white text-xs font-black tracking-wider uppercase shadow-md border border-red-500">
              <Leaf className="w-4 h-4 text-emerald-300" />
              <span>DURBAN'S BIO-FRIENDLY PEST CONTROL SPECIALIST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Clean, Bio-Friendly Pest Treatment.<br />
              <span className="text-emerald-300 underline underline-offset-8 decoration-red-500">
                No Tents. No Toxic Fumes. No Disruption.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100 leading-relaxed max-w-2xl font-normal">
              Protect your Durban home and business with <strong>Grant's Pest Free Services</strong>. Our proven, non-fumigation bio-treatment eradicates wood-borer, termites, cockroaches, and pests safely — verified by UKZN entomologists and trusted by 650+ KwaZulu-Natal households since 2011.
            </p>

            {/* Interactive Pest Subject Matter Selector Icons */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Click an Interactive Pest Icon to View Grant's Method:</span>
              </p>
              
              <div className="flex flex-wrap gap-2">
                {interactivePests.map((p) => {
                  const IconComp = p.icon;
                  const isSel = p.id === activePestIcon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePestIcon(p.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all transform active:scale-95 ${
                        isSel
                          ? 'bg-white text-emerald-950 shadow-lg ring-2 ring-emerald-300 scale-105'
                          : 'bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-700'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isSel ? 'text-red-600' : 'text-emerald-400'}`} />
                      <span>{p.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Selected Pest Quick Feature Info Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPest.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-4 rounded-2xl bg-white text-slate-900 border-2 border-emerald-400 shadow-xl flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                      <selectedPest.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-emerald-900 uppercase tracking-wide">{selectedPest.name} Bio-Solution</p>
                      <p className="text-xs text-slate-700 font-medium">{selectedPest.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={onNavigateToServices}
                    className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 shrink-0 shadow-xs flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-black text-white bg-red-700 hover:bg-red-800 border border-red-500 shadow-xl shadow-red-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Instant Bio-Treatment Quote</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                id="hero-call-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-emerald-950 bg-white hover:bg-emerald-50 border-2 border-emerald-300 shadow-md transition-all"
              >
                <PhoneCall className="w-5 h-5 text-red-600 animate-pulse" />
                <span>Call Grant ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-emerald-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">{BUSINESS_INFO.stats.yearsInBusiness}</p>
                <p className="text-xs text-emerald-200 font-bold">Years Trading (Est. 2011)</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-300">{BUSINESS_INFO.stats.householdsServed}</p>
                <p className="text-xs text-emerald-200 font-bold">Durban Homes Served</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-300">100%</p>
                <p className="text-xs text-emerald-200 font-bold">Non-Tenting Bio Approach</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500 bg-slate-950 group">
              <img 
                src={heroWoodBorerImg} 
                alt="Pest Free Services Durban Modern Bio Treatment" 
                className="w-full h-[420px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/hero_wood_borer_eco_1784765733472.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating Badge 1 - UKZN Entomologist Verified */}
              <div className="absolute top-4 left-4 bg-white p-3.5 rounded-2xl shadow-xl border-2 border-emerald-600 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center shrink-0 font-black">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">UKZN Entomologist Verified</p>
                  <p className="text-[11px] text-emerald-800 font-bold">Tested & proven since 2012</p>
                </div>
              </div>

              {/* Floating Badge 2 - Emergency Hotline Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-emerald-950/95 backdrop-blur-md p-4 rounded-2xl border-2 border-emerald-500 text-white space-y-2 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-extrabold text-emerald-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    Bio-Friendly Wood-Borer Specialty
                  </span>
                  <span className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded-md font-black uppercase">
                    No Tents
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  Notice timber powder or exit holes in your floors or furniture? Get a direct inspection by Grant Arnold.
                </p>
                <div className="flex gap-2 pt-1">
                  <button 
                    onClick={onNavigateToServices}
                    className="text-xs font-extrabold text-emerald-300 hover:text-white flex items-center gap-1"
                  >
                    Explore all services <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

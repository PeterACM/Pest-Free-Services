import React from 'react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/pestData';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Leaf, Award, HeartHandshake } from 'lucide-react';
import pestFreeLogo from '../assets/images/pestfreelogo.png';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-200 pt-16 pb-12 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={pestFreeLogo}
                alt="Pest Free Services Logo"
                className="h-12 w-auto bg-white p-1 rounded-xl shadow-md border border-emerald-400 object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.triedFallback1) {
                    target.dataset.triedFallback1 = 'true';
                    target.src = 'pestfreelogo.png';
                  } else if (!target.dataset.triedFallback2) {
                    target.dataset.triedFallback2 = 'true';
                    target.src = 'Pestfreelogo.png';
                  } else if (!target.dataset.triedFallback3) {
                    target.dataset.triedFallback3 = 'true';
                    target.src = 'logo.png';
                  }
                }}
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Durban's trusted eco-friendly pest control specialist since 2011. Owner-led, non-fumigation bio treatments for wood-borer, termites, roaches, bed bugs, and handyman timber repairs.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-900 text-emerald-200 px-2.5 py-1 rounded-md border border-emerald-600 shadow-md">
                <Leaf className="w-3.5 h-3.5 text-amber-300" /> Bio-Friendly
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-red-800 text-white px-2.5 py-1 rounded-md border border-red-500 shadow-md">
                <Award className="w-3.5 h-3.5 text-amber-300" /> UKZN Verified
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-900 text-slate-200 px-2.5 py-1 rounded-md border border-emerald-700 shadow-md">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" /> Owner Operated
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-4 border-red-600 pl-2.5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
                  About Grant's Story & UKZN Verification
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  Services & Bio Wood-Borer Treatment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-amber-300 transition-colors">
                  Testimonials & Baumann Ave Case Study
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-300 transition-colors">
                  SEO Pest Prevention Tips & Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  Contact & Emergency Callout
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Coverage */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-4 border-emerald-500 pl-2.5">
              Durban Specialties
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>• Wood-Borer & Termite Bio-Treatment</li>
              <li>• Cockroach & Ant Control</li>
              <li>• Bed Bug & Dust Mite Vapor Eradication</li>
              <li>• Mosquito & Garden Eco-Barriers</li>
              <li>• Humane Snake & Gecko Control</li>
              <li>• Wooden Window & Door Repairs</li>
              <li>• Cupboard & Timber Restoration</li>
            </ul>
          </div>

          {/* Col 4: Business Credentials & Contact */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-4 border-red-600 pl-2.5">
              Durban Headquarters
            </h3>
            <div className="space-y-3 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors font-bold text-sm">
                  {BUSINESS_INFO.phone} / {BUSINESS_INFO.landline}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-emerald-950 border border-emerald-700 text-xs space-y-1 text-slate-300 font-semibold shadow-inner">
              <p><strong className="text-white">Close Corp Reg:</strong> {BUSINESS_INFO.regNumber}</p>
              <p><strong className="text-white">VAT Reg:</strong> {BUSINESS_INFO.vatNumber}</p>
              <p><strong className="text-white">Incorporated:</strong> 28 April 2011</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Grant's Pest Free Services CC. All rights reserved. Durban, KwaZulu-Natal.</p>
          <div className="flex flex-wrap justify-center gap-3 text-emerald-300">
            <span>Bio-Friendly Non-Fumigation</span>
            <span>•</span>
            <span>UKZN Certified Methodology</span>
            <span>•</span>
            <span>Greater Durban Area</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/pestData';
import { ShieldCheck, Award, Leaf, Users, CheckCircle2, MapPin, Building2, FileText, PhoneCall, Sparkles } from 'lucide-react';
import woodBorerTreatmentImg from '../assets/images/wood_borer_treatment_1784765757008.jpg';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  return (
    <div id="about-view-container" className="space-y-0 bg-white">
      {/* Page Header (BACKGROUND: Strong Deep Emerald Green bg-emerald-900) */}
      <motion.section 
        id="about-header-section" 
        className="py-16 bg-emerald-900 text-white border-b-4 border-emerald-950"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-black text-white bg-red-700 px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
            About Grant's Pest Free Services CC
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Our Journey: Built on Science, Results, and Durban Trust
          </h1>
          <p className="text-emerald-100 text-base mt-3 leading-relaxed font-medium">
            Trading as Grant's Pest Free Services since April 2011, we are an owner-operated Durban company delivering eco-friendly, non-fumigation pest and timber preservation solutions across KwaZulu-Natal.
          </p>
        </div>
      </motion.section>

      {/* Origin Story Section (BACKGROUND: Crisp Pure White) */}
      <motion.section 
        id="about-story-section" 
        className="py-16 bg-white border-b-4 border-emerald-700"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-600 bg-slate-950">
                <img 
                  src={woodBorerTreatmentImg} 
                  alt="Wood Borer Treatment Restored Window Durban" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = './assets/images/wood_borer_treatment_1784765757008.jpg';
                  }}
                />
              </div>
              <div className="mt-4 p-5 rounded-2xl bg-emerald-900 text-white border-2 border-emerald-500 shadow-xl text-xs">
                <strong className="text-amber-300 block mb-1 uppercase font-black text-xs tracking-wide">UKZN Entomologist Verification</strong>
                Independent evaluation by University of KwaZulu-Natal entomologists confirmed our bio-treatment's total efficacy on drywood and subterranean borers.
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black text-white bg-emerald-700 px-3.5 py-1 rounded-md uppercase tracking-wider">
                Founder's Story • Grant Arnold
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                From Product Distribution to Durban's Flagship Borer Specialist
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                Pest Free Services began not as a traditional pest control company, but as a distribution concept. Founder <strong>Grant Arnold</strong> had discovered an innovative bio-friendly insect treatment and initially set out to place it onto retail shelves under the name <em>Alpha Organic Distributors</em>. However, placing a single product without a wide product line proved difficult.
              </p>

              <div className="p-5 bg-red-800 text-white rounded-2xl border-2 border-red-500 shadow-xl space-y-2">
                <p className="text-xs font-black text-amber-300 uppercase tracking-wide">The Turning Point: January 2012 (North Beach, Durban)</p>
                <p className="text-xs text-red-100 leading-relaxed font-medium">
                  In January 2012, a friend asked Grant whether the bio-product actually worked on wood-borer — one of Durban's most damaging household threats. Grant put it to the test at a block of flats on Baumann Avenue, North Beach, where borer infestation threatened a newly leased apartment. The body corporate authorised a trial.
                </p>
                <p className="text-xs text-white leading-relaxed font-extrabold bg-red-900 p-3 rounded-xl border border-red-400">
                  The results spoke for themselves: the site supervisor reported that borer inside the treated flat were gone completely, with dead and dying adult borer found outside in the corridor — proof the treatment worked as intended!
                </p>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Grant subsequently had these results independently verified by entomologists trained at the <strong>University of KwaZulu-Natal (UKZN)</strong>, confirming the treatment's scientific credibility. From that single trial, with the support of friends and family, Grant built Pest Free Services into an established local business serving over 650 Durban households.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Corporate Credentials Card (BACKGROUND: Deep Dark Slate bg-slate-950) */}
      <motion.section 
        id="credentials-section" 
        className="py-16 bg-slate-950 text-white border-b-4 border-emerald-600"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black text-emerald-950 bg-emerald-400 px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
              Transparency & Legal Registration
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              Official Business Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-emerald-900 rounded-2xl border-2 border-emerald-500 shadow-xl space-y-2">
              <Building2 className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="text-xs font-black text-emerald-200 uppercase">Registered Name</h3>
              <p className="text-sm font-black text-white">{BUSINESS_INFO.tradeName}</p>
              <p className="text-xs text-emerald-200">Close Corporation (CC)</p>
            </div>

            <div className="p-6 bg-emerald-900 rounded-2xl border-2 border-emerald-500 shadow-xl space-y-2">
              <FileText className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="text-xs font-black text-emerald-200 uppercase">Registration No</h3>
              <p className="text-sm font-black text-white">{BUSINESS_INFO.regNumber}</p>
              <p className="text-xs text-emerald-200">Incorp. 28 April 2011</p>
            </div>

            <div className="p-6 bg-emerald-900 rounded-2xl border-2 border-emerald-500 shadow-xl space-y-2">
              <Award className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="text-xs font-black text-emerald-200 uppercase">VAT Registration</h3>
              <p className="text-sm font-black text-white">VAT: {BUSINESS_INFO.vatNumber}</p>
              <p className="text-xs text-emerald-200">Fully Compliant Tax Entity</p>
            </div>

            <div className="p-6 bg-emerald-900 rounded-2xl border-2 border-emerald-500 shadow-xl space-y-2">
              <MapPin className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="text-xs font-black text-emerald-200 uppercase">Registered Address</h3>
              <p className="text-xs font-black text-white">{BUSINESS_INFO.address}</p>
              <p className="text-xs text-emerald-200">Umbilo, Durban, 4001</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values (BACKGROUND: Vibrant Emerald Green bg-emerald-800) */}
      <motion.section 
        id="values-section" 
        className="py-16 bg-emerald-800 text-white"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Our Core Service Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white text-slate-900 border-2 border-emerald-300 shadow-xl space-y-3">
              <Leaf className="w-8 h-8 text-emerald-700" />
              <h3 className="text-lg font-black text-slate-900">Eco-Friendly Bio Products</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                We eliminate wood-borer, termites, and pests without the heavy chemical load of traditional fumigation. Safe for pets, plants, and families.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white text-slate-900 border-2 border-emerald-300 shadow-xl space-y-3">
              <Users className="w-8 h-8 text-emerald-700" />
              <h3 className="text-lg font-black text-slate-900">Owner-Led Direct Contact</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                No impersonal call centres or rotating anonymous technicians. You deal directly with founder Grant Arnold for accountability and advice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white text-slate-900 border-2 border-emerald-300 shadow-xl space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-700" />
              <h3 className="text-lg font-black text-slate-900">No Tents, No Disruption</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Carry on as normal! Our treatments do not require you to pack up food, evacuate pets, or put giant tents over your roof tiles.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-red-700 hover:bg-red-800 text-white font-black text-sm shadow-2xl transition-all border border-red-500"
            >
              Book an Inspection with Grant
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

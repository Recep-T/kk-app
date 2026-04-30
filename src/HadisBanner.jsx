import React from 'react';
import { Sparkles } from 'lucide-react';

const HadisBanner = () => (
  <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm mb-6 animate-fade-in">
    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
      <Sparkles size={28} className="text-amber-400" />
    </div>
    <div className="flex-1">
      <div className="text-[13px] text-amber-800 font-bold mb-1 leading-snug">
        Hz. Âişe (radıyallahu anhâ) şöyle dedi:<br/>
        Resûlullah (sallallahu aleyhi ve sellem)’i<br/>
        şöyle buyururken işittim:
      </div>
      <div className="text-[16px] text-green-900 font-extrabold leading-snug my-2 text-center">
        “Amellerin en faziletlisi,<br />az da olsa devamlı olanıdır.”
      </div>
      <div className="text-[11px] text-amber-700 font-bold mt-2 text-center">
        Buhârî, Libâs 43 | Müslim, Sâlâtu’l-Müsâfirîn 218
      </div>
    </div>
  </div>
);

export default HadisBanner;

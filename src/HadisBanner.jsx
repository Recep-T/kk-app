import React from 'react';
import { Quote } from 'lucide-react';

const HadisBanner = () => {
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden group">
      <div 
        className="relative bg-[#f9f7f2] border border-[#e3dcd0] rounded-xl p-5 flex flex-col items-center shadow-sm"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
        }}
      >
        {/* Dekoratif Köşeler */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-amber-300/40 rounded-tl-md" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-amber-300/40 rounded-br-md" />

        {/* Üst Kısım: Ravi */}
        <div className="text-center z-10 mb-2">
          <div className="inline-block mb-1">
            <Quote className="w-3 h-3 text-amber-700 opacity-40" />
          </div>
          <p className="text-[13px] text-[#8b7355] font-semibold leading-tight">
            Hz. Âişe <span className="text-[11px] font-normal opacity-80">(radıyallahu anhâ)</span> şöyle dedi:
            <br />
            <span className="text-[#96846d] text-[12px]">Resûlullah <span className="text-[10px] italic">(sallallahu aleyhi ve sellem)</span>’i şöyle buyururken işittim:</span>
          </p>
        </div>

        {/* Ana Hadis Metni */}
        <div className="relative py-2 px-4 text-center z-10 border-y border-amber-100/50 w-full mb-4">
          <h2 className="text-[18px] md:text-[20px] text-[#1a4d2e] font-black leading-snug tracking-tight">
            “Amellerin en faziletlisi,<br /> 
            <span className="text-[#b45309]">az da olsa</span> devamlı olanıdır.”
          </h2>
        </div>

        {/* Kaynak Bölümü (Görsele tam sadık kalındı) */}
        <footer className="w-full z-10 pt-1">
          <div className="flex items-center justify-center gap-3">
            {/* Sol Dekoratif Ok */}
            <div className="flex items-center">
              <div className="w-8 h-[1px] bg-[#c5b49a]" />
              <div 
                className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[8px] border-r-[#c5b49a] -ml-1" 
              />
            </div>

            {/* Kaynak Metni */}
            <div className="text-[12px] text-[#7c6a56] font-bold tracking-normal whitespace-nowrap px-1">
              Buhârî, Libâs 43 | Müslim, Sâlâtu’l-Müsâfirîn 218
            </div>

            {/* Sağ Dekoratif Ok */}
            <div className="flex items-center">
              <div 
                className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-[#c5b49a] -mr-1" 
              />
              <div className="w-8 h-[1px] bg-[#c5b49a]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HadisBanner;
import React from 'react';
import { BookOpen, Quote } from 'lucide-react';

const quotes = [
  { text: "Kur'an, kalplerin cilasıdır.", author: "Hz. Muhammed (sav)" },
  { text: "Sizin en hayırlınız, Kur'an'ı öğrenen ve öğretenizdir.", author: "Hadis-i Şerif" },
  { text: "Kur'an bir nurdur, ona sarılan yolunu şaşırmaz.", author: "Hz. Ali (ra)" },
  { text: "Kalpler ancak Allah'ı anmakla huzur bulur.", author: "Rad Suresi, 28" },
  { text: "Kur'an okunan eve melekler dolar, şeytanlar uzaklaşır.", author: "Ebu Hüreyre" },
  { text: "Hiç şüphesiz o zikri (Kur'an'ı) biz indirdik ve onu koruyacak olan da biziz.", author: "Hicr Suresi, 9" }
];

const QuoteCard = ({ date }) => {
  // Tarihe göre her gün farklı bir söz seçer
  const dayIndex = new Date(date).getDate() % quotes.length;
  const quote = quotes[dayIndex];

  return (
    <div className="max-w-md mx-auto px-5 mt-10 mb-6">
      <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-6 rounded-[2rem] shadow-sm relative overflow-hidden">
        {/* Dekoratif Arka Plan İkonu */}
        <Quote className="absolute -right-2 -bottom-2 text-emerald-100/50" size={80} />
        
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-emerald-600" />
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">Günün İlhamı</span>
        </div>
        
        <p className="text-slate-700 font-medium italic text-sm leading-relaxed relative z-10">
          "{quote.text}"
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="h-[1px] w-4 bg-emerald-300"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {quote.author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
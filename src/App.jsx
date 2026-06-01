import React, { useEffect, useState, useRef } from 'react';
import { supabase } from './supabaseClient';
import { CheckCircle2, Circle, Users, ChevronLeft, ChevronRight, BookOpen, AlertCircle } from 'lucide-react';
import QuoteCard from './Quota';
import ArticleCard from './ArticleCard';
import SecondArticleCard from './SecondArticle';
import HikmetArticle from './HikmetArticle';
import HadisBanner from './HadisBanner';

function App() {
  const [readings, setReadings] = useState([]);
  const [monthlyReadings, setMonthlyReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('gunluk');
  const [reportMonth, setReportMonth] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  });

  const getTodayNY = () => {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date());
  };

  const [selectedDate, setSelectedDate] = useState(getTodayNY());

  const userList = [
    'Ramazan T',
    'Hakkı Y',
    'Cebrail K',
    'Nurettin Ş',
    'Ugur O',
    'Omer Y',
    'Hasan G',
    'Bilal Y',
    'Hamza K',
    'Numan S',
    'Erkan K',
    'Yusuf A',
    'Bilal H',
    'Recep T',
    'Ayhan B',
    'Kerim K',
    'Şahin Ş',
    'Şevket T',
    'Ömer A',
    'Yusuf E'
  ];

  const fetchReadings = async (date) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('hatim_takip')
      .select('*')
      .eq('reading_date', date);
    if (error) console.error('Fetch Error:', error);
    else setReadings(data || []);
    setLoading(false);
  };

  const fetchMonthlyReadings = async (yearMonth) => {
    const [year, month] = yearMonth.split('-').map(Number);
    const from = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const to = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    const { data, error } = await supabase
      .from('hatim_takip')
      .select('*')
      .gte('reading_date', from)
      .lte('reading_date', to);
    if (error) console.error('Monthly Fetch Error:', error);
    else setMonthlyReadings(data || []);
  };

  useEffect(() => {
    fetchReadings(selectedDate);
    const d = new Date(selectedDate + 'T12:00:00');
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    fetchMonthlyReadings(ym);

    const channel = supabase
      .channel(`realtime-hatim-${selectedDate}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'hatim_takip', filter: `reading_date=eq.${selectedDate}` },
        () => {
          fetchReadings(selectedDate);
          fetchMonthlyReadings(ym);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [selectedDate]);

  useEffect(() => {
    fetchMonthlyReadings(reportMonth);
  }, [reportMonth]);

  const toggleStatus = async (userId, userName, currentStatus) => {
    const newStatus = !currentStatus;

    setReadings(prev => {
      const exists = prev.find(r => r.user_id === userId);
      if (exists) return prev.map(r => r.user_id === userId ? { ...r, is_completed: newStatus } : r);
      return [...prev, { user_id: userId, user_name: userName, reading_date: selectedDate, is_completed: newStatus }];
    });

    setMonthlyReadings(prev => {
      const exists = prev.find(r => r.user_id === userId && r.reading_date === selectedDate);
      if (exists) return prev.map(r => (r.user_id === userId && r.reading_date === selectedDate) ? { ...r, is_completed: newStatus } : r);
      return [...prev, { user_id: userId, user_name: userName, reading_date: selectedDate, is_completed: newStatus }];
    });

    const { error } = await supabase
      .from('hatim_takip')
      .upsert({ user_id: userId, user_name: userName, reading_date: selectedDate, is_completed: newStatus },
        { onConflict: 'user_id, reading_date' });

    if (error) {
      alert("Hata: " + error.message);
      fetchReadings(selectedDate);
    }
  };

  const calculateCuz = (dateStr) => {
    const start = new Date("2026-04-01T12:00:00");
    const current = new Date(dateStr + "T12:00:00");
    const diffDays = Math.floor((current - start) / (1000 * 60 * 60 * 24));
    return (Math.max(0, diffDays) % 30) + 1;
  };

  const calculateOffset = (dateStr) => {
    const current = new Date(dateStr + "T12:00:00");
    const nextDay = new Date(current);
    nextDay.setDate(nextDay.getDate() + 1);
    const isLastDay = nextDay.getDate() === 1;
    const ref = isLastDay ? nextDay : current;
    const totalMonths = (ref.getFullYear() - 2026) * 12 + (ref.getMonth() + 1 - 4);
    return (1 - Math.max(0, totalMonths) + 400) % 20;
  };

  const changeDate = (days) => {
    const newDate = new Date(selectedDate + "T12:00:00");
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };

  const changeReportMonth = (delta) => {
    const [year, month] = reportMonth.split('-').map(Number);
    const d = new Date(year, month - 1 + delta, 1);
    setReportMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
  };

  const getMissingPages = () => {
    const [year, month] = reportMonth.split('-').map(Number);
    const today = new Date();
    const lastDay = new Date(year, month, 0).getDate();
    // Gelecek günleri dahil etme
    const capDay = (year === today.getFullYear() && month === today.getMonth() + 1)
      ? today.getDate()
      : lastDay;
    const missing = [];

    for (let day = 1; day <= capDay; day++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const cuz = calculateCuz(dateStr);
      const offset = calculateOffset(dateStr);

      for (let slot = 0; slot < 20; slot++) {
        const userIndex = (offset + slot) % 20;
        const userId = userIndex + 1;
        const userName = userList[userIndex];
        const globalPage = ((cuz - 1) * 20) + slot + 1;
        const record = monthlyReadings.find(r => r.user_id === userId && r.reading_date === dateStr);
        if (!record || !record.is_completed) {
          missing.push({ dateStr, userName, globalPage, userId });
        }
      }
    }
    return missing;
  };

  const currentCuz = calculateCuz(selectedDate);
  const currentOffset = calculateOffset(selectedDate);
  const completedCount = readings.filter(r => r.is_completed).length;
  const missingPages = activeTab === 'rapor' ? getMissingPages() : [];

  const reportMonthLabel = new Date(reportMonth + '-01T12:00:00')
    .toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });

  const scrollRef = useRef(null);

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans">
      {/* Sticky Header */}
      <div className="bg-emerald-800 text-white pt-4 pb-3 px-4 shadow-xl rounded-b-[1.5rem] sticky top-0 z-10 border-b border-emerald-900/20">
        <div className="max-w-md mx-auto">

          {/* Günlük navigasyon — sadece Günlük Takip sekmesinde */}
          {activeTab === 'gunluk' && (
            <div className="flex justify-between items-center mb-3">
              <button onClick={() => changeDate(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-90">
                <ChevronLeft size={22} />
              </button>
              <div className="text-center">
                <h2 className="text-base font-bold tracking-tight">
                  {new Date(selectedDate + "T12:00:00").toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="bg-yellow-400 text-emerald-900 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {currentCuz}. Cüz Günü
                  </span>
                </div>
              </div>
              <button onClick={() => changeDate(1)} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-90">
                <ChevronRight size={22} />
              </button>
            </div>
          )}

          {/* Aylık rapor navigasyonu */}
          {activeTab === 'rapor' && (
            <div className="flex justify-between items-center mb-3">
              <button onClick={() => changeReportMonth(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-90">
                <ChevronLeft size={22} />
              </button>
              <div className="text-center">
                <h2 className="text-base font-bold tracking-tight capitalize">{reportMonthLabel}</h2>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${
                  missingPages.length === 0 ? 'bg-emerald-400 text-emerald-900' : 'bg-red-400 text-white'
                }`}>
                  {missingPages.length} eksik sayfa
                </span>
              </div>
              <button onClick={() => changeReportMonth(1)} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-90">
                <ChevronRight size={22} />
              </button>
            </div>
          )}

          {/* İlerleme Çubuğu — sadece Günlük Takip */}
          {activeTab === 'gunluk' && (
            <div className="bg-emerald-900/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                    <Users size={16} className="text-emerald-200" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-100">Grup İlerlemesi</span>
                </div>
                <span className="text-sm font-bold text-white">
                  {completedCount}<span className="opacity-50 text-xs"> / 20</span>
                  <span className="ml-2 text-xs font-black text-emerald-300">%{Math.round((completedCount / 20) * 100)}</span>
                </span>
              </div>
              <div className="w-full bg-emerald-950/40 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(completedCount / 20) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Sekmeler */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setActiveTab('gunluk')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'gunluk' ? 'bg-white text-emerald-800' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Users size={13} />
              Günlük Takip
            </button>
            <button
              onClick={() => setActiveTab('rapor')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'rapor' ? 'bg-red-500 text-white' : 'bg-red-500/50 text-white hover:bg-red-500/70'
              }`}
            >
              <AlertCircle size={13} />
              Aylık Rapor
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>

        {/* Günlük Takip */}
        {activeTab === 'gunluk' && (
          <>
            <div className="max-w-md mx-auto px-5 space-y-2.5 relative z-20 pb-4 pt-4">
              {Array.from({ length: 20 }, (_, slot) => {
                const userIndex = (currentOffset + slot) % 20;
                const name = userList[userIndex];
                const userId = userIndex + 1;
                const userReading = readings.find(r => r.user_id === userId);
                const isDone = userReading?.is_completed || false;
                const globalPage = ((currentCuz - 1) * 20) + slot + 1;

                return (
                  <button
                    key={userId}
                    onClick={() => toggleStatus(userId, name, isDone)}
                    className={`w-full flex items-center justify-between p-3.5 px-5 rounded-2xl border transition-all duration-300 active:scale-[0.98] ${
                      isDone
                        ? 'bg-white border-emerald-500/40 shadow-sm shadow-emerald-50'
                        : 'bg-white border-slate-200/60 shadow-sm hover:border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors duration-500 ${
                        isDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {slot + 1}
                      </div>
                      <div>
                        <h3 className={`font-semibold text-sm transition-colors ${isDone ? 'text-slate-900' : 'text-slate-600'}`}>
                          {name}
                        </h3>
                        <a
                          href={`https://kuran.hayrat.com.tr/kuran-oku/?sayfa=${globalPage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-md border border-blue-400/40 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-500/60 hover:text-blue-700 active:scale-95 transition-all"
                        >
                          SAYFA {globalPage} ↗
                        </a>
                      </div>
                    </div>
                    <div className={`transition-all duration-500 ${isDone ? 'opacity-100 scale-100' : 'opacity-20 scale-75'}`}>
                      {isDone ? <CheckCircle2 className="text-emerald-500" size={22} /> : <Circle className="text-slate-300" size={22} />}
                    </div>
                  </button>
                );
              })}
            </div>
            <HadisBanner />
            <QuoteCard date={selectedDate} />
            <ArticleCard />
            <SecondArticleCard />
            <HikmetArticle />
          </>
        )}

        {/* Aylık Rapor */}
        {activeTab === 'rapor' && (
          <div className="max-w-md mx-auto px-5 pb-8 pt-4">
            {missingPages.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <CheckCircle2 size={48} className="text-emerald-400" />
                <p className="text-slate-500 font-semibold text-sm">Bu ay tüm sayfalar tamamlandı!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {userList.map((userName, idx) => {
                  const userId = idx + 1;
                  const userMissing = missingPages.filter(m => m.userId === userId);
                  if (userMissing.length === 0) return null;
                  return (
                    <div key={userId} className="bg-white rounded-2xl border border-red-100 px-4 py-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={13} className="text-red-400 shrink-0" />
                        <p className="text-sm font-bold text-slate-700">{userName}</p>
                        <span className="ml-auto text-[10px] font-black text-red-400">{userMissing.length} eksik</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {userMissing.map(({ globalPage, dateStr }) => (
                          <a
                            key={`${dateStr}-${globalPage}`}
                            href={`https://kuran.hayrat.com.tr/kuran-oku/?sayfa=${globalPage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-1 rounded-lg border border-red-200 text-red-500 bg-red-50 hover:bg-red-100 active:scale-95 transition-all"
                          >
                            {globalPage} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {loading && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest shadow-2xl flex items-center gap-2 uppercase">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Senkronize Ediliyor
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

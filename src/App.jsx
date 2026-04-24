import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { CheckCircle2, Circle, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteCard from './Quota';
import ArticleCard from './ArticleCard';
import SecondArticleCard from './SecondArticle';

function App() {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);

  // New York saatine göre bugünü (YYYY-MM-DD) al
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
    'Hakkı Y', 'Cebrail K', 'Nurettin S', 'Ugur O', 'Omer Y',
    'Hasan G', 'Bilal Y', 'Hamza K', 'Numan S', 'Erkan K',
    'Yusuf A', 'Bilal A', 'Recep T', 'Ayhan B', 'Kerim K',
    'Şahin S', 'Şevket T', 'Ömer A', 'Yusuf E', 'Ramazan T'
  ];

  // Veritabanından sadece o güne ait kayıtları çekiyoruz
  const fetchReadings = async (date) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('hatim_takip')
      .select('*')
      .eq('reading_date', date); // Sadece o günün datası!
    
    if (error) console.error('Fetch Error:', error);
    else setReadings(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchReadings(selectedDate);

    const channel = supabase
      .channel(`realtime-hatim-${selectedDate}`)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'hatim_takip', filter: `reading_date=eq.${selectedDate}` }, 
        () => fetchReadings(selectedDate)
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [selectedDate]);

  const toggleStatus = async (userId, userName, currentStatus) => {
    const newStatus = !currentStatus;

    // UI'ı sadece o anki selectedDate için güncelle
    setReadings(prev => {
      const exists = prev.find(r => r.user_id === userId);
      if (exists) {
        return prev.map(r => r.user_id === userId ? { ...r, is_completed: newStatus } : r);
      } else {
        return [...prev, { 
          user_id: userId, 
          user_name: userName, 
          reading_date: selectedDate, 
          is_completed: newStatus 
        }];
      }
    });

    // Upsert işlemi user_id VE reading_date bazlı olduğu için eski günler silinmez
    const { error } = await supabase
      .from('hatim_takip')
      .upsert({ 
        user_id: userId, 
        user_name: userName,
        reading_date: selectedDate, 
        is_completed: newStatus 
      }, { onConflict: 'user_id, reading_date' });
    
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

  const changeDate = (days) => {
    const newDate = new Date(selectedDate + "T12:00:00");
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };

  const currentCuz = calculateCuz(selectedDate);
  const completedCount = readings.filter(r => r.is_completed).length;

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans">
      {/* Sticky Header */}
      <div className="bg-emerald-800 text-white pt-10 pb-16 px-6 shadow-xl rounded-b-[3rem] sticky top-0 z-10 border-b border-emerald-900/20">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => changeDate(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-90">
              <ChevronLeft size={22} />
            </button>
            <div className="text-center">
              <h2 className="text-lg font-bold tracking-tight">
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

          {/* İlerleme Çubuğu Seçilen Güne Göre Güncellenir */}
          <div className="bg-emerald-900/40 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-inner">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <Users size={16} className="text-emerald-200" />
                </div>
                <span className="text-sm font-semibold text-emerald-100">Grup İlerlemesi</span>
              </div>
              <span className="text-sm font-bold text-white">
                {completedCount} <span className="opacity-50 text-xs">/ 20</span>
              </span>
            </div>
            <div className="w-full bg-emerald-950/40 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${(completedCount / 20) * 100}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto px-5 -mt-6 space-y-2.5 relative z-20 pb-8 pt-12">
          {userList.map((name, index) => {
            const userId = index + 1;
            const userReading = readings.find(r => r.user_id === userId);
            const isDone = userReading?.is_completed || false;
            const globalPage = ((currentCuz - 1) * 20) + userId;

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
                    {userId}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm transition-colors ${isDone ? 'text-slate-900' : 'text-slate-600'}`}>
                      {name}
                    </h3>
                    <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-tighter">
                      SAYFA {globalPage}
                    </p>
                  </div>
                </div>
                <div className={`transition-all duration-500 ${isDone ? 'opacity-100 scale-100' : 'opacity-20 scale-75'}`}> 
                  {isDone ? (
                    <CheckCircle2 className="text-emerald-500" size={22} />
                  ) : (
                    <Circle className="text-slate-300" size={22} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <QuoteCard date={selectedDate} />
        <ArticleCard />
        <SecondArticleCard/>

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
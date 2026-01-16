import React, { useState, createContext, useContext, useEffect } from 'react';
import { TEXTS } from './constants';
import { Language, ViewState } from './types';

// --- Contexts ---
const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
  t: typeof TEXTS['en'];
}>({
  lang: 'en',
  toggleLang: () => {},
  t: TEXTS['en'],
});

const useLanguage = () => useContext(LanguageContext);

// --- State Management for Demo Data ---
// In a real app, this would be in a separate store or database
interface AppData {
    feedings: { id: number, type: string, volume: number, time: string, note: string }[];
    diapers: { id: number, type: 'pee' | 'poo', sub: string, time: string }[];
    sleeps: { id: number, start: string, end: string, duration: string }[];
    growth: { id: number, weight: string, height: string, date: string }[];
}

const INITIAL_DATA: AppData = {
    feedings: [
        { id: 1, type: 'formula', volume: 110, time: "10:15 AM", note: 'Enfamil A+' },
        { id: 2, type: 'breast', volume: 90, time: "07:00 AM", note: 'Left Side' },
    ],
    diapers: [
        { id: 1, type: 'poo', sub: 'Mustard Yellow', time: "1:30 PM" },
        { id: 2, type: 'pee', sub: 'Normal', time: "11:15 AM" },
    ],
    sleeps: [
        { id: 1, start: "1:00 PM", end: "3:00 PM", duration: "2h" },
        { id: 2, start: "10:00 AM", end: "10:45 AM", duration: "45m" },
    ],
    growth: [
        { id: 1, weight: "6.5", height: "62", date: "Today" },
        { id: 2, weight: "6.2", height: "60", date: "Last Week" },
    ]
};

// --- Reusable Components ---

const Icon = ({ name, className = "", filled = false }: { name: string; className?: string, filled?: boolean }) => (
  <span 
    className={`material-symbols-outlined select-none ${className}`}
    style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
  >
    {name}
  </span>
);

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button 
      onClick={toggleLang}
      className="fixed top-20 right-4 z-50 bg-white/80 backdrop-blur shadow-lg border border-gray-100 rounded-full px-3 py-1 text-xs font-bold text-primary flex items-center gap-1"
    >
      <Icon name="translate" className="text-sm" />
      {lang === 'en' ? '中文' : 'EN'}
    </button>
  );
};

const FAB = ({ onClick, icon = "add" }: { onClick: () => void, icon?: string }) => (
    <button 
        onClick={onClick}
        className="fixed bottom-24 right-6 size-14 bg-primary text-white ring-4 ring-white rounded-full shadow-glow flex items-center justify-center active:scale-90 transition-transform z-40"
    >
        <Icon name={icon} className="text-3xl" />
    </button>
);

const ViewContainer = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`pb-24 animate-fade-in ${className}`}>{children}</div>
);

// --- Views ---

const HomeView = ({ onNavigate, data }: { onNavigate: (view: ViewState) => void, data: AppData }) => {
  const { t } = useLanguage();
  
  return (
    <ViewContainer>
      {/* Top Bar */}
      <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full border-2 border-primary/20 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU" 
              alt="Baby" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">{t.appTitle}</h1>
            <p className="text-xs text-primary/80 font-medium">{t.babyAge}</p>
          </div>
        </div>
        <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
          <Icon name="calendar_today" />
        </button>
      </div>

      {/* AI Card */}
      <div className="px-4 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-emerald-50 to-white -z-10"></div>
          <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/10 blur-2xl"></div>
          
          <div className="flex flex-col items-center mb-4">
            <Icon name="auto_awesome" className="text-primary text-3xl mb-1" filled />
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{t.aiPrediction}</span>
          </div>
          
          <h2 className="text-xl font-bold text-center mb-1">{t.feedingPrediction}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="opacity" className="text-slate-400 text-sm" filled />
            <p className="text-sm font-medium text-slate-500">{t.volumeEstimate}</p>
          </div>

          <div className="flex items-center justify-between mt-2">
             <div className="flex -space-x-2">
                <div className="size-7 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                  <Icon name="check" className="text-primary text-xs font-bold" />
                </div>
                <div className="size-7 rounded-full bg-slate-100 border-2 border-white"></div>
             </div>
             <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-glow active:scale-95 transition-transform">
               {t.notifyMe}
             </button>
          </div>
        </div>
      </div>

      {/* Segmented Control */}
      <div className="sticky top-[68px] z-20 bg-background-light px-4 py-3">
        <div className="bg-slate-100 p-1 rounded-xl flex">
          <button className="flex-1 bg-white shadow-sm rounded-lg py-2 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-all">
            <Icon name="baby_changing_station" filled />
            {t.tabs.feeding}
          </button>
          <button 
            onClick={() => onNavigate('DIAPER_LOG')}
            className="flex-1 py-2 flex items-center justify-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600 transition-all"
          >
            <Icon name="opacity" />
            {t.tabs.diaper}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar pb-2">
        <button className="px-5 py-1.5 bg-primary text-white rounded-full text-xs font-bold shrink-0">{t.filters.today}</button>
        <button className="px-5 py-1.5 bg-slate-100 text-slate-500 rounded-full text-xs font-bold shrink-0">{t.filters.week}</button>
        <button className="px-5 py-1.5 bg-slate-100 text-slate-500 rounded-full text-xs font-bold shrink-0 flex items-center gap-1">
          <Icon name="tune" className="text-sm" />
          {t.filters.filter}
        </button>
      </div>

      {/* List */}
      <div className="px-4 mt-2 mb-4">
        <div className="flex justify-between items-end mb-3">
          <h3 className="font-bold text-lg">{t.recentRecords}</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{t.total}: {data.feedings.reduce((acc, curr) => acc + curr.volume, 0)} ML</span>
        </div>

        <div className="space-y-3">
          {data.feedings.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center gap-4">
                <div className={`size-12 rounded-full flex items-center justify-center ${item.type === 'formula' ? 'bg-emerald-50 text-primary' : 'bg-rose-50 text-rose-400'}`}>
                  <Icon name={item.type === 'formula' ? "nutrition" : "favorite"} filled />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-slate-800">{item.type === 'formula' ? t.records.formula : t.records.breastMilk}</p>
                    <p className="font-bold text-lg">{item.volume}ml</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-slate-400 text-xs font-semibold">{item.time}</p>
                    <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-md font-bold">{item.note}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>

      <FAB onClick={() => onNavigate('ADD_FEEDING')} />
    </ViewContainer>
  );
};

const DiaperView = ({ onNavigate, data }: { onNavigate: (view: ViewState) => void, data: AppData }) => {
  const { t } = useLanguage();

  return (
    <ViewContainer>
       {/* Top Bar */}
       <div className="sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-3 flex items-center justify-between">
        <div className="size-10 flex items-center justify-center">
             <Icon name="child_care" className="text-3xl text-slate-800" />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg leading-tight">{t.tabs.diaper} Log</h1>
            <p className="text-xs text-primary/80 font-medium">{t.filters.today}</p>
        </div>
        <button className="size-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700">
          <Icon name="notifications" />
        </button>
      </div>

      {/* Prediction */}
      <div className="px-4 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 size-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-2 mb-1 relative z-10">
                <Icon name="auto_awesome" className="text-primary text-sm" filled />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{t.aiPrediction}</span>
            </div>
            
            <div className="flex items-baseline gap-2 relative z-10">
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">3:15 PM</h2>
                <p className="text-sm font-medium text-primary/60">{t.diaperPrediction.replace('3:15 PM', '')}</p>
            </div>

            <div className="mt-4 flex items-center justify-between relative z-10">
                <div className="flex -space-x-2">
                    <div className="size-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                         <Icon name="history" className="text-[12px] text-slate-500" />
                    </div>
                    <div className="size-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                        <Icon name="trending_up" className="text-[12px] text-slate-500" />
                    </div>
                </div>
                <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-glow active:scale-95 transition-transform">
                   {t.adjustSchedule}
                </button>
            </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-4">
          <div className="bg-slate-100 p-1.5 rounded-xl flex gap-2">
              <button className="flex-1 h-9 bg-white text-slate-800 rounded-lg shadow-sm text-sm font-bold">{t.filters.all}</button>
              <button className="flex-1 h-9 text-slate-500 rounded-lg hover:bg-white/50 text-sm font-medium flex items-center justify-center gap-2">
                  <span>💧</span> {t.filters.pee}
              </button>
              <button className="flex-1 h-9 text-slate-500 rounded-lg hover:bg-white/50 text-sm font-medium flex items-center justify-center gap-2">
                  <span>💩</span> {t.filters.poo}
              </button>
          </div>
      </div>

      {/* List Header */}
      <div className="flex justify-between items-center px-4 mb-2">
          <h3 className="font-bold text-lg">{t.todaysRecords}</h3>
          <button className="text-primary text-sm font-bold">{t.seeHistory}</button>
      </div>

      {/* Records List */}
      <div className="px-4 space-y-3">
          {data.diapers.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-50 shadow-soft flex items-center gap-4">
                <div className={`size-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${item.type === 'poo' ? 'bg-orange-100' : 'bg-blue-50'}`}>
                    {item.type === 'poo' ? '💩' : '💧'}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-slate-800">{item.type === 'poo' ? t.records.poo : t.records.pee}</p>
                        <span className="text-xs font-bold text-primary/60 uppercase">{item.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-bold uppercase">{item.sub}</span>
                    </div>
                </div>
                <button className="size-8 flex items-center justify-center text-slate-300">
                    <Icon name="edit" className="text-xl" />
                </button>
            </div>
          ))}
      </div>

      <FAB onClick={() => onNavigate('ADD_DIAPER')} />
    </ViewContainer>
  );
};

const SleepView = ({ onNavigate, data }: { onNavigate: (view: ViewState) => void, data: AppData }) => {
    const { t } = useLanguage();
    return (
        <ViewContainer>
            <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
                <h1 className="font-bold text-xl">{t.tabs.sleep} Log</h1>
                <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                     <Icon name="more_horiz" />
                </button>
            </div>

            {/* Sleep Summary Card */}
            <div className="px-4 mt-2 mb-6">
                <div className="bg-indigo-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 opacity-80 mb-2">
                             <Icon name="bedtime" className="text-lg" filled />
                             <span className="text-xs font-bold uppercase tracking-wider">{t.total} Sleep</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">12h 30m</h2>
                        <div className="flex gap-4">
                            <div>
                                <p className="text-xs opacity-60 font-bold uppercase">Naps</p>
                                <p className="font-bold text-lg">3h 15m</p>
                            </div>
                            <div className="w-px bg-white/20 h-8 self-center"></div>
                            <div>
                                <p className="text-xs opacity-60 font-bold uppercase">Night</p>
                                <p className="font-bold text-lg">9h 15m</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="px-4 mb-2">
                 <h3 className="font-bold text-lg mb-3">{t.filters.today}</h3>
                 <div className="space-y-4 pl-4 border-l-2 border-indigo-100 ml-2">
                     {data.sleeps.map(item => (
                         <div key={item.id} className="relative pl-6 py-1">
                             <div className="absolute -left-[9px] top-3 size-4 bg-indigo-500 border-4 border-white rounded-full shadow-sm"></div>
                             <div className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm">
                                 <div className="flex justify-between items-start mb-2">
                                     <h4 className="font-bold text-slate-800">{t.records.sleep}</h4>
                                     <span className="text-indigo-500 font-bold text-sm bg-indigo-50 px-2 py-1 rounded-lg">{item.duration}</span>
                                 </div>
                                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                     <Icon name="schedule" className="text-sm" />
                                     {item.start} - {item.end}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <FAB onClick={() => onNavigate('ADD_SLEEP')} icon="bedtime" />
        </ViewContainer>
    )
}

const GrowthView = ({ onNavigate, data }: { onNavigate: (view: ViewState) => void, data: AppData }) => {
    const { t } = useLanguage();
    const latest = data.growth[0];

    return (
        <ViewContainer>
            <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
                <h1 className="font-bold text-xl">{t.tabs.growth} Tracker</h1>
                <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                     <Icon name="show_chart" />
                </button>
            </div>

            {/* Measurement Cards */}
            <div className="px-4 grid grid-cols-2 gap-3 mt-2">
                <div className="bg-blue-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                    <Icon name="monitor_weight" className="text-4xl opacity-20 absolute right-2 top-2" />
                    <p className="text-xs font-bold uppercase opacity-80 mb-1">{t.records.weight}</p>
                    <p className="text-2xl font-bold">{latest?.weight} kg</p>
                </div>
                <div className="bg-teal-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                    <Icon name="height" className="text-4xl opacity-20 absolute right-2 top-2" />
                    <p className="text-xs font-bold uppercase opacity-80 mb-1">{t.records.height}</p>
                    <p className="text-2xl font-bold">{latest?.height} cm</p>
                </div>
            </div>

            <div className="px-4 mt-6">
                 <h3 className="font-bold text-lg mb-3">History</h3>
                 <div className="space-y-3">
                     {data.growth.map(item => (
                         <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                 <div className="bg-slate-100 p-2 rounded-lg text-slate-500">
                                     <Icon name="calendar_today" className="text-lg" />
                                 </div>
                                 <div>
                                     <p className="font-bold text-slate-800">{item.date}</p>
                                     <p className="text-xs text-slate-400 font-bold">Measured at home</p>
                                 </div>
                             </div>
                             <div className="text-right">
                                 <p className="font-bold text-sm">{item.weight} kg</p>
                                 <p className="text-xs text-slate-400 font-bold">{item.height} cm</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

             <FAB onClick={() => onNavigate('ADD_GROWTH')} icon="add" />
        </ViewContainer>
    )
}

const ProfileView = () => {
    const { t } = useLanguage();

    const SettingItem = ({ icon, label, toggle = false }: { icon: string, label: string, toggle?: boolean }) => (
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-50 shadow-sm mb-3 active:scale-[0.99] transition-transform">
            <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-2 rounded-lg text-slate-600">
                    <Icon name={icon} />
                </div>
                <span className="font-bold text-slate-700 text-sm">{label}</span>
            </div>
            {toggle ? (
                <div className="w-10 h-6 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
                </div>
            ) : (
                <Icon name="chevron_right" className="text-slate-300" />
            )}
        </div>
    )

    return (
        <ViewContainer>
            <div className="flex flex-col items-center pt-8 pb-6 px-4">
                <div className="size-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                     <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU" 
                      alt="Baby" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-xl font-bold">{t.babyName}</h1>
                <p className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mt-2">{t.babyAge}</p>
            </div>

            <div className="px-4">
                <h3 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1">{t.profile.settings}</h3>
                <SettingItem icon="notifications" label={t.profile.notifications} toggle />
                <SettingItem icon="straighten" label={t.profile.units} />
                <SettingItem icon="group" label={t.profile.family} />
                
                <h3 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1 mt-6">Data</h3>
                <SettingItem icon="download" label={t.profile.export} />
                <button className="w-full mt-4 p-4 text-rose-500 font-bold text-sm bg-rose-50 rounded-xl">
                    {t.profile.logout}
                </button>
            </div>
        </ViewContainer>
    )
}

// --- Add Views ---

const AddLayout = ({ title, children, onCancel, onSave }: { title: string, children?: React.ReactNode, onCancel: () => void, onSave: () => void }) => {
    const { t } = useLanguage();
    return (
        <div className="pb-32 min-h-screen bg-background-light animate-slide-up relative z-50">
            <div className="sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-4 flex items-center justify-between border-b border-slate-50">
                <button onClick={onCancel} className="text-slate-400 font-medium text-sm">{t.addRecord.cancel}</button>
                <h1 className="text-lg font-bold">{title}</h1>
                <div className="w-10"></div>
            </div>
            <div className="p-4 flex flex-col gap-6">{children}</div>
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent">
                <button onClick={onSave} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-glow hover:brightness-105 active:scale-[0.98] transition-all">
                    {t.addRecord.save}
                </button>
            </div>
        </div>
    )
}

const AddFeedingView = ({ onBack, onSave }: { onBack: () => void, onSave: (d: any) => void }) => {
  const { t } = useLanguage();
  const [volume, setVolume] = useState(120);

  return (
    <AddLayout title={t.addRecord.title} onCancel={onBack} onSave={() => onSave({ type: 'formula', volume, time: 'Now', note: 'Added' })}>
           {/* Milk Type Grid */}
           <div>
               <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.addRecord.milkType}</h3>
               <div className="grid grid-cols-2 gap-3">
                   {/* Formula */}
                   <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 border-transparent bg-white shadow-sm cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                       <input type="radio" name="type" className="sr-only" />
                       <Icon name="baby_changing_station" className="text-3xl text-primary mb-2" />
                       <span className="text-sm font-semibold text-slate-600">{t.addRecord.types.formula}</span>
                   </label>
                   {/* Breast Milk */}
                   <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 border-primary bg-primary/5 shadow-sm cursor-pointer transition-all">
                       <input type="radio" name="type" className="sr-only" defaultChecked />
                       <Icon name="water_drop" className="text-3xl text-primary mb-2" filled />
                       <span className="text-sm font-semibold text-slate-600">{t.addRecord.types.breast}</span>
                   </label>
               </div>
           </div>

           {/* Volume Slider */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-50">
              <div className="flex items-center justify-between mb-8">
                  <div>
                      <h3 className="text-lg font-bold text-slate-800">{t.addRecord.volume}</h3>
                      <p className="text-xs text-slate-400">{t.addRecord.volumeSub}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{volume}</span>
                      <span className="text-sm font-bold text-slate-300 uppercase">ML</span>
                  </div>
              </div>
              <div className="relative w-full">
                <input 
                  type="range" min="0" max="300" step="5" value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent focus:outline-none"
                />
              </div>
           </div>

           {/* Time Picker Mock */}
           <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between">
               <div className="flex items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-lg text-primary">
                       <Icon name="schedule" filled />
                   </div>
                   <div>
                       <h3 className="font-bold text-slate-800 leading-none mb-1">{t.addRecord.time}</h3>
                       <p className="text-xs text-slate-400">{t.addRecord.timeSub}</p>
                   </div>
               </div>
               <div className="bg-slate-50 px-4 py-2 rounded-lg font-bold text-slate-800">10:30 AM</div>
           </div>
    </AddLayout>
  )
}

const AddDiaperView = ({ onBack, onSave }: { onBack: () => void, onSave: (d: any) => void }) => {
    const { t } = useLanguage();
    return (
        <AddLayout title={t.diaperAdd.title} onCancel={onBack} onSave={() => onSave({ type: 'poo', sub: 'Mixed', time: 'Now' })}>
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.diaperAdd.condition}</h3>
                <div className="grid grid-cols-3 gap-3">
                    {['pee', 'poo', 'mixed'].map((type) => (
                         <label key={type} className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 border-transparent bg-white shadow-sm cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                            <input type="radio" name="dtype" className="sr-only" defaultChecked={type === 'poo'} />
                            <span className="text-2xl mb-1">{type === 'pee' ? '💧' : type === 'poo' ? '💩' : '☣️'}</span>
                            <span className="text-xs font-bold text-slate-600 uppercase">{type}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.diaperAdd.color}</h3>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {['#eab308', '#22c55e', '#a855f7', '#3b82f6'].map(color => (
                        <div key={color} className="size-12 rounded-full border-4 border-white shadow-sm shrink-0" style={{backgroundColor: color}}></div>
                    ))}
                </div>
            </div>
        </AddLayout>
    )
}

const AddSleepView = ({ onBack, onSave }: { onBack: () => void, onSave: (d: any) => void }) => {
    const { t } = useLanguage();
    return (
        <AddLayout title={t.sleepAdd.title} onCancel={onBack} onSave={() => onSave({ start: '10:00', end: '11:00', duration: '1h' })}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between">
                <div>
                     <p className="text-xs font-bold uppercase text-slate-400 mb-1">{t.sleepAdd.start}</p>
                     <p className="text-2xl font-bold">8:00 PM</p>
                </div>
                <Icon name="arrow_forward" className="text-slate-300" />
                <div className="text-right">
                     <p className="text-xs font-bold uppercase text-slate-400 mb-1">{t.sleepAdd.end}</p>
                     <p className="text-2xl font-bold">6:00 AM</p>
                </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl flex justify-center">
                 <p className="text-indigo-600 font-bold">Total Duration: 10 Hours</p>
            </div>
        </AddLayout>
    )
}

const AddGrowthView = ({ onBack, onSave }: { onBack: () => void, onSave: (d: any) => void }) => {
    const { t } = useLanguage();
    return (
        <AddLayout title={t.growthAdd.title} onCancel={onBack} onSave={() => onSave({ weight: '7.0', height: '65', date: 'Just now' })}>
             <div className="space-y-4">
                 <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.growthAdd.weight}</label>
                     <input type="number" className="w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary" placeholder="0.0" />
                 </div>
                 <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.growthAdd.height}</label>
                     <input type="number" className="w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary" placeholder="0.0" />
                 </div>
             </div>
        </AddLayout>
    )
}


// 6. Navigation Bar
const BottomNav = ({ current, onChange }: { current: ViewState; onChange: (v: ViewState) => void }) => {
    const { t } = useLanguage();

    const NavItem = ({ view, icon, label, activeIcon }: { view: ViewState, icon: string, label: string, activeIcon?: string }) => {
        // Basic mapping to check active tab parent
        const isHome = (current === 'HOME' || current === 'ADD_FEEDING') && view === 'HOME';
        const isDiaper = (current === 'DIAPER_LOG' || current === 'ADD_DIAPER') && view === 'DIAPER_LOG';
        const isSleep = (current === 'SLEEP_LOG' || current === 'ADD_SLEEP') && view === 'SLEEP_LOG';
        const isGrowth = (current === 'GROWTH_LOG' || current === 'ADD_GROWTH') && view === 'GROWTH_LOG';
        const isProfile = current === 'PROFILE' && view === 'PROFILE';
        
        const isActive = isHome || isDiaper || isSleep || isGrowth || isProfile;

        return (
            <button 
                onClick={() => onChange(view)}
                className={`flex flex-col items-center gap-1 group w-16 ${isActive ? 'text-primary' : 'text-slate-300'}`}
            >
                <Icon 
                    name={isActive && activeIcon ? activeIcon : icon} 
                    className={`text-2xl transition-colors ${isActive ? '' : 'group-hover:text-primary/50'}`} 
                    filled={isActive}
                />
                <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
                {isActive && <div className="size-1 rounded-full bg-primary mt-0.5"></div>}
            </button>
        )
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-slate-100 pb-safe pt-2 px-6 z-30">
            <div className="flex justify-between items-center pb-4">
                <NavItem view="HOME" icon="dashboard" label={t.tabs.feeding} />
                <NavItem view="DIAPER_LOG" icon="opacity" activeIcon="opacity" label={t.tabs.diaper} />
                <NavItem view="SLEEP_LOG" icon="bedtime" activeIcon="bedtime" label={t.tabs.sleep} />
                <NavItem view="GROWTH_LOG" icon="show_chart" label={t.tabs.growth} />
                <NavItem view="PROFILE" icon="settings" label={t.tabs.me} />
            </div>
        </div>
    );
};

// --- Main App ---
export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [appData, setAppData] = useState<AppData>(INITIAL_DATA);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');
  
  // Generic handler to add data (demo purpose)
  const handleSave = (section: keyof AppData, newItem: any) => {
      setAppData(prev => ({
          ...prev,
          [section]: [{ id: Date.now(), ...newItem }, ...prev[section]]
      }));
      // Navigate back to the main list view for that section
      if(section === 'feedings') setCurrentView('HOME');
      if(section === 'diapers') setCurrentView('DIAPER_LOG');
      if(section === 'sleeps') setCurrentView('SLEEP_LOG');
      if(section === 'growth') setCurrentView('GROWTH_LOG');
  }

  const value = {
    lang,
    toggleLang,
    t: TEXTS[lang],
  };

  const renderView = () => {
    switch(currentView) {
        case 'ADD_FEEDING':
            return <AddFeedingView onBack={() => setCurrentView('HOME')} onSave={(item) => handleSave('feedings', item)} />;
        case 'ADD_DIAPER':
            return <AddDiaperView onBack={() => setCurrentView('DIAPER_LOG')} onSave={(item) => handleSave('diapers', item)} />;
        case 'ADD_SLEEP':
             return <AddSleepView onBack={() => setCurrentView('SLEEP_LOG')} onSave={(item) => handleSave('sleeps', item)} />;
        case 'ADD_GROWTH':
             return <AddGrowthView onBack={() => setCurrentView('GROWTH_LOG')} onSave={(item) => handleSave('growth', item)} />;
        case 'DIAPER_LOG':
            return <DiaperView onNavigate={setCurrentView} data={appData} />;
        case 'SLEEP_LOG':
            return <SleepView onNavigate={setCurrentView} data={appData} />;
        case 'GROWTH_LOG':
            return <GrowthView onNavigate={setCurrentView} data={appData} />;
        case 'PROFILE':
            return <ProfileView />;
        case 'HOME':
        default:
            return <HomeView onNavigate={setCurrentView} data={appData} />;
    }
  }

  // Check if we should show bottom nav (hide on add screens)
  const showNav = !currentView.startsWith('ADD_');

  return (
    <LanguageContext.Provider value={value}>
        <div className="max-w-md mx-auto min-h-screen bg-background-light relative shadow-2xl overflow-hidden">
            <LanguageSwitcher />
            
            {renderView()}

            {showNav && (
                <BottomNav current={currentView} onChange={setCurrentView} />
            )}
        </div>
        
        {/* Global Styles for Animations */}
        <style>{`
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.3s ease-out;
            }
            .animate-slide-up {
                animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .pb-safe {
                padding-bottom: env(safe-area-inset-bottom, 20px);
            }
        `}</style>
    </LanguageContext.Provider>
  );
}
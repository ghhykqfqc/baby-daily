import React, { useState, createContext, useContext, useEffect, useMemo, useRef } from 'react';
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

// --- Types & Interfaces ---
interface Feeding { id: number; type: string; volume: number; time: string; timestamp: number; note: string; }
interface Diaper { id: number; type: 'pee' | 'poo' | 'mixed'; sub: string; time: string; timestamp: number; color?: string; }
interface Sleep { id: number; start: string; end: string; duration: string; timestamp: number; }
interface Growth { id: number; weight: string; height: string; date: string; timestamp: number; }

interface AppData {
    feedings: Feeding[];
    diapers: Diaper[];
    sleeps: Sleep[];
    growth: Growth[];
}

const now = new Date();
const INITIAL_DATA: AppData = {
    feedings: [
        { id: 1, type: 'formula', volume: 110, time: "10:15", timestamp: now.getTime() - 10000000, note: 'Enfamil A+' },
        { id: 2, type: 'breast', volume: 90, time: "07:00", timestamp: now.getTime() - 20000000, note: 'Left Side' },
    ],
    diapers: [
        { id: 1, type: 'poo', sub: 'Mustard Yellow', time: "13:30", timestamp: now.getTime() - 5000000, color: '#eab308' },
        { id: 2, type: 'pee', sub: 'Normal', time: "11:15", timestamp: now.getTime() - 15000000 },
    ],
    sleeps: [
        { id: 1, start: "13:00", end: "15:00", duration: "2h 0m", timestamp: now.getTime() - 3600000 },
        { id: 2, start: "10:00", end: "10:45", duration: "45m", timestamp: now.getTime() - 18000000 },
    ],
    growth: [
        { id: 1, weight: "6.50", height: "62.00", date: new Date().toISOString().split('T')[0], timestamp: now.getTime() },
        { id: 2, weight: "6.20", height: "60.00", date: new Date(now.getTime() - 604800000).toISOString().split('T')[0], timestamp: now.getTime() - 604800000 },
        { id: 3, weight: "5.80", height: "58.00", date: new Date(now.getTime() - 1209600000).toISOString().split('T')[0], timestamp: now.getTime() - 1209600000 },
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

const Toast = ({ message, show, onClose }: { message: string, show: boolean, onClose: () => void }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    if (!show) return null;
    return (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-[100] animate-fade-in flex items-center gap-2 whitespace-nowrap">
            <Icon name="check_circle" className="text-primary text-lg" filled />
            {message}
        </div>
    );
};

const FAB = ({ onClick, icon = "add" }: { onClick: () => void, icon?: string }) => (
    <button 
        onClick={onClick}
        className="fixed bottom-24 right-6 size-14 bg-primary text-white ring-4 ring-white rounded-full shadow-glow flex items-center justify-center active:scale-90 transition-transform z-40 hover:brightness-105"
    >
        <Icon name={icon} className="text-3xl" />
    </button>
);

const ViewContainer = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`pb-24 animate-fade-in ${className}`}>{children}</div>
);

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children?: React.ReactNode }) => {
    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
             <div className="bg-white rounded-2xl w-full max-w-sm p-6 relative shadow-2xl">
                 <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
                     <Icon name="close" />
                 </button>
                 {children}
             </div>
        </div>
    )
}

const LanguageSwitcher = () => {
    const { lang, toggleLang } = useLanguage();
    return (
        <button 
            onClick={toggleLang}
            className="absolute top-20 right-4 z-40 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 active:scale-95 transition-all hover:bg-white/80"
        >
            {lang === 'en' ? 'EN / 中文' : '中文 / EN'}
        </button>
    );
};

// --- Mock Auth Service ---
const AuthService = {
    getKey: () => 'babyLog_users',
    getTokenKey: () => 'babyLog_token',
    
    getUsers: () => {
        const users = localStorage.getItem(AuthService.getKey());
        return users ? JSON.parse(users) : [];
    },

    register: (username: string, password: string, answers: any) => {
        const users = AuthService.getUsers();
        if (users.find((u: any) => u.username === username)) {
            throw new Error("Username already exists");
        }
        users.push({ username, password, answers });
        localStorage.setItem(AuthService.getKey(), JSON.stringify(users));
    },

    login: (username: string, password: string) => {
        const users = AuthService.getUsers();
        const user = users.find((u: any) => u.username === username && u.password === password);
        if (user) {
            // Mock Token
            const token = btoa(JSON.stringify({ user: username, exp: Date.now() + 3600000 })); 
            localStorage.setItem(AuthService.getTokenKey(), token);
            return user;
        }
        throw new Error("Invalid credentials");
    },

    resetPassword: (username: string, answers: any, newPassword: string) => {
        const users = AuthService.getUsers();
        const userIdx = users.findIndex((u: any) => u.username === username);
        if (userIdx === -1) throw new Error("User not found");

        const user = users[userIdx];
        if (user.answers.q1 !== answers.q1 || user.answers.q2 !== answers.q2 || user.answers.q3 !== answers.q3) {
            throw new Error("Security answers do not match");
        }

        users[userIdx].password = newPassword;
        localStorage.setItem(AuthService.getKey(), JSON.stringify(users));
    },

    checkAuth: () => {
        const token = localStorage.getItem(AuthService.getTokenKey());
        return !!token;
    },

    logout: () => {
        localStorage.removeItem(AuthService.getTokenKey());
    }
};

// --- Login View ---

const LoginView = ({ onLogin, onToast }: { onLogin: () => void, onToast: (msg: string) => void }) => {
    const { t } = useLanguage();
    const [mode, setMode] = useState<'LOGIN' | 'REGISTER' | 'FORGOT'>('LOGIN');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        q1: '',
        q2: '',
        q3: ''
    });

    const resetForm = () => setFormData({ username: '', password: '', q1: '', q2: '', q3: '' });

    const handleRegister = () => {
        if(!formData.username || !formData.password || !formData.q1 || !formData.q2 || !formData.q3) {
            onToast("Please fill all fields");
            return;
        }
        try {
            AuthService.register(formData.username, formData.password, { q1: formData.q1, q2: formData.q2, q3: formData.q3 });
            onToast("Registration successful! Please login.");
            setMode('LOGIN');
            resetForm();
        } catch (e: any) {
            onToast(e.message);
        }
    };

    const handleLogin = () => {
        if(!formData.username || !formData.password) {
             onToast("Please enter username and password");
             return;
        }
        try {
            AuthService.login(formData.username, formData.password);
            onLogin();
        } catch (e: any) {
            onToast(e.message);
        }
    };

    const handleReset = () => {
        if(!formData.username || !formData.password || !formData.q1 || !formData.q2 || !formData.q3) {
            onToast("Please fill all fields");
            return;
        }
        try {
            AuthService.resetPassword(formData.username, { q1: formData.q1, q2: formData.q2, q3: formData.q3 }, formData.password);
            onToast("Password reset successful!");
            setMode('LOGIN');
            resetForm();
        } catch (e: any) {
             onToast(e.message);
        }
    }

    const renderInput = (key: keyof typeof formData, placeholder: string, type = "text") => (
        <div className="bg-white px-4 py-3 rounded-xl border border-slate-100 flex items-center gap-3 mb-3 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
             <input 
                type={type} 
                value={formData[key]} 
                onChange={e => setFormData({...formData, [key]: e.target.value})}
                placeholder={placeholder}
                className="flex-1 outline-none text-sm font-medium bg-transparent"
             />
        </div>
    );

    return (
        <div className="min-h-screen bg-background-light flex flex-col items-center justify-center p-6 animate-fade-in relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

             <div className="w-full max-w-sm z-10">
                 <div className="text-center mb-10">
                    <div className="size-20 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/30">
                        <Icon name="child_care" className="text-4xl text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        {mode === 'LOGIN' ? t.login.welcome : mode === 'REGISTER' ? t.login.registerTitle : t.login.forgotTitle}
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">{t.login.subtitle}</p>
                 </div>

                 <div className="animate-slide-up">
                    {renderInput('username', t.login.username)}
                    
                    {(mode === 'REGISTER' || mode === 'FORGOT') && (
                        <div className="space-y-3 mb-3">
                            <p className="text-xs font-bold text-primary px-1 uppercase tracking-wider mt-4">Security Questions</p>
                            <div>
                                <label className="text-xs text-slate-500 font-bold ml-1">{t.login.q1}</label>
                                {renderInput('q1', t.login.answerPlaceholder)}
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 font-bold ml-1">{t.login.q2}</label>
                                {renderInput('q2', t.login.answerPlaceholder)}
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 font-bold ml-1">{t.login.q3}</label>
                                {renderInput('q3', t.login.answerPlaceholder)}
                            </div>
                            <p className="text-xs font-bold text-primary px-1 uppercase tracking-wider mt-4">Account</p>
                        </div>
                    )}

                    {renderInput('password', mode === 'FORGOT' ? t.login.newPassword : t.login.password, "password")}

                    {mode === 'LOGIN' && (
                         <div className="flex justify-end mb-6">
                             <button onClick={() => { setMode('FORGOT'); resetForm(); }} className="text-xs font-bold text-slate-400 hover:text-primary">{t.login.btnForgot}</button>
                         </div>
                    )}

                    <button 
                        onClick={mode === 'LOGIN' ? handleLogin : mode === 'REGISTER' ? handleRegister : handleReset} 
                        className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform mt-4"
                    >
                        {mode === 'LOGIN' ? t.login.btnLogin : mode === 'REGISTER' ? t.login.btnRegister : t.login.confirmReset}
                    </button>
                 </div>

                 <div className="mt-8 text-center">
                    {mode === 'LOGIN' ? (
                        <p className="text-sm text-slate-500">
                            {t.login.noAccount} <button onClick={() => { setMode('REGISTER'); resetForm(); }} className="font-bold text-primary ml-1">{t.login.btnRegister}</button>
                        </p>
                    ) : (
                        <button onClick={() => { setMode('LOGIN'); resetForm(); }} className="font-bold text-slate-500 text-sm flex items-center justify-center gap-1 mx-auto hover:text-primary">
                            <Icon name="arrow_back" className="text-sm" /> {t.login.backToLogin}
                        </button>
                    )}
                 </div>
             </div>
        </div>
    )
}

// --- Specific Views ---

const HomeView = ({ onNavigate, data, onDelete, onToast, onEdit, babyName }: any) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'today' | 'week'>('today');
  const [calendarDate, setCalendarDate] = useState(new Date().toISOString().split('T')[0]);

  const filteredFeedings = useMemo(() => {
      const targetDate = new Date(calendarDate);
      return data.feedings.filter((f: Feeding) => {
          const recDate = new Date(f.timestamp);
          if (filter === 'today') {
              return recDate.toDateString() === targetDate.toDateString();
          } else {
              // Mock week filter logic: show if within last 7 days of target date
              const diffTime = Math.abs(targetDate.getTime() - recDate.getTime());
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              return diffDays <= 7;
          }
      });
  }, [data.feedings, filter, calendarDate]);

  const totalVolume = filteredFeedings.reduce((acc: number, curr: Feeding) => acc + curr.volume, 0);
  
  return (
    <ViewContainer>
      {/* Top Bar */}
      <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full border-2 border-primary/20 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU" alt="Baby" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight truncate max-w-[150px]">{babyName}'s Daily</h1>
            <p className="text-xs text-primary/80 font-medium">{t.babyAge}</p>
          </div>
        </div>
        <div className="relative">
            <input 
                type="date" 
                value={calendarDate}
                onChange={(e) => setCalendarDate(e.target.value)}
                className="absolute inset-0 opacity-0 z-10 cursor-pointer"
            />
            <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 active:bg-slate-200 transition-colors">
                <Icon name="calendar_today" />
            </button>
        </div>
      </div>

      {/* AI Card */}
      <div className="px-4 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-emerald-50 to-white -z-10"></div>
           <div className="flex flex-col items-center mb-4">
            <Icon name="auto_awesome" className="text-primary text-3xl mb-1" filled />
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{t.aiPrediction}</span>
          </div>
          <h2 className="text-xl font-bold text-center mb-1">{t.feedingPrediction}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="opacity" className="text-slate-400 text-sm" filled />
            <p className="text-sm font-medium text-slate-500">{t.volumeEstimate}</p>
          </div>
          <div className="flex items-center justify-center">
             <button onClick={() => onToast("Reminder set!")} className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-glow active:scale-95 transition-transform">{t.notifyMe}</button>
          </div>
        </div>
      </div>

      <div className="sticky top-[68px] z-20 bg-background-light px-4 py-3">
        <div className="bg-slate-100 p-1 rounded-xl flex">
          <button className="flex-1 bg-white shadow-sm rounded-lg py-2 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-all"><Icon name="baby_changing_station" filled />{t.tabs.feeding}</button>
          <button onClick={() => onNavigate('DIAPER_LOG')} className="flex-1 py-2 flex items-center justify-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600 transition-all hover:bg-white/50 rounded-lg"><Icon name="opacity" />{t.tabs.diaper}</button>
        </div>
      </div>

      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar pb-2">
        <button onClick={() => setFilter('today')} className={`px-5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${filter === 'today' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>{t.filters.today}</button>
        <button onClick={() => setFilter('week')} className={`px-5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${filter === 'week' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>{t.filters.week}</button>
      </div>

      <div className="px-4 mt-2 mb-4">
        <div className="flex justify-between items-end mb-3">
          <h3 className="font-bold text-lg">{filter === 'today' ? t.todaysRecords : t.recentRecords}</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{t.total}: {totalVolume} ML</span>
        </div>
        <div className="space-y-3">
          {filteredFeedings.map((item: Feeding) => (
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
                    <p className="text-slate-400 text-xs font-semibold">{item.time} - {new Date(item.timestamp).toLocaleDateString()}</p>
                    <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-md font-bold max-w-[120px] truncate">{item.note}</span>
                  </div>
                </div>
                <button onClick={() => onEdit(item, 'ADD_FEEDING')} className="size-8 flex items-center justify-center text-slate-300 hover:text-primary"><Icon name="edit" className="text-lg" /></button>
                <button onClick={() => { if(window.confirm("Delete?")) onDelete(item.id, 'feedings'); }} className="size-8 flex items-center justify-center text-slate-300 hover:text-rose-500"><Icon name="delete" className="text-lg" /></button>
              </div>
          ))}
        </div>
      </div>
      <FAB onClick={() => onNavigate('ADD_FEEDING')} />
    </ViewContainer>
  );
};

const DiaperView = ({ onNavigate, data, onDelete, onToast, onEdit }: any) => {
  const { t } = useLanguage();
  const [typeFilter, setTypeFilter] = useState<'all' | 'pee' | 'poo'>('all');
  const [showHistory, setShowHistory] = useState(false);

  // Mock Smart AI Prediction logic
  const prediction = useMemo(() => {
      const latest = data.diapers[0]; // Data is sorted
      if (!latest) return { time: "12:00", type: 'pee' };
      
      const lastTime = new Date(latest.timestamp);
      // Predict 2.5 hours after last change
      const nextTime = new Date(lastTime.getTime() + 2.5 * 60 * 60 * 1000); 
      const timeStr = nextTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
      
      // Predict based on last type: if last was poo, next probably pee. If last pee, could be either, but let's say pee.
      const type = latest.type === 'poo' ? 'pee' : 'pee';
      
      return { time: timeStr, type };
  }, [data.diapers]);

  const filtered = useMemo(() => {
      let list = data.diapers;
      if (!showHistory) {
          const todayStr = new Date().toDateString();
          list = list.filter((d: Diaper) => new Date(d.timestamp).toDateString() === todayStr);
      }
      if (typeFilter === 'all') return list;
      return list.filter((d: Diaper) => d.type === typeFilter);
  }, [data.diapers, typeFilter, showHistory]);

  return (
    <ViewContainer>
       <div className="sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-3 flex items-center justify-between">
        <div className="size-10 flex items-center justify-center"><Icon name="child_care" className="text-3xl text-slate-800" /></div>
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg leading-tight">{t.tabs.diaper} Log</h1>
        </div>
        <button onClick={() => onToast("No new notifications")} className="size-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 active:bg-slate-50"><Icon name="notifications" /></button>
      </div>

      <div className="px-4 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5">
             <div className="flex items-center gap-2 mb-2 relative z-10">
                 <Icon name="auto_awesome" className="text-primary text-sm" filled />
                 <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{t.aiPrediction}</span>
             </div>
             
             {/* Smart Prediction Content */}
             <div className="flex items-center gap-3 mt-1 relative z-10">
                 <div className={`size-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${prediction.type === 'pee' ? 'bg-blue-50 text-blue-500 border border-blue-100' : 'bg-orange-50 text-orange-500 border border-orange-100'}`}>
                     {prediction.type === 'pee' ? '💧' : '💩'}
                 </div>
                 <div>
                     <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-none">{prediction.time}</h2>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">
                         Expected <span className={prediction.type === 'pee' ? 'text-blue-500' : 'text-orange-500'}>{prediction.type === 'pee' ? t.filters.pee : t.filters.poo}</span>
                     </p>
                 </div>
             </div>

            <div className="mt-4 flex items-center justify-between relative z-10">
                <button onClick={() => onToast("Schedule updated based on your feedback.")} className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-glow active:scale-95 transition-transform">{t.adjustSchedule}</button>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 size-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
        </div>
      </div>

      <div className="px-4 py-4">
          <div className="bg-slate-100 p-1.5 rounded-xl flex gap-2">
              {['all', 'pee', 'poo'].map(type => (
                   <button key={type} onClick={() => setTypeFilter(type as any)} className={`flex-1 h-9 rounded-lg text-sm font-bold transition-all capitalize ${typeFilter === type ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}>{type === 'pee' ? '💧 ' : type === 'poo' ? '💩 ' : ''}{t.filters[type as keyof typeof t.filters]}</button>
              ))}
          </div>
      </div>

      <div className="flex justify-between items-center px-4 mb-2">
          <h3 className="font-bold text-lg">{showHistory ? t.seeHistory : t.todaysRecords}</h3>
          <button onClick={() => setShowHistory(!showHistory)} className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">{showHistory ? t.filters.today : t.seeHistory}</button>
      </div>

      <div className="px-4 space-y-3">
          {filtered.map((item: Diaper) => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-50 shadow-soft flex items-center gap-4">
                <div className={`size-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${item.type === 'poo' ? 'bg-orange-100' : 'bg-blue-50'}`}>{item.type === 'poo' ? '💩' : item.type === 'pee' ? '💧' : '☣️'}</div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-slate-800">{item.type === 'poo' ? t.records.poo : item.type === 'pee' ? t.records.pee : "Mixed"}</p>
                        <span className="text-xs font-bold text-primary/60 uppercase">{item.time} - {new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-bold uppercase">{item.sub}</span>
                        {item.color && <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase" style={{backgroundColor: item.color + '20', color: item.color}}>Color</span>}
                    </div>
                </div>
                 <button onClick={() => onEdit(item, 'ADD_DIAPER')} className="size-8 flex items-center justify-center text-slate-300 hover:text-primary"><Icon name="edit" className="text-lg" /></button>
                <button onClick={() => { if(window.confirm("Delete?")) onDelete(item.id, 'diapers'); }} className="size-8 flex items-center justify-center text-slate-300 hover:text-rose-500"><Icon name="delete" className="text-xl" /></button>
            </div>
          ))}
      </div>
      <FAB onClick={() => onNavigate('ADD_DIAPER')} />
    </ViewContainer>
  );
};

const SleepView = ({ onNavigate, data, onDelete, onToast, onEdit }: any) => {
    const { t } = useLanguage();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <ViewContainer>
            <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
                <h1 className="font-bold text-xl">{t.tabs.sleep} Log</h1>
                <div className="relative">
                    <button onClick={() => setShowMenu(!showMenu)} className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 active:bg-slate-200"><Icon name="more_horiz" /></button>
                    {showMenu && (
                        <div className="absolute right-0 top-12 bg-white rounded-xl shadow-lg border border-slate-100 p-2 w-40 z-50">
                            <button className="w-full text-left px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => onToast("Exporting...")}>{t.profile.export}</button>
                            <button className="w-full text-left px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg" onClick={() => onToast("Settings...")}>{t.profile.settings}</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="px-4 mt-2 mb-6">
                <div className="bg-indigo-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 opacity-80 mb-2"><Icon name="bedtime" className="text-lg" filled /><span className="text-xs font-bold uppercase tracking-wider">{t.total} Sleep</span></div>
                        <h2 className="text-4xl font-bold mb-4">{data.sleeps.length > 0 ? "12h 30m" : "0h 0m"}</h2>
                    </div>
                </div>
            </div>

             <div className="px-4 mb-2">
                 <h3 className="font-bold text-lg mb-3">{t.recentRecords}</h3>
                 <div className="space-y-4 pl-4 border-l-2 border-indigo-100 ml-2">
                     {data.sleeps.map((item: Sleep) => (
                         <div key={item.id} className="relative pl-6 py-1 group">
                             <div className="absolute -left-[9px] top-3 size-4 bg-indigo-500 border-4 border-white rounded-full shadow-sm"></div>
                             <div className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm relative pr-20">
                                 <div className="flex justify-between items-start mb-2">
                                     <h4 className="font-bold text-slate-800">{t.records.sleep}</h4>
                                     <span className="text-indigo-500 font-bold text-sm bg-indigo-50 px-2 py-1 rounded-lg">{item.duration}</span>
                                 </div>
                                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium"><Icon name="schedule" className="text-sm" />{item.start} - {item.end} <span className="text-xs ml-2">({new Date(item.timestamp).toLocaleDateString()})</span></div>
                                 <div className="absolute right-2 top-2 flex flex-col gap-1">
                                    <button onClick={() => { if(window.confirm("Delete?")) onDelete(item.id, 'sleeps'); }} className="size-8 flex items-center justify-center text-slate-300 hover:text-rose-500"><Icon name="close" className="text-sm" /></button>
                                    <button onClick={() => onEdit(item, 'ADD_SLEEP')} className="size-8 flex items-center justify-center text-slate-300 hover:text-primary"><Icon name="edit" className="text-sm" /></button>
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

// Simple Chart Component
const SimpleChart = ({ data, dataKey, colorClass }: { data: Growth[], dataKey: 'weight' | 'height', colorClass: string }) => {
    if (data.length < 2) return null;
    const sorted = [...data].sort((a,b) => a.timestamp - b.timestamp);
    const values = sorted.map(d => parseFloat(d[dataKey]));
    const minVal = Math.min(...values) - 0.5;
    const maxVal = Math.max(...values) + 0.5;
    const points = values.map((v, i) => {
        const x = (i / (values.length - 1)) * 100;
        const y = 100 - ((v - minVal) / (maxVal - minVal)) * 100;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className={`h-24 w-full mt-4 flex items-end relative border-b border-l border-white/20 ${colorClass}`}>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline fill="none" stroke="white" strokeWidth="2" points={points} vectorEffect="non-scaling-stroke" />
                {values.map((v, i) => {
                     const x = (i / (values.length - 1)) * 100;
                     const y = 100 - ((v - minVal) / (maxVal - minVal)) * 100;
                     return <circle key={i} cx={x} cy={y} r="1.5" fill="white" />
                })}
            </svg>
        </div>
    )
}

const GrowthView = ({ onNavigate, data, onDelete, onToast, onEdit }: any) => {
    const { t } = useLanguage();
    const latest = data.growth[0] || { weight: "0.00", height: "0.00" };

    return (
        <ViewContainer>
            <div className="sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between">
                <h1 className="font-bold text-xl">{t.tabs.growth} Tracker</h1>
            </div>

            <div className="px-4 grid grid-cols-2 gap-3 mt-2">
                <div className="bg-blue-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                    <p className="text-xs font-bold uppercase opacity-80 mb-1">{t.records.weight}</p>
                    <p className="text-2xl font-bold">{parseFloat(latest.weight).toFixed(2)} kg</p>
                    <SimpleChart data={data.growth} dataKey="weight" colorClass="text-white" />
                </div>
                <div className="bg-teal-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                    <p className="text-xs font-bold uppercase opacity-80 mb-1">{t.records.height}</p>
                    <p className="text-2xl font-bold">{parseFloat(latest.height).toFixed(2)} cm</p>
                    <SimpleChart data={data.growth} dataKey="height" colorClass="text-white" />
                </div>
            </div>

            <div className="px-4 mt-6">
                 <h3 className="font-bold text-lg mb-3">History</h3>
                 <div className="space-y-3">
                     {data.growth.map((item: Growth) => (
                         <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                 <div className="bg-slate-100 p-2 rounded-lg text-slate-500"><Icon name="calendar_today" className="text-lg" /></div>
                                 <div><p className="font-bold text-slate-800">{item.date}</p></div>
                             </div>
                             <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="font-bold text-sm">{parseFloat(item.weight).toFixed(2)} kg</p>
                                    <p className="text-xs text-slate-400 font-bold">{parseFloat(item.height).toFixed(2)} cm</p>
                                </div>
                                <button onClick={() => onEdit(item, 'ADD_GROWTH')} className="p-2 text-slate-300 hover:text-primary"><Icon name="edit" /></button>
                                <button onClick={() => { if(window.confirm("Delete?")) onDelete(item.id, 'growth'); }} className="p-2 text-slate-300 hover:text-rose-500"><Icon name="delete" /></button>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
             <FAB onClick={() => onNavigate('ADD_GROWTH')} icon="add" />
        </ViewContainer>
    )
}

const ProfileView = ({ onToast, onLogout, babyName, setBabyName, data }: any) => {
    const { t } = useLanguage();
    const [isEditingName, setIsEditingName] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const [showFamily, setShowFamily] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU");
    const [settings, setSettings] = useState({ notifications: true, units: false });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => {
            const newVal = !prev[key];
            onToast(`${String(key)} set to ${newVal ? 'ON' : 'OFF'}`);
            return { ...prev, [key]: newVal };
        });
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAvatarUrl(url);
            onToast("Avatar updated!");
        }
    };

    const handleExport = () => {
        const rows = [
            ["Category", "Date", "Time", "Details", "Value"],
            ...data.feedings.map((f: Feeding) => ["Feeding", new Date(f.timestamp).toLocaleDateString(), f.time, f.type, f.volume + "ml"]),
            ...data.diapers.map((d: Diaper) => ["Diaper", new Date(d.timestamp).toLocaleDateString(), d.time, d.type, d.sub]),
            ...data.sleeps.map((s: Sleep) => ["Sleep", new Date(s.timestamp).toLocaleDateString(), `${s.start}-${s.end}`, "Duration", s.duration]),
            ...data.growth.map((g: Growth) => ["Growth", g.date, "-", `H:${g.height}cm`, `W:${g.weight}kg`]),
        ];
        const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${babyName}_baby_log.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onToast("Excel (CSV) file downloaded!");
    };

    const SettingItem = ({ icon, label, id, isToggle = false, onClick }: any) => (
        <button 
            onClick={() => isToggle ? toggleSetting(id as any) : onClick && onClick()}
            className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-50 shadow-sm mb-3 active:scale-[0.99] transition-transform"
        >
            <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-2 rounded-lg text-slate-600"><Icon name={icon} /></div>
                <span className="font-bold text-slate-700 text-sm">{label}</span>
            </div>
            {isToggle ? (
                <div className={`w-10 h-6 rounded-full relative transition-colors ${settings[id as keyof typeof settings] ? 'bg-primary' : 'bg-slate-300'}`}>
                    <div className={`absolute top-1 size-4 bg-white rounded-full shadow-sm transition-all ${settings[id as keyof typeof settings] ? 'right-1' : 'left-1'}`}></div>
                </div>
            ) : (<Icon name="chevron_right" className="text-slate-300" />)}
        </button>
    )

    return (
        <ViewContainer>
            <div className="flex flex-col items-center pt-8 pb-6 px-4">
                <div className="relative">
                    <div onClick={() => setShowAvatar(true)} className="size-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 cursor-pointer">
                        <img src={avatarUrl} alt="Baby" className="w-full h-full object-cover" />
                    </div>
                    <button onClick={() => fileInputRef.current?.click()} className="absolute bottom-4 right-0 bg-slate-800 text-white p-1.5 rounded-full shadow-md"><Icon name="photo_camera" className="text-sm" /></button>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" hidden />
                </div>
                
                {isEditingName ? (
                    <input 
                        value={babyName} onChange={(e) => setBabyName(e.target.value)} onBlur={() => setIsEditingName(false)} autoFocus
                        className="text-xl font-bold text-center border-b-2 border-primary outline-none bg-transparent"
                    />
                ) : (
                    <h1 onClick={() => setIsEditingName(true)} className="text-xl font-bold flex items-center gap-2 cursor-pointer">{babyName} <Icon name="edit" className="text-sm text-slate-300" /></h1>
                )}
                <p className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mt-2">{t.babyAge}</p>
            </div>

            <div className="px-4">
                <h3 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1">{t.profile.settings}</h3>
                <SettingItem icon="notifications" label={t.profile.notifications} id="notifications" isToggle />
                <SettingItem icon="straighten" label={t.profile.units} id="units" isToggle />
                <SettingItem icon="group" label={t.profile.family} id="family" onClick={() => setShowFamily(true)} />
                <h3 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1 mt-6">Data</h3>
                <SettingItem icon="download" label={t.profile.export} id="export" onClick={handleExport} />
                <button onClick={onLogout} className="w-full mt-4 p-4 text-rose-500 font-bold text-sm bg-rose-50 rounded-xl active:scale-[0.98] transition-transform">{t.profile.logout}</button>
            </div>

            <Modal isOpen={showAvatar} onClose={() => setShowAvatar(false)}>
                <img src={avatarUrl} className="w-full rounded-xl" />
            </Modal>

            <Modal isOpen={showFamily} onClose={() => setShowFamily(false)}>
                <h2 className="text-lg font-bold mb-2">{t.profile.familyTitle}</h2>
                <p className="text-sm text-slate-500 mb-4">{t.profile.familyDesc}</p>
                <div className="bg-slate-100 p-4 rounded-xl text-center text-2xl font-mono font-bold tracking-widest text-slate-700 mb-6">X8K-9LP</div>
                <button onClick={() => { onToast("Invite sent!"); setShowFamily(false); }} className="w-full bg-primary text-white py-3 rounded-xl font-bold">{t.profile.invite}</button>
            </Modal>
        </ViewContainer>
    )
}

// --- Add/Edit Views ---

const AddLayout = ({ title, children, onCancel, onSave }: any) => {
    const { t } = useLanguage();
    return (
        <div className="pb-32 min-h-screen bg-background-light animate-slide-up relative z-50">
            <div className="sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-4 flex items-center justify-between border-b border-slate-50">
                <button onClick={onCancel} className="text-slate-400 font-medium text-sm hover:text-slate-600">{t.addRecord.cancel}</button>
                <h1 className="text-lg font-bold">{title}</h1>
                <div className="w-10"></div>
            </div>
            <div className="p-4 flex flex-col gap-6">{children}</div>
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent">
                <button onClick={onSave} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-glow hover:brightness-105 active:scale-[0.98] transition-all">{t.addRecord.save}</button>
            </div>
        </div>
    )
}

const AddFeedingView = ({ onBack, onSave, initialData }: any) => {
  const { t } = useLanguage();
  const [volume, setVolume] = useState(initialData?.volume || 120);
  const [type, setType] = useState(initialData?.type || 'breast');
  const [time, setTime] = useState(initialData?.time || new Date().toTimeString().slice(0,5));
  const [note, setNote] = useState(initialData?.note || '');

  const handleSave = () => {
      onSave({ 
          id: initialData?.id || Date.now(),
          type, 
          volume, 
          time: time, 
          timestamp: new Date().setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1])),
          note: note || (type === 'formula' ? 'Formula' : 'Breast Milk') 
      });
  }

  return (
    <AddLayout title={initialData ? t.addRecord.editTitle : t.addRecord.title} onCancel={onBack} onSave={handleSave}>
           <div>
               <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.addRecord.milkType}</h3>
               <div className="grid grid-cols-2 gap-3">
                   <label className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === 'formula' ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`}>
                       <input type="radio" name="type" className="sr-only" checked={type === 'formula'} onChange={() => setType('formula')} />
                       <Icon name="baby_changing_station" className="text-3xl text-primary mb-2" />
                       <span className="text-sm font-semibold text-slate-600">{t.addRecord.types.formula}</span>
                   </label>
                   <label className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === 'breast' ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`}>
                       <input type="radio" name="type" className="sr-only" checked={type === 'breast'} onChange={() => setType('breast')} />
                       <Icon name="water_drop" className="text-3xl text-primary mb-2" filled />
                       <span className="text-sm font-semibold text-slate-600">{t.addRecord.types.breast}</span>
                   </label>
               </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-50">
              <div className="flex items-center justify-between mb-8">
                  <div><h3 className="text-lg font-bold text-slate-800">{t.addRecord.volume}</h3><p className="text-xs text-slate-400">{t.addRecord.volumeSub}</p></div>
                  <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-primary">{volume}</span><span className="text-sm font-bold text-slate-300 uppercase">ML</span></div>
              </div>
              <input type="range" min="0" max="300" step="5" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full appearance-none bg-transparent focus:outline-none" />
           </div>
           <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between">
               <div className="flex items-center gap-4"><div className="bg-primary/10 p-3 rounded-lg text-primary"><Icon name="schedule" filled /></div><div><h3 className="font-bold text-slate-800 leading-none mb-1">{t.addRecord.time}</h3></div></div>
               <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="bg-slate-50 px-4 py-2 rounded-lg font-bold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20" />
           </div>
           <div>
               <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.addRecord.notes}</h3>
               <textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-white rounded-xl p-4 shadow-sm text-sm border-none ring-1 ring-slate-100 focus:ring-primary/50 outline-none resize-none min-h-[100px]" placeholder={t.addRecord.notesPlaceholder}></textarea>
           </div>
    </AddLayout>
  )
}

const AddDiaperView = ({ onBack, onSave, initialData }: any) => {
    const { t } = useLanguage();
    const [type, setType] = useState(initialData?.type || 'pee');
    const [color, setColor] = useState(initialData?.color || '#eab308');
    const [consistency, setConsistency] = useState(initialData?.sub || 'Normal');
    const [time, setTime] = useState(initialData?.time || new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}));

    const handleSave = () => {
        onSave({
            id: initialData?.id || Date.now(),
            type,
            sub: consistency,
            color: type === 'pee' ? undefined : color,
            time: time,
            timestamp: initialData?.timestamp || Date.now()
        });
    }

    return (
        <AddLayout title={initialData ? t.diaperAdd.editTitle : t.diaperAdd.title} onCancel={onBack} onSave={handleSave}>
             <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between">
               <div className="flex items-center gap-4"><div className="bg-primary/10 p-3 rounded-lg text-primary"><Icon name="schedule" filled /></div><div><h3 className="font-bold text-slate-800 leading-none mb-1">{t.diaperAdd.time}</h3></div></div>
               <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="bg-slate-50 px-4 py-2 rounded-lg font-bold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20" />
           </div>
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.diaperAdd.condition}</h3>
                <div className="grid grid-cols-3 gap-3">
                    {['pee', 'poo', 'mixed'].map((t) => (
                         <label key={t} className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === t ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`}>
                            <input type="radio" name="dtype" className="sr-only" checked={type === t} onChange={() => setType(t)} />
                            <span className="text-2xl mb-1">{t === 'pee' ? '💧' : t === 'poo' ? '💩' : '☣️'}</span>
                            <span className="text-xs font-bold text-slate-600 uppercase">{t}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            {(type === 'poo' || type === 'mixed') && (
                <>
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.diaperAdd.color}</h3>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {['#eab308', '#22c55e', '#a855f7', '#3b82f6', '#78350f'].map(c => (
                            <button key={c} onClick={() => setColor(c)} className={`size-12 rounded-full border-4 shadow-sm shrink-0 transition-transform ${color === c ? 'scale-110 border-slate-300' : 'border-white'}`} style={{backgroundColor: c}}></button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1">{t.diaperAdd.consistency}</h3>
                    <div className="flex gap-2 flex-wrap">
                        {['Soft', 'Hard', 'Loose', 'Pasty', 'Normal'].map(c => (
                            <button key={c} onClick={() => setConsistency(c)} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${consistency === c ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-100'}`}>{c}</button>
                        ))}
                    </div>
                </div>
                </>
            )}
        </AddLayout>
    )
}

const AddSleepView = ({ onBack, onSave, initialData }: any) => {
    const { t } = useLanguage();
    const [start, setStart] = useState(initialData?.start || "20:00");
    const [end, setEnd] = useState(initialData?.end || "06:00");

    const calculateDuration = () => {
        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);
        let mins = (eh * 60 + em) - (sh * 60 + sm);
        if (mins < 0) mins += 24 * 60; 
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}h ${m}m`;
    }

    const handleSave = () => {
        onSave({
            id: initialData?.id || Date.now(),
            start: start,
            end: end,
            duration: calculateDuration(),
            timestamp: initialData?.timestamp || Date.now()
        });
    }

    return (
        <AddLayout title={initialData ? t.sleepAdd.editTitle : t.sleepAdd.title} onCancel={onBack} onSave={handleSave}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between gap-4">
                <div className="flex-1"><p className="text-xs font-bold uppercase text-slate-400 mb-1">{t.sleepAdd.start}</p><input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="text-2xl font-bold bg-transparent outline-none w-full" /></div>
                <Icon name="arrow_forward" className="text-slate-300" />
                <div className="flex-1 text-right"><p className="text-xs font-bold uppercase text-slate-400 mb-1">{t.sleepAdd.end}</p><input type="time" value={end} onChange={(e) => setEnd(e.target.value)} className="text-2xl font-bold bg-transparent outline-none w-full text-right" /></div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl flex justify-center"><p className="text-indigo-600 font-bold">Total Duration: {calculateDuration()}</p></div>
        </AddLayout>
    )
}

const AddGrowthView = ({ onBack, onSave, initialData }: any) => {
    const { t } = useLanguage();
    const [weight, setWeight] = useState(initialData?.weight || '');
    const [height, setHeight] = useState(initialData?.height || '');
    const [date, setDate] = useState(initialData?.date || new Date().toISOString().split('T')[0]);

    const formatDecimal = (val: string) => parseFloat(val || "0").toFixed(2);

    const handleSave = () => {
         onSave({ 
             id: initialData?.id || Date.now(),
             weight: formatDecimal(weight), 
             height: formatDecimal(height), 
             date, 
             timestamp: new Date(date).getTime() 
        });
    }

    return (
        <AddLayout title={initialData ? t.growthAdd.editTitle : t.growthAdd.title} onCancel={onBack} onSave={handleSave}>
             <div className="space-y-4">
                 <div><label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.growthAdd.date}</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary" /></div>
                 <div><label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.growthAdd.weight}</label><input type="number" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary" placeholder="0.00" /></div>
                 <div><label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.growthAdd.height}</label><input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary" placeholder="0.00" /></div>
             </div>
        </AddLayout>
    )
}

const BottomNav = ({ current, onChange }: { current: ViewState; onChange: (v: ViewState) => void }) => {
    const { t } = useLanguage();
    const NavItem = ({ view, icon, label, activeIcon }: { view: ViewState, icon: string, label: string, activeIcon?: string }) => {
        const isHome = (current === 'HOME' || current === 'ADD_FEEDING') && view === 'HOME';
        const isDiaper = (current === 'DIAPER_LOG' || current === 'ADD_DIAPER') && view === 'DIAPER_LOG';
        const isSleep = (current === 'SLEEP_LOG' || current === 'ADD_SLEEP') && view === 'SLEEP_LOG';
        const isGrowth = (current === 'GROWTH_LOG' || current === 'ADD_GROWTH') && view === 'GROWTH_LOG';
        const isProfile = current === 'PROFILE' && view === 'PROFILE';
        const isActive = isHome || isDiaper || isSleep || isGrowth || isProfile;
        return (
            <button onClick={() => onChange(view)} className={`flex flex-col items-center gap-1 group w-16 ${isActive ? 'text-primary' : 'text-slate-300'}`}>
                <Icon name={isActive && activeIcon ? activeIcon : icon} className={`text-2xl transition-colors ${isActive ? '' : 'group-hover:text-primary/50'}`} filled={isActive} />
                <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
                {isActive && <div className="size-1 rounded-full bg-primary mt-0.5 transition-all"></div>}
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
  const [currentView, setCurrentView] = useState<ViewState>('LOGIN'); // Start at Login
  const [appData, setAppData] = useState<AppData>(INITIAL_DATA);
  const [toast, setToast] = useState({ show: false, msg: '' });
  const [editingItem, setEditingItem] = useState<any>(null);
  const [babyName, setBabyName] = useState("Leo");

  useEffect(() => {
     if(AuthService.checkAuth()) {
         setCurrentView('HOME');
     }
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');
  const showToast = (msg: string) => setToast({ show: true, msg });

  const handleSave = (section: keyof AppData, newItem: any) => {
      setAppData(prev => {
          // Check if editing existing item
          const exists = prev[section].some(i => i.id === newItem.id);
          let newList;
          if (exists) {
              newList = prev[section].map(i => i.id === newItem.id ? newItem : i);
          } else {
              newList = [newItem, ...prev[section]];
          }
          // Sort by timestamp descending (newest first)
          newList.sort((a, b) => b.timestamp - a.timestamp);
          return { ...prev, [section]: newList };
      });
      showToast(editingItem ? "Record updated!" : "Record saved!");
      setEditingItem(null);
      // Navigate back
      if(section === 'feedings') setCurrentView('HOME');
      if(section === 'diapers') setCurrentView('DIAPER_LOG');
      if(section === 'sleeps') setCurrentView('SLEEP_LOG');
      if(section === 'growth') setCurrentView('GROWTH_LOG');
  }

  const handleDelete = (id: number, section: keyof AppData) => {
      setAppData(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
      showToast("Record deleted");
  }

  const handleEdit = (item: any, view: ViewState) => {
      setEditingItem(item);
      setCurrentView(view);
  }

  const handleCancel = () => {
      setEditingItem(null);
      if(currentView === 'ADD_FEEDING') setCurrentView('HOME');
      if(currentView === 'ADD_DIAPER') setCurrentView('DIAPER_LOG');
      if(currentView === 'ADD_SLEEP') setCurrentView('SLEEP_LOG');
      if(currentView === 'ADD_GROWTH') setCurrentView('GROWTH_LOG');
  }

  const handleLogout = () => {
      AuthService.logout();
      setCurrentView('LOGIN');
  }

  const value = { lang, toggleLang, t: TEXTS[lang] };

  const renderView = () => {
    switch(currentView) {
        case 'LOGIN': return <LoginView onLogin={() => setCurrentView('HOME')} onToast={showToast} />
        case 'ADD_FEEDING': return <AddFeedingView onBack={handleCancel} onSave={(item: any) => handleSave('feedings', item)} initialData={editingItem} />;
        case 'ADD_DIAPER': return <AddDiaperView onBack={handleCancel} onSave={(item: any) => handleSave('diapers', item)} initialData={editingItem} />;
        case 'ADD_SLEEP': return <AddSleepView onBack={handleCancel} onSave={(item: any) => handleSave('sleeps', item)} initialData={editingItem} />;
        case 'ADD_GROWTH': return <AddGrowthView onBack={handleCancel} onSave={(item: any) => handleSave('growth', item)} initialData={editingItem} />;
        case 'DIAPER_LOG': return <DiaperView onNavigate={setCurrentView} data={appData} onDelete={handleDelete} onToast={showToast} onEdit={handleEdit} />;
        case 'SLEEP_LOG': return <SleepView onNavigate={setCurrentView} data={appData} onDelete={handleDelete} onToast={showToast} onEdit={handleEdit} />;
        case 'GROWTH_LOG': return <GrowthView onNavigate={setCurrentView} data={appData} onDelete={handleDelete} onToast={showToast} onEdit={handleEdit} />;
        case 'PROFILE': return <ProfileView onToast={showToast} onLogout={handleLogout} babyName={babyName} setBabyName={setBabyName} data={appData} />;
        case 'HOME': default: return <HomeView onNavigate={setCurrentView} data={appData} onDelete={handleDelete} onToast={showToast} onEdit={handleEdit} babyName={babyName} />;
    }
  }

  const showNav = !currentView.startsWith('ADD_') && currentView !== 'LOGIN';

  return (
    <LanguageContext.Provider value={value}>
        <div className="max-w-md mx-auto min-h-screen bg-background-light relative shadow-2xl overflow-hidden">
            <Toast show={toast.show} message={toast.msg} onClose={() => setToast(prev => ({ ...prev, show: false }))} />
            {currentView !== 'LOGIN' && <LanguageSwitcher />}
            {renderView()}
            {showNav && <BottomNav current={currentView} onChange={setCurrentView} />}
        </div>
        <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            .animate-fade-in { animation: fadeIn 0.3s ease-out; }
            .animate-slide-up { animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
            .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
        `}</style>
    </LanguageContext.Provider>
  );
}
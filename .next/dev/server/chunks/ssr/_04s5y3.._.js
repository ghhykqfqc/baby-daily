module.exports = [
"[project]/constants.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXTS",
    ()=>TEXTS
]);
const TEXTS = {
    en: {
        appTitle: "Leo's Daily",
        babyName: "Leo",
        babyAge: "4 Months Old",
        aiPrediction: "AI PREDICTION",
        feedingPrediction: "Next feeding expected at 2:30 PM",
        diaperPrediction: "Next diaper change expected at 3:15 PM",
        volumeEstimate: "Volume estimate: approx. 120ml",
        notifyMe: "Notify Me",
        adjustSchedule: "Adjust Schedule",
        tabs: {
            feeding: "Feeding",
            diaper: "Diaper",
            sleep: "Sleep",
            growth: "Growth",
            me: "Profile"
        },
        filters: {
            today: "Today",
            week: "Week",
            filter: "Filters",
            all: "All",
            pee: "Pee",
            poo: "Poo"
        },
        recentRecords: "Recent Records",
        todaysRecords: "Today's Records",
        seeHistory: "See History",
        total: "TOTAL",
        yesterday: "YESTERDAY",
        records: {
            formula: "Formula Feed",
            breastMilk: "Breast Milk",
            pee: "Pee Record",
            poo: "Poo Record",
            sleep: "Sleep Session",
            weight: "Weight",
            height: "Height"
        },
        addRecord: {
            title: "Add Feeding",
            editTitle: "Edit Feeding",
            cancel: "Cancel",
            save: "Save Record",
            milkType: "MILK TYPE",
            volume: "Volume",
            volumeSub: "Adjust the amount consumed",
            time: "Time",
            timeSub: "Defaults to current time",
            notes: "NOTES",
            notesPlaceholder: "Add a note (e.g., baby was very hungry today)",
            aiInsight: "AI Insight: Feeding slightly earlier than predicted. We'll update your daily schedule based on this record.",
            types: {
                formula: "Formula",
                breast: "Breast Milk",
                water: "Water",
                solids: "Solids"
            }
        },
        diaperAdd: {
            title: "Add Diaper",
            editTitle: "Edit Diaper",
            condition: "CONDITION",
            consistency: "CONSISTENCY",
            color: "COLOR",
            time: "Time Check"
        },
        sleepAdd: {
            title: "Add Sleep",
            editTitle: "Edit Sleep",
            start: "Start Time",
            end: "End Time",
            duration: "Duration"
        },
        growthAdd: {
            title: "Add Growth",
            editTitle: "Edit Growth",
            weight: "Weight (kg)",
            height: "Height (cm)",
            head: "Head Circumference (cm)",
            date: "Date"
        },
        profile: {
            settings: "Settings",
            notifications: "Notifications",
            units: "Units (Metric/Imperial)",
            export: "Export Data",
            logout: "Log Out",
            family: "Family Sharing",
            familyTitle: "Invite Family",
            familyDesc: "Share this code with your partner:",
            invite: "Invite"
        },
        login: {
            welcome: "Welcome to BabyLog",
            subtitle: "Secure & Smart Baby Tracking",
            username: "Username",
            password: "Password",
            btnLogin: "Login",
            btnRegister: "Register Account",
            btnForgot: "Forgot Password?",
            registerTitle: "Create Account",
            forgotTitle: "Reset Password",
            newPassword: "New Password",
            confirmReset: "Reset Password",
            backToLogin: "Back to Login",
            haveAccount: "Already have an account?",
            noAccount: "Don't have an account?",
            q1: "Baby's Zodiac Sign",
            q2: "Mom's Favorite Song",
            q3: "Mom's Favorite Dish",
            answerPlaceholder: "Enter your answer"
        },
        details: {
            enfamil: "Enfamil A+",
            leftSide: "Left Side",
            mustardYellow: "MUSTARD YELLOW",
            softConsistency: "SOFT CONSISTENCY",
            normalQuantity: "Normal quantity, clear",
            heavy: "Heavy diaper change",
            golden: "GOLDEN",
            pasty: "PASTY"
        }
    },
    zh: {
        appTitle: "Leo 的日常",
        babyName: "Leo",
        babyAge: "4 个月大",
        aiPrediction: "AI 智能预测",
        feedingPrediction: "预计下次喂奶时间 14:30",
        diaperPrediction: "预计下次换尿布时间 15:15",
        volumeEstimate: "预计奶量：约 120ml",
        notifyMe: "提醒我",
        adjustSchedule: "调整计划",
        tabs: {
            feeding: "喂养",
            diaper: "尿布",
            sleep: "睡眠",
            growth: "生长",
            me: "我的"
        },
        filters: {
            today: "今天",
            week: "本周",
            filter: "筛选",
            all: "全部",
            pee: "小便",
            poo: "大便"
        },
        recentRecords: "最近记录",
        todaysRecords: "今日记录",
        seeHistory: "查看历史",
        total: "总计",
        yesterday: "昨天",
        records: {
            formula: "配方奶",
            breastMilk: "母乳",
            pee: "小便记录",
            poo: "大便记录",
            sleep: "睡眠记录",
            weight: "体重",
            height: "身高"
        },
        addRecord: {
            title: "添加喂养",
            editTitle: "编辑喂养记录",
            cancel: "取消",
            save: "保存记录",
            milkType: "喂养类型",
            volume: "奶量",
            volumeSub: "调整摄入量",
            time: "时间",
            timeSub: "默认为当前时间",
            notes: "备注",
            notesPlaceholder: "添加备注（例如：宝宝今天特别饿）",
            aiInsight: "AI 洞察：比预测时间稍早进食。我们将根据此记录更新您的每日计划。",
            types: {
                formula: "配方奶",
                breast: "母乳",
                water: "喝水",
                solids: "辅食"
            }
        },
        diaperAdd: {
            title: "添加尿布",
            editTitle: "编辑尿布记录",
            condition: "状态",
            consistency: "质地",
            color: "颜色",
            time: "检查时间"
        },
        sleepAdd: {
            title: "添加睡眠",
            editTitle: "编辑睡眠记录",
            start: "开始时间",
            end: "结束时间",
            duration: "时长"
        },
        growthAdd: {
            title: "添加生长数据",
            editTitle: "编辑生长数据",
            weight: "体重 (kg)",
            height: "身高 (cm)",
            head: "头围 (cm)",
            date: "日期"
        },
        profile: {
            settings: "设置",
            notifications: "通知提醒",
            units: "单位 (公制/英制)",
            export: "导出数据",
            logout: "退出登录",
            family: "家庭共享",
            familyTitle: "邀请家人",
            familyDesc: "将此代码分享给您的家人：",
            invite: "邀请"
        },
        login: {
            welcome: "欢迎使用 BabyLog",
            subtitle: "安全、智能的宝宝成长记录",
            username: "用户名",
            password: "密码",
            btnLogin: "登录",
            btnRegister: "注册新账号",
            btnForgot: "忘记密码?",
            registerTitle: "创建账号",
            forgotTitle: "重置密码",
            newPassword: "新密码",
            confirmReset: "确认重置",
            backToLogin: "返回登录",
            haveAccount: "已有账号?",
            noAccount: "还没有账号?",
            q1: "宝宝的生肖",
            q2: "宝妈最喜欢的一首歌",
            q3: "宝妈最喜欢的一道菜",
            answerPlaceholder: "请输入答案"
        },
        details: {
            enfamil: "美赞臣 A+",
            leftSide: "左侧",
            mustardYellow: "芥末黄",
            softConsistency: "质地软",
            normalQuantity: "量正常，清澈",
            heavy: "尿量大",
            golden: "金黄色",
            pasty: "糊状"
        }
    }
};
}),
"[project]/App.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [ssr] (ecmascript)");
;
;
;
// --- Contexts ---
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    lang: 'en',
    toggleLang: ()=>{},
    t: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TEXTS"]['en']
});
const useLanguage = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(LanguageContext);
const now = new Date();
const INITIAL_DATA = {
    feedings: [
        {
            id: 1,
            type: 'formula',
            volume: 110,
            time: "10:15",
            timestamp: now.getTime() - 10000000,
            note: 'Enfamil A+'
        },
        {
            id: 2,
            type: 'breast',
            volume: 90,
            time: "07:00",
            timestamp: now.getTime() - 20000000,
            note: 'Left Side'
        }
    ],
    diapers: [
        {
            id: 1,
            type: 'poo',
            sub: 'Mustard Yellow',
            time: "13:30",
            timestamp: now.getTime() - 5000000,
            color: '#eab308'
        },
        {
            id: 2,
            type: 'pee',
            sub: 'Normal',
            time: "11:15",
            timestamp: now.getTime() - 15000000
        }
    ],
    sleeps: [
        {
            id: 1,
            start: "13:00",
            end: "15:00",
            duration: "2h 0m",
            timestamp: now.getTime() - 3600000
        },
        {
            id: 2,
            start: "10:00",
            end: "10:45",
            duration: "45m",
            timestamp: now.getTime() - 18000000
        }
    ],
    growth: [
        {
            id: 1,
            weight: "6.50",
            height: "62.00",
            date: new Date().toISOString().split('T')[0],
            timestamp: now.getTime()
        },
        {
            id: 2,
            weight: "6.20",
            height: "60.00",
            date: new Date(now.getTime() - 604800000).toISOString().split('T')[0],
            timestamp: now.getTime() - 604800000
        },
        {
            id: 3,
            weight: "5.80",
            height: "58.00",
            date: new Date(now.getTime() - 1209600000).toISOString().split('T')[0],
            timestamp: now.getTime() - 1209600000
        }
    ]
};
// --- Reusable Components ---
const Icon = ({ name, className = "", filled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: `material-symbols-outlined select-none ${className}`,
        style: {
            fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0"
        },
        children: name
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Toast = ({ message, show, onClose })=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (show) {
            const timer = setTimeout(onClose, 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        show,
        onClose
    ]);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed top-24 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-[100] animate-fade-in flex items-center gap-2 whitespace-nowrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                name: "check_circle",
                className: "text-primary text-lg",
                filled: true
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            message
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const FAB = ({ onClick, icon = "add" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "fixed bottom-24 right-6 size-14 bg-primary text-white ring-4 ring-white rounded-full shadow-glow flex items-center justify-center active:scale-90 transition-transform z-40 hover:brightness-105",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
            name: icon,
            className: "text-3xl"
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 84,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ViewContainer = ({ children, className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `pb-24 animate-fade-in ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const Modal = ({ isOpen, onClose, children })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-sm p-6 relative shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute right-4 top-4 text-slate-400 hover:text-slate-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                        name: "close"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 98,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 97,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 96,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const LanguageSwitcher = ()=>{
    const { lang, toggleLang } = useLanguage();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: toggleLang,
        className: "absolute top-20 right-4 z-40 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 active:scale-95 transition-all hover:bg-white/80",
        children: lang === 'en' ? 'EN / 中文' : '中文 / EN'
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const DataService = {
    async fetchAll (babyId) {
        const [feedings, diapers, sleeps, growth] = await Promise.all([
            fetch(`/api/feedings?babyId=${babyId}`).then((r)=>r.json()),
            fetch(`/api/diapers?babyId=${babyId}`).then((r)=>r.json()),
            fetch(`/api/sleeps?babyId=${babyId}`).then((r)=>r.json()),
            fetch(`/api/growth?babyId=${babyId}`).then((r)=>r.json())
        ]);
        return {
            feedings,
            diapers,
            sleeps,
            growth
        };
    },
    async saveRecord (type, babyId, data) {
        const url = type === 'feeding' ? '/api/feedings' : type === 'diaper' ? '/api/diapers' : type === 'sleep' ? '/api/sleeps' : '/api/growth';
        const body = {
            baby_id: babyId,
            ...data
        };
        const response = await fetch(`${url}?babyId=${babyId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to save record');
        }
        return await response.json();
    },
    async updateRecord (type, data) {
        const url = type === 'feeding' ? '/api/feedings' : type === 'diaper' ? '/api/diapers' : type === 'sleep' ? '/api/sleeps' : '/api/growth';
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update record');
        }
        return await response.json();
    },
    async deleteRecord (type, id) {
        const url = type === 'feeding' ? '/api/feedings' : type === 'diaper' ? '/api/diapers' : type === 'sleep' ? '/api/sleeps' : '/api/growth';
        const response = await fetch(`${url}?id=${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete record');
        }
    },
    async fetchBabies (userId) {
        const response = await fetch(`/api/baby?userId=${userId}`);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch babies');
        }
        return await response.json();
    },
    async createBaby (userId, name, birthDate) {
        const response = await fetch('/api/baby', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                name,
                birth_date: birthDate
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create baby');
        }
        return await response.json();
    }
};
const AuthService = {
    getKey: ()=>'babyLog_users',
    getTokenKey: ()=>'babyLog_token',
    makeAuthRequest: async (action, data)=>{
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action,
                ...data
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Authentication failed');
        }
        return await response.json();
    },
    register: async (username, password, answers)=>{
        const result = await AuthService.makeAuthRequest('register', {
            username,
            password,
            answers
        });
        return result.user;
    },
    login: async (username, password)=>{
        const result = await AuthService.makeAuthRequest('login', {
            username,
            password
        });
        if (result.user) {
            const token = btoa(JSON.stringify({
                user: result.user,
                exp: Date.now() + 86400000
            }));
            localStorage.setItem(AuthService.getTokenKey(), token);
            return result.user;
        }
        throw new Error("Login failed");
    },
    resetPassword: async (username, answers, newPassword)=>{
        await AuthService.makeAuthRequest('forgot-password', {
            username,
            answers,
            newPassword
        });
    },
    checkAuth: ()=>{
        const token = localStorage.getItem(AuthService.getTokenKey());
        if (token) {
            try {
                const parsedToken = JSON.parse(atob(token));
                return Date.now() < parsedToken.exp;
            } catch  {
                return false;
            }
        }
        return false;
    },
    getUser: ()=>{
        const token = localStorage.getItem(AuthService.getTokenKey());
        if (token) {
            try {
                const parsedToken = JSON.parse(atob(token));
                if (Date.now() < parsedToken.exp) {
                    return parsedToken.user;
                }
            } catch  {
                return null;
            }
        }
        return null;
    },
    logout: ()=>{
        localStorage.removeItem(AuthService.getTokenKey());
    }
};
const LoginView = ({ onLogin, onToast })=>{
    const { t } = useLanguage();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('LOGIN');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        username: '',
        password: '',
        q1: '',
        q2: '',
        q3: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false); // 添加加载状态
    const resetForm = ()=>setFormData({
            username: '',
            password: '',
            q1: '',
            q2: '',
            q3: ''
        });
    const handleRegister = async ()=>{
        if (!formData.username || !formData.password || !formData.q1 || !formData.q2 || !formData.q3) {
            onToast("Please fill all fields");
            return;
        }
        setLoading(true);
        try {
            await AuthService.register(formData.username, formData.password, {
                q1: formData.q1,
                q2: formData.q2,
                q3: formData.q3
            });
            onToast("Registration successful! Please login.");
            setMode('LOGIN');
            resetForm();
        } catch (e) {
            onToast(e.message);
        } finally{
            setLoading(false);
        }
    };
    const handleLogin = async ()=>{
        if (!formData.username || !formData.password) {
            onToast("Please enter username and password");
            return;
        }
        setLoading(true);
        try {
            const user = await AuthService.login(formData.username, formData.password);
            onLogin(user);
        } catch (e) {
            onToast(e.message);
        } finally{
            setLoading(false);
        }
    };
    const handleReset = async ()=>{
        if (!formData.username || !formData.q1 || !formData.q2 || !formData.q3 || !formData.password) {
            onToast("Please fill all fields");
            return;
        }
        setLoading(true);
        try {
            await AuthService.resetPassword(formData.username, {
                q1: formData.q1,
                q2: formData.q2,
                q3: formData.q3
            }, formData.password);
            onToast("Password reset successful!");
            setMode('LOGIN');
            resetForm();
        } catch (e) {
            onToast(e.message);
        } finally{
            setLoading(false);
        }
    };
    const renderInput = (key, placeholder, type = "text")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white px-4 py-3 rounded-xl border border-slate-100 flex items-center gap-3 mb-3 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                type: type,
                value: formData[key],
                onChange: (e)=>setFormData({
                        ...formData,
                        [key]: e.target.value
                    }),
                placeholder: placeholder,
                className: "flex-1 outline-none text-sm font-medium bg-transparent"
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 351,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 350,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background-light flex flex-col items-center justify-center p-6 animate-fade-in relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 364,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 365,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full max-w-sm z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "size-20 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "child_care",
                                    className: "text-4xl text-white"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 370,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-slate-800",
                                children: mode === 'LOGIN' ? t.login.welcome : mode === 'REGISTER' ? t.login.registerTitle : t.login.forgotTitle
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 372,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-1",
                                children: t.login.subtitle
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 375,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 368,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-primary px-1 uppercase tracking-wider mt-4",
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            renderInput('username', t.login.username),
                            renderInput('password', mode === 'FORGOT' ? t.login.newPassword : t.login.password, "password"),
                            (mode === 'REGISTER' || mode === 'FORGOT') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-primary px-1 uppercase tracking-wider mt-4",
                                        children: "Security Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 385,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-500 font-bold ml-1",
                                                children: t.login.q1
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 387,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            renderInput('q1', t.login.answerPlaceholder)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 386,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-500 font-bold ml-1",
                                                children: t.login.q2
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 391,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            renderInput('q2', t.login.answerPlaceholder)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 390,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-500 font-bold ml-1",
                                                children: t.login.q3
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 395,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            renderInput('q3', t.login.answerPlaceholder)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 394,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 384,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'LOGIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex justify-end mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('FORGOT');
                                        resetForm();
                                    },
                                    className: "text-xs font-bold text-slate-400 hover:text-primary",
                                    children: t.login.btnForgot
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 403,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 402,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: mode === 'LOGIN' ? handleLogin : mode === 'REGISTER' ? handleRegister : handleReset,
                                disabled: loading,
                                className: `w-full ${loading ? 'bg-slate-400' : 'bg-slate-800 hover:bg-slate-700'} text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform mt-4`,
                                children: loading ? 'Loading...' : mode === 'LOGIN' ? t.login.btnLogin : mode === 'REGISTER' ? t.login.btnRegister : t.login.confirmReset
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 378,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: mode === 'LOGIN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500",
                            children: [
                                t.login.noAccount,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('REGISTER');
                                        resetForm();
                                    },
                                    className: "font-bold text-primary ml-1",
                                    children: t.login.btnRegister
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 424,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 423,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setMode('LOGIN');
                                resetForm();
                            },
                            className: "font-bold text-slate-500 text-sm flex items-center justify-center gap-1 mx-auto hover:text-primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "arrow_back",
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 428,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                t.login.backToLogin
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 427,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 421,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 367,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 362,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Specific Views ---
const HomeView = ({ onNavigate, data, onDelete, onToast, onEdit, babyName })=>{
    const { t } = useLanguage();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('today');
    const [calendarDate, setCalendarDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const filteredFeedings = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const targetDate = new Date(calendarDate);
        return data.feedings.filter((f)=>{
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
    }, [
        data.feedings,
        filter,
        calendarDate
    ]);
    const totalVolume = filteredFeedings.reduce((acc, curr)=>acc + curr.volume, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "size-10 rounded-full border-2 border-primary/20 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU",
                                    alt: "Baby",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-lg leading-tight truncate max-w-[150px]",
                                        children: [
                                            babyName,
                                            "'s Daily"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-primary/80 font-medium",
                                        children: t.babyAge
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: calendarDate,
                                onChange: (e)=>setCalendarDate(e.target.value),
                                className: "absolute inset-0 opacity-0 z-10 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 475,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 active:bg-slate-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "calendar_today"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 482,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-emerald-50 to-white -z-10"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "auto_awesome",
                                    className: "text-primary text-3xl mb-1",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold tracking-widest text-primary uppercase",
                                    children: t.aiPrediction
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 491,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-center mb-1",
                            children: t.feedingPrediction
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "opacity",
                                    className: "text-slate-400 text-sm",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-slate-500",
                                    children: t.volumeEstimate
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>onToast("Reminder set!"),
                                className: "bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-glow active:scale-95 transition-transform",
                                children: t.notifyMe
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 501,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-[68px] z-20 bg-background-light px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 p-1 rounded-xl flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "flex-1 bg-white shadow-sm rounded-lg py-2 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "baby_changing_station",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 508,
                                    columnNumber: 158
                                }, ("TURBOPACK compile-time value", void 0)),
                                t.tabs.feeding
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>onNavigate('DIAPER_LOG'),
                            className: "flex-1 py-2 flex items-center justify-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600 transition-all hover:bg-white/50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "opacity"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 509,
                                    columnNumber: 221
                                }, ("TURBOPACK compile-time value", void 0)),
                                t.tabs.diaper
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 507,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-2 px-4 overflow-x-auto no-scrollbar pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter('today'),
                        className: `px-5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${filter === 'today' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`,
                        children: t.filters.today
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter('week'),
                        className: `px-5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${filter === 'week' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`,
                        children: t.filters.week
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mt-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg",
                                children: filter === 'today' ? t.todaysRecords : t.recentRecords
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-wide",
                                children: [
                                    t.total,
                                    ": ",
                                    totalVolume,
                                    " ML"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: filteredFeedings.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: `size-12 rounded-full flex items-center justify-center ${item.type === 'formula' ? 'bg-emerald-50 text-primary' : 'bg-rose-50 text-rose-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                            name: item.type === 'formula' ? "nutrition" : "favorite",
                                            filled: true
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 527,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-slate-800",
                                                        children: item.type === 'formula' ? t.records.formula : t.records.breastMilk
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-lg",
                                                        children: [
                                                            item.volume,
                                                            "ml"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold",
                                                        children: [
                                                            item.time,
                                                            " - ",
                                                            new Date(item.timestamp).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-md font-bold max-w-[120px] truncate",
                                                        children: item.note
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 529,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onEdit(item, 'ADD_FEEDING'),
                                        className: "size-8 flex items-center justify-center text-slate-300 hover:text-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                            name: "edit",
                                            className: "text-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 539,
                                            columnNumber: 155
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (window.confirm("Delete?")) onDelete(item.id, 'feedings');
                                        },
                                        className: "size-8 flex items-center justify-center text-slate-300 hover:text-rose-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                            name: "delete",
                                            className: "text-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 540,
                                            columnNumber: 193
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 540,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 525,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FAB, {
                onClick: ()=>onNavigate('ADD_FEEDING')
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 462,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DiaperView = ({ onNavigate, data, onDelete, onToast, onEdit })=>{
    const { t } = useLanguage();
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Mock Smart AI Prediction logic
    const prediction = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const latest = data.diapers[0]; // Data is sorted
        if (!latest) return {
            time: "12:00",
            type: 'pee'
        };
        const lastTime = new Date(latest.timestamp);
        // Predict 2.5 hours after last change
        const nextTime = new Date(lastTime.getTime() + 2.5 * 60 * 60 * 1000);
        const timeStr = nextTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        // Predict based on last type: if last was poo, next probably pee. If last pee, could be either, but let's say pee.
        const type = latest.type === 'poo' ? 'pee' : 'pee';
        return {
            time: timeStr,
            type
        };
    }, [
        data.diapers
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        let list = data.diapers;
        if (!showHistory) {
            const todayStr = new Date().toDateString();
            list = list.filter((d)=>new Date(d.timestamp).toDateString() === todayStr);
        }
        if (typeFilter === 'all') return list;
        return list.filter((d)=>d.type === typeFilter);
    }, [
        data.diapers,
        typeFilter,
        showHistory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "size-10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                            name: "child_care",
                            className: "text-3xl text-slate-800"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 584,
                            columnNumber: 67
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-lg leading-tight",
                            children: [
                                t.tabs.diaper,
                                " Log"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 586,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToast("No new notifications"),
                        className: "size-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 active:bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                            name: "notifications"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 588,
                            columnNumber: 208
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 583,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-soft p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "auto_awesome",
                                    className: "text-primary text-sm",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 594,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold tracking-widest text-primary uppercase",
                                    children: t.aiPrediction
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 595,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 593,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-1 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `size-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${prediction.type === 'pee' ? 'bg-blue-50 text-blue-500 border border-blue-100' : 'bg-orange-50 text-orange-500 border border-orange-100'}`,
                                    children: prediction.type === 'pee' ? '💧' : '💩'
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 600,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-slate-800 tracking-tight leading-none",
                                            children: prediction.time
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 604,
                                            columnNumber: 22
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-slate-400 uppercase tracking-wide mt-1",
                                            children: [
                                                "Expected ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: prediction.type === 'pee' ? 'text-blue-500' : 'text-orange-500',
                                                    children: prediction.type === 'pee' ? t.filters.pee : t.filters.poo
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 605,
                                            columnNumber: 22
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 603,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 599,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>onToast("Schedule updated based on your feedback."),
                                className: "bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-glow active:scale-95 transition-transform",
                                children: t.adjustSchedule
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 612,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 -mr-8 -mt-8 size-32 bg-primary/10 rounded-full blur-2xl z-0"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 p-1.5 rounded-xl flex gap-2",
                    children: [
                        'all',
                        'pee',
                        'poo'
                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTypeFilter(type),
                            className: `flex-1 h-9 rounded-lg text-sm font-bold transition-all capitalize ${typeFilter === type ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`,
                            children: [
                                type === 'pee' ? '💧 ' : type === 'poo' ? '💩 ' : '',
                                t.filters[type]
                            ]
                        }, type, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 623,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 621,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 620,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-4 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg",
                        children: showHistory ? t.seeHistory : t.todaysRecords
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 629,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHistory(!showHistory),
                        className: "text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full",
                        children: showHistory ? t.filters.today : t.seeHistory
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 630,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 space-y-3",
                children: filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl border border-slate-50 shadow-soft flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `size-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${item.type === 'poo' ? 'bg-orange-100' : 'bg-blue-50'}`,
                                children: item.type === 'poo' ? '💩' : item.type === 'pee' ? '💧' : '☣️'
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 636,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-slate-800",
                                                children: item.type === 'poo' ? t.records.poo : item.type === 'pee' ? t.records.pee : "Mixed"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 639,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-primary/60 uppercase",
                                                children: [
                                                    item.time,
                                                    " - ",
                                                    new Date(item.timestamp).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 640,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 638,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-bold uppercase",
                                                children: item.sub
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 643,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                                style: {
                                                    backgroundColor: item.color + '20',
                                                    color: item.color
                                                },
                                                children: "Color"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 644,
                                                columnNumber: 40
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 642,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 637,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(item, 'ADD_DIAPER'),
                                className: "size-8 flex items-center justify-center text-slate-300 hover:text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "edit",
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 647,
                                    columnNumber: 155
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 647,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (window.confirm("Delete?")) onDelete(item.id, 'diapers');
                                },
                                className: "size-8 flex items-center justify-center text-slate-300 hover:text-rose-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "delete",
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 648,
                                    columnNumber: 192
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 648,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 635,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FAB, {
                onClick: ()=>onNavigate('ADD_DIAPER')
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 582,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SleepView = ({ onNavigate, data, onDelete, onToast, onEdit })=>{
    const { t } = useLanguage();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-xl",
                        children: [
                            t.tabs.sleep,
                            " Log"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 664,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowMenu(!showMenu),
                                className: "size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 active:bg-slate-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "more_horiz"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 666,
                                    columnNumber: 181
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 666,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-12 bg-white rounded-xl shadow-lg border border-slate-100 p-2 w-40 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg",
                                        onClick: ()=>onToast("Exporting..."),
                                        children: t.profile.export
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 669,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg",
                                        onClick: ()=>onToast("Settings..."),
                                        children: t.profile.settings
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 670,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 668,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 665,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 663,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mt-2 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 678,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 opacity-80 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                            name: "bedtime",
                                            className: "text-lg",
                                            filled: true
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 680,
                                            columnNumber: 82
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            children: [
                                                t.total,
                                                " Sleep"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 680,
                                            columnNumber: 132
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 680,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-4",
                                    children: data.sleeps.length > 0 ? "12h 30m" : "0h 0m"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 681,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 679,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 677,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 676,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-3",
                        children: t.recentRecords
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 687,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pl-4 border-l-2 border-indigo-100 ml-2",
                        children: data.sleeps.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative pl-6 py-1 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-[9px] top-3 size-4 bg-indigo-500 border-4 border-white rounded-full shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 691,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-xl border border-slate-50 shadow-sm relative pr-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-slate-800",
                                                        children: t.records.sleep
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-indigo-500 font-bold text-sm bg-indigo-50 px-2 py-1 rounded-lg",
                                                        children: item.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 693,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-slate-400 text-sm font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                        name: "schedule",
                                                        className: "text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 110
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.start,
                                                    " - ",
                                                    item.end,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-xs ml-2",
                                                        children: [
                                                            "(",
                                                            new Date(item.timestamp).toLocaleDateString(),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 180
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 697,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute right-2 top-2 flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (window.confirm("Delete?")) onDelete(item.id, 'sleeps');
                                                        },
                                                        className: "size-8 flex items-center justify-center text-slate-300 hover:text-rose-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                            name: "close",
                                                            className: "text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/App.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 211
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(item, 'ADD_SLEEP'),
                                                        className: "size-8 flex items-center justify-center text-slate-300 hover:text-primary",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                            name: "edit",
                                                            className: "text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/App.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 173
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 698,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 692,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 690,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 688,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 686,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FAB, {
                onClick: ()=>onNavigate('ADD_SLEEP'),
                icon: "bedtime"
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 707,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 662,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Simple Chart Component
const SimpleChart = ({ data, dataKey, colorClass })=>{
    if (data.length < 2) return null;
    const sorted = [
        ...data
    ].sort((a, b)=>a.timestamp - b.timestamp);
    const values = sorted.map((d)=>parseFloat(d[dataKey]));
    const minVal = Math.min(...values) - 0.5;
    const maxVal = Math.max(...values) + 0.5;
    const points = values.map((v, i)=>{
        const x = i / (values.length - 1) * 100;
        const y = 100 - (v - minVal) / (maxVal - minVal) * 100;
        return `${x},${y}`;
    }).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `h-24 w-full mt-4 flex items-end relative border-b border-l border-white/20 ${colorClass}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            className: "w-full h-full overflow-visible",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "2",
                    points: points,
                    vectorEffect: "non-scaling-stroke"
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 728,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                values.map((v, i)=>{
                    const x = i / (values.length - 1) * 100;
                    const y = 100 - (v - minVal) / (maxVal - minVal) * 100;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                        cx: x,
                        cy: y,
                        r: "1.5",
                        fill: "white"
                    }, i, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 732,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 727,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 726,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const GrowthView = ({ onNavigate, data, onDelete, onToast, onEdit })=>{
    const { t } = useLanguage();
    const latest = data.growth[0] || {
        weight: "0.00",
        height: "0.00"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-background-light z-30 px-4 py-3 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "font-bold text-xl",
                    children: [
                        t.tabs.growth,
                        " Tracker"
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 746,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 745,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 grid grid-cols-2 gap-3 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-blue-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase opacity-80 mb-1",
                                children: t.records.weight
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 751,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold",
                                children: [
                                    parseFloat(latest.weight).toFixed(2),
                                    " kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 752,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SimpleChart, {
                                data: data.growth,
                                dataKey: "weight",
                                colorClass: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 753,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 750,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-teal-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase opacity-80 mb-1",
                                children: t.records.height
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 756,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold",
                                children: [
                                    parseFloat(latest.height).toFixed(2),
                                    " cm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 757,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SimpleChart, {
                                data: data.growth,
                                dataKey: "height",
                                colorClass: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 758,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 755,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 749,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-3",
                        children: "History"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 763,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: data.growth.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-100 p-2 rounded-lg text-slate-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                    name: "calendar_today",
                                                    className: "text-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 94
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 768,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-slate-800",
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 769,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 767,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm",
                                                        children: [
                                                            parseFloat(item.weight).toFixed(2),
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 font-bold",
                                                        children: [
                                                            parseFloat(item.height).toFixed(2),
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 774,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 772,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onEdit(item, 'ADD_GROWTH'),
                                                className: "p-2 text-slate-300 hover:text-primary",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                    name: "edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 134
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 776,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (window.confirm("Delete?")) onDelete(item.id, 'growth');
                                                },
                                                className: "p-2 text-slate-300 hover:text-rose-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                    name: "delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 171
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 777,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 771,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 766,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 764,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 762,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FAB, {
                onClick: ()=>onNavigate('ADD_GROWTH'),
                icon: "add"
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 783,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 744,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ProfileView = ({ onToast, onLogout, babyName, setBabyName, data })=>{
    const { t } = useLanguage();
    const [isEditingName, setIsEditingName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showAvatar, setShowAvatar] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showFamily, setShowFamily] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGotOuiDiUWycvqIOLyjz_DqrCHIYvjDsE-o6Fy4cwM8_3vNKrzlfPw7BAeDwWcfvCRF5_QMT4SMLedDvyfTdUNSHDXc7NPDpMP4wCtqNBcHSbzoMg0HPiAEwKg31TI1OmXPqgP3vPHln0X5DOxQVQIjPsroDhv-XnikciBjxTiM32d1LNu8FgfeDaQ2o1a-3GyvY7EGL7husEQBYdyT6B2KaXUT9sKZ6jsESEe6MgYz7V-JzgkvlgkYcUGc-BGc7P2MM0CHofU");
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        notifications: true,
        units: false
    });
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const toggleSetting = (key)=>{
        setSettings((prev)=>{
            const newVal = !prev[key];
            onToast(`${String(key)} set to ${newVal ? 'ON' : 'OFF'}`);
            return {
                ...prev,
                [key]: newVal
            };
        });
    };
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAvatarUrl(url);
            onToast("Avatar updated!");
        }
    };
    const handleExport = ()=>{
        const rows = [
            [
                "Category",
                "Date",
                "Time",
                "Details",
                "Value"
            ],
            ...data.feedings.map((f)=>[
                    "Feeding",
                    new Date(f.timestamp).toLocaleDateString(),
                    f.time,
                    f.type,
                    f.volume + "ml"
                ]),
            ...data.diapers.map((d)=>[
                    "Diaper",
                    new Date(d.timestamp).toLocaleDateString(),
                    d.time,
                    d.type,
                    d.sub
                ]),
            ...data.sleeps.map((s)=>[
                    "Sleep",
                    new Date(s.timestamp).toLocaleDateString(),
                    `${s.start}-${s.end}`,
                    "Duration",
                    s.duration
                ]),
            ...data.growth.map((g)=>[
                    "Growth",
                    g.date,
                    "-",
                    `H:${g.height}cm`,
                    `W:${g.weight}kg`
                ])
        ];
        const csvContent = "data:text/csv;charset=utf-8," + rows.map((e)=>e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${babyName}_baby_log.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onToast("Excel (CSV) file downloaded!");
    };
    const SettingItem = ({ icon, label, id, isToggle = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
            onClick: ()=>isToggle ? toggleSetting(id) : onClick && onClick(),
            className: "w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-50 shadow-sm mb-3 active:scale-[0.99] transition-transform",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 p-2 rounded-lg text-slate-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                name: icon
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 839,
                                columnNumber: 76
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 839,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "font-bold text-slate-700 text-sm",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 840,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 838,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                isToggle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: `w-10 h-6 rounded-full relative transition-colors ${settings[id] ? 'bg-primary' : 'bg-slate-300'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `absolute top-1 size-4 bg-white rounded-full shadow-sm transition-all ${settings[id] ? 'right-1' : 'left-1'}`
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 844,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 843,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                    name: "chevron_right",
                    className: "text-slate-300"
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 846,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 834,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center pt-8 pb-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                onClick: ()=>setShowAvatar(true),
                                className: "size-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: avatarUrl,
                                    alt: "Baby",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 855,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 854,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>fileInputRef.current?.click(),
                                className: "absolute bottom-4 right-0 bg-slate-800 text-white p-1.5 rounded-full shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "photo_camera",
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 857,
                                    columnNumber: 166
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 857,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleFileChange,
                                accept: "image/*",
                                hidden: true
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 858,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 853,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isEditingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        value: babyName,
                        onChange: (e)=>setBabyName(e.target.value),
                        onBlur: ()=>setIsEditingName(false),
                        autoFocus: true,
                        className: "text-xl font-bold text-center border-b-2 border-primary outline-none bg-transparent"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 862,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        onClick: ()=>setIsEditingName(true),
                        className: "text-xl font-bold flex items-center gap-2 cursor-pointer",
                        children: [
                            babyName,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                name: "edit",
                                className: "text-sm text-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 867,
                                columnNumber: 144
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 867,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mt-2",
                        children: t.babyAge
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 869,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 852,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1",
                        children: t.profile.settings
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 873,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SettingItem, {
                        icon: "notifications",
                        label: t.profile.notifications,
                        id: "notifications",
                        isToggle: true
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 874,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SettingItem, {
                        icon: "straighten",
                        label: t.profile.units,
                        id: "units",
                        isToggle: true
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 875,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SettingItem, {
                        icon: "group",
                        label: t.profile.family,
                        id: "family",
                        onClick: ()=>setShowFamily(true)
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 876,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-xs uppercase text-slate-400 tracking-wider mb-3 px-1 mt-6",
                        children: "Data"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 877,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SettingItem, {
                        icon: "download",
                        label: t.profile.export,
                        id: "export",
                        onClick: handleExport
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 878,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "w-full mt-4 p-4 text-rose-500 font-bold text-sm bg-rose-50 rounded-xl active:scale-[0.98] transition-transform",
                        children: t.profile.logout
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 879,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 872,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                isOpen: showAvatar,
                onClose: ()=>setShowAvatar(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    src: avatarUrl,
                    className: "w-full rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 883,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 882,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                isOpen: showFamily,
                onClose: ()=>setShowFamily(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-2",
                        children: t.profile.familyTitle
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 887,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 mb-4",
                        children: t.profile.familyDesc
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 888,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-slate-100 p-4 rounded-xl text-center text-2xl font-mono font-bold tracking-widest text-slate-700 mb-6",
                        children: "X8K-9LP"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 889,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onToast("Invite sent!");
                            setShowFamily(false);
                        },
                        className: "w-full bg-primary text-white py-3 rounded-xl font-bold",
                        children: t.profile.invite
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 890,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 886,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 851,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Add/Edit Views ---
const AddLayout = ({ title, children, onCancel, onSave })=>{
    const { t } = useLanguage();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "pb-32 min-h-screen bg-background-light animate-slide-up relative z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-background-light/95 backdrop-blur z-30 px-4 py-4 flex items-center justify-between border-b border-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "text-slate-400 font-medium text-sm hover:text-slate-600",
                        children: t.addRecord.cancel
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 903,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-bold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 904,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-10"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 905,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 902,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 907,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: onSave,
                    className: "w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-glow hover:brightness-105 active:scale-[0.98] transition-all",
                    children: t.addRecord.save
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 909,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 908,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 901,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const AddFeedingView = ({ onBack, onSave, initialData })=>{
    const { t } = useLanguage();
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.volume || 120);
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.type || 'breast');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.time || new Date().toTimeString().slice(0, 5));
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.note || '');
    const handleSave = ()=>{
        onSave({
            id: initialData?.id || Date.now(),
            type,
            volume,
            time: time,
            timestamp: new Date().setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1])),
            note: note || (type === 'formula' ? 'Formula' : 'Breast Milk')
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddLayout, {
        title: initialData ? t.addRecord.editTitle : t.addRecord.title,
        onCancel: onBack,
        onSave: handleSave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-wider mb-3 px-1",
                        children: t.addRecord.milkType
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 936,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: `relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === 'formula' ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "type",
                                        className: "sr-only",
                                        checked: type === 'formula',
                                        onChange: ()=>setType('formula')
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 939,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                        name: "baby_changing_station",
                                        className: "text-3xl text-primary mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 940,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-slate-600",
                                        children: t.addRecord.types.formula
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 941,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 938,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: `relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === 'breast' ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "type",
                                        className: "sr-only",
                                        checked: type === 'breast',
                                        onChange: ()=>setType('breast')
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 944,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                        name: "water_drop",
                                        className: "text-3xl text-primary mb-2",
                                        filled: true
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 945,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-slate-600",
                                        children: t.addRecord.types.breast
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 946,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 943,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 937,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 935,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-sm border border-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-slate-800",
                                        children: t.addRecord.volume
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 952,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: t.addRecord.volumeSub
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 952,
                                        columnNumber: 98
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 952,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold text-primary",
                                        children: volume
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 953,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-slate-300 uppercase",
                                        children: "ML"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 953,
                                        columnNumber: 127
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 953,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 951,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "0",
                        max: "300",
                        step: "5",
                        value: volume,
                        onChange: (e)=>setVolume(Number(e.target.value)),
                        className: "w-full appearance-none bg-transparent focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 955,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 950,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-primary/10 p-3 rounded-lg text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "schedule",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 958,
                                    columnNumber: 116
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 958,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 leading-none mb-1",
                                    children: t.addRecord.time
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 958,
                                    columnNumber: 158
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 958,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 958,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "time",
                        value: time,
                        onChange: (e)=>setTime(e.target.value),
                        className: "bg-slate-50 px-4 py-2 rounded-lg font-bold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 959,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 957,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-wider mb-3 px-1",
                        children: t.addRecord.notes
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 962,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        value: note,
                        onChange: (e)=>setNote(e.target.value),
                        className: "w-full bg-white rounded-xl p-4 shadow-sm text-sm border-none ring-1 ring-slate-100 focus:ring-primary/50 outline-none resize-none min-h-[100px]",
                        placeholder: t.addRecord.notesPlaceholder
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 963,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 961,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 934,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AddDiaperView = ({ onBack, onSave, initialData })=>{
    const { t } = useLanguage();
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.type || 'pee');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.color || '#eab308');
    const [consistency, setConsistency] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.sub || 'Normal');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.time || new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }));
    const handleSave = ()=>{
        onSave({
            id: initialData?.id || Date.now(),
            type,
            sub: consistency,
            color: type === 'pee' ? undefined : color,
            time: time,
            timestamp: initialData?.timestamp || Date.now()
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddLayout, {
        title: initialData ? t.diaperAdd.editTitle : t.diaperAdd.title,
        onCancel: onBack,
        onSave: handleSave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-primary/10 p-3 rounded-lg text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "schedule",
                                    filled: true
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 990,
                                    columnNumber: 116
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 990,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 leading-none mb-1",
                                    children: t.diaperAdd.time
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 990,
                                    columnNumber: 158
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 990,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 990,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "time",
                        value: time,
                        onChange: (e)=>setTime(e.target.value),
                        className: "bg-slate-50 px-4 py-2 rounded-lg font-bold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 991,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 989,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-wider mb-3 px-1",
                        children: t.diaperAdd.condition
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 994,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            'pee',
                            'poo',
                            'mixed'
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: `relative flex flex-col items-center justify-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all ${type === t ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-primary/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "dtype",
                                        className: "sr-only",
                                        checked: type === t,
                                        onChange: ()=>setType(t)
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 998,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-2xl mb-1",
                                        children: t === 'pee' ? '💧' : t === 'poo' ? '💩' : '☣️'
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 999,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-slate-600 uppercase",
                                        children: t
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, t, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 997,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 995,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 993,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (type === 'poo' || type === 'mixed') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold uppercase tracking-wider mb-3 px-1",
                                children: t.diaperAdd.color
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1009,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 overflow-x-auto no-scrollbar pb-2",
                                children: [
                                    '#eab308',
                                    '#22c55e',
                                    '#a855f7',
                                    '#3b82f6',
                                    '#78350f'
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setColor(c),
                                        className: `size-12 rounded-full border-4 shadow-sm shrink-0 transition-transform ${color === c ? 'scale-110 border-slate-300' : 'border-white'}`,
                                        style: {
                                            backgroundColor: c
                                        }
                                    }, c, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1010,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1008,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold uppercase tracking-wider mb-3 px-1",
                                children: t.diaperAdd.consistency
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1017,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    'Soft',
                                    'Hard',
                                    'Loose',
                                    'Pasty',
                                    'Normal'
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConsistency(c),
                                        className: `px-4 py-2 rounded-lg text-sm font-bold transition-all ${consistency === c ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-100'}`,
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1018,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1016,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 988,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const AddSleepView = ({ onBack, onSave, initialData })=>{
    const { t } = useLanguage();
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.start || "20:00");
    const [end, setEnd] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.end || "06:00");
    const calculateDuration = ()=>{
        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);
        let mins = eh * 60 + em - (sh * 60 + sm);
        if (mins < 0) mins += 24 * 60;
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}h ${m}m`;
    };
    const handleSave = ()=>{
        onSave({
            id: initialData?.id || Date.now(),
            start: start,
            end: end,
            duration: calculateDuration(),
            timestamp: initialData?.timestamp || Date.now()
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddLayout, {
        title: initialData ? t.sleepAdd.editTitle : t.sleepAdd.title,
        onCancel: onBack,
        onSave: handleSave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-sm border border-slate-50 flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase text-slate-400 mb-1",
                                children: t.sleepAdd.start
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1058,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "time",
                                value: start,
                                onChange: (e)=>setStart(e.target.value),
                                className: "text-2xl font-bold bg-transparent outline-none w-full"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1058,
                                columnNumber: 126
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1058,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                        name: "arrow_forward",
                        className: "text-slate-300"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1059,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase text-slate-400 mb-1",
                                children: t.sleepAdd.end
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1060,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "time",
                                value: end,
                                onChange: (e)=>setEnd(e.target.value),
                                className: "text-2xl font-bold bg-transparent outline-none w-full text-right"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1060,
                                columnNumber: 135
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1060,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 1057,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-indigo-50 p-4 rounded-xl flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-indigo-600 font-bold",
                    children: [
                        "Total Duration: ",
                        calculateDuration()
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1062,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 1062,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 1056,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const AddGrowthView = ({ onBack, onSave, initialData })=>{
    const { t } = useLanguage();
    const [weight, setWeight] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.weight || '');
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.height || '');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialData?.date || new Date().toISOString().split('T')[0]);
    const formatDecimal = (val)=>parseFloat(val || "0").toFixed(2);
    const handleSave = ()=>{
        onSave({
            id: initialData?.id || Date.now(),
            weight: formatDecimal(weight),
            height: formatDecimal(height),
            date,
            timestamp: new Date(date).getTime()
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddLayout, {
        title: initialData ? t.growthAdd.editTitle : t.growthAdd.title,
        onCancel: onBack,
        onSave: handleSave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-bold uppercase text-slate-500 mb-2",
                            children: t.growthAdd.date
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1088,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: date,
                            onChange: (e)=>setDate(e.target.value),
                            className: "w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1088,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1088,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-bold uppercase text-slate-500 mb-2",
                            children: t.growthAdd.weight
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1089,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "number",
                            step: "0.01",
                            value: weight,
                            onChange: (e)=>setWeight(e.target.value),
                            className: "w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary",
                            placeholder: "0.00"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1089,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1089,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-bold uppercase text-slate-500 mb-2",
                            children: t.growthAdd.height
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1090,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "number",
                            step: "0.01",
                            value: height,
                            onChange: (e)=>setHeight(e.target.value),
                            className: "w-full p-4 bg-white rounded-xl shadow-sm text-lg font-bold outline-none ring-1 ring-slate-100 focus:ring-primary",
                            placeholder: "0.00"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1090,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1090,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 1087,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 1086,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BottomNav = ({ current, onChange })=>{
    const { t } = useLanguage();
    const NavItem = ({ view, icon, label, activeIcon })=>{
        const isHome = (current === 'HOME' || current === 'ADD_FEEDING') && view === 'HOME';
        const isDiaper = (current === 'DIAPER_LOG' || current === 'ADD_DIAPER') && view === 'DIAPER_LOG';
        const isSleep = (current === 'SLEEP_LOG' || current === 'ADD_SLEEP') && view === 'SLEEP_LOG';
        const isGrowth = (current === 'GROWTH_LOG' || current === 'ADD_GROWTH') && view === 'GROWTH_LOG';
        const isProfile = current === 'PROFILE' && view === 'PROFILE';
        const isActive = isHome || isDiaper || isSleep || isGrowth || isProfile;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
            onClick: ()=>onChange(view),
            className: `flex flex-col items-center gap-1 group w-16 ${isActive ? 'text-primary' : 'text-slate-300'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                    name: isActive && activeIcon ? activeIcon : icon,
                    className: `text-2xl transition-colors ${isActive ? '' : 'group-hover:text-primary/50'}`,
                    filled: isActive
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1107,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-bold uppercase tracking-tight",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1108,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "size-1 rounded-full bg-primary mt-0.5 transition-all"
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1109,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 1106,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-slate-100 pb-safe pt-2 px-6 z-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    view: "HOME",
                    icon: "dashboard",
                    label: t.tabs.feeding
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1116,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    view: "DIAPER_LOG",
                    icon: "opacity",
                    activeIcon: "opacity",
                    label: t.tabs.diaper
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1117,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    view: "SLEEP_LOG",
                    icon: "bedtime",
                    activeIcon: "bedtime",
                    label: t.tabs.sleep
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1118,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    view: "GROWTH_LOG",
                    icon: "show_chart",
                    label: t.tabs.growth
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    view: "PROFILE",
                    icon: "settings",
                    label: t.tabs.me
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1120,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 1115,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 1114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function App() {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('zh');
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('LOGIN');
    const [appData, setAppData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        feedings: [],
        diapers: [],
        sleeps: [],
        growth: []
    });
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        show: false,
        msg: ''
    });
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [babyName, setBabyName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("Leo");
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [currentBaby, setCurrentBaby] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const loadData = async (babyId)=>{
        setIsLoading(true);
        try {
            const data = await DataService.fetchAll(babyId);
            setAppData(data);
        } catch (e) {
            setToast({
                show: true,
                msg: e.message || 'Failed to load data'
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const user = AuthService.getUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (currentUser) {
            DataService.fetchBabies(currentUser.id).then((babies)=>{
                if (babies && babies.length > 0) {
                    setCurrentBaby(babies[0]);
                    setBabyName(babies[0].name);
                    loadData(babies[0].id);
                    setCurrentView('HOME');
                }
            }).catch(()=>{
                setCurrentView('HOME');
            });
        }
    }, [
        currentUser
    ]);
    const toggleLang = ()=>setLang((prev)=>prev === 'en' ? 'zh' : 'en');
    const showToast = (msg)=>setToast({
            show: true,
            msg
        });
    const handleSave = async (section, newItem)=>{
        if (!currentBaby) return;
        const type = section === 'feedings' ? 'feeding' : section === 'diapers' ? 'diaper' : section === 'sleeps' ? 'sleep' : 'growth';
        try {
            var savedItem;
            const exists = appData[section].some((i)=>i.id === newItem.id);
            if (exists) {
                savedItem = await DataService.updateRecord(type, newItem);
            } else {
                savedItem = await DataService.saveRecord(type, currentBaby.id, newItem);
            }
            await loadData(currentBaby.id);
            showToast(editingItem ? "Record updated!" : "Record saved!");
            setEditingItem(null);
            if (section === 'feedings') setCurrentView('HOME');
            if (section === 'diapers') setCurrentView('DIAPER_LOG');
            if (section === 'sleeps') setCurrentView('SLEEP_LOG');
            if (section === 'growth') setCurrentView('GROWTH_LOG');
        } catch (e) {
            showToast(e.message || 'Failed to save record');
        }
    };
    const handleDelete = async (id, section)=>{
        if (!currentBaby) return;
        const type = section === 'feedings' ? 'feeding' : section === 'diapers' ? 'diaper' : section === 'sleeps' ? 'sleep' : 'growth';
        try {
            await DataService.deleteRecord(type, id);
            await loadData(currentBaby.id);
            showToast("Record deleted");
        } catch (e) {
            showToast(e.message || 'Failed to delete record');
        }
    };
    const handleEdit = (item, view)=>{
        setEditingItem(item);
        setCurrentView(view);
    };
    const handleCancel = ()=>{
        setEditingItem(null);
        if (currentView === 'ADD_FEEDING') setCurrentView('HOME');
        if (currentView === 'ADD_DIAPER') setCurrentView('DIAPER_LOG');
        if (currentView === 'ADD_SLEEP') setCurrentView('SLEEP_LOG');
        if (currentView === 'ADD_GROWTH') setCurrentView('GROWTH_LOG');
    };
    const handleLogout = ()=>{
        AuthService.logout();
        setCurrentUser(null);
        setCurrentBaby(null);
        setAppData({
            feedings: [],
            diapers: [],
            sleeps: [],
            growth: []
        });
        setCurrentView('LOGIN');
    };
    const handleLogin = async (user)=>{
        setCurrentUser(user);
        await loadData(user.id);
        setCurrentView('HOME');
    //   try {
    //       const babies = await DataService.fetchBabies(user.id);
    //       console.log("babies======>", babies);
    //       if (babies && babies.length > 0) {
    //           const baby = babies[0];
    //           setCurrentBaby(baby);
    //           setBabyName(baby.name);
    //           await loadData(baby.id);
    //           setCurrentView('HOME');
    //       } else {
    //           setToast({ show: true, msg: 'No baby found. Please create a baby profile.' });
    //       }
    //   } catch (e: any) {
    //       setToast({ show: true, msg: e.message || 'Failed to load baby data' });
    //   }
    };
    const value = {
        lang,
        toggleLang,
        t: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang]
    };
    const CreateBabyView = ()=>{
        const { t } = useLanguage();
        const [babyName, setBabyNameInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
        const [birthDate, setBirthDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(new Date().toISOString().split('T')[0]);
        const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
        const handleCreate = async ()=>{
            if (!babyName || !birthDate) {
                showToast('Please fill all fields');
                return;
            }
            setLoading(true);
            try {
                const baby = await DataService.createBaby(currentUser.id, babyName, birthDate);
                setCurrentBaby(baby);
                setBabyName(baby.name);
                await loadData(baby.id);
                showToast('Baby profile created!');
                setCurrentView('HOME');
            } catch (e) {
                showToast(e.message || 'Failed to create baby');
            } finally{
                setLoading(false);
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background-light flex flex-col items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full max-w-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "size-20 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                    name: "child_care",
                                    className: "text-4xl text-white"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 1297,
                                    columnNumber: 27
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1296,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-slate-800",
                                children: "Create Baby Profile"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1299,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-1",
                                children: "Add your baby's information"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1300,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1295,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-primary px-1 uppercase tracking-wider",
                                        children: "Baby's Name"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-white px-4 py-3 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: babyName,
                                            onChange: (e)=>setBabyNameInput(e.target.value),
                                            placeholder: "Enter baby's name",
                                            className: "flex-1 outline-none text-sm font-medium bg-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 31
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1306,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1304,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-primary px-1 uppercase tracking-wider",
                                        children: "Birth Date"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1318,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-white px-4 py-3 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: birthDate,
                                            onChange: (e)=>setBirthDate(e.target.value),
                                            className: "flex-1 outline-none text-sm font-medium bg-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 31
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 1319,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1317,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleCreate,
                                disabled: loading,
                                className: `w-full ${loading ? 'bg-slate-400' : 'bg-slate-800 hover:bg-slate-700'} text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform mt-4`,
                                children: loading ? 'Creating...' : 'Create Profile'
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 1329,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1303,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 1294,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 1293,
            columnNumber: 11
        }, this);
    };
    const renderView = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                            name: "hourglass_empty",
                            className: "text-4xl text-primary animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1347,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-500 font-medium",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 1348,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1346,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 1345,
                columnNumber: 13
            }, this);
        }
        if (currentUser && !currentBaby && currentView !== 'LOGIN') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CreateBabyView, {}, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 1355,
                columnNumber: 16
            }, this);
        }
        switch(currentView){
            case 'LOGIN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoginView, {
                    onLogin: handleLogin,
                    onToast: showToast
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1359,
                    columnNumber: 30
                }, this);
            case 'ADD_FEEDING':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddFeedingView, {
                    onBack: handleCancel,
                    onSave: (item)=>handleSave('feedings', item),
                    initialData: editingItem
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1360,
                    columnNumber: 36
                }, this);
            case 'ADD_DIAPER':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddDiaperView, {
                    onBack: handleCancel,
                    onSave: (item)=>handleSave('diapers', item),
                    initialData: editingItem
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1361,
                    columnNumber: 35
                }, this);
            case 'ADD_SLEEP':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddSleepView, {
                    onBack: handleCancel,
                    onSave: (item)=>handleSave('sleeps', item),
                    initialData: editingItem
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1362,
                    columnNumber: 34
                }, this);
            case 'ADD_GROWTH':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AddGrowthView, {
                    onBack: handleCancel,
                    onSave: (item)=>handleSave('growth', item),
                    initialData: editingItem
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1363,
                    columnNumber: 35
                }, this);
            case 'DIAPER_LOG':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DiaperView, {
                    onNavigate: setCurrentView,
                    data: appData,
                    onDelete: handleDelete,
                    onToast: showToast,
                    onEdit: handleEdit
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1364,
                    columnNumber: 35
                }, this);
            case 'SLEEP_LOG':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SleepView, {
                    onNavigate: setCurrentView,
                    data: appData,
                    onDelete: handleDelete,
                    onToast: showToast,
                    onEdit: handleEdit
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1365,
                    columnNumber: 34
                }, this);
            case 'GROWTH_LOG':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GrowthView, {
                    onNavigate: setCurrentView,
                    data: appData,
                    onDelete: handleDelete,
                    onToast: showToast,
                    onEdit: handleEdit
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1366,
                    columnNumber: 35
                }, this);
            case 'PROFILE':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProfileView, {
                    onToast: showToast,
                    onLogout: handleLogout,
                    babyName: babyName,
                    setBabyName: setBabyName,
                    data: appData
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1367,
                    columnNumber: 32
                }, this);
            case 'HOME':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HomeView, {
                    onNavigate: setCurrentView,
                    data: appData,
                    onDelete: handleDelete,
                    onToast: showToast,
                    onEdit: handleEdit,
                    babyName: babyName
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 1368,
                    columnNumber: 38
                }, this);
        }
    };
    const showNav = !currentView.startsWith('ADD_') && currentView !== 'LOGIN';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto min-h-screen bg-background-light relative shadow-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Toast, {
                        show: toast.show,
                        message: toast.msg,
                        onClose: ()=>setToast((prev)=>({
                                    ...prev,
                                    show: false
                                }))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1377,
                        columnNumber: 13
                    }, this),
                    currentView !== 'LOGIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LanguageSwitcher, {}, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1378,
                        columnNumber: 41
                    }, this),
                    renderView(),
                    showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(BottomNav, {
                        current: currentView,
                        onChange: setCurrentView
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 1380,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 1376,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            .animate-fade-in { animation: fadeIn 0.3s ease-out; }
            .animate-slide-up { animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
            .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
        `
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 1382,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 1375,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App.tsx [ssr] (ecmascript)");
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_04s5y3.._.js.map
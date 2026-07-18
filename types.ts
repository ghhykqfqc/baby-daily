export type Language = 'en' | 'zh';

export type ViewState = 
  | 'LOGIN'
  | 'HOME' 
  | 'DIAPER_LOG' 
  | 'SLEEP_LOG' 
  | 'GROWTH_LOG' 
  | 'PROFILE'
  | 'ADD_FEEDING'
  | 'ADD_DIAPER'
  | 'ADD_SLEEP'
  | 'ADD_GROWTH';

export interface Translation {
  appTitle: string;
  babyName: string;
  babyAge: string;
  aiPrediction: string;
  feedingPrediction: string;
  diaperPrediction: string;
  volumeEstimate: string;
  notifyMe: string;
  adjustSchedule: string;
  tabs: {
    feeding: string;
    diaper: string;
    sleep: string;
    growth: string;
    me: string;
  };
  filters: {
    today: string;
    week: string;
    filter: string;
    all: string;
    pee: string;
    poo: string;
  };
  recentRecords: string;
  todaysRecords: string;
  seeHistory: string;
  total: string;
  yesterday: string;
  records: {
    formula: string;
    breastMilk: string;
    pee: string;
    poo: string;
    sleep: string;
    weight: string;
    height: string;
  };
  addRecord: {
    title: string;
    editTitle: string;
    cancel: string;
    save: string;
    milkType: string;
    volume: string;
    volumeSub: string;
    time: string;
    timeSub: string;
    notes: string;
    notesPlaceholder: string;
    aiInsight: string;
    types: {
      formula: string;
      breast: string;
      water: string;
      solids: string;
    }
  };
  diaperAdd: {
    title: string;
    editTitle: string;
    condition: string;
    consistency: string;
    color: string;
    time: string;
  };
  sleepAdd: {
    title: string;
    editTitle: string;
    start: string;
    end: string;
    duration: string;
  };
  growthAdd: {
    title: string;
    editTitle: string;
    weight: string;
    height: string;
    head: string;
    date: string;
  };
  profile: {
    settings: string;
    notifications: string;
    units: string;
    export: string;
    logout: string;
    family: string;
    familyTitle: string;
    familyDesc: string;
    invite: string;
  };
  login: {
    welcome: string;
    subtitle: string;
    username: string;
    password: string;
    btnLogin: string;
    btnRegister: string;
    btnForgot: string;
    registerTitle: string;
    forgotTitle: string;
    newPassword: string;
    confirmReset: string;
    backToLogin: string;
    haveAccount: string;
    noAccount: string;
    q1: string;
    q2: string;
    q3: string;
    answerPlaceholder: string;
  };
  details: {
    enfamil: string;
    leftSide: string;
    mustardYellow: string;
    softConsistency: string;
    normalQuantity: string;
    heavy: string;
    golden: string;
    pasty: string;
  }
}

// 数据库表类型定义
export interface User {
  id: string;
  username: string;
  password_hash: string;  // 密码哈希
  security_q1: string;    // 安全问题1答案
  security_q2: string;    // 安全问题2答案
  security_q3: string;    // 安全问题3答案
  created_at: string;
}

export interface Baby {
  id: string;
  user_id: string;
  name: string;
  birth_date: string;
  created_at: string;
}

export interface Feeding {
  id: number;
  baby_id: string;
  type: string;
  volume: number;
  time: string;
  timestamp: number;
  note: string;
  created_at: string;
}

export interface Diaper {
  id: number;
  baby_id: string;
  type: 'pee' | 'poo' | 'mixed';
  sub: string;
  time: string;
  timestamp: number;
  color?: string;
  created_at: string;
}

export interface Sleep {
  id: number;
  baby_id: string;
  start: string;
  end: string;
  duration: string;
  timestamp: number;
  created_at: string;
}

export interface Growth {
  id: number;
  baby_id: string;
  weight: string;
  height: string;
  date: string;
  timestamp: number;
  created_at: string;
}

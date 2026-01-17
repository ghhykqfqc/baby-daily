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
    wechat: string;
    phone: string;
    pass: string;
    btn: string;
    placeholderPhone: string;
    placeholderCode: string;
    placeholderPass: string;
    agree: string;
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
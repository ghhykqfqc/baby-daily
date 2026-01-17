import { Translation } from './types';

export const TEXTS: Record<'en' | 'zh', Translation> = {
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
      duration: "Duration",
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
      subtitle: "Track your baby's growth with AI",
      wechat: "WeChat",
      phone: "Phone",
      pass: "Password",
      btn: "Login / Register",
      placeholderPhone: "Enter Phone Number",
      placeholderCode: "Enter Verification Code",
      placeholderPass: "Enter Password",
      agree: "I agree to Terms & Privacy Policy"
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
      duration: "时长",
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
      subtitle: "AI 助力宝宝健康成长",
      wechat: "微信一键登录",
      phone: "手机验证码",
      pass: "账号密码",
      btn: "登录 / 注册",
      placeholderPhone: "请输入手机号",
      placeholderCode: "请输入验证码",
      placeholderPass: "请输入密码",
      agree: "登录即代表同意用户协议与隐私政策"
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
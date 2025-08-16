let dates = [];
const STORAGE_KEY = 'myCalendar_v2_events';
const CAT_KEY = 'myCalendar_v2_categories';
let events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
let categories = JSON.parse(localStorage.getItem(CAT_KEY) || 'null') || [
  {id:'xp',name:'XPステージ',color:'#FF6B6B'},
  {id:'assault',name:'強襲',color:'#FFD93D'},
  {id:'material',name:'進化素材',color:'#6BCB77'},
  {id:'advent',name:'降臨',color:'#4D96FF'},
  {id:'Ntike',name:'にゃんチケ',color:'#9B5DE5'},
  {id:'weekly',name:'暴風',color:'#F08A5D'},
  {id: 'items',name:'アイテム',color:'#00C2A8'},
  {id: 'gatya',name:'ガチャ',color:'#03520E'},
  {id:'nothing',name:'カテゴリなし',color:'#C0C0C0'}
];
// events.push({id: '',title: '',date: '2025- - ',time: '',endTime: '',desc: '',recur: '',recurOptions: null,until: null,category: '',color: '#f97316'});

if (events.length === 0 || events.length !== 0) {
  events.push({id: 'S078-1',title: '逆顔',date: '2025-08-14',time: '00:00',endTime: '12:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=078',recur: 'monthly_specific_days',recurOptions: { days: [2, 8, 14, 20, 26] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S078-2',title: '逆顔',date: '2025-08-14',time: '12:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=078',recur: 'monthly_specific_days',recurOptions: { days: [5, 11, 17, 23, 29] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-1',title: '逆カバ',date: '2025-08-01',time: '07:00',endTime: '08:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [1] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-2',title: '逆カバ',date: '2025-08-01',time: '11:00',endTime: '12:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [4] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-3',title: '逆カバ',date: '2025-08-01',time: '16:00',endTime: '17:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [7] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-4',title: '逆カバ',date: '2025-08-01',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [10] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-5',title: '逆カバ',date: '2025-08-01',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [13] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-6',title: '逆カバ',date: '2025-08-01',time: '17:00',endTime: '18:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [16] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-7',title: '逆カバ',date: '2025-08-01',time: '13:00',endTime: '14:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [19] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-8',title: '逆カバ',date: '2025-08-01',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [22] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-9',title: '逆カバ',date: '2025-08-01',time: '20:00',endTime: '21:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [25] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-10',title: '逆カバ',date: '2025-08-01',time: '21:00',endTime: '22:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [28] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S007-11',title: '逆カバ',date: '2025-08-01',time: '22:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=007',recur: 'monthly_specific_days',recurOptions: { days: [31] },until: '',category: 'Ntike',color: '#f97316'});
  events.push({id: 'S406-1',title: 'ジャンボーグ鈴木大降臨',date: '2025-08-21',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=406',recur: 'none',recurOptions: null,until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'S406-2',title: 'ジャンボーグ鈴木大降臨',date: '2025-08-22',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=406',recur: 'daily',recurOptions: null,until: '2025-08-25',category: 'assault',color: '#f97316'});
  events.push({id: 'S406-3',title: 'ジャンボーグ鈴木大降臨',date: '2025-08-26',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=406',recur: 'none',recurOptions: null,until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'S406',title: 'ジャンボーグ鈴木大降臨',date: '2025-09-05',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=406',recur: 'monthly_specific_days',recurOptions: { days: [5, 6, 19, 20] },until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'S348',title: '三途の沼のヌシ大降臨',date: '2025-08-13',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=348',recur: 'monthly_specific_days',recurOptions: { days: [13, 14, 27, 28] },until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'S391',title: '超拳獣ブンナグリオス大降臨',date: '2025-08-21',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=391',recur: 'monthly_specific_days',recurOptions: { days: [7, 8, 21, 22] },until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'S340',title: '大魔王ニャンダム大降臨',date: '2025-08-17',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=340',recur: 'monthly_specific_days',recurOptions: { days: [3, 4, 17, 18] },until: '',category: 'assault',color: '#f97316'});
  events.push({id: 'A020-1',title: 'ヒュージゴマ強襲',date: '2025-08-14',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=020',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A020-2',title: 'ヒュージゴマ強襲',date: '2025-08-15',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=020',recur: 'every_n_weeks',recurOptions: { days: [5], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A020-3',title: 'ヒュージゴマ強襲',date: '2025-08-20',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=020',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A035-1',title: 'デッカーバチャン強襲',date: '2025-08-28',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=035',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A035-2',title: 'デッカーバチャン強襲',date: '2025-08-29',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=035',recur: 'every_n_weeks',recurOptions: { days: [5], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A035-3',title: 'デッカーバチャン強襲',date: '2025-09-03',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=035',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A034-1',title: 'ギガガガ強襲',date: '2025-09-11',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=034',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A034-2',title: 'ギガガガ強襲',date: '2025-09-12',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=034',recur: 'every_n_weeks',recurOptions: { days: [5], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A034-3',title: 'ギガガガ強襲',date: '2025-09-17',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=034',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A038-1',title: 'ビッグペンZ強襲',date: '2025-09-25',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=038',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A038-2',title: 'ビッグペンZ強襲',date: '2025-09-26',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=038',recur: 'every_n_weeks',recurOptions: { days: [5], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A038-3',title: 'ビッグペンZ強襲',date: '2025-10-01',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=038',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A037-1',title: '大天使エクスエル強襲',date: '2025-10-09',time: '11:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=037',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A037-2',title: '大天使エクスエル強襲',date: '2025-10-10',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=037',recur: 'every_n_weeks',recurOptions: { days: [5], weeks: [16] },until: null,category: 'assault',color: '#f97316'});
  events.push({id: 'A037-3',title: '大天使エクスエル強襲',date: '2025-10-15',time: '00:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=A&map=037',recur: 'every_n_weeks',recurOptions: { days: [1], weeks: [16] },until: null,category: 'assault',color: '#f97316'});

  events.push({id: 'S015',title: 'ダークネスヘブン',date: '2025-08-13',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=015',recur: 'weekly',recurOptions: { weekdays: [3] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S014',title: '紅のカタストロフ',date: '2025-08-11',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=014',recur: 'weekly',recurOptions: { weekdays: [1] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S016',title: '国士無双',date: '2025-08-15',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=016',recur: 'weekly',recurOptions: { weekdays: [5] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S039',title: '天罰',date: '2025-08-16',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=039',recur: 'weekly',recurOptions: { weekdays: [6] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S122',title: 'ローリングデッド',date: '2025-08-12',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=122',recur: 'weekly',recurOptions: { weekdays: [2] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S189',title: '台風零号',date: '2025-08-16',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=189',recur: 'weekly',recurOptions: { weekdays: [6] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S043',title: '鉄子の部屋',date: '2025-08-10',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=043',recur: 'weekly',recurOptions: { weekdays: [0] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S066',title: '絶望異次元',date: '2025-08-14',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=066',recur: 'weekly',recurOptions: { weekdays: [4] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S157',title: '絶望新次元',date: '2025-08-10',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=157',recur: 'weekly',recurOptions: { weekdays: [0] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S259',title: 'メガサターン',date: '2025-08-15',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=259',recur: 'weekly',recurOptions: { weekdays: [5] },until: null,category: 'weekly',color: '#f97316'});
  events.push({id: 'S250',title: '終末の連戦場',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=250',recur: 'weekly',recurOptions: { weekdays: [0, 6]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S222-1',title: '進化の虹マタタビ',date: '2025-08-02',time: '11:00',endTime: '14:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=222',recur: 'weekly',recurOptions: { weekdays: [6] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S222-2',title: '進化の虹マタタビ',date: '2025-08-03',time: '18:00',endTime: '21:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=222',recur: 'weekly',recurOptions: { weekdays: [0] },until: null,category: 'material',color: '#f97316'});events.push({id: 'gapura1',title: 'ガープラ密林',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-1',title: 'ガープラ密林',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-2',title: 'ガープラ密林',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-3',title: 'ガープラ密林',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-4',title: 'ガープラ密林',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-5',title: 'ガープラ密林',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [6]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q000-6',title: 'ガープラ密林',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=000',recur: 'weekly',recurOptions: { weekdays: [0]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-1',title: 'アシビニ砂漠',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-2',title: 'アシビニ砂漠',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-3',title: 'アシビニ砂漠',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-4',title: 'アシビニ砂漠',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-5',title: 'アシビニ砂漠',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-6',title: 'アシビニ砂漠',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [6]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q001-7',title: 'アシビニ砂漠',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=001',recur: 'weekly',recurOptions: { weekdays: [0]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-1',title: 'ジャンフォレ火山',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-2',title: 'ジャンフォレ火山',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-3',title: 'ジャンフォレ火山',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-4',title: 'ジャンフォレ火山',date: '2025-08-01',time: '19:00',endTime: '23:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-5',title: 'ジャンフォレ火山',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-6',title: 'ジャンフォレ火山',date: '2025-08-01',time: '12:00',endTime: '16:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [6]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'Q003-7',title: 'ジャンフォレ火山',date: '2025-08-01',time: '07:00',endTime: '11:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=Q&map=002',recur: 'weekly',recurOptions: { weekdays: [0]},until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S073-1',title: 'ゲリラ月曜日ステージ',date: '2025-08-01',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=073',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S073-2',title: 'ゲリラ月曜日ステージ',date: '2025-08-01',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=073',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S073-3',title: 'ゲリラ月曜日ステージ',date: '2025-08-01',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=073',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S074-1',title: 'ゲリラ火曜日ステージ',date: '2025-08-01',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=074',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S074-2',title: 'ゲリラ火曜日ステージ',date: '2025-08-01',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=074',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S074-3',title: 'ゲリラ火曜日ステージ',date: '2025-08-01',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=074',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S075-1',title: 'ゲリラ水曜日ステージ',date: '2025-08-06',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=075',ecur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S075-2',title: 'ゲリラ水曜日ステージ',date: '2025-08-06',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=075',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S075-3',title: 'ゲリラ水曜日ステージ',date: '2025-08-06',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=075',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S076-1',title: 'ゲリラ木曜日ステージ',date: '2025-08-01',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=076',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S076-2',title: 'ゲリラ木曜日ステージ',date: '2025-08-01',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=076',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S076-3',title: 'ゲリラ木曜日ステージ',date: '2025-08-01',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=076',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S077-1',title: 'ゲリラ金曜日ステージ',date: '2025-08-01',time: '08:00',endTime: '09:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=077',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S077-2',title: 'ゲリラ金曜日ステージ',date: '2025-08-01',time: '12:00',endTime: '13:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=077',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S077-3',title: 'ゲリラ金曜日ステージ',date: '2025-08-01',time: '19:00',endTime: '20:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=077',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S027',title: '土日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=027',recur: 'weekly',recurOptions: { weekdays: [0, 6]},until: null,category: 'xp',color: '#f97316'});
  events.push({id: 'S100',title: '青マタタビ',date: '2025-08-10',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=100',recur: 'monthly_nth',recurOptions: { weekdays: [0, 4], nths: [2, 3, 4, 5] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S099',title: '赤マタタビ',date: '2025-08-12',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=099',recur: 'monthly_nth',recurOptions: { weekdays: [3, 6], nths: [2, 3, 4, 5] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S101',title: '黄マタタビ',date: '2025-08-10',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=101',recur: 'monthly_nth',recurOptions: { weekdays: [0, 5], nths: [2, 3, 4, 5] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S098',title: '紫マタタビ',date: '2025-08-12',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=098',recur: 'monthly_nth',recurOptions: { weekdays: [2, 6], nths: [2, 3, 4, 5] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S097',title: '緑マタタビ',date: '2025-08-11',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=097',recur: 'monthly_nth',recurOptions: { weekdays: [1, 6], nths: [2, 3, 4, 5] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S118-1',title: 'マタタビチャレンジ',date: '2025-09-06',time: '08:00',endTime: '10:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=118',recur: 'monthly_nth',recurOptions: { weekdays: [0, 6], nths: [1] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S118-2',title: 'マタタビチャレンジ',date: '2025-09-06',time: '12:00',endTime: '14:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=118',recur: 'monthly_nth',recurOptions: { weekdays: [0, 6], nths: [1] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S118-3',title: 'マタタビチャレンジ',date: '2025-09-06',time: '19:00',endTime: '21:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=118',recur: 'monthly_nth',recurOptions: { weekdays: [0, 6], nths: [1] },until: null,category: 'material',color: '#f97316'});
  events.push({id: 'S000',title: '月曜日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=000',recur: 'weekly',recurOptions: { weekdays: [1]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S001',title: '火曜日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=001',recur: 'weekly',recurOptions: { weekdays: [2]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S002',title: '水曜日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=002',recur: 'weekly',recurOptions: { weekdays: [3]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S003',title: '木曜日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=003',recur: 'weekly',recurOptions: { weekdays: [4]},until: null,category: 'items',color: '#f97316'});
  events.push({id: 'S004',title: '金曜日ステージ',date: '2025-08-01',time: '00:00',endTime: '24:00',desc: 'https://jarjarblink.github.io/JAR-Battlecats-Database/map.html?cc=ja&type=S&map=004',recur: 'weekly',recurOptions: { weekdays: [5]},until: null,category: 'items',color: '#f97316'});

}
function saveStorage(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  localStorage.setItem(CAT_KEY, JSON.stringify(categories));
  fetch('https://calendar-discord-notifier.onrender.com//api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ events })
  }).catch(console.error);
}

let cursor = new Date(); cursor.setDate(1); cursor.setHours(0,0,0,0);
const today = new Date(); today.setHours(0,0,0,0);
let selectedDay = new Date(today);


/* ---------------------------- element references --------------------------- */
const calendarEl = document.getElementById('calendar');
let monthEls = [document.getElementById('month0'), document.getElementById('month1')];

// modal & form
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const titleInput = document.getElementById('title');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const endTimeInput = document.getElementById('endTime');
const descInput = document.getElementById('desc');
const recurSelect = document.getElementById('recur');
const recurOptions = document.getElementById('recurOptions');
const untilInput = document.getElementById('until');
const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const deleteBtn = document.getElementById('delete');

// toolbar
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const todayBtn = document.getElementById('today');
const addBtn = document.getElementById('add');
const exportBtn = document.getElementById('export');
const importBtn = document.getElementById('import');
const fileInput = document.getElementById('fileInput');

// sidebar
const sidebarTitle = document.getElementById('sidebarTitle');
const eventListEl = document.getElementById('eventList');

// categories
const categorySelect = document.getElementById('categorySelect');
const newCategoryName = document.getElementById('newCategoryName');
const newCategoryColor = document.getElementById('newCategoryColor');
const addCategoryBtn = document.getElementById('addCategory');

// context
const contextBox = document.getElementById('context');

let editingId = null;
let currentView = 'month'; // 'day' | 'week' | 'month'
/* --------------------------------- helpers --------------------------------- */
function toISODate(d){
  const y=d.getFullYear();
  const m=String(d.getMonth()+1).padStart(2,'0');
  const dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
}
function parseISO(d){ return new Date(d + 'T00:00:00'); }
function sameDay(a,b){
  return a && b &&
    a.getFullYear()===b.getFullYear() &&
    a.getMonth()===b.getMonth() &&
    a.getDate()===b.getDate();
}
function timeToFloat(t){
  if(!t) return 0;
  const [h,m] = t.split(':').map(Number);
  return h + (m||0)/60;
}
function isAllDay(ev){
  return ev.time === '00:00' && (ev.endTime === '24:00' || ev.endTime === '00:00');
}
function px(n){ return `${n}px`; }

/* ----------------------------- recurrence logic ---------------------------- */
function occursOn(ev, date){
  const evDate = parseISO(ev.date);
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = evDate.getDate();
  if(ev.until){ const until = parseISO(ev.until); until.setHours(23,59,59,999); if(target>until) return false; }
  if(!ev.recur || ev.recur === 'none') return sameDay(evDate, target);
  if(target < evDate) return false;
  const diffDays = Math.floor((target - evDate)/86400000);

  if(ev.recur === 'every_n_weeks'){
    const weeksGap = ev.recurOptions?.weeks || 1; // n週間隔を取得
    const durationDays = ev.recurOptions?.days || 1; // n日間の期間を取得
    const startDate = new Date(ev.date);
    const diffDays = Math.floor((date - startDate) / (7 * weeksGap * 86400000)); // 週ごとの差計算

    if(diffDays >= 0 && (date - startDate) % (7 * weeksGap * 86400000) < durationDays * 86400000){
        return true;
    }
    return false;
}

  if(ev.recur === 'daily') return true;

  if(ev.recur === 'weekly'){
    const weekdays = (ev.recurOptions?.weekdays || []);
    return weekdays.includes(target.getDay());
  }

  if(ev.recur === 'biweekly'){
    if(target.getDay() !== evDate.getDay()) return false;
    const weeks = Math.floor(diffDays/7);
    return weeks % 2 === 0;
  }

  if(ev.recur === 'monthly_date'){
    return target.getDate() === evDate.getDate();
  }

  if(ev.recur === 'monthly_specific_days'){
    const days = ev.recurOptions?.days || [];
    return days.includes(target.getDate());
}
  // ...existing code...
  if(ev.recur === 'monthly_nth'){
  const nths = (ev.recurOptions?.nths || []);
  const weekdays = (ev.recurOptions?.weekdays || []);
  if(!nths.length || !weekdays.length) return false;

  // 対象日の曜日が設定に含まれているか
  const w = target.getDay();
  if(!weekdays.includes(w)) return false;

  const year = target.getFullYear();
  const month = target.getMonth();
  const day = target.getDate();

  // 同じ曜日(w)のみで、その月の出現リストを作成
  const dates = [];
  const last = new Date(year, month + 1, 0).getDate();
  for(let d=1; d<=last; d++){
    const tmp = new Date(year, month, d);
    if(tmp.getDay() === w) dates.push(d);
  }

  const idx = dates.indexOf(day);
  if(idx === -1) return false;

  const nth = idx + 1; // その月における「その曜日」のn回目
  if(nths.includes(nth)) return true;

  if(nths.includes(-1)){
    // -1 指定は「その曜日の最終回」を意味する
    return idx === (dates.length - 1);
  }
  return false;
}
    const idx = dates.indexOf(day);
    if(idx === -1) return false;

    const nth = idx + 1; // ← 修正: その月の何回目か
    if(nths.includes(nth)) return true;
    if(nths.includes(-1)){
      // 最終週判定
      return idx === dates.length - 1;
    }
    return false;
  }
// ...existing code...

function checkMonthlyNth(date, weekdays, nths) {
    const w = date.getDay(); // 0=日曜, 1=月曜, ... 6=土曜
    if (!weekdays.includes(w)) return false;

    const year = date.getFullYear();
    const month = date.getMonth();

    // 同じ曜日 w の日付だけをリストアップ
    const sameWeekdayDates = [];
    const d = new Date(year, month, 1);
    while (d.getMonth() === month) {
        if (d.getDay() === w) {
            sameWeekdayDates.push(new Date(d));
        }
        d.setDate(d.getDate() + 1);
    }

    // date が何回目のその曜日かを判定
    const index = sameWeekdayDates.findIndex(day =>
        day.getDate() === date.getDate()
    );
    const nth = index + 1; // 1回目=1, 2回目=2...

    // 最終週判定
    const isLast = index === sameWeekdayDates.length - 1;

    return nths.includes(nth) || (isLast && nths.includes(-1));
}


function eventsForDay(date){ return events.filter(ev => occursOn(ev, date)); }

function groupDayEvents(date){
  const evs = eventsForDay(date);
  const allDay = [];
  const timed = [];
  evs.forEach(ev => {
    if(isAllDay(ev)) allDay.push(ev);
    else timed.push(ev);
  });
  return { allDay, timed };
}

/* --------------------------- overlap layout engine ------------------------- */
/**
 * レイアウトアルゴリズム:
 * 1) 開始時刻でソート
 * 2) スイープしながら「現在重なっているイベント(active)」の空き列に割当て
 * 3) 同一クラスター内の列数（最大同時重なり）をcolumnsに保存
 */
function layoutTimedEvents(evs){
  const sorted = evs.map((e,i)=>({ ...e, _idx:i,
    _start: timeToFloat(e.time || '00:00'),
    _end:   timeToFloat(e.endTime || e.time || '00:00') || (timeToFloat(e.time||'00:00')+1)
  })).sort((a,b)=> a._start === b._start ? a._end - b._end : a._start - b._start);

  const result = new Array(sorted.length);
  let active = []; // {end, col, ref}
  let cluster = []; // 現在のクラスターに属するindex
  let maxColsInCluster = 0;

  function flushCluster(){
    if(cluster.length === 0) return;
    const colsUsed = maxColsInCluster || 1;
    cluster.forEach(ci => {
      result[ci]._columns = colsUsed;
    });
    cluster = [];
    maxColsInCluster = 0;
  }

  sorted.forEach((ev, i) => {
    // activeから終了したものを除去
    active = active.filter(a => a.end > ev._start - 1e-6); // 同刻終了は重ならない扱い

    // 使用中の列
    const used = new Set(active.map(a => a.col));
    // 最小の空き列
    let col = 0;
    while(used.has(col)) col++;

    const placed = { end: ev._end, col, ref: ev };
    active.push(placed);
    maxColsInCluster = Math.max(maxColsInCluster, active.length);

    // 結果格納（暫定）
    const pos = sorted.findIndex(s => s._idx === ev._idx);
    result[pos] = { ...ev, _col: col, _columns: undefined }; // columnsは後でflush

    // 次のイベントがまったく重ならない＝クラスター終了条件をチェックするために、
    // この場では保留し、実際には「次のイベント開始時にactiveが1（自分だけ）になる」タイミングで判断もできるが
    // シンプルに「次のイベントのstart > 全activeのend」のタイミングでflushする。
    // ここでは難しいため、後で全体を見直すためのマークを付ける。
    cluster.push(pos);
  });

  // 最後のクラスターを確定
  maxColsInCluster = Math.max(maxColsInCluster, active.length);
  flushCluster();

  // ここまでだと全イベントが同一クラスター扱いになってしまうので、
  // 実際に再スイープしてクラスターごとにcolumnsを確定する
  // 改めてスイープ
  active = [];
  let currentCluster = [];
  let currentMax = 0;
  for(let i=0;i<sorted.length;i++){
    const ev = sorted[i];
    // クラスタ開始
    if(active.length === 0){
      currentCluster = [ev];
      currentMax = 1;
      active = [{end: ev._end, col: result[sorted.findIndex(s=>s._idx===ev._idx)]._col}];
      continue;
    }
    // active更新
    active = active.filter(a => a.end > ev._start - 1e-6);
    // 今のevが重なるならクラスタ継続
    if(active.length > 0){
      currentCluster.push(ev);
      // add col
      const used = new Set(active.map(a=>a.col));
      let col = 0;
      while(used.has(col)) col++;
      active.push({ end: ev._end, col });
      currentMax = Math.max(currentMax, active.length);
    }else{
      // クラスタが途切れたので、確定してから新しいクラスタ
      currentCluster.forEach(evv => {
        const pos = sorted.findIndex(s=>s._idx===evv._idx);
        result[pos]._columns = currentMax;
      });
      // 新クラスタ開始
      currentCluster = [ev];
      active = [{end: ev._end, col: 0}];
      currentMax = 1;
    }
  }
  // 最後のクラスタ確定
  if(currentCluster.length){
    currentCluster.forEach(evv => {
      const pos = sorted.findIndex(s=>s._idx===evv._idx);
      result[pos]._columns = Math.max(currentMax, result[pos]._col+1);
    });
  }
  // 元の順序に戻す
  return result.sort((a,b)=>a._idx - b._idx);
}

/* ---------------------------------- UI ---------------------------------- */
function ensureViewButtons(){
  const controls = document.querySelector('.controls');
  if(!controls) return;

  function mkGhost(id, label){
    let b = document.getElementById(id);
    if(!b){
      b = document.createElement('button');
      b.id = id;
      b.className = 'btn-ghost';
      b.textContent = label;
      controls.appendChild(b);
    }
    return b;
  }
  const monthBtn = mkGhost('monthView', '月');
  const weekBtn  = mkGhost('weekView',  '週');
  const dayBtn   = mkGhost('dayView',   '日');

  monthBtn.addEventListener('click', ()=>{ currentView='month'; render(); renderEventList(selectedDay); });
  weekBtn.addEventListener('click',  ()=>{ currentView='week';  render(); renderEventList(selectedDay); });
  dayBtn.addEventListener('click',   ()=>{ currentView='day';   render(); renderEventList(selectedDay); });
}
/* ------------------------------- render root ------------------------------ */
function render(){
  if(!calendarEl) return;
  calendarEl.className = ''; // reset
  if(currentView === 'month'){
    calendarEl.classList.add('calendar');
    calendarEl.innerHTML = `<div class="month" id="month0"></div><div class="month" id="month1"></div>`;
    monthEls = [document.getElementById('month0'), document.getElementById('month1')];
    renderMonth();
  }else if(currentView === 'week'){
    calendarEl.classList.add('week-view');
    calendarEl.innerHTML = '';
    renderWeek();
  }else{
    calendarEl.classList.add('day-view');
    calendarEl.innerHTML = '';
    renderDay();
  }
}

/* --------------------------------- month ---------------------------------- */
function renderMonth(){
  for(let m=0;m<2;m++){
    const base = new Date(cursor.getFullYear(), cursor.getMonth()+m, 1);
    const el = monthEls[m]; if(!el) continue;
    el.innerHTML = '';

    const header = document.createElement('div');
    header.className='month-header';
    header.innerHTML = `<strong>${base.getFullYear()}年 ${base.getMonth()+1}月</strong>`;
    el.appendChild(header);

    const grid = document.createElement('div'); grid.className='grid';
    ['日','月','火','水','木','金','土'].forEach(w=>{ const d=document.createElement('div'); d.className='weekday'; d.textContent=w; grid.appendChild(d); });

    const start = new Date(base.getFullYear(), base.getMonth(), 1);
    const pad = start.getDay();
    for(let i=0;i<pad;i++){ const empty=document.createElement('div'); empty.className='day disabled'; grid.appendChild(empty); }

    const last = new Date(base.getFullYear(), base.getMonth()+1, 0).getDate();
    for(let d=1; d<=last; d++){
      const date = new Date(base.getFullYear(), base.getMonth(), d);
      const cell = document.createElement('div');
      cell.className='day';
      cell.dataset.date = toISODate(date);

      if (sameDay(date, today))  cell.classList.add('today');
      if (sameDay(date, selectedDay)) cell.classList.add('selected');

      const num = document.createElement('div'); num.className='day-number'; num.textContent=d; cell.appendChild(num);

      const evs = eventsForDay(date);
      const wrap = document.createElement('div'); wrap.className='events';
      evs.slice(0,3).forEach(ev=>{
        const evEl = document.createElement('div'); evEl.className='event';
        const cat = categories.find(c=>c.id===ev.category);
        evEl.style.background = (cat?.color || '#ddd');
        evEl.style.color = '#111';
        evEl.innerHTML = `<span class='title'>${ev.title}</span>`;
        evEl.addEventListener('click',(e)=>{ e.stopPropagation(); openModalForEdit(ev.id); });
        wrap.appendChild(evEl);
      });
      if(evs.length>3){ const more = document.createElement('div'); more.className='small'; more.textContent = `他 ${evs.length-3} 件`; wrap.appendChild(more); }
      cell.appendChild(wrap);

      cell.addEventListener('click', (e)=>{
        e.stopPropagation();
        const prevSelected = document.querySelector('.day.selected');
        if (prevSelected) prevSelected.classList.remove('selected');
        cell.classList.add('selected');
        selectedDay = date;
        renderEventList(date);
      });

      cell.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        openModalForNew(date);
      });

      grid.appendChild(cell);
    }
    el.appendChild(grid);
  }
}

/* ---------------------------------- day ----------------------------------- */
function renderDay(){
  const HOUR_HEIGHT = 50;
  const dayWrap = document.createElement('div');
  dayWrap.style.background = 'var(--card)';
  dayWrap.style.borderRadius = '12px';
  dayWrap.style.boxShadow = '0 6px 20px rgba(10,12,20,0.06)';
  dayWrap.style.padding = '12px';

  const heading = document.createElement('div');
  heading.className = 'month-header';
  heading.innerHTML = `<strong>${selectedDay.getFullYear()}年${selectedDay.getMonth()+1}月${selectedDay.getDate()}日</strong>`;
  dayWrap.appendChild(heading);

  const { allDay, timed } = groupDayEvents(selectedDay);

  // 終日行
  const alldayBox = document.createElement('div');
  alldayBox.style.display = 'flex';
  alldayBox.style.flexWrap = 'wrap';
  alldayBox.style.gap = '6px';
  alldayBox.style.margin = '6px 0 10px';
  if(allDay.length){
    allDay.forEach(ev=>{
      const cat = categories.find(c=>c.id===ev.category);
      const pill = document.createElement('div');
      pill.className = 'event';
      pill.style.background = (cat?.color || '#999');
      pill.style.color = '#111';
      pill.style.borderRadius = '999px';
      pill.style.padding = '6px 10px';
      pill.style.cursor = 'pointer';
      pill.textContent = `終日・${ev.title}`;
      pill.addEventListener('click', ()=>openModalForEdit(ev.id));
      alldayBox.appendChild(pill);
    });
  }else{
    const none = document.createElement('div'); none.className='small'; none.textContent='終日の予定はありません';
    alldayBox.appendChild(none);
  }
  dayWrap.appendChild(alldayBox);

  // タイムライン本体
  const timeline = document.createElement('div');
  timeline.style.position = 'relative';
  timeline.style.height = px(24*HOUR_HEIGHT);
  timeline.style.background = '#fff';
  timeline.style.border = '1px solid rgba(0,0,0,0.06)';
  timeline.style.borderRadius = '10px';
  timeline.style.overflow = 'hidden';

  // 時刻線
  for(let h=0; h<=24; h++){
    const line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.left = '0';
    line.style.right = '0';
    line.style.top = px(h*HOUR_HEIGHT);
    line.style.height = '1px';
    line.style.background = 'rgba(0,0,0,0.06)';
    timeline.appendChild(line);

    const label = document.createElement('div');
    label.className = 'small';
    label.style.position = 'absolute';
    label.style.left = '8px';
    label.style.top = px(h*HOUR_HEIGHT - 8);
    label.textContent = `${String(h).padStart(2,'0')}:00`;
    timeline.appendChild(label);
  }

  // イベント描画（重なり回避レイアウト）
  const laid = layoutTimedEvents(timed);
  laid.forEach(ev => {
    const start = timeToFloat(ev.time || '00:00');
    const end   = timeToFloat(ev.endTime || ev.time || '00:00') || (start+1);
    const top = start * HOUR_HEIGHT;
    const height = Math.max(18, (end - start) * HOUR_HEIGHT - 2);

    const leftPct = (ev._col / ev._columns) * 100;
    const widthPct = (1 / ev._columns) * 100;

    const card = document.createElement('div');
    card.className = 'timeline-event';
    card.style.position = 'absolute';
    card.style.top = px(top);
    card.style.left = `${leftPct}%`;
    card.style.width = `calc(${widthPct}% - 4px)`;
    card.style.height = px(height);
    card.style.margin = '1px 2px';
    card.style.padding = '6px 8px';
    card.style.borderRadius = '8px';
    card.style.border = '1px solid rgba(0,0,0,0.06)';
    const cat = categories.find(c=>c.id===ev.category);
    card.style.background = 'var(--bg)';
    card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    card.style.cursor = 'pointer';
    card.innerHTML = `<div class="small" style="color:var(--muted)">${ev.time || ''} - ${ev.endTime || ''}</div>
                      <div style="font-weight:600">${ev.title}</div>`;
    if(cat){
      // 左帯
      const bar = document.createElement('div');
      bar.style.position='absolute'; bar.style.left='0'; bar.style.top='0';
      bar.style.bottom='0'; bar.style.width='4px'; bar.style.background = cat.color;
      card.appendChild(bar);
    }
    card.addEventListener('click', ()=>openModalForEdit(ev.id));
    timeline.appendChild(card);
  });

  dayWrap.appendChild(timeline);
  calendarEl.appendChild(dayWrap);
}

/* ---------------------------------- week ---------------------------------- */
function renderWeek(){
  const HOUR_HEIGHT = 50;
  const wrap = document.createElement('div');
  wrap.style.display = 'grid';
  wrap.style.gridTemplateColumns = 'repeat(7, 1fr)';
  wrap.style.gap = '6px';

  const start = new Date(selectedDay);
  start.setDate(start.getDate() - start.getDay());

  for(let i=0;i<7;i++){
    const d = new Date(start);
    d.setDate(start.getDate()+i);

    const dayCell = document.createElement('div');
    dayCell.style.background = 'var(--card)';
    dayCell.style.borderRadius = '12px';
    dayCell.style.boxShadow = '0 6px 20px rgba(10,12,20,0.06)';
    dayCell.style.overflow = 'hidden';
    dayCell.style.position = 'relative';

    const head = document.createElement('div');
    head.className = 'month-header';
    head.style.padding = '8px 10px';
    head.innerHTML = `<strong>${d.getMonth()+1}/${d.getDate()} (${['日','月','火','水','木','金','土'][d.getDay()]})</strong>`;
    if(sameDay(d, today)){
      head.style.background = 'var(--today-bg)';
      head.style.borderBottom = '1px solid #a3e8a3';
    }else{
      head.style.background = '#fff';
      head.style.borderBottom = '1px solid rgba(0,0,0,0.06)';
    }
    dayCell.appendChild(head);

    // 終日
    const { allDay, timed } = groupDayEvents(d);
    const alldayBox = document.createElement('div');
    alldayBox.style.display = 'flex';
    alldayBox.style.flexWrap = 'wrap';
    alldayBox.style.gap = '6px';
    alldayBox.style.padding = '6px 10px 8px';
    alldayBox.style.background = '#fff';
    if(allDay.length){
      allDay.forEach(ev=>{
        const cat = categories.find(c=>c.id===ev.category);
        const pill = document.createElement('div');
        pill.className = 'event';
        pill.style.background = (cat?.color || '#999');
        pill.style.color = '#111';
        pill.style.borderRadius = '999px';
        pill.style.padding = '4px 8px';
        pill.style.cursor = 'pointer';
        pill.textContent = `終日・${ev.title}`;
        pill.addEventListener('click', ()=>openModalForEdit(ev.id));
        alldayBox.appendChild(pill);
      });
    }else{
      const none = document.createElement('div'); none.className='small'; none.textContent='終日なし';
      alldayBox.appendChild(none);
    }
    dayCell.appendChild(alldayBox);

    // タイムライン
    const timeline = document.createElement('div');
    timeline.style.position = 'relative';
    timeline.style.height = px(24*HOUR_HEIGHT);
    timeline.style.background = '#fff';
    timeline.style.borderTop = '1px dashed rgba(0,0,0,0.06)';
    timeline.style.borderBottomLeftRadius = '12px';
    timeline.style.borderBottomRightRadius = '12px';

    for(let h=0; h<=24; h++){
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.left = '0'; line.style.right = '0';
      line.style.top = px(h*HOUR_HEIGHT);
      line.style.height = '1px';
      line.style.background = 'rgba(0,0,0,0.06)';
      timeline.appendChild(line);
    }

    // 重なり回避
    const laid = layoutTimedEvents(timed);
    laid.forEach(ev=>{
      const startF = timeToFloat(ev.time || '00:00');
      const endF   = timeToFloat(ev.endTime || ev.time || '00:00') || (startF+1);
      const top = startF * HOUR_HEIGHT;
      const height = Math.max(18, (endF - startF) * HOUR_HEIGHT - 2);
      const leftPct = (ev._col / ev._columns) * 100;
      const widthPct = (1 / ev._columns) * 100;

      const card = document.createElement('div');
      card.className = 'timeline-event';
      card.style.position = 'absolute';
      card.style.top = px(top);
      card.style.left = `${leftPct}%`;
      card.style.width = `calc(${widthPct}% - 4px)`;
      card.style.height = px(height);
      card.style.margin = '1px 2px';
      card.style.padding = '6px 6px';
      card.style.borderRadius = '8px';
      card.style.border = '1px solid rgba(0,0,0,0.06)';
      const cat = categories.find(c=>c.id===ev.category);
      card.style.background = 'var(--bg)';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      card.style.cursor = 'pointer';
      card.innerHTML = `<div class="small" style="color:var(--muted)">${ev.time || ''} - ${ev.endTime || ''}</div>
                        <div style="font-weight:600">${ev.title}</div>`;
      if(cat){
        const bar = document.createElement('div');
        bar.style.position='absolute'; bar.style.left='0'; bar.style.top='0';
        bar.style.bottom='0'; bar.style.width='4px'; bar.style.background = cat.color;
        card.appendChild(bar);
      }
      card.addEventListener('click', ()=>openModalForEdit(ev.id));
      timeline.appendChild(card);
    });

    dayCell.appendChild(timeline);
    wrap.appendChild(dayCell);
  }
  calendarEl.appendChild(wrap);
}

/* ---------------------------- sidebar rendering --------------------------- */
function renderEventList(date){
  if(!eventListEl) return;
  eventListEl.innerHTML = '';
  if (!date) {
    sidebarTitle.textContent = '予定を選択してください';
    return;
  }
  sidebarTitle.textContent = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日の予定`;
  const evs = eventsForDay(date);
  if (evs.length === 0) {
    const p = document.createElement('p');
    p.className = 'small';
    p.textContent = 'この日の予定はありません';
    eventListEl.appendChild(p);
  } else {
    evs.forEach(ev => {
      const item = document.createElement('div');
      item.className = 'event-list-item';
      const cat = categories.find(c => c.id === ev.category);
      const time = ev.time ? ev.time + ' ' : '';
      const endTime = ev.endTime ? ' - ' + ev.endTime : '';
      const descText = ev.desc || '';
      const linkifiedDesc = descText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');

      item.innerHTML = `
          <div class="flex-between">
              <div style="display:flex;align-items:center;gap:8px;">
                  <span class="cat-pill" style="background:${cat?.color || '#999'}">${cat?.name || '未分類'}</span>
                  <div class="title">${ev.title}<br>${time}${endTime}</div>
              </div>
          </div>
          <div class="desc">${linkifiedDesc}</div>
      `;
      item.addEventListener('click', () => { openModalForEdit(ev.id); });
      eventListEl.appendChild(item);
    });
  }
}

/* ------------------------------ modal & CRUD ------------------------------ */
function populateCategorySelect(selected){
  if(!categorySelect) return;
  categorySelect.innerHTML = '';
  categories.forEach(c=>{
    const o = document.createElement('option');
    o.value = c.id; o.textContent = c.name; o.style.color = c.color;
    if(selected && selected===c.id) o.selected = true;
    categorySelect.appendChild(o);
  });
}

function openModalForNew(date){
  editingId = null;
  modalTitle.textContent='予定を追加';
  titleInput.value='';
  dateInput.value = toISODate(date);
  timeInput.value='';
  endTimeInput.value='';
  descInput.value='';
  recurSelect.value='none';
  recurOptions.innerHTML='';
  untilInput.value='';
  deleteBtn.style.display='none';
  populateCategorySelect();
  modal.classList.add('open');
}

function openModalForEdit(id){
  const ev = events.find(x=>x.id===id); if(!ev) return;
  editingId = id;
  modalTitle.textContent='予定を編集';
  titleInput.value=ev.title;
  dateInput.value=ev.date;
  timeInput.value=ev.time||'';
  endTimeInput.value=ev.endTime||'';
  descInput.value=ev.desc||'';
  recurSelect.value=ev.recur||'none';
  untilInput.value=ev.until||'';
  renderRecurOptions();

  if (ev.recur === 'weekly' && ev.recurOptions) {
    const weekdays = ev.recurOptions.weekdays || [];
    recurOptions.querySelectorAll('input[name="weekly_weekday"]').forEach(b=>{
      b.checked = weekdays.includes(parseInt(b.value,10));
    });
  }
  if (ev.recur === 'monthly_nth' && checkMonthlyNth(currentDate, event.monthly_nth.weekdays, event.monthly_nth.nths)) {
    const nths = ev.recurOptions.nths || [];
    const wds  = ev.recurOptions.weekdays || [];
    recurOptions.querySelectorAll('input[name="opt_nth"]').forEach(b=>{
      b.checked = nths.includes(parseInt(b.value,10));
    });
    recurOptions.querySelectorAll('input[name="monthly_weekday"]').forEach(b=>{
      b.checked = wds.includes(parseInt(b.value,10));
    });
  }
  if (ev.recur === 'monthly_specific_days' && ev.recurOptions) {
    const days = ev.recurOptions.days || [];
    recurOptions.querySelectorAll('input[name="monthly_day"]').forEach(b=>{
      b.checked = days.includes(parseInt(b.value,10));
    });
  }

  populateCategorySelect(ev.category);
  deleteBtn.style.display='inline-block';
  modal.classList.add('open');
}
function closeModal(){ modal.classList.remove('open'); }

recurSelect.addEventListener('change', renderRecurOptions);
function renderRecurOptions(){
  const val = recurSelect.value;
  recurOptions.innerHTML = '';

  if(val === 'weekly'){
    const chkWrap = document.createElement('div');
    chkWrap.style.marginTop = '8px';
    chkWrap.innerHTML = '<div class="small">曜日（複数選択可）</div>';
    ['日', '月', '火', '水', '木', '金', '土'].forEach((t, i) => {
      const id = 'weekly_weekday_' + i;
      const label = document.createElement('label');
      label.style.marginRight = '8px';
      label.innerHTML = `<input type='checkbox' name='weekly_weekday' value='${i}' id='${id}' /> ${t}`;
      chkWrap.appendChild(label);
    });
    recurOptions.appendChild(chkWrap);
  }

  if(val === 'monthly_nth'){
    const wdWrap = document.createElement('div');
    wdWrap.style.marginTop = '8px';
    wdWrap.innerHTML = '<div class="small">曜日（複数選択可）</div>';
    ['日','月','火','水','木','金','土'].forEach((t, i) => {
      const id = 'monthly_weekday_' + i;
      const label = document.createElement('label');
      label.style.marginRight = '8px';
      label.innerHTML = `<input type='checkbox' name='monthly_weekday' value='${i}' id='${id}' /> ${t}`;
      wdWrap.appendChild(label);
    });
    recurOptions.appendChild(wdWrap);

    const chkWrap = document.createElement('div');
    chkWrap.style.marginTop = '8px';
    chkWrap.innerHTML = '<div class="small">第n週（複数選択可）</div>';
    [1,2,3,4,5,-1].forEach(n=>{
      const id = 'nth_' + n;
      const label = document.createElement('label');
      label.style.marginRight = '8px';
      const val = (n === -1 ? '最終' : '第' + n);
      label.innerHTML = `<input type='checkbox' name='opt_nth' value='${n}' id='${id}' /> ${val}`;
      chkWrap.appendChild(label);
    });
    recurOptions.appendChild(chkWrap);
  }
  if (val === 'monthly_specific_days') {
    const dayWrap = document.createElement('div');
    dayWrap.style.marginTop = '8px';
    dayWrap.innerHTML = '<div class="small">日付（複数選択可）</div>';
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.gridTemplateColumns = 'repeat(7, 1fr)';
    grid.style.gap = '6px';
    for (let i = 1; i <= 31; i++) {
      const id = 'monthly_day_' + i;
      const label = document.createElement('label');
      label.style.display = 'block';
      label.innerHTML = `<input type='checkbox' name='monthly_day' value='${i}' id='${id}' /> ${i}日`;
      grid.appendChild(label);
    }
    dayWrap.appendChild(grid);
    recurOptions.appendChild(dayWrap);
  }
  if(val === 'every_n_weeks'){
    const inputWrap = document.createElement('div');
    inputWrap.innerHTML = `
        <label>週間隔<input type="number" min="1" id="every_n_weeks_gap" value="1"></label>
        <label>期間日数<input type="number" min="1" id="every_n_weeks_days" value="1"></label>
    `;
    recurOptions.appendChild(inputWrap);
}


}

addCategoryBtn?.addEventListener('click', ()=>{
  const name = newCategoryName.value.trim(); const color = newCategoryColor.value;
  if(!name) return alert('カテゴリ名を入力してください');
  const id = name.toLowerCase().replace(/\s+/g,'_') + '_' + Date.now().toString().slice(-4);
  categories.push({id,name,color});
  populateCategorySelect(id);
  newCategoryName.value='';
  saveStorage(); render();
});

saveBtn.addEventListener('click', ()=>{
  const title = titleInput.value.trim(); if(!title) return alert('タイトルを入力してください');
  const date = dateInput.value; if(!date) return alert('日付を指定してください');
  const time = timeInput.value;
  const endTime = endTimeInput.value;
  const desc = descInput.value;
  const recur = recurSelect.value;
  const until = untilInput.value || null;
  const category = categorySelect.value;
  const cat = categories.find(c=>c.id===category);

  let recurOptionsVal = null;
  if(recur === 'monthly_nth'){
    const nths = Array.from(recurOptions.querySelectorAll('input[name="opt_nth"]:checked')).map(i=>parseInt(i.value,10));
    const weekdays = Array.from(recurOptions.querySelectorAll('input[name="monthly_weekday"]:checked')).map(i=>parseInt(i.value,10));
    recurOptionsVal = { nths, weekdays };
  }
  if(recur === 'weekly'){
    const weekdays = Array.from(recurOptions.querySelectorAll('input[name="weekly_weekday"]:checked')).map(i => parseInt(i.value, 10));
    recurOptionsVal = { weekdays };
  }
  if (recur === 'monthly_specific_days') {
    const days = Array.from(recurOptions.querySelectorAll('input[name="monthly_day"]:checked')).map(i => parseInt(i.value, 10));
    recurOptionsVal = { days };
  }
  if(recur === 'every_n_weeks'){
    const weeks = parseInt(document.getElementById('every_n_weeks_gap').value, 10);
    const days = parseInt(document.getElementById('every_n_weeks_days').value, 10);
    recurOptionsVal = { weeks, days };
}




  if(editingId){
    const ev = events.find(e=>e.id===editingId); if(!ev) return;
    ev.title=title; ev.date=date; ev.time=time; ev.endTime=endTime;
    ev.desc=desc; ev.recur=recur; ev.recurOptions=recurOptionsVal;
    ev.until=until; ev.category=category; ev.color = cat?cat.color:null;
  }else{
    events.push({ id: Date.now().toString(), title, date, time, endTime, desc, recur, recurOptions: recurOptionsVal, until, category, color: cat?cat.color:null });
  }
  saveStorage(); closeModal(); render(); renderEventList(selectedDay);
});

cancelBtn.addEventListener('click', ()=> closeModal() );
deleteBtn.addEventListener('click', ()=>{
  if(!editingId) return;
  if(!confirm('本当に削除しますか？')) return;
  events = events.filter(e=>e.id!==editingId);
  saveStorage(); closeModal(); render(); renderEventList(selectedDay);
});
/* -------------------------------- context --------------------------------- */
function showContext(x,y,date){
  const items = eventsForDay(date);
  contextBox.innerHTML='';
  if(items.length===0){
    contextBox.innerHTML = '<div class="small">予定はありません</div>';
  } else {
    items.forEach(it=>{
      const div = document.createElement('div');
      div.className='ctx-item';
      const cat = categories.find(c=>c.id===it.category);
      div.innerHTML = `<div class='flex-between'><div><strong>${it.title}</strong><div class='small'>${it.time || ''} ${it.desc? '- '+it.desc: ''}</div></div><div><span class='cat-pill' style='background:${cat?cat.color:'#999'}'>${cat?cat.name:'未分類'}</span></div></div>`;
      div.addEventListener('click', ()=>{ editingId = it.id; openModalForEdit(it.id); hideContext(); });
      contextBox.appendChild(div);
    });
  }
  contextBox.style.left = x + 'px'; contextBox.style.top = y + 'px'; contextBox.style.display = 'block';
}
function hideContext(){ contextBox.style.display = 'none'; }
window.addEventListener('click', (e)=>{ if(!e.target.closest('.day')) hideContext(); });
window.addEventListener('contextmenu', (e)=>{ if(!e.target.closest('.day')) hideContext(); });

/* ------------------------------ export/import ----------------------------- */
exportBtn?.addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify({events,categories},null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'calendar_export.json'; document.body.appendChild(a); a.click(); a.remove();
});
importBtn?.addEventListener('click', ()=> fileInput?.click());
fileInput?.addEventListener('change',(e)=>{
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ()=>{
    try{
      const data = JSON.parse(r.result);
      if(Array.isArray(data.events)) events = data.events;
      if(Array.isArray(data.categories)) categories = data.categories;
      saveStorage(); render(); renderEventList(selectedDay);
    }catch(err){ alert('読み込みに失敗しました'); }
  };
  r.readAsText(f);
});

/* ------------------------------- navigation ------------------------------- */
prevBtn?.addEventListener('click', ()=>{
  if(currentView === 'month'){
    cursor = new Date(cursor.getFullYear(), cursor.getMonth()-1, 1);
  }else if(currentView === 'week'){
    selectedDay.setDate(selectedDay.getDate()-7);
    cursor = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
  }else{
    selectedDay.setDate(selectedDay.getDate()-1);
    cursor = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
  }
  render(); renderEventList(selectedDay);
});
nextBtn?.addEventListener('click', ()=>{
  if(currentView === 'month'){
    cursor = new Date(cursor.getFullYear(), cursor.getMonth()+1, 1);
  }else if(currentView === 'week'){
    selectedDay.setDate(selectedDay.getDate()+7);
    cursor = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
  }else{
    selectedDay.setDate(selectedDay.getDate()+1);
    cursor = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
  }
  render(); renderEventList(selectedDay);
});
todayBtn?.addEventListener('click', ()=>{
  selectedDay = new Date(today);
  cursor = new Date(today.getFullYear(), today.getMonth(), 1);
  render(); renderEventList(selectedDay);
});

/* --------------------------------- init ----------------------------------- */
ensureViewButtons();
render();
renderEventList(selectedDay);


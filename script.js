/* 菄家奇幻寫作學院 — 老師主導課堂；無第三方程式庫，適用 GitHub Pages。 */
const LESSONS = [
  {
    title: '神祕物品觀察室', skill: '把一件事寫清楚', icon: 'chest',
    prompt: '你在學院角落發現一個神祕的小盒子。你看見了什麼？',
    technique: '完整句三要素', formula: '誰／什麼 ＋ 在哪裡 ＋ 做什麼／怎麼樣',
    steps: ['先找主角：是誰或什麼物品？', '補上地點：在哪裡發現？', '說出重點：它有什麼樣子或動作？'],
    weak: '我看到盒子。', strong: '放學時，我在書架下發現一個刻著星星的小木盒。',
    why: '多了「時間、地點、外觀」，讀者才能在腦中看到畫面。',
    oral: ['你第一眼注意到盒子的哪個地方？', '你在哪裡、什麼時候發現它？', '如果輕輕碰它，會發生什麼事？'],
    outline: ['發現：什麼時候、在哪裡？', '觀察：顏色、形狀、花紋？', '想法：我覺得它可能是……'],
    writing: '寫出 3～4 句完整句，連成一小段；可先口說再落筆。',
    check: ['每一句都能說清楚「誰／什麼」', '至少寫出一個可見的特徵', '句子有標點，讀起來通順'],
    sample: '今天放學時，我在圖書角發現一個小盒子。它是深藍色的，盒蓋上刻著三顆星星。我輕輕摸了一下，覺得它好像藏著一個祕密。',
    teacher: ['先讓學生用 30 秒描述圖示，不急著糾正。', '口說若很豐富，請他選最重要的三個細節。', '書寫目標是「句子完整」，先不要求字數。']
  },
  {
    title: '五感偵察任務', skill: '讓描寫有畫面', icon: 'eye',
    prompt: '學院的祕密花園剛下過雨。你會注意到什麼？',
    technique: '五感描寫法', formula: '看見 ＋ 聽見 ＋ 聞到／摸到（選 2～3 種）',
    steps: ['先寫看得到的景物', '挑一種聲音或氣味', '選最有特色的感覺寫進句子'],
    weak: '花園很漂亮。', strong: '雨後的葉子亮晶晶的，腳邊傳來滴答滴答的水聲，空氣裡有青草香。',
    why: '不用堆很多形容詞；加上不同感官，讀者就像走進現場。',
    oral: ['閉上眼想像：眼前有哪些顏色？', '耳邊可能有什麼聲音？', '你最想讓讀者感覺到哪一件事？'],
    outline: ['先交代：我走進哪裡？', '觀察：兩種不同的感官', '感受：這個地方讓我覺得……'],
    writing: '寫 4～5 句，至少選用兩種感官描寫。',
    check: ['不只寫「很美／很好」', '使用至少兩種感官', '有一句自己的真實感受'],
    sample: '下雨過後，我走進學院的花園。綠葉上掛著小水珠，陽光照得亮晶晶。小鳥在樹上吱吱叫，我聞到淡淡的泥土味。這裡讓我覺得很舒服。',
    teacher: ['五感不必一次全寫，這堂只要求兩種。', '可以拿真實的水果、葉子或鉛筆盒作觀察替代。', '先示範「漂亮」如何變成看得見的畫面。']
  },
  {
    title: '消失的任務委託書', skill: '看懂題目再寫', icon: 'scroll',
    prompt: '寫一篇〈我最喜歡的一個地方〉：要寫哪裡？為什麼喜歡？',
    technique: '審題三問', formula: '寫什麼？ ＋ 寫哪一個？ ＋ 為什麼？',
    steps: ['圈出題目最重要的詞', '只選一個最適合的材料', '找出能支持主題的兩個理由'],
    weak: '我去過公園、夜市、海邊和圖書館，都很好玩。', strong: '我最喜歡住家附近的公園，因為那裡有大樹可以乘涼，也有我最愛的溜滑梯。',
    why: '作文要對準題目；集中寫一個地方，內容才會深入。',
    oral: ['題目要我們寫「一個」還是「很多」地方？', '你最想寫的地方是哪裡？', '能說出兩個具體的喜歡理由嗎？'],
    outline: ['開頭：我最喜歡的地方是……', '中間：那裡的特色和一件經驗', '結尾：我為什麼一直喜歡它'],
    writing: '寫 4～6 句，完成一篇短短的〈我最喜歡的一個地方〉。',
    check: ['只聚焦一個地方', '有具體理由，不只說「很好玩」', '結尾回到「我喜歡」'],
    sample: '我最喜歡的地方是住家附近的公園。那裡有高高的大樹，夏天也很涼快。我最喜歡和朋友在那裡玩躲貓貓。每次去公園，我都覺得很開心。',
    teacher: ['這堂刻意用常見學校作文題目，強化遷移。', '口說時可列三個候選地方，再由學生自己選一個。', '提醒「喜歡」要用具體例子證明。']
  },
  {
    title: '時間羅盤', skill: '照順序說事情', icon: 'clock',
    prompt: '回想一次特別的早晨：先發生什麼？接著呢？最後呢？',
    technique: '時間順序連接詞', formula: '一開始 → 接著 → 最後',
    steps: ['先說出三個重要事件', '把事件排成正確順序', '用連接詞把句子接起來'],
    weak: '我到學校。我起床。我刷牙。', strong: '一開始，我被鬧鐘叫醒；接著，我趕快刷牙、背上書包；最後，我準時走進教室。',
    why: '讀者跟著事件前進，不會被跳來跳去的順序弄糊塗。',
    oral: ['這件事最先發生什麼？', '中間有哪件事最重要？', '怎樣結束？有沒有意外？'],
    outline: ['一開始：時間與第一件事', '接著：發生的主要經過', '最後：事情的結果或感想'],
    writing: '寫 5～6 句，至少使用兩個時間連接詞。',
    check: ['事件的先後順序正確', '有「接著」之類的連接詞', '能看出事情怎麼結束'],
    sample: '星期一早上，我差點睡過頭。一開始，鬧鐘響了三次，我都沒聽見。接著，媽媽叫醒我，我趕緊刷牙換衣服。最後，我跑到校門口，還好沒有遲到。',
    teacher: ['可讓學生拿三張小紙條排順序。', '連接詞是工具，不必每一句都硬套。', '有跳接時，用「那是之前還是之後？」引導自修。']
  },
  {
    title: '學院生活觀察日誌', skill: '寫真實的一天', icon: 'diary',
    prompt: '今天最值得記下來的一件小事是什麼？',
    technique: '日記的事＋感', formula: '今天發生的事 ＋ 一個細節 ＋ 我的感受',
    steps: ['從今天選一件真實的小事', '寫出發生時的一個細節', '說明自己有什麼心情'],
    weak: '今天很好玩，我很開心。', strong: '今天下課時，我第一次把紙飛機飛過走廊。我看著它飛得好遠，忍不住跳了起來。',
    why: '不是把整天流水帳列完，而是選一件事，讓讀者知道「為什麼」。',
    oral: ['今天有哪件事讓你印象最深？', '事情發生時，你看見誰或什麼？', '你當下怎麼想？後來呢？'],
    outline: ['日期與事件：今天發生……', '經過：最值得寫的一個畫面', '感想：我覺得……因為……'],
    writing: '寫 5～7 句短日記；最後一定要有感受和原因。',
    check: ['挑選一件真實的小事', '有一個具體畫面', '感受後面說得出原因'],
    sample: '今天午休後，我和同學一起整理書櫃。原本歪七扭八的書，經過我們分類，終於排整齊了。看到乾淨的書櫃，我很有成就感，因為這是我們合作完成的。',
    teacher: ['不要求開始每天寫日記；只在課堂體驗一次。', '讓學生先從愉快或意外的小事選材。', '真實事件優先，讓校內作文有生活素材。']
  },
  {
    title: '那一天的冒險', skill: '寫一篇完整記事文', icon: 'route',
    prompt: '一次難忘的活動：事情是怎麼開始、發展、結束的？',
    technique: '起因—經過—結果', formula: '為什麼發生 → 發生什麼 → 最後怎麼樣',
    steps: ['起因：交代人物、時間與原因', '經過：挑最重要的一件波折', '結果：交代結束與自己的感受'],
    weak: '我們去爬山，很累，但是很好玩。', strong: '因為班上舉辦戶外教學，我們去爬山。半路我差點想放棄，最後在同學鼓勵下登頂。',
    why: '「經過」寫清楚，事情才有故事；「結果」讓文章完整。',
    oral: ['這件事為什麼開始？和誰一起？', '中間有沒有困難、驚喜或轉折？', '最後發生什麼？你學到什麼？'],
    outline: ['起因：人物、時間、地點、原因', '經過：最重要的兩個動作或事件', '結果：事情的結果和心情'],
    writing: '寫 6～8 句，清楚分成起因、經過、結果三部分。',
    check: ['開頭讓人知道事情為何發生', '經過不是一句話帶過', '有清楚的結果'],
    sample: '上星期六，爸爸帶我去騎腳踏車。一開始我很期待，可是騎到上坡時，我累得想停下來。爸爸鼓勵我慢慢踩，我終於騎到了坡頂。看到遠方的風景，我覺得努力很值得。',
    teacher: ['從孩子親身經歷的事件中選一件即可。', '先口頭練完起因、經過、結果，再讓學生寫。', '「經過」分配最多句子，避免頭重腳輕。']
  },
  {
    title: '心情變色藥水', skill: '把心情寫出來', icon: 'flask',
    prompt: '領到意想不到的禮物時，你的臉、手和心會怎樣？',
    technique: '心情不直說', formula: '心情 ＋ 表情／動作 ＋ 心裡想的話',
    steps: ['先想主角真正的心情', '找一個看得見的表情或動作', '補一句心裡的念頭'],
    weak: '我非常高興。', strong: '我睜大眼睛，雙手抱緊禮物，心裡想：「這真的是送給我的嗎？」',
    why: '用動作和想法呈現心情，讀者能自己感受到「高興」。',
    oral: ['開心時你的臉會怎樣？', '緊張時你的手或腳會做什麼？', '那一刻心裡可能冒出哪一句話？'],
    outline: ['事情：什麼讓我有這個心情？', '反應：我的表情、動作或想法', '轉變：後來心情有改變嗎？'],
    writing: '寫 6～8 句，至少用一個動作和一句心裡想法。',
    check: ['不是只寫「開心／害怕」', '有看得見的表情或動作', '寫出當時的想法'],
    sample: '老師突然說今天要上臺分享作品，我嚇得握緊稿紙。輪到我時，我深吸一口氣，心想：「慢慢說就好。」說完後，同學替我鼓掌，我終於露出笑容。',
    teacher: ['可以請學生表演「緊張、失望、驚喜」，全班猜。', '先練習觀察表情與動作，再進行文字轉換。', '學生若喜歡奇幻設定，可把感受帶入故事人物。']
  },
  {
    title: '幻影照片事件', skill: '看圖寫一篇故事', icon: 'picture',
    prompt: '照片裡，一把雨傘留在空蕩蕩的長椅上。發生了什麼？',
    technique: '看圖先觀察再推想', formula: '看得到的事實 → 合理猜測 → 完整故事',
    steps: ['先說圖上確定看見什麼', '推想誰留下、為什麼離開', '補出起因、經過與結果'],
    weak: '有一把雨傘。有人走了。', strong: '公園的長椅上留著一把黃色雨傘。我猜主人急著追上公車，忘記帶走它。',
    why: '觀察不能憑空亂說；想像可以自由，但要和畫面線索連得起來。',
    oral: ['你確定看得到的物品有哪些？', '哪一個細節讓你猜出發生了什麼？', '接下來誰會出現？事情怎麼結束？'],
    outline: ['看圖：人、物、地點與天氣', '推想：先前發生什麼事？', '結尾：物品或人物最後怎樣？'],
    writing: '寫 7～9 句短篇看圖作文，有觀察也有合理想像。',
    check: ['第一段有清楚寫出圖上線索', '推想和圖畫有關', '事情有結尾'],
    sample: '雨停了，公園的長椅上卻留著一把黃色雨傘。我猜是一位小朋友玩得太開心，把雨傘忘在那裡。過了一會兒，他急急忙忙跑回來，終於找到了心愛的雨傘。',
    teacher: ['請先分兩欄口說：「我看到」與「我猜」。', '不要求只有一個標準故事，只要求推理合理。', '圖像維持簡單，避免學生沉迷於畫面細節。']
  },
  {
    title: '神奇物品研究所', skill: '介紹一樣物品', icon: 'gear',
    prompt: '介紹你熟悉的一件物品，讓沒看過的人也能認識它。',
    technique: '說明文三面向', formula: '外觀 ＋ 用途 ＋ 特點',
    steps: ['說清楚物品是什麼、長什麼樣', '介紹它可以做什麼', '補一個和其他物品不同的特色'],
    weak: '我的筆袋很好用，我很喜歡它。', strong: '我的筆袋是深綠色的，裡面分成兩層，可以放鉛筆和橡皮擦，最特別的是側邊有一個小拉鍊袋。',
    why: '介紹物品不能只寫喜不喜歡，要讓陌生讀者知道它的樣子和用途。',
    oral: ['這件物品的顏色、大小、形狀是什麼？', '它平常怎麼被使用？', '和別的同類物品相比，它特別在哪裡？'],
    outline: ['外觀：名稱、顏色、形狀', '用途：我怎麼使用它', '特色：最特別的設計或優點'],
    writing: '寫 7～10 句說明文，可把真實物品放桌上觀察。',
    check: ['有介紹外觀', '有說明用途', '有一個具體特色'],
    sample: '我有一個藍色的水壺，它的形狀又高又圓。上方有提把，方便我帶去學校。它可以裝溫水，旁邊還有刻度，讓我知道今天喝了多少水。',
    teacher: ['最好請學生帶一件實物，減少空想負擔。', '練習客觀介紹，不以情緒形容代替資訊。', '和第 2 週五感區分：這堂更重視有條理的說明。']
  },
  {
    title: '魔法圖書館', skill: '寫出閱讀心得', icon: 'book',
    prompt: '選一本讀過的書：哪一個情節最讓你難忘？',
    technique: '內容—感受—理由', formula: '一小段內容 ＋ 我的感受 ＋ 為什麼',
    steps: ['只挑一個印象深刻的情節', '說出讀到那裡的心情', '用故事細節解釋原因'],
    weak: '這本書很好看，我很喜歡。', strong: '我最記得主角鼓起勇氣幫助朋友的場面，因為他明明很害怕，還是選擇站出來。',
    why: '閱讀心得不是重講整本書，而是用一個情節支持自己的感想。',
    oral: ['書裡哪一幕你最記得？', '讀到那裡，你有什麼心情或疑問？', '故事裡哪個細節讓你這樣想？'],
    outline: ['介紹：我讀的是哪一本書', '情節：只講一個重要片段', '心得：我的感想和理由'],
    writing: '寫 8～10 句閱讀心得；可選熟悉的長篇小說或短書。',
    check: ['不只是整本書的劇情摘要', '清楚說出自己的感受', '感受後有故事細節做理由'],
    sample: '我最近讀了一本冒險故事。我最記得主角遇到困難時，朋友沒有離開他。我讀到這裡很感動，因為真正的朋友會在需要時互相幫忙。這也讓我想到自己和同學合作的經驗。',
    teacher: ['學生能獨立讀長篇小說，可提高思考難度但不加重書寫負擔。', '避免要求完整故事摘要，防止篇幅失控。', '先談「為什麼有這個感覺」，再讓學生寫。']
  },
  {
    title: '作文修復工坊', skill: '自己發現並修改', icon: 'wrench',
    prompt: '一篇文章像一座橋：哪裡不清楚？哪裡還能更生動？',
    technique: '三次修改法', formula: '通順 → 清楚 → 生動',
    steps: ['第一讀：句子順不順、有沒有漏字', '第二讀：事情有沒有交代清楚', '第三讀：增加一個具體細節'],
    weak: '昨天我去公園。很好玩。玩球。', strong: '昨天下午，我和同學去公園玩球。我們把球傳來傳去，笑得停不下來。',
    why: '好的寫作不是一次就完成；小幅修改常比一直增加字數更有效。',
    oral: ['原句哪裡讓你看不明白？', '可以補上什麼人物、時間或動作？', '改完之後，哪一句最清楚？'],
    outline: ['找問題：圈出一個不清楚的地方', '試修改：補一個重要資訊', '再朗讀：聽起來通順嗎？'],
    writing: '拿以前寫過的一篇短文，實際修改 3 處，再謄寫一小段。',
    check: ['朗讀時句子通順', '讀者能理解人物與事件', '至少新增一個具體細節'],
    sample: '原句：我很緊張，上臺講話。\n修改後：輪到我上臺報告時，我緊張得手心冒汗。我握緊講稿，慢慢說出第一句話。',
    teacher: ['把修改看成升級，不是挑錯；每次最多修改三個重點。', '用學生之前的作品，讓進步具體可見。', '請學生自己選最想改進的一句。']
  },
  {
    title: '小作家獨立挑戰', skill: '獨立完成學校作文', icon: 'trophy',
    prompt: '期末任務：〈一次讓我難忘的經驗〉。你來決定素材和寫法。',
    technique: '獨立寫作四步驟', formula: '審題 → 選材 → 大綱 → 寫作與修改',
    steps: ['看懂題目，選一件最值得寫的事', '先列三段大綱，想好經過', '自行寫作，再用清單檢查'],
    weak: '我出去玩，很開心。我會記得。', strong: '上個月學校運動會，我第一次參加接力賽。交棒時我差點掉棒，幸好隊友接住了。那一刻，我才知道合作的重要。',
    why: '不必寫成最長的一篇；重點是能獨立選材、組織、完成與檢查。',
    oral: ['這個題目限制你寫什麼？', '你選哪一次經驗？為什麼難忘？', '經過中最重要的轉折是什麼？'],
    outline: ['開頭：一次難忘的經驗', '經過：事情發展與重要細節', '結尾：結果、感受或學到的事'],
    writing: '獨立寫一篇約 100～150 字的作文；依書寫耐力可彈性調整。',
    check: ['題目切合，文章有開頭、經過、結尾', '至少兩個具體細節', '自己檢查標點、語句與錯字'],
    sample: '我最難忘的是上次運動會。比賽前，我緊張得手心冒汗。輪到我跑時，我用力向前衝，卻差點沒接好接力棒。幸好隊友穩穩接住，我們一起跑完了比賽。雖然沒有第一名，我卻學會了互相合作的重要。',
    teacher: ['期末先給學生 5 分鐘獨立規劃，老師暫不提示。', '有卡住時只用提問支持，不代替寫句子。', '評量看審題、結構與自主修改，不以字數排名。']
  }
];

const STAGES = [
  { name: '任務引入', minutes: 5, teacher: '朗讀任務，讓學生先自由描述。先接住想法，不急著糾正句子。' },
  { name: '技法講解', minutes: 9, teacher: '指著公式逐項說明，老師先示範一個簡單例子，問學生各部分在哪裡。' },
  { name: '例句改造', minutes: 8, teacher: '先展示普通句，請學生口頭提出怎麼加強；再按「揭曉修改版」比較差異。' },
  { name: '引導口說', minutes: 10, teacher: '逐題口頭討論。學生想到很多時，請他選最有用的兩三個細節，老師口頭重述整理。' },
  { name: '文章組織', minutes: 8, teacher: '依三個框架先口說大綱；老師可在紙上簡記關鍵字，但不代寫完整句。' },
  { name: '紙筆實作', minutes: 15, teacher: '發下列印學習單或作文簿，學生寫作；老師巡視，優先提醒本堂技法。' },
  { name: '分享檢查', minutes: 5, teacher: '請學生朗讀一小段，利用三項清單自己檢查；選一個成功的地方給回饋。' }
];

const ICONS = {
  chest: '<rect x="18" y="42" width="84" height="54" rx="9"/><path d="M18 60h84M35 42V30a25 25 0 0 1 50 0v12M53 60v15h14V60"/><path d="m60 15 3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z"/>',
  eye: '<path d="M10 60Q60 10 110 60Q60 110 10 60Z"/><circle cx="60" cy="60" r="20"/><circle cx="66" cy="54" r="5" fill="currentColor" stroke="none"/><path d="M24 25v-9M34 19l4-8M94 95l5 7"/>',
  scroll: '<path d="M27 21h54a14 14 0 0 1 14 14v60H41a13 13 0 0 1-13-13V30a10 10 0 0 0-20 0v5h20M28 82a13 13 0 0 0 26 0v-6H28"/><path d="M47 40h30M47 54h30M47 68h20"/>',
  clock: '<circle cx="60" cy="60" r="44"/><path d="M60 32v29l21 13M60 16v7M60 97v7M16 60h7M97 60h7"/>',
  diary: '<rect x="27" y="15" width="68" height="91" rx="6"/><path d="M42 15v91M55 40h25M55 54h25M55 68h16M33 30h-13M33 49h-13M33 68h-13M33 87h-13"/>',
  route: '<path d="M22 91C10 61 49 73 48 49S94 24 99 35"/><path d="m86 34 13 1-2-13"/><circle cx="22" cy="91" r="9"/><circle cx="48" cy="49" r="5"/><path d="m87 82 10 10m0-10L87 92"/>',
  flask: '<path d="M47 12h26M52 12v39L24 96a7 7 0 0 0 6 11h60a7 7 0 0 0 6-11L68 51V12"/><path d="M37 79h46M49 90l7 4 9-8 6 4"/><circle cx="71" cy="73" r="3"/>',
  picture: '<path d="M22 56a38 38 0 0 1 76 0H22ZM60 56v36a12 12 0 0 0 24 0"/><path d="M26 81h68M31 81v22M89 81v22M31 91h58"/>',
  gear: '<path d="m54 12 12 0 4 11 10 4 11-5 8 8-5 11 4 10 11 4v12l-11 4-4 10 5 11-8 8-11-5-10 4-4 11H54l-4-11-10-4-11 5-8-8 5-11-4-10-11-4V55l11-4 4-10-5-11 8-8 11 5 10-4Z"/><circle cx="60" cy="61" r="18"/>',
  book: '<path d="M60 29C43 18 25 18 13 22v70c19-5 34-2 47 8 13-10 28-13 47-8V22c-12-4-30-4-47 7Z"/><path d="M60 29v71M25 42c8-1 16 0 22 4M73 46c6-4 14-5 22-4M25 59c8-1 16 0 22 4M73 63c6-4 14-5 22-4"/>',
  wrench: '<path d="M78 16a27 27 0 0 0-31 32L17 78a13 13 0 0 0 18 18l30-30a27 27 0 0 0 32-31L82 50 68 36Z"/><circle cx="27" cy="87" r="4"/>',
  trophy: '<path d="M35 16h50v28c0 24-10 35-25 35S35 68 35 44V16ZM35 25H18v13c0 14 8 22 21 22M85 25h17v13c0 14-8 22-21 22M60 79v16M40 104h40M50 95h20"/><path d="m60 31 4 9 10 1-8 7 2 10-8-5-8 5 2-10-8-7 10-1Z"/>'
};
const ICON_COLORS = [
  ['#e5f2e9','#3b8169'], ['#eef3df','#68804b'], ['#f8e9dc','#aa774a'],
  ['#e6eef9','#627ca4'], ['#f7e9f3','#976a8f'], ['#e5f3f0','#3c857b'],
  ['#fbece8','#bd735f'], ['#eeeefa','#7e78b3'], ['#f2eee4','#94784e'],
  ['#e2f0f4','#48839a'], ['#f0eae5','#92705d'], ['#f6efd8','#a7873c']
];

const STORAGE_KEY = 'dongjia-classroom-teacher-v2';
const LEGACY_KEY = 'dongjia-writing-week01-v1';
const CHANNEL_KEY = 'dongjia-classroom-live-v2';
const query = new URLSearchParams(location.search);
const isProjector = query.has('projector');
const isWorksheet = query.has('worksheet');
const app = document.getElementById('app');
let page = 'home';
let state = { week: 0, slide: 0, reveal: false, notes: {} };

try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  state = { ...state, ...stored, notes: stored.notes || {} };
} catch (_) { /* localStorage may be unavailable */ }
state.week = Math.max(0, Math.min(11, Number(state.week) || 0));
state.slide = Math.max(0, Math.min(6, Number(state.slide) || 0));
if (query.has('week') && !isProjector && !isWorksheet) {
  state.week = Math.max(0, Math.min(11, (Number(query.get('week')) || 1) - 1));
  page = 'lesson';
}

let channel = null;
try { channel = new BroadcastChannel(CHANNEL_KEY); } catch (_) { /* fallback storage events */ }
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function iconMarkup(index, extraClass = '') {
  const lesson = LESSONS[index];
  const [bg, ink] = ICON_COLORS[index];
  return `<div class="illustration-wrap ${extraClass}" style="--icon-bg:${bg};--icon-ink:${ink}"><svg class="illustration" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="${escapeHTML(lesson.title)}圖示">${ICONS[lesson.icon]}</svg></div>`;
}
function persist(renderAfter = true) {
  // 大螢幕也能翻頁；同步前保留教師控制台最新的備課文字，避免舊分頁覆蓋紀錄。
  if (isProjector) {
    try {
      const latest = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (latest.notes) state.notes = latest.notes;
    } catch (_) {}
  }
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  try { channel?.postMessage({ type: 'sync', week: state.week, slide: state.slide, reveal: state.reveal }); } catch (_) {}
  if (renderAfter) render();
}
function applyLive(data) {
  if (!data || data.type !== 'sync') return;
  const week = Math.max(0, Math.min(11, Number(data.week) || 0));
  const slide = Math.max(0, Math.min(6, Number(data.slide) || 0));
  const reveal = !!data.reveal;
  const changed = week !== state.week || slide !== state.slide || reveal !== state.reveal;
  state.week = week;
  state.slide = slide;
  state.reveal = reveal;
  // 兩邊都能操作，但不需因備課文字同步而反覆重繪整個畫面。
  if (changed && !isWorksheet) render();
}
if (channel) channel.onmessage = e => applyLive(e.data);
window.addEventListener('storage', e => {
  if (e.key !== STORAGE_KEY || isWorksheet) return;
  try { applyLive({ type: 'sync', ...JSON.parse(e.newValue || '{}') }); } catch (_) {}
});

function header(active = 'home') {
  return `<header class="top"><div class="top-inner">
    <a href="./" class="brand" data-action="home" aria-label="返回學院首頁"><span class="brand-mark">✦</span><span>菄家奇幻寫作學院<small>TEACHER-LED WRITING ACADEMY</small></span></a>
    <nav class="nav" aria-label="主選單">
      <button data-action="home" class="${active === 'home' ? 'active' : ''}">12 週課程</button>
      <button data-action="continue" class="${active === 'lesson' ? 'active' : ''}">授課簡報</button>
      <button data-action="open-projector" class="gold">開啟大螢幕 ↗</button>
    </nav></div></header>`;
}
function homePage() {
  return `${header('home')}<main class="container">
    <section class="hero"><div>
      <div class="eyebrow light">FIRST TERM · 12 WEEK ADVENTURE</div>
      <h1>用故事點亮想像，<br>用方法寫好作文。</h1>
      <p>每週一堂 60 分鐘。老師帶領觀察、示範、提問與口說練習；學生最後拿起紙筆，寫下自己的文字。</p>
      <button class="primary" data-action="continue">進入第 ${String(state.week + 1).padStart(2, '0')} 週課堂 →</button>
    </div><div class="hero-icon-cluster"><div class="hero-circle">${iconMarkup(0)}</div></div></section>
    <div class="intro-chips"><div class="intro-chip"><strong>授課對象</strong>｜國小三年級</div>
      <div class="intro-chip"><strong>上課模式</strong>｜老師操作・學生口說＋紙筆</div>
      <div class="intro-chip"><strong>每堂流程</strong>｜技法 → 示範 → 練習 → 寫作</div>
      <div class="intro-chip"><strong>期末目標</strong>｜能獨立完成學校作文</div></div>
    <section aria-labelledby="weeks-title"><div class="section-head"><div><div class="eyebrow">THE 12 MISSIONS</div><h2 id="weeks-title">十二週寫作任務</h2><p>每堂都有獨立主題、簡潔圖示、完整教學技法與可列印學習單。</p></div></div>
    <div class="week-grid">${LESSONS.map((l,i)=>`<button class="week-card" data-action="select-week" data-week="${i}">
      <div class="week-card-top"><span class="week-num">MISSION ${String(i+1).padStart(2,'0')}</span>${iconMarkup(i)}</div>
      <h3>${escapeHTML(l.title)}</h3><p>${escapeHTML(l.skill)}｜${escapeHTML(l.technique)}</p>
      <div class="week-card-foot"><span>60 分鐘 · 7 張教學投影片</span><span class="week-open">開始授課 →</span></div>
    </button>`).join('')}</div></section>
    <div class="notice" style="margin-top:24px">✦ 使用方式：在電腦開啟「授課簡報」，再按「開啟大螢幕」把純投影片視窗移到延伸螢幕。所有提問與答案揭曉都由老師操作，學生不需要在網頁打字。</div>
  </main>${footer()}`;
}
function footer() { return `<footer class="footer">菄家奇幻寫作學院 · 第一學期 12 週 · 以學校作文為核心，保留故事創作的想像力</footer>`; }
function slideMarkup(index = state.week, step = state.slide, reveal = state.reveal) {
  const l = LESSONS[index];
  const kicker = `任務 ${String(index + 1).padStart(2,'0')} · ${STAGES[step].name} · ${STAGES[step].minutes} 分鐘`;
  let body = '';
  if (step === 0) body = `<div class="slide-hero"><div class="slide-hero-text"><h2>${escapeHTML(l.title)}</h2><p>${escapeHTML(l.prompt)}</p></div>${iconMarkup(index)}</div><div class="slide-banner">今日任務：學會「${escapeHTML(l.technique)}」，讓讀者看懂你的想法。</div>`;
  if (step === 1) body = `<h2>今天的寫作祕技</h2><p class="slide-sub">${escapeHTML(l.technique)}：把想法一步一步變成清楚的句子。</p>
    <div class="technique-box"><div class="eyebrow">魔法公式</div><div class="technique-formula">${escapeHTML(l.formula)}</div></div>
    <div class="tech-steps">${l.steps.map((s,i)=>`<div class="tech-step"><b>STEP ${i+1}</b><span>${escapeHTML(s)}</span></div>`).join('')}</div>`;
  if (step === 2) body = `<h2>普通句，如何變精彩？</h2><p class="slide-sub">老師先提問：「怎麼修改才能更清楚？」再揭曉示範。</p>
    <div class="compare"><div class="compare-card weak"><h3>原本的句子</h3><p>${escapeHTML(l.weak)}</p></div>
    ${reveal ? `<div class="compare-card strong"><h3>改造之後 ✓</h3><p>${escapeHTML(l.strong)}</p></div>` : `<div class="compare-card strong masked"><h3>改造之後</h3><p>先說說你的改法……<br>等老師揭曉示範句。</p></div>`}</div>`;
  if (step === 3) body = `<h2>先說出來，再寫下來</h2><p class="slide-sub">老師依序提問。可以說很多，再選出最重要的細節。</p><div class="prompt-grid">${l.oral.map((s,i)=>`<div class="prompt-card"><span class="number">${i+1}</span><span>${escapeHTML(s)}</span></div>`).join('')}</div>`;
  if (step === 4) body = `<h2>三格大綱，把內容排好</h2><p class="slide-sub">先口頭說出每一格的重點，不用立刻寫完整句。</p><div class="outline-grid">${l.outline.map((s,i)=>`<div class="outline-cell"><b>${i+1}. ${escapeHTML(s)}</b><small>我想放進文章的關鍵字……</small></div>`).join('')}</div>`;
  if (step === 5) body = `<h2>輪到你動筆了 ✎</h2><p class="slide-sub">寫在紙上，不必在電腦輸入。先求清楚，再求精彩。</p><div class="slide-banner">寫作目標：${escapeHTML(l.writing)}</div><div class="paper-visual">${Array.from({length:6},()=>'<div></div>').join('')}</div>`;
  if (step === 6) body = `<h2>朗讀一次，完成小作家檢查</h2><p class="slide-sub">先分享你最喜歡的一句，再看看能不能自己修好。</p><div class="checklist">${l.check.map(s=>`<div>□ ${escapeHTML(s)}</div>`).join('')}</div>`;
  return `<section class="slide" aria-label="${escapeHTML(STAGES[step].name)}"><div class="slide-kicker">${escapeHTML(kicker)}</div>${body}</section>`;
}
function teacherScript(l, step) {
  if (step===0) return `今天先當觀察員。我們的題目是：「${l.prompt}」先不用寫，告訴我你注意到了什麼？`;
  if (step===1) return `我們今天學「${l.technique}」。記住這個方法：「${l.formula}」。現在看看三個步驟，你能用自己的話說一次嗎？`;
  if (step===2) return `聽老師讀：「${l.weak}」你覺得讀者還會想知道什麼？先試著說一個改法，等一下我們來看示範句。`;
  if (step===3) return `我們先練習說，還不動筆。第一題：「${l.oral[0]}」你可以慢慢想；老師會幫你整理重點。`;
  if (step===4) return `文章像一條有順序的路。第一格：「${l.outline[0]}」你打算放哪個重點？接著一起把第二格、第三格說出來。`;
  if (step===5) return `現在拿出學習單，試著自己寫。「${l.writing}」如果卡住，先看看剛才說過的三格大綱；不用急著寫很多。`;
  return `請選自己最喜歡的一句，慢慢朗讀。再看檢查清單第一項：「${l.check[0]}」這句做到了嗎？有哪裡想再改一點？`;
}
function lessonPage() {
  const l = LESSONS[state.week];
  const step = STAGES[state.slide];
  const note = state.notes[state.week] || '';
  return `${header('lesson')}<main class="container">
    <div class="lesson-top"><div><div class="eyebrow">MISSION ${String(state.week+1).padStart(2,'0')} / 12 · 老師授課控制台</div>
      <h1>${escapeHTML(l.title)}</h1><p>本週技法：${escapeHTML(l.technique)}　｜　全程 60 分鐘　｜　學生以口說與紙筆參與</p></div>
      <div class="lesson-actions"><button class="secondary" data-action="worksheet">列印本週學習單 ↗</button><button class="primary" data-action="open-projector">開啟大螢幕 ↗</button></div></div>
    <div class="teacher-layout"><div><div class="stage-shell">
      <div class="stage-caption"><span>大螢幕投影片預覽</span><span>第 ${state.slide+1} / 7 張 · ${step.minutes} 分鐘</span></div>
      <div class="stage-frame">${slideMarkup()}</div>
      <div class="stage-controls"><button data-action="previous" ${state.slide===0?'disabled':''}>← 上一張</button>
        <div class="step-dots">${STAGES.map((s,i)=>`<button data-action="goto" data-slide="${i}" aria-label="第 ${i+1} 張：${s.name}" title="${s.name}" class="${i===state.slide?'current':''}"></button>`).join('')}</div>
        <button data-action="next" ${state.slide===6?'disabled':''}>下一張 →</button></div>
    </div><div class="notice">操作提示：電腦與大螢幕都可以按「上一張／下一張」，也能使用鍵盤 ← / → 或空白鍵。兩個畫面會同步；將大螢幕視窗移到延伸螢幕後，可按 F11 放大。</div></div>
    <aside class="sidebar" aria-label="老師備課與授課提示">
      <div class="side-card"><span class="side-tag">TEACHER NOTES · ${step.minutes} 分鐘</span><h3>${escapeHTML(step.name)}｜老師怎麼教</h3>
        <p>${escapeHTML(step.teacher)}</p>
        <blockquote><strong>老師可這樣說：</strong><br>${escapeHTML(teacherScript(l,state.slide))}</blockquote>
        ${state.slide===2?`<button class="primary" data-action="reveal">${state.reveal?'收起示範答案':'揭曉修改版 ✦'}</button>${state.reveal?`<p class="tip">比較重點：${escapeHTML(l.why)}</p>`:''}`:''}
        ${state.slide===5?`<p class="tip">本週紙筆任務：${escapeHTML(l.writing)}</p>`:''}
        ${state.slide===6?`<p class="tip">示範短文：${escapeHTML(l.sample)}</p>`:''}
      </div>
      <div class="side-card"><span class="side-tag">本堂教學提醒</span><h3>老師注意這三件事</h3>
        <ul>${l.teacher.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ul>
        <p class="tip">每週都可依書寫耐力調整字數。學生先口說，再動筆；不要替學生寫完整句。</p>
      </div>
      <div class="side-card"><span class="side-tag">備課紀錄（只在這台裝置保存）</span><label for="teacher-note">觀察到的進步／下次提醒</label>
        <textarea id="teacher-note" rows="3" placeholder="例如：能清楚口說，但寫作時忘了加上地點。">${escapeHTML(note)}</textarea>
        <div class="side-buttons"><button class="secondary" data-action="export-notes">下載備課紀錄</button><button class="secondary" data-action="worksheet">開啟學習單</button></div>
      </div>
      <div class="side-card"><span class="side-tag">課程導航</span><div class="side-buttons"><button class="secondary" data-action="select-adjacent" data-offset="-1" ${state.week===0?'disabled':''}>← 上一週</button><button class="secondary" data-action="select-adjacent" data-offset="1" ${state.week===11?'disabled':''}>下一週 →</button></div></div>
    </aside></div></main>${footer()}`;
}
function projectorPage() {
  document.title = `${LESSONS[state.week].title}｜大螢幕投影片`;
  return `<main class="projector-root">
    <div class="projector-stage">${slideMarkup()}</div>
    <nav class="projector-controls" aria-label="老師操作投影片">
      <button class="projector-nav" data-action="previous" ${state.slide===0?'disabled':''} aria-label="上一張投影片">← 上一張</button>
      <div class="projector-progress"><span aria-live="polite">${state.slide+1} / 7</span>
        <div class="projector-dots">${STAGES.map((s,i)=>`<button data-action="goto" data-slide="${i}" class="${i===state.slide?'current':''}" aria-label="跳至第 ${i+1} 張：${s.name}" aria-current="${i===state.slide?'step':'false'}" title="${s.name}"></button>`).join('')}</div>
      </div>
      ${state.slide===2?`<button class="projector-reveal" data-action="reveal">${state.reveal?'收起示範':'揭曉示範 ✦'}</button>`:''}
      <button class="projector-nav next" data-action="next" ${state.slide===6?'disabled':''} aria-label="下一張投影片">下一張 →</button>
    </nav>
    <div class="projector-hint">老師操作｜點按按鈕或使用鍵盤 ← →、空白鍵</div>
  </main>`;
}
function worksheetPage() {
  const index = Math.max(0, Math.min(11, (Number(query.get('week')) || (state.week + 1)) - 1));
  const l = LESSONS[index];
  document.title = `第 ${index+1} 週學習單｜${l.title}`;
  return `<main class="worksheet"><div class="worksheet-toolbar"><strong>第 ${String(index+1).padStart(2,'0')} 週 · ${escapeHTML(l.title)} · 可列印學習單</strong><button class="primary" data-action="print">列印／另存 PDF</button></div>
    <article class="worksheet-page"><div class="worksheet-header"><div><span class="eyebrow">菄家奇幻寫作學院 · MISSION ${String(index+1).padStart(2,'0')}</span><h1>${escapeHTML(l.title)}</h1><p>姓名：________________　日期：__________</p></div>${iconMarkup(index)}</div>
      <div class="worksheet-intro"><strong>今日寫作祕技｜${escapeHTML(l.technique)}</strong><p>${escapeHTML(l.formula)}</p><p>任務：${escapeHTML(l.prompt)}</p></div>
      <h2>① 先說一說，寫下三個關鍵字</h2><div class="worksheet-prompts">${l.outline.map((s,i)=>`<div class="worksheet-prompt"><b>${i+1}. ${escapeHTML(s)}</b><div class="line"></div><div class="line"></div></div>`).join('')}</div>
      <h2>② 我的作文</h2><p class="worksheet-hint">${escapeHTML(l.writing)}</p><div class="worksheet-lines">${Array.from({length:10},()=>'<div></div>').join('')}</div>
      <h2>③ 交卷前自我檢查</h2><div class="worksheet-check">${l.check.map(s=>`<span>□ ${escapeHTML(s)}</span>`).join('')}</div>
    </article></main>`;
}
function render() {
  if (isWorksheet) { app.innerHTML = worksheetPage(); return; }
  if (isProjector) { app.innerHTML = projectorPage(); return; }
  document.title = '菄家｜奇幻寫作學院・教師授課版';
  app.innerHTML = page==='lesson' ? lessonPage() : homePage();
}
function navigateWeek(index) {
  state.week = Math.max(0, Math.min(11, index));
  state.slide = 0; state.reveal = false; page='lesson';
  const url = new URL(location.href);
  url.searchParams.set('week', String(state.week + 1));
  history.replaceState(null, '', url.pathname + url.search);
  persist(); window.scrollTo({top:0,behavior:'instant'});
}
function downloadFile(name, contents, mime='text/plain;charset=utf-8') {
  const blob = new Blob([contents],{type:mime});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a'); anchor.href=url; anchor.download=name;
  document.body.appendChild(anchor); anchor.click(); anchor.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
document.addEventListener('click', event=>{
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.tagName.toLowerCase()==='a') event.preventDefault();
  const action = button.dataset.action;
  if (action==='home') { page='home'; history.replaceState(null,'',location.pathname); render(); window.scrollTo(0,0); }
  if (action==='continue') navigateWeek(state.week);
  if (action==='select-week') navigateWeek(Number(button.dataset.week));
  if (action==='select-adjacent') navigateWeek(state.week + Number(button.dataset.offset));
  if (action==='previous' && state.slide>0) { state.slide--; state.reveal=false; persist(); }
  if (action==='next' && state.slide<6) { state.slide++; state.reveal=false; persist(); }
  if (action==='goto') { state.slide=Number(button.dataset.slide); state.reveal=false; persist(); }
  if (action==='reveal') { state.reveal=!state.reveal; persist(); }
  if (action==='open-projector') window.open(`${location.pathname}?projector=1`, '_blank', 'noopener');
  if (action==='worksheet') window.open(`${location.pathname}?worksheet=1&week=${state.week+1}`, '_blank', 'noopener');
  if (action==='print') window.print();
  if (action==='export-notes') {
    let backup=null;
    try { backup=localStorage.getItem(LEGACY_KEY); } catch (_) {}
    const lines = LESSONS.map((l,i)=>`第 ${i+1} 週｜${l.title}\n${state.notes[i] || '（尚無紀錄）'}`).join('\n\n');
    const legacy=backup?`\n\n---\n舊版第一週練習草稿（原始備份）\n${backup}`:'';
    downloadFile('菄家寫作學院_老師備課紀錄.txt',`菄家奇幻寫作學院｜老師備課紀錄\n\n${lines}${legacy}`);
  }
});
document.addEventListener('input', event=>{
  if (event.target.id !== 'teacher-note') return;
  state.notes[state.week]=event.target.value;
  persist(false);
});
document.addEventListener('keydown', event=>{
  if (isWorksheet || (!isProjector && page!=='lesson') || ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  const next = event.key==='ArrowRight' || event.key==='PageDown' || (event.code==='Space' && (isProjector || document.activeElement.tagName!=='BUTTON'));
  const previous = event.key==='ArrowLeft' || event.key==='PageUp';
  if (next && state.slide<6) { event.preventDefault(); state.slide++; state.reveal=false; persist(); }
  if (previous && state.slide>0) { event.preventDefault(); state.slide--; state.reveal=false; persist(); }
});
render();

// ============================================================
//  AURA — ХИЧЭЭЛИЙН ӨГӨГДӨЛ (lessons.js)
//  Агуулга: COURSES (бүх хичээл) · LEVEL_INFO (түвшний нэрс)
//  ⚠️ Энэ файлыг index.html-ийн ӨМНӨ ачаална.
// ============================================================

const COURSES = {
  beginner: [
  {
    id:'be', title:'Мэндчилгээ ба "to be"', level:'Анхан 1',
    blurb:'Сайн уу, би..., чи... — am / is / are',
    rule:{
      h:'"Байх" үйл үг: am / is / are',
      html:`Англи хэлэнд "байх" гэдэг үг гурав хувирна:
        <div style="margin:12px 0"><span class="tag">I → am</span><span class="tag">he / she / it → is</span><span class="tag">you / we / they → are</span></div>
        Жишээ нь: <b>I <span style="color:var(--mint)">am</span> a teacher</b> (Би багш), <b>She <span style="color:var(--mint)">is</span> happy</b> (Тэр баяртай), <b>You <span style="color:var(--mint)">are</span> my friend</b> (Чи миний найз).
        <p style="margin-top:12px">Ярианд ихэвчлэн товчилдог: <b>I am → I'm</b>, <b>you are → you're</b>, <b>she is → she's</b>.</p>`
    },
    phrases:[
      {en:"Hello!", pron:"хэлоу!", mn:"Сайн уу!"},
      {en:"Hi! How are you?", pron:"хай! хау а ю?", mn:"Сайн уу! Юу байна?"},
      {en:"I'm fine, thank you.", pron:"айм файн, сэнк ю.", mn:"Сайн байна, баярлалаа."},
      {en:"What's your name?", pron:"вотс ёр нэйм?", mn:"Таны нэр хэн бэ?"},
      {en:"My name is Saraa.", pron:"май нэйм из Сараа.", mn:"Миний нэр Сараа."},
      {en:"Nice to meet you.", pron:"найс ту мийт ю.", mn:"Танилцахад таатай байна."}
    ],
    exercises:[
      {q:"Зөв үгийг сонго:", parts:["I ", " a student."], opts:["am","is","are"], a:0, fix:"«I»-тэй үргэлж «am» ордог → I am a student."},
      {q:"Зөв үгийг сонго:", parts:["She ", " my teacher."], opts:["am","is","are"], a:1, fix:"«he/she/it»-тэй «is» → She is my teacher."},
      {q:"Зөв үгийг сонго:", parts:["You ", " very kind."], opts:["am","is","are"], a:2, fix:"«you/we/they»-тэй «are» → You are very kind."},
      {q:"Өглөө хүнтэй уулзвал:", parts:[""], opts:["Good morning","Good night"], a:0, fix:"«Good night» бол унтахын өмнө. Өглөө → Good morning."}
    ],
    speak:{ scene:'Танилцах', turns:[
      {ruby:"Hi! What's your name?", pron:"хай! вотс ёр нэйм?", mn:"Сайн уу! Нэр чинь хэн бэ?",
        choices:[{t:"My name is Bat.",best:true,mn:"Миний нэр Бат."},{t:"I Bat.",best:false,fix:"«am» дутуу. Зөв: My name is Bat / I'm Bat."}]},
      {ruby:"Nice to meet you, Bat! How are you?", pron:"найс ту мийт ю, Бат! хау а ю?", mn:"Танилцахад таатай байна! Юу байна?",
        choices:[{t:"I'm fine, thank you.",best:true,mn:"Сайн байна, баярлалаа."},{t:"Fine.",best:false,fix:"Илүү бүтэн: I'm fine, thanks!"}]},
      {ruby:"Great! See you soon.", pron:"грэйт! сий ю сүүн.", mn:"Гоё! Дараа уулзъя.",
        choices:[{t:"See you! Bye.",best:true,mn:"Уулзъя! Баяртай."},{t:"Ok.",best:false,fix:"Найрсаг: See you! Bye!"}]}
    ]}
  },
  {
    id:'intro', title:'Өөрийгөө танилцуулах', level:'Анхан 2',
    blurb:"I'm from... / I'm a... — хаанахын, ямар мэргэжилтэй",
    rule:{
      h:"I'm from... ба I'm a...",
      html:`Өөрийгөө танилцуулахдаа:
        <div style="margin:12px 0"><span class="tag">I'm from + улс</span><span class="tag">I'm a / an + мэргэжил</span><span class="tag">I live in + хот</span></div>
        <b>I'm from Mongolia</b> (Би Монголоос), <b>I'm a teacher</b> (Би багш), <b>I live in Ulaanbaatar</b> (Би Улаанбаатарт амьдардаг).
        <p style="margin-top:12px">Мэргэжлийн өмнө <b>a</b> ордог: a doctor, a driver. Эгшгээр эхэлбэл <b>an</b>: an engineer.</p>`
    },
    phrases:[
      {en:"I'm from Mongolia.", pron:"айм фром Монголиа.", mn:"Би Монголоос ирсэн."},
      {en:"I live in Ulaanbaatar.", pron:"ай лив ин Уланбаатар.", mn:"Би Улаанбаатарт амьдардаг."},
      {en:"I'm a teacher.", pron:"айм э тийчэр.", mn:"Би багш."},
      {en:"I'm twenty-five years old.", pron:"айм твэнти-файв йирз оулд.", mn:"Би хорин таван настай."},
      {en:"I speak Mongolian and English.", pron:"ай спийк Монголиан энд Инглиш.", mn:"Би монгол, англиар ярьдаг."}
    ],
    exercises:[
      {q:"Нөхөж бич:", parts:["I'm ", " Mongolia."], opts:["from","in","a"], a:0, fix:"Улсын өмнө «from» → I'm from Mongolia."},
      {q:"Нөхөж бич:", parts:["I'm ", " doctor."], opts:["from","a","in"], a:1, fix:"Мэргэжлийн өмнө «a» → I'm a doctor."},
      {q:"Нөхөж бич:", parts:["I ", " in Darkhan."], opts:["live","from","am"], a:0, fix:"«амьдардаг» → I live in Darkhan."},
      {q:"«engineer»-ийн өмнө:", parts:["I'm ", " engineer."], opts:["a","an"], a:1, fix:"«e» эгшгээр эхэлсэн тул «an» → an engineer."}
    ],
    speak:{ scene:'Ажлын танилцуулга', turns:[
      {ruby:"Hello! Where are you from?", pron:"хэлоу! вэр а ю фром?", mn:"Сайн уу! Та хаанахын хүн бэ?",
        choices:[{t:"I'm from Mongolia.",best:true,mn:"Би Монголоос."},{t:"Mongolia.",best:false,fix:"Бүтэн өгүүлбэр илүү сайхан: I'm from Mongolia."}]},
      {ruby:"Nice! What do you do?", pron:"найс! вот ду ю ду?", mn:"Гоё! Та ямар ажилтай вэ?",
        choices:[{t:"I'm a teacher.",best:true,mn:"Би багш."},{t:"Teacher.",best:false,fix:"«I'm a» нэмээрэй: I'm a teacher."}]},
      {ruby:"Wonderful! Welcome.", pron:"вандэрфул! велком.", mn:"Гайхалтай! Тавтай морил.",
        choices:[{t:"Thank you very much!",best:true,mn:"Маш их баярлалаа!"},{t:"Yes.",best:false,fix:"Талархвал: Thank you!"}]}
    ]}
  },
  {
    id:'articles', title:'a / an ба олон тоо', level:'Анхан 3',
    blurb:"This is a... / These are... — нэр үг, тоо",
    rule:{
      h:"a / an ба олон тоо (-s)",
      html:`Нэг зүйлийг заахад <b>a</b> эсвэл <b>an</b> ордог:
        <div style="margin:12px 0"><span class="tag">a + гийгүүлэгч: a book, a car</span><span class="tag">an + эгшиг: an apple, an egg</span></div>
        Олон бол ихэвчлэн <b>-s</b> нэмнэ: book → book<b>s</b>, car → car<b>s</b>.
        <p style="margin-top:12px"><b>This is a book</b> (Энэ бол ном), <b>These are books</b> (Эдгээр бол номнууд).</p>`
    },
    phrases:[
      {en:"What's this?", pron:"вотс зис?", mn:"Энэ юу вэ?"},
      {en:"This is a pen.", pron:"зис из э пэн.", mn:"Энэ бол үзэг."},
      {en:"This is an apple.", pron:"зис из эн эппл.", mn:"Энэ бол алим."},
      {en:"These are books.", pron:"зийз а букс.", mn:"Эдгээр бол номнууд."},
      {en:"How much is it?", pron:"хау мач из ит?", mn:"Энэ хэдэн төгрөг вэ?"}
    ],
    exercises:[
      {q:"a эсвэл an?", parts:["It's ", " car."], opts:["a","an"], a:0, fix:"«c» гийгүүлэгч тул «a» → a car."},
      {q:"a эсвэл an?", parts:["It's ", " orange."], opts:["a","an"], a:1, fix:"«o» эгшиг тул «an» → an orange."},
      {q:"Олон тоо болго:", parts:["Three ", "."], opts:["book","books"], a:1, fix:"Олон бол «-s» → three books."},
      {q:"Асуулт сонго:", parts:[""], opts:["What's this?","This is."], a:0, fix:"«Энэ юу вэ?» → What's this?"}
    ],
    speak:{ scene:'Дэлгүүрт', turns:[
      {ruby:"Hi! Can I help you?", pron:"хай! кэн ай хэлп ю?", mn:"Сайн уу! Тусалж болох уу?",
        choices:[{t:"What's this?",best:true,mn:"Энэ юу вэ?"},{t:"This?",best:false,fix:"Бүтэн: What's this?"}]},
      {ruby:"It's a notebook. It's very nice.", pron:"итс э ноутбүк. итс вэри найс.", mn:"Энэ бол дэвтэр. Их гоё.",
        choices:[{t:"How much is it?",best:true,mn:"Хэдэн төгрөг вэ?"},{t:"Money?",best:false,fix:"Үнэ асуувал: How much is it?"}]},
      {ruby:"It's five dollars.", pron:"итс файв доларз.", mn:"Таван доллар.",
        choices:[{t:"OK, I'll take it. Thanks!",best:true,mn:"За, авъя. Баярлалаа!"},{t:"Buy.",best:false,fix:"Байгалиар: I'll take it, thanks!"}]}
    ]}
  },
  {
    id:'possess', title:'Гэр бүл ба эзэмшил', level:'Анхан 4',
    blurb:"my/your/his/her · 's · have/has",
    rule:{
      h:"Хэний вэ: my/your/his/her ба have/has",
      html:`Эзэмшлийг заахад:
        <div style="margin:12px 0"><span class="tag">my / your / his / her / our / their</span><span class="tag">нэр + 's = эзэмшил</span></div>
        <b>my</b> family (миний), <b>her</b> name (түүний — эмэгтэй), <b>his</b> car (түүний — эрэгтэй). Нэрийн ард <b>'s</b>: <b>Bat's book</b> (Батын ном).
        <p style="margin-top:12px">"Байх/эзэмших" → <b>have / has</b>: I/you/we/they <b>have</b>, he/she/it <b>has</b>. Жишээ: I <b>have</b> a sister. She <b>has</b> a dog.</p>`
    },
    phrases:[
      {en:"This is my family.", pron:"зис из май фэмили.", mn:"Энэ бол миний гэр бүл."},
      {en:"Her name is Oyun.", pron:"хёр нэйм из Оюун.", mn:"Түүний (эмэгтэй) нэр Оюун."},
      {en:"His name is Bat.", pron:"хиз нэйм из Бат.", mn:"Түүний (эрэгтэй) нэр Бат."},
      {en:"I have two sisters.", pron:"ай хэв ту систэрз.", mn:"Надад хоёр эгч дүү бий."},
      {en:"She has a brother.", pron:"ши хэз э бразэр.", mn:"Түүнд ах дүү бий."},
      {en:"This is Bat's car.", pron:"зис из Батс кар.", mn:"Энэ бол Батын машин."}
    ],
    exercises:[
      {q:"Нөхөж бич:", parts:["This is ", " mother."], opts:["my","is","a"], a:0, fix:"«Хэний?» → my. This is my mother."},
      {q:"Эмэгтэйн тухай:", parts:[""], opts:["Her name is Sara","His name is Sara"], a:0, fix:"Эмэгтэй → Her. Her name is Sara."},
      {q:"Зөв сонго:", parts:["I ", " a dog."], opts:["have","has"], a:0, fix:"«I»-тэй have → I have a dog."},
      {q:"Зөв сонго:", parts:["He ", " two cats."], opts:["have","has"], a:1, fix:"«he/she/it»-тэй has → He has two cats."}
    ],
    speak:{ scene:'Гэр бүлээ танилцуулах', turns:[
      {ruby:"Do you have brothers or sisters?", pron:"ду ю хэв бразэрз о систэрз?", mn:"Чи ах эгч дүүтэй юу?",
        choices:[{t:"Yes, I have one sister.",best:true,mn:"Тийм, надад нэг эгч дүү бий."},{t:"Sister yes.",best:false,fix:"Бүтэн: I have one sister."}]},
      {ruby:"Nice! What's her name?", pron:"найс! вотс хёр нэйм?", mn:"Гоё! Түүний нэр хэн бэ?",
        choices:[{t:"Her name is Anu.",best:true,mn:"Түүний нэр Ану."},{t:"Anu.",best:false,fix:"«Her name is» нэмээрэй."}]},
      {ruby:"What a lovely family!", pron:"вот э лавли фэмили!", mn:"Ямар гоё гэр бүл вэ!",
        choices:[{t:"Thank you!",best:true,mn:"Баярлалаа!"},{t:"Yes.",best:false,fix:"Талархвал: Thank you!"}]}
    ]}
  },
  {
    id:'presentsimple', title:'Present Simple: дуртай зүйл', level:'Анхан 5',
    blurb:"I like / I don't like / Do you like...?",
    rule:{
      h:"Өдөр тутам ба дуртай зүйл",
      html:`Өдөр бүр хийдэг зүйл, дуртай зүйлээ хэлэхэд:
        <div style="margin:12px 0"><span class="tag">I / you / we / they + үйл үг</span><span class="tag">Үгүйсгэл: don't</span><span class="tag">Асуулт: Do you...?</span></div>
        <b>I like</b> coffee (Би дуртай), <b>I don't like</b> tea (Би дургүй), <b>Do you like</b> music? (Чи дуртай юу?).
        <p style="margin-top:12px">«don't» = do not-ийн товчлол.</p>`
    },
    phrases:[
      {en:"I like coffee.", pron:"ай лайк кофи.", mn:"Би кофенд дуртай."},
      {en:"I don't like tea.", pron:"ай доунт лайк тий.", mn:"Би цайнд дургүй."},
      {en:"Do you like music?", pron:"ду ю лайк мьюзик?", mn:"Чи хөгжимд дуртай юу?"},
      {en:"I work in an office.", pron:"ай вөрк ин эн офис.", mn:"Би оффист ажилладаг."},
      {en:"We live in Mongolia.", pron:"ви лив ин Монголиа.", mn:"Бид Монголд амьдардаг."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " pizza."], opts:["like","likes"], a:0, fix:"«I»-тэй энгийн үйл үг → I like pizza."},
      {q:"Үгүйсгэл:", parts:["I ", " like fish."], opts:["don't","doesn't"], a:0, fix:"I/you/we/they → don't. I don't like fish."},
      {q:"Асуулт:", parts:["", " you like tea?"], opts:["Do","Does"], a:0, fix:"«you»-тэй Do → Do you like tea?"},
      {q:"«Би дуртай»:", parts:[""], opts:["I like","I don't like"], a:0, fix:"Дуртай → I like."}
    ],
    speak:{ scene:'Дуртай зүйл', turns:[
      {ruby:"Do you like coffee?", pron:"ду ю лайк кофи?", mn:"Чи кофенд дуртай юу?",
        choices:[{t:"Yes, I like coffee.",best:true,mn:"Тийм, би кофенд дуртай."},{t:"Coffee good.",best:false,fix:"Бүтэн: Yes, I like coffee."}]},
      {ruby:"Me too! Do you like tea?", pron:"ми ту! ду ю лайк тий?", mn:"Би ч бас! Цайнд дуртай юу?",
        choices:[{t:"No, I don't like tea.",best:true,mn:"Үгүй, би цайнд дургүй."},{t:"No tea.",best:false,fix:"Бүтэн: No, I don't like tea."}]},
      {ruby:"Ha! Same here.", pron:"ха! сэйм хийр.", mn:"Ха! Би ч ялгаагүй.",
        choices:[{t:"Cool! Let's get coffee.",best:true,mn:"Гоё! Кофе уучихъя."},{t:"Ok bye.",best:false,fix:"Найрсаг: Let's get coffee!"}]}
    ]}
  },
  {
    id:'heshe', title:'Present Simple: he / she', level:'Анхан 6',
    blurb:"He works / doesn't / always, never",
    rule:{
      h:"he/she-тэй үйл үгэнд -s",
      html:`<b>he / she / it</b>-тэй бол үйл үгэнд <b>-s</b> нэмнэ:
        <div style="margin:12px 0"><span class="tag">He work<b>s</b></span><span class="tag">She like<b>s</b></span><span class="tag">Үгүйсгэл: doesn't</span></div>
        <b>She works</b> in a bank. Үгүйсгэлд <b>doesn't</b> + энгийн үйл үг: <b>He doesn't smoke</b>.
        <p style="margin-top:12px">Давтамжийн үгс: <b>always</b> (үргэлж), <b>usually</b> (ихэвчлэн), <b>sometimes</b> (заримдаа), <b>never</b> (хэзээ ч үгүй). Эдгээр нь үйл үгийн өмнө ордог.</p>`
    },
    phrases:[
      {en:"He gets up at seven.", pron:"хи гетс ап эт сэвн.", mn:"Тэр долоон цагт босдог."},
      {en:"She works in a hospital.", pron:"ши вөркс ин э хоспитал.", mn:"Тэр эмнэлэгт ажилладаг."},
      {en:"He doesn't smoke.", pron:"хи дазнт смоук.", mn:"Тэр тамхи татдаггүй."},
      {en:"She always drinks tea.", pron:"ши олвэйз дринкс тий.", mn:"Тэр үргэлж цай уудаг."},
      {en:"He never watches TV.", pron:"хи нэвэр вотчиз тиви.", mn:"Тэр хэзээ ч зурагт үздэггүй."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["She ", " in a bank."], opts:["work","works"], a:1, fix:"«she»-тэй -s → She works."},
      {q:"Үгүйсгэл:", parts:["He ", " like fish."], opts:["don't","doesn't"], a:1, fix:"«he»-тэй doesn't → He doesn't like fish."},
      {q:"Давтамж:", parts:["She ", " late."], opts:["never","nevers"], a:0, fix:"Давтамжийн үг хувирдаггүй → never."},
      {q:"Дараалал зөв нь:", parts:[""], opts:["He always gets up early","He gets always up early"], a:0, fix:"Давтамжийн үг үйл үгийн өмнө → He always gets up early."}
    ],
    speak:{ scene:'Найзаа тухай', turns:[
      {ruby:"What does your friend do?", pron:"вот даз ёр фрэнд ду?", mn:"Чиний найз юу хийдэг вэ?",
        choices:[{t:"She works in a school.",best:true,mn:"Тэр сургуульд ажилладаг."},{t:"Work school.",best:false,fix:"Бүтэн: She works in a school."}]},
      {ruby:"Nice! Does she like it?", pron:"найс! даз ши лайк ит?", mn:"Гоё! Тэр дуртай юу?",
        choices:[{t:"Yes, she loves it.",best:true,mn:"Тийм, тэр их дуртай."},{t:"Yes like.",best:false,fix:"Бүтэн: Yes, she loves it."}]},
      {ruby:"That's wonderful.", pron:"зэтс вандэрфул.", mn:"Гайхалтай юм.",
        choices:[{t:"Yes, she's happy.",best:true,mn:"Тийм, тэр аз жаргалтай."},{t:"Ok.",best:false,fix:"Илүү: Yes, she's happy!"}]}
    ]}
  },
  {
    id:'there', title:'There is / There are', level:'Анхан 7',
    blurb:"нэг/олон зүйл байх · in, on, under, next to",
    rule:{
      h:"There is / There are ба байрлал",
      html:`Ямар нэг зүйл "байна" гэдгийг:
        <div style="margin:12px 0"><span class="tag">There is + нэг</span><span class="tag">There are + олон</span></div>
        <b>There is</b> a book (нэг ном байна), <b>There are</b> two chairs (хоёр сандал байна).
        <p style="margin-top:12px">Байрлалын үгс: <b>in</b> (дотор), <b>on</b> (дээр), <b>under</b> (доор), <b>next to</b> (хажууд).</p>`
    },
    phrases:[
      {en:"There is a book on the table.", pron:"зэр из э бүк он зэ тэйбл.", mn:"Ширээн дээр ном байна."},
      {en:"There are two chairs.", pron:"зэр а ту чэйрз.", mn:"Хоёр сандал байна."},
      {en:"The cat is under the bed.", pron:"зэ кэт из андэр зэ бэд.", mn:"Муур орон доор байна."},
      {en:"The bag is next to the door.", pron:"зэ бэг из некст ту зэ дор.", mn:"Цүнх хаалганы хажууд байна."},
      {en:"Is there a shop near here?", pron:"из зэр э шоп нийр хийр?", mn:"Ойролцоо дэлгүүр байна уу?"}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["There ", " a car."], opts:["is","are"], a:0, fix:"Нэг → is. There is a car."},
      {q:"Зөв сонго:", parts:["There ", " three books."], opts:["is","are"], a:1, fix:"Олон → are. There are three books."},
      {q:"«дээр»:", parts:["The pen is ", " the box."], opts:["on","under"], a:0, fix:"Дээр → on."},
      {q:"«доор»:", parts:["The dog is ", " the table."], opts:["on","under"], a:1, fix:"Доор → under."}
    ],
    speak:{ scene:'Өрөө тухай', turns:[
      {ruby:"Is there a TV in your room?", pron:"из зэр э тиви ин ёр рүм?", mn:"Өрөөнд чинь зурагт байна уу?",
        choices:[{t:"Yes, there is.",best:true,mn:"Тийм, байна."},{t:"Yes TV.",best:false,fix:"Богино хариулт: Yes, there is."}]},
      {ruby:"Are there any books?", pron:"а зэр эни букс?", mn:"Ном байна уу?",
        choices:[{t:"Yes, there are many books.",best:true,mn:"Тийм, олон ном байна."},{t:"Books many.",best:false,fix:"Бүтэн: There are many books."}]},
      {ruby:"Nice room!", pron:"найс рүм!", mn:"Гоё өрөө!",
        choices:[{t:"Thank you!",best:true,mn:"Баярлалаа!"},{t:"Ok.",best:false,fix:"Талархвал: Thank you!"}]}
    ]}
  },
  {
    id:'can', title:'Can / can\'t — чадвар', level:'Анхан 8',
    blurb:"I can swim / Can you...? / Can I...?",
    rule:{
      h:"can / can't ба хүсэлт",
      html:`<b>can</b> = чадна, <b>can't</b> = чадахгүй. Ард нь <u>энгийн</u> үйл үг ордог:
        <div style="margin:12px 0"><span class="tag">I can swim</span><span class="tag">I can't drive</span><span class="tag">Can you...?</span><span class="tag">Can I...?</span></div>
        <b>can</b> хэзээ ч хувирдаггүй (he can, she can). Хүсэлт/санал: <b>Can you help me?</b> (Тусалж чадах уу?), <b>Can I help you?</b> (Тусалж болох уу?).`
    },
    phrases:[
      {en:"I can swim.", pron:"ай кэн свим.", mn:"Би сэлж чадна."},
      {en:"I can't drive.", pron:"ай кант драйв.", mn:"Би жолоо барьж чадахгүй."},
      {en:"Can you speak English?", pron:"кэн ю спийк Инглиш?", mn:"Чи англиар ярьж чадах уу?"},
      {en:"Can I help you?", pron:"кэн ай хэлп ю?", mn:"Тусалж болох уу?"},
      {en:"Can you help me, please?", pron:"кэн ю хэлп ми, плийз?", mn:"Надад тусалж болох уу?"}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " cook."], opts:["can","cans"], a:0, fix:"«can» хувирдаггүй → I can cook."},
      {q:"«чадахгүй»:", parts:["She ", " swim."], opts:["can","can't"], a:1, fix:"Чадахгүй → can't. She can't swim."},
      {q:"Асуулт:", parts:["", " you help me?"], opts:["Can","Do"], a:0, fix:"Чадварын асуулт → Can you help me?"},
      {q:"«can»-ы ард:", parts:["Can I ", " you?"], opts:["help","helps"], a:0, fix:"can-ы ард энгийн үйл үг → Can I help you?"}
    ],
    speak:{ scene:'Тусламж асуух', turns:[
      {ruby:"Hi! Can I help you?", pron:"хай! кэн ай хэлп ю?", mn:"Сайн уу! Тусалж болох уу?",
        choices:[{t:"Yes, can you help me, please?",best:true,mn:"Тийм, надад тусалж болох уу?"},{t:"Help me.",best:false,fix:"Эелдэг: Can you help me, please?"}]},
      {ruby:"Of course! Can you speak English?", pron:"оф корс! кэн ю спийк Инглиш?", mn:"Мэдээж! Чи англиар ярьж чадах уу?",
        choices:[{t:"A little. I'm learning.",best:true,mn:"Багахан. Би сурч байгаа."},{t:"No English.",best:false,fix:"Эерэг: A little. I'm learning!"}]},
      {ruby:"That's great! You can do it.", pron:"зэтс грэйт! ю кэн ду ит.", mn:"Гайхалтай! Чи чадна.",
        choices:[{t:"Thank you so much!",best:true,mn:"Маш их баярлалаа!"},{t:"Ok.",best:false,fix:"Талархвал: Thank you so much!"}]}
    ]}
  },
  {
    id:'qwords', title:'Асуулт үгс', level:'Анхан 9',
    blurb:"who / what / where / when / why / how",
    rule:{
      h:"Асуулт үгс өгүүлбэрийн эхэнд",
      html:`Асуухдаа эдгээр үгсийг эхэнд тавина:
        <div style="margin:12px 0"><span class="tag">who = хэн</span><span class="tag">what = юу</span><span class="tag">where = хаана</span><span class="tag">when = хэзээ</span><span class="tag">why = яагаад</span><span class="tag">how = яаж / ямар</span></div>
        <b>What</b> is your name? (Нэр чинь хэн бэ?), <b>Where</b> do you live? (Хаана амьдардаг вэ?), <b>Why</b> are you late? (Яагаад хоцорсон бэ?).`
    },
    phrases:[
      {en:"What is your name?", pron:"вот из ёр нэйм?", mn:"Нэр чинь хэн бэ?"},
      {en:"Where do you live?", pron:"вэр ду ю лив?", mn:"Чи хаана амьдардаг вэ?"},
      {en:"Who is that?", pron:"хү из зэт?", mn:"Тэр хэн бэ?"},
      {en:"When is the class?", pron:"вэн из зэ клас?", mn:"Хичээл хэзээ вэ?"},
      {en:"How are you?", pron:"хау а ю?", mn:"Юу байна?"}
    ],
    exercises:[
      {q:"Нэр асуувал:", parts:["", " is your name?"], opts:["What","Where"], a:0, fix:"Нэр → What is your name?"},
      {q:"Газар асуувал:", parts:["", " do you live?"], opts:["Who","Where"], a:1, fix:"Газар → Where do you live?"},
      {q:"Хүн асуувал:", parts:["", " is that man?"], opts:["Who","What"], a:0, fix:"Хүн → Who is that man?"},
      {q:"«яагаад»:", parts:["", " are you sad?"], opts:["Why","When"], a:0, fix:"Яагаад → Why are you sad?"}
    ],
    speak:{ scene:'Танилцах ярилцлага', turns:[
      {ruby:"Where are you from?", pron:"вэр а ю фром?", mn:"Та хаанахын хүн бэ?",
        choices:[{t:"I'm from Mongolia.",best:true,mn:"Би Монголоос."},{t:"Mongolia here.",best:false,fix:"Бүтэн: I'm from Mongolia."}]},
      {ruby:"What do you do?", pron:"вот ду ю ду?", mn:"Та юу хийдэг вэ?",
        choices:[{t:"I'm a student.",best:true,mn:"Би оюутан."},{t:"Student.",best:false,fix:"«I'm a» нэмээрэй: I'm a student."}]},
      {ruby:"Great to meet you!", pron:"грэйт ту мийт ю!", mn:"Танилцахад таатай байна!",
        choices:[{t:"You too!",best:true,mn:"Би ч бас!"},{t:"Ok.",best:false,fix:"Найрсаг: You too!"}]}
    ]}
  },
  {
    id:'waswere', title:'Өнгөрсөн цаг: was / were', level:'Анхан 10',
    blurb:"I was / they were — өнгөрсөн байх",
    rule:{
      h:"Өнгөрсөн цагийн байх: was / were",
      html:`"Байсан" гэдгийг хэлэхэд:
        <div style="margin:12px 0"><span class="tag">I / he / she / it → was</span><span class="tag">you / we / they → were</span></div>
        <b>I was</b> at home (Би гэртээ байсан), <b>They were</b> happy (Тэд баяртай байсан).
        <p style="margin-top:12px">Үгүйсгэл: <b>wasn't</b> / <b>weren't</b>. Асуулт: <b>Where were you?</b></p>`
    },
    phrases:[
      {en:"I was at home.", pron:"ай воз эт хоум.", mn:"Би гэртээ байсан."},
      {en:"She was happy.", pron:"ши воз хэпи.", mn:"Тэр баяртай байсан."},
      {en:"They were at school.", pron:"зэй вөр эт скүл.", mn:"Тэд сургууль дээр байсан."},
      {en:"Where were you?", pron:"вэр вөр ю?", mn:"Чи хаана байсан бэ?"},
      {en:"I was born in 1998.", pron:"ай воз борн ин найнтийн найнти-эйт.", mn:"Би 1998 онд төрсөн."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " tired."], opts:["was","were"], a:0, fix:"«I» → was. I was tired."},
      {q:"Зөв сонго:", parts:["They ", " at the party."], opts:["was","were"], a:1, fix:"«they» → were. They were at the party."},
      {q:"Зөв сонго:", parts:["She ", " at work."], opts:["was","were"], a:0, fix:"«she» → was. She was at work."},
      {q:"Зөв сонго:", parts:["Where ", " you?"], opts:["was","were"], a:1, fix:"«you» → were. Where were you?"}
    ],
    speak:{ scene:'Өчигдөр тухай', turns:[
      {ruby:"Where were you yesterday?", pron:"вэр вөр ю естэрдэй?", mn:"Чи өчигдөр хаана байсан бэ?",
        choices:[{t:"I was at home.",best:true,mn:"Би гэртээ байсан."},{t:"Home.",best:false,fix:"Бүтэн: I was at home."}]},
      {ruby:"Were you busy?", pron:"вөр ю бизи?", mn:"Чи завгүй байсан уу?",
        choices:[{t:"Yes, I was very busy.",best:true,mn:"Тийм, их завгүй байсан."},{t:"Busy yes.",best:false,fix:"Бүтэн: Yes, I was very busy."}]},
      {ruby:"I see. Take a rest!", pron:"ай сий. тэйк э рэст!", mn:"Ойлголоо. Амраарай!",
        choices:[{t:"Thanks, I will!",best:true,mn:"Баярлалаа, тэгье!"},{t:"Ok.",best:false,fix:"Илүү: Thanks, I will!"}]}
    ]}
  },
  {
    id:'pastverbs', title:'Өнгөрсөн үйлдэл: went, did', level:'Анхан 11',
    blurb:"watched / went / Did you...? / didn't",
    rule:{
      h:"Өнгөрсөн цагийн үйл үг",
      html:`Өнгөрсөн үйлдлийг хэлэхэд тогтмол үйл үгэнд <b>-ed</b> нэмнэ:
        <div style="margin:12px 0"><span class="tag">work → worked</span><span class="tag">play → played</span></div>
        Тогтмол бус нь өөрчлөгддөг: <b>go → went</b>, <b>have → had</b>, <b>see → saw</b>, <b>do → did</b>.
        <p style="margin-top:12px">Асуулт: <b>Did you...?</b> Үгүйсгэл: <b>didn't</b> + энгийн үйл үг (I didn't go).</p>`
    },
    phrases:[
      {en:"I watched a film.", pron:"ай вотчт э филм.", mn:"Би кино үзсэн."},
      {en:"We went to the park.", pron:"ви вэнт ту зэ парк.", mn:"Бид цэцэрлэгт хүрээлэн явсан."},
      {en:"Did you eat?", pron:"дид ю ийт?", mn:"Чи идсэн үү?"},
      {en:"I didn't sleep well.", pron:"ай диднт слийп вэл.", mn:"Би сайн унтаагүй."},
      {en:"She saw a friend.", pron:"ши со э фрэнд.", mn:"Тэр найзтайгаа уулзсан."}
    ],
    exercises:[
      {q:"Өнгөрсөн болго:", parts:["I ", " TV last night."], opts:["watch","watched"], a:1, fix:"Тогтмол → -ed. I watched TV."},
      {q:"Зөв сонго:", parts:["We ", " to Rome."], opts:["go","went"], a:1, fix:"go-ийн өнгөрсөн → went."},
      {q:"Асуулт:", parts:["", " you eat?"], opts:["Did","Do"], a:0, fix:"Өнгөрсөн асуулт → Did you eat?"},
      {q:"Үгүйсгэл:", parts:["I ", " go out."], opts:["didn't","don't"], a:0, fix:"Өнгөрсөн үгүйсгэл → didn't."}
    ],
    speak:{ scene:'Амралтын өдөр', turns:[
      {ruby:"What did you do yesterday?", pron:"вот дид ю ду естэрдэй?", mn:"Чи өчигдөр юу хийсэн бэ?",
        choices:[{t:"I went to the park.",best:true,mn:"Би цэцэрлэгт хүрээлэн явсан."},{t:"Park go.",best:false,fix:"Бүтэн: I went to the park."}]},
      {ruby:"Nice! Did you have fun?", pron:"найс! дид ю хэв фан?", mn:"Гоё! Хөгжилтэй байсан уу?",
        choices:[{t:"Yes, it was great!",best:true,mn:"Тийм, гайхалтай байсан!"},{t:"Fun yes.",best:false,fix:"Бүтэн: Yes, it was great!"}]},
      {ruby:"I'm glad!", pron:"айм глэд!", mn:"Баярлалаа сонсоод!",
        choices:[{t:"Thanks for asking!",best:true,mn:"Асуусанд баярлалаа!"},{t:"Ok.",best:false,fix:"Найрсаг: Thanks for asking!"}]}
    ]}
  },
  {
    id:'wouldlike', title:'Эелдэг хүсэлт (I would like)', level:'Анхан 12',
    blurb:"I'd like... / some & any / дэлгүүр",
    rule:{
      h:"I'd like... ба some / any",
      html:`Эелдэгээр авмаар байгаагаа хэлэхэд <b>I'd like</b> (= I would like):
        <div style="margin:12px 0"><span class="tag">I'd like a coffee, please</span><span class="tag">some = баталгаа</span><span class="tag">any = асуулт / үгүйсгэл</span></div>
        <b>I'd like some water</b> (жаахан ус), <b>Do you have any milk?</b> (сүү байна уу?).
        <p style="margin-top:12px">Үнэ асуухад: <b>How much is it?</b></p>`
    },
    phrases:[
      {en:"I'd like a coffee, please.", pron:"айд лайк э кофи, плийз.", mn:"Би кофе авмаар байна."},
      {en:"I'd like some water.", pron:"айд лайк сам вотэр.", mn:"Би жаахан ус авмаар байна."},
      {en:"Do you have any milk?", pron:"ду ю хэв эни милк?", mn:"Танайд сүү байна уу?"},
      {en:"How much is it?", pron:"хау мач из ит?", mn:"Хэдэн төгрөг вэ?"},
      {en:"Here you are.", pron:"хийр ю а.", mn:"Энэ байна (өгөхөд)."}
    ],
    exercises:[
      {q:"Эелдэгээр захиал:", parts:[""], opts:["I'd like a tea, please","Give tea"], a:0, fix:"Эелдэг → I'd like a tea, please."},
      {q:"Баталгаанд:", parts:["I'd like ", " bread."], opts:["some","any"], a:0, fix:"Баталгаа → some. I'd like some bread."},
      {q:"Асуултад:", parts:["Do you have ", " eggs?"], opts:["some","any"], a:1, fix:"Асуулт → any. Do you have any eggs?"},
      {q:"Үнэ асуух:", parts:[""], opts:["How much is it?","How many you?"], a:0, fix:"Үнэ → How much is it?"}
    ],
    speak:{ scene:'Ресторанд', turns:[
      {ruby:"Good morning! What would you like?", pron:"гүд морнинг! вот вүд ю лайк?", mn:"Өглөөний мэнд! Юу авах вэ?",
        choices:[{t:"I'd like a coffee, please.",best:true,mn:"Кофе авмаар байна."},{t:"Coffee.",best:false,fix:"Эелдэг: I'd like a coffee, please."}]},
      {ruby:"Sure! Anything else?", pron:"шүр! эни синг элс?", mn:"Мэдээж! Өөр юм авах уу?",
        choices:[{t:"Some water, please.",best:true,mn:"Жаахан ус, гуйя."},{t:"Water.",best:false,fix:"Эелдэг: Some water, please."}]},
      {ruby:"That's three dollars.", pron:"зэтс срий доларз.", mn:"Гурван доллар болно.",
        choices:[{t:"Here you are. Thank you!",best:true,mn:"Энэ байна. Баярлалаа!"},{t:"Money here.",best:false,fix:"Байгалиар: Here you are. Thank you!"}]}
    ]}
  },
  {
    id:'continuous', title:'Present Continuous: одоо', level:'Анхан 13',
    blurb:"I'm working / What are you doing?",
    rule:{
      h:"Яг одоо болж буй үйлдэл",
      html:`Яг одоо болж байгаа зүйлийг хэлэхэд <b>am / is / are + үйл үг + ing</b>:
        <div style="margin:12px 0"><span class="tag">I'm working</span><span class="tag">She's reading</span><span class="tag">They're playing</span></div>
        <b>What are you doing?</b> (Чи юу хийж байна вэ?) — <b>I'm learning English</b> (Би англи сурч байна).
        <p style="margin-top:12px">Ялгаа: <b>I work</b> (өдөр бүр) ⟷ <b>I'm working</b> (яг одоо).</p>`
    },
    phrases:[
      {en:"I'm reading a book.", pron:"айм ридинг э бүк.", mn:"Би ном уншиж байна."},
      {en:"She's cooking dinner.", pron:"шиз кукинг диннэр.", mn:"Тэр оройн хоол хийж байна."},
      {en:"They're playing football.", pron:"зэйр плэйинг футбол.", mn:"Тэд хөл бөмбөг тоглож байна."},
      {en:"What are you doing?", pron:"вот а ю дуинг?", mn:"Чи юу хийж байна вэ?"},
      {en:"I'm learning English.", pron:"айм лөрнинг Инглиш.", mn:"Би англи сурч байна."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " working."], opts:["am","is"], a:0, fix:"«I» → am + ing. I'm working."},
      {q:"Зөв сонго:", parts:["She ", " reading."], opts:["is","are"], a:0, fix:"«she» → is. She is reading."},
      {q:"Одоо болж буй:", parts:["What are you ", "?"], opts:["do","doing"], a:1, fix:"Одоо → -ing. What are you doing?"},
      {q:"«Яг одоо би идэж байна»:", parts:[""], opts:["I'm eating","I eat every day"], a:0, fix:"Яг одоо → I'm eating."}
    ],
    speak:{ scene:'Утсаар ярих', turns:[
      {ruby:"Hi! What are you doing?", pron:"хай! вот а ю дуинг?", mn:"Сайн уу! Юу хийж байна?",
        choices:[{t:"I'm studying English.",best:true,mn:"Би англи сурч байна."},{t:"Study English.",best:false,fix:"Бүтэн: I'm studying English."}]},
      {ruby:"Cool! Are you enjoying it?", pron:"күл! а ю энджойинг ит?", mn:"Гоё! Таашааж байна уу?",
        choices:[{t:"Yes, I'm loving it!",best:true,mn:"Тийм, их дуртай байна!"},{t:"Yes love.",best:false,fix:"Бүтэн: Yes, I'm loving it!"}]},
      {ruby:"Keep going!", pron:"кийп гоуинг!", mn:"Үргэлжлүүл!",
        choices:[{t:"I will, thanks!",best:true,mn:"Тэгье, баярлалаа!"},{t:"Ok.",best:false,fix:"Илүү: I will, thanks!"}]}
    ]}
  },
  {
    id:'future', title:'Ирээдүй: going to', level:'Анхан 14',
    blurb:"I'm going to... — төлөвлөгөө",
    rule:{
      h:"Ирээдүйн төлөвлөгөө: going to",
      html:`Ирээдүйд хийхээр төлөвлөж буй зүйлийг <b>am / is / are + going to + үйл үг</b>-ээр хэлнэ:
        <div style="margin:12px 0"><span class="tag">I'm going to travel</span><span class="tag">She's going to study</span></div>
        <b>What are you going to do?</b> (Чи юу хийх гэж байна вэ?) — <b>I'm going to learn English!</b>
        <p style="margin-top:12px">«going to»-гийн ард үргэлж <u>энгийн</u> үйл үг ордог.</p>`
    },
    phrases:[
      {en:"I'm going to travel.", pron:"айм гоуинг ту трэвл.", mn:"Би аялах гэж байна."},
      {en:"She's going to study.", pron:"шиз гоуинг ту стади.", mn:"Тэр суралцах гэж байна."},
      {en:"We're going to eat.", pron:"вийр гоуинг ту ийт.", mn:"Бид идэх гэж байна."},
      {en:"What are you going to do?", pron:"вот а ю гоуинг ту ду?", mn:"Чи юу хийх гэж байна вэ?"},
      {en:"I'm going to learn English!", pron:"айм гоуинг ту лөрн Инглиш!", mn:"Би англи сурах гэж байна!"}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I'm going ", " travel."], opts:["to","for"], a:0, fix:"going to → I'm going to travel."},
      {q:"Зөв сонго:", parts:["She ", " going to study."], opts:["is","are"], a:0, fix:"«she» → is. She is going to study."},
      {q:"«going to»-гийн ард:", parts:["What are you going to ", "?"], opts:["do","doing"], a:0, fix:"going to + энгийн үйл үг → do."},
      {q:"Төлөвлөгөө:", parts:[""], opts:["I'm going to learn","I learn yesterday"], a:0, fix:"Ирээдүй → I'm going to learn."}
    ],
    speak:{ scene:'Төлөвлөгөө', turns:[
      {ruby:"What are you going to do this weekend?", pron:"вот а ю гоуинг ту ду зис викэнд?", mn:"Энэ амралтаар юу хийх гэж байна?",
        choices:[{t:"I'm going to visit my family.",best:true,mn:"Би гэр бүлээ эргэх гэж байна."},{t:"Family visit.",best:false,fix:"Бүтэн: I'm going to visit my family."}]},
      {ruby:"Lovely! And after that?", pron:"лавли! энд афтэр зэт?", mn:"Гоё! Дараа нь?",
        choices:[{t:"I'm going to study English.",best:true,mn:"Би англи хичээллэх гэж байна."},{t:"Study.",best:false,fix:"Бүтэн: I'm going to study English."}]},
      {ruby:"You're doing amazing. Keep it up!", pron:"юр дуинг эмэйзинг. кийп ит ап!", mn:"Чи гайхалтай байна. Ингээрэй!",
        choices:[{t:"Thank you! I can do it.",best:true,mn:"Баярлалаа! Би чадна."},{t:"Ok bye.",best:false,fix:"Урам зоригтой: Thank you! I can do it!"}]}
    ]}
  }
],
  intermediate: [
  {
    id:'compare', title:'Харьцуулалт (comparatives)', level:'Дунд 1',
    blurb:"bigger than / more ... than",
    rule:{
      h:"Хоёр зүйлийг харьцуулах",
      html:`Хоёр зүйлийг харьцуулахад:
        <div style="margin:12px 0"><span class="tag">богино үг + -er + than</span><span class="tag">урт үг: more + than</span></div>
        <b>big → bigger than</b> (илүү том), <b>expensive → more expensive than</b> (илүү үнэтэй).
        <p style="margin-top:12px">Дүрмээс гажсан: <b>good → better</b>, <b>bad → worse</b>. Харьцуулахдаа үргэлж <b>than</b> ордог.</p>`
    },
    phrases:[
      {en:"My car is bigger than yours.", pron:"май кар из биггэр зэн ёрз.", mn:"Миний машин чинийхээс том."},
      {en:"This book is more interesting.", pron:"зис бүк из мор интрэстинг.", mn:"Энэ ном илүү сонирхолтой."},
      {en:"She is taller than me.", pron:"ши из толэр зэн ми.", mn:"Тэр надаас өндөр."},
      {en:"Today is hotter than yesterday.", pron:"тудэй из хоттэр зэн естэрдэй.", mn:"Өнөөдөр өчигдрөөс халуун."},
      {en:"Your idea is better than mine.", pron:"ёр айдиа из бэттэр зэн майн.", mn:"Чиний санаа минийхээс дээр."}
    ],
    exercises:[
      {q:"«big» харьцуул:", parts:["This house is ", " than that one."], opts:["bigger","biggest"], a:0, fix:"Харьцуулалт → -er than. bigger than."},
      {q:"«expensive» харьцуул:", parts:["A car is ", " than a bike."], opts:["more expensive","expensiver"], a:0, fix:"Урт үг → more expensive than."},
      {q:"«good» харьцуул:", parts:["Tea is ", " than coffee."], opts:["gooder","better"], a:1, fix:"good → better."},
      {q:"Зөв үг:", parts:["She is smarter ", " me."], opts:["than","then"], a:0, fix:"Харьцуулалт → than."}
    ],
    speak:{ scene:'Дэлгүүрт сонгох', turns:[
      {ruby:"This phone or that one?", pron:"зис фоун о зэт ван?", mn:"Энэ утас уу, тэр уу?",
        choices:[{t:"This one is better.",best:true,mn:"Энэ нь дээр."},{t:"This good.",best:false,fix:"Бүтэн: This one is better."}]},
      {ruby:"Why do you think so?", pron:"вай ду ю синк соу?", mn:"Яагаад тэгж бодов?",
        choices:[{t:"It's cheaper and faster.",best:true,mn:"Хямд, хурдан."},{t:"Cheap fast.",best:false,fix:"Бүтэн: It's cheaper and faster."}]},
      {ruby:"Good choice!", pron:"гүд чойс!", mn:"Зөв сонголт!",
        choices:[{t:"Thanks for your help!",best:true,mn:"Тусалсанд баярлалаа!"},{t:"Ok.",best:false,fix:"Найрсаг: Thanks for your help!"}]}
    ]}
  },
  {
    id:'superlative', title:'Хамгийн (superlatives)', level:'Дунд 2',
    blurb:"the biggest / the most ...",
    rule:{
      h:"«Хамгийн» гэдгийг заах",
      html:`Гурав ба түүнээс дээшийн дундаас "хамгийн"-ийг заахад:
        <div style="margin:12px 0"><span class="tag">the + богино үг + -est</span><span class="tag">the most + урт үг</span></div>
        <b>the biggest</b> (хамгийн том), <b>the most expensive</b> (хамгийн үнэтэй). Дандаа <b>the</b> ордог.
        <p style="margin-top:12px">Гажсан: <b>good → the best</b>, <b>bad → the worst</b>.</p>`
    },
    phrases:[
      {en:"This is the biggest city.", pron:"зис из зэ биггэст сити.", mn:"Энэ бол хамгийн том хот."},
      {en:"She is the best student.", pron:"ши из зэ бэст стюдэнт.", mn:"Тэр хамгийн шилдэг сурагч."},
      {en:"It's the most beautiful place.", pron:"итс зэ моуст бьютифул плэйс.", mn:"Энэ хамгийн үзэсгэлэнтэй газар."},
      {en:"Today is the hottest day.", pron:"тудэй из зэ хоттэст дэй.", mn:"Өнөөдөр хамгийн халуун өдөр."},
      {en:"This is the worst film.", pron:"зис из зэ вөрст филм.", mn:"Энэ хамгийн муу кино."}
    ],
    exercises:[
      {q:"«big»:", parts:["Everest is ", " mountain."], opts:["the biggest","bigger"], a:0, fix:"Хамгийн → the biggest."},
      {q:"«expensive»:", parts:["This is ", " hotel."], opts:["the most expensive","expensivest"], a:0, fix:"Урт үг → the most expensive."},
      {q:"«good»:", parts:["She is ", " in class."], opts:["the best","the goodest"], a:0, fix:"good → the best."},
      {q:"Зөв үг:", parts:["It's ", " tallest building."], opts:["the","a"], a:0, fix:"Superlative-д the ордог."}
    ],
    speak:{ scene:'Аялал ярих', turns:[
      {ruby:"What's the best place in Mongolia?", pron:"вотс зэ бэст плэйс ин Монголиа?", mn:"Монголын хамгийн гоё газар хаана вэ?",
        choices:[{t:"Lake Khuvsgul is the most beautiful.",best:true,mn:"Хөвсгөл нуур хамгийн үзэсгэлэнтэй."},{t:"Khuvsgul good.",best:false,fix:"Бүтэн: Lake Khuvsgul is the most beautiful."}]},
      {ruby:"I'd love to go! Is it far?", pron:"айд лав ту гоу! из ит фар?", mn:"Очмоор юм! Хол уу?",
        choices:[{t:"Yes, but it's worth it.",best:true,mn:"Тийм, гэхдээ үнэ цэнэтэй."},{t:"Far yes.",best:false,fix:"Бүтэн: Yes, but it's worth it."}]},
      {ruby:"Sounds amazing!", pron:"саундз эмэйзинг!", mn:"Гайхалтай сонсогдож байна!",
        choices:[{t:"You should visit!",best:true,mn:"Заавал очоорой!"},{t:"Ok.",best:false,fix:"Урамтай: You should visit!"}]}
    ]}
  },
  {
    id:'pastcont', title:'Past Continuous', level:'Дунд 3',
    blurb:"I was doing ... when ...",
    rule:{
      h:"Өнгөрсөн үед болж байсан үйлдэл",
      html:`Өнгөрсөн тодорхой мөчид үргэлжилж байсан үйлдлийг <b>was / were + үйл үг + ing</b>-ээр хэлнэ:
        <div style="margin:12px 0"><span class="tag">I / he / she → was + ing</span><span class="tag">you / we / they → were + ing</span></div>
        Ихэвчлэн <b>when</b> (үед)-тэй: <b>I was sleeping when you called</b> (Чамайг залгахад би унтаж байсан).`
    },
    phrases:[
      {en:"I was watching TV.", pron:"ай воз вотчинг тиви.", mn:"Би зурагт үзэж байсан."},
      {en:"She was cooking at 8pm.", pron:"ши воз кукинг эт эйт пиэм.", mn:"Тэр 8 цагт хоол хийж байсан."},
      {en:"They were sleeping.", pron:"зэй вөр слийпинг.", mn:"Тэд унтаж байсан."},
      {en:"What were you doing?", pron:"вот вөр ю дуинг?", mn:"Чи юу хийж байсан бэ?"},
      {en:"I was reading when you called.", pron:"ай воз ридинг вэн ю колд.", mn:"Чамайг залгахад би ном уншиж байсан."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " working at 9."], opts:["was","were"], a:0, fix:"«I» → was + ing."},
      {q:"Зөв сонго:", parts:["They ", " playing."], opts:["was","were"], a:1, fix:"«they» → were."},
      {q:"Асуулт:", parts:["What ", " you doing?"], opts:["was","were"], a:1, fix:"«you» → were."},
      {q:"Зөв хэлбэр:", parts:["I was ", " when he arrived."], opts:["sleeping","slept"], a:0, fix:"Past Continuous → -ing (sleeping)."}
    ],
    speak:{ scene:'Өчигдрийн орой', turns:[
      {ruby:"What were you doing last night?", pron:"вот вөр ю дуинг ласт найт?", mn:"Өчигдөр орой юу хийж байсан бэ?",
        choices:[{t:"I was studying English.",best:true,mn:"Би англи сурч байсан."},{t:"Study English.",best:false,fix:"Бүтэн: I was studying English."}]},
      {ruby:"Nice! Were you alone?", pron:"найс! вөр ю элоун?", mn:"Гоё! Ганцаараа байсан уу?",
        choices:[{t:"Yes, I was at home.",best:true,mn:"Тийм, гэртээ байсан."},{t:"Home.",best:false,fix:"Бүтэн: Yes, I was at home."}]},
      {ruby:"Great habit!", pron:"грэйт хэбит!", mn:"Сайхан зуршил!",
        choices:[{t:"Thank you!",best:true,mn:"Баярлалаа!"},{t:"Ok.",best:false,fix:"Талархвал: Thank you!"}]}
    ]}
  },
  {
    id:'presperfect', title:'Present Perfect: ever / never', level:'Дунд 4',
    blurb:"Have you ever...? / I've never...",
    rule:{
      h:"Амьдралын туршлага",
      html:`Хэзээ нэгэн цагт хийсэн эсэхийг хэлэхэд <b>have / has + verb3</b> (гурав дахь хэлбэр):
        <div style="margin:12px 0"><span class="tag">Have you ever ...?</span><span class="tag">I have never ...</span></div>
        <b>go → been/gone</b>, <b>see → seen</b>, <b>eat → eaten</b>, <b>do → done</b>.
        <p style="margin-top:12px"><b>Have you ever been to London?</b> — <b>I have never eaten sushi.</b></p>`
    },
    phrases:[
      {en:"Have you ever been to London?", pron:"хэв ю эвэр бин ту Ландэн?", mn:"Чи Лондонд байж үзсэн үү?"},
      {en:"I have never eaten sushi.", pron:"ай хэв нэвэр итн сүши.", mn:"Би хэзээ ч суши идэж үзээгүй."},
      {en:"She has seen this film.", pron:"ши хэз сийн зис филм.", mn:"Тэр энэ киног үзсэн."},
      {en:"I've been to Japan.", pron:"айв бин ту Жапан.", mn:"Би Японд байж үзсэн."},
      {en:"Have you finished?", pron:"хэв ю финишт?", mn:"Чи дуусгасан уу?"}
    ],
    exercises:[
      {q:"Туршлага асуух:", parts:["", " you ever been to Paris?"], opts:["Have","Did"], a:0, fix:"Туршлага → Have you ever...?"},
      {q:"«хэзээ ч үгүй»:", parts:["I have ", " eaten sushi."], opts:["never","not"], a:0, fix:"хэзээ ч → never."},
      {q:"Гурав дахь хэлбэр:", parts:["She has ", " this film."], opts:["saw","seen"], a:1, fix:"Present Perfect → seen."},
      {q:"Зөв хэлбэр:", parts:["I've ", " to Japan."], opts:["been","go"], a:0, fix:"been = байж үзсэн."}
    ],
    speak:{ scene:'Туршлага асуух', turns:[
      {ruby:"Have you ever traveled abroad?", pron:"хэв ю эвэр трэвлд эброуд?", mn:"Чи гадаад явж үзсэн үү?",
        choices:[{t:"Yes, I've been to China.",best:true,mn:"Тийм, Хятадад байж үзсэн."},{t:"China yes.",best:false,fix:"Бүтэн: Yes, I've been to China."}]},
      {ruby:"Cool! Have you tried the food there?", pron:"күл! хэв ю трайд зэ фүд зэр?", mn:"Гоё! Тэндхийн хоолыг амталсан уу?",
        choices:[{t:"Yes, I've tried a lot!",best:true,mn:"Тийм, их зүйл амталсан!"},{t:"Food yes.",best:false,fix:"Бүтэн: Yes, I've tried a lot!"}]},
      {ruby:"You're a real traveler!", pron:"юр э риал трэвлэр!", mn:"Чи жинхэнэ аялагч юм!",
        choices:[{t:"Ha, thank you!",best:true,mn:"Ха, баярлалаа!"},{t:"Ok.",best:false,fix:"Найрсаг: Ha, thank you!"}]}
    ]}
  },
  {
    id:'will', title:'Ирээдүй: will', level:'Дунд 5',
    blurb:"I'll help / It will rain / won't",
    rule:{
      h:"Таамаг ба тухайн мөчийн шийдвэр",
      html:`Ирээдүйн таамаг эсвэл яг тэр мөчид гаргасан шийдвэрийг <b>will + энгийн үйл үг</b>-ээр хэлнэ:
        <div style="margin:12px 0"><span class="tag">I will help = I'll help</span><span class="tag">Үгүйсгэл: won't</span><span class="tag">Асуулт: Will you...?</span></div>
        <b>I think it will rain</b> (Бороо орно гэж бодож байна), <b>I'll help you</b> (Туслая).`
    },
    phrases:[
      {en:"I think it will rain.", pron:"ай синк ит вил рэйн.", mn:"Бороо орно гэж бодож байна."},
      {en:"I'll help you.", pron:"айл хэлп ю.", mn:"Би чамд туслая."},
      {en:"She will be happy.", pron:"ши вил би хэпи.", mn:"Тэр баяртай байх болно."},
      {en:"Will you come?", pron:"вил ю кам?", mn:"Чи ирэх үү?"},
      {en:"I won't forget.", pron:"ай воунт форгет.", mn:"Би мартахгүй."}
    ],
    exercises:[
      {q:"Таамаг:", parts:["I think it ", " rain."], opts:["will","did"], a:0, fix:"Таамаг → will."},
      {q:"«will»-ий ард:", parts:["I will ", " you."], opts:["help","helps"], a:0, fix:"will + энгийн үйл үг → help."},
      {q:"Үгүйсгэл:", parts:["I ", " be late."], opts:["won't","don't"], a:0, fix:"Ирээдүйн үгүйсгэл → won't."},
      {q:"Асуулт:", parts:["", " you help me?"], opts:["Will","Do"], a:0, fix:"Ирээдүйн асуулт → Will you...?"}
    ],
    speak:{ scene:'Тусламж санал болгох', turns:[
      {ruby:"This bag is so heavy!", pron:"зис бэг из соу хэви!", mn:"Энэ цүнх их хүнд юм!",
        choices:[{t:"I'll help you.",best:true,mn:"Би туслая."},{t:"Help.",best:false,fix:"Бүтэн: I'll help you."}]},
      {ruby:"Oh, thank you so much!", pron:"оу, сэнк ю соу мач!", mn:"Өө, маш их баярлалаа!",
        choices:[{t:"No problem!",best:true,mn:"Зүгээр!"},{t:"Ok.",best:false,fix:"Найрсаг: No problem!"}]},
      {ruby:"You're very kind.", pron:"юр вэри кайнд.", mn:"Чи их сайхан сэтгэлтэй.",
        choices:[{t:"Happy to help!",best:true,mn:"Тусалснадаа баяртай!"},{t:"Ok.",best:false,fix:"Найрсаг: Happy to help!"}]}
    ]}
  },
  {
    id:'haveto', title:'have to / must — үүрэг', level:'Дунд 6',
    blurb:"I have to work / You must ...",
    rule:{
      h:"Заавал хийх ёстой зүйл",
      html:`Заавал хийх ёстойг хэлэхэд <b>have to / has to</b> эсвэл <b>must</b>:
        <div style="margin:12px 0"><span class="tag">I / you / we / they → have to</span><span class="tag">he / she / it → has to</span><span class="tag">must + энгийн үйл үг</span></div>
        <b>I have to work</b>, <b>She has to study</b>, <b>You must be careful</b>.
        <p style="margin-top:12px">Анхаар: <b>don't have to</b> = шаардлагагүй (сонголттой). <b>mustn't</b> = хатуу хориотой.</p>`
    },
    phrases:[
      {en:"I have to work today.", pron:"ай хэв ту вөрк тудэй.", mn:"Би өнөөдөр ажиллах ёстой."},
      {en:"She has to study.", pron:"ши хэз ту стади.", mn:"Тэр хичээлээ хийх ёстой."},
      {en:"You must be careful.", pron:"ю маст би кэрфул.", mn:"Чи болгоомжтой байх ёстой."},
      {en:"We have to go now.", pron:"ви хэв ту гоу нау.", mn:"Бид одоо явах ёстой."},
      {en:"You don't have to come.", pron:"ю доунт хэв ту кам.", mn:"Чи ирэх шаардлагагүй."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["I ", " to work."], opts:["have","must to"], a:0, fix:"have to → I have to work."},
      {q:"Зөв сонго:", parts:["She ", " to study."], opts:["have","has"], a:1, fix:"«she» → has to."},
      {q:"«must»-ий ард:", parts:["You ", " be careful."], opts:["must","must to"], a:0, fix:"must + энгийн үйл үг (to байхгүй)."},
      {q:"«шаардлагагүй»:", parts:["You ", " come."], opts:["don't have to","must"], a:0, fix:"Шаардлагагүй → don't have to."}
    ],
    speak:{ scene:'Ажлын өдөр', turns:[
      {ruby:"Are you free tonight?", pron:"а ю фрий тунайт?", mn:"Өнөө орой чөлөөтэй юу?",
        choices:[{t:"No, I have to work.",best:true,mn:"Үгүй, ажиллах ёстой."},{t:"Work.",best:false,fix:"Бүтэн: No, I have to work."}]},
      {ruby:"Oh, that's a pity. Tomorrow?", pron:"оу, зэтс э пити. тумороу?", mn:"Өө, харамсалтай. Маргааш?",
        choices:[{t:"Yes, I'm free tomorrow!",best:true,mn:"Тийм, маргааш чөлөөтэй!"},{t:"Tomorrow ok.",best:false,fix:"Бүтэн: Yes, I'm free tomorrow!"}]},
      {ruby:"Perfect, see you then!", pron:"пөрфэкт, сий ю зэн!", mn:"Гоё, тэгвэл уулзъя!",
        choices:[{t:"See you! Take care.",best:true,mn:"Уулзъя! Сайхан амраарай."},{t:"Ok bye.",best:false,fix:"Найрсаг: See you! Take care."}]}
    ]}
  },
  {
    id:'should', title:'should — зөвлөгөө', level:'Дунд 7',
    blurb:"You should rest / shouldn't / Should I...?",
    rule:{
      h:"Зөвлөгөө өгөх",
      html:`Зөвлөгөө өгөхөд <b>should + энгийн үйл үг</b>:
        <div style="margin:12px 0"><span class="tag">You should ...</span><span class="tag">Үгүйсгэл: shouldn't</span><span class="tag">Асуулт: Should I...?</span></div>
        <b>You should rest</b> (амрах хэрэгтэй), <b>You shouldn't smoke</b> (тамхи татах ёсгүй), <b>Should I call her?</b> (залгах уу?).`
    },
    phrases:[
      {en:"You should rest.", pron:"ю шүд рэст.", mn:"Чи амрах хэрэгтэй."},
      {en:"You shouldn't smoke.", pron:"ю шүднт смоук.", mn:"Чи тамхи татах ёсгүй."},
      {en:"Should I call her?", pron:"шүд ай кол хёр?", mn:"Би түүн рүү залгах уу?"},
      {en:"You should see a doctor.", pron:"ю шүд сий э доктор.", mn:"Чи эмчид үзүүлэх хэрэгтэй."},
      {en:"We should go now.", pron:"ви шүд гоу нау.", mn:"Бид одоо явах хэрэгтэй."}
    ],
    exercises:[
      {q:"«should»-ий ард:", parts:["You ", " drink water."], opts:["should","should to"], a:0, fix:"should + энгийн үйл үг (to байхгүй)."},
      {q:"«ёсгүй»:", parts:["You ", " eat junk food."], opts:["should","shouldn't"], a:1, fix:"Болохгүй → shouldn't."},
      {q:"Асуулт:", parts:["", " I help?"], opts:["Should","Do"], a:0, fix:"Зөвлөгөөний асуулт → Should I...?"},
      {q:"Зөвлөгөө:", parts:[""], opts:["You should rest","You rest must"], a:0, fix:"Зөв: You should rest."}
    ],
    speak:{ scene:'Найздаа зөвлөх', turns:[
      {ruby:"I'm so tired these days.", pron:"айм соу тайрд зийз дэйз.", mn:"Сүүлийн үед их ядарч байна.",
        choices:[{t:"You should rest more.",best:true,mn:"Чи илүү амрах хэрэгтэй."},{t:"Rest.",best:false,fix:"Бүтэн: You should rest more."}]},
      {ruby:"You're right. Any other tips?", pron:"юр райт. эни азэр типс?", mn:"Зөв. Өөр зөвлөгөө?",
        choices:[{t:"You should drink water.",best:true,mn:"Чи ус уух хэрэгтэй."},{t:"Water good.",best:false,fix:"Бүтэн: You should drink water."}]},
      {ruby:"Thanks, that helps!", pron:"сэнкс, зэт хэлпс!", mn:"Баярлалаа, тус боллоо!",
        choices:[{t:"Take care of yourself!",best:true,mn:"Өөрийгөө сайн бодоорой!"},{t:"Ok.",best:false,fix:"Найрсаг: Take care of yourself!"}]}
    ]}
  },
  {
    id:'goingwill', title:'going to vs will', level:'Дунд 8',
    blurb:"төлөвлөсөн ⟷ тэр мөчид шийдсэн",
    rule:{
      h:"Хоёр ирээдүйн ялгаа",
      html:`<b>going to</b> = урьдчилан төлөвлөсөн зүйл (аль хэдийн шийдсэн):
        <div style="margin:12px 0"><span class="tag">I'm going to travel (төлөвлөсөн)</span></div>
        <b>will</b> = яг тэр мөчид гаргасан шийдвэр эсвэл таамаг:
        <div style="margin:12px 0"><span class="tag">I'll get it (дөнгөж шийдэв)</span><span class="tag">I think they'll win (таамаг)</span></div>`
    },
    phrases:[
      {en:"I'm going to visit Japan next year.", pron:"айм гоуинг ту визит Жапан некст йир.", mn:"Ирэх жил Японд очих гэж байна (төлөвлөсөн)."},
      {en:"The phone is ringing — I'll get it.", pron:"зэ фоун из рингинг — айл гет ит.", mn:"Утас дуугарч байна — би авъя (яг одоо шийдэв)."},
      {en:"She's going to study medicine.", pron:"шиз гоуинг ту стади мэдсин.", mn:"Тэр анагаах судлах гэж байна."},
      {en:"I think they'll win.", pron:"ай синк зэйл вин.", mn:"Тэд ялна гэж бодож байна (таамаг)."},
      {en:"It's going to rain.", pron:"итс гоуинг ту рэйн.", mn:"Бороо орох нь (шинж харагдаж байна)."}
    ],
    exercises:[
      {q:"Аль хэдийн төлөвлөсөн:", parts:["I ", " visit my family this weekend."], opts:["'m going to","will"], a:0, fix:"Төлөвлөсөн → going to."},
      {q:"Яг тэр мөчид шийдэв:", parts:["The phone's ringing. I ", " answer it."], opts:["will","'m going to"], a:0, fix:"Тэр мөчид → will."},
      {q:"Таамаг:", parts:["I think it ", " be sunny."], opts:["will","going"], a:0, fix:"Таамаг → will."},
      {q:"«going» + :", parts:["I'm going ", " study."], opts:["to","for"], a:0, fix:"going to."}
    ],
    speak:{ scene:'Төлөвлөгөө', turns:[
      {ruby:"What are your plans this summer?", pron:"вот а ёр планз зис саммэр?", mn:"Энэ зун ямар төлөвлөгөөтэй вэ?",
        choices:[{t:"I'm going to travel to Japan.",best:true,mn:"Японд аялах гэж байна."},{t:"Travel Japan.",best:false,fix:"Бүтэн: I'm going to travel to Japan."}]},
      {ruby:"Oh, the kettle is boiling!", pron:"оу, зэ кэтл из бойлинг!", mn:"Өө, данх буцалж байна!",
        choices:[{t:"I'll turn it off.",best:true,mn:"Би унтраая."},{t:"Off.",best:false,fix:"Тэр мөчид → I'll turn it off."}]},
      {ruby:"Thanks! You're quick.", pron:"сэнкс! юр квик.", mn:"Баярлалаа! Чи шаламгай юм.",
        choices:[{t:"No problem!",best:true,mn:"Зүгээр!"},{t:"Ok.",best:false,fix:"Найрсаг: No problem!"}]}
    ]}
  },
  {
    id:'conditional', title:'Нөхцөл (First conditional)', level:'Дунд 9',
    blurb:"If it rains, I'll stay home",
    rule:{
      h:"Ирээдүйн боломжит нөхцөл",
      html:`Ирээдүйд болж болзошгүй нөхцөлийг:
        <div style="margin:12px 0"><span class="tag">If + present simple , ... will + үйл үг</span></div>
        <b>If it rains, I'll stay home</b> (Хэрэв бороо орвол гэртээ байна).
        <p style="margin-top:12px">⚠️ <b>If</b>-тэй хэсэгт <u>will БИШ</u>, энгийн present: <b>If it rains</b> (❌ if it will rain).</p>`
    },
    phrases:[
      {en:"If it rains, I'll stay home.", pron:"иф ит рэйнз, айл стэй хоум.", mn:"Хэрэв бороо орвол би гэртээ байна."},
      {en:"If you study, you'll pass.", pron:"иф ю стади, юл пас.", mn:"Хэрэв хичээллэвэл тэнцэнэ."},
      {en:"I'll call you if I'm late.", pron:"айл кол ю иф айм лэйт.", mn:"Хэрэв хоцорвол чам руу залгана."},
      {en:"If she comes, we'll start.", pron:"иф ши камз, вил старт.", mn:"Хэрэв тэр ирвэл бид эхэлнэ."},
      {en:"What will you do if it snows?", pron:"вот вил ю ду иф ит сноуз?", mn:"Хэрэв цас орвол чи яах вэ?"}
    ],
    exercises:[
      {q:"If-тэй хэсэг:", parts:["If it ", ", I'll stay home."], opts:["rains","will rain"], a:0, fix:"If-тэй хэсэгт present → rains."},
      {q:"Гол хэсэг:", parts:["If you study, you ", " pass."], opts:["will","are"], a:0, fix:"Гол хэсэгт will."},
      {q:"If-тэй хэсэг:", parts:["I'll help you if you ", " me."], opts:["ask","will ask"], a:0, fix:"If-тэй present → ask."},
      {q:"Зөв бүтэц:", parts:[""], opts:["If it rains, I'll stay","If it will rain, I stay"], a:0, fix:"If + present, will → If it rains, I'll stay."}
    ],
    speak:{ scene:'Пикник төлөвлөх', turns:[
      {ruby:"Will you come to the picnic?", pron:"вил ю кам ту зэ пикник?", mn:"Пикникт ирэх үү?",
        choices:[{t:"If it's sunny, I'll come.",best:true,mn:"Хэрэв нартай бол ирнэ."},{t:"Sunny come.",best:false,fix:"Бүтэн: If it's sunny, I'll come."}]},
      {ruby:"And if it rains?", pron:"энд иф ит рэйнз?", mn:"Хэрэв бороо орвол?",
        choices:[{t:"If it rains, I'll stay home.",best:true,mn:"Бороо орвол гэртээ байна."},{t:"Rain home.",best:false,fix:"Бүтэн: If it rains, I'll stay home."}]},
      {ruby:"Fair enough! Let's hope for sun.", pron:"фэр инаф! летс хоуп фор сан.", mn:"Зүгээр! Нартай байхыг хүсье.",
        choices:[{t:"Fingers crossed!",best:true,mn:"Азтай байхыг хүсье!"},{t:"Ok.",best:false,fix:"Хэлц: Fingers crossed!"}]}
    ]}
  },
  {
    id:'usedto', title:'used to — өмнө нь', level:'Дунд 10',
    blurb:"I used to live in ...",
    rule:{
      h:"Өмнө нь тогтмол байсан зүйл",
      html:`Өмнө нь тогтмол хийдэг байсан ч одоо болиулсан зүйлийг <b>used to + энгийн үйл үг</b>:
        <div style="margin:12px 0"><span class="tag">I used to smoke (өмнө нь татдаг байсан)</span></div>
        Үгүйсгэл: <b>didn't use to</b>, Асуулт: <b>Did you use to...?</b> (эдгээрт «use», d-гүй).`
    },
    phrases:[
      {en:"I used to live in London.", pron:"ай юст ту лив ин Ландэн.", mn:"Би өмнө нь Лондонд амьдардаг байсан."},
      {en:"She used to play piano.", pron:"ши юст ту плэй пиано.", mn:"Тэр өмнө нь төгөлдөр хуур тоглодог байсан."},
      {en:"We used to be neighbors.", pron:"ви юст ту би нэйборз.", mn:"Бид өмнө нь хөрш байсан."},
      {en:"I didn't use to like coffee.", pron:"ай диднт юс ту лайк кофи.", mn:"Би өмнө нь кофенд дургүй байсан."},
      {en:"Did you use to smoke?", pron:"дид ю юс ту смоук?", mn:"Чи өмнө нь тамхи татдаг байсан уу?"}
    ],
    exercises:[
      {q:"«өмнө нь»:", parts:["I ", " to live here."], opts:["used","use"], a:0, fix:"Өмнө нь → used to."},
      {q:"«used to»-ий ард:", parts:["She used to ", " piano."], opts:["play","played"], a:0, fix:"used to + энгийн үйл үг → play."},
      {q:"Үгүйсгэл:", parts:["I ", " use to like it."], opts:["didn't","don't"], a:0, fix:"didn't use to."},
      {q:"Асуулт:", parts:["", " you use to smoke?"], opts:["Did","Do"], a:0, fix:"Did you use to...?"}
    ],
    speak:{ scene:'Хүүхэд нас', turns:[
      {ruby:"What did you use to do as a kid?", pron:"вот дид ю юс ту ду эз э кид?", mn:"Хүүхэд байхдаа юу хийдэг байсан бэ?",
        choices:[{t:"I used to play outside a lot.",best:true,mn:"Би гадаа их тоглодог байсан."},{t:"Play outside.",best:false,fix:"Бүтэн: I used to play outside a lot."}]},
      {ruby:"Me too! Did you use to have pets?", pron:"ми ту! дид ю юс ту хэв пэтс?", mn:"Би ч бас! Тэжээвэр амьтантай байсан уу?",
        choices:[{t:"Yes, I used to have a dog.",best:true,mn:"Тийм, нохойтой байсан."},{t:"Dog yes.",best:false,fix:"Бүтэн: Yes, I used to have a dog."}]},
      {ruby:"Sweet memories!", pron:"свийт мемориз!", mn:"Сайхан дурсамжууд!",
        choices:[{t:"Yes, those were the days.",best:true,mn:"Тийм, гоё үе байсан."},{t:"Ok.",best:false,fix:"Хэлц: Those were the days."}]}
    ]}
  },
  {
    id:'countable', title:'Тоолох: much / many / a lot of', level:'Дунд 11',
    blurb:"тоолж болох ⟷ болохгүй нэр үг",
    rule:{
      h:"Тоолж болох ба болохгүй нэр",
      html:`Тоолж болох нэр (books, apples) ба тоолж болохгүй нэр (water, money, time) өөр үг авна:
        <div style="margin:12px 0"><span class="tag">тоолж болно → many</span><span class="tag">тоолж болохгүй → much</span><span class="tag">аль алинд → a lot of</span></div>
        <b>How many books?</b> ⟷ <b>How much water?</b> Аль алинд: <b>a lot of</b>.`
    },
    phrases:[
      {en:"How many books do you have?", pron:"хау мэни букс ду ю хэв?", mn:"Чи хэдэн номтой вэ?"},
      {en:"How much water is there?", pron:"хау мач вотэр из зэр?", mn:"Хэдий их ус байна вэ?"},
      {en:"I don't have much time.", pron:"ай доунт хэв мач тайм.", mn:"Надад их цаг алга."},
      {en:"There are a lot of people.", pron:"зэр а э лот оф пийпл.", mn:"Олон хүн байна."},
      {en:"I have too much work.", pron:"ай хэв тү мач вөрк.", mn:"Надад хэтэрхий их ажил байна."}
    ],
    exercises:[
      {q:"«books» (тоолж болно):", parts:["How ", " books?"], opts:["many","much"], a:0, fix:"Тоолж болно → many."},
      {q:"«water» (тоолж болохгүй):", parts:["How ", " water?"], opts:["many","much"], a:1, fix:"Тоолж болохгүй → much."},
      {q:"«money»:", parts:["I don't have ", " money."], opts:["many","much"], a:1, fix:"money тоолж болохгүй → much."},
      {q:"Аль алинд:", parts:["There are ", " cars."], opts:["a lot of","much"], a:0, fix:"Аль алинд → a lot of."}
    ],
    speak:{ scene:'Ажлын ачаалал', turns:[
      {ruby:"Do you have a lot of work today?", pron:"ду ю хэв э лот оф вөрк тудэй?", mn:"Өнөөдөр их ажилтай юу?",
        choices:[{t:"Yes, I have too much work.",best:true,mn:"Тийм, хэтэрхий их ажил байна."},{t:"Work much.",best:false,fix:"Бүтэн: Yes, I have too much work."}]},
      {ruby:"How many meetings do you have?", pron:"хау мэни мийтингз ду ю хэв?", mn:"Хэдэн уулзалттай вэ?",
        choices:[{t:"I have three meetings.",best:true,mn:"Гурван уулзалттай."},{t:"Three.",best:false,fix:"Бүтэн: I have three meetings."}]},
      {ruby:"Wow, busy day! Good luck.", pron:"вау, бизи дэй! гүд лак.", mn:"Өө, завгүй өдөр! Амжилт.",
        choices:[{t:"Thanks, I'll need it!",best:true,mn:"Баярлалаа, хэрэг болно!"},{t:"Ok.",best:false,fix:"Найрсаг: Thanks, I'll need it!"}]}
    ]}
  },
  {
    id:'perfectvspast', title:'Present Perfect vs Past Simple', level:'Дунд 12',
    blurb:"туршлага ⟷ тодорхой өнгөрсөн цаг",
    rule:{
      h:"Хоёр өнгөрсөн цагийн ялгаа",
      html:`<b>Past Simple</b> = тодорхой өнгөрсөн цаг (yesterday, in 2010, ago):
        <div style="margin:12px 0"><span class="tag">I went to Paris last year</span></div>
        <b>Present Perfect</b> = хэзээ нь тодорхойгүй туршлага / одоог хүртэл нөлөөтэй:
        <div style="margin:12px 0"><span class="tag">I have been to Paris</span></div>
        Цагийн түлхүүр: <b>yesterday, ago</b> → Past; <b>ever, never, just, yet, already</b> → Present Perfect.`
    },
    phrases:[
      {en:"I went to Paris last year.", pron:"ай вэнт ту Пэрис ласт йир.", mn:"Би өнгөрсөн жил Парист явсан."},
      {en:"I have been to Paris.", pron:"ай хэв бин ту Пэрис.", mn:"Би Парист байж үзсэн (хэзээ нь чухал биш)."},
      {en:"She finished her work two hours ago.", pron:"ши финишт хёр вөрк ту аурз эгоу.", mn:"Тэр хоёр цагийн өмнө ажлаа дуусгасан."},
      {en:"Have you finished yet?", pron:"хэв ю финишт ет?", mn:"Чи дуусгачихсан уу?"},
      {en:"I saw him yesterday.", pron:"ай со хим естэрдэй.", mn:"Би түүнийг өчигдөр харсан."}
    ],
    exercises:[
      {q:"«yesterday» → :", parts:["I ", " him yesterday."], opts:["saw","have seen"], a:0, fix:"Тодорхой цаг (yesterday) → Past Simple: saw."},
      {q:"Туршлага → :", parts:["I ", " to Japan."], opts:["have been","went"], a:0, fix:"Хэзээ нь тодорхойгүй → Present Perfect: have been."},
      {q:"«ago» → :", parts:["She ", " it an hour ago."], opts:["finished","has finished"], a:0, fix:"ago → Past Simple: finished."},
      {q:"Present Perfect түлхүүр:", parts:["Have you finished ", "?"], opts:["yet","yesterday"], a:0, fix:"Present Perfect → yet."}
    ],
    speak:{ scene:'Ажлын ярилцлага', turns:[
      {ruby:"Have you ever worked abroad?", pron:"хэв ю эвэр вөркт эброуд?", mn:"Чи гадаад ажиллаж үзсэн үү?",
        choices:[{t:"Yes, I've worked in Korea.",best:true,mn:"Тийм, Солонгост ажилласан."},{t:"Korea work.",best:false,fix:"Бүтэн: Yes, I've worked in Korea."}]},
      {ruby:"When was that?", pron:"вэн воз зэт?", mn:"Хэзээ байсан бэ?",
        choices:[{t:"I worked there in 2019.",best:true,mn:"2019 онд тэнд ажилласан."},{t:"2019.",best:false,fix:"Бүтэн: I worked there in 2019."}]},
      {ruby:"Great experience!", pron:"грэйт икспириэнс!", mn:"Гайхалтай туршлага!",
        choices:[{t:"Yes, I learned a lot!",best:true,mn:"Тийм, их зүйл сурсан!"},{t:"Ok.",best:false,fix:"Илүү: Yes, I learned a lot!"}]}
    ]}
  }
],
  advanced: [
  {
    id:'perfcont', title:"Present Perfect Continuous", level:"Гүнзгий 1",
    blurb:"I have been working for two hours",
    rule:{
      h:"have been + үйл үг + ing",
      html:`Одоог хүртэл үргэлжилж буй (эсвэл дөнгөж дуусаад нөлөө нь мэдрэгдэж буй) үйлдлийг, ялангуяа <b>хугацаа онцлоход</b>:
        <div style="margin:12px 0"><span class="tag">have / has been + ing</span><span class="tag">for + хугацааны урт</span><span class="tag">since + эхэлсэн цэг</span></div>
        <b>I have been studying for two hours</b> (Хоёр цаг хичээллэж байна), <b>She has been working since 2020</b>.`
    },
    phrases:[
      {en:"I've been studying for two hours.", pron:"айв бин стадиинг фор ту аурз.", mn:"Би хоёр цаг хичээллэж байна."},
      {en:"She's been working here since 2020.", pron:"шиз бин вөркинг хийр синс твэнти-твэнти.", mn:"Тэр 2020 оноос хойш энд ажиллаж байна."},
      {en:"It's been raining all day.", pron:"итс бин рэйнинг ол дэй.", mn:"Өдөржин бороо орж байна."},
      {en:"Have you been waiting long?", pron:"хэв ю бин вэйтинг лонг?", mn:"Чи удаан хүлээв үү?"},
      {en:"I'm tired because I've been running.", pron:"айм тайрд бикоз айв бин раннинг.", mn:"Гүйсэн болохоор ядарч байна."}
    ],
    exercises:[
      {q:"Зөв хэлбэр:", parts:["I've ", " studying for hours."], opts:["been","being"], a:0, fix:"have + been + ing → I've been studying."},
      {q:"Эхэлсэн цэг:", parts:["She's been here ", " 2020."], opts:["since","for"], a:0, fix:"Тодорхой цэг → since 2020."},
      {q:"Хугацааны урт:", parts:["I've worked ", " two hours."], opts:["for","since"], a:0, fix:"Урт → for two hours."},
      {q:"Зөв хэлбэр:", parts:["It has been ", "."], opts:["raining","rain"], a:0, fix:"been + ing → raining."}
    ],
    speak:{ scene:'Уулзалт', turns:[
      {ruby:"You look tired! What's up?", pron:"ю лүк тайрд! вотс ап?", mn:"Ядарсан харагдаж байна! Юу болов?",
        choices:[{t:"I've been working all day.",best:true,mn:"Өдөржин ажилласан."},{t:"Work all day.",best:false,fix:"Бүтэн: I've been working all day."}]},
      {ruby:"Oh no. How long have you been busy?", pron:"оу ноу. хау лонг хэв ю бин бизи?", mn:"Өө. Хэдэн цаг завгүй байна вэ?",
        choices:[{t:"Since early morning.",best:true,mn:"Өглөө эртнээс."},{t:"Morning.",best:false,fix:"Бүтэн: Since early morning."}]},
      {ruby:"You should take a break!", pron:"ю шүд тэйк э брэйк!", mn:"Чи амсхийх хэрэгтэй!",
        choices:[{t:"You're right, I will.",best:true,mn:"Зөв, тэгье."},{t:"Ok.",best:false,fix:"Илүү: You're right, I will."}]}
    ]}
  },
  {
    id:'pastperfect', title:"Past Perfect", level:"Гүнзгий 2",
    blurb:"had + verb3 — өнгөрсний өмнөх",
    rule:{
      h:"Өнгөрсний нэг үйлдлээс өмнөх",
      html:`Өнгөрсөн үеийн нэг үйлдлээс <b>өмнө</b> болсон үйлдлийг <b>had + verb3</b>-ээр хэлнэ:
        <div style="margin:12px 0"><span class="tag">had + гурав дахь хэлбэр</span></div>
        <b>When I arrived, the train had already left</b> (Намайг ирэхэд галт тэрэг аль хэдийн явчихсан байсан).`
    },
    phrases:[
      {en:"The train had already left.", pron:"зэ трэйн хэд олрэди лэфт.", mn:"Галт тэрэг аль хэдийн явчихсан байсан."},
      {en:"I had never seen snow before.", pron:"ай хэд нэвэр сийн сноу бифор.", mn:"Би өмнө нь цас хэзээ ч үзээгүй байсан."},
      {en:"She had finished before he came.", pron:"ши хэд финишт бифор хи кэйм.", mn:"Тэр ирэхээс өмнө дуусгачихсан байсан."},
      {en:"We had eaten when they arrived.", pron:"ви хэд итн вэн зэй эрайвд.", mn:"Тэднийг ирэхэд бид идчихсэн байсан."},
      {en:"After I had left, it rained.", pron:"афтэр ай хэд лэфт, ит рэйнд.", mn:"Намайг явсны дараа бороо орсон."}
    ],
    exercises:[
      {q:"Зөв сонго:", parts:["The train ", " already left."], opts:["had","has"], a:0, fix:"Өнгөрсний өмнөх → had + verb3."},
      {q:"«had»-ий ард:", parts:["I had ", " him before."], opts:["seen","saw"], a:0, fix:"had + verb3 → seen."},
      {q:"Дараалал:", parts:["When I arrived, she ", " gone."], opts:["had","has"], a:0, fix:"Эрт болсон → had gone."},
      {q:"Зөв хэлбэр:", parts:["They had ", " dinner."], opts:["eaten","ate"], a:0, fix:"had + verb3 → eaten."}
    ],
    speak:{ scene:'Хоцорсон тухай', turns:[
      {ruby:"Did you catch the train?", pron:"дид ю кэтч зэ трэйн?", mn:"Галт тэргэн дээр амжсан уу?",
        choices:[{t:"No, it had already left.",best:true,mn:"Үгүй, аль хэдийн явчихсан байсан."},{t:"No train gone.",best:false,fix:"Бүтэн: No, it had already left."}]},
      {ruby:"Oh no! What did you do?", pron:"оу ноу! вот дид ю ду?", mn:"Өө! Тэгээд яав?",
        choices:[{t:"I took a taxi instead.",best:true,mn:"Оронд нь такси барьсан."},{t:"Taxi.",best:false,fix:"Бүтэн: I took a taxi instead."}]},
      {ruby:"Good thinking!", pron:"гүд синкинг!", mn:"Ухаантай шийдвэр!",
        choices:[{t:"Thanks, it worked out.",best:true,mn:"Баярлалаа, болсон."},{t:"Ok.",best:false,fix:"Илүү: Thanks, it worked out."}]}
    ]}
  },
  {
    id:'passive', title:"Passive voice", level:"Гүнзгий 3",
    blurb:"be + verb3 — English is spoken here",
    rule:{
      h:"Үйлдлийг онцлох (идэвхгүй хэв)",
      html:`Хэн хийснээс илүү <b>юу болсныг</b> онцлоход <b>be + verb3</b>:
        <div style="margin:12px 0"><span class="tag">is / are + verb3 (одоо)</span><span class="tag">was / were + verb3 (өнгөрсөн)</span><span class="tag">by = хэн хийсэн</span></div>
        <b>English is spoken here</b> (Энд англиар ярьдаг), <b>The house was built in 1990</b>.`
    },
    phrases:[
      {en:"English is spoken here.", pron:"Инглиш из споукн хийр.", mn:"Энд англиар ярьдаг."},
      {en:"The house was built in 1990.", pron:"зэ хаус воз билт ин найнтийн найнти.", mn:"Байшинг 1990 онд барьсан."},
      {en:"This book was written by her.", pron:"зис бүк воз риттн бай хёр.", mn:"Энэ номыг тэр бичсэн."},
      {en:"The room is cleaned every day.", pron:"зэ рүм из клийнд эври дэй.", mn:"Өрөөг өдөр бүр цэвэрлэдэг."},
      {en:"My phone was stolen!", pron:"май фоун воз стоулн!", mn:"Миний утсыг хулгайлсан!"}
    ],
    exercises:[
      {q:"Одоо цагийн passive:", parts:["English ", " spoken here."], opts:["is","does"], a:0, fix:"be + verb3 → is spoken."},
      {q:"Өнгөрсөн passive:", parts:["The house ", " built in 1990."], opts:["was","did"], a:0, fix:"was + verb3 → was built."},
      {q:"Зөв хэлбэр:", parts:["It was ", " by her."], opts:["written","wrote"], a:0, fix:"passive → verb3 (written)."},
      {q:"Хэн хийсэн:", parts:["written ", " her."], opts:["by","from"], a:0, fix:"хийсэн этгээд → by."}
    ],
    speak:{ scene:'Аялал', turns:[
      {ruby:"Wow, what an old building!", pron:"вау, вот эн оулд билдинг!", mn:"Өө, ямар хуучин барилга вэ!",
        choices:[{t:"Yes, it was built in 1850.",best:true,mn:"Тийм, 1850 онд барьсан."},{t:"Old building.",best:false,fix:"Бүтэн: It was built in 1850."}]},
      {ruby:"Amazing! Is it still used?", pron:"эмэйзинг! из ит стил юзд?", mn:"Гайхалтай! Одоо ашиглагддаг уу?",
        choices:[{t:"Yes, it's used as a museum.",best:true,mn:"Тийм, музей болгон ашигладаг."},{t:"Museum.",best:false,fix:"Бүтэн: It's used as a museum."}]},
      {ruby:"Let's go inside!", pron:"летс гоу инсайд!", mn:"Дотогш нь оръё!",
        choices:[{t:"Great idea!",best:true,mn:"Гоё санаа!"},{t:"Ok.",best:false,fix:"Илүү: Great idea!"}]}
    ]}
  },
  {
    id:'reported', title:"Reported speech", level:"Гүнзгий 4",
    blurb:"He said he was tired — дамжуулах яриа",
    rule:{
      h:"Хэлснийг дамжуулах",
      html:`Хэн нэгний хэлснийг дамжуулахад цаг <b>нэг алхам ухарна</b>:
        <div style="margin:12px 0"><span class="tag">am/is → was</span><span class="tag">will → would</span><span class="tag">can → could</span></div>
        "I am tired" → <b>He said he was tired</b>. Хэнд гэвэл <b>told + хүн</b>: <b>She told me...</b>`
    },
    phrases:[
      {en:"He said he was tired.", pron:"хи сэд хи воз тайрд.", mn:"Тэр ядарсан гэж хэлсэн."},
      {en:"She said she would come.", pron:"ши сэд ши вүд кам.", mn:"Тэр ирнэ гэж хэлсэн."},
      {en:"They told me they were busy.", pron:"зэй толд ми зэй вөр бизи.", mn:"Тэд завгүй гэж надад хэлсэн."},
      {en:"He asked where I lived.", pron:"хи аскт вэр ай ливд.", mn:"Тэр намайг хаана амьдардгийг асуусан."},
      {en:"She said she could help.", pron:"ши сэд ши күд хэлп.", mn:"Тэр тусалж чадна гэж хэлсэн."}
    ],
    exercises:[
      {q:"am → :", parts:["He said he ", " tired."], opts:["was","is"], a:0, fix:"is → was."},
      {q:"will → :", parts:["She said she ", " come."], opts:["would","will"], a:0, fix:"will → would."},
      {q:"can → :", parts:["He said he ", " swim."], opts:["could","can"], a:0, fix:"can → could."},
      {q:"said / told:", parts:["She ", " me a story."], opts:["told","said"], a:0, fix:"хэнд гэвэл → told me."}
    ],
    speak:{ scene:'Мессеж дамжуулах', turns:[
      {ruby:"What did Bat say?", pron:"вот дид Бат сэй?", mn:"Бат юу гэсэн бэ?",
        choices:[{t:"He said he was busy today.",best:true,mn:"Тэр өнөөдөр завгүй гэсэн."},{t:"Busy he said.",best:false,fix:"Бүтэн: He said he was busy today."}]},
      {ruby:"OK. Did he say when he's free?", pron:"окэй. дид хи сэй вэн хиз фрий?", mn:"За. Хэзээ чөлөөтэйгээ хэлсэн үү?",
        choices:[{t:"He said he would call tomorrow.",best:true,mn:"Маргааш залгана гэсэн."},{t:"Tomorrow call.",best:false,fix:"Бүтэн: He said he would call tomorrow."}]},
      {ruby:"Great, thanks for telling me!", pron:"грэйт, сэнкс фор тэллинг ми!", mn:"Гоё, хэлсэнд баярлалаа!",
        choices:[{t:"No problem!",best:true,mn:"Зүгээр!"},{t:"Ok.",best:false,fix:"Найрсаг: No problem!"}]}
    ]}
  },
  {
    id:'cond2', title:"Second conditional", level:"Гүнзгий 5",
    blurb:"If I were rich, I would travel",
    rule:{
      h:"Одоогийн төсөөллийн нөхцөл",
      html:`Одоогийн <b>боломжгүй / төсөөллийн</b> нөхцөлийг:
        <div style="margin:12px 0"><span class="tag">If + past simple , ... would + үйл үг</span></div>
        <b>If I were rich, I would travel</b> (Хэрэв би баян бол аялах байсан).
        <p style="margin-top:12px">Анхаар: «I were» (was биш) — төсөөллийн үед were хэрэглэнэ.</p>`
    },
    phrases:[
      {en:"If I were rich, I would travel.", pron:"иф ай вөр рич, ай вүд трэвл.", mn:"Хэрэв би баян бол аялах байсан."},
      {en:"If I had time, I would help.", pron:"иф ай хэд тайм, ай вүд хэлп.", mn:"Хэрэв цаг байсан бол туслах байсан."},
      {en:"What would you do if you won?", pron:"вот вүд ю ду иф ю вон?", mn:"Хэрэв хожвол чи яах вэ?"},
      {en:"I would buy a house if I could.", pron:"ай вүд бай э хаус иф ай күд.", mn:"Боломжтой бол байшин авах байсан."},
      {en:"If she studied, she would pass.", pron:"иф ши стадид, ши вүд пас.", mn:"Хэрэв хичээллэвэл тэр тэнцэх байсан."}
    ],
    exercises:[
      {q:"If-тэй хэсэг:", parts:["If I ", " rich, I would travel."], opts:["were","am"], a:0, fix:"2-р нөхцөл → past (were)."},
      {q:"Гол хэсэг:", parts:["If I had time, I ", " help."], opts:["would","will"], a:0, fix:"would + үйл үг."},
      {q:"If-тэй хэсэг:", parts:["If she ", " harder, she would pass."], opts:["studied","studies"], a:0, fix:"past simple → studied."},
      {q:"Төсөөлөл:", parts:["If I ", " you..."], opts:["were","am"], a:0, fix:"If I were you (зөвлөгөө)."}
    ],
    speak:{ scene:'Мөрөөдөл', turns:[
      {ruby:"What would you do with a million dollars?", pron:"вот вүд ю ду виз э миллён доларз?", mn:"Сая доллартай бол яах вэ?",
        choices:[{t:"I would start a business.",best:true,mn:"Би бизнес эхлүүлэх байсан."},{t:"Business.",best:false,fix:"Бүтэн: I would start a business."}]},
      {ruby:"Nice! Where would you live?", pron:"найс! вэр вүд ю лив?", mn:"Гоё! Хаана амьдрах вэ?",
        choices:[{t:"If I could, I'd live by the sea.",best:true,mn:"Боломжтой бол далайн эрэг дээр."},{t:"Sea.",best:false,fix:"Бүтэн: If I could, I'd live by the sea."}]},
      {ruby:"Sounds like a dream!", pron:"саундз лайк э дрийм!", mn:"Мөрөөдөл шиг сонсогдож байна!",
        choices:[{t:"Maybe one day!",best:true,mn:"Магадгүй хэзээ нэгэн өдөр!"},{t:"Ok.",best:false,fix:"Илүү: Maybe one day!"}]}
    ]}
  },
  {
    id:'cond3', title:"Third conditional", level:"Гүнзгий 6",
    blurb:"If I had known, I would have come",
    rule:{
      h:"Өнгөрсний харамсал / төсөөлөл",
      html:`Өнгөрсөнд <b>болоогүй</b> зүйлийн тухай төсөөллийг:
        <div style="margin:12px 0"><span class="tag">If + past perfect , ... would have + verb3</span></div>
        <b>If I had studied, I would have passed</b> (Хэрэв хичээллэсэн бол тэнцэх байсан — гэвч тэнцээгүй).`
    },
    phrases:[
      {en:"If I had studied, I would have passed.", pron:"иф ай хэд стадид, ай вүд хэв паст.", mn:"Хэрэв хичээллэсэн бол тэнцэх байсан."},
      {en:"If she had known, she would have come.", pron:"иф ши хэд ноун, ши вүд хэв кам.", mn:"Хэрэв мэдсэн бол ирэх байсан."},
      {en:"I would have called if I'd had your number.", pron:"ай вүд хэв колд иф айд хэд ёр намбэр.", mn:"Дугаар чинь байсан бол залгах байсан."},
      {en:"We wouldn't have missed it if we'd left early.", pron:"ви вүднт хэв мист ит иф вид лэфт өрли.", mn:"Эрт гарсан бол хоцрохгүй байсан."},
      {en:"What would you have done?", pron:"вот вүд ю хэв дан?", mn:"Чи яах байсан бэ?"}
    ],
    exercises:[
      {q:"Гол хэсэг:", parts:["If I had studied, I ", " passed."], opts:["would have","would"], a:0, fix:"3-р нөхцөл → would have + verb3."},
      {q:"If-тэй хэсэг:", parts:["If she ", " known..."], opts:["had","has"], a:0, fix:"past perfect → had known."},
      {q:"would have + :", parts:["I would have ", " you."], opts:["called","call"], a:0, fix:"verb3 → called."},
      {q:"Харамсал:", parts:["If I ", " known earlier..."], opts:["had","have"], a:0, fix:"had known."}
    ],
    speak:{ scene:'Харамсал', turns:[
      {ruby:"You missed a great party last night!", pron:"ю мист э грэйт парти ласт найт!", mn:"Өчигдөр гоё үдэшлэг өнгөрөөсөн!",
        choices:[{t:"If I had known, I would have come.",best:true,mn:"Мэдсэн бол ирэх байсан."},{t:"I not know.",best:false,fix:"Бүтэн: If I had known, I would have come."}]},
      {ruby:"That's a shame. Next time I'll tell you!", pron:"зэтс э шэйм. некст тайм айл тэл ю!", mn:"Харамсалтай. Дараа хэлье!",
        choices:[{t:"Please do, thank you!",best:true,mn:"Заавал хэлээрэй, баярлалаа!"},{t:"Ok.",best:false,fix:"Илүү: Please do, thank you!"}]},
      {ruby:"Deal!", pron:"дийл!", mn:"Тохирлоо!",
        choices:[{t:"Looking forward to it!",best:true,mn:"Тэсэн ядан хүлээж байна!"},{t:"Ok.",best:false,fix:"Илүү: Looking forward to it!"}]}
    ]}
  },
  {
    id:'relative', title:"Relative clauses", level:"Гүнзгий 7",
    blurb:"the man who... / the book which...",
    rule:{
      h:"Нэр үгийг тодотгох (who/which/that)",
      html:`Нэр үгийг илүү тодорхой болгоход:
        <div style="margin:12px 0"><span class="tag">who = хүн</span><span class="tag">which = юм</span><span class="tag">that = аль аль нь</span><span class="tag">where = газар</span></div>
        <b>The man who called</b> (Залгасан хүн), <b>the book which I read</b> (Миний уншсан ном).`
    },
    phrases:[
      {en:"The man who called is my uncle.", pron:"зэ мэн хү колд из май анкл.", mn:"Залгасан хүн бол миний авга."},
      {en:"This is the book which I love.", pron:"зис из зэ бүк вич ай лав.", mn:"Энэ бол миний хайртай ном."},
      {en:"The house that we bought is old.", pron:"зэ хаус зэт ви бот из оулд.", mn:"Бидний авсан байшин хуучин."},
      {en:"She's the girl who helped me.", pron:"шиз зэ гөрл хү хэлпт ми.", mn:"Тэр бол надад тусалсан охин."},
      {en:"That's the city where I was born.", pron:"зэтс зэ сити вэр ай воз борн.", mn:"Тэр бол миний төрсөн хот."}
    ],
    exercises:[
      {q:"Хүн:", parts:["The man ", " called."], opts:["who","which"], a:0, fix:"Хүн → who."},
      {q:"Юм:", parts:["The book ", " I read."], opts:["who","which"], a:1, fix:"Юм → which."},
      {q:"Газар:", parts:["The city ", " I live."], opts:["where","who"], a:0, fix:"Газар → where."},
      {q:"Аль аль нь:", parts:["The car ", " she has."], opts:["that","who"], a:0, fix:"that (хүн/юм аль алинд)."}
    ],
    speak:{ scene:'Танилцуулах', turns:[
      {ruby:"Who is that woman?", pron:"хү из зэт вумэн?", mn:"Тэр эмэгтэй хэн бэ?",
        choices:[{t:"She's the friend who helped me.",best:true,mn:"Тэр надад тусалсан найз."},{t:"Friend help.",best:false,fix:"Бүтэн: She's the friend who helped me."}]},
      {ruby:"Oh, nice! And that building?", pron:"оу, найс! энд зэт билдинг?", mn:"Өө, гоё! Тэр барилга уу?",
        choices:[{t:"That's the school where I studied.",best:true,mn:"Тэр миний сурсан сургууль."},{t:"School.",best:false,fix:"Бүтэн: That's the school where I studied."}]},
      {ruby:"What a nice place!", pron:"вот э найс плэйс!", mn:"Ямар гоё газар вэ!",
        choices:[{t:"Yes, I have good memories.",best:true,mn:"Тийм, сайхан дурсамжтай."},{t:"Ok.",best:false,fix:"Илүү: Yes, I have good memories."}]}
    ]}
  },
  {
    id:'gerinf', title:"Gerund ба Infinitive", level:"Гүнзгий 8",
    blurb:"enjoy reading / want to go",
    rule:{
      h:"-ing уу, to + үйл үг үү?",
      html:`Зарим үйл үгийн ард <b>-ing</b> (enjoy, like, finish, mind):
        <div style="margin:12px 0"><span class="tag">enjoy reading</span><span class="tag">finish working</span></div>
        Заримын ард <b>to + үйл үг</b> (want, need, decide, hope):
        <div style="margin:12px 0"><span class="tag">want to go</span><span class="tag">decide to stay</span></div>
        Preposition-ий ард үргэлж <b>-ing</b>: <b>good at singing</b>, <b>thank you for helping</b>.`
    },
    phrases:[
      {en:"I enjoy reading books.", pron:"ай энджой ридинг букс.", mn:"Би ном унших дуртай."},
      {en:"I want to learn English.", pron:"ай вонт ту лөрн Инглиш.", mn:"Би англи сурмаар байна."},
      {en:"She's good at singing.", pron:"шиз гүд эт сингинг.", mn:"Тэр дуулах авьяастай."},
      {en:"I decided to travel.", pron:"ай дисайдид ту трэвл.", mn:"Би аялахаар шийдсэн."},
      {en:"Thank you for helping.", pron:"сэнк ю фор хэлпинг.", mn:"Тусалсанд баярлалаа."}
    ],
    exercises:[
      {q:"enjoy + :", parts:["I enjoy ", "."], opts:["reading","to read"], a:0, fix:"enjoy + -ing → reading."},
      {q:"want + :", parts:["I want ", " English."], opts:["to learn","learning"], a:0, fix:"want + to + үйл үг."},
      {q:"Preposition + :", parts:["She's good at ", "."], opts:["singing","sing"], a:0, fix:"at + -ing → singing."},
      {q:"decide + :", parts:["I decided ", " go."], opts:["to","for"], a:0, fix:"decide + to."}
    ],
    speak:{ scene:'Хоббио ярих', turns:[
      {ruby:"What do you like doing in your free time?", pron:"вот ду ю лайк дуинг ин ёр фрий тайм?", mn:"Чөлөөт цагаараа юу хийх дуртай вэ?",
        choices:[{t:"I enjoy playing guitar.",best:true,mn:"Би гитар тоглох дуртай."},{t:"Guitar play.",best:false,fix:"Бүтэн: I enjoy playing guitar."}]},
      {ruby:"Cool! Do you want to learn anything new?", pron:"күл! ду ю вонт ту лөрн эни синг ню?", mn:"Гоё! Шинэ юм сурмаар байна уу?",
        choices:[{t:"Yes, I want to learn piano.",best:true,mn:"Тийм, төгөлдөр хуур сурмаар байна."},{t:"Piano.",best:false,fix:"Бүтэн: I want to learn piano."}]},
      {ruby:"You should go for it!", pron:"ю шүд гоу фор ит!", mn:"Заавал оролдоорой!",
        choices:[{t:"I will, thanks!",best:true,mn:"Тэгье, баярлалаа!"},{t:"Ok.",best:false,fix:"Илүү: I will, thanks!"}]}
    ]}
  },
  {
    id:'deduction', title:"Магадлал: must / might / can not", level:"Гүнзгий 9",
    blurb:"He must be tired / It can not be true",
    rule:{
      h:"Таамаглалыг илэрхийлэх",
      html:`Ямар нэг зүйлийг таамаглахад:
        <div style="margin:12px 0"><span class="tag">must be = заавал мөн (итгэлтэй)</span><span class="tag">might/could be = байж магадгүй</span><span class="tag">can't be = байж таарахгүй</span></div>
        <b>He must be tired</b> (Тэр заавал ядарсан байх), <b>It can't be true</b> (Үнэн байж таарахгүй).`
    },
    phrases:[
      {en:"He must be tired.", pron:"хи маст би тайрд.", mn:"Тэр заавал ядарсан байх."},
      {en:"It can't be true!", pron:"ит кант би трү!", mn:"Энэ үнэн байж таарахгүй!"},
      {en:"She might be at home.", pron:"ши майт би эт хоум.", mn:"Тэр гэртээ байж магадгүй."},
      {en:"They must be rich.", pron:"зэй маст би рич.", mn:"Тэд заавал баян байх."},
      {en:"It could be a mistake.", pron:"ит күд би э мистэйк.", mn:"Энэ алдаа байж магадгүй."}
    ],
    exercises:[
      {q:"Итгэлтэй таамаг:", parts:["He ", " be tired."], opts:["must","can't"], a:0, fix:"Заавал мөн → must be."},
      {q:"Боломжгүй:", parts:["It ", " be true!"], opts:["can't","must"], a:0, fix:"Байж таарахгүй → can't be."},
      {q:"Магадлал:", parts:["She ", " be at home."], opts:["might","must"], a:0, fix:"Магадгүй → might be."},
      {q:"«must» + :", parts:["They must ", " rich."], opts:["be","are"], a:0, fix:"must + be."}
    ],
    speak:{ scene:'Таамаглах', turns:[
      {ruby:"Whose phone is this on the table?", pron:"хүз фоун из зис он зэ тэйбл?", mn:"Ширээн дээрх утас хэнийх вэ?",
        choices:[{t:"It might be Bat's.",best:true,mn:"Батынх байж магадгүй."},{t:"Bat phone.",best:false,fix:"Бүтэн: It might be Bat's."}]},
      {ruby:"But Bat isn't here today.", pron:"бат Бат изнт хийр тудэй.", mn:"Гэхдээ Бат өнөөдөр энд алга.",
        choices:[{t:"Then it can't be his.",best:true,mn:"Тэгвэл түүнийх байж таарахгүй."},{t:"Not his.",best:false,fix:"Бүтэн: Then it can't be his."}]},
      {ruby:"Let's ask around.", pron:"летс аск эраунд.", mn:"Асууж үзье.",
        choices:[{t:"Good idea!",best:true,mn:"Гоё санаа!"},{t:"Ok.",best:false,fix:"Илүү: Good idea!"}]}
    ]}
  },
  {
    id:'wish', title:"I wish — хүсэл, харамсал", level:"Гүнзгий 10",
    blurb:"I wish I could... / I wish I had...",
    rule:{
      h:"Бодит бус хүсэл",
      html:`Одоогийн бодит бус хүслийг <b>I wish + past simple</b>-ээр:
        <div style="margin:12px 0"><span class="tag">I wish I were taller (одоо)</span></div>
        Өнгөрсний харамслыг <b>I wish + past perfect</b>-ээр:
        <div style="margin:12px 0"><span class="tag">I wish I had studied (өнгөрсөн)</span></div>`
    },
    phrases:[
      {en:"I wish I were taller.", pron:"ай виш ай вөр толэр.", mn:"Өндөр байсан бол гэж хүсэх юмсан."},
      {en:"I wish I could fly.", pron:"ай виш ай күд флай.", mn:"Нисч чаддаг бол гэж хүсэх юмсан."},
      {en:"I wish I had studied more.", pron:"ай виш ай хэд стадид мор.", mn:"Илүү хичээллэсэн бол гэж харамсаж байна."},
      {en:"She wishes she had a car.", pron:"ши вишиз ши хэд э кар.", mn:"Тэр машинтай бол гэж хүсдэг."},
      {en:"I wish you were here.", pron:"ай виш ю вөр хийр.", mn:"Чи энд байсан бол гэж хүсэх юмсан."}
    ],
    exercises:[
      {q:"Одоогийн хүсэл:", parts:["I wish I ", " taller."], opts:["were","am"], a:0, fix:"I wish + past → were."},
      {q:"«could»:", parts:["I wish I ", " fly."], opts:["could","can"], a:0, fix:"I wish I could."},
      {q:"Өнгөрсний харамсал:", parts:["I wish I ", " studied."], opts:["had","have"], a:0, fix:"I wish + past perfect → had."},
      {q:"Хүсэл:", parts:["I wish you ", " here."], opts:["were","are"], a:0, fix:"I wish you were here."}
    ],
    speak:{ scene:'Хүсэл ярих', turns:[
      {ruby:"Are you happy with your English?", pron:"а ю хэпи виз ёр Инглиш?", mn:"Англи хэлэндээ сэтгэл хангалуун уу?",
        choices:[{t:"Almost! I wish I could speak faster.",best:true,mn:"Бараг! Хурдан ярьдаг бол гэж хүсдэг."},{t:"Speak fast.",best:false,fix:"Бүтэн: I wish I could speak faster."}]},
      {ruby:"You're doing really well, though!", pron:"юр дуинг риали вэл, зоу!", mn:"Гэхдээ чи үнэхээр сайн байна шүү!",
        choices:[{t:"Thanks! I keep practicing.",best:true,mn:"Баярлалаа! Байнга дасгал хийдэг."},{t:"Ok.",best:false,fix:"Илүү: Thanks! I keep practicing."}]},
      {ruby:"That's the secret. Keep going!", pron:"зэтс зэ сикрэт. кийп гоуинг!", mn:"Тэр л нууц нь. Үргэлжлүүл!",
        choices:[{t:"I will! Thank you, Ruby.",best:true,mn:"Тэгье! Баярлалаа, Ruby."},{t:"Ok bye.",best:false,fix:"Дулаахан: I will! Thank you, Ruby."}]}
    ]}
  },
  {
    id:'futureperf', title:"Future Continuous & Perfect", level:"Гүнзгий 11",
    blurb:"will be doing / will have done",
    rule:{
      h:"Ирээдүйн үргэлжлэх ба төгссөн",
      html:`Ирээдүйн тодорхой мөчид болж <b>байх</b> үйлдэл — <b>will be + ing</b>:
        <div style="margin:12px 0"><span class="tag">This time tomorrow I'll be flying</span></div>
        Ирээдүйн тодорхой цэгээс <b>өмнө дуусах</b> үйлдэл — <b>will have + verb3</b>:
        <div style="margin:12px 0"><span class="tag">By 2030 I'll have graduated</span></div>`
    },
    phrases:[
      {en:"This time tomorrow I'll be flying.", pron:"зис тайм тумороу айл би флайинг.", mn:"Маргааш яг энэ цагт би нисэж явна."},
      {en:"Don't call at 8, I'll be sleeping.", pron:"доунт кол эт эйт, айл би слийпинг.", mn:"8 цагт бүү залга, би унтаж байна."},
      {en:"By next year I'll have graduated.", pron:"бай некст йир айл хэв грэжуэйтид.", mn:"Ирэх он гэхэд би төгсчихсөн байна."},
      {en:"She'll have finished by 5pm.", pron:"шил хэв финишт бай файв пиэм.", mn:"Тэр 5 цаг гэхэд дуусгачихсан байна."},
      {en:"Will you be working tomorrow?", pron:"вил ю би вөркинг тумороу?", mn:"Маргааш чи ажиллаж байх уу?"}
    ],
    exercises:[
      {q:"Тодорхой мөчид болж байх:", parts:["This time tomorrow I ", " flying."], opts:["will be","will have"], a:0, fix:"will be + ing."},
      {q:"Өмнө нь дуусах:", parts:["By 2030 I ", " finished."], opts:["will have","will be"], a:0, fix:"will have + verb3."},
      {q:"will be + :", parts:["I'll be ", " at 9."], opts:["working","work"], a:0, fix:"will be + ing → working."},
      {q:"will have + :", parts:["She'll have ", " by then."], opts:["gone","go"], a:0, fix:"will have + verb3 → gone."}
    ],
    speak:{ scene:'Ирээдүйн төлөвлөгөө', turns:[
      {ruby:"What will you be doing this time next week?", pron:"вот вил ю би дуинг зис тайм некст вийк?", mn:"Ирэх долоо хоногийн энэ цагт юу хийж байх вэ?",
        choices:[{t:"I'll be traveling in Japan.",best:true,mn:"Би Японд аялж явна."},{t:"Japan travel.",best:false,fix:"Бүтэн: I'll be traveling in Japan."}]},
      {ruby:"Nice! Will you have finished your project by then?", pron:"найс! вил ю хэв финишт ёр прожэкт бай зэн?", mn:"Гоё! Төслөө дуусгачихсан байх уу?",
        choices:[{t:"Yes, I'll have finished it.",best:true,mn:"Тийм, дуусгачихсан байна."},{t:"Finish yes.",best:false,fix:"Бүтэн: Yes, I'll have finished it."}]},
      {ruby:"Perfect timing!", pron:"пөрфэкт таймин!", mn:"Яг таарлаа!",
        choices:[{t:"I know, I can't wait!",best:true,mn:"Тийм ээ, тэсэн ядан хүлээж байна!"},{t:"Ok.",best:false,fix:"Илүү: I can't wait!"}]}
    ]}
  },
  {
    id:'modalperf', title:"Modal perfect: must/should have", level:"Гүнзгий 12",
    blurb:"must have / should have / could have",
    rule:{
      h:"Өнгөрсний таамаг ба харамсал",
      html:`Өнгөрсний тухай дүгнэлт:
        <div style="margin:12px 0"><span class="tag">must have + verb3 = заавал болсон байх</span><span class="tag">should have + verb3 = хийх ёстой байсан (хийгээгүй)</span><span class="tag">could have + verb3 = хийж болох байсан</span><span class="tag">can't have + verb3 = болсон байж таарахгүй</span></div>
        <b>You should have called me</b> (Чи над руу залгах ёстой байсан).`
    },
    phrases:[
      {en:"He must have forgotten.", pron:"хи маст хэв фэготн.", mn:"Тэр мартсан байх (заавал)."},
      {en:"You should have called me.", pron:"ю шүд хэв колд ми.", mn:"Чи над руу залгах ёстой байсан."},
      {en:"I could have won!", pron:"ай күд хэв вон!", mn:"Би хожиж болох байсан!"},
      {en:"She can't have said that.", pron:"ши кант хэв сэд зэт.", mn:"Тэр тэгж хэлсэн байж таарахгүй."},
      {en:"We should have left earlier.", pron:"ви шүд хэв лэфт өрлиэр.", mn:"Бид эрт гарах ёстой байсан."}
    ],
    exercises:[
      {q:"Өнгөрсний таамаг:", parts:["He ", " have forgotten."], opts:["must","should"], a:0, fix:"Заавал болсон → must have."},
      {q:"Харамсал:", parts:["You ", " have called."], opts:["should","must"], a:0, fix:"Ёстой байсан → should have."},
      {q:"have + :", parts:["I could have ", "."], opts:["won","win"], a:0, fix:"verb3 → won."},
      {q:"Боломжгүй:", parts:["She ", " have said that."], opts:["can't","must"], a:0, fix:"Байж таарахгүй → can't have."}
    ],
    speak:{ scene:'Харамсал', turns:[
      {ruby:"I missed the bus again!", pron:"ай мист зэ бас эгэйн!", mn:"Би автобусаа дахиад алдлаа!",
        choices:[{t:"You should have left earlier.",best:true,mn:"Эрт гарах ёстой байсан."},{t:"Bus gone.",best:false,fix:"Бүтэн: You should have left earlier."}]},
      {ruby:"You're right. What should I do now?", pron:"юр райт. вот шүд ай ду нау?", mn:"Зөв. Одоо яах вэ?",
        choices:[{t:"You could take a taxi.",best:true,mn:"Такси барьж болно."},{t:"Taxi.",best:false,fix:"Бүтэн: You could take a taxi."}]},
      {ruby:"Good idea, thanks!", pron:"гүд айдиа, сэнкс!", mn:"Гоё санаа, баярлалаа!",
        choices:[{t:"No worries!",best:true,mn:"Зүгээр!"},{t:"Ok.",best:false,fix:"Найрсаг: No worries!"}]}
    ]}
  },
  {
    id:'causative', title:"Causative: have/get sth done", level:"Гүнзгий 13",
    blurb:"I had my hair cut — хийлгэх",
    rule:{
      h:"Өөр хүнээр үйлдэл хийлгэх",
      html:`Ажлыг өөрөө биш, <b>өөр хүнээр хийлгэсэн</b> гэдгийг <b>have / get + юм + verb3</b>-ээр илэрхийлнэ:
        <div style="margin:12px 0"><span class="tag">have + юм + verb3</span><span class="tag">get + юм + verb3</span></div>
        <b>I had my hair cut</b> (Би үсээ засуулсан — үсчнээр), <b>She got her car repaired</b> (Машинаа засуулсан).`
    },
    phrases:[
      {en:"I had my hair cut.", pron:"ай хэд май хэйр кат.", mn:"Би үсээ засуулсан."},
      {en:"She got her car repaired.", pron:"ши гот хёр кар рипэрд.", mn:"Тэр машинаа засуулсан."},
      {en:"We're having our house painted.", pron:"вийр хэвинг аур хаус пэйнтид.", mn:"Бид байшингаа будуулж байна."},
      {en:"You should get your eyes tested.", pron:"ю шүд гет ёр айз тэстид.", mn:"Чи нүдээ шалгуулах хэрэгтэй."},
      {en:"I need to have this fixed.", pron:"ай нийд ту хэв зис фикст.", mn:"Би үүнийг засуулах хэрэгтэй."}
    ],
    exercises:[
      {q:"have + юм + :", parts:["I had my hair ", "."], opts:["cut","cutting"], a:0, fix:"have + юм + verb3 → cut."},
      {q:"get + юм + :", parts:["She got her car ", "."], opts:["repaired","repair"], a:0, fix:"verb3 → repaired."},
      {q:"Бүтэц:", parts:["I ", " my photo taken."], opts:["had","did"], a:0, fix:"have/get sth done → had."},
      {q:"get + юм + :", parts:["Get your eyes ", "."], opts:["tested","test"], a:0, fix:"verb3 → tested."}
    ],
    speak:{ scene:'Үйлчилгээ', turns:[
      {ruby:"Your hair looks great!", pron:"ёр хэйр лүкс грэйт!", mn:"Үс чинь гоё харагдаж байна!",
        choices:[{t:"Thanks, I had it cut yesterday.",best:true,mn:"Баярлалаа, өчигдөр засуулсан."},{t:"I cut hair.",best:false,fix:"Бүтэн: I had it cut yesterday."}]},
      {ruby:"Where did you go?", pron:"вэр дид ю гоу?", mn:"Хаана очив?",
        choices:[{t:"A new salon downtown.",best:true,mn:"Хотын төвд шинэ салон."},{t:"Salon.",best:false,fix:"Бүтэн: A new salon downtown."}]},
      {ruby:"I should get mine done too!", pron:"ай шүд гет майн дан ту!", mn:"Би ч бас хийлгэх хэрэгтэй нь!",
        choices:[{t:"You should, it's great!",best:true,mn:"Тийм ээ, гоё шүү!"},{t:"Ok.",best:false,fix:"Илүү: You should, it's great!"}]}
    ]}
  },
  {
    id:'mixedcond', title:"Mixed conditionals", level:"Гүнзгий 14",
    blurb:"If I had studied, I would be...",
    rule:{
      h:"Холимог нөхцөл (өөр цаг)",
      html:`Нөхцөл ба үр дүн <b>өөр цагт</b> байж болно. Өнгөрсөн нөхцөл → <b>одоогийн</b> үр дүн:
        <div style="margin:12px 0"><span class="tag">If + past perfect , ... would + үйл үг (now)</span></div>
        <b>If I had studied medicine, I would be a doctor now</b> (Хэрэв анагаах судалсан бол одоо эмч байх байсан).`
    },
    phrases:[
      {en:"If I had studied medicine, I would be a doctor now.", pron:"иф ай хэд стадид мэдсин, ай вүд би э доктор нау.", mn:"Хэрэв анагаах судалсан бол одоо эмч байх байсан."},
      {en:"If I had saved money, I would be rich now.", pron:"иф ай хэд сэйвд мани, ай вүд би рич нау.", mn:"Хэрэв мөнгө хураасан бол одоо баян байх байсан."},
      {en:"If she were taller, she would have become a model.", pron:"иф ши вөр толэр, ши вүд хэв бикам э модл.", mn:"Хэрэв өндөр байсан бол загварчин болох байсан."},
      {en:"I wouldn't be tired now if I had slept.", pron:"ай вүднт би тайрд нау иф ай хэд слэпт.", mn:"Хэрэв унтсан бол одоо ядрахгүй байх байсан."},
      {en:"If I spoke English, I would have got the job.", pron:"иф ай споук Инглиш, ай вүд хэв гот зэ жоб.", mn:"Хэрэв англиар ярьдаг бол тэр ажилд орох байсан."}
    ],
    exercises:[
      {q:"Өнгөрсөн → одоо:", parts:["If I had studied, I ", " a doctor now."], opts:["would be","would have been"], a:0, fix:"Одоогийн үр дүн → would be."},
      {q:"If + :", parts:["If I ", " saved money..."], opts:["had","have"], a:0, fix:"past perfect → had."},
      {q:"Одоо → өнгөрсөн:", parts:["If she ", " taller, she would have become a model."], opts:["were","is"], a:0, fix:"Одоогийн нөхцөл → were."},
      {q:"Бүтэц:", parts:["I wouldn't be tired if I ", " slept."], opts:["had","have"], a:0, fix:"had slept."}
    ],
    speak:{ scene:'Ярилцлага', turns:[
      {ruby:"Do you regret any choices?", pron:"ду ю ригрэт эни чойсиз?", mn:"Ямар нэг сонголтоо харамсдаг уу?",
        choices:[{t:"If I had studied harder, I would have a better job now.",best:true,mn:"Шаргуу хичээллэсэн бол одоо илүү сайн ажилтай байх байсан."},{t:"Study more job.",best:false,fix:"Бүтэн: If I had studied harder, I would have a better job now."}]},
      {ruby:"It's never too late, you know.", pron:"итс нэвэр тү лэйт, ю ноу.", mn:"Хэзээ ч оройтдоггүй шүү дээ.",
        choices:[{t:"You're right, I can still learn.",best:true,mn:"Зөв, би одоо ч сурч чадна."},{t:"Ok.",best:false,fix:"Илүү: You're right, I can still learn."}]},
      {ruby:"Exactly! Keep growing.", pron:"игзэктли! кийп гроуинг.", mn:"Яг тийм! Хөгжсөөр бай.",
        choices:[{t:"Thank you, I will!",best:true,mn:"Баярлалаа, тэгье!"},{t:"Ok.",best:false,fix:"Илүү: Thank you, I will!"}]}
    ]}
  },
  {
    id:'phrasal', title:"Phrasal verbs", level:"Гүнзгий 15",
    blurb:"give up / look after / run out of",
    rule:{
      h:"Хэлц үйл үг",
      html:`Үйл үг + жижиг үг (up/off/after/out) нийлээд <b>шинэ утга</b> үүсгэдэг:
        <div style="margin:12px 0"><span class="tag">give up = болих</span><span class="tag">look after = халамжлах</span><span class="tag">run out of = дуусах</span><span class="tag">turn on/off = асаах/унтраах</span><span class="tag">pick up = тосож авах</span></div>
        Утгыг нь тус тусад нь цээжилдэг — үгчлэн орчуулж болохгүй.`
    },
    phrases:[
      {en:"Please turn off the light.", pron:"плийз төрн оф зэ лайт.", mn:"Гэрлээ унтраагаач."},
      {en:"Don't give up!", pron:"доунт гив ап!", mn:"Бүү бууж өг!"},
      {en:"She looks after her sister.", pron:"ши лүкс афтэр хёр систэр.", mn:"Тэр эгч дүүгээ халамжилдаг."},
      {en:"We ran out of milk.", pron:"ви рэн аут оф милк.", mn:"Бидний сүү дууссан."},
      {en:"I'll pick you up at seven.", pron:"айл пик ю ап эт сэвн.", mn:"Би чамайг 7 цагт тосож авна."}
    ],
    exercises:[
      {q:"«унтраах»:", parts:["Please turn ", " the light."], opts:["off","in"], a:0, fix:"асаах on / унтраах off → turn off."},
      {q:"«болих»:", parts:["Don't give ", "!"], opts:["up","in"], a:0, fix:"болих → give up."},
      {q:"«халамжлах»:", parts:["She looks ", " her sister."], opts:["after","up"], a:0, fix:"халамжлах → look after."},
      {q:"«дуусах»:", parts:["We ran ", " of milk."], opts:["out","off"], a:0, fix:"дуусах → run out of."}
    ],
    speak:{ scene:'Утсаар', turns:[
      {ruby:"Let's meet tonight!", pron:"летс мийт тунайт!", mn:"Өнөө орой уулзъя!",
        choices:[{t:"Great! Can you pick me up at seven?",best:true,mn:"Гоё! 7 цагт тосож авч болох уу?"},{t:"Come get me.",best:false,fix:"Бүтэн: Can you pick me up at seven?"}]},
      {ruby:"Sure. Don't be late!", pron:"шүр. доунт би лэйт!", mn:"Тэгье. Бүү хоцроорой!",
        choices:[{t:"I won't. See you!",best:true,mn:"Хоцрохгүй. Уулзъя!"},{t:"Ok.",best:false,fix:"Илүү: I won't. See you!"}]},
      {ruby:"Oh, we ran out of coffee at home.", pron:"оу, ви рэн аут оф кофи эт хоум.", mn:"Өө, гэрт кофе дуусчихсан юм.",
        choices:[{t:"No problem, I'll bring some.",best:true,mn:"Зүгээр, би авчирна."},{t:"Ok.",best:false,fix:"Илүү: No problem, I'll bring some."}]}
    ]}
  },
  {
    id:'connectors', title:"Холбоос: although / however", level:"Гүнзгий 16",
    blurb:"although / however / despite / because of",
    rule:{
      h:"Санааг холбох үгс",
      html:`Хоёр санааг холбоход:
        <div style="margin:12px 0"><span class="tag">although + өгүүлбэр = хэдийгээр</span><span class="tag">however = гэсэн ч (тусдаа өгүүлбэр)</span><span class="tag">despite / in spite of + нэр үг = үл хамааран</span><span class="tag">because of + нэр үг = ачаар/улмаас</span></div>
        <b>Although it was cold, we went out</b>. ⟷ <b>Despite the cold, we went out</b>.`
    },
    phrases:[
      {en:"Although it was cold, we went out.", pron:"олзоу ит воз коулд, ви вэнт аут.", mn:"Хэдийгээр хүйтэн байсан ч бид гарсан."},
      {en:"It was expensive. However, I bought it.", pron:"ит воз икспэнсив. хауэвэр, ай бот ит.", mn:"Үнэтэй байлаа. Гэсэн ч би авсан."},
      {en:"Despite the rain, we walked.", pron:"диспайт зэ рэйн, ви волкт.", mn:"Бороо орж байсан ч бид алхсан."},
      {en:"She passed because of hard work.", pron:"ши паст бикоз оф хард вөрк.", mn:"Тэр шаргуу ажилласны ачаар тэнцсэн."},
      {en:"I'm tired, but I'm happy.", pron:"айм тайрд, бат айм хэпи.", mn:"Би ядарсан ч аз жаргалтай."}
    ],
    exercises:[
      {q:"«хэдийгээр» (өгүүлбэртэй):", parts:["", " it was cold, we went out."], opts:["Although","Despite"], a:0, fix:"өгүүлбэртэй → Although."},
      {q:"Despite + нэр үг:", parts:["Despite the ", ", we walked."], opts:["rain","it rained"], a:0, fix:"Despite + нэр үг → the rain."},
      {q:"«гэсэн ч» (тусдаа):", parts:["It was hard. ", ", I finished."], opts:["However","Although"], a:0, fix:"тусдаа өгүүлбэр → However."},
      {q:"«ачаар»:", parts:["She won ", " of practice."], opts:["because","although"], a:0, fix:"because of + нэр үг."}
    ],
    speak:{ scene:'Аяллын сэтгэгдэл', turns:[
      {ruby:"How was your trip?", pron:"хау воз ёр трип?", mn:"Аялал чинь ямар байв?",
        choices:[{t:"Although it rained, we had fun.",best:true,mn:"Бороо орсон ч хөгжилтэй байсан."},{t:"Rain fun.",best:false,fix:"Бүтэн: Although it rained, we had fun."}]},
      {ruby:"Nice attitude! Would you go again?", pron:"найс этитюд! вүд ю гоу эгэйн?", mn:"Гоё хандлага! Дахиад явах уу?",
        choices:[{t:"Yes, despite the weather!",best:true,mn:"Тийм, цаг агаар яамай!"},{t:"Yes go.",best:false,fix:"Бүтэн: Yes, despite the weather!"}]},
      {ruby:"That's the spirit!", pron:"зэтс зэ спирит!", mn:"Тийм зоригтой!",
        choices:[{t:"Thanks! Life is short.",best:true,mn:"Баярлалаа! Амьдрал богино."},{t:"Ok.",best:false,fix:"Илүү: Thanks! Life is short."}]}
    ]}
  }
],
  a1: [
  {
    id:'a1m1l1', title:"1.1 Мэндлэх", level:"A1 · М1",
    blurb:"Hello! Good morning — be үйл үг",
    rule:{
      h:"Зорилго ба дүрэм: be үйл үг (am/is/are)",
      html:`<b>🎯 Зорилго:</b> Мэндлэх, мэндэнд хариулах, «be» үйл үгийг зөв хэрэглэх.<br><br>
        Англи хэлний хамгийн чухал үйл үг — <b>be</b> (байх). Хэнтэй хамт байгаагаас хамаарч хувирна:
        <div style="margin:12px 0"><span class="tag">I am (би байна)</span><span class="tag">You are (чи байна)</span><span class="tag">He / She / It is</span><span class="tag">We / They are</span></div>
        <b>I am fine</b> = Би сайн байна. <b>She is happy</b> = Тэр баяртай байна.
        <p style="margin-top:12px"><b>📚 Үгийн сан</b> (IPA дуудлагатай):</p>
        <div style="font-size:14px;line-height:2">
        hello /həˈloʊ/ — сайн уу · hi /haɪ/ — сайн уу (дотно) · morning /ˈmɔːrnɪŋ/ — өглөө<br>
        afternoon /ˌæftərˈnuːn/ — үдээс хойш · evening /ˈiːvnɪŋ/ — орой · night /naɪt/ — шөнө<br>
        fine /faɪn/ — сайн · great /ɡreɪt/ — маш сайн · thanks /θæŋks/ — баярлалаа · bye /baɪ/ — баяртай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I fine» гэж болохгүй — «am» заавал хэрэгтэй: <b>I am fine</b>. Мөн «Good night» нь мэндлэхэд биш, салах ёс/унтахын өмнө хэрэглэгддэг.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Би AM, чи ARE, ганц хүн IS» — I am / you are / he is гэж аялгуулж 3 удаа хэл.</p>`
    },
    phrases:[
      {en:"Hello! How are you?", pron:"хэлоу! хау а ю?", mn:"Сайн уу! Юу байна?"},
      {en:"Good morning! I am fine, thanks.", pron:"гүд морнинг! ай эм файн, сэнкс.", mn:"Өглөөний мэнд! Би сайн, баярлалаа."},
      {en:"Good afternoon, everyone.", pron:"гүд афтэрнүн, эвриван.", mn:"Өдрийн мэнд, бүгдээрээ."},
      {en:"Good evening! Nice to see you.", pron:"гүд ийвнинг! найс ту сий ю.", mn:"Оройн мэнд! Тантай уулзахад таатай байна."},
      {en:"Goodbye! See you tomorrow.", pron:"гүдбай! сий ю тумороу.", mn:"Баяртай! Маргааш уулзъя."}
    ],
    exercises:[
      {q:"be үйл үг сонго:", parts:["I ", " fine, thanks."], opts:["am","is"], a:0, fix:"I → am. «I am fine»."},
      {q:"be үйл үг сонго:", parts:["She ", " happy today."], opts:["is","are"], a:0, fix:"He/She/It → is."},
      {q:"be үйл үг сонго:", parts:["They ", " my friends."], opts:["are","is"], a:0, fix:"We/They/You → are."},
      {q:"Өглөө мэндлэхдээ:", parts:["", ", teacher!"], opts:["Good morning","Good night"], a:0, fix:"Өглөө → Good morning. Good night = унтахын өмнө."}
    ],
    speak:{ scene:'Ангид мэндлэх', turns:[
      {ruby:"Good morning! How are you?", pron:"гүд морнинг! хау а ю?", mn:"Өглөөний мэнд! Юу байна?",
        choices:[{t:"I am fine, thank you. And you?",best:true,mn:"Би сайн, баярлалаа. Та юу байна?"},{t:"I fine.",best:false,fix:"«am» мартав: I am fine."}]},
      {ruby:"I am great, thanks!", pron:"ай эм грэйт, сэнкс!", mn:"Би маш сайн байна, баярлалаа!",
        choices:[{t:"Nice to see you!",best:true,mn:"Уулзахад таатай байна!"},{t:"Bye.",best:false,fix:"Яриаг үргэлжлүүл: Nice to see you!"}]},
      {ruby:"Nice to see you too! Have a good day!", pron:"найс ту сий ю ту! хэв э гүд дэй!", mn:"Би ч бас! Сайхан өдөр өнгөрүүлээрэй!",
        choices:[{t:"Thanks! See you tomorrow!",best:true,mn:"Баярлалаа! Маргааш уулзъя!"},{t:"Ok.",best:false,fix:"Дулаахан: Thanks! See you tomorrow!"}]}
    ]}
  },
  {
    id:'a1m1l2', title:"1.2 Нэрээ хэлэх", level:"A1 · М1",
    blurb:"My name is... — subject pronouns",
    rule:{
      h:"Зорилго ба дүрэм: биеийн төлөөний үг",
      html:`<b>🎯 Зорилго:</b> Нэрээ хэлж, бусдын нэрийг асууж, төлөөний үгийг зөв хэрэглэх.<br><br>
        Биеийн төлөөний үгс (subject pronouns) — өгүүлбэрийн эзэн:
        <div style="margin:12px 0"><span class="tag">I = би</span><span class="tag">you = чи/та</span><span class="tag">he = тэр (эр)</span><span class="tag">she = тэр (эм)</span><span class="tag">it = энэ/тэр (юм)</span><span class="tag">we = бид</span><span class="tag">they = тэд</span></div>
        <b>My name is Bat</b> = Миний нэр Бат. <b>What is your name?</b> = Таны нэр хэн бэ?
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        name /neɪm/ — нэр · my /maɪ/ — миний · your /jʊr/ — таны · his /hɪz/ — түүний (эр)<br>
        her /hɜːr/ — түүний (эм) · meet /miːt/ — уулзах · friend /frend/ — найз<br>
        teacher /ˈtiːtʃər/ — багш · student /ˈstuːdənt/ — сурагч · person /ˈpɜːrsən/ — хүн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Англид «I» үргэлж ТОМ үсгээр бичигдэнэ (өгүүлбэрийн дунд ч). «he» — эрэгтэй, «she» — эмэгтэй гэдгийг андуурч болохгүй (монголд «тэр» нэгдмэл учир будилдаг).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> she дотор «эмэгтэй» гэсэн S — Sister, She хоёул S-ээр эхэлдэг гэж холбож тогтоо.</p>`
    },
    phrases:[
      {en:"My name is Enkhmaa.", pron:"май нэйм из Энхмаа.", mn:"Миний нэр Энхмаа."},
      {en:"What is your name?", pron:"вот из ёр нэйм?", mn:"Таны нэр хэн бэ?"},
      {en:"Nice to meet you!", pron:"найс ту мийт ю!", mn:"Танилцахад таатай байна!"},
      {en:"He is my friend.", pron:"хи из май фрэнд.", mn:"Тэр миний найз."},
      {en:"She is a teacher.", pron:"ши из э тийчэр.", mn:"Тэр багш."}
    ],
    exercises:[
      {q:"Төлөөний үг:", parts:["", " is my sister."], opts:["She","He"], a:0, fix:"Эмэгтэй → She."},
      {q:"Төлөөний үг:", parts:["", " am a student."], opts:["I","You"], a:0, fix:"am зөвхөн I-тэй явдаг."},
      {q:"Асуулт:", parts:["What is ", " name?"], opts:["your","you"], a:0, fix:"«Таны нэр» → your name."},
      {q:"Төлөөний үг:", parts:["", " are my friends."], opts:["They","He"], a:0, fix:"Олон хүн → They."}
    ],
    speak:{ scene:'Танилцах', turns:[
      {ruby:"Hi! What is your name?", pron:"хай! вот из ёр нэйм?", mn:"Сайн уу! Таны нэр хэн бэ?",
        choices:[{t:"My name is Saraa. And you?",best:true,mn:"Миний нэр Сараа. Таных?"},{t:"Saraa name.",best:false,fix:"Бүтэн: My name is Saraa."}]},
      {ruby:"I am Ruby. Nice to meet you!", pron:"ай эм Руби. найс ту мийт ю!", mn:"Би Руби. Танилцахад таатай байна!",
        choices:[{t:"Nice to meet you too!",best:true,mn:"Би ч бас таатай байна!"},{t:"Yes.",best:false,fix:"Хариу мэндчил: Nice to meet you too!"}]},
      {ruby:"Is she your friend?", pron:"из ши ёр фрэнд?", mn:"Тэр таны найз уу?",
        choices:[{t:"Yes, she is my friend.",best:true,mn:"Тийм, тэр миний найз."},{t:"Yes, he my friend.",best:false,fix:"Эмэгтэй → she, мөн is хэрэгтэй: she is my friend."}]}
    ]}
  },
  {
    id:'a1m1l3', title:"1.3 Улс үндэстэн", level:"A1 · М1",
    blurb:"I am from Mongolia — a/an",
    rule:{
      h:"Зорилго ба дүрэм: a/an ялгах",
      html:`<b>🎯 Зорилго:</b> Хаанаас ирснээ хэлж, улс үндэстний нэр мэдэж, a/an-г зөв хэрэглэх.<br><br>
        <b>a / an</b> = «нэг» гэсэн үл тодорхойлох үг. Дараагийн үгийн ЭХНИЙ АВИАГААР шийднэ:
        <div style="margin:12px 0"><span class="tag">a + гийгүүлэгч авиа: a teacher, a book</span><span class="tag">an + эгшиг авиа: an apple, an engineer</span></div>
        <b>I am from Mongolia</b> = Би Монголоос ирсэн. <b>She is Mongolian</b> = Тэр монгол хүн.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        country /ˈkʌntri/ — улс · from /frʌm/ — -аас · Mongolia /mɒŋˈɡoʊliə/ — Монгол<br>
        Mongolian /mɒŋˈɡoʊliən/ — монгол (хүн/хэл) · China /ˈtʃaɪnə/ — Хятад · Russia /ˈrʌʃə/ — Орос<br>
        Japan /dʒəˈpæn/ — Япон · Korea /kəˈriːə/ — Солонгос · America /əˈmerɪkə/ — Америк · city /ˈsɪti/ — хот</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Авиа нь чухал, үсэг биш! «an hour» (h дуудагддаггүй тул эгшгээр эхэлнэ), харин «a university» (ю = й авиа, гийгүүлэгч).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «АН гэдэг нь Ангайж хэлдэг эгшгийн өмнө» — an apple, an egg, an orange.</p>`
    },
    phrases:[
      {en:"I am from Mongolia.", pron:"ай эм фром Монголиа.", mn:"Би Монголоос ирсэн."},
      {en:"Where are you from?", pron:"вэр а ю фром?", mn:"Та хаанаас ирсэн бэ?"},
      {en:"She is from Japan.", pron:"ши из фром Жэпэн.", mn:"Тэр Японоос ирсэн."},
      {en:"He is a teacher.", pron:"хи из э тийчэр.", mn:"Тэр багш хүн."},
      {en:"I have an apple.", pron:"ай хэв эн эппл.", mn:"Надад алим бий."}
    ],
    exercises:[
      {q:"a/an сонго:", parts:["He is ", " engineer."], opts:["an","a"], a:0, fix:"Эгшиг авиа (e) → an engineer."},
      {q:"a/an сонго:", parts:["She is ", " teacher."], opts:["a","an"], a:0, fix:"Гийгүүлэгч (t) → a teacher."},
      {q:"Асуулт:", parts:["Where are you ", "?"], opts:["from","in"], a:0, fix:"Хаанаас → Where are you from?"},
      {q:"a/an сонго:", parts:["I eat ", " apple every day."], opts:["an","a"], a:0, fix:"Эгшиг (a) → an apple."}
    ],
    speak:{ scene:'Аялалд танилцах', turns:[
      {ruby:"Where are you from?", pron:"вэр а ю фром?", mn:"Та хаанаас ирсэн бэ?",
        choices:[{t:"I am from Mongolia.",best:true,mn:"Би Монголоос ирсэн."},{t:"Mongolia from.",best:false,fix:"Дараалал: I am from Mongolia."}]},
      {ruby:"Wow, Mongolia! Is it beautiful?", pron:"вау, Монголиа! из ит бьютифул?", mn:"Өө, Монгол! Үзэсгэлэнтэй юу?",
        choices:[{t:"Yes, it is very beautiful!",best:true,mn:"Тийм, маш үзэсгэлэнтэй!"},{t:"Yes beautiful.",best:false,fix:"Бүтэн: Yes, it is very beautiful."}]},
      {ruby:"I want to visit one day!", pron:"ай вонт ту визит ван дэй!", mn:"Хэзээ нэгэн цагт очмоор байна!",
        choices:[{t:"You are welcome anytime!",best:true,mn:"Хэзээ ч ирсэн угтъя!"},{t:"Ok.",best:false,fix:"Найрсаг: You are welcome anytime!"}]}
    ]}
  },
  {
    id:'a1m1l4', title:"1.4 Үсэг ба авиа", level:"A1 · М1",
    blurb:"A-B-C spelling — олон тоо (-s)",
    rule:{
      h:"Зорилго ба дүрэм: үсэглэх ба олон тоо",
      html:`<b>🎯 Зорилго:</b> Нэрээ үсэглэж хэлэх (spell), олон тооны -s-ийг зөв хэрэглэх.<br><br>
        Нэрээ үсэглэхэд цагаан толгойн үсгийн НЭРИЙГ хэлнэ (аппын «Үсэг» таб дээр бүгд бий!). <b>How do you spell it?</b> = Яаж бичдэг вэ?<br><br>
        <b>Олон тоо:</b> ихэнх үгэнд <b>-s</b> залгана:
        <div style="margin:12px 0"><span class="tag">book → books</span><span class="tag">-s/-x/-ch/-sh → -es: box → boxes</span><span class="tag">Онцгой: man→men, child→children</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        letter /ˈletər/ — үсэг · spell /spel/ — үсэглэх · word /wɜːrd/ — үг · book /bʊk/ — ном<br>
        pen /pen/ — үзэг · box /bɒks/ — хайрцаг · child /tʃaɪld/ — хүүхэд · children /ˈtʃɪldrən/ — хүүхдүүд<br>
        man /mæn/ — эр хүн · men /men/ — эрчүүд · again /əˈɡen/ — дахин</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «childs», «mans» гэж болохгүй — children, men. Мөн «two book» биш «two books» — тооны ард олон тоо заавал!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хоёроос дээш бол S дагана» — one book, two bookS.</p>`
    },
    phrases:[
      {en:"How do you spell your name?", pron:"хау ду ю спэл ёр нэйм?", mn:"Нэрээ яаж үсэглэдэг вэ?"},
      {en:"B-A-T. Bat.", pron:"бий-эй-тий. Бат.", mn:"Б-А-Т. Бат."},
      {en:"Can you repeat that, please?", pron:"кэн ю рипийт зэт, плийз?", mn:"Дахин хэлж өгөхгүй юу?"},
      {en:"I have two books.", pron:"ай хэв ту букс.", mn:"Надад хоёр ном бий."},
      {en:"The children are happy.", pron:"зэ чилдрэн а хэпи.", mn:"Хүүхдүүд баяртай байна."}
    ],
    exercises:[
      {q:"Олон тоо:", parts:["I have three ", "."], opts:["books","book"], a:0, fix:"Тооны ард → books."},
      {q:"Олон тоо:", parts:["Two ", " are playing."], opts:["children","childs"], a:0, fix:"child-ийн олон тоо → children (онцгой)."},
      {q:"-es хэрэгтэй:", parts:["Five ", " on the table."], opts:["boxes","boxs"], a:0, fix:"-x төгсгөл → boxes."},
      {q:"Үсэглэхийг асуух:", parts:["How do you ", " it?"], opts:["spell","speak"], a:0, fix:"Үсэглэх → spell."}
    ],
    speak:{ scene:'Нэр бүртгүүлэх', turns:[
      {ruby:"What is your name, please?", pron:"вот из ёр нэйм, плийз?", mn:"Таны нэр хэн бэ?",
        choices:[{t:"My name is Oyun.",best:true,mn:"Миний нэр Оюун."},{t:"Oyun.",best:false,fix:"Бүтэн: My name is Oyun."}]},
      {ruby:"How do you spell it?", pron:"хау ду ю спэл ит?", mn:"Яаж үсэглэдэг вэ?",
        choices:[{t:"O-Y-U-N.",best:true,mn:"О-Ю-У-Н (үсгийн нэрээр)."},{t:"I don't know.",best:false,fix:"Үсгийн нэрсийг «Үсэг» табаас сур: O-Y-U-N."}]},
      {ruby:"Perfect, thank you!", pron:"пөрфэкт, сэнк ю!", mn:"Сайн байна, баярлалаа!",
        choices:[{t:"You are welcome!",best:true,mn:"Зүгээр зүгээр!"},{t:"Ok.",best:false,fix:"Эелдэг: You are welcome!"}]}
    ]}
  },
  {
    id:'a1m1l5', title:"1.5 Тоонууд", level:"A1 · М1",
    blurb:"1-100 тоолох — this/that",
    rule:{
      h:"Зорилго ба дүрэм: тоо ба this/that",
      html:`<b>🎯 Зорилго:</b> 1–100 тоолж, this/that-ийг зөв заана.<br><br>
        <b>this / that</b> — заах үгс:
        <div style="margin:12px 0"><span class="tag">this = ЭНЭ (ойрхон)</span><span class="tag">that = ТЭР (хол)</span><span class="tag">these = эдгээр</span><span class="tag">those = тэдгээр</span></div>
        <b>This is my phone</b> = Энэ миний утас. <b>That is your book</b> = Тэр таны ном.
        <p style="margin-top:12px"><b>📚 Үгийн сан (тоо):</b></p>
        <div style="font-size:14px;line-height:2">
        thirteen /ˌθɜːrˈtiːn/ — 13 · thirty /ˈθɜːrti/ — 30 · fourteen /ˌfɔːrˈtiːn/ — 14 · forty /ˈfɔːrti/ — 40<br>
        fifteen /ˌfɪfˈtiːn/ — 15 · fifty /ˈfɪfti/ — 50 · sixty /ˈsɪksti/ — 60 · seventy /ˈsevənti/ — 70<br>
        eighty /ˈeɪti/ — 80 · ninety /ˈnaɪnti/ — 90 · hundred /ˈhʌndrəd/ — 100</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> 13/30, 14/40... андуурагдана! -TEEN (13-19) төгсгөлд өргөлт: thirTEEN. -TY (30,40...) эхэнд өргөлт: THIRty. 🔊 дарж сонсоод ялгаж сур.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ойрХОН бол THIS, ХОЛ бол THAT» — Х үсгээр эхэлсэн ХОЛ нь THAT.</p>`
    },
    phrases:[
      {en:"This is my phone.", pron:"зис из май фоун.", mn:"Энэ миний утас."},
      {en:"That is your book.", pron:"зэт из ёр бүк.", mn:"Тэр таны ном."},
      {en:"I am thirteen years old.", pron:"ай эм сөртийн йирз оулд.", mn:"Би 13 настай."},
      {en:"It costs fifty dollars.", pron:"ит костс фифти доларз.", mn:"Энэ 50 доллар."},
      {en:"These are my keys.", pron:"зийз а май кийз.", mn:"Эдгээр миний түлхүүрүүд."}
    ],
    exercises:[
      {q:"Ойрхон юм:", parts:["", " is my pen (гартаа барьж байна)."], opts:["This","That"], a:0, fix:"Ойрхон → This."},
      {q:"Хол юм:", parts:["", " is your car (хол зогсож байна)."], opts:["That","This"], a:0, fix:"Хол → That."},
      {q:"Аль нь 30:", parts:["", ""], opts:["thirty","thirteen"], a:0, fix:"thirty=30 (ТИРти), thirteen=13 (тиртИЙН)."},
      {q:"Олон, ойрхон:", parts:["", " are my books."], opts:["These","This"], a:0, fix:"Олон + ойрхон → These."}
    ],
    speak:{ scene:'Дэлгүүрт үнэ асуух', turns:[
      {ruby:"Can I help you?", pron:"кэн ай хэлп ю?", mn:"Танд туслах уу?",
        choices:[{t:"Yes. How much is this bag?",best:true,mn:"Тийм. Энэ цүнх хэд вэ?"},{t:"Bag how much.",best:false,fix:"Бүтэн: How much is this bag?"}]},
      {ruby:"This bag is forty dollars.", pron:"зис бэг из форти доларз.", mn:"Энэ цүнх 40 доллар.",
        choices:[{t:"And that bag over there?",best:true,mn:"Тэр цаад цүнх нь?"},{t:"This bag there?",best:false,fix:"Хол байгаа → that bag."}]},
      {ruby:"That one is ninety dollars.", pron:"зэт ван из найнти доларз.", mn:"Тэр нь 90 доллар.",
        choices:[{t:"I will take this one, thanks!",best:true,mn:"Би энийг нь авъя, баярлалаа!"},{t:"Ok give.",best:false,fix:"Эелдэг: I will take this one, thanks!"}]}
    ]}
  },
  {
    id:'a1m1l6', title:"1.6 Утасны дугаар", level:"A1 · М1",
    blurb:"What's your number? — my/your/his/her",
    rule:{
      h:"Зорилго ба дүрэм: хамаатуулах үгс",
      html:`<b>🎯 Зорилго:</b> Утасны дугаар асууж хэлэх, хамаатуулах үгсийг (possessive adjectives) зөв хэрэглэх.<br><br>
        Хамаатуулах үгс — «хэний» гэдгийг заана:
        <div style="margin:12px 0"><span class="tag">my = миний</span><span class="tag">your = таны</span><span class="tag">his = түүний (эр)</span><span class="tag">her = түүний (эм)</span><span class="tag">our = бидний</span><span class="tag">their = тэдний</span></div>
        Утасны дугаарыг цифр цифрээр нь уншина: 9911 = «nine-nine-one-one». 0-ийг «oh» /oʊ/ эсвэл «zero» гэнэ.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        phone /foʊn/ — утас · number /ˈnʌmbər/ — дугаар · call /kɔːl/ — залгах<br>
        mobile /ˈmoʊbaɪl/ — гар утас · zero /ˈzɪroʊ/ — тэг · address /ˈædres/ — хаяг<br>
        email /ˈiːmeɪl/ — и-мэйл · contact /ˈkɒntækt/ — холбоо барих · write /raɪt/ — бичих · slowly /ˈsloʊli/ — удаанаар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «he's» (тэр байна) ба «his» (түүний) андуурагдана: <b>His phone</b> = түүний утас, <b>He's tired</b> = He is tired. Мөн асуултад «What's your number?» — «How is your number?» гэж болохгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> he→his, she→her — эхний үсэг нь хадгалагддаг (H→His, SHe→...er биш ч S-Sister-She-Her гэж холбо).</p>`
    },
    phrases:[
      {en:"What is your phone number?", pron:"вот из ёр фоун намбэр?", mn:"Таны утасны дугаар хэд вэ?"},
      {en:"My number is 9-9-1-1-2-2-3-3.", pron:"май намбэр из найн-найн-ван-ван-ту-ту-срий-срий.", mn:"Миний дугаар 99112233."},
      {en:"Can you say it slowly, please?", pron:"кэн ю сэй ит слоули, плийз?", mn:"Удаан хэлж өгөхгүй юу?"},
      {en:"Her number is new.", pron:"хёр намбэр из ню.", mn:"Түүний дугаар шинэ."},
      {en:"Call me tomorrow.", pron:"кол ми тумороу.", mn:"Маргааш над руу залгаарай."}
    ],
    exercises:[
      {q:"Хамаатуулах үг:", parts:["", " name is Bat. (би)"], opts:["My","I"], a:0, fix:"Миний → My. I = би (эзэн)."},
      {q:"Хамаатуулах үг:", parts:["This is ", " phone. (тэр эмэгтэйн)"], opts:["her","his"], a:0, fix:"Эмэгтэй → her."},
      {q:"Хамаатуулах үг:", parts:["", " car is red. (тэр эрэгтэйн)"], opts:["His","He"], a:0, fix:"Түүний (эр) → His."},
      {q:"Асуулт:", parts:["What is your phone ", "?"], opts:["number","name"], a:0, fix:"Дугаар → number."}
    ],
    speak:{ scene:'Дугаар солилцох', turns:[
      {ruby:"What is your phone number?", pron:"вот из ёр фоун намбэр?", mn:"Таны утасны дугаар хэд вэ?",
        choices:[{t:"My number is 8-8-1-2-3-4-5-6.",best:true,mn:"Миний дугаар 88123456."},{t:"Number 88123456 is.",best:false,fix:"Дараалал: My number is..."}]},
      {ruby:"Sorry, can you say it slowly?", pron:"сори, кэн ю сэй ит слоули?", mn:"Уучлаарай, удаан хэлж өгнө үү?",
        choices:[{t:"Sure. Eight-eight-one-two...",best:true,mn:"Тэгье. Найм-найм-нэг-хоёр..."},{t:"No.",best:false,fix:"Эелдэг: Sure, ...гээд удаан давт."}]},
      {ruby:"Got it, thanks! I will call you.", pron:"гот ит, сэнкс! ай вил кол ю.", mn:"Авлаа, баярлалаа! Би залгая.",
        choices:[{t:"Great! Talk to you soon!",best:true,mn:"Гоё! Удахгүй ярья!"},{t:"Ok.",best:false,fix:"Дулаахан: Talk to you soon!"}]}
    ]}
  },
  {
    id:'a1m1l7', title:"1.7 Нас", level:"A1 · М1",
    blurb:"How old are you? — have/has",
    rule:{
      h:"Зорилго ба дүрэм: нас хэлэх, have/has",
      html:`<b>🎯 Зорилго:</b> Нас асууж хэлэх, have/has-ийг зөв хэрэглэх.<br><br>
        <b>Анхаар:</b> Англид насыг <b>be</b>-ээр хэлнэ (have-ээр БИШ!):
        <div style="margin:12px 0"><span class="tag">I am 25 years old ✓</span><span class="tag">I have 25 years ✗</span></div>
        <b>have / has</b> = «-тай, эзэмшинэ»:
        <div style="margin:12px 0"><span class="tag">I / You / We / They + have</span><span class="tag">He / She / It + has</span></div>
        <b>I have a brother</b> = Надад ах бий. <b>She has two children</b> = Тэр хоёр хүүхэдтэй.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        old /oʊld/ — настай · year /jɪr/ — жил · young /jʌŋ/ — залуу · birthday /ˈbɜːrθdeɪ/ — төрсөн өдөр<br>
        brother /ˈbrʌðər/ — ах/дүү (эр) · sister /ˈsɪstər/ — эгч/дүү (эм) · pet /pet/ — тэжээвэр амьтан<br>
        dog /dɒɡ/ — нохой · cat /kæt/ — муур · only /ˈoʊnli/ — зөвхөн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Монгол/орос хэлний нөлөөгөөр «I have 25 years» гэж хэлдэг — БУРУУ. Зөв нь: <b>I am 25 (years old)</b>. Мөн «She have» биш — <b>She has</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ГАНЦ хүн (he/she/it) haS — S нь Solo-гийн S».</p>`
    },
    phrases:[
      {en:"How old are you?", pron:"хау оулд а ю?", mn:"Та хэдэн настай вэ?"},
      {en:"I am twenty-five years old.", pron:"ай эм твэнти-файв йирз оулд.", mn:"Би 25 настай."},
      {en:"I have a younger sister.", pron:"ай хэв э янгэр систэр.", mn:"Надад дүү (эм) бий."},
      {en:"She has two children.", pron:"ши хэз ту чилдрэн.", mn:"Тэр хоёр хүүхэдтэй."},
      {en:"We have a dog.", pron:"ви хэв э дог.", mn:"Бид нохойтой."}
    ],
    exercises:[
      {q:"Нас хэлэх:", parts:["I ", " 20 years old."], opts:["am","have"], a:0, fix:"Насанд be: I am 20."},
      {q:"have/has:", parts:["She ", " a cat."], opts:["has","have"], a:0, fix:"She → has."},
      {q:"have/has:", parts:["They ", " a big house."], opts:["have","has"], a:0, fix:"They → have."},
      {q:"Асуулт:", parts:["How ", " are you?"], opts:["old","many"], a:0, fix:"Нас → How old."}
    ],
    speak:{ scene:'Гэр бүлийн тухай', turns:[
      {ruby:"How old are you?", pron:"хау оулд а ю?", mn:"Та хэдэн настай вэ?",
        choices:[{t:"I am twenty-eight years old.",best:true,mn:"Би 28 настай."},{t:"I have twenty-eight years.",best:false,fix:"Насанд be: I AM 28 years old."}]},
      {ruby:"Do you have brothers or sisters?", pron:"ду ю хэв бразэрз ор систэрз?", mn:"Ах эгч дүүтэй юу?",
        choices:[{t:"Yes, I have one brother.",best:true,mn:"Тийм, нэг ахтай."},{t:"Yes, one brother have.",best:false,fix:"Дараалал: I have one brother."}]},
      {ruby:"Nice! Does he live with you?", pron:"найс! даз хи лив виз ю?", mn:"Гоё! Тэр тантай хамт амьдардаг уу?",
        choices:[{t:"No, he has his own home.",best:true,mn:"Үгүй, тэр өөрийн гэртэй."},{t:"No, he have home.",best:false,fix:"He → haS: he has his own home."}]}
    ]}
  },
  {
    id:'a1m1l8', title:"1.8 Ажил мэргэжил", level:"A1 · М1",
    blurb:"What do you do? — Present Simple",
    rule:{
      h:"Зорилго ба дүрэм: Present Simple (одоо цаг)",
      html:`<b>🎯 Зорилго:</b> Ажил мэргэжлээ хэлж, Present Simple-ийг хэрэглэх.<br><br>
        <b>Present Simple</b> — байнга давтагддаг, ердийн үйлдэлд:
        <div style="margin:12px 0"><span class="tag">I / You / We / They + work</span><span class="tag">He / She / It + workS (-s залгана!)</span></div>
        <b>I work at a school</b> = Би сургуульд ажилладаг. <b>She teaches English</b> = Тэр англи хэл заадаг.<br>
        Мэргэжил асуухдаа: <b>What do you do?</b> = Та юу хийдэг вэ? (= ажил чинь юу вэ)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        work /wɜːrk/ — ажиллах · job /dʒɒb/ — ажил · doctor /ˈdɒktər/ — эмч<br>
        teacher /ˈtiːtʃər/ — багш · driver /ˈdraɪvər/ — жолооч · nurse /nɜːrs/ — сувилагч<br>
        office /ˈɒfɪs/ — оффис · hospital /ˈhɒspɪtl/ — эмнэлэг · school /skuːl/ — сургууль · company /ˈkʌmpəni/ — компани</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> He/She дээр -s мартах нь хамгийн түгээмэл алдаа: «She work» ✗ → <b>She works</b> ✓. Мөн «What is your job?» зөв ч, төрөлх хэлтнүүд «What do you do?» гэж илүү их хэлдэг.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «She/He гурав дахь хүн — гурав дахь хүнд S бэлэглэ» (works, teaches, lives).</p>`
    },
    phrases:[
      {en:"What do you do?", pron:"вот ду ю ду?", mn:"Та юу хийдэг вэ? (ажил)"},
      {en:"I am a kindergarten teacher.", pron:"ай эм э киндэргартн тийчэр.", mn:"Би цэцэрлэгийн багш."},
      {en:"I work at a school.", pron:"ай вөрк эт э скүл.", mn:"Би сургуульд ажилладаг."},
      {en:"She works at a hospital.", pron:"ши вөркс эт э хоспитал.", mn:"Тэр эмнэлэгт ажилладаг."},
      {en:"He drives a taxi.", pron:"хи драйвз э тэкси.", mn:"Тэр такси барьдаг."}
    ],
    exercises:[
      {q:"-s хэрэгтэй юу:", parts:["She ", " at a bank."], opts:["works","work"], a:0, fix:"She → workS."},
      {q:"-s хэрэгтэй юу:", parts:["I ", " in an office."], opts:["work","works"], a:0, fix:"I → work (s-гүй)."},
      {q:"Мэргэжил асуух:", parts:["What do you ", "?"], opts:["do","work"], a:0, fix:"What do you do? = ажил асуух хэллэг."},
      {q:"-es:", parts:["He ", " English."], opts:["teaches","teach"], a:0, fix:"-ch төгсгөл → teaches."}
    ],
    speak:{ scene:'Ажлын тухай', turns:[
      {ruby:"What do you do?", pron:"вот ду ю ду?", mn:"Та юу хийдэг вэ?",
        choices:[{t:"I am a teacher. I work at a kindergarten.",best:true,mn:"Би багш. Цэцэрлэгт ажилладаг."},{t:"Teacher work kindergarten.",best:false,fix:"Бүтэн: I am a teacher. I work at a kindergarten."}]},
      {ruby:"That's wonderful! Do you like your job?", pron:"зэтс вандэрфул! ду ю лайк ёр жоб?", mn:"Гайхалтай! Ажилдаа дуртай юу?",
        choices:[{t:"Yes, I love it. Children are amazing.",best:true,mn:"Тийм, их дуртай. Хүүхдүүд гайхалтай."},{t:"Yes like.",best:false,fix:"Бүтэн: Yes, I love it."}]},
      {ruby:"What does your husband do?", pron:"вот даз ёр хазбэнд ду?", mn:"Нөхөр тань юу хийдэг вэ?",
        choices:[{t:"He works at a company.",best:true,mn:"Тэр компанид ажилладаг."},{t:"He work company.",best:false,fix:"He → workS + at a: He works at a company."}]}
    ]}
  },
  {
    id:'a1m1l9', title:"1.9 Энгийн асуулт", level:"A1 · М1",
    blurb:"Do you...? Does she...? — do/does",
    rule:{
      h:"Зорилго ба дүрэм: do/does асуулт",
      html:`<b>🎯 Зорилго:</b> Энгийн асуулт тавьж, богино хариулт өгөх.<br><br>
        Present Simple-д асуулт үүсгэхдээ <b>Do / Does</b>-ийг өгүүлбэрийн эхэнд тавина:
        <div style="margin:12px 0"><span class="tag">Do + I/you/we/they: Do you work?</span><span class="tag">Does + he/she/it: Does she work?</span></div>
        <b>Анхаар:</b> Does-той асуултад үйл үг -s АВАХГҮЙ: «Does she workS?» ✗ → <b>Does she work?</b> ✓<br><br>
        Богино хариулт: <b>Yes, I do. / No, I don't. / Yes, she does. / No, she doesn't.</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        like /laɪk/ — дуртай · live /lɪv/ — амьдрах · speak /spiːk/ — ярих<br>
        eat /iːt/ — идэх · drink /drɪŋk/ — уух · play /pleɪ/ — тоглох<br>
        watch /wɒtʃ/ — үзэх · listen /ˈlɪsn/ — сонсох · every day /ˈevri deɪ/ — өдөр бүр · often /ˈɒfn/ — байнга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You like coffee?» гэж зөвхөн аялгаар асуудаг нь ярианд болдог ч, зөв асуулт нь <b>Do you like coffee?</b>. Мөн «Does she likes» ✗ — does аль хэдийн -s-ийг «авчихсан».</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «DOES ирэхээр -S зугтдаг» — Does she like (likes биш).</p>`
    },
    phrases:[
      {en:"Do you like coffee?", pron:"ду ю лайк кофи?", mn:"Та кофед дуртай юу?"},
      {en:"Yes, I do. I drink it every day.", pron:"ес, ай ду. ай дринк ит эври дэй.", mn:"Тийм. Өдөр бүр уудаг."},
      {en:"Does she speak English?", pron:"даз ши спийк Инглиш?", mn:"Тэр англиар ярьдаг уу?"},
      {en:"No, she doesn't.", pron:"ноу, ши дазнт.", mn:"Үгүй, ярьдаггүй."},
      {en:"Do you live in Ulaanbaatar?", pron:"ду ю лив ин Улаанбаатар?", mn:"Та Улаанбаатарт амьдардаг уу?"}
    ],
    exercises:[
      {q:"Do/Does:", parts:["", " you like tea?"], opts:["Do","Does"], a:0, fix:"you → Do."},
      {q:"Do/Does:", parts:["", " she work here?"], opts:["Does","Do"], a:0, fix:"she → Does."},
      {q:"-s байх уу:", parts:["Does he ", " English?"], opts:["speak","speaks"], a:0, fix:"Does-ийн ард үндсэн хэлбэр → speak."},
      {q:"Богино хариулт:", parts:["Do you like milk? — Yes, I ", "."], opts:["do","like"], a:0, fix:"Богино хариулт → Yes, I do."}
    ],
    speak:{ scene:'Сонирхол асуух', turns:[
      {ruby:"Do you like music?", pron:"ду ю лайк мьюзик?", mn:"Та хөгжимд дуртай юу?",
        choices:[{t:"Yes, I do. I listen every day.",best:true,mn:"Тийм. Өдөр бүр сонсдог."},{t:"Yes, I like.",best:false,fix:"Богино хариулт: Yes, I do."}]},
      {ruby:"Cool! Does your son like music too?", pron:"күл! даз ёр сан лайк мьюзик ту?", mn:"Гоё! Хүү тань бас хөгжимд дуртай юу?",
        choices:[{t:"Yes, he does. He plays piano.",best:true,mn:"Тийм. Тэр төгөлдөр хуур тоглодог."},{t:"Yes, he like piano.",best:false,fix:"Yes, he does. He plays piano (-s!)."}]},
      {ruby:"Wonderful! Music is good for children.", pron:"вандэрфул! мьюзик из гүд фор чилдрэн.", mn:"Гайхалтай! Хөгжим хүүхдэд сайн.",
        choices:[{t:"I agree with you!",best:true,mn:"Би санал нийлж байна!"},{t:"Ok.",best:false,fix:"Илүү: I agree with you!"}]}
    ]}
  },
  {
    id:'a1m1l10', title:"1.10 Танилцуулгын давтлага", level:"A1 · М1",
    blurb:"Модулийн шалгалт — there is/are + бүх дүрэм",
    rule:{
      h:"Давтлага: Модуль 1-ийн бүх дүрэм + there is/are",
      html:`<b>🎯 Зорилго:</b> Модуль 1-ийн бүх мэдлэгээ нэгтгэж, өөрийгөө бүрэн танилцуулах «төсөл» хийх.<br><br>
        <b>Шинэ дүрэм — there is / there are</b> («байна» гэж юм байгааг хэлэх):
        <div style="margin:12px 0"><span class="tag">There is + ганц: There is a book</span><span class="tag">There are + олон: There are two books</span></div>
        <b>Модуль 1-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">be: am/is/are</span><span class="tag">I/you/he/she/it/we/they</span><span class="tag">a/an</span><span class="tag">олон тоо -s</span><span class="tag">this/that</span><span class="tag">my/your/his/her</span><span class="tag">have/has</span><span class="tag">Present Simple</span><span class="tag">Do/Does?</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Өөрийгөө танилцуул (6+ өгүүлбэр):</b> нэр, улс, нас, ажил, гэр бүл, сонирхол. Жишээ:<br>
        <i>Hello! My name is Enkhmaa. I am from Mongolia. I am 30 years old. I am a teacher. I have one son. He is 5. There are three people in my family. I like music. Nice to meet you!</i><br>
        Үүнийг Ruby-д (Яриа таб) бичээд засуулж болно!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Танилцуулгын Т5: <b>Т</b>аны нэр → <b>Т</b>аны улс → <b>Т</b>аны нас → <b>Т</b>аны ажил → <b>Т</b>аны гэр бүл.</p>`
    },
    phrases:[
      {en:"Let me introduce myself.", pron:"лет ми интродюс майсэлф.", mn:"Би өөрийгөө танилцуулъя."},
      {en:"There are four people in my family.", pron:"зэр а фор пийпл ин май фэмили.", mn:"Манай гэр бүл дөрвүүлээ."},
      {en:"There is a school near my home.", pron:"зэр из э скүл нийр май хоум.", mn:"Манай гэрийн ойролцоо сургууль бий."},
      {en:"I am happy to be here.", pron:"ай эм хэпи ту би хийр.", mn:"Энд байгаадаа баяртай байна."},
      {en:"Thank you for listening!", pron:"сэнк ю фор лиснинг!", mn:"Сонссонд баярлалаа!"}
    ],
    exercises:[
      {q:"there is/are:", parts:["There ", " two chairs."], opts:["are","is"], a:0, fix:"Олон → There are."},
      {q:"there is/are:", parts:["There ", " a phone on the table."], opts:["is","are"], a:0, fix:"Ганц → There is."},
      {q:"Давтлага (be):", parts:["We ", " students."], opts:["are","is"], a:0, fix:"We → are."},
      {q:"Давтлага (has):", parts:["My sister ", " a new job."], opts:["has","have"], a:0, fix:"She (sister) → has."}
    ],
    speak:{ scene:'🏆 Төсөл: Өөрийгөө танилцуул', turns:[
      {ruby:"Welcome! Please introduce yourself.", pron:"вэлкам! плийз интродюс ёрсэлф.", mn:"Тавтай морил! Өөрийгөө танилцуулна уу.",
        choices:[{t:"Hello! My name is Bolor. I am from Mongolia.",best:true,mn:"Сайн уу! Миний нэр Болор. Би Монголоос."},{t:"Bolor. Mongolia.",best:false,fix:"Бүтэн өгүүлбэрээр: My name is... I am from..."}]},
      {ruby:"Nice! Tell me about your family.", pron:"найс! тэл ми эбаут ёр фэмили.", mn:"Гоё! Гэр бүлийнхээ тухай яриач.",
        choices:[{t:"There are four people in my family. I have two children.",best:true,mn:"Манай гэр бүл дөрвүүлээ. Би хоёр хүүхэдтэй."},{t:"Family four. Children two have.",best:false,fix:"There are four people... I have two children."}]},
      {ruby:"Wonderful! What do you do?", pron:"вандэрфул! вот ду ю ду?", mn:"Гайхалтай! Та юу хийдэг вэ?",
        choices:[{t:"I am a teacher. I work at a kindergarten. I love my job!",best:true,mn:"Би багш. Цэцэрлэгт ажилладаг. Ажилдаа хайртай!"},{t:"Teacher.",best:false,fix:"Бүтэн: I am a teacher. I work at..."}]}
    ]}
  },
  {
    id:'a1m2l1', title:"2.1 Гэр бүлийн гишүүд", level:"A1 · М2",
    blurb:"family members — in/on/under/next to",
    rule:{
      h:"Зорилго ба дүрэм: байрлалын угтвар үгс",
      html:`<b>🎯 Зорилго:</b> Гэр бүлийн гишүүдийг нэрлэж, хэн хаана байгааг байрлалын үгсээр хэлэх.<br><br>
        <b>Байрлалын угтвар үгс</b> (prepositions of place):
        <div style="margin:12px 0"><span class="tag">in = дотор</span><span class="tag">on = дээр</span><span class="tag">under = доор</span><span class="tag">next to = хажууд</span><span class="tag">behind = ард</span><span class="tag">in front of = урд</span></div>
        <b>Mom is in the kitchen</b> = Ээж гал тогоонд байна. <b>Dad is next to me</b> = Аав миний хажууд байна.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        family /ˈfæməli/ — гэр бүл · mother /ˈmʌðər/ — ээж · father /ˈfɑːðər/ — аав<br>
        parents /ˈperənts/ — эцэг эх · son /sʌn/ — хүү · daughter /ˈdɔːtər/ — охин<br>
        grandmother /ˈɡrænmʌðər/ — эмээ · grandfather /ˈɡrænfɑːðər/ — өвөө · baby /ˈbeɪbi/ — нялх хүүхэд · home /hoʊm/ — гэр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «on the kitchen» ✗ — өрөө ДОТОР байгаа бол <b>in</b>: in the kitchen, in the room. «on» = гадаргуу ДЭЭР: on the table, on the sofa.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хайрцаг IN, тавцан ON, орны доор UNDER-аа сан» гэж уяач.</p>`
    },
    phrases:[
      {en:"This is my family.", pron:"зис из май фэмили.", mn:"Энэ манай гэр бүл."},
      {en:"My mother is in the kitchen.", pron:"май мазэр из ин зэ кичэн.", mn:"Ээж маань гал тогоонд байна."},
      {en:"The baby is on the bed.", pron:"зэ бэйби из он зэ бэд.", mn:"Нялх хүүхэд орон дээр байна."},
      {en:"The cat is under the table.", pron:"зэ кэт из андэр зэ тэйбл.", mn:"Муур ширээний доор байна."},
      {en:"My father is next to my grandmother.", pron:"май фазэр из некст ту май грэндмазэр.", mn:"Аав эмээгийн хажууд байна."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["Mom is ", " the kitchen."], opts:["in","on"], a:0, fix:"Өрөө дотор → in."},
      {q:"Байрлал:", parts:["The book is ", " the table."], opts:["on","in"], a:0, fix:"Гадаргуу дээр → on."},
      {q:"Байрлал:", parts:["The dog is ", " the chair."], opts:["under","next"], a:0, fix:"Доор → under."},
      {q:"Байрлал:", parts:["Dad is ", " to me."], opts:["next","on"], a:0, fix:"Хажууд → next to."}
    ],
    speak:{ scene:'Гэр бүлээ танилцуулах', turns:[
      {ruby:"Who is in your family?", pron:"хү из ин ёр фэмили?", mn:"Танай гэр бүлд хэн хэн байдаг вэ?",
        choices:[{t:"My mother, my father, my son and me.",best:true,mn:"Ээж, аав, хүү бид дөрөв."},{t:"Mother father son.",best:false,fix:"My mother, my father... гэж my-тай хэл."}]},
      {ruby:"Nice! Where is your son now?", pron:"найс! вэр из ёр сан нау?", mn:"Гоё! Хүү тань одоо хаана байна?",
        choices:[{t:"He is in his room.",best:true,mn:"Тэр өрөөндөө байна."},{t:"He on room.",best:false,fix:"Өрөө дотор → in: He is in his room."}]},
      {ruby:"And where is your phone? I hear it!", pron:"энд вэр из ёр фоун? ай хийр ит!", mn:"Утас тань хаана байна? Дуугарч байна!",
        choices:[{t:"Oh! It is under the sofa!",best:true,mn:"Өө! Буйдангийн доор байна!"},{t:"Sofa down.",best:false,fix:"Доор → under: It is under the sofa."}]}
    ]}
  },
  {
    id:'a1m2l2', title:"2.2 Гадаад төрх", level:"A1 · М2",
    blurb:"tall, short, young — can/can't",
    rule:{
      h:"Зорилго ба дүрэм: төрх дүрслэх, can/can't",
      html:`<b>🎯 Зорилго:</b> Хүний гадаад төрхийг дүрсэлж, чадвараа can/can't-аар хэлэх.<br><br>
        <b>can / can't</b> = чадна / чадахгүй. Бүх биед адилхан, -s авдаггүй:
        <div style="margin:12px 0"><span class="tag">I can swim</span><span class="tag">She can sing (canS биш!)</span><span class="tag">He can't drive</span></div>
        Төрх дүрслэхдээ: <b>She is tall</b> (be + тэмдэг нэр), <b>She has long hair</b> (has + юм).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        tall /tɔːl/ — өндөр · short /ʃɔːrt/ — намхан · long /lɒŋ/ — урт<br>
        hair /her/ — үс · eyes /aɪz/ — нүд · beautiful /ˈbjuːtɪfl/ — үзэсгэлэнтэй<br>
        handsome /ˈhænsəm/ — царайлаг (эр) · strong /strɒŋ/ — хүчтэй · swim /swɪm/ — сэлэх · sing /sɪŋ/ — дуулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She is long hair» ✗ — үстэй гэдэг бол <b>has</b>: She HAS long hair. Өндөр гэвэл be: She IS tall. Мөн «can» ард to хэрэггүй: «can to swim» ✗ → can swim ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Би ЮУ БОЛОХ вэ → be, Надад ЮУ БАЙХ вэ → have» — is tall / has hair.</p>`
    },
    phrases:[
      {en:"My sister is tall and beautiful.", pron:"май систэр из тол энд бьютифул.", mn:"Эгч маань өндөр, үзэсгэлэнтэй."},
      {en:"She has long black hair.", pron:"ши хэз лонг блэк хэйр.", mn:"Тэр урт хар үстэй."},
      {en:"My son can swim very well.", pron:"май сан кэн свим вэри вэл.", mn:"Хүү маань маш сайн сэлж чадна."},
      {en:"I can't sing, but I can dance.", pron:"ай кант синг, бат ай кэн данс.", mn:"Би дуулж чадахгүй ч бүжиглэж чадна."},
      {en:"He is short but very strong.", pron:"хи из шорт бат вэри стронг.", mn:"Тэр намхан ч маш хүчтэй."}
    ],
    exercises:[
      {q:"be/has:", parts:["She ", " long hair."], opts:["has","is"], a:0, fix:"Үстэй → has long hair."},
      {q:"be/has:", parts:["He ", " tall."], opts:["is","has"], a:0, fix:"Өндөр → is tall."},
      {q:"can + :", parts:["She can ", " very well."], opts:["sing","sings"], a:0, fix:"can-ий ард үндсэн хэлбэр → sing."},
      {q:"Чадахгүй:", parts:["I ", " drive a car."], opts:["can't","don't can"], a:0, fix:"Чадахгүй → can't (don't can гэж байдаггүй)."}
    ],
    speak:{ scene:'Найзаа дүрслэх', turns:[
      {ruby:"What does your best friend look like?", pron:"вот даз ёр бэст фрэнд лүк лайк?", mn:"Дотны найз тань ямар харагддаг вэ?",
        choices:[{t:"She is tall and has long hair.",best:true,mn:"Тэр өндөр, урт үстэй."},{t:"She is long hair.",best:false,fix:"Үстэй → has: She has long hair."}]},
      {ruby:"Sounds lovely! Can she sing?", pron:"саундз лавли! кэн ши синг?", mn:"Сайхан юм! Тэр дуулж чадах уу?",
        choices:[{t:"Yes, she can sing very well!",best:true,mn:"Тийм, маш сайн дуулдаг!"},{t:"Yes, she cans.",best:false,fix:"can хувирдаггүй: she can sing."}]},
      {ruby:"And you? What can you do?", pron:"энд ю? вот кэн ю ду?", mn:"Та? Юу чаддаг вэ?",
        choices:[{t:"I can cook and I can dance a little.",best:true,mn:"Хоол хийж чадна, жаахан бүжиглэж чадна."},{t:"Cook, dance.",best:false,fix:"Бүтэн: I can cook and dance."}]}
    ]}
  },
  {
    id:'a1m2l3', title:"2.3 Зан чанар", level:"A1 · М2",
    blurb:"kind, funny — some/any",
    rule:{
      h:"Зорилго ба дүрэм: зан чанар, some/any",
      html:`<b>🎯 Зорилго:</b> Хүний зан чанарыг дүрсэлж, some/any-г ялгах.<br><br>
        <b>some / any</b> = «хэдэн, жаахан»:
        <div style="margin:12px 0"><span class="tag">some — БАТЛАХ өгүүлбэрт: I have some friends</span><span class="tag">any — ҮГҮЙСГЭХ ба АСУУХАД: I don't have any... / Do you have any...?</span></div>
        <b>She is kind</b> = Тэр эелдэг. <b>I have some good friends</b> = Надад хэдэн сайн найз бий.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        kind /kaɪnd/ — эелдэг сайхан · funny /ˈfʌni/ — хөгжилтэй · smart /smɑːrt/ — ухаантай<br>
        quiet /ˈkwaɪət/ — дуугүй · shy /ʃaɪ/ — ичимхий · friendly /ˈfrendli/ — найрсаг<br>
        lazy /ˈleɪzi/ — залхуу · busy /ˈbɪzi/ — завгүй · happy /ˈhæpi/ — аз жаргалтай · serious /ˈsɪriəs/ — нухацтай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I don't have some friends» ✗ — үгүйсгэхэд <b>any</b>: I don't have ANY friends. Асуухад мөн any: Do you have ANY questions?</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «БАТЛАвал SOME, АСУУвал-ҮГҮЙСГЭвэл ANY» — (+)some, (−/?)any.</p>`
    },
    phrases:[
      {en:"My mother is very kind.", pron:"май мазэр из вэри кайнд.", mn:"Ээж маань их сайхан сэтгэлтэй."},
      {en:"My son is funny and smart.", pron:"май сан из фани энд смарт.", mn:"Хүү маань хөгжилтэй, ухаантай."},
      {en:"I have some good friends.", pron:"ай хэв сам гүд фрэндз.", mn:"Надад хэдэн сайн найз бий."},
      {en:"Do you have any brothers?", pron:"ду ю хэв эни бразэрз?", mn:"Танд ах дүү бий юу?"},
      {en:"She doesn't have any pets.", pron:"ши дазнт хэв эни пэтс.", mn:"Тэр ямар ч тэжээвэр амьтангүй."}
    ],
    exercises:[
      {q:"some/any:", parts:["I have ", " friends here."], opts:["some","any"], a:0, fix:"Батлах → some."},
      {q:"some/any:", parts:["Do you have ", " questions?"], opts:["any","some"], a:0, fix:"Асуулт → any."},
      {q:"some/any:", parts:["We don't have ", " milk."], opts:["any","some"], a:0, fix:"Үгүйсгэх → any."},
      {q:"Зан чанар:", parts:["She is quiet and ", "."], opts:["shy","tall"], a:0, fix:"Зан чанар → shy (ичимхий). tall = төрх."}
    ],
    speak:{ scene:'Хүүхдийнхээ тухай', turns:[
      {ruby:"Tell me about your child.", pron:"тэл ми эбаут ёр чайлд.", mn:"Хүүхдийнхээ тухай яриач.",
        choices:[{t:"He is funny and very smart.",best:true,mn:"Тэр хөгжилтэй, их ухаантай."},{t:"He funny smart.",best:false,fix:"is хэрэгтэй: He is funny and smart."}]},
      {ruby:"Lovely! Does he have any friends at school?", pron:"лавли! даз хи хэв эни фрэндз эт скүл?", mn:"Хөөрхөн юм! Сургууль дээрээ найзуудтай юу?",
        choices:[{t:"Yes, he has some good friends.",best:true,mn:"Тийм, хэдэн сайн найзтай."},{t:"Yes, he has any friends.",best:false,fix:"Батлахад → some: he has some friends."}]},
      {ruby:"Is he shy or friendly?", pron:"из хи шай ор фрэндли?", mn:"Тэр ичимхий юу, найрсаг уу?",
        choices:[{t:"He is a little shy, but very kind.",best:true,mn:"Жаахан ичимхий ч их эелдэг."},{t:"Shy kind.",best:false,fix:"Бүтэн: He is a little shy, but very kind."}]}
    ]}
  },
  {
    id:'a1m2l4', title:"2.4 Эзэмшил", level:"A1 · М2",
    blurb:"Whose is this? — тоологддог/тоологддоггүй",
    rule:{
      h:"Зорилго ба дүрэм: 's эзэмшил, countable/uncountable",
      html:`<b>🎯 Зорилго:</b> «Хэний юм бэ» гэж асууж, тоологддог/тоологддоггүй нэр үгийг ялгах.<br><br>
        <b>Эзэмшлийн 's:</b> хүний нэрийн ард <b>'s</b> залгавал «-ийн» болно:
        <div style="margin:12px 0"><span class="tag">Bat's phone = Батын утас</span><span class="tag">my mother's bag = ээжийн цүнх</span></div>
        <b>Тоологддог / тоологддоггүй:</b>
        <div style="margin:12px 0"><span class="tag">Тоологддог: apple → two apples</span><span class="tag">Тоологддоггүй: water, milk, rice, money — олон тоо байхгүй!</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        whose /huːz/ — хэний · bag /bæɡ/ — цүнх · key /kiː/ — түлхүүр<br>
        wallet /ˈwɒlɪt/ — түрийвч · glasses /ˈɡlæsɪz/ — нүдний шил · water /ˈwɔːtər/ — ус<br>
        money /ˈmʌni/ — мөнгө · rice /raɪs/ — будаа · sugar /ˈʃʊɡər/ — чихэр · mine /maɪn/ — минийх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «two waters», «moneys» ✗ — тоологддоггүй үг олон тоо авдаггүй: some water, some money. Мөн «the phone of Bat» гэхээсээ <b>Bat's phone</b> нь илүү жам ёсны.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Асгаж, цутгаж болдог юм тоологддоггүй» — ус, сүү, будаа, элсэн чихэр.</p>`
    },
    phrases:[
      {en:"Whose phone is this?", pron:"хүз фоун из зис?", mn:"Энэ хэний утас вэ?"},
      {en:"It is my mother's phone.", pron:"ит из май мазэрс фоун.", mn:"Ээжийн утас."},
      {en:"This bag is mine.", pron:"зис бэг из майн.", mn:"Энэ цүнх минийх."},
      {en:"There is some water in the glass.", pron:"зэр из сам вотэр ин зэ глас.", mn:"Аяганд жаахан ус байна."},
      {en:"I don't have much money.", pron:"ай доунт хэв мач мани.", mn:"Надад их мөнгө алга."}
    ],
    exercises:[
      {q:"Эзэмшил:", parts:["This is ", " car. (Бат)"], opts:["Bat's","Bat"], a:0, fix:"Батын → Bat's."},
      {q:"Тоологдох уу:", parts:["I drink some ", "."], opts:["water","waters"], a:0, fix:"water тоологддоггүй → олон тоогүй."},
      {q:"Асуулт:", parts:["", " keys are these?"], opts:["Whose","Who"], a:0, fix:"Хэний → Whose."},
      {q:"Тоологдох уу:", parts:["She has two ", "."], opts:["bags","waters"], a:0, fix:"bag тоологддог → two bags."}
    ],
    speak:{ scene:'Мартагдсан юм', turns:[
      {ruby:"Look! Whose wallet is this?", pron:"лүк! хүз волэт из зис?", mn:"Хараач! Энэ хэний түрийвч вэ?",
        choices:[{t:"I think it is Saraa's wallet.",best:true,mn:"Сараагийнх байх гэж бодож байна."},{t:"Saraa wallet.",best:false,fix:"Эзэмшил → Saraa's wallet."}]},
      {ruby:"Is there any money in it?", pron:"из зэр эни мани ин ит?", mn:"Дотор нь мөнгө байна уу?",
        choices:[{t:"Yes, there is some money.",best:true,mn:"Тийм, жаахан мөнгө байна."},{t:"Yes, some moneys.",best:false,fix:"money тоологддоггүй: some money."}]},
      {ruby:"Let's give it to her!", pron:"летс гив ит ту хёр!", mn:"Түүнд өгцгөөе!",
        choices:[{t:"Good idea. She will be happy!",best:true,mn:"Гоё санаа. Тэр баярлана!"},{t:"Ok.",best:false,fix:"Илүү: Good idea!"}]}
    ]}
  },
  {
    id:'a1m2l5', title:"2.5 Найз нөхөд", level:"A1 · М2",
    blurb:"Come in! Sit down! — тушаах хэлбэр",
    rule:{
      h:"Зорилго ба дүрэм: imperatives (тушаах/урих)",
      html:`<b>🎯 Зорилго:</b> Найзаа урьж, зочлохдоо тушаах/урих хэлбэрийг зөв хэрэглэх.<br><br>
        <b>Imperative</b> = үйл үгийн үндсэн хэлбэрээр шууд хэлэх (Та/Чи гэж хэлэлгүй):
        <div style="margin:12px 0"><span class="tag">Come in! = Орж ир!</span><span class="tag">Sit down! = Суу!</span><span class="tag">Don't worry! = Бүү санаа зов!</span></div>
        Эелдэг болгохын тулд <b>please</b> нэмнэ: <b>Please sit down. / Sit down, please.</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        come /kʌm/ — ирэх · sit /sɪt/ — суух · stand /stænd/ — зогсох<br>
        wait /weɪt/ — хүлээх · open /ˈoʊpən/ — нээх · close /kloʊz/ — хаах<br>
        listen /ˈlɪsn/ — сонсох · look /lʊk/ — харах · welcome /ˈwelkəm/ — тавтай морил · visit /ˈvɪzɪt/ — зочлох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You sit down!» гэж хэлбэл ширүүн сонсогдоно — imperative нь «you»-гүй. Үгүйсгэхдээ <b>Don't</b> + үйл үг: Don't open the window.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тушаал = нүцгэн үйл үг» — Come! Sit! Look! (өмнө нь юу ч хэрэггүй).</p>`
    },
    phrases:[
      {en:"Welcome! Come in, please.", pron:"вэлкам! кам ин, плийз.", mn:"Тавтай морил! Орж ирнэ үү."},
      {en:"Sit down and relax.", pron:"сит даун энд рилэкс.", mn:"Сууж амраарай."},
      {en:"Please wait a minute.", pron:"плийз вэйт э минит.", mn:"Түр хүлээгээрэй."},
      {en:"Don't worry, be happy!", pron:"доунт вари, би хэпи!", mn:"Бүү санаа зов, баяртай бай!"},
      {en:"Look at this photo!", pron:"лүк эт зис фото!", mn:"Энэ зургийг хараач!"}
    ],
    exercises:[
      {q:"Урих:", parts:["", " in, please!"], opts:["Come","Comes"], a:0, fix:"Imperative → үндсэн хэлбэр: Come in!"},
      {q:"Үгүйсгэх:", parts:["", " open the window."], opts:["Don't","Not"], a:0, fix:"Бүү → Don't + үйл үг."},
      {q:"Эелдэг:", parts:["Sit down, ", "."], opts:["please","yes"], a:0, fix:"Эелдэг болгох → please."},
      {q:"Тушаах:", parts:["", " at the board."], opts:["Look","Looking"], a:0, fix:"Imperative → Look!"}
    ],
    speak:{ scene:'Зочин угтах', turns:[
      {ruby:"Knock knock! Hello!", pron:"нок нок! хэлоу!", mn:"Тог тог! Сайн уу!",
        choices:[{t:"Welcome! Come in, please!",best:true,mn:"Тавтай морил! Орж ирнэ үү!"},{t:"You come.",best:false,fix:"Урихдаа: Come in, please!"}]},
      {ruby:"Thank you! What a nice home!", pron:"сэнк ю! вот э найс хоум!", mn:"Баярлалаа! Ямар сайхан гэр вэ!",
        choices:[{t:"Thanks! Sit down, please. Have some tea.",best:true,mn:"Баярлалаа! Суугаарай. Цай уугаарай."},{t:"Sit!",best:false,fix:"Эелдэг: Sit down, please."}]},
      {ruby:"This tea is delicious!", pron:"зис тий из дэлишэс!", mn:"Энэ цай амттай юм!",
        choices:[{t:"I'm glad! Don't be shy, drink more!",best:true,mn:"Баяртай байна! Бүү ичиж, дахиад уугаарай!"},{t:"Ok.",best:false,fix:"Дулаахан: Don't be shy, drink more!"}]}
    ]}
  },
  {
    id:'a1m2l6', title:"2.6 Хамаатан садан", level:"A1 · М2",
    blurb:"uncle, aunt, cousin — like + verb-ing",
    rule:{
      h:"Зорилго ба дүрэм: like + нэр үг / үйл үг-ing",
      html:`<b>🎯 Зорилго:</b> Хамаатан садныг нэрлэж, дуртай зүйлээ like-аар хэлэх.<br><br>
        <b>like</b>-ийн ард хоёр зүйл болно:
        <div style="margin:12px 0"><span class="tag">like + нэр үг: I like music</span><span class="tag">like + үйл үг-ING: I like singing</span></div>
        <b>My uncle likes fishing</b> = Авга ах маань загасчлах дуртай. (He/She → likeS!)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        uncle /ˈʌŋkl/ — авга/нагац ах · aunt /ænt/ — авга/нагац эгч · cousin /ˈkʌzn/ — үеэл<br>
        nephew /ˈnefjuː/ — зээ хүү · niece /niːs/ — зээ охин · relative /ˈrelətɪv/ — хамаатан<br>
        together /təˈɡeðər/ — хамтдаа · cooking /ˈkʊkɪŋ/ — хоол хийх · fishing /ˈfɪʃɪŋ/ — загасчлах · reading /ˈriːdɪŋ/ — унших</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I like sing» ✗ — like-ийн ард үйл үг бол -ing: I like singING. Мөн «My uncle like» ✗ → My uncle likeS (ганц хүн!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ДУРТАЙ юмаа хийНГЭЭ (-ИНГ) хэл» — like + doING.</p>`
    },
    phrases:[
      {en:"My aunt lives in the countryside.", pron:"май ант ливз ин зэ кантрисайд.", mn:"Нагац эгч маань хөдөө амьдардаг."},
      {en:"My uncle likes fishing.", pron:"май анкл лайкс фишинг.", mn:"Авга ах маань загасчлах дуртай."},
      {en:"I have five cousins.", pron:"ай хэв файв казнз.", mn:"Би таван үеэлтэй."},
      {en:"We like cooking together.", pron:"ви лайк күкинг тугэзэр.", mn:"Бид хамтдаа хоол хийх дуртай."},
      {en:"My niece likes reading books.", pron:"май нийс лайкс ридинг букс.", mn:"Зээ охин маань ном унших дуртай."}
    ],
    exercises:[
      {q:"like + :", parts:["I like ", "."], opts:["swimming","swim"], a:0, fix:"like + -ing → swimming."},
      {q:"-s хэрэгтэй юу:", parts:["My uncle ", " fishing."], opts:["likes","like"], a:0, fix:"Ганц хүн → likes."},
      {q:"Хамаатан:", parts:["My mother's sister is my ", "."], opts:["aunt","uncle"], a:0, fix:"Ээжийн эгч → aunt."},
      {q:"like + :", parts:["They like ", " together."], opts:["cooking","cook"], a:0, fix:"like + -ing → cooking."}
    ],
    speak:{ scene:'Хамаатны тухай', turns:[
      {ruby:"Do you have a big family?", pron:"ду ю хэв э биг фэмили?", mn:"Танайх том гэр бүл үү?",
        choices:[{t:"Yes! I have many aunts, uncles and cousins.",best:true,mn:"Тийм! Олон авга, нагац, үеэлтэй."},{t:"Yes, many relative.",best:false,fix:"Олон тоо: many relativeS."}]},
      {ruby:"What do you like doing together?", pron:"вот ду ю лайк дуинг тугэзэр?", mn:"Хамтдаа юу хийх дуртай вэ?",
        choices:[{t:"We like cooking and eating together.",best:true,mn:"Хамтдаа хоол хийж идэх дуртай."},{t:"We like cook and eat.",best:false,fix:"like + -ing: like cookING and eatING."}]},
      {ruby:"That sounds like a happy family!", pron:"зэт саундз лайк э хэпи фэмили!", mn:"Аз жаргалтай гэр бүл юм шиг сонсогдож байна!",
        choices:[{t:"Yes, we are very close.",best:true,mn:"Тийм, бид их дотно."},{t:"Yes.",best:false,fix:"Илүү: Yes, we are very close."}]}
    ]}
  },
  {
    id:'a1m2l7', title:"2.7 Хэн бэ?", level:"A1 · М2",
    blurb:"me, him, her — object pronouns",
    rule:{
      h:"Зорилго ба дүрэм: тусагдахуун төлөөний үг",
      html:`<b>🎯 Зорилго:</b> «Намайг, түүнийг, тэднийг» гэсэн object pronoun-уудыг зөв хэрэглэх.<br><br>
        Үйлдэл ХЭНД чиглэж байгааг заана (үйл үгийн АРД ордог):
        <div style="margin:12px 0"><span class="tag">I → me (намайг/надад)</span><span class="tag">you → you</span><span class="tag">he → him</span><span class="tag">she → her</span><span class="tag">it → it</span><span class="tag">we → us</span><span class="tag">they → them</span></div>
        <b>I love her</b> = Би түүнд хайртай. <b>Call me!</b> = Над руу залгаарай! <b>Help us</b> = Бидэнд туслаарай.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        me /miː/ — намайг · him /hɪm/ — түүнийг (эр) · her /hɜːr/ — түүнийг (эм)<br>
        us /ʌs/ — биднийг · them /ðem/ — тэднийг · know /noʊ/ — мэдэх/таних<br>
        help /help/ — туслах · love /lʌv/ — хайрлах · ask /æsk/ — асуух · tell /tel/ — хэлэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I love she» ✗ — үйл үгийн ард object хэлбэр: I love HER. «Call to me» ✗ — call-д to хэрэггүй: Call me.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Үйл үгийн УРД би I, АРД нь me» — I see him, he sees me.</p>`
    },
    phrases:[
      {en:"Do you know him?", pron:"ду ю ноу хим?", mn:"Та түүнийг таних уу?"},
      {en:"Yes, I know him very well.", pron:"ес, ай ноу хим вэри вэл.", mn:"Тийм, би түүнийг сайн таньдаг."},
      {en:"Please help me!", pron:"плийз хэлп ми!", mn:"Надад туслаарай!"},
      {en:"I love them so much.", pron:"ай лав зэм соу мач.", mn:"Би тэдэнд маш их хайртай."},
      {en:"Tell us about your family.", pron:"тэл ас эбаут ёр фэмили.", mn:"Гэр бүлийнхээ тухай бидэнд яриач."}
    ],
    exercises:[
      {q:"Object хэлбэр:", parts:["I love ", ". (тэр эмэгтэй)"], opts:["her","she"], a:0, fix:"Үйл үгийн ард → her."},
      {q:"Object хэлбэр:", parts:["Do you know ", "? (тэр эрэгтэй)"], opts:["him","he"], a:0, fix:"Үйл үгийн ард → him."},
      {q:"Object хэлбэр:", parts:["Please call ", ". (би)"], opts:["me","I"], a:0, fix:"Намайг → me."},
      {q:"Object хэлбэр:", parts:["I see ", " every day. (тэд)"], opts:["them","they"], a:0, fix:"Тэднийг → them."}
    ],
    speak:{ scene:'Хүн таних', turns:[
      {ruby:"Look, that is my cousin over there. Do you know her?", pron:"лүк, зэт из май казн оувэр зэр. ду ю ноу хёр?", mn:"Хараач, тэр миний үеэл. Та түүнийг таних уу?",
        choices:[{t:"No, I don't know her. Introduce me!",best:true,mn:"Үгүй, танихгүй. Танилцуулаач!"},{t:"No, I don't know she.",best:false,fix:"Үйл үгийн ард → her: I don't know her."}]},
      {ruby:"Sure! Saraa, meet my friend!", pron:"шүр! Сараа, мийт май фрэнд!", mn:"Тэгье! Сараа, найзтай минь танилц!",
        choices:[{t:"Nice to meet you!",best:true,mn:"Танилцахад таатай байна!"},{t:"Meet.",best:false,fix:"Бүтэн: Nice to meet you!"}]},
      {ruby:"She likes you already!", pron:"ши лайкс ю олрэди!", mn:"Тэр чамд аль хэдийн таалагдчихлаа!",
        choices:[{t:"I like her too!",best:true,mn:"Би ч бас түүнд!"},{t:"I like she too.",best:false,fix:"like-ийн ард → her: I like her too."}]}
    ]}
  },
  {
    id:'a1m2l8', title:"2.8 Гэр бүлийн зураг", level:"A1 · М2",
    blurb:"He is smiling — Present Continuous",
    rule:{
      h:"Зорилго ба дүрэм: Present Continuous (яг одоо)",
      html:`<b>🎯 Зорилго:</b> Зураг дүрсэлж, ЯГ ОДОО болж буй үйлдлийг Present Continuous-аар хэлэх.<br><br>
        <b>be + үйл үг-ing</b> = яг одоо болж байна:
        <div style="margin:12px 0"><span class="tag">I am reading = Би уншиж байна</span><span class="tag">She is smiling = Тэр инээмсэглэж байна</span><span class="tag">They are playing = Тэд тоглож байна</span></div>
        <b>Present Simple-тэй харьцуул:</b> I read every day (байнга) ⟷ I am reading now (яг одоо).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        photo /ˈfoʊtoʊ/ — зураг · smile /smaɪl/ — инээмсэглэх · wear /wer/ — өмсөх<br>
        hold /hoʊld/ — барих · laugh /læf/ — инээх · dance /dæns/ — бүжиглэх<br>
        take /teɪk/ — авах · picture /ˈpɪktʃər/ — зураг · everyone /ˈevriwʌn/ — бүгд · now /naʊ/ — одоо</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> be-г мартах: «She smiling» ✗ → She IS smiling ✓. Мөн байнгын үйлдэлд Continuous хэрэглэхгүй: «I am working every day» ✗ → I work every day ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ЯГ ОДОО = am/is/are + ИНГ» — одоо болж бай-ИНГ-аа.</p>`
    },
    phrases:[
      {en:"Look at this photo!", pron:"лүк эт зис фото!", mn:"Энэ зургийг хараач!"},
      {en:"My son is smiling.", pron:"май сан из смайлинг.", mn:"Хүү маань инээмсэглэж байна."},
      {en:"My mother is holding the baby.", pron:"май мазэр из хоулдинг зэ бэйби.", mn:"Ээж нялх хүүхдийг тэврээд байна."},
      {en:"Everyone is laughing.", pron:"эвриван из лафинг.", mn:"Бүгд инээж байна."},
      {en:"We are wearing traditional clothes.", pron:"ви а вэринг трэдишнл клоуз.", mn:"Бид үндэсний хувцас өмссөн байна."}
    ],
    exercises:[
      {q:"Яг одоо:", parts:["She ", " smiling."], opts:["is","does"], a:0, fix:"be + ing → is smiling."},
      {q:"Яг одоо:", parts:["They are ", " football."], opts:["playing","play"], a:0, fix:"are + -ing → playing."},
      {q:"Аль нь зөв:", parts:["I ", " a book now."], opts:["am reading","read"], a:0, fix:"«now» → Present Continuous."},
      {q:"Аль нь зөв:", parts:["I ", " every morning."], opts:["run","am running"], a:0, fix:"«every morning» = байнга → Present Simple."}
    ],
    speak:{ scene:'Зураг үзэх', turns:[
      {ruby:"What a nice photo! Who is this?", pron:"вот э найс фото! хү из зис?", mn:"Ямар гоё зураг вэ! Энэ хэн бэ?",
        choices:[{t:"This is my family. We are celebrating Tsagaan Sar.",best:true,mn:"Манай гэр бүл. Цагаан сар тэмдэглэж байгаа нь."},{t:"Family. Tsagaan Sar.",best:false,fix:"Бүтэн: This is my family. We are celebrating..."}]},
      {ruby:"What is your son doing in the photo?", pron:"вот из ёр сан дуинг ин зэ фото?", mn:"Зурган дээр хүү тань юу хийж байна?",
        choices:[{t:"He is holding a small cup and smiling.",best:true,mn:"Жижиг аяга бариад инээмсэглэж байна."},{t:"He holding cup.",best:false,fix:"be мартав: He IS holding..."}]},
      {ruby:"Everyone looks so happy!", pron:"эвриван лүкс соу хэпи!", mn:"Бүгд их баяртай харагдаж байна!",
        choices:[{t:"Yes, we are all laughing in this picture!",best:true,mn:"Тийм, энэ зурган дээр бүгд инээж байгаа!"},{t:"Yes happy.",best:false,fix:"Бүтэн: Yes, we are all laughing!"}]}
    ]}
  },
  {
    id:'a1m2l9', title:"2.9 Хүмүүсийг дүрслэх", level:"A1 · М2",
    blurb:"and, but, because — холбоос үгс",
    rule:{
      h:"Зорилго ба дүрэм: and / but / or / because",
      html:`<b>🎯 Зорилго:</b> Хүнийг олон талаас нь дүрсэлж, өгүүлбэрүүдээ холбоос үгээр холбох.<br><br>
        <b>Үндсэн холбоос үгс:</b>
        <div style="margin:12px 0"><span class="tag">and = ба, бас</span><span class="tag">but = гэхдээ</span><span class="tag">or = эсвэл</span><span class="tag">because = учир нь</span></div>
        <b>She is young but very smart</b> = Тэр залуу ч их ухаантай.<br>
        <b>I love him because he is kind</b> = Тэр эелдэг учраас би түүнд хайртай.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        and /ænd/ — ба · but /bʌt/ — гэхдээ · or /ɔːr/ — эсвэл · because /bɪˈkɒz/ — учир нь<br>
        also /ˈɔːlsoʊ/ — бас · very /ˈveri/ — маш · really /ˈriːəli/ — үнэхээр<br>
        always /ˈɔːlweɪz/ — үргэлж · never /ˈnevər/ — хэзээ ч · everybody /ˈevribɒdi/ — хүн бүр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «because» дангаараа хариулт болохгүй бичгийн хэлэнд: «Why?» — «Because he is kind» (ярианд OK). Мөн but/and-ийг хэт олон давтахгүй — өгүүлбэрээ богино байлга.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэмэх AND, сөрөх BUT, сонгох OR, шалтгаан BECAUSE».</p>`
    },
    phrases:[
      {en:"My father is quiet but very kind.", pron:"май фазэр из квайэт бат вэри кайнд.", mn:"Аав маань дуугүй ч их эелдэг."},
      {en:"She is smart and funny.", pron:"ши из смарт энд фани.", mn:"Тэр ухаантай бас хөгжилтэй."},
      {en:"I love her because she always helps me.", pron:"ай лав хёр бикоз ши олвэйз хэлпс ми.", mn:"Тэр надад үргэлж тусалдаг учраас би түүнд хайртай."},
      {en:"Do you want tea or coffee?", pron:"ду ю вонт тий ор кофи?", mn:"Цай уух уу, кофе юу?"},
      {en:"Everybody loves my grandmother.", pron:"эврибоди лавз май грэндмазэр.", mn:"Хүн бүр эмээд минь хайртай."}
    ],
    exercises:[
      {q:"Холбоос:", parts:["She is young ", " very smart."], opts:["but","or"], a:0, fix:"Сөрөг утга → but."},
      {q:"Холбоос:", parts:["He is tall ", " strong."], opts:["and","but"], a:0, fix:"Нэмэх → and."},
      {q:"Холбоос:", parts:["I love him ", " he is kind."], opts:["because","or"], a:0, fix:"Шалтгаан → because."},
      {q:"Холбоос:", parts:["Tea ", " coffee?"], opts:["or","and"], a:0, fix:"Сонголт → or."}
    ],
    speak:{ scene:'Дотны хүнээ дүрслэх', turns:[
      {ruby:"Tell me about your best friend.", pron:"тэл ми эбаут ёр бэст фрэнд.", mn:"Дотны найзынхаа тухай яриач.",
        choices:[{t:"She is quiet but very kind and smart.",best:true,mn:"Тэр дуугүй ч их эелдэг, ухаантай."},{t:"She quiet. She kind. She smart.",best:false,fix:"Холбоос ашигла: quiet BUT kind AND smart."}]},
      {ruby:"Why do you like her?", pron:"вай ду ю лайк хёр?", mn:"Яагаад түүнд дуртай вэ?",
        choices:[{t:"Because she always helps me.",best:true,mn:"Учир нь тэр надад үргэлж тусалдаг."},{t:"She helps.",best:false,fix:"Шалтгаан → Because she always helps me."}]},
      {ruby:"You are lucky to have her!", pron:"ю а лаки ту хэв хёр!", mn:"Тийм найзтай та азтай!",
        choices:[{t:"Yes, I am really lucky!",best:true,mn:"Тийм, би үнэхээр азтай!"},{t:"Yes.",best:false,fix:"Илүү: I am really lucky!"}]}
    ]}
  },
  {
    id:'a1m2l10', title:"2.10 Модулийн төсөл", level:"A1 · М2",
    blurb:"🏆 Гэр бүлээ бүрэн танилцуулах",
    rule:{
      h:"Давтлага: Модуль 2-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 2-ын мэдлэгээ нэгтгэж, гэр бүлээ бүрэн дүрслэн танилцуулах төсөл хийх.<br><br>
        <b>Модуль 2-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">in/on/under/next to</span><span class="tag">can/can't</span><span class="tag">some/any</span><span class="tag">Bat's = Батын</span><span class="tag">тоологддог/-güй</span><span class="tag">Come in! (imperative)</span><span class="tag">like + -ing</span><span class="tag">me/him/her/us/them</span><span class="tag">Present Continuous</span><span class="tag">and/but/because</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Гэр бүлээ танилцуул (8+ өгүүлбэр):</b> гишүүд хэн, ямар төрхтэй, ямар зантай, юунд дуртай, юу чаддаг, одоо юу хийж байгаа. Жишээ:<br>
        <i>There are four people in my family. My husband is tall and he can drive. My son likes playing football. My daughter is shy but very smart. I love them because they always make me happy. Right now, my son is doing his homework and my daughter is reading.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Дүрслэлийн 4Т: <b>Т</b>өрх (is tall) → зан <b>Т</b>өлөв (is kind) → дур <b>Т</b>аашаал (likes...) → яг одоогийн <b>Т</b>өлөв (is doing).</p>`
    },
    phrases:[
      {en:"Let me tell you about my family.", pron:"лет ми тэл ю эбаут май фэмили.", mn:"Гэр бүлийнхээ тухай ярьж өгье."},
      {en:"My husband can fix everything.", pron:"май хазбэнд кэн фикс эврисинг.", mn:"Нөхөр маань бүх юмыг засаж чадна."},
      {en:"My children like playing together.", pron:"май чилдрэн лайк плэйинг тугэзэр.", mn:"Хүүхдүүд маань хамтдаа тоглох дуртай."},
      {en:"I love them because they make me happy.", pron:"ай лав зэм бикоз зэй мэйк ми хэпи.", mn:"Тэд намайг баярлуулдаг учраас би тэдэнд хайртай."},
      {en:"Right now, everyone is at home.", pron:"райт нау, эвриван из эт хоум.", mn:"Яг одоо бүгд гэртээ байна."}
    ],
    exercises:[
      {q:"Давтлага (can):", parts:["My son ", " swim."], opts:["can","cans"], a:0, fix:"can хувирдаггүй."},
      {q:"Давтлага (object):", parts:["I love ", " very much. (тэд)"], opts:["them","they"], a:0, fix:"Үйл үгийн ард → them."},
      {q:"Давтлага (Continuous):", parts:["She ", " reading now."], opts:["is","does"], a:0, fix:"Яг одоо → is reading."},
      {q:"Давтлага (some/any):", parts:["Do you have ", " photos?"], opts:["any","some"], a:0, fix:"Асуулт → any."}
    ],
    speak:{ scene:'🏆 Төсөл: Гэр бүлээ танилцуул', turns:[
      {ruby:"I want to know about your family. Tell me everything!", pron:"ай вонт ту ноу эбаут ёр фэмили. тэл ми эврисинг!", mn:"Гэр бүлийг тань мэдмээр байна. Бүгдийг яриач!",
        choices:[{t:"There are four people in my family: my husband, two children and me.",best:true,mn:"Манай гэр бүл дөрвүүлээ: нөхөр, хоёр хүүхэд, би."},{t:"Four people.",best:false,fix:"There are four people in my family: ..."}]},
      {ruby:"What are they like?", pron:"вот а зэй лайк?", mn:"Тэд ямар хүмүүс вэ?",
        choices:[{t:"My husband is quiet but kind. My children are funny and they like playing.",best:true,mn:"Нөхөр дуугүй ч эелдэг. Хүүхдүүд хөгжилтэй, тоглох дуртай."},{t:"Husband kind. Children funny.",best:false,fix:"is/are + холбоос ашигла: quiet BUT kind."}]},
      {ruby:"Beautiful! What are they doing right now?", pron:"бьютифул! вот а зэй дуинг райт нау?", mn:"Сайхан юм! Яг одоо тэд юу хийж байна?",
        choices:[{t:"My son is playing and my daughter is drawing a picture.",best:true,mn:"Хүү тоглож, охин зураг зурж байна."},{t:"Son play, daughter draw.",best:false,fix:"Яг одоо → is playING, is drawING."}]}
    ]}
  },
  {
    id:'a1m3l1', title:"3.1 Өдрийн үйлдлүүд", level:"A1 · М3",
    blurb:"get up, have breakfast — Present Simple дадал",
    rule:{
      h:"Зорилго ба дүрэм: өдөр тутмын дадал",
      html:`<b>🎯 Зорилго:</b> Өдөр тутмын үйлдлээ дараалан хэлж, Present Simple-ээр дадал ярих.<br><br>
        Өдөр тутмын үйлдэл нь <b>үйл үг + юм</b> хосоороо явдаг — цээжээр нь тогтоох нь дээр:
        <div style="margin:12px 0"><span class="tag">get up = босох</span><span class="tag">have breakfast = өглөөний хоол идэх</span><span class="tag">go to work = ажилдаа явах</span><span class="tag">come home = гэртээ ирэх</span><span class="tag">go to bed = унтах</span></div>
        <b>I get up at seven</b> = Би 7 цагт босдог. <b>I have breakfast</b> = Би өглөөний хоол иддэг.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        wake up /weɪk ʌp/ — сэрэх · get up /ɡet ʌp/ — босох · breakfast /ˈbrekfəst/ — өглөөний хоол<br>
        lunch /lʌntʃ/ — өдрийн хоол · dinner /ˈdɪnər/ — оройн хоол · start /stɑːrt/ — эхлэх<br>
        finish /ˈfɪnɪʃ/ — дуусах · shower /ˈʃaʊər/ — шүршүүрт орох · dress /dres/ — хувцаслах · routine /ruːˈtiːn/ — дадал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I eat breakfast» ч болох ч төрөлх хэлтнүүд <b>have breakfast</b> гэж илүү хэлдэг. Мөн «I go to the work» ✗ — ажил, сургууль, орондоо гэхэд «the» хэрэггүй: go to work, go to school, go to bed.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өдрөө 5 үйлдлээр өгүүл: <b>босох → идэх → явах → ирэх → унтах</b> (get up → have → go → come → go to bed).</p>`
    },
    phrases:[
      {en:"I get up at seven o'clock.", pron:"ай гет ап эт сэвн оклок.", mn:"Би 7 цагт боздог."},
      {en:"I have breakfast with my family.", pron:"ай хэв брэкфаст виз май фэмили.", mn:"Би гэр бүлтэйгээ өглөөний хоол иддэг."},
      {en:"I go to work at eight.", pron:"ай гоу ту вөрк эт эйт.", mn:"Би 8 цагт ажилдаа явдаг."},
      {en:"I come home in the evening.", pron:"ай кам хоум ин зэ ийвнинг.", mn:"Би орой гэртээ ирдэг."},
      {en:"I go to bed at ten.", pron:"ай гоу ту бэд эт тэн.", mn:"Би 10 цагт унтдаг."}
    ],
    exercises:[
      {q:"Дадал:", parts:["I ", " up at six every day."], opts:["get","take"], a:0, fix:"Босох → get up."},
      {q:"Дадал:", parts:["I ", " breakfast at seven."], opts:["have","make"], a:0, fix:"Хоол идэх → have breakfast."},
      {q:"«the» хэрэгтэй юу:", parts:["I go to ", " at eight."], opts:["work","the work"], a:0, fix:"go to work — «the» хэрэггүй."},
      {q:"Дадал:", parts:["I ", " home at six."], opts:["come","go"], a:0, fix:"Гэртээ ирэх → come home."}
    ],
    speak:{ scene:'Өдрийн тухай ярих', turns:[
      {ruby:"What time do you get up?", pron:"вот тайм ду ю гет ап?", mn:"Та хэдэн цагт боздог вэ?",
        choices:[{t:"I get up at six thirty.",best:true,mn:"Би 6:30-д боздог."},{t:"Six thirty get up.",best:false,fix:"Бүтэн: I get up at six thirty."}]},
      {ruby:"Wow, early! What do you do then?", pron:"вау, өрли! вот ду ю ду зэн?", mn:"Өө, эрт! Дараа нь юу хийдэг вэ?",
        choices:[{t:"I have breakfast and go to work.",best:true,mn:"Өглөөний хоол идээд ажилдаа явдаг."},{t:"Breakfast, work.",best:false,fix:"Үйл үгтэй: I have breakfast and go to work."}]},
      {ruby:"And what time do you go to bed?", pron:"энд вот тайм ду ю гоу ту бэд?", mn:"Хэдэн цагт унтдаг вэ?",
        choices:[{t:"I usually go to bed at ten.",best:true,mn:"Ихэвчлэн 10 цагт унтдаг."},{t:"I go to the bed ten.",best:false,fix:"go to bed (the-гүй) + at ten."}]}
    ]}
  },
  {
    id:'a1m3l2', title:"3.2 Цаг хэлэх", level:"A1 · М3",
    blurb:"It's half past seven — цаг унших",
    rule:{
      h:"Зорилго ба дүрэм: цаг хэлэх аргууд",
      html:`<b>🎯 Зорилго:</b> Цагийг хоёр аргаар хэлж, «What time...?» гэж асуух.<br><br>
        <b>1) Хялбар арга</b> — тоог дараалан хэлнэ:
        <div style="margin:12px 0"><span class="tag">7:00 → seven o'clock</span><span class="tag">7:15 → seven fifteen</span><span class="tag">7:45 → seven forty-five</span></div>
        <b>2) Уламжлалт арга</b> — past (өнгөрсөн) / to (дутуу):
        <div style="margin:12px 0"><span class="tag">7:15 → quarter past seven</span><span class="tag">7:30 → half past seven</span><span class="tag">7:45 → quarter to eight</span></div>
        <b>What time is it?</b> = Хэд болж байна? <b>It is half past seven.</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        o'clock /əˈklɒk/ — цаг (бүтэн) · half /hæf/ — хагас · quarter /ˈkwɔːrtər/ — дөрөвний нэг (15 мин)<br>
        past /pæst/ — өнгөрсөн · to /tuː/ — дутуу · midday /ˈmɪddeɪ/ — үд дунд<br>
        midnight /ˈmɪdnaɪt/ — шөнө дунд · a.m. /ˌeɪ ˈem/ — үдээс өмнө · p.m. /ˌpiː ˈem/ — үдээс хойш · time /taɪm/ — цаг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Монголоор «долоон хагас» гэдэг ч англиар <b>half past seven</b> — «past» заавал! «half seven» гэвэл зөвхөн Британид ойлгогдоно. Мөн 7:45 бол «quarter to EIGHT» (дараагийн цаг!), «quarter to seven» биш.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хагас цаг ӨНГӨРСӨН = half PAST. 15 минут ДУТУУ = quarter TO (дараагийн цаг руу)».</p>`
    },
    phrases:[
      {en:"What time is it?", pron:"вот тайм из ит?", mn:"Хэд болж байна?"},
      {en:"It is half past seven.", pron:"ит из хаф паст сэвн.", mn:"7 цаг хагас болж байна."},
      {en:"It is quarter to nine.", pron:"ит из квортэр ту найн.", mn:"9 цаг болоход 15 минут дутуу."},
      {en:"My class starts at ten o'clock.", pron:"май клас стартс эт тэн оклок.", mn:"Хичээл маань 10 цагт эхэлдэг."},
      {en:"I finish work at six p.m.", pron:"ай финиш вөрк эт сикс пи-эм.", mn:"Би орой 6 цагт ажлаа тардаг."}
    ],
    exercises:[
      {q:"8:30 гэвэл:", parts:["It is ", " eight."], opts:["half past","half to"], a:0, fix:"30 минут → half past."},
      {q:"9:45 гэвэл:", parts:["It is quarter to ", "."], opts:["ten","nine"], a:0, fix:"15 дутуу → ДАРААГИЙН цаг: quarter to ten."},
      {q:"Асуулт:", parts:["What ", " is it?"], opts:["time","hour"], a:0, fix:"Цаг асуух → What time is it?"},
      {q:"Цагийн угтвар:", parts:["The class starts ", " nine."], opts:["at","in"], a:0, fix:"Тодорхой цагт → at nine."}
    ],
    speak:{ scene:'Уулзалт товлох', turns:[
      {ruby:"Excuse me, what time is it?", pron:"икскьюз ми, вот тайм из ит?", mn:"Уучлаарай, хэд болж байна?",
        choices:[{t:"It is quarter past three.",best:true,mn:"3 цаг 15 минут болж байна."},{t:"Three fifteen is.",best:false,fix:"Дараалал: It is three fifteen / quarter past three."}]},
      {ruby:"Thanks! What time does the class start?", pron:"сэнкс! вот тайм даз зэ клас старт?", mn:"Баярлалаа! Хичээл хэдэн цагт эхэлдэг вэ?",
        choices:[{t:"It starts at half past three.",best:true,mn:"3 цаг хагаст эхэлдэг."},{t:"Half three start.",best:false,fix:"Бүтэн: It starts at half past three."}]},
      {ruby:"Oh! We have fifteen minutes.", pron:"оу! ви хэв фифтийн минитс.", mn:"Өө! Бидэнд 15 минут бий.",
        choices:[{t:"Let's have a quick coffee!",best:true,mn:"Түргэн кофе уучихъя!"},{t:"Ok wait.",best:false,fix:"Илүү: Let's have a quick coffee!"}]}
    ]}
  },
  {
    id:'a1m3l3', title:"3.3 Өглөөний дадал", level:"A1 · М3",
    blurb:"She goes, he watches — 3-р биеийн -s дүрэм",
    rule:{
      h:"Зорилго ба дүрэм: 3-р биеийн -s бичих дүрэм",
      html:`<b>🎯 Зорилго:</b> Бусдын дадлыг ярихдаа he/she/it дээр -s-ийг ЗӨВ БИЧИХ.<br><br>
        He/She/It дээр үйл үг -s авдгийг мэднэ. Гэхдээ <b>бичих дүрэм</b> нь 3 янз:
        <div style="margin:12px 0"><span class="tag">Ердийн: work → works, live → lives</span><span class="tag">-s/-sh/-ch/-x/-o → -es: watch → watches, go → goes</span><span class="tag">гийгүүлэгч + y → -ies: study → studies, fly → flies</span></div>
        <b>Анхаар:</b> эгшиг + y бол ердөө -s: play → plays (plaies ✗)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        wash /wɒʃ/ — угаах · brush /brʌʃ/ — сойзох · teeth /tiːθ/ — шүд<br>
        study /ˈstʌdi/ — судлах · fly /flaɪ/ — нисэх · carry /ˈkæri/ — зөөх<br>
        do /duː/ — хийх (does!) · try /traɪ/ — оролдох · early /ˈɜːrli/ — эрт · late /leɪt/ — оройтсон</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She studys» ✗ → studies. «He goe s» биш «He goes». «He watchs» ✗ → watches. Мөн «She plaies» ✗ → plays (эгшгийн ард y хэвээр).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ш, Ч, С, Кс, О — эдгээрийн ард ES ирнэ» (washes, watches, kisses, fixes, goes).</p>`
    },
    phrases:[
      {en:"She gets up at six.", pron:"ши гетс ап эт сикс.", mn:"Тэр 6 цагт боздог."},
      {en:"He washes his face.", pron:"хи вошиз хиз фэйс.", mn:"Тэр нүүрээ угаадаг."},
      {en:"My son brushes his teeth.", pron:"май сан брашиз хиз тийс.", mn:"Хүү маань шүдээ угаадаг."},
      {en:"She studies English every morning.", pron:"ши стадиз Инглиш эври морнинг.", mn:"Тэр өглөө бүр англи хэл сурдаг."},
      {en:"He goes to school by bus.", pron:"хи гоуз ту скүл бай бас.", mn:"Тэр автобусаар сургуульдаа явдаг."}
    ],
    exercises:[
      {q:"Зөв бичлэг:", parts:["She ", " to work by car."], opts:["goes","gos"], a:0, fix:"-o төгсгөл → goes."},
      {q:"Зөв бичлэг:", parts:["He ", " TV in the evening."], opts:["watches","watchs"], a:0, fix:"-ch → watches."},
      {q:"Зөв бичлэг:", parts:["My daughter ", " English."], opts:["studies","studys"], a:0, fix:"гийгүүлэгч+y → studies."},
      {q:"Зөв бичлэг:", parts:["He ", " football on Sunday."], opts:["plays","plaies"], a:0, fix:"эгшиг+y → plays."}
    ],
    speak:{ scene:'Хүүхдийн өглөө', turns:[
      {ruby:"What time does your son get up?", pron:"вот тайм даз ёр сан гет ап?", mn:"Хүү тань хэдэн цагт боздог вэ?",
        choices:[{t:"He gets up at seven.",best:true,mn:"Тэр 7 цагт боздог."},{t:"He get up seven.",best:false,fix:"He → getS up AT seven."}]},
      {ruby:"What does he do after that?", pron:"вот даз хи ду афтэр зэт?", mn:"Дараа нь юу хийдэг вэ?",
        choices:[{t:"He washes his face and brushes his teeth.",best:true,mn:"Нүүрээ угааж, шүдээ угаадаг."},{t:"He wash face, brush teeth.",best:false,fix:"He → washES, brushES."}]},
      {ruby:"Does he go to school by bus?", pron:"даз хи гоу ту скүл бай бас?", mn:"Автобусаар сургуульдаа явдаг уу?",
        choices:[{t:"No, he walks. The school is near.",best:true,mn:"Үгүй, алхдаг. Сургууль ойрхон."},{t:"No, he walk.",best:false,fix:"He → walkS."}]}
    ]}
  },
  {
    id:'a1m3l4', title:"3.4 Ажлын өдөр", level:"A1 · М3",
    blurb:"at 7, in the morning, on Monday — цагийн угтвар",
    rule:{
      h:"Зорилго ба дүрэм: at / in / on (цаг)",
      html:`<b>🎯 Зорилго:</b> Ажлын өдрөө ярихдаа at/in/on-ыг зөв сонгох.<br><br>
        Цагийн угтвар үгийг <b>хэмжээгээр</b> нь сонгоно — жижгээс томд:
        <div style="margin:12px 0"><span class="tag">AT — цаг цэг: at 7 o'clock, at noon, at night</span><span class="tag">ON — өдөр/огноо: on Monday, on July 5</span><span class="tag">IN — урт хугацаа: in the morning, in July, in 2026</span></div>
        <b>Онцгой:</b> at night (in the night ✗), on Monday morning (өдөр нэрлэвэл ON!)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        Monday /ˈmʌndeɪ/ — Даваа · Tuesday /ˈtuːzdeɪ/ — Мягмар · Wednesday /ˈwenzdeɪ/ — Лхагва<br>
        Thursday /ˈθɜːrzdeɪ/ — Пүрэв · Friday /ˈfraɪdeɪ/ — Баасан · Saturday /ˈsætərdeɪ/ — Бямба<br>
        Sunday /ˈsʌndeɪ/ — Ням · weekday /ˈwiːkdeɪ/ — ажлын өдөр · weekend /ˈwiːkend/ — амралтын өдөр · meeting /ˈmiːtɪŋ/ — уулзалт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «in Monday» ✗ → <b>on</b> Monday. «at the morning» ✗ → <b>in</b> the morning. «in night» ✗ → <b>at</b> night (энэ нь онцгой тохиолдол!). Мөн долоо хоногийн өдөр ҮРГЭЛЖ том үсгээр: Monday, Friday.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «AT цэг · ON өдөр · IN уртад» — at 7 (цэг), on Monday (өдөр), in July (урт).</p>`
    },
    phrases:[
      {en:"I start work at nine in the morning.", pron:"ай старт вөрк эт найн ин зэ морнинг.", mn:"Би өглөө 9 цагт ажлаа эхэлдэг."},
      {en:"We have a meeting on Monday.", pron:"ви хэв э мийтинг он мандэй.", mn:"Бид Даваа гарагт уулзалттай."},
      {en:"I don't work on Sunday.", pron:"ай доунт вөрк он сандэй.", mn:"Би Ням гарагт ажилладаггүй."},
      {en:"She reads at night.", pron:"ши ридз эт найт.", mn:"Тэр шөнө ном уншдаг."},
      {en:"My birthday is in July.", pron:"май бөрсдэй из ин жулай.", mn:"Миний төрсөн өдөр 7-р сард."}
    ],
    exercises:[
      {q:"Угтвар:", parts:["I get up ", " seven o'clock."], opts:["at","in"], a:0, fix:"Цаг цэг → at."},
      {q:"Угтвар:", parts:["We have class ", " Monday."], opts:["on","in"], a:0, fix:"Өдөр → on."},
      {q:"Угтвар:", parts:["I study ", " the evening."], opts:["in","at"], a:0, fix:"the evening → in."},
      {q:"Угтвар (онцгой):", parts:["She works ", " night."], opts:["at","in"], a:0, fix:"«night» онцгой → at night."}
    ],
    speak:{ scene:'Ажлын хуваарь', turns:[
      {ruby:"What time do you start work?", pron:"вот тайм ду ю старт вөрк?", mn:"Хэдэн цагт ажлаа эхэлдэг вэ?",
        choices:[{t:"I start at eight in the morning.",best:true,mn:"Өглөө 8 цагт эхэлдэг."},{t:"I start in eight morning.",best:false,fix:"at eight IN THE morning."}]},
      {ruby:"Do you work on Saturday?", pron:"ду ю вөрк он сэтэрдэй?", mn:"Бямба гарагт ажилладаг уу?",
        choices:[{t:"No, I don't. I rest on the weekend.",best:true,mn:"Үгүй. Амралтын өдөр амардаг."},{t:"No, in Saturday no.",best:false,fix:"on Saturday + богино хариулт: No, I don't."}]},
      {ruby:"Lucky you! What do you do on Sunday?", pron:"лаки ю! вот ду ю ду он сандэй?", mn:"Азтай юмаа! Ням гарагт юу хийдэг вэ?",
        choices:[{t:"I spend time with my family.",best:true,mn:"Гэр бүлтэйгээ цагийг өнгөрөөдөг."},{t:"Family time.",best:false,fix:"Үйл үгтэй: I spend time with my family."}]}
    ]}
  },
  {
    id:'a1m3l5', title:"3.5 Сургууль", level:"A1 · М3",
    blurb:"What? When? Where? — Wh-асуулт",
    rule:{
      h:"Зорилго ба дүрэм: Wh-асуултууд",
      html:`<b>🎯 Зорилго:</b> Мэдээлэл авах асуултуудыг (Wh-questions) зөв бүтээх.<br><br>
        <b>Асуух үгс:</b>
        <div style="margin:12px 0"><span class="tag">What = юу</span><span class="tag">When = хэзээ</span><span class="tag">Where = хаана</span><span class="tag">Who = хэн</span><span class="tag">Why = яагаад</span><span class="tag">How = яаж</span></div>
        <b>Бүтэц:</b> Wh + do/does + эзэн + үйл үг?
        <div style="margin:12px 0"><span class="tag">Where do you live?</span><span class="tag">When does she study?</span><span class="tag">Why do you like it?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        class /klæs/ — хичээл/анги · classroom /ˈklæsruːm/ — анги танхим · subject /ˈsʌbdʒɪkt/ — хичээл (сэдэв)<br>
        math /mæθ/ — математик · homework /ˈhoʊmwɜːrk/ — гэрийн даалгавар · test /test/ — шалгалт<br>
        break /breɪk/ — завсарлага · learn /lɜːrn/ — сурах · answer /ˈænsər/ — хариулах · question /ˈkwestʃən/ — асуулт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Where you live?» ✗ — do хэрэгтэй: <b>Where DO you live?</b> Мөн «Where does she lives?» ✗ — does аваад -s зугтдаг: Where does she LIVE?</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Wh + DO/DOES + хэн + юу хийх» — 4 нүд дараалуулж бод.</p>`
    },
    phrases:[
      {en:"Where do you study?", pron:"вэр ду ю стади?", mn:"Та хаана суралцдаг вэ?"},
      {en:"When does the class start?", pron:"вэн даз зэ клас старт?", mn:"Хичээл хэзээ эхэлдэг вэ?"},
      {en:"What subject do you like?", pron:"вот сабжэкт ду ю лайк?", mn:"Ямар хичээлд дуртай вэ?"},
      {en:"Who is your teacher?", pron:"хү из ёр тийчэр?", mn:"Багш тань хэн бэ?"},
      {en:"Why do you learn English?", pron:"вай ду ю лөрн Инглиш?", mn:"Яагаад англи хэл сурдаг вэ?"}
    ],
    exercises:[
      {q:"Асуух үг:", parts:["", " do you live? — In Ulaanbaatar."], opts:["Where","What"], a:0, fix:"Газар → Where."},
      {q:"Асуух үг:", parts:["", " does the class start? — At nine."], opts:["When","Who"], a:0, fix:"Цаг → When."},
      {q:"do хэрэгтэй:", parts:["Where ", " you work?"], opts:["do","are"], a:0, fix:"Present Simple асуулт → do."},
      {q:"-s байх уу:", parts:["When does she ", "?"], opts:["study","studies"], a:0, fix:"does-ийн ард үндсэн хэлбэр → study."}
    ],
    speak:{ scene:'Сургуулийн тухай', turns:[
      {ruby:"Where does your daughter study?", pron:"вэр даз ёр дотэр стади?", mn:"Охин тань хаана суралцдаг вэ?",
        choices:[{t:"She studies at School No. 4.",best:true,mn:"Тэр 4-р сургуульд сурдаг."},{t:"She study school 4.",best:false,fix:"She → studieS + at."}]},
      {ruby:"What subject does she like?", pron:"вот сабжэкт даз ши лайк?", mn:"Ямар хичээлд дуртай вэ?",
        choices:[{t:"She likes math and English.",best:true,mn:"Математик, англи хэлэнд дуртай."},{t:"Math, English.",best:false,fix:"Бүтэн: She likes math and English."}]},
      {ruby:"Why does she like English?", pron:"вай даз ши лайк Инглиш?", mn:"Яагаад англи хэлэнд дуртай вэ?",
        choices:[{t:"Because she wants to travel.",best:true,mn:"Учир нь аялахыг хүсдэг."},{t:"She want travel.",best:false,fix:"Because she wantS to travel."}]}
    ]}
  },
  {
    id:'a1m3l6', title:"3.6 Давтамж", level:"A1 · М3",
    blurb:"always, usually, never — давтамжийн үг",
    rule:{
      h:"Зорилго ба дүрэм: давтамжийн дайвар үг ба байрлал",
      html:`<b>🎯 Зорилго:</b> Хэр олон удаа хийдгээ хэлж, давтамжийн үгийг ЗӨВ БАЙРАНД тавих.<br><br>
        <b>Давтамжийн шат (100% → 0%):</b>
        <div style="margin:12px 0"><span class="tag">always 100%</span><span class="tag">usually 90%</span><span class="tag">often 70%</span><span class="tag">sometimes 50%</span><span class="tag">rarely 10%</span><span class="tag">never 0%</span></div>
        <b>Байрлалын алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">Ердийн үйл үгийн ӨМНӨ: I always get up early</span><span class="tag">be-ийн АРД: She is always late</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        always /ˈɔːlweɪz/ — үргэлж · usually /ˈjuːʒuəli/ — ихэвчлэн · often /ˈɒfn/ — байнга<br>
        sometimes /ˈsʌmtaɪmz/ — заримдаа · rarely /ˈrerli/ — ховор · never /ˈnevər/ — хэзээ ч үгүй<br>
        every day /ˈevri deɪ/ — өдөр бүр · once /wʌns/ — нэг удаа · twice /twaɪs/ — хоёр удаа · week /wiːk/ — долоо хоног</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I get up always early» ✗ → I ALWAYS get up early (үйл үгийн өмнө!). Мөн «never» аль хэдийн үгүйсгэсэн — «I don't never» ✗ → <b>I never drink coffee</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ердийн үйл үгийн ӨМНӨ, be-ийн АРД» — I always work / I am always busy.</p>`
    },
    phrases:[
      {en:"I always get up at six.", pron:"ай олвэйз гет ап эт сикс.", mn:"Би үргэлж 6 цагт боздог."},
      {en:"She usually walks to work.", pron:"ши южуэли вокс ту вөрк.", mn:"Тэр ихэвчлэн ажилдаа алхдаг."},
      {en:"We sometimes eat out.", pron:"ви самтаймз ийт аут.", mn:"Бид заримдаа гадуур хооллодог."},
      {en:"He is always late.", pron:"хи из олвэйз лэйт.", mn:"Тэр үргэлж хоцордог."},
      {en:"I never drink coffee at night.", pron:"ай нэвэр дринк кофи эт найт.", mn:"Би шөнө хэзээ ч кофе уудаггүй."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["I ", " get up early."], opts:["always","get up always"], a:0, fix:"Үйл үгийн өмнө → I always get up."},
      {q:"be-тэй байрлал:", parts:["She is ", " busy."], opts:["always","always is"], a:0, fix:"be-ийн ард → She is always busy."},
      {q:"Давтамж:", parts:["I ", " eat meat. (0%)"], opts:["never","always"], a:0, fix:"0% → never."},
      {q:"Зөв эсэх:", parts:["I ", " coffee at night."], opts:["never drink","don't never drink"], a:0, fix:"never дангаараа үгүйсгэнэ."}
    ],
    speak:{ scene:'Дадлын тухай', turns:[
      {ruby:"Do you exercise?", pron:"ду ю эксэрсайз?", mn:"Та дасгал хийдэг үү?",
        choices:[{t:"Yes, I usually run in the morning.",best:true,mn:"Тийм, ихэвчлэн өглөө гүйдэг."},{t:"Yes, I run usually morning.",best:false,fix:"I USUALLY run IN THE morning."}]},
      {ruby:"Nice! Do you drink coffee?", pron:"найс! ду ю дринк кофи?", mn:"Кофе уудаг уу?",
        choices:[{t:"I sometimes drink it, but never at night.",best:true,mn:"Заримдаа уудаг ч шөнө хэзээ ч үгүй."},{t:"I drink sometimes, don't never night.",best:false,fix:"I sometimes drink it, but never at night."}]},
      {ruby:"Are you always so healthy?", pron:"а ю олвэйз соу хэлси?", mn:"Та үргэлж ийм эрүүл байдаг уу?",
        choices:[{t:"No! I am often lazy on weekends.",best:true,mn:"Үгүй! Амралтын өдөр байнга залхуу байдаг."},{t:"No, I often am lazy.",best:false,fix:"be-ийн ард: I am often lazy."}]}
    ]}
  },
  {
    id:'a1m3l7', title:"3.7 Дуртай өдөр", level:"A1 · М3",
    blurb:"I don't work — don't / doesn't",
    rule:{
      h:"Зорилго ба дүрэм: үгүйсгэл don't / doesn't",
      html:`<b>🎯 Зорилго:</b> «Хийдэггүй» гэдгээ хэлж, дуртай өдрөө дүрслэх.<br><br>
        Present Simple-ийн үгүйсгэл:
        <div style="margin:12px 0"><span class="tag">I / You / We / They + don't + үйл үг</span><span class="tag">He / She / It + doesn't + үйл үг</span></div>
        <b>Алтан дүрэм:</b> doesn't аль хэдийн -s-ийг «авчихсан» тул үйл үг НҮЦГЭН:
        <div style="margin:12px 0"><span class="tag">She doesn't work ✓</span><span class="tag">She doesn't works ✗</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        favorite /ˈfeɪvərɪt/ — дуртай · relax /rɪˈlæks/ — амрах · sleep /sliːp/ — унтах<br>
        stay /steɪ/ — байх/үлдэх · clean /kliːn/ — цэвэрлэх · visit /ˈvɪzɪt/ — очих<br>
        cook /kʊk/ — хоол хийх · rest /rest/ — амрах · free /friː/ — чөлөөтэй · enjoy /ɪnˈdʒɔɪ/ — таашаах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I no work» ✗ (испани/орос маягийн) → <b>I don't work</b>. «She don't like» ✗ → <b>She doesn't like</b> (ганц хүн!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «DOESN'T ирэхэд S зугтдаг» — He doesn't work (worksгүй).</p>`
    },
    phrases:[
      {en:"Sunday is my favorite day.", pron:"сандэй из май фэйворит дэй.", mn:"Ням гараг миний дуртай өдөр."},
      {en:"I don't work on Sunday.", pron:"ай доунт вөрк он сандэй.", mn:"Би Ням гарагт ажилладаггүй."},
      {en:"I don't get up early.", pron:"ай доунт гет ап өрли.", mn:"Би эрт боздоггүй."},
      {en:"My husband doesn't cook.", pron:"май хазбэнд дазнт күк.", mn:"Нөхөр маань хоол хийдэггүй."},
      {en:"We just stay home and relax.", pron:"ви жаст стэй хоум энд рилэкс.", mn:"Бид зүгээр гэртээ байж амардаг."}
    ],
    exercises:[
      {q:"Үгүйсгэл:", parts:["I ", " work on Sunday."], opts:["don't","doesn't"], a:0, fix:"I → don't."},
      {q:"Үгүйсгэл:", parts:["She ", " like coffee."], opts:["doesn't","don't"], a:0, fix:"She → doesn't."},
      {q:"-s байх уу:", parts:["He doesn't ", " here."], opts:["live","lives"], a:0, fix:"doesn't-ийн ард → live."},
      {q:"Зөв эсэх:", parts:["I ", " early on Sunday."], opts:["don't get up","no get up"], a:0, fix:"Үгүйсгэл → don't + үйл үг."}
    ],
    speak:{ scene:'Амралтын өдөр', turns:[
      {ruby:"What is your favorite day?", pron:"вот из ёр фэйворит дэй?", mn:"Дуртай өдөр тань аль вэ?",
        choices:[{t:"Sunday, because I don't work.",best:true,mn:"Ням гараг, учир нь ажилладаггүй."},{t:"Sunday, I no work.",best:false,fix:"Үгүйсгэл: I don't work."}]},
      {ruby:"What do you do on Sunday?", pron:"вот ду ю ду он сандэй?", mn:"Ням гарагт юу хийдэг вэ?",
        choices:[{t:"I don't get up early. I rest and cook.",best:true,mn:"Эрт боздоггүй. Амарч, хоол хийдэг."},{t:"I not get up early.",best:false,fix:"I DON'T get up early."}]},
      {ruby:"Does your husband help you?", pron:"даз ёр хазбэнд хэлп ю?", mn:"Нөхөр тань тусалдаг уу?",
        choices:[{t:"He doesn't cook, but he cleans!",best:true,mn:"Хоол хийдэггүй ч цэвэрлэдэг!"},{t:"He doesn't cooks.",best:false,fix:"doesn't + cook (s-гүй)."}]}
    ]}
  },
  {
    id:'a1m3l8', title:"3.8 Асуулт хариулт", level:"A1 · М3",
    blurb:"How often...? — давтамж асуух",
    rule:{
      h:"Зорилго ба дүрэм: How often + богино хариулт",
      html:`<b>🎯 Зорилго:</b> «Хэр олон удаа?» гэж асууж, богино хариултаар хариулах.<br><br>
        <b>How often...?</b> = хэр олон удаа?
        <div style="margin:12px 0"><span class="tag">How often do you exercise?</span><span class="tag">— Three times a week.</span></div>
        <b>Давтамжийн хариултууд:</b>
        <div style="margin:12px 0"><span class="tag">once a day = өдөрт нэг удаа</span><span class="tag">twice a week = долоо хоногт хоёр удаа</span><span class="tag">three times a month = сард гурван удаа</span></div>
        <b>Богино хариулт:</b> Yes, I do. / No, I don't. / Yes, she does. / No, he doesn't.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        how often /haʊ ˈɒfn/ — хэр олон удаа · times /taɪmz/ — удаа · month /mʌnθ/ — сар<br>
        year /jɪr/ — жил · daily /ˈdeɪli/ — өдөр тутмын · weekly /ˈwiːkli/ — долоо хоног тутмын<br>
        exercise /ˈeksərsaɪz/ — дасгал хийх · practice /ˈpræktɪs/ — дадлагажих · usually /ˈjuːʒuəli/ — ихэвчлэн · about /əˈbaʊt/ — орчим</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «two times a week» гэж болох ч төрөлх хэлтэн <b>twice a week</b> гэдэг. «one time a day» ✗ → <b>once a day</b>. Мөн «in a week» ✗ → <b>a week</b> (twice A week).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «1 = once, 2 = twice, 3-аас дээш = ...times» (three times, four times).</p>`
    },
    phrases:[
      {en:"How often do you study English?", pron:"хау офн ду ю стади Инглиш?", mn:"Хэр олон удаа англи хэл сурдаг вэ?"},
      {en:"Every day, about one hour.", pron:"эври дэй, эбаут ван ауэр.", mn:"Өдөр бүр, нэг цаг орчим."},
      {en:"I exercise twice a week.", pron:"ай эксэрсайз твайс э вийк.", mn:"Би долоо хоногт хоёр удаа дасгал хийдэг."},
      {en:"Does she visit her parents often?", pron:"даз ши визит хёр пэрэнтс офн?", mn:"Тэр эцэг эх дээрээ байнга очдог уу?"},
      {en:"Yes, she does. Once a month.", pron:"ес, ши даз. ванс э манс.", mn:"Тийм. Сард нэг удаа."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["How ", " do you exercise?"], opts:["often","many"], a:0, fix:"Давтамж → How often."},
      {q:"1 удаа:", parts:["I take the medicine ", " a day."], opts:["once","one time"], a:0, fix:"1 → once."},
      {q:"2 удаа:", parts:["We meet ", " a month."], opts:["twice","two times"], a:0, fix:"2 → twice (илүү жам ёсны)."},
      {q:"Богино хариулт:", parts:["Does she work here? — Yes, she ", "."], opts:["does","do"], a:0, fix:"she → does."}
    ],
    speak:{ scene:'Дадал асуух', turns:[
      {ruby:"How often do you study English?", pron:"хау офн ду ю стади Инглиш?", mn:"Хэр олон удаа англи сурдаг вэ?",
        choices:[{t:"Every day, about thirty minutes.",best:true,mn:"Өдөр бүр, 30 минут орчим."},{t:"Every days.",best:false,fix:"every DAY (ганц тоо)."}]},
      {ruby:"Great! Do you practice speaking?", pron:"грэйт! ду ю прэктис спийкинг?", mn:"Ярих дадлага хийдэг үү?",
        choices:[{t:"Yes, I do. I talk with you twice a week!",best:true,mn:"Тийм. Тантай долоо хоногт хоёр удаа ярьдаг!"},{t:"Yes, I practice two times in week.",best:false,fix:"twice A week (in-гүй)."}]},
      {ruby:"That is why you are improving!", pron:"зэт из вай ю а импрувинг!", mn:"Тиймээс л та ахиж байгаа юм!",
        choices:[{t:"Thank you! I want to speak better.",best:true,mn:"Баярлалаа! Илүү сайн ярихыг хүсэж байна."},{t:"Yes improving.",best:false,fix:"Бүтэн: Thank you! I want to speak better."}]}
    ]}
  },
  {
    id:'a1m3l9', title:"3.9 Өдрийн тэмдэглэл", level:"A1 · М3",
    blurb:"First, then, after that — дараалал",
    rule:{
      h:"Зорилго ба дүрэм: дарааллын холбоос үгс",
      html:`<b>🎯 Зорилго:</b> Өдрийнхөө үйл явдлыг ДАРААЛАЛТАЙ өгүүлж бичих.<br><br>
        <b>Дарааллын үгс:</b>
        <div style="margin:12px 0"><span class="tag">First = эхлээд</span><span class="tag">Then = дараа нь</span><span class="tag">After that = түүний дараа</span><span class="tag">Finally = эцэст нь</span><span class="tag">before/after = өмнө/дараа</span></div>
        <b>First I get up. Then I have breakfast. After that I go to work. Finally I come home.</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        first /fɜːrst/ — эхлээд · then /ðen/ — дараа нь · after /ˈæftər/ — дараа<br>
        before /bɪˈfɔːr/ — өмнө · finally /ˈfaɪnəli/ — эцэст нь · next /nekst/ — дараагийн<br>
        diary /ˈdaɪəri/ — тэмдэглэл · write /raɪt/ — бичих · busy /ˈbɪzi/ — завгүй · tired /ˈtaɪərd/ — ядарсан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «After that, I go» дараа таслал тавина. Мөн «before» / «after» ард үйл үг бол -ing: <b>after having breakfast</b>. Энгийнээр эхлэхэд: After that, I have breakfast.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Бичихдээ 4 үгээр цуваа хий: <b>First → Then → After that → Finally</b>.</p>`
    },
    phrases:[
      {en:"First, I wake up at six.", pron:"фөрст, ай вэйк ап эт сикс.", mn:"Эхлээд би 6 цагт сэрдэг."},
      {en:"Then I take a shower.", pron:"зэн ай тэйк э шауэр.", mn:"Дараа нь шүршүүрт ордог."},
      {en:"After that, I have breakfast.", pron:"афтэр зэт, ай хэв брэкфаст.", mn:"Түүний дараа өглөөний хоол иддэг."},
      {en:"Finally, I go to bed at ten.", pron:"файнали, ай гоу ту бэд эт тэн.", mn:"Эцэст нь 10 цагт унтдаг."},
      {en:"I am always tired after work.", pron:"ай эм олвэйз тайэрд афтэр вөрк.", mn:"Ажлын дараа үргэлж ядардаг."}
    ],
    exercises:[
      {q:"Дараалал:", parts:["", ", I get up. (эхлээд)"], opts:["First","Finally"], a:0, fix:"Эхлээд → First."},
      {q:"Дараалал:", parts:["", " I have breakfast. (дараа нь)"], opts:["Then","Before"], a:0, fix:"Дараа нь → Then."},
      {q:"Дараалал:", parts:["", ", I go to bed. (эцэст нь)"], opts:["Finally","First"], a:0, fix:"Эцэст нь → Finally."},
      {q:"Өмнө/дараа:", parts:["I brush my teeth ", " breakfast."], opts:["after","then"], a:0, fix:"Хоолны дараа → after breakfast."}
    ],
    speak:{ scene:'Өдрөө өгүүлэх', turns:[
      {ruby:"Tell me about your morning.", pron:"тэл ми эбаут ёр морнинг.", mn:"Өглөөнийхөө тухай яриач.",
        choices:[{t:"First, I get up at six. Then I take a shower.",best:true,mn:"Эхлээд 6 цагт боздог. Дараа нь шүршүүрт ордог."},{t:"I get up, shower.",best:false,fix:"Дараалал ашигла: First... Then..."}]},
      {ruby:"And after that?", pron:"энд афтэр зэт?", mn:"Түүний дараа?",
        choices:[{t:"After that, I have breakfast and go to work.",best:true,mn:"Түүний дараа өглөөний хоол идээд ажилдаа явдаг."},{t:"After breakfast work.",best:false,fix:"Бүтэн: After that, I have breakfast and go to work."}]},
      {ruby:"You are busy! When do you rest?", pron:"ю а бизи! вэн ду ю рэст?", mn:"Та завгүй юм! Хэзээ амардаг вэ?",
        choices:[{t:"Finally, in the evening. I am always tired!",best:true,mn:"Эцэст нь орой. Үргэлж ядардаг!"},{t:"Evening tired.",best:false,fix:"Бүтэн: In the evening. I am always tired!"}]}
    ]}
  },
  {
    id:'a1m3l10', title:"3.10 Модулийн төсөл", level:"A1 · М3",
    blurb:"🏆 Миний нэг өдөр — бүрэн өгүүлэх",
    rule:{
      h:"Давтлага: Модуль 3-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 3-ын мэдлэгээ нэгтгэж, «Миний нэг өдөр»-ийг бүрэн өгүүлэх.<br><br>
        <b>Модуль 3-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">get up / have breakfast</span><span class="tag">half past seven</span><span class="tag">goes / watches / studies</span><span class="tag">at 7 · on Monday · in July</span><span class="tag">Where do you...?</span><span class="tag">always / usually / never</span><span class="tag">don't / doesn't</span><span class="tag">How often...?</span><span class="tag">First → Then → Finally</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Миний нэг өдөр (10+ өгүүлбэр):</b> цаг, дараалал, давтамж, үгүйсгэл бүгдийг ашигла. Жишээ:<br>
        <i>I usually get up at half past six. First, I wash my face and brush my teeth. Then I have breakfast with my family. I go to work at eight in the morning. I don't take the bus — I walk, because my office is near. I finish work at six. After that, I cook dinner. I never watch TV late. Finally, I go to bed at ten. On Sunday, I don't work. It is my favorite day!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өдрийн 3 давхар: <b>ЦАГ</b> (at seven) + <b>ДАВТАМЖ</b> (usually) + <b>ДАРААЛАЛ</b> (first, then) — гурвыг нийлүүлбэл жинхэнэ өгүүлэмж болно.</p>`
    },
    phrases:[
      {en:"Let me tell you about my day.", pron:"лет ми тэл ю эбаут май дэй.", mn:"Өдрийнхөө тухай ярьж өгье."},
      {en:"I usually get up at half past six.", pron:"ай южуэли гет ап эт хаф паст сикс.", mn:"Би ихэвчлэн 6:30-д боздог."},
      {en:"My husband doesn't get up early.", pron:"май хазбэнд дазнт гет ап өрли.", mn:"Нөхөр маань эрт боздоггүй."},
      {en:"I never watch TV late at night.", pron:"ай нэвэр воч тиви лэйт эт найт.", mn:"Би шөнө оройтож ТВ хэзээ ч үздэггүй."},
      {en:"On Sunday, I rest with my family.", pron:"он сандэй, ай рэст виз май фэмили.", mn:"Ням гарагт гэр бүлтэйгээ амардаг."}
    ],
    exercises:[
      {q:"Давтлага (-s):", parts:["She ", " to work by bus."], opts:["goes","go"], a:0, fix:"She → goes."},
      {q:"Давтлага (угтвар):", parts:["We have a meeting ", " Friday."], opts:["on","in"], a:0, fix:"Өдөр → on Friday."},
      {q:"Давтлага (байрлал):", parts:["I ", " drink coffee at night."], opts:["never","don't never"], a:0, fix:"never дангаараа үгүйсгэнэ."},
      {q:"Давтлага (үгүйсгэл):", parts:["He ", " work on Sunday."], opts:["doesn't","don't"], a:0, fix:"He → doesn't."}
    ],
    speak:{ scene:'🏆 Төсөл: Миний нэг өдөр', turns:[
      {ruby:"Describe your typical day for me!", pron:"дискрайб ёр типикл дэй фор ми!", mn:"Ердийн өдрөө надад дүрслээч!",
        choices:[{t:"I usually get up at half past six. First, I have breakfast.",best:true,mn:"Ихэвчлэн 6:30-д боздог. Эхлээд өглөөний хоол иддэг."},{t:"I get up 6:30. Breakfast.",best:false,fix:"Цаг + давтамж + дараалал: I usually get up AT half past six. First, ..."}]},
      {ruby:"What do you do after breakfast?", pron:"вот ду ю ду афтэр брэкфаст?", mn:"Өглөөний хоолны дараа юу хийдэг вэ?",
        choices:[{t:"Then I go to work at eight. I don't take the bus, I walk.",best:true,mn:"Дараа нь 8 цагт ажилдаа явдаг. Автобусанд суудаггүй, алхдаг."},{t:"Then work. No bus, walk.",best:false,fix:"Бүтэн: Then I go to work at eight. I don't take the bus."}]},
      {ruby:"And how does your day finish?", pron:"энд хау даз ёр дэй финиш?", mn:"Өдөр тань яаж дуусдаг вэ?",
        choices:[{t:"After that, I cook dinner. Finally, I go to bed at ten.",best:true,mn:"Түүний дараа оройн хоол хийдэг. Эцэст нь 10 цагт унтдаг."},{t:"Dinner, sleep ten.",best:false,fix:"Дараалал + бүтэн: After that... Finally, I go to bed at ten."}]}
    ]}
  },
  {
    id:'a1m4l1', title:"4.1 Өрөө тасалгаа", level:"A1 · М4",
    blurb:"a house / the house — артикль a/an vs the",
    rule:{
      h:"Зорилго ба дүрэм: a/an ба the ялгах",
      html:`<b>🎯 Зорилго:</b> Гэрийн өрөөнүүдийг нэрлэж, артиклийг (a/an vs the) зөв сонгох.<br><br>
        Монгол хэлэнд артикль байхгүй тул энэ бол хамгийн хэцүү сэдвийн нэг. <b>Алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">a/an — АНХ дурдахад (сонсогч мэдэхгүй)</span><span class="tag">the — ДАХИН дурдахад, эсвэл аль нь болох нь тодорхой</span></div>
        <b>I live in a house. The house is very old.</b><br>
        (Эхлээд «нэг байшин» — сонсогч мэдэхгүй. Дараа нь «тэр байшин» — аль нь болох нь тодорхой боллоо.)
        <div style="margin:12px 0"><span class="tag">Гэр дотор ганцхан байдаг юм → the: the kitchen, the bathroom</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        house /haʊs/ — байшин · apartment /əˈpɑːrtmənt/ — орон сууц · room /ruːm/ — өрөө<br>
        kitchen /ˈkɪtʃɪn/ — гал тогоо · bedroom /ˈbedruːm/ — унтлагын өрөө · bathroom /ˈbæθruːm/ — угаалгын өрөө<br>
        living room /ˈlɪvɪŋ ruːm/ — зочны өрөө · door /dɔːr/ — хаалга · window /ˈwɪndoʊ/ — цонх · floor /flɔːr/ — шал/давхар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Артиклийг бүр мөсөн орхих нь монгол суралцагчийн №1 алдаа: «I live in apartment» ✗ → <b>I live in AN apartment</b>. Мөн эсрэгээр хэтрүүлэх: «I go to the home» ✗ → <b>I go home</b> (артиклгүй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Анх уулзвал A, дахин уулзвал THE» — a house → the house.</p>`
    },
    phrases:[
      {en:"I live in an apartment.", pron:"ай лив ин эн эпартмэнт.", mn:"Би орон сууцанд амьдардаг."},
      {en:"The apartment has three rooms.", pron:"зэ эпартмэнт хэз срий румз.", mn:"Тэр орон сууц гурван өрөөтэй."},
      {en:"The kitchen is small but nice.", pron:"зэ кичэн из смол бат найс.", mn:"Гал тогоо жижиг ч гоё."},
      {en:"There is a big window in the living room.", pron:"зэр из э биг виндоу ин зэ ливинг рум.", mn:"Зочны өрөөнд том цонх бий."},
      {en:"My bedroom is on the second floor.", pron:"май бэдрум из он зэ сэконд флор.", mn:"Унтлагын өрөө маань 2 давхарт."}
    ],
    exercises:[
      {q:"Артикль:", parts:["I live in ", " apartment."], opts:["an","the"], a:0, fix:"Анх дурдаж байна + эгшиг → an apartment."},
      {q:"Артикль:", parts:["I have a house. ", " house is old."], opts:["The","A"], a:0, fix:"Дахин дурдаж байна → The house."},
      {q:"Артикль:", parts:["Mom is in ", " kitchen."], opts:["the","a"], a:0, fix:"Гэрт ганцхан гал тогоо → the kitchen."},
      {q:"Артикль:", parts:["I go ", " every evening."], opts:["home","to the home"], a:0, fix:"go home — артикльгүй онцгой хэллэг."}
    ],
    speak:{ scene:'Гэрийнхээ тухай', turns:[
      {ruby:"Do you live in a house or an apartment?", pron:"ду ю лив ин э хаус ор эн эпартмэнт?", mn:"Та байшинд амьдардаг уу, орон сууцанд уу?",
        choices:[{t:"I live in an apartment.",best:true,mn:"Би орон сууцанд амьдардаг."},{t:"I live in apartment.",best:false,fix:"Артикль мартав: in AN apartment."}]},
      {ruby:"How many rooms does it have?", pron:"хау мэни румз даз ит хэв?", mn:"Хэдэн өрөөтэй вэ?",
        choices:[{t:"It has two rooms. The kitchen is very small.",best:true,mn:"Хоёр өрөөтэй. Гал тогоо нь их жижиг."},{t:"Two rooms. Kitchen small.",best:false,fix:"Бүтэн: It has two rooms. THE kitchen is very small."}]},
      {ruby:"Do you like your apartment?", pron:"ду ю лайк ёр эпартмэнт?", mn:"Орон сууцандаа дуртай юу?",
        choices:[{t:"Yes! There is a big window in the living room.",best:true,mn:"Тийм! Зочны өрөөнд том цонхтой."},{t:"Yes, big window living room.",best:false,fix:"There is A big window IN THE living room."}]}
    ]}
  },
  {
    id:'a1m4l2', title:"4.2 Тавилга", level:"A1 · М4",
    blurb:"Is there a sofa? — there is/are асуулт, үгүйсгэл",
    rule:{
      h:"Зорилго ба дүрэм: there is/are — асуулт ба үгүйсгэл",
      html:`<b>🎯 Зорилго:</b> Тавилгаа нэрлэж, «байгаа эсэх»-ийг асууж, үгүйсгэх.<br><br>
        Модуль 1-д «There is a book» гэдгийг үзсэн. Одоо <b>3 хэлбэрийг бүтнээр</b>:
        <div style="margin:12px 0"><span class="tag">БАТЛАХ: There is a sofa. / There are two chairs.</span><span class="tag">ҮГҮЙСГЭХ: There isn't a TV. / There aren't any chairs.</span><span class="tag">АСУУХ: Is there a sofa? / Are there any chairs?</span></div>
        <b>Богино хариулт:</b> Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        sofa /ˈsoʊfə/ — буйдан · chair /tʃer/ — сандал · table /ˈteɪbl/ — ширээ<br>
        bed /bed/ — ор · desk /desk/ — бичгийн ширээ · shelf /ʃelf/ — тавиур<br>
        lamp /læmp/ — чийдэн · mirror /ˈmɪrər/ — толь · carpet /ˈkɑːrpɪt/ — хивс · furniture /ˈfɜːrnɪtʃər/ — тавилга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Have a sofa in the room?» ✗ (монголоор «...бий юу?» гэдгээс) → <b>Is there a sofa?</b> Мөн <b>furniture</b> тоологддоггүй: «two furnitures» ✗ → two pieces of furniture ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Байна уу? = IS THERE...?» — эхлээд IS, дараа нь THERE (эргэж байрлана).</p>`
    },
    phrases:[
      {en:"There is a sofa in the living room.", pron:"зэр из э соуфа ин зэ ливинг рум.", mn:"Зочны өрөөнд буйдан бий."},
      {en:"There are two beds in my bedroom.", pron:"зэр а ту бэдз ин май бэдрум.", mn:"Унтлагын өрөөнд хоёр ор бий."},
      {en:"Is there a table in the kitchen?", pron:"из зэр э тэйбл ин зэ кичэн?", mn:"Гал тогоонд ширээ бий юу?"},
      {en:"No, there isn't.", pron:"ноу, зэр изнт.", mn:"Үгүй, байхгүй."},
      {en:"There aren't any chairs here.", pron:"зэр арнт эни чэрз хийр.", mn:"Энд сандал байхгүй."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["", " a sofa in the room?"], opts:["Is there","Have"], a:0, fix:"Байна уу → Is there...?"},
      {q:"Олон:", parts:["", " three chairs here."], opts:["There are","There is"], a:0, fix:"Олон → There are."},
      {q:"Үгүйсгэл:", parts:["There ", " a TV in my room."], opts:["isn't","aren't"], a:0, fix:"Ганц → There isn't."},
      {q:"Богино хариулт:", parts:["Are there any beds? — Yes, there ", "."], opts:["are","is"], a:0, fix:"Are there → Yes, there are."}
    ],
    speak:{ scene:'Өрөө түрээслэх', turns:[
      {ruby:"This is the bedroom. Do you like it?", pron:"зис из зэ бэдрум. ду ю лайк ит?", mn:"Энэ унтлагын өрөө. Таалагдаж байна уу?",
        choices:[{t:"Yes! Is there a desk?",best:true,mn:"Тийм! Бичгийн ширээ бий юу?"},{t:"Yes! Have desk?",best:false,fix:"Байна уу → Is there a desk?"}]},
      {ruby:"Yes, there is. And there is a big shelf too.", pron:"ес, зэр из. энд зэр из э биг шэлф ту.", mn:"Тийм, бий. Том тавиур ч бас бий.",
        choices:[{t:"Are there any lamps?",best:true,mn:"Чийдэн бий юу?"},{t:"Lamps there?",best:false,fix:"Are there any lamps?"}]},
      {ruby:"No, there aren't. Sorry!", pron:"ноу, зэр арнт. сори!", mn:"Үгүй, байхгүй. Уучлаарай!",
        choices:[{t:"That's okay. I can buy one.",best:true,mn:"Зүгээр. Би нэгийг авч болно."},{t:"Bad.",best:false,fix:"Эелдэг: That's okay. I can buy one."}]}
    ]}
  },
  {
    id:'a1m4l3', title:"4.3 Байршил", level:"A1 · М4",
    blurb:"between, opposite, above — нарийн байршил",
    rule:{
      h:"Зорилго ба дүрэм: байршлын нарийн угтвар үгс",
      html:`<b>🎯 Зорилго:</b> Юмны байршлыг нарийн, тодорхой хэлэх.<br><br>
        Модуль 2-т in/on/under/next to үзсэн. Одоо <b>нарийн байршил</b>:
        <div style="margin:12px 0"><span class="tag">between = хоёрын хооронд</span><span class="tag">opposite = эсрэг талд</span><span class="tag">above = дээгүүр (хүрэлгүй)</span><span class="tag">below = доогуур</span><span class="tag">in the corner = буланд</span><span class="tag">in the middle = голд</span></div>
        <b>on vs above:</b> on = хүрч байна (on the table), above = дээгүүр өлгөөтэй (above the table).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        between /bɪˈtwiːn/ — хооронд · opposite /ˈɒpəzɪt/ — эсрэг талд · above /əˈbʌv/ — дээгүүр<br>
        below /bɪˈloʊ/ — доогуур · corner /ˈkɔːrnər/ — булан · middle /ˈmɪdl/ — гол<br>
        wall /wɔːl/ — хана · left /left/ — зүүн · right /raɪt/ — баруун · ceiling /ˈsiːlɪŋ/ — тааз</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «between the sofa and the table» — заавал <b>and</b>-тай хоёр юм! «between the chairs» гэвэл олон тоо шаардлагатай. Мөн ханан дээрх зурагт <b>on the wall</b> (in the wall ✗ — тэр нь хана дотор гэсэн үг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BETWEEN хоёрын дунд (AND-тай), ABOVE агаарт (хүрэхгүй), ON шүргэж байна».</p>`
    },
    phrases:[
      {en:"The table is between the sofa and the window.", pron:"зэ тэйбл из битвийн зэ соуфа энд зэ виндоу.", mn:"Ширээ буйдан цонх хоёрын хооронд байна."},
      {en:"There is a picture on the wall.", pron:"зэр из э пикчэр он зэ вол.", mn:"Ханан дээр зураг бий."},
      {en:"The lamp is above the table.", pron:"зэ лэмп из эбав зэ тэйбл.", mn:"Чийдэн ширээний дээгүүр байна."},
      {en:"My bed is in the corner.", pron:"май бэд из ин зэ корнэр.", mn:"Миний ор буланд байна."},
      {en:"The bathroom is opposite my bedroom.", pron:"зэ басрум из опозит май бэдрум.", mn:"Угаалгын өрөө унтлагын өрөөний эсрэг талд байна."}
    ],
    exercises:[
      {q:"Байршил:", parts:["The table is ", " the two chairs."], opts:["between","above"], a:0, fix:"Хоёрын дунд → between."},
      {q:"Байршил:", parts:["The picture is ", " the wall."], opts:["on","in"], a:0, fix:"Ханан дээр → on the wall."},
      {q:"Байршил:", parts:["The lamp hangs ", " the table."], opts:["above","on"], a:0, fix:"Дээгүүр өлгөөтэй → above."},
      {q:"Байршил:", parts:["The bed is in the ", "."], opts:["corner","between"], a:0, fix:"Буланд → in the corner."}
    ],
    speak:{ scene:'Өрөөгөө дүрслэх', turns:[
      {ruby:"Where is your bed?", pron:"вэр из ёр бэд?", mn:"Таны ор хаана байна?",
        choices:[{t:"It is in the corner, next to the window.",best:true,mn:"Буланд, цонхны хажууд байна."},{t:"Corner, window near.",best:false,fix:"Бүтэн: It is in the corner, next to the window."}]},
      {ruby:"Is there anything on the wall?", pron:"из зэр энисинг он зэ вол?", mn:"Ханан дээр юм бий юу?",
        choices:[{t:"Yes, there is a photo above my desk.",best:true,mn:"Тийм, бичгийн ширээний дээгүүр зураг бий."},{t:"Yes, photo in the wall.",best:false,fix:"ON the wall (in гэвэл хана дотор!)."}]},
      {ruby:"Sounds cozy! Where is the door?", pron:"саундз коузи! вэр из зэ дор?", mn:"Тухтай юм! Хаалга хаана байна?",
        choices:[{t:"It is opposite the window.",best:true,mn:"Цонхны эсрэг талд байна."},{t:"Front window.",best:false,fix:"Эсрэг талд → opposite the window."}]}
    ]}
  },
  {
    id:'a1m4l4', title:"4.4 Гэрийн эд зүйл", level:"A1 · М4",
    blurb:"How many? How much? — a lot of, a few",
    rule:{
      h:"Зорилго ба дүрэм: How many/much + тоо хэмжээ",
      html:`<b>🎯 Зорилго:</b> Хэдэн ширхэг / хэр их гэдгийг асууж, тоо хэмжээг хэлэх.<br><br>
        Модуль 2-т тоологддог/тоологддоггүйг үзсэн. Одоо тэрийг <b>асуулт болгоно</b>:
        <div style="margin:12px 0"><span class="tag">How many + олон тоо: How many chairs?</span><span class="tag">How much + тоологддоггүй: How much water?</span></div>
        <b>Тоо хэмжээний үгс:</b>
        <div style="margin:12px 0"><span class="tag">a lot of — их (хоёуланд)</span><span class="tag">a few — цөөн хэдэн (тоологдох)</span><span class="tag">a little — жаахан (тоологдохгүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        plate /pleɪt/ — таваг · cup /kʌp/ — аяга · spoon /spuːn/ — халбага<br>
        fridge /frɪdʒ/ — хөргөгч · stove /stoʊv/ — зуух · towel /ˈtaʊəl/ — алчуур<br>
        soap /soʊp/ — саван · thing /θɪŋ/ — юм · buy /baɪ/ — худалдаж авах · need /niːd/ — хэрэгтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How much chairs?» ✗ → тоологдох тул <b>How many chairs?</b> Мөн «a few water» ✗ → <b>a little water</b> (усыг тоолж болохгүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MANY — тооЛОЛТ (тоологдох). MUCH — хэмжээ (асгамал)». Few — 1,2,3... Little — жаахан ус.</p>`
    },
    phrases:[
      {en:"How many plates do you have?", pron:"хау мэни плэйтс ду ю хэв?", mn:"Хэдэн тавагтай вэ?"},
      {en:"How much water is in the bottle?", pron:"хау мач вотэр из ин зэ ботл?", mn:"Шилэнд хэр их ус байна?"},
      {en:"There are a lot of cups in the kitchen.", pron:"зэр а э лот ов капс ин зэ кичэн.", mn:"Гал тогоонд олон аяга бий."},
      {en:"I need a few towels.", pron:"ай нийд э фью тауэлз.", mn:"Надад хэдэн алчуур хэрэгтэй."},
      {en:"There is a little soap.", pron:"зэр из э литл соуп.", mn:"Жаахан саван бий."}
    ],
    exercises:[
      {q:"many/much:", parts:["How ", " chairs are there?"], opts:["many","much"], a:0, fix:"Тоологдох → How many."},
      {q:"many/much:", parts:["How ", " sugar do you need?"], opts:["much","many"], a:0, fix:"Тоологдохгүй → How much."},
      {q:"few/little:", parts:["I have a ", " plates."], opts:["few","little"], a:0, fix:"Тоологдох → a few plates."},
      {q:"few/little:", parts:["There is a ", " milk."], opts:["little","few"], a:0, fix:"Тоологдохгүй → a little milk."}
    ],
    speak:{ scene:'Дэлгүүрийн жагсаалт', turns:[
      {ruby:"We are moving! How many plates do we need?", pron:"ви а мувинг! хау мэни плэйтс ду ви нийд?", mn:"Нүүж байна! Хэдэн таваг хэрэгтэй вэ?",
        choices:[{t:"We need a few — maybe six.",best:true,mn:"Хэдэн ширхэг — 6 байх."},{t:"We need a little plates.",best:false,fix:"Тоологдох → a FEW plates."}]},
      {ruby:"Okay. How much soap should I buy?", pron:"оукэй. хау мач соуп шүд ай бай?", mn:"За. Хэр их саван авах вэ?",
        choices:[{t:"Just a little. We have some at home.",best:true,mn:"Жаахан. Гэртээ жаахан байгаа."},{t:"A few soap.",best:false,fix:"Тоологдохгүй → a LITTLE soap."}]},
      {ruby:"Is there anything else?", pron:"из зэр энисинг элс?", mn:"Өөр юм байна уу?",
        choices:[{t:"Yes, we need a lot of towels!",best:true,mn:"Тийм, олон алчуур хэрэгтэй!"},{t:"Yes, much towels.",best:false,fix:"Батлахад → a lot of towels."}]}
    ]}
  },
  {
    id:'a1m4l5', title:"4.5 Байгаа/байхгүй", level:"A1 · М4",
    blurb:"It's mine, not yours — эзэмшлийн төлөөний үг",
    rule:{
      h:"Зорилго ба дүрэм: mine, yours, hers — эзэмшлийн төлөөний үг",
      html:`<b>🎯 Зорилго:</b> «Минийх, чинийх» гэж товч хэлж, эзэмшлийг тодруулах.<br><br>
        Модуль 1-д my/your/his үзсэн (нэр үгийн ӨМНӨ). Одоо <b>дангаараа зогсдог</b> хэлбэр:
        <div style="margin:12px 0"><span class="tag">my book → mine</span><span class="tag">your book → yours</span><span class="tag">his book → his</span><span class="tag">her book → hers</span><span class="tag">our book → ours</span><span class="tag">their book → theirs</span></div>
        <b>This is my bag</b> (нэр үгтэй) ⟷ <b>This bag is mine</b> (дангаараа).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        mine /maɪn/ — минийх · yours /jʊrz/ — таных · hers /hɜːrz/ — түүнийх (эм)<br>
        ours /ˈaʊərz/ — бидний · theirs /ðerz/ — тэдний · own /oʊn/ — өөрийн<br>
        borrow /ˈbɒroʊ/ — зээлж авах · lend /lend/ — зээлдүүлэх · lose /luːz/ — алдах · find /faɪnd/ — олох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «This is mine book» ✗ — mine дангаараа: <b>This is my book</b> эсвэл <b>This book is mine</b>. Мөн «hers» дээр апостроф байхгүй: her's ✗ → <b>hers</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэр үгтэй бол MY, ганцаараа бол MINE» — my bag / it's mine.</p>`
    },
    phrases:[
      {en:"Is this bag yours?", pron:"из зис бэг ёрз?", mn:"Энэ цүнх таных уу?"},
      {en:"No, it isn't mine. It is hers.", pron:"ноу, ит изнт майн. ит из хёрз.", mn:"Үгүй, минийх биш. Түүнийх."},
      {en:"This room is ours.", pron:"зис рум из ауэрз.", mn:"Энэ өрөө биднийх."},
      {en:"Can I borrow your pen?", pron:"кэн ай бороу ёр пэн?", mn:"Үзэгээ зээлж болох уу?"},
      {en:"Those keys are theirs.", pron:"зоуз кийз а зэрз.", mn:"Тэр түлхүүрүүд тэднийх."}
    ],
    exercises:[
      {q:"Эзэмшил:", parts:["This bag is ", ". (миний)"], opts:["mine","my"], a:0, fix:"Дангаараа → mine."},
      {q:"Эзэмшил:", parts:["This is ", " bag. (миний)"], opts:["my","mine"], a:0, fix:"Нэр үгтэй → my bag."},
      {q:"Эзэмшил:", parts:["Is this phone ", "? (таных)"], opts:["yours","your"], a:0, fix:"Дангаараа → yours."},
      {q:"Эзэмшил:", parts:["That car is ", ". (тэдний)"], opts:["theirs","their"], a:0, fix:"Дангаараа → theirs."}
    ],
    speak:{ scene:'Юм олдох', turns:[
      {ruby:"I found a phone in the living room. Is it yours?", pron:"ай фаунд э фоун ин зэ ливинг рум. из ит ёрз?", mn:"Зочны өрөөнөөс утас олсон. Таных уу?",
        choices:[{t:"No, it isn't mine. Maybe it is my sister's.",best:true,mn:"Үгүй, минийх биш. Эгчийнх байх."},{t:"No, not mine phone.",best:false,fix:"It isn't mine (mine дангаараа)."}]},
      {ruby:"Let's ask her. Is this hers?", pron:"летс аск хёр. из зис хёрз?", mn:"Түүнээс асууя. Энэ түүнийх үү?",
        choices:[{t:"Yes, it is hers! She always loses her phone.",best:true,mn:"Тийм, түүнийх! Тэр үргэлж утсаа алддаг."},{t:"Yes, her's.",best:false,fix:"Апострофгүй → hers."}]},
      {ruby:"Ha! Then this room is a lucky room!", pron:"ха! зэн зис рум из э лаки рум!", mn:"Хө! Тэгвэл энэ өрөө азтай өрөө юм!",
        choices:[{t:"Yes, and it is ours!",best:true,mn:"Тийм, бас биднийх!"},{t:"Yes, our.",best:false,fix:"Дангаараа → ours."}]}
    ]}
  },
  {
    id:'a1m4l6', title:"4.6 Гэрээ дүрслэх", level:"A1 · М4",
    blurb:"a big old wooden house — тэмдэг нэрийн дараалал",
    rule:{
      h:"Зорилго ба дүрэм: тэмдэг нэрийн байрлал ба дараалал",
      html:`<b>🎯 Зорилго:</b> Гэрээ хэд хэдэн тэмдэг нэрээр дэлгэрэнгүй дүрслэх.<br><br>
        <b>1) Байрлал:</b> Англид тэмдэг нэр нэр үгийн ӨМНӨ ордог, монголтой адил:
        <div style="margin:12px 0"><span class="tag">a big house ✓</span><span class="tag">a house big ✗</span></div>
        <b>2) Тэмдэг нэр олон бол дараалал бий</b> (санах: <b>ХХ-НӨУ</b>):
        <div style="margin:12px 0"><span class="tag">Хэмжээ → Хэр хуучин → Өнгө → Улс → Материал</span><span class="tag">a big old white Mongolian wooden house</span></div>
        Ихэвчлэн 2-3-аас олон тэмдэг нэр хэрэглэдэггүй!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        big /bɪɡ/ — том · small /smɔːl/ — жижиг · new /nuː/ — шинэ<br>
        old /oʊld/ — хуучин · modern /ˈmɒdərn/ — орчин үеийн · comfortable /ˈkʌmftəbl/ — тухтай<br>
        wooden /ˈwʊdn/ — модон · warm /wɔːrm/ — дулаан · bright /braɪt/ — гэрэлтэй · quiet /ˈkwaɪət/ — нам гүм</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Тэмдэг нэр олон тоо АВАХГҮЙ: «two bigs houses» ✗ → <b>two big houses</b> ✓. Мөн «a white big house» сонсоход хачин — хэмжээ эхэлнэ: <b>a big white house</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хэмжээ эхэнд, материал сүүлд» — a big (хэмжээ) old (нас) wooden (материал) house.</p>`
    },
    phrases:[
      {en:"We live in a small modern apartment.", pron:"ви лив ин э смол модэрн эпартмэнт.", mn:"Бид жижиг, орчин үеийн орон сууцанд амьдардаг."},
      {en:"It is a big old wooden house.", pron:"ит из э биг оулд вүдн хаус.", mn:"Энэ бол том, хуучин, модон байшин."},
      {en:"My room is small but very bright.", pron:"май рум из смол бат вэри брайт.", mn:"Миний өрөө жижиг ч их гэрэлтэй."},
      {en:"The living room is warm and comfortable.", pron:"зэ ливинг рум из ворм энд комфортэбл.", mn:"Зочны өрөө дулаан, тухтай."},
      {en:"We have a quiet neighborhood.", pron:"ви хэв э квайэт нэйбэрхүд.", mn:"Манай хороолол нам гүм."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["I live in a ", " house."], opts:["big","house big"], a:0, fix:"Тэмдэг нэр нэр үгийн өмнө → a big house."},
      {q:"Олон тоо:", parts:["There are two ", " rooms."], opts:["small","smalls"], a:0, fix:"Тэмдэг нэр -s авдаггүй."},
      {q:"Дараалал:", parts:["It is a ", " house."], opts:["big white","white big"], a:0, fix:"Хэмжээ эхэлнэ → a big white house."},
      {q:"Дүрслэл:", parts:["My room is small ", " bright."], opts:["but","and"], a:0, fix:"Эсрэг утга → but."}
    ],
    speak:{ scene:'Шинэ гэр', turns:[
      {ruby:"I heard you moved! What is your new home like?", pron:"ай хёрд ю мувд! вот из ёр ню хоум лайк?", mn:"Нүүсэн гэж сонслоо! Шинэ гэр тань ямар вэ?",
        choices:[{t:"It is a small modern apartment.",best:true,mn:"Жижиг, орчин үеийн орон сууц."},{t:"It is apartment small modern.",best:false,fix:"Тэмдэг нэр өмнө: a small modern apartment."}]},
      {ruby:"Nice! Is it comfortable?", pron:"найс! из ит комфортэбл?", mn:"Гоё! Тухтай юу?",
        choices:[{t:"Yes! The living room is warm and bright.",best:true,mn:"Тийм! Зочны өрөө дулаан, гэрэлтэй."},{t:"Yes, living room warm bright.",best:false,fix:"is + and: The living room IS warm AND bright."}]},
      {ruby:"And the neighborhood?", pron:"энд зэ нэйбэрхүд?", mn:"Хороолол нь?",
        choices:[{t:"It is quiet, and there is a big park near us.",best:true,mn:"Нам гүм, ойролцоо том цэцэрлэгт хүрээлэн бий."},{t:"Quiet, park big.",best:false,fix:"Бүтэн: It is quiet, and there is a big park."}]}
    ]}
  },
  {
    id:'a1m4l7', title:"4.7 Хөрш", level:"A1 · М4",
    blurb:"usually vs right now — Simple ⟷ Continuous",
    rule:{
      h:"Зорилго ба дүрэм: Present Simple ⟷ Present Continuous",
      html:`<b>🎯 Зорилго:</b> «Байнга» ба «яг одоо»-г ялган хэрэглэх — англи хэлний хамгийн чухал эсрэгцүүлэл.<br><br>
        <div style="margin:12px 0"><span class="tag">Present Simple = БАЙНГА, ердийн: My neighbor works at a bank.</span><span class="tag">Present Continuous = ЯГ ОДОО: Right now, he is washing his car.</span></div>
        <b>Дохио үгс нь тусална:</b>
        <div style="margin:12px 0"><span class="tag">Simple: every day, usually, often, always</span><span class="tag">Continuous: now, right now, at the moment, today</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        neighbor /ˈneɪbər/ — хөрш · noise /nɔɪz/ — чимээ · knock /nɒk/ — тогших<br>
        garden /ˈɡɑːrdn/ — цэцэрлэг · park /pɑːrk/ — парк · greet /ɡriːt/ — мэндлэх<br>
        moment /ˈmoʊmənt/ — агшин · outside /ˌaʊtˈsaɪd/ — гадаа · inside /ˌɪnˈsaɪd/ — дотор · together /təˈɡeðər/ — хамт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Байнгын үйлдэлд Continuous хэрэглэх: «My neighbor is working at a bank every day» ✗ → <b>works</b>. Мөн зарим үйл үг Continuous-д ОРДОГГҮЙ: like, know, want, have (эзэмших утгаар): «I am knowing him» ✗ → <b>I know him</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Every day → -S. Right now → -ING». Дохио үгээ ол, дараа нь цагаа сонго.</p>`
    },
    phrases:[
      {en:"My neighbor works at a bank.", pron:"май нэйбэр вөркс эт э бэнк.", mn:"Хөрш маань банкинд ажилладаг."},
      {en:"Right now, he is washing his car.", pron:"райт нау, хи из вошинг хиз кар.", mn:"Яг одоо тэр машинаа угааж байна."},
      {en:"She usually walks her dog in the evening.", pron:"ши южуэли вокс хёр дог ин зэ ийвнинг.", mn:"Тэр ихэвчлэн орой нохойгоо салхилуулдаг."},
      {en:"Listen! Someone is knocking on the door.", pron:"лисн! самван из нокинг он зэ дор.", mn:"Сонс! Хэн нэгэн хаалга тогшиж байна."},
      {en:"I know my neighbors very well.", pron:"ай ноу май нэйбэрз вэри вэл.", mn:"Би хөршүүдээ маш сайн таьдаг."}
    ],
    exercises:[
      {q:"Аль цаг:", parts:["My neighbor ", " at a bank."], opts:["works","is working"], a:0, fix:"Байнгын ажил → works."},
      {q:"Аль цаг:", parts:["Right now, he ", " his car."], opts:["is washing","washes"], a:0, fix:"Right now → is washing."},
      {q:"Аль цаг:", parts:["She ", " her dog every evening."], opts:["walks","is walking"], a:0, fix:"every evening → walks."},
      {q:"Онцгой үйл үг:", parts:["I ", " him very well."], opts:["know","am knowing"], a:0, fix:"know нь Continuous-д ордоггүй."}
    ],
    speak:{ scene:'Хөршийн тухай', turns:[
      {ruby:"Do you know your neighbors?", pron:"ду ю ноу ёр нэйбэрз?", mn:"Хөршүүдээ таних уу?",
        choices:[{t:"Yes, I know them well. We often talk.",best:true,mn:"Тийм, сайн таьдаг. Байнга ярилцдаг."},{t:"Yes, I am knowing them.",best:false,fix:"know нь -ing авдаггүй: I know them."}]},
      {ruby:"What does your neighbor do?", pron:"вот даз ёр нэйбэр ду?", mn:"Хөрш тань юу хийдэг вэ?",
        choices:[{t:"He works at a bank.",best:true,mn:"Тэр банкинд ажилладаг."},{t:"He is working at a bank every day.",best:false,fix:"Байнгын ажил → He works at a bank."}]},
      {ruby:"Is he home now?", pron:"из хи хоум нау?", mn:"Тэр одоо гэртээ байна уу?",
        choices:[{t:"Yes, he is washing his car outside.",best:true,mn:"Тийм, гадаа машинаа угааж байна."},{t:"Yes, he washes car now.",best:false,fix:"now → he IS washING his car."}]}
    ]}
  },
  {
    id:'a1m4l8', title:"4.8 Хаяг", level:"A1 · М4",
    blurb:"first, second, third floor — эрэмбийн тоо",
    rule:{
      h:"Зорилго ба дүрэм: эрэмбийн тоо ба хаягийн угтвар",
      html:`<b>🎯 Зорилго:</b> Хаягаа хэлж, давхар, дугаараа эрэмбийн тоогоор нэрлэх.<br><br>
        <b>Эрэмбийн тоо</b> (хэд дэх вэ):
        <div style="margin:12px 0"><span class="tag">1 → first (1st)</span><span class="tag">2 → second (2nd)</span><span class="tag">3 → third (3rd)</span><span class="tag">4 → fourth (4th)</span><span class="tag">5 → fifth</span><span class="tag">12 → twelfth</span><span class="tag">20 → twentieth</span></div>
        Ихэнх нь ердөө <b>-th</b>: sixth, seventh, tenth. Онцгой: first, second, third, fifth, ninth, twelfth.
        <b>Хаягийн угтвар:</b>
        <div style="margin:12px 0"><span class="tag">at + бүтэн хаяг: at 15 Peace Avenue</span><span class="tag">on + гудамж: on Peace Avenue</span><span class="tag">in + хот: in Ulaanbaatar</span><span class="tag">on the + давхар: on the third floor</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        address /ˈædres/ — хаяг · street /striːt/ — гудамж · avenue /ˈævənuː/ — өргөн чөлөө<br>
        building /ˈbɪldɪŋ/ — барилга · district /ˈdɪstrɪkt/ — дүүрэг · entrance /ˈentrəns/ — орц<br>
        first /fɜːrst/ — нэгдүгээр · second /ˈsekənd/ — хоёрдугаар · third /θɜːrd/ — гуравдугаар · fifth /fɪfθ/ — тавдугаар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I live in third floor» ✗ → <b>ON the third floor</b>. Мөн «the» мартах: «on third floor» ✗ → <b>on THE third floor</b>. АНУ-д 1 давхар = first floor, Британид = ground floor!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ихэнх нь -TH, гуравхан онцгой: 1st-2nd-3rd» (first, second, third).</p>`
    },
    phrases:[
      {en:"What is your address?", pron:"вот из ёр эдрэс?", mn:"Таны хаяг хаана вэ?"},
      {en:"I live on the third floor.", pron:"ай лив он зэ сөрд флор.", mn:"Би 3 давхарт амьдардаг."},
      {en:"My building is on Peace Avenue.", pron:"май билдинг из он Пийс Эвэню.", mn:"Манай байр Энх тайвны өргөн чөлөөнд байдаг."},
      {en:"It is the second entrance.", pron:"ит из зэ сэконд энтрэнс.", mn:"2 дугаар орц."},
      {en:"I live in Ulaanbaatar, in Bayangol district.", pron:"ай лив ин Улаанбаатар, ин Баянгол дистрикт.", mn:"Би Улаанбаатар, Баянгол дүүрэгт амьдардаг."}
    ],
    exercises:[
      {q:"Давхар:", parts:["I live ", " the fifth floor."], opts:["on","in"], a:0, fix:"Давхар → ON the fifth floor."},
      {q:"Эрэмбийн тоо:", parts:["It is the ", " entrance. (2)"], opts:["second","two"], a:0, fix:"Хэд дэх → second."},
      {q:"Эрэмбийн тоо:", parts:["My room is on the ", " floor. (3)"], opts:["third","three"], a:0, fix:"Хэд дэх → third."},
      {q:"Хаягийн угтвар:", parts:["I live ", " Ulaanbaatar."], opts:["in","on"], a:0, fix:"Хот → in."}
    ],
    speak:{ scene:'Хаягаа хэлэх', turns:[
      {ruby:"I want to visit you! What is your address?", pron:"ай вонт ту визит ю! вот из ёр эдрэс?", mn:"Танайд очмоор байна! Хаяг тань хаана вэ?",
        choices:[{t:"I live on Peace Avenue, in Bayangol district.",best:true,mn:"Энх тайвны өргөн чөлөө, Баянгол дүүрэгт."},{t:"Peace Avenue, Bayangol.",best:false,fix:"Бүтэн: I live ON Peace Avenue, IN Bayangol district."}]},
      {ruby:"Which floor?", pron:"вич флор?", mn:"Хэддүгээр давхар вэ?",
        choices:[{t:"On the fourth floor, second entrance.",best:true,mn:"4 давхар, 2 дугаар орц."},{t:"In four floor.",best:false,fix:"ON THE fourth floor (эрэмбийн тоо!)."}]},
      {ruby:"Great, see you at six!", pron:"грэйт, сий ю эт сикс!", mn:"Гоё, 6 цагт уулзъя!",
        choices:[{t:"Perfect! I will wait for you.",best:true,mn:"Сайхан! Би хүлээж байя."},{t:"Ok six.",best:false,fix:"Дулаахан: Perfect! I will wait for you."}]}
    ]}
  },
  {
    id:'a1m4l9', title:"4.9 Зураг тайлбарлах", level:"A1 · М4",
    blurb:"In the picture, on the left — зураг өгүүлэх",
    rule:{
      h:"Зорилго ба дүрэм: зураг тайлбарлах хэллэгүүд",
      html:`<b>🎯 Зорилго:</b> Зургийг мэргэжлийн байдлаар тайлбарлах (шалгалт, ярианы тестэд их хэрэгтэй!).<br><br>
        <b>Зургийн байршлын хэллэгүүд:</b>
        <div style="margin:12px 0"><span class="tag">in the picture = зурган дээр</span><span class="tag">on the left = зүүн талд</span><span class="tag">on the right = баруун талд</span><span class="tag">in the middle = голд</span><span class="tag">at the top = дээд талд</span><span class="tag">at the bottom = доод талд</span></div>
        <b>Хоёр багаж нийлүүлнэ:</b>
        <div style="margin:12px 0"><span class="tag">Юу БАЙГААГ → There is / There are</span><span class="tag">Юу БОЛЖ БАЙГААГ → Present Continuous</span></div>
        <i>In the picture, there is a kitchen. On the left, a woman is cooking.</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        picture /ˈpɪktʃər/ — зураг · top /tɒp/ — дээд тал · bottom /ˈbɒtəm/ — доод тал<br>
        background /ˈbækɡraʊnd/ — арын дэвсгэр · front /frʌnt/ — урд тал · describe /dɪˈskraɪb/ — дүрслэх<br>
        maybe /ˈmeɪbi/ — магадгүй · looks /lʊks/ — харагдах · seems /siːmz/ — санагдах · both /boʊθ/ — хоёул</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «in the left» ✗ → <b>ON the left</b>. «in the top» ✗ → <b>AT the top</b>. Тодорхойгүй бол «Maybe...» эсвэл «It looks like...» гэж хэлж болно — чимээгүй болохоос дээр!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Зургийн 3 алхам: <b>1) Юу байна</b> (There is...) → <b>2) Хаана</b> (on the left) → <b>3) Юу болж байна</b> (is cooking).</p>`
    },
    phrases:[
      {en:"In the picture, there is a family.", pron:"ин зэ пикчэр, зэр из э фэмили.", mn:"Зурган дээр гэр бүл байна."},
      {en:"On the left, a woman is cooking.", pron:"он зэ лефт, э вумэн из күкинг.", mn:"Зүүн талд эмэгтэй хоол хийж байна."},
      {en:"In the middle, there is a big table.", pron:"ин зэ мидл, зэр из э биг тэйбл.", mn:"Голд том ширээ байна."},
      {en:"At the top, I can see a lamp.", pron:"эт зэ топ, ай кэн сий э лэмп.", mn:"Дээд талд чийдэн харагдаж байна."},
      {en:"They look very happy.", pron:"зэй лүк вэри хэпи.", mn:"Тэд их баяртай харагдаж байна."}
    ],
    exercises:[
      {q:"Зургийн байршил:", parts:["", " the left, there is a door."], opts:["On","In"], a:0, fix:"Зүүн талд → On the left."},
      {q:"Зургийн байршил:", parts:["", " the top, there is a lamp."], opts:["At","On"], a:0, fix:"Дээд талд → At the top."},
      {q:"Юу байгаа:", parts:["In the picture, ", " two children."], opts:["there are","they are"], a:0, fix:"Байгааг хэлэх → There are."},
      {q:"Юу болж байгаа:", parts:["A woman ", " in the kitchen."], opts:["is cooking","cooks"], a:0, fix:"Зурган дээр яг болж байна → is cooking."}
    ],
    speak:{ scene:'Зураг тайлбарлах дасгал', turns:[
      {ruby:"Look at this photo. What can you see?", pron:"лүк эт зис фото. вот кэн ю сий?", mn:"Энэ зургийг хар. Юу харагдаж байна?",
        choices:[{t:"In the picture, there is a kitchen and a family.",best:true,mn:"Зурган дээр гал тогоо, гэр бүл байна."},{t:"Kitchen, family.",best:false,fix:"In the picture, THERE IS a kitchen..."}]},
      {ruby:"What are they doing?", pron:"вот а зэй дуинг?", mn:"Тэд юу хийж байна?",
        choices:[{t:"On the left, a woman is cooking. The children are eating.",best:true,mn:"Зүүн талд эмэгтэй хоол хийж байна. Хүүхдүүд идэж байна."},{t:"Woman cook, children eat.",best:false,fix:"Яг одоо → is cookING, are eatING."}]},
      {ruby:"How do they feel?", pron:"хау ду зэй фийл?", mn:"Тэд ямар сэтгэгдэлтэй байна вэ?",
        choices:[{t:"They look happy. Maybe it is a special day.",best:true,mn:"Баяртай харагдаж байна. Магадгүй онцгой өдөр байх."},{t:"Happy.",best:false,fix:"Бүтэн: They look happy. Maybe..."}]}
    ]}
  },
  {
    id:'a1m4l10', title:"4.10 Модулийн төсөл", level:"A1 · М4",
    blurb:"🏆 Гэрээ дэлгэрэнгүй танилцуулах",
    rule:{
      h:"Давтлага: Модуль 4-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 4-ийн мэдлэгээ нэгтгэж, гэрээ бүрэн танилцуулах.<br><br>
        <b>Модуль 4-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">a/an ⟷ the</span><span class="tag">Is there...? / There aren't any</span><span class="tag">between · opposite · above</span><span class="tag">How many? / How much?</span><span class="tag">mine · yours · hers</span><span class="tag">a big old wooden house</span><span class="tag">works ⟷ is working</span><span class="tag">on the third floor</span><span class="tag">on the left · in the middle</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Миний гэр (10+ өгүүлбэр):</b> байршил, өрөө, тавилга, тоо хэмжээ, дүрслэл бүгдийг ашигла. Жишээ:<br>
        <i>I live in a small apartment in Ulaanbaatar. The apartment is on the fourth floor. It is a bright modern flat. There are two bedrooms and a kitchen. In the living room, there is a big sofa between the window and the shelf. There is a picture on the wall above the sofa. There isn't a dishwasher, but we have a lot of cups! My bedroom is small but it is mine. Right now, my son is playing in the living room. I love my home because it is warm and quiet.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Гэр дүрслэх 4 алхам: <b>Хаана</b> (in UB, on the 4th floor) → <b>Ямар</b> (small, bright) → <b>Юу байгаа</b> (there is/are + байршил) → <b>Одоо юу болж байна</b> (is playing).</p>`
    },
    phrases:[
      {en:"Let me show you my home.", pron:"лет ми шоу ю май хоум.", mn:"Гэрээ үзүүлье."},
      {en:"The apartment is on the fourth floor.", pron:"зэ эпартмэнт из он зэ форс флор.", mn:"Орон сууц 4 давхарт байдаг."},
      {en:"There is a big sofa between the window and the shelf.", pron:"зэр из э биг соуфа битвийн зэ виндоу энд зэ шэлф.", mn:"Цонх, тавиур хоёрын хооронд том буйдан бий."},
      {en:"There isn't a dishwasher, but that's okay.", pron:"зэр изнт э дишвошэр, бат зэтс оукэй.", mn:"Аяга угаагч байхгүй ч зүгээр."},
      {en:"I love my home because it is warm and quiet.", pron:"ай лав май хоум бикоз ит из ворм энд квайэт.", mn:"Дулаан, нам гүм учраас би гэртээ хайртай."}
    ],
    exercises:[
      {q:"Давтлага (артикль):", parts:["I have a house. ", " house is old."], opts:["The","A"], a:0, fix:"Дахин дурдав → The house."},
      {q:"Давтлага (there):", parts:["", " any chairs in the room?"], opts:["Are there","Is there"], a:0, fix:"Олон + асуулт → Are there any...?"},
      {q:"Давтлага (эзэмшил):", parts:["This room is ", ". (миний)"], opts:["mine","my"], a:0, fix:"Дангаараа → mine."},
      {q:"Давтлага (цаг):", parts:["Right now, my son ", " in his room."], opts:["is playing","plays"], a:0, fix:"Right now → is playing."}
    ],
    speak:{ scene:'🏆 Төсөл: Миний гэр', turns:[
      {ruby:"Tell me about your home!", pron:"тэл ми эбаут ёр хоум!", mn:"Гэрийнхээ тухай яриач!",
        choices:[{t:"I live in a small apartment on the fourth floor.",best:true,mn:"Би 4 давхарт жижиг орон сууцанд амьдардаг."},{t:"I live small apartment, four floor.",best:false,fix:"in A small apartment ON THE fourth floor."}]},
      {ruby:"What is in your living room?", pron:"вот из ин ёр ливинг рум?", mn:"Зочны өрөөнд юу байдаг вэ?",
        choices:[{t:"There is a big sofa between the window and the shelf.",best:true,mn:"Цонх, тавиурын хооронд том буйдан бий."},{t:"Big sofa, window, shelf.",best:false,fix:"There is a big sofa BETWEEN the window AND the shelf."}]},
      {ruby:"It sounds lovely! Is anyone home now?", pron:"ит саундз лавли! из эниван хоум нау?", mn:"Сайхан юм! Одоо хэн нэгэн гэртээ байна уу?",
        choices:[{t:"Yes, my son is playing in the living room right now.",best:true,mn:"Тийм, хүү маань яг одоо зочны өрөөнд тоглож байна."},{t:"Yes, son plays now.",best:false,fix:"right now → my son IS playING."}]}
    ]}
  },
  {
    id:'a1m5l1', title:"5.1 Үндсэн хүнс", level:"A1 · М5",
    blurb:"an apple / some rice — a ⟷ some",
    rule:{
      h:"Зорилго ба дүрэм: a/an ⟷ some (хоолны нэр үг)",
      html:`<b>🎯 Зорилго:</b> Үндсэн хүнсийг нэрлэж, «a» эсвэл «some» аль нь болохыг шийдэх.<br><br>
        Хоолны нэр үг 2 бүлэгт хуваагдана:
        <div style="margin:12px 0"><span class="tag">ТООЛОГДОХ (ширхэглэж болно): an apple, a banana, an egg</span><span class="tag">ТООЛОГДОХГҮЙ (асгамал/зүсэмтэй): rice, milk, meat, bread</span></div>
        <b>Алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">Ганц ширхэг → a/an: I want an apple.</span><span class="tag">Хэмжээгүй жаахан → some: I want some rice.</span><span class="tag">Олон ширхэг → some + олон тоо: I want some apples.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        bread /bred/ — талх · rice /raɪs/ — будаа · meat /miːt/ — мах<br>
        egg /eɡ/ — өндөг · milk /mɪlk/ — сүү · cheese /tʃiːz/ — бяслаг<br>
        apple /ˈæpl/ — алим · potato /pəˈteɪtoʊ/ — төмс · salt /sɔːlt/ — давс · food /fuːd/ — хоол</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I eat a rice» ✗ — будааг ширхэглэж болохгүй: <b>I eat some rice</b>. Мөн «a bread» ✗ → <b>some bread</b> эсвэл <b>a piece of bread</b>. Гэхдээ «a coffee» ярианд болно (= нэг аяга кофе).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ширхэглэж болох уу? Тэгвэл A. Асгаж, хэрчиж байгаа юу? Тэгвэл SOME».</p>`
    },
    phrases:[
      {en:"I eat an apple every day.", pron:"ай ийт эн эппл эври дэй.", mn:"Би өдөр бүр нэг алим иддэг."},
      {en:"We need some bread and milk.", pron:"ви нийд сам брэд энд милк.", mn:"Бидэнд талх, сүү хэрэгтэй."},
      {en:"There is some rice in the kitchen.", pron:"зэр из сам райс ин зэ кичэн.", mn:"Гал тогоонд жаахан будаа бий."},
      {en:"Do you want an egg?", pron:"ду ю вонт эн эг?", mn:"Өндөг идэх үү?"},
      {en:"I don't eat any meat.", pron:"ай доунт ийт эни мийт.", mn:"Би мах огт иддэггүй."}
    ],
    exercises:[
      {q:"a/some:", parts:["I want ", " apple."], opts:["an","some"], a:0, fix:"Ганц ширхэг + эгшиг → an apple."},
      {q:"a/some:", parts:["I eat ", " rice every day."], opts:["some","a"], a:0, fix:"Тоологдохгүй → some rice."},
      {q:"a/some:", parts:["We need ", " bread."], opts:["some","a"], a:0, fix:"Талх тоологдохгүй → some bread."},
      {q:"any:", parts:["I don't eat ", " meat."], opts:["any","some"], a:0, fix:"Үгүйсгэл → any."}
    ],
    speak:{ scene:'Хоолны шүүгээ шалгах', turns:[
      {ruby:"What do we have in the kitchen?", pron:"вот ду ви хэв ин зэ кичэн?", mn:"Гал тогоонд юу байна?",
        choices:[{t:"There is some rice and some bread.",best:true,mn:"Жаахан будаа, талх бий."},{t:"There is a rice and a bread.",best:false,fix:"Тоологдохгүй → SOME rice, SOME bread."}]},
      {ruby:"Do we have any eggs?", pron:"ду ви хэв эни эгз?", mn:"Өндөг бий юу?",
        choices:[{t:"Yes, we have some eggs. Maybe six.",best:true,mn:"Тийм, хэдэн өндөгтэй. 6 байх."},{t:"Yes, we have some egg.",best:false,fix:"Олон ширхэг → some eggS."}]},
      {ruby:"Good! Then I can cook dinner.", pron:"гүд! зэн ай кэн күк диннэр.", mn:"Сайн! Тэгвэл оройн хоол хийж чадна.",
        choices:[{t:"Great! I want an egg, please.",best:true,mn:"Гоё! Би нэг өндөг идмээр байна."},{t:"Great! I want a egg.",best:false,fix:"Эгшгийн өмнө → AN egg."}]}
    ]}
  },
  {
    id:'a1m5l2', title:"5.2 Ундаа", level:"A1 · М5",
    blurb:"I'd like a coffee — would like",
    rule:{
      h:"Зорилго ба дүрэм: would like (эелдэг хүсэлт)",
      html:`<b>🎯 Зорилго:</b> Ундаа захиалж, «want» гэхээсээ эелдэг «would like»-ыг хэрэглэх.<br><br>
        <b>would like</b> = «хүсч байна» — <b>want</b>-аас хамаагүй эелдэг!
        <div style="margin:12px 0"><span class="tag">I would like = I'd like</span><span class="tag">Would you like...? = ...уу?</span></div>
        <b>Ард нь 2 зүйл болно:</b>
        <div style="margin:12px 0"><span class="tag">would like + юм: I'd like a coffee.</span><span class="tag">would like + TO + үйл үг: I'd like to order.</span></div>
        <b>Хариулт:</b> Yes, please. / No, thank you.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        water /ˈwɔːtər/ — ус · tea /tiː/ — цай · coffee /ˈkɒfi/ — кофе<br>
        juice /dʒuːs/ — жүүс · milk tea /mɪlk tiː/ — сүүтэй цай · hot /hɒt/ — халуун<br>
        cold /koʊld/ — хүйтэн · ice /aɪs/ — мөс · thirsty /ˈθɜːrsti/ — цангасан · glass /ɡlæs/ — шил аяга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I want a coffee» — буруу биш ч бүдүүлэг сонсогдоно! Зочид буудал, ресторанд заавал <b>I'd like</b>. Мөн «Would you like a tea?» гэсэн асуултад «Yes, I would like» ✗ → <b>Yes, please</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WANT = хүүхдийн үг, WOULD LIKE = насанд хүрсэн хүний үг».</p>`
    },
    phrases:[
      {en:"I'd like a cup of tea, please.", pron:"айд лайк э кап ов тий, плийз.", mn:"Нэг аяга цай авъя."},
      {en:"Would you like some coffee?", pron:"вүд ю лайк сам кофи?", mn:"Кофе уух уу?"},
      {en:"Yes, please. No sugar.", pron:"ес, плийз. ноу шүгэр.", mn:"Тийм ээ. Чихэргүй."},
      {en:"No, thank you. I'm not thirsty.", pron:"ноу, сэнк ю. айм нот сөрсти.", mn:"Үгүй, баярлалаа. Цангаагүй байна."},
      {en:"I'd like to order, please.", pron:"айд лайк ту ордэр, плийз.", mn:"Захиалга өгмөөр байна."}
    ],
    exercises:[
      {q:"Эелдэг:", parts:["", " a coffee, please."], opts:["I'd like","I want"], a:0, fix:"Эелдэг → I'd like."},
      {q:"Асуулт:", parts:["", " you like some tea?"], opts:["Would","Do"], a:0, fix:"Санал болгох → Would you like...?"},
      {q:"to хэрэгтэй юу:", parts:["I'd like ", " order."], opts:["to","—"], a:0, fix:"Үйл үгийн өмнө → to order."},
      {q:"Хариулт:", parts:["Would you like tea? — Yes, ", "."], opts:["please","I would"], a:0, fix:"Богино эелдэг → Yes, please."}
    ],
    speak:{ scene:'Кафед', turns:[
      {ruby:"Good afternoon! What would you like?", pron:"гүд афтэрнүн! вот вүд ю лайк?", mn:"Өдрийн мэнд! Юу авах вэ?",
        choices:[{t:"I'd like a cup of tea, please.",best:true,mn:"Нэг аяга цай авъя."},{t:"I want tea.",best:false,fix:"Эелдэг: I'd like a cup of tea, please."}]},
      {ruby:"Hot or cold?", pron:"хот ор коулд?", mn:"Халуун уу, хүйтэн үү?",
        choices:[{t:"Hot, please. With some milk.",best:true,mn:"Халуун. Сүүтэй."},{t:"Hot. Milk.",best:false,fix:"Эелдэг: Hot, please. With some milk."}]},
      {ruby:"Would you like anything to eat?", pron:"вүд ю лайк энисинг ту ийт?", mn:"Идэх юм авах уу?",
        choices:[{t:"No, thank you. Just the tea.",best:true,mn:"Үгүй, баярлалаа. Зөвхөн цай."},{t:"No.",best:false,fix:"Эелдэг: No, thank you."}]}
    ]}
  },
  {
    id:'a1m5l3', title:"5.3 Дуртай хоол", level:"A1 · М5",
    blurb:"I love it! I hate it! — дурлалын шат",
    rule:{
      h:"Зорилго ба дүрэм: love / like / don't like / hate",
      html:`<b>🎯 Зорилго:</b> Хоолны талаарх мэдрэмжээ нарийн илэрхийлэх.<br><br>
        <b>Дурлалын шат (100% → 0%):</b>
        <div style="margin:12px 0"><span class="tag">love ❤️ 100%</span><span class="tag">like 🙂 70%</span><span class="tag">don't mind 😐 50%</span><span class="tag">don't like 🙁 30%</span><span class="tag">hate 😖 0%</span></div>
        Ард нь: <b>нэр үг</b> (I love buuz) эсвэл <b>үйл үг-ing</b> (I love cooking).<br>
        <b>Favorite</b> = хамгийн дуртай: <b>What is your favorite food?</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        love /lʌv/ — хайртай · hate /heɪt/ — үзэн ядах · delicious /dɪˈlɪʃəs/ — амттай<br>
        tasty /ˈteɪsti/ — амттай · sweet /swiːt/ — чихэрлэг · spicy /ˈspaɪsi/ — халуун ногоотой<br>
        salty /ˈsɔːlti/ — давслаг · favorite /ˈfeɪvərɪt/ — дуртай · taste /teɪst/ — амт · try /traɪ/ — амсах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I very like it» ✗ (монголоор «их дуртай»-гаас) → <b>I like it very much</b> эсвэл <b>I really like it</b>. Мөн «I am like pizza» ✗ → <b>I like pizza</b> (like өөрөө үйл үг, be хэрэггүй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «very like ✗ → really like ✓ / like it very much ✓».</p>`
    },
    phrases:[
      {en:"What is your favorite food?", pron:"вот из ёр фэйворит фүд?", mn:"Хамгийн дуртай хоол тань юу вэ?"},
      {en:"I love buuz. It is delicious!", pron:"ай лав бууз. ит из дэлишэс!", mn:"Би бууз их дуртай. Үнэхээр амттай!"},
      {en:"I don't like spicy food.", pron:"ай доунт лайк спайси фүд.", mn:"Би халуун ногоотой хоолонд дургүй."},
      {en:"I really like cooking at home.", pron:"ай риали лайк күкинг эт хоум.", mn:"Би гэртээ хоол хийх их дуртай."},
      {en:"My son hates vegetables.", pron:"май сан хэйтс вэжтэблз.", mn:"Хүү маань ногоонд дургүй."}
    ],
    exercises:[
      {q:"Зөв эсэх:", parts:["I ", " it very much."], opts:["like","very like"], a:0, fix:"«very like» ✗ → like it very much."},
      {q:"be хэрэгтэй юу:", parts:["I ", " pizza."], opts:["like","am like"], a:0, fix:"like өөрөө үйл үг → I like pizza."},
      {q:"like + :", parts:["She loves ", " for her family."], opts:["cooking","cook"], a:0, fix:"love/like + -ing → cooking."},
      {q:"-s хэрэгтэй юу:", parts:["My son ", " vegetables."], opts:["hates","hate"], a:0, fix:"He/She → hateS."}
    ],
    speak:{ scene:'Хоолны сонирхол', turns:[
      {ruby:"What is your favorite food?", pron:"вот из ёр фэйворит фүд?", mn:"Дуртай хоол тань юу вэ?",
        choices:[{t:"I love buuz. My mother makes the best ones!",best:true,mn:"Бууз их дуртай. Ээж маань хамгийн амттайг нь хийдэг!"},{t:"I very like buuz.",best:false,fix:"«very like» ✗ → I really like buuz."}]},
      {ruby:"Do you like spicy food?", pron:"ду ю лайк спайси фүд?", mn:"Халуун ногоотой хоолонд дуртай юу?",
        choices:[{t:"No, I don't. I hate it!",best:true,mn:"Үгүй. Их дургүй!"},{t:"No, I am not like.",best:false,fix:"be хэрэггүй → No, I don't like it."}]},
      {ruby:"Do you like cooking?", pron:"ду ю лайк күкинг?", mn:"Хоол хийх дуртай юу?",
        choices:[{t:"Yes! I really like cooking for my family.",best:true,mn:"Тийм! Гэр бүлдээ хоол хийх их дуртай."},{t:"Yes, I like cook.",best:false,fix:"like + -ing → like cookING."}]}
    ]}
  },
  {
    id:'a1m5l4', title:"5.4 Тоолж болох нэр үг", level:"A1 · М5",
    blurb:"potatoes, knives, fish — онцгой олон тоо",
    rule:{
      h:"Зорилго ба дүрэм: онцгой олон тооны хэлбэрүүд",
      html:`<b>🎯 Зорилго:</b> Хоолны нэр үгийн олон тоог зөв бүтээх (энгийн -s биш тохиолдлууд!).<br><br>
        <b>4 бүлэг дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">-o → -oes: potato → potatoes, tomato → tomatoes</span><span class="tag">-f/-fe → -ves: knife → knives, loaf → loaves</span><span class="tag">-y → -ies: berry → berries</span><span class="tag">Огт өөрчлөгддөггүй: fish → fish, sheep → sheep</span></div>
        <b>Бүр өөр болдог:</b> person → people, child → children, man → men.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        tomato /təˈmeɪtoʊ/ — улаан лооль · onion /ˈʌnjən/ — сонгино · carrot /ˈkærət/ — лууван<br>
        knife /naɪf/ — хутга · loaf /loʊf/ — талхны бөөн · berry /ˈberi/ — жимс<br>
        fish /fɪʃ/ — загас · vegetable /ˈvedʒtəbl/ — хүнсний ногоо · fruit /fruːt/ — жимс · fresh /freʃ/ — шинэхэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «two potatos» ✗ → <b>potatoes</b>. «three knifes» ✗ → <b>knives</b>. «two fishes» ✗ → <b>two fish</b> (загас өөрчлөгддөггүй!). Гэхдээ <b>photo → photos</b> (онцгой, -oes биш!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хутга Ф-ээ хаяж В болдог» — knife → kniVes, loaf → loaVes.</p>`
    },
    phrases:[
      {en:"I need three potatoes and two tomatoes.", pron:"ай нийд срий потэйтоуз энд ту тумэйтоуз.", mn:"Надад 3 төмс, 2 улаан лооль хэрэгтэй."},
      {en:"There are two knives on the table.", pron:"зэр а ту найвз он зэ тэйбл.", mn:"Ширээн дээр хоёр хутга байна."},
      {en:"I buy fresh vegetables every week.", pron:"ай бай фрэш вэжтэблз эври вийк.", mn:"Би долоо хоног бүр шинэхэн ногоо авдаг."},
      {en:"We have two fish in the fridge.", pron:"ви хэв ту фиш ин зэ фридж.", mn:"Хөргөгчинд хоёр загас бий."},
      {en:"How many onions do we need?", pron:"хау мэни аньонз ду ви нийд?", mn:"Хэдэн сонгино хэрэгтэй вэ?"}
    ],
    exercises:[
      {q:"Олон тоо:", parts:["I need two ", "."], opts:["potatoes","potatos"], a:0, fix:"-o → -oes: potatoes."},
      {q:"Олон тоо:", parts:["There are three ", " here."], opts:["knives","knifes"], a:0, fix:"-fe → -ves: knives."},
      {q:"Олон тоо:", parts:["We have two ", " in the fridge."], opts:["fish","fishes"], a:0, fix:"fish өөрчлөгддөггүй."},
      {q:"Олон тоо:", parts:["I like ", "."], opts:["berries","berrys"], a:0, fix:"гийгүүлэгч+y → berries."}
    ],
    speak:{ scene:'Захаас юм авах', turns:[
      {ruby:"What do you need from the market?", pron:"вот ду ю нийд фром зэ маркэт?", mn:"Захаас юу авах вэ?",
        choices:[{t:"I need some potatoes and two tomatoes.",best:true,mn:"Хэдэн төмс, 2 улаан лооль хэрэгтэй."},{t:"I need potatos, tomatos.",best:false,fix:"-o → -oes: potatoes, tomatoes."}]},
      {ruby:"Anything else? Some fish maybe?", pron:"энисинг элс? сам фиш мэйби?", mn:"Өөр юм? Загас авах уу?",
        choices:[{t:"Yes, two fish, please.",best:true,mn:"Тийм, хоёр загас авъя."},{t:"Yes, two fishes.",best:false,fix:"fish → fish (өөрчлөгддөггүй)."}]},
      {ruby:"Okay! Do we have knives at home?", pron:"оукэй! ду ви хэв найвз эт хоум?", mn:"За! Гэртээ хутга байгаа юу?",
        choices:[{t:"Yes, we have three knives.",best:true,mn:"Тийм, гурван хутгатай."},{t:"Yes, three knifes.",best:false,fix:"knife → knives."}]}
    ]}
  },
  {
    id:'a1m5l5', title:"5.5 Тоо хэмжээ", level:"A1 · М5",
    blurb:"a cup of tea, a kilo of meat — хэмжих үгс",
    rule:{
      h:"Зорилго ба дүрэм: хэмжих хэллэгүүд (partitives)",
      html:`<b>🎯 Зорилго:</b> Тоологдохгүй хоолыг «савлаж» тоолох.<br><br>
        Ус, будаа, махыг шууд тоолж болохгүй — гэхдээ <b>сав/хэмжээ</b>-гээр тоолж болно:
        <div style="margin:12px 0"><span class="tag">a cup of tea = нэг аяга цай</span><span class="tag">a glass of water = нэг шил ус</span><span class="tag">a bottle of milk = нэг шил сүү</span><span class="tag">a kilo of meat = нэг кг мах</span><span class="tag">a piece of bread = нэг зүсэм талх</span><span class="tag">a bowl of rice = нэг аяга будаа</span></div>
        <b>Олон бол сав нь олон тоо авна:</b> two cupS of tea (two cups of teas ✗).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        cup /kʌp/ — аяга · glass /ɡlæs/ — шил аяга · bottle /ˈbɒtl/ — шил<br>
        bowl /boʊl/ — гүн таваг · piece /piːs/ — хэсэг · slice /slaɪs/ — зүсэм<br>
        kilo /ˈkiːloʊ/ — килограмм · packet /ˈpækɪt/ — боодол · half /hæf/ — хагас · little /ˈlɪtl/ — жаахан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «two waters» ✗ → <b>two glasses of water</b>. «two teas» — ресторанд болно (= 2 аяга цай) ч бичгийн хэлэнд <b>two cups of tea</b>. Мөн «a kilo of meats» ✗ → <b>a kilo of meat</b> (мах хэвээрээ тоологдохгүй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тоологдохгүй юмыг САВД хийвэл тоологдоно» — a cup OF tea, a kilo OF meat («of» заавал!).</p>`
    },
    phrases:[
      {en:"I drink two cups of coffee a day.", pron:"ай дринк ту капс ов кофи э дэй.", mn:"Би өдөрт 2 аяга кофе уудаг."},
      {en:"Can I have a glass of water?", pron:"кэн ай хэв э глас ов вотэр?", mn:"Нэг шил ус авч болох уу?"},
      {en:"We need a kilo of meat.", pron:"ви нийд э кийло ов мийт.", mn:"Бидэнд 1 кг мах хэрэгтэй."},
      {en:"I eat a piece of bread for breakfast.", pron:"ай ийт э пийс ов брэд фор брэкфаст.", mn:"Өглөө нэг зүсэм талх иддэг."},
      {en:"She bought two bottles of milk.", pron:"ши бот ту ботлз ов милк.", mn:"Тэр 2 шил сүү авсан."}
    ],
    exercises:[
      {q:"Хэмжих:", parts:["I want a cup ", " tea."], opts:["of","for"], a:0, fix:"«of» заавал → a cup of tea."},
      {q:"Хэмжих:", parts:["Can I have two ", " of water?"], opts:["glasses","glass"], a:0, fix:"Хоёр бол сав нь олон тоо → glasses."},
      {q:"Зөв эсэх:", parts:["We need a kilo of ", "."], opts:["meat","meats"], a:0, fix:"Мах тоологдохгүй → meat."},
      {q:"Хэмжих:", parts:["I eat a ", " of bread."], opts:["piece","cup"], a:0, fix:"Талх → a piece of bread."}
    ],
    speak:{ scene:'Өглөөний хоол', turns:[
      {ruby:"What do you have for breakfast?", pron:"вот ду ю хэв фор брэкфаст?", mn:"Өглөө юу иддэг вэ?",
        choices:[{t:"A cup of milk tea and a piece of bread.",best:true,mn:"Нэг аяга сүүтэй цай, нэг зүсэм талх."},{t:"A milk tea, a bread.",best:false,fix:"A CUP OF milk tea, a PIECE OF bread."}]},
      {ruby:"Just that? Do you drink coffee?", pron:"жаст зэт? ду ю дринк кофи?", mn:"Тэр л үү? Кофе уудаг уу?",
        choices:[{t:"Yes, I drink two cups of coffee at work.",best:true,mn:"Тийм, ажил дээрээ 2 аяга кофе уудаг."},{t:"Yes, two coffees I drink.",best:false,fix:"Дараалал: I drink two cups of coffee."}]},
      {ruby:"That is a lot! Do you drink water too?", pron:"зэт из э лот! ду ю дринк вотэр ту?", mn:"Их байна шүү! Ус ч бас уудаг уу?",
        choices:[{t:"Yes, about six glasses of water a day.",best:true,mn:"Тийм, өдөрт 6 шил орчим ус."},{t:"Yes, six waters.",best:false,fix:"six GLASSES OF water."}]}
    ]}
  },
  {
    id:'a1m5l6', title:"5.6 Ресторанд захиалах", level:"A1 · М5",
    blurb:"Can I have...? — эелдэг хүсэлт",
    rule:{
      h:"Зорилго ба дүрэм: Can I / Could I / Can you (эелдэг хүсэлт)",
      html:`<b>🎯 Зорилго:</b> Ресторанд эхнээс дуустал бүрэн захиалга өгөх.<br><br>
        <b>Эелдэг байдлын 3 шат:</b>
        <div style="margin:12px 0"><span class="tag">Give me... ✗ (бүдүүлэг!)</span><span class="tag">Can I have...? 🙂 (энгийн эелдэг)</span><span class="tag">Could I have...? 😊 (илүү эелдэг)</span></div>
        <b>Өөрөөс vs бусдаас:</b>
        <div style="margin:12px 0"><span class="tag">Can I...? = би ...болох уу (өөрөө хийх)</span><span class="tag">Can you...? = та ...өгөхгүй юу (тэр хийх)</span></div>
        <b>Захиалгын урсгал:</b> The menu, please → I'd like... → Anything else? → The bill, please.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        menu /ˈmenjuː/ — цэс · order /ˈɔːrdər/ — захиалах · waiter /ˈweɪtər/ — зөөгч<br>
        bill /bɪl/ — тооцоо · table /ˈteɪbl/ — ширээ · ready /ˈredi/ — бэлэн<br>
        starter /ˈstɑːrtər/ — эхний хоол · main /meɪn/ — үндсэн хоол · dessert /dɪˈzɜːrt/ — амттан · enjoy /ɪnˈdʒɔɪ/ — таашаах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Give me a coffee» ✗ — бүдүүлэг! <b>Can I have a coffee, please?</b> Мөн «Can I have menu?» ✗ → артикль хэрэгтэй: <b>Can I have THE menu?</b> Тооцоо нэхэхэд «Money, please» ✗ → <b>The bill, please</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Can I = БИ авах уу · Can you = ТА өгөх үү» + үргэлж <b>please</b>-ээр төгсгө.</p>`
    },
    phrases:[
      {en:"Can I have the menu, please?", pron:"кэн ай хэв зэ мэню, плийз?", mn:"Цэс өгөхгүй юу?"},
      {en:"I'd like the soup and some bread.", pron:"айд лайк зэ сүп энд сам брэд.", mn:"Шөл, талх авъя."},
      {en:"Could I have some water, please?", pron:"күд ай хэв сам вотэр, плийз?", mn:"Ус авч болох уу?"},
      {en:"Can you bring some salt?", pron:"кэн ю бринг сам солт?", mn:"Давс авчирч өгөхгүй юу?"},
      {en:"The bill, please.", pron:"зэ бил, плийз.", mn:"Тооцоогоо хийе."}
    ],
    exercises:[
      {q:"Эелдэг:", parts:["", " have the menu, please?"], opts:["Can I","Give me"], a:0, fix:"Эелдэг → Can I have...?"},
      {q:"I/you:", parts:["", " bring some water? (зөөгчөөс)"], opts:["Can you","Can I"], a:0, fix:"Тэр хийх → Can you...?"},
      {q:"Артикль:", parts:["Can I have ", " menu?"], opts:["the","—"], a:0, fix:"Тодорхой цэс → the menu."},
      {q:"Тооцоо:", parts:["", ", please."], opts:["The bill","Money"], a:0, fix:"Тооцоо → The bill, please."}
    ],
    speak:{ scene:'Ресторанд', turns:[
      {ruby:"Good evening! Are you ready to order?", pron:"гүд ийвнинг! а ю рэди ту ордэр?", mn:"Оройн мэнд! Захиалга өгөх үү?",
        choices:[{t:"Can I have the menu first, please?",best:true,mn:"Эхлээд цэс өгөхгүй юу?"},{t:"Give me menu.",best:false,fix:"Эелдэг: Can I have the menu, please?"}]},
      {ruby:"Of course. Here you are.", pron:"ов корс. хийр ю а.", mn:"Мэдээж. Энэ байна.",
        choices:[{t:"Thank you. I'd like the soup and some rice.",best:true,mn:"Баярлалаа. Шөл, будаа авъя."},{t:"I want soup, rice.",best:false,fix:"Эелдэг: I'd like the soup and some rice."}]},
      {ruby:"Anything to drink?", pron:"энисинг ту дринк?", mn:"Ундаа авах уу?",
        choices:[{t:"Could I have a glass of water, please?",best:true,mn:"Нэг шил ус авч болох уу?"},{t:"Water.",best:false,fix:"Эелдэг: Could I have a glass of water, please?"}]}
    ]}
  },
  {
    id:'a1m5l7', title:"5.7 Үнэ асуух", level:"A1 · М5",
    blurb:"How much is it? — үнэ, мөнгө",
    rule:{
      h:"Зорилго ба дүрэм: How much is/are + үнэ хэлэх",
      html:`<b>🎯 Зорилго:</b> Үнэ асууж, ойлгож, тооцоо хийх.<br><br>
        <b>Үнэ асуух 2 хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">How much is it? (нэг юм)</span><span class="tag">How much are they? (олон юм)</span><span class="tag">How much is the soup?</span><span class="tag">How much are the buuz?</span></div>
        <b>Хариулт:</b> It is 5,000 tugrik. / It costs 5,000. / They are 12,000 together.
        <b>Анхаар:</b> «How much...?» энд ҮНЭ асууж байна (тоо хэмжээ биш).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        price /praɪs/ — үнэ · cost /kɒst/ — өртөх · cheap /tʃiːp/ — хямд<br>
        expensive /ɪkˈspensɪv/ — үнэтэй · money /ˈmʌni/ — мөнгө · cash /kæʃ/ — бэлэн мөнгө<br>
        card /kɑːrd/ — карт · change /tʃeɪndʒ/ — хариулт мөнгө · total /ˈtoʊtl/ — нийт · pay /peɪ/ — төлөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How much cost?» ✗ → <b>How much does it cost?</b> эсвэл <b>How much is it?</b>. Мөн «It costs 5000 tugriks» — мөнгөний нэгж олон тоо АВАХГҮЙ: <b>5,000 tugrik</b> ✓ (dollars нь харин олон тоотой: 5 dollars).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ганц юм IS, олон юм ARE» — How much IS the soup? How much ARE the buuz?</p>`
    },
    phrases:[
      {en:"How much is this?", pron:"хау мач из зис?", mn:"Энэ хэд вэ?"},
      {en:"It is five thousand tugrik.", pron:"ит из файв саузэнд төгрөг.", mn:"5,000 төгрөг."},
      {en:"How much are these buuz?", pron:"хау мач а зийз бууз?", mn:"Энэ бууз хэд вэ?"},
      {en:"That is too expensive!", pron:"зэт из ту икспэнсив!", mn:"Хэтэрхий үнэтэй байна!"},
      {en:"Can I pay by card?", pron:"кэн ай пэй бай кард?", mn:"Картаар төлж болох уу?"}
    ],
    exercises:[
      {q:"is/are:", parts:["How much ", " this soup?"], opts:["is","are"], a:0, fix:"Ганц → How much is."},
      {q:"is/are:", parts:["How much ", " these apples?"], opts:["are","is"], a:0, fix:"Олон → How much are."},
      {q:"Зөв асуулт:", parts:["", " does it cost?"], opts:["How much","How many"], a:0, fix:"Үнэ → How much does it cost?"},
      {q:"Мөнгөний нэгж:", parts:["It costs 5,000 ", "."], opts:["tugrik","tugriks"], a:0, fix:"Төгрөг олон тоо авдаггүй."}
    ],
    speak:{ scene:'Тооцоо хийх', turns:[
      {ruby:"Here is your bill.", pron:"хийр из ёр бил.", mn:"Тооцоо тань энэ байна.",
        choices:[{t:"Thank you. How much is it in total?",best:true,mn:"Баярлалаа. Нийт хэд болох вэ?"},{t:"How much cost?",best:false,fix:"How much is it? / How much does it cost?"}]},
      {ruby:"It is twenty-two thousand tugrik.", pron:"ит из твэнти-ту саузэнд төгрөг.", mn:"22,000 төгрөг.",
        choices:[{t:"Can I pay by card?",best:true,mn:"Картаар төлж болох уу?"},{t:"Card pay?",best:false,fix:"Бүтэн: Can I pay by card?"}]},
      {ruby:"Of course. Here is your change.", pron:"ов корс. хийр из ёр чэйнж.", mn:"Мэдээж. Хариулт тань энэ.",
        choices:[{t:"Thank you! The food was delicious.",best:true,mn:"Баярлалаа! Хоол их амттай байлаа."},{t:"Ok bye.",best:false,fix:"Дулаахан: Thank you! The food was delicious."}]}
    ]}
  },
  {
    id:'a1m5l8', title:"5.8 Жорын үг", level:"A1 · М5",
    blurb:"Don't add too much salt! — too much / too many",
    rule:{
      h:"Зорилго ба дүрэм: жорын тушаал + too much/many",
      html:`<b>🎯 Зорилго:</b> Жор уншиж, хоол хийх алхмуудыг ойлгож, «хэт их»-ийг хэлэх.<br><br>
        <b>Жор = тушаах хэлбэр</b> (Модуль 2-ыг санаарай): Cut the onion. Add some salt. Mix it well.<br><br>
        <b>too much / too many = ХЭТ ИХ</b> (муу утгатай!):
        <div style="margin:12px 0"><span class="tag">too much + тоологдохгүй: too much salt</span><span class="tag">too many + олон тоо: too many onions</span><span class="tag">not enough = хангалтгүй: not enough water</span></div>
        <b>Анхаар:</b> «very much» = сайн, «too much» = МУУ (хэтэрсэн)!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        recipe /ˈresəpi/ — жор · add /æd/ — нэмэх · mix /mɪks/ — хутгах<br>
        cut /kʌt/ — хэрчих · boil /bɔɪl/ — буцалгах · fry /fraɪ/ — шарах<br>
        bake /beɪk/ — жигнэх · pour /pɔːr/ — асгах · minute /ˈmɪnɪt/ — минут · enough /ɪˈnʌf/ — хангалттай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «too many salt» ✗ → давс тоологдохгүй: <b>too much salt</b>. Мөн «I like it too much» ✗ (=хэтэрхий их гэсэн муу утга!) → <b>I like it very much</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TOO = хэтэрсэн, МУУ. VERY = их, САЙН» — too salty (идэж болохгүй) ⟷ very tasty (амттай).</p>`
    },
    phrases:[
      {en:"First, cut the onions.", pron:"фөрст, кат зэ аньонз.", mn:"Эхлээд сонгиноо хэрч."},
      {en:"Then add some water and boil it.", pron:"зэн эд сам вотэр энд бойл ит.", mn:"Дараа нь ус нэмээд буцалга."},
      {en:"Don't add too much salt!", pron:"доунт эд ту мач солт!", mn:"Хэт их давс бүү нэм!"},
      {en:"Mix it well for two minutes.", pron:"микс ит вэл фор ту минитс.", mn:"2 минут сайн хутга."},
      {en:"There isn't enough water.", pron:"зэр изнт инаф вотэр.", mn:"Ус хангалтгүй байна."}
    ],
    exercises:[
      {q:"much/many:", parts:["Don't add too ", " salt."], opts:["much","many"], a:0, fix:"Давс тоологдохгүй → too much."},
      {q:"much/many:", parts:["You put too ", " onions!"], opts:["many","much"], a:0, fix:"Сонгино тоологдох → too many."},
      {q:"too/very:", parts:["This soup is ", " tasty! (сайшаах)"], opts:["very","too"], a:0, fix:"Сайн утга → very tasty."},
      {q:"Тушаал:", parts:["", " the water and wait."], opts:["Boil","Boiling"], a:0, fix:"Жор → тушаах хэлбэр: Boil."}
    ],
    speak:{ scene:'Хамт хоол хийх', turns:[
      {ruby:"I want to make soup. What do I do first?", pron:"ай вонт ту мэйк сүп. вот ду ай ду фөрст?", mn:"Шөл хиймээр байна. Эхлээд юу хийх вэ?",
        choices:[{t:"First, cut the meat and the onions.",best:true,mn:"Эхлээд мах, сонгиноо хэрч."},{t:"Cutting meat onions.",best:false,fix:"Тушаал: First, CUT the meat."}]},
      {ruby:"Okay! Now I add salt?", pron:"оукэй! нау ай эд солт?", mn:"За! Одоо давс нэмэх үү?",
        choices:[{t:"Yes, but don't add too much salt!",best:true,mn:"Тийм, гэхдээ хэт их давс бүү нэм!"},{t:"Yes, but not too many salt.",best:false,fix:"Давс тоологдохгүй → too MUCH salt."}]},
      {ruby:"Done! How does it taste?", pron:"дан! хау даз ит тэйст?", mn:"Боллоо! Амт нь ямар байна?",
        choices:[{t:"It is very tasty! Well done!",best:true,mn:"Их амттай байна! Сайн хийжээ!"},{t:"It is too tasty!",best:false,fix:"«too» муу утга! → VERY tasty."}]}
    ]}
  },
  {
    id:'a1m5l9', title:"5.9 Өдрийн хоол", level:"A1 · М5",
    blurb:"have breakfast / eat out — хоолны хэллэгүүд",
    rule:{
      h:"Зорилго ба дүрэм: hoolны тогтмол хэллэгүүд",
      html:`<b>🎯 Зорилго:</b> Өдрийн 3 хоолоо ярьж, хоолны тогтмол хэллэгүүдийг эзэмших.<br><br>
        <b>Хоолны тогтмол хос үгс</b> (эдгээрийг цээжээр!):
        <div style="margin:12px 0"><span class="tag">have breakfast/lunch/dinner (артикльгүй!)</span><span class="tag">eat out = гадуур хооллох</span><span class="tag">cook dinner = оройн хоол хийх</span><span class="tag">order food = хоол захиалах</span><span class="tag">be hungry = өлссөн байх</span></div>
        <b>Анхаар:</b> «I am hungry» (be-тэй!), «I have hunger» ✗
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        hungry /ˈhʌŋɡri/ — өлссөн · full /fʊl/ — цатгалан · meal /miːl/ — хоол<br>
        eat out /iːt aʊt/ — гадуур хооллох · snack /snæk/ — зууш · skip /skɪp/ — алгасах<br>
        healthy /ˈhelθi/ — эрүүл · homemade /ˌhoʊmˈmeɪd/ — гэрийн · usually /ˈjuːʒuəli/ — ихэвчлэн · together /təˈɡeðər/ — хамт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I have a breakfast» ✗ → артикльгүй: <b>I have breakfast</b>. «I have hungry» ✗ → <b>I am hungry</b>. Гэхдээ «I'm having a big breakfast» — тэмдэг нэртэй бол артикль болно!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE breakfast (артикльгүй) · BE hungry (be-тэй)» — хоёулаа тогтмол хэллэг.</p>`
    },
    phrases:[
      {en:"I have breakfast at seven.", pron:"ай хэв брэкфаст эт сэвн.", mn:"Би 7 цагт өглөөний хоол иддэг."},
      {en:"I am hungry. Let's eat!", pron:"ай эм хангри. летс ийт!", mn:"Өлсөж байна. Идэцгээе!"},
      {en:"We usually eat out on Friday.", pron:"ви южуэли ийт аут он фрайдэй.", mn:"Бид ихэвчлэн Баасан гарагт гадуур хооллодог."},
      {en:"I cook dinner for my family.", pron:"ай күк диннэр фор май фэмили.", mn:"Би гэр бүлдээ оройн хоол хийдэг."},
      {en:"No more, thank you. I'm full!", pron:"ноу мор, сэнк ю. айм фул!", mn:"Хангалттай, баярлалаа. Цадчихлаа!"}
    ],
    exercises:[
      {q:"Артикль:", parts:["I have ", " at seven."], opts:["breakfast","a breakfast"], a:0, fix:"Тогтмол хэллэг → have breakfast."},
      {q:"be/have:", parts:["I ", " hungry."], opts:["am","have"], a:0, fix:"Өлсөх → I AM hungry."},
      {q:"Хэллэг:", parts:["We ", " on weekends."], opts:["eat out","eat outside"], a:0, fix:"Гадуур хооллох → eat out."},
      {q:"Давтлага (-s):", parts:["She ", " dinner every day."], opts:["cooks","cook"], a:0, fix:"She → cookS."}
    ],
    speak:{ scene:'Хоолны дадал', turns:[
      {ruby:"Do you have breakfast every day?", pron:"ду ю хэв брэкфаст эври дэй?", mn:"Өдөр бүр өглөөний хоол иддэг үү?",
        choices:[{t:"Yes, I have breakfast at seven.",best:true,mn:"Тийм, 7 цагт иддэг."},{t:"Yes, I have a breakfast.",best:false,fix:"Артикльгүй → have breakfast."}]},
      {ruby:"Do you cook or eat out?", pron:"ду ю күк ор ийт аут?", mn:"Хоол хийдэг үү, гадуур хооллодог уу?",
        choices:[{t:"I usually cook, but we eat out on Friday.",best:true,mn:"Ихэвчлэн хоол хийдэг, Баасанд гадуур хооллодог."},{t:"I cook usually, eat outside Friday.",best:false,fix:"I USUALLY cook... eat OUT ON Friday."}]},
      {ruby:"Are you hungry now?", pron:"а ю хангри нау?", mn:"Одоо өлсөж байна уу?",
        choices:[{t:"No, I'm full. I just had lunch!",best:true,mn:"Үгүй, цадсан. Дөнгөж өдрийн хоол идсэн!"},{t:"No, I have full.",best:false,fix:"be-тэй → I'm full."}]}
    ]}
  },
  {
    id:'a1m5l10', title:"5.10 Модулийн шалгалт", level:"A1 · М5",
    blurb:"🏆 Ресторанд бүрэн захиалга өгөх",
    rule:{
      h:"Давтлага: Модуль 5-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 5-ын мэдлэгээ нэгтгэж, ресторанд бүрэн үйлчлүүлэх.<br><br>
        <b>Модуль 5-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">an apple ⟷ some rice</span><span class="tag">I'd like / Would you like...?</span><span class="tag">love · like · hate + -ing</span><span class="tag">potatoes · knives · fish</span><span class="tag">a cup of · a kilo of</span><span class="tag">Can I have...? / Could I...?</span><span class="tag">How much is/are...?</span><span class="tag">too much / too many</span><span class="tag">have breakfast · be hungry</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Ресторанд (бүрэн харилцан яриа):</b> цэс асуух → захиалах → нэмэлт хүсэх → үнэ асуух → тооцоо хийх. Жишээ:<br>
        <i>— Can I have the menu, please? … I'd like the soup and some rice. Could I have a glass of water too? … Yes, and two cups of milk tea, please. … How much is it in total? … Can I pay by card? … Thank you! The food was delicious.</i><br>
        Үүнийг Ruby-тэй (Яриа таб) бүтнээр дадлагажуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Рестораны 5 алхам: <b>Menu → I'd like → Anything else? → How much? → The bill, please.</b></p>`
    },
    phrases:[
      {en:"Can I have the menu, please?", pron:"кэн ай хэв зэ мэню, плийз?", mn:"Цэс өгөхгүй юу?"},
      {en:"I'd like the soup and a cup of tea.", pron:"айд лайк зэ сүп энд э кап ов тий.", mn:"Шөл, нэг аяга цай авъя."},
      {en:"Could I have some bread too?", pron:"күд ай хэв сам брэд ту?", mn:"Талх ч бас авч болох уу?"},
      {en:"How much is it in total?", pron:"хау мач из ит ин тоутл?", mn:"Нийт хэд болох вэ?"},
      {en:"The food was delicious. Thank you!", pron:"зэ фүд воз дэлишэс. сэнк ю!", mn:"Хоол их амттай байлаа. Баярлалаа!"}
    ],
    exercises:[
      {q:"Давтлага (a/some):", parts:["I'd like ", " rice."], opts:["some","a"], a:0, fix:"Тоологдохгүй → some rice."},
      {q:"Давтлага (эелдэг):", parts:["", " have some water, please?"], opts:["Could I","Give me"], a:0, fix:"Эелдэг → Could I have...?"},
      {q:"Давтлага (үнэ):", parts:["How much ", " these buuz?"], opts:["are","is"], a:0, fix:"Олон → How much are."},
      {q:"Давтлага (too):", parts:["Don't put too ", " salt!"], opts:["much","many"], a:0, fix:"Давс → too much."}
    ],
    speak:{ scene:'🏆 Шалгалт: Ресторанд', turns:[
      {ruby:"Welcome! A table for one?", pron:"вэлкам! э тэйбл фор ван?", mn:"Тавтай морил! Нэг хүний ширээ юу?",
        choices:[{t:"Yes, please. Can I have the menu?",best:true,mn:"Тийм ээ. Цэс өгөхгүй юу?"},{t:"Yes. Menu.",best:false,fix:"Эелдэг: Yes, please. Can I have the menu?"}]},
      {ruby:"Here you are. Are you ready to order?", pron:"хийр ю а. а ю рэди ту ордэр?", mn:"Энэ байна. Захиалга өгөх үү?",
        choices:[{t:"Yes. I'd like the soup and a cup of milk tea.",best:true,mn:"Тийм. Шөл, нэг аяга сүүтэй цай авъя."},{t:"I want soup, milk tea.",best:false,fix:"I'd like the soup and A CUP OF milk tea."}]},
      {ruby:"Anything else?", pron:"энисинг элс?", mn:"Өөр юм?",
        choices:[{t:"Could I have some bread too? And how much is it in total?",best:true,mn:"Талх ч бас авч болох уу? Нийт хэд болох вэ?"},{t:"Bread. How much cost?",best:false,fix:"Could I have some bread? How much IS IT in total?"}]}
    ]}
  },
  {
    id:'a1m6l1', title:"6.1 Хотын газар", level:"A1 · М6",
    blurb:"go to the bank / go to school — артикльгүй газрууд",
    rule:{
      h:"Зорилго ба дүрэм: the ⟷ артикльгүй газрын нэрс",
      html:`<b>🎯 Зорилго:</b> Хотын газруудыг нэрлэж, артикль хэрэгтэй эсэхийг мэдэх.<br><br>
        Ихэнх газарт <b>the</b> хэрэгтэй, гэхдээ <b>онцгой бүлэг</b> артикльгүй!
        <div style="margin:12px 0"><span class="tag">THE-тэй: go to the bank, the park, the shop, the cinema</span><span class="tag">АРТИКЛЬГҮЙ: go to school, go to work, go to bed, go home, go to hospital*</span></div>
        <b>Яагаад?</b> Артикльгүй нь «зориулалтаар нь» гэсэн утга: <b>go to school</b> = сурахаар явах. Харин <b>go to the school</b> = тэр байшин руу явах (жишээ: эцэг эх уулзалтад).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        bank /bæŋk/ — банк · shop /ʃɒp/ — дэлгүүр · market /ˈmɑːrkɪt/ — зах<br>
        hospital /ˈhɒspɪtl/ — эмнэлэг · pharmacy /ˈfɑːrməsi/ — эмийн сан · post office /ˈpoʊst ɒfɪs/ — шуудан<br>
        park /pɑːrk/ — цэцэрлэгт хүрээлэн · station /ˈsteɪʃn/ — буудал · square /skwer/ — талбай · center /ˈsentər/ — төв</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I go to the work» ✗ → <b>go to work</b>. «I go to the home» ✗ → <b>go home</b> (to ч байхгүй!). Гэхдээ <b>go to the bank</b> ✓ — банк энэ дүрэмд ордоггүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ажил, сургууль, ор, гэр — эдгээр 4 нь артикльгүй» (work, school, bed, home). Бусад бүгд the-тэй.</p>`
    },
    phrases:[
      {en:"Is there a bank near here?", pron:"из зэр э бэнк нийр хийр?", mn:"Энэ ойролцоо банк бий юу?"},
      {en:"I go to the market every Saturday.", pron:"ай гоу ту зэ маркэт эври сэтэрдэй.", mn:"Би Бямба бүр зах руу явдаг."},
      {en:"My son goes to school at eight.", pron:"май сан гоуз ту скүл эт эйт.", mn:"Хүү маань 8 цагт сургуульдаа явдаг."},
      {en:"The pharmacy is next to the post office.", pron:"зэ фармэси из нэкст ту зэ поуст офис.", mn:"Эмийн сан шуудангийн хажууд байдаг."},
      {en:"I go home after work.", pron:"ай гоу хоум афтэр вөрк.", mn:"Ажлын дараа гэртээ харьдаг."}
    ],
    exercises:[
      {q:"Артикль:", parts:["I go to ", " bank."], opts:["the","—"], a:0, fix:"Банк → go to THE bank."},
      {q:"Артикль:", parts:["He goes to ", " every morning."], opts:["work","the work"], a:0, fix:"Ажил → артикльгүй: go to work."},
      {q:"Артикль:", parts:["I go ", " after work."], opts:["home","to the home"], a:0, fix:"Гэр → go home (to ч байхгүй)."},
      {q:"Артикль:", parts:["My daughter goes to ", "."], opts:["school","the school"], a:0, fix:"Сурахаар → go to school."}
    ],
    speak:{ scene:'Ойролцоо юу байна', turns:[
      {ruby:"Is there a pharmacy near here?", pron:"из зэр э фармэси нийр хийр?", mn:"Энэ ойролцоо эмийн сан бий юу?",
        choices:[{t:"Yes, there is one next to the bank.",best:true,mn:"Тийм, банкны хажууд нэг бий."},{t:"Yes, next bank.",best:false,fix:"Бүтэн: There is one NEXT TO THE bank."}]},
      {ruby:"Thank you! Where are you going now?", pron:"сэнк ю! вэр а ю гоуинг нау?", mn:"Баярлалаа! Та одоо хаашаа явж байна?",
        choices:[{t:"I'm going to the market.",best:true,mn:"Зах руу явж байна."},{t:"I go market.",best:false,fix:"Яг одоо → I'm going TO THE market."}]},
      {ruby:"And after that?", pron:"энд афтэр зэт?", mn:"Дараа нь?",
        choices:[{t:"Then I go home.",best:true,mn:"Дараа нь гэртээ харина."},{t:"Then I go to the home.",best:false,fix:"go home (артикль ч, to ч байхгүй)."}]}
    ]}
  },
  {
    id:'a1m6l2', title:"6.2 Зам асуух", level:"A1 · М6",
    blurb:"How do I get to...? — зам асуух",
    rule:{
      h:"Зорилго ба дүрэм: зам асуух эелдэг хэллэгүүд",
      html:`<b>🎯 Зорилго:</b> Танихгүй хүнээс эелдэгээр зам асуух.<br><br>
        <b>Эхлээд анхаарал татна:</b> <span class="tag">Excuse me... (Sorry биш!)</span><br><br>
        <b>Зам асуух 3 арга:</b>
        <div style="margin:12px 0"><span class="tag">Where is the bank? (энгийн)</span><span class="tag">How do I get to the bank? (илүү жам ёсны)</span><span class="tag">Is there a bank near here? (байгаа эсэх)</span></div>
        <b>Ойлгоогүй бол:</b> Sorry, can you repeat that? / Can you say it slowly? / Can you show me on the map?
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        excuse me /ɪkˈskjuːz miː/ — уучлаарай · get to /ɡet tuː/ — хүрэх · way /weɪ/ — зам<br>
        lost /lɒst/ — төөрсөн · find /faɪnd/ — олох · show /ʃoʊ/ — үзүүлэх<br>
        repeat /rɪˈpiːt/ — давтах · sure /ʃʊr/ — мэдээж · sorry /ˈsɒri/ — уучлаарай · problem /ˈprɒbləm/ — асуудал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Хүнийг зогсооход <b>Excuse me</b> (Sorry биш — Sorry нь уучлал гуйхад). «Where is bank?» ✗ → <b>Where is THE bank?</b> Мөн «How can I go to...?» ✗ → <b>How do I GET to...?</b></p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Excuse me → асуулт → Thank you» — 3 алхмыг заавал бүтнээр.</p>`
    },
    phrases:[
      {en:"Excuse me, how do I get to the station?", pron:"икскьюз ми, хау ду ай гет ту зэ стэйшн?", mn:"Уучлаарай, буудал руу яаж очих вэ?"},
      {en:"Excuse me, where is the post office?", pron:"икскьюз ми, вэр из зэ поуст офис?", mn:"Уучлаарай, шуудан хаана байдаг вэ?"},
      {en:"I think I am lost.", pron:"ай синк ай эм лост.", mn:"Би төөрсөн бололтой."},
      {en:"Sorry, can you repeat that?", pron:"сори, кэн ю рипийт зэт?", mn:"Уучлаарай, дахин хэлж өгөхгүй юу?"},
      {en:"Can you show me on the map?", pron:"кэн ю шоу ми он зэ мэп?", mn:"Газрын зураг дээр үзүүлж өгөхгүй юу?"}
    ],
    exercises:[
      {q:"Анхаарал татах:", parts:["", ", where is the bank?"], opts:["Excuse me","Sorry"], a:0, fix:"Хүнийг зогсооход → Excuse me."},
      {q:"Зам асуух:", parts:["How do I ", " to the station?"], opts:["get","go"], a:0, fix:"How do I GET to...?"},
      {q:"Артикль:", parts:["Where is ", " hospital?"], opts:["the","—"], a:0, fix:"Тодорхой газар → the hospital."},
      {q:"Ойлгоогүй:", parts:["Can you ", " that, please?"], opts:["repeat","again"], a:0, fix:"Дахин хэлэх → repeat."}
    ],
    speak:{ scene:'Гудамжинд зам асуух', turns:[
      {ruby:"Hello. Can I help you?", pron:"хэлоу. кэн ай хэлп ю?", mn:"Сайн уу. Танд туслах уу?",
        choices:[{t:"Excuse me, how do I get to the station?",best:true,mn:"Уучлаарай, буудал руу яаж очих вэ?"},{t:"Where station?",best:false,fix:"Excuse me, how do I get to THE station?"}]},
      {ruby:"Go straight and turn left at the bank.", pron:"гоу стрэйт энд төрн лефт эт зэ бэнк.", mn:"Чигээрээ яваад банкны дэргэд зүүн тийш эргэ.",
        choices:[{t:"Sorry, can you repeat that slowly?",best:true,mn:"Уучлаарай, удаан дахин хэлж өгөхгүй юу?"},{t:"What?",best:false,fix:"Эелдэг: Sorry, can you repeat that?"}]},
      {ruby:"Sure. Go straight, then turn left.", pron:"шүр. гоу стрэйт, зэн төрн лефт.", mn:"Тэгье. Чигээрээ яваад дараа нь зүүн тийш эргэ.",
        choices:[{t:"Thank you very much!",best:true,mn:"Маш их баярлалаа!"},{t:"Ok.",best:false,fix:"Заавал талархал: Thank you very much!"}]}
    ]}
  },
  {
    id:'a1m6l3', title:"6.3 Зүүн/баруун", level:"A1 · М6",
    blurb:"go along, go past, cross — хөдөлгөөний угтвар",
    rule:{
      h:"Зорилго ба дүрэм: хөдөлгөөний угтвар үгс",
      html:`<b>🎯 Зорилго:</b> Замын заавар өгч, хөдөлгөөний угтвар үгсийг эзэмших.<br><br>
        Модуль 2/4-т <b>байрлал</b> (in, on, next to) үзсэн. Одоо <b>хөдөлгөөн</b>:
        <div style="margin:12px 0"><span class="tag">go along = дагаж явах</span><span class="tag">go past = өнгөрөх</span><span class="tag">go through = дундуур гарах</span><span class="tag">cross = гатлах</span><span class="tag">turn into = эргэж орох</span><span class="tag">go straight = чигээрээ</span></div>
        <b>Заавар = тушаах хэлбэр:</b> Go straight. Turn left. Cross the street.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        straight /streɪt/ — чигээрээ · turn /tɜːrn/ — эргэх · along /əˈlɒŋ/ — дагаж<br>
        past /pæst/ — өнгөрөөд · through /θruː/ — дундуур · cross /krɒs/ — гатлах<br>
        corner /ˈkɔːrnər/ — булан · traffic light /ˈtræfɪk laɪt/ — гэрлэн дохио · block /blɒk/ — квартал · until /ənˈtɪl/ — хүртэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Turn to left» ✗ → <b>turn left</b> (to хэрэггүй!). «Go straight ahead» ✓ зөв, «go straight on» ✓ (Британи). Мөн «pass the bank» ✓ / «go past the bank» ✓ — хоёулаа болно.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Замын 3 үйлдэл: <b>GO</b> (straight/along) → <b>TURN</b> (left/right) → <b>CROSS</b> (the street).</p>`
    },
    phrases:[
      {en:"Go straight for two blocks.", pron:"гоу стрэйт фор ту блокс.", mn:"Хоёр квартал чигээрээ яв."},
      {en:"Turn left at the traffic light.", pron:"төрн лефт эт зэ трэфик лайт.", mn:"Гэрлэн дохион дээр зүүн тийш эргэ."},
      {en:"Go along this street until the bank.", pron:"гоу элонг зис стрийт антил зэ бэнк.", mn:"Энэ гудамжийг дагаад банк хүртэл яв."},
      {en:"Go past the school and turn right.", pron:"гоу паст зэ скүл энд төрн райт.", mn:"Сургуулийг өнгөрөөд баруун тийш эргэ."},
      {en:"Cross the street at the corner.", pron:"крос зэ стрийт эт зэ корнэр.", mn:"Буланд гудамжаа гатал."}
    ],
    exercises:[
      {q:"Эргэх:", parts:["", " left at the bank."], opts:["Turn","Turn to"], a:0, fix:"«to» хэрэггүй → Turn left."},
      {q:"Дагаж:", parts:["Go ", " this street."], opts:["along","in"], a:0, fix:"Дагаж явах → go along."},
      {q:"Өнгөрөх:", parts:["Go ", " the park, then turn right."], opts:["past","through"], a:0, fix:"Өнгөрөх → go past."},
      {q:"Гатлах:", parts:["", " the street at the light."], opts:["Cross","Go"], a:0, fix:"Гатлах → Cross the street."}
    ],
    speak:{ scene:'Заавар өгөх', turns:[
      {ruby:"How do I get to the hospital?", pron:"хау ду ай гет ту зэ хоспитал?", mn:"Эмнэлэг рүү яаж очих вэ?",
        choices:[{t:"Go straight, then turn left at the bank.",best:true,mn:"Чигээрээ яваад банкны дэргэд зүүн тийш эргэ."},{t:"Straight, turn to left.",best:false,fix:"Turn LEFT (to-гүй)."}]},
      {ruby:"Okay. And then?", pron:"оукэй. энд зэн?", mn:"За. Дараа нь?",
        choices:[{t:"Go past the school and cross the street.",best:true,mn:"Сургуулийг өнгөрөөд гудамжаа гатал."},{t:"Pass school, street go.",best:false,fix:"Go PAST the school and CROSS the street."}]},
      {ruby:"Is it far?", pron:"из ит фар?", mn:"Хол уу?",
        choices:[{t:"No, about five minutes on foot.",best:true,mn:"Үгүй, явганаар 5 минут орчим."},{t:"No, five minutes walking foot.",best:false,fix:"about five minutes ON FOOT."}]}
    ]}
  },
  {
    id:'a1m6l4', title:"6.4 Тээврийн хэрэгсэл", level:"A1 · М6",
    blurb:"by bus, on foot — тээврийн угтвар",
    rule:{
      h:"Зорилго ба дүрэм: by / on (тээвэр)",
      html:`<b>🎯 Зорилго:</b> Ямар тээврээр явдгаа хэлэх.<br><br>
        <b>by + тээвэр</b> (артикльгүй!):
        <div style="margin:12px 0"><span class="tag">by bus, by car, by taxi, by train, by plane, by bike</span></div>
        <b>Онцгой тохиолдол:</b>
        <div style="margin:12px 0"><span class="tag">on foot = явганаар (by foot ✗!)</span><span class="tag">in my car = миний машинаар (эзэмшигчтэй бол in/on)</span><span class="tag">on the bus = автобусан дээр (байрлал)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        bus /bʌs/ — автобус · taxi /ˈtæksi/ — такси · train /treɪn/ — галт тэрэг<br>
        plane /pleɪn/ — онгоц · bike /baɪk/ — дугуй · walk /wɔːk/ — алхах<br>
        drive /draɪv/ — жолоодох · ride /raɪd/ — унах · stop /stɒp/ — буудал/зогсоол · take /teɪk/ — суух (тээвэрт)</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «by foot» ✗ → <b>on foot</b>. «by the bus» ✗ → артикльгүй: <b>by bus</b>. Мөн «I take bus» ✗ → <b>I take THE bus</b> (take-тэй бол артикль хэрэгтэй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хөлөг бүхэн BY, хөл ганцаараа ON» — by bus, by car... but ON FOOT.</p>`
    },
    phrases:[
      {en:"I go to work by bus.", pron:"ай гоу ту вөрк бай бас.", mn:"Би ажилдаа автобусаар явдаг."},
      {en:"She goes to school on foot.", pron:"ши гоуз ту скүл он фүт.", mn:"Тэр сургуульдаа явганаар явдаг."},
      {en:"We usually take a taxi at night.", pron:"ви южуэли тэйк э тэкси эт найт.", mn:"Бид шөнө ихэвчлэн такси барьдаг."},
      {en:"My husband drives to work.", pron:"май хазбэнд драйвз ту вөрк.", mn:"Нөхөр маань ажилдаа машинаар явдаг."},
      {en:"How do you get to the center?", pron:"хау ду ю гет ту зэ сэнтэр?", mn:"Та төв рүү яаж явдаг вэ?"}
    ],
    exercises:[
      {q:"Тээвэр:", parts:["I go to work ", " bus."], opts:["by","on"], a:0, fix:"Тээвэр → by bus."},
      {q:"Онцгой:", parts:["She walks. She goes ", "."], opts:["on foot","by foot"], a:0, fix:"Явганаар → ON foot."},
      {q:"Артикль:", parts:["I go there ", "."], opts:["by taxi","by the taxi"], a:0, fix:"by + артикльгүй → by taxi."},
      {q:"take:", parts:["I take ", " every morning."], opts:["the bus","bus"], a:0, fix:"take THE bus (артикльтай)."}
    ],
    speak:{ scene:'Ажилдаа явах', turns:[
      {ruby:"How do you get to work?", pron:"хау ду ю гет ту вөрк?", mn:"Ажилдаа яаж явдаг вэ?",
        choices:[{t:"I usually go by bus.",best:true,mn:"Ихэвчлэн автобусаар явдаг."},{t:"I go by the bus.",best:false,fix:"by bus (артикльгүй)."}]},
      {ruby:"How long does it take?", pron:"хау лонг даз ит тэйк?", mn:"Хэр удаж вэ?",
        choices:[{t:"About thirty minutes.",best:true,mn:"30 минут орчим."},{t:"Thirty minutes take.",best:false,fix:"Богино: About thirty minutes."}]},
      {ruby:"Do you ever walk?", pron:"ду ю эвэр вок?", mn:"Хэзээ нэгэн цагт алхдаг уу?",
        choices:[{t:"Yes, in summer I sometimes go on foot.",best:true,mn:"Тийм, зун заримдаа явганаар явдаг."},{t:"Yes, by foot sometimes.",best:false,fix:"ON foot (by foot ✗)."}]}
    ]}
  },
  {
    id:'a1m6l5', title:"6.5 Тасалбар", level:"A1 · М6",
    blurb:"You have to buy a ticket — have to / must",
    rule:{
      h:"Зорилго ба дүрэм: have to / must (шаардлага)",
      html:`<b>🎯 Зорилго:</b> Тасалбар авч, «заавал хийх ёстой» гэдгийг хэлэх.<br><br>
        <b>have to / must</b> = ёстой, хэрэгтэй:
        <div style="margin:12px 0"><span class="tag">I have to / You have to / He HAS to</span><span class="tag">must — бүх биед адилхан: I must, she must</span></div>
        <b>Ялгаа:</b> have to = гаднаас ирсэн дүрэм (You have to buy a ticket — хууль). must = дотоод шийдэл (I must study — өөрөө шийдсэн).<br>
        <b>Үгүйсгэл:</b> don't have to = ёсгүй биш, хэрэггүй. mustn't = ХОРИГЛОНО!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        ticket /ˈtɪkɪt/ — тасалбар · buy /baɪ/ — худалдаж авах · single /ˈsɪŋɡl/ — нэг талын<br>
        return /rɪˈtɜːrn/ — хоёр талын · adult /ˈædʌlt/ — насанд хүрсэн · child /tʃaɪld/ — хүүхэд<br>
        platform /ˈplætfɔːrm/ — тавцан · seat /siːt/ — суудал · free /friː/ — үнэгүй · queue /kjuː/ — дараалал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She have to go» ✗ → <b>She HAS to go</b>. «I must to go» ✗ → must-ийн ард to байхгүй: <b>I must go</b>. Мөн «You don't have to» = хэрэггүй ⟷ «You mustn't» = ХОРИГЛОНО — тэс өөр утга!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE TO — TO-той. MUST — TO-гүй» (I have to go / I must go).</p>`
    },
    phrases:[
      {en:"You have to buy a ticket first.", pron:"ю хэв ту бай э тикит фөрст.", mn:"Эхлээд тасалбар авах хэрэгтэй."},
      {en:"How much is a single ticket?", pron:"хау мач из э сингл тикит?", mn:"Нэг талын тасалбар хэд вэ?"},
      {en:"Two adults and one child, please.", pron:"ту эдалтс энд ван чайлд, плийз.", mn:"Хоёр том хүн, нэг хүүхэд."},
      {en:"Children under five travel free.", pron:"чилдрэн андэр файв трэвл фрий.", mn:"5-аас доош насны хүүхэд үнэгүй."},
      {en:"I must go now. My train leaves at six.", pron:"ай маст гоу нау. май трэйн лийвз эт сикс.", mn:"Явах ёстой. Галт тэрэг маань 6 цагт хөдөлнө."}
    ],
    exercises:[
      {q:"have/has to:", parts:["She ", " to buy a ticket."], opts:["has","have"], a:0, fix:"She → has to."},
      {q:"must + :", parts:["I must ", " now."], opts:["go","to go"], a:0, fix:"must-ийн ард to байхгүй → must go."},
      {q:"Утга:", parts:["Children are free. You ", " pay."], opts:["don't have to","mustn't"], a:0, fix:"Хэрэггүй → don't have to."},
      {q:"Хориг:", parts:["You ", " smoke here! (хориотой)"], opts:["mustn't","don't have to"], a:0, fix:"Хориглох → mustn't."}
    ],
    speak:{ scene:'Тасалбар авах', turns:[
      {ruby:"Next, please! Where are you going?", pron:"нэкст, плийз! вэр а ю гоуинг?", mn:"Дараагийнх! Хаашаа явах вэ?",
        choices:[{t:"To Darkhan, please. How much is a ticket?",best:true,mn:"Дархан руу. Тасалбар хэд вэ?"},{t:"Darkhan. Ticket price?",best:false,fix:"Эелдэг: To Darkhan, please. How much is a ticket?"}]},
      {ruby:"Single or return?", pron:"сингл ор ритөрн?", mn:"Нэг талын уу, хоёр талын уу?",
        choices:[{t:"Return, please. Two adults and one child.",best:true,mn:"Хоёр талын. Хоёр том хүн, нэг хүүхэд."},{t:"Return. Two adult, one child.",best:false,fix:"Two adultS (олон тоо)."}]},
      {ruby:"Okay. You have to be at platform three at six.", pron:"оукэй. ю хэв ту би эт плэтформ срий эт сикс.", mn:"За. 6 цагт 3-р тавцанд байх хэрэгтэй.",
        choices:[{t:"Thank you! We must hurry then.",best:true,mn:"Баярлалаа! Тэгвэл яарах ёстой."},{t:"Thank you! We must to hurry.",best:false,fix:"must-ийн ард to байхгүй → must hurry."}]}
    ]}
  },
  {
    id:'a1m6l6', title:"6.6 Газрын зураг", level:"A1 · М6",
    blurb:"It takes 20 minutes — хугацаа хэлэх",
    rule:{
      h:"Зорилго ба дүрэм: It takes... / How long does it take?",
      html:`<b>🎯 Зорилго:</b> Газрын зураг уншиж, хэр удахыг асууж хэлэх.<br><br>
        <b>take</b> = хугацаа зарцуулах. Эзэн нь үргэлж <b>it</b>!
        <div style="margin:12px 0"><span class="tag">How long does it take? = Хэр удах вэ?</span><span class="tag">It takes 20 minutes. = 20 минут болно.</span><span class="tag">It takes an hour by bus.</span></div>
        <b>Хэн болохыг нэмж болно:</b> It takes me 20 minutes to get there.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        map /mæp/ — газрын зураг · hour /ˈaʊər/ — цаг · minute /ˈmɪnɪt/ — минут<br>
        distance /ˈdɪstəns/ — зай · direction /dəˈrekʃn/ — чиглэл · north /nɔːrθ/ — хойд<br>
        south /saʊθ/ — өмнөд · east /iːst/ — зүүн (зүг) · west /west/ — баруун (зүг) · around /əˈraʊnd/ — орчим</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How long time does it take?» ✗ → <b>How long does it take?</b> (time хэрэггүй). «I take 20 minutes» ✗ → <b>IT takes 20 minutes</b> (эзэн нь it!). Мөн «an hour» — h дуудагдахгүй тул <b>an</b>!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цаг хугацааны эзэн нь үргэлж IT» — It takes... (би биш!).</p>`
    },
    phrases:[
      {en:"How long does it take to get there?", pron:"хау лонг даз ит тэйк ту гет зэр?", mn:"Тийшээ очиход хэр удах вэ?"},
      {en:"It takes about twenty minutes.", pron:"ит тэйкс эбаут твэнти минитс.", mn:"20 минут орчим болно."},
      {en:"It takes an hour by bus.", pron:"ит тэйкс эн ауэр бай бас.", mn:"Автобусаар нэг цаг болно."},
      {en:"The museum is north of the square.", pron:"зэ мьюзиэм из норс ов зэ сквэр.", mn:"Музей талбайн хойд талд байдаг."},
      {en:"It takes me ten minutes on foot.", pron:"ит тэйкс ми тэн минитс он фүт.", mn:"Надад явганаар 10 минут болдог."}
    ],
    exercises:[
      {q:"Эзэн:", parts:["", " takes twenty minutes."], opts:["It","I"], a:0, fix:"Хугацаанд эзэн нь → It takes."},
      {q:"Асуулт:", parts:["How ", " does it take?"], opts:["long","much time"], a:0, fix:"Хугацаа → How long...?"},
      {q:"Артикль:", parts:["It takes ", " hour."], opts:["an","a"], a:0, fix:"h дуудагдахгүй → an hour."},
      {q:"Тээвэр:", parts:["It takes 40 minutes ", " car."], opts:["by","on"], a:0, fix:"Тээвэр → by car."}
    ],
    speak:{ scene:'Зам төлөвлөх', turns:[
      {ruby:"I want to go to the museum. Where is it?", pron:"ай вонт ту гоу ту зэ мьюзиэм. вэр из ит?", mn:"Музей рүү очмоор байна. Хаана байдаг вэ?",
        choices:[{t:"It is north of the square. Look at the map.",best:true,mn:"Талбайн хойд талд. Газрын зургийг хар."},{t:"North square.",best:false,fix:"Бүтэн: It is north OF THE square."}]},
      {ruby:"How long does it take on foot?", pron:"хау лонг даз ит тэйк он фүт?", mn:"Явганаар хэр удах вэ?",
        choices:[{t:"It takes about fifteen minutes.",best:true,mn:"15 минут орчим болно."},{t:"I take fifteen minutes.",best:false,fix:"IT takes fifteen minutes."}]},
      {ruby:"And by bus?", pron:"энд бай бас?", mn:"Автобусаар?",
        choices:[{t:"Only five minutes, but you have to buy a ticket.",best:true,mn:"Ердөө 5 минут, гэхдээ тасалбар авах хэрэгтэй."},{t:"Five minutes, ticket buy.",best:false,fix:"...but you HAVE TO buy a ticket."}]}
    ]}
  },
  {
    id:'a1m6l7', title:"6.7 Уулзах газар", level:"A1 · М6",
    blurb:"Let's meet! How about...? — санал болгох",
    rule:{
      h:"Зорилго ба дүрэм: Let's / How about / Why don't we",
      html:`<b>🎯 Зорилго:</b> Уулзалт товлож, санал болгож, зөвшөөрөх/татгалзах.<br><br>
        <b>Санал болгох 3 хэлбэр (бүтэц нь өөр!):</b>
        <div style="margin:12px 0"><span class="tag">Let's + үйл үг: Let's meet at six.</span><span class="tag">How about + -ing: How about meeting at six?</span><span class="tag">Why don't we + үйл үг: Why don't we meet at six?</span></div>
        <b>Хариулт:</b> Good idea! / Sounds good! / Sure! ⟷ Sorry, I can't. / Maybe another time.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        meet /miːt/ — уулзах · idea /aɪˈdɪə/ — санаа · plan /plæn/ — төлөвлөгөө<br>
        free /friː/ — чөлөөтэй · busy /ˈbɪzi/ — завгүй · maybe /ˈmeɪbi/ — магадгүй<br>
        later /ˈleɪtər/ — дараа · outside /ˌaʊtˈsaɪd/ — гадаа · entrance /ˈentrəns/ — үүд · sounds /saʊndz/ — сонсогдох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Let's to meet» ✗ → <b>Let's meet</b> (to хэрэггүй). «How about meet?» ✗ → <b>How about meetING?</b> (-ing заавал!). Мөн Let's = Let us.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «LET'S + нүцгэн үйл үг · HOW ABOUT + ING» — хоёрын бүтэц өөр!</p>`
    },
    phrases:[
      {en:"Let's meet at the park.", pron:"летс мийт эт зэ парк.", mn:"Цэцэрлэгт хүрээлэнд уулзъя."},
      {en:"How about meeting at six?", pron:"хау эбаут мийтинг эт сикс?", mn:"6 цагт уулзвал ямар вэ?"},
      {en:"Why don't we meet outside the cinema?", pron:"вай доунт ви мийт аутсайд зэ синэма?", mn:"Кино театрын гадаа уулзвал яасан юм бэ?"},
      {en:"Good idea! Sounds good.", pron:"гүд айдиа! саундз гүд.", mn:"Гоё санаа! Сайхан байна."},
      {en:"Sorry, I can't. I'm busy today.", pron:"сори, ай кант. айм бизи тудэй.", mn:"Уучлаарай, чадахгүй. Өнөөдөр завгүй."}
    ],
    exercises:[
      {q:"Let's + :", parts:["Let's ", " at six."], opts:["meet","to meet"], a:0, fix:"Let's + нүцгэн үйл үг → Let's meet."},
      {q:"How about + :", parts:["How about ", " at the park?"], opts:["meeting","meet"], a:0, fix:"How about + -ing → meeting."},
      {q:"Санал:", parts:["", " we go together?"], opts:["Why don't","How about"], a:0, fix:"Why don't we + үйл үг."},
      {q:"Хариулт:", parts:["Let's go! — ", "!"], opts:["Good idea","Good ideas"], a:0, fix:"Тогтмол хэллэг → Good idea!"}
    ],
    speak:{ scene:'Уулзалт товлох', turns:[
      {ruby:"Are you free tomorrow?", pron:"а ю фрий тумороу?", mn:"Маргааш чөлөөтэй юу?",
        choices:[{t:"Yes! Let's meet in the afternoon.",best:true,mn:"Тийм! Үдээс хойш уулзъя."},{t:"Yes! Let's to meet.",best:false,fix:"Let's MEET (to-гүй)."}]},
      {ruby:"Great! Where?", pron:"грэйт! вэр?", mn:"Гоё! Хаана?",
        choices:[{t:"How about meeting outside the cinema?",best:true,mn:"Кино театрын гадаа уулзвал ямар вэ?"},{t:"How about meet cinema?",best:false,fix:"How about meetING outside the cinema?"}]},
      {ruby:"Perfect. What time?", pron:"пөрфэкт. вот тайм?", mn:"Сайхан. Хэдэн цагт?",
        choices:[{t:"Why don't we meet at half past four?",best:true,mn:"4 цаг хагаст уулзвал яасан юм бэ?"},{t:"Four thirty ok?",best:false,fix:"Илүү: Why don't we meet at half past four?"}]}
    ]}
  },
  {
    id:'a1m6l8', title:"6.8 Хол/ойр", level:"A1 · М6",
    blurb:"closer than, bigger than — харьцуулах",
    rule:{
      h:"Зорилго ба дүрэм: харьцуулах зэрэг (-er than)",
      html:`<b>🎯 Зорилго:</b> Хоёр газрыг харьцуулж, аль нь ойр/хол болохыг хэлэх.<br><br>
        <b>Богино тэмдэг нэр + -er + than:</b>
        <div style="margin:12px 0"><span class="tag">near → nearer than</span><span class="tag">close → closer than</span><span class="tag">big → bigger than (гийгүүлэгч давхарлана!)</span><span class="tag">easy → easier than (y → ier)</span></div>
        <b>Урт тэмдэг нэр (2+ үе) → more + than:</b>
        <div style="margin:12px 0"><span class="tag">expensive → more expensive than</span><span class="tag">beautiful → more beautiful than</span></div>
        <b>Онцгой:</b> good → better than, bad → worse than, far → farther than.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        near /nɪr/ — ойр · far /fɑːr/ — хол · close /kloʊs/ — ойрхон<br>
        quick /kwɪk/ — хурдан · slow /sloʊ/ — удаан · easy /ˈiːzi/ — хялбар<br>
        better /ˈbetər/ — илүү сайн · worse /wɜːrs/ — илүү муу · than /ðæn/ — -аас · about /əˈbaʊt/ — орчим</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «more nearer» ✗ — хоёуланг зэрэг хэрэглэж болохгүй: <b>nearer</b> эсвэл <b>more expensive</b>, аль нэг нь. «more good» ✗ → <b>better</b>. Мөн «than» мартах: «The bus is quicker» — юунаас? <b>quicker THAN the taxi</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Богино үг → -ER. Урт үг → MORE. Хоёуланг хамт хэзээ ч болохгүй!»</p>`
    },
    phrases:[
      {en:"The bank is closer than the market.", pron:"зэ бэнк из клоусэр зэн зэ маркэт.", mn:"Банк захаас ойрхон."},
      {en:"The bus is cheaper than the taxi.", pron:"зэ бас из чийпэр зэн зэ тэкси.", mn:"Автобус таксинаас хямд."},
      {en:"The taxi is quicker but more expensive.", pron:"зэ тэкси из квикэр бат мор икспэнсив.", mn:"Такси хурдан ч илүү үнэтэй."},
      {en:"Is the station far from here?", pron:"из зэ стэйшн фар фром хийр?", mn:"Буудал эндээс хол уу?"},
      {en:"Walking is better for your health.", pron:"вокинг из бэтэр фор ёр хэлс.", mn:"Алхах эрүүл мэндэд илүү сайн."}
    ],
    exercises:[
      {q:"Харьцуулах:", parts:["The bank is ", " than the market."], opts:["closer","more close"], a:0, fix:"Богино үг → closer."},
      {q:"Харьцуулах:", parts:["The taxi is ", " than the bus."], opts:["more expensive","expensiver"], a:0, fix:"Урт үг → more expensive."},
      {q:"Онцгой:", parts:["Walking is ", " than driving."], opts:["better","more good"], a:0, fix:"good → better."},
      {q:"than:", parts:["The bus is quicker ", " the train."], opts:["than","from"], a:0, fix:"Харьцуулахад → than."}
    ],
    speak:{ scene:'Аль нь дээр вэ', turns:[
      {ruby:"Should I take the bus or a taxi?", pron:"шүд ай тэйк зэ бас ор э тэкси?", mn:"Автобусаар явах уу, таксигаар уу?",
        choices:[{t:"The bus is cheaper than the taxi.",best:true,mn:"Автобус таксинаас хямд."},{t:"Bus is more cheap.",best:false,fix:"Богино үг → cheapER than."}]},
      {ruby:"But is it slow?", pron:"бат из ит слоу?", mn:"Гэхдээ удаан уу?",
        choices:[{t:"Yes, the taxi is quicker but more expensive.",best:true,mn:"Тийм, такси хурдан ч илүү үнэтэй."},{t:"Yes, taxi more quicker.",best:false,fix:"quicker (more хэрэггүй!)."}]},
      {ruby:"Hmm. Is the station far?", pron:"хм. из зэ стэйшн фар?", mn:"Хм. Буудал хол уу?",
        choices:[{t:"No, it is closer than you think. Let's walk!",best:true,mn:"Үгүй, бодсоноос ойрхон. Алхъя!"},{t:"No, more near.",best:false,fix:"closer than (more near ✗)."}]}
    ]}
  },
  {
    id:'a1m6l9', title:"6.9 Аялал төлөвлөх", level:"A1 · М6",
    blurb:"I'm going to visit — ирээдүйн төлөвлөгөө",
    rule:{
      h:"Зорилго ба дүрэм: be going to (төлөвлөсөн ирээдүй)",
      html:`<b>🎯 Зорилго:</b> Ирээдүйн төлөвлөгөөгөө хэлэх — ⭐ энэ бол A1-ийн хамгийн чухал дүрмийн нэг!<br><br>
        <b>be + going to + үйл үг</b> = төлөвлөсөн, шийдсэн ирээдүй:
        <div style="margin:12px 0"><span class="tag">I am going to visit Darkhan.</span><span class="tag">She is going to take the train.</span><span class="tag">They are going to stay for a week.</span></div>
        <b>Асуулт/үгүйсгэл:</b> Are you going to travel? / I'm not going to fly.<br>
        <b>Present Continuous-тай төстэй ч утга өөр:</b> I am going (яг одоо явж байна) ⟷ I am going TO GO (явахаар төлөвлөж байна).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        travel /ˈtrævl/ — аялах · trip /trɪp/ — аялал · visit /ˈvɪzɪt/ — очих<br>
        stay /steɪ/ — байрлах · book /bʊk/ — захиалах · hotel /hoʊˈtel/ — зочид буудал<br>
        pack /pæk/ — ачаа боох · next week /nekst wiːk/ — ирэх долоо хоног · soon /suːn/ — удахгүй · together /təˈɡeðər/ — хамт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> be-г мартах: «I going to travel» ✗ → <b>I AM going to travel</b>. Мөн «I am going to Darkhan» ✓ зөв (= очно) — энд «go» давхардуулж «going to go» гэх шаардлагагүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Төлөвлөсөн бол GOING TO» — am/is/are + going to + юу хийх.</p>`
    },
    phrases:[
      {en:"I am going to visit my parents next week.", pron:"ай эм гоуинг ту визит май пэрэнтс нэкст вийк.", mn:"Ирэх долоо хоногт эцэг эх дээрээ очно."},
      {en:"We are going to travel by train.", pron:"ви а гоуинг ту трэвл бай трэйн.", mn:"Бид галт тэргээр аялна."},
      {en:"Are you going to book a hotel?", pron:"а ю гоуинг ту бүк э хоутэл?", mn:"Зочид буудал захиалах уу?"},
      {en:"I'm not going to stay long.", pron:"айм нот гоуинг ту стэй лонг.", mn:"Би удаан байхгүй."},
      {en:"She is going to pack tonight.", pron:"ши из гоуинг ту пэк тунайт.", mn:"Тэр өнөө орой ачаагаа боох гэж байна."}
    ],
    exercises:[
      {q:"be мартав уу:", parts:["I ", " going to travel."], opts:["am","—"], a:0, fix:"be заавал → I AM going to."},
      {q:"Хэлбэр:", parts:["She is going to ", " the train."], opts:["take","takes"], a:0, fix:"going to + нүцгэн үйл үг → take."},
      {q:"Асуулт:", parts:["", " you going to book a hotel?"], opts:["Are","Do"], a:0, fix:"be-тэй асуулт → Are you going to...?"},
      {q:"Үгүйсгэл:", parts:["I ", " going to fly."], opts:["am not","don't"], a:0, fix:"be-тэй үгүйсгэл → am not going to."}
    ],
    speak:{ scene:'Аялал төлөвлөх', turns:[
      {ruby:"What are you going to do next week?", pron:"вот а ю гоуинг ту ду нэкст вийк?", mn:"Ирэх долоо хоногт юу хийх вэ?",
        choices:[{t:"I am going to visit my parents in Darkhan.",best:true,mn:"Дархан дахь эцэг эх дээрээ очно."},{t:"I going to visit parents.",best:false,fix:"be мартав → I AM going to visit."}]},
      {ruby:"Nice! How are you going to travel?", pron:"найс! хау а ю гоуинг ту трэвл?", mn:"Гоё! Яаж явах вэ?",
        choices:[{t:"We are going to take the train. It is cheaper.",best:true,mn:"Галт тэргээр явна. Илүү хямд."},{t:"We going to take train.",best:false,fix:"We ARE going to take THE train."}]},
      {ruby:"Are you going to stay long?", pron:"а ю гоуинг ту стэй лонг?", mn:"Удаан байх уу?",
        choices:[{t:"No, I'm not going to stay long — just three days.",best:true,mn:"Үгүй, удаан байхгүй — ердөө 3 хоног."},{t:"No, I don't going to stay.",best:false,fix:"I'M NOT going to stay."}]}
    ]}
  },
  {
    id:'a1m6l10', title:"6.10 Модулийн төсөл", level:"A1 · М6",
    blurb:"🏆 Аялал төлөвлөж, зам зааж өгөх",
    rule:{
      h:"Давтлага: Модуль 6-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 6-ийн мэдлэгээ нэгтгэж, аялал төлөвлөж, зам зааж өгөх.<br><br>
        <b>Модуль 6-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">go to work (артикльгүй) ⟷ go to the bank</span><span class="tag">Excuse me, how do I get to...?</span><span class="tag">go along · go past · cross</span><span class="tag">by bus ⟷ on foot</span><span class="tag">have to / must</span><span class="tag">It takes 20 minutes</span><span class="tag">Let's... / How about ...ing?</span><span class="tag">closer than / more expensive than</span><span class="tag">be going to</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Аялал төлөвлөх (10+ өгүүлбэр):</b> хаашаа, хэзээ, яаж, хэр удах, юу хийх. Жишээ:<br>
        <i>Next month, I am going to visit Kharkhorin with my family. We are going to travel by car because it is cheaper than the bus. It takes about six hours. We are going to stay in a small hotel for two days. First, we are going to visit the museum. Then we are going to walk around the old town. I have to book the hotel this week! I am very excited.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Аялалын 5 асуулт: <b>Хаашаа</b> (to Kharkhorin) → <b>Хэзээ</b> (next month) → <b>Яаж</b> (by car) → <b>Хэр удах</b> (it takes 6 hours) → <b>Юу хийх</b> (going to visit).</p>`
    },
    phrases:[
      {en:"Next month, I am going to visit Kharkhorin.", pron:"нэкст манс, ай эм гоуинг ту визит Хархорин.", mn:"Ирэх сард Хархорин руу явна."},
      {en:"We are going to travel by car.", pron:"ви а гоуинг ту трэвл бай кар.", mn:"Бид машинаар явна."},
      {en:"It takes about six hours.", pron:"ит тэйкс эбаут сикс ауэрз.", mn:"6 цаг орчим болно."},
      {en:"The car is cheaper than the bus for a family.", pron:"зэ кар из чийпэр зэн зэ бас фор э фэмили.", mn:"Гэр бүлд машин автобуснаас хямд."},
      {en:"I have to book the hotel this week.", pron:"ай хэв ту бүк зэ хоутэл зис вийк.", mn:"Энэ долоо хоногт зочид буудал захиалах ёстой."}
    ],
    exercises:[
      {q:"Давтлага (артикль):", parts:["He goes to ", " by bus."], opts:["work","the work"], a:0, fix:"Ажил → артикльгүй."},
      {q:"Давтлага (тээвэр):", parts:["I go there ", " foot."], opts:["on","by"], a:0, fix:"Явганаар → on foot."},
      {q:"Давтлага (ирээдүй):", parts:["We ", " going to travel."], opts:["are","—"], a:0, fix:"be заавал → are going to."},
      {q:"Давтлага (харьцуулах):", parts:["The train is ", " than the plane."], opts:["cheaper","more cheap"], a:0, fix:"Богино үг → cheaper."}
    ],
    speak:{ scene:'🏆 Төсөл: Аялал төлөвлөх', turns:[
      {ruby:"Do you have plans for next month?", pron:"ду ю хэв плэнз фор нэкст манс?", mn:"Ирэх сард төлөвлөгөө бий юу?",
        choices:[{t:"Yes! I am going to visit Kharkhorin with my family.",best:true,mn:"Тийм! Гэр бүлээрээ Хархорин руу явна."},{t:"Yes, I going Kharkhorin.",best:false,fix:"I AM GOING TO visit Kharkhorin."}]},
      {ruby:"How are you going to get there?", pron:"хау а ю гоуинг ту гет зэр?", mn:"Тийшээ яаж очих вэ?",
        choices:[{t:"By car. It is cheaper than the bus, and it takes six hours.",best:true,mn:"Машинаар. Автобуснаас хямд, 6 цаг болно."},{t:"By the car. More cheap, six hours.",best:false,fix:"BY car (артикльгүй), cheapER THAN the bus, IT TAKES six hours."}]},
      {ruby:"Sounds great! What are you going to do there?", pron:"саундз грэйт! вот а ю гоуинг ту ду зэр?", mn:"Гоё юм! Тэнд юу хийх вэ?",
        choices:[{t:"First, we are going to visit the museum. I have to book a hotel!",best:true,mn:"Эхлээд музейд очно. Зочид буудал захиалах ёстой!"},{t:"Museum visit. Book hotel must to.",best:false,fix:"We ARE GOING TO visit... I HAVE TO book a hotel."}]}
    ]}
  },
  {
    id:'a1m7l1', title:"7.1 Хобби", level:"A1 · М7",
    blurb:"good at singing — угтвар + -ing",
    rule:{
      h:"Зорилго ба дүрэм: good at / interested in + -ing",
      html:`<b>🎯 Зорилго:</b> Хоббиогоо ярьж, юунд сайн/сонирхолтой болохоо хэлэх.<br><br>
        <b>Алтан дүрэм:</b> угтвар үгийн (at, in, about) АРД үйл үг ирвэл заавал <b>-ing</b>!
        <div style="margin:12px 0"><span class="tag">good at + -ing: I'm good at singing.</span><span class="tag">bad at + -ing: He's bad at drawing.</span><span class="tag">interested in + -ing: She's interested in cooking.</span></div>
        <b>Нэр үг ч болно:</b> I'm good at English. / I'm interested in music.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        hobby /ˈhɒbi/ — хобби · free time /friː taɪm/ — чөлөөт цаг · drawing /ˈdrɔːɪŋ/ — зурах<br>
        painting /ˈpeɪntɪŋ/ — будаг зурах · knitting /ˈnɪtɪŋ/ — сүлжих · gardening /ˈɡɑːrdnɪŋ/ — цэцэг тарих<br>
        photography /fəˈtɒɡrəfi/ — гэрэл зураг · collect /kəˈlekt/ — цуглуулах · interested /ˈɪntrəstɪd/ — сонирхсон · relaxing /rɪˈlæksɪŋ/ — тайвшруулам</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'm good at sing» ✗ → угтварын ард -ing: <b>good at singING</b>. Мөн «I'm good in cooking» ✗ → <b>good AT cooking</b> (at заавал!). «I interested in» ✗ → be хэрэгтэй: <b>I AM interested in</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Угтвар (at/in/about) хараад л -ING тавь» — at singing, in cooking, about traveling.</p>`
    },
    phrases:[
      {en:"What do you do in your free time?", pron:"вот ду ю ду ин ёр фрий тайм?", mn:"Чөлөөт цагаараа юу хийдэг вэ?"},
      {en:"I am good at cooking.", pron:"ай эм гүд эт күкинг.", mn:"Би хоол хийхдээ сайн."},
      {en:"She is interested in photography.", pron:"ши из интрэстид ин фотогрэфи.", mn:"Тэр гэрэл зураг сонирхдог."},
      {en:"I am bad at drawing, but I love it.", pron:"ай эм бэд эт дроинг, бат ай лав ит.", mn:"Би зурахдаа муу ч дуртай."},
      {en:"Knitting is very relaxing.", pron:"нитинг из вэри рилэксинг.", mn:"Сүлжих их тайвшруулдаг."}
    ],
    exercises:[
      {q:"Угтвар + :", parts:["I'm good at ", "."], opts:["singing","sing"], a:0, fix:"Угтварын ард → -ing: singing."},
      {q:"Аль угтвар:", parts:["She is good ", " English."], opts:["at","in"], a:0, fix:"good AT (good in ✗)."},
      {q:"be хэрэгтэй:", parts:["I ", " interested in music."], opts:["am","—"], a:0, fix:"I AM interested in."},
      {q:"Угтвар + :", parts:["He is interested in ", " photos."], opts:["taking","take"], a:0, fix:"in + -ing → taking."}
    ],
    speak:{ scene:'Хоббиогоо ярих', turns:[
      {ruby:"What do you do in your free time?", pron:"вот ду ю ду ин ёр фрий тайм?", mn:"Чөлөөт цагаараа юу хийдэг вэ?",
        choices:[{t:"I like knitting. I am good at it!",best:true,mn:"Сүлжих дуртай. Сайн сүлждэг!"},{t:"I like knit.",best:false,fix:"like + -ing → knitting."}]},
      {ruby:"Nice! Are you interested in other hobbies?", pron:"найс! а ю интрэстид ин азэр хобиз?", mn:"Гоё! Өөр хобби сонирхдог уу?",
        choices:[{t:"Yes, I am interested in gardening too.",best:true,mn:"Тийм, цэцэг тарих ч бас сонирхдог."},{t:"Yes, I interested in garden.",best:false,fix:"I AM interested IN gardenING."}]},
      {ruby:"Are you good at drawing?", pron:"а ю гүд эт дроинг?", mn:"Зурахдаа сайн уу?",
        choices:[{t:"No, I am bad at drawing! But it is fun.",best:true,mn:"Үгүй, зурахдаа муу! Гэхдээ хөгжилтэй."},{t:"No, I bad at draw.",best:false,fix:"I AM bad at drawING."}]}
    ]}
  },
  {
    id:'a1m7l2', title:"7.2 Спорт", level:"A1 · М7",
    blurb:"play football, do yoga, go swimming — play/do/go",
    rule:{
      h:"Зорилго ба дүрэм: play / do / go + спорт",
      html:`<b>🎯 Зорилго:</b> Спортын нэрийг зөв үйл үгтэй хослуулах — англи хэлний чухал дүрэм!<br><br>
        Спорт бүр өөрийн үйл үгтэй. <b>3 бүлэг:</b>
        <div style="margin:12px 0"><span class="tag">PLAY + бөмбөгтэй тоглоом: play football, play tennis, play chess</span><span class="tag">DO + бие даасан дасгал: do yoga, do exercise, do karate</span><span class="tag">GO + -ing төгсгөлтэй: go swimming, go running, go skiing</span></div>
        <b>Анхаар:</b> play-тэй спортод артикль хэрэггүй: play football (play the football ✗).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        football /ˈfʊtbɔːl/ — хөл бөмбөг · basketball /ˈbæskɪtbɔːl/ — сагсан бөмбөг · tennis /ˈtenɪs/ — теннис<br>
        chess /tʃes/ — шатар · yoga /ˈjoʊɡə/ — иог · swimming /ˈswɪmɪŋ/ — сэлэлт<br>
        running /ˈrʌnɪŋ/ — гүйлт · wrestling /ˈreslɪŋ/ — бөх · team /tiːm/ — баг · win /wɪn/ — ялах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I do football» ✗ → <b>I play football</b>. «I play swimming» ✗ → <b>I go swimming</b>. «I play the football» ✗ → артикльгүй (гэхдээ хөгжимд артикль хэрэгтэй: play THE piano!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Бөмбөг бол PLAY · Ганцаараа бол DO · ING-тэй бол GO».</p>`
    },
    phrases:[
      {en:"I play football every Sunday.", pron:"ай плэй футбол эври сандэй.", mn:"Би Ням гараг бүр хөл бөмбөг тоглодог."},
      {en:"She does yoga in the morning.", pron:"ши даз йога ин зэ морнинг.", mn:"Тэр өглөө иог хийдэг."},
      {en:"We go swimming twice a week.", pron:"ви гоу свиминг твайс э вийк.", mn:"Бид долоо хоногт 2 удаа усанд сэлдэг."},
      {en:"My son plays chess very well.", pron:"май сан плэйз чэс вэри вэл.", mn:"Хүү маань шатар маш сайн тоглодог."},
      {en:"Do you like watching wrestling?", pron:"ду ю лайк вочинг рэслинг?", mn:"Бөх үзэх дуртай юу?"}
    ],
    exercises:[
      {q:"play/do/go:", parts:["I ", " football on Sunday."], opts:["play","do"], a:0, fix:"Бөмбөг → play football."},
      {q:"play/do/go:", parts:["She ", " yoga every day."], opts:["does","plays"], a:0, fix:"Ганцаараа дасгал → do yoga."},
      {q:"play/do/go:", parts:["We ", " swimming."], opts:["go","play"], a:0, fix:"-ing төгсгөл → go swimming."},
      {q:"Артикль:", parts:["He plays ", "."], opts:["basketball","the basketball"], a:0, fix:"Спортод артикльгүй."}
    ],
    speak:{ scene:'Спортын тухай', turns:[
      {ruby:"Do you do any sport?", pron:"ду ю ду эни спорт?", mn:"Спортоор хичээллэдэг үү?",
        choices:[{t:"Yes, I go swimming twice a week.",best:true,mn:"Тийм, долоо хоногт 2 удаа сэлдэг."},{t:"Yes, I play swimming.",best:false,fix:"GO swimming (play ✗)."}]},
      {ruby:"Nice! Does your son play any sport?", pron:"найс! даз ёр сан плэй эни спорт?", mn:"Хүү тань спорт тоглодог уу?",
        choices:[{t:"He plays football and he does karate.",best:true,mn:"Хөл бөмбөг тоглож, каратэ хийдэг."},{t:"He does football, plays karate.",best:false,fix:"PLAY football, DO karate."}]},
      {ruby:"He is busy! Is he good at football?", pron:"хи из бизи! из хи гүд эт футбол?", mn:"Завгүй юм! Хөл бөмбөгт сайн уу?",
        choices:[{t:"Yes, he is very good at it. His team always wins!",best:true,mn:"Тийм, их сайн. Түүний баг үргэлж яладаг!"},{t:"Yes, he good football.",best:false,fix:"He IS good AT it."}]}
    ]}
  },
  {
    id:'a1m7l3', title:"7.3 Хөгжим", level:"A1 · М7",
    blurb:"She sings well — үйлийн байдлын дайвар",
    rule:{
      h:"Зорилго ба дүрэм: adverbs of manner (well, badly)",
      html:`<b>🎯 Зорилго:</b> Хөгжмийн тухай ярьж, «яаж» хийдгийг хэлэх.<br><br>
        <b>Тэмдэг нэр ⟷ Дайвар үг:</b>
        <div style="margin:12px 0"><span class="tag">ХҮНИЙГ дүрслэх (тэмдэг нэр): She is a good singer.</span><span class="tag">ҮЙЛДЛИЙГ дүрслэх (дайвар): She sings well.</span></div>
        <b>Бүтэц:</b> ихэвчлэн тэмдэг нэр + <b>-ly</b>:
        <div style="margin:12px 0"><span class="tag">quick → quickly</span><span class="tag">slow → slowly</span><span class="tag">beautiful → beautifully</span><span class="tag">Онцгой: good → WELL, fast → fast, hard → hard</span></div>
        <b>Хөгжимд артикль:</b> play THE piano, play THE guitar (спортоос ялгаатай!)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        sing /sɪŋ/ — дуулах · song /sɒŋ/ — дуу · band /bænd/ — хамтлаг<br>
        guitar /ɡɪˈtɑːr/ — гитар · piano /piˈænoʊ/ — төгөлдөр хуур · concert /ˈkɒnsərt/ — тоглолт<br>
        loud /laʊd/ — чанга · quietly /ˈkwaɪətli/ — намуухан · beautifully /ˈbjuːtɪfli/ — сайхнаар · practice /ˈpræktɪs/ — дасгал хийх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She sings good» ✗ → <b>She sings WELL</b> (good нь тэмдэг нэр, well нь дайвар!). Гэхдээ «She is good» ✓ (be-ийн ард тэмдэг нэр). Мөн «play piano» ✗ → <b>play THE piano</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ХҮН good · ҮЙЛДЭЛ well» — She is a good singer (хүн) → She sings well (үйлдэл).</p>`
    },
    phrases:[
      {en:"She sings very well.", pron:"ши сингз вэри вэл.", mn:"Тэр маш сайн дуулдаг."},
      {en:"My son plays the piano beautifully.", pron:"май сан плэйз зэ пиано бьютифули.", mn:"Хүү маань төгөлдөр хуурыг сайхан тоглодог."},
      {en:"Can you sing more quietly?", pron:"кэн ю синг мор квайэтли?", mn:"Илүү намуухан дуулж болох уу?"},
      {en:"I listen to music every day.", pron:"ай лисн ту мьюзик эври дэй.", mn:"Би өдөр бүр хөгжим сонсдог."},
      {en:"He practices the guitar every evening.", pron:"хи прэктисиз зэ гитар эври ийвнинг.", mn:"Тэр орой бүр гитарын дасгал хийдэг."}
    ],
    exercises:[
      {q:"good/well:", parts:["She sings very ", "."], opts:["well","good"], a:0, fix:"Үйлдлийг дүрслэх → sings well."},
      {q:"good/well:", parts:["She is a ", " singer."], opts:["good","well"], a:0, fix:"Хүнийг дүрслэх → a good singer."},
      {q:"Артикль:", parts:["He plays ", " guitar."], opts:["the","—"], a:0, fix:"Хөгжимд → play THE guitar."},
      {q:"Дайвар:", parts:["Please speak more ", "."], opts:["slowly","slow"], a:0, fix:"Үйлдэл → slowly."}
    ],
    speak:{ scene:'Хөгжмийн тухай', turns:[
      {ruby:"Do you play any instrument?", pron:"ду ю плэй эни инструмэнт?", mn:"Ямар нэг хөгжим тоглодог уу?",
        choices:[{t:"No, but my son plays the piano.",best:true,mn:"Үгүй, гэхдээ хүү маань төгөлдөр хуур тоглодог."},{t:"No, but my son plays piano.",best:false,fix:"play THE piano (артикльтай)."}]},
      {ruby:"Is he good?", pron:"из хи гүд?", mn:"Сайн тоглодог уу?",
        choices:[{t:"Yes, he plays beautifully!",best:true,mn:"Тийм, сайхан тоглодог!"},{t:"Yes, he plays beautiful.",best:false,fix:"Үйлдэл → beautifulLY."}]},
      {ruby:"Does he sing too?", pron:"даз хи синг ту?", mn:"Дуулдаг ч уу?",
        choices:[{t:"A little. He sings well but very quietly!",best:true,mn:"Жаахан. Сайн дуулдаг ч их намуухан!"},{t:"Yes, he sings good.",best:false,fix:"sings WELL (good ✗)."}]}
    ]}
  },
  {
    id:'a1m7l4', title:"7.4 Кино", level:"A1 · М7",
    blurb:"The film was great! — was / were ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Simple — was / were",
      html:`<b>🎯 Зорилго:</b> ⭐ Анх удаа ӨНГӨРСӨН ЦАГ! Үзсэн кино, өнгөрсөн үйл явдлыг ярих.<br><br>
        <b>be-ийн өнгөрсөн цаг</b> — ердөө 2 үг:
        <div style="margin:12px 0"><span class="tag">I / He / She / It → WAS</span><span class="tag">You / We / They → WERE</span></div>
        <b>Одоо ⟷ Өнгөрсөн:</b>
        <div style="margin:12px 0"><span class="tag">I am tired → I WAS tired</span><span class="tag">They are here → They WERE here</span></div>
        <b>Үгүйсгэл:</b> wasn't / weren't · <b>Асуулт:</b> Was it good? / Were they happy?
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        film /fɪlm/ — кино · movie /ˈmuːvi/ — кино · actor /ˈæktər/ — жүжигчин<br>
        story /ˈstɔːri/ — түүх · funny /ˈfʌni/ — хөгжилтэй · boring /ˈbɔːrɪŋ/ — уйтгартай<br>
        exciting /ɪkˈsaɪtɪŋ/ — сонирхолтой · sad /sæd/ — гунигтай · yesterday /ˈjestərdeɪ/ — өчигдөр · last night /læst naɪt/ — өнгөрсөн шөнө</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The film were good» ✗ → ганц тоо: <b>The film WAS good</b>. Мөн асуултад «Did it was good?» ✗ → be-тэй бол did хэрэггүй: <b>WAS it good?</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «is/am → WAS · are → WERE» — хоёрхон үг, өөр юу ч биш!</p>`
    },
    phrases:[
      {en:"The film was great!", pron:"зэ филм воз грэйт!", mn:"Кино гайхалтай байсан!"},
      {en:"The actors were very good.", pron:"зэ эктэрз вөр вэри гүд.", mn:"Жүжигчид нь маш сайн байлаа."},
      {en:"It wasn't boring at all.", pron:"ит вознт боринг эт ол.", mn:"Огт уйтгартай байгаагүй."},
      {en:"Was the story sad?", pron:"воз зэ стори сэд?", mn:"Түүх нь гунигтай байсан уу?"},
      {en:"We were at the cinema last night.", pron:"ви вөр эт зэ синэма ласт найт.", mn:"Бид өнгөрсөн шөнө кино театрт байсан."}
    ],
    exercises:[
      {q:"was/were:", parts:["The film ", " very good."], opts:["was","were"], a:0, fix:"Ганц → was."},
      {q:"was/were:", parts:["The actors ", " funny."], opts:["were","was"], a:0, fix:"Олон → were."},
      {q:"Үгүйсгэл:", parts:["It ", " boring."], opts:["wasn't","didn't"], a:0, fix:"be-тэй → wasn't."},
      {q:"Асуулт:", parts:["", " it interesting?"], opts:["Was","Did"], a:0, fix:"be-тэй асуулт → Was it...?"}
    ],
    speak:{ scene:'Киноны тухай', turns:[
      {ruby:"Where were you last night?", pron:"вэр вөр ю ласт найт?", mn:"Өнгөрсөн шөнө хаана байсан бэ?",
        choices:[{t:"I was at the cinema with my friend.",best:true,mn:"Найзтайгаа кино театрт байсан."},{t:"I am at the cinema.",best:false,fix:"Өнгөрсөн → I WAS at the cinema."}]},
      {ruby:"Was the film good?", pron:"воз зэ филм гүд?", mn:"Кино сайхан байсан уу?",
        choices:[{t:"Yes, it was great! The actors were very funny.",best:true,mn:"Тийм, гайхалтай! Жүжигчид нь их хөгжилтэй байлаа."},{t:"Yes, it were great.",best:false,fix:"Ганц → it WAS great."}]},
      {ruby:"Was it long?", pron:"воз ит лонг?", mn:"Урт байсан уу?",
        choices:[{t:"A little, but it wasn't boring.",best:true,mn:"Жаахан, гэхдээ уйтгартай байгаагүй."},{t:"A little, but it didn't boring.",best:false,fix:"be-тэй → it WASN'T boring."}]}
    ]}
  },
  {
    id:'a1m7l5', title:"7.5 Дуртай зүйл", level:"A1 · М7",
    blurb:"the best, the most beautiful — давуу зэрэг",
    rule:{
      h:"Зорилго ба дүрэм: superlatives (хамгийн...)",
      html:`<b>🎯 Зорилго:</b> «Хамгийн» гэдгийг хэлж, дуртай зүйлээ онцлох.<br><br>
        Модуль 6-д харьцуулах зэрэг (-er than) үзсэн. Одоо <b>ХАМГИЙН</b>:
        <div style="margin:12px 0"><span class="tag">Богино үг: the + -est → the biggest, the nicest</span><span class="tag">Урт үг: the most + → the most beautiful, the most interesting</span><span class="tag">Онцгой: good → the best, bad → the worst</span></div>
        <b>«the» заавал!</b> Мөн «in/of» дагалдана: the best film IN the world, the tallest OF all.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        best /best/ — хамгийн сайн · worst /wɜːrst/ — хамгийн муу · most /moʊst/ — хамгийн<br>
        favorite /ˈfeɪvərɪt/ — дуртай · popular /ˈpɒpjələr/ — алдартай · famous /ˈfeɪməs/ — нэртэй<br>
        ever /ˈevər/ — хэзээ нэгэн цагт · world /wɜːrld/ — дэлхий · life /laɪf/ — амьдрал · special /ˈspeʃl/ — онцгой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the most best» ✗ — хоёуланг зэрэг хэрэглэж болохгүй: <b>the best</b>. «the most big» ✗ → <b>the biggest</b>. Мөн «the» мартах: «It is best film» ✗ → <b>THE best film</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «-ER than = хоёрын хооронд · THE -EST = бүгдийн дунд №1».</p>`
    },
    phrases:[
      {en:"This is the best film ever!", pron:"зис из зэ бэст филм эвэр!", mn:"Энэ бол миний үзсэн хамгийн сайхан кино!"},
      {en:"It is the most beautiful song.", pron:"ит из зэ моуст бьютифул сонг.", mn:"Энэ бол хамгийн сайхан дуу."},
      {en:"My favorite hobby is knitting.", pron:"май фэйворит хоби из нитинг.", mn:"Миний хамгийн дуртай хобби бол сүлжих."},
      {en:"He is the most famous actor in Mongolia.", pron:"хи из зэ моуст фэймэс эктэр ин Монголиа.", mn:"Тэр бол Монголын хамгийн алдартай жүжигчин."},
      {en:"That was the worst day of my life!", pron:"зэт воз зэ вөрст дэй ов май лайф!", mn:"Тэр бол миний амьдралын хамгийн муу өдөр байлаа!"}
    ],
    exercises:[
      {q:"Давуу зэрэг:", parts:["It is ", " film ever."], opts:["the best","the most best"], a:0, fix:"good → the best (most хэрэггүй)."},
      {q:"Давуу зэрэг:", parts:["She is ", " singer."], opts:["the most popular","the popularest"], a:0, fix:"Урт үг → the most popular."},
      {q:"Давуу зэрэг:", parts:["This is ", " park in the city."], opts:["the biggest","the most big"], a:0, fix:"Богино үг → the biggest."},
      {q:"the:", parts:["It was ", " day of my life."], opts:["the worst","worst"], a:0, fix:"«the» заавал → the worst."}
    ],
    speak:{ scene:'Дуртай зүйлээ хуваалцах', turns:[
      {ruby:"What is your favorite film?", pron:"вот из ёр фэйворит филм?", mn:"Дуртай кино тань юу вэ?",
        choices:[{t:"It is a Mongolian film. It is the best film ever!",best:true,mn:"Монгол кино. Хамгийн сайхан кино!"},{t:"It is most best film.",best:false,fix:"the best film (most хэрэггүй)."}]},
      {ruby:"Why do you like it?", pron:"вай ду ю лайк ит?", mn:"Яагаад дуртай вэ?",
        choices:[{t:"Because the story is the most beautiful I know.",best:true,mn:"Учир нь түүх нь миний мэдэх хамгийн сайхан нь."},{t:"Because story most beautiful.",best:false,fix:"the story IS THE most beautiful."}]},
      {ruby:"Who is your favorite actor?", pron:"хү из ёр фэйворит эктэр?", mn:"Дуртай жүжигчин тань хэн бэ?",
        choices:[{t:"He is the most famous actor in Mongolia!",best:true,mn:"Тэр бол Монголын хамгийн алдартай жүжигчин!"},{t:"He is most famous actor.",best:false,fix:"THE most famous actor."}]}
    ]}
  },
  {
    id:'a1m7l6', title:"7.6 Урилга", level:"A1 · М7",
    blurb:"Would you like to come? — урих",
    rule:{
      h:"Зорилго ба дүрэм: Would you like to...? (урилга)",
      html:`<b>🎯 Зорилго:</b> Хүнийг эелдэгээр урих.<br><br>
        Модуль 5-д «Would you like + <b>юм</b>?» (some tea) үзсэн. Одоо «Would you like + <b>TO + үйл үг</b>?»:
        <div style="margin:12px 0"><span class="tag">Would you like to come? = Ирэх үү?</span><span class="tag">Would you like to join us? = Бидэнтэй нэгдэх үү?</span></div>
        <b>Эелдэг байдлын шат:</b>
        <div style="margin:12px 0"><span class="tag">Would you like to...? 😊 (хамгийн эелдэг)</span><span class="tag">Do you want to...? 🙂 (найзад)</span><span class="tag">Let's... / How about ...ing? (санал)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        invite /ɪnˈvaɪt/ — урих · invitation /ˌɪnvɪˈteɪʃn/ — урилга · join /dʒɔɪn/ — нэгдэх<br>
        come /kʌm/ — ирэх · party /ˈpɑːrti/ — үдэшлэг · birthday /ˈbɜːrθdeɪ/ — төрсөн өдөр<br>
        celebrate /ˈselɪbreɪt/ — тэмдэглэх · guest /ɡest/ — зочин · fun /fʌn/ — хөгжилтэй · together /təˈɡeðər/ — хамт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Would you like come?» ✗ → <b>to</b> заавал: <b>Would you like TO come?</b> Мөн «Would you like coming?» ✗ — энд -ing БИШ, <b>to + үйл үг</b>!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Юм санал болговол шууд (some tea) · Үйлдэл санал болговол TO (to come)».</p>`
    },
    phrases:[
      {en:"Would you like to come to my party?", pron:"вүд ю лайк ту кам ту май парти?", mn:"Миний үдэшлэгт ирэх үү?"},
      {en:"Do you want to join us?", pron:"ду ю вонт ту жойн ас?", mn:"Бидэнтэй нэгдэх үү?"},
      {en:"It is my son's birthday on Saturday.", pron:"ит из май санз бөрсдэй он сэтэрдэй.", mn:"Бямба гарагт хүүгийн минь төрсөн өдөр."},
      {en:"We are going to celebrate at home.", pron:"ви а гоуинг ту сэлэбрэйт эт хоум.", mn:"Бид гэртээ тэмдэглэх гэж байна."},
      {en:"It will be fun! Please come.", pron:"ит вил би фан! плийз кам.", mn:"Хөгжилтэй болно! Ирээрэй."}
    ],
    exercises:[
      {q:"to хэрэгтэй:", parts:["Would you like ", " come?"], opts:["to","—"], a:0, fix:"Үйлдэл → Would you like TO come."},
      {q:"Хэлбэр:", parts:["Would you like to ", " us?"], opts:["join","joining"], a:0, fix:"to + нүцгэн үйл үг → to join."},
      {q:"Юм санал болгох:", parts:["Would you like ", " tea?"], opts:["some","to some"], a:0, fix:"Юм → шууд: some tea."},
      {q:"Найзад:", parts:["", " you want to watch a film?"], opts:["Do","Would"], a:0, fix:"Do you want to...? (найзад энгийн)."}
    ],
    speak:{ scene:'Төрсөн өдрийн урилга', turns:[
      {ruby:"Hi! Are you free on Saturday?", pron:"хай! а ю фрий он сэтэрдэй?", mn:"Сайн уу! Бямбад чөлөөтэй юу?",
        choices:[{t:"Yes, I am. Why?",best:true,mn:"Тийм, чөлөөтэй. Юу гэж?"},{t:"Yes. What?",best:false,fix:"Эелдэг: Yes, I am. Why?"}]},
      {ruby:"It's my son's birthday. Would you like to come?", pron:"итс май санз бөрсдэй. вүд ю лайк ту кам?", mn:"Хүүгийн минь төрсөн өдөр. Ирэх үү?",
        choices:[{t:"I'd love to! What time?",best:true,mn:"Заавал очно! Хэдэн цагт?"},{t:"Ok I come.",best:false,fix:"Дулаахан: I'd love to! What time?"}]},
      {ruby:"At four o'clock. Would you like to bring your children?", pron:"эт фор оклок. вүд ю лайк ту бринг ёр чилдрэн?", mn:"4 цагт. Хүүхдүүдээ авчрах уу?",
        choices:[{t:"Yes, thank you! They will be happy.",best:true,mn:"Тийм, баярлалаа! Тэд баярлана."},{t:"Yes, bring children.",best:false,fix:"Бүтэн: Yes, thank you! They will be happy."}]}
    ]}
  },
  {
    id:'a1m7l7', title:"7.7 Зөвшөөрөх/татгалзах", level:"A1 · М7",
    blurb:"I'd love to! / I'm afraid I can't — хариулах",
    rule:{
      h:"Зорилго ба дүрэм: урилгад эелдэг хариулах",
      html:`<b>🎯 Зорилго:</b> Урилгыг эелдэгээр хүлээн авах эсвэл татгалзах.<br><br>
        <b>ЗӨВШӨӨРӨХ:</b>
        <div style="margin:12px 0"><span class="tag">I'd love to! 😊</span><span class="tag">That sounds great!</span><span class="tag">Sure, thanks!</span></div>
        <b>ТАТГАЛЗАХ (3 алхам!):</b>
        <div style="margin:12px 0"><span class="tag">1. Уучлал: I'm afraid / Sorry</span><span class="tag">2. Татгалзал: I can't</span><span class="tag">3. Шалтгаан: because I'm busy</span></div>
        <i>I'm afraid I can't, because I have to work. Maybe next time!</i><br>
        Ганцхан «No» гэвэл бүдүүлэг — шалтгаанаа заавал хэл!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        afraid /əˈfreɪd/ — харамсалтай нь · accept /əkˈsept/ — хүлээн авах · refuse /rɪˈfjuːz/ — татгалзах<br>
        busy /ˈbɪzi/ — завгүй · sorry /ˈsɒri/ — уучлаарай · another /əˈnʌðər/ — өөр<br>
        next time /nekst taɪm/ — дараагийн удаа · unfortunately /ʌnˈfɔːrtʃənətli/ — харамсалтай нь · sure /ʃʊr/ — мэдээж · thanks /θæŋks/ — баярлалаа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'd love to come» бүтэн ✓, гэхдээ ихэвчлэн товч <b>I'd love to!</b> хангалттай (come давтах шаардлагагүй). Мөн «I'm afraid I can't to come» ✗ → can't-ийн ард to байхгүй: <b>I can't come</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Татгалзалын 3 алхам: <b>Уучлал → Татгалзал → Шалтгаан</b> (I'm afraid → I can't → because...).</p>`
    },
    phrases:[
      {en:"I'd love to! Thank you.", pron:"айд лав ту! сэнк ю.", mn:"Заавал очно! Баярлалаа."},
      {en:"That sounds great!", pron:"зэт саундз грэйт!", mn:"Сайхан санагдаж байна!"},
      {en:"I'm afraid I can't come.", pron:"айм эфрэйд ай кант кам.", mn:"Харамсалтай нь ирж чадахгүй."},
      {en:"Sorry, I'm busy on Saturday.", pron:"сори, айм бизи он сэтэрдэй.", mn:"Уучлаарай, Бямбад завгүй."},
      {en:"Maybe another time!", pron:"мэйби эназэр тайм!", mn:"Дараагийн удаа магадгүй!"}
    ],
    exercises:[
      {q:"Зөвшөөрөх:", parts:["Would you like to come? — ", "!"], opts:["I'd love to","I love"], a:0, fix:"Урилгад → I'd love to!"},
      {q:"Татгалзах:", parts:["I'm afraid I ", " come."], opts:["can't","don't can"], a:0, fix:"Чадахгүй → I can't come."},
      {q:"to хэрэгтэй юу:", parts:["I can't ", " tonight."], opts:["come","to come"], a:0, fix:"can't + нүцгэн үйл үг → can't come."},
      {q:"Эелдэг:", parts:["Sorry, I'm busy. ", "!"], opts:["Maybe another time","No"], a:0, fix:"Эелдэг төгсгөл → Maybe another time!"}
    ],
    speak:{ scene:'Урилгад хариулах', turns:[
      {ruby:"Would you like to go to the concert with me?", pron:"вүд ю лайк ту гоу ту зэ консэрт виз ми?", mn:"Надтай хамт тоглолт үзэх үү?",
        choices:[{t:"I'd love to! When is it?",best:true,mn:"Заавал! Хэзээ вэ?"},{t:"Yes ok.",best:false,fix:"Дулаахан: I'd love to! When is it?"}]},
      {ruby:"On Friday evening.", pron:"он фрайдэй ийвнинг.", mn:"Баасан гарагийн орой.",
        choices:[{t:"Oh, I'm afraid I can't. I have to work late.",best:true,mn:"Өө, харамсалтай нь чадахгүй. Оройтож ажиллах ёстой."},{t:"No, I work.",best:false,fix:"3 алхам: I'm afraid I can't, because I have to work."}]},
      {ruby:"That's a shame! Maybe next month?", pron:"зэтс э шэйм! мэйби нэкст манс?", mn:"Харамсалтай! Ирэх сард магадгүй?",
        choices:[{t:"Yes! Maybe another time. Thanks for asking!",best:true,mn:"Тийм! Дараагийн удаа. Урьсанд баярлалаа!"},{t:"Ok maybe.",best:false,fix:"Дулаахан: Maybe another time. Thanks for asking!"}]}
    ]}
  },
  {
    id:'a1m7l8', title:"7.8 Амралтын өдөр", level:"A1 · М7",
    blurb:"I watched, I played — өнгөрсөн цаг -ed ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Simple — жирийн үйл үг (-ed)",
      html:`<b>🎯 Зорилго:</b> ⭐ Өнгөрсөн амралтын өдрөө ярих — жинхэнэ өнгөрсөн цаг!<br><br>
        Ихэнх үйл үг өнгөрсөн цагт <b>-ed</b> авна. <b>Бүх биед адилхан!</b> (-s байхгүй!)
        <div style="margin:12px 0"><span class="tag">I watched · She watched · They watched</span></div>
        <b>Бичих дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">Ердийн: watch → watched</span><span class="tag">-e төгсгөл: like → liked</span><span class="tag">гийгүүлэгч+y: study → studied</span><span class="tag">Богино үе: stop → stopped (давхарлана)</span></div>
        <b>Дуудлага:</b> watched = «вочт», played = «плэйд», wanted = «вонтид».
        <p style="margin-top:12px"><b>📚 Үгийн сан (өнгөрсөн хэлбэр):</b></p>
        <div style="font-size:14px;line-height:2">
        watched /wɒtʃt/ — үзсэн · played /pleɪd/ — тоглосон · cooked /kʊkt/ — хоол хийсэн<br>
        cleaned /kliːnd/ — цэвэрлэсэн · visited /ˈvɪzɪtɪd/ — очсон · walked /wɔːkt/ — алхсан<br>
        talked /tɔːkt/ — ярьсан · listened /ˈlɪsnd/ — сонссон · studied /ˈstʌdid/ — сурсан · relaxed /rɪˈlækst/ — амарсан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She watcheds» ✗ — өнгөрсөн цагт -s ХЭЗЭЭ Ч байхгүй: <b>She watched</b>. Мөн «I was watched TV» ✗ → was хэрэггүй: <b>I watched TV</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өнгөрсөн цагт бүх хүн тэгш эрхтэй» — I/you/he/she/we/they — бүгд watchED.</p>`
    },
    phrases:[
      {en:"I watched a film last night.", pron:"ай вочт э филм ласт найт.", mn:"Өнгөрсөн шөнө кино үзсэн."},
      {en:"We visited my parents on Sunday.", pron:"ви визитид май пэрэнтс он сандэй.", mn:"Ням гарагт эцэг эх дээрээ очсон."},
      {en:"My son played football all day.", pron:"май сан плэйд футбол ол дэй.", mn:"Хүү маань өдөржин хөл бөмбөг тоглосон."},
      {en:"I cooked buuz and cleaned the house.", pron:"ай күкт бууз энд клийнд зэ хаус.", mn:"Би бууз хийж, гэрээ цэвэрлэсэн."},
      {en:"We just relaxed at home.", pron:"ви жаст рилэкст эт хоум.", mn:"Бид зүгээр гэртээ амарсан."}
    ],
    exercises:[
      {q:"Өнгөрсөн:", parts:["I ", " a film yesterday."], opts:["watched","watch"], a:0, fix:"Өнгөрсөн → watched."},
      {q:"-s байх уу:", parts:["She ", " football."], opts:["played","playeds"], a:0, fix:"Өнгөрсөн цагт -s байхгүй."},
      {q:"Бичих дүрэм:", parts:["He ", " English last year."], opts:["studied","studyed"], a:0, fix:"гийгүүлэгч+y → studied."},
      {q:"was хэрэгтэй юу:", parts:["I ", " TV last night."], opts:["watched","was watched"], a:0, fix:"was хэрэггүй → I watched TV."}
    ],
    speak:{ scene:'Амралтын өдрийн тухай', turns:[
      {ruby:"What did you do last weekend?", pron:"вот дид ю ду ласт викэнд?", mn:"Өнгөрсөн амралтаар юу хийсэн бэ?",
        choices:[{t:"I cleaned the house and cooked buuz.",best:true,mn:"Гэрээ цэвэрлэж, бууз хийсэн."},{t:"I clean house, cook buuz.",best:false,fix:"Өнгөрсөн → cleanED, cookED."}]},
      {ruby:"Sounds busy! Did you relax?", pron:"саундз бизи! дид ю рилэкс?", mn:"Завгүй байжээ! Амарсан уу?",
        choices:[{t:"Yes, in the evening we watched a film.",best:true,mn:"Тийм, орой кино үзсэн."},{t:"Yes, we was watched film.",best:false,fix:"was хэрэггүй → we watched a film."}]},
      {ruby:"Was it good?", pron:"воз ит гүд?", mn:"Сайхан байсан уу?",
        choices:[{t:"It was great! My son played football all day too.",best:true,mn:"Гайхалтай! Хүү маань бас өдөржин хөл бөмбөг тоглосон."},{t:"It was great! Son playeds football.",best:false,fix:"Өнгөрсөнд -s байхгүй → played."}]}
    ]}
  },
  {
    id:'a1m7l9', title:"7.9 Энгийн төлөвлөгөө", level:"A1 · М7",
    blurb:"I'm meeting friends on Saturday — товлосон ирээдүй",
    rule:{
      h:"Зорилго ба дүрэм: Present Continuous — товлосон ирээдүй",
      html:`<b>🎯 Зорилго:</b> Товлочихсон уулзалт, төлөвлөгөөгөө хэлэх.<br><br>
        <b>Гайхалтай зүйл:</b> Present Continuous (am/is/are + -ing) нь ЯГ ОДОО-гоос гадна <b>товлочихсон ирээдүйг</b> ч илэрхийлнэ!
        <div style="margin:12px 0"><span class="tag">I am meeting friends on Saturday. (аль хэдийн товлосон)</span><span class="tag">She is coming at six. (тохирсон)</span></div>
        <b>going to ⟷ Present Continuous:</b>
        <div style="margin:12px 0"><span class="tag">going to = төлөвлөж/бодож байгаа: I'm going to learn English.</span><span class="tag">Present Continuous = ТОВЛОЧИХСОН, цаг товтой: I'm meeting Bat at 6.</span></div>
        <b>Цагийн үг заавал:</b> tomorrow, on Saturday, at six — эс бөгөөс «яг одоо» гэж ойлгогдоно!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        plan /plæn/ — төлөвлөгөө · arrange /əˈreɪndʒ/ — товлох · weekend /ˈwiːkend/ — амралтын өдөр<br>
        tomorrow /təˈmɒroʊ/ — маргааш · tonight /təˈnaɪt/ — өнөө орой · next /nekst/ — дараагийн<br>
        appointment /əˈpɔɪntmənt/ — цаг товлолт · dinner /ˈdɪnər/ — оройн хоол · nothing /ˈnʌθɪŋ/ — юу ч үгүй · anything /ˈeniθɪŋ/ — юм</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Цагийн үг мартвал: «I'm meeting Bat» — яг одоо уулзаж байна гэж ойлгогдоно! <b>I'm meeting Bat ON SATURDAY</b> ✓. Мөн be мартах: «I meeting friends» ✗ → <b>I AM meeting</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хуанли дээр бичсэн бол Present Continuous · Толгойд бодож байгаа бол going to».</p>`
    },
    phrases:[
      {en:"I'm meeting friends on Saturday.", pron:"айм мийтинг фрэндз он сэтэрдэй.", mn:"Бямбад найзуудтайгаа уулзана."},
      {en:"What are you doing this weekend?", pron:"вот а ю дуинг зис викэнд?", mn:"Энэ амралтаар юу хийх вэ?"},
      {en:"We are having dinner at seven.", pron:"ви а хэвинг диннэр эт сэвн.", mn:"Бид 7 цагт оройн хоол идэх гэж байна."},
      {en:"She is coming tomorrow morning.", pron:"ши из каминг тумороу морнинг.", mn:"Тэр маргааш өглөө ирнэ."},
      {en:"I'm not doing anything tonight.", pron:"айм нот дуинг энисинг тунайт.", mn:"Өнөө орой юу ч хийхгүй."}
    ],
    exercises:[
      {q:"Товлосон:", parts:["I ", " friends on Saturday."], opts:["am meeting","meet"], a:0, fix:"Товлочихсон → am meeting."},
      {q:"be мартав уу:", parts:["She ", " coming tomorrow."], opts:["is","—"], a:0, fix:"be заавал → She IS coming."},
      {q:"Асуулт:", parts:["What ", " you doing this weekend?"], opts:["are","do"], a:0, fix:"be-тэй асуулт → What are you doing?"},
      {q:"Үгүйсгэл:", parts:["I ", " doing anything tonight."], opts:["am not","don't"], a:0, fix:"be-тэй → I am not doing."}
    ],
    speak:{ scene:'Долоо хоногийн төлөвлөгөө', turns:[
      {ruby:"What are you doing this weekend?", pron:"вот а ю дуинг зис викэнд?", mn:"Энэ амралтаар юу хийх вэ?",
        choices:[{t:"I'm meeting my friends on Saturday.",best:true,mn:"Бямбад найзуудтайгаа уулзана."},{t:"I meeting friends.",best:false,fix:"I AM meeting friends ON SATURDAY."}]},
      {ruby:"Nice! And on Sunday?", pron:"найс! энд он сандэй?", mn:"Гоё! Ням гарагт?",
        choices:[{t:"Nothing special. I'm going to relax at home.",best:true,mn:"Онцгой юм алга. Гэртээ амрах бодолтой."},{t:"Nothing. I relax.",best:false,fix:"I'M GOING TO relax at home."}]},
      {ruby:"Are you free tonight?", pron:"а ю фрий тунайт?", mn:"Өнөө орой чөлөөтэй юу?",
        choices:[{t:"Yes! I'm not doing anything tonight.",best:true,mn:"Тийм! Өнөө орой юу ч хийхгүй."},{t:"Yes, I don't doing anything.",best:false,fix:"I'M NOT doing anything."}]}
    ]}
  },
  {
    id:'a1m7l10', title:"7.10 Модулийн төсөл", level:"A1 · М7",
    blurb:"🏆 Чөлөөт цагаа өгүүлэх — өнгөрсөн + ирээдүй",
    rule:{
      h:"Давтлага: Модуль 7-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 7-ийн мэдлэгээ нэгтгэж, чөлөөт цагаа 3 цагаар (өнгөрсөн-одоо-ирээдүй) өгүүлэх.<br><br>
        <b>Модуль 7-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">good at + -ing</span><span class="tag">play / do / go + спорт</span><span class="tag">sings well (дайвар)</span><span class="tag">was / were ⭐</span><span class="tag">the best / the most</span><span class="tag">Would you like to...?</span><span class="tag">I'd love to / I'm afraid I can't</span><span class="tag">watched / played (-ed) ⭐</span><span class="tag">I'm meeting on Saturday</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Миний чөлөөт цаг (12+ өгүүлбэр):</b> 3 цагийг бүгдийг ашигла! Жишээ:<br>
        <i>In my free time, I like knitting. I am quite good at it. I also go swimming twice a week, and my son plays football. Last weekend, we watched a film at home. It was really funny! The actors were great. It is the best film I know. This Saturday, I'm meeting my friends at the park. My friend invited me to her birthday party next month — I'd love to go! I am going to buy a present for her.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> 3 цагийн гүүр: <b>Өнгөрсөн</b> (watched, was) → <b>Одоо/дадал</b> (I go swimming) → <b>Ирээдүй</b> (I'm meeting / I'm going to).</p>`
    },
    phrases:[
      {en:"In my free time, I like knitting.", pron:"ин май фрий тайм, ай лайк нитинг.", mn:"Чөлөөт цагаараа сүлжих дуртай."},
      {en:"I go swimming twice a week.", pron:"ай гоу свиминг твайс э вийк.", mn:"Долоо хоногт 2 удаа усанд сэлдэг."},
      {en:"Last weekend we watched a film. It was funny!", pron:"ласт викэнд ви вочт э филм. ит воз фани!", mn:"Өнгөрсөн амралтаар кино үзсэн. Хөгжилтэй байсан!"},
      {en:"This Saturday, I'm meeting my friends.", pron:"зис сэтэрдэй, айм мийтинг май фрэндз.", mn:"Энэ Бямбад найзуудтайгаа уулзана."},
      {en:"She invited me to her party. I'd love to go!", pron:"ши инвайтид ми ту хёр парти. айд лав ту гоу!", mn:"Тэр намайг үдэшлэгтээ урьсан. Заавал очно!"}
    ],
    exercises:[
      {q:"Давтлага (спорт):", parts:["I ", " swimming on Sunday."], opts:["go","play"], a:0, fix:"-ing → go swimming."},
      {q:"Давтлага (өнгөрсөн):", parts:["The film ", " very good."], opts:["was","were"], a:0, fix:"Ганц → was."},
      {q:"Давтлага (-ed):", parts:["We ", " my parents last week."], opts:["visited","visit"], a:0, fix:"Өнгөрсөн → visited."},
      {q:"Давтлага (урилга):", parts:["Would you like ", " come?"], opts:["to","—"], a:0, fix:"Would you like TO come."}
    ],
    speak:{ scene:'🏆 Төсөл: Миний чөлөөт цаг', turns:[
      {ruby:"Tell me about your free time!", pron:"тэл ми эбаут ёр фрий тайм!", mn:"Чөлөөт цагийнхаа тухай яриач!",
        choices:[{t:"I like knitting and I go swimming twice a week.",best:true,mn:"Сүлжих дуртай, долоо хоногт 2 удаа усанд сэлдэг."},{t:"I like knit, I play swimming.",best:false,fix:"like knittING, GO swimming."}]},
      {ruby:"What did you do last weekend?", pron:"вот дид ю ду ласт викэнд?", mn:"Өнгөрсөн амралтаар юу хийсэн бэ?",
        choices:[{t:"We watched a film. It was the best film I know!",best:true,mn:"Кино үзсэн. Миний мэдэх хамгийн сайхан кино!"},{t:"We watch film. It is most best.",best:false,fix:"watchED, it WAS THE BEST film."}]},
      {ruby:"And what are your plans?", pron:"энд вот а ёр плэнз?", mn:"Төлөвлөгөө тань юу вэ?",
        choices:[{t:"I'm meeting friends on Saturday, and I'm going to buy a present.",best:true,mn:"Бямбад найзуудтай уулзана, бэлэг авах бодолтой."},{t:"I meeting friends. I buy present.",best:false,fix:"I'M meeting... I'M GOING TO buy a present."}]}
    ]}
  },
  {
    id:'a1m8l1', title:"8.1 Хувцас", level:"A1 · М8",
    blurb:"wear, put on, take off — хувцасны үйл үг",
    rule:{
      h:"Зорилго ба дүрэм: wear / put on / take off / try on",
      html:`<b>🎯 Зорилго:</b> Хувцас нэрлэж, хувцасны үйл үгсийг зөв ялгах.<br><br>
        <b>4 үйл үг, 4 өөр утга:</b>
        <div style="margin:12px 0"><span class="tag">wear = өмссөн байх (байдал): She is wearing a red dress.</span><span class="tag">put on = өмсөх (үйлдэл): Put on your coat!</span><span class="tag">take off = тайлах: Take off your shoes.</span><span class="tag">try on = өмсөж үзэх: Can I try on this shirt?</span></div>
        <b>Ялгаа:</b> <i>put on</i> = хийж байгаа үйлдэл (5 секунд), <i>wear</i> = өмссөн байдал (өдөржин).
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        clothes /kloʊz/ — хувцас · shirt /ʃɜːrt/ — цамц · trousers /ˈtraʊzərz/ — өмд<br>
        dress /dres/ — даашинз · jacket /ˈdʒækɪt/ — хүрэм · shoes /ʃuːz/ — гутал<br>
        hat /hæt/ — малгай · socks /sɒks/ — оймс · coat /koʊt/ — пальто · wear /wer/ — өмсөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am wearing my coat now (гараас)» ✗ — өмсөж БАЙГАА үйлдэл бол <b>I am putting on my coat</b>. Мөн trousers, shoes, socks, glasses нь ҮРГЭЛЖ олон тоо: «a trouser» ✗ → <b>trousers</b> эсвэл <b>a pair of trousers</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «PUT ON = 5 секундын үйлдэл · WEAR = өдөржингийн байдал».</p>`
    },
    phrases:[
      {en:"She is wearing a beautiful dress.", pron:"ши из вэринг э бьютифул дрэс.", mn:"Тэр гоё даашинз өмссөн байна."},
      {en:"Put on your coat, it is cold!", pron:"пут он ёр коут, ит из коулд!", mn:"Пальтогоо өмс, хүйтэн байна!"},
      {en:"Please take off your shoes.", pron:"плийз тэйк оф ёр шүз.", mn:"Гуталаа тайлна уу."},
      {en:"Can I try on this shirt?", pron:"кэн ай трай он зис шөрт?", mn:"Энэ цамцыг өмсөж үзэж болох уу?"},
      {en:"I need a new pair of trousers.", pron:"ай нийд э ню пэр ов траузэрз.", mn:"Надад шинэ өмд хэрэгтэй."}
    ],
    exercises:[
      {q:"wear/put on:", parts:["She is ", " a red dress today."], opts:["wearing","putting on"], a:0, fix:"Өмссөн байдал → wearing."},
      {q:"wear/put on:", parts:["", " your coat, it's cold!"], opts:["Put on","Wear"], a:0, fix:"Одоо өмс → Put on."},
      {q:"Тайлах:", parts:["Please ", " your shoes."], opts:["take off","put on"], a:0, fix:"Тайлах → take off."},
      {q:"Олон тоо:", parts:["I need new ", "."], opts:["trousers","trouser"], a:0, fix:"trousers үргэлж олон тоо."}
    ],
    speak:{ scene:'Хувцас сонгох', turns:[
      {ruby:"What are you wearing to the party?", pron:"вот а ю вэринг ту зэ парти?", mn:"Үдэшлэгт юу өмсөх вэ?",
        choices:[{t:"I'm wearing my blue dress.",best:true,mn:"Хөх даашинзаа өмсөнө."},{t:"I put on blue dress.",best:false,fix:"Байдал → I'm WEARING my blue dress."}]},
      {ruby:"Nice! It is cold outside though.", pron:"найс! ит из коулд аутсайд зоу.", mn:"Гоё! Гэхдээ гадаа хүйтэн шүү.",
        choices:[{t:"You're right. I'll put on a coat too.",best:true,mn:"Зөв. Пальто ч бас өмсье."},{t:"I wear coat now.",best:false,fix:"Үйлдэл → I'll PUT ON a coat."}]},
      {ruby:"Good idea. Do you need new shoes?", pron:"гүд айдиа. ду ю нийд ню шүз?", mn:"Гоё санаа. Шинэ гутал хэрэгтэй юу?",
        choices:[{t:"Maybe. Can I try on those black ones?",best:true,mn:"Магадгүй. Тэр хараар өмсөж үзэж болох уу?"},{t:"Maybe. I try on that black shoe.",best:false,fix:"shoes олон тоо → those black ones."}]}
    ]}
  },
  {
    id:'a1m8l2', title:"8.2 Өнгө", level:"A1 · М8",
    blurb:"the red one, the blue ones — one / ones",
    rule:{
      h:"Зорилго ба дүрэм: one / ones (давталтаас зайлсхийх)",
      html:`<b>🎯 Зорилго:</b> Өнгөөр сонголт хийж, нэр үгээ давтахгүй байх.<br><br>
        Дэлгүүрт «I like the red shirt, not the blue shirt» гэж давтвал сонсоход муу. <b>one / ones</b> нь орлоно:
        <div style="margin:12px 0"><span class="tag">Ганц юм → one: I like the red one.</span><span class="tag">Олон юм → ones: I like the blue ones.</span></div>
        <b>Хэрэглээ:</b> Which one do you like? — The green one, please.<br>
        <b>Анхаар:</b> тоологдохгүй юмонд one хэрэглэдэггүй: «I want the fresh one» (milk) ✗
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        red /red/ — улаан · blue /bluː/ — хөх · green /ɡriːn/ — ногоон<br>
        yellow /ˈjeloʊ/ — шар · black /blæk/ — хар · white /waɪt/ — цагаан<br>
        gray /ɡreɪ/ — саарал · brown /braʊn/ — бор · dark /dɑːrk/ — хар бараан · light /laɪt/ — цайвар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I like the red» ✗ — тэмдэг нэр дангаараа зогсохгүй: <b>the red ONE</b>. Мөн олон тоонд «the blue one» ✗ → <b>the blue ONES</b> (гутал, оймс гэх мэт).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэр үгээ давтахын оронд ONE тавь» — the red shirt → the red one.</p>`
    },
    phrases:[
      {en:"Which one do you like?", pron:"вич ван ду ю лайк?", mn:"Аль нь таалагдаж байна?"},
      {en:"I like the red one.", pron:"ай лайк зэ рэд ван.", mn:"Улаан нь таалагдаж байна."},
      {en:"The blue ones are nicer.", pron:"зэ блү ванз а найсэр.", mn:"Хөх нь илүү гоё."},
      {en:"Do you have this in black?", pron:"ду ю хэв зис ин блэк?", mn:"Үүний хар нь бий юу?"},
      {en:"I prefer light colors.", pron:"ай прифөр лайт калэрз.", mn:"Би цайвар өнгө илүүд үздэг."}
    ],
    exercises:[
      {q:"one/ones:", parts:["I like the red ", ". (нэг цамц)"], opts:["one","ones"], a:0, fix:"Ганц → one."},
      {q:"one/ones:", parts:["The blue ", " are nicer. (гутал)"], opts:["ones","one"], a:0, fix:"Олон → ones."},
      {q:"Дангаараа:", parts:["I want the green ", "."], opts:["one","—"], a:0, fix:"Тэмдэг нэр дангаараа болохгүй → the green one."},
      {q:"Асуулт:", parts:["", " one do you want?"], opts:["Which","What"], a:0, fix:"Сонголт → Which one?"}
    ],
    speak:{ scene:'Өнгө сонгох', turns:[
      {ruby:"We have this shirt in red, blue and black.", pron:"ви хэв зис шөрт ин рэд, блү энд блэк.", mn:"Энэ цамц улаан, хөх, хараар бий.",
        choices:[{t:"Can I see the blue one, please?",best:true,mn:"Хөхийг нь үзүүлж болох уу?"},{t:"I see the blue.",best:false,fix:"the blue ONE (тэмдэг нэр дангаараа болохгүй)."}]},
      {ruby:"Here you are. Do you like it?", pron:"хийр ю а. ду ю лайк ит?", mn:"Энэ байна. Таалагдаж байна уу?",
        choices:[{t:"Yes, but I prefer dark colors. Do you have this in black?",best:true,mn:"Тийм, гэхдээ хар бараан өнгө илүүд үздэг. Хар нь бий юу?"},{t:"Yes, but dark better.",best:false,fix:"Бүтэн: I prefer dark colors."}]},
      {ruby:"Of course. And these shoes match it well.", pron:"ов корс. энд зийз шүз мэтч ит вэл.", mn:"Мэдээж. Энэ гутал бас сайн зохирно.",
        choices:[{t:"The black ones? Yes, they look great!",best:true,mn:"Хар нь уу? Тийм, их гоё харагдаж байна!"},{t:"The black one? Yes.",best:false,fix:"Гутал олон тоо → the black ONES."}]}
    ]}
  },
  {
    id:'a1m8l3', title:"8.3 Хэмжээ", level:"A1 · М8",
    blurb:"too big / not big enough — хэмжээний асуудал",
    rule:{
      h:"Зорилго ба дүрэм: too + тэмдэг нэр / not + тэмдэг нэр + enough",
      html:`<b>🎯 Зорилго:</b> Хэмжээ таарахгүй байгааг хэлэх.<br><br>
        <b>Хоёр эсрэг талаас нэг л утга:</b>
        <div style="margin:12px 0"><span class="tag">too + тэмдэг нэр = ХЭТЭРХИЙ: It is too big.</span><span class="tag">not + тэмдэг нэр + enough = ХАНГАЛТГҮЙ: It is not big enough.</span></div>
        <b>Байрлал чухал!</b> too нь тэмдэг нэрийн ӨМНӨ, enough нь тэмдэг нэрийн АРД:
        <div style="margin:12px 0"><span class="tag">too small ✓ / small too ✗</span><span class="tag">big enough ✓ / enough big ✗</span></div>
        <b>Санамж:</b> Модуль 5-д too much/many (нэр үгтэй) үзсэн — энэ нь тэмдэг нэртэй!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        size /saɪz/ — хэмжээ · small /smɔːl/ — жижиг · medium /ˈmiːdiəm/ — дунд<br>
        large /lɑːrdʒ/ — том · tight /taɪt/ — чанга · loose /luːs/ — сул<br>
        fit /fɪt/ — таарах · enough /ɪˈnʌf/ — хангалттай · long /lɒŋ/ — урт · short /ʃɔːrt/ — богино</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «enough big» ✗ → <b>big enough</b> (enough нь ард!). Мөн «It is too much big» ✗ — тэмдэг нэртэй бол much хэрэггүй: <b>too big</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TOO өмнө · ENOUGH ард» — too big / big enough.</p>`
    },
    phrases:[
      {en:"What size do you need?", pron:"вот сайз ду ю нийд?", mn:"Ямар хэмжээ хэрэгтэй вэ?"},
      {en:"This shirt is too small for me.", pron:"зис шөрт из ту смол фор ми.", mn:"Энэ цамц надад хэтэрхий жижиг."},
      {en:"It is not big enough.", pron:"ит из нот биг инаф.", mn:"Хангалттай том биш байна."},
      {en:"Do you have a larger size?", pron:"ду ю хэв э ларжэр сайз?", mn:"Илүү том хэмжээ бий юу?"},
      {en:"This one fits perfectly!", pron:"зис ван фитс пөрфэктли!", mn:"Энэ яг таарч байна!"}
    ],
    exercises:[
      {q:"Байрлал:", parts:["It is ", " for me."], opts:["too small","small too"], a:0, fix:"too нь өмнө → too small."},
      {q:"Байрлал:", parts:["It is not ", "."], opts:["big enough","enough big"], a:0, fix:"enough нь ард → big enough."},
      {q:"too:", parts:["These shoes are ", "."], opts:["too tight","too much tight"], a:0, fix:"Тэмдэг нэртэй → too tight."},
      {q:"Утга:", parts:["I need a bigger size. This is ", "."], opts:["too small","too big"], a:0, fix:"Том хэрэгтэй → одоогийнх нь too small."}
    ],
    speak:{ scene:'Хэмжээ тааруулах', turns:[
      {ruby:"How is it? Does it fit?", pron:"хау из ит? даз ит фит?", mn:"Яаж байна? Таарч байна уу?",
        choices:[{t:"No, it is too small for me.",best:true,mn:"Үгүй, надад хэтэрхий жижиг."},{t:"No, it is small too.",best:false,fix:"TOO small (too нь өмнө)."}]},
      {ruby:"What size are you?", pron:"вот сайз а ю?", mn:"Ямар хэмжээтэй вэ?",
        choices:[{t:"Medium. This one is not big enough.",best:true,mn:"Дунд. Энэ хангалттай том биш."},{t:"Medium. This not enough big.",best:false,fix:"big ENOUGH (enough нь ард)."}]},
      {ruby:"Try this large one.", pron:"трай зис лардж ван.", mn:"Энэ том хэмжээг өмсөж үз.",
        choices:[{t:"Perfect! This one fits well.",best:true,mn:"Сайхан! Энэ яг таарч байна."},{t:"Good. This fit good.",best:false,fix:"This one FITS WELL."}]}
    ]}
  },
  {
    id:'a1m8l4', title:"8.4 Үнэ", level:"A1 · М8",
    blurb:"bought, paid, went — онцгой өнгөрсөн ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Simple — онцгой үйл үг",
      html:`<b>🎯 Зорилго:</b> ⭐ Хамгийн түгээмэл онцгой (irregular) үйл үгсийн өнгөрсөн хэлбэрийг эзэмших.<br><br>
        Модуль 7-д -ed үзсэн. Гэхдээ хамгийн түгээмэл үйл үгс <b>-ed АВДАГГҮЙ</b> — бүр өөр болдог! Цээжлэхээс өөр арга алга:
        <div style="margin:12px 0"><span class="tag">go → went</span><span class="tag">buy → bought</span><span class="tag">pay → paid</span><span class="tag">see → saw</span><span class="tag">have → had</span><span class="tag">get → got</span><span class="tag">make → made</span><span class="tag">take → took</span><span class="tag">find → found</span><span class="tag">spend → spent</span></div>
        <b>Бүх биед адилхан:</b> I went / She went / They went ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (одоо → өнгөрсөн):</b></p>
        <div style="font-size:14px;line-height:2">
        go → went /went/ — явсан · buy → bought /bɔːt/ — авсан · pay → paid /peɪd/ — төлсөн<br>
        see → saw /sɔː/ — харсан · have → had /hæd/ — байсан · get → got /ɡɒt/ — авсан<br>
        make → made /meɪd/ — хийсэн · take → took /tʊk/ — авсан · spend → spent /spent/ — зарцуулсан · cost → cost /kɒst/ — өртсөн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I buyed» ✗ → <b>bought</b>. «I goed» ✗ → <b>went</b>. «She wents» ✗ — өнгөрсөнд -s байхгүй: <b>She went</b>. Мөн <b>cost</b> нь өөрчлөгддөггүй: it cost 50,000 (costed ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өдөрт 3 үйл үг цээжил: <b>go-went · buy-bought · see-saw</b>. Хамгийн түгээмэл 10-ыг эзэмшвэл ярианы 80% хамрагдана.</p>`
    },
    phrases:[
      {en:"I went shopping yesterday.", pron:"ай вэнт шопинг йестэрдэй.", mn:"Өчигдөр дэлгүүр хэссэн."},
      {en:"I bought a new jacket.", pron:"ай бот э ню жэкэт.", mn:"Шинэ хүрэм авсан."},
      {en:"It cost eighty thousand tugrik.", pron:"ит кост эйти саузэнд төгрөг.", mn:"80,000 төгрөг байсан."},
      {en:"I paid by card.", pron:"ай пэйд бай кард.", mn:"Картаар төлсөн."},
      {en:"I saw a beautiful dress, but I didn't have money!", pron:"ай со э бьютифул дрэс, бат ай диднт хэв мани!", mn:"Гоё даашинз харсан ч мөнгө байгаагүй!"}
    ],
    exercises:[
      {q:"Онцгой:", parts:["I ", " a new jacket."], opts:["bought","buyed"], a:0, fix:"buy → bought."},
      {q:"Онцгой:", parts:["We ", " shopping yesterday."], opts:["went","goed"], a:0, fix:"go → went."},
      {q:"-s байх уу:", parts:["She ", " a nice bag."], opts:["saw","saws"], a:0, fix:"Өнгөрсөнд -s байхгүй → saw."},
      {q:"Онцгой:", parts:["It ", " 50,000 tugrik."], opts:["cost","costed"], a:0, fix:"cost өөрчлөгддөггүй."}
    ],
    speak:{ scene:'Дэлгүүр хэссэн тухай', turns:[
      {ruby:"You look happy! What happened?", pron:"ю лүк хэпи! вот хэпэнд?", mn:"Баяртай харагдаж байна! Юу болов?",
        choices:[{t:"I went shopping and bought a new jacket!",best:true,mn:"Дэлгүүр хэсээд шинэ хүрэм авлаа!"},{t:"I goed shopping, buyed jacket.",best:false,fix:"go → WENT, buy → BOUGHT."}]},
      {ruby:"Nice! How much did it cost?", pron:"найс! хау мач дид ит кост?", mn:"Гоё! Хэд байсан бэ?",
        choices:[{t:"It cost eighty thousand. I paid by card.",best:true,mn:"80 мянга байсан. Картаар төлсөн."},{t:"It costed 80,000. I payed.",best:false,fix:"cost (costed ✗), pay → PAID."}]},
      {ruby:"That's a good price!", pron:"зэтс э гүд прайс!", mn:"Сайн үнэ юм!",
        choices:[{t:"Yes! I also saw a dress, but it was too expensive.",best:true,mn:"Тийм! Даашинз ч бас харсан, гэхдээ хэт үнэтэй байсан."},{t:"Yes! I seed a dress.",best:false,fix:"see → SAW."}]}
    ]}
  },
  {
    id:'a1m8l5', title:"8.5 Энэ/тэр", level:"A1 · М8",
    blurb:"these, those, Which one? — заах ба сонгох",
    rule:{
      h:"Зорилго ба дүрэм: this/that/these/those + Which",
      html:`<b>🎯 Зорилго:</b> Юмыг заан үзүүлж, сонголт хийх.<br><br>
        <b>4 заах үг (ойр/хол + ганц/олон):</b>
        <div style="margin:12px 0"><span class="tag">this = энэ (ойр, ганц)</span><span class="tag">that = тэр (хол, ганц)</span><span class="tag">these = эдгээр (ойр, олон)</span><span class="tag">those = тэдгээр (хол, олон)</span></div>
        <b>one/ones-тэй хослоно:</b> this one, that one, these ones, those ones.<br>
        <b>Which vs What:</b>
        <div style="margin:12px 0"><span class="tag">Which = хязгаартай сонголт: Which one — red or blue?</span><span class="tag">What = хязгааргүй: What color do you like?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        this /ðɪs/ — энэ · that /ðæt/ — тэр · these /ðiːz/ — эдгээр<br>
        those /ðoʊz/ — тэдгээр · which /wɪtʃ/ — аль · both /boʊθ/ — хоёул<br>
        either /ˈiːðər/ — аль нэг нь · neither /ˈnaɪðər/ — аль нь ч биш · same /seɪm/ — ижил · different /ˈdɪfrənt/ — өөр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «this shoes» ✗ — гутал олон тоо: <b>these shoes</b>. Мөн «Which color do you like — red or blue?» ✓ (2 сонголт) ⟷ «What color do you like?» ✓ (бүх өнгөнөөс).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ОЙР: this/these · ХОЛ: that/those» — ГАНЦ: this/that · ОЛОН: these/those.</p>`
    },
    phrases:[
      {en:"How much is this jacket?", pron:"хау мач из зис жэкэт?", mn:"Энэ хүрэм хэд вэ?"},
      {en:"I like these shoes.", pron:"ай лайк зийз шүз.", mn:"Энэ гутал таалагдаж байна."},
      {en:"Those trousers are nice too.", pron:"зоуз траузэрз а найс ту.", mn:"Тэр өмд ч бас гоё."},
      {en:"Which one do you prefer — this or that?", pron:"вич ван ду ю прифөр — зис ор зэт?", mn:"Аль нь илүү таалагдаж байна — энэ юу, тэр үү?"},
      {en:"I like both, but I can only buy one.", pron:"ай лайк боус, бат ай кэн оунли бай ван.", mn:"Хоёулаа таалагдаж байна ч ганцыг л авч чадна."}
    ],
    exercises:[
      {q:"Заах үг:", parts:["I like ", " shoes. (ойрхон, олон)"], opts:["these","this"], a:0, fix:"Ойр + олон → these."},
      {q:"Заах үг:", parts:["", " trousers over there are nice."], opts:["Those","That"], a:0, fix:"Хол + олон → Those."},
      {q:"Which/What:", parts:["", " one — red or blue?"], opts:["Which","What"], a:0, fix:"Хязгаартай сонголт → Which."},
      {q:"Заах үг:", parts:["How much is ", " jacket? (гартаа барьж)"], opts:["this","these"], a:0, fix:"Ойр + ганц → this."}
    ],
    speak:{ scene:'Хоёрын дундаас сонгох', turns:[
      {ruby:"Which one do you like — this one or that one?", pron:"вич ван ду ю лайк — зис ван ор зэт ван?", mn:"Аль нь таалагдаж байна — энэ юу, тэр үү?",
        choices:[{t:"I like this one better. It is my size.",best:true,mn:"Энэ илүү таалагдаж байна. Миний хэмжээ."},{t:"I like this. Size my.",best:false,fix:"this ONE better. It IS my size."}]},
      {ruby:"And these shoes? Do you like them?", pron:"энд зийз шүз? ду ю лайк зэм?", mn:"Энэ гутал ч? Таалагдаж байна уу?",
        choices:[{t:"Yes, but those black ones are nicer.",best:true,mn:"Тийм, гэхдээ тэр хар нь илүү гоё."},{t:"Yes, but that black one nicer.",best:false,fix:"Гутал олон → THOSE black ONES."}]},
      {ruby:"Then take both!", pron:"зэн тэйк боус!", mn:"Тэгвэл хоёуланг нь ав!",
        choices:[{t:"I'd love to, but I can only buy one today!",best:true,mn:"Дуртай ч өнөөдөр ганцыг л авч чадна!"},{t:"No, one only.",best:false,fix:"Эелдэг: I'd love to, but I can only buy one."}]}
    ]}
  },
  {
    id:'a1m8l6', title:"8.6 Дэлгүүрийн яриа", level:"A1 · М8",
    blurb:"Did you buy it? I didn't — did / didn't ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Simple — асуулт ба үгүйсгэл",
      html:`<b>🎯 Зорилго:</b> ⭐ Өнгөрсөн цагт асуулт тавьж, үгүйсгэх — өнгөрсөн цагийн сүүлчийн хэсэг!<br><br>
        <b>Алтан дүрэм:</b> did/didn't гарч ирвэл үйл үг <b>ЭХНИЙ ХЭЛБЭРТЭЭ</b> буцна!
        <div style="margin:12px 0"><span class="tag">АСУУЛТ: Did you buy it? (bought ✗!)</span><span class="tag">ҮГҮЙСГЭЛ: I didn't buy it. (didn't bought ✗!)</span><span class="tag">БАТЛАХ: I bought it. (энд л bought)</span></div>
        <b>Богино хариулт:</b> Yes, I did. / No, I didn't.<br>
        <b>Wh-асуулт:</b> What did you buy? Where did you go? How much did it cost?
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        did /dɪd/ — (өнгөрсний туслах) · didn't /ˈdɪdnt/ — үгүйсгэл · shop /ʃɒp/ — дэлгүүр<br>
        assistant /əˈsɪstənt/ — худалдагч · customer /ˈkʌstəmər/ — үйлчлүүлэгч · look for /lʊk fɔːr/ — хайх<br>
        find /faɪnd/ — олох · choose /tʃuːz/ — сонгох · decide /dɪˈsaɪd/ — шийдэх · anything /ˈeniθɪŋ/ — юм</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Did you bought?» ✗ → <b>Did you BUY?</b> «I didn't went» ✗ → <b>I didn't GO</b>. Энэ бол монгол суралцагчийн хамгийн түгээмэл алдаа — did аль хэдийн «өнгөрсөн»-ийг үүрчихсэн!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «DID гарвал үйл үг нүцгэн» — did buy, didn't go (нэг өгүүлбэрт хоёр удаа өнгөрсөн болгохгүй).</p>`
    },
    phrases:[
      {en:"Did you buy anything?", pron:"дид ю бай энисинг?", mn:"Юм авсан уу?"},
      {en:"Yes, I did. I bought a shirt.", pron:"ес, ай дид. ай бот э шөрт.", mn:"Тийм. Цамц авсан."},
      {en:"No, I didn't buy anything.", pron:"ноу, ай диднт бай энисинг.", mn:"Үгүй, юу ч аваагүй."},
      {en:"Where did you go?", pron:"вэр дид ю гоу?", mn:"Хаашаа явсан бэ?"},
      {en:"I didn't find my size.", pron:"ай диднт файнд май сайз.", mn:"Хэмжээгээ олоогүй."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["Did you ", " it?"], opts:["buy","bought"], a:0, fix:"did-ийн ард нүцгэн → Did you buy?"},
      {q:"Үгүйсгэл:", parts:["I didn't ", " anything."], opts:["find","found"], a:0, fix:"didn't-ийн ард нүцгэн → didn't find."},
      {q:"Батлах:", parts:["I ", " a new jacket."], opts:["bought","did buy"], a:0, fix:"Батлахад → bought."},
      {q:"Богино хариулт:", parts:["Did you go shopping? — Yes, I ", "."], opts:["did","went"], a:0, fix:"Богино хариулт → Yes, I did."}
    ],
    speak:{ scene:'Дэлгүүрийн дараа', turns:[
      {ruby:"Did you go shopping yesterday?", pron:"дид ю гоу шопинг йестэрдэй?", mn:"Өчигдөр дэлгүүр хэссэн үү?",
        choices:[{t:"Yes, I did. I went with my sister.",best:true,mn:"Тийм. Эгчтэйгээ хамт явсан."},{t:"Yes, I did go. I goed with sister.",best:false,fix:"Yes, I did. I WENT with my sister."}]},
      {ruby:"Did you buy anything nice?", pron:"дид ю бай энисинг найс?", mn:"Ямар нэг гоё юм авсан уу?",
        choices:[{t:"No, I didn't find my size.",best:true,mn:"Үгүй, хэмжээгээ олоогүй."},{t:"No, I didn't found my size.",best:false,fix:"didn't FIND (нүцгэн хэлбэр!)."}]},
      {ruby:"What did you look for?", pron:"вот дид ю лүк фор?", mn:"Юу хайсан бэ?",
        choices:[{t:"I looked for a winter coat, but they were too expensive.",best:true,mn:"Өвлийн пальто хайсан ч хэт үнэтэй байсан."},{t:"I did look coat, but was expensive.",best:false,fix:"I LOOKED for a coat, but they WERE too expensive."}]}
    ]}
  },
  {
    id:'a1m8l7', title:"8.7 Туршиж үзэх", level:"A1 · М8",
    blurb:"try it on (not try on it) — төлөөний үгийн байрлал",
    rule:{
      h:"Зорилго ба дүрэм: хэлц үйл үг + төлөөний үг",
      html:`<b>🎯 Зорилго:</b> Хувцас өмсөж үзэх, хэлц үйл үгэнд төлөөний үгийг зөв байрлуулах.<br><br>
        <b>Онцгой дүрэм:</b> «try on» гэх мэт салдаг хэлц үйл үгэнд <b>төлөөний үг ДУНД нь</b> ордог!
        <div style="margin:12px 0"><span class="tag">Нэр үгтэй: try on the shirt ✓ = try the shirt on ✓ (хоёулаа болно)</span><span class="tag">Төлөөний үгтэй: try IT on ✓ · try on it ✗ (хориотой!)</span></div>
        Мөн адил: put it on, take it off, turn it on/off.<br>
        <b>Дэлгүүрийн хэллэг:</b> Where is the fitting room? / It fits! / It suits you!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        try on /traɪ ɒn/ — өмсөж үзэх · fitting room /ˈfɪtɪŋ ruːm/ — хувцас солих өрөө · mirror /ˈmɪrər/ — толь<br>
        fit /fɪt/ — таарах (хэмжээ) · suit /suːt/ — зохих (өнгө/загвар) · look /lʊk/ — харагдах<br>
        comfortable /ˈkʌmftəbl/ — тухтай · match /mætʃ/ — зохицох · style /staɪl/ — загвар · perfect /ˈpɜːrfɪkt/ — төгс</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Can I try on it?» ✗ → <b>Can I try IT on?</b> Мөн <b>fit</b> ⟷ <b>suit</b> ялгаа: fit = хэмжээ таарах, suit = өнгө/загвар зохих. «This dress suits you» = чамд зохиж байна ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IT нь дунд орно» — try IT on, put IT on, take IT off (хэзээ ч ард биш!).</p>`
    },
    phrases:[
      {en:"Can I try it on?", pron:"кэн ай трай ит он?", mn:"Өмсөж үзэж болох уу?"},
      {en:"Where is the fitting room?", pron:"вэр из зэ фитинг рум?", mn:"Хувцас солих өрөө хаана байна?"},
      {en:"It fits perfectly!", pron:"ит фитс пөрфэктли!", mn:"Яг таарч байна!"},
      {en:"This color suits you.", pron:"зис калэр сютс ю.", mn:"Энэ өнгө танд зохиж байна."},
      {en:"I'll take it!", pron:"айл тэйк ит!", mn:"Би үүнийг авъя!"}
    ],
    exercises:[
      {q:"Байрлал:", parts:["Can I ", "?"], opts:["try it on","try on it"], a:0, fix:"Төлөөний үг дунд → try IT on."},
      {q:"Байрлал:", parts:["It's cold. ", "!"], opts:["Put it on","Put on it"], a:0, fix:"put IT on."},
      {q:"fit/suit:", parts:["This size ", " me well."], opts:["fits","suits"], a:0, fix:"Хэмжээ → fits."},
      {q:"fit/suit:", parts:["That color ", " you!"], opts:["suits","fits"], a:0, fix:"Өнгө зохих → suits."}
    ],
    speak:{ scene:'Хувцас солих өрөөнд', turns:[
      {ruby:"Do you like this jacket?", pron:"ду ю лайк зис жэкэт?", mn:"Энэ хүрэм таалагдаж байна уу?",
        choices:[{t:"Yes! Can I try it on?",best:true,mn:"Тийм! Өмсөж үзэж болох уу?"},{t:"Yes! Can I try on it?",best:false,fix:"try IT on (төлөөний үг дунд)."}]},
      {ruby:"Of course. The fitting room is over there.", pron:"ов корс. зэ фитинг рум из оувэр зэр.", mn:"Мэдээж. Хувцас солих өрөө тэнд байна.",
        choices:[{t:"Thank you. ... It fits perfectly!",best:true,mn:"Баярлалаа. ... Яг таарч байна!"},{t:"Thanks. It suits my size.",best:false,fix:"Хэмжээ → it FITS (suit нь өнгө/загварт)."}]},
      {ruby:"It looks great! That color really suits you.", pron:"ит лүкс грэйт! зэт калэр риали сютс ю.", mn:"Их гоё харагдаж байна! Тэр өнгө танд үнэхээр зохиж байна.",
        choices:[{t:"Thank you! I'll take it.",best:true,mn:"Баярлалаа! Би үүнийг авъя."},{t:"Thanks. I take.",best:false,fix:"I'll take IT."}]}
    ]}
  },
  {
    id:'a1m8l8', title:"8.8 Материал", level:"A1 · М8",
    blurb:"made of cotton, made in Mongolia — made of / in",
    rule:{
      h:"Зорилго ба дүрэм: made of / made in / made by",
      html:`<b>🎯 Зорилго:</b> Хувцасны материал, гарал үүслийг хэлэх.<br><br>
        <b>3 өөр угтвар, 3 өөр утга:</b>
        <div style="margin:12px 0"><span class="tag">made OF + материал: It is made of wool. (ноосон)</span><span class="tag">made IN + улс/газар: It is made in Mongolia.</span><span class="tag">made BY + хэн: It was made by my mother.</span></div>
        <b>Мөн тэмдэг нэр болгож болно:</b> a wool coat = ноосон пальто, a leather bag = арьсан цүнх.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        cotton /ˈkɒtn/ — хөвөн · wool /wʊl/ — ноос · cashmere /ˈkæʒmɪr/ — ноолуур<br>
        leather /ˈleðər/ — арьс · silk /sɪlk/ — торго · fur /fɜːr/ — үс арьс<br>
        material /məˈtɪriəl/ — материал · quality /ˈkwɒləti/ — чанар · handmade /ˈhændmeɪd/ — гар хийц · soft /sɒft/ — зөөлөн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «made from cotton» — болох ч <b>made OF</b> нь илүү жам ёсны (from нь материал өөрчлөгдсөн үед: paper is made from wood). Мөн «made in Mongolia» ✓ ⟷ «made of Mongolia» ✗ (улс материал биш!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «OF = юунаас · IN = хаана · BY = хэн» — of wool, in Mongolia, by my mother.</p>`
    },
    phrases:[
      {en:"What is it made of?", pron:"вот из ит мэйд ов?", mn:"Юугаар хийсэн бэ?"},
      {en:"It is made of cashmere.", pron:"ит из мэйд ов кэшмиэр.", mn:"Ноолуураар хийсэн."},
      {en:"This coat is made in Mongolia.", pron:"зис коут из мэйд ин Монголиа.", mn:"Энэ пальто Монголд хийгдсэн."},
      {en:"My mother made this hat by hand.", pron:"май мазэр мэйд зис хэт бай хэнд.", mn:"Ээж маань энэ малгайг гараар хийсэн."},
      {en:"Cashmere is very soft and warm.", pron:"кэшмиэр из вэри софт энд ворм.", mn:"Ноолуур маш зөөлөн, дулаан."}
    ],
    exercises:[
      {q:"of/in:", parts:["It is made ", " wool."], opts:["of","in"], a:0, fix:"Материал → made OF."},
      {q:"of/in:", parts:["This coat is made ", " Mongolia."], opts:["in","of"], a:0, fix:"Улс → made IN."},
      {q:"by:", parts:["It was made ", " my grandmother."], opts:["by","of"], a:0, fix:"Хэн хийсэн → made BY."},
      {q:"Асуулт:", parts:["What is it made ", "?"], opts:["of","from"], a:0, fix:"Материал асуух → made of."}
    ],
    speak:{ scene:'Ноолуурын дэлгүүрт', turns:[
      {ruby:"This scarf is beautiful. What is it made of?", pron:"зис скарф из бьютифул. вот из ит мэйд ов?", mn:"Энэ ороолт гоё юм. Юугаар хийсэн бэ?",
        choices:[{t:"It is made of cashmere. Very soft!",best:true,mn:"Ноолуураар хийсэн. Их зөөлөн!"},{t:"It made from cashmere.",best:false,fix:"It IS made OF cashmere."}]},
      {ruby:"Is it made in Mongolia?", pron:"из ит мэйд ин Монголиа?", mn:"Монголд хийгдсэн үү?",
        choices:[{t:"Yes, it is. Mongolian cashmere is the best!",best:true,mn:"Тийм. Монгол ноолуур хамгийн сайн нь!"},{t:"Yes, made of Mongolia.",best:false,fix:"Улс → made IN Mongolia."}]},
      {ruby:"How much did you pay for it?", pron:"хау мач дид ю пэй фор ит?", mn:"Хэдээр авсан бэ?",
        choices:[{t:"I didn't buy it — my mother made it for me!",best:true,mn:"Аваагүй — ээж маань надад хийж өгсөн!"},{t:"I didn't bought. Mother made.",best:false,fix:"didn't BUY it — my mother MADE IT for me."}]}
    ]}
  },
  {
    id:'a1m8l9', title:"8.9 Сонголт хийх", level:"A1 · М8",
    blurb:"I prefer this to that — илүүд үзэх",
    rule:{
      h:"Зорилго ба дүрэм: prefer / like better",
      html:`<b>🎯 Зорилго:</b> Хоёрын дундаас сонгож, шалтгаанаа хэлэх.<br><br>
        <b>«Илүүд үзэх» 2 арга:</b>
        <div style="margin:12px 0"><span class="tag">prefer A to B: I prefer tea to coffee. («than» биш — TO!)</span><span class="tag">like A better than B: I like tea better than coffee.</span></div>
        <b>Үйл үгтэй бол:</b> I prefer walking to driving. (-ing!) эсвэл I prefer to walk.<br>
        <b>Шалтгаан нэмбэл хүчтэй:</b> I prefer this one because it is cheaper.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        prefer /prɪˈfɜːr/ — илүүд үзэх · choose /tʃuːz/ — сонгох · choice /tʃɔɪs/ — сонголт<br>
        decide /dɪˈsaɪd/ — шийдэх · think /θɪŋk/ — бодох · opinion /əˈpɪnjən/ — санал<br>
        cheaper /ˈtʃiːpər/ — илүү хямд · nicer /ˈnaɪsər/ — илүү гоё · practical /ˈpræktɪkl/ — практик · because /bɪˈkɒz/ — учир нь</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I prefer tea THAN coffee» ✗ → <b>prefer tea TO coffee</b> (prefer-тэй бол TO!). Гэхдээ «like better THAN» ✓ (like-тай бол than). Мөн «I more like tea» ✗ → <b>I prefer tea</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «PREFER → TO · LIKE BETTER → THAN» — хоёр өөр угтвартай!</p>`
    },
    phrases:[
      {en:"Which one do you prefer?", pron:"вич ван ду ю прифөр?", mn:"Аль нь илүүд үздэг вэ?"},
      {en:"I prefer the red one to the blue one.", pron:"ай прифөр зэ рэд ван ту зэ блү ван.", mn:"Улааныг хөхөөс илүүд үздэг."},
      {en:"I like this one better than that one.", pron:"ай лайк зис ван бэтэр зэн зэт ван.", mn:"Энэ нь тэрнээс илүү таалагдаж байна."},
      {en:"I prefer it because it is cheaper.", pron:"ай прифөр ит бикоз ит из чийпэр.", mn:"Илүү хямд учраас илүүд үзэж байна."},
      {en:"It is difficult to choose!", pron:"ит из дификалт ту чүз!", mn:"Сонгоход хэцүү байна!"}
    ],
    exercises:[
      {q:"prefer + :", parts:["I prefer tea ", " coffee."], opts:["to","than"], a:0, fix:"prefer → TO."},
      {q:"like better + :", parts:["I like this one better ", " that one."], opts:["than","to"], a:0, fix:"like better → THAN."},
      {q:"Үйл үг:", parts:["I prefer ", " to driving."], opts:["walking","walk"], a:0, fix:"prefer + -ing → walking."},
      {q:"Шалтгаан:", parts:["I prefer it ", " it is cheaper."], opts:["because","so"], a:0, fix:"Шалтгаан → because."}
    ],
    speak:{ scene:'Эцсийн сонголт', turns:[
      {ruby:"So, which one do you prefer?", pron:"соу, вич ван ду ю прифөр?", mn:"Тэгэхээр аль нь илүүд үзэж байна?",
        choices:[{t:"I prefer the red one to the blue one.",best:true,mn:"Улааныг хөхөөс илүүд үзэж байна."},{t:"I prefer red than blue.",best:false,fix:"prefer A TO B (than ✗)."}]},
      {ruby:"Why?", pron:"вай?", mn:"Яагаад?",
        choices:[{t:"Because it is cheaper and it suits me better.",best:true,mn:"Учир нь илүү хямд, надад илүү зохиж байна."},{t:"Cheaper. Suits.",best:false,fix:"Бүтэн: Because it is cheaper and it suits me better."}]},
      {ruby:"Good choice! Did you decide?", pron:"гүд чойс! дид ю дисайд?", mn:"Сайн сонголт! Шийдчихсэн үү?",
        choices:[{t:"Yes, I did. I'll take the red one!",best:true,mn:"Тийм. Улааныг нь авъя!"},{t:"Yes, I decided take red.",best:false,fix:"Yes, I did. I'll take THE RED ONE."}]}
    ]}
  },
  {
    id:'a1m8l10', title:"8.10 Модулийн шалгалт", level:"A1 · М8",
    blurb:"🏆 Дэлгүүрт бүрэн худалдан авалт",
    rule:{
      h:"Давтлага: Модуль 8-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 8-ийн мэдлэгээ нэгтгэж, дэлгүүрт бүрэн худалдан авалт хийх.<br><br>
        <b>Модуль 8-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">wear · put on · take off · try on</span><span class="tag">the red one / the blue ones</span><span class="tag">too big / not big enough</span><span class="tag">bought · went · paid · saw ⭐</span><span class="tag">this/that/these/those + Which one?</span><span class="tag">Did you...? / I didn't... ⭐</span><span class="tag">try IT on (дунд!)</span><span class="tag">made of / made in</span><span class="tag">prefer A to B</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Дэлгүүрийн түүх (12+ өгүүлбэр):</b> өнгөрсөн цагаар өгүүл! Жишээ:<br>
        <i>Yesterday I went shopping with my sister. I looked for a winter coat. I saw a beautiful one — it was made of wool and made in Mongolia. I tried it on, but it was too small. The assistant brought a larger one and it fitted perfectly. There were two colors: red and black. I prefer dark colors, so I chose the black one. It cost 150,000 tugrik. I paid by card. My sister didn't buy anything — she didn't find her size!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Дэлгүүрийн 5 алхам: <b>Хайх</b> (looked for) → <b>Өмсөж үзэх</b> (tried it on) → <b>Хэмжээ</b> (too small / fits) → <b>Сонгох</b> (prefer / chose) → <b>Төлөх</b> (paid by card).</p>`
    },
    phrases:[
      {en:"Yesterday I went shopping.", pron:"йестэрдэй ай вэнт шопинг.", mn:"Өчигдөр дэлгүүр хэссэн."},
      {en:"I tried it on, but it was too small.", pron:"ай трайд ит он, бат ит воз ту смол.", mn:"Өмсөж үзсэн ч хэтэрхий жижиг байсан."},
      {en:"It is made of wool and made in Mongolia.", pron:"ит из мэйд ов вүл энд мэйд ин Монголиа.", mn:"Ноосоор хийсэн, Монголд үйлдвэрлэсэн."},
      {en:"I prefer dark colors, so I chose the black one.", pron:"ай прифөр дарк калэрз, соу ай чоуз зэ блэк ван.", mn:"Хар бараан өнгө илүүд үздэг тул хараар сонгосон."},
      {en:"My sister didn't buy anything.", pron:"май систэр диднт бай энисинг.", mn:"Эгч маань юу ч аваагүй."}
    ],
    exercises:[
      {q:"Давтлага (онцгой):", parts:["I ", " shopping yesterday."], opts:["went","goed"], a:0, fix:"go → went."},
      {q:"Давтлага (did):", parts:["Did you ", " a coat?"], opts:["buy","bought"], a:0, fix:"did + нүцгэн → Did you buy?"},
      {q:"Давтлага (байрлал):", parts:["Can I ", "?"], opts:["try it on","try on it"], a:0, fix:"try IT on."},
      {q:"Давтлага (prefer):", parts:["I prefer red ", " blue."], opts:["to","than"], a:0, fix:"prefer → TO."}
    ],
    speak:{ scene:'🏆 Шалгалт: Дэлгүүрийн түүх', turns:[
      {ruby:"What did you do yesterday?", pron:"вот дид ю ду йестэрдэй?", mn:"Өчигдөр юу хийсэн бэ?",
        choices:[{t:"I went shopping and bought a winter coat.",best:true,mn:"Дэлгүүр хэсээд өвлийн пальто авсан."},{t:"I did go shopping and buyed a coat.",best:false,fix:"I WENT shopping and BOUGHT a coat."}]},
      {ruby:"Nice! Tell me about it.", pron:"найс! тэл ми эбаут ит.", mn:"Гоё! Ярьж өгөөч.",
        choices:[{t:"It is made of wool. I tried it on and it fitted perfectly.",best:true,mn:"Ноосоор хийсэн. Өмсөж үзэхэд яг таарсан."},{t:"It made from wool. I tried on it.",best:false,fix:"made OF wool. I tried IT on."}]},
      {ruby:"Did your sister buy anything?", pron:"дид ёр систэр бай энисинг?", mn:"Эгч тань юм авсан уу?",
        choices:[{t:"No, she didn't. She didn't find her size.",best:true,mn:"Үгүй. Хэмжээгээ олоогүй."},{t:"No, she didn't bought. She didn't found size.",best:false,fix:"didn't BUY, didn't FIND (нүцгэн хэлбэр!)."}]}
    ]}
  },
  {
    id:'a1m9l1', title:"9.1 Улирал", level:"A1 · М9",
    blurb:"It is cold. It snows. — эзэнгүй «it»",
    rule:{
      h:"Зорилго ба дүрэм: цаг агаарын «it»",
      html:`<b>🎯 Зорилго:</b> Улирал, цаг агаарыг ярьж, англи хэлний онцлог «it»-ийг эзэмших.<br><br>
        <b>Монгол хэлэнд эзэн байхгүй байж болно</b> («Хүйтэн байна»). Англи хэлэнд <b>ЭЗЭН ЗААВАЛ</b> байх ёстой — тэгэхээр хоосон <b>it</b>-ийг тавина!
        <div style="margin:12px 0"><span class="tag">Хүйтэн байна → IT is cold. (Cold is ✗)</span><span class="tag">Цас орж байна → IT is snowing.</span><span class="tag">Өвөл цас ордог → IT snows in winter.</span></div>
        Энэ «it» юуг ч заахгүй — зүгээр л дүрмийн шаардлага.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        spring /sprɪŋ/ — хавар · summer /ˈsʌmər/ — зун · autumn /ˈɔːtəm/ — намар<br>
        winter /ˈwɪntər/ — өвөл · season /ˈsiːzn/ — улирал · warm /wɔːrm/ — дулаан<br>
        cool /kuːl/ — сэрүүн · snow /snoʊ/ — цас · rain /reɪn/ — бороо · wind /wɪnd/ — салхи</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Is cold today» ✗ → <b>IT is cold today</b> (эзэн заавал!). Мөн «In Mongolia is cold» ✗ → <b>In Mongolia, IT is cold</b>. Улирлын нэрэнд артикль хэрэггүй: <b>in winter</b> ✓ (in the winter ч болно).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цаг агаар яривал IT-ээр эхэл» — It is cold / It is raining / It snows.</p>`
    },
    phrases:[
      {en:"It is very cold in winter.", pron:"ит из вэри коулд ин винтэр.", mn:"Өвөл маш хүйтэн байдаг."},
      {en:"It snows a lot in Mongolia.", pron:"ит сноуз э лот ин Монголиа.", mn:"Монголд их цас ордог."},
      {en:"Summer is my favorite season.", pron:"саммэр из май фэйворит сийзн.", mn:"Зун миний дуртай улирал."},
      {en:"It is warm and sunny in June.", pron:"ит из ворм энд сани ин жүн.", mn:"6-р сард дулаан, нартай байдаг."},
      {en:"In autumn, it is cool and windy.", pron:"ин отэм, ит из күл энд винди.", mn:"Намар сэрүүн, салхитай байдаг."}
    ],
    exercises:[
      {q:"Эзэн:", parts:["", " is cold today."], opts:["It","—"], a:0, fix:"Эзэн заавал → IT is cold."},
      {q:"Эзэн:", parts:["In winter, ", " snows a lot."], opts:["it","—"], a:0, fix:"IT snows a lot."},
      {q:"Улирал:", parts:["It is hot in ", "."], opts:["summer","winter"], a:0, fix:"Халуун → summer."},
      {q:"Артикль:", parts:["It is cold ", " winter."], opts:["in","on"], a:0, fix:"Улиралд → in winter."}
    ],
    speak:{ scene:'Улирлын тухай', turns:[
      {ruby:"What is your favorite season?", pron:"вот из ёр фэйворит сийзн?", mn:"Дуртай улирал тань аль вэ?",
        choices:[{t:"Summer! It is warm and sunny.",best:true,mn:"Зун! Дулаан, нартай байдаг."},{t:"Summer! Is warm.",best:false,fix:"Эзэн мартав → IT is warm."}]},
      {ruby:"Is it very cold in Mongolia in winter?", pron:"из ит вэри коулд ин Монголиа ин винтэр?", mn:"Монголд өвөл маш хүйтэн байдаг уу?",
        choices:[{t:"Yes, it is! And it snows a lot.",best:true,mn:"Тийм! Бас их цас ордог."},{t:"Yes! Snows a lot.",best:false,fix:"IT snows a lot."}]},
      {ruby:"What about autumn?", pron:"вот эбаут отэм?", mn:"Намар яадаг вэ?",
        choices:[{t:"In autumn, it is cool and windy.",best:true,mn:"Намар сэрүүн, салхитай байдаг."},{t:"Autumn cool, windy.",best:false,fix:"In autumn, IT IS cool and windy."}]}
    ]}
  },
  {
    id:'a1m9l2', title:"9.2 Цаг агаар", level:"A1 · М9",
    blurb:"What's the weather like? — It's raining ⟷ It rains",
    rule:{
      h:"Зорилго ба дүрэм: What ... like? + Simple ⟷ Continuous",
      html:`<b>🎯 Зорилго:</b> Цаг агаар асууж, «яг одоо» ба «ерөнхийдөө»-г ялгах.<br><br>
        <b>What is ... like?</b> = ямар вэ? (like энд «дуртай» биш — «ямар» гэсэн утга!)
        <div style="margin:12px 0"><span class="tag">What is the weather like? = Цаг агаар ямар байна?</span><span class="tag">What is your city like? = Хот тань ямар вэ?</span></div>
        <b>Цаг агаарын 2 цаг:</b>
        <div style="margin:12px 0"><span class="tag">ЯГ ОДОО: It is raining now. (цонхоор харж байна)</span><span class="tag">ЕРӨНХИЙДӨӨ: It rains a lot in summer. (байнгын байдал)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        weather /ˈweðər/ — цаг агаар · sunny /ˈsʌni/ — нартай · cloudy /ˈklaʊdi/ — үүлтэй<br>
        rainy /ˈreɪni/ — бороотой · snowy /ˈsnoʊi/ — цастай · windy /ˈwɪndi/ — салхитай<br>
        foggy /ˈfɒɡi/ — манантай · storm /stɔːrm/ — шуурга · sky /skaɪ/ — тэнгэр · umbrella /ʌmˈbrelə/ — шүхэр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How is the weather?» — болох ч төрөлх хэлтэн <b>What is the weather like?</b> гэдэг. Мөн «It is rain» ✗ → <b>It is rainING</b> (яг одоо) эсвэл <b>It is rainY</b> (тэмдэг нэр).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цонхоор харж байвал -ING · Ерөнхийдөө бол -S» — It's raining now ⟷ It rains in summer.</p>`
    },
    phrases:[
      {en:"What is the weather like today?", pron:"вот из зэ вэзэр лайк тудэй?", mn:"Өнөөдөр цаг агаар ямар байна?"},
      {en:"It is sunny and warm.", pron:"ит из сани энд ворм.", mn:"Нартай, дулаан байна."},
      {en:"It is raining now. Take an umbrella!", pron:"ит из рэйнинг нау. тэйк эн амбрэла!", mn:"Одоо бороо орж байна. Шүхэр ав!"},
      {en:"It rains a lot in July.", pron:"ит рэйнз э лот ин жулай.", mn:"7-р сард их бороо ордог."},
      {en:"The sky is very cloudy.", pron:"зэ скай из вэри клауди.", mn:"Тэнгэр их үүлтэй байна."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["What is the weather ", "?"], opts:["like","—"], a:0, fix:"Ямар вэ → What is it LIKE?"},
      {q:"Яг одоо:", parts:["Look! It ", " outside."], opts:["is snowing","snows"], a:0, fix:"Яг одоо → is snowing."},
      {q:"Ерөнхийдөө:", parts:["It ", " a lot in summer."], opts:["rains","is raining"], a:0, fix:"Байнгын → rains."},
      {q:"Хэлбэр:", parts:["It is ", " today."], opts:["rainy","rain"], a:0, fix:"be + тэмдэг нэр → rainy."}
    ],
    speak:{ scene:'Цаг агаар асуух', turns:[
      {ruby:"What is the weather like today?", pron:"вот из зэ вэзэр лайк тудэй?", mn:"Өнөөдөр цаг агаар ямар байна?",
        choices:[{t:"It is cloudy and cold.",best:true,mn:"Үүлтэй, хүйтэн байна."},{t:"Is cloudy, cold.",best:false,fix:"IT IS cloudy and cold."}]},
      {ruby:"Is it raining?", pron:"из ит рэйнинг?", mn:"Бороо орж байна уу?",
        choices:[{t:"Yes, it is. Take an umbrella!",best:true,mn:"Тийм. Шүхэр ав!"},{t:"Yes, it is rain.",best:false,fix:"It is rainING."}]},
      {ruby:"Does it rain a lot here?", pron:"даз ит рэйн э лот хийр?", mn:"Энд их бороо ордог уу?",
        choices:[{t:"No, it doesn't. It rains only in summer.",best:true,mn:"Үгүй. Зөвхөн зун ордог."},{t:"No. It is raining only summer.",best:false,fix:"Байнгын → It RAINS only in summer."}]}
    ]}
  },
  {
    id:'a1m9l3', title:"9.3 Температур", level:"A1 · М9",
    blurb:"How cold is it? — How + тэмдэг нэр",
    rule:{
      h:"Зорилго ба дүрэм: How + тэмдэг нэр (хэмжээ асуух)",
      html:`<b>🎯 Зорилго:</b> Температур хэлж, «хэр» гэсэн асуултыг эзэмших.<br><br>
        <b>How + тэмдэг нэр</b> = хэр ...?
        <div style="margin:12px 0"><span class="tag">How cold is it? = Хэр хүйтэн байна?</span><span class="tag">How hot? / How far? / How big? / How old?</span></div>
        <b>Температур:</b>
        <div style="margin:12px 0"><span class="tag">+20° → twenty degrees</span><span class="tag">−30° → minus thirty degrees</span><span class="tag">0° → zero</span></div>
        <b>Хариулт:</b> It is minus thirty degrees. / It is about twenty.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        temperature /ˈtemprətʃər/ — температур · degree /dɪˈɡriː/ — хэм · minus /ˈmaɪnəs/ — хасах<br>
        zero /ˈzɪroʊ/ — тэг · hot /hɒt/ — халуун · freezing /ˈfriːzɪŋ/ — хөлдмөөр хүйтэн<br>
        boiling /ˈbɔɪlɪŋ/ — халуун оргих · mild /maɪld/ — дулаавтар · average /ˈævərɪdʒ/ — дундаж · rise /raɪz/ — өсөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How much cold?» ✗ → <b>How COLD is it?</b> (тэмдэг нэртэй бол much хэрэггүй). Мөн «It is minus thirty degree» ✗ → олон тоо: <b>degreeS</b>. «−30» уншихад «minus thirty» ✓ (АНУ-д «thirty below» ч болно).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «How + шинж чанар» — How cold? How far? How old? — асуух үг + тэмдэг нэр хос.</p>`
    },
    phrases:[
      {en:"How cold is it today?", pron:"хау коулд из ит тудэй?", mn:"Өнөөдөр хэр хүйтэн байна?"},
      {en:"It is minus thirty degrees!", pron:"ит из майнэс сөрти дигрийз!", mn:"Хасах 30 хэм байна!"},
      {en:"It is about twenty degrees in summer.", pron:"ит из эбаут твэнти дигрийз ин саммэр.", mn:"Зун 20 хэм орчим байдаг."},
      {en:"It is freezing outside!", pron:"ит из фрийзинг аутсайд!", mn:"Гадаа хөлдмөөр хүйтэн байна!"},
      {en:"The temperature will rise tomorrow.", pron:"зэ тэмпрэчэр вил райз тумороу.", mn:"Маргааш температур өснө."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["How ", " is it outside?"], opts:["cold","much cold"], a:0, fix:"How + тэмдэг нэр → How cold?"},
      {q:"Олон тоо:", parts:["It is minus twenty ", "."], opts:["degrees","degree"], a:0, fix:"Олон тоо → degrees."},
      {q:"Хасах:", parts:["It is ", " ten degrees."], opts:["minus","less"], a:0, fix:"−10 → minus ten."},
      {q:"Асуулт:", parts:["How ", " is the station?"], opts:["far","much far"], a:0, fix:"How far? (much ✗)."}
    ],
    speak:{ scene:'Хүйтний тухай', turns:[
      {ruby:"How cold is it in Mongolia in winter?", pron:"хау коулд из ит ин Монголиа ин винтэр?", mn:"Монголд өвөл хэр хүйтэн байдаг вэ?",
        choices:[{t:"It is about minus thirty degrees.",best:true,mn:"Хасах 30 хэм орчим байдаг."},{t:"How much cold? Minus thirty degree.",best:false,fix:"minus thirty degreeS (олон тоо)."}]},
      {ruby:"Minus thirty?! That is freezing!", pron:"майнэс сөрти?! зэт из фрийзинг!", mn:"Хасах 30 гэнэ ээ?! Хөлдмөөр хүйтэн!",
        choices:[{t:"Yes! But it is sunny, so it feels okay.",best:true,mn:"Тийм! Гэхдээ нартай тул зүгээр санагддаг."},{t:"Yes! But sunny.",best:false,fix:"Бүтэн: But IT IS sunny, so it feels okay."}]},
      {ruby:"And in summer?", pron:"энд ин саммэр?", mn:"Зун бол?",
        choices:[{t:"It is about twenty-five degrees. Very nice!",best:true,mn:"25 хэм орчим. Их сайхан!"},{t:"Twenty-five. Nice.",best:false,fix:"IT IS about twenty-five degrees."}]}
    ]}
  },
  {
    id:'a1m9l4', title:"9.4 Сар өдөр", level:"A1 · М9",
    blurb:"on the fifth of May — огноо хэлэх",
    rule:{
      h:"Зорилго ба дүрэм: огноо унших ба бичих",
      html:`<b>🎯 Зорилго:</b> Сар нэрлэж, огноог зөв уншиж хэлэх.<br><br>
        <b>Огноо = эрэмбийн тоо!</b> (Модуль 4-ийн first, second, third санаарай)
        <div style="margin:12px 0"><span class="tag">Британи: the 5th of May → «the fifth of May»</span><span class="tag">Америк: May 5th → «May fifth»</span></div>
        <b>Угтвар үг:</b>
        <div style="margin:12px 0"><span class="tag">ON + бүтэн огноо: on the 5th of May</span><span class="tag">IN + зөвхөн сар/жил: in May, in 2026</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (сарууд):</b></p>
        <div style="font-size:14px;line-height:2">
        January /ˈdʒænjueri/ — 1-р сар · February /ˈfebrueri/ — 2-р сар · March /mɑːrtʃ/ — 3-р сар<br>
        April /ˈeɪprəl/ — 4-р сар · May /meɪ/ — 5-р сар · June /dʒuːn/ — 6-р сар<br>
        July /dʒʊˈlaɪ/ — 7-р сар · August /ˈɔːɡəst/ — 8-р сар · September /sepˈtembər/ — 9-р сар · December /dɪˈsembər/ — 12-р сар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «in 5th of May» ✗ → бүтэн огноонд <b>ON</b>. Сарын нэр ҮРГЭЛЖ том үсгээр: «may» ✗ → <b>May</b>. Мөн уншихад тоог эрэмбээр: «May five» ✗ → <b>May fifth</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тодорхой өдөр → ON · Бүхэл сар → IN» — on the 5th of May ⟷ in May.</p>`
    },
    phrases:[
      {en:"What is the date today?", pron:"вот из зэ дэйт тудэй?", mn:"Өнөөдөр хэдэн бэ?"},
      {en:"It is the fifth of May.", pron:"ит из зэ фифс ов мэй.", mn:"5-р сарын 5."},
      {en:"My birthday is in July.", pron:"май бөрсдэй из ин жулай.", mn:"Миний төрсөн өдөр 7-р сард."},
      {en:"The party is on the twelfth of June.", pron:"зэ парти из он зэ твэлфс ов жүн.", mn:"Үдэшлэг 6-р сарын 12-нд болно."},
      {en:"It snows in January and February.", pron:"ит сноуз ин жэнюэри энд фэбруэри.", mn:"1, 2-р сард цас ордог."}
    ],
    exercises:[
      {q:"Угтвар:", parts:["My birthday is ", " May."], opts:["in","on"], a:0, fix:"Зөвхөн сар → in May."},
      {q:"Угтвар:", parts:["The party is ", " the 5th of June."], opts:["on","in"], a:0, fix:"Бүтэн огноо → on."},
      {q:"Эрэмбийн тоо:", parts:["It is the ", " of May. (5)"], opts:["fifth","five"], a:0, fix:"Огноо → эрэмбийн тоо: fifth."},
      {q:"Асуулт:", parts:["What is the ", " today?"], opts:["date","day"], a:0, fix:"Огноо → What is the date?"}
    ],
    speak:{ scene:'Огноо тохирох', turns:[
      {ruby:"What is the date today?", pron:"вот из зэ дэйт тудэй?", mn:"Өнөөдөр хэдэн бэ?",
        choices:[{t:"It is the tenth of March.",best:true,mn:"3-р сарын 10."},{t:"It is March ten.",best:false,fix:"Эрэмбийн тоо → March TENTH."}]},
      {ruby:"When is the meeting?", pron:"вэн из зэ мийтинг?", mn:"Уулзалт хэзээ вэ?",
        choices:[{t:"It is on the fifteenth of March.",best:true,mn:"3-р сарын 15-нд."},{t:"It is in 15th March.",best:false,fix:"Бүтэн огноо → ON the fifteenth of March."}]},
      {ruby:"And when is your holiday?", pron:"энд вэн из ёр холидэй?", mn:"Амралт тань хэзээ вэ?",
        choices:[{t:"In July. I love summer!",best:true,mn:"7-р сард. Зун их дуртай!"},{t:"On July.",best:false,fix:"Зөвхөн сар → IN July."}]}
    ]}
  },
  {
    id:'a1m9l5', title:"9.5 Төрсөн өдөр", level:"A1 · М9",
    blurb:"I was born in 1995 — was born",
    rule:{
      h:"Зорилго ба дүрэм: be born (төрөх)",
      html:`<b>🎯 Зорилго:</b> Хэзээ, хаана төрснөө хэлэх.<br><br>
        <b>«Төрөх» гэдэг англиар онцгой:</b> үргэлж <b>was/were born</b> — өнгөрсөн цагт!
        <div style="margin:12px 0"><span class="tag">I was born in 1995. ✓</span><span class="tag">I born in 1995. ✗</span><span class="tag">I am born. ✗ (энэ нь буруу!)</span></div>
        <b>Асуулт:</b> When were you born? / Where were you born?<br>
        <b>Угтвар үг:</b> born IN 1995, born IN Ulaanbaatar, born ON the 5th of May.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        born /bɔːrn/ — төрсөн · birthday /ˈbɜːrθdeɪ/ — төрсөн өдөр · age /eɪdʒ/ — нас<br>
        candle /ˈkændl/ — лаа · cake /keɪk/ — бялуу · present /ˈpreznt/ — бэлэг<br>
        wish /wɪʃ/ — хүсэл · celebrate /ˈselɪbreɪt/ — тэмдэглэх · surprise /sərˈpraɪz/ — гэнэтийн бэлэг · congratulations /kənˌɡrætʃuˈleɪʃnz/ — баяр хүргэе</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am born in 1995» ✗ — энэ бол хамгийн түгээмэл алдаа! Зөв нь <b>I WAS born</b> (өнгөрсөнд болсон үйл явдал). Мөн «Happy birthday TO you» ✓ ч зүгээр «Happy birthday!» хангалттай.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Төрөх бол өнгөрсөн — WAS born (am born ✗)».</p>`
    },
    phrases:[
      {en:"When were you born?", pron:"вэн вөр ю борн?", mn:"Хэзээ төрсөн бэ?"},
      {en:"I was born in 1995.", pron:"ай воз борн ин найнтийн найнти файв.", mn:"Би 1995 онд төрсөн."},
      {en:"I was born in Ulaanbaatar.", pron:"ай воз борн ин Улаанбаатар.", mn:"Би Улаанбаатарт төрсөн."},
      {en:"My son was born on the third of May.", pron:"май сан воз борн он зэ сөрд ов мэй.", mn:"Хүү маань 5-р сарын 3-нд төрсөн."},
      {en:"Happy birthday! Congratulations!", pron:"хэпи бөрсдэй! конгрэчулэйшнз!", mn:"Төрсөн өдрийн мэнд! Баяр хүргэе!"}
    ],
    exercises:[
      {q:"be born:", parts:["I ", " born in 1995."], opts:["was","am"], a:0, fix:"Төрөх → WAS born."},
      {q:"be born:", parts:["They ", " born in Darkhan."], opts:["were","are"], a:0, fix:"Олон → WERE born."},
      {q:"Асуулт:", parts:["When ", " you born?"], opts:["were","did"], a:0, fix:"be-тэй → When WERE you born?"},
      {q:"Угтвар:", parts:["She was born ", " the 5th of May."], opts:["on","in"], a:0, fix:"Бүтэн огноо → on."}
    ],
    speak:{ scene:'Төрсөн өдрийн яриа', turns:[
      {ruby:"When is your birthday?", pron:"вэн из ёр бөрсдэй?", mn:"Төрсөн өдөр тань хэзээ вэ?",
        choices:[{t:"It is on the third of May.",best:true,mn:"5-р сарын 3-нд."},{t:"It is in May three.",best:false,fix:"ON the THIRD of May."}]},
      {ruby:"Nice! Where were you born?", pron:"найс! вэр вөр ю борн?", mn:"Гоё! Хаана төрсөн бэ?",
        choices:[{t:"I was born in Ulaanbaatar.",best:true,mn:"Улаанбаатарт төрсөн."},{t:"I am born in Ulaanbaatar.",best:false,fix:"I WAS born (am born ✗)."}]},
      {ruby:"How are you going to celebrate?", pron:"хау а ю гоуинг ту сэлэбрэйт?", mn:"Яаж тэмдэглэх вэ?",
        choices:[{t:"I'm going to make a cake for my family.",best:true,mn:"Гэр бүлдээ бялуу хийх бодолтой."},{t:"I make cake.",best:false,fix:"I'M GOING TO make a cake."}]}
    ]}
  },
  {
    id:'a1m9l6', title:"9.6 Баяр", level:"A1 · М9",
    blurb:"It's cold, so we stay home — so (үр дүн)",
    rule:{
      h:"Зорилго ба дүрэм: so (үр дүн) ⟷ because (шалтгаан)",
      html:`<b>🎯 Зорилго:</b> Баяр ёслолыг ярьж, шалтгаан-үр дүнг холбох.<br><br>
        Модуль 2-т <b>because</b> (шалтгаан) үзсэн. Одоо <b>so</b> (үр дүн) — эсрэг талаас нь!
        <div style="margin:12px 0"><span class="tag">BECAUSE + шалтгаан: We stay home BECAUSE it is cold.</span><span class="tag">SO + үр дүн: It is cold, SO we stay home.</span></div>
        Хоёулаа нэг утга — дараалал нь л өөр! <b>so-гийн өмнө таслал</b> тавина.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        holiday /ˈhɒlədeɪ/ — баяр · Tsagaan Sar — Цагаан сар · Naadam — Наадам<br>
        New Year /nuː jɪr/ — шинэ жил · tradition /trəˈdɪʃn/ — уламжлал · relatives /ˈrelətɪvz/ — хамаатан<br>
        greet /ɡriːt/ — мэндлэх · gift /ɡɪft/ — бэлэг · special /ˈspeʃl/ — онцгой · every year /ˈevri jɪr/ — жил бүр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Because it is cold, so we stay home» ✗ — хоёуланг зэрэг хэрэглэж болохгүй! Аль нэгийг л сонго: <b>Because it is cold, we stay home</b> ✓ эсвэл <b>It is cold, so we stay home</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BECAUSE → шалтгаан урд · SO → үр дүн урд» — нэг өгүүлбэрт нэгийг л!</p>`
    },
    phrases:[
      {en:"Tsagaan Sar is in February.", pron:"Цагаан Сар из ин фэбруэри.", mn:"Цагаан сар 2-р сард болдог."},
      {en:"It is a special holiday, so we visit our relatives.", pron:"ит из э спэшл холидэй, соу ви визит ауэр рэлэтивз.", mn:"Онцгой баяр учир хамаатан садандаа очдог."},
      {en:"We celebrate Naadam in July because it is warm.", pron:"ви сэлэбрэйт Наадам ин жулай бикоз ит из ворм.", mn:"Дулаан учраас Наадмыг 7-р сард тэмдэглэдэг."},
      {en:"My grandmother makes buuz every year.", pron:"май грэндмазэр мэйкс бууз эври йир.", mn:"Эмээ маань жил бүр бууз хийдэг."},
      {en:"It was very cold, so we stayed at home.", pron:"ит воз вэри коулд, соу ви стэйд эт хоум.", mn:"Их хүйтэн байсан тул гэртээ байсан."}
    ],
    exercises:[
      {q:"so/because:", parts:["It is cold, ", " we stay home."], opts:["so","because"], a:0, fix:"Үр дүн урд → so."},
      {q:"so/because:", parts:["We stay home ", " it is cold."], opts:["because","so"], a:0, fix:"Шалтгаан урд → because."},
      {q:"Зөв эсэх:", parts:["", " it is cold, we stay home."], opts:["Because","Because... so"], a:0, fix:"Нэгийг л сонго."},
      {q:"Угтвар:", parts:["Tsagaan Sar is ", " February."], opts:["in","on"], a:0, fix:"Сар → in February."}
    ],
    speak:{ scene:'Цагаан сарын тухай', turns:[
      {ruby:"What is the biggest holiday in Mongolia?", pron:"вот из зэ бигэст холидэй ин Монголиа?", mn:"Монголын хамгийн том баяр юу вэ?",
        choices:[{t:"Tsagaan Sar. It is in February.",best:true,mn:"Цагаан сар. 2-р сард болдог."},{t:"Tsagaan Sar. Is on February.",best:false,fix:"IT IS IN February."}]},
      {ruby:"What do you do on Tsagaan Sar?", pron:"вот ду ю ду он Цагаан Сар?", mn:"Цагаан сард юу хийдэг вэ?",
        choices:[{t:"It is a family holiday, so we visit our relatives.",best:true,mn:"Гэр бүлийн баяр учир хамаатандаа очдог."},{t:"Because family holiday, so we visit.",best:false,fix:"because ба so хоёуланг зэрэг ✗."}]},
      {ruby:"Did you celebrate last year?", pron:"дид ю сэлэбрэйт ласт йир?", mn:"Өнгөрсөн жил тэмдэглэсэн үү?",
        choices:[{t:"Yes! My grandmother made a thousand buuz!",best:true,mn:"Тийм! Эмээ маань мянган бууз хийсэн!"},{t:"Yes! Grandmother maked buuz.",best:false,fix:"make → MADE."}]}
    ]}
  },
  {
    id:'a1m9l7', title:"9.7 Өнөөдөр/маргааш", level:"A1 · М9",
    blurb:"It will be sunny — will ⭐",
    rule:{
      h:"Зорилго ба дүрэм: will (ирээдүй)",
      html:`<b>🎯 Зорилго:</b> ⭐ Ирээдүйг таамаглах — will!<br><br>
        <b>will + үйл үг</b> — бүх биед адилхан, хувирдаггүй:
        <div style="margin:12px 0"><span class="tag">I will go · She will go · They will go</span><span class="tag">Богино: I'll, she'll, they'll</span><span class="tag">Үгүйсгэл: won't (will not)</span></div>
        <b>going to ⟷ will:</b>
        <div style="margin:12px 0"><span class="tag">going to = ТӨЛӨВЛӨСӨН: I'm going to visit Darkhan. (тасалбар авчихсан)</span><span class="tag">will = ТААМАГЛАЛ / яг одоо шийдсэн: It will be cold tomorrow.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        will /wɪl/ — болно · won't /woʊnt/ — болохгүй · tomorrow /təˈmɒroʊ/ — маргааш<br>
        today /təˈdeɪ/ — өнөөдөр · tonight /təˈnaɪt/ — өнөө орой · next week /nekst wiːk/ — ирэх долоо хоног<br>
        soon /suːn/ — удахгүй · later /ˈleɪtər/ — дараа · maybe /ˈmeɪbi/ — магадгүй · think /θɪŋk/ — бодох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I will to go» ✗ → will-ийн ард to байхгүй: <b>I will go</b>. «She wills» ✗ — will хувирдаггүй: <b>She will</b>. Мөн «It will rains» ✗ → <b>It will rain</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WILL + нүцгэн үйл үг» — will go, will be, will rain (to ч, -s ч байхгүй!).</p>`
    },
    phrases:[
      {en:"It will be sunny tomorrow.", pron:"ит вил би сани тумороу.", mn:"Маргааш нартай байх болно."},
      {en:"It will rain tonight.", pron:"ит вил рэйн тунайт.", mn:"Өнөө орой бороо орно."},
      {en:"I think it will be cold next week.", pron:"ай синк ит вил би коулд нэкст вийк.", mn:"Ирэх долоо хоногт хүйтэн болно гэж бодож байна."},
      {en:"It won't snow in April.", pron:"ит воунт сноу ин эйприл.", mn:"4-р сард цас орохгүй."},
      {en:"Will it be warm on Saturday?", pron:"вил ит би ворм он сэтэрдэй?", mn:"Бямбад дулаан байх болов уу?"}
    ],
    exercises:[
      {q:"will + :", parts:["It will ", " sunny tomorrow."], opts:["be","is"], a:0, fix:"will + нүцгэн → will be."},
      {q:"to хэрэгтэй юу:", parts:["I will ", " later."], opts:["go","to go"], a:0, fix:"will-ийн ард to байхгүй."},
      {q:"-s байх уу:", parts:["It will ", " tonight."], opts:["rain","rains"], a:0, fix:"will + нүцгэн → will rain."},
      {q:"Үгүйсгэл:", parts:["It ", " snow in May."], opts:["won't","doesn't will"], a:0, fix:"Үгүйсгэл → won't."}
    ],
    speak:{ scene:'Маргаашийн цаг агаар', turns:[
      {ruby:"What will the weather be like tomorrow?", pron:"вот вил зэ вэзэр би лайк тумороу?", mn:"Маргааш цаг агаар ямар байх бол?",
        choices:[{t:"It will be sunny and warm.",best:true,mn:"Нартай, дулаан байх болно."},{t:"It will is sunny.",best:false,fix:"will + BE → It will be sunny."}]},
      {ruby:"Will it rain?", pron:"вил ит рэйн?", mn:"Бороо орох уу?",
        choices:[{t:"No, it won't. I think it will be dry.",best:true,mn:"Үгүй. Хуурай байна гэж бодож байна."},{t:"No, it doesn't will rain.",best:false,fix:"Үгүйсгэл → it WON'T."}]},
      {ruby:"Good! We can go to the park then.", pron:"гүд! ви кэн гоу ту зэ парк зэн.", mn:"Сайн! Тэгвэл цэцэрлэгт хүрээлэн явж болно.",
        choices:[{t:"Yes! I'll bring some food.",best:true,mn:"Тийм! Би хоол авчирна."},{t:"Yes! I will to bring food.",best:false,fix:"will BRING (to ✗)."}]}
    ]}
  },
  {
    id:'a1m9l8', title:"9.8 Аяллын хувцас", level:"A1 · М9",
    blurb:"You should take a coat — should ⭐",
    rule:{
      h:"Зорилго ба дүрэм: should / shouldn't (зөвлөгөө)",
      html:`<b>🎯 Зорилго:</b> ⭐ Зөвлөгөө өгөх — should!<br><br>
        <b>should + үйл үг</b> = -вал зүгээр, -х хэрэгтэй (зөвлөгөө, тушаал биш!)
        <div style="margin:12px 0"><span class="tag">You should take a coat. = Пальто авбал зүгээр.</span><span class="tag">You shouldn't go alone. = Ганцаараа явбал таарахгүй.</span></div>
        <b>must ⟷ should:</b>
        <div style="margin:12px 0"><span class="tag">must / have to = ЗААВАЛ (дүрэм): You must buy a ticket.</span><span class="tag">should = зөвлөгөө (сонголт байгаа): You should wear a hat.</span></div>
        <b>Асуулт:</b> What should I wear? / Should I take an umbrella?
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        should /ʃʊd/ — -вал зүгээр · advice /ədˈvaɪs/ — зөвлөгөө · pack /pæk/ — ачаа боох<br>
        bring /brɪŋ/ — авчрах · forget /fərˈɡet/ — мартах · remember /rɪˈmembər/ — санах<br>
        boots /buːts/ — гутал · gloves /ɡlʌvz/ — бээлий · scarf /skɑːrf/ — ороолт · sunglasses /ˈsʌnɡlæsɪz/ — нарны шил</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You should to take» ✗ → should-ийн ард to байхгүй: <b>should take</b>. «She shoulds» ✗ — should хувирдаггүй. Мөн зөвлөгөөнд «must» хэрэглэвэл хэтэрхий хатуу сонсогдоно — <b>should</b> зөөлөн!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUST = хууль · SHOULD = найзын зөвлөгөө» — хоёулаа to-гүй, хувирдаггүй.</p>`
    },
    phrases:[
      {en:"What should I wear?", pron:"вот шүд ай вэр?", mn:"Юу өмсвөл зүгээр вэ?"},
      {en:"You should take a warm coat.", pron:"ю шүд тэйк э ворм коут.", mn:"Дулаан пальто авбал зүгээр."},
      {en:"You shouldn't forget your gloves.", pron:"ю шүднт форгет ёр главз.", mn:"Бээлийгээ мартаж болохгүй шүү."},
      {en:"Should I bring an umbrella?", pron:"шүд ай бринг эн амбрэла?", mn:"Шүхэр авах уу?"},
      {en:"It will be sunny, so you should take sunglasses.", pron:"ит вил би сани, соу ю шүд тэйк сангласиз.", mn:"Нартай байх тул нарны шил авбал зүгээр."}
    ],
    exercises:[
      {q:"should + :", parts:["You should ", " a coat."], opts:["take","to take"], a:0, fix:"should + нүцгэн → should take."},
      {q:"Үгүйсгэл:", parts:["You ", " forget your hat."], opts:["shouldn't","don't should"], a:0, fix:"Үгүйсгэл → shouldn't."},
      {q:"Асуулт:", parts:["", " I bring an umbrella?"], opts:["Should","Do should"], a:0, fix:"Асуулт → Should I...?"},
      {q:"must/should:", parts:["You ", " buy a ticket. (дүрэм)"], opts:["must","should"], a:0, fix:"Заавал → must."}
    ],
    speak:{ scene:'Аялалд бэлдэх', turns:[
      {ruby:"I'm going to Mongolia in January. What should I pack?", pron:"айм гоуинг ту Монголиа ин жэнюэри. вот шүд ай пэк?", mn:"1-р сард Монгол явна. Юу авбал зүгээр вэ?",
        choices:[{t:"You should take a very warm coat and boots.",best:true,mn:"Маш дулаан пальто, гутал авбал зүгээр."},{t:"You should to take warm coat.",best:false,fix:"should TAKE (to ✗)."}]},
      {ruby:"Is it really that cold?", pron:"из ит риали зэт коулд?", mn:"Үнэхээр тэгж хүйтэн байдаг уу?",
        choices:[{t:"Yes! It will be minus thirty, so you shouldn't forget gloves.",best:true,mn:"Тийм! Хасах 30 байх тул бээлийгээ мартаж болохгүй."},{t:"Yes! Don't should forget gloves.",best:false,fix:"You SHOULDN'T forget gloves."}]},
      {ruby:"Should I bring an umbrella?", pron:"шүд ай бринг эн амбрэла?", mn:"Шүхэр авах уу?",
        choices:[{t:"No, you shouldn't. It doesn't rain in winter — it snows!",best:true,mn:"Үгүй. Өвөл бороо ордоггүй — цас ордог!"},{t:"No. Not rain winter.",best:false,fix:"IT DOESN'T rain in winter."}]}
    ]}
  },
  {
    id:'a1m9l9', title:"9.9 Цаг агаарын мэдээ", level:"A1 · М9",
    blurb:"I think it will probably rain — таамаглал",
    rule:{
      h:"Зорилго ба дүрэм: will + probably / I think (таамаглал)",
      html:`<b>🎯 Зорилго:</b> Цаг агаарын мэдээ ойлгож, зөөлөн таамаглал хийх.<br><br>
        <b>Итгэлийн шат:</b>
        <div style="margin:12px 0"><span class="tag">100%: It will rain.</span><span class="tag">80%: It will probably rain.</span><span class="tag">60%: I think it will rain.</span><span class="tag">50%: Maybe it will rain.</span></div>
        <b>probably-ийн байрлал:</b> will-ийн АРД!
        <div style="margin:12px 0"><span class="tag">It will probably rain ✓</span><span class="tag">It probably will rain (болно ч ховор)</span></div>
        <b>Үгүйсгэл:</b> It probably won't rain. (энд probably нь won't-ийн ӨМНӨ!)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        forecast /ˈfɔːrkæst/ — таамаглал · probably /ˈprɒbəbli/ — магадгүй · sure /ʃʊr/ — итгэлтэй<br>
        expect /ɪkˈspekt/ — хүлээх · continue /kənˈtɪnjuː/ — үргэлжлэх · change /tʃeɪndʒ/ — өөрчлөгдөх<br>
        clear /klɪr/ — цэлмэг · heavy /ˈhevi/ — их (бороо) · light /laɪt/ — бага зэрэг · tomorrow /təˈmɒroʊ/ — маргааш</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I think it will not rain» — зөв ч төрөлх хэлтэн <b>I don't think it will rain</b> гэдэг (үгүйсгэлийг эхэнд авчирдаг). Мөн «It will probably rains» ✗ → <b>rain</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Батлахад: will PROBABLY rain · Үгүйсгэхэд: PROBABLY won't rain» — probably байр сольдог!</p>`
    },
    phrases:[
      {en:"Here is the weather forecast.", pron:"хийр из зэ вэзэр форкаст.", mn:"Цаг агаарын мэдээ энэ байна."},
      {en:"It will probably rain tomorrow.", pron:"ит вил пробэбли рэйн тумороу.", mn:"Маргааш магадгүй бороо орно."},
      {en:"I think it will be colder next week.", pron:"ай синк ит вил би коулдэр нэкст вийк.", mn:"Ирэх долоо хоногт илүү хүйтэн болно гэж бодож байна."},
      {en:"It probably won't snow in April.", pron:"ит пробэбли воунт сноу ин эйприл.", mn:"4-р сард цас орохгүй байх."},
      {en:"The sky will be clear tonight.", pron:"зэ скай вил би клийр тунайт.", mn:"Өнөө орой тэнгэр цэлмэг байх болно."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["It ", " rain tomorrow."], opts:["will probably","probably is"], a:0, fix:"will-ийн ард → will probably rain."},
      {q:"Үгүйсгэл:", parts:["It ", " snow in May."], opts:["probably won't","won't probably"], a:0, fix:"Үгүйсгэлд → probably won't."},
      {q:"-s байх уу:", parts:["It will probably ", "."], opts:["rain","rains"], a:0, fix:"will + нүцгэн → rain."},
      {q:"Таамаглал:", parts:["I ", " it will be sunny."], opts:["think","am thinking"], a:0, fix:"Бодол → I think (think нь -ing авдаггүй)."}
    ],
    speak:{ scene:'Мэдээ үзэх', turns:[
      {ruby:"What is the forecast for tomorrow?", pron:"вот из зэ форкаст фор тумороу?", mn:"Маргаашийн таамаглал юу гэсэн бэ?",
        choices:[{t:"It will probably rain in the morning.",best:true,mn:"Өглөө магадгүй бороо орно."},{t:"It probably will rains.",best:false,fix:"will probably RAIN (-s ✗)."}]},
      {ruby:"Oh no! And in the afternoon?", pron:"оу ноу! энд ин зэ афтэрнүн?", mn:"Өө! Үдээс хойш?",
        choices:[{t:"I think it will be clear and sunny.",best:true,mn:"Цэлмэг, нартай болно гэж бодож байна."},{t:"I am thinking it will sunny.",best:false,fix:"I THINK it WILL BE sunny."}]},
      {ruby:"Should I take an umbrella?", pron:"шүд ай тэйк эн амбрэла?", mn:"Шүхэр авах уу?",
        choices:[{t:"Yes, you should. It probably won't stop until noon.",best:true,mn:"Тийм. Үд болтол зогсохгүй байх."},{t:"Yes. It won't probably stop.",best:false,fix:"It PROBABLY WON'T stop."}]}
    ]}
  },
  {
    id:'a1m9l10', title:"9.10 Модулийн төсөл", level:"A1 · М9",
    blurb:"🏆 Цаг агаарын мэдээ бэлтгэх",
    rule:{
      h:"Давтлага: Модуль 9-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 9-ийн мэдлэгээ нэгтгэж, өөрийн цаг агаарын мэдээ бэлтгэх.<br><br>
        <b>Модуль 9-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">It is cold. (эзэнгүй it)</span><span class="tag">What's the weather like?</span><span class="tag">It's raining ⟷ It rains</span><span class="tag">How cold is it?</span><span class="tag">on the 5th of May / in May</span><span class="tag">I was born in 1995</span><span class="tag">so ⟷ because</span><span class="tag">will / won't ⭐</span><span class="tag">should / shouldn't ⭐</span><span class="tag">will probably</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Цаг агаарын мэдээ (12+ өгүүлбэр):</b> Та зарлагч! Жишээ:<br>
        <i>Good evening! Here is the weather forecast for Ulaanbaatar. Today it is cloudy and cold — about minus fifteen degrees. Right now, it is snowing in the north. Tomorrow it will be sunny, but it will still be cold. On Saturday, the temperature will probably rise to minus five. It won't snow at the weekend, so it will be a good day for the park. It is winter, so you should wear a warm coat and gloves. You shouldn't forget your hat! Thank you and good night!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Мэдээний 4 хэсэг: <b>Өнөөдөр</b> (It is...) → <b>Яг одоо</b> (It is snowing) → <b>Маргааш</b> (It will be...) → <b>Зөвлөгөө</b> (You should...).</p>`
    },
    phrases:[
      {en:"Here is the weather forecast.", pron:"хийр из зэ вэзэр форкаст.", mn:"Цаг агаарын мэдээ энэ байна."},
      {en:"Today it is cloudy — about minus fifteen degrees.", pron:"тудэй ит из клауди — эбаут майнэс фифтийн дигрийз.", mn:"Өнөөдөр үүлтэй — хасах 15 хэм орчим."},
      {en:"Tomorrow it will be sunny but cold.", pron:"тумороу ит вил би сани бат коулд.", mn:"Маргааш нартай ч хүйтэн байна."},
      {en:"It won't snow at the weekend.", pron:"ит воунт сноу эт зэ викэнд.", mn:"Амралтын өдрүүдэд цас орохгүй."},
      {en:"It is winter, so you should wear a warm coat.", pron:"ит из винтэр, соу ю шүд вэр э ворм коут.", mn:"Өвөл тул дулаан пальто өмсөх хэрэгтэй."}
    ],
    exercises:[
      {q:"Давтлага (it):", parts:["", " is very cold today."], opts:["It","—"], a:0, fix:"Эзэн заавал → It is."},
      {q:"Давтлага (will):", parts:["It will ", " sunny tomorrow."], opts:["be","is"], a:0, fix:"will + be."},
      {q:"Давтлага (should):", parts:["You should ", " a hat."], opts:["wear","to wear"], a:0, fix:"should + нүцгэн → wear."},
      {q:"Давтлага (born):", parts:["I ", " born in 1990."], opts:["was","am"], a:0, fix:"WAS born."}
    ],
    speak:{ scene:'🏆 Төсөл: Цаг агаарын мэдээ', turns:[
      {ruby:"You are the weather presenter! Start please.", pron:"ю а зэ вэзэр призэнтэр! старт плийз.", mn:"Та цаг агаарын зарлагч! Эхэлнэ үү.",
        choices:[{t:"Good evening! Today it is cloudy and about minus fifteen degrees.",best:true,mn:"Оройн мэнд! Өнөөдөр үүлтэй, хасах 15 хэм орчим."},{t:"Good evening! Today cloudy, minus fifteen degree.",best:false,fix:"IT IS cloudy... degreeS."}]},
      {ruby:"And what about tomorrow?", pron:"энд вот эбаут тумороу?", mn:"Маргааш яах вэ?",
        choices:[{t:"Tomorrow it will be sunny, but it will probably stay cold.",best:true,mn:"Маргааш нартай байх ч магадгүй хүйтэн хэвээр байна."},{t:"Tomorrow will sunny. Probably will stays cold.",best:false,fix:"It WILL BE sunny... will probably STAY cold."}]},
      {ruby:"Any advice for our listeners?", pron:"эни эдвайс фор ауэр лиснэрз?", mn:"Сонсогчдод зөвлөгөө байна уу?",
        choices:[{t:"Yes! It is winter, so you should wear a warm coat and gloves.",best:true,mn:"Тийм! Өвөл тул дулаан пальто, бээлий өмсөх хэрэгтэй."},{t:"Yes! Because winter, so should to wear coat.",best:false,fix:"because+so ✗. should WEAR (to ✗)."}]}
    ]}
  },
  {
    id:'a1m10l1', title:"10.1 Биеийн хэсэг", level:"A1 · М10",
    blurb:"My head hurts / I have a headache — өвдөх",
    rule:{
      h:"Зорилго ба дүрэм: өвчнийг хэлэх 2 арга",
      html:`<b>🎯 Зорилго:</b> Биеийн хэсгийг нэрлэж, өвдөж байгаагаа 2 аргаар хэлэх.<br><br>
        <b>Арга 1 — hurt (өвдөх):</b> биеийн хэсэг нь ЭЗЭН болно:
        <div style="margin:12px 0"><span class="tag">My head hurts. = Толгой минь өвдөж байна.</span><span class="tag">My legs hurt. (олон → -s байхгүй!)</span></div>
        <b>Арга 2 — have + өвчний нэр:</b>
        <div style="margin:12px 0"><span class="tag">I have a headache. (толгой)</span><span class="tag">I have a stomachache. (гэдэс)</span><span class="tag">I have a sore throat. (хоолой)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        head /hed/ — толгой · throat /θroʊt/ — хоолой · stomach /ˈstʌmək/ — гэдэс<br>
        tooth /tuːθ/ — шүд · back /bæk/ — нуруу · knee /niː/ — өвдөг<br>
        hurt /hɜːrt/ — өвдөх · ache /eɪk/ — өвчин · pain /peɪn/ — өвдөлт · sore /sɔːr/ — өвдөж буй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I have headache» ✗ → артикль хэрэгтэй: <b>a headache</b>. «My head is hurt» ✗ → <b>My head hurts</b> (hurt өөрөө үйл үг!). Мөн «My legs hurts» ✗ → олон тоо тул <b>hurt</b> (s-гүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хэсэг нь ЭЗЭН бол HURTS · Би эзэн бол HAVE A ...ache».</p>`
    },
    phrases:[
      {en:"My head hurts.", pron:"май хэд хөртс.", mn:"Толгой минь өвдөж байна."},
      {en:"I have a bad headache.", pron:"ай хэв э бэд хэдэйк.", mn:"Толгой минь их өвдөж байна."},
      {en:"I have a sore throat.", pron:"ай хэв э сор сроут.", mn:"Хоолой минь өвдөж байна."},
      {en:"My back hurts a lot.", pron:"май бэк хөртс э лот.", mn:"Нуруу минь их өвдөж байна."},
      {en:"Where does it hurt?", pron:"вэр даз ит хөрт?", mn:"Хаана нь өвдөж байна?"}
    ],
    exercises:[
      {q:"Артикль:", parts:["I have ", " headache."], opts:["a","—"], a:0, fix:"have A headache."},
      {q:"hurt:", parts:["My head ", "."], opts:["hurts","is hurt"], a:0, fix:"hurt өөрөө үйл үг → My head hurts."},
      {q:"Олон тоо:", parts:["My legs ", "."], opts:["hurt","hurts"], a:0, fix:"Олон → hurt (s-гүй)."},
      {q:"Хэллэг:", parts:["I have a ", " throat."], opts:["sore","hurt"], a:0, fix:"Хоолой → a sore throat."}
    ],
    speak:{ scene:'Юу өвдөж байна', turns:[
      {ruby:"You don't look well. What's wrong?", pron:"ю доунт лүк вэл. вотс ронг?", mn:"Та сайн харагдахгүй байна. Юу болов?",
        choices:[{t:"My head hurts and I have a sore throat.",best:true,mn:"Толгой өвдөж, хоолой минь өвдөж байна."},{t:"My head is hurt. I have sore throat.",best:false,fix:"My head HURTS. I have A sore throat."}]},
      {ruby:"Oh no! Do you have a fever?", pron:"оу ноу! ду ю хэв э фийвэр?", mn:"Өө! Халуурч байна уу?",
        choices:[{t:"Yes, and my back hurts too.",best:true,mn:"Тийм, нуруу ч бас өвдөж байна."},{t:"Yes, my back is hurting me.",best:false,fix:"Энгийнээр → my back HURTS."}]},
      {ruby:"You should see a doctor!", pron:"ю шүд сий э доктор!", mn:"Эмчид үзүүлэх хэрэгтэй!",
        choices:[{t:"I think you're right. I have a bad headache.",best:true,mn:"Зөв байх. Толгой минь их өвдөж байна."},{t:"Yes. I have headache bad.",best:false,fix:"I have A BAD headache."}]}
    ]}
  },
  {
    id:'a1m10l2', title:"10.2 Энгийн шинж тэмдэг", level:"A1 · М10",
    blurb:"I feel sick / I feel better — feel + тэмдэг нэр",
    rule:{
      h:"Зорилго ба дүрэм: feel + тэмдэг нэр",
      html:`<b>🎯 Зорилго:</b> Биеийн байдлаа илэрхийлэх.<br><br>
        <b>feel + тэмдэг нэр</b> (дайвар үг БИШ!):
        <div style="margin:12px 0"><span class="tag">I feel sick. (ill биш sick — АНУ)</span><span class="tag">I feel tired.</span><span class="tag">I feel better today.</span></div>
        <b>Анхаар:</b> «I feel badly» ✗ → <b>I feel bad</b> ✓ (feel-ийн ард тэмдэг нэр!)<br>
        <b>Асуулт:</b> How do you feel? / How are you feeling? (хоёулаа зөв)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        sick /sɪk/ — өвчтэй · ill /ɪl/ — өвчтэй (Британи) · tired /ˈtaɪərd/ — ядарсан<br>
        weak /wiːk/ — сул дорой · dizzy /ˈdɪzi/ — толгой эргэсэн · fever /ˈfiːvər/ — халуурал<br>
        cough /kɒf/ — ханиалгах · cold /koʊld/ — ханиад · better /ˈbetər/ — дээрдсэн · worse /wɜːrs/ — дордсон</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I have cold» ✗ → артикль: <b>I have A cold</b>. «I am feel sick» ✗ → <b>I feel sick</b> (feel өөрөө үйл үг). Мөн «I feel myself bad» ✗ (орос маягийн) → <b>I feel bad</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «FEEL-ийн ард тэмдэг нэр» — feel sick, feel tired, feel better (bad ✓ / badly ✗).</p>`
    },
    phrases:[
      {en:"How do you feel today?", pron:"хау ду ю фийл тудэй?", mn:"Өнөөдөр яаж байна?"},
      {en:"I feel sick and very tired.", pron:"ай фийл сик энд вэри тайэрд.", mn:"Өвчтэй, их ядарсан байна."},
      {en:"I have a cold and a cough.", pron:"ай хэв э коулд энд э коф.", mn:"Ханиад хүрч, ханиалгаж байна."},
      {en:"I feel a bit dizzy.", pron:"ай фийл э бит дизи.", mn:"Толгой минь жаахан эргэж байна."},
      {en:"I feel much better today, thanks!", pron:"ай фийл мач бэтэр тудэй, сэнкс!", mn:"Өнөөдөр хамаагүй дээрдлээ, баярлалаа!"}
    ],
    exercises:[
      {q:"feel + :", parts:["I feel ", " today."], opts:["bad","badly"], a:0, fix:"feel + тэмдэг нэр → feel bad."},
      {q:"Артикль:", parts:["I have ", " cold."], opts:["a","—"], a:0, fix:"have A cold."},
      {q:"be хэрэгтэй юу:", parts:["I ", " sick."], opts:["feel","am feel"], a:0, fix:"feel өөрөө үйл үг → I feel sick."},
      {q:"Дээрдэх:", parts:["I feel much ", " today."], opts:["better","gooder"], a:0, fix:"good → better."}
    ],
    speak:{ scene:'Биеийн байдал', turns:[
      {ruby:"How do you feel today?", pron:"хау ду ю фийл тудэй?", mn:"Өнөөдөр яаж байна?",
        choices:[{t:"I feel sick. I have a cold.",best:true,mn:"Өвчтэй байна. Ханиад хүрсэн."},{t:"I am feel sick. I have cold.",best:false,fix:"I FEEL sick. I have A cold."}]},
      {ruby:"Do you have a fever?", pron:"ду ю хэв э фийвэр?", mn:"Халуурч байна уу?",
        choices:[{t:"A little. And I feel very weak.",best:true,mn:"Жаахан. Бас их сул дорой байна."},{t:"A little. I feel myself weak.",best:false,fix:"I FEEL weak («myself» ✗)."}]},
      {ruby:"Get some rest! Call me tomorrow.", pron:"гет сам рэст! кол ми тумороу.", mn:"Амраарай! Маргааш над руу залгаарай.",
        choices:[{t:"Thank you. I hope I'll feel better tomorrow.",best:true,mn:"Баярлалаа. Маргааш дээрдэнэ гэж найдаж байна."},{t:"Thanks. Tomorrow feel better.",best:false,fix:"I hope I'LL FEEL better tomorrow."}]}
    ]}
  },
  {
    id:'a1m10l3', title:"10.3 Эмийн сан", level:"A1 · М10",
    blurb:"anything for a cough? — something / anything",
    rule:{
      h:"Зорилго ба дүрэм: something / anything / nothing",
      html:`<b>🎯 Зорилго:</b> Эмийн санд эм гуйж, тодорхойгүй юмыг нэрлэх.<br><br>
        Модуль 2-т some/any үзсэн (нэр үгтэй). Одоо <b>дангаараа зогсдог</b> хэлбэр:
        <div style="margin:12px 0"><span class="tag">something — БАТЛАХ: I need something for my head.</span><span class="tag">anything — АСУУХ/ҮГҮЙСГЭХ: Do you have anything for a cough?</span><span class="tag">nothing — үгүйсгэл дангаараа: There is nothing here.</span></div>
        <b>Онцгой:</b> санал болгоход something хэрэглэнэ: <i>Would you like something to drink?</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        medicine /ˈmedɪsn/ — эм · pill /pɪl/ — шахмал · tablet /ˈtæblət/ — шахмал<br>
        syrup /ˈsɪrəp/ — сироп · pharmacy /ˈfɑːrməsi/ — эмийн сан · prescription /prɪˈskrɪpʃn/ — жор<br>
        take /teɪk/ — уух (эм) · twice a day /twaɪs ə deɪ/ — өдөрт 2 удаа · after meals /ˈæftər miːlz/ — хоолны дараа · dose /doʊs/ — тун</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Do you have something?» — болно ч дэлгүүр/эмийн санд <b>anything</b> илүү жам ёсны. «I don't have nothing» ✗ — давхар үгүйсгэл болохгүй: <b>I don't have anything</b> ✓ эсвэл <b>I have nothing</b> ✓. Мөн эмийг «drink» биш <b>TAKE medicine</b>!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «(+) SOMEthing · (?/−) ANYthing · (−) NOTHING дангаараа» — some/any-ийн дүрэмтэй адилхан!</p>`
    },
    phrases:[
      {en:"Do you have anything for a cough?", pron:"ду ю хэв энисинг фор э коф?", mn:"Ханиадны эм бий юу?"},
      {en:"I need something for my headache.", pron:"ай нийд самсинг фор май хэдэйк.", mn:"Толгойн өвдөлтөнд эм хэрэгтэй."},
      {en:"Take one tablet twice a day.", pron:"тэйк ван тэблэт твайс э дэй.", mn:"Өдөрт 2 удаа нэг шахмал уу."},
      {en:"Take it after meals.", pron:"тэйк ит афтэр мийлз.", mn:"Хоолны дараа уу."},
      {en:"Do I need a prescription?", pron:"ду ай нийд э прискрипшн?", mn:"Жор хэрэгтэй юу?"}
    ],
    exercises:[
      {q:"some/any:", parts:["Do you have ", " for a cold?"], opts:["anything","something"], a:0, fix:"Асуулт → anything."},
      {q:"some/any:", parts:["I need ", " for my head."], opts:["something","anything"], a:0, fix:"Батлах → something."},
      {q:"Давхар үгүйсгэл:", parts:["I don't have ", "."], opts:["anything","nothing"], a:0, fix:"don't + anything (davhar ✗)."},
      {q:"Үйл үг:", parts:["", " this medicine twice a day."], opts:["Take","Drink"], a:0, fix:"Эм → TAKE medicine."}
    ],
    speak:{ scene:'Эмийн санд', turns:[
      {ruby:"Hello! Can I help you?", pron:"хэлоу! кэн ай хэлп ю?", mn:"Сайн уу! Танд туслах уу?",
        choices:[{t:"Yes, do you have anything for a cough?",best:true,mn:"Тийм, ханиадны эм бий юу?"},{t:"Yes, have you something cough?",best:false,fix:"Do you have ANYTHING FOR a cough?"}]},
      {ruby:"Yes, this syrup is very good.", pron:"ес, зис сирэп из вэри гүд.", mn:"Тийм, энэ сироп маш сайн.",
        choices:[{t:"How do I take it?",best:true,mn:"Яаж уух вэ?"},{t:"How I drink it?",best:false,fix:"HOW DO I TAKE it? (эм → take)."}]},
      {ruby:"Twice a day, after meals.", pron:"твайс э дэй, афтэр мийлз.", mn:"Өдөрт 2 удаа, хоолны дараа.",
        choices:[{t:"Thank you. Do I need anything else?",best:true,mn:"Баярлалаа. Өөр юм хэрэгтэй юу?"},{t:"Thanks. I need nothing else?",best:false,fix:"Асуултад → anything else."}]}
    ]}
  },
  {
    id:'a1m10l4', title:"10.4 Чадна/чадахгүй", level:"A1 · М10",
    blurb:"You need to rest — need to / don't need to",
    rule:{
      h:"Зорилго ба дүрэм: need to + can/can't (эрүүл мэнд)",
      html:`<b>🎯 Зорилго:</b> Юу хийх хэрэгтэй, юу чадахгүй байгаагаа хэлэх.<br><br>
        <b>need to + үйл үг</b> = хэрэгтэй:
        <div style="margin:12px 0"><span class="tag">I need to rest. = Амрах хэрэгтэй.</span><span class="tag">You don't need to take it. = Уух шаардлагагүй.</span><span class="tag">Do I need to see a doctor?</span></div>
        <b>Гурвын ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">must / have to = ЗААВАЛ (хатуу)</span><span class="tag">need to = хэрэгтэй (зөөлөн)</span><span class="tag">should = зөвлөгөө (хамгийн зөөлөн)</span></div>
        <b>can't + үйл үг</b> — өвчтэй үедээ: I can't sleep. / I can't eat.
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        rest /rest/ — амрах · sleep /sliːp/ — унтах · breathe /briːð/ — амьсгалах<br>
        move /muːv/ — хөдлөх · walk /wɔːk/ — алхах · stay /steɪ/ — байх<br>
        need /niːd/ — хэрэгтэй · stop /stɒp/ — зогсох · continue /kənˈtɪnjuː/ — үргэлжлүүлэх · drink /drɪŋk/ — уух</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I need rest» — болно ч үйл үгтэй бол <b>to</b> заавал: <b>I need TO rest</b>. Мөн «You needn't» (Британи) ✓ ч энгийнээр <b>You don't need to</b>. «I can't to sleep» ✗ → <b>I can't sleep</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «NEED TO — to-той · CAN'T — to-гүй» — I need to rest / I can't sleep.</p>`
    },
    phrases:[
      {en:"You need to rest for a few days.", pron:"ю нийд ту рэст фор э фью дэйз.", mn:"Хэдэн өдөр амрах хэрэгтэй."},
      {en:"I can't sleep at night.", pron:"ай кант слийп эт найт.", mn:"Шөнө унтаж чадахгүй байна."},
      {en:"Do I need to take medicine?", pron:"ду ай нийд ту тэйк мэдисн?", mn:"Эм уух хэрэгтэй юу?"},
      {en:"You don't need to stay in bed.", pron:"ю доунт нийд ту стэй ин бэд.", mn:"Орондоо хэвтэх шаардлагагүй."},
      {en:"I can't eat anything today.", pron:"ай кант ийт энисинг тудэй.", mn:"Өнөөдөр юу ч идэж чадахгүй байна."}
    ],
    exercises:[
      {q:"need + :", parts:["You need ", " rest."], opts:["to","—"], a:0, fix:"Үйл үгтэй → need TO rest."},
      {q:"can't + :", parts:["I can't ", " at night."], opts:["sleep","to sleep"], a:0, fix:"can't + нүцгэн → can't sleep."},
      {q:"Үгүйсгэл:", parts:["You ", " stay in bed."], opts:["don't need to","need not to"], a:0, fix:"Шаардлагагүй → don't need to."},
      {q:"Асуулт:", parts:["", " I need to take it?"], opts:["Do","Am"], a:0, fix:"need нь энгийн үйл үг → Do I need to...?"}
    ],
    speak:{ scene:'Юу хийх хэрэгтэй вэ', turns:[
      {ruby:"How are you sleeping?", pron:"хау а ю слийпинг?", mn:"Унтаж чадаж байна уу?",
        choices:[{t:"Badly. I can't sleep at night because of my cough.",best:true,mn:"Муу. Ханиалгаас болж шөнө унтаж чадахгүй байна."},{t:"Bad. I can't to sleep.",best:false,fix:"I can't SLEEP (to ✗)."}]},
      {ruby:"You need to rest more.", pron:"ю нийд ту рэст мор.", mn:"Илүү амрах хэрэгтэй.",
        choices:[{t:"Do I need to stay at home?",best:true,mn:"Гэртээ байх хэрэгтэй юу?"},{t:"I need stay home?",best:false,fix:"DO I NEED TO stay at home?"}]},
      {ruby:"Just for two days. You don't need to stay in bed.", pron:"жаст фор ту дэйз. ю доунт нийд ту стэй ин бэд.", mn:"Хоёрхон хоног. Орондоо хэвтэх шаардлагагүй.",
        choices:[{t:"Good! I can't stay in bed all day!",best:true,mn:"Сайн! Би өдөржин хэвтэж чадахгүй!"},{t:"Good! I not can stay bed.",best:false,fix:"I CAN'T stay in bed."}]}
    ]}
  },
  {
    id:'a1m10l5', title:"10.5 Хүсэлт", level:"A1 · М10",
    blurb:"Shall I call a doctor? — санал болгох",
    rule:{
      h:"Зорилго ба дүрэм: Shall I...? (тусламж санал болгох)",
      html:`<b>🎯 Зорилго:</b> Тусламж санал болгож, хүсэлт гаргах.<br><br>
        <b>Shall I + үйл үг?</b> = Би ...уу? (тусламж санал болгох)
        <div style="margin:12px 0"><span class="tag">Shall I call a doctor? = Эмч дуудах уу?</span><span class="tag">Shall I get you some water? = Ус авчрах уу?</span></div>
        <b>3 хэлбэрийн ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">Shall I...? = БИ хийх үү (санал)</span><span class="tag">Can you...? = ТА хийж өгөх үү (хүсэлт)</span><span class="tag">Shall we...? = БИД хийх үү (санал)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        shall /ʃæl/ — -уу? (санал) · call /kɔːl/ — дуудах/залгах · doctor /ˈdɒktər/ — эмч<br>
        nurse /nɜːrs/ — сувилагч · hospital /ˈhɒspɪtl/ — эмнэлэг · appointment /əˈpɔɪntmənt/ — цаг авах<br>
        help /help/ — туслах · carry /ˈkæri/ — зөөх · open /ˈoʊpən/ — нээх · close /kloʊz/ — хаах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Shall I to call?» ✗ → to байхгүй: <b>Shall I call?</b> Мөн «Do I call a doctor?» — өөр утга (би байнга дууддаг уу?). Санал болгоход <b>Shall I...?</b></p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SHALL I = би тусалъя юу · CAN YOU = та тусална уу» — чиглэл нь эсрэг!</p>`
    },
    phrases:[
      {en:"Shall I call a doctor?", pron:"шэл ай кол э доктор?", mn:"Эмч дуудах уу?"},
      {en:"Shall I get you some water?", pron:"шэл ай гет ю сам вотэр?", mn:"Ус авчирч өгөх үү?"},
      {en:"Can you help me, please?", pron:"кэн ю хэлп ми, плийз?", mn:"Надад тусалж болох уу?"},
      {en:"Shall we go to the hospital?", pron:"шэл ви гоу ту зэ хоспитал?", mn:"Эмнэлэг явах уу?"},
      {en:"I need to make an appointment.", pron:"ай нийд ту мэйк эн эпойнтмэнт.", mn:"Цаг авах хэрэгтэй байна."}
    ],
    exercises:[
      {q:"to хэрэгтэй юу:", parts:["Shall I ", " a doctor?"], opts:["call","to call"], a:0, fix:"Shall I + нүцгэн → Shall I call?"},
      {q:"Санал/хүсэлт:", parts:["", " I get you some water? (би хийх)"], opts:["Shall","Can you"], a:0, fix:"Би санал болгох → Shall I...?"},
      {q:"Санал/хүсэлт:", parts:["", " help me, please? (та хийх)"], opts:["Can you","Shall I"], a:0, fix:"Та хийх → Can you...?"},
      {q:"Бид:", parts:["", " we go to the hospital?"], opts:["Shall","Do"], a:0, fix:"Бид санал → Shall we...?"}
    ],
    speak:{ scene:'Тусламж санал болгох', turns:[
      {ruby:"I feel terrible. My head really hurts.", pron:"ай фийл тэрибл. май хэд риали хөртс.", mn:"Их муу байна. Толгой минь үнэхээр өвдөж байна.",
        choices:[{t:"Shall I call a doctor?",best:true,mn:"Эмч дуудах уу?"},{t:"Do I call doctor?",best:false,fix:"Санал → SHALL I call a doctor?"}]},
      {ruby:"No, thank you. I just need to rest.", pron:"ноу, сэнк ю. ай жаст нийд ту рэст.", mn:"Үгүй, баярлалаа. Зүгээр амрах хэрэгтэй.",
        choices:[{t:"Okay. Shall I get you some water?",best:true,mn:"За. Ус авчирч өгөх үү?"},{t:"Okay. Shall I to get water?",best:false,fix:"Shall I GET (to ✗)."}]},
      {ruby:"Yes, please. That would be nice.", pron:"ес, плийз. зэт вүд би найс.", mn:"Тийм ээ. Сайхан байх байна.",
        choices:[{t:"Of course. Can you call me if you feel worse?",best:true,mn:"Мэдээж. Дордвол над руу залгаж чадах уу?"},{t:"Ok. Shall you call me?",best:false,fix:"Та хийх → CAN YOU call me?"}]}
    ]}
  },
  {
    id:'a1m10l6', title:"10.6 Зөвлөгөө", level:"A1 · М10",
    blurb:"It's important to rest — It is + тэмдэг нэр + to",
    rule:{
      h:"Зорилго ба дүрэм: It is important/better/easy to + үйл үг",
      html:`<b>🎯 Зорилго:</b> Ерөнхий зөвлөгөө өгөх (хэн нэгэнд БИШ, бүгдэд).<br><br>
        <b>It is + тэмдэг нэр + to + үйл үг</b> — эзэнгүй «it» дахин!
        <div style="margin:12px 0"><span class="tag">It is important to drink water. = Ус уух чухал.</span><span class="tag">It is better to rest. = Амарсан нь дээр.</span><span class="tag">It is difficult to sleep. = Унтахад хэцүү.</span></div>
        <b>should-тай ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">You should rest. = ЧИ амраарай (хувь хүнд)</span><span class="tag">It is better to rest. = Амарсан нь дээр (ерөнхий)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        important /ɪmˈpɔːrtnt/ — чухал · better /ˈbetər/ — дээр · easy /ˈiːzi/ — хялбар<br>
        difficult /ˈdɪfɪkəlt/ — хэцүү · healthy /ˈhelθi/ — эрүүл · exercise /ˈeksərsaɪz/ — дасгал<br>
        vegetables /ˈvedʒtəblz/ — ногоо · water /ˈwɔːtər/ — ус · smoke /smoʊk/ — тамхи татах · sugar /ˈʃʊɡər/ — чихэр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Is important to rest» ✗ → эзэн заавал: <b>IT is important to rest</b>. Мөн «It is important drinking water» ✗ → <b>TO drink</b> (энд -ing биш!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IT IS + шинж + TO + үйл үг» — 4 нүд: It is / important / to / rest.</p>`
    },
    phrases:[
      {en:"It is important to drink a lot of water.", pron:"ит из импортэнт ту дринк э лот ов вотэр.", mn:"Их ус уух нь чухал."},
      {en:"It is better to rest at home.", pron:"ит из бэтэр ту рэст эт хоум.", mn:"Гэртээ амарсан нь дээр."},
      {en:"It is not good to eat too much sugar.", pron:"ит из нот гүд ту ийт ту мач шүгэр.", mn:"Хэт их чихэр идэх сайн биш."},
      {en:"It is easy to catch a cold in winter.", pron:"ит из ийзи ту кэтч э коулд ин винтэр.", mn:"Өвөл ханиад хүрэхэд амархан."},
      {en:"It is healthy to walk every day.", pron:"ит из хэлси ту вок эври дэй.", mn:"Өдөр бүр алхах эрүүл."}
    ],
    exercises:[
      {q:"Эзэн:", parts:["", " is important to rest."], opts:["It","—"], a:0, fix:"Эзэн заавал → IT is important."},
      {q:"to/-ing:", parts:["It is important ", " water."], opts:["to drink","drinking"], a:0, fix:"It is + adj → TO drink."},
      {q:"Ерөнхий:", parts:["", " to walk every day. (ерөнхий зөвлөгөө)"], opts:["It is healthy","You should healthy"], a:0, fix:"Ерөнхий → It is healthy to..."},
      {q:"Утга:", parts:["It is ", " to eat vegetables."], opts:["important","difficult"], a:0, fix:"Ногоо идэх → important (чухал)."}
    ],
    speak:{ scene:'Эрүүл мэндийн зөвлөгөө', turns:[
      {ruby:"How can I stay healthy in winter?", pron:"хау кэн ай стэй хэлси ин винтэр?", mn:"Өвөл эрүүл байхын тулд яах вэ?",
        choices:[{t:"It is important to drink a lot of water.",best:true,mn:"Их ус уух нь чухал."},{t:"Is important drinking water.",best:false,fix:"IT IS important TO DRINK water."}]},
      {ruby:"And what about food?", pron:"энд вот эбаут фүд?", mn:"Хоолны хувьд?",
        choices:[{t:"It is better to eat vegetables and not too much sugar.",best:true,mn:"Ногоо идэж, хэт их чихэр идэхгүй байсан нь дээр."},{t:"Better eat vegetables.",best:false,fix:"IT IS better TO EAT vegetables."}]},
      {ruby:"Should I exercise too?", pron:"шүд ай эксэрсайз ту?", mn:"Дасгал ч бас хийх үү?",
        choices:[{t:"Yes! It is healthy to walk every day.",best:true,mn:"Тийм! Өдөр бүр алхах эрүүл."},{t:"Yes! Is healthy walking.",best:false,fix:"IT IS healthy TO WALK."}]}
    ]}
  },
  {
    id:'a1m10l7', title:"10.7 Яаралтай үгс", level:"A1 · М10",
    blurb:"Someone, help! — someone / anyone / no one",
    rule:{
      h:"Зорилго ба дүрэм: someone / anyone / everyone + яаралтай тусламж",
      html:`<b>🎯 Зорилго:</b> ⚠️ Яаралтай үед тусламж дуудах — амь насанд хэрэгтэй үгс!<br><br>
        Хичээл 10.3-т something/anything (ЮМ) үзсэн. Одоо <b>ХҮН</b>:
        <div style="margin:12px 0"><span class="tag">someone / somebody = хэн нэгэн (батлах)</span><span class="tag">anyone / anybody = хэн нэгэн (асуулт/үгүйсгэл)</span><span class="tag">everyone / everybody = хүн бүр</span><span class="tag">no one / nobody = хэн ч үгүй</span></div>
        <b>Чухал:</b> эдгээр нь ГАНЦ тоо! everyone IS here ✓ (are ✗)
        <b>Яаралтай хэллэгүүд (цээжил!):</b> Help! · Call an ambulance! · Call the police! · It's an emergency!
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        help /help/ — туслах · emergency /ɪˈmɜːrdʒənsi/ — яаралтай тохиолдол · ambulance /ˈæmbjələns/ — түргэн тусламж<br>
        police /pəˈliːs/ — цагдаа · fire /ˈfaɪər/ — гал · accident /ˈæksɪdənt/ — осол<br>
        hurry /ˈhʌri/ — яарах · quick /kwɪk/ — хурдан · danger /ˈdeɪndʒər/ — аюул · safe /seɪf/ — аюулгүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Everyone are here» ✗ → ганц тоо: <b>Everyone IS here</b>. «I don't see nobody» ✗ → давхар үгүйсгэл: <b>I don't see anybody</b> ✓. Монголд яаралтай дугаар: <b>103</b> (түргэн), <b>102</b> (цагдаа).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SOME (+) · ANY (?/−) · EVERY (бүгд) · NO (хэн ч үгүй)» — бүгд ГАНЦ тоо!</p>`
    },
    phrases:[
      {en:"Help! Call an ambulance!", pron:"хэлп! кол эн эмбюлэнс!", mn:"Тусламж! Түргэн дууд!"},
      {en:"Is anyone here? I need help!", pron:"из эниван хийр? ай нийд хэлп!", mn:"Энд хүн байна уу? Тусламж хэрэгтэй!"},
      {en:"Someone is hurt!", pron:"самван из хөрт!", mn:"Хэн нэгэн гэмтсэн байна!"},
      {en:"There is nobody in the room.", pron:"зэр из ноубоди ин зэ рум.", mn:"Өрөөнд хэн ч алга."},
      {en:"Everyone is safe now.", pron:"эвриван из сэйф нау.", mn:"Одоо бүгд аюулгүй байна."}
    ],
    exercises:[
      {q:"some/any:", parts:["Is ", " here? (асуулт)"], opts:["anyone","someone"], a:0, fix:"Асуулт → anyone."},
      {q:"some/any:", parts:["", " is hurt! (батлах)"], opts:["Someone","Anyone"], a:0, fix:"Батлах → Someone."},
      {q:"Ганц тоо:", parts:["Everyone ", " safe now."], opts:["is","are"], a:0, fix:"everyone → ганц тоо: IS."},
      {q:"Давхар үгүйсгэл:", parts:["I don't see ", "."], opts:["anybody","nobody"], a:0, fix:"don't + anybody."}
    ],
    speak:{ scene:'⚠️ Яаралтай тохиолдол', turns:[
      {ruby:"(Someone falls in the street!)", pron:"(гудамжинд хүн унав!)", mn:"(Гудамжинд хүн унав!)",
        choices:[{t:"Help! Someone is hurt! Call an ambulance!",best:true,mn:"Тусламж! Хэн нэгэн гэмтсэн! Түргэн дууд!"},{t:"Help! Anyone hurt!",best:false,fix:"Батлах → SOMEONE IS hurt."}]},
      {ruby:"I'm calling now! Is anybody with him?", pron:"айм колинг нау! из энибоди виз хим?", mn:"Одоо залгаж байна! Түүнтэй хэн нэгэн байна уу?",
        choices:[{t:"No, there is nobody. I am staying with him.",best:true,mn:"Үгүй, хэн ч алга. Би түүнтэй үлдье."},{t:"No, I don't see nobody.",best:false,fix:"Давхар үгүйсгэл ✗ → I don't see anybody."}]},
      {ruby:"The ambulance is coming. Everyone, please move back!", pron:"зэ эмбюлэнс из каминг. эвриван, плийз мүв бэк!", mn:"Түргэн ирж байна. Бүгдээрээ ухраарай!",
        choices:[{t:"Okay. Everyone is moving back now.",best:true,mn:"За. Бүгд ухарч байна."},{t:"Ok. Everyone are moving.",best:false,fix:"Everyone IS (ганц тоо)."}]}
    ]}
  },
  {
    id:'a1m10l8', title:"10.8 Эмчийн яриа", level:"A1 · М10",
    blurb:"It started two days ago — ago",
    rule:{
      h:"Зорилго ба дүрэм: ago (хэдэн хугацааны өмнө)",
      html:`<b>🎯 Зорилго:</b> Эмчид өвчний түүхээ ярьж, «хэзээнээс» гэдгийг хэлэх.<br><br>
        <b>ago</b> = ...-ийн өмнө. <b>Хугацааны АРД</b> ордог!
        <div style="margin:12px 0"><span class="tag">two days ago = хоёр хоногийн өмнө</span><span class="tag">a week ago = долоо хоногийн өмнө</span><span class="tag">an hour ago = нэг цагийн өмнө</span></div>
        <b>ago нь үргэлж ӨНГӨРСӨН ЦАГТАЙ:</b>
        <div style="margin:12px 0"><span class="tag">It started two days ago. ✓</span><span class="tag">It starts two days ago. ✗</span></div>
        <b>Асуулт:</b> When did it start? / How long have you had it? (A2)
        <p style="margin-top:12px"><b>📚 Үгийн сан:</b></p>
        <div style="font-size:14px;line-height:2">
        ago /əˈɡoʊ/ — өмнө · start /stɑːrt/ — эхлэх · began /bɪˈɡæn/ — эхэлсэн<br>
        symptom /ˈsɪmptəm/ — шинж тэмдэг · examine /ɪɡˈzæmɪn/ — үзэх · check /tʃek/ — шалгах<br>
        temperature /ˈtemprətʃər/ — халуун · serious /ˈsɪriəs/ — ноцтой · rest /rest/ — амрах · recover /rɪˈkʌvər/ — эдгэрэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «ago two days» ✗ → ago нь АРД: <b>two days ago</b>. Мөн «before two days» ✗ (монголоор «хоёр хоногийн өмнө»-өөс) → <b>two days ago</b> ✓. ago-той бол заавал өнгөрсөн цаг!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хугацаа + AGO + өнгөрсөн цаг» — two days ago, it started.</p>`
    },
    phrases:[
      {en:"When did it start?", pron:"вэн дид ит старт?", mn:"Хэзээ эхэлсэн бэ?"},
      {en:"It started two days ago.", pron:"ит стартид ту дэйз эгоу.", mn:"Хоёр хоногийн өмнө эхэлсэн."},
      {en:"I had a fever a week ago.", pron:"ай хэд э фийвэр э вийк эгоу.", mn:"Долоо хоногийн өмнө халуурсан."},
      {en:"Let me check your temperature.", pron:"лет ми чэк ёр тэмпрэчэр.", mn:"Халууныг тань хэмжье."},
      {en:"It is not serious. You need to rest.", pron:"ит из нот сириэс. ю нийд ту рэст.", mn:"Ноцтой биш. Амрах хэрэгтэй."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["It started two days ", "."], opts:["ago","before"], a:0, fix:"Хугацааны ард → two days AGO."},
      {q:"Цаг:", parts:["It ", " two days ago."], opts:["started","starts"], a:0, fix:"ago → өнгөрсөн цаг: started."},
      {q:"Дараалал:", parts:["I had a fever ", "."], opts:["a week ago","ago a week"], a:0, fix:"a week AGO."},
      {q:"Асуулт:", parts:["When ", " it start?"], opts:["did","does"], a:0, fix:"Өнгөрсөн асуулт → did."}
    ],
    speak:{ scene:'Эмчид үзүүлэх', turns:[
      {ruby:"Good morning. What is the problem?", pron:"гүд морнинг. вот из зэ проблэм?", mn:"Өглөөний мэнд. Юу болов?",
        choices:[{t:"I have a sore throat and I feel very weak.",best:true,mn:"Хоолой минь өвдөж, их сул дорой байна."},{t:"I have sore throat. I feel weakly.",best:false,fix:"A sore throat. I feel WEAK."}]},
      {ruby:"When did it start?", pron:"вэн дид ит старт?", mn:"Хэзээ эхэлсэн бэ?",
        choices:[{t:"It started three days ago.",best:true,mn:"Гурван хоногийн өмнө эхэлсэн."},{t:"It starts before three days.",best:false,fix:"It STARTED three days AGO."}]},
      {ruby:"Let me check. ... It is not serious. You need to rest.", pron:"лет ми чэк. ... ит из нот сириэс. ю нийд ту рэст.", mn:"Шалгая. ... Ноцтой биш. Амрах хэрэгтэй.",
        choices:[{t:"Thank you. Do I need to take any medicine?",best:true,mn:"Баярлалаа. Эм уух хэрэгтэй юу?"},{t:"Thanks. I need take medicine?",best:false,fix:"DO I NEED TO take ANY medicine?"}]}
    ]}
  },
  {
    id:'a1m10l9', title:"10.9 A1 нэгдсэн төсөл", level:"A1 · М10",
    blurb:"🌟 10 модулийн бүх дүрмийг нэг өгүүлбэрт",
    rule:{
      h:"A1-ийн БҮХ дүрмийн зураглал",
      html:`<b>🎯 Зорилго:</b> 🌟 A1 курсийн 10 модулийн бүх дүрмийг нэг дор давтах.<br><br>
        <b>М1 Танилцах:</b> <span class="tag">am/is/are</span><span class="tag">I/you/he/she</span><span class="tag">a/an</span><span class="tag">-s олон тоо</span><span class="tag">have/has</span><br>
        <b>М2 Хүмүүс:</b> <span class="tag">in/on/under</span><span class="tag">can/can't</span><span class="tag">some/any</span><span class="tag">Bat's</span><span class="tag">like + -ing</span><span class="tag">me/him/her</span><span class="tag">is doing</span><br>
        <b>М3 Өдөр тутам:</b> <span class="tag">goes/watches/studies</span><span class="tag">at 7 · on Monday · in May</span><span class="tag">Where do you...?</span><span class="tag">always/never</span><span class="tag">don't/doesn't</span><br>
        <b>М4 Гэр:</b> <span class="tag">a/an ⟷ the</span><span class="tag">Is there...?</span><span class="tag">How many/much</span><span class="tag">mine/yours</span><span class="tag">works ⟷ is working</span><br>
        <b>М5 Хоол:</b> <span class="tag">I'd like</span><span class="tag">a cup of</span><span class="tag">Can I have...?</span><span class="tag">How much is...?</span><span class="tag">too much/many</span><br>
        <b>М6 Хот:</b> <span class="tag">by bus ⟷ on foot</span><span class="tag">have to/must</span><span class="tag">It takes...</span><span class="tag">cheaper than</span><span class="tag">be going to</span><br>
        <b>М7 Чөлөөт цаг:</b> <span class="tag">good at + -ing</span><span class="tag">play/do/go</span><span class="tag">was/were</span><span class="tag">the best</span><span class="tag">watched (-ed)</span><br>
        <b>М8 Худалдаа:</b> <span class="tag">the red one</span><span class="tag">too big / not big enough</span><span class="tag">went/bought/saw</span><span class="tag">Did you...? / didn't</span><span class="tag">prefer A to B</span><br>
        <b>М9 Цаг агаар:</b> <span class="tag">It is cold</span><span class="tag">will / won't</span><span class="tag">should</span><span class="tag">I was born in...</span><span class="tag">so ⟷ because</span><br>
        <b>М10 Эрүүл мэнд:</b> <span class="tag">My head hurts</span><span class="tag">feel + adj</span><span class="tag">something/anything</span><span class="tag">need to</span><span class="tag">Shall I...?</span><span class="tag">two days ago</span>
        <p style="margin-top:14px"><b>🌟 Их төсөл — Миний амьдрал (20+ өгүүлбэр):</b> Өөрийгөө бүрэн танилцуул: нэр, гэр бүл, ажил, өдөр тутам, гэр, хоол, чөлөөт цаг, өнгөрсөн амралт, ирээдүйн төлөвлөгөө. Бүх 3 цагийг ашигла! Ruby-д бичээд засуулаарай!</p>`
    },
    phrases:[
      {en:"My name is Enkhmaa and I am from Mongolia.", pron:"май нэйм из Энхмаа энд ай эм фром Монголиа.", mn:"Миний нэр Энхмаа, Монголоос ирсэн."},
      {en:"I usually get up at half past six and go to work by bus.", pron:"ай южуэли гет ап эт хаф паст сикс энд гоу ту вөрк бай бас.", mn:"Ихэвчлэн 6:30-д босч, автобусаар ажилдаа явдаг."},
      {en:"Last weekend, I watched a film. It was great!", pron:"ласт викэнд, ай вочт э филм. ит воз грэйт!", mn:"Өнгөрсөн амралтаар кино үзсэн. Гайхалтай байсан!"},
      {en:"Next month, I am going to visit my parents.", pron:"нэкст манс, ай эм гоуинг ту визит май пэрэнтс.", mn:"Ирэх сард эцэг эх дээрээ очно."},
      {en:"I think it will be a good year!", pron:"ай синк ит вил би э гүд йир!", mn:"Сайхан жил болно гэж бодож байна!"}
    ],
    exercises:[
      {q:"М1 (be):", parts:["She ", " a teacher."], opts:["is","are"], a:0, fix:"She → is."},
      {q:"М4 (артикль):", parts:["I live in ", " apartment."], opts:["an","the"], a:0, fix:"Анх дурдав → an apartment."},
      {q:"М8 (did):", parts:["Did you ", " it?"], opts:["buy","bought"], a:0, fix:"did + нүцгэн → buy."},
      {q:"М9 (will):", parts:["It will ", " sunny tomorrow."], opts:["be","is"], a:0, fix:"will + be."}
    ],
    speak:{ scene:'🌟 Их төсөл: Миний амьдрал', turns:[
      {ruby:"Tell me everything about yourself!", pron:"тэл ми эврисинг эбаут ёрсэлф!", mn:"Өөрийнхөө тухай бүгдийг яриач!",
        choices:[{t:"My name is Bolor. I am 30 and I am a teacher in Ulaanbaatar.",best:true,mn:"Миний нэр Болор. 30 настай, Улаанбаатарт багш."},{t:"Bolor. 30 years. Teacher.",best:false,fix:"Бүтэн: My name is... I AM 30... I AM a teacher."}]},
      {ruby:"What is your typical day like?", pron:"вот из ёр типикл дэй лайк?", mn:"Ердийн өдөр тань ямар вэ?",
        choices:[{t:"I usually get up at six and go to work by bus. It takes 30 minutes.",best:true,mn:"Ихэвчлэн 6-д босч, автобусаар ажилдаа явдаг. 30 минут болдог."},{t:"I get up six, go work by the bus.",best:false,fix:"AT six... BY bus (артикльгүй). IT TAKES 30 minutes."}]},
      {ruby:"And what are your plans for the future?", pron:"энд вот а ёр плэнз фор зэ фьючэр?", mn:"Ирээдүйн төлөвлөгөө тань юу вэ?",
        choices:[{t:"I am going to learn English well. I think it will help me a lot!",best:true,mn:"Англи хэлээ сайн сурна. Надад их тус болно гэж бодож байна!"},{t:"I go to learn English. It will helps me.",best:false,fix:"I AM GOING TO learn... it WILL HELP me."}]}
    ]}
  },
  {
    id:'a1m10l10', title:"10.10 A1 төгсгөлийн шалгалт", level:"A1 · М10",
    blurb:"🎓 A1 БАТАЛГААЖУУЛАЛТ — 100 хичээлийн шалгалт",
    rule:{
      h:"🎓 Баяр хүргэе! A1 түвшний төгсгөл",
      html:`<b>🎓 Та A1 курсийн 100 хичээлийг дуусгалаа!</b><br><br>
        <b>Одоо та юу чадах вэ:</b>
        <div style="margin:12px 0;line-height:2">
        ✅ Өөрийгөө бүрэн танилцуулах (нэр, улс, нас, ажил, гэр бүл)<br>
        ✅ Өдөр тутмын амьдралаа өгүүлэх (цаг, дадал, давтамж)<br>
        ✅ Гэр, орчноо дүрслэх<br>
        ✅ Ресторанд захиалж, дэлгүүрт худалдан авалт хийх<br>
        ✅ Зам асууж, аялал төлөвлөх<br>
        ✅ <b>Гурван цагаар ярих:</b> өнгөрсөн (was/were, -ed, went/bought), одоо (Simple/Continuous), ирээдүй (going to, will)<br>
        ✅ Эмчид хандаж, яаралтай тусламж дуудах<br>
        ✅ Зөвлөгөө өгөх (should, need to, It is important to)
        </div>
        <b>🎯 Дараагийн алхам — A2:</b> Present Perfect (I have been), Past Continuous (I was working), relative clauses (the man who...), хэлц үйл үг, илүү нарийн цаг.
        <p style="margin-top:14px"><b>🎓 Төгсгөлийн шалгалт:</b> Доорх дасгал, ярианы даалгавар нь A1-ийн ХАМГИЙН чухал 4 цэгийг шалгана. Ruby-тэй бүрэн яриа хийж өөрийгөө сорь!</p>
        <p style="margin-top:8px"><b>💡 Зөвлөгөө:</b> A1-ийн дүрмийг мэдэх нь хангалтгүй — <b>ярих</b> хэрэгтэй. Өдөрт 10 минут Ruby-тэй ярь. Тоглоом тоглож үгээ бататга. 3 сарын дараа өөрийгөө танихгүй болно!</p>`
    },
    phrases:[
      {en:"I have finished A1! I am so happy!", pron:"ай хэв финишт эй-ван! ай эм соу хэпи!", mn:"A1-ийг дуусгалаа! Их баяртай байна!"},
      {en:"I studied for three months.", pron:"ай стадид фор срий манс.", mn:"Гурван сар суралцсан."},
      {en:"It was difficult, but I didn't stop.", pron:"ит воз дификалт, бат ай диднт стоп.", mn:"Хэцүү байсан ч зогсоогүй."},
      {en:"Now I can speak about my life in English.", pron:"нау ай кэн спийк эбаут май лайф ин Инглиш.", mn:"Одоо би амьдралынхаа тухай англиар ярьж чадна."},
      {en:"Next, I am going to start A2!", pron:"нэкст, ай эм гоуинг ту старт эй-ту!", mn:"Дараа нь A2-ыг эхлүүлнэ!"}
    ],
    exercises:[
      {q:"🎓 Өнгөрсөн цаг:", parts:["I ", " to the market yesterday."], opts:["went","goed"], a:0, fix:"go → went (онцгой үйл үг)."},
      {q:"🎓 did асуулт:", parts:["Did you ", " anything?"], opts:["buy","bought"], a:0, fix:"did + нүцгэн хэлбэр → buy."},
      {q:"🎓 Ирээдүй:", parts:["I ", " going to study A2."], opts:["am","—"], a:0, fix:"be заавал → I AM going to."},
      {q:"🎓 3-р бие:", parts:["She ", " English every day."], opts:["studies","study"], a:0, fix:"She → studies (гийгүүлэгч+y → ies)."}
    ],
    speak:{ scene:'🎓 A1 төгсгөлийн ярилцлага', turns:[
      {ruby:"Congratulations! You finished A1! How do you feel?", pron:"конгрэчулэйшнз! ю финишт эй-ван! хау ду ю фийл?", mn:"Баяр хүргэе! A1-ийг дуусгалаа! Ямар байна?",
        choices:[{t:"I feel great! It was difficult, but I didn't give up.",best:true,mn:"Гайхалтай байна! Хэцүү байсан ч бууж өгөөгүй."},{t:"I feel greatly. It was difficult but I don't gave up.",best:false,fix:"feel GREAT. I DIDN'T GIVE up."}]},
      {ruby:"What was the most difficult part for you?", pron:"вот воз зэ моуст дификалт парт фор ю?", mn:"Танд юу нь хамгийн хэцүү байсан бэ?",
        choices:[{t:"The articles! In Mongolian we don't have 'a' or 'the'.",best:true,mn:"Артикль! Монголд «a», «the» гэж байдаггүй."},{t:"Articles. Mongolian no have a, the.",best:false,fix:"IN Mongolian, we DON'T HAVE 'a' or 'the'."}]},
      {ruby:"You did great. What are you going to do next?", pron:"ю дид грэйт. вот а ю гоуинг ту ду нэкст?", mn:"Сайн ажиллалаа. Дараа нь юу хийх вэ?",
        choices:[{t:"I am going to start A2! I think it will be easier now.",best:true,mn:"A2-ыг эхлүүлнэ! Одоо илүү хялбар байх гэж бодож байна."},{t:"I go to start A2. It will easier.",best:false,fix:"I AM GOING TO start A2. It WILL BE easier."}]}
    ]}
  }
],
  a2: [
  {
    id:'a2m1l1', title:"1.1 Өнгөрсөн амралт", level:"A2 · М1",
    blurb:"The sun was shining — Past Continuous",
    rule:{
      h:"Зорилго ба дүрэм: Past Continuous (өнгөрсөн үргэлжлэх)",
      html:`<b>🎯 Зорилго:</b> ⭐ Өнгөрсөн үеийн ЯГ ТЭР МӨЧИД болж байсныг дүрслэх.<br><br>
        <b>was/were + үйл үг-ing</b>:
        <div style="margin:12px 0"><span class="tag">I / He / She / It + WAS + -ing</span><span class="tag">You / We / They + WERE + -ing</span></div>
        <b>Past Simple ⟷ Past Continuous:</b>
        <div style="margin:12px 0"><span class="tag">I swam. = сэлсэн (дуусчихсан)</span><span class="tag">I was swimming. = сэлж байсан (тэр үед үргэлжилж байсан)</span></div>
        Аяллын дүр зургийг дүрслэхэд төгс: <i>The sun was shining, birds were singing, and we were sitting by the lake.</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        holiday /ˈhɒlədeɪ/ — амралт · lake /leɪk/ — нуур · shine /ʃaɪn/ — гэрэлтэх<br>
        camp /kæmp/ — отоглох · tent /tent/ — майхан · fire /ˈfaɪər/ — гал<br>
        boat /boʊt/ — завь · peaceful /ˈpiːsfl/ — амар амгалан · view /vjuː/ — үзэмж<br>
        memory /ˈmeməri/ — дурсамж · amazing /əˈmeɪzɪŋ/ — гайхалтай · whole /hoʊl/ — бүтэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> was/were мартах: «I swimming» ✗ → <b>I WAS swimming</b>. Мөн зарим үйл үг Continuous-д ордоггүй (A1-д үзсэн): «I was knowing» ✗ → <b>I knew</b>. know, like, want, need, believe — эдгээр -ing авдаггүй!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Кино шиг үргэлжилж байсан бол WAS/WERE + ING · Зураг шиг дуусчихсан бол Past Simple».</p>`
    },
    phrases:[
      {en:"We were staying near a beautiful lake.", pron:"ви вөр стэйинг нийр э бьютифул лэйк.", mn:"Бид үзэсгэлэнтэй нуурын дэргэд байрлаж байсан."},
      {en:"The sun was shining all week.", pron:"зэ сан воз шайнинг ол вийк.", mn:"Долоо хоног турш нар гэрэлтэж байлаа."},
      {en:"The children were playing by the water.", pron:"зэ чилдрэн вөр плэйинг бай зэ вотэр.", mn:"Хүүхдүүд усны дэргэд тоглож байсан."},
      {en:"We were cooking on a fire every evening.", pron:"ви вөр күкинг он э файэр эври ийвнинг.", mn:"Бид орой бүр галан дээр хоол хийж байлаа."},
      {en:"It was an amazing holiday.", pron:"ит воз эн эмэйзинг холидэй.", mn:"Гайхалтай амралт байсан."}
    ],
    exercises:[
      {q:"was/were:", parts:["The children ", " playing."], opts:["were","was"], a:0, fix:"Олон → were playing."},
      {q:"was/were:", parts:["The sun ", " shining."], opts:["was","were"], a:0, fix:"Ганц → was shining."},
      {q:"be мартав уу:", parts:["We ", " staying near the lake."], opts:["were","—"], a:0, fix:"be заавал → We WERE staying."},
      {q:"Онцгой үйл үг:", parts:["I ", " the answer."], opts:["knew","was knowing"], a:0, fix:"know нь -ing авдаггүй → I knew."}
    ],
    speak:{ scene:'Амралтаа дурсах', turns:[
      {ruby:"Tell me about your last holiday!", pron:"тэл ми эбаут ёр ласт холидэй!", mn:"Сүүлчийн амралтынхаа тухай яриач!",
        choices:[{t:"We were staying near a lake. It was peaceful.",best:true,mn:"Бид нуурын дэргэд байрлаж байсан. Амар амгалан байлаа."},{t:"We staying near lake.",best:false,fix:"We WERE staying near A lake."}]},
      {ruby:"That sounds lovely! What was the weather like?", pron:"зэт саундз лавли! вот воз зэ вэзэр лайк?", mn:"Сайхан юм! Цаг агаар ямар байсан бэ?",
        choices:[{t:"The sun was shining the whole week!",best:true,mn:"Долоо хоног турш нар гэрэлтэж байлаа!"},{t:"The sun shining whole week.",best:false,fix:"The sun WAS shining."}]},
      {ruby:"What were the children doing?", pron:"вот вөр зэ чилдрэн дуинг?", mn:"Хүүхдүүд юу хийж байсан бэ?",
        choices:[{t:"They were swimming and playing all day.",best:true,mn:"Тэд өдөржин сэлж, тоглож байлаа."},{t:"They was swimming.",best:false,fix:"They WERE swimming (олон тоо)."}]}
    ]}
  },
  {
    id:'a2m1l2', title:"1.2 Бага нас", level:"A2 · М1",
    blurb:"I used to play outside — used to ⭐",
    rule:{
      h:"Зорилго ба дүрэм: used to (өмнө нь ... байсан)",
      html:`<b>🎯 Зорилго:</b> ⭐ Өмнө нь тогтмол хийдэг байсан, ОДОО ХИЙДЭГГҮЙ зүйлээ ярих — бага насны тухай ярих гол хэрэгсэл!<br><br>
        <b>used to + үйл үг</b> = өмнө нь ...дэг байсан (одоо үгүй):
        <div style="margin:12px 0"><span class="tag">I used to play outside. = Өмнө нь гадаа тоглодог байсан (одоо үгүй).</span><span class="tag">Бүх биед адилхан: She used to / They used to</span></div>
        <b>Асуулт / үгүйсгэл — d алга болно!</b>
        <div style="margin:12px 0"><span class="tag">Did you USE to play? (used ✗)</span><span class="tag">I didn't USE to like it. (used ✗)</span></div>
        <b>used to ⟷ Past Simple:</b> I used to live there (олон жил) ⟷ I lived there in 2010 (тодорхой үе).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        childhood /ˈtʃaɪldhʊd/ — бага нас · grow up /ɡroʊ ʌp/ — өсөх · village /ˈvɪlɪdʒ/ — тосгон<br>
        toy /tɔɪ/ — тоглоом · climb /klaɪm/ — авирах · tree /triː/ — мод<br>
        neighbor /ˈneɪbər/ — хөрш · afraid /əˈfreɪd/ — айсан · shy /ʃaɪ/ — ичимхий<br>
        naughty /ˈnɔːti/ — тоглоомтой · miss /mɪs/ — санагалзах · those days /ðoʊz deɪz/ — тэр үед</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Did you used to...?» ✗ → did аль хэдийн өнгөрсний тэмдэгтэй тул <b>Did you USE to...?</b> Мөн «I am used to» — тэс өөр утга (дассан)! <b>I used to swim</b> = өмнө нь сэлдэг байсан ⟷ <b>I am used to swimming</b> = сэлэхэд дассан.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тэр үед тийм байсан, одоо үгүй → USED TO». DID гарвал USE (d унана).</p>`
    },
    phrases:[
      {en:"I used to live in a small village.", pron:"ай юзд ту лив ин э смол вилэж.", mn:"Би өмнө нь жижиг тосгонд амьдардаг байсан."},
      {en:"We used to climb trees every day.", pron:"ви юзд ту клайм трийз эври дэй.", mn:"Бид өдөр бүр мод авирдаг байлаа."},
      {en:"Did you use to have a lot of toys?", pron:"дид ю юз ту хэв э лот ов тойз?", mn:"Чи өмнө нь олон тоглоомтой байсан уу?"},
      {en:"I didn't use to like vegetables!", pron:"ай диднт юз ту лайк вэжтэблз!", mn:"Би өмнө нь ногоонд дургүй байсан!"},
      {en:"I really miss those days.", pron:"ай риали мис зоуз дэйз.", mn:"Тэр үеийг үнэхээр санадаг."}
    ],
    exercises:[
      {q:"Хэлбэр:", parts:["I ", " play outside every day."], opts:["used to","use to"], a:0, fix:"Батлах → used to."},
      {q:"Асуулт:", parts:["Did you ", " live here?"], opts:["use to","used to"], a:0, fix:"did гарвал d унана → use to."},
      {q:"Үгүйсгэл:", parts:["I didn't ", " like milk."], opts:["use to","used to"], a:0, fix:"didn't гарвал → use to."},
      {q:"used to + :", parts:["We used to ", " trees."], opts:["climb","climbing"], a:0, fix:"used to + нүцгэн үйл үг → climb."}
    ],
    speak:{ scene:'Бага насаа дурсах', turns:[
      {ruby:"Where did you grow up?", pron:"вэр дид ю гроу ап?", mn:"Хаана өссөн бэ?",
        choices:[{t:"I used to live in a small village near Darkhan.",best:true,mn:"Дархангийн ойролцоох жижиг тосгонд амьдардаг байсан."},{t:"I use to live in village.",best:false,fix:"Батлахад → I USED TO live in A village."}]},
      {ruby:"Nice! Did you use to play outside a lot?", pron:"найс! дид ю юз ту плэй аутсайд э лот?", mn:"Гоё! Гадаа их тоглодог байсан уу?",
        choices:[{t:"Yes! We used to climb trees every day.",best:true,mn:"Тийм! Бид өдөр бүр мод авирдаг байлаа."},{t:"Yes! We used to climbing trees.",best:false,fix:"used to + CLIMB (нүцгэн)."}]},
      {ruby:"Were you a naughty child?", pron:"вөр ю э ноти чайлд?", mn:"Тоглоомтой хүүхэд байсан уу?",
        choices:[{t:"A little! But I didn't use to be shy.",best:true,mn:"Жаахан! Гэхдээ ичимхий байгаагүй."},{t:"A little! I didn't used to be shy.",best:false,fix:"didn't гарвал → didn't USE to."}]}
    ]}
  },
  {
    id:'a2m1l3', title:"1.3 Анхны сургууль", level:"A2 · М1",
    blurb:"taught, wrote, spoke — онцгой үйл үг 2",
    rule:{
      h:"Зорилго ба дүрэм: онцгой үйл үг (өргөтгөл)",
      html:`<b>🎯 Зорилго:</b> A1-д 10 онцгой үйл үг үзсэн. Одоо ярианд хамгийн их хэрэгтэй <b>дараагийн 24</b>-ийг эзэмших.<br><br>
        <b>Бүлэглэж цээжлэх нь хамгийн үр дүнтэй:</b>
        <div style="margin:12px 0"><span class="tag">i → a: sing→sang, drink→drank, swim→swam, begin→began, ring→rang</span></div>
        <div style="margin:12px 0"><span class="tag">-ought/-aught: teach→taught, catch→caught, think→thought, bring→brought</span></div>
        <div style="margin:12px 0"><span class="tag">o → ote/oke: write→wrote, speak→spoke, break→broke, choose→chose</span></div>
        <div style="margin:12px 0"><span class="tag">Огт өөрчлөгддөггүй: put→put, cut→cut, cost→cost, let→let, read→read (дуудлага «рэд»!)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        taught /tɔːt/ — заасан · wrote /roʊt/ — бичсэн · spoke /spoʊk/ — ярьсан<br>
        sang /sæŋ/ — дуулсан · swam /swæm/ — сэлсэн · caught /kɔːt/ — барьсан<br>
        broke /broʊk/ — эвдсэн · lost /lɒst/ — алдсан · won /wʌn/ — ялсан<br>
        wore /wɔːr/ — өмссөн · flew /fluː/ — нисэсэн · uniform /ˈjuːnɪfɔːrm/ — дүрэмт хувцас</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «teached» ✗ → <b>taught</b>. «writed» ✗ → <b>wrote</b>. Мөн <b>read</b> нь бичихдээ өөрчлөгддөггүй ч ДУУДЛАГА нь өөр: I read /рийд/ every day ⟷ I read /рэд/ it yesterday!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өдөрт 3 үйл үг × бүлгээр нь. «i→a» бүлгийг дуулж тогтоо: sing-sang, drink-drank, swim-swam.</p>`
    },
    phrases:[
      {en:"My first teacher taught us for four years.", pron:"май фөрст тийчэр тот ас фор фор йирз.", mn:"Анхны багш маань биднийг 4 жил зааж байсан."},
      {en:"We wore a school uniform every day.", pron:"ви вор э скүл юниформ эври дэй.", mn:"Бид өдөр бүр дүрэмт хувцас өмсдөг байлаа."},
      {en:"I wrote my first letter in that class.", pron:"ай роут май фөрст лэтэр ин зэт клас.", mn:"Тэр ангид анхны захидлаа бичсэн."},
      {en:"We sang songs and played games.", pron:"ви сэнг сонгз энд плэйд гэймз.", mn:"Бид дуу дуулж, тоглоом тоглодог байлаа."},
      {en:"I broke my pencil and lost my eraser!", pron:"ай броук май пэнсл энд лост май ирэйзэр!", mn:"Харандаагаа хугалж, баллуураа алдсан!"}
    ],
    exercises:[
      {q:"Онцгой:", parts:["My teacher ", " us English."], opts:["taught","teached"], a:0, fix:"teach → taught."},
      {q:"Онцгой:", parts:["I ", " a letter yesterday."], opts:["wrote","writed"], a:0, fix:"write → wrote."},
      {q:"Онцгой:", parts:["We ", " songs at school."], opts:["sang","singed"], a:0, fix:"sing → sang."},
      {q:"Өөрчлөгддөггүй:", parts:["It ", " 5,000 tugrik last year."], opts:["cost","costed"], a:0, fix:"cost → cost."}
    ],
    speak:{ scene:'Анхны сургууль', turns:[
      {ruby:"Do you remember your first school?", pron:"ду ю римэмбэр ёр фөрст скүл?", mn:"Анхны сургуулиа санадаг уу?",
        choices:[{t:"Yes! My teacher taught us for four years.",best:true,mn:"Тийм! Багш маань биднийг 4 жил зааж байсан."},{t:"Yes! My teacher teached us.",best:false,fix:"teach → TAUGHT."}]},
      {ruby:"What did you do in class?", pron:"вот дид ю ду ин клас?", mn:"Ангид юу хийдэг байсан бэ?",
        choices:[{t:"We sang songs and wrote stories.",best:true,mn:"Бид дуу дуулж, түүх бичдэг байлаа."},{t:"We singed songs and writed stories.",best:false,fix:"sing → SANG, write → WROTE."}]},
      {ruby:"Did you use to wear a uniform?", pron:"дид ю юз ту вэр э юниформ?", mn:"Дүрэмт хувцас өмсдөг байсан уу?",
        choices:[{t:"Yes, we wore a blue one every day.",best:true,mn:"Тийм, өдөр бүр хөх өнгийнхийг өмсдөг байлаа."},{t:"Yes, we weared blue.",best:false,fix:"wear → WORE."}]}
    ]}
  },
  {
    id:'a2m1l4', title:"1.4 Өчигдрийн үйл явдал", level:"A2 · М1",
    blurb:"I was cooking when he called — тасалдал ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Continuous ⟷ Past Simple",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр өнгөрсөн цагийг ХАМТ хэрэглэх — англи өгүүлэмжийн зүрх!<br><br>
        <b>Алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">УРТ, дэвсгэр үйлдэл → Past Continuous (was cooking)</span><span class="tag">БОГИНО, тасалсан үйлдэл → Past Simple (called)</span></div>
        <b>I was cooking when he called.</b><br>
        (Хоол хийж БАЙХАД → утас дуугарав. Хоол хийх нь урт, залгах нь богино.)
        <div style="margin:12px 0"><span class="tag">Урт ——————————— (was cooking)</span><span class="tag">Богино ✗ (called)</span></div>
        <b>Хоёулаа Continuous бол:</b> зэрэг үргэлжилсэн: <i>I was cooking while he was watching TV.</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        happen /ˈhæpən/ — тохиолдох · suddenly /ˈsʌdənli/ — гэнэт · ring /rɪŋ/ — дуугарах<br>
        arrive /əˈraɪv/ — ирэх · leave /liːv/ — явах · drop /drɒp/ — унагаах<br>
        notice /ˈnoʊtɪs/ — анзаарах · realize /ˈriːəlaɪz/ — ойлгох · moment /ˈmoʊmənt/ — агшин<br>
        luckily /ˈlʌkɪli/ — азаар · suddenly /ˈsʌdənli/ — гэнэт · accident /ˈæksɪdənt/ — осол</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Хоёуланг Past Simple болгох: «I cooked when he called» — утга өөрчлөгдөнө! (залгасны ДАРАА хоол хийсэн гэсэн утга). Тасалдал бол <b>I WAS COOKING when he called</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Кино үргэлжилж байв (WAS -ING) → гэнэт юм болов (Past Simple)».</p>`
    },
    phrases:[
      {en:"I was cooking when the phone rang.", pron:"ай воз күкинг вэн зэ фоун рэнг.", mn:"Утас дуугарахад би хоол хийж байсан."},
      {en:"We were watching TV when she arrived.", pron:"ви вөр вочинг тиви вэн ши эрайвд.", mn:"Тэр ирэхэд бид зурагт үзэж байлаа."},
      {en:"It was raining when we left the house.", pron:"ит воз рэйнинг вэн ви лэфт зэ хаус.", mn:"Бид гэрээсээ гарахад бороо орж байлаа."},
      {en:"Suddenly, I noticed something strange.", pron:"садэнли, ай ноутист самсинг стрэйнж.", mn:"Гэнэт би хачин зүйл анзаарлаа."},
      {en:"I was crossing the street when a car stopped.", pron:"ай воз кросинг зэ стрийт вэн э кар стопт.", mn:"Гудамж гатлаж байхад машин зогсов."}
    ],
    exercises:[
      {q:"Урт үйлдэл:", parts:["I ", " when the phone rang."], opts:["was cooking","cooked"], a:0, fix:"Урт, тасалдсан → was cooking."},
      {q:"Богино үйлдэл:", parts:["I was cooking when the phone ", "."], opts:["rang","was ringing"], a:0, fix:"Богино тасалсан → rang."},
      {q:"Хоёулаа урт:", parts:["I was reading while he ", " TV."], opts:["was watching","watched"], a:0, fix:"Зэрэг үргэлжилсэн → was watching."},
      {q:"Аль зөв:", parts:["It ", " when we left."], opts:["was raining","rained"], a:0, fix:"Дэвсгэр байдал → was raining."}
    ],
    speak:{ scene:'Өчигдөр юу болов', turns:[
      {ruby:"What happened yesterday? You didn't answer my call.", pron:"вот хэпэнд йестэрдэй? ю диднт ансэр май кол.", mn:"Өчигдөр юу болов? Утсанд минь гараагүй.",
        choices:[{t:"Sorry! I was cooking when you called.",best:true,mn:"Уучлаарай! Чамайг залгахад хоол хийж байсан."},{t:"Sorry! I cooked when you called.",best:false,fix:"Тасалдал → I WAS COOKING when you called."}]},
      {ruby:"Oh, I see. What were you making?", pron:"оу, ай сий. вот вөр ю мэйкинг?", mn:"Ойлголоо. Юу хийж байсан бэ?",
        choices:[{t:"Buuz! I was making them while my son was doing homework.",best:true,mn:"Бууз! Хүүг маань хичээлээ хийж байхад би бууз хийж байлаа."},{t:"Buuz! I made them while my son did homework.",best:false,fix:"Зэрэг үргэлжилсэн → WAS makING while he WAS doING."}]},
      {ruby:"Nice! Did anything else happen?", pron:"найс! дид энисинг элс хэпэн?", mn:"Гоё! Өөр юм болсон уу?",
        choices:[{t:"Yes! I dropped a plate while I was washing it.",best:true,mn:"Тийм! Таваг угааж байхдаа унагаачихсан."},{t:"Yes! I was dropping a plate when I washed it.",best:false,fix:"Богино=dropped, урт=was washing."}]}
    ]}
  },
  {
    id:'a2m1l5', title:"1.5 Аяллын дурсамж", level:"A2 · М1",
    blurb:"when / while / as — цагийн холбоос",
    rule:{
      h:"Зорилго ба дүрэм: when / while / as",
      html:`<b>🎯 Зорилго:</b> Өнгөрсөн үйл явдлыг цагийн холбоосоор уях.<br><br>
        <b>Гурвын ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">WHEN + богино үйлдэл: when the phone rang</span><span class="tag">WHILE + урт үйлдэл (-ing): while I was cooking</span><span class="tag">AS = while-тэй адил (илүү бичгийн): as we were leaving</span></div>
        <b>Байрлал чөлөөтэй</b> — эхэнд ч, дунд ч болно (эхэнд бол ТАСЛАЛ):
        <div style="margin:12px 0"><span class="tag">While I was cooking, the phone rang. ✓ (таслалтай)</span><span class="tag">The phone rang while I was cooking. ✓ (таслалгүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        trip /trɪp/ — аялал · journey /ˈdʒɜːrni/ — зам · abroad /əˈbrɔːd/ — гадаадад<br>
        airport /ˈerpɔːrt/ — нисэх буудал · flight /flaɪt/ — нислэг · luggage /ˈlʌɡɪdʒ/ — ачаа тээш<br>
        passport /ˈpæspɔːrt/ — паспорт · guide /ɡaɪd/ — хөтөч · souvenir /ˌsuːvəˈnɪr/ — дурсгал<br>
        unforgettable /ˌʌnfərˈɡetəbl/ — мартагдашгүй · while /waɪl/ — байхад · during /ˈdʊrɪŋ/ — хугацаанд</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «while the phone rang» ✗ — while нь УРТ үйлдэлтэй: <b>when the phone rang</b> ✓. Мөн <b>during</b> ⟷ <b>while</b>: during + НЭР ҮГ (during the trip), while + ӨГҮҮЛБЭР (while we were travelling). «During we were travelling» ✗!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WHILE = урт (-ing дагадаг) · WHEN = богино · DURING = нэр үгтэй».</p>`
    },
    phrases:[
      {en:"While we were waiting at the airport, I met an old friend.", pron:"вайл ви вөр вэйтинг эт зэ эрпорт, ай мэт эн оулд фрэнд.", mn:"Нисэх буудал дээр хүлээж байхдаа хуучин найзтайгаа таарсан."},
      {en:"When the plane landed, everyone clapped.", pron:"вэн зэ плэйн лэндид, эвриван клэпт.", mn:"Онгоц газардахад бүгд алга ташлаа."},
      {en:"I lost my luggage during the trip.", pron:"ай лост май лагиж дюринг зэ трип.", mn:"Аяллын үеэр ачаагаа алдсан."},
      {en:"As we were leaving, it started to rain.", pron:"эз ви вөр лийвинг, ит стартид ту рэйн.", mn:"Бид явж байх үед бороо орж эхэлсэн."},
      {en:"It was an unforgettable journey.", pron:"ит воз эн анфоргетэбл жөрни.", mn:"Мартагдашгүй аялал байлаа."}
    ],
    exercises:[
      {q:"when/while:", parts:["", " I was cooking, he called."], opts:["While","When"], a:0, fix:"Урт үйлдэл (-ing) → While."},
      {q:"when/while:", parts:["I was reading ", " the phone rang."], opts:["when","while"], a:0, fix:"Богино үйлдэл → when."},
      {q:"during/while:", parts:["I lost my bag ", " the trip."], opts:["during","while"], a:0, fix:"Нэр үгтэй → during the trip."},
      {q:"during/while:", parts:["It rained ", " we were walking."], opts:["while","during"], a:0, fix:"Өгүүлбэртэй → while."}
    ],
    speak:{ scene:'Аяллын дурсамж', turns:[
      {ruby:"Tell me about your trip abroad!", pron:"тэл ми эбаут ёр трип эброд!", mn:"Гадаад аяллынхаа тухай яриач!",
        choices:[{t:"While we were waiting at the airport, I met an old friend!",best:true,mn:"Нисэх буудал дээр хүлээж байхдаа хуучин найзтайгаа таарсан!"},{t:"When we were waiting, I met friend.",best:false,fix:"Урт үйлдэл → WHILE we were waiting."}]},
      {ruby:"What a coincidence! Did everything go well?", pron:"вот э коуинсидэнс! дид эврисинг гоу вэл?", mn:"Ямар таарсан юм бэ! Бүх юм сайхан болсон уу?",
        choices:[{t:"Almost. I lost my luggage during the trip!",best:true,mn:"Бараг. Аяллын үеэр ачаагаа алдсан!"},{t:"Almost. I lost luggage while the trip.",best:false,fix:"Нэр үгтэй → DURING the trip."}]},
      {ruby:"Oh no! Did you find it?", pron:"оу ноу! дид ю файнд ит?", mn:"Өө! Оллоо юу?",
        choices:[{t:"Luckily yes — as we were leaving, they called me.",best:true,mn:"Азаар тийм — бид явж байх үед над руу залгасан."},{t:"Yes, when we were leaving they call me.",best:false,fix:"Өнгөрсөн → they CALLED me."}]}
    ]}
  },
  {
    id:'a2m1l6', title:"1.6 Алдарт хүний намтар", level:"A2 · М1",
    blurb:"It was written by... — идэвхгүй хэлбэр ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Simple passive (идэвхгүй хэлбэр)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэн хийснээс илүү ЮУ БОЛСОН нь чухал үед — намтар, түүхэнд зайлшгүй.<br><br>
        <b>was/were + үйл үгийн 3-р хэлбэр (V3):</b>
        <div style="margin:12px 0"><span class="tag">Идэвхтэй: Chinggis Khaan founded the empire.</span><span class="tag">Идэвхгүй: The empire WAS FOUNDED by Chinggis Khaan.</span></div>
        <b>Хэзээ хэрэглэх вэ:</b> хэн хийсэн нь мэдэгдэхгүй/чухал биш үед:
        <div style="margin:12px 0"><span class="tag">He was born in 1962. (хамгийн түгээмэл идэвхгүй!)</span><span class="tag">The book was published in 1990.</span><span class="tag">by + хэн хийсэн (хэрэгтэй бол): written BY him</span></div>
        <b>V3 хэлбэрүүд:</b> write→written, give→given, take→taken, know→known, build→built, make→made, find→found.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        biography /baɪˈɒɡrəfi/ — намтар · famous /ˈfeɪməs/ — алдартай · leader /ˈliːdər/ — удирдагч<br>
        writer /ˈraɪtər/ — зохиолч · invent /ɪnˈvent/ — зохион бүтээх · discover /dɪˈskʌvər/ — нээх<br>
        build /bɪld/ — барих · publish /ˈpʌblɪʃ/ — хэвлүүлэх · award /əˈwɔːrd/ — шагнал<br>
        achieve /əˈtʃiːv/ — амжилт гаргах · century /ˈsentʃəri/ — зуун · empire /ˈempaɪər/ — эзэнт гүрэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> V2 (өнгөрсөн) ба V3-ыг андуурах: «It was wrote» ✗ → <b>It was WRITTEN</b>. Мөн «He was born» ✓ — англид «төрөх» ҮРГЭЛЖ идэвхгүй! «He borned» ✗</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WAS/WERE + V3 = юм хийгдсэн» — was written, was built, was born.</p>`
    },
    phrases:[
      {en:"He was born in Ulaanbaatar in 1962.", pron:"хи воз борн ин Улаанбаатар ин найнтийн сиксти ту.", mn:"Тэр 1962 онд Улаанбаатарт төрсөн."},
      {en:"The book was written in 1990.", pron:"зэ бүк воз ритн ин найнтийн найнти.", mn:"Тэр ном 1990 онд бичигдсэн."},
      {en:"The temple was built in the 17th century.", pron:"зэ тэмпл воз билт ин зэ сэвэнтийнс сэнчэри.", mn:"Тэр сүм 17-р зуунд баригдсан."},
      {en:"He was given a big award.", pron:"хи воз гивн э биг эворд.", mn:"Түүнд том шагнал өгсөн."},
      {en:"His songs are known all over Mongolia.", pron:"хиз сонгз а ноун ол оувэр Монголиа.", mn:"Түүний дуунууд Монгол даяар танигдсан."}
    ],
    exercises:[
      {q:"V3 хэлбэр:", parts:["The book was ", " in 1990."], opts:["written","wrote"], a:0, fix:"was + V3 → written."},
      {q:"Төрөх:", parts:["She ", " in 1985."], opts:["was born","borned"], a:0, fix:"Англид үргэлж идэвхгүй → was born."},
      {q:"V3 хэлбэр:", parts:["The temple was ", " long ago."], opts:["built","build"], a:0, fix:"build → built (V3)."},
      {q:"by:", parts:["It was written ", " a famous writer."], opts:["by","from"], a:0, fix:"Хэн хийсэн → by."}
    ],
    speak:{ scene:'Алдартай хүний тухай', turns:[
      {ruby:"Tell me about a famous Mongolian.", pron:"тэл ми эбаут э фэймэс Монголиан.", mn:"Алдартай монгол хүний тухай яриач.",
        choices:[{t:"He was born in 1962 in Ulaanbaatar.",best:true,mn:"Тэр 1962 онд Улаанбаатарт төрсөн."},{t:"He borned in 1962.",best:false,fix:"Англид → he WAS BORN."}]},
      {ruby:"What did he do?", pron:"вот дид хи ду?", mn:"Тэр юу хийсэн бэ?",
        choices:[{t:"He wrote many songs. They are known all over the country.",best:true,mn:"Тэр олон дуу бичсэн. Тэдгээр нь улс даяар танигдсан."},{t:"He wrote songs. They are know everywhere.",best:false,fix:"are KNOWN (V3)."}]},
      {ruby:"Was he given any awards?", pron:"воз хи гивн эни эвордз?", mn:"Түүнд шагнал өгсөн үү?",
        choices:[{t:"Yes, he was given a big award in 1995.",best:true,mn:"Тийм, 1995 онд том шагнал өгсөн."},{t:"Yes, he was gave award.",best:false,fix:"was GIVEN (V3), give→gave→given."}]}
    ]}
  },
  {
    id:'a2m1l7', title:"1.7 Дараалал", level:"A2 · М1",
    blurb:"after eating, as soon as — үйл явдлын дараалал",
    rule:{
      h:"Зорилго ба дүрэм: before/after + -ing, as soon as",
      html:`<b>🎯 Зорилго:</b> Түүхийг цэгцтэй, дараалалтай өгүүлэх.<br><br>
        <b>1) before / after + үйл үг-ING</b> (эзэн нь ижил бол):
        <div style="margin:12px 0"><span class="tag">After eating, we went for a walk.</span><span class="tag">Before leaving, I checked my bag.</span></div>
        <b>2) before / after + бүтэн өгүүлбэр:</b>
        <div style="margin:12px 0"><span class="tag">After we ate, we went for a walk.</span></div>
        <b>3) as soon as</b> = ...даруйд:
        <div style="margin:12px 0"><span class="tag">As soon as I arrived, I called my mother.</span></div>
        <b>Дарааллын үгс:</b> first → then → after that → later → finally → in the end.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        as soon as /əz suːn əz/ — даруйд · later /ˈleɪtər/ — дараа · finally /ˈfaɪnəli/ — эцэст нь<br>
        in the end /ɪn ði end/ — эцсийн дүнд · at first /ət fɜːrst/ — эхэндээ · afterwards /ˈæftərwərdz/ — дараа нь<br>
        immediately /ɪˈmiːdiətli/ — тэр дороо · meanwhile /ˈmiːnwaɪl/ — тэр хооронд · event /ɪˈvent/ — үйл явдал<br>
        order /ˈɔːrdər/ — дараалал · describe /dɪˈskraɪb/ — дүрслэх · continue /kənˈtɪnjuː/ — үргэлжлэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «After to eat» ✗ → угтварын ард -ing: <b>After eatING</b>. Мөн «as soon as» дараа ИРЭЭДҮЙД ч <b>одоо цаг</b>: «As soon as I will arrive» ✗ → <b>As soon as I arrive, I'll call you</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «before/after — угтвар учир ард нь -ING · as soon as — ирээдүйд ч одоо цаг».</p>`
    },
    phrases:[
      {en:"After arriving, we checked into the hotel.", pron:"афтэр эрайвинг, ви чэкт инту зэ хоутэл.", mn:"Ирсний дараа зочид буудалд бүртгүүлсэн."},
      {en:"Before leaving, I checked my passport.", pron:"бифор лийвинг, ай чэкт май паспорт.", mn:"Явахаасаа өмнө паспортоо шалгасан."},
      {en:"As soon as I arrived, I called my mother.", pron:"эз сүн эз ай эрайвд, ай колд май мазэр.", mn:"Ирмэгцээ ээж рүүгээ залгасан."},
      {en:"At first it was difficult, but later it got easier.", pron:"эт фөрст ит воз дификалт, бат лэйтэр ит гот ийзиэр.", mn:"Эхэндээ хэцүү байсан ч дараа нь хялбар болсон."},
      {en:"In the end, everything was fine.", pron:"ин зэ энд, эврисинг воз файн.", mn:"Эцсийн дүнд бүх юм зүгээр болсон."}
    ],
    exercises:[
      {q:"Угтвар + :", parts:["After ", ", we went home."], opts:["eating","to eat"], a:0, fix:"Угтварын ард → -ing: eating."},
      {q:"Угтвар + :", parts:["Before ", ", I checked my bag."], opts:["leaving","leave"], a:0, fix:"Before + -ing → leaving."},
      {q:"as soon as:", parts:["As soon as I ", ", I'll call you."], opts:["arrive","will arrive"], a:0, fix:"as soon as → одоо цаг: arrive."},
      {q:"Дараалал:", parts:["", ", everything was fine."], opts:["In the end","At first"], a:0, fix:"Эцсийн дүнд → In the end."}
    ],
    speak:{ scene:'Аяллын дараалал', turns:[
      {ruby:"What did you do first when you arrived?", pron:"вот дид ю ду фөрст вэн ю эрайвд?", mn:"Ирээд эхлээд юу хийсэн бэ?",
        choices:[{t:"As soon as I arrived, I called my mother.",best:true,mn:"Ирмэгцээ ээж рүүгээ залгасан."},{t:"As soon as I arrive, I called mother.",best:false,fix:"Өнгөрсөн түүх → As soon as I ARRIVED."}]},
      {ruby:"And then?", pron:"энд зэн?", mn:"Дараа нь?",
        choices:[{t:"After eating, we went for a walk in the city.",best:true,mn:"Хоол идсэний дараа хотоор зугаалсан."},{t:"After to eat, we went walk.",best:false,fix:"After EATING, we went FOR A walk."}]},
      {ruby:"Was the trip good?", pron:"воз зэ трип гүд?", mn:"Аялал сайхан байсан уу?",
        choices:[{t:"At first it was difficult, but in the end it was great!",best:true,mn:"Эхэндээ хэцүү байсан ч эцсийн дүнд гайхалтай байлаа!"},{t:"First difficult, end great.",best:false,fix:"AT FIRST it WAS difficult, but IN THE END it WAS great."}]}
    ]}
  },
  {
    id:'a2m1l8', title:"1.8 Асуулт тавих", level:"A2 · М1",
    blurb:"Who called you? ⟷ Who did you call? ⭐",
    rule:{
      h:"Зорилго ба дүрэм: эзэн ⟷ тусагдахуун асуулт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Англи хэлний хамгийн будлиантай хос асуулт!<br><br>
        <b>ЭЗЭН асуулт</b> (хэн үйлдлийг ХИЙСЭН бэ?) — <b>did ХЭРЭГГҮЙ!</b> Дараалал өөрчлөгддөггүй:
        <div style="margin:12px 0"><span class="tag">Who called you? = Хэн чам руу залгав? (did ✗)</span><span class="tag">What happened? = Юу болов?</span></div>
        <b>ТУСАГДАХУУН асуулт</b> (хэнд/юуг?) — <b>did ХЭРЭГТЭЙ</b>:
        <div style="margin:12px 0"><span class="tag">Who did you call? = Чи хэн рүү залгав?</span><span class="tag">What did you see?</span></div>
        <b>Ялгаж мэдэх арга:</b> хариулт нь ЭЗЭН бол did хэрэггүй.
        <div style="margin:12px 0"><span class="tag">Who called you? — BAT called me. (Бат=эзэн → did-гүй)</span><span class="tag">Who did you call? — I called BAT. (Бат=тусагдахуун → did-тэй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        question /ˈkwestʃən/ — асуулт · answer /ˈænsər/ — хариулт · interview /ˈɪntərvjuː/ — ярилцлага<br>
        happen /ˈhæpən/ — тохиолдох · cause /kɔːz/ — шалтгаан · reason /ˈriːzn/ — учир<br>
        explain /ɪkˈspleɪn/ — тайлбарлах · wonder /ˈwʌndər/ — гайхах · curious /ˈkjʊriəs/ — сониуч<br>
        detail /ˈdiːteɪl/ — дэлгэрэнгүй · exactly /ɪɡˈzæktli/ — яг · anyone /ˈeniwʌn/ — хэн нэгэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Who did call you?» ✗ — эзэн асуултад did хэрэггүй: <b>Who called you?</b> Мөн «What did happen?» ✗ → <b>What happened?</b> Энэ бол хамгийн түгээмэл A2 алдаа!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хариулт нь ЭЗЭН бол DID зугтдаг» — Who called? (Бат) ⟷ Who did you call? (Батыг).</p>`
    },
    phrases:[
      {en:"Who called you yesterday?", pron:"хү колд ю йестэрдэй?", mn:"Өчигдөр чам руу хэн залгав?"},
      {en:"Who did you call yesterday?", pron:"хү дид ю кол йестэрдэй?", mn:"Өчигдөр чи хэн рүү залгав?"},
      {en:"What happened at the airport?", pron:"вот хэпэнд эт зэ эрпорт?", mn:"Нисэх буудал дээр юу болов?"},
      {en:"What did you see there?", pron:"вот дид ю сий зэр?", mn:"Тэнд юу харсан бэ?"},
      {en:"Who told you about it?", pron:"хү тоулд ю эбаут ит?", mn:"Энэ тухай чамд хэн хэлэв?"}
    ],
    exercises:[
      {q:"Эзэн асуулт:", parts:["Who ", " you? (хэн залгав)"], opts:["called","did call"], a:0, fix:"Эзэн асуулт → did хэрэггүй: Who called you?"},
      {q:"Тусагдахуун:", parts:["Who ", " call? (чи хэн рүү)"], opts:["did you","you"], a:0, fix:"Тусагдахуун → Who DID YOU call?"},
      {q:"Эзэн асуулт:", parts:["What ", "?"], opts:["happened","did happen"], a:0, fix:"Юу болов → What happened?"},
      {q:"Тусагдахуун:", parts:["What ", " see?"], opts:["did you","you"], a:0, fix:"Юуг харав → What DID YOU see?"}
    ],
    speak:{ scene:'Дэлгэрэнгүй асуух', turns:[
      {ruby:"I got some big news yesterday!", pron:"ай гот сам биг нюз йестэрдэй!", mn:"Өчигдөр том мэдээ сонслоо!",
        choices:[{t:"Really? Who told you?",best:true,mn:"Үнэхээр үү? Хэн хэлэв?"},{t:"Really? Who did tell you?",best:false,fix:"Эзэн асуулт → Who TOLD you? (did ✗)"}]},
      {ruby:"My old teacher! She called me.", pron:"май оулд тийчэр! ши колд ми.", mn:"Хуучин багш маань! Тэр над руу залгасан.",
        choices:[{t:"What did she say?",best:true,mn:"Тэр юу гэж хэлэв?"},{t:"What did she said?",best:false,fix:"did + нүцгэн → What did she SAY?"}]},
      {ruby:"She invited me to a school reunion!", pron:"ши инвайтид ми ту э скүл рийюньон!", mn:"Намайг сургуулийн уулзалтад урьсан!",
        choices:[{t:"How exciting! What happened at the last one?",best:true,mn:"Ямар сонирхолтой юм бэ! Өнгөрсөнд нь юу болсон бэ?"},{t:"Exciting! What did happen last one?",best:false,fix:"What HAPPENED? (did ✗)"}]}
    ]}
  },
  {
    id:'a2m1l9', title:"1.9 Богино өгүүллэг", level:"A2 · М1",
    blurb:"although, however — эсрэгцүүлэх",
    rule:{
      h:"Зорилго ба дүрэм: although / however / so",
      html:`<b>🎯 Зорилго:</b> Түүхэндээ эсрэгцүүлэл, гэнэтийн эргэлт нэмэх.<br><br>
        <b>although</b> = хэдийгээр ... ч (нэг өгүүлбэрийн дотор):
        <div style="margin:12px 0"><span class="tag">Although it was raining, we went out.</span><span class="tag">We went out although it was raining.</span></div>
        <b>however</b> = гэвч (ШИНЭ өгүүлбэр эхэлнэ, таслалтай):
        <div style="margin:12px 0"><span class="tag">It was raining. However, we went out.</span></div>
        <b>but ⟷ although ⟷ however:</b>
        <div style="margin:12px 0"><span class="tag">but — энгийн, дунд: It rained, but we went.</span><span class="tag">although — эхэнд ч, дунд ч</span><span class="tag">however — бичгийн, шинэ өгүүлбэр</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        although /ɔːlˈðoʊ/ — хэдийгээр · however /haʊˈevər/ — гэвч · story /ˈstɔːri/ — өгүүллэг<br>
        character /ˈkærəktər/ — дүр · beginning /bɪˈɡɪnɪŋ/ — эхлэл · ending /ˈendɪŋ/ — төгсгөл<br>
        surprising /sərˈpraɪzɪŋ/ — гэнэтийн · lucky /ˈlʌki/ — азтай · unlucky /ʌnˈlʌki/ — азгүй<br>
        decide /dɪˈsaɪd/ — шийдэх · sudden /ˈsʌdn/ — гэнэтийн · although /ɔːlˈðoʊ/ — хэдий ч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Although it was raining, BUT we went out» ✗ — хоёуланг зэрэг ✗! Аль нэгийг л: <b>Although it was raining, we went out</b> ✓ эсвэл <b>It was raining, but we went out</b> ✓ (монгол хэлний «хэдий ч ... гэхдээ» бүтцээс үүдэлтэй алдаа).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ALTHOUGH-тай бол BUT хэрэггүй · HOWEVER бол цэг тавиад шинэ өгүүлбэр».</p>`
    },
    phrases:[
      {en:"Although it was raining, we went to the park.", pron:"олзоу ит воз рэйнинг, ви вэнт ту зэ парк.", mn:"Бороо орж байсан ч бид цэцэрлэгт хүрээлэн явсан."},
      {en:"It was cold. However, the view was amazing.", pron:"ит воз коулд. хауэвэр, зэ вью воз эмэйзинг.", mn:"Хүйтэн байлаа. Гэвч үзэмж нь гайхалтай байсан."},
      {en:"We were tired, so we went to bed early.", pron:"ви вөр тайэрд, соу ви вэнт ту бэд өрли.", mn:"Ядарсан тул эрт унтсан."},
      {en:"The ending was very surprising.", pron:"зэ эндинг воз вэри сэрпрайзинг.", mn:"Төгсгөл нь их гэнэтийн байлаа."},
      {en:"Although we were unlucky at first, everything ended well.", pron:"олзоу ви вөр анлаки эт фөрст, эврисинг эндид вэл.", mn:"Эхэндээ азгүй байсан ч бүх юм сайхан төгссөн."}
    ],
    exercises:[
      {q:"Зөв эсэх:", parts:["Although it rained, ", " we went out."], opts:["—","but"], a:0, fix:"Although-тай бол but ✗."},
      {q:"however:", parts:["It was cold. ", ", we enjoyed it."], opts:["However","Although"], a:0, fix:"Шинэ өгүүлбэр → However."},
      {q:"so:", parts:["We were tired, ", " we went home."], opts:["so","because"], a:0, fix:"Үр дүн → so."},
      {q:"although:", parts:["", " I was afraid, I tried it."], opts:["Although","However"], a:0, fix:"Нэг өгүүлбэрт → Although."}
    ],
    speak:{ scene:'Түүх өгүүлэх', turns:[
      {ruby:"How was your camping trip?", pron:"хау воз ёр кэмпинг трип?", mn:"Отгийн аялал ямар байсан бэ?",
        choices:[{t:"Although it was raining, we had a great time!",best:true,mn:"Бороо орж байсан ч гайхалтай өнгөрсөн!"},{t:"Although it was raining, but we had great time.",best:false,fix:"Although-тай бол BUT ✗."}]},
      {ruby:"Really? Wasn't it cold?", pron:"риали? вознт ит коулд?", mn:"Үнэхээр үү? Хүйтэн байгаагүй юу?",
        choices:[{t:"It was very cold. However, the view was amazing.",best:true,mn:"Их хүйтэн байлаа. Гэвч үзэмж нь гайхалтай байсан."},{t:"Very cold. However the view amazing.",best:false,fix:"However, the view WAS amazing."}]},
      {ruby:"What did you do in the evening?", pron:"вот дид ю ду ин зэ ийвнинг?", mn:"Орой юу хийсэн бэ?",
        choices:[{t:"We were tired, so we went to bed early.",best:true,mn:"Ядарсан тул эрт унтсан."},{t:"We tired, so we go bed early.",best:false,fix:"We WERE tired, so we WENT to bed."}]}
    ]}
  },
  {
    id:'a2m1l10', title:"1.10 Модулийн төсөл", level:"A2 · М1",
    blurb:"🏆 Мартагдашгүй өдрөө өгүүлэх",
    rule:{
      h:"Давтлага: A2 Модуль 1-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 1-ийн мэдлэгээ нэгтгэж, жинхэнэ өгүүлэмж бүтээх.<br><br>
        <b>Модуль 1-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">was/were + -ing (Past Continuous)</span><span class="tag">used to / Did you use to?</span><span class="tag">taught · wrote · sang (онцгой V2)</span><span class="tag">was cooking WHEN he called</span><span class="tag">while + урт · when + богино · during + нэр үг</span><span class="tag">was born / was written (идэвхгүй)</span><span class="tag">after eating · as soon as</span><span class="tag">Who called? ⟷ Who did you call?</span><span class="tag">although / however / so</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Мартагдашгүй өдөр (15+ өгүүлбэр):</b> Бүх шинэ дүрмээ ашигла! Жишээ:<br>
        <i>I want to tell you about an unforgettable day. It was summer 2019. We used to go to the countryside every year, but that trip was special. It was early morning and the sun was shining. While we were driving, my son suddenly noticed a small dog by the road. As soon as we stopped, it ran to us! Although we were far from home, we decided to take it. The dog was given a name — Bolt. He was found on the road, but now he is part of our family. It was a lucky day. However, my husband still says I am crazy!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өгүүлэмжийн 3 давхар: <b>Дэвсгэр</b> (was shining, were driving) → <b>Үйл явдал</b> (noticed, stopped, ran) → <b>Холбоос</b> (while, as soon as, although).</p>`
    },
    phrases:[
      {en:"We used to go to the countryside every summer.", pron:"ви юзд ту гоу ту зэ кантрисайд эври саммэр.", mn:"Бид зун бүр хөдөө явдаг байсан."},
      {en:"While we were driving, my son noticed a dog.", pron:"вайл ви вөр драйвинг, май сан ноутист э дог.", mn:"Бид жолоодож явахад хүү маань нохой анзаарсан."},
      {en:"As soon as we stopped, it ran to us.", pron:"эз сүн эз ви стопт, ит рэн ту ас.", mn:"Бид зогсмогц тэр бидэн рүү гүйж ирсэн."},
      {en:"Although we were far from home, we took it.", pron:"олзоу ви вөр фар фром хоум, ви түк ит.", mn:"Гэрээсээ хол байсан ч бид авсан."},
      {en:"He was found on the road, but now he is family.", pron:"хи воз фаунд он зэ роуд, бат нау хи из фэмили.", mn:"Түүнийг замаас олсон ч одоо гэр бүлийн маань гишүүн."}
    ],
    exercises:[
      {q:"Давтлага (PC):", parts:["While we ", " , he called."], opts:["were driving","drove"], a:0, fix:"Урт үйлдэл → were driving."},
      {q:"Давтлага (used to):", parts:["Did you ", " live there?"], opts:["use to","used to"], a:0, fix:"did гарвал → use to."},
      {q:"Давтлага (идэвхгүй):", parts:["The dog was ", " on the road."], opts:["found","find"], a:0, fix:"was + V3 → found."},
      {q:"Давтлага (эзэн асуулт):", parts:["Who ", " the dog?"], opts:["found","did find"], a:0, fix:"Эзэн асуулт → Who found? (did ✗)"}
    ],
    speak:{ scene:'🏆 Төсөл: Мартагдашгүй өдөр', turns:[
      {ruby:"Tell me about an unforgettable day in your life!", pron:"тэл ми эбаут эн анфоргетэбл дэй ин ёр лайф!", mn:"Амьдралынхаа мартагдашгүй өдрийн тухай яриач!",
        choices:[{t:"It was summer 2019. We used to go to the countryside every year.",best:true,mn:"2019 оны зун байлаа. Бид жил бүр хөдөө явдаг байсан."},{t:"Summer 2019. We use to go countryside.",best:false,fix:"It WAS summer... We USED TO go TO THE countryside."}]},
      {ruby:"What happened that day?", pron:"вот хэпэнд зэт дэй?", mn:"Тэр өдөр юу болов?",
        choices:[{t:"While we were driving, my son noticed a small dog by the road.",best:true,mn:"Бид жолоодож явахад хүү маань замын хажууд жижиг нохой анзаарсан."},{t:"While we drove, my son was noticing a dog.",best:false,fix:"Урт=WERE DRIVING, богино=NOTICED."}]},
      {ruby:"What did you do?", pron:"вот дид ю ду?", mn:"Та юу хийсэн бэ?",
        choices:[{t:"Although we were far from home, we took him. He was given a name — Bolt!",best:true,mn:"Гэрээсээ хол байсан ч бид авсан. Түүнд Болт гэж нэр өгсөн!"},{t:"Although we were far, but we took. He was gave a name.",best:false,fix:"Although-тай бол BUT ✗. was GIVEN (V3)."}]}
    ]}
  },
  {
    id:'a2m2l1', title:"2.1 Буудал захиалах", level:"A2 · М2",
    blurb:"Could you tell me...? — эелдэг шууд бус асуулт ⭐",
    rule:{
      h:"Зорилго ба дүрэм: indirect questions (эелдэг асуулт)",
      html:`<b>🎯 Зорилго:</b> ⭐ Танихгүй хүнээс маш эелдэг асуух — зочид буудал, албан газарт зайлшгүй.<br><br>
        <b>Алтан дүрэм:</b> эелдэг эхлэл нэмэхэд дотоод асуулт нь <b>ЭНГИЙН ӨГҮҮЛБЭР</b> болно!
        <div style="margin:12px 0"><span class="tag">Шууд: Where IS the lift?</span><span class="tag">Эелдэг: Could you tell me where the lift IS?</span></div>
        Анхаар: <b>is</b> ард орсон, <b>do/does/did</b> алга болсон:
        <div style="margin:12px 0"><span class="tag">What time does it start? → Could you tell me what time it STARTS?</span></div>
        <b>Yes/No асуулт бол «if» эсвэл «whether»:</b>
        <div style="margin:12px 0"><span class="tag">Do you have a room? → Could you tell me IF you have a room?</span></div>
        <b>Эелдэг эхлэлүүд:</b> Could you tell me...? · Do you know...? · I'd like to know...
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        book /bʊk/ — захиалах · reservation /ˌrezərˈveɪʃn/ — захиалга · available /əˈveɪləbl/ — сул байгаа<br>
        single room /ˈsɪŋɡl ruːm/ — нэг хүний өрөө · double room /ˈdʌbl ruːm/ — хоёр хүний өрөө · night /naɪt/ — хоног<br>
        check in /tʃek ɪn/ — бүртгүүлэх · check out /tʃek aʊt/ — гарах · reception /rɪˈsepʃn/ — хүлээн авах<br>
        lift /lɪft/ — цахилгаан шат · included /ɪnˈkluːdɪd/ — багтсан · confirm /kənˈfɜːrm/ — баталгаажуулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Could you tell me where IS the lift?» ✗ — эелдэг асуултад дараалал эргэхгүй: <b>where the lift IS</b> ✓. Мөн «Do you know what time does it start?» ✗ → <b>what time it starts</b> ✓ (does хасагдана!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Эелдэг болгоход асуулт нь ЭНГИЙН болно» — is/does урагшлахаа болино.</p>`
    },
    phrases:[
      {en:"I'd like to book a room for two nights.", pron:"айд лайк ту бүк э рум фор ту найтс.", mn:"Хоёр хоногийн өрөө захиалмаар байна."},
      {en:"Could you tell me if you have a double room?", pron:"күд ю тэл ми иф ю хэв э дабл рум?", mn:"Хоёр хүний өрөө байгаа эсэхийг хэлж өгөхгүй юу?"},
      {en:"Do you know what time breakfast starts?", pron:"ду ю ноу вот тайм брэкфаст стартс?", mn:"Өглөөний хоол хэдэн цагт эхэлдгийг мэдэх үү?"},
      {en:"Could you tell me where the lift is?", pron:"күд ю тэл ми вэр зэ лифт из?", mn:"Цахилгаан шат хаана байгааг хэлж өгөхгүй юу?"},
      {en:"Is breakfast included in the price?", pron:"из брэкфаст инклүдид ин зэ прайс?", mn:"Өглөөний хоол үнэд багтсан уу?"}
    ],
    exercises:[
      {q:"Дараалал:", parts:["Could you tell me where ", "?"], opts:["the lift is","is the lift"], a:0, fix:"Эелдэг → энгийн дараалал: where the lift IS."},
      {q:"does хасагдана:", parts:["Do you know what time ", "?"], opts:["it starts","does it start"], a:0, fix:"Эелдэг → what time it STARTS."},
      {q:"Yes/No асуулт:", parts:["Could you tell me ", " you have a room?"], opts:["if","that"], a:0, fix:"Yes/No → if."},
      {q:"Эелдэг:", parts:["", " tell me where the reception is?"], opts:["Could you","Do you"], a:0, fix:"Хамгийн эелдэг → Could you tell me...?"}
    ],
    speak:{ scene:'Зочид буудалд', turns:[
      {ruby:"Good evening! How can I help you?", pron:"гүд ийвнинг! хау кэн ай хэлп ю?", mn:"Оройн мэнд! Танд юугаар туслах вэ?",
        choices:[{t:"I'd like to book a room for two nights, please.",best:true,mn:"Хоёр хоногийн өрөө захиалмаар байна."},{t:"I want room two nights.",best:false,fix:"Эелдэг: I'd like TO BOOK A room FOR two nights."}]},
      {ruby:"Of course. Single or double?", pron:"ов корс. сингл ор дабл?", mn:"Мэдээж. Нэг хүний үү, хоёр хүний үү?",
        choices:[{t:"Double, please. Could you tell me if breakfast is included?",best:true,mn:"Хоёр хүний. Өглөөний хоол багтсан эсэхийг хэлж өгөхгүй юу?"},{t:"Double. Could you tell me is breakfast included?",best:false,fix:"Yes/No → tell me IF breakfast IS included."}]},
      {ruby:"Yes, it is. Breakfast is served from seven.", pron:"ес, ит из. брэкфаст из сөрвд фром сэвн.", mn:"Тийм. Өглөөний хоол 7 цагаас эхэлнэ.",
        choices:[{t:"Great. Do you know where the lift is?",best:true,mn:"Гоё. Цахилгаан шат хаана байгааг мэдэх үү?"},{t:"Great. Do you know where is the lift?",best:false,fix:"Эелдэг → where the lift IS."}]}
    ]}
  },
  {
    id:'a2m2l2', title:"2.2 Нисэх буудал", level:"A2 · М2",
    blurb:"I've just arrived — Present Perfect ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect (just / already / yet)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ A2-ийн ХАМГИЙН чухал дүрэм! Монгол хэлэнд ижил цаг байхгүй тул анхаарч сур.<br><br>
        <b>have/has + V3</b> = өнгөрсөнд болсон ч <b>ОДООТОЙ ХОЛБООТОЙ</b>:
        <div style="margin:12px 0"><span class="tag">I / You / We / They + HAVE + V3</span><span class="tag">He / She / It + HAS + V3</span><span class="tag">Богино: I've, he's, we've</span></div>
        <b>3 дагалдах үг (энэ хичээлийн гол!):</b>
        <div style="margin:12px 0"><span class="tag">just = дөнгөж сая: I've just arrived.</span><span class="tag">already = аль хэдийн: I've already checked in.</span><span class="tag">yet = хараахан (үгүйсгэл/асуултад, ТӨГСГӨЛД): I haven't packed yet. / Have you packed yet?</span></div>
        <b>Байрлал:</b> just/already нь have-ийн АРД, yet нь өгүүлбэрийн ТӨГСГӨЛД.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        arrive /əˈraɪv/ — ирэх (arrived) · pack /pæk/ — ачаа боох (packed) · board /bɔːrd/ — онгоцонд сууx<br>
        gate /ɡeɪt/ — гарц · delay /dɪˈleɪ/ — саатал · departure /dɪˈpɑːrtʃər/ — хөдөлгөөн<br>
        arrival /əˈraɪvl/ — ирэлт · security /sɪˈkjʊrəti/ — аюулгүй байдал · customs /ˈkʌstəmz/ — гааль<br>
        just /dʒʌst/ — дөнгөж · already /ɔːlˈredi/ — аль хэдийн · yet /jet/ — хараахан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I have arrive» ✗ → V3 хэрэгтэй: <b>I have ARRIVED</b>. «She have gone» ✗ → <b>She HAS gone</b>. Мөн «I haven't packed already» ✗ → үгүйсгэлд <b>yet</b>: I haven't packed YET ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сая болсон, үр дүн нь ОДОО мэдрэгдэж байвал → HAVE + V3» (I've just arrived = одоо энд байна).</p>`
    },
    phrases:[
      {en:"I've just arrived at the airport.", pron:"айв жаст эрайвд эт зэ эрпорт.", mn:"Би дөнгөж сая нисэх буудалд ирлээ."},
      {en:"Have you checked in yet?", pron:"хэв ю чэкт ин ет?", mn:"Бүртгүүлчихсэн үү?"},
      {en:"No, I haven't checked in yet.", pron:"ноу, ай хэвнт чэкт ин ет.", mn:"Үгүй, хараахан бүртгүүлээгүй."},
      {en:"She has already found the gate.", pron:"ши хэз олрэди фаунд зэ гэйт.", mn:"Тэр гарцаа аль хэдийн олчихсон."},
      {en:"Our flight has been delayed.", pron:"ауэр флайт хэз бийн дилэйд.", mn:"Манай нислэг саатсан байна."}
    ],
    exercises:[
      {q:"have/has:", parts:["She ", " already arrived."], opts:["has","have"], a:0, fix:"She → has."},
      {q:"V3 хэлбэр:", parts:["I have ", " at the airport."], opts:["arrived","arrive"], a:0, fix:"have + V3 → arrived."},
      {q:"yet:", parts:["I haven't packed ", "."], opts:["yet","already"], a:0, fix:"Үгүйсгэл → yet (төгсгөлд)."},
      {q:"Байрлал:", parts:["I've ", " arrived."], opts:["just","yet"], a:0, fix:"Сая → have-ийн ард just."}
    ],
    speak:{ scene:'Нисэх буудлаас залгах', turns:[
      {ruby:"Where are you? Are you at the airport?", pron:"вэр а ю? а ю эт зэ эрпорт?", mn:"Хаана байна? Нисэх буудал дээр үү?",
        choices:[{t:"Yes, I've just arrived.",best:true,mn:"Тийм, дөнгөж сая ирлээ."},{t:"Yes, I have just arrive.",best:false,fix:"have + V3 → I've just ARRIVED."}]},
      {ruby:"Have you checked in yet?", pron:"хэв ю чэкт ин ет?", mn:"Бүртгүүлчихсэн үү?",
        choices:[{t:"No, I haven't checked in yet. There's a long queue!",best:true,mn:"Үгүй, хараахан үгүй. Урт дараалалтай байна!"},{t:"No, I haven't checked in already.",best:false,fix:"Үгүйсгэлд → YET."}]},
      {ruby:"And your friend?", pron:"энд ёр фрэнд?", mn:"Найз тань?",
        choices:[{t:"She has already found the gate. She's faster than me!",best:true,mn:"Тэр аль хэдийн гарцаа олчихсон. Надаас хурдан!"},{t:"She have already find the gate.",best:false,fix:"She HAS already FOUND."}]}
    ]}
  },
  {
    id:'a2m2l3', title:"2.3 Аяллын хэрэгсэл", level:"A2 · М2",
    blurb:"need to take / enjoy travelling — to ⟷ -ing ⭐",
    rule:{
      h:"Зорилго ба дүрэм: үйл үг + to ⟷ үйл үг + -ing",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр үйл үг дараалахад аль нь <b>to</b>, аль нь <b>-ing</b> вэ — цээжлэх л хэрэгтэй!<br><br>
        <b>TO + үйл үг авдаг (төлөвлөгөө, хүсэл):</b>
        <div style="margin:12px 0"><span class="tag">want to · need to · decide to · hope to · would like to · plan to · forget to · learn to</span></div>
        <b>-ING авдаг (мэдрэмж, туршлага):</b>
        <div style="margin:12px 0"><span class="tag">enjoy · finish · avoid · practise · mind · suggest · miss</span></div>
        <b>Хоёулаа болно (утга ойролцоо):</b> like, love, hate, start, begin, prefer.
        <div style="margin:12px 0"><span class="tag">I like travelling. ✓ = I like to travel. ✓</span></div>
        <b>Угтварын дараа ҮРГЭЛЖ -ing:</b> good at travelling, before leaving, instead of flying.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        suitcase /ˈsuːtkeɪs/ — чемодан · backpack /ˈbækpæk/ — үүргэвч · charger /ˈtʃɑːrdʒər/ — цэнэглэгч<br>
        adapter /əˈdæptər/ — залгуур · towel /ˈtaʊəl/ — алчуур · sunscreen /ˈsʌnskriːn/ — нарнаас хамгаалах тос<br>
        insurance /ɪnˈʃʊrəns/ — даатгал · document /ˈdɒkjumənt/ — бичиг баримт · avoid /əˈvɔɪd/ — зайлсхийх<br>
        enjoy /ɪnˈdʒɔɪ/ — таашаах · decide /dɪˈsaɪd/ — шийдэх · suggest /səˈdʒest/ — санал болгох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I enjoy to travel» ✗ → <b>I enjoy travellING</b>. «I want travelling» ✗ → <b>I want TO travel</b>. Мөн «I suggest to go» ✗ → <b>I suggest goING</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Толгойд төлөвлөж байвал TO (want to, plan to) · Зүрхээр мэдэрч байвал -ING (enjoy, love, miss)».</p>`
    },
    phrases:[
      {en:"I need to pack my suitcase tonight.", pron:"ай нийд ту пэк май сюткэйс тунайт.", mn:"Өнөө орой чемоданаа боох хэрэгтэй."},
      {en:"I enjoy travelling by train.", pron:"ай инжой трэвлинг бай трэйн.", mn:"Би галт тэргээр аялах дуртай."},
      {en:"Don't forget to take your charger!", pron:"доунт форгет ту тэйк ёр чаржэр!", mn:"Цэнэглэгчээ авахаа бүү мартаарай!"},
      {en:"I suggest booking the hotel early.", pron:"ай сэгжэст букинг зэ хоутэл өрли.", mn:"Зочид буудлаа эрт захиалахыг санал болгож байна."},
      {en:"We decided to buy travel insurance.", pron:"ви дисайдид ту бай трэвл иншүрэнс.", mn:"Бид аяллын даатгал авахаар шийдсэн."}
    ],
    exercises:[
      {q:"to/-ing:", parts:["I enjoy ", " by train."], opts:["travelling","to travel"], a:0, fix:"enjoy + -ing → travelling."},
      {q:"to/-ing:", parts:["I need ", " my bag."], opts:["to pack","packing"], a:0, fix:"need + to → to pack."},
      {q:"to/-ing:", parts:["I suggest ", " early."], opts:["booking","to book"], a:0, fix:"suggest + -ing → booking."},
      {q:"Угтварын дараа:", parts:["Before ", ", check your passport."], opts:["leaving","to leave"], a:0, fix:"Угтвар → -ing: leaving."}
    ],
    speak:{ scene:'Ачаа бэлдэх', turns:[
      {ruby:"Have you packed yet?", pron:"хэв ю пэкт ет?", mn:"Ачаагаа боочихсон уу?",
        choices:[{t:"Not yet. I need to pack tonight.",best:true,mn:"Хараахан үгүй. Өнөө орой боох хэрэгтэй."},{t:"Not yet. I need packing tonight.",best:false,fix:"need + TO pack."}]},
      {ruby:"Don't forget your charger and adapter!", pron:"доунт форгет ёр чаржэр энд эдэптэр!", mn:"Цэнэглэгч, залгуураа бүү мартаарай!",
        choices:[{t:"Thanks! I always forget to take the adapter.",best:true,mn:"Баярлалаа! Би үргэлж залгуураа авахаа мартдаг."},{t:"Thanks! I always forget taking adapter.",best:false,fix:"forget + TO take (мартаж хийгээгүй)."}]},
      {ruby:"Do you like flying?", pron:"ду ю лайк флайинг?", mn:"Онгоцоор нисэх дуртай юу?",
        choices:[{t:"Not really. I enjoy travelling by train more.",best:true,mn:"Тийм ч биш. Галт тэргээр аялах илүү дуртай."},{t:"Not really. I enjoy to travel by train.",best:false,fix:"enjoy + travellING."}]}
    ]}
  },
  {
    id:'a2m2l4', title:"2.4 Чиглэл", level:"A2 · М2",
    blurb:"It might be far — may / might",
    rule:{
      h:"Зорилго ба дүрэм: may / might (магадлал)",
      html:`<b>🎯 Зорилго:</b> Итгэлгүй байхдаа зөв илэрхийлэх.<br><br>
        <b>may / might + үйл үг</b> = магадгүй (50/50):
        <div style="margin:12px 0"><span class="tag">It might be far. = Хол байж магадгүй.</span><span class="tag">We may take a taxi. = Такси барьж магадгүй.</span></div>
        <b>Итгэлийн шат:</b>
        <div style="margin:12px 0"><span class="tag">100% will: It will rain.</span><span class="tag">50% may/might: It might rain.</span><span class="tag">0% won't: It won't rain.</span></div>
        <b>Үгүйсгэл:</b> may not / might not (mightn't ховор).<br>
        <b>Анхаар:</b> may нь «зөвшөөрөл» утгатай ч байдаг: <i>May I come in?</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        direction /dəˈrekʃn/ — чиглэл · map /mæp/ — газрын зураг · route /ruːt/ — маршрут<br>
        distance /ˈdɪstəns/ — зай · signpost /ˈsaɪnpoʊst/ — тэмдэг · roundabout /ˈraʊndəbaʊt/ — тойрог<br>
        crossroads /ˈkrɒsroʊdz/ — уулзвар · nearby /ˌnɪrˈbaɪ/ — ойролцоо · reach /riːtʃ/ — хүрэх<br>
        maybe /ˈmeɪbi/ — магадгүй · perhaps /pərˈhæps/ — магадгүй · certain /ˈsɜːrtn/ — итгэлтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It might to be far» ✗ → may/might-ийн ард to байхгүй: <b>might be</b>. «It mights» ✗ — хувирдаггүй. Мөн «maybe» (нэг үг, дайвар) ⟷ «may be» (хоёр үг, үйл үг) — андуурч болохгүй: <i>Maybe it is far</i> = <i>It may be far</i>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MAY/MIGHT = 50% · to-гүй · хувирдаггүй» — might be, may take.</p>`
    },
    phrases:[
      {en:"It might be far from here.", pron:"ит майт би фар фром хийр.", mn:"Эндээс хол байж магадгүй."},
      {en:"We may take a taxi instead.", pron:"ви мэй тэйк э тэкси инстэд.", mn:"Оронд нь такси барьж магадгүй."},
      {en:"Turn left at the roundabout.", pron:"төрн лефт эт зэ раундэбаут.", mn:"Тойрог дээр зүүн тийш эргэ."},
      {en:"It might not be open today.", pron:"ит майт нот би оупэн тудэй.", mn:"Өнөөдөр нээлттэй биш байж магадгүй."},
      {en:"Maybe we should look at the map.", pron:"мэйби ви шүд лүк эт зэ мэп.", mn:"Магадгүй газрын зургаа харах хэрэгтэй."}
    ],
    exercises:[
      {q:"to хэрэгтэй юу:", parts:["It might ", " far."], opts:["be","to be"], a:0, fix:"might + нүцгэн → might be."},
      {q:"Хувирах уу:", parts:["She ", " come later."], opts:["might","mights"], a:0, fix:"might хувирдаггүй."},
      {q:"Үгүйсгэл:", parts:["It ", " be open today."], opts:["might not","doesn't might"], a:0, fix:"Үгүйсгэл → might not."},
      {q:"maybe/may be:", parts:["", " it is far. (дайвар)"], opts:["Maybe","May be"], a:0, fix:"Өгүүлбэрийн эхэнд дайвар → Maybe."}
    ],
    speak:{ scene:'Замаа олох', turns:[
      {ruby:"Is the museum near here?", pron:"из зэ мьюзиэм нийр хийр?", mn:"Музей энэ ойролцоо юу?",
        choices:[{t:"I'm not sure. It might be far.",best:true,mn:"Мэдэхгүй ээ. Хол байж магадгүй."},{t:"I'm not sure. It mights be far.",best:false,fix:"might хувирдаггүй → It MIGHT be far."}]},
      {ruby:"Should we walk or take a taxi?", pron:"шүд ви вок ор тэйк э тэкси?", mn:"Алхах уу, такси барих уу?",
        choices:[{t:"Let's check the map. We may take a taxi.",best:true,mn:"Газрын зургаа харъя. Такси барьж магадгүй."},{t:"Check map. We may to take taxi.",best:false,fix:"may TAKE (to ✗)."}]},
      {ruby:"Look, it's only 15 minutes on foot!", pron:"лүк, итс оунли фифтийн минитс он фүт!", mn:"Хараач, явганаар ердөө 15 минут!",
        choices:[{t:"Perfect! But it might rain — take an umbrella.",best:true,mn:"Сайхан! Гэхдээ бороо орж магадгүй — шүхэр ав."},{t:"Perfect! But maybe rain.",best:false,fix:"Бүтэн: it MIGHT rain."}]}
    ]}
  },
  {
    id:'a2m2l5', title:"2.5 Аяллын асуудал", level:"A2 · М2",
    blurb:"I had to wait / I couldn't find — өнгөрсний ёстой ⭐",
    rule:{
      h:"Зорилго ба дүрэм: had to / couldn't (өнгөрсөн)",
      html:`<b>🎯 Зорилго:</b> ⭐ Аяллын асуудлаа өгүүлэх — өнгөрсөнд ЮУ ХИЙХ ЁСТОЙ БОЛСОН, ЮУГ ЧАДААГҮЙ.<br><br>
        <b>Одоо → Өнгөрсөн:</b>
        <div style="margin:12px 0"><span class="tag">have to → HAD TO (ёстой болсон)</span><span class="tag">must → HAD TO (must-д өнгөрсөн хэлбэр байхгүй!)</span><span class="tag">can → COULD / couldn't (чадсан / чадаагүй)</span></div>
        <b>Асуулт / үгүйсгэл:</b> did/didn't-тэй!
        <div style="margin:12px 0"><span class="tag">Did you have to wait? (had ✗)</span><span class="tag">I didn't have to pay. (шаардлагагүй байсан)</span></div>
        <b>Анхаар:</b> «I musted» гэж ХЭЗЭЭ Ч байдаггүй → <b>I had to</b>.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        problem /ˈprɒbləm/ — асуудал · cancel /ˈkænsl/ — цуцлах · miss /mɪs/ — хоцрох<br>
        queue /kjuː/ — дараалал · complain /kəmˈpleɪn/ — гомдоллох · refund /ˈriːfʌnd/ — мөнгө буцаалт<br>
        broken /ˈbroʊkən/ — эвдэрсэн · stuck /stʌk/ — гацсан · wrong /rɒŋ/ — буруу<br>
        lucky /ˈlʌki/ — азтай · terrible /ˈterəbl/ — аймшигтай · solve /sɒlv/ — шийдэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I musted wait» ✗ → <b>I HAD TO wait</b>. «Did you had to wait?» ✗ → did гарвал <b>have to</b>: Did you HAVE TO wait? ✓ Мөн «I couldn't to find» ✗ → <b>couldn't find</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «must-д өнгөрсөн байхгүй → HAD TO. DID гарвал HAVE to (had ✗)».</p>`
    },
    phrases:[
      {en:"Our flight was cancelled, so we had to wait.", pron:"ауэр флайт воз кэнсэлд, соу ви хэд ту вэйт.", mn:"Манай нислэг цуцлагдсан тул хүлээх болсон."},
      {en:"I couldn't find my luggage anywhere.", pron:"ай күднт файнд май лагиж эниwэр.", mn:"Ачаагаа хаанаас ч олж чадаагүй."},
      {en:"Did you have to pay extra?", pron:"дид ю хэв ту пэй экстра?", mn:"Нэмэлт төлөх болсон уу?"},
      {en:"Luckily, we didn't have to change hotels.", pron:"лакили, ви диднт хэв ту чэйнж хоутэлз.", mn:"Азаар зочид буудлаа солих шаардлагагүй байсан."},
      {en:"We had to queue for two hours!", pron:"ви хэд ту кью фор ту ауэрз!", mn:"Бид хоёр цаг дараалахад хүрсэн!"}
    ],
    exercises:[
      {q:"Өнгөрсөн:", parts:["We ", " wait for two hours."], opts:["had to","musted"], a:0, fix:"must-д өнгөрсөн байхгүй → had to."},
      {q:"Асуулт:", parts:["Did you ", " pay extra?"], opts:["have to","had to"], a:0, fix:"did гарвал → have to."},
      {q:"Чадаагүй:", parts:["I ", " find my bag."], opts:["couldn't","can't"], a:0, fix:"Өнгөрсөн → couldn't."},
      {q:"to хэрэгтэй юу:", parts:["I couldn't ", " it."], opts:["find","to find"], a:0, fix:"couldn't + нүцгэн → find."}
    ],
    speak:{ scene:'Аяллын гомдол', turns:[
      {ruby:"How was your trip? Any problems?", pron:"хау воз ёр трип? эни проблэмз?", mn:"Аялал ямар байсан бэ? Асуудал гарсан уу?",
        choices:[{t:"Terrible! Our flight was cancelled, so we had to wait all night.",best:true,mn:"Аймшигтай! Нислэг цуцлагдаж, шөнөжин хүлээх болсон."},{t:"Terrible! Flight cancelled, we musted wait.",best:false,fix:"must-д өнгөрсөн байхгүй → we HAD TO wait."}]},
      {ruby:"Oh no! Did you have to pay for a hotel?", pron:"оу ноу! дид ю хэв ту пэй фор э хоутэл?", mn:"Өө! Зочид буудлын мөнгө төлөх болсон уу?",
        choices:[{t:"Luckily not. We didn't have to pay anything.",best:true,mn:"Азаар үгүй. Юу ч төлөх шаардлагагүй байсан."},{t:"Luckily not. We didn't had to pay.",best:false,fix:"didn't гарвал → didn't HAVE to."}]},
      {ruby:"And your luggage?", pron:"энд ёр лагиж?", mn:"Ачаа тань?",
        choices:[{t:"I couldn't find it for two days! But I got it in the end.",best:true,mn:"Хоёр өдөр олж чадаагүй! Гэхдээ эцэст нь авсан."},{t:"I can't find it two days.",best:false,fix:"Өнгөрсөн → I COULDN'T find it."}]}
    ]}
  },
  {
    id:'a2m2l6', title:"2.6 Жуулчны газар", level:"A2 · М2",
    blurb:"Have you ever been to...? — ever / never ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect — ever / never, been ⟷ gone",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ АМЬДРАЛЫН ТУРШЛАГА ярих — хэзээ болсон нь ХАМААГҮЙ!<br><br>
        <b>Have you ever + V3?</b> = хэзээ нэгэн цагт ...сан уу?
        <div style="margin:12px 0"><span class="tag">Have you ever been to Kharkhorin?</span><span class="tag">— Yes, I have. / No, I never have. / No, I haven't.</span></div>
        <b>never = хэзээ ч ...аагүй</b> (аль хэдийн үгүйсгэсэн, not хэрэггүй!):
        <div style="margin:12px 0"><span class="tag">I have never been to Japan. ✓</span><span class="tag">I haven't never been ✗</span></div>
        <b>been ⟷ gone (ЧУХАЛ ЯЛГАА!):</b>
        <div style="margin:12px 0"><span class="tag">He has BEEN to Paris. = очоод БУЦАЖ ирсэн (одоо энд байна)</span><span class="tag">He has GONE to Paris. = очсон, ОДОО ТЭНД байна (энд алга)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        tourist /ˈtʊrɪst/ — жуулчин · sight /saɪt/ — үзвэр · monument /ˈmɒnjumənt/ — хөшөө<br>
        museum /mjuˈziːəm/ — музей · gallery /ˈɡæləri/ — галерей · palace /ˈpæləs/ — ордон<br>
        ruins /ˈruːɪnz/ — балгас · desert /ˈdezərt/ — цөл · valley /ˈvæli/ — хөндий<br>
        visit /ˈvɪzɪt/ — очих · explore /ɪkˈsplɔːr/ — судлах · ever /ˈevər/ — хэзээ нэгэн цагт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Have you ever went?» ✗ → V3 хэрэгтэй: <b>Have you ever BEEN?</b> Мөн «I have never been TO Japan» — <b>to</b> заавал! «been in Japan» ✗ (энэ бол «Японд байсан» гэсэн өөр утга).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BEEN = очоод ирсэн (энд байна) · GONE = очоод хараахан ирээгүй (тэнд байна)».</p>`
    },
    phrases:[
      {en:"Have you ever been to Kharkhorin?", pron:"хэв ю эвэр бийн ту Хархорин?", mn:"Та хэзээ нэгэн цагт Хархорин очиж байсан уу?"},
      {en:"Yes, I have. I went there last year.", pron:"ес, ай хэв. ай вэнт зэр ласт йир.", mn:"Тийм. Өнгөрсөн жил очсон."},
      {en:"I have never been to the Gobi desert.", pron:"ай хэв нэвэр бийн ту зэ Гоби дэзэрт.", mn:"Би Говь цөлд хэзээ ч очиж үзээгүй."},
      {en:"She has gone to the museum — she's still there.", pron:"ши хэз гон ту зэ мьюзиэм — шиз стил зэр.", mn:"Тэр музей руу явчихсан — одоо ч тэнд байгаа."},
      {en:"We have visited many beautiful places.", pron:"ви хэв визитид мэни бьютифул плэйсиз.", mn:"Бид олон үзэсгэлэнтэй газраар явсан."}
    ],
    exercises:[
      {q:"V3 хэлбэр:", parts:["Have you ever ", " to Japan?"], opts:["been","went"], a:0, fix:"have + V3 → been."},
      {q:"never:", parts:["I have ", " been there."], opts:["never","not never"], a:0, fix:"never дангаараа үгүйсгэнэ."},
      {q:"been/gone:", parts:["He has ", " to Paris — he's back now."], opts:["been","gone"], a:0, fix:"Буцаж ирсэн → been."},
      {q:"been/gone:", parts:["She has ", " to the shop — she's not here."], opts:["gone","been"], a:0, fix:"Одоо тэнд байгаа → gone."}
    ],
    speak:{ scene:'Аялсан газраа хуваалцах', turns:[
      {ruby:"Have you ever been to the Gobi desert?", pron:"хэв ю эвэр бийн ту зэ Гоби дэзэрт?", mn:"Та Говь цөлд очиж байсан уу?",
        choices:[{t:"No, I've never been there. But I'd love to!",best:true,mn:"Үгүй, хэзээ ч очиж үзээгүй. Гэхдээ очмоор байна!"},{t:"No, I have never went there.",best:false,fix:"have + V3 → never BEEN there."}]},
      {ruby:"What about Kharkhorin?", pron:"вот эбаут Хархорин?", mn:"Хархорин яах вэ?",
        choices:[{t:"Yes, I have! I went there with my family last year.",best:true,mn:"Тийм! Өнгөрсөн жил гэр бүлээрээ очсон."},{t:"Yes, I have been there last year.",best:false,fix:"Тодорхой цаг (last year) → I WENT there."}]},
      {ruby:"Where is your sister? I wanted to ask her about it.", pron:"вэр из ёр систэр? ай вонтид ту аск хёр эбаут ит.", mn:"Эгч тань хаана байна? Энэ тухай асуумаар байсан.",
        choices:[{t:"She has gone to the museum. She'll be back at five.",best:true,mn:"Тэр музей руу явчихсан. 5 цагт ирнэ."},{t:"She has been to the museum now.",best:false,fix:"Одоо тэнд байгаа → she has GONE."}]}
    ]}
  },
  {
    id:'a2m2l7', title:"2.7 Аяллын зөвлөгөө", level:"A2 · М2",
    blurb:"If it rains, we'll stay — 1-р нөхцөл ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: First conditional (бодит нөхцөл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Хэрэв ... бол ... болно» — бодитой ирээдүйн нөхцөл.<br><br>
        <b>Бүтэц (хамгийн чухал нь!):</b>
        <div style="margin:12px 0"><span class="tag">IF + ОДОО ЦАГ , will + үйл үг</span><span class="tag">If it RAINS, we WILL STAY at the hotel.</span></div>
        <b>⚠️ if-ийн дараа WILL ХЭРЭГЛЭДЭГГҮЙ!</b> (хэдийгээр ирээдүйг ярьж байгаа ч)
        <div style="margin:12px 0"><span class="tag">If it will rain ✗ → If it rains ✓</span></div>
        <b>Байрлал:</b> хоёр талаараа болно — if эхэлбэл ТАСЛАЛ:
        <div style="margin:12px 0"><span class="tag">If it rains, we'll stay. (таслалтай)</span><span class="tag">We'll stay if it rains. (таслалгүй)</span></div>
        <b>will-ийн оронд:</b> may/might, can, should, imperative ч болно: <i>If you go, take a map.</i>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        advice /ədˈvaɪs/ — зөвлөгөө · recommend /ˌrekəˈmend/ — зөвлөх · warn /wɔːrn/ — сануулах<br>
        careful /ˈkerfl/ — болгоомжтой · dangerous /ˈdeɪndʒərəs/ — аюултай · safe /seɪf/ — аюулгүй<br>
        cash /kæʃ/ — бэлэн мөнгө · local /ˈloʊkl/ — нутгийн · culture /ˈkʌltʃər/ — соёл<br>
        respect /rɪˈspekt/ — хүндлэх · prepare /prɪˈper/ — бэлдэх · in advance /ɪn ədˈvæns/ — урьдчилан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If it will rain» ✗ — монгол хэлний «хэрэв бороо орвол» гэдгээс ирээдүй мэт санагддаг ч англид <b>If it RAINS</b> ✓. Энэ бол A2-ийн №1 алдаа!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF талд ирээдүй байхгүй» — If + одоо цаг, WILL + үйл үг.</p>`
    },
    phrases:[
      {en:"If it rains, we'll stay at the hotel.", pron:"иф ит рэйнз, вил стэй эт зэ хоутэл.", mn:"Хэрэв бороо орвол зочид буудалдаа байна."},
      {en:"If you go to the Gobi, take a lot of water.", pron:"иф ю гоу ту зэ Гоби, тэйк э лот ов вотэр.", mn:"Хэрэв Говь явбал их ус аваарай."},
      {en:"You'll need cash if you visit small towns.", pron:"юл нийд кэш иф ю визит смол таунз.", mn:"Жижиг хотод очвол бэлэн мөнгө хэрэгтэй болно."},
      {en:"If you book in advance, it will be cheaper.", pron:"иф ю бүк ин эдванс, ит вил би чийпэр.", mn:"Урьдчилан захиалбал илүү хямд болно."},
      {en:"If you respect the local culture, people will help you.", pron:"иф ю риспэкт зэ лоукл калчэр, пийпл вил хэлп ю.", mn:"Нутгийн соёлыг хүндэлбэл хүмүүс тусална."}
    ],
    exercises:[
      {q:"if-ийн дараа:", parts:["If it ", ", we'll stay home."], opts:["rains","will rain"], a:0, fix:"if-ийн дараа will ✗ → If it rains."},
      {q:"Гол хэсэг:", parts:["If you book early, it ", " cheaper."], opts:["will be","is"], a:0, fix:"Гол хэсэгт → will be."},
      {q:"if-ийн дараа:", parts:["If you ", " there, take a map."], opts:["go","will go"], a:0, fix:"If you GO (одоо цаг)."},
      {q:"Байрлал:", parts:["We'll stay ", " it rains."], opts:["if","will if"], a:0, fix:"Хоёр дахь талд → if."}
    ],
    speak:{ scene:'Аяллын зөвлөгөө авах', turns:[
      {ruby:"I'm going to the Gobi next week. Any advice?", pron:"айм гоуинг ту зэ Гоби нэкст вийк. эни эдвайс?", mn:"Ирэх долоо хоногт Говь явна. Зөвлөгөө байна уу?",
        choices:[{t:"If you go in summer, take a lot of water!",best:true,mn:"Зун явбал их ус аваарай!"},{t:"If you will go in summer, take water.",best:false,fix:"if-ийн дараа will ✗ → If you GO."}]},
      {ruby:"Good point. What about money?", pron:"гүд пойнт. вот эбаут мани?", mn:"Зөв санаа. Мөнгө яах вэ?",
        choices:[{t:"You'll need cash if you visit small towns.",best:true,mn:"Жижиг хотод очвол бэлэн мөнгө хэрэгтэй болно."},{t:"You need cash if you will visit small towns.",best:false,fix:"if you VISIT (will ✗), YOU'LL need."}]},
      {ruby:"Thanks! Should I book the hotel now?", pron:"сэнкс! шүд ай бүк зэ хоутэл нау?", mn:"Баярлалаа! Зочид буудлаа одоо захиалах уу?",
        choices:[{t:"Yes! If you book in advance, it will be much cheaper.",best:true,mn:"Тийм! Урьдчилан захиалбал хамаагүй хямд болно."},{t:"Yes! If you will book, it cheaper.",best:false,fix:"If you BOOK..., it WILL BE cheaper."}]}
    ]}
  },
  {
    id:'a2m2l8', title:"2.8 Төлөвлөгөө", level:"A2 · М2",
    blurb:"will ⟷ going to ⟷ -ing — 3 ирээдүй ⭐",
    rule:{
      h:"Зорилго ба дүрэм: ирээдүйн 3 хэлбэрийн ялгаа",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Англид ирээдүйн 3 хэлбэр бий — аль нь хэзээ вэ?<br><br>
        <div style="margin:12px 0"><span class="tag">1) WILL — яг одоо шийдсэн / таамаглал: I think it will rain. / OK, I'll help you!</span></div>
        <div style="margin:12px 0"><span class="tag">2) GOING TO — өмнө нь ТӨЛӨВЛӨСӨН / нүдэнд харагдаж буй шинж: We're going to visit Darkhan. / Look at those clouds — it's going to rain!</span></div>
        <div style="margin:12px 0"><span class="tag">3) PRESENT CONTINUOUS — ТОВЛОЧИХСОН, цаг/газартай: We're flying at 6 a.m. tomorrow.</span></div>
        <b>Ялгааны жишээ:</b>
        <div style="margin:12px 0"><span class="tag">I'll book a hotel. (сая шийдэв)</span><span class="tag">I'm going to book a hotel. (аль хэдийн бодсон)</span><span class="tag">I'm meeting the guide at 9. (товлочихсон)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        plan /plæn/ — төлөвлөх · schedule /ˈskedʒuːl/ — хуваарь · arrange /əˈreɪndʒ/ — товлох<br>
        intend /ɪnˈtend/ — зорих · decide /dɪˈsaɪd/ — шийдэх · organize /ˈɔːrɡənaɪz/ — зохион байгуулах<br>
        depart /dɪˈpɑːrt/ — хөдлөх · return /rɪˈtɜːrn/ — буцах · stay /steɪ/ — байрлах<br>
        probably /ˈprɒbəbli/ — магадгүй · definitely /ˈdefɪnətli/ — гарцаагүй · soon /suːn/ — удахгүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Бүгдийг «will» болгох. «I will visit my parents next week» — төлөвлөсөн бол <b>I'm going to visit</b> ✓ илүү жам ёсны. Мөн «Look at the clouds — it will rain» ✗ → нүдэнд харагдаж байвал <b>it's going to rain</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сая шийдэв → WILL · Бодчихсон → GOING TO · Хуанли дээр бичсэн → -ING».</p>`
    },
    phrases:[
      {en:"We're going to visit three cities.", pron:"виэр гоуинг ту визит срий ситиз.", mn:"Бид гурван хотоор явах төлөвлөгөөтэй."},
      {en:"Our plane is leaving at six tomorrow.", pron:"ауэр плэйн из лийвинг эт сикс тумороу.", mn:"Манай онгоц маргааш 6 цагт хөдөлнө."},
      {en:"I think the weather will be good.", pron:"ай синк зэ вэзэр вил би гүд.", mn:"Цаг агаар сайхан байх болов уу гэж бодож байна."},
      {en:"Look at those clouds — it's going to rain!", pron:"лүк эт зоуз клаудз — итс гоуинг ту рэйн!", mn:"Тэр үүлсийг хараач — бороо орох гэж байна!"},
      {en:"We're meeting the guide at nine.", pron:"виэр мийтинг зэ гайд эт найн.", mn:"Бид хөтөчтэй 9 цагт уулзана."}
    ],
    exercises:[
      {q:"Төлөвлөсөн:", parts:["We ", " visit Darkhan next month."], opts:["are going to","will"], a:0, fix:"Өмнө төлөвлөсөн → are going to."},
      {q:"Нүдэнд харагдав:", parts:["Look at the clouds! It ", " rain."], opts:["is going to","will"], a:0, fix:"Шинж харагдав → is going to."},
      {q:"Сая шийдэв:", parts:["The bag is heavy. — OK, I ", " help you!"], opts:["will","am going to"], a:0, fix:"Яг одоо шийдэв → I'll help."},
      {q:"Товлочихсон:", parts:["Our plane ", " at six tomorrow."], opts:["is leaving","will leave"], a:0, fix:"Хуваарьтай → is leaving."}
    ],
    speak:{ scene:'Аяллын төлөвлөгөө', turns:[
      {ruby:"What are your plans for the holiday?", pron:"вот а ёр плэнз фор зэ холидэй?", mn:"Амралтын төлөвлөгөө тань юу вэ?",
        choices:[{t:"We're going to visit three cities in the west.",best:true,mn:"Баруун зүгийн гурван хотоор явах төлөвлөгөөтэй."},{t:"We will visit three cities.",best:false,fix:"Төлөвлөсөн бол → We're GOING TO visit."}]},
      {ruby:"Nice! When do you leave?", pron:"найс! вэн ду ю лийв?", mn:"Хэзээ хөдлөх вэ?",
        choices:[{t:"Our plane is leaving at six tomorrow morning.",best:true,mn:"Манай онгоц маргааш өглөө 6 цагт хөдөлнө."},{t:"Our plane will leave tomorrow.",best:false,fix:"Хуваарьтай → IS LEAVING at six."}]},
      {ruby:"Take an umbrella — look at those clouds!", pron:"тэйк эн амбрэла — лүк эт зоуз клаудз!", mn:"Шүхэр ав — тэр үүлсийг хараач!",
        choices:[{t:"You're right, it's going to rain. I'll take one!",best:true,mn:"Зөв, бороо орох гэж байна. Нэгийг авъя!"},{t:"You're right, it will rain. I'm going to take one.",best:false,fix:"Шинж харагдав → IT'S GOING TO rain. Сая шийдэв → I'LL take one."}]}
    ]}
  },
  {
    id:'a2m2l9', title:"2.9 Аяллын имэйл", level:"A2 · М2",
    blurb:"I've arrived! I went... — PP ⟷ PS ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect ⟷ Past Simple",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ A2-ийн ХАМГИЙН чухал ялгаа — хоёр цагийг зөв сонгох.<br><br>
        <b>Алтан дүрэм — ТОДОРХОЙ ЦАГ бий юу?</b>
        <div style="margin:12px 0"><span class="tag">Тодорхой цаг БАЙВАЛ → Past Simple: I went there LAST YEAR / yesterday / in 2020 / two days ago</span><span class="tag">Тодорхой цаг БАЙХГҮЙ → Present Perfect: I have been there. (хэзээ нь хамаагүй)</span></div>
        <b>Тэмдэглэгээ:</b>
        <div style="margin:12px 0"><span class="tag">Present Perfect: ever, never, just, already, yet, so far, this week (үргэлжилж буй)</span><span class="tag">Past Simple: yesterday, last..., ago, in 2020, when I was young</span></div>
        <b>Имэйлийн загвар:</b> шинэ мэдээ → Present Perfect, дэлгэрэнгүй → Past Simple:
        <div style="margin:12px 0"><span class="tag">I've arrived in Paris! (мэдээ) Yesterday I visited the museum. (дэлгэрэнгүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        email /ˈiːmeɪl/ — имэйл · message /ˈmesɪdʒ/ — мессеж · postcard /ˈpoʊstkɑːrd/ — ил захидал<br>
        news /nuːz/ — мэдээ · so far /soʊ fɑːr/ — одоогоор · miss /mɪs/ — санагалзах<br>
        write back /raɪt bæk/ — хариу бичих · attach /əˈtætʃ/ — хавсаргах · greetings /ˈɡriːtɪŋz/ — мэнд<br>
        wish /wɪʃ/ — хүсэх · hear from /hɪr frɒm/ — сонсох · take care /teɪk ker/ — өөрийгөө хараарай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I have been there yesterday» ✗ — yesterday = тодорхой цаг → <b>I WENT there yesterday</b> ✓. Мөн «When have you arrived?» ✗ → When = тодорхой цаг асууж байна → <b>When DID you arrive?</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цагийн үг харагдвал PAST SIMPLE. Харагдахгүй бол PRESENT PERFECT».</p>`
    },
    phrases:[
      {en:"Hi! I've just arrived in Paris!", pron:"хай! айв жаст эрайвд ин Пэрис!", mn:"Сайн уу! Би дөнгөж сая Парист ирлээ!"},
      {en:"I have seen a lot of beautiful places so far.", pron:"ай хэв сийн э лот ов бьютифул плэйсиз соу фар.", mn:"Одоогоор олон үзэсгэлэнтэй газар үзлээ."},
      {en:"Yesterday I visited the Louvre museum.", pron:"йестэрдэй ай визитид зэ Лувр мьюзиэм.", mn:"Өчигдөр Лувр музейд очсон."},
      {en:"I haven't tried French food yet.", pron:"ай хэвнт трайд Фрэнч фүд ет.", mn:"Франц хоол хараахан амсаагүй байна."},
      {en:"I miss you! Write back soon.", pron:"ай мис ю! райт бэк сүн.", mn:"Санагалзаж байна! Удахгүй хариу бичээрэй."}
    ],
    exercises:[
      {q:"Тодорхой цаг:", parts:["I ", " there yesterday."], opts:["went","have been"], a:0, fix:"yesterday → Past Simple: went."},
      {q:"Цаг байхгүй:", parts:["I ", " to Japan. (хэзээ нь хамаагүй)"], opts:["have been","went"], a:0, fix:"Тодорхой цаггүй → have been."},
      {q:"Асуулт:", parts:["When ", " you arrive?"], opts:["did","have"], a:0, fix:"When = тодорхой цаг → did."},
      {q:"so far:", parts:["I ", " a lot of places so far."], opts:["have seen","saw"], a:0, fix:"so far → Present Perfect."}
    ],
    speak:{ scene:'Аяллаас имэйл бичих', turns:[
      {ruby:"Any news from your trip?", pron:"эни нюз фром ёр трип?", mn:"Аяллаас мэдээ байна уу?",
        choices:[{t:"Yes! I've just arrived in Paris. It's amazing!",best:true,mn:"Тийм! Дөнгөж сая Парист ирлээ. Гайхалтай!"},{t:"Yes! I just arrived in Paris now.",best:false,fix:"just → I'VE JUST arrived."}]},
      {ruby:"What did you do yesterday?", pron:"вот дид ю ду йестэрдэй?", mn:"Өчигдөр юу хийсэн бэ?",
        choices:[{t:"I visited the Louvre museum. It was huge!",best:true,mn:"Лувр музейд очсон. Асар том байсан!"},{t:"I have visited the Louvre yesterday.",best:false,fix:"yesterday → I VISITED (Past Simple)."}]},
      {ruby:"Have you tried French food?", pron:"хэв ю трайд Фрэнч фүд?", mn:"Франц хоол амссан уу?",
        choices:[{t:"Not yet! But I've seen a lot of nice restaurants.",best:true,mn:"Хараахан үгүй! Гэхдээ олон гоё ресторан харлаа."},{t:"Not yet! But I saw a lot of restaurants so far.",best:false,fix:"so far → I'VE SEEN."}]}
    ]}
  },
  {
    id:'a2m2l10', title:"2.10 Модулийн шалгалт", level:"A2 · М2",
    blurb:"🏆 Аяллын бүрэн түүх + имэйл",
    rule:{
      h:"Давтлага: A2 Модуль 2-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 2-ын мэдлэгээ нэгтгэх.<br><br>
        <b>Модуль 2-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">Could you tell me where it IS?</span><span class="tag">I've just arrived / haven't ... yet ⭐</span><span class="tag">need TO go / enjoy goING</span><span class="tag">may / might (50%)</span><span class="tag">had to / couldn't</span><span class="tag">Have you ever BEEN? · been ⟷ gone ⭐</span><span class="tag">If it rains, we'll stay ⭐</span><span class="tag">will ⟷ going to ⟷ -ing</span><span class="tag">PP ⟷ Past Simple ⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Аяллын имэйл (15+ өгүүлбэр):</b> Найздаа аяллаасаа имэйл бич! Жишээ:<br>
        <i>Hi Saraa! I've just arrived in Kharkhorin — it's beautiful! I've never been here before. The journey was terrible: our bus was cancelled, so we had to wait four hours. I couldn't find a taxi anywhere! But we're here now. Yesterday we visited the old ruins and I took a lot of photos. I haven't seen the museum yet — we're going there tomorrow. If the weather is good, we'll ride horses too! Our bus is leaving on Sunday at 8 a.m. Have you ever been to Kharkhorin? You should come! Write back soon. Take care!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Имэйлийн 4 давхар: <b>Мэдээ</b> (I've arrived) → <b>Түүх</b> (we had to wait, I went) → <b>Хараахан</b> (haven't ... yet) → <b>Төлөвлөгөө</b> (we're going, if it rains).</p>`
    },
    phrases:[
      {en:"I've just arrived in Kharkhorin!", pron:"айв жаст эрайвд ин Хархорин!", mn:"Дөнгөж сая Хархоринд ирлээ!"},
      {en:"Our bus was cancelled, so we had to wait four hours.", pron:"ауэр бас воз кэнсэлд, соу ви хэд ту вэйт фор ауэрз.", mn:"Манай автобус цуцлагдаж, 4 цаг хүлээх болсон."},
      {en:"Yesterday we visited the old ruins.", pron:"йестэрдэй ви визитид зэ оулд руинз.", mn:"Өчигдөр эртний балгас үзсэн."},
      {en:"I haven't seen the museum yet.", pron:"ай хэвнт сийн зэ мьюзиэм ет.", mn:"Музейг хараахан үзээгүй."},
      {en:"If the weather is good, we'll ride horses!", pron:"иф зэ вэзэр из гүд, вил райд хорсиз!", mn:"Цаг агаар сайхан бол морь унана!"}
    ],
    exercises:[
      {q:"Давтлага (PP):", parts:["I've ", " arrived."], opts:["just","yet"], a:0, fix:"Батлахад → just."},
      {q:"Давтлага (PS):", parts:["Yesterday we ", " the museum."], opts:["visited","have visited"], a:0, fix:"yesterday → Past Simple."},
      {q:"Давтлага (нөхцөл):", parts:["If it ", ", we'll stay."], opts:["rains","will rain"], a:0, fix:"if-ийн дараа will ✗."},
      {q:"Давтлага (had to):", parts:["We ", " wait four hours."], opts:["had to","musted"], a:0, fix:"must-д өнгөрсөн байхгүй → had to."}
    ],
    speak:{ scene:'🏆 Шалгалт: Аяллын мэдээ', turns:[
      {ruby:"Hi! Where are you? Any news?", pron:"хай! вэр а ю? эни нюз?", mn:"Сайн уу! Хаана байна? Мэдээ байна уу?",
        choices:[{t:"I've just arrived in Kharkhorin! I've never been here before.",best:true,mn:"Дөнгөж сая Хархоринд ирлээ! Урьд нь хэзээ ч ирж байгаагүй."},{t:"I just arrive in Kharkhorin. I never was here.",best:false,fix:"I'VE JUST ARRIVED... I've never BEEN here."}]},
      {ruby:"How was the journey?", pron:"хау воз зэ жөрни?", mn:"Зам ямар байсан бэ?",
        choices:[{t:"Terrible! Our bus was cancelled, so we had to wait four hours.",best:true,mn:"Аймшигтай! Автобус цуцлагдаж, 4 цаг хүлээх болсон."},{t:"Terrible! Bus cancelled, we musted wait.",best:false,fix:"was cancelled... we HAD TO wait."}]},
      {ruby:"What are you doing tomorrow?", pron:"вот а ю дуинг тумороу?", mn:"Маргааш юу хийх вэ?",
        choices:[{t:"We're going to the museum. If the weather is good, we'll ride horses!",best:true,mn:"Музей явна. Цаг агаар сайхан бол морь унана!"},{t:"We go museum. If weather will be good, we ride horses.",best:false,fix:"WE'RE GOING... If the weather IS good, we'LL ride."}]}
    ]}
  },
  {
    id:'a2m3l1', title:"3.1 Ажлын байр", level:"A2 · М3",
    blurb:"I've worked here for 3 years — for / since ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect + for / since",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд эхэлж ОДОО ХҮРТЭЛ үргэлжилж буйг хэлэх — монгол хэлэнд байхгүй ойлголт!<br><br>
        <b>have/has + V3 + for/since:</b>
        <div style="margin:12px 0"><span class="tag">FOR + ХУГАЦААНЫ УРТ: for three years, for two months, for a long time</span><span class="tag">SINCE + ЭХЛЭХ ЦЭГ: since 2020, since March, since I was young</span></div>
        <b>I have worked here for three years.</b> = 3 жилийн өмнө эхэлж, ОДОО Ч ажиллаж байна.
        <div style="margin:12px 0"><span class="tag">⚠️ «I work here for 3 years» ✗ — Present Simple болохгүй!</span></div>
        <b>Асуулт:</b> <b>How long have you worked here?</b> = Хэдэн жил ажиллаж байна?
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        company /ˈkʌmpəni/ — компани · department /dɪˈpɑːrtmənt/ — хэлтэс · position /pəˈzɪʃn/ — албан тушаал<br>
        colleague /ˈkɒliːɡ/ — хамт ажиллагч · manager /ˈmænɪdʒər/ — менежер · staff /stæf/ — ажилтнууд<br>
        office /ˈɒfɪs/ — оффис · branch /bræntʃ/ — салбар · since /sɪns/ — -аас хойш<br>
        for /fɔːr/ — турш · experience /ɪkˈspɪriəns/ — туршлага · join /dʒɔɪn/ — нэгдэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Монголоор «Би энд 3 жил ажиллаж байна» гэдэг тул <b>«I work here for 3 years»</b> ✗ гэж хэлдэг. Зөв нь: <b>I HAVE WORKED here for 3 years</b> ✓ Мөн «since three years» ✗ → <b>for</b> three years / <b>since</b> 2021.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «FOR = хэр удаан (3 жил) · SINCE = хэзээнээс (2021 оноос)».</p>`
    },
    phrases:[
      {en:"I have worked here for three years.", pron:"ай хэв вөркт хийр фор срий йирз.", mn:"Би энд гурван жил ажиллаж байна."},
      {en:"She has been a manager since 2020.", pron:"ши хэз бийн э мэнэжэр синс твэнти твэнти.", mn:"Тэр 2020 оноос хойш менежер хийж байна."},
      {en:"How long have you worked in this company?", pron:"хау лонг хэв ю вөркт ин зис кампэни?", mn:"Энэ компанид хэдэн жил ажиллаж байна вэ?"},
      {en:"I have known my colleagues for a long time.", pron:"ай хэв ноун май колийгз фор э лонг тайм.", mn:"Хамт ажиллагсдаа удаан хугацаанд таьдаг."},
      {en:"He hasn't worked here since March.", pron:"хи хэвнт вөркт хийр синс марч.", mn:"Тэр 3-р сараас хойш энд ажиллаагүй."}
    ],
    exercises:[
      {q:"for/since:", parts:["I have worked here ", " three years."], opts:["for","since"], a:0, fix:"Хугацааны урт → for."},
      {q:"for/since:", parts:["She has been here ", " 2020."], opts:["since","for"], a:0, fix:"Эхлэх цэг → since."},
      {q:"Аль цаг:", parts:["I ", " here for two years."], opts:["have worked","work"], a:0, fix:"Одоо хүртэл → have worked."},
      {q:"Асуулт:", parts:["How long ", " you worked here?"], opts:["have","did"], a:0, fix:"How long + PP → have."}
    ],
    speak:{ scene:'Шинэ хамт ажиллагчтай танилцах', turns:[
      {ruby:"How long have you worked in this company?", pron:"хау лонг хэв ю вөркт ин зис кампэни?", mn:"Энэ компанид хэдэн жил ажиллаж байна вэ?",
        choices:[{t:"I've worked here for three years.",best:true,mn:"Гурван жил ажиллаж байна."},{t:"I work here for three years.",best:false,fix:"Одоо хүртэл → I HAVE WORKED here for three years."}]},
      {ruby:"Nice! And who is your manager?", pron:"найс! энд хү из ёр мэнэжэр?", mn:"Гоё! Менежер тань хэн бэ?",
        choices:[{t:"Bat. He has been a manager since 2020.",best:true,mn:"Бат. Тэр 2020 оноос менежер хийж байна."},{t:"Bat. He is manager since 2020.",best:false,fix:"He HAS BEEN a manager since 2020."}]},
      {ruby:"Do you know Saraa from the other branch?", pron:"ду ю ноу Сараа фром зэ азэр брэнч?", mn:"Нөгөө салбарын Сарааг таних уу?",
        choices:[{t:"Yes! I've known her for a long time.",best:true,mn:"Тийм! Түүнийг удаан хугацаанд таьдаг."},{t:"Yes! I know her since a long time.",best:false,fix:"I'VE KNOWN her FOR a long time."}]}
    ]}
  },
  {
    id:'a2m3l2', title:"3.2 Ажлын үүрэг", level:"A2 · М3",
    blurb:"Reports are written here — идэвхгүй одоо цаг ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Simple passive",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ажлын үүргийг албан ёсоор дүрслэх — хэн хийсэн нь биш, ЮУ ХИЙГДДЭГ нь чухал.<br><br>
        Модуль 1-д <b>өнгөрсөн</b> идэвхгүй (was written) үзсэн. Одоо <b>одоо цаг</b>:
        <div style="margin:12px 0"><span class="tag">am / is / are + V3</span><span class="tag">Reports ARE WRITTEN every week.</span><span class="tag">The office IS CLEANED every morning.</span></div>
        <b>Идэвхтэй → Идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">We write reports. → Reports are written (by us).</span></div>
        <b>Ажлын байранд их хэрэглэдэг:</b> is done, are made, is sent, are checked, is organized.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        duty /ˈduːti/ — үүрэг · responsible /rɪˈspɒnsəbl/ — хариуцлагатай · task /tæsk/ — даалгавар<br>
        report /rɪˈpɔːrt/ — тайлан · check /tʃek/ — шалгах · organize /ˈɔːrɡənaɪz/ — зохион байгуулах<br>
        prepare /prɪˈper/ — бэлдэх · deliver /dɪˈlɪvər/ — хүргэх · handle /ˈhændl/ — шийдвэрлэх<br>
        deadline /ˈdedlaɪn/ — эцсийн хугацаа · daily /ˈdeɪli/ — өдөр тутам · weekly /ˈwiːkli/ — долоо хоног тутам</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> V2 ба V3-ыг андуурах: «Reports are wrote» ✗ → <b>are WRITTEN</b>. Мөн be мартах: «Reports written every week» ✗ → <b>ARE written</b>. Хэн хийснийг хэлэх бол <b>by</b>: checked BY the manager.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «AM/IS/ARE + V3 = юм хийгддэг» — is done, are sent, is checked.</p>`
    },
    phrases:[
      {en:"Reports are written every week.", pron:"рипортс а ритн эври вийк.", mn:"Тайлан долоо хоног бүр бичигддэг."},
      {en:"The office is cleaned every morning.", pron:"зэ офис из клийнд эври морнинг.", mn:"Оффис өглөө бүр цэвэрлэгддэг."},
      {en:"All emails are checked by the manager.", pron:"ол иймэйлз а чэкт бай зэ мэнэжэр.", mn:"Бүх имэйлийг менежер шалгадаг."},
      {en:"I am responsible for the daily reports.", pron:"ай эм риспонсэбл фор зэ дэйли рипортс.", mn:"Би өдөр тутмын тайланг хариуцдаг."},
      {en:"Meetings are organized twice a month.", pron:"мийтингз а органайзд твайс э манс.", mn:"Уулзалт сард хоёр удаа зохион байгуулагддаг."}
    ],
    exercises:[
      {q:"V3 хэлбэр:", parts:["Reports are ", " every week."], opts:["written","wrote"], a:0, fix:"are + V3 → written."},
      {q:"be мартав уу:", parts:["The office ", " cleaned daily."], opts:["is","—"], a:0, fix:"be заавал → IS cleaned."},
      {q:"is/are:", parts:["All emails ", " checked."], opts:["are","is"], a:0, fix:"Олон тоо → are checked."},
      {q:"Хэн хийсэн:", parts:["It is checked ", " the manager."], opts:["by","from"], a:0, fix:"Хэн хийсэн → by."}
    ],
    speak:{ scene:'Ажлын үүргээ тайлбарлах', turns:[
      {ruby:"What are your duties here?", pron:"вот а ёр дютиз хийр?", mn:"Энд ямар үүрэгтэй вэ?",
        choices:[{t:"I am responsible for the daily reports.",best:true,mn:"Би өдөр тутмын тайланг хариуцдаг."},{t:"I responsible daily reports.",best:false,fix:"I AM responsible FOR the daily reports."}]},
      {ruby:"How often are the reports written?", pron:"хау офн а зэ рипортс ритн?", mn:"Тайлан хэр олон удаа бичигддэг вэ?",
        choices:[{t:"They are written every week and checked by the manager.",best:true,mn:"Долоо хоног бүр бичигдэж, менежер шалгадаг."},{t:"They are wrote every week.",best:false,fix:"are WRITTEN (V3)."}]},
      {ruby:"And the meetings?", pron:"энд зэ мийтингз?", mn:"Уулзалтууд яадаг вэ?",
        choices:[{t:"They are organized twice a month.",best:true,mn:"Сард хоёр удаа зохион байгуулагддаг."},{t:"They organized twice month.",best:false,fix:"They ARE organized TWICE A month."}]}
    ]}
  },
  {
    id:'a2m3l3', title:"3.3 Хуваарь", level:"A2 · М3",
    blurb:"by 9, until 6, from...to — цагийн угтвар 2",
    rule:{
      h:"Зорилго ба дүрэм: by / until / from...to",
      html:`<b>🎯 Зорилго:</b> Ажлын хуваарь, эцсийн хугацааг нарийн хэлэх.<br><br>
        <b>3 угтварын гол ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">BY = ХҮРТЭЛ (эцсийн хугацаа, өмнө нь ямар ч үед): Finish it by Friday. (Баасан гэхэд дуусга)</span><span class="tag">UNTIL / TILL = ХҮРТЭЛ (үргэлжилнэ): I work until six. (6 болтол ажиллана)</span><span class="tag">FROM ... TO = -аас -хүртэл: from nine to six</span></div>
        <b>BY ⟷ UNTIL (хамгийн будлиантай!):</b>
        <div style="margin:12px 0"><span class="tag">Finish it BY Friday. = Баасан гэхэд дуусгасан бай (өмнө нь ч болно)</span><span class="tag">Stay UNTIL Friday. = Баасан хүртэл байнга бай</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        schedule /ˈskedʒuːl/ — хуваарь · shift /ʃɪft/ — ээлж · overtime /ˈoʊvərtaɪm/ — илүү цаг<br>
        break /breɪk/ — завсарлага · lunchtime /ˈlʌntʃtaɪm/ — үдийн завсарлага · finish /ˈfɪnɪʃ/ — дуусгах<br>
        submit /səbˈmɪt/ — өгөх · flexible /ˈfleksəbl/ — уян хатан · full-time /ˌfʊl ˈtaɪm/ — бүтэн цагийн<br>
        part-time /ˌpɑːrt ˈtaɪm/ — цагийн · by /baɪ/ — хүртэл (эцсийн хугацаа) · until /ənˈtɪl/ — хүртэл (үргэлжлэх)</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Finish it until Friday» ✗ — эцсийн хугацаанд <b>BY Friday</b> ✓. Мөн «I work from 9 until 6» ✓ зөв ч <b>from 9 TO 6</b> илүү жам ёсны.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BY = цэг (тэр үед бэлэн бай) · UNTIL = шугам (тэр болтол үргэлжил)».</p>`
    },
    phrases:[
      {en:"I work from nine to six.", pron:"ай вөрк фром найн ту сикс.", mn:"Би 9-өөс 6 хүртэл ажилладаг."},
      {en:"Please submit the report by Friday.", pron:"плийз сэбмит зэ рипорт бай фрайдэй.", mn:"Тайлангаа Баасан гэхэд өгнө үү."},
      {en:"The office is open until seven.", pron:"зэ офис из оупэн антил сэвн.", mn:"Оффис 7 цаг хүртэл нээлттэй."},
      {en:"We have a break from one to two.", pron:"ви хэв э брэйк фром ван ту ту.", mn:"Бид 1-ээс 2 цаг хүртэл завсарлагатай."},
      {en:"I sometimes work overtime until nine.", pron:"ай самтаймз вөрк оувэртайм антил найн.", mn:"Заримдаа 9 цаг хүртэл илүү цагаар ажилладаг."}
    ],
    exercises:[
      {q:"by/until:", parts:["Submit it ", " Friday. (эцсийн хугацаа)"], opts:["by","until"], a:0, fix:"Эцсийн хугацаа → by Friday."},
      {q:"by/until:", parts:["The office is open ", " seven. (үргэлжилнэ)"], opts:["until","by"], a:0, fix:"Үргэлжилнэ → until seven."},
      {q:"from...to:", parts:["I work from nine ", " six."], opts:["to","until"], a:0, fix:"from...TO нь хос."},
      {q:"by/until:", parts:["Finish the task ", " tomorrow."], opts:["by","until"], a:0, fix:"Дуусгах эцсийн хугацаа → by."}
    ],
    speak:{ scene:'Ажлын хуваарь', turns:[
      {ruby:"What are your working hours?", pron:"вот а ёр вөркинг ауэрз?", mn:"Ажлын цаг тань ямар вэ?",
        choices:[{t:"I work from nine to six, with a break at lunchtime.",best:true,mn:"9-өөс 6 хүртэл, үдийн завсарлагатай ажилладаг."},{t:"I work nine until six.",best:false,fix:"from nine TO six."}]},
      {ruby:"When do you need to submit the report?", pron:"вэн ду ю нийд ту сэбмит зэ рипорт?", mn:"Тайлангаа хэзээ өгөх ёстой вэ?",
        choices:[{t:"By Friday. But I'll try to finish it earlier.",best:true,mn:"Баасан гэхэд. Гэхдээ эрт дуусгахыг хичээнэ."},{t:"Until Friday. I try finish earlier.",best:false,fix:"Эцсийн хугацаа → BY Friday."}]},
      {ruby:"Do you often work overtime?", pron:"ду ю офн вөрк оувэртайм?", mn:"Байнга илүү цагаар ажилладаг уу?",
        choices:[{t:"Sometimes. Last week I worked until nine!",best:true,mn:"Заримдаа. Өнгөрсөн долоо хоногт 9 цаг хүртэл ажилласан!"},{t:"Sometimes. Last week I work by nine.",best:false,fix:"I WORKED UNTIL nine."}]}
    ]}
  },
  {
    id:'a2m3l4', title:"3.4 Сургалтын зуршил", level:"A2 · М3",
    blurb:"do homework / make progress — do ⟷ make ⭐",
    rule:{
      h:"Зорилго ба дүрэм: do ⟷ make (хос үгс)",
      html:`<b>🎯 Зорилго:</b> ⭐ Монгол хэлэнд хоёулаа «хийх» — англид ТЭС ӨӨР! Цээжлэхээс өөр арга алга.<br><br>
        <b>DO</b> = ажил, үүрэг, үйл ажиллагаа (үр дүн шинээр төрдөггүй):
        <div style="margin:12px 0"><span class="tag">do homework · do exercise · do research · do a course · do your best · do the washing</span></div>
        <b>MAKE</b> = БҮТЭЭХ, шинээр төрүүлэх:
        <div style="margin:12px 0"><span class="tag">make progress · make a mistake · make a decision · make a plan · make notes · make an effort</span></div>
        <b>Хамгийн түгээмэл хос:</b>
        <div style="margin:12px 0"><span class="tag">do homework ✓ (make homework ✗)</span><span class="tag">make a mistake ✓ (do a mistake ✗)</span><span class="tag">make progress ✓ (do progress ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        progress /ˈprɒɡres/ — ахиц · mistake /mɪˈsteɪk/ — алдаа · effort /ˈefərt/ — хүчин чармайлт<br>
        decision /dɪˈsɪʒn/ — шийдвэр · note /noʊt/ — тэмдэглэл · research /rɪˈsɜːrtʃ/ — судалгаа<br>
        course /kɔːrs/ — сургалт · revise /rɪˈvaɪz/ — давтах · concentrate /ˈkɒnsntreɪt/ — төвлөрөх<br>
        improve /ɪmˈpruːv/ — сайжруулах · habit /ˈhæbɪt/ — зуршил · regularly /ˈreɡjələrli/ — тогтмол</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I make my homework» ✗ (монгол/орос маягийн) → <b>I DO my homework</b> ✓. «I did a mistake» ✗ → <b>I MADE a mistake</b> ✓. Энэ хоёр бол хамгийн түгээмэл алдаа!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Гараас юм ТӨРВӨЛ MAKE (алдаа, шийдвэр, ахиц) · Ажил ХИЙВЭЛ DO (даалгавар, дасгал)».</p>`
    },
    phrases:[
      {en:"I do my homework every evening.", pron:"ай ду май хоумвөрк эври ийвнинг.", mn:"Би орой бүр гэрийн даалгавраа хийдэг."},
      {en:"I have made a lot of progress this year.", pron:"ай хэв мэйд э лот ов прогрэс зис йир.", mn:"Энэ жил их ахиц гаргалаа."},
      {en:"Don't worry if you make a mistake!", pron:"доунт вари иф ю мэйк э мистэйк!", mn:"Алдаа гаргавал бүү санаа зов!"},
      {en:"I always make notes when I study.", pron:"ай олвэйз мэйк ноутс вэн ай стади.", mn:"Сурахдаа үргэлж тэмдэглэл хийдэг."},
      {en:"I'm doing an online course now.", pron:"айм дуинг эн онлайн корс нау.", mn:"Одоо онлайн сургалтад хамрагдаж байна."}
    ],
    exercises:[
      {q:"do/make:", parts:["I ", " my homework every day."], opts:["do","make"], a:0, fix:"Даалгавар → DO homework."},
      {q:"do/make:", parts:["Don't worry if you ", " a mistake."], opts:["make","do"], a:0, fix:"Алдаа → MAKE a mistake."},
      {q:"do/make:", parts:["I have ", " a lot of progress."], opts:["made","done"], a:0, fix:"Ахиц → MAKE progress."},
      {q:"do/make:", parts:["I always ", " notes in class."], opts:["make","do"], a:0, fix:"Тэмдэглэл → MAKE notes."}
    ],
    speak:{ scene:'Сурах зуршил', turns:[
      {ruby:"How do you study English?", pron:"хау ду ю стади Инглиш?", mn:"Англи хэлээ яаж сурдаг вэ?",
        choices:[{t:"I do my homework every evening and make notes.",best:true,mn:"Орой бүр даалгавраа хийж, тэмдэглэл хийдэг."},{t:"I make my homework and do notes.",best:false,fix:"DO homework, MAKE notes."}]},
      {ruby:"Have you improved a lot?", pron:"хэв ю импрувд э лот?", mn:"Их сайжирсан уу?",
        choices:[{t:"Yes! I've made a lot of progress this year.",best:true,mn:"Тийм! Энэ жил их ахиц гаргалаа."},{t:"Yes! I've done a lot of progress.",best:false,fix:"MAKE progress (do ✗)."}]},
      {ruby:"Are you afraid of speaking?", pron:"а ю эфрэйд ов спийкинг?", mn:"Ярихаас айдаг уу?",
        choices:[{t:"Not now. It's okay to make mistakes!",best:true,mn:"Одоо үгүй. Алдаа гаргах нь зүгээр!"},{t:"Not now. It's okay to do mistakes.",best:false,fix:"MAKE mistakes."}]}
    ]}
  },
  {
    id:'a2m3l5', title:"3.5 Чадвар", level:"A2 · М3",
    blurb:"I'll be able to / I managed to — can-ийн хувилбар ⭐",
    rule:{
      h:"Зорилго ба дүрэм: be able to / manage to",
      html:`<b>🎯 Зорилго:</b> ⭐ can нь зөвхөн 2 цагтай (can/could). Бусад цагт <b>be able to</b> хэрэглэнэ!<br><br>
        <b>can-ийн хязгаар:</b>
        <div style="margin:12px 0"><span class="tag">Одоо: I can speak English. ✓</span><span class="tag">Өнгөрсөн: I could speak. ✓</span><span class="tag">Ирээдүй: I will can ✗ → I WILL BE ABLE TO speak ✓</span><span class="tag">Present Perfect: I have could ✗ → I HAVE BEEN ABLE TO ✓</span></div>
        <b>manage to</b> = хүндрэлтэй ч ЧАДСАН (нэг удаагийн амжилт):
        <div style="margin:12px 0"><span class="tag">I managed to finish the report. = Хэцүү байсан ч дуусгаж чадсан.</span><span class="tag">could ⟷ managed to: I could swim (ерөнхий чадвар) ⟷ I managed to swim across (тэр удаад чадсан)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        skill /skɪl/ — ур чадвар · ability /əˈbɪləti/ — чадвар · able /ˈeɪbl/ — чадах<br>
        manage /ˈmænɪdʒ/ — чадах (хүндрэлтэй) · succeed /səkˈsiːd/ — амжилтад хүрэх · fail /feɪl/ — бүтэлгүйтэх<br>
        experienced /ɪkˈspɪriənst/ — туршлагатай · confident /ˈkɒnfɪdənt/ — итгэлтэй · fluent /ˈfluːənt/ — чөлөөтэй<br>
        basic /ˈbeɪsɪk/ — суурь · advanced /ədˈvænst/ — гүнзгий · train /treɪn/ — сургах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I will can speak» ✗ — хоёр модаль зэрэг байж болохгүй! → <b>I will BE ABLE TO speak</b> ✓. Мөн «I managed finish» ✗ → <b>managed TO finish</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «CAN зөвхөн одоо/өнгөрсөнд · Бусад бүх цагт BE ABLE TO».</p>`
    },
    phrases:[
      {en:"I can speak basic English.", pron:"ай кэн спийк бэйсик Инглиш.", mn:"Би суурь англиар ярьж чадна."},
      {en:"Next year I'll be able to speak fluently.", pron:"нэкст йир айл би эйбл ту спийк флүэнтли.", mn:"Ирэх жил чөлөөтэй ярьж чадна."},
      {en:"I managed to finish the report on time.", pron:"ай мэнижд ту финиш зэ рипорт он тайм.", mn:"Тайлангаа цагтаа дуусгаж чадсан."},
      {en:"I have been able to improve a lot.", pron:"ай хэв бийн эйбл ту импрүв э лот.", mn:"Би их сайжруулж чадсан."},
      {en:"She is very experienced and confident.", pron:"ши из вэри икспириэнст энд конфидэнт.", mn:"Тэр их туршлагатай, өөртөө итгэлтэй."}
    ],
    exercises:[
      {q:"Ирээдүй:", parts:["Next year I'll ", " speak well."], opts:["be able to","can"], a:0, fix:"will + can ✗ → will BE ABLE TO."},
      {q:"managed:", parts:["I managed ", " the report."], opts:["to finish","finish"], a:0, fix:"managed TO finish."},
      {q:"Present Perfect:", parts:["I have ", " improve a lot."], opts:["been able to","could"], a:0, fix:"PP → have BEEN ABLE TO."},
      {q:"Одоо:", parts:["I ", " speak basic English."], opts:["can","am able"], a:0, fix:"Одоо → can (энгийн)."}
    ],
    speak:{ scene:'Ажлын ур чадвар', turns:[
      {ruby:"Can you speak English?", pron:"кэн ю спийк Инглиш?", mn:"Англиар ярьж чадах уу?",
        choices:[{t:"Yes, I can speak basic English now.",best:true,mn:"Тийм, одоо суурь англиар ярьж чадна."},{t:"Yes, I am able speak basic English.",best:false,fix:"Одоо → I CAN speak (энгийн)."}]},
      {ruby:"Do you think you'll improve?", pron:"ду ю синк юл импрүв?", mn:"Сайжирна гэж бодож байна уу?",
        choices:[{t:"Yes! Next year I'll be able to speak fluently.",best:true,mn:"Тийм! Ирэх жил чөлөөтэй ярьж чадна."},{t:"Yes! Next year I will can speak fluently.",best:false,fix:"will + can ✗ → I'll BE ABLE TO speak."}]},
      {ruby:"Did you finish the report yesterday?", pron:"дид ю финиш зэ рипорт йестэрдэй?", mn:"Өчигдөр тайлангаа дуусгасан уу?",
        choices:[{t:"It was hard, but I managed to finish it on time.",best:true,mn:"Хэцүү байсан ч цагтаа дуусгаж чадсан."},{t:"It was hard, but I managed finish it.",best:false,fix:"managed TO finish."}]}
    ]}
  },
  {
    id:'a2m3l6', title:"3.6 Ажлын ярилцлага", level:"A2 · М3",
    blurb:"You speak English, don't you? — асуултын сүүл ⭐",
    rule:{
      h:"Зорилго ба дүрэм: question tags (асуултын сүүл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «...биз дээ?» гэж баталгаажуулах — англи ярианы амин чухал хэсэг.<br><br>
        <b>Алтан дүрэм: ЭСРЭГ туйл!</b>
        <div style="margin:12px 0"><span class="tag">Батлах (+) → сүүл нь ҮГҮЙСГЭХ (−): You speak English, DON'T you?</span><span class="tag">Үгүйсгэх (−) → сүүл нь БАТЛАХ (+): You don't speak French, DO you?</span></div>
        <b>Ямар туслах үг сонгох вэ:</b>
        <div style="margin:12px 0"><span class="tag">be → You are new, aren't you?</span><span class="tag">Present Simple → You work here, don't you?</span><span class="tag">Past Simple → You worked there, didn't you?</span><span class="tag">have V3 → You've finished, haven't you?</span><span class="tag">can/will → You can drive, can't you?</span></div>
        <b>Онцгой:</b> I am... → <b>aren't I?</b> (amn't I ✗)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        interview /ˈɪntərvjuː/ — ярилцлага · candidate /ˈkændɪdət/ — нэр дэвшигч · apply /əˈplaɪ/ — өргөдөл гаргах<br>
        application /ˌæplɪˈkeɪʃn/ — өргөдөл · hire /ˈhaɪər/ — ажилд авах · salary /ˈsæləri/ — цалин<br>
        strength /streŋθ/ — давуу тал · weakness /ˈwiːknəs/ — сул тал · qualification /ˌkwɒlɪfɪˈkeɪʃn/ — мэргэшил<br>
        suitable /ˈsuːtəbl/ — тохирсон · offer /ˈɒfər/ — санал · accept /əkˈsept/ — хүлээн авах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Ижил туйл: «You speak English, do you?» ✗ → эсрэг: <b>don't you?</b> ✓ Мөн «I'm late, amn't I?» ✗ → онцгойлон <b>aren't I?</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Толгой нь + бол сүүл нь − · Толгой нь − бол сүүл нь +» — эсрэг талын дүрэм.</p>`
    },
    phrases:[
      {en:"You speak English, don't you?", pron:"ю спийк Инглиш, доунт ю?", mn:"Та англиар ярьдаг биз дээ?"},
      {en:"You've worked in sales before, haven't you?", pron:"юв вөркт ин сэйлз бифор, хэвнт ю?", mn:"Та өмнө нь борлуулалтад ажиллаж байсан биз дээ?"},
      {en:"You don't have any experience, do you?", pron:"ю доунт хэв эни икспириэнс, ду ю?", mn:"Танд туршлага байхгүй биз дээ?"},
      {en:"You can start on Monday, can't you?", pron:"ю кэн старт он мандэй, кант ю?", mn:"Та Даваа гарагт эхэлж чадна биз дээ?"},
      {en:"I'm the right person for this job, aren't I?", pron:"айм зэ райт пөрсн фор зис жоб, арнт ай?", mn:"Би энэ ажилд тохирох хүн биз дээ?"}
    ],
    exercises:[
      {q:"Эсрэг туйл:", parts:["You speak English, ", " you?"], opts:["don't","do"], a:0, fix:"Батлах → сүүл нь үгүйсгэх: don't you?"},
      {q:"Эсрэг туйл:", parts:["You don't drive, ", " you?"], opts:["do","don't"], a:0, fix:"Үгүйсгэх → сүүл нь батлах: do you?"},
      {q:"Туслах үг:", parts:["You've finished, ", " you?"], opts:["haven't","didn't"], a:0, fix:"have V3 → haven't you?"},
      {q:"Онцгой:", parts:["I'm late, ", " I?"], opts:["aren't","amn't"], a:0, fix:"I am → aren't I? (онцгой)."}
    ],
    speak:{ scene:'Ажлын ярилцлагад', turns:[
      {ruby:"You applied for the manager position, didn't you?", pron:"ю эплайд фор зэ мэнэжэр пэзишн, диднт ю?", mn:"Та менежерийн албанд өргөдөл гаргасан биз дээ?",
        choices:[{t:"Yes, that's right. I've worked in this field for five years.",best:true,mn:"Тийм ээ. Би энэ салбарт 5 жил ажилласан."},{t:"Yes. I work in this field for five years.",best:false,fix:"I'VE WORKED in this field FOR five years."}]},
      {ruby:"You speak English well, don't you?", pron:"ю спийк Инглиш вэл, доунт ю?", mn:"Та англиар сайн ярьдаг биз дээ?",
        choices:[{t:"I do, and next year I'll be able to speak fluently.",best:true,mn:"Тийм, ирэх жил чөлөөтэй ярьж чадна."},{t:"Yes, and next year I will can speak fluently.",best:false,fix:"will + can ✗ → I'LL BE ABLE TO speak."}]},
      {ruby:"You can start on Monday, can't you?", pron:"ю кэн старт он мандэй, кант ю?", mn:"Даваа гарагт эхэлж чадна биз дээ?",
        choices:[{t:"Yes, I can. Thank you for the offer!",best:true,mn:"Тийм, чадна. Санал болгосонд баярлалаа!"},{t:"Yes, I can start. Thanks offer.",best:false,fix:"Thank you FOR THE offer!"}]}
    ]}
  },
  {
    id:'a2m3l7', title:"3.7 CV-ийн суурь", level:"A2 · М3",
    blurb:"a person who works hard — who / which / that ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: relative clauses (тодотгол өгүүлбэр)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр өгүүлбэрийг нэг болгож, өөрийгөө нарийн дүрслэх.<br><br>
        <b>3 холбоос:</b>
        <div style="margin:12px 0"><span class="tag">WHO — ХҮН: I am a person who works well in a team.</span><span class="tag">WHICH — ЮМ: I have a skill which is very useful.</span><span class="tag">THAT — хоёуланд нь болно (ярианд илүү түгээмэл)</span><span class="tag">WHERE — ГАЗАР: This is the office where I worked.</span></div>
        <b>Хоёр өгүүлбэрийг нийлүүлэх:</b>
        <div style="margin:12px 0"><span class="tag">I have a colleague. He speaks Japanese.</span><span class="tag">→ I have a colleague WHO speaks Japanese.</span></div>
        <b>⚠️ Давхар эзэн болохгүй:</b> «a colleague who HE speaks» ✗ — who нь өөрөө эзэн!
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        CV /ˌsiː ˈviː/ — намтар · resume /ˈrezumeɪ/ — намтар (АНУ) · education /ˌedʒuˈkeɪʃn/ — боловсрол<br>
        degree /dɪˈɡriː/ — зэрэг · graduate /ˈɡrædʒueɪt/ — төгсөх · reference /ˈrefrəns/ — тодорхойлолт<br>
        achievement /əˈtʃiːvmənt/ — амжилт · reliable /rɪˈlaɪəbl/ — найдвартай · hardworking /ˌhɑːrdˈwɜːrkɪŋ/ — хөдөлмөрч<br>
        creative /kriˈeɪtɪv/ — бүтээлч · organized /ˈɔːrɡənaɪzd/ — эмх цэгцтэй · teamwork /ˈtiːmwɜːrk/ — багийн ажиллагаа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «a person which works» ✗ — хүнд <b>who</b>: a person WHO works ✓. Мөн «the office which I worked» ✗ → газарт <b>where</b>: the office WHERE I worked ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WHO = хүн · WHICH = юм · WHERE = газар · THAT = бүгдэд болно».</p>`
    },
    phrases:[
      {en:"I am a person who works well in a team.", pron:"ай эм э пөрсн хү вөркс вэл ин э тийм.", mn:"Би багаар сайн ажилладаг хүн."},
      {en:"I have skills which are useful for this job.", pron:"ай хэв скилз вич а юсфул фор зис жоб.", mn:"Надад энэ ажилд хэрэгтэй ур чадвар бий."},
      {en:"I graduated from a university that is well known.", pron:"ай грэжуэйтид фром э юнивөрсити зэт из вэл ноун.", mn:"Би сайн танигдсан их сургуулийг төгссөн."},
      {en:"This is the company where I worked for three years.", pron:"зис из зэ кампэни вэр ай вөркт фор срий йирз.", mn:"Энэ бол миний 3 жил ажилласан компани."},
      {en:"I have a colleague who speaks Japanese.", pron:"ай хэв э колийг хү спийкс Жэпэнийз.", mn:"Надад япон хэлтэй хамт ажиллагч бий."}
    ],
    exercises:[
      {q:"who/which:", parts:["I am a person ", " works hard."], opts:["who","which"], a:0, fix:"Хүн → who."},
      {q:"who/which:", parts:["I have a skill ", " is useful."], opts:["which","who"], a:0, fix:"Юм → which."},
      {q:"where:", parts:["This is the office ", " I worked."], opts:["where","which"], a:0, fix:"Газар → where."},
      {q:"Давхар эзэн:", parts:["A colleague who ", " Japanese."], opts:["speaks","he speaks"], a:0, fix:"who өөрөө эзэн → who speaks."}
    ],
    speak:{ scene:'Өөрийгөө танилцуулах (CV)', turns:[
      {ruby:"Tell me about yourself.", pron:"тэл ми эбаут ёрсэлф.", mn:"Өөрийнхөө тухай яриач.",
        choices:[{t:"I'm a person who works well in a team and is very organized.",best:true,mn:"Би багаар сайн ажилладаг, эмх цэгцтэй хүн."},{t:"I'm a person which works well in team.",best:false,fix:"Хүн → a person WHO works."}]},
      {ruby:"Where did you work before?", pron:"вэр дид ю вөрк бифор?", mn:"Өмнө нь хаана ажиллаж байсан бэ?",
        choices:[{t:"At a company where I worked for three years.",best:true,mn:"Гурван жил ажилласан компанид."},{t:"At a company which I worked three years.",best:false,fix:"Газар → the company WHERE I worked."}]},
      {ruby:"What skills do you have?", pron:"вот скилз ду ю хэв?", mn:"Ямар ур чадвартай вэ?",
        choices:[{t:"I have skills which are useful here — English and teamwork.",best:true,mn:"Энд хэрэгтэй ур чадвартай — англи хэл, багийн ажиллагаа."},{t:"I have skills who are useful.",best:false,fix:"Юм → skills WHICH are useful."}]}
    ]}
  },
  {
    id:'a2m3l8', title:"3.8 Хамт олон", level:"A2 · М3",
    blurb:"both / neither / either — хоёулаа, аль нь ч",
    rule:{
      h:"Зорилго ба дүрэм: both / neither / either",
      html:`<b>🎯 Зорилго:</b> Хоёр хүн/зүйлийн тухай нэг дор хэлэх.<br><br>
        <b>Гурвын утга:</b>
        <div style="margin:12px 0"><span class="tag">BOTH = хоёул (+): Both of them speak English.</span><span class="tag">NEITHER = аль нь ч биш (−): Neither of them speaks Russian.</span><span class="tag">EITHER = аль нэг нь: You can ask either of them.</span></div>
        <b>⚠️ Дүрмийн онцлог:</b>
        <div style="margin:12px 0"><span class="tag">both + ОЛОН тоо: Both are here.</span><span class="tag">neither/either + ГАНЦ тоо: Neither IS here. (аль хэдийн үгүйсгэсэн!)</span></div>
        <b>Хос холбоос:</b>
        <div style="margin:12px 0"><span class="tag">both ... AND: both Bat and Saraa</span><span class="tag">neither ... NOR: neither Bat nor Saraa</span><span class="tag">either ... OR: either Bat or Saraa</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        colleague /ˈkɒliːɡ/ — хамт олон · team /tiːm/ — баг · together /təˈɡeðər/ — хамт<br>
        support /səˈpɔːrt/ — дэмжих · share /ʃer/ — хуваалцах · discuss /dɪˈskʌs/ — хэлэлцэх<br>
        agree /əˈɡriː/ — санал нийлэх · disagree /ˌdɪsəˈɡriː/ — санал зөрөх · trust /trʌst/ — итгэх<br>
        friendly /ˈfrendli/ — найрсаг · helpful /ˈhelpfl/ — тустай · relationship /rɪˈleɪʃnʃɪp/ — харилцаа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Neither of them don't speak» ✗ — neither аль хэдийн үгүйсгэсэн: <b>Neither of them speakS</b> ✓ (ганц тоо!). Мөн «both ... or» ✗ → <b>both ... AND</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BOTH...AND (+) · NEITHER...NOR (−) · EITHER...OR (сонголт)».</p>`
    },
    phrases:[
      {en:"Both of my colleagues are very helpful.", pron:"боус ов май колийгз а вэри хэлпфул.", mn:"Хамт ажиллагч хоёул маань их тустай."},
      {en:"Neither of them speaks Russian.", pron:"найзэр ов зэм спийкс Рашн.", mn:"Тэдний аль нь ч орос хэл мэддэггүй."},
      {en:"You can ask either Bat or Saraa.", pron:"ю кэн аск айзэр Бат ор Сараа.", mn:"Бат эсвэл Сарааг аль нэгээс нь асууж болно."},
      {en:"Both Bat and Saraa work in my team.", pron:"боус Бат энд Сараа вөрк ин май тийм.", mn:"Бат, Сараа хоёул миний багт ажилладаг."},
      {en:"We discuss everything together.", pron:"ви дискас эврисинг тугэзэр.", mn:"Бид бүх юмыг хамтдаа хэлэлцдэг."}
    ],
    exercises:[
      {q:"Утга:", parts:["", " of them speak English. (хоёул)"], opts:["Both","Neither"], a:0, fix:"Хоёул → Both."},
      {q:"Ганц тоо:", parts:["Neither of them ", " Russian."], opts:["speaks","speak"], a:0, fix:"neither → ганц тоо: speaks."},
      {q:"Хос холбоос:", parts:["Both Bat ", " Saraa are here."], opts:["and","or"], a:0, fix:"both ... AND."},
      {q:"Хос холбоос:", parts:["You can ask either Bat ", " Saraa."], opts:["or","nor"], a:0, fix:"either ... OR."}
    ],
    speak:{ scene:'Багийн тухай', turns:[
      {ruby:"How do you find your colleagues?", pron:"хау ду ю файнд ёр колийгз?", mn:"Хамт ажиллагсдаа яаж үнэлдэг вэ?",
        choices:[{t:"Both of them are very helpful and friendly.",best:true,mn:"Хоёул маань их тустай, найрсаг."},{t:"Both of them is very helpful.",best:false,fix:"both → олон тоо: ARE helpful."}]},
      {ruby:"Do they speak Russian? I need help with a document.", pron:"ду зэй спийк Рашн? ай нийд хэлп виз э докюмэнт.", mn:"Тэд орос хэлтэй юу? Надад бичиг баримтад тусламж хэрэгтэй.",
        choices:[{t:"Neither of them speaks Russian, sorry.",best:true,mn:"Аль нь ч орос хэл мэддэггүй, уучлаарай."},{t:"Neither of them don't speak Russian.",best:false,fix:"neither аль хэдийн үгүйсгэсэн → Neither of them SPEAKS."}]},
      {ruby:"Who should I ask about English then?", pron:"хү шүд ай аск эбаут Инглиш зэн?", mn:"Тэгвэл англи хэлний талаар хэнээс асуух вэ?",
        choices:[{t:"You can ask either Bat or Saraa — both speak it well.",best:true,mn:"Бат эсвэл Сарааг аль нэгээс нь асуу — хоёул сайн ярьдаг."},{t:"You can ask either Bat and Saraa.",best:false,fix:"either ... OR."}]}
    ]}
  },
  {
    id:'a2m3l9', title:"3.9 Ажлын асуудал", level:"A2 · М3",
    blurb:"so busy / such a hard day — so ⟷ such",
    rule:{
      h:"Зорилго ба дүрэм: so ⟷ such (хүчтэй болгох)",
      html:`<b>🎯 Зорилго:</b> Мэдрэмжээ хүчтэй илэрхийлэх — гомдол, магтаалд хоёуланд нь.<br><br>
        <b>Алтан дүрэм — араас нь юу ирэх вэ?</b>
        <div style="margin:12px 0"><span class="tag">SO + ТЭМДЭГ НЭР (дангаар): It was SO difficult.</span><span class="tag">SUCH + (a/an) + тэмдэг нэр + НЭР ҮГ: It was SUCH a difficult day.</span></div>
        <b>Ижил утга, өөр бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">The day was so long. = It was such a long day.</span></div>
        <b>Үр дүн нэмбэл «that»:</b>
        <div style="margin:12px 0"><span class="tag">I was so tired that I went to bed at eight.</span></div>
        <b>so + much/many:</b> so much work, so many emails.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        stress /stres/ — стресс · pressure /ˈpreʃər/ — дарамт · workload /ˈwɜːrkloʊd/ — ажлын ачаалал<br>
        complain /kəmˈpleɪn/ — гомдоллох · argue /ˈɑːrɡjuː/ — маргах · misunderstanding /ˌmɪsʌndərˈstændɪŋ/ — үл ойлголцол<br>
        solve /sɒlv/ — шийдэх · apologize /əˈpɒlədʒaɪz/ — уучлалт гуйх · fix /fɪks/ — засах<br>
        exhausted /ɪɡˈzɔːstɪd/ — ядарсан · annoyed /əˈnɔɪd/ — бухимдсан · patient /ˈpeɪʃnt/ — тэвчээртэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It was so a hard day» ✗ → нэр үгтэй бол <b>SUCH a hard day</b> ✓. «It was such difficult» ✗ → тэмдэг нэр дангаар бол <b>SO difficult</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэр үг байвал SUCH · Байхгүй бол SO» — such a long day / so long.</p>`
    },
    phrases:[
      {en:"Yesterday was such a hard day!", pron:"йестэрдэй воз сач э хард дэй!", mn:"Өчигдөр ямар хэцүү өдөр байсан гээч!"},
      {en:"I was so tired that I went to bed at eight.", pron:"ай воз соу тайэрд зэт ай вэнт ту бэд эт эйт.", mn:"Их ядарсан болохоор 8 цагт унтсан."},
      {en:"There was so much work to do.", pron:"зэр воз соу мач вөрк ту ду.", mn:"Хийх ажил маш их байсан."},
      {en:"My manager is such a patient person.", pron:"май мэнэжэр из сач э пэйшнт пөрсн.", mn:"Менежер маань ямар тэвчээртэй хүн гээч."},
      {en:"I got so many emails that I couldn't answer them all.", pron:"ай гот соу мэни иймэйлз зэт ай күднт ансэр зэм ол.", mn:"Маш олон имэйл ирсэн болохоор бүгдэд нь хариулж чадаагүй."}
    ],
    exercises:[
      {q:"so/such:", parts:["It was ", " difficult."], opts:["so","such"], a:0, fix:"Тэмдэг нэр дангаар → so difficult."},
      {q:"so/such:", parts:["It was ", " a hard day!"], opts:["such","so"], a:0, fix:"Нэр үгтэй → such a hard day."},
      {q:"so + much/many:", parts:["There was ", " work!"], opts:["so much","so many"], a:0, fix:"work тоологдохгүй → so much."},
      {q:"so + much/many:", parts:["I got ", " emails!"], opts:["so many","so much"], a:0, fix:"emails тоологдох → so many."}
    ],
    speak:{ scene:'Ажлын дарамт', turns:[
      {ruby:"You look exhausted. What happened?", pron:"ю лүк игзостид. вот хэпэнд?", mn:"Их ядарсан харагдаж байна. Юу болов?",
        choices:[{t:"Yesterday was such a hard day! I had so much work.",best:true,mn:"Өчигдөр ямар хэцүү өдөр байсан гээч! Маш их ажилтай байсан."},{t:"Yesterday was so a hard day. I had so many work.",best:false,fix:"SUCH a hard day. so MUCH work (тоологдохгүй)."}]},
      {ruby:"Did you finish everything?", pron:"дид ю финиш эврисинг?", mn:"Бүгдийг дуусгасан уу?",
        choices:[{t:"No! I got so many emails that I couldn't answer them all.",best:true,mn:"Үгүй! Маш олон имэйл ирсэн болохоор бүгдэд нь хариулж чадаагүй."},{t:"No! I got so much emails.",best:false,fix:"emails тоологдох → so MANY emails."}]},
      {ruby:"Did you talk to your manager about it?", pron:"дид ю ток ту ёр мэнэжэр эбаут ит?", mn:"Менежертэйгээ ярьсан уу?",
        choices:[{t:"Yes. She's such a patient person — she helped me.",best:true,mn:"Тийм. Тэр ямар тэвчээртэй хүн гээч — надад тусалсан."},{t:"Yes. She's so patient person.",best:false,fix:"Нэр үгтэй → SUCH a patient person."}]}
    ]}
  },
  {
    id:'a2m3l10', title:"3.10 Модулийн төсөл", level:"A2 · М3",
    blurb:"🏆 Ажлын ярилцлага өгөх",
    rule:{
      h:"Давтлага: A2 Модуль 3-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 3-ын мэдлэгээ нэгтгэж, жинхэнэ ажлын ярилцлага өгөх.<br><br>
        <b>Модуль 3-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">I've worked here FOR 3 years / SINCE 2020 ⭐</span><span class="tag">Reports are written (идэвхгүй)</span><span class="tag">by Friday ⟷ until six</span><span class="tag">do homework ⟷ make progress</span><span class="tag">will be able to / managed to</span><span class="tag">You speak English, don't you?</span><span class="tag">a person WHO / a skill WHICH</span><span class="tag">both ... and / neither ... nor</span><span class="tag">so difficult / such a hard day</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Ажлын ярилцлага (15+ өгүүлбэр):</b> Өөрийгөө ажилд ор! Жишээ:<br>
        <i>Good morning. My name is Enkhmaa. I have worked as a kindergarten teacher for eight years. I graduated from a university where I studied education. I'm a person who works well in a team and is very organized. In my current job, lesson plans are prepared every week and all reports are checked by me. Last year I made a lot of progress — I managed to organize a big event for 200 children! It was such a busy year, but I learned a lot. I can speak basic English now, and next year I'll be able to speak better. Both my colleagues and my manager say I'm reliable. Do you have any questions for me?</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Ярилцлагын 4 давхар: <b>Туршлага</b> (I've worked for...) → <b>Хувь хүн</b> (a person who...) → <b>Амжилт</b> (I managed to...) → <b>Ирээдүй</b> (I'll be able to...).</p>`
    },
    phrases:[
      {en:"I have worked as a teacher for eight years.", pron:"ай хэв вөркт эз э тийчэр фор эйт йирз.", mn:"Би найман жил багшаар ажиллаж байна."},
      {en:"I'm a person who works well in a team.", pron:"айм э пөрсн хү вөркс вэл ин э тийм.", mn:"Би багаар сайн ажилладаг хүн."},
      {en:"All reports are checked by me.", pron:"ол рипортс а чэкт бай ми.", mn:"Бүх тайланг би шалгадаг."},
      {en:"I managed to organize a big event last year.", pron:"ай мэнижд ту органайз э биг ивэнт ласт йир.", mn:"Өнгөрсөн жил том арга хэмжээ зохион байгуулж чадсан."},
      {en:"It was such a busy year, but I learned a lot.", pron:"ит воз сач э бизи йир, бат ай лөрнд э лот.", mn:"Ямар завгүй жил байсан гээч, гэхдээ их зүйл сурсан."}
    ],
    exercises:[
      {q:"Давтлага (for/since):", parts:["I've worked here ", " 2020."], opts:["since","for"], a:0, fix:"Эхлэх цэг → since."},
      {q:"Давтлага (идэвхгүй):", parts:["Reports are ", " every week."], opts:["checked","check"], a:0, fix:"are + V3 → checked."},
      {q:"Давтлага (who):", parts:["I'm a person ", " works hard."], opts:["who","which"], a:0, fix:"Хүн → who."},
      {q:"Давтлага (so/such):", parts:["It was ", " a busy year!"], opts:["such","so"], a:0, fix:"Нэр үгтэй → such a busy year."}
    ],
    speak:{ scene:'🏆 Төсөл: Ажлын ярилцлага', turns:[
      {ruby:"Good morning! Tell me about your experience.", pron:"гүд морнинг! тэл ми эбаут ёр икспириэнс.", mn:"Өглөөний мэнд! Туршлагынхаа тухай яриач.",
        choices:[{t:"I've worked as a kindergarten teacher for eight years.",best:true,mn:"Би найман жил цэцэрлэгийн багшаар ажиллаж байна."},{t:"I work as a teacher since eight years.",best:false,fix:"I'VE WORKED... FOR eight years."}]},
      {ruby:"What kind of person are you?", pron:"вот кайнд ов пөрсн а ю?", mn:"Та ямар хүн бэ?",
        choices:[{t:"I'm a person who works well in a team and is very organized.",best:true,mn:"Би багаар сайн ажилладаг, эмх цэгцтэй хүн."},{t:"I'm a person which work well in team.",best:false,fix:"a person WHO WORKS well IN A team."}]},
      {ruby:"What was your biggest achievement?", pron:"вот воз ёр бигэст эчийвмэнт?", mn:"Хамгийн том амжилт тань юу байсан бэ?",
        choices:[{t:"I managed to organize a big event. It was such a busy year!",best:true,mn:"Том арга хэмжээ зохион байгуулж чадсан. Ямар завгүй жил байсан гээч!"},{t:"I managed organize big event. It was so a busy year.",best:false,fix:"managed TO organize. SUCH a busy year."}]}
    ]}
  },
  {
    id:'a2m4l1', title:"4.1 Сэтгэл хөдлөл", level:"A2 · М4",
    blurb:"I'm bored ⟷ It's boring — -ed / -ing ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: -ed ⟷ -ing тэмдэг нэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Англи хэлний хамгийн сонгодог алдаа! Монгол хэлэнд хоёулаа «уйтгартай» гэдэг.<br><br>
        <b>Алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">-ED = ХҮН яаж МЭДЭРЧ байна: I am bored. (би уйдаж байна)</span><span class="tag">-ING = ЮМ ямар нөлөө үзүүлж байна: The film is boring. (кино уйтгартай)</span></div>
        <b>«I am boring» = «Би уйтгартай хүн» — өөрийгөө доромжилж байна!</b> ⚠️<br><br>
        <b>Хосууд:</b>
        <div style="margin:12px 0"><span class="tag">bored ⟷ boring</span><span class="tag">interested ⟷ interesting</span><span class="tag">tired ⟷ tiring</span><span class="tag">excited ⟷ exciting</span><span class="tag">surprised ⟷ surprising</span><span class="tag">worried ⟷ worrying</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        bored /bɔːrd/ — уйдсан · boring /ˈbɔːrɪŋ/ — уйтгартай · excited /ɪkˈsaɪtɪd/ — догдолсон<br>
        exciting /ɪkˈsaɪtɪŋ/ — догдлуулам · confused /kənˈfjuːzd/ — эргэлзсэн · confusing /kənˈfjuːzɪŋ/ — эргэлзүүлэм<br>
        disappointed /ˌdɪsəˈpɔɪntɪd/ — урам хугарсан · relaxed /rɪˈlækst/ — тайвширсан · frustrated /ˈfrʌstreɪtɪd/ — бухимдсан<br>
        emotion /ɪˈmoʊʃn/ — сэтгэл хөдлөл · feeling /ˈfiːlɪŋ/ — мэдрэмж · mood /muːd/ — сэтгэл санаа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am boring» ✗ = «Би уйтгартай хүн»! Зөв нь <b>I am borED</b> ✓. Мөн «The lesson was interested» ✗ → <b>interestING</b> ✓ (хичээл мэдэрдэггүй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хүн зүрхтэй → -ED мэдэрнэ · Юм зүрхгүй → -ING нөлөөлнө».</p>`
    },
    phrases:[
      {en:"I'm bored. This film is so boring!", pron:"айм борд. зис филм из соу боринг!", mn:"Уйдаж байна. Энэ кино их уйтгартай!"},
      {en:"I'm very interested in psychology.", pron:"айм вэри интрэстид ин сайколоджи.", mn:"Би сэтгэл судлалыг их сонирхдог."},
      {en:"The news was really surprising.", pron:"зэ нюз воз риали сэрпрайзинг.", mn:"Мэдээ үнэхээр гэнэтийн байлаа."},
      {en:"I was so excited about the trip!", pron:"ай воз соу иксайтид эбаут зэ трип!", mn:"Аялалдаа их догдолж байсан!"},
      {en:"Sorry, I'm confused. Can you explain again?", pron:"сори, айм кэнфьюзд. кэн ю иксплэйн эгэн?", mn:"Уучлаарай, эргэлзэж байна. Дахин тайлбарлаж өгөх үү?"}
    ],
    exercises:[
      {q:"-ed/-ing:", parts:["I am ", ". (уйдаж байна)"], opts:["bored","boring"], a:0, fix:"Хүн мэдэрнэ → I am borED."},
      {q:"-ed/-ing:", parts:["The film is ", ". (кино уйтгартай)"], opts:["boring","bored"], a:0, fix:"Юм нөлөөлнө → borING."},
      {q:"-ed/-ing:", parts:["I'm ", " in music."], opts:["interested","interesting"], a:0, fix:"Хүн → interestED in."},
      {q:"-ed/-ing:", parts:["The lesson was ", "."], opts:["interesting","interested"], a:0, fix:"Хичээл → interestING."}
    ],
    speak:{ scene:'Мэдрэмжээ хуваалцах', turns:[
      {ruby:"How was the film last night?", pron:"хау воз зэ филм ласт найт?", mn:"Өнгөрсөн шөнийн кино ямар байсан бэ?",
        choices:[{t:"Terrible! It was so boring — I was bored after ten minutes.",best:true,mn:"Аймшигтай! Их уйтгартай байсан — 10 минутын дараа уйдчихсан."},{t:"Terrible! It was so bored and I was boring.",best:false,fix:"Кино = borING, би = borED (эсрэгээрээ!)."}]},
      {ruby:"What do you like watching then?", pron:"вот ду ю лайк вочинг зэн?", mn:"Тэгвэл юу үзэх дуртай вэ?",
        choices:[{t:"I'm interested in documentaries. They're really interesting!",best:true,mn:"Баримтат кино сонирхдог. Үнэхээр сонирхолтой!"},{t:"I'm interesting in documentaries.",best:false,fix:"Хүн → I'm interestED IN."}]},
      {ruby:"Are you going to the concert on Friday?", pron:"а ю гоуинг ту зэ консэрт он фрайдэй?", mn:"Баасанд тоглолт явах уу?",
        choices:[{t:"Yes! I'm so excited about it!",best:true,mn:"Тийм! Их догдолж байна!"},{t:"Yes! I'm so exciting!",best:false,fix:"Хүн → I'm excitED."}]}
    ]}
  },
  {
    id:'a2m4l2', title:"4.2 Найз нөхөрлөл", level:"A2 · М4",
    blurb:"angry with, proud of — тэмдэг нэр + угтвар ⭐",
    rule:{
      h:"Зорилго ба дүрэм: тэмдэг нэр + угтвар үг",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тэмдэг нэр бүр өөрийн угтвартай — цээжлэхээс өөр арга алга!<br><br>
        <b>WITH (хүнтэй холбоотой):</b>
        <div style="margin:12px 0"><span class="tag">angry with someone · happy with · pleased with · disappointed with</span></div>
        <b>ABOUT (нөхцөл байдал):</b>
        <div style="margin:12px 0"><span class="tag">worried about · excited about · sorry about · upset about</span></div>
        <b>OF:</b>
        <div style="margin:12px 0"><span class="tag">proud of · afraid of · tired of · jealous of · fond of</span></div>
        <b>IN / TO / AT:</b>
        <div style="margin:12px 0"><span class="tag">interested IN · kind TO · nice TO · good AT · bad AT</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        friendship /ˈfrendʃɪp/ — нөхөрлөл · close /kloʊs/ — дотно · loyal /ˈlɔɪəl/ — үнэнч<br>
        proud /praʊd/ — бахархсан · jealous /ˈdʒeləs/ — атаархсан · honest /ˈɒnɪst/ — шударга<br>
        selfish /ˈselfɪʃ/ — хувиа хичээсэн · generous /ˈdʒenərəs/ — өгөөмөр · rely on /rɪˈlaɪ ɒn/ — найдах<br>
        get on with /ɡet ɒn wɪð/ — эвтэй байх · fall out /fɔːl aʊt/ — муудалцах · make up /meɪk ʌp/ — эвлэрэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «angry ON someone» ✗ (орос маягийн) → <b>angry WITH</b> ✓. «proud with» ✗ → <b>proud OF</b> ✓. «interested ON» ✗ → <b>interested IN</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ХҮНД уурлана → angry WITH · ЮМАНД санаа зовно → worried ABOUT · ХҮНЭЭР бахархана → proud OF».</p>`
    },
    phrases:[
      {en:"I'm very proud of my best friend.", pron:"айм вэри прауд ов май бэст фрэнд.", mn:"Дотны найзаараа их бахархдаг."},
      {en:"She was angry with me for a week.", pron:"ши воз энгри виз ми фор э вийк.", mn:"Тэр надад долоо хоног уурласан."},
      {en:"I'm worried about our friendship.", pron:"айм варид эбаут ауэр фрэндшип.", mn:"Нөхөрлөлийнхөө талаар санаа зовж байна."},
      {en:"You can always rely on a true friend.", pron:"ю кэн олвэйз рилай он э трү фрэнд.", mn:"Жинхэнэ найздаа үргэлж найдаж болно."},
      {en:"We fell out, but we made up quickly.", pron:"ви фэл аут, бат ви мэйд ап квикли.", mn:"Бид муудалцсан ч хурдан эвлэрсэн."}
    ],
    exercises:[
      {q:"Угтвар:", parts:["I'm proud ", " my friend."], opts:["of","with"], a:0, fix:"proud OF."},
      {q:"Угтвар:", parts:["She was angry ", " me."], opts:["with","on"], a:0, fix:"Хүнд → angry WITH."},
      {q:"Угтвар:", parts:["I'm worried ", " the exam."], opts:["about","for"], a:0, fix:"worried ABOUT."},
      {q:"Угтвар:", parts:["He is interested ", " art."], opts:["in","on"], a:0, fix:"interested IN."}
    ],
    speak:{ scene:'Найзтайгаа зөрчилдөх', turns:[
      {ruby:"You look upset. What's wrong?", pron:"ю лүк апсэт. вотс ронг?", mn:"Гунигтай харагдаж байна. Юу болов?",
        choices:[{t:"My best friend is angry with me. I'm worried about it.",best:true,mn:"Дотны найз маань надад уурласан. Санаа зовж байна."},{t:"My friend is angry on me. I'm worried for it.",best:false,fix:"angry WITH me. worried ABOUT it."}]},
      {ruby:"What happened between you?", pron:"вот хэпэнд битвийн ю?", mn:"Та хоёрын хооронд юу болов?",
        choices:[{t:"We fell out last week. It was such a stupid argument!",best:true,mn:"Өнгөрсөн долоо хоногт муудалцсан. Ямар тэнэг маргаан гээч!"},{t:"We fell out. It was so a stupid argument.",best:false,fix:"Нэр үгтэй → SUCH a stupid argument."}]},
      {ruby:"You should talk to her. She's a good person.", pron:"ю шүд ток ту хёр. шиз э гүд пөрсн.", mn:"Түүнтэй ярих хэрэгтэй. Тэр сайн хүн шүү дээ.",
        choices:[{t:"You're right. I'm proud of our friendship — we'll make up.",best:true,mn:"Зөв. Би нөхөрлөлөөрөө бахархдаг — эвлэрнэ."},{t:"You're right. I'm proud with our friendship.",best:false,fix:"proud OF."}]}
    ]}
  },
  {
    id:'a2m4l3', title:"4.3 Санал бодол", level:"A2 · М4",
    blurb:"So do I / Neither do I — санал нийлэх ⭐",
    rule:{
      h:"Зорилго ба дүрэм: So do I / Neither do I",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Би ч бас» гэж богиноор хэлэх — ярианы амин чухал хэсэг.<br><br>
        <b>2 хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">БАТЛАХ санал нийлэх → SO + туслах + I: «I like coffee.» — «So do I.»</span><span class="tag">ҮГҮЙСГЭХ санал нийлэх → NEITHER + туслах + I: «I don't like tea.» — «Neither do I.»</span></div>
        <b>⚠️ Дараалал эргэдэг!</b> So do I ✓ (So I do ✗)<br><br>
        <b>Туслах үгээ эхний өгүүлбэрээс ав:</b>
        <div style="margin:12px 0"><span class="tag">«I am tired.» → «So am I.»</span><span class="tag">«I went there.» → «So did I.»</span><span class="tag">«I've finished.» → «So have I.»</span><span class="tag">«I can swim.» → «So can I.»</span></div>
        <b>Санал зөрөх:</b> «I like coffee.» — «I don't.» / «I don't like tea.» — «I do.»
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        opinion /əˈpɪnjən/ — санал бодол · agree /əˈɡriː/ — санал нийлэх · disagree /ˌdɪsəˈɡriː/ — зөрөх<br>
        think /θɪŋk/ — бодох · believe /bɪˈliːv/ — итгэх · point of view /pɔɪnt əv vjuː/ — үзэл бодол<br>
        exactly /ɪɡˈzæktli/ — яг · maybe /ˈmeɪbi/ — магадгүй · right /raɪt/ — зөв<br>
        wrong /rɒŋ/ — буруу · same /seɪm/ — ижил · differ /ˈdɪfər/ — ялгаатай байх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «So I do» ✗ → <b>So do I</b> ✓ (дараалал эргэнэ). Мөн «Neither I do» ✗ → <b>Neither do I</b> ✓. Үгүйсгэлд «So don't I» ✗ → <b>Neither do I</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «(+) SO do I · (−) NEITHER do I» — хоёуланд нь ДАРААЛАЛ ЭРГЭНЭ.</p>`
    },
    phrases:[
      {en:"I love Mongolian food. — So do I!", pron:"ай лав Монголиан фүд. — соу ду ай!", mn:"Би монгол хоолонд дуртай. — Би ч бас!"},
      {en:"I don't like horror films. — Neither do I.", pron:"ай доунт лайк хоррор филмз. — найзэр ду ай.", mn:"Би аймшгийн кинонд дургүй. — Би ч бас."},
      {en:"I'm really tired today. — So am I.", pron:"айм риали тайэрд тудэй. — соу эм ай.", mn:"Өнөөдөр их ядарлаа. — Би ч бас."},
      {en:"In my opinion, he is right.", pron:"ин май опиньон, хи из райт.", mn:"Миний бодлоор тэр зөв."},
      {en:"I don't agree with you.", pron:"ай доунт эгрий виз ю.", mn:"Би тантай санал нийлэхгүй байна."}
    ],
    exercises:[
      {q:"Дараалал:", parts:["I like coffee. — ", "!"], opts:["So do I","So I do"], a:0, fix:"Дараалал эргэнэ → So do I."},
      {q:"Үгүйсгэл:", parts:["I don't like tea. — ", "."], opts:["Neither do I","So don't I"], a:0, fix:"Үгүйсгэлд → Neither do I."},
      {q:"Туслах үг:", parts:["I'm tired. — So ", " I."], opts:["am","do"], a:0, fix:"be-тэй → So AM I."},
      {q:"Туслах үг:", parts:["I went there. — So ", " I."], opts:["did","do"], a:0, fix:"Өнгөрсөн → So DID I."}
    ],
    speak:{ scene:'Санал солилцох', turns:[
      {ruby:"I love Mongolian food, especially buuz!", pron:"ай лав Монголиан фүд, эспэшэли бууз!", mn:"Би монгол хоолонд, ялангуяа буузанд дуртай!",
        choices:[{t:"So do I! My mother makes the best ones.",best:true,mn:"Би ч бас! Ээж маань хамгийн амттайг нь хийдэг."},{t:"So I do! My mother makes best.",best:false,fix:"Дараалал эргэнэ → SO DO I."}]},
      {ruby:"But I don't like spicy food at all.", pron:"бат ай доунт лайк спайси фүд эт ол.", mn:"Гэхдээ халуун ногоотой хоолонд огт дургүй.",
        choices:[{t:"Neither do I! It's too hot for me.",best:true,mn:"Би ч бас! Надад хэтэрхий халуун."},{t:"So don't I! Too hot for me.",best:false,fix:"Үгүйсгэлд → NEITHER DO I."}]},
      {ruby:"I'm really hungry now. Let's eat!", pron:"айм риали хангри нау. летс ийт!", mn:"Одоо их өлсөж байна. Идэцгээе!",
        choices:[{t:"So am I! Good idea.",best:true,mn:"Би ч бас! Гоё санаа."},{t:"So do I! Good idea.",best:false,fix:"«I'm» = be → So AM I."}]}
    ]}
  },
  {
    id:'a2m4l4', title:"4.4 Зөрчил", level:"A2 · М4",
    blurb:"He told me to wait — үйл үг + хүн + to ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: verb + object + to-infinitive",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Хэн нэгнийг ЮУ хийхийг хүсэх/хэлэх» — маргаан, зөрчил ярихад зайлшгүй.<br><br>
        <b>Бүтэц: үйл үг + ХҮН + TO + үйл үг</b>
        <div style="margin:12px 0"><span class="tag">He told ME to wait. = Тэр надад хүлээхийг хэлсэн.</span><span class="tag">I want YOU to listen. = Би чамайг сонсоосой гэж хүсэж байна.</span><span class="tag">She asked HIM to help. = Тэр түүнээс туслахыг хүссэн.</span></div>
        <b>Ийм үйл үгс:</b> tell · ask · want · expect · advise · invite · remind · allow.<br>
        <b>⚠️ Онцгой — TO АВДАГГҮЙ:</b>
        <div style="margin:12px 0"><span class="tag">make: He made me wait. (to ✗ — албадсан)</span><span class="tag">let: She let me go. (to ✗ — зөвшөөрсөн)</span></div>
        <b>tell ⟷ say:</b> tell + ХҮН (told me), say + ХҮНГҮЙ (said that...).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        conflict /ˈkɒnflɪkt/ — зөрчил · argument /ˈɑːrɡjumənt/ — маргаан · misunderstanding /ˌmɪsʌndərˈstændɪŋ/ — үл ойлголцол<br>
        blame /bleɪm/ — буруутгах · shout /ʃaʊt/ — хашгирах · ignore /ɪɡˈnɔːr/ — үл тоох<br>
        interrupt /ˌɪntəˈrʌpt/ — таслах · calm down /kɑːm daʊn/ — тайвшрах · listen /ˈlɪsn/ — сонсох<br>
        remind /rɪˈmaɪnd/ — сануулах · allow /əˈlaʊ/ — зөвшөөрөх · expect /ɪkˈspekt/ — хүлээх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He told to me» ✗ → <b>He told ME to wait</b> ✓ (tell-д «to» хэрэггүй). «He made me to wait» ✗ → <b>made me wait</b> ✓ (make-д to ✗). «I want that you listen» ✗ → <b>I want YOU TO listen</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Үйл үг + ХҮН + TO + үйл үг · Гэхдээ MAKE ба LET нь to-гүй».</p>`
    },
    phrases:[
      {en:"He told me to wait, but he never came.", pron:"хи тоулд ми ту вэйт, бат хи нэвэр кэйм.", mn:"Тэр надад хүлээхийг хэлсэн ч хэзээ ч ирээгүй."},
      {en:"I want you to listen to me.", pron:"ай вонт ю ту лисн ту ми.", mn:"Би чамайг намайг сонсоосой гэж хүсэж байна."},
      {en:"Please don't interrupt me!", pron:"плийз доунт интэрапт ми!", mn:"Намайг битгий тасал!"},
      {en:"She asked me to apologize.", pron:"ши аскт ми ту эположайз.", mn:"Тэр надаас уучлалт гуйхыг хүссэн."},
      {en:"My manager made me stay late.", pron:"май мэнэжэр мэйд ми стэй лэйт.", mn:"Менежер маань намайг оройтуулж ажиллуулсан."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["He told ", " wait."], opts:["me to","to me to"], a:0, fix:"tell + ХҮН + to → told me to wait."},
      {q:"Бүтэц:", parts:["I want ", " listen."], opts:["you to","that you"], a:0, fix:"want + ХҮН + to → want you to listen."},
      {q:"Онцгой (make):", parts:["He made me ", "."], opts:["wait","to wait"], a:0, fix:"make-д to ✗ → made me wait."},
      {q:"Онцгой (let):", parts:["She let me ", "."], opts:["go","to go"], a:0, fix:"let-д to ✗ → let me go."}
    ],
    speak:{ scene:'Маргаан', turns:[
      {ruby:"Why are you upset with Bat?", pron:"вай а ю апсэт виз Бат?", mn:"Яагаад Батад гомдсон бэ?",
        choices:[{t:"He told me to wait for an hour, but he never came!",best:true,mn:"Тэр надад нэг цаг хүлээхийг хэлсэн ч ирээгүй!"},{t:"He told to me wait one hour.",best:false,fix:"He told ME TO wait."}]},
      {ruby:"Did you talk to him about it?", pron:"дид ю ток ту хим эбаут ит?", mn:"Түүнтэй энэ тухай ярьсан уу?",
        choices:[{t:"I tried, but he didn't let me finish. He kept interrupting!",best:true,mn:"Оролдсон ч дуусгуулаагүй. Байнга таслаад байсан!"},{t:"I tried, but he didn't let me to finish.",best:false,fix:"let-д to ✗ → let me FINISH."}]},
      {ruby:"What do you want him to do now?", pron:"вот ду ю вонт хим ту ду нау?", mn:"Одоо түүнийг юу хийгээсэй гэж хүсэж байна?",
        choices:[{t:"I just want him to listen and apologize.",best:true,mn:"Зүгээр л сонсоод уучлалт гуйгаасай гэж хүсэж байна."},{t:"I want that he listens and apologize.",best:false,fix:"I want HIM TO listen."}]}
    ]}
  },
  {
    id:'a2m4l5', title:"4.5 Уучлал", level:"A2 · М4",
    blurb:"sorry for + -ing ⟷ sorry to + verb",
    rule:{
      h:"Зорилго ба дүрэм: уучлал гуйх бүтцүүд",
      html:`<b>🎯 Зорилго:</b> Уучлалаа зөв, чин сэтгэлээсээ илэрхийлэх.<br><br>
        <b>2 өөр бүтэц, 2 өөр цаг:</b>
        <div style="margin:12px 0"><span class="tag">sorry FOR + -ing = АЛЬ ХЭДИЙН хийчихсэн зүйл: I'm sorry for shouting. (хашгирсандаа)</span><span class="tag">sorry TO + үйл үг = ЯГ ОДОО хийх гэж буй зүйл: I'm sorry to interrupt. (тасалж байгаадаа)</span></div>
        <b>Бусад хэлбэрүүд:</b>
        <div style="margin:12px 0"><span class="tag">I'm sorry about + нэр үг: I'm sorry about yesterday.</span><span class="tag">I apologize for + -ing (албан ёсны)</span><span class="tag">It was my fault. = Миний буруу.</span><span class="tag">I didn't mean to. = Санаатай биш.</span></div>
        <b>Хариулт:</b> That's okay. / Don't worry about it. / Never mind. / Apology accepted.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        apologize /əˈpɒlədʒaɪz/ — уучлалт гуйх · apology /əˈpɒlədʒi/ — уучлал · fault /fɔːlt/ — буруу<br>
        forgive /fərˈɡɪv/ — уучлах · regret /rɪˈɡret/ — харамсах · mean /miːn/ — санаархах<br>
        hurt /hɜːrt/ — гомдоох · promise /ˈprɒmɪs/ — амлах · admit /ədˈmɪt/ — хүлээн зөвшөөрөх<br>
        excuse /ɪkˈskjuːs/ — шалтаг · misunderstand /ˌmɪsʌndərˈstænd/ — буруу ойлгох · again /əˈɡen/ — дахин</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Sorry for interrupt» ✗ → <b>sorry FOR interruptING</b> ✓ (угтварын ард -ing). «Sorry to shouting» ✗ → <b>sorry TO interrupt</b> (to + нүцгэн үйл үг).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хийчихсэн бол FOR + -ING · Хийх гэж байвал TO + үйл үг».</p>`
    },
    phrases:[
      {en:"I'm sorry for shouting at you yesterday.", pron:"айм сори фор шаутинг эт ю йестэрдэй.", mn:"Өчигдөр чам руу хашгирсандаа уучлаарай."},
      {en:"I'm sorry to interrupt, but it's important.", pron:"айм сори ту интэрапт, бат итс импортэнт.", mn:"Тасалж байгаад уучлаарай, гэхдээ чухал юм."},
      {en:"It was my fault. I didn't mean to hurt you.", pron:"ит воз май фолт. ай диднт мийн ту хөрт ю.", mn:"Миний буруу. Чамайг гомдоох санаагүй байсан."},
      {en:"I promise it won't happen again.", pron:"ай промис ит воунт хэпэн эгэн.", mn:"Дахиж ийм зүйл болохгүй гэж амлая."},
      {en:"That's okay. Don't worry about it.", pron:"зэтс оукэй. доунт вари эбаут ит.", mn:"Зүгээр. Санаа бүү зов."}
    ],
    exercises:[
      {q:"for/to:", parts:["I'm sorry for ", " at you."], opts:["shouting","shout"], a:0, fix:"for + -ing → shouting."},
      {q:"for/to:", parts:["I'm sorry ", " interrupt."], opts:["to","for"], a:0, fix:"Яг одоо → sorry TO interrupt."},
      {q:"about:", parts:["I'm sorry ", " yesterday."], opts:["about","for"], a:0, fix:"Нэр үгтэй → sorry ABOUT."},
      {q:"Хэллэг:", parts:["I didn't ", " to hurt you."], opts:["mean","meant"], a:0, fix:"didn't + нүцгэн → mean."}
    ],
    speak:{ scene:'Уучлалт гуйх', turns:[
      {ruby:"Can we talk? About yesterday...", pron:"кэн ви ток? эбаут йестэрдэй...", mn:"Ярьж болох уу? Өчигдрийн тухай...",
        choices:[{t:"Yes. I'm sorry for shouting at you. It was my fault.",best:true,mn:"Тийм. Чам руу хашгирсандаа уучлаарай. Миний буруу."},{t:"Yes. I'm sorry for shout at you.",best:false,fix:"for + shoutING."}]},
      {ruby:"I was really hurt, you know.", pron:"ай воз риали хөрт, ю ноу.", mn:"Би үнэхээр гомдсон шүү дээ.",
        choices:[{t:"I know. I didn't mean to hurt you. I promise it won't happen again.",best:true,mn:"Мэдэж байна. Гомдоох санаагүй байсан. Дахихгүй гэж амлая."},{t:"I know. I didn't meant to hurt you.",best:false,fix:"didn't MEAN (нүцгэн хэлбэр)."}]},
      {ruby:"Okay. Apology accepted!", pron:"оукэй. эполоджи эксэптид!", mn:"За. Уучлалыг тань хүлээн авлаа!",
        choices:[{t:"Thank you. I'm so glad we've made up!",best:true,mn:"Баярлалаа. Эвлэрсэнд их баяртай байна!"},{t:"Thank you. I'm so glad we made up already.",best:false,fix:"we'VE MADE up (одоотой холбоотой)."}]}
    ]}
  },
  {
    id:'a2m4l6', title:"4.6 Зөвлөгөө", level:"A2 · М4",
    blurb:"If I were you, I'd... — 2-р нөхцөл ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Second conditional (төсөөллийн нөхцөл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хамгийн байгалийн зөвлөгөө — «Би чиний оронд байсан бол...»<br><br>
        <b>Бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">IF + ӨНГӨРСӨН ЦАГ , WOULD + үйл үг</span><span class="tag">If I HAD money, I WOULD travel.</span></div>
        <b>⚠️ Өнгөрсөн цаг ч гэсэн ӨНГӨРСНИЙГ ярихгүй!</b> Энэ бол <b>бодит бус төсөөлөл</b>:
        <div style="margin:12px 0"><span class="tag">1-р нөхцөл (бодит): If it rains, I'll stay. (бороо орж магадгүй)</span><span class="tag">2-р нөхцөл (бодит бус): If I were a bird, I'd fly. (шувуу биш шүү дээ!)</span></div>
        <b>Зөвлөгөөний алтан хэллэг:</b>
        <div style="margin:12px 0"><span class="tag">If I WERE you, I'd talk to her. = Би чиний оронд байсан бол ярина.</span></div>
        <b>Онцгой:</b> энд <b>was</b> биш <b>WERE</b> — бүх биед! (If I were / If he were)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        advice /ədˈvaɪs/ — зөвлөгөө · suggest /səˈdʒest/ — санал болгох · recommend /ˌrekəˈmend/ — зөвлөх<br>
        imagine /ɪˈmædʒɪn/ — төсөөлөх · situation /ˌsɪtʃuˈeɪʃn/ — нөхцөл байдал · choice /tʃɔɪs/ — сонголт<br>
        decide /dɪˈsaɪd/ — шийдэх · consider /kənˈsɪdər/ — эргэцүүлэх · perhaps /pərˈhæps/ — магадгүй<br>
        instead /ɪnˈsted/ — оронд нь · honest /ˈɒnɪst/ — шударга · truth /truːθ/ — үнэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have money» ✗ — if талд would ✗: <b>If I HAD money</b> ✓. Мөн «If I was you» — ярианд болох ч зөв нь <b>If I WERE you</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF талд WOULD хэзээ ч байхгүй» — 1-р нөхцөлд одоо цаг, 2-р нөхцөлд өнгөрсөн цаг.</p>`
    },
    phrases:[
      {en:"If I were you, I'd talk to her.", pron:"иф ай вөр ю, айд ток ту хёр.", mn:"Би чиний оронд байсан бол түүнтэй ярина."},
      {en:"If I had more time, I would learn Japanese.", pron:"иф ай хэд мор тайм, ай вүд лөрн Жэпэнийз.", mn:"Хэрэв илүү цаг байсан бол япон хэл сурах байсан."},
      {en:"What would you do if you were in my situation?", pron:"вот вүд ю ду иф ю вөр ин май ситюэйшн?", mn:"Чи миний байранд байсан бол яах байсан бэ?"},
      {en:"If I were rich, I'd travel the world.", pron:"иф ай вөр рич, айд трэвл зэ вөрлд.", mn:"Баян байсан бол дэлхийг тойрон аялах байсан."},
      {en:"I'd tell her the truth if I were you.", pron:"айд тэл хёр зэ трүс иф ай вөр ю.", mn:"Би чиний оронд байсан бол үнэнийг хэлнэ."}
    ],
    exercises:[
      {q:"if талд:", parts:["If I ", " money, I'd travel."], opts:["had","would have"], a:0, fix:"if талд would ✗ → If I HAD money."},
      {q:"Гол хэсэг:", parts:["If I were you, I ", " talk to her."], opts:["would","will"], a:0, fix:"2-р нөхцөл → would."},
      {q:"Онцгой:", parts:["If I ", " you, I'd go."], opts:["were","was"], a:0, fix:"Зөв нь → If I WERE you."},
      {q:"1 ⟷ 2:", parts:["If it ", " tomorrow, I'll stay home. (бодит)"], opts:["rains","rained"], a:0, fix:"Бодит ирээдүй → 1-р нөхцөл: rains."}
    ],
    speak:{ scene:'Найзад зөвлөх', turns:[
      {ruby:"My friend is still angry with me. What should I do?", pron:"май фрэнд из стил энгри виз ми. вот шүд ай ду?", mn:"Найз маань над руу уурласан хэвээр. Яах вэ?",
        choices:[{t:"If I were you, I'd talk to her honestly.",best:true,mn:"Би чиний оронд байсан бол түүнтэй чин сэтгэлээсээ ярина."},{t:"If I was you, I will talk to her.",best:false,fix:"If I WERE you, I'D talk."}]},
      {ruby:"But I'm afraid she won't listen.", pron:"бат айм эфрэйд ши воунт лисн.", mn:"Гэхдээ сонсохгүй байх вий гэж айж байна.",
        choices:[{t:"If you had a real friendship, she would listen.",best:true,mn:"Хэрэв жинхэнэ нөхөрлөл байсан бол тэр сонсоно."},{t:"If you would have real friendship, she listen.",best:false,fix:"if талд would ✗ → If you HAD... she WOULD listen."}]},
      {ruby:"You're right. What would you say to her?", pron:"юр райт. вот вүд ю сэй ту хёр?", mn:"Зөв. Чи түүнд юу гэж хэлэх байсан бэ?",
        choices:[{t:"I'd say sorry for shouting and ask her to forgive me.",best:true,mn:"Хашгирсандаа уучлалт гуйж, уучлаарай гэж хэлнэ."},{t:"I say sorry for shout and ask her forgive me.",best:false,fix:"I'D say sorry for shoutING and ask her TO forgive me."}]}
    ]}
  },
  {
    id:'a2m4l7', title:"4.7 Урилга", level:"A2 · М4",
    blurb:"Would you mind...? Do you fancy...? — урих ⭐",
    rule:{
      h:"Зорилго ба дүрэм: Would you mind / fancy + -ing",
      html:`<b>🎯 Зорилго:</b> ⭐ Урих, хүсэлт гаргах илүү нарийн хэлбэрүүд.<br><br>
        <b>Would you mind + -ing?</b> = ...болох уу? (маш эелдэг хүсэлт)
        <div style="margin:12px 0"><span class="tag">Would you mind waiting? = Хүлээж болох уу?</span></div>
        <b>⚠️ Хариулт нь ЭРГҮҮ!</b> «mind» = дургүйцэх учир:
        <div style="margin:12px 0"><span class="tag">«Would you mind waiting?» — «No, not at all!» = Зүгээр, хүлээе ✓</span><span class="tag">«Yes, I do mind» = Үгүй, дургүй байна ✗</span></div>
        <b>Do you fancy + -ing?</b> = ...ах уу? (найрсаг урилга, Британи):
        <div style="margin:12px 0"><span class="tag">Do you fancy going out tonight?</span></div>
        <b>Урилгын шат:</b> Would you like to...? (эелдэг) · Do you fancy...? (найзад) · How about...? (санал)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        mind /maɪnd/ — дургүйцэх · fancy /ˈfænsi/ — сонирхох · invite /ɪnˈvaɪt/ — урих<br>
        join /dʒɔɪn/ — нэгдэх · hang out /hæŋ aʊt/ — цаг өнгөрөөх · get together /ɡet təˈɡeðər/ — цуглах<br>
        available /əˈveɪləbl/ — чөлөөтэй · occasion /əˈkeɪʒn/ — тохиолдол · host /hoʊst/ — гэрийн эзэн<br>
        guest /ɡest/ — зочин · bring /brɪŋ/ — авчрах · refuse /rɪˈfjuːz/ — татгалзах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Would you mind to wait?» ✗ → <b>mind + -ing</b>: Would you mind waitING? ✓ Мөн зөвшөөрөхөд «Yes» гэвэл ЭСРЭГ утга гарна — <b>«No, not at all»</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MIND = дургүйцэх · Тиймээс зөвшөөрөхөд NO гэж хариул».</p>`
    },
    phrases:[
      {en:"Would you mind waiting for five minutes?", pron:"вүд ю майнд вэйтинг фор файв минитс?", mn:"5 минут хүлээж болох уу?"},
      {en:"No, not at all. Take your time!", pron:"ноу, нот эт ол. тэйк ёр тайм!", mn:"Зүгээр, огт асуудалгүй. Яараад хэрэггүй!"},
      {en:"Do you fancy going out tonight?", pron:"ду ю фэнси гоуинг аут тунайт?", mn:"Өнөө орой гадуур гарах уу?"},
      {en:"Would you mind bringing some tea?", pron:"вүд ю майнд брингинг сам тий?", mn:"Жаахан цай авчирч болох уу?"},
      {en:"I'd love to, but I'm busy tonight.", pron:"айд лав ту, бат айм бизи тунайт.", mn:"Дуртай ч өнөө орой завгүй."}
    ],
    exercises:[
      {q:"mind + :", parts:["Would you mind ", "?"], opts:["waiting","to wait"], a:0, fix:"mind + -ing → waiting."},
      {q:"Хариулт:", parts:["Would you mind waiting? — ", ", not at all!"], opts:["No","Yes"], a:0, fix:"Зөвшөөрөхөд → No, not at all."},
      {q:"fancy + :", parts:["Do you fancy ", " out?"], opts:["going","to go"], a:0, fix:"fancy + -ing → going."},
      {q:"Урилга:", parts:["Would you ", " to come?"], opts:["like","mind"], a:0, fix:"Would you LIKE to come?"}
    ],
    speak:{ scene:'Найзаа урих', turns:[
      {ruby:"Hi! Do you fancy going out tonight?", pron:"хай! ду ю фэнси гоуинг аут тунайт?", mn:"Сайн уу! Өнөө орой гадуур гарах уу?",
        choices:[{t:"I'd love to! What time?",best:true,mn:"Заавал! Хэдэн цагт?"},{t:"I love it! What time?",best:false,fix:"Урилгад → I'D LOVE TO!"}]},
      {ruby:"At seven. But would you mind waiting at the café first?", pron:"эт сэвн. бат вүд ю майнд вэйтинг эт зэ кэфэ фөрст?", mn:"7 цагт. Гэхдээ эхлээд кафед хүлээж болох уу?",
        choices:[{t:"No, not at all! I'll bring a book.",best:true,mn:"Зүгээр, огт асуудалгүй! Ном авчирна."},{t:"Yes, I don't mind. I bring a book.",best:false,fix:"«Yes» = дургүй гэсэн утга! → NO, not at all."}]},
      {ruby:"Great! Would you mind inviting Saraa too?", pron:"грэйт! вүд ю майнд инвайтинг Сараа ту?", mn:"Гоё! Сарааг ч бас урьж болох уу?",
        choices:[{t:"Of course not! I'll message her now.",best:true,mn:"Мэдээж зүгээр! Одоо түүн рүү бичье."},{t:"Of course! I message her now.",best:false,fix:"«Of course NOT» = зүгээр. I'LL message her."}]}
    ]}
  },
  {
    id:'a2m4l8', title:"4.8 Талархал", level:"A2 · М4",
    blurb:"Thank you for helping — талархал илэрхийлэх",
    rule:{
      h:"Зорилго ба дүрэм: талархлын бүтцүүд",
      html:`<b>🎯 Зорилго:</b> Талархлаа дулаахан, зөв илэрхийлэх.<br><br>
        <b>Thank you FOR + -ing / нэр үг:</b>
        <div style="margin:12px 0"><span class="tag">Thank you for helping me. (үйлдэл → -ing)</span><span class="tag">Thank you for your help. (нэр үг)</span></div>
        <b>Илүү дулаахан хэлбэрүүд:</b>
        <div style="margin:12px 0"><span class="tag">It was very kind OF YOU TO help. = Тусалсан тань их сайхан.</span><span class="tag">I really appreciate it. = Үнэхээр талархаж байна.</span><span class="tag">I couldn't have done it without you.</span></div>
        <b>Хариулт:</b> You're welcome. / No problem. / Any time. / Don't mention it. / It was my pleasure.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        thank /θæŋk/ — талархах · grateful /ˈɡreɪtfl/ — талархсан · appreciate /əˈpriːʃieɪt/ — үнэлэх<br>
        kind /kaɪnd/ — эелдэг · kindness /ˈkaɪndnəs/ — эелдэг байдал · favour /ˈfeɪvər/ — тусламж<br>
        support /səˈpɔːrt/ — дэмжлэг · pleasure /ˈpleʒər/ — таашаал · owe /oʊ/ — өртэй байх<br>
        deserve /dɪˈzɜːrv/ — зохих · repay /rɪˈpeɪ/ — хариулах · mention /ˈmenʃn/ — дурдах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Thank you for help me» ✗ → <b>for helpING me</b> ✓. «It was kind from you» ✗ → <b>kind OF you</b> ✓. Мөн «I appreciate for it» ✗ → <b>I appreciate it</b> (for ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Thank you FOR + -ING · kind OF you TO + үйл үг» — угтвар нь өөр!</p>`
    },
    phrases:[
      {en:"Thank you for helping me yesterday.", pron:"сэнк ю фор хэлпинг ми йестэрдэй.", mn:"Өчигдөр тусалсанд баярлалаа."},
      {en:"It was very kind of you to come.", pron:"ит воз вэри кайнд ов ю ту кам.", mn:"Ирсэн тань их сайхан байлаа."},
      {en:"I really appreciate your support.", pron:"ай риали эприщиэйт ёр сэпорт.", mn:"Таны дэмжлэгийг үнэхээр талархаж байна."},
      {en:"I couldn't have done it without you.", pron:"ай күднт хэв дан ит визаут ю.", mn:"Чамгүйгээр би үүнийг хийж чадахгүй байсан."},
      {en:"You're welcome. Any time!", pron:"юр вэлкам. эни тайм!", mn:"Зүгээр зүгээр. Хэзээ ч дуудаарай!"}
    ],
    exercises:[
      {q:"for + :", parts:["Thank you for ", " me."], opts:["helping","help"], a:0, fix:"for + -ing → helping."},
      {q:"Угтвар:", parts:["It was kind ", " you to come."], opts:["of","from"], a:0, fix:"kind OF you."},
      {q:"appreciate:", parts:["I really appreciate ", "."], opts:["it","for it"], a:0, fix:"appreciate + шууд: appreciate it."},
      {q:"Хариулт:", parts:["Thanks! — You're ", "."], opts:["welcome","welcomed"], a:0, fix:"Тогтмол хэллэг → You're welcome."}
    ],
    speak:{ scene:'Талархал илэрхийлэх', turns:[
      {ruby:"How did your presentation go?", pron:"хау дид ёр призэнтэйшн гоу?", mn:"Илтгэл тань яаж болов?",
        choices:[{t:"Great! Thank you for helping me prepare it.",best:true,mn:"Гайхалтай! Бэлдэхэд тусалсанд баярлалаа."},{t:"Great! Thank you for help me prepare.",best:false,fix:"for helpING me."}]},
      {ruby:"Oh, it was nothing!", pron:"оу, ит воз насинг!", mn:"Өө, юу ч биш ээ!",
        choices:[{t:"No, it was very kind of you. I couldn't have done it without you!",best:true,mn:"Үгүй, их сайхан байлаа. Чамгүйгээр хийж чадахгүй байсан!"},{t:"No, it was very kind from you.",best:false,fix:"kind OF you."}]},
      {ruby:"Any time! Let me know if you need help again.", pron:"эни тайм! лет ми ноу иф ю нийд хэлп эгэн.", mn:"Хэзээ ч! Дахин тусламж хэрэгтэй бол хэлээрэй.",
        choices:[{t:"I really appreciate it. I owe you one!",best:true,mn:"Үнэхээр талархаж байна. Чамд өртэй боллоо!"},{t:"I really appreciate for it.",best:false,fix:"appreciate IT (for ✗)."}]}
    ]}
  },
  {
    id:'a2m4l9', title:"4.9 Мессеж бичих", level:"A2 · М4",
    blurb:"She said she was busy — дам яриа ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: reported speech (дам яриа)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Бусдын үгийг дамжуулж хэлэх — мессеж, яриа дамжуулахад зайлшгүй.<br><br>
        <b>Алтан дүрэм: цаг НЭГ АЛХАМ ХОЙШ ухарна!</b>
        <div style="margin:12px 0"><span class="tag">«I am busy» → She said she WAS busy.</span><span class="tag">«I work here» → He said he WORKED there.</span><span class="tag">«I will come» → She said she WOULD come.</span><span class="tag">«I can help» → He said he COULD help.</span></div>
        <b>Төлөөний үг ч өөрчлөгдөнө:</b> «I am tired» → She said SHE was tired.<br><br>
        <b>say ⟷ tell:</b>
        <div style="margin:12px 0"><span class="tag">say + ХҮНГҮЙ: She said (that) she was busy.</span><span class="tag">tell + ХҮН: She told ME (that) she was busy.</span></div>
        <b>«that» орхиж болно</b> — ярианд ихэвчлэн орхидог.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        message /ˈmesɪdʒ/ — мессеж · text /tekst/ — бичих (мессеж) · reply /rɪˈplaɪ/ — хариулах<br>
        forward /ˈfɔːrwərd/ — дамжуулах · mention /ˈmenʃn/ — дурдах · explain /ɪkˈspleɪn/ — тайлбарлах<br>
        promise /ˈprɒmɪs/ — амлах · admit /ədˈmɪt/ — хүлээх · complain /kəmˈpleɪn/ — гомдоллох<br>
        according to /əˈkɔːrdɪŋ tuː/ — -ийн хэлснээр · anyway /ˈeniweɪ/ — ямар ч байсан · by the way /baɪ ðə weɪ/ — дашрамд</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She said me» ✗ → <b>She TOLD me</b> ✓ эсвэл <b>She SAID (that)</b> ✓. Мөн цаг ухраахаа мартах: «She said she is busy» ✗ → <b>she WAS busy</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цаг нэг алхам ХОЙШ: am→was · work→worked · will→would · can→could».</p>`
    },
    phrases:[
      {en:"She said she was busy today.", pron:"ши сэд ши воз бизи тудэй.", mn:"Тэр өнөөдөр завгүй гэж хэлсэн."},
      {en:"He told me he would come later.", pron:"хи тоулд ми хи вүд кам лэйтэр.", mn:"Тэр дараа ирнэ гэж надад хэлсэн."},
      {en:"Bat said he couldn't help us.", pron:"Бат сэд хи күднт хэлп ас.", mn:"Бат бидэнд тусалж чадахгүй гэж хэлсэн."},
      {en:"She told me she had a problem.", pron:"ши тоулд ми ши хэд э проблэм.", mn:"Тэр надад асуудалтай гэж хэлсэн."},
      {en:"By the way, he promised to call you.", pron:"бай зэ вэй, хи промист ту кол ю.", mn:"Дашрамд, тэр чам руу залгана гэж амласан."}
    ],
    exercises:[
      {q:"Цаг ухраах:", parts:["She said she ", " busy."], opts:["was","is"], a:0, fix:"am/is → WAS (нэг алхам хойш)."},
      {q:"Цаг ухраах:", parts:["He said he ", " come."], opts:["would","will"], a:0, fix:"will → WOULD."},
      {q:"say/tell:", parts:["She ", " me she was tired."], opts:["told","said"], a:0, fix:"ХҮНТЭЙ → told me."},
      {q:"say/tell:", parts:["He ", " that he was late."], opts:["said","told"], a:0, fix:"ХҮНГҮЙ → said that."}
    ],
    speak:{ scene:'Мессеж дамжуулах', turns:[
      {ruby:"Did Saraa reply to your message?", pron:"дид Сараа риплай ту ёр мэсиж?", mn:"Сараа мессежинд чинь хариулсан уу?",
        choices:[{t:"Yes. She said she was busy today.",best:true,mn:"Тийм. Өнөөдөр завгүй гэж хэлсэн."},{t:"Yes. She said me she is busy.",best:false,fix:"She TOLD me / She SAID she WAS busy."}]},
      {ruby:"Is she coming tomorrow then?", pron:"из ши каминг тумороу зэн?", mn:"Тэгвэл маргааш ирэх үү?",
        choices:[{t:"She told me she would come in the evening.",best:true,mn:"Орой ирнэ гэж надад хэлсэн."},{t:"She told me she will come evening.",best:false,fix:"will → WOULD come IN THE evening."}]},
      {ruby:"And Bat? Can he help us?", pron:"энд Бат? кэн хи хэлп ас?", mn:"Бат ч? Тэр бидэнд тусалж чадах уу?",
        choices:[{t:"No, he said he couldn't help — he had a problem at work.",best:true,mn:"Үгүй, тусалж чадахгүй гэсэн — ажил дээр асуудалтай байсан."},{t:"No, he said he can't help — he has a problem.",best:false,fix:"can't → COULDN'T, has → HAD."}]}
    ]}
  },
  {
    id:'a2m4l10', title:"4.10 Модулийн төсөл", level:"A2 · М4",
    blurb:"🏆 Найзтайгаа эвлэрэх мессеж",
    rule:{
      h:"Давтлага: A2 Модуль 4-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 4-ийн мэдлэгээ нэгтгэж, жинхэнэ хүний харилцаа бүтээх.<br><br>
        <b>Модуль 4-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">I'm bored ⟷ It's boring ⭐</span><span class="tag">angry WITH · proud OF · worried ABOUT</span><span class="tag">So do I / Neither do I</span><span class="tag">He told me TO wait</span><span class="tag">sorry FOR shouting ⟷ sorry TO interrupt</span><span class="tag">If I WERE you, I'D... ⭐</span><span class="tag">Would you mind waitING?</span><span class="tag">Thank you FOR helping / kind OF you TO</span><span class="tag">She said she WAS busy ⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Эвлэрэх мессеж (15+ өгүүлбэр):</b> Муудалцсан найздаа мессеж бич! Жишээ:<br>
        <i>Hi Saraa. I'm sorry for shouting at you last week. It was my fault and I didn't mean to hurt you. I was so tired and frustrated that day, but that's not an excuse. I'm really worried about our friendship — I'm proud of it and I don't want to lose you. Bat told me you were upset too. He said you cried after our argument. I felt terrible when I heard that. If I were you, I'd probably be angry with me too! Would you mind meeting me for a coffee this week? I'd love to talk. Thank you for being such a good friend for so many years. I really appreciate it.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Эвлэрэх 4 алхам: <b>Уучлал</b> (sorry for + -ing) → <b>Мэдрэмж</b> (I was frustrated) → <b>Ойлголт</b> (If I were you...) → <b>Урилга</b> (Would you mind...?).</p>`
    },
    phrases:[
      {en:"I'm sorry for shouting at you last week.", pron:"айм сори фор шаутинг эт ю ласт вийк.", mn:"Өнгөрсөн долоо хоногт хашгирсандаа уучлаарай."},
      {en:"I was so frustrated that day.", pron:"ай воз соу фрастрэйтид зэт дэй.", mn:"Тэр өдөр их бухимдсан байсан."},
      {en:"Bat told me you were upset too.", pron:"Бат тоулд ми ю вөр апсэт ту.", mn:"Бат чамайг ч бас гомдсон гэж хэлсэн."},
      {en:"If I were you, I'd be angry with me too!", pron:"иф ай вөр ю, айд би энгри виз ми ту!", mn:"Би чиний оронд байсан бол ч бас уурлах байсан!"},
      {en:"Would you mind meeting me for a coffee?", pron:"вүд ю майнд мийтинг ми фор э кофи?", mn:"Надтай кофе уухаар уулзаж болох уу?"}
    ],
    exercises:[
      {q:"Давтлага (-ed/-ing):", parts:["I was ", " that day."], opts:["frustrated","frustrating"], a:0, fix:"Хүн → frustratED."},
      {q:"Давтлага (угтвар):", parts:["I'm worried ", " our friendship."], opts:["about","for"], a:0, fix:"worried ABOUT."},
      {q:"Давтлага (2-р нөхцөл):", parts:["If I ", " you, I'd talk."], opts:["were","would be"], a:0, fix:"If I WERE you."},
      {q:"Давтлага (дам яриа):", parts:["He said you ", " upset."], opts:["were","are"], a:0, fix:"are → WERE (цаг ухарна)."}
    ],
    speak:{ scene:'🏆 Төсөл: Эвлэрэх', turns:[
      {ruby:"Hi. You wanted to talk?", pron:"хай. ю вонтид ту ток?", mn:"Сайн уу. Ярих гэсэн юм уу?",
        choices:[{t:"Yes. I'm sorry for shouting at you. It was my fault.",best:true,mn:"Тийм. Чам руу хашгирсандаа уучлаарай. Миний буруу."},{t:"Yes. I'm sorry for shout. It was my fault.",best:false,fix:"sorry for shoutING."}]},
      {ruby:"I was really hurt. Bat said you were angry with me.", pron:"ай воз риали хөрт. Бат сэд ю вөр энгри виз ми.", mn:"Би үнэхээр гомдсон. Бат чамайг надад уурласан гэж хэлсэн.",
        choices:[{t:"I was frustrated, not angry. If I were you, I'd be upset too.",best:true,mn:"Би бухимдсан, уураагүй. Би чиний оронд байсан бол ч гомдох байсан."},{t:"I was frustrating, not angry. If I was you, I be upset.",best:false,fix:"I was frustratED. If I WERE you, I'D be upset."}]},
      {ruby:"Okay... I forgive you.", pron:"оукэй... ай форгив ю.", mn:"За... Уучиллаа.",
        choices:[{t:"Thank you for being such a good friend. Would you mind meeting for coffee?",best:true,mn:"Ийм сайн найз болсонд баярлалаа. Кофе уухаар уулзаж болох уу?"},{t:"Thank you for be a good friend. Would you mind to meet?",best:false,fix:"for BEING... mind MEETING."}]}
    ]}
  },
  {
    id:'a2m5l1', title:"5.1 Хооллолт", level:"A2 · М5",
    blurb:"Eating vegetables is good — -ing нь эзэн ⭐",
    rule:{
      h:"Зорилго ба дүрэм: gerund (үйл үг нэр үг болох) + тоо хэмжээ",
      html:`<b>🎯 Зорилго:</b> ⭐ Үйл үгийг ӨГҮҮЛБЭРИЙН ЭЗЭН болгох — эрүүл мэндийн зөвлөгөөнд байнга хэрэглэдэг.<br><br>
        <b>Үйл үг + -ing = нэр үг (gerund):</b>
        <div style="margin:12px 0"><span class="tag">Eating vegetables IS good for you. (To eat ✓ ч болно, -ing илүү жам ёсны)</span><span class="tag">Drinking water IS important.</span></div>
        <b>⚠️ Gerund нь ҮРГЭЛЖ ГАНЦ тоо:</b> Eating vegetables IS ✓ (are ✗)<br><br>
        <b>Тоо хэмжээний нарийн үгс:</b>
        <div style="margin:12px 0"><span class="tag">plenty of = хангалттай их: plenty of water</span><span class="tag">hardly any = бараг байхгүй: hardly any sugar</span><span class="tag">a bit of = жаахан: a bit of salt</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        diet /ˈdaɪət/ — хоолны дэглэм · healthy /ˈhelθi/ — эрүүл · unhealthy /ʌnˈhelθi/ — эрүүл бус<br>
        vitamin /ˈvaɪtəmɪn/ — витамин · protein /ˈproʊtiːn/ — уураг · fat /fæt/ — өөх<br>
        sugar /ˈʃʊɡər/ — чихэр · balanced /ˈbælənst/ — тэнцвэртэй · avoid /əˈvɔɪd/ — зайлсхийх<br>
        plenty /ˈplenti/ — хангалттай · hardly /ˈhɑːrdli/ — бараг · portion /ˈpɔːrʃn/ — хэмжээ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Eating vegetables ARE good» ✗ — gerund ганц тоо: <b>IS good</b> ✓. Мөн «hardly any» аль хэдийн үгүйсгэсэн: «I don't eat hardly any sugar» ✗ → <b>I eat hardly any sugar</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Үйл үг эзэн болвол -ING + IS» — Eating is / Drinking is / Sleeping is.</p>`
    },
    phrases:[
      {en:"Eating vegetables is good for your health.", pron:"ийтинг вэжтэблз из гүд фор ёр хэлс.", mn:"Ногоо идэх нь эрүүл мэндэд сайн."},
      {en:"Drinking plenty of water is important.", pron:"дринкинг плэнти ов вотэр из импортэнт.", mn:"Хангалттай ус уух нь чухал."},
      {en:"I eat hardly any sugar now.", pron:"ай ийт хардли эни шүгэр нау.", mn:"Одоо бараг чихэр иддэггүй."},
      {en:"A balanced diet keeps you healthy.", pron:"э бэлэнст дайэт кийпс ю хэлси.", mn:"Тэнцвэртэй хоолны дэглэм эрүүл байлгадаг."},
      {en:"Avoiding fast food is difficult but worth it.", pron:"эвойдинг фаст фүд из дификалт бат вөрс ит.", mn:"Түргэн хоолноос зайлсхийх хэцүү ч үнэ цэнэтэй."}
    ],
    exercises:[
      {q:"Gerund:", parts:["", " vegetables is good."], opts:["Eating","Eat"], a:0, fix:"Эзэн → Eating (gerund)."},
      {q:"Ганц тоо:", parts:["Eating vegetables ", " good."], opts:["is","are"], a:0, fix:"Gerund → ганц тоо: IS."},
      {q:"Тоо хэмжээ:", parts:["Drink ", " of water."], opts:["plenty","hardly"], a:0, fix:"Хангалттай их → plenty of."},
      {q:"hardly any:", parts:["I eat ", " sugar."], opts:["hardly any","don't hardly any"], a:0, fix:"hardly any дангаараа үгүйсгэнэ."}
    ],
    speak:{ scene:'Хоолны дэглэм', turns:[
      {ruby:"You look really healthy! What's your secret?", pron:"ю лүк риали хэлси! вотс ёр сикрэт?", mn:"Та их эрүүл харагдаж байна! Нууц юу вэ?",
        choices:[{t:"Eating vegetables is my secret! And drinking plenty of water.",best:true,mn:"Ногоо идэх нь миний нууц! Бас хангалттай ус уух."},{t:"Eat vegetables are my secret.",best:false,fix:"EatING vegetables IS my secret."}]},
      {ruby:"Do you eat sugar?", pron:"ду ю ийт шүгэр?", mn:"Чихэр иддэг үү?",
        choices:[{t:"I eat hardly any sugar now. It was difficult at first!",best:true,mn:"Одоо бараг иддэггүй. Эхэндээ хэцүү байсан!"},{t:"I don't eat hardly any sugar.",best:false,fix:"hardly any аль хэдийн үгүйсгэсэн → I eat hardly any."}]},
      {ruby:"What about fast food?", pron:"вот эбаут фаст фүд?", mn:"Түргэн хоол яах вэ?",
        choices:[{t:"Avoiding it is hard, but a balanced diet keeps me healthy.",best:true,mn:"Зайлсхийхэд хэцүү ч тэнцвэртэй дэглэм эрүүл байлгадаг."},{t:"Avoid it is hard, but balanced diet keep me healthy.",best:false,fix:"AvoidING it IS hard... A balanced diet KEEPS me healthy."}]}
    ]}
  },
  {
    id:'a2m5l2', title:"5.2 Дасгал", level:"A2 · М5",
    blurb:"as good as / not as hard as — тэнцүү харьцуулалт ⭐",
    rule:{
      h:"Зорилго ба дүрэм: as ... as (тэнцүү зэрэг)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр зүйлийг ТЭНЦҮҮ гэж харьцуулах — «-er than»-аас өөр.<br><br>
        <b>Гурван хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">ТЭНЦҮҮ: as + тэмдэг нэр + as → Running is AS good AS swimming.</span><span class="tag">ТЭНЦҮҮ БИШ: not as + тэмдэг нэр + as → Yoga is NOT AS hard AS running.</span><span class="tag">ХАРЬЦУУЛАХ: -er than → Running is harder THAN yoga.</span></div>
        <b>Утга ижил:</b>
        <div style="margin:12px 0"><span class="tag">Yoga isn't as hard as running. = Running is harder than yoga.</span></div>
        <b>Тоо хэмжээтэй:</b> as much as, as many as, as often as.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        exercise /ˈeksərsaɪz/ — дасгал · workout /ˈwɜːrkaʊt/ — дасгалжилт · gym /dʒɪm/ — фитнес заал<br>
        stretch /stretʃ/ — сунгах · jog /dʒɒɡ/ — гүйх · lift /lɪft/ — өргөх<br>
        muscle /ˈmʌsl/ — булчин · fit /fɪt/ — чийрэг · strength /streŋθ/ — хүч<br>
        energy /ˈenərdʒi/ — эрч хүч · regular /ˈreɡjələr/ — тогтмол · improve /ɪmˈpruːv/ — сайжруулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «as good than» ✗ — as ... AS хос: <b>as good AS</b> ✓. Мөн «not so hard as» — болох ч <b>not AS hard AS</b> илүү түгээмэл.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «AS ... AS = тэнцүү (=) · -ER THAN = илүү (>)».</p>`
    },
    phrases:[
      {en:"Walking is as good as running for your health.", pron:"вокинг из эз гүд эз раннинг фор ёр хэлс.", mn:"Алхах нь эрүүл мэндэд гүйхтэй адил сайн."},
      {en:"Yoga isn't as hard as I thought.", pron:"йога изнт эз хард эз ай сот.", mn:"Иог миний бодсон шиг хэцүү биш."},
      {en:"I don't exercise as often as I should.", pron:"ай доунт эксэрсайз эз офн эз ай шүд.", mn:"Би хэрэгтэй хэмжээнд нь тогтмол дасгал хийдэггүй."},
      {en:"Regular exercise gives you more energy.", pron:"рэгюлэр эксэрсайз гивз ю мор энэржи.", mn:"Тогтмол дасгал илүү эрч хүч өгдөг."},
      {en:"I feel much fitter than last year.", pron:"ай фийл мач фитэр зэн ласт йир.", mn:"Өнгөрсөн жилээс хамаагүй чийрэг болсон."}
    ],
    exercises:[
      {q:"as...as:", parts:["Walking is as good ", " running."], opts:["as","than"], a:0, fix:"as ... AS хос."},
      {q:"Тэнцүү биш:", parts:["Yoga is ", " hard as running."], opts:["not as","not so much"], a:0, fix:"NOT AS hard AS."},
      {q:"Давтамж:", parts:["I don't exercise as ", " as I should."], opts:["often","much"], a:0, fix:"Давтамж → as OFTEN as."},
      {q:"Харьцуулах:", parts:["Running is ", " than yoga."], opts:["harder","as hard"], a:0, fix:"than-тай → harder."}
    ],
    speak:{ scene:'Дасгалын тухай', turns:[
      {ruby:"Do you go to the gym?", pron:"ду ю гоу ту зэ жим?", mn:"Фитнес заал явдаг уу?",
        choices:[{t:"Not often. But walking is as good as running for me.",best:true,mn:"Тийм ч олон биш. Гэхдээ надад алхах нь гүйхтэй адил сайн."},{t:"Not often. Walking is as good than running.",best:false,fix:"as good AS running."}]},
      {ruby:"Have you tried yoga?", pron:"хэв ю трайд йога?", mn:"Иог туршиж үзсэн үү?",
        choices:[{t:"Yes! It isn't as hard as I thought.",best:true,mn:"Тийм! Бодсон шиг хэцүү биш байсан."},{t:"Yes! It isn't so hard than I thought.",best:false,fix:"isn't AS hard AS I thought."}]},
      {ruby:"Do you feel better now?", pron:"ду ю фийл бэтэр нау?", mn:"Одоо илүү сайн байна уу?",
        choices:[{t:"Definitely! I feel much fitter than last year.",best:true,mn:"Гарцаагүй! Өнгөрсөн жилээс хамаагүй чийрэг болсон."},{t:"Yes! I feel more fitter than last year.",best:false,fix:"more + -er ✗ → MUCH fitter."}]}
    ]}
  },
  {
    id:'a2m5l3', title:"5.3 Унтах", level:"A2 · М5",
    blurb:"used to ⟷ be used to — сонгодог будлиан ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: used to ⟷ be used to ⟷ get used to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хамгийн будлиантай 3 бүтэц — ижил харагдана, ТЭС ӨӨР утгатай!<br><br>
        <b>1) used to + үйл үг</b> = өмнө нь ...дэг байсан (одоо үгүй):
        <div style="margin:12px 0"><span class="tag">I USED TO sleep late. = Өмнө нь оройтож унтдаг байсан.</span></div>
        <b>2) be used to + -ING</b> = дассан (одоо хэвийн):
        <div style="margin:12px 0"><span class="tag">I AM USED TO getting up early. = Эрт босоход дассан.</span></div>
        <b>3) get used to + -ING</b> = дасаж байгаа (үйл явц):
        <div style="margin:12px 0"><span class="tag">I'm GETTING USED TO the new schedule. = Шинэ хуваарьт дасаж байна.</span></div>
        <b>Ялгах түлхүүр:</b> <b>be/get</b> байвал → ард нь <b>-ING</b>. Байхгүй бол → <b>нүцгэн үйл үг</b>.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        sleep /sliːp/ — унтах · asleep /əˈsliːp/ — унтсан · awake /əˈweɪk/ — сэрүүн<br>
        insomnia /ɪnˈsɒmniə/ — нойргүйдэл · nap /næp/ — бага зэрэг унтах · dream /driːm/ — зүүд<br>
        snore /snɔːr/ — хурхирах · alarm /əˈlɑːrm/ — сэрүүлэг · rest /rest/ — амрах<br>
        routine /ruːˈtiːn/ — дэглэм · quality /ˈkwɒləti/ — чанар · deep /diːp/ — гүн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am used to get up early» ✗ → be-тэй бол -ing: <b>used to gettING</b> ✓. «I used to getting up» ✗ → be-гүй бол нүцгэн: <b>used to GET up</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BE/GET харагдвал -ING · Харагдахгүй бол нүцгэн үйл үг».</p>`
    },
    phrases:[
      {en:"I used to sleep late every day.", pron:"ай юзд ту слийп лэйт эври дэй.", mn:"Өмнө нь өдөр бүр оройтож унтдаг байсан."},
      {en:"Now I'm used to getting up at six.", pron:"нау айм юзд ту гетинг ап эт сикс.", mn:"Одоо 6 цагт босоход дассан."},
      {en:"I'm getting used to the new routine.", pron:"айм гетинг юзд ту зэ ню рутийн.", mn:"Шинэ дэглэмд дасаж байна."},
      {en:"Sleeping eight hours is important for your health.", pron:"слийпинг эйт ауэрз из импортэнт фор ёр хэлс.", mn:"8 цаг унтах нь эрүүл мэндэд чухал."},
      {en:"I didn't use to have a bedtime routine.", pron:"ай диднт юз ту хэв э бэдтайм рутийн.", mn:"Өмнө нь унтахын өмнөх дэглэмгүй байсан."}
    ],
    exercises:[
      {q:"used to:", parts:["I used to ", " late."], opts:["sleep","sleeping"], a:0, fix:"be-гүй → нүцгэн: used to sleep."},
      {q:"be used to:", parts:["I'm used to ", " up early."], opts:["getting","get"], a:0, fix:"be-тэй → -ing: used to getting."},
      {q:"get used to:", parts:["I'm getting used to ", " here."], opts:["living","live"], a:0, fix:"get used to + -ing → living."},
      {q:"Асуулт:", parts:["Did you ", " sleep late?"], opts:["use to","used to"], a:0, fix:"did гарвал → use to."}
    ],
    speak:{ scene:'Унтах дэглэм', turns:[
      {ruby:"You get up so early now! Was it always like this?", pron:"ю гет ап соу өрли нау! воз ит олвэйз лайк зис?", mn:"Одоо их эрт боздог юм байна! Үргэлж ийм байсан уу?",
        choices:[{t:"No! I used to sleep late every day.",best:true,mn:"Үгүй! Өмнө нь өдөр бүр оройтож унтдаг байсан."},{t:"No! I used to sleeping late.",best:false,fix:"used to + нүцгэн → used to SLEEP."}]},
      {ruby:"Isn't it hard to wake up at six?", pron:"изнт ит хард ту вэйк ап эт сикс?", mn:"6 цагт сэрэхэд хэцүү биш үү?",
        choices:[{t:"Not now. I'm used to getting up early.",best:true,mn:"Одоо үгүй. Эрт босоход дассан."},{t:"Not now. I'm used to get up early.",best:false,fix:"be-тэй → used to GETTING up."}]},
      {ruby:"How long did it take?", pron:"хау лонг дид ит тэйк?", mn:"Хэр удсан бэ?",
        choices:[{t:"About a month. Sleeping eight hours is really important!",best:true,mn:"Сар орчим. 8 цаг унтах нь үнэхээр чухал!"},{t:"About month. Sleep eight hours are important.",best:false,fix:"SleepING eight hours IS important."}]}
    ]}
  },
  {
    id:'a2m5l4', title:"5.4 Өвдөх", level:"A2 · М5",
    blurb:"You look tired / I hurt myself — мэдрэхүй + өөрөө",
    rule:{
      h:"Зорилго ба дүрэм: look/feel + тэмдэг нэр, эргэх төлөөний үг",
      html:`<b>🎯 Зорилго:</b> Бусдын байдлыг анзаарч, өөртөө хийсэн үйлдлээ хэлэх.<br><br>
        <b>1) Мэдрэхүйн үйл үг + ТЭМДЭГ НЭР</b> (дайвар үг ✗):
        <div style="margin:12px 0"><span class="tag">You LOOK tired. (looks tiredly ✗)</span><span class="tag">I FEEL sick. · It TASTES good. · That SMELLS nice. · It SOUNDS strange.</span></div>
        <b>look LIKE + нэр үг:</b> You look like your mother. (нэр үгтэй бол «like» хэрэгтэй!)<br><br>
        <b>2) Эргэх төлөөний үг (reflexive)</b> — үйлдэл ӨӨРТӨӨ буцвал:
        <div style="margin:12px 0"><span class="tag">myself · yourself · himself · herself · ourselves · themselves</span><span class="tag">I hurt MYSELF. = Би өөрийгөө гэмтээсэн.</span><span class="tag">Enjoy yourself! = Сайхан өнгөрүүл!</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        ill /ɪl/ — өвчтэй · pain /peɪn/ — өвдөлт · injury /ˈɪndʒəri/ — гэмтэл<br>
        cut /kʌt/ — зүсэх · burn /bɜːrn/ — түлэх · bruise /bruːz/ — хөх толбо<br>
        swollen /ˈswoʊlən/ — хавдсан · dizzy /ˈdɪzi/ — толгой эргэсэн · weak /wiːk/ — сул дорой<br>
        temperature /ˈtemprətʃər/ — халуун · symptom /ˈsɪmptəm/ — шинж тэмдэг · serious /ˈsɪriəs/ — ноцтой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You look tiredly» ✗ → мэдрэхүйн үйл үгийн ард ТЭМДЭГ НЭР: <b>look tired</b> ✓. Мөн «I hurt me» ✗ → <b>I hurt MYSELF</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «LOOK/FEEL/TASTE + тэмдэг нэр (-ly ✗) · Үйлдэл өөрт буцвал -SELF».</p>`
    },
    phrases:[
      {en:"You look tired. Are you okay?", pron:"ю лүк тайэрд. а ю оукэй?", mn:"Ядарсан харагдаж байна. Зүгээр үү?"},
      {en:"I feel dizzy and weak.", pron:"ай фийл дизи энд вийк.", mn:"Толгой эргэж, сул дорой байна."},
      {en:"I cut myself while I was cooking.", pron:"ай кат майсэлф вайл ай воз күкинг.", mn:"Хоол хийж байхдаа өөрийгөө зүсчихсэн."},
      {en:"My hand looks swollen.", pron:"май хэнд лүкс своулэн.", mn:"Гар маань хавдсан харагдаж байна."},
      {en:"You look like your mother!", pron:"ю лүк лайк ёр мазэр!", mn:"Та ээж шигээ харагдаж байна!"}
    ],
    exercises:[
      {q:"look + :", parts:["You look ", "."], opts:["tired","tiredly"], a:0, fix:"look + тэмдэг нэр → tired."},
      {q:"look like:", parts:["You look ", " your father."], opts:["like","—"], a:0, fix:"Нэр үгтэй → look LIKE."},
      {q:"Эргэх:", parts:["I cut ", " yesterday."], opts:["myself","me"], a:0, fix:"Өөрт буцна → myself."},
      {q:"feel + :", parts:["I feel ", "."], opts:["sick","sickly"], a:0, fix:"feel + тэмдэг нэр → sick."}
    ],
    speak:{ scene:'Өвчтэй найз', turns:[
      {ruby:"Are you okay? You look terrible!", pron:"а ю оукэй? ю лүк тэрибл!", mn:"Зүгээр үү? Их муу харагдаж байна!",
        choices:[{t:"I feel dizzy and weak. I think I have a temperature.",best:true,mn:"Толгой эргэж, сул дорой байна. Халуурч байгаа юм шиг."},{t:"I feel dizzily. I think I have temperature.",best:false,fix:"feel DIZZY (-ly ✗). have A temperature."}]},
      {ruby:"What's wrong with your hand?", pron:"вотс ронг виз ёр хэнд?", mn:"Гарт чинь юу болов?",
        choices:[{t:"I cut myself while I was cooking last night.",best:true,mn:"Өнгөрсөн шөнө хоол хийж байхдаа зүсчихсэн."},{t:"I cut me when I cooked last night.",best:false,fix:"cut MYSELF while I WAS cooking."}]},
      {ruby:"It looks swollen. You should see a doctor!", pron:"ит лүкс своулэн. ю шүд сий э доктор!", mn:"Хавдсан харагдаж байна. Эмчид үзүүлэх хэрэгтэй!",
        choices:[{t:"You're right. It hurts more than yesterday.",best:true,mn:"Зөв. Өчигдрөөс илүү өвдөж байна."},{t:"You're right. It hurts more as yesterday.",best:false,fix:"more THAN yesterday."}]}
    ]}
  },
  {
    id:'a2m5l5', title:"5.5 Эмчид үзүүлэх", level:"A2 · М5",
    blurb:"I've been feeling ill for 3 days — PP Continuous ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect Continuous",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өнгөрсөнд эхэлж ОДОО Ч ҮРГЭЛЖИЛЖ буй үйлдлийг онцлох.<br><br>
        <b>have/has + BEEN + үйл үг-ING:</b>
        <div style="margin:12px 0"><span class="tag">I HAVE BEEN feeling ill for three days.</span><span class="tag">How long HAVE you BEEN coughing?</span></div>
        <b>Present Perfect ⟷ PP Continuous:</b>
        <div style="margin:12px 0"><span class="tag">PP: I've had a headache for 3 days. (баримт)</span><span class="tag">PPC: I've been feeling ill for 3 days. (үргэлжилж буй ҮЙЛ ЯВЦ, онцолж байна)</span></div>
        <b>for / since хоёулаа ажиллана</b> (Модуль 3-ыг санаарай).<br>
        <b>⚠️ Онцгой:</b> know, like, want, have (эзэмших) нь <b>-ing авдаггүй</b> → PP хэрэглэнэ: I've known him for years ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        cough /kɒf/ — ханиалгах · sneeze /sniːz/ — найтаах · sore throat /sɔːr θroʊt/ — хоолой өвдөх<br>
        appointment /əˈpɔɪntmənt/ — цаг авах · examine /ɪɡˈzæmɪn/ — үзэх · diagnose /ˈdaɪəɡnoʊz/ — оношлох<br>
        prescription /prɪˈskrɪpʃn/ — жор · treatment /ˈtriːtmənt/ — эмчилгээ · recover /rɪˈkʌvər/ — эдгэрэх<br>
        infection /ɪnˈfekʃn/ — халдвар · antibiotic /ˌæntibaɪˈɒtɪk/ — антибиотик · rest /rest/ — амрах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am feeling ill for three days» ✗ → <b>I HAVE BEEN feeling ill for three days</b> ✓. «I've been knowing him» ✗ → know нь -ing авдаггүй: <b>I've known him</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE BEEN + ING = эхэлсэн, одоо ч үргэлжилж байна» — гурван хэсэг: have + been + -ing.</p>`
    },
    phrases:[
      {en:"I've been feeling ill for three days.", pron:"айв бийн фийлинг ил фор срий дэйз.", mn:"Гурван өдөр өвчтэй байна."},
      {en:"How long have you been coughing?", pron:"хау лонг хэв ю бийн кофинг?", mn:"Хэр удаан ханиалгаж байна вэ?"},
      {en:"I've had a sore throat since Monday.", pron:"айв хэд э сор сроут синс мандэй.", mn:"Даваа гарагаас хоолой минь өвдөж байна."},
      {en:"I'd like to make an appointment, please.", pron:"айд лайк ту мэйк эн эпойнтмэнт, плийз.", mn:"Цаг авмаар байна."},
      {en:"You need to rest and take antibiotics.", pron:"ю нийд ту рэст энд тэйк энтибайотикс.", mn:"Амарч, антибиотик уух хэрэгтэй."}
    ],
    exercises:[
      {q:"PPC бүтэц:", parts:["I've ", " feeling ill."], opts:["been","be"], a:0, fix:"have + BEEN + -ing."},
      {q:"PPC:", parts:["How long have you been ", "?"], opts:["coughing","cough"], a:0, fix:"been + -ing → coughing."},
      {q:"Онцгой үйл үг:", parts:["I've ", " him for years."], opts:["known","been knowing"], a:0, fix:"know нь -ing авдаггүй → known."},
      {q:"for/since:", parts:["I've had it ", " Monday."], opts:["since","for"], a:0, fix:"Эхлэх цэг → since."}
    ],
    speak:{ scene:'Эмчид үзүүлэх', turns:[
      {ruby:"Good morning. What seems to be the problem?", pron:"гүд морнинг. вот сиймз ту би зэ проблэм?", mn:"Өглөөний мэнд. Юу болов?",
        choices:[{t:"I've been feeling ill for three days.",best:true,mn:"Гурван өдөр өвчтэй байна."},{t:"I am feeling ill for three days.",best:false,fix:"I'VE BEEN feeling ill for three days."}]},
      {ruby:"How long have you been coughing?", pron:"хау лонг хэв ю бийн кофинг?", mn:"Хэр удаан ханиалгаж байна вэ?",
        choices:[{t:"Since Monday. And I've had a sore throat too.",best:true,mn:"Даваагаас. Хоолой ч бас өвдөж байна."},{t:"Since Monday. And I have sore throat.",best:false,fix:"I'VE HAD A sore throat."}]},
      {ruby:"Let me examine you. ... You have an infection.", pron:"лет ми игзэмин ю. ... ю хэв эн инфэкшн.", mn:"Үзье. ... Танд халдвар байна.",
        choices:[{t:"Is it serious? What treatment do I need?",best:true,mn:"Ноцтой юу? Ямар эмчилгээ хэрэгтэй вэ?"},{t:"Is serious? What treatment I need?",best:false,fix:"IS IT serious? What treatment DO I need?"}]}
    ]}
  },
  {
    id:'a2m5l6', title:"5.6 Эмийн заавар", level:"A2 · М5",
    blurb:"It must be taken twice a day — модаль + идэвхгүй",
    rule:{
      h:"Зорилго ба дүрэм: modal + be + V3 (заавар унших)",
      html:`<b>🎯 Зорилго:</b> Эм, бүтээгдэхүүний албан ёсны зааврыг ойлгох.<br><br>
        <b>модаль + BE + V3</b> = ...агдах ёстой / болно:
        <div style="margin:12px 0"><span class="tag">It MUST BE TAKEN twice a day. = Өдөрт 2 удаа уух ёстой.</span><span class="tag">It SHOULD BE KEPT in the fridge. = Хөргөгчинд хадгалах хэрэгтэй.</span><span class="tag">It CAN BE TAKEN with food. = Хоолтой хамт уужболно.</span><span class="tag">It MUSTN'T BE GIVEN to children. = Хүүхдэд өгч болохгүй.</span></div>
        <b>Идэвхтэй ⟷ Идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">You must take it. → It must be taken.</span></div>
        <b>Яагаад идэвхгүй вэ?</b> Заавар нь ХЭН гэдгийг заадаггүй — хүн бүрт хамаатай.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        instruction /ɪnˈstrʌkʃn/ — заавар · dose /doʊs/ — тун · label /ˈleɪbl/ — шошго<br>
        warning /ˈwɔːrnɪŋ/ — сануулга · side effect /saɪd ɪˈfekt/ — гаж нөлөө · swallow /ˈswɒloʊ/ — залгих<br>
        chew /tʃuː/ — зажлах · store /stɔːr/ — хадгалах · expire /ɪkˈspaɪər/ — хугацаа дуусах<br>
        adult /ˈædʌlt/ — насанд хүрсэн · tablet /ˈtæblət/ — шахмал · capsule /ˈkæpsuːl/ — капсул</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It must taken» ✗ — <b>be</b> заавал: <b>must BE taken</b> ✓. Мөн V2/V3 андуурах: «must be took» ✗ → <b>taken</b> ✓ (take-take-taken).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «модаль + BE + V3» — гурван хэсэг: must / be / taken.</p>`
    },
    phrases:[
      {en:"This medicine must be taken twice a day.", pron:"зис мэдисн маст би тэйкн твайс э дэй.", mn:"Энэ эмийг өдөрт 2 удаа уух ёстой."},
      {en:"The tablets should be taken after meals.", pron:"зэ тэблэтс шүд би тэйкн афтэр мийлз.", mn:"Шахмалыг хоолны дараа уух хэрэгтэй."},
      {en:"It mustn't be given to children under six.", pron:"ит маснт би гивн ту чилдрэн андэр сикс.", mn:"6-аас доош насны хүүхдэд өгч болохгүй."},
      {en:"The capsules must be swallowed, not chewed.", pron:"зэ кэпсюлз маст би своулоуд, нот чүд.", mn:"Капсулыг зажлахгүй, залгих ёстой."},
      {en:"It should be stored in a cool place.", pron:"ит шүд би сторд ин э күл плэйс.", mn:"Сэрүүн газар хадгалах хэрэгтэй."}
    ],
    exercises:[
      {q:"be мартав уу:", parts:["It must ", " taken twice a day."], opts:["be","—"], a:0, fix:"модаль + BE + V3."},
      {q:"V3 хэлбэр:", parts:["It must be ", " with water."], opts:["taken","took"], a:0, fix:"take → taken (V3)."},
      {q:"Хориг:", parts:["It ", " be given to children."], opts:["mustn't","doesn't must"], a:0, fix:"Хориг → mustn't be given."},
      {q:"V3 хэлбэр:", parts:["It should be ", " in the fridge."], opts:["kept","keep"], a:0, fix:"keep → kept (V3)."}
    ],
    speak:{ scene:'Эмийн зааврыг ойлгох', turns:[
      {ruby:"Here is your prescription. Do you have any questions?", pron:"хийр из ёр прискрипшн. ду ю хэв эни квэсчэнз?", mn:"Жор тань энэ байна. Асуулт байна уу?",
        choices:[{t:"Yes. How often must it be taken?",best:true,mn:"Тийм. Хэр олон удаа уух ёстой вэ?"},{t:"Yes. How often must taken?",best:false,fix:"must IT BE taken?"}]},
      {ruby:"Twice a day, after meals.", pron:"твайс э дэй, афтэр мийлз.", mn:"Өдөрт 2 удаа, хоолны дараа.",
        choices:[{t:"Can it be taken with tea, or only water?",best:true,mn:"Цайтай уужболох уу, зөвхөн устай юу?"},{t:"Can it taken with tea?",best:false,fix:"Can it BE taken?"}]},
      {ruby:"Only water. And it mustn't be given to your son.", pron:"оунли вотэр. энд ит маснт би гивн ту ёр сан.", mn:"Зөвхөн ус. Мөн хүүдээ өгч болохгүй.",
        choices:[{t:"I understand. Should it be stored in the fridge?",best:true,mn:"Ойлголоо. Хөргөгчинд хадгалах уу?"},{t:"I understand. Should it stored in fridge?",best:false,fix:"Should it BE stored IN THE fridge?"}]}
    ]}
  },
  {
    id:'a2m5l7', title:"5.7 Эрүүл зуршил", level:"A2 · М5",
    blurb:"give up smoking / cut down on sugar — хэлц үйл ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: эрүүл мэндийн хэлц үйл үгс",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Зуршлаа өөрчлөх тухай ярих — англид тусгай хэлц үйл үгс бий.<br><br>
        <b>Гол 4 хэлц:</b>
        <div style="margin:12px 0"><span class="tag">GIVE UP + -ing = бүр мөсөн болих: I gave up smoking.</span><span class="tag">CUT DOWN ON + нэр үг = багасгах: I cut down on sugar.</span><span class="tag">TAKE UP + -ing/нэр = шинээр эхлэх: I took up yoga.</span><span class="tag">KEEP ON / CARRY ON + -ing = үргэлжлүүлэх: Keep on trying!</span></div>
        <b>Бусад:</b> work out (дасгал хийх) · put on weight (жин нэмэх) · lose weight (жин хасах) · get over (эдгэрэх).<br>
        <b>⚠️ Анхаар:</b> хэлц үйл үгийн ард <b>-ing</b> (угтвар учир): give up smokING ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        habit /ˈhæbɪt/ — зуршил · smoke /smoʊk/ — тамхи татах · alcohol /ˈælkəhɒl/ — архи<br>
        weight /weɪt/ — жин · fitness /ˈfɪtnəs/ — чийрэгжилт · lifestyle /ˈlaɪfstaɪl/ — амьдралын хэв маяг<br>
        stress /stres/ — стресс · balance /ˈbæləns/ — тэнцвэр · goal /ɡoʊl/ — зорилго<br>
        motivate /ˈmoʊtɪveɪt/ — урамшуулах · achieve /əˈtʃiːv/ — амжилт гаргах · gradually /ˈɡrædʒuəli/ — аажмаар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I gave up to smoke» ✗ → <b>gave up smokING</b> ✓. «I cut down sugar» ✗ → <b>cut down ON sugar</b> ✓ (on заавал!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «GIVE UP = 0% болих · CUT DOWN ON = багасгах · TAKE UP = шинээр эхлэх».</p>`
    },
    phrases:[
      {en:"I gave up smoking two years ago.", pron:"ай гэйв ап смоукинг ту йирз эгоу.", mn:"Хоёр жилийн өмнө тамхиа больсон."},
      {en:"I'm trying to cut down on sugar.", pron:"айм трайинг ту кат даун он шүгэр.", mn:"Чихрээ багасгахыг хичээж байна."},
      {en:"I took up yoga last month.", pron:"ай түк ап йога ласт манс.", mn:"Өнгөрсөн сард иог эхэлсэн."},
      {en:"I've lost five kilos since January.", pron:"айв лост файв кийлоуз синс жэнюэри.", mn:"1-р сараас хойш 5 кг хассан."},
      {en:"Keep on trying — you'll achieve your goal!", pron:"кийп он трайинг — юл эчийв ёр гоул!", mn:"Үргэлжлүүлэн хичээ — зорилгодоо хүрнэ!"}
    ],
    exercises:[
      {q:"give up + :", parts:["I gave up ", " two years ago."], opts:["smoking","to smoke"], a:0, fix:"give up + -ing → smoking."},
      {q:"Угтвар:", parts:["I cut down ", " sugar."], opts:["on","—"], a:0, fix:"cut down ON sugar."},
      {q:"take up:", parts:["I ", " yoga last month."], opts:["took up","gave up"], a:0, fix:"Шинээр эхлэх → took up."},
      {q:"keep on + :", parts:["Keep on ", "!"], opts:["trying","try"], a:0, fix:"keep on + -ing → trying."}
    ],
    speak:{ scene:'Зуршлаа өөрчлөх', turns:[
      {ruby:"You look so healthy! What changed?", pron:"ю лүк соу хэлси! вот чэйнжд?", mn:"Та их эрүүл харагдаж байна! Юу өөрчлөгдсөн бэ?",
        choices:[{t:"I gave up smoking two years ago and took up yoga.",best:true,mn:"Хоёр жилийн өмнө тамхиа больж, иог эхэлсэн."},{t:"I gave up to smoke and take up yoga.",best:false,fix:"gave up smokING and TOOK UP yoga."}]},
      {ruby:"That's amazing! What about your diet?", pron:"зэтс эмэйзинг! вот эбаут ёр дайэт?", mn:"Гайхалтай! Хоолны дэглэм яах вэ?",
        choices:[{t:"I'm trying to cut down on sugar. It's not easy!",best:true,mn:"Чихрээ багасгахыг хичээж байна. Амархан биш!"},{t:"I'm trying to cut down sugar.",best:false,fix:"cut down ON sugar."}]},
      {ruby:"Have you lost weight?", pron:"хэв ю лост вэйт?", mn:"Жин хассан уу?",
        choices:[{t:"Yes! I've lost five kilos since January.",best:true,mn:"Тийм! 1-р сараас хойш 5 кг хассан."},{t:"Yes! I lost five kilos since January.",best:false,fix:"since → I'VE LOST five kilos."}]}
    ]}
  },
  {
    id:'a2m5l8', title:"5.8 Зөвлөгөө өгөх", level:"A2 · М5",
    blurb:"You should have gone earlier — өнгөрсний харамсал ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: should have / shouldn't have",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «...ах байсан юм» — өнгөрсөнд хийгээгүй/хийчихсэн зүйлд харамсах.<br><br>
        <b>should have + V3</b> = хийх ёстой байсан (гэвч хийгээгүй):
        <div style="margin:12px 0"><span class="tag">You SHOULD HAVE gone to the doctor. = Эмчид очих ёстой байсан (очоогүй).</span></div>
        <b>shouldn't have + V3</b> = хийх ёсгүй байсан (гэвч хийчихсэн):
        <div style="margin:12px 0"><span class="tag">I SHOULDN'T HAVE eaten so much. = Тэгж их идэх ёсгүй байсан (идчихсэн).</span></div>
        <b>should ⟷ should have:</b>
        <div style="margin:12px 0"><span class="tag">You should rest. = Одоо амар (ирээдүй)</span><span class="tag">You should have rested. = Амрах ёстой байсан (өнгөрсөн, харамсал)</span></div>
        <b>Богино:</b> should've /шүдэв/ · shouldn't've — ярианд ингэж сонсогдоно.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        regret /rɪˈɡret/ — харамсах · warn /wɔːrn/ — сануулах · ignore /ɪɡˈnɔːr/ — үл тоох<br>
        advise /ədˈvaɪz/ — зөвлөх · realize /ˈriːəlaɪz/ — ойлгох · earlier /ˈɜːrliər/ — эрт<br>
        immediately /ɪˈmiːdiətli/ — тэр дороо · obviously /ˈɒbviəsli/ — илэрхий · unfortunately /ʌnˈfɔːrtʃənətli/ — харамсалтай нь<br>
        prevent /prɪˈvent/ — урьдчилан сэргийлэх · risk /rɪsk/ — эрсдэл · careless /ˈkerləs/ — хайхрамжгүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You should went» ✗ → <b>should HAVE GONE</b> ✓. «I shouldn't ate» ✗ → <b>shouldn't HAVE EATEN</b> ✓. Ярианд «should of» гэж бичдэг ✗ → зөв нь <b>should HAVE</b> (дуудлага нь ижил тул андуурдаг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SHOULD HAVE + V3 = өнгөрсний харамсал» — should + have + gone (гурван хэсэг).</p>`
    },
    phrases:[
      {en:"You should have gone to the doctor earlier.", pron:"ю шүд хэв гон ту зэ доктор өрлиэр.", mn:"Эмчид эрт очих ёстой байсан."},
      {en:"I shouldn't have eaten so much cake!", pron:"ай шүднт хэв ийтн соу мач кэйк!", mn:"Тэгж их бялуу идэх ёсгүй байсан!"},
      {en:"You should have told me you were ill.", pron:"ю шүд хэв тоулд ми ю вөр ил.", mn:"Өвчтэй байгаагаа надад хэлэх ёстой байсан."},
      {en:"I should have listened to my doctor.", pron:"ай шүд хэв лиснд ту май доктор.", mn:"Эмчийнхээ үгийг сонсох ёстой байсан."},
      {en:"You shouldn't have ignored the warning.", pron:"ю шүднт хэв игнорд зэ ворнинг.", mn:"Сануулгыг үл тоох ёсгүй байсан."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["You should ", " gone earlier."], opts:["have","—"], a:0, fix:"should HAVE + V3."},
      {q:"V3 хэлбэр:", parts:["I shouldn't have ", " so much."], opts:["eaten","ate"], a:0, fix:"eat-ate-EATEN (V3)."},
      {q:"Зөв бичлэг:", parts:["You should ", " told me."], opts:["have","of"], a:0, fix:"«should of» ✗ → should HAVE."},
      {q:"should ⟷ should have:", parts:["You ", " rest now. (одоо)"], opts:["should","should have"], a:0, fix:"Одоо → should rest."}
    ],
    speak:{ scene:'Харамсал ба зөвлөгөө', turns:[
      {ruby:"I'm still ill. The doctor said it's an infection now.", pron:"айм стил ил. зэ доктор сэд итс эн инфэкшн нау.", mn:"Одоо ч өвчтэй байна. Эмч халдвар болсон гэсэн.",
        choices:[{t:"You should have gone to the doctor earlier!",best:true,mn:"Эмчид эрт очих ёстой байсан!"},{t:"You should went to the doctor earlier.",best:false,fix:"should HAVE GONE."}]},
      {ruby:"I know. I ignored the symptoms for a week.", pron:"ай ноу. ай игнорд зэ симптэмз фор э вийк.", mn:"Мэдэж байна. Долоо хоног шинж тэмдгийг үл тоосон.",
        choices:[{t:"You shouldn't have ignored them. But don't worry now.",best:true,mn:"Үл тоох ёсгүй байсан. Гэхдээ одоо санаа бүү зов."},{t:"You shouldn't ignored them.",best:false,fix:"shouldn't HAVE ignored."}]},
      {ruby:"What should I do now?", pron:"вот шүд ай ду нау?", mn:"Одоо яах вэ?",
        choices:[{t:"You should rest and take the antibiotics.",best:true,mn:"Амарч, антибиотикоо уух хэрэгтэй."},{t:"You should have rest and take antibiotics.",best:false,fix:"Одоо → You SHOULD rest (should have ✗)."}]}
    ]}
  },
  {
    id:'a2m5l9', title:"5.9 Эрүүл мэндийн пост", level:"A2 · М5",
    blurb:"much better / a bit healthier — зэргийн хүчитгэл",
    rule:{
      h:"Зорилго ба дүрэм: харьцуулах зэргийг хүчитгэх",
      html:`<b>🎯 Зорилго:</b> Ялгааны ХЭМЖЭЭГ нарийн хэлэх.<br><br>
        <b>Харьцуулах зэргийн өмнө хүчитгэгч:</b>
        <div style="margin:12px 0"><span class="tag">ТОМ ялгаа: much / far / a lot → much better, far healthier</span><span class="tag">ЖИЖИГ ялгаа: a bit / a little / slightly → a bit better</span></div>
        <b>⚠️ «very better» ✗</b> — very нь харьцуулах зэрэгтэй ХЭРЭГЛЭДЭГГҮЙ!
        <div style="margin:12px 0"><span class="tag">very good ✓ (энгийн зэрэг)</span><span class="tag">much better ✓ (харьцуулах зэрэг)</span><span class="tag">very better ✗</span></div>
        <b>Давуу зэргийн хүчитгэл:</b> by far the best · the very best.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        post /poʊst/ — нийтлэл · share /ʃer/ — хуваалцах · follower /ˈfɒloʊər/ — дагагч<br>
        journey /ˈdʒɜːrni/ — аялал (зам) · progress /ˈproʊɡres/ — ахиц · result /rɪˈzʌlt/ — үр дүн<br>
        slightly /ˈslaɪtli/ — бага зэрэг · far /fɑːr/ — хамаагүй · difference /ˈdɪfrəns/ — ялгаа<br>
        compare /kəmˈper/ — харьцуулах · inspire /ɪnˈspaɪər/ — урам өгөх · advice /ədˈvaɪs/ — зөвлөгөө</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I feel very better» ✗ → <b>much better</b> ✓. «more healthier» ✗ → хоёуланг зэрэг ✗: <b>healthier</b> эсвэл <b>more healthy</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «VERY = энгийн зэрэгт · MUCH/A BIT = харьцуулах зэрэгт».</p>`
    },
    phrases:[
      {en:"I feel much better than last year.", pron:"ай фийл мач бэтэр зэн ласт йир.", mn:"Өнгөрсөн жилээс хамаагүй сайн байна."},
      {en:"My sleep is a bit better now.", pron:"май слийп из э бит бэтэр нау.", mn:"Нойр маань одоо жаахан дээрдсэн."},
      {en:"Walking is far healthier than driving.", pron:"вокинг из фар хэлсиэр зэн драйвинг.", mn:"Алхах нь машин барихаас хамаагүй эрүүл."},
      {en:"This was by far the best decision of my life.", pron:"зис воз бай фар зэ бэст дисижн ов май лайф.", mn:"Энэ бол миний амьдралын хамгийн сайн шийдвэр байлаа."},
      {en:"Small changes make a big difference.", pron:"смол чэйнжиз мэйк э биг дифрэнс.", mn:"Жижиг өөрчлөлт том ялгаа бий болгодог."}
    ],
    exercises:[
      {q:"Хүчитгэл:", parts:["I feel ", " better now."], opts:["much","very"], a:0, fix:"Харьцуулах зэрэгт → much better."},
      {q:"Жижиг ялгаа:", parts:["My sleep is ", " better."], opts:["a bit","very"], a:0, fix:"Жижиг ялгаа → a bit better."},
      {q:"Зөв эсэх:", parts:["Walking is ", " than driving."], opts:["healthier","more healthier"], a:0, fix:"more + -er ✗ → healthier."},
      {q:"Давуу зэрэг:", parts:["It was ", " the best choice."], opts:["by far","very"], a:0, fix:"Давуу зэрэгт → by far the best."}
    ],
    speak:{ scene:'Эрүүл мэндийн пост бичих', turns:[
      {ruby:"How do you feel after six months of exercise?", pron:"хау ду ю фийл афтэр сикс манс ов эксэрсайз?", mn:"6 сар дасгал хийсний дараа яаж байна?",
        choices:[{t:"I feel much better than last year!",best:true,mn:"Өнгөрсөн жилээс хамаагүй сайн байна!"},{t:"I feel very better than last year.",best:false,fix:"very + харьцуулах зэрэг ✗ → MUCH better."}]},
      {ruby:"What about your sleep?", pron:"вот эбаут ёр слийп?", mn:"Нойр тань яах вэ?",
        choices:[{t:"It's a bit better. I've been sleeping seven hours since March.",best:true,mn:"Жаахан дээрдсэн. 3-р сараас хойш 7 цаг унтаж байна."},{t:"It's more better. I sleep seven hours since March.",best:false,fix:"A BIT better. I'VE BEEN SLEEPING since March."}]},
      {ruby:"Any advice for our followers?", pron:"эни эдвайс фор ауэр фолоуэрз?", mn:"Дагагчиддаа зөвлөгөө байна уу?",
        choices:[{t:"Yes! Small changes make a big difference. Keep on trying!",best:true,mn:"Тийм! Жижиг өөрчлөлт том ялгаа бий болгодог. Үргэлжлүүлэн хичээ!"},{t:"Yes! Small changes make big difference. Keep on try!",best:false,fix:"make A big difference. Keep on tryING!"}]}
    ]}
  },
  {
    id:'a2m5l10', title:"5.10 Модулийн шалгалт", level:"A2 · М5",
    blurb:"🏆 Эрүүл амьдралын түүхээ өгүүлэх",
    rule:{
      h:"Давтлага: A2 Модуль 5-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 5-ын мэдлэгээ нэгтгэж, эрүүл амьдралын түүхээ бүтээх.<br><br>
        <b>Модуль 5-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">Eating vegetables IS good (gerund)</span><span class="tag">as good as / not as hard as</span><span class="tag">used to sleep ⟷ am used to sleepING ⭐</span><span class="tag">You look tired / I cut myself</span><span class="tag">I've been feeling ill for 3 days ⭐</span><span class="tag">It must be taken twice a day</span><span class="tag">gave up smokING · cut down ON sugar</span><span class="tag">should have gone ⭐</span><span class="tag">much better / a bit healthier</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Эрүүл мэндийн пост (15+ өгүүлбэр):</b> Инстаграм пост бич! Жишээ:<br>
        <i>Two years ago my lifestyle was terrible. I used to sleep four hours a night and I ate hardly any vegetables. I gave up exercise completely. Then last winter I got ill. I'd been feeling weak for weeks, but I ignored it. I should have gone to the doctor earlier! She told me I had to change my lifestyle. So I took up yoga and cut down on sugar. At first, getting up at six was very hard, but now I'm used to it. Eating vegetables is normal for me now! I feel much better than last year — and my sleep is far better too. Walking is as good as running, so start small. Small changes make a big difference. Keep on trying!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Түүхийн 4 давхар: <b>Өмнө нь</b> (I used to...) → <b>Асуудал</b> (I'd been feeling... should have...) → <b>Өөрчлөлт</b> (I took up... gave up...) → <b>Одоо</b> (I'm used to... much better).</p>`
    },
    phrases:[
      {en:"I used to sleep four hours a night.", pron:"ай юзд ту слийп фор ауэрз э найт.", mn:"Өмнө нь шөнөдөө 4 цаг унтдаг байсан."},
      {en:"I'd been feeling weak for weeks, but I ignored it.", pron:"айд бийн фийлинг вийк фор викс, бат ай игнорд ит.", mn:"Хэдэн долоо хоног сул дорой байсан ч үл тоосон."},
      {en:"I should have gone to the doctor earlier.", pron:"ай шүд хэв гон ту зэ доктор өрлиэр.", mn:"Эмчид эрт очих ёстой байсан."},
      {en:"I took up yoga and cut down on sugar.", pron:"ай түк ап йога энд кат даун он шүгэр.", mn:"Иог эхлээд, чихрээ багасгасан."},
      {en:"Now I'm used to getting up at six.", pron:"нау айм юзд ту гетинг ап эт сикс.", mn:"Одоо 6 цагт босоход дассан."}
    ],
    exercises:[
      {q:"Давтлага (used to):", parts:["I'm used to ", " up early."], opts:["getting","get"], a:0, fix:"be-тэй → -ing: getting."},
      {q:"Давтлага (PPC):", parts:["I've ", " feeling ill for days."], opts:["been","—"], a:0, fix:"have BEEN + -ing."},
      {q:"Давтлага (should have):", parts:["You should ", " gone earlier."], opts:["have","of"], a:0, fix:"should HAVE gone."},
      {q:"Давтлага (хүчитгэл):", parts:["I feel ", " better now."], opts:["much","very"], a:0, fix:"Харьцуулах зэрэгт → much."}
    ],
    speak:{ scene:'🏆 Шалгалт: Эрүүл мэндийн түүх', turns:[
      {ruby:"Your health journey is inspiring! How did it start?", pron:"ёр хэлс жөрни из инспайринг! хау дид ит старт?", mn:"Таны эрүүл мэндийн зам урам өгч байна! Яаж эхэлсэн бэ?",
        choices:[{t:"Two years ago I used to sleep four hours and ate hardly any vegetables.",best:true,mn:"Хоёр жилийн өмнө 4 цаг унтаж, бараг ногоо иддэггүй байсан."},{t:"Two years ago I used to sleeping four hours and didn't eat hardly vegetables.",best:false,fix:"used to SLEEP... ate HARDLY ANY vegetables."}]},
      {ruby:"What made you change?", pron:"вот мэйд ю чэйнж?", mn:"Юу таныг өөрчлөв?",
        choices:[{t:"I got ill. I'd been feeling weak for weeks — I should have gone to the doctor earlier!",best:true,mn:"Өвдсөн. Хэдэн долоо хоног сул дорой байсан — эмчид эрт очих ёстой байсан!"},{t:"I got ill. I was feeling weak for weeks. I should went to doctor.",best:false,fix:"I'D BEEN feeling weak... I should HAVE GONE to THE doctor."}]},
      {ruby:"And now? Do you feel different?", pron:"энд нау? ду ю фийл дифрэнт?", mn:"Одоо? Өөр мэдрэмжтэй байна уу?",
        choices:[{t:"I feel much better! I'm used to getting up at six now.",best:true,mn:"Хамаагүй сайн байна! Одоо 6 цагт босоход дассан."},{t:"I feel very better! I'm used to get up at six.",best:false,fix:"MUCH better. used to GETTING up."}]}
    ]}
  },
  {
    id:'a2m6l1', title:"6.1 Утас", level:"A2 · М6",
    blurb:"hang up, call back — утасны хэлц үйл ⭐",
    rule:{
      h:"Зорилго ба дүрэм: утасны хэлц үйл үгс",
      html:`<b>🎯 Зорилго:</b> ⭐ Утсаар ярихад зайлшгүй хэрэгтэй хэлц үйл үгс.<br><br>
        <b>Гол хэлцүүд:</b>
        <div style="margin:12px 0"><span class="tag">pick up = утсаа авах</span><span class="tag">hang up = утсаа тавих</span><span class="tag">call back = буцаж залгах</span><span class="tag">hold on = хүлээх</span><span class="tag">put through = холбож өгөх</span><span class="tag">cut off = тасрах</span></div>
        <b>Төлөөний үгийн байрлал</b> (A1 М8-ыг санаарай):
        <div style="margin:12px 0"><span class="tag">call him back ✓ (call back him ✗)</span><span class="tag">pick it up ✓ (pick up it ✗)</span></div>
        <b>Утасны тогтмол хэллэгүүд:</b> Who's calling? · Can I take a message? · Speaking! · You've got the wrong number.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        ring /rɪŋ/ — дуугарах/залгах · dial /ˈdaɪəl/ — дугаар цохих · signal /ˈsɪɡnəl/ — дохио<br>
        battery /ˈbætəri/ — батарей · charge /tʃɑːrdʒ/ — цэнэглэх · voicemail /ˈvɔɪsmeɪl/ — дуут шуудан<br>
        contact /ˈkɒntækt/ — холбоо барих · missed call /mɪst kɔːl/ — аваагүй дуудлага · busy /ˈbɪzi/ — завгүй<br>
        available /əˈveɪləbl/ — боломжтой · urgent /ˈɜːrdʒənt/ — яаралтай · message /ˈmesɪdʒ/ — мессеж</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I will call back you» ✗ → төлөөний үг дунд: <b>call you back</b> ✓. Мөн «Who are you?» ✗ (бүдүүлэг!) → утсаар <b>Who's calling?</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «PICK UP → HOLD ON → HANG UP» — утасны 3 үндсэн үйлдэл.</p>`
    },
    phrases:[
      {en:"Hello? Who's calling, please?", pron:"хэлоу? хүз колинг, плийз?", mn:"Байна уу? Хэн бэ?"},
      {en:"Hold on a moment, I'll put you through.", pron:"хоулд он э моумэнт, айл пут ю срү.", mn:"Түр хүлээгээрэй, холбож өгье."},
      {en:"I'll call you back in ten minutes.", pron:"айл кол ю бэк ин тэн минитс.", mn:"10 минутын дараа буцаж залгая."},
      {en:"Sorry, we got cut off. My signal is bad.", pron:"сори, ви гот кат оф. май сигнэл из бэд.", mn:"Уучлаарай, тасарчихлаа. Дохио муутай байна."},
      {en:"Can I take a message?", pron:"кэн ай тэйк э мэсиж?", mn:"Мессеж авах уу?"}
    ],
    exercises:[
      {q:"Байрлал:", parts:["I'll call ", " later."], opts:["you back","back you"], a:0, fix:"Төлөөний үг дунд → call YOU back."},
      {q:"Хэлц:", parts:["", " a moment, please."], opts:["Hold on","Hang up"], a:0, fix:"Хүлээх → Hold on."},
      {q:"Хэлц:", parts:["He didn't say goodbye — he just ", "!"], opts:["hung up","picked up"], a:0, fix:"Утсаа тавих → hung up."},
      {q:"Хэллэг:", parts:["Hello? ", " calling?"], opts:["Who's","Who are you"], a:0, fix:"Утсаар → Who's calling?"}
    ],
    speak:{ scene:'Утсаар ярих', turns:[
      {ruby:"Hello? Who's calling, please?", pron:"хэлоу? хүз колинг, плийз?", mn:"Байна уу? Хэн бэ?",
        choices:[{t:"Hi, it's Enkhmaa. Is Bat available?",best:true,mn:"Сайн уу, Энхмаа байна. Бат байна уу?"},{t:"Hi, I am Enkhmaa. Bat is there?",best:false,fix:"Утсаар → IT'S Enkhmaa. Is Bat AVAILABLE?"}]},
      {ruby:"He's in a meeting. Can I take a message?", pron:"хиз ин э мийтинг. кэн ай тэйк э мэсиж?", mn:"Тэр уулзалт дээр байна. Мессеж авах уу?",
        choices:[{t:"Could you ask him to call me back? It's urgent.",best:true,mn:"Над руу буцаж залгахыг хэлж өгөх үү? Яаралтай юм."},{t:"Could you ask him call back me? Urgent.",best:false,fix:"ask him TO call me BACK."}]},
      {ruby:"Of course. Sorry, your signal is bad — I can hardly hear you!", pron:"ов корс. сори, ёр сигнэл из бэд — ай кэн хардли хийр ю!", mn:"Мэдээж. Уучлаарай, дохио тань муутай — бараг сонсогдохгүй байна!",
        choices:[{t:"Sorry! I think we're getting cut off. I'll call back later.",best:true,mn:"Уучлаарай! Тасрах гэж байна. Дараа буцаж залгая."},{t:"Sorry! We cut off. I call back later.",best:false,fix:"We'RE GETTING cut off. I'LL call back."}]}
    ]}
  },
  {
    id:'a2m6l2', title:"6.2 Апп", level:"A2 · М6",
    blurb:"log in TO / sign up FOR — үйл үг + угтвар ⭐",
    rule:{
      h:"Зорилго ба дүрэм: verb + preposition",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Үйл үг бүр өөрийн угтвартай — цээжлэхээс өөр арга алга (толь бичигт хамт байдаг).<br><br>
        <b>Технологийн гол хосууд:</b>
        <div style="margin:12px 0"><span class="tag">log IN TO an app · log OUT OF</span><span class="tag">sign UP FOR a service</span><span class="tag">download FROM · upload TO</span><span class="tag">search FOR · click ON</span><span class="tag">depend ON · connect TO</span></div>
        <b>Ерөнхий хосууд:</b>
        <div style="margin:12px 0"><span class="tag">listen TO · look FOR (хайх) · look AT (харах) · wait FOR · pay FOR · belong TO</span></div>
        <b>⚠️ Угтваргүй үйл үгс:</b> phone / call / answer / discuss / enter → «I called TO him» ✗ → <b>I called him</b> ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        app /æp/ — апп · download /ˈdaʊnloʊd/ — татах · upload /ˈʌploʊd/ — байршуулах<br>
        install /ɪnˈstɔːl/ — суулгах · delete /dɪˈliːt/ — устгах · update /ˈʌpdeɪt/ — шинэчлэх<br>
        account /əˈkaʊnt/ — бүртгэл · password /ˈpæswɜːrd/ — нууц үг · free /friː/ — үнэгүй<br>
        version /ˈvɜːrʒn/ — хувилбар · feature /ˈfiːtʃər/ — боломж · notification /ˌnoʊtɪfɪˈkeɪʃn/ — мэдэгдэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «log in the app» ✗ → <b>log in TO the app</b> ✓. «I'm searching a job» ✗ → <b>searching FOR a job</b> ✓. Гэхдээ «I called TO my friend» ✗ → <b>I called my friend</b> ✓ (call угтваргүй!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Шинэ үйл үг сурахдаа угтвартай нь хамт цээжил» — listen TO, wait FOR, depend ON.</p>`
    },
    phrases:[
      {en:"I can't log in to my account.", pron:"ай кант лог ин ту май экаунт.", mn:"Бүртгэлдээ нэвтэрч чадахгүй байна."},
      {en:"You have to sign up for a free account first.", pron:"ю хэв ту сайн ап фор э фрий экаунт фөрст.", mn:"Эхлээд үнэгүй бүртгэл үүсгэх хэрэгтэй."},
      {en:"I downloaded this app from the store yesterday.", pron:"ай даунлоудид зис эп фром зэ стор йестэрдэй.", mn:"Өчигдөр энэ аппыг дэлгүүрээс татсан."},
      {en:"Everything depends on your internet connection.", pron:"эврисинг дипэндз он ёр интэрнэт кэнэкшн.", mn:"Бүх зүйл интернэт холболтоос хамаарна."},
      {en:"Click on the button to update the app.", pron:"клик он зэ батн ту апдэйт зэ эп.", mn:"Аппаа шинэчлэхийн тулд товч дээр дар."}
    ],
    exercises:[
      {q:"Угтвар:", parts:["I can't log in ", " my account."], opts:["to","—"], a:0, fix:"log in TO."},
      {q:"Угтвар:", parts:["Sign up ", " a free account."], opts:["for","to"], a:0, fix:"sign up FOR."},
      {q:"Угтвар:", parts:["It depends ", " your internet."], opts:["on","from"], a:0, fix:"depend ON."},
      {q:"Угтваргүй:", parts:["I called ", " yesterday."], opts:["him","to him"], a:0, fix:"call угтваргүй → called him."}
    ],
    speak:{ scene:'Апп ашиглах', turns:[
      {ruby:"Have you tried this new app?", pron:"хэв ю трайд зис ню эп?", mn:"Энэ шинэ аппыг туршиж үзсэн үү?",
        choices:[{t:"I downloaded it, but I can't log in to my account!",best:true,mn:"Татсан ч бүртгэлдээ нэвтэрч чадахгүй байна!"},{t:"I downloaded, but I can't log in my account.",best:false,fix:"log in TO my account."}]},
      {ruby:"Did you sign up for an account first?", pron:"дид ю сайн ап фор эн экаунт фөрст?", mn:"Эхлээд бүртгэл үүсгэсэн үү?",
        choices:[{t:"Oh! No, I didn't. That must be the problem.",best:true,mn:"Өө! Үгүй ээ. Тэр байх асуудал нь."},{t:"Oh! No. That is the problem maybe.",best:false,fix:"Таамаглал → That MUST BE the problem."}]},
      {ruby:"Yes! Everything depends on that.", pron:"ес! эврисинг дипэндз он зэт.", mn:"Тийм! Бүх зүйл түүнээс хамаарна.",
        choices:[{t:"Thanks! I'll sign up for it now.",best:true,mn:"Баярлалаа! Одоо бүртгүүлье."},{t:"Thanks! I sign up it now.",best:false,fix:"I'LL sign up FOR it."}]}
    ]}
  },
  {
    id:'a2m6l3', title:"6.3 Социал медиа", level:"A2 · М6",
    blurb:"We text each other — each other ⟷ -selves",
    rule:{
      h:"Зорилго ба дүрэм: each other ⟷ эргэх төлөөний үг",
      html:`<b>🎯 Зорилго:</b> «Бие биедээ» ба «өөртөө»-г ялгах.<br><br>
        <b>each other = БИЕ БИЕДЭЭ (2 талын үйлдэл):</b>
        <div style="margin:12px 0"><span class="tag">We text EACH OTHER every day. = Бид өдөр бүр бие биедээ бичдэг.</span><span class="tag">They help each other. = Тэд бие биедээ тусалдаг.</span></div>
        <b>-selves = ӨӨРТӨӨ (нэг талын үйлдэл):</b>
        <div style="margin:12px 0"><span class="tag">We taught OURSELVES. = Бид өөрсдөө сурсан.</span></div>
        <b>Ялгаа тод харагдана:</b>
        <div style="margin:12px 0"><span class="tag">They looked at each other. = Бие бие рүүгээ харав (2 хүн)</span><span class="tag">They looked at themselves. = Өөрсдөө рүүгээ харав (толинд)</span></div>
        <b>one another</b> = each other-тэй ижил (илүү албан ёсны).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        post /poʊst/ — нийтлэх · share /ʃer/ — хуваалцах · like /laɪk/ — таалагдах<br>
        comment /ˈkɒment/ — сэтгэгдэл · follow /ˈfɒloʊ/ — дагах · tag /tæɡ/ — тэмдэглэх<br>
        profile /ˈproʊfaɪl/ — профайл · feed /fiːd/ — урсгал · content /ˈkɒntent/ — контент<br>
        influencer /ˈɪnfluənsər/ — нөлөөлөгч · viral /ˈvaɪrəl/ — вирус мэт тархсан · block /blɒk/ — хориглох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «We text ourselves» ✗ = «Бид өөрсдөдөө бичдэг» (утгагүй!) → <b>each other</b> ✓. Мөн «each other» дараа <b>'s</b>: we read each other'S posts.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «2 талын үйлдэл → EACH OTHER · 1 талын, өөрт буцах → -SELF/-SELVES».</p>`
    },
    phrases:[
      {en:"We text each other every day.", pron:"ви тэкст ийч азэр эври дэй.", mn:"Бид өдөр бүр бие биедээ бичдэг."},
      {en:"My friends and I follow each other on Instagram.", pron:"май фрэндз энд ай фолоу ийч азэр он Инстаграм.", mn:"Найзууд бид Инстаграм дээр бие биенээ дагадаг."},
      {en:"We like each other's posts.", pron:"ви лайк ийч азэрз поустс.", mn:"Бид бие биеийнхээ постонд таалагдсан гэдэг."},
      {en:"I taught myself how to edit videos.", pron:"ай тот майсэлф хау ту эдит видиоуз.", mn:"Би видео засварлахыг өөрөө сурсан."},
      {en:"Her post went viral last week!", pron:"хёр поуст вэнт вайрэл ласт вийк!", mn:"Түүний пост өнгөрсөн долоо хоногт вирус мэт тарсан!"}
    ],
    exercises:[
      {q:"each other:", parts:["We text ", " every day."], opts:["each other","ourselves"], a:0, fix:"2 талын → each other."},
      {q:"-self:", parts:["I taught ", " to code."], opts:["myself","each other"], a:0, fix:"Өөрөө → myself."},
      {q:"Эзэмшил:", parts:["We like ", " posts."], opts:["each other's","each other"], a:0, fix:"Эзэмшил → each other'S."},
      {q:"Утга:", parts:["They looked at ", ". (2 хүн бие бие рүүгээ)"], opts:["each other","themselves"], a:0, fix:"Бие бие рүүгээ → each other."}
    ],
    speak:{ scene:'Социал медиа', turns:[
      {ruby:"Do you keep in touch with your school friends?", pron:"ду ю кийп ин тач виз ёр скүл фрэндз?", mn:"Сургуулийн найзуудтайгаа холбоо барьдаг уу?",
        choices:[{t:"Yes! We text each other almost every day.",best:true,mn:"Тийм! Бид бараг өдөр бүр бие биедээ бичдэг."},{t:"Yes! We text ourselves every day.",best:false,fix:"«ourselves» = өөрсдөдөө! → EACH OTHER."}]},
      {ruby:"Do you follow them on social media?", pron:"ду ю фолоу зэм он соушл мийдиа?", mn:"Социал медиад тэднийг дагадаг уу?",
        choices:[{t:"Of course. We follow each other and like each other's posts.",best:true,mn:"Мэдээж. Бид бие биенээ дагаж, постонд таалагдсан гэдэг."},{t:"Of course. We follow each other and like each other posts.",best:false,fix:"each other'S posts (эзэмшил)."}]},
      {ruby:"Your videos are great! Who taught you?", pron:"ёр видиоуз а грэйт! хү тот ю?", mn:"Таны видеонууд гоё! Хэн заасан бэ?",
        choices:[{t:"Nobody — I taught myself from YouTube!",best:true,mn:"Хэн ч биш — YouTube-ээс өөрөө сурсан!"},{t:"Nobody — I taught me from YouTube.",best:false,fix:"I taught MYSELF."}]}
    ]}
  },
  {
    id:'a2m6l4', title:"6.4 Онлайн аюулгүй байдал", level:"A2 · М6",
    blurb:"Unless you change it... — unless ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: unless (хэрэв ... үгүй бол)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «...үгүй бол» гэсэн сануулга — аюулгүй байдлын зөвлөгөөнд төгс.<br><br>
        <b>unless = if ... not</b> (нэг үгээр!):
        <div style="margin:12px 0"><span class="tag">UNLESS you change your password, someone will hack your account.</span><span class="tag">= IF you DON'T change your password, someone will hack it.</span></div>
        <b>⚠️ unless дотор ҮГҮЙСГЭЛ ДАВХАРЛАХГҮЙ:</b>
        <div style="margin:12px 0"><span class="tag">Unless you don't change ✗ (давхар үгүйсгэл!)</span><span class="tag">Unless you change ✓</span></div>
        <b>1-р нөхцөлийн дүрэм хэвээр:</b> unless-ийн дараа <b>одоо цаг</b>, гол хэсэгт <b>will</b>.
        <div style="margin:12px 0"><span class="tag">Unless you will back up ✗ → Unless you BACK UP ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        password /ˈpæswɜːrd/ — нууц үг · secure /sɪˈkjʊr/ — найдвартай · hack /hæk/ — халдах<br>
        virus /ˈvaɪrəs/ — вирус · scam /skæm/ — луйвар · fake /feɪk/ — хуурамч<br>
        private /ˈpraɪvət/ — хувийн · back up /bæk ʌp/ — нөөцлөх · protect /prəˈtekt/ — хамгаалах<br>
        risk /rɪsk/ — эрсдэл · trust /trʌst/ — итгэх · suspicious /səˈspɪʃəs/ — сэжигтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Unless you don't back up your files, you'll lose them» ✗ — давхар үгүйсгэл, утга эргэнэ! Зөв нь <b>Unless you BACK UP your files, you'll lose them</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «UNLESS дотроо аль хэдийн NOT-той» — тиймээс дахин not хийж болохгүй.</p>`
    },
    phrases:[
      {en:"Unless you change your password, your account isn't safe.", pron:"анлэс ю чэйнж ёр пасвөрд, ёр экаунт изнт сэйф.", mn:"Нууц үгээ солихгүй бол бүртгэл тань аюулгүй биш."},
      {en:"Don't click on links unless you trust the sender.", pron:"доунт клик он линкс анлэс ю траст зэ сэндэр.", mn:"Илгээгчдээ итгэхгүй бол линк дээр бүү дар."},
      {en:"Unless you back up your files, you'll lose them.", pron:"анлэс ю бэк ап ёр файлз, юл лүз зэм.", mn:"Файлаа нөөцлөхгүй бол алдана."},
      {en:"That email looks suspicious — it might be a scam.", pron:"зэт иймэйл лүкс сэспишэс — ит майт би э скэм.", mn:"Тэр имэйл сэжигтэй харагдаж байна — луйвар байж магадгүй."},
      {en:"Keep your personal information private.", pron:"кийп ёр пөрсэнл информэйшн прайвэт.", mn:"Хувийн мэдээллээ нууцлаарай."}
    ],
    exercises:[
      {q:"Давхар үгүйсгэл:", parts:["Unless you ", " your password, it isn't safe."], opts:["change","don't change"], a:0, fix:"unless дотроо not-той → change."},
      {q:"Цаг:", parts:["Unless you ", " up, you'll lose the files."], opts:["back","will back"], a:0, fix:"unless-ийн дараа одоо цаг → back up."},
      {q:"Гол хэсэг:", parts:["Unless you change it, someone ", " hack it."], opts:["will","—"], a:0, fix:"Гол хэсэгт → will hack."},
      {q:"Утга:", parts:["Unless you pay = If you ", " pay"], opts:["don't","do"], a:0, fix:"unless = if ... NOT."}
    ],
    speak:{ scene:'Онлайн аюулгүй байдал', turns:[
      {ruby:"I think someone hacked my account!", pron:"ай синк самван хэкт май экаунт!", mn:"Хэн нэгэн бүртгэлд минь халдсан бололтой!",
        choices:[{t:"Change your password now! Unless you change it, they'll come back.",best:true,mn:"Одоо нууц үгээ соль! Солихгүй бол тэд дахин орно."},{t:"Change password! Unless you don't change it, they come back.",best:false,fix:"Unless you CHANGE it (давхар үгүйсгэл ✗), they'LL come back."}]},
      {ruby:"I got a strange email asking for my bank details.", pron:"ай гот э стрэйнж иймэйл аскинг фор май бэнк дийтэйлз.", mn:"Банкны мэдээлэл асуусан хачин имэйл ирсэн.",
        choices:[{t:"That must be a scam! Don't reply unless you know the sender.",best:true,mn:"Луйвар байх! Илгээгчээ мэдэхгүй бол бүү хариул."},{t:"That is a scam maybe. Don't reply unless you don't know sender.",best:false,fix:"That MUST BE a scam. unless you KNOW the sender."}]},
      {ruby:"Should I back up my files too?", pron:"шүд ай бэк ап май файлз ту?", mn:"Файлаа ч бас нөөцлөх үү?",
        choices:[{t:"Definitely! Unless you back them up, you might lose everything.",best:true,mn:"Гарцаагүй! Нөөцлөхгүй бол бүх юмаа алдаж магадгүй."},{t:"Yes! Unless you will back up, you lose everything.",best:false,fix:"Unless you BACK them UP, you MIGHT lose everything."}]}
    ]}
  },
  {
    id:'a2m6l5', title:"6.5 Төхөөрөмж", level:"A2 · М6",
    blurb:"It must be broken / It can't be — таамаглал ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: must ⟷ can't (логик таамаглал)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Баримт дээр үндэслэн ЛОГИК дүгнэлт хийх — must-ийн шинэ утга!<br><br>
        <b>Итгэлийн 3 шат:</b>
        <div style="margin:12px 0"><span class="tag">MUST BE = 95% тийм байх (баттай дүгнэлт): The screen is black — it MUST BE broken.</span><span class="tag">MIGHT / MAY BE = 50% магадгүй: It MIGHT BE the battery.</span><span class="tag">CAN'T BE = 95% биш байх (баттай няцаалт): It CAN'T BE the battery — I charged it!</span></div>
        <b>⚠️ Хамгийн чухал:</b> «must»-ийн ЭСРЭГ нь <b>can't</b>, mustn't БИШ!
        <div style="margin:12px 0"><span class="tag">It can't be broken ✓ (эвдэрсэн байх боломжгүй)</span><span class="tag">It mustn't be broken ✗ (= эвдэрч болохгүй — өөр утга!)</span></div>
        <b>Дүрмээ санаарай:</b> «must» = заавал (үүрэг) ⟷ «must be» = байх ёстой (таамаг).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        device /dɪˈvaɪs/ — төхөөрөмж · screen /skriːn/ — дэлгэц · keyboard /ˈkiːbɔːrd/ — гар<br>
        charger /ˈtʃɑːrdʒər/ — цэнэглэгч · plug /plʌɡ/ — залгуур · socket /ˈsɒkɪt/ — розетк<br>
        laptop /ˈlæptɒp/ — зөөврийн компьютер · tablet /ˈtæblət/ — таблет · headphones /ˈhedfoʊnz/ — чихэвч<br>
        broken /ˈbroʊkən/ — эвдэрсэн · work /wɜːrk/ — ажиллах · switch /swɪtʃ/ — унтраалга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It mustn't be the battery» ✗ → таамаглалын эсрэг нь <b>can't</b>: <b>It CAN'T be the battery</b> ✓. Мөн «It must broken» ✗ → <b>must BE broken</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUST BE (95% тийм) ⟷ CAN'T BE (95% үгүй) · дунд нь MIGHT BE (50%)».</p>`
    },
    phrases:[
      {en:"The screen is black — it must be broken.", pron:"зэ скрийн из блэк — ит маст би броукэн.", mn:"Дэлгэц хар байна — эвдэрсэн байх."},
      {en:"It can't be the battery — I charged it this morning!", pron:"ит кант би зэ бэтэри — ай чаржд ит зис морнинг!", mn:"Батарей байх боломжгүй — өглөө цэнэглэсэн шүү дээ!"},
      {en:"It might be the charger. Let's try another one.", pron:"ит майт би зэ чаржэр. летс трай эназэр ван.", mn:"Цэнэглэгч байж магадгүй. Өөрийг нь туршиж үзье."},
      {en:"Your laptop is very slow — it must need an update.", pron:"ёр лэптоп из вэри слоу — ит маст нийд эн апдэйт.", mn:"Компьютер тань их удаан — шинэчлэл хэрэгтэй байх."},
      {en:"Have you checked the plug and the socket?", pron:"хэв ю чэкт зэ плаг энд зэ сокит?", mn:"Залгуур, розеткээ шалгасан уу?"}
    ],
    exercises:[
      {q:"Таамаглал:", parts:["The screen is black — it ", " broken."], opts:["must be","mustn't be"], a:0, fix:"95% тийм → must be broken."},
      {q:"Няцаалт:", parts:["It ", " the battery — I charged it!"], opts:["can't be","mustn't be"], a:0, fix:"95% үгүй → can't be."},
      {q:"be мартав уу:", parts:["It must ", " broken."], opts:["be","—"], a:0, fix:"must BE broken."},
      {q:"50%:", parts:["It ", " the charger."], opts:["might be","must be"], a:0, fix:"Магадгүй → might be."}
    ],
    speak:{ scene:'Төхөөрөмж эвдэрсэн', turns:[
      {ruby:"My laptop won't turn on. The screen is black.", pron:"май лэптоп воунт төрн он. зэ скрийн из блэк.", mn:"Компьютер маань асахгүй байна. Дэлгэц хар байна.",
        choices:[{t:"It must be the battery. Have you charged it?",best:true,mn:"Батарей байх. Цэнэглэсэн үү?"},{t:"It mustn't be the battery. Have you charged?",best:false,fix:"Таамаглал → It MUST BE the battery."}]},
      {ruby:"Yes, I charged it all night!", pron:"ес, ай чаржд ит ол найт!", mn:"Тийм, шөнөжин цэнэглэсэн!",
        choices:[{t:"Then it can't be the battery. It might be the charger.",best:true,mn:"Тэгвэл батарей байх боломжгүй. Цэнэглэгч байж магадгүй."},{t:"Then it mustn't be the battery. Maybe charger.",best:false,fix:"Няцаалт → it CAN'T BE the battery."}]},
      {ruby:"I tried another charger. Same problem!", pron:"ай трайд эназэр чаржэр. сэйм проблэм!", mn:"Өөр цэнэглэгч туршсан. Ижил асуудал!",
        choices:[{t:"Then it must be broken. You should take it to a shop.",best:true,mn:"Тэгвэл эвдэрсэн байх. Дэлгүүрт аваачих хэрэгтэй."},{t:"Then it must broken. You should take shop.",best:false,fix:"must BE broken. take it TO A shop."}]}
    ]}
  },
  {
    id:'a2m6l6', title:"6.6 Заавар", level:"A2 · М6",
    blurb:"Make sure you save it — заавар өгөх",
    rule:{
      h:"Зорилго ба дүрэм: make sure / remember to / be careful not to",
      html:`<b>🎯 Зорилго:</b> Тодорхой заавар өгч, сануулах.<br><br>
        <b>Гурван бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">Make sure (that) + өгүүлбэр: Make sure you save your work.</span><span class="tag">Remember TO + үйл үг: Remember to log out.</span><span class="tag">Be careful NOT TO + үйл үг: Be careful not to delete it!</span></div>
        <b>⚠️ remember to ⟷ remember -ing (утга ӨӨР!):</b>
        <div style="margin:12px 0"><span class="tag">Remember TO log out. = Гарахаа мартуузай (ирээдүй)</span><span class="tag">I remember loggING out. = Гарсанаа санаж байна (өнгөрсөн)</span></div>
        <b>forget-д ч ижил:</b> Don't forget TO save (мартуузай) ⟷ I forgot savING (хийснээ мартав).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        instruction /ɪnˈstrʌkʃn/ — заавар · step /step/ — алхам · setting /ˈsetɪŋ/ — тохиргоо<br>
        save /seɪv/ — хадгалах · restart /ˌriːˈstɑːrt/ — дахин эхлүүлэх · set up /set ʌp/ — тохируулах<br>
        press /pres/ — дарах · select /sɪˈlekt/ — сонгох · enter /ˈentər/ — оруулах<br>
        confirm /kənˈfɜːrm/ — баталгаажуулах · cancel /ˈkænsl/ — цуцлах · complete /kəmˈpliːt/ — дуусгах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Make sure to you save» ✗ → <b>Make sure YOU save</b> ✓ (өгүүлбэр). «Be careful to not delete» ✗ → <b>careful NOT TO delete</b> ✓ (not нь to-гийн өмнө!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «REMEMBER TO = урагш (хийх) · REMEMBER -ING = хойш (хийсэн)».</p>`
    },
    phrases:[
      {en:"Make sure you save your work before you close it.", pron:"мэйк шүр ю сэйв ёр вөрк бифор ю клоуз ит.", mn:"Хаахаасаа өмнө ажлаа хадгалсан эсэхээ шалгаарай."},
      {en:"Remember to log out when you finish.", pron:"римэмбэр ту лог аут вэн ю финиш.", mn:"Дуусахдаа гарахаа мартуузай."},
      {en:"Be careful not to delete the wrong file!", pron:"би кэрфул нот ту дилийт зэ ронг файл!", mn:"Буруу файл устгахаас болгоомжил!"},
      {en:"First, select the file. Then press 'Save'.", pron:"фөрст, силэкт зэ файл. зэн прэс сэйв.", mn:"Эхлээд файлаа сонго. Дараа нь 'Хадгалах' дар."},
      {en:"I remember logging out — I'm sure!", pron:"ай римэмбэр логинг аут — айм шүр!", mn:"Гарсанаа санаж байна — итгэлтэй байна!"}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["Make sure ", " save your work."], opts:["you","to you"], a:0, fix:"Make sure + өгүүлбэр → you save."},
      {q:"Бүтэц:", parts:["Remember ", " log out."], opts:["to","—"], a:0, fix:"Remember TO log out."},
      {q:"not-ийн байрлал:", parts:["Be careful ", " delete it!"], opts:["not to","to not"], a:0, fix:"careful NOT TO delete."},
      {q:"Утга:", parts:["I remember ", " out. (гарсанаа санаж байна)"], opts:["logging","to log"], a:0, fix:"Өнгөрсөн → remember loggING."}
    ],
    speak:{ scene:'Заавар өгөх', turns:[
      {ruby:"How do I set up this app?", pron:"хау ду ай сэт ап зис эп?", mn:"Энэ аппыг яаж тохируулах вэ?",
        choices:[{t:"First, select 'Settings'. Then press 'Set up'.",best:true,mn:"Эхлээд 'Тохиргоо' сонго. Дараа нь 'Тохируулах' дар."},{t:"First, you select settings. Then you press.",best:false,fix:"Заавар → тушаах хэлбэр: SELECT... PRESS..."}]},
      {ruby:"Okay, done! Anything else?", pron:"оукэй, дан! энисинг элс?", mn:"За, боллоо! Өөр юм?",
        choices:[{t:"Make sure you save your settings. And be careful not to delete the old file!",best:true,mn:"Тохиргоогоо хадгалсан эсэхээ шалгаарай. Хуучин файлыг устгахаас болгоомжил!"},{t:"Make sure to you save. Be careful to not delete old file.",best:false,fix:"Make sure YOU save. careful NOT TO delete."}]},
      {ruby:"Got it. Should I restart it now?", pron:"гот ит. шүд ай ристарт ит нау?", mn:"Ойлголоо. Одоо дахин эхлүүлэх үү?",
        choices:[{t:"Yes, and remember to log in again after that.",best:true,mn:"Тийм, дараа нь дахин нэвтрэхээ мартуузай."},{t:"Yes, and remember logging in again.",best:false,fix:"Ирээдүй → remember TO log in."}]}
    ]}
  },
  {
    id:'a2m6l7', title:"6.7 Техникийн асуудал", level:"A2 · М6",
    blurb:"I had my phone repaired — have sth done ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: have something done (бусдаар хийлгэх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Өөрөө биш, БУСДААР хийлгэсэн» гэдгийг илэрхийлэх.<br><br>
        <b>have + ЮМ + V3:</b>
        <div style="margin:12px 0"><span class="tag">I REPAIRED my phone. = Би өөрөө засчихсан.</span><span class="tag">I HAD my phone REPAIRED. = Би утсаа засуулсан (мастераар).</span></div>
        <b>Бүх цагт хэрэглэнэ:</b>
        <div style="margin:12px 0"><span class="tag">Одоо: I have my hair cut every month.</span><span class="tag">Өнгөрсөн: I had my laptop fixed.</span><span class="tag">Ирээдүй: I'm going to have my screen replaced.</span></div>
        <b>Асуулт:</b> Where did you have it repaired?<br>
        <b>get + юм + V3</b> = ижил утга, илүү ярианы: I got my phone fixed.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        repair /rɪˈper/ — засах · fix /fɪks/ — засах · replace /rɪˈpleɪs/ — солих<br>
        crack /kræk/ — хагарал · freeze /friːz/ — гацах · crash /kræʃ/ — унах (систем)<br>
        slow /sloʊ/ — удаан · warranty /ˈwɒrənti/ — баталгаа · service /ˈsɜːrvɪs/ — үйлчилгээ<br>
        technician /tekˈnɪʃn/ — техникч · cost /kɒst/ — өртөх · guarantee /ˌɡærənˈtiː/ — баталгаа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I had repaired my phone» ✗ — дараалал буруу (энэ нь Past Perfect болно!) → <b>I had MY PHONE repaired</b> ✓ (юм нь дунд!). Мөн «I had my phone repair» ✗ → V3 хэрэгтэй: <b>repaired</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE + ЮМ + V3» — юм нь ДУНД орно: had my phone repaired.</p>`
    },
    phrases:[
      {en:"I had my phone repaired last week.", pron:"ай хэд май фоун рипэрд ласт вийк.", mn:"Өнгөрсөн долоо хоногт утсаа засуулсан."},
      {en:"Where did you have it fixed?", pron:"вэр дид ю хэв ит фикст?", mn:"Хаана засуулсан бэ?"},
      {en:"I'm going to have my screen replaced.", pron:"айм гоуинг ту хэв май скрийн риплэйст.", mn:"Дэлгэцээ солиулах гэж байна."},
      {en:"My laptop keeps freezing and crashing.", pron:"май лэптоп кийпс фрийзинг энд крэшинг.", mn:"Компьютер маань байнга гацаж, унаад байна."},
      {en:"Is it still under warranty?", pron:"из ит стил андэр вөрэнти?", mn:"Баталгаат хугацаандаа байгаа юу?"}
    ],
    exercises:[
      {q:"Дараалал:", parts:["I had ", " repaired."], opts:["my phone","repaired my phone"], a:0, fix:"Юм нь дунд → had MY PHONE repaired."},
      {q:"V3 хэлбэр:", parts:["I had my screen ", "."], opts:["replaced","replace"], a:0, fix:"have + юм + V3 → replaced."},
      {q:"Асуулт:", parts:["Where did you have it ", "?"], opts:["fixed","fix"], a:0, fix:"V3 → fixed."},
      {q:"Утга:", parts:["I ", " my phone. (өөрөө засав)"], opts:["repaired","had repaired"], a:0, fix:"Өөрөө → I repaired my phone."}
    ],
    speak:{ scene:'Утас засуулах', turns:[
      {ruby:"Your phone screen looks new! Did you fix it yourself?", pron:"ёр фоун скрийн лүкс ню! дид ю фикс ит ёрсэлф?", mn:"Утасны дэлгэц тань шинэ харагдаж байна! Өөрөө засав уу?",
        choices:[{t:"No! I had it repaired at a shop.",best:true,mn:"Үгүй! Дэлгүүрт засуулсан."},{t:"No! I had repaired it at a shop.",best:false,fix:"Дараалал → I had IT repaired."}]},
      {ruby:"How much did it cost?", pron:"хау мач дид ит кост?", mn:"Хэд байсан бэ?",
        choices:[{t:"Nothing — it was still under warranty!",best:true,mn:"Юу ч биш — баталгаат хугацаандаа байсан!"},{t:"Nothing — it was still in warranty.",best:false,fix:"UNDER warranty (тогтмол хэллэг)."}]},
      {ruby:"Lucky you! My laptop keeps crashing.", pron:"лаки ю! май лэптоп кийпс крэшинг.", mn:"Азтай юмаа! Компьютер маань байнга унаад байна.",
        choices:[{t:"You should have it checked. It might be the software.",best:true,mn:"Шалгуулах хэрэгтэй. Программ хангамж байж магадгүй."},{t:"You should have check it. Maybe software.",best:false,fix:"have it CHECKED (V3). It MIGHT BE the software."}]}
    ]}
  },
  {
    id:'a2m6l8', title:"6.8 Онлайн худалдан авалт", level:"A2 · М6",
    blurb:"He asked if I had paid — дам асуулт ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: reported questions (дам асуулт)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Бусдын АСУУЛТЫГ дамжуулах — Модуль 4-ийн дам ярианы үргэлжлэл.<br><br>
        <b>⚠️ Хамгийн чухал: асуултын дараалал АЛГА болно!</b>
        <div style="margin:12px 0"><span class="tag">«Where do you live?» → He asked me where I LIVED. (did ✗, дараалал энгийн)</span><span class="tag">«Have you paid?» → She asked me IF I HAD paid.</span></div>
        <b>2 төрөл:</b>
        <div style="margin:12px 0"><span class="tag">Yes/No асуулт → ask + IF / WHETHER: He asked if I wanted a refund.</span><span class="tag">Wh-асуулт → ask + Wh-үг: She asked what I had ordered.</span></div>
        <b>Цаг мөн ухарна:</b> do → did · have → had · will → would · is → was.<br>
        <b>Санамж:</b> Модуль 2-ын «эелдэг асуулт»-тай ижил зарчим — дараалал эргэхгүй!
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        order /ˈɔːrdər/ — захиалга · deliver /dɪˈlɪvər/ — хүргэх · refund /ˈriːfʌnd/ — мөнгө буцаалт<br>
        return /rɪˈtɜːrn/ — буцаах · exchange /ɪksˈtʃeɪndʒ/ — солих · receipt /rɪˈsiːt/ — баримт<br>
        customer service /ˈkʌstəmər ˈsɜːrvɪs/ — үйлчлүүлэгчийн үйлчилгээ · complaint /kəmˈpleɪnt/ — гомдол · damaged /ˈdæmɪdʒd/ — гэмтсэн<br>
        parcel /ˈpɑːrsl/ — илгээмж · track /træk/ — хянах · seller /ˈselər/ — худалдагч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He asked me where did I live» ✗ → <b>where I LIVED</b> ✓ (did алга!). «She asked me have I paid» ✗ → <b>IF I HAD paid</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Дам асуулт нь асуулт биш — ЭНГИЙН өгүүлбэр» (do/did алга, дараалал хэвээр).</p>`
    },
    phrases:[
      {en:"They asked me if I had paid for it.", pron:"зэй аскт ми иф ай хэд пэйд фор ит.", mn:"Тэд надаас төлсөн эсэхийг асуусан."},
      {en:"She asked what I had ordered.", pron:"ши аскт вот ай хэд ордэрд.", mn:"Тэр надаас юу захиалснийг асуусан."},
      {en:"He asked me when the parcel had arrived.", pron:"хи аскт ми вэн зэ парсл хэд эрайвд.", mn:"Тэр илгээмж хэзээ ирснийг надаас асуусан."},
      {en:"I asked them if I could get a refund.", pron:"ай аскт зэм иф ай күд гет э рифанд.", mn:"Би тэднээс мөнгөө буцааж авч болох эсэхийг асуусан."},
      {en:"The parcel arrived damaged, so I made a complaint.", pron:"зэ парсл эрайвд дэмиджд, соу ай мэйд э комплэйнт.", mn:"Илгээмж гэмтсэн ирсэн тул гомдол гаргасан."}
    ],
    exercises:[
      {q:"Дараалал:", parts:["He asked me where ", "."], opts:["I lived","did I live"], a:0, fix:"Дам асуулт → энгийн дараалал: where I lived."},
      {q:"Yes/No:", parts:["She asked ", " I had paid."], opts:["if","that"], a:0, fix:"Yes/No асуулт → if."},
      {q:"Цаг ухраах:", parts:["He asked what I ", "."], opts:["wanted","want"], a:0, fix:"want → WANTED (цаг ухарна)."},
      {q:"Цаг ухраах:", parts:["They asked if I ", " paid."], opts:["had","have"], a:0, fix:"have → HAD."}
    ],
    speak:{ scene:'Онлайн худалдааны гомдол', turns:[
      {ruby:"Did you call customer service about the damaged parcel?", pron:"дид ю кол кастэмэр сөрвис эбаут зэ дэмиджд парсл?", mn:"Гэмтсэн илгээмжийн талаар үйлчилгээнд залгасан уу?",
        choices:[{t:"Yes. They asked me if I had a receipt.",best:true,mn:"Тийм. Тэд надаас баримт байгаа эсэхийг асуусан."},{t:"Yes. They asked me do I have receipt.",best:false,fix:"Дам асуулт → asked me IF I HAD a receipt."}]},
      {ruby:"What else did they ask?", pron:"вот элс дид зэй аск?", mn:"Өөр юу асуув?",
        choices:[{t:"They asked when the parcel had arrived and what I had ordered.",best:true,mn:"Илгээмж хэзээ ирсэн, юу захиалснийг асуусан."},{t:"They asked when did the parcel arrive and what did I order.",best:false,fix:"Дам асуултад did ✗ → when the parcel HAD ARRIVED."}]},
      {ruby:"Will they give you a refund?", pron:"вил зэй гив ю э рифанд?", mn:"Мөнгийг чинь буцааж өгөх үү?",
        choices:[{t:"I asked if I could get one, and they said they would send a new item.",best:true,mn:"Авч болох эсэхийг асуусан, тэд шинийг илгээнэ гэсэн."},{t:"I asked can I get one, and they said they will send new item.",best:false,fix:"asked IF I COULD... they said they WOULD send."}]}
    ]}
  },
  {
    id:'a2m6l9', title:"6.9 Сэтгэгдэл", level:"A2 · М6",
    blurb:"absolutely amazing — хүчитгэх дайвар",
    rule:{
      h:"Зорилго ба дүрэм: quite / pretty / absolutely + хүчтэй тэмдэг нэр",
      html:`<b>🎯 Зорилго:</b> Сэтгэгдэл, шүүмж бичихэд мэдрэмжээ нарийн зэрэглэх.<br><br>
        <b>Хүчний шат:</b>
        <div style="margin:12px 0"><span class="tag">a bit = жаахан · quite = нэлээд · pretty = нэлээд (ярианы) · really = үнэхээр · absolutely = туйлын</span></div>
        <b>⚠️ Алтан дүрэм — 2 бүлэг тэмдэг нэр:</b>
        <div style="margin:12px 0"><span class="tag">ЭНГИЙН (good, big, cold): very / quite / a bit + good</span><span class="tag">ХҮЧТЭЙ (amazing, awful, freezing, huge): absolutely / really + amazing</span></div>
        <b>«very amazing» ✗</b> — amazing аль хэдийн «маш сайхан» гэсэн утгатай!
        <div style="margin:12px 0"><span class="tag">very good ✓ ⟷ absolutely amazing ✓</span><span class="tag">very amazing ✗ · absolutely good ✗</span></div>
        <b>Хосууд:</b> good→amazing · bad→awful · cold→freezing · big→huge · tired→exhausted.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        comment /ˈkɒment/ — сэтгэгдэл · review /rɪˈvjuː/ — шүүмж · rate /reɪt/ — үнэлэх<br>
        star /stɑːr/ — од · recommend /ˌrekəˈmend/ — зөвлөх · disappointing /ˌdɪsəˈpɔɪntɪŋ/ — урам хугалам<br>
        awful /ˈɔːfl/ — аймшигтай · amazing /əˈmeɪzɪŋ/ — гайхалтай · huge /hjuːdʒ/ — асар том<br>
        absolutely /ˈæbsəluːtli/ — туйлын · pretty /ˈprɪti/ — нэлээд · honest /ˈɒnɪst/ — шударга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «very amazing» ✗ → <b>absolutely amazing</b> ✓. «absolutely good» ✗ → <b>very good</b> ✓. Мөн «quite» Британид «нэлээд», АНУ-д «маш» гэсэн бага зэрэг өөр утгатай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «VERY = энгийн тэмдэг нэрт · ABSOLUTELY = хүчтэй тэмдэг нэрт» — very good / absolutely amazing.</p>`
    },
    phrases:[
      {en:"This app is absolutely amazing!", pron:"зис эп из эбсэлютли эмэйзинг!", mn:"Энэ апп туйлын гайхалтай!"},
      {en:"The delivery was pretty fast.", pron:"зэ диливэри воз прити фаст.", mn:"Хүргэлт нэлээд хурдан байсан."},
      {en:"Honestly, the quality was quite disappointing.", pron:"онистли, зэ кволити воз квайт дисэпойнтинг.", mn:"Үнэнийг хэлэхэд чанар нь нэлээд урам хугалам байлаа."},
      {en:"The customer service was absolutely awful.", pron:"зэ кастэмэр сөрвис воз эбсэлютли офл.", mn:"Үйлчилгээ нь туйлын аймшигтай байлаа."},
      {en:"I'd definitely recommend it. Five stars!", pron:"айд дэфинэтли рэкэмэнд ит. файв старз!", mn:"Гарцаагүй зөвлөж байна. 5 од!"}
    ],
    exercises:[
      {q:"Хүчтэй тэмдэг нэр:", parts:["It's ", " amazing!"], opts:["absolutely","very"], a:0, fix:"amazing = хүчтэй → absolutely."},
      {q:"Энгийн тэмдэг нэр:", parts:["It's ", " good."], opts:["very","absolutely"], a:0, fix:"good = энгийн → very good."},
      {q:"Хүчтэй тэмдэг нэр:", parts:["The service was ", " awful."], opts:["absolutely","very"], a:0, fix:"awful = хүчтэй → absolutely."},
      {q:"Дунд зэрэг:", parts:["The delivery was ", " fast."], opts:["pretty","absolutely"], a:0, fix:"Нэлээд → pretty fast."}
    ],
    speak:{ scene:'Шүүмж бичих', turns:[
      {ruby:"You bought that app — what do you think?", pron:"ю бот зэт эп — вот ду ю синк?", mn:"Тэр аппыг авсан шүү дээ — юу гэж бодож байна?",
        choices:[{t:"It's absolutely amazing! I'd definitely recommend it.",best:true,mn:"Туйлын гайхалтай! Гарцаагүй зөвлөнө."},{t:"It's very amazing! I recommend definitely.",best:false,fix:"VERY + amazing ✗ → ABSOLUTELY amazing."}]},
      {ruby:"What about the online shop you used?", pron:"вот эбаут зэ онлайн шоп ю юзд?", mn:"Ашигласан онлайн дэлгүүр тань яах вэ?",
        choices:[{t:"The delivery was pretty fast, but the quality was quite disappointing.",best:true,mn:"Хүргэлт нэлээд хурдан ч чанар нь нэлээд урам хугалам байсан."},{t:"The delivery was absolutely fast, but quality was very disappointing.",best:false,fix:"PRETTY fast (fast=энгийн). QUITE disappointing."}]},
      {ruby:"Did you complain?", pron:"дид ю комплэйн?", mn:"Гомдол гаргасан уу?",
        choices:[{t:"Yes, but their service was absolutely awful. I had to call three times!",best:true,mn:"Тийм, гэхдээ үйлчилгээ нь туйлын аймшигтай байсан. 3 удаа залгах болсон!"},{t:"Yes, but service was very awful. I must call three times.",best:false,fix:"ABSOLUTELY awful. I HAD TO call."}]}
    ]}
  },
  {
    id:'a2m6l10', title:"6.10 Модулийн төсөл", level:"A2 · М6",
    blurb:"🏆 Технологийн шүүмж бичих",
    rule:{
      h:"Давтлага: A2 Модуль 6-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 6-ийн мэдлэгээ нэгтгэж, жинхэнэ онлайн шүүмж бичих.<br><br>
        <b>Модуль 6-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">call you back · hang up</span><span class="tag">log in TO · sign up FOR · depend ON</span><span class="tag">each other ⟷ ourselves</span><span class="tag">unless (= if ... not) ⭐</span><span class="tag">must be ⟷ can't be ⭐</span><span class="tag">Make sure you... / Remember TO...</span><span class="tag">had my phone repaired ⭐</span><span class="tag">He asked if I had paid ⭐</span><span class="tag">absolutely amazing ⟷ very good</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Онлайн шүүмж (15+ өгүүлбэр):</b> Худалдан авсан төхөөрөмжийнхөө шүүмж бич! Жишээ:<br>
        <i>⭐⭐☆☆☆ I bought this phone online last month. At first it was absolutely amazing — the screen was huge and the battery was pretty good. But after two weeks it started freezing. I couldn't log in to my apps! I thought it must be the software, but it can't have been, because I updated everything. I called customer service and they asked me if I had a receipt. They also asked what I had done before the problem started. In the end, I had it repaired at their shop. The service was quite slow — it took ten days! Make sure you check the warranty before you buy. Unless you have a receipt, they won't help you. Honestly, I wouldn't recommend this seller.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Шүүмжийн 4 давхар: <b>Эхний сэтгэгдэл</b> (absolutely amazing) → <b>Асуудал</b> (it must be...) → <b>Үйлчилгээ</b> (they asked if...) → <b>Зөвлөгөө</b> (Make sure... / Unless...).</p>`
    },
    phrases:[
      {en:"At first it was absolutely amazing.", pron:"эт фөрст ит воз эбсэлютли эмэйзинг.", mn:"Эхэндээ туйлын гайхалтай байсан."},
      {en:"I couldn't log in to my apps!", pron:"ай күднт лог ин ту май эпс!", mn:"Аппуудаа нэвтэрч чадаагүй!"},
      {en:"I thought it must be the software.", pron:"ай сот ит маст би зэ софтвэр.", mn:"Программ хангамж байх гэж бодсон."},
      {en:"They asked me if I had a receipt.", pron:"зэй аскт ми иф ай хэд э рисийт.", mn:"Тэд надаас баримт байгаа эсэхийг асуусан."},
      {en:"Unless you have a receipt, they won't help you.", pron:"анлэс ю хэв э рисийт, зэй воунт хэлп ю.", mn:"Баримтгүй бол тэд танд туслахгүй."}
    ],
    exercises:[
      {q:"Давтлага (угтвар):", parts:["I can't log in ", " my account."], opts:["to","—"], a:0, fix:"log in TO."},
      {q:"Давтлага (таамаг):", parts:["It ", " be broken — the screen is black."], opts:["must","mustn't"], a:0, fix:"95% тийм → must be."},
      {q:"Давтлага (unless):", parts:["Unless you ", " it, you'll lose it."], opts:["back up","don't back up"], a:0, fix:"unless дотроо not-той."},
      {q:"Давтлага (have sth done):", parts:["I had my phone ", "."], opts:["repaired","repair"], a:0, fix:"have + юм + V3."}
    ],
    speak:{ scene:'🏆 Төсөл: Онлайн шүүмж', turns:[
      {ruby:"You're writing a review? How was the phone?", pron:"юр райтинг э ривью? хау воз зэ фоун?", mn:"Шүүмж бичиж байна уу? Утас ямар байсан бэ?",
        choices:[{t:"At first it was absolutely amazing, but then it started freezing.",best:true,mn:"Эхэндээ туйлын гайхалтай байсан ч дараа нь гацаж эхэлсэн."},{t:"At first very amazing, but then it start freezing.",best:false,fix:"ABSOLUTELY amazing... it STARTED freezing."}]},
      {ruby:"Did you contact the seller?", pron:"дид ю контэкт зэ сэлэр?", mn:"Худалдагчтай холбогдсон уу?",
        choices:[{t:"Yes. They asked me if I had a receipt, and I had it repaired at their shop.",best:true,mn:"Тийм. Тэд баримт байгаа эсэхийг асууж, дэлгүүрт нь засуулсан."},{t:"Yes. They asked me do I have receipt, and I had repaired it.",best:false,fix:"asked IF I HAD a receipt... I had IT repaired."}]},
      {ruby:"Any advice for other buyers?", pron:"эни эдвайс фор азэр байэрз?", mn:"Бусад худалдан авагчдад зөвлөгөө байна уу?",
        choices:[{t:"Make sure you check the warranty. Unless you have a receipt, they won't help.",best:true,mn:"Баталгааг шалгасан эсэхээ шалгаарай. Баримтгүй бол тусалахгүй."},{t:"Make sure to you check warranty. Unless you don't have receipt, they not help.",best:false,fix:"Make sure YOU check. Unless you HAVE a receipt, they WON'T help."}]}
    ]}
  },
  {
    id:'a2m7l1', title:"7.1 Байгаль", level:"A2 · М7",
    blurb:"most people ⟷ most of the people — тоо хэмжээ ⭐",
    rule:{
      h:"Зорилго ба дүрэм: most / some / none + of the",
      html:`<b>🎯 Зорилго:</b> ⭐ Ерөнхий ба тодорхой тоо хэмжээг ялгах — жижиг «of the» том ялгаа гаргана!<br><br>
        <b>Алтан дүрэм:</b>
        <div style="margin:12px 0"><span class="tag">ЕРӨНХИЙ (бүх хүн дэлхий дээр): most people · some animals · all rivers</span><span class="tag">ТОДОРХОЙ (тухайн бүлэг): most OF THE people in my town · some OF THE animals in the zoo</span></div>
        <b>«of» хэзээ заавал вэ?</b> the / my / this / them гэх мэт тодорхойлогчийн өмнө:
        <div style="margin:12px 0"><span class="tag">most of the students ✓ · most of them ✓ · most of my friends ✓</span><span class="tag">most the students ✗</span></div>
        <b>none of + ганц тоо:</b> None of the animals IS dangerous. (ярианд «are» ч болно)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        nature /ˈneɪtʃər/ — байгаль · environment /ɪnˈvaɪrənmənt/ — орчин · forest /ˈfɒrɪst/ — ой<br>
        river /ˈrɪvər/ — гол · lake /leɪk/ — нуур · mountain /ˈmaʊntən/ — уул<br>
        desert /ˈdezərt/ — цөл · grassland /ˈɡræslænd/ — тал хээр · wildlife /ˈwaɪldlaɪf/ — зэрлэг ан амьтан<br>
        natural /ˈnætʃrəl/ — байгалийн · beauty /ˈbjuːti/ — гоо үзэсгэлэн · resource /ˈriːsɔːrs/ — нөөц</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Most of people like nature» ✗ — ерөнхий бол of ✗: <b>Most people</b> ✓. Харин «Most people in my class» ✗ → тодорхой бүлэг: <b>Most OF THE people in my class</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «THE/MY/THEM харагдвал OF хэрэгтэй · Харагдахгүй бол OF ✗».</p>`
    },
    phrases:[
      {en:"Most people love the countryside.", pron:"моуст пийпл лав зэ кантрисайд.", mn:"Ихэнх хүн хөдөө дуртай."},
      {en:"Most of the rivers in Mongolia are clean.", pron:"моуст ов зэ ривэрз ин Монголиа а клийн.", mn:"Монголын ихэнх гол цэвэр байдаг."},
      {en:"Some of my friends have never seen the Gobi.", pron:"сам ов май фрэндз хэв нэвэр сийн зэ Гоби.", mn:"Найзуудын минь зарим нь Говийг хэзээ ч үзээгүй."},
      {en:"None of the lakes here is polluted.", pron:"нан ов зэ лэйкс хийр из полютид.", mn:"Энд байгаа нуурын аль нь ч бохирдоогүй."},
      {en:"Mongolia has amazing natural beauty.", pron:"Монголиа хэз эмэйзинг нэчрэл бьюти.", mn:"Монгол гайхалтай байгалийн гоо үзэсгэлэнтэй."}
    ],
    exercises:[
      {q:"Ерөнхий:", parts:["", " people love nature."], opts:["Most","Most of"], a:0, fix:"Ерөнхий → Most people (of ✗)."},
      {q:"Тодорхой:", parts:["Most ", " rivers here are clean."], opts:["of the","—"], a:0, fix:"the-тэй → most OF THE rivers."},
      {q:"Тодорхой:", parts:["Some ", " are very old."], opts:["of them","them"], a:0, fix:"them-тэй → some OF them."},
      {q:"none:", parts:["None of the lakes ", " polluted."], opts:["is","are not"], a:0, fix:"none аль хэдийн үгүйсгэсэн → is."}
    ],
    speak:{ scene:'Байгалийн тухай', turns:[
      {ruby:"Do Mongolians love nature?", pron:"ду Монголианз лав нэйчэр?", mn:"Монголчууд байгальд дуртай юу?",
        choices:[{t:"Yes! Most people love the countryside.",best:true,mn:"Тийм! Ихэнх хүн хөдөө дуртай."},{t:"Yes! Most of people love countryside.",best:false,fix:"Ерөнхий → Most people (of ✗)."}]},
      {ruby:"Are the rivers clean there?", pron:"а зэ ривэрз клийн зэр?", mn:"Тэнд гол цэвэр байдаг уу?",
        choices:[{t:"Most of the rivers are clean, but some are polluted.",best:true,mn:"Ихэнх гол цэвэр ч зарим нь бохирдсон."},{t:"Most rivers there are clean.",best:false,fix:"Тодорхой бүлэг → Most OF THE rivers."}]},
      {ruby:"Have your friends been to the Gobi?", pron:"хэв ёр фрэндз бийн ту зэ Гоби?", mn:"Найзууд тань Говь очиж байсан уу?",
        choices:[{t:"Some of them have, but most of them haven't.",best:true,mn:"Зарим нь очсон ч ихэнх нь очоогүй."},{t:"Some them have, but most them haven't.",best:false,fix:"some OF them, most OF them."}]}
    ]}
  },
  {
    id:'a2m7l2', title:"7.2 Амьтан", level:"A2 · М7",
    blurb:"Many forests have been destroyed — PP идэвхгүй ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect passive",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Одоо хүртэл болсон өөрчлөлтийг албан ёсоор дүрслэх — байгаль хамгааллын гол хэлбэр.<br><br>
        <b>have/has + BEEN + V3:</b>
        <div style="margin:12px 0"><span class="tag">Many forests HAVE BEEN destroyed. = Олон ой сүйтгэгдсэн.</span><span class="tag">This animal HAS BEEN protected since 1990.</span></div>
        <b>Гурван идэвхгүй хэлбэрийг харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">Одоо: Forests ARE destroyed. (М3)</span><span class="tag">Өнгөрсөн: Forests WERE destroyed. (М1)</span><span class="tag">PP: Forests HAVE BEEN destroyed. (одоо хүртэл, үр дүн мэдрэгдэж байна)</span></div>
        <b>⚠️ PP Continuous-тай андуурч болохгүй:</b> have BEEN destroyED (идэвхгүй) ⟷ have BEEN destroyING (үргэлжилж буй).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        wild /waɪld/ — зэрлэг · species /ˈspiːʃiːz/ — зүйл · endangered /ɪnˈdeɪndʒərd/ — ховордсон<br>
        extinct /ɪkˈstɪŋkt/ — устсан · hunt /hʌnt/ — агнах · protect /prəˈtekt/ — хамгаалах<br>
        destroy /dɪˈstrɔɪ/ — сүйтгэх · habitat /ˈhæbɪtæt/ — амьдрах орчин · survive /sərˈvaɪv/ — амьд үлдэх<br>
        disappear /ˌdɪsəˈpɪr/ — алга болох · rare /rer/ — ховор · population /ˌpɒpjuˈleɪʃn/ — тоо толгой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Forests have destroyed» ✗ — ой өөрөө сүйтгээгүй! → <b>have BEEN destroyed</b> ✓. Мөн «has been destroy» ✗ → V3: <b>destroyED</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE + BEEN + V3 = одоо хүртэл ...агдсан» — гурван хэсэг заавал.</p>`
    },
    phrases:[
      {en:"Many forests have been destroyed in recent years.", pron:"мэни форэстс хэв бийн дистройд ин рийснт йирз.", mn:"Сүүлийн жилүүдэд олон ой сүйтгэгдсэн."},
      {en:"The snow leopard has been protected since 1990.", pron:"зэ сноу лэпэрд хэз бийн протэктид синс найнтийн найнти.", mn:"Ирвэсийг 1990 оноос хойш хамгаалж байна."},
      {en:"Some species have already disappeared.", pron:"сам спийшийз хэв олрэди дисэпиэрд.", mn:"Зарим зүйл аль хэдийн алга болсон."},
      {en:"Their habitat has been damaged by humans.", pron:"зэр хэбитэт хэз бийн дэмиджд бай хьюмэнз.", mn:"Тэдний амьдрах орчин хүний нөлөөгөөр гэмтсэн."},
      {en:"This animal is endangered — very few have survived.", pron:"зис энимл из индэйнжэрд — вэри фью хэв сөрвайвд.", mn:"Энэ амьтан ховордсон — маш цөөхөн нь амьд үлдсэн."}
    ],
    exercises:[
      {q:"Идэвхгүй:", parts:["Many forests have ", " destroyed."], opts:["been","—"], a:0, fix:"have BEEN + V3."},
      {q:"V3 хэлбэр:", parts:["It has been ", " since 1990."], opts:["protected","protect"], a:0, fix:"been + V3 → protected."},
      {q:"Идэвхтэй/идэвхгүй:", parts:["Some species have ", "."], opts:["disappeared","been disappeared"], a:0, fix:"disappear нь өөрөө болно → have disappeared."},
      {q:"by:", parts:["It was damaged ", " humans."], opts:["by","from"], a:0, fix:"Хэн хийсэн → by."}
    ],
    speak:{ scene:'Ховордсон амьтан', turns:[
      {ruby:"Is the snow leopard still endangered?", pron:"из зэ сноу лэпэрд стил индэйнжэрд?", mn:"Ирвэс одоо ч ховордсон уу?",
        choices:[{t:"Yes, but it has been protected since 1990.",best:true,mn:"Тийм, гэхдээ 1990 оноос хойш хамгаалагдаж байна."},{t:"Yes, but it has protected since 1990.",best:false,fix:"has BEEN protected (идэвхгүй)."}]},
      {ruby:"What is the main problem?", pron:"вот из зэ мэйн проблэм?", mn:"Гол асуудал нь юу вэ?",
        choices:[{t:"Their habitat has been destroyed by humans.",best:true,mn:"Тэдний амьдрах орчин хүний нөлөөгөөр сүйтгэгдсэн."},{t:"Their habitat has destroyed from humans.",best:false,fix:"has BEEN destroyed BY humans."}]},
      {ruby:"Have any species disappeared already?", pron:"хэв эни спийшийз дисэпиэрд олрэди?", mn:"Ямар нэг зүйл аль хэдийн алга болсон уу?",
        choices:[{t:"Yes, some have. Very few animals have survived.",best:true,mn:"Тийм, зарим нь. Маш цөөхөн амьтан амьд үлдсэн."},{t:"Yes. Very few animals have been survived.",best:false,fix:"survive нь өөрөө болно → have survived."}]}
    ]}
  },
  {
    id:'a2m7l3', title:"7.3 Хог хаягдал", level:"A2 · М7",
    blurb:"stop using ⟷ stop to buy — утга өөрчлөгдөнө ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: stop / try / remember + -ing ⟷ to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Зарим үйл үг -ing ба to хоёуланг авдаг ч <b>УТГА НЬ ТЭС ӨӨР</b>!<br><br>
        <b>STOP:</b>
        <div style="margin:12px 0"><span class="tag">stop + -ING = тэр үйлдлээ БОЛИХ: I stopped using plastic bags. (хэрэглэхээ больсон)</span><span class="tag">stop + TO = ӨӨР зүйл хийхээр зогсох: I stopped to buy a bag. (уут авахаар зогссон)</span></div>
        <b>TRY:</b>
        <div style="margin:12px 0"><span class="tag">try + -ING = туршиж үзэх: Try using a cloth bag. (нэг туршаад үз)</span><span class="tag">try + TO = хичээх: I try to recycle. (хичээж байна)</span></div>
        <b>REMEMBER / FORGET</b> (М6-г санаарай):
        <div style="margin:12px 0"><span class="tag">remember TO = мартуузай (урагш) · remember -ING = хийснээ санах (хойш)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        rubbish /ˈrʌbɪʃ/ — хог · waste /weɪst/ — хаягдал/үрэх · recycle /ˌriːˈsaɪkl/ — дахин боловсруулах<br>
        plastic /ˈplæstɪk/ — хуванцар · bin /bɪn/ — хогийн сав · throw away /θroʊ əˈweɪ/ — хаях<br>
        reuse /ˌriːˈjuːz/ — дахин ашиглах · pollute /pəˈluːt/ — бохирдуулах · litter /ˈlɪtər/ — хог хаях<br>
        packaging /ˈpækɪdʒɪŋ/ — сав баглаа · separate /ˈsepəreɪt/ — ялгах · reduce /rɪˈduːs/ — багасгах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I stopped to use plastic» ✗ = «Хуванцар хэрэглэхээр зогссон» (эсрэг утга!) → болих гэвэл <b>stopped USING plastic</b> ✓ Энэ бол хамгийн аюултай алдаа!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «STOP + -ING = болих · STOP + TO = өөр юм хийхээр зогсох» — утга нь эсрэг!</p>`
    },
    phrases:[
      {en:"I stopped using plastic bags last year.", pron:"ай стопт юзинг плэстик бэгз ласт йир.", mn:"Өнгөрсөн жил хуванцар уут хэрэглэхээ больсон."},
      {en:"On the way home, I stopped to buy a cloth bag.", pron:"он зэ вэй хоум, ай стопт ту бай э клос бэг.", mn:"Гэр рүүгээ явахдаа даавуун уут авахаар зогссон."},
      {en:"Try using a reusable bottle — it's easy!", pron:"трай юзинг э рийюзэбл ботл — итс ийзи!", mn:"Дахин ашиглах шил туршиж үз — амархан!"},
      {en:"I try to recycle everything I can.", pron:"ай трай ту рисайкл эврисинг ай кэн.", mn:"Чадах бүхнээ дахин боловсруулахыг хичээдэг."},
      {en:"Remember to separate your rubbish!", pron:"римэмбэр ту сэпэрэйт ёр рабиш!", mn:"Хогоо ялгахаа мартуузай!"}
    ],
    exercises:[
      {q:"Болих:", parts:["I stopped ", " plastic bags. (больсон)"], opts:["using","to use"], a:0, fix:"Болих → stop + -ING."},
      {q:"Зогсох:", parts:["I stopped ", " a bag. (авахаар зогссон)"], opts:["to buy","buying"], a:0, fix:"Өөр юм хийхээр → stop + TO."},
      {q:"Хичээх:", parts:["I try ", " everything."], opts:["to recycle","recycling"], a:0, fix:"Хичээх → try + TO."},
      {q:"Туршиж үзэх:", parts:["Try ", " a cloth bag! (туршаад үз)"], opts:["using","to use"], a:0, fix:"Туршиж үзэх → try + -ING."}
    ],
    speak:{ scene:'Хог багасгах', turns:[
      {ruby:"How do you reduce plastic at home?", pron:"хау ду ю ридьюс плэстик эт хоум?", mn:"Гэртээ хуванцарыг яаж багасгадаг вэ?",
        choices:[{t:"I stopped using plastic bags last year.",best:true,mn:"Өнгөрсөн жил хуванцар уут хэрэглэхээ больсон."},{t:"I stopped to use plastic bags last year.",best:false,fix:"«stop to use» = хэрэглэхээр зогссон! → stopped USING."}]},
      {ruby:"That's great! What else?", pron:"зэтс грэйт! вот элс?", mn:"Гоё! Өөр юу?",
        choices:[{t:"I try to recycle everything, and I always separate my rubbish.",best:true,mn:"Бүх юмаа дахин боловсруулахыг хичээж, хогоо үргэлж ялгадаг."},{t:"I try recycling everything and separate rubbish.",best:false,fix:"Хичээх → try TO recycle."}]},
      {ruby:"Any advice for me?", pron:"эни эдвайс фор ми?", mn:"Надад зөвлөгөө байна уу?",
        choices:[{t:"Try using a reusable bottle. And remember to take a bag when you shop!",best:true,mn:"Дахин ашиглах шил туршиж үз. Дэлгүүр явахдаа уут авахаа мартуузай!"},{t:"Try to use reusable bottle. Remember taking a bag.",best:false,fix:"Туршаад үз → try USING. Мартуузай → remember TO take."}]}
    ]}
  },
  {
    id:'a2m7l4', title:"7.4 Ус ба эрчим хүч", level:"A2 · М7",
    blurb:"Solar power will be used — ирээдүйн идэвхгүй ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: future passive (will be + V3)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ирээдүйд юу хийгдэхийг албан ёсоор хэлэх.<br><br>
        <b>will + BE + V3:</b>
        <div style="margin:12px 0"><span class="tag">Solar power WILL BE USED everywhere. = Нарны эрчим хүч хаа сайгүй ашиглагдана.</span><span class="tag">A new plant WILL BE BUILT next year.</span></div>
        <b>Идэвхгүй хэлбэрийн БҮРЭН зураглал (одоо чи бүгдийг мэднэ!):</b>
        <div style="margin:12px 0"><span class="tag">Одоо: is used · Өнгөрсөн: was used · PP: has been used · Ирээдүй: will be used · Модаль: must be used</span></div>
        <b>going to-тэй ч болно:</b> It is going to be built.<br>
        <b>Үгүйсгэл:</b> It won't be used.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        energy /ˈenərdʒi/ — эрчим хүч · power /ˈpaʊər/ — эрчим хүч/чадал · solar /ˈsoʊlər/ — нарны<br>
        wind /wɪnd/ — салхин · coal /koʊl/ — нүүрс · fuel /ˈfjuːəl/ — түлш<br>
        electricity /ɪˌlekˈtrɪsəti/ — цахилгаан · renewable /rɪˈnuːəbl/ — сэргээгдэх · supply /səˈplaɪ/ — нийлүүлэлт<br>
        save /seɪv/ — хэмнэх · waste /weɪst/ — үрэх · tap /tæp/ — цорго</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It will used» ✗ → be заавал: <b>will BE used</b> ✓. «It will be use» ✗ → V3: <b>used</b> ✓. Мөн «will be builded» ✗ → <b>built</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WILL + BE + V3» — гурван хэсэг: will be used, will be built.</p>`
    },
    phrases:[
      {en:"Solar power will be used more in the future.", pron:"соулэр пауэр вил би юзд мор ин зэ фьючэр.", mn:"Ирээдүйд нарны эрчим хүч илүү ашиглагдана."},
      {en:"A new wind farm will be built next year.", pron:"э ню винд фарм вил би билт нэкст йир.", mn:"Ирэх жил шинэ салхин цахилгаан станц баригдана."},
      {en:"Coal won't be used in twenty years.", pron:"коул воунт би юзд ин твэнти йирз.", mn:"20 жилийн дараа нүүрс ашиглагдахгүй."},
      {en:"Turn off the tap — don't waste water!", pron:"төрн оф зэ тэп — доунт вэйст вотэр!", mn:"Цоргоо хаа — усаа бүү үр!"},
      {en:"Renewable energy is going to be much cheaper.", pron:"ринуэбл энэржи из гоуинг ту би мач чийпэр.", mn:"Сэргээгдэх эрчим хүч хамаагүй хямд болох гэж байна."}
    ],
    exercises:[
      {q:"be мартав уу:", parts:["It will ", " used everywhere."], opts:["be","—"], a:0, fix:"will BE + V3."},
      {q:"V3 хэлбэр:", parts:["A farm will be ", " next year."], opts:["built","build"], a:0, fix:"build → built (V3)."},
      {q:"Үгүйсгэл:", parts:["Coal ", " be used in 2050."], opts:["won't","doesn't"], a:0, fix:"Ирээдүйн үгүйсгэл → won't be."},
      {q:"going to:", parts:["It is going to ", " cheaper."], opts:["be","—"], a:0, fix:"going to BE cheaper."}
    ],
    speak:{ scene:'Эрчим хүчний ирээдүй', turns:[
      {ruby:"What will energy be like in 2050?", pron:"вот вил энэржи би лайк ин твэнти фифти?", mn:"2050 онд эрчим хүч ямар байх бол?",
        choices:[{t:"Solar power will be used much more, I think.",best:true,mn:"Нарны эрчим хүч хамаагүй их ашиглагдана гэж бодож байна."},{t:"Solar power will used much more.",best:false,fix:"will BE used."}]},
      {ruby:"And coal?", pron:"энд коул?", mn:"Нүүрс яах вэ?",
        choices:[{t:"It probably won't be used at all.",best:true,mn:"Магадгүй огт ашиглагдахгүй."},{t:"It probably doesn't will be used.",best:false,fix:"Ирээдүйн үгүйсгэл → probably WON'T be used."}]},
      {ruby:"What can we do now?", pron:"вот кэн ви ду нау?", mn:"Одоо бид юу хийж чадах вэ?",
        choices:[{t:"Save energy at home. Turn off the tap and don't waste water!",best:true,mn:"Гэртээ эрчим хүч хэмнэ. Цоргоо хааж, усаа бүү үр!"},{t:"Save energy. Turn off tap, don't waste the water.",best:false,fix:"Turn off THE tap. don't waste water (артикльгүй)."}]}
    ]}
  },
  {
    id:'a2m7l5', title:"7.5 Цаг уур", level:"A2 · М7",
    blurb:"by 2050 / in 30 years — ирээдүйн цаг ⭐",
    rule:{
      h:"Зорилго ба дүрэм: ирээдүйн цагийн илэрхийлэл",
      html:`<b>🎯 Зорилго:</b> Ирээдүйн цагийг нарийн заах.<br><br>
        <b>BY vs IN — ирээдүйд (М3-ыг санаарай):</b>
        <div style="margin:12px 0"><span class="tag">BY 2050 = 2050 БОЛТОЛ, түүнээс өмнө: By 2050, the ice will have melted.</span><span class="tag">IN 30 years = 30 жилийн ДАРАА: In 30 years, we will use solar power.</span></div>
        <b>⚠️ «in» хоёр өөр утгатай!</b>
        <div style="margin:12px 0"><span class="tag">in 2050 = 2050 ОНД</span><span class="tag">in 30 years = 30 жилийн ДАРАА (одооноос)</span></div>
        <b>Бусад хэрэгтэй:</b>
        <div style="margin:12px 0"><span class="tag">from now on = одооноос эхлэн</span><span class="tag">sooner or later = эрт орой хэзээ нэгэн цагт</span><span class="tag">in the near future = ойрын ирээдүйд</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        climate /ˈklaɪmət/ — уур амьсгал · change /tʃeɪndʒ/ — өөрчлөлт · warming /ˈwɔːrmɪŋ/ — дулаарал<br>
        temperature /ˈtemprətʃər/ — температур · rise /raɪz/ — өсөх · melt /melt/ — хайлах<br>
        ice /aɪs/ — мөс · flood /flʌd/ — үер · drought /draʊt/ — ган<br>
        affect /əˈfekt/ — нөлөөлөх · cause /kɔːz/ — шалтгаан болох · serious /ˈsɪriəs/ — ноцтой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «after 30 years» ✗ (монголоор «30 жилийн дараа») → ирээдүйд <b>IN 30 years</b> ✓. «after» нь өнгөрсөн явдлын дарааллаа хэлэхэд: <i>After the meeting, we went home.</i></p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BY 2050 = болтол · IN 30 years = дараа · Ирээдүйд AFTER ✗».</p>`
    },
    phrases:[
      {en:"By 2050, the temperature will rise by two degrees.", pron:"бай твэнти фифти, зэ тэмпрэчэр вил райз бай ту дигрийз.", mn:"2050 он гэхэд температур 2 хэмээр өснө."},
      {en:"In thirty years, most cars will be electric.", pron:"ин сөрти йирз, моуст карз вил би илэктрик.", mn:"30 жилийн дараа ихэнх машин цахилгаан болно."},
      {en:"Climate change has already caused serious floods.", pron:"клаймэт чэйнж хэз олрэди козд сириэс фладз.", mn:"Уур амьсгалын өөрчлөлт аль хэдийн ноцтой үер үүсгэсэн."},
      {en:"From now on, I'll use less water.", pron:"фром нау он, айл юз лэс вотэр.", mn:"Одооноос эхлэн бага ус хэрэглэнэ."},
      {en:"Sooner or later, we will have to change.", pron:"сүнэр ор лэйтэр, ви вил хэв ту чэйнж.", mn:"Эрт орой хэзээ нэгэн цагт бид өөрчлөгдөх ёстой болно."}
    ],
    exercises:[
      {q:"by/in:", parts:["", " 2050, the ice will melt."], opts:["By","In"], a:0, fix:"...болтол → By 2050."},
      {q:"by/in:", parts:["", " thirty years, cars will be electric."], opts:["In","After"], a:0, fix:"...дараа → IN thirty years."},
      {q:"Ирээдүйд:", parts:["", " ten years, it will be too late."], opts:["In","After"], a:0, fix:"Ирээдүйд after ✗ → In ten years."},
      {q:"Хэллэг:", parts:["", " now on, I'll recycle."], opts:["From","Since"], a:0, fix:"From now on."}
    ],
    speak:{ scene:'Уур амьсгалын өөрчлөлт', turns:[
      {ruby:"How serious is climate change?", pron:"хау сириэс из клаймэт чэйнж?", mn:"Уур амьсгалын өөрчлөлт хэр ноцтой вэ?",
        choices:[{t:"Very. By 2050, the temperature will rise by two degrees.",best:true,mn:"Их. 2050 он гэхэд температур 2 хэмээр өснө."},{t:"Very. In 2050, temperature will rise two degrees.",best:false,fix:"BY 2050 (тэр болтол). rise BY two degrees."}]},
      {ruby:"Will anything change?", pron:"вил энисинг чэйнж?", mn:"Ямар нэг зүйл өөрчлөгдөх үү?",
        choices:[{t:"Yes. In thirty years, most cars will be electric.",best:true,mn:"Тийм. 30 жилийн дараа ихэнх машин цахилгаан болно."},{t:"Yes. After thirty years, most cars electric.",best:false,fix:"Ирээдүйд → IN thirty years... WILL BE electric."}]},
      {ruby:"What will you do personally?", pron:"вот вил ю ду пөрсэнэли?", mn:"Та хувьдаа юу хийх вэ?",
        choices:[{t:"From now on, I'll use less water and recycle more.",best:true,mn:"Одооноос эхлэн бага ус хэрэглэж, илүү дахин боловсруулна."},{t:"Since now, I use less water.",best:false,fix:"FROM NOW ON, I'LL use less water."}]}
    ]}
  },
  {
    id:'a2m7l6', title:"7.6 Байгаль хамгаалах", level:"A2 · М7",
    blurb:"We recycle to save resources — зорилго ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: to / in order to / so that (зорилго)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «ЯАГААД» гэдгийг хэлэх — 3 хэлбэр.<br><br>
        <b>1) TO + үйл үг</b> (хамгийн энгийн, эзэн ижил):
        <div style="margin:12px 0"><span class="tag">We recycle TO SAVE resources. = Нөөцөө хэмнэхийн тулд дахин боловсруулдаг.</span></div>
        <b>2) IN ORDER TO</b> (илүү албан ёсны, ижил утга):
        <div style="margin:12px 0"><span class="tag">We recycle IN ORDER TO save resources.</span></div>
        <b>3) SO THAT + өгүүлбэр</b> (эзэн ӨӨР бол заавал!):
        <div style="margin:12px 0"><span class="tag">We recycle SO THAT our children WILL HAVE a clean world.</span></div>
        <b>⚠️ Хамгийн түгээмэл алдаа — «for + үйл үг»:</b>
        <div style="margin:12px 0"><span class="tag">We recycle FOR SAVE ✗ · for saving ✗ → TO SAVE ✓</span><span class="tag">FOR зөвхөн нэр үгтэй: for the environment ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        protect /prəˈtekt/ — хамгаалах · save /seɪv/ — аврах/хэмнэх · reduce /rɪˈduːs/ — багасгах<br>
        plant /plænt/ — тарих · clean up /kliːn ʌp/ — цэвэрлэх · volunteer /ˌvɒlənˈtɪr/ — сайн дурын<br>
        support /səˈpɔːrt/ — дэмжих · donate /ˈdoʊneɪt/ — хандивлах · organization /ˌɔːrɡənəˈzeɪʃn/ — байгууллага<br>
        future /ˈfjuːtʃər/ — ирээдүй · generation /ˌdʒenəˈreɪʃn/ — үе · responsibility /rɪˌspɒnsəˈbɪləti/ — хариуцлага</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I recycle for save the planet» ✗ — зорилгод <b>TO save</b> ✓. Монгол хэлний «-ийн тулд» гэдгээс «for» ашиглах хандлагатай — гэхдээ англид зорилго = <b>to + үйл үг</b>!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Яагаад? → TO + үйл үг · Эзэн өөр бол → SO THAT + өгүүлбэр · FOR зөвхөн нэр үгтэй».</p>`
    },
    phrases:[
      {en:"We recycle to save natural resources.", pron:"ви рисайкл ту сэйв нэчрэл рисорсиз.", mn:"Байгалийн нөөцөө хэмнэхийн тулд дахин боловсруулдаг."},
      {en:"They planted trees in order to clean the air.", pron:"зэй плэнтид трийз ин ордэр ту клийн зэ эйр.", mn:"Агаараа цэвэршүүлэхийн тулд мод тарьсан."},
      {en:"We must act now so that our children will have a clean world.", pron:"ви маст экт нау соу зэт ауэр чилдрэн вил хэв э клийн вөрлд.", mn:"Хүүхдүүд маань цэвэр дэлхийтэй байхын тулд бид одоо ажиллах ёстой."},
      {en:"I volunteer to help clean up the river.", pron:"ай волэнтиэр ту хэлп клийн ап зэ ривэр.", mn:"Голыг цэвэрлэхэд туслахаар сайн дураараа оролцдог."},
      {en:"It's our responsibility to protect nature.", pron:"итс ауэр риспонсэбилити ту протэкт нэйчэр.", mn:"Байгалиа хамгаалах нь бидний хариуцлага."}
    ],
    exercises:[
      {q:"Зорилго:", parts:["We recycle ", " resources."], opts:["to save","for save"], a:0, fix:"Зорилго → TO save (for ✗)."},
      {q:"Зорилго:", parts:["They planted trees ", " clean the air."], opts:["in order to","for"], a:0, fix:"in order TO clean."},
      {q:"Эзэн өөр:", parts:["We act now ", " our children will be safe."], opts:["so that","to"], a:0, fix:"Эзэн өөр → so that."},
      {q:"for + :", parts:["This is good ", " the environment."], opts:["for","to"], a:0, fix:"Нэр үгтэй → for the environment."}
    ],
    speak:{ scene:'Байгаль хамгаалах', turns:[
      {ruby:"Why do you recycle so carefully?", pron:"вай ду ю рисайкл соу кэрфули?", mn:"Яагаад ийм болгоомжтой дахин боловсруулдаг вэ?",
        choices:[{t:"To save natural resources. It's our responsibility.",best:true,mn:"Байгалийн нөөцөө хэмнэхийн тулд. Энэ бидний хариуцлага."},{t:"For save natural resources.",best:false,fix:"Зорилго → TO save (for ✗)."}]},
      {ruby:"Do you do anything else?", pron:"ду ю ду энисинг элс?", mn:"Өөр юм хийдэг үү?",
        choices:[{t:"Yes. Last year we planted trees in order to clean the air.",best:true,mn:"Тийм. Өнгөрсөн жил агаараа цэвэршүүлэхийн тулд мод тарьсан."},{t:"Yes. Last year we plant trees for clean air.",best:false,fix:"we PLANTED trees IN ORDER TO clean the air."}]},
      {ruby:"Do you think it will help?", pron:"ду ю синк ит вил хэлп?", mn:"Тус болно гэж бодож байна уу?",
        choices:[{t:"I hope so. We must act now so that our children will have a clean world.",best:true,mn:"Найдаж байна. Хүүхдүүд маань цэвэр дэлхийтэй байхын тулд одоо ажиллах ёстой."},{t:"I hope. We must act now for our children have clean world.",best:false,fix:"Эзэн өөр → SO THAT our children WILL HAVE."}]}
    ]}
  },
  {
    id:'a2m7l7', title:"7.7 Харьцуулалт", level:"A2 · М7",
    blurb:"The more we recycle, the better — хос зэрэг ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: the + comparative, the + comparative",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр өөрчлөлт ХАМТ явахыг илэрхийлэх — маш хүчтэй бүтэц!<br><br>
        <b>Бүтэц: THE + харьцуулах зэрэг, THE + харьцуулах зэрэг</b>
        <div style="margin:12px 0"><span class="tag">THE MORE we recycle, THE LESS we waste.</span><span class="tag">THE HOTTER it gets, THE MORE ice melts.</span><span class="tag">THE SOONER we act, THE BETTER.</span></div>
        <b>⚠️ «the» хоёуланд нь заавал!</b>
        <div style="margin:12px 0"><span class="tag">More we recycle, less we waste ✗</span><span class="tag">THE more we recycle, THE less we waste ✓</span></div>
        <b>Богино хэлбэр:</b> The sooner, the better. (Хэдий эрт төдий сайн.)<br>
        <b>Тоо хэмжээнд:</b> the more people, the more rubbish.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        compare /kəmˈper/ — харьцуулах · increase /ɪnˈkriːs/ — нэмэгдэх · decrease /dɪˈkriːs/ — буурах<br>
        amount /əˈmaʊnt/ — хэмжээ · level /ˈlevl/ — түвшин · effect /ɪˈfekt/ — нөлөө<br>
        worse /wɜːrs/ — илүү муу · fewer /ˈfjuːər/ — цөөн · less /les/ — бага<br>
        double /ˈdʌbl/ — хоёр дахин · rapidly /ˈræpɪdli/ — хурдацтай · slowly /ˈsloʊli/ — удаан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «fewer» ⟷ «less» андуурах: <b>FEWER + тоологдох</b> (fewer cars), <b>LESS + тоологдохгүй</b> (less rubbish). «less cars» ✗ → <b>fewer cars</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «THE ... , THE ...» — хоёулаа THE-тэй, таслалаар тусгаарлана.</p>`
    },
    phrases:[
      {en:"The more we recycle, the less we waste.", pron:"зэ мор ви рисайкл, зэ лэс ви вэйст.", mn:"Хэдий их дахин боловсруулна, төдий бага үрнэ."},
      {en:"The hotter it gets, the faster the ice melts.", pron:"зэ хотэр ит гетс, зэ фастэр зэ айс мэлтс.", mn:"Хэдий халуун болно, төдий хурдан мөс хайлна."},
      {en:"The sooner we act, the better.", pron:"зэ сүнэр ви экт, зэ бэтэр.", mn:"Хэдий эрт ажиллана, төдий сайн."},
      {en:"There are fewer cars but more pollution.", pron:"зэр а фьюэр карз бат мор полюшн.", mn:"Машин цөөрсөн ч бохирдол нэмэгдсэн."},
      {en:"The more people move to the city, the more rubbish there is.", pron:"зэ мор пийпл мүв ту зэ сити, зэ мор рабиш зэр из.", mn:"Хэдий олон хүн хот руу нүүнэ, төдий их хог гарна."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["", " more we recycle, the less we waste."], opts:["The","—"], a:0, fix:"Хоёуланд нь THE."},
      {q:"Бүтэц:", parts:["The sooner we act, ", " better."], opts:["the","—"], a:0, fix:"THE better."},
      {q:"fewer/less:", parts:["There are ", " cars now."], opts:["fewer","less"], a:0, fix:"cars тоологдох → fewer."},
      {q:"fewer/less:", parts:["We produce ", " rubbish."], opts:["less","fewer"], a:0, fix:"rubbish тоологдохгүй → less."}
    ],
    speak:{ scene:'Тоо баримт харьцуулах', turns:[
      {ruby:"Does recycling really make a difference?", pron:"даз рисайклинг риали мэйк э дифрэнс?", mn:"Дахин боловсруулалт үнэхээр ялгаа гаргадаг уу?",
        choices:[{t:"Of course! The more we recycle, the less we waste.",best:true,mn:"Мэдээж! Хэдий их дахин боловсруулна, төдий бага үрнэ."},{t:"Of course! More we recycle, less we waste.",best:false,fix:"THE more..., THE less..."}]},
      {ruby:"But the temperature is still rising.", pron:"бат зэ тэмпрэчэр из стил райзинг.", mn:"Гэхдээ температур өссөөр байна.",
        choices:[{t:"Yes — the hotter it gets, the faster the ice melts.",best:true,mn:"Тийм — хэдий халуун болно, төдий хурдан мөс хайлна."},{t:"Yes — hotter it gets, faster ice melts.",best:false,fix:"THE hotter..., THE faster..."}]},
      {ruby:"So what should we do?", pron:"соу вот шүд ви ду?", mn:"Тэгвэл бид яах вэ?",
        choices:[{t:"Act now! The sooner we act, the better. And use fewer cars.",best:true,mn:"Одоо ажилла! Хэдий эрт төдий сайн. Бас цөөн машин хэрэглэ."},{t:"Act now! Sooner we act, better. Use less cars.",best:false,fix:"THE sooner..., THE better. FEWER cars."}]}
    ]}
  },
  {
    id:'a2m7l8', title:"7.8 Ирээдүйн таамаг", level:"A2 · М7",
    blurb:"It's likely to rise — likely / unlikely ⭐",
    rule:{
      h:"Зорилго ба дүрэм: be likely / unlikely to",
      html:`<b>🎯 Зорилго:</b> ⭐ Магадлалыг мэргэжлийн байдлаар илэрхийлэх — мэдээ, тайланд байнга.<br><br>
        <b>be likely TO + үйл үг</b> = магадлалтай:
        <div style="margin:12px 0"><span class="tag">The temperature IS LIKELY TO rise. = Температур өсөх магадлалтай.</span><span class="tag">It IS UNLIKELY TO snow in May. = 5-р сард цас орох магадлал бага.</span></div>
        <b>Магадлалын бүрэн шат:</b>
        <div style="margin:12px 0"><span class="tag">will definitely (95%)</span><span class="tag">is likely to / will probably (75%)</span><span class="tag">may / might (50%)</span><span class="tag">is unlikely to (25%)</span><span class="tag">definitely won't (5%)</span></div>
        <b>Өөр бүтэц:</b> It is likely THAT the temperature will rise. (that + өгүүлбэр)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        likely /ˈlaɪkli/ — магадлалтай · unlikely /ʌnˈlaɪkli/ — магадлал багатай · predict /prɪˈdɪkt/ — таамаглах<br>
        expect /ɪkˈspekt/ — хүлээх · certain /ˈsɜːrtn/ — итгэлтэй · possible /ˈpɒsəbl/ — боломжтой<br>
        impossible /ɪmˈpɒsəbl/ — боломжгүй · scientist /ˈsaɪəntɪst/ — эрдэмтэн · research /rɪˈsɜːrtʃ/ — судалгаа<br>
        report /rɪˈpɔːrt/ — тайлан · data /ˈdeɪtə/ — өгөгдөл · according to /əˈkɔːrdɪŋ tuː/ — -ийн мэдээлснээр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It's likely rise» ✗ → <b>likely TO rise</b> ✓. «It's likely that it rise» ✗ → that-тай бол бүтэн: <b>likely that it WILL rise</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BE LIKELY TO + үйл үг · BE LIKELY THAT + бүтэн өгүүлбэр».</p>`
    },
    phrases:[
      {en:"The temperature is likely to rise by 2050.", pron:"зэ тэмпрэчэр из лайкли ту райз бай твэнти фифти.", mn:"2050 он гэхэд температур өсөх магадлалтай."},
      {en:"Heavy rain is unlikely this month.", pron:"хэви рэйн из анлайкли зис манс.", mn:"Энэ сард их бороо орох магадлал бага."},
      {en:"According to scientists, the ice will melt faster.", pron:"экординг ту сайэнтистс, зэ айс вил мэлт фастэр.", mn:"Эрдэмтдийн мэдээлснээр мөс илүү хурдан хайлна."},
      {en:"It is likely that we will see more floods.", pron:"ит из лайкли зэт ви вил сий мор фладз.", mn:"Бид илүү олон үер үзэх магадлалтай."},
      {en:"The new research predicts serious changes.", pron:"зэ ню рисөрч придиктс сириэс чэйнжиз.", mn:"Шинэ судалгаа ноцтой өөрчлөлтийг таамаглаж байна."}
    ],
    exercises:[
      {q:"to хэрэгтэй:", parts:["It is likely ", " rise."], opts:["to","—"], a:0, fix:"likely TO rise."},
      {q:"that-тай:", parts:["It is likely that it ", " rise."], opts:["will","—"], a:0, fix:"that + бүтэн → it WILL rise."},
      {q:"Магадлал бага:", parts:["Snow is ", " in May."], opts:["unlikely","likely"], a:0, fix:"5-р сард цас → unlikely."},
      {q:"Хэллэг:", parts:["", " scientists, it will get hotter."], opts:["According to","According"], a:0, fix:"According TO scientists."}
    ],
    speak:{ scene:'Эрдэмтний таамаг', turns:[
      {ruby:"What do scientists predict for 2050?", pron:"вот ду сайэнтистс придикт фор твэнти фифти?", mn:"Эрдэмтэд 2050 онд юу таамаглаж байна?",
        choices:[{t:"The temperature is likely to rise by two degrees.",best:true,mn:"Температур 2 хэмээр өсөх магадлалтай."},{t:"The temperature is likely rise two degrees.",best:false,fix:"likely TO rise BY two degrees."}]},
      {ruby:"Will it snow less in winter?", pron:"вил ит сноу лэс ин винтэр?", mn:"Өвөл цас бага орох уу?",
        choices:[{t:"It's likely that we will see less snow, yes.",best:true,mn:"Бид бага цас үзэх магадлалтай, тийм."},{t:"It's likely that we see less snow.",best:false,fix:"that + WILL see."}]},
      {ruby:"Is it possible to stop this?", pron:"из ит посэбл ту стоп зис?", mn:"Үүнийг зогсоох боломжтой юу?",
        choices:[{t:"It's unlikely to stop completely, but we can slow it down.",best:true,mn:"Бүрэн зогсох магадлал бага ч удаашруулж чадна."},{t:"It's unlikely stop completely.",best:false,fix:"unlikely TO stop."}]}
    ]}
  },
  {
    id:'a2m7l9', title:"7.9 Кампанит ажил", level:"A2 · М7",
    blurb:"too late to stop / old enough to help — too/enough + to ⭐",
    rule:{
      h:"Зорилго ба дүрэм: too / enough + to-infinitive",
      html:`<b>🎯 Зорилго:</b> ⭐ Хангалттай эсэхийг үйл үгтэй холбож хэлэх — уриалгад маш хүчтэй.<br><br>
        <b>too + тэмдэг нэр + TO</b> = хэтэрхий ... тул чадахгүй:
        <div style="margin:12px 0"><span class="tag">It's TOO late TO stop it. = Зогсооход хэтэрхий оройтсон.</span><span class="tag">He's too young to vote.</span></div>
        <b>тэмдэг нэр + enough + TO</b> = хангалттай ... тул чадна:
        <div style="margin:12px 0"><span class="tag">You're old ENOUGH TO help. = Туслахад хангалттай насанд хүрсэн.</span></div>
        <b>enough + нэр үг + TO:</b> We have enough time to act. (enough нь нэр үгийн ӨМНӨ!)
        <div style="margin:12px 0"><span class="tag">Тэмдэг нэртэй: old enough (ард) · Нэр үгтэй: enough time (өмнө)</span></div>
        <b>for + хэн:</b> It's too difficult FOR ME to understand.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        campaign /kæmˈpeɪn/ — кампанит ажил · sign /saɪn/ — гарын үсэг зурах · petition /pəˈtɪʃn/ — өргөдөл<br>
        join /dʒɔɪn/ — нэгдэх · spread /spred/ — түгээх · raise /reɪz/ — өсгөх/цуглуулах<br>
        awareness /əˈwernəs/ — мэдлэг ойлголт · action /ˈækʃn/ — үйл ажиллагаа · together /təˈɡeðər/ — хамтдаа<br>
        change /tʃeɪndʒ/ — өөрчлөх · matter /ˈmætər/ — чухал байх · voice /vɔɪs/ — дуу хоолой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «enough old» ✗ → тэмдэг нэрийн АРД: <b>old enough</b> ✓. Гэхдээ нэр үгийн ӨМНӨ: <b>enough time</b> ✓ — байрлал нь эсрэг!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тэмдэг нэр + ENOUGH (ард) · ENOUGH + нэр үг (өмнө)» — old enough / enough time.</p>`
    },
    phrases:[
      {en:"It's not too late to change!", pron:"итс нот ту лэйт ту чэйнж!", mn:"Өөрчлөхөд оройтоогүй байна!"},
      {en:"You're old enough to make a difference.", pron:"юр оулд инаф ту мэйк э дифрэнс.", mn:"Та ялгаа гаргахад хангалттай насанд хүрсэн."},
      {en:"We don't have enough time to wait.", pron:"ви доунт хэв инаф тайм ту вэйт.", mn:"Бидэнд хүлээх хангалттай цаг алга."},
      {en:"Join our campaign to protect the forests!", pron:"жойн ауэр кэмпэйн ту протэкт зэ форэстс!", mn:"Ойг хамгаалах кампанит ажилд нэгдээрэй!"},
      {en:"Every voice matters — sign the petition today!", pron:"эври войс мэтэрз — сайн зэ пэтишн тудэй!", mn:"Дуу хоолой бүр чухал — өнөөдөр гарын үсгээ зур!"}
    ],
    exercises:[
      {q:"too + to:", parts:["It's too late ", " stop it."], opts:["to","for"], a:0, fix:"too late TO stop."},
      {q:"Байрлал:", parts:["You're ", " to help."], opts:["old enough","enough old"], a:0, fix:"Тэмдэг нэрийн ард → old enough."},
      {q:"Байрлал:", parts:["We don't have ", " to wait."], opts:["enough time","time enough"], a:0, fix:"Нэр үгийн өмнө → enough time."},
      {q:"for + хэн:", parts:["It's too hard ", " me to understand."], opts:["for","to"], a:0, fix:"too hard FOR ME to understand."}
    ],
    speak:{ scene:'Кампанит ажилд уриалах', turns:[
      {ruby:"Isn't it too late to save the environment?", pron:"изнт ит ту лэйт ту сэйв зэ инвайрэнмэнт?", mn:"Байгалиа аврахад оройтоогүй гэж үү?",
        choices:[{t:"No! It's not too late to change — but we must act now.",best:true,mn:"Үгүй! Өөрчлөхөд оройтоогүй — гэхдээ одоо ажиллах ёстой."},{t:"No! It's not too late change. We must act.",best:false,fix:"too late TO change."}]},
      {ruby:"But I'm only nineteen. What can I do?", pron:"бат айм оунли найнтийн. вот кэн ай ду?", mn:"Гэхдээ би дөнгөж 19 настай. Юу хийж чадах вэ?",
        choices:[{t:"You're old enough to make a difference! Join our campaign.",best:true,mn:"Та ялгаа гаргахад хангалттай насанд хүрсэн! Кампанит ажилд нэгд."},{t:"You're enough old to make difference!",best:false,fix:"OLD ENOUGH (тэмдэг нэрийн ард)."}]},
      {ruby:"Should we wait for the government to act?", pron:"шүд ви вэйт фор зэ гавэрнмэнт ту экт?", mn:"Засгийн газрыг ажиллахыг хүлээх үү?",
        choices:[{t:"No — we don't have enough time to wait. Every voice matters!",best:true,mn:"Үгүй — хүлээх хангалттай цаг алга. Дуу хоолой бүр чухал!"},{t:"No — we don't have time enough to wait.",best:false,fix:"ENOUGH TIME (нэр үгийн өмнө)."}]}
    ]}
  },
  {
    id:'a2m7l10', title:"7.10 Модулийн төсөл", level:"A2 · М7",
    blurb:"🏆 Байгаль хамгааллын уриалга",
    rule:{
      h:"Давтлага: A2 Модуль 7-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 7-ийн мэдлэгээ нэгтгэж, жинхэнэ уриалга бичих.<br><br>
        <b>Модуль 7-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">most people ⟷ most of the people</span><span class="tag">have been destroyed ⭐</span><span class="tag">stop usING ⟷ stop TO buy ⭐</span><span class="tag">will be used ⭐</span><span class="tag">by 2050 ⟷ in 30 years</span><span class="tag">recycle TO save / so that ⭐</span><span class="tag">the more..., the less... ⭐</span><span class="tag">is likely to rise</span><span class="tag">too late TO stop / old enough TO help</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Байгаль хамгааллын уриалга (15+ өгүүлбэр):</b> Постер/пост бич! Жишээ:<br>
        <i>🌍 OUR PLANET NEEDS YOU! Most people know about climate change, but few of us act. Many forests have been destroyed and some animals have already disappeared. According to scientists, the temperature is likely to rise by two degrees by 2050. In thirty years, some cities will be flooded. But it's not too late to change! Last year I stopped using plastic bags. I also try to recycle everything. The more we recycle, the less we waste. We plant trees so that our children will have clean air. You're old enough to make a difference — but we don't have enough time to wait. Unless we act now, it will be too late. Join our campaign to protect nature!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Уриалгын 4 давхар: <b>Баримт</b> (have been destroyed) → <b>Таамаг</b> (is likely to) → <b>Үйлдэл</b> (I stopped using) → <b>Уриалга</b> (It's not too late to...).</p>`
    },
    phrases:[
      {en:"Many forests have been destroyed.", pron:"мэни форэстс хэв бийн дистройд.", mn:"Олон ой сүйтгэгдсэн."},
      {en:"The temperature is likely to rise by 2050.", pron:"зэ тэмпрэчэр из лайкли ту райз бай твэнти фифти.", mn:"2050 он гэхэд температур өсөх магадлалтай."},
      {en:"Last year I stopped using plastic bags.", pron:"ласт йир ай стопт юзинг плэстик бэгз.", mn:"Өнгөрсөн жил хуванцар уут хэрэглэхээ больсон."},
      {en:"The more we recycle, the less we waste.", pron:"зэ мор ви рисайкл, зэ лэс ви вэйст.", mn:"Хэдий их дахин боловсруулна, төдий бага үрнэ."},
      {en:"It's not too late to change — join us!", pron:"итс нот ту лэйт ту чэйнж — жойн ас!", mn:"Өөрчлөхөд оройтоогүй — бидэнтэй нэгдээрэй!"}
    ],
    exercises:[
      {q:"Давтлага (PP идэвхгүй):", parts:["Forests have ", " destroyed."], opts:["been","—"], a:0, fix:"have BEEN + V3."},
      {q:"Давтлага (stop):", parts:["I stopped ", " plastic. (больсон)"], opts:["using","to use"], a:0, fix:"Болих → stop + -ing."},
      {q:"Давтлага (зорилго):", parts:["We recycle ", " resources."], opts:["to save","for save"], a:0, fix:"Зорилго → TO save."},
      {q:"Давтлага (the...the):", parts:["The more we act, ", " better."], opts:["the","—"], a:0, fix:"Хоёуланд нь THE."}
    ],
    speak:{ scene:'🏆 Төсөл: Байгаль хамгааллын уриалга', turns:[
      {ruby:"Why should people care about the environment?", pron:"вай шүд пийпл кэр эбаут зэ инвайрэнмэнт?", mn:"Хүмүүс яагаад байгальд санаа тавих ёстой вэ?",
        choices:[{t:"Many forests have been destroyed and some animals have disappeared.",best:true,mn:"Олон ой сүйтгэгдэж, зарим амьтан алга болсон."},{t:"Many forests have destroyed and some animals disappeared.",best:false,fix:"have BEEN destroyed... HAVE disappeared."}]},
      {ruby:"What do you personally do?", pron:"вот ду ю пөрсэнэли ду?", mn:"Та хувьдаа юу хийдэг вэ?",
        choices:[{t:"I stopped using plastic bags, and I recycle to save resources.",best:true,mn:"Хуванцар уут хэрэглэхээ болиод, нөөц хэмнэхийн тулд дахин боловсруулдаг."},{t:"I stopped to use plastic bags, and I recycle for save resources.",best:false,fix:"stopped USING... recycle TO save."}]},
      {ruby:"What's your message to young people?", pron:"вотс ёр мэсиж ту янг пийпл?", mn:"Залуучуудад хандсан үг тань юу вэ?",
        choices:[{t:"You're old enough to make a difference. The sooner we act, the better!",best:true,mn:"Та ялгаа гаргахад хангалттай насанд хүрсэн. Хэдий эрт төдий сайн!"},{t:"You're enough old to make difference. Sooner we act, better.",best:false,fix:"OLD ENOUGH... THE sooner, THE better."}]}
    ]}
  },
  {
    id:'a2m8l1', title:"8.1 Үндэсний баяр", level:"A2 · М8",
    blurb:"We would visit our grandparents — would ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: would (өнгөрсний зуршил)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өнгөрсний зуршлыг дурсах хоёр дахь арга — дурсамжийн өнгө аястай!<br><br>
        <b>would + үйл үг</b> = өмнө нь ...дэг байсан (used to-тэй ойролцоо):
        <div style="margin:12px 0"><span class="tag">Every Tsagaan Sar, we WOULD visit our grandparents.</span><span class="tag">My grandmother WOULD make a thousand buuz!</span></div>
        <b>⚠️ used to ⟷ would — гол ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">would = зөвхөн ҮЙЛДЭЛД: We would visit ✓</span><span class="tag">used to = үйлдэл БА байдалд: I used to live there ✓ / I would live there ✗</span></div>
        <b>Байдал (state) илэрхийлэх үйл үг:</b> be, live, have, know, like → <b>would ХЭРЭГЛЭДЭГГҮЙ!</b>
        <div style="margin:12px 0"><span class="tag">I used to have long hair ✓ · I would have long hair ✗</span></div>
        <b>Практикт:</b> эхлээд used to-гоор эхэлж, дараа нь would-оор үргэлжлүүлдэг.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        celebrate /ˈselɪbreɪt/ — тэмдэглэх · tradition /trəˈdɪʃn/ — уламжлал · custom /ˈkʌstəm/ — ёс заншил<br>
        ceremony /ˈserəmoʊni/ — ёслол · greet /ɡriːt/ — мэндлэх · elder /ˈeldər/ — ахмад<br>
        gather /ˈɡæðər/ — цуглах · prepare /prɪˈper/ — бэлдэх · decorate /ˈdekəreɪt/ — чимэглэх<br>
        national /ˈnæʃnəl/ — үндэсний · ancient /ˈeɪnʃənt/ — эртний · memory /ˈmeməri/ — дурсамж</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I would be a shy child» ✗ — байдал → <b>I USED TO BE a shy child</b> ✓. «We would live in the countryside» ✗ → <b>used to live</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WOULD = зөвхөн ҮЙЛДЭЛ (visit, make, play) · USED TO = бүгд (be, live, have ч болно)».</p>`
    },
    phrases:[
      {en:"Every Tsagaan Sar, we would visit our grandparents.", pron:"эври Цагаан Сар, ви вүд визит ауэр грэндпэрэнтс.", mn:"Цагаан сар бүр өвөө эмээдээ очдог байсан."},
      {en:"My grandmother would make a thousand buuz!", pron:"май грэндмазэр вүд мэйк э саузэнд бууз!", mn:"Эмээ маань мянган бууз хийдэг байсан!"},
      {en:"We used to live in the countryside then.", pron:"ви юзд ту лив ин зэ кантрисайд зэн.", mn:"Тэр үед бид хөдөө амьдардаг байсан."},
      {en:"The whole family would gather in one ger.", pron:"зэ хоул фэмили вүд гэзэр ин ван гэр.", mn:"Бүх гэр бүл нэг гэрт цуглардаг байсан."},
      {en:"We would greet the elders first — it's an ancient custom.", pron:"ви вүд грийт зэ элдэрз фөрст — итс эн эйншэнт кастэм.", mn:"Эхлээд ахмадуудтай мэндчилдэг байсан — эртний ёс заншил."}
    ],
    exercises:[
      {q:"would + үйлдэл:", parts:["Every year we ", " our grandparents."], opts:["would visit","would be"], a:0, fix:"Үйлдэл → would visit."},
      {q:"Байдал:", parts:["I ", " a shy child."], opts:["used to be","would be"], a:0, fix:"Байдал → used to be (would ✗)."},
      {q:"Байдал:", parts:["We ", " in the countryside."], opts:["used to live","would live"], a:0, fix:"live = байдал → used to live."},
      {q:"would + үйлдэл:", parts:["My grandmother ", " buuz every winter."], opts:["would make","would have"], a:0, fix:"Үйлдэл → would make."}
    ],
    speak:{ scene:'Цагаан сарын дурсамж', turns:[
      {ruby:"What was Tsagaan Sar like when you were a child?", pron:"вот воз Цагаан Сар лайк вэн ю вөр э чайлд?", mn:"Бага байхад Цагаан сар ямар байсан бэ?",
        choices:[{t:"We used to live in the countryside, and every year we would visit our grandparents.",best:true,mn:"Бид хөдөө амьдардаг байсан, жил бүр өвөө эмээдээ очдог байлаа."},{t:"We would live in the countryside and would visit grandparents.",best:false,fix:"live = байдал → USED TO live."}]},
      {ruby:"That sounds lovely! What did your grandmother do?", pron:"зэт саундз лавли! вот дид ёр грэндмазэр ду?", mn:"Сайхан юм! Эмээ тань юу хийдэг байсан бэ?",
        choices:[{t:"She would make a thousand buuz! The whole family would gather.",best:true,mn:"Тэр мянган бууз хийдэг байсан! Бүх гэр бүл цуглардаг байлаа."},{t:"She would be making buuz. Family would be there.",best:false,fix:"She WOULD MAKE buuz. The family WOULD GATHER (would be ✗)."}]},
      {ruby:"Do you still celebrate the same way?", pron:"ду ю стил сэлэбрэйт зэ сэйм вэй?", mn:"Одоо ч ижилхэн тэмдэглэдэг үү?",
        choices:[{t:"Not really. But we still greet the elders first — it's an ancient custom.",best:true,mn:"Тийм ч биш. Гэхдээ ахмадуудтай эхлээд мэндчилдэг — эртний ёс заншил."},{t:"Not really. But we still would greet elders.",best:false,fix:"Одоо → we STILL GREET (would ✗ — өнгөрсөнд л)."}]}
    ]}
  },
  {
    id:'a2m8l2', title:"8.2 Ёс заншил", level:"A2 · М8",
    blurb:"You're supposed to bow — be supposed to ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: be supposed to (ёс заншлын дүрэм)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «...байх ёстой» — нийгмийн дүрэм, ёс заншил тайлбарлах хамгийн зөв хэлбэр.<br><br>
        <b>be supposed to + үйл үг</b> = ёсоор бол ...ах ёстой:
        <div style="margin:12px 0"><span class="tag">You ARE SUPPOSED TO greet the elders first.</span><span class="tag">You're NOT supposed to point at people.</span></div>
        <b>must ⟷ be supposed to — ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">must = ХУУЛЬ (заавал): You must have a visa.</span><span class="tag">be supposed to = ЁС ЗАНШИЛ (хүлээгддэг): You're supposed to take off your shoes.</span></div>
        <b>Өнгөрсөнд:</b> was/were supposed to = ...ах ёстой байсан (гэвч болоогүй):
        <div style="margin:12px 0"><span class="tag">I was supposed to bring a gift, but I forgot!</span></div>
        <b>be expected to</b> = ижил утга, илүү албан ёсны.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        custom /ˈkʌstəm/ — ёс заншил · polite /pəˈlaɪt/ — эелдэг · rude /ruːd/ — бүдүүлэг<br>
        bow /baʊ/ — бөхийх · respect /rɪˈspekt/ — хүндлэх · offer /ˈɒfər/ — санал болгох<br>
        accept /əkˈsept/ — хүлээн авах · refuse /rɪˈfjuːz/ — татгалзах · gift /ɡɪft/ — бэлэг<br>
        behave /bɪˈheɪv/ — биеэ авч явах · manners /ˈmænərz/ — зан суртахуун · appropriate /əˈproʊpriət/ — тохиромжтой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You are supposed take off» ✗ → <b>supposed TO take off</b> ✓. Мөн «You don't suppose to» ✗ → be-тэй: <b>You're NOT supposed to</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUST = хууль · SUPPOSED TO = ёс заншил · SHOULD = зөвлөгөө» — хүчний 3 шат.</p>`
    },
    phrases:[
      {en:"You're supposed to greet the elders first.", pron:"юр сэпоузд ту грийт зэ элдэрз фөрст.", mn:"Эхлээд ахмадуудтай мэндчилэх ёстой."},
      {en:"You're not supposed to point at people.", pron:"юр нот сэпоузд ту пойнт эт пийпл.", mn:"Хүн рүү заах ёсгүй."},
      {en:"In Mongolia, you're supposed to accept food with your right hand.", pron:"ин Монголиа, юр сэпоузд ту эксэпт фүд виз ёр райт хэнд.", mn:"Монголд хоолыг баруун гараараа авах ёстой."},
      {en:"I was supposed to bring a gift, but I forgot!", pron:"ай воз сэпоузд ту бринг э гифт, бат ай форгот!", mn:"Бэлэг авчрах ёстой байсан ч мартчихсан!"},
      {en:"It's rude to refuse food from your host.", pron:"итс рүд ту рифьюз фүд фром ёр хоуст.", mn:"Гэрийн эзний хоолноос татгалзах нь бүдүүлэг."}
    ],
    exercises:[
      {q:"to хэрэгтэй:", parts:["You're supposed ", " bow."], opts:["to","—"], a:0, fix:"supposed TO bow."},
      {q:"Үгүйсгэл:", parts:["You ", " supposed to point."], opts:["aren't","don't"], a:0, fix:"be-тэй → aren't supposed to."},
      {q:"Өнгөрсөн:", parts:["I ", " supposed to bring a gift."], opts:["was","am"], a:0, fix:"Өнгөрсөн → was supposed to."},
      {q:"must/supposed:", parts:["You ", " have a visa. (хууль)"], opts:["must","are supposed to"], a:0, fix:"Хууль → must."}
    ],
    speak:{ scene:'Ёс заншил тайлбарлах', turns:[
      {ruby:"I'm visiting a Mongolian family. What should I know?", pron:"айм визитинг э Монголиан фэмили. вот шүд ай ноу?", mn:"Монгол айлд очиж байна. Юу мэдэх ёстой вэ?",
        choices:[{t:"You're supposed to greet the elders first.",best:true,mn:"Эхлээд ахмадуудтай мэндчилэх ёстой."},{t:"You are supposed greet elders first.",best:false,fix:"supposed TO greet."}]},
      {ruby:"Anything I shouldn't do?", pron:"энисинг ай шүднт ду?", mn:"Хийж болохгүй юм байна уу?",
        choices:[{t:"You're not supposed to point at people. It's rude.",best:true,mn:"Хүн рүү заах ёсгүй. Бүдүүлэг."},{t:"You don't suppose to point at people.",best:false,fix:"You'RE NOT supposed to point."}]},
      {ruby:"Should I take a gift?", pron:"шүд ай тэйк э гифт?", mn:"Бэлэг авах уу?",
        choices:[{t:"Yes! Last time I was supposed to bring one, but I forgot. They were so kind anyway!",best:true,mn:"Тийм! Сүүлд би авчрах ёстой байсан ч мартсан. Тэд бүр эелдэг байсан!"},{t:"Yes! Last time I supposed to bring one.",best:false,fix:"I WAS supposed to bring one."}]}
    ]}
  },
  {
    id:'a2m8l3', title:"8.3 Хоолны соёл", level:"A2 · М8",
    blurb:"not only meat but also dairy — хос холбоос ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: not only ... but also / both ... and",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр зүйлийг хүчтэй холбож, өгүүлбэрээ баяжуулах.<br><br>
        <b>both ... AND</b> = хоёул (энгийн):
        <div style="margin:12px 0"><span class="tag">Mongolians eat BOTH meat AND dairy.</span></div>
        <b>not only ... BUT ALSO</b> = зөвхөн ... төдийгүй (илүү хүчтэй, гайхшралтай):
        <div style="margin:12px 0"><span class="tag">We eat NOT ONLY meat BUT ALSO a lot of dairy.</span><span class="tag">Buuz is NOT ONLY delicious BUT ALSO easy to make.</span></div>
        <b>⚠️ Тэнцвэр — хоёр талд ИЖИЛ төрлийн үг:</b>
        <div style="margin:12px 0"><span class="tag">not only MEAT but also DAIRY ✓ (нэр үг + нэр үг)</span><span class="tag">not only EAT but also DRINK ✓ (үйл үг + үйл үг)</span><span class="tag">not only meat but also we drink ✗ (тэнцвэргүй)</span></div>
        <b>neither ... NOR</b> = аль нь ч биш (М3-ыг санаарай).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        dairy /ˈderi/ — сүүн бүтээгдэхүүн · dish /dɪʃ/ — таваг хоол · flavour /ˈfleɪvər/ — амт<br>
        recipe /ˈresəpi/ — жор · ingredient /ɪnˈɡriːdiənt/ — орц · traditional /trəˈdɪʃənl/ — уламжлалт<br>
        serve /sɜːrv/ — тавьж өгөх · guest /ɡest/ — зочин · share /ʃer/ — хуваалцах<br>
        boiled /bɔɪld/ — чанасан · fried /fraɪd/ — шарсан · dried /draɪd/ — хатаасан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «not only ... but» ✗ — <b>also</b> мартах: <b>not only ... but ALSO</b> ✓. Мөн «both ... or» ✗ → <b>both ... AND</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BOTH...AND · NOT ONLY...BUT ALSO · NEITHER...NOR» — гурван хос, тус бүр өөрийн хамтрагчтай.</p>`
    },
    phrases:[
      {en:"Mongolians eat both meat and dairy.", pron:"Монголианз ийт боус мийт энд дэри.", mn:"Монголчууд мах, цагаан идээ хоёуланг иддэг."},
      {en:"We eat not only meat but also a lot of dairy products.", pron:"ви ийт нот оунли мийт бат олсоу э лот ов дэри продактс.", mn:"Бид зөвхөн мах төдийгүй их цагаан идээ иддэг."},
      {en:"Buuz is not only delicious but also easy to make.", pron:"бууз из нот оунли дэлишэс бат олсоу ийзи ту мэйк.", mn:"Бууз зөвхөн амттай төдийгүй хийхэд амархан."},
      {en:"Guests are always served tea first.", pron:"гэстс а олвэйз сөрвд тий фөрст.", mn:"Зочдод үргэлж эхлээд цай тавьж өгдөг."},
      {en:"Traditional dishes are usually boiled, not fried.", pron:"трэдишнл дишиз а южуэли бойлд, нот фрайд.", mn:"Уламжлалт хоолыг ихэвчлэн чанадаг, шардаггүй."}
    ],
    exercises:[
      {q:"Хос холбоос:", parts:["We eat both meat ", " dairy."], opts:["and","or"], a:0, fix:"both ... AND."},
      {q:"Хос холбоос:", parts:["Not only meat ", " also dairy."], opts:["but","and"], a:0, fix:"not only ... BUT also."},
      {q:"also мартав уу:", parts:["Not only delicious but ", " easy."], opts:["also","—"], a:0, fix:"but ALSO easy."},
      {q:"Тэнцвэр:", parts:["Not only meat but also ", "."], opts:["dairy","we drink milk"], a:0, fix:"Нэр үг + нэр үг → dairy."}
    ],
    speak:{ scene:'Монгол хоол тайлбарлах', turns:[
      {ruby:"What do Mongolians usually eat?", pron:"вот ду Монголианз южуэли ийт?", mn:"Монголчууд ихэвчлэн юу иддэг вэ?",
        choices:[{t:"We eat not only meat but also a lot of dairy products.",best:true,mn:"Бид зөвхөн мах төдийгүй их цагаан идээ иддэг."},{t:"We eat not only meat but a lot of dairy.",best:false,fix:"but ALSO a lot of dairy."}]},
      {ruby:"I've heard about buuz. What is it like?", pron:"айв хөрд эбаут бууз. вот из ит лайк?", mn:"Бууз гэж сонссон. Ямар юм бэ?",
        choices:[{t:"It's not only delicious but also easy to make!",best:true,mn:"Зөвхөн амттай төдийгүй хийхэд амархан!"},{t:"It's not only delicious and also easy.",best:false,fix:"not only ... BUT also."}]},
      {ruby:"How are guests treated?", pron:"хау а гэстс трийтид?", mn:"Зочдыг яаж хүлээж авдаг вэ?",
        choices:[{t:"Guests are always served both tea and food first.",best:true,mn:"Зочдод үргэлж эхлээд цай, хоол хоёуланг тавьж өгдөг."},{t:"Guests are always served both tea or food.",best:false,fix:"both ... AND."}]}
    ]}
  },
  {
    id:'a2m8l4', title:"8.4 Хөгжим", level:"A2 · М8",
    blurb:"the best concert I've ever been to — ever + PP ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: superlative + ever + Present Perfect",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Миний үзсэн хамгийн сайхан...» — сэтгэгдэл хуваалцах хамгийн хүчтэй бүтэц.<br><br>
        <b>Бүтэц: the + давуу зэрэг + нэр үг + (that) I've EVER + V3</b>
        <div style="margin:12px 0"><span class="tag">It's THE BEST concert I've EVER BEEN to.</span><span class="tag">She's THE MOST talented singer I've EVER HEARD.</span><span class="tag">That was THE WORST song I've EVER HEARD!</span></div>
        <b>⚠️ Present Perfect заавал</b> — «I ever saw» ✗ (тодорхой цаггүй тул PP!)<br>
        <b>«that» орхиж болно:</b> the best film (that) I've ever seen.<br>
        <b>Хоёр дахь хэлбэр:</b> I've never seen a better film. = ижил утга!
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        concert /ˈkɒnsərt/ — тоглолт · band /bænd/ — хамтлаг · performance /pərˈfɔːrməns/ — тоглолт<br>
        singer /ˈsɪŋər/ — дуучин · lyrics /ˈlɪrɪks/ — үг · melody /ˈmelədi/ — аялгуу<br>
        talented /ˈtæləntɪd/ — авьяастай · live /laɪv/ — шууд · audience /ˈɔːdiəns/ — үзэгчид<br>
        traditional /trəˈdɪʃənl/ — уламжлалт · throat singing /θroʊt ˈsɪŋɪŋ/ — хөөмий · instrument /ˈɪnstrəmənt/ — хөгжмийн зэмсэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the best concert I ever went» ✗ → PP хэрэгтэй: <b>I've ever BEEN to</b> ✓. Мөн «been to» дахь <b>to</b> мартах: the best concert I've ever been <b>TO</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «the BEST ... I've EVER + V3» — давуу зэрэг + ever + Present Perfect гурвал.</p>`
    },
    phrases:[
      {en:"It's the best concert I've ever been to!", pron:"итс зэ бэст консэрт айв эвэр бийн ту!", mn:"Миний үзсэн хамгийн сайхан тоглолт!"},
      {en:"She's the most talented singer I've ever heard.", pron:"шиз зэ моуст тэлэнтид сингэр айв эвэр хөрд.", mn:"Миний сонссон хамгийн авьяастай дуучин."},
      {en:"Have you ever heard Mongolian throat singing?", pron:"хэв ю эвэр хөрд Монголиан сроут сингинг?", mn:"Монгол хөөмий сонсож байсан уу?"},
      {en:"That was the worst performance I've ever seen!", pron:"зэт воз зэ вөрст пөрформэнс айв эвэр сийн!", mn:"Миний үзсэн хамгийн муу тоглолт байлаа!"},
      {en:"I've never seen such an amazing audience.", pron:"айв нэвэр сийн сач эн эмэйзинг одиэнс.", mn:"Ийм гайхалтай үзэгчид хэзээ ч үзээгүй."}
    ],
    exercises:[
      {q:"Цаг:", parts:["It's the best concert I've ever ", " to."], opts:["been","went"], a:0, fix:"PP → I've ever BEEN to."},
      {q:"to мартав уу:", parts:["The best concert I've ever been ", "."], opts:["to","—"], a:0, fix:"been TO a concert."},
      {q:"PP хэрэгтэй:", parts:["The worst film I ", " seen."], opts:["have ever","ever"], a:0, fix:"I HAVE EVER seen."},
      {q:"Ижил утга:", parts:["I've ", " seen a better film."], opts:["never","ever"], a:0, fix:"Батлахад → I've NEVER seen a better film."}
    ],
    speak:{ scene:'Тоглолтын тухай', turns:[
      {ruby:"How was the concert last night?", pron:"хау воз зэ консэрт ласт найт?", mn:"Өнгөрсөн шөнийн тоглолт ямар байсан бэ?",
        choices:[{t:"Amazing! It's the best concert I've ever been to.",best:true,mn:"Гайхалтай! Миний үзсэн хамгийн сайхан тоглолт."},{t:"Amazing! It's the best concert I ever went.",best:false,fix:"I'VE EVER BEEN TO."}]},
      {ruby:"Who was singing?", pron:"хү воз сингинг?", mn:"Хэн дуулсан бэ?",
        choices:[{t:"A traditional band. She's the most talented singer I've ever heard!",best:true,mn:"Уламжлалт хамтлаг. Миний сонссон хамгийн авьяастай дуучин!"},{t:"A traditional band. She's most talented singer I ever heard.",best:false,fix:"THE most talented... I'VE ever heard."}]},
      {ruby:"Was there throat singing?", pron:"воз зэр сроут сингинг?", mn:"Хөөмий байсан уу?",
        choices:[{t:"Yes! I've never heard anything like it.",best:true,mn:"Тийм! Ийм юм хэзээ ч сонсоогүй."},{t:"Yes! I never heard anything like it.",best:false,fix:"I'VE never heard (PP)."}]}
    ]}
  },
  {
    id:'a2m8l5', title:"8.5 Кино", level:"A2 · М8",
    blurb:"The film, which is Mongolian, won... — нэмэлт тодотгол ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: non-defining relative clauses (, which/who)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Нэмэлт мэдээлэл ТАСЛАЛТАЙ оруулах — М3-ын тодотголын үргэлжлэл.<br><br>
        <b>2 төрөл — таслал бүх юмыг өөрчилнө!</b>
        <div style="margin:12px 0"><span class="tag">ТАСЛАЛГҮЙ (М3, чухал мэдээлэл): The film THAT I saw was great. (аль кино гэдгийг заана)</span><span class="tag">ТАСЛАЛТАЙ (нэмэлт мэдээлэл): The film, WHICH is Mongolian, won a prize. (аль нь болох нь тодорхой, зүгээр нэмэлт)</span></div>
        <b>⚠️ Таслалтай бол «that» ХЭРЭГЛЭДЭГГҮЙ!</b>
        <div style="margin:12px 0"><span class="tag">The film, which is Mongolian, ... ✓</span><span class="tag">The film, that is Mongolian, ... ✗</span></div>
        <b>Хүнд:</b> My friend, WHO lives in Japan, sent me this film.<br>
        <b>Хасаж болно:</b> таслалтай хэсгийг хасахад өгүүлбэр утгаа хадгална.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        director /dəˈrektər/ — найруулагч · plot /plɒt/ — үйл явдал · scene /siːn/ — үзэгдэл<br>
        character /ˈkærəktər/ — дүр · based on /beɪst ɒn/ — үндэслэсэн · set in /set ɪn/ — болж буй газар<br>
        prize /praɪz/ — шагнал · subtitle /ˈsʌbtaɪtl/ — хадмал · ending /ˈendɪŋ/ — төгсгөл<br>
        realistic /ˌriːəˈlɪstɪk/ — бодитой · touching /ˈtʌtʃɪŋ/ — сэтгэл хөдөлгөм · worth /wɜːrθ/ — үнэ цэнэтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «My father, that is a teacher, ...» ✗ → таслалтай бол <b>WHO</b> ✓. Мөн таслал мартах утгыг өөрчилнө: «My sister who lives in Japan» = олон эгчтэй, Японых нь ⟷ «My sister, who lives in Japan,» = ганц эгч.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Таслалтай → WHICH/WHO (that ✗) · Таслалгүй → that/which/who бүгд болно».</p>`
    },
    phrases:[
      {en:"The film, which is Mongolian, won a big prize.", pron:"зэ филм, вич из Монголиан, вон э биг прайз.", mn:"Монгол кино том шагнал хүртсэн."},
      {en:"My friend, who lives in Japan, recommended it.", pron:"май фрэнд, хү ливз ин Жэпэн, рэкэмэндид ит.", mn:"Японд амьдардаг найз маань үүнийг зөвлөсөн."},
      {en:"It's based on a true story.", pron:"итс бэйст он э трү стори.", mn:"Бодит түүхэн дээр үндэслэсэн."},
      {en:"The film is set in the Gobi desert.", pron:"зэ филм из сэт ин зэ Гоби дэзэрт.", mn:"Кино Говь цөлд өрнөнө."},
      {en:"The ending, which I didn't expect, was very touching.", pron:"зэ эндинг, вич ай диднт икспэкт, воз вэри тачинг.", mn:"Миний хүлээгээгүй төгсгөл нь их сэтгэл хөдөлгөм байсан."}
    ],
    exercises:[
      {q:"Таслалтай:", parts:["The film, ", " is Mongolian, won a prize."], opts:["which","that"], a:0, fix:"Таслалтай → which (that ✗)."},
      {q:"Хүн:", parts:["My friend, ", " lives in Japan, sent it."], opts:["who","which"], a:0, fix:"Хүн → who."},
      {q:"Таслалгүй:", parts:["The film ", " I saw was great."], opts:["that","which,"], a:0, fix:"Таслалгүй → that болно."},
      {q:"Хэллэг:", parts:["It's based ", " a true story."], opts:["on","in"], a:0, fix:"based ON a story."}
    ],
    speak:{ scene:'Кино зөвлөх', turns:[
      {ruby:"Can you recommend a good film?", pron:"кэн ю рэкэмэнд э гүд филм?", mn:"Сайхан кино зөвлөж чадах уу?",
        choices:[{t:"Yes! The film, which is Mongolian, won a big prize last year.",best:true,mn:"Тийм! Тэр монгол кино өнгөрсөн жил том шагнал хүртсэн."},{t:"Yes! The film, that is Mongolian, won a prize.",best:false,fix:"Таслалтай → WHICH (that ✗)."}]},
      {ruby:"Who told you about it?", pron:"хү тоулд ю эбаут ит?", mn:"Хэн энэ тухай хэлсэн бэ?",
        choices:[{t:"My friend, who lives in Japan, recommended it.",best:true,mn:"Японд амьдардаг найз маань зөвлөсөн."},{t:"My friend, which lives in Japan, recommended.",best:false,fix:"Хүн → WHO lives."}]},
      {ruby:"What's it about?", pron:"вотс ит эбаут?", mn:"Юуны тухай юм бэ?",
        choices:[{t:"It's based on a true story and set in the Gobi. The ending is touching.",best:true,mn:"Бодит түүхэн дээр үндэслэсэн, Говьд өрнөнө. Төгсгөл нь сэтгэл хөдөлгөм."},{t:"It's based in true story and set on the Gobi.",best:false,fix:"based ON a story, set IN the Gobi."}]}
    ]}
  },
  {
    id:'a2m8l6', title:"8.6 Ном", level:"A2 · М8",
    blurb:"a writer whose books are famous — whose ⭐",
    rule:{
      h:"Зорилго ба дүрэм: whose (эзэмшлийн тодотгол)",
      html:`<b>🎯 Зорилго:</b> ⭐ «Түүний ...» гэдгийг нэг өгүүлбэрт нэгтгэх.<br><br>
        <b>whose</b> = «-ийн» (эзэмшил заасан тодотгол):
        <div style="margin:12px 0"><span class="tag">I met a writer. HIS books are famous.</span><span class="tag">→ I met a writer WHOSE books are famous.</span></div>
        <b>Хүн, юм хоёуланд нь болно:</b>
        <div style="margin:12px 0"><span class="tag">a writer whose books... (хүн)</span><span class="tag">a book whose ending is sad (юм — ярианд болно)</span></div>
        <b>⚠️ whose ⟷ who's — дуудлага ижил, утга ТЭС ӨӨР!</b>
        <div style="margin:12px 0"><span class="tag">whose = хэний (эзэмшил): the writer WHOSE book...</span><span class="tag">who's = who is / who has: the writer WHO'S famous</span></div>
        <b>Тодотголын бүрэн жагсаалт:</b> who (хүн) · which (юм) · that (бүгд) · where (газар) · whose (эзэмшил).
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        novel /ˈnɒvl/ — роман · author /ˈɔːθər/ — зохиолч · chapter /ˈtʃæptər/ — бүлэг<br>
        page /peɪdʒ/ — хуудас · cover /ˈkʌvər/ — хавтас · publish /ˈpʌblɪʃ/ — хэвлүүлэх<br>
        translate /trænsˈleɪt/ — орчуулах · fiction /ˈfɪkʃn/ — уран зохиол · poetry /ˈpoʊətri/ — яруу найраг<br>
        borrow /ˈbɒroʊ/ — зээлж авах · library /ˈlaɪbrəri/ — номын сан · bestseller /ˌbestˈselər/ — шилдэг борлуулалттай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «a writer who his books are famous» ✗ → <b>whose books</b> ✓ (нэг үг!). Мөн «whose» дараа <b>the</b> ✗: «whose the books» ✗ → <b>whose books</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HIS/HER/THEIR + нэр үг → WHOSE + нэр үг» — эзэмшлийн үгийг whose болгож солино.</p>`
    },
    phrases:[
      {en:"He's a writer whose books are famous all over the world.", pron:"хиз э райтэр хүз букс а фэймэс ол оувэр зэ вөрлд.", mn:"Тэр бол номнууд нь дэлхий даяар алдартай зохиолч."},
      {en:"I love novels whose endings are surprising.", pron:"ай лав новлз хүз эндингз а сэрпрайзинг.", mn:"Төгсгөл нь гэнэтийн байдаг романд дуртай."},
      {en:"This book was translated into ten languages.", pron:"зис бүк воз трэнслэйтид инту тэн лэнгвижиз.", mn:"Энэ ном 10 хэл рүү орчуулагдсан."},
      {en:"I borrowed it from the library last week.", pron:"ай бороуд ит фром зэ лайбрэри ласт вийк.", mn:"Өнгөрсөн долоо хоногт номын сангаас зээлж авсан."},
      {en:"It's the most touching novel I've ever read.", pron:"итс зэ моуст тачинг новл айв эвэр рэд.", mn:"Миний уншсан хамгийн сэтгэл хөдөлгөм роман."}
    ],
    exercises:[
      {q:"Эзэмшил:", parts:["A writer ", " books are famous."], opts:["whose","who's"], a:0, fix:"Эзэмшил → whose books."},
      {q:"whose/who's:", parts:["The writer ", " famous is here."], opts:["who's","whose"], a:0, fix:"who is → who's famous."},
      {q:"the хэрэгтэй юу:", parts:["a writer whose ", " are famous"], opts:["books","the books"], a:0, fix:"whose + нэр үг (the ✗)."},
      {q:"Тодотгол:", parts:["The library ", " I borrow books is old."], opts:["where","which"], a:0, fix:"Газар → where."}
    ],
    speak:{ scene:'Номын тухай', turns:[
      {ruby:"What are you reading?", pron:"вот а ю ридинг?", mn:"Юу уншиж байна?",
        choices:[{t:"A novel by a writer whose books are famous in Japan.",best:true,mn:"Номнууд нь Японд алдартай зохиолчийн роман."},{t:"A novel by a writer who his books are famous.",best:false,fix:"WHOSE books (нэг үг!)."}]},
      {ruby:"Is it in English?", pron:"из ит ин Инглиш?", mn:"Англиар юу?",
        choices:[{t:"Yes, it was translated into ten languages.",best:true,mn:"Тийм, 10 хэл рүү орчуулагдсан."},{t:"Yes, it translated in ten languages.",best:false,fix:"it WAS translated INTO ten languages."}]},
      {ruby:"Where did you get it?", pron:"вэр дид ю гет ит?", mn:"Хаанаас авсан бэ?",
        choices:[{t:"From the library where I always borrow books. It's the most touching novel I've ever read!",best:true,mn:"Байнга ном зээлдэг номын сангаасаа. Миний уншсан хамгийн сэтгэл хөдөлгөм роман!"},{t:"From the library which I always borrow books. Most touching novel I ever read.",best:false,fix:"the library WHERE... THE most touching novel I'VE ever read."}]}
    ]}
  },
  {
    id:'a2m8l7', title:"8.7 Соёлын ялгаа", level:"A2 · М8",
    blurb:"Unlike Japan, Mongolia... — эсрэгцүүлэх ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: unlike / whereas / while (эсрэгцүүлэл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр соёлыг эсрэгцүүлэн харьцуулах — эссэ, илтгэлд зайлшгүй.<br><br>
        <b>3 хэрэгсэл, 3 өөр бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">UNLIKE + НЭР ҮГ: Unlike Japan, Mongolia has a lot of space.</span><span class="tag">WHEREAS / WHILE + ӨГҮҮЛБЭР: In Japan people bow, WHEREAS in Mongolia we shake hands.</span></div>
        <b>⚠️ unlike-ийн ард өгүүлбэр ✗:</b>
        <div style="margin:12px 0"><span class="tag">Unlike Japan ✓ (нэр үг)</span><span class="tag">Unlike people bow ✗ → Whereas people bow ✓</span></div>
        <b>while-ийн 2 утга:</b>
        <div style="margin:12px 0"><span class="tag">while = байхад (цаг, М1): While I was cooking...</span><span class="tag">while = харин (эсрэгцүүлэл): While Japan is small, Mongolia is huge.</span></div>
        <b>Бусад:</b> however (М1) · on the other hand · in contrast.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        culture /ˈkʌltʃər/ — соёл · difference /ˈdɪfrəns/ — ялгаа · similar /ˈsɪmələr/ — төстэй<br>
        unlike /ʌnˈlaɪk/ — -аас ялгаатай · whereas /werˈæz/ — харин · attitude /ˈætɪtuːd/ — хандлага<br>
        value /ˈvæljuː/ — үнэт зүйл · society /səˈsaɪəti/ — нийгэм · foreign /ˈfɒrən/ — гадаад<br>
        abroad /əˈbrɔːd/ — гадаадад · adapt /əˈdæpt/ — дасан зохицох · shock /ʃɒk/ — цочрол</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Unlike in Japan people bow» ✗ → unlike + нэр үг: <b>Unlike Japan, ...</b> ✓ эсвэл <b>Whereas in Japan people bow, ...</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «UNLIKE + нэр үг · WHEREAS/WHILE + бүтэн өгүүлбэр» — бүтэц нь өөр!</p>`
    },
    phrases:[
      {en:"Unlike Japan, Mongolia has a lot of open space.", pron:"анлайк Жэпэн, Монголиа хэз э лот ов оупэн спэйс.", mn:"Японоос ялгаатай нь Монгол их уудам."},
      {en:"In Japan people bow, whereas in Mongolia we shake hands.", pron:"ин Жэпэн пийпл бау, вэрэз ин Монголиа ви шэйк хэндз.", mn:"Японд хүмүүс бөхийдөг бол Монголд бид гар барьдаг."},
      {en:"While our food is similar, our customs are different.", pron:"вайл ауэр фүд из симэлэр, ауэр кастэмз а дифрэнт.", mn:"Хоол маань төстэй ч ёс заншил маань өөр."},
      {en:"When I first went abroad, I had culture shock.", pron:"вэн ай фөрст вэнт эброд, ай хэд калчэр шок.", mn:"Анх гадаад явахад соёлын цочрол авсан."},
      {en:"It took me a year to adapt to the new culture.", pron:"ит түк ми э йир ту эдэпт ту зэ ню калчэр.", mn:"Шинэ соёлд дасан зохиход нэг жил болсон."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["", " Japan, Mongolia is huge."], opts:["Unlike","Whereas"], a:0, fix:"Нэр үгтэй → Unlike Japan."},
      {q:"Бүтэц:", parts:["In Japan people bow, ", " we shake hands."], opts:["whereas","unlike"], a:0, fix:"Өгүүлбэртэй → whereas."},
      {q:"Эсрэгцүүлэл:", parts:["", " our food is similar, our customs differ."], opts:["While","Unlike"], a:0, fix:"Өгүүлбэртэй → While."},
      {q:"Угтвар:", parts:["It took a year to adapt ", " the culture."], opts:["to","with"], a:0, fix:"adapt TO."}
    ],
    speak:{ scene:'Соёлын ялгаа', turns:[
      {ruby:"How is Mongolia different from Japan?", pron:"хау из Монголиа дифрэнт фром Жэпэн?", mn:"Монгол Японоос юугаараа ялгаатай вэ?",
        choices:[{t:"Unlike Japan, Mongolia has a lot of open space.",best:true,mn:"Японоос ялгаатай нь Монгол их уудам."},{t:"Unlike Japan has many people, Mongolia is empty.",best:false,fix:"Unlike + НЭР ҮГ (өгүүлбэр ✗) → Unlike Japan, ..."}]},
      {ruby:"What about greetings?", pron:"вот эбаут гриитингз?", mn:"Мэндчилгээ яах вэ?",
        choices:[{t:"In Japan people bow, whereas in Mongolia we shake hands.",best:true,mn:"Японд бөхийдөг бол Монголд гар барьдаг."},{t:"In Japan people bow, unlike in Mongolia we shake hands.",best:false,fix:"Өгүүлбэртэй → WHEREAS."}]},
      {ruby:"Was it hard to adapt when you went abroad?", pron:"воз ит хард ту эдэпт вэн ю вэнт эброд?", mn:"Гадаад явахад дасан зохиход хэцүү байсан уу?",
        choices:[{t:"Yes! I had culture shock. It took me a year to adapt.",best:true,mn:"Тийм! Соёлын цочрол авсан. Дасан зохиход нэг жил болсон."},{t:"Yes! I had culture shock. It took me year to adapt with it.",best:false,fix:"took me A year to adapt TO it."}]}
    ]}
  },
  {
    id:'a2m8l8', title:"8.8 Зочлох ёс", level:"A2 · М8",
    blurb:"You'd better take a gift — had better ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: had better (хүчтэй зөвлөгөө)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хүчтэй зөвлөгөө — «...сан нь дээр, эс бөгөөс асуудал гарна».<br><br>
        <b>had better (= 'd better) + НҮЦГЭН үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">You'D BETTER take a gift. = Бэлэг авсан нь дээр.</span><span class="tag">We'D BETTER leave now, or we'll be late.</span></div>
        <b>⚠️ 3 гол алдаа:</b>
        <div style="margin:12px 0"><span class="tag">had better TO take ✗ → had better TAKE ✓</span><span class="tag">You had better not to be late ✗ → had better NOT BE late ✓</span><span class="tag">«had» гэсэн ч ӨНГӨРСӨН БИШ — ирээдүйн зөвлөгөө!</span></div>
        <b>should ⟷ had better — хүчний ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">should = зөөлөн зөвлөгөө: You should take a gift. (санал)</span><span class="tag">had better = хүчтэй, сануулгатай: You'd better take a gift. (эс бөгөөс муу үр дагавартай!)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        host /hoʊst/ — гэрийн эзэн · guest /ɡest/ — зочин · welcome /ˈwelkəm/ — угтах<br>
        arrive /əˈraɪv/ — ирэх · shoes /ʃuːz/ — гутал · seat /siːt/ — суудал<br>
        offer /ˈɒfər/ — санал болгох · refuse /rɪˈfjuːz/ — татгалзах · compliment /ˈkɒmplɪment/ — магтаал<br>
        appreciate /əˈpriːʃieɪt/ — үнэлэх · impolite /ˌɪmpəˈlaɪt/ — эелдэг бус · thank /θæŋk/ — талархах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You'd better to go» ✗ → <b>You'd better GO</b> ✓ (to ✗!). Мөн «had» өнгөрсөн мэт харагдана ч <b>ИРЭЭДҮЙН</b> зөвлөгөө — «You had better take it tomorrow» ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «'D BETTER + нүцгэн үйл үг · Үгүйсгэл: 'd better NOT + үйл үг».</p>`
    },
    phrases:[
      {en:"You'd better take a small gift for the host.", pron:"юд бэтэр тэйк э смол гифт фор зэ хоуст.", mn:"Гэрийн эзэнд жижиг бэлэг авсан нь дээр."},
      {en:"We'd better leave now, or we'll be late.", pron:"вид бэтэр лийв нау, ор вил би лэйт.", mn:"Одоо явсан нь дээр, эс бөгөөс хоцорно."},
      {en:"You'd better not refuse the food — it's impolite.", pron:"юд бэтэр нот рифьюз зэ фүд — итс имполайт.", mn:"Хоолноос татгалзахгүй байсан нь дээр — эелдэг бус."},
      {en:"You're supposed to take off your shoes at the door.", pron:"юр сэпоузд ту тэйк оф ёр шүз эт зэ дор.", mn:"Хаалганы дэргэд гуталаа тайлах ёстой."},
      {en:"Always thank your host before you leave.", pron:"олвэйз сэнк ёр хоуст бифор ю лийв.", mn:"Явахаасаа өмнө гэрийн эзэнд үргэлж талархаарай."}
    ],
    exercises:[
      {q:"to хэрэгтэй юу:", parts:["You'd better ", " a gift."], opts:["take","to take"], a:0, fix:"had better + нүцгэн → take."},
      {q:"Үгүйсгэл:", parts:["You'd better ", " late."], opts:["not be","not to be"], a:0, fix:"'d better NOT be late."},
      {q:"Хүч:", parts:["", " leave now, or we'll be late!"], opts:["We'd better","We should"], a:0, fix:"Сануулгатай → We'd better."},
      {q:"Ёс заншил:", parts:["You're supposed ", " take off your shoes."], opts:["to","—"], a:0, fix:"supposed TO take off."}
    ],
    speak:{ scene:'Айлд зочлох', turns:[
      {ruby:"I'm visiting a Mongolian family tonight. Any tips?", pron:"айм визитинг э Монголиан фэмили тунайт. эни типс?", mn:"Өнөө орой монгол айлд очно. Зөвлөгөө байна уу?",
        choices:[{t:"You'd better take a small gift for the host.",best:true,mn:"Гэрийн эзэнд жижиг бэлэг авсан нь дээр."},{t:"You'd better to take a small gift.",best:false,fix:"'d better TAKE (to ✗)."}]},
      {ruby:"What if they offer me food I don't like?", pron:"вот иф зэй офэр ми фүд ай доунт лайк?", mn:"Дургүй хоол санал болговол яах вэ?",
        choices:[{t:"You'd better not refuse it — it's impolite. Just try a little.",best:true,mn:"Татгалзахгүй байсан нь дээр — эелдэг бус. Жаахан амсаад үз."},{t:"You'd better not to refuse it.",best:false,fix:"'d better NOT REFUSE (to ✗)."}]},
      {ruby:"Good to know! What time should I arrive?", pron:"гүд ту ноу! вот тайм шүд ай эрайв?", mn:"Мэдэж авлаа! Хэдэн цагт очих вэ?",
        choices:[{t:"On time. We'd better leave now if you want to be there by seven!",best:true,mn:"Цагтаа. 7 цагт хүрэхийг хүсвэл одоо явсан нь дээр!"},{t:"On time. We should leave now until seven.",best:false,fix:"WE'D BETTER leave... BY seven."}]}
    ]}
  },
  {
    id:'a2m8l9', title:"8.9 Танилцуулга", level:"A2 · М8",
    blurb:"Firstly... In conclusion — илтгэлийн бүтэц",
    rule:{
      h:"Зорилго ба дүрэм: илтгэл, эссэний холбоос үгс",
      html:`<b>🎯 Зорилго:</b> Соёлоо танилцуулах илтгэлийг мэргэжлийн бүтэцтэй болгох.<br><br>
        <b>Илтгэлийн 4 хэсэг:</b>
        <div style="margin:12px 0"><span class="tag">1. ЭХЛЭЛ: Today I'd like to tell you about... · First of all...</span><span class="tag">2. ДАРААЛАЛ: Firstly... · Secondly... · Another thing is...</span><span class="tag">3. ЖИШЭЭ: For example... · For instance... · such as</span><span class="tag">4. ТӨГСГӨЛ: In conclusion... · To sum up... · Finally...</span></div>
        <b>⚠️ Firstly ⟷ First — хоёулаа зөв</b>, гэхдээ бүлгээ хольж болохгүй:
        <div style="margin:12px 0"><span class="tag">First... Second... Third ✓</span><span class="tag">Firstly... Secondly... Thirdly ✓</span><span class="tag">First... Secondly ✗ (хольсон)</span></div>
        <b>such as ⟷ for example:</b> such as + жагсаалт (dishes SUCH AS buuz) · For example + өгүүлбэр.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        presentation /ˌpreznˈteɪʃn/ — илтгэл · introduce /ˌɪntrəˈduːs/ — танилцуулах · topic /ˈtɒpɪk/ — сэдэв<br>
        firstly /ˈfɜːrstli/ — нэгдүгээрт · secondly /ˈsekəndli/ — хоёрдугаарт · finally /ˈfaɪnəli/ — эцэст нь<br>
        conclusion /kənˈkluːʒn/ — дүгнэлт · example /ɪɡˈzæmpl/ — жишээ · instance /ˈɪnstəns/ — тохиолдол<br>
        explain /ɪkˈspleɪn/ — тайлбарлах · summary /ˈsʌməri/ — товчлол · audience /ˈɔːdiəns/ — үзэгчид</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «At first, I want to say...» ✗ — <b>at first</b> = «эхэндээ (дараа нь өөрчлөгдсөн)», илтгэлд <b>First of all</b> ✓ эсвэл <b>Firstly</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Илтгэлийн 4 алхам: <b>Эхлэл → Дараалал → Жишээ → Дүгнэлт</b>.</p>`
    },
    phrases:[
      {en:"Today I'd like to tell you about Mongolian culture.", pron:"тудэй айд лайк ту тэл ю эбаут Монголиан калчэр.", mn:"Өнөөдөр монгол соёлын тухай ярихыг хүсэж байна."},
      {en:"Firstly, I'll talk about our traditions.", pron:"фөрстли, айл ток эбаут ауэр трэдишнз.", mn:"Нэгдүгээрт, уламжлалынхаа тухай ярина."},
      {en:"Secondly, I'd like to explain our food culture.", pron:"сэкэндли, айд лайк ту иксплэйн ауэр фүд калчэр.", mn:"Хоёрдугаарт, хоолны соёлоо тайлбарлая."},
      {en:"For example, we eat dishes such as buuz and khuushuur.", pron:"фор игзэмпл, ви ийт дишиз сач эз бууз энд хуушуур.", mn:"Жишээ нь, бид бууз, хуушуур зэрэг хоол иддэг."},
      {en:"In conclusion, our culture is both ancient and alive.", pron:"ин кэнклюжн, ауэр калчэр из боус эйншэнт энд элайв.", mn:"Дүгнэвэл манай соёл эртний бас амьд."}
    ],
    exercises:[
      {q:"Эхлэл:", parts:["", ", I'd like to tell you about..."], opts:["First of all","At first"], a:0, fix:"Илтгэлийн эхлэл → First of all."},
      {q:"Дараалал:", parts:["Firstly... ", "..."], opts:["Secondly","Second"], a:0, fix:"Firstly-тэй хос → Secondly."},
      {q:"Жишээ:", parts:["dishes ", " buuz and khuushuur"], opts:["such as","for example"], a:0, fix:"Жагсаалт → such as."},
      {q:"Төгсгөл:", parts:["", ", our culture is unique."], opts:["In conclusion","In the end"], a:0, fix:"Илтгэлийн дүгнэлт → In conclusion."}
    ],
    speak:{ scene:'Соёлоо танилцуулах', turns:[
      {ruby:"You're presenting about Mongolia? How will you start?", pron:"юр призэнтинг эбаут Монголиа? хау вил ю старт?", mn:"Монголын тухай илтгэх үү? Яаж эхлэх вэ?",
        choices:[{t:"First of all, I'd like to tell you about our traditions.",best:true,mn:"Юуны өмнө уламжлалынхаа тухай ярихыг хүсэж байна."},{t:"At first, I want to tell about our traditions.",best:false,fix:"«At first» = эхэндээ! → FIRST OF ALL, I'd like to tell you ABOUT."}]},
      {ruby:"And then?", pron:"энд зэн?", mn:"Дараа нь?",
        choices:[{t:"Secondly, I'll explain our food culture — dishes such as buuz.",best:true,mn:"Хоёрдугаарт, хоолны соёлоо тайлбарлана — бууз зэрэг хоол."},{t:"Second, I'll explain food culture, for example buuz.",best:false,fix:"Firstly-тэй хос → SECONDLY. Жагсаалт → SUCH AS buuz."}]},
      {ruby:"How will you finish?", pron:"хау вил ю финиш?", mn:"Яаж дуусгах вэ?",
        choices:[{t:"In conclusion, I'll say our culture is both ancient and alive.",best:true,mn:"Дүгнэвэл манай соёл эртний бас амьд гэж хэлнэ."},{t:"In the end, our culture is ancient and alive.",best:false,fix:"Илтгэлд → IN CONCLUSION."}]}
    ]}
  },
  {
    id:'a2m8l10', title:"8.10 Модулийн шалгалт", level:"A2 · М8",
    blurb:"🏆 Монгол соёлын илтгэл",
    rule:{
      h:"Давтлага: A2 Модуль 8-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 8-ийн мэдлэгээ нэгтгэж, соёлоо танилцуулах илтгэл бэлдэх.<br><br>
        <b>Модуль 8-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">we WOULD visit ⟷ used to BE ⭐</span><span class="tag">You're supposed to bow ⭐</span><span class="tag">not only ... but also / both ... and</span><span class="tag">the best I've EVER seen ⭐</span><span class="tag">The film, WHICH is..., won ⭐</span><span class="tag">a writer WHOSE books...</span><span class="tag">Unlike Japan / whereas ⭐</span><span class="tag">You'd better take a gift ⭐</span><span class="tag">Firstly... In conclusion</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Соёлын илтгэл (15+ өгүүлбэр):</b> Гадаад найздаа Монголоо танилцуул! Жишээ:<br>
        <i>First of all, I'd like to tell you about Tsagaan Sar, which is our biggest holiday. When I was a child, we used to live in the countryside, and every year we would visit our grandparents. My grandmother, who was an amazing cook, would make a thousand buuz! Firstly, you're supposed to greet the elders — it's an ancient custom. Secondly, you'd better take a small gift. Unlike in some countries, you're not supposed to refuse food here. We eat not only meat but also a lot of dairy. It's the most beautiful holiday I've ever experienced. In conclusion, our culture is both ancient and alive!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Илтгэлийн 4 давхар: <b>Танилцуулга</b> (First of all) → <b>Дурсамж</b> (we would visit) → <b>Дүрэм</b> (you're supposed to) → <b>Дүгнэлт</b> (In conclusion).</p>`
    },
    phrases:[
      {en:"Every year we would visit our grandparents.", pron:"эври йир ви вүд визит ауэр грэндпэрэнтс.", mn:"Жил бүр өвөө эмээдээ очдог байсан."},
      {en:"You're supposed to greet the elders first.", pron:"юр сэпоузд ту грийт зэ элдэрз фөрст.", mn:"Эхлээд ахмадуудтай мэндчилэх ёстой."},
      {en:"We eat not only meat but also a lot of dairy.", pron:"ви ийт нот оунли мийт бат олсоу э лот ов дэри.", mn:"Бид зөвхөн мах төдийгүй их цагаан идээ иддэг."},
      {en:"It's the most beautiful holiday I've ever experienced.", pron:"итс зэ моуст бьютифул холидэй айв эвэр икспириэнст.", mn:"Миний туулсан хамгийн үзэсгэлэнтэй баяр."},
      {en:"In conclusion, our culture is both ancient and alive.", pron:"ин кэнклюжн, ауэр калчэр из боус эйншэнт энд элайв.", mn:"Дүгнэвэл манай соёл эртний бас амьд."}
    ],
    exercises:[
      {q:"Давтлага (would):", parts:["We ", " in the countryside."], opts:["used to live","would live"], a:0, fix:"live = байдал → used to live."},
      {q:"Давтлага (supposed):", parts:["You're supposed ", " bow."], opts:["to","—"], a:0, fix:"supposed TO bow."},
      {q:"Давтлага (ever):", parts:["The best I've ever ", "."], opts:["seen","saw"], a:0, fix:"I'VE ever SEEN (PP)."},
      {q:"Давтлага (had better):", parts:["You'd better ", " a gift."], opts:["take","to take"], a:0, fix:"'d better TAKE."}
    ],
    speak:{ scene:'🏆 Шалгалт: Соёлын илтгэл', turns:[
      {ruby:"Tell me about your biggest holiday!", pron:"тэл ми эбаут ёр бигэст холидэй!", mn:"Хамгийн том баярынхаа тухай яриач!",
        choices:[{t:"First of all, I'd like to tell you about Tsagaan Sar, which is our biggest holiday.",best:true,mn:"Юуны өмнө хамгийн том баяр Цагаан сарын тухай ярихыг хүсэж байна."},{t:"At first, I tell about Tsagaan Sar, that is our biggest holiday.",best:false,fix:"FIRST OF ALL... Tsagaan Sar, WHICH is (таслалтай → which)."}]},
      {ruby:"How did you celebrate as a child?", pron:"хау дид ю сэлэбрэйт эз э чайлд?", mn:"Бага байхад яаж тэмдэглэдэг байсан бэ?",
        choices:[{t:"We used to live in the countryside, and every year we would visit our grandparents.",best:true,mn:"Хөдөө амьдардаг байсан, жил бүр өвөө эмээдээ очдог байлаа."},{t:"We would live in the countryside and would visit grandparents.",best:false,fix:"live = байдал → USED TO live."}]},
      {ruby:"What should a foreign guest know?", pron:"вот шүд э форин гэст ноу?", mn:"Гадаад зочин юу мэдэх ёстой вэ?",
        choices:[{t:"You're supposed to greet the elders, and you'd better take a small gift.",best:true,mn:"Ахмадуудтай мэндчилэх ёстой, жижиг бэлэг авсан нь дээр."},{t:"You are supposed greet elders, and you'd better to take gift.",best:false,fix:"supposed TO greet... 'd better TAKE."}]}
    ]}
  },
  {
    id:'a2m9l1', title:"9.1 Банк", level:"A2 · М9",
    blurb:"Do you mind if I sit here? — зөвшөөрөл ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Do you mind if I...? (зөвшөөрөл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Зөвшөөрөл эелдэгээр гуйх — М4-ийн «Would you mind + -ing»-ээс өөр!<br><br>
        <b>⚠️ Хоёрыг андуурч болохгүй:</b>
        <div style="margin:12px 0"><span class="tag">Would you mind + -ING? = ТА хийж өгөх үү (хүсэлт): Would you mind waiting?</span><span class="tag">Do you mind IF I + одоо цаг? = БИ хийж болох уу (зөвшөөрөл): Do you mind if I sit here?</span></div>
        <b>Эелдэг байдлын шат:</b>
        <div style="margin:12px 0"><span class="tag">Can I...? 🙂 (энгийн)</span><span class="tag">Is it OK if I...? 😊</span><span class="tag">Do you mind if I...? 😊😊</span><span class="tag">Would you mind if I + ӨНГӨРСӨН цаг? 😊😊😊 (хамгийн эелдэг): Would you mind if I sat here?</span></div>
        <b>Хариулт мөн л ЭРГҮҮ:</b> «No, not at all / Go ahead» = зөвшөөрөв ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        bank account /bæŋk əˈkaʊnt/ — банкны данс · open /ˈoʊpən/ — нээх · deposit /dɪˈpɒzɪt/ — хийх (мөнгө)<br>
        withdraw /wɪðˈdrɔː/ — авах (мөнгө) · transfer /ˈtrænsfɜːr/ — шилжүүлэх · balance /ˈbæləns/ — үлдэгдэл<br>
        card /kɑːrd/ — карт · PIN /pɪn/ — ПИН код · cash /kæʃ/ — бэлэн мөнгө<br>
        form /fɔːrm/ — маягт · sign /saɪn/ — гарын үсэг зурах · ID /ˌaɪ ˈdiː/ — үнэмлэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Do you mind if I sitting?» ✗ → <b>if I SIT</b> ✓ (одоо цаг). «Would you mind if I sit?» — болох ч зөв нь <b>if I SAT</b> ✓ (өнгөрсөн цаг = илүү эелдэг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WOULD you mind + -ING = та хийх · DO you mind IF I = би хийх».</p>`
    },
    phrases:[
      {en:"Do you mind if I sit here?", pron:"ду ю майнд иф ай сит хийр?", mn:"Энд суувал болох уу?"},
      {en:"No, not at all. Go ahead!", pron:"ноу, нот эт ол. гоу эхэд!", mn:"Зүгээр, огт асуудалгүй. Суугаарай!"},
      {en:"Would you mind if I paid by card?", pron:"вүд ю майнд иф ай пэйд бай кард?", mn:"Картаар төлвөл болох уу?"},
      {en:"I'd like to open a bank account, please.", pron:"айд лайк ту оупэн э бэнк экаунт, плийз.", mn:"Банкны данс нээмээр байна."},
      {en:"Could you tell me what my balance is?", pron:"күд ю тэл ми вот май бэлэнс из?", mn:"Дансны үлдэгдлээ хэлж өгөхгүй юу?"}
    ],
    exercises:[
      {q:"Зөвшөөрөл:", parts:["Do you mind ", " I sit here?"], opts:["if","—"], a:0, fix:"Би хийх → Do you mind IF I..."},
      {q:"Цаг:", parts:["Do you mind if I ", " here?"], opts:["sit","sitting"], a:0, fix:"if I + одоо цаг → sit."},
      {q:"Хамгийн эелдэг:", parts:["Would you mind if I ", " by card?"], opts:["paid","pay"], a:0, fix:"Would-тэй → өнгөрсөн цаг: paid."},
      {q:"Ялгаа:", parts:["Would you mind ", "? (та хүлээх)"], opts:["waiting","if you wait"], a:0, fix:"Та хийх → Would you mind + -ing."}
    ],
    speak:{ scene:'Банкинд', turns:[
      {ruby:"Good morning. How can I help you?", pron:"гүд морнинг. хау кэн ай хэлп ю?", mn:"Өглөөний мэнд. Танд юугаар туслах вэ?",
        choices:[{t:"I'd like to open a bank account. Do you mind if I sit here?",best:true,mn:"Банкны данс нээмээр байна. Энд суувал болох уу?"},{t:"I want open account. Do you mind if I sitting here?",best:false,fix:"I'd like TO OPEN... Do you mind if I SIT here?"}]},
      {ruby:"Not at all! Please fill in this form.", pron:"нот эт ол! плийз фил ин зис форм.", mn:"Зүгээр! Энэ маягтыг бөглөнө үү.",
        choices:[{t:"Of course. Would you mind if I used your pen?",best:true,mn:"Мэдээж. Үзэгээ ашиглавал болох уу?"},{t:"Of course. Would you mind if I use your pen?",best:false,fix:"Would-тэй → if I USED (өнгөрсөн = илүү эелдэг)."}]},
      {ruby:"Here you are. And your ID, please.", pron:"хийр ю а. энд ёр ай-ди, плийз.", mn:"Энэ байна. Үнэмлэхээ өгнө үү.",
        choices:[{t:"Here it is. Could you tell me what the balance limit is?",best:true,mn:"Энэ байна. Үлдэгдлийн хязгаар хэд болохыг хэлж өгөхгүй юу?"},{t:"Here. Could you tell me what is the balance limit?",best:false,fix:"Эелдэг асуулт → what the balance limit IS."}]}
    ]}
  },
  {
    id:'a2m9l2', title:"9.2 Шуудан", level:"A2 · М9",
    blurb:"send it to me / pay for it — үйл үг + 2 зүйл ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: verb + object + preposition",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр зүйл (юм + хүн) дагадаг үйл үгсийг зөв зохион байгуулах.<br><br>
        <b>1) send / give / show / tell + ХЭНД (2 дараалал болно):</b>
        <div style="margin:12px 0"><span class="tag">Send the parcel TO ME. ✓ (юм эхэлбэл TO хэрэгтэй)</span><span class="tag">Send me the parcel. ✓ (хүн эхэлбэл TO ✗)</span></div>
        <b>2) buy / get + ХЭНД → FOR:</b>
        <div style="margin:12px 0"><span class="tag">I bought a gift FOR my mother. = I bought my mother a gift.</span></div>
        <b>3) Тогтмол угтвартай:</b>
        <div style="margin:12px 0"><span class="tag">pay FOR something · wait FOR · ask FOR · look FOR</span><span class="tag">explain something TO someone (explain me ✗!)</span></div>
        <b>⚠️ explain / describe / suggest</b> — эдгээр «me» шууд авдаггүй:
        <div style="margin:12px 0"><span class="tag">Explain me the rule ✗ → Explain the rule TO ME ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        post office /poʊst ɒfɪs/ — шуудан · parcel /ˈpɑːrsl/ — илгээмж · envelope /ˈenvəloʊp/ — дугтуй<br>
        stamp /stæmp/ — марк · address /ˈædres/ — хаяг · weigh /weɪ/ — жинлэх<br>
        abroad /əˈbrɔːd/ — гадаад руу · registered /ˈredʒɪstərd/ — баталгаат · express /ɪkˈspres/ — шуурхай<br>
        fragile /ˈfrædʒaɪl/ — эмзэг · insure /ɪnˈʃʊr/ — даатгуулах · receipt /rɪˈsiːt/ — баримт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Send me it» ✗ (хоёулаа төлөөний үг) → <b>Send it to me</b> ✓. Мөн «Explain me» ✗ → <b>Explain TO ME</b> ✓ — энэ бол монгол суралцагчийн түгээмэл алдаа!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ЮМ эхэлбэл TO/FOR хэрэгтэй · ХҮН эхэлбэл хэрэггүй» — send it TO me / send me it ✗.</p>`
    },
    phrases:[
      {en:"Could you send this parcel to Japan, please?", pron:"күд ю сэнд зис парсл ту Жэпэн, плийз?", mn:"Энэ илгээмжийг Япон руу илгээж өгөхгүй юу?"},
      {en:"How much do I have to pay for it?", pron:"хау мач ду ай хэв ту пэй фор ит?", mn:"Үүнд хэд төлөх ёстой вэ?"},
      {en:"Can you explain the options to me?", pron:"кэн ю иксплэйн зэ опшнз ту ми?", mn:"Сонголтуудыг надад тайлбарлаж өгөх үү?"},
      {en:"I bought some stamps for my sister.", pron:"ай бот сам стэмпс фор май систэр.", mn:"Эгчдээ хэдэн марк авсан."},
      {en:"Please write the address on the envelope.", pron:"плийз райт зэ эдрэс он зэ энвэлоуп.", mn:"Дугтуйн дээр хаягаа бичнэ үү."}
    ],
    exercises:[
      {q:"Дараалал:", parts:["Send the parcel ", " me."], opts:["to","—"], a:0, fix:"Юм эхэлбэл → TO me."},
      {q:"Дараалал:", parts:["Send ", " the parcel."], opts:["me","to me"], a:0, fix:"Хүн эхэлбэл → to ✗: Send me the parcel."},
      {q:"explain:", parts:["Explain the rule ", " me."], opts:["to","—"], a:0, fix:"explain ... TO me (explain me ✗)."},
      {q:"pay:", parts:["How much do I pay ", " it?"], opts:["for","—"], a:0, fix:"pay FOR it."}
    ],
    speak:{ scene:'Шуудангийн салбарт', turns:[
      {ruby:"Hello! What can I do for you?", pron:"хэлоу! вот кэн ай ду фор ю?", mn:"Сайн уу! Танд юугаар туслах вэ?",
        choices:[{t:"Could you send this parcel to Japan, please?",best:true,mn:"Энэ илгээмжийг Япон руу илгээж өгөхгүй юу?"},{t:"Could you send Japan this parcel?",best:false,fix:"Юм эхэлбэл → send this parcel TO Japan."}]},
      {ruby:"Sure. Express or registered?", pron:"шүр. икспрэс ор рэжистэрд?", mn:"Тэгье. Шуурхай юу, баталгаат уу?",
        choices:[{t:"I'm not sure. Could you explain the options to me?",best:true,mn:"Мэдэхгүй байна. Сонголтуудыг надад тайлбарлаж өгөх үү?"},{t:"Not sure. Could you explain me the options?",best:false,fix:"explain the options TO ME (explain me ✗)."}]},
      {ruby:"Express is faster but more expensive.", pron:"икспрэс из фастэр бат мор икспэнсив.", mn:"Шуурхай нь хурдан ч илүү үнэтэй.",
        choices:[{t:"I'll take express. How much do I pay for it?",best:true,mn:"Шуурхайг авъя. Хэд төлөх вэ?"},{t:"I take express. How much I pay it?",best:false,fix:"I'LL take... How much DO I pay FOR it?"}]}
    ]}
  },
  {
    id:'a2m9l3', title:"9.3 Зочид буудал", level:"A2 · М9",
    blurb:"I'd rather have a quiet room — would rather ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: would rather / would prefer",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хүслээ эелдэгээр илэрхийлэх — «prefer»-ээс илүү жам ёсны.<br><br>
        <b>would rather ('d rather) + НҮЦГЭН үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">I'D RATHER have a quiet room. (to ✗!)</span><span class="tag">I'd rather NOT stay on the ground floor.</span></div>
        <b>would prefer ('d prefer) + TO + үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">I'D PREFER TO have a quiet room. (to заавал!)</span></div>
        <b>⚠️ Бүтэц нь эсрэг!</b>
        <div style="margin:12px 0"><span class="tag">would rather GO ✓ / would rather to go ✗</span><span class="tag">would prefer TO go ✓ / would prefer go ✗</span></div>
        <b>Хоёрын дундаас сонгох:</b>
        <div style="margin:12px 0"><span class="tag">I'd rather have tea THAN coffee. (than!)</span><span class="tag">I'd prefer tea TO coffee. (to! — М8-ыг санаарай)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        reception /rɪˈsepʃn/ — хүлээн авах · key card /kiː kɑːrd/ — түлхүүр карт · floor /flɔːr/ — давхар<br>
        view /vjuː/ — үзэмж · noisy /ˈnɔɪzi/ — чимээ шуугиантай · quiet /ˈkwaɪət/ — нам гүм<br>
        towel /ˈtaʊəl/ — алчуур · air conditioning /er kənˈdɪʃənɪŋ/ — агааржуулалт · heating /ˈhiːtɪŋ/ — халаалт<br>
        complain /kəmˈpleɪn/ — гомдоллох · change /tʃeɪndʒ/ — солих · upgrade /ˈʌpɡreɪd/ — сайжруулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'd rather to have» ✗ → <b>I'd rather HAVE</b> ✓. Мөн «I'd rather tea to coffee» ✗ → rather-тэй бол <b>THAN</b>: I'd rather have tea THAN coffee ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «RATHER + нүцгэн + THAN · PREFER + TO + TO» — бүтэц нь эсрэг!</p>`
    },
    phrases:[
      {en:"I'd rather have a room on a higher floor.", pron:"айд разэр хэв э рум он э хайэр флор.", mn:"Дээд давхарт өрөө авмаар байна."},
      {en:"I'd prefer to have a room with a view.", pron:"айд прифөр ту хэв э рум виз э вью.", mn:"Үзэмжтэй өрөө авахыг илүүд үзэж байна."},
      {en:"This room is too noisy — I'd rather not stay here.", pron:"зис рум из ту нойзи — айд разэр нот стэй хийр.", mn:"Энэ өрөө хэт чимээтэй — энд байхыг хүсэхгүй байна."},
      {en:"Could you change my room, please?", pron:"күд ю чэйнж май рум, плийз?", mn:"Өрөөг минь солиж өгөхгүй юу?"},
      {en:"I'd rather pay a bit more than sleep badly!", pron:"айд разэр пэй э бит мор зэн слийп бэдли!", mn:"Муу унтахаас жаахан илүү төлсөн нь дээр!"}
    ],
    exercises:[
      {q:"to хэрэгтэй юу:", parts:["I'd rather ", " a quiet room."], opts:["have","to have"], a:0, fix:"rather + нүцгэн → have."},
      {q:"to хэрэгтэй юу:", parts:["I'd prefer ", " a quiet room."], opts:["to have","have"], a:0, fix:"prefer + TO have."},
      {q:"Үгүйсгэл:", parts:["I'd rather ", " stay here."], opts:["not","don't"], a:0, fix:"'d rather NOT stay."},
      {q:"than/to:", parts:["I'd rather have tea ", " coffee."], opts:["than","to"], a:0, fix:"rather-тэй → THAN."}
    ],
    speak:{ scene:'Зочид буудалд өрөө солих', turns:[
      {ruby:"Is everything OK with your room?", pron:"из эврисинг оукэй виз ёр рум?", mn:"Өрөө тань зүгээр байна уу?",
        choices:[{t:"Actually, it's too noisy. I'd rather have a room on a higher floor.",best:true,mn:"Үнэндээ хэт чимээтэй. Дээд давхарт өрөө авмаар байна."},{t:"It's too noisy. I'd rather to have higher floor.",best:false,fix:"'d rather HAVE (to ✗)."}]},
      {ruby:"I see. We have one on the fifth floor with a view.", pron:"ай сий. ви хэв ван он зэ фифс флор виз э вью.", mn:"Ойлголоо. 5 давхарт үзэмжтэй нэг бий.",
        choices:[{t:"That sounds perfect. I'd prefer to move today if possible.",best:true,mn:"Төгс сонсогдож байна. Боломжтой бол өнөөдөр нүүхийг илүүд үзэж байна."},{t:"Perfect. I'd prefer move today.",best:false,fix:"'d prefer TO move."}]},
      {ruby:"It's a bit more expensive, though.", pron:"итс э бит мор икспэнсив, зоу.", mn:"Гэхдээ жаахан үнэтэй шүү.",
        choices:[{t:"That's fine. I'd rather pay more than sleep badly!",best:true,mn:"Зүгээр. Муу унтахаас илүү төлсөн нь дээр!"},{t:"Fine. I'd rather pay more to sleep badly.",best:false,fix:"rather-тэй → THAN sleep badly."}]}
    ]}
  },
  {
    id:'a2m9l4', title:"9.4 Рестораны гомдол", level:"A2 · М9",
    blurb:"There's something wrong with it — гомдоллох ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: гомдол илэрхийлэх бүтцүүд",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Эелдэг ч тодорхой гомдоллох — эмоцгүй, үр дүнтэй.<br><br>
        <b>Асуудал хэлэх 3 хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">There's something wrong WITH the soup.</span><span class="tag">I'm afraid the soup is cold. («I'm afraid» = зөөлрүүлэгч!)</span><span class="tag">Excuse me, there seems to be a mistake.</span></div>
        <b>complain — угтвар нь 2:</b>
        <div style="margin:12px 0"><span class="tag">complain TO + ХҮН: I complained TO the manager.</span><span class="tag">complain ABOUT + ЮМ: I complained ABOUT the food.</span></div>
        <b>⚠️ Бүдүүлэг ⟷ эелдэг:</b>
        <div style="margin:12px 0"><span class="tag">This is terrible! ✗ (бүдүүлэг)</span><span class="tag">I'm afraid there's a problem with this. ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        complain /kəmˈpleɪn/ — гомдоллох · complaint /kəmˈpleɪnt/ — гомдол · manager /ˈmænɪdʒər/ — менежер<br>
        wrong /rɒŋ/ — буруу · cold /koʊld/ — хүйтэн · undercooked /ˌʌndərˈkʊkt/ — болоогүй<br>
        overcooked /ˌoʊvərˈkʊkt/ — хэт болсон · dirty /ˈdɜːrti/ — бохир · bill /bɪl/ — тооцоо<br>
        mistake /mɪˈsteɪk/ — алдаа · apologize /əˈpɒlədʒaɪz/ — уучлалт гуйх · replace /rɪˈpleɪs/ — солих</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «There's something wrong in the soup» ✗ → <b>wrong WITH</b> ✓. Мөн «I complained the manager» ✗ → <b>complained TO the manager</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «I'M AFRAID = зөөлрүүлэгч» — гомдлын өмнө тавьбал бүдүүлэг сонсогдохгүй.</p>`
    },
    phrases:[
      {en:"Excuse me, there's something wrong with my soup.", pron:"икскьюз ми, зэрз самсинг ронг виз май сүп.", mn:"Уучлаарай, шөлтэй минь ямар нэг асуудал байна."},
      {en:"I'm afraid this meat is undercooked.", pron:"айм эфрэйд зис мийт из андэркүкт.", mn:"Харамсалтай нь энэ мах болоогүй байна."},
      {en:"There seems to be a mistake in the bill.", pron:"зэр сиймз ту би э мистэйк ин зэ бил.", mn:"Тооцоонд алдаа гарсан бололтой."},
      {en:"Could I speak to the manager, please?", pron:"күд ай спийк ту зэ мэнэжэр, плийз?", mn:"Менежертэй ярьж болох уу?"},
      {en:"I'm sorry. We'll replace it immediately.", pron:"айм сори. вил риплэйс ит имийдиэтли.", mn:"Уучлаарай. Тэр дороо солино."}
    ],
    exercises:[
      {q:"Угтвар:", parts:["There's something wrong ", " my soup."], opts:["with","in"], a:0, fix:"wrong WITH."},
      {q:"Угтвар:", parts:["I complained ", " the manager."], opts:["to","—"], a:0, fix:"complain TO + хүн."},
      {q:"Угтвар:", parts:["I complained ", " the food."], opts:["about","to"], a:0, fix:"complain ABOUT + юм."},
      {q:"Зөөлрүүлэх:", parts:["", " this soup is cold."], opts:["I'm afraid","This is terrible!"], a:0, fix:"Эелдэг → I'm afraid."}
    ],
    speak:{ scene:'Ресторанд гомдоллох', turns:[
      {ruby:"Is everything OK with your meal?", pron:"из эврисинг оукэй виз ёр мийл?", mn:"Хоол тань зүгээр байна уу?",
        choices:[{t:"Excuse me, I'm afraid there's something wrong with my soup — it's cold.",best:true,mn:"Уучлаарай, шөлтэй минь асуудал байна — хүйтэн байна."},{t:"Excuse me, something wrong in my soup. It's terrible!",best:false,fix:"wrong WITH my soup. «It's terrible!» бүдүүлэг → I'm afraid it's cold."}]},
      {ruby:"Oh, I'm very sorry! I'll replace it immediately.", pron:"оу, айм вэри сори! айл риплэйс ит имийдиэтли.", mn:"Өө, маш их уучлаарай! Тэр дороо солино.",
        choices:[{t:"Thank you. Also, there seems to be a mistake in the bill.",best:true,mn:"Баярлалаа. Бас тооцоонд алдаа гарсан бололтой."},{t:"Thanks. Also, is a mistake in the bill.",best:false,fix:"THERE SEEMS TO BE a mistake."}]},
      {ruby:"Let me check... You're right! I'll fix it.", pron:"лет ми чэк... юр райт! айл фикс ит.", mn:"Шалгаад үзье... Зөв байна! Засъя.",
        choices:[{t:"Thank you. I didn't want to complain, but I had to.",best:true,mn:"Баярлалаа. Гомдоллохыг хүсээгүй ч хэлэх хэрэгтэй болсон."},{t:"Thanks. I didn't want complain, but I must.",best:false,fix:"want TO complain... I HAD TO (өнгөрсөн)."}]}
    ]}
  },
  {
    id:'a2m9l5', title:"9.5 Дэлгүүрийн буцаалт", level:"A2 · М9",
    blurb:"I was wondering if you could... — маш эелдэг ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: маш эелдэг хүсэлт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хүнд нөхцөлд хамгийн эелдэг хүсэлт гаргах.<br><br>
        <b>Эелдэг байдлын дээд шат:</b>
        <div style="margin:12px 0"><span class="tag">Can you...? 🙂</span><span class="tag">Could you...? 😊</span><span class="tag">Could you POSSIBLY...? 😊😊</span><span class="tag">I was wondering IF you COULD... 😊😊😊 (хамгийн эелдэг!)</span></div>
        <b>⚠️ «I was wondering» нь ӨНГӨРСӨН цагтай ч ОДООГ хэлж байна</b> — өнгөрсөн цаг = илүү эелдэг (М9.1-ийн «if I sat»-тай ижил зарчим!).<br><br>
        <b>Бүтэц:</b> I was wondering if you could + нүцгэн үйл үг:
        <div style="margin:12px 0"><span class="tag">I was wondering if you could give me a refund.</span></div>
        <b>Хариулт зөөлрүүлэх:</b> I'm afraid we can't... / Unfortunately... / I'm sorry, but...
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        return /rɪˈtɜːrn/ — буцаах · refund /ˈriːfʌnd/ — мөнгө буцаалт · exchange /ɪksˈtʃeɪndʒ/ — солих<br>
        faulty /ˈfɔːlti/ — гэмтэлтэй · damaged /ˈdæmɪdʒd/ — гэмтсэн · unused /ʌnˈjuːzd/ — хэрэглээгүй<br>
        policy /ˈpɒləsi/ — журам · proof /pruːf/ — нотолгоо · purchase /ˈpɜːrtʃəs/ — худалдан авалт<br>
        original /əˈrɪdʒənl/ — эх · voucher /ˈvaʊtʃər/ — эрхийн бичиг · credit /ˈkredɪt/ — зээл/кредит</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I was wondering if you can» ✗ → өнгөрсөн цагтай тааруулна: <b>if you COULD</b> ✓. Мөн «I am wondering» — болох ч <b>I WAS wondering</b> нь илүү эелдэг!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Англид ӨНГӨРСӨН ЦАГ = ЭЕЛДЭГ» — could, would, was wondering, if I sat.</p>`
    },
    phrases:[
      {en:"I was wondering if you could give me a refund.", pron:"ай воз вандэринг иф ю күд гив ми э рифанд.", mn:"Мөнгийг минь буцааж өгч болох болов уу?"},
      {en:"Could you possibly exchange it for a bigger size?", pron:"күд ю посэбли иксчэйнж ит фор э бигэр сайз?", mn:"Илүү том хэмжээгээр солиж өгөх боломж бий юу?"},
      {en:"I'm afraid the jacket is faulty.", pron:"айм эфрэйд зэ жэкэт из фолти.", mn:"Харамсалтай нь хүрэм гэмтэлтэй байна."},
      {en:"Do you have the receipt as proof of purchase?", pron:"ду ю хэв зэ рисийт эз прүф ов пөрчэс?", mn:"Худалдан авалтын нотолгоо болох баримт бий юу?"},
      {en:"Unfortunately, our policy is fourteen days.", pron:"анфорчэнэтли, ауэр полиси из фортийн дэйз.", mn:"Харамсалтай нь манай журам 14 хоног."}
    ],
    exercises:[
      {q:"Цаг тааруулах:", parts:["I was wondering if you ", " help."], opts:["could","can"], a:0, fix:"was-тэй тааруулна → could."},
      {q:"to хэрэгтэй юу:", parts:["I was wondering if you could ", " it."], opts:["exchange","to exchange"], a:0, fix:"could + нүцгэн → exchange."},
      {q:"Эелдэг:", parts:["Could you ", " help me?"], opts:["possibly","please possibly"], a:0, fix:"Could you POSSIBLY help?"},
      {q:"Зөөлрүүлэх:", parts:["", " we can't refund it."], opts:["I'm afraid","No"], a:0, fix:"Эелдэг татгалзал → I'm afraid."}
    ],
    speak:{ scene:'Бараа буцаах', turns:[
      {ruby:"Hello, how can I help?", pron:"хэлоу, хау кэн ай хэлп?", mn:"Сайн уу, юугаар туслах вэ?",
        choices:[{t:"I'm afraid this jacket is faulty. I was wondering if you could give me a refund.",best:true,mn:"Харамсалтай нь энэ хүрэм гэмтэлтэй. Мөнгийг минь буцааж өгч болох болов уу?"},{t:"This jacket is faulty. I was wondering if you can refund me.",best:false,fix:"if you COULD (цаг тааруулна)."}]},
      {ruby:"Do you have the receipt?", pron:"ду ю хэв зэ рисийт?", mn:"Баримт бий юу?",
        choices:[{t:"Yes, here it is. I bought it two weeks ago.",best:true,mn:"Тийм, энэ байна. Хоёр долоо хоногийн өмнө авсан."},{t:"Yes. I buy it before two weeks.",best:false,fix:"I BOUGHT it two weeks AGO."}]},
      {ruby:"I'm afraid our refund policy is fourteen days.", pron:"айм эфрэйд ауэр рифанд полиси из фортийн дэйз.", mn:"Харамсалтай нь манай буцаалтын журам 14 хоног.",
        choices:[{t:"I see. Could you possibly exchange it instead?",best:true,mn:"Ойлголоо. Оронд нь солиж өгөх боломж бий юу?"},{t:"I see. Can you exchange it instead?",best:false,fix:"Илүү эелдэг → Could you POSSIBLY exchange it?"}]}
    ]}
  },
  {
    id:'a2m9l6', title:"9.6 Утсаар ярих", level:"A2 · М9",
    blurb:"It seems / apparently — зөөлрүүлэх ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: зөөлрүүлэгч хэллэгүүд (softeners)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Англи хэлний нууц — <b>шууд хэлэхээс зайлсхийх</b>. Хатуу үг зөөлрүүлэх нь эелдэг байдлын үндэс.<br><br>
        <b>Зөөлрүүлэгчид:</b>
        <div style="margin:12px 0"><span class="tag">It seems (that)... = ...бололтой</span><span class="tag">Apparently... = ...гэнэ лээ</span><span class="tag">I'm afraid... = харамсалтай нь</span><span class="tag">Actually... = үнэндээ (зөрчилдөхөд)</span><span class="tag">a bit / a little = жаахан (шүүмжлэлийг зөөлрүүлнэ)</span></div>
        <b>Хатуу ⟷ Зөөлөн:</b>
        <div style="margin:12px 0"><span class="tag">You made a mistake ✗ → It seems there's a mistake ✓</span><span class="tag">That's wrong ✗ → Actually, I think that's a bit different ✓</span><span class="tag">No ✗ → I'm afraid not ✓</span></div>
        <b>Утсаар:</b> I'm afraid he's not available. · It seems the line is busy.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        seem /siːm/ — санагдах · apparently /əˈpærəntli/ — гэнэ лээ · actually /ˈæktʃuəli/ — үнэндээ<br>
        available /əˈveɪləbl/ — боломжтой · engaged /ɪnˈɡeɪdʒd/ — завгүй (утас) · connect /kəˈnekt/ — холбох<br>
        extension /ɪkˈstenʃn/ — дотуур дугаар · hold /hoʊld/ — хүлээх · transfer /ˈtrænsfɜːr/ — шилжүүлэх<br>
        arrange /əˈreɪndʒ/ — зохион байгуулах · confirm /kənˈfɜːrm/ — баталгаажуулах · misunderstand /ˌmɪsʌndərˈstænd/ — буруу ойлгох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It seems that there is a mistake» ✓ зөв ч <b>that</b> орхиж болно: <b>It seems there's a mistake</b> ✓. Мөн «Actually» = «үнэндээ» (одоо биш!) — «At the moment» ⟷ «Actually» андуурч болохгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хатуу үгийн өмнө IT SEEMS / I'M AFRAID / ACTUALLY тавь» — гурван шидэт зөөлрүүлэгч.</p>`
    },
    phrases:[
      {en:"I'm afraid he's not available at the moment.", pron:"айм эфрэйд хиз нот эвэйлэбл эт зэ моумэнт.", mn:"Харамсалтай нь тэр яг одоо завгүй байна."},
      {en:"It seems there's a mistake in my order.", pron:"ит сиймз зэрз э мистэйк ин май ордэр.", mn:"Захиалгад минь алдаа гарсан бололтой."},
      {en:"Apparently, the parcel was sent yesterday.", pron:"эпэрэнтли, зэ парсл воз сэнт йестэрдэй.", mn:"Илгээмжийг өчигдөр илгээсэн гэнэ лээ."},
      {en:"Actually, I think there's been a misunderstanding.", pron:"экчуэли, ай синк зэрз бийн э мисандэрстэндинг.", mn:"Үнэндээ үл ойлголцол гарсан бололтой."},
      {en:"Could you hold on? I'll transfer you.", pron:"күд ю хоулд он? айл трэнсфөр ю.", mn:"Түр хүлээж болох уу? Шилжүүлье."}
    ],
    exercises:[
      {q:"Зөөлрүүлэх:", parts:["", " he's not available."], opts:["I'm afraid","No,"], a:0, fix:"Эелдэг → I'm afraid."},
      {q:"Зөөлрүүлэх:", parts:["", " there's a mistake."], opts:["It seems","You made"], a:0, fix:"Шууд буруутгахгүй → It seems."},
      {q:"Сонссон мэдээ:", parts:["", ", the parcel was sent."], opts:["Apparently","Actually"], a:0, fix:"Сонссон → Apparently."},
      {q:"Зөрчилдөх:", parts:["", ", I think you're wrong."], opts:["Actually","Apparently"], a:0, fix:"Эелдэг зөрчилдөх → Actually."}
    ],
    speak:{ scene:'Утсаар асуудал шийдэх', turns:[
      {ruby:"Hello, this is customer service. How can I help?", pron:"хэлоу, зис из кастэмэр сөрвис. хау кэн ай хэлп?", mn:"Байна уу, үйлчилгээний алба байна. Юугаар туслах вэ?",
        choices:[{t:"Hi. It seems there's a mistake in my order.",best:true,mn:"Сайн уу. Захиалгад минь алдаа гарсан бололтой."},{t:"Hi. You made a mistake in my order.",best:false,fix:"Шууд буруутгах ✗ → IT SEEMS there's a mistake."}]},
      {ruby:"Let me check... Apparently, it was sent yesterday.", pron:"лет ми чэк... эпэрэнтли, ит воз сэнт йестэрдэй.", mn:"Шалгаад үзье... Өчигдөр илгээсэн гэнэ лээ.",
        choices:[{t:"Actually, I think there's been a misunderstanding — I cancelled it.",best:true,mn:"Үнэндээ үл ойлголцол гарсан бололтой — би цуцалсан."},{t:"No, that's wrong. I cancelled it.",best:false,fix:"Бүдүүлэг ✗ → ACTUALLY, I think there's been a misunderstanding."}]},
      {ruby:"Oh! Could you hold on? I'll transfer you to my manager.", pron:"оу! күд ю хоулд он? айл трэнсфөр ю ту май мэнэжэр.", mn:"Өө! Түр хүлээж болох уу? Менежерт шилжүүлье.",
        choices:[{t:"Of course. I was wondering if she could call me back?",best:true,mn:"Мэдээж. Тэр над руу буцаж залгаж болох болов уу?"},{t:"Ok. Can she call back me?",best:false,fix:"I was wondering if she COULD call me BACK?"}]}
    ]}
  },
  {
    id:'a2m9l7', title:"9.7 Хүсэлт", level:"A2 · М9",
    blurb:"I would appreciate it if... — албан хүсэлт ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: албан ёсны бичгийн хүсэлт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Албан ёсны имэйл, захидлын хүсэлтийн хэллэгүүд.<br><br>
        <b>Албан ёсны хүсэлтийн 3 хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">I would be grateful IF you COULD send me...</span><span class="tag">I would appreciate IT IF you COULD reply soon.</span><span class="tag">Would it be possible TO change my booking?</span></div>
        <b>⚠️ «appreciate IT if» — «it» заавал!</b>
        <div style="margin:12px 0"><span class="tag">I would appreciate if ✗ → I would appreciate IT if ✓</span></div>
        <b>Албан имэйлийн бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">Dear Sir/Madam, · I am writing to... · I would be grateful if... · I look forward to hearing from you. · Yours faithfully,</span></div>
        <b>look forward TO + -ING!</b> (to нь угтвар — I look forward to hearING ✓)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        request /rɪˈkwest/ — хүсэлт · formal /ˈfɔːrml/ — албан ёсны · grateful /ˈɡreɪtfl/ — талархсан<br>
        possible /ˈpɒsəbl/ — боломжтой · booking /ˈbʊkɪŋ/ — захиалга · attach /əˈtætʃ/ — хавсаргах<br>
        inform /ɪnˈfɔːrm/ — мэдэгдэх · regarding /rɪˈɡɑːrdɪŋ/ — -ийн талаар · enquiry /ɪnˈkwaɪəri/ — лавлагаа<br>
        respond /rɪˈspɒnd/ — хариулах · sincerely /sɪnˈsɪrli/ — чин сэтгэлээсээ · faithfully /ˈfeɪθfəli/ — үнэнчээр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I look forward to hear from you» ✗ — «to» энд угтвар! → <b>to hearING</b> ✓. Энэ бол албан имэйлийн хамгийн түгээмэл алдаа.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «appreciate IT if · look forward TO + -ING» — хоёр жижиг зүйл, том ялгаа.</p>`
    },
    phrases:[
      {en:"I am writing to request a change to my booking.", pron:"ай эм райтинг ту рикуэст э чэйнж ту май букинг.", mn:"Захиалгадаа өөрчлөлт хийхийг хүсч бичиж байна."},
      {en:"I would be grateful if you could reply soon.", pron:"ай вүд би грэйтфул иф ю күд риплай сүн.", mn:"Удахгүй хариу өгвөл талархах болно."},
      {en:"I would appreciate it if you could send me a receipt.", pron:"ай вүд эприщиэйт ит иф ю күд сэнд ми э рисийт.", mn:"Надад баримт илгээж өгвөл талархах болно."},
      {en:"Would it be possible to change the date?", pron:"вүд ит би посэбл ту чэйнж зэ дэйт?", mn:"Огноог өөрчлөх боломжтой юу?"},
      {en:"I look forward to hearing from you.", pron:"ай лүк форвөрд ту хийринг фром ю.", mn:"Танаас хариу хүлээж байна."}
    ],
    exercises:[
      {q:"it мартав уу:", parts:["I would appreciate ", " if you could reply."], opts:["it","—"], a:0, fix:"appreciate IT if."},
      {q:"to + :", parts:["I look forward to ", " from you."], opts:["hearing","hear"], a:0, fix:"«to» угтвар → hearING."},
      {q:"Цаг:", parts:["I'd be grateful if you ", " help."], opts:["could","can"], a:0, fix:"would-тэй → could."},
      {q:"Бүтэц:", parts:["Would it be possible ", " change it?"], opts:["to","—"], a:0, fix:"possible TO change."}
    ],
    speak:{ scene:'Албан хүсэлт бичих', turns:[
      {ruby:"You're writing to the hotel? How will you start?", pron:"юр райтинг ту зэ хоутэл? хау вил ю старт?", mn:"Зочид буудал руу бичиж байна уу? Яаж эхлэх вэ?",
        choices:[{t:"Dear Sir or Madam, I am writing to request a change to my booking.",best:true,mn:"Эрхэм хүндэт..., Захиалгадаа өөрчлөлт хийхийг хүсч бичиж байна."},{t:"Hi! I want to change my booking.",best:false,fix:"Албан ёсны → Dear Sir or Madam, I AM WRITING TO REQUEST..."}]},
      {ruby:"And the request itself?", pron:"энд зэ рикуэст итсэлф?", mn:"Хүсэлтээ өөрөө?",
        choices:[{t:"Would it be possible to change the date to July 10th?",best:true,mn:"Огноог 7-р сарын 10 болгож өөрчлөх боломжтой юу?"},{t:"Would it be possible change date to July 10?",best:false,fix:"possible TO change... July 10TH."}]},
      {ruby:"How will you finish?", pron:"хау вил ю финиш?", mn:"Яаж дуусгах вэ?",
        choices:[{t:"I would appreciate it if you could confirm. I look forward to hearing from you.",best:true,mn:"Баталгаажуулж өгвөл талархах болно. Танаас хариу хүлээж байна."},{t:"I would appreciate if you confirm. I look forward to hear from you.",best:false,fix:"appreciate IT if you COULD... forward to HEARING."}]}
    ]}
  },
  {
    id:'a2m9l8', title:"9.8 Тайлбар", level:"A2 · М9",
    blurb:"because of / due to / that's why — шалтгаан ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: because ⟷ because of ⟷ due to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Шалтгаанаа нарийн, зөв бүтцээр тайлбарлах.<br><br>
        <b>⚠️ Гол ялгаа — араас нь юу ирэх вэ:</b>
        <div style="margin:12px 0"><span class="tag">BECAUSE + ӨГҮҮЛБЭР: We were late BECAUSE the bus broke down.</span><span class="tag">BECAUSE OF + НЭР ҮГ: We were late BECAUSE OF the traffic.</span><span class="tag">DUE TO + НЭР ҮГ (албан ёсны): The delay was DUE TO bad weather.</span></div>
        <b>Үр дүн талаас:</b>
        <div style="margin:12px 0"><span class="tag">SO + өгүүлбэр: The bus broke down, SO we were late. (М1)</span><span class="tag">THAT'S WHY + өгүүлбэр: The bus broke down. THAT'S WHY we were late.</span></div>
        <b>Бүтцийн зураглал:</b>
        <div style="margin:12px 0"><span class="tag">because / so / that's why → ӨГҮҮЛБЭР</span><span class="tag">because of / due to → НЭР ҮГ</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        reason /ˈriːzn/ — шалтгаан · explain /ɪkˈspleɪn/ — тайлбарлах · excuse /ɪkˈskjuːs/ — шалтаг<br>
        delay /dɪˈleɪ/ — саатал · traffic /ˈtræfɪk/ — түгжрэл · break down /breɪk daʊn/ — эвдрэх<br>
        cause /kɔːz/ — шалтгаан болох · result /rɪˈzʌlt/ — үр дүн · therefore /ˈðerfɔːr/ — иймээс<br>
        unfortunately /ʌnˈfɔːrtʃənətli/ — харамсалтай нь · circumstance /ˈsɜːrkəmstæns/ — нөхцөл байдал · situation /ˌsɪtʃuˈeɪʃn/ — нөхцөл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «because of the bus broke down» ✗ → өгүүлбэртэй бол <b>because</b>: because the bus broke down ✓. Мөн «due to the weather was bad» ✗ → <b>due to bad weather</b> ✓ (нэр үг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «OF/TO харагдвал НЭР ҮГ дагана» — because OF the traffic, due TO the weather.</p>`
    },
    phrases:[
      {en:"I was late because the bus broke down.", pron:"ай воз лэйт бикоз зэ бас броук даун.", mn:"Автобус эвдэрсэн учир би хоцорсон."},
      {en:"I was late because of the traffic.", pron:"ай воз лэйт бикоз ов зэ трэфик.", mn:"Түгжрэлээс болж хоцорсон."},
      {en:"The delay was due to bad weather.", pron:"зэ дилэй воз ду ту бэд вэзэр.", mn:"Саатал муу цаг агаараас болсон."},
      {en:"My phone was off. That's why I didn't answer.", pron:"май фоун воз оф. зэтс вай ай диднт ансэр.", mn:"Утас минь унтарсан. Тиймээс хариулаагүй."},
      {en:"Unfortunately, I couldn't come due to a family problem.", pron:"анфорчэнэтли, ай күднт кам ду ту э фэмили проблэм.", mn:"Харамсалтай нь гэр бүлийн асуудлаас болж ирж чадаагүй."}
    ],
    exercises:[
      {q:"Өгүүлбэртэй:", parts:["I was late ", " the bus broke down."], opts:["because","because of"], a:0, fix:"Өгүүлбэр → because."},
      {q:"Нэр үгтэй:", parts:["I was late ", " the traffic."], opts:["because of","because"], a:0, fix:"Нэр үг → because of."},
      {q:"Албан ёсны:", parts:["The delay was ", " bad weather."], opts:["due to","due"], a:0, fix:"Нэр үг → due to."},
      {q:"Үр дүн:", parts:["My phone was off. ", " I didn't answer."], opts:["That's why","Because"], a:0, fix:"Үр дүн → That's why."}
    ],
    speak:{ scene:'Хоцорсон шалтгаанаа тайлбарлах', turns:[
      {ruby:"You're an hour late! What happened?", pron:"юр эн ауэр лэйт! вот хэпэнд?", mn:"Нэг цаг хоцорчихлоо! Юу болов?",
        choices:[{t:"I'm so sorry. I was late because the bus broke down.",best:true,mn:"Их уучлаарай. Автобус эвдэрсэн учир хоцорсон."},{t:"Sorry. I was late because of the bus broke down.",best:false,fix:"Өгүүлбэртэй → BECAUSE the bus broke down."}]},
      {ruby:"Why didn't you call me?", pron:"вай диднт ю кол ми?", mn:"Яагаад над руу залгаагүй юм бэ?",
        choices:[{t:"My phone battery was dead. That's why I couldn't call.",best:true,mn:"Утасны батарей минь дууссан. Тиймээс залгаж чадаагүй."},{t:"My phone was dead. Because of that I can't call.",best:false,fix:"THAT'S WHY I COULDN'T call."}]},
      {ruby:"OK, I understand. Is everything fine now?", pron:"оукэй, ай андэрстэнд. из эврисинг файн нау?", mn:"За, ойлголоо. Одоо бүх юм зүгээр үү?",
        choices:[{t:"Yes, thanks. The delay was due to bad weather too — it was a terrible day!",best:true,mn:"Тийм, баярлалаа. Саатал муу цаг агаараас ч болсон — аймшигтай өдөр байлаа!"},{t:"Yes. The delay was due to the weather was bad.",best:false,fix:"due to BAD WEATHER (нэр үг!)."}]}
    ]}
  },
  {
    id:'a2m9l9', title:"9.9 Албан бус имэйл", level:"A2 · М9",
    blurb:"Hi ⟷ Dear Sir — албан ба албан бус ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: formal ⟷ informal register",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэнд бичиж байгаагаас хамаарч ХЭЛНИЙ ХЭВ ШИНЖ өөрчлөгдөнө.<br><br>
        <b>Хос харьцуулалт:</b>
        <div style="margin:12px 0"><span class="tag">Мэндчилгээ: Hi Saraa! ⟷ Dear Ms Bat,</span><span class="tag">Эхлэл: Just wanted to say... ⟷ I am writing to inform you...</span><span class="tag">Хүсэлт: Can you...? ⟷ I would be grateful if you could...</span><span class="tag">Уучлал: Sorry! ⟷ I apologize for...</span><span class="tag">Төгсгөл: See you! / Love ⟷ Yours sincerely,</span></div>
        <b>Албан бус шинж:</b> товчилсон үг (I'm, don't) · хэлц үйл үг (find out) · анхаарлын тэмдэг!<br>
        <b>Албан ёсны шинж:</b> бүтэн үг (I am, do not) · «том» үйл үг (discover) · идэвхгүй хэлбэр.
        <div style="margin:12px 0"><span class="tag">Албан бус: I'll find out. · Албан ёсны: I will discover / I will look into it.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        greeting /ˈɡriːtɪŋ/ — мэндчилгээ · informal /ɪnˈfɔːrml/ — албан бус · formal /ˈfɔːrml/ — албан ёсны<br>
        polite /pəˈlaɪt/ — эелдэг · friendly /ˈfrendli/ — найрсаг · style /staɪl/ — хэв маяг<br>
        contraction /kənˈtrækʃn/ — товчилсон хэлбэр · phrase /freɪz/ — хэллэг · tone /toʊn/ — өнгө аяс<br>
        appropriate /əˈproʊpriət/ — тохиромжтой · colleague /ˈkɒliːɡ/ — хамт олон · client /ˈklaɪənt/ — үйлчлүүлэгч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Найздаа «Dear Sir» ✗ (хэтэрхий хүйтэн), даргадаа «Hey!» ✗ (хэтэрхий дотно). Мөн: <b>Dear Sir/Madam → Yours faithfully</b> · <b>Dear Mr Bat → Yours sincerely</b> — хос нь тогтмол!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэрийг МЭДЭХГҮЙ бол faithfully · МЭДЭЖ байвал sincerely».</p>`
    },
    phrases:[
      {en:"Hi Saraa! Just wanted to say thanks for yesterday.", pron:"хай Сараа! жаст вонтид ту сэй сэнкс фор йестэрдэй.", mn:"Сайн уу Сараа! Өчигдрийнхөө төлөө баярлалаа гэж хэлмээр байна."},
      {en:"Dear Ms Bat, I am writing to inform you about the delay.", pron:"диэр миз Бат, ай эм райтинг ту информ ю эбаут зэ дилэй.", mn:"Хүндэт Бат гуай, саатлын талаар мэдэгдэхээр бичиж байна."},
      {en:"Sorry I'm late — my bus broke down!", pron:"сори айм лэйт — май бас броук даун!", mn:"Хоцорсонд уучлаарай — автобус минь эвдэрсэн!"},
      {en:"I apologize for the inconvenience caused.", pron:"ай эположайз фор зэ инкэнвиниэнс козд.", mn:"Учруулсан таагүй байдалд уучлалт гуйж байна."},
      {en:"See you soon! Love, Enkhmaa", pron:"сий ю сүн! лав, Энхмаа", mn:"Удахгүй уулзъя! Хайртай, Энхмаа"}
    ],
    exercises:[
      {q:"Найздаа:", parts:["", " Saraa! How are you?"], opts:["Hi","Dear Sir"], a:0, fix:"Найзад → Hi Saraa!"},
      {q:"Албан ёсны:", parts:["", " Sir or Madam, I am writing..."], opts:["Dear","Hi"], a:0, fix:"Албан ёсны → Dear Sir or Madam."},
      {q:"Хос:", parts:["Dear Sir or Madam ... Yours ", ","], opts:["faithfully","sincerely"], a:0, fix:"Нэр мэдэхгүй → faithfully."},
      {q:"Хос:", parts:["Dear Mr Bat ... Yours ", ","], opts:["sincerely","faithfully"], a:0, fix:"Нэр мэдэж байна → sincerely."}
    ],
    speak:{ scene:'Имэйлийн хэв маяг сонгох', turns:[
      {ruby:"I'm writing to a hotel manager I don't know. How do I start?", pron:"айм райтинг ту э хоутэл мэнэжэр ай доунт ноу. хау ду ай старт?", mn:"Танихгүй зочид буудлын менежерт бичиж байна. Яаж эхлэх вэ?",
        choices:[{t:"Dear Sir or Madam, I am writing to inform you about a problem.",best:true,mn:"Эрхэм хүндэт..., асуудлын талаар мэдэгдэхээр бичиж байна."},{t:"Hi! I'm writing about a problem.",best:false,fix:"Танихгүй, албан ёсны → Dear Sir or Madam, I AM writing."}]},
      {ruby:"And how should I finish it?", pron:"энд хау шүд ай финиш ит?", mn:"Яаж дуусгах вэ?",
        choices:[{t:"Yours faithfully, because you don't know their name.",best:true,mn:"Yours faithfully, учир нь нэрийг нь мэдэхгүй."},{t:"Yours sincerely, because it's formal.",best:false,fix:"Нэр МЭДЭХГҮЙ → faithfully (sincerely = нэр мэдэж байвал)."}]},
      {ruby:"What about the email to my friend Saraa?", pron:"вот эбаут зэ иймэйл ту май фрэнд Сараа?", mn:"Найз Сараад бичих имэйл яах вэ?",
        choices:[{t:"Hi Saraa! Just wanted to say thanks. See you soon!",best:true,mn:"Сайн уу Сараа! Баярлалаа гэж хэлмээр байсан. Удахгүй уулзъя!"},{t:"Dear Ms Saraa, I am writing to thank you.",best:false,fix:"Найзад хэт албан ёсны ✗ → Hi Saraa!"}]}
    ]}
  },
  {
    id:'a2m9l10', title:"9.10 Модулийн төсөл", level:"A2 · М9",
    blurb:"🏆 Гомдлын албан имэйл бичих",
    rule:{
      h:"Давтлага: A2 Модуль 9-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 9-ийн мэдлэгээ нэгтгэж, жинхэнэ албан гомдол бичих.<br><br>
        <b>Модуль 9-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">Do you mind IF I sit? ⟷ Would you mind waitING?</span><span class="tag">send it TO me · explain it TO me</span><span class="tag">I'd rather HAVE ⟷ I'd prefer TO have ⭐</span><span class="tag">There's something wrong WITH · complain TO/ABOUT</span><span class="tag">I was wondering if you COULD ⭐</span><span class="tag">It seems / Apparently / I'm afraid ⭐</span><span class="tag">I would appreciate IT if · look forward TO hearING ⭐</span><span class="tag">because + өгүүлбэр ⟷ because OF + нэр үг ⭐</span><span class="tag">Dear Sir → Yours faithfully</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Гомдлын албан имэйл (15+ өгүүлбэр):</b> Зочид буудалд гомдол бич! Жишээ:<br>
        <i>Dear Sir or Madam,<br>I am writing to complain about my stay at your hotel last weekend. I'm afraid there were several problems. Firstly, the room was very noisy because of the building work outside. I complained to the receptionist, but nothing changed. Secondly, it seems there was a mistake in my bill — I was charged twice for breakfast. I was wondering if you could look into this. I would rather have a refund than a voucher. I would appreciate it if you could reply within seven days. I look forward to hearing from you.<br>Yours faithfully, Enkhmaa</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Гомдлын имэйлийн 4 давхар: <b>Мэндчилгээ</b> (Dear Sir) → <b>Асуудал</b> (I'm afraid... It seems...) → <b>Хүсэлт</b> (I was wondering if...) → <b>Төгсгөл</b> (Yours faithfully).</p>`
    },
    phrases:[
      {en:"I am writing to complain about my stay last weekend.", pron:"ай эм райтинг ту комплэйн эбаут май стэй ласт викэнд.", mn:"Өнгөрсөн амралтын өдрийн байрлалын талаар гомдоллохоор бичиж байна."},
      {en:"The room was noisy because of the building work.", pron:"зэ рум воз нойзи бикоз ов зэ билдинг вөрк.", mn:"Барилгын ажлаас болж өрөө чимээтэй байлаа."},
      {en:"It seems there was a mistake in my bill.", pron:"ит сиймз зэр воз э мистэйк ин май бил.", mn:"Тооцоонд минь алдаа гарсан бололтой."},
      {en:"I was wondering if you could look into this.", pron:"ай воз вандэринг иф ю күд лүк инту зис.", mn:"Үүнийг шалгаж өгч болох болов уу?"},
      {en:"I would appreciate it if you could reply soon.", pron:"ай вүд эприщиэйт ит иф ю күд риплай сүн.", mn:"Удахгүй хариу өгвөл талархах болно."}
    ],
    exercises:[
      {q:"Давтлага (rather):", parts:["I'd rather ", " a refund."], opts:["have","to have"], a:0, fix:"'d rather HAVE."},
      {q:"Давтлага (because of):", parts:["It was noisy ", " the traffic."], opts:["because of","because"], a:0, fix:"Нэр үг → because of."},
      {q:"Давтлага (wondering):", parts:["I was wondering if you ", " help."], opts:["could","can"], a:0, fix:"was-тэй → could."},
      {q:"Давтлага (forward):", parts:["I look forward to ", " from you."], opts:["hearing","hear"], a:0, fix:"to + -ING."}
    ],
    speak:{ scene:'🏆 Төсөл: Гомдлын имэйл', turns:[
      {ruby:"You're writing a complaint to the hotel? How do you start?", pron:"юр райтинг э комплэйнт ту зэ хоутэл? хау ду ю старт?", mn:"Зочид буудалд гомдол бичиж байна уу? Яаж эхлэх вэ?",
        choices:[{t:"Dear Sir or Madam, I am writing to complain about my stay last weekend.",best:true,mn:"Эрхэм хүндэт..., өнгөрсөн амралтын байрлалын талаар гомдоллохоор бичиж байна."},{t:"Hi! I want to complain my stay last weekend.",best:false,fix:"Албан ёсны → Dear Sir or Madam. complain ABOUT my stay."}]},
      {ruby:"What were the problems?", pron:"вот вөр зэ проблэмз?", mn:"Ямар асуудал гарсан бэ?",
        choices:[{t:"Firstly, the room was noisy because of the building work. Secondly, it seems there was a mistake in my bill.",best:true,mn:"Нэгдүгээрт, барилгын ажлаас болж өрөө чимээтэй байсан. Хоёрдугаарт, тооцоонд алдаа гарсан бололтой."},{t:"First, room was noisy because of the building work was loud. Second, was a mistake in bill.",best:false,fix:"Firstly... because of THE BUILDING WORK (нэр үг). Secondly, IT SEEMS THERE WAS a mistake."}]},
      {ruby:"And what do you want them to do?", pron:"энд вот ду ю вонт зэм ту ду?", mn:"Тэднийг юу хийгээсэй гэж хүсэж байна?",
        choices:[{t:"I was wondering if you could look into this. I'd rather have a refund than a voucher.",best:true,mn:"Үүнийг шалгаж өгч болох болов уу? Эрхийн бичгээс мөнгөө буцааж авсан нь дээр."},{t:"I wonder if you can look this. I'd rather to have refund to a voucher.",best:false,fix:"I WAS wondering if you COULD look INTO this. 'd rather HAVE a refund THAN a voucher."}]}
    ]}
  },
  {
    id:'a2m10l1', title:"10.1 Өдөр тутмын яриа", level:"A2 · М10",
    blurb:"How's it going? — small talk ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: яриа эхлүүлэх, үргэлжлүүлэх, дуусгах",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Богино яриа (small talk) — англи соёлын амин чухал ур чадвар.<br><br>
        <b>1) ЭХЛҮҮЛЭХ:</b>
        <div style="margin:12px 0"><span class="tag">How's it going? · How have you been? · Long time no see!</span><span class="tag">Цаг агаар: Lovely day, isn't it? (question tag — М3!)</span></div>
        <b>2) ҮРГЭЛЖЛҮҮЛЭХ (хамгийн чухал!):</b>
        <div style="margin:12px 0"><span class="tag">Really? · That's interesting! · Oh, I see. · Tell me more!</span><span class="tag">Буцааж асуу: How about you? · And you?</span></div>
        <b>3) ДУУСГАХ (эелдэгээр):</b>
        <div style="margin:12px 0"><span class="tag">Anyway, I'd better go. (М8 — had better!)</span><span class="tag">It was nice talking to you. · See you soon!</span></div>
        <b>⚠️ Ганц үгээр хариулах нь ярианы алуурчин:</b>
        <div style="margin:12px 0"><span class="tag">«How was your weekend?» — «Good.» ✗ (яриа дуусав)</span><span class="tag">«Good, thanks! I went to the countryside. How about you?» ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        chat /tʃæt/ — хөөрөлдөх · conversation /ˌkɒnvərˈseɪʃn/ — яриа · catch up /kætʃ ʌp/ — сүүлийн үеийг ярих<br>
        anyway /ˈeniweɪ/ — ямар ч байсан · by the way /baɪ ðə weɪ/ — дашрамд · sounds /saʊndz/ — сонсогдох<br>
        awkward /ˈɔːkwərd/ — эвгүй · silence /ˈsaɪləns/ — чимээгүй байдал · topic /ˈtɒpɪk/ — сэдэв<br>
        interested /ˈɪntrəstɪd/ — сонирхсон · react /riˈækt/ — хариу үзүүлэх · natural /ˈnætʃrəl/ — жам ёсны</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Монголчууд шууд гол сэдэв рүү ордог ч англид эхлээд small talk хийдэг. Мөн <b>«How are you?» бол жинхэнэ асуулт биш</b> — «Fine, thanks. And you?» гэж хариулаад цааш яв!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Ярианы 3 алхам: <b>Эхлүүл → Хариу үзүүл + буцааж асуу → Эелдэг дуусга</b>.</p>`
    },
    phrases:[
      {en:"Hi! How's it going?", pron:"хай! хауз ит гоуинг?", mn:"Сайн уу! Юу байна?"},
      {en:"Long time no see! How have you been?", pron:"лонг тайм ноу сий! хау хэв ю бийн?", mn:"Уулзаагүй удлаа! Сайн байна уу?"},
      {en:"Really? That's interesting! Tell me more.", pron:"риали? зэтс интрэстинг! тэл ми мор.", mn:"Үнэхээр үү? Сонирхолтой юм! Дэлгэрэнгүй яриач."},
      {en:"I went to the countryside. How about you?", pron:"ай вэнт ту зэ кантрисайд. хау эбаут ю?", mn:"Би хөдөө явсан. Та яасан бэ?"},
      {en:"Anyway, I'd better go. It was nice talking to you!", pron:"энивэй, айд бэтэр гоу. ит воз найс токинг ту ю!", mn:"Ямар ч байсан явъя. Тантай ярилцахад таатай байлаа!"}
    ],
    exercises:[
      {q:"Эхлүүлэх:", parts:["Hi! ", " it going?"], opts:["How's","How is"], a:0, fix:"Ярианд → How's it going?"},
      {q:"Буцааж асуух:", parts:["I went to the park. ", " you?"], opts:["How about","How"], a:0, fix:"How about you?"},
      {q:"Хариу үзүүлэх:", parts:["", "? That's interesting!"], opts:["Really","Yes"], a:0, fix:"Сонирхол → Really?"},
      {q:"Дуусгах:", parts:["", ", I'd better go."], opts:["Anyway","Because"], a:0, fix:"Эелдэг дуусгах → Anyway."}
    ],
    speak:{ scene:'Найзтайгаа таарах', turns:[
      {ruby:"Hey! Long time no see! How have you been?", pron:"хэй! лонг тайм ноу сий! хау хэв ю бийн?", mn:"Хөөе! Уулзаагүй удлаа! Сайн байна уу?",
        choices:[{t:"Great, thanks! I've been really busy at work. How about you?",best:true,mn:"Сайн, баярлалаа! Ажил дээрээ их завгүй байлаа. Та яасан бэ?"},{t:"Good.",best:false,fix:"Ганц үг = яриа дуусна! → Great, thanks! ... How about you?"}]},
      {ruby:"Not bad. I've just come back from Japan, actually!", pron:"нот бэд. айв жаст кам бэк фром Жэпэн, экчуэли!", mn:"Дажгүй. Үнэндээ саяхан Японоос ирсэн!",
        choices:[{t:"Really? That's interesting! Tell me more.",best:true,mn:"Үнэхээр үү? Сонирхолтой юм! Дэлгэрэнгүй яриач."},{t:"Ok. Nice.",best:false,fix:"Хариу үзүүл! → Really? That's interesting!"}]},
      {ruby:"It was amazing! But I have a meeting in five minutes...", pron:"ит воз эмэйзинг! бат ай хэв э мийтинг ин файв минитс...", mn:"Гайхалтай байсан! Гэхдээ 5 минутын дараа уулзалттай...",
        choices:[{t:"No problem! Anyway, it was nice talking to you. See you soon!",best:true,mn:"Асуудалгүй! Ямар ч байсан тантай ярилцахад таатай байлаа. Удахгүй уулзъя!"},{t:"Ok bye.",best:false,fix:"Эелдэг дуусга → Anyway, it was nice talking to you!"}]}
    ]}
  },
  {
    id:'a2m10l2', title:"10.2 Өнгөрсөн ба одоо", level:"A2 · М10",
    blurb:"🗺️ 4 өнгөрсөн цагийн бүрэн зураглал ⭐⭐",
    rule:{
      h:"Давтлага: өнгөрсөн ба одоог холбогч цагууд",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ 4 цагийг НЭГ ЗУРАГЛАЛД харах — A2-ийн гол ойлголт!<br><br>
        <b>Шийдвэрийн мод — 3 асуулт:</b>
        <div style="margin:12px 0"><span class="tag">1. Тодорхой ЦАГ бий юу? (yesterday, last year) → PAST SIMPLE: I went there yesterday.</span><span class="tag">2. Тэр үед ҮРГЭЛЖИЛЖ байсан уу? → PAST CONTINUOUS: I was cooking when he called.</span><span class="tag">3. Одоо хүртэл ХОЛБОО бий юу? → PRESENT PERFECT: I have lived here for 3 years.</span><span class="tag">4. Үйл явцыг онцолж байна уу? → PP CONTINUOUS: I have been waiting for an hour.</span></div>
        <b>Дохио үгсийн хүснэгт:</b>
        <div style="margin:12px 0"><span class="tag">Past Simple: yesterday · last week · in 2020 · ago · when I was young</span><span class="tag">Past Continuous: while · when (богиноны хамт) · at 5 o'clock yesterday</span><span class="tag">Present Perfect: ever · never · just · already · yet · so far · for/since</span><span class="tag">PP Continuous: for/since + үйл явц (How long have you been...?)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        recently /ˈriːsntli/ — саяхан · lately /ˈleɪtli/ — сүүлийн үед · nowadays /ˈnaʊədeɪz/ — өнөө үед<br>
        these days /ðiːz deɪz/ — сүүлийн үед · back then /bæk ðen/ — тэр үед · in those days /ɪn ðoʊz deɪz/ — тэр үед<br>
        childhood /ˈtʃaɪldhʊd/ — бага нас · experience /ɪkˈspɪriəns/ — туршлага · change /tʃeɪndʒ/ — өөрчлөлт<br>
        compare /kəmˈper/ — харьцуулах · remember /rɪˈmembər/ — санах · forget /fərˈɡet/ — мартах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа №1:</b> «I have been there yesterday» ✗ — <b>yesterday</b> = тодорхой цаг → <b>I WENT there yesterday</b> ✓<br>
        <b>№2:</b> «I live here for 3 years» ✗ → одоо хүртэл → <b>I HAVE LIVED here for 3 years</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Цагийн үг харагдвал PAST SIMPLE · for/since харагдвал PRESENT PERFECT».</p>`
    },
    phrases:[
      {en:"I went to Japan in 2019.", pron:"ай вэнт ту Жэпэн ин твэнти найнтийн.", mn:"Би 2019 онд Япон явсан."},
      {en:"I have been to Japan twice.", pron:"айв бийн ту Жэпэн твайс.", mn:"Би Японд хоёр удаа очсон."},
      {en:"I was working when you called.", pron:"ай воз вөркинг вэн ю колд.", mn:"Чамайг залгахад би ажиллаж байсан."},
      {en:"I have lived here since 2020.", pron:"айв ливд хийр синс твэнти твэнти.", mn:"Би 2020 оноос хойш энд амьдарч байна."},
      {en:"I have been learning English for two years.", pron:"айв бийн лөрнинг Инглиш фор ту йирз.", mn:"Би хоёр жил англи хэл сурч байна."}
    ],
    exercises:[
      {q:"Тодорхой цаг:", parts:["I ", " there in 2019."], opts:["went","have been"], a:0, fix:"in 2019 → Past Simple."},
      {q:"Одоо хүртэл:", parts:["I ", " here since 2020."], opts:["have lived","lived"], a:0, fix:"since → Present Perfect."},
      {q:"Тасалдал:", parts:["I ", " when you called."], opts:["was working","worked"], a:0, fix:"Урт үйлдэл → was working."},
      {q:"Үйл явц:", parts:["I have ", " learning for 2 years."], opts:["been","—"], a:0, fix:"Үргэлжилж буй → have BEEN learning."}
    ],
    speak:{ scene:'Амьдралын өөрчлөлт', turns:[
      {ruby:"How long have you lived in Ulaanbaatar?", pron:"хау лонг хэв ю ливд ин Улаанбаатар?", mn:"Улаанбаатарт хэдэн жил амьдарч байна вэ?",
        choices:[{t:"I've lived here since 2020. Before that, I lived in Darkhan.",best:true,mn:"2020 оноос хойш энд амьдарч байна. Түүнээс өмнө Дарханд амьдарсан."},{t:"I live here since 2020. Before I have lived in Darkhan.",best:false,fix:"I'VE LIVED since 2020. Before that, I LIVED in Darkhan."}]},
      {ruby:"Have you ever been abroad?", pron:"хэв ю эвэр бийн эброд?", mn:"Гадаад явж байсан уу?",
        choices:[{t:"Yes, I've been to Japan twice. I went there in 2019 and 2022.",best:true,mn:"Тийм, Японд хоёр удаа очсон. 2019, 2022 онд явсан."},{t:"Yes, I have been to Japan in 2019.",best:false,fix:"Тодорхой цаг → I WENT there in 2019."}]},
      {ruby:"Are you still studying English?", pron:"а ю стил стадиинг Инглиш?", mn:"Одоо ч англи хэл сурч байна уу?",
        choices:[{t:"Yes! I've been learning it for two years now.",best:true,mn:"Тийм! Хоёр жил сурч байна."},{t:"Yes! I learn it for two years now.",best:false,fix:"I'VE BEEN LEARNING it for two years."}]}
    ]}
  },
  {
    id:'a2m10l3', title:"10.3 Ирээдүйн төлөвлөгөө", level:"A2 · М10",
    blurb:"🗺️ 5 ирээдүйн хэлбэрийн зураглал ⭐⭐",
    rule:{
      h:"Давтлага: ирээдүйн бүх хэлбэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ирээдүйн 5 хэлбэрийг ялгаж, аль нь хэзээ болохыг эцэслэн ойлгох.<br><br>
        <b>Шийдвэрийн мод:</b>
        <div style="margin:12px 0"><span class="tag">Хуанли дээр ТОВЛОСОН уу? → PRESENT CONTINUOUS: I'm meeting Bat at 6.</span><span class="tag">Толгойд ТӨЛӨВЛӨСӨН үү? → GOING TO: I'm going to learn Japanese.</span><span class="tag">Яг одоо ШИЙДЭВ үү / таамаг уу? → WILL: I'll help you! / It will rain.</span><span class="tag">50% магадлал уу? → MIGHT / MAY: I might go.</span><span class="tag">75% магадлал уу? → IS LIKELY TO: It's likely to rain.</span></div>
        <b>Нүдэнд харагдах шинж → GOING TO:</b> Look at those clouds — it's going to rain! (М2)<br>
        <b>Нөхцөлт ирээдүй (М2):</b> If it rains, we'll stay. (if талд will ✗!)
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        plan /plæn/ — төлөвлөгөө · goal /ɡoʊl/ — зорилго · dream /driːm/ — мөрөөдөл<br>
        hope /hoʊp/ — найдах · intend /ɪnˈtend/ — зорих · decide /dɪˈsaɪd/ — шийдэх<br>
        arrange /əˈreɪndʒ/ — товлох · achieve /əˈtʃiːv/ — амжилт гаргах · improve /ɪmˈpruːv/ — сайжруулах<br>
        continue /kənˈtɪnjuː/ — үргэлжлүүлэх · maybe /ˈmeɪbi/ — магадгүй · definitely /ˈdefɪnətli/ — гарцаагүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Бүгдийг «will» болгох. «I will visit my parents next week» — төлөвлөсөн бол <b>I'm going to visit</b> ✓, тохирсон бол <b>I'm visiting</b> ✓. Will бол зөвхөн <b>таамаг</b> ба <b>яг одоо шийдсэн</b> зүйлд!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хуанли → -ING · Толгой → GOING TO · Гэнэт → WILL».</p>`
    },
    phrases:[
      {en:"I'm meeting my friend at six tomorrow.", pron:"айм мийтинг май фрэнд эт сикс тумороу.", mn:"Маргааш 6 цагт найзтайгаа уулзана."},
      {en:"I'm going to learn Japanese next year.", pron:"айм гоуинг ту лөрн Жэпэнийз нэкст йир.", mn:"Ирэх жил япон хэл сурах бодолтой."},
      {en:"That bag looks heavy — I'll help you!", pron:"зэт бэг лүкс хэви — айл хэлп ю!", mn:"Тэр цүнх хүнд харагдаж байна — тусалъя!"},
      {en:"I might go to the concert, I'm not sure yet.", pron:"ай майт гоу ту зэ консэрт, айм нот шүр ет.", mn:"Тоглолт явж магадгүй, хараахан шийдээгүй."},
      {en:"If I pass the test, I'll start B1 in September.", pron:"иф ай пас зэ тэст, айл старт би-ван ин сэптэмбэр.", mn:"Шалгалтад тэнцвэл 9-р сард B1 эхэлнэ."}
    ],
    exercises:[
      {q:"Товлочихсон:", parts:["I ", " Bat at six tomorrow."], opts:["'m meeting","will meet"], a:0, fix:"Хуанли дээр → I'm meeting."},
      {q:"Төлөвлөсөн:", parts:["I ", " learn Japanese next year."], opts:["'m going to","will"], a:0, fix:"Толгойд төлөвлөсөн → going to."},
      {q:"Яг одоо шийдэв:", parts:["That looks heavy — I ", " help!"], opts:["'ll","'m going to"], a:0, fix:"Гэнэт шийдэв → I'll help."},
      {q:"Нөхцөл:", parts:["If I ", " the test, I'll start B1."], opts:["pass","will pass"], a:0, fix:"if талд will ✗ → pass."}
    ],
    speak:{ scene:'Ирээдүйн төлөвлөгөө', turns:[
      {ruby:"What are you doing this weekend?", pron:"вот а ю дуинг зис викэнд?", mn:"Энэ амралтаар юу хийх вэ?",
        choices:[{t:"I'm meeting my friend at six on Saturday.",best:true,mn:"Бямбад 6 цагт найзтайгаа уулзана."},{t:"I will meet my friend at six.",best:false,fix:"Товлочихсон → I'M MEETING."}]},
      {ruby:"Any bigger plans for next year?", pron:"эни бигэр плэнз фор нэкст йир?", mn:"Ирэх жилийн том төлөвлөгөө байна уу?",
        choices:[{t:"I'm going to learn Japanese. And if I pass A2, I'll start B1!",best:true,mn:"Япон хэл сурах бодолтой. A2-т тэнцвэл B1 эхэлнэ!"},{t:"I will learn Japanese. If I will pass A2, I start B1.",best:false,fix:"I'M GOING TO learn. If I PASS A2, I'LL start B1."}]},
      {ruby:"Are you coming to the concert on Friday?", pron:"а ю каминг ту зэ консэрт он фрайдэй?", mn:"Баасанд тоглолт ирэх үү?",
        choices:[{t:"I might. I'm not sure yet — it's likely to be expensive!",best:true,mn:"Магадгүй. Хараахан шийдээгүй — үнэтэй байх магадлалтай!"},{t:"Maybe. I'm not sure. It's likely be expensive.",best:false,fix:"I MIGHT. It's likely TO BE expensive."}]}
    ]}
  },
  {
    id:'a2m10l4', title:"10.4 Сонсголын стратеги", level:"A2 · М10",
    blurb:"Sorry, I didn't catch that — тодруулах ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: тодруулга гуйх",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ойлгоогүй үедээ ЗӨВ асуух — англиар ярих гол ур чадвар! (Чимээгүй байх нь хамгийн муу.)<br><br>
        <b>1) Огт сонсоогүй:</b>
        <div style="margin:12px 0"><span class="tag">Sorry, I didn't catch that. · Could you say that again, please?</span></div>
        <b>2) Хурдан ярьсан:</b>
        <div style="margin:12px 0"><span class="tag">Could you speak more slowly, please? · Sorry, you're speaking a bit fast for me.</span></div>
        <b>3) Нэг үг ойлгоогүй:</b>
        <div style="margin:12px 0"><span class="tag">What does «refund» mean? · What do you mean by «policy»?</span><span class="tag">How do you spell that? (М1 A1!)</span></div>
        <b>4) Зөв ойлгосон эсэхээ шалгах:</b>
        <div style="margin:12px 0"><span class="tag">So, you mean I have to pay first? · Let me check — is that right?</span></div>
        <b>⚠️ «What?» ✗</b> — бүдүүлэг! → <b>Sorry?</b> эсвэл <b>Pardon?</b> ✓
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        catch /kætʃ/ — сонсож ойлгох · repeat /rɪˈpiːt/ — давтах · slowly /ˈsloʊli/ — удаан<br>
        clearly /ˈklɪrli/ — тодорхой · mean /miːn/ — утга · confuse /kənˈfjuːz/ — эргэлзүүлэх<br>
        pardon /ˈpɑːrdn/ — уучлаарай · understand /ˌʌndərˈstænd/ — ойлгох · follow /ˈfɒloʊ/ — дагах (ойлгох)<br>
        accent /ˈæksent/ — аялга · guess /ɡes/ — таамаглах · context /ˈkɒntekst/ — агуулга</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Repeat, please!» ✗ (тушаал шиг) → <b>Could you repeat that, please?</b> ✓ Мөн «I don't understand you» ✗ (буруутгасан) → <b>Sorry, I didn't catch that</b> ✓ (өөр дээрээ авсан).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ойлгоогүй бол ЧИМЭЭГҮЙ БҮҮ БАЙ — асуу!» Sorry? · Could you repeat that? · What do you mean by...?</p>`
    },
    phrases:[
      {en:"Sorry, I didn't catch that.", pron:"сори, ай диднт кэтч зэт.", mn:"Уучлаарай, сонсож амжсангүй."},
      {en:"Could you say that again, please?", pron:"күд ю сэй зэт эгэн, плийз?", mn:"Дахин хэлж өгөхгүй юу?"},
      {en:"Could you speak a bit more slowly?", pron:"күд ю спийк э бит мор слоули?", mn:"Жаахан удаан ярьж болох уу?"},
      {en:"What do you mean by «refund»?", pron:"вот ду ю мийн бай рифанд?", mn:"«Refund» гэж юу гэсэн үг вэ?"},
      {en:"So, you mean I have to pay first — is that right?", pron:"соу, ю мийн ай хэв ту пэй фөрст — из зэт райт?", mn:"Тэгэхээр эхлээд төлөх ёстой гэсэн үг үү — зөв үү?"}
    ],
    exercises:[
      {q:"Эелдэг:", parts:["Sorry, I didn't ", " that."], opts:["catch","understand you"], a:0, fix:"Өөр дээрээ ав → didn't catch that."},
      {q:"Эелдэг:", parts:["", " you repeat that, please?"], opts:["Could","—"], a:0, fix:"«Repeat!» ✗ → COULD you repeat that?"},
      {q:"Утга асуух:", parts:["What do you ", " by «policy»?"], opts:["mean","say"], a:0, fix:"What do you MEAN by...?"},
      {q:"Бүдүүлэг биш:", parts:["", "? I didn't hear you."], opts:["Sorry","What"], a:0, fix:"«What?» бүдүүлэг → Sorry?"}
    ],
    speak:{ scene:'Ойлгоогүй үедээ', turns:[
      {ruby:"The refund policy is fourteen days from the purchase date.", pron:"зэ рифанд полиси из фортийн дэйз фром зэ пөрчэс дэйт.", mn:"Буцаалтын журам худалдан авалтаас хойш 14 хоног.",
        choices:[{t:"Sorry, I didn't catch that. Could you say it again, please?",best:true,mn:"Уучлаарай, сонсож амжсангүй. Дахин хэлж өгөхгүй юу?"},{t:"What? Repeat please.",best:false,fix:"«What? Repeat!» бүдүүлэг → Sorry, I didn't catch that. COULD you say it again?"}]},
      {ruby:"Of course. The refund policy is fourteen days.", pron:"ов корс. зэ рифанд полиси из фортийн дэйз.", mn:"Мэдээж. Буцаалтын журам 14 хоног.",
        choices:[{t:"Thank you. What do you mean by «policy» exactly?",best:true,mn:"Баярлалаа. «Policy» гэж яг юу гэсэн үг вэ?"},{t:"Thanks. Policy is what?",best:false,fix:"WHAT DO YOU MEAN BY «policy»?"}]},
      {ruby:"It means our rules for returning items.", pron:"ит мийнз ауэр рүлз фор ритөрнинг айтэмз.", mn:"Бараа буцаах манай дүрэм гэсэн үг.",
        choices:[{t:"I see. So, you mean I have two weeks to return it — is that right?",best:true,mn:"Ойлголоо. Тэгэхээр буцаахад 2 долоо хоног байна гэсэн үг үү — зөв үү?"},{t:"Ok. I have two weeks. Right?",best:false,fix:"SO, YOU MEAN I have two weeks — IS THAT RIGHT?"}]}
    ]}
  },
  {
    id:'a2m10l5', title:"10.5 Уншлагын стратеги", level:"A2 · М10",
    blurb:"un- / -ful / -less — үг задлах ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: үгийн бүтэц (word building)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Танихгүй үгийг ТААХ — толь бичиггүйгээр! Энэ бол уншлагын хамгийн хүчтэй арга.<br><br>
        <b>1) Угтвар (эхэнд) — утгыг ЭСРЭГ болгоно:</b>
        <div style="margin:12px 0"><span class="tag">un- : happy → UNhappy · usual → UNusual</span><span class="tag">im-/in- : possible → IMpossible · correct → INcorrect</span><span class="tag">dis- : agree → DISagree · appear → DISappear</span><span class="tag">re- : (дахин) do → REdo · use → REuse</span></div>
        <b>2) Дагавар (төгсгөл) — үгийн ТӨРЛИЙГ өөрчилнө:</b>
        <div style="margin:12px 0"><span class="tag">-ful = -тай: use → USEful (хэрэгтэй)</span><span class="tag">-less = -гүй: use → USEless (хэрэггүй)</span><span class="tag">-er/-or = хийгч: teach → teachER</span><span class="tag">-tion/-ment = нэр үг: educate → educaTION · move → moveMENT</span><span class="tag">-ly = дайвар: quick → quickLY</span></div>
        <b>Жишээ задлал:</b> «unforgettable» = un + forget + able = мартаж болохгүй = мартагдашгүй!
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        useful /ˈjuːsfl/ — хэрэгтэй · useless /ˈjuːsləs/ — хэрэггүй · careful /ˈkerfl/ — болгоомжтой<br>
        careless /ˈkerləs/ — хайхрамжгүй · unhappy /ʌnˈhæpi/ — аз жаргалгүй · impossible /ɪmˈpɒsəbl/ — боломжгүй<br>
        disagree /ˌdɪsəˈɡriː/ — санал зөрөх · reuse /ˌriːˈjuːz/ — дахин ашиглах · prefix /ˈpriːfɪks/ — угтвар<br>
        suffix /ˈsʌfɪks/ — дагавар · root /ruːt/ — үндэс · guess /ɡes/ — таамаглах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «unpossible» ✗ → зарим үг <b>im-</b> авдаг: <b>impossible</b> ✓ (p-ийн өмнө im-). Мөн «unhonest» ✗ → <b>dishonest</b> ✓ — угтвар бүр өөрийн үгтэй, цээжлэх хэрэгтэй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Танихгүй үг харвал: 1) угтвар байна уу? 2) дагавар байна уу? 3) дундах ҮНДЭС нь юу вэ?»</p>`
    },
    phrases:[
      {en:"This app is very useful for learning.", pron:"зис эп из вэри юсфул фор лөрнинг.", mn:"Энэ апп сурахад их хэрэгтэй."},
      {en:"Without a battery, the phone is useless.", pron:"визаут э бэтэри, зэ фоун из юслэс.", mn:"Батарейгүй бол утас хэрэггүй."},
      {en:"I'm sorry, but I disagree with you.", pron:"айм сори, бат ай дисэгрий виз ю.", mn:"Уучлаарай, гэхдээ би тантай санал зөрж байна."},
      {en:"It was an unforgettable experience.", pron:"ит воз эн анфоргетэбл икспириэнс.", mn:"Мартагдашгүй туршлага байлаа."},
      {en:"If you don't know a word, try to guess from the context.", pron:"иф ю доунт ноу э вөрд, трай ту гэс фром зэ контэкст.", mn:"Үг мэдэхгүй бол агуулгаас нь таахыг хичээ."}
    ],
    exercises:[
      {q:"Эсрэг:", parts:["The opposite of «happy» is «", " happy»."], opts:["un","dis"], a:0, fix:"happy → UNhappy."},
      {q:"Эсрэг:", parts:["The opposite of «possible» is «", "possible»."], opts:["im","un"], a:0, fix:"p-ийн өмнө → IMpossible."},
      {q:"Дагавар:", parts:["Something with no use is «use", "»."], opts:["less","ful"], a:0, fix:"-гүй → useLESS."},
      {q:"Дагавар:", parts:["A person who teaches is a «teach", "»."], opts:["er","ful"], a:0, fix:"Хийгч → teachER."}
    ],
    speak:{ scene:'Танихгүй үг таах', turns:[
      {ruby:"I found this word: «unforgettable». Do you know it?", pron:"ай фаунд зис вөрд: анфоргетэбл. ду ю ноу ит?", mn:"Энэ үгийг оллоо: «unforgettable». Та мэдэх үү?",
        choices:[{t:"Let me guess — un + forget + able. So it means you can't forget it!",best:true,mn:"Таая — un + forget + able. Мартаж болохгүй гэсэн үг!"},{t:"No. I look in dictionary.",best:false,fix:"Эхлээд задлаад үз! → Let me guess — un + forget + able."}]},
      {ruby:"Exactly! What about «useless»?", pron:"игзэктли! вот эбаут юслэс?", mn:"Яг зөв! «Useless» яах вэ?",
        choices:[{t:"Use + less means «no use» — so, not useful at all.",best:true,mn:"Use + less нь «хэрэггүй» гэсэн үг — огт хэрэггүй."},{t:"Use and less. Maybe small use?",best:false,fix:"-LESS = -ГҮЙ → no use at all."}]},
      {ruby:"Great strategy! And «impossible»?", pron:"грэйт стрэтэжи! энд импосэбл?", mn:"Гоё арга! «Impossible» бол?",
        choices:[{t:"Im + possible — the opposite of possible. Not «unpossible»!",best:true,mn:"Im + possible — possible-ийн эсрэг. «Unpossible» биш!"},{t:"Un + possible, so not possible.",best:false,fix:"p-ийн өмнө IM- → IMpossible (unpossible ✗)."}]}
    ]}
  },
  {
    id:'a2m10l6', title:"10.6 Бичгийн бүтэц", level:"A2 · М10",
    blurb:"Догол мөрийн бүтэц + холбоос үгс",
    rule:{
      h:"Зорилго ба дүрэм: догол мөр ба холбоос үгс",
      html:`<b>🎯 Зорилго:</b> Санаагаа цэгцтэй, уншихад хялбар бичих.<br><br>
        <b>Догол мөрийн 3 давхар (хамгийн чухал!):</b>
        <div style="margin:12px 0"><span class="tag">1. ГОЛ ӨГҮҮЛБЭР — сэдвээ хэл: I think learning English is important.</span><span class="tag">2. ТАЙЛБАР — яагаад: It helps you find a better job.</span><span class="tag">3. ЖИШЭЭ — баримт: For example, my friend got a new job after learning English.</span></div>
        <b>Холбоос үгсийн бүрэн хүснэгт (A2-д үзсэн бүгд):</b>
        <div style="margin:12px 0"><span class="tag">Нэмэх: and · also · not only ... but also</span><span class="tag">Эсрэгцүүлэх: but · however · although · whereas</span><span class="tag">Шалтгаан: because · because of · due to</span><span class="tag">Үр дүн: so · that's why · therefore</span><span class="tag">Дараалал: firstly · then · finally</span><span class="tag">Дүгнэлт: in conclusion · to sum up</span></div>
        <b>⚠️ Догол мөр бүр НЭГ санаатай!</b> Шинэ санаа → шинэ догол мөр.
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        paragraph /ˈpærəɡræf/ — догол мөр · sentence /ˈsentəns/ — өгүүлбэр · structure /ˈstrʌktʃər/ — бүтэц<br>
        main idea /meɪn aɪˈdɪə/ — гол санаа · support /səˈpɔːrt/ — нотлох · organize /ˈɔːrɡənaɪz/ — цэгцлэх<br>
        draft /dræft/ — ноорог · check /tʃek/ — шалгах · clear /klɪr/ — тодорхой<br>
        repeat /rɪˈpiːt/ — давтах · connect /kəˈnekt/ — холбох · flow /floʊ/ — урсгал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Бүх санаагаа НЭГ урт догол мөрөнд шахах ✗. Мөн «and» -аар бүгдийг холбох ✗ — олон янзын холбоос ашигла!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Догол мөрийн 3 давхар: <b>Гол санаа → Тайлбар → Жишээ</b>.</p>`
    },
    phrases:[
      {en:"I think learning English is very important.", pron:"ай синк лөрнинг Инглиш из вэри импортэнт.", mn:"Англи хэл сурах нь маш чухал гэж бодож байна."},
      {en:"It helps you find a better job.", pron:"ит хэлпс ю файнд э бэтэр жоб.", mn:"Илүү сайн ажил олоход тусалдаг."},
      {en:"For example, my friend got a new job after learning English.", pron:"фор игзэмпл, май фрэнд гот э ню жоб афтэр лөрнинг Инглиш.", mn:"Жишээ нь, найз маань англи сурсны дараа шинэ ажилтай болсон."},
      {en:"However, it takes a lot of time and effort.", pron:"хауэвэр, ит тэйкс э лот ов тайм энд эфорт.", mn:"Гэвч их цаг, хүчин чармайлт шаарддаг."},
      {en:"In conclusion, English opens many doors.", pron:"ин кэнклюжн, Инглиш оупэнз мэни дорз.", mn:"Дүгнэвэл англи хэл олон хаалга нээдэг."}
    ],
    exercises:[
      {q:"Жишээ:", parts:["", ", my friend got a new job."], opts:["For example","However"], a:0, fix:"Жишээ → For example."},
      {q:"Эсрэгцүүлэх:", parts:["", ", it takes a lot of time."], opts:["However","Because"], a:0, fix:"Эсрэгцүүлэх → However."},
      {q:"Шалтгаан:", parts:["It's useful ", " it helps you work."], opts:["because","because of"], a:0, fix:"Өгүүлбэртэй → because."},
      {q:"Дүгнэлт:", parts:["", ", English opens many doors."], opts:["In conclusion","Firstly"], a:0, fix:"Төгсгөл → In conclusion."}
    ],
    speak:{ scene:'Догол мөр бүтээх', turns:[
      {ruby:"Write a paragraph about learning English. Start with the main idea.", pron:"райт э пэрэграф эбаут лөрнинг Инглиш. старт виз зэ мэйн айдиа.", mn:"Англи хэл сурах тухай догол мөр бич. Гол санаагаар эхэл.",
        choices:[{t:"I think learning English is very important these days.",best:true,mn:"Өнөө үед англи хэл сурах маш чухал гэж бодож байна."},{t:"English is good and useful and helps and I like it.",best:false,fix:"«and»-аар бүгдийг холбохгүй! Гол санаагаа нэг өгүүлбэрээр хэл."}]},
      {ruby:"Good. Now explain why.", pron:"гүд. нау иксплэйн вай.", mn:"Сайн. Одоо яагаад гэдгээ тайлбарла.",
        choices:[{t:"It helps you find a better job. For example, my friend got a new job after learning English.",best:true,mn:"Илүү сайн ажил олоход тусалдаг. Жишээ нь, найз маань англи сурсны дараа шинэ ажилтай болсон."},{t:"Because job. My friend has new job.",best:false,fix:"Бүтэн: It HELPS you find a better job. FOR EXAMPLE, my friend GOT a new job."}]},
      {ruby:"And how will you finish the paragraph?", pron:"энд хау вил ю финиш зэ пэрэграф?", mn:"Догол мөрөө яаж дуусгах вэ?",
        choices:[{t:"However, it takes time. In conclusion, English opens many doors.",best:true,mn:"Гэвч цаг шаарддаг. Дүгнэвэл англи хэл олон хаалга нээдэг."},{t:"But it takes time. So English is good.",best:false,fix:"HOWEVER, it takes time. IN CONCLUSION, English opens many doors."}]}
    ]}
  },
  {
    id:'a2m10l7', title:"10.7 Ярианы урсгал", level:"A2 · М10",
    blurb:"Well... you know... — цаг олох үгс ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: fillers (ярианы дүүргэгч)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Бодох ЦАГ олох — чимээгүй болохоос сайн! Төрөлх хэлтэн ч ингэдэг.<br><br>
        <b>1) Цаг олох:</b>
        <div style="margin:12px 0"><span class="tag">Well, ... · Let me think... · That's a good question...</span><span class="tag">Actually, ... · You know, ...</span></div>
        <b>2) Өөрийгөө засах:</b>
        <div style="margin:12px 0"><span class="tag">I mean, ... = өөрөөр хэлбэл</span><span class="tag">Sorry, what I wanted to say is... · Or rather, ...</span></div>
        <b>3) Үг санахгүй байвал (МАШ чухал!):</b>
        <div style="margin:12px 0"><span class="tag">It's a kind of... = ...төрлийн юм</span><span class="tag">It's something you use for... = ...д хэрэглэдэг юм</span><span class="tag">How do you say... in English?</span></div>
        <b>⚠️ Монгол «яахав, за» гэдгээ бүү оруул</b> — англиар «Well» ✓, «Ehh» ✗<br>
        <b>Хэт олон filler ч муу</b> — 1-2 хангалттай!
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        fluency /ˈfluːənsi/ — чөлөөт байдал · hesitate /ˈhezɪteɪt/ — эргэлзэх · pause /pɔːz/ — түр зогсох<br>
        natural /ˈnætʃrəl/ — жам ёсны · sound /saʊnd/ — сонсогдох · fill /fɪl/ — дүүргэх<br>
        express /ɪkˈspres/ — илэрхийлэх · describe /dɪˈskraɪb/ — дүрслэх · kind of /kaɪnd əv/ — төрлийн<br>
        thing /θɪŋ/ — юм · stuff /stʌf/ — зүйл · whatever /wɒtˈevər/ — юу ч бай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Үг санахгүй бол ЧИМЭЭГҮЙ болох ✗ → <b>«It's a kind of...»</b> гэж тайлбарла! Жишээ: «шүхэр» санахгүй бол → «It's a thing you use when it rains» ✓ — тэд ойлгоно!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Чимээгүй болохоос WELL гэж хэл» — цаг олоод, тайван бод.</p>`
    },
    phrases:[
      {en:"Well, let me think about that.", pron:"вэл, лет ми синк эбаут зэт.", mn:"За, тэр талаар бодъё."},
      {en:"That's a good question, actually.", pron:"зэтс э гүд квэсчэн, экчуэли.", mn:"Үнэндээ сайн асуулт байна."},
      {en:"I mean, it's not easy to explain.", pron:"ай мийн, итс нот ийзи ту иксплэйн.", mn:"Өөрөөр хэлбэл тайлбарлахад амархан биш."},
      {en:"It's a kind of bag you use for travelling.", pron:"итс э кайнд ов бэг ю юз фор трэвлинг.", mn:"Аялахад хэрэглэдэг цүнхний төрлийн юм."},
      {en:"How do you say «шүхэр» in English?", pron:"хау ду ю сэй шүхэр ин Инглиш?", mn:"«Шүхэр»-ийг англиар яаж хэлдэг вэ?"}
    ],
    exercises:[
      {q:"Цаг олох:", parts:["", ", let me think..."], opts:["Well","Ehh"], a:0, fix:"Англиар → Well."},
      {q:"Өөрийгөө засах:", parts:["", ", what I wanted to say is..."], opts:["I mean","Because"], a:0, fix:"Засах → I mean."},
      {q:"Үг санахгүй:", parts:["It's a ", " of bag."], opts:["kind","type"], a:0, fix:"a KIND of (хоёулаа болно ч энэ түгээмэл)."},
      {q:"Асуух:", parts:["How do you ", " this in English?"], opts:["say","tell"], a:0, fix:"How do you SAY...?"}
    ],
    speak:{ scene:'Үг санахгүй байхад', turns:[
      {ruby:"What did you take with you to the countryside?", pron:"вот дид ю тэйк виз ю ту зэ кантрисайд?", mn:"Хөдөө юу авч явсан бэ?",
        choices:[{t:"Well, let me think... a tent, food, and... how do you say «шүхэр» in English?",best:true,mn:"За, бодъё... майхан, хоол, бас... «шүхэр»-ийг англиар яаж хэлдэг вэ?"},{t:"...",best:false,fix:"Чимээгүй болохгүй! → Well, let me think... How do you say ... in English?"}]},
      {ruby:"Do you mean the thing you use when it rains?", pron:"ду ю мийн зэ синг ю юз вэн ит рэйнз?", mn:"Бороо ороход хэрэглэдэг юмыг хэлж байна уу?",
        choices:[{t:"Yes! It's a kind of... you hold it over your head.",best:true,mn:"Тийм! Тэр төрлийн... толгой дээрээ бариад байдаг."},{t:"Yes. I don't know word.",best:false,fix:"Тайлбарла! → It's a kind of... you hold it over your head."}]},
      {ruby:"An umbrella! Did it rain?", pron:"эн амбрэла! дид ит рэйн?", mn:"Шүхэр! Бороо орсон уу?",
        choices:[{t:"An umbrella, right! Actually, no — it didn't rain at all. I mean, we were lucky!",best:true,mn:"Шүхэр, зөв! Үнэндээ үгүй — огт бороо ороогүй. Өөрөөр хэлбэл азтай байсан!"},{t:"Yes umbrella. No rain. Lucky.",best:false,fix:"Бүтэн: Actually, no — it DIDN'T rain. I MEAN, we WERE lucky!"}]}
    ]}
  },
  {
    id:'a2m10l8', title:"10.8 Алдаа засвар", level:"A2 · М10",
    blurb:"⚠️ Монгол суралцагчийн ТОП 12 алдаа",
    rule:{
      h:"Монгол хэлтний хамгийн түгээмэл 12 алдаа",
      html:`<b>🎯 Зорилго:</b> ⚠️ Монгол хэлний нөлөөнөөс үүдэх алдаануудыг НЭГ ДОР харж, үүрд засах!<br><br>
        <div style="margin:12px 0;line-height:2.2">
        <b>1.</b> I am 25 years ✗ → <b>I AM 25</b> (have ✗)<br>
        <b>2.</b> I am born in 1995 ✗ → <b>I WAS born</b><br>
        <b>3.</b> I live here for 3 years ✗ → <b>I HAVE LIVED here for 3 years</b><br>
        <b>4.</b> I have been there yesterday ✗ → <b>I WENT there yesterday</b><br>
        <b>5.</b> Did you bought? ✗ → <b>Did you BUY?</b><br>
        <b>6.</b> I am boring ✗ (= уйтгартай хүн!) → <b>I am borED</b><br>
        <b>7.</b> I very like it ✗ → <b>I REALLY like it</b> / <b>I like it VERY MUCH</b><br>
        <b>8.</b> Is cold today ✗ → <b>IT IS cold today</b> (эзэн заавал!)<br>
        <b>9.</b> Explain me ✗ → <b>Explain TO ME</b><br>
        <b>10.</b> I make homework ✗ → <b>I DO homework</b><br>
        <b>11.</b> If it will rain ✗ → <b>If it RAINS</b><br>
        <b>12.</b> I stopped to smoke ✗ (= татахаар зогссон!) → болих гэвэл <b>stopped smokING</b>
        </div>
        <b>Яагаад ийм алдаа гардаг вэ?</b> Монгол хэлэнд артикль, эзэн заавал байх шаардлага, Present Perfect байхгүй тул шууд орчуулахад алдаа гарна. <b>Англиар БОД, орчуулж болохгүй!</b>
        <p style="margin-top:12px"><b>📚 Үгийн сан (12):</b></p>
        <div style="font-size:14px;line-height:2">
        mistake /mɪˈsteɪk/ — алдаа · correct /kəˈrekt/ — засах/зөв · error /ˈerər/ — алдаа<br>
        common /ˈkɒmən/ — түгээмэл · avoid /əˈvɔɪd/ — зайлсхийх · notice /ˈnoʊtɪs/ — анзаарах<br>
        practise /ˈpræktɪs/ — дадлагажих · improve /ɪmˈpruːv/ — сайжруулах · accuracy /ˈækjərəsi/ — нарийвчлал<br>
        translate /trænsˈleɪt/ — орчуулах · directly /dəˈrektli/ — шууд · natural /ˈnætʃrəl/ — жам ёсны</div>
        <p style="margin-top:12px"><b>💡 Зөвлөгөө:</b> Энэ 12 алдааг засвал англи чинь <b>шууд 2 түвшин</b> дээшилнэ. Ruby-тэй ярихдаа fix хэсгийг анхааралтай уншаарай!</p>`
    },
    phrases:[
      {en:"I am thirty years old. (not: I have 30 years)", pron:"ай эм сөрти йирз оулд.", mn:"Би 30 настай."},
      {en:"I have lived here for three years. (not: I live here for 3 years)", pron:"айв ливд хийр фор срий йирз.", mn:"Би энд 3 жил амьдарч байна."},
      {en:"It is cold today. (not: Is cold today)", pron:"ит из коулд тудэй.", mn:"Өнөөдөр хүйтэн байна."},
      {en:"I really like it. (not: I very like it)", pron:"ай риали лайк ит.", mn:"Би үүнд их дуртай."},
      {en:"Could you explain it to me? (not: Explain me)", pron:"күд ю иксплэйн ит ту ми?", mn:"Надад тайлбарлаж өгөх үү?"}
    ],
    exercises:[
      {q:"⚠️ Алдаа №1:", parts:["I ", " 30 years old."], opts:["am","have"], a:0, fix:"Насанд be → I AM 30."},
      {q:"⚠️ Алдаа №3:", parts:["I ", " here for 3 years."], opts:["have lived","live"], a:0, fix:"for + одоо хүртэл → HAVE LIVED."},
      {q:"⚠️ Алдаа №6:", parts:["I am ", " with this film."], opts:["bored","boring"], a:0, fix:"Хүн → borED (boring = уйтгартай хүн!)."},
      {q:"⚠️ Алдаа №11:", parts:["If it ", " tomorrow, I'll stay."], opts:["rains","will rain"], a:0, fix:"if талд will ✗."}
    ],
    speak:{ scene:'Алдаагаа засах', turns:[
      {ruby:"Tell me about yourself. How old are you?", pron:"тэл ми эбаут ёрсэлф. хау оулд а ю?", mn:"Өөрийнхөө тухай яриач. Хэдэн настай вэ?",
        choices:[{t:"I am thirty years old, and I've lived in Ulaanbaatar for ten years.",best:true,mn:"30 настай, Улаанбаатарт 10 жил амьдарч байна."},{t:"I have thirty years and I live here for ten years.",best:false,fix:"⚠️ №1: I AM thirty. ⚠️ №3: I'VE LIVED here for ten years."}]},
      {ruby:"Did you study English at school?", pron:"дид ю стади Инглиш эт скүл?", mn:"Сургууль дээрээ англи хэл үзсэн үү?",
        choices:[{t:"Yes, I did, but I didn't practise much. I really like it now, though!",best:true,mn:"Тийм, гэхдээ их дадлага хийгээгүй. Одоо их дуртай болсон!"},{t:"Yes, I did studied. But I very like it now.",best:false,fix:"⚠️ №5: did STUDY. ⚠️ №7: I REALLY like it."}]},
      {ruby:"What will you do if you pass the A2 test?", pron:"вот вил ю ду иф ю пас зэ эй-ту тэст?", mn:"A2 шалгалтад тэнцвэл юу хийх вэ?",
        choices:[{t:"If I pass, I'll start B1! I'm not bored with English at all.",best:true,mn:"Тэнцвэл B1 эхэлнэ! Англи хэлэнд огт уйдаагүй."},{t:"If I will pass, I start B1. I'm not boring with English.",best:false,fix:"⚠️ №11: If I PASS, I'LL start. ⚠️ №6: I'm not borED."}]}
    ]}
  },
  {
    id:'a2m10l9', title:"10.9 A2 нэгдсэн төсөл", level:"A2 · М10",
    blurb:"🌟 A2-ийн бүх дүрмийн зураглал",
    rule:{
      h:"A2-ийн БҮХ дүрмийн зураглал",
      html:`<b>🎯 Зорилго:</b> 🌟 A2 курсийн 10 модулийн бүх дүрмийг нэг дор давтах.<br><br>
        <b>М1 Өнгөрсөн:</b> <span class="tag">was/were + -ing</span><span class="tag">used to</span><span class="tag">taught/wrote (V2)</span><span class="tag">was cooking WHEN he called</span><span class="tag">was written (идэвхгүй)</span><span class="tag">Who called? ⟷ Who did you call?</span><span class="tag">although/however</span><br>
        <b>М2 Аялал:</b> <span class="tag">Could you tell me where it IS?</span><span class="tag">I've just arrived / haven't ... yet ⭐</span><span class="tag">need TO ⟷ enjoy -ING</span><span class="tag">may/might</span><span class="tag">had to / couldn't</span><span class="tag">ever BEEN ⟷ GONE ⭐</span><span class="tag">If it rains, we'll ⭐</span><span class="tag">PP ⟷ Past Simple ⭐</span><br>
        <b>М3 Ажил:</b> <span class="tag">for / since ⭐</span><span class="tag">are written (одоо идэвхгүй)</span><span class="tag">by ⟷ until</span><span class="tag">do ⟷ make</span><span class="tag">be able to</span><span class="tag">question tags</span><span class="tag">who/which/where</span><span class="tag">both/neither</span><span class="tag">so ⟷ such</span><br>
        <b>М4 Харилцаа:</b> <span class="tag">bored ⟷ boring ⭐</span><span class="tag">angry WITH / proud OF</span><span class="tag">So do I / Neither do I</span><span class="tag">told me TO wait</span><span class="tag">sorry FOR -ing</span><span class="tag">If I WERE you ⭐</span><span class="tag">Would you mind -ING?</span><span class="tag">said she WAS busy ⭐</span><br>
        <b>М5 Эрүүл мэнд:</b> <span class="tag">Eating IS good</span><span class="tag">as good as</span><span class="tag">used to ⟷ be used to ⭐</span><span class="tag">look tired</span><span class="tag">have been feeling ⭐</span><span class="tag">must be taken</span><span class="tag">give up -ing</span><span class="tag">should have gone ⭐</span><span class="tag">much better</span><br>
        <b>М6 Технологи:</b> <span class="tag">log in TO</span><span class="tag">each other</span><span class="tag">unless ⭐</span><span class="tag">must be ⟷ can't be ⭐</span><span class="tag">Make sure you...</span><span class="tag">had it repaired ⭐</span><span class="tag">asked if I had ⭐</span><span class="tag">absolutely amazing</span><br>
        <b>М7 Байгаль:</b> <span class="tag">most OF THE</span><span class="tag">have been destroyed ⭐</span><span class="tag">stop -ING ⟷ stop TO ⭐</span><span class="tag">will be used ⭐</span><span class="tag">by 2050</span><span class="tag">TO save / so that</span><span class="tag">the more, the less ⭐</span><span class="tag">likely to</span><span class="tag">too late TO</span><br>
        <b>М8 Соёл:</b> <span class="tag">would visit ⭐</span><span class="tag">supposed to ⭐</span><span class="tag">not only ... but also</span><span class="tag">best I've EVER seen ⭐</span><span class="tag">, which ...</span><span class="tag">whose</span><span class="tag">unlike / whereas ⭐</span><span class="tag">had better ⭐</span><br>
        <b>М9 Үйлчилгээ:</b> <span class="tag">Do you mind IF I</span><span class="tag">send it TO me</span><span class="tag">'d rather ⟷ 'd prefer TO ⭐</span><span class="tag">I was wondering if you COULD ⭐</span><span class="tag">It seems / I'm afraid</span><span class="tag">appreciate IT if</span><span class="tag">because OF ⭐</span><br>
        <b>М10 Хэрэглээ:</b> <span class="tag">small talk</span><span class="tag">4 өнгөрсөн цаг</span><span class="tag">5 ирээдүй</span><span class="tag">Sorry, I didn't catch that</span><span class="tag">un- / -less</span><span class="tag">Well... I mean...</span>
        <p style="margin-top:14px"><b>🌟 Их төсөл (25+ өгүүлбэр):</b> «Миний англи хэлний аялал» — өнгөрсөн (used to, was learning), одоо (have been learning for...), ирээдүй (I'm going to, if I pass), мэдрэмж (I was frustrated but...), зөвлөгөө (If I were you...). Бүх дүрмээ ашигла! Ruby-д бичээд засуулаарай!</p>`
    },
    phrases:[
      {en:"I used to think English was impossible.", pron:"ай юзд ту синк Инглиш воз импосэбл.", mn:"Англи хэл боломжгүй гэж бодож байсан."},
      {en:"I've been learning for two years now.", pron:"айв бийн лөрнинг фор ту йирз нау.", mn:"Одоо хоёр жил сурч байна."},
      {en:"If I were you, I'd start today!", pron:"иф ай вөр ю, айд старт тудэй!", mn:"Би чиний оронд байсан бол өнөөдөр эхэлнэ!"},
      {en:"It's the best decision I've ever made.", pron:"итс зэ бэст дисижн айв эвэр мэйд.", mn:"Миний гаргасан хамгийн сайн шийдвэр."},
      {en:"I'm going to start B1 next month!", pron:"айм гоуинг ту старт би-ван нэкст манс!", mn:"Ирэх сард B1 эхлүүлнэ!"}
    ],
    exercises:[
      {q:"М3 (for/since):", parts:["I've worked here ", " 2020."], opts:["since","for"], a:0, fix:"Эхлэх цэг → since."},
      {q:"М5 (used to):", parts:["I'm used to ", " up early."], opts:["getting","get"], a:0, fix:"be-тэй → -ing."},
      {q:"М7 (stop):", parts:["I stopped ", " plastic. (больсон)"], opts:["using","to use"], a:0, fix:"Болих → -ing."},
      {q:"М9 (rather):", parts:["I'd rather ", " a refund."], opts:["have","to have"], a:0, fix:"'d rather + нүцгэн."}
    ],
    speak:{ scene:'🌟 Их төсөл: Миний англи хэлний аялал', turns:[
      {ruby:"Tell me your English learning story!", pron:"тэл ми ёр Инглиш лөрнинг стори!", mn:"Англи хэл сурсан түүхээ яриач!",
        choices:[{t:"I used to think English was impossible. I've been learning for two years now.",best:true,mn:"Англи хэл боломжгүй гэж бодож байсан. Одоо хоёр жил сурч байна."},{t:"I used to thinking English is impossible. I learn for two years.",best:false,fix:"used to THINK... I'VE BEEN LEARNING for two years."}]},
      {ruby:"What was the hardest part?", pron:"вот воз зэ хардэст парт?", mn:"Хамгийн хэцүү нь юу байсан бэ?",
        choices:[{t:"The articles! I was frustrated at first, but I didn't give up.",best:true,mn:"Артикль! Эхэндээ бухимдсан ч бууж өгөөгүй."},{t:"The articles! I was frustrating, but I didn't gave up.",best:false,fix:"I was frustratED. I didn't GIVE up."}]},
      {ruby:"What would you say to a beginner?", pron:"вот вүд ю сэй ту э бигинэр?", mn:"Анхлан суралцагчид юу хэлэх вэ?",
        choices:[{t:"If I were you, I'd start today! It's the best decision I've ever made.",best:true,mn:"Би чиний оронд байсан бол өнөөдөр эхэлнэ! Миний гаргасан хамгийн сайн шийдвэр."},{t:"If I was you, I start today. It's best decision I ever made.",best:false,fix:"If I WERE you, I'D start. THE best decision I'VE EVER made."}]}
    ]}
  },
  {
    id:'a2m10l10', title:"10.10 A2 төгсгөлийн шалгалт", level:"A2 · М10",
    blurb:"🎓 A2 БАТАЛГААЖУУЛАЛТ — 200 хичээлийн төгсгөл",
    rule:{
      h:"🎓 Баяр хүргэе! A2 түвшний төгсгөл",
      html:`<b>🎓 Та A1 (100) + A2 (100) = <span style="color:var(--mint)">200 хичээл</span> дуусгалаа!</b><br><br>
        <b>Одоо та юу чадах вэ:</b>
        <div style="margin:12px 0;line-height:2">
        ✅ <b>Бүх үндсэн цагаар ярих:</b> Past Simple/Continuous · Present Simple/Continuous/Perfect/Perfect Continuous · Future (will/going to/-ing)<br>
        ✅ <b>Идэвхгүй хэлбэрийн бүх цаг:</b> is done · was done · has been done · will be done · must be done<br>
        ✅ <b>Нөхцөл:</b> If it rains... (1-р) · If I were you... (2-р)<br>
        ✅ <b>Дам яриа:</b> He said he was busy · She asked if I had paid<br>
        ✅ <b>Тодотгол:</b> who / which / that / where / whose · , which ...<br>
        ✅ <b>Эелдэг байдлын бүх шат:</b> Could you...? · Would you mind...? · I was wondering if you could...<br>
        ✅ Албан ба албан бус имэйл, гомдол, шүүмж, илтгэл бичих<br>
        ✅ Аялал, ажил, эрүүл мэнд, соёл, технологийн сэдвээр чөлөөтэй ярих
        </div>
        <b>🎯 Дараагийн алхам — B1:</b> Past Perfect (I had done) · 3-р нөхцөл (If I had known...) · wish/if only · reported speech гүнзгий · phrasal verbs 200+ · нарийн үгийн сан.
        <p style="margin-top:14px"><b>🎓 Төгсгөлийн шалгалт:</b> Доорх дасгал, ярианы даалгавар нь A2-ийн ХАМГИЙН чухал 4 цэгийг шалгана.</p>
        <p style="margin-top:8px"><b>💡 Хамгийн чухал зөвлөгөө:</b> A2 бол «амьд үлдэх» түвшин — та англиар аялж, ажиллаж, найзалж чадна. Одоо хамгийн хэрэгтэй нь <b>ЯРИХ ДАДЛАГА</b>. Өдөрт 15 минут Ruby-тэй ярь. Мэдэх ≠ чадах!</p>`
    },
    phrases:[
      {en:"I've finished A2! Two hundred lessons!", pron:"айв финишт эй-ту! ту хандрэд лэснз!", mn:"A2-ыг дуусгалаа! 200 хичээл!"},
      {en:"I couldn't say a word two years ago.", pron:"ай күднт сэй э вөрд ту йирз эгоу.", mn:"Хоёр жилийн өмнө нэг ч үг хэлж чаддаггүй байсан."},
      {en:"Now I can talk about almost anything.", pron:"нау ай кэн ток эбаут олмоуст энисинг.", mn:"Одоо бараг бүх зүйлийн талаар ярьж чадна."},
      {en:"It wasn't easy, but it was worth it.", pron:"ит вознт ийзи, бат ит воз вөрс ит.", mn:"Амархан байгаагүй ч үнэ цэнэтэй байлаа."},
      {en:"If I can do it, so can you!", pron:"иф ай кэн ду ит, соу кэн ю!", mn:"Би чадаж байгаа бол та ч бас чадна!"}
    ],
    exercises:[
      {q:"🎓 Present Perfect:", parts:["I ", " English for two years."], opts:["have studied","study"], a:0, fix:"for + одоо хүртэл → have studied."},
      {q:"🎓 Идэвхгүй:", parts:["The book has ", " translated."], opts:["been","—"], a:0, fix:"has BEEN + V3."},
      {q:"🎓 2-р нөхцөл:", parts:["If I ", " you, I'd start now."], opts:["were","am"], a:0, fix:"If I WERE you."},
      {q:"🎓 Дам яриа:", parts:["She said she ", " busy."], opts:["was","is"], a:0, fix:"Цаг ухарна → was."}
    ],
    speak:{ scene:'🎓 A2 төгсгөлийн ярилцлага', turns:[
      {ruby:"Congratulations! You've finished A2! How do you feel?", pron:"конгрэчулэйшнз! юв финишт эй-ту! хау ду ю фийл?", mn:"Баяр хүргэе! A2-ыг дуусгалаа! Ямар байна?",
        choices:[{t:"Amazing! I couldn't say a word two years ago, but now I can talk about almost anything.",best:true,mn:"Гайхалтай! Хоёр жилийн өмнө нэг ч үг хэлж чаддаггүй байсан ч одоо бараг бүх юмны талаар ярьж чадна."},{t:"Amazing! I can't say a word two years ago. Now I talk everything.",best:false,fix:"I COULDN'T say a word... I CAN TALK ABOUT almost anything."}]},
      {ruby:"What has been the most useful thing you've learned?", pron:"вот хэз бийн зэ моуст юсфул синг юв лөрнд?", mn:"Сурсан зүйлээсээ хамгийн хэрэгтэй нь юу байсан бэ?",
        choices:[{t:"Present Perfect, definitely. It doesn't exist in Mongolian, so it was really confusing at first!",best:true,mn:"Present Perfect гарцаагүй. Монголд байдаггүй тул эхэндээ их эргэлзүүлэм байсан!"},{t:"Present Perfect. It doesn't exist in Mongolian, so it was really confused.",best:false,fix:"it was CONFUSING (юм → -ing)."}]},
      {ruby:"And what's next for you?", pron:"энд вотс нэкст фор ю?", mn:"Дараа нь юу хийх вэ?",
        choices:[{t:"I'm going to start B1! If I can do it, so can you — don't give up!",best:true,mn:"B1 эхлүүлнэ! Би чадаж байгаа бол та ч бас чадна — бүү бууж өг!"},{t:"I will start B1. If I can do it, you can too. Don't give up.",best:false,fix:"Төлөвлөсөн → I'M GOING TO start. Илүү хүчтэй → SO CAN YOU!"}]}
    ]}
  }
],
};

const LEVEL_INFO = {
  beginner:     { name:'Анхан шат', sub:'Үндэс: to be, a/an, Present Simple…' },
  intermediate: { name:'Дунд шат',  sub:'Comparatives, Perfect, will, conditional…' },
  advanced:     { name:'Гүнзгий',   sub:'Perfect Continuous, passive, conditionals…' },
  a1:           { name:'A1 бүтэн курс 🎓', sub:'100 хичээл бүрэн ✓ — Модуль 1-10' },
  a2:           { name:'A2 бүтэн курс 🎓', sub:'100 хичээл бүрэн ✓ — Модуль 1-10' },
};

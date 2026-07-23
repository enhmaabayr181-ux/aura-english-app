// ============================================================
//  AURA — B1 КУРСЫН ӨГӨГДӨЛ (lessons_b1.js)
//  Агуулга: B1 курс — Модуль 1-10 (100 хичээл бүрэн)
//  М1 Хувийн хөгжил · М2 Боловсрол · М3 Ажил&карьер · М4 Технологи&мэдээлэл · М5 Эрүүл мэнд&байгаль
//  М6 Аялал&соёл · М7 Хот&нийгэм · М8 Мэдрэмж&харилцаа · М9 Мөнгө&хэрэглээ · М10 Ирээдүй&мөрөөдөл (capstone)
//  ⚠️ Энэ файлыг index.html-д vocab.js, lessons.js-ийн ДАРАА ачаална.
// ============================================================

COURSES.b1 = [
  {
    id:'b1m1l1', title:"1.1 Зорилго", level:"B1 · М1",
    blurb:"By 2030 I'll have finished — Future Perfect ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Future Perfect (ирээдүйд дуусах)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B1-ийн эхний том дүрэм — <b>ирээдүйн ямар нэг цэг ГЭХЭД дуусчихсан байх</b>.<br><br>
        <b>will have + V3:</b>
        <div style="margin:12px 0"><span class="tag">BY 2030, I WILL HAVE FINISHED my degree.</span><span class="tag">By next month, she'll have saved enough money.</span></div>
        <b>⚠️ «BY» заавал</b> — Future Perfect нь эцсийн цэгтэй:
        <div style="margin:12px 0"><span class="tag">by 2030 · by next year · by the time I'm 40 · by then</span></div>
        <b>3 ирээдүйг харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">I will finish in 2030. (2030 онд дуусна)</span><span class="tag">I will have finished BY 2030. (2030 БОЛОХООС ӨМНӨ дуусчихсан байна)</span></div>
        <b>«by the time» дараа ОДОО цаг!</b> (нөхцөлийн дүрэмтэй адил):
        <div style="margin:12px 0"><span class="tag">By the time I FINISH university, I'll have learned three languages. (will finish ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        goal /ɡoʊl/ — зорилго · aim /eɪm/ — зорилт · target /ˈtɑːrɡɪt/ — тавьсан хэмжээ<br>
        achieve /əˈtʃiːv/ — биелүүлэх · accomplish /əˈkʌmplɪʃ/ — гүйцэлдүүлэх · pursue /pərˈsuː/ — эрэлхийлэх<br>
        realistic /ˌriːəˈlɪstɪk/ — бодит · ambitious /æmˈbɪʃəs/ — амбицтай · long-term /ˌlɒŋ ˈtɜːrm/ — урт хугацааны<br>
        short-term /ˌʃɔːrt ˈtɜːrm/ — богино хугацааны · milestone /ˈmaɪlstoʊn/ — гол үе шат · deadline /ˈdedlaɪn/ — эцсийн хугацаа<br>
        commit /kəˈmɪt/ — амлалт өгөх · determined /dɪˈtɜːrmɪnd/ — шийдэмгий · potential /pəˈtenʃl/ — боломж</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «By 2030 I will finish» ✗ — «by» гэвэл <b>will HAVE FINISHED</b> ✓. Мөн «By the time I will graduate» ✗ → <b>By the time I graduate</b> ✓ (одоо цаг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BY харагдвал WILL HAVE + V3» — ирээдүйн эцсийн цэг.</p>`
    },
    phrases:[
      {en:"By 2030, I will have finished my degree.", pron:"бай твэнти сөрти, ай вил хэв финишт май дигрий.", mn:"2030 он гэхэд зэргээ авчихсан байна."},
      {en:"By the time I'm forty, I'll have visited ten countries.", pron:"бай зэ тайм айм форти, айл хэв визитид тэн кантриз.", mn:"40 нас хүрэхэд 10 улс үзчихсэн байна."},
      {en:"She'll have saved enough money by next summer.", pron:"шил хэв сэйвд инаф мани бай нэкст саммэр.", mn:"Ирэх зун гэхэд хангалттай мөнгө хуримтлуулчихсан байна."},
      {en:"My goals are ambitious but realistic.", pron:"май гоулз а эмбишэс бат риэлистик.", mn:"Миний зорилго амбицтай ч бодитой."},
      {en:"I'm determined to achieve my long-term goals.", pron:"айм дитөрминд ту эчийв май лонг-төрм гоулз.", mn:"Урт хугацааны зорилгодоо хүрэхээр шийдсэн."}
    ],
    exercises:[
      {q:"by + :", parts:["By 2030, I ", " my degree."], opts:["will have finished","will finish"], a:0, fix:"by → will HAVE finished."},
      {q:"by the time:", parts:["By the time I ", ", I'll have saved a lot."], opts:["graduate","will graduate"], a:0, fix:"by the time + одоо цаг → graduate."},
      {q:"V3 хэлбэр:", parts:["She'll have ", " enough by June."], opts:["saved","save"], a:0, fix:"will have + V3 → saved."},
      {q:"Аль зөв:", parts:["I ", " in 2030. (2030 онд дуусна)"], opts:["will finish","will have finished"], a:0, fix:"«in 2030» → will finish (by ✗)."}
    ],
    speak:{ scene:'Зорилгоо ярих', turns:[
      {ruby:"Where do you see yourself in five years?", pron:"вэр ду ю сий ёрсэлф ин файв йирз?", mn:"5 жилийн дараа өөрийгөө хаана харж байна?",
        choices:[{t:"By 2030, I will have finished my degree and started my own business.",best:true,mn:"2030 он гэхэд зэргээ авч, өөрийн бизнесээ эхлүүлчихсэн байна."},{t:"By 2030, I will finish my degree.",best:false,fix:"by → will HAVE FINISHED."}]},
      {ruby:"That's ambitious! Is it realistic?", pron:"зэтс эмбишэс! из ит риэлистик?", mn:"Амбицтай юм! Бодитой юу?",
        choices:[{t:"I think so. By the time I graduate, I'll have saved enough money.",best:true,mn:"Тийм байх. Төгсөх үед хангалттай мөнгө хуримтлуулчихсан байна."},{t:"I think so. By the time I will graduate, I save enough money.",best:false,fix:"By the time I GRADUATE, I'LL HAVE SAVED."}]},
      {ruby:"What about travelling?", pron:"вот эбаут трэвлинг?", mn:"Аялал яах вэ?",
        choices:[{t:"By the time I'm forty, I'll have visited at least ten countries!",best:true,mn:"40 нас хүрэхэд дор хаяж 10 улс үзчихсэн байна!"},{t:"When I'm forty, I visit ten countries.",best:false,fix:"BY the time I'm forty, I'LL HAVE VISITED."}]}
    ]}
  },
  {
    id:'b1m1l2', title:"1.2 Дадал", level:"B1 · М1",
    blurb:"This time next year I'll be working — Future Continuous ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Future Continuous (ирээдүйд үргэлжлэх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ирээдүйн ямар нэг мөчид <b>үргэлжилж байх</b> үйлдлийг хэлэх.<br><br>
        <b>will be + үйл үг-ing:</b>
        <div style="margin:12px 0"><span class="tag">THIS TIME NEXT YEAR, I'LL BE WORKING in Japan.</span><span class="tag">At 8 tomorrow, I'll be having breakfast.</span></div>
        <b>Дохио үгс:</b> this time next year · at 8 tomorrow · in ten years' time.<br><br>
        <b>3 ирээдүйн бүрэн зураг:</b>
        <div style="margin:12px 0"><span class="tag">will do = энгийн ирээдүй: I'll work there.</span><span class="tag">will BE DOING = тэр мөчид үргэлжилнэ: At 9, I'll be working.</span><span class="tag">will HAVE DONE = тэр мөч ГЭХЭД дуусна: By 9, I'll have finished.</span></div>
        <b>Эелдэг асуулт болгож ч хэрэглэнэ:</b> Will you be using the car tonight? (= Хэрэглэх үү? — даралтгүй асуулт)
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        habit /ˈhæbɪt/ — дадал · routine /ruːˈtiːn/ — дэглэм · discipline /ˈdɪsəplɪn/ — сахилга бат<br>
        consistent /kənˈsɪstənt/ — тогтвортой · regularly /ˈreɡjələrli/ — тогтмол · daily /ˈdeɪli/ — өдөр тутам<br>
        stick to /stɪk tuː/ — баримтлах · give up /ɡɪv ʌp/ — болих · build /bɪld/ — бий болгох<br>
        break /breɪk/ — эвдэх (дадал) · form /fɔːrm/ — төлөвшүүлэх · maintain /meɪnˈteɪn/ — хадгалах<br>
        gradually /ˈɡrædʒuəli/ — аажмаар · automatic /ˌɔːtəˈmætɪk/ — автомат · effort /ˈefərt/ — хүчин чармайлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «This time next year I will work in Japan» — болох ч тэр мөчид үргэлжилж байхыг онцлох бол <b>I'll BE WORKING</b> ✓. Мөн «I'll be work» ✗ → <b>will be workING</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тэр мөчид кино үргэлжилж байна → WILL BE + ING».</p>`
    },
    phrases:[
      {en:"This time next year, I'll be working in Japan.", pron:"зис тайм нэкст йир, айл би вөркинг ин Жэпэн.", mn:"Ирэх жилийн энэ үед Японд ажиллаж байх болно."},
      {en:"At eight tomorrow, I'll be having breakfast.", pron:"эт эйт тумороу, айл би хэвинг брэкфаст.", mn:"Маргааш 8 цагт өглөөний хоол идэж байх болно."},
      {en:"In five years' time, I'll be running my own company.", pron:"ин файв йирз тайм, айл би раннинг май оун кампэни.", mn:"5 жилийн дараа өөрийн компаниа удирдаж байх болно."},
      {en:"It takes effort to build a new habit.", pron:"ит тэйкс эфорт ту билд э ню хэбит.", mn:"Шинэ дадал бий болгоход хүчин чармайлт хэрэгтэй."},
      {en:"Gradually, it becomes automatic.", pron:"грэжуэли, ит бикамз отэмэтик.", mn:"Аажмаар автомат болдог."}
    ],
    exercises:[
      {q:"Үргэлжлэх:", parts:["This time next year, I ", " in Japan."], opts:["'ll be working","'ll work"], a:0, fix:"Тэр мөчид үргэлжилнэ → will be working."},
      {q:"Хэлбэр:", parts:["At eight, I'll be ", " breakfast."], opts:["having","have"], a:0, fix:"will be + -ing → having."},
      {q:"Аль цаг:", parts:["By eight, I ", " breakfast. (дуусчихсан)"], opts:["'ll have finished","'ll be finishing"], a:0, fix:"by → will HAVE finished."},
      {q:"Дадал:", parts:["It's hard to ", " to a new routine."], opts:["stick","build"], a:0, fix:"stick TO a routine."}
    ],
    speak:{ scene:'Ирээдүйн дадал', turns:[
      {ruby:"What will your life be like next year?", pron:"вот вил ёр лайф би лайк нэкст йир?", mn:"Ирэх жил амьдрал тань ямар байх бол?",
        choices:[{t:"This time next year, I'll be working in Japan!",best:true,mn:"Ирэх жилийн энэ үед Японд ажиллаж байх болно!"},{t:"This time next year, I work in Japan.",best:false,fix:"Тэр мөчид → I'LL BE WORKING."}]},
      {ruby:"Wow! Will you have learned Japanese by then?", pron:"вау! вил ю хэв лөрнд Жэпэнийз бай зэн?", mn:"Өө! Тэр үед япон хэл сурчихсан байх уу?",
        choices:[{t:"I hope so. By then, I'll have studied it for two years.",best:true,mn:"Найдаж байна. Тэр үед хоёр жил сурчихсан байна."},{t:"I hope. By then, I study it two years.",best:false,fix:"BY then, I'LL HAVE STUDIED it FOR two years."}]},
      {ruby:"How do you build such good habits?", pron:"хау ду ю билд сач гүд хэбитс?", mn:"Ийм сайн дадлыг яаж бий болгодог вэ?",
        choices:[{t:"You have to stick to a routine. Gradually, it becomes automatic.",best:true,mn:"Дэглэмээ баримтлах хэрэгтэй. Аажмаар автомат болдог."},{t:"You must stick a routine. Gradually it become automatic.",best:false,fix:"stick TO a routine. it BECOMES automatic."}]}
    ]}
  },
  {
    id:'b1m1l3', title:"1.3 Сэдэл", level:"B1 · М1",
    blurb:"I wish I had more time — wish / if only ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: wish / if only (харамсал, хүсэл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Бодит бус хүсэл, харамсал — B1-ийн онцлог дүрэм!<br><br>
        <b>⚠️ Алтан дүрэм: цаг НЭГ АЛХАМ ХОЙШ ухарна</b> (2-р нөхцөлтэй ижил зарчим):
        <div style="margin:12px 0"><span class="tag">ОДООГИЙН харамсал → wish + ӨНГӨРСӨН цаг: I wish I HAD more time. (одоо цаг алга)</span><span class="tag">ӨНГӨРСНИЙ харамсал → wish + PAST PERFECT: I wish I HAD STUDIED harder. (тэр үед сураагүй)</span><span class="tag">БУСДЫН зан → wish + WOULD: I wish he WOULD stop smoking.</span></div>
        <b>if only</b> = wish-тэй ижил, гэхдээ <b>илүү хүчтэй сэтгэл хөдлөл</b>:
        <div style="margin:12px 0"><span class="tag">If only I had more time!</span></div>
        <b>Онцгой:</b> was → <b>WERE</b> (бүх биед): I wish I WERE taller.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        motivation /ˌmoʊtɪˈveɪʃn/ — сэдэл · motivate /ˈmoʊtɪveɪt/ — урамшуулах · inspire /ɪnˈspaɪər/ — урам өгөх<br>
        encourage /ɪnˈkɜːrɪdʒ/ — зоригжуулах · discourage /dɪsˈkɜːrɪdʒ/ — урам хугалах · drive /draɪv/ — хөшүүрэг<br>
        passion /ˈpæʃn/ — хүсэл тэмүүлэл · enthusiasm /ɪnˈθuːziæzəm/ — урам зориг · lazy /ˈleɪzi/ — залхуу<br>
        procrastinate /proʊˈkræstɪneɪt/ — хойшлуулах · excuse /ɪkˈskjuːs/ — шалтаг · reward /rɪˈwɔːrd/ — шагнал<br>
        struggle /ˈstrʌɡl/ — тэмцэх · overcome /ˌoʊvərˈkʌm/ — даван туулах · persistent /pərˈsɪstənt/ — тэвчээртэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish I have more time» ✗ → одоогийн харамсалд <b>өнгөрсөн цаг</b>: I wish I HAD more time ✓. «I wish I studied harder» — өнгөрсний харамсал бол <b>I wish I HAD STUDIED</b> ✓ (Past Perfect!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WISH-ийн дараа цаг ХОЙШ ухарна» — одоо→өнгөрсөн · өнгөрсөн→Past Perfect.</p>`
    },
    phrases:[
      {en:"I wish I had more time to study.", pron:"ай виш ай хэд мор тайм ту стади.", mn:"Сурах илүү цагтай байсан бол."},
      {en:"I wish I had studied harder at school.", pron:"ай виш ай хэд стадид хардэр эт скүл.", mn:"Сургууль дээрээ илүү шаргуу сурсан бол."},
      {en:"If only I were more confident!", pron:"иф оунли ай вөр мор конфидэнт!", mn:"Илүү өөртөө итгэлтэй байсан бол!"},
      {en:"I wish my brother would stop procrastinating.", pron:"ай виш май бразэр вүд стоп прокрэстинэйтинг.", mn:"Ах маань хойшлуулахаа больсон бол."},
      {en:"What motivates you when you struggle?", pron:"вот моутивэйтс ю вэн ю страгл?", mn:"Хэцүү үед юу таныг урамшуулдаг вэ?"}
    ],
    exercises:[
      {q:"Одоогийн харамсал:", parts:["I wish I ", " more time."], opts:["had","have"], a:0, fix:"Одоо → wish + өнгөрсөн цаг: had."},
      {q:"Өнгөрсний харамсал:", parts:["I wish I ", " harder at school."], opts:["had studied","studied"], a:0, fix:"Өнгөрсөн → wish + Past Perfect."},
      {q:"Онцгой:", parts:["I wish I ", " taller."], opts:["were","was"], a:0, fix:"Зөв нь → I wish I WERE."},
      {q:"Бусдын зан:", parts:["I wish he ", " stop smoking."], opts:["would","will"], a:0, fix:"Бусдын зан → wish + WOULD."}
    ],
    speak:{ scene:'Сэдэл ба харамсал', turns:[
      {ruby:"Why don't you study more?", pron:"вай доунт ю стади мор?", mn:"Яагаад илүү сурдаггүй юм бэ?",
        choices:[{t:"I wish I had more time! I'm always busy with work.",best:true,mn:"Илүү цагтай байсан бол! Ажлаараа үргэлж завгүй."},{t:"I wish I have more time! I'm busy.",best:false,fix:"wish + өнгөрсөн цаг → I wish I HAD more time."}]},
      {ruby:"Do you regret anything about school?", pron:"ду ю ригрэт энисинг эбаут скүл?", mn:"Сургуулийн талаар харамсдаг зүйл байна уу?",
        choices:[{t:"Yes. I wish I had studied English harder back then.",best:true,mn:"Тийм. Тэр үед англи хэлээ илүү шаргуу сурсан бол."},{t:"Yes. I wish I studied English harder.",best:false,fix:"Өнгөрсний харамсал → I wish I HAD STUDIED."}]},
      {ruby:"What about now? Are you confident?", pron:"вот эбаут нау? а ю конфидэнт?", mn:"Одоо яах вэ? Өөртөө итгэлтэй юу?",
        choices:[{t:"Not really. If only I were more confident when I speak!",best:true,mn:"Тийм ч биш. Ярихдаа илүү өөртөө итгэлтэй байсан бол!"},{t:"Not really. If only I was more confident.",best:false,fix:"Зөв нь → If only I WERE."}]}
    ]}
  },
  {
    id:'b1m1l4', title:"1.4 Цагийн менежмент", level:"B1 · М1",
    blurb:"The meeting had started — Past Perfect ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Perfect (өнгөрсний өмнөх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B1-ийн ГОЛ дүрэм — <b>өнгөрсний ӨМНӨХ өнгөрсөн</b>!<br><br>
        <b>had + V3</b> = хоёр өнгөрсөн үйл явдлын ЭХНИЙХ нь:
        <div style="margin:12px 0"><span class="tag">When I ARRIVED, the meeting HAD STARTED. (эхлээд хурал эхэлсэн → дараа нь би ирсэн)</span></div>
        <b>Цагийн шугам:</b>
        <div style="margin:12px 0"><span class="tag">had started ————→ arrived ————→ ОДОО</span></div>
        <b>Ялгааг мэдэр:</b>
        <div style="margin:12px 0"><span class="tag">When I arrived, the meeting STARTED. = Би ирэхэд хурал эхэлсэн (би ирсний ДАРАА)</span><span class="tag">When I arrived, the meeting HAD STARTED. = Би ирэхэд хурал аль хэдийн эхэлчихсэн байсан</span></div>
        <b>Дохио үгс:</b> by the time · before · after · already · when.<br>
        <b>⚠️ Бүх биед адилхан:</b> I had / he had / they had (hadn't · Had you...?)
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        manage /ˈmænɪdʒ/ — удирдах · schedule /ˈskedʒuːl/ — хуваарь · priority /praɪˈɔːrəti/ — тэргүүлэх ач холбогдол<br>
        organize /ˈɔːrɡənaɪz/ — зохион байгуулах · postpone /poʊstˈpoʊn/ — хойшлуулах · waste /weɪst/ — үрэх<br>
        efficient /ɪˈfɪʃnt/ — үр ашигтай · productive /prəˈdʌktɪv/ — бүтээмжтэй · overwhelmed /ˌoʊvərˈwelmd/ — дарамттай<br>
        urgent /ˈɜːrdʒənt/ — яаралтай · task /tæsk/ — даалгавар · plan ahead /plæn əˈhed/ — урьдчилан төлөвлөх<br>
        by the time /baɪ ðə taɪm/ — -ах үед · already /ɔːlˈredi/ — аль хэдийн · realize /ˈriːəlaɪz/ — ойлгох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Хоёуланг Past Simple болгох: «When I arrived, the meeting started» — утга ӨӨРЧЛӨГДӨНӨ! Аль хэдийн эхэлсэн бол <b>HAD STARTED</b> ✓ Мөн Past Perfect нь <b>ГАНЦААРАА хэрэглэгддэггүй</b> — үргэлж өөр өнгөрсөн үйлдэлтэй хамт!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хоёр өнгөрсөн юм болсон бол ЭХНИЙХ нь HAD + V3».</p>`
    },
    phrases:[
      {en:"By the time I arrived, the meeting had started.", pron:"бай зэ тайм ай эрайвд, зэ мийтинг хэд стартид.", mn:"Би ирэх үед хурал аль хэдийн эхэлчихсэн байсан."},
      {en:"I realized I had forgotten my laptop.", pron:"ай риэлайзд ай хэд форготн май лэптоп.", mn:"Компьютераа мартсанаа ойлголоо."},
      {en:"She had already finished before I woke up.", pron:"ши хэд олрэди финишт бифор ай воук ап.", mn:"Би сэрэхээс өмнө тэр аль хэдийн дуусгачихсан байсан."},
      {en:"I was overwhelmed because I hadn't planned ahead.", pron:"ай воз оувэрвэлмд бикоз ай хэднт плэнд эхэд.", mn:"Урьдчилан төлөвлөөгүй тул дарамттай байсан."},
      {en:"Had you finished the task before the deadline?", pron:"хэд ю финишт зэ таск бифор зэ дэдлайн?", mn:"Эцсийн хугацаанаас өмнө даалгавраа дуусгасан уу?"}
    ],
    exercises:[
      {q:"Эхний үйлдэл:", parts:["When I arrived, the meeting ", "."], opts:["had started","started"], a:0, fix:"Аль хэдийн эхэлсэн → had started."},
      {q:"V3 хэлбэр:", parts:["I realized I had ", " my laptop."], opts:["forgotten","forgot"], a:0, fix:"had + V3 → forgotten."},
      {q:"Үгүйсгэл:", parts:["I was late because I ", " planned."], opts:["hadn't","didn't"], a:0, fix:"Past Perfect үгүйсгэл → hadn't."},
      {q:"by the time:", parts:["By the time I woke up, she ", " left."], opts:["had","has"], a:0, fix:"Өнгөрсний өмнөх → had left."}
    ],
    speak:{ scene:'Хоцорсон өдөр', turns:[
      {ruby:"You look stressed. What happened this morning?", pron:"ю лүк стрэст. вот хэпэнд зис морнинг?", mn:"Стресстэй харагдаж байна. Өглөө юу болов?",
        choices:[{t:"By the time I arrived, the meeting had already started!",best:true,mn:"Би ирэх үед хурал аль хэдийн эхэлчихсэн байсан!"},{t:"When I arrived, the meeting already started.",best:false,fix:"Аль хэдийн → the meeting HAD already STARTED."}]},
      {ruby:"Oh no! Why were you late?", pron:"оу ноу! вай вөр ю лэйт?", mn:"Өө! Яагаад хоцорсон бэ?",
        choices:[{t:"I got to the office and realized I had forgotten my laptop at home.",best:true,mn:"Оффис хүрээд компьютераа гэртээ мартсанаа ойлгосон."},{t:"I got to office and realized I forgot my laptop.",best:false,fix:"Өмнө нь мартсан → I HAD FORGOTTEN."}]},
      {ruby:"That's tough. Could you have planned better?", pron:"зэтс таф. күд ю хэв плэнд бэтэр?", mn:"Хэцүү юм. Илүү сайн төлөвлөж болох байсан уу?",
        choices:[{t:"Definitely. I was overwhelmed because I hadn't planned ahead.",best:true,mn:"Гарцаагүй. Урьдчилан төлөвлөөгүй тул дарамттай байсан."},{t:"Yes. I was overwhelmed because I didn't planned ahead.",best:false,fix:"I HADN'T PLANNED ahead."}]}
    ]}
  },
  {
    id:'b1m1l5', title:"1.5 Амжилт", level:"B1 · М1",
    blurb:"I'd been studying for years — Past Perfect Continuous ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Past Perfect Continuous",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өнгөрсний өмнө <b>ХЭР УДААН үргэлжилсэн</b>-ийг онцлох.<br><br>
        <b>had been + үйл үг-ing:</b>
        <div style="margin:12px 0"><span class="tag">I HAD BEEN STUDYING for two years before I passed the exam.</span><span class="tag">She was tired because she HAD BEEN WORKING all night.</span></div>
        <b>Past Perfect ⟷ Past Perfect Continuous:</b>
        <div style="margin:12px 0"><span class="tag">had studied = дуусгасан (үр дүн): I had studied 5 chapters.</span><span class="tag">had been studying = үргэлжилсэн (үйл явц + хугацаа): I had been studying for 2 years.</span></div>
        <b>Хамгийн түгээмэл хэрэглээ — ШАЛТГААН тайлбарлах:</b>
        <div style="margin:12px 0"><span class="tag">She was exhausted. She HAD BEEN WORKING all night. (яагаад ядарсан бэ)</span><span class="tag">The ground was wet. It HAD BEEN RAINING.</span></div>
        <b>⚠️ Онцгой үйл үг -ing авдаггүй:</b> know, want, be → <b>I had known him for years</b> ✓ (had been knowing ✗)
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        achievement /əˈtʃiːvmənt/ — амжилт · succeed /səkˈsiːd/ — амжилтад хүрэх · success /səkˈses/ — амжилт<br>
        proud /praʊd/ — бахархсан · reward /rɪˈwɔːrd/ — шагнал · recognition /ˌrekəɡˈnɪʃn/ — хүлээн зөвшөөрөл<br>
        hard work /hɑːrd wɜːrk/ — шаргуу хөдөлмөр · dedication /ˌdedɪˈkeɪʃn/ — зүтгэл · sacrifice /ˈsækrɪfaɪs/ — золиос<br>
        pay off /peɪ ɒf/ — үр дүнгээ өгөх · deserve /dɪˈzɜːrv/ — зохих · celebrate /ˈselɪbreɪt/ — тэмдэглэх<br>
        exhausted /ɪɡˈzɔːstɪd/ — туйлдсан · worth it /wɜːrθ ɪt/ — үнэ цэнэтэй · finally /ˈfaɪnəli/ — эцэст нь</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I was studying for two years before I passed» ✗ → өнгөрсний өмнөх бол <b>I HAD BEEN studying</b> ✓. Мөн «had been knowing» ✗ → <b>had known</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAD BEEN + ING = өнгөрсний өмнө ХЭР УДААН» — for/since-тэй хамт байнга.</p>`
    },
    phrases:[
      {en:"I had been studying for two years before I passed.", pron:"ай хэд бийн стадиинг фор ту йирз бифор ай паст.", mn:"Тэнцэхээсээ өмнө хоёр жил сурсан байсан."},
      {en:"She was exhausted — she had been working all night.", pron:"ши воз игзостид — ши хэд бийн вөркинг ол найт.", mn:"Тэр туйлдсан байсан — шөнөжин ажилласан байлаа."},
      {en:"All my hard work had finally paid off.", pron:"ол май хард вөрк хэд файнали пэйд оф.", mn:"Бүх шаргуу хөдөлмөр минь эцэст нь үр дүнгээ өгсөн."},
      {en:"I had known him for years before we became friends.", pron:"ай хэд ноун хим фор йирз бифор ви бикэйм фрэндз.", mn:"Найзлахаасаа өмнө түүнийг олон жил таьдаг байсан."},
      {en:"It was hard, but it was worth it.", pron:"ит воз хард, бат ит воз вөрс ит.", mn:"Хэцүү байсан ч үнэ цэнэтэй байлаа."}
    ],
    exercises:[
      {q:"Хугацаа онцлох:", parts:["I ", " for two years before I passed."], opts:["had been studying","was studying"], a:0, fix:"Өнгөрсний өмнөх → had been studying."},
      {q:"Шалтгаан:", parts:["She was tired — she ", " all night."], opts:["had been working","worked"], a:0, fix:"Яагаад ядарсан → had been working."},
      {q:"Онцгой үйл үг:", parts:["I ", " him for years."], opts:["had known","had been knowing"], a:0, fix:"know нь -ing авдаггүй → had known."},
      {q:"Үр дүн ⟷ үйл явц:", parts:["I ", " five chapters. (дуусгасан)"], opts:["had studied","had been studying"], a:0, fix:"Үр дүн → had studied."}
    ],
    speak:{ scene:'Амжилтаа дурсах', turns:[
      {ruby:"Congratulations on passing the exam! Was it difficult?", pron:"конгрэчулэйшнз он пасинг зэ игзэм! воз ит дификалт?", mn:"Шалгалт өгсөнд баяр хүргэе! Хэцүү байсан уу?",
        choices:[{t:"Very! I had been studying for two years before I finally passed.",best:true,mn:"Их! Эцэст нь тэнцэхээсээ өмнө хоёр жил сурсан байсан."},{t:"Very! I was studying two years before I passed.",best:false,fix:"Өнгөрсний өмнөх → I HAD BEEN STUDYING for two years."}]},
      {ruby:"You looked exhausted last week!", pron:"ю лүкт игзостид ласт вийк!", mn:"Өнгөрсөн долоо хоногт туйлдсан харагдаж байсан!",
        choices:[{t:"I was! I had been working all night before the exam.",best:true,mn:"Тийм! Шалгалтын өмнө шөнөжин ажилласан байсан."},{t:"I was! I worked all night before exam.",best:false,fix:"I HAD BEEN WORKING all night."}]},
      {ruby:"Was it worth it?", pron:"воз ит вөрс ит?", mn:"Үнэ цэнэтэй байсан уу?",
        choices:[{t:"Absolutely. All my hard work had finally paid off!",best:true,mn:"Гарцаагүй. Бүх шаргуу хөдөлмөр минь эцэст нь үр дүнгээ өгсөн!"},{t:"Yes. All my hard work finally paid off before.",best:false,fix:"HAD finally PAID OFF."}]}
    ]}
  },
  {
    id:'b1m1l6', title:"1.6 Алдаанаас сурах", level:"B1 · М1",
    blurb:"If I had known, I would have... — 3-р нөхцөл ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Third conditional (өнгөрсний бодит бус нөхцөл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>болоогүй</b> зүйлийн тухай төсөөлөх — харамсал, дүгнэлт.<br><br>
        <b>Бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">IF + PAST PERFECT , WOULD HAVE + V3</span><span class="tag">If I HAD KNOWN, I WOULD HAVE told you.</span></div>
        <b>⚠️ Утга нь: болоогүй!</b> «Мэдээгүй тул хэлээгүй».<br><br>
        <b>3 нөхцөлийн зураглал:</b>
        <div style="margin:12px 0"><span class="tag">1-р (бодит ирээдүй): If it RAINS, I'll stay. (бороо орж магадгүй)</span><span class="tag">2-р (бодит бус одоо): If I HAD money, I'd travel. (мөнгө алга)</span><span class="tag">3-р (бодит бус өнгөрсөн): If I HAD HAD money, I WOULD HAVE travelled. (тэр үед мөнгө байгаагүй)</span></div>
        <b>Богино хэлбэр:</b> I'd have told you (would have → 'd have).<br>
        <b>could have / might have</b> ч болно: If I had studied, I could have passed.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        mistake /mɪˈsteɪk/ — алдаа · fail /feɪl/ — бүтэлгүйтэх · failure /ˈfeɪljər/ — бүтэлгүйтэл<br>
        regret /rɪˈɡret/ — харамсах · lesson /ˈlesn/ — сургамж · experience /ɪkˈspɪriəns/ — туршлага<br>
        realize /ˈriːəlaɪz/ — ойлгох · warn /wɔːrn/ — сануулах · advice /ədˈvaɪs/ — зөвлөгөө<br>
        ignore /ɪɡˈnɔːr/ — үл тоох · consequence /ˈkɒnsɪkwəns/ — үр дагавар · avoid /əˈvɔɪd/ — зайлсхийх<br>
        blame /bleɪm/ — буруутгах · learn from /lɜːrn frɒm/ — -аас сурах · in hindsight /ɪn ˈhaɪndsaɪt/ — эргэж бодоход</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have known» ✗ — if талд <b>would ХЭЗЭЭ Ч байхгүй</b>: <b>If I HAD KNOWN</b> ✓. Мөн «I would have knew» ✗ → <b>would have KNOWN</b> ✓ (V3!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF + HAD + V3 , WOULD HAVE + V3» — хоёр талдаа V3! if талд would ✗.</p>`
    },
    phrases:[
      {en:"If I had known, I would have told you.", pron:"иф ай хэд ноун, ай вүд хэв тоулд ю.", mn:"Мэдсэн бол чамд хэлэх байсан."},
      {en:"If I had studied harder, I would have passed.", pron:"иф ай хэд стадид хардэр, ай вүд хэв паст.", mn:"Илүү шаргуу сурсан бол тэнцэх байсан."},
      {en:"If she hadn't warned me, I would have made a big mistake.", pron:"иф ши хэднт ворнд ми, ай вүд хэв мэйд э биг мистэйк.", mn:"Тэр надад сануулаагүй бол том алдаа гаргах байсан."},
      {en:"In hindsight, I should have listened to their advice.", pron:"ин хайндсайт, ай шүд хэв лиснд ту зэр эдвайс.", mn:"Эргэж бодоход тэдний зөвлөгөөг сонсох ёстой байсан."},
      {en:"Every failure is a lesson if you learn from it.", pron:"эври фэйлюр из э лесн иф ю лөрн фром ит.", mn:"Сургамж авбал бүтэлгүйтэл бүр сургамж болно."}
    ],
    exercises:[
      {q:"if талд:", parts:["If I ", " known, I'd have told you."], opts:["had","would have"], a:0, fix:"if талд would ✗ → HAD known."},
      {q:"Гол хэсэг:", parts:["If I had studied, I ", " passed."], opts:["would have","would"], a:0, fix:"3-р нөхцөл → would HAVE passed."},
      {q:"V3 хэлбэр:", parts:["I would have ", " you."], opts:["told","tell"], a:0, fix:"would have + V3 → told."},
      {q:"Аль нөхцөл:", parts:["If it ", " tomorrow, I'll stay. (бодит)"], opts:["rains","had rained"], a:0, fix:"Бодит ирээдүй → 1-р нөхцөл."}
    ],
    speak:{ scene:'Алдаагаа эргэцүүлэх', turns:[
      {ruby:"Why didn't you tell me about the meeting?", pron:"вай диднт ю тэл ми эбаут зэ мийтинг?", mn:"Яагаад хурлын тухай надад хэлээгүй юм бэ?",
        choices:[{t:"I'm sorry! If I had known, I would have told you.",best:true,mn:"Уучлаарай! Мэдсэн бол хэлэх байсан."},{t:"Sorry! If I would have known, I told you.",best:false,fix:"if талд would ✗ → If I HAD KNOWN, I WOULD HAVE TOLD you."}]},
      {ruby:"Bat warned you about it last week, didn't he?", pron:"Бат ворнд ю эбаут ит ласт вийк, диднт хи?", mn:"Бат өнгөрсөн долоо хоногт чамд сануулсан биз дээ?",
        choices:[{t:"He did. In hindsight, I should have listened to his advice.",best:true,mn:"Тийм. Эргэж бодоход түүний зөвлөгөөг сонсох ёстой байсан."},{t:"He did. I should listened his advice.",best:false,fix:"I should HAVE LISTENED TO his advice."}]},
      {ruby:"Well, don't blame yourself too much.", pron:"вэл, доунт блэйм ёрсэлф ту мач.", mn:"За, өөрийгөө хэт бүү буруутга.",
        choices:[{t:"Thanks. Every failure is a lesson if you learn from it!",best:true,mn:"Баярлалаа. Сургамж авбал бүтэлгүйтэл бүр сургамж болно!"},{t:"Thanks. Every failure is lesson if you learn it.",best:false,fix:"a lesson if you learn FROM it."}]}
    ]}
  },
  {
    id:'b1m1l7', title:"1.7 Өөртөө итгэх", level:"B1 · М1",
    blurb:"She must have been nervous — өнгөрсний таамаг ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: modals of past deduction",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ ӨНГӨРСӨН тухай логик дүгнэлт — A2-ийн «must be»-ийн өнгөрсөн хэлбэр!<br><br>
        <b>модаль + HAVE + V3:</b>
        <div style="margin:12px 0"><span class="tag">MUST HAVE BEEN = 95% тийм байсан: She MUST HAVE BEEN nervous.</span><span class="tag">MIGHT / COULD HAVE BEEN = 50%: He might have forgotten.</span><span class="tag">CAN'T HAVE BEEN = 95% биш: She CAN'T HAVE BEEN nervous — she looked so calm!</span></div>
        <b>Одоо ⟷ Өнгөрсөн:</b>
        <div style="margin:12px 0"><span class="tag">Одоо: She must BE nervous. (одоо сандарч байгаа)</span><span class="tag">Өнгөрсөн: She must HAVE BEEN nervous. (тэр үед сандарсан байх)</span></div>
        <b>⚠️ Эсрэг нь can't have</b> (mustn't have ✗ — тийм зүйл байхгүй!)<br>
        <b>Ярианд:</b> must've /мастэв/ · can't have /кантэв/ — ингэж сонсогдоно.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        confident /ˈkɒnfɪdənt/ — өөртөө итгэлтэй · confidence /ˈkɒnfɪdəns/ — итгэл · nervous /ˈnɜːrvəs/ — сандарсан<br>
        anxious /ˈæŋkʃəs/ — түгшсэн · calm /kɑːm/ — тайван · brave /breɪv/ — зоригтой<br>
        shy /ʃaɪ/ — ичимхий · doubt /daʊt/ — эргэлзэх · believe in /bɪˈliːv ɪn/ — итгэх<br>
        self-esteem /ˌself ɪˈstiːm/ — өөрийгөө үнэлэх · fear /fɪr/ — айдас · face /feɪs/ — тулгарах<br>
        practice /ˈpræktɪs/ — дадлага · prepare /prɪˈper/ — бэлдэх · nervous wreck /ˈnɜːrvəs rek/ — сандралд автсан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She mustn't have been nervous» ✗ → эсрэг нь <b>can't have been</b> ✓. Мөн «must have was» ✗ → <b>must have BEEN</b> ✓ (V3!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUST HAVE (95% тийм) ⟷ CAN'T HAVE (95% үгүй) · дунд нь MIGHT HAVE (50%)».</p>`
    },
    phrases:[
      {en:"She must have been nervous before the presentation.", pron:"ши маст хэв бийн нөрвэс бифор зэ призэнтэйшн.", mn:"Илтгэлийн өмнө тэр сандарсан байх."},
      {en:"He can't have been scared — he looked so calm!", pron:"хи кант хэв бийн скэрд — хи лүкт соу кам!", mn:"Тэр айсан байх боломжгүй — их тайван харагдаж байсан!"},
      {en:"They might have forgotten about the meeting.", pron:"зэй майт хэв форготн эбаут зэ мийтинг.", mn:"Тэд хурлын тухай мартсан байж магадгүй."},
      {en:"You must have practised a lot!", pron:"ю маст хэв прэктист э лот!", mn:"Та их дадлага хийсэн байх!"},
      {en:"Confidence comes from facing your fears.", pron:"конфидэнс камз фром фэйсинг ёр фиэрз.", mn:"Итгэл нь айдастайгаа тулгарснаас ирдэг."}
    ],
    exercises:[
      {q:"95% тийм:", parts:["She ", " been nervous."], opts:["must have","must"], a:0, fix:"Өнгөрсөн таамаг → must HAVE been."},
      {q:"95% үгүй:", parts:["He ", " been scared — he was so calm!"], opts:["can't have","mustn't have"], a:0, fix:"Эсрэг нь → can't have (mustn't have ✗)."},
      {q:"V3 хэлбэр:", parts:["They might have ", " it."], opts:["forgotten","forgot"], a:0, fix:"have + V3 → forgotten."},
      {q:"Одоо/өнгөрсөн:", parts:["She must ", " nervous now."], opts:["be","have been"], a:0, fix:"«now» → must BE nervous."}
    ],
    speak:{ scene:'Илтгэлийн дараа', turns:[
      {ruby:"Saraa's presentation was amazing! Was she nervous?", pron:"Сараагийн призэнтэйшн воз эмэйзинг! воз ши нөрвэс?", mn:"Сараагийн илтгэл гайхалтай байлаа! Сандарсан уу?",
        choices:[{t:"She must have been nervous, but she hid it well!",best:true,mn:"Сандарсан байх, гэхдээ сайн нуусан!"},{t:"She must be nervous, but she hid it.",best:false,fix:"Өнгөрсөн → she MUST HAVE BEEN nervous."}]},
      {ruby:"Really? She looked so calm.", pron:"риали? ши лүкт соу кам.", mn:"Үнэхээр үү? Их тайван харагдаж байсан.",
        choices:[{t:"Well, she can't have been that scared. She must have practised a lot.",best:true,mn:"За, тэгтлээ айсан байх боломжгүй. Их дадлага хийсэн байх."},{t:"Well, she mustn't have been scared. She must practised a lot.",best:false,fix:"CAN'T HAVE BEEN scared. must HAVE PRACTISED."}]},
      {ruby:"Bat didn't come though. Where was he?", pron:"Бат диднт кам зоу. вэр воз хи?", mn:"Гэхдээ Бат ирээгүй. Хаана байсан бол?",
        choices:[{t:"He might have forgotten. Or he could have been ill.",best:true,mn:"Мартсан байж магадгүй. Эсвэл өвчтэй байсан байж болно."},{t:"He might forget. Or he could be ill.",best:false,fix:"Өнгөрсөн → might HAVE FORGOTTEN / could HAVE BEEN ill."}]}
    ]}
  },
  {
    id:'b1m1l8', title:"1.8 Сонголт", level:"B1 · М1",
    blurb:"You needn't have worried — шаардлагагүй байсан ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: needn't have ⟷ didn't need to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ B1-ийн нарийн ялгаа — <b>хийсэн үү, үгүй юу?</b><br><br>
        <b>⚠️ Хоёулаа «хэрэггүй байсан» гэсэн ч ЯЛГААТАЙ:</b>
        <div style="margin:12px 0"><span class="tag">needn't have + V3 = ХИЙЧИХСЭН, гэтэл хэрэггүй байсан: You NEEDN'T HAVE WORRIED. (санаа зовсон, гэхдээ дэмий байсан)</span><span class="tag">didn't need to + үйл үг = ХИЙГЭЭГҮЙ, учир нь хэрэггүй байсан: I DIDN'T NEED TO WORRY. (санаа зоволгүй өнгөрсөн)</span></div>
        <b>Жишээгээр:</b>
        <div style="margin:12px 0"><span class="tag">I needn't have bought milk — we had some! (авчихсан, дэмий болсон)</span><span class="tag">I didn't need to buy milk — we had some. (аваагүй, шаардлагагүй байсан)</span></div>
        <b>Санамж (A2 M2.5):</b> had to = ёстой болсон · didn't have to = шаардлагагүй байсан.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        choice /tʃɔɪs/ — сонголт · decision /dɪˈsɪʒn/ — шийдвэр · option /ˈɒpʃn/ — хувилбар<br>
        decide /dɪˈsaɪd/ — шийдэх · consider /kənˈsɪdər/ — эргэцүүлэх · weigh up /weɪ ʌp/ — жиших<br>
        alternative /ɔːlˈtɜːrnətɪv/ — өөр хувилбар · hesitate /ˈhezɪteɪt/ — эргэлзэх · unnecessary /ʌnˈnesəsəri/ — шаардлагагүй<br>
        pointless /ˈpɔɪntləs/ — утгагүй · waste /weɪst/ — үрэх · worry /ˈwʌri/ — санаа зовох<br>
        rush /rʌʃ/ — яарах · calm down /kɑːm daʊn/ — тайвшрах · turn out /tɜːrn aʊt/ — болж таарах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You needn't have to worry» ✗ → <b>needn't HAVE WORRIED</b> ✓. Мөн хоёрыг андуурах: «I needn't have bought it» = <b>авчихсан</b> ⟷ «I didn't need to buy it» = <b>аваагүй</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «NEEDN'T HAVE = хийчихсэн, дэмий · DIDN'T NEED TO = хийгээгүй, зөв».</p>`
    },
    phrases:[
      {en:"You needn't have worried — everything turned out fine!", pron:"ю ниднт хэв варид — эврисинг төрнд аут файн!", mn:"Санаа зовох хэрэггүй байсан — бүх юм сайхан болсон!"},
      {en:"I needn't have rushed — the train was late anyway.", pron:"ай ниднт хэв рашт — зэ трэйн воз лэйт энивэй.", mn:"Яарах хэрэггүй байсан — галт тэрэг ямар ч байсан хоцорсон."},
      {en:"I didn't need to buy milk — we already had some.", pron:"ай диднт нийд ту бай милк — ви олрэди хэд сам.", mn:"Сүү авах шаардлагагүй байсан — аль хэдийн байсан."},
      {en:"It's a difficult decision — let me weigh up the options.", pron:"итс э дификалт дисижн — лет ми вэй ап зэ опшнз.", mn:"Хэцүү шийдвэр — хувилбаруудаа жишиж үзье."},
      {en:"Don't hesitate — just make a choice!", pron:"доунт хэзитэйт — жаст мэйк э чойс!", mn:"Бүү эргэлз — зүгээр сонголтоо хий!"}
    ],
    exercises:[
      {q:"Хийчихсэн:", parts:["You ", " worried — it was fine!"], opts:["needn't have","didn't need to"], a:0, fix:"Санаа зовсон, дэмий → needn't have worried."},
      {q:"Хийгээгүй:", parts:["I ", " buy milk — we had some."], opts:["didn't need to","needn't have"], a:0, fix:"Аваагүй → didn't need to buy."},
      {q:"Бүтэц:", parts:["You needn't ", " rushed."], opts:["have","have to"], a:0, fix:"needn't HAVE rushed."},
      {q:"V3 хэлбэр:", parts:["I needn't have ", " it."], opts:["bought","buy"], a:0, fix:"have + V3 → bought."}
    ],
    speak:{ scene:'Дэмий санаа зовсон', turns:[
      {ruby:"How was the interview? I was so worried for you!", pron:"хау воз зэ интэрвью? ай воз соу варид фор ю!", mn:"Ярилцлага ямар байв? Чиний төлөө их санаа зовсон!",
        choices:[{t:"You needn't have worried — it went really well!",best:true,mn:"Санаа зовох хэрэггүй байсан — маш сайн болсон!"},{t:"You didn't need to worry — it went well.",best:false,fix:"Санаа зовчихсон → You NEEDN'T HAVE WORRIED."}]},
      {ruby:"Were you nervous? Did you get there early?", pron:"вөр ю нөрвэс? дид ю гет зэр өрли?", mn:"Сандарсан уу? Эрт очсон уу?",
        choices:[{t:"Too early! I needn't have rushed — they started twenty minutes late.",best:true,mn:"Хэтэрхий эрт! Яарах хэрэггүй байсан — тэд 20 минут хоцорч эхэлсэн."},{t:"Too early! I didn't need to rush.",best:false,fix:"Яарчихсан → I NEEDN'T HAVE RUSHED."}]},
      {ruby:"Did you take your certificates?", pron:"дид ю тэйк ёр сөртификэйтс?", mn:"Гэрчилгээгээ авч явсан уу?",
        choices:[{t:"No — I didn't need to. They had everything on file already.",best:true,mn:"Үгүй — шаардлагагүй байсан. Тэдэнд бүх юм байсан."},{t:"No — I needn't have taken them.",best:false,fix:"Аваагүй → I DIDN'T NEED TO."}]}
    ]}
  },
  {
    id:'b1m1l9', title:"1.9 Ахиц", level:"B1 · М1",
    blurb:"4 өнгөрсөн цагийг нэг түүхэнд ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: narrative tenses (өгүүлэмжийн цагууд)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Жинхэнэ түүх өгүүлэх — 4 өнгөрсөн цагийг НЭГ ДОР!<br><br>
        <b>Түүхийн 4 давхар:</b>
        <div style="margin:12px 0"><span class="tag">1️⃣ PAST SIMPLE = гол үйл явдал: I started learning English.</span><span class="tag">2️⃣ PAST CONTINUOUS = дэвсгэр: It was raining and I was feeling low.</span><span class="tag">3️⃣ PAST PERFECT = өмнө нь болсон: I had failed the test twice before.</span><span class="tag">4️⃣ PAST PERFECT CONTINUOUS = өмнө нь хэр удаан: I had been trying for years.</span></div>
        <b>Бүрэн жишээ:</b>
        <div style="margin:12px 0"><span class="tag">It WAS RAINING (дэвсгэр) when I GOT (үйл явдал) the letter. I HAD BEEN WAITING (өмнө нь удаан) for months. I HAD ALMOST GIVEN UP (өмнө нь болсон), but then everything CHANGED (үйл явдал).</span></div>
        <b>Түүх өгүүлэх холбоос:</b> at first · then · after that · suddenly · in the end · eventually.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        progress /ˈproʊɡres/ — ахиц · improve /ɪmˈpruːv/ — сайжрах · develop /dɪˈveləp/ — хөгжих<br>
        step /step/ — алхам · slowly /ˈsloʊli/ — удаан · steadily /ˈstedɪli/ — тогтвортой<br>
        breakthrough /ˈbreɪkθruː/ — эрс ахиц · turning point /ˈtɜːrnɪŋ pɔɪnt/ — эргэлтийн цэг · eventually /ɪˈventʃuəli/ — эцэст нь<br>
        give up /ɡɪv ʌp/ — бууж өгөх · keep going /kiːp ˈɡoʊɪŋ/ — үргэлжлүүлэх · patience /ˈpeɪʃns/ — тэвчээр<br>
        setback /ˈsetbæk/ — саад · overcome /ˌoʊvərˈkʌm/ — даван туулах · look back /lʊk bæk/ — эргэн харах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Бүх түүхийг Past Simple-ээр өгүүлэх — уйтгартай, тодорхойгүй! 4 давхар ашиглавал түүх <b>амьд</b> болно.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Дэвсгэр (was -ing) → Үйл явдал (did) → Өмнөх түүх (had done) → Хэр удаан (had been -ing)».</p>`
    },
    phrases:[
      {en:"I had been trying for years before I saw any progress.", pron:"ай хэд бийн трайинг фор йирз бифор ай со эни прогрэс.", mn:"Ахиц харахаасаа өмнө олон жил хичээж байсан."},
      {en:"I had almost given up when everything changed.", pron:"ай хэд олмоуст гивн ап вэн эврисинг чэйнжд.", mn:"Бүх юм өөрчлөгдөх үед бараг бууж өгсөн байсан."},
      {en:"It was raining and I was feeling low that day.", pron:"ит воз рэйнинг энд ай воз фийлинг лоу зэт дэй.", mn:"Тэр өдөр бороо орж, би сэтгэл гутарсан байсан."},
      {en:"That was the turning point in my life.", pron:"зэт воз зэ төрнинг пойнт ин май лайф.", mn:"Тэр бол миний амьдралын эргэлтийн цэг байлаа."},
      {en:"Looking back, every setback taught me something.", pron:"лүкинг бэк, эври сэтбэк тот ми самсинг.", mn:"Эргэн харахад саад бүр надад ямар нэг зүйл заасан."}
    ],
    exercises:[
      {q:"Дэвсгэр:", parts:["It ", " when I got the letter."], opts:["was raining","rained"], a:0, fix:"Дэвсгэр → was raining."},
      {q:"Өмнөх түүх:", parts:["I ", " up before that day."], opts:["had almost given","almost gave"], a:0, fix:"Өмнө нь → had given up."},
      {q:"Хэр удаан:", parts:["I ", " for years before I saw progress."], opts:["had been trying","tried"], a:0, fix:"Хэр удаан → had been trying."},
      {q:"Гол үйл явдал:", parts:["Then everything ", "."], opts:["changed","had changed"], a:0, fix:"Гол үйл явдал → Past Simple."}
    ],
    speak:{ scene:'Ахицынхаа түүх', turns:[
      {ruby:"When did you first see real progress in English?", pron:"вэн дид ю фөрст сий риэл прогрэс ин Инглиш?", mn:"Англи хэлэндээ хэзээ анх жинхэнэ ахиц харсан бэ?",
        choices:[{t:"About a year ago. I had been trying for years before I saw any progress.",best:true,mn:"Жил орчмын өмнө. Ахиц харахаасаа өмнө олон жил хичээж байсан."},{t:"A year ago. I tried for years before I saw progress.",best:false,fix:"Өнгөрсний өмнөх → I HAD BEEN TRYING for years."}]},
      {ruby:"Did you ever want to give up?", pron:"дид ю эвэр вонт ту гив ап?", mn:"Бууж өгмөөр санагдаж байсан уу?",
        choices:[{t:"Yes! It was raining and I was feeling low. I had almost given up when I got a message from a friend.",best:true,mn:"Тийм! Бороо орж, сэтгэл гутарсан байсан. Найзаас мессеж ирэхэд бараг бууж өгсөн байлаа."},{t:"Yes! It rained and I felt low. I almost gave up when I got a message.",best:false,fix:"Дэвсгэр → It WAS RAINING, I WAS FEELING low. Өмнөх → I HAD ALMOST GIVEN UP."}]},
      {ruby:"What did the message say?", pron:"вот дид зэ мэсиж сэй?", mn:"Мессежинд юу гэсэн байсан бэ?",
        choices:[{t:"Just «keep going». That was the turning point. Looking back, every setback taught me something.",best:true,mn:"Зүгээр «үргэлжлүүл» гэсэн. Тэр бол эргэлтийн цэг байлаа. Эргэн харахад саад бүр надад юм заасан."},{t:"«Keep going». That was turning point. Every setback teached me something.",best:false,fix:"THE turning point. teach → TAUGHT."}]}
    ]}
  },
  {
    id:'b1m1l10', title:"1.10 Модулийн төсөл", level:"B1 · М1",
    blurb:"🏆 Хувийн хөгжлийн түүхээ өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 1-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 1-ийн мэдлэгээ нэгтгэж, жинхэнэ B1 түвшний өгүүлэмж бүтээх.<br><br>
        <b>Модуль 1-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">By 2030 I'll HAVE finished ⭐⭐⭐</span><span class="tag">This time next year I'll BE working ⭐⭐</span><span class="tag">I wish I HAD more time ⭐⭐⭐</span><span class="tag">By the time I arrived, it HAD started ⭐⭐⭐</span><span class="tag">I HAD BEEN studying for years ⭐⭐</span><span class="tag">If I HAD known, I WOULD HAVE told you ⭐⭐⭐</span><span class="tag">She MUST HAVE BEEN nervous ⭐⭐⭐</span><span class="tag">You NEEDN'T HAVE worried ⭐⭐</span><span class="tag">4 өнгөрсөн цаг нэг түүхэнд ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Хувийн хөгжлийн түүх (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Two years ago, I decided to change my life. I had been working in the same job for eight years and I had never felt so stuck. I wish I had started earlier! At first, it was really hard. By the time I got home every evening, my children had already gone to bed. If I hadn't found an online course, I would have given up. My family must have thought I was crazy — but they supported me anyway. Looking back, I needn't have worried so much. Everything turned out fine. By next summer, I will have finished my second course. This time next year, I'll be working in a completely new field. Every setback taught me something!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 өгүүлэмжийн 4 давхар: <b>Өмнөх түүх</b> (had been working) → <b>Эргэлт</b> (decided, If I hadn't...) → <b>Эргэцүүлэл</b> (must have thought, needn't have) → <b>Ирээдүй</b> (will have finished, will be working).</p>`
    },
    phrases:[
      {en:"I had been working in the same job for eight years.", pron:"ай хэд бийн вөркинг ин зэ сэйм жоб фор эйт йирз.", mn:"Найман жил нэг ажил дээр ажилласан байсан."},
      {en:"By the time I got home, my children had gone to bed.", pron:"бай зэ тайм ай гот хоум, май чилдрэн хэд гон ту бэд.", mn:"Гэртээ ирэх үед хүүхдүүд маань унтчихсан байдаг байлаа."},
      {en:"If I hadn't found that course, I would have given up.", pron:"иф ай хэднт фаунд зэт корс, ай вүд хэв гивн ап.", mn:"Тэр сургалтыг олоогүй бол бууж өгөх байсан."},
      {en:"My family must have thought I was crazy!", pron:"май фэмили маст хэв сот ай воз крэйзи!", mn:"Гэр бүл маань намайг галзуурсан гэж бодсон байх!"},
      {en:"By next summer, I will have finished my second course.", pron:"бай нэкст саммэр, ай вил хэв финишт май сэконд корс.", mn:"Ирэх зун гэхэд хоёр дахь сургалтаа дуусгачихсан байна."}
    ],
    exercises:[
      {q:"Давтлага (Future Perfect):", parts:["By 2030, I ", " my degree."], opts:["will have finished","will finish"], a:0, fix:"by → will HAVE finished."},
      {q:"Давтлага (Past Perfect):", parts:["By the time I arrived, it ", "."], opts:["had started","started"], a:0, fix:"Аль хэдийн → had started."},
      {q:"Давтлага (3-р нөхцөл):", parts:["If I ", " known, I'd have told you."], opts:["had","would have"], a:0, fix:"if талд would ✗."},
      {q:"Давтлага (wish):", parts:["I wish I ", " more time."], opts:["had","have"], a:0, fix:"wish + өнгөрсөн цаг."}
    ],
    speak:{ scene:'🏆 Төсөл: Хувийн хөгжлийн түүх', turns:[
      {ruby:"Tell me about the biggest change in your life.", pron:"тэл ми эбаут зэ бигэст чэйнж ин ёр лайф.", mn:"Амьдралынхаа хамгийн том өөрчлөлтийн тухай яриач.",
        choices:[{t:"Two years ago I changed careers. I had been working in the same job for eight years.",best:true,mn:"Хоёр жилийн өмнө мэргэжлээ сольсон. Найман жил нэг ажил дээр ажилласан байсан."},{t:"Two years ago I changed careers. I worked in the same job for eight years.",best:false,fix:"Өнгөрсний өмнөх → I HAD BEEN WORKING."}]},
      {ruby:"That's brave! Was it difficult at the start?", pron:"зэтс брэйв! воз ит дификалт эт зэ старт?", mn:"Зоригтой юм! Эхэндээ хэцүү байсан уу?",
        choices:[{t:"Very. By the time I got home, my children had already gone to bed. If I hadn't found an online course, I would have given up.",best:true,mn:"Их. Гэртээ ирэх үед хүүхдүүд унтчихсан байдаг байлаа. Онлайн сургалт олоогүй бол бууж өгөх байсан."},{t:"Very. When I got home, children already went to bed. If I didn't find a course, I gave up.",best:false,fix:"had ALREADY GONE. If I HADN'T FOUND..., I WOULD HAVE GIVEN UP."}]},
      {ruby:"And what's next for you?", pron:"энд вотс нэкст фор ю?", mn:"Дараа нь юу хийх вэ?",
        choices:[{t:"By next summer, I'll have finished my second course. This time next year, I'll be working in a new field!",best:true,mn:"Ирэх зун гэхэд хоёр дахь сургалтаа дуусгачихсан байна. Ирэх жилийн энэ үед шинэ салбарт ажиллаж байх болно!"},{t:"By next summer, I finish my course. Next year, I work in a new field.",best:false,fix:"I'LL HAVE FINISHED... I'LL BE WORKING."}]}
    ]}
  },
  {
    id:'b1m2l1', title:"2.1 Сургалтын арга", level:"B1 · М2",
    blurb:"It's worth trying / no point in waiting ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: it's worth / there's no point in / it's no use + -ing",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ямар арга <b>үнэ цэнэтэй</b>, ямар нь <b>дэмий</b> болохыг хэлэх.<br><br>
        <b>Гурвуулаа + -ING:</b>
        <div style="margin:12px 0"><span class="tag">It's WORTH + -ing = үнэ цэнэтэй: It's worth TRYING this method.</span><span class="tag">There's NO POINT IN + -ing = утгагүй: There's no point in JUST memorising.</span><span class="tag">It's NO USE + -ing = дэмий: It's no use WORRYING about it.</span></div>
        <b>⚠️ «to» ХЭЗЭЭ Ч биш!</b>
        <div style="margin:12px 0"><span class="tag">It's worth to try ✗ → It's worth TRYING ✓</span><span class="tag">There's no point to wait ✗ → no point IN WAITING ✓</span></div>
        <b>Бусад -ing авдаг бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">It's a waste of time + -ing · I can't help + -ing (тэвчиж чадахгүй) · How about + -ing</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        method /ˈmeθəd/ — арга · approach /əˈproʊtʃ/ — хандлага · technique /tekˈniːk/ — техник<br>
        memorise /ˈmeməraɪz/ — цээжлэх · revise /rɪˈvaɪz/ — давтах · note-taking /ˈnoʊt teɪkɪŋ/ — тэмдэглэл хөтлөх<br>
        highlight /ˈhaɪlaɪt/ — тодруулах · summarise /ˈsʌməraɪz/ — товчлох · repetition /ˌrepəˈtɪʃn/ — давталт<br>
        effective /ɪˈfektɪv/ — үр дүнтэй · efficient /ɪˈfɪʃnt/ — үр ашигтай · retain /rɪˈteɪn/ — санах ойд хадгалах<br>
        absorb /əbˈzɔːrb/ — шингээх · focus /ˈfoʊkəs/ — төвлөрөх · distraction /dɪˈstrækʃn/ — сарниулагч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It's worth to try» ✗ — <b>worth</b> нь угтвар мэт ажилладаг тул <b>-ing</b>: <b>It's worth TRYING</b> ✓. Мөн «no point of» ✗ → <b>no point IN</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WORTH · NO POINT IN · NO USE — гурвуулаа -ING авна (to ✗)».</p>`
    },
    phrases:[
      {en:"It's worth trying different learning methods.", pron:"итс вөрс трайинг дифрэнт лөрнинг мэсэдз.", mn:"Өөр өөр сурах арга туршиж үзэх нь үнэ цэнэтэй."},
      {en:"There's no point in just memorising words.", pron:"зэрз ноу пойнт ин жаст мэмэрайзинг вөрдз.", mn:"Зүгээр үг цээжлэх нь утгагүй."},
      {en:"It's no use worrying about mistakes.", pron:"итс ноу юс варинг эбаут мистэйкс.", mn:"Алдааны талаар санаа зовох нь дэмий."},
      {en:"Repetition is the most effective technique.", pron:"рэпэтишн из зэ моуст ифэктив тэкник.", mn:"Давталт бол хамгийн үр дүнтэй техник."},
      {en:"It's a waste of time studying without focus.", pron:"итс э вэйст ов тайм стадиинг визаут фоукэс.", mn:"Төвлөрөлгүй сурах нь цаг үрсэн хэрэг."}
    ],
    exercises:[
      {q:"worth + :", parts:["It's worth ", " this method."], opts:["trying","to try"], a:0, fix:"worth + -ing → trying."},
      {q:"Угтвар:", parts:["There's no point ", " waiting."], opts:["in","to"], a:0, fix:"no point IN waiting."},
      {q:"no use + :", parts:["It's no use ", " about it."], opts:["worrying","to worry"], a:0, fix:"no use + -ing → worrying."},
      {q:"waste + :", parts:["It's a waste of time ", " without focus."], opts:["studying","to study"], a:0, fix:"waste of time + -ing."}
    ],
    speak:{ scene:'Сурах арга ярилцах', turns:[
      {ruby:"I keep forgetting new words. What should I do?", pron:"ай кийп форгетинг ню вөрдз. вот шүд ай ду?", mn:"Шинэ үгээ байнга мартаад байна. Яах вэ?",
        choices:[{t:"There's no point in just memorising them. It's worth trying repetition.",best:true,mn:"Зүгээр цээжлэх нь утгагүй. Давталт туршиж үзэх нь үнэ цэнэтэй."},{t:"There's no point to memorise them. It's worth to try repetition.",best:false,fix:"no point IN memorisING. worth TRYING."}]},
      {ruby:"But I make so many mistakes!", pron:"бат ай мэйк соу мэни мистэйкс!", mn:"Гэхдээ би маш олон алдаа гаргадаг!",
        choices:[{t:"It's no use worrying about mistakes — they're part of learning.",best:true,mn:"Алдааны талаар санаа зовох нь дэмий — сурахын нэг хэсэг."},{t:"It's no use to worry about mistakes.",best:false,fix:"no use WORRYING (to ✗)."}]},
      {ruby:"OK. Should I study for four hours every night?", pron:"оукэй. шүд ай стади фор фор ауэрз эври найт?", mn:"За. Шөнө бүр 4 цаг сурах уу?",
        choices:[{t:"It's a waste of time studying without focus. Twenty minutes a day is more effective.",best:true,mn:"Төвлөрөлгүй сурах нь цаг үрсэн хэрэг. Өдөрт 20 минут илүү үр дүнтэй."},{t:"It's waste of time to study without focus.",best:false,fix:"It's A waste of time STUDYING."}]}
    ]}
  },
  {
    id:'b1m2l2', title:"2.2 Онлайн сургалт", level:"B1 · М2",
    blurb:"He suggested taking a course — reporting verbs ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: suggest / recommend / advise (зөвлөх үйл үгс)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ «said/told»-оос цааш — зөвлөгөөг дамжуулах <b>тусгай үйл үгс</b>. Тус бүр өөрийн бүтэцтэй!<br><br>
        <b>⚠️ 3 өөр бүтэц — цээжлэх хэрэгтэй:</b>
        <div style="margin:12px 0"><span class="tag">suggest + -ING (хүнгүй!): He SUGGESTED TAKING a course.</span><span class="tag">recommend + -ING: She RECOMMENDED USING that app.</span><span class="tag">advise + ХҮН + TO: He ADVISED ME TO study daily.</span></div>
        <b>⚠️ Хамгийн түгээмэл алдаа:</b>
        <div style="margin:12px 0"><span class="tag">He suggested me to take ✗ (хүн ✗, to ✗)</span><span class="tag">He suggested TAKING ✓ · He suggested THAT I TAKE ✓</span></div>
        <b>«that»-тай хувилбар:</b> suggest/recommend + that + хүн + <b>нүцгэн үйл үг</b>: He suggested that I take a course. (takes ✗)
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        online course /ˈɒnlaɪn kɔːrs/ — онлайн сургалт · platform /ˈplætfɔːrm/ — платформ · enrol /ɪnˈroʊl/ — бүртгүүлэх<br>
        module /ˈmɒdjuːl/ — модуль · lecture /ˈlektʃər/ — лекц · tutor /ˈtuːtər/ — багш<br>
        assignment /əˈsaɪnmənt/ — даалгавар · submit /səbˈmɪt/ — илгээх · certificate /sərˈtɪfɪkət/ — гэрчилгээ<br>
        flexible /ˈfleksəbl/ — уян хатан · self-paced /ˌself ˈpeɪst/ — өөрийн хурдаар · interactive /ˌɪntərˈæktɪv/ — интерактив<br>
        suggest /səˈdʒest/ — санал болгох · recommend /ˌrekəˈmend/ — зөвлөх · advise /ədˈvaɪz/ — зөвлөгөө өгөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He suggested me to take a course» ✗ — <b>suggest</b> нь хүн авдаггүй! → <b>He suggested TAKING</b> ✓ эсвэл <b>He suggested THAT I TAKE</b> ✓. Харин <b>advise</b> нь хүн авна: <b>He advised ME TO take</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SUGGEST/RECOMMEND → -ING (хүнгүй) · ADVISE/TELL → ХҮН + TO».</p>`
    },
    phrases:[
      {en:"My tutor suggested taking an online course.", pron:"май тютэр сэгжэстид тэйкинг эн онлайн корс.", mn:"Багш маань онлайн сургалтад суухыг санал болгосон."},
      {en:"She recommended using that platform.", pron:"ши рэкэмэндид юзинг зэт плэтформ.", mn:"Тэр тэр платформыг ашиглахыг зөвлөсөн."},
      {en:"He advised me to submit the assignment early.", pron:"хи эдвайзд ми ту сэбмит зэ эсайнмэнт өрли.", mn:"Тэр надад даалгавраа эрт илгээхийг зөвлөсөн."},
      {en:"They suggested that I enrol in the advanced module.", pron:"зэй сэгжэстид зэт ай инроул ин зэ эдванст модьюл.", mn:"Тэд надад гүнзгий модульд бүртгүүлэхийг санал болгосон."},
      {en:"The course is self-paced and very flexible.", pron:"зэ корс из сэлф-пэйст энд вэри флэксэбл.", mn:"Сургалт өөрийн хурдаар, маш уян хатан."}
    ],
    exercises:[
      {q:"suggest:", parts:["He suggested ", " a course."], opts:["taking","me to take"], a:0, fix:"suggest + -ing (хүн ✗)."},
      {q:"advise:", parts:["He advised ", " study daily."], opts:["me to","taking"], a:0, fix:"advise + ХҮН + TO."},
      {q:"recommend:", parts:["She recommended ", " that app."], opts:["using","to use"], a:0, fix:"recommend + -ing."},
      {q:"that-тай:", parts:["He suggested that I ", " the course."], opts:["take","takes"], a:0, fix:"suggest that + нүцгэн үйл үг."}
    ],
    speak:{ scene:'Онлайн сургалт сонгох', turns:[
      {ruby:"Did you talk to your tutor about improving your English?", pron:"дид ю ток ту ёр тютэр эбаут импрувинг ёр Инглиш?", mn:"Англи хэлээ сайжруулах талаар багштайгаа ярьсан уу?",
        choices:[{t:"Yes. He suggested taking an online course.",best:true,mn:"Тийм. Тэр онлайн сургалтад суухыг санал болгосон."},{t:"Yes. He suggested me to take an online course.",best:false,fix:"suggest + -ing (хүн ✗) → suggested TAKING."}]},
      {ruby:"Which platform?", pron:"вич плэтформ?", mn:"Аль платформ?",
        choices:[{t:"He recommended using a self-paced one. And he advised me to study daily.",best:true,mn:"Өөрийн хурдаар суралцах платформыг зөвлөсөн. Мөн өдөр бүр сурахыг зөвлөсөн."},{t:"He recommended to use a self-paced one. And he advised to me study daily.",best:false,fix:"recommended USING. advised ME TO study."}]},
      {ruby:"Have you enrolled yet?", pron:"хэв ю инроулд ет?", mn:"Бүртгүүлчихсэн үү?",
        choices:[{t:"Not yet. They suggested that I enrol in the advanced module first.",best:true,mn:"Хараахан үгүй. Тэд эхлээд гүнзгий модульд бүртгүүлэхийг санал болгосон."},{t:"Not yet. They suggested that I enrols first.",best:false,fix:"suggest that I ENROL (нүцгэн хэлбэр)."}]}
    ]}
  },
  {
    id:'b1m2l3', title:"2.3 Багш сурагч", level:"B1 · М2",
    blurb:"She reminded me to bring it — дам тушаал ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: reported commands & requests",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Тушаал, хүсэлт, сануулгыг дамжуулах — A2-ийн «told me to»-гийн өргөтгөл.<br><br>
        <b>Бүтэц: үйл үг + ХҮН + TO + үйл үг</b>
        <div style="margin:12px 0"><span class="tag">told me TO wait · asked me TO help · reminded me TO bring it · warned me NOT TO be late · encouraged me TO try</span></div>
        <b>⚠️ Үгүйсгэл — «not» нь «to»-гийн ӨМНӨ:</b>
        <div style="margin:12px 0"><span class="tag">She told me NOT TO worry. ✓</span><span class="tag">She told me to not worry ✗</span></div>
        <b>Шууд ⟷ Дам:</b>
        <div style="margin:12px 0"><span class="tag">«Bring your book!» → She TOLD me TO BRING my book.</span><span class="tag">«Please help me» → He ASKED me TO HELP him.</span><span class="tag">«Don't be late!» → She WARNED me NOT TO BE late.</span></div>
        <b>Тусгай:</b> offer/promise/refuse нь <b>хүнгүй</b>: He offered TO help. · She refused TO answer.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        remind /rɪˈmaɪnd/ — сануулах · warn /wɔːrn/ — сэрэмжлүүлэх · encourage /ɪnˈkʌrɪdʒ/ — зоригжуулах<br>
        praise /preɪz/ — магтах · criticise /ˈkrɪtɪsaɪz/ — шүүмжлэх · correct /kəˈrekt/ — засах<br>
        strict /strɪkt/ — хатуу · patient /ˈpeɪʃnt/ — тэвчээртэй · supportive /səˈpɔːrtɪv/ — дэмжигч<br>
        explain /ɪkˈspleɪn/ — тайлбарлах · demonstrate /ˈdemənstreɪt/ — үзүүлэх · guide /ɡaɪd/ — чиглүүлэх<br>
        offer /ˈɒfər/ — санал болгох · promise /ˈprɒmɪs/ — амлах · refuse /rɪˈfjuːz/ — татгалзах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She told me to not be late» ✗ → <b>not TO be late</b> ✓. Мөн «He said me to wait» ✗ — <b>say</b> нь хүн авдаггүй: <b>He TOLD me to wait</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ХҮН + TO + үйл үг · Үгүйсгэлд NOT нь TO-гийн өмнө».</p>`
    },
    phrases:[
      {en:"She reminded me to bring my dictionary.", pron:"ши римайндид ми ту бринг май дикшэнэри.", mn:"Тэр надад толь бичгээ авчрахыг сануулсан."},
      {en:"He warned us not to be late for the exam.", pron:"хи ворнд ас нот ту би лэйт фор зэ игзэм.", mn:"Тэр биднийг шалгалтад хоцрохгүй байхыг сануулсан."},
      {en:"My teacher encouraged me to speak more.", pron:"май тийчэр инкариджд ми ту спийк мор.", mn:"Багш маань намайг илүү их ярихыг зоригжуулсан."},
      {en:"He offered to help me with my essay.", pron:"хи офэрд ту хэлп ми виз май эсэй.", mn:"Тэр эсээ бичихэд минь туслахыг санал болгосон."},
      {en:"She refused to give us more time.", pron:"ши рифьюзд ту гив ас мор тайм.", mn:"Тэр бидэнд илүү цаг өгөхөөс татгалзсан."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["She reminded ", " bring it."], opts:["me to","to me to"], a:0, fix:"remind + ХҮН + TO."},
      {q:"Үгүйсгэл:", parts:["He warned me ", " be late."], opts:["not to","to not"], a:0, fix:"NOT нь TO-гийн өмнө."},
      {q:"Хүнгүй:", parts:["He offered ", " help."], opts:["to","me to"], a:0, fix:"offer нь хүн авдаггүй → offered TO help."},
      {q:"say/tell:", parts:["He ", " me to wait."], opts:["told","said"], a:0, fix:"ХҮНТЭЙ → told me."}
    ],
    speak:{ scene:'Багшийн зөвлөгөө', turns:[
      {ruby:"How was your lesson today?", pron:"хау воз ёр лесн тудэй?", mn:"Өнөөдрийн хичээл ямар байсан бэ?",
        choices:[{t:"Good! My teacher encouraged me to speak more in class.",best:true,mn:"Сайхан! Багш маань ангид илүү их ярихыг зоригжуулсан."},{t:"Good! My teacher encouraged to me speak more.",best:false,fix:"encouraged ME TO speak."}]},
      {ruby:"Did she give you any warnings about the exam?", pron:"дид ши гив ю эни ворнингз эбаут зэ игзэм?", mn:"Шалгалтын талаар сануулга өгсөн үү?",
        choices:[{t:"Yes — she warned us not to be late, and reminded me to bring my ID.",best:true,mn:"Тийм — хоцрохгүй байхыг сануулж, үнэмлэхээ авчрахыг сануулсан."},{t:"Yes — she warned us to not be late, and reminded to me bring my ID.",best:false,fix:"warned us NOT TO be late. reminded ME TO bring."}]},
      {ruby:"Did you ask for extra time?", pron:"дид ю аск фор экстра тайм?", mn:"Илүү цаг гуйсан уу?",
        choices:[{t:"I did, but she refused to give us more. She offered to help after class instead.",best:true,mn:"Гуйсан ч өгөхөөс татгалзсан. Оронд нь хичээлийн дараа туслахыг санал болгосон."},{t:"I did, but she refused giving us more. She offered me to help.",best:false,fix:"refused TO GIVE. offered TO help (хүн ✗)."}]}
    ]}
  },
  {
    id:'b1m2l4', title:"2.4 Шалгалт", level:"B1 · М2",
    blurb:"Despite studying hard... — despite / in spite of ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: despite / in spite of ⟷ although",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Эсрэгцүүлэх ахисан хэлбэр — эссэ, албан бичигт зайлшгүй.<br><br>
        <b>⚠️ Гол ялгаа — араас нь юу ирэх вэ:</b>
        <div style="margin:12px 0"><span class="tag">ALTHOUGH / EVEN THOUGH + ӨГҮҮЛБЭР: Although I studied hard, I failed.</span><span class="tag">DESPITE / IN SPITE OF + НЭР ҮГ эсвэл -ING: Despite studying hard, I failed.</span></div>
        <b>Гурван ижил утга:</b>
        <div style="margin:12px 0"><span class="tag">Although I studied hard, I failed. ✓</span><span class="tag">Despite studying hard, I failed. ✓</span><span class="tag">Despite my hard work, I failed. ✓</span></div>
        <b>«the fact that» — гүүр:</b> Despite THE FACT THAT I studied hard, I failed. (өгүүлбэр залгах цорын ганц арга)<br>
        <b>⚠️ despite нь «of» АВДАГГҮЙ:</b> despite of ✗ · in spite OF ✓ (энэ хоёрыг хольж болохгүй!)
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        exam /ɪɡˈzæm/ — шалгалт · test /test/ — сорил · revise /rɪˈvaɪz/ — давтах<br>
        pass /pæs/ — тэнцэх · fail /feɪl/ — унах · resit /ˌriːˈsɪt/ — дахин өгөх<br>
        grade /ɡreɪd/ — үнэлгээ · mark /mɑːrk/ — оноо · result /rɪˈzʌlt/ — дүн<br>
        cheat /tʃiːt/ — хуурах · nervous /ˈnɜːrvəs/ — сандарсан · prepare /prɪˈper/ — бэлдэх<br>
        despite /dɪˈspaɪt/ — үл харгалзан · although /ɔːlˈðoʊ/ — хэдийгээр · pressure /ˈpreʃər/ — дарамт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Despite I studied hard» ✗ — despite нь өгүүлбэр авдаггүй! → <b>Despite STUDYING hard</b> ✓ эсвэл <b>Although I studied hard</b> ✓. Мөн «despite of» ✗ → <b>despite</b> ✓ / <b>in spite OF</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ALTHOUGH + өгүүлбэр · DESPITE + нэр үг/-ING · despite нь of-гүй, in spite нь of-той».</p>`
    },
    phrases:[
      {en:"Despite studying hard, I failed the exam.", pron:"диспайт стадиинг хард, ай фэйлд зэ игзэм.", mn:"Шаргуу сурсан ч шалгалтад унасан."},
      {en:"Although I revised everything, I was still nervous.", pron:"олзоу ай ривайзд эврисинг, ай воз стил нөрвэс.", mn:"Бүгдийг давтсан ч сандарсан хэвээр байсан."},
      {en:"In spite of the pressure, she got a good grade.", pron:"ин спайт ов зэ прэшэр, ши гот э гүд грэйд.", mn:"Дарамттай байсан ч тэр сайн үнэлгээ авсан."},
      {en:"Despite the fact that he had prepared, he made mistakes.", pron:"диспайт зэ фэкт зэт хи хэд припэрд, хи мэйд мистэйкс.", mn:"Бэлдсэн байсан ч тэр алдаа гаргасан."},
      {en:"I have to resit the exam next month.", pron:"ай хэв ту рийсит зэ игзэм нэкст манс.", mn:"Ирэх сард шалгалтаа дахин өгөх ёстой."}
    ],
    exercises:[
      {q:"Бүтэц:", parts:["Despite ", " hard, I failed."], opts:["studying","I studied"], a:0, fix:"despite + -ing (өгүүлбэр ✗)."},
      {q:"Бүтэц:", parts:["", " I studied hard, I failed."], opts:["Although","Despite"], a:0, fix:"Өгүүлбэртэй → Although."},
      {q:"of:", parts:["In spite ", " the pressure..."], opts:["of","—"], a:0, fix:"in spite OF."},
      {q:"of:", parts:["", " the pressure, she passed."], opts:["Despite","Despite of"], a:0, fix:"despite нь of-гүй."}
    ],
    speak:{ scene:'Шалгалтын дүн', turns:[
      {ruby:"How did the exam go?", pron:"хау дид зэ игзэм гоу?", mn:"Шалгалт яаж болов?",
        choices:[{t:"Badly! Despite studying hard, I failed.",best:true,mn:"Муу! Шаргуу сурсан ч унасан."},{t:"Badly! Despite I studied hard, I failed.",best:false,fix:"Despite + -ING → Despite STUDYING hard."}]},
      {ruby:"Really? But you revised everything!", pron:"риали? бат ю ривайзд эврисинг!", mn:"Үнэхээр үү? Гэтэл чи бүгдийг давтсан шүү дээ!",
        choices:[{t:"I know. Although I revised everything, I was too nervous.",best:true,mn:"Мэдэж байна. Бүгдийг давтсан ч хэт сандарсан."},{t:"I know. Despite I revised everything, I was nervous.",best:false,fix:"Өгүүлбэртэй → ALTHOUGH I revised."}]},
      {ruby:"What about Saraa?", pron:"вот эбаут Сараа?", mn:"Сараа яасан бэ?",
        choices:[{t:"In spite of the pressure, she got a great grade! I have to resit next month.",best:true,mn:"Дарамттай байсан ч сайн үнэлгээ авсан! Би ирэх сард дахин өгөх ёстой."},{t:"Despite of the pressure, she got great grade.",best:false,fix:"despite нь of-гүй → IN SPITE OF the pressure."}]}
    ]}
  },
  {
    id:'b1m2l5', title:"2.5 Судалгаа", level:"B1 · М2",
    blurb:"It is said that... — идэвхгүй дам мэдээлэл ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: passive reporting (It is said that...)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Судалгаа, мэдээ, эрдэм шинжилгээний хэл — <b>хэн хэлснийг нэрлэхгүйгээр</b> мэдээлэл дамжуулах.<br><br>
        <b>2 бүтэц, нэг утга:</b>
        <div style="margin:12px 0"><span class="tag">IT IS SAID THAT + өгүүлбэр: It is said that students learn faster online.</span><span class="tag">ХҮН + IS SAID + TO + үйл үг: Students are said to learn faster online.</span></div>
        <b>Ийм үйл үгс:</b> say · think · believe · report · know · expect · consider.
        <div style="margin:12px 0"><span class="tag">It is believed that... · It is thought that... · It is reported that...</span></div>
        <b>Өнгөрсөнд:</b> to + have + V3:
        <div style="margin:12px 0"><span class="tag">He is said TO HAVE STUDIED at Oxford. (тэнд сурсан гэдэг)</span></div>
        <b>Яагаад хэрэглэдэг вэ?</b> Эх сурвалж тодорхойгүй, эсвэл чухал биш үед — эрдэм шинжилгээ, мэдээнд байнга.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        research /rɪˈsɜːrtʃ/ — судалгаа · study /ˈstʌdi/ — судалгаа · survey /ˈsɜːrveɪ/ — санал асуулга<br>
        data /ˈdeɪtə/ — өгөгдөл · evidence /ˈevɪdəns/ — нотолгоо · conclusion /kənˈkluːʒn/ — дүгнэлт<br>
        prove /pruːv/ — батлах · discover /dɪˈskʌvər/ — нээх · analyse /ˈænəlaɪz/ — задлан шинжлэх<br>
        according to /əˈkɔːrdɪŋ tuː/ — -ийн мэдээлснээр · source /sɔːrs/ — эх сурвалж · reliable /rɪˈlaɪəbl/ — найдвартай<br>
        claim /kleɪm/ — мэдэгдэх · estimate /ˈestɪmeɪt/ — тооцоолох · significant /sɪɡˈnɪfɪkənt/ — ач холбогдолтой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It is said students learn faster» ✗ → <b>that</b> хэрэгтэй: It is said THAT students... ✓. Мөн «Students are said learn» ✗ → <b>are said TO learn</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IT IS SAID THAT + өгүүлбэр · ХҮН IS SAID TO + үйл үг» — хоёр хувилбар, нэг утга.</p>`
    },
    phrases:[
      {en:"It is said that students learn faster online.", pron:"ит из сэд зэт стюдэнтс лөрн фастэр онлайн.", mn:"Сурагчид онлайнаар илүү хурдан сурдаг гэдэг."},
      {en:"Students are said to learn faster online.", pron:"стюдэнтс а сэд ту лөрн фастэр онлайн.", mn:"Сурагчид онлайнаар илүү хурдан сурдаг гэдэг."},
      {en:"It is believed that repetition improves memory.", pron:"ит из билийвд зэт рэпэтишн импрувз мэмэри.", mn:"Давталт санах ойг сайжруулдаг гэж үздэг."},
      {en:"According to the study, sleep is essential for learning.", pron:"экординг ту зэ стади, слийп из исэншл фор лөрнинг.", mn:"Судалгааны дагуу нойр сурахад чухал."},
      {en:"He is said to have studied at Oxford.", pron:"хи из сэд ту хэв стадид эт Оксфорд.", mn:"Тэр Оксфордод сурсан гэдэг."}
    ],
    exercises:[
      {q:"that хэрэгтэй:", parts:["It is said ", " students learn faster."], opts:["that","—"], a:0, fix:"It is said THAT..."},
      {q:"to хэрэгтэй:", parts:["Students are said ", " learn faster."], opts:["to","—"], a:0, fix:"are said TO learn."},
      {q:"V3 хэлбэр:", parts:["It is ", " that sleep helps."], opts:["believed","believe"], a:0, fix:"is + V3 → believed."},
      {q:"Өнгөрсөн:", parts:["He is said to ", " at Oxford."], opts:["have studied","study"], a:0, fix:"Өнгөрсөн → to HAVE STUDIED."}
    ],
    speak:{ scene:'Судалгаа хэлэлцэх', turns:[
      {ruby:"What did the research find about online learning?", pron:"вот дид зэ рисөрч файнд эбаут онлайн лөрнинг?", mn:"Судалгаа онлайн сургалтын талаар юу олсон бэ?",
        choices:[{t:"It is said that students learn faster online, but the evidence isn't clear.",best:true,mn:"Сурагчид онлайнаар илүү хурдан сурдаг гэдэг ч нотолгоо нь тодорхойгүй."},{t:"It is said students learn faster online.",best:false,fix:"It is said THAT students..."}]},
      {ruby:"Is the source reliable?", pron:"из зэ сорс рилайэбл?", mn:"Эх сурвалж найдвартай юу?",
        choices:[{t:"I think so. According to the study, sleep is also essential for learning.",best:true,mn:"Тийм байх. Судалгааны дагуу нойр ч бас сурахад чухал."},{t:"I think. According the study, sleep is essential.",best:false,fix:"ACCORDING TO the study."}]},
      {ruby:"Who wrote it?", pron:"хү роут ит?", mn:"Хэн бичсэн бэ?",
        choices:[{t:"A professor who is said to have studied at Oxford.",best:true,mn:"Оксфордод сурсан гэдэг профессор."},{t:"A professor who is said to study at Oxford.",best:false,fix:"Өнгөрсөн → said to HAVE STUDIED."}]}
    ]}
  },
  {
    id:'b1m2l6', title:"2.6 Танилцуулга", level:"B1 · М2",
    blurb:"the student sitting there — богиносгосон тодотгол ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: reduced relative clauses",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тодотголыг богиносгож, өгүүлбэрээ ЦЭВЭР болгох — илтгэл, эссэнд их хэрэглэдэг.<br><br>
        <b>2 хувилбар:</b>
        <div style="margin:12px 0"><span class="tag">ИДЭВХТЭЙ → -ING: The student WHO IS SITTING there = The student SITTING there.</span><span class="tag">ИДЭВХГҮЙ → V3: The book WHICH WAS WRITTEN in 1990 = The book WRITTEN in 1990.</span></div>
        <b>Алтан дүрэм:</b> <b>who/which/that + be</b>-г хасаад л болно!
        <div style="margin:12px 0"><span class="tag">The man who is standing → The man standing</span><span class="tag">The results which were published → The results published</span></div>
        <b>⚠️ Зөвхөн ЭЗЭН тодотголд ажиллана:</b>
        <div style="margin:12px 0"><span class="tag">The book that I read ✗ → «The book read» ✗ (I=эзэн тул богиносгож болохгүй)</span></div>
        <b>Яагаад хэрэгтэй вэ?</b> Илтгэл, эссэ илүү мэргэжлийн сонсогдоно.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        presentation /ˌpreznˈteɪʃn/ — илтгэл · slide /slaɪd/ — слайд · audience /ˈɔːdiəns/ — үзэгчид<br>
        deliver /dɪˈlɪvər/ — хүргэх (илтгэл) · outline /ˈaʊtlaɪn/ — тойм · handout /ˈhændaʊt/ — тараах материал<br>
        visual /ˈvɪʒuəl/ — үзүүлэн · chart /tʃɑːrt/ — график · illustrate /ˈɪləstreɪt/ — жишээгээр харуулах<br>
        summarise /ˈsʌməraɪz/ — товчлох · emphasise /ˈemfəsaɪz/ — онцлох · engage /ɪnˈɡeɪdʒ/ — татан оролцуулах<br>
        rehearse /rɪˈhɜːrs/ — бэлтгэл хийх · nervous /ˈnɜːrvəs/ — сандарсан · clear /klɪr/ — тодорхой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The student sits there» ✗ — тодотголд <b>-ing</b>: <b>The student SITTING there</b> ✓. Мөн «The book wrote in 1990» ✗ → идэвхгүй тул <b>V3</b>: <b>The book WRITTEN in 1990</b> ✓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «who/which + BE-г хас» — идэвхтэй бол -ING үлдэнэ, идэвхгүй бол V3 үлдэнэ.</p>`
    },
    phrases:[
      {en:"The student sitting at the front asked a good question.", pron:"зэ стюдэнт ситинг эт зэ франт аскт э гүд квэсчэн.", mn:"Урд суусан оюутан сайн асуулт асуусан."},
      {en:"The research published last year changed everything.", pron:"зэ рисөрч паблишт ласт йир чэйнжд эврисинг.", mn:"Өнгөрсөн жил хэвлэгдсэн судалгаа бүх юмыг өөрчилсөн."},
      {en:"The chart showing the results is on slide three.", pron:"зэ чарт шоуинг зэ ризалтс из он слайд срий.", mn:"Дүнг харуулсан график 3-р слайд дээр байна."},
      {en:"Anyone interested in the topic can ask questions.", pron:"эниван интрэстид ин зэ топик кэн аск квэсчэнз.", mn:"Сэдвийг сонирхсон хэн ч асуулт асууж болно."},
      {en:"I rehearsed my presentation three times.", pron:"ай рихөрст май призэнтэйшн срий таймз.", mn:"Илтгэлээ гурван удаа бэлтгэл хийсэн."}
    ],
    exercises:[
      {q:"Идэвхтэй:", parts:["The student ", " there is my friend."], opts:["sitting","sits"], a:0, fix:"who is sitting → SITTING."},
      {q:"Идэвхгүй:", parts:["The book ", " in 1990 is famous."], opts:["written","wrote"], a:0, fix:"which was written → WRITTEN."},
      {q:"Идэвхтэй:", parts:["The chart ", " the results..."], opts:["showing","shows"], a:0, fix:"which shows → SHOWING."},
      {q:"Идэвхгүй:", parts:["The research ", " last year..."], opts:["published","publishing"], a:0, fix:"which was published → PUBLISHED."}
    ],
    speak:{ scene:'Илтгэл тавих', turns:[
      {ruby:"Who asked that difficult question?", pron:"хү аскт зэт дификалт квэсчэн?", mn:"Тэр хэцүү асуултыг хэн асуув?",
        choices:[{t:"The student sitting at the front — she's very sharp!",best:true,mn:"Урд суусан оюутан — их ухаантай!"},{t:"The student who sitting at the front.",best:false,fix:"who + be хасвал → The student SITTING (who ✗)."}]},
      {ruby:"What was your presentation based on?", pron:"вот воз ёр призэнтэйшн бэйст он?", mn:"Илтгэл тань юун дээр үндэслэсэн бэ?",
        choices:[{t:"The research published last year. It changed everything!",best:true,mn:"Өнгөрсөн жил хэвлэгдсэн судалгаа. Бүх юмыг өөрчилсөн!"},{t:"The research which published last year.",best:false,fix:"Идэвхгүй → The research PUBLISHED (which ✗)."}]},
      {ruby:"Did you use any visuals?", pron:"дид ю юз эни вижуэлз?", mn:"Үзүүлэн ашигласан уу?",
        choices:[{t:"Yes — the chart showing the results is on slide three.",best:true,mn:"Тийм — дүнг харуулсан график 3-р слайд дээр."},{t:"Yes — the chart shows the results is on slide three.",best:false,fix:"Тодотгол → the chart SHOWING the results."}]}
    ]}
  },
  {
    id:'b1m2l7', title:"2.7 Санал шүүмж", level:"B1 · М2",
    blurb:"Don't you think it's too long? — үгүйсгэсэн асуулт ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: negative questions (эелдэг шүүмж)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Шүүмж, санал зөрөхөө <b>эелдэг</b> илэрхийлэх — англи хэлний нарийн ур чадвар.<br><br>
        <b>Үгүйсгэсэн асуулт = зөөлөн санал:</b>
        <div style="margin:12px 0"><span class="tag">Шууд: It's too long. ✗ (хатуу)</span><span class="tag">Зөөлөн: DON'T YOU THINK it's a bit too long? ✓</span></div>
        <b>Хэрэглээ:</b>
        <div style="margin:12px 0"><span class="tag">Санал болгох: Wouldn't it be better to shorten it?</span><span class="tag">Гайхах: Didn't you get my email? (гайхаж байна)</span><span class="tag">Баталгаажуулах: Isn't this your book?</span></div>
        <b>⚠️ Хариулт нь БУДЛИАНТАЙ!</b>
        <div style="margin:12px 0"><span class="tag">«Don't you like it?» — «No» = дургүй · «Yes» = дуртай</span><span class="tag">Монгол хэлтэй ЭСРЭГ! («Дургүй юу?» — «Тийм» = дургүй)</span></div>
        <b>Зөөлрүүлэгч нэм:</b> a bit · a little · slightly · maybe.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        feedback /ˈfiːdbæk/ — санал шүүмж · comment /ˈkɒment/ — сэтгэгдэл · suggestion /səˈdʒestʃən/ — санал<br>
        criticism /ˈkrɪtɪsɪzəm/ — шүүмжлэл · constructive /kənˈstrʌktɪv/ — бүтээлч · honest /ˈɒnɪst/ — шударга<br>
        improve /ɪmˈpruːv/ — сайжруулах · shorten /ˈʃɔːrtn/ — богиносгох · strength /streŋθ/ — давуу тал<br>
        weakness /ˈwiːknəs/ — сул тал · point out /pɔɪnt aʊt/ — заах · appreciate /əˈpriːʃieɪt/ — үнэлэх<br>
        defensive /dɪˈfensɪv/ — өөрийгөө хамгаалсан · accept /əkˈsept/ — хүлээн авах · valid /ˈvælɪd/ — үндэслэлтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Don't you like it?» — «Yes» гэвэл <b>ДУРТАЙ</b> гэсэн үг! Монголоор «Дургүй юу?» — «Тийм (дургүй)» гэдэг тул эсрэгээр ойлгодог. Тодруулах: <b>«No, I don't»</b> / <b>«Yes, I do»</b> — бүтэн хэлэх нь аюулгүй!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хатуу шүүмжийг DON'T YOU THINK...? болгож зөөлрүүл».</p>`
    },
    phrases:[
      {en:"Don't you think it's a bit too long?", pron:"доунт ю синк итс э бит ту лонг?", mn:"Жаахан урт байна гэж бодохгүй байна уу?"},
      {en:"Wouldn't it be better to add some examples?", pron:"вүднт ит би бэтэр ту эд сам игзэмплз?", mn:"Хэдэн жишээ нэмбэл дээр биш үү?"},
      {en:"Your feedback is honest and constructive.", pron:"ёр фийдбэк из онист энд кэнстрактив.", mn:"Таны санал шударга, бүтээлч байна."},
      {en:"That's a valid point — I hadn't thought of that.", pron:"зэтс э вэлид пойнт — ай хэднт сот ов зэт.", mn:"Үндэслэлтэй санаа — тэгж бодоогүй байсан."},
      {en:"Try not to be defensive about criticism.", pron:"трай нот ту би дифэнсив эбаут критисизм.", mn:"Шүүмжлэлд өөрийгөө хамгаалахгүй байхыг хичээ."}
    ],
    exercises:[
      {q:"Зөөлрүүлэх:", parts:["", " it's a bit too long?"], opts:["Don't you think","It is"], a:0, fix:"Эелдэг шүүмж → Don't you think...?"},
      {q:"Санал:", parts:["", " be better to shorten it?"], opts:["Wouldn't it","Isn't it"], a:0, fix:"Санал → Wouldn't it be better...?"},
      {q:"Хариулт:", parts:["Don't you like it? — ", ", I do. (дуртай)"], opts:["Yes","No"], a:0, fix:"Дуртай бол → Yes, I do."},
      {q:"Зөөлрүүлэгч:", parts:["It's ", " too long."], opts:["a bit","very"], a:0, fix:"Зөөлрүүлэх → a bit."}
    ],
    speak:{ scene:'Илтгэлд санал өгөх', turns:[
      {ruby:"So, what did you think of my presentation? Be honest!", pron:"соу, вот дид ю синк ов май призэнтэйшн? би онист!", mn:"Тэгээд миний илтгэлийг юу гэж бодов? Шударгаар хэл!",
        choices:[{t:"It was good! But don't you think it's a bit too long?",best:true,mn:"Сайхан байсан! Гэхдээ жаахан урт байна гэж бодохгүй байна уу?"},{t:"It was good. But it is too long.",best:false,fix:"Зөөлрүүл → DON'T YOU THINK it's A BIT too long?"}]},
      {ruby:"Hmm, maybe. What should I cut?", pron:"хм, мэйби. вот шүд ай кат?", mn:"Хм, магадгүй. Юуг нь хасах вэ?",
        choices:[{t:"Wouldn't it be better to shorten the introduction and add examples?",best:true,mn:"Оршилоо богиносгож, жишээ нэмбэл дээр биш үү?"},{t:"You should cut the introduction and add examples.",best:false,fix:"Эелдэг → WOULDN'T IT BE BETTER TO shorten...?"}]},
      {ruby:"That's a good idea. Don't you like the charts, though?", pron:"зэтс э гүд айдиа. доунт ю лайк зэ чартс, зоу?", mn:"Гоё санаа. Гэхдээ графикууд нь таалагдаагүй юу?",
        choices:[{t:"Yes, I do! They're the best part. That's a valid point though — I'll keep them.",best:true,mn:"Үгүй ээ, таалагдсан! Хамгийн сайн хэсэг нь. Гэхдээ үндэслэлтэй — үлдээе."},{t:"Yes, I don't like them.",best:false,fix:"«Yes» = дуртай! Зөрчилдөж байна → Yes, I DO."}]}
    ]}
  },
  {
    id:'b1m2l8', title:"2.8 Суралцах төлөвлөгөө", level:"B1 · М2",
    blurb:"look it up / look after it — салдаг ⟷ салдаггүй ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: phrasal verbs — салдаг ⟷ салдаггүй",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэлц үйл үгийн хамгийн будлиантай асуудал — <b>төлөөний үг хаана орох вэ?</b><br><br>
        <b>1) САЛДАГ (separable) — төлөөний үг ДУНД:</b>
        <div style="margin:12px 0"><span class="tag">look UP a word = look a word UP = look IT up ✓ (look up it ✗)</span><span class="tag">Мөн: turn on/off · pick up · put off · give up · write down · fill in</span></div>
        <b>2) САЛДАГГҮЙ (inseparable) — төлөөний үг АРД:</b>
        <div style="margin:12px 0"><span class="tag">look AFTER the children = look after THEM ✓ (look them after ✗)</span><span class="tag">Мөн: look for · deal with · get over · come across · rely on</span></div>
        <b>Яаж ялгах вэ?</b> Ерөнхийдөө: <b>2 үгтэй + шууд тусагдахуунтай</b> → салдаг · <b>угтвартай төстэй</b> (after, for, with, on) → салдаггүй.<br>
        <b>3) 3 үгтэй — ХЭЗЭЭ Ч салдаггүй:</b> catch up WITH · look forward TO · put up WITH.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        look up /lʊk ʌp/ — хайж олох (толь) · write down /raɪt daʊn/ — тэмдэглэх · go over /ɡoʊ ˈoʊvər/ — давтах<br>
        catch up with /kætʃ ʌp wɪð/ — гүйцэх · keep up with /kiːp ʌp wɪð/ — хөл нийлүүлэх · fall behind /fɔːl bɪˈhaɪnd/ — хоцрох<br>
        put off /pʊt ɒf/ — хойшлуулах · give up /ɡɪv ʌp/ — бууж өгөх · carry on /ˈkæri ɒn/ — үргэлжлүүлэх<br>
        work out /wɜːrk aʊt/ — ойлгох/шийдэх · figure out /ˈfɪɡər aʊt/ — олж мэдэх · take up /teɪk ʌp/ — эхлэх<br>
        deal with /diːl wɪð/ — шийдвэрлэх · rely on /rɪˈlaɪ ɒn/ — найдах · get over /ɡet ˈoʊvər/ — даван туулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'll look up it» ✗ — салдаг үйл үгэнд төлөөний үг ЗААВАЛ дунд: <b>look IT up</b> ✓. Харин «I'll look after them» ✓ (салдаггүй тул ард).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Төлөөний үг гарвал: салдаг → ДУНД (look it up) · салдаггүй → АРД (look after it)».</p>`
    },
    phrases:[
      {en:"If you don't know a word, look it up.", pron:"иф ю доунт ноу э вөрд, лүк ит ап.", mn:"Үг мэдэхгүй бол хайж ол."},
      {en:"Write down every new word you come across.", pron:"райт даун эври ню вөрд ю кам экрос.", mn:"Таарсан шинэ үг бүрээ тэмдэглэ."},
      {en:"Don't put it off — start today!", pron:"доунт пут ит оф — старт тудэй!", mn:"Бүү хойшлуул — өнөөдөр эхэл!"},
      {en:"I'm trying to catch up with the rest of the class.", pron:"айм трайинг ту кэтч ап виз зэ рэст ов зэ клас.", mn:"Ангийнхаа бусад хүүхдүүдийг гүйцэхийг хичээж байна."},
      {en:"I can't work out how to solve this problem.", pron:"ай кант вөрк аут хау ту солв зис проблэм.", mn:"Энэ асуудлыг яаж шийдэхээ ойлгож чадахгүй байна."}
    ],
    exercises:[
      {q:"Салдаг:", parts:["I'll look ", " in the dictionary."], opts:["it up","up it"], a:0, fix:"Салдаг → look IT up."},
      {q:"Салдаггүй:", parts:["I'll look ", " tomorrow."], opts:["after them","them after"], a:0, fix:"Салдаггүй → look after THEM."},
      {q:"Салдаг:", parts:["Don't put ", " until tomorrow."], opts:["it off","off it"], a:0, fix:"Салдаг → put IT off."},
      {q:"3 үгтэй:", parts:["I'm trying to catch up ", " the class."], opts:["with","—"], a:0, fix:"catch up WITH."}
    ],
    speak:{ scene:'Суралцах төлөвлөгөө', turns:[
      {ruby:"How do you deal with new vocabulary?", pron:"хау ду ю дийл виз ню воукэбьюлэри?", mn:"Шинэ үгсийг яаж шийдвэрлэдэг вэ?",
        choices:[{t:"If I don't know a word, I look it up and write it down.",best:true,mn:"Үг мэдэхгүй бол хайж олоод, тэмдэглэдэг."},{t:"If I don't know a word, I look up it and write down it.",best:false,fix:"Салдаг → look IT up, write IT down."}]},
      {ruby:"Are you keeping up with the class?", pron:"а ю кийпинг ап виз зэ клас?", mn:"Ангитайгаа хөл нийлүүлж байна уу?",
        choices:[{t:"Not really — I've fallen behind. I'm trying to catch up with them.",best:true,mn:"Тийм ч биш — хоцорчихсон. Тэднийг гүйцэхийг хичээж байна."},{t:"Not really. I'm trying to catch them up with.",best:false,fix:"3 үгтэй хэзээ ч салдаггүй → catch up WITH them."}]},
      {ruby:"Have you started the assignment yet?", pron:"хэв ю стартид зэ эсайнмэнт ет?", mn:"Даалгавраа эхэлсэн үү?",
        choices:[{t:"No, I keep putting it off! But I won't give up.",best:true,mn:"Үгүй, байнга хойшлуулаад байна! Гэхдээ бууж өгөхгүй."},{t:"No, I keep putting off it! But I won't give up it.",best:false,fix:"Салдаг → putting IT off, give it up."}]}
    ]}
  },
  {
    id:'b1m2l9', title:"2.9 Эсээ", level:"B1 · М2",
    blurb:"Moreover / Nevertheless — эсээний холбоос ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: албан бичгийн холбоос үгс",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Эсээ, албан бичгийн <b>мэргэжлийн</b> холбоос үгс — B1-ийн бичгийн түвшин.<br><br>
        <b>НЭМЭХ (санаагаа хүчитгэх):</b>
        <div style="margin:12px 0"><span class="tag">Moreover, ... · Furthermore, ... · In addition, ... · What's more, ...</span></div>
        <b>ЭСРЭГЦҮҮЛЭХ:</b>
        <div style="margin:12px 0"><span class="tag">However, ... · Nevertheless, ... · On the other hand, ... · In contrast, ...</span></div>
        <b>ЖИШЭЭ / ТОДРУУЛАХ:</b>
        <div style="margin:12px 0"><span class="tag">For instance, ... · In other words, ... · That is to say, ...</span></div>
        <b>ДҮГНЭХ:</b>
        <div style="margin:12px 0"><span class="tag">Therefore, ... · As a result, ... · To sum up, ... · In conclusion, ...</span></div>
        <b>⚠️ Бүгд ТАСЛАЛТАЙ, шинэ өгүүлбэр эхэлнэ:</b>
        <div style="margin:12px 0"><span class="tag">Moreover, online learning is cheaper. ✓</span><span class="tag">Moreover online learning is cheaper ✗ (таслал!)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        essay /ˈeseɪ/ — эсээ · argument /ˈɑːrɡjumənt/ — үндэслэл · viewpoint /ˈvjuːpɔɪnt/ — үзэл бодол<br>
        introduction /ˌɪntrəˈdʌkʃn/ — оршил · body /ˈbɒdi/ — үндсэн хэсэг · conclusion /kənˈkluːʒn/ — дүгнэлт<br>
        thesis /ˈθiːsɪs/ — гол санаа · support /səˈpɔːrt/ — нотлох · counter-argument /ˈkaʊntər ˈɑːrɡjumənt/ — эсрэг үндэслэл<br>
        moreover /mɔːrˈoʊvər/ — түүнээс гадна · furthermore /ˌfɜːrðərˈmɔːr/ — цаашилбал · nevertheless /ˌnevərðəˈles/ — гэсэн хэдий ч<br>
        therefore /ˈðerfɔːr/ — иймээс · balanced /ˈbælənst/ — тэнцвэртэй · objective /əbˈdʒektɪv/ — бодитой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «But» / «And» / «So»-г эсээнд хэт их хэрэглэх — <b>ярианы хэл!</b> Албан бичигт: <b>However</b> · <b>Moreover</b> · <b>Therefore</b> ✓ Мөн эдгээрийг өгүүлбэрийн ДУНД тавьж болохгүй: «Online learning moreover is cheaper» ✗</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Эсээний 4 багц: <b>Нэмэх</b> (Moreover) → <b>Эсрэгцүүлэх</b> (However) → <b>Жишээ</b> (For instance) → <b>Дүгнэх</b> (Therefore).</p>`
    },
    phrases:[
      {en:"Online learning is flexible. Moreover, it is much cheaper.", pron:"онлайн лөрнинг из флэксэбл. морэоувэр, ит из мач чийпэр.", mn:"Онлайн сургалт уян хатан. Түүнээс гадна хамаагүй хямд."},
      {en:"Nevertheless, some students need face-to-face contact.", pron:"нэвэрзэлэс, сам стюдэнтс нийд фэйс-ту-фэйс контэкт.", mn:"Гэсэн хэдий ч зарим оюутанд нүүр тулсан харилцаа хэрэгтэй."},
      {en:"For instance, group work is difficult online.", pron:"фор инстэнс, грүп вөрк из дификалт онлайн.", mn:"Жишээ нь, багийн ажил онлайнаар хэцүү."},
      {en:"Therefore, a mixed approach seems best.", pron:"зэрфор, э микст эпроуч сиймз бэст.", mn:"Иймээс холимог хандлага хамгийн зөв юм шиг."},
      {en:"In conclusion, both methods have advantages.", pron:"ин кэнклюжн, боус мэсэдз хэв эдвэнтижиз.", mn:"Дүгнэвэл хоёр арга хоёулаа давуу талтай."}
    ],
    exercises:[
      {q:"Нэмэх:", parts:["It's flexible. ", ", it's cheaper."], opts:["Moreover","However"], a:0, fix:"Санаа нэмэх → Moreover."},
      {q:"Эсрэгцүүлэх:", parts:["", ", some students need contact."], opts:["Nevertheless","Moreover"], a:0, fix:"Эсрэгцүүлэх → Nevertheless."},
      {q:"Дүгнэх:", parts:["", ", a mixed approach is best."], opts:["Therefore","For instance"], a:0, fix:"Дүгнэлт → Therefore."},
      {q:"Таслал:", parts:["Moreover", " it is cheaper."], opts:[",","—"], a:0, fix:"Холбоос үгийн дараа таслал."}
    ],
    speak:{ scene:'Эсээ хэлэлцэх', turns:[
      {ruby:"What's your essay about?", pron:"вотс ёр эсэй эбаут?", mn:"Эсээ тань юуны тухай вэ?",
        choices:[{t:"Online learning. It's flexible. Moreover, it's much cheaper than traditional courses.",best:true,mn:"Онлайн сургалт. Уян хатан. Түүнээс гадна уламжлалт сургалтаас хамаагүй хямд."},{t:"Online learning. It's flexible and it's cheaper too.",best:false,fix:"Эсээнд «and» биш → MOREOVER, it's much cheaper."}]},
      {ruby:"Do you have a counter-argument?", pron:"ду ю хэв э каунтэр-аргюмэнт?", mn:"Эсрэг үндэслэл байна уу?",
        choices:[{t:"Yes. Nevertheless, some students need face-to-face contact. For instance, group work is difficult online.",best:true,mn:"Тийм. Гэсэн хэдий ч зарим оюутанд нүүр тулсан харилцаа хэрэгтэй. Жишээ нь, багийн ажил онлайнаар хэцүү."},{t:"Yes. But some students need contact. For example group work is difficult.",best:false,fix:"NEVERTHELESS... FOR INSTANCE, group work..."}]},
      {ruby:"And your conclusion?", pron:"энд ёр кэнклюжн?", mn:"Дүгнэлт тань?",
        choices:[{t:"Therefore, a mixed approach seems best. In conclusion, both methods have advantages.",best:true,mn:"Иймээс холимог хандлага хамгийн зөв юм шиг. Дүгнэвэл хоёр арга хоёулаа давуу талтай."},{t:"So mixed approach is best. In the end both methods are good.",best:false,fix:"THEREFORE, a mixed approach... IN CONCLUSION, both methods..."}]}
    ]}
  },
  {
    id:'b1m2l10', title:"2.10 Модулийн шалгалт", level:"B1 · М2",
    blurb:"🏆 Боловсролын эсээ бичих",
    rule:{
      h:"Давтлага: B1 Модуль 2-ын бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 2-ын мэдлэгээ нэгтгэж, жинхэнэ B1 эсээ бичих.<br><br>
        <b>Модуль 2-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">It's worth TRYING / no point IN waiting ⭐⭐</span><span class="tag">suggested TAKING / advised ME TO ⭐⭐⭐</span><span class="tag">reminded me TO / warned me NOT TO ⭐⭐⭐</span><span class="tag">Despite studyING ⟷ Although I studied ⭐⭐</span><span class="tag">It is said THAT / are said TO ⭐⭐⭐</span><span class="tag">the student SITTING there ⭐⭐</span><span class="tag">Don't you think...? ⭐⭐</span><span class="tag">look IT up ⟷ look after IT ⭐⭐</span><span class="tag">Moreover / Nevertheless / Therefore ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Боловсролын эсээ (20+ өгүүлбэр):</b> «Онлайн сургалт уламжлалт сургалтыг орлож чадах уу?» Жишээ:<br>
        <i>It is said that online learning will replace traditional classrooms. Research published last year suggests that students learn just as effectively online. Moreover, it is much more flexible: there's no point in travelling for two hours to attend a lecture. Nevertheless, I would argue that a mixed approach is better. My tutor once advised me to join a study group, and she reminded me to attend in person at least once a week. Despite the convenience of online courses, many students fall behind because there's no one to catch up with. Don't you think we learn better together? Therefore, in conclusion, technology is worth using — but it can't replace human contact.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 эсээний 4 давхар: <b>Мэдээлэл</b> (It is said that) → <b>Нэмэлт</b> (Moreover) → <b>Эсрэгцүүлэл</b> (Nevertheless / Despite) → <b>Дүгнэлт</b> (Therefore).</p>`
    },
    phrases:[
      {en:"It is said that online learning will replace classrooms.", pron:"ит из сэд зэт онлайн лөрнинг вил риплэйс класрумз.", mn:"Онлайн сургалт анги танхимыг орлоно гэдэг."},
      {en:"Research published last year suggests otherwise.", pron:"рисөрч паблишт ласт йир сэгжэстс азэрвайз.", mn:"Өнгөрсөн жил хэвлэгдсэн судалгаа эсрэгээр харуулж байна."},
      {en:"There's no point in travelling two hours for a lecture.", pron:"зэрз ноу пойнт ин трэвлинг ту ауэрз фор э лекчэр.", mn:"Лекц сонсохоор 2 цаг явах нь утгагүй."},
      {en:"Despite the convenience, many students fall behind.", pron:"диспайт зэ кэнвиниэнс, мэни стюдэнтс фол бихайнд.", mn:"Тохиромжтой байсан ч олон оюутан хоцордог."},
      {en:"Therefore, technology is worth using — but not alone.", pron:"зэрфор, тэкнолэжи из вөрс юзинг — бат нот элоун.", mn:"Иймээс технологи ашиглах нь үнэ цэнэтэй — гэхдээ дангаараа биш."}
    ],
    exercises:[
      {q:"Давтлага (worth):", parts:["It's worth ", " this method."], opts:["trying","to try"], a:0, fix:"worth + -ing."},
      {q:"Давтлага (suggest):", parts:["He suggested ", " a course."], opts:["taking","me to take"], a:0, fix:"suggest + -ing (хүн ✗)."},
      {q:"Давтлага (despite):", parts:["Despite ", " hard, I failed."], opts:["studying","I studied"], a:0, fix:"despite + -ing."},
      {q:"Давтлага (phrasal):", parts:["I'll look ", " in the dictionary."], opts:["it up","up it"], a:0, fix:"Салдаг → look IT up."}
    ],
    speak:{ scene:'🏆 Шалгалт: Боловсролын эсээ', turns:[
      {ruby:"Can online learning replace traditional classrooms?", pron:"кэн онлайн лөрнинг риплэйс трэдишнл класрумз?", mn:"Онлайн сургалт уламжлалт анги танхимыг орлож чадах уу?",
        choices:[{t:"It is said that it will. Moreover, there's no point in travelling two hours for a lecture.",best:true,mn:"Орлоно гэдэг. Түүнээс гадна лекц сонсохоор 2 цаг явах нь утгагүй."},{t:"It is said it will. And there's no point to travel two hours.",best:false,fix:"It is said THAT... MOREOVER, no point IN travellING."}]},
      {ruby:"But is there a downside?", pron:"бат из зэр э даунсайд?", mn:"Гэхдээ сул тал байна уу?",
        choices:[{t:"Nevertheless, despite the convenience, many students fall behind.",best:true,mn:"Гэсэн хэдий ч тохиромжтой байсан хэдий ч олон оюутан хоцордог."},{t:"But despite it is convenient, many students fall behind.",best:false,fix:"NEVERTHELESS... Despite THE CONVENIENCE (нэр үг!)."}]},
      {ruby:"So what's your conclusion?", pron:"соу вотс ёр кэнклюжн?", mn:"Тэгвэл дүгнэлт тань юу вэ?",
        choices:[{t:"Don't you think we learn better together? Therefore, technology is worth using — but it can't replace human contact.",best:true,mn:"Бид хамтдаа илүү сайн сурдаг гэж бодохгүй байна уу? Иймээс технологи ашиглах нь үнэ цэнэтэй — гэхдээ хүний харилцааг орлож чадахгүй."},{t:"We learn better together. So technology is worth to use.",best:false,fix:"DON'T YOU THINK...? THEREFORE, technology is worth USING."}]}
    ]}
  }
,
  {
    id:'b1m3l1', title:"3.1 Ажил хайх", level:"B1 · М3",
    blurb:"The company that hired me — Defining relative clauses ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Тодорхойлогч холбоос өгүүлбэр (who / which / that / whose / where)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Нэр үгийг <b>тодорхойлж</b>, аль тухайг заах — <b>who</b> (хүн), <b>which</b> (юм), <b>that</b> (хоёул), <b>whose</b> (эзэмшил), <b>where</b> (газар).<br><br>
        <b>Хэн/юуг заана:</b>
        <div style="margin:12px 0"><span class="tag">The manager WHO interviewed me was kind.</span><span class="tag">The job WHICH pays best is stressful.</span><span class="tag">The company THAT hired me is small.</span></div>
        <b>whose = эзэмшил, where = газар:</b>
        <div style="margin:12px 0"><span class="tag">A colleague WHOSE English is perfect.</span><span class="tag">The office WHERE I work is downtown.</span></div>
        <b>⚠️ Таслал ХЭРЭГГҮЙ</b> — тодорхойлогч холбоос нь нэр үгийг заавал тодорхойлж байгаа тул таслалгүй:
        <div style="margin:12px 0"><span class="tag">The candidate that got the job was experienced. (таслалгүй!)</span></div>
        <b>Объект бол «that/who/which»-ийг ГЭЭЖ болно:</b>
        <div style="margin:12px 0"><span class="tag">The job (that) I applied for is remote. ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        job hunt /dʒɒb hʌnt/ — ажил хайх · vacancy /ˈveɪkənsi/ — сул орон тоо · position /pəˈzɪʃn/ — албан тушаал<br>
        apply /əˈplaɪ/ — өргөдөл гаргах · applicant /ˈæplɪkənt/ — өргөдөл гаргагч · candidate /ˈkændɪdət/ — нэр дэвшигч<br>
        recruiter /rɪˈkruːtər/ — ажилтан сонгогч · CV /ˌsiː ˈviː/ — намтар · cover letter /ˈkʌvər ˈletər/ — дагалдах захидал<br>
        job posting /dʒɒb ˈpoʊstɪŋ/ — ажлын зар · qualifications /ˌkwɒlɪfɪˈkeɪʃnz/ — мэргэшил · experience /ɪkˈspɪəriəns/ — туршлага<br>
        salary /ˈsæləri/ — цалин · full-time /ˌfʊl ˈtaɪm/ — бүтэн цагийн · part-time /ˌpɑːrt ˈtaɪm/ — цагийн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The man which called me» ✗ — хүнд <b>who/that</b> ✓. Мөн «The office which I work» ✗ → газарт <b>where I work</b> ✓ эсвэл <b>which I work IN</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «WHO хүн, WHICH юм, THAT хоёул, WHOSE эзэн, WHERE газар» — таслалгүй бол ЗААВАЛ хэрэгтэй мэдээлэл.</p>`
    },
    phrases:[
      {en:"The company that hired me is quite small.", pron:"зэ кампэни зэт хайэрд ми из квайт смол.", mn:"Намайг ажилд авсан компани нэлээд жижиг."},
      {en:"The manager who interviewed me was very friendly.", pron:"зэ мэнэжэр ху интэрвьюд ми воз вэри фрэндли.", mn:"Намайг ярилцлага авсан менежер их найрсаг байсан."},
      {en:"I want a position which offers a good salary.", pron:"ай вонт э пэзишн вич офэрз э гүд сэлэри.", mn:"Сайн цалинтай албан тушаал хүсэж байна."},
      {en:"She's a candidate whose experience is impressive.", pron:"шиз э кэндидэт хуз икспириэнс из импрэсив.", mn:"Тэр бол туршлага нь гайхалтай нэр дэвшигч."},
      {en:"The office where I applied is downtown.", pron:"зэ офис вэр ай эплайд из даунтаун.", mn:"Миний өргөдөл гаргасан оффис хотын төвд байдаг."}
    ],
    exercises:[
      {q:"Хүн заах:", parts:["The recruiter ", " called me was polite."], opts:["who","which"], a:0, fix:"Хүн → who (which ✗)."},
      {q:"Юм заах:", parts:["The vacancy ", " I found is full-time."], opts:["which","who"], a:0, fix:"Юм → which/that (who ✗)."},
      {q:"Эзэмшил:", parts:["A candidate ", " CV is strong gets called."], opts:["whose","who's"], a:0, fix:"Эзэмшил → whose (who's = who is)."},
      {q:"Газар:", parts:["The company ", " I work is growing fast."], opts:["where","which"], a:0, fix:"Газар → where."}
    ],
    speak:{ scene:'Ажлын зар ярих', turns:[
      {ruby:"How is your job search going?", pron:"хау из ёр жоб сөрч гоуинг?", mn:"Ажил хайлт тань хэр байна?",
        choices:[{t:"Good! I found a position which offers a great salary.",best:true,mn:"Сайн! Сайн цалинтай албан тушаал олсон."},{t:"Good! I found a position who offers a great salary.",best:false,fix:"Юм → position WHICH/THAT (who ✗)."}]},
      {ruby:"Who did you meet at the interview?", pron:"ху дид ю мийт эт зэ интэрвью?", mn:"Ярилцлага дээр хэнтэй уулзсан бэ?",
        choices:[{t:"The manager who interviewed me was really kind.",best:true,mn:"Намайг ярилцлага авсан менежер үнэхээр эелдэг байсан."},{t:"The manager which interviewed me was really kind.",best:false,fix:"Хүн → manager WHO (which ✗)."}]},
      {ruby:"Where is the office located?", pron:"вэр из зи офис лоукэйтид?", mn:"Оффис нь хаана байрладаг вэ?",
        choices:[{t:"The office where I'll work is right downtown.",best:true,mn:"Миний ажиллах оффис яг хотын төвд байдаг."},{t:"The office which I'll work is right downtown.",best:false,fix:"Газар → office WHERE (эсвэл which I'll work IN)."}]}
    ]}
  },
  {
    id:'b1m3l2', title:"3.2 Ярилцлага", level:"B1 · М3",
    blurb:"My boss, who is kind, helped me — Non-defining relative clauses ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Нэмэлт холбоос өгүүлбэр (таслал + which/who …)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Аль хэдийн тодорхой нэр үгийн тухай <b>НЭМЭЛТ мэдээлэл</b> оруулах — заавал биш, таслалаар тусгаарлана.<br><br>
        <b>Таслал + who/which:</b>
        <div style="margin:12px 0"><span class="tag">My boss, WHO is very kind, helped me prepare.</span><span class="tag">The interview, WHICH lasted an hour, went well.</span></div>
        <b>Ялгаа — таслал БАЙВАЛ мэдээлэл зайлшгүй биш:</b>
        <div style="margin:12px 0"><span class="tag">The manager who hired me left. (аль менежер — заана)</span><span class="tag">Our manager, who hired me, left. (нэг л менежер — нэмэлт мэдээлэл)</span></div>
        <b>⚠️ «THAT» хэрэглэж БОЛОХГҮЙ</b> нэмэлт холбоост:
        <div style="margin:12px 0"><span class="tag">Sarah, who is my mentor... ✓ (Sarah, that... ✗)</span></div>
        <b>Бүтэн өгүүлбэрийг заах «which»:</b>
        <div style="margin:12px 0"><span class="tag">I got the job, WHICH made my parents proud.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        interview /ˈɪntərvjuː/ — ярилцлага · interviewer /ˈɪntərvjuːər/ — ярилцлага авагч · shortlist /ˈʃɔːrtlɪst/ — сонгогдсон жагсаалт<br>
        strength /streŋθ/ — давуу тал · weakness /ˈwiːknəs/ — сул тал · confident /ˈkɒnfɪdənt/ — өөртөө итгэлтэй<br>
        nervous /ˈnɜːrvəs/ — сандарсан · impression /ɪmˈpreʃn/ — сэтгэгдэл · prepare /prɪˈpeər/ — бэлтгэх<br>
        answer /ˈænsər/ — хариулах · respond /rɪˈspɒnd/ — хариу өгөх · dress code /dres koʊd/ — хувцаслалт<br>
        punctual /ˈpʌŋktʃuəl/ — цагтаа · reference /ˈrefrəns/ — тодорхойлолт · feedback /ˈfiːdbæk/ — санал хүсэлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «My boss that is kind, helped me» ✗ — нэмэлт холбоост <b>that</b> хориотой, таслал + <b>who</b> ✓. Мөн таслалыг мартах: «Our CEO who founded the firm spoke» → нэг л CEO бол таслалтай <b>Our CEO, who founded the firm, spoke</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Таслал = нэмэлт бэлэг: авахгүй бол ч утга бүтэн. THAT таслалтай ЯВАХГҮЙ».</p>`
    },
    phrases:[
      {en:"My mentor, who is very experienced, gave me great advice.", pron:"май мэнтор, ху из вэри икспириэнст, гэйв ми грэйт эдвайс.", mn:"Их туршлагатай зөвлөгч маань надад сайн зөвлөгөө өгсөн."},
      {en:"The interview, which lasted an hour, went really well.", pron:"зэ интэрвью, вич ластид эн ауэр, вэнт риэли вэл.", mn:"Нэг цаг үргэлжилсэн ярилцлага үнэхээр сайн болсон."},
      {en:"The interviewer, whose questions were tough, seemed fair.", pron:"зэ интэрвьюэр, хуз квэсчэнз вөр таф, сиймд фэр.", mn:"Хатуу асуулттай ярилцлага авагч шударга санагдсан."},
      {en:"I got the offer, which made me very happy.", pron:"ай гот зи офэр, вич мэйд ми вэри хэппи.", mn:"Санал авсан нь намайг маш их баярлууллаа."},
      {en:"Our office, where I now work, is in the city center.", pron:"ауэр офис, вэр ай нау вөрк, из ин зэ сити сэнтэр.", mn:"Одоо ажилладаг оффис маань хотын төвд байдаг."}
    ],
    exercises:[
      {q:"Нэмэлт мэдээлэл:", parts:["My boss, ", " is very kind, helped me."], opts:["who","that"], a:0, fix:"Нэмэлт холбоост that ✗ → who."},
      {q:"Таслал + which:", parts:["The interview, ", " lasted an hour, went well."], opts:["which","that"], a:0, fix:"Нэмэлт холбоост which (that ✗)."},
      {q:"Бүтэн санааг заах:", parts:["I got the job, ", " made me proud."], opts:["which","what"], a:0, fix:"Өгүүлбэрийг заах → , which."},
      {q:"Эзэмшил (нэмэлт):", parts:["Ms Lee, ", " team I joined, is strict."], opts:["whose","who's"], a:0, fix:"Эзэмшил → whose."}
    ],
    speak:{ scene:'Ярилцлагын дараа', turns:[
      {ruby:"How was your interview today?", pron:"хау воз ёр интэрвью тудэй?", mn:"Өнөөдрийн ярилцлага тань ямар байсан бэ?",
        choices:[{t:"Great! The interview, which lasted an hour, went really well.",best:true,mn:"Гайхалтай! Нэг цаг үргэлжилсэн ярилцлага сайн болсон."},{t:"Great! The interview which lasted an hour went really well.",best:false,fix:"Нэг л ярилцлага → таслалтай: The interview, which lasted an hour,..."}]},
      {ruby:"Who interviewed you?", pron:"ху интэрвьюд ю?", mn:"Хэн танаас ярилцлага авсан бэ?",
        choices:[{t:"My future boss, who is very kind, asked most of the questions.",best:true,mn:"Их эелдэг ирээдүйн дарга маань асуултын ихэнхийг тавьсан."},{t:"My future boss, that is very kind, asked most of the questions.",best:false,fix:"Нэмэлт холбоост that ✗ → , who is very kind,."}]},
      {ruby:"Did they offer you the job?", pron:"дид зэй офэр ю зэ жоб?", mn:"Ажлаа санал болгосон уу?",
        choices:[{t:"Yes! I got the offer, which made my whole family proud.",best:true,mn:"Тийм! Санал авсан нь бүх гэр бүлийг минь бахархууллаа."},{t:"Yes! I got the offer what made my whole family proud.",best:false,fix:"Өгүүлбэрийг заах → , WHICH made... (what ✗)."}]}
    ]}
  },
  {
    id:'b1m3l3', title:"3.3 Анхны ажил", level:"B1 · М3",
    blurb:"I used to work night shifts — used to / would ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Өнгөрсний дадал (used to / would)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Урьд <b>тогтмол болдог байсан</b> зуршил, одоо болдоггүй үйлдлийг хэлэх.<br><br>
        <b>used to + үндсэн үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">I USED TO work night shifts.</span><span class="tag">She USED TO be a cashier.</span></div>
        <b>would = давтагдах үйлдэл (төлөв БИШ):</b>
        <div style="margin:12px 0"><span class="tag">Every morning I WOULD open the shop.</span><span class="tag">My first boss WOULD always arrive early.</span></div>
        <b>⚠️ Ялгаа:</b> байдал/төлөвт зөвхөн <b>used to</b>:
        <div style="margin:12px 0"><span class="tag">I used to HAVE a small office. ✓ (I would have ✗ — төлөв)</span></div>
        <b>Асуулт/үгүйсгэл — DID + use to (d гүйхгүй!):</b>
        <div style="margin:12px 0"><span class="tag">Did you USE TO work here? / I DIDN'T USE TO like it.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        entry-level /ˈentri levl/ — анхан шатны · trainee /treɪˈniː/ — дадлагажигч · intern /ˈɪntɜːrn/ — дадлагын оюутан<br>
        shift /ʃɪft/ — ээлж · wage /weɪdʒ/ — өдрийн хөлс · minimum wage /ˈmɪnɪməm weɪdʒ/ — доод хөлс<br>
        supervisor /ˈsuːpərvaɪzər/ — ахлагч · task /tɑːsk/ — даалгавар · duty /ˈduːti/ — үүрэг<br>
        overtime /ˈoʊvərtaɪm/ — илүү цаг · uniform /ˈjuːnɪfɔːrm/ — дүрэмт хувцас · break /breɪk/ — завсарлага<br>
        colleague /ˈkɒliːɡ/ — хамт олон · workplace /ˈwɜːrkpleɪs/ — ажлын байр · earn /ɜːrn/ — олж авах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I use to work there» ✗ (өнгөрсөнд <b>used to</b> ✓). Асуулт/үгүйсгэлд «Did you used to...» ✗ → <b>Did you USE to...</b> ✓, «didn't used to» ✗ → <b>didn't USE to</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «USED TO = өмнө байсан, одоо БАЙХГҮЙ. WOULD = давтагдах үйлдэл, төлөвт ХЭРЭГГҮЙ».</p>`
    },
    phrases:[
      {en:"I used to work night shifts at a small shop.", pron:"ай юзд ту вөрк найт шифтс эт э смол шоп.", mn:"Урьд нь жижиг дэлгүүрт шөнийн ээлжинд ажилладаг байсан."},
      {en:"My first supervisor would always arrive early.", pron:"май фөрст сүпэрвайзэр вүд олвэйз эрайв өрли.", mn:"Анхны ахлагч маань үргэлж эрт ирдэг байсан."},
      {en:"I didn't use to like the uniform.", pron:"ай диднт юз ту лайк зэ юниформ.", mn:"Урьд нь дүрэмт хувцасаа дургүй байсан."},
      {en:"Did you use to earn the minimum wage?", pron:"дид ю юз ту өрн зэ минимум вэйж?", mn:"Урьд нь доод хөлс авдаг байсан уу?",},
      {en:"Every morning I would open the store myself.", pron:"эври морнинг ай вүд оупэн зэ стор майсэлф.", mn:"Өглөө бүр дэлгүүрээ өөрөө нээдэг байсан."}
    ],
    exercises:[
      {q:"Өнгөрсний дадал:", parts:["I ", " work night shifts."], opts:["used to","use to"], a:0, fix:"Өнгөрсөнд → used to."},
      {q:"Давтагдах үйлдэл:", parts:["Every day he ", " arrive early."], opts:["would","used"], a:0, fix:"Давтагдах үйлдэл → would arrive."},
      {q:"Асуулт:", parts:["Did you ", " work here?"], opts:["use to","used to"], a:0, fix:"Did + USE to (d гүйхгүй)."},
      {q:"Төлөв:", parts:["I ", " have a small desk."], opts:["used to","would"], a:0, fix:"Төлөвт would ✗ → used to have."}
    ],
    speak:{ scene:'Анхны ажлаа дурсах', turns:[
      {ruby:"What was your very first job?", pron:"вот воз ёр вэри фөрст жоб?", mn:"Хамгийн анхны ажил тань юу байсан бэ?",
        choices:[{t:"I used to work as a cashier at a small shop.",best:true,mn:"Урьд нь жижиг дэлгүүрт кассчин хийдэг байсан."},{t:"I use to work as a cashier at a small shop.",best:false,fix:"Өнгөрсөнд → USED to (use ✗)."}]},
      {ruby:"Did you enjoy it back then?", pron:"дид ю инжой ит бэк зэн?", mn:"Тэр үедээ таалагддаг байсан уу?",
        choices:[{t:"Not at first. I didn't use to like the early shifts.",best:true,mn:"Эхэндээ үгүй. Эрт ээлжээ дургүй байсан."},{t:"Not at first. I didn't used to like the early shifts.",best:false,fix:"didn't + USE to (used ✗)."}]},
      {ruby:"What do you remember most?", pron:"вот ду ю римэмбэр моуст?", mn:"Юуг хамгийн их санадаг вэ?",
        choices:[{t:"Every morning I would open the store and greet the regulars.",best:true,mn:"Өглөө бүр дэлгүүрээ нээж, байнгын үйлчлүүлэгчдээ угтдаг байсан."},{t:"Every morning I will open the store and greet the regulars.",best:false,fix:"Өнгөрсний давтагдах → WOULD open (will ✗)."}]}
    ]}
  },
  {
    id:'b1m3l4', title:"3.4 Дасан зохицох", level:"B1 · М3",
    blurb:"I'm getting used to working remotely — be/get used to + V-ing ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: be used to / get used to + V-ing (дассан / дасах)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Ямар нэгэнд <b>дассан</b> (be used to) эсвэл <b>дасаж байгаа</b> (get used to) гэдгийг хэлэх.<br><br>
        <b>be used to + нэр үг / V-ing = дассан байдал:</b>
        <div style="margin:12px 0"><span class="tag">I AM USED TO working long hours.</span><span class="tag">She's USED TO the noise now.</span></div>
        <b>get used to = дасах ЯВЦ:</b>
        <div style="margin:12px 0"><span class="tag">I'm GETTING USED TO working remotely.</span><span class="tag">You'll GET USED TO the new system.</span></div>
        <b>⚠️ «used to» (3.3-тай бүү андуур!):</b>
        <div style="margin:12px 0"><span class="tag">I USED TO work here. (өмнө байсан — үндсэн үйл үг)</span><span class="tag">I'm USED TO workING here. (дассан — TO дараа -ing!)</span></div>
        <b>«to» энд угтвар үг → дараа нь -ing:</b>
        <div style="margin:12px 0"><span class="tag">be used to WAKE up early ✗ → be used to WAKING up early ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        adapt /əˈdæpt/ — дасан зохицох · adjust /əˈdʒʌst/ — тохируулах · settle in /ˈsetl ɪn/ — дасах<br>
        remote /rɪˈmoʊt/ — зайнаас · onboarding /ˈɒnbɔːrdɪŋ/ — ажилд дасгах · probation /prəˈbeɪʃn/ — туршилтын хугацаа<br>
        workflow /ˈwɜːrkfloʊ/ — ажлын урсгал · deadline /ˈdedlaɪn/ — эцсийн хугацаа · flexible /ˈfleksəbl/ — уян хатан<br>
        commute /kəˈmjuːt/ — зорчих · overwhelmed /ˌoʊvərˈwelmd/ — дарамттай · cope /koʊp/ — даван туулах<br>
        pace /peɪs/ — хурд · challenge /ˈtʃælɪndʒ/ — сорилт · manageable /ˈmænɪdʒəbl/ — даван туулж болох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'm used to work late» ✗ — «to» дараа <b>-ing</b>: «I'm used to workING late» ✓. «get used to» (дасах явц) ба «used to» (өмнөх дадал)-ыг андуурах нь бас түгээмэл.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BE used to = дассан ✓, GET used to = дасаж байна. Хойно нь ЗААВАЛ -ing (нэр үг шиг)».</p>`
    },
    phrases:[
      {en:"I'm used to working long hours now.", pron:"айм юзд ту вөркинг лонг ауэрз нау.", mn:"Одоо урт цаг ажиллахад дассан."},
      {en:"I'm slowly getting used to working remotely.", pron:"айм слоули гэттинг юзд ту вөркинг римоут.", mn:"Зайнаас ажиллахад аажмаар дасаж байна."},
      {en:"She isn't used to the fast pace yet.", pron:"ши изнт юзд ту зэ фаст пэйс йэт.", mn:"Тэр хурдан хэмнэлд одоохондоо дасаагүй байна."},
      {en:"You'll get used to the new workflow soon.", pron:"юл гэт юзд ту зэ ню вөркфлоу сүн.", mn:"Шинэ ажлын урсгалд удахгүй дасна."},
      {en:"It took me a month to get used to the commute.", pron:"ит түк ми э манс ту гэт юзд ту зэ комьют.", mn:"Замд дасахад надад нэг сар зарцуулагдсан."}
    ],
    exercises:[
      {q:"Дассан + -ing:", parts:["I'm used to ", " long hours."], opts:["working","work"], a:0, fix:"to дараа → workING."},
      {q:"Дасах явц:", parts:["I'm slowly ", " to remote work."], opts:["getting used","used"], a:0, fix:"Дасах явц → getting used to."},
      {q:"3.3-тай ялгаа:", parts:["I ", " work here, but I quit last year."], opts:["used to","am used to"], a:0, fix:"Өмнөх дадал → used to work (үндсэн үйл үг)."},
      {q:"Ирээдүйд дасна:", parts:["You'll ", " the new system."], opts:["get used to","used to"], a:0, fix:"Ирээдүйд дасна → get used to."}
    ],
    speak:{ scene:'Шинэ ажилд дасах', turns:[
      {ruby:"How is the new job treating you?", pron:"хау из зэ ню жоб трийтинг ю?", mn:"Шинэ ажил тань хэр байна?",
        choices:[{t:"Good, thanks. I'm getting used to working remotely.",best:true,mn:"Сайн, баярлалаа. Зайнаас ажиллахад дасаж байна."},{t:"Good, thanks. I'm getting used to work remotely.",best:false,fix:"to дараа → workING remotely."}]},
      {ruby:"Is the pace hard to handle?", pron:"из зэ пэйс хард ту хэндл?", mn:"Хэмнэл нь даахад хэцүү юу?",
        choices:[{t:"At first, yes, but now I'm used to the fast pace.",best:true,mn:"Эхэндээ тийм, гэхдээ одоо хурдан хэмнэлд дассан."},{t:"At first, yes, but now I use to the fast pace.",best:false,fix:"Дассан → I'm USED TO the fast pace."}]},
      {ruby:"Did you have a job like this before?", pron:"дид ю хэв э жоб лайк зис бифор?", mn:"Урьд нь ийм ажил хийж байсан уу?",
        choices:[{t:"No. I used to work in an office, so this is all new.",best:true,mn:"Үгүй. Урьд нь оффист ажилладаг байсан болохоор бүх юм шинэ."},{t:"No. I'm used to work in an office, so this is all new.",best:false,fix:"Өмнөх дадал → I USED TO work (be used to ✗ энд)."}]}
    ]}
  },
  {
    id:'b1m3l5', title:"3.5 Хариуцлага", level:"B1 · М3",
    blurb:"You must meet the deadline — Modals of obligation ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Үүргийн модал (have to / must / should / ought to / had better)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэр <b>хүчтэй үүрэг</b> болохыг ялгах — заавал, ёстой, дээр гэдгийг.<br><br>
        <b>Хүчтэй үүрэг — must / have to:</b>
        <div style="margin:12px 0"><span class="tag">You MUST wear a helmet on site.</span><span class="tag">I HAVE TO finish this report today.</span></div>
        <b>Зөвлөгөө — should / ought to:</b>
        <div style="margin:12px 0"><span class="tag">You SHOULD update your CV.</span><span class="tag">You OUGHT TO arrive early.</span></div>
        <b>Хатуу зөвлөгөө — had better (муу үр дагавар сануулна):</b>
        <div style="margin:12px 0"><span class="tag">You'D BETTER apologise, or you'll lose the client.</span></div>
        <b>⚠️ Үгүйсгэлийн ЯЛГАА:</b>
        <div style="margin:12px 0"><span class="tag">mustn't = хориотой: You MUSTN'T be late.</span><span class="tag">don't have to = хэрэггүй (сонголт): You DON'T HAVE TO come.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        responsibility /rɪˌspɒnsəˈbɪləti/ — хариуцлага · duty /ˈduːti/ — үүрэг · obligation /ˌɒblɪˈɡeɪʃn/ — үүрэг хариуцлага<br>
        deadline /ˈdedlaɪn/ — эцсийн хугацаа · rule /ruːl/ — дүрэм · policy /ˈpɒləsi/ — журам<br>
        deal with /diːl wɪð/ — шийдвэрлэх · in charge /ɪn tʃɑːrdʒ/ — хариуцсан · report to /rɪˈpɔːrt tuː/ — тайлагнах<br>
        meet a deadline /miːt ə ˈdedlaɪn/ — хугацаанд амжих · assign /əˈsaɪn/ — хуваарилах · accountable /əˈkaʊntəbl/ — хариуцлагатай<br>
        priority /praɪˈɒrəti/ — тэргүүлэх зорилт · comply /kəmˈplaɪ/ — мөрдөх · overtime /ˈoʊvərtaɪm/ — илүү цаг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «mustn't» ба «don't have to»-г андуурах: «You mustn't come» = ирвэл ХОРИОТОЙ; «You don't have to come» = ирэх нь ХЭРЭГГҮЙ (заавал биш). Мөн «You had better to go» ✗ → <b>had better GO</b> ✓ (to байхгүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUST/HAVE TO = заавал, SHOULD/OUGHT TO = дээр, HAD BETTER = сануулгатай зөвлөгөө. mustn't = хориотой ≠ don't have to = хэрэггүй».</p>`
    },
    phrases:[
      {en:"You must meet the deadline on Friday.", pron:"ю маст мийт зэ дэдлайн он фрайдэй.", mn:"Баасан гарагийн эцсийн хугацаанд заавал амжуулах ёстой."},
      {en:"I have to report to my manager every week.", pron:"ай хэв ту рипорт ту май мэнэжэр эври вийк.", mn:"Долоо хоног бүр дарга дээрээ тайлагнах ёстой."},
      {en:"You should update your CV before applying.", pron:"ю шүд апдэйт ёр си-ви бифор эплайинг.", mn:"Өргөдөл гаргахаасаа өмнө намтраа шинэчлэх хэрэгтэй."},
      {en:"You'd better apologise, or you'll lose the client.", pron:"юд бэтэр эполэжайз, ор юл луз зэ клайэнт.", mn:"Уучлалт гуйсан нь дээр, эс бол үйлчлүүлэгчээ алдана."},
      {en:"You don't have to work overtime if you finish early.", pron:"ю донт хэв ту вөрк оувэртайм иф ю финиш өрли.", mn:"Эрт дуусгавал илүү цаг ажиллах шаардлагагүй."}
    ],
    exercises:[
      {q:"Хүчтэй үүрэг:", parts:["You ", " meet the deadline. (заавал)"], opts:["must","might"], a:0, fix:"Заавал → must (might = магадгүй)."},
      {q:"Зөвлөгөө:", parts:["You ", " update your CV first."], opts:["should","must"], a:0, fix:"Зөвлөгөө → should."},
      {q:"had better:", parts:["You'd better ", " on time tomorrow."], opts:["arrive","to arrive"], a:0, fix:"had better + үндсэн үйл (to ✗)."},
      {q:"Хориотой ≠ хэрэггүй:", parts:["You ", " be late — it's a strict rule."], opts:["mustn't","don't have to"], a:0, fix:"Хориотой → mustn't (don't have to = хэрэггүй)."}
    ],
    speak:{ scene:'Ажлын хариуцлага', turns:[
      {ruby:"When is the report due?", pron:"вэн из зэ рипорт дью?", mn:"Тайлан хэзээ дуусах ёстой вэ?",
        choices:[{t:"It's urgent. I have to finish it by Friday.",best:true,mn:"Яаралтай. Баасан гараг гэхэд дуусгах ёстой."},{t:"It's urgent. I have finish it by Friday.",best:false,fix:"Заавал → have TO finish (have finish ✗)."}]},
      {ruby:"Any advice before my interview?", pron:"эни эдвайс бифор май интэрвью?", mn:"Ярилцлагын өмнө зөвлөгөө байна уу?",
        choices:[{t:"You should arrive early, and you mustn't forget your CV.",best:true,mn:"Эрт ирэх хэрэгтэй, намтраа мартаж болохгүй."},{t:"You should arrive early, and you don't have to forget your CV.",best:false,fix:"Хориотой → MUSTN'T forget (don't have to = хэрэггүй)."}]},
      {ruby:"I upset a client today. What should I do?", pron:"ай апсэт э клайэнт тудэй. вот шүд ай ду?", mn:"Өнөөдөр нэг үйлчлүүлэгчийг гомдоолоо. Яах вэ?",
        choices:[{t:"You'd better apologise quickly, or you'll lose them.",best:true,mn:"Хурдан уучлалт гуйсан нь дээр, эс бол алдана."},{t:"You'd better to apologise quickly, or you'll lose them.",best:false,fix:"had better + үндсэн үйл → apologise (to ✗)."}]}
    ]}
  },
  {
    id:'b1m3l6', title:"3.6 Карьер өсөлт", level:"B1 · М3",
    blurb:"I've worked here vs I've been working here — Present Perfect vs Continuous ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect vs Present Perfect Continuous",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ <b>Үр дүн</b> (have done) ба <b>үргэлжилсэн үйл явц</b> (have been doing)-ыг ялгах.<br><br>
        <b>have + V3 = дууссан үр дүн / тоо:</b>
        <div style="margin:12px 0"><span class="tag">I HAVE FINISHED three projects this year.</span><span class="tag">She HAS BEEN promoted twice.</span></div>
        <b>have been + V-ing = үргэлжилсэн явц / хугацаа:</b>
        <div style="margin:12px 0"><span class="tag">I HAVE BEEN WORKING here for five years.</span><span class="tag">He'S BEEN STUDYING for a promotion.</span></div>
        <b>⚠️ Ялгаа — үр дүн vs явц:</b>
        <div style="margin:12px 0"><span class="tag">I've WRITTEN ten reports. (тоо — дууссан)</span><span class="tag">I've BEEN WRITING reports all day. (явц — ядарсан)</span></div>
        <b>Төлөв үйл үг (know, have, be) → зөвхөн Perfect:</b>
        <div style="margin:12px 0"><span class="tag">I've KNOWN her for years. ✓ (been knowing ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        promotion /prəˈmoʊʃn/ — албан тушаал ахих · promote /prəˈmoʊt/ — дэвшүүлэх · raise /reɪz/ — цалин нэмэгдэх<br>
        career /kəˈrɪər/ — карьер · progress /ˈprɒɡres/ — ахиц · achievement /əˈtʃiːvmənt/ — амжилт<br>
        skill /skɪl/ — ур чадвар · develop /dɪˈveləp/ — хөгжүүлэх · leadership /ˈliːdərʃɪp/ — манлайлал<br>
        network /ˈnetwɜːrk/ — холбоо тогтоох · mentor /ˈmentɔːr/ — зөвлөгч · reputation /ˌrepjuˈteɪʃn/ — нэр хүнд<br>
        expertise /ˌekspɜːrˈtiːz/ — мэргэшил · ambition /æmˈbɪʃn/ — эрмэлзэл · milestone /ˈmaɪlstoʊn/ — гол үе шат</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I've been finishing three reports» ✗ — тоо/үр дүн бол <b>I've finished three reports</b> ✓. Хугацааг «for/since»-тэй үргэлжилсэн явцад: «I work here for five years» ✗ → <b>I've been working here for five years</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ТОО/ДУУССАН → have DONE. ХУГАЦАА/ЯВЦ (for, since, all day) → have BEEN DOING».</p>`
    },
    phrases:[
      {en:"I have been working here for five years.", pron:"ай хэв бийн вөркинг хиэр фор файв йирз.", mn:"Би энд таван жил ажиллаж байна."},
      {en:"She has been promoted twice this year.", pron:"ши хэз бийн промоутид твайс зис йир.", mn:"Тэр энэ жил хоёр удаа албан тушаал ахисан."},
      {en:"I've finished three big projects this quarter.", pron:"айв финишт срий биг прожэктс зис квортэр.", mn:"Энэ улиралд гурван том төсөл дуусгасан."},
      {en:"He's been developing his leadership skills lately.", pron:"хиз бийн дивэлопинг хиз лийдэршип скилз лэйтли.", mn:"Тэр сүүлийн үед манлайллын чадвараа хөгжүүлж байна."},
      {en:"I've known my mentor since I started here.", pron:"айв ноун май мэнтор синс ай стартид хиэр.", mn:"Зөвлөгчөө энд орсноосоо хойш таньдаг."}
    ],
    exercises:[
      {q:"Хугацаа/явц:", parts:["I ", " here for five years."], opts:["have been working","have worked once"], a:0, fix:"for + хугацаа/явц → have been working."},
      {q:"Тоо/үр дүн:", parts:["She ", " three reports today."], opts:["has finished","has been finishing"], a:0, fix:"Тоо → has finished (been ✗)."},
      {q:"Явц (all day):", parts:["I'm tired — I ", " reports all day."], opts:["have been writing","have written"], a:0, fix:"all day + явц → have been writing."},
      {q:"Төлөв үйл:", parts:["I ", " her since 2019."], opts:["have known","have been knowing"], a:0, fix:"know = төлөв → have known (been ✗)."}
    ],
    speak:{ scene:'Карьераа ярих', turns:[
      {ruby:"How long have you been with the company?", pron:"хау лонг хэв ю бийн виз зэ кампэни?", mn:"Компанид хэдэн жил болж байна?",
        choices:[{t:"I've been working here for five years now.",best:true,mn:"Одоо энд таван жил ажиллаж байна."},{t:"I work here for five years now.",best:false,fix:"for + хугацаа → I'VE BEEN WORKING here."}]},
      {ruby:"Have you achieved much this year?", pron:"хэв ю эчийвд мач зис йир?", mn:"Энэ жил их зүйл бүтээв үү?",
        choices:[{t:"Yes! I've finished three major projects.",best:true,mn:"Тийм! Гурван том төсөл дуусгасан."},{t:"Yes! I've been finishing three major projects.",best:false,fix:"Тоо → I've FINISHED three (been ✗)."}]},
      {ruby:"What have you been doing to grow?", pron:"вот хэв ю бийн дуинг ту гроу?", mn:"Өсөхийн тулд юу хийж байна вэ?",
        choices:[{t:"I've been developing my leadership skills lately.",best:true,mn:"Сүүлийн үед манлайллын чадвараа хөгжүүлж байна."},{t:"I've developed my leadership skills lately for hours.",best:false,fix:"Үргэлжилсэн явц → I've BEEN DEVELOPING lately."}]}
    ]}
  },
  {
    id:'b1m3l7', title:"3.7 Ажлын ачаалал", level:"B1 · М3",
    blurb:"So busy that I skipped lunch — so … that / such … that ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: so … that / such … that (тийм … болохоор …)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Шалтгаан–үр дүнг онцлох — «тийм ихээр … тул …».<br><br>
        <b>so + тэмдэг/дайвар + that:</b>
        <div style="margin:12px 0"><span class="tag">I was SO busy THAT I skipped lunch.</span><span class="tag">He works SO hard THAT he never rests.</span></div>
        <b>such + (a/an) + тэмдэг + нэр + that:</b>
        <div style="margin:12px 0"><span class="tag">It was SUCH A hard week THAT I felt exhausted.</span><span class="tag">They are SUCH kind colleagues THAT I feel lucky.</span></div>
        <b>⚠️ so vs such:</b>
        <div style="margin:12px 0"><span class="tag">so + ТЭМДЭГ ГАНЦААР: so difficult</span><span class="tag">such + (a) ТЭМДЭГ + НЭР: such a difficult task</span></div>
        <b>Тоо хэмжээнд — so much / so many:</b>
        <div style="margin:12px 0"><span class="tag">I had SO MUCH work THAT I stayed late.</span><span class="tag">There were SO MANY emails THAT I lost count.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        workload /ˈwɜːrkloʊd/ — ажлын ачаалал · deadline /ˈdedlaɪn/ — эцсийн хугацаа · pressure /ˈpreʃər/ — дарамт<br>
        stress /stres/ — стресс · exhausted /ɪɡˈzɔːstɪd/ — ядарсан · overloaded /ˌoʊvərˈloʊdɪd/ — хэт ачаалалтай<br>
        multitask /ˌmʌltiˈtɑːsk/ — олон зэрэг хийх · burnout /ˈbɜːrnaʊt/ — сэтгэлийн шаналал · demanding /dɪˈmɑːndɪŋ/ — хүнд шаардлагатай<br>
        cope /koʊp/ — даван туулах · prioritise /praɪˈɒrətaɪz/ — эрэмбэлэх · overwhelmed /ˌoʊvərˈwelmd/ — дарамттай<br>
        hectic /ˈhektɪk/ — үймээнтэй · efficient /ɪˈfɪʃnt/ — үр ашигтай · manageable /ˈmænɪdʒəbl/ — даван туулж болох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It was so hard week» ✗ — нэр үгтэй бол <b>such a hard week</b> ✓. «such busy» ✗ (нэр үггүй) → <b>so busy</b> ✓. Тоо/хэмжээнд «so busy work» ✗ → <b>so much work</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SO + тэмдэг ГАНЦААР. SUCH + (a) тэмдэг + НЭР. Хэмжээ бол SO MUCH/MANY».</p>`
    },
    phrases:[
      {en:"I was so busy that I skipped lunch.", pron:"ай воз соу бизи зэт ай скипт ланч.", mn:"Тийм завгүй байснаас өдрийн хоолоо алгассан."},
      {en:"It was such a hard week that I felt exhausted.", pron:"ит воз сач э хард вийк зэт ай фэлт икзостид.", mn:"Тийм хүнд долоо хоног байснаас ядарч туйлдсан."},
      {en:"He works so hard that he never takes a break.", pron:"хи вөркс соу хард зэт хи нэвэр тэйкс э брэйк.", mn:"Тэр тийм хичээнгүй ажилладаг болохоор хэзээ ч завсарладаггүй."},
      {en:"I had so much work that I stayed late.", pron:"ай хэд соу мач вөрк зэт ай стэйд лэйт.", mn:"Тийм их ажилтай байснаас оройтол ажилласан."},
      {en:"They are such kind colleagues that I feel lucky.", pron:"зэй а сач кайнд колигз зэт ай фийл лаки.", mn:"Тэд тийм эелдэг хамт олон болохоор би азтай санагддаг."}
    ],
    exercises:[
      {q:"so + тэмдэг:", parts:["I was ", " busy that I skipped lunch."], opts:["so","such"], a:0, fix:"Тэмдэг ганцаар → so busy."},
      {q:"such + нэр:", parts:["It was ", " a hard week that I quit."], opts:["such","so"], a:0, fix:"тэмдэг + нэр → such a hard week."},
      {q:"Хэмжээ:", parts:["I had ", " work that I stayed late."], opts:["so much","so many"], a:0, fix:"тоолж болохгүй → so MUCH work."},
      {q:"Тоо:", parts:["There were ", " emails that I lost count."], opts:["so many","such"], a:0, fix:"тоолж болох → so MANY emails."}
    ],
    speak:{ scene:'Ачаалалтай өдөр', turns:[
      {ruby:"You look exhausted. Rough day?", pron:"ю лүк икзостид. раф дэй?", mn:"Ядарсан харагдаж байна. Хүнд өдөр байв уу?",
        choices:[{t:"Yes, I was so busy that I skipped lunch.",best:true,mn:"Тийм, тийм завгүй байснаас өдрийн хоолоо алгассан."},{t:"Yes, I was such busy that I skipped lunch.",best:false,fix:"тэмдэг ганцаар → SO busy (such ✗)."}]},
      {ruby:"Has the whole week been like this?", pron:"хэз зэ хоул вийк бийн лайк зис?", mn:"Долоо хоног турш ийм байсан уу?",
        choices:[{t:"It's been such a hard week that I can't wait for the weekend.",best:true,mn:"Тийм хүнд долоо хоног болсон болохоор амралтаа хүлээж ядаад байна."},{t:"It's been so hard week that I can't wait for the weekend.",best:false,fix:"тэмдэг + нэр → SUCH A hard week (so ✗)."}]},
      {ruby:"What made it so hectic?", pron:"вот мэйд ит соу хэктик?", mn:"Юунаас ийм үймээнтэй болов?",
        choices:[{t:"I had so much work that I stayed late every night.",best:true,mn:"Тийм их ажилтай байснаас шөнө бүр оройтол ажилласан."},{t:"I had so many work that I stayed late every night.",best:false,fix:"work тоолж болохгүй → so MUCH work."}]}
    ]}
  },
  {
    id:'b1m3l8', title:"3.8 Үйлчилгээ", level:"B1 · М3",
    blurb:"I had my laptop repaired — Causative have / get something done ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Учруулах бүтэц (have / get something done)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өөрөө биш, <b>өөр хүнээр хийлгэсэн</b> үйлчилгээг илэрхийлэх.<br><br>
        <b>have / get + ЮМ + V3:</b>
        <div style="margin:12px 0"><span class="tag">I HAD my laptop REPAIRED.</span><span class="tag">She GOT her CV REVIEWED by a coach.</span></div>
        <b>⚠️ Үгийн ДАРААЛАЛ — юм эхэнд, V3 хойно:</b>
        <div style="margin:12px 0"><span class="tag">I had repaired my laptop ✗ (өөрөө засав гэсэн утга)</span><span class="tag">I had my laptop repaired ✓ (засуулав)</span></div>
        <b>Цаг өөрчлөгдвөл have хувирна:</b>
        <div style="margin:12px 0"><span class="tag">I'm HAVING the office PAINTED next week.</span><span class="tag">We'll GET the contract SIGNED tomorrow.</span></div>
        <b>Муугаар өртсөн утга ч илэрхийлнэ:</b>
        <div style="margin:12px 0"><span class="tag">He HAD his wallet STOLEN at work.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        service /ˈsɜːrvɪs/ — үйлчилгээ · repair /rɪˈpeər/ — засах · fix /fɪks/ — засварлах<br>
        install /ɪnˈstɔːl/ — суурилуулах · maintain /meɪnˈteɪn/ — арчлах · deliver /dɪˈlɪvər/ — хүргэх<br>
        supplier /səˈplaɪər/ — нийлүүлэгч · client /ˈklaɪənt/ — үйлчлүүлэгч · contract /ˈkɒntrækt/ — гэрээ<br>
        quote /kwoʊt/ — үнийн санал · invoice /ˈɪnvɔɪs/ — нэхэмжлэх · outsource /ˈaʊtsɔːrs/ — гадуур гүйцэтгүүлэх<br>
        professional /prəˈfeʃənl/ — мэргэжлийн · warranty /ˈwɒrənti/ — баталгаа · technician /tekˈnɪʃn/ — техникч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I had repaired my laptop» = өөрөө засав; засуулсан бол <b>I had my laptop repaired</b> ✓ (юм эхэнд, V3 хойно). «I had my laptop repair» ✗ → <b>repairED</b> ✓ (V3).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE/GET + ЮМ + V3 = өөр хүнээр хийлгэв. Дараалал: үйлчилгээ авах ЮМ эхэнд!».</p>`
    },
    phrases:[
      {en:"I had my laptop repaired yesterday.", pron:"ай хэд май лэптоп рипэрд йэстэрдэй.", mn:"Өчигдөр зөөврийн компьютероо засуулсан."},
      {en:"She got her CV reviewed by a career coach.", pron:"ши гот хөр си-ви ривьюд бай э кэриэр коуч.", mn:"Тэр намтраа карьерын зөвлөхөөр хянуулсан."},
      {en:"We're having the office painted next week.", pron:"виэр хэвинг зи офис пэйнтид нэкст вийк.", mn:"Ирэх долоо хоногт оффисоо будуулах гэж байна."},
      {en:"You should get the contract checked by a lawyer.", pron:"ю шүд гэт зэ контрэкт чэкт бай э лоер.", mn:"Гэрээгээ хуульчаар шалгуулах хэрэгтэй."},
      {en:"He had his wallet stolen at the office.", pron:"хи хэд хиз волэт стоулэн эт зи офис.", mn:"Тэр оффист түрийвчээ хулгайлуулсан."}
    ],
    exercises:[
      {q:"Засуулах (дараалал):", parts:["I had my laptop ", " yesterday."], opts:["repaired","repair"], a:0, fix:"ЮМ + V3 → repaired."},
      {q:"Хийлгэх:", parts:["She got her CV ", " by a coach."], opts:["reviewed","review"], a:0, fix:"get + юм + V3 → reviewed."},
      {q:"Ирээдүй:", parts:["We're ", " the office painted next week."], opts:["having","had"], a:0, fix:"Ирээдүй/явц → having (had ✗)."},
      {q:"Дараалал:", parts:["You should get ", " by a lawyer."], opts:["the contract checked","checked the contract"], a:0, fix:"ЮМ эхэнд, V3 хойно → the contract checked."}
    ],
    speak:{ scene:'Үйлчилгээ авах', turns:[
      {ruby:"Your laptop is working again?", pron:"ёр лэптоп из вөркинг эгэн?", mn:"Компьютер тань дахин ажиллаж байна уу?",
        choices:[{t:"Yes, I had it repaired at a service center.",best:true,mn:"Тийм, үйлчилгээний төвд засуулсан."},{t:"Yes, I had repaired it at a service center.",best:false,fix:"засуулав → I had IT REPAIRED (had repaired it = өөрөө засав)."}]},
      {ruby:"How did you improve your CV?", pron:"хау дид ю импрув ёр си-ви?", mn:"Намтраа яаж сайжруулав?",
        choices:[{t:"I got it reviewed by a professional coach.",best:true,mn:"Мэргэжлийн зөвлөхөөр хянуулсан."},{t:"I got it review by a professional coach.",best:false,fix:"get + юм + V3 → got it REVIEWED."}]},
      {ruby:"Are you renovating the office?", pron:"а ю рэновэйтинг зи офис?", mn:"Оффисоо засварлаж байна уу?",
        choices:[{t:"Yes, we're having it painted next week.",best:true,mn:"Тийм, ирэх долоо хоногт будуулна."},{t:"Yes, we're having it paint next week.",best:false,fix:"have + юм + V3 → having it PAINTED."}]}
    ]}
  },
  {
    id:'b1m3l9', title:"3.9 Ажлын байр", level:"B1 · М3",
    blurb:"Too small / big enough — too / enough ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: too / enough (+ тэмдэг / дайвар / нэр)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Хэт их» (too) ба «хангалттай» (enough)-ыг зөв байрлуулах.<br><br>
        <b>too + тэмдэг/дайвар = хэт (сөрөг утга):</b>
        <div style="margin:12px 0"><span class="tag">The office is TOO small.</span><span class="tag">He speaks TOO quickly.</span></div>
        <b>enough — тэмдэг/дайврын ХОЙНО, нэрийн ӨМНӨ:</b>
        <div style="margin:12px 0"><span class="tag">The room is big ENOUGH. (тэмдэг + enough)</span><span class="tag">We have ENOUGH chairs. (enough + нэр)</span></div>
        <b>⚠️ Байрлал:</b>
        <div style="margin:12px 0"><span class="tag">enough big ✗ → big enough ✓</span><span class="tag">chairs enough ✗ → enough chairs ✓</span></div>
        <b>too much / too many (хэт их хэмжээ):</b>
        <div style="margin:12px 0"><span class="tag">There's TOO MUCH noise.</span><span class="tag">There are TOO MANY meetings.</span></div>
        <b>+ (for + хүн) + to + үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">It's too noisy FOR me TO concentrate.</span><span class="tag">The desk is big enough TO fit two monitors.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        workspace /ˈwɜːrkspeɪs/ — ажлын орон зай · desk /desk/ — ширээ · equipment /ɪˈkwɪpmənt/ — тоног төхөөрөмж<br>
        facilities /fəˈsɪlətiz/ — тохижилт · spacious /ˈspeɪʃəs/ — уужим · cramped /kræmpt/ — давчуу<br>
        lighting /ˈlaɪtɪŋ/ — гэрэлтүүлэг · comfortable /ˈkʌmftəbl/ — тав тухтай · noisy /ˈnɔɪzi/ — чимээ шуугиантай<br>
        layout /ˈleɪaʊt/ — зохион байгуулалт · storage /ˈstɔːrɪdʒ/ — хадгалалт · ventilation /ˌventɪˈleɪʃn/ — агааржуулалт<br>
        ergonomic /ˌɜːrɡəˈnɒmɪk/ — эргономик · adequate /ˈædɪkwət/ — хангалттай · furnished /ˈfɜːrnɪʃt/ — тавилгатай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The room is enough big» ✗ — тэмдгийн ХОЙНО: <b>big enough</b> ✓. «We have chairs enough» ✗ — нэрийн ӨМНӨ: <b>enough chairs</b> ✓. «too many noise» ✗ → тоолж болохгүйд <b>too much noise</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TOO = хэт (муу). ENOUGH тэмдгийн АРД, нэрийн ӨМНӨ. Хэмжээ: too MUCH/MANY».</p>`
    },
    phrases:[
      {en:"The office is too small for the whole team.", pron:"зи офис из ту смол фор зэ хоул тийм.", mn:"Оффис бүх багт хэтэрхий жижиг байна."},
      {en:"This desk isn't big enough for two monitors.", pron:"зис дэск изнт биг инаф фор ту монитэрз.", mn:"Энэ ширээ хоёр дэлгэц тавихад хангалттай том биш."},
      {en:"There's too much noise for me to concentrate.", pron:"зэрз ту мач нойз фор ми ту консэнтрэйт.", mn:"Анхаарлаа төвлөрүүлэхэд хэтэрхий чимээ шуугиантай байна."},
      {en:"We don't have enough chairs for the meeting.", pron:"ви донт хэв инаф чэрз фор зэ миитинг.", mn:"Хуралд хангалттай сандал байхгүй байна."},
      {en:"The room is bright enough to work comfortably.", pron:"зэ рум из брайт инаф ту вөрк комфэртэбли.", mn:"Өрөө тав тухтай ажиллахад хангалттай гэрэлтэй."}
    ],
    exercises:[
      {q:"Хэт (муу):", parts:["The office is ", " small for us."], opts:["too","enough"], a:0, fix:"Хэт → too small."},
      {q:"enough байрлал:", parts:["The desk isn't big ", " for two screens."], opts:["enough","too"], a:0, fix:"тэмдгийн АРД → big enough."},
      {q:"enough + нэр:", parts:["We don't have ", " chairs."], opts:["enough","too"], a:0, fix:"нэрийн ӨМНӨ → enough chairs."},
      {q:"Хэмжээ:", parts:["There's ", " noise to focus."], opts:["too much","too many"], a:0, fix:"noise тоолж болохгүй → too MUCH."}
    ],
    speak:{ scene:'Оффис үзэх', turns:[
      {ruby:"So, what do you think of the space?", pron:"соу, вот ду ю синк оф зэ спэйс?", mn:"За, орон зайн талаар юу гэж бодож байна?",
        choices:[{t:"Honestly, it's a bit too small for our team.",best:true,mn:"Үнэнийг хэлэхэд, манай багт жаахан хэтэрхий жижиг байна."},{t:"Honestly, it's a bit enough small for our team.",best:false,fix:"Хэт → TOO small (enough small ✗)."}]},
      {ruby:"What about the desks?", pron:"вот эбаут зэ дэскс?", mn:"Ширээнүүд яаж байна?",
        choices:[{t:"They aren't big enough for two monitors.",best:true,mn:"Хоёр дэлгэц тавихад хангалттай том биш."},{t:"They aren't enough big for two monitors.",best:false,fix:"тэмдгийн АРД → big enough (enough big ✗)."}]},
      {ruby:"Any other concerns?", pron:"эни азэр консөрнз?", mn:"Өөр санаа зовоосон зүйл байна уу?",
        choices:[{t:"Yes, there's too much noise for people to concentrate.",best:true,mn:"Тийм, хүмүүс төвлөрөхөд хэтэрхий чимээ шуугиантай."},{t:"Yes, there's too many noise for people to concentrate.",best:false,fix:"noise тоолж болохгүй → too MUCH noise."}]}
    ]}
  },
  {
    id:'b1m3l10', title:"3.10 Модулийн төсөл", level:"B1 · М3",
    blurb:"🏆 Карьерын ярилцлагын түүхээ өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 3-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 3-ийн мэдлэгээ нэгтгэж, карьер–ярилцлагын жинхэнэ B1 өгүүлэмж бүтээх.<br><br>
        <b>Модуль 3-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">The company THAT hired me ⭐⭐</span><span class="tag">My boss, WHO is kind, ... ⭐⭐⭐</span><span class="tag">I USED TO work night shifts ⭐⭐</span><span class="tag">I'm USED TO workING remotely ⭐⭐⭐</span><span class="tag">You MUST meet the deadline ⭐⭐</span><span class="tag">I've BEEN WORKING here for years ⭐⭐⭐</span><span class="tag">So busy THAT I skipped lunch ⭐⭐</span><span class="tag">I had my CV REVIEWED ⭐⭐⭐</span><span class="tag">The desk is big ENOUGH / TOO small ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Карьерын түүх (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Three years ago, I was hunting for a job that would give me a fresh start. I used to work night shifts in a small shop, which paid the minimum wage. I got my CV reviewed by a coach, who was incredibly helpful. The manager who interviewed me was so friendly that I felt confident straight away. I have been working at this company for three years now, and I have already been promoted twice. At first the pace was too fast, but I'm used to it now. I've learned that you must meet every deadline and you'd better ask for help early. The office where I work is big enough for our whole team. Last month I had my desk upgraded, which made a huge difference. By next year, I will have finished a leadership course, and I'll be leading my own team!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 карьер өгүүлэмжийн 4 давхар: <b>Өнгөрсөн</b> (used to work) → <b>Ярилцлага</b> (who interviewed me, so ... that) → <b>Одоо</b> (have been working, used to it) → <b>Ирээдүй</b> (will have finished, will be leading).</p>`
    },
    phrases:[
      {en:"I used to work night shifts, which paid very little.", pron:"ай юзд ту вөрк найт шифтс, вич пэйд вэри литл.", mn:"Урьд нь бага цалинтай шөнийн ээлжинд ажилладаг байсан."},
      {en:"The manager who interviewed me was so kind that I relaxed.", pron:"зэ мэнэжэр ху интэрвьюд ми воз соу кайнд зэт ай рилэкст.", mn:"Намайг ярилцлага авсан менежер тийм эелдэг байснаас би тайвширсан."},
      {en:"I've been working here for three years now.", pron:"айв бийн вөркинг хиэр фор срий йирз нау.", mn:"Одоо энд гурван жил ажиллаж байна."},
      {en:"I had my CV reviewed before I applied.", pron:"ай хэд май си-ви ривьюд бифор ай эплайд.", mn:"Өргөдөл гаргахаасаа өмнө намтраа хянуулсан."},
      {en:"By next year, I'll have finished a leadership course.", pron:"бай нэкст йир, айл хэв финишт э лийдэршип корс.", mn:"Ирэх жил гэхэд манлайллын сургалтаа дуусгачихсан байна."}
    ],
    exercises:[
      {q:"Давтлага (тодорхойлогч):", parts:["The company ", " hired me is small."], opts:["that","who"], a:0, fix:"Юм → that/which (who ✗)."},
      {q:"Давтлага (used to):", parts:["I ", " work night shifts."], opts:["used to","am used to"], a:0, fix:"Өмнөх дадал → used to work."},
      {q:"Давтлага (Perfect Continuous):", parts:["I ", " here for three years."], opts:["have been working","have worked once"], a:0, fix:"for + явц → have been working."},
      {q:"Давтлага (causative):", parts:["I had my CV ", " by a coach."], opts:["reviewed","review"], a:0, fix:"have + юм + V3 → reviewed."}
    ],
    speak:{ scene:'🏆 Төсөл: Карьерын ярилцлага', turns:[
      {ruby:"Tell me about your career journey so far.", pron:"тэл ми эбаут ёр кэриэр жөрни соу фар.", mn:"Одоо болтлын карьерынхаа тухай яриач.",
        choices:[{t:"I used to work night shifts, but the company that hired me last year changed everything.",best:true,mn:"Урьд нь шөнийн ээлжинд ажилладаг байсан, гэхдээ өнгөрсөн жил намайг авсан компани бүгдийг өөрчилсөн."},{t:"I use to work night shifts, but the company who hired me last year changed everything.",best:false,fix:"USED to work; юм → company THAT/WHICH."}]},
      {ruby:"How did the interview go?", pron:"хау дид зэ интэрвью гоу?", mn:"Ярилцлага яаж болов?",
        choices:[{t:"The manager who interviewed me was so kind that I felt confident. I had my CV reviewed beforehand, which helped a lot.",best:true,mn:"Намайг ярилцлага авсан менежер тийм эелдэг байснаас өөртөө итгэлтэй болсон. Урьдчилж намтраа хянуулсан нь их тусалсан."},{t:"The manager which interviewed me was such kind that I felt confident. I had reviewed my CV, which helped.",best:false,fix:"manager WHO; SO kind THAT; I had my CV REVIEWED (засуулав)."}]},
      {ruby:"And what's next for your career?", pron:"энд вотс нэкст фор ёр кэриэр?", mn:"Карьерынхаа хувьд дараа нь юу хийх вэ?",
        choices:[{t:"I've been working here for three years, and by next year I'll have finished a leadership course.",best:true,mn:"Энд гурван жил ажиллаж байна, ирэх жил гэхэд манлайллын сургалтаа дуусгачихсан байна."},{t:"I work here for three years, and by next year I finish a leadership course.",best:false,fix:"I've BEEN WORKING for three years; by next year I'LL HAVE FINISHED."}]}
    ]}
  },
  {
    id:'b1m4l1', title:"4.1 Технологи", level:"B1 · М4",
    blurb:"The phone is made in China / was invented in 1876 — Идэвхгүй хэв (одоо & өнгөрсөн) ⭐⭐⭐",
    rule:{
      h:"Идэвхгүй хэв: Present & Past Simple (is/was + V3, by …)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Технологийн ертөнцөд <b>үйлдэгч нь чухал биш, юу болсон нь чухал</b> — тэгвэл идэвхгүй хэв (Passive) хэрэглэнэ.<br><br>
        <b>Present Simple Passive — am/is/are + V3:</b>
        <div style="margin:12px 0"><span class="tag">The iPhone IS MADE in China.</span><span class="tag">Millions of devices ARE SOLD every year.</span></div>
        <b>Past Simple Passive — was/were + V3:</b>
        <div style="margin:12px 0"><span class="tag">The telephone WAS INVENTED in 1876.</span><span class="tag">The first computers WERE BUILT in the 1940s.</span></div>
        <b>Үйлдэгчийг хэлэх бол «by»:</b>
        <div style="margin:12px 0"><span class="tag">The bulb was invented BY Edison.</span><span class="tag">These phones are designed BY a small team.</span></div>
        <b>Идэвхтэй ↔ Идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">Apple makes the iPhone. (идэвхтэй)</span><span class="tag">The iPhone is made by Apple. (идэвхгүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        device /dɪˈvaɪs/ — төхөөрөмж · gadget /ˈɡædʒɪt/ — жижиг төхөөрөмж · invention /ɪnˈvenʃn/ — шинэ бүтээл<br>
        manufacture /ˌmænjuˈfæktʃər/ — үйлдвэрлэх · produce /prəˈduːs/ — бүтээх · assemble /əˈsembl/ — угсрах<br>
        design /dɪˈzaɪn/ — зохион бүтээх · develop /dɪˈveləp/ — хөгжүүлэх · launch /lɔːntʃ/ — зах зээлд гаргах<br>
        upgrade /ˈʌpɡreɪd/ — сайжруулах · hardware /ˈhɑːrdwer/ — техник хангамж · software /ˈsɔːftwer/ — програм хангамж<br>
        battery /ˈbætəri/ — батерей · sensor /ˈsensər/ — мэдрэгч · circuit /ˈsɜːrkɪt/ — хэлхээ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The phone is make in China» ✗ — идэвхгүйд <b>V3</b> ордог: is MADE ✓. Мөн «invented from Edison» ✗ → үйлдэгчийг <b>by</b>-гээр: invented BY Edison ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хэн хийсэн нь мэдэгдэхгүй/чухал биш → BE + V3». Одоо бол is/are, өнгөрсөн бол was/were.</p>`
    },
    phrases:[
      {en:"The iPhone is made in China.", pron:"зэ айфон из мэйд ин Чайна.", mn:"Айфоныг Хятадад үйлдвэрлэдэг."},
      {en:"The telephone was invented in 1876.", pron:"зэ тэлэфон воз инвэнтид ин эйтийн сэвэнти сикс.", mn:"Утсыг 1876 онд зохион бүтээсэн."},
      {en:"Millions of devices are sold every year.", pron:"миллионз оф дивайсиз а солд эври йир.", mn:"Сая сая төхөөрөмжийг жил бүр зардаг."},
      {en:"The light bulb was invented by Edison.", pron:"зэ лайт балб воз инвэнтид бай Эдисон.", mn:"Гэрлийн шилийг Эдисон зохион бүтээсэн."},
      {en:"These phones are designed in California.", pron:"зийз фоунз а дизайнд ин Кэлифорниа.", mn:"Эдгээр утсыг Калифорнид зохион бүтээдэг."}
    ],
    exercises:[
      {q:"Одоо цагийн идэвхгүй:", parts:["The phone ", " in China."], opts:["is made","makes"], a:0, fix:"is/are + V3 → is made."},
      {q:"Өнгөрсөн идэвхгүй:", parts:["The telephone ", " in 1876."], opts:["was invented","invented"], a:0, fix:"was/were + V3 → was invented."},
      {q:"Үйлдэгч (by):", parts:["The bulb was invented ", " Edison."], opts:["by","from"], a:0, fix:"Үйлдэгчийг by-гээр → by Edison."},
      {q:"Олон тоо:", parts:["Millions of devices ", " every year."], opts:["are sold","is sold"], a:0, fix:"devices олон тоо → ARE sold."}
    ],
    speak:{ scene:'Технологийн музей', turns:[
      {ruby:"Where is this phone made?", pron:"вэр из зис фоун мэйд?", mn:"Энэ утсыг хаана үйлдвэрлэдэг вэ?",
        choices:[{t:"It's made in China, but it's designed in California.",best:true,mn:"Хятадад үйлдвэрлэдэг ч Калифорнид зохион бүтээдэг."},{t:"They make it in China, design in California.",best:false,fix:"Идэвхгүй → It's MADE... it's DESIGNED."}]},
      {ruby:"When was the telephone invented?", pron:"вэн воз зэ тэлэфон инвэнтид?", mn:"Утсыг хэзээ зохион бүтээсэн бэ?",
        choices:[{t:"It was invented in 1876 by Alexander Bell.",best:true,mn:"1876 онд Александр Белл зохион бүтээсэн."},{t:"It invented in 1876 from Alexander Bell.",best:false,fix:"was INVENTED... BY Bell (from ✗)."}]},
      {ruby:"Are many of these sold today?", pron:"а мэни оф зийз солд тудэй?", mn:"Эдгээрээс өнөөдөр их зардаг уу?",
        choices:[{t:"Yes, millions of them are sold every year.",best:true,mn:"Тийм, сая саяыг нь жил бүр зардаг."},{t:"Yes, millions are sell every year.",best:false,fix:"are + V3 → are SOLD."}]}
    ]}
  },
  {
    id:'b1m4l2', title:"4.2 Интернэт", level:"B1 · М4",
    blurb:"It can be downloaded / has been updated / must be encrypted — Идэвхгүй: бусад цаг & модаль ⭐⭐⭐",
    rule:{
      h:"Идэвхгүй хэв: бусад цаг + модаль (can be done / has been done / must be done)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Идэвхгүй хэвийг <b>модаль үг</b> болон <b>бусад цагт</b> хэрхэн бүтээхийг сурна. Түлхүүр нь үргэлж <b>BE + V3</b>.<br><br>
        <b>Модаль + BE + V3:</b>
        <div style="margin:12px 0"><span class="tag">The file CAN BE DOWNLOADED for free.</span><span class="tag">Your data MUST BE ENCRYPTED.</span><span class="tag">This link CAN'T BE OPENED.</span></div>
        <b>Present Perfect Passive — has/have BEEN + V3:</b>
        <div style="margin:12px 0"><span class="tag">The website HAS BEEN UPDATED.</span><span class="tag">All the photos HAVE BEEN UPLOADED.</span></div>
        <b>Present Continuous Passive — is/are BEING + V3:</b>
        <div style="margin:12px 0"><span class="tag">The video IS BEING UPLOADED right now.</span></div>
        <b>Бүтэц санах хүснэгт:</b>
        <div style="margin:12px 0"><span class="tag">can/must/should + BE + V3</span><span class="tag">has/have + BEEN + V3</span><span class="tag">is/are + BEING + V3</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        browser /ˈbraʊzər/ — хөтөч · download /ˈdaʊnloʊd/ — татах · upload /ˈʌploʊd/ — байршуулах<br>
        bandwidth /ˈbændwɪdθ/ — суваг өргөн · server /ˈsɜːrvər/ — сервер · router /ˈruːtər/ — чиглүүлэгч<br>
        network /ˈnetwɜːrk/ — сүлжээ · connection /kəˈnekʃn/ — холболт · wireless /ˈwaɪərləs/ — утасгүй<br>
        cloud /klaʊd/ — үүлэн сан · encrypt /ɪnˈkrɪpt/ — шифрлэх · access /ˈækses/ — хандах<br>
        stream /striːm/ — дамжуулах · refresh /rɪˈfreʃ/ — сэргээх · link /lɪŋk/ — холбоос</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It can be download» ✗ — модалийн дараа <b>BE + V3</b>: can be DOWNLOADED ✓. «has been update» ✗ → has been UPDATED ✓ (BEEN + V3).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BE-г ол!» Модаль бол be, perfect бол been, continuous бол being — араас нь үргэлж V3.</p>`
    },
    phrases:[
      {en:"The file can be downloaded for free.", pron:"зэ файл кэн би даунлоудид фор фрий.", mn:"Файлыг үнэгүй татаж болно."},
      {en:"The website has been updated.", pron:"зэ вэбсайт хэз бийн апдэйтид.", mn:"Вэбсайтыг шинэчилсэн."},
      {en:"Your data must be encrypted.", pron:"ёр дэйта маст би энкриптид.", mn:"Таны мэдээллийг заавал шифрлэх ёстой."},
      {en:"The video is being uploaded now.", pron:"зэ видео из бийнг аплоудид нау.", mn:"Видеог одоо байршуулж байна."},
      {en:"This link can't be opened.", pron:"зис линк кант би оупэнд.", mn:"Энэ холбоосыг нээж болохгүй."}
    ],
    exercises:[
      {q:"Модаль идэвхгүй:", parts:["The file can ", " for free."], opts:["be downloaded","download"], a:0, fix:"модаль + BE + V3 → be downloaded."},
      {q:"Present perfect passive:", parts:["The site has ", " updated."], opts:["been","being"], a:0, fix:"has BEEN + V3 → been."},
      {q:"Must passive:", parts:["Your data must ", " encrypted."], opts:["be","been"], a:0, fix:"must BE + V3."},
      {q:"Одоо явагдаж буй:", parts:["The video is ", " uploaded now."], opts:["being","been"], a:0, fix:"is BEING + V3 → одоо явагдаж байна."}
    ],
    speak:{ scene:'Техник дэмжлэг', turns:[
      {ruby:"Can this file be downloaded on my phone?", pron:"кэн зис файл би даунлоудид он май фоун?", mn:"Энэ файлыг утсан дээрээ татаж болох уу?",
        choices:[{t:"Yes, it can be downloaded for free from the cloud.",best:true,mn:"Тийм, үүлэн сангаас үнэгүй татаж болно."},{t:"Yes, it can be download for free.",best:false,fix:"can be + V3 → be DOWNLOADED."}]},
      {ruby:"Is my personal data safe?", pron:"из май пөрсонал дэйта сэйф?", mn:"Миний хувийн мэдээлэл аюулгүй юу?",
        choices:[{t:"Don't worry. All your data must be encrypted by law.",best:true,mn:"Санаа зоволтгүй. Таны бүх мэдээллийг хуулиар шифрлэх ёстой."},{t:"Don't worry. All your data must encrypt.",best:false,fix:"must BE ENCRYPTED (идэвхгүй)."}]},
      {ruby:"Why won't the website load?", pron:"вай воунт зэ вэбсайт лоуд?", mn:"Вэбсайт яагаад ачаалахгүй байгаа юм бэ?",
        choices:[{t:"It has been updated, so the page must be refreshed.",best:true,mn:"Шинэчилсэн болохоор хуудсыг дахин сэргээх хэрэгтэй."},{t:"It has update, so refresh must the page.",best:false,fix:"has BEEN UPDATED... must BE REFRESHED."}]}
    ]}
  },
  {
    id:'b1m4l3', title:"4.3 Нийгмийн сүлжээ", level:"B1 · М4",
    blurb:"If you post it, it'll go viral / unless you log out — Эхний нөхцөл + unless ⭐⭐",
    rule:{
      h:"Эхний нөхцөл (First Conditional) + unless / as long as / provided (that)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ <b>Бодит, болох магадлалтай</b> ирээдүйн нөхцөлийг хэлэх — нийгмийн сүлжээний ертөнцөд маш их хэрэгтэй.<br><br>
        <b>If + Present Simple, … will + V:</b>
        <div style="margin:12px 0"><span class="tag">IF you POST this, it WILL GO viral.</span><span class="tag">If you follow me, I WILL follow you back.</span></div>
        <b>«unless» = «if … not» (… -гүй бол):</b>
        <div style="margin:12px 0"><span class="tag">You won't get followers UNLESS you post regularly. (= if you don't post)</span></div>
        <b>«as long as» / «provided (that)» = зөвхөн … бол:</b>
        <div style="margin:12px 0"><span class="tag">AS LONG AS you're polite, people will follow you.</span><span class="tag">I'll share it PROVIDED THAT you tag me.</span></div>
        <b>⚠️ «if» талд will БАЙХГҮЙ — одоо цаг!</b>
        <div style="margin:12px 0"><span class="tag">If you POST daily… (if you will post ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        post /poʊst/ — нийтлэл тавих · share /ʃer/ — хуваалцах · comment /ˈkɑːment/ — сэтгэгдэл<br>
        follow /ˈfɑːloʊ/ — дагах · follower /ˈfɑːloʊər/ — дагагч · like /laɪk/ — таалагдсан тэмдэг<br>
        hashtag /ˈhæʃtæɡ/ — хаштаг · profile /ˈproʊfaɪl/ — хувийн хуудас · feed /fiːd/ — мэдээллийн урсгал<br>
        notification /ˌnoʊtɪfɪˈkeɪʃn/ — мэдэгдэл · viral /ˈvaɪrəl/ — хурдан тархах · trend /trend/ — тренд<br>
        influencer /ˈɪnfluənsər/ — нөлөөлөгч · block /blɑːk/ — хориглох · tag /tæɡ/ — тэмдэглэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If you will post…» ✗ → «If you POST…» ✓ (if талд одоо цаг). «unless you don't post» ✗ — unless дотор аль хэдийн үгүйсгэл байгаа тул давхар үгүйсгэхгүй: «unless you post» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF → одоо цаг, WILL → нөгөө тал». unless = «-гүй бол» гэдгийг санаж, дахин «not» бүү нэм.</p>`
    },
    phrases:[
      {en:"If you post this, it will go viral.", pron:"иф ю поуст зис, ит вил гоу вайрал.", mn:"Хэрэв үүнийг тавибал вирусын мэт тарна."},
      {en:"You won't get followers unless you post regularly.", pron:"ю воунт гэт фолоуэрз анлес ю поуст рэгюлэрли.", mn:"Тогтмол тавихгүй бол дагагч олохгүй."},
      {en:"As long as you're polite, people will follow you.", pron:"эз лонг эз юр полайт, пийпл вил фолоу ю.", mn:"Эелдэг л бол хүмүүс чамайг дагана."},
      {en:"I'll share it provided that you tag me.", pron:"айл шэр ит провайдид зэт ю тэг ми.", mn:"Намайг тэмдэглэвэл л би хуваалцана."},
      {en:"Unless you log out, your profile stays open.", pron:"анлес ю лог аут, ёр профайл стэйз оупэн.", mn:"Гарахгүй бол хувийн хуудас чинь нээлттэй хэвээр байна."}
    ],
    exercises:[
      {q:"If + одоо цаг:", parts:["If you ", " this, it'll go viral."], opts:["post","will post"], a:0, fix:"if талд одоо цаг → post."},
      {q:"Үндсэн хэсэг:", parts:["If you post daily, you ", " more followers."], opts:["will get","get"], a:0, fix:"үндсэн хэсэгт will + V → will get."},
      {q:"unless = if not:", parts:["You won't grow ", " you post often."], opts:["unless","if"], a:0, fix:"«хэрэв … үгүй бол» → unless."},
      {q:"Зөвхөн … бол:", parts:["I'll help ", " that you tag me."], opts:["provided","unless"], a:0, fix:"«зөвхөн … бол» → provided that."}
    ],
    speak:{ scene:'Нийгмийн сүлжээний зөвлөгөө', turns:[
      {ruby:"How do I get more followers?", pron:"хау ду ай гэт мор фолоуэрз?", mn:"Яаж илүү олон дагагчтай болох вэ?",
        choices:[{t:"If you post good content regularly, you'll get more followers.",best:true,mn:"Сайн контент тогтмол тавибал илүү олон дагагчтай болно."},{t:"If you will post regularly, you get followers.",best:false,fix:"IF you POST..., you WILL GET..."}]},
      {ruby:"What if people write rude comments?", pron:"вот иф пийпл райт руд коммэнтс?", mn:"Хэрэв хүмүүс бүдүүлэг сэтгэгдэл бичвэл яах вэ?",
        choices:[{t:"Unless they threaten you, just ignore them or block them.",best:true,mn:"Заналхийлэхгүй л бол зүгээр үл тоох эсвэл хориглоно."},{t:"Unless they don't threaten you, block them.",best:false,fix:"UNLESS they THREATEN you (давхар «not» ✗)."}]},
      {ruby:"Will you share my new post?", pron:"вил ю шэр май ню поуст?", mn:"Миний шинэ нийтлэлийг хуваалцах уу?",
        choices:[{t:"Sure, as long as you tag me, I'll share it with my followers.",best:true,mn:"Тэгэлгүй яахав, намайг тэмдэглэвэл л дагагч нартаа хуваалцана."},{t:"Sure, as long as you will tag me, I share it.",best:false,fix:"as long as you TAG me, I'LL SHARE it."}]}
    ]}
  },
  {
    id:'b1m4l4', title:"4.4 Мэдээ мэдээлэл", level:"B1 · М4",
    blurb:"He said (that) he was tired / told me he had finished — Шууд бус яриа (мэдэгдэл) ⭐⭐⭐",
    rule:{
      h:"Шууд бус яриа: мэдэгдэл (цаг ухрах, say / tell)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хэн нэгний хэлснийг <b>дамжуулж</b> хэлэх — сэтгүүл, мэдээний хэл. Гол дүрэм: <b>цаг нэг алхам ухрана</b> (backshift).<br><br>
        <b>Цаг ухрах хүснэгт:</b>
        <div style="margin:12px 0"><span class="tag">am/is/are → was/were</span><span class="tag">V1 → V2 (Past)</span><span class="tag">Past / have V3 → had V3</span><span class="tag">will → would · can → could</span></div>
        <b>Жишээ:</b>
        <div style="margin:12px 0"><span class="tag">"I am tired." → He said (that) he WAS tired.</span><span class="tag">"I have finished." → She said she HAD FINISHED.</span></div>
        <b>«say» vs «tell» — том ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">say (объектгүй): He SAID that…</span><span class="tag">tell + хүн: He TOLD ME that…</span></div>
        <b>Төлөөний үг ба цаг ч өөрчлөгдөнө:</b>
        <div style="margin:12px 0"><span class="tag">"I will call you tomorrow." → He said he WOULD call me the NEXT DAY.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        news /nuːz/ — мэдээ · headline /ˈhedlaɪn/ — гарчиг · report /rɪˈpɔːrt/ — мэдээлэл<br>
        article /ˈɑːrtɪkl/ — нийтлэл · journalist /ˈdʒɜːrnəlɪst/ — сэтгүүлч · source /sɔːrs/ — эх сурвалж<br>
        coverage /ˈkʌvərɪdʒ/ — мэдээлэл түгээлт · broadcast /ˈbrɔːdkæst/ — нэвтрүүлэх · publish /ˈpʌblɪʃ/ — нийтлэх<br>
        editor /ˈedɪtər/ — редактор · breaking news /ˈbreɪkɪŋ nuːz/ — яаралтай мэдээ · update /ˈʌpdeɪt/ — шинэчлэл<br>
        claim /kleɪm/ — мэдэгдэх · announce /əˈnaʊns/ — зарлах · statement /ˈsteɪtmənt/ — мэдэгдэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He said me…» ✗ — say-д объект залгахгүй: «He TOLD me…» ✓ эсвэл «He said…» ✓. Мөн «She said she is tired» ✗ → «She said she WAS tired» ✓ (цаг ухрана).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Дамжуулбал цаг нэг алхам ухарна». TELL-д хүн, SAY-д хүнгүй.</p>`
    },
    phrases:[
      {en:"He said that he was tired.", pron:"хи сэд зэт хи воз тайрд.", mn:"Тэр ядарсан гэж хэлсэн."},
      {en:"She told me she had finished the article.", pron:"ши толд ми ши хэд финишт зи артикл.", mn:"Тэр надад нийтлэлээ дуусгасан гэж хэлсэн."},
      {en:"The reporter said the news would be published soon.", pron:"зэ рипортэр сэд зэ нюз вүд би паблишт сүн.", mn:"Сэтгүүлч мэдээг удахгүй нийтэлнэ гэж хэлсэн."},
      {en:"They said they couldn't confirm the source.", pron:"зэй сэд зэй кудэнт конфөрм зэ сорс.", mn:"Тэд эх сурвалжаа батлаж чадахгүй гэж хэлсэн."},
      {en:"He told us the story was true.", pron:"хи толд ас зэ стори воз тру.", mn:"Тэр бидэнд түүх үнэн гэж хэлсэн."}
    ],
    exercises:[
      {q:"Одоо → Өнгөрсөн:", parts:['He said he ', ' tired. ("I am tired")'], opts:["was","is"], a:0, fix:"backshift: am → WAS."},
      {q:"say vs tell:", parts:["She ", " me she was busy."], opts:["told","said"], a:0, fix:"объекттой бол TELL → told me."},
      {q:"will → would:", parts:['They said they ', ' come. ("we will come")'], opts:["would","will"], a:0, fix:"will → WOULD."},
      {q:"Өнгөрсөн → Past Perfect:", parts:['He said he ', ' it. ("I finished it")'], opts:["had finished","finished"], a:0, fix:"finished → HAD finished."}
    ],
    speak:{ scene:'Мэдээ дамжуулах', turns:[
      {ruby:"What did the journalist say?", pron:"вот дид зэ жөрналист сэй?", mn:"Сэтгүүлч юу гэж хэлсэн бэ?",
        choices:[{t:"She said that the story was true and that she had checked the source.",best:true,mn:"Тэр түүх үнэн бөгөөд эх сурвалжаа шалгасан гэж хэлсэн."},{t:"She said that the story is true and she has checked the source.",best:false,fix:"backshift: is→WAS, has checked→HAD CHECKED."}]},
      {ruby:"Did he tell you when it would be published?", pron:"дид хи тэл ю вэн ит вүд би паблишт?", mn:"Хэзээ нийтлэгдэхийг тэр чамд хэлсэн үү?",
        choices:[{t:"Yes, he told me it would be published the next day.",best:true,mn:"Тийм, тэр надад маргааш нь нийтлэгдэнэ гэж хэлсэн."},{t:"Yes, he said me it will be published tomorrow.",best:false,fix:"TOLD me… it WOULD be published the NEXT DAY."}]},
      {ruby:"Could they confirm the news?", pron:"куд зэй конфөрм зэ нюз?", mn:"Тэд мэдээг батлаж чадсан уу?",
        choices:[{t:"No, they said they couldn't confirm it without a second source.",best:true,mn:"Үгүй, хоёр дахь эх сурвалжгүйгээр батлаж чадахгүй гэж хэлсэн."},{t:"No, they say they can't confirm it.",best:false,fix:"SAID… COULDN'T confirm (backshift)."}]}
    ]}
  },
  {
    id:'b1m4l5', title:"4.5 Ярилцлага авах", level:"B1 · М4",
    blurb:"She asked if I was ready / where I lived — Шууд бус асуулт ⭐⭐⭐",
    rule:{
      h:"Шууд бус асуулт: asked if / asked where … (үг дараалал)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хэн нэгний <b>асуултыг дамжуулах</b> — ярилцлагын гол чадвар. Хамгийн том нууц: <b>асуултын дараалал алга болно</b>.<br><br>
        <b>Тийм/Үгүй асуулт → asked IF / WHETHER:</b>
        <div style="margin:12px 0"><span class="tag">"Are you ready?" → She asked IF I WAS ready.</span></div>
        <b>Wh- асуулт → asked + wh-үг:</b>
        <div style="margin:12px 0"><span class="tag">"Where do you live?" → He asked WHERE I LIVED.</span></div>
        <b>⚠️ Гурван том өөрчлөлт:</b>
        <div style="margin:12px 0"><span class="tag">1. Эргэлт алга: «was I» ✗ → «I was» ✓</span><span class="tag">2. do/does/did алга: «did I live» ✗ → «I lived» ✓</span><span class="tag">3. Цаг ухрана (backshift)</span></div>
        <b>Жишээ бүрэн:</b>
        <div style="margin:12px 0"><span class="tag">"What do you want?" → They asked WHAT I WANTED.</span><span class="tag">"Why did you leave?" → She asked WHY I HAD LEFT.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        interview /ˈɪntərvjuː/ — ярилцлага · reporter /rɪˈpɔːrtər/ — сурвалжлагч · question /ˈkwestʃən/ — асуулт<br>
        answer /ˈænsər/ — хариулт · quote /kwoʊt/ — эш татах · respond /rɪˈspɑːnd/ — хариу өгөх<br>
        press /pres/ — хэвлэл · correspondent /ˌkɔːrəˈspɑːndənt/ — сурвалжлагч · spokesperson /ˈspoʊksˌpɜːrsn/ — төлөөлөгч<br>
        inquiry /ɪnˈkwaɪəri/ — асуулга · clarify /ˈklærəfaɪ/ — тодруулах · confirm /kənˈfɜːrm/ — батлах<br>
        deny /dɪˈnaɪ/ — үгүйсгэх · reveal /rɪˈviːl/ — илчлэх · briefing /ˈbriːfɪŋ/ — мэдээлэл өгөх уулзалт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She asked where did I live» ✗ — did хая, дараалал мэдүүлгийнх: «She asked where I LIVED» ✓. Тийм/үгүй асуултад «that» биш «IF/WHETHER».</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Асуултаа мэдүүлэг болго: эргэлтгүй, do-гүй, цаг ухрана». Тийм/үгүй бол IF.</p>`
    },
    phrases:[
      {en:"She asked if I was ready for the interview.", pron:"ши эскт иф ай воз рэди фор зи интэрвью.", mn:"Тэр намайг ярилцлагад бэлэн үү гэж асуусан."},
      {en:"He asked where I worked.", pron:"хи эскт вэр ай вөркт.", mn:"Тэр намайг хаана ажилладгийг асуусан."},
      {en:"The reporter asked what I thought about it.", pron:"зэ рипортэр эскт вот ай сот эбаут ит.", mn:"Сурвалжлагч намайг энэ талаар юу бодож байгааг асуусан."},
      {en:"They asked whether I had seen the news.", pron:"зэй эскт вэзэр ай хэд сийн зэ нюз.", mn:"Тэд намайг мэдээг үзсэн эсэхийг асуусан."},
      {en:"She asked me why I had left.", pron:"ши эскт ми вай ай хэд лэфт.", mn:"Тэр надаас яагаад явсныг асуусан."}
    ],
    exercises:[
      {q:"Тийм/Үгүй → if:", parts:['She asked ', ' I was ready. ("Are you ready?")'], opts:["if","that"], a:0, fix:"тийм/үгүй асуулт → asked IF."},
      {q:"Үг дараалал:", parts:['He asked where ', '. ("Where do you live?")'], opts:["I lived","did I live"], a:0, fix:"Шууд бус → мэдүүлгийн дараалал: I lived (do ✗)."},
      {q:"Wh- үг:", parts:['They asked ', ' I wanted. ("What do you want?")'], opts:["what","if"], a:0, fix:"wh-асуултад wh-үг хэвээр → what."},
      {q:"Цаг ухрах:", parts:['She asked why I ', '. ("Why did you leave?")'], opts:["had left","left"], a:0, fix:"did leave → HAD LEFT."}
    ],
    speak:{ scene:'Ярилцлагын дараа', turns:[
      {ruby:"What did the reporter ask you?", pron:"вот дид зэ рипортэр эск ю?", mn:"Сурвалжлагч чамаас юу асуусан бэ?",
        choices:[{t:"She asked if I was nervous and where I had prepared my answers.",best:true,mn:"Тэр намайг сандарч байна уу, хариултаа хаана бэлдсэнийг асуусан."},{t:"She asked if was I nervous and where did I prepare.",best:false,fix:"asked IF I WAS… WHERE I HAD PREPARED (эргэлт ✗)."}]},
      {ruby:"Did they ask about your plans?", pron:"дид зэй эск эбаут ёр плэнз?", mn:"Тэд чиний төлөвлөгөөний талаар асуусан уу?",
        choices:[{t:"Yes, they asked what I was going to do next.",best:true,mn:"Тийм, тэд намайг дараа нь юу хийхийг асуусан."},{t:"Yes, they asked what am I going to do next.",best:false,fix:"asked WHAT I WAS going to do (am I ✗)."}]},
      {ruby:"Was it a hard question?", pron:"воз ит э хард квэсчэн?", mn:"Хэцүү асуулт байсан уу?",
        choices:[{t:"Yes, he asked why I had left my last job.",best:true,mn:"Тийм, тэр надаас яагаад өмнөх ажлаа орхисныг асуусан."},{t:"Yes, he asked why did I leave my last job.",best:false,fix:"asked WHY I HAD LEFT (did ✗)."}]}
    ]}
  },
  {
    id:'b1m4l6', title:"4.6 Таамаг", level:"B1 · М4",
    blurb:"It must be broken / can't be right / might be a bug — Таамаглалын модаль ⭐⭐",
    rule:{
      h:"Одоо цагийн таамаглал: must be / can't be / might be / could be",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Баримт дээр тулгуурлан <b>таамаглал</b> хийх — «эвдэрсэн байх», «байж таарахгүй» гэх мэт итгэлийн зэрэглэл.<br><br>
        <b>Итгэлийн шатлал:</b>
        <div style="margin:12px 0"><span class="tag">MUST BE = бараг лавтай (тийм): It must be broken.</span><span class="tag">CAN'T BE = боломжгүй (үгүй): That can't be right.</span><span class="tag">MIGHT/COULD BE = магадгүй: It might be a bug.</span></div>
        <b>Бүтэц: модаль + BE + (нэр/тэмдэг):</b>
        <div style="margin:12px 0"><span class="tag">The battery MUST BE dead.</span><span class="tag">The screen COULD BE frozen.</span></div>
        <b>«must» ба «can't» нь эсрэг хос:</b>
        <div style="margin:12px 0"><span class="tag">He must be at home. (лавтай тийм)</span><span class="tag">He can't be at home. (лавтай биш)</span></div>
        <b>⚠️ Таамаглалд «can be» (эерэг) ХЭРЭГЛЭХГҮЙ</b> — «might/could be» ашигла.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        screen /skriːn/ — дэлгэц · offline /ˌɔːfˈlaɪn/ — сүлжээнд холбогдоогүй · online /ˌɔːnˈlaɪn/ — онлайн<br>
        signal /ˈsɪɡnəl/ — дохио · glitch /ɡlɪtʃ/ — эвдрэл · crash /kræʃ/ — унах (програм)<br>
        freeze /friːz/ — царцах · error /ˈerər/ — алдаа · bug /bʌɡ/ — програмын алдаа<br>
        restart /ˌriːˈstɑːrt/ — дахин эхлүүлэх · reboot /ˌriːˈbuːt/ — дахин ачаалах · unresponsive /ˌʌnrɪˈspɑːnsɪv/ — хариу өгөхгүй<br>
        charge /tʃɑːrdʒ/ — цэнэглэх · overheat /ˌoʊvərˈhiːt/ — хэт халах · lag /læɡ/ — саатах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It must broken» ✗ — модалийн дараа <b>BE</b> заавал: «It must BE broken» ✓. Мөн «It can be broken» (таамаг гэж) ✗ → «It MIGHT be broken» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Лавтай тийм → MUST BE, лавтай үгүй → CAN'T BE, эргэлзвэл → MIGHT/COULD BE».</p>`
    },
    phrases:[
      {en:"Your phone must be broken.", pron:"ёр фоун маст би броукэн.", mn:"Утас чинь эвдэрсэн байх нь."},
      {en:"That can't be right.", pron:"зэт кант би райт.", mn:"Энэ зөв байх аргагүй."},
      {en:"It might be a software bug.", pron:"ит майт би э софтвэр баг.", mn:"Энэ програмын алдаа байж магадгүй."},
      {en:"The screen could be frozen.", pron:"зэ скрийн куд би фроузэн.", mn:"Дэлгэц царцсан байж болзошгүй."},
      {en:"The battery must be dead.", pron:"зэ бэтэри маст би дэд.", mn:"Батерей нь дууссан байх нь."}
    ],
    exercises:[
      {q:"Итгэлтэй таамаг (+):", parts:["It's not working — it ", " broken."], opts:["must be","can't be"], a:0, fix:"Бараг лавтай → MUST BE."},
      {q:"Боломжгүй:", parts:["That price ", " right, it's too cheap."], opts:["can't be","must be"], a:0, fix:"Боломжгүй → CAN'T BE."},
      {q:"Магадгүй:", parts:["I'm not sure — it ", " a bug."], opts:["might be","must be"], a:0, fix:"Эргэлзээтэй → MIGHT/COULD BE."},
      {q:"be заавал:", parts:["The screen must ", " frozen."], opts:["be","is"], a:0, fix:"модаль + BE → must be."}
    ],
    speak:{ scene:'Утас засварлах', turns:[
      {ruby:"Why won't my phone turn on?", pron:"вай воунт май фоун төрн он?", mn:"Утас маань яагаад асахгүй байна?",
        choices:[{t:"The battery must be dead. Try charging it first.",best:true,mn:"Батерей нь дууссан байх. Эхлээд цэнэглэж үзээрэй."},{t:"The battery must dead. Try charge it.",best:false,fix:"must BE dead (be заавал)."}]},
      {ruby:"The app says I have 500 new messages!", pron:"зи эп сэз ай хэв файв хандрэд ню мэсиджиз!", mn:"Апп надад 500 шинэ зурвас байна гэж байна!",
        choices:[{t:"That can't be right. It might be a glitch.",best:true,mn:"Тийм байх аргагүй. Эвдрэл байж магадгүй."},{t:"That must be right. It can't be a glitch.",best:false,fix:"That CAN'T BE right; it MIGHT BE a glitch."}]},
      {ruby:"The screen isn't moving at all.", pron:"зэ скрийн изнт мувинг эт ол.", mn:"Дэлгэц огт хөдлөхгүй байна.",
        choices:[{t:"It could be frozen. You should restart the phone.",best:true,mn:"Царцсан байж болзошгүй. Утсаа дахин эхлүүлэх хэрэгтэй."},{t:"It can be frozen for sure. Restart maybe.",best:false,fix:"Таамаг → COULD/MIGHT be frozen (can ✗)."}]}
    ]}
  },
  {
    id:'b1m4l7', title:"4.7 Төлөвлөгөө", level:"B1 · М4",
    blurb:"I'm going to / I'll / I'm meeting him at 5 — Ирээдүйн 3 хэлбэр ⭐⭐",
    rule:{
      h:"Ирээдүйн хэлбэрүүд: going to vs will vs present continuous",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ирээдүйг зөв илэрхийлэх 3 хэлбэрийг <b>хэзээ алийг</b> нь хэрэглэхийг ялгаж сурна.<br><br>
        <b>1) BE GOING TO — урьдчилан төлөвлөсөн / нотолгоотой таамаг:</b>
        <div style="margin:12px 0"><span class="tag">We ARE GOING TO release the app next month.</span><span class="tag">Look at those clouds — it's GOING TO rain.</span></div>
        <b>2) WILL — тэр дороо шийдсэн / амлалт / энгийн таамаг:</b>
        <div style="margin:12px 0"><span class="tag">That bag is heavy — I'LL help you.</span><span class="tag">I think it WILL be popular.</span></div>
        <b>3) PRESENT CONTINUOUS — товлосон уулзалт (цаг/газартай):</b>
        <div style="margin:12px 0"><span class="tag">I'M MEETING the developers AT FIVE.</span><span class="tag">We're launching it ON FRIDAY.</span></div>
        <b>Харьцуулалт:</b>
        <div style="margin:12px 0"><span class="tag">Урьд төлөвлөсөн → going to</span><span class="tag">Одоо шийдсэн → will</span><span class="tag">Товлосон уулзалт → -ing</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        release /rɪˈliːs/ — гаргах · feature /ˈfiːtʃər/ — онцлог · version /ˈvɜːrʒn/ — хувилбар<br>
        prototype /ˈproʊtətaɪp/ — загвар · roadmap /ˈroʊdmæp/ — хөгжлийн зураглал · beta /ˈbeɪtə/ — туршилтын хувилбар<br>
        preview /ˈpriːvjuː/ — урьдчилан үзэх · deploy /dɪˈplɔɪ/ — нэвтрүүлэх · subscription /səbˈskrɪpʃn/ — захиалга<br>
        trial /ˈtraɪəl/ — туршилтын хугацаа · renew /rɪˈnuː/ — сунгах · notify /ˈnoʊtɪfaɪ/ — мэдэгдэх<br>
        remind /rɪˈmaɪnd/ — сануулах · schedule /ˈskedʒuːl/ — хуваарь · postpone /poʊstˈpoʊn/ — хойшлуулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Гэнэт тусалъя гэвэл «I'm going to help you» биш «I'LL help you» ✓. Товлосон уулзалтад «I'll meet them at 5» биш «I'M MEETING them at 5» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Төлөвлөсөн бол GOING TO, тэр дороо бол WILL, календарьт байвал -ING».</p>`
    },
    phrases:[
      {en:"We're going to release the new app next month.", pron:"вийр гоуинг ту рилийс зэ ню эп нэкст манс.", mn:"Бид шинэ аппаа дараа сард гаргах гэж байна."},
      {en:"I'll help you install it.", pron:"айл хэлп ю инстол ит.", mn:"Би чамд суулгахад чинь тусалъя."},
      {en:"I'm meeting the developers at five.", pron:"айм миитинг зэ дивэлопэрз эт файв.", mn:"Би хөгжүүлэгчидтэй таван цагт уулзана."},
      {en:"Look at those clouds — it's going to rain.", pron:"лук эт зоуз клаудз — итс гоуинг ту рэйн.", mn:"Тэр үүлсийг хар л даа — бороо орох нь."},
      {en:"The beta version comes out on Friday.", pron:"зэ бэта вөршн камз аут он фрайдэй.", mn:"Туршилтын хувилбар баасан гарагт гарна."}
    ],
    exercises:[
      {q:"Урьдчилан төлөвлөсөн:", parts:["We ", " release the app next month."], opts:["are going to","will"], a:0, fix:"Урьдчилан төлөвлөсөн → ARE GOING TO."},
      {q:"Тэр дороо шийдэх:", parts:["The bag is heavy — I ", " help you."], opts:["'ll","'m going to"], a:0, fix:"Тэр даруй шийдвэр → WILL."},
      {q:"Товлосон уулзалт:", parts:["I ", " the team at 5 today."], opts:["'m meeting","'ll meet"], a:0, fix:"Товлосон уулзалт → present continuous."},
      {q:"Нотолгоотой таамаг:", parts:["Look at the sky — it ", " snow."], opts:["'s going to","will"], a:0, fix:"Нүдэнд харагдах нотолгоо → GOING TO."}
    ],
    speak:{ scene:'Бүтээгдэхүүний төлөвлөгөө', turns:[
      {ruby:"When are you launching the new version?", pron:"вэн а ю лончинг зэ ню вөршн?", mn:"Шинэ хувилбараа хэзээ гаргах вэ?",
        choices:[{t:"We're going to release it next month. It's already on the roadmap.",best:true,mn:"Дараа сард гаргах гэж байна. Хөгжлийн зураглалд орсон."},{t:"We release it next month for sure.",best:false,fix:"Төлөвлөсөн → WE'RE GOING TO release it."}]},
      {ruby:"Can someone show me the demo today?", pron:"кэн самван шоу ми зэ дэмоу тудэй?", mn:"Өнөөдөр надад демог үзүүлж чадах хүн байна уу?",
        choices:[{t:"Sure, I'll show it to you after lunch.",best:true,mn:"Мэдээж, үдийн хойно танд үзүүлье."},{t:"Sure, I'm going to show it after lunch.",best:false,fix:"Тэр дороо санал → I'LL show it."}]},
      {ruby:"Do you have any meetings later?", pron:"ду ю хэв эни миитингз лэйтэр?", mn:"Дараа нь уулзалт байгаа юу?",
        choices:[{t:"Yes, I'm meeting the developers at five to test the beta.",best:true,mn:"Тийм, туршилтын хувилбарыг шалгахаар таван цагт хөгжүүлэгчидтэй уулзана."},{t:"Yes, I will meet the developers at five.",best:false,fix:"Товлосон уулзалт → I'M MEETING them at five."}]}
    ]}
  },
  {
    id:'b1m4l8', title:"4.8 Баталгаажуулах", level:"B1 · М4",
    blurb:"It's fast, isn't it? / You use it, don't you? — Баталгаажуулах асуулт ⭐⭐",
    rule:{
      h:"Баталгаажуулах асуулт (Question Tags): …, isn't it? / …, don't you?",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өгүүлбэрийн төгсгөлд бяцхан асуулт залгаж <b>батлуулах / зөвшөөрүүлэх</b> — ярианы амьд хэллэг.<br><br>
        <b>Үндсэн дүрэм — эсрэг туйл:</b>
        <div style="margin:12px 0"><span class="tag">Эерэг өгүүлбэр → СӨРӨГ tag: It's fast, ISN'T IT?</span><span class="tag">Сөрөг өгүүлбэр → ЭЕРЭГ tag: She didn't log in, DID SHE?</span></div>
        <b>Туслах үйл үг байвал түүнийг ав:</b>
        <div style="margin:12px 0"><span class="tag">You've backed it up, HAVEN'T YOU?</span><span class="tag">You can't open it, CAN YOU?</span></div>
        <b>Туслах үйл үг байхгүй бол do/does/did:</b>
        <div style="margin:12px 0"><span class="tag">You use it every day, DON'T YOU?</span><span class="tag">He installed it, DIDN'T HE?</span></div>
        <b>Онцгой: I am → aren't I?</b>
        <div style="margin:12px 0"><span class="tag">I'm right, AREN'T I?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        app /æp/ — аппликейшн · install /ɪnˈstɔːl/ — суулгах · uninstall /ˌʌnɪnˈstɔːl/ — устгах<br>
        setting /ˈsetɪŋ/ — тохиргоо · permission /pərˈmɪʃn/ — зөвшөөрөл · account /əˈkaʊnt/ — бүртгэл<br>
        password /ˈpæswɜːrd/ — нууц үг · login /ˈlɔːɡɪn/ — нэвтрэх · verify /ˈverɪfaɪ/ — баталгаажуулах<br>
        activate /ˈæktɪveɪt/ — идэвхжүүлэх · backup /ˈbækʌp/ — нөөшлөх · sync /sɪŋk/ — синхрончлох<br>
        restore /rɪˈstɔːr/ — сэргээх · enable /ɪˈneɪbl/ — идэвхжүүлэх · disable /dɪsˈeɪbl/ — идэвхгүй болгох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It saves time, isn't it?» ✗ — «saves» бол do-үйл: «doesn't it?» ✓. Мөн эерэг өгүүлбэрт эерэг tag тавихгүй: «It's fast, is it?» ✗ → «isn't it?» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Толь мэт эсрэгээр» — эерэг рүү сөрөг, сөрөг рүү эерэг. Туслах үг байхгүй бол do-г ав.</p>`
    },
    phrases:[
      {en:"This app is really fast, isn't it?", pron:"зис эп из риали фаст, изнт ит?", mn:"Энэ апп үнэхээр хурдан шүү, тийм үү?"},
      {en:"You use this every day, don't you?", pron:"ю юз зис эври дэй, доунт ю?", mn:"Чи үүнийг өдөр бүр хэрэглэдэг биз дээ?"},
      {en:"You've backed up your files, haven't you?", pron:"юв бэкт ап ёр файлз, хэвнт ю?", mn:"Файлаа нөөшилсөн биз дээ?"},
      {en:"She didn't verify her account, did she?", pron:"ши диднт вэрифай хөр экаунт, дид ши?", mn:"Тэр бүртгэлээ баталгаажуулаагүй биз дээ?"},
      {en:"You can't remember the password, can you?", pron:"ю кант рэмэмбэр зэ пассворд, кэн ю?", mn:"Чи нууц үгээ санахгүй байгаа биз дээ?"}
    ],
    exercises:[
      {q:"Эерэг → сөрөг tag:", parts:["The app is fast, ", "?"], opts:["isn't it","is it"], a:0, fix:"Эерэг өгүүлбэр → сөрөг tag: isn't it."},
      {q:"do-тай:", parts:["You use it daily, ", "?"], opts:["don't you","doesn't you"], a:0, fix:"you → DON'T YOU."},
      {q:"Сөрөг → эерэг tag:", parts:["She didn't log in, ", "?"], opts:["did she","didn't she"], a:0, fix:"Сөрөг өгүүлбэр → эерэг tag: did she."},
      {q:"have-тай:", parts:["You've backed it up, ", "?"], opts:["haven't you","don't you"], a:0, fix:"'ve → HAVEN'T YOU."}
    ],
    speak:{ scene:'Апп тохируулах', turns:[
      {ruby:"This new app is really useful, isn't it?", pron:"зис ню эп из риали юсфул, изнт ит?", mn:"Энэ шинэ апп үнэхээр хэрэгтэй шүү, тийм үү?",
        choices:[{t:"Yes, it is. It saves a lot of time, doesn't it?",best:true,mn:"Тийм ээ. Их цаг хэмнэдэг биз дээ?"},{t:"Yes, it is. It saves a lot of time, isn't it?",best:false,fix:"«saves» → tag нь DOESN'T IT (isn't ✗)."}]},
      {ruby:"You've already installed it, haven't you?", pron:"юв олрэди инстолд ит, хэвнт ю?", mn:"Чи үүнийг аль хэдийн суулгасан биз дээ?",
        choices:[{t:"Yes, I have. But I forgot the password, didn't I?",best:true,mn:"Тийм. Гэхдээ нууц үгээ мартчихсан юм, тийм ээ?"},{t:"Yes, I have. But I forgot the password, haven't I?",best:false,fix:"«forgot» (past) → tag DIDN'T I (haven't ✗)."}]},
      {ruby:"You can't log in without verifying, can you?", pron:"ю кант лог ин визаут вэрифайинг, кэн ю?", mn:"Баталгаажуулахгүйгээр нэвтэрч чадахгүй биз дээ?",
        choices:[{t:"No, I can't. I have to verify my email first, don't I?",best:true,mn:"Үгүй ээ. Эхлээд имэйлээ баталгаажуулах ёстой биз дээ?"},{t:"No, I can't. I have to verify my email, haven't I?",best:false,fix:"«have to» → tag DON'T I (haven't ✗)."}]}
    ]}
  },
  {
    id:'b1m4l9', title:"4.9 Хэтрүүлэг", level:"B1 · М4",
    blurb:"too much screen time / not enough storage / a few apps — Хэмжээ заах үгс ⭐⭐",
    rule:{
      h:"Хэмжээ заах үг: too much / too many / (not) enough / a few / a little",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэмжээ, тоо хэмжээг зөв илэрхийлэх — «хэт их», «хангалтгүй», «хэдхэн» гэх мэт.<br><br>
        <b>too much / too many = хэт их (илүүдэл, муу утга):</b>
        <div style="margin:12px 0"><span class="tag">too MUCH + тоолж болохгүй: too much SCREEN TIME.</span><span class="tag">too MANY + тоолж болно: too many APPS.</span></div>
        <b>(not) enough = хангалттай / хангалтгүй:</b>
        <div style="margin:12px 0"><span class="tag">I don't have ENOUGH storage. (нэрийн өмнө)</span><span class="tag">It's not fast ENOUGH. (тэмдэгийн ард)</span></div>
        <b>a few / a little = багахан (эерэг):</b>
        <div style="margin:12px 0"><span class="tag">a FEW + тоолж болно: a few files.</span><span class="tag">a LITTLE + тоолж болохгүй: a little data.</span></div>
        <b>Хос харьцуулалт:</b>
        <div style="margin:12px 0"><span class="tag">much / little → data, time, memory (тоолж болохгүй)</span><span class="tag">many / few → apps, files, popups (тоолж болно)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        storage /ˈstɔːrɪdʒ/ — хадгалах багтаамж · memory /ˈmeməri/ — санах ой · data /ˈdeɪtə/ — дата<br>
        file /faɪl/ — файл · folder /ˈfoʊldər/ — хавтас · cache /kæʃ/ — түр санах ой<br>
        spam /spæm/ — хог захидал · advertisement /ˌædvərˈtaɪzmənt/ — сурталчилгаа · popup /ˈpɑːpʌp/ — гарч ирэх цонх<br>
        screen time /ˈskriːn taɪm/ — дэлгэцний цаг · scroll /skroʊl/ — гүйлгэх · addictive /əˈdɪktɪv/ — донтуулам<br>
        distraction /dɪˈstrækʃn/ — анхаарал сарниулагч · overload /ˌoʊvərˈloʊd/ — хэт ачаалал · gigabyte /ˈɡɪɡəbaɪt/ — гигабайт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «too much apps» ✗ — apps тоолж болно: «too MANY apps» ✓. «too many data» ✗ → «too MUCH data» ✓. «a few data» ✗ → «a LITTLE data» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тоолж болно → MANY/FEW, тоолж болохгүй → MUCH/LITTLE. Хэт их = too, дутуу = not enough».</p>`
    },
    phrases:[
      {en:"You spend too much time on your phone.", pron:"ю спэнд ту мач тайм он ёр фоун.", mn:"Чи утсандаа хэт их цаг зарцуулдаг."},
      {en:"There are too many apps on this screen.", pron:"зэр а ту мэни эпс он зис скрийн.", mn:"Энэ дэлгэц дээр хэт олон апп байна."},
      {en:"I don't have enough storage.", pron:"ай доунт хэв инаф сторидж.", mn:"Надад хангалттай багтаамж алга."},
      {en:"Delete a few old files.", pron:"дилийт э фью оулд файлз.", mn:"Хэдэн хуучин файл устгаарай."},
      {en:"I have a little data left.", pron:"ай хэв э литл дэйта лэфт.", mn:"Надад бага зэрэг дата үлдсэн."}
    ],
    exercises:[
      {q:"Тоолж болохгүй + их:", parts:["You spend too ", " time online."], opts:["much","many"], a:0, fix:"time тоолж болохгүй → too MUCH."},
      {q:"Тоолж болно + олон:", parts:["There are too ", " popups."], opts:["many","much"], a:0, fix:"popups тоолж болно → too MANY."},
      {q:"Хангалтгүй:", parts:["I don't have ", " storage."], opts:["enough","too much"], a:0, fix:"«хангалттай … алга» → not ENOUGH."},
      {q:"Цөөн тоо:", parts:["Delete a ", " old files."], opts:["few","little"], a:0, fix:"files тоолж болно → a FEW."}
    ],
    speak:{ scene:'Утасны багтаамж', turns:[
      {ruby:"Why is your phone so slow?", pron:"вай из ёр фоун соу слоу?", mn:"Утас чинь яагаад ийм удаан байгаа юм?",
        choices:[{t:"There are too many apps and not enough free memory.",best:true,mn:"Хэт олон апп байгаа бөгөөд сул санах ой хангалтгүй."},{t:"There are too much apps and not enough memories.",best:false,fix:"apps → too MANY (much ✗); memory тоолж болохгүй."}]},
      {ruby:"How much data do you have left?", pron:"хау мач дэйта ду ю хэв лэфт?", mn:"Хэдий хэмжээний дата үлдсэн бэ?",
        choices:[{t:"Only a little. I've used too much this month.",best:true,mn:"Багахан. Энэ сард хэт их зарцуулчихжээ."},{t:"Only a few. I've used too many this month.",best:false,fix:"data тоолж болохгүй → a LITTLE, too MUCH."}]},
      {ruby:"What should I delete first?", pron:"вот шуд ай дилийт фөрст?", mn:"Эхлээд юуг устгах вэ?",
        choices:[{t:"Just clear the cache and remove a few large files.",best:true,mn:"Зүгээр л түр санах ойг цэвэрлээд хэдэн том файл устга."},{t:"Just clear the cache and remove a little large files.",best:false,fix:"files тоолж болно → a FEW (little ✗)."}]}
    ]}
  },
  {
    id:'b1m4l10', title:"4.10 Модулийн шалгалт", level:"B1 · М4",
    blurb:"🏆 Технологийн талаар мэтгэлцэж, эссэ бичих",
    rule:{
      h:"Давтлага: B1 Модуль 4-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 4-ийн бүх дүрмийг нэгтгэж, технологийн талаар <b>жинхэнэ B1 түвшний мэтгэлцээн/эссэ</b> бүтээх.<br><br>
        <b>Модуль 4-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">The phone is made / was invented ⭐⭐⭐</span><span class="tag">It can be done / has been done / must be repaired ⭐⭐⭐</span><span class="tag">If you post it, it'll go viral — unless… ⭐⭐</span><span class="tag">He said (that) he was tired ⭐⭐⭐</span><span class="tag">She asked if I was ready / where I lived ⭐⭐⭐</span><span class="tag">It must be broken / can't be right / might be a bug ⭐⭐</span><span class="tag">I'm going to / I'll / I'm meeting them at 5 ⭐⭐</span><span class="tag">It's fast, isn't it? / you use it, don't you? ⭐⭐</span><span class="tag">too much / too many / not enough / a few / a little ⭐⭐</span></div>
        <b>🏆 Төсөл — «Технологи биднийг сайжруулж байна уу?» эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>These days, almost everything is controlled by technology. The smartphone was invented only a few decades ago, but now it can be found in nearly every pocket. Some people say that we spend too much time online and not enough time with real people. A journalist recently claimed that social media was making us lonelier, and when I read that, I asked myself whether it was really true. Of course, if we use these tools wisely, they will help us — unless we let them control our lives. My phone must be checked a hundred times a day, and that can't be healthy, can it? In the future, I'm going to set clear limits. Technology is a powerful tool, isn't it? As long as we stay in control, it will make our lives better.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!
        <p style="margin-top:12px"><b>📚 Үгийн сан (15) — модулийн нэгтгэл:</b></p>
        <div style="font-size:14px;line-height:2">
        technology /tekˈnɑːlədʒi/ — технологи · media /ˈmiːdiə/ — хэвлэл мэдээлэл · digital /ˈdɪdʒɪtl/ — тоон<br>
        virtual /ˈvɜːrtʃuəl/ — виртуал · artificial intelligence /ˌɑːrtɪˈfɪʃl ɪnˈtelɪdʒəns/ — хиймэл оюун ухаан · algorithm /ˈælɡərɪðəm/ — алгоритм<br>
        automation /ˌɔːtəˈmeɪʃn/ — автоматжуулалт · innovation /ˌɪnəˈveɪʃn/ — шинэчлэл · cybersecurity /ˈsaɪbərsɪˌkjʊrəti/ — кибер аюулгүй байдал<br>
        privacy /ˈpraɪvəsi/ — хувийн нууц · misinformation /ˌmɪsɪnfərˈmeɪʃn/ — худал мэдээлэл · database /ˈdeɪtəbeɪs/ — өгөгдлийн сан<br>
        interface /ˈɪntərfeɪs/ — интерфейс · platform /ˈplætfɔːrm/ — платформ · streaming /ˈstriːmɪŋ/ — стриминг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Эссэ бичихдээ идэвхгүй хэвд <b>BE + V3</b>, шууд бус ярианд <b>цаг ухраахаа</b>, tag-т <b>эсрэг туйлаа</b> бүү мартаарай.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 мэтгэлцээний 4 багана: <b>Баримт</b> (is controlled, was invented) → <b>Иш татах</b> (a journalist said… was) → <b>Таамаг ба нөхцөл</b> (can't be healthy, unless we…) → <b>Ирээдүйн шийдэл</b> (I'm going to set limits).</p>`
    },
    phrases:[
      {en:"The smartphone was invented only a few decades ago.", pron:"зэ смартфоун воз инвэнтид оунли э фью дэкэйдз эгоу.", mn:"Ухаалаг утсыг ердөө хэдхэн арван жилийн өмнө зохион бүтээсэн."},
      {en:"A journalist claimed that social media was making us lonelier.", pron:"э жөрналист клэймд зэт соушл мийдиа воз мэйкинг ас лоунлиэр.", mn:"Нэгэн сэтгүүлч нийгмийн сүлжээ биднийг илүү ганцаардуулж байна гэж мэдэгдсэн."},
      {en:"My phone must be checked a hundred times a day.", pron:"май фоун маст би чэкт э хандрэд таймз э дэй.", mn:"Утас маань өдөрт зуу дахин шалгагддаг байх."},
      {en:"Technology is a powerful tool, isn't it?", pron:"тэкнолоджи из э пауэрфул тул, изнт ит?", mn:"Технологи бол хүчирхэг хэрэгсэл шүү, тийм үү?"},
      {en:"As long as we stay in control, it will help us.", pron:"эз лонг эз ви стэй ин контрол, ит вил хэлп ас.", mn:"Хяналтаа алдахгүй л бол энэ бидэнд тусална."}
    ],
    exercises:[
      {q:"Давтлага (идэвхгүй):", parts:["The phone ", " in 1876."], opts:["was invented","invented"], a:0, fix:"was/were + V3 → was invented."},
      {q:"Давтлага (шууд бус):", parts:['She said she ', ' busy. ("I am busy")'], opts:["was","is"], a:0, fix:"backshift: is → WAS."},
      {q:"Давтлага (tag):", parts:["It's fast, ", "?"], opts:["isn't it","is it"], a:0, fix:"Эерэг → сөрөг tag: isn't it."},
      {q:"Давтлага (хэмжээ):", parts:["We spend too ", " time online."], opts:["much","many"], a:0, fix:"time тоолж болохгүй → too MUCH."}
    ],
    speak:{ scene:'🏆 Төсөл: Технологийн мэтгэлцээн', turns:[
      {ruby:"Is technology making our lives better or worse?", pron:"из тэкнолоджи мэйкинг ор лайвз бэтэр ор вөрс?", mn:"Технологи бидний амьдралыг сайжруулж байна уу, эсвэл мууруулж байна уу?",
        choices:[{t:"It depends. If we use it wisely, it will help us — unless we let it control us.",best:true,mn:"Нөхцөл байдлаас шалтгаална. Ухаалаг ашиглавал тусална — хяналтдаа авахуулахгүй л бол."},{t:"It depends. If we will use it wisely, it helps us.",best:false,fix:"IF we USE it…, it WILL help us."}]},
      {ruby:"But don't we spend too much time on our phones?", pron:"бат доунт ви спэнд ту мач тайм он ор фоунз?", mn:"Гэхдээ бид утсандаа хэт их цаг зарцуулдаг биш үү?",
        choices:[{t:"You're right. My phone must be checked a hundred times a day, and that can't be healthy.",best:true,mn:"Зөв хэлж байна. Утас маань өдөрт зуу дахин шалгагддаг, энэ эрүүл байх аргагүй."},{t:"You're right. My phone must check a hundred times, and that must be healthy.",best:false,fix:"must BE CHECKED (идэвхгүй); that CAN'T be healthy."}]},
      {ruby:"So what are you going to do about it?", pron:"соу вот а ю гоуинг ту ду эбаут ит?", mn:"Тэгэхээр чи энэ талаар юу хийх гэж байна?",
        choices:[{t:"I'm going to set clear limits. Technology is just a tool, isn't it?",best:true,mn:"Би тодорхой хязгаар тогтоох гэж байна. Технологи бол ердөө хэрэгсэл шүү, тийм үү?"},{t:"I will set limits maybe. Technology is just a tool, isn't they?",best:false,fix:"Төлөвлөсөн → I'M GOING TO set…; tag → ISN'T IT."}]}
    ]}
  },
  {
    id:'b1m5l1', title:"5.1 Эрүүл амьдрал", level:"B1 · М5",
    blurb:"You should have slept more — Past modals (харамсал & шүүмж) ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: should have / could have / might have + V3 (өнгөрсний харамсал)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>болоогүй зүйлд харамсах, шүүмжлэх, таамаглах</b>.<br><br>
        <b>should have + V3</b> = хийх ёстой байсан ч хийгээгүй (харамсал/шүүмж):
        <div style="margin:12px 0"><span class="tag">You SHOULD HAVE SEEN a doctor. (эмчид үзүүлэх ёстой байсан)</span><span class="tag">I shouldn't have eaten so much sugar. (тэгж их чихэр идэх ёсгүй байсан)</span></div>
        <b>could have + V3</b> = боломж байсан ч ашиглаагүй:
        <div style="margin:12px 0"><span class="tag">I COULD HAVE EATEN better. (илүү сайн идэж болох байсан)</span></div>
        <b>might have + V3</b> = магадгүй болсон байх (таамаг):
        <div style="margin:12px 0"><span class="tag">She MIGHT HAVE CAUGHT a cold. (магадгүй ханиад хүрсэн байх)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        lifestyle /ˈlaɪfstaɪl/ — амьдралын хэв маяг · wellbeing /ˌwelˈbiːɪŋ/ — сайн сайхан байдал · immune /ɪˈmjuːn/ — дархлааны<br>
        prevent /prɪˈvent/ — урьдчилан сэргийлэх · nutrition /njuˈtrɪʃn/ — тэжээл · exercise /ˈeksərsaɪz/ — дасгал хөдөлгөөн<br>
        balanced /ˈbælənst/ — тэнцвэртэй · moderate /ˈmɒdərət/ — дунд зэрэг · hydrate /ˈhaɪdreɪt/ — ус уух<br>
        posture /ˈpɒstʃər/ — биеийн байрлал · recover /rɪˈkʌvər/ — эдгэрэх · energy /ˈenərdʒi/ — эрч хүч<br>
        habit /ˈhæbɪt/ — зуршил · sleep /sliːp/ — нойр · workout /ˈwɜːrkaʊt/ — дасгал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You should saw a doctor» ✗ → <b>should HAVE seen</b> ✓ (V3!). Мөн «should of» ✗ → <b>should HAVE</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өнгөрсөнд харамсвал → SHOULD/COULD/MIGHT HAVE + V3».</p>`
    },
    phrases:[
      {en:"You should have gone to bed earlier.", pron:"ю шүд хэв гон ту бэд өрлиэр.", mn:"Чи эрт унтах ёстой байсан."},
      {en:"I could have eaten a healthier breakfast.", pron:"ай күд хэв ийтн э хэлсиэр брэкфаст.", mn:"Би илүү эрүүл өглөөний хоол идэж болох байсан."},
      {en:"She might have caught a cold in the rain.", pron:"ши майт хэв кот э колд ин зэ рэйн.", mn:"Тэр бороонд ханиад хүрсэн байж магадгүй."},
      {en:"We shouldn't have skipped our morning workout.", pron:"ви шүднт хэв скипт аур морнинг вөркаут.", mn:"Бид өглөөний дасгалаа алгасах ёсгүй байсан."},
      {en:"He could have prevented the injury with a warm-up.", pron:"хи күд хэв привэнтид зэ инжэри виз э вормап.", mn:"Тэр халаалт хийж гэмтлээс сэргийлж болох байсан."}
    ],
    exercises:[
      {q:"Харамсал:", parts:["You look tired. You ", " to bed earlier."], opts:["should have gone","should went"], a:0, fix:"should HAVE + V3 → gone."},
      {q:"Боломж:", parts:["I feel weak. I ", " better food."], opts:["could have eaten","could ate"], a:0, fix:"could HAVE eaten."},
      {q:"Таамаг:", parts:["She's sneezing. She ", " a cold."], opts:["might have caught","might catched"], a:0, fix:"might HAVE caught (V3)."},
      {q:"Үгүйсгэл:", parts:["We ", " so much sugar."], opts:["shouldn't have eaten","shouldn't ate"], a:0, fix:"shouldn't HAVE eaten."}
    ],
    speak:{ scene:'Эрүүл мэндээ ярих', turns:[
      {ruby:"You don't look well today.", pron:"ю донт лүк вэл тудэй.", mn:"Чи өнөөдөр тааруу харагдаж байна.",
        choices:[{t:"I know. I should have gone to bed earlier last night.",best:true,mn:"Мэдэж байна. Өчигдөр эрт унтах ёстой байсан."},{t:"I know. I should went to bed earlier.",best:false,fix:"should → should HAVE GONE (V3)."}]},
      {ruby:"Why are you so exhausted?", pron:"вай а ю соу игзостид?", mn:"Чи яагаад ийм ядарсан байна вэ?",
        choices:[{t:"I could have slept more, but I stayed up watching films.",best:true,mn:"Илүү унтаж болох байсан ч кино үзээд суусан."},{t:"I could slept more, but I stayed up.",best:false,fix:"could → could HAVE SLEPT."}]},
      {ruby:"Take better care of yourself!", pron:"тэйк бэтэр кэр ов ёрсэлф!", mn:"Өөрийгөө илүү сайн халамжил!",
        choices:[{t:"I will. I shouldn't have skipped my workouts this week.",best:true,mn:"Тэгье. Энэ долоо хоног дасгалаа алгасах ёсгүй байсан."},{t:"I will. I shouldn't skipped my workouts.",best:false,fix:"shouldn't → shouldn't HAVE SKIPPED."}]}
    ]}
  },
  {
    id:'b1m5l2', title:"5.2 Эмнэлэг", level:"B1 · М5",
    blurb:"If I had rested, I would feel better now — Mixed conditionals ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Mixed conditionals (холимог нөхцөл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хоёр өөр цагийг нэг нөхцөлд холбох.<br><br>
        <b>А төрөл — Өнгөрсөн нөхцөл → ОДОО үр дүн</b> (If + had + V3, would + V1):
        <div style="margin:12px 0"><span class="tag">If I HAD STUDIED medicine, I WOULD BE a doctor now. (эм сурсан бол одоо эмч байх байсан)</span></div>
        <b>Б төрөл — Одоогийн нөхцөл → ӨНГӨРСӨН үр дүн</b> (If + past, would have + V3):
        <div style="margin:12px 0"><span class="tag">If I WEREN'T so careless, I WOULDN'T HAVE BROKEN my leg. (болгоомжгүй биш бол хөлөө хугалахгүй байх байсан)</span></div>
        <b>Түлхүүр үг «now / today» → одоогийн үр дүн → would + V1:</b>
        <div style="margin:12px 0"><span class="tag">If I had taken the pill, I would feel fine NOW.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        patient /ˈpeɪʃnt/ — өвчтөн · diagnosis /ˌdaɪəɡˈnoʊsɪs/ — оношилгоо · treatment /ˈtriːtmənt/ — эмчилгээ<br>
        symptom /ˈsɪmptəm/ — шинж тэмдэг · prescription /prɪˈskrɪpʃn/ — жор · surgery /ˈsɜːrdʒəri/ — мэс засал<br>
        appointment /əˈpɔɪntmənt/ — цаг товлолт · injury /ˈɪndʒəri/ — гэмтэл · ward /wɔːrd/ — тасаг<br>
        nurse /nɜːrs/ — сувилагч · ambulance /ˈæmbjələns/ — түргэн тусламж · dose /doʊs/ — тун<br>
        referral /rɪˈfɜːrəl/ — шилжүүлэг · checkup /ˈtʃekʌp/ — үзлэг · recovery /rɪˈkʌvəri/ — эдгэрэлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would study, I would be a doctor» ✗ — if талд <b>would</b> хэрэглэхгүй → <b>If I had studied</b> ✓. Мөн «now» гэвэл <b>would BE</b> (would have been ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «NOW/TODAY → would + V1 (одоо). Өнгөрсний үр дүн → would HAVE + V3».</p>`
    },
    phrases:[
      {en:"If I had taken the medicine, I would feel better now.", pron:"иф ай хэд тэйкн зэ мэдисн, ай вүд фийл бэтэр нау.", mn:"Эмээ уусан бол одоо сайн байх байсан."},
      {en:"If I weren't so careless, I wouldn't have broken my arm.", pron:"иф ай вөрнт соу кэрлэс, ай вүднт хэв броукн май арм.", mn:"Ийм болгоомжгүй биш бол гараа хугалахгүй байх байсан."},
      {en:"If she had seen a doctor earlier, she would be healthy today.", pron:"иф ши хэд сийн э доктор өрлиэр, ши вүд би хэлси тудэй.", mn:"Эрт эмчид үзүүлсэн бол өнөөдөр эрүүл байх байсан."},
      {en:"If he were fitter, he would have recovered faster.", pron:"иф хи вөр фитэр, хи вүд хэв рикавэрд фастэр.", mn:"Илүү чийрэг бол хурдан эдгэрэх байсан."},
      {en:"If we had listened to the nurse, we wouldn't be here now.", pron:"иф ви хэд лиснд ту зэ нөрс, ви вүднт би хиэр нау.", mn:"Сувилагчийг сонссон бол одоо энд байхгүй байх байсан."}
    ],
    exercises:[
      {q:"Өнгөрсөн→одоо:", parts:["If I had studied medicine, I ", " a doctor now."], opts:["would be","would have been"], a:0, fix:"«now» → would BE."},
      {q:"Одоо→өнгөрсөн:", parts:["If I ", " more careful, I wouldn't have fallen."], opts:["were","had been"], a:0, fix:"одоогийн байдал → were."},
      {q:"Одоогийн үр дүн:", parts:["If she had rested, she ", " better today."], opts:["would feel","would felt"], a:0, fix:"would + V1 → would feel."},
      {q:"Өнгөрсөн үр дүн:", parts:["If he weren't afraid, he ", " to hospital last week."], opts:["would have gone","would go"], a:0, fix:"«last week» → would have gone."}
    ],
    speak:{ scene:'Эмнэлэгт', turns:[
      {ruby:"Why didn't you come in earlier?", pron:"вай диднт ю кам ин өрлиэр?", mn:"Яагаад эрт ирээгүй юм бэ?",
        choices:[{t:"If I had come earlier, I wouldn't be in so much pain now.",best:true,mn:"Эрт ирсэн бол одоо ийм их өвдөхгүй байх байсан."},{t:"If I would come earlier, I wouldn't be in pain.",best:false,fix:"if талд would ✗ → If I HAD COME."}]},
      {ruby:"Are you always this careless?", pron:"а ю олвэйз зис кэрлэс?", mn:"Чи үргэлж ийм болгоомжгүй байдаг уу?",
        choices:[{t:"If I weren't so careless, I wouldn't have hurt myself.",best:true,mn:"Ийм болгоомжгүй биш бол өөрийгөө гэмтээхгүй байх байсан."},{t:"If I wouldn't be careless, I wouldn't have hurt myself.",best:false,fix:"if талд would ✗ → If I WEREN'T careless."}]},
      {ruby:"Don't worry, you'll recover soon.", pron:"донт вөрри, юл рикавэр сүн.", mn:"Санаа зовох хэрэггүй, удахгүй эдгэрнэ.",
        choices:[{t:"Thank you. If I had listened to my doctor, I would be fine already.",best:true,mn:"Баярлалаа. Эмчээ сонссон бол аль хэдийн эдгэрчихсэн байх байсан."},{t:"Thank you. If I listened to my doctor, I would be fine.",best:false,fix:"өнгөрсөн нөхцөл → If I HAD LISTENED..."}]}
    ]}
  },
  {
    id:'b1m5l3', title:"5.3 Гомдол", level:"B1 · М5",
    blurb:"I wish you would stop! — I wish / if only + would ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: I wish / if only + would (бусдын зуршилд гомдох)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ <b>Бусдын ядаргаатай зуршилд</b> гомдоллох, өөрчлөөсэй гэж хүсэх.<br><br>
        <b>I wish + хүн + WOULD + V1:</b>
        <div style="margin:12px 0"><span class="tag">I WISH you WOULD STOP shouting. (чи хашгирахаа болиосой)</span><span class="tag">IF ONLY he WOULD listen to me. (тэр л намайг сонсдог бол)</span></div>
        <b>Сөрөг зуршил — wouldn't:</b>
        <div style="margin:12px 0"><span class="tag">I wish he WOULDN'T LEAVE his dishes in the sink. (тавгаа орхихгүй байгаасай)</span></div>
        <b>⚠️ Өөртэйгээ «would» хэрэглэхгүй!</b> Зөвхөн бусдын үйлд. Өөрийн байдалд → <b>I wish + past</b>:
        <div style="margin:12px 0"><span class="tag">I wish I HAD a quieter flat. (I wish I would have ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        annoy /əˈnɔɪ/ — бухимдуулах · irritating /ˈɪrɪteɪtɪŋ/ — ядаргаатай · constantly /ˈkɒnstəntli/ — байнга<br>
        complain /kəmˈpleɪn/ — гомдоллох · neighbour /ˈneɪbər/ — хөрш · noisy /ˈnɔɪzi/ — чимээ шуугиантай<br>
        interrupt /ˌɪntəˈrʌpt/ — таслах · mess /mes/ — эмх замбараагүй байдал · tidy /ˈtaɪdi/ — цэгцтэй<br>
        borrow /ˈbɒroʊ/ — зээлж авах · rude /ruːd/ — бүдүүлэг · polite /pəˈlaɪt/ — эелдэг<br>
        patience /ˈpeɪʃns/ — тэвчээр · tolerate /ˈtɒləreɪt/ — тэвчих · behaviour /bɪˈheɪvjər/ — зан авир</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish you will stop» ✗ → <b>I wish you WOULD stop</b> ✓. Мөн өөрийн байдалд «I wish I would have time» ✗ → <b>I wish I HAD time</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Бусдын зуршилд гомдвол → I WISH + хүн + WOULD».</p>`
    },
    phrases:[
      {en:"I wish my neighbour would turn the music down.", pron:"ай виш май нэйбор вүд төрн зэ мьюзик даун.", mn:"Хөрш маань хөгжмөө намдаагаасай."},
      {en:"If only you would stop interrupting me.", pron:"иф онли ю вүд стоп интэраптинг ми.", mn:"Чи л намайг таслахаа болиосой."},
      {en:"I wish he wouldn't leave his dishes in the sink.", pron:"ай виш хи вүднт лийв хиз дишиз ин зэ синк.", mn:"Тэр тавгаа угаалтуурт орхихгүй байгаасай."},
      {en:"I wish they would clean up after themselves.", pron:"ай виш зэй вүд клийн ап афтэр зэмсэлвз.", mn:"Тэд өөрсдийнхөө араас цэвэрлэдэг болоосой."},
      {en:"If only she would arrive on time for once.", pron:"иф онли ши вүд эрайв он тайм фор ванс.", mn:"Тэр ганц удаа цагтаа ирээсэй."}
    ],
    exercises:[
      {q:"wish + would:", parts:["I wish you ", " shouting."], opts:["would stop","will stop"], a:0, fix:"wish + WOULD, will ✗."},
      {q:"Сөрөг зуршил:", parts:["I wish he ", " his socks on the floor."], opts:["wouldn't leave","won't leave"], a:0, fix:"wish + WOULDN'T leave."},
      {q:"if only:", parts:["If only they ", " so much noise."], opts:["wouldn't make","don't make"], a:0, fix:"If only + WOULDN'T."},
      {q:"Өөрийн байдал:", parts:["I wish I ", " a quieter flat."], opts:["had","would have"], a:0, fix:"өөртэйгээ → wish + past (had)."}
    ],
    speak:{ scene:'Хөршдөө гомдоллох', turns:[
      {ruby:"You look annoyed. What's wrong?", pron:"ю лүк энойд. вотс вронг?", mn:"Чи бухимдсан харагдаж байна. Юу болов?",
        choices:[{t:"My neighbour is so loud. I wish he would turn the music down.",best:true,mn:"Хөрш маань их чанга. Хөгжмөө намдаагаасай."},{t:"My neighbour is loud. I wish he will turn the music down.",best:false,fix:"will ✗ → I wish he WOULD turn it down."}]},
      {ruby:"Have you talked to him about it?", pron:"хэв ю токт ту хим эбаут ит?", mn:"Түүнтэй энэ талаар ярьсан уу?",
        choices:[{t:"Not yet. If only he would think about other people!",best:true,mn:"Одоохондоо үгүй. Тэр л бусдыг боддог бол!"},{t:"Not yet. If only he will think about others!",best:false,fix:"If only + WOULD, will ✗."}]},
      {ruby:"Maybe your flatmate can help.", pron:"мэйби ёр флэтмэйт кэн хэлп.", mn:"Магадгүй хамтран амьдрагч чинь тусалж магадгүй.",
        choices:[{t:"Him? I wish he wouldn't leave his mess everywhere either!",best:true,mn:"Тэр үү? Тэр ч бас хогоо хаа сайгүй орхихгүй байгаасай!"},{t:"Him? I wish he won't leave his mess everywhere!",best:false,fix:"won't ✗ → I wish he WOULDN'T leave."}]}
    ]}
  },
  {
    id:'b1m5l4', title:"5.4 Байгаль хамгаалах", level:"B1 · М5",
    blurb:"We plant trees to protect nature — Purpose: to / in order to / so that ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: to / in order to / so that (зорилго)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ямар нэг үйлдлийн <b>зорилгыг</b> илэрхийлэх.<br><br>
        <b>to + V1</b> = хамгийн энгийн:
        <div style="margin:12px 0"><span class="tag">I recycle TO PROTECT the planet. (дэлхийг хамгаалахын тулд)</span></div>
        <b>in order to + V1</b> = илүү албан ёсны:
        <div style="margin:12px 0"><span class="tag">We plant trees IN ORDER TO REDUCE CO2. (нүүрстөрөгч багасгахын тулд)</span></div>
        <b>so that + хүн + can/will</b> = өөр этгээд/үр дүн орсон үед:
        <div style="margin:12px 0"><span class="tag">We build fences SO THAT animals CAN BE safe. (амьтад аюулгүй байхын тулд)</span></div>
        <b>Сөрөг зорилго:</b> in order NOT to / so as NOT to.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        protect /prəˈtekt/ — хамгаалах · wildlife /ˈwaɪldlaɪf/ — зэрлэг ан амьтан · forest /ˈfɒrɪst/ — ой<br>
        endangered /ɪnˈdeɪndʒərd/ — устах аюулд орсон · habitat /ˈhæbɪtæt/ — амьдрах орчин · conservation /ˌkɒnsərˈveɪʃn/ — хамгаалал<br>
        deforestation /ˌdiːfɒrɪˈsteɪʃn/ — ойн хомсдол · biodiversity /ˌbaɪoʊdaɪˈvɜːrsəti/ — биологийн олон янз байдал · species /ˈspiːʃiːz/ — зүйл (амьтны)<br>
        ecosystem /ˈiːkoʊsɪstəm/ — экосистем · preserve /prɪˈzɜːrv/ — хадгалан хамгаалах · restore /rɪˈstɔːr/ — сэргээх<br>
        reserve /rɪˈzɜːrv/ — дархан газар · extinct /ɪkˈstɪŋkt/ — устсан · plant /plɑːnt/ — тарих</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I recycle for protect the planet» ✗ → <b>to protect</b> ✓. «for + үйл үг» зорилгод ✗, зөвхөн «for + нэр үг» (a tool for cutting).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Зорилго = TO + үйл үг. Өөр хүн оролцвол → SO THAT + can».</p>`
    },
    phrases:[
      {en:"We plant trees to protect the soil.", pron:"ви плант трийз ту протэкт зэ сойл.", mn:"Бид хөрсийг хамгаалахын тулд мод тарьдаг."},
      {en:"They built a fence in order to keep the animals safe.", pron:"зэй билт э фэнс ин ордэр ту кийп зэ энимэлз сэйф.", mn:"Тэд амьтдыг аюулгүй байлгахын тулд хашаа барьсан."},
      {en:"We created a reserve so that endangered species can survive.", pron:"ви криэйтид э ризөрв соу зэт индэйнжэрд спийшийз кэн сөрвайв.", mn:"Устах аюулд орсон зүйлүүд амьд үлдэхийн тулд дархан газар байгуулсан."},
      {en:"I switched off the lights so as not to waste energy.", pron:"ай свитчт оф зэ лайтс соу эз нот ту вэйст энэржи.", mn:"Эрчим хүч дэмий үрэхгүйн тулд гэрлээ унтраасан."},
      {en:"People recycle in order to reduce waste.", pron:"пийпл рисайкл ин ордэр ту ридьюс вэйст.", mn:"Хүмүүс хог хаягдлыг багасгахын тулд дахин боловсруулдаг."}
    ],
    exercises:[
      {q:"to + V1:", parts:["We plant trees ", " the air."], opts:["to clean","for clean"], a:0, fix:"зорилго → TO + V1, for ✗."},
      {q:"so that:", parts:["We built a fence so that animals ", " safe."], opts:["can be","be"], a:0, fix:"so that + CAN be."},
      {q:"in order to:", parts:["They act ", " save the forest."], opts:["in order to","in order for"], a:0, fix:"in order TO + V1."},
      {q:"Сөрөг зорилго:", parts:["He whispered so as ", " wake the birds."], opts:["not to","to not"], a:0, fix:"so as NOT TO."}
    ],
    speak:{ scene:'Байгаль хамгаалах аян', turns:[
      {ruby:"Why are you planting all these trees?", pron:"вай а ю плантинг ол зийз трийз?", mn:"Яагаад энэ бүх модыг тарьж байгаа юм бэ?",
        choices:[{t:"We're planting them to protect the soil and clean the air.",best:true,mn:"Хөрсийг хамгаалж, агаарыг цэвэрлэхийн тулд тарьж байна."},{t:"We're planting them for protect the soil.",best:false,fix:"for ✗ → TO protect the soil."}]},
      {ruby:"And what's the new fence for?", pron:"энд вотс зэ нью фэнс фор?", mn:"Шинэ хашаа юунд зориулагдсан бэ?",
        choices:[{t:"We built it so that the animals can stay safe from cars.",best:true,mn:"Амьтад машинаас аюулгүй байхын тулд бариулсан."},{t:"We built it for the animals can stay safe.",best:false,fix:"for ✗ → SO THAT the animals CAN stay safe."}]},
      {ruby:"How can I help the forest?", pron:"хау кэн ай хэлп зэ форэст?", mn:"Би ойд яаж туслах вэ?",
        choices:[{t:"You can join us in order to plant more trees this weekend.",best:true,mn:"Энэ амралтаар илүү олон мод тарихын тулд бидэнтэй нэгдээрэй."},{t:"You can join us for plant more trees.",best:false,fix:"for ✗ → IN ORDER TO plant more trees."}]}
    ]}
  },
  {
    id:'b1m5l5', title:"5.5 Уур амьсгал", level:"B1 · М5",
    blurb:"It's hot, so I stay in — because / since / as / so / therefore ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: because / since / as / so / therefore (шалтгаан ба үр дагавар)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ <b>Шалтгаан</b> ба <b>үр дагаврыг</b> холбох.<br><br>
        <b>because / since / as + шалтгаан:</b>
        <div style="margin:12px 0"><span class="tag">I stayed home BECAUSE it was too hot.</span><span class="tag">SINCE it was hot, I stayed home. (тул — өгүүлбэрийн эхэнд)</span></div>
        <b>so + үр дүн:</b>
        <div style="margin:12px 0"><span class="tag">It was too hot, SO I stayed home.</span></div>
        <b>therefore = албан ёсны «тиймээс»:</b>
        <div style="margin:12px 0"><span class="tag">Emissions rose; THEREFORE, temperatures increased.</span></div>
        <b>because + өгүүлбэр (S+V), because of + нэр үг:</b>
        <div style="margin:12px 0"><span class="tag">because it rained · because of the rain</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        climate /ˈklaɪmət/ — уур амьсгал · warming /ˈwɔːrmɪŋ/ — дулаарал · emission /ɪˈmɪʃn/ — ялгаралт<br>
        greenhouse /ˈɡriːnhaʊs/ — хүлэмжийн · temperature /ˈtemprətʃər/ — температур · drought /draʊt/ — ган<br>
        flood /flʌd/ — үер · carbon /ˈkɑːrbən/ — нүүрстөрөгч · fossil fuel /ˈfɒsl ˈfjuːəl/ — чулуужсан түлш<br>
        renewable /rɪˈnjuːəbl/ — сэргээгдэх · glacier /ˈɡlæsiər/ — мөсөн гол · pollution /pəˈluːʃn/ — бохирдол<br>
        extreme /ɪkˈstriːm/ — эрс (хэт) · atmosphere /ˈætməsfɪr/ — агаар мандал · sea level /siː ˈlevl/ — далайн түвшин</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «because of it was hot» ✗ → <b>because it was hot</b> (S+V) ✓ эсвэл <b>because of the heat</b> (нэр үг) ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «because/since/as = шалтгаан. so/therefore = үр дүн».</p>`
    },
    phrases:[
      {en:"Temperatures are rising because we burn too much fossil fuel.", pron:"тэмпрэчөрз а райзинг бикоз ви бөрн ту мач фосил фьюэл.", mn:"Хэт их түлш шатаадаг тул температур нэмэгдэж байна."},
      {en:"Since the climate is changing, droughts are more common.", pron:"синс зэ клаймэт из чэйнжинг, драутс а мор комэн.", mn:"Уур амьсгал өөрчлөгдөж буй тул ган их болж байна."},
      {en:"The ice is melting, so sea levels are rising.", pron:"зэ айс из мэлтинг, соу сий лэвлз а райзинг.", mn:"Мөс хайлж буй тул далайн түвшин нэмэгдэж байна."},
      {en:"As emissions increase, the planet gets warmer.", pron:"эз имишнз инкрийс, зэ плэнэт гэтс вормэр.", mn:"Ялгарал нэмэгдэхийн хэрээр дэлхий дулаарч байна."},
      {en:"We use renewable energy; therefore, we produce less carbon.", pron:"ви юз ринюэбл энэржи; зэрфор, ви прэдьюс лэс карбэн.", mn:"Сэргээгдэх эрчим хүч ашигладаг тул бид бага нүүрстөрөгч ялгаруулдаг."}
    ],
    exercises:[
      {q:"Шалтгаан:", parts:["I stayed inside ", " it was too hot."], opts:["because","so"], a:0, fix:"шалтгаан → because."},
      {q:"Үр дүн:", parts:["It was too hot, ", " I stayed inside."], opts:["so","because"], a:0, fix:"үр дүн → so."},
      {q:"нэр үгийн өмнө:", parts:["We worry ", " climate change."], opts:["because of","because"], a:0, fix:"нэр үг → because OF."},
      {q:"Албан үр дүн:", parts:["Emissions rose; ", ", temperatures increased."], opts:["therefore","because"], a:0, fix:"үр дүн → therefore."}
    ],
    speak:{ scene:'Уур амьсгалын хичээл', turns:[
      {ruby:"Why is the planet getting warmer?", pron:"вай из зэ плэнэт гэтинг вормэр?", mn:"Дэлхий яагаад дулаарч байна вэ?",
        choices:[{t:"It's getting warmer because we burn too much fossil fuel.",best:true,mn:"Хэт их түлш шатаадаг тул дулаарч байна."},{t:"It's getting warmer because of we burn fossil fuel.",best:false,fix:"S+V → because (of ✗)."}]},
      {ruby:"What happens to the ice?", pron:"вот хэпэнз ту зэ айс?", mn:"Мөс юу болох вэ?",
        choices:[{t:"The ice is melting, so the sea levels are rising fast.",best:true,mn:"Мөс хайлж буй тул далайн түвшин хурдан нэмэгдэж байна."},{t:"The ice is melting, because the sea levels are rising.",best:false,fix:"үр дүн → SO, not because."}]},
      {ruby:"What's the solution?", pron:"вотс зэ сэлюшн?", mn:"Шийдэл нь юу вэ?",
        choices:[{t:"We should use renewable energy; therefore, we'll produce less carbon.",best:true,mn:"Сэргээгдэх эрчим хүч ашиглах хэрэгтэй; тиймээс бага нүүрстөрөгч ялгаруулна."},{t:"We should use renewable energy, because we'll produce less carbon.",best:false,fix:"үр дүн → THEREFORE, not because."}]}
    ]}
  },
  {
    id:'b1m5l6', title:"5.6 Дахин боловсруулах", level:"B1 · М5",
    blurb:"Each bottle, none of the waste — Determiners ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: each / every / all / both / neither / none",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тоо хэмжээ заах тодотгол үгс.<br><br>
        <b>each</b> = тус бүр (2+, дангаарчилсан) · <b>every</b> = бүр (3+, ерөнхий) — хоёул + <b>ганц тоо</b>:
        <div style="margin:12px 0"><span class="tag">EACH bottle IS recycled.</span><span class="tag">EVERY bin IS full.</span></div>
        <b>all</b> = бүгд (+ олон тоо) · <b>both</b> = хоёулаа (+ олон тоо):
        <div style="margin:12px 0"><span class="tag">ALL the bottles ARE glass.</span><span class="tag">BOTH bins ARE full.</span></div>
        <b>neither</b> = аль нь ч биш (2) · <b>none</b> = аль нь ч биш (3+):
        <div style="margin:12px 0"><span class="tag">NEITHER bin is empty.</span><span class="tag">NONE of the bottles are plastic.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        recycle /riːˈsaɪkl/ — дахин боловсруулах · waste /weɪst/ — хог хаягдал · plastic /ˈplæstɪk/ — хуванцар<br>
        bin /bɪn/ — хогийн сав · sort /sɔːrt/ — ангилах · reuse /ˌriːˈjuːz/ — дахин ашиглах<br>
        reduce /rɪˈdjuːs/ — багасгах · landfill /ˈlændfɪl/ — хог булах талбай · packaging /ˈpækɪdʒɪŋ/ — сав баглаа боодол<br>
        container /kənˈteɪnər/ — сав · glass /ɡlɑːs/ — шил · compost /ˈkɒmpɒst/ — органик бордоо<br>
        litter /ˈlɪtər/ — хаясан хог · single-use /ˈsɪŋɡl juːs/ — нэг удаагийн · dispose /dɪˈspoʊz/ — хаях (устгах)</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «every bottles» ✗ → <b>every bottle</b> (ганц тоо) ✓. «none of the bottle» ✗ → <b>none of the bottles</b> (олон тоо) ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «each/every → ганц тоо. both → 2 (олон тоо). none/neither → үгүйсгэл».</p>`
    },
    phrases:[
      {en:"Each bottle must be washed before recycling.", pron:"ийч ботл маст би вошт бифор рисайклинг.", mn:"Сав бүрийг дахин боловсруулахын өмнө угаах ёстой."},
      {en:"Every household should sort its waste.", pron:"эври хаусхолд шүд сорт итс вэйст.", mn:"Өрх бүр хогоо ангилах ёстой."},
      {en:"Both bins are already full.", pron:"боуз бинз а олрэди фүл.", mn:"Хоёр сав аль хэдийн дүүрчихсэн."},
      {en:"Neither container is made of glass.", pron:"найзэр кэнтэйнэр из мэйд ов глас.", mn:"Аль ч сав шилээр хийгдээгүй."},
      {en:"None of the packaging is recyclable.", pron:"нан ов зэ пэкэжинг из рисайклэбл.", mn:"Сав баглааны аль нь ч дахин боловсруулагдахгүй."}
    ],
    exercises:[
      {q:"each + ганц:", parts:["", " bottle is rinsed first."], opts:["Each","All"], a:0, fix:"ганц тоо → Each bottle."},
      {q:"every + ганц:", parts:["Every ", " has a recycling bin."], opts:["house","houses"], a:0, fix:"every + ганц тоо → house."},
      {q:"хоёулаа:", parts:["", " bins are full."], opts:["Both","Neither"], a:0, fix:"2 сав дүүрсэн → Both."},
      {q:"of the + олон:", parts:["", " of the plastic is clean."], opts:["None","No"], a:0, fix:"«of the» өмнө → None."}
    ],
    speak:{ scene:'Хог ангилах', turns:[
      {ruby:"How should I recycle at home?", pron:"хау шүд ай рисайкл эт хоум?", mn:"Гэртээ яаж дахин боловсруулах вэ?",
        choices:[{t:"Every family should sort its waste into different bins.",best:true,mn:"Гэр бүл бүр хогоо өөр өөр саванд ангилах ёстой."},{t:"Every families should sort their waste.",best:false,fix:"every + ганц тоо → family."}]},
      {ruby:"Are these two bins for glass?", pron:"а зийз ту бинз фор глас?", mn:"Энэ хоёр сав шилэнд зориулагдсан уу?",
        choices:[{t:"No, neither bin is for glass. They're both for plastic.",best:true,mn:"Үгүй, аль нь ч шилэнд биш. Хоёул хуванцарт зориулагдсан."},{t:"No, neither bins is for glass.",best:false,fix:"neither + ганц тоо → neither bin."}]},
      {ruby:"Can I recycle all this packaging?", pron:"кэн ай рисайкл ол зис пэкэжинг?", mn:"Энэ бүх савыг дахин боловсруулж болох уу?",
        choices:[{t:"Sorry, none of it is recyclable. It's single-use plastic.",best:true,mn:"Уучлаарай, аль нь ч дахин боловсруулагдахгүй. Нэг удаагийн хуванцар."},{t:"Sorry, no of it is recyclable.",best:false,fix:"«of it» өмнө → NONE of it."}]}
    ]}
  },
  {
    id:'b1m5l7', title:"5.7 Хоол тэжээл", level:"B1 · М5",
    blurb:"a / an / the / zero article ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Articles — a / an / the / артиклгүй",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Артиклийг зөв сонгох.<br><br>
        <b>a / an</b> = анх дурдсан, тодорхойгүй, ганц тоо (an = эгшиг дуу):
        <div style="margin:12px 0"><span class="tag">I ate AN apple and A banana.</span><span class="tag">an hour · a university</span></div>
        <b>the</b> = аль хэдийн мэдэгдэж буй, өвөрмөц:
        <div style="margin:12px 0"><span class="tag">THE apple was sweet. · THE sun</span></div>
        <b>zero (артиклгүй)</b> = ерөнхий олон тоо / uncountable:
        <div style="margin:12px 0"><span class="tag">Vegetables are healthy. · Water is essential.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        diet /ˈdaɪət/ — хооллолт · protein /ˈproʊtiːn/ — уураг · vitamin /ˈvɪtəmɪn/ — витамин<br>
        fibre /ˈfaɪbər/ — эслэг · calorie /ˈkæləri/ — илчлэг · ingredient /ɪnˈɡriːdiənt/ — орц<br>
        organic /ɔːrˈɡænɪk/ — органик · processed /ˈproʊsest/ — боловсруулсан · portion /ˈpɔːrʃn/ — хэмжээ<br>
        nutrient /ˈnjuːtriənt/ — шим тэжээл · dairy /ˈderi/ — сүүн бүтээгдэхүүн · wholegrain /ˈhoʊlɡreɪn/ — бүхэл үрийн<br>
        fresh /freʃ/ — шинэ (хүнс) · meal /miːl/ — хоол (цаг) · snack /snæk/ — зууш</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Vegetables are good for the health» ✗ → <b>for health / for your health</b> ✓. «I eat the breakfast» ✗ → <b>eat breakfast</b> ✓ (хоолны нэр артиклгүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Анх → a/an. Дахин/мэдэгдэж буй → the. Ерөнхий → артиклгүй».</p>`
    },
    phrases:[
      {en:"An apple a day keeps the doctor away.", pron:"эн эпл э дэй кийпс зэ доктор эвэй.", mn:"Өдөрт нэг алим эмчээс хол байлгана."},
      {en:"The breakfast I ate this morning was very healthy.", pron:"зэ брэкфаст ай эйт зис морнинг воз вэри хэлси.", mn:"Өнөө өглөө идсэн хоол маань маш эрүүл байсан."},
      {en:"Vegetables are an important source of fibre.", pron:"вэжтэблз а эн импортэнт сорс ов файбэр.", mn:"Хүнсний ногоо эслэгийн чухал эх үүсвэр."},
      {en:"Water is essential for a balanced diet.", pron:"вотэр из исэншл фор э бэлэнст дайэт.", mn:"Тэнцвэртэй хооллолтод ус зайлшгүй."},
      {en:"I try to eat fresh food instead of processed meals.", pron:"ай трай ту ийт фрэш фүд инстэд ов проусэст мийлз.", mn:"Би боловсруулсан хоолны оронд шинэ хүнс идэхийг хичээдэг."}
    ],
    exercises:[
      {q:"a / an:", parts:["I need ", " hour to cook."], opts:["an","a"], a:0, fix:"эгшиг дуу → an hour."},
      {q:"the (тодорхой):", parts:["", " soup I made yesterday was salty."], opts:["The","A"], a:0, fix:"мэдэгдэж буй → The soup."},
      {q:"Ерөнхий:", parts:["", " is essential for life."], opts:["Water","The water"], a:0, fix:"ерөнхий uncountable → артиклгүй."},
      {q:"Хоолны нэр:", parts:["I never skip ", "."], opts:["breakfast","the breakfast"], a:0, fix:"хоолны нэр → артиклгүй."}
    ],
    speak:{ scene:'Хооллолтын зөвлөгөө', turns:[
      {ruby:"What did you have for lunch?", pron:"вот дид ю хэв фор ланч?", mn:"Өдрийн хоолонд юу идэв?",
        choices:[{t:"I had a salad and an apple. The salad was really fresh.",best:true,mn:"Салат, нэг алим идсэн. Салат нь үнэхээр шинэ байсан."},{t:"I had salad and a apple. Salad was fresh.",best:false,fix:"a salad, AN apple, THE salad."}]},
      {ruby:"Is a vegetarian diet healthy?", pron:"из э вэжитэриэн дайэт хэлси?", mn:"Цагаан хоолтон байх эрүүл үү?",
        choices:[{t:"Yes, vegetables give you a lot of vitamins and fibre.",best:true,mn:"Тийм, хүнсний ногоо их витамин, эслэг өгдөг."},{t:"Yes, the vegetables give you the vitamins.",best:false,fix:"ерөнхий → артиклгүй (the ✗)."}]},
      {ruby:"Any advice for me?", pron:"эни эдвайс фор ми?", mn:"Надад ямар нэг зөвлөгөө байна уу?",
        choices:[{t:"Drink water and avoid processed food. Water is essential.",best:true,mn:"Ус ууж, боловсруулсан хоолноос зайлсхий. Ус зайлшгүй чухал."},{t:"Drink the water and avoid the processed food.",best:false,fix:"ерөнхий uncountable → артиклгүй."}]}
    ]}
  },
  {
    id:'b1m5l8', title:"5.8 Стресс", level:"B1 · М5",
    blurb:"much stress, a few habits — Countable/uncountable + much/many ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Countable/uncountable + much / many / a lot of / (a) few / (a) little",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тоологдох/тоологдохгүй нэр + хэмжээ заах.<br><br>
        <b>many + countable · much + uncountable · a lot of + хоёул:</b>
        <div style="margin:12px 0"><span class="tag">too MUCH stress · too MANY problems · A LOT OF pressure</span></div>
        <b>a few</b> = хэдэн (эерэг, countable) · <b>a little</b> = бага зэрэг (эерэг, uncountable):
        <div style="margin:12px 0"><span class="tag">A FEW friends · A LITTLE time</span></div>
        <b>few / little</b> = бараг байхгүй (сөрөг өнгө):
        <div style="margin:12px 0"><span class="tag">FEW people came. · LITTLE hope left.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        stress /stres/ — стресс · anxiety /æŋˈzaɪəti/ — түгшүүр · pressure /ˈpreʃər/ — дарамт<br>
        relax /rɪˈlæks/ — тайвшрах · cope /koʊp/ — даван туулах · burnout /ˈbɜːrnaʊt/ — сэтгэлзүйн ядаргаа<br>
        tension /ˈtenʃn/ — хурцадмал байдал · overwhelmed /ˌoʊvərˈwelmd/ — дарагдсан · calm /kɑːm/ — тайван<br>
        mindfulness /ˈmaɪndfəlnəs/ — анхаарлын төвлөрөл · breathe /briːð/ — амьсгалах · workload /ˈwɜːrkloʊd/ — ажлын ачаалал<br>
        rest /rest/ — амрах · balance /ˈbæləns/ — тэнцвэр · worry /ˈwʌri/ — санаа зовох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «many stress» ✗ → <b>much stress</b> ✓ (uncountable). «advices / informations» ✗ → <b>advice / information</b> ✓ (олон тоогүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тоологдвол MANY / A FEW. Тоологдохгүй бол MUCH / A LITTLE».</p>`
    },
    phrases:[
      {en:"I have too much stress at work these days.", pron:"ай хэв ту мач стрэс эт вөрк зийз дэйз.", mn:"Сүүлийн үед ажил дээр хэт их стресстэй байна."},
      {en:"There aren't many ways to relax after a long day.", pron:"зэр арнт мэни вэйз ту рилэкс афтэр э лонг дэй.", mn:"Урт өдрийн дараа тайвшрах олон арга байдаггүй."},
      {en:"I get a little anxiety before exams.", pron:"ай гэт э литл энгзайэти бифор игзэмз.", mn:"Шалгалтын өмнө бага зэрэг түгшдэг."},
      {en:"She has a lot of pressure from her boss.", pron:"ши хэз э лот ов прэшөр фром хөр бос.", mn:"Түүнд даргаасаа их дарамт байдаг."},
      {en:"A few deep breaths can help you stay calm.", pron:"э фью дийп брэтс кэн хэлп ю стэй кам.", mn:"Хэдэн гүн амьсгал тайван байхад тусалдаг."}
    ],
    exercises:[
      {q:"much (uncount):", parts:["I don't have ", " free time."], opts:["much","many"], a:0, fix:"time тоологдохгүй → much."},
      {q:"many (count):", parts:["There aren't ", " people here."], opts:["many","much"], a:0, fix:"people тоологдох → many."},
      {q:"a few (count):", parts:["I have ", " friends who help me."], opts:["a few","a little"], a:0, fix:"friends тоологдох → a few."},
      {q:"a little (uncount):", parts:["Can I have ", " advice?"], opts:["a little","a few"], a:0, fix:"advice тоологдохгүй → a little."}
    ],
    speak:{ scene:'Стрессээ ярих', turns:[
      {ruby:"You seem tired. Too much work?", pron:"ю сийм тайэрд. ту мач вөрк?", mn:"Чи ядарсан бололтой. Ажил хэт их үү?",
        choices:[{t:"Yes, I have too much stress and not much free time.",best:true,mn:"Тийм, хэт их стресстэй, чөлөөт цаг бага байна."},{t:"Yes, I have too many stress and not many free time.",best:false,fix:"stress/time uncountable → MUCH."}]},
      {ruby:"How do you cope with it?", pron:"хау ду ю коуп виз ит?", mn:"Үүнийг яаж даван туулдаг вэ?",
        choices:[{t:"I take a few deep breaths and drink a little water.",best:true,mn:"Хэдэн гүн амьсгаа авч, бага зэрэг ус уудаг."},{t:"I take a little deep breaths and drink a few water.",best:false,fix:"breaths → a few; water → a little."}]},
      {ruby:"Any advice for me?", pron:"эни эдвайс фор ми?", mn:"Надад ямар нэг зөвлөгөө өгөх үү?",
        choices:[{t:"I don't have much advice, but try to rest more.",best:true,mn:"Их зөвлөгөө байхгүй ч илүү амрахыг хичээ."},{t:"I don't have many advices, but try to rest.",best:false,fix:"advice uncountable, олон тоогүй → much advice."}]}
    ]}
  },
  {
    id:'b1m5l9', title:"5.9 Зөв зуршил", level:"B1 · М5",
    blurb:"Make me exercise / told me to rest — verb + object + inf/gerund ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: make/let/help + sb + do; want/ask/tell + sb + to do",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хэн нэгнээр юм <b>хийлгэх</b> бүтэц.<br><br>
        <b>make / let + хүн + V1</b> (to-ГҮЙ):
        <div style="margin:12px 0"><span class="tag">My coach MAKES me EXERCISE. · LET me HELP you.</span></div>
        <b>help + хүн + (to) V1</b> (хоёул зөв):
        <div style="margin:12px 0"><span class="tag">She HELPED me QUIT smoking.</span></div>
        <b>want / ask / tell / allow / encourage + хүн + TO + V1:</b>
        <div style="margin:12px 0"><span class="tag">The doctor TOLD me TO REST. · I WANT you TO DRINK more water.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        willpower /ˈwɪlpaʊər/ — хүсэл зориг · motivate /ˈmoʊtɪveɪt/ — урам өгөх · encourage /ɪnˈkɜːrɪdʒ/ — дэмжих<br>
        remind /rɪˈmaɪnd/ — сануулах · quit /kwɪt/ — орхих (муу зуршил) · avoid /əˈvɔɪd/ — зайлсхийх<br>
        discipline /ˈdɪsəplɪn/ — сахилга бат · routine /ruːˈtiːn/ — дэглэм · reward /rɪˈwɔːrd/ — шагнал<br>
        tempt /tempt/ — уруу татах · resist /rɪˈzɪst/ — эсэргүүцэх · consistency /kənˈsɪstənsi/ — тогтвортой байдал<br>
        track /træk/ — хянах (явц) · progress /ˈproʊɡres/ — ахиц · goal /ɡoʊl/ — зорилго</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «make me to exercise» ✗ → <b>make me exercise</b> (to-гүй) ✓. «told me rest» ✗ → <b>told me TO rest</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MAKE/LET/HELP → to-гүй. WANT/ASK/TELL → to + V1».</p>`
    },
    phrases:[
      {en:"My trainer makes me exercise every morning.", pron:"май трэйнэр мэйкс ми эксэрсайз эври морнинг.", mn:"Дасгалжуулагч маань намайг өглөө бүр дасгал хийлгэдэг."},
      {en:"The doctor told me to drink more water.", pron:"зэ доктор толд ми ту дринк мор вотэр.", mn:"Эмч надад илүү их ус уухыг хэлсэн."},
      {en:"My friend helped me quit smoking.", pron:"май фрэнд хэлпт ми квит смоукинг.", mn:"Найз маань тамхиа хаяхад тусалсан."},
      {en:"Let me remind you to take your vitamins.", pron:"лэт ми римайнд ю ту тэйк ёр витэминз.", mn:"Витаминаа уухыг чинь сануулъя."},
      {en:"I want you to build a healthier routine.", pron:"ай вонт ю ту билд э хэлсиэр рутийн.", mn:"Би чамайг эрүүл дэглэм тогтоосой гэж хүсэж байна."}
    ],
    exercises:[
      {q:"make + V1:", parts:["My coach makes me ", " every day."], opts:["exercise","to exercise"], a:0, fix:"make + хүн + V1 (to-гүй)."},
      {q:"tell + to:", parts:["The doctor told me ", " more."], opts:["to rest","rest"], a:0, fix:"tell + хүн + TO + V1."},
      {q:"let + V1:", parts:["Let me ", " you with that."], opts:["help","to help"], a:0, fix:"let + хүн + V1 (to-гүй)."},
      {q:"want + to:", parts:["I want you ", " more water."], opts:["to drink","drink"], a:0, fix:"want + хүн + TO + V1."}
    ],
    speak:{ scene:'Зөв зуршил тогтоох', turns:[
      {ruby:"How did you get so fit?", pron:"хау дид ю гэт соу фит?", mn:"Чи яаж ийм чийрэг болов?",
        choices:[{t:"My trainer makes me exercise every morning.",best:true,mn:"Дасгалжуулагч маань намайг өглөө бүр дасгал хийлгэдэг."},{t:"My trainer makes me to exercise every morning.",best:false,fix:"make + V1 (to-гүй) → makes me exercise."}]},
      {ruby:"Did the doctor give you any advice?", pron:"дид зэ доктор гив ю эни эдвайс?", mn:"Эмч чамд зөвлөгөө өгсөн үү?",
        choices:[{t:"Yes, she told me to drink more water and rest.",best:true,mn:"Тийм, надад илүү ус ууж, амрахыг хэлсэн."},{t:"Yes, she told me drink more water.",best:false,fix:"tell + TO → told me TO drink."}]},
      {ruby:"I want to quit smoking too.", pron:"ай вонт ту квит смоукинг ту.", mn:"Би ч бас тамхиа хаямаар байна.",
        choices:[{t:"I can help you quit. Let me remind you every day!",best:true,mn:"Хаяхад чинь тусалж чадна. Өдөр бүр сануулъя!"},{t:"I can help you quit. Let me to remind you every day!",best:false,fix:"let + V1 (to-гүй) → Let me REMIND you."}]}
    ]}
  },
  {
    id:'b1m5l10', title:"5.10 Модулийн шалгалт", level:"B1 · М5",
    blurb:"🏆 Эрүүл, ногоон амьдралын тухай өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 5-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 5-ийн мэдлэгээ нэгтгэж, эрүүл мэнд ба байгаль орчны сэдвээр жинхэнэ B1 өгүүлэмж бүтээх.<br><br>
        <b>Модуль 5-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">You SHOULD HAVE seen a doctor ⭐⭐⭐</span><span class="tag">If I HAD slept, I WOULD FEEL better now ⭐⭐⭐</span><span class="tag">I WISH you WOULD recycle ⭐⭐⭐</span><span class="tag">We plant trees TO protect nature ⭐⭐</span><span class="tag">It's hot, SO seas rise / THEREFORE ⭐⭐</span><span class="tag">EVERY bottle · NONE of the waste ⭐⭐</span><span class="tag">a / an / the / zero article ⭐⭐</span><span class="tag">MUCH stress · A FEW habits ⭐⭐</span><span class="tag">The doctor TOLD me TO rest ⭐⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Эрүүл, ногоон амьдрал (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Last year, I decided to live a healthier and greener life. I should have started much earlier! I used to eat a lot of processed food, and I never sorted my waste. If I had known how much stress it caused my body, I would feel much healthier now. Every morning, I drink a little water and eat an apple to give myself energy. I wish my neighbours would recycle too, because none of them separate their plastic. My doctor told me to walk more and to eat less meat, so I take the bus less and cycle instead. Since cars produce a lot of emissions, cycling helps both my health and the planet. I don't have much free time, but a few small habits make a big difference. By next year, I will have planted twenty trees in order to protect our local park. If everyone made small changes, the world would be a cleaner place today!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 өгүүлэмжийн давхарга: <b>Харамсал</b> (should have started) → <b>Нөхцөл</b> (If I had known, I would feel) → <b>Гомдол</b> (I wish they would) → <b>Зорилго & үр дүн</b> (to protect, so, since) → <b>Ирээдүй</b> (will have planted).</p>`
    },
    phrases:[
      {en:"You should have seen a doctor sooner.", pron:"ю шүд хэв сийн э доктор сүнэр.", mn:"Чи эрт эмчид үзүүлэх ёстой байсан."},
      {en:"If I had slept more, I would feel better now.", pron:"иф ай хэд слэпт мор, ай вүд фийл бэтэр нау.", mn:"Илүү унтсан бол одоо сайн байх байсан."},
      {en:"I wish people would recycle their plastic.", pron:"ай виш пийпл вүд рисайкл зэр плэстик.", mn:"Хүмүүс хуванцраа дахин боловсруулдаг болоосой."},
      {en:"We cycle to work in order to reduce emissions.", pron:"ви сайкл ту вөрк ин ордэр ту ридьюс имишнз.", mn:"Ялгарлыг багасгахын тулд ажилдаа дугуйгаар явдаг."},
      {en:"The doctor told me to eat less processed food.", pron:"зэ доктор толд ми ту ийт лэс проусэст фүд.", mn:"Эмч надад боловсруулсан хоол бага идэхийг хэлсэн."}
    ],
    exercises:[
      {q:"Давтлага (Past modal):", parts:["You're ill. You ", " a doctor."], opts:["should have seen","should saw"], a:0, fix:"should HAVE + V3 → seen."},
      {q:"Давтлага (Mixed cond):", parts:["If I had rested, I ", " fine now."], opts:["would feel","would have felt"], a:0, fix:"«now» → would feel."},
      {q:"Давтлага (wish+would):", parts:["I wish you ", " your rubbish."], opts:["would sort","will sort"], a:0, fix:"wish + WOULD, will ✗."},
      {q:"Давтлага (tell+to):", parts:["The doctor told me ", " more water."], opts:["to drink","drink"], a:0, fix:"tell + хүн + TO + V1."}
    ],
    speak:{ scene:'🏆 Төсөл: Эрүүл, ногоон амьдрал', turns:[
      {ruby:"Tell me how you changed your lifestyle.", pron:"тэл ми хау ю чэйнжд ёр лайфстайл.", mn:"Амьдралын хэв маягаа хэрхэн өөрчилснөө яриач.",
        choices:[{t:"Last year I decided to get healthier. I should have started earlier, though!",best:true,mn:"Өнгөрсөн жил эрүүл болохоор шийдсэн. Гэхдээ эрт эхлэх ёстой байсан!"},{t:"Last year I decided to get healthier. I should started earlier!",best:false,fix:"should → should HAVE STARTED (V3)."}]},
      {ruby:"What's the hardest part?", pron:"вотс зэ хардэст парт?", mn:"Хамгийн хэцүү нь юу вэ?",
        choices:[{t:"My neighbours. I wish they would recycle, but none of them sort their plastic.",best:true,mn:"Хөршүүд маань. Дахин боловсруулдаг болоосой, гэтэл нэг нь ч хуванцраа ангилдаггүй."},{t:"My neighbours. I wish they will recycle, but no of them sort plastic.",best:false,fix:"I wish they WOULD; NONE OF them."}]},
      {ruby:"What are your plans now?", pron:"вот а ёр плэнз нау?", mn:"Одоо ямар төлөвлөгөөтэй байна?",
        choices:[{t:"The doctor told me to cycle more, so by next year I'll have planted twenty trees to help the planet.",best:true,mn:"Эмч илүү дугуй унахыг хэлсэн, тиймээс ирэх жил гэхэд дэлхийд туслахаар 20 мод тарьчихсан байна."},{t:"The doctor told me cycle more, so next year I plant twenty trees.",best:false,fix:"told me TO cycle; I'LL HAVE PLANTED."}]}
    ]}
  },
  {
    id:'b1m6l1', title:"6.1 Аялал төлөвлөх", level:"B1 · М6",
    blurb:"I've just booked / already packed / not yet / still — Present Perfect ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect + just / already / yet / still",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Аялал төлөвлөх үед <b>сая, аль хэдийн, хараахан үгүй, одоо ч хэвээр</b> гэдгийг Present Perfect-ээр илэрхийлэх.<br><br>
        <b>have/has + V3, дунд нь тэмдэг үг:</b>
        <div style="margin:12px 0"><span class="tag">I've JUST booked the flight. (сая захиалсан)</span><span class="tag">She has ALREADY packed her bag. (аль хэдийн)</span></div>
        <b>yet — асуулт ба үгүйсгэлд, өгүүлбэрийн ТӨГСГӨЛД:</b>
        <div style="margin:12px 0"><span class="tag">Have you booked the hotel YET?</span><span class="tag">We haven't checked in YET.</span></div>
        <b>still — үйлдэл ОДОО Ч болоогүй, үгүйсгэлээс ӨМНӨ:</b>
        <div style="margin:12px 0"><span class="tag">I STILL haven't got my visa. (одоо ч аваагүй)</span></div>
        <b>just/already — have ба V3-ийн ДУНД:</b>
        <div style="margin:12px 0"><span class="tag">The train has just left. (сая явчихлаа)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        book /bʊk/ — захиалах · flight /flaɪt/ — нислэг · itinerary /aɪˈtɪnəreri/ — аяллын хуваарь<br>
        passport /ˈpæspɔːrt/ — гадаад паспорт · visa /ˈviːzə/ — виз · luggage /ˈlʌɡɪdʒ/ — ачаа тээш<br>
        pack /pæk/ — ачаа боох · destination /ˌdestɪˈneɪʃn/ — очих газар · departure /dɪˈpɑːrtʃər/ — хөдлөлт<br>
        boarding pass /ˈbɔːrdɪŋ pæs/ — суудлын тасалбар · check in /tʃek ɪn/ — бүртгүүлэх · reservation /ˌrezərˈveɪʃn/ — захиалга<br>
        one-way /ˌwʌn ˈweɪ/ — нэг талын · round trip /ˌraʊnd ˈtrɪp/ — хоёр талын · budget /ˈbʌdʒɪt/ — төсөв</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I already booked» ✗ (энгийн өнгөрсөн) → «I've ALREADY booked» ✓. Мөн «Have you booked already?» асуултад ихэвчлэн <b>yet</b> ✓, «yet»-ийг өгүүлбэрийн төгсгөлд тавина.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «JUST/ALREADY дунд ордог, YET төгсгөлд, STILL үгүйсгэлээс өмнө» — J-A дунд, Y төгсгөл, S-not.</p>`
    },
    phrases:[
      {en:"I've just booked our flight to Rome.", pron:"айв жаст букт ауэр флайт ту Роум.", mn:"Ромруу нислэгээ сая захиалчихлаа."},
      {en:"She has already packed her luggage.", pron:"ши хэз олрэди пэкт хөр лагиж.", mn:"Тэр ачаагаа аль хэдийн боочихсон."},
      {en:"Have you checked in online yet?", pron:"хэв ю чэкт ин онлайн йэт?", mn:"Онлайнаар бүртгүүлж амжсан уу?"},
      {en:"We still haven't got our visas.", pron:"ви стил хэвнт гот ауэр визэз.", mn:"Бид одоо ч визээ аваагүй байна."},
      {en:"The train has just left the platform.", pron:"зэ трэйн хэз жаст лэфт зэ плэтформ.", mn:"Галт тэрэг сая буудлаас хөдөлчихлаа."}
    ],
    exercises:[
      {q:"just байрлал:", parts:["I've ", " booked the hotel."], opts:["just","yet"], a:0, fix:"«сая» → have JUST + V3. yet төгсгөлд ордог."},
      {q:"yet:", parts:["Have you packed ", "?"], opts:["yet","already"], a:0, fix:"Асуулт + төгсгөл → yet."},
      {q:"still байрлал:", parts:["I ", " haven't got my visa."], opts:["still","yet"], a:0, fix:"«одоо ч» → still + haven't (үгүйсгэлээс өмнө)."},
      {q:"Аль зөв:", parts:["She has ", " left for the airport."], opts:["already","yet"], a:0, fix:"Батлах өгүүлбэр → already (yet ✗)."}
    ],
    speak:{ scene:'Аяллаа төлөвлөх', turns:[
      {ruby:"Have you booked the flights yet?", pron:"хэв ю букт зэ флайтс йэт?", mn:"Нислэгээ захиалчихсан уу?",
        choices:[{t:"Yes, I've just booked them this morning!",best:true,mn:"Тийм, өнөө өглөө сая захиалчихлаа!"},{t:"Yes, I book them this morning.",best:false,fix:"«сая захиалсан» → I'VE JUST BOOKED."}]},
      {ruby:"Great! Have you packed already?", pron:"грэйт! хэв ю пэкт олрэди?", mn:"Гоё! Ачаагаа боочихсон уу?",
        choices:[{t:"I've already packed one bag, but I still haven't finished.",best:true,mn:"Нэг цүнхээ аль хэдийн боочихсон, гэхдээ одоо ч дуусгаагүй."},{t:"I already pack one bag, but I don't finish yet.",best:false,fix:"I'VE ALREADY PACKED... I STILL HAVEN'T FINISHED."}]},
      {ruby:"Do we need visas for this trip?", pron:"ду ви нийд визэз фор зис трип?", mn:"Энэ аялалд виз хэрэгтэй юу?",
        choices:[{t:"Yes, but we haven't applied for them yet.",best:true,mn:"Тийм, гэхдээ бид хараахан хүсэлт гаргаагүй байна."},{t:"Yes, but we don't apply for them yet.",best:false,fix:"Present Perfect + yet → WE HAVEN'T APPLIED... YET."}]}
    ]}
  },
  {
    id:'b1m6l2', title:"6.2 Туршлага", level:"B1 · М6",
    blurb:"I've lived here for/since… vs I went there two years ago ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Present Perfect (for/since) vs Past Simple (ago)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Аяллын туршлагыг ярихдаа <b>үргэлжилсэн (одоо ч)</b> vs <b>дууссан (өнгөрсөн)</b> хугацааг ялгах.<br><br>
        <b>Present Perfect + for/since = одоо хүртэл үргэлжилнэ:</b>
        <div style="margin:12px 0"><span class="tag">I've lived in Ulaanbaatar FOR ten years. (хугацааны урт)</span><span class="tag">I've known her SINCE 2015. (эхлэх цэг)</span></div>
        <b>for = хэдэн удаан · since = хэзээнээс:</b>
        <div style="margin:12px 0"><span class="tag">for three days · for a week · for years</span><span class="tag">since Monday · since I was a child · since June</span></div>
        <b>Past Simple + ago = дууссан, тодорхой өнгөрсөн:</b>
        <div style="margin:12px 0"><span class="tag">I visited Paris two years AGO. (одоо тэнд байхгүй)</span><span class="tag">We arrived a week ago.</span></div>
        <b>Харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">I've been here for three days. (одоо ч энд байна)</span><span class="tag">I came here three days ago. (ирсэн үйлдэл дуусчихсан)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        experience /ɪkˈspɪriəns/ — туршлага · abroad /əˈbrɔːd/ — гадаадад · journey /ˈdʒɜːrni/ — аялал (зам)<br>
        adventure /ədˈventʃər/ — адал явдал · explore /ɪkˈsplɔːr/ — судлан үзэх · backpacker /ˈbækpækər/ — үүргэвчтэй жуулчин<br>
        homesick /ˈhoʊmsɪk/ — нутгаа санах · settle /ˈsetl/ — суурьших · local /ˈloʊkl/ — нутгийн хүн<br>
        foreigner /ˈfɔːrənər/ — гадаадын хүн · culture shock /ˈkʌltʃər ʃɑːk/ — соёлын шок · sightseeing /ˈsaɪtsiːɪŋ/ — үзвэр үзэх<br>
        souvenir /ˌsuːvəˈnɪr/ — дурсгалын зүйл · guidebook /ˈɡaɪdbʊk/ — аяллын гарын авлага · trip /trɪp/ — аялал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I live here since 2015» ✗ → «I've LIVED here since 2015» ✓ (since + Present Perfect). Мөн «I've been to Paris two years ago» ✗ → «I WENT to Paris two years ago» ✓ (ago + Past Simple).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «AGO = өнгөрсөн цаг · FOR/SINCE = have V3». ago-г Present Perfect-тэй ХЭЗЭЭ Ч бүү холь.</p>`
    },
    phrases:[
      {en:"I've lived abroad for five years.", pron:"айв ливд эброд фор файв йирз.", mn:"Би таван жил гадаадад амьдарсан (одоо ч)."},
      {en:"She has studied here since 2020.", pron:"ши хэз стадид хийр синс твэнти твэнти.", mn:"Тэр 2020 оноос хойш энд суралцаж байгаа."},
      {en:"We visited Japan three years ago.", pron:"ви визитид Жэпэн срий йирз эгоу.", mn:"Бид Японд гурван жилийн өмнө очсон."},
      {en:"How long have you been on this journey?", pron:"хау лонг хэв ю бийн он зис жөрни?", mn:"Энэ аялалд хэдий удаж байна вэ?"},
      {en:"I felt homesick when I first went abroad.", pron:"ай фэлт хоумсик вэн ай фөрст вэнт эброд.", mn:"Анх гадаад явахад нутгаа санасан."}
    ],
    exercises:[
      {q:"since + цаг:", parts:["I ", " here since June."], opts:["'ve lived","lived"], a:0, fix:"since → Present Perfect: I'VE LIVED."},
      {q:"ago + цаг:", parts:["We ", " Rome two years ago."], opts:["visited","'ve visited"], a:0, fix:"ago → Past Simple: VISITED."},
      {q:"for/since:", parts:["I've known him ", " ten years."], opts:["for","since"], a:0, fix:"хугацааны урт → for. эхлэх цэг → since."},
      {q:"Аль зөв:", parts:["She's been abroad ", " last winter."], opts:["since","for"], a:0, fix:"«last winter» = эхлэх цэг → since."}
    ],
    speak:{ scene:'Аяллын туршлага хуваалцах', turns:[
      {ruby:"How long have you lived in this city?", pron:"хау лонг хэв ю ливд ин зис сити?", mn:"Энэ хотод хэдий удаж амьдарч байна?",
        choices:[{t:"I've lived here for about eight years now.",best:true,mn:"Одоогоор наймаад жил амьдарч байна."},{t:"I live here since eight years.",best:false,fix:"Present Perfect + for → I'VE LIVED HERE FOR eight years."}]},
      {ruby:"Have you travelled abroad before?", pron:"хэв ю трэвлд эброд бифор?", mn:"Урьд нь гадаад явж байсан уу?",
        choices:[{t:"Yes, I went to Vietnam two years ago. It was amazing.",best:true,mn:"Тийм, хоёр жилийн өмнө Вьетнам явсан. Гайхалтай байсан."},{t:"Yes, I've been to Vietnam two years ago.",best:false,fix:"ago + Past Simple → I WENT to Vietnam two years ago."}]},
      {ruby:"Did you feel any culture shock?", pron:"дид ю фийл эни калчер шок?", mn:"Соёлын шок мэдэрсэн үү?",
        choices:[{t:"A little at first, but I've felt at home since last month.",best:true,mn:"Эхэндээ бага зэрэг, гэхдээ өнгөрсөн сараас хойш дасчихсан."},{t:"A little, but I feel at home since last month.",best:false,fix:"since → I'VE FELT at home since last month."}]}
    ]}
  },
  {
    id:'b1m6l3', title:"6.3 Орон нутаг", level:"B1 · М6",
    blurb:"much bigger / far more beautiful / not as busy as ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Comparatives & superlatives + (not) as…as + modifiers",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Орон нутаг, хотуудыг харьцуулж <b>илүү / хамгийн / …шиг</b> гэж хэлэх, зэргийг <b>хүчтэй/сул</b>жуулах.<br><br>
        <b>Харьцуулах зэрэг:</b>
        <div style="margin:12px 0"><span class="tag">The countryside is quieter than the city. (богино нэмэлт үг + -er)</span><span class="tag">Tokyo is more expensive than Seoul. (урт үг → more)</span></div>
        <b>Хамгийн (superlative) — the + -est / most:</b>
        <div style="margin:12px 0"><span class="tag">It's the highest mountain in Mongolia.</span><span class="tag">This is the most beautiful lake I know.</span></div>
        <b>(not) as … as = ижил/ижил биш:</b>
        <div style="margin:12px 0"><span class="tag">The village isn't as busy AS the capital.</span><span class="tag">It's as cheap AS I expected.</span></div>
        <b>Зэрэг хүчжүүлэх/сулруулах — much / far / a bit / a little:</b>
        <div style="margin:12px 0"><span class="tag">Winter here is MUCH colder. (илүү их)</span><span class="tag">The south is FAR warmer. (маш их)</span><span class="tag">It's A BIT more crowded today. (жаахан)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        countryside /ˈkʌntrisaɪd/ — хөдөө · capital /ˈkæpɪtl/ — нийслэл · region /ˈriːdʒən/ — бүс нутаг<br>
        village /ˈvɪlɪdʒ/ — тосгон · scenery /ˈsiːnəri/ — байгалийн үзэмж · landscape /ˈlændskeɪp/ — газар нутгийн дүр<br>
        crowded /ˈkraʊdɪd/ — хүн ихтэй · peaceful /ˈpiːsfl/ — амар тайван · remote /rɪˈmoʊt/ — алслагдсан<br>
        modern /ˈmɑːdərn/ — орчин үеийн · traditional /trəˈdɪʃənl/ — уламжлалт · population /ˌpɑːpjuˈleɪʃn/ — хүн ам<br>
        climate /ˈklaɪmət/ — уур амьсгал · valley /ˈvæli/ — хөндий · coast /koʊst/ — эрэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «more cheaper» ✗ (давхар харьцуулалт) → «cheaper» ✓. Мөн «as busy than» ✗ → «as busy AS» ✓. «very bigger» ✗ → «MUCH bigger» ✓ (much/far ашигла).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «богино үг + -er/-est · урт үг + more/most · хоёуланг зэрэг бүү хэрэглэ. as…AS хоёр талтай.»</p>`
    },
    phrases:[
      {en:"The countryside is much quieter than the city.", pron:"зэ кантрисайд из мач квайэтэр зэн зэ сити.", mn:"Хөдөө хотоос хамаагүй нам гүм."},
      {en:"This is the most beautiful valley in the region.", pron:"зис из зэ моуст бьютифул вэли ин зэ рийжэн.", mn:"Энэ бол бүс нутгийн хамгийн үзэсгэлэнтэй хөндий."},
      {en:"The village isn't as crowded as the capital.", pron:"зэ вилиж изнт эз краудид эз зэ кэпитл.", mn:"Тосгон нийслэл шиг хүн ихтэй биш."},
      {en:"The south is far warmer in winter.", pron:"зэ саут из фар вормэр ин винтэр.", mn:"Урд зүг өвөл хамаагүй дулаан."},
      {en:"It's a bit more expensive here than at home.", pron:"итс э бит мор экспэнсив хийр зэн эт хоум.", mn:"Энд гэрийнхээс жаахан үнэтэй."}
    ],
    exercises:[
      {q:"Харьцуулах:", parts:["The city is ", " than the village."], opts:["busier","more busy"], a:0, fix:"Богино үг → busier (more busy ✗)."},
      {q:"as…as:", parts:["It's not as peaceful ", " the countryside."], opts:["as","than"], a:0, fix:"as … AS (than ✗)."},
      {q:"Хүчжүүлэгч:", parts:["Winter here is ", " colder."], opts:["much","very"], a:0, fix:"Харьцуулалтыг хүчжүүлэх → much/far (very ✗)."},
      {q:"Superlative:", parts:["It's the ", " lake in the country."], opts:["deepest","most deep"], a:0, fix:"Богино үг → the deepest."}
    ],
    speak:{ scene:'Хотоо танилцуулах', turns:[
      {ruby:"How is your hometown compared to the capital?", pron:"хау из ёр хоумтаун кэмпэрд ту зэ кэпитл?", mn:"Төрсөн нутаг тань нийслэлтэй харьцуулахад ямар вэ?",
        choices:[{t:"It's much smaller and far more peaceful.",best:true,mn:"Хамаагүй жижиг, хавьгүй амар тайван."},{t:"It's more smaller and very peaceful than there.",best:false,fix:"more smaller ✗ → MUCH SMALLER, FAR MORE peaceful."}]},
      {ruby:"Is it as expensive as the city?", pron:"из ит эз экспэнсив эз зэ сити?", mn:"Хот шиг үнэтэй юу?",
        choices:[{t:"No, it isn't as expensive as the capital.",best:true,mn:"Үгүй, нийслэл шиг үнэтэй биш."},{t:"No, it isn't as expensive than the capital.",best:false,fix:"as … AS (than ✗) → as expensive AS."}]},
      {ruby:"What's the best thing about it?", pron:"вотс зэ бэст синг эбаут ит?", mn:"Хамгийн сайн тал нь юу вэ?",
        choices:[{t:"It has the most beautiful scenery in the whole region.",best:true,mn:"Бүс нутгийн хамгийн үзэсгэлэнтэй үзэмжтэй."},{t:"It has the most beautifulest scenery in the region.",best:false,fix:"most beautifulest ✗ → THE MOST BEAUTIFUL scenery."}]}
    ]}
  },
  {
    id:'b1m6l4', title:"6.4 Дурсамж", level:"B1 · М6",
    blurb:"the best trip I've ever taken — Superlative + Present Perfect ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Superlative + Present Perfect (ever)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Аяллын дурсамжаа онцолж <b>«миний хэзээ ч үзсэн хамгийн …»</b> гэж хэлэх.<br><br>
        <b>Загвар: the + superlative + (noun) + I've ever + V3:</b>
        <div style="margin:12px 0"><span class="tag">It's THE BEST trip I've EVER taken.</span><span class="tag">She's THE KINDEST person I've EVER met.</span></div>
        <b>ever = «хэзээ нэгэн цагт хийж байсан бүхнээс»:</b>
        <div style="margin:12px 0"><span class="tag">This is the most amazing view I've ever seen.</span><span class="tag">That was the worst meal we've ever had.</span></div>
        <b>«one of the + superlative + олон тоо»:</b>
        <div style="margin:12px 0"><span class="tag">It's ONE OF THE most famous templeS I've ever visited.</span></div>
        <b>Одоо цагийн туршлага тул Present Perfect — Past ✗:</b>
        <div style="margin:12px 0"><span class="tag">It's the best I've ever eaten. (I ever ate ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        memory /ˈmeməri/ — дурсамж · unforgettable /ˌʌnfərˈɡetəbl/ — мартагдашгүй · breathtaking /ˈbreθteɪkɪŋ/ — амьсгал давчдам<br>
        stunning /ˈstʌnɪŋ/ — гайхамшигтай · view /vjuː/ — үзэмж · landmark /ˈlændmɑːrk/ — дурсгалт газар<br>
        temple /ˈtempl/ — сүм · palace /ˈpæləs/ — ордон · monument /ˈmɑːnjumənt/ — хөшөө дурсгал<br>
        ancient /ˈeɪnʃənt/ — эртний · impressive /ɪmˈpresɪv/ — гайхагдам · highlight /ˈhaɪlaɪt/ — тод дурсамж<br>
        festival /ˈfestɪvl/ — наадам · ceremony /ˈserəmoʊni/ — ёслол · treasure /ˈtreʒər/ — эрдэнэс</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the best trip I ever took» ✗ → «the best trip I've EVER TAKEN» ✓ (Present Perfect). Мөн «one of the best temple» ✗ → «one of the best templeS» ✓ (олон тоо).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «THE BEST … I'VE EVER + V3» — хамгийн + amьдралын туршлага = have V3, ever дунд.</p>`
    },
    phrases:[
      {en:"That was the best trip I've ever taken.", pron:"зэт воз зэ бэст трип айв эвэр тэйкэн.", mn:"Энэ бол миний хийсэн хамгийн сайхан аялал байлаа."},
      {en:"It's the most breathtaking view I've ever seen.", pron:"итс зэ моуст брэстэйкинг вью айв эвэр сийн.", mn:"Миний харсан хамгийн амьсгал давчдам үзэмж."},
      {en:"She's the kindest local I've ever met.", pron:"шиз зэ кайндэст лоукл айв эвэр мэт.", mn:"Миний уулзсан хамгийн эелдэг нутгийн хүн."},
      {en:"It's one of the oldest temples I've ever visited.", pron:"итс ван оф зэ оулдэст тэмплз айв эвэр визитид.", mn:"Миний үзсэн хамгийн эртний сүмүүдийн нэг."},
      {en:"That festival was an unforgettable memory.", pron:"зэт фэстивл воз эн анфөргэтэбл мэмори.", mn:"Тэр наадам мартагдашгүй дурсамж болсон."}
    ],
    exercises:[
      {q:"Present Perfect:", parts:["It's the best meal I've ", " had."], opts:["ever","never"], a:0, fix:"«хэзээ ч …хамгийн» → ever."},
      {q:"Цаг:", parts:["That's the most amazing place I've ever ", "."], opts:["seen","saw"], a:0, fix:"I've ever + V3 → seen (saw ✗)."},
      {q:"one of the:", parts:["It's one of the oldest ", " here."], opts:["temples","temple"], a:0, fix:"one of the + олон тоо → temples."},
      {q:"Аль зөв:", parts:["This is the ", " view in the country."], opts:["most stunning","stunningest"], a:0, fix:"Урт үг → most stunning."}
    ],
    speak:{ scene:'Дурсамжаа ярих', turns:[
      {ruby:"What's your favourite travel memory?", pron:"вотс ёр фэйврит трэвл мэмори?", mn:"Хамгийн дуртай аяллын дурсамж чинь юу вэ?",
        choices:[{t:"Seeing the sunrise over the mountains — the best view I've ever seen.",best:true,mn:"Уулсын дээгүүр нар мандахыг үзсэн нь — миний харсан хамгийн сайхан үзэмж."},{t:"The sunrise. It's the best view I ever saw.",best:false,fix:"Present Perfect → the best view I'VE EVER SEEN."}]},
      {ruby:"Was the temple worth visiting?", pron:"воз зэ тэмпл вөрс визитинг?", mn:"Сүмд очих нь үнэ цэнтэй байсан уу?",
        choices:[{t:"Absolutely. It's one of the most impressive places I've ever been.",best:true,mn:"Мэдээж. Миний очсон хамгийн гайхагдам газруудын нэг."},{t:"Yes. It's one of the most impressive place I ever went.",best:false,fix:"one of the + PLACES, I'VE EVER BEEN."}]},
      {ruby:"Would you go back?", pron:"вүд ю гоу бэк?", mn:"Дахин очих уу?",
        choices:[{t:"Definitely. It was the most unforgettable trip I've ever taken.",best:true,mn:"Гарцаагүй. Миний хийсэн хамгийн мартагдашгүй аялал байлаа."},{t:"Definitely. It was the unforgettablest trip I took.",best:false,fix:"the MOST UNFORGETTABLE trip I'VE EVER TAKEN."}]}
    ]}
  },
  {
    id:'b1m6l5', title:"6.5 Хот үзэх", level:"B1 · М6",
    blurb:"something / anywhere / nobody — indefinite compounds ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: something / anything / nothing · somewhere · somebody гэх мэт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хот үзэхдээ <b>ямар нэг юм / хаа нэг газар / хэн нэгэн</b> гэж тодорхойгүй зүйлийг хэлэх.<br><br>
        <b>some- = батлах өгүүлбэрт:</b>
        <div style="margin:12px 0"><span class="tag">I'd like to buy SOMETHING for my family.</span><span class="tag">Let's go SOMEWHERE quiet.</span><span class="tag">SOMEBODY left a bag here.</span></div>
        <b>any- = асуулт ба үгүйсгэлд:</b>
        <div style="margin:12px 0"><span class="tag">Is there ANYTHING to see near here?</span><span class="tag">I can't find my map ANYWHERE.</span><span class="tag">Did ANYBODY take photos?</span></div>
        <b>no- = утга нь үгүйсгэл, үйл үг БАТЛАХ хэлбэртэй:</b>
        <div style="margin:12px 0"><span class="tag">There's NOTHING open at night. (isn't nothing ✗)</span><span class="tag">NOBODY knows the way.</span></div>
        <b>Тэмдэг нэр АРД нь:</b>
        <div style="margin:12px 0"><span class="tag">somewhere CHEAP · something INTERESTING · nothing SPECIAL</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        square /skwer/ — талбай · market /ˈmɑːrkɪt/ — зах · museum /mjuˈziːəm/ — музей<br>
        gallery /ˈɡæləri/ — галерей · cathedral /kəˈθiːdrəl/ — сүм хийд · fountain /ˈfaʊntən/ — усан оргилуур<br>
        neighbourhood /ˈneɪbərhʊd/ — хороолол · downtown /ˌdaʊnˈtaʊn/ — хотын төв · pedestrian /pəˈdestriən/ — явган хүн<br>
        crossing /ˈkrɔːsɪŋ/ — гарц · sidewalk /ˈsaɪdwɔːk/ — явган зам · skyline /ˈskaɪlaɪn/ — тэнгэрийн шугам<br>
        rooftop /ˈruːftɑːp/ — дээвэр · viewpoint /ˈvjuːpɔɪnt/ — харах цэг · nightlife /ˈnaɪtlaɪf/ — шөнийн амьдрал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I don't see nothing» ✗ (давхар үгүйсгэл) → «I don't see ANYTHING» / «I see NOTHING» ✓. Мөн «somewhere cheap» зөв — тэмдэг нэр АРД ордог, «cheap somewhere» ✗.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SOME = батлах · ANY = асуулт/үгүй · NO = үйл үг батлахтай». Давхар үгүйсгэлээс болгоомжил!</p>`
    },
    phrases:[
      {en:"Let's find somewhere nice to eat downtown.", pron:"лэтс файнд самвэр найс ту ийт даунтаун.", mn:"Хотын төвөөс хоол идэх сайхан газар олъё."},
      {en:"Is there anything interesting near the square?", pron:"из зэр энисинг интрэстинг нийр зэ сквэр?", mn:"Талбайн ойролцоо сонирхолтой юм байна уу?"},
      {en:"There's nothing open this late.", pron:"зэрз насинг оупэн зис лэйт.", mn:"Ийм оройтоод нээлттэй юм алга."},
      {en:"Nobody knows the way to the old market.", pron:"ноубоди ноуз зэ вэй ту зэ оулд маркэт.", mn:"Хуучин зах руу орох замыг хэн ч мэдэхгүй."},
      {en:"I bought something special at the gallery.", pron:"ай бот самсинг спэшл эт зэ гэлэри.", mn:"Галерейгаас онцгой юм худалдаж авсан."}
    ],
    exercises:[
      {q:"Асуулт:", parts:["Is there ", " to see here?"], opts:["anything","something"], a:0, fix:"Асуултад → anything."},
      {q:"Үгүйсгэл:", parts:["There's ", " open at night."], opts:["nothing","anything"], a:0, fix:"«There's + үгүй» → nothing (батлах хэлбэр)."},
      {q:"Давхар үгүйсгэл:", parts:["I can't find it ", "."], opts:["anywhere","nowhere"], a:0, fix:"can't + ANYwhere (nowhere ✗ давхар үгүйсгэл)."},
      {q:"Тэмдэг нэр:", parts:["Let's go ", "."], opts:["somewhere quiet","quiet somewhere"], a:0, fix:"Тэмдэг нэр АРД → somewhere quiet."}
    ],
    speak:{ scene:'Хотоор зугаалах', turns:[
      {ruby:"Where should we go this afternoon?", pron:"вэр шуд ви гоу зис афтэрнүн?", mn:"Өнөө үдээс хойш хаашаа явах вэ?",
        choices:[{t:"Let's go somewhere quiet, maybe the old square.",best:true,mn:"Ямар нэг нам гүм газар явъя, магадгүй хуучин талбай руу."},{t:"Let's go quiet somewhere, maybe old square.",best:false,fix:"тэмдэг нэр АРД → SOMEWHERE QUIET."}]},
      {ruby:"Is there anything to buy for souvenirs?", pron:"из зэр энисинг ту бай фор сувэнирз?", mn:"Дурсгалын юм авах юм байна уу?",
        choices:[{t:"Yes, there's something interesting at the market.",best:true,mn:"Тийм, захад сонирхолтой юм байгаа."},{t:"Yes, there's anything interesting at the market.",best:false,fix:"Батлах өгүүлбэр → SOMETHING interesting."}]},
      {ruby:"Did anybody recommend a good café?", pron:"дид энибоди рэкэмэнд э гүд кафэй?", mn:"Хэн нэгэн сайн кафе санал болгосон уу?",
        choices:[{t:"No, nobody has, but let's just explore.",best:true,mn:"Үгүй, хэн ч болоогүй, гэхдээ л судалцгаая."},{t:"No, nobody hasn't, so we don't go anywhere.",best:false,fix:"nobody + БАТЛАХ → NOBODY HAS."}]}
    ]}
  },
  {
    id:'b1m6l6', title:"6.6 Замын заавар", level:"B1 · М6",
    blurb:"If you turn left… / as soon as you arrive… — conditionals & time clauses ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Zero & First Conditional + when/as soon as/until/before",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Замын заавар өгөхдөө <b>нөхцөл</b> ба <b>цагийн залгаас</b> ашиглах.<br><br>
        <b>Zero conditional = үргэлж үнэн (if + present, present):</b>
        <div style="margin:12px 0"><span class="tag">If you TURN left, you SEE the station. (ерөнхий үнэн)</span></div>
        <b>First conditional = ирээдүйн бодит нөхцөл (if + present, will):</b>
        <div style="margin:12px 0"><span class="tag">If you HURRY, you'LL CATCH the bus. (will hurry ✗)</span></div>
        <b>Цагийн залгаас — АРД нь ОДОО цаг (will ✗):</b>
        <div style="margin:12px 0"><span class="tag">WHEN you arrive, call me. (when you will arrive ✗)</span><span class="tag">AS SOON AS you get there, text me.</span><span class="tag">Wait here UNTIL the light turns green.</span><span class="tag">Check the map BEFORE you leave.</span></div>
        <b>Гол өгүүлбэрт will/тушаал, залгаас талд present:</b>
        <div style="margin:12px 0"><span class="tag">I'll wait here until you come back.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        directions /dəˈrekʃnz/ — заавар · straight /streɪt/ — чигээрээ · turn /tɜːrn/ — эргэх<br>
        corner /ˈkɔːrnər/ — булан · junction /ˈdʒʌŋkʃn/ — уулзвар · roundabout /ˈraʊndəbaʊt/ — тойрог<br>
        traffic light /ˈtræfɪk laɪt/ — гэрлэн дохио · crossroads /ˈkrɔːsroʊdz/ — замын уулзвар · lane /leɪn/ — эгнээ<br>
        opposite /ˈɑːpəzɪt/ — эсрэг талд · nearby /ˌnɪrˈbaɪ/ — ойрхон · block /blɑːk/ — квартал<br>
        entrance /ˈentrəns/ — орох хаалга · exit /ˈeksɪt/ — гарц · subway /ˈsʌbweɪ/ — метро</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «When you will arrive, call me» ✗ → «When you ARRIVE, call me» ✓ (цагийн залгаасын ард одоо цаг). Мөн «If you will turn left» ✗ → «If you TURN left» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF/WHEN/AS SOON AS/UNTIL/BEFORE-ийн АРД will ХЭЗЭЭ Ч ОРОХГҮЙ — одоо цаг!»</p>`
    },
    phrases:[
      {en:"If you turn left, you'll see the museum.", pron:"иф ю төрн лэфт, юл сий зэ мьюзиэм.", mn:"Зүүн тийш эргэвэл музейг харна."},
      {en:"Go straight until you reach the roundabout.", pron:"гоу стрэйт антил ю рийч зэ раундэбаут.", mn:"Тойрог хүртэл чигээрээ яв."},
      {en:"Call me as soon as you get there.", pron:"кол ми эз сүн эз ю гэт зэр.", mn:"Тэнд очингуутаа надруу залга."},
      {en:"Check the map before you leave the hotel.", pron:"чэк зэ мэп бифор ю лийв зэ хоутэл.", mn:"Зочид буудлаас гарахаасаа өмнө газрын зургаа шалга."},
      {en:"The entrance is opposite the traffic light.", pron:"зэ энтрэнс из опэзит зэ трэфик лайт.", mn:"Орох хаалга гэрлэн дохионы эсрэг талд байна."}
    ],
    exercises:[
      {q:"First conditional:", parts:["If you hurry, you ", " the bus."], opts:["'ll catch","catch"], a:0, fix:"if + present, → WILL catch."},
      {q:"Цагийн залгаас:", parts:["Call me when you ", "."], opts:["arrive","will arrive"], a:0, fix:"when + одоо цаг → arrive (will ✗)."},
      {q:"until:", parts:["Wait here until the light ", " green."], opts:["turns","will turn"], a:0, fix:"until + одоо цаг → turns."},
      {q:"Аль зөв:", parts:["As soon as you ", " there, text me."], opts:["get","will get"], a:0, fix:"as soon as + present → get."}
    ],
    speak:{ scene:'Зам асуух', turns:[
      {ruby:"Excuse me, how do I get to the museum?", pron:"экскьюз ми, хау ду ай гэт ту зэ мьюзиэм?", mn:"Уучлаарай, музей рүү яаж очих вэ?",
        choices:[{t:"If you turn left at the corner, you'll see it straight ahead.",best:true,mn:"Буланд зүүн тийш эргэвэл шууд урдаа харагдана."},{t:"If you will turn left at the corner, you see it.",best:false,fix:"If you TURN left, you'LL SEE it."}]},
      {ruby:"Is it far from here?", pron:"из ит фар фром хийр?", mn:"Эндээс хол уу?",
        choices:[{t:"No. As soon as you cross the road, you're there.",best:true,mn:"Үгүй. Замыг гарангуут л хүрчихнэ."},{t:"No. As soon as you will cross the road, you're there.",best:false,fix:"as soon as + present → AS SOON AS YOU CROSS."}]},
      {ruby:"Thanks! Should I take the subway?", pron:"сэнкс! шуд ай тэйк зэ сабвэй?", mn:"Баярлалаа! Метро сууж болох уу?",
        choices:[{t:"Only if it rains. Otherwise, just walk until you reach the square.",best:true,mn:"Зөвхөн бороо орвол. Үгүй бол талбай хүртэл алхаад л яв."},{t:"Only if it will rain. Walk until you will reach the square.",best:false,fix:"if it RAINS... until you REACH the square."}]}
    ]}
  },
  {
    id:'b1m6l7', title:"6.7 Сонголт", level:"B1 · М6",
    blurb:"I'd rather fly / I'd prefer to walk / I prefer hiking to driving ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: would rather / would prefer / prefer …ing to …ing",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Аяллын хоёр хувилбараас <b>аль нь дээр вэ</b> гэдгээ эелдгээр илэрхийлэх.<br><br>
        <b>would rather + үндсэн үйл үг (to ✗):</b>
        <div style="margin:12px 0"><span class="tag">I'D RATHER FLY than take the train. (rather to fly ✗)</span><span class="tag">I'd rather not drive at night.</span></div>
        <b>would prefer + TO + үйл үг (тодорхой нэг тохиолдол):</b>
        <div style="margin:12px 0"><span class="tag">I'D PREFER TO WALK today.</span><span class="tag">I'd prefer to stay in a hotel rather than camp.</span></div>
        <b>prefer + …ING + TO + …ING (ерөнхий дуртай):</b>
        <div style="margin:12px 0"><span class="tag">I PREFER HIKING TO DRIVING. (prefer hiking than ✗)</span><span class="tag">She prefers travelling by train to flying.</span></div>
        <b>«than» rather-тай, «to» prefer …ing-тэй:</b>
        <div style="margin:12px 0"><span class="tag">rather X THAN Y · prefer ...ing TO ...ing</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        option /ˈɑːpʃn/ — сонголт · prefer /prɪˈfɜːr/ — илүүд үзэх · choice /tʃɔɪs/ — сонголт<br>
        transport /ˈtrænspɔːrt/ — тээвэр · cruise /kruːz/ — далайн аялал · ferry /ˈferi/ — гатлага онгоц<br>
        hike /haɪk/ — явган аялал · camping /ˈkæmpɪŋ/ — майхан амралт · resort /rɪˈzɔːrt/ — амралтын газар<br>
        guided tour /ˈɡaɪdɪd tʊr/ — хөтөчтэй аялал · self-guided /ˌself ˈɡaɪdɪd/ — бие даасан · comfort /ˈkʌmfərt/ — тав тух<br>
        convenient /kənˈviːniənt/ — тохиромжтой · affordable /əˈfɔːrdəbl/ — боломжийн үнэтэй · flexible /ˈfleksəbl/ — уян хатан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'd rather to fly» ✗ → «I'd rather FLY» ✓ (to байхгүй). «I prefer hiking THAN driving» ✗ → «I prefer hiking TO driving» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «RATHER = үйл үг нүцгэн + THAN · PREFER TO = to + үйл үг · prefer ...ing TO ...ing».</p>`
    },
    phrases:[
      {en:"I'd rather fly than take the overnight train.", pron:"айд рэзэр флай зэн тэйк зэ оувэрнайт трэйн.", mn:"Шөнийн галт тэрэгнээс онгоцоор нисэх нь дээр."},
      {en:"I'd prefer to stay somewhere near the beach.", pron:"айд прифөр ту стэй самвэр нийр зэ бийч.", mn:"Далайн эргийн ойролцоо байх дуртай."},
      {en:"I prefer hiking to driving on holiday.", pron:"ай прифөр хайкинг ту драйвинг он холидэй.", mn:"Амралтаараа жолоо барихаас явган аялах дуртай."},
      {en:"Would you rather take a guided tour?", pron:"вүд ю рэзэр тэйк э гайдид тур?", mn:"Хөтөчтэй аялалд явахыг илүүд үзэх үү?"},
      {en:"I'd rather not camp when it's cold.", pron:"айд рэзэр нот кэмп вэн итс коулд.", mn:"Хүйтэн үед майхан барихгүй байсан нь дээр."}
    ],
    exercises:[
      {q:"would rather:", parts:["I'd rather ", " than drive."], opts:["fly","to fly"], a:0, fix:"would rather + нүцгэн үйл үг → fly (to ✗)."},
      {q:"would prefer:", parts:["I'd prefer ", " in a hotel."], opts:["to stay","staying"], a:0, fix:"would prefer + TO → to stay."},
      {q:"prefer …ing:", parts:["I prefer flying ", " driving."], opts:["to","than"], a:0, fix:"prefer ...ing TO ...ing (than ✗)."},
      {q:"than:", parts:["I'd rather walk ", " take a taxi."], opts:["than","to"], a:0, fix:"would rather X THAN Y."}
    ],
    speak:{ scene:'Аяллын хэлбэр сонгох', turns:[
      {ruby:"Should we fly or take the train?", pron:"шуд ви флай ор тэйк зэ трэйн?", mn:"Онгоцоор нисэх үү, галт тэргээр явах уу?",
        choices:[{t:"I'd rather take the train than fly. It's more relaxing.",best:true,mn:"Онгоцноос галт тэргээр явах нь дээр. Илүү тайван."},{t:"I'd rather to take the train than to fly.",best:false,fix:"would rather + нүцгэн → I'D RATHER TAKE... than FLY."}]},
      {ruby:"Do you like organised tours?", pron:"ду ю лайк оргэнайзд турз?", mn:"Зохион байгуулалттай аялал таалагддаг уу?",
        choices:[{t:"Not really. I prefer exploring on my own to following a guide.",best:true,mn:"Тийм биш. Хөтчийг дагахаас өөрөө судлах дуртай."},{t:"Not really. I prefer exploring than following a guide.",best:false,fix:"prefer ...ing TO ...ing → EXPLORING... TO FOLLOWING."}]},
      {ruby:"Where would you like to stay?", pron:"вэр вүд ю лайк ту стэй?", mn:"Хаана байрлахыг хүсэх вэ?",
        choices:[{t:"I'd prefer to stay somewhere quiet and affordable.",best:true,mn:"Нам гүм, боломжийн үнэтэй газар байхыг илүүд үзнэ."},{t:"I'd prefer staying somewhere quiet than expensive.",best:false,fix:"would prefer + TO → I'D PREFER TO STAY."}]}
    ]}
  },
  {
    id:'b1m6l8', title:"6.8 Зөвлөгөө", level:"B1 · М6",
    blurb:"You'd better book now / It's time we left — advice & urgency ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: had better + It's time + past subjunctive",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Аялагчид <b>яаралтай зөвлөгөө</b> өгөх, «цаг нь болсон» гэж хэлэх.<br><br>
        <b>had better + нүцгэн үйл үг = дор хаяж хийх нь дээр (сануулга):</b>
        <div style="margin:12px 0"><span class="tag">You'D BETTER BOOK now, or it'll sell out. (had better to book ✗)</span><span class="tag">We'd better hurry.</span></div>
        <b>Үгүйсгэл = had better NOT:</b>
        <div style="margin:12px 0"><span class="tag">You'D BETTER NOT MISS the last bus. (better don't ✗)</span></div>
        <b>It's time + ӨНГӨРСӨН цаг (past subjunctive) = аль хэдийн болох цаг нь болсон:</b>
        <div style="margin:12px 0"><span class="tag">It's time we LEFT for the airport. (it's time we leave ✗)</span><span class="tag">It's high time you PACKED your bags.</span></div>
        <b>«It's time TO + үйл үг» ерөнхий, «It's time + subject + past» онцолсон:</b>
        <div style="margin:12px 0"><span class="tag">It's time to go. · It's time we WENT.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        advice /ədˈvaɪs/ — зөвлөгөө · recommend /ˌrekəˈmend/ — санал болгох · warn /wɔːrn/ — сануулах<br>
        insurance /ɪnˈʃʊrəns/ — даатгал · vaccination /ˌvæksɪˈneɪʃn/ — вакцин · currency /ˈkɜːrənsi/ — валют<br>
        exchange /ɪksˈtʃeɪndʒ/ — солих · deposit /dɪˈpɑːzɪt/ — урьдчилгаа · refund /ˈriːfʌnd/ — буцаан олголт<br>
        cancel /ˈkænsl/ — цуцлах · delay /dɪˈleɪ/ — саатал · emergency /ɪˈmɜːrdʒənsi/ — онцгой байдал<br>
        safety /ˈseɪfti/ — аюулгүй байдал · scam /skæm/ — залилан · pickpocket /ˈpɪkpɑːkɪt/ — халаасны хулгайч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You'd better to book» ✗ → «You'd better BOOK» ✓ (to байхгүй). «It's time we go» ✗ → «It's time we WENT» ✓ (өнгөрсөн цаг). «had better don't» ✗ → «had better NOT».</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAD BETTER = нүцгэн үйл үг + сануулга · IT'S TIME + subject = ӨНГӨРСӨН цаг (утга нь одоо!)».</p>`
    },
    phrases:[
      {en:"You'd better book the tickets before they sell out.", pron:"юд бэтэр бук зэ тикэтс бифор зэй сэл аут.", mn:"Тасалбар дуусахаас нь өмнө захиалсан нь дээр."},
      {en:"We'd better not forget our travel insurance.", pron:"вид бэтэр нот форгэт ауэр трэвл иншурэнс.", mn:"Аяллын даатгалаа мартахгүй байсан нь дээр."},
      {en:"It's time we left for the airport.", pron:"итс тайм ви лэфт фор зэ эрпорт.", mn:"Онгоцны буудал руу явах цаг боллоо."},
      {en:"It's high time you exchanged some currency.", pron:"итс хай тайм ю иксчэйнжд сам карэнси.", mn:"Чи валют солих цаг чинь аль хэдийн болсон."},
      {en:"You'd better watch out for pickpockets here.", pron:"юд бэтэр воч аут фор пикпокэтс хийр.", mn:"Энд халаасны хулгайчаас болгоомжилсон нь дээр."}
    ],
    exercises:[
      {q:"had better:", parts:["You'd better ", " now."], opts:["book","to book"], a:0, fix:"had better + нүцгэн → book (to ✗)."},
      {q:"Үгүйсгэл:", parts:["You'd better ", " miss the flight."], opts:["not","don't"], a:0, fix:"had better NOT (don't ✗)."},
      {q:"It's time + past:", parts:["It's time we ", " for the station."], opts:["left","leave"], a:0, fix:"It's time + subject → өнгөрсөн цаг: left."},
      {q:"Аль зөв:", parts:["It's high time you ", " your bags."], opts:["packed","pack"], a:0, fix:"It's high time + past → packed."}
    ],
    speak:{ scene:'Аялагчид зөвлөх', turns:[
      {ruby:"The tour is really popular this year.", pron:"зэ тур из риэли попьюлэр зис йир?", mn:"Энэ жил аялал их эрэлттэй байна.",
        choices:[{t:"Then you'd better book it now before it sells out.",best:true,mn:"Тэгвэл дуусахаас нь өмнө одоо захиалсан нь дээр."},{t:"Then you'd better to book it now.",best:false,fix:"had better + нүцгэн → YOU'D BETTER BOOK."}]},
      {ruby:"We have plenty of time before the flight, right?", pron:"ви хэв плэнти оф тайм бифор зэ флайт, райт?", mn:"Нислэгээс өмнө зав их байгаа биз дээ?",
        choices:[{t:"Not really — it's time we left for the airport.",best:true,mn:"Үнэндээ үгүй — онгоцны буудал руу явах цаг боллоо."},{t:"Not really — it's time we leave for the airport.",best:false,fix:"It's time + past → IT'S TIME WE LEFT."}]},
      {ruby:"Should I be careful with my wallet here?", pron:"шуд ай би кэрфул виз май волэт хийр?", mn:"Энд түрийвчээ болгоомжлох ёстой юу?",
        choices:[{t:"Yes, you'd better not carry too much cash.",best:true,mn:"Тийм, хэт их бэлэн мөнгө авч явахгүй байсан нь дээр."},{t:"Yes, you'd better don't carry too much cash.",best:false,fix:"had better NOT → YOU'D BETTER NOT CARRY."}]}
    ]}
  },
  {
    id:'b1m6l9', title:"6.9 Аяллын түүх", level:"B1 · М6",
    blurb:"I stopped to rest vs I stopped resting — meaning changes ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: remember/forget/stop/try + to vs -ing (утга өөрчлөгдөнө)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Аяллын түүх ярихдаа <b>to + үйл үг</b> ба <b>-ing</b> хоёрын <b>утгын ялгааг</b> зөв хэрэглэх.<br><br>
        <b>STOP:</b>
        <div style="margin:12px 0"><span class="tag">We stopped TO TAKE photos. (зорилго: зогсоод авахаар)</span><span class="tag">We stopped TAKING photos. (үйлдлээ болих: авахаа больсон)</span></div>
        <b>REMEMBER:</b>
        <div style="margin:12px 0"><span class="tag">Remember TO LOCK the door. (ирээдүйд мартуузай)</span><span class="tag">I remember LOCKING the door. (өнгөрсөн дурсамж)</span></div>
        <b>FORGET:</b>
        <div style="margin:12px 0"><span class="tag">Don't forget TO BUY tickets. (хийх ёстой)</span><span class="tag">I'll never forget SEEING the ocean. (мартагдашгүй дурсамж)</span></div>
        <b>TRY:</b>
        <div style="margin:12px 0"><span class="tag">I tried TO OPEN the window. (хичээсэн, хэцүү)</span><span class="tag">Try ASKING a local. (туршилт болгож үзэх)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        border /ˈbɔːrdər/ — хил · customs /ˈkʌstəmz/ — гааль · terminal /ˈtɜːrmɪnl/ — терминал<br>
        connection /kəˈnekʃn/ — залгаа нислэг · layover /ˈleɪoʊvər/ — завсарлага · delay /dɪˈleɪ/ — саатал<br>
        stranded /ˈstrændɪd/ — гацсан · lost /lɔːst/ — төөрсөн · detour /ˈdiːtʊr/ — тойруу зам<br>
        breakdown /ˈbreɪkdaʊn/ — эвдрэл · rescue /ˈreskjuː/ — аврах · unexpected /ˌʌnɪkˈspektɪd/ — гэнэтийн<br>
        arrival /əˈraɪvl/ — ирэлт · recall /rɪˈkɔːl/ — санах · encounter /ɪnˈkaʊntər/ — тохиолдох</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I stopped to smoke» (зогсоод тамхи татахаар) ≠ «I stopped smoking» (тамхиа больсон) — утга огт өөр! «Remember to call» (ирээдүй) vs «Remember calling» (өнгөрсөн) андуурч болохгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TO = урагшаа/зорилго/ирээдүй · -ING = буцаж/дурсамж/өнгөрсөн үйлдэл». Цагийн сум зурж сана!</p>`
    },
    phrases:[
      {en:"We stopped to take photos of the valley.", pron:"ви стопт ту тэйк фоутоз оф зэ вэли.", mn:"Хөндийн зураг авахаар зогслоо."},
      {en:"Remember to keep your passport safe.", pron:"римэмбэр ту кийп ёр пэспорт сэйф.", mn:"Паспортоо найдвартай хадгалахаа санаарай."},
      {en:"I'll never forget seeing the northern lights.", pron:"айл нэвэр форгэт сиинг зэ норзэрн лайтс.", mn:"Хойд туйлын гэрлийг үзсэнээ хэзээ ч мартахгүй."},
      {en:"Try asking a local for directions.", pron:"трай аскинг э лоукл фор дэрэкшнз.", mn:"Нутгийн хүнээс зам асууж үзээрэй."},
      {en:"Our flight was delayed, so we got stranded.", pron:"ауэр флайт воз дилэйд, соу ви гот стрэндид.", mn:"Нислэг маань хойшилж, бид гацсан."}
    ],
    exercises:[
      {q:"Зорилго (stop):", parts:["We stopped ", " photos."], opts:["to take","taking"], a:0, fix:"«зогсоод авахаар» → stopped TO TAKE."},
      {q:"Ирээдүй (remember):", parts:["Remember ", " your ticket."], opts:["to bring","bringing"], a:0, fix:"«мартуузай» → remember TO bring."},
      {q:"Дурсамж (forget):", parts:["I'll never forget ", " the ocean."], opts:["seeing","to see"], a:0, fix:"«мартагдашгүй дурсамж» → forget SEEING."},
      {q:"Туршилт (try):", parts:["Try ", " a local — they'll help."], opts:["asking","to ask"], a:0, fix:"«туршиж үз» → try ASKING."}
    ],
    speak:{ scene:'Аяллын түүх ярих', turns:[
      {ruby:"What happened on your road trip?", pron:"вот хэпэнд он ёр роуд трип?", mn:"Замын аялалд юу тохиолдсон бэ?",
        choices:[{t:"Our car broke down, so we stopped to ask a farmer for help.",best:true,mn:"Машин маань эвдэрч, зогсоод фермерээс тусламж асуусан."},{t:"Our car broke down, so we stopped asking a farmer for help.",best:false,fix:"«зогсоод асуухаар» → STOPPED TO ASK."}]},
      {ruby:"Did you remember to bring a map?", pron:"дид ю римэмбэр ту бринг э мэп?", mn:"Газрын зураг авчрахаа санасан уу?",
        choices:[{t:"Luckily yes, but I forgot to charge my phone.",best:true,mn:"Аз болоход тийм, гэхдээ утсаа цэнэглэхээ мартсан."},{t:"Luckily yes, but I forgot charging my phone.",best:false,fix:"«хийх ёстойгоо мартсан» → FORGOT TO CHARGE."}]},
      {ruby:"Would you do it again?", pron:"вүд ю ду ит эгэйн?", mn:"Дахин хийх үү?",
        choices:[{t:"Definitely. I'll never forget watching the sunset from the mountains.",best:true,mn:"Гарцаагүй. Уулсаас нар жаргахыг үзсэнээ хэзээ ч мартахгүй."},{t:"Definitely. I'll never forget to watch the sunset from the mountains.",best:false,fix:"дурсамж → FORGET WATCHING the sunset."}]}
    ]}
  },
  {
    id:'b1m6l10', title:"6.10 Модулийн төсөл", level:"B1 · М6",
    blurb:"🏆 Мартагдашгүй аяллынхаа түүхийг өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 6-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 6-ийн мэдлэгээ нэгтгэж, жинхэнэ аяллын түүх бүтээх.<br><br>
        <b>Модуль 6-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">I've JUST arrived / already / not yet / still ⭐⭐</span><span class="tag">I've been here FOR days / SINCE Monday vs I went AGO ⭐⭐</span><span class="tag">much bigger / not as busy AS / far more beautiful ⭐⭐</span><span class="tag">the best trip I've EVER taken ⭐⭐</span><span class="tag">somewhere quiet / anything / nobody ⭐⭐</span><span class="tag">If you turn left... / as soon as you arrive... ⭐⭐</span><span class="tag">I'd RATHER fly / prefer hiking TO driving ⭐⭐⭐</span><span class="tag">You'd BETTER book / It's time we LEFT ⭐⭐⭐</span><span class="tag">stopped TO rest vs stopped restING ⭐⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Мартагдашгүй аяллын түүх (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>I've just come back from the most amazing journey I've ever taken. I had wanted to visit the mountains for years, so as soon as I saved enough money, I booked a one-way ticket. The countryside was far more beautiful than any city I've seen. On the first day, we stopped to take photos everywhere — the scenery was breathtaking. I'll never forget watching the sunrise from the top of the valley. It wasn't as easy as I expected, though. Our bus broke down, and for a while we were stranded somewhere remote with nobody around. I'd rather hike than wait, so we walked until we reached a small village. A kind local told us, "You'd better stay the night here." Looking back, it's the best decision we ever made. Next time, I'd prefer to travel even further. If you ever get the chance, you should go too!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Аяллын түүхийн 4 давхар: <b>Одоо</b> (I've just come back) → <b>Харьцуулал</b> (far more beautiful, the best I've ever) → <b>Явдал</b> (stopped to take, stranded, nobody) → <b>Сонголт ба зөвлөгөө</b> (I'd rather hike, you'd better stay).</p>`
    },
    phrases:[
      {en:"I've just come back from an amazing journey.", pron:"айв жаст кам бэк фром эн эмэйзинг жөрни.", mn:"Гайхалтай аяллаас сая эргэж ирлээ."},
      {en:"The countryside was far more beautiful than any city.", pron:"зэ кантрисайд воз фар мор бьютифул зэн эни сити.", mn:"Хөдөө ямар ч хотоос хамаагүй үзэсгэлэнтэй байсан."},
      {en:"We stopped to take photos of the valley.", pron:"ви стопт ту тэйк фоутоз оф зэ вэли.", mn:"Хөндийн зураг авахаар зогслоо."},
      {en:"For a while we were stranded with nobody around.", pron:"фор э вайл ви вөр стрэндид виз ноубоди эраунд.", mn:"Хэсэг хугацаанд эргэн тойронд хүнгүй гацсан."},
      {en:"It's the best decision we've ever made.", pron:"итс зэ бэст дисижн вив эвэр мэйд.", mn:"Энэ бол бидний гаргасан хамгийн зөв шийдвэр."}
    ],
    exercises:[
      {q:"Давтлага (Present Perfect):", parts:["I've ", " come back from my trip."], opts:["just","yet"], a:0, fix:"«сая» → have JUST + V3."},
      {q:"Давтлага (Харьцуулал):", parts:["It's the best trip I've ever ", "."], opts:["taken","took"], a:0, fix:"the best... I've ever + V3 → taken."},
      {q:"Давтлага (gerund/inf):", parts:["We stopped ", " photos of the view."], opts:["to take","taking"], a:0, fix:"«зогсоод авахаар» → stopped TO TAKE."},
      {q:"Давтлага (preference):", parts:["I'd rather ", " than wait."], opts:["hike","to hike"], a:0, fix:"would rather + нүцгэн → hike."}
    ],
    speak:{ scene:'🏆 Төсөл: Мартагдашгүй аяллын түүх', turns:[
      {ruby:"Tell me about the best trip you've ever taken.", pron:"тэл ми эбаут зэ бэст трип юв эвэр тэйкэн.", mn:"Хийсэн хамгийн сайхан аяллынхаа тухай яриач.",
        choices:[{t:"I've just got back from the mountains — the most beautiful place I've ever seen.",best:true,mn:"Уулнаас сая эргэж ирлээ — миний харсан хамгийн үзэсгэлэнтэй газар."},{t:"I just got back from the mountains, the most beautiful place I ever saw.",best:false,fix:"I'VE JUST GOT... the most beautiful place I'VE EVER SEEN."}]},
      {ruby:"Did everything go smoothly?", pron:"дид эврисинг гоу смуузли?", mn:"Бүх юм жигдхэн болсон уу?",
        choices:[{t:"Not quite. Our bus broke down and we were stranded somewhere with nobody around.",best:true,mn:"Тийм ч биш. Автобус эвдэрч, эргэн тойронд хүнгүй хаа нэг газар гацсан."},{t:"Not quite. Our bus broke down and we were stranded somewhere with anybody around.",best:false,fix:"үгүйсгэл → with NOBODY around."}]},
      {ruby:"So what did you do?", pron:"соу вот дид ю ду?", mn:"Тэгээд яасан бэ?",
        choices:[{t:"I'd rather walk than wait, so we hiked until we found a village. It's the best decision we've ever made.",best:true,mn:"Хүлээснээс алхах нь дээр гэж бодоод тосго олтол явган явсан. Бидний гаргасан хамгийн зөв шийдвэр."},{t:"I'd rather to walk than wait, so we hiked until we will find a village.",best:false,fix:"I'D RATHER WALK... until we FOUND a village."}]}
    ]}
  },
  {
    id:'b1m7l1', title:"7.1 Нийгэм", level:"B1 · М7",
    blurb:"It is thought that… / He is believed to… — идэвхгүй мэдээллийн бүтэц ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Идэвхгүй мэдээллийн бүтэц (It is thought that…)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Нийгмийн тухай <b>ерөнхий үзэл бодол</b>, албан ёсны мэдээллийг хэн хэлснийг заалгүйгээр дамжуулах.<br><br>
        <b>Хоёр загвар — нэг санаа:</b>
        <div style="margin:12px 0"><span class="tag">It is thought THAT poverty is rising. (Ядуурал нэмэгдэж байна гэж үздэг)</span><span class="tag">Poverty is thought TO BE rising. (мөн утга, хүн рүү шилжсэн)</span></div>
        <b>Хэлц үйл үгс:</b> think · believe · say · report · consider · expect · know · claim:
        <div style="margin:12px 0"><span class="tag">He is believed to be very rich.</span><span class="tag">The mayor is said to have resigned.</span><span class="tag">They are known to support the plan.</span></div>
        <b>Өнгөрсөн санаа → «to have + V3»:</b>
        <div style="margin:12px 0"><span class="tag">It is said that he LEFT. = He is said TO HAVE LEFT. (аль хэдийн явсан)</span></div>
        <b>Одоо санаа → «to + V1» эсвэл «to be + V-ing»:</b>
        <div style="margin:12px 0"><span class="tag">It is thought that she LIVES abroad. = She is thought TO LIVE abroad.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        society /səˈsaɪəti/ — нийгэм · community /kəˈmjuːnəti/ — иргэдийн хамт олон · citizen /ˈsɪtɪzn/ — иргэн<br>
        government /ˈɡʌvərnmənt/ — засгийн газар · public /ˈpʌblɪk/ — олон нийтийн · welfare /ˈwelfeər/ — нийгмийн халамж<br>
        inequality /ˌɪnɪˈkwɒləti/ — тэгш бус байдал · poverty /ˈpɒvərti/ — ядуурал · wealth /welθ/ — баялаг<br>
        status /ˈsteɪtəs/ — байр суурь · minority /maɪˈnɒrəti/ — цөөнх · majority /məˈdʒɒrəti/ — олонх<br>
        tradition /trəˈdɪʃn/ — уламжлал · custom /ˈkʌstəm/ — заншил · reform /rɪˈfɔːrm/ — шинэчлэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He is thought that he is rich» ✗ — «that» гэвэл <b>IT</b>-ээр эхэл: «It is thought that he is rich» ✓. Хүн рүү шилжвэл: «He is thought TO BE rich» ✓ (that ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IT + is + V3 + THAT» ЭСВЭЛ «Хүн + is + V3 + TO» — хоёулаа болно, гэхдээ хольж болохгүй.</p>`
    },
    phrases:[
      {en:"It is thought that inequality is growing.", pron:"ит из сот зэт инэквалити из гроуинг.", mn:"Тэгш бус байдал нэмэгдэж байна гэж үздэг."},
      {en:"The politician is believed to be honest.", pron:"зэ политишн из биливд ту би онэст.", mn:"Тэр улстөрчийг шударга гэж үздэг."},
      {en:"The mayor is said to have resigned yesterday.", pron:"зэ мэйор из сэд ту хэв ризайнд ёстэрдэй.", mn:"Хотын дарга өчигдөр огцорсон гэдэг."},
      {en:"These customs are known to be very old.", pron:"зийз кастэмз а ноун ту би вэри олд.", mn:"Эдгээр заншлыг маш эртнийх гэж мэддэг."},
      {en:"Poverty is reported to have fallen this year.", pron:"повэрти из рипортид ту хэв фолн зис йир.", mn:"Ядуурал энэ жил буурсан гэж мэдээлж байна."}
    ],
    exercises:[
      {q:"IT загвар:", parts:["It is thought ", " crime is rising."], opts:["that","to"], a:0, fix:"It is thought THAT + өгүүлбэр."},
      {q:"Хүн загвар:", parts:["He is believed ", " very wealthy."], opts:["to be","that is"], a:0, fix:"Хүн + is believed TO BE."},
      {q:"Өнгөрсөн санаа:", parts:["The mayor is said to ", " resigned."], opts:["have","has"], a:0, fix:"аль хэдийн → to HAVE resigned."},
      {q:"Аль зөв:", parts:["", " known to support the reform."], opts:["They are","It is they"], a:0, fix:"They ARE known to support."}
    ],
    speak:{ scene:'Нийгмийн судалгаа ярилцах', turns:[
      {ruby:"What do the studies show about our society?", pron:"вот ду зэ стадиз шоу эбаут аур сэсайэти?", mn:"Судалгаа манай нийгмийн талаар юу харуулж байна?",
        choices:[{t:"It is thought that inequality is growing in big cities.",best:true,mn:"Том хотуудад тэгш бус байдал нэмэгдэж байна гэж үздэг."},{t:"It is thought inequality growing in big cities.",best:false,fix:"It is thought THAT inequality IS growing."}]},
      {ruby:"And what about the new mayor?", pron:"энд вот эбаут зэ ню мэйор?", mn:"Шинэ хотын дарга яах вэ?",
        choices:[{t:"She is believed to be very committed to welfare reform.",best:true,mn:"Түүнийг халамжийн шинэчлэлд маш үнэнч гэж үздэг."},{t:"She is believed that she is very committed.",best:false,fix:"She is believed TO BE committed (that ✗)."}]},
      {ruby:"Didn't the old mayor leave suddenly?", pron:"диднт зэ олд мэйор лийв саднли?", mn:"Хуучин дарга гэнэт явсан биш үү?",
        choices:[{t:"Yes, he is said to have resigned last month.",best:true,mn:"Тийм, тэр өнгөрсөн сард огцорсон гэдэг."},{t:"Yes, he is said to resigned last month.",best:false,fix:"Өнгөрсөн → to HAVE resigned."}]}
    ]}
  },
  {
    id:'b1m7l2', title:"7.2 Үйлчилгээ", level:"B1 · М7",
    blurb:"have/get someone to do vs have something done — шалтгаант бүтэц ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Шалтгаант бүтэц (have/get sth done · have sb do)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өөрөө биш, <b>өөр хүнээр</b> ажил хийлгэсэн гэдгээ хэлэх — үйлчилгээний ертөнцийн гол дүрэм.<br><br>
        <b>1) have/get + ЮМ + V3 (юмаа хийлгэх):</b>
        <div style="margin:12px 0"><span class="tag">I HAD my car REPAIRED. (машинаа засуулсан)</span><span class="tag">She GOT her hair CUT. (үсээ засуулсан)</span></div>
        <b>2) have + ХҮН + V1 (хүнээр хийлгэх):</b>
        <div style="margin:12px 0"><span class="tag">I HAD the mechanic CHECK the engine. (механикаар шалгуулсан)</span></div>
        <b>3) get + ХҮН + TO + V1 (get гэвэл TO орно!):</b>
        <div style="margin:12px 0"><span class="tag">I GOT the plumber TO FIX the pipe. (get → to fix)</span><span class="tag">I HAD the plumber FIX the pipe. (have → to ✗)</span></div>
        <b>Муу зүйл тохиолдсон ч энэ бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">They had their windows broken. (цонх нь хагарсан — өөрсдийн буруугүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        service /ˈsɜːrvɪs/ — үйлчилгээ · repair /rɪˈpeər/ — засвар · plumber /ˈplʌmər/ — сантехникч<br>
        electrician /ɪˌlekˈtrɪʃn/ — цахилгаанчин · mechanic /məˈkænɪk/ — механикч · technician /tekˈnɪʃn/ — техникч<br>
        install /ɪnˈstɔːl/ — суурилуулах · fix /fɪks/ — засах · maintenance /ˈmeɪntənəns/ — арчлалт<br>
        appointment /əˈpɔɪntmənt/ — цаг товлолт · delivery /dɪˈlɪvəri/ — хүргэлт · refund /ˈriːfʌnd/ — мөнгөө буцаах<br>
        customer /ˈkʌstəmər/ — үйлчлүүлэгч · guarantee /ˌɡærənˈtiː/ — баталгаа · quote /kwoʊt/ — үнийн санал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I repaired my car» гэвэл ӨӨРӨӨ засав гэсэн санаа. Засвартанд өгсөн бол <b>I HAD my car REPAIRED</b> ✓. Мөн «I got him fix it» ✗ → get гэвэл <b>got him TO fix</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ЮМ хийлгэвэл V3 (done)», «GET+хүн бол TO, HAVE+хүн бол TO байхгүй».</p>`
    },
    phrases:[
      {en:"I had my car repaired at the garage.", pron:"ай хэд май кар рипээрд эт зэ гараж.", mn:"Машинаа зогсоол дээр засууллаа."},
      {en:"She got her hair cut yesterday.", pron:"ши гот хёр хээр кат ёстэрдэй.", mn:"Тэр өчигдөр үсээ засуулсан."},
      {en:"We got the plumber to fix the leak.", pron:"ви гот зэ пламэр ту фикс зэ лийк.", mn:"Сантехникчаар алдагдлыг заслуулсан."},
      {en:"I need to have the internet installed.", pron:"ай нийд ту хэв зэ интэрнэт инсталд.", mn:"Интернэт суулгуулах хэрэгтэй байна."},
      {en:"They had their windows broken last night.", pron:"зэй хэд зээр виндоуз броукн ласт найт.", mn:"Өнгөрсөн шөнө тэдний цонх хагарчээ."}
    ],
    exercises:[
      {q:"Юмаа хийлгэх:", parts:["I had my car ", " at the garage."], opts:["repaired","repair"], a:0, fix:"have + ЮМ + V3 → repaired."},
      {q:"get + хүн:", parts:["We got the plumber ", " the pipe."], opts:["to fix","fix"], a:0, fix:"GET + хүн → TO fix."},
      {q:"have + хүн:", parts:["I had the mechanic ", " the engine."], opts:["check","to check"], a:0, fix:"HAVE + хүн → check (to ✗)."},
      {q:"Аль утга:", parts:["She ", " her hair cut. (засварчинд)"], opts:["got","cut"], a:0, fix:"Засуулсан → got her hair CUT."}
    ],
    speak:{ scene:'Үйлчилгээний газар', turns:[
      {ruby:"Your car looks great! Did you fix it yourself?", pron:"ёр кар лүкс грэйт! дид ю фикс ит ёрсэлф?", mn:"Машин чинь гоё харагдаж байна! Өөрөө засав уу?",
        choices:[{t:"No, I had it repaired at the garage downtown.",best:true,mn:"Үгүй, хотын төвийн засварт заслуулсан."},{t:"No, I repaired it at the garage.",best:false,fix:"Заслуулсан → I HAD it REPAIRED."}]},
      {ruby:"What about the broken pipe at home?", pron:"вот эбаут зэ броукн пайп эт хоум?", mn:"Гэрийн хагарсан хоолой яав?",
        choices:[{t:"I got a plumber to fix it this morning.",best:true,mn:"Өнөө өглөө сантехникчаар заслуулсан."},{t:"I got a plumber fix it this morning.",best:false,fix:"GET + хүн → to fix."}]},
      {ruby:"Great. Do you need anything else done?", pron:"грэйт. ду ю нийд энисинг элс дан?", mn:"Сайхан. Өөр хийлгэх юм байна уу?",
        choices:[{t:"Yes, I need to have the internet installed next week.",best:true,mn:"Тийм, дараа долоо хоногт интернэт суулгуулах хэрэгтэй."},{t:"Yes, I need to have installed the internet.",best:false,fix:"have the internet INSTALLED (дараалал)."}]}
    ]}
  },
  {
    id:'b1m7l3', title:"7.3 Барилга", level:"B1 · М7",
    blurb:"the office in which… / the man I worked with — угтвартай холбоос ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Угтвартай холбоос өгүүлбэр (preposition + which/whom)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Угтвар (in, with, for, about…) орсон холбоос өгүүлбэрийг <b>албан ёсны</b> ба <b>ярианы</b> хоёр аргаар зөв хэлэх.<br><br>
        <b>Албан ёсны: угтвар + which/whom (эхэнд):</b>
        <div style="margin:12px 0"><span class="tag">The office IN WHICH I work is new. (ажилладаг офис)</span><span class="tag">The architect WITH WHOM I spoke was kind. (ярьсан архитектор)</span></div>
        <b>Ярианы: угтвар төгсгөлд, that/who эсвэл огт үг байхгүй:</b>
        <div style="margin:12px 0"><span class="tag">The office (that) I work IN is new.</span><span class="tag">The man (who) I worked WITH was kind.</span></div>
        <b>⚠️ Хоёр дүрэм НЭГ дор биш:</b>
        <div style="margin:12px 0"><span class="tag">the office in which I work ✓</span><span class="tag">the office which I work in ✓</span><span class="tag">the office in which I work in ✗ (in давхар ✗)</span></div>
        <b>«whom» зөвхөн хүнд, «which» юманд:</b>
        <div style="margin:12px 0"><span class="tag">the colleague to whom I wrote · the building about which we read</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        building /ˈbɪldɪŋ/ — барилга · office /ˈɒfɪs/ — оффис · skyscraper /ˈskaɪskreɪpər/ — тэнгэр баганадсан барилга<br>
        construction /kənˈstrʌkʃn/ — барилгын ажил · architect /ˈɑːrkɪtekt/ — архитектор · foundation /faʊnˈdeɪʃn/ — суурь<br>
        floor /flɔːr/ — давхар · tower /ˈtaʊər/ — цамхаг · warehouse /ˈweərhaʊs/ — агуулах<br>
        apartment /əˈpɑːrtmənt/ — орон сууц · renovate /ˈrenəveɪt/ — засварлах · demolish /dɪˈmɒlɪʃ/ — нураах<br>
        structure /ˈstrʌktʃər/ — бүтэц · elevator /ˈelɪveɪtər/ — цахилгаан шат · corridor /ˈkɒrɪdɔːr/ — коридор</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the office in which I work in» ✗ — угтвар <b>нэг л удаа</b>. «in which I work» ✓ ЭСВЭЛ «which I work in» ✓. Мөн «with who» ✗ → угтварын дараа <b>whom</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Угтвар эхэнд бол WHICH/WHOM, төгсгөлд бол THAT/эсвэл юу ч биш».</p>`
    },
    phrases:[
      {en:"The office in which I work is on the tenth floor.", pron:"зэ офис ин вич ай вөрк из он зэ тэнс флор.", mn:"Миний ажилладаг офис 10 давхарт байдаг."},
      {en:"The architect with whom I spoke was very helpful.", pron:"зэ аркитэкт виз хум ай споук воз вэри хэлпфул.", mn:"Миний ярьсан архитектор их тустай байсан."},
      {en:"That's the building I told you about.", pron:"зэтс зэ билдинг ай толд ю эбаут.", mn:"Энэ бол миний чамд хэлсэн барилга."},
      {en:"The tower they are constructing is enormous.", pron:"зэ тауэр зэй а кэнстрактинг из инормэс.", mn:"Тэдний барьж буй цамхаг асар том."},
      {en:"The warehouse we worked in was demolished.", pron:"зэ вээрхаус ви вөркт ин воз димолишт.", mn:"Бидний ажиллаж байсан агуулахыг нурааж."}
    ],
    exercises:[
      {q:"Албан ёсны:", parts:["The office in ", " I work is new."], opts:["which","that"], a:0, fix:"Угтварын дараа → in WHICH (that ✗)."},
      {q:"Хүн + угтвар:", parts:["The architect with ", " I spoke was kind."], opts:["whom","who"], a:0, fix:"Угтварын дараа хүн → whom."},
      {q:"Давхар угтвар:", parts:["The building in which we live ", "."], opts:["is old","in is old"], a:0, fix:"in давхар ✗ → «in which we live»."},
      {q:"Ярианы хэв:", parts:["That's the man I worked ", "."], opts:["with","with whom"], a:0, fix:"Төгсгөлд whom ✗ → зүгээр «with»."}
    ],
    speak:{ scene:'Шинэ оффисоо танилцуулах', turns:[
      {ruby:"So this is where you work now?", pron:"соу зис из вэр ю вөрк нау?", mn:"Тэгэхээр одоо энд ажилладаг юм уу?",
        choices:[{t:"Yes! The office in which I work is on the tenth floor.",best:true,mn:"Тийм! Миний ажилладаг офис 10 давхарт."},{t:"Yes! The office in which I work in is on the tenth floor.",best:false,fix:"in давхар ✗ → «in which I work»."}]},
      {ruby:"Who designed this amazing tower?", pron:"ху дизайнд зис эмэйзинг тауэр?", mn:"Энэ гайхалтай цамхгийг хэн зохион бүтээсэн бэ?",
        choices:[{t:"A famous architect with whom my boss once studied.",best:true,mn:"Миний даргатай хамт сурсан алдартай архитектор."},{t:"A famous architect with who my boss once studied.",best:false,fix:"Угтварын дараа → with WHOM."}]},
      {ruby:"Is that the old warehouse across the street?", pron:"из зэт зэ олд вээрхаус экрос зэ стрийт?", mn:"Гудамжны эсрэг талд байгаа нь хуучин агуулах уу?",
        choices:[{t:"It was. The warehouse we used to work in was just demolished.",best:true,mn:"Тийм байсан. Бидний ажилладаг байсан агуулахыг саяхан нураасан."},{t:"It was. The warehouse in which we used to work in was demolished.",best:false,fix:"in давхар ✗ → «we used to work in» эсвэл «in which we worked»."}]}
    ]}
  },
  {
    id:'b1m7l4', title:"7.4 Хүн ам", level:"B1 · М7",
    blurb:"many of whom / some of which / all of which — тоо хэмжээт холбоос ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Тоо хэмжээт тодотгол бус холбоос (many of whom…)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Бүлэг хүн/юмны <b>хэсгийн тухай</b> нэмэлт мэдээллийг нэг өгүүлбэрт нэгтгэх — статистик, хүн амын тухай ярианд гол хэрэгсэл.<br><br>
        <b>Загвар: …, тоо + OF + WHOM/WHICH, …</b>
        <div style="margin:12px 0"><span class="tag">The city has 3 million people, MANY OF WHOM are immigrants. (олонх нь цагаач)</span><span class="tag">They built ten towers, SOME OF WHICH are empty. (зарим нь хоосон)</span></div>
        <b>Хүн → WHOM, юм → WHICH:</b>
        <div style="margin:12px 0"><span class="tag">many of WHOM · none of WHOM · most of WHOM (хүн)</span><span class="tag">all of WHICH · some of WHICH · both of WHICH (юм)</span></div>
        <b>⚠️ «of them» биш «of whom» — нэг өгүүлбэр болгоно:</b>
        <div style="margin:12px 0"><span class="tag">…, many of THEM are immigrants. (тусдаа 2 өгүүлбэр)</span><span class="tag">…, many of WHOM are immigrants. (нэг өгүүлбэр ✓)</span></div>
        <b>Таслал ЗААВАЛ (тодотгол бус):</b>
        <div style="margin:12px 0"><span class="tag">My neighbours, most of whom are elderly, are very kind.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        population /ˌpɒpjuˈleɪʃn/ — хүн ам · census /ˈsensəs/ — тооллого · density /ˈdensəti/ — нягтрал<br>
        migration /maɪˈɡreɪʃn/ — шилжилт хөдөлгөөн · immigrant /ˈɪmɪɡrənt/ — цагаач · resident /ˈrezɪdənt/ — оршин суугч<br>
        urban /ˈɜːrbən/ — хотын · rural /ˈrʊərəl/ — хөдөөгийн · suburb /ˈsʌbɜːrb/ — захын хороолол<br>
        overcrowded /ˌoʊvərˈkraʊdɪd/ — хэт олон хүнтэй · growth /ɡroʊθ/ — өсөлт · decline /dɪˈklaɪn/ — бууралт<br>
        generation /ˌdʒenəˈreɪʃn/ — үе · inhabitant /ɪnˈhæbɪtənt/ — оршин суугч · birth rate /ˈbɜːrθ reɪt/ — төрөлтийн түвшин</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «…, many of them are immigrants» нь ХОЁР өгүүлбэр. Нэг өгүүлбэр болгож холбохын тулд <b>many of WHOM</b> ✓. Мөн юмны хувьд «some of who» ✗ → <b>some of WHICH</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «тоо + OF + WHOM (хүн) / WHICH (юм)» — таслалын дараа.</p>`
    },
    phrases:[
      {en:"The city has three million residents, many of whom are young.", pron:"зэ сити хэз срий милион рэзидэнтс, мэни оф хум а янг.", mn:"Хот 3 сая оршин суугчтай, олонх нь залуу."},
      {en:"They built ten towers, some of which are still empty.", pron:"зэй билт тэн тауэрз, сам оф вич а стил эмпти.", mn:"Тэд 10 цамхаг барьсан, зарим нь одоо ч хоосон."},
      {en:"My neighbours, most of whom are elderly, are friendly.", pron:"май нэйбэрз, моуст оф хум а элдэрли, а фрэндли.", mn:"Хөршүүд минь, ихэнх нь ахмад настан, найрсаг."},
      {en:"The suburbs, all of which are new, are growing fast.", pron:"зэ сабөрбз, ол оф вич а ню, а гроуинг фаст.", mn:"Захын хороолол, бүгд шинэ, хурдан томорч байна."},
      {en:"There were many immigrants, few of whom spoke English.", pron:"зэр вөр мэни имигрэнтс, фью оф хум споук инглиш.", mn:"Олон цагаач байсан, цөөхөн нь англиар ярьдаг байв."}
    ],
    exercises:[
      {q:"Хүн:", parts:["The city has millions of people, many of ", " are poor."], opts:["whom","which"], a:0, fix:"Хүн → many of WHOM."},
      {q:"Юм:", parts:["They built ten towers, some of ", " are empty."], opts:["which","whom"], a:0, fix:"Юм → some of WHICH."},
      {q:"Нэг өгүүлбэр:", parts:["My neighbours, most of ", " are old, are kind."], opts:["whom","them"], a:0, fix:"Нэг өгүүлбэр болгоно → of WHOM (them ✗)."},
      {q:"Бүх:", parts:["The suburbs, all of ", " are new, grow fast."], opts:["which","who"], a:0, fix:"Юм → all of WHICH."}
    ],
    speak:{ scene:'Хүн амын тооллого ярилцах', turns:[
      {ruby:"How big is the population here?", pron:"хау биг из зэ попюлэйшн хиэр?", mn:"Энд хүн ам хэр том вэ?",
        choices:[{t:"About three million, many of whom moved here recently.",best:true,mn:"Ойролцоогоор 3 сая, олонх нь саяхан нүүж ирсэн."},{t:"About three million, many of them moved here recently.",best:false,fix:"Нэг өгүүлбэр → many of WHOM."}]},
      {ruby:"I heard they built a lot of new towers.", pron:"ай хөрд зэй билт э лот оф ню тауэрз.", mn:"Тэд олон шинэ цамхаг барьсан гэсэн.",
        choices:[{t:"Yes, ten towers, some of which are still completely empty.",best:true,mn:"Тийм, 10 цамхаг, зарим нь одоо ч бүрэн хоосон."},{t:"Yes, ten towers, some of whom are still empty.",best:false,fix:"Юм → some of WHICH (whom ✗)."}]},
      {ruby:"What are the residents like?", pron:"вот а зэ рэзидэнтс лайк?", mn:"Оршин суугчид нь ямар вэ?",
        choices:[{t:"Very mixed — most of whom are young families.",best:true,mn:"Маш холимог — ихэнх нь залуу гэр бүлүүд."},{t:"Very mixed — most of which are young families.",best:false,fix:"Хүн → most of WHOM (which ✗)."}]}
    ]}
  },
  {
    id:'b1m7l5', title:"7.5 Асуудал", level:"B1 · М7",
    blurb:"It was … that … / What I need is … — онцлох задгай өгүүлбэр ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Онцлох задгай өгүүлбэр (cleft sentences)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өгүүлбэрийн НЭГ хэсгийг <b>тодруулж онцлох</b> — асуудлыг хурцаар илэрхийлэх хүчтэй арга.<br><br>
        <b>1) It-cleft: It + was/is + ОНЦЛОХ ЮМ + that…</b>
        <div style="margin:12px 0"><span class="tag">The traffic caused the delay. → IT WAS the traffic THAT caused the delay. (яг замын түгжрэл)</span><span class="tag">IT WAS in 2020 THAT the crisis began. (яг 2020 онд)</span></div>
        <b>2) What-cleft: What + өгүүлбэр + is + ОНЦЛОХ:</b>
        <div style="margin:12px 0"><span class="tag">I need money. → WHAT I need IS money. (хэрэгтэй нь мөнгө)</span><span class="tag">WHAT the city needs IS more housing.</span></div>
        <b>Хүн онцлоход «who» ч болно:</b>
        <div style="margin:12px 0"><span class="tag">It was the mayor WHO solved the problem.</span></div>
        <b>«What…» дараа ганц тооны IS:</b>
        <div style="margin:12px 0"><span class="tag">What we need IS a solution. (are ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        problem /ˈprɒbləm/ — асуудал · pollution /pəˈluːʃn/ — бохирдол · congestion /kənˈdʒestʃən/ — түгжрэл<br>
        traffic /ˈtræfɪk/ — замын хөдөлгөөн · unemployment /ˌʌnɪmˈplɔɪmənt/ — ажилгүйдэл · homelessness /ˈhoʊmləsnəs/ — орон гэргүйдэл<br>
        shortage /ˈʃɔːrtɪdʒ/ — хомсдол · crisis /ˈkraɪsɪs/ — хямрал · issue /ˈɪʃuː/ — асуудал<br>
        complaint /kəmˈpleɪnt/ — гомдол · protest /ˈproʊtest/ — жагсаал · solution /səˈluːʃn/ — шийдэл<br>
        housing /ˈhaʊzɪŋ/ — орон сууцны хангамж · address /əˈdres/ — шийдвэрлэх · tackle /ˈtækl/ — даван туулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «What we need are more houses» — «What…» дараа ихэвчлэн <b>IS</b> ✓. Мөн «It was because of traffic which…» ✗ → It-cleft-д <b>that</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IT WAS ___ THAT» (онцлох юмаа дунд нь хий) эсвэл «WHAT … IS ___» (онцлох юмаа төгсгөлд).</p>`
    },
    phrases:[
      {en:"It was the traffic that caused the delay.", pron:"ит воз зэ трэфик зэт козд зэ дилэй.", mn:"Саатлыг замын түгжрэл үүсгэсэн юм."},
      {en:"What the city needs is more affordable housing.", pron:"вот зэ сити нийдз из мор эфордэбл хаузинг.", mn:"Хотод хэрэгтэй нь хямд орон сууц."},
      {en:"It was in 2020 that the housing crisis began.", pron:"ит воз ин твэнти твэнти зэт зэ хаузинг крайсис бигэн.", mn:"Орон сууцны хямрал яг 2020 онд эхэлсэн."},
      {en:"It was the mayor who solved the problem.", pron:"ит воз зэ мэйор ху солвд зэ проблэм.", mn:"Асуудлыг хотын дарга шийдсэн юм."},
      {en:"What worries me most is unemployment.", pron:"вот ворриз ми моуст из анимплоймэнт.", mn:"Намайг хамгийн их санаа зовоож буй нь ажилгүйдэл."}
    ],
    exercises:[
      {q:"It-cleft:", parts:["It was the traffic ", " caused the delay."], opts:["that","which caused"], a:0, fix:"It was ___ THAT + үйл."},
      {q:"What-cleft:", parts:["What the city needs ", " more housing."], opts:["is","are"], a:0, fix:"What… дараа → IS."},
      {q:"Хүн онцлох:", parts:["It was the mayor ", " solved it."], opts:["who","which"], a:0, fix:"Хүн → who (which ✗)."},
      {q:"Цаг онцлох:", parts:["It was in 2020 ", " the crisis began."], opts:["that","when it"], a:0, fix:"It-cleft → that."}
    ],
    speak:{ scene:'Хотын асуудал хэлэлцэх', turns:[
      {ruby:"Why were you so late this morning?", pron:"вай вөр ю соу лэйт зис морнинг?", mn:"Өнөө өглөө яагаад ийм оройтов?",
        choices:[{t:"It was the traffic that made me late, not me!",best:true,mn:"Намайг замын түгжрэл оройтуулсан юм, би биш!"},{t:"It was the traffic what made me late.",best:false,fix:"It-cleft → that (what ✗)."}]},
      {ruby:"So what's the biggest issue in this city?", pron:"соу вотс зэ бигэст ишю ин зис сити?", mn:"Тэгэхээр энэ хотын хамгийн том асуудал юу вэ?",
        choices:[{t:"What the city really needs is more affordable housing.",best:true,mn:"Хотод үнэхээр хэрэгтэй нь хямд орон сууц."},{t:"What the city really need are more affordable housing.",best:false,fix:"What… → NEEDS IS (ганц тоо)."}]},
      {ruby:"And who finally started to fix things?", pron:"энд ху файнэли стартид ту фикс сингз?", mn:"Хэн эцэст нь засаж эхэлсэн бэ?",
        choices:[{t:"It was the new mayor who really tackled the problem.",best:true,mn:"Асуудлыг үнэхээр шийдэж эхэлсэн нь шинэ хотын дарга."},{t:"It was the new mayor that solved it what everyone praised.",best:false,fix:"Энгийн It-cleft → «who tackled the problem»."}]}
    ]}
  },
  {
    id:'b1m7l6', title:"7.6 Гэмт хэрэг", level:"B1 · М7",
    blurb:"Never have I… / Not only … but also … — сөрөг үгийн урвуу дараалал ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Сөрөг үйл үг ба урвуу дараалал (inversion)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Сөрөг утгатай үгээр өгүүлбэр эхлэхэд <b>асуултын дараалал</b> үүсэх — албан ёсны, хүчтэй онцлолт.<br><br>
        <b>Сөрөг үг эхэнд → туслах + эзэн (асуулт шиг):</b>
        <div style="margin:12px 0"><span class="tag">I have never seen such crime. → NEVER HAVE I seen such crime.</span><span class="tag">She had rarely felt so safe. → RARELY HAD SHE felt so safe.</span></div>
        <b>Түгээмэл сөрөг эхлэлүүд:</b>
        <div style="margin:12px 0"><span class="tag">Never · Rarely · Seldom · Hardly · No sooner … than · Not until · Little did I know</span></div>
        <b>Not only … but also (хоёулаа урвуу):</b>
        <div style="margin:12px 0"><span class="tag">NOT ONLY DID he steal the car, BUT he ALSO crashed it.</span></div>
        <b>No sooner … than / Hardly … when:</b>
        <div style="margin:12px 0"><span class="tag">NO SOONER HAD the police arrived THAN the thief ran. (ирмэгц зугтав)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        crime /kraɪm/ — гэмт хэрэг · criminal /ˈkrɪmɪnl/ — гэмт хэрэгтэн · theft /θeft/ — хулгай<br>
        robbery /ˈrɒbəri/ — дээрэм · burglary /ˈbɜːrɡləri/ — байшинд халдах хулгай · suspect /ˈsʌspekt/ — сэжигтэн<br>
        witness /ˈwɪtnəs/ — гэрч · arrest /əˈrest/ — баривчлах · trial /ˈtraɪəl/ — шүүх хурал<br>
        evidence /ˈevɪdəns/ — нотлох баримт · guilty /ˈɡɪlti/ — гэм буруутай · innocent /ˈɪnəsnt/ — гэм буруугүй<br>
        victim /ˈvɪktɪm/ — хохирогч · sentence /ˈsentəns/ — ял · offence /əˈfens/ — гэмт үйлдэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Never I have seen» ✗ — сөрөг эхэлбэл туслах өмнө: <b>Never HAVE I seen</b> ✓. «Not only he stole» ✗ → <b>Not only DID he steal</b> ✓ (туслах орно).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сөрөг үг эхэнд → өгүүлбэрийг АСУУЛТ болго (туслах + эзэн)».</p>`
    },
    phrases:[
      {en:"Never have I seen such a serious crime.", pron:"нэвэр хэв ай сийн сач э сириэс крайм.", mn:"Ийм ноцтой гэмт хэргийг би хэзээ ч үзээгүй."},
      {en:"Not only did he steal the car, but he also crashed it.", pron:"нот оунли дид хи стийл зэ кар, бат хи олсоу крэшт ит.", mn:"Тэр машинийг хулгайлаад зогсохгүй мөн онхолдуулсан."},
      {en:"No sooner had the police arrived than the thief ran.", pron:"ноу суунэр хэд зэ полийс эрайвд зэн зэ сийф рэн.", mn:"Цагдаа ирмэгц хулгайч зугтсан."},
      {en:"Rarely had the city felt so unsafe.", pron:"рээрли хэд зэ сити фэлт соу ансэйф.", mn:"Хот ийм аюултай санагдаж байсангүй."},
      {en:"Little did they know the witness was watching.", pron:"литл дид зэй ноу зэ витнэс воз вочинг.", mn:"Гэрч харж байгааг тэд огт мэдээгүй."}
    ],
    exercises:[
      {q:"Урвуу дараалал:", parts:["Never ", " seen such a crime."], opts:["have I","I have"], a:0, fix:"Сөрөг эхэнд → HAVE I (урвуу)."},
      {q:"Not only:", parts:["Not only ", " steal it, but he crashed it."], opts:["did he","he did"], a:0, fix:"Not only → DID HE (туслах өмнө)."},
      {q:"No sooner:", parts:["No sooner had they arrived ", " the thief ran."], opts:["than","when"], a:0, fix:"No sooner … THAN."},
      {q:"Rarely:", parts:["Rarely ", " the city felt so unsafe."], opts:["had","the city had"], a:0, fix:"Rarely → HAD (урвуу)."}
    ],
    speak:{ scene:'Гэмт хэргийн тухай мэдэгдэл', turns:[
      {ruby:"You look shocked. What happened?", pron:"ю лүк шокт. вот хэпнд?", mn:"Цочирдсон харагдаж байна. Юу болов?",
        choices:[{t:"Never have I seen such a serious robbery in this area!",best:true,mn:"Энэ хороололд ийм ноцтой дээрмийг би хэзээ ч үзээгүй!"},{t:"Never I have seen such a serious robbery here!",best:false,fix:"Сөрөг эхэнд → Never HAVE I."}]},
      {ruby:"What exactly did the suspect do?", pron:"вот игзэктли дид зэ саспэкт ду?", mn:"Сэжигтэн яг юу хийсэн бэ?",
        choices:[{t:"Not only did he break in, but he also threatened a witness.",best:true,mn:"Тэр байшинд халдаад зогсохгүй гэрчийг айлгасан."},{t:"Not only he broke in, but he threatened a witness.",best:false,fix:"Not only → DID HE break in."}]},
      {ruby:"Did the police catch him?", pron:"дид зэ полийс кэч хим?", mn:"Цагдаа түүнийг барив уу?",
        choices:[{t:"Yes! No sooner had they arrived than they arrested him.",best:true,mn:"Тийм! Тэд ирмэгц түүнийг баривчилсан."},{t:"Yes! No sooner they arrived when they arrested him.",best:false,fix:"No sooner HAD they arrived THAN..."}]}
    ]}
  },
  {
    id:'b1m7l7', title:"7.7 Санал нэгдэх", level:"B1 · М7",
    blurb:"So do I / Neither can I — тохирох богино хариулт ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: So / Neither / Nor + туслах (санал нэгдэх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өөр хүний санааг богиноор дэмжих — «Би ч бас», «Би ч бас үгүй» гэдгийг зөв хэлэх.<br><br>
        <b>ЭЕРЭГ санаанд нэгдэх → SO + туслах + эзэн:</b>
        <div style="margin:12px 0"><span class="tag">"I agree." — "SO DO I." (Би ч бас)</span><span class="tag">"I can help." — "SO CAN I."</span><span class="tag">"She's tired." — "SO AM I."</span></div>
        <b>СӨРӨГ санаанд нэгдэх → NEITHER/NOR + туслах + эзэн:</b>
        <div style="margin:12px 0"><span class="tag">"I don't agree." — "NEITHER DO I." (Би ч бас үгүй)</span><span class="tag">"I can't come." — "NEITHER CAN I." эсвэл "NOR CAN I."</span></div>
        <b>⚠️ Туслах үг эх өгүүлбэрээс:</b>
        <div style="margin:12px 0"><span class="tag">present → do/does · past → did · be → am/is/are · can → can · have → have</span></div>
        <b>Дараалал урвуу (туслах + эзэн):</b>
        <div style="margin:12px 0"><span class="tag">So do I ✓ (So I do ✗)</span><span class="tag">Neither can I ✓ (Neither I can ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        agree /əˈɡriː/ — санал нийлэх · disagree /ˌdɪsəˈɡriː/ — санал зөрөх · opinion /əˈpɪnjən/ — үзэл бодол<br>
        viewpoint /ˈvjuːpɔɪnt/ — байр суурь · support /səˈpɔːrt/ — дэмжих · oppose /əˈpoʊz/ — эсэргүүцэх<br>
        consensus /kənˈsensəs/ — санал нэгдэл · debate /dɪˈbeɪt/ — мэтгэлцээн · discussion /dɪˈskʌʃn/ — хэлэлцүүлэг<br>
        mutual /ˈmjuːtʃuəl/ — харилцан · unanimous /juˈnænɪməs/ — санал нэгтэй · perspective /pərˈspektɪv/ — өнцөг<br>
        common ground /ˈkɒmən ɡraʊnd/ — нийтлэг цэг · standpoint /ˈstændpɔɪnt/ — байр суурь · argument /ˈɑːrɡjumənt/ — үндэслэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «So I do» ✗ — заавал урвуу: <b>So DO I</b> ✓. Мөн «I don't agree» — «So do I» ✗ (сөрөгт So болохгүй) → <b>Neither do I</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ЭЕРЭГ → SO, СӨРӨГ → NEITHER/NOR, дараа нь туслах + эзэн урвуу».</p>`
    },
    phrases:[
      {en:"\"I support the plan.\" \"So do I.\"", pron:"«ай сэпорт зэ плэн.» «соу ду ай.»", mn:"«Би төслийг дэмжиж байна.» «Би ч бас.»"},
      {en:"\"I can't attend the meeting.\" \"Neither can I.\"", pron:"«ай кант этэнд зэ мийтинг.» «нээзэр кэн ай.»", mn:"«Би хуралд оролцож чадахгүй.» «Би ч бас чадахгүй.»"},
      {en:"\"She's against the reform.\" \"So am I.\"", pron:"«шиз эгэнст зэ риформ.» «соу эм ай.»", mn:"«Тэр шинэчлэлийг эсэргүүцэж байна.» «Би ч бас.»"},
      {en:"\"I don't agree with him.\" \"Nor do I.\"", pron:"«ай доунт эгрий виз хим.» «нор ду ай.»", mn:"«Би түүнтэй санал нийлэхгүй.» «Би ч бас үгүй.»"},
      {en:"We finally reached a mutual consensus.", pron:"ви файнэли рийчт э мьючуэл кэнсэнсэс.", mn:"Бид эцэст нь харилцан санал нэгдэлд хүрсэн."}
    ],
    exercises:[
      {q:"Эерэг нэгдэх:", parts:["\"I agree.\" \"So ", ".\""], opts:["do I","I do"], a:0, fix:"Урвуу → So DO I."},
      {q:"Сөрөг нэгдэх:", parts:["\"I can't go.\" \"Neither ", ".\""], opts:["can I","I can"], a:0, fix:"Урвуу → Neither CAN I."},
      {q:"be үйл:", parts:["\"She's tired.\" \"So ", ".\""], opts:["am I","do I"], a:0, fix:"be → So AM I (do ✗)."},
      {q:"Аль зөв:", parts:["\"I don't support it.\" \"", " do I.\""], opts:["Neither","So"], a:0, fix:"Сөрөг → Neither (So ✗)."}
    ],
    speak:{ scene:'Хурал дээр санал нэгдэх', turns:[
      {ruby:"I really support the new housing plan.", pron:"ай риэли сэпорт зэ ню хаузинг плэн.", mn:"Би шинэ орон сууцны төслийг үнэхээр дэмжиж байна.",
        choices:[{t:"So do I. It's exactly what the city needs.",best:true,mn:"Би ч бас. Энэ бол хотод яг хэрэгтэй зүйл."},{t:"So I do. It's what the city needs.",best:false,fix:"Урвуу → So DO I."}]},
      {ruby:"But I can't attend Friday's discussion.", pron:"бат ай кант этэнд фрайдэйз дискашн.", mn:"Гэхдээ би баасан гарагийн хэлэлцүүлэгт оролцож чадахгүй.",
        choices:[{t:"Neither can I. Could we move it to Monday?",best:true,mn:"Би ч бас чадахгүй. Даваа гараг руу шилжүүлж болох уу?"},{t:"So can I. Could we move it to Monday?",best:false,fix:"Сөрөг → Neither CAN I (So ✗)."}]},
      {ruby:"I don't agree with the mayor's argument, though.", pron:"ай доунт эгрий виз зэ мэйорз аргюмэнт, зоу.", mn:"Гэхдээ би хотын даргын үндэслэлтэй санал нийлэхгүй.",
        choices:[{t:"Nor do I. We should find some common ground first.",best:true,mn:"Би ч бас үгүй. Эхлээд нийтлэг цэг олох хэрэгтэй."},{t:"Neither I do. We should find common ground.",best:false,fix:"Урвуу → Nor/Neither DO I."}]}
    ]}
  },
  {
    id:'b1m7l8', title:"7.8 Онцлох", level:"B1 · М7",
    blurb:"I DO agree — do/does/did-ээр утга чангатгах ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Туслах do/does/did-ээр онцлох (emphatic do)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Эерэг өгүүлбэрийн утгыг <b>чангатган баталгаажуулах</b> — «үнэхээр», «яг үнэндээ» гэсэн хүчтэй өнгө.<br><br>
        <b>Энгийн эерэгт do/does/did нэмнэ (үндсэн үйл үг → V1):</b>
        <div style="margin:12px 0"><span class="tag">I agree. → I DO agree! (үнэхээр санал нийлж байна)</span><span class="tag">She likes it. → She DOES like it.</span><span class="tag">He came. → He DID come.</span></div>
        <b>⚠️ Онцолсны дараа үндсэн үйл үг ЭНГИЙН хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">She DOES like it ✓ (does likes ✗)</span><span class="tag">He DID come ✓ (did came ✗)</span></div>
        <b>Эсэргүүцэл/зөвшөөрлийг илэрхийлэхэд түгээмэл:</b>
        <div style="margin:12px 0"><span class="tag">"You never listen!" — "I DO listen!" (үнэхээр сонсдог)</span><span class="tag">I DO understand your point, but I disagree.</span></div>
        <b>Тушаалыг эелдэг чангатгах:</b>
        <div style="margin:12px 0"><span class="tag">DO sit down! · DO come in! (заавал ор л доо)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        emphasize /ˈemfəsaɪz/ — онцлох · insist /ɪnˈsɪst/ — шаардах · stress /stres/ — чухалчлах<br>
        genuinely /ˈdʒenjuɪnli/ — чин сэтгэлээсээ · absolutely /ˈæbsəluːtli/ — туйлын · truly /ˈtruːli/ — үнэхээр<br>
        indeed /ɪnˈdiːd/ — үнэхээр · certainly /ˈsɜːrtnli/ — гарцаагүй · admit /ədˈmɪt/ — хүлээн зөвшөөрөх<br>
        assure /əˈʃʊər/ — баталж хэлэх · convince /kənˈvɪns/ — итгүүлэх · deny /dɪˈnaɪ/ — үгүйсгэх<br>
        claim /kleɪm/ — мэдэгдэх · honestly /ˈɒnɪstli/ — үнэнээр · strongly /ˈstrɔːŋli/ — хатуу</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She does likes it» ✗ — do/does-ийн дараа <b>V1</b>: «She does LIKE it» ✓. «He did came» ✗ → <b>He did COME</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Утгаа чангатга: цаг-цагт нь do/does/did + V1 (энгийн хэлбэр)».</p>`
    },
    phrases:[
      {en:"I do agree with you on that point.", pron:"ай ду эгрий виз ю он зэт пойнт.", mn:"Тэр зүйл дээр би чамтай үнэхээр санал нийлж байна."},
      {en:"She does care about the community.", pron:"ши даз кээр эбаут зэ кэмьюнити.", mn:"Тэр хамт олонд үнэхээр санаа тавьдаг."},
      {en:"He did warn us about the problem.", pron:"хи дид ворн ас эбаут зэ проблэм.", mn:"Тэр асуудлын талаар биднийг үнэхээр сэрэмжлүүлсэн."},
      {en:"I do understand your point, but I still disagree.", pron:"ай ду андэрстэнд ёр пойнт, бат ай стил дисэгрий.", mn:"Таны саналыг үнэхээр ойлгож байна, гэхдээ санал нийлэхгүй."},
      {en:"Do sit down and make yourself at home.", pron:"ду сит даун энд мэйк ёрсэлф эт хоум.", mn:"Заавал сууж, гэртээ л мэт бай."}
    ],
    exercises:[
      {q:"Онцлох (одоо):", parts:["I ", " agree with you completely."], opts:["do","am"], a:0, fix:"Онцлох → I DO agree."},
      {q:"does + V1:", parts:["She does ", " about the city."], opts:["care","cares"], a:0, fix:"does-ийн дараа → V1 (care)."},
      {q:"did + V1:", parts:["He did ", " us in time."], opts:["warn","warned"], a:0, fix:"did-ийн дараа → V1 (warn)."},
      {q:"Тушаал:", parts:["", " come in, please!"], opts:["Do","Does"], a:0, fix:"Тушаалыг чангатгах → DO come in."}
    ],
    speak:{ scene:'Маргаанд байр сууриа хамгаалах', turns:[
      {ruby:"You clearly don't care about this neighbourhood.", pron:"ю клиэрли доунт кээр эбаут зис нэйбэрхуд.", mn:"Чи энэ хороололд огт хайхрахгүй нь ойлгомжтой.",
        choices:[{t:"That's not true — I do care, deeply!",best:true,mn:"Тийм биш — би үнэхээр, гүнээ санаа тавьдаг!"},{t:"That's not true — I care do, deeply!",best:false,fix:"Дараалал → I DO care."}]},
      {ruby:"But you never supported the clean-up project.", pron:"бат ю нэвэр сэпортид зэ клийн-ап прожэкт.", mn:"Гэхдээ чи цэвэрлэгээний төслийг хэзээ ч дэмжээгүй.",
        choices:[{t:"I did support it — I even organized two events!",best:true,mn:"Би үнэхээр дэмжсэн — бүр хоёр арга хэмжээ зохион байгууллаа!"},{t:"I did supported it — I organized two events!",best:false,fix:"did-ийн дараа → V1 (support)."}]},
      {ruby:"Fine. So do you understand my frustration?", pron:"файн. соу ду ю андэрстэнд май фрастрэйшн?", mn:"За. Тэгэхээр миний бухимдлыг ойлгож байна уу?",
        choices:[{t:"I do understand it, but let's find a solution together.",best:true,mn:"Би үнэхээр ойлгож байна, гэхдээ хамтдаа шийдэл олъё."},{t:"I do understanding it, but let's find a solution.",best:false,fix:"do-ийн дараа → V1 (understand)."}]}
    ]}
  },
  {
    id:'b1m7l9', title:"7.9 Эсрэг тэсрэг", level:"B1 · М7",
    blurb:"although / even though / whereas / while — эсрэгцүүлэх холбоос ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Эсрэгцүүлэх холбоос (although · whereas · while)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр эсрэг санааг холбож, <b>гэсэн хэдий ч / харин</b> гэсэн утга гаргах — хот, хөдөөг харьцуулахад чухал.<br><br>
        <b>1) Although / Though / Even though + БҮТЭН өгүүлбэр (гэсэн хэдий ч):</b>
        <div style="margin:12px 0"><span class="tag">ALTHOUGH the city is crowded, I love it. (хэдий бөглүү ч)</span><span class="tag">EVEN THOUGH it rained, we walked. (бүр илүү хүчтэй)</span></div>
        <b>2) Whereas / While = ХАРИН (хоёр талыг харьцуулах):</b>
        <div style="margin:12px 0"><span class="tag">Cities are busy, WHEREAS villages are quiet. (харин тосгон нам гүм)</span><span class="tag">WHILE the rich have plenty, the poor struggle.</span></div>
        <b>⚠️ although + өгүүлбэр, but ХЭРЭГГҮЙ:</b>
        <div style="margin:12px 0"><span class="tag">Although it's expensive, I'll buy it. ✓</span><span class="tag">Although it's expensive, but I'll buy it. ✗ (although + but давхар ✗)</span></div>
        <b>«though» өгүүлбэрийн төгсгөлд ч болно:</b>
        <div style="margin:12px 0"><span class="tag">It's expensive. I'll buy it, THOUGH. (гэхдээ л)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        contrast /ˈkɒntrɑːst/ — тодотгол зөрүү · difference /ˈdɪfrəns/ — ялгаа · opposite /ˈɒpəzɪt/ — эсрэг<br>
        gap /ɡæp/ — зөрүү · divide /dɪˈvaɪd/ — хагарал · compare /kəmˈpeər/ — харьцуулах<br>
        similarity /ˌsɪməˈlærəti/ — ижил тал · distinction /dɪˈstɪŋkʃn/ — ялгарал · wealthy /ˈwelθi/ — чинээлэг<br>
        deprived /dɪˈpraɪvd/ — гачигдалтай · lifestyle /ˈlaɪfstaɪl/ — амьдралын хэв маяг · convenience /kənˈviːniəns/ — тохь тух<br>
        crowded /ˈkraʊdɪd/ — бөглүү · peaceful /ˈpiːsfl/ — нам гүм · isolated /ˈaɪsəleɪtɪd/ — тусгаарлагдсан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Although it's small, but I like it» ✗ — «although» дээр <b>but давхарлахгүй</b> ✓. Мөн «whereas» дараа бүтэн өгүүлбэр орно, ганц үг биш.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ALTHOUGH = гэсэн хэдий ч (нэг талд саад), WHEREAS/WHILE = харин (хоёр талыг зэрэгцүүлэх)».</p>`
    },
    phrases:[
      {en:"Although the city is crowded, I really love living here.", pron:"олзоу зэ сити из краудид, ай риэли лав ливинг хиэр.", mn:"Хот бөглүү ч би энд амьдрахдаа үнэхээр дуртай."},
      {en:"Cities are convenient, whereas villages are peaceful.", pron:"ситиз а кэнвийниэнт, вээрэз вилэжиз а пийсфул.", mn:"Хот тав тухтай, харин тосгон нам гүм."},
      {en:"Even though it was expensive, we bought the flat.", pron:"ийвэн зоу ит воз икспэнсив, ви бот зэ флэт.", mn:"Үнэтэй байсан ч бид байрыг авсан."},
      {en:"While the rich have plenty, the poor still struggle.", pron:"вайл зэ рич хэв плэнти, зэ пуур стил страгл.", mn:"Баячууд элбэг байхад ядуус хүнд байсаар."},
      {en:"It's a long commute. I don't mind, though.", pron:"итс э лонг кэмьют. ай доунт майнд, зоу.", mn:"Замын зай урт. Гэхдээ би тоохгүй ээ."}
    ],
    exercises:[
      {q:"Гэсэн хэдий ч:", parts:["", " the city is crowded, I love it."], opts:["Although","Whereas"], a:0, fix:"Нэг талд саад → Although."},
      {q:"but давхрахгүй:", parts:["Although it's small, ", " like it."], opts:["I","but I"], a:0, fix:"although + but ✗ → зүгээр «I»."},
      {q:"Харьцуулах:", parts:["Cities are busy, ", " villages are quiet."], opts:["whereas","although"], a:0, fix:"Хоёр талыг зэрэгцүүлэх → whereas."},
      {q:"Илүү хүчтэй:", parts:["", " it rained hard, we walked home."], opts:["Even though","Whereas"], a:0, fix:"Гэсэн хэдий ч (хүчтэй) → Even though."}
    ],
    speak:{ scene:'Хот хөдөөг харьцуулах', turns:[
      {ruby:"Do you prefer city or village life?", pron:"ду ю прифөр сити ор вилэж лайф?", mn:"Хот эсвэл тосгоны амьдралд дуртай юу?",
        choices:[{t:"Although the city is crowded, I love its energy.",best:true,mn:"Хот бөглүү ч би түүний эрч хүчинд дуртай."},{t:"Although the city is crowded, but I love its energy.",best:false,fix:"although + but давхар ✗."}]},
      {ruby:"But isn't village life much calmer?", pron:"бат изнт вилэж лайф мач калмэр?", mn:"Гэхдээ тосгоны амьдрал илүү тайван биш үү?",
        choices:[{t:"True. Cities are convenient, whereas villages are peaceful.",best:true,mn:"Үнэн. Хот тав тухтай, харин тосгон нам гүм."},{t:"True. Cities are convenient, whereas peaceful villages.",best:false,fix:"whereas + бүтэн өгүүлбэр → «villages ARE peaceful»."}]},
      {ruby:"Would you move to the countryside one day?", pron:"вүд ю мув ту зэ кантрисайд ван дэй?", mn:"Хэзээ нэгэн цагт хөдөө нүүх үү?",
        choices:[{t:"Maybe. Even though I love the city, I sometimes want quiet.",best:true,mn:"Магадгүй. Хотод дуртай ч би заримдаа нам гүмийг хүсдэг."},{t:"Maybe. Even though I love the city so I want quiet.",best:false,fix:"Even though + бие даасан гол өгүүлбэр (so ✗)."}]}
    ]}
  },
  {
    id:'b1m7l10', title:"7.10 Модулийн төсөл", level:"B1 · М7",
    blurb:"🏆 Нийгмийн асуудлаар байр сууриа илэрхийлэх",
    rule:{
      h:"Давтлага: B1 Модуль 7-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 7-ийн мэдлэгээ нэгтгэж, нийгмийн асуудлаар <b>үнэмшилтэй байр суурь</b> бүхий B1 өгүүлэмж бүтээх.<br><br>
        <b>Модуль 7-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">It is thought THAT / He is believed TO be ⭐⭐⭐</span><span class="tag">I HAD my car repaired / GOT him TO fix it ⭐⭐</span><span class="tag">the office IN WHICH I work ⭐⭐⭐</span><span class="tag">many of WHOM / some of WHICH ⭐⭐⭐</span><span class="tag">It was traffic THAT… / What we need IS… ⭐⭐⭐</span><span class="tag">NEVER HAVE I / NOT ONLY … BUT ALSO ⭐⭐⭐</span><span class="tag">So do I / Neither can I ⭐⭐</span><span class="tag">I DO agree ⭐⭐</span><span class="tag">Although / whereas / even though ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Нийгмийн асуудлаар эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>It is often thought that big cities offer a better life. Although this is partly true, the reality is more complex. Take my own city, in which nearly three million people live, many of whom moved here recently. What newcomers really need is affordable housing — yet it was greed, not planning, that created the current crisis. Not only have prices doubled, but rents have also risen sharply. The mayor is believed to be working on reforms; whereas the last government did nothing, this one at least admits the problem. I do support their efforts, though I remain cautious. Never have I seen so many empty towers next to overcrowded flats. I recently had my own flat inspected, and got an expert to confirm it was unsafe. "The system is broken," said my neighbour. "So is mine," I replied. What this city truly needs is honesty. Even though change is slow, I believe we can build something fairer.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 нийгмийн эссэгийн 4 давхар: <b>Ерөнхий үзэл</b> (It is thought that…) → <b>Онцлолт</b> (What we need is… / It was … that…) → <b>Эсрэгцүүлэл</b> (Although… whereas…) → <b>Хүчтэй байр суурь</b> (Never have I… / I DO support).</p>`
    },
    phrases:[
      {en:"It is often thought that big cities offer a better life.", pron:"ит из офн сот зэт биг ситиз офэр э бэтэр лайф.", mn:"Том хотууд илүү сайхан амьдрал санал болгодог гэж их үздэг."},
      {en:"What this city truly needs is honesty and planning.", pron:"вот зис сити трули нийдз из онэсти энд плэннинг.", mn:"Энэ хотод үнэхээр хэрэгтэй нь үнэнч байдал ба төлөвлөлт."},
      {en:"Never have I seen so many empty towers.", pron:"нэвэр хэв ай сийн соу мэни эмпти тауэрз.", mn:"Ийм олон хоосон цамхаг би хэзээ ч үзээгүй."},
      {en:"I got an expert to confirm the flat was unsafe.", pron:"ай гот эн экспөрт ту кэнфөрм зэ флэт воз ансэйф.", mn:"Байр аюултай гэдгийг мэргэжилтнээр батлуулсан."},
      {en:"Even though change is slow, we can build something fairer.", pron:"ийвэн зоу чэйнж из слоу, ви кэн билд самсинг фээрэр.", mn:"Өөрчлөлт удаан ч бид илүү шударга зүйл бүтээж чадна."}
    ],
    exercises:[
      {q:"Давтлага (идэвхгүй):", parts:["It is thought ", " the city is unfair."], opts:["that","to"], a:0, fix:"It is thought THAT + өгүүлбэр."},
      {q:"Давтлага (What-cleft):", parts:["What the city needs ", " more housing."], opts:["is","are"], a:0, fix:"What… → IS."},
      {q:"Давтлага (урвуу):", parts:["Never ", " seen so many empty flats."], opts:["have I","I have"], a:0, fix:"Сөрөг эхэнд → HAVE I."},
      {q:"Давтлага (эсрэгцүүлэл):", parts:["", " change is slow, I stay hopeful."], opts:["Even though","Whereas"], a:0, fix:"Гэсэн хэдий ч → Even though."}
    ],
    speak:{ scene:'🏆 Төсөл: Нийгмийн асуудлаар байр суурь', turns:[
      {ruby:"Do you think city life is really better?", pron:"ду ю синк сити лайф из риэли бэтэр?", mn:"Хотын амьдрал үнэхээр дээр гэж бодож байна уу?",
        choices:[{t:"It is often thought that it is, although the reality is more complex.",best:true,mn:"Тэгж их үздэг ч бодит байдал илүү нарийн төвөгтэй."},{t:"It is often thought that it is, although but the reality is complex.",best:false,fix:"although + but давхар ✗."}]},
      {ruby:"So what's the main problem in your city?", pron:"соу вотс зэ мэйн проблэм ин ёр сити?", mn:"Тэгэхээр таны хотын гол асуудал юу вэ?",
        choices:[{t:"What we really need is housing — and never have I seen so many empty towers!",best:true,mn:"Үнэхээр хэрэгтэй нь орон сууц — ийм олон хоосон цамхаг би хэзээ ч үзээгүй!"},{t:"What we really need are housing — and never I have seen empty towers!",best:false,fix:"What… IS; Never HAVE I seen."}]},
      {ruby:"Does the new mayor understand this?", pron:"даз зэ ню мэйор андэрстэнд зис?", mn:"Шинэ хотын дарга үүнийг ойлгож байна уу?",
        choices:[{t:"She is believed to understand it, and I do support her reforms.",best:true,mn:"Тэр ойлгодог гэж үздэг, би түүний шинэчлэлийг үнэхээр дэмждэг."},{t:"She is believed that she understands, and I support do her reforms.",best:false,fix:"She is believed TO understand; I DO support."}]}
    ]}
  },
  {
    id:'b1m8l1', title:"8.1 Мэдрэмж", level:"B1 · М8",
    blurb:"I look forward to seeing you — угтвар үгийн дараа -ing ⭐⭐⭐",
    rule:{
      h:"Мэдрэмж: Verb + preposition + -ing (үйл үг + угтвар үг + -ing)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Тодорхой үйл үгс өөрийн <b>тусгай угтвар үгтэй</b> явдаг ба тэр угтвар үгийн дараа үйл үг <b>-ing</b> хэлбэртэй болно.<br><br>
        <b>Verb + preposition + -ing:</b>
        <div style="margin:12px 0"><span class="tag">I INSIST ON PAYING for dinner.</span><span class="tag">She APOLOGIZED FOR BEING late.</span></div>
        <b>4 хамгийн түгээмэл хослол (цээжил!):</b>
        <div style="margin:12px 0"><span class="tag">look forward TO + -ing (тэсэн ядан хүлээх)</span><span class="tag">dream OF + -ing (мөрөөдөх)</span><span class="tag">insist ON + -ing (шаардах)</span><span class="tag">apologize FOR + -ing (уучлалт гуйх)</span></div>
        <b>⚠️ Гол занга:</b> «look forward TO»-ийн «to» нь угтвар үг тул араас нь <b>-ing</b> ирнэ, to-infinitive БИШ:
        <div style="margin:12px 0"><span class="tag">I look forward to SEEING you. (to see ✗)</span><span class="tag">Thank you for HELPING me. (to help ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        feeling /ˈfiːlɪŋ/ — мэдрэмж · emotion /ɪˈmoʊʃn/ — сэтгэл хөдлөл · insist /ɪnˈsɪst/ — шаардах<br>
        apologize /əˈpɒlədʒaɪz/ — уучлалт гуйх · forgive /fərˈɡɪv/ — уучлах · express /ɪkˈspres/ — илэрхийлэх<br>
        admit /ədˈmɪt/ — хүлээн зөвшөөрөх · complain /kəmˈpleɪn/ — гомдоллох · confess /kənˈfes/ — илчлэн хэлэх<br>
        react /riˈækt/ — хариу үзүүлэх · mood /muːd/ — сэтгэлийн байдал · joy /dʒɔɪ/ — баяр хөөр<br>
        sorrow /ˈsɒroʊ/ — гуниг · comfort /ˈkʌmfərt/ — тайвшруулах · sensitive /ˈsensətɪv/ — эмзэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I look forward to see you» ✗ → угтвар үгийн дараа <b>to SEEING</b> ✓. Мөн «She apologized for be late» ✗ → <b>for BEING late</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Угтвар үг харагдвал үйл үг -ing болно» — on/of/for/to бүгд адил.</p>`
    },
    phrases:[
      {en:"I'm looking forward to seeing you again.", pron:"айм лукинг форвард ту сийинг ю эгэйн.", mn:"Чамтай дахин уулзахыг тэсэн ядан хүлээж байна."},
      {en:"She insisted on paying for dinner.", pron:"ши инсистид он пэйинг фор диннэр.", mn:"Тэр оройн хоолны төлбөрийг төлөхийг шаардсан."},
      {en:"He apologized for hurting my feelings.", pron:"хи эположайзд фор хөртинг май филингз.", mn:"Тэр миний сэтгэлийг гомдоосондоо уучлалт гуйсан."},
      {en:"I dream of living by the sea.", pron:"ай дрийм ов ливинг бай зэ сий.", mn:"Би далайн эрэг дээр амьдрахыг мөрөөддөг."},
      {en:"Thank you for listening to me.", pron:"сэнк ю фор лисэнинг ту ми.", mn:"Намайг сонссонд баярлалаа."}
    ],
    exercises:[
      {q:"look forward to:", parts:["I look forward to ", " you."], opts:["seeing","see"], a:0, fix:"to (угтвар үг) → seeing."},
      {q:"insist on:", parts:["She insisted on ", " it herself."], opts:["doing","to do"], a:0, fix:"on + -ing → doing."},
      {q:"apologize for:", parts:["He apologized for ", " late."], opts:["being","be"], a:0, fix:"for + -ing → being."},
      {q:"dream of:", parts:["They dream of ", " abroad."], opts:["travelling","travel"], a:0, fix:"of + -ing → travelling."}
    ],
    speak:{ scene:'Мэдрэмжээ илэрхийлэх', turns:[
      {ruby:"You seem quiet today. What's wrong?", pron:"ю сийм квайэт тудэй. вотс ронг?", mn:"Өнөөдөр чимээгүй байна. Юу болов?",
        choices:[{t:"I feel sad. I keep thinking about failing the exam.",best:true,mn:"Гунигтай байна. Шалгалтад унана гэж бодсоор л байна."},{t:"I feel sad. I keep think about fail the exam.",best:false,fix:"keep + -ing, about + -ing → thinking about failing."}]},
      {ruby:"Don't worry. Are you coming to the party?", pron:"донт ворри. а ю каминг ту зэ парти?", mn:"Санаа зоволтгүй. Найранд ирэх үү?",
        choices:[{t:"Yes, I'm really looking forward to meeting new people.",best:true,mn:"Тийм, шинэ хүмүүстэй танилцахыг тэсэн ядан хүлээж байна."},{t:"Yes, I'm really looking forward to meet new people.",best:false,fix:"look forward TO + -ing → to meeting."}]},
      {ruby:"Perfect. See you tonight!", pron:"пөрфэкт. сий ю тунайт!", mn:"Гоё. Өнөө орой уулзъя!",
        choices:[{t:"I insist on bringing something for everyone!",best:true,mn:"Бүгдэд зориулж ямар нэг юм авчрахыг шаардаж байна!"},{t:"I insist on bring something for everyone!",best:false,fix:"insist ON + -ing → bringing."}]}
    ]}
  },
  {
    id:'b1m8l2', title:"8.2 Зан чанар", level:"B1 · М8",
    blurb:"I'm afraid of / keen on / proud of — тэмдэг нэр + угтвар үг ⭐⭐",
    rule:{
      h:"Зан чанар: Adjective + preposition (тэмдэг нэр + угтвар үг)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хүний зан чанар, мэдрэмжийг тодорхойлохдоо тэмдэг нэрийн араас <b>тогтсон угтвар үг</b> хэрэглэнэ.<br><br>
        <b>Adjective + preposition:</b>
        <div style="margin:12px 0"><span class="tag">I'm PROUD OF my sister.</span><span class="tag">She's AFRAID OF being alone.</span></div>
        <b>4 гол хослол (цээжил!):</b>
        <div style="margin:12px 0"><span class="tag">afraid OF (айх)</span><span class="tag">keen ON (дуртай, шимтдэг)</span><span class="tag">proud OF (бахархах)</span><span class="tag">worried ABOUT (санаа зовох)</span></div>
        <b>Угтвар үгийн дараа нэр эсвэл -ing:</b>
        <div style="margin:12px 0"><span class="tag">good AT keeping secrets</span><span class="tag">interested IN psychology</span><span class="tag">kind TO animals</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        personality /ˌpɜːrsəˈnæləti/ — зан төлөв · character /ˈkærəktər/ — зан чанар · generous /ˈdʒenərəs/ — өгөөмөр<br>
        honest /ˈɒnɪst/ — үнэнч шударга · selfish /ˈselfɪʃ/ — хувиа хичээсэн · patient /ˈpeɪʃnt/ — тэвчээртэй<br>
        shy /ʃaɪ/ — ичимхий · confident /ˈkɒnfɪdənt/ — өөртөө итгэлтэй · arrogant /ˈærəɡənt/ — ихэмсэг<br>
        loyal /ˈlɔɪəl/ — үнэнч · rude /ruːd/ — бүдүүлэг · cheerful /ˈtʃɪərfl/ — хөгжилтэй<br>
        calm /kɑːm/ — тайван · stubborn /ˈstʌbərn/ — зөрүүд · reliable /rɪˈlaɪəbl/ — найдвартай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'm proud for you» ✗ → <b>proud OF you</b> ✓. Мөн «afraid from» ✗ → <b>afraid OF</b> ✓, «keen in» ✗ → <b>keen ON</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Хослол бүрийг ганц ганцаар нь цээжил: proud OF, afraid OF, keen ON, worried ABOUT.</p>`
    },
    phrases:[
      {en:"I'm proud of my little sister.", pron:"айм прауд ов май литл систэр.", mn:"Би дүүгээрээ бахархдаг."},
      {en:"She's afraid of being alone.", pron:"шиз эфрэйд ов бийинг элоун.", mn:"Тэр ганцаараа байхаас айдаг."},
      {en:"He's really keen on photography.", pron:"хиз риэли кийн он фотографи.", mn:"Тэр гэрэл зурагт үнэхээр дуртай."},
      {en:"They're worried about their son.", pron:"зэйр ворид эбаут зэйр сан.", mn:"Тэд хүүгийнхээ талаар санаа зовдог."},
      {en:"Are you good at keeping secrets?", pron:"а ю гүд эт кийпинг сикрэтс?", mn:"Чи нууц хадгалдаг уу?"}
    ],
    exercises:[
      {q:"proud + :", parts:["I'm proud ", " you."], opts:["of","for"], a:0, fix:"proud OF."},
      {q:"afraid + :", parts:["She's afraid ", " making mistakes."], opts:["of","from"], a:0, fix:"afraid OF."},
      {q:"keen + :", parts:["He's keen ", " football."], opts:["on","in"], a:0, fix:"keen ON."},
      {q:"worried + :", parts:["I'm worried ", " the exam."], opts:["about","for"], a:0, fix:"worried ABOUT."}
    ],
    speak:{ scene:'Зан чанараа тодорхойлох', turns:[
      {ruby:"What are you like as a person?", pron:"вот а ю лайк эз э пөрсн?", mn:"Чи ямар зантай хүн бэ?",
        choices:[{t:"I'm quite shy, but I'm keen on meeting new people.",best:true,mn:"Би нэлээд ичимхий, гэхдээ шинэ хүмүүстэй танилцах дуртай."},{t:"I'm quite shy, but I'm keen in meeting new people.",best:false,fix:"keen ON, not keen in."}]},
      {ruby:"Are you afraid of anything?", pron:"а ю эфрэйд ов энисинг?", mn:"Чи ямар нэг зүйлээс айдаг уу?",
        choices:[{t:"Yes, I'm afraid of disappointing my family.",best:true,mn:"Тийм, гэр бүлээ урам хугалахаас айдаг."},{t:"Yes, I'm afraid from disappointing my family.",best:false,fix:"afraid OF, not afraid from."}]},
      {ruby:"What are you most proud of?", pron:"вот а ю моуст прауд ов?", mn:"Чи юугаараа хамгийн их бахархдаг вэ?",
        choices:[{t:"I'm proud of being honest and loyal to my friends.",best:true,mn:"Найзууддаа үнэнч, шударга байдгаараа бахархдаг."},{t:"I'm proud for being honest and loyal to my friends.",best:false,fix:"proud OF, not proud for."}]}
    ]}
  },
  {
    id:'b1m8l3', title:"8.3 Асуудал шийдэх", level:"B1 · М8",
    blurb:"the reason for / solution to — нэр үг + угтвар үг ⭐⭐",
    rule:{
      h:"Асуудал шийдэх: Noun + preposition (нэр үг + угтвар үг)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Асуудал, зөрчлийн тухай ярихад тодорхой <b>нэр үгс тогтсон угтвар үгтэй</b> байдаг.<br><br>
        <b>Noun + preposition:</b>
        <div style="margin:12px 0"><span class="tag">the REASON FOR his silence</span><span class="tag">a SOLUTION TO the problem</span></div>
        <b>4 гол хослол (цээжил!):</b>
        <div style="margin:12px 0"><span class="tag">reason FOR (шалтгаан)</span><span class="tag">solution TO (шийдэл)</span><span class="tag">increase IN (өсөлт)</span><span class="tag">need FOR (хэрэгцээ)</span></div>
        <b>Бусад хэрэгтэй хослол:</b>
        <div style="margin:12px 0"><span class="tag">cause OF (учир шалтгаан)</span><span class="tag">effect ON (нөлөө)</span><span class="tag">attitude TO/TOWARDS (хандлага)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        problem /ˈprɒbləm/ — асуудал · issue /ˈɪʃuː/ — асуудал сэдэв · conflict /ˈkɒnflɪkt/ — зөрчил<br>
        misunderstanding /ˌmɪsʌndərˈstændɪŋ/ — үл ойлголцол · argument /ˈɑːrɡjumənt/ — маргаан · compromise /ˈkɒmprəmaɪz/ — буулт хийх<br>
        reason /ˈriːzn/ — шалтгаан · solution /səˈluːʃn/ — шийдэл · cause /kɔːz/ — учир шалтгаан<br>
        effect /ɪˈfekt/ — нөлөө · resolve /rɪˈzɒlv/ — шийдвэрлэх · tension /ˈtenʃn/ — хурцадмал байдал<br>
        blame /bleɪm/ — буруутгах · fault /fɔːlt/ — буруу · attitude /ˈætɪtjuːd/ — хандлага</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the reason of» ✗ → <b>reason FOR</b> ✓. «solution for the problem» ✗ → <b>solution TO</b> ✓. «increase of» ✗ → <b>increase IN</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> reason FOR (юуны төлөө), solution TO (юунд хүрэх), increase IN (юун дотор нэмэгдэх).</p>`
    },
    phrases:[
      {en:"There must be a reason for his silence.", pron:"зэр маст би э рийзн фор хиз сайлэнс.", mn:"Түүний чимээгүй байгаад шалтгаан байгаа биз."},
      {en:"We need to find a solution to this problem.", pron:"ви нийд ту файнд э солюшн ту зис проблэм.", mn:"Бид энэ асуудлын шийдлийг олох хэрэгтэй."},
      {en:"There's been an increase in arguments lately.", pron:"зэрз бийн эн инкрийс ин аргюмэнтс лэйтли.", mn:"Сүүлийн үед маргаан ихсэх болсон."},
      {en:"What's the cause of the conflict?", pron:"вотс зэ коз ов зэ конфликт?", mn:"Зөрчлийн шалтгаан юу вэ?"},
      {en:"There's a real need for honesty.", pron:"зэрз э риэл нийд фор онэсти.", mn:"Үнэнч байх жинхэнэ хэрэгцээ байна."}
    ],
    exercises:[
      {q:"reason + :", parts:["the reason ", " his anger"], opts:["for","of"], a:0, fix:"reason FOR."},
      {q:"solution + :", parts:["a solution ", " the problem"], opts:["to","for"], a:0, fix:"solution TO."},
      {q:"increase + :", parts:["an increase ", " tension"], opts:["in","of"], a:0, fix:"increase IN."},
      {q:"need + :", parts:["the need ", " trust"], opts:["for","to"], a:0, fix:"need FOR."}
    ],
    speak:{ scene:'Асуудлаа шийдвэрлэх', turns:[
      {ruby:"You two have been arguing a lot.", pron:"ю ту хэв бийн аргюинг э лот.", mn:"Та хоёр их маргалдах болжээ.",
        choices:[{t:"I know. There must be a reason for all this tension.",best:true,mn:"Мэдэж байна. Энэ бүх хурцадмал байдалд шалтгаан байгаа."},{t:"I know. There must be a reason of all this tension.",best:false,fix:"reason FOR, not reason of."}]},
      {ruby:"What's the solution?", pron:"вотс зэ солюшн?", mn:"Шийдэл нь юу вэ?",
        choices:[{t:"I think the solution to our problem is honest talking.",best:true,mn:"Асуудлын маань шийдэл бол чин сэтгэлээсээ ярих."},{t:"I think the solution for our problem is honest talking.",best:false,fix:"solution TO, not solution for."}]},
      {ruby:"Do you think it will work?", pron:"ду ю синк ит вил вөрк?", mn:"Болно гэж бодож байна уу?",
        choices:[{t:"Yes. There's a real need for compromise on both sides.",best:true,mn:"Тийм. Хоёр талд буулт хийх жинхэнэ хэрэгцээ байна."},{t:"Yes. There's a real need of compromise on both sides.",best:false,fix:"need FOR, not need of."}]}
    ]}
  },
  {
    id:'b1m8l4', title:"8.4 Сэтгэгдэл", level:"B1 · М8",
    blurb:"I was bored / it was boring — -ed vs -ing тэмдэг нэр ⭐⭐",
    rule:{
      h:"Сэтгэгдэл: -ed vs -ing тэмдэг нэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Мэдрэмжийн тэмдэг нэр 2 хэлбэртэй: <b>-ed</b> нь хүний мэдрэмжийг, <b>-ing</b> нь тэр мэдрэмжийг үүсгэгч юмыг заана.<br><br>
        <b>-ed = хүн ямар мэдрэмжтэй байна:</b>
        <div style="margin:12px 0"><span class="tag">I was BORED. (би уйдсан)</span><span class="tag">She felt EXCITED. (тэр догдолсон)</span></div>
        <b>-ing = юм/хүн ямар нөлөө үзүүлдэг:</b>
        <div style="margin:12px 0"><span class="tag">The film was BORING. (кино уйтгартай)</span><span class="tag">The trip was EXCITING. (аялал сонирхолтой)</span></div>
        <b>Хамт харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">I am INTERESTED because the book is INTERESTING.</span><span class="tag">He was CONFUSED by the confusing rules.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        interested /ˈɪntrəstɪd/ — сонирхсон · boring /ˈbɔːrɪŋ/ — уйтгартай · annoyed /əˈnɔɪd/ — бухимдсан<br>
        amazing /əˈmeɪzɪŋ/ — гайхалтай · disappointed /ˌdɪsəˈpɔɪntɪd/ — урам хугарсан · frustrating /ˈfrʌstreɪtɪŋ/ — сэтгэл дундуур болгом<br>
        excited /ɪkˈsaɪtɪd/ — догдолсон · embarrassed /ɪmˈbærəst/ — ичсэн · surprising /sərˈpraɪzɪŋ/ — гайхмаар<br>
        confused /kənˈfjuːzd/ — эргэлзсэн · exhausted /ɪɡˈzɔːstɪd/ — сульдсан · thrilling /ˈθrɪlɪŋ/ — сэтгэл догдлуулам<br>
        fascinated /ˈfæsɪneɪtɪd/ — сэтгэл татсан · worrying /ˈwʌriɪŋ/ — түгшүүртэй · moved /muːvd/ — сэтгэл хөдөлсөн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I am boring» = «Би уйтгартай хүн» (өөрийгөө муулж байна!). Уйдсан гэвэл <b>I am BORED</b> ✓. «The film was bored» ✗ → <b>boring</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «-ED би дотор мэдэрч байна, -ING тэр юм над руу нөлөөлж байна».</p>`
    },
    phrases:[
      {en:"I was so bored during the meeting.", pron:"ай воз соу борд дюринг зэ миитинг.", mn:"Хурлын үеэр үнэхээр уйдсан."},
      {en:"The film was really boring.", pron:"зэ филм воз риэли боринг.", mn:"Кино үнэхээр уйтгартай байсан."},
      {en:"She felt embarrassed about her mistake.", pron:"ши фэлт имбэрэст эбаут хөр мистэйк.", mn:"Тэр алдаагаа ичиж байсан."},
      {en:"The ending was really moving.", pron:"зэ эндинг воз риэли муувинг.", mn:"Төгсгөл нь үнэхээр сэтгэл хөдөлгөм байсан."},
      {en:"I'm interested in psychology.", pron:"айм интрэстид ин сайколоджи.", mn:"Би сэтгэл судлалыг сонирхдог."}
    ],
    exercises:[
      {q:"хүн (мэдрэмж):", parts:["I was ", " by the long lecture."], opts:["bored","boring"], a:0, fix:"хүн → -ed → bored."},
      {q:"юм (нөлөө):", parts:["The lecture was ", "."], opts:["boring","bored"], a:0, fix:"юм → -ing → boring."},
      {q:"хүн:", parts:["She was ", " about the surprise."], opts:["excited","exciting"], a:0, fix:"хүн → excited."},
      {q:"юм:", parts:["The result was ", "."], opts:["surprising","surprised"], a:0, fix:"юм → surprising."}
    ],
    speak:{ scene:'Сэтгэгдлээ хуваалцах', turns:[
      {ruby:"How was the party last night?", pron:"хау воз зэ парти ласт найт?", mn:"Өчигдрийн найр ямар байв?",
        choices:[{t:"Honestly, it was boring, so I felt bored and left early.",best:true,mn:"Үнэнийг хэлэхэд уйтгартай байсан болохоор уйдаад эрт явсан."},{t:"Honestly, it was bored, so I felt boring and left early.",best:false,fix:"юм → boring, хүн → bored."}]},
      {ruby:"Oh no! Did anything interesting happen?", pron:"оу ноу! дид энисинг интрэстинг хэпэн?", mn:"Аяа! Ямар нэг сонирхолтой юм болов уу?",
        choices:[{t:"Actually yes, something surprising happened and I was really surprised.",best:true,mn:"Үнэндээ тийм, гайхмаар нэг юм болж, би их гайхсан."},{t:"Actually yes, something surprised happened and I was really surprising.",best:false,fix:"юм → surprising, хүн → surprised."}]},
      {ruby:"Tell me more!", pron:"тэл ми мор!", mn:"Илүү дэлгэрэнгүй яриач!",
        choices:[{t:"My ex showed up. I was so embarrassed! It was an embarrassing moment.",best:true,mn:"Хуучин найз минь ирсэн. Би их ичсэн! Ичмээр агшин байсан."},{t:"My ex showed up. I was so embarrassing! It was an embarrassed moment.",best:false,fix:"хүн → embarrassed, юм/агшин → embarrassing."}]}
    ]}
  },
  {
    id:'b1m8l5', title:"8.5 Хайр сэтгэл", level:"B1 · М8",
    blurb:"so / such / too / enough — хэмжээ ба үр дүн ⭐⭐",
    rule:{
      h:"Хайр сэтгэл: so / such / too / enough (хэмжээ ба үр дүн)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Мэдрэмжийн хүч, үр дагаврыг илэрхийлэх 4 бүтэц.<br><br>
        <b>so + тэмдэг нэр/дайвар үг:</b>
        <div style="margin:12px 0"><span class="tag">She's SO KIND that everyone loves her.</span></div>
        <b>such + (a) + тэмдэг нэр + нэр үг:</b>
        <div style="margin:12px 0"><span class="tag">It was SUCH A ROMANTIC evening.</span></div>
        <b>too + тэмдэг нэр (+ to) = хэт их (сөрөг):</b>
        <div style="margin:12px 0"><span class="tag">He was TOO SHY TO say I love you.</span></div>
        <b>тэмдэг нэр + enough (+ to) = хангалттай:</b>
        <div style="margin:12px 0"><span class="tag">She's OLD ENOUGH TO make her own choices.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        love /lʌv/ — хайр · affection /əˈfekʃn/ — энхрийлэл · romance /ˈroʊmæns/ — романтик хайр<br>
        crush /krʌʃ/ — сэтгэл алдалт · attraction /əˈtrækʃn/ — татал · passion /ˈpæʃn/ — хүсэл тэмүүлэл<br>
        tender /ˈtendər/ — эелдэг зөөлөн · adore /əˈdɔːr/ — шүтэн биширэх · devoted /dɪˈvoʊtɪd/ — үнэнч зүтгэсэн<br>
        fond /fɒnd/ — дурлам · chemistry /ˈkemɪstri/ — татал холбоо · soulmate /ˈsoʊlmeɪt/ — сэтгэлийн хань<br>
        intimacy /ˈɪntɪməsi/ — дотно байдал · cherish /ˈtʃerɪʃ/ — нандигнах · heartbeat /ˈhɑːrtbiːt/ — зүрхний цохилт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «so romantic evening» ✗ → нэр үгтэй бол <b>SUCH A romantic evening</b> ✓. «enough old» ✗ → <b>old ENOUGH</b> ✓ (enough тэмдэг нэрийн ДАРАА).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> so + adj, such + a + adj + нэр, too = хэт (муу), enough = хангалттай (сайн).</p>`
    },
    phrases:[
      {en:"She's so kind that everyone loves her.", pron:"шиз соу кайнд зэт эвривон лавз хөр.", mn:"Тэр маш эелдэг болохоор бүгд түүнд дуртай."},
      {en:"It was such a romantic evening.", pron:"ит воз сач э романтик ийвнинг.", mn:"Тийм романтик орой байлаа."},
      {en:"He was too shy to say I love you.", pron:"хи воз ту шай ту сэй ай лав ю.", mn:"Тэр хайртай гэж хэлэхээс хэтэрхий ичимхий байсан."},
      {en:"She's old enough to make her own choices.", pron:"шиз оулд инаф ту мэйк хөр оун чойсэз.", mn:"Тэр өөрийн сонголтоо хийхээр том болсон."},
      {en:"They're so in love that they never argue.", pron:"зэйр соу ин лав зэт зэй нэвэр аргю.", mn:"Тэд үнэхээр хайр дүүрэн болохоор хэзээ ч маргалддаггүй."}
    ],
    exercises:[
      {q:"so:", parts:["He's ", " kind that I trust him."], opts:["so","such"], a:0, fix:"so + тэмдэг нэр → so kind."},
      {q:"such:", parts:["It was ", " a lovely date."], opts:["such","so"], a:0, fix:"such + a + нэр үг."},
      {q:"too:", parts:["She's ", " shy to speak first."], opts:["too","enough"], a:0, fix:"too + adj + to (хэт)."},
      {q:"enough:", parts:["He's brave ", " to say sorry."], opts:["enough","too"], a:0, fix:"adj + enough (хангалттай)."}
    ],
    speak:{ scene:'Хайрын тухай ярих', turns:[
      {ruby:"You look happy today!", pron:"ю лук хэпи тудэй!", mn:"Өнөөдөр аз жаргалтай харагдаж байна!",
        choices:[{t:"I am! I met such a wonderful person last night.",best:true,mn:"Тийм ээ! Өчигдөр тийм гайхалтай хүнтэй уулзсан."},{t:"I am! I met so wonderful person last night.",best:false,fix:"нэр үгтэй → SUCH A wonderful person."}]},
      {ruby:"Really? Tell me about them.", pron:"риэли? тэл ми эбаут зэм.", mn:"Үнэхээр үү? Түүний тухай яриач.",
        choices:[{t:"She's so kind that I felt comfortable straight away.",best:true,mn:"Тэр маш эелдэг болохоор би тэр даруй чөлөөтэй санагдсан."},{t:"She's such kind that I felt comfortable straight away.",best:false,fix:"нэр үггүй → SO kind."}]},
      {ruby:"Are you going to ask her out?", pron:"а ю гоуинг ту аск хөр аут?", mn:"Түүнийг болзоонд урих уу?",
        choices:[{t:"I want to, but I'm too nervous to call her.",best:true,mn:"Урмаар байгаа ч утсаар ярихаас хэт их сандарч байна."},{t:"I want to, but I'm enough nervous to call her.",best:false,fix:"хэт → TOO nervous to call."}]}
    ]}
  },
  {
    id:'b1m8l6', title:"8.6 Хэрүүл эвлэрэл", level:"B1 · М8",
    blurb:"She told me to stay / asked me to help — дам яриа: тушаал, хүсэлт, зөвлөгөө ⭐⭐⭐",
    rule:{
      h:"Хэрүүл эвлэрэл: Reported speech — tell/ask/advise sb to (дам яриа)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Тушаал, хүсэлт, зөвлөгөөг дам ярианд <b>tell/ask/advise + хэн + TO + үйл үг</b> хэлбэрээр дамжуулна.<br><br>
        <b>Тушаал → told sb TO:</b>
        <div style="margin:12px 0"><span class="tag">"Calm down!" → She TOLD me TO calm down.</span></div>
        <b>Хүсэлт → asked sb TO:</b>
        <div style="margin:12px 0"><span class="tag">"Please help me." → He ASKED me TO help him.</span></div>
        <b>Зөвлөгөө → advised sb TO:</b>
        <div style="margin:12px 0"><span class="tag">"You should rest." → The doctor ADVISED me TO rest.</span></div>
        <b>Үгүйсгэл → NOT TO:</b>
        <div style="margin:12px 0"><span class="tag">"Don't shout." → She told me NOT TO shout.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        quarrel /ˈkwɒrəl/ — хэрүүл · dispute /dɪˈspjuːt/ — маргаан · disagreement /ˌdɪsəˈɡriːmənt/ — санал зөрөлдөөн<br>
        reconcile /ˈrekənsaɪl/ — эвлэрэх · insult /ɪnˈsʌlt/ — доромжлох · offend /əˈfend/ — гомдоох<br>
        resentment /rɪˈzentmənt/ — дур гутал · grudge /ɡrʌdʒ/ — өс хонзон · sincere /sɪnˈsɪər/ — чин сэтгэлийн<br>
        harmony /ˈhɑːrməni/ — эв найрамдал · betray /bɪˈtreɪ/ — урвах · trust /trʌst/ — итгэл<br>
        make up /meɪk ʌp/ — эвлэрэх · sort out /sɔːrt aʊt/ — засаж шийдэх · mend /mend/ — засах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She told me calm down» ✗ → <b>told me TO calm down</b> ✓. «told me to not shout» ✗ → <b>told me NOT TO shout</b> ✓. «said me to» ✗ → tell/ask + хэн ✓ (said нь хэнийг авдаггүй).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «үйл үг + ХЭН + TO + үйл үг» — tell/ask/advise бүгд ижил загвартай.</p>`
    },
    phrases:[
      {en:"She told me to calm down.", pron:"ши толд ми ту кам даун.", mn:"Тэр надад тайвшир гэж хэлсэн."},
      {en:"He asked me to forgive him.", pron:"хи аскт ми ту фөргив хим.", mn:"Тэр намайг уучлаач гэж гуйсан."},
      {en:"The counselor advised us to talk openly.", pron:"зэ каунсэлор эдвайзд ас ту ток оупэнли.", mn:"Зөвлөх бидэнд ил тод ярь гэж зөвлөсөн."},
      {en:"My mother told me not to hold a grudge.", pron:"май мазэр толд ми нот ту холд э гражд.", mn:"Ээж надад өс санаж болохгүй гэж хэлсэн."},
      {en:"They asked us not to interfere.", pron:"зэй аскт ас нот ту интэрфиэр.", mn:"Тэд биднийг бүү оролц гэж гуйсан."}
    ],
    exercises:[
      {q:"told sb to:", parts:["She told me ", " down."], opts:["to sit","sit"], a:0, fix:"told sb TO + үйл үг."},
      {q:"asked sb to:", parts:["He asked me ", " him."], opts:["to help","help"], a:0, fix:"asked sb TO + үйл үг."},
      {q:"advised sb to:", parts:["The doctor advised him ", " more."], opts:["to rest","rest"], a:0, fix:"advised sb TO + үйл үг."},
      {q:"үгүйсгэл:", parts:["They told us ", " shout."], opts:["not to","to not"], a:0, fix:"told sb NOT TO."}
    ],
    speak:{ scene:'Хэрүүл эвлэрэл', turns:[
      {ruby:"Why do you look so upset?", pron:"вай ду ю лук соу апсэт?", mn:"Яагаад тийм гутарсан харагдаж байна вэ?",
        choices:[{t:"My friend told me to apologize, but I did nothing wrong.",best:true,mn:"Найз минь надад уучлалт гуй гэсэн ч би буруу юм хийгээгүй."},{t:"My friend told me apologize, but I did nothing wrong.",best:false,fix:"told me TO apologize."}]},
      {ruby:"What did the teacher say?", pron:"вот дид зэ тийчэр сэй?", mn:"Багш юу гэсэн бэ?",
        choices:[{t:"She advised us to talk calmly and not to shout.",best:true,mn:"Тэр бидэнд тайван ярь, бүү хашгир гэж зөвлөсөн."},{t:"She advised us talk calmly and to not shout.",best:false,fix:"advised us TO talk... NOT TO shout."}]},
      {ruby:"So what will you do now?", pron:"соу вот вил ю ду нау?", mn:"Тэгээд одоо яах вэ?",
        choices:[{t:"He asked me to forgive him, so I think we'll make up.",best:true,mn:"Тэр намайг уучлаач гэсэн болохоор бид эвлэрэх байх."},{t:"He asked me forgive him, so I think we'll make up.",best:false,fix:"asked me TO forgive."}]}
    ]}
  },
  {
    id:'b1m8l7', title:"8.7 Харамсал", level:"B1 · М8",
    blurb:"I wish I had / hadn't / would — харамсал бүх төрөл ⭐⭐⭐",
    rule:{
      h:"Харамсал: wish-ийн бүх 3 төрөл",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ «wish» нь харамсал, хүслийг илэрхийлэх 3 хэлбэртэй.<br><br>
        <b>1. Одоогийн харамсал → wish + past simple:</b>
        <div style="margin:12px 0"><span class="tag">I wish I HAD more time. (одоо цаг алга — харамсаж байна)</span><span class="tag">I wish I WERE braver.</span></div>
        <b>2. Өнгөрсний харамсал → wish + past perfect:</b>
        <div style="margin:12px 0"><span class="tag">I wish I HADN'T SAID those words. (хэлчихсэндээ харамсаж байна)</span></div>
        <b>3. Бухимдал/өөрчлөлт хүсэх → wish + would:</b>
        <div style="margin:12px 0"><span class="tag">I wish you WOULD listen to me. (өөрчлөгдөөсэй гэж хүсэж байна)</span></div>
        <b>Санамж:</b> wish-ийн дараа «I was» биш ихэвчлэн <b>I WERE</b>; ирээдүйн хүсэлд <b>would</b>.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        regret /rɪˈɡret/ — харамсах · remorse /rɪˈmɔːrs/ — гэмшил · guilt /ɡɪlt/ — гэм буруу<br>
        hindsight /ˈhaɪndsaɪt/ — эргэн харах ухаан · longing /ˈlɒŋɪŋ/ — хүсэн тэмүүлэл · nostalgia /nɒˈstældʒə/ — дурсахуй<br>
        yearn /jɜːrn/ — санагалзах · lament /ləˈment/ — гашуудах · mistake /mɪˈsteɪk/ — алдаа<br>
        opportunity /ˌɒpərˈtjuːnəti/ — боломж · sorrowful /ˈsɒroʊfl/ — гунигтай · sigh /saɪ/ — санаа алдах<br>
        wistful /ˈwɪstfl/ — гунигт эмзэглэлтэй · undo /ʌnˈduː/ — буцаах арилгах · ache /eɪk/ — эмзэглэх өвдөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish I didn't say that» (өнгөрсний харамсал) ✗ → <b>I wish I HADN'T SAID that</b> ✓. «I wish you will stop» ✗ → <b>I wish you WOULD stop</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Одоо = 1 алхам ухар (past), Өнгөрсөн = 2 алхам ухар (had + V3), Бусдын үйлдэл = would.</p>`
    },
    phrases:[
      {en:"I wish I had more time for my family.", pron:"ай виш ай хэд мор тайм фор май фэмили.", mn:"Гэр бүлдээ илүү их цаг гаргадаг бол дээ."},
      {en:"I wish I hadn't said those words.", pron:"ай виш ай хэднт сэд зоуз вөрдз.", mn:"Тэр үгсийг хэлээгүй бол дээ."},
      {en:"I wish you would listen to me.", pron:"ай виш ю вүд лисэн ту ми.", mn:"Чи намайг сонсдог бол дээ."},
      {en:"She wishes she could turn back time.", pron:"ши вишэз ши күд төрн бэк тайм.", mn:"Тэр цагийг буцаамаар байгаа гэж хүсдэг."},
      {en:"I wish I had told him the truth.", pron:"ай виш ай хэд толд хим зэ трус.", mn:"Түүнд үнэнийг хэлсэн бол дээ."}
    ],
    exercises:[
      {q:"одоогийн харамсал:", parts:["I wish I ", " more patient."], opts:["were","am"], a:0, fix:"wish + past → were."},
      {q:"өнгөрсний харамсал:", parts:["I wish I ", " that."], opts:["hadn't said","didn't say"], a:0, fix:"wish + past perfect → hadn't said."},
      {q:"would:", parts:["I wish you ", " stop shouting."], opts:["would","will"], a:0, fix:"wish + WOULD."},
      {q:"одоогийн:", parts:["I wish I ", " how to help."], opts:["knew","know"], a:0, fix:"wish + past → knew."}
    ],
    speak:{ scene:'Харамсал илэрхийлэх', turns:[
      {ruby:"You seem down. What's the matter?", pron:"ю сийм даун. вотс зэ мэтэр?", mn:"Гутарсан харагдаж байна. Юу болов?",
        choices:[{t:"I wish I hadn't argued with my best friend.",best:true,mn:"Дотны найзтайгаа хэрэлдээгүй бол дээ."},{t:"I wish I didn't argue with my best friend.",best:false,fix:"өнгөрсний харамсал → wish I HADN'T argued."}]},
      {ruby:"Can't you just talk to her?", pron:"кант ю жаст ток ту хөр?", mn:"Чи түүнтэй яагаад ярьчихдаггүй юм бэ?",
        choices:[{t:"I wish I were braver. I'm too scared to call.",best:true,mn:"Илүү зоригтой бол дээ. Утсаар ярихаас хэт айж байна."},{t:"I wish I am braver. I'm too scared to call.",best:false,fix:"wish + past → I WERE braver."}]},
      {ruby:"She misses you too, you know.", pron:"ши мисэз ю ту, ю ноу.", mn:"Тэр ч бас чамайг санаж байгаа шүү.",
        choices:[{t:"Really? I wish she would call me first.",best:true,mn:"Үнэхээр үү? Тэр эхлээд надруу залгадаг бол дээ."},{t:"Really? I wish she will call me first.",best:false,fix:"wish + WOULD, not will."}]}
    ]}
  },
  {
    id:'b1m8l8', title:"8.8 Чадвар", level:"B1 · М8",
    blurb:"could vs was able to vs managed to — өнгөрсөн чадвар ⭐⭐",
    rule:{
      h:"Чадвар: could vs was able to vs managed to (өнгөрсөн чадвар)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Өнгөрсөн цагийн чадварыг зөв илэрхийлэх.<br><br>
        <b>could = ЕРӨНХИЙ чадвар (байнга чаддаг байсан):</b>
        <div style="margin:12px 0"><span class="tag">When I was young, I COULD run very fast.</span><span class="tag">She COULD speak three languages.</span></div>
        <b>was able to / managed to = ТОДОРХОЙ нэг удаа (хэцүү нөхцөлд) амжилттай:</b>
        <div style="margin:12px 0"><span class="tag">The fire spread, but everyone MANAGED TO escape.</span><span class="tag">Despite the noise, she WAS ABLE TO concentrate.</span></div>
        <b>Үгүйсгэлд → couldn't (аль алинд нь):</b>
        <div style="margin:12px 0"><span class="tag">I COULDN'T sleep last night. (ерөнхий ч, нэг удаа ч болно)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        ability /əˈbɪləti/ — чадвар · manage /ˈmænɪdʒ/ — даван туулах · succeed /səkˈsiːd/ — амжилтад хүрэх<br>
        overcome /ˌoʊvərˈkʌm/ — даван туулах · struggle /ˈstrʌɡl/ — тэмцэх · cope /koʊp/ — тэвчиж даах<br>
        handle /ˈhændl/ — зохицуулах · persevere /ˌpɜːrsəˈvɪər/ — тэвчээртэй тэмүүлэх · determination /dɪˌtɜːrmɪˈneɪʃn/ — эрмэлзэл<br>
        capable /ˈkeɪpəbl/ — чадвартай · talent /ˈtælənt/ — авьяас · strength /streŋθ/ — хүч тэвчээр<br>
        willpower /ˈwɪlpaʊər/ — хүсэл зориг · endure /ɪnˈdjʊər/ — тэсвэрлэх · courage /ˈkʌrɪdʒ/ — зориг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Тодорхой нэг удаагийн амжилтад «could» биш: «I could pass the hard exam» ✗ → <b>I MANAGED TO / WAS ABLE TO pass</b> ✓. Гэвч ерөнхий чадварт <b>could</b> зөв.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Байнга чаддаг байсан → could. Нэг удаа зүтгэж бүтээсэн → managed to / was able to».</p>`
    },
    phrases:[
      {en:"When I was young, I could run very fast.", pron:"вэн ай воз янг, ай күд ран вэри фаст.", mn:"Багадаа маш хурдан гүйж чаддаг байсан."},
      {en:"The fire spread, but everyone managed to escape.", pron:"зэ файэр спрэд, бат эвривон мэниджд ту искэйп.", mn:"Гал тархсан ч бүгд зугтаж чадсан."},
      {en:"She was able to forgive him in the end.", pron:"ши воз эйбл ту фөргив хим ин зэ энд.", mn:"Тэр эцэст нь түүнийг уучилж чадсан."},
      {en:"I couldn't sleep last night.", pron:"ай күднт слийп ласт найт.", mn:"Өчигдөр шөнө унтаж чадаагүй."},
      {en:"After months of effort, he managed to overcome his fear.", pron:"афтэр манс ов эфорт, хи мэниджд ту оувэркам хиз фиэр.", mn:"Хэдэн сарын хүчин чармайлтын эцэст тэр айдсаа даван туулж чадсан."}
    ],
    exercises:[
      {q:"ерөнхий чадвар:", parts:["As a child, I ", " swim well."], opts:["could","managed to"], a:0, fix:"ерөнхий чадвар → could."},
      {q:"нэг удаагийн амжилт:", parts:["The exam was hard, but I ", " pass."], opts:["managed to","could"], a:0, fix:"тодорхой амжилт → managed to."},
      {q:"тодорхой нөхцөл:", parts:["Despite the noise, she ", " concentrate."], opts:["was able to","could"], a:0, fix:"нэг удаа → was able to."},
      {q:"үгүйсгэл:", parts:["I ", " find my keys this morning."], opts:["couldn't","could managed to"], a:0, fix:"couldn't (энгийн үгүйсгэл)."}
    ],
    speak:{ scene:'Чадвараа ярих', turns:[
      {ruby:"Did you use to do sports as a kid?", pron:"дид ю юз ту ду спортс эз э кид?", mn:"Багадаа спорт хийдэг байсан уу?",
        choices:[{t:"Yes, I could swim before I could walk!",best:true,mn:"Тийм, би алхаж сурахаасаа өмнө сэлж чаддаг байсан!"},{t:"Yes, I managed to swim before I managed to walk!",best:false,fix:"ерөнхий чадвар → could swim / could walk."}]},
      {ruby:"The interview sounded stressful. How did it go?", pron:"зэ интэрвью саундид стрэсфл. хау дид ит гоу?", mn:"Ярилцлага хэцүү сонсогдож байна. Яаж болов?",
        choices:[{t:"It was hard, but I managed to stay calm and got the job.",best:true,mn:"Хэцүү байсан ч тайван байж чадаад ажилд орсон."},{t:"It was hard, but I could stay calm and got the job.",best:false,fix:"нэг удаагийн амжилт → managed to stay."}]},
      {ruby:"That takes real courage.", pron:"зэт тэйкс риэл кариж.", mn:"Энэ жинхэнэ зориг шаарддаг.",
        choices:[{t:"Thanks. After a lot of practice, I was able to overcome my fear.",best:true,mn:"Баярлалаа. Их дасгал хийсний эцэст айдсаа даван туулж чадсан."},{t:"Thanks. After a lot of practice, I could overcome my fear.",best:false,fix:"тодорхой амжилт → was able to overcome."}]}
    ]}
  },
  {
    id:'b1m8l9', title:"8.9 Шийдвэр", level:"B1 · М8",
    blurb:"what to do / how to / where to go — асуултын үг + to ⭐⭐",
    rule:{
      h:"Шийдвэр: Question word + to-infinitive (асуултын үг + to)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Асуултын үгийн араас <b>to + үйл үг</b> залгаж «яахаа», «хаана явахаа» гэх мэт бүтэц үүсгэнэ.<br><br>
        <b>Question word + TO + үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">I don't know WHAT TO DO.</span><span class="tag">Tell me HOW TO say sorry.</span><span class="tag">We decided WHERE TO go.</span></div>
        <b>Түгээмэл хэлбэрүүд:</b>
        <div style="margin:12px 0"><span class="tag">what to do (яахаа)</span><span class="tag">how to say (яаж хэлэхээ)</span><span class="tag">who to trust (хэнд итгэхээ)</span><span class="tag">whether to stay (үлдэх эсэхээ)</span></div>
        <b>Санамж:</b> «why» энэ бүтцэд ОРДОГГҮЙ. «whether» ордог, «if» ордоггүй.
        <div style="margin:12px 0"><span class="tag">I'm not sure WHETHER to go. (whether to ✓, if to ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        decision /dɪˈsɪʒn/ — шийдвэр · decide /dɪˈsaɪd/ — шийдэх · choice /tʃɔɪs/ — сонголт<br>
        choose /tʃuːz/ — сонгох · option /ˈɒpʃn/ — хувилбар · hesitate /ˈhezɪteɪt/ — эргэлзэх<br>
        doubt /daʊt/ — эргэлзээ · consider /kənˈsɪdər/ — тунгаах · dilemma /dɪˈlemə/ — бэрх сонголт<br>
        advice /ədˈvaɪs/ — зөвлөгөө · guidance /ˈɡaɪdns/ — чиглүүлэг · opinion /əˈpɪnjən/ — үзэл бодол<br>
        priority /praɪˈɒrəti/ — тэргүүлэх чиглэл · alternative /ɔːlˈtɜːrnətɪv/ — өөр хувилбар · judgment /ˈdʒʌdʒmənt/ — дүгнэлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I don't know what do» ✗ → <b>what TO DO</b> ✓. «how begin» ✗ → <b>how TO begin</b> ✓. «who I ask» ✗ → <b>who TO ask</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Асуултын үг + TO + үйл үг» = богино, эзэнгүй хэлбэр (I don't know WHAT TO do).</p>`
    },
    phrases:[
      {en:"I don't know what to do about it.", pron:"ай донт ноу вот ту ду эбаут ит.", mn:"Үүнийг яах ёстойгоо мэдэхгүй байна."},
      {en:"Can you tell me how to say sorry?", pron:"кэн ю тэл ми хау ту сэй сорри?", mn:"Яаж уучлалт гуйхыг хэлж өгөх үү?"},
      {en:"She wasn't sure whether to stay or leave.", pron:"ши вознт шуэр вэзэр ту стэй ор лийв.", mn:"Тэр үлдэх үү, явах уу гэдгээ мэдэхгүй байсан."},
      {en:"We need to decide where to meet.", pron:"ви нийд ту дисайд вэр ту мийт.", mn:"Бид хаана уулзахаа шийдэх хэрэгтэй."},
      {en:"I don't know who to trust anymore.", pron:"ай донт ноу ху ту траст энимор.", mn:"Хэнд итгэхээ би мэдэхээ больжээ."}
    ],
    exercises:[
      {q:"what to:", parts:["I don't know what ", "."], opts:["to do","do"], a:0, fix:"асуултын үг + TO → what to do."},
      {q:"how to:", parts:["Tell me how ", " him."], opts:["to forgive","forgive"], a:0, fix:"how TO forgive."},
      {q:"where to:", parts:["We decided where ", "."], opts:["to go","we go"], a:0, fix:"where TO go."},
      {q:"whether to:", parts:["She's unsure whether ", " or not."], opts:["to stay","staying"], a:0, fix:"whether TO stay."}
    ],
    speak:{ scene:'Шийдвэр гаргах', turns:[
      {ruby:"You look confused. What's up?", pron:"ю лук кэнфюзд. вотс ап?", mn:"Эргэлзсэн харагдаж байна. Юу болов?",
        choices:[{t:"I can't decide whether to tell her the truth or not.",best:true,mn:"Түүнд үнэнийг хэлэх эсэхээ шийдэж чадахгүй байна."},{t:"I can't decide whether telling her the truth or not.",best:false,fix:"whether TO + үйл үг → to tell."}]},
      {ruby:"That's tricky. Do you know how to start?", pron:"зэтс трики. ду ю ноу хау ту старт?", mn:"Хэцүү юм. Яаж эхлэхээ мэдэж байна уу?",
        choices:[{t:"No, I have no idea how to begin the conversation.",best:true,mn:"Үгүй, яриагаа яаж эхлэхээ огт мэдэхгүй байна."},{t:"No, I have no idea how begin the conversation.",best:false,fix:"how TO begin."}]},
      {ruby:"Maybe ask someone you trust.", pron:"мэйби аск самвон ю траст.", mn:"Итгэдэг хэн нэгнээсээ асуу л даа.",
        choices:[{t:"Good idea, but I don't know who to ask.",best:true,mn:"Сайхан санаа, гэхдээ хэнээс асуухаа мэдэхгүй байна."},{t:"Good idea, but I don't know who I ask.",best:false,fix:"who TO ask."}]}
    ]}
  },
  {
    id:'b1m8l10', title:"8.10 Модулийн төсөл", level:"B1 · М8",
    blurb:"🏆 Харилцааны түүхээ өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 8-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 8-ийн мэдлэгээ нэгтгэж, мэдрэмж ба харилцааны тухай жинхэнэ B1 өгүүлэмж бүтээх.<br><br>
        <b>Модуль 8-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">I look forward TO SEEING you (verb + prep + -ing) ⭐⭐⭐</span><span class="tag">I'm PROUD OF / AFRAID OF (adj + prep) ⭐⭐</span><span class="tag">the REASON FOR / SOLUTION TO (noun + prep) ⭐⭐</span><span class="tag">I was BORED; it was BORING (-ed/-ing) ⭐⭐</span><span class="tag">SO / SUCH / TOO / ENOUGH ⭐⭐</span><span class="tag">She TOLD me TO stay / ASKED me TO help ⭐⭐⭐</span><span class="tag">I WISH I HADN'T said that ⭐⭐⭐</span><span class="tag">could / was able to / MANAGED TO ⭐⭐</span><span class="tag">I don't know WHAT TO DO ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Харилцааны түүх (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Two years ago, I fell out with my best friend. It was such a silly argument that I still feel embarrassed about it. She insisted on being right, and I was too proud to apologize. I wish I hadn't said those cruel words. For months, there was so much tension between us that I didn't know what to do. The real reason for our silence was fear. Finally, my sister advised me to write a letter. At first I couldn't find the words, but I managed to express how sorry I was. I was so nervous about her reply! When she called, she told me to come over, and we made up. Looking back, I'm proud of being brave enough to say sorry. I'm really looking forward to seeing her this weekend.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 харилцааны өгүүлэмжийн 4 давхар: <b>Зөрчил</b> (such a silly argument, insisted on) → <b>Харамсал</b> (I wish I hadn't, too proud to) → <b>Зөвлөгөө ба зүтгэл</b> (advised me to, managed to) → <b>Эвлэрэл ба ирээдүй</b> (made up, looking forward to seeing).</p>`
    },
    phrases:[
      {en:"She insisted on being right.", pron:"ши инсистид он бийинг райт.", mn:"Тэр өөрийгөө зөв гэж шаардсан."},
      {en:"I was too proud to apologize.", pron:"ай воз ту прауд ту эположайз.", mn:"Би уучлалт гуйхаас хэтэрхий бардам байсан."},
      {en:"I wish I hadn't said those words.", pron:"ай виш ай хэднт сэд зоуз вөрдз.", mn:"Тэр үгсийг хэлээгүй бол дээ."},
      {en:"My sister advised me to write a letter.", pron:"май систэр эдвайзд ми ту райт э лэтэр.", mn:"Эгч надад захидал бич гэж зөвлөсөн."},
      {en:"I managed to express how sorry I was.", pron:"ай мэниджд ту икспрэс хау сорри ай воз.", mn:"Хэр их харамсаж байгаагаа илэрхийлж чадсан."}
    ],
    exercises:[
      {q:"Давтлага (verb + prep + -ing):", parts:["I'm looking forward to ", " you."], opts:["seeing","see"], a:0, fix:"to (угтвар үг) → seeing."},
      {q:"Давтлага (reported):", parts:["She told me ", " down."], opts:["to sit","sit"], a:0, fix:"told sb TO + үйл үг."},
      {q:"Давтлага (wish):", parts:["I wish I ", " said that."], opts:["hadn't","didn't"], a:0, fix:"өнгөрсний харамсал → hadn't said."},
      {q:"Давтлага (managed to):", parts:["It was hard, but I ", " apologize."], opts:["managed to","could"], a:0, fix:"тодорхой амжилт → managed to."}
    ],
    speak:{ scene:'🏆 Төсөл: Харилцааны түүх', turns:[
      {ruby:"Tell me about a time you fell out with someone close.", pron:"тэл ми эбаут э тайм ю фэл аут виз самвон клоуз.", mn:"Дотны хүнтэйгээ эвдэрсэн үеийнхээ тухай яриач.",
        choices:[{t:"Two years ago, I had such a silly argument with my best friend that we stopped talking.",best:true,mn:"Хоёр жилийн өмнө дотны найзтайгаа тийм өчүүхэн юмнаас маргалдаад яриагаа больсон."},{t:"Two years ago, I had so silly argument with my best friend that we stopped talking.",best:false,fix:"нэр үгтэй → SUCH A silly argument."}]},
      {ruby:"That sounds painful. What did you do?", pron:"зэт саундз пэйнфл. вот дид ю ду?", mn:"Өвдөлттэй сонсогдож байна. Чи яасан бэ?",
        choices:[{t:"I wish I hadn't said those words. My sister advised me to write to her.",best:true,mn:"Тэр үгсийг хэлээгүй бол дээ. Эгч надад түүн рүү бич гэж зөвлөсөн."},{t:"I wish I didn't say those words. My sister advised me write to her.",best:false,fix:"wish I HADN'T said; advised me TO write."}]},
      {ruby:"And did it work out?", pron:"энд дид ит вөрк аут?", mn:"Тэгээд бүтсэн үү?",
        choices:[{t:"Yes! I managed to apologize, and now I'm looking forward to seeing her again.",best:true,mn:"Тийм! Уучлалт гуйж чадсан, одоо түүнтэй дахин уулзахыг тэсэн ядан хүлээж байна."},{t:"Yes! I could to apologize, and now I'm looking forward to see her again.",best:false,fix:"managed TO apologize; looking forward TO seeing."}]}
    ]}
  },
  {
    id:'b1m9l1', title:"9.1 Худалдан авалт", level:"B1 · М9",
    blurb:"If I had the money, I would buy it — Second Conditional + would/could/might ⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: 2-р нөхцөл + would / could / might (төсөөллийн худалдан авалт)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Одоо/ерөнхийд нь <b>боломжгүй, төсөөллийн</b> мөнгөний нөхцөлийг ярих.<br><br>
        <b>If + Past Simple, would / could / might + үндсэн үйл:</b>
        <div style="margin:12px 0"><span class="tag">If I HAD more money, I WOULD BUY that laptop.</span><span class="tag">If I WON the lottery, I COULD pay off my debts.</span><span class="tag">If it WERE cheaper, I MIGHT buy it.</span></div>
        <b>3 туслах үйлийн ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">would = гарцаагүй хийнэ (100%): I would buy it.</span><span class="tag">could = чадах/боломж: I could afford it.</span><span class="tag">might = магадгүй (50%): I might buy it.</span></div>
        <b>«were» бүх биед</b> (was ✗ албан ёсны хэлбэрт):
        <div style="margin:12px 0"><span class="tag">If I WERE rich, I would travel. (If I was — ярианд болно)</span></div>
        <b>«If I were you» — зөвлөгөө өгөх:</b>
        <div style="margin:12px 0"><span class="tag">If I were you, I would compare the prices first.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        purchase /ˈpɜːrtʃəs/ — худалдан авалт · bargain /ˈbɑːrɡɪn/ — хямдхан юм · discount /ˈdɪskaʊnt/ — хямдрал<br>
        receipt /rɪˈsiːt/ — баримт · refund /ˈriːfʌnd/ — мөнгө буцаалт · afford /əˈfɔːrd/ — хүчрэх<br>
        brand /brænd/ — брэнд · retail /ˈriːteɪl/ — жижиглэн худалдаа · checkout /ˈtʃekaʊt/ — тооцоо хийх цэг<br>
        browse /braʊz/ — сонжих · cashier /kæˈʃɪr/ — кассчин · aisle /aɪl/ — лангууны эгнээ<br>
        trolley /ˈtrɒli/ — сагстай тэргэнцэр · item /ˈaɪtəm/ — бараа · willing /ˈwɪlɪŋ/ — зөвшөөрөх хандлагатай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I will have money, I would buy» ✗ — If талд <b>will</b> ХЭРЭГЛЭХГҮЙ → <b>If I HAD money, I WOULD buy</b> ✓. Мөн «I would buy if I would have» ✗ → зөвхөн нэг талд would.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF тал → өнгөрсөн, WOULD тал → үндсэн үйл». Хоёулаа хийсвэр одоо.</p>`
    },
    phrases:[
      {en:"If I had more money, I would buy that laptop.", pron:"иф ай хэд мор мани, ай вүд бай зэт лэптоп.", mn:"Хэрэв надад илүү мөнгө байсан бол тэр зөөврийн компьютерийг авах байсан."},
      {en:"If it were cheaper, I might buy it today.", pron:"иф ит вөр чийпэр, ай майт бай ит тудэй.", mn:"Хэрэв хямдхан байсан бол өнөөдөр авчих ч байж магадгүй."},
      {en:"If I won the lottery, I could pay off my debts.", pron:"иф ай вон зэ лотэри, ай күд пэй оф май дэтс.", mn:"Хэрэв сугалаа хожвол өрөө төлж чадах байсан."},
      {en:"If I were you, I would compare the prices first.", pron:"иф ай вөр ю, ай вүд кампэр зэ прайсэз фөрст.", mn:"Би чиний оронд байсан бол эхлээд үнийг харьцуулна."},
      {en:"I can't afford it, but I'd love that brand.", pron:"ай кэнт эфорд ит, бат айд лав зэт брэнд.", mn:"Надад хүрэлцэхгүй, гэхдээ тэр брэндэд их дуртай."}
    ],
    exercises:[
      {q:"If тал:", parts:["If I ", " more money, I would buy it."], opts:["had","would have"], a:0, fix:"If талд would ✗ → had."},
      {q:"Магадлал 50%:", parts:["If it were cheaper, I ", " buy it."], opts:["might","will"], a:0, fix:"хийсвэр → might (will ✗)."},
      {q:"were:", parts:["If I ", " you, I'd wait for the sale."], opts:["were","am"], a:0, fix:"If I WERE you (зөвлөгөө)."},
      {q:"Чадвар:", parts:["If I won it, I ", " pay my debts."], opts:["could","can"], a:0, fix:"хийсвэр → could (can ✗)."}
    ],
    speak:{ scene:'Дэлгүүрт төсөөлөн ярих', turns:[
      {ruby:"That new phone looks amazing. Will you buy it?", pron:"зэт ню фоун лүкс эмэйзинг. вил ю бай ит?", mn:"Тэр шинэ утас гоё харагдаж байна. Авах уу?",
        choices:[{t:"If I had enough money, I would buy it right now.",best:true,mn:"Хэрэв хангалттай мөнгөтэй байсан бол яг одоо авах байсан."},{t:"If I will have money, I would buy it now.",best:false,fix:"If I WILL have ✗ → If I HAD money."}]},
      {ruby:"There's a big discount this weekend, though.", pron:"зэрз э биг дискаунт зис викэнд, зоу.", mn:"Гэхдээ энэ амралтын өдрөөр том хямдрал байгаа.",
        choices:[{t:"Really? If it were cheaper, I might buy it after all.",best:true,mn:"Үнэхээр үү? Хямдхан байсан бол эцэст нь авчих ч байж магадгүй."},{t:"Really? If it will be cheaper, I buy it.",best:false,fix:"If it WERE cheaper, I MIGHT buy it."}]},
      {ruby:"What would you do in my place?", pron:"вот вүд ю ду ин май плэйс?", mn:"Чи миний оронд байсан бол яах вэ?",
        choices:[{t:"If I were you, I would compare the prices in a few shops first.",best:true,mn:"Би чиний оронд байсан бол эхлээд хэдэн дэлгүүрийн үнийг харьцуулна."},{t:"If I would be you, I compared the prices.",best:false,fix:"If I WERE you, I WOULD COMPARE."}]}
    ]}
  },
  {
    id:'b1m9l2', title:"9.2 Хэмнэлт", level:"B1 · М9",
    blurb:"I wish I had saved more — Wish / If only + Past Perfect ⭐⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: I wish / if only + Past Perfect (өнгөрсөн шийдвэрт харамсах)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ <b>Өнгөрсөнд хийсэн/хийгээгүй</b> мөнгөний шийдэлд харамсах.<br><br>
        <b>I wish / If only + HAD + V3:</b>
        <div style="margin:12px 0"><span class="tag">I WISH I HAD SAVED more last year.</span><span class="tag">IF ONLY I HADN'T SPENT it all!</span></div>
        <b>2 цагийг ялгаж сур:</b>
        <div style="margin:12px 0"><span class="tag">wish + Past Simple = ОДООгийн харамсал: I wish I had a car. (одоо машингүй)</span><span class="tag">wish + Past Perfect = ӨНГӨРСНИЙ харамсал: I wish I had bought a car. (тэр үед аваагүй)</span></div>
        <b>«If only» — илүү хүчтэй сэтгэл хөдлөл</b> (нэг утга):
        <div style="margin:12px 0"><span class="tag">If only I had listened to my father's advice!</span></div>
        <b>wish + would = бусдын зуршилд гомдох:</b>
        <div style="margin:12px 0"><span class="tag">I wish he would stop wasting money. (одоо/ирээдүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        savings /ˈseɪvɪŋz/ — хуримтлал · thrifty /ˈθrɪfti/ — гамтай · frugal /ˈfruːɡl/ — хэмнэлттэй<br>
        deposit /dɪˈpɒzɪt/ — хадгаламжид хийх · withdraw /wɪðˈdrɔː/ — татан авах · interest /ˈɪntrəst/ — хүү<br>
        account /əˈkaʊnt/ — данс · balance /ˈbæləns/ — үлдэгдэл · nest egg /ˈnest eɡ/ — нөөц хуримтлал<br>
        cut back /kʌt bæk/ — багасгах · waste /weɪst/ — үрэх · splurge /splɜːrdʒ/ — үрэлгэн зарцуулах<br>
        tighten /ˈtaɪtn/ — чангатгах (зардал) · piggy bank /ˈpɪɡi bæŋk/ — гахай хуруу · set aside /set əˈsaɪd/ — тусад нь хадгалах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish I would have saved» ✗ — өнгөрсний харамсалд <b>had + V3</b> → <b>I wish I HAD saved</b> ✓. Мөн «If only I didn't spend» ✗ → <b>If only I HADN'T spent</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өнгөрсний харамсал → WISH + HAD + V3. Нэг цаг ухраа!»</p>`
    },
    phrases:[
      {en:"I wish I had saved more money last year.", pron:"ай виш ай хэд сэйвд мор мани ласт йир.", mn:"Өнгөрсөн жил илүү мөнгө хуримтлуулсан бол."},
      {en:"If only I hadn't spent all my savings.", pron:"иф оунли ай хэднт спэнт ол май сэйвингз.", mn:"Хуримтлалаа бүгдийг үрчихээгүй бол."},
      {en:"I wish I had opened a savings account earlier.", pron:"ай виш ай хэд оупэнд э сэйвингз эккаунт өрлиэр.", mn:"Хадгаламжийн данс эрт нээсэн бол."},
      {en:"If only we had been more frugal on holiday.", pron:"иф оунли ви хэд бийн мор фругал он холидэй.", mn:"Амралтаараа илүү хэмнэлттэй байсан бол."},
      {en:"I wish he would stop wasting his salary.", pron:"ай виш хи вүд стоп вэйстинг хиз сэлэри.", mn:"Тэр цалингаа үрэхээ болиосой гэж хүсэж байна."}
    ],
    exercises:[
      {q:"Өнгөрсний харамсал:", parts:["I wish I ", " more money."], opts:["had saved","saved"], a:0, fix:"өнгөрсний харамсал → had saved."},
      {q:"If only (үгүйсгэл):", parts:["If only I ", " it all."], opts:["hadn't spent","didn't spend"], a:0, fix:"had + V3 → hadn't spent."},
      {q:"Одоогийн харамсал:", parts:["I wish I ", " a savings account now."], opts:["had","had had"], a:0, fix:"одоо → Past Simple: had."},
      {q:"Бусдын зуршил:", parts:["I wish he ", " wasting money."], opts:["would stop","stopped"], a:0, fix:"гомдол → wish + would stop."}
    ],
    speak:{ scene:'Хэмнэлтийн тухай ярих', turns:[
      {ruby:"You look worried. What's wrong?", pron:"ю лүк ворид. вотс ронг?", mn:"Санаа зовсон харагдаж байна. Юу болов?",
        choices:[{t:"I wish I had saved more money last year. Now I'm broke.",best:true,mn:"Өнгөрсөн жил илүү мөнгө хуримтлуулсан бол. Одоо халаасандаа юмгүй боллоо."},{t:"I wish I would save more money last year.",best:false,fix:"I wish I HAD SAVED (өнгөрсний харамсал)."}]},
      {ruby:"What happened to all your savings?", pron:"вот хэпэнд ту ол ёр сэйвингз?", mn:"Бүх хуримтлал чинь яав?",
        choices:[{t:"If only I hadn't spent it all on things I didn't need!",best:true,mn:"Хэрэггүй юман дээр бүгдийг нь үрчихээгүй бол!"},{t:"If only I didn't spend it all.",best:false,fix:"If only I HADN'T SPENT it all."}]},
      {ruby:"So what will you do differently now?", pron:"соу вот вил ю ду дифрэнтли нау?", mn:"Тэгээд одоо юуг өөрөөр хийх вэ?",
        choices:[{t:"I'll set aside part of my salary. I wish I had started this habit years ago.",best:true,mn:"Цалингийнхаа хэсгийг тусад нь хадгална. Энэ зуршлыг олон жилийн өмнө эхлүүлсэн бол."},{t:"I set aside my salary. I wish I would start it years ago.",best:false,fix:"I wish I HAD STARTED this habit years ago."}]}
    ]}
  },
  {
    id:'b1m9l3', title:"9.3 Төлбөр", level:"B1 · М9",
    blurb:"You needn't pay now, but you mustn't be late — needn't / don't have to / mustn't ⭐⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: needn't / don't have to / mustn't (шаардлагагүй ⇄ хориотой)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ <b>«Хэрэггүй»</b> ба <b>«болохгүй»</b>-г эндүүрэхгүй ялгах.<br><br>
        <b>needn't = don't have to = ШААРДЛАГАГҮЙ</b> (хийж болно, гэхдээ хэрэггүй):
        <div style="margin:12px 0"><span class="tag">You NEEDN'T pay now. = You DON'T HAVE TO pay now.</span><span class="tag">We don't have to tip here.</span></div>
        <b>mustn't = ХОРИОТОЙ</b> (болохгүй, хориглосон):
        <div style="margin:12px 0"><span class="tag">You MUSTN'T spend more than you earn.</span><span class="tag">You mustn't share your PIN.</span></div>
        <b>⚠️ Гол ялгаа — эндүүрч болохгүй:</b>
        <div style="margin:12px 0"><span class="tag">don't have to = сонголт чинь (хийж ч болно)</span><span class="tag">mustn't = сонголт БАЙХГҮЙ (хатуу хориотой)</span></div>
        <b>needn't = needn't + үндсэн үйл</b> (to ✗):
        <div style="margin:12px 0"><span class="tag">You needn't PAY. (needn't to pay ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        payment /ˈpeɪmənt/ — төлбөр · invoice /ˈɪnvɔɪs/ — нэхэмжлэх · bill /bɪl/ — тооцоо<br>
        fee /fiː/ — хураамж · installment /ɪnˈstɔːlmənt/ — хэсэгчилсэн төлбөр · transfer /ˈtrænsfɜːr/ — шилжүүлэг<br>
        cash /kæʃ/ — бэлэн мөнгө · due /djuː/ — төлөх ёстой · overdue /ˌoʊvərˈdjuː/ — хугацаа хэтэрсэн<br>
        transaction /trænˈzækʃn/ — гүйлгээ · currency /ˈkɜːrənsi/ — валют · contactless /ˈkɒntæktləs/ — шүргэлгүй төлбөр<br>
        tip /tɪp/ — цайны мөнгө · charge /tʃɑːrdʒ/ — төлбөр авах · settle /ˈsetl/ — төлж барагдуулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «You don't have to share your PIN» (хориотойд буруу!) ✗ → <b>You MUSTN'T share your PIN</b> ✓. Мөн «needn't to pay» ✗ → <b>needn't pay</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MUSTN'T = ХОРИО 🚫. DON'T HAVE TO = ЧИНИЙ СОНГОЛТ ✅».</p>`
    },
    phrases:[
      {en:"You needn't pay the whole bill today.", pron:"ю нийднт пэй зэ хоул бил тудэй.", mn:"Өнөөдөр бүх тооцоог төлөх шаардлагагүй."},
      {en:"You don't have to pay in cash; card is fine.", pron:"ю доунт хэв ту пэй ин кэш; кард из файн.", mn:"Бэлэн мөнгөөр төлөх албагүй; картаар боломжтой."},
      {en:"You mustn't share your PIN with anyone.", pron:"ю масснт шэр ёр пин виз энивоан.", mn:"ПИН кодоо хэнтэй ч хуваалцаж болохгүй."},
      {en:"We mustn't spend more than we earn.", pron:"ви масснт спэнд мор зэн ви өрн.", mn:"Бид олсноосоо илүүг зарцуулж болохгүй."},
      {en:"The invoice is overdue, so we must settle it.", pron:"зэ инвойс из оувөрдю, соу ви маст сэтл ит.", mn:"Нэхэмжлэхийн хугацаа хэтэрсэн тул төлж барагдуулах ёстой."}
    ],
    exercises:[
      {q:"Шаардлагагүй:", parts:["You ", " pay now; next week is fine."], opts:["needn't","mustn't"], a:0, fix:"хэрэггүй → needn't (mustn't = хориотой)."},
      {q:"Хориотой:", parts:["You ", " share your PIN."], opts:["mustn't","don't have to"], a:0, fix:"хориотой → mustn't."},
      {q:"needn't хэлбэр:", parts:["You needn't ", " in cash."], opts:["pay","to pay"], a:0, fix:"needn't + үндсэн үйл (to ✗)."},
      {q:"Сонголт:", parts:["You ", " tip here — it's included."], opts:["don't have to","mustn't"], a:0, fix:"албагүй → don't have to."}
    ],
    speak:{ scene:'Кассан дээр төлбөр хийх', turns:[
      {ruby:"Do I have to pay the full amount right now?", pron:"ду ай хэв ту пэй зэ фүл эмаунт райт нау?", mn:"Би одоо бүтэн дүнг төлөх ёстой юу?",
        choices:[{t:"No, you needn't pay it all today. You can pay in installments.",best:true,mn:"Үгүй, өнөөдөр бүгдийг төлөх шаардлагагүй. Хэсэгчлэн төлж болно."},{t:"No, you mustn't pay it all today.",best:false,fix:"needn't (хэрэггүй), mustn't бол хориотой."}]},
      {ruby:"Can I pay by card, or is it cash only?", pron:"кэн ай пэй бай кард, ор из ит кэш оунли?", mn:"Картаар төлж болох уу, эсвэл зөвхөн бэлэн үү?",
        choices:[{t:"You don't have to pay in cash. Contactless card works fine.",best:true,mn:"Бэлэн мөнгөөр төлөх албагүй. Шүргэлгүй карт боломжтой."},{t:"You mustn't pay in cash.",best:false,fix:"don't have to (сонголт), mustn't бол хориотой."}]},
      {ruby:"Any advice about keeping my account safe?", pron:"эни эдвайс эбаут кийпинг май эккаунт сэйф?", mn:"Дансаа хамгаалах талаар зөвлөгөө байна уу?",
        choices:[{t:"Yes — you mustn't share your PIN with anyone, ever.",best:true,mn:"Тийм — ПИН кодоо хэнтэй ч, хэзээ ч хуваалцаж болохгүй."},{t:"Yes — you don't have to share your PIN with anyone.",best:false,fix:"хатуу хориотой → you MUSTN'T share your PIN."}]}
    ]}
  },
  {
    id:'b1m9l4', title:"9.4 Алдаа", level:"B1 · М9",
    blurb:"I didn't need to pay vs I needn't have paid — Past necessity ⭐⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: didn't need to do ⇄ needn't have done (өнгөрсний шаардлага)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>«хэрэггүй байсан»</b>-ы ХОЁР төрлийг ялгах.<br><br>
        <b>didn't need to do = шаардлагагүй байсан → ихэвчлэн ХИЙГЭЭГҮЙ:</b>
        <div style="margin:12px 0"><span class="tag">I DIDN'T NEED TO PAY the fee, so I kept my money. (төлөөгүй)</span></div>
        <b>needn't have done = ХИЙЧИХСЭН, гэтэл хэрэггүй байсан:</b>
        <div style="margin:12px 0"><span class="tag">I NEEDN'T HAVE PAID so early — now my account is empty. (төлчихсөн, дэмий)</span></div>
        <b>⚠️ Гол ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">didn't need to = хэрэггүй байсан (магадгүй хийгээгүй)</span><span class="tag">needn't have + V3 = ХИЙСЭН, гэтэл дэмий байсан (харамсал)</span></div>
        <b>Харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">I didn't need to bring cash. (авчраагүй — сайн)</span><span class="tag">I needn't have brought cash. (авчирсан — дэмий болсон)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        overcharge /ˌoʊvərˈtʃɑːrdʒ/ — илүү нэхэх · error /ˈerər/ — алдаа · dispute /dɪˈspjuːt/ — маргаан<br>
        complaint /kəmˈpleɪnt/ — гомдол · faulty /ˈfɔːlti/ — гэмтэлтэй · warranty /ˈwɒrənti/ — баталгаа<br>
        exchange /ɪksˈtʃeɪndʒ/ — солих · defect /ˈdiːfekt/ — согог · claim /kleɪm/ — нэхэмжлэл гаргах<br>
        careless /ˈkerləs/ — хайхрамжгүй · double-check /ˈdʌbl tʃek/ — дахин шалгах · correction /kəˈrekʃn/ — засвар<br>
        apologize /əˈpɒlədʒaɪz/ — уучлалт гуйх · reimburse /ˌriːɪmˈbɜːrs/ — нөхөн төлөх · misprice /ˌmɪsˈpraɪs/ — үнийг буруу тавих</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I didn't need to pay so early» (гэтэл ТӨЛЧИХСӨН бол) ✗ → <b>I NEEDN'T HAVE PAID</b> ✓. Мөн «needn't have to pay» ✗ → <b>needn't have PAID</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HAVE + V3 гарвал → ХИЙЧИХСЭН, дэмий байсан харамсал».</p>`
    },
    phrases:[
      {en:"I needn't have paid so early — now I'm short of cash.", pron:"ай нийднт хэв пэйд соу өрли — нау айм шорт оф кэш.", mn:"Тийм эрт төлчихсөн нь дэмий — одоо мөнгө дуташлаа."},
      {en:"I didn't need to bring cash, so I left it at home.", pron:"ай диднт нийд ту бринг кэш, соу ай лэфт ит эт хоум.", mn:"Бэлэн мөнгө авчрах хэрэггүй байсан тул гэртээ орхисон."},
      {en:"They overcharged me, so I made a complaint.", pron:"зэй оувөрчаржд ми, соу ай мэйд э комплэйнт.", mn:"Тэд надаас илүү нэхсэн тул гомдол гаргасан."},
      {en:"You needn't have worried — the warranty covers it.", pron:"ю нийднт хэв ворид — зэ ворэнти каворз ит.", mn:"Санаа зовсон чинь дэмий — баталгаа нь хамардаг юм байна."},
      {en:"I double-checked the receipt and found an error.", pron:"ай даблчект зэ рисийт энд фаунд эн эрор.", mn:"Баримтыг дахин шалгаад алдаа олсон."}
    ],
    exercises:[
      {q:"Хийчихсэн, дэмий:", parts:["I ", " so early — now I'm broke."], opts:["needn't have paid","didn't need to pay"], a:0, fix:"төлчихсөн, дэмий → needn't have paid."},
      {q:"Хэрэггүй байсан (хийгээгүй):", parts:["I ", " cash, so I left it home."], opts:["didn't need to bring","needn't have brought"], a:0, fix:"аваагүй → didn't need to bring."},
      {q:"Хэлбэр:", parts:["You needn't have ", " so much."], opts:["worried","worry"], a:0, fix:"needn't have + V3 → worried."},
      {q:"Утга:", parts:["They overcharged me, so I ", " a complaint."], opts:["made","did"], a:0, fix:"MAKE a complaint."}
    ],
    speak:{ scene:'Дэлгүүрийн алдааг залруулах', turns:[
      {ruby:"Why do you look annoyed with yourself?", pron:"вай ду ю лүк энойд виз ёрсэлф?", mn:"Юунд өөртөө дургүйцсэн харагдана вэ?",
        choices:[{t:"I needn't have paid the full price. There was a discount I missed!",best:true,mn:"Бүтэн үнээр төлчихсөн нь дэмий. Алдчихсан хямдрал байсан юм!"},{t:"I didn't need to pay the full price, so I paid it.",best:false,fix:"төлчихсөн, дэмий → I NEEDN'T HAVE PAID."}]},
      {ruby:"Did you have to bring the receipt too?", pron:"дид ю хэв ту бринг зэ рисийт ту?", mn:"Баримтаа бас авчрах хэрэгтэй байсан уу?",
        choices:[{t:"No, I didn't need to bring it, so I left it at home. They found the record online.",best:true,mn:"Үгүй, авчрах хэрэггүй байсан тул гэртээ орхисон. Тэд онлайнаас бүртгэлийг олсон."},{t:"No, I needn't have brought it, so I left it at home.",best:false,fix:"аваагүй → I DIDN'T NEED TO bring it."}]},
      {ruby:"At least they fixed the overcharge, right?", pron:"эт лийст зэй фикст зэ оувөрчарж, райт?", mn:"Ядаж илүү нэхсэн алдааг засчихсан биз?",
        choices:[{t:"Yes. They apologized and reimbursed me. You needn't have worried on my behalf!",best:true,mn:"Тийм. Уучлалт гуйж, нөхөн төлсөн. Миний өмнөөс санаа зовсон чинь дэмий байсан!"},{t:"Yes. They reimbursed me. You didn't need to worry, but you worried a lot.",best:false,fix:"санаа зовсон, дэмий → you NEEDN'T HAVE WORRIED."}]}
    ]}
  },
  {
    id:'b1m9l5', title:"9.5 Зээл", level:"B1 · М9",
    blurb:"Most of the money, neither of the loans — Quantifiers + of ⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: all/most/some/none of + the; both/either/neither of",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тодорхой бүлгийн <b>«хэдэн хувь»</b>-ийг зөв хэлэх.<br><br>
        <b>all / most / some / none OF + THE (тодорхой бүлэг):</b>
        <div style="margin:12px 0"><span class="tag">MOST OF THE money is gone.</span><span class="tag">NONE OF THE loans were approved.</span><span class="tag">SOME OF MY savings are left.</span></div>
        <b>⚠️ «the» ХЭРЭГТЭЙ, ерөнхийд «of» БАЙХГҮЙ:</b>
        <div style="margin:12px 0"><span class="tag">Most people borrow. (ерөнхий — of ✗)</span><span class="tag">Most OF THE people here borrow. (тодорхой — of the ✓)</span></div>
        <b>both / either / neither OF (2 зүйл):</b>
        <div style="margin:12px 0"><span class="tag">BOTH OF the cards work. (хоёул)</span><span class="tag">EITHER OF the banks is fine. (аль нэг нь)</span><span class="tag">NEITHER OF the loans suits me. (аль нь ч биш)</span></div>
        <b>Ганц/олон тоо:</b>
        <div style="margin:12px 0"><span class="tag">Neither of them IS cheap. (албан ёсоор ганц тоо)</span><span class="tag">None of the fees ARE high. (ярианд олон тоо болно)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        loan /loʊn/ — зээл · credit /ˈkredɪt/ — зээл, кредит · debt /det/ — өр<br>
        borrow /ˈbɒroʊ/ — зээлж авах · lend /lend/ — зээлүүлэх · mortgage /ˈmɔːrɡɪdʒ/ — ипотек<br>
        repay /rɪˈpeɪ/ — эргэн төлөх · lender /ˈlendər/ — зээлдүүлэгч · borrower /ˈbɒroʊər/ — зээлдэгч<br>
        interest rate /ˈɪntrəst reɪt/ — хүүгийн түвшин · default /dɪˈfɔːlt/ — төлбөр төлж чадахгүй болох · principal /ˈprɪnsəpl/ — үндсэн зээл<br>
        installment /ɪnˈstɔːlmənt/ — хэсэгчилсэн төлбөр · approve /əˈpruːv/ — зөвшөөрөх · guarantor /ˌɡærənˈtɔːr/ — батлан даагч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Most of people borrow» ✗ → ерөнхийд <b>Most people</b> ✓ эсвэл тодорхойд <b>Most OF THE people</b> ✓. Мөн «Neither of the loan» ✗ → <b>Neither of the loanS</b> ✓ (олон тоо).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «OF гарвал ард нь THE/my/these — тодорхой бүлэг заавал».</p>`
    },
    phrases:[
      {en:"Most of the money went on repaying the loan.", pron:"моуст оф зэ мани вэнт он рипэйинг зэ лоун.", mn:"Мөнгөний ихэнх нь зээл төлөхөд орсон."},
      {en:"None of the banks approved my application.", pron:"нан оф зэ бэнкс эпрувд май эпликэйшн.", mn:"Ямар ч банк миний хүсэлтийг зөвшөөрөөгүй."},
      {en:"Both of the cards have a high interest rate.", pron:"боуз оф зэ кардз хэв э хай интрэст рэйт.", mn:"Хоёр карт хоёул өндөр хүүтэй."},
      {en:"Neither of the loans suits my budget.", pron:"найзэр оф зэ лоунз сютс май бажит.", mn:"Аль ч зээл миний төсөвт таарахгүй."},
      {en:"Some of my savings will cover the deposit.", pron:"сам оф май сэйвингз вил кавор зэ дипозит.", mn:"Хуримтлалынхаа зарим хэсгээр урьдчилгааг барагдуулна."}
    ],
    exercises:[
      {q:"Тодорхой бүлэг:", parts:["Most ", " money went on the loan."], opts:["of the","of"], a:0, fix:"тодорхой → of THE money."},
      {q:"Ерөнхий:", parts:["", " people borrow at some point."], opts:["Most","Most of"], a:0, fix:"ерөнхий → Most people (of ✗)."},
      {q:"2 зүйл, аль нь ч биш:", parts:["", " of the loans suits me."], opts:["Neither","None"], a:0, fix:"2 зүйл → Neither."},
      {q:"Олон тоо:", parts:["Neither of the ", " is cheap."], opts:["cards","card"], a:0, fix:"neither of the + олон тоо → cards."}
    ],
    speak:{ scene:'Банкинд зээл ярих', turns:[
      {ruby:"How did your loan applications go?", pron:"хау дид ёр лоун эпликэйшнз гоу?", mn:"Зээлийн хүсэлтүүд чинь яаж болов?",
        choices:[{t:"Not well. None of the banks approved my application.",best:true,mn:"Тааруухан. Ямар ч банк хүсэлтийг минь зөвшөөрсөнгүй."},{t:"Not well. None of banks approved my application.",best:false,fix:"None OF THE banks (the хэрэгтэй)."}]},
      {ruby:"You had two offers before, didn't you?", pron:"ю хэд ту офорз бифор, диднт ю?", mn:"Өмнө нь хоёр санал байсан биз дээ?",
        choices:[{t:"Yes, but neither of the loans suited my budget. Both had high rates.",best:true,mn:"Тийм, гэхдээ аль ч зээл төсөвт минь таараагүй. Хоёул өндөр хүүтэй байсан."},{t:"Yes, but neither of the loan suited me. Both of loans had high rates.",best:false,fix:"neither of the loanS; both OF THE loans."}]},
      {ruby:"So what will you use for the deposit?", pron:"соу вот вил ю юз фор зэ дипозит?", mn:"Тэгээд урьдчилгаанд юу ашиглах вэ?",
        choices:[{t:"Some of my savings will cover it, and most of my salary can repay the rest.",best:true,mn:"Хуримтлалынхаа зарим нь барагдуулна, цалингийнхаа ихэнхээр үлдсэнийг төлнө."},{t:"Some of savings will cover it, and most of salary repays the rest.",best:false,fix:"some OF MY savings; most OF MY salary."}]}
    ]}
  },
  {
    id:'b1m9l6', title:"9.6 Төсөв", level:"B1 · М9",
    blurb:"Enough money, plenty of options, a couple of bills — Quantity determiners ⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: enough / plenty of / a great deal of / several / a couple of",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тоо хэмжээг <b>нарийн</b> илэрхийлэх тодорхойлогчид.<br><br>
        <b>enough = хангалттай</b> (нэрийн ӨМНӨ):
        <div style="margin:12px 0"><span class="tag">We have ENOUGH money for the trip.</span><span class="tag">There aren't enough funds.</span></div>
        <b>plenty of = элбэг</b> (тоологдох ба тоологдохгүй):
        <div style="margin:12px 0"><span class="tag">There are PLENTY OF options.</span><span class="tag">We have plenty of time to save.</span></div>
        <b>a great deal of = маш их</b> (зөвхөн ТООЛОГДОХГҮЙ):
        <div style="margin:12px 0"><span class="tag">A GREAT DEAL OF money was wasted.</span><span class="tag">a great deal of debt (a great deal of bills ✗)</span></div>
        <b>several / a couple of = хэд хэдэн / хоёр гурав</b> (зөвхөн ТООЛОГДОХ, ОЛОН тоо):
        <div style="margin:12px 0"><span class="tag">SEVERAL bills arrived. (хэд хэдэн)</span><span class="tag">A COUPLE OF days later, I paid. (хоёр гурав)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        budget /ˈbʌdʒɪt/ — төсөв · allocate /ˈæləkeɪt/ — хуваарилах · expense /ɪkˈspens/ — зардал<br>
        income /ˈɪnkʌm/ — орлого · surplus /ˈsɜːrpləs/ — илүүдэл · deficit /ˈdefɪsɪt/ — алдагдал<br>
        forecast /ˈfɔːrkæst/ — таамаглал · allowance /əˈlaʊəns/ — тэтгэмж, тогтмол мөнгө · essentials /ɪˈsenʃlz/ — зайлшгүй хэрэгцээ<br>
        priority /praɪˈɒrəti/ — тэргүүлэх зүйл · funds /fʌndz/ — сан хөрөнгө · overspend /ˌoʊvərˈspend/ — хэт зарцуулах<br>
        track /træk/ — хянах · monthly /ˈmʌnθli/ — сар бүрийн · leftover /ˈleftoʊvər/ — үлдэгдэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «a great deal of bills» ✗ (тоологдохгүйд л) → <b>a great deal of DEBT</b> ✓ эсвэл <b>SEVERAL bills</b> ✓. Мөн «money enough» ✗ → <b>ENOUGH money</b> ✓ (өмнө нь).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «a great deal of → тоологдохгүй. several / a couple of → тоологдох ОЛОН тоо».</p>`
    },
    phrases:[
      {en:"We have enough money to cover the essentials.", pron:"ви хэв инаф мани ту кавор зэ исэншлз.", mn:"Зайлшгүй хэрэгцээгээ барагдуулах хангалттай мөнгөтэй."},
      {en:"There are plenty of ways to cut your expenses.", pron:"зэр а плэнти оф вэйз ту кат ёр икспэнсэз.", mn:"Зардлаа багасгах олон арга бий."},
      {en:"A great deal of money was wasted last month.", pron:"э грэйт дийл оф мани воз вэйстид ласт манс.", mn:"Өнгөрсөн сард маш их мөнгө үрэгдсэн."},
      {en:"Several bills arrived at the same time.", pron:"сэвэрал билз эрайвд эт зэ сэйм тайм.", mn:"Хэд хэдэн тооцоо нэг зэрэг ирсэн."},
      {en:"A couple of days later, I paid them all.", pron:"э капл оф дэйз лэйтэр, ай пэйд зэм ол.", mn:"Хоёр гурав хоногийн дараа бүгдийг нь төлсөн."}
    ],
    exercises:[
      {q:"Байрлал:", parts:["We have ", " for the trip."], opts:["enough money","money enough"], a:0, fix:"enough нэрийн ӨМНӨ → enough money."},
      {q:"Зөвхөн тоологдохгүй:", parts:["A great deal of ", " was wasted."], opts:["money","bills"], a:0, fix:"a great deal of + тоологдохгүй → money."},
      {q:"Тоологдох, олон:", parts:["", " bills arrived today."], opts:["Several","Much"], a:0, fix:"тоологдох олон → Several."},
      {q:"Элбэг:", parts:["There are ", " options to save."], opts:["plenty of","a great deal of"], a:0, fix:"тоологдох олон тоо → plenty of."}
    ],
    speak:{ scene:'Сарын төсвөө төлөвлөх', turns:[
      {ruby:"Do we have enough money for this month?", pron:"ду ви хэв инаф мани фор зис манс?", mn:"Энэ сард хангалттай мөнгөтэй юу?",
        choices:[{t:"Yes, we have enough money for the essentials, with a small surplus.",best:true,mn:"Тийм, зайлшгүй хэрэгцээнд хангалттай, бага зэрэг илүүдэлтэй."},{t:"Yes, we have money enough for the essentials.",best:false,fix:"ENOUGH money (нэрийн өмнө)."}]},
      {ruby:"But we overspent a lot last month, didn't we?", pron:"бат ви оувөрспэнт э лот ласт манс, диднт ви?", mn:"Гэхдээ өнгөрсөн сард их зарцуулсан биз дээ?",
        choices:[{t:"We did. A great deal of money went on things we didn't really need.",best:true,mn:"Тийм. Их мөнгө үнэндээ хэрэггүй юман дээр орсон."},{t:"We did. A great deal of expenses went on useless things.",best:false,fix:"a great deal of + тоологдохгүй → a great deal of MONEY."}]},
      {ruby:"So how do we fix it this time?", pron:"соу хау ду ви фикс ит зис тайм?", mn:"Тэгвэл энэ удаад яаж засах вэ?",
        choices:[{t:"There are plenty of ways to cut back. Let's track every expense for a couple of weeks.",best:true,mn:"Багасгах олон арга бий. Хоёр гурван долоо хоног зардал бүрээ хянацгаая."},{t:"There is plenty of ways. Let's track expense for a couple of week.",best:false,fix:"plenty of wayS; a couple of weekS (олон тоо)."}]}
    ]}
  },
  {
    id:'b1m9l7', title:"9.7 Үнэ ханш", level:"B1 · М9",
    blurb:"The more you save, the richer you get — Parallel comparatives ⭐⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: the more … the more …; comparative + and + comparative",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хоёр зүйл <b>зэрэгцэн өөрчлөгдөх</b>, эсвэл <b>улам бүр</b> нэмэгдэхийг хэлэх.<br><br>
        <b>The + харьцуулал …, the + харьцуулал … (хоёр зэрэг өөрчлөгдөнө):</b>
        <div style="margin:12px 0"><span class="tag">THE MORE you save, THE RICHER you become.</span><span class="tag">THE HIGHER the demand, THE HIGHER the price.</span></div>
        <b>⚠️ Хоёр талд «the» заавал:</b>
        <div style="margin:12px 0"><span class="tag">The more, the better. (More you save, richer... ✗)</span></div>
        <b>харьцуулал + AND + харьцуулал (улам бүр):</b>
        <div style="margin:12px 0"><span class="tag">Prices are getting HIGHER AND HIGHER.</span><span class="tag">The currency grew WEAKER AND WEAKER.</span></div>
        <b>Урт үгэнд «more and more»:</b>
        <div style="margin:12px 0"><span class="tag">It's becoming MORE AND MORE expensive. (expensiver ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        price /praɪs/ — үнэ · rate /reɪt/ — ханш, түвшин · inflation /ɪnˈfleɪʃn/ — инфляц<br>
        exchange rate /ɪksˈtʃeɪndʒ reɪt/ — ханшийн харьцаа · fluctuate /ˈflʌktʃueɪt/ — хэлбэлзэх · rise /raɪz/ — өсөх<br>
        fall /fɔːl/ — буурах · value /ˈvæljuː/ — үнэ цэнэ · worth /wɜːrθ/ — үнэ хүрэх<br>
        demand /dɪˈmænd/ — эрэлт · supply /səˈplaɪ/ — нийлүүлэлт · soar /sɔːr/ — огцом өсөх<br>
        plunge /plʌndʒ/ — огцом унах · stable /ˈsteɪbl/ — тогтвортой · afford /əˈfɔːrd/ — хүчрэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «More you save, more you have» ✗ — хоёр талд <b>THE</b> → <b>THE more you save, THE more you have</b> ✓. Мөн «more expensiver» ✗ → <b>more and more expensive</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «THE …, THE … = зэрэгцээ. …ER AND …ER = улам бүр».</p>`
    },
    phrases:[
      {en:"The more you save, the richer you become.", pron:"зэ мор ю сэйв, зэ ричэр ю бикам.", mn:"Их хэмнэх тусам чи улам чинээлэг болно."},
      {en:"The higher the demand, the higher the price.", pron:"зэ хайэр зэ диманд, зэ хайэр зэ прайс.", mn:"Эрэлт өндөр байх тусам үнэ өндөр болно."},
      {en:"Prices are getting higher and higher.", pron:"прайсэз а гэттинг хайэр энд хайэр.", mn:"Үнэ улам бүр өсөж байна."},
      {en:"Everything is becoming more and more expensive.", pron:"эвритинг из бикамин мор энд мор икспэнсив.", mn:"Бүх юм улам бүр үнэтэй болж байна."},
      {en:"The exchange rate keeps fluctuating.", pron:"зэ иксчэйнж рэйт кийпс флакчуэйтинг.", mn:"Ханшийн харьцаа байнга хэлбэлзсээр байна."}
    ],
    exercises:[
      {q:"Хоёр талд the:", parts:["", " you save, the richer you get."], opts:["The more","More"], a:0, fix:"хоёр талд the → The more."},
      {q:"Улам бүр:", parts:["Prices are getting ", "."], opts:["higher and higher","high and high"], a:0, fix:"харьцуулал + and → higher and higher."},
      {q:"Урт үг:", parts:["It's becoming ", " expensive."], opts:["more and more","expensiver and expensiver"], a:0, fix:"урт үг → more and more expensive."},
      {q:"Хосолсон:", parts:["The higher the demand, ", " the price."], opts:["the higher","higher"], a:0, fix:"хоёр талд the → the higher."}
    ],
    speak:{ scene:'Ханшийн тухай ярих', turns:[
      {ruby:"Why is everything so expensive lately?", pron:"вай из эвритинг соу икспэнсив лэйтли?", mn:"Сүүлдээ юм болгон яагаад ийм үнэтэй болов?",
        choices:[{t:"Because of inflation. Everything is becoming more and more expensive.",best:true,mn:"Инфляцаас болж байна. Бүх юм улам бүр үнэтэй болж байна."},{t:"Because of inflation. Everything is becoming expensiver and expensiver.",best:false,fix:"урт үг → more and more expensive."}]},
      {ruby:"Is there any point in saving now?", pron:"из зэр эни пойнт ин сэйвинг нау?", mn:"Одоо хэмнэх ямар нэг утга бий юу?",
        choices:[{t:"Of course. The more you save now, the safer you'll be later.",best:true,mn:"Мэдээж. Одоо их хэмнэх тусам хожим илүү аюулгүй байна."},{t:"Of course. More you save now, safer you'll be later.",best:false,fix:"хоёр талд the → THE more..., THE safer."}]},
      {ruby:"But the exchange rate keeps changing so fast!", pron:"бат зэ иксчэйнж рэйт кийпс чэйнжинг соу фаст!", mn:"Гэхдээ ханш ийм хурдан өөрчлөгдсөөр байна шүү дээ!",
        choices:[{t:"True. The more it fluctuates, the harder it is to plan a budget.",best:true,mn:"Үнэн. Илүү хэлбэлзэх тусам төсөв төлөвлөхөд улам хэцүү болно."},{t:"True. More it fluctuates, harder it is to plan.",best:false,fix:"THE more it fluctuates, THE harder it is."}]}
    ]}
  },
  {
    id:'b1m9l8', title:"9.8 Харьцуулалт", level:"B1 · М9",
    blurb:"as cheap as / the same as / different from — Comparison structures ⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: as … as / not so … as / the same as / similar to / different from",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр зүйлийг <b>адил, ялгаатай</b> гэж нарийн харьцуулах.<br><br>
        <b>as + шинж + as = яг адил зэрэг:</b>
        <div style="margin:12px 0"><span class="tag">This shop is AS CHEAP AS that one.</span><span class="tag">It's not AS expensive AS I thought.</span></div>
        <b>not so … as = тийм ч …биш</b> (as-ийн зөөлөн хувилбар):
        <div style="margin:12px 0"><span class="tag">Online prices are NOT SO high AS in shops.</span></div>
        <b>the same AS = яг тэр адил</b> (the same LIKE ✗):
        <div style="margin:12px 0"><span class="tag">The price is THE SAME AS last year.</span></div>
        <b>similar TO / different FROM = төстэй / ялгаатай:</b>
        <div style="margin:12px 0"><span class="tag">This brand is SIMILAR TO that one.</span><span class="tag">The quality is DIFFERENT FROM the cheap version. (different than — ам. ярианд)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        compare /kəmˈper/ — харьцуулах · alternative /ɔːlˈtɜːrnətɪv/ — өөр хувилбар · quality /ˈkwɒləti/ — чанар<br>
        feature /ˈfiːtʃər/ — онцлог · review /rɪˈvjuː/ — сэтгэгдэл, үнэлгээ · rating /ˈreɪtɪŋ/ — оноо<br>
        premium /ˈpriːmiəm/ — дээд зэрэглэлийн · standard /ˈstændərd/ — энгийн зэрэглэл · secondhand /ˌsekəndˈhænd/ — хуучин, хэрэглэсэн<br>
        durable /ˈdjʊərəbl/ — удаан эдэлгээтэй · reliable /rɪˈlaɪəbl/ — найдвартай · affordable /əˈfɔːrdəbl/ — боломжийн үнэтэй<br>
        overpriced /ˌoʊvərˈpraɪst/ — хэт үнэтэй · worthwhile /ˌwɜːrθˈwaɪl/ — үнэ цэнэтэй · value for money /ˈvæljuː fər ˈmʌni/ — үнэдээ тохирсон</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the same LIKE last year» ✗ → <b>the same AS</b> ✓. Мөн «different THAN / TO» ✗ (Британид) → <b>different FROM</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «same → AS. similar → TO. different → FROM».</p>`
    },
    phrases:[
      {en:"This shop is as cheap as the market.", pron:"зис шоп из эз чийп эз зэ маркит.", mn:"Энэ дэлгүүр зах зээлтэй адил хямд."},
      {en:"It's not as expensive as I expected.", pron:"итс нот эз икспэнсив эз ай икспэктид.", mn:"Миний бодсон шиг тийм үнэтэй биш байна."},
      {en:"The price is the same as last year.", pron:"зэ прайс из зэ сэйм эз ласт йир.", mn:"Үнэ өнгөрсөн жилийнхтэй адилхан."},
      {en:"This brand is similar to that one, but cheaper.", pron:"зис брэнд из симилэр ту зэт ван, бат чийпэр.", mn:"Энэ брэнд тэртэй төстэй, гэхдээ хямд."},
      {en:"The quality is quite different from the cheap version.", pron:"зэ кволити из квайт дифрэнт фром зэ чийп вөршн.", mn:"Чанар нь хямд хувилбараас нэлээд ялгаатай."}
    ],
    exercises:[
      {q:"Адил зэрэг:", parts:["This is as cheap ", " that one."], opts:["as","than"], a:0, fix:"as ... AS (than ✗)."},
      {q:"same:", parts:["The price is the same ", " last year."], opts:["as","like"], a:0, fix:"the same AS (like ✗)."},
      {q:"different:", parts:["The quality is different ", " the cheap one."], opts:["from","than"], a:0, fix:"different FROM (Британид)."},
      {q:"similar:", parts:["This brand is similar ", " that one."], opts:["to","with"], a:0, fix:"similar TO."}
    ],
    speak:{ scene:'Хоёр бүтээгдэхүүн харьцуулах', turns:[
      {ruby:"Which laptop should I buy — the premium or the standard one?", pron:"вич лэптоп шүд ай бай — зэ примиэм ор зэ стэндэрд ван?", mn:"Аль зөөврийн компьютерийг авах вэ — дээд зэрэг эсвэл энгийнийг?",
        choices:[{t:"The standard one is almost as good as the premium, but much cheaper.",best:true,mn:"Энгийн нь дээд зэргийнхтэй бараг адил сайн, гэхдээ хамаагүй хямд."},{t:"The standard one is almost as good than the premium.",best:false,fix:"as good AS (than ✗)."}]},
      {ruby:"Are the features really different?", pron:"а зэ фийчорз риэли дифрэнт?", mn:"Онцлогууд нь үнэхээр ялгаатай юу?",
        choices:[{t:"Not much. The design is similar to the premium, only the screen is different from it.",best:true,mn:"Тийм ч их биш. Дизайн нь дээд зэргийнхтэй төстэй, зөвхөн дэлгэц нь ялгаатай."},{t:"Not much. The design is similar with the premium, only the screen is different than it.",best:false,fix:"similar TO; different FROM."}]},
      {ruby:"And the price compared to last year?", pron:"энд зэ прайс кампэрд ту ласт йир?", mn:"Үнэ нь өнгөрсөн жилтэй харьцуулахад?",
        choices:[{t:"Almost the same as last year, so it's still good value for money.",best:true,mn:"Өнгөрсөн жилтэй бараг адилхан, тэгэхээр одоо ч үнэдээ тохирсон хэвээр."},{t:"Almost the same like last year, so it's still good value for money.",best:false,fix:"the same AS last year (like ✗)."}]}
    ]}
  },
  {
    id:'b1m9l9', title:"9.9 Зуршил", level:"B1 · М9",
    blurb:"I used to overspend, now I'm used to saving — used to / be used to / get used to ⭐⭐⭐",
    rule:{
      h:"Мөнгө & Хэрэглээ: used to ⇄ be used to ⇄ get used to (гурвыг зэрэг ялгах)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Гурван төстэй бүтцийг <b>эцэслэн</b> ялгах.<br><br>
        <b>used to + үндсэн үйл = ӨМНӨ нь тийм байсан (одоо үгүй):</b>
        <div style="margin:12px 0"><span class="tag">I USED TO OVERSPEND every month. (одоо болиод байгаа)</span></div>
        <b>be used to + -ing/нэр = ДАССАН, хэвшсэн:</b>
        <div style="margin:12px 0"><span class="tag">I AM USED TO SAVING now. (дассан, амархан)</span><span class="tag">She's used to a tight budget.</span></div>
        <b>get used to + -ing/нэр = ДАСАЖ БАЙГАА (үйл явц):</b>
        <div style="margin:12px 0"><span class="tag">I'm GETTING USED TO BUDGETING. (одоо дасаж байна)</span></div>
        <b>⚠️ ГОЛ ЯЛГАА — «to»-гийн дараа:</b>
        <div style="margin:12px 0"><span class="tag">used TO + үндсэн үйл: used to spend</span><span class="tag">be/get used TO + -ING: used to spendING</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        impulse buy /ˈɪmpʌls baɪ/ — түлхэцээр авах · spender /ˈspendər/ — үрэлгэн хүн · saver /ˈseɪvər/ — хэмнэдэг хүн<br>
        subscription /səbˈskrɪpʃn/ — захиалга · membership /ˈmembərʃɪp/ — гишүүнчлэл · loyalty /ˈlɔɪəlti/ — үнэнч байдал<br>
        cashback /ˈkæʃbæk/ — буцаан олголт · reward /rɪˈwɔːrd/ — урамшуулал · coupon /ˈkuːpɒn/ — хөнгөлөлтийн эрх<br>
        voucher /ˈvaʊtʃər/ — эрхийн бичиг · tempted /ˈtemptɪd/ — уруу татагдсан · resist /rɪˈzɪst/ — тэсэх<br>
        habitual /həˈbɪtʃuəl/ — зуршил болсон · automatic /ˌɔːtəˈmætɪk/ — автомат · mindful /ˈmaɪndfl/ — ухаалаг, анхааралтай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I'm used to overspend» ✗ (дассан утгад -ing хэрэгтэй) → <b>I'm used to overspendING</b> ✓. Мөн «I use to spend» ✗ → <b>I USED to spend</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «used TO + үйл = өмнөх дадал. be/get used TO + ING = дассан/дасах».</p>`
    },
    phrases:[
      {en:"I used to overspend every single month.", pron:"ай юзд ту оувөрспэнд эври сингл манс.", mn:"Би урьд нь сар бүр хэт зарцуулдаг байсан."},
      {en:"Now I'm used to saving a bit every week.", pron:"нау айм юзд ту сэйвинг э бит эври вик.", mn:"Одоо долоо хоног бүр бага зэрэг хэмнэхэд дассан."},
      {en:"I'm still getting used to budgeting carefully.", pron:"айм стил гэттинг юзд ту бажитинг кэрфули.", mn:"Төсвөө нямбай төлөвлөхөд одоо ч дасаж байгаа."},
      {en:"She isn't used to living on a tight budget.", pron:"ши изнт юзд ту ливинг он э тайт бажит.", mn:"Тэр багахан төсвөөр амьдрахад дасаагүй."},
      {en:"I resist impulse buys much more easily now.", pron:"ай ризист импалс байз мач мор ийзили нау.", mn:"Одоо түлхэцээр авахаас хамаагүй амархан тэсдэг болсон."}
    ],
    exercises:[
      {q:"Өмнөх дадал:", parts:["I ", " overspend every month."], opts:["used to","am used to"], a:0, fix:"өмнө нь → used to overspend."},
      {q:"Дассан (+ing):", parts:["Now I'm used to ", " money."], opts:["saving","save"], a:0, fix:"be used to + -ing → saving."},
      {q:"Дасаж байгаа:", parts:["I'm still ", " budgeting."], opts:["getting used to","used to"], a:0, fix:"үйл явц → getting used to."},
      {q:"Хэлбэр:", parts:["She isn't used to ", " on a tight budget."], opts:["living","live"], a:0, fix:"used to + -ing → living."}
    ],
    speak:{ scene:'Мөнгөний зуршлаа өөрчлөх', turns:[
      {ruby:"You seem much better with money these days.", pron:"ю сийм мач бэттэр виз мани зийз дэйз.", mn:"Сүүлдээ мөнгөтэй харьцах чинь хамаагүй дээрдсэн юм шиг.",
        choices:[{t:"Thanks! I used to overspend every month, but not anymore.",best:true,mn:"Баярлалаа! Урьд нь сар бүр хэт зарцуулдаг байсан, гэхдээ одоо тэгэхээ больсон."},{t:"Thanks! I use to overspend every month.",best:false,fix:"өмнөх дадал → I USED TO overspend."}]},
      {ruby:"How did you change such a strong habit?", pron:"хау дид ю чэйнж сач э стронг хэбит?", mn:"Ийм хатуу зуршлыг яаж өөрчилсөн бэ?",
        choices:[{t:"It took time. I'm getting used to budgeting, and now I resist impulse buys.",best:true,mn:"Цаг зарцуулсан. Төсөв төлөвлөхөд дасч байгаа, одоо түлхэцээр авахаас тэсдэг болсон."},{t:"It took time. I'm getting used to budget, and now I resist impulse buys.",best:false,fix:"getting used to + -ing → budgetING."}]},
      {ruby:"Isn't it hard to live on a smaller budget?", pron:"изнт ит хард ту лив он э смолэр бажит?", mn:"Багахан төсвөөр амьдрахад хэцүү биш үү?",
        choices:[{t:"At first, yes. But now I'm used to saving, so it feels natural.",best:true,mn:"Эхэндээ тийм. Гэхдээ одоо хэмнэхэд дассан болохоор жам ёсны юм шиг санагддаг."},{t:"At first, yes. But now I'm used to save, so it feels natural.",best:false,fix:"be used to + -ing → savING."}]}
    ]}
  },
  {
    id:'b1m9l10', title:"9.10 Модулийн төсөл", level:"B1 · М9",
    blurb:"🏆 Хувийн санхүүгийн түүхээ өгүүлэх",
    rule:{
      h:"Давтлага: B1 Модуль 9-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 9-ийн мэдлэгээ нэгтгэж, өөрийн санхүүгийн замналыг B1 түвшинд өгүүлэх.<br><br>
        <b>Модуль 9-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">If I had the money, I WOULD buy it ⭐⭐</span><span class="tag">I WISH I HAD saved more ⭐⭐⭐</span><span class="tag">You NEEDN'T pay / You MUSTN'T overspend ⭐⭐⭐</span><span class="tag">I NEEDN'T HAVE paid so early ⭐⭐⭐</span><span class="tag">NONE OF THE loans suited me ⭐⭐</span><span class="tag">We had ENOUGH / PLENTY OF funds ⭐⭐</span><span class="tag">THE MORE I save, THE better ⭐⭐⭐</span><span class="tag">It's not AS expensive AS before ⭐⭐</span><span class="tag">I USED TO overspend, now I'm USED TO saving ⭐⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Хувийн санхүүгийн түүх (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Two years ago, I was terrible with money. I used to overspend every month, and none of my friends could believe how careless I was. I wish I had learned to budget earlier! If only I hadn't wasted so much on impulse buys. Back then, if I had had a plan, I would have saved a fortune. I remember paying off a loan far too soon — I needn't have paid that early, and afterwards I had almost no cash left. Slowly, things changed. I told myself that I mustn't spend more than I earned, and that I needn't buy every discount I saw. Now I'm used to saving a little every week, and I'm still getting used to tracking every expense. The more I save, the calmer I feel. My budget today is not so tight as it was, but it's very different from my old habits. By this time next year, I will have built a proper nest egg!</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 санхүүгийн өгүүлэмжийн 4 давхар: <b>Өмнөх дадал</b> (used to overspend) → <b>Харамсал</b> (I wish I had, needn't have paid) → <b>Хийсвэр нөхцөл</b> (if I had had, I would have) → <b>Шинэ зуршил & ирээдүй</b> (I'm used to saving, the more..., I will have built).</p>`
    },
    phrases:[
      {en:"I used to overspend, but I wish I had saved instead.", pron:"ай юзд ту оувөрспэнд, бат ай виш ай хэд сэйвд инстэд.", mn:"Урьд нь хэт зарцуулдаг байсан, харин оронд нь хэмнэсэн бол."},
      {en:"If I had had a budget, I would have saved a fortune.", pron:"иф ай хэд хэд э бажит, ай вүд хэв сэйвд э форчун.", mn:"Хэрэв төсөвтэй байсан бол их мөнгө хэмнэх байсан."},
      {en:"I needn't have paid off the loan so early.", pron:"ай нийднт хэв пэйд оф зэ лоун соу өрли.", mn:"Зээлээ тийм эрт төлчихсөн нь дэмий байсан."},
      {en:"Now I'm used to saving, and the more I save, the calmer I feel.", pron:"нау айм юзд ту сэйвинг, энд зэ мор ай сэйв, зэ калмэр ай фийл.", mn:"Одоо хэмнэхэд дассан, их хэмнэх тусам улам тайван санагддаг."},
      {en:"By this time next year, I will have built a nest egg.", pron:"бай зис тайм нэкст йир, ай вил хэв билт э нэст эг.", mn:"Ирэх жилийн энэ үед нөөц хуримтлалтай болчихсон байна."}
    ],
    exercises:[
      {q:"Давтлага (2-р нөхцөл):", parts:["If I ", " the money, I would buy it."], opts:["had","would have"], a:0, fix:"If талд would ✗ → had."},
      {q:"Давтлага (wish + Past Perfect):", parts:["I wish I ", " more last year."], opts:["had saved","saved"], a:0, fix:"өнгөрсний харамсал → had saved."},
      {q:"Давтлага (needn't have):", parts:["I ", " so early — now I'm broke."], opts:["needn't have paid","didn't need to pay"], a:0, fix:"төлчихсөн, дэмий → needn't have paid."},
      {q:"Давтлага (used to):", parts:["Now I'm used to ", " money."], opts:["saving","save"], a:0, fix:"be used to + -ing → saving."}
    ],
    speak:{ scene:'🏆 Төсөл: Хувийн санхүүгийн түүх', turns:[
      {ruby:"Tell me how your relationship with money has changed.", pron:"тэл ми хау ёр рилэйшншип виз мани хэз чэйнжд.", mn:"Мөнгөтэй харьцах чинь хэрхэн өөрчлөгдсөнөө яриач.",
        choices:[{t:"Two years ago I used to overspend every month. I wish I had learned to budget earlier.",best:true,mn:"Хоёр жилийн өмнө сар бүр хэт зарцуулдаг байсан. Төсөвлөхөө эрт сурсан бол."},{t:"Two years ago I use to overspend. I wish I would learn to budget earlier.",best:false,fix:"I USED TO overspend; I wish I HAD LEARNED."}]},
      {ruby:"What was your biggest money mistake?", pron:"вот воз ёр бигэст мани мистэйк?", mn:"Хамгийн том мөнгөний алдаа чинь юу байв?",
        choices:[{t:"I needn't have paid off that loan so early. If I had kept the cash, I would have felt safer.",best:true,mn:"Тэр зээлээ тийм эрт төлчихсөн нь дэмий. Мөнгөө хадгалсан бол илүү аюулгүй байх байсан."},{t:"I didn't need to pay off that loan, so I paid it. If I kept the cash, I would feel safer.",best:false,fix:"needn't have paid; If I HAD KEPT..., I WOULD HAVE FELT."}]},
      {ruby:"And where are you heading now?", pron:"энд вэр а ю хэдинг нау?", mn:"Одоо хаашаа зорьж байна?",
        choices:[{t:"Now I'm used to saving, and the more I save, the calmer I feel. By next year, I'll have built a nest egg!",best:true,mn:"Одоо хэмнэхэд дассан, их хэмнэх тусам улам тайван болдог. Ирэх жил гэхэд нөөц хуримтлалтай болчихсон байна!"},{t:"Now I'm used to save, and more I save, more calm I feel. By next year, I build a nest egg.",best:false,fix:"used to savING; THE more I save, THE calmer; I'LL HAVE BUILT."}]}
    ]}
  },
  {
    id:'b1m10l1', title:"10.1 Ирээдүйн зураг", level:"B1 · М10",
    blurb:"will / going to / will be doing / will have done — Future forms full review ⭐⭐⭐",
    rule:{
      h:"Давталт: Ирээдүйн бүх хэлбэр (нэгдсэн зураг)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B1 капстон эхэлж байна! Ирээдүйн <b>6 хэлбэрийг</b> нэг зурагт нэгтгэе.<br><br>
        <b>Хэзээ алийг нь:</b>
        <div style="margin:12px 0"><span class="tag">will = агшин шийдвэр/таамаг: I'll help you. It'll rain.</span><span class="tag">going to = төлөвлөгөө/шинж тэмдэг: I'm going to study law. Look — it's going to rain!</span></div>
        <div style="margin:12px 0"><span class="tag">present continuous = товлосон уулзалт: I'm meeting her at six.</span><span class="tag">present simple = хуваарь: The train leaves at nine.</span></div>
        <div style="margin:12px 0"><span class="tag">will be doing = тэр мөчид үргэлжилнэ: At 8, I'll be flying to Tokyo.</span><span class="tag">will have done = тэр цэг ГЭХЭД дуусна: By 2030, I'll have graduated.</span></div>
        <b>Гол ялгаа — will vs going to:</b>
        <div style="margin:12px 0"><span class="tag">төлөвлөсөн бол → going to (I'm going to travel next year)</span><span class="tag">яг одоо шийдвэл → will (Ok, I'll go with you!)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        future /ˈfjuːtʃər/ — ирээдүй · plan /plæn/ — төлөвлөгөө · intend /ɪnˈtend/ — санаархах<br>
        predict /prɪˈdɪkt/ — таамаглах · forecast /ˈfɔːrkæst/ — урьдчилан таамаглах · expect /ɪkˈspekt/ — хүлээх<br>
        arrange /əˈreɪndʒ/ — товлох · schedule /ˈskedʒuːl/ — хуваарь · upcoming /ˈʌpkʌmɪŋ/ — удахгүй болох<br>
        eventually /ɪˈventʃuəli/ — эцэст нь · soon /suːn/ — удахгүй · likely /ˈlaɪkli/ — магадгүй<br>
        probably /ˈprɒbəbli/ — магадгүй · decide /dɪˈsaɪd/ — шийдэх · aim /eɪm/ — зорилт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I will study law next year» (аль хэдийн шийдсэн бол) ✗ → <b>I'm going to study law</b> ✓. Мөн «The train will leave at nine» (хуваарь) ✗ → <b>The train leaves at nine</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Толгойд аль хэдийн ТӨЛӨВЛӨЛ байвал going to; ярьж байх зуур ШИЙДвэл will».</p>`
    },
    phrases:[
      {en:"I'm going to study law after school.", pron:"айм гоуинг ту стади ло афтэр скүл.", mn:"Сургуулиа төгсөөд хууль судлах төлөвлөгөөтэй."},
      {en:"Look at those clouds — it's going to rain.", pron:"лүк эт зоуз клаудз — итс гоуинг ту рэйн.", mn:"Тэр үүлсийг хараач — бороо орох нь."},
      {en:"I'm meeting my mentor at six tomorrow.", pron:"айм миитинг май мэнтор эт сикс тумороу.", mn:"Маргааш зургаан цагт зөвлөхтэйгээ уулзана (товлосон)."},
      {en:"By this time next year, I'll have moved abroad.", pron:"бай зис тайм нэкст йир, айл хэв мувд эброуд.", mn:"Ирэх жилийн энэ үед гадаадад нүүчихсэн байна."},
      {en:"Don't worry, I'll help you with your plan.", pron:"доунт варри, айл хэлп ю виз ёр плэн.", mn:"Санаа зовох хэрэггүй, төлөвлөгөөнд чинь тусалъя (агшин шийдвэр)."}
    ],
    exercises:[
      {q:"Төлөвлөгөө:", parts:["I've decided — I ", " medicine next year."], opts:["'m going to study","'ll study"], a:0, fix:"аль хэдийн шийдсэн → going to."},
      {q:"Агшин шийдвэр:", parts:["The phone's ringing! OK, I ", " it."], opts:["'ll get","'m going to get"], a:0, fix:"яг одоо шийдвэл → will."},
      {q:"Хуваарь:", parts:["Hurry — the train ", " at nine."], opts:["leaves","will leave"], a:0, fix:"хуваарь → present simple."},
      {q:"Дуусах цэг:", parts:["By 2030, I ", " my studies."], opts:["'ll have finished","'ll finish"], a:0, fix:"by → will HAVE finished."}
    ],
    speak:{ scene:'Ирээдүйн төлөвлөгөө ярих', turns:[
      {ruby:"What are your plans after graduation?", pron:"вот а ёр плэнз афтэр грэжуэйшн?", mn:"Төгсөөд ямар төлөвлөгөөтэй вэ?",
        choices:[{t:"I'm going to study abroad. I've already applied.",best:true,mn:"Гадаадад суралцах гэж байгаа. Аль хэдийн бүртгүүлчихсэн."},{t:"I will study abroad. I've already applied.",best:false,fix:"аль хэдийн шийдсэн төлөвлөгөө → I'M GOING TO study."}]},
      {ruby:"Wow! Where will you be in five years?", pron:"вау! вэр вил ю би ин файв йирз?", mn:"Өө! 5 жилийн дараа хаана байх бол?",
        choices:[{t:"By then, I'll have finished my master's and I'll be working in London.",best:true,mn:"Тэр үед магистраа дуусгачихсан, Лондонд ажиллаж байх болно."},{t:"By then, I finish my master's and I work in London.",best:false,fix:"BY then → I'LL HAVE FINISHED... I'LL BE WORKING."}]},
      {ruby:"The weather looks bad for your flight.", pron:"зэ вэзэр лүкс бэд фор ёр флайт.", mn:"Нислэгийн тань цаг агаар муу харагдаж байна.",
        choices:[{t:"I know, look at the sky — it's going to storm. But my flight leaves at dawn anyway.",best:true,mn:"Мэдэж байна, тэнгэрийг хараач — шуурга болох нь. Гэхдээ нислэг маань үүрээр хөөрдөг."},{t:"I know, it will storm. But my flight will leave at dawn.",best:false,fix:"шинж тэмдэг → IT'S GOING TO storm; хуваарь → leaves at dawn."}]}
    ]}
  },
  {
    id:'b1m10l2', title:"10.2 Урт зорилго", level:"B1 · М10",
    blurb:"By June I'll have been studying for a year — Future Perfect Continuous ⭐⭐⭐",
    rule:{
      h:"Давталт: Future Perfect Continuous (will have been doing)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Ирээдүйн ямар нэг цэг ГЭХЭД <b>тасралтгүй хэдэн цаг/жил үргэлжилсэн байх</b>.<br><br>
        <b>will have been + үйл үг-ing:</b>
        <div style="margin:12px 0"><span class="tag">By June, I'LL HAVE BEEN STUDYING English for a year.</span><span class="tag">By 2030, she'll have been running the company for a decade.</span></div>
        <b>«FOR» — үргэлжилсэн хугацаа заавал:</b>
        <div style="margin:12px 0"><span class="tag">for a year · for three hours · for a decade · for ages</span></div>
        <b>2 ирээдүйг харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">will have DONE = ҮР ДҮН: By June I'll have written the book.</span><span class="tag">will have BEEN DOING = ҮРГЭЛЖЛЭХ ЯВЦ: By June I'll have been writing it for a year.</span></div>
        <b>«by the time» дараа ОДОО цаг:</b>
        <div style="margin:12px 0"><span class="tag">By the time I GRADUATE, I'll have been studying for four years. (will graduate ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        persevere /ˌpɜːrsəˈvɪər/ — тэвчин зүтгэх · dedication /ˌdedɪˈkeɪʃn/ — үнэнч зүтгэл · endurance /ɪnˈdjʊərəns/ — тэсвэр<br>
        ongoing /ˈɒnɡəʊɪŋ/ — үргэлжилж буй · lifelong /ˈlaɪflɒŋ/ — насан туршийн · progress /ˈprəʊɡres/ — ахиц<br>
        journey /ˈdʒɜːrni/ — аялал (замнал) · pursuit /pərˈsuːt/ — эрэл хайгуул · devote /dɪˈvəʊt/ — зориулах<br>
        strive /straɪv/ — хичээн зүтгэх · patience /ˈpeɪʃns/ — тэвчээр · steadily /ˈstedɪli/ — тогтвортой<br>
        accumulate /əˈkjuːmjəleɪt/ — хуримтлуулах · decade /ˈdekeɪd/ — арван жил · relentless /rɪˈlentləs/ — няцашгүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «By June I will study for a year» ✗ → <b>I'll have been studying</b> ✓. Мөн «By the time I will finish» ✗ → <b>By the time I finish</b> ✓ (одоо цаг!).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BY + FOR хамт бол → WILL HAVE BEEN + ING» — цэг хүртэл үргэлжилсэн явц.</p>`
    },
    phrases:[
      {en:"By June, I'll have been studying English for a year.", pron:"бай Жүн, айл хэв бийн стадиинг Инглиш фор э йир.", mn:"Зургадугаар сар гэхэд англи хэлийг нэг жил үзсэн байна."},
      {en:"By 2030, she'll have been running the company for a decade.", pron:"бай твэнти сөрти, шил хэв бийн раннинг зэ кампэни фор э дэкэйд.", mn:"2030 он гэхэд тэр компанийг арван жил удирдсан байна."},
      {en:"By the time I retire, I'll have been teaching for forty years.", pron:"бай зэ тайм ай ритайр, айл хэв бийн тийчинг фор форти йирз.", mn:"Тэтгэвэрт гарах үед дөчин жил багшилсан байна."},
      {en:"Success takes patience and relentless dedication.", pron:"саксэс тэйкс пэйшнс энд рилэнтлэс дэдикэйшн.", mn:"Амжилтад тэвчээр, няцашгүй зүтгэл хэрэгтэй."},
      {en:"By next month, we'll have been building this app for a year.", pron:"бай нэкст манс, вил хэв бийн билдинг зис эп фор э йир.", mn:"Ирэх сар гэхэд энэ аппыг нэг жил бүтээсэн байна."}
    ],
    exercises:[
      {q:"Явц (FPC):", parts:["By June, I'll ", " for a year."], opts:["have been studying","have studied"], a:0, fix:"for + үргэлжлэх явц → have been studying."},
      {q:"Үр дүн эсрэг:", parts:["By June, I'll ", " the whole book. (дуусгасан)"], opts:["have finished","have been finishing"], a:0, fix:"үр дүн → have finished."},
      {q:"by the time:", parts:["By the time I ", ", I'll have been working here for years."], opts:["leave","will leave"], a:0, fix:"by the time + одоо цаг → leave."},
      {q:"FOR заавал:", parts:["By 2030, she'll have been running it ", " a decade."], opts:["for","since"], a:0, fix:"үргэлжилсэн хугацаа → for."}
    ],
    speak:{ scene:'Урт хугацааны зорилго ярих', turns:[
      {ruby:"You've been learning English for a while, haven't you?", pron:"юв бийн лөрнинг Инглиш фор э вайл, хэвнт ю?", mn:"Чи англи хэл нэлээд удаж сурч байгаа биз дээ?",
        choices:[{t:"Yes! By this summer, I'll have been studying it for three years.",best:true,mn:"Тийм! Энэ зун гэхэд гурван жил үзсэн байна."},{t:"Yes! By this summer, I'll have studied it for three years without stopping.",best:false,fix:"тасралтгүй явцыг онцлох бол → I'LL HAVE BEEN STUDYING."}]},
      {ruby:"That's real dedication. Won't you get tired of it?", pron:"зэтс риэл дэдикэйшн. воунт ю гэт тайрд ов ит?", mn:"Жинхэнэ зүтгэл юм. Залхахгүй юу?",
        choices:[{t:"By the time I finish, I'll have gained so much that it'll all be worth it.",best:true,mn:"Дуусах үед маш их зүйл олж авсан байх тул бүгд үнэ цэнэтэй байх болно."},{t:"By the time I will finish, I gain so much.",best:false,fix:"By the time I FINISH, I'LL HAVE GAINED..."}]},
      {ruby:"What's the secret to keeping going?", pron:"вотс зэ сикрэт ту киипинг гоуинг?", mn:"Тэвчин зүтгэх нууц юу вэ?",
        choices:[{t:"Patience. Progress adds up steadily if you persevere.",best:true,mn:"Тэвчээр. Тэвчин зүтгэвэл ахиц тогтвортой хуримтлагддаг."},{t:"Patience. Progress add up steady if you persevere.",best:false,fix:"Progress ADDS up STEADILY."}]}
    ]}
  },
  {
    id:'b1m10l3', title:"10.3 Хэрэв...", level:"B1 · М10",
    blurb:"0/1/2/3 + mixed conditionals — full review ⭐⭐⭐",
    rule:{
      h:"Давталт: Нөхцөлт өгүүлбэрийн бүх төрөл (0/1/2/3 + холимог)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B1-ийн бүх нөхцөлт өгүүлбэрийг нэг дор нэгтгэе.<br><br>
        <b>4 үндсэн төрөл:</b>
        <div style="margin:12px 0"><span class="tag">0: If you heat ice, it melts. (үнэн үргэлж)</span><span class="tag">1: If it rains, I'll stay home. (бодит ирээдүй)</span></div>
        <div style="margin:12px 0"><span class="tag">2: If I were rich, I would travel. (одоогийн төсөөлөл)</span><span class="tag">3: If I had known, I would have helped. (өнгөрсний харамсал)</span></div>
        <b>Холимог нөхцөл (mixed):</b>
        <div style="margin:12px 0"><span class="tag">Өнгөрсөн→одоо: If I had studied, I would be a doctor now.</span><span class="tag">Одоо→өнгөрсөн: If I were braver, I would have asked her out.</span></div>
        <b>Дүрмийн зүрх:</b> if-талд <b>would ХЭЗЭЭ Ч БАЙХГҮЙ!</b>
        <div style="margin:12px 0"><span class="tag">If I would know ✗ → If I knew ✓</span><span class="tag">If I would have gone ✗ → If I had gone ✓</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        condition /kənˈdɪʃn/ — нөхцөл · suppose /səˈpəʊz/ — тэгэх аваас · imagine /ɪˈmædʒɪn/ — төсөөлөх<br>
        outcome /ˈaʊtkʌm/ — үр дүн · consequence /ˈkɒnsɪkwəns/ — үр дагавар · unless /ənˈles/ — эс бөгөөс<br>
        provided /prəˈvaɪdɪd/ — нөхцөлтэйгээр · otherwise /ˈʌðərwaɪz/ — эс тэгвээс · hypothetical /ˌhaɪpəˈθetɪkl/ — таамгийн<br>
        assume /əˈsjuːm/ — таамаглах · regret /rɪˈɡret/ — харамсах · possibility /ˌpɒsəˈbɪləti/ — боломж<br>
        opportunity /ˌɒpərˈtjuːnəti/ — завшаан · choice /tʃɔɪs/ — сонголт · alternative /ɔːlˈtɜːrnətɪv/ — өөр хувилбар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have money, I would travel» ✗ → <b>If I had money</b> ✓. «If it will rain» ✗ → <b>If it rains</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «if-тал = НӨХЦӨЛ (would-гүй), гол тал = ҮР ДҮН (would-тай)».</p>`
    },
    phrases:[
      {en:"If it rains tomorrow, I'll stay at home.", pron:"иф ит рэйнз тумороу, айл стэй эт хоум.", mn:"Маргааш бороо орвол би гэртээ байна. (1-р)"},
      {en:"If I were you, I would take that opportunity.", pron:"иф ай вөр ю, ай вүд тэйк зэт опортюнити.", mn:"Би чиний оронд бол тэр завшааныг ашиглана. (2-р)"},
      {en:"If I had studied harder, I would have passed.", pron:"иф ай хэд стадид хардэр, ай вүд хэв паст.", mn:"Илүү сайн хичээсэн бол тэнцэх байсан. (3-р)"},
      {en:"If I had saved money then, I would be rich now.", pron:"иф ай хэд сэйвд мани зэн, ай вүд би рич нау.", mn:"Тэр үед мөнгө хураасан бол одоо баян байх байсан. (холимог)"},
      {en:"Unless you practise, you won't improve.", pron:"анлэс ю прэктис, ю воунт импрув.", mn:"Дасгал хийхгүй бол сайжрахгүй."}
    ],
    exercises:[
      {q:"1-р нөхцөл:", parts:["If it ", " tomorrow, I'll stay home."], opts:["rains","will rain"], a:0, fix:"if-тал → одоо цаг: rains."},
      {q:"2-р нөхцөл:", parts:["If I ", " you, I'd take the job."], opts:["were","would be"], a:0, fix:"if-тал → were (would ✗)."},
      {q:"3-р нөхцөл:", parts:["If I ", " harder, I would have passed."], opts:["had studied","would have studied"], a:0, fix:"if-тал → had studied."},
      {q:"Холимог:", parts:["If I had saved then, I ", " rich now."], opts:["would be","would have been"], a:0, fix:"одоогийн үр дүн → would be now."}
    ],
    speak:{ scene:'Нөхцөлт таамаг ярих', turns:[
      {ruby:"What would you do if you won the lottery?", pron:"вот вүд ю ду иф ю вон зэ лоттэри?", mn:"Хэрэв сугалаа хожвол юу хийх вэ?",
        choices:[{t:"If I won, I would start a school for children in need.",best:true,mn:"Хэрэв хожвол, гачигдалтай хүүхдүүдэд зориулж сургууль байгуулна."},{t:"If I would win, I will start a school.",best:false,fix:"if-тал → If I WON, I WOULD start."}]},
      {ruby:"Do you regret any past decisions?", pron:"ду ю ригрэт эни паст дисижнз?", mn:"Өнгөрсөн шийдвэрүүдэдээ харамсдаг уу?",
        choices:[{t:"Yes. If I had learned English earlier, I would have more chances today.",best:true,mn:"Тийм. Эрт англи хэл сурсан бол өнөөдөр илүү олон боломжтой байх байсан. (холимог)"},{t:"Yes. If I would have learned English earlier, I have more chances.",best:false,fix:"If I HAD LEARNED..., I WOULD HAVE more chances."}]},
      {ruby:"Any advice for me before my exam?", pron:"эни эдвайс фор ми бифор май игзэм?", mn:"Шалгалтын өмнө надад зөвлөгөө өгөх үү?",
        choices:[{t:"Unless you sleep well tonight, you won't focus tomorrow. So rest!",best:true,mn:"Өнөө шөнө сайн унтахгүй бол маргааш анхаарал төвлөрөхгүй. Тэгэхээр амар!"},{t:"If you won't sleep well, you don't focus tomorrow.",best:false,fix:"UNLESS you sleep... you WON'T focus (if-талд won't ✗)."}]}
    ]}
  },
  {
    id:'b1m10l4', title:"10.4 Дам яриа", level:"B1 · М10",
    blurb:"She said she would... — Reported speech full review ⭐⭐⭐",
    rule:{
      h:"Давталт: Дам яриа (мэдэгдэл, асуулт, тушаал)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хэн нэгний үгийг дамжуулах бүх аргыг нэгтгэе.<br><br>
        <b>Цаг нэг алхам ухардаг:</b>
        <div style="margin:12px 0"><span class="tag">"I am tired" → She said she WAS tired.</span><span class="tag">"I will call" → He said he WOULD call.</span><span class="tag">"I have finished" → She said she HAD finished.</span></div>
        <b>Асуулт дамжуулах (үг эгнээ нь ЭНГИЙН болно):</b>
        <div style="margin:12px 0"><span class="tag">"Where do you live?" → She asked where I LIVED. (did ✗)</span><span class="tag">Тийм/үгүй асуулт → if/whether: He asked IF I was ready.</span></div>
        <b>Тушаал дамжуулах — tell sb TO / not to:</b>
        <div style="margin:12px 0"><span class="tag">"Sit down!" → She told me TO SIT down.</span><span class="tag">"Don't be late!" → He told me NOT TO BE late.</span></div>
        <b>Цаг/газрын үг өөрчлөгдөнө:</b> now→then, today→that day, here→there, tomorrow→the next day.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        mention /ˈmenʃn/ — дурдах · claim /kleɪm/ — мэдэгдэх · admit /ədˈmɪt/ — хүлээн зөвшөөрөх<br>
        deny /dɪˈnaɪ/ — үгүйсгэх · suggest /səˈdʒest/ — санал болгох · insist /ɪnˈsɪst/ — шаардах<br>
        promise /ˈprɒmɪs/ — амлах · warn /wɔːrn/ — сэрэмжлүүлэх · advise /ədˈvaɪz/ — зөвлөх<br>
        remind /rɪˈmaɪnd/ — сануулах · announce /əˈnaʊns/ — зарлах · explain /ɪkˈspleɪn/ — тайлбарлах<br>
        reply /rɪˈplaɪ/ — хариулах · complain /kəmˈpleɪn/ — гомдоллох · recommend /ˌrekəˈmend/ — зөвлөх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She asked where do I live» ✗ → <b>She asked where I lived</b> ✓ (энгийн эгнээ). «He said me» ✗ → <b>He told me</b> / <b>He said (that)</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Дам яриа = цаг НЭГ алхам ухарна; асуултын эгнээ ЭНГИЙН болно».</p>`
    },
    phrases:[
      {en:"She said she was going to move abroad.", pron:"ши сэд ши воз гоуинг ту мув эброуд.", mn:"Тэр гадаадад нүүх гэж байгаа гэж хэлсэн."},
      {en:"He told me he had already finished the project.", pron:"хи толд ми хи хэд олрэди финишт зэ прожэкт.", mn:"Тэр төслөө аль хэдийн дуусгасан гэж надад хэлсэн."},
      {en:"She asked me where I lived.", pron:"ши аскт ми вэр ай ливд.", mn:"Тэр намайг хаана амьдардгийг асуусан."},
      {en:"He asked if I was ready for the interview.", pron:"хи аскт иф ай воз рэди фор зэ интэрвью.", mn:"Тэр намайг ярилцлагад бэлэн эсэхийг асуусан."},
      {en:"My teacher told me not to give up on my dream.", pron:"май тийчэр толд ми нот ту гив ап он май дрийм.", mn:"Багш маань мөрөөдлөө бүү орхи гэж хэлсэн."}
    ],
    exercises:[
      {q:"Цаг ухрах:", parts:["She said she ", " tired."], opts:["was","is"], a:0, fix:"дам яриа → am/is → was."},
      {q:"will → :", parts:["He said he ", " call me later."], opts:["would","will"], a:0, fix:"will → would."},
      {q:"Асуултын эгнээ:", parts:["She asked where I ", "."], opts:["lived","did I live"], a:0, fix:"дам асуулт → энгийн: I lived."},
      {q:"Тушаал:", parts:["He told me ", " late."], opts:["not to be","to not be"], a:0, fix:"tell sb NOT TO be."}
    ],
    speak:{ scene:'Ярианы агуулгыг дамжуулах', turns:[
      {ruby:"What did your mentor say about your plan?", pron:"вот дид ёр мэнтор сэй эбаут ёр плэн?", mn:"Зөвлөх чинь төлөвлөгөөний чинь талаар юу гэсэн бэ?",
        choices:[{t:"She said that my goals were ambitious but achievable.",best:true,mn:"Тэр миний зорилго амбицтай ч хүрч болохуйц гэж хэлсэн."},{t:"She said that my goals are ambitious but achievable.",best:false,fix:"дам яриа → said... WERE (нэг алхам ухар)."}]},
      {ruby:"And did she ask you anything?", pron:"энд дид ши аск ю эничинг?", mn:"Тэгээд чамаас юм асуусан уу?",
        choices:[{t:"Yes, she asked when I would start and whether I had enough savings.",best:true,mn:"Тийм, тэр намайг хэзээ эхлэх, хангалттай хуримтлалтай эсэхийг асуусан."},{t:"Yes, she asked when will I start and did I have savings.",best:false,fix:"дам асуулт → when I WOULD start and WHETHER I HAD savings."}]},
      {ruby:"Any final words of advice from her?", pron:"эни файнл вөрдз ов эдвайс фром хөр?", mn:"Түүнээс эцсийн зөвлөгөө байсан уу?",
        choices:[{t:"She told me to stay focused and not to give up when things got hard.",best:true,mn:"Тэр анхаарлаа төвлөрүүл, хэцүүдэхэд бүү бууж өг гэж хэлсэн."},{t:"She told me stay focused and don't give up.",best:false,fix:"told me TO STAY... and NOT TO give up."}]}
    ]}
  },
  {
    id:'b1m10l5', title:"10.5 Идэвхгүй хэв", level:"B1 · М10",
    blurb:"is done / was done / will be done / must be done — Passive full review ⭐⭐⭐",
    rule:{
      h:"Давталт: Идэвхгүй хэв (бүх цаг, модал, дам мэдээлэл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Идэвхгүй хэвийг бүх цагаар нэгтгэе — <b>be + V3</b>.<br><br>
        <b>Бүх цаг дахь идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">Present: The office IS CLEANED daily.</span><span class="tag">Past: The bridge WAS BUILT in 1990.</span><span class="tag">Pres. Perfect: It HAS BEEN DONE.</span></div>
        <div style="margin:12px 0"><span class="tag">Future: The results WILL BE ANNOUNCED soon.</span><span class="tag">Continuous: The road IS BEING REPAIRED.</span></div>
        <b>Модал + идэвхгүй (modal + be + V3):</b>
        <div style="margin:12px 0"><span class="tag">This form MUST BE SIGNED.</span><span class="tag">The problem CAN BE SOLVED.</span><span class="tag">It SHOULD BE FINISHED by Friday.</span></div>
        <b>Дам мэдээлэл (It is said that... / He is said to...):</b>
        <div style="margin:12px 0"><span class="tag">It is said that he is a genius.</span><span class="tag">He is said to BE a genius.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        establish /ɪˈstæblɪʃ/ — байгуулах · construct /kənˈstrʌkt/ — барих · manufacture /ˌmænjuˈfæktʃər/ — үйлдвэрлэх<br>
        launch /lɔːntʃ/ — эхлүүлэх · appoint /əˈpɔɪnt/ — томилох · award /əˈwɔːrd/ — шагнах<br>
        conduct /kənˈdʌkt/ — явуулах · implement /ˈɪmplɪment/ — хэрэгжүүлэх · handle /ˈhændl/ — шийдвэрлэх<br>
        approve /əˈpruːv/ — батлах · deliver /dɪˈlɪvər/ — хүргэх · complete /kəmˈpliːt/ — гүйцээх<br>
        require /rɪˈkwaɪər/ — шаардах · involve /ɪnˈvɒlv/ — оролцуулах · achieve /əˈtʃiːv/ — биелүүлэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The bridge was build in 1990» ✗ → <b>was BUILT</b> (V3) ✓. «It must signed» ✗ → <b>must BE signed</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Идэвхгүй = BE + V3; хэн хийсэн нь чухал биш эсвэл мэдэгдэхгүй үед».</p>`
    },
    phrases:[
      {en:"The company was founded in 2005.", pron:"зэ кампэни воз фаундид ин твэнти оу файв.", mn:"Компани 2005 онд байгуулагдсан."},
      {en:"The results will be announced next week.", pron:"зэ ризалтс вил би энаунст нэкст виик.", mn:"Үр дүнг ирэх долоо хоногт зарлана."},
      {en:"This form must be signed before Friday.", pron:"зис форм маст би сайнд бифор фрайдэй.", mn:"Энэ маягтыг Баасан гарагаас өмнө гарын үсэг зурах ёстой."},
      {en:"The road is being repaired at the moment.", pron:"зэ роуд из бийинг рипэрд эт зэ моумэнт.", mn:"Зам одоо засварлагдаж байна."},
      {en:"He is said to be one of the best in the world.", pron:"хи из сэд ту би ван ов зэ бэст ин зэ вөрлд.", mn:"Тэрбээр дэлхийн шилдгүүдийн нэг гэдэг."}
    ],
    exercises:[
      {q:"Past passive:", parts:["The bridge ", " in 1990."], opts:["was built","was build"], a:0, fix:"be + V3 → was built."},
      {q:"Future passive:", parts:["The winners ", " tomorrow."], opts:["will be announced","will announce"], a:0, fix:"идэвхгүй → will BE announced."},
      {q:"Modal passive:", parts:["This report must ", " today."], opts:["be finished","finish"], a:0, fix:"modal + BE + V3 → be finished."},
      {q:"Continuous passive:", parts:["The house is ", " at the moment."], opts:["being painted","painting"], a:0, fix:"үргэлжлэх идэвхгүй → is being painted."}
    ],
    speak:{ scene:'Төслийн байдлыг тайлагнах', turns:[
      {ruby:"So, how is the new stadium coming along?", pron:"соу, хау из зэ ню стэдиэм камминг элонг?", mn:"За, шинэ цэнгэлдэх хүрээлэн яаж явж байна?",
        choices:[{t:"It's being built right now and will be completed by next summer.",best:true,mn:"Одоо баригдаж байгаа бөгөөд ирэх зун гэхэд ашиглалтад орно."},{t:"They building it now and will complete by next summer.",best:false,fix:"идэвхгүй → It's BEING BUILT... will BE COMPLETED."}]},
      {ruby:"Who was appointed to lead the project?", pron:"хү воз эпойнтид ту лийд зэ прожэкт?", mn:"Төслийг удирдахаар хэнийг томилсон бэ?",
        choices:[{t:"A famous architect was appointed last month.",best:true,mn:"Өнгөрсөн сард нэгэн алдартай архитекторыг томилсон."},{t:"A famous architect appointed last month.",best:false,fix:"идэвхгүй → WAS APPOINTED."}]},
      {ruby:"Is there anything that still needs approval?", pron:"из зэр эничинг зэт стил нийдз эпрувал?", mn:"Батлах шаардлагатай зүйл үлдсэн үү?",
        choices:[{t:"Yes, the final budget must be approved before construction continues.",best:true,mn:"Тийм, барилга үргэлжлэхээс өмнө эцсийн төсвийг батлах ёстой."},{t:"Yes, the final budget must approve before construction.",best:false,fix:"modal идэвхгүй → must BE APPROVED."}]}
    ]}
  },
  {
    id:'b1m10l6', title:"10.6 Тодотгол", level:"B1 · М10",
    blurb:"the person who / a place where / the man whose — Relative clauses review ⭐⭐",
    rule:{
      h:"Давталт: Тодотгол гишүүн өгүүлбэр (defining, non-defining, prepositions)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Нэр үгийг тодотгох бүх аргыг нэгтгэе.<br><br>
        <b>Хамаатуулах үгс:</b>
        <div style="margin:12px 0"><span class="tag">who = хүн</span><span class="tag">which = юм</span><span class="tag">that = хүн/юм (зөвхөн defining)</span><span class="tag">where = газар</span><span class="tag">whose = -ийн (эзэмшил)</span><span class="tag">when = цаг үе</span></div>
        <b>Defining (таслалгүй, зайлшгүй мэдээлэл):</b>
        <div style="margin:12px 0"><span class="tag">The woman WHO inspired me is my teacher.</span><span class="tag">This is the app THAT changed my life.</span></div>
        <b>Non-defining (таслалтай, нэмэлт мэдээлэл — that ✗):</b>
        <div style="margin:12px 0"><span class="tag">My mentor, WHO lives in Tokyo, is amazing. (that ✗)</span></div>
        <b>Угтвар үгтэй (prepositions):</b>
        <div style="margin:12px 0"><span class="tag">The goal WHICH I'm working towards... = ...towards WHICH I'm working (албан ёсны)</span><span class="tag">The person WHO I spoke to = the person TO WHOM I spoke</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        inspire /ɪnˈspaɪər/ — урам зориг өгөх · influence /ˈɪnfluəns/ — нөлөөлөх · mentor /ˈmentɔːr/ — зөвлөх<br>
        role model /ˈrəʊl ˌmɒdl/ — үлгэр дуурайл · admire /ədˈmaɪər/ — биширэх · guidance /ˈɡaɪdns/ — чиглүүлэг<br>
        support /səˈpɔːrt/ — дэмжлэг · encourage /ɪnˈkʌrɪdʒ/ — урамшуулах · motivate /ˈməʊtɪveɪt/ — сэдэлжүүлэх<br>
        respect /rɪˈspekt/ — хүндлэх · wisdom /ˈwɪzdəm/ — мэргэн ухаан · experience /ɪkˈspɪəriəns/ — туршлага<br>
        determination /dɪˌtɜːrmɪˈneɪʃn/ — тэвчээр зориг · passion /ˈpæʃn/ — хүсэл тэмүүлэл · vision /ˈvɪʒn/ — алсын хараа</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «My mentor, that lives in Tokyo...» ✗ → non-defining-д <b>who</b> ✓ (that ✗). «The house what I bought» ✗ → <b>which/that</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Таслал байвал that ХОРИОТОЙ; хүн→who, юм→which, газар→where, эзэмшил→whose».</p>`
    },
    phrases:[
      {en:"She's the teacher who inspired me to dream big.", pron:"шиз зэ тийчэр хү инспайрд ми ту дрийм биг.", mn:"Тэр бол намайг том мөрөөдөхөд урамшуулсан багш."},
      {en:"This is the city where I want to live one day.", pron:"зис из зэ сити вэр ай вонт ту лив ван дэй.", mn:"Энэ бол миний хэзээ нэгэн цагт амьдрахыг хүсдэг хот."},
      {en:"My grandfather, who is eighty, still learns new things.", pron:"май грэндфазэр, хү из эйти, стил лөрнз ню сингз.", mn:"Наян настай миний өвөө одоо ч шинэ зүйл сурдаг. (non-defining)"},
      {en:"That's the man whose book changed my life.", pron:"зэтс зэ мэн хүз бүк чэйнжд май лайф.", mn:"Тэр бол номынх нь миний амьдралыг өөрчилсөн хүн."},
      {en:"The dream which I'm working towards feels closer now.", pron:"зэ дрийм вич айм вөркинг товордз филз клоусэр нау.", mn:"Миний тэмүүлж буй мөрөөдөл одоо илүү ойрхон санагдаж байна."}
    ],
    exercises:[
      {q:"Хүн (defining):", parts:["She's the woman ", " inspired me."], opts:["who","which"], a:0, fix:"хүн → who."},
      {q:"Газар:", parts:["That's the city ", " I want to live."], opts:["where","which"], a:0, fix:"газар → where."},
      {q:"Эзэмшил:", parts:["He's the man ", " book I love."], opts:["whose","who's"], a:0, fix:"-ийн (эзэмшил) → whose."},
      {q:"Non-defining:", parts:["My mentor, ", " lives in Tokyo, is kind."], opts:["who","that"], a:0, fix:"таслалтай → who (that ✗)."}
    ],
    speak:{ scene:'Урам зориг өгсөн хүнээ дүрслэх', turns:[
      {ruby:"Who has influenced you the most in life?", pron:"хү хэз инфлуэнст ю зэ моуст ин лайф?", mn:"Амьдралд чинь хамгийн их нөлөөлсөн хүн хэн бэ?",
        choices:[{t:"My grandmother, who never gave up, is the person I admire most.",best:true,mn:"Хэзээ ч бууж өгөөгүй эмээ маань миний хамгийн биширдэг хүн."},{t:"My grandmother, that never gave up, is the person I admire.",best:false,fix:"non-defining → WHO (that ✗)."}]},
      {ruby:"What is it about her that inspires you?", pron:"вот из ит эбаут хөр зэт инспайрз ю?", mn:"Түүний юу нь чамайг урамшуулдаг вэ?",
        choices:[{t:"It's the determination with which she faced every hardship.",best:true,mn:"Бэрхшээл бүрийг тэвчээр зоригоор нүүр тулж байсан нь."},{t:"It's the determination what she faced hardship.",best:false,fix:"угтвар үгтэй → the determination WITH WHICH she faced..."}]},
      {ruby:"Is there a place that reminds you of her?", pron:"из зэр э плэйс зэт римайндз ю ов хөр?", mn:"Түүнийг санагдуулдаг газар бий юу?",
        choices:[{t:"Yes, the countryside where she grew up always makes me think of her.",best:true,mn:"Тийм, түүний өссөн хөдөө газар намайг үргэлж түүнийг бодуулдаг."},{t:"Yes, the countryside which she grew up makes me think of her.",best:false,fix:"газар → WHERE she grew up (эсвэл which... in)."}]}
    ]}
  },
  {
    id:'b1m10l7', title:"10.7 Модал үйл", level:"B1 · М10",
    blurb:"must have / can't have / should have / needn't have — Modals full review ⭐⭐⭐",
    rule:{
      h:"Давталт: Модал үйл үг (одоо + өнгөрсөн таамаг, үүрэг, харамсал)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Модал үйл үгсийг одоо ба өнгөрсөнд нэгтгэе.<br><br>
        <b>Одоогийн таамаг (deduction):</b>
        <div style="margin:12px 0"><span class="tag">must = мэдээж мөн: She must be tired.</span><span class="tag">can't = мэдээж биш: He can't be serious.</span><span class="tag">might/may/could = магадгүй: It might rain.</span></div>
        <b>Өнгөрсний таамаг (modal + HAVE + V3):</b>
        <div style="margin:12px 0"><span class="tag">She MUST HAVE BEEN nervous. (мэдээж байсан)</span><span class="tag">He CAN'T HAVE forgotten. (байх боломжгүй)</span><span class="tag">They MIGHT HAVE missed the bus. (магадгүй)</span></div>
        <b>Үүрэг ба харамсал:</b>
        <div style="margin:12px 0"><span class="tag">must/have to = ёстой</span><span class="tag">mustn't = хориотой</span><span class="tag">SHOULD HAVE done = хийх ёстой байсан (харамсал)</span><span class="tag">NEEDN'T HAVE done = дэмий хийсэн</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        certain /ˈsɜːrtn/ — тодорхой · obvious /ˈɒbviəs/ — илэрхий · doubt /daʊt/ — эргэлзэх<br>
        likely /ˈlaɪkli/ — магадлалтай · impossible /ɪmˈpɒsəbl/ — боломжгүй · conclude /kənˈkluːd/ — дүгнэх<br>
        assume /əˈsjuːm/ — таамаглах · reckon /ˈrekən/ — бодох · presume /prɪˈzjuːm/ — таамаглах<br>
        evidence /ˈevɪdəns/ — нотолгоо · obligation /ˌɒblɪˈɡeɪʃn/ — үүрэг · permission /pərˈmɪʃn/ — зөвшөөрөл<br>
        prohibit /prəˈhɪbɪt/ — хориглох · advisable /ədˈvaɪzəbl/ — зохимжтой · necessity /nəˈsesəti/ — зайлшгүй хэрэгцээ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She must been tired» ✗ → <b>must HAVE been</b> ✓. «I should went» ✗ → <b>should HAVE gone</b> ✓. «must of» ✗ → <b>must HAVE</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өнгөрсний таамаг = МОДАЛ + HAVE + V3»; should have = харамсал, needn't have = дэмий.</p>`
    },
    phrases:[
      {en:"She must have been exhausted after the trip.", pron:"ши маст хэв бийн игзостид афтэр зэ трип.", mn:"Аяллын дараа тэр мэдээж туйлдсан байсан байх."},
      {en:"He can't have forgotten our meeting.", pron:"хи кант хэв форготтэн аур миитинг.", mn:"Тэр уулзалтаа мартсан байх боломжгүй."},
      {en:"They might have taken the wrong train.", pron:"зэй майт хэв тэйкэн зэ ронг трэйн.", mn:"Тэд буруу галт тэргэнд суусан байж магадгүй."},
      {en:"I should have studied harder for the exam.", pron:"ай шүд хэв стадид хардэр фор зэ игзэм.", mn:"Шалгалтад илүү сайн бэлдэх ёстой байсан. (харамсал)"},
      {en:"You needn't have worried — everything went fine.", pron:"ю ниднт хэв варрид — эвричинг вэнт файн.", mn:"Санаа зовох хэрэггүй байсан — бүх зүйл сайхан болсон."}
    ],
    exercises:[
      {q:"Өнгөрсний таамаг:", parts:["She ", " been nervous before the interview."], opts:["must have","must"], a:0, fix:"өнгөрсөн → must HAVE been."},
      {q:"Боломжгүй:", parts:["He ", " forgotten — he never forgets."], opts:["can't have","mustn't have"], a:0, fix:"мэдээж биш → can't have."},
      {q:"Харамсал:", parts:["I ", " harder. I failed."], opts:["should have studied","should study"], a:0, fix:"харамсал → should HAVE studied."},
      {q:"Дэмий:", parts:["You ", " — it was already done."], opts:["needn't have worried","mustn't worry"], a:0, fix:"дэмий хийсэн → needn't have worried."}
    ],
    speak:{ scene:'Болсон явдлыг таамаглах', turns:[
      {ruby:"Sara didn't show up. What happened?", pron:"Сара диднт шоу ап. вот хэпэнд?", mn:"Сара ирсэнгүй. Юу болсон бол?",
        choices:[{t:"She must have overslept — she was up all night finishing her project.",best:true,mn:"Тэр мэдээж унтчихсан байх — шөнөжин төслөө дуусгасан."},{t:"She must overslept — she was up all night.",best:false,fix:"өнгөрсний таамаг → must HAVE overslept."}]},
      {ruby:"Could she have forgotten the whole thing?", pron:"күд ши хэв форготтэн зэ хоул синг?", mn:"Тэр бүхнийг мартсан байж болох уу?",
        choices:[{t:"No, she can't have forgotten — she reminded me about it yesterday!",best:true,mn:"Үгүй, тэр мартсан байх боломжгүй — өчигдөр надад сануулж байсан!"},{t:"No, she mustn't have forgotten — she reminded me yesterday.",best:false,fix:"мэдээж биш → CAN'T HAVE forgotten."}]},
      {ruby:"Maybe we should have called her earlier.", pron:"мэйби ви шүд хэв колд хөр өрлиэр.", mn:"Магадгүй бид түүн рүү эрт залгах ёстой байсан юм болов уу.",
        choices:[{t:"You're right — we should have checked on her. Let's call now.",best:true,mn:"Зөв — бид түүнийг асуух ёстой байсан. Одоо залгая."},{t:"You're right — we should checked on her.",best:false,fix:"харамсал → should HAVE checked."}]}
    ]}
  },
  {
    id:'b1m10l8', title:"10.8 Холбоос", level:"B1 · М10",
    blurb:"however / moreover / despite / although / therefore — Linkers review ⭐⭐",
    rule:{
      h:"Давталт: Холбоос ба ярианы тэмдэглэгээ",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Санаагаа уян хатан холбож, B1 бичвэрийн урсгалыг сайжруулъя.<br><br>
        <b>Эсэргүүцэл (contrast):</b>
        <div style="margin:12px 0"><span class="tag">although/though + бүтэн өгүүлбэр: Although it was hard, I continued.</span><span class="tag">despite/in spite of + нэр үг/-ing: Despite the rain, we went.</span><span class="tag">however (таслалаар): It was hard. However, I continued.</span></div>
        <b>Нэмэлт (addition):</b>
        <div style="margin:12px 0"><span class="tag">moreover / furthermore = түүнээс гадна</span><span class="tag">in addition = нэмж хэлэхэд</span></div>
        <b>Үр дүн ба шалтгаан:</b>
        <div style="margin:12px 0"><span class="tag">therefore / thus = тиймээс (үр дүн)</span><span class="tag">because of + нэр үг · because + өгүүлбэр</span><span class="tag">so that = -ийн тулд</span></div>
        <b>Гол ялгаа — despite vs although:</b>
        <div style="margin:12px 0"><span class="tag">Despite THE RAIN / being tired (нэр үг/-ing)</span><span class="tag">Although IT RAINED (бүтэн өгүүлбэр)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        however /haʊˈevər/ — гэвч · moreover /mɔːrˈəʊvər/ — түүнээс гадна · furthermore /ˈfɜːrðərmɔːr/ — цаашилбал<br>
        despite /dɪˈspaɪt/ — үл харгалзан · although /ɔːlˈðəʊ/ — хэдийгээр · nevertheless /ˌnevərðəˈles/ — гэсэн хэдий ч<br>
        therefore /ˈðeərfɔːr/ — тиймээс · thus /ðʌs/ — ингэснээр · consequently /ˈkɒnsɪkwəntli/ — үүний улмаас<br>
        whereas /ˌweərˈæz/ — харин · in addition /ɪn əˈdɪʃn/ — нэмж хэлэхэд · on the other hand /ɒn ði ˈʌðər hænd/ — нөгөө талаар<br>
        as a result /æz ə rɪˈzʌlt/ — үр дүнд · for instance /fər ˈɪnstəns/ — жишээ нь · in conclusion /ɪn kənˈkluːʒn/ — дүгнэвэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Despite it was raining» ✗ → <b>Despite the rain</b> / <b>Although it was raining</b> ✓. «Although, I tried» (таслал) ✗ → although таслалгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «DESPITE + нэр үг/-ing; ALTHOUGH + бүтэн өгүүлбэр; HOWEVER таслалаар тусдаа».</p>`
    },
    phrases:[
      {en:"Although the road was long, we never lost hope.", pron:"олзоу зэ роуд воз лонг, ви нэвэр лост хоуп.", mn:"Зам урт байсан ч бид найдвараа хэзээ ч алдаагүй."},
      {en:"Despite many failures, she kept chasing her dream.", pron:"диспайт мэни фэйлюрз, ши кэпт чэйсинг хөр дрийм.", mn:"Олон удаа бүтэлгүйтсэн ч тэр мөрөөдлөө хөөсөөр байв."},
      {en:"He worked hard; therefore, he succeeded.", pron:"хи вөркт хард; зэрфор, хи саксиидид.", mn:"Тэр шаргуу ажилласан; тиймээс амжилтад хүрсэн."},
      {en:"The plan is risky. However, it could pay off.", pron:"зэ плэн из риски. хауэвэр, ит күд пэй оф.", mn:"Төлөвлөгөө эрсдэлтэй. Гэвч үр дүнгээ өгч мэднэ."},
      {en:"Moreover, learning languages opens new doors.", pron:"морроувэр, лөрнинг лэнгвижиз оупэнз ню дорз.", mn:"Түүнээс гадна хэл сурах нь шинэ хаалга нээдэг."}
    ],
    exercises:[
      {q:"despite + нэр үг:", parts:["Despite ", ", we continued."], opts:["the difficulties","it was difficult"], a:0, fix:"despite + нэр үг → the difficulties."},
      {q:"although + өгүүлбэр:", parts:["Although it ", ", we went out."], opts:["was raining","the rain"], a:0, fix:"although + бүтэн өгүүлбэр."},
      {q:"Үр дүн:", parts:["He trained daily; ", ", he won."], opts:["therefore","although"], a:0, fix:"үр дүн → therefore."},
      {q:"Эсэргүүцэл (тусдаа):", parts:["It's hard. ", ", I won't quit."], opts:["However","Because"], a:0, fix:"эсэргүүцэл → However."}
    ],
    speak:{ scene:'Санаагаа уялдуулан илэрхийлэх', turns:[
      {ruby:"Wasn't it hard to keep going after so many setbacks?", pron:"вознт ит хард ту кийп гоуинг афтэр соу мэни сэтбэкс?", mn:"Тийм олон бэрхшээлийн дараа үргэлжлүүлэхэд хэцүү байсан биш үү?",
        choices:[{t:"Despite the setbacks, I stayed focused on my goal.",best:true,mn:"Бэрхшээлүүдийг үл харгалзан би зорилгодоо анхаарлаа төвлөрүүлж байсан."},{t:"Despite I had setbacks, I stayed focused.",best:false,fix:"despite + нэр үг → Despite THE SETBACKS (эсвэл Although I had...)."}]},
      {ruby:"What kept you motivated all that time?", pron:"вот кэпт ю моутивэйтид ол зэт тайм?", mn:"Тэр бүх хугацаанд юу чамайг сэдэлжүүлж байв?",
        choices:[{t:"My family supported me. Moreover, I truly believed in my dream.",best:true,mn:"Гэр бүл маань дэмжсэн. Түүнээс гадна би мөрөөдөлдөө үнэхээр итгэдэг байсан."},{t:"My family supported me. Because, I believed in my dream.",best:false,fix:"нэмэлт санаа → Moreover (Because тусдаа зогсохгүй)."}]},
      {ruby:"So would you say it was all worth it?", pron:"соу вүд ю сэй ит воз ол вөрс ит?", mn:"Тэгэхээр энэ бүхэн үнэ цэнэтэй байсан гэх үү?",
        choices:[{t:"Although it was exhausting, therefore I have no regrets — I grew so much.",best:false,mn:"",fix:"«Although» ба «therefore»-ыг зэрэг холихгүй → Although it was exhausting, I have no regrets."},{t:"Although it was exhausting, I have no regrets. I grew so much.",best:true,mn:"Ядаргаатай байсан ч би харамсдаггүй. Маш их өссөн."}]}
    ]}
  },
  {
    id:'b1m10l9', title:"10.9 B1 нэгдсэн давталт", level:"B1 · М10",
    blurb:"Everything together — B1 grand mixed review ⭐⭐⭐",
    rule:{
      h:"Давталт: B1-ийн бүх дүрмийн нэгдсэн шалгалт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Одоо бүх зүйлийг холилдуулъя! Энэ бол B1-ийн бодит эрчим.<br><br>
        <b>Ирээдүй бүхэлдээ:</b>
        <div style="margin:12px 0"><span class="tag">By 2030 I'll have graduated.</span><span class="tag">This time next year I'll be working abroad.</span></div>
        <b>Нөхцөл + харамсал:</b>
        <div style="margin:12px 0"><span class="tag">If I had known, I would have acted differently.</span><span class="tag">If I were you, I'd take the risk.</span></div>
        <b>Дам яриа + идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">She said the results would be announced soon.</span><span class="tag">He asked whether the plan had been approved.</span></div>
        <b>Модал таамаг + тодотгол:</b>
        <div style="margin:12px 0"><span class="tag">The mentor who guided me must have believed in me.</span><span class="tag">Despite the doubts, I should have trusted myself.</span></div>
        <b>Санаж яваарай:</b> if-талд would ✗ · дам асуултын эгнээ энгийн · идэвхгүй = be + V3 · модал өнгөрсөн = modal + have + V3.
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        accomplish /əˈkʌmplɪʃ/ — биелүүлэх · overcome /ˌəʊvərˈkʌm/ — даван туулах · thrive /θraɪv/ — цэцэглэн хөгжих<br>
        resilience /rɪˈzɪliəns/ — тэсвэр хатуужил · breakthrough /ˈbreɪkθruː/ — эргэлтийн цэг · fulfil /fʊlˈfɪl/ — биелүүлэх<br>
        aspire /əˈspaɪər/ — эрмэлзэх · flourish /ˈflʌrɪʃ/ — дэлгэрэх · potential /pəˈtenʃl/ — боломж<br>
        transform /trænsˈfɔːrm/ — өөрчлөх · commitment /kəˈmɪtmənt/ — амлалт · triumph /ˈtraɪʌmf/ — ялалт<br>
        setback /ˈsetbæk/ — бэрхшээл · milestone /ˈmaɪlstəʊn/ — гол үе шат · legacy /ˈleɡəsi/ — өв</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Хамгийн түгээмэл 3: «If I would...» ✗, «She asked where do I...» ✗, «must been» ✗. Тус бүрд нь <b>If I had... / where I... / must HAVE been</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Дүрэм тус бүрийн ГОЛ ТЭМДГИЙГ асуу: цаг, if-тал, эгнээ, be+V3, have+V3».</p>`
    },
    phrases:[
      {en:"If I hadn't taken that risk, I wouldn't be where I am today.", pron:"иф ай хэднт тэйкэн зэт риск, ай вүднт би вэр ай эм тудэй.", mn:"Тэр эрсдэлийг хийгээгүй бол өнөөдрийнх шигээ болохгүй байсан. (холимог)"},
      {en:"She said her dream would come true if she kept trying.", pron:"ши сэд хөр дрийм вүд кам тру иф ши кэпт трайинг.", mn:"Хичээсээр байвал мөрөөдөл нь биелнэ гэж тэр хэлсэн."},
      {en:"By the time I turn thirty, I'll have built something meaningful.", pron:"бай зэ тайм ай төрн сөрти, айл хэв билт самсинг миинингфул.", mn:"Гуч нас хүрэх үед утга учиртай зүйл бүтээчихсэн байна."},
      {en:"The award was given to the team that never gave up.", pron:"зэ эворд воз гивн ту зэ тийм зэт нэвэр гэйв ап.", mn:"Шагналыг хэзээ ч бууж өгөөгүй багт олгосон. (идэвхгүй + тодотгол)"},
      {en:"He must have worked incredibly hard to achieve all that.", pron:"хи маст хэв вөркт инкрэдибли хард ту эчийв ол зэт.", mn:"Тэр бүгдэд хүрэхийн тулд мэдээж үнэхээр шаргуу ажилласан байх."}
    ],
    exercises:[
      {q:"Холимог нөхцөл:", parts:["If I hadn't moved, I ", " here now."], opts:["wouldn't be","wouldn't have been"], a:0, fix:"одоогийн үр дүн → wouldn't be now."},
      {q:"Дам яриа:", parts:["She said her dream ", " come true."], opts:["would","will"], a:0, fix:"дам яриа → will → would."},
      {q:"Идэвхгүй + тодотгол:", parts:["The prize was given to the team ", " won."], opts:["that","who's"], a:0, fix:"баг (юм) → that/which."},
      {q:"Модал өнгөрсөн:", parts:["He ", " so hard to get here."], opts:["must have worked","must worked"], a:0, fix:"өнгөрсний таамаг → must HAVE worked."}
    ],
    speak:{ scene:'Замналаа эргэн харах', turns:[
      {ruby:"Looking back, would you change anything?", pron:"лүкинг бэк, вүд ю чэйнж эничинг?", mn:"Эргэн харахад ямар нэг зүйлийг өөрчлөх үү?",
        choices:[{t:"If I had started earlier, I might have achieved more — but I have no regrets.",best:true,mn:"Эрт эхэлсэн бол илүү ихийг бүтээж болох байсан — гэхдээ харамсдаггүй."},{t:"If I would start earlier, I might achieve more.",best:false,fix:"if-тал → If I HAD STARTED... I MIGHT HAVE achieved."}]},
      {ruby:"What did your family say about your journey?", pron:"вот дид ёр фэмили сэй эбаут ёр жөрни?", mn:"Гэр бүл чинь замналын тань талаар юу гэсэн бэ?",
        choices:[{t:"They told me they were proud and asked what I would do next.",best:true,mn:"Тэд надаар бахархаж байгаагаа хэлээд, дараа нь юу хийхийг асуусан."},{t:"They told me they are proud and asked what will I do next.",best:false,fix:"дам яриа → WERE proud... what I WOULD do next."}]},
      {ruby:"And where do you see yourself in ten years?", pron:"энд вэр ду ю сий ёрсэлф ин тэн йирз?", mn:"10 жилийн дараа өөрийгөө хаана харж байна?",
        choices:[{t:"By then, I'll have built a legacy that inspires others to dream big.",best:true,mn:"Тэр үед бусдыг том мөрөөдөлд урамшуулах өв бүтээчихсэн байна."},{t:"By then, I build a legacy that inspire others.",best:false,fix:"→ I'LL HAVE BUILT a legacy that INSPIRES others."}]}
    ]}
  },
  {
    id:'b1m10l10', title:"10.10 B1 төгсгөлийн шалгалт", level:"B1 · М10",
    blurb:"🏆 B1 капстон финал — төгсгөлийн ярилцлага ба загвар эссэ",
    rule:{
      h:"🏆 B1 курсын төгсгөл: Бүх дүрмийн эцсийн нэгтгэл",
      html:`<b>🎯 Зорилго:</b> 🎓 Баяр хүргэе — та B1 түвшний бүх үндсэн бүтцийг эзэмшлээ! Эдгээрийг нэг эссэд нэхэж бичих чадвар бол жинхэнэ B1.<br><br>
        <b>B1 курсын түлхүүр бүтцүүд (бүгдийг давт!):</b>
        <div style="margin:12px 0"><span class="tag">By 2030 I'll HAVE graduated ⭐⭐⭐</span><span class="tag">By June I'll HAVE BEEN studying for a year ⭐⭐⭐</span><span class="tag">This time next year I'll BE working ⭐⭐</span><span class="tag">If I HAD known, I WOULD HAVE acted ⭐⭐⭐</span><span class="tag">If I were you, I'd take the risk ⭐⭐⭐</span><span class="tag">She SAID she WOULD call ⭐⭐⭐</span><span class="tag">He ASKED where I LIVED ⭐⭐⭐</span><span class="tag">The results WILL BE announced ⭐⭐⭐</span><span class="tag">It MUST BE signed ⭐⭐⭐</span><span class="tag">The teacher WHO inspired me ⭐⭐</span><span class="tag">She MUST HAVE BEEN nervous ⭐⭐⭐</span><span class="tag">You NEEDN'T HAVE worried ⭐⭐</span><span class="tag">Despite the setbacks / Although it was hard ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Загвар эссэ — «Миний мөрөөдөл ба замнал» (B1 түвшин, олон дүрэм нэхсэн):</b><br>
        <i>Ever since I was a child, I have dreamed of becoming a teacher. When I started learning English three years ago, I could barely say hello. If someone had told me then how far I would come, I wouldn't have believed them. It was not easy. Despite many setbacks, I kept going, because my grandmother, who never had the chance to study, always told me to chase my dreams. Looking back, I needn't have worried so much — every mistake taught me something. By this time next year, I'll have finished my B1 course, and I'll be preparing for B2. By the time I am thirty, I'll have been teaching for several years. My teachers said that if I stayed committed, I would achieve anything. I now know they were right. This journey must have changed me forever — and it is only the beginning.</i><br>
        Үүнийг өөрийн түүхээр солиод Ruby-д бичиж засуулаарай! 🎓</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B1 эссэгийн 4 давхар: <b>Өнгөрсөн</b> (had told, needn't have worried) → <b>Нөхцөл</b> (if... would have) → <b>Ирээдүй</b> (will have finished, will be preparing) → <b>Эргэцүүлэл</b> (must have changed). Бахархаж яв — чи чадсан!</p>`
    },
    phrases:[
      {en:"If someone had told me how far I'd come, I wouldn't have believed them.", pron:"иф самван хэд толд ми хау фар айд кам, ай вүднт хэв биливд зэм.", mn:"Хэн нэгэн намайг хаа хүрэхийг хэлсэн бол би итгэхгүй байсан."},
      {en:"By this time next year, I'll have finished my B1 course.", pron:"бай зис тайм нэкст йир, айл хэв финишт май би-ван корс.", mn:"Ирэх жилийн энэ үед B1 курсээ дуусгачихсан байна."},
      {en:"Despite many setbacks, I kept going.", pron:"диспайт мэни сэтбэкс, ай кэпт гоуинг.", mn:"Олон бэрхшээлийг үл харгалзан би үргэлжлүүлсэн."},
      {en:"My teachers said that if I stayed committed, I would achieve anything.", pron:"май тийчэрз сэд зэт иф ай стэйд камиттид, ай вүд эчийв эничинг.", mn:"Багш нар минь тууштай байвал бүхнийг чадна гэж хэлсэн."},
      {en:"This journey must have changed me forever.", pron:"зис жөрни маст хэв чэйнжд ми форэвэр.", mn:"Энэ замнал намайг үүрд өөрчилсөн байх."}
    ],
    exercises:[
      {q:"Холимог нөхцөл:", parts:["If someone had told me, I ", " believed them."], opts:["wouldn't have","wouldn't"], a:0, fix:"3-р нөхцөл → wouldn't HAVE believed."},
      {q:"Ирээдүй perfect:", parts:["By next year, I ", " my course."], opts:["'ll have finished","finish"], a:0, fix:"by → will HAVE finished."},
      {q:"Дам яриа:", parts:["They said that if I stayed committed, I ", " succeed."], opts:["would","will"], a:0, fix:"дам яриа → will → would."},
      {q:"Модал таамаг:", parts:["This journey ", " changed me forever."], opts:["must have","must"], a:0, fix:"өнгөрсний таамаг → must HAVE changed."}
    ],
    speak:{ scene:'🎓 B1 төгсгөлийн ярилцлага', turns:[
      {ruby:"Congratulations on finishing B1! How does it feel?", pron:"кэнгрэтюлэйшнз он финишинг би-ван! хау даз ит фийл?", mn:"B1-ээ дуусгасанд баяр хүргэе! Ямар мэдрэмж төрж байна?",
        choices:[{t:"Amazing! If you had seen me a year ago, you wouldn't have recognised me.",best:true,mn:"Гайхалтай! Намайг жилийн өмнө харсан бол таньж чадахгүй байх байсан."},{t:"Amazing! If you saw me a year ago, you wouldn't recognise me.",best:false,fix:"3-р нөхцөл → If you HAD SEEN me... you WOULDN'T HAVE recognised me."}]},
      {ruby:"What was the hardest part of your journey?", pron:"вот воз зэ хардэст парт ов ёр жөрни?", mn:"Замналын чинь хамгийн хэцүү хэсэг юу байв?",
        choices:[{t:"Despite the setbacks, I kept going. My mentor told me never to give up.",best:true,mn:"Бэрхшээлүүдийг үл харгалзан үргэлжлүүлсэн. Зөвлөх маань бүү бууж өг гэсэн."},{t:"Despite I had setbacks, I kept going. My mentor told me never give up.",best:false,fix:"Despite THE SETBACKS... told me never TO GIVE UP."}]},
      {ruby:"And what's your dream for the future?", pron:"энд вотс ёр дрийм фор зэ фьючэр?", mn:"Ирээдүйн мөрөөдөл чинь юу вэ?",
        choices:[{t:"By the time I'm thirty, I'll have been teaching for years, inspiring others to dream big!",best:true,mn:"Гуч нас хүрэх үед олон жил багшилж, бусдыг том мөрөөдөлд урамшуулж байх болно!"},{t:"When I'm thirty, I teach for years and inspire others.",best:false,fix:"→ By the time I'm thirty, I'LL HAVE BEEN TEACHING for years."}]}
    ]}
  },
];

LEVEL_INFO.b1 = { name:'B1 бүтэн курс 🎓', sub:'100 хичээл бүрэн ✓ — Модуль 1-10' };

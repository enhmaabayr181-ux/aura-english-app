// ============================================================
//  AURA — B1 КУРСЫН ӨГӨГДӨЛ (lessons_b1.js)
//  Агуулга: B1 курс — Модуль 1-5 (50 хичээл)
//  М1 Хувийн хөгжил · М2 Боловсрол · М3 Ажил & карьер · М4 Технологи & мэдээлэл · М5 Эрүүл мэнд & байгаль орчин
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
];

LEVEL_INFO.b1 = { name:'B1 курс 🔥', sub:'Perfect, нөхцөл, дам яриа, идэвхгүй хэв — Модуль 1-5' };

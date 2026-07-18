// ============================================================
//  AURA — B2 КУРСЫН ӨГӨГДӨЛ (lessons_b2.js)
//  Агуулга: B2 курс — Модуль 1-10 (100 хичээл бүрэн)
//  М1 Нийгэм&мэдээлэл · М2 Ажил&амжилт · М3 Байгаль&уур амьсгал · М4 Урлаг&соёл · М5 Шинжлэх ухаан&технологи
//  М6 Дэлхий&улс төр · М7 Аялал&дэлхийн иргэн · М8 Хэвлэл мэдээлэл&дижитал · М9 Ажил мэргэжил · М10 B2 capstone
//  ⚠️ Энэ файлыг index.html-д vocab.js, lessons.js, lessons_b1.js-ийн ДАРАА ачаална.
// ============================================================

COURSES.b2 = [
  {
    id:'b2m1l1', title:"1.1 Хэвлэл мэдээлэл", level:"B2 · М1",
    blurb:"Had I known… / Were I to… / Should you need… — Урвуу нөхцөлт өгүүлбэр ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Урвуу нөхцөлт өгүүлбэр (Inverted conditionals)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн эхний том дүрэм — <b>«if»-ийг хаяж, туслах үйл үгээ урагшлуулан</b> албан ёсны, өнгө аястай нөхцөл үүсгэх.<br><br>
        <b>1) Had I + V3 (= If I had…):</b> өнгөрсний бодит бус нөхцөл.
        <div style="margin:12px 0"><span class="tag">HAD I KNOWN the source was unreliable, I wouldn't have shared it.</span><span class="tag">Had it not been for the whistleblower, the scandal would have stayed hidden.</span></div>
        <b>2) Were I to + V1 (= If I were to…):</b> ирээдүйн таамаг, албан ёсны.
        <div style="margin:12px 0"><span class="tag">WERE the outlet TO PUBLISH that, it would face a lawsuit.</span><span class="tag">Were I in charge of the newsroom, I would fact-check everything.</span></div>
        <b>3) Should you + V1 (= If you should…):</b> эелдэг, албан бичгийн нөхцөл.
        <div style="margin:12px 0"><span class="tag">SHOULD YOU NEED the full coverage, visit our website.</span><span class="tag">Should any errors appear, please contact the editor.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        media outlet /ˈmiːdiə ˈaʊtlet/ — мэдээллийн хэрэгсэл · broadcaster /ˈbrɔːdkɑːstər/ — нэвтрүүлэгч байгууллага · coverage /ˈkʌvərɪdʒ/ — мэдээллийн хамралт<br>
        headline /ˈhedlaɪn/ — гарчиг · editorial /ˌedɪˈtɔːriəl/ — редакцийн нийтлэл · circulation /ˌsɜːrkjəˈleɪʃn/ — хэвлэлийн тираж<br>
        subscription /səbˈskrɪpʃn/ — захиалга · mainstream /ˈmeɪnstriːm/ — гол урсгалын · tabloid /ˈtæblɔɪd/ — шар сонин<br>
        broadsheet /ˈbrɔːdʃiːt/ — нухацтай сонин · press freedom /pres ˈfriːdəm/ — хэвлэлийн эрх чөлөө · censorship /ˈsensərʃɪp/ — цензур<br>
        propaganda /ˌprɒpəˈɡændə/ — суртал ухуулга · readership /ˈriːdərʃɪp/ — уншигчид · watchdog /ˈwɒtʃdɒɡ/ — хяналтын байгууллага</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If had I known» ✗ — урвуулга хийвэл <b>«if» хаясан</b> байх ёстой: <b>Had I known</b> ✓. Мөн «Had I would known» ✗ → урвуулгад <b>would</b> ороход хэрэггүй: <b>Had I known</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «IF-ийг хаяад Had / Were / Should-ыг урагшлуул» — албан ёсны өнгө аяс төрнө.</p>`
    },
    phrases:[
      {en:"Had I known the source was unreliable, I wouldn't have shared it.", pron:"хэд ай ноун зэ сорс воз анрилайэбл, ай вүднт хэв шэрд ит.", mn:"Эх сурвалж найдваргүйг мэдсэн бол хуваалцахгүй байсан."},
      {en:"Were the outlet to publish that, it would face a lawsuit.", pron:"вөр зи аутлет ту паблиш зэт, ит вүд фэйс э лосьют.", mn:"Хэрэв тэр хэрэгсэл үүнийг нийтэлбэл шүүхэд өгөгдөнө."},
      {en:"Should you need the full coverage, visit our website.", pron:"шүд ю нийд зэ фул кавэриж, визит аур вэбсайт.", mn:"Хэрэв бүрэн мэдээлэл хэрэгтэй бол манай вэбсайтад зочилно уу."},
      {en:"Had it not been for the whistleblower, the scandal would have stayed hidden.", pron:"хэд ит нот бийн фор зэ висэлблоуэр, зэ скэндл вүд хэв стэйд хидн.", mn:"Илчлэгч байгаагүйсэн бол хэрэг далд хэвээр үлдэх байсан."},
      {en:"Were I in charge of the newsroom, I would fact-check everything.", pron:"вөр ай ин чарж оф зэ ньюзрум, ай вүд фэкт-чек эвритинг.", mn:"Хэрэв би редакцийг удирдаж байсан бол бүгдийг шалгах байсан."}
    ],
    exercises:[
      {q:"Урвуу нөхцөл:", parts:["Had I ", " the source was fake, I wouldn't have shared it."], opts:["known","would have known"], a:0, fix:"Had + эзэн + V3 → Had I known (would ✗)."},
      {q:"Were урвуулга:", parts:["", " the outlet to publish it, it would face a lawsuit."], opts:["Were","Would"], a:0, fix:"Were + эзэн + to + V1 → Were the outlet to…"},
      {q:"Should:", parts:["Should you ", " more coverage, contact us."], opts:["need","needed"], a:0, fix:"Should + эзэн + V1 → Should you need."},
      {q:"Had it not been for:", parts:["", " the whistleblower, the truth would have stayed hidden."], opts:["Had it not been for","If not"], a:0, fix:"Had it not been for = …байгаагүй бол (албан ёсны)."}
    ],
    speak:{ scene:'Редакцийн хурал', turns:[
      {ruby:"Why didn't you run the story last night?", pron:"вай диднт ю ран зэ стори ласт найт?", mn:"Яагаад өчигдөр орой мэдээг гаргасангүй вэ?",
        choices:[{t:"Had I verified the source in time, I would have published it immediately.",best:true,mn:"Эх сурвалжаа цагтаа баталгаажуулсан бол тэр даруй нийтлэх байсан."},{t:"If I would have verified the source, I published it.",best:false,fix:"If I WOULD HAVE ✗ → Had I verified…, I would have published."}]},
      {ruby:"What if the editor asks for more details?", pron:"вот иф зи эдитор аскс фор мор дийтэйлз?", mn:"Хэрэв редактор дэлгэрэнгүй асуувал яах вэ?",
        choices:[{t:"Should he need more details, I'll send the full footage right away.",best:true,mn:"Хэрэв тэр дэлгэрэнгүй хэрэгтэй бол бүрэн бичлэгийг тэр даруй илгээнэ."},{t:"If he will need details, I send footage.",best:false,fix:"If he WILL need ✗ → Should he need…, I'll send."}]},
      {ruby:"This could damage our reputation.", pron:"зис күд дэмиж аур репьютэйшн.", mn:"Энэ манай нэр хүндэд халдаж магадгүй.",
        choices:[{t:"Were we to publish unverified claims, we would lose all credibility.",best:true,mn:"Хэрэв бид баталгаажаагүй мэдээлэл нийтэлбэл бүх итгэлээ алдана."},{t:"If we would publish unverified claims, we lose credibility.",best:false,fix:"If we WOULD publish ✗ → Were we to publish…, we would lose."}]}
    ]}
  },
  {
    id:'b2m1l2', title:"1.2 Мэдээ", level:"B2 · М1",
    blurb:"No sooner…than / Hardly…when / Not until / Only then — Сөрөг үгийн дараах урвуулга ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Сөрөг/хязгаарлах үгийн дараах урвуулга (Negative inversion)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өгүүлбэрийн эхэнд <b>сөрөг буюу хязгаарлах утгатай үг</b> тавивал ард нь <b>туслах үйл үг + эзэн</b> гэсэн урвуу дэс дараа орно.<br><br>
        <b>No sooner … than / Hardly … when:</b> нэг үйл болмогц нөгөө нь.
        <div style="margin:12px 0"><span class="tag">NO SOONER HAD the story broken THAN it went viral.</span><span class="tag">HARDLY HAD the bulletin ended WHEN the phones started ringing.</span></div>
        <b>Not until …:</b> …болтол л (үгүй).
        <div style="margin:12px 0"><span class="tag">NOT UNTIL the footage leaked DID the officials respond.</span></div>
        <b>Only then / Never before / Little:</b> онцлон урвуулах.
        <div style="margin:12px 0"><span class="tag">ONLY THEN DID we realise the report was biased.</span><span class="tag">NEVER BEFORE HAD a rumour spread so quickly.</span><span class="tag">LITTLE DID they know the source was lying.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        breaking news /ˈbreɪkɪŋ njuːz/ — шуурхай мэдээ · bulletin /ˈbʊlətɪn/ — мэдээллийн товч · correspondent /ˌkɒrəˈspɒndənt/ — сурвалжлагч<br>
        anchor /ˈæŋkər/ — мэдээ хөтлөгч · feed /fiːd/ — мэдээллийн урсгал · update /ˈʌpdeɪt/ — шинэчлэл<br>
        alert /əˈlɜːrt/ — сэрэмжлүүлэг · exclusive /ɪkˈskluːsɪv/ — онцгой мэдээ · scoop /skuːp/ — түрүүлж авсан мэдээ<br>
        newswire /ˈnjuːzwaɪər/ — агентлагийн урсгал · dispatch /dɪˈspætʃ/ — илгээсэн мэдээ · briefing /ˈbriːfɪŋ/ — товч мэдээлэл<br>
        roundup /ˈraʊndʌp/ — мэдээний тойм · digest /ˈdaɪdʒest/ — товчлол · livestream /ˈlaɪvstriːm/ — шууд дамжуулалт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «No sooner the news had broken» ✗ — сөрөг үгийн дараа <b>урвуулах</b> ёстой: <b>No sooner HAD the news broken</b> ✓. Мөн No sooner нь <b>than</b>, Hardly нь <b>when</b> гэдгийг андуурч болохгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сөрөг үг эхэлбэл асуултын дэс дараа» — Did we / Had it / Have I гэх мэт урвуулна.</p>`
    },
    phrases:[
      {en:"No sooner had the story broken than it went viral.", pron:"ноу сунэр хэд зэ стори броукн зэн ит вэнт вайрал.", mn:"Мэдээ гармагц тэр даруй тархсан."},
      {en:"Hardly had the bulletin ended when the phones started ringing.", pron:"хардли хэд зэ булэтин эндэд вэн зэ фоунз стартид рингинг.", mn:"Мэдээ дуусмагц утаснууд дуугарч эхэлсэн."},
      {en:"Not until the footage leaked did the officials respond.", pron:"нот антил зэ футиж лийкт дид зи офишлз риспонд.", mn:"Бичлэг задартал албаныхан хариу өгөөгүй."},
      {en:"Only then did we realise the report was biased.", pron:"оунли зэн дид ви риэлайз зэ рипорт воз байэст.", mn:"Зөвхөн тэр үед л бид мэдээ талыг барьсныг ойлгосон."},
      {en:"Never before had a rumour spread so quickly.", pron:"нэвэр бифор хэд э румэр спрэд соу квикли.", mn:"Цуу яриа ийм хурдан тархаж байгаагүй."}
    ],
    exercises:[
      {q:"No sooner урвуулга:", parts:["No sooner ", " the story broken than it went viral."], opts:["had","the news"], a:0, fix:"No sooner + HAD + эзэн → No sooner had the story…"},
      {q:"Hardly…when:", parts:["Hardly had the bulletin ended ", " the phones rang."], opts:["when","than"], a:0, fix:"Hardly … WHEN (No sooner нь than)."},
      {q:"Not until:", parts:["Not until the footage leaked ", " the officials respond."], opts:["did","they"], a:0, fix:"Not until + өгүүлбэр + DID + эзэн."},
      {q:"Only then:", parts:["Only then ", " we realise it was fake."], opts:["did","we"], a:0, fix:"Only then + DID + эзэн → did we realise."}
    ],
    speak:{ scene:'Шуурхай мэдээний өрөө', turns:[
      {ruby:"How fast did the story spread?", pron:"хау фаст дид зэ стори спрэд?", mn:"Мэдээ хэр хурдан тархсан бэ?",
        choices:[{t:"No sooner had we posted it than it went viral worldwide.",best:true,mn:"Бид тавьмагц дэлхий даяар тархсан."},{t:"No sooner we posted it than it went viral.",best:false,fix:"No sooner HAD WE posted (урвуулга дутуу)."}]},
      {ruby:"When did the officials finally react?", pron:"вэн дид зи офишлз файнэли риэкт?", mn:"Албаныхан хэзээ эцэст нь хариу өгсөн бэ?",
        choices:[{t:"Not until the footage leaked did they issue a statement.",best:true,mn:"Бичлэг задартал тэд мэдэгдэл гаргаагүй."},{t:"Not until the footage leaked they issued a statement.",best:false,fix:"Not until… DID THEY issue (урвуулга хэрэгтэй)."}]},
      {ruby:"Did you suspect it was disinformation?", pron:"дид ю саспект ит воз дисинформэйшн?", mn:"Санаатай худал мэдээлэл гэж сэжиглэсэн үү?",
        choices:[{t:"Not at first. Only then did we realise the source had lied.",best:true,mn:"Эхэндээ үгүй. Зөвхөн тэр үед л эх сурвалж худал хэлснийг ойлгосон."},{t:"Not at first. Only then we realised the source lied.",best:false,fix:"Only then DID WE realise (урвуулга)."}]}
    ]}
  },
  {
    id:'b2m1l3', title:"1.3 Сурвалжлага", level:"B2 · М1",
    blurb:"Having finished… / Being tired… — Причастийн бүтэц ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Причастийн бүтэц (Participle clauses)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хоёр өгүүлбэрийг <b>причасти (-ing / V3)</b> ашиглан богиносгож, албан ёсны бичгийн өнгө аяс өгөх.<br><br>
        <b>Having + V3 (урьд дуусан үйлдэл):</b>
        <div style="margin:12px 0"><span class="tag">HAVING VERIFIED the source, the reporter published the story.</span></div>
        <b>Being + adj/V3 (шалтгаан = because):</b>
        <div style="margin:12px 0"><span class="tag">BEING under pressure, the editor missed the error.</span></div>
        <b>V3 причасти (идэвхгүй = who/which was):</b>
        <div style="margin:12px 0"><span class="tag">INTERVIEWED by police, the eyewitness changed his story.</span><span class="tag">The report, WRITTEN overnight, contained several errors.</span></div>
        <b>Not + причасти (үгүйсгэл):</b>
        <div style="margin:12px 0"><span class="tag">NOT KNOWING the full facts, they jumped to conclusions.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        investigate /ɪnˈvestɪɡeɪt/ — мөрдөн шалгах · source /sɔːrs/ — эх сурвалж · whistleblower /ˈwɪslbloʊər/ — илчлэгч<br>
        exposé /ˌekspoʊˈzeɪ/ — илчлэх нийтлэл · allegation /ˌæləˈɡeɪʃn/ — буруутгал · verify /ˈverɪfaɪ/ — баталгаажуулах<br>
        fact-check /ˈfækt tʃek/ — баримт шалгах · byline /ˈbaɪlaɪn/ — зохиогчийн нэр · footage /ˈfʊtɪdʒ/ — бичлэг<br>
        eyewitness /ˈaɪwɪtnəs/ — нүдээр үзсэн гэрч · testimony /ˈtestɪməni/ — мэдүүлэг · cover-up /ˈkʌvər ʌp/ — далдлалт<br>
        disclose /dɪsˈkloʊz/ — задлан мэдээлэх · leak /liːk/ — задарсан мэдээлэл · impartiality /ˌɪmpɑːrʃiˈæləti/ — хараат бус байдал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Причастийн эзэн <b>гол өгүүлбэрийн эзэнтэй таарах</b> ёстой. «Having finished the report, the phone rang» ✗ (утас дуусгаагүй) → <b>Having finished the report, she answered the phone</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Урьд дууссан бол Having + V3, шалтгаан бол Being, идэвхгүй бол ганц V3» — эзнээ мартаж болохгүй.</p>`
    },
    phrases:[
      {en:"Having verified the source, the reporter published the story.", pron:"хэвинг верифайд зэ сорс, зэ рипортэр паблишт зэ стори.", mn:"Эх сурвалжаа баталгаажуулсны дараа сурвалжлагч мэдээг нийтэлсэн."},
      {en:"Being under pressure, the editor missed the error.", pron:"бийнг андэр прэшэр, зи эдитор миссд зи эрор.", mn:"Дарамт дор байсан тул редактор алдааг анзаараагүй."},
      {en:"Interviewed by police, the eyewitness changed his story.", pron:"интэрвьюд бай полийс, зи айвитнэс чэйнжд хиз стори.", mn:"Цагдаад ярилцлага өгсөн гэрч мэдүүлгээ өөрчилсөн."},
      {en:"Not knowing the full facts, they jumped to conclusions.", pron:"нот ноуинг зэ фул фэктс, зэй жампт ту канклужнз.", mn:"Бүх баримтыг мэдэхгүй тул тэд яаран дүгнэсэн."},
      {en:"The report, written overnight, contained several errors.", pron:"зэ рипорт, ритн оувэрнайт, кэнтэйнд сэвэрал эрорз.", mn:"Шөнөжингөө бичсэн тэр мэдээ хэд хэдэн алдаатай байв."}
    ],
    exercises:[
      {q:"Perfect причасти:", parts:["", " the source, she published the story."], opts:["Having verified","Verifying"], a:0, fix:"Урьд дуусан үйлдэл → Having + V3."},
      {q:"Being (шалтгаан):", parts:["", " under pressure, he missed the error."], opts:["Being","Been"], a:0, fix:"Шалтгаан → Being (Been ✗ ганцаараа)."},
      {q:"V3 причасти (идэвхгүй):", parts:["", " by police, the witness changed his story."], opts:["Interviewed","Interviewing"], a:0, fix:"Идэвхгүй (= who was interviewed) → V3 Interviewed."},
      {q:"Dangling алдаа:", parts:["Having finished the report, ", "."], opts:["she answered the phone","the phone rang"], a:0, fix:"Оршилын эзэн таарах ёстой → she answered."}
    ],
    speak:{ scene:'Сурвалжлагчтай ярилцлага', turns:[
      {ruby:"How did you prepare this exposé?", pron:"хау дид ю припэр зис экспоузэй?", mn:"Энэ илчлэх нийтлэлээ яаж бэлдсэн бэ?",
        choices:[{t:"Having spent months investigating, I finally had enough evidence.",best:true,mn:"Хэдэн сар мөрдөн шалгасны эцэст эцэст нь хангалттай нотолгоотой болсон."},{t:"Having spent months investigating, the evidence was enough.",best:false,fix:"Dangling ✗ → Having spent months…, I had enough (эзэн = I)."}]},
      {ruby:"Was the witness cooperative?", pron:"воз зи витнэс коуопэрэтив?", mn:"Гэрч хамтран ажилласан уу?",
        choices:[{t:"Not really. Being afraid of the police, she refused to talk.",best:true,mn:"Тийм ч биш. Цагдаанаас айсан тул тэр ярихаас татгалзсан."},{t:"Not really. Been afraid of the police, she refused to talk.",best:false,fix:"Been ✗ ганцаараа → BEING afraid."}]},
      {ruby:"Any regrets about the article?", pron:"эни ригрэтс эбаут зи артикл?", mn:"Нийтлэлийн талаар харамсах зүйл байна уу?",
        choices:[{t:"Written in a rush, it had a few mistakes I now regret.",best:true,mn:"Яаран бичсэн тул одоо харамсдаг цөөн алдаатай байсан."},{t:"Writing in a rush, it had a few mistakes.",best:false,fix:"Идэвхгүй (мэдээг бичсэн) → WRITTEN in a rush."}]}
    ]}
  },
  {
    id:'b2m1l4', title:"1.4 Олон нийт", level:"B2 · М1",
    blurb:"is thought to have + V3 / got fired / have it done — Дэвшилтэт идэвхгүй хэлбэр ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Дэвшилтэт идэвхгүй хэлбэр (Advanced passive)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Эх сурвалж тодорхойгүй, эсвэл албан ёсны мэдээ дамжуулах <b>гурван дэвшилтэт идэвхгүй бүтэц</b>.<br><br>
        <b>1) is thought/said/believed TO HAVE + V3</b> (олон нийт ингэж үздэг):
        <div style="margin:12px 0"><span class="tag">The minister IS THOUGHT TO HAVE MISLED the public.</span><span class="tag">The documents ARE SAID TO HAVE BEEN LEAKED deliberately.</span><span class="tag">He IS BELIEVED TO BE hiding abroad.</span></div>
        <b>2) get + V3</b> (ярианы идэвхгүй, гэнэтийн үйл):
        <div style="margin:12px 0"><span class="tag">The journalist GOT SACKED after the story broke.</span></div>
        <b>3) have/get something DONE</b> (шалтгаант идэвхгүй — өөр хүнээр хийлгэх):
        <div style="margin:12px 0"><span class="tag">We HAD the article FACT-CHECKED before publishing.</span><span class="tag">She GOT her phone HACKED.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        public opinion /ˈpʌblɪk əˈpɪnjən/ — олон нийтийн бодол · demographic /ˌdeməˈɡræfɪk/ — хүн амзүйн бүлэг · citizen /ˈsɪtɪzn/ — иргэн<br>
        civic /ˈsɪvɪk/ — иргэний · poll /poʊl/ — санал асуулга · survey /ˈsɜːrveɪ/ — судалгаа<br>
        consensus /kənˈsensəs/ — зөвшилцөл · awareness /əˈwernəs/ — мэдлэг ойлголт · engagement /ɪnˈɡeɪdʒmənt/ — оролцоо<br>
        participation /pɑːrˌtɪsɪˈpeɪʃn/ — идэвхтэй оролцоо · welfare /ˈwelfer/ — нийгмийн халамж · inequality /ˌɪnɪˈkwɒləti/ — тэгш бус байдал<br>
        community /kəˈmjuːnəti/ — нийгэмлэг · activism /ˈæktɪvɪzəm/ — идэвхтний хөдөлгөөн · grassroots /ˈɡræsruːts/ — олон түмний суурь</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «is thought to lied» ✗ — өнгөрсөн үйлдэл бол <b>to HAVE + V3</b>: <b>is thought to have lied</b> ✓. Мөн «had the article fact-check» ✗ → <b>had it fact-checkED</b> ✓ (V3).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хүмүүс ингэж боддог → is thought TO HAVE + V3; өөр хүнээр хийлгэсэн → have it DONE».</p>`
    },
    phrases:[
      {en:"The official is thought to have misled the public.", pron:"зи офишл из сот ту хэв мислэд зэ паблик.", mn:"Тэр албан тушаалтан олон нийтийг төөрөгдүүлсэн гэж үздэг."},
      {en:"The documents are said to have been leaked deliberately.", pron:"зэ докьюмэнтс а сэд ту хэв бийн лийкт делибэрэтли.", mn:"Баримт бичгийг санаатай задалсан гэдэг."},
      {en:"The journalist got sacked after the story broke.", pron:"зэ жөрнэлист гот сэкт афтэр зэ стори броук.", mn:"Мэдээ гарсны дараа сэтгүүлч ажлаас халагдсан."},
      {en:"We had the article fact-checked before publishing.", pron:"ви хэд зи артикл фэкт-чект бифор паблишинг.", mn:"Бид нийтлэхээсээ өмнө нийтлэлээ шалгуулсан."},
      {en:"He is believed to be hiding from the media.", pron:"хи из билийвд ту би хайдинг фром зэ мийдиа.", mn:"Тэр хэвлэлээс нуугдаж байгаа гэж үздэг."}
    ],
    exercises:[
      {q:"is thought to have:", parts:["The minister is thought to ", " lied."], opts:["have","has"], a:0, fix:"is thought TO HAVE + V3 (өнгөрсөн)."},
      {q:"are said to:", parts:["The files are said to have ", " leaked."], opts:["been","being"], a:0, fix:"to have BEEN + V3 (идэвхгүй)."},
      {q:"get passive:", parts:["The reporter got ", " after the scandal."], opts:["sacked","sack"], a:0, fix:"get + V3 → got sacked."},
      {q:"Шалтгаант идэвхгүй:", parts:["We had the article ", " by lawyers."], opts:["checked","check"], a:0, fix:"have something DONE → had it checked."}
    ],
    speak:{ scene:'Мэдээний тойм нэвтрүүлэг', turns:[
      {ruby:"What's the latest on the corruption case?", pron:"вотс зэ лэйтэст он зэ корапшн кэйс?", mn:"Авлигын хэргийн хамгийн сүүлийн мэдээ юу вэ?",
        choices:[{t:"The mayor is believed to have accepted illegal payments.",best:true,mn:"Хотын дарга хууль бус мөнгө авсан гэж үздэг."},{t:"The mayor is believed to accepted illegal payments.",best:false,fix:"is believed to HAVE accepted (өнгөрсөн үйлдэл)."}]},
      {ruby:"How did the press find out?", pron:"хау дид зэ прэс файнд аут?", mn:"Хэвлэл яаж мэдсэн бэ?",
        choices:[{t:"The documents are said to have been leaked by an insider.",best:true,mn:"Баримт бичгийг дотоод хүн задалсан гэдэг."},{t:"The documents are said to have leaked by an insider.",best:false,fix:"to have BEEN leaked (идэвхгүй хэлбэр)."}]},
      {ruby:"Did the newspaper verify everything?", pron:"дид зэ ньюспэйпэр верифай эвритинг?", mn:"Сонин бүгдийг баталгаажуулсан уу?",
        choices:[{t:"Yes, they had every claim fact-checked by independent experts.",best:true,mn:"Тийм, тэд мэдэгдэл бүрийг хараат бус шинжээчээр шалгуулсан."},{t:"Yes, they had every claim fact-check by experts.",best:false,fix:"had every claim FACT-CHECKED (V3)."}]}
    ]}
  },
  {
    id:'b2m1l5', title:"1.5 Цуу яриа", level:"B2 · М1",
    blurb:"was going to / would / was to / was about to — Өнгөрсөн дэх ирээдүй ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Өнгөрсөн дэх ирээдүй (Future in the past)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөн цэгээс харахад <b>тэр үед ирээдүй байсан</b> үйлдлийг илэрхийлэх дөрвөн бүтэц.<br><br>
        <b>was/were going to</b> (төлөвлөж байсан, ихэнхдээ болоогүй):
        <div style="margin:12px 0"><span class="tag">I WAS GOING TO post it, but I fact-checked it first.</span></div>
        <b>would</b> (дам ярианд «will»-ийн өнгөрсөн):
        <div style="margin:12px 0"><span class="tag">She said she WOULD deny the whole rumour.</span></div>
        <b>was/were to</b> (товлосон, албан ёсны төлөвлөгөө):
        <div style="margin:12px 0"><span class="tag">The press conference WAS TO begin at noon.</span><span class="tag">They WERE TO HAVE MET the source, but it fell through. (болоогүй төлөвлөгөө)</span></div>
        <b>was/were about to</b> (тэр дороо болох гэж байсан):
        <div style="margin:12px 0"><span class="tag">He WAS ABOUT TO go live when the signal dropped.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        rumour /ˈruːmər/ — цуу яриа · gossip /ˈɡɒsɪp/ — хов жив · hearsay /ˈhɪərseɪ/ — сонссон яриа<br>
        unverified /ʌnˈverɪfaɪd/ — баталгаажаагүй · misinformation /ˌmɪsɪnfərˈmeɪʃn/ — буруу мэдээлэл · disinformation /dɪsˌɪnfərˈmeɪʃn/ — санаатай худал мэдээлэл<br>
        hoax /hoʊks/ — худал зохиомол · fabricate /ˈfæbrɪkeɪt/ — хуурамчаар зохиох · distort /dɪˈstɔːrt/ — гуйвуулах<br>
        exaggerate /ɪɡˈzædʒəreɪt/ — хэтрүүлэх · sensationalise /senˈseɪʃənəlaɪz/ — шуугиан дэгдээх · viral /ˈvaɪrəl/ — асар хурдан тархсан<br>
        debunk /diːˈbʌŋk/ — худлыг илчлэх · clickbait /ˈklɪkbeɪt/ — анхаарал татах заль · smear /smɪər/ — гүтгэлэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Өнгөрсний өнцгөөс «I will go yesterday» ✗ — <b>was going to / would</b> хэрэглэнэ: <b>I was going to go</b> ✓. Дам ярианд «She said she will» ✗ → <b>she would</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өнгөрсний нүдээр ирээдүй харвал will → would, be going to → WAS going to».</p>`
    },
    phrases:[
      {en:"I was going to post it, but I fact-checked it first.", pron:"ай воз гоуинг ту поуст ит, бат ай фэкт-чект ит фөрст.", mn:"Би тавих гэж байсан ч эхлээд баримтыг шалгасан."},
      {en:"She said she would deny the whole rumour.", pron:"ши сэд ши вүд динай зэ хоул румэр.", mn:"Тэр бүх цуу яриаг үгүйсгэнэ гэж хэлсэн."},
      {en:"The press conference was to begin at noon.", pron:"зэ прэс канфэрэнс воз ту бигин эт нун.", mn:"Хэвлэлийн бага хурал үд дунд эхлэх ёстой байв."},
      {en:"He was about to go live when the signal dropped.", pron:"хи воз эбаут ту гоу лайв вэн зэ сигнэл дропт.", mn:"Тэр шууд эфирт гарах гэж байтал дохио тасарсан."},
      {en:"They were to have met the source, but it fell through.", pron:"зэй вөр ту хэв мэт зэ сорс, бат ит фэл сру.", mn:"Тэд эх сурвалжтай уулзах ёстой байсан ч болоогүй."}
    ],
    exercises:[
      {q:"was going to:", parts:["I ", " post it, but I checked first."], opts:["was going to","will"], a:0, fix:"Өнгөрсөн дэх ирээдүй → was going to."},
      {q:"would (дам яриа):", parts:["She said she ", " deny it."], opts:["would","will"], a:0, fix:"Өнгөрсөн ярианд → would (will ✗)."},
      {q:"was to:", parts:["The conference ", " begin at noon."], opts:["was to","is to"], a:0, fix:"Өнгөрсөн товлолт → was to."},
      {q:"was about to:", parts:["He was ", " to go live when it dropped."], opts:["about","going"], a:0, fix:"was ABOUT to = тэр дороо болох гэж байсан."}
    ],
    speak:{ scene:'Тасарсан шууд дамжуулалт', turns:[
      {ruby:"Why didn't the interview happen?", pron:"вай диднт зи интэрвью хэпн?", mn:"Яагаад ярилцлага болоогүй вэ?",
        choices:[{t:"We were to have met the source, but he cancelled at the last minute.",best:true,mn:"Бид эх сурвалжтай уулзах ёстой байсан ч тэр сүүлийн мөчид цуцалсан."},{t:"We will meet the source, but he cancelled.",best:false,fix:"Өнгөрсөн → We WERE TO HAVE MET the source."}]},
      {ruby:"What happened during the live report?", pron:"вот хэпнд дюринг зэ лайв рипорт?", mn:"Шууд репортажийн үеэр юу болсон бэ?",
        choices:[{t:"The anchor was about to speak when the signal suddenly dropped.",best:true,mn:"Хөтлөгч ярих гэж байтал дохио гэнэт тасарсан."},{t:"The anchor will speak when the signal dropped.",best:false,fix:"was ABOUT TO speak (өнгөрсөн дэх ирээдүй)."}]},
      {ruby:"Did she confirm the rumour?", pron:"дид ши канфөрм зэ румэр?", mn:"Тэр цуу яриаг батласан уу?",
        choices:[{t:"No. She had said she would deny everything, and she did.",best:true,mn:"Үгүй. Тэр бүгдийг үгүйсгэнэ гэж хэлж байсан бөгөөд тэгсэн."},{t:"No. She had said she will deny everything.",best:false,fix:"Дам яриа → she WOULD deny (will ✗)."}]}
    ]}
  },
  {
    id:'b2m1l6', title:"1.6 Таамаглал", level:"B2 · М1",
    blurb:"must/might/could have been + -ing / can't have been — Дэвшилтэт таамаглалын модаль ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Дэвшилтэт таамаглалын модаль (Advanced speculation)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>үргэлжилж байсан</b> үйлдлийн талаарх таамаг, итгэлийн зэргийг илэрхийлэх.<br><br>
        <b>must have been + V-ing</b> (лавтай тэгж байсан):
        <div style="margin:12px 0"><span class="tag">She MUST HAVE BEEN LYING — the evidence contradicts her.</span></div>
        <b>might / could have been + V-ing</b> (магадгүй тэгж байсан):
        <div style="margin:12px 0"><span class="tag">They MIGHT HAVE BEEN spreading disinformation on purpose.</span><span class="tag">He COULD HAVE BEEN misled by a fake source.</span></div>
        <b>can't have been</b> (боломжгүй, тийм байх аргагүй):
        <div style="margin:12px 0"><span class="tag">The figures CAN'T HAVE BEEN accurate; they don't add up.</span></div>
        <b>Ялгаа:</b> <span class="tag">must have = лавтай тийм</span><span class="tag">can't have = лавтай тийм биш</span><span class="tag">might/could have = магадгүй</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        assume /əˈsjuːm/ — таамаглах · presume /prɪˈzjuːm/ — тооцон үзэх · infer /ɪnˈfɜːr/ — дүгнэн гаргах<br>
        deduce /dɪˈdjuːs/ — задлан дүгнэх · hypothesis /haɪˈpɒθəsɪs/ — таамаглал (шинжлэх ухаан) · plausible /ˈplɔːzəbl/ — үнэмшилтэй<br>
        likelihood /ˈlaɪklihʊd/ — магадлал · conjecture /kənˈdʒektʃər/ — цэц таамаг · indication /ˌɪndɪˈkeɪʃn/ — шинж тэмдэг<br>
        evidence /ˈevɪdəns/ — нотолгоо · imply /ɪmˈplaɪ/ — далдуур илэрхийлэх · speculation /ˌspekjəˈleɪʃn/ — таамаг<br>
        conclude /kənˈkluːd/ — дүгнэлт гаргах · estimate /ˈestɪmeɪt/ — тооцоолох · predict /prɪˈdɪkt/ — урьдчилан таамаглах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «must have lying» ✗ — <b>been</b> дутуу: <b>must have BEEN lying</b> ✓. Боломжгүйг «mustn't have» гэж болохгүй → <b>CAN'T have</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Модаль + HAVE + BEEN + V-ing» гэсэн гурван давхар — гурвуулаа заавал байна.</p>`
    },
    phrases:[
      {en:"She must have been lying about her sources.", pron:"ши маст хэв бийн лайинг эбаут хөр сорсиз.", mn:"Тэр эх сурвалжийнхаа талаар худал хэлж байсан нь лавтай."},
      {en:"They might have been spreading disinformation on purpose.", pron:"зэй майт хэв бийн спрэдинг дисинформэйшн он пөрпэс.", mn:"Тэд санаатайгаар худал мэдээлэл тарааж байсан байж магадгүй."},
      {en:"The figures can't have been accurate.", pron:"зэ фигьюрз кант хэв бийн экьюрэт.", mn:"Тоо баримт үнэн байх аргагүй."},
      {en:"He could have been misled by a fake source.", pron:"хи күд хэв бийн мислэд бай э фэйк сорс.", mn:"Түүнийг хуурамч эх сурвалж төөрөгдүүлсэн байж болох юм."},
      {en:"You must have been watching a different channel.", pron:"ю маст хэв бийн вочинг э дифрэнт чэнэл.", mn:"Чи өөр суваг үзэж байсан нь лавтай."}
    ],
    exercises:[
      {q:"must have been -ing:", parts:["She must have ", " lying."], opts:["been","being"], a:0, fix:"must have BEEN + V-ing → been lying."},
      {q:"-ing хэлбэр:", parts:["They might have been ", " it for months."], opts:["planning","planned"], a:0, fix:"have been + V-ing → planning."},
      {q:"can't have:", parts:["The numbers ", " been accurate."], opts:["can't have","mustn't have"], a:0, fix:"Боломжгүйд итгэлтэй → can't have (mustn't ✗)."},
      {q:"could have been:", parts:["He ", " misled by a fake source."], opts:["could have been","could been"], a:0, fix:"could HAVE been (have дутуу ✗)."}
    ],
    speak:{ scene:'Мэдээ дүн шинжилгээ', turns:[
      {ruby:"Why did the expert give false numbers?", pron:"вай дид зи экспэрт гив фолс намбэрз?", mn:"Яагаад шинжээч худал тоо өгсөн бэ?",
        choices:[{t:"He must have been relying on outdated data.",best:true,mn:"Тэр хуучирсан өгөгдөлд тулгуурлаж байсан нь лавтай."},{t:"He must have relying on outdated data.",best:false,fix:"must have BEEN relying (been дутуу)."}]},
      {ruby:"Do you think the story was true?", pron:"ду ю тинк зэ стори воз тру?", mn:"Мэдээ үнэн байсан гэж бодож байна уу?",
        choices:[{t:"No, it can't have been true — every fact was contradicted.",best:true,mn:"Үгүй, үнэн байх аргагүй — баримт болгон нь няцаагдсан."},{t:"No, it mustn't have been true.",best:false,fix:"Боломжгүй → CAN'T have been (mustn't ✗)."}]},
      {ruby:"How did so many people believe it?", pron:"хау дид соу мэни пийпл билийв ит?", mn:"Яаж ийм олон хүн итгэсэн бэ?",
        choices:[{t:"They might have been sharing it without checking the source.",best:true,mn:"Тэд эх сурвалжийг шалгалгүй хуваалцаж байсан байж магадгүй."},{t:"They might been sharing it without checking.",best:false,fix:"might HAVE been sharing (have дутуу)."}]}
    ]}
  },
  {
    id:'b2m1l7', title:"1.7 Онцлох", level:"B2 · М1",
    blurb:"It was… that / What worries me is… / Never have I — Онцлолын бүтэц ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Онцлолын бүтэц — cleft ба fronting",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өгүүлбэрийн нэг хэсгийг <b>тусгайлан онцлох</b> хоёр том арга: cleft (хуваасан) ба fronting (урагшлуулах).<br><br>
        <b>It-cleft (эзэн/объектыг онцлох):</b>
        <div style="margin:12px 0"><span class="tag">IT WAS the whistleblower WHO exposed the truth.</span></div>
        <b>What-cleft (санаа/объектыг онцлох, дараа нь ганц тооны is):</b>
        <div style="margin:12px 0"><span class="tag">WHAT worries me most IS the media bias.</span><span class="tag">WHAT we need IS independent journalism.</span></div>
        <b>It is only … that (цаг/нөхцөлийг онцлох):</b>
        <div style="margin:12px 0"><span class="tag">IT IS only now THAT the public understands the truth.</span></div>
        <b>Fronting + урвуулга (сөрөг үг урагшлуулах):</b>
        <div style="margin:12px 0"><span class="tag">NEVER HAVE I seen such biased coverage.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        emphasise /ˈemfəsaɪz/ — онцлох · highlight /ˈhaɪlaɪt/ — тодотгох · underscore /ˌʌndərˈskɔːr/ — тодруулах<br>
        notably /ˈnoʊtəbli/ — ялангуяа · significant /sɪɡˈnɪfɪkənt/ — томоохон · crucial /ˈkruːʃl/ — тун чухал<br>
        striking /ˈstraɪkɪŋ/ — анхаарал татам · remarkable /rɪˈmɑːrkəbl/ — гайхалтай · prominent /ˈprɒmɪnənt/ — нэр хүндтэй тод<br>
        undeniable /ˌʌndɪˈnaɪəbl/ — маргаангүй · stark /stɑːrk/ — эрс тод · pivotal /ˈpɪvətl/ — гол цөмийн<br>
        compelling /kəmˈpelɪŋ/ — итгэл төрүүлэм · paramount /ˈpærəmaʊnt/ — юунаас ч чухал · foremost /ˈfɔːrmoʊst/ — тэргүүн зэргийн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> What-cleft үргэлж <b>ганц тоо</b>: «What we need are» ✗ → <b>What we need IS</b> ✓. Fronting-д дэс дараа: «Never I have» ✗ → <b>Never HAVE I</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «It was X that…, What … is …, Never have I …» — онцлохыг эхэнд, урвуулгыг мартав ч болохгүй.</p>`
    },
    phrases:[
      {en:"It was the whistleblower who exposed the whole scandal.", pron:"ит воз зэ висэлблоуэр ху экспоузд зэ хоул скэндл.", mn:"Бүх хэргийг илчилсэн нь илчлэгч байсан."},
      {en:"What worries me most is the media bias.", pron:"вот варриз ми моуст из зэ мийдиа байэс.", mn:"Намайг хамгийн их зовоож буй зүйл бол хэвлэлийн талыг барих явдал."},
      {en:"What we need is independent journalism.", pron:"вот ви нийд из индипэндэнт жөрнэлизм.", mn:"Бидэнд хэрэгтэй зүйл бол хараат бус сэтгүүл зүй."},
      {en:"It is only now that the public understands the truth.", pron:"ит из оунли нау зэт зэ паблик андэрстэндз зэ трус.", mn:"Зөвхөн одоо л олон нийт үнэнийг ойлгож байна."},
      {en:"Never have I seen such biased coverage.", pron:"нэвэр хэв ай сийн сач байэст кавэриж.", mn:"Ийм талыг барьсан мэдээллийг би хэзээ ч үзээгүй."}
    ],
    exercises:[
      {q:"It-cleft:", parts:["It was the whistleblower ", " exposed it."], opts:["who","which"], a:0, fix:"Хүн онцлоход → who."},
      {q:"What-cleft (ганц тоо):", parts:["What we need ", " honest reporting."], opts:["is","are"], a:0, fix:"What-clause → ганц тооны is."},
      {q:"Fronting урвуулга:", parts:["Never ", " I seen such bias."], opts:["have","I"], a:0, fix:"Never + HAVE + эзэн → have I seen."},
      {q:"It is only now that:", parts:["It is only now ", " people understand."], opts:["that","when"], a:0, fix:"Cleft бүтэц → that."}
    ],
    speak:{ scene:'Хэвлэлийн шүүмж', turns:[
      {ruby:"Who really broke this story?", pron:"ху риэли броук зис стори?", mn:"Энэ мэдээг үнэндээ хэн гаргасан бэ?",
        choices:[{t:"It was an anonymous source who gave us the first documents.",best:true,mn:"Бидэнд анхны баримтыг өгсөн нь нэрээ нууцалсан эх сурвалж байсан."},{t:"It was an anonymous source which gave us the documents.",best:false,fix:"Хүн → who (which ✗)."}]},
      {ruby:"What concerns you about modern media?", pron:"вот кэнсөрнз ю эбаут модэрн мийдиа?", mn:"Орчин үеийн хэвлэлийн юу таныг зовоодог вэ?",
        choices:[{t:"What worries me most is how quickly disinformation spreads.",best:true,mn:"Намайг хамгийн их зовоодог зүйл бол худал мэдээлэл хэчнээн хурдан тархаж буй нь."},{t:"What worries me most are how disinformation spreads.",best:false,fix:"What-clause ганц тоо → IS (are ✗)."}]},
      {ruby:"Have you ever seen coverage this one-sided?", pron:"хэв ю эвэр сийн кавэриж зис ван-сайдид?", mn:"Ингэж талыг барьсан мэдээллийг үзэж байсан уу?",
        choices:[{t:"Never have I seen reporting so blatantly biased.",best:true,mn:"Ийм илт талыг барьсан мэдээллийг би хэзээ ч үзээгүй."},{t:"Never I have seen reporting so biased.",best:false,fix:"Never HAVE I seen (урвуулгын дэс дараа)."}]}
    ]}
  },
  {
    id:'b2m1l8', title:"1.8 Байр суурь", level:"B2 · М1",
    blurb:"arguably / to some extent / on the whole / as far as I'm concerned — Яриаг зөөлрүүлэх ⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Ярианы холбоос ба зөөлрүүлэл (Discourse markers & hedging)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Байр сууриа <b>туйлшралгүй, боловсон, академик</b> байдлаар илэрхийлэх зөөлрүүлэх хэллэгүүд.<br><br>
        <b>Зөөлрүүлэх (hedging) — үнэмлэхүй бус болгоно:</b>
        <div style="margin:12px 0"><span class="tag">ARGUABLY, social media has weakened public trust.</span><span class="tag">TO SOME EXTENT, both sides are right.</span></div>
        <b>Нэгтгэх, ерөнхийлөх:</b>
        <div style="margin:12px 0"><span class="tag">ON THE WHOLE, the coverage was fair.</span><span class="tag">BROADLY SPEAKING, tabloids exaggerate.</span></div>
        <b>Хувийн байр суурь илэрхийлэх:</b>
        <div style="margin:12px 0"><span class="tag">AS FAR AS I'M CONCERNED, censorship is never justified.</span><span class="tag">ADMITTEDLY, the report had a few flaws.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        standpoint /ˈstændpɔɪnt/ — байр суурь · perspective /pərˈspektɪv/ — өнцөг үзэл · viewpoint /ˈvjuːpɔɪnt/ — үзэл бодол<br>
        arguably /ˈɑːrɡjuəbli/ — маргаж болох ч · allegedly /əˈledʒɪdli/ — сурагладгаар · presumably /prɪˈzjuːməbli/ — магадгүй<br>
        admittedly /ədˈmɪtɪdli/ — үнэнийг хэлэхэд · moderate /ˈmɒdərət/ — дунд зэргийн · biased /ˈbaɪəst/ — талыг барьсан<br>
        impartial /ɪmˈpɑːrʃl/ — хараат бус · objective /əbˈdʒektɪv/ — бодитой · subjective /səbˈdʒektɪv/ — субьектив<br>
        credibility /ˌkredəˈbɪləti/ — итгэл үнэмшил · reliable /rɪˈlaɪəbl/ — найдвартай · stance /stæns/ — тодорхой байр суурь</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «To some extend» ✗ — нэр үг <b>extent</b>: <b>to some extent</b> ✓. Мөн «In my opinion I think» ✗ давхардал → <b>As far as I'm concerned…</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Always/never биш — arguably, to some extent, on the whole» ашиглаж зөөлрүүл, B2 өнгө аяс төрнө.</p>`
    },
    phrases:[
      {en:"Arguably, social media has weakened public trust.", pron:"аргьюэбли, соушл мийдиа хэз викэнд паблик траст.", mn:"Магадгүй нийгмийн сүлжээ олон нийтийн итгэлийг сулруулсан."},
      {en:"To some extent, both viewpoints are valid.", pron:"ту сам икстент, боус вьюпойнтс а вэлид.", mn:"Тодорхой хэмжээгээр хоёр талын үзэл бодол хоёулаа үндэслэлтэй."},
      {en:"On the whole, the coverage was fairly balanced.", pron:"он зэ хоул, зэ кавэриж воз фэйрли бэлэнст.", mn:"Ерөнхийдөө мэдээлэл нэлээд тэнцвэртэй байсан."},
      {en:"Broadly speaking, tabloids tend to sensationalise.", pron:"бродли спийкинг, тэблойдз тэнд ту сэнсэйшнэлайз.", mn:"Ерөнхийдөө шар сонинууд шуугиан дэгдээх хандлагатай."},
      {en:"As far as I'm concerned, censorship is never justified.", pron:"эз фар эз айм кэнсөрнд, сэнсэршип из нэвэр жастифайд.", mn:"Миний бодлоор бол цензур хэзээ ч зөвтгөгдөхгүй."}
    ],
    exercises:[
      {q:"Зөөлрүүлэл:", parts:["", ", social media has weakened trust."], opts:["Arguably","Definitely absolutely"], a:0, fix:"Зөөлрүүлсэн байр суурь → Arguably."},
      {q:"to some extent:", parts:["", ", both sides are right."], opts:["To some extent","To some extend"], a:0, fix:"extent (нэр үг) — extend ✗ (үйл үг)."},
      {q:"on the whole:", parts:["", ", the report was balanced."], opts:["On the whole","On whole"], a:0, fix:"Хэвшсэн хэллэг → on THE whole."},
      {q:"as far as I'm concerned:", parts:["As far as I'm ", ", censorship is wrong."], opts:["concerned","concerning"], a:0, fix:"Хэвшмэл → as far as I'm CONCERNED."}
    ],
    speak:{ scene:'Ярилцлагын хөтөлбөр', turns:[
      {ruby:"Do you think social media is harmful?", pron:"ду ю тинк соушл мийдиа из хармфул?", mn:"Нийгмийн сүлжээ хортой гэж бодож байна уу?",
        choices:[{t:"Arguably, it has some benefits, but on the whole the risks outweigh them.",best:true,mn:"Магадгүй зарим давуу талтай ч ерөнхийдөө эрсдэл нь давамгайлдаг."},{t:"Yes, social media is always completely harmful for everyone.",best:false,fix:"Хэт туйлширсан → Arguably… on the whole (зөөлрүүл)."}]},
      {ruby:"Are traditional newspapers more reliable?", pron:"а трэдишнл ньюспэйпэрз мор рилайэбл?", mn:"Уламжлалт сонинууд илүү найдвартай юу?",
        choices:[{t:"Broadly speaking, yes, though to some extent they can be biased too.",best:true,mn:"Ерөнхийдөө тийм, гэхдээ тодорхой хэмжээгээр тэд ч бас талыг барьж болно."},{t:"Yes, newspapers are never biased at all.",best:false,fix:"Absolute ✗ → Broadly speaking… to some extent (зөөлрүүл)."}]},
      {ruby:"Should the government control the press?", pron:"шүд зэ гавэрнмэнт кэнтроул зэ прэс?", mn:"Засгийн газар хэвлэлийг хянах ёстой юу?",
        choices:[{t:"As far as I'm concerned, press freedom is essential in a democracy.",best:true,mn:"Миний бодлоор ардчилалд хэвлэлийн эрх чөлөө зайлшгүй чухал."},{t:"In my opinion I personally think press must be free maybe.",best:false,fix:"Давхардал ✗ → As far as I'm concerned, press freedom is essential."}]}
    ]}
  },
  {
    id:'b2m1l9', title:"1.9 Маргаан", level:"B2 · М1",
    blurb:"However hard… / Much as… / No matter how… / albeit — Дэвшилтэт зөрчил, буулт ⭐⭐⭐",
    rule:{
      h:"Зорилго ба дүрэм: Дэвшилтэт зөрчил ба буулт (Advanced concession)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ «Although»-аас цааш явсан <b>албан ёсны зөрчил, буултын</b> бүтцүүд.<br><br>
        <b>However + adj/adv + эзэн + үйл:</b>
        <div style="margin:12px 0"><span class="tag">HOWEVER CONVINCING the rumour sounds, always verify it.</span></div>
        <b>Much as (= although… ч гэсэн):</b>
        <div style="margin:12px 0"><span class="tag">MUCH AS I respect the editor, I disagree with her.</span></div>
        <b>No matter how / whatever:</b>
        <div style="margin:12px 0"><span class="tag">NO MATTER HOW loud the debate gets, facts still matter.</span></div>
        <b>Whilst (= while, албан ёсны) ба albeit (= although, + үг/хэллэг):</b>
        <div style="margin:12px 0"><span class="tag">WHILST I share the concern, censorship is not the answer.</span><span class="tag">The coverage was fair, ALBEIT somewhat incomplete.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        debate /dɪˈbeɪt/ — мэтгэлцээн · dispute /dɪˈspjuːt/ — маргаан · controversy /ˈkɒntrəvɜːrsi/ — маргаантай асуудал<br>
        counterargument /ˈkaʊntərˌɑːrɡjumənt/ — эсрэг үндэслэл · rebuttal /rɪˈbʌtl/ — няцаалт · concede /kənˈsiːd/ — хүлээн зөвшөөрөх<br>
        refute /rɪˈfjuːt/ — няцаах · contentious /kənˈtenʃəs/ — маргаан дагуулам · polarised /ˈpoʊləraɪzd/ — туйлширсан<br>
        divisive /dɪˈvaɪsɪv/ — хагаралдуулам · advocate /ˈædvəkeɪt/ — дэмжигч/уриалах · oppose /əˈpoʊz/ — эсэргүүцэх<br>
        compromise /ˈkɒmprəmaɪz/ — буулт хийх · valid /ˈvælɪd/ — үндэслэлтэй · undermine /ˌʌndərˈmaɪn/ — сулруулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «However a source is official» ✗ — тэмдэг нэрийг <b>However-ийн ард шууд</b>: <b>However official a source is</b> ✓. «albeit it was incomplete» ✗ — albeit ард <b>өгүүлбэр биш үг/хэллэг</b>: <b>albeit incomplete</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «However + шинж + эзэн», «Much AS I…», «albeit + ганц үг» — гурвыг ялгаж сур.</p>`
    },
    phrases:[
      {en:"However convincing the rumour sounds, always verify it.", pron:"хауэвэр канвинсинг зэ румэр саундз, олвэйз верифай ит.", mn:"Цуу яриа хэчнээн үнэмшилтэй сонсогдсон ч үргэлж шалга."},
      {en:"Much as I respect the editor, I disagree with her.", pron:"мач эз ай риспект зи эдитор, ай дисэгрий виз хөр.", mn:"Редакторыг хүндэлдэг ч би түүнтэй санал нийлэхгүй."},
      {en:"No matter how loud the debate gets, facts still matter.", pron:"ноу мэтэр хау лауд зэ дибэйт гэтс, фэктс стил мэтэр.", mn:"Мэтгэлцээн хэчнээн чанга болсон ч баримт л хамгаас чухал."},
      {en:"Whilst I share the concern, censorship is not the answer.", pron:"вайлст ай шэр зэ кэнсөрн, сэнсэршип из нот зи ансэр.", mn:"Санааг нь ойлгож байгаа ч цензур хариулт биш."},
      {en:"The coverage was fair, albeit somewhat incomplete.", pron:"зэ кавэриж воз фэйр, олбийт самвот инкомплийт.", mn:"Мэдээлэл шударга, гэхдээ бага зэрэг дутуу байсан."}
    ],
    exercises:[
      {q:"However + adj:", parts:["However ", " it sounds, verify it."], opts:["convincing","it is convincing"], a:0, fix:"However + adj + эзэн → however convincing."},
      {q:"Much as:", parts:["", " I respect her, I disagree."], opts:["Much as","Much than"], a:0, fix:"Much as = хэдийгээр… ч (than ✗)."},
      {q:"No matter how:", parts:["No matter how loud it ", ", facts matter."], opts:["gets","get"], a:0, fix:"it → ганц тоо gets."},
      {q:"albeit:", parts:["It was accurate, albeit ", "."], opts:["incomplete","it was incomplete"], a:0, fix:"albeit + үг/хэллэг (өгүүлбэр ✗) → albeit incomplete."}
    ],
    speak:{ scene:'Олон нийтийн мэтгэлцээн', turns:[
      {ruby:"Shouldn't we trust official sources completely?", pron:"шүднт ви траст офишл сорсиз кэмплийтли?", mn:"Бид албан ёсны эх сурвалжид бүрэн итгэх ёсгүй гэж үү?",
        choices:[{t:"However official a source is, we should still question it.",best:true,mn:"Эх сурвалж хэчнээн албан ёсны байсан ч бид эргэлзэн асуух хэрэгтэй."},{t:"However a source is official, we should question it.",best:false,fix:"However + adj түрүүнд → However OFFICIAL a source is."}]},
      {ruby:"But the editor is highly experienced.", pron:"бат зи эдитор из хайли икспириэнст.", mn:"Гэхдээ редактор маш туршлагатай шүү дээ.",
        choices:[{t:"Much as I respect her experience, I still think she's wrong here.",best:true,mn:"Түүний туршлагыг хүндэлдэг ч энэ удаад буруу гэж бодож байна."},{t:"Much than I respect her, I think she's wrong.",best:false,fix:"Much AS I respect (than ✗)."}]},
      {ruby:"So was the report reliable or not?", pron:"соу воз зэ рипорт рилайэбл ор нот?", mn:"Тэгэхээр мэдээ найдвартай байсан уу, үгүй юу?",
        choices:[{t:"It was accurate, albeit incomplete on a few key points.",best:true,mn:"Тэр үнэн зөв, гэхдээ хэдэн гол зүйл дээр дутуу байсан."},{t:"It was accurate, albeit it was incomplete.",best:false,fix:"albeit + хэллэг → albeit incomplete (өгүүлбэр давхардуулахгүй)."}]}
    ]}
  },
  {
    id:'b2m1l10', title:"1.10 Модулийн төсөл", level:"B2 · М1",
    blurb:"🏆 Нийгэм ба хэвлэлийн тухай санал бодлын эссэ",
    rule:{
      h:"Давтлага: B2 Модуль 1-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 1-ийн бүх дүрмийг нэгтгэн, жинхэнэ B2 түвшний <b>санал бодол / мэтгэлцээний эссэ</b> бүтээх.<br><br>
        <b>Модуль 1-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">Had I known… / Were I to… / Should you need… ⭐⭐⭐</span><span class="tag">No sooner HAD it broken THAN… ⭐⭐⭐</span><span class="tag">Having verified…, Being tired… ⭐⭐⭐</span><span class="tag">is thought TO HAVE + V3 / got fired / have it done ⭐⭐⭐</span><span class="tag">was going to / would / was to / was about to ⭐⭐⭐</span><span class="tag">must/might have BEEN + -ing / can't have been ⭐⭐⭐</span><span class="tag">It was X that… / What worries me is… / Never have I… ⭐⭐⭐</span><span class="tag">arguably / on the whole / as far as I'm concerned ⭐⭐</span><span class="tag">However hard… / Much as… / albeit ⭐⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Санал бодлын эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Few issues divide society as sharply as the role of the modern media. Had traditional newspapers adapted sooner, arguably they would not have lost so much influence. No sooner had social media emerged than misinformation began to spread at an alarming rate. Being driven by clicks rather than accuracy, many outlets are said to have prioritised sensation over truth. It was this shift, much as some deny it, that undermined public trust. What worries me most is that, however sceptical readers try to be, they can't always tell fact from fabrication. Rumours that were once confined to gossip are now believed to reach millions within hours. Were governments to impose strict censorship, however, the cure might prove worse than the disease. On the whole, as far as I'm concerned, the answer lies not in control but in education: only then will citizens learn to question what they read. Should we fail to act, the line between news and noise will vanish altogether, albeit gradually and almost unnoticed.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 эссэгийн 4 давхар: <b>Танилцуулга + байр суурь</b> (arguably, It was… that) → <b>Нотолгоо</b> (is said to have, No sooner… than) → <b>Эсрэг тал</b> (However…, Were governments to…) → <b>Дүгнэлт</b> (As far as I'm concerned, only then will…, albeit).</p>`
    },
    phrases:[
      {en:"Had newspapers adapted sooner, they wouldn't have lost their influence.", pron:"хэд ньюспэйпэрз эдэптид сунэр, зэй вүднт хэв лост зэйр инфлюэнс.", mn:"Сонинууд эрт зохицсон бол нөлөөгөө алдахгүй байх байсан."},
      {en:"No sooner had social media emerged than misinformation spread.", pron:"ноу сунэр хэд соушл мийдиа имөржд зэн мисинформэйшн спрэд.", mn:"Нийгмийн сүлжээ бий болмогц худал мэдээлэл тархсан."},
      {en:"What worries me most is that readers can't tell fact from fiction.", pron:"вот варриз ми моуст из зэт рийдэрз кант тэл фэкт фром фикшн.", mn:"Намайг хамгийн их зовоож буй нь уншигчид үнэн худлыг ялгаж чадахгүй байгаа явдал."},
      {en:"Were governments to impose censorship, the cure might be worse than the disease.", pron:"вөр гавэрнмэнтс ту импоуз сэнсэршип, зэ кьюр майт би вөрс зэн зэ дизийз.", mn:"Хэрэв засгийн газар цензур тогтоовол эмчилгээ нь өвчнөөс дор байж магадгүй."},
      {en:"As far as I'm concerned, the answer lies in education, not control.", pron:"эз фар эз айм кэнсөрнд, зи ансэр лайз ин эдьюкэйшн, нот кэнтроул.", mn:"Миний бодлоор хариулт нь хяналт бус боловсролд оршино."}
    ],
    exercises:[
      {q:"Давт (Урвуу нөхцөл):", parts:["Had they ", " sooner, they wouldn't have lost."], opts:["adapted","would adapt"], a:0, fix:"Had + эзэн + V3 → Had they adapted."},
      {q:"Давт (Negative inversion):", parts:["No sooner ", " it emerged than it spread."], opts:["had","it"], a:0, fix:"No sooner + HAD + эзэн."},
      {q:"Давт (Cleft):", parts:["", " worries me is the bias."], opts:["What","That"], a:0, fix:"What-cleft → What worries me is…"},
      {q:"Давт (Буулт):", parts:["It was accurate, ", " incomplete."], opts:["albeit","although it was"], a:0, fix:"albeit + хэллэг → albeit incomplete."}
    ],
    speak:{ scene:'🏆 Төсөл: Нийгэм ба хэвлэлийн эссэ', turns:[
      {ruby:"What's your main argument about the media?", pron:"вотс ёр мэйн аргьюмэнт эбаут зэ мийдиа?", mn:"Хэвлэлийн талаарх таны гол үндэслэл юу вэ?",
        choices:[{t:"Arguably, it was the rise of clicks that undermined honest journalism.",best:true,mn:"Магадгүй шударга сэтгүүл зүйг сулруулсан нь товшилтын өсөлт байсан."},{t:"Media is bad because clicks are bad, that's all.",best:false,fix:"B2 → Arguably, it was the rise of clicks THAT undermined journalism (cleft + зөөлрүүлэл)."}]},
      {ruby:"How would you describe the spread of fake news?", pron:"хау вүд ю дискрайб зэ спрэд оф фэйк ньюз?", mn:"Худал мэдээ тархалтыг яаж дүрслэх вэ?",
        choices:[{t:"No sooner had a rumour appeared than it was believed to reach millions.",best:true,mn:"Цуу яриа гармагц олон сая хүнд хүрсэн гэж үздэг болсон."},{t:"A rumour appeared and then many people saw it fast.",best:false,fix:"B2 → No sooner HAD a rumour appeared THAN it was believed to reach millions."}]},
      {ruby:"So what's your conclusion?", pron:"соу вотс ёр канклужн?", mn:"Тэгэхээр таны дүгнэлт юу вэ?",
        choices:[{t:"As far as I'm concerned, only through education will trust be restored, albeit slowly.",best:true,mn:"Миний бодлоор зөвхөн боловсролоор л итгэлийг сэргээж чадна, гэхдээ удаан."},{t:"I think education is good and it will fix trust, in my opinion maybe.",best:false,fix:"B2 → As far as I'm concerned, only through education WILL trust be restored, albeit slowly."}]}
    ]}
  },
  {
    id:'b2m2l1', title:"2.1 Зөвлөмж", level:"B2 · М2",
    blurb:"I suggest he BE promoted — Subjunctive / mandative ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Subjunctive (захирах горим) — suggest/insist/recommend that + үндсэн үйл",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн эхний том дүрэм — <b>шаардлага, зөвлөмж, шаардах</b> үед <b>that</b>-ийн ард үйл үг <b>үндсэн хэлбэрээрээ</b> (base form) орно. Гуравдугаар биед ч <b>-s НЭМЭХГҮЙ</b>, <b>be</b> хэвээрээ!<br><br>
        <b>suggest / recommend / insist / demand / propose / request + that + S + V(base):</b>
        <div style="margin:12px 0"><span class="tag">I suggest that he BE promoted. (is ✗)</span><span class="tag">It's essential that she ATTEND the meeting. (attends ✗)</span><span class="tag">The board insisted that he RESIGN. (resigned ✗)</span></div>
        <b>«It is + шаардлагатай тэмдэг + that»:</b> essential · vital · crucial · imperative · important · necessary:
        <div style="margin:12px 0"><span class="tag">It is vital that every employee BE informed.</span><span class="tag">It is imperative that the deadline NOT be missed. (not + base — «don't» ✗)</span></div>
        <b>Үгүйсгэл:</b> зүгээр л <b>not + base</b> (do/does хэрэглэхгүй):
        <div style="margin:12px 0"><span class="tag">We demand that he NOT contact us again.</span></div>
        <b>⚠️ suggest ХОЁР утга:</b> захирах (base) ба зүгээр дүрслэх (энгийн цаг):
        <div style="margin:12px 0"><span class="tag">I suggest that he apply now. (зөвлөмж → base)</span><span class="tag">The data suggests that he is lying. (дүгнэлт → энгийн)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        promote /prəˈmoʊt/ — албан тушаал ахиулах · appoint /əˈpɔɪnt/ — томилох · recommend /ˌrekəˈmend/ — зөвлөх<br>
        insist /ɪnˈsɪst/ — шаардах · demand /dɪˈmænd/ — шаардаж нэхэх · propose /prəˈpoʊz/ — санал болгох<br>
        essential /ɪˈsenʃl/ — зайлшгүй · crucial /ˈkruːʃl/ — эгзэгтэй · imperative /ɪmˈperətɪv/ — тулгамдсан<br>
        board /bɔːrd/ — удирдах зөвлөл · policy /ˈpɑːləsi/ — бодлого · candidate /ˈkændɪdət/ — нэр дэвшигч<br>
        comply /kəmˈplaɪ/ — дагаж мөрдөх · resign /rɪˈzaɪn/ — огцрох · staff /stæf/ — ажилтнууд</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I suggest that he is promoted» ✗ — захирах утгад <b>he BE promoted</b> ✓. «It's essential that she attends» ✗ → <b>she ATTEND</b> ✓. Үгүйсгэлд «doesn't attend» ✗ → <b>NOT attend</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «suggest / insist / essential that → үйл үгээ ХУВИРГАХГҮЙ, толь бичгийн хэлбэрээр». -s болон is-ийг март!</p>`
    },
    phrases:[
      {en:"I suggest that he be promoted immediately.", pron:"ай сэжэст зэт хи би прэмоут имидиэтли.", mn:"Түүнийг нэн даруй албан тушаал ахиулахыг санал болгож байна."},
      {en:"It's essential that every employee attend the training.", pron:"итс исэншл зэт эври имплойи этэнд зэ трэйнинг.", mn:"Ажилтан бүр сургалтад суух нь зайлшгүй чухал."},
      {en:"The board insisted that the manager resign.", pron:"зэ борд инсистид зэт зэ мэнэжэр ризайн.", mn:"Удирдах зөвлөл менежерийг огцрохыг шаардсан."},
      {en:"It is imperative that the report not be delayed.", pron:"ит из импэрэтив зэт зэ рипорт нот би дилэйд.", mn:"Тайланг хойшлуулахгүй байх нь туйлын чухал."},
      {en:"We recommend that she apply for the senior position.", pron:"ви рэкэмэнд зэт ши эплай фор зэ синьор позишн.", mn:"Түүнийг ахлах албан тушаалд өргөдөл гаргахыг зөвлөж байна."}
    ],
    exercises:[
      {q:"suggest + that:", parts:["I suggest that he ", " promoted."], opts:["be","is"], a:0, fix:"захирах → BE promoted (is ✗)."},
      {q:"essential + that:", parts:["It's essential that she ", " the meeting."], opts:["attend","attends"], a:0, fix:"base form → attend (-s ✗)."},
      {q:"insist + that:", parts:["They insisted that he ", "."], opts:["resign","resigned"], a:0, fix:"мандатив → resign (resigned ✗)."},
      {q:"Үгүйсгэл:", parts:["It's vital that the deadline ", " missed."], opts:["not be","doesn't be"], a:0, fix:"not + base → not be (doesn't ✗)."}
    ],
    speak:{ scene:'Хурал дээрх зөвлөмж', turns:[
      {ruby:"Our best engineer keeps getting overlooked. What should we do?", pron:"ауэр бэст энжиниэр кийпс гэттинг оувэрлүкт. вот шүд ви ду?", mn:"Манай шилдэг инженер байнга анзаарагдалгүй өнгөрдөг. Бид яах вэ?",
        choices:[{t:"I strongly suggest that he be promoted before he leaves.",best:true,mn:"Явахаас нь өмнө түүнийг албан тушаал ахиулахыг би хатуу зөвлөж байна."},{t:"I strongly suggest that he is promoted before he leaves.",best:false,fix:"suggest that he BE promoted (is ✗)."}]},
      {ruby:"Agreed. And the whole team must know the new policy.", pron:"эгрийд. энд зэ хоул тийм маст ноу зэ ню полиси.", mn:"Зөв. Мөн бүх баг шинэ бодлогыг мэдэх ёстой.",
        choices:[{t:"Exactly. It's essential that every member attend the briefing.",best:true,mn:"Яг тийм. Гишүүн бүр товч тайлбарт суух нь зайлшгүй чухал."},{t:"Exactly. It's essential that every member attends the briefing.",best:false,fix:"essential that every member ATTEND (attends ✗)."}]},
      {ruby:"What about the manager who caused the delay?", pron:"вот эбаут зэ мэнэжэр ху козд зэ дилэй?", mn:"Саатал үүсгэсэн менежерийг яах вэ?",
        choices:[{t:"The board demands that he not repeat such mistakes.",best:true,mn:"Ийм алдаа дахин гаргахгүй байхыг удирдах зөвлөл шаардаж байна."},{t:"The board demands that he doesn't repeat such mistakes.",best:false,fix:"demand that he NOT repeat (doesn't ✗)."}]}
    ]}
  },
  {
    id:'b2m2l2', title:"2.2 Харамсал", level:"B2 · М2",
    blurb:"It's high time he got promoted / I'd rather he didn't ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: wish / if only + would rather + it's (high) time",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Харамсал, шүүмжлэл, хүслийг <b>өнгөрсөн цагийн хэлбэрээр</b> нарийвчлан илэрхийлэх. Хэлбэр өнгөрсөн ч утга нь ОДОО/ИРЭЭДҮЙ!<br><br>
        <b>1) wish / if only-ийн 3 давхар:</b>
        <div style="margin:12px 0"><span class="tag">I wish I HAD a better job. (одоо — Past Simple)</span><span class="tag">I wish I HADN'T quit. (өнгөрсөн харамсал — Past Perfect)</span><span class="tag">I wish my boss WOULD listen. (бусдын зан — гомдол/would)</span></div>
        <b>«wish + would» = бусдын БУХИМДУУЛАМ зан</b> (өөрийнхөө тухай would хэрэглэхгүй):
        <div style="margin:12px 0"><span class="tag">I wish they WOULD stop micromanaging.</span><span class="tag">I wish I would earn more ✗ → I wish I EARNED more ✓</span></div>
        <b>2) would rather + S + Past (өөр хүнээс юу хүсэхийг):</b>
        <div style="margin:12px 0"><span class="tag">I'd rather he DIDN'T take that offer. (одоо/ирээдүй)</span><span class="tag">I'd rather you HADN'T told them. (өнгөрсөн)</span></div>
        <b>3) It's (high / about) time + S + Past (сануулга, шаардах):</b>
        <div style="margin:12px 0"><span class="tag">It's high time he GOT a proper contract. (gets ✗)</span><span class="tag">It's about time they PAID us fairly.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        regret /rɪˈɡret/ — харамсах · overtime /ˈoʊvərtaɪm/ — илүү цаг · underpaid /ˌʌndərˈpeɪd/ — цалин багатай<br>
        raise /reɪz/ — цалингийн нэмэгдэл · workload /ˈwɜːrkloʊd/ — ажлын ачаалал · burnout /ˈbɜːrnaʊt/ — сэтгэлийн ядаргаа<br>
        appreciate /əˈpriːʃieɪt/ — үнэлэх · resign /rɪˈzaɪn/ — огцрох · turnover /ˈtɜːrnoʊvər/ — боловсон хүчний урсгал<br>
        micromanage /ˌmaɪkroʊˈmænɪdʒ/ — өчүүхэн бүрд хяналт тавих · overlook /ˌoʊvərˈlʊk/ — анзаарахгүй өнгөрөх · deserve /dɪˈzɜːrv/ — зохих ёстой<br>
        settle for /ˈsetl fɔːr/ — сэтгэл ханамжгүй зөвшөөрөх · fulfilling /fʊlˈfɪlɪŋ/ — сэтгэл ханамжтай · dead-end /ˌded ˈend/ — ирээдүйгүй (ажил)</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish I have more time» ✗ → <b>I wish I HAD</b> ✓. «It's high time he gets a raise» ✗ → <b>he GOT</b> ✓. «I'd rather he doesn't come» ✗ → <b>he DIDN'T come</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хүсэл/харамсал → нэг алхам ХОЙШ (Past). Бусдын занд гомдвол → wish + WOULD».</p>`
    },
    phrases:[
      {en:"I wish I hadn't turned down that promotion.", pron:"ай виш ай хэднт төрнд даун зэт прэмоушн.", mn:"Тэр албан тушаалын саналаас татгалзаагүй бол гэж хүсэж байна."},
      {en:"I wish my manager would give clearer feedback.", pron:"ай виш май мэнэжэр вүд гив клиэрэр фийдбэк.", mn:"Менежер маань илүү тодорхой санал өгдөгсөн бол."},
      {en:"It's high time they paid us a fair wage.", pron:"итс хай тайм зэй пэйд ас э фэйр вэйж.", mn:"Тэд бидэнд шударга цалин өгөх цаг нь аль хэдийн болсон."},
      {en:"I'd rather she didn't settle for a dead-end job.", pron:"айд рэзэр ши диднт сэтл фор э дэд-энд жоб.", mn:"Тэр ирээдүйгүй ажлаар сэтгэл ханахгүй байгаасай гэж хүсэж байна."},
      {en:"If only I had asked for a raise last year.", pron:"иф оунли ай хэд аскт фор э рэйз ласт йир.", mn:"Өнгөрсөн жил цалингийн нэмэгдэл гуйсан бол дээ."}
    ],
    exercises:[
      {q:"wish (одоо):", parts:["I wish I ", " a more fulfilling job."], opts:["had","have"], a:0, fix:"wish + Past → had (have ✗)."},
      {q:"wish + would (бусад):", parts:["I wish my boss ", " listen to us."], opts:["would","will"], a:0, fix:"бусдын зан → wish + WOULD."},
      {q:"it's high time:", parts:["It's high time he ", " a proper contract."], opts:["got","gets"], a:0, fix:"it's high time + Past → got (gets ✗)."},
      {q:"would rather:", parts:["I'd rather you ", " them yet."], opts:["hadn't told","don't tell"], a:0, fix:"would rather + Past → hadn't told."}
    ],
    speak:{ scene:'Ажлын дараах гомдол', turns:[
      {ruby:"You look exhausted. Long day again?", pron:"ю лүк игзостид. лонг дэй эгэйн?", mn:"Чи ядарсан харагдаж байна. Дахиад л урт өдөр үү?",
        choices:[{t:"Yeah. I wish I had a smaller workload — I'm close to burnout.",best:true,mn:"Тийм ээ. Ачаалал бага байгаасай, би сэтгэлийн ядаргаанд ойрхон байна."},{t:"Yeah. I wish I have a smaller workload.",best:false,fix:"wish + Past → I wish I HAD (have ✗)."}]},
      {ruby:"Have you talked to your manager about it?", pron:"хэв ю токт ту ёр мэнэжэр эбаут ит?", mn:"Энэ талаар менежертэйгээ ярьсан уу?",
        choices:[{t:"Not yet. I wish he would actually listen instead of micromanaging.",best:true,mn:"Хараахан үгүй. Тэр өчүүхэн бүрд хяналт тавихын оронд үнэхээр сонсдогсон бол."},{t:"Not yet. I wish he listens to me.",best:false,fix:"бусдын зан → I wish he WOULD listen."}]},
      {ruby:"Maybe it's time for a change.", pron:"мэйби итс тайм фор э чэйнж.", mn:"Магадгүй өөрчлөлт хийх цаг болсон байх.",
        choices:[{t:"You're right. It's high time I looked for something more fulfilling.",best:true,mn:"Чиний зөв. Илүү сэтгэл ханамжтай ажил хайх цаг минь болсон."},{t:"You're right. It's high time I look for something better.",best:false,fix:"it's high time + Past → I LOOKED (look ✗)."}]}
    ]}
  },
  {
    id:'b2m2l3', title:"2.3 Товч ярих", level:"B2 · М2",
    blurb:"So do I / neither can she / do so / the blue one ⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Ellipsis & Substitution (давталтаас зайлсхийх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ B2 хэлний <b>гоёмсог, товч</b> шинж — үгээ давтахгүйгээр <b>so / neither / do so / one / ones</b>-оор орлуулах.<br><br>
        <b>1) so + туслах + S / neither + туслах + S (санал нийлэх):</b>
        <div style="margin:12px 0"><span class="tag">"I work in finance." — "So do I." (би ч бас)</span><span class="tag">"She can't code." — "Neither can I." (би ч бас чадахгүй)</span><span class="tag">"I'm exhausted." — "So am I."</span></div>
        <b>Туслах үйлээ ЭХ ӨГҮҮЛБЭРЭЭС ав:</b> do/does/did · am/is/are · can/will/have:
        <div style="margin:12px 0"><span class="tag">"I've applied." — "So have I." (So did I ✗)</span></div>
        <b>2) do so / do it / do that (үйл үг + нэмэлтийг орлоно):</b>
        <div style="margin:12px 0"><span class="tag">He was asked to sign the contract, and he did so at once.</span></div>
        <b>3) one / ones (тоологдох нэрийг орлоно):</b>
        <div style="margin:12px 0"><span class="tag">"Which candidate?" — "The one with more experience."</span><span class="tag">The old strategies failed, so we need new ones.</span></div>
        <b>4) so / not-оор бүхэл өгүүлбэр орлуулах</b> (think/hope/be afraid дараа):
        <div style="margin:12px 0"><span class="tag">"Will we hit the target?" — "I hope so." / "I'm afraid not."</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        colleague /ˈkɑːliːɡ/ — хамт олон · counterpart /ˈkaʊntərpɑːrt/ — ижил тушаалтан · client /ˈklaɪənt/ — үйлчлүүлэгч<br>
        proposal /prəˈpoʊzl/ — санал · outcome /ˈaʊtkʌm/ — үр дүн · draft /dræft/ — ноорог<br>
        approach /əˈproʊtʃ/ — арга барил · strategy /ˈstrætədʒi/ — стратеги · option /ˈɑːpʃn/ — сонголт<br>
        efficient /ɪˈfɪʃnt/ — үр ашигтай · likewise /ˈlaɪkwaɪz/ — мөн адил · accordingly /əˈkɔːrdɪŋli/ — түүнд нийцүүлэн<br>
        counterproductive /ˌkaʊntərprəˈdʌktɪv/ — эсрэг үр дагавартай · streamline /ˈstriːmlaɪn/ — хялбарчлах · concise /kənˈsaɪs/ — товч тодорхой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «"I can help." — "So I can."» ✗ (энэ санал нийлэх биш!) → <b>"So can I."</b> ✓. «I've done. — So did I» ✗ → <b>So HAVE I</b> ✓. «the red car, and the blue car» → <b>the blue ONE</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «So + туслах + I = БИ Ч БАС. Туслахаа эх өгүүлбэрээс ХУУЛ. Нэр давтвал → ONE/ONES».</p>`
    },
    phrases:[
      {en:"\"I've finished the report.\" — \"So have I.\"", pron:"айв финишт зэ рипорт. — соу хэв ай.", mn:"«Би тайлангаа дуусгасан.» — «Би ч бас.»"},
      {en:"\"I can't meet the deadline.\" — \"Neither can she.\"", pron:"ай кант мийт зэ дэдлайн. — нийзэр кэн ши.", mn:"«Би хугацаанд амжихгүй.» — «Тэр ч бас амжихгүй.»"},
      {en:"He was told to revise the draft, and he did so overnight.", pron:"хи воз толд ту ривайз зэ драфт, энд хи дид соу оувэрнайт.", mn:"Түүнд ноорогоо засахыг хэлэхэд шөнөжингөө засчихсан."},
      {en:"Both options are risky, but the second one is safer.", pron:"боус опшнз а риски, бат зэ сэконд ван из сэйфэр.", mn:"Хоёр сонголт хоёулаа эрсдэлтэй ч хоёр дахь нь илүү аюулгүй."},
      {en:"\"Will the client approve it?\" — \"I hope so.\"", pron:"вил зэ клайэнт эпрув ит? — ай хоуп соу.", mn:"«Үйлчлүүлэгч зөвшөөрөх болов уу?» — «Найдаж байна.»"}
    ],
    exercises:[
      {q:"санал нийлэх (have):", parts:["\"I've applied.\" — \"So ", " I.\""], opts:["have","did"], a:0, fix:"туслахаа хуул → So HAVE I."},
      {q:"neither:", parts:["\"I can't code.\" — \"Neither ", " I.\""], opts:["can","do"], a:0, fix:"can't → Neither CAN I."},
      {q:"орлуулах нэр:", parts:["The old plan failed, so we need a new ", "."], opts:["one","it"], a:0, fix:"тоологдох нэр → ONE (it ✗)."},
      {q:"өгүүлбэр орлуулах:", parts:["\"Did we hit the target?\" — \"I'm afraid ", ".\""], opts:["not","no"], a:0, fix:"afraid + so/NOT → not (no ✗)."}
    ],
    speak:{ scene:'Хамтрагчтай товч ярилцах', turns:[
      {ruby:"I'm really impressed by the new proposal.", pron:"айм риэли импрэст бай зэ ню прэпоузл.", mn:"Шинэ саналд би үнэхээр сэтгэл хөдөлж байна.",
        choices:[{t:"So am I. It's far more concise than the old one.",best:true,mn:"Би ч бас. Хуучнаасаа хамаагүй товч тодорхой."},{t:"So I am. It's far more concise than the old.",best:false,fix:"санал нийлэх → So AM I; давталт → the old ONE."}]},
      {ruby:"But I can't approve it without the client's sign-off.", pron:"бат ай кант эпрув ит визаут зэ клайэнтс сайн-оф.", mn:"Гэхдээ би үйлчлүүлэгчийн зөвшөөрөлгүйгээр батлаж чадахгүй.",
        choices:[{t:"Neither can I. Let's send it and ask them to do so today.",best:true,mn:"Би ч бас чадахгүй. Илгээгээд өнөөдөр зөвшөөрөхийг нь гуйцгаая."},{t:"Neither do I. Let's send it and ask them to do today.",best:false,fix:"can't → Neither CAN I; орлуул → do SO."}]},
      {ruby:"Do you think they'll accept the new terms?", pron:"ду ю синк зэйл эксэпт зэ ню төрмз?", mn:"Тэд шинэ нөхцлийг хүлээж авна гэж бодож байна уу?",
        choices:[{t:"I think so. If not, we'll streamline the pricing accordingly.",best:true,mn:"Тэгж бодож байна. Үгүй бол үнийг нь түүнд нийцүүлэн хялбарчилна."},{t:"I think it. If no, we'll streamline the pricing.",best:false,fix:"think SO / if NOT (it/no ✗)."}]}
    ]}
  },
  {
    id:'b2m2l4', title:"2.4 Уян хатан", level:"B2 · М2",
    blurb:"Whoever applies… / the person leading it — Nominal & reduced clauses ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: whoever/whatever/however + reduced relative clauses",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Уян хатан, боловсронгуй өгүүлбэр — <b>«хэн ч байсан», «юу ч хамаагүй»</b> хэлбэрүүд ба <b>богиносгосон холбоос өгүүлбэр</b>.<br><br>
        <b>1) -ever үгс (= no matter who/what):</b>
        <div style="margin:12px 0"><span class="tag">WHOEVER works hardest will be promoted. (хэн ч байлаа гэсэн)</span><span class="tag">Do WHATEVER it takes to close the deal.</span><span class="tag">HOWEVER hard she tries, the targets keep rising.</span><span class="tag">Choose WHICHEVER option suits the budget.</span></div>
        <b>however + тэмдэг/дайвар үг</b> (эсрэгцэл — «хичнээн ... ч»):
        <div style="margin:12px 0"><span class="tag">However experienced you are, you can still learn. (how ✗)</span></div>
        <b>2) Reduced relative — «who/which + be»-г ХАСАХ:</b>
        <div style="margin:12px 0"><span class="tag">The person WHO IS leading the project → the person LEADING the project</span><span class="tag">The report WHICH WAS written by HR → the report WRITTEN by HR</span></div>
        <b>Идэвхтэй → -ing, идэвхгүй → V3:</b>
        <div style="margin:12px 0"><span class="tag">Anyone WANTING a raise must apply. (= who wants)</span><span class="tag">The skills REQUIRED for the role are rare. (= which are required)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        applicant /ˈæplɪkənt/ — өргөдөл гаргагч · recruit /rɪˈkruːt/ — ажилд авах · shortlist /ˈʃɔːrtlɪst/ — эцсийн жагсаалт<br>
        vacancy /ˈveɪkənsi/ — сул орон тоо · qualification /ˌkwɑːlɪfɪˈkeɪʃn/ — мэргэшил · expertise /ˌekspɜːrˈtiːz/ — мэргэжлийн ур чадвар<br>
        assign /əˈsaɪn/ — хуваарилах · delegate /ˈdelɪɡeɪt/ — эрх шилжүүлэх · oversee /ˌoʊvərˈsiː/ — хянан удирдах<br>
        versatile /ˈvɜːrsətl/ — олон талын · adaptable /əˈdæptəbl/ — дасан зохицдог · competent /ˈkɑːmpɪtənt/ — чадварлаг<br>
        merit /ˈmerɪt/ — гавьяа, чадвар · suitable /ˈsuːtəbl/ — тохирсон · candidate /ˈkændɪdət/ — нэр дэвшигч</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «How hard you try» (эсрэгцэлд) ✗ → <b>HOWEVER hard</b> ✓. «The man who leading» ✗ → <b>the man LEADING</b> ✓. «people who wanting» ✗ → <b>people WANTING</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «-ever = хамаагүй. who is / which was → ШУУД хас: идэвхтэй бол -ING, идэвхгүй бол V3».</p>`
    },
    phrases:[
      {en:"Whoever meets the targets will lead the new team.", pron:"хуэвэр мийтс зэ таргэтс вил лийд зэ ню тийм.", mn:"Хэн зорилтоо биелүүлнэ, тэр шинэ багийг удирдана."},
      {en:"However qualified you are, teamwork still matters.", pron:"хауэвэр кволифайд ю а, тиймвөрк стил мэттэрз.", mn:"Хичнээн мэргэшсэн ч багаар ажиллах нь чухал хэвээр."},
      {en:"The manager overseeing the project is on leave.", pron:"зэ мэнэжэр оувэрсийинг зэ прожэкт из он лийв.", mn:"Төслийг хянан удирдаж буй менежер чөлөөтэй байна."},
      {en:"The skills required for this role are quite rare.", pron:"зэ скилз рикуайэрд фор зис роул а квайт рэр.", mn:"Энэ ажилд шаардагдах ур чадвар нэлээд ховор."},
      {en:"Choose whichever candidate best fits the team.", pron:"чууз хуичэвэр кэндидэт бэст фитс зэ тийм.", mn:"Багт хамгийн тохирох нэр дэвшигчийг сонго."}
    ],
    exercises:[
      {q:"-ever:", parts:["", " works hardest will be promoted."], opts:["Whoever","Who"], a:0, fix:"хэн ч байсан → Whoever (Who ✗)."},
      {q:"however + тэмдэг:", parts:["", " experienced you are, keep learning."], opts:["However","How"], a:0, fix:"эсрэгцэл → However experienced."},
      {q:"reduced (идэвхтэй):", parts:["Anyone ", " a raise must apply."], opts:["wanting","who wanting"], a:0, fix:"богиносгол → wanting (who wanting ✗)."},
      {q:"reduced (идэвхгүй):", parts:["The report ", " by HR is ready."], opts:["written","writing"], a:0, fix:"идэвхгүй → written (was хасагдсан)."}
    ],
    speak:{ scene:'Ажилтан сонгох ярилцлага', turns:[
      {ruby:"We have three strong applicants. How do we choose?", pron:"ви хэв срий стронг эпликэнтс. хау ду ви чууз?", mn:"Бид гурван хүчтэй өргөдөл гаргагчтай. Яаж сонгох вэ?",
        choices:[{t:"Simple — whoever demonstrates the most relevant expertise gets the role.",best:true,mn:"Энгийн — хэн хамгийн холбогдох мэргэжлийн чадвараа харуулна, тэр ажлыг авна."},{t:"Simple — whatever demonstrates the most expertise gets the role.",best:false,fix:"хүн тухай → WHOEVER (whatever ✗)."}]},
      {ruby:"But two of them have identical qualifications.", pron:"бат ту оф зэм хэв айдэнтикл кволификэйшнз.", mn:"Гэхдээ хоёр нь яг ижил мэргэшилтэй.",
        choices:[{t:"However similar their CVs look, the interview will reveal the difference.",best:true,mn:"Тэдний CV хичнээн адил харагдсан ч ярилцлага ялгааг илрүүлнэ."},{t:"How similar their CVs look, the interview will reveal it.",best:false,fix:"эсрэгцэл → HOWEVER similar (How ✗)."}]},
      {ruby:"And the person leading their onboarding?", pron:"энд зэ пөрсон лийдинг зэйр онбординг?", mn:"Тэдний дасан зохицолтыг удирдах хүнийг яах вэ?",
        choices:[{t:"The colleague overseeing training will handle whichever recruit joins.",best:true,mn:"Сургалтыг хянан удирдаж буй хамт олон аль ч шинэ ажилтныг хариуцна."},{t:"The colleague who overseeing training will handle whatever recruit joins.",best:false,fix:"богиносгол → colleague OVERSEEING; сонголт → WHICHEVER recruit."}]}
    ]}
  },
  {
    id:'b2m2l5', title:"2.5 Албан ёсны хэл", level:"B2 · М2",
    blurb:"The failure of the plan / a sharp increase in sales — Nominalisation ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Nominalisation & formal register (нэршүүлэх)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Албан ёсны, эрдэм шинжилгээ, бизнесийн хэл — <b>үйл үг/тэмдэг үгийг НЭР ҮГ болгож</b> хүнд, объектив өнгө өгөх.<br><br>
        <b>Үйл үг → нэр үг (энгийн → албан ёсны):</b>
        <div style="margin:12px 0"><span class="tag">The plan failed → the FAILURE of the plan</span><span class="tag">Sales increased sharply → a sharp INCREASE in sales</span><span class="tag">We decided to expand → the DECISION to expand</span></div>
        <b>Тэмдэг → нэр:</b> difficult → the difficulty · able → the ability · productive → productivity:
        <div style="margin:12px 0"><span class="tag">The staff were very productive → the high PRODUCTIVITY of the staff</span></div>
        <b>Хэв маяг:</b> нэршүүлсэн үг ихэвчлэн <b>of / in / to</b>-той хосолно:
        <div style="margin:12px 0"><span class="tag">a significant reduction IN costs</span><span class="tag">the implementation OF the policy</span><span class="tag">the refusal TO cooperate</span></div>
        <b>Албан ёсны холбоос:</b> due to · in terms of · with regard to · a lack of · the extent to which:
        <div style="margin:12px 0"><span class="tag">The delay was due to A LACK OF funding. (because there was no money ✗ албан бус)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        implementation /ˌɪmplɪmenˈteɪʃn/ — хэрэгжүүлэлт · reduction /rɪˈdʌkʃn/ — бууралт · expansion /ɪkˈspænʃn/ — тэлэлт<br>
        acquisition /ˌækwɪˈzɪʃn/ — худалдан авалт · assessment /əˈsesmənt/ — үнэлгээ · allocation /ˌæləˈkeɪʃn/ — хуваарилалт<br>
        efficiency /ɪˈfɪʃnsi/ — үр ашиг · productivity /ˌproʊdʌkˈtɪvəti/ — бүтээмж · profitability /ˌprɑːfɪtəˈbɪləti/ — ашигт байдал<br>
        revenue /ˈrevənuː/ — орлого · expenditure /ɪkˈspendɪtʃər/ — зарлага · stakeholder /ˈsteɪkhoʊldər/ — оролцогч тал<br>
        compliance /kəmˈplaɪəns/ — мөрдөлт · sustainability /səˌsteɪnəˈbɪləti/ — тогтвортой байдал · restructuring /ˌriːˈstrʌktʃərɪŋ/ — бүтцийн өөрчлөлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «a reduction OF costs» ✗ → <b>a reduction IN costs</b> ✓ (өсөлт/бууралт → IN). «because we didn't have money» (албан бус) → <b>due to a lack of funding</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Албан ёсны бичвэр = ҮЙЛ ҮГИЙГ НЭР болго. increase → an increase IN, fail → the failure OF».</p>`
    },
    phrases:[
      {en:"The failure of the strategy led to major restructuring.", pron:"зэ фэйлюэр оф зэ стрэтэжи лэд ту мэйжэр ристрактчэринг.", mn:"Стратегийн бүтэлгүйтэл томоохон бүтцийн өөрчлөлтөд хүргэсэн."},
      {en:"There was a sharp increase in operating costs last quarter.", pron:"зэр воз э шарп инкрийс ин опэрэйтинг костс ласт квортэр.", mn:"Өнгөрсөн улиралд үйл ажиллагааны зардал огцом өссөн."},
      {en:"The implementation of the new policy improved compliance.", pron:"зэ имплимэнтэйшн оф зэ ню полиси импрувд кэмплайэнс.", mn:"Шинэ бодлогын хэрэгжүүлэлт мөрдөлтийг сайжруулсан."},
      {en:"The delay was due to a lack of adequate funding.", pron:"зэ дилэй воз дью ту э лэк оф эдиквэт фандинг.", mn:"Саатал нь хангалттай санхүүжилтийн дутагдлаас болсон."},
      {en:"A reduction in expenditure boosted overall profitability.", pron:"э ридакшн ин икспэндитчэр бустид оувэролл профитэбилити.", mn:"Зарлагын бууралт нийт ашигт байдлыг нэмэгдүүлсэн."}
    ],
    exercises:[
      {q:"Нэршүүлэх:", parts:["The ", " of the plan surprised the board."], opts:["failure","failed"], a:0, fix:"нэр болго → the failure of."},
      {q:"increase + предлог:", parts:["There was a rise ", " customer complaints."], opts:["in","of"], a:0, fix:"өсөлт/бууралт → IN (of ✗)."},
      {q:"Албан ёсны шалтгаан:", parts:["The loss was ", " poor management."], opts:["due to","because"], a:0, fix:"нэрийн өмнө → due to (because ✗)."},
      {q:"Тэмдэг → нэр:", parts:["The high ", " of the team impressed us."], opts:["productivity","productive"], a:0, fix:"нэр болго → productivity."}
    ],
    speak:{ scene:'Улирлын тайлан танилцуулах', turns:[
      {ruby:"How would you summarise this quarter's performance?", pron:"хау вүд ю саммэрайз зис квортэрз пэрформэнс?", mn:"Энэ улирлын гүйцэтгэлийг хэрхэн дүгнэх вэ?",
        choices:[{t:"There was a significant increase in revenue, driven by the expansion into Asia.",best:true,mn:"Ази руу тэлсний үрээр орлого эрс нэмэгдсэн."},{t:"Revenue increased a lot because we go to Asia.",best:false,fix:"албан ёсны → a significant INCREASE IN revenue, driven by the EXPANSION."}]},
      {ruby:"And the rise in costs? The board is concerned.", pron:"энд зэ райз ин костс? зэ борд из кэнсөрнд.", mn:"Зардлын өсөлтийг яах вэ? Удирдах зөвлөл санаа зовниж байна.",
        choices:[{t:"The increase in expenditure was largely due to the acquisition of new equipment.",best:true,mn:"Зарлагын өсөлт нь голчлон шинэ тоног төхөөрөмж худалдан авсантай холбоотой."},{t:"Costs went up mostly because we bought new equipment.",best:false,fix:"албан ёсны → The increase IN expenditure was due to the ACQUISITION."}]},
      {ruby:"What's the plan going forward?", pron:"вотс зэ плэн гоуинг форвэрд?", mn:"Цаашид ямар төлөвлөгөөтэй вэ?",
        choices:[{t:"Our priority is a reduction in waste and an improvement in efficiency.",best:true,mn:"Бидний тэргүүлэх зорилт бол хог хаягдлын бууралт болон үр ашгийн сайжруулалт юм."},{t:"We want to waste less and be more efficient.",best:false,fix:"албан ёсны → a REDUCTION IN waste and an IMPROVEMENT IN efficiency."}]}
    ]}
  },
  {
    id:'b2m2l6', title:"2.6 Нөхцөл байдал", level:"B2 · М2",
    blurb:"But for your help… / provided that / mixed conditionals ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Mixed conditionals + but for / provided / otherwise",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2 нөхцөлийн дээд түвшин — <b>цаг холилдсон</b> нөхцөл ба <b>if-ийн ОРЛУУЛАГЧ</b> холбоос үгс.<br><br>
        <b>1) Mixed conditionals (цаг ХОЛИЛДОНО):</b>
        <div style="margin:12px 0"><span class="tag">Өнгөрсөн→одоо: If I HAD taken that job, I WOULD BE a manager now.</span><span class="tag">Одоо→өнгөрсөн: If I WERE more organised, I WOULDN'T HAVE missed the deadline.</span></div>
        <b>2) but for + нэр (= if it weren't/hadn't been for):</b>
        <div style="margin:12px 0"><span class="tag">BUT FOR your support, I would have failed. (= if it hadn't been for)</span><span class="tag">But for the funding, the project wouldn't exist.</span></div>
        <b>3) provided (that) / as long as / on condition that (= only if):</b>
        <div style="margin:12px 0"><span class="tag">I'll sign PROVIDED THAT the terms are fair.</span><span class="tag">They'll invest ON CONDITION THAT we meet the targets.</span></div>
        <b>4) otherwise (= if not, эс тэгвээс) / supposing (= what if):</b>
        <div style="margin:12px 0"><span class="tag">Back up your files; OTHERWISE you might lose everything.</span><span class="tag">SUPPOSING the client refuses, what's our plan B?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        negotiate /nɪˈɡoʊʃieɪt/ — хэлэлцэн тохирох · contingency /kənˈtɪndʒənsi/ — гэнэтийн нөхцөл · leverage /ˈlevərɪdʒ/ — нөлөөллийн хөшүүрэг<br>
        incentive /ɪnˈsentɪv/ — урамшуулал · terms /tɜːrmz/ — нөхцөл · concession /kənˈseʃn/ — буулт<br>
        stakeholder /ˈsteɪkhoʊldər/ — оролцогч тал · viable /ˈvaɪəbl/ — хэрэгжих боломжтой · feasible /ˈfiːzəbl/ — биелэх боломжтой<br>
        setback /ˈsetbæk/ — саад бэрхшээл · breakthrough /ˈbreɪkθruː/ — гэнэтийн амжилт · foresee /fɔːrˈsiː/ — урьдчилан харах<br>
        jeopardise /ˈdʒepərdaɪz/ — эрсдэлд оруулах · secure /sɪˈkjʊr/ — баталгаажуулах · mitigate /ˈmɪtɪɡeɪt/ — сааруулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have known» ✗ → if талд <b>had known</b> ✓. «But for your help, I fail» ✗ → <b>I would have failed</b> ✓. «provided the terms will be fair» ✗ → <b>provided the terms ARE fair</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BUT FOR + нэр = хэрэв ... байгаагүй бол. PROVIDED = зөвхөн ... бол. OTHERWISE = эс бол».</p>`
    },
    phrases:[
      {en:"If I had accepted that offer, I would be running the branch now.", pron:"иф ай хэд эксэптид зэт офэр, ай вүд би раннинг зэ бранч нау.", mn:"Хэрэв тэр саналыг хүлээж авсан бол одоо салбарыг удирдаж байх байсан."},
      {en:"But for the investors, the startup would have collapsed.", pron:"бат фор зэ инвэстэрз, зэ старт-ап вүд хэв кэлэпст.", mn:"Хөрөнгө оруулагчид байгаагүй бол стартап нурах байсан."},
      {en:"We'll extend the contract provided that you meet the targets.", pron:"вил икстэнд зэ контракт прэвайдид зэт ю мийт зэ таргэтс.", mn:"Зорилтоо биелүүлбэл бид гэрээг сунгана."},
      {en:"Secure the funding now; otherwise the deal falls through.", pron:"сикьюр зэ фандинг нау; азэрвайз зэ дийл фолз сру.", mn:"Санхүүжилтээ одоо баталгаажуул, эс бол хэлэлцээр амжилтгүй болно."},
      {en:"Supposing the client walked away, how would we recover?", pron:"сэпоузинг зэ клайэнт волкт эвэй, хау вүд ви рикавэр?", mn:"Хэрэв үйлчлүүлэгч татгалзвал бид яаж сэргэх бол?"}
    ],
    exercises:[
      {q:"Mixed (өнгөрсөн→одоо):", parts:["If I had taken that job, I ", " a manager now."], opts:["would be","would have been"], a:0, fix:"үр дүн ОДОО → would be."},
      {q:"but for:", parts:["But for your help, I ", " the deadline."], opts:["would have missed","missed"], a:0, fix:"but for + would have + V3."},
      {q:"provided:", parts:["They'll invest provided that we ", " the targets."], opts:["meet","will meet"], a:0, fix:"provided + одоо цаг → meet (will ✗)."},
      {q:"otherwise:", parts:["Back up the data; ", " you'll lose it."], opts:["otherwise","unless"], a:0, fix:"эс бол → otherwise (unless ✗)."}
    ],
    speak:{ scene:'Хэлэлцээрийн ширээн дээр', turns:[
      {ruby:"Honestly, this deal saved our company.", pron:"онэстли, зис дийл сэйвд ауэр кампэни.", mn:"Үнэнийг хэлэхэд энэ хэлэлцээр манай компанийг аварсан.",
        choices:[{t:"True. But for your negotiation skills, we would have lost the client.",best:true,mn:"Үнэн. Таны хэлэлцээ хийх чадвар байгаагүй бол бид үйлчлүүлэгчээ алдах байсан."},{t:"True. But for your negotiation skills, we lost the client.",best:false,fix:"but for + WOULD HAVE lost (lost ✗)."}]},
      {ruby:"So, can we finalise the terms today?", pron:"соу, кэн ви файнэлайз зэ төрмз тудэй?", mn:"За, өнөөдөр нөхцлийг эцэслэж болох уу?",
        choices:[{t:"Yes, provided that the payment schedule stays flexible.",best:true,mn:"Тийм, төлбөрийн хуваарь уян хатан хэвээр байвал."},{t:"Yes, provided that the payment schedule will stay flexible.",best:false,fix:"provided + одоо цаг → STAYS (will stay ✗)."}]},
      {ruby:"And if their board rejects it?", pron:"энд иф зэйр борд рижэктс ит?", mn:"Хэрэв тэдний удирдах зөвлөл татгалзвал яах вэ?",
        choices:[{t:"Supposing they reject it, we'll activate the contingency plan immediately.",best:true,mn:"Хэрэв тэд татгалзвал бид гэнэтийн нөхцлийн төлөвлөгөөг нэн даруй ажиллуулна."},{t:"Supposing they will reject it, we activate the plan.",best:false,fix:"supposing + одоо цаг → they REJECT it."}]}
    ]}
  },
  {
    id:'b2m2l7', title:"2.7 Үйлийн хэлбэр", level:"B2 · М2",
    blurb:"Having finished… / claims to have worked — Perfect gerund & infinitive ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Perfect gerund & infinitive (having done / to have done)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өмнө нь БОЛЖ ӨНГӨРСӨН үйлдлийг gerund/infinitive-ээр илэрхийлэх ба утга нь ӨӨРЧЛӨГДДӨГ үйл үгс.<br><br>
        <b>1) having + V3 (perfect gerund) — өмнө болсныг онцлох:</b>
        <div style="margin:12px 0"><span class="tag">HAVING FINISHED the report, she left. (= after she had finished)</span><span class="tag">He was proud of HAVING LED the project.</span></div>
        <b>Идэвхгүй: having been + V3:</b>
        <div style="margin:12px 0"><span class="tag">HAVING BEEN PROMOTED, he moved abroad.</span></div>
        <b>2) to have + V3 (perfect infinitive) — өмнөх үйлдэл (claim/seem/appear/pretend):</b>
        <div style="margin:12px 0"><span class="tag">She claims TO HAVE WORKED at Google. (одоо хэлж байгаа, ажилласан нь өмнө)</span><span class="tag">He seems TO HAVE MISUNDERSTOOD the brief.</span></div>
        <b>would like / should + to have + V3 (болоогүй харамсал):</b>
        <div style="margin:12px 0"><span class="tag">I'd like TO HAVE STAYED longer, but I had to leave.</span></div>
        <b>3) Утга ӨӨРЧЛӨГДӨХ үйл үгс — remember / forget / stop / regret / go on:</b>
        <div style="margin:12px 0"><span class="tag">I stopped TO CHECK emails. (шалгахын тулд зогслоо)</span><span class="tag">I stopped CHECKING emails. (шалгахаа больсон)</span><span class="tag">I regret TO INFORM you… (одоо мэдэгдэхдээ харамсаж) vs I regret LEAVING. (явсандаа харамсаж)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        accomplish /əˈkɑːmplɪʃ/ — гүйцэлдүүлэх · attain /əˈteɪn/ — хүрэх · undertake /ˌʌndərˈteɪk/ — үүрэг хүлээх<br>
        credential /krəˈdenʃl/ — итгэмжлэл · reference /ˈrefrəns/ — тодорхойлолт · resume /ˈrezumeɪ/ — намтар (CV)<br>
        endeavour /ɪnˈdevər/ — хичээн зүтгэх · strive /straɪv/ — чармайх · overcome /ˌoʊvərˈkʌm/ — даван туулах<br>
        setback /ˈsetbæk/ — бэрхшээл · perseverance /ˌpɜːrsəˈvɪrəns/ — тэвчээр · resilience /rɪˈzɪliəns/ — тэсвэр хатуужил<br>
        acknowledge /əkˈnɑːlɪdʒ/ — хүлээн зөвшөөрөх · exaggerate /ɪɡˈzædʒəreɪt/ — хэтрүүлэх · fabricate /ˈfæbrɪkeɪt/ — зохиомол мэдээлэл гаргах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «After finishing the report, she had left» — цаг давхардуулахгүй, <b>Having finished..., she left</b> ✓. «He claims to work there for years» ✗ → <b>to HAVE WORKED</b> ✓ (өмнө). «I regret to leaving» ✗.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Өмнө болсныг онцлох → HAVING + V3 / TO HAVE + V3. remember/stop/regret — дараах хэлбэр утгыг ӨӨРЧилнө!».</p>`
    },
    phrases:[
      {en:"Having led three teams, she was the obvious choice.", pron:"хэвинг лэд срий тиймз, ши воз зэ обвиэс чойс.", mn:"Гурван баг удирдаж байсан тул тэр илэрхий сонголт байлаа."},
      {en:"He claims to have doubled the company's revenue.", pron:"хи клэймз ту хэв даблд зэ кампэниз рэвэнью.", mn:"Тэр компанийн орлогыг хоёр дахин өсгөсөн гэж мэдэгддэг."},
      {en:"Having been promoted twice, he felt truly valued.", pron:"хэвинг бийн прэмоутид твайс, хи фэлт трули вэлюд.", mn:"Хоёр удаа албан тушаал ахисан тул тэр үнэхээр үнэлэгдсэн санагдсан."},
      {en:"I regret to inform you that the position has been filled.", pron:"ай ригрэт ту информ ю зэт зэ позишн хэз бийн филд.", mn:"Тухайн орон тоо дүүрсэн болохыг харамсалтайгаар мэдэгдэж байна."},
      {en:"She stopped applying after receiving a great offer.", pron:"ши стопт эплайинг афтэр рисийвинг э грэйт офэр.", mn:"Гайхалтай санал авсны дараа тэр өргөдөл гаргахаа больсон."}
    ],
    exercises:[
      {q:"perfect gerund:", parts:["", " the project, she took a break."], opts:["Having finished","After finished"], a:0, fix:"өмнө болсон → Having finished."},
      {q:"perfect infinitive:", parts:["He claims ", " at a top firm."], opts:["to have worked","to work"], a:0, fix:"өмнө → to HAVE worked."},
      {q:"утга (зорилго):", parts:["He stopped ", " his emails during the meeting."], opts:["checking","to check"], a:0, fix:"больсон → stopped CHECKING."},
      {q:"regret + inform:", parts:["We regret ", " you the role is filled."], opts:["to inform","informing"], a:0, fix:"одоо мэдэгдэх → regret TO INFORM."}
    ],
    speak:{ scene:'Ажлын ярилцлага', turns:[
      {ruby:"Tell me about your biggest achievement.", pron:"тэл ми эбаут ёр бигэст эчийвмэнт.", mn:"Хамгийн том амжилтынхаа тухай ярина уу.",
        choices:[{t:"Having managed a failing branch, I turned it profitable within a year.",best:true,mn:"Дампуурч буй салбарыг удирдаж байгаад нэг жилийн дотор ашигтай болгосон."},{t:"After I managed a failing branch, I had turned it profitable.",best:false,fix:"боловсронгуй → HAVING MANAGED..., I turned it (had turned ✗)."}]},
      {ruby:"Impressive. Your CV mentions work at a major firm?", pron:"импрэсив. ёр си-ви мэншнз вөрк эт э мэйжэр фөрм?", mn:"Гайхалтай. CV дээр том компанид ажилласан гэсэн байна?",
        choices:[{t:"Yes, I'm proud to have contributed to two award-winning projects there.",best:true,mn:"Тийм, тэнд шагналт хоёр төсөлд хувь нэмэр оруулсандаа бахархдаг."},{t:"Yes, I'm proud to contribute to two projects there.",best:false,fix:"өмнө болсон → proud TO HAVE CONTRIBUTED."}]},
      {ruby:"Any regrets in your career so far?", pron:"эни ригрэтс ин ёр кэриэр соу фар?", mn:"Одоо болтол карьертаа харамсах зүйл байна уу?",
        choices:[{t:"I regret leaving my first job too early, but it taught me resilience.",best:true,mn:"Анхны ажлаа хэтэрхий эрт орхисондоо харамсдаг ч энэ надад тэвчээр заасан."},{t:"I regret to leave my first job too early.",best:false,fix:"өнгөрсний харамсал → regret LEAVING (to leave ✗)."}]}
    ]}
  },
  {
    id:'b2m2l8', title:"2.8 Хэлц үйл", level:"B2 · М2",
    blurb:"Put up with / look down on / get away with — 3-part phrasal verbs ⭐⭐⭐",
    rule:{
      h:"Ажил & Амжилт: Гурван хэсэгт хэлц үйл үг (verb + adverb + preposition)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн бодит ярианы амин чухал хэсэг — <b>үйл + дайвар + угтвар</b> гэсэн 3 хэсэгтэй хэлц үйл үгс. Утга нь салангид үгсээсээ ТААМАГЛАШГҮЙ!<br><br>
        <b>Гол 3 хэсэгт хэлц үйл үгс (нэмэлт нь ҮРГЭЛЖ ард нь):</b>
        <div style="margin:12px 0"><span class="tag">put up with = тэвчих: I can't PUT UP WITH the noise.</span><span class="tag">look down on = басамжлах: Never LOOK DOWN ON interns.</span><span class="tag">get away with = зугтаах, шийтгэлгүй өнгөрөх: He GOT AWAY WITH the mistake.</span><span class="tag">come up against = тулгарах: We CAME UP AGAINST strong resistance.</span></div>
        <b>Бусад ажлын чухал хэлцүүд:</b>
        <div style="margin:12px 0"><span class="tag">catch up on = гүйцээх: I need to CATCH UP ON emails.</span><span class="tag">keep up with = хөл нийлүүлэх: hard to KEEP UP WITH demand.</span><span class="tag">look forward to = тэсэн ядах: I LOOK FORWARD TO working with you.</span><span class="tag">cut back on = багасгах: We must CUT BACK ON spending.</span></div>
        <b>⚠️ 3 хэсэгтийг САЛГАХГҮЙ</b> — объект нь БҮГДИЙН нь ард:
        <div style="margin:12px 0"><span class="tag">I can't put up with it. (put it up with ✗)</span><span class="tag">look forward to + нэр/-ING: look forward to SEEING you (to see ✗)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        put up with /pʊt ʌp wɪð/ — тэвчих · look down on /lʊk daʊn ɒn/ — басамжлах · get away with /ɡet əˈweɪ wɪð/ — шийтгэлгүй өнгөрөх<br>
        come up against /kʌm ʌp əˈɡenst/ — тулгарах · catch up on /kætʃ ʌp ɒn/ — гүйцээх · keep up with /kiːp ʌp wɪð/ — хөл нийлүүлэх<br>
        cut back on /kʌt bæk ɒn/ — багасгах · look forward to /lʊk ˈfɔːrwərd tuː/ — тэсэн ядах · stand up for /stænd ʌp fɔːr/ — өмгөөлөх<br>
        follow up on /ˈfɑːloʊ ʌp ɒn/ — эргэж лавлах · walk out on /wɔːk aʊt ɒn/ — орхиж явах · face up to /feɪs ʌp tuː/ — хүлээн зөвшөөрч тулах<br>
        get on with /ɡet ɒn wɪð/ — үргэлжлүүлэх · run out of /rʌn aʊt əv/ — дуусах · live up to /lɪv ʌp tuː/ — хүлээлт хангах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «put up it with» ✗ → <b>put up with it</b> ✓ (салгахгүй). «look forward to meet you» ✗ → <b>to MEETING you</b> ✓ (to + -ING!). «keep up the demand» ✗ → <b>keep up WITH the demand</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «3 хэсэг = НЭГ БЛОК, хэзээ ч задлахгүй. look forward TO дараа ямагт -ING».</p>`
    },
    phrases:[
      {en:"I simply can't put up with the constant overtime any longer.", pron:"ай симпли кант пут ап виз зэ констэнт оувэртайм эни лонгэр.", mn:"Байнгын илүү цагийг би цаашид огт тэвчиж чадахгүй."},
      {en:"Good leaders never look down on junior staff.", pron:"гүд лийдэрз нэвэр лүк даун он жуниэр стаф.", mn:"Сайн удирдагчид дадлагажигч ажилтнуудыг хэзээ ч басамжилдаггүй."},
      {en:"He got away with missing the deadline this time.", pron:"хи гот эвэй виз миссинг зэ дэдлайн зис тайм.", mn:"Тэр энэ удаад хугацаа хэтрүүлснийхээ төлөө шийтгэл хүрээгүй."},
      {en:"We came up against a lot of resistance from management.", pron:"ви кэйм ап эгэнст э лот оф ризистэнс фром мэнэжмэнт.", mn:"Бид удирдлагын зүгээс их эсэргүүцэлтэй тулгарсан."},
      {en:"I look forward to collaborating with your team.", pron:"ай лүк форвэрд ту кэлэборэйтинг виз ёр тийм.", mn:"Танай багтай хамтран ажиллахыг тэсэн ядан хүлээж байна."}
    ],
    exercises:[
      {q:"тэвчих:", parts:["I can't ", " his rudeness."], opts:["put up with","put up"], a:0, fix:"3 хэсэг → put up WITH."},
      {q:"салгахгүй:", parts:["The noise is awful — I can't put up ", "."], opts:["with it","it with"], a:0, fix:"объект ард → with it (it with ✗)."},
      {q:"to + -ING:", parts:["I look forward to ", " from you."], opts:["hearing","hear"], a:0, fix:"look forward TO + -ING → hearing."},
      {q:"тулгарах:", parts:["We came up ", " unexpected problems."], opts:["against","with"], a:0, fix:"тулгарах → come up AGAINST."}
    ],
    speak:{ scene:'Хамт олонтойгоо санал бодол хуваалцах', turns:[
      {ruby:"How's the new project going?", pron:"хауз зэ ню прожэкт гоуинг?", mn:"Шинэ төсөл яаж явж байна?",
        choices:[{t:"Tough. We've come up against serious budget cuts.",best:true,mn:"Хэцүү. Бид төсвийн ноцтой хасалттай тулгарсан."},{t:"Tough. We've come up serious budget cuts.",best:false,fix:"тулгарах → come up AGAINST (up дангаар ✗)."}]},
      {ruby:"That's rough. Is the manager helping at all?", pron:"зэтс раф. из зэ мэнэжэр хэлпинг эт олл?", mn:"Хэцүү юм. Менежер огт тусалж байна уу?",
        choices:[{t:"Barely. Honestly, I can't put up with his micromanaging much longer.",best:true,mn:"Бараг үгүй. Үнэнийг хэлэхэд түүний өчүүхэн бүрд хяналт тавихыг би цаашид тэвчихгүй."},{t:"Barely. I can't put up his micromanaging with.",best:false,fix:"салгахгүй → put up WITH his micromanaging."}]},
      {ruby:"Maybe raise it in the review. Don't let it slide.", pron:"мэйби рэйз ит ин зэ ривью. доунт лэт ит слайд.", mn:"Магадгүй үнэлгээн дээр яри. Дэмий өнгөрүүлж болохгүй.",
        choices:[{t:"You're right. I'll stand up for the team and follow up on it next week.",best:true,mn:"Чиний зөв. Багийнхаа төлөө зогсоод дараа долоо хоногт эргэж лавлана."},{t:"You're right. I'll stand the team for and follow it up on.",best:false,fix:"stand up FOR the team; follow up ON it."}]}
    ]}
  },
  {
    id:'b2m2l9', title:"2.9 Үг бүтэх", level:"B2 · М2",
    blurb:"Make progress / do business / overestimate — Collocations & word formation ⭐⭐",
    rule:{
      h:"Ажил & Амжилт: make/do/take/pay collocations + prefixes & suffixes",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Төрөлх хэлтэн шиг сонсогдох түлхүүр — <b>зөв хамтрах үгс (collocations)</b> ба <b>угтвар/дагаврын хүчээр</b> үг бүтээх.<br><br>
        <b>1) make vs do (хамгийн түгээмэл алдаа):</b>
        <div style="margin:12px 0"><span class="tag">MAKE: make progress · make a decision · make an effort · make a profit · make a mistake</span><span class="tag">DO: do business · do research · do your best · do a task · do damage</span></div>
        <b>2) take & pay collocations:</b>
        <div style="margin:12px 0"><span class="tag">TAKE: take responsibility · take initiative · take a risk · take charge · take advantage of</span><span class="tag">PAY: pay attention · pay a compliment · pay a visit · pay tribute</span></div>
        <b>3) Угтвар — эсрэг/хэмжээ өөрчлөх:</b>
        <div style="margin:12px 0"><span class="tag">un- (эсрэг): unemployed, unrealistic</span><span class="tag">mis- (буруу): mismanage, misunderstand</span><span class="tag">over- (хэт их): overwork, overestimate</span><span class="tag">under- (дутуу): underpaid, underperform</span></div>
        <b>4) Дагавар — үгийн ТӨРөл өөрчилнө:</b>
        <div style="margin:12px 0"><span class="tag">-ise/-ize (үйл): modernise, prioritise</span><span class="tag">-ment (нэр): achievement, management</span><span class="tag">-ность → -ity: productivity, flexibility</span><span class="tag">-ful/-less (тэмдэг): successful, careless</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        make progress /meɪk ˈprɑːɡres/ — ахиц гаргах · do business /duː ˈbɪznəs/ — бизнес хийх · take initiative /teɪk ɪˈnɪʃətɪv/ — санаачлага гаргах<br>
        pay attention /peɪ əˈtenʃn/ — анхаарал хандуулах · take charge /teɪk tʃɑːrdʒ/ — тэргүүлэх · make a profit /meɪk ə ˈprɑːfɪt/ — ашиг олох<br>
        overestimate /ˌoʊvərˈestɪmeɪt/ — хэт үнэлэх · underperform /ˌʌndərpərˈfɔːrm/ — дутуу ажиллах · mismanage /ˌmɪsˈmænɪdʒ/ — буруу удирдах<br>
        prioritise /praɪˈɔːrətaɪz/ — эрэмбэлэх · achievement /əˈtʃiːvmənt/ — амжилт · flexibility /ˌfleksəˈbɪləti/ — уян хатан байдал<br>
        resourceful /rɪˈsɔːrsfl/ — авхаалжтай · outsource /ˈaʊtsɔːrs/ — гадуур гүйцэтгүүлэх · streamline /ˈstriːmlaɪn/ — хялбарчлах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «do a mistake» ✗ → <b>make a mistake</b> ✓. «make research» ✗ → <b>do research</b> ✓. «make a decision» ✓ (take a decision ч болно, харин <b>make progress</b> зөвхөн make). «pay attention TO» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «MAKE = шинээр бүтээх (progress, profit, decision). DO = үйл ажиллагаа (business, research, task). over-=хэт, under-=дутуу, mis-=буруу».</p>`
    },
    phrases:[
      {en:"We've made significant progress towards our annual target.", pron:"вив мэйд сигнификэнт прогрэс тэвордз ауэр эньюэл таргэт.", mn:"Бид жилийн зорилтдоо чиглэсэн томоохон ахиц гаргалаа."},
      {en:"You should take the initiative instead of waiting.", pron:"ю шүд тэйк зэ инишэтив инстэд оф вэйтинг.", mn:"Хүлээж суухын оронд санаачлага гаргах хэрэгтэй."},
      {en:"Don't overestimate how quickly the market will recover.", pron:"доунт оувэрэстимэйт хау квикли зэ маркэт вил рикавэр.", mn:"Зах зээл хэр хурдан сэргэхийг хэт үнэлж болохгүй."},
      {en:"The project failed because it was badly mismanaged.", pron:"зэ прожэкт фэйлд бикоз ит воз бэдли мисмэнэжд.", mn:"Төсөл муугаар буруу удирдагдсан тул бүтэлгүйтсэн."},
      {en:"A successful manager knows how to prioritise tasks.", pron:"э сэксэсфл мэнэжэр ноуз хау ту прайоритайз таскс.", mn:"Амжилттай менежер ажлаа хэрхэн эрэмбэлэхээ мэддэг."}
    ],
    exercises:[
      {q:"make/do:", parts:["We need to ", " progress this quarter."], opts:["make","do"], a:0, fix:"progress → MAKE progress (do ✗)."},
      {q:"make/do:", parts:["The team will ", " thorough research first."], opts:["do","make"], a:0, fix:"research → DO research (make ✗)."},
      {q:"take:", parts:["A good leader will ", " responsibility for errors."], opts:["take","make"], a:0, fix:"responsibility → TAKE (make ✗)."},
      {q:"угтвар:", parts:["They ", " the risks and lost money."], opts:["underestimated","misestimated"], a:0, fix:"дутуу үнэлэх → UNDERestimated."}
    ],
    speak:{ scene:'Гүйцэтгэлийн үнэлгээ', turns:[
      {ruby:"How would you rate your performance this year?", pron:"хау вүд ю рэйт ёр пэрформэнс зис йир?", mn:"Энэ жилийн гүйцэтгэлээ хэрхэн үнэлэх вэ?",
        choices:[{t:"I've made real progress and taken the initiative on several projects.",best:true,mn:"Би бодит ахиц гаргаж, хэд хэдэн төсөлд санаачлага гаргасан."},{t:"I've done real progress and made the initiative.",best:false,fix:"MAKE progress; TAKE the initiative."}]},
      {ruby:"Where do you think the team underperformed?", pron:"вэр ду ю синк зэ тийм андэрпэрформд?", mn:"Багийг хаана дутуу ажилласан гэж бодож байна?",
        choices:[{t:"We overestimated demand, so we didn't prioritise the right products.",best:true,mn:"Бид эрэлтийг хэт үнэлсэн тул зөв бүтээгдэхүүнээ эрэмблээгүй."},{t:"We overrated demand, so we didn't priority the right products.",best:false,fix:"overESTIMATED demand; PRIORITISE the products."}]},
      {ruby:"What will you do differently next year?", pron:"вот вил ю ду дифрэнтли нэкст йир?", mn:"Ирэх жил юуг өөрөөр хийх вэ?",
        choices:[{t:"I'll pay closer attention to detail and make fewer careless mistakes.",best:true,mn:"Би нарийн ширийнд илүү анхаарал хандуулж, хайхрамжгүй алдаа цөөн гаргана."},{t:"I'll do more attention to detail and do fewer mistakes.",best:false,fix:"PAY attention; MAKE mistakes (do ✗)."}]}
    ]}
  },
  {
    id:'b2m2l10', title:"2.10 Модулийн төсөл", level:"B2 · М2",
    blurb:"🏆 Албан ёсны дискурсив эссэ — ажил ба амжилтын тухай",
    rule:{
      h:"Давтлага: B2 Модуль 2-ын бүх дүрэм + албан ёсны эссэ",
      html:`<b>🎯 Зорилго:</b> Модуль 2-ын бүх дүрмийг нэгтгэж, жинхэнэ B2 түвшний <b>албан ёсны дискурсив эссэ</b> бичих. Аргумент дэвшүүлж, дүгнэлт хийх!<br><br>
        <b>Модуль 2-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">I suggest that he BE promoted ⭐⭐⭐</span><span class="tag">It's high time they GOT a raise ⭐⭐⭐</span><span class="tag">So do I / Neither can she / a new ONE ⭐⭐</span><span class="tag">WHOEVER works hardest; the report WRITTEN by HR ⭐⭐⭐</span><span class="tag">the FAILURE of the plan; an INCREASE IN sales ⭐⭐⭐</span><span class="tag">BUT FOR your help; PROVIDED that terms are fair ⭐⭐⭐</span><span class="tag">HAVING FINISHED…; claims TO HAVE worked ⭐⭐⭐</span><span class="tag">put up with / come up against ⭐⭐⭐</span><span class="tag">MAKE progress / DO business / overestimate ⭐⭐</span></div>
        <b>Албан ёсны эссэний холбоос үгс:</b>
        <div style="margin:12px 0"><span class="tag">Firstly / Moreover / Furthermore</span><span class="tag">On the one hand … on the other hand</span><span class="tag">Nevertheless / However / In contrast</span><span class="tag">In conclusion / To sum up / All things considered</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — «Is career success worth the sacrifice?» албан ёсны эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>In today's competitive labour market, many people believe that professional success is worth almost any sacrifice. However, the extent to which this holds true deserves closer examination. Firstly, it is essential that ambitious individuals set realistic goals; whoever chases promotion blindly often faces burnout. Having worked in a demanding firm myself, I can confirm that the failure of a healthy work-life balance carries a real cost. Moreover, but for the support of my colleagues, I would have given up long ago. On the one hand, career achievements bring financial security and a sense of purpose. On the other, it is high time society acknowledged that overworked employees underperform in the long run. Many managers demand that staff be available around the clock, yet they look down on those who complain. Provided that companies invest in wellbeing, employees are far more likely to make genuine progress. In conclusion, success is worth pursuing only if it does not require us to sacrifice our health. Whichever path we choose, balance should come first.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 эссэний 4 давхар: <b>Оршил</b> (In today's…, However) → <b>Аргумент 1</b> (Firstly, it is essential that… BE) → <b>Аргумент 2 & эсрэгцэл</b> (On the one hand… On the other, it's high time…) → <b>Дүгнэлт</b> (In conclusion, … only if…).</p>`
    },
    phrases:[
      {en:"It is essential that ambitious people set realistic goals.", pron:"ит из исэншл зэт эмбишэс пийпл сэт риэлистик гоулз.", mn:"Амбицтай хүмүүс бодит зорилго тавих нь зайлшгүй чухал."},
      {en:"But for the support of my team, I would have given up.", pron:"бат фор зэ сэпорт оф май тийм, ай вүд хэв гивн ап.", mn:"Багийнхаа дэмжлэг байгаагүй бол би бууж өгөх байсан."},
      {en:"It's high time society acknowledged that overwork harms productivity.", pron:"итс хай тайм сэсайэти экнолэжд зэт оувэрвөрк хармз продактивити.", mn:"Хэт ачаалал бүтээмжийг хохироодгийг нийгэм хүлээн зөвшөөрөх цаг болсон."},
      {en:"Having worked in a demanding firm, I understand the cost of burnout.", pron:"хэвинг вөркт ин э димандинг фөрм, ай андэрстэнд зэ кост оф бөрнаут.", mn:"Шаардлага өндөртэй компанид ажиллаж байсан тул сэтгэлийн ядаргааны үнэ цэнийг ойлгодог."},
      {en:"Success is worth pursuing only if it does not cost us our health.", pron:"сэксэс из вөрс пэрсюинг оунли иф ит даз нот кост ас ауэр хэлс.", mn:"Амжилт нь эрүүл мэндээ золиослохгүй бол л эрэлхийлэх учиртай."}
    ],
    exercises:[
      {q:"Давтлага (subjunctive):", parts:["It's essential that every worker ", " informed."], opts:["be","is"], a:0, fix:"мандатив → BE informed (is ✗)."},
      {q:"Давтлага (it's high time):", parts:["It's high time they ", " fair wages."], opts:["paid","pay"], a:0, fix:"it's high time + Past → paid (pay ✗)."},
      {q:"Давтлага (but for):", parts:["But for their help, we ", " failed."], opts:["would have","had"], a:0, fix:"but for + would have + V3."},
      {q:"Давтлага (nominalisation):", parts:["There was a sharp ", " in productivity."], opts:["increase","increased"], a:0, fix:"нэр болго → an increase IN."}
    ],
    speak:{ scene:'🏆 Төсөл: Албан ёсны хэлэлцүүлэг', turns:[
      {ruby:"Do you think career success is worth any sacrifice?", pron:"ду ю синк кэриэр сэксэс из вөрс эни сэкрифайс?", mn:"Карьерын амжилт ямар ч золиос гаргах үнэ цэнэтэй гэж бодож байна уу?",
        choices:[{t:"Not entirely. Having seen colleagues burn out, I'd argue balance matters more.",best:true,mn:"Бүрэн биш. Хамт олноо сэтгэлийн ядаргаанд орохыг харсан тул тэнцвэр илүү чухал гэж би маргах болно."},{t:"Not entirely. After I saw colleagues burn out, I had argued balance.",best:false,fix:"боловсронгуй → HAVING SEEN colleagues…, I'd argue."}]},
      {ruby:"But surely companies need people who work hard?", pron:"бат шүрли кампэниз нийд пийпл ху вөрк хард?", mn:"Гэхдээ компаниудад шаргуу ажилладаг хүн хэрэгтэй биз дээ?",
        choices:[{t:"True. However, it's high time employers acknowledged that overworked staff underperform.",best:true,mn:"Үнэн. Гэхдээ хэт ачаалалтай ажилтнууд дутуу ажилладгийг ажил олгогчид хүлээн зөвшөөрөх цаг болсон."},{t:"True. However, it's high time employers acknowledge that staff underperform.",best:false,fix:"it's high time + Past → ACKNOWLEDGED (acknowledge ✗)."}]},
      {ruby:"So what's your conclusion?", pron:"соу вотс ёр кэнклюжн?", mn:"Тэгэхээр таны дүгнэлт юу вэ?",
        choices:[{t:"In conclusion, success is worth pursuing provided that it doesn't cost us our health.",best:true,mn:"Дүгнэвэл, эрүүл мэндээ золиослохгүй бол л амжилт эрэлхийлэх үнэ цэнэтэй."},{t:"In conclusion, success is worth pursuing provided that it won't cost our health.",best:false,fix:"provided + одоо цаг → it DOESN'T cost (won't ✗)."}]}
    ]}
  },
  {
    id:'b2m3l1', title:"3.1 Уур амьсгал", level:"B2 · М3",
    blurb:"Temperatures are bound to rise — тодорхой байдлын модаль ⭐⭐⭐",
    rule:{
      h:"Тодорхой байдал ба хүлээлт: be bound to / be likely to / be due to / be supposed to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Ирээдүйн үйл явдлыг <b>ямар зэргийн итгэлтэйгээр</b> хүлээж байгаагаа ялгаж хэлэх — зайлшгүй, магадлалтай, товлогдсон, ёстой.<br><br>
        <b>be BOUND to = зайлшгүй, гарцаагүй болно (100%):</b>
        <div style="margin:12px 0"><span class="tag">Without action, temperatures ARE BOUND TO rise.</span><span class="tag">Sea levels are bound to keep climbing.</span></div>
        <b>be LIKELY to = магадлалтай (60-80%), be UNLIKELY to = магадлал багатай:</b>
        <div style="margin:12px 0"><span class="tag">Droughts ARE LIKELY TO become more frequent.</span><span class="tag">The deal is unlikely to cut emissions enough.</span></div>
        <b>be DUE to = хуваарь/товлогдсоноор болох ёстой (тодорхой цаг):</b>
        <div style="margin:12px 0"><span class="tag">The summit IS DUE TO begin on Monday.</span><span class="tag">A new report is due to be released in June.</span></div>
        <b>be SUPPOSED to = ёстой (хүлээлт/дүрмээр), гэвч биелэхгүй байж болно:</b>
        <div style="margin:12px 0"><span class="tag">Factories ARE SUPPOSED TO cut emissions — but many don't.</span></div>
        <b>Ялгааг мэдэр:</b> <span class="tag">bound to (гарцаагүй) &gt; likely to (магадлалтай) · due to (товлогдсон) · supposed to (ёстой ч эргэлзээтэй)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        climate /ˈklaɪmət/ — уур амьсгал · temperature /ˈtemprətʃər/ — температур · forecast /ˈfɔːrkæst/ — таамаглал<br>
        humidity /hjuːˈmɪdəti/ — чийгшил · atmosphere /ˈætməsfɪr/ — агаар мандал · greenhouse /ˈɡriːnhaʊs/ — хүлэмж<br>
        emission /ɪˈmɪʃn/ — ялгаруулалт · carbon /ˈkɑːrbən/ — нүүрстөрөгч · warming /ˈwɔːrmɪŋ/ — дулаарал<br>
        rainfall /ˈreɪnfɔːl/ — хур тунадас · drought /draʊt/ — ган · heatwave /ˈhiːtweɪv/ — халуун давалгаа<br>
        average /ˈævərɪdʒ/ — дундаж · fluctuate /ˈflʌktʃueɪt/ — хэлбэлзэх · projection /prəˈdʒekʃn/ — төсөөлөл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It's bound to rains» ✗ — бүгд <b>to + үндсэн үйл</b>: bound TO RISE ✓. «due to» гэдгийг «because of» гэсэн due to-той бүү андуур: энд <b>цаг хуваарь</b> утгатай. «supposed to» = ёстой (100% биш), «bound to»-той андуурч болохгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Итгэлийн шат: <b>BOUND</b> (гарцаагүй) → <b>LIKELY</b> (магад) → <b>DUE</b> (товлогдсон) → <b>SUPPOSED</b> (ёстой ч болзолгүй биш).</p>`
    },
    phrases:[
      {en:"Without urgent action, temperatures are bound to keep rising.", pron:"визаут өржэнт экшн, тэмпрэчэрз а баунд ту кийп райзинг.", mn:"Яаралтай арга хэмжээ авахгүй бол температур гарцаагүй нэмэгдсээр байх болно."},
      {en:"Heatwaves are likely to become more frequent in the region.", pron:"хийтвэйвз а лайкли ту бикам мор фрийквэнт ин зэ рийжэн.", mn:"Тухайн бүс нутагт халуун давалгаа улам байнга давтагдах магадлалтай."},
      {en:"The climate summit is due to open next Monday.", pron:"зэ клаймэт саммит из дью ту оупэн нэкст мандэй.", mn:"Уур амьсгалын дээд хэмжээний уулзалт ирэх даваа гарагт нээгдэх ёстой."},
      {en:"Governments are supposed to cut emissions, but progress is slow.", pron:"гавэрмэнтс а сэпоузд ту кат имишнз, бат прогрэс из слоу.", mn:"Засгийн газрууд ялгаруулалтаа бууруулах ёстой ч ахиц удаан байна."},
      {en:"Average rainfall is unlikely to return to its old pattern.", pron:"эвэрэж рэйнфол из анлайкли ту ритөрн ту итс оулд пэтэрн.", mn:"Дундаж хур тунадас хуучин хэв маягтаа эргэн орох магадлал бага."}
    ],
    exercises:[
      {q:"Гарцаагүй (100%):", parts:["With no action, sea levels ", " to rise."], opts:["are bound","are supposed"], a:0, fix:"Зайлшгүй → are BOUND to."},
      {q:"Товлогдсон цаг:", parts:["The report ", " to be published in June."], opts:["is due","is likely"], a:0, fix:"Хуваарьтай товлогдсон → is DUE to."},
      {q:"Ёстой ч эргэлзээтэй:", parts:["Factories ", " to filter their smoke."], opts:["are supposed","are bound"], a:0, fix:"Дүрмээр ёстой (биелэхгүй байж болно) → are SUPPOSED to."},
      {q:"Хэлбэр:", parts:["Droughts are likely ", " more common."], opts:["to become","becoming"], a:0, fix:"be likely TO + үндсэн үйл → to become."}
    ],
    speak:{ scene:'Уур амьсгалын таамаглал ярих', turns:[
      {ruby:"What do the latest climate projections show?", pron:"вот ду зэ лэйтэст клаймэт прэжэкшнз шоу?", mn:"Хамгийн сүүлийн уур амьсгалын төсөөлөл юу харуулж байна?",
        choices:[{t:"Without deeper cuts, temperatures are bound to rise by two degrees.",best:true,mn:"Илүү гүн бууралтгүйгээр температур гарцаагүй хоёр градусаар нэмэгдэнэ."},{t:"Without deeper cuts, temperatures are bound to rising by two degrees.",best:false,fix:"be bound TO RISE (to + үндсэн үйл), rising ✗."}]},
      {ruby:"Isn't there a summit that might change things?", pron:"изнт зэр э саммит зэт майт чэйнж сингз?", mn:"Байдлыг өөрчилж мэдэх дээд хэмжээний уулзалт байгаа биз дээ?",
        choices:[{t:"Yes, it's due to begin next week, though a big deal is unlikely.",best:true,mn:"Тийм, ирэх долоо хоногт эхлэх ёстой ч том хэлэлцээр гарах магадлал бага."},{t:"Yes, it's likely to begin next week, though a big deal is due.",best:false,fix:"Товлогдсон цаг → DUE to begin; магадлал бага → UNLIKELY. Хоёулаа буруу байрлав."}]},
      {ruby:"So can we rely on governments to act?", pron:"соу кэн ви рилай он гавэрмэнтс ту экт?", mn:"Тэгвэл засгийн газруудад найдаж болох уу?",
        choices:[{t:"They're supposed to, but they often fall short of their promises.",best:true,mn:"Ёстой ч ихэвчлэн амлалтаа биелүүлж чаддаггүй."},{t:"They're bound to, but they often fall short of their promises.",best:false,fix:"«bound to» = гарцаагүй болно; энд «ёстой ч биелдэггүй» гэсэн тул SUPPOSED to."}]}
    ]}
  },
  {
    id:'b2m3l2', title:"3.2 Байгаль хамгаалал", level:"B2 · М3",
    blurb:"We ought to have acted sooner — биелээгүй өнгөрсний модаль ⭐⭐⭐",
    rule:{
      h:"Өнгөрсний модаль (нарийвчилсан): ought to have / shouldn't have / was to have",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>болох ёстой байсан ч болоогүй</b> зүйлийг харамслах, шүүмжлэх, төлөвлөгөө нурсныг илэрхийлэх.<br><br>
        <b>ought to HAVE + V3 = ёстой байсан ч хийгээгүй (should have-тэй утга ойролцоо, албан ёсны өнгө):</b>
        <div style="margin:12px 0"><span class="tag">We OUGHT TO HAVE protected the forest years ago.</span><span class="tag">They ought to have listened to the scientists.</span></div>
        <b>shouldn't HAVE + V3 = хийх ёсгүй байсан ч хийсэн (буруутгал/харамсал):</b>
        <div style="margin:12px 0"><span class="tag">Factories SHOULDN'T HAVE dumped waste into the river.</span><span class="tag">We shouldn't have cleared so much land.</span></div>
        <b>was/were to HAVE + V3 = хийхээр товлогдсон ч биелээгүй (нурсан төлөвлөгөө):</b>
        <div style="margin:12px 0"><span class="tag">The reserve WAS TO HAVE opened in 2020, but funding fell through.</span><span class="tag">They were to have planted a million trees.</span></div>
        <b>Ялгаа:</b> <span class="tag">ought to have (ёстой байсан) · shouldn't have (ёсгүй байсан) · was to have (товлогдсон ч болоогүй)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        conservation /ˌkɒnsərˈveɪʃn/ — хамгаалал · preserve /prɪˈzɜːrv/ — хадгалан хамгаалах · habitat /ˈhæbɪtæt/ — амьдрах орчин<br>
        biodiversity /ˌbaɪoʊdaɪˈvɜːrsəti/ — биологийн олон янз байдал · ecosystem /ˈiːkoʊsɪstəm/ — экосистем · wildlife /ˈwaɪldlaɪf/ — зэрлэг амьтад<br>
        endangered /ɪnˈdeɪndʒərd/ — устах аюултай · sustainable /səˈsteɪnəbl/ — тогтвортой · reserve /rɪˈzɜːrv/ — дархан газар<br>
        sanctuary /ˈsæŋktʃueri/ — хамгаалалтын бүс · restore /rɪˈstɔːr/ — сэргээх · native /ˈneɪtɪv/ — уугуул<br>
        threatened /ˈθretnd/ — заналхийлэгдсэн · extinction /ɪkˈstɪŋkʃn/ — устал · degrade /dɪˈɡreɪd/ — доройтуулах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «We ought to protected» ✗ — өнгөрсний хувьд <b>ought to HAVE + V3</b> ✓. «We didn't should» ✗ → <b>shouldn't HAVE</b> ✓. «was to have»-г энгийн «was going to»-той бүү андуур: энэ нь албан ёсоор товлогдсоныг заана.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Гурван харамсал: <b>ought to have</b> (хийгээгүйдээ) · <b>shouldn't have</b> (хийснийхээ төлөө) · <b>was to have</b> (төлөвлөгөө нурсанд).</p>`
    },
    phrases:[
      {en:"We ought to have protected these wetlands decades ago.", pron:"ви от ту хэв прэтэктид зийз вэтлэндз дэкэйдз эгоу.", mn:"Бид эдгээр намгархаг газрыг хэдэн арван жилийн өмнө хамгаалах ёстой байсан."},
      {en:"They shouldn't have drained the marsh for farmland.", pron:"зэй шүднт хэв дрэйнд зэ марш фор фармлэнд.", mn:"Тэд намгийг тариалангийн талбай болгож хатаах ёсгүй байсан."},
      {en:"The nature reserve was to have opened last spring.", pron:"зэ нэйчэр ризөрв воз ту хэв оупэнд ласт спринг.", mn:"Байгалийн дархан газар өнгөрсөн хавар нээгдэх ёстой байсан."},
      {en:"We ought to have listened to conservation experts sooner.", pron:"ви от ту хэв лиснд ту консэрвэйшн экспэртс сүнэр.", mn:"Бид байгаль хамгааллын мэргэжилтнүүдийг эрт сонсох ёстой байсан."},
      {en:"Such an important habitat shouldn't have been left unprotected.", pron:"сач эн импортэнт хэбитэт шүднт хэв бийн лэфт анпрэтэктид.", mn:"Ийм чухал амьдрах орчныг хамгаалалтгүй орхих ёсгүй байсан."}
    ],
    exercises:[
      {q:"Ёстой байсан ч үгүй:", parts:["We ", " the forest years ago."], opts:["ought to have protected","ought to protect"], a:0, fix:"Өнгөрсний харамсал → ought to HAVE + V3."},
      {q:"Ёсгүй байсан ч хийсэн:", parts:["They ", " toxic waste into the lake."], opts:["shouldn't have dumped","shouldn't dump"], a:0, fix:"Буруутгал → shouldn't HAVE dumped."},
      {q:"Товлогдсон ч нурсан:", parts:["The sanctuary ", " opened in 2020."], opts:["was to have","was to"], a:0, fix:"Нурсан төлөвлөгөө → was to HAVE opened."},
      {q:"Хэлбэр:", parts:["They ought to have ", " to the warnings."], opts:["listened","listen"], a:0, fix:"ought to have + V3 → listened."}
    ],
    speak:{ scene:'Хамгааллын алдааг эргэцүүлэх', turns:[
      {ruby:"Why is this species almost extinct now?", pron:"вай из зис спийшийз олмост икстинкт нау?", mn:"Яагаад энэ зүйл одоо бараг устаж байгаа юм бэ?",
        choices:[{t:"We ought to have protected its habitat long before it collapsed.",best:true,mn:"Амьдрах орчин нь нуран унахаас нэлээд өмнө бид түүнийг хамгаалах ёстой байсан."},{t:"We ought to protected its habitat long before it collapsed.",best:false,fix:"ought to HAVE PROTECTED (өнгөрсний хувьд have + V3)."}]},
      {ruby:"Wasn't there a plan to open a reserve there?", pron:"вознт зэр э плэн ту оупэн э ризөрв зэр?", mn:"Тэнд дархан газар нээх төлөвлөгөө байсан биз дээ?",
        choices:[{t:"Yes, it was to have opened in 2020, but the funding fell through.",best:true,mn:"Тийм, 2020 онд нээгдэх ёстой байсан ч санхүүжилт тасарсан."},{t:"Yes, it was to open in 2020, but the funding fell through.",best:false,fix:"Товлогдсон ч биелээгүй → was to HAVE opened."}]},
      {ruby:"Could anything have been done differently?", pron:"күд эниссинг хэв бийн дан дифрэнтли?", mn:"Ямар нэг зүйлийг өөрөөр хийж болох байсан уу?",
        choices:[{t:"Definitely. We shouldn't have allowed logging so close to the river.",best:true,mn:"Мэдээж. Голд ийм ойрхон мод бэлтгэхийг зөвшөөрөх ёсгүй байсан."},{t:"Definitely. We shouldn't allowed logging so close to the river.",best:false,fix:"shouldn't HAVE ALLOWED (have + V3)."}]}
    ]}
  },
  {
    id:'b2m3l3', title:"3.3 Байгалийн гамшиг", level:"B2 · М3",
    blurb:"By dawn they'll have been evacuating for hours — нарийн ирээдүй ⭐⭐⭐",
    rule:{
      h:"Нарийвчилсан ирээдүй: Future Perfect Continuous + is to / about to / on the verge of / due to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Гамшгийн үед ирээдүйг <b>нарийн зэрэглэлээр</b> дүрслэх — үргэлжлэх хугацаа, товлогдсон, дөнгөж болох гэж буй үйлдэл.<br><br>
        <b>Future Perfect Continuous: will have been + V-ing = ирээдүйн цэг ГЭХЭД ХИЧНЭЭН удаан үргэлжилсэн байх:</b>
        <div style="margin:12px 0"><span class="tag">By dawn, rescuers WILL HAVE BEEN WORKING for twelve hours.</span><span class="tag">By June, the region will have been suffering drought for a year.</span></div>
        <b>be about to / be on the verge of = дөнгөж болох гэж буй (маш ойрхон):</b>
        <div style="margin:12px 0"><span class="tag">The volcano IS ABOUT TO erupt.</span><span class="tag">The dam is ON THE VERGE OF collapsing.</span></div>
        <b>be to = албан ёсоор товлогдсон/зарлигдсан (мэдээ, тушаал):</b>
        <div style="margin:12px 0"><span class="tag">Residents ARE TO be evacuated immediately.</span><span class="tag">The area is to remain closed until Friday.</span></div>
        <b>Ялгаа:</b> <span class="tag">about to / on the verge of (маш ойрхон) · be to (тушаал/зарлиг) · due to (хуваарьтай)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        disaster /dɪˈzɑːstər/ — гамшиг · flood /flʌd/ — үер · earthquake /ˈɜːrθkweɪk/ — газар хөдлөлт<br>
        hurricane /ˈhɜːrɪkeɪn/ — хар салхи · wildfire /ˈwaɪldfaɪər/ — ой хээрийн түймэр · eruption /ɪˈrʌpʃn/ — дэлбэрэлт<br>
        landslide /ˈlændslaɪd/ — хөрсний нуралт · tsunami /tsuːˈnɑːmi/ — цунами · evacuate /ɪˈvækjueɪt/ — нүүлгэн шилжүүлэх<br>
        aftermath /ˈæftərmæθ/ — үр дагавар · magnitude /ˈmæɡnɪtuːd/ — хүч (баллын) · shelter /ˈʃeltər/ — хоргодох байр<br>
        catastrophe /kəˈtæstrəfi/ — сүйрэл · devastate /ˈdevəsteɪt/ — сүйтгэх · debris /dəˈbriː/ — хог хаягдал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «will have been work» ✗ → <b>will have been workING</b> ✓. «on the verge of collapse» — verge of дараа <b>-ing эсвэл нэр үг</b> (of collapsING / of collapse). «be to» товлолыг мэдээллийн албан хэлээр хэрэглэдгийг санаарай.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>WILL HAVE BEEN + ING</b> = хэдэн цаг үргэлжилсэн байх; <b>ON THE VERGE OF / ABOUT TO</b> = дөнгөж болох гэж буй; <b>BE TO</b> = албан тушаал.</p>`
    },
    phrases:[
      {en:"By dawn, rescuers will have been searching for over ten hours.", pron:"бай дон, рэскюэрз вил хэв бийн сөрчинг фор оувэр тэн ауэрз.", mn:"Үүр цайх үед аврагчид арав гаруй цаг эрэл хайгуул хийж байх болно."},
      {en:"The dam is on the verge of collapsing after the heavy rain.", pron:"зэ дэм из он зэ вөрж ов кэлапсинг афтэр зэ хэви рэйн.", mn:"Их бороо орсны дараа далан нурах шахаж байна."},
      {en:"Residents in the valley are to be evacuated at once.", pron:"рэзидэнтс ин зэ вэли а ту би ивэкюэйтид эт ванс.", mn:"Хөндийн оршин суугчид нэн даруй нүүлгэн шилжүүлэгдэх ёстой."},
      {en:"The volcano is about to erupt for the first time in decades.", pron:"зэ волкэйноу из эбаут ту ирапт фор зэ фөрст тайм ин дэкэйдз.", mn:"Галт уул хэдэн арван жилд анх удаа дэлбэрэх гэж байна."},
      {en:"By next week, they will have been living in shelters for a month.", pron:"бай нэкст вийк, зэй вил хэв бийн ливинг ин шэлтэрз фор э манс.", mn:"Ирэх долоо хоног гэхэд тэд хоргодох байранд сар шахам амьдарсан байх болно."}
    ],
    exercises:[
      {q:"Хэдэн цаг үргэлжилсэн байх:", parts:["By dawn, crews ", " for ten hours."], opts:["will have been working","will have worked"], a:0, fix:"Үргэлжлэх хугацаа → will have BEEN workING."},
      {q:"Маш ойрхон:", parts:["The dam is on the verge ", " collapsing."], opts:["of","to"], a:0, fix:"on the verge OF + -ing."},
      {q:"Албан тушаал/товлол:", parts:["Residents ", " be evacuated at once."], opts:["are to","are about"], a:0, fix:"Албан зарлиг → are TO be evacuated."},
      {q:"Хэлбэр:", parts:["The volcano is about ", " erupt."], opts:["to","of"], a:0, fix:"be about TO + үндсэн үйл."}
    ],
    speak:{ scene:'Гамшгийн мэдээ дамжуулах', turns:[
      {ruby:"What's the situation with the rescue teams?", pron:"вотс зэ ситюэйшн виз зэ рэскю тиймз?", mn:"Аврах багуудын байдал ямар байна?",
        choices:[{t:"By nightfall, they'll have been digging through the debris for a full day.",best:true,mn:"Үдэш болоход тэд нуранги дундуур бүтэн өдөр ухаж байх болно."},{t:"By nightfall, they'll have been dig through the debris for a full day.",best:false,fix:"will have been DIGGING (been + -ing)."}]},
      {ruby:"And the dam upstream — is it safe?", pron:"энд зэ дэм апстрийм — из ит сэйф?", mn:"Дээд урсгал дахь далан аюулгүй юу?",
        choices:[{t:"No, it's on the verge of collapsing, so people are to leave immediately.",best:true,mn:"Үгүй, нурах шахаж байгаа тул хүмүүс нэн даруй гарах ёстой."},{t:"No, it's on the verge to collapse, so people are about leave immediately.",best:false,fix:"on the verge OF collapsING; are TO leave. Хоёулаа буруу байв."}]},
      {ruby:"How long will the shelters be needed?", pron:"хау лонг вил зэ шэлтэрз би нийдид?", mn:"Хоргодох байр хэр удаан хэрэгтэй байх вэ?",
        choices:[{t:"By month's end, families will have been staying in them for weeks.",best:true,mn:"Сарын эцэс гэхэд гэр бүлүүд тэнд хэдэн долоо хоног байсан байх болно."},{t:"By month's end, families will have stayed in them for weeks.",best:false,fix:"Үргэлжлэх хугацааг онцолж will have BEEN STAYING."}]}
    ]}
  },
  {
    id:'b2m3l4', title:"3.4 Хог хаягдал", level:"B2 · М3",
    blurb:"The system needs fixing — идэвхгүй утгатай -ing ⭐⭐",
    rule:{
      h:"Идэвхгүй утгатай -ing: it needs fixing / the house wants painting",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Засах хэрэгтэй» гэдгийг <b>идэвхгүй утгаар</b>, богиноор илэрхийлэх — need / want / require + -ing.<br><br>
        <b>need + V-ing = засагдах хэрэгтэй (= need to be + V3):</b>
        <div style="margin:12px 0"><span class="tag">The recycling system NEEDS FIXING. (= needs to be fixed)</span><span class="tag">These bins need emptying every day.</span></div>
        <b>want + V-ing (ярианы, «шаардлагатай» утгаар):</b>
        <div style="margin:12px 0"><span class="tag">The whole street WANTS cleaning after the festival.</span></div>
        <b>require + V-ing (албан ёсны өнгө):</b>
        <div style="margin:12px 0"><span class="tag">Hazardous waste REQUIRES handling with great care.</span></div>
        <b>Хоёр хувилбар ижил утга:</b>
        <div style="margin:12px 0"><span class="tag">The pipe needs REPAIRING. = The pipe needs TO BE REPAIRED.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        waste /weɪst/ — хаягдал · litter /ˈlɪtər/ — хог түгээх · recycle /ˌriːˈsaɪkl/ — дахин боловсруулах<br>
        landfill /ˈlændfɪl/ — хогийн цэг · pollution /pəˈluːʃn/ — бохирдол · dispose /dɪˈspoʊz/ — устгах, хаях<br>
        garbage /ˈɡɑːrbɪdʒ/ — хог · plastic /ˈplæstɪk/ — хуванцар · decompose /ˌdiːkəmˈpoʊz/ — задрах, ялзрах<br>
        compost /ˈkɒmpɒst/ — бордоо болгох · sewage /ˈsuːɪdʒ/ — бохир ус · toxic /ˈtɒksɪk/ — хортой<br>
        contaminate /kənˈtæmɪneɪt/ — бохирдуулах · packaging /ˈpækɪdʒɪŋ/ — сав баглаа · single-use /ˈsɪŋɡl juːs/ — нэг удаагийн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It needs to fix» ✗ (идэвхтэй мэт) — идэвхгүй утгаар <b>needs fixING</b> эсвэл <b>needs TO BE fixed</b> ✓. «needs fixed» ✗ (Британийн зарим аялгуунаас бусад тохиолдолд буруу). </p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Юм өөрөө засагдах хэрэгтэй бол → NEED + ING». Хүн үйлдвэл to + үйл; юм идэвхгүй бол -ing.</p>`
    },
    phrases:[
      {en:"The city's recycling system badly needs fixing.", pron:"зэ ситиз рисайклинг систэм бэдли нийдз фиксинг.", mn:"Хотын дахин боловсруулах систем яаралтай засагдах хэрэгтэй байна."},
      {en:"These overflowing bins need emptying twice a day.", pron:"зийз оувэрфлоуинг бинз нийд эмптиинг твайс э дэй.", mn:"Дүүрсэн энэ хогийн савнууд өдөрт хоёр удаа хоослогдох хэрэгтэй."},
      {en:"Hazardous waste requires handling with extreme care.", pron:"хэзэрдэс вэйст рикуайрз хэндлинг виз икстрийм кэр.", mn:"Хортой хаягдлыг маш болгоомжтой зохицуулах шаардлагатай."},
      {en:"The riverbank wants cleaning after all that litter.", pron:"зэ ривэрбэнк вонтс клийнинг афтэр ол зэт литэр.", mn:"Тэр бүх хогны дараа голын эрэг цэвэрлэгдэх хэрэгтэй байна."},
      {en:"Single-use plastic needs banning, not just reducing.", pron:"сингл-юс плэстик нийдз бэннинг, нот жаст ридюсинг.", mn:"Нэг удаагийн хуванцарыг зөвхөн багасгах биш, хориглох хэрэгтэй."}
    ],
    exercises:[
      {q:"Идэвхгүй -ing:", parts:["The whole system needs ", "."], opts:["fixing","to fix"], a:0, fix:"Юм засагдах хэрэгтэй → needs fixING (эсвэл to BE fixed)."},
      {q:"Ижил утга:", parts:["The pipe needs repairing = the pipe needs ", "."], opts:["to be repaired","to repair"], a:0, fix:"needs -ing = needs TO BE + V3."},
      {q:"Хэлбэр:", parts:["These bins need ", " every morning."], opts:["emptying","to empty"], a:0, fix:"Сав өөрөө → need emptyING."},
      {q:"Албан ёсны:", parts:["Toxic waste requires ", " carefully."], opts:["handling","to handle"], a:0, fix:"require + -ing → handling."}
    ],
    speak:{ scene:'Хог хаягдлын асуудал ярилцах', turns:[
      {ruby:"Why does the neighbourhood look so messy lately?", pron:"вай даз зэ нэйбэрхүд лүк соу мэси лэйтли?", mn:"Яагаад сүүлийн үед хороолол ийм замбараагүй харагдаад байгаа юм бэ?",
        choices:[{t:"The collection schedule is broken — the bins need emptying far more often.",best:true,mn:"Хог цуглуулах хуваарь эвдэрсэн — савнууд хамаагүй олон дахин хоослогдох хэрэгтэй."},{t:"The collection schedule is broken — the bins need to empty far more often.",best:false,fix:"Сав өөрөө → need EMPTYING (эсвэл to BE emptied), to empty ✗."}]},
      {ruby:"Can't the council just add more trucks?", pron:"кант зэ каунсл жаст эд мор тракс?", mn:"Захиргаа зүгээр л илүү машин нэмж болохгүй юу?",
        choices:[{t:"The whole system needs redesigning, not just a few extra trucks.",best:true,mn:"Ердөө хэдэн машин биш, бүхэл систем нь дахин зохиогдох хэрэгтэй."},{t:"The whole system needs to redesign, not just a few extra trucks.",best:false,fix:"Систем идэвхгүй → needs REDESIGNING / to BE redesigned."}]},
      {ruby:"What about all the plastic packaging?", pron:"вот эбаут ол зэ плэстик пэкэжинг?", mn:"Бүх хуванцар сав баглаа яах вэ?",
        choices:[{t:"Honestly, single-use packaging needs banning altogether.",best:true,mn:"Үнэнийг хэлэхэд нэг удаагийн сав баглааг бүрэн хориглох хэрэгтэй."},{t:"Honestly, single-use packaging needs ban altogether.",best:false,fix:"needs + -ing → needs BANNING."}]}
    ]}
  },
  {
    id:'b2m3l5', title:"3.5 Эрчим хүч", level:"B2 · М3",
    blurb:"We had the panels installed / I saw them build it — учруулах ба мэдрэхүйн үйл ⭐⭐⭐",
    rule:{
      h:"Учруулах ба мэдрэхүйн үйл: have/get sth done + see/hear/watch sb do vs doing",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хэн нэгнээр <b>үйлдэл гүйцэтгүүлэх</b> (causative) ба <b>мэдрэхүйн үйлээр</b> ажигласнаа хэлэх.<br><br>
        <b>have/get + юм + V3 = бусдаар хийлгэх:</b>
        <div style="margin:12px 0"><span class="tag">We HAD solar panels INSTALLED last year.</span><span class="tag">They GOT the old boiler REPLACED.</span></div>
        <b>have sb DO / get sb TO DO = хүнээр даалгах:</b>
        <div style="margin:12px 0"><span class="tag">We HAD an engineer CHECK the wiring.</span><span class="tag">We GOT an electrician TO fit the meter.</span></div>
        <b>see/hear/watch + sb + DO = бүхэл үйлдлийг харах (эхнээс дуустал):</b>
        <div style="margin:12px 0"><span class="tag">I WATCHED them RAISE the turbine into place.</span></div>
        <b>see/hear/watch + sb + DOING = үйл явж байхыг харах (дунд нь):</b>
        <div style="margin:12px 0"><span class="tag">I SAW the turbines TURNING in the wind.</span></div>
        <b>Ялгаа:</b> <span class="tag">saw him fall (бүхэлд нь, дуусав) · saw him falling (явж байхад нь харав)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        energy /ˈenərdʒi/ — эрчим хүч · renewable /rɪˈnuːəbl/ — сэргээгдэх · solar /ˈsoʊlər/ — нарны<br>
        turbine /ˈtɜːrbaɪn/ — сэнс, турбин · hydro /ˈhaɪdroʊ/ — усан · fossil fuel /ˈfɒsl fjuːəl/ — эрдэс түлш<br>
        grid /ɡrɪd/ — цахилгаан сүлжээ · generate /ˈdʒenəreɪt/ — үйлдвэрлэх · nuclear /ˈnuːkliər/ — цөмийн<br>
        battery /ˈbætəri/ — батерей · efficiency /ɪˈfɪʃnsi/ — үр ашиг · consumption /kənˈsʌmpʃn/ — хэрэглээ<br>
        geothermal /ˌdʒiːoʊˈθɜːrml/ — газрын дулааны · output /ˈaʊtpʊt/ — гарц, үйлдвэрлэл · sustainable /səˈsteɪnəbl/ — тогтвортой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «We installed solar panels» гэвэл өөрөө хийсэн; бусдаар хийлгэсэн бол <b>had panels INSTALLED</b> ✓. «I saw him to fall» ✗ — мэдрэхүйн үйлийн дараа <b>to байхгүй</b>: saw him FALL / FALLING ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>HAVE юм + V3</b> = хийлгэх; <b>SEE sb DO</b> = бүхэлд нь; <b>SEE sb DOING</b> = дунд нь. Мэдрэхүйн үйлд «to» байхгүй!</p>`
    },
    phrases:[
      {en:"We had solar panels installed on the roof last summer.", pron:"ви хэд соулэр пэнлз инстолд он зэ руф ласт саммэр.", mn:"Бид өнгөрсөн зун дээвэр дээрээ нарны хавтан суулгуулсан."},
      {en:"They got an engineer to inspect the whole grid connection.", pron:"зэй гот эн энжиниэр ту инспэкт зэ хоул грид кэнэкшн.", mn:"Тэд инженерээр сүлжээний бүх холболтыг шалгуулсан."},
      {en:"I watched the workers raise the wind turbine into place.", pron:"ай вочт зэ вөркэрз рэйз зэ винд төрбайн инту плэйс.", mn:"Ажилчид салхин турбиныг байранд нь босгохыг би харлаа."},
      {en:"You can hear the turbines humming softly from the road.", pron:"ю кэн хийр зэ төрбайнз хамминг софтли фром зэ роуд.", mn:"Замаас турбинууд намуухан дуугарч байхыг сонсож болно."},
      {en:"We're having the old boiler replaced with a heat pump.", pron:"вийр хэвинг зэ оулд бойлэр риплэйст виз э хийт памп.", mn:"Бид хуучин зуухаа дулааны насосоор солиулж байна."}
    ],
    exercises:[
      {q:"Бусдаар хийлгэх:", parts:["We had solar panels ", " on the roof."], opts:["installed","install"], a:0, fix:"have + юм + V3 → installed."},
      {q:"Хүнээр даалгах:", parts:["We got an electrician ", " the meter."], opts:["to fit","fit"], a:0, fix:"get + sb + TO + үйл → to fit."},
      {q:"Бүхэл үйлдэл:", parts:["I watched them ", " the turbine up."], opts:["raise","to raise"], a:0, fix:"watch sb DO (to ✗) → raise."},
      {q:"Дунд нь харах:", parts:["I saw the blades ", " in the wind."], opts:["turning","to turn"], a:0, fix:"see sb DOING → turning (үйл явж байхад)."}
    ],
    speak:{ scene:'Гэрийн эрчим хүч шинэчлэх', turns:[
      {ruby:"Your electricity bills dropped a lot. What did you change?", pron:"ёр илэктрисити билз дропт э лот. вот дид ю чэйнж?", mn:"Цахилгааны төлбөр тань их буурсан байна. Юу өөрчилсөн бэ?",
        choices:[{t:"We had solar panels installed and got the old boiler replaced.",best:true,mn:"Бид нарны хавтан суулгуулж, хуучин зуухаа солиулсан."},{t:"We had installed solar panels and got replaced the old boiler.",best:false,fix:"Учруулах: had panels INSTALLED, got the boiler REPLACED (юм + V3 дараалал)."}]},
      {ruby:"Did you fit everything yourselves?", pron:"дид ю фит эврисинг ёрсэлвз?", mn:"Бүгдийг өөрсдөө суурилуулсан уу?",
        choices:[{t:"No, we got a certified electrician to do all the wiring.",best:true,mn:"Үгүй, бид гэрчилгээтэй цахилгаанчнаар бүх утаслалыг хийлгэсэн."},{t:"No, we got a certified electrician do all the wiring.",best:false,fix:"get + sb + TO + үйл → to do."}]},
      {ruby:"Is it strange having turbines nearby?", pron:"из ит стрэйнж хэвинг төрбайнз ниэрбай?", mn:"Ойролцоо турбинтай байх нь хачирхалтай юу?",
        choices:[{t:"Not really — I quite like watching them turning against the sky.",best:true,mn:"Тийм ч биш — тэднийг тэнгэрийн дэвсгэрт эргэж байхыг харах надад таалагддаг."},{t:"Not really — I quite like watching them to turn against the sky.",best:false,fix:"watch sb DOING/DO — «to» байхгүй → turning."}]}
    ]}
  },
  {
    id:'b2m3l6', title:"3.6 Ус нөөц", level:"B2 · М3",
    blurb:"All the water / each drop / neither of the reservoirs ⭐⭐",
    rule:{
      h:"Нарийвчилсан тоолуур: all/whole · every/each · both/either/neither of",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэмжээ, бүрдэл, сонголтыг <b>нарийн ялгаж</b> хэлэх — усны нөөцийн жишээгээр.<br><br>
        <b>ALL (the) + олон/үл тоологдох · WHOLE + нэгдмэл нэр:</b>
        <div style="margin:12px 0"><span class="tag">ALL THE rivers are shrinking.</span><span class="tag">The WHOLE lake has dried up. (all the lake ✗)</span></div>
        <b>EVERY = бүгдийг нэгтгэн (ерөнхий) · EACH = тус тусад нь (ганц нэгээр):</b>
        <div style="margin:12px 0"><span class="tag">EVERY reservoir is monitored.</span><span class="tag">EACH drop counts in a drought. (тус бүр)</span></div>
        <b>BOTH = хоёулаа · EITHER = аль нэг нь · NEITHER = аль нь ч биш (+ of the):</b>
        <div style="margin:12px 0"><span class="tag">BOTH OF the dams are full.</span><span class="tag">NEITHER OF the wells is safe to drink. (ганц тоо!)</span></div>
        <b>Тоо тэнцэл:</b> <span class="tag">every/each + ганц үйл · neither of + ганц үйл · both of + олон үйл</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        reservoir /ˈrezərvwɑːr/ — усан сан · aquifer /ˈækwɪfər/ — газрын доорх ус · freshwater /ˈfreʃwɔːtər/ — цэнгэг ус<br>
        scarcity /ˈskersəti/ — хомсдол · irrigation /ˌɪrɪˈɡeɪʃn/ — усжуулалт · groundwater /ˈɡraʊndwɔːtər/ — гүний ус<br>
        watershed /ˈwɔːtərʃed/ — ай сав · desalination /diːˌsælɪˈneɪʃn/ — давсгүйжүүлэлт · wetland /ˈwetlænd/ — намгархаг газар<br>
        runoff /ˈrʌnɔːf/ — гадаргын урсац · purify /ˈpjʊrɪfaɪ/ — цэвэршүүлэх · drainage /ˈdreɪnɪdʒ/ — ус зайлуулалт<br>
        basin /ˈbeɪsn/ — сав газар · well /wel/ — худаг · reservoir capacity /kəˈpæsəti/ — багтаамж</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «all the lake» ✗ → нэгдмэл бол <b>the WHOLE lake</b> ✓. «Every wells» ✗ → every/each + <b>ганц нэр + ганц үйл</b> ✓. «Neither of the wells ARE» ✗ → албан ёсоор <b>IS</b> (ганц тоо) ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>WHOLE</b> = бүхэлд нь (нэг юм); <b>EACH</b> = тус бүр (ганцаар); <b>NEITHER</b> = аль нь ч биш (ганц үйл).</p>`
    },
    phrases:[
      {en:"The whole basin is running short of freshwater.", pron:"зэ хоул бэйсн из раннинг шорт ов фрэшвотэр.", mn:"Бүхэл сав газар цэнгэг усны хомсдолд орж байна."},
      {en:"Each drop matters when the reservoir is this low.", pron:"ийч дроп мэтэрз вэн зэ рэзэрвуар из зис лоу.", mn:"Усан сан ийм доогуур байхад дусал бүр чухал."},
      {en:"Neither of the two wells is safe to drink from now.", pron:"найзэр ов зэ ту вэлз из сэйф ту дринк фром нау.", mn:"Хоёр худгийн аль нь ч одоо уухад аюулгүй биш."},
      {en:"Both of the dams have reached full capacity this spring.", pron:"боус ов зэ дэмз хэв рийчт фүл кэпэсити зис спринг.", mn:"Энэ хавар хоёр далан хоёулаа дүүрэн багтаамждаа хүрсэн."},
      {en:"Every household is being asked to cut water use by half.", pron:"эври хаусхоулд из бийинг аскт ту кат вотэр юс бай хаф.", mn:"Өрх бүрээс усны хэрэглээгээ хагасаар бууруулахыг хүсэж байна."}
    ],
    exercises:[
      {q:"Нэгдмэл нэр:", parts:["The ", " lake has dried up completely."], opts:["whole","all"], a:0, fix:"Нэг нэгдмэл юм → the WHOLE lake (all the lake ✗)."},
      {q:"Тус бүр:", parts:["", " drop counts during a drought."], opts:["Each","All"], a:0, fix:"Ганц нэгээр → EACH drop."},
      {q:"Аль нь ч биш (ганц үйл):", parts:["Neither of the wells ", " safe."], opts:["is","are"], a:0, fix:"neither of + ганц үйл → is."},
      {q:"Хоёулаа:", parts:["Both of the reservoirs ", " full now."], opts:["are","is"], a:0, fix:"both of + олон үйл → are."}
    ],
    speak:{ scene:'Усны хомсдол хэлэлцэх', turns:[
      {ruby:"How bad is the water shortage this year?", pron:"хау бэд из зэ вотэр шортэж зис йир?", mn:"Энэ жилийн усны хомсдол хэр ноцтой вэ?",
        choices:[{t:"Serious — the whole basin is short, and each district feels it.",best:true,mn:"Ноцтой — бүхэл сав газар хомсдолтой, дүүрэг бүр үүнийг мэдэрч байна."},{t:"Serious — all the basin is short, and every districts feel it.",best:false,fix:"the WHOLE basin; EACH/EVERY district (ганц тоо). «all the basin», «every districts» ✗."}]},
      {ruby:"Can we rely on the two main reservoirs?", pron:"кэн ви рилай он зэ ту мэйн рэзэрвуарз?", mn:"Хоёр гол усан санд найдаж болох уу?",
        choices:[{t:"Not fully — neither of them is more than half full right now.",best:true,mn:"Бүрэн биш — тэдний аль нь ч одоо хагасаас илүү дүүрээгүй байна."},{t:"Not fully — neither of them are more than half full right now.",best:false,fix:"neither of + ганц үйл → IS (албан ёсоор)."}]},
      {ruby:"So what are households being asked to do?", pron:"соу вот а хаусхоулдз бийинг аскт ту ду?", mn:"Тэгэхээр өрхүүдээс юу хийхийг хүсэж байна вэ?",
        choices:[{t:"Every household is expected to save water, and each one is being metered.",best:true,mn:"Өрх бүр ус хэмнэх ёстой бөгөөд тус бүрд нь тоолуур тавьж байна."},{t:"Every households are expected to save water, and each are being metered.",best:false,fix:"Every/each + ганц нэр + ганц үйл: household IS, each ONE is."}]}
    ]}
  },
  {
    id:'b2m3l7', title:"3.7 Ой мод", level:"B2 · М3",
    blurb:"The more we log, the less resilient the forest — харьцуулалтын нарийвчлал ⭐⭐⭐",
    rule:{
      h:"Нарийвчилсан харьцуулалт: the…the + comparative · no/any + comparative · all the + comparative",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хоёр хэмжигдэхүүний <b>хамаарлыг</b>, өөрчлөлтийг харьцуулалтаар нарийн илэрхийлэх.<br><br>
        <b>THE + харьцуулал …, THE + харьцуулал = ямар их…, төдий чинээ… (зэрэгцэн өөрчлөгдөх):</b>
        <div style="margin:12px 0"><span class="tag">THE MORE trees we cut, THE DRIER the soil becomes.</span><span class="tag">The faster we replant, the sooner the canopy recovers.</span></div>
        <b>NO + харьцуулал = огт илүү биш; ANY + харьцуулал (асуулт/үгүйсгэл):</b>
        <div style="margin:12px 0"><span class="tag">The situation is NO BETTER than last year.</span><span class="tag">Is the soil ANY healthier after replanting?</span></div>
        <b>ALL THE + харьцуулал = бүр ч илүү (шалтгаанаар нэмэгдэх):</b>
        <div style="margin:12px 0"><span class="tag">Old forests are ALL THE MORE valuable because they store carbon.</span></div>
        <b>Ялгаа:</b> <span class="tag">no better (сайжраагүй) · all the better (бүр ч дээр) · the greener, the healthier (хамаарал)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        forest /ˈfɔːrɪst/ — ой · timber /ˈtɪmbər/ — бэлэн мод · deforestation /diːˌfɔːrɪˈsteɪʃn/ — ой сүйтгэл<br>
        canopy /ˈkænəpi/ — навчит бүрхүүл · logging /ˈlɔːɡɪŋ/ — мод бэлтгэл · reforest /ˌriːˈfɔːrɪst/ — ой нөхөн сэргээх<br>
        afforestation /əˌfɔːrɪˈsteɪʃn/ — ойжуулалт · undergrowth /ˈʌndərɡroʊθ/ — доод ургамал · woodland /ˈwʊdlənd/ — ойт газар<br>
        sapling /ˈsæplɪŋ/ — тарьц · foliage /ˈfoʊliɪdʒ/ — навчлаг · rainforest /ˈreɪnfɔːrɪst/ — халуун орны ой<br>
        clear-cut /ˈklɪr kʌt/ — цэлмэн огтлолт · carbon sink /ˈkɑːrbən sɪŋk/ — нүүрстөрөгч шингээгч · resilient /rɪˈzɪliənt/ — тэсвэртэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «More we cut, more soil dries» ✗ — <b>THE</b> заавал: THE MORE…, THE DRIER ✓. «no more better» ✗ → <b>no better</b> (double comparative ✗). «all the more» бол «бүр ч илүү» — «all more» биш.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Хос «THE» = хамаарлын гүүр; «NO + харьц.» = зөрөөгүй; «ALL THE + харьц.» = шалтгаанаар бүр ч илүү.</p>`
    },
    phrases:[
      {en:"The more forest we clear, the drier the whole region becomes.", pron:"зэ мор форэст ви клийр, зэ драйэр зэ хоул рийжэн бикамз.", mn:"Ойг хэдий их цэлмэх тусам бүхэл бүс нутаг төдий чинээ хуурайшдаг."},
      {en:"After a year of replanting, the soil is no healthier than before.", pron:"афтэр э йир ов рийплантинг, зэ сойл из ноу хэлсиэр зэн бифор.", mn:"Нэг жил нөхөн тарьсны дараа хөрс урьдынхаас огт эрүүл болоогүй."},
      {en:"Ancient woodlands are all the more precious because they can't be replaced.", pron:"эйншэнт вүдлэндз а ол зэ мор прэшэс бикоз зэй кант би риплэйст.", mn:"Эртний ойт газар нь орлуулшгүй тул бүр ч үнэ цэнэтэй."},
      {en:"The faster saplings grow, the sooner the canopy closes over.", pron:"зэ фастэр сэйплингз гроу, зэ сүнэр зэ кэнэпи клоузиз оувэр.", mn:"Тарьц хэдий хурдан ургах тусам навчит бүрхүүл төдий чинээ хурдан бүрхэгддэг."},
      {en:"Is the rainforest any better protected than it was a decade ago?", pron:"из зэ рэйнфорэст эни бэтэр прэтэктид зэн ит воз э дэкэйд эгоу?", mn:"Халуун орны ой арван жилийн өмнөхөөс огт илүү хамгаалагдсан уу?"}
    ],
    exercises:[
      {q:"Хамаарал (хос the):", parts:["The more we log, ", " the soil gets."], opts:["the drier","drier"], a:0, fix:"Хоёр дахь талд ч THE → THE DRIER."},
      {q:"Зөрөөгүй:", parts:["The forest is ", " than last year."], opts:["no healthier","no more healthy"], a:0, fix:"no + харьцуулал → no healthier (double ✗)."},
      {q:"Бүр ч илүү:", parts:["Old trees are ", " valuable because they store carbon."], opts:["all the more","all more"], a:0, fix:"ALL THE + харьцуулал → all the more."},
      {q:"Асуултад:", parts:["Is the soil ", " healthier now?"], opts:["any","no"], a:0, fix:"Асуултад any + харьцуулал → any healthier."}
    ],
    speak:{ scene:'Ойн доройтол хэлэлцэх', turns:[
      {ruby:"Why does logging affect the climate so much?", pron:"вай даз логгинг эфэкт зэ клаймэт соу мач?", mn:"Яагаад мод бэлтгэл уур амьсгалд ийм их нөлөөлдөг вэ?",
        choices:[{t:"The more forest we lose, the less carbon the land can absorb.",best:true,mn:"Ойгоо хэдий их алдах тусам газар төдий бага нүүрстөрөгч шингээж чадна."},{t:"More forest we lose, less carbon the land can absorb.",best:false,fix:"Хос «THE» заавал: THE MORE…, THE LESS…"}]},
      {ruby:"Has the replanting programme improved things?", pron:"хэз зэ рийплантинг проугрэм импрувд сингз?", mn:"Нөхөн тарих хөтөлбөр байдлыг сайжруулсан уу?",
        choices:[{t:"Honestly, the soil is no better than it was five years ago.",best:true,mn:"Үнэнийг хэлэхэд хөрс таван жилийн өмнөхөөс огт дээрдээгүй."},{t:"Honestly, the soil is no more better than it was five years ago.",best:false,fix:"no + харьцуулал → no better («no more better» давхар харьцуулал ✗)."}]},
      {ruby:"So why fight so hard for these old forests?", pron:"соу вай файт соу хард фор зийз оулд форэстс?", mn:"Тэгвэл яагаад эдгээр эртний ойн төлөө ийм их тэмцдэг юм бэ?",
        choices:[{t:"Because they can't be replaced, they're all the more worth saving.",best:true,mn:"Тэднийг орлуулж болдоггүй тул хамгаалах нь бүр ч илүү үнэ цэнэтэй."},{t:"Because they can't be replaced, they're all more worth saving.",best:false,fix:"«all THE more» — «THE» орхиж болохгүй."}]}
    ]}
  },
  {
    id:'b2m3l8', title:"3.8 Амьтны аймаг", level:"B2 · М3",
    blurb:"So rapid was the decline that… — эргүүлгийн онцлол ⭐⭐⭐",
    rule:{
      h:"Онцлолын эргүүлэг: so/such + эргэсэн бүтэц (So great was the damage that…)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Онцлохын тулд өгүүлбэрийн эхэнд <b>so/such</b> гаргаж, туслах үйлийг урагшлуулан <b>эргүүлэх</b> (inversion) — албан ёсны, нөлөөтэй хэв маяг.<br><br>
        <b>SO + тэмдэг нэр + туслах үйл + гол гишүүн + THAT…:</b>
        <div style="margin:12px 0"><span class="tag">SO RAPID WAS the decline THAT whole herds vanished.</span><span class="tag">So fragile is the ecosystem that one change upsets it. </span></div>
        <b>SUCH + (a/an) + (тэмдэг) + нэр + туслах + … + THAT…:</b>
        <div style="margin:12px 0"><span class="tag">SUCH WAS the scale of poaching THAT the species nearly died out.</span><span class="tag">Such a rare bird was it that experts flew in to see it.</span></div>
        <b>Энгийнээс эргүүлэг рүү:</b>
        <div style="margin:12px 0"><span class="tag">The damage was so great that… → SO GREAT WAS the damage that…</span></div>
        <b>Санамж:</b> <span class="tag">so + тэмдэг/дайвар · such + нэр үг · эргүүлэгт туслах үйл ЭМНЭ гишүүнээ гарна</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        fauna /ˈfɔːnə/ — амьтны аймаг · species /ˈspiːʃiːz/ — зүйл · predator /ˈpredətər/ — махчин<br>
        prey /preɪ/ — идэш · migration /maɪˈɡreɪʃn/ — нүүдэл · mammal /ˈmæml/ — хөхтөн<br>
        reptile /ˈreptaɪl/ — мөлхөгч · amphibian /æmˈfɪbiən/ — хоёр нутагтан · breeding /ˈbriːdɪŋ/ — үржил<br>
        poaching /ˈpoʊtʃɪŋ/ — хууль бус ан · herd /hɜːrd/ — сүрэг · nocturnal /nɒkˈtɜːrnl/ — шөнийн<br>
        camouflage /ˈkæməflɑːʒ/ — халхлалт · food chain /ˈfuːd tʃeɪn/ — хүнсний хэлхээ · habitat loss /ˈhæbɪtæt lɔːs/ — орчны алдагдал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Эргүүлэгт туслах үйлээ мартах: «So rapid the decline was» ✗ → <b>So rapid WAS the decline</b> ✓. «so» ба «such» андуурах: <b>such + нэр үг</b>, <b>so + тэмдэг нэр</b>. «that» гэдэг үр дүнг холбоно.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «SO/SUCH урагшаа — туслах үйл гишүүнээ түрүүлж — THAT үр дүн». So + шинж, such + юм.</p>`
    },
    phrases:[
      {en:"So rapid was the decline that whole herds vanished within a year.", pron:"соу рэпид воз зэ диклайн зэт хоул хөрдз вэништ визин э йир.", mn:"Уналт ийм хурдан байсан тул бүхэл сүргүүд жилийн дотор устсан."},
      {en:"Such was the scale of poaching that the species nearly died out.", pron:"сач воз зэ скэйл ов поучинг зэт зэ спийшийз ниэрли дайд аут.", mn:"Хууль бус ангийн цар хүрээ ийм их байсан тул тэр зүйл бараг устсан."},
      {en:"So fragile is this ecosystem that a single change can upset it.", pron:"соу фрэжайл из зис икосистэм зэт э сингл чэйнж кэн апсэт ит.", mn:"Энэ экосистем ийм эмзэг тул ганц өөрчлөлт л түүнийг замбараагүй болгож чадна."},
      {en:"Such a rare bird was it that experts flew in from abroad.", pron:"сач э рэр бөрд воз ит зэт экспэртс флю ин фром эброуд.", mn:"Энэ шувуу ийм ховор байсан тул мэргэжилтнүүд гадаадаас нисч ирсэн."},
      {en:"So well camouflaged is the predator that prey rarely sees it coming.", pron:"соу вэл кэмэфлажд из зэ прэдэтэр зэт прэй рэрли сийз ит каминг.", mn:"Тэр махчин ийм сайн халхлагдсан тул идэш нь түүнийг ирэхийг ховор л хардаг."}
    ],
    exercises:[
      {q:"Эргүүлэг (so + шинж):", parts:["So rapid ", " the decline that herds vanished."], opts:["was","it was"], a:0, fix:"Эргүүлэгт туслах үйл гишүүнээ түрүүлнэ → WAS the decline."},
      {q:"so vs such:", parts:["", " was the scale of poaching that it nearly died out."], opts:["Such","So"], a:0, fix:"нэр үг (scale)-ийн өмнө → SUCH."},
      {q:"so + тэмдэг:", parts:["So ", " is the ecosystem that one change upsets it."], opts:["fragile","fragility"], a:0, fix:"so + тэмдэг НЭР → fragile."},
      {q:"Үр дүн холбогч:", parts:["So great was the damage ", " whole forests burned."], opts:["that","what"], a:0, fix:"Үр дүн → THAT."}
    ],
    speak:{ scene:'Зүйлийн уналтыг тайлбарлах', turns:[
      {ruby:"How quickly did that antelope population fall?", pron:"хау куикли дид зэт энтэлоуп попюлэйшн фол?", mn:"Тэр гөрөөсний тоо толгой хэр хурдан буурсан бэ?",
        choices:[{t:"So rapid was the decline that entire herds disappeared in months.",best:true,mn:"Уналт ийм хурдан байсан тул бүхэл сүргүүд хэдхэн сард алга болсон."},{t:"So rapid the decline was that entire herds disappeared in months.",best:false,fix:"Эргүүлэгт туслах үйл түрүүлнэ → So rapid WAS the decline that…"}]},
      {ruby:"What drove it to the edge of extinction?", pron:"вот дроув ит ту зэ эж ов икстинкшн?", mn:"Юу түүнийг устлын ирмэг рүү хөтөлсөн бэ?",
        choices:[{t:"Such was the scale of poaching that the species almost died out.",best:true,mn:"Хууль бус ангийн цар хэмжээ ийм их байсан тул тэр зүйл бараг устсан."},{t:"So was the scale of poaching that the species almost died out.",best:false,fix:"нэр үг (scale)-ийн өмнө SUCH, «so» биш."}]},
      {ruby:"Is the surviving group stable now?", pron:"из зэ сөрвайвинг груп стэйбл нау?", mn:"Амьд үлдсэн бүлэг одоо тогтвортой юу?",
        choices:[{t:"Barely — so fragile is the herd that any disturbance threatens it.",best:true,mn:"Бараг үгүй — сүрэг ийм эмзэг тул аливаа саад учруулалт түүнд заналхийлдэг."},{t:"Barely — so fragile the herd is that any disturbance threatens it.",best:false,fix:"So fragile IS the herd (туслах үйл эргэнэ)."}]}
    ]}
  },
  {
    id:'b2m3l9', title:"3.9 Ногоон эдийн засаг", level:"B2 · М3",
    blurb:"Owing to weak rules, emissions rose; consequently… — шалтгаан-үр дагаврын холбоос ⭐⭐",
    rule:{
      h:"Нарийвчилсан шалтгаан-үр дагавар: owing to / due to / as a result of / consequently / thereby",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Шалтгаан ба үр дагаврыг <b>албан ёсны холбоос үгсээр</b> уян хатан илэрхийлэх.<br><br>
        <b>owing to / due to / as a result of + НЭР ҮГ (шалтгаан):</b>
        <div style="margin:12px 0"><span class="tag">OWING TO weak regulation, emissions kept rising.</span><span class="tag">AS A RESULT OF the subsidy, solar spread fast.</span></div>
        <b>consequently / as a result / therefore = үр дүнд нь (шинэ өгүүлбэр эхлүүлнэ):</b>
        <div style="margin:12px 0"><span class="tag">Fuel was cheap; CONSEQUENTLY, demand soared.</span><span class="tag">Rules tightened; therefore, firms adapted.</span></div>
        <b>thereby + V-ing = ингэснээр (нэг үйлдлийн шууд үр дагаврыг залгана):</b>
        <div style="margin:12px 0"><span class="tag">They switched to wind, THEREBY cutting their footprint.</span></div>
        <b>Ялгаа:</b> <span class="tag">owing to + нэр (шалтгаан) · consequently (үр дүнд) · thereby + -ing (ингэснээр)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        sustainability /səˌsteɪnəˈbɪləti/ — тогтвортой байдал · offset /ˈɔːfset/ — нөхөн саармагжуулах · footprint /ˈfʊtprɪnt/ — ул мөр<br>
        incentive /ɪnˈsentɪv/ — урамшуулал · subsidy /ˈsʌbsədi/ — татаас · investment /ɪnˈvestmənt/ — хөрөнгө оруулалт<br>
        regulation /ˌreɡjuˈleɪʃn/ — зохицуулалт · taxation /tækˈseɪʃn/ — татварын бодлого · transition /trænˈzɪʃn/ — шилжилт<br>
        stakeholder /ˈsteɪkhoʊldər/ — оролцогч тал · compliance /kəmˈplaɪəns/ — нийцэл, дагаж мөрдөлт · circular /ˈsɜːrkjələr/ — тойрог (эдийн засаг)<br>
        decarbonize /diːˈkɑːrbənaɪz/ — нүүрстөрөгчгүйжүүлэх · greenwashing /ˈɡriːnwɒʃɪŋ/ — ногоон хуурмаг сурталчилгаа · mitigation /ˌmɪtɪˈɡeɪʃn/ — сааруулалт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Owing to it rained» ✗ — owing to/due to дараа <b>нэр үг</b> (owing to the RAIN) ✓. «Consequently of…» ✗ → consequently ганцаараа зогсоно. «thereby reduce» ✗ → <b>thereby reducING</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Шалтгаан = <b>owing to + НЭР</b>; Үр дүн = <b>consequently</b> (шинэ өгүүлбэр); Дам үр дүн = <b>thereby + ING</b>.</p>`
    },
    phrases:[
      {en:"Owing to weak regulation, emissions kept climbing for years.", pron:"оуинг ту вийк рэгюлэйшн, имишнз кэпт клаймбинг фор йирз.", mn:"Сул зохицуулалтаас болж ялгаруулалт олон жил өссөөр байсан."},
      {en:"As a result of the new subsidy, solar power spread quickly.", pron:"эз э ризалт ов зэ ню сабсиди, соулэр пауэр спрэд куикли.", mn:"Шинэ татаасын үр дүнд нарны эрчим хүч хурдан тархсан."},
      {en:"Fuel prices fell; consequently, consumption rose sharply.", pron:"фюэл прайсиз фэл; консиквэнтли, кэнсампшн роуз шарпли.", mn:"Түлшний үнэ буурсан; улмаар хэрэглээ огцом өссөн."},
      {en:"They switched their fleet to electric, thereby cutting emissions.", pron:"зэй свичт зэйр флийт ту илэктрик, зэрбай каттинг имишнз.", mn:"Тэд тээврийн паркаа цахилгаанд шилжүүлж, ингэснээр ялгаруулалтаа бууруулсан."},
      {en:"Due to strict compliance rules, firms finally began to decarbonize.", pron:"дью ту стрикт кэмплайэнс рулз, фөрмз файнэли бигэн ту дийкарбэнайз.", mn:"Хатуу дагаж мөрдөх дүрмээс болж компаниуд эцэст нь нүүрстөрөгчгүйжиж эхэлсэн."}
    ],
    exercises:[
      {q:"Шалтгаан (+ нэр):", parts:["", " weak rules, emissions rose."], opts:["Owing to","Owing that"], a:0, fix:"owing to + НЭР ҮГ → Owing to weak rules."},
      {q:"Үр дүн (шинэ өгүүлбэр):", parts:["Fuel was cheap; ", ", demand soared."], opts:["consequently","owing to"], a:0, fix:"Үр дүнд нь → consequently."},
      {q:"Дам үр дүн:", parts:["They went solar, thereby ", " their footprint."], opts:["cutting","cut"], a:0, fix:"thereby + -ing → cutting."},
      {q:"Шалтгаан холбоос:", parts:["As a result ", " the subsidy, prices dropped."], opts:["of","from"], a:0, fix:"as a result OF + нэр."}
    ],
    speak:{ scene:'Ногоон бодлого шинжлэх', turns:[
      {ruby:"Why did emissions keep rising for so long?", pron:"вай дид имишнз кийп райзинг фор соу лонг?", mn:"Яагаад ялгаруулалт ийм удаан өссөөр байсан бэ?",
        choices:[{t:"Owing to weak regulation, companies had little reason to change.",best:true,mn:"Сул зохицуулалтаас болж компаниудад өөрчлөгдөх шалтгаан бараг байгаагүй."},{t:"Owing to regulation was weak, companies had little reason to change.",best:false,fix:"owing to + НЭР → owing to weak regulation (өгүүлбэр залгаж болохгүй)."}]},
      {ruby:"What finally turned things around?", pron:"вот файнэли төрнд сингз эраунд?", mn:"Эцэст нь юу байдлыг эргүүлсэн бэ?",
        choices:[{t:"A generous subsidy; consequently, firms rushed to invest in solar.",best:true,mn:"Өгөөмөр татаас; улмаар компаниуд нарны эрчим хүчинд яаран хөрөнгө оруулсан."},{t:"A generous subsidy; consequently of that, firms rushed to invest in solar.",best:false,fix:"«consequently» ганцаараа зогсоно — «consequently of» ✗."}]},
      {ruby:"Did the biggest polluter actually clean up?", pron:"дид зэ бигэст пэлютэр экчуэли клийн ап?", mn:"Хамгийн их бохирдуулагч үнэхээр цэвэрлэсэн үү?",
        choices:[{t:"Yes — they electrified their fleet, thereby slashing their footprint.",best:true,mn:"Тийм — тэд тээврээ цахилгаанжуулж, ингэснээр ул мөрөө эрс багасгасан."},{t:"Yes — they electrified their fleet, thereby slash their footprint.",best:false,fix:"thereby + -ing → slashING."}]}
    ]}
  },
  {
    id:'b2m3l10', title:"3.10 Модулийн төсөл", level:"B2 · М3",
    blurb:"🏆 Байгаль орчны асуудлаар маргаан-эссэ бичих",
    rule:{
      h:"Давтлага: B2 Модуль 3-ын бүх дүрэм нэг эссэд",
      html:`<b>🎯 Зорилго:</b> Модуль 3-ын бүх бүтцийг нэгтгэн, жинхэнэ B2 түвшний <b>маргаан-эссэ</b> (argument essay) бичих.<br><br>
        <b>Модуль 3-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">Temperatures ARE BOUND TO rise ⭐⭐⭐</span><span class="tag">We OUGHT TO HAVE acted sooner ⭐⭐⭐</span><span class="tag">By 2050 we'll HAVE BEEN cutting emissions for decades ⭐⭐⭐</span><span class="tag">The grid NEEDS UPGRADING ⭐⭐</span><span class="tag">We HAD panels INSTALLED; I've WATCHED them WORKING ⭐⭐⭐</span><span class="tag">NEITHER OF the plans is enough ⭐⭐</span><span class="tag">The MORE we delay, the WORSE it gets ⭐⭐⭐</span><span class="tag">SO GREAT is the risk THAT we must act ⭐⭐⭐</span><span class="tag">OWING TO inaction… CONSEQUENTLY… ⭐⭐</span></div>
        <b>Эссэний бүтэц:</b> <span class="tag">Оршил (байр суурь) → Нотолгоо 1 → Нотолгоо 2 → Эсрэг санаа + няцаалт → Дүгнэлт</span>
        <p style="margin-top:12px"><b>🏆 Төсөл — Байгаль орчны маргаан-эссэ (загвар B2 догол мөр):</b><br>
        <i>The climate crisis is no longer a distant threat; owing to decades of inaction, its effects are already bound to intensify. We ought to have listened to scientists far sooner, yet neither of the two main excuses — cost and convenience — holds up any longer. Consider energy: when our town had solar panels installed on public buildings, bills fell within months, and I have watched those systems generating power ever since. The more we invest now, the less we will pay later. So great is the danger of delay that hesitation itself has become the real risk. Critics argue that renewables are unreliable, but the grid simply needs upgrading, not abandoning. By the time today's children are adults, we will have been transitioning to clean energy for a generation — thereby leaving them a habitat worth inheriting. Consequently, the choice is clear: act decisively, or accept a future we should never have allowed.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 маргааны 4 давхар: <b>Байр суурь</b> (are bound to) → <b>Нотолгоо</b> (had installed, the more…the less) → <b>Эсрэг санаа няцаах</b> (Critics argue…, but…needs upgrading) → <b>Ирээдүйн дүгнэлт</b> (will have been transitioning, consequently).</p>`
    },
    phrases:[
      {en:"Owing to decades of inaction, the effects are bound to intensify.", pron:"оуинг ту дэкэйдз ов инэкшн, зэ ифэктс а баунд ту интэнсифай.", mn:"Хэдэн арван жилийн идэвхгүй байдлаас болж үр нөлөө нь гарцаагүй эрчимжинэ."},
      {en:"We ought to have listened to the scientists far sooner.", pron:"ви от ту хэв лиснд ту зэ сайэнтистс фар сүнэр.", mn:"Бид эрдэмтдийг хамаагүй эрт сонсох ёстой байсан."},
      {en:"So great is the danger of delay that hesitation is the real risk.", pron:"соу грэйт из зэ дэйнжэр ов дилэй зэт хэзитэйшн из зэ риэл риск.", mn:"Хойшлуулах аюул ийм их тул эргэлзээ өөрөө жинхэнэ эрсдэл болжээ."},
      {en:"The more we invest now, the less we will pay later.", pron:"зэ мор ви инвэст нау, зэ лэс ви вил пэй лэйтэр.", mn:"Одоо хэдий их хөрөнгө оруулна, дараа нь төдий бага төлнө."},
      {en:"By 2050, we will have been transitioning to clean energy for decades.", pron:"бай твэнти фифти, ви вил хэв бийн трэнзишэнинг ту клийн энэрж фор дэкэйдз.", mn:"2050 он гэхэд бид цэвэр эрчим хүчинд хэдэн арван жил шилжсээр байх болно."}
    ],
    exercises:[
      {q:"Давтлага (тодорхой байдал):", parts:["Without action, temperatures ", " to rise."], opts:["are bound","are supposed"], a:0, fix:"Гарцаагүй → are BOUND to."},
      {q:"Давтлага (өнгөрсний модаль):", parts:["We ", " to the scientists sooner."], opts:["ought to have listened","ought to listen"], a:0, fix:"Ёстой байсан ч үгүй → ought to HAVE listened."},
      {q:"Давтлага (хос the):", parts:["The more we delay, ", " the crisis becomes."], opts:["the worse","worse"], a:0, fix:"Хос THE → the worse."},
      {q:"Давтлага (эргүүлэг):", parts:["So great ", " the risk that we must act now."], opts:["is","it is"], a:0, fix:"Эргүүлэгт туслах үйл түрүүлнэ → IS the risk."}
    ],
    speak:{ scene:'🏆 Төсөл: Байгаль орчны маргаан', turns:[
      {ruby:"Why should we act on climate change right now?", pron:"вай шүд ви экт он клаймэт чэйнж райт нау?", mn:"Яагаад бид уур амьсгалын өөрчлөлтийн эсрэг яг одоо арга хэмжээ авах ёстой вэ?",
        choices:[{t:"Owing to years of delay, the impacts are bound to worsen, and so great is the risk that waiting is no longer an option.",best:true,mn:"Олон жилийн саатлаас болж нөлөө нь гарцаагүй хүндэрнэ, эрсдэл нь ийм их тул хүлээх нь боломж биш болжээ."},{t:"Owing to years delay, the impacts are supposed to worsen, and so great the risk is that waiting is fine.",best:false,fix:"owing to years OF delay; are BOUND to worsen; So great IS the risk. Хэд хэдэн алдаа."}]},
      {ruby:"But aren't renewables too unreliable to depend on?", pron:"бат арнт ринюэблз ту анрилайэбл ту дипэнд он?", mn:"Гэхдээ сэргээгдэх эрчим хүч найдаж болохооргүй тогтворгүй биш үү?",
        choices:[{t:"That's the old excuse — the grid simply needs upgrading, and I've watched our own panels generating power for years.",best:true,mn:"Энэ бол хуучин шалтаг — сүлжээ зүгээр л шинэчлэгдэх хэрэгтэй, би өөрсдийн хавтан хэдэн жил эрчим хүч үйлдвэрлэж байхыг харсан."},{t:"That's the old excuse — the grid simply needs to upgrade, and I've watched our own panels to generate power for years.",best:false,fix:"needs UPGRADING (идэвхгүй -ing); watched panels GENERATING (мэдрэхүйн үйлд «to» ✗)."}]},
      {ruby:"So what's your final message to decision-makers?", pron:"соу вотс ёр файнл мэсэж ту дисижн-мэйкэрз?", mn:"Тэгвэл шийдвэр гаргагчдад хандсан таны эцсийн үг юу вэ?",
        choices:[{t:"The more boldly we invest now, the less we'll suffer later; by 2050 we'll have been building a cleaner world for a generation.",best:true,mn:"Одоо хэдий зоригтой хөрөнгө оруулна, дараа нь төдий бага зовно; 2050 он гэхэд бид цэвэр ертөнцийг нэг үеийн турш бүтээсээр байх болно."},{t:"More boldly we invest now, less we'll suffer later; by 2050 we'll build a cleaner world.",best:false,fix:"Хос «THE»: THE MORE…, THE LESS…; үргэлжлэх хугацаа → we'll HAVE BEEN BUILDING."}]}
    ]}
  },
  {
    id:'b2m4l1', title:"4.1 Урлаг", level:"B2 · М4",
    blurb:"The extent to which art shapes us — Advanced relative clauses ⭐⭐⭐",
    rule:{
      h:"Урлаг ба дүрэм: Угтвар + холбоос үг (preposition + relative)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн албан ёсны бичгийн загвар — <b>угтвар үгийг холбоос үгийн урд тавьж</b> нарийн санаа илэрхийлэх.<br><br>
        <b>preposition + which / whom:</b>
        <div style="margin:12px 0"><span class="tag">The exhibition, TO WHICH thousands flocked, closed early.</span><span class="tag">The artists, MOST OF WHOM were self-taught, sold every piece.</span></div>
        <b>«the extent TO WHICH» — хэр зэрэг:</b>
        <div style="margin:12px 0"><span class="tag">The extent TO WHICH art reflects society is debated.</span><span class="tag">The degree TO WHICH he influenced others is remarkable.</span></div>
        <b>«in which case» — тэр тохиолдолд:</b>
        <div style="margin:12px 0"><span class="tag">The gallery may close, IN WHICH CASE we'll refund tickets.</span><span class="tag">quantifier + of + whom/which: many of whom · none of which · both of which</span></div>
        <b>Албан бус ↔ албан ёсны:</b>
        <div style="margin:12px 0"><span class="tag">The curator I spoke to. (яриа)</span><span class="tag">The curator to whom I spoke. (бичиг)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        aesthetic /esˈθetɪk/ — гоо зүйн · craftsmanship /ˈkræftsmənʃɪp/ — урлан бүтээх ур · masterpiece /ˈmæstərpiːs/ — шилдэг бүтээл<br>
        curator /kjʊˈreɪtər/ — тэргүүлэх урч · patron /ˈpeɪtrən/ — ивээн тэтгэгч · connoisseur /ˌkɒnəˈsɜːr/ — мэдлэгт үзэгч<br>
        avant-garde /ˌævɒnˈɡɑːrd/ — шинэлэг урсгал · movement /ˈmuːvmənt/ — урсгал · genre /ˈʒɒnrə/ — төрөл зүйл<br>
        acclaim /əˈkleɪm/ — өндөр үнэлгээ · commission /kəˈmɪʃn/ — захиалж бүтээлгэх · provoke /prəˈvoʊk/ — сэдэлж хөдөлгөх<br>
        profound /prəˈfaʊnd/ — гүн гүнзгий · timeless /ˈtaɪmləs/ — цаг хугацаанд захирагдашгүй · evocative /ɪˈvɒkətɪv/ — сэтгэл хөдөлгөм</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «most of who» ✗ → угтварын дараа <b>most of WHOM</b> ✓. Мөн «the extent which» ✗ → <b>the extent TO WHICH</b> ✓. «that» угтварын дараа хэзээ ч ирэхгүй: «to that» ✗.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Угтвар түрүүлбэл WHOM/WHICH дагадаг — THAT биш» — албан ёсны загвар.</p>`
    },
    phrases:[
      {en:"The extent to which art influences politics is often underestimated.", pron:"зэ икстэнт ту вич арт инфлюэнсэз политикс из офн андэрэстимэйтид.", mn:"Урлаг улс төрд хэр зэрэг нөлөөлдгийг ихэвчлэн дутуу үнэлдэг."},
      {en:"The painters, most of whom trained in Paris, formed a new movement.", pron:"зэ пэйнтэрз, моуст ов хүм трэйнд ин Пэрис, формд э ню мувмэнт.", mn:"Ихэнх нь Парист суралцсан тэдгээр зураачид шинэ урсгал үүсгэсэн."},
      {en:"It was a masterpiece to which critics returned again and again.", pron:"ит воз э мастэрпийс ту вич критикс ритөрнд эгэйн энд эгэйн.", mn:"Энэ бол шүүмжлэгчид эргэн эргэн хандах шилдэг бүтээл байлаа."},
      {en:"The gallery might extend the show, in which case tickets stay valid.", pron:"зэ гэлэри майт икстэнд зэ шоу, ин вич кэйс тикитс стэй вэлид.", mn:"Галерей үзэсгэлэнгээ сунгаж магадгүй, тэр тохиолдолд билет хүчинтэй хэвээр байна."},
      {en:"His work has a profound quality the meaning of which few fully grasp.", pron:"хиз вөрк хэз э профаунд куолити зэ минин ов вич фью фүли грасп.", mn:"Утгыг нь цөөхөн хүн бүрэн ойлгодог гүн гүнзгий чанар түүний бүтээлд бий."}
    ],
    exercises:[
      {q:"угтвар + холбоос:", parts:["The artists, most of ", " were unknown, are now famous."], opts:["whom","who"], a:0, fix:"«of» угтварын дараа → whom."},
      {q:"the extent ...:", parts:["The extent ", " art shapes us is debated."], opts:["to which","which"], a:0, fix:"the extent TO WHICH — тогтсон бүтэц."},
      {q:"in which case:", parts:["It may sell out, ", " we'll add a date."], opts:["in which case","in that case"], a:0, fix:"холбоос дотор → in which case."},
      {q:"албан ёсны:", parts:["The curator to ", " I wrote replied."], opts:["whom","that"], a:0, fix:"угтварын дараа that ✗ → whom ✓."}
    ],
    speak:{ scene:'Урлагийн үзэсгэлэн дээр', turns:[
      {ruby:"What did you make of the new exhibition?", pron:"вот дид ю мэйк ов зэ ню эксибишн?", mn:"Шинэ үзэсгэлэнг юу гэж бодов?",
        choices:[{t:"Impressive. The artists, most of whom are under thirty, are remarkably bold.",best:true,mn:"Гайхалтай. Ихэнх нь гучаас доош настай тэр зураачид гайхмаар зоригтой."},{t:"Impressive. The artists, most of who are young, are bold.",best:false,fix:"of WHO ✗ → most of WHOM."}]},
      {ruby:"Do you think art really changes society?", pron:"ду ю синк арт риэли чэйнжэз сэсайэти?", mn:"Урлаг нийгмийг үнэхээр өөрчилдөг гэж боддог уу?",
        choices:[{t:"The extent to which it does is hard to measure, but its influence is real.",best:true,mn:"Хэр зэрэг өөрчилдгийг хэмжихэд бэрх ч нөлөө нь бодит."},{t:"The extent which it does is hard to measure.",best:false,fix:"the extent WHICH ✗ → the extent TO WHICH."}]},
      {ruby:"The talk might be cancelled, I heard.", pron:"зэ ток майт би кэнслд, ай хөрд.", mn:"Лекц цуцлагдаж магадгүй гэж сонслоо.",
        choices:[{t:"In which case they'll reschedule it for next week, apparently.",best:true,mn:"Тэр тохиолдолд ирэх долоо хоногт шилжүүлнэ гэнэ лээ."},{t:"In this case they'll reschedule, apparently.",best:false,fix:"холбоос дотор → IN WHICH CASE."}]}
    ]}
  },
  {
    id:'b2m4l2', title:"4.2 Уран зураг", level:"B2 · М4",
    blurb:"The woman standing there / the issues raised — Reduced relatives ⭐⭐",
    rule:{
      h:"Уран зураг ба дүрэм: Богиносгосон холбоос ба причасти тодотгол",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «who/which is» гэдгийг хасаж, <b>причасти (-ing / V3)-ээр нэр үгийг ард нь тодотгох</b>.<br><br>
        <b>Идэвхтэй → -ing (who is doing):</b>
        <div style="margin:12px 0"><span class="tag">The woman WHO IS STANDING by the door → the woman STANDING by the door.</span><span class="tag">the paintings HANGING in the hall</span></div>
        <b>Идэвхгүй → V3 (which was done):</b>
        <div style="margin:12px 0"><span class="tag">the issues WHICH WERE RAISED → the issues RAISED at the meeting.</span><span class="tag">a portrait PAINTED in 1890</span></div>
        <b>Утгын ялгаа — идэвхтэй ↔ идэвхгүй:</b>
        <div style="margin:12px 0"><span class="tag">the artist EXHIBITING (тэр өөрөө үзүүлж буй)</span><span class="tag">the work EXHIBITED (уг бүтээлийг үзүүлсэн)</span></div>
        <b>Албан ёсны бичигт маш түгээмэл:</b>
        <div style="margin:12px 0"><span class="tag">Anyone WISHING to attend must register.</span><span class="tag">The points MADE earlier still stand.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        canvas /ˈkænvəs/ — зотон · brushstroke /ˈbrʌʃstroʊk/ — бийрийн зурвас · portrait /ˈpɔːtrət/ — хөрөг<br>
        landscape /ˈlændskeɪp/ — байгалийн зураг · still life /ˌstɪl ˈlaɪf/ — амьгүй байгаль · hue /hjuː/ — өнгө аяс<br>
        shade /ʃeɪd/ — сүүдэр өнгө · texture /ˈtekstʃər/ — гадаргуугийн бүтэц · composition /ˌkɒmpəˈzɪʃn/ — зохиомж<br>
        depict /dɪˈpɪkt/ — дүрслэх · render /ˈrendər/ — буулгах · foreground /ˈfɔːɡraʊnd/ — тэргүүн талбар<br>
        perspective /pərˈspektɪv/ — орон зайн харагдац · vivid /ˈvɪvɪd/ — тод амьд · muted /ˈmjuːtɪd/ — бүдэгдүү</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «the man stood there» (тодотгол гэсэн санаагаар) ✗ → идэвхтэй бол <b>the man STANDING there</b> ✓. Идэвхгүйг -ing болгож болохгүй: «the issues raising» ✗ → <b>the issues RAISED</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тэр өөрөө хийж байвал -ING, түүнд хийгдсэн бол V3».</p>`
    },
    phrases:[
      {en:"The woman standing by the canvas is the artist herself.", pron:"зэ вумэн стэндин бай зэ кэнвэс из зи артист хөрсэлф.", mn:"Зотонгийн дэргэд зогсож буй эмэгтэй бол зураач өөрөө."},
      {en:"The issues raised by the critics were largely ignored.", pron:"зи ишюз рэйзд бай зэ критикс вөр ларжли игноорд.", mn:"Шүүмжлэгчдийн хөндсөн асуудлыг ихэвчлэн үл ойшоосон."},
      {en:"The paintings hanging in the main hall date from the 1800s.", pron:"зэ пэйнтингз хэнгин ин зэ мэйн хол дэйт фром зэ эйтин хандрэдз.", mn:"Гол танхимд өлгөөстэй зургууд 1800-аад оных."},
      {en:"A portrait painted in muted tones drew the most attention.", pron:"э портрэт пэйнтид ин мьютид тоунз дрю зэ моуст этэншн.", mn:"Бүдэгдүү өнгөөр зурсан хөрөг хамгийн их анхаарал татсан."},
      {en:"Anyone wishing to sketch the sculptures needs permission.", pron:"эниван вишин ту скэч зэ скалпчэрз нийдз пөрмишн.", mn:"Баримлыг зурахыг хүссэн хэн боловч зөвшөөрөл авах хэрэгтэй."}
    ],
    exercises:[
      {q:"идэвхтэй → -ing:", parts:["The woman ", " by the door is the curator."], opts:["standing","stood"], a:0, fix:"тэр өөрөө зогсож буй → standing."},
      {q:"идэвхгүй → V3:", parts:["The points ", " earlier still stand."], opts:["made","making"], a:0, fix:"түүнд хийгдсэн → made."},
      {q:"аль тодотгол:", parts:["The paintings ", " in that gallery are for sale."], opts:["displayed","displaying"], a:0, fix:"тэдгээрийг үзүүлсэн → displayed."},
      {q:"албан бичиг:", parts:["Anyone ", " to enter must show a ticket."], opts:["wishing","wished"], a:0, fix:"тэр хүссэн → wishing."}
    ],
    speak:{ scene:'Уран зургийн музейд', turns:[
      {ruby:"Which piece caught your eye?", pron:"вич пийс кот ёр ай?", mn:"Аль бүтээл нүд булаав?",
        choices:[{t:"The landscape hanging near the window, rendered in such vivid hues.",best:true,mn:"Цонхны дэргэд өлгөөстэй, тийм тод өнгөөр буулгасан байгалийн зураг."},{t:"The landscape hung near the window, rendering in vivid hues.",best:false,fix:"the landscape HANGING; RENDERED in vivid hues."}]},
      {ruby:"Do you agree with the critics?", pron:"ду ю эгрий виз зэ критикс?", mn:"Шүүмжлэгчидтэй санал нийлэх үү?",
        choices:[{t:"The issues raised in their review are fair, but a bit harsh.",best:true,mn:"Тэдний шүүмжид хөндсөн асуудал шударга ч жаахан хатуу."},{t:"The issues raising in their review are fair.",best:false,fix:"idевхгүй → the issues RAISED."}]},
      {ruby:"Can visitors photograph the works?", pron:"кэн визитэрз фотограф зэ вөркс?", mn:"Зочид бүтээлийг зурагт авч болох уу?",
        choices:[{t:"Anyone wishing to take photos must ask the staff first.",best:true,mn:"Зураг авахыг хүссэн хэн боловч эхлээд ажилтнаас асуух ёстой."},{t:"Anyone wished to take photos must ask first.",best:false,fix:"idевхтэй санаа → anyone WISHING."}]}
    ]}
  },
  {
    id:'b2m4l3', title:"4.3 Хөгжим", level:"B2 · М4",
    blurb:"All I want is to listen / It was jazz that saved me — Clefts ⭐⭐⭐",
    rule:{
      h:"Хөгжим ба дүрэм: Cleft — санааг онцлох хуваасан өгүүлбэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Нэг санааг <b>урд тавьж онцлохын тулд өгүүлбэрийг хуваах</b> хэд хэдэн загвар.<br><br>
        <b>«It + be + X + that/who...» (It-cleft):</b>
        <div style="margin:12px 0"><span class="tag">IT WAS jazz THAT changed my life. (өөр юм биш — жааз)</span><span class="tag">IT WAS she WHO wrote the melody.</span></div>
        <b>«What/All + ... + is» (Wh-cleft):</b>
        <div style="margin:12px 0"><span class="tag">WHAT I love IS the rhythm.</span><span class="tag">ALL I want IS to listen in peace.</span></div>
        <b>«The only thing that... / The reason (why)...»:</b>
        <div style="margin:12px 0"><span class="tag">THE ONLY THING THAT matters is the melody.</span><span class="tag">THE REASON (WHY) I sing is joy.</span></div>
        <b>Онцлохыг харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">She sings jazz. (энгийн)</span><span class="tag">It's jazz THAT she sings. (жаазыг нь онцлов)</span><span class="tag">What she sings is jazz. (юу дуулдгийг онцлов)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        melody /ˈmelədi/ — аялгуу · rhythm /ˈrɪðəm/ — хэмнэл · harmony /ˈhɑːrməni/ — эв аялгуу<br>
        tempo /ˈtempoʊ/ — хэмнэлийн хурд · lyrics /ˈlɪrɪks/ — дууны үг · composer /kəmˈpoʊzər/ — хөгжмийн зохиолч<br>
        orchestra /ˈɔːrkɪstrə/ — найрал хөгжим · conductor /kənˈdʌktər/ — удирдаач · improvise /ˈɪmprəvaɪz/ — тэр дороо зохиох<br>
        pitch /pɪtʃ/ — авианы өндөр · chord /kɔːrd/ — аккорд · verse /vɜːrs/ — бадаг<br>
        soulful /ˈsoʊlfl/ — сэтгэл шингэсэн · upbeat /ˌʌpˈbiːt/ — хөгжилтэй · haunting /ˈhɔːntɪŋ/ — сэтгэлд гүн үлдэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «What I want is listen» ✗ → үйл үг бол <b>What I want is TO listen</b> эсвэл <b>All I do is listen</b> (All-ийн дараа to хасагдана). «It was jazz which saved me» — хүн бол who, юм бол that/which; хүнд «It was he that/who» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Онцлох санаагаа It was ___ that... эсвэл What... is ___ гэж хайрцаглан гарга».</p>`
    },
    phrases:[
      {en:"It was a single melody that made me fall in love with music.", pron:"ит воз э сингл мэлэди зэт мэйд ми фол ин лав виз мьюзик.", mn:"Ганц аялгуу л намайг хөгжимд дурлуулсан юм."},
      {en:"What I admire most is the way she improvises on stage.", pron:"вот ай эдмайр моуст из зэ вэй ши импрэвайзиз он стэйж.", mn:"Хамгийн их биширдэг зүйл маань бол тайзан дээр тэр дороо зохиодог нь."},
      {en:"All I want is to hear that haunting chord one more time.", pron:"ол ай вонт из ту хийр зэт хонтин корд ван мор тайм.", mn:"Хүсэх бүхэн маань бол сэтгэлд гүн үлдэх тэр аккордыг дахин нэг сонсох."},
      {en:"The reason why this song moves me is its soulful lyrics.", pron:"зэ ризн вай зис сонг мувз ми из итс соулфул лирикс.", mn:"Энэ дуу намайг хөдөлгөх шалтгаан нь сэтгэл шингэсэн үг нь."},
      {en:"The only thing that matters to a composer is honesty.", pron:"зи оунли синг зэт мэтэрз ту э кампоузэр из онисти.", mn:"Хөгжмийн зохиолчид чухал ганц зүйл бол чин үнэнч байдал."}
    ],
    exercises:[
      {q:"It-cleft:", parts:["It ", " jazz that changed my whole outlook."], opts:["was","is were"], a:0, fix:"өнгөрсөн → It WAS jazz that..."},
      {q:"What-cleft + to:", parts:["What I really want is ", " in silence."], opts:["to listen","listen"], a:0, fix:"What... is + TO + үйл үг."},
      {q:"хүн → who:", parts:["It was she ", " wrote the melody."], opts:["who","which"], a:0, fix:"хүн → who (which ✗)."},
      {q:"the only thing:", parts:["The only thing that ", " is the rhythm."], opts:["matters","matter"], a:0, fix:"thing = ганц тоо → matters."}
    ],
    speak:{ scene:'Дуучинтай ярилцлага', turns:[
      {ruby:"What first drew you to music?", pron:"вот фөрст дрю ю ту мьюзик?", mn:"Хөгжимд юу таныг эхэлж татсан бэ?",
        choices:[{t:"It was my grandmother's singing that opened the whole world to me.",best:true,mn:"Эмээгийн маань дуулах л бүх ертөнцийг надад нээж өгсөн юм."},{t:"It was my grandmother's singing what opened the world.",best:false,fix:"It-cleft → that opened (what ✗)."}]},
      {ruby:"What do you value most in a performance?", pron:"вот ду ю вэлью моуст ин э пөрформэнс?", mn:"Тоглолтод юуг хамгийн их үнэлдэг вэ?",
        choices:[{t:"What I value most is honesty; all I want is to feel something real.",best:true,mn:"Хамгийн их үнэлдэг зүйл бол үнэнч байдал; хүсэх бүхэн маань бодит мэдрэмж."},{t:"What I value most is honesty; all I want is feel something.",best:false,fix:"all I WANT is TO feel (want-ийн дараа to)."}]},
      {ruby:"Why do sad songs appeal to you?", pron:"вай ду сэд сонгз эпийл ту ю?", mn:"Гунигт дуу яагаад таалагддаг вэ?",
        choices:[{t:"The reason why they move me is their soulful, haunting melodies.",best:true,mn:"Тэдгээр намайг хөдөлгөх шалтгаан нь сэтгэл шингэсэн, гүн үлдэх аялгуу."},{t:"The reason why they move me because of melodies.",best:false,fix:"The reason why... IS their melodies (because ✗ давхардана)."}]}
    ]}
  },
  {
    id:'b2m4l4', title:"4.4 Кино театр", level:"B2 · М4",
    blurb:"Little did we know / Only by watching... — Fronting & inversion ⭐⭐⭐",
    rule:{
      h:"Кино ба дүрэм: Урагшлуулах ба урвуулах (fronting & inversion)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Санаа онцлохын тулд <b>сөрөг/хязгаарласан үгийг эхэнд гаргаж, эзэн-үйлийг урвуулах</b>.<br><br>
        <b>Сөрөг adverb эхэнд → урвуу дараалал:</b>
        <div style="margin:12px 0"><span class="tag">LITTLE DID we know it would win an Oscar.</span><span class="tag">NEVER HAVE I seen such acting.</span><span class="tag">RARELY DOES a film move me so much.</span></div>
        <b>«Only by / Only after / Not until» + урвуу:</b>
        <div style="margin:12px 0"><span class="tag">ONLY BY rewatching it DID I understand the ending.</span><span class="tag">NOT UNTIL the credits DID she cry.</span></div>
        <b>«Such / So» урагшлуулах:</b>
        <div style="margin:12px 0"><span class="tag">SUCH WAS the tension THAT no one moved.</span><span class="tag">SO gripping WAS the plot that we forgot the time.</span></div>
        <b>Энгийн ↔ онцолсон:</b>
        <div style="margin:12px 0"><span class="tag">We had no idea it was a classic. (энгийн)</span><span class="tag">Little did we know it was a classic. (драмтай)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        plot /plɒt/ — өрнөл · screenplay /ˈskriːnpleɪ/ — зохиол · director /dəˈrektər/ — найруулагч<br>
        cinematography /ˌsɪnəməˈtɒɡrəfi/ — зураглал · protagonist /prəˈtæɡənɪst/ — гол дүр · antagonist /ænˈtæɡənɪst/ — сөрөг дүр<br>
        subplot /ˈsʌbplɒt/ — дэд өрнөл · twist /twɪst/ — гэнэтийн эргэлт · sequel /ˈsiːkwəl/ — үргэлжлэл<br>
        cast /kɑːst/ — жүжигчид · scene /siːn/ — үзэгдэл · dialogue /ˈdaɪəlɒɡ/ — харилцан яриа<br>
        gripping /ˈɡrɪpɪŋ/ — сэтгэл татам · compelling /kəmˈpelɪŋ/ — үнэмшилтэй · overrated /ˌoʊvəˈreɪtɪd/ — хэт үнэлэгдсэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Never I have seen» ✗ → сөрөг үгийн дараа туслах урагшлана: <b>Never HAVE I seen</b> ✓. «Only by watching I understood» ✗ → <b>Only by watching DID I understand</b> ✓. «Such was the tension so that» ✗ → зөвхөн <b>Such was ... that</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сөрөг/Only үг ЭХЭНД → асуултын дараалалтай адил урвуул».</p>`
    },
    phrases:[
      {en:"Little did we know the film would become a cult classic.", pron:"литл дид ви ноу зэ филм вүд бикам э калт клэсик.", mn:"Энэ кино шүтэн бишрэх сонгодог болно гэдгийг бид огт мэдээгүй."},
      {en:"Never have I seen such compelling cinematography.", pron:"нэвэр хэв ай сийн сач кэмпэлин синэматографи.", mn:"Ийм үнэмшилтэй зураглал би хэзээ ч үзээгүй."},
      {en:"Only by watching it twice did I catch the final twist.", pron:"оунли бай вочин ит твайс дид ай кэч зэ файнл твист.", mn:"Хоёр удаа үзэж байж л эцсийн эргэлтийг ойлгосон."},
      {en:"Such was the tension that no one in the cinema moved.", pron:"сач воз зэ тэншн зэт ноу ван ин зэ синэма мувд.", mn:"Хурцадмал байдал ийм байсан тул кинотеатрт хэн ч хөдлөөгүй."},
      {en:"Not until the credits rolled did the meaning become clear.", pron:"нот антил зэ крэдитс роулд дид зэ минин бикам клийр.", mn:"Титмүүд гарч байж л утга нь тодорхой болсон."}
    ],
    exercises:[
      {q:"Little did...:", parts:["Little did we ", " it was based on a true story."], opts:["know","knew"], a:0, fix:"урвуу: did + үндсэн хэлбэр → know."},
      {q:"Never have I...:", parts:["Never ", " I seen such a twist."], opts:["have","I have"], a:0, fix:"Never HAVE I seen — туслах урагшилна."},
      {q:"Only by...:", parts:["Only by rewatching ", " I understand it."], opts:["did","I"], a:0, fix:"Only by... DID I understand."},
      {q:"Such was...:", parts:["Such was the plot ", " no one spoke."], opts:["that","so that"], a:0, fix:"Such was... THAT (so that ✗)."}
    ],
    speak:{ scene:'Кино үзсэний дараа', turns:[
      {ruby:"Did you expect that ending?", pron:"дид ю икспэкт зэт эндин?", mn:"Тэр төгсгөлийг таамаглаж байсан уу?",
        choices:[{t:"Not at all. Little did I know the hero was the villain all along!",best:true,mn:"Огт үгүй. Баатар нь эхнээсээ л муу дүр байсныг би огт мэдээгүй!"},{t:"Not at all. Little I knew the hero was the villain!",best:false,fix:"Little DID I KNOW (урвуу)."}]},
      {ruby:"How was the cinematography?", pron:"хау воз зэ синэматографи?", mn:"Зураглал нь ямар байв?",
        choices:[{t:"Stunning. Never have I seen light used so beautifully in a film.",best:true,mn:"Гайхалтай. Ийм сайхан гэрэл ашигласан киног би хэзээ ч үзээгүй."},{t:"Stunning. Never I have seen light used so well.",best:false,fix:"Never HAVE I seen (туслах эхэнд)."}]},
      {ruby:"Did the plot make sense to you?", pron:"дид зэ плот мэйк сэнс ту ю?", mn:"Өрнөл нь ойлгомжтой байсан уу?",
        choices:[{t:"Only by watching it a second time did I grasp the whole subplot.",best:true,mn:"Хоёр дахь удаагаа үзэж байж л бүх дэд өрнөлийг ойлгосон."},{t:"Only by watching it again I grasped the subplot.",best:false,fix:"Only by... DID I grasp (урвуу)."}]}
    ]}
  },
  {
    id:'b2m4l5', title:"4.5 Уран зохиол", level:"B2 · М4",
    blurb:"The rise of the novel / a lack of clarity — Nominalisation ⭐⭐⭐",
    rule:{
      h:"Уран зохиол ба дүрэм: Нэршүүлэл ба эрдэм шинжилгээний хэв маяг",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Үйл үг/тэмдэг нэрийг <b>нэр үг болгож</b> нягт, албан ёсны эрдэм шинжилгээний өгүүлбэр бүтээх.<br><br>
        <b>Үйл → нэр:</b>
        <div style="margin:12px 0"><span class="tag">The novel FAILED. → The FAILURE of the novel...</span><span class="tag">Critics REACTED strongly. → The strong REACTION of critics...</span></div>
        <b>Тэмдэг → нэр:</b>
        <div style="margin:12px 0"><span class="tag">The plot was COMPLEX. → the COMPLEXITY of the plot</span><span class="tag">clear → the CLARITY / a lack of clarity</span></div>
        <b>Яриа ↔ Бичиг (нягтруулах):</b>
        <div style="margin:12px 0"><span class="tag">Яриа: Because the author died young, the book wasn't finished.</span><span class="tag">Бичиг: The author's early DEATH left the book unfinished.</span></div>
        <b>Хэрэгтэй бүтэц:</b>
        <div style="margin:12px 0"><span class="tag">the emergence of · the rise of · a lack of · the significance of · the extent of</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        narrative /ˈnærətɪv/ — өгүүлэмж · protagonist /prəˈtæɡənɪst/ — гол дүр · imagery /ˈɪmɪdʒri/ — дүрслэл<br>
        metaphor /ˈmetəfɔːr/ — зүйрлэл · symbolism /ˈsɪmbəlɪzəm/ — бэлгэдэл · theme /θiːm/ — гол санаа<br>
        prose /proʊz/ — үргэлжилсэн үг · verse /vɜːrs/ — шүлэглэсэн үг · genre /ˈʒɒnrə/ — төрөл зүйл<br>
        allusion /əˈluːʒn/ — далд иш татлага · irony /ˈaɪrəni/ — егөөдөл · foreshadowing /fɔːrˈʃædoʊɪŋ/ — урьдчилсан сануулга<br>
        protagonism /prəˈtæɡənɪzəm/ — тэргүүлэх байдал · ambiguity /ˌæmbɪˈɡjuːəti/ — олон утгатай байдал · subtlety /ˈsʌtlti/ — нарийн ажиглагдам чанар</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The complex of the plot» ✗ → тэмдэг нэрийг буруу нэршүүлэв: <b>the COMPLEXITY of the plot</b> ✓. Нэршүүлсэн үгийг ихэвчлэн <b>of</b>-той холбоно: «the rise the novel» ✗ → <b>the rise OF the novel</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Үйл/тэмдгийг нэр болгож, of-оор холбо → бичгийн хэл нягтарна».</p>`
    },
    phrases:[
      {en:"The rise of the novel reflected profound social change.", pron:"зэ райз ов зэ новл рифлэктид профаунд соушл чэйнж.", mn:"Романы хөгжил нь нийгмийн гүн гүнзгий өөрчлөлтийг тусгасан."},
      {en:"A lack of clarity in the narrative frustrated many readers.", pron:"э лэк ов клэрити ин зэ нэрэтив фрастрэйтид мэни рийдэрз.", mn:"Өгүүлэмжийн тодорхой бус байдал олон уншигчийг залхаасан."},
      {en:"The complexity of the symbolism rewards a second reading.", pron:"зэ кэмплэксити ов зэ симбэлизм ривордз э сэконд рийдин.", mn:"Бэлгэдлийн нарийн төвөгтэй байдал дахин уншихад үнэ цэнэтэй."},
      {en:"The author's early death left the trilogy unfinished.", pron:"зи отэрз өрли дэс лэфт зэ трайлэжи анфиништ.", mn:"Зохиолчийн эрт нас барсан явдал гурвалыг дуусаагүй үлдээсэн."},
      {en:"The significance of the metaphor becomes clear on reflection.", pron:"зэ сигнификэнс ов зэ мэтэфор бикамз клийр он рифлэкшн.", mn:"Зүйрлэлийн ач холбогдол эргэцүүлэхэд тодорхой болдог."}
    ],
    exercises:[
      {q:"үйл → нэр:", parts:["The ", " of the novel surprised critics."], opts:["failure","fail"], a:0, fix:"the + нэр → failure (of)."},
      {q:"тэмдэг → нэр:", parts:["the ", " of the plot"], opts:["complexity","complex"], a:0, fix:"complex → the COMPLEXITY."},
      {q:"of холбоос:", parts:["the rise ", " the modern novel"], opts:["of","for"], a:0, fix:"the rise OF ..."},
      {q:"нягт бичиг:", parts:["A ", " of clarity confused readers."], opts:["lack","lacking"], a:0, fix:"a lack OF clarity."}
    ],
    speak:{ scene:'Уран зохиолын семинар', turns:[
      {ruby:"How would you sum up the book's problem?", pron:"хау вүд ю сам ап зэ букс проблэм?", mn:"Номын гол дутагдлыг хэрхэн дүгнэх вэ?",
        choices:[{t:"Its main flaw is a lack of clarity in the central narrative.",best:true,mn:"Гол дутагдал нь гол өгүүлэмжийн тодорхой бус байдал."},{t:"Its main flaw is that the narrative not clear enough.",best:false,fix:"нягт бичиг → a LACK OF CLARITY in the narrative."}]},
      {ruby:"Why did the trilogy remain unfinished?", pron:"вай дид зэ трайлэжи римэйн анфиништ?", mn:"Гурвал яагаад дуусаагүй үлдсэн бэ?",
        choices:[{t:"The author's early death brought the project to a halt.",best:true,mn:"Зохиолчийн эрт нас барсан явдал төслийг зогсоосон."},{t:"Because the author died early, so the project stopped.",best:false,fix:"нэршүүл → The author's early DEATH brought it to a halt."}]},
      {ruby:"What makes this novel worth studying?", pron:"вот мэйкс зис новл вөрс стадин?", mn:"Энэ романыг судлах юугаараа үнэ цэнэтэй вэ?",
        choices:[{t:"The complexity of its symbolism and the subtlety of its irony.",best:true,mn:"Бэлгэдлийн нарийн төвөгтэй байдал, егөөдлийн нарийн чанар."},{t:"That its symbolism is complex and its irony is subtle to study.",best:false,fix:"нэршүүл → the COMPLEXITY... and the SUBTLETY..."}]}
    ]}
  },
  {
    id:'b2m4l6', title:"4.6 Бүжиг", level:"B2 · М4",
    blurb:"absolutely stunning vs fairly good — Gradable & non-gradable ⭐⭐",
    rule:{
      h:"Бүжиг ба дүрэм: Зэрэглэдэг ба зэрэглэдэггүй тэмдэг нэр + чангатгагч",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тэмдэг нэрийг зөв чангатгагчтай хослуулж, <b>«зэрэглэдэг» ба «зэрэглэдэггүй»</b> ялгаа мэдэх.<br><br>
        <b>Зэрэглэдэг (сул→хүчтэй) + very/quite/fairly/a bit:</b>
        <div style="margin:12px 0"><span class="tag">a VERY graceful dancer</span><span class="tag">FAIRLY good · QUITE tiring · A BIT stiff</span></div>
        <b>Зэрэглэдэггүй (аль хэдийн туйл) + absolutely/utterly/completely:</b>
        <div style="margin:12px 0"><span class="tag">ABSOLUTELY stunning · UTTERLY exhausted · COMPLETELY flawless</span><span class="tag">«very perfect» ✗ → absolutely perfect ✓</span></div>
        <b>«quite»-ийн 2 утга:</b>
        <div style="margin:12px 0"><span class="tag">quite good = дунд зэрэг сайн (зэрэглэдэг)</span><span class="tag">quite perfect = бүрэн төгс (зэрэглэдэггүй — «totally»)</span></div>
        <b>Хэлж болох хосууд:</b>
        <div style="margin:12px 0"><span class="tag">tired → exhausted · good → superb · cold → freezing · surprising → astonishing</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        choreography /ˌkɔːriˈɒɡrəfi/ — бүжгийн зохиомж · posture /ˈpɒstʃər/ — бие галбир · gesture /ˈdʒestʃər/ — дохио хөдөлгөөн<br>
        graceful /ˈɡreɪsfl/ — жавхаалаг · fluid /ˈfluːɪd/ — уян · rigid /ˈrɪdʒɪd/ — хөшүүн<br>
        rehearsal /rɪˈhɜːsl/ — бэлтгэл · routine /ruːˈtiːn/ — бүжгийн дараалал · ensemble /ɒnˈsɒmbl/ — хамтлаг<br>
        expressive /ɪkˈspresɪv/ — сэтгэл илэрхийлэм · synchronised /ˈsɪŋkrənaɪzd/ — уялдсан · improvised /ˈɪmprəvaɪzd/ — тэр дороо зохиосон<br>
        stunning /ˈstʌnɪŋ/ — гайхамшигтай · effortless /ˈefərtləs/ — амархан мэт · flawless /ˈflɔːləs/ — өө сэвгүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «very stunning» ✗ — stunning нь туйлын учир <b>absolutely stunning</b> ✓. «absolutely good» ✗ → good зэрэглэдэг тул <b>very/really good</b> ✓. «a bit graceful» ✗ (эерэг тэмдэгт «a bit» тохирохгүй) → <b>quite graceful</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Туйлын үг → ABSOLUTELY; жирийн үг → VERY. Хэзээ ч «very perfect» биш».</p>`
    },
    phrases:[
      {en:"Her performance was absolutely stunning from start to finish.", pron:"хөр пөрформэнс воз эбсэлютли станнин фром старт ту финиш.", mn:"Түүний тоглолт эхнээс эцэс хүртэл үнэхээр гайхамшигтай байлаа."},
      {en:"The routine was fairly difficult but he made it look effortless.", pron:"зэ рутийн воз фээрли дификалт бат хи мэйд ит лук эфортлэс.", mn:"Бүжгийн дараалал нэлээд хэцүү ч тэр амархан мэт харагдуулсан."},
      {en:"By the end of rehearsal we were utterly exhausted.", pron:"бай зи энд ов рихөрсл ви вөр атэрли игзостид.", mn:"Бэлтгэл дуусахад бид бүрэн туйлдсан байлаа."},
      {en:"Their movements were quite flawless and perfectly synchronised.", pron:"зээр мувмэнтс вөр квайт флолэс энд пөрфэктли синкрэнайзд.", mn:"Тэдний хөдөлгөөн бараг өө сэвгүй, төгс уялдсан байв."},
      {en:"The choreography felt a bit rigid in the second half.", pron:"зэ кориографи фэлт э бит рижид ин зэ сэконд хаф.", mn:"Бүжгийн зохиомж хоёрдугаар хэсэгтээ жаахан хөшүүн санагдсан."}
    ],
    exercises:[
      {q:"туйлын үг:", parts:["The show was ", " stunning."], opts:["absolutely","very"], a:0, fix:"stunning = туйл → absolutely."},
      {q:"жирийн үг:", parts:["The music was ", " good, nothing special."], opts:["fairly","absolutely"], a:0, fix:"good = зэрэглэдэг → fairly."},
      {q:"туйл + utterly:", parts:["After the tour we were ", " exhausted."], opts:["utterly","very"], a:0, fix:"exhausted = туйл → utterly."},
      {q:"a bit + сөрөг:", parts:["The ending felt a bit ", "."], opts:["stiff","graceful"], a:0, fix:"«a bit» сөрөг тэмдэгтэй → stiff."}
    ],
    speak:{ scene:'Бүжгийн тоглолтын дараа', turns:[
      {ruby:"So, what did you think of the ballet?", pron:"соу, вот дид ю синк ов зэ бэлэй?", mn:"Тэгэхээр балетыг юу гэж бодов?",
        choices:[{t:"Honestly, it was absolutely breathtaking — I couldn't look away.",best:true,mn:"Үнэнийг хэлэхэд, амьсгал хураам гайхалтай байлаа — нүд салгаж чадсангүй."},{t:"Honestly, it was very breathtaking — I couldn't look away.",best:false,fix:"breathtaking = туйл → ABSOLUTELY breathtaking."}]},
      {ruby:"Was the lead dancer as good as they say?", pron:"воз зэ лийд дансэр эз гүд эз зэй сэй?", mn:"Гол бүжигчин яриад байгаа шиг сайн байсан уу?",
        choices:[{t:"Even better. Her technique was flawless and utterly effortless.",best:true,mn:"Бүр илүү. Түүний техник өө сэвгүй, огт хүчлэлгүй байлаа."},{t:"Even better. Her technique was very flawless and effortless.",best:false,fix:"flawless = туйл → utterly/absolutely flawless (very ✗)."}]},
      {ruby:"Did anything let it down?", pron:"дид энисин лэт ит даун?", mn:"Ямар нэг сул тал байв уу?",
        choices:[{t:"The second act felt fairly slow and a bit rigid, to be honest.",best:true,mn:"Хоёрдугаар хэсэг нэлээд удаан, жаахан хөшүүн санагдсан, үнэнийг хэлэхэд."},{t:"The second act felt absolutely slow and a bit rigid.",best:false,fix:"slow = зэрэглэдэг → FAIRLY slow (absolutely ✗)."}]}
    ]}
  },
  {
    id:'b2m4l7', title:"4.7 Барималцлал", level:"B2 · М4",
    blurb:"a well-known French bronze statue — Adjective order & compounds ⭐⭐",
    rule:{
      h:"Барималцлал ба дүрэм: Тэмдэг нэрийн дараалал + нийлмэл тэмдэг нэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хэд хэдэн тэмдэг нэрийг <b>зөв дарааллаар</b> эвлүүлж, <b>нийлмэл тэмдэг нэр</b> зөв бүтээх.<br><br>
        <b>Дараалал (OSASCOMP):</b> Санал → Хэмжээ → Нас → Хэлбэр → Өнгө → Гарал → Материал → Зориулалт:
        <div style="margin:12px 0"><span class="tag">a beautiful large old French bronze statue</span><span class="tag">санал(beautiful) хэмжээ(large) нас(old) гарал(French) материал(bronze)</span></div>
        <b>Нийлмэл тэмдэг нэр (зураас + ганц тоо!):</b>
        <div style="margin:12px 0"><span class="tag">a well-known artist · a ten-foot statue · a hand-carved figure</span><span class="tag">«a ten-feet statue» ✗ → a ten-FOOT statue ✓</span></div>
        <b>Дайвар үг + причасти (зураасгүй, -ly-тэй):</b>
        <div style="margin:12px 0"><span class="tag">a beautifully carved column (зураасгүй, учир нь -ly)</span><span class="tag">a badly damaged relief</span></div>
        <b>Байнга хамт:</b>
        <div style="margin:12px 0"><span class="tag">world-famous · life-sized · finely detailed · centuries-old</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        sculpture /ˈskʌlptʃər/ — баримал · statue /ˈstætʃuː/ — хөшөө · bust /bʌst/ — цээж баримал<br>
        relief /rɪˈliːf/ — сийлбэр товойлго · pedestal /ˈpedɪstl/ — суурь тавцан · bronze /brɒnz/ — хүрэл<br>
        marble /ˈmɑːrbl/ — гантиг · clay /kleɪ/ — шавар · cast /kɑːst/ — цутгамал<br>
        carve /kɑːrv/ — сийлэх · mould /moʊld/ — хэвлэх · chisel /ˈtʃɪzl/ — цохуур сийлбэрлэх<br>
        intricate /ˈɪntrɪkət/ — нарийн нягт · monumental /ˌmɒnjuˈmentl/ — сүрлэг · lifelike /ˈlaɪflaɪk/ — амьд мэт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «a French old statue» ✗ → нас гаралаас түрүүлнэ: <b>an old French statue</b> ✓. Нийлмэлд нэр үг ганц тоо: «a two-metres statue» ✗ → <b>a two-METRE statue</b> ✓. «a well known artist» (зураасгүй) ✗ → <b>a well-known artist</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Санал → Хэмжээ → Нас → Өнгө → Гарал → Материал; нийлмэл бол зураас + ганц тоо».</p>`
    },
    phrases:[
      {en:"It's a beautiful large old French bronze statue.", pron:"итс э бьютифул ларж оулд фрэнч бронз стэтью.", mn:"Энэ бол сайхан том хуучин франц хүрэл хөшөө."},
      {en:"The museum houses a world-famous life-sized marble sculpture.", pron:"зэ мьюзийэм хаузэз э вөрлд-фэймэс лайф-сайзд марбл скалпчэр.", mn:"Музей дэлхийд алдартай, жинхэнэ хэмжээний гантиг баримал хадгалдаг."},
      {en:"They found a beautifully carved centuries-old relief.", pron:"зэй фаунд э бьютифули карвд сэнчэриз-оулд рилийф.", mn:"Тэд сайхан сийлбэрлэсэн зуун жилийн настай товойлго оллоо."},
      {en:"On the pedestal stood a ten-foot bronze figure.", pron:"он зэ пэдэстл стүд э тэн-фүт бронз фигюр.", mn:"Суурин дээр арван футын хүрэл дүрс зогсож байв."},
      {en:"The artist is a well-known young Italian sculptor.", pron:"зи артист из э вэл-ноун янг итэлиэн скалптэр.", mn:"Уг зураач бол алдартай залуу итали уран барималч."}
    ],
    exercises:[
      {q:"нас < гарал:", parts:["It's an ", " statue."], opts:["old French","French old"], a:0, fix:"нас гаралаас түрүүлнэ → old French."},
      {q:"нийлмэл ганц тоо:", parts:["a ", " statue"], opts:["ten-foot","ten-feet"], a:0, fix:"нийлмэлд ганц тоо → ten-foot."},
      {q:"зураас:", parts:["a ", " artist"], opts:["well-known","well known"], a:0, fix:"нийлмэл тэмдэг → зураастай well-known."},
      {q:"-ly + причасти:", parts:["a ", " carved column"], opts:["beautifully","beautiful"], a:0, fix:"причастийг дайвар үг тодотгоно → beautifully."}
    ],
    speak:{ scene:'Барималын галерейд', turns:[
      {ruby:"Tell me about this piece.", pron:"тэл ми эбаут зис пийс.", mn:"Энэ бүтээлийн тухай ярьж өгөөч.",
        choices:[{t:"It's a stunning large old Italian marble sculpture from the 1600s.",best:true,mn:"Энэ бол 1600-аад оны гайхалтай том хуучин итали гантиг баримал."},{t:"It's a stunning Italian old large marble sculpture.",best:false,fix:"дараалал → large OLD ITALIAN marble."}]},
      {ruby:"How tall is that bronze figure?", pron:"хау тол из зэт бронз фигюр?", mn:"Тэр хүрэл дүрс хэр өндөр вэ?",
        choices:[{t:"About three metres — it's a life-sized, finely detailed cast.",best:true,mn:"Гурван метр орчим — жинхэнэ хэмжээний, нарийн боловсруулсан цутгамал."},{t:"About three metres — it's a life-size, finely detail cast.",best:false,fix:"life-SIZED; finely DETAILED (причасти)."}]},
      {ruby:"Who made it?", pron:"ху мэйд ит?", mn:"Хэн үүнийг бүтээсэн бэ?",
        choices:[{t:"A well-known young French sculptor who works mainly in bronze.",best:true,mn:"Голдуу хүрлээр ажилладаг алдартай залуу франц уран барималч."},{t:"A well known French young sculptor who works in bronze.",best:false,fix:"well-KNOWN (зураас); young FRENCH (нас<гарал)."}]}
    ]}
  },
  {
    id:'b2m4l8', title:"4.8 Гэрэл зураг", level:"B2 · М4",
    blurb:"I stopped to shoot vs stopped shooting — Verb patterns with meaning change ⭐⭐⭐",
    rule:{
      h:"Гэрэл зураг ба дүрэм: Утга өөрчилдөг үйл үгийн бүтэц (infinitive ↔ -ing)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Зарим үйл үгийн дараа <b>to + үйл</b> эсвэл <b>-ing</b> нь <b>утгыг бүрэн өөрчилдөг</b>.<br><br>
        <b>remember / forget / stop / regret:</b>
        <div style="margin:12px 0"><span class="tag">I STOPPED TO photograph the sunset. (авахаар зогсов)</span><span class="tag">I STOPPED photographING at dusk. (авахаа больсон)</span></div>
        <div style="margin:12px 0"><span class="tag">Remember TO charge the battery. (дараа — санаж хий)</span><span class="tag">I remember chargING it. (өмнө — хийснээ санаж байна)</span></div>
        <b>verb + object + infinitive/-ing:</b>
        <div style="margin:12px 0"><span class="tag">I saw him TAKE the shot. (бүхэлд нь — эхнээс эцэс)</span><span class="tag">I saw him TAKING shots. (дундах агшинд)</span></div>
        <div style="margin:12px 0"><span class="tag">The editor had me RESHOOT it. (have + obj + үндсэн үйл)</span><span class="tag">She got me TO adjust the light. (get + obj + TO)</span></div>
        <b>regret + утга:</b>
        <div style="margin:12px 0"><span class="tag">I regret TO inform you... (одоо мэдэгдэхдээ харамсаж)</span><span class="tag">I regret deletING that photo. (өмнөх үйлд харамсаж)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        exposure /ɪkˈspoʊʒər/ — гэрэлтүүлэг · aperture /ˈæpərtʃər/ — цоорхойн хэмжээ · shutter /ˈʃʌtər/ — хаалт<br>
        focus /ˈfoʊkəs/ — тодрол · lens /lenz/ — линз · framing /ˈfreɪmɪŋ/ — хүрээлэл<br>
        composition /ˌkɒmpəˈzɪʃn/ — зохиомж · silhouette /ˌsɪluˈet/ — далдхайн дүрс · contrast /ˈkɒntrɑːst/ — тодосгол<br>
        candid /ˈkændɪd/ — байгалиараа авсан · retouch /ˌriːˈtʌtʃ/ — засварлах · crop /krɒp/ — тайрах<br>
        grainy /ˈɡreɪni/ — ширхэгтэй · overexposed /ˌoʊvərɪkˈspoʊzd/ — хэт гэрэлтэй · backlit /ˈbæklɪt/ — арын гэрэлтэй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I stopped to take photos» = зогсоод авав; «зураг авахаа больсон» гэвэл <b>stopped TAKING</b> ✓. «Remember to charge» (дараа) ↔ «remember charging» (өмнө) — хольж болохгүй. «had me to reshoot» ✗ → <b>had me reshoot</b> (to-гүй) ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TO = урагшаа (дараа хийх зорилго); -ING = хойшоо (өмнө болсон/үргэлжилсэн)».</p>`
    },
    phrases:[
      {en:"I stopped to photograph the sunset over the temple.", pron:"ай стопт ту фотограф зэ сансэт оувэр зэ тэмпл.", mn:"Сүмийн дээгүүрх нар жаргахыг авахаар зогслоо."},
      {en:"Remember to bring a spare battery for the shoot.", pron:"римэмбэр ту бринг э спээр бэтэри фор зэ шүт.", mn:"Зураг авалтад нөөц зай авчрахаа битгий мартаарай."},
      {en:"I clearly remember taking that candid shot of her.", pron:"ай клийрли римэмбэр тэйкин зэт кэндид шот ов хөр.", mn:"Түүний тэр байгалиараа авсан зургийг авснаа тодхон санаж байна."},
      {en:"The editor had me reshoot the whole series in daylight.", pron:"зи эдитэр хэд ми ришүт зэ хоул сириз ин дэйлайт.", mn:"Редактор надаар бүх цувралыг өдрийн гэрэлд дахин авахуулсан."},
      {en:"I regret to say the overexposed frames are unusable.", pron:"ай ригрэт ту сэй зэ оувэрикспоузд фрэймз ар анюзэбл.", mn:"Хэт гэрэлтэй кадрууд ашиглах боломжгүй гэдгийг харамсалтайгаар хэлье."}
    ],
    exercises:[
      {q:"зогсоод хийв:", parts:["I stopped ", " the perfect silhouette."], opts:["to capture","capturing"], a:0, fix:"авахаар зогсов → stopped TO capture."},
      {q:"дараа санаж хий:", parts:["Remember ", " the lens before you leave."], opts:["to clean","cleaning"], a:0, fix:"дараах үйл → remember TO clean."},
      {q:"өмнөх санаа:", parts:["I remember ", " that shot last summer."], opts:["taking","to take"], a:0, fix:"өмнө болсныг санаж → remember TAKING."},
      {q:"have + obj:", parts:["The client had me ", " every image."], opts:["retouch","to retouch"], a:0, fix:"have + obj + үндсэн үйл → retouch."}
    ],
    speak:{ scene:'Гэрэл зурагчинтай ярилцлага', turns:[
      {ruby:"How did you get that shot on the trail?", pron:"хау дид ю гэт зэт шот он зэ трэйл?", mn:"Замд тэр зургийг яаж авав?",
        choices:[{t:"I stopped to set up the tripod just as the light turned golden.",best:true,mn:"Гэрэл алтлаг болмогц гурван хөлт тулгуураа тавихаар зогслоо."},{t:"I stopped setting up the tripod just as the light turned golden.",best:false,fix:"'зогсоод тавив' → stopped TO set up (stopped setting = тавихаа больсон)."}]},
      {ruby:"Did you back up the files afterwards?", pron:"дид ю бэк ап зэ файлз афтэрвэрдз?", mn:"Дараа нь файлаа хуулж хадгалсан уу?",
        choices:[{t:"Yes — I distinctly remember copying them onto two drives.",best:true,mn:"Тийм — тэдгээрийг хоёр диск рүү хуулснаа тодхон санаж байна."},{t:"Yes — I distinctly remember to copy them onto two drives.",best:false,fix:"өмнө болсон → remember COPYING (to copy = дараа хийх)."}]},
      {ruby:"Did the magazine ask for changes?", pron:"дид зэ мэгэзийн аск фор чэйнжэз?", mn:"Сэтгүүл өөрчлөлт хийлгэсэн үү?",
        choices:[{t:"They had me recrop a few frames, but that was all.",best:true,mn:"Хэдэн кадрыг дахин тайруулсан, гэхдээ тэр л дээ."},{t:"They had me to recrop a few frames, but that was all.",best:false,fix:"have + obj + үндсэн үйл → had me RECROP (to ✗)."}]}
    ]}
  },
  {
    id:'b2m4l9', title:"4.9 Соёлын өв", level:"B2 · М4",
    blurb:"sort of ancient, a thousand years or so — Vague language ⭐⭐",
    rule:{
      h:"Соёлын өв ба дүрэм: Ойролцоолол ба тодорхойгүй хэллэг (vague language)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Яриаг зөөлрүүлж, <b>тоо/чанарыг ойролцоогоор</b> хэлэх байгалийн хэллэгүүд.<br><br>
        <b>Тоог ойролцоолох:</b>
        <div style="margin:12px 0"><span class="tag">a thousand years OR SO</span><span class="tag">ABOUT / AROUND 500 · ROUGHLY a century · MORE OR LESS intact</span></div>
        <b>«-ish» дагавар:</b>
        <div style="margin:12px 0"><span class="tag">It's fifteenth-centurY-ish. · We'll meet at sixISH. · a reddISH stone</span></div>
        <b>«sort of / kind of» (чанарыг зөөлрүүлэх):</b>
        <div style="margin:12px 0"><span class="tag">It's SORT OF sacred to the locals.</span><span class="tag">KIND OF faded but still beautiful.</span></div>
        <b>Жагсаалт нээх хэллэг:</b>
        <div style="margin:12px 0"><span class="tag">...and things like that · ...and so on · ...or something · ...that kind of thing</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        heritage /ˈherɪtɪdʒ/ — өв соёл · artefact /ˈɑːrtɪfækt/ — эртний эд өлгийн зүйл · monument /ˈmɒnjumənt/ — дурсгал<br>
        ruins /ˈruːɪnz/ — балгас · relic /ˈrelɪk/ — дурсгалт үлдэгдэл · shrine /ʃraɪn/ — тахилын газар<br>
        excavation /ˌekskəˈveɪʃn/ — малтлага · preservation /ˌprezərˈveɪʃn/ — хамгаалан хадгалалт · restoration /ˌrestəˈreɪʃn/ — сэргээн засварлалт<br>
        indigenous /ɪnˈdɪdʒənəs/ — уугуул · ancestral /ænˈsestrəl/ — өвөг дээдсийн · sacred /ˈseɪkrɪd/ — ариун<br>
        ancient /ˈeɪnʃənt/ — эртний · authentic /ɔːˈθentɪk/ — жинхэнэ · endangered /ɪnˈdeɪndʒərd/ — устах аюулд орсон</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «about roughly 500» ✗ — хоёр ойролцоологчийг давхарлана: <b>about 500</b> ЭСВЭЛ <b>roughly 500</b>. «-ish»-ийг албан бичигт бүү хэрэглэ (яриа л). «more or less» = бараг, харин «more and less» ✗.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Тоонд OR SO / ABOUT, чанарт SORT OF / KIND OF, төгсгөлд -ISH».</p>`
    },
    phrases:[
      {en:"The temple is a thousand years old, or so they say.", pron:"зэ тэмпл из э саузэнд йирз оулд, ор соу зэй сэй.", mn:"Сүм мянга орчим жилийн настай гэдэг юм билээ."},
      {en:"The ruins are more or less intact after all this time.", pron:"зэ руинз ар мор ор лэс интэкт афтэр ол зис тайм.", mn:"Балгас энэ бүх хугацааны дараа бараг бүрэн бүтэн хэвээр."},
      {en:"It's sort of sacred to the indigenous community here.", pron:"итс сорт ов сэйкрид ту зи индижэнэс кэмьюнити хийр.", mn:"Энэ нь эндэх уугуул иргэдэд нэг талаараа ариун газар."},
      {en:"The carvings are reddish and, I'd guess, fifteenth-century-ish.", pron:"зэ карвингз ар рэдиш энд, айд гэс, фифтийнс-сэнчэри-иш.", mn:"Сийлбэрүүд улаавтар, миний бодлоор арван тавдугаар зуун орчмынх."},
      {en:"They found pottery, tools, bones and things like that.", pron:"зэй фаунд потэри, түлз, боунз энд сингз лайк зэт.", mn:"Тэд ваар сав, багаж, яс мэтчлэнгийн зүйл олсон."}
    ],
    exercises:[
      {q:"тоог ойролцоол:", parts:["The site is about 800 years old, ", "."], opts:["or so","or less"], a:0, fix:"ойролцоолол → or so."},
      {q:"чанар зөөлрүүл:", parts:["The colour is ", " faded now."], opts:["kind of","kind"], a:0, fix:"чанар зөөлрүүл → kind of."},
      {q:"-ish:", parts:["Let's meet at the ruins at four", "."], opts:["ish","-less"], a:0, fix:"цаг ойролцоол → four-ish."},
      {q:"давхардлаас зайл:", parts:["There were ", " fifty relics."], opts:["roughly","about roughly"], a:0, fix:"нэг л ойролцоологч → roughly (about roughly ✗)."}
    ],
    speak:{ scene:'Түүхэн балгас үзэж байхад', turns:[
      {ruby:"How old is this whole complex?", pron:"хау оулд из зис хоул кэмплэкс?", mn:"Энэ бүх цогцолбор хэдэн настай вэ?",
        choices:[{t:"Two thousand years or so — nobody's completely sure, to be honest.",best:true,mn:"Хоёр мянга орчим жил — үнэндээ хэн ч бүрэн итгэлтэй хэлж чадахгүй."},{t:"Two thousand years about roughly — nobody's sure.",best:false,fix:"давхардал → 'or so' ЭСВЭЛ 'about', хоёуланг нэгэн зэрэг ✗."}]},
      {ruby:"Is the structure still in good condition?", pron:"из зэ стракчэр стил ин гүд кэндишн?", mn:"Барилга нь одоо ч сайн хадгалагдсан уу?",
        choices:[{t:"More or less — the walls are intact, though the roof is sort of collapsed.",best:true,mn:"Бараг тийм — хана нь бүтэн, гэхдээ дээвэр нь нэг талаараа нурсан."},{t:"More and less — the walls are intact, the roof collapsed.",best:false,fix:"more OR less (more and less ✗)."}]},
      {ruby:"What kind of objects did they dig up?", pron:"вот кайнд ов обжэктс дид зэй диг ап?", mn:"Ямар төрлийн эд юмс малтаж гаргасан бэ?",
        choices:[{t:"Pottery, coins, some reddish beads and that kind of thing.",best:true,mn:"Ваар сав, зоос, улаавтар сувс, тийм л зүйлс."},{t:"Pottery, coins, some red-ish beads and that thing kind of.",best:false,fix:"'that KIND OF thing' (үг эрэмбэ); reddish зөв."}]}
    ]}
  },
  {
    id:'b2m4l10', title:"4.10 Модулийн төсөл", level:"B2 · М4",
    blurb:"🏆 Соёлын шүүмж / байр суурийн эссэ бичих",
    rule:{
      h:"Давтлага: B2 Модуль 4-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 4-ийн бүх бүтцийг нэгтгэж, жинхэнэ B2 түвшний соёлын шүүмж / байр суурийн эссэ бүтээх.<br><br>
        <b>Модуль 4-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">the extent TO WHICH · most of WHOM ⭐⭐⭐</span><span class="tag">the woman STANDING / the issues RAISED ⭐⭐</span><span class="tag">It was jazz THAT... / What I love IS... ⭐⭐⭐</span><span class="tag">Little did we know / Never HAVE I seen ⭐⭐⭐</span><span class="tag">the RISE OF / a LACK OF clarity ⭐⭐⭐</span><span class="tag">absolutely stunning vs fairly good ⭐⭐</span><span class="tag">a well-known old French statue ⭐⭐</span><span class="tag">stopped TO shoot vs stopped shootING ⭐⭐⭐</span><span class="tag">a thousand years OR SO / SORT OF sacred ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Соёлын шүүмж эссэ (20+ өгүүлбэр):</b> Загвар:<br>
        <i>Rarely have I left a gallery so moved. The exhibition, most of whom the artists were unknown a decade ago, has provoked a debate the extent to which few could have predicted. What struck me first was the craftsmanship: a beautifully restored old Mongolian bronze sculpture, more or less untouched for centuries, stood at the centre of the hall. It was this single piece that changed my whole view of the show. The emergence of such bold work reflects a profound cultural shift. Little did the early critics know how influential these artists would become. The paintings hanging nearby, rendered in absolutely stunning colours, were, if anything, even more compelling. Only by returning a second time did I grasp the subtlety of the symbolism. My one reservation is a lack of clear labelling; the descriptions felt sort of rushed. All in all, the exhibition is a triumph — one to which I will certainly return.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 соёлын эссэгийн 4 давхар: <b>Онцлох нээлт</b> (Rarely have I... / It was this that...) → <b>Нарийвчилсан тодотгол</b> (the sculpture standing..., a well-known old French...) → <b>Эрдэм шинжилгээний дүгнэлт</b> (the rise of, the extent to which) → <b>Зөөлөн байр суурь</b> (sort of, more or less, a lack of).</p>`
    },
    phrases:[
      {en:"Rarely have I left an exhibition so profoundly moved.", pron:"рээрли хэв ай лэфт эн эксибишн соу профаундли мувд.", mn:"Ийм гүнзгий сэтгэл хөдлөн үзэсгэлэнгээс гарсан удаа ховор."},
      {en:"It was this single piece that changed my view of the show.", pron:"ит воз зис сингл пийс зэт чэйнжд май вью ов зэ шоу.", mn:"Энэ ганц бүтээл л үзэсгэлэнгийн талаарх миний бодлыг өөрчилсөн."},
      {en:"The emergence of such bold work reflects a cultural shift.", pron:"зи имөржэнс ов сач боулд вөрк рифлэктс э калчэрэл шифт.", mn:"Ийм зоримог бүтээл гарч ирсэн нь соёлын өөрчлөлтийг харуулж байна."},
      {en:"Only by returning did I grasp the subtlety of the symbolism.", pron:"оунли бай ритөрнин дид ай грасп зэ сатлти ов зэ симбэлизм.", mn:"Эргэж очиж байж л бэлгэдлийн нарийн чанарыг ойлгосон."},
      {en:"My one reservation is a lack of clear labelling.", pron:"май ван рэзэрвэйшн из э лэк ов клийр лэйблин.", mn:"Миний ганц болгоомжлол бол тодорхой тайлбар дутсан явдал."}
    ],
    exercises:[
      {q:"Давтлага (инверси):", parts:["Rarely ", " I seen such craftsmanship."], opts:["have","I have"], a:0, fix:"Rarely HAVE I seen — урвуу."},
      {q:"Давтлага (cleft):", parts:["It was this piece ", " changed my mind."], opts:["that","what"], a:0, fix:"It-cleft → that (what ✗)."},
      {q:"Давтлага (нэршүүл):", parts:["the ", " of the modern novel"], opts:["rise","rising up"], a:0, fix:"the rise OF ..."},
      {q:"Давтлага (чангатгагч):", parts:["The colours were ", " stunning."], opts:["absolutely","very"], a:0, fix:"stunning = туйл → absolutely."}
    ],
    speak:{ scene:'🏆 Төсөл: Соёлын шүүмж', turns:[
      {ruby:"So, would you recommend the exhibition?", pron:"соу, вүд ю рэкэмэнд зи эксибишн?", mn:"Тэгэхээр үзэсгэлэнг санал болгох уу?",
        choices:[{t:"Absolutely. Rarely have I seen work so bold, most of which was made by unknown young artists.",best:true,mn:"Заавал. Ийм зоримог бүтээл ховор үзсэн, ихэнхийг нь үл мэдэгдэх залуу зураачид хийсэн."},{t:"Absolutely. Rarely I have seen work so bold, most of who was young.",best:false,fix:"Rarely HAVE I seen; most of WHICH/WHOM."}]},
      {ruby:"What stood out for you most?", pron:"вот стүд аут фор ю моуст?", mn:"Юу хамгийн их сэтгэлд тань үлдэв?",
        choices:[{t:"It was one restored old bronze sculpture that changed my whole view; only by returning did I appreciate it fully.",best:true,mn:"Сэргээсэн нэгэн хуучин хүрэл баримал л миний бодлыг өөрчилсөн; эргэж очиж байж бүрэн үнэлсэн."},{t:"It was one restored bronze old sculpture what changed my view; only by returning I appreciated it.",best:false,fix:"cleft → THAT changed; дараалал old BRONZE; Only by... DID I."}]},
      {ruby:"Any criticisms at all?", pron:"эни критисизмз эт ол?", mn:"Ямар нэг шүүмжлэл байна уу?",
        choices:[{t:"My one reservation is a lack of clear labelling — the notes felt sort of rushed.",best:true,mn:"Ганц болгоомжлол бол тодорхой тайлбар дутсан — тэмдэглэлүүд нь нэг л яаравчилсан санагдсан."},{t:"My one reservation is that labelling not clear — the notes felt sort rushed.",best:false,fix:"нэршүүл → a LACK OF clarity/labelling; SORT OF rushed."}]}
    ]}
  },
  {
    id:'b2m5l1', title:"5.1 Судалгаа", level:"B2 · М5",
    blurb:"It is claimed that the vaccine works — Passive reporting ⭐⭐⭐",
    rule:{
      h:"Идэвхгүй мэдээлэл дамжуулах (Passive reporting): бүрэн систем",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн эрдэм шинжилгээний гол бүтэц — <b>эх сурвалжаа нэрлэлгүйгээр «гэж үздэг / гэж мэдэгддэг»</b> хэлэх.<br><br>
        <b>Хоёр загвар (хоёулаа зөв):</b>
        <div style="margin:12px 0"><span class="tag">IT IS claimed THAT the drug reduces risk. (ерөнхий)</span><span class="tag">The drug IS claimed TO reduce risk. (субъект урагшаа)</span></div>
        <b>Ижил утга, өөр бүтэц — үйл үгс:</b> say · think · believe · claim · report · know · expect · consider.<br><br>
        <b>Өнгөрсөн рүү — TO HAVE + V3:</b>
        <div style="margin:12px 0"><span class="tag">He IS believed TO HAVE discovered it in 2019. (тэр аль хэдийн нээсэн гэж үздэг)</span><span class="tag">IT IS believed THAT he discovered it in 2019.</span></div>
        <b>«There» + идэвхгүй тайлан:</b>
        <div style="margin:12px 0"><span class="tag">THERE IS thought TO BE life on other planets. (амьдрал байдаг гэж боддог)</span><span class="tag">THERE ARE said TO BE side effects.</span></div>
        <b>Одоо үргэлжлэх → TO BE + -ing:</b>
        <div style="margin:12px 0"><span class="tag">The team IS reported TO BE testing a new model.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        research /rɪˈsɜːrtʃ/ — судалгаа · hypothesis /haɪˈpɒθəsɪs/ — таамаглал · evidence /ˈevɪdəns/ — нотолгоо<br>
        findings /ˈfaɪndɪŋz/ — үр дүн · peer-reviewed /ˌpɪr rɪˈvjuːd/ — хянан магадалсан · methodology /ˌmeθəˈdɒlədʒi/ — арга зүй<br>
        sample /ˈsæmpl/ — түүвэр · correlation /ˌkɔːrəˈleɪʃn/ — хамаарал · variable /ˈveəriəbl/ — хувьсагч<br>
        conclusive /kənˈkluːsɪv/ — эцсийн шийдэмгий · replicate /ˈreplɪkeɪt/ — давтан хийх · significant /sɪɡˈnɪfɪkənt/ — ач холбогдолтой<br>
        data /ˈdeɪtə/ — өгөгдөл · funding /ˈfʌndɪŋ/ — санхүүжилт · bias /ˈbaɪəs/ — хазайлт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It is claimed the drug works» ✗ — <b>claimed THAT</b> хэрэгтэй. «He is believed to discovered» ✗ → өнгөрсөн бол <b>to HAVE discovered</b> ✓. «There is thought life» ✗ → <b>There is thought TO BE life</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хэн хэлснийг нуувал → IT IS + V3 + THAT» эсвэл «субъект + IS + V3 + TO».</p>`
    },
    phrases:[
      {en:"It is claimed that the treatment reduces the risk by half.", pron:"ит из клэймд зэт зэ трийтмэнт ридьюсиз зэ риск бай хаф.", mn:"Тухайн эмчилгээ эрсдэлийг тал дахин бууруулдаг гэж үздэг."},
      {en:"The compound is believed to have significant side effects.", pron:"зэ компаунд из билийвд ту хэв сигнификант сайд ифэктс.", mn:"Тухайн нэгдэл ноцтой гаж нөлөөтэй гэж үздэг."},
      {en:"There is thought to be a strong correlation between the two.", pron:"зэр из сот ту би э строн корэлэйшн битвийн зэ ту.", mn:"Хоёрын хооронд хүчтэй хамаарал байдаг гэж боддог."},
      {en:"The results are said to have been replicated independently.", pron:"зэ ризалтс а сэд ту хэв бийн рэпликэйтид индипэндэнтли.", mn:"Үр дүнг бие даан давтан баталсан гэж үздэг."},
      {en:"The lab is reported to be developing a new vaccine.", pron:"зэ лэб из рипортид ту би дивэлопинг э ню вэксийн.", mn:"Тухайн лаборатори шинэ вакцин боловсруулж байгаа гэж мэдээлдэг."}
    ],
    exercises:[
      {q:"THAT заавал:", parts:["It is claimed ", " the drug works."], opts:["that","to"], a:0, fix:"It is claimed THAT + өгүүлбэр."},
      {q:"Өнгөрсөн:", parts:["He is believed ", " it in 2019."], opts:["to have discovered","to discover"], a:0, fix:"Аль хэдийн болсон → to HAVE discovered."},
      {q:"There бүтэц:", parts:["There is thought ", " life on Mars."], opts:["to be","being"], a:0, fix:"There is thought TO BE."},
      {q:"Субъект урагшаа:", parts:["The virus ", " to spread quickly."], opts:["is known","is knowing"], a:0, fix:"Идэвхгүй → is known to."}
    ],
    speak:{ scene:'Судалгааны дүгнэлт хэлэлцэх', turns:[
      {ruby:"What does the latest study suggest?", pron:"вот даз зэ лэйтэст стади сажэст?", mn:"Хамгийн сүүлийн судалгаа юу харуулж байна?",
        choices:[{t:"It is claimed that the new treatment reduces the risk significantly.",best:true,mn:"Шинэ эмчилгээ эрсдэлийг мэдэгдэхүйц бууруулдаг гэж үздэг."},{t:"It is claimed the new treatment reduces the risk.",best:false,fix:"claimed THAT the treatment reduces."}]},
      {ruby:"Is the evidence reliable, though?", pron:"из зэ эвидэнс рилайэбл, зоу?", mn:"Гэхдээ нотолгоо нь найдвартай юу?",
        choices:[{t:"The findings are said to have been replicated by three separate teams.",best:true,mn:"Үр дүнг гурван тусдаа баг давтан баталсан гэж үздэг."},{t:"The findings are said to replicated by three teams.",best:false,fix:"are said TO HAVE BEEN replicated."}]},
      {ruby:"So what's the bigger picture here?", pron:"соу вотс зэ бигэр пикчэр хиэр?", mn:"Тэгэхээр том зураг нь юу вэ?",
        choices:[{t:"There is thought to be a strong link between the gene and the disease.",best:true,mn:"Ген болон өвчний хооронд хүчтэй холбоо байдаг гэж боддог."},{t:"There is thought a strong link between them.",best:false,fix:"There is thought TO BE a link."}]}
    ]}
  },
  {
    id:'b2m5l2', title:"5.2 Нээлт", level:"B2 · М5",
    blurb:"But for the funding, the project would have failed — Implied conditionals ⭐⭐⭐",
    rule:{
      h:"Далд ба холимог нөхцөл: but for / given / otherwise / with(out)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ «If» ашиглалгүйгээр нөхцөлт утга илэрхийлэх нарийн аргууд.<br><br>
        <b>BUT FOR + нэр = «хэрэв … байгаагүй бол»:</b>
        <div style="margin:12px 0"><span class="tag">BUT FOR the funding, the research would have collapsed. (= If it hadn't been for)</span><span class="tag">BUT FOR his mentor, he'd never have succeeded.</span></div>
        <b>GIVEN (that) = «… гэдгийг харгалзвал»:</b>
        <div style="margin:12px 0"><span class="tag">GIVEN the evidence, the theory seems sound.</span><span class="tag">GIVEN THAT resources are limited, results are impressive.</span></div>
        <b>OTHERWISE = «эс тэгвээс»:</b>
        <div style="margin:12px 0"><span class="tag">They doubled the funding; OTHERWISE the lab would have closed.</span></div>
        <b>WITH / WITHOUT = далд нөхцөл:</b>
        <div style="margin:12px 0"><span class="tag">WITHOUT this discovery, we would still be guessing. (= If there were no...)</span><span class="tag">WITH a bigger sample, the results would be reliable.</span></div>
        <b>Холимог нөхцөл (өнгөрсөн→одоо):</b>
        <div style="margin:12px 0"><span class="tag">If they HAD funded it, we WOULD know the answer now. (өнгөрсөн нөхцөл → одоогийн үр дүн)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        discovery /dɪˈskʌvəri/ — нээлт · breakthrough /ˈbreɪkθruː/ — том дэвшил · innovation /ˌɪnəˈveɪʃn/ — шинэчлэл<br>
        pioneer /ˌpaɪəˈnɪr/ — анхдагч · patent /ˈpætnt/ — патент · prototype /ˈprəʊtətaɪp/ — загвар<br>
        insight /ˈɪnsaɪt/ — гүн ойлголт · serendipity /ˌserənˈdɪpəti/ — санамсаргүй олдвор · milestone /ˈmaɪlstəʊn/ — гол үе шат<br>
        grant /ɡrɑːnt/ — тэтгэлэг · laboratory /ləˈbɒrətri/ — лаборатори · apparatus /ˌæpəˈreɪtəs/ — багаж төхөөрөмж<br>
        observation /ˌɒbzərˈveɪʃn/ — ажиглалт · phenomenon /fəˈnɒmɪnən/ — үзэгдэл · empirical /ɪmˈpɪrɪkl/ — туршилтын<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «But for the funding, the project failed» ✗ — гол хэсэг нь <b>would have collapsed</b> байх ёстой. «Given that the evidence» ✗ (that илүү) → <b>Given the evidence</b> эсвэл <b>Given that the evidence is strong</b>. «Without money we would be still guessing» → <b>would still be guessing</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «BUT FOR / WITHOUT = If it hadn't been for» — араас нь заавал <b>would (have)</b>.</p>`
    },
    phrases:[
      {en:"But for the grant, the discovery would never have happened.", pron:"бат фор зэ грант, зэ дискавэри вүд нэвэр хэв хэпнд.", mn:"Тэтгэлэг байгаагүй бол уг нээлт хэзээ ч гарахгүй байсан."},
      {en:"Given the limited data, the conclusion is remarkably solid.", pron:"гивн зэ лимитид дэйта, зэ конклужн из римаркэбли солид.", mn:"Хязгаарлагдмал өгөгдлийг харгалзвал дүгнэлт нь гайхалтай баттай."},
      {en:"They secured funding; otherwise the lab would have shut down.", pron:"зэй сикьюрд фандинг; азэрвайз зэ лэб вүд хэв шат даун.", mn:"Тэд санхүүжилт олж авсан; эс тэгвээс лаборатори хаагдах байсан."},
      {en:"Without this breakthrough, we would still be in the dark.", pron:"визаут зис брэйксрү, ви вүд стил би ин зэ дарк.", mn:"Энэ дэвшил байгаагүй бол бид одоо ч харанхуйд байх байсан."},
      {en:"If they had invested earlier, we would already have a cure.", pron:"иф зэй хэд инвэстид өрлиэр, ви вүд олрэди хэв э кьюэр.", mn:"Хэрэв тэд эрт хөрөнгө оруулсан бол бид аль хэдийн эмтэй болох байсан."}
    ],
    exercises:[
      {q:"But for + үр дүн:", parts:["But for the grant, it ", " have failed."], opts:["would","will"], a:0, fix:"But for → would have."},
      {q:"Given хэлбэр:", parts:["", " the evidence, the theory holds."], opts:["Given","Given that"], a:0, fix:"Given + нэр (that ✗ эндээс)."},
      {q:"Далд нөхцөл:", parts:["Without funding, progress ", " impossible."], opts:["would be","is"], a:0, fix:"Without = far нөхцөл → would be."},
      {q:"Холимог:", parts:["If they had acted, we ", " a cure now."], opts:["would have","had"], a:0, fix:"Өнгөрсөн→одоо: would have + now."}
    ],
    speak:{ scene:'Нээлтийн түүх ярих', turns:[
      {ruby:"How did the team make such a leap?", pron:"хау дид зэ тийм мэйк сач э лийп?", mn:"Баг ийм том үсрэлтийг яаж хийсэн бэ?",
        choices:[{t:"But for one chance observation, they would never have found it.",best:true,mn:"Нэг санамсаргүй ажиглалт байгаагүй бол тэд үүнийг хэзээ ч олохгүй байсан."},{t:"But for one observation, they never found it.",best:false,fix:"But for → they WOULD NEVER HAVE FOUND it."}]},
      {ruby:"Was the funding really that critical?", pron:"воз зэ фандинг риэли зэт критикл?", mn:"Санхүүжилт үнэхээр тийм чухал байсан уу?",
        choices:[{t:"Absolutely. Without the grant, the whole lab would have shut down.",best:true,mn:"Мэдээж. Тэтгэлэг байгаагүй бол лаборатори бүхэлдээ хаагдах байсан."},{t:"Absolutely. Without the grant, the lab shut down.",best:false,fix:"Without the grant, the lab WOULD HAVE SHUT DOWN."}]},
      {ruby:"Is the conclusion trustworthy?", pron:"из зэ конклужн трастворзи?", mn:"Дүгнэлт нь итгэл даах уу?",
        choices:[{t:"Given how small the sample was, the findings are surprisingly robust.",best:true,mn:"Түүвэр хэр бага байсныг харгалзвал үр дүн нь гайхалтай баттай."},{t:"Given that the sample, the findings are robust.",best:false,fix:"Given that the sample WAS SMALL, ... (бүтэн өгүүлбэр)."}]}
    ]}
  },
  {
    id:'b2m5l3', title:"5.3 Туршилт", level:"B2 · М5",
    blurb:"However carefully you measure, errors creep in — Advanced concession ⭐⭐⭐",
    rule:{
      h:"Дэвшилтэт зөвшөөрөл (Concession): however/whatever + adj; granted; admittedly",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ «Хичнээн … ч», «яасан ч гэсэн» гэсэн уян хатан буулт хийх бүтцүүд.<br><br>
        <b>HOWEVER / NO MATTER HOW + adj/adv + subject + verb:</b>
        <div style="margin:12px 0"><span class="tag">HOWEVER carefully you measure, small errors appear.</span><span class="tag">NO MATTER HOW precise the tool is, results vary.</span></div>
        <b>WHATEVER / WHOEVER / WHENEVER:</b>
        <div style="margin:12px 0"><span class="tag">WHATEVER the outcome, we must publish it.</span><span class="tag">WHOEVER designed this experiment, it is flawed.</span></div>
        <b>GRANTED (that) = «зөв, … гэдгийг хүлээн зөвшөөрье, гэхдээ»:</b>
        <div style="margin:12px 0"><span class="tag">GRANTED THAT the theory is elegant, it lacks proof.</span><span class="tag">GRANTED, the sample was small — but the trend is clear.</span></div>
        <b>ADMITTEDLY = «үнэндээ / хүлээн зөвшөөрөхөд»:</b>
        <div style="margin:12px 0"><span class="tag">The method is, ADMITTEDLY, imperfect, yet useful.</span></div>
        <b>Урвуулах онцлол (adj + AS + subject + verb):</b>
        <div style="margin:12px 0"><span class="tag">Careful AS the researcher was, she missed one variable.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        experiment /ɪkˈsperɪmənt/ — туршилт · trial /ˈtraɪəl/ — сорил · control group /kənˈtrəʊl ɡruːp/ — хяналтын бүлэг<br>
        variable /ˈveəriəbl/ — хувьсагч · measurement /ˈmeʒərmənt/ — хэмжилт · accuracy /ˈækjərəsi/ — нарийвчлал<br>
        margin of error /ˈmɑːdʒɪn/ — алдааны хэмжээ · reliable /rɪˈlaɪəbl/ — найдвартай · valid /ˈvælɪd/ — хүчинтэй<br>
        replicable /ˈreplɪkəbl/ — давтагдах чадвартай · outcome /ˈaʊtkʌm/ — үр дагавар · procedure /prəˈsiːdʒər/ — журам<br>
        calibrate /ˈkælɪbreɪt/ — тохируулах · anomaly /əˈnɒməli/ — хэвийн бус зүйл · flawed /flɔːd/ — алдаатай<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «However you measure carefully» ✗ — тэмдэг нэр/дайвар үг <b>however</b>-ийн ард шууд: <b>However carefully you measure</b>. «Granted that the theory» дараа өгүүлбэр дуусгах: <b>Granted that the theory is elegant, ...</b>. «Admitted, the sample» ✗ → <b>Admittedly</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «HOWEVER + чанар + хэн юу хийсэн» — «хичнээн … ч гэсэн».</p>`
    },
    phrases:[
      {en:"However carefully we calibrate, some error remains.", pron:"хауэвэр кээрфули ви кэлибрэйт, сам эрор римэйнз.", mn:"Хичнээн болгоомжтой тохируулсан ч алдаа үлддэг."},
      {en:"Whatever the result, we are obliged to report it honestly.", pron:"вотэвэр зэ ризалт, ви а облайжд ту рипорт ит онэстли.", mn:"Үр дүн нь ямар ч байсан бид үнэнээр мэдээлэх үүрэгтэй."},
      {en:"Granted that the theory is elegant, it still lacks evidence.", pron:"грантид зэт зэ сиэри из элигэнт, ит стил лэкс эвидэнс.", mn:"Онол нь гоё гэдгийг хүлээн зөвшөөрье, гэхдээ нотолгоо дутагдаж байна."},
      {en:"The procedure is, admittedly, time-consuming but reliable.", pron:"зэ прэсийжэр из, эдмитидли, тайм-консьюминг бат рилайэбл.", mn:"Уг журам нь үнэндээ их цаг зарцуулдаг ч найдвартай."},
      {en:"Careful as the team was, they overlooked one variable.", pron:"кээрфул эз зэ тийм воз, зэй оувэрлүкт ван вэриэбл.", mn:"Баг болгоомжтой байсан ч нэг хувьсагчийг анзаарсангүй."}
    ],
    exercises:[
      {q:"however + adv:", parts:["However ", " you measure, errors appear."], opts:["carefully","careful"], a:0, fix:"however + дайвар үг → carefully."},
      {q:"whatever:", parts:["", " the outcome, publish it."], opts:["Whatever","However"], a:0, fix:"Нэрийн өмнө → Whatever the outcome."},
      {q:"granted:", parts:["Granted ", " the sample is small, the trend is clear."], opts:["that","which"], a:0, fix:"Granted THAT + өгүүлбэр."},
      {q:"admittedly:", parts:["The method is, ", ", imperfect."], opts:["admittedly","admitted"], a:0, fix:"Дайвар үг → admittedly."}
    ],
    speak:{ scene:'Туршилтын хязгаар хэлэлцэх', turns:[
      {ruby:"Can we ever eliminate measurement error?", pron:"кэн ви эвэр илиминэйт мэжэрмэнт эрор?", mn:"Хэмжилтийн алдааг бүрэн арилгаж чадах уу?",
        choices:[{t:"However precisely we calibrate the instruments, some error always remains.",best:true,mn:"Хичнээн нарийн тохируулсан ч зарим алдаа үргэлж үлддэг."},{t:"However we calibrate precisely, some error remains.",best:false,fix:"However PRECISELY we calibrate (adv шууд ард)."}]},
      {ruby:"But the theory itself is beautiful, isn't it?", pron:"бат зэ сиэри итсэлф из бьютифул, изнт ит?", mn:"Гэхдээ онол өөрөө гоё биз дээ?",
        choices:[{t:"Granted that it's elegant, it still needs empirical proof.",best:true,mn:"Гоё гэдгийг хүлээн зөвшөөрье, гэхдээ туршлагын нотолгоо хэрэгтэй."},{t:"Granted it's elegant that, it needs proof.",best:false,fix:"Granted THAT it's elegant, ... (үг эмх цэгцтэй)."}]},
      {ruby:"So is the method worth using at all?", pron:"соу из зэ мэсод ворс юзинг эт ол?", mn:"Тэгэхээр энэ аргыг ерөөсөө хэрэглэх нь зүйтэй юу?",
        choices:[{t:"Admittedly it's slow, but whatever its flaws, it's the most reliable we have.",best:true,mn:"Үнэндээ удаан, гэхдээ ямар ч дутагдалтай байсан хамгийн найдвартай нь."},{t:"Admitted it's slow, but however its flaws, it's reliable.",best:false,fix:"Admittedly ... whatever its flaws (нэрийн өмнө whatever)."}]}
    ]}
  },
  {
    id:'b2m5l4', title:"5.4 Сансар", level:"B2 · М5",
    blurb:"They train for years so as to survive in orbit — Purpose & result ⭐⭐⭐",
    rule:{
      h:"Дэвшилтэт зорилго ба үр дүн: so as to / in order that / with a view to / lest",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Зорилго болон үр дүнг албан ёсны, нарийвчилсан бүтцээр илэрхийлэх.<br><br>
        <b>SO AS TO / IN ORDER TO + үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">Astronauts train hard SO AS TO cope with zero gravity.</span><span class="tag">SO AS NOT TO waste fuel, they plan every move.</span></div>
        <b>IN ORDER THAT + өгүүлбэр (may/might):</b>
        <div style="margin:12px 0"><span class="tag">Data is shared IN ORDER THAT others may verify it.</span></div>
        <b>WITH A VIEW TO + -ing = «… зорилготойгоор»:</b>
        <div style="margin:12px 0"><span class="tag">They launched the probe WITH A VIEW TO mapping the surface.</span></div>
        <b>FOR FEAR OF + -ing / LEST = «… вий гэж болгоомжилж»:</b>
        <div style="margin:12px 0"><span class="tag">They double-check everything FOR FEAR OF making an error.</span><span class="tag">Engineers test it repeatedly LEST it fail in space. (lest + үндсэн хэлбэр)</span></div>
        <b>Үр дүн — SO … THAT / SUCH … THAT:</b>
        <div style="margin:12px 0"><span class="tag">The launch was SO precise THAT it needed no correction.</span><span class="tag">It was SUCH a success THAT funding doubled.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        orbit /ˈɔːrbɪt/ — тойрог зам · gravity /ˈɡrævəti/ — таталцал · satellite /ˈsætəlaɪt/ — хиймэл дагуул<br>
        spacecraft /ˈspeɪskrɑːft/ — сансрын хөлөг · trajectory /trəˈdʒektəri/ — нислэгийн зам · propulsion /prəˈpʌlʃn/ — түлхэлт<br>
        launch /lɔːntʃ/ — хөөргөх · probe /prəʊb/ — сансрын зонд · atmosphere /ˈætməsfɪr/ — агаар мандал<br>
        cosmos /ˈkɒzmɒs/ — сансар огторгуй · astronaut /ˈæstrənɔːt/ — сансрын нисгэгч · module /ˈmɒdjuːl/ — тасаг хэсэг<br>
        velocity /vəˈlɒsəti/ — хурд · payload /ˈpeɪləʊd/ — ачаа · docking /ˈdɒkɪŋ/ — холбогдох ажиллагаа<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «so as to not waste» ✗ — үгүйсгэл <b>so as NOT to waste</b>. «with a view to map» ✗ → <b>with a view to mappING</b> (-ing!). «lest it fails» ✗ → <b>lest it fail</b> (үндсэн хэлбэр). «for fear of make» ✗ → <b>for fear of makING</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «TO / IN ORDER TO = үйл үг», «WITH A VIEW TO / FOR FEAR OF = -ING», «LEST = үндсэн үйл үг».</p>`
    },
    phrases:[
      {en:"Astronauts train for years so as to survive in orbit.", pron:"эстрэнотс трэйн фор йирз соу эз ту сөрвайв ин орбит.", mn:"Сансрын нисгэгчид тойрог замд амьд үлдэхийн тулд олон жил бэлтгэдэг."},
      {en:"The probe was launched with a view to mapping the surface.", pron:"зэ проуб воз лончт виз э вью ту мэппинг зэ сөрфис.", mn:"Гадаргууг зураглах зорилготойгоор зондыг хөөргөсөн."},
      {en:"They rehearse every step for fear of making a fatal error.", pron:"зэй рихөрс эври стэп фор фиэр оф мэйкинг э фэйтл эрор.", mn:"Үхлийн алдаа гаргах вий гэж алхам бүрээ давтдаг."},
      {en:"Engineers test the seal repeatedly lest it fail in space.", pron:"инжиниэрс тэст зэ сийл рипийтидли лэст ит фэйл ин спэйс.", mn:"Инженерүүд сансарт эвдрэх вий гэж лацыг дахин дахин шалгадаг."},
      {en:"The landing was so precise that no correction was needed.", pron:"зэ лэндинг воз соу присайс зэт ноу корэкшн воз нийдид.", mn:"Газардалт маш нарийн байсан тул засвар хэрэггүй байлаа."}
    ],
    exercises:[
      {q:"so as (not) to:", parts:["They plan carefully so as ", " waste fuel."], opts:["not to","to not"], a:0, fix:"so as NOT to waste."},
      {q:"with a view to:", parts:["We built it with a view to ", " Mars."], opts:["exploring","explore"], a:0, fix:"with a view to + -ing → exploring."},
      {q:"lest:", parts:["We test it lest it ", " in orbit."], opts:["fail","fails"], a:0, fix:"lest + үндсэн хэлбэр → fail."},
      {q:"such … that:", parts:["It was ", " a success that funding doubled."], opts:["such","so"], a:0, fix:"such + a + нэр → such a success."}
    ],
    speak:{ scene:'Сансрын нислэгийн бэлтгэл', turns:[
      {ruby:"Why do astronauts train for so long?", pron:"вай ду эстрэнотс трэйн фор соу лон?", mn:"Сансрын нисгэгчид яагаад тийм удаан бэлтгэдэг вэ?",
        choices:[{t:"They train for years so as to cope with the extreme conditions.",best:true,mn:"Хэт хатуу нөхцөлд дасахын тулд олон жил бэлтгэдэг."},{t:"They train for years so as to not fail.",best:false,fix:"so as NOT to fail (үгүйсгэл байрлал)."}]},
      {ruby:"What was the purpose of this mission?", pron:"вот воз зэ пөрпэс оф зис мишн?", mn:"Энэ нислэгийн зорилго юу байв?",
        choices:[{t:"The probe was sent with a view to mapping the entire surface.",best:true,mn:"Бүх гадаргууг зураглах зорилготойгоор зондыг илгээсэн."},{t:"The probe was sent with a view to map the surface.",best:false,fix:"with a view to MAPPING (-ing)."}]},
      {ruby:"Why so many repeated safety checks?", pron:"вай соу мэни рипийтид сэйфти чэкс?", mn:"Яагаад ийм олон дахин аюулгүйн шалгалт хийдэг вэ?",
        choices:[{t:"They check everything repeatedly lest a small fault prove fatal.",best:true,mn:"Жижиг эвдрэл үхэлд хүргэх вий гэж бүх зүйлийг дахин дахин шалгадаг."},{t:"They check everything lest a fault proves fatal.",best:false,fix:"lest a fault PROVE fatal (үндсэн хэлбэр)."}]}
    ]}
  },
  {
    id:'b2m5l5', title:"5.5 Хиймэл оюун", level:"B2 · М5",
    blurb:"Two models exist; the former is faster, the latter cheaper — Cohesion ⭐⭐",
    rule:{
      h:"Уялдаа ба заалт: this/that/such/the former–the latter; орлуулах one/so/do",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Давталтгүйгээр текстээ уялдуулах — заалтын үг, орлуулагч ашиглах.<br><br>
        <b>THIS / THAT / THESE = өмнөх санааг зааx:</b>
        <div style="margin:12px 0"><span class="tag">AI can now write code. THIS raises new questions. (this = өмнөх бүх санаа)</span><span class="tag">Data was leaked; THAT worried users.</span></div>
        <b>SUCH = «ийм төрлийн»:</b>
        <div style="margin:12px 0"><span class="tag">The system made errors. SUCH mistakes are costly.</span></div>
        <b>THE FORMER / THE LATTER = «эхнийх / сүүлийнх»:</b>
        <div style="margin:12px 0"><span class="tag">Rule-based AI and neural nets differ: THE FORMER follows logic, THE LATTER learns from data.</span></div>
        <b>Орлуулах ONE / ONES = давтагдах нэр:</b>
        <div style="margin:12px 0"><span class="tag">This algorithm is slow; I prefer the faster ONE.</span></div>
        <b>Орлуулах SO / DO = өгүүлбэр/үйл үг:</b>
        <div style="margin:12px 0"><span class="tag">Will AI replace jobs? Experts think SO. (= think that it will)</span><span class="tag">It learns faster than humans DO.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        algorithm /ˈælɡərɪðəm/ — алгоритм · neural network /ˈnjʊərəl/ — мэдрэлийн сүлжээ · machine learning /məˈʃiːn/ — машин сурах<br>
        dataset /ˈdeɪtəset/ — өгөгдлийн багц · model /ˈmɒdl/ — загвар · training /ˈtreɪnɪŋ/ — сургалт<br>
        automation /ˌɔːtəˈmeɪʃn/ — автоматжуулалт · prediction /prɪˈdɪkʃn/ — таамаглал · pattern /ˈpætərn/ — хэв маяг<br>
        artificial /ˌɑːtɪˈfɪʃl/ — хиймэл · intelligence /ɪnˈtelɪdʒəns/ — оюун ухаан · processing /ˈprəʊsesɪŋ/ — боловсруулалт<br>
        input /ˈɪnpʊt/ — оролт · output /ˈaʊtpʊt/ — гаралт · parameter /pəˈræmɪtər/ — параметр<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I prefer the faster» ✗ — нэр орлуулбал <b>the faster ONE</b>. «Experts think it» ✗ (утга тодорхойгүй) → <b>Experts think SO</b>. «the former … the first» ✗ → <b>the former … the latter</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хоёр зүйл дурдвал → THE FORMER (эхнийх), THE LATTER (сүүлийнх)».</p>`
    },
    phrases:[
      {en:"AI can now generate images, and this has alarmed many artists.", pron:"эй-ай кэн нау жэнэрэйт имижиз, энд зис хэз эламд мэни артистс.", mn:"Хиймэл оюун одоо зураг гаргаж чадах болсон нь олон уран бүтээлчийг сандаргасан."},
      {en:"There are two approaches; the former is safer, the latter faster.", pron:"зэр а ту эпроучиз; зэ формэр из сэйфэр, зэ лэтэр фастэр.", mn:"Хоёр арга бий; эхнийх нь аюулгүй, сүүлийнх нь хурдан."},
      {en:"This model is outdated, so we switched to a newer one.", pron:"зис модл из аутдэйтид, соу ви свичт ту э ньюэр ван.", mn:"Энэ загвар хуучирсан тул шинэ рүү шилжсэн."},
      {en:"Will AI surpass human reasoning? Many researchers believe so.", pron:"вил эй-ай сөрпас хьюмэн ризнинг? мэни рисөрчэрс билийв соу.", mn:"Хиймэл оюун хүний сэтгэлгээг давах уу? Олон судлаач тийм гэж үздэг."},
      {en:"Such errors, however rare, can undermine public trust.", pron:"сач эрорс, хауэвэр рээр, кэн андэрмайн паблик траст.", mn:"Ийм алдаа хэдий ховор ч олон нийтийн итгэлийг сүйтгэж болно."}
    ],
    exercises:[
      {q:"Орлуулах one:", parts:["This chip is slow; I want a faster ", "."], opts:["one","it"], a:0, fix:"Нэр орлуулбал → one."},
      {q:"the former/latter:", parts:["Logic and learning differ: the ", " uses rules."], opts:["former","latter"], a:0, fix:"Эхнийхийг заавал → the former."},
      {q:"Орлуулах so:", parts:["Will it replace jobs? Experts think ", "."], opts:["so","it"], a:0, fix:"think + so (өгүүлбэр орлуулна)."},
      {q:"such:", parts:["", " mistakes are extremely costly."], opts:["Such","So"], a:0, fix:"Нэрийн өмнө → Such mistakes."}
    ],
    speak:{ scene:'Хиймэл оюуны хэлэлцүүлэг', turns:[
      {ruby:"There are rule-based and learning systems — which is better?", pron:"зэр а рүл-бэйсд энд лөрнинг систэмз — вич из бэтэр?", mn:"Дүрэмд суурилсан ба сурдаг систем гэж бий — аль нь дээр вэ?",
        choices:[{t:"It depends. The former is predictable, whereas the latter adapts.",best:true,mn:"Байдлаас шалтгаална. Эхнийх нь урьдчилан таамаглах боломжтой, харин сүүлийнх нь дасан зохицдог."},{t:"It depends. The former is predictable, whereas the first adapts.",best:false,fix:"the former ... the LATTER (эхний/сүүлийн хос)."}]},
      {ruby:"Do you think AI will take over creative jobs?", pron:"ду ю синк эй-ай вил тэйк оувэр криэйтив жобс?", mn:"Хиймэл оюун бүтээлч ажлыг эзэлнэ гэж бодож байна уу?",
        choices:[{t:"Some experts believe so, but I'm not fully convinced.",best:true,mn:"Зарим мэргэжилтэн тийм гэж үздэг ч би бүрэн итгэдэггүй."},{t:"Some experts believe it, but I'm not convinced.",best:false,fix:"believe SO (өгүүлбэрийг орлуулна)."}]},
      {ruby:"That old model keeps crashing though.", pron:"зэт оулд модл кийпс крэшинг зоу.", mn:"Тэр хуучин загвар байнга гацдаг шүү.",
        choices:[{t:"I know. This is exactly why we should upgrade to a newer one.",best:true,mn:"Мэдэж байна. Яг тийм болохоор л шинэ рүү шинэчлэх ёстой."},{t:"I know. This is why we should upgrade to a newer.",best:false,fix:"a newer ONE (нэр орлуулагч)."}]}
    ]}
  },
  {
    id:'b2m5l6', title:"5.6 Эрүүл мэндийн шинжлэх ухаан", level:"B2 · М5",
    blurb:"The heart is a muscle; a doctor can help — Generic reference ⭐⭐⭐",
    rule:{
      h:"Тодотгогч ба ерөнхийлсөн заалт: articles for generalisation",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Ерөнхий санаа хэлэхэд ямар артикль сонгохыг эзэмших — B2-ийн нарийн ялгаа.<br><br>
        <b>ЗЭРО артикль + олон тоо = ерөнхий бүлэг (хамгийн түгээмэл):</b>
        <div style="margin:12px 0"><span class="tag">Antibiotics kill bacteria. (ерөнхийдөө)</span><span class="tag">Vaccines save lives.</span></div>
        <b>THE + ганц тоо = бүхэл ангиллыг төлөөлөх (албан ёсны/шинжлэх ухаан):</b>
        <div style="margin:12px 0"><span class="tag">THE heart pumps blood. (зүрх гэдэг эрхтэн ерөнхийдөө)</span><span class="tag">THE elephant is the largest land animal.</span></div>
        <b>A / AN + ганц тоо = «аль ч нэг» (= any):</b>
        <div style="margin:12px 0"><span class="tag">A doctor must respect patients. (аль ч эмч)</span><span class="tag">A cell has a nucleus.</span></div>
        <b>Тодорхой нэгжийг заах бол THE:</b>
        <div style="margin:12px 0"><span class="tag">THE patient in room 4 is stable. (тодорхой нэг өвчтөн)</span></div>
        <b>Тоолшгүй ойлголт = зэро артикль:</b>
        <div style="margin:12px 0"><span class="tag">Research shows that sleep improves memory. (Sleep, research — ерөнхий)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        immune system /ɪˈmjuːn/ — дархлааны тогтолцоо · antibody /ˈæntibɒdi/ — эсрэгбие · pathogen /ˈpæθədʒən/ — өвчин үүсгэгч<br>
        diagnosis /ˌdaɪəɡˈnəʊsɪs/ — оношилгоо · symptom /ˈsɪmptəm/ — шинж тэмдэг · chronic /ˈkrɒnɪk/ — архаг<br>
        genome /ˈdʒiːnəʊm/ — геном · cell /sel/ — эс · tissue /ˈtɪʃuː/ — эд · organ /ˈɔːɡən/ — эрхтэн<br>
        infection /ɪnˈfekʃn/ — халдвар · metabolism /məˈtæbəlɪzəm/ — бодисын солилцоо · therapy /ˈθerəpi/ — эмчилгээ<br>
        clinical /ˈklɪnɪkl/ — эмнэлзүйн · dosage /ˈdəʊsɪdʒ/ — тун<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The vaccines save lives» ✗ (ерөнхий бол зэро) → <b>Vaccines save lives</b>. «Heart pumps blood» ✗ → <b>THE heart</b> эсвэл <b>The heart is a muscle</b>. «Sleep improves the memory» ✗ → <b>improves memory</b> (ерөнхий).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ерөнхий бүлэг → зэро + олон тоо (хамгийн байгалийн). Ангиллыг төлөөлбөл → THE + ганц. Аль ч нэг → A + ганц».</p>`
    },
    phrases:[
      {en:"Antibiotics have no effect on viruses, only on bacteria.", pron:"энтибайотикс хэв ноу ифэкт он вайрэсиз, оунли он бэктириэ.", mn:"Антибиотик вирүст нөлөөлдөггүй, зөвхөн бактерид үйлчилдэг."},
      {en:"The immune system defends the body against pathogens.", pron:"зэ имьюн систэм дифэндз зэ боди эгэнст пэсэжэнз.", mn:"Дархлааны тогтолцоо биеийг өвчин үүсгэгчээс хамгаалдаг."},
      {en:"A cell cannot survive without a source of energy.", pron:"э сэл кэннот сөрвайв визаут э сорс оф энэржи.", mn:"Эс эрчим хүчний эх үүсвэргүйгээр амьд үлдэж чадахгүй."},
      {en:"Research suggests that regular exercise strengthens immunity.", pron:"рисөрч сажэстс зэт рэгьюлэр эксэрсайз стрэнгсэнз имьюнити.", mn:"Судалгаанаас үзэхэд тогтмол дасгал хөдөлгөөн дархлааг бэхжүүлдэг."},
      {en:"The heart is essentially a muscle that never rests.", pron:"зэ харт из исэншиэли э масл зэт нэвэр рэстс.", mn:"Зүрх бол үндсэндээ хэзээ ч амардаггүй булчин юм."}
    ],
    exercises:[
      {q:"Ерөнхий бүлэг:", parts:["", " save millions of lives every year."], opts:["Vaccines","The vaccines"], a:0, fix:"Ерөнхий → зэро + олон тоо."},
      {q:"Ангиллыг төлөөлөх:", parts:["", " heart pumps blood around the body."], opts:["The","A"], a:0, fix:"Шинжлэх ухааны ерөнхий → The heart."},
      {q:"Аль ч нэг:", parts:["", " doctor must always respect the patient."], opts:["A","The"], a:0, fix:"Аль ч эмч → A doctor (= any)."},
      {q:"Тоолшгүй ерөнхий:", parts:["Sleep improves ", "."], opts:["memory","the memory"], a:0, fix:"Ерөнхий ойлголт → зэро артикль."}
    ],
    speak:{ scene:'Эрүүл мэндийн лекц', turns:[
      {ruby:"Can antibiotics cure the flu?", pron:"кэн энтибайотикс кьюэр зэ флу?", mn:"Антибиотик томуу эмчилж чадах уу?",
        choices:[{t:"No. Antibiotics work on bacteria, not on viruses like the flu.",best:true,mn:"Үгүй. Антибиотик бактерид үйлчилдэг, томуу зэрэг вирүст биш."},{t:"No. The antibiotics work on the bacteria, not viruses.",best:false,fix:"Antibiotics ... bacteria (ерөнхий → зэро артикль)."}]},
      {ruby:"How does the body fight infection?", pron:"хау даз зэ боди файт инфэкшн?", mn:"Бие халдвартай яаж тэмцдэг вэ?",
        choices:[{t:"The immune system produces antibodies that target pathogens.",best:true,mn:"Дархлааны тогтолцоо өвчин үүсгэгчийг онилдог эсрэгбие үйлдвэрлэдэг."},{t:"Immune system produces the antibodies that target pathogens.",best:false,fix:"THE immune system ... antibodies (тодорхой систем, ерөнхий эсрэгбие)."}]},
      {ruby:"What's the best general advice for staying healthy?", pron:"вотс зэ бэст жэнэрэл эдвайс фор стэйинг хэлси?", mn:"Эрүүл байхад ерөнхийд нь ямар зөвлөгөө вэ?",
        choices:[{t:"Sleep and exercise improve health more than any medicine.",best:true,mn:"Нойр, дасгал хөдөлгөөн эрүүл мэндийг ямар ч эмнээс илүү сайжруулдаг."},{t:"The sleep and the exercise improve the health.",best:false,fix:"Sleep and exercise improve health (ерөнхий → зэро)."}]}
    ]}
  },
  {
    id:'b2m5l7', title:"5.7 Инженерчлэл", level:"B2 · М5",
    blurb:"The bridge needs reinforcing; it's worth testing — Gerund/infinitive ⭐⭐⭐",
    rule:{
      h:"Дэвшилтэт gerund/infinitive: need doing, worth doing, утга өөрчилдөг үйл үгс",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Идэвхгүй утгатай <b>-ing</b> болон утга өөрчилдөг үйл үгсийг эзэмших.<br><br>
        <b>NEED / WANT / REQUIRE + -ing = идэвхгүй утга:</b>
        <div style="margin:12px 0"><span class="tag">The engine NEEDS repairing. (= needs to be repaired)</span><span class="tag">These figures WANT checking.</span></div>
        <b>WORTH + -ing / NO USE + -ing:</b>
        <div style="margin:12px 0"><span class="tag">This design is WORTH testing. (= worth being tested)</span><span class="tag">It's NO USE arguing with the data.</span></div>
        <b>Утга өөрчилдөг үйл үгс — REMEMBER / FORGET:</b>
        <div style="margin:12px 0"><span class="tag">REMEMBER TO calibrate it. (дараа хийх ажил)</span><span class="tag">I REMEMBER calibrating it. (өмнө хийсэн дурсамж)</span></div>
        <b>STOP / TRY / REGRET:</b>
        <div style="margin:12px 0"><span class="tag">STOP TO check = зогсоод шалгах / STOP checking = шалгахаа болих</span><span class="tag">TRY TO lift = оролдох / TRY lifting = туршиж үзэх</span><span class="tag">REGRET TO inform = харамсаж мэдэгдэх / REGRET doing = хийснээ харамсах</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        engineering /ˌendʒɪˈnɪərɪŋ/ — инженерчлэл · structure /ˈstrʌktʃər/ — бүтэц · load /ləʊd/ — ачаалал<br>
        stress /stres/ — хүчдэл · tension /ˈtenʃn/ — таталцах хүч · beam /biːm/ — тулгуур дам нуруу<br>
        blueprint /ˈbluːprɪnt/ — зураг төсөл · component /kəmˈpəʊnənt/ — эд анги · reinforce /ˌriːɪnˈfɔːrs/ — бэхжүүлэх<br>
        durability /ˌdjʊərəˈbɪləti/ — бат бөх чанар · efficiency /ɪˈfɪʃnsi/ — үр ашиг · precision /prɪˈsɪʒn/ — нарийвчлал<br>
        assemble /əˈsembl/ — угсрах · maintenance /ˈmeɪntənəns/ — засвар үйлчилгээ · specification /ˌspesɪfɪˈkeɪʃn/ — үзүүлэлт<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «The bridge needs to reinforce» ✗ — идэвхгүй бол <b>needs reinforcing</b> эсвэл <b>needs to be reinforced</b>. «worth to test» ✗ → <b>worth testING</b>. «Stop to smoke = зогсоод татах» — «тамхиа болих» бол <b>stop smoking</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «NEED / WORTH → -ING (идэвхгүй)». «REMEMBER TO = ирээдүй, REMEMBER -ING = дурсамж».</p>`
    },
    phrases:[
      {en:"The old bridge needs reinforcing before winter.", pron:"зэ оулд бриж нийдз риинфорсинг бифор винтэр.", mn:"Хуучин гүүрийг өвлийн өмнө бэхжүүлэх шаардлагатай."},
      {en:"This prototype is definitely worth testing under load.", pron:"зис проутотайп из дэфинитли вөрс тэстинг андэр лоуд.", mn:"Энэ загварыг ачаалал дор туршиж үзэх нь гарцаагүй үнэ цэнэтэй."},
      {en:"Remember to check the tension before you start welding.", pron:"римэмбэр ту чэк зэ тэншн бифор ю старт вэлдинг.", mn:"Гагнаж эхлэхээсээ өмнө таталцах хүчийг шалгахаа санаарай."},
      {en:"I distinctly remember calibrating that sensor last week.", pron:"ай дистинктли римэмбэр кэлибрэйтинг зэт сэнсор ласт вийк.", mn:"Тэр мэдрүүрийг өнгөрсөн долоо хоногт тохируулсанаа тодхон санаж байна."},
      {en:"It's no use ignoring the stress readings on the beam.", pron:"итс ноу юс игнорин зэ стрэс рийдингз он зэ бийм.", mn:"Дам нурууны хүчдэлийн заалтыг үл тоох нь ямар ч ашиггүй."}
    ],
    exercises:[
      {q:"Идэвхгүй -ing:", parts:["The engine needs ", " urgently."], opts:["repairing","to repair"], a:0, fix:"need + идэвхгүй → needs repairing."},
      {q:"worth:", parts:["This idea is worth ", "."], opts:["exploring","to explore"], a:0, fix:"worth + -ing → exploring."},
      {q:"remember (ирээдүй):", parts:["Remember ", " the bolts."], opts:["to tighten","tightening"], a:0, fix:"Дараа хийх ажил → remember to."},
      {q:"stop утга:", parts:["He stopped ", " to answer his phone."], opts:["working","to work"], a:0, fix:"Болих → stopped working (дараа нь to answer)."}
    ],
    speak:{ scene:'Барилгын хяналт шалгалт', turns:[
      {ruby:"What's the condition of the main support?", pron:"вотс зэ кондишн оф зэ мэйн сэпорт?", mn:"Гол тулгуурын байдал ямар байна?",
        choices:[{t:"It's worn out. The whole beam needs replacing this month.",best:true,mn:"Элэгдсэн. Бүх дам нурууг энэ сард солих хэрэгтэй."},{t:"It's worn out. The beam needs to replace this month.",best:false,fix:"needs REPLACING (эсвэл to be replaced)."}]},
      {ruby:"Should we run the load test again?", pron:"шүд ви ран зэ лоуд тэст эгэн?", mn:"Ачааллын туршилтыг дахин хийх үү?",
        choices:[{t:"Yes, it's definitely worth testing once more before sign-off.",best:true,mn:"Тийм, баталгаажуулахаас өмнө дахин нэг туршиж үзэх нь гарцаагүй үнэ цэнэтэй."},{t:"Yes, it's worth to test once more.",best:false,fix:"worth TESTING (-ing)."}]},
      {ruby:"Did you calibrate the sensors already?", pron:"дид ю кэлибрэйт зэ сэнсорз олрэди?", mn:"Мэдрүүрүүдийг аль хэдийн тохируулсан уу?",
        choices:[{t:"Yes, I remember calibrating them yesterday afternoon.",best:true,mn:"Тийм, тэдгээрийг өчигдөр үдээс хойш тохируулсанаа санаж байна."},{t:"Yes, I remember to calibrate them yesterday.",best:false,fix:"remember CALIBRATING (өнгөрсөн дурсамж)."}]}
    ]}
  },
  {
    id:'b2m5l8', title:"5.8 Мэдээллийн технологи", level:"B2 · М5",
    blurb:"We must guard against breaches and comply with rules — Dependent prepositions ⭐⭐",
    rule:{
      h:"Хамаарах угтвар үг ба хэлц үйл үгс (advanced)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тодорхой үйл үг/нэр үгийн ард заавал орох угтвар үгсийг эзэмших.<br><br>
        <b>Үйл үг + угтвар (тогтмол хосууд):</b>
        <div style="margin:12px 0"><span class="tag">comply WITH regulations · guard AGAINST attacks · rely ON software</span><span class="tag">invest IN security · result IN losses · benefit FROM automation</span></div>
        <b>Нэр үг + угтвар:</b>
        <div style="margin:12px 0"><span class="tag">a solution TO the problem · access TO data · a demand FOR privacy</span><span class="tag">an increase IN attacks · the reason FOR the delay</span></div>
        <b>Тэмдэг нэр + угтвар:</b>
        <div style="margin:12px 0"><span class="tag">vulnerable TO hacking · aware OF the risks · dependent ON the network</span></div>
        <b>Гурван хэсэгт хэлц үйл үг (phrasal-prepositional):</b>
        <div style="margin:12px 0"><span class="tag">come up WITH a solution · catch up ON updates · look forward TO launching</span><span class="tag">put up WITH bugs · keep up WITH threats · cut down ON spam</span></div>
        <b>Угтварын ард → -ing:</b>
        <div style="margin:12px 0"><span class="tag">They succeeded IN encrypting the files. (in + -ing)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        cybersecurity /ˈsaɪbərsɪkjʊərəti/ — кибер аюулгүй байдал · encryption /ɪnˈkrɪpʃn/ — шифрлэлт · firewall /ˈfaɪərwɔːl/ — галт хана<br>
        breach /briːtʃ/ — зөрчил алдагдал · malware /ˈmælweər/ — хортой програм · vulnerability /ˌvʌlnərəˈbɪləti/ — эмзэг байдал<br>
        server /ˈsɜːrvər/ — сервер · database /ˈdeɪtəbeɪs/ — өгөгдлийн сан · bandwidth /ˈbændwɪdθ/ — зурвасын өргөн<br>
        interface /ˈɪntərfeɪs/ — интерфейс · protocol /ˈprəʊtəkɒl/ — протокол · backup /ˈbækʌp/ — нөөц хуулбар<br>
        authentication /ɔːˌθentɪˈkeɪʃn/ — баталгаажуулалт · patch /pætʃ/ — засвар · latency /ˈleɪtənsi/ — саатал<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «comply to rules» ✗ → <b>comply WITH</b>. «depend of» ✗ → <b>depend ON</b>. «a solution of the problem» ✗ → <b>a solution TO</b>. «vulnerable of» ✗ → <b>vulnerable TO</b>. «look forward to launch» ✗ → <b>look forward to launchING</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Угтвар үгийг үйл үгтэй хамт цээжил» — comply WITH, rely ON, look forward TO + ING.</p>`
    },
    phrases:[
      {en:"All companies must comply with the new data-protection laws.", pron:"ол кампаниз маст комплай виз зэ ню дэйта-протэкшн лоз.", mn:"Бүх компани өгөгдөл хамгаалах шинэ хуулийг дагаж мөрдөх ёстой."},
      {en:"We need to guard against increasingly sophisticated attacks.", pron:"ви нийд ту гард эгэнст инкрийсинли софистикэйтид этэкс.", mn:"Бид улам боловсронгуй болж буй халдлагаас сэргийлэх хэрэгтэй."},
      {en:"Our whole system is dependent on a stable network connection.", pron:"аур хоул систэм из дипэндэнт он э стэйбл нэтворк конэкшн.", mn:"Манай бүх систем тогтвортой сүлжээний холболтоос хамааралтай."},
      {en:"The engineers finally came up with a workable solution.", pron:"зэ инжиниэрс файнэли кэйм ап виз э воркэбл сэлюшн.", mn:"Инженерүүд эцэст нь боломжтой шийдэл олж гаргалаа."},
      {en:"Older software is highly vulnerable to malware infections.", pron:"оулдэр софтвээр из хайли валнэрэбл ту мэлвээр инфэкшнз.", mn:"Хуучин програм хангамж хортой програмын халдварт нэн эмзэг."}
    ],
    exercises:[
      {q:"comply:", parts:["Firms must comply ", " the rules."], opts:["with","to"], a:0, fix:"comply WITH."},
      {q:"noun + prep:", parts:["We found a solution ", " the problem."], opts:["to","of"], a:0, fix:"a solution TO."},
      {q:"adj + prep:", parts:["The server is vulnerable ", " attacks."], opts:["to","of"], a:0, fix:"vulnerable TO."},
      {q:"prep + -ing:", parts:["They succeeded ", " the data."], opts:["in encrypting","to encrypt"], a:0, fix:"succeed IN + -ing."}
    ],
    speak:{ scene:'Кибер аюулгүй байдлын хурал', turns:[
      {ruby:"How do we handle the new privacy regulations?", pron:"хау ду ви хэндл зэ ню прайвэси рэгьюлэйшнз?", mn:"Хувийн нууцын шинэ журмыг яаж шийдэх вэ?",
        choices:[{t:"Every department has to comply with them by the end of the quarter.",best:true,mn:"Улирлын эцэс гэхэд алба бүр тэдгээрийг дагаж мөрдөх ёстой."},{t:"Every department has to comply to them by the quarter.",best:false,fix:"comply WITH them."}]},
      {ruby:"Our servers keep getting attacked. Any ideas?", pron:"аур сөрвэрз кийп гэтин этэкт. эни айдиэз?", mn:"Манай сервер байнга халдлагад өртдөг. Санаа бий юу?",
        choices:[{t:"The team came up with a plan to guard against future breaches.",best:true,mn:"Баг ирээдүйн зөрчлөөс сэргийлэх төлөвлөгөө боловсруулсан."},{t:"The team came up a plan to guard from breaches.",best:false,fix:"came up WITH a plan ... guard AGAINST."}]},
      {ruby:"Why did the old system fail so badly?", pron:"вай дид зэ оулд систэм фэйл соу бэдли?", mn:"Хуучин систем яагаад тийм ноцтой унасан бэ?",
        choices:[{t:"It was outdated and highly vulnerable to malware.",best:true,mn:"Хуучирсан бөгөөд хортой програмд нэн эмзэг байсан."},{t:"It was outdated and vulnerable of malware.",best:false,fix:"vulnerable TO malware."}]}
    ]}
  },
  {
    id:'b2m5l9', title:"5.9 Ёс зүй", level:"B2 · М5",
    blurb:"It would seem that gene editing tends to raise concerns — Hedging ⭐⭐",
    rule:{
      h:"Болгоомжтой, эрдэм шинжилгээний хэллэг (Hedging)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хатуу батлахаас зайлсхийж, зөөлөн, эрдэм шинжилгээний өнгө аяс өгөх.<br><br>
        <b>TEND TO / APPEAR TO / SEEM TO = «… хандлагатай / … бололтой»:</b>
        <div style="margin:12px 0"><span class="tag">New technologies TEND TO outpace ethical rules.</span><span class="tag">The data APPEARS TO support the theory.</span></div>
        <b>IT WOULD SEEM / IT WOULD APPEAR THAT (нэн зөөлөн):</b>
        <div style="margin:12px 0"><span class="tag">IT WOULD SEEM THAT public opinion is divided.</span></div>
        <b>Магадлалын дайвар үгс — тоо хэмжээг зөөлрүүлэх:</b>
        <div style="margin:12px 0"><span class="tag">This is, BY AND LARGE, a positive development.</span><span class="tag">Results are, TO SOME EXTENT, inconclusive.</span></div>
        <b>Модаль үйл үгээр зөөлрүүлэх (may / might / could):</b>
        <div style="margin:12px 0"><span class="tag">Gene editing MAY raise serious ethical questions.</span></div>
        <b>Ерөнхий заалт зөөлрүүлэгч:</b>
        <div style="margin:12px 0"><span class="tag">In general · on the whole · arguably · relatively · somewhat · a tendency to</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        ethics /ˈeθɪks/ — ёс зүй · dilemma /dɪˈlemə/ — бэрхшээлт сонголт · consent /kənˈsent/ — зөвшөөрөл<br>
        privacy /ˈprɪvəsi/ — хувийн нууц · accountability /əˌkaʊntəˈbɪləti/ — хариуцлага · transparency /trænsˈpærənsi/ — ил тод байдал<br>
        integrity /ɪnˈteɡrəti/ — шударга байдал · manipulation /məˌnɪpjuˈleɪʃn/ — заль мэх · regulation /ˌreɡjuˈleɪʃn/ — зохицуулалт<br>
        bias /ˈbaɪəs/ — хазайлт · surveillance /sərˈveɪləns/ — хяналт · exploitation /ˌeksplɔɪˈteɪʃn/ — мөлжлөг<br>
        moral /ˈmɒrəl/ — ёс суртахууны · unintended /ˌʌnɪnˈtendɪd/ — санамсаргүй · safeguard /ˈseɪfɡɑːrd/ — хамгаалалт<br></div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It seems that is divided» ✗ → <b>It would seem THAT public opinion is divided</b>. «tend outpace» ✗ → <b>tend TO outpace</b>. Хэт хатуу «AI is dangerous» — эрдэм шинжилгээнд <b>AI may pose risks</b> гэж зөөлрүүл.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Батлахаас өмнө зөөлрүүлэгч нэм: tend to / appear to / it would seem / may».</p>`
    },
    phrases:[
      {en:"New technologies tend to develop faster than the laws around them.", pron:"ню тэкнолэжиз тэнд ту дивэлоп фастэр зэн зэ лоз эраунд зэм.", mn:"Шинэ технологи эргэн тойрны хуулиасаа хурдан хөгжих хандлагатай."},
      {en:"It would seem that public opinion on cloning remains divided.", pron:"ит вүд сийм зэт паблик опиньон он клоунин римэйнз дивайдид.", mn:"Хувилах талаарх олон нийтийн санаа бодол хуваагдмал хэвээр байгаа бололтой."},
      {en:"The evidence appears to support the researchers' claims.", pron:"зэ эвидэнс эпиэрз ту сэпорт зэ рисөрчэрз клэймз.", mn:"Нотолгоо судлаачдын дүгнэлтийг дэмжиж байгаа бололтой."},
      {en:"By and large, the benefits seem to outweigh the risks.", pron:"бай энд лаж, зэ бэнэфитс сийм ту аутвэй зэ рискс.", mn:"Ерөнхийдөө ашиг тус нь эрсдэлээ давж байгаа бололтой."},
      {en:"Such experiments may, to some extent, raise ethical concerns.", pron:"сач иксперимэнтс мэй, ту сам икстэнт, рэйз этикл консөрнз.", mn:"Ийм туршилтууд тодорхой хэмжээгээр ёс зүйн асуудал үүсгэж болзошгүй."}
    ],
    exercises:[
      {q:"tend to:", parts:["Technology tends ", " outpace regulation."], opts:["to","–"], a:0, fix:"tend TO + үйл үг."},
      {q:"It would seem:", parts:["It would seem ", " opinion is divided."], opts:["that","to"], a:0, fix:"It would seem THAT + өгүүлбэр."},
      {q:"appear to:", parts:["The data appears ", " the theory."], opts:["to support","supporting"], a:0, fix:"appear TO + үйл үг."},
      {q:"Зөөлрүүлэх:", parts:["This ", " raise ethical concerns."], opts:["may","definitely will"], a:0, fix:"Болгоомжтой хэллэг → may."}
    ],
    speak:{ scene:'Ёс зүйн хэлэлцүүлэг', turns:[
      {ruby:"Is gene editing dangerous, in your view?", pron:"из жийн эдитин дэйнжэрэс, ин ёр вью?", mn:"Таны бодлоор ген засварлах аюултай юу?",
        choices:[{t:"It would seem that it may pose risks we don't yet fully understand.",best:true,mn:"Бидний одоохондоо бүрэн ойлгоогүй эрсдэл дагуулж болзошгүй бололтой."},{t:"It seems it is dangerous absolutely for everyone.",best:false,fix:"It would seem that it MAY pose risks (зөөлрүүл)."}]},
      {ruby:"Does the research support the ban?", pron:"даз зэ рисөрч сэпорт зэ бэн?", mn:"Судалгаа хоригийг дэмждэг үү?",
        choices:[{t:"By and large, the evidence appears to point in that direction.",best:true,mn:"Ерөнхийдөө нотолгоо тэр чиглэлийг зааж байгаа бололтой."},{t:"The evidence proves totally that direction is right.",best:false,fix:"appears to point (эрдэм шинжилгээнд зөөлрүүл)."}]},
      {ruby:"So what should regulators do next?", pron:"соу вот шүд рэгьюлэйторз ду нэкст?", mn:"Тэгэхээр зохицуулагчид дараа нь юу хийх ёстой вэ?",
        choices:[{t:"They tend to move slowly, but arguably they should act sooner.",best:true,mn:"Тэд удаан хөдөлдөг ч магадгүй эрт арга хэмжээ авах ёстой."},{t:"They tend move slowly, but they should act.",best:false,fix:"tend TO move slowly."}]}
    ]}
  },
  {
    id:'b2m5l10', title:"5.10 Модулийн төсөл", level:"B2 · М5",
    blurb:"🏆 Шинжлэх ухааны хэлэлцүүлгийн эссэ бичих",
    rule:{
      h:"Давтлага: B2 Модуль 5-ын бүх дүрэм нэгтгэх",
      html:`<b>🎯 Зорилго:</b> Модуль 5-ын бүх бүтцийг нэгтгэн, жинхэнэ B2 түвшний шинжлэх ухааны хэлэлцүүлгийн эссэ бүтээх.<br><br>
        <b>Модуль 5-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">It is claimed THAT… / X is believed TO HAVE… ⭐⭐⭐</span><span class="tag">BUT FOR the funding, it would have failed ⭐⭐⭐</span><span class="tag">HOWEVER carefully… / GRANTED that… ⭐⭐⭐</span><span class="tag">SO AS TO / WITH A VIEW TO / LEST ⭐⭐⭐</span><span class="tag">the former … the latter / think SO ⭐⭐</span><span class="tag">Vaccines save lives / THE heart / A doctor ⭐⭐⭐</span><span class="tag">needs reinforcing / worth testing ⭐⭐⭐</span><span class="tag">comply WITH / vulnerable TO ⭐⭐</span><span class="tag">tends to / it would seem THAT ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Шинжлэх ухааны эссэ (Should AI be regulated? 20+ өгүүлбэр):</b> Загвар:<br>
        <i>It is often claimed that artificial intelligence will transform every aspect of modern life. Given the pace of recent breakthroughs, this seems hard to dispute. However carefully we design these systems, unintended consequences appear to be inevitable. But for strict oversight, powerful models could easily be misused. There are said to be significant risks to privacy, and such concerns are worth taking seriously. Granted that innovation must not be stifled, some regulation is surely necessary. Developers tend to prioritise speed, whereas regulators focus on safety; the former drives progress, while the latter protects the public. Companies should be required to comply with clear ethical standards, if only so as to maintain public trust. Without transparency, users would remain vulnerable to manipulation. It would seem, therefore, that the wisest course is balanced regulation — firm enough to guard against harm, yet flexible enough to encourage discovery. By and large, technology needs guiding, not halting.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 эрдэм шинжилгээний эссэгийн 4 давхар: <b>Тайлан</b> (It is claimed that) → <b>Буулт</b> (Granted that, However carefully) → <b>Далд нөхцөл</b> (But for, Without) → <b>Болгоомжтой дүгнэлт</b> (It would seem that, tends to).</p>`
    },
    phrases:[
      {en:"It is often claimed that AI will transform every industry.", pron:"ит из офн клэймд зэт эй-ай вил трансформ эври индастри.", mn:"Хиймэл оюун салбар бүрийг өөрчилнө гэж байнга үздэг."},
      {en:"But for strict oversight, powerful models could be misused.", pron:"бат фор стрикт оувэрсайт, пауэрфул модлз күд би миссьюзд.", mn:"Хатуу хяналт байгаагүй бол хүчирхэг загваруудыг буруугаар ашиглаж болзошгүй."},
      {en:"Granted that innovation matters, some regulation is still necessary.", pron:"грантид зэт инэвэйшн мэтэрз, сам рэгьюлэйшн из стил нэсэсэри.", mn:"Шинэчлэл чухал гэдгийг хүлээн зөвшөөрье, гэхдээ зарим зохицуулалт хэрэгтэй хэвээр."},
      {en:"Companies must comply with clear ethical standards.", pron:"кампаниз маст комплай виз клиэр этикл стэндэрдз.", mn:"Компаниуд тодорхой ёс зүйн стандартыг дагаж мөрдөх ёстой."},
      {en:"It would seem that balanced regulation is the wisest course.", pron:"ит вүд сийм зэт бэлэнст рэгьюлэйшн из зэ вайзэст корс.", mn:"Тэнцвэртэй зохицуулалт хамгийн ухаалаг зам бололтой."}
    ],
    exercises:[
      {q:"Давтлага (тайлан):", parts:["It is claimed ", " AI transforms work."], opts:["that","to"], a:0, fix:"It is claimed THAT + өгүүлбэр."},
      {q:"Давтлага (нөхцөл):", parts:["But for oversight, it ", " be misused."], opts:["could","can"], a:0, fix:"But for → could (нөхцөлт)."},
      {q:"Давтлага (буулт):", parts:["", " carefully we design it, risks remain."], opts:["However","Whatever"], a:0, fix:"However + adv → However carefully."},
      {q:"Давтлага (болгоомж):", parts:["It would ", " that opinion is divided."], opts:["seem","seems"], a:0, fix:"It would SEEM that (үндсэн хэлбэр)."}
    ],
    speak:{ scene:'🏆 Төсөл: Шинжлэх ухааны хэлэлцүүлэг', turns:[
      {ruby:"Should artificial intelligence be regulated?", pron:"шүд артифишл интэлижэнс би рэгьюлэйтид?", mn:"Хиймэл оюун ухааныг зохицуулах ёстой юу?",
        choices:[{t:"It is widely claimed that AI is powerful, and, granted that innovation matters, some oversight is surely needed.",best:true,mn:"Хиймэл оюун хүчирхэг гэж түгээмэл үздэг, шинэчлэл чухал гэдгийг хүлээн зөвшөөрч байгаа ч зарим хяналт гарцаагүй хэрэгтэй."},{t:"AI is powerful. I think it is dangerous for everyone totally.",best:false,fix:"It is claimed THAT… granted that… (тайлан+буулт бүтэц ашигла)."}]},
      {ruby:"But wouldn't regulation slow down progress?", pron:"бат вүднт рэгьюлэйшн слоу даун прогрэс?", mn:"Гэхдээ зохицуулалт хөгжлийг удаашруулахгүй гэж үү?",
        choices:[{t:"However fast progress is, but for clear rules, models could easily be misused.",best:true,mn:"Хөгжил хичнээн хурдан ч, тодорхой дүрэмгүй бол загваруудыг амархан буруугаар ашиглаж болзошгүй."},{t:"However progress is fast, without rules models misused.",best:false,fix:"However FAST progress is, BUT FOR rules… COULD be misused."}]},
      {ruby:"So what's your final recommendation?", pron:"соу вотс ёр файнл рэкэмэндэйшн?", mn:"Тэгэхээр таны эцсийн зөвлөмж юу вэ?",
        choices:[{t:"It would seem that balanced regulation, designed so as to guard against harm, is the wisest course.",best:true,mn:"Хор хөнөөлөөс сэргийлэх зорилготой тэнцвэртэй зохицуулалт хамгийн ухаалаг зам бололтой."},{t:"Balanced regulation is best for guard against harm, definitely.",best:false,fix:"It would seem that… so as to guard against harm (болгоомж+зорилго бүтэц)."}]}
    ]}
  },
  {
    id:'b2m6l1', title:"6.1 Засгийн газар", level:"B2 · М6",
    blurb:"They accused the minister of lying — Reporting verb patterns ⭐⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Мэдээлэх үйл үгийн бүтэц (accuse / blame / admit + -ing)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Улс төрийн ярианд <b>хэн юуг хэн дээр буруутгаж, магтаж, сэрэмжлүүлж</b> байгааг зөв бүтцээр илэрхийлэх.<br><br>
        <b>1) угтвар үг + -ing:</b>
        <div style="margin:12px 0"><span class="tag">They ACCUSED the minister OF LYING to parliament.</span><span class="tag">The opposition BLAMED the government FOR RAISING taxes.</span></div>
        <b>2) praise / warn:</b>
        <div style="margin:12px 0"><span class="tag">Critics PRAISED the president FOR TACKLING corruption.</span><span class="tag">Advisers WARNED the cabinet AGAINST INTERVENING.</span></div>
        <b>3) admit / deny (угтваргүй, шууд -ing):</b>
        <div style="margin:12px 0"><span class="tag">The official ADMITTED MISLEADING the public.</span><span class="tag">She DENIED ACCEPTING any bribe.</span></div>
        <b>Бүтцийн зураг:</b>
        <div style="margin:12px 0"><span class="tag">accuse sb OF · blame sb FOR · praise sb FOR · warn sb AGAINST · congratulate sb ON</span><span class="tag">admit / deny + -ing (угтваргүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        government /ˈɡʌvərnmənt/ — засгийн газар · cabinet /ˈkæbɪnət/ — засгийн газрын танхим · minister /ˈmɪnɪstər/ — сайд<br>
        parliament /ˈpɑːrləmənt/ — парламент · policy /ˈpɑːləsi/ — бодлого · corruption /kəˈrʌpʃn/ — авлига<br>
        accountable /əˈkaʊntəbl/ — хариуцлага хүлээх · transparency /trænsˈpærənsi/ — ил тод байдал · reform /rɪˈfɔːrm/ — шинэчлэл<br>
        official /əˈfɪʃl/ — албан тушаалтан · authority /əˈθɔːrəti/ — эрх мэдэл · budget /ˈbʌdʒɪt/ — төсөв<br>
        allegation /ˌæləˈɡeɪʃn/ — буруутгал · integrity /ɪnˈteɡrəti/ — шударга ёс · mandate /ˈmændeɪt/ — бүрэн эрх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «accuse sb FOR lying» ✗ → <b>accuse sb OF lying</b> ✓. Мөн «blame sb OF» ✗ → <b>blame sb FOR</b> ✓. «admit TO mislead» ✗ → <b>admit MISLEADING</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «accuse=OF, blame/praise=FOR, warn=AGAINST, admit/deny=шууд -ing». Угтварын дараа ҮРГЭЛЖ -ing.</p>`
    },
    phrases:[
      {en:"The opposition accused the government of hiding the truth.", pron:"зэ опэзишн экьюзд зэ гавэрнмэнт ов хайдинг зэ трүс.", mn:"Сөрөг хүчин засгийн газрыг үнэнийг нуусан гэж буруутгав."},
      {en:"Voters blamed the cabinet for mishandling the budget.", pron:"воутэрз блэймд зэ кэбинэт фор мисхэндлинг зэ бажит.", mn:"Сонгогчид төсвийг буруу удирдсан гэж танхимыг буруутгав."},
      {en:"Analysts praised the minister for pushing through reform.", pron:"эналистс прэйзд зэ министэр фор пушинг сру риформ.", mn:"Шинжээчид шинэчлэлийг хэрэгжүүлсэн гэж сайдыг магтав."},
      {en:"The official denied taking any bribe.", pron:"зэ офишл динайд тэйкинг эни брайб.", mn:"Албан тушаалтан хээл хахууль авсныг үгүйсгэв."},
      {en:"Experts warned the president against ignoring corruption.", pron:"экспөртс ворнд зэ прэзидэнт эгэнст игнорринг кэрапшн.", mn:"Мэргэжилтнүүд авлигыг үл ойшоохоос ерөнхийлөгчийг сэрэмжлүүлэв."}
    ],
    exercises:[
      {q:"accuse + ?:", parts:["They accused the mayor ", " funds."], opts:["of misusing","for misusing"], a:0, fix:"accuse sb OF + -ing."},
      {q:"blame + ?:", parts:["People blamed the party ", " the crisis."], opts:["for causing","of causing"], a:0, fix:"blame sb FOR + -ing."},
      {q:"admit шууд:", parts:["The minister admitted ", " parliament."], opts:["misleading","to mislead"], a:0, fix:"admit + -ing (угтваргүй)."},
      {q:"warn + ?:", parts:["Advisers warned them ", " intervening."], opts:["against","of"], a:0, fix:"warn sb AGAINST + -ing."}
    ],
    speak:{ scene:'Улс төрийн мэтгэлцээн', turns:[
      {ruby:"Why is the opposition so angry today?", pron:"вай из зэ опэзишн соу энгри тудэй?", mn:"Өнөөдөр сөрөг хүчин яагаад ийм ууртай байна вэ?",
        choices:[{t:"They've accused the government of hiding the real budget figures.",best:true,mn:"Тэд засгийн газрыг төсвийн бодит тоог нуусан гэж буруутгаж байна."},{t:"They've accused the government for hiding the figures.",best:false,fix:"accuse sb FOR ✗ → accuse sb OF hiding."}]},
      {ruby:"And how has the minister responded?", pron:"энд хау хэз зэ министэр риспондид?", mn:"Сайд яаж хариу өгсөн бэ?",
        choices:[{t:"He denied misleading parliament and blamed the media for exaggerating.",best:true,mn:"Тэр парламентыг төөрөгдүүлснийг үгүйсгэж, хэвлэлийг хэтрүүлсэн гэж буруутгав."},{t:"He denied to mislead parliament and blamed the media of exaggerating.",best:false,fix:"deny + -ing; blame sb FOR → denied MISLEADING, blamed FOR exaggerating."}]},
      {ruby:"Do analysts support any side?", pron:"ду эналистс сэпорт эни сайд?", mn:"Шинжээчид аль нэг талыг дэмжиж байна уу?",
        choices:[{t:"Some praised him for tackling corruption but warned him against silencing critics.",best:true,mn:"Зарим нь авлигатай тэмцсэн гэж магтсан ч шүүмжлэгчдийг дуугүй болгохоос сэрэмжлүүлэв."},{t:"Some praised him to tackle corruption but warned him of silencing critics.",best:false,fix:"praise sb FOR + -ing; warn sb AGAINST + -ing → praised FOR tackling, warned AGAINST silencing."}]}
    ]}
  },
  {
    id:'b2m6l2', title:"6.2 Сонгууль", level:"B2 · М6",
    blurb:"He said they would win — Reported speech: modal backshift ⭐⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Дам яриа (модаль ухраалт + асуулт/тушаал холилдсон)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Сонгуулийн мэдэгдэл, асуулт, тушаалыг <b>дам ярианд</b> зөв ухраан хэлэх.<br><br>
        <b>Модаль ухраалт:</b>
        <div style="margin:12px 0"><span class="tag">will → would · can → could · may → might · must → had to · shall → should</span></div>
        <b>Мэдэгдэл:</b>
        <div style="margin:12px 0"><span class="tag">"We WILL cut taxes." → He said they WOULD cut taxes.</span><span class="tag">"Voters CAN trust us." → She claimed voters COULD trust them.</span></div>
        <b>Асуулт (that ✗, эрэмбэ буцаана):</b>
        <div style="margin:12px 0"><span class="tag">"Who WILL you vote for?" → She asked who I WOULD vote for.</span><span class="tag">"DO you support reform?" → He asked WHETHER I supported reform.</span></div>
        <b>Тушаал/хүсэлт (to + үйл үг):</b>
        <div style="margin:12px 0"><span class="tag">"VOTE early!" → They urged us TO VOTE early.</span><span class="tag">"DON'T abstain." → He told them NOT TO abstain.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        election /ɪˈlekʃn/ — сонгууль · candidate /ˈkændɪdət/ — нэр дэвшигч · ballot /ˈbælət/ — санал хураалт<br>
        campaign /kæmˈpeɪn/ — сурталчилгаа · turnout /ˈtɜːrnaʊt/ — ирц · constituency /kənˈstɪtʃuənsi/ — тойрог<br>
        poll /poʊl/ — санал асуулга · majority /məˈdʒɔːrəti/ — олонх · coalition /ˌkoʊəˈlɪʃn/ — эвсэл<br>
        pledge /pledʒ/ — амлалт · incumbent /ɪnˈkʌmbənt/ — одоо суугаа · landslide /ˈlændslaɪd/ — бүрэн ялалт<br>
        opponent /əˈpoʊnənt/ — өрсөлдөгч · electorate /ɪˈlektərət/ — сонгогчид · manifesto /ˌmænɪˈfestoʊ/ — мөрийн хөтөлбөр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He asked that would I vote» ✗ → <b>He asked whether I WOULD vote</b> ✓ (that ✗, эрэмбэ шулуун). «She said me» ✗ → <b>She TOLD me / said TO me</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «will→would, can→could, may→might, must→had to». Асуултад <b>whether/if + шулуун эрэмбэ</b>, тушаалд <b>to + үйл үг</b>.</p>`
    },
    phrases:[
      {en:"He said his party would cut taxes after the election.", pron:"хи сэд хиз парти вүд кат тэксиз афтэр зэ илекшн.", mn:"Тэр намаа сонгуулийн дараа татвар бууруулна гэж хэлэв."},
      {en:"She claimed the electorate could trust her pledges.", pron:"ши клэймд зэ илектэрэт күд траст хөр плэжиз.", mn:"Тэр сонгогчид түүний амлалтад итгэж болно гэж мэдэгдэв."},
      {en:"The journalist asked whether turnout would be high.", pron:"зэ жөрналист аскт вэзэр төрнаут вүд би хай.", mn:"Сэтгүүлч ирц өндөр байх эсэхийг асуув."},
      {en:"They urged voters not to abstain on election day.", pron:"зэй өрждид воутэрз нот ту эбстэйн он илекшн дэй.", mn:"Тэд сонгогчдыг сонгуулийн өдөр санал өгөхөөс татгалзахгүй байхыг уриалав."},
      {en:"He warned that his opponent might lose the majority.", pron:"хи ворнд зэт хиз опоунэнт майт луз зэ мэжорити.", mn:"Тэр өрсөлдөгч нь олонхоо алдаж мэдэхийг сануулав."}
    ],
    exercises:[
      {q:"will → ?:", parts:["He said they ", " win the vote."], opts:["would","will"], a:0, fix:"дам ярианд will → would."},
      {q:"Асуулт эрэмбэ:", parts:["She asked whether I ", " for reform."], opts:["would vote","would I vote"], a:0, fix:"дам асуултад эрэмбэ шулуун → I would vote."},
      {q:"must → ?:", parts:["He said the party ", " change fast."], opts:["had to","must to"], a:0, fix:"дам ярианд must → had to."},
      {q:"Тушаал:", parts:["They told supporters ", " early."], opts:["to vote","that vote"], a:0, fix:"тушаал → tell sb TO + үйл үг."}
    ],
    speak:{ scene:'Сонгуулийн шөнийн репортаж', turns:[
      {ruby:"What did the candidate promise in his speech?", pron:"вот дид зэ кэндидэт промис ин хиз спийч?", mn:"Нэр дэвшигч илтгэлдээ юу амласан бэ?",
        choices:[{t:"He said his government would cut taxes and could rebuild trust.",best:true,mn:"Тэр засгийн газраа татвар бууруулж, итгэлийг сэргээж чадна гэв."},{t:"He said his government will cut taxes and can rebuild trust.",best:false,fix:"дам ярианд ухраа → WOULD cut, COULD rebuild."}]},
      {ruby:"Did the reporter challenge him on turnout?", pron:"дид зэ рипортэр чэлэнж хим он төрнаут?", mn:"Сурвалжлагч ирцийн талаар түүнийг сорьсон уу?",
        choices:[{t:"Yes, she asked whether the turnout would beat the last election.",best:true,mn:"Тийм, тэр ирц өнгөрсөн сонгуулийг давах эсэхийг асуув."},{t:"Yes, she asked that would the turnout beat the last election.",best:false,fix:"дам асуулт: that ✗, эрэмбэ шулуун → asked WHETHER the turnout WOULD beat."}]},
      {ruby:"How did his team react to the exit polls?", pron:"хау дид хиз тийм риэкт ту зэ эксит поулз?", mn:"Түүний баг гарцын санал асуулгад яаж хариу үзүүлэв?",
        choices:[{t:"They urged supporters not to celebrate yet and told them to wait for the count.",best:true,mn:"Тэд дэмжигчдийг одоохондоо баярлахгүй байж, тооллогыг хүлээхийг уриалав."},{t:"They urged supporters don't celebrate and said them wait for the count.",best:false,fix:"тушаал → urged them NOT TO celebrate, TOLD them TO wait."}]}
    ]}
  },
  {
    id:'b2m6l3', title:"6.3 Дипломат харилцаа", level:"B2 · М6",
    blurb:"Were the talks to fail, war might follow — Conditional inversion ⭐⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Нөхцөлийн урвуу бүтэц (Were… / Had… / Should…)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Дипломат ярианд <b>if-г хасаж</b>, туслах үйлийг урагшлуулан албан ёсны өнгө өгөх.<br><br>
        <b>Were (2-р нөхцөл):</b>
        <div style="margin:12px 0"><span class="tag">If the talks failed → WERE the talks TO FAIL, tensions would rise.</span><span class="tag">If I were president → WERE I president, I would negotiate.</span></div>
        <b>Had (3-р нөхцөл):</b>
        <div style="margin:12px 0"><span class="tag">If they had signed → HAD they signed, the crisis would have ended.</span></div>
        <b>Should (бодит/боломжит):</b>
        <div style="margin:12px 0"><span class="tag">If sanctions occur → SHOULD sanctions BE imposed, trade would collapse.</span></div>
        <b>Харьцуул:</b>
        <div style="margin:12px 0"><span class="tag">Were I to resign… (болзошгүй ирээдүй)</span><span class="tag">Had we acted sooner… (өнгөрсөн харамсал)</span><span class="tag">Should the ceasefire hold… (магадгүй)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        diplomacy /dɪˈploʊməsi/ — дипломат ёс · treaty /ˈtriːti/ — гэрээ · sanction /ˈsæŋkʃn/ — хориг арга хэмжээ<br>
        negotiation /nɪˌɡoʊʃiˈeɪʃn/ — хэлэлцээ · alliance /əˈlaɪəns/ — холбоо · summit /ˈsʌmɪt/ — дээд хэмжээний уулзалт<br>
        embassy /ˈembəsi/ — элчин сайдын яам · ambassador /æmˈbæsədər/ — элчин сайд · ceasefire /ˈsiːsfaɪər/ — гал зогсоолт<br>
        tension /ˈtenʃn/ — хурцадмал байдал · sovereignty /ˈsɑːvrənti/ — тусгаар тогтнол · dialogue /ˈdaɪəlɒɡ/ — яриа хэлэлцээ<br>
        mediation /ˌmiːdiˈeɪʃn/ — зуучлал · bilateral /ˌbaɪˈlætərəl/ — хоёр талт · accord /əˈkɔːrd/ — тохиролцоо</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Were the talks to failed» ✗ → <b>Were the talks TO FAIL</b> ✓. «Had they signed, the crisis would end» ✗ → <b>would HAVE ended</b> ✓. Урвуу бүтцэд <b>if бичихгүй</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Were = хэрэв (одоо/ирээдүй), Had = хэрэв (өнгөрсөн), Should = магадгүй». Туслах үйл эхэнд → if алга.</p>`
    },
    phrases:[
      {en:"Were the negotiations to collapse, both economies would suffer.", pron:"вэр зэ негошиэйшнз ту кэлапс, боус иконэмиз вүд сафэр.", mn:"Хэлэлцээ нурвал хоёр улсын эдийн засаг хохирно."},
      {en:"Had the two sides signed the treaty, war would have been avoided.", pron:"хэд зэ ту сайдз сайнд зэ трийти, вор вүд хэв бийн эвойдид.", mn:"Хоёр тал гэрээнд гарын үсэг зурсан бол дайнаас зайлсхийх байсан."},
      {en:"Should sanctions be lifted, trade would recover quickly.", pron:"шүд сэнкшнз би лифтид, трэйд вүд рикавэр квикли.", mn:"Хориг цуцлагдвал худалдаа хурдан сэргэнэ."},
      {en:"Were I in the ambassador's position, I would seek mediation.", pron:"вэр ай ин зэ эмбэсэдэрз пэзишн, ай вүд сийк мидиэйшн.", mn:"Хэрэв би элчин сайдын байранд байсан бол зуучлал эрэлхийлнэ."},
      {en:"Should the ceasefire hold, talks could resume next month.", pron:"шүд зэ сийсфайэр хоулд, токс күд ризюм нэкст манс.", mn:"Гал зогсоолт хадгалагдвал хэлэлцээ ирэх сард дахин эхэлж болно."}
    ],
    exercises:[
      {q:"Were урвуу:", parts:["", " the talks to fail, tensions would rise."], opts:["Were","If were"], a:0, fix:"урвуу бүтэц: Were… (if бичихгүй)."},
      {q:"Had + 3-р:", parts:["Had they signed, war ", " avoided."], opts:["would have been","would be"], a:0, fix:"Had… → would HAVE been (өнгөрсөн)."},
      {q:"Should:", parts:["", " sanctions be imposed, trade would fall."], opts:["Should","Would"], a:0, fix:"магадгүй нөхцөл → Should + subject."},
      {q:"Хэлбэр:", parts:["Were the accord ", " collapse, chaos would follow."], opts:["to","would"], a:0, fix:"Were + subject + TO + үйл үг."}
    ],
    speak:{ scene:'Дипломат хэлэлцээний брифинг', turns:[
      {ruby:"How serious is the situation at the summit?", pron:"хау сириэс из зэ ситюэйшн эт зэ саммит?", mn:"Дээд хэмжээний уулзалт дээрх нөхцөл байдал хэр ноцтой вэ?",
        choices:[{t:"Very tense. Were the negotiations to break down, both sides would face sanctions.",best:true,mn:"Маш хурцадмал. Хэлэлцээ нурвал хоёр тал хоригтой тулгарна."},{t:"Very tense. If the negotiations would break down, both sides face sanctions.",best:false,fix:"урвуу бүтэц → WERE the negotiations TO break down, … WOULD face."}]},
      {ruby:"Could this crisis have been prevented?", pron:"күд зис крайсис хэв бийн привэнтид?", mn:"Энэ хямралаас урьдчилан сэргийлж болох байсан уу?",
        choices:[{t:"Certainly. Had the ambassadors met earlier, the accord would have been signed by now.",best:true,mn:"Мэдээж. Элчин сайд нар эрт уулзсан бол тохиролцоонд одоо гарын үсэг зурчихсан байх байлаа."},{t:"Certainly. Had the ambassadors met earlier, the accord would be signed by now.",best:false,fix:"Had… → would HAVE been signed (өнгөрсөн үр дагавар)."}]},
      {ruby:"Is there any hope going forward?", pron:"из зэр эни хоуп гоуинг форвэрд?", mn:"Цаашид ямар нэг найдвар байна уу?",
        choices:[{t:"Yes. Should the ceasefire hold, bilateral talks could resume within weeks.",best:true,mn:"Тийм. Гал зогсоолт хадгалагдвал хоёр талт хэлэлцээ хэдэн долоо хоногийн дотор сэргэж болно."},{t:"Yes. Should the ceasefire holds, bilateral talks resume within weeks.",best:false,fix:"Should + subject + BARE үйл үг → Should the ceasefire HOLD, … COULD resume."}]}
    ]}
  },
  {
    id:'b2m6l4', title:"6.4 Хүний эрх", level:"B2 · М6",
    blurb:"It is freedom that matters — Cleft & emphasis ⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Онцлох бүтэц (It is… that / What… is)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Маргаанд <b>гол санааг тодотгож</b>, аль хэсгийг чухалчилж буйгаа онцлох.<br><br>
        <b>It-cleft (нэр үг онцлох):</b>
        <div style="margin:12px 0"><span class="tag">IT IS dignity THAT every human deserves.</span><span class="tag">IT WAS the activists WHO changed the law.</span></div>
        <b>What-cleft (үйлдэл/санаа онцлох):</b>
        <div style="margin:12px 0"><span class="tag">WHAT we need IS equal protection.</span><span class="tag">WHAT the law fails to do IS defend minorities.</span></div>
        <b>All / The reason cleft:</b>
        <div style="margin:12px 0"><span class="tag">ALL they want IS to be treated fairly.</span><span class="tag">THE REASON we protest IS that our voices are ignored.</span></div>
        <b>Энгийн ↔ онцолсон:</b>
        <div style="margin:12px 0"><span class="tag">Freedom matters. → IT IS freedom THAT matters.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        rights /raɪts/ — эрх · dignity /ˈdɪɡnəti/ — нэр төр · equality /ɪˈkwɑːləti/ — тэгш байдал<br>
        freedom /ˈfriːdəm/ — эрх чөлөө · justice /ˈdʒʌstɪs/ — шударга ёс · discrimination /dɪˌskrɪmɪˈneɪʃn/ — ялгаварлал<br>
        minority /maɪˈnɔːrəti/ — цөөнх · activist /ˈæktɪvɪst/ — идэвхтэн · oppression /əˈpreʃn/ — дарлал<br>
        liberty /ˈlɪbərti/ — эрх чөлөө · protest /ˈproʊtest/ — эсэргүүцэл · advocate /ˈædvəkət/ — өмгөөлөгч<br>
        violation /ˌvaɪəˈleɪʃn/ — зөрчил · censorship /ˈsensərʃɪp/ — цензур · entitlement /ɪnˈtaɪtlmənt/ — эдлэх эрх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «What we need are equal rights» — нэгдмэл санаа бол <b>What we need IS</b> ✓. «It is the activists that changed» — хүн бол <b>WHO</b> илүү → It was the activists WHO changed. «Is freedom that matters» ✗ → <b>IT IS freedom</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Нэр үг онцлох → It is X that/who. Санаа онцлох → What… is».</p>`
    },
    phrases:[
      {en:"It is dignity that every human being deserves.", pron:"ит из дигнити зэт эври хьюмэн бийинг дизөрвз.", mn:"Хүн бүр нэр төрийг эдлэх ёстой."},
      {en:"What this country needs is genuine equality.", pron:"вот зис кантри нийдз из жэнюин иквэлити.", mn:"Энэ улсад жинхэнэ тэгш байдал хэрэгтэй."},
      {en:"It was the activists who forced the law to change.", pron:"ит воз зэ эктивистс ху форст зэ ло ту чэйнж.", mn:"Хуулийг өөрчлөхийг албадсан нь идэвхтнүүд байв."},
      {en:"All these people want is to be treated fairly.", pron:"ол зийз пийпл вонт из ту би трийтид фэрли.", mn:"Эдгээр хүмүүсийн хүсэж буй бүхэн шударгаар хандуулах явдал."},
      {en:"The reason we protest is that our voices are ignored.", pron:"зэ ризн ви протэст из зэт аур войсиз ар игнорд.", mn:"Бидний эсэргүүцэх шалтгаан бол дуу хоолойг маань үл ойшоодогт бий."}
    ],
    exercises:[
      {q:"It-cleft:", parts:["", " freedom that matters most."], opts:["It is","Is"], a:0, fix:"онцлолт: It is X that…"},
      {q:"What-cleft:", parts:["What we need ", " equal protection."], opts:["is","are"], a:0, fix:"What… нэгдмэл санаа → IS."},
      {q:"Хүн → who:", parts:["It was the activists ", " changed the law."], opts:["who","which"], a:0, fix:"хүн онцлох → who."},
      {q:"Онцлолт:", parts:["", " they want is respect."], opts:["All","That"], a:0, fix:"All… is бүтэц → All they want is."}
    ],
    speak:{ scene:'Хүний эрхийн хэлэлцүүлэг', turns:[
      {ruby:"What is your movement really fighting for?", pron:"вот из ёр мувмэнт риэли файтинг фор?", mn:"Танай хөдөлгөөн үнэндээ юуны төлөө тэмцэж байна вэ?",
        choices:[{t:"It is dignity that we demand, not special treatment.",best:true,mn:"Бид нэр төрийг шаардаж байгаа болохоос онцгой хандлагыг биш."},{t:"Is dignity that we demand, not special treatment.",best:false,fix:"cleft бүтцэд эхлэл дутуу → IT IS dignity that…"}]},
      {ruby:"Critics say the law already protects everyone.", pron:"критикс сэй зэ ло олрэди протэктс эврийван.", mn:"Шүүмжлэгчид хууль аль хэдийн бүгдийг хамгаалдаг гэдэг.",
        choices:[{t:"What the law fails to do is protect vulnerable minorities in practice.",best:true,mn:"Хуулийн хийж чадахгүй байгаа зүйл бол эмзэг цөөнхийг бодит амьдрал дээр хамгаалах явдал."},{t:"What the law fail to do are protect vulnerable minorities.",best:false,fix:"What-cleft → What the law FAILS to do IS protect."}]},
      {ruby:"Who deserves the credit for the recent reform?", pron:"ху дизөрвз зэ крэдит фор зэ ринсэнт риформ?", mn:"Сүүлийн шинэчлэлийн гавьяаг хэн эзэмших ёстой вэ?",
        choices:[{t:"It was ordinary citizens who forced the government to act.",best:true,mn:"Засгийн газрыг арга хэмжээ авахад хүргэсэн нь энгийн иргэд байв."},{t:"It was ordinary citizens which forced the government to act.",best:false,fix:"хүн онцлох → who, which биш → It was citizens WHO forced."}]}
    ]}
  },
  {
    id:'b2m6l5', title:"6.5 Дайн энх", level:"B2 · М6",
    blurb:"Talks failed; nonetheless, hope remains — Contrastive markers ⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Эсрэгцүүлэх холбоос үг (nonetheless / conversely / whereas)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Дайн, энх тайвны талаар маргахдаа <b>эсрэг санаануудыг тодоор</b> холбож, албан бичгийн өнгө өгөх.<br><br>
        <b>nonetheless / nevertheless (гэсэн ч):</b>
        <div style="margin:12px 0"><span class="tag">The war ended. NONETHELESS, the wounds remain.</span><span class="tag">Talks stalled; NEVERTHELESS, both sides kept meeting.</span></div>
        <b>conversely (эсрэгээрээ):</b>
        <div style="margin:12px 0"><span class="tag">War destroys economies; CONVERSELY, peace rebuilds them.</span></div>
        <b>on the contrary (огт үгүй, харин ч):</b>
        <div style="margin:12px 0"><span class="tag">He isn't neutral. ON THE CONTRARY, he backs one side openly.</span></div>
        <b>whereas / while (харин — нэг өгүүлбэрт):</b>
        <div style="margin:12px 0"><span class="tag">The north seeks peace, WHEREAS the south prepares for conflict.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        conflict /ˈkɑːnflɪkt/ — мөргөлдөөн · warfare /ˈwɔːrfer/ — дайн байлдаан · truce /truːs/ — эвлэрэл<br>
        casualty /ˈkæʒuəlti/ — хохирогч · disarmament /dɪsˈɑːrməmənt/ — зэвсэг хураалт · aggression /əˈɡreʃn/ — түрэмгийлэл<br>
        peacekeeping /ˈpiːskiːpɪŋ/ — энхийг сахиулах · retaliation /rɪˌtæliˈeɪʃn/ — хариу цохилт · invasion /ɪnˈveɪʒn/ — довтолгоон<br>
        militia /məˈlɪʃə/ — цэрэгжсэн бүлэг · atrocity /əˈtrɑːsəti/ — харгислал · reconciliation /ˌrekənsɪliˈeɪʃn/ — эвлэрэл сэргээх<br>
        armistice /ˈɑːrmɪstɪs/ — гал зогсоох гэрээ · deterrence /dɪˈterəns/ — цээрлүүлэлт · neutrality /nuːˈtræləti/ — төвийг сахих</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Nonetheless of the war» ✗ — nonetheless <b>дангаараа</b> холбоос (Despite the war ✓). «whereas» нь <b>нэг өгүүлбэрийн дотор</b> хоёр санаа холбоно, цэгээр тусгаарлахгүй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «nonetheless=гэсэн ч, conversely=эсрэгээрээ, on the contrary=харин ч огт үгүй, whereas=харин».</p>`
    },
    phrases:[
      {en:"The ceasefire collapsed; nonetheless, aid convoys kept moving.", pron:"зэ сийсфайэр кэлапст; нанзэлэс, эйд конвойз кэпт мувинг.", mn:"Гал зогсоолт нурсан ч тусламжийн машинууд үргэлжлүүлэн явж байв."},
      {en:"War drains a nation; conversely, peace lets it flourish.", pron:"вор дрэйнз э нэйшн; конвөрсли, пийс лэтс ит флариш.", mn:"Дайн үндэстнийг сүйтгэдэг бол эсрэгээрээ энх тайван цэцэглэхэд тусалдаг."},
      {en:"He is not neutral; on the contrary, he arms the rebels.", pron:"хи из нот нютрал; он зэ контрари, хи армз зэ рэбэлз.", mn:"Тэр төвийг сахидаггүй; харин ч босогчдыг зэвсэглэдэг."},
      {en:"The capital enjoys peace, whereas the border still burns.", pron:"зэ кэпитл инжойз пийс, вэрэз зэ бордэр стил бөрнз.", mn:"Нийслэл энх тайван байхад харин хил дээр дайн үргэлжилсээр."},
      {en:"Both leaders spoke of peace; nevertheless, troops advanced.", pron:"боус лийдэрз споук ов пийс; нэвэрзэлэс, трупс эдвэнст.", mn:"Хоёр удирдагч энх тайвны тухай ярьсан ч цэргүүд урагшилсаар байв."}
    ],
    exercises:[
      {q:"гэсэн ч:", parts:["The talks failed. ", ", the envoys stayed."], opts:["Nonetheless","Because"], a:0, fix:"эсрэгцэл → Nonetheless."},
      {q:"эсрэгээрээ:", parts:["War impoverishes; ", ", peace enriches."], opts:["conversely","therefore"], a:0, fix:"эсрэг чиг → conversely."},
      {q:"харин:", parts:["The north disarmed, ", " the south rearmed."], opts:["whereas","because"], a:0, fix:"нэг өгүүлбэрт эсрэг → whereas."},
      {q:"харин ч:", parts:["It didn't help. ", ", it made things worse."], opts:["On the contrary","As a result"], a:0, fix:"хүлээлтийн эсрэг → On the contrary."}
    ],
    speak:{ scene:'Энх тайвны хэлэлцүүлэг', turns:[
      {ruby:"Did the peace agreement change anything on the ground?", pron:"дид зэ пийс эгримэнт чэйнж энисинг он зэ граунд?", mn:"Энх тайвны хэлэлцээр газар дээр ямар нэг зүйлийг өөрчилсөн үү?",
        choices:[{t:"Officially the war ended; nonetheless, sporadic clashes still continue.",best:true,mn:"Албан ёсоор дайн дууссан ч тохиолдлын мөргөлдөөн одоо ч үргэлжилсээр."},{t:"Officially the war ended; nonetheless of clashes still continue.",best:false,fix:"nonetheless дангаараа холбоос → …; nonetheless, clashes CONTINUE."}]},
      {ruby:"Are both regions recovering equally?", pron:"ар боус рижэнз рикавэринг иквэли?", mn:"Хоёр бүс тэгш хэмжээгээр сэргэж байна уу?",
        choices:[{t:"No. The capital is thriving, whereas the border towns remain in ruins.",best:true,mn:"Үгүй. Нийслэл цэцэглэж байхад харин хилийн хотууд балгас хэвээр."},{t:"No. The capital is thriving. Whereas the border towns remain in ruins.",best:false,fix:"whereas хоёр санааг нэг өгүүлбэрт холбоно → thriving, WHEREAS the towns remain."}]},
      {ruby:"So the general genuinely wants peace?", pron:"соу зэ жэнэрал жэнюинли вонтс пийс?", mn:"Тэгэхээр генерал үнэхээр энх тайвныг хүсдэг юм уу?",
        choices:[{t:"On the contrary, he is quietly funding the militias.",best:true,mn:"Харин ч тэр цэрэгжсэн бүлгүүдийг нууцаар санхүүжүүлж байгаа."},{t:"On the contrary of peace, he is funding the militias.",best:false,fix:"On the contrary дангаараа → On the contrary, he is FUNDING."}]}
    ]}
  },
  {
    id:'b2m6l6', title:"6.6 Дүрвэгсэд", level:"B2 · М6",
    blurb:"Borders closed, thereby trapping thousands — Cause & consequence ⭐⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Шалтгаан-үр дагаврын өндөр холбоос (thereby / hence / insofar as)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Дүрвэгсдийн хямралыг тайлбарлахдаа <b>шалтгаан ба үр дагаврыг</b> албан ёсоор нягт холбох.<br><br>
        <b>thereby + -ing (ингэснээр):</b>
        <div style="margin:12px 0"><span class="tag">They closed the border, THEREBY TRAPPING thousands of refugees.</span></div>
        <b>hence / thus (тиймээс):</b>
        <div style="margin:12px 0"><span class="tag">Aid was cut; HENCE the growing crisis.</span><span class="tag">Camps are overcrowded; THUS disease spreads fast.</span></div>
        <b>insofar as (тийм хэмжээгээр, хэрхэн):</b>
        <div style="margin:12px 0"><span class="tag">The plan works INSOFAR AS funding continues.</span></div>
        <b>in that (гэдгээрээ / учир нь):</b>
        <div style="margin:12px 0"><span class="tag">The policy is flawed IN THAT it ignores the causes.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        refugee /ˌrefjuˈdʒiː/ — дүрвэгч · asylum /əˈsaɪləm/ — орогнол · displacement /dɪsˈpleɪsmənt/ — албадан нүүлгэлт<br>
        migration /maɪˈɡreɪʃn/ — шилжилт хөдөлгөөн · shelter /ˈʃeltər/ — хоргодох байр · humanitarian /hjuːˌmænɪˈteriən/ — хүмүүнлэгийн<br>
        border /ˈbɔːrdər/ — хил · smuggler /ˈsmʌɡlər/ — хууль бус тээвэрлэгч · quota /ˈkwoʊtə/ — тоо хязгаар<br>
        resettlement /riːˈsetlmənt/ — дахин суурьшуулах · deportation /ˌdiːpɔːrˈteɪʃn/ — албадан гаргах · integration /ˌɪntɪˈɡreɪʃn/ — нийгэмшил<br>
        stateless /ˈsteɪtləs/ — харьяалалгүй · persecution /ˌpɜːrsɪˈkjuːʃn/ — хавчлага · vulnerable /ˈvʌlnərəbl/ — эмзэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «thereby trap thousands» ✗ → <b>thereby TRAPPING</b> ✓ (-ing). «hence of the crisis» ✗ → <b>hence the crisis</b> ✓ (шууд нэр үг). «insofar that» ✗ → <b>insofar AS</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «thereby+ing (ингэснээр), hence/thus (тиймээс), insofar as (хэрхэн зэрэг), in that (гэдгээрээ)».</p>`
    },
    phrases:[
      {en:"The government sealed the border, thereby trapping thousands.", pron:"зэ гавэрнмэнт силд зэ бордэр, зэрбай трэппинг саузэндз.", mn:"Засгийн газар хилээ хаасан нь мянга мянган хүнийг гацаанд оруулав."},
      {en:"Funding was slashed; hence the deepening humanitarian crisis.", pron:"фандинг воз слэшт; хэнс зэ дийпэнинг хьюмэнитэриэн крайсис.", mn:"Санхүүжилтийг огцом бууруулсан; тиймээс хүмүүнлэгийн хямрал гүнзгийрч байна."},
      {en:"The camps are overcrowded; thus disease spreads rapidly.", pron:"зэ кэмпс ар оувэркраудид; зас дизийз спрэдз рэпидли.", mn:"Хуарангууд хэт дүүрсэн; тиймээс өвчин хурдан тархаж байна."},
      {en:"The scheme succeeds insofar as donors keep their promises.", pron:"зэ ским саксийдз инсоуфар аз доунэрз кийп зэйр промисиз.", mn:"Хандивлагчид амлалтаа биелүүлсэн хэмжээгээр л энэ хөтөлбөр амжилттай."},
      {en:"The policy is unjust in that it punishes the victims.", pron:"зэ полиси из анжаст ин зэт ит панишиз зэ виктимз.", mn:"Энэ бодлого хохирогчдыг шийтгэдэг гэдгээрээ шударга бус."}
    ],
    exercises:[
      {q:"thereby + ?:", parts:["They shut the ports, thereby ", " aid."], opts:["blocking","block"], a:0, fix:"thereby + -ing → blocking."},
      {q:"тиймээс:", parts:["Funds ran out; ", " the crisis worsened."], opts:["hence","despite"], a:0, fix:"үр дагавар → hence."},
      {q:"хэмжээгээр:", parts:["It helps ", " the funding lasts."], opts:["insofar as","insofar that"], a:0, fix:"insofar AS (that ✗)."},
      {q:"гэдгээрээ:", parts:["The plan fails ", " it ignores causes."], opts:["in that","in which"], a:0, fix:"учир шалтгаан → in that."}
    ],
    speak:{ scene:'Дүрвэгсдийн хямралын тайлан', turns:[
      {ruby:"Why did the number of stranded people rise so fast?", pron:"вай дид зэ намбэр ов стрэндид пийпл райз соу фаст?", mn:"Гацсан хүмүүсийн тоо яагаад ийм хурдан нэмэгдэв?",
        choices:[{t:"Neighbouring states closed their borders, thereby trapping tens of thousands.",best:true,mn:"Хөрш орнууд хилээ хаасан нь хэдэн арван мянган хүнийг гацаанд оруулав."},{t:"Neighbouring states closed their borders, thereby trap tens of thousands.",best:false,fix:"thereby + -ing → thereby TRAPPING."}]},
      {ruby:"What is driving the disease outbreaks in the camps?", pron:"вот из драйвинг зэ дизийз аутбрэйкс ин зэ кэмпс?", mn:"Хуарангуудад өвчний дэгдэлтийг юу үүсгэж байна вэ?",
        choices:[{t:"The shelters are dangerously overcrowded; hence the rapid spread of infection.",best:true,mn:"Хоргодох байрууд аюултай их дүүрсэн; тиймээс халдвар хурдан тарж байна."},{t:"The shelters are overcrowded; hence of the rapid spread of infection.",best:false,fix:"hence шууд нэр үг авна → hence THE rapid spread (hence OF ✗)."}]},
      {ruby:"Is the international relief plan actually working?", pron:"из зэ интэрнэшнл рилийф плэн эктшуэли вөркинг?", mn:"Олон улсын тусламжийн төлөвлөгөө үнэхээр ажиллаж байна уу?",
        choices:[{t:"It works insofar as donors keep funding it, but the plan is flawed in that it ignores root causes.",best:true,mn:"Хандивлагчид санхүүжүүлсэн хэмжээгээр ажилладаг ч энэ төлөвлөгөө үндсэн шалтгааныг үл ойшоодог гэдгээрээ дутагдалтай."},{t:"It works insofar that donors fund it, but the plan is flawed in which it ignores causes.",best:false,fix:"insofar AS; in THAT → works insofar AS…, flawed in THAT…"}]}
    ]}
  },
  {
    id:'b2m6l7', title:"6.7 Хууль тогтоомж", level:"B2 · М6",
    blurb:"Citizens are entitled to appeal — Formal modality ⭐⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Албан ёсны модаль (be to / be required to / shall & may)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хууль, дүрэм журамд <b>үүрэг, эрх, зөвшөөрлийг</b> албан ёсны модалиар илэрхийлэх.<br><br>
        <b>be to (заавал, албан ёсны заавар):</b>
        <div style="margin:12px 0"><span class="tag">All applicants ARE TO SUBMIT the form by Friday.</span><span class="tag">No vehicle IS TO ENTER the restricted zone.</span></div>
        <b>be required to (шаардлагатай) / be entitled to (эрхтэй):</b>
        <div style="margin:12px 0"><span class="tag">Employers ARE REQUIRED TO PAY the minimum wage.</span><span class="tag">Every citizen IS ENTITLED TO a fair trial.</span></div>
        <b>shall (үүрэг) / may (зөвшөөрөл) — хуулийн хэл:</b>
        <div style="margin:12px 0"><span class="tag">The tenant SHALL PAY rent on the first of each month.</span><span class="tag">The court MAY IMPOSE a fine.</span></div>
        <b>Ялгаа:</b>
        <div style="margin:12px 0"><span class="tag">shall = үүрэг (must) · may = зөвшөөрөл/боломж (is allowed) · be entitled to = эрх эдэлнэ</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        legislation /ˌledʒɪsˈleɪʃn/ — хууль тогтоомж · statute /ˈstætʃuːt/ — хууль · clause /klɔːz/ — заалт<br>
        regulation /ˌreɡjuˈleɪʃn/ — журам · compliance /kəmˈplaɪəns/ — мөрдөлт · enforcement /ɪnˈfɔːrsmənt/ — хэрэгжүүлэлт<br>
        prohibition /ˌproʊɪˈbɪʃn/ — хориглолт · obligation /ˌɑːblɪˈɡeɪʃn/ — үүрэг · provision /prəˈvɪʒn/ — заалт<br>
        jurisdiction /ˌdʒʊrɪsˈdɪkʃn/ — харьяалал · amendment /əˈmendmənt/ — нэмэлт өөрчлөлт · penalty /ˈpenəlti/ — торгууль<br>
        legitimate /lɪˈdʒɪtəmət/ — хууль ёсны · breach /briːtʃ/ — зөрчил · verdict /ˈvɜːrdɪkt/ — шийдвэр</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «are required submit» ✗ → <b>are required TO submit</b> ✓. «is entitle to» ✗ → <b>is entitled TO</b> ✓. Хуульд <b>shall</b> = will биш, «үүрэг». «may not» = хориглоно.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «be to/shall=заавал, be required to=шаардлагатай, be entitled to=эрхтэй, may=зөвшөөрөл».</p>`
    },
    phrases:[
      {en:"All applicants are to submit their documents by Friday.", pron:"ол эпликэнтс ар ту сабмит зэйр докьюмэнтс бай фрайдэй.", mn:"Бүх өргөдөл гаргагч баримтаа Баасан гараг гэхэд өгөх ёстой."},
      {en:"Employers are required to provide a safe workplace.", pron:"эмплойэрз ар риквайэрд ту провайд э сэйф вөркплэйс.", mn:"Ажил олгогчид аюулгүй ажлын байр хангах шаардлагатай."},
      {en:"Every citizen is entitled to legal representation.", pron:"эври ситизн из интайтлд ту лийгл рэпризэнтэйшн.", mn:"Иргэн бүр хуулийн төлөөлөл эдлэх эрхтэй."},
      {en:"The tenant shall pay rent on the first of each month.", pron:"зэ тэнэнт шэл пэй рэнт он зэ фөрст ов ийч манс.", mn:"Түрээслэгч сар бүрийн 1-нд түрээсээ төлөх үүрэгтэй."},
      {en:"The court may impose a penalty for any breach.", pron:"зэ корт мэй импоуз э пэналти фор эни брийч.", mn:"Шүүх аливаа зөрчилд торгууль ногдуулж болно."}
    ],
    exercises:[
      {q:"be to:", parts:["All staff ", " wear ID badges."], opts:["are to","are"], a:0, fix:"албан заавар → be TO + үйл үг."},
      {q:"required + ?:", parts:["Firms are required ", " the minimum wage."], opts:["to pay","pay"], a:0, fix:"be required TO + үйл үг."},
      {q:"entitled + ?:", parts:["Citizens are entitled ", " a fair trial."], opts:["to","for"], a:0, fix:"be entitled TO."},
      {q:"хуулийн үүрэг:", parts:["The tenant ", " pay on time. (үүрэг)"], opts:["shall","may"], a:0, fix:"үүрэг → shall (may=зөвшөөрөл)."}
    ],
    speak:{ scene:'Хуулийн зөвлөгөө', turns:[
      {ruby:"What must my company do under the new law?", pron:"вот маст май кампэни ду андэр зэ ню ло?", mn:"Шинэ хуулийн дагуу манай компани юу хийх ёстой вэ?",
        choices:[{t:"Under the new statute, employers are required to register every contract.",best:true,mn:"Шинэ хуулийн дагуу ажил олгогчид гэрээ бүрийг бүртгүүлэх шаардлагатай."},{t:"Under the new statute, employers are required register every contract.",best:false,fix:"be required TO + үйл үг → are required TO register."}]},
      {ruby:"And what rights do my employees have?", pron:"энд вот райтс ду май эмплойииз хэв?", mn:"Ажилчид маань ямар эрхтэй вэ?",
        choices:[{t:"They are entitled to paid leave and to appeal any dismissal.",best:true,mn:"Тэд цалинтай амралт эдэлж, аливаа халалтыг эсэргүүцэх эрхтэй."},{t:"They are entitle to paid leave and appeal any dismissal.",best:false,fix:"be ENTITLED TO → are entitled TO paid leave and TO appeal."}]},
      {ruby:"What happens if we breach a clause?", pron:"вот хэпэнз иф ви брийч э клоз?", mn:"Хэрэв бид заалтыг зөрчвөл яах вэ?",
        choices:[{t:"The court may impose a fine, and repeat offenders shall lose their licence.",best:true,mn:"Шүүх торгууль ногдуулж болох бөгөөд давтан зөрчигчид тусгай зөвшөөрлөө хасуулна."},{t:"The court may to impose a fine, and repeat offenders shall to lose their licence.",best:false,fix:"may/shall дараа TO ✗ → may IMPOSE, shall LOSE."}]}
    ]}
  },
  {
    id:'b2m6l8', title:"6.8 Олон улсын байгууллага", level:"B2 · М6",
    blurb:"It is widely accepted that reform is needed — Impersonal structures ⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Хувь хүнгүй, идэвхгүй бүтэц (It is widely accepted that…)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Албан ёсны, бодитой өнгө өгөхийн тулд <b>«хэн» гэдгийг нуун</b> идэвхгүй бүтэц ашиглах.<br><br>
        <b>It + идэвхгүй + that:</b>
        <div style="margin:12px 0"><span class="tag">IT IS WIDELY ACCEPTED THAT reform is overdue.</span><span class="tag">IT IS ARGUED THAT sanctions rarely work.</span><span class="tag">IT SHOULD BE NOTED THAT funding fell sharply.</span></div>
        <b>Subject + идэвхгүй + to-infinitive:</b>
        <div style="margin:12px 0"><span class="tag">The agency IS SAID TO HAVE FAILED.</span><span class="tag">The report IS BELIEVED TO BE accurate.</span></div>
        <b>Түгээмэл хэвшмэл:</b>
        <div style="margin:12px 0"><span class="tag">It is often claimed that… · It is estimated that… · It cannot be denied that… · It is generally agreed that…</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        organisation /ˌɔːrɡənaɪˈzeɪʃn/ — байгууллага · summit /ˈsʌmɪt/ — дээд хэмжээний уулзалт · resolution /ˌrezəˈluːʃn/ — тогтоол<br>
        cooperation /koʊˌɑːpəˈreɪʃn/ — хамтын ажиллагаа · aid /eɪd/ — тусламж · framework /ˈfreɪmwɜːrk/ — суурь бүтэц<br>
        sustainable /səˈsteɪnəbl/ — тогтвортой · initiative /ɪˈnɪʃətɪv/ — санаачилга · accountability /əˌkaʊntəˈbɪləti/ — хариуцлага<br>
        governance /ˈɡʌvərnəns/ — засаглал · consensus /kənˈsensəs/ — зөвшилцөл · advocacy /ˈædvəkəsi/ — нөлөөллийн үйл ажиллагаа<br>
        multilateral /ˌmʌltiˈlætərəl/ — олон талт · pledge /pledʒ/ — амлалт · assembly /əˈsembli/ — чуулган</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It is widely accept that» ✗ → <b>accepted</b> (V3). «The agency is said to failed» ✗ → <b>is said to HAVE failed</b> ✓. «It is believed to reform is needed» ✗ → <b>It is believed THAT reform…</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «It is + V3 + THAT» (санаа), «Subject is + V3 + TO» (нэр үг руу). Хэн хэлснийг нуувал бодит өнгө.</p>`
    },
    phrases:[
      {en:"It is widely accepted that global cooperation has weakened.", pron:"ит из уайдли эксэптид зэт глоубл коуопэрэйшн хэз викэнд.", mn:"Дэлхийн хамтын ажиллагаа суларсан гэдгийг өргөнөөр хүлээн зөвшөөрдөг."},
      {en:"It should be noted that the resolution was not binding.", pron:"ит шүд би ноутид зэт зэ рэзэлюшн воз нот байндинг.", mn:"Уг тогтоол заавал биелэгдэх шинжгүй байсныг тэмдэглэх нь зүйтэй."},
      {en:"The organisation is said to have exceeded its budget.", pron:"зэ оргэнайзэйшн из сэд ту хэв эксийдид итс бажит.", mn:"Тус байгууллага төсвөө хэтрүүлсэн гэлцдэг."},
      {en:"It is often argued that aid creates dependency.", pron:"ит из офн аргюд зэт эйд криэйтс дипэндэнси.", mn:"Тусламж хараат байдал үүсгэдэг гэж байнга маргалддаг."},
      {en:"It cannot be denied that the summit achieved little.", pron:"ит кэннот би динайд зэт зэ саммит эчийвд литл.", mn:"Дээд хэмжээний уулзалт бага үр дүнд хүрсэн гэдгийг үгүйсгэх аргагүй."}
    ],
    exercises:[
      {q:"It is + V3:", parts:["It is widely ", " that reform is needed."], opts:["accepted","accept"], a:0, fix:"идэвхгүй → V3: accepted."},
      {q:"to have + V3:", parts:["The agency is said to ", " failed."], opts:["have","having"], a:0, fix:"өнгөрсөн → is said to HAVE failed."},
      {q:"that заавал:", parts:["It is believed ", " the data are flawed."], opts:["that","to"], a:0, fix:"It is believed THAT + өгүүлбэр."},
      {q:"Тэмдэглэх:", parts:["It should be ", " that funding fell."], opts:["noted","noting"], a:0, fix:"should be + V3 → noted."}
    ],
    speak:{ scene:'Олон улсын хурлын дүгнэлт', turns:[
      {ruby:"How would you summarise the panel's position?", pron:"хау вүд ю саммэрайз зэ пэнлз пэзишн?", mn:"Хэлэлцүүлгийн байр суурийг та яаж дүгнэх вэ?",
        choices:[{t:"It is widely accepted that current funding is inadequate.",best:true,mn:"Одоогийн санхүүжилт хангалтгүй гэдгийг өргөнөөр хүлээн зөвшөөрдөг."},{t:"It is widely accept that current funding is inadequate.",best:false,fix:"идэвхгүй → It is widely ACCEPTED (V3)."}]},
      {ruby:"Were there any concerns about the agency itself?", pron:"вэр зэр эни консөрнз эбаут зэ эйжэнси итсэлф?", mn:"Тус байгууллагын талаар санаа зовниж байсан уу?",
        choices:[{t:"Yes. It should be noted that the agency is believed to have mismanaged funds.",best:true,mn:"Тийм. Тус байгууллага хөрөнгийг буруу удирдсан гэж үздэгийг тэмдэглэх нь зүйтэй."},{t:"Yes. It should be noted that the agency is believed to mismanaged funds.",best:false,fix:"өнгөрсөн → is believed to HAVE mismanaged."}]},
      {ruby:"So was the summit a complete failure?", pron:"соу воз зэ саммит э кэмплийт фэйлюр?", mn:"Тэгэхээр дээд хэмжээний уулзалт бүрэн бүтэлгүйтсэн үү?",
        choices:[{t:"Not entirely, though it cannot be denied that little was actually agreed.",best:true,mn:"Тэр бүү хэл, гэхдээ бодитоор бага зүйл тохирсныг үгүйсгэх аргагүй."},{t:"Not entirely, though it cannot be deny that little was agreed.",best:false,fix:"cannot be + V3 → cannot be DENIED."}]}
    ]}
  },
  {
    id:'b2m6l9', title:"6.9 Дэлхийн эдийн засаг", level:"B2 · М6",
    blurb:"By and large, the economy is stable — Generalising opinion ⭐⭐",
    rule:{
      h:"Дэлхий & Улс төр: Ерөнхийлөн дүгнэх хэллэг (by and large / the vast majority)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Эдийн засгийн талаар <b>ерөнхий дүр зургийг</b> болгоомжтой, тэнцвэртэй ерөнхийлж хэлэх.<br><br>
        <b>by and large / on the whole (ерөнхийдөө):</b>
        <div style="margin:12px 0"><span class="tag">BY AND LARGE, the recovery has been steady.</span><span class="tag">ON THE WHOLE, exports have improved.</span></div>
        <b>broadly / generally speaking (өргөнөөр авч үзвэл):</b>
        <div style="margin:12px 0"><span class="tag">BROADLY SPEAKING, inflation is under control.</span></div>
        <b>тоо хэмжээ ерөнхийлөх:</b>
        <div style="margin:12px 0"><span class="tag">THE VAST MAJORITY of economists agree.</span><span class="tag">A significant proportion of jobs are at risk.</span></div>
        <b>болгоомжлол (болзолт):</b>
        <div style="margin:12px 0"><span class="tag">To a large extent, growth depends on trade.</span><span class="tag">For the most part, markets remain calm.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        economy /ɪˈkɑːnəmi/ — эдийн засаг · inflation /ɪnˈfleɪʃn/ — инфляц · recession /rɪˈseʃn/ — уналт<br>
        trade /treɪd/ — худалдаа · tariff /ˈtærɪf/ — гааль · currency /ˈkɜːrənsi/ — валют<br>
        investment /ɪnˈvestmənt/ — хөрөнгө оруулалт · productivity /ˌproʊdʌkˈtɪvəti/ — бүтээмж · unemployment /ˌʌnɪmˈplɔɪmənt/ — ажилгүйдэл<br>
        deficit /ˈdefɪsɪt/ — алдагдал · sanctions /ˈsæŋkʃnz/ — хориг · globalisation /ˌɡloʊbəlaɪˈzeɪʃn/ — даяаршил<br>
        commodity /kəˈmɑːdəti/ — түүхий эд · stagnation /stæɡˈneɪʃn/ — зогсонги байдал · surplus /ˈsɜːrpləs/ — илүүдэл</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «vast majority of economists AGREES» ✗ → олонх → <b>AGREE</b> (олон тоо). «by and large of the economy» ✗ — by and large <b>дангаараа</b> үг хэллэг. «on the all» ✗ → <b>on the whole</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «by and large / on the whole = ерөнхийдөө, the vast majority = дийлэнх». Ерөнхийлбэл болгоомжтой, туйлширсан үг бүү хэрэглэ.</p>`
    },
    phrases:[
      {en:"By and large, the global recovery has been slow but steady.", pron:"бай энд ларж, зэ глоубл рикавэри хэз бийн слоу бат стэди.", mn:"Ерөнхийдөө дэлхийн эдийн засгийн сэргэлт удаан ч тогтвортой байна."},
      {en:"On the whole, inflation appears to be easing.", pron:"он зэ хоул, инфлэйшн эпиэрз ту би иизинг.", mn:"Ерөнхийдөө инфляц буурч байгаа бололтой."},
      {en:"The vast majority of economists expect modest growth.", pron:"зэ васт мэжорити ов иконэмистс экспэкт модист гроус.", mn:"Эдийн засагчдын дийлэнх нь дунд зэргийн өсөлт хүлээж байна."},
      {en:"Broadly speaking, trade barriers have risen this year.", pron:"бродли спикинг, трэйд бэрриэрз хэв ризн зис йир.", mn:"Өргөнөөр авч үзвэл энэ жил худалдааны саад нэмэгдсэн."},
      {en:"To a large extent, growth still depends on exports.", pron:"ту э лаж экстэнт, гроус стил дипэндз он экспортс.", mn:"Ихээхэн хэмжээгээр өсөлт нь одоо ч экспортоос хамаарна."}
    ],
    exercises:[
      {q:"ерөнхийдөө:", parts:["", ", the market is stable this quarter."], opts:["By and large","In large"], a:0, fix:"тогтсон хэллэг → By and large."},
      {q:"олонх → үйл:", parts:["The vast majority of firms ", " optimistic."], opts:["are","is"], a:0, fix:"majority of firms → олон тоо → are."},
      {q:"өргөнөөр:", parts:["", " speaking, wages have stagnated."], opts:["Broadly","Wide"], a:0, fix:"Broadly speaking (тогтсон)."},
      {q:"бүхэлдээ:", parts:["On the ", ", exports improved."], opts:["whole","all"], a:0, fix:"on the WHOLE (all ✗)."}
    ],
    speak:{ scene:'Эдийн засгийн шинжилгээ', turns:[
      {ruby:"How healthy is the economy right now?", pron:"хау хэлси из зэ иконэми райт нау?", mn:"Одоо эдийн засаг хэр эрүүл байна вэ?",
        choices:[{t:"By and large, it's stable, though certain sectors remain fragile.",best:true,mn:"Ерөнхийдөө тогтвортой ч зарим салбар эмзэг хэвээр."},{t:"By and large of the economy, it's stable.",best:false,fix:"by and large дангаараа хэллэг → By and large, it's stable."}]},
      {ruby:"Do experts share that cautious optimism?", pron:"ду экспөртс шэр зэт кошэс оптимизм?", mn:"Мэргэжилтнүүд энэ болгоомжтой өөдрөг үзлийг хуваалцдаг уу?",
        choices:[{t:"Yes, the vast majority of analysts expect modest but positive growth.",best:true,mn:"Тийм, шинжээчдийн дийлэнх нь дунд зэргийн боловч эерэг өсөлт хүлээж байна."},{t:"Yes, the vast majority of analysts expects modest growth.",best:false,fix:"majority of analysts → олон тоо → EXPECT."}]},
      {ruby:"What is the single biggest risk ahead?", pron:"вот из зэ сингл бигэст риск эхэд?", mn:"Хамгийн том эрсдэл нь юу вэ?",
        choices:[{t:"Broadly speaking, rising tariffs could, to a large extent, slow trade.",best:true,mn:"Өргөнөөр авч үзвэл өсөж буй гааль ихээхэн хэмжээгээр худалдааг удаашруулж болзошгүй."},{t:"Broadly speaking, rising tariffs could, in the large extent, slow trade.",best:false,fix:"TO a large extent (in the ✗)."}]}
    ]}
  },
  {
    id:'b2m6l10', title:"6.10 Модулийн төсөл", level:"B2 · М6",
    blurb:"🏆 Улс төр-нийгмийн байр суурийн эссэ бичих",
    rule:{
      h:"Давтлага: B2 Модуль 6-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 6-ийн бүх бүтцийг нэгтгэж, жинхэнэ B2 түвшний <b>улс төр-нийгмийн байр суурийн эссэ</b> бичих.<br><br>
        <b>Модуль 6-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">They accused the government OF hiding the truth ⭐⭐⭐</span><span class="tag">He said they WOULD cut taxes (дам яриа) ⭐⭐⭐</span><span class="tag">WERE the talks TO fail, war would follow ⭐⭐⭐</span><span class="tag">IT IS dignity THAT matters (cleft) ⭐⭐</span><span class="tag">Talks failed; NONETHELESS, hope remains ⭐⭐</span><span class="tag">Borders closed, THEREBY trapping thousands ⭐⭐⭐</span><span class="tag">Citizens ARE ENTITLED TO appeal ⭐⭐⭐</span><span class="tag">IT IS WIDELY ACCEPTED THAT reform is needed ⭐⭐</span><span class="tag">BY AND LARGE, the economy is stable ⭐⭐</span></div>
        <b>🏆 Төсөл — Улс төр-нийгмийн байр суурийн эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <p style="margin-top:8px"><i>It is widely accepted that democracy depends on transparency. In my country, however, critics have accused the government of concealing key figures, and the opposition has blamed it for mismanaging the budget. What people truly demand is accountability, not empty promises. It is honest governance that builds trust. During the last campaign, the leaders said they would fight corruption; nonetheless, little has changed since. Were the authorities to open their records, public confidence would recover quickly. Under a fair system, every citizen is entitled to information and shall be free to protest peacefully. When independent media were silenced, thereby weakening scrutiny, corruption deepened, hence the growing anger. By and large, the vast majority of people still believe reform is possible. Had leaders acted sooner, this crisis would have been avoided. It should be noted that change requires patience. Conversely, doing nothing guarantees decline. What matters now is that we hold power to account — insofar as we stay united, progress is within reach.</i></p>
        <p style="margin-top:8px">Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 эссэгийн 4 давхар: <b>Байр суурь</b> (It is widely accepted that…, It is X that…) → <b>Нотолгоо</b> (accused of, blamed for, thereby, hence) → <b>Болзол</b> (Were…, Had…) → <b>Дүгнэлт</b> (By and large, nonetheless, insofar as).</p>`
    },
    phrases:[
      {en:"Critics have accused the government of concealing the truth.", pron:"критикс хэв экьюзд зэ гавэрнмэнт ов кэнсийлинг зэ трүс.", mn:"Шүүмжлэгчид засгийн газрыг үнэнийг нуусан гэж буруутгасан."},
      {en:"What people truly demand is accountability, not promises.", pron:"вот пийпл трули диманд из экаунтэбилити, нот промисиз.", mn:"Хүмүүсийн үнэхээр шаардаж буй зүйл бол хариуцлага болохоос амлалт биш."},
      {en:"Were the authorities to open their records, trust would return.", pron:"вэр зэ эсорэтиз ту оупэн зэйр рэкордз, траст вүд ритөрн.", mn:"Хэрэв эрх баригчид бүртгэлээ нээвэл итгэл сэргэнэ."},
      {en:"Every citizen is entitled to information and free to protest.", pron:"эври ситизн из интайтлд ту инфэрмэйшн энд фрий ту протэст.", mn:"Иргэн бүр мэдээлэл авах эрхтэй бөгөөд эсэргүүцэх эрх чөлөөтэй."},
      {en:"By and large, the vast majority still believe in reform.", pron:"бай энд ларж, зэ васт мэжорити стил билийв ин риформ.", mn:"Ерөнхийдөө дийлэнх хүн одоо ч шинэчлэлд итгэсээр."}
    ],
    exercises:[
      {q:"Давтлага (accuse):", parts:["They accused the party ", " hiding funds."], opts:["of","for"], a:0, fix:"accuse sb OF + -ing."},
      {q:"Давтлага (инверси):", parts:["", " the talks to fail, war would follow."], opts:["Were","If were"], a:0, fix:"урвуу нөхцөл → Were… (if ✗)."},
      {q:"Давтлага (entitled):", parts:["Citizens are entitled ", " a fair trial."], opts:["to","for"], a:0, fix:"be entitled TO."},
      {q:"Давтлага (impersonal):", parts:["It is widely ", " that reform is needed."], opts:["accepted","accept"], a:0, fix:"идэвхгүй → V3: accepted."}
    ],
    speak:{ scene:'🏆 Төсөл: Улс төрийн байр суурь', turns:[
      {ruby:"What is the biggest political problem in your country?", pron:"вот из зэ бигэст пэлитикл проблэм ин ёр кантри?", mn:"Танай улсын хамгийн том улс төрийн асуудал юу вэ?",
        choices:[{t:"It is widely accepted that corruption is the core issue, and critics have accused officials of hiding the truth.",best:true,mn:"Авлига гол асуудал гэдгийг өргөнөөр хүлээн зөвшөөрдөг бөгөөд шүүмжлэгчид албан тушаалтнуудыг үнэнийг нуусан гэж буруутгасан."},{t:"It is widely accept that corruption is the issue, and critics accused officials for hiding the truth.",best:false,fix:"accepted (V3); accuse sb OF → ACCEPTED that…, accused officials OF hiding."}]},
      {ruby:"Could this situation have been prevented?", pron:"күд зис ситюэйшн хэв бийн привэнтид?", mn:"Энэ байдлаас урьдчилан сэргийлж болох байсан уу?",
        choices:[{t:"Certainly. Had leaders acted sooner, the crisis would have been avoided; nonetheless, reform is still possible.",best:true,mn:"Мэдээж. Удирдагчид эрт арга хэмжээ авсан бол хямралаас зайлсхийх байсан; гэсэн ч шинэчлэл одоо ч боломжтой."},{t:"Certainly. Had leaders acted sooner, the crisis would be avoided; nonetheless of reform, it is possible.",best:false,fix:"Had… → would HAVE been avoided; nonetheless дангаараа → …avoided; NONETHELESS, reform…"}]},
      {ruby:"So what should happen next?", pron:"соу вот шүд хэпэн нэкст?", mn:"Тэгвэл цаашид юу болох ёстой вэ?",
        choices:[{t:"What matters is accountability. Were the government to open its records, thereby restoring trust, most people would support it.",best:true,mn:"Гол нь хариуцлага. Хэрэв засгийн газар бүртгэлээ нээж, ингэснээр итгэлийг сэргээвэл ард түмний дийлэнх нь дэмжинэ."},{t:"What matter is accountability. Were the government open its records, thereby restore trust, people would support it.",best:false,fix:"What MATTERS is…; Were … TO open…, thereby RESTORING → What matters is…, Were the government TO open…, thereby restoring."}]}
    ]}
  },
  {
    id:'b2m7l1', title:"7.1 Аяллын төлөвлөлт", level:"B2 · М7",
    blurb:"No sooner had we landed than it rained — Time & sequence advanced ⭐⭐",
    rule:{
      h:"Дүрэм: Цаг ба дараалал (гүнзгий) — no sooner…than / hardly…when / the moment / once / by the time",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Хоёр үйлдэл <b>бараг зэрэг</b> болсныг B2 түвшний нарийн бүтцээр илэрхийлэх.<br><br>
        <b>1) No sooner … than + inversion (урвуу дараалал):</b>
        <div style="margin:12px 0"><span class="tag">NO SOONER HAD WE LANDED THAN it started to rain.</span><span class="tag">No sooner had I booked the flight than the price dropped.</span></div>
        <b>2) Hardly / Scarcely … when + inversion:</b>
        <div style="margin:12px 0"><span class="tag">HARDLY HAD WE CHECKED IN WHEN the tour began.</span><span class="tag">Scarcely had I unpacked when my guide called.</span></div>
        <b>3) The moment / the instant / once (даруйд нь):</b>
        <div style="margin:12px 0"><span class="tag">THE MOMENT we arrived, we felt at home.</span><span class="tag">ONCE you've cleared security, head to gate 12.</span></div>
        <b>4) By the time (…гэхэд) → дараа нь Past Perfect:</b>
        <div style="margin:12px 0"><span class="tag">BY THE TIME we reached the hostel, it HAD closed.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        itinerary /aɪˈtɪnərəri/ — аяллын хөтөлбөр · destination /ˌdestɪˈneɪʃn/ — очих газар · departure /dɪˈpɑːrtʃər/ — хөдлөлт<br>
        arrival /əˈraɪvl/ — ирэлт · layover /ˈleɪoʊvər/ — дундын зогсоол · connection /kəˈnekʃn/ — залгах нислэг<br>
        boarding /ˈbɔːrdɪŋ/ — суудалд орох · schedule /ˈskedʒuːl/ — цагийн хуваарь · reservation /ˌrezərˈveɪʃn/ — захиалга<br>
        accommodation /əˌkɑːməˈdeɪʃn/ — байр · excursion /ɪkˈskɜːrʒn/ — аялал жуулчлал · voucher /ˈvaʊtʃər/ — эрхийн бичиг<br>
        estimated /ˈestɪmeɪtɪd/ — тооцоолсон · in advance /ɪn ədˈvæns/ — урьдчилан · flexible /ˈfleksəbl/ — уян хатан</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «No sooner we had landed» ✗ — урвуу дараалал заавал: <b>No sooner HAD WE landed</b> ✓. Мөн «no sooner … when» ✗ → <b>no sooner … THAN</b> ✓ (than!), харин <b>hardly … WHEN</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «No sooner–THAN, Hardly–WHEN» — эхэнд сөрөг үг гарвал <b>туслах үйл үг урагшаа</b>.</p>`
    },
    phrases:[
      {en:"No sooner had we landed than it started to rain.", pron:"ноу суунэр хэд ви лэндид зэн ит стартид ту рэйн.", mn:"Бид буусан даруйд бороо орж эхэлсэн."},
      {en:"Hardly had I checked in when the tour began.", pron:"хардли хэд ай чэкт ин вэн зэ тур бигэн.", mn:"Буудалд бүртгүүлмэгц аялал эхэлсэн."},
      {en:"The moment we arrived, we felt completely at home.", pron:"зэ моумэнт ви эрайвд, ви фэлт кэмплийтли эт хоум.", mn:"Ирсэн даруйдаа бид гэртээ л мэт санагдсан."},
      {en:"By the time we reached the hostel, it had already closed.", pron:"бай зэ тайм ви ричт зэ хостэл, ит хэд олрэди клоузд.", mn:"Буудалд хүрэх гэхэд аль хэдийн хаачихсан байсан."},
      {en:"Once you've cleared security, head straight to the gate.", pron:"ванс юв клийрд секьюрити, хэд стрэйт ту зэ гэйт.", mn:"Аюулгүй байдлын шалгалтыг өнгөрмөгц шууд гарц руугаа яв."}
    ],
    exercises:[
      {q:"Урвуу дараалал:", parts:["No sooner ", " than it rained."], opts:["had we landed","we had landed"], a:0, fix:"No sooner + HAD WE landed (урвуу)."},
      {q:"than эсвэл when:", parts:["No sooner had I paid ", " the price dropped."], opts:["than","when"], a:0, fix:"No sooner … THAN."},
      {q:"Даруйд:", parts:["The moment we ", ", we felt at home."], opts:["arrived","will arrive"], a:0, fix:"The moment + өнгөрсөн цаг → arrived."},
      {q:"By the time:", parts:["By the time we got there, it ", "."], opts:["had closed","closed"], a:0, fix:"By the time → Past Perfect: had closed."}
    ],
    speak:{ scene:'Нислэгийн буудал дээр', turns:[
      {ruby:"How was your trip so far?", pron:"хау воз ёр трип соу фар?", mn:"Аялал одоохондоо ямар байна?",
        choices:[{t:"Chaotic! No sooner had we landed than our connection was cancelled.",best:true,mn:"Замбараагүй! Буумагц залгах нислэг маань цуцлагдсан."},{t:"Chaotic! No sooner we landed than our connection was cancelled.",best:false,fix:"No sooner WE landed → No sooner HAD WE landed (урвуу)."}]},
      {ruby:"Oh no. Did you find another flight?", pron:"оу ноу. дид ю файнд эназэр флайт?", mn:"Өө яамай. Өөр нислэг оллоо юу?",
        choices:[{t:"Eventually. By the time we found one, the airport had nearly emptied.",best:true,mn:"Эцэст нь. Олох гэхэд буудал бараг хоосорчихсон байсан."},{t:"Eventually. By the time we found one, the airport nearly emptied.",best:false,fix:"By the time → Past Perfect: had nearly EMPTIED."}]},
      {ruby:"At least you're here now.", pron:"эт лийст юр хийр нау.", mn:"Ядаж одоо энд ирсэн шүү дээ.",
        choices:[{t:"True. The moment we reached the hotel, all the stress just melted away.",best:true,mn:"Үнэн. Зочид буудалд хүрсэн даруйд бүх стресс алга болсон."},{t:"True. The moment we will reach the hotel, all the stress melted away.",best:false,fix:"The moment + өнгөрсөн цаг → we REACHED (will reach ✗)."}]}
    ]}
  },
  {
    id:'b2m7l2', title:"7.2 Соёлын шок", level:"B2 · М7",
    blurb:"I was to have stayed a year, but… — Unrealised future-in-the-past ⭐⭐⭐",
    rule:{
      h:"Дүрэм: Биелээгүй ирээдүй-өнгөрсөнд — was to have + V3 / was going to but… / was about to when…",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсөнд <b>төлөвлөсөн ч биелээгүй</b> үйлдлийг илэрхийлэх — B2-ийн нарийн өнгө.<br><br>
        <b>1) was/were to have + V3 (төлөвлөсөн ч болоогүй):</b>
        <div style="margin:12px 0"><span class="tag">I WAS TO HAVE STAYED a year, but I left after a month.</span><span class="tag">We were to have met the mayor, but he cancelled.</span></div>
        <b>2) was going to … but … (…гэж байсан ч):</b>
        <div style="margin:12px 0"><span class="tag">I WAS GOING TO learn the language, BUT I never found time.</span></div>
        <b>3) was about to … when … (яг сая … гэтэл):</b>
        <div style="margin:12px 0"><span class="tag">I WAS ABOUT TO give up WHEN a local helped me.</span><span class="tag">She was on the point of leaving when things changed.</span></div>
        <b>Ялгаа:</b> <span class="tag">was to have done = албан ёсны/тохирсон төлөвлөгөө биелээгүй</span><span class="tag">was going to = хувийн санаа зорилго биелээгүй</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        culture shock /ˈkʌltʃər ʃɑːk/ — соёлын шок · adjust /əˈdʒʌst/ — дасан зохицох · homesick /ˈhoʊmsɪk/ — гэрээ санах<br>
        unfamiliar /ˌʌnfəˈmɪliər/ — танил бус · norms /nɔːrmz/ — хэм хэмжээ · etiquette /ˈetɪkət/ — ёс зүй<br>
        overwhelmed /ˌoʊvərˈwelmd/ — дарамттай · integrate /ˈɪntɪɡreɪt/ — уусан нэгдэх · mindset /ˈmaɪndset/ — сэтгэлгээ<br>
        expectation /ˌekspekˈteɪʃn/ — хүлээлт · disorienting /dɪsˈɔːrientɪŋ/ — чиг алдуулах · resilience /rɪˈzɪliəns/ — тэсвэр<br>
        gradual /ˈɡrædʒuəl/ — аажим · cope /koʊp/ — давах · perspective /pərˈspektɪv/ — үзэл өнцөг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I was to stay a year but I left» — биелээгүйг онцлох бол <b>was to HAVE STAYED</b> ✓. Мөн «I was about to leave when he came» дараа <b>when + Past Simple</b> ✓ (would ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Was to HAVE done = зэхсэн ч зэрэглэлээ давсангүй» — HAVE гарвал биелээгүй.</p>`
    },
    phrases:[
      {en:"I was to have stayed a year, but I left after a month.", pron:"ай воз ту хэв стэйд э йир, бат ай лэфт афтэр э манс.", mn:"Би жил байх ёстой байсан ч сарын дараа явсан."},
      {en:"We were to have met the mayor, but he cancelled.", pron:"ви вөр ту хэв мэт зэ мэйор, бат хи кэнсэлд.", mn:"Бид хотын даргатай уулзах ёстой байсан ч тэр цуцалсан."},
      {en:"I was going to learn the language, but I never found the time.", pron:"ай воз гоуинг ту лөрн зэ лэнгвиж, бат ай нэвэр фаунд зэ тайм.", mn:"Би хэл сурах гэж байсан ч цаг олж чадаагүй."},
      {en:"I was about to give up when a local helped me.", pron:"ай воз эбаут ту гив ап вэн э лоукал хэлпт ми.", mn:"Би бууж өгөх гэж байтал нутгийн хүн туслав."},
      {en:"She was on the point of leaving when everything changed.", pron:"ши воз он зэ пойнт ов лийвинг вэн эвритинг чэйнжд.", mn:"Тэр явахад бэлэн байтал бүх зүйл өөрчлөгдсөн."}
    ],
    exercises:[
      {q:"Биелээгүй:", parts:["I was to ", " a year, but I left early."], opts:["have stayed","stay"], a:0, fix:"Биелээгүй → was to HAVE stayed."},
      {q:"… but …:", parts:["I was going to integrate, ", " I felt overwhelmed."], opts:["but","so"], a:0, fix:"Санаа биелээгүй → but."},
      {q:"when + цаг:", parts:["I was about to leave when a local ", " me."], opts:["helped","would help"], a:0, fix:"when + Past Simple → helped."},
      {q:"on the point of:", parts:["She was on the point of ", "."], opts:["leaving","leave"], a:0, fix:"on the point OF + -ing → leaving."}
    ],
    speak:{ scene:'Гадаадад анх ирсэн тухай', turns:[
      {ruby:"So, how long did you live abroad?", pron:"соу, хау лонг дид ю лив эброд?", mn:"Тэгэхээр гадаадад хэдэн жил амьдарсан бэ?",
        choices:[{t:"Well, I was to have stayed a whole year, but the culture shock got the better of me.",best:true,mn:"Ер нь бол би бүтэн жил байх ёстой байсан ч соёлын шок надаас давсан."},{t:"Well, I was to stay a whole year, but I left early.",best:false,fix:"Биелээгүйг онцлох → was to HAVE STAYED."}]},
      {ruby:"That sounds tough. What was the hardest part?", pron:"зэт саундз таф. вот воз зэ хардист парт?", mn:"Хэцүү сонсогдож байна. Хамгийн хэцүү нь юу байсан бэ?",
        choices:[{t:"The norms felt so unfamiliar. I was about to give up when a neighbour reached out.",best:true,mn:"Хэм хэмжээ нь их танил бус санагдсан. Бууж өгөх гэж байтал хөрш маань тусалсан."},{t:"The norms felt unfamiliar. I was about to give up when a neighbour would reach out.",best:false,fix:"when + Past Simple → REACHED OUT (would ✗)."}]},
      {ruby:"Did things improve after that?", pron:"дид тингз импрув афтэр зэт?", mn:"Түүний дараа сайжирсан уу?",
        choices:[{t:"Gradually. I was going to move home, but I built real resilience instead.",best:true,mn:"Аажмаар. Гэртээ буцах гэж байсан ч оронд нь жинхэнэ тэсвэр хатуужил бий болсон."},{t:"Gradually. I was going to move home, so I built resilience.",best:false,fix:"Эсрэг санаа → BUT (so ✗)."}]}
    ]}
  },
  {
    id:'b2m7l3', title:"7.3 Гадаадад амьдрах", level:"B2 · М7",
    blurb:"If only I had learned the language sooner — Wish/if only + would rather (past) ⭐⭐⭐",
    rule:{
      h:"Дүрэм: Харамслыг илэрхийлэх — wish/if only (гүнзгий) + would rather/sooner (өнгөрсөн)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Өнгөрсний харамсал ба өөр хүний үйлдэлд гомдох сэтгэлийг нарийн илэрхийлэх.<br><br>
        <b>1) wish/if only + Past Perfect (өнгөрсний харамсал):</b>
        <div style="margin:12px 0"><span class="tag">IF ONLY I HAD LEARNED the language sooner!</span><span class="tag">I wish I hadn't wasted those first months.</span></div>
        <b>2) wish + would (өөр хүний зуршилд гомдох):</b>
        <div style="margin:12px 0"><span class="tag">I WISH people WOULD stop asking where I'm really from.</span></div>
        <b>3) would rather / would sooner + Past (өөр хүн өөр зүйл хийгээсэй):</b>
        <div style="margin:12px 0"><span class="tag">I'D RATHER you DIDN'T mention my accent.</span><span class="tag">I'd sooner you HADN'T told them my plans.</span></div>
        <b>Ялгаа:</b> <span class="tag">wish + PAST = одоогийн бодит бус (I wish I spoke Thai)</span><span class="tag">wish + PAST PERFECT = өнгөрсний харамсал (I wish I had studied)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        expat /ˈekspæt/ — гадаадад амьдрагч · relocate /ˌriːloʊˈkeɪt/ — нүүх · settle in /ˈsetl ɪn/ — дасан суурьших<br>
        residence /ˈrezɪdəns/ — оршин суух эрх · permit /ˈpɜːrmɪt/ — зөвшөөрөл · citizenship /ˈsɪtɪzənʃɪp/ — иргэншил<br>
        bureaucracy /bjʊˈrɑːkrəsi/ — хүнд суртал · fluent /ˈfluːənt/ — чөлөөтэй · belonging /bɪˈlɔːŋɪŋ/ — харьяалагдах мэдрэмж<br>
        assimilate /əˈsɪməleɪt/ — уусах · community /kəˈmjuːnəti/ — нийгэмлэг · isolation /ˌaɪsəˈleɪʃn/ — тусгаарлагдал<br>
        rooted /ˈruːtɪd/ — үндэс суусан · foreigner /ˈfɔːrənər/ — гадаад хүн · adaptation /ˌædæpˈteɪʃn/ — дасан зохицолт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I wish I learned the language sooner» — өнгөрсний харамсалд <b>wish I HAD LEARNED</b> ✓. Мөн «I'd rather you don't say» ✗ → <b>I'd rather you DIDN'T say</b> ✓ (өнгөрсөн хэлбэр).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Харамсал бол нэг алхам ухар» — одоо→PAST, өнгөрсөн→PAST PERFECT (HAD).</p>`
    },
    phrases:[
      {en:"If only I had learned the language before moving here.", pron:"иф оунли ай хэд лөрнд зэ лэнгвиж бифор мувинг хийр.", mn:"Хараал нь, нааш нүүхээсээ өмнө хэлийг сурсан бол."},
      {en:"I wish I hadn't wasted those first few months.", pron:"ай виш ай хэднт вэйстид зоуз фөрст фью манс.", mn:"Эхний хэдэн сарыг дэмий үрээгүй бол гэж хүсэж байна."},
      {en:"I wish people would stop treating me like a foreigner.", pron:"ай виш пийпл вүд стоп трийтинг ми лайк э форэнэр.", mn:"Хүмүүс намайг гадаад хүн шиг үзэхээ болиосой гэж хүсдэг."},
      {en:"I'd rather you didn't mention my residence permit.", pron:"айд разэр ю дидэнт мэншэн май рэзидэнс пөрмит.", mn:"Миний оршин суух зөвшөөрлийг дурдаагүй бол дээр байсан."},
      {en:"I'd sooner you hadn't told them about my plans.", pron:"айд суунэр ю хэднт толд зэм эбаут май плэнз.", mn:"Чи тэдэнд миний төлөвлөгөөг хэлээгүй бол дээр байсан."}
    ],
    exercises:[
      {q:"Өнгөрсний харамсал:", parts:["If only I ", " the language sooner."], opts:["had learned","learned"], a:0, fix:"Өнгөрсний харамсал → had learned."},
      {q:"wish + would:", parts:["I wish people ", " stop staring."], opts:["would","will"], a:0, fix:"wish + WOULD (will ✗)."},
      {q:"would rather + past:", parts:["I'd rather you ", " my accent."], opts:["didn't mention","don't mention"], a:0, fix:"would rather you → DIDN'T mention."},
      {q:"Одоогийн бодит бус:", parts:["I wish I ", " the local language fluently."], opts:["spoke","speak"], a:0, fix:"wish + PAST → spoke."}
    ],
    speak:{ scene:'Хуучин экспаттай ярилцах', turns:[
      {ruby:"Any regrets about relocating?", pron:"эни ригрэтс эбаут рийлоукэйтинг?", mn:"Нүүсэндээ харамсаж байгаа зүйл бий юу?",
        choices:[{t:"Just one — if only I had learned the language before I arrived.",best:true,mn:"Ганцхан — ирэхээсээ өмнө хэлийг сурсан бол гэж л боддог."},{t:"Just one — if only I learned the language before I arrived.",best:false,fix:"Өнгөрсний харамсал → IF ONLY I HAD LEARNED."}]},
      {ruby:"Do you feel settled now, though?", pron:"ду ю фийл сэтлд нау, зоу?", mn:"Гэхдээ одоо дасан суурьшсан гэж мэдэрч байна уу?",
        choices:[{t:"Mostly, yes. But I wish people would stop treating me as an outsider.",best:true,mn:"Ихэвчлэн тийм. Гэхдээ хүмүүс намайг гаднын хүн шиг үзэхээ болиосой гэж хүсдэг."},{t:"Mostly, yes. But I wish people will stop treating me as an outsider.",best:false,fix:"wish + WOULD (will ✗)."}]},
      {ruby:"Any advice for newcomers?", pron:"эни эдвайс фор нюкамэрз?", mn:"Шинэ ирэгсдэд зөвлөгөө өгөх үү?",
        choices:[{t:"Yes — I'd rather they didn't rush the paperwork like I did.",best:true,mn:"Тийм — тэд над шиг бичиг цаасаа яараагүй бол дээр гэж боддог."},{t:"Yes — I'd rather they don't rush the paperwork like I did.",best:false,fix:"would rather they → DIDN'T rush (don't ✗)."}]}
    ]}
  },
  {
    id:'b2m7l4', title:"7.4 Хил гааль", level:"B2 · М7",
    blurb:"Under no circumstances may you carry this — Fronted negatives + inversion ⭐⭐⭐",
    rule:{
      h:"Дүрэм: Урд талын сөрөг хэллэг + урвуу дараалал — Under no circumstances / At no point / In no way / Not only",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Сөрөг/хязгаарлах хэллэгийг өгүүлбэрийн эхэнд авчирч <b>албан ёсны онцлол</b> хийх.<br><br>
        <b>Дүрэм:</b> Сөрөг хэллэг урд гарвал → <b>туслах үйл үг + subject</b> (асуултын дараалал).<br><br>
        <b>Under no circumstances (ямар ч тохиолдолд … үгүй):</b>
        <div style="margin:12px 0"><span class="tag">UNDER NO CIRCUMSTANCES MAY you carry these items.</span></div>
        <b>At no point / In no way:</b>
        <div style="margin:12px 0"><span class="tag">AT NO POINT DID they check my visa.</span><span class="tag">IN NO WAY ARE you responsible for the delay.</span></div>
        <b>Not only … but also (урвуутай):</b>
        <div style="margin:12px 0"><span class="tag">NOT ONLY DID they search my bag, but they also questioned me.</span></div>
        <b>Never / Little / No sooner:</b>
        <div style="margin:12px 0"><span class="tag">NEVER HAVE I seen such a long queue.</span><span class="tag">LITTLE DID I know the flight was delayed.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        customs /ˈkʌstəmz/ — гааль · border /ˈbɔːrdər/ — хил · passport /ˈpæspɔːrt/ — гадаад паспорт<br>
        visa /ˈviːzə/ — виз · declare /dɪˈkler/ — мэдүүлэх · inspection /ɪnˈspekʃn/ — үзлэг<br>
        prohibited /prəˈhɪbɪtɪd/ — хориотой · confiscate /ˈkɑːnfɪskeɪt/ — хураах · smuggle /ˈsmʌɡl/ — нууц зөөвөрлөх<br>
        duty-free /ˌduːti ˈfriː/ — татваргүй · immigration /ˌɪmɪˈɡreɪʃn/ — цагаачлал · stamp /stæmp/ — тэмдэг<br>
        detain /dɪˈteɪn/ — саатуулах · quarantine /ˈkwɔːrəntiːn/ — тусгаарлан хорих · restriction /rɪˈstrɪkʃn/ — хязгаарлалт</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Under no circumstances you may enter» ✗ — урвуу заавал: <b>Under no circumstances MAY YOU enter</b> ✓. «Not only they searched…» ✗ → <b>Not only DID they search</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Сөрөг үг эхэнд → асуулт шиг эргүүл» (туслах үйл үг урагшаа).</p>`
    },
    phrases:[
      {en:"Under no circumstances may you carry liquids over 100ml.", pron:"андэр ноу сөркамстэнсиз мэй ю кэрри ликвидз оувэр э хандрэд эмэл.", mn:"Ямар ч тохиолдолд 100мл-ээс дээш шингэн авч явж болохгүй."},
      {en:"At no point did the officer explain the delay.", pron:"эт ноу пойнт дид зи офисэр иксплэйн зэ дилэй.", mn:"Ажилтан ямар ч үед саатлыг тайлбарлаагүй."},
      {en:"Not only did they search my bag, but they also questioned me.", pron:"нот оунли дид зэй сөрч май бэг, бат зэй олсоу квэсчэнд ми.", mn:"Тэд миний цүнхийг шалгаад зогсохгүй, намайг бас байцаасан."},
      {en:"In no way are you responsible for the missing form.", pron:"ин ноу вэй ар ю риспонсибл фор зэ мисинг форм.", mn:"Дутуу маягтын төлөө та ямар ч байдлаар хариуцлага хүлээхгүй."},
      {en:"Never have I seen such a thorough inspection.", pron:"нэвэр хэв ай сийн сач э соро инспэкшэн.", mn:"Би ийм нарийн үзлэгийг хэзээ ч үзээгүй."}
    ],
    exercises:[
      {q:"Урвуу:", parts:["Under no circumstances ", " these items."], opts:["may you carry","you may carry"], a:0, fix:"Сөрөг эхэнд → MAY YOU carry (урвуу)."},
      {q:"do-тэй урвуу:", parts:["At no point ", " my passport."], opts:["did they check","they checked"], a:0, fix:"At no point → DID they check."},
      {q:"Not only:", parts:["Not only ", " my bag, but also my coat."], opts:["did they search","they searched"], a:0, fix:"Not only → DID they search."},
      {q:"Never (Present Perfect):", parts:["Never ", " such a long queue."], opts:["have I seen","I have seen"], a:0, fix:"Never эхэнд → HAVE I seen."}
    ],
    speak:{ scene:'Гаальд байцаагдах', turns:[
      {ruby:"Do you have anything to declare?", pron:"ду ю хэв энитинг ту диклэр?", mn:"Мэдүүлэх зүйл байна уу?",
        choices:[{t:"Nothing at all. At no point did I purchase anything over the limit.",best:true,mn:"Огт байхгүй. Би хязгаараас хэтэрсэн зүйл ямар ч үед аваагүй."},{t:"Nothing at all. At no point I purchased anything over the limit.",best:false,fix:"At no point → DID I purchase (урвуу)."}]},
      {ruby:"We'll need to inspect your luggage.", pron:"вил нийд ту инспэкт ёр лагиж.", mn:"Бид таны ачаа тээшийг шалгах хэрэгтэй.",
        choices:[{t:"Of course. Under no circumstances would I refuse an official inspection.",best:true,mn:"Мэдээж. Ямар ч тохиолдолд би албан ёсны үзлэгээс татгалзахгүй."},{t:"Of course. Under no circumstances I would refuse an official inspection.",best:false,fix:"Under no circumstances → WOULD I refuse (урвуу)."}]},
      {ruby:"This looks fine. Sorry for the wait.", pron:"зис лукс файн. сорри фор зэ вэйт.", mn:"Зүгээр юм байна. Хүлээлгэсэнд уучлаарай.",
        choices:[{t:"No problem. Not only were you thorough, but you were also polite.",best:true,mn:"Зүгээр ээ. Та нарийн шалгаад зогсохгүй, эелдэг ч байлаа."},{t:"No problem. Not only you were thorough, but also polite.",best:false,fix:"Not only → WERE YOU thorough (урвуу)."}]}
    ]}
  },
  {
    id:'b2m7l5', title:"7.5 Аялал жуулчлал", level:"B2 · М7",
    blurb:"Having been warned, we avoided the scam — Advanced participle clauses ⭐⭐⭐",
    rule:{
      h:"Дүрэм: Причастийн гүнзгий бүтэц — Having + V3 / Having been + V3 / Given / Faced with",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хоёр өгүүлбэрийг <b>причастийн хэллэгээр</b> нягтруулж, албан бичгийн өнгө өгөх.<br><br>
        <b>1) Having + V3 (эхлээд болсон идэвхтэй үйлдэл):</b>
        <div style="margin:12px 0"><span class="tag">HAVING VISITED forty countries, she rarely gets lost.</span></div>
        <b>2) Having been + V3 (эхлээд болсон идэвхгүй үйлдэл):</b>
        <div style="margin:12px 0"><span class="tag">HAVING BEEN WARNED about scams, we stayed alert.</span></div>
        <b>3) Given (that) … (…-ыг харгалзан):</b>
        <div style="margin:12px 0"><span class="tag">GIVEN the language barrier, we managed surprisingly well.</span></div>
        <b>4) Faced with … (…-тай тулгарсан үедээ):</b>
        <div style="margin:12px 0"><span class="tag">FACED WITH a cancelled tour, they improvised their own trip.</span></div>
        <b>⚠️ Subject нэг байх ёстой:</b> <span class="tag">Having checked the map, WE set off. (map set off ✗ — WE л зөв)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        sightseeing /ˈsaɪtsiːɪŋ/ — үзвэр үзэх · landmark /ˈlændmɑːrk/ — дурсгалт газар · guided tour /ˈɡaɪdɪd tʊr/ — хөтчтэй аялал<br>
        souvenir /ˌsuːvəˈnɪr/ — дурсгалын зүйл · attraction /əˈtrækʃn/ — үзмэр · scenic /ˈsiːnɪk/ — үзэсгэлэнт<br>
        backpacker /ˈbækpækər/ — цүнхэн жуулчин · package tour /ˈpækɪdʒ tʊr/ — багц аялал · off-season /ˌɔːf ˈsiːzn/ — намжуу улирал<br>
        tourist trap /ˈtʊrɪst træp/ — жуулчны занга · haggle /ˈhæɡl/ — үнэ хэлэлцэх · stopover /ˈstɑːpoʊvər/ — түр зогсоол<br>
        breathtaking /ˈbreθteɪkɪŋ/ — амьсгаа хураам · overrated /ˌoʊvərˈreɪtɪd/ — хэт магтагдсан · authentic /ɔːˈθentɪk/ — жинхэнэ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Having warned about scams, we…» — өөрсдийг чинь сэрэмжлүүлсэн бол идэвхгүй: <b>Having BEEN warned</b> ✓. Мөн субьект таарахгүй байх: «Having checked in, the tour started» ✗.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Эхлээд болсон = HAVING; над руу чиглэсэн = HAVING BEEN».</p>`
    },
    phrases:[
      {en:"Having visited forty countries, she rarely gets lost.", pron:"хэвинг визитид форти кантриз, ши рэрли гэтс лост.", mn:"Дөчин орноор явсан болохоор тэр ховор төөрдөг."},
      {en:"Having been warned about scams, we stayed alert.", pron:"хэвинг бийн ворнд эбаут скэмз, ви стэйд элөрт.", mn:"Луйврын талаар сэрэмжлүүлэгдсэн болохоор бид сэрэмжтэй байлаа."},
      {en:"Given the language barrier, we managed surprisingly well.", pron:"гивн зэ лэнгвиж бэрриэр, ви мэнэжд сөпрайзингли вэл.", mn:"Хэлний саадыг харгалзвал бид гайхалтай сайн даван туулсан."},
      {en:"Faced with a cancelled tour, they planned their own route.", pron:"фэйст виз э кэнсэлд тур, зэй плэнд зэйр оун рут.", mn:"Цуцлагдсан аялалтай тулгарахдаа тэд өөрсдийн замаа төлөвлөсөн."},
      {en:"Having haggled for ten minutes, I got a fair price.", pron:"хэвинг хэглд фор тэн минитс, ай гот э фэйр прайс.", mn:"Арван минут үнэ хэлэлцсэний эцэст би зохистой үнэ авсан."}
    ],
    exercises:[
      {q:"Идэвхтэй причасти:", parts:["", " forty countries, she rarely gets lost."], opts:["Having visited","Having been visited"], a:0, fix:"Өөрөө очсон → HAVING VISITED."},
      {q:"Идэвхгүй причасти:", parts:["", " about scams, we stayed alert."], opts:["Having been warned","Having warned"], a:0, fix:"Биднийг сэрэмжлүүлсэн → HAVING BEEN WARNED."},
      {q:"Given:", parts:["", " the language barrier, we did well."], opts:["Given","Giving"], a:0, fix:"…-ыг харгалзан → GIVEN."},
      {q:"Faced with:", parts:["", " a cancelled tour, they improvised."], opts:["Faced with","Facing to"], a:0, fix:"…-тай тулгарч → FACED WITH."}
    ],
    speak:{ scene:'Туршлагатай жуулчинтай ярих', turns:[
      {ruby:"How do you never fall for tourist traps?", pron:"хау ду ю нэвэр фол фор турист трэпс?", mn:"Та яаж жуулчны зангад ороод байдаггүй юм бэ?",
        choices:[{t:"Having travelled for years, I've learned to spot them instantly.",best:true,mn:"Олон жил аялсан болохоор би тэднийг тэр даруй танихаа сурсан."},{t:"Having been travelled for years, I've learned to spot them.",best:false,fix:"Өөрөө аялсан → HAVING TRAVELLED (been ✗)."}]},
      {ruby:"Do scams still catch you out sometimes?", pron:"ду скэмз стил кэч ю аут самтаймз?", mn:"Луйвар одоо ч заримдаа таныг барьдаг уу?",
        choices:[{t:"Rarely. Having been warned early on, I always double-check prices.",best:true,mn:"Ховор. Эрт сэрэмжлүүлэгдсэн болохоор би үргэлж үнийг дахин шалгадаг."},{t:"Rarely. Having warned early on, I double-check prices.",best:false,fix:"Намайг сэрэмжлүүлсэн → HAVING BEEN WARNED."}]},
      {ruby:"Any tips for a first big trip?", pron:"эни типс фор э фөрст биг трип?", mn:"Анхны том аялалд зөвлөгөө өгөх үү?",
        choices:[{t:"Given how overwhelming it can be, plan loosely but stay flexible.",best:true,mn:"Хичнээн дарамттай байж болохыг харгалзан сул төлөвлө, гэхдээ уян хатан бай."},{t:"Giving how overwhelming it can be, plan loosely.",best:false,fix:"…-ыг харгалзан → GIVEN (Giving ✗)."}]}
    ]}
  },
  {
    id:'b2m7l6', title:"7.6 Дэлхийн хоол", level:"B2 · М7",
    blurb:"This dish is nothing like as spicy — Advanced comparatives ⭐⭐",
    rule:{
      h:"Дүрэм: Ижил/ялгаатай харьцуулалт (гүнзгий) — not nearly as / nothing like as / twice as / the same … as",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Ялгааны <b>хэмжээ</b>-г нарийвчлан илэрхийлэх (жаахан биш, огт биш, хэд дахин).<br><br>
        <b>1) not nearly as … as (ойролцоогоор ч …биш):</b>
        <div style="margin:12px 0"><span class="tag">This curry is NOT NEARLY AS spicy AS the one back home.</span></div>
        <b>2) nothing like as … as (огт л …биш):</b>
        <div style="margin:12px 0"><span class="tag">Street food here is NOTHING LIKE AS expensive AS in restaurants.</span></div>
        <b>3) twice / three times as … as (хэд дахин):</b>
        <div style="margin:12px 0"><span class="tag">This portion is TWICE AS big AS I expected.</span><span class="tag">It costs three times as much as at home.</span></div>
        <b>4) the same … as (ижил):</b>
        <div style="margin:12px 0"><span class="tag">It tastes THE SAME AS my grandmother's recipe.</span></div>
        <b>5) just as … as / half as … as:</b>
        <div style="margin:12px 0"><span class="tag">The dessert is JUST AS good AS the main course.</span><span class="tag">It's HALF AS sweet AS I feared.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        cuisine /kwɪˈziːn/ — хоолны соёл · dish /dɪʃ/ — хоол · flavour /ˈfleɪvər/ — амт<br>
        spicy /ˈspaɪsi/ — халуун ногоотой · savoury /ˈseɪvəri/ — давсархаг · bland /blænd/ — амтгүй<br>
        ingredient /ɪnˈɡriːdiənt/ — орц · recipe /ˈresəpi/ — жор · seasoning /ˈsiːzənɪŋ/ — амтлагч<br>
        delicacy /ˈdelɪkəsi/ — тансаг хоол · street food /ˈstriːt fuːd/ — гудамжны хоол · portion /ˈpɔːrʃn/ — хэмжээ<br>
        aroma /əˈroʊmə/ — үнэр · texture /ˈtekstʃər/ — бүтэц · staple /ˈsteɪpl/ — гол хүнс</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «not nearly so spicy than» ✗ — <b>as … AS</b> ашигла (than ✗). «twice bigger than» ✗ → <b>twice AS big AS</b> ✓. «the same like» ✗ → <b>the same AS</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Ижилд AS…AS, ялгаанд than» — twice/nearly/nothing like бүгд AS…AS-тэй.</p>`
    },
    phrases:[
      {en:"This curry is not nearly as spicy as the one back home.", pron:"зис карри из нот нийрли эз спайси эз зэ ван бэк хоум.", mn:"Энэ карри гэрийнхтэй ойролцоогоор ч халуун ногоотой биш."},
      {en:"Street food here is nothing like as expensive as in restaurants.", pron:"стрийт фууд хийр из нотинг лайк эз икспэнсив эз ин рэсторэнтс.", mn:"Энд гудамжны хоол ресторантайх шиг огт л үнэтэй биш."},
      {en:"This portion is twice as big as I expected.", pron:"зис поршэн из твайс эз биг эз ай икспэктид.", mn:"Энэ хэмжээ миний бодсоноос хоёр дахин том."},
      {en:"It tastes exactly the same as my grandmother's cooking.", pron:"ит тэйстс игзактли зэ сэйм эз май грэндмазэрз кукинг.", mn:"Энэ яг эмээгийнхтэй ижил амттай."},
      {en:"The dessert is just as memorable as the main dish.", pron:"зэ дизөрт из жаст эз мэмэрэбл эз зэ мэйн диш.", mn:"Амттан үндсэн хоолтой яг адил мартагдашгүй."}
    ],
    exercises:[
      {q:"as…as:", parts:["This dish is not nearly as spicy ", " the original."], opts:["as","than"], a:0, fix:"as … AS (than ✗)."},
      {q:"twice:", parts:["The portion is twice ", " I expected."], opts:["as big as","bigger than"], a:0, fix:"twice AS big AS (than ✗)."},
      {q:"the same:", parts:["It tastes the same ", " grandma's recipe."], opts:["as","like"], a:0, fix:"the same AS (like ✗)."},
      {q:"nothing like:", parts:["It's nothing like ", " expensive as at home."], opts:["as","so"], a:0, fix:"nothing like AS … as."}
    ],
    speak:{ scene:'Хоолны захад', turns:[
      {ruby:"Careful, they say this dish is really hot!", pron:"кэрфул, зэй сэй зис диш из рийли хот!", mn:"Болгоомжтой, энэ хоол их халуун ногоотой гэдэг!",
        choices:[{t:"Actually, it's not nearly as spicy as the food back in Mongolia.",best:true,mn:"Үнэндээ энэ Монголынхтой ойролцоогоор ч халуун ногоотой биш."},{t:"Actually, it's not nearly as spicy than the food back in Mongolia.",best:false,fix:"as spicy AS (than ✗)."}]},
      {ruby:"Is the street food good value?", pron:"из зэ стрийт фууд гуд вэлью?", mn:"Гудамжны хоол үнэ цэнэтэй юу?",
        choices:[{t:"Definitely. It's nothing like as pricey as the tourist restaurants.",best:true,mn:"Гарцаагүй. Жуулчны ресторантайх шиг огт л үнэтэй биш."},{t:"Definitely. It's nothing like so pricey than the tourist restaurants.",best:false,fix:"nothing like AS pricey AS (so/than ✗)."}]},
      {ruby:"Wow, that's a huge plate!", pron:"вау, зэтс э хьюж плэйт!", mn:"Өө, ямар том таваг вэ!",
        choices:[{t:"I know — it's twice as big as a normal portion back home.",best:true,mn:"Мэдэж байна — гэрийнхээ ердийн хэмжээнээс хоёр дахин том."},{t:"I know — it's twice bigger than a normal portion back home.",best:false,fix:"twice AS big AS (bigger than ✗)."}]}
    ]}
  },
  {
    id:'b2m7l7', title:"7.7 Хэл соёл", level:"B2 · М7",
    blurb:"Whatever you do, don't insult the food — Emphatic -ever / on earth ⭐⭐",
    rule:{
      h:"Дүрэм: -ever ба on earth-аар онцлох — whatever / whoever / wherever / however emphatic",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «Ямар ч байсан…», «Юу ч гэсэн…» гэсэн <b>онцлол ба буулт</b>-ыг илэрхийлэх.<br><br>
        <b>1) whatever/whoever/wherever = «ямар ч … хамаагүй»:</b>
        <div style="margin:12px 0"><span class="tag">WHATEVER you do, don't insult the local food.</span><span class="tag">WHOEVER you meet, greet them politely.</span></div>
        <b>2) however + adjective = «хичнээн … ч»:</b>
        <div style="margin:12px 0"><span class="tag">HOWEVER tired you are, stay respectful.</span><span class="tag">However strange it seems, follow the custom.</span></div>
        <b>3) no matter what/who/how (ижил утга):</b>
        <div style="margin:12px 0"><span class="tag">NO MATTER HOW hard it is, keep trying the language.</span></div>
        <b>4) on earth / ever = асуултыг онцлох (гайхшрал):</b>
        <div style="margin:12px 0"><span class="tag">What ON EARTH does this gesture mean?</span><span class="tag">Why EVER would they eat it cold?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        dialect /ˈdaɪəlekt/ — аялгуу · accent /ˈæksent/ — өргөлт · mother tongue /ˈmʌðər tʌŋ/ — эх хэл<br>
        bilingual /baɪˈlɪŋɡwəl/ — хос хэлтэн · gesture /ˈdʒestʃər/ — дохио зангаа · slang /slæŋ/ — хар яриа<br>
        proverb /ˈprɑːvɜːrb/ — зүйр үг · phrase /freɪz/ — хэллэг · vocabulary /vəˈkæbjələri/ — үгийн сан<br>
        pronunciation /prəˌnʌnsiˈeɪʃn/ — дуудлага · misunderstanding /ˌmɪsʌndərˈstændɪŋ/ — үл ойлголцол · fluency /ˈfluːənsi/ — чөлөөт байдал<br>
        literacy /ˈlɪtərəsi/ — бичиг үсэг · heritage /ˈherɪtɪdʒ/ — өв соёл · custom /ˈkʌstəm/ — ёс заншил</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Whatever do you, don't…» ✗ — үгийн дараалал: <b>Whatever YOU DO</b> ✓. «However you are tired» ✗ → <b>However TIRED you are</b> ✓ (however + шинж чанар шууд ард нь).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «-ever = хамаагүй; however-ийн ард шинж чанар шууд наалдана».</p>`
    },
    phrases:[
      {en:"Whatever you do, don't insult the local cuisine.", pron:"вотэвэр ю ду, доунт инсалт зэ лоукал квизийн.", mn:"Юу ч хийсэн нутгийн хоолыг доромжилж болохгүй."},
      {en:"Wherever you travel, learn a few polite phrases first.", pron:"вэрэвэр ю трэвл, лөрн э фью полайт фрэйзиз фөрст.", mn:"Хаашаа ч аялсан эхлээд хэдэн эелдэг хэллэг сур."},
      {en:"However strange the custom seems, respect it.", pron:"хауэвэр стрэйнж зэ кастэм сиймз, риспэкт ит.", mn:"Ёс заншил хичнээн хачин санагдсан ч хүндэл."},
      {en:"No matter how hard the accent is, keep practising.", pron:"ноу мэтэр хау хард зи эксэнт из, кийп прэктисинг.", mn:"Өргөлт хичнээн хэцүү байсан ч дадлагаа үргэлжлүүл."},
      {en:"What on earth does this hand gesture mean here?", pron:"вот он өрс даз зис хэнд жэсчэр мийн хийр?", mn:"Энд энэ гарын дохио юу гэсэн үг вэ, ер нь?"}
    ],
    exercises:[
      {q:"Үгийн дараалал:", parts:["Whatever ", ", stay polite."], opts:["you do","do you"], a:0, fix:"Whatever YOU DO (эргүүлэхгүй)."},
      {q:"however + adj:", parts:["However ", ", keep smiling."], opts:["tired you are","you are tired"], a:0, fix:"However TIRED you are (шинж чанар шууд ард)."},
      {q:"no matter:", parts:["No matter ", " it is, keep trying."], opts:["how hard","how much hard"], a:0, fix:"no matter HOW hard."},
      {q:"whoever:", parts:["", " you meet, greet them warmly."], opts:["Whoever","Whatever"], a:0, fix:"Хүнд → WHOEVER."}
    ],
    speak:{ scene:'Соёлын зөвлөгөө өгөх', turns:[
      {ruby:"Any golden rule for visiting a new culture?", pron:"эни голдэн рул фор визитинг э ню калчэр?", mn:"Шинэ соёлд зочлоход алтан дүрэм байна уу?",
        choices:[{t:"Yes — whatever you do, don't criticise their traditions openly.",best:true,mn:"Тийм — юу ч хийсэн уламжлалыг нь ил шүүмжилж болохгүй."},{t:"Yes — whatever do you, don't criticise their traditions.",best:false,fix:"Whatever YOU DO (do you ✗)."}]},
      {ruby:"What if I find a custom really odd?", pron:"вот иф ай файнд э кастэм рийли од?", mn:"Хэрэв би ёс заншлыг үнэхээр хачин гэж бодвол яах вэ?",
        choices:[{t:"However odd it seems, just observe and follow along quietly.",best:true,mn:"Хичнээн хачин санагдсан ч зүгээр л ажиглаад чимээгүй дага."},{t:"However it seems odd, just observe and follow along.",best:false,fix:"However ODD it seems (шинж чанар шууд ард нь)."}]},
      {ruby:"And if I make a mistake anyway?", pron:"энд иф ай мэйк э мистэйк энивэй?", mn:"Хэрэв би ямар ч байсан алдвал?",
        choices:[{t:"No matter how awkward it feels, apologise sincerely and move on.",best:true,mn:"Хичнээн эвгүй санагдсан ч чин сэтгэлээсээ уучлал гуйгаад цааш яв."},{t:"No matter how much awkward it feels, apologise and move on.",best:false,fix:"no matter HOW awkward (how much awkward ✗)."}]}
    ]}
  },
  {
    id:'b2m7l8', title:"7.8 Гадаад харилцаа", level:"B2 · М7",
    blurb:"Some agreed, others didn't — Ellipsis in speech & writing ⭐⭐",
    rule:{
      h:"Дүрэм: Эллипсис — давтагдсан үгсийг орхих (яриа ба бичгийн)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Давтагдсан үгсийг орхиж, ярианы <b>байгалийн урсгал</b>-ыг гаргах.<br><br>
        <b>1) Туслах үйл үгийн ард орхих:</b>
        <div style="margin:12px 0"><span class="tag">Some delegates agreed, others didn't [agree].</span><span class="tag">She speaks French, and so do I [speak French].</span></div>
        <b>2) to орхих (infinitive):</b>
        <div style="margin:12px 0"><span class="tag">I'd love to join, but I'm not able to [join].</span><span class="tag">You can leave if you want to [leave].</span></div>
        <b>3) Subject + be орхих (богино өгүүлбэр):</b>
        <div style="margin:12px 0"><span class="tag">[I'm] Not sure I agree.</span><span class="tag">[Have you] Seen the ambassador?</span></div>
        <b>4) Reduced clauses (when/while + -ing):</b>
        <div style="margin:12px 0"><span class="tag">WHEN [you are] IN DOUBT, ask the interpreter.</span><span class="tag">WHILE [she was] NEGOTIATING, she stayed calm.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        diplomacy /dɪˈploʊməsi/ — дипломат ажиллагаа · embassy /ˈembəsi/ — элчин сайдын яам · ambassador /æmˈbæsədər/ — элчин сайд<br>
        negotiate /nɪˈɡoʊʃieɪt/ — хэлэлцээр хийх · treaty /ˈtriːti/ — гэрээ · alliance /əˈlaɪəns/ — эвсэл<br>
        delegate /ˈdelɪɡət/ — төлөөлөгч · summit /ˈsʌmɪt/ — дээд хэмжээний уулзалт · sanction /ˈsæŋkʃn/ — хориг арга хэмжээ<br>
        cooperation /koʊˌɑːpəˈreɪʃn/ — хамтын ажиллагаа · mutual /ˈmjuːtʃuəl/ — харилцан · sovereignty /ˈsɑːvrənti/ — тусгаар тогтнол<br>
        interpreter /ɪnˈtɜːrprətər/ — хэлмэрч · consensus /kənˈsensəs/ — зөвшилцөл · bilateral /baɪˈlætərəl/ — хоёр талын</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Some agreed, others didn't agreed» ✗ — эллипсист бол давталтыг бүр орхи: <b>others didn't</b> ✓. «I want to join but I can't to» ✗ → <b>I can't</b> (to ганцаараа ✗ энд).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Давтагдсан үгийг таслаад орхи — туслах үйл үг эсвэл to л үлдэнэ».</p>`
    },
    phrases:[
      {en:"Some delegates agreed, but others didn't.", pron:"сам дэлэгэтс эгрийд, бат азэрз диднт.", mn:"Зарим төлөөлөгч зөвшөөрсөн ч зарим нь үгүй."},
      {en:"I'd love to attend the summit, but I'm not able to.", pron:"айд лав ту этэнд зэ самит, бат айм нот эйбл ту.", mn:"Дээд хэмжээний уулзалтад оролцмоор байгаа ч чадахгүй нь."},
      {en:"When in doubt, always ask the interpreter.", pron:"вэн ин даут, олвэйз аск зи интөрпрэтэр.", mn:"Эргэлзвэл үргэлж хэлмэрчээс асуу."},
      {en:"She speaks three languages, and so does he.", pron:"ши спийкс срий лэнгвижиз, энд соу даз хи.", mn:"Тэр гурван хэлээр ярьдаг, тэр эрэгтэй ч мөн адил."},
      {en:"While negotiating, the ambassador stayed remarkably calm.", pron:"вайл нигоушиэйтинг, зи эмбэсэдэр стэйд римаркабли кам.", mn:"Хэлэлцээр хийж байхдаа элчин сайд гайхалтай тайван байсан."}
    ],
    exercises:[
      {q:"Эллипсис:", parts:["Some agreed, others ", "."], opts:["didn't","didn't agreed"], a:0, fix:"Давталт орхи → others DIDN'T."},
      {q:"to үлдээх:", parts:["I'd love to join but I'm not able ", "."], opts:["to","to join it"], a:0, fix:"Богиносгож → able TO."},
      {q:"Reduced clause:", parts:["When ", ", ask the interpreter."], opts:["in doubt","you are being in doubt"], a:0, fix:"When [you are] IN DOUBT."},
      {q:"so do I:", parts:["She speaks French, and so ", " I."], opts:["do","am"], a:0, fix:"speaks → so DO I."}
    ],
    speak:{ scene:'Дипломат хүлээн авалт дээр', turns:[
      {ruby:"Did the delegates reach a consensus?", pron:"дид зэ дэлэгэтс рийч э кэнсэнсэс?", mn:"Төлөөлөгчид зөвшилцөлд хүрсэн үү?",
        choices:[{t:"Partly. Some supported the treaty, others didn't.",best:true,mn:"Хэсэгчлэн. Зарим нь гэрээг дэмжсэн, зарим нь үгүй."},{t:"Partly. Some supported the treaty, others didn't supported.",best:false,fix:"Эллипсис → others DIDN'T (didn't supported ✗)."}]},
      {ruby:"Will you attend tomorrow's session?", pron:"вил ю этэнд туморроуз сэшэн?", mn:"Маргаашийн хуралдаанд оролцох уу?",
        choices:[{t:"I'd like to, but I don't think I'll be able to.",best:true,mn:"Оролцмоор байна, гэхдээ чадахгүй байх гэж бодож байна."},{t:"I'd like to it, but I don't think I'll be able to it.",best:false,fix:"Эллипсис → I'd like TO (to it ✗)."}]},
      {ruby:"Any advice before I meet the ambassador?", pron:"эни эдвайс бифор ай мийт зи эмбэсэдэр?", mn:"Элчин сайдтай уулзахаас өмнө зөвлөгөө байна уу?",
        choices:[{t:"Yes — when unsure of the etiquette, follow your host's lead.",best:true,mn:"Тийм — ёс зүйдээ эргэлзвэл эзний удирдамжийг дага."},{t:"Yes — when you are being unsure the etiquette, follow the lead.",best:false,fix:"Reduced clause → when [you are] UNSURE (богиносго)."}]}
    ]}
  },
  {
    id:'b2m7l9', title:"7.9 Дурсамж", level:"B2 · М7",
    blurb:"We wandered off the beaten track — Idioms & binomials ⭐⭐",
    rule:{
      h:"Дүрэм: Хэлц үг ба хосмог хэллэг (аялал/туршлага) — off the beaten track, back and forth",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Аялал, дурсамжийг <b>жинхэнэ хэлц үг ба хосмог хэллэг</b>-ээр амьд болгох.<br><br>
        <b>1) Аяллын хэлц үгс (idioms):</b>
        <div style="margin:12px 0"><span class="tag">OFF THE BEATEN TRACK = хүн ховор, зэлүүд газар</span><span class="tag">A STONE'S THROW away = маш ойрхон</span><span class="tag">GET ITCHY FEET = аялах хүсэл төрөх</span><span class="tag">LIVE OUT OF A SUITCASE = байнга нүүдэллэх</span></div>
        <b>2) Binomials (тогтсон дараалалтай хос үг):</b>
        <div style="margin:12px 0"><span class="tag">BACK AND FORTH = хойш урагш</span><span class="tag">HERE AND THERE = тэндхийгүүр</span><span class="tag">NOW AND THEN = хааяа нэг</span><span class="tag">SICK AND TIRED = залхаж дарагдсан</span></div>
        <b>⚠️ Дараалал тогтмол:</b> <span class="tag">back and forth (forth and back ✗)</span><span class="tag">now and then (then and now ✗)</span>
        <b>3) Дурсамжийн хэллэг:</b>
        <div style="margin:12px 0"><span class="tag">It brings back memories.</span><span class="tag">Looking back, it was worth every penny.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        nostalgia /nɒˈstældʒə/ — дурсахуй · reminisce /ˌremɪˈnɪs/ — дурсан ярих · vivid /ˈvɪvɪd/ — тод<br>
        souvenir /ˌsuːvəˈnɪr/ — дурсгал · keepsake /ˈkiːpseɪk/ — дурсамжийн эд · flashback /ˈflæʃbæk/ — өнгөрсний зураг<br>
        wanderlust /ˈwɒndərlʌst/ — аялах хүсэл · escapade /ˈeskəpeɪd/ — адал явдал · unforgettable /ˌʌnfərˈɡetəbl/ — мартагдашгүй<br>
        spontaneous /spɒnˈteɪniəs/ — гэнэтийн · detour /ˈdiːtʊr/ — тойруу зам · milestone /ˈmaɪlstoʊn/ — гол үе<br>
        rugged /ˈrʌɡɪd/ — барзгар · remote /rɪˈmoʊt/ — алслагдсан · fond /fɒnd/ — эгээ дурсам</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «off the beaten road» ✗ — тогтсон хэлбэр: <b>off the beaten TRACK</b> ✓. Хосмог үгсийн дараалал солигдохгүй: <b>back and forth</b> ✓ (forth and back ✗).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хосмог хэллэг = чулуунд сийлсэн дараалалтай» — цээжил, орчуул биш.</p>`
    },
    phrases:[
      {en:"We wandered off the beaten track and found a hidden village.", pron:"ви вондэрд оф зэ бийтэн трэк энд фаунд э хидн вилиж.", mn:"Бид хүн ховор зэлүүд газраар тэнүүчилж, нуугдмал тосгон олсон."},
      {en:"The beach was just a stone's throw from our hostel.", pron:"зэ бийч воз жаст э стоунз сроу фром аур хостэл.", mn:"Далайн эрэг манай буудлаас чулуу шидэх зайд байсан."},
      {en:"Every spring I get itchy feet and start planning a trip.", pron:"эври спринг ай гэт ичи фийт энд старт плэннинг э трип.", mn:"Хавар болгон аялах хүсэл төрж, аялал төлөвлөж эхэлдэг."},
      {en:"We travelled back and forth between the two islands.", pron:"ви трэвлд бэк энд форс битвийн зэ ту айлэндз.", mn:"Бид хоёр арлын хооронд хойш урагш явсан."},
      {en:"Now and then, those vivid memories still come back to me.", pron:"нау энд зэн, зоуз вивид мэмэриз стил кам бэк ту ми.", mn:"Хааяа нэг тэр тод дурсамж над руу эргэж ирдэг."}
    ],
    exercises:[
      {q:"Хэлц:", parts:["We went off the beaten ", "."], opts:["track","road"], a:0, fix:"Тогтсон → off the beaten TRACK."},
      {q:"Хосмог дараалал:", parts:["We travelled back and ", "."], opts:["forth","front"], a:0, fix:"back and FORTH (тогтсон хос)."},
      {q:"Хэлц:", parts:["The sea was a stone's ", " away."], opts:["throw","jump"], a:0, fix:"a stone's THROW away."},
      {q:"Binomial:", parts:["Now and ", ", I miss those days."], opts:["then","after"], a:0, fix:"now and THEN (тогтсон хос)."}
    ],
    speak:{ scene:'Хуучин аялалаа дурсах', turns:[
      {ruby:"What's your favourite travel memory?", pron:"вотс ёр фэйвэрит трэвл мэмэри?", mn:"Аяллын хамгийн дуртай дурсамж чинь юу вэ?",
        choices:[{t:"Getting lost off the beaten track and stumbling on a tiny village.",best:true,mn:"Хүн ховор зэлүүд газраар төөрч, жижигхэн тосгон санамсаргүй олсон нь."},{t:"Getting lost off the beaten road and finding a tiny village.",best:false,fix:"Тогтсон хэлц → off the beaten TRACK (road ✗)."}]},
      {ruby:"Do you still think about that trip?", pron:"ду ю стил тинк эбаут зэт трип?", mn:"Тэр аяллаа одоо ч боддог уу?",
        choices:[{t:"Now and then, yes. It brings back such vivid memories.",best:true,mn:"Хааяа нэг тийм. Тэр их тод дурсамжийг сэргээдэг."},{t:"Then and now, yes. It brings such vivid memories back.",best:false,fix:"Хосмог дараалал → NOW AND THEN (then and now ✗)."}]},
      {ruby:"Would you go back there?", pron:"вүд ю гоу бэк зэр?", mn:"Тийшээ буцаж очих уу?",
        choices:[{t:"In a heartbeat. I always get itchy feet just thinking about it.",best:true,mn:"Тэр даруй. Түүнийг бодохоор л надад аялах хүсэл төрдөг."},{t:"In a heartbeat. I always get itchy legs just thinking about it.",best:false,fix:"Тогтсон хэлц → itchy FEET (legs ✗)."}]}
    ]}
  },
  {
    id:'b2m7l10', title:"7.10 Модулийн төсөл", level:"B2 · М7",
    blurb:"🏆 Аяллын өгүүлэмж / бодол илэрхийлэх эссэ бичих",
    rule:{
      h:"Давтлага: B2 Модуль 7-ийн бүх дүрэм",
      html:`<b>🎯 Зорилго:</b> Модуль 7-ийн бүх бүтцийг нэгтгэж, жинхэнэ B2 түвшний аяллын өгүүлэмж ба бодол илэрхийлэх эссэ бичих.<br><br>
        <b>Модуль 7-ийн дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">No sooner HAD we landed THAN it rained ⭐⭐</span><span class="tag">I was to HAVE stayed a year, but… ⭐⭐⭐</span><span class="tag">If only I HAD learned the language ⭐⭐⭐</span><span class="tag">Under no circumstances WOULD I refuse ⭐⭐⭐</span><span class="tag">HAVING BEEN warned, we stayed alert ⭐⭐⭐</span><span class="tag">Not nearly AS spicy AS home ⭐⭐</span><span class="tag">WHATEVER you do, respect the custom ⭐⭐</span><span class="tag">Some agreed, others DIDN'T (ellipsis) ⭐⭐</span><span class="tag">OFF THE BEATEN TRACK / back and forth ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Аяллын өгүүлэмж (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Two summers ago, I set off on the trip of a lifetime. I was to have travelled for three weeks, but a single month somehow turned into three. No sooner had I arrived than the culture shock hit me hard. Having been warned about tourist traps, I stayed cautious, yet the local food was nothing like as intimidating as I had feared. If only I had learned more of the language beforehand! At no point did I feel truly lost, though; whatever went wrong, a kind stranger always appeared. Some days were exhausting, others weren't. We wandered off the beaten track, travelling back and forth between remote villages that no guidebook mentioned. Under no circumstances would I trade those memories for anything. Looking back, given how nervous I had been, I coped surprisingly well. Now and then, that wanderlust still returns — and the moment it does, I start planning the next escape.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 өгүүлэмжийн 4 давхар: <b>Тавцан</b> (No sooner had…, I was to have…) → <b>Сорилт</b> (Having been warned, not nearly as…) → <b>Онцлол</b> (Under no circumstances, whatever) → <b>Эргэцүүлэл</b> (If only I had…, looking back, given…).</p>`
    },
    phrases:[
      {en:"I was to have travelled for three weeks, but it turned into a month.", pron:"ай воз ту хэв трэвлд фор срий викс, бат ит төрнд инту э манс.", mn:"Би гурван долоо хоног аялах ёстой байсан ч сар болж хувирсан."},
      {en:"No sooner had I arrived than the culture shock hit me.", pron:"ноу суунэр хэд ай эрайвд зэн зэ калчэр шок хит ми.", mn:"Ирсэн даруйд соёлын шок намайг цохисон."},
      {en:"Having been warned about scams, I stayed cautious.", pron:"хэвинг бийн ворнд эбаут скэмз, ай стэйд кошэс.", mn:"Луйврын талаар сэрэмжлүүлэгдсэн болохоор би болгоомжтой байсан."},
      {en:"Under no circumstances would I trade those memories.", pron:"андэр ноу сөркамстэнсиз вүд ай трэйд зоуз мэмэриз.", mn:"Ямар ч тохиолдолд би тэр дурсамжуудыг сольж авахгүй."},
      {en:"Looking back, given how nervous I was, I coped remarkably well.", pron:"лукинг бэк, гивн хау нөрвэс ай воз, ай коупт римаркабли вэл.", mn:"Эргэн харахад, хичнээн сандарч байснаа бодвол би гайхалтай сайн даван туулсан."}
    ],
    exercises:[
      {q:"Давтлага (урвуу):", parts:["No sooner ", " than it rained."], opts:["had we landed","we landed"], a:0, fix:"No sooner + HAD WE landed (урвуу)."},
      {q:"Давтлага (биелээгүй):", parts:["I was to ", " a year, but I left."], opts:["have stayed","stay"], a:0, fix:"Биелээгүй → was to HAVE stayed."},
      {q:"Давтлага (причасти):", parts:["", " warned, we stayed alert."], opts:["Having been","Having"], a:0, fix:"Биднийг сэрэмжлүүлсэн → HAVING BEEN warned."},
      {q:"Давтлага (харамсал):", parts:["If only I ", " the language sooner."], opts:["had learned","learned"], a:0, fix:"Өнгөрсний харамсал → had learned."}
    ],
    speak:{ scene:'🏆 Төсөл: Аяллын түүхээ өгүүлэх', turns:[
      {ruby:"Tell me about the most memorable trip you've taken.", pron:"тэл ми эбаут зэ моуст мэмэрэбл трип юв тэйкн.", mn:"Хийсэн хамгийн мартагдашгүй аяллынхаа тухай яриач.",
        choices:[{t:"Two summers ago I set off on a huge trip. No sooner had I arrived than culture shock hit me hard.",best:true,mn:"Хоёр жилийн өмнийн зун том аялалд гарсан. Ирсэн даруйд соёлын шок намайг хүчтэй цохисон."},{t:"Two summers ago I set off on a huge trip. No sooner I arrived than culture shock hit me.",best:false,fix:"Урвуу → No sooner HAD I arrived (I arrived ✗)."}]},
      {ruby:"How did you cope with the challenges?", pron:"хау дид ю коуп виз зэ чэлэнжиз?", mn:"Бэрхшээлийг яаж давсан бэ?",
        choices:[{t:"Having been warned about scams, I stayed alert — and the food was nothing like as scary as I'd feared.",best:true,mn:"Луйврын талаар сэрэмжлүүлэгдсэн болохоор сэрэмжтэй байсан — хоол нь бодсон шиг огт л аймаар биш байсан."},{t:"Having warned about scams, I stayed alert — the food was nothing like as scary than I feared.",best:false,fix:"HAVING BEEN warned; nothing like AS scary AS (than ✗)."}]},
      {ruby:"Any regrets, looking back?", pron:"эни ригрэтс, лукинг бэк?", mn:"Эргэн харахад харамсах зүйл бий юу?",
        choices:[{t:"If only I had learned more of the language! Still, under no circumstances would I trade those memories.",best:true,mn:"Хэлийг илүү сурсан бол! Гэсэн ч ямар ч тохиолдолд тэр дурсамжуудыг сольж авахгүй."},{t:"If only I learned more of the language! Still, under no circumstances I would trade those memories.",best:false,fix:"If only I HAD learned; Under no circumstances WOULD I trade (урвуу)."}]}
    ]}
  },
  {
    id:'b2m8l1', title:"8.1 Нийгмийн сүлжээ", level:"B2 · М8",
    blurb:"My post got shared — get-passive & have/get things done ⭐⭐",
    rule:{
      h:"Get-passive ба «have/get sth done»: болгуулах, тохиолдох",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Нийгмийн сүлжээний тухай ярихдаа <b>get-passive</b> (санамсаргүй/гэнэтийн үйлдэл) болон <b>have/get sth done</b> (өөрөө хийлгэх) нарийн ялгааг эзэмших.<br><br>
        <b>1. Get-passive</b> — «be + V3»-ийн ярианы, гэнэтийн/тааламжгүй хувилбар:
        <div style="margin:12px 0"><span class="tag">My post GOT SHARED over a thousand times overnight.</span><span class="tag">Her account GOT HACKED last week.</span></div>
        <b>2. have sth done vs get sth done</b> — өөр хүнээр хийлгэх (get = ярианы, хүчин чармайлттай):
        <div style="margin:12px 0"><span class="tag">I HAD my profile VERIFIED by the platform.</span><span class="tag">I finally GOT my account RECOVERED.</span></div>
        <b>3. have/get sth happen</b> — тааралдах, тохиолдох (санаандгүй):
        <div style="margin:12px 0"><span class="tag">I HAD my photos LEAKED without my consent. (надад ийм зүйл тохиолдсон)</span></div>
        <b>4. «have sb do» vs «get sb to do»</b> — хүнээр үйлдэл хийлгэх:
        <div style="margin:12px 0"><span class="tag">I HAD my brother SET UP the account. (шууд захиж хийлгэсэн — to ✗)</span><span class="tag">I GOT my brother TO SET UP the account. (ятгаж/эвлүүлж хийлгэсэн — to заавал)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        post /poʊst/ — нийтлэл · share /ʃer/ — хуваалцах · feed /fiːd/ — мэдээллийн урсгал<br>
        follower /ˈfɑːloʊər/ — дагагч · handle /ˈhændl/ — хаяг (нэр) · caption /ˈkæpʃn/ — тайлбар бичвэр<br>
        hashtag /ˈhæʃtæɡ/ — хаштаг · viral /ˈvaɪrəl/ — вируслаг тархсан · notification /ˌnoʊtɪfɪˈkeɪʃn/ — мэдэгдэл<br>
        engagement /ɪnˈɡeɪdʒmənt/ — оролцоо · scroll /skroʊl/ — гүйлгэх · profile /ˈproʊfaɪl/ — хувийн хуудас<br>
        verify /ˈverɪfaɪ/ — баталгаажуулах · hack /hæk/ — эвдэн нэвтрэх · timeline /ˈtaɪmlaɪn/ — цагийн хэлхээ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I got my brother SET UP it» ✗ → get + sb + <b>TO</b> do: <b>I got my brother TO set it up</b> ✓. Харин «have sb do» дараа to <b>байхгүй</b>: «I had him TO help» ✗ → <b>I had him help</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «GET ятгана → TO хэрэгтэй; HAVE захина → TO хэрэггүй». Санамсаргүйд «GOT + V3».</p>`
    },
    phrases:[
      {en:"My post got shared over a thousand times overnight.", pron:"май поуст гот шэрд оувэр э саузнд таймз оувэрнайт.", mn:"Миний нийтлэл шөнөдөө мянга гаруй удаа хуваалцагдсан."},
      {en:"Her account got hacked, so she had it verified again.", pron:"хөр экаунт гот хэкт, соу ши хэд ит вэрифайд эгэйн.", mn:"Түүний хаяг эвдэгдсэн тул дахин баталгаажуулуулсан."},
      {en:"I got my brother to set up my profile.", pron:"ай гот май брадэр ту сэт ап май проуфайл.", mn:"Ахаараа хуудсаа тохируулж өгүүлсэн."},
      {en:"I had a designer create my banner.", pron:"ай хэд э дизайнэр криэйт май бэнэр.", mn:"Дизайнераар баннераа хийлгэсэн."},
      {en:"I had my photos leaked without my consent.", pron:"ай хэд май фоутоуз ликт видаут май консэнт.", mn:"Зөвшөөрөлгүйгээр зурагнууд минь алдагдсан."}
    ],
    exercises:[
      {q:"get-passive:", parts:["My video ", " thousands of times."], opts:["got shared","got share"], a:0, fix:"get + V3 → got shared."},
      {q:"get sb TO do:", parts:["I got my sister ", " the app."], opts:["to install","install"], a:0, fix:"get sb → TO do: to install."},
      {q:"have sb do:", parts:["I had my friend ", " the caption."], opts:["write","to write"], a:0, fix:"have sb do → to байхгүй: write."},
      {q:"have sth done:", parts:["I had my account ", " by staff."], opts:["verified","verify"], a:0, fix:"have sth + V3 → verified."}
    ],
    speak:{ scene:'Нийгмийн сүлжээний хаяг', turns:[
      {ruby:"How did your reel get so popular?", pron:"хау дид ёр рийл гэт соу попьюлар?", mn:"Рийл чинь яаж ийм алдартай болов?",
        choices:[{t:"No idea! It just got shared by a big account and went viral.",best:true,mn:"Мэдэхгүй ээ! Том хаягаар хуваалцагдаад л вируслаг тархчихсан."},{t:"No idea! It just shared by a big account.",best:false,fix:"Идэвхгүй хэлбэр → It GOT SHARED."}]},
      {ruby:"Did you design that banner yourself?", pron:"дид ю дизайн зэт бэнэр ёрсэлф?", mn:"Тэр баннераа өөрөө зохиосон уу?",
        choices:[{t:"No, I had a designer create it and got my brother to upload it.",best:true,mn:"Үгүй, дизайнераар хийлгээд ахаараа байршуулуулсан."},{t:"No, I had a designer to create it and got my brother upload it.",best:false,fix:"HAD sb create (to ✗); GOT sb TO upload (to ✓)."}]},
      {ruby:"I heard your old account got hacked?", pron:"ай хөрд ёр оулд экаунт гот хэкт?", mn:"Хуучин хаяг чинь эвдэгдсэн гэсэн?",
        choices:[{t:"Yeah, it got hacked, but I finally got it recovered.",best:true,mn:"Тийм, эвдэгдсэн, гэхдээ эцэст нь сэргээлгэж чадсан."},{t:"Yeah, it hacked, but I finally recovered it done.",best:false,fix:"It GOT HACKED... I got it RECOVERED."}]}
    ]}
  },
  {
    id:'b2m8l2', title:"8.2 Цахим мэдээлэл", level:"B2 · М8",
    blurb:"She'll be reading it now — modal speculation in progress ⭐⭐⭐",
    rule:{
      h:"Модаль үргэлжлэх ба төгс-үргэлжлэх таамаг: will be doing / must have been -ing",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Одоо эсвэл өнгөрсөнд <b>үргэлжилж байгаа/байсан</b> үйлдлийг модаль үгээр таамаглах.<br><br>
        <b>1. will be doing = одоо магадгүй болж буй таамаг</b> (заавал ирээдүй биш!):
        <div style="margin:12px 0"><span class="tag">Don't call now — she'll be reading the news. (одоо уншиж байгаа байх)</span><span class="tag">They'll be checking their feeds right now.</span></div>
        <b>2. must / might / could + be doing = одоогийн таамаг</b>:
        <div style="margin:12px 0"><span class="tag">He's not replying — he must be streaming something.</span><span class="tag">She might be scrolling and not seeing your message.</span></div>
        <b>3. must / might have been doing = өнгөрсний үргэлжилсэн таамаг</b>:
        <div style="margin:12px 0"><span class="tag">His eyes were red — he MUST HAVE BEEN staring at the screen all night.</span><span class="tag">She didn't reply; she MIGHT HAVE BEEN uploading a video.</span></div>
        <b>Ялгаа:</b> <span class="tag">must be doing = ОДОО таамаг</span><span class="tag">must have been doing = ӨНГӨРСӨНД удаан таамаг</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        source /sɔːrs/ — эх сурвалж · headline /ˈhedlaɪn/ — гарчиг · update /ˈʌpdeɪt/ — шинэчлэл<br>
        breaking news /ˈbreɪkɪŋ nuːz/ — яаралтай мэдээ · stream /striːm/ — шууд дамжуулах · browse /braʊz/ — үзэж сонирхох<br>
        alert /əˈlɜːrt/ — сэрэмжлүүлэг · trending /ˈtrendɪŋ/ — эрэлттэй · coverage /ˈkʌvərɪdʒ/ — хамрах хүрээ<br>
        outlet /ˈaʊtlet/ — хэвлэлийн байгууллага · subscribe /səbˈskraɪb/ — бүртгүүлэх · bulletin /ˈbʊlətɪn/ — товч мэдээ<br>
        refresh /rɪˈfreʃ/ — сэргээх · notification /ˌnoʊtɪfɪˈkeɪʃn/ — мэдэгдэл · livestream /ˈlaɪvstriːm/ — шууд нэвтрүүлэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «He must have staring» ✗ → must have <b>BEEN</b> staring ✓. Мөн «She will read now» гэдэг нь одоо болж буй таамгийг илэрхийлэхгүй → <b>She'll BE READING now</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «ОДОО кино явж байна → WILL/MUST BE + ing; ӨНГӨРСӨНД удаан явсан → MUST HAVE BEEN + ing».</p>`
    },
    phrases:[
      {en:"Don't call now — she'll be reading the morning news.", pron:"доунт кол нау — шил би ридинг зэ морнинг нюз.", mn:"Одоо бүү залга — тэр өглөөний мэдээ уншиж байгаа байх."},
      {en:"He's not answering; he must be streaming a match.", pron:"хиз нот ансэринг; хи маст би стриминг э мэтч.", mn:"Хариу өгөхгүй байна; тоглолт шууд үзэж байгаа байх."},
      {en:"Her eyes were red — she must have been scrolling all night.", pron:"хөр айз вөр рэд — ши маст хэв бийн скроллинг ол найт.", mn:"Нүд нь улайсан — шөнөжингөө гүйлгэсэн байх."},
      {en:"They might have been watching the livestream when it crashed.", pron:"зэй майт хэв бийн вотчинг зэ лайвстрийм вэн ит крэшт.", mn:"Тасрах үед шууд нэвтрүүлгийг үзэж байсан байж магадгүй."},
      {en:"By ten, they'll be following the breaking news closely.", pron:"бай тэн, зэйл би фоллоуинг зэ брэйкинг нюз клоусли.", mn:"Арав гэхэд яаралтай мэдээг анхааралтай дагаж байх болно."}
    ],
    exercises:[
      {q:"одоо таамаг:", parts:["Don't disturb her — she ", " the news."], opts:["'ll be reading","'ll read"], a:0, fix:"одоо явж байгаа таамаг → will BE READING."},
      {q:"must be doing:", parts:["He isn't replying; he ", " something."], opts:["must be streaming","must stream"], a:0, fix:"одоо таамаг → must BE streaming."},
      {q:"өнгөрсөн үргэлж:", parts:["His eyes were red; he must ", " a screen."], opts:["have been watching","have watching"], a:0, fix:"must have BEEN watching."},
      {q:"might have been:", parts:["She didn't see it; she ", " a video."], opts:["might have been uploading","might been uploading"], a:0, fix:"might HAVE been uploading."}
    ],
    speak:{ scene:'Найзаа хайж байна', turns:[
      {ruby:"Why isn't Sara answering her phone?", pron:"вай изнт Сара ансэринг хөр фоун?", mn:"Сара яагаад утсаа авахгүй байгаа юм бол?",
        choices:[{t:"It's early — she'll be reading the news over coffee.",best:true,mn:"Эрт байна — кофе ууж мэдээ уншиж байгаа байх."},{t:"It's early — she reads the news now.",best:false,fix:"Одоо явж буй таамаг → she'LL BE READING."}]},
      {ruby:"He looked exhausted this morning.", pron:"хи лүкт эгзостид зис морнинг.", mn:"Тэр өнөө өглөө их ядарсан харагдсан.",
        choices:[{t:"He must have been streaming games all night again.",best:true,mn:"Дахиад л шөнөжингөө тоглоом дамжуулж байсан байх."},{t:"He must be streaming games all night.",best:false,fix:"Өнгөрсөнд удсан → must HAVE BEEN streaming."}]},
      {ruby:"Should I message him right now?", pron:"шүд ай мэсиж хим райт нау?", mn:"Одоо түүнд бичих үү?",
        choices:[{t:"Maybe wait — he might be watching a livestream and won't notice.",best:true,mn:"Түр хүлээ — шууд нэвтрүүлэг үзэж байгаад анзаарахгүй байж магадгүй."},{t:"Maybe wait — he might been watch a livestream.",best:false,fix:"might BE watching (одоо таамаг)."}]}
    ]}
  },
  {
    id:'b2m8l3', title:"8.3 Реклам", level:"B2 · М8",
    blurb:"Many of us ignore ads — advanced quantifiers ⭐⭐",
    rule:{
      h:"Тодотгогч: quantifier + of + төлөөний үг, no/none/neither, some/any",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Рекламын тухай ярихдаа <b>тоо хэмжээний тодотгогчийг</b> нарийн хэрэглэх.<br><br>
        <b>1. quantifier + OF + us/them/you/the...</b> (тодорхой бүлгээс хэсэг):
        <div style="margin:12px 0"><span class="tag">MANY OF US ignore online ads completely.</span><span class="tag">MOST OF THEM are targeted at teenagers.</span><span class="tag">NONE OF the adverts felt honest.</span></div>
        <b>«of» хэзээ ХЭРЭГГҮЙ:</b> ерөнхий утгаар нэр үгийн өмнө шууд:
        <div style="margin:12px 0"><span class="tag">Many ads are annoying. (of ✗)</span><span class="tag">Many OF the ads I saw were fake. (тодорхой → of ✓)</span></div>
        <b>2. no / none / neither:</b>
        <div style="margin:12px 0"><span class="tag">NO advert is completely neutral. (no + нэр үг)</span><span class="tag">NONE OF them are neutral. (none + of + төлөөний үг)</span><span class="tag">NEITHER of the two campaigns worked.</span></div>
        <b>3. some / any (нарийвчилсан):</b> some = эерэг санал/санал болголт; any = сөрөг/асуулт/«ямар ч»:
        <div style="margin:12px 0"><span class="tag">Would you like SOME feedback? (санал болголт → some)</span><span class="tag">I'll click ANY ad that looks useful. (ямар ч → any)</span><span class="tag">Hardly ANY of them are trustworthy.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        advert /ˈædvɜːrt/ — реклам · campaign /kæmˈpeɪn/ — кампанит ажил · brand /brænd/ — брэнд<br>
        target /ˈtɑːrɡɪt/ — чиглүүлэх · slogan /ˈsloʊɡən/ — уриа · sponsor /ˈspɑːnsər/ — ивээн тэтгэгч<br>
        promote /prəˈmoʊt/ — сурталчлах · audience /ˈɔːdiəns/ — үзэгчид · pop-up /ˈpɑːpʌp/ — гарч ирэх цонх<br>
        banner /ˈbænər/ — самбар зар · endorse /ɪnˈdɔːrs/ — дэмжиж сурталчлах · misleading /ˌmɪsˈliːdɪŋ/ — төөрөгдүүлсэн<br>
        clickbait /ˈklɪkbeɪt/ — дарлага өгөөш · consumer /kənˈsuːmər/ — хэрэглэгч · revenue /ˈrevənuː/ — орлого</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Many of ads» ✗ → тодорхой бол «many of <b>THE</b> ads» ✓; ерөнхий бол «many ads» ✓. Мөн «None of them IS» биш ярианд <b>are</b> түгээмэл: «None of them are honest» ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «OF гарвал ард нь THE/us/them — тодорхой бүлэг». «no + нэр, none + of».</p>`
    },
    phrases:[
      {en:"Many of us simply ignore online adverts.", pron:"мэни оф ас симпли игнор онлайн эдвөртс.", mn:"Бидний олонх нь онлайн рекламыг ердөө үл тоодог."},
      {en:"Most of them are targeted at young consumers.", pron:"моуст оф зэм а таргэтид эт янг консюмэрз.", mn:"Тэдгээрийн ихэнх нь залуу хэрэглэгчдэд чиглэсэн."},
      {en:"None of the campaigns felt genuinely honest.", pron:"нан оф зэ кампэйнз фэлт жэньюинли онэст.", mn:"Кампанит ажлуудын аль нь ч чин үнэнч санагдсангүй."},
      {en:"Hardly any of these slogans are memorable.", pron:"хардли эни оф зийз слоугэнз а мэмэрэбл.", mn:"Эдгээр уриануудын бараг аль нь ч сэтгэлд үлдэхээргүй."},
      {en:"Neither of the two banners caught my eye.", pron:"найзэр оф зэ ту бэнэрз кот май ай.", mn:"Хоёр самбар зарын аль нь ч миний нүдэнд өртсөнгүй."}
    ],
    exercises:[
      {q:"of + us:", parts:["Many ", " ignore pop-up ads."], opts:["of us","of we"], a:0, fix:"of + объект хэлбэр → of us."},
      {q:"тодорхой of:", parts:["Most ", " ads were misleading."], opts:["of the","of"], a:0, fix:"тодорхой бүлэг → of THE ads."},
      {q:"none:", parts:["", " of them are trustworthy."], opts:["None","No"], a:0, fix:"of + төлөөний → None; No + нэр үг."},
      {q:"neither:", parts:["", " of the two campaigns worked."], opts:["Neither","None"], a:0, fix:"хоёрын аль нь ч → Neither."}
    ],
    speak:{ scene:'Рекламын тухай маргаан', turns:[
      {ruby:"Do online ads actually influence you?", pron:"ду онлайн эдз экчуэли инфлуэнс ю?", mn:"Онлайн реклам чамд үнэхээр нөлөөлдөг үү?",
        choices:[{t:"Honestly, many of us just scroll past most of them.",best:true,mn:"Үнэнийг хэлэхэд, бидний олонх нь ихэнхийг нь гүйлгээд өнгөрдөг."},{t:"Honestly, many of us just scroll past most of they.",best:false,fix:"of + объект → most of THEM."}]},
      {ruby:"Were any of the campaigns convincing?", pron:"вөр эни оф зэ кампэйнз конвинсинг?", mn:"Кампанит ажлуудын аль нэг нь итгүүлэхүйц байсан уу?",
        choices:[{t:"None of them felt honest, to be fair.",best:true,mn:"Үнэнийг хэлэхэд аль нь ч үнэнч санагдаагүй."},{t:"No of them felt honest, to be fair.",best:false,fix:"of + them → NONE of them (No + нэр)."}]},
      {ruby:"So which slogan did you prefer?", pron:"соу вич слоугэн дид ю прифөр?", mn:"Тэгээд аль уриаг илүүд үзэв?",
        choices:[{t:"Neither of the two, to be honest — both were clickbait.",best:true,mn:"Үнэнийг хэлэхэд хоёрын аль нь ч биш — хоёулаа өгөөш байсан."},{t:"None of the two, to be honest — both were clickbait.",best:false,fix:"хоёрын хувьд → NEITHER of the two."}]}
    ]}
  },
  {
    id:'b2m8l4', title:"8.4 Мэдээллийн үнэн", level:"B2 · М8",
    blurb:"...which suggests it's fake — sentential relatives ⭐⭐⭐",
    rule:{
      h:"Холбоос гишүүн өгүүлбэр: бүхэл өгүүлбэрийг заах «which» ба quantifier + of + which/whom",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Мэдээллийн үнэн зөвийг шинжлэхэд шаардлагатай <b>нарийн холбоос өгүүлбэр</b> эзэмших.<br><br>
        <b>1. «which» нь БҮХЭЛ өгүүлбэрийг заана</b> (нэг үгийг биш) — таслалын дараа:
        <div style="margin:12px 0"><span class="tag">The article cited no sources, WHICH made me doubt it. (энэ бүхэн эргэлзүүлсэн)</span><span class="tag">She deleted the post, WHICH only spread it further.</span></div>
        <b>⚠️ «what» биш «which»:</b> <span class="tag">…, which suggests it's fake. (…, what ✗)</span>
        <b>2. quantifier + OF + which / whom</b> (албан ёсны бичгийн хэв маяг):
        <div style="margin:12px 0"><span class="tag">He shared ten claims, NONE OF WHICH were verified.</span><span class="tag">They interviewed experts, MOST OF WHOM disagreed.</span><span class="tag">Several reports appeared, ALL OF WHICH cited the same source.</span></div>
        <b>3. preposition + which/whom</b> (албан ёсны):
        <div style="margin:12px 0"><span class="tag">This is the site ON WHICH the rumour started.</span><span class="tag">The journalist TO WHOM I spoke confirmed it.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        fact-check /ˈfækt tʃek/ — баримт шалгах · misinformation /ˌmɪsɪnfərˈmeɪʃn/ — буруу мэдээлэл · hoax /hoʊks/ — худал зохиомол<br>
        rumour /ˈruːmər/ — цуурхал · claim /kleɪm/ — мэдэгдэл · evidence /ˈevɪdəns/ — нотолгоо<br>
        credible /ˈkredəbl/ — итгэл дагуулах · bias /ˈbaɪəs/ — талархал хандлага · verify /ˈverɪfaɪ/ — нягтлах<br>
        propaganda /ˌprɑːpəˈɡændə/ — суртал ухуулга · debunk /diːˈbʌŋk/ — худлыг илчлэх · accuracy /ˈækjərəsi/ — үнэн зөв байдал<br>
        distort /dɪˈstɔːrt/ — гуйвуулах · fabricate /ˈfæbrɪkeɪt/ — зохиомжлох · reliable /rɪˈlaɪəbl/ — найдвартай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «…, what made me doubt it» ✗ → бүхэл өгүүлбэр зааж буй бол <b>which</b> ✓. Мөн «none of which WERE» дараа таслал: «ten claims, none of which were verified» ✓ («none of them were» гэвэл 2 бие даасан өгүүлбэр).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Бүхэл санааг заана → , WHICH». «тоо + OF + WHICH/WHOM = нэг өгүүлбэр дотор».</p>`
    },
    phrases:[
      {en:"The article cited no sources, which made me doubt it.", pron:"зэ артикл сайтид ноу сорсэз, вич мэйд ми даут ит.", mn:"Тэр нийтлэл эх сурвалж дурдаагүй нь намайг эргэлзүүлсэн."},
      {en:"He posted ten claims, none of which were verified.", pron:"хи поустид тэн клэймз, нан оф вич вөр вэрифайд.", mn:"Тэр арван мэдэгдэл тавьсны аль нь ч батлагдаагүй."},
      {en:"They quoted several experts, most of whom disagreed.", pron:"зэй квоутид сэвэрэл экспөртс, моуст оф хум дисэгрийд.", mn:"Тэд хэд хэдэн шинжээчийг иш татсны ихэнх нь үл зөвшөөрсөн."},
      {en:"She shared it before fact-checking, which spread the hoax.", pron:"ши шэрд ит бифор фэкт-чэкинг, вич спрэд зэ хоукс.", mn:"Тэр шалгалгүй хуваалцсан нь худал мэдээг тараасан."},
      {en:"This is the forum on which the rumour first appeared.", pron:"зис из зэ форум он вич зэ румэр фөрст эпиэрд.", mn:"Энэ бол цуурхал анх гарч ирсэн форум юм."}
    ],
    exercises:[
      {q:"бүхэл санаа:", parts:["He gave no evidence, ", " worried me."], opts:["which","what"], a:0, fix:"бүхэл өгүүлбэр → which (what ✗)."},
      {q:"none of which:", parts:["Ten claims, none ", " were verified."], opts:["of which","of them"], a:0, fix:"нэг өгүүлбэр → of WHICH."},
      {q:"most of whom:", parts:["Experts, most ", " disagreed."], opts:["of whom","of which"], a:0, fix:"хүн → of WHOM."},
      {q:"prep + which:", parts:["The site on ", " it started is gone."], opts:["which","that"], a:0, fix:"prep + which (on that ✗)."}
    ],
    speak:{ scene:'Худал мэдээ шалгах', turns:[
      {ruby:"Why don't you trust that news story?", pron:"вай доунт ю траст зэт нюз стори?", mn:"Яагаад тэр мэдээнд итгэдэггүй юм бэ?",
        choices:[{t:"It cited no sources, which immediately made me suspicious.",best:true,mn:"Эх сурвалж дурдаагүй нь намайг тэр даруй сэжиглүүлсэн."},{t:"It cited no sources, what immediately made me suspicious.",best:false,fix:"бүхэл санаа → WHICH (what ✗)."}]},
      {ruby:"But it quoted several experts, didn't it?", pron:"бат ит квоутид сэвэрэл экспөртс, диднт ит?", mn:"Гэхдээ хэд хэдэн шинжээч иш татсан биз дээ?",
        choices:[{t:"It did, but most of whom later said they were misquoted.",best:true,mn:"Тийм ээ, гэхдээ ихэнх нь дараа буруу иш татсан гэсэн."},{t:"It did, but most of them who later said they were misquoted.",best:false,fix:"хүн, нэг өгүүлбэр → most of WHOM."}]},
      {ruby:"So how did the rumour spread so fast?", pron:"соу хау дид зэ румэр спрэд соу фаст?", mn:"Тэгээд цуурхал яаж ийм хурдан тарав?",
        choices:[{t:"People shared it without checking, which fuelled the whole hoax.",best:true,mn:"Хүмүүс шалгалгүй хуваалцсан нь бүх худал мэдээг өдөөсөн."},{t:"People shared it without checking, that fuelled the whole hoax.",best:false,fix:"таслалын дараа бүхэл санаа → WHICH."}]}
    ]}
  },
  {
    id:'b2m8l5', title:"8.5 Нөлөөлөгч", level:"B2 · М8",
    blurb:"Provided you stay honest — conditional variations ⭐⭐",
    rule:{
      h:"Нөхцөлийн хувилбарууд: unless / provided / as long as / supposing / what if / imagine",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ «If»-ээс цааш — нөлөөлөгчийн ертөнцийн тухай <b>олон янзын нөхцөл</b> илэрхийлэх.<br><br>
        <b>1. unless = «эс бөгөөс / …л биш бол»</b> (= if…not):
        <div style="margin:12px 0"><span class="tag">You won't grow UNLESS you post consistently. (тогтмол тавихгүй л бол)</span></div>
        <b>2. provided (that) / as long as = «…нөхцөлтэйгээр, л бол»</b>:
        <div style="margin:12px 0"><span class="tag">Brands will pay you PROVIDED your engagement is real.</span><span class="tag">You can stay authentic AS LONG AS you don't chase every trend.</span></div>
        <b>3. supposing / what if / imagine = таамаг тавих</b> (ярианы):
        <div style="margin:12px 0"><span class="tag">SUPPOSING you lost all your followers tomorrow?</span><span class="tag">WHAT IF a sponsor asked you to lie?</span><span class="tag">IMAGINE you went viral overnight.</span></div>
        <b>4. + өнгөрсөн цаг = төсөөлөл (2-р нөхцөлтэй адил):</b>
        <div style="margin:12px 0"><span class="tag">Supposing you HAD a million followers, WOULD you sell out?</span><span class="tag">What if a scandal BROKE — how WOULD you react?</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        influencer /ˈɪnfluənsər/ — нөлөөлөгч · collaboration /kəˌlæbəˈreɪʃn/ — хамтын ажиллагаа · authentic /ɔːˈθentɪk/ — жинхэнэ<br>
        sponsorship /ˈspɑːnsərʃɪp/ — ивээн тэтгэлэг · niche /niːʃ/ — тусгай салбар · reach /riːtʃ/ — хүрэх хүрээ<br>
        endorsement /ɪnˈdɔːrsmənt/ — дэмжлэг сурталчилгаа · monetize /ˈmʌnətaɪz/ — мөнгөжүүлэх · content /ˈkɑːntent/ — контент<br>
        credibility /ˌkredəˈbɪləti/ — итгэл нэр хүнд · fanbase /ˈfænbeɪs/ — шүтэн бишрэгчид · trend /trend/ — чиг хандлага<br>
        collaborate /kəˈlæbəreɪt/ — хамтрах · overnight /ˌoʊvərˈnaɪt/ — гэнэт нэг шөнөд · genuine /ˈdʒenjuɪn/ — чин үнэн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Unless you don't post» ✗ (давхар үгүйсгэл) → unless аль хэдийн «not» агуулна: <b>Unless you post</b> ✓. Мөн «provided» дараа will ✗: <b>provided your engagement IS real</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «UNLESS = if not; PROVIDED/AS LONG AS = зөвхөн … нөхцөлтэй; SUPPOSING/WHAT IF = таамаг».</p>`
    },
    phrases:[
      {en:"You won't grow unless you post consistently.", pron:"ю воунт гроу анлэс ю поуст консистэнтли.", mn:"Тогтмол тавихгүй л бол чи өсөхгүй."},
      {en:"Brands will pay you provided your engagement is real.", pron:"брэндз вил пэй ю провайдид ёр энгэйжмэнт из риал.", mn:"Оролцоо чинь жинхэнэ л бол брэндүүд төлбөр өгнө."},
      {en:"You can stay authentic as long as you don't chase every trend.", pron:"ю кэн стэй осэнтик эз лонг эз ю доунт чэйс эври трэнд.", mn:"Чиг хандлага бүрийг хөөхгүй л бол жинхэнэ хэвээрээ байж чадна."},
      {en:"Supposing you lost all your followers tomorrow, what would you do?", pron:"сэпоузинг ю лост ол ёр фоллоуэрз тумороу, вот вүд ю ду?", mn:"Маргааш бүх дагагчаа алдвал яах вэ?"},
      {en:"What if a sponsor asked you to promote something fake?", pron:"вот иф э спонсэр аскт ю ту промоут самсинг фэйк?", mn:"Хэрэв ивээн тэтгэгч худал зүйл сурталчилахыг хүсвэл яах вэ?"}
    ],
    exercises:[
      {q:"unless:", parts:["You won't grow ", " you post daily."], opts:["unless","if"], a:0, fix:"«…л биш бол» → unless."},
      {q:"давхар үгүйсгэл ✗:", parts:["Unless you ", ", nothing changes."], opts:["engage","don't engage"], a:0, fix:"unless аль хэдийн not → engage."},
      {q:"provided:", parts:["I'll collaborate ", " it's genuine."], opts:["provided","unless"], a:0, fix:"нөхцөлтэйгээр → provided."},
      {q:"supposing + past:", parts:["Supposing you ", " a scandal, what next?"], opts:["had","have"], a:0, fix:"төсөөлөл → past: had."}
    ],
    speak:{ scene:'Нөлөөлөгчтэй ярилцлага', turns:[
      {ruby:"What's the secret to growing a real audience?", pron:"вотс зэ сикрит ту гроуинг э риал одиэнс?", mn:"Жинхэнэ үзэгчдийг өсгөх нууц юу вэ?",
        choices:[{t:"You won't grow unless you post consistently and stay honest.",best:true,mn:"Тогтмол тавьж, үнэнч байхгүй л бол өсөхгүй."},{t:"You won't grow unless you don't post consistently.",best:false,fix:"давхар үгүйсгэл ✗ → unless you POST."}]},
      {ruby:"Would you ever take a sponsorship deal?", pron:"вүд ю эвэр тэйк э спонсэршип дийл?", mn:"Ивээн тэтгэлгийн гэрээ хэзээ нэгэн цагт авах уу?",
        choices:[{t:"Sure, provided the product actually fits my niche.",best:true,mn:"Мэдээж, бүтээгдэхүүн миний салбарт үнэхээр тохирч л байвал."},{t:"Sure, provided the product will actually fit my niche.",best:false,fix:"provided дараа will ✗ → provided it FITS."}]},
      {ruby:"But what if a brand asked you to fake a review?", pron:"бат вот иф э брэнд аскт ю ту фэйк э ривью?", mn:"Гэхдээ брэнд худал сэтгэгдэл бичихийг хүсвэл яах вэ?",
        choices:[{t:"Supposing that happened, I'd walk away — credibility matters more.",best:true,mn:"Тийм зүйл тохиолдвол би хол байх байсан — итгэл илүү чухал."},{t:"Supposing that happens, I walk away.",best:false,fix:"төсөөлөл → Supposing that HAPPENED, I'D walk away."}]}
    ]}
  },
  {
    id:'b2m8l6', title:"8.6 Хиймэл контент", level:"B2 · М8",
    blurb:"It IS fake — and that we can prove — emphasis ⭐⭐⭐",
    rule:{
      h:"Онцлолын нэгдэл: do-онцлол + it-cleft + урдаас гаргах (fronting)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хиймэл оюун ухааны контентын тухай мэтгэлцэхэд <b>гурван онцлолын арга</b> хослуулах.<br><br>
        <b>1. do / does / did — үйл үгийг онцлох:</b>
        <div style="margin:12px 0"><span class="tag">It DOES look real, but it's AI-generated.</span><span class="tag">I DID check the source — it was fabricated.</span></div>
        <b>2. it-cleft — «It is/was … that …» нэг хэсгийг онцлох:</b>
        <div style="margin:12px 0"><span class="tag">IT'S the realism THAT worries me, not the speed.</span><span class="tag">IT WAS a deepfake THAT started the panic.</span></div>
        <b>3. Fronting — чухал хэсгийг ӨГҮҮЛБЭРИЙН ЭХЭНД гаргах:</b>
        <div style="margin:12px 0"><span class="tag">What worries me is HOW REAL it looks. (wh-cleft)</span><span class="tag">NEVER have I seen such convincing fakes. (урд гарсан сөрөг → урвуу дараалал!)</span><span class="tag">SO realistic was the image THAT nobody questioned it.</span></div>
        <b>⚠️ Сөрөг үг урдаа гарвал урвуу дараалал:</b>
        <div style="margin:12px 0"><span class="tag">Never HAVE I seen… (Never I have seen ✗)</span><span class="tag">Rarely DOES a fake look this good.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        deepfake /ˈdiːpfeɪk/ — гүн хуурмаг · generate /ˈdʒenəreɪt/ — үүсгэх · synthetic /sɪnˈθetɪk/ — хиймэл<br>
        algorithm /ˈælɡərɪðəm/ — алгоритм · artificial /ˌɑːrtɪˈfɪʃl/ — зохиомол · realistic /ˌriːəˈlɪstɪk/ — бодит мэт<br>
        manipulate /məˈnɪpjuleɪt/ — гуйвуулах · automate /ˈɔːtəmeɪt/ — автоматжуулах · prompt /prɑːmpt/ — заавар оруулга<br>
        detect /dɪˈtekt/ — илрүүлэх · watermark /ˈwɔːtərmɑːrk/ — усан тэмдэг · authentic /ɔːˈθentɪk/ — жинхэнэ<br>
        counterfeit /ˈkaʊntərfɪt/ — хуурамч · deceptive /dɪˈseptɪv/ — хуурмаг · replicate /ˈreplɪkeɪt/ — хуулбарлах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Never I have seen» ✗ → сөрөг үг урдаа гарвал урвуу: <b>Never HAVE I seen</b> ✓. It-cleft-д «It is the realism WHAT worries me» ✗ → <b>THAT</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «DO = үйл онцолно; IT…THAT = зүйл онцолно; сөрөг урдаа → урвуу дараалал».</p>`
    },
    phrases:[
      {en:"It does look real, but it's completely AI-generated.", pron:"ит даз лүк риал, бат итс комплитли эй-ай жэнэрэйтид.", mn:"Энэ бодит харагдаж байгаа ч бүрэн хиймэл оюунаар үүсгэсэн."},
      {en:"It's the realism that worries me, not the technology itself.", pron:"итс зэ риэлизм зэт ворриз ми, нот зэ тэкнолэжи итсэлф.", mn:"Намайг зовоож буй нь технологи биш, бодит мэт байдал нь юм."},
      {en:"It was a deepfake that started the whole panic.", pron:"ит воз э дийпфэйк зэт стартид зэ хоул пэник.", mn:"Бүх сандралыг эхлүүлсэн нь гүн хуурмаг бичлэг байсан."},
      {en:"Never have I seen such convincing counterfeit videos.", pron:"нэвэр хэв ай сийн сач конвинсинг каунтэрфит видиоуз.", mn:"Ийм итгэмээр хуурамч бичлэгийг би хэзээ ч үзээгүй."},
      {en:"So realistic was the image that nobody questioned it.", pron:"соу риэлистик воз зэ имиж зэт ноубади квэсчэнд ит.", mn:"Тэр зураг маш бодит байсан тул хэн ч эргэлзсэнгүй."}
    ],
    exercises:[
      {q:"do-онцлол:", parts:["It ", " look real, but it's fake."], opts:["does","is"], a:0, fix:"үйл онцлол → does look."},
      {q:"it-cleft:", parts:["It's the realism ", " scares me."], opts:["that","what"], a:0, fix:"it-cleft → THAT (what ✗)."},
      {q:"урвуу дараалал:", parts:["Never ", " seen such fakes."], opts:["have I","I have"], a:0, fix:"сөрөг урдаа → HAVE I."},
      {q:"fronting:", parts:["So realistic ", " that nobody doubted it."], opts:["was the image","the image was"], a:0, fix:"So + adj урдаа → урвуу: WAS the image."}
    ],
    speak:{ scene:'Хиймэл контентын мэтгэлцээн', turns:[
      {ruby:"Come on, that photo is obviously edited.", pron:"кам он, зэт фоутоу из обвиэсли эдитид.", mn:"Наад зураг чинь илт засварласан шүү дээ.",
        choices:[{t:"Actually, it does look genuine — that's exactly the problem.",best:true,mn:"Үнэндээ жинхэнэ шиг харагдаж байгаа нь яг л асуудал."},{t:"Actually, it looks genuine does — that's the problem.",best:false,fix:"do-онцлол → it DOES look genuine."}]},
      {ruby:"So what exactly bothers you about AI images?", pron:"соу вот эгзэктли бозэрз ю эбаут эй-ай имижиз?", mn:"Хиймэл зурагт чамайг яг юу нь зовоодог вэ?",
        choices:[{t:"It's the realism that worries me, not the creativity.",best:true,mn:"Намайг зовоож буй нь бүтээлч чанар биш, бодит мэт байдал нь."},{t:"It's the realism what worries me, not the creativity.",best:false,fix:"it-cleft → THAT (what ✗)."}]},
      {ruby:"Have you ever been fooled by one?", pron:"хэв ю эвэр бийн фүлд бай ван?", mn:"Хэзээ нэгэн цагт нэгэнд нь хууртаж байсан уу?",
        choices:[{t:"Never have I been so completely fooled as last month.",best:true,mn:"Өнгөрсөн сар шиг ийм бүрэн хууртсан үе хэзээ ч байгаагүй."},{t:"Never I have been so completely fooled as last month.",best:false,fix:"сөрөг урдаа → Never HAVE I been."}]}
    ]}
  },
  {
    id:'b2m8l7', title:"8.7 Мэдээллийн ачаалал", level:"B2 · М8",
    blurb:"Moreover, it harms focus — argument linkers ⭐⭐",
    rule:{
      h:"Аргументийн холбоос үгс: moreover, furthermore, in addition, likewise, similarly",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Мэдээллийн хэт ачааллын тухай <b>албан ёсны маргаан</b> дэвшүүлэхэд холбоос үгсийг зөв ашиглах.<br><br>
        <b>1. Санаа НЭМЭХ (moreover / furthermore / in addition / what is more):</b>
        <div style="margin:12px 0"><span class="tag">Constant alerts drain our focus. MOREOVER, they raise stress levels.</span><span class="tag">FURTHERMORE, endless scrolling disrupts sleep.</span><span class="tag">IN ADDITION, it shortens our attention span.</span></div>
        <b>2. ИЖИЛ санаа зэрэгцүүлэх (likewise / similarly / in the same way):</b>
        <div style="margin:12px 0"><span class="tag">Adults struggle to unplug. SIMILARLY, teenagers feel unable to log off.</span><span class="tag">LIKEWISE, notifications interrupt deep work.</span></div>
        <b>3. Байрлал ба цэглэл</b> — ихэвчлэн өгүүлбэрийн эхэнд, ард нь таслал:
        <div style="margin:12px 0"><span class="tag">…focus. Moreover, … (цэг → Moreover, том үсэг, таслал)</span><span class="tag">…focus; moreover, … (цэг таслал ч болно)</span></div>
        <b>⚠️ Ялгаа:</b> <span class="tag">Moreover = НЭМЭЛТ санаа</span><span class="tag">Similarly = АДИЛ жишээ</span><span class="tag">However = ЭСРЭГ (энд биш!)</span>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        overload /ˈoʊvərloʊd/ — хэт ачаалал · distraction /dɪˈstrækʃn/ — сатааруулагч · attention span /əˈtenʃn spæn/ — анхаарлын тэсвэр<br>
        multitask /ˌmʌltiˈtæsk/ — олон зэрэг хийх · burnout /ˈbɜːrnaʊt/ — сэтгэлийн шаналал · unplug /ˌʌnˈplʌɡ/ — салах амрах<br>
        constant /ˈkɑːnstənt/ — байнгын · notification /ˌnoʊtɪfɪˈkeɪʃn/ — мэдэгдэл · filter /ˈfɪltər/ — шүүх<br>
        prioritize /praɪˈɔːrətaɪz/ — эрэмбэлэх · digest /ˈdaɪdʒest/ — товч түүвэр · saturate /ˈsætʃəreɪt/ — ханах дүүрэх<br>
        cognitive /ˈkɑːɡnətɪv/ — танин мэдэхүйн · overwhelm /ˌoʊvərˈwelm/ — дийлдэшгүй болгох · streamline /ˈstriːmlaɪn/ — хялбарчлах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Moreover it drains focus» ✗ (таслалгүй) → <b>Moreover, it drains focus</b> ✓. Мөн «Furthermore» болон «However» хутгах — нэмэлт санаанд <b>Furthermore</b>, эсрэг санаанд <b>However</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «НЭМ → Moreover/Furthermore/In addition; АДИЛ → Similarly/Likewise; эхэнд + таслал».</p>`
    },
    phrases:[
      {en:"Constant notifications drain our focus. Moreover, they raise stress.", pron:"констэнт ноутификэйшнз дрэйн аур фоукас. морэувэр, зэй рэйз стрэс.", mn:"Байнгын мэдэгдэл анхаарлыг сарниулна. Түүнээс гадна стрессийг нэмэгдүүлдэг."},
      {en:"Furthermore, endless scrolling seriously disrupts our sleep.", pron:"фөрзэрмор, эндлэс скроллинг сириэсли дисрэптс аур слийп.", mn:"Цаашилбал, эцэс төгсгөлгүй гүйлгэлт нойрыг ноцтой алдагдуулдаг."},
      {en:"In addition, information overload shortens our attention span.", pron:"ин эдишн, информэйшн оувэрлоуд шортэнз аур этэншн спэн.", mn:"Түүнчлэн мэдээллийн хэт ачаалал анхаарлын тэсвэрийг богиносгодог."},
      {en:"Adults rarely unplug. Similarly, teenagers cannot log off.", pron:"эдалтс рэрли анплаг. симиларли, тийнэйжэрз кэннот лог оф.", mn:"Насанд хүрэгчид ховор амардаг. Үүнтэй адил өсвөр насныхан салж чаддаггүй."},
      {en:"Likewise, constant multitasking harms deep, focused work.", pron:"лайквайз, констэнт малтитаскинг хармз дийп, фоукаст вөрк.", mn:"Мөн адил байнга олон зэрэг хийх нь гүн, төвлөрсөн ажилд хортой."}
    ],
    exercises:[
      {q:"нэмэлт санаа:", parts:["It drains focus. ", ", it raises stress."], opts:["Moreover","However"], a:0, fix:"нэмэлт → Moreover (эсрэг ✗)."},
      {q:"таслал:", parts:["Furthermore", " it disrupts sleep."], opts:[", ","  "], a:0, fix:"холбоос дараа таслал → Furthermore,"},
      {q:"адил санаа:", parts:["Adults struggle. ", ", teenagers do too."], opts:["Similarly","In contrast"], a:0, fix:"адил жишээ → Similarly."},
      {q:"нэмэх:", parts:["", ", overload shortens attention."], opts:["In addition","Instead"], a:0, fix:"нэмэлт → In addition."}
    ],
    speak:{ scene:'Мэдээллийн ачааллын илтгэл', turns:[
      {ruby:"Why do you think we all feel so exhausted online?", pron:"вай ду ю синк ви ол фийл соу эгзостид онлайн?", mn:"Яагаад бид бүгд онлайнд ийм ядарсан байдаг гэж бодож байна?",
        choices:[{t:"Notifications drain our focus. Moreover, they keep our stress high.",best:true,mn:"Мэдэгдэл анхаарлыг барна. Түүнээс гадна стрессийг өндөр байлгадаг."},{t:"Notifications drain our focus. Moreover they keep stress high.",best:false,fix:"Moreover дараа таслал → Moreover, they…"}]},
      {ruby:"Is it really that bad for young people too?", pron:"из ит риали зэт бэд фор янг пийпл ту?", mn:"Залуучуудад ч бас тийм муу нөлөөтэй юу?",
        choices:[{t:"Absolutely. Similarly, teenagers find it almost impossible to log off.",best:true,mn:"Мэдээж. Үүнтэй адил өсвөр насныхан салахад бараг боломжгүй санагддаг."},{t:"Absolutely. However, teenagers find it impossible to log off.",best:false,fix:"адил жишээ → Similarly (However эсрэг)."}]},
      {ruby:"What else does the overload actually harm?", pron:"вот элс даз зэ оувэрлоуд экчуэли харм?", mn:"Хэт ачаалал өөр юуг хохироодог вэ?",
        choices:[{t:"Furthermore, it steadily shortens our attention span over time.",best:true,mn:"Цаашилбал, цаг хугацаа өнгөрөх тусам анхаарлын тэсвэрийг тасралтгүй богиносгодог."},{t:"In contrast, it shortens our attention span over time.",best:false,fix:"нэмэлт санаа → Furthermore (In contrast эсрэг)."}]}
    ]}
  },
  {
    id:'b2m8l8', title:"8.8 Хувийн мэдээлэл", level:"B2 · М8",
    blurb:"I object to being tracked — verb + prep + -ing ⭐⭐⭐",
    rule:{
      h:"Үйл үг + угтвар + -ing: object to, resort to, be committed to, look forward to",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хувийн мэдээллийн тухай ярихдаа <b>«to» нь угтвар (нэр үг авах) болох</b> тохиолдлыг эзэмших.<br><br>
        <b>⚠️ Гол баримт:</b> Эдгээр илэрхийллийн «to» нь <b>угтвар үг</b> тул араас нь <b>-ing</b> (эсвэл нэр үг) орно, үндсэн үйл үг ✗:
        <div style="margin:12px 0"><span class="tag">I OBJECT TO being tracked online. (object to be tracked ✗)</span><span class="tag">They RESORTED TO selling our data.</span><span class="tag">We are COMMITTED TO protecting your privacy.</span><span class="tag">I LOOK FORWARD TO deleting my account.</span></div>
        <b>«to + -ing» бусад чухал:</b> be used to, be accustomed to, get around to, be opposed to, in addition to, when it comes to:
        <div style="margin:12px 0"><span class="tag">I'm not USED TO sharing my location.</span><span class="tag">When it COMES TO managing consent, most people give up.</span></div>
        <b>«to + үндсэн үйл» (энгийн infinitive) байх бусад үйл — бүү андуур:</b>
        <div style="margin:12px 0"><span class="tag">I want TO delete it. (want to + үндсэн үйл — энэ угтвар to биш!)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        privacy /ˈpraɪvəsi/ — нууцлал · data /ˈdeɪtə/ — өгөгдөл · consent /kənˈsent/ — зөвшөөрөл<br>
        tracking /ˈtrækɪŋ/ — мөшгилт · cookie /ˈkʊki/ — күүки · encryption /ɪnˈkrɪpʃn/ — шифрлэлт<br>
        breach /briːtʃ/ — зөрчил алдагдал · surveillance /sərˈveɪləns/ — хяналт ажиглалт · profile /ˈproʊfaɪl/ — хувийн мэдээлэл цуглуулах<br>
        anonymous /əˈnɑːnɪməs/ — нэргүй · leak /liːk/ — задрал · settings /ˈsetɪŋz/ — тохиргоо<br>
        third-party /ˌθɜːrd ˈpɑːrti/ — гуравдагч тал · exploit /ɪkˈsplɔɪt/ — далимдуулах · safeguard /ˈseɪfɡɑːrd/ — хамгаалах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I object to be tracked» ✗ → object to бол угтвар: <b>object to being tracked</b> ✓. «look forward to hear from you» ✗ → <b>look forward to hearing</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «object to / resort to / committed to / look forward to / used to (дадсан) → дараа нь -ING». Эргэлзвэл «to it» гэж болох эсэхийг шалга — болвол угтвар.</p>`
    },
    phrases:[
      {en:"I strongly object to being tracked without my consent.", pron:"ай стронгли обжэкт ту бийинг трэкт видаут май консэнт.", mn:"Зөвшөөрөлгүйгээр мөшгигдөхийг би хатуу эсэргүүцдэг."},
      {en:"The company resorted to selling users' data to third parties.", pron:"зэ кампэни ризортид ту сэллинг юзэрз дэйта ту сөрд партиз.", mn:"Компани хэрэглэгчийн өгөгдлийг гуравдагч талд зарах хэрэгт хүрсэн."},
      {en:"We are committed to safeguarding your personal information.", pron:"ви а кэмиттид ту сэйфгардинг ёр пөрсэнэл информэйшн.", mn:"Бид таны хувийн мэдээллийг хамгаалахад бүрэн зорьж байна."},
      {en:"I look forward to deleting all my old accounts.", pron:"ай лүк форвэрд ту дилийтинг ол май оулд экаунтс.", mn:"Хуучин бүх хаягаа устгахыг тэсэн ядан хүлээж байна."},
      {en:"I'm not used to sharing my location with apps.", pron:"айм нот юзд ту шэринг май локэйшн виз эпс.", mn:"Байршлаа аппуудтай хуваалцаж дадаагүй."}
    ],
    exercises:[
      {q:"object to + -ing:", parts:["I object to ", " tracked."], opts:["being","be"], a:0, fix:"object to бол угтвар → being."},
      {q:"resort to:", parts:["They resorted to ", " our data."], opts:["selling","sell"], a:0, fix:"resort to + -ing → selling."},
      {q:"committed to:", parts:["We're committed to ", " your privacy."], opts:["protecting","protect"], a:0, fix:"committed to + -ing → protecting."},
      {q:"look forward to:", parts:["I look forward to ", " from you."], opts:["hearing","hear"], a:0, fix:"look forward to + -ing → hearing."}
    ],
    speak:{ scene:'Нууцлалын тохиргоо', turns:[
      {ruby:"Why did you turn off location sharing?", pron:"вай дид ю төрн оф локэйшн шэринг?", mn:"Яагаад байршил хуваалцахыг унтраав?",
        choices:[{t:"Honestly, I object to being tracked everywhere I go.",best:true,mn:"Үнэнийг хэлэхэд, явсан газар болгонд мөшгигдөхийг эсэргүүцдэг."},{t:"Honestly, I object to be tracked everywhere I go.",best:false,fix:"object to бол угтвар → to BEING tracked."}]},
      {ruby:"Do you trust the app's privacy promises?", pron:"ду ю траст зэ эпс прайвэси промисиз?", mn:"Аппын нууцлалын амлалтад итгэдэг үү?",
        choices:[{t:"A little — they claim to be committed to protecting our data.",best:true,mn:"Бага зэрэг — тэд өгөгдлийг хамгаалахад зорьж байгаа гэдэг."},{t:"A little — they claim to be committed to protect our data.",best:false,fix:"committed to + -ing → to PROTECTING."}]},
      {ruby:"So what's your plan now?", pron:"соу вотс ёр плэн нау?", mn:"Тэгээд одоо чиний төлөвлөгөө юу вэ?",
        choices:[{t:"I look forward to deleting every account I no longer use.",best:true,mn:"Ашиглахаа больсон бүх хаягаа устгахыг тэсэн ядан хүлээж байна."},{t:"I look forward to delete every account I no longer use.",best:false,fix:"look forward to + -ing → to DELETING."}]}
    ]}
  },
  {
    id:'b2m8l9', title:"8.9 Албан бус ба албан", level:"B2 · М8",
    blurb:"get → obtain, ask for → request — register shift ⭐⭐",
    rule:{
      h:"Хэв маяг: албан бус ↔ албан ёсны хувиргалт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Цахим захидал, мессежийн <b>хэв маягийг</b> (register) нөхцөл байдалд тааруулах.<br><br>
        <b>1. Үйл үгийн орлуулга (албан бус → албан ёсны):</b>
        <div style="margin:12px 0"><span class="tag">get → OBTAIN / RECEIVE</span><span class="tag">ask for → REQUEST</span><span class="tag">help → ASSIST</span><span class="tag">need → REQUIRE</span><span class="tag">tell → INFORM</span><span class="tag">buy → PURCHASE</span><span class="tag">show → DEMONSTRATE</span><span class="tag">use → UTILISE</span></div>
        <b>2. Phrasal verb → нэг үгийн латин гаралтай үйл:</b>
        <div style="margin:12px 0"><span class="tag">find out → DISCOVER</span><span class="tag">put off → POSTPONE</span><span class="tag">set up → ESTABLISH</span><span class="tag">look into → INVESTIGATE</span><span class="tag">deal with → HANDLE / ADDRESS</span></div>
        <b>3. Товчлол ба хэлц засах:</b>
        <div style="margin:12px 0"><span class="tag">I'd love to → I would be delighted to</span><span class="tag">Thanks a lot → Thank you very much</span><span class="tag">Sorry about → I apologise for</span><span class="tag">can't → cannot</span></div>
        <b>4. Бүтэн жишээ:</b>
        <div style="margin:12px 0"><span class="tag">Албан бус: Hey, can you help me sort out my account?</span><span class="tag">Албан ёсны: I would be grateful if you could assist me in resolving my account issue.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        formal /ˈfɔːrml/ — албан ёсны · informal /ɪnˈfɔːrml/ — албан бус · register /ˈredʒɪstər/ — хэв маяг<br>
        obtain /əbˈteɪn/ — олж авах · request /rɪˈkwest/ — хүсэлт гаргах · assist /əˈsɪst/ — туслах<br>
        require /rɪˈkwaɪər/ — шаардах · inform /ɪnˈfɔːrm/ — мэдэгдэх · apologise /əˈpɑːlədʒaɪz/ — уучлал гуйх<br>
        purchase /ˈpɜːrtʃəs/ — худалдан авах · postpone /poʊstˈpoʊn/ — хойшлуулах · establish /ɪˈstæblɪʃ/ — байгуулах<br>
        investigate /ɪnˈvestɪɡeɪt/ — судлах · concise /kənˈsaɪs/ — товч тодорхой · courteous /ˈkɜːrtiəs/ — эелдэг</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Албан захидалд «Hey / gonna / wanna / thanks a lot» ✗ → <b>Dear… / going to / would like to / thank you</b> ✓. Мөн албан ёсны бол товчлол болихгүй: «can't» → <b>cannot</b>.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Албан ёсны = латин гаралтай нэг үг (obtain, request, assist) + товчлолгүй + эелдэг бүтэц».</p>`
    },
    phrases:[
      {en:"I would be grateful if you could assist me with this issue.", pron:"ай вүд би грэйтфул иф ю күд эсист ми виз зис ишью.", mn:"Энэ асуудлыг шийдэхэд надад туслаж чадвал баярлах болно."},
      {en:"Please let me know if you require any further information.", pron:"плийз лэт ми ноу иф ю рикуайр эни фөрзэр информэйшн.", mn:"Нэмэлт мэдээлэл шаардлагатай бол надад мэдэгдээрэй."},
      {en:"We regret to inform you that the service has been suspended.", pron:"ви ригрэт ту информ ю зэт зэ сөрвис хэз бийн сэспэндид.", mn:"Үйлчилгээ түр зогссоныг мэдэгдэхэд харамсаж байна."},
      {en:"I am writing to request access to my personal data.", pron:"ай эм райтинг ту рикуэст эксэс ту май пөрсэнэл дэйта.", mn:"Хувийн өгөгдөлдөө хандах хүсэлт гаргахаар бичиж байна."},
      {en:"Thank you for your patience while we investigate the matter.", pron:"сэнк ю фор ёр пэйшнс вайл ви инвэстигэйт зэ мэтэр.", mn:"Асуудлыг судлах хугацаанд тэвчээр гаргасанд баярлалаа."}
    ],
    exercises:[
      {q:"get → албан:", parts:["I would like to ", " a copy of my data."], opts:["obtain","get"], a:0, fix:"албан ёсны → obtain."},
      {q:"help → албан:", parts:["Could you please ", " me with this?"], opts:["assist","help out"], a:0, fix:"албан ёсны → assist."},
      {q:"phrasal → албан:", parts:["We will ", " the complaint promptly."], opts:["investigate","look into"], a:0, fix:"албан ёсны → investigate."},
      {q:"товчлолгүй:", parts:["Unfortunately, we ", " process your request."], opts:["cannot","can't"], a:0, fix:"албан ёсны → cannot."}
    ],
    speak:{ scene:'Албан ёсны цахим захидал', turns:[
      {ruby:"How should I start an email to the support team?", pron:"хау шүд ай старт эн имэйл ту зэ сэпорт тийм?", mn:"Дэмжлэгийн багт цахим захидал яаж эхлэх вэ?",
        choices:[{t:"Write 'Dear Support Team' and request their assistance politely.",best:true,mn:"«Dear Support Team» гэж бичээд эелдэгээр туслалцаа хүс."},{t:"Write 'Hey guys' and ask them to help you out.",best:false,fix:"албан ёсны → Dear… / request assistance (Hey guys ✗)."}]},
      {ruby:"How do I say I want my data politely?", pron:"хау ду ай сэй ай вонт май дэйта полайтли?", mn:"Өгөгдлөө авахыг эелдэгээр яаж хэлэх вэ?",
        choices:[{t:"Say: 'I am writing to request access to my personal data.'",best:true,mn:"«Хувийн өгөгдөлдөө хандах хүсэлт гаргаж байна» гэж хэл."},{t:"Say: 'I wanna get my data, thanks a lot.'",best:false,fix:"албан ёсны → request access (wanna/thanks a lot ✗)."}]},
      {ruby:"And how do I end it professionally?", pron:"энд хау ду ай энд ит прэфэшнэли?", mn:"Мэргэжлийн байдлаар яаж төгсгөх вэ?",
        choices:[{t:"Close with 'I look forward to your reply. Kind regards,'",best:true,mn:"«Таны хариуг хүлээж байна. Хүндэтгэсэн,» гэж төгсгө."},{t:"Close with 'Cool, hit me back soon. Cheers!'",best:false,fix:"албан ёсны → Kind regards (Cheers/hit me back ✗)."}]}
    ]}
  },
  {
    id:'b2m8l10', title:"8.10 Модулийн төсөл", level:"B2 · М8",
    blurb:"🏆 Хэвлэл мэдээлэл ба технологийн тухай санал бодлын эссэ",
    rule:{
      h:"Давтлага: B2 Модуль 8-ын бүх дүрэм нэгтгэсэн санал эссэ",
      html:`<b>🎯 Зорилго:</b> Модуль 8-ын бүх бүтцийг нэгтгэж, хэвлэл мэдээлэл, технологийн тухай <b>жинхэнэ B2 түвшний санал бодлын эссэ</b> бичих.<br><br>
        <b>Модуль 8-ын дүрмүүд (давт!):</b>
        <div style="margin:12px 0"><span class="tag">My post GOT SHARED / I GOT him TO help ⭐⭐</span><span class="tag">She MUST HAVE BEEN scrolling all night ⭐⭐⭐</span><span class="tag">MANY OF US / NONE OF them ⭐⭐</span><span class="tag">…, WHICH proves it's fake / most of WHOM ⭐⭐⭐</span><span class="tag">UNLESS / PROVIDED / WHAT IF you lost it ⭐⭐</span><span class="tag">It IS the realism THAT worries me / NEVER have I seen ⭐⭐⭐</span><span class="tag">MOREOVER, / SIMILARLY, ⭐⭐</span><span class="tag">I OBJECT TO being tracked ⭐⭐⭐</span><span class="tag">obtain / request / assist (албан ёсны) ⭐⭐</span></div>
        <p style="margin-top:12px"><b>🏆 Төсөл — Санал бодлын эссэ (20+ өгүүлбэр):</b> Жишээ:<br>
        <i>Social media has transformed how we live, but it does come at a hidden cost. It is the constant flood of information that overwhelms us, not the technology itself. Many of us scroll for hours without realising it, which quietly erodes our focus. Moreover, endless notifications drain our energy; similarly, they raise our stress levels day after day. I strongly object to being tracked and profiled by companies I never chose to trust. Never have I felt so exposed online. Unless we set clear boundaries, we will keep sacrificing our privacy for convenience. What if a single data breach exposed everything about you overnight? Supposing that happened, most people would finally take their settings seriously. Companies claim to be committed to protecting our data, yet many of them resort to selling it to third parties. Furthermore, AI-generated content now looks so real that hardly any of us can tell what is genuine. I did check several viral posts last week, most of which turned out to be fabricated. In an ideal world, platforms would obtain proper consent and inform users honestly. As long as we stay critical and verify our sources, technology can still enrich our lives rather than control them.</i><br>
        Үүнийг Ruby-д бичээд засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 санал эссэгийн 4 давхар: <b>Байр суурь</b> (It is … that / does come) → <b>Нотолгоо</b> (Moreover, Similarly, many of us) → <b>Таамаг/эсэргүүцэл</b> (What if, I object to, Never have I) → <b>Дүгнэлт</b> (As long as, Unless … we will).</p>`
    },
    phrases:[
      {en:"It is the flood of information that overwhelms us, not the technology.", pron:"ит из зэ флад оф информэйшн зэт оувэрвэлмз ас, нот зэ тэкнолэжи.", mn:"Биднийг дийлдэшгүй болгож буй нь технологи биш, мэдээллийн урсгал юм."},
      {en:"Many of us scroll for hours, which quietly erodes our focus.", pron:"мэни оф ас скроул фор аурз, вич квайэтли ироудз аур фоукас.", mn:"Бидний олонх нь цагаар гүйлгэдэг нь анхаарлыг маань чимээгүйхэн зайлуулдаг."},
      {en:"I strongly object to being tracked by companies I never chose to trust.", pron:"ай стронгли обжэкт ту бийинг трэкт бай кампэниз ай нэвэр чоуз ту траст.", mn:"Итгэхээр сонгоогүй компаниудад мөшгигдөхийг би хатуу эсэргүүцдэг."},
      {en:"Unless we set clear boundaries, we will keep sacrificing our privacy.", pron:"анлэс ви сэт клиэр баундэриз, ви вил кийп сэкрифайсинг аур прайвэси.", mn:"Тодорхой хил хязгаар тогтоохгүй л бол бид нууцлалаа золиослосоор байх болно."},
      {en:"As long as we verify our sources, technology can enrich our lives.", pron:"эз лонг эз ви вэрифай аур сорсэз, тэкнолэжи кэн энрич аур лайвз.", mn:"Эх сурвалжаа нягталсаар л байвал технологи амьдралыг маань баяжуулж чадна."}
    ],
    exercises:[
      {q:"Давтлага (it-cleft):", parts:["It ", " the overload that tires us."], opts:["is","does"], a:0, fix:"it-cleft → It IS … that."},
      {q:"Давтлага (object to):", parts:["I object to ", " tracked."], opts:["being","be"], a:0, fix:"object to + -ing → being."},
      {q:"Давтлага (urvuu):", parts:["Never ", " felt so exposed online."], opts:["have I","I have"], a:0, fix:"сөрөг урдаа → HAVE I."},
      {q:"Давтлага (unless):", parts:["", " we act, privacy will vanish."], opts:["Unless","If not"], a:0, fix:"«…л биш бол» → Unless."}
    ],
    speak:{ scene:'🏆 Төсөл: Технологийн тухай санал', turns:[
      {ruby:"What's the biggest downside of social media, in your view?", pron:"вотс зэ бигэст даунсайд оф соушл мийдиа, ин ёр вью?", mn:"Таны бодлоор нийгмийн сүлжээний хамгийн том сул тал юу вэ?",
        choices:[{t:"It is the constant overload that harms us, not the technology itself.",best:true,mn:"Биднийг хохироож буй нь технологи биш, байнгын хэт ачаалал юм."},{t:"It is the constant overload what harms us, not the technology.",best:false,fix:"it-cleft → THAT (what ✗)."}]},
      {ruby:"Do you worry about your personal data online?", pron:"ду ю ворри эбаут ёр пөрсэнэл дэйта онлайн?", mn:"Онлайн дахь хувийн өгөгдлийнхөө талаар санаа зовдог уу?",
        choices:[{t:"Constantly. I object to being tracked, and never have I felt so exposed.",best:true,mn:"Байнга. Мөшгигдөхийг эсэргүүцдэг, ийм ил задгай санагдаж байгаагүй."},{t:"Constantly. I object to be tracked, and never I have felt so exposed.",best:false,fix:"object to BEING; Never HAVE I felt."}]},
      {ruby:"So are you completely against technology then?", pron:"соу а ю комплитли эгэйнст тэкнолэжи зэн?", mn:"Тэгвэл технологийн эсрэг бүрэн байр суурьтай юу?",
        choices:[{t:"Not at all — as long as we verify our sources, it can enrich our lives.",best:true,mn:"Огтхон ч үгүй — эх сурвалжаа нягталсаар л байвал амьдралыг баяжуулж чадна."},{t:"Not at all — unless we verify our sources, it can enrich our lives.",best:false,fix:"эерэг нөхцөл → AS LONG AS (unless утга эсрэгддэг)."}]}
    ]}
  },
  {
    id:'b2m9l1', title:"9.1 Ажлын ярилцлага", level:"B2 · М9",
    blurb:"She must have prepared — modality for speculation & criticism ⭐⭐⭐",
    rule:{
      h:"Дэвшилтэт модаль: must / might / should have (таамаг + дүгнэлт + шүүмж)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн гол сорилт — <b>өнгөрсөн үйлдлийн талаар итгэлтэй дүгнэлт, эргэлзээт таамаг, шүүмжлэлт байр суурийг</b> нэг register-т нэгтгэх.<br><br>
        <b>1. Итгэлтэй дүгнэлт — must / can't have + V3:</b>
        <div style="margin:12px 0"><span class="tag">She MUST HAVE PREPARED thoroughly — every answer was flawless.</span><span class="tag">They CAN'T HAVE READ my CV; they asked about skills I never listed.</span></div>
        <b>2. Эргэлзээт таамаг — might / may / could have + V3:</b>
        <div style="margin:12px 0"><span class="tag">The panel MIGHT HAVE BEEN testing how I handle pressure.</span><span class="tag">He COULD HAVE MISUNDERSTOOD the question.</span></div>
        <b>3. Шүүмж / харамсал — should / ought to have + V3:</b>
        <div style="margin:12px 0"><span class="tag">I SHOULD HAVE RESEARCHED the company more carefully.</span><span class="tag">You SHOULDN'T HAVE ARRIVED late to a first interview.</span></div>
        <b>Гурвыг нэг өгүүлбэрт нэгтгэ (B2 чадвар):</b>
        <div style="margin:12px 0"><span class="tag">She must have rehearsed for hours; I should have done the same, though nerves might have let me down anyway.</span></div>
        <b>Үргэлжлэх хэлбэр — must have BEEN + -ing:</b>
        <div style="margin:12px 0"><span class="tag">The recruiter kept nodding — she must have been enjoying the answer.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        interview /ˈɪntərvjuː/ — ярилцлага · candidate /ˈkændɪdət/ — нэр дэвшигч · recruiter /rɪˈkruːtər/ — ажилд авагч<br>
        applicant /ˈæplɪkənt/ — өргөдөл гаргагч · shortlist /ˈʃɔːrtlɪst/ — эцсийн жагсаалт · vacancy /ˈveɪkənsi/ — сул орон тоо<br>
        qualification /ˌkwɒlɪfɪˈkeɪʃn/ — мэргэшил · résumé /ˈrezumeɪ/ — намтар · impression /ɪmˈpreʃn/ — сэтгэгдэл<br>
        confident /ˈkɒnfɪdənt/ — өөртөө итгэлтэй · articulate /ɑːrˈtɪkjuleɪt/ — тодорхой ярих · rehearse /rɪˈhɜːrs/ — давтах<br>
        assess /əˈses/ — үнэлэх · competence /ˈkɒmpɪtəns/ — чадамж · panel /ˈpænl/ — шалгаруулах хороо</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She must prepared» ✗ — <b>must HAVE prepared</b> ✓ (өнгөрсөн). «I must have to research» ✗ (энэ нь албадлага) → харамсал бол <b>I should have researched</b> ✓. «can't have» = боломжгүй дүгнэлт, «mustn't have» ✗ бүү хэрэглэ.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>MUST</b> = 99% тийм · <b>CAN'T</b> = 99% үгүй · <b>MIGHT</b> = магадгүй · <b>SHOULD HAVE</b> = хийх ёстой байсан (гэтэл хийгээгүй).</p>`
    },
    phrases:[
      {en:"She must have prepared thoroughly for this interview.", pron:"ши маст хэв припэйрд сороули фор зис интөрвью.", mn:"Тэр энэ ярилцлагад маш нухацтай бэлдсэн байх ёстой."},
      {en:"They can't have read my résumé properly.", pron:"зэй кант хэв рэд май рэзюмэй прэпэрли.", mn:"Тэд миний намтрыг сайн уншаагүй нь лавтай."},
      {en:"I should have researched the company beforehand.", pron:"ай шүд хэв рисөрчт зэ кампэни бифорхэнд.", mn:"Би тухайн компанийн талаар урьдчилан судлах ёстой байсан."},
      {en:"The panel might have been testing my composure.", pron:"зэ пэнл майт хэв бийн тэстинг май кэмпоужэр.", mn:"Шалгаруулах хороо миний тайван байдлыг сорьж байсан байж магадгүй."},
      {en:"You shouldn't have understated your achievements.", pron:"ю шүднт хэв андэрстэйтид ёр эчийвмэнтс.", mn:"Чи амжилтаа дутуу үнэлэх ёсгүй байсан юм."}
    ],
    exercises:[
      {q:"Итгэлтэй дүгнэлт:", parts:["Her answers were perfect — she ", " for hours."], opts:["must have practised","must practise"], a:0, fix:"Өнгөрсөн дүгнэлт → must HAVE practised."},
      {q:"Боломжгүй:", parts:["They asked odd questions — they ", " my CV."], opts:["can't have read","mustn't have read"], a:0, fix:"«Боломжгүй» → can't have read (mustn't have ✗)."},
      {q:"Харамсал/шүүмж:", parts:["I failed because I ", " more carefully."], opts:["should have prepared","must have prepared"], a:0, fix:"Хийх ёстой байсан → should have prepared."},
      {q:"Үргэлжлэх таамаг:", parts:["She kept smiling — she ", " the discussion."], opts:["might have been enjoying","might enjoyed"], a:0, fix:"might have BEEN + -ing."}
    ],
    speak:{ scene:'Ярилцлагын дараах эргэцүүлэл', turns:[
      {ruby:"How do you think the interview went?", pron:"хау ду ю синк зэ интөрвью вэнт?", mn:"Ярилцлага яаж болсон гэж бодож байна?",
        choices:[{t:"Honestly, I should have researched the company more; I stumbled on their strategy question.",best:true,mn:"Үнэнийг хэлэхэд, компанийн талаар илүү судлах ёстой байсан; стратегийн асуултад бүдэрсэн."},{t:"Honestly, I must researched the company more.",best:false,fix:"WRONG → I SHOULD HAVE RESEARCHED (харамсал)."}]},
      {ruby:"But the panel seemed impressed with you.", pron:"бат зэ пэнл сиймд импрэст виз ю?", mn:"Гэхдээ хороо чамд сэтгэл хангалуун байсан бололтой.",
        choices:[{t:"Maybe. They kept taking notes, so they might have been genuinely interested.",best:true,mn:"Магадгүй. Тэд байнга тэмдэглэл хөтөлж байсан тул үнэхээр сонирхсон байж болох юм."},{t:"Maybe. They must taking notes.",best:false,fix:"WRONG → they MUST HAVE BEEN TAKING notes."}]},
      {ruby:"The other candidate looked nervous, didn't she?", pron:"зэ азэр кэндидэт лүкт нөрвэс, диднт ши?", mn:"Нөгөө нэр дэвшигч сандарсан харагдсан, тийм үү?",
        choices:[{t:"She did. She can't have rehearsed at all — she forgot her own experience.",best:true,mn:"Тийм. Тэр огт давтаагүй нь лавтай — өөрийнхөө туршлагыг ч мартсан."},{t:"She did. She can't rehearsed at all.",best:false,fix:"WRONG → She CAN'T HAVE REHEARSED."}]}
    ]}
  },
  {
    id:'b2m9l2', title:"9.2 Карьерын зам", level:"B2 · М9",
    blurb:"Had I known, I would have chosen differently — inverted conditionals ⭐⭐⭐",
    rule:{
      h:"Нөхцөлт өгүүлбэрийн бүрэн давтлага: 0–3, холимог, эргүүлсэн хэлбэр",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Карьерын шийдвэрийн тухай ярихдаа <b>бүх төрлийн нөхцөл + холимог + if-гүй эргүүлсэн</b> хэлбэрийг эзэмших.<br><br>
        <b>4 үндсэн төрөл:</b>
        <div style="margin:12px 0"><span class="tag">0: If you work hard, promotions FOLLOW. (ерөнхий үнэн)</span><span class="tag">1: If I get the offer, I WILL relocate. (бодит ирээдүй)</span><span class="tag">2: If I spoke Mandarin, I WOULD apply. (одоо төсөөлөл)</span><span class="tag">3: If I HAD networked, I WOULD HAVE risen faster. (өнгөрсөн харамсал)</span></div>
        <b>Холимог нөхцөл (2 цаг холбоно):</b>
        <div style="margin:12px 0"><span class="tag">If I HAD studied finance (өнгөрсөн), I WOULD BE a manager now (одоо).</span><span class="tag">If I WEREN'T so cautious (одоо), I WOULD HAVE taken the risk (өнгөрсөн).</span></div>
        <b>Эргүүлсэн нөхцөл — if-гүй, албан ёсны register:</b>
        <div style="margin:12px 0"><span class="tag">HAD I KNOWN the workload, I would have negotiated. (= If I had known)</span><span class="tag">WERE I in your position, I would resign. (= If I were)</span><span class="tag">SHOULD you require a reference, contact HR. (= If you should)</span></div>
        <b>Unless / provided that / as long as:</b>
        <div style="margin:12px 0"><span class="tag">I'll accept the role PROVIDED THAT they raise the salary.</span><span class="tag">You won't advance UNLESS you take on responsibility.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        promotion /prəˈmoʊʃn/ — албан тушаал ахих · relocate /ˌriːloʊˈkeɪt/ — нүүх · negotiate /nɪˈɡoʊʃieɪt/ — тохиролцох<br>
        salary /ˈsæləri/ — цалин · appraisal /əˈpreɪzl/ — гүйцэтгэлийн үнэлгээ · mentor /ˈmentɔːr/ — зөвлөгч<br>
        network /ˈnetwɜːrk/ — холбоо тогтоох · prospect /ˈprɒspekt/ — ирээдүйн боломж · trajectory /trəˈdʒektəri/ — хөгжлийн зам<br>
        aspiration /ˌæspɪˈreɪʃn/ — эрмэлзэл · setback /ˈsetbæk/ — бэрхшээл · pivot /ˈpɪvət/ — чиглэлээ солих<br>
        upskill /ˌʌpˈskɪl/ — ур чадвараа дээшлүүлэх · redundancy /rɪˈdʌndənsi/ — ажлаас чөлөөлөгдөх · headhunt /ˈhedhʌnt/ — мэргэжилтэн татах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have known» ✗ — if талд <b>would</b> байхгүй → <b>If I had known</b> ✓. Эргүүлсэн хэлбэрт «Had I would known» ✗ → <b>Had I known</b> ✓. «If I would be you» ✗ → <b>Were I you / If I were you</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Эргүүлэх = туслах үйлийг урагш авчир: <b>Had I…, Were I…, Should you…</b> — «if» алга болно, register өснө.</p>`
    },
    phrases:[
      {en:"Had I networked earlier, I would have risen faster.", pron:"хэд ай нэтвөркт өрлиэр, ай вүд хэв ризн фастэр.", mn:"Хэрэв би эрт холбоо тогтоосон бол хурдан дэвших байсан."},
      {en:"If I had studied finance, I would be a manager now.", pron:"иф ай хэд стадид файнэнс, ай вүд би э мэнэжэр нау.", mn:"Хэрэв санхүү сурсан бол одоо менежер болсон байх байсан."},
      {en:"Were I in your position, I would negotiate the salary.", pron:"вэр ай ин ёр позишн, ай вүд ниго́шиэйт зэ сэлэри.", mn:"Хэрэв би чиний оронд байсан бол цалингаа тохиролцох байсан."},
      {en:"Should you require a reference, please contact HR.", pron:"шүд ю рикуайр э рэфрэнс, плийз контэкт эйч-ар.", mn:"Хэрэв танд тодорхойлолт хэрэгтэй бол Хүний нөөцтэй холбогдоно уу."},
      {en:"I'll take the role provided that they offer flexibility.", pron:"айл тэйк зэ роул провайдид зэт зэй офэр флэксибилити.", mn:"Хэрэв тэд уян хатан цаг санал болговол би энэ ажлыг авна."}
    ],
    exercises:[
      {q:"3-р нөхцөл:", parts:["If I ", " harder, I would have got the promotion."], opts:["had worked","would work"], a:0, fix:"if талд would ✗ → had worked."},
      {q:"Холимог:", parts:["If I had learned coding, I ", " a developer today."], opts:["would be","would have been"], a:0, fix:"Өнгөрсөн→одоо холимог → would BE today."},
      {q:"Эргүүлсэн:", parts:["", " I known the risks, I'd have declined."], opts:["Had","If had"], a:0, fix:"Эргүүлсэн → Had I known (if алга)."},
      {q:"Нөхцөл холбоос:", parts:["You won't be promoted ", " you show initiative."], opts:["unless","provided"], a:0, fix:"«хэрэв …-гүй бол» → unless."}
    ],
    speak:{ scene:'Карьерын зөвлөгөө', turns:[
      {ruby:"Do you regret staying so long in one company?", pron:"ду ю ригрэт стэйинг соу лонг ин ван кампэни?", mn:"Нэг компанид ийм удаан ажилласандаа харамсдаг уу?",
        choices:[{t:"A little. Had I moved on sooner, I would probably be in a senior role by now.",best:true,mn:"Бага зэрэг. Хэрэв эрт шилжсэн бол одоо ахлах албан тушаалд байх байсан байх."},{t:"A little. If I would move on sooner, I would be senior now.",best:false,fix:"WRONG → HAD I MOVED ON / If I HAD moved on."}]},
      {ruby:"What would you do if you were me?", pron:"вот вүд ю ду иф ю вэр ми?", mn:"Хэрэв чи миний оронд байсан бол яах вэ?",
        choices:[{t:"Were I in your position, I'd upskill first, then negotiate a raise.",best:true,mn:"Хэрэв би чиний оронд байсан бол эхлээд ур чадвараа дээшлүүлж, дараа нь цалингаа тохиролцоно."},{t:"If I would be you, I upskill first.",best:false,fix:"WRONG → WERE I in your position, I'D upskill."}]},
      {ruby:"And if the company offers me a transfer abroad?", pron:"энд иф зэ кампэни офэрз ми э трансфөр эброд?", mn:"Хэрэв компани гадаадад шилжих санал тавивал?",
        choices:[{t:"Take it, provided that they cover relocation and guarantee a clear career path.",best:true,mn:"Хэрэв тэд нүүх зардлыг хариуцаж, тодорхой карьерын зам баталгаажуулбал ав."},{t:"Take it, unless they cover relocation.",best:false,fix:"WRONG → PROVIDED THAT they cover relocation (unless утга эсрэг)."}]}
    ]}
  },
  {
    id:'b2m9l3', title:"9.3 Манлайлал", level:"B2 · М9",
    blurb:"It was her vision that saved the team — cleft sentences ⭐⭐",
    rule:{
      h:"Онцлох бүтэц: cleft өгүүлбэр ба emphasis (мэргэжлийн харилцаа)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Манлайллын хэлэнд <b>тодорхой санааг урагшлуулж онцлох</b> cleft бүтэц эзэмших.<br><br>
        <b>1. It-cleft — «It is/was … that …»:</b>
        <div style="margin:12px 0"><span class="tag">IT WAS her clear vision THAT rescued the project. (санааг онцолж байна)</span><span class="tag">IT ISN'T money THAT motivates strong teams — it's purpose.</span></div>
        <b>2. Wh-cleft — «What … is/was …»:</b>
        <div style="margin:12px 0"><span class="tag">WHAT a good leader does IS listen before deciding.</span><span class="tag">WHAT we need NOW IS a clear strategy, not more meetings.</span></div>
        <b>3. All-cleft (хязгаарлах өнгө):</b>
        <div style="margin:12px 0"><span class="tag">ALL a manager can do IS create the right conditions.</span></div>
        <b>4. Урагш авчрах (fronting) + inversion:</b>
        <div style="margin:12px 0"><span class="tag">NEVER have I seen such commitment from a team.</span><span class="tag">NOT ONLY did she deliver, BUT she also mentored others.</span><span class="tag">The one thing THAT sets her apart IS integrity.</span></div>
        <b>Do/does/did онцлох (auxiliary emphasis):</b>
        <div style="margin:12px 0"><span class="tag">I DO appreciate your effort. · We DID warn them about the risk.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        leadership /ˈliːdərʃɪp/ — манлайлал · vision /ˈvɪʒn/ — алсын хараа · delegate /ˈdelɪɡeɪt/ — эрх шилжүүлэх<br>
        empower /ɪmˈpaʊər/ — эрх мэдэл олгох · motivate /ˈmoʊtɪveɪt/ — урамшуулах · inspire /ɪnˈspaɪər/ — урам зориг өгөх<br>
        integrity /ɪnˈteɡrəti/ — шударга зан · accountability /əˌkaʊntəˈbɪləti/ — хариуцлага · initiative /ɪˈnɪʃətɪv/ — санаачилга<br>
        influence /ˈɪnfluəns/ — нөлөө · resilience /rɪˈzɪliəns/ — тэсвэр · decisive /dɪˈsaɪsɪv/ — шийдэмгий<br>
        strategic /strəˈtiːdʒɪk/ — стратегийн · foster /ˈfɒstər/ — тэтгэх · commitment /kəˈmɪtmənt/ — тууштай байдал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «It was her that saved» — зөв ч ярианд <b>It was SHE who saved</b> нь илүү албан ёсны. «What I need is more meetings» — бүтэц зөв, гэхдээ «What we need are meetings» ✗ → cleft-д <b>What … IS</b> (ганц бүтэц). «Never I have seen» ✗ → <b>Never HAVE I seen</b> ✓ (эргүүлэлт заавал).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Онцлох санааг <b>«It was ___ that»</b> хайрцагт хий; үйлдлийг онцлох бол <b>«What … does is …»</b>.</p>`
    },
    phrases:[
      {en:"It was her vision that saved the entire project.", pron:"ит воз хөр вижн зэт сэйвд зи интайэр прожэкт.", mn:"Төслийг бүхэлд нь аварсан нь яг түүний алсын хараа байлаа."},
      {en:"What a good leader does is listen before deciding.", pron:"вот э гүд лийдэр даз из лисн бифор дисайдинг.", mn:"Сайн удирдагчийн хийдэг зүйл бол шийдэхээсээ өмнө сонсдог явдал."},
      {en:"Never have I seen such commitment from a team.", pron:"нэвэр хэв ай сийн сач кэмитмэнт фром э тийм.", mn:"Багаас ийм тууштай байдал би хэзээ ч харж байгаагүй."},
      {en:"Not only did she deliver, but she also mentored others.", pron:"нот оунли дид ши диливэр, бат ши олсоу мэнторд азэрз.", mn:"Тэр зөвхөн үр дүнг гаргаад зогсоогүй, бусдад зөвлөж туслав."},
      {en:"All a manager can do is create the right conditions.", pron:"ол э мэнэжэр кэн ду из криэйт зэ райт кэндишнз.", mn:"Менежерийн хийж чадах бүх зүйл бол зөв нөхцөлийг бүрдүүлэх."}
    ],
    exercises:[
      {q:"It-cleft:", parts:["", " her honesty that earned everyone's trust."], opts:["It was","There was"], a:0, fix:"Онцлох → It was … that."},
      {q:"Wh-cleft:", parts:["What this team needs ", " a clear direction."], opts:["is","are"], a:0, fix:"Cleft ганц бүтэц → What … IS."},
      {q:"Эргүүлэлт:", parts:["Never ", " such dedication before."], opts:["have I witnessed","I have witnessed"], a:0, fix:"Урд нь «Never» → эргүүлэлт: HAVE I witnessed."},
      {q:"Not only:", parts:["Not only ", " the target, but she exceeded it."], opts:["did she hit","she hit"], a:0, fix:"Not only + эргүүлэлт → DID she hit."}
    ],
    speak:{ scene:'Багийн үнэлгээний уулзалт', turns:[
      {ruby:"Why do you rate her as our best team lead?", pron:"вай ду ю рэйт хөр эз аур бэст тийм лийд?", mn:"Яагаад түүнийг хамгийн шилдэг багийн ахлагч гэж үнэлдэг вэ?",
        choices:[{t:"It's her integrity that sets her apart — she never blames others for her own decisions.",best:true,mn:"Түүнийг ялгаруулдаг зүйл бол шударга зан — өөрийнхөө шийдвэрийн төлөө бусдыг буруутгадаггүй."},{t:"Is her integrity that sets her apart.",best:false,fix:"WRONG → IT'S her integrity that sets her apart."}]},
      {ruby:"But some say she delegates too much.", pron:"бат сам сэй ши дэлигэйтс туу мач?", mn:"Гэхдээ зарим нь тэр хэт их эрх шилжүүлдэг гэдэг.",
        choices:[{t:"What delegation actually does is empower people to grow, not offload work.",best:true,mn:"Эрх шилжүүлэлтийн үнэндээ хийдэг зүйл бол ажлаа тохоох биш, хүмүүсийг хөгжих боломж олгодог."},{t:"What delegation does are empower people.",best:false,fix:"WRONG → What delegation does IS empower."}]},
      {ruby:"So you'd recommend her for promotion?", pron:"соу юд рэкэмэнд хөр фор промоушн?", mn:"Тэгвэл түүнийг албан тушаал ахиулахыг зөвлөх үү?",
        choices:[{t:"Absolutely. Not only has she led three launches, but she has also trained her successor.",best:true,mn:"Мэдээж. Тэр гурван төсөл удирдаад зогсоогүй, залгамжлагчаа ч бэлдсэн."},{t:"Absolutely. Not only she has led three launches.",best:false,fix:"WRONG → Not only HAS SHE LED (эргүүлэлт)."}]}
    ]}
  },
  {
    id:'b2m9l4', title:"9.4 Тайлан бичих", level:"B2 · М9",
    blurb:"The implementation resulted in a reduction — nominalisation ⭐⭐⭐",
    rule:{
      h:"Нэршүүлэлт (nominalisation) ба албан ёсны тайлан бичих",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Албан ёсны тайлангийн register — <b>үйл үгийг нэр үг болгож</b>, объектив, товч, мэргэжлийн өгүүлбэр бичих.<br><br>
        <b>Үйл үг → нэр үг (nominalisation):</b>
        <div style="margin:12px 0"><span class="tag">We decided quickly → The DECISION was made promptly.</span><span class="tag">Sales fell → There was a DECLINE in sales.</span><span class="tag">They implemented it → The IMPLEMENTATION was completed.</span></div>
        <b>Яагаад тайланд ашигтай вэ:</b> объектив, хувь хүнээс ангид, нягт:
        <div style="margin:12px 0"><span class="tag">Ярианы: We looked at the data and it showed profits went up.</span><span class="tag">Тайлан: ANALYSIS of the data revealed an INCREASE in profits.</span></div>
        <b>Идэвхгүй хэвтэй хослуул:</b>
        <div style="margin:12px 0"><span class="tag">A thorough EVALUATION WAS CONDUCTED and recommendations WERE PROPOSED.</span></div>
        <b>Тайлангийн холбоос хэллэг:</b>
        <div style="margin:12px 0"><span class="tag">The findings indicate that … · This resulted in … · With regard to … · The purpose of this report is to …</span></div>
        <b>Түгээмэл нэршүүлэлт:</b>
        <div style="margin:12px 0"><span class="tag">reduce→reduction · improve→improvement · grow→growth · assess→assessment · fail→failure · expand→expansion</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        report /rɪˈpɔːrt/ — тайлан · analysis /əˈnæləsɪs/ — шинжилгээ · findings /ˈfaɪndɪŋz/ — үр дүн<br>
        recommendation /ˌrekəmenˈdeɪʃn/ — зөвлөмж · implementation /ˌɪmplɪmenˈteɪʃn/ — хэрэгжүүлэлт · evaluation /ɪˌvæljuˈeɪʃn/ — үнэлгээ<br>
        outcome /ˈaʊtkʌm/ — үр дагавар · objective /əbˈdʒektɪv/ — зорилт · data /ˈdeɪtə/ — өгөгдөл<br>
        summary /ˈsʌməri/ — хураангуй · overview /ˈoʊvərvjuː/ — тойм · conclusion /kənˈkluːʒn/ — дүгнэлт<br>
        significant /sɪɡˈnɪfɪkənt/ — томоохон · substantial /səbˈstænʃl/ — үлэмж · deficiency /dɪˈfɪʃnsi/ — дутагдал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Тайланд «I think the sales are bad» ✗ (субъектив) → <b>The data indicate a significant decline in sales</b> ✓. «There was a improvement» ✗ → <b>an improvement</b> ✓. Хэт олон нэршүүлэлт хийвэл хүнд болно — <b>тэнцвэр</b> хэрэгтэй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> «Хэн» гэдгийг арилга, «юу болсныг» нэр үг болго: <b>increased → an increase; decided → a decision</b>.</p>`
    },
    phrases:[
      {en:"The implementation of the new system resulted in a significant reduction in costs.", pron:"зи имплимэнтэйшн ов зэ нью систэм ризалтид ин э сигнификэнт ридакшн ин костс.", mn:"Шинэ системийг нэвтрүүлснээр зардал үлэмж хэмжээгээр буурсан."},
      {en:"The purpose of this report is to evaluate current performance.", pron:"зэ пөрпэс ов зис рипорт из ту ивалюэйт каррэнт пөрформэнс.", mn:"Энэ тайлангийн зорилго нь одоогийн гүйцэтгэлийг үнэлэхэд оршино."},
      {en:"The findings indicate a substantial improvement in efficiency.", pron:"зэ файндингз индикэйт э сабстэншл импрувмэнт ин ифишнси.", mn:"Үр дүнгээс үзэхэд бүтээмж мэдэгдэхүйц сайжирсан байна."},
      {en:"A thorough evaluation was conducted over three months.", pron:"э сороу ивалюэйшн воз кэндактид оувэр срий мансс.", mn:"Гурван сарын турш нарийвчилсан үнэлгээ хийгдсэн."},
      {en:"With regard to staffing, several recommendations are proposed below.", pron:"виз ригард ту стаффинг, сэврэл рэкэмэндэйшнз ар прэпоузд билоу.", mn:"Боловсон хүчний хувьд хэд хэдэн зөвлөмжийг доор дэвшүүлэв."}
    ],
    exercises:[
      {q:"Нэршүүлэлт:", parts:["Sales fell sharply → There was a sharp ", " in sales."], opts:["decline","declined"], a:0, fix:"Үйл үг→нэр үг → a decline."},
      {q:"Артикль:", parts:["The report shows ", " improvement in quality."], opts:["an","a"], a:0, fix:"improvement эгшгээр эхэлдэггүй ч дуудлага «им» → an improvement."},
      {q:"Албан ёсны:", parts:["", " indicate that costs rose by 12%."], opts:["The findings","I found that"], a:0, fix:"Объектив register → The findings indicate."},
      {q:"Идэвхгүй хэв:", parts:["A detailed evaluation ", " last quarter."], opts:["was conducted","conducted"], a:0, fix:"Тайлан → идэвхгүй: was conducted."}
    ],
    speak:{ scene:'Улирлын тайлангийн хэлэлцүүлэг', turns:[
      {ruby:"Can you summarise the report's main message?", pron:"кэн ю саммэрайз зэ рипортс мэйн мэсэж?", mn:"Тайлангийн гол санааг товчилж хэлж чадах уу?",
        choices:[{t:"Certainly. The analysis reveals a substantial improvement in productivity following the restructuring.",best:true,mn:"Мэдээж. Шинжилгээгээр бүтцийн өөрчлөлтийн дараа бүтээмж үлэмж сайжирсан нь харагдаж байна."},{t:"Certainly. We looked and productivity went up a lot after we changed things.",best:false,fix:"WRONG (ярианы) → The analysis reveals a substantial improvement in productivity."}]},
      {ruby:"And what about the rising costs?", pron:"энд вот эбаут зэ райзинг костс?", mn:"Өсөж буй зардлын талаар юу гэх вэ?",
        choices:[{t:"With regard to costs, the increase was largely attributable to higher energy prices.",best:true,mn:"Зардлын хувьд, өсөлт нь голдуу эрчим хүчний үнийн өсөлттэй холбоотой байв."},{t:"About costs, they went up because energy was expensive I think.",best:false,fix:"WRONG → With regard to costs, the increase was attributable to higher energy prices."}]},
      {ruby:"What do you recommend we do next?", pron:"вот ду ю рэкэмэнд ви ду нэкст?", mn:"Дараа нь юу хийхийг зөвлөх вэ?",
        choices:[{t:"The report proposes a phased implementation of automation to offset labour costs.",best:true,mn:"Тайланд хөдөлмөрийн зардлыг нөхөхийн тулд автоматжуулалтыг үе шаттай нэвтрүүлэхийг санал болгосон."},{t:"I think we should automate stuff to save on workers maybe.",best:false,fix:"WRONG → The report proposes a phased implementation of automation."}]}
    ]}
  },
  {
    id:'b2m9l5', title:"9.5 Хурал", level:"B2 · М9",
    blurb:"According to the report, it is argued that — reporting language ⭐⭐⭐",
    rule:{
      h:"Мэдээлэл дамжуулах ба хураангуйлах хэл (хурлын тэмдэглэл)",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хурал дээр <b>бусдын үзэл бодлыг эх сурвалжтай нь дамжуулж, хураангуйлах</b> албан ёсны хэллэг эзэмших.<br><br>
        <b>Эх сурвалж иш татах:</b>
        <div style="margin:12px 0"><span class="tag">ACCORDING TO the finance team, the budget is unrealistic.</span><span class="tag">AS STATED in the proposal, delivery begins in Q3.</span><span class="tag">The CEO CLAIMS THAT profits will double.</span></div>
        <b>Идэвхгүй мэдээлэл (эх сурвалж тодорхойгүй):</b>
        <div style="margin:12px 0"><span class="tag">IT IS ARGUED THAT remote work boosts output.</span><span class="tag">IT IS WIDELY BELIEVED THAT the market will recover.</span><span class="tag">The plan IS SAID TO be ambitious.</span></div>
        <b>Дамжуулах үйл үгийн өнгө (register):</b>
        <div style="margin:12px 0"><span class="tag">claim = батлах (эргэлзээтэй) · argue = маргах · maintain = байр сууриа хатуу барих · acknowledge = хүлээн зөвшөөрөх · point out = онцлон тэмдэглэх · imply = далд утга</span></div>
        <b>Хураангуйлах хэллэг:</b>
        <div style="margin:12px 0"><span class="tag">To sum up, the key concern is funding. · In essence, the two proposals overlap. · The main point raised was …</span></div>
        <b>Reported speech цаг ухрах:</b>
        <div style="margin:12px 0"><span class="tag">"We will hire." → She said they WOULD hire. · "Sales are up." → He noted sales WERE up.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        agenda /əˈdʒendə/ — хэлэлцэх асуудал · minutes /ˈmɪnɪts/ — тэмдэглэл · proposal /prəˈpoʊzl/ — санал<br>
        stakeholder /ˈsteɪkhoʊldər/ — оролцогч тал · consensus /kənˈsensəs/ — санал нэгдэл · objection /əbˈdʒekʃn/ — эсэргүүцэл<br>
        clarify /ˈklærɪfaɪ/ — тодруулах · summarise /ˈsʌməraɪz/ — хураангуйлах · address /əˈdres/ — шийдвэрлэх<br>
        agenda item /əˈdʒendə/ — асуудлын зүйл · adjourn /əˈdʒɜːrn/ — завсарлах · resolution /ˌrezəˈluːʃn/ — шийдвэр<br>
        allocate /ˈæləkeɪt/ — хуваарилах · deadline /ˈdedlaɪn/ — эцсийн хугацаа · follow-up /ˈfɒloʊʌp/ — дараагийн арга хэмжээ</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «According to me» ✗ — өөрийн санааг «In my view / I would argue» ✓. «It is argued that remote work boosts» — «that» дараа бүтэн өгүүлбэр, «It is argued to boost» ✗. Reported speech-т «She said she will come» ✗ → <b>she WOULD come</b> ✓ (цаг ухрана).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Бусдын үг = <b>«According to X / X claims that…»</b>; эх сурвалжгүй нийтлэг үзэл = <b>«It is argued that…»</b>; өөрийн үг = <b>«I would argue…»</b>.</p>`
    },
    phrases:[
      {en:"According to the marketing team, demand is expected to rise.", pron:"экординг ту зэ маркэтинг тийм, дэманд из икспэктид ту райз.", mn:"Маркетингийн багийнхны хэлснээр эрэлт нэмэгдэнэ гэж таамаглаж байна."},
      {en:"It is widely argued that flexible hours improve retention.", pron:"ит из уайдли аргюд зэт флэксибл аурз импрув ритэншн.", mn:"Уян хатан цаг ажилтныг тогтвор суурьшилтай болгодог гэж өргөн хүрээнд үздэг."},
      {en:"As stated in the minutes, the budget was approved last week.", pron:"эз стэйтид ин зэ минитс, зэ бажит воз апрувд ласт вийк.", mn:"Тэмдэглэлд дурдсанчлан төсөв өнгөрсөн долоо хоногт батлагдсан."},
      {en:"The director claims that the target is achievable.", pron:"зэ дирэктэр клэймз зэт зэ таргит из эчийвэбл.", mn:"Захирал зорилтод хүрэх боломжтой гэж баталж байна."},
      {en:"To sum up, the main concern raised was funding.", pron:"ту сам ап, зэ мэйн кэнсөрн рэйзд воз фандинг.", mn:"Товчоор хэлбэл, гарсан гол санаа зовнил нь санхүүжилт байлаа."}
    ],
    exercises:[
      {q:"Эх сурвалж:", parts:["", " the report, sales dropped in June."], opts:["According to","According for"], a:0, fix:"According TO the report."},
      {q:"Идэвхгүй мэдээлэл:", parts:["It is widely ", " that automation will grow."], opts:["believed","believing"], a:0, fix:"It is + V3 → believed that."},
      {q:"Reported (цаг ухрах):", parts:["She said the team ", " meet the deadline."], opts:["would","will"], a:0, fix:"said → will нь would болно."},
      {q:"Өөрийн санаа:", parts:["", ", the proposal needs revision."], opts:["In my view","According to me"], a:0, fix:"«According to me» ✗ → In my view."}
    ],
    speak:{ scene:'Төслийн хурал', turns:[
      {ruby:"Can you brief us on the finance team's position?", pron:"кэн ю бриф ас он зэ файнэнс тиймз позишн?", mn:"Санхүүгийн багийн байр суурийг товч танилцуулж чадах уу?",
        choices:[{t:"According to their analysis, the current budget won't cover the expansion.",best:true,mn:"Тэдний шинжилгээгээр одоогийн төсөв тэлэлтийг санхүүжүүлж чадахгүй."},{t:"According to me, their budget won't cover the expansion.",best:false,fix:"WRONG → According to THEIR ANALYSIS (өөрийн санаа бол «In my view»)."}]},
      {ruby:"And what did the CEO say about timing?", pron:"энд вот дид зэ сий-и-оу сэй эбаут таймин?", mn:"Гүйцэтгэх захирал хугацааны талаар юу гэсэн бэ?",
        choices:[{t:"She said the launch would be delayed until the third quarter.",best:true,mn:"Тэр эхлүүлэлт гурав дахь улирал хүртэл хойшлогдоно гэж хэлсэн."},{t:"She said the launch will be delayed until the third quarter.",best:false,fix:"WRONG → She said the launch WOULD be delayed (цаг ухрана)."}]},
      {ruby:"Could you sum up before we adjourn?", pron:"күд ю сам ап бифор ви эжөрн?", mn:"Завсарлахаасаа өмнө хураангуйлж өгөх үү?",
        choices:[{t:"To sum up, it is generally agreed that we proceed, provided funding is secured.",best:true,mn:"Товчоор хэлбэл, санхүүжилт баталгаажвал үргэлжлүүлэхээр ерөнхийдөө санал нэгдэж байна."},{t:"To sum up, is agreed generally we proceed if funding secured.",best:false,fix:"WRONG → it is generally AGREED THAT we proceed, provided funding is secured."}]}
    ]}
  },
  {
    id:'b2m9l6', title:"9.6 Багаар ажиллах", level:"B2 · М9",
    blurb:"Firstly… subsequently… ultimately — cohesion & signposting ⭐⭐",
    rule:{
      h:"Уялдаа холбоо ба догол мөр: чиглүүлэгч үг, ишлэл, дараалал",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Багийн бичвэр, илтгэлд <b>санааг уялдуулан холбож, дараалал, шилжилтийг</b> тодорхой болгох.<br><br>
        <b>1. Дараалал (sequencing):</b>
        <div style="margin:12px 0"><span class="tag">FIRSTLY we defined the scope; SUBSEQUENTLY we assigned tasks; ULTIMATELY we delivered early.</span><span class="tag">Initially · Following this · Meanwhile · Eventually · Finally</span></div>
        <b>2. Санааг холбогч (linkers) — өнгө ялгаатай:</b>
        <div style="margin:12px 0"><span class="tag">Нэмэлт: moreover · furthermore · in addition</span><span class="tag">Эсрэгцэл: however · nevertheless · on the other hand</span><span class="tag">Шалтгаан: consequently · therefore · as a result</span><span class="tag">Жишээ: for instance · to illustrate</span></div>
        <b>3. Ишлэл / referencing (давталтаас зайлсхийх):</b>
        <div style="margin:12px 0"><span class="tag">The team met a tight deadline. THIS achievement boosted morale. (this = өмнөх санаа)</span><span class="tag">We tried two tools; the FORMER failed, the LATTER worked. · SUCH problems recur.</span></div>
        <b>4. Догол мөрийн бүтэц (topic sentence):</b>
        <div style="margin:12px 0"><span class="tag">Догол мөр бүр НЭГ санаа: topic sentence → тайлбар → жишээ → холбоос.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        collaborate /kəˈlæbəreɪt/ — хамтран ажиллах · coordinate /koʊˈɔːrdɪneɪt/ — уялдуулах · contribute /kənˈtrɪbjuːt/ — хувь нэмэр оруулах<br>
        cohesion /koʊˈhiːʒn/ — эв нэгдэл · synergy /ˈsɪnərdʒi/ — хамтын үр нөлөө · workflow /ˈwɜːrkfloʊ/ — ажлын урсгал<br>
        allocate /ˈæləkeɪt/ — хуваарилах · milestone /ˈmaɪlstoʊn/ — гол үе шат · brief /briːf/ — даалгавар өгөх<br>
        feedback /ˈfiːdbæk/ — санал хүсэлт · consensus /kənˈsensəs/ — санал нэгдэл · dynamic /daɪˈnæmɪk/ — харилцан үйлдэл<br>
        interdependent /ˌɪntərdɪˈpendənt/ — харилцан хамааралтай · streamline /ˈstriːmlaɪn/ — хялбарчлах · overlap /ˌoʊvərˈlæp/ — давхцах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Firstly … secondly … at last» ✗ — эцэст нь бол <b>finally / ultimately</b> ✓ («at last» = удаан хүлээснийхээ дараа). «However» өгүүлбэрийн голд таслалаар: <b>We agreed; however, budget was short.</b> Догол мөр бүрт олон санаа шахах нь уялдааг эвддэг.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Дараалал: <b>Firstly → Subsequently → Ultimately</b>. Санааг буцааж заах: <b>this / such / the former / the latter</b>.</p>`
    },
    phrases:[
      {en:"Firstly, we clarified the objectives; subsequently, we divided the roles.", pron:"фөрстли, ви клэрифайд зи обжэктивз; сабсиквэнтли, ви дивайдид зэ роулз.", mn:"Эхлээд бид зорилтоо тодорхойлж, дараа нь үүргээ хуваарилсан."},
      {en:"The plan was ambitious; nevertheless, the team delivered on time.", pron:"зэ плэн воз эмбишэс; нэвэрзэлэс, зэ тийм диливэрд он тайм.", mn:"Төлөвлөгөө амбицтай байсан ч гэсэн баг цагтаа биелүүлсэн."},
      {en:"We tested two approaches; the latter proved far more efficient.", pron:"ви тэстид туу эпроучиз; зэ латэр прувд фар мор ифишнт.", mn:"Бид хоёр аргыг туршсан; сүүлийнх нь хамаагүй үр дүнтэй байлаа."},
      {en:"Communication broke down. This ultimately delayed the whole project.", pron:"кэмюникэйшн броук даун. зис алтимэтли дилэйд зэ хоул прожэкт.", mn:"Харилцаа тасарсан. Энэ нь эцэст нь бүх төслийг хойшлуулсан."},
      {en:"Consequently, we streamlined the workflow to reduce overlap.", pron:"консиквэнтли, ви стриймлайнд зэ вөркфлоу ту ридюс оувэрлэп.", mn:"Үүний үр дүнд бид давхцлыг багасгахын тулд ажлын урсгалыг хялбарчилсан."}
    ],
    exercises:[
      {q:"Эцсийн дараалал:", parts:["Firstly we planned; ", ", we launched successfully."], opts:["ultimately","at last"], a:0, fix:"Дараалалд эцэст нь → ultimately (at last ✗)."},
      {q:"Эсрэгцэл:", parts:["The deadline was tight; ", ", we managed it."], opts:["nevertheless","moreover"], a:0, fix:"Эсрэг санаа → nevertheless."},
      {q:"Referencing:", parts:["Trust collapsed. ", " problem is hard to fix."], opts:["Such a","This such"], a:0, fix:"Ийм төрлийн → Such a problem."},
      {q:"Шалтгаан-үр дүн:", parts:["Roles overlapped; ", ", we clarified them."], opts:["consequently","for instance"], a:0, fix:"Үр дагавар → consequently."}
    ],
    speak:{ scene:'Төслийн эргэн харалт', turns:[
      {ruby:"Walk me through how your team approached the project.", pron:"вок ми сру хау ёр тийм эпроучт зэ прожэкт.", mn:"Багийнхаа төсөлд хэрхэн хандсаныг тайлбарлаач.",
        choices:[{t:"Firstly, we set clear milestones; subsequently, we reviewed progress weekly.",best:true,mn:"Эхлээд бид тодорхой үе шатуудыг тогтоож, дараа нь долоо хоног бүр явцаа хянасан."},{t:"Firstly, we set milestones; at last, we reviewed progress weekly.",best:false,fix:"WRONG → SUBSEQUENTLY we reviewed (at last нь буруу дараалал)."}]},
      {ruby:"Did anything threaten the deadline?", pron:"дид энисинг срэтн зэ дэдлайн?", mn:"Эцсийн хугацаанд аюул учирсан зүйл байсан уу?",
        choices:[{t:"Yes, tasks overlapped. Consequently, we streamlined the workflow to avoid duplication.",best:true,mn:"Тийм, даалгаврууд давхцсан. Үүний үр дүнд бид давхардлаас зайлсхийхийн тулд урсгалыг хялбарчилсан."},{t:"Yes, tasks overlapped. For instance, we streamlined the workflow.",best:false,fix:"WRONG → CONSEQUENTLY we streamlined (for instance = жишээ, шалтгаан биш)."}]},
      {ruby:"So overall, how would you rate the collaboration?", pron:"соу оувэрол, хау вүд ю рэйт зэ кэлаборэйшн?", mn:"Ерөнхийдөө хамтын ажиллагааг хэрхэн үнэлэх вэ?",
        choices:[{t:"Strong. The plan was demanding; nevertheless, the team ultimately exceeded its targets.",best:true,mn:"Хүчтэй. Төлөвлөгөө шаардлага ихтэй байсан ч баг эцэстээ зорилтоо давсан."},{t:"Strong. The plan was demanding; moreover, the team exceeded its targets.",best:false,fix:"WRONG → NEVERTHELESS (эсрэгцэл), moreover нь нэмэлт утга."}]}
    ]}
  },
  {
    id:'b2m9l7', title:"9.7 Мэргэжлийн ур чадвар", level:"B2 · М9",
    blurb:"Meet a deadline, reach a decision — business collocations ⭐⭐",
    rule:{
      h:"Дэвшилтэт хэлц (collocation): бизнес/академик + үгийн гэр бүл",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Мэргэжлийн орчинд <b>байгалийн хэлц</b> (зөв үг хослол) болон <b>үгийн гэр бүлийг</b> эзэмших.<br><br>
        <b>1. Үйл үг + нэр үгийн хэлц (make/reach/meet/take):</b>
        <div style="margin:12px 0"><span class="tag">REACH a decision · MEET a deadline · TAKE responsibility · MAKE progress</span><span class="tag">RAISE concerns · SET a target · GAIN experience · MEET expectations</span></div>
        <b>2. Түгээмэл алдаатай хослол:</b>
        <div style="margin:12px 0"><span class="tag">✗ do a decision → ✓ MAKE / REACH a decision</span><span class="tag">✗ take a deadline → ✓ MEET a deadline</span><span class="tag">✗ make a responsibility → ✓ TAKE responsibility</span></div>
        <b>3. Тэмдэг нэр + нэр үг (strong collocations):</b>
        <div style="margin:12px 0"><span class="tag">a STEEP learning curve · a KEY priority · a VIABLE option · a PRESSING deadline · a PROVEN track record</span></div>
        <b>4. Үгийн гэр бүл (word families) — register сольж чаддаг байх:</b>
        <div style="margin:12px 0"><span class="tag">analyse (v) · analysis (n) · analyst (n-хүн) · analytical (adj)</span><span class="tag">compete · competition · competitor · competitive · competence</span><span class="tag">succeed · success · successful · successfully</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        expertise /ˌekspɜːrˈtiːz/ — мэргэшил · proficiency /prəˈfɪʃnsi/ — ур чадвар · competent /ˈkɒmpɪtənt/ — чадварлаг<br>
        deadline /ˈdedlaɪn/ — эцсийн хугацаа · priority /praɪˈɔːrəti/ — тэргүүлэх зорилт · responsibility /rɪˌspɒnsəˈbɪləti/ — хариуцлага<br>
        target /ˈtɑːrɡɪt/ — зорилт · progress /ˈproʊɡres/ — ахиц · outcome /ˈaʊtkʌm/ — үр дүн<br>
        efficiency /ɪˈfɪʃnsi/ — үр ашиг · versatile /ˈvɜːrsətl/ — олон талт · meticulous /məˈtɪkjələs/ — нямбай<br>
        analytical /ˌænəˈlɪtɪkl/ — шинжээ · adaptable /əˈdæptəbl/ — дасан зохицдог · track record /ˈtræk ˌrekɔːrd/ — гүйцэтгэлийн түүх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I did a big decision» ✗ → <b>made / reached a decision</b> ✓. «We reached the deadline» (= хүрсэн) ≠ <b>met the deadline</b> (= амжсан). «She has a good experience» ✗ (тоологдохгүй) → <b>a lot of experience / valuable experience</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Үг цээжлэхдээ ганцаар биш <b>хамтрагчтай нь</b>: «deadline → MEET», «decision → MAKE/REACH», «responsibility → TAKE».</p>`
    },
    phrases:[
      {en:"We finally reached a decision after a long discussion.", pron:"ви файнэли ричт э дисижн афтэр э лонг дискашн.", mn:"Урт хэлэлцүүлгийн эцэст бид эцэст нь шийдвэрт хүрсэн."},
      {en:"She always meets her deadlines, even under pressure.", pron:"ши олвэйз миитс хөр дэдлайнз, ивн андэр прэшэр.", mn:"Тэр дарамт дор ч гэсэн эцсийн хугацаагаа үргэлж амжуулдаг."},
      {en:"A good manager takes full responsibility for the team's results.", pron:"э гүд мэнэжэр тэйкс фүл риспонсибилити фор зэ тиймз ризалтс.", mn:"Сайн менежер багийнхаа үр дүнгийн төлөө бүрэн хариуцлага хүлээдэг."},
      {en:"He has a proven track record in project delivery.", pron:"хи хэз э пруувн трэк рэкорд ин прожэкт диливэри.", mn:"Тэр төсөл хэрэгжүүлэлтийн батлагдсан туршлагатай."},
      {en:"The new role involves a steep learning curve.", pron:"зэ нью роул инволвз э стийп лөрнинг көрв.", mn:"Шинэ ажил хурдтай суралцах шаардлагатай."}
    ],
    exercises:[
      {q:"Хэлц (decision):", parts:["After hours of debate we finally ", " a decision."], opts:["reached","did"], a:0, fix:"«do a decision» ✗ → reached / made."},
      {q:"Хэлц (deadline):", parts:["Despite delays, she ", " every deadline."], opts:["met","reached"], a:0, fix:"Амжих → met the deadline (reached = хүрсэн)."},
      {q:"Хэлц (responsibility):", parts:["A true leader ", " responsibility for mistakes."], opts:["takes","makes"], a:0, fix:"TAKE responsibility."},
      {q:"Үгийн гэр бүл:", parts:["Her ", " skills make her ideal for data work."], opts:["analytical","analysis"], a:0, fix:"Нэрийн өмнө тэмдэг нэр → analytical skills."}
    ],
    speak:{ scene:'Гүйцэтгэлийн ярилцлага', turns:[
      {ruby:"What would you say is your greatest strength?", pron:"вот вүд ю сэй из ёр грэйтэст стрэнгс?", mn:"Таны хамгийн том давуу тал юу гэж хэлэх вэ?",
        choices:[{t:"I consistently meet tight deadlines while maintaining high quality.",best:true,mn:"Би өндөр чанараа хадгалангаа хатуу эцсийн хугацааг тогтмол амжуулдаг."},{t:"I consistently reach tight deadlines while maintaining high quality.",best:false,fix:"WRONG → MEET tight deadlines (reach = хүрэх утга)."}]},
      {ruby:"How do you handle mistakes on your team?", pron:"хау ду ю хэндл мистэйкс он ёр тийм?", mn:"Багийнхаа алдааг хэрхэн шийдвэрлэдэг вэ?",
        choices:[{t:"I take responsibility as the lead and then focus on making real progress.",best:true,mn:"Ахлагчийн хувьд хариуцлагаа хүлээж, дараа нь бодит ахиц гаргахад анхаардаг."},{t:"I make responsibility as the lead and then focus on doing progress.",best:false,fix:"WRONG → TAKE responsibility and MAKE progress."}]},
      {ruby:"Why should we hire you over other candidates?", pron:"вай шүд ви хайр ю оувэр азэр кэндидэтс?", mn:"Яагаад бусад нэр дэвшигчээс илүү таныг ажилд авах ёстой вэ?",
        choices:[{t:"Because I bring a proven track record and adapt quickly to new challenges.",best:true,mn:"Учир нь би батлагдсан туршлагатай бөгөөд шинэ сорилтод хурдан дасан зохицдог."},{t:"Because I bring a proven track history and adapt quickly.",best:false,fix:"WRONG → a proven track RECORD (тогтсон хэлц)."}]}
    ]}
  },
  {
    id:'b2m9l8', title:"9.8 Ажлын харилцаа", level:"B2 · М9",
    blurb:"Take on, carry out, set up, deal with — phrasal verbs at work ⭐⭐⭐",
    rule:{
      h:"Мэргэжлийн phrasal & prepositional үйл үг",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Ажлын орчны <b>хэлц үйл үгсийг</b> утга, тусах эсэх, салдаг эсэхээр нь эзэмших.<br><br>
        <b>Гол хэлц үйл үгс:</b>
        <div style="margin:12px 0"><span class="tag">TAKE ON = хариуцлага/ажил авах: She took on two new clients.</span><span class="tag">CARRY OUT = гүйцэтгэх: We carried out a survey.</span><span class="tag">SET UP = байгуулах: They set up a new branch.</span><span class="tag">DEAL WITH = шийдвэрлэх: I'll deal with the complaint.</span><span class="tag">FOLLOW UP = дараагийн арга хэмжээ авах: Please follow up on the email.</span></div>
        <b>Бусад чухал үйл үгс:</b>
        <div style="margin:12px 0"><span class="tag">step down = огцрох · take over = хариуцаж авах · draw up = боловсруулах (гэрээ) · put forward = дэвшүүлэх · roll out = нэвтрүүлэх · lay off = ажлаас чөлөөлөх · fill in for = орлох</span></div>
        <b>Салдаг эсэх (separable):</b>
        <div style="margin:12px 0"><span class="tag">Салдаг: set it up ✓ / carry it out ✓ (төлөөний үг ДУНД)</span><span class="tag">Салдаггүй: deal with it ✓ (deal it with ✗) · follow up on it</span></div>
        <b>Register: албан бичигт нэг үгийн эквивалент:</b>
        <div style="margin:12px 0"><span class="tag">carry out ≈ conduct · set up ≈ establish · deal with ≈ address · take on ≈ assume</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        assign /əˈsaɪn/ — даалгах · undertake /ˌʌndərˈteɪk/ — үүрэг авах · oversee /ˌoʊvərˈsiː/ — хянах<br>
        implement /ˈɪmplɪment/ — хэрэгжүүлэх · resolve /rɪˈzɒlv/ — шийдвэрлэх · establish /ɪˈstæblɪʃ/ — байгуулах<br>
        delegate /ˈdelɪɡeɪt/ — эрх шилжүүлэх · coordinate /koʊˈɔːrdɪneɪt/ — уялдуулах · supervise /ˈsuːpərvaɪz/ — удирдах<br>
        liaise /liˈeɪz/ — холбоо барих · handle /ˈhændl/ — зохицуулах · outsource /ˈaʊtsɔːrs/ — гадны гүйцэтгэгчид даалгах<br>
        streamline /ˈstriːmlaɪn/ — хялбарчлах · restructure /ˌriːˈstrʌktʃər/ — бүтцийг өөрчлөх · workload /ˈwɜːrkloʊd/ — ажлын ачаалал</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I will deal it with» ✗ — <b>deal WITH it</b> ✓ (салдаггүй). «She took on it» ✗ → <b>took it on</b> ✓ (нэр үг бол: took on the project). «carry on a survey» ✗ (carry on = үргэлжлүүлэх) → <b>carry OUT a survey</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>TAKE ON</b> = мөрөн дээрээ ач · <b>CARRY OUT</b> = гүйцэтгэ · <b>SET UP</b> = босго · <b>DEAL WITH</b> = ширээн дээр ир · <b>FOLLOW UP</b> = мөрд.</p>`
    },
    phrases:[
      {en:"She has taken on responsibility for the whole region.", pron:"ши хэз тэйкн он риспонсибилити фор зэ хоул риджэн.", mn:"Тэр бүхэл бүтэн бүсийн хариуцлагыг өөр дээрээ авсан."},
      {en:"We carried out a detailed market survey last month.", pron:"ви кэрид аут э дитэйлд маркит сөрвэй ласт манс.", mn:"Бид өнгөрсөн сард дэлгэрэнгүй зах зээлийн судалгаа хийсэн."},
      {en:"The company set up a new office in Singapore.", pron:"зэ кампэни сэт ап э нью офис ин Сингапор.", mn:"Компани Сингапурт шинэ оффис нээсэн."},
      {en:"Could you deal with this client complaint today?", pron:"күд ю дийл виз зис клайэнт кэмплэйнт тудэй?", mn:"Та энэ үйлчлүүлэгчийн гомдлыг өнөөдөр шийдвэрлэж чадах уу?"},
      {en:"I'll follow up on your request by Friday.", pron:"айл фолоу ап он ёр рикуэст бай фрайдэй.", mn:"Би таны хүсэлтийг Баасан гараг гэхэд мөрдөж шийдвэрлэнэ."}
    ],
    exercises:[
      {q:"Утга (гүйцэтгэх):", parts:["The team will ", " the audit next week."], opts:["carry out","carry on"], a:0, fix:"Гүйцэтгэх → carry OUT (carry on = үргэлжлүүлэх)."},
      {q:"Салдаггүй үйл үг:", parts:["Don't worry, I'll ", " right away."], opts:["deal with it","deal it with"], a:0, fix:"deal WITH it (салдаггүй)."},
      {q:"Утга (авах):", parts:["She agreed to ", " the extra project."], opts:["take on","take off"], a:0, fix:"Хариуцаж авах → take ON."},
      {q:"Утга (мөрдөх):", parts:["Please ", " on the unanswered emails."], opts:["follow up","follow out"], a:0, fix:"Дараагийн арга хэмжээ → follow UP on."}
    ],
    speak:{ scene:'Ажлын хуваарилалт', turns:[
      {ruby:"Who can handle the new client account?", pron:"хуу кэн хэндл зэ нью клайэнт экаунт?", mn:"Шинэ үйлчлүүлэгчийн дансыг хэн зохицуулах вэ?",
        choices:[{t:"I'm happy to take it on, as long as I can delegate my current reports.",best:true,mn:"Одоогийн тайлангуудаа шилжүүлж чадвал би дуртайяа хариуцаж авна."},{t:"I'm happy to take on it, as long as I can delegate my reports.",best:false,fix:"WRONG → take IT ON (төлөөний үг дунд)."}]},
      {ruby:"There's also a customer complaint pending.", pron:"зэрз олсоу э кастэмэр кэмплэйнт пэндинг.", mn:"Мөн шийдэгдээгүй үйлчлүүлэгчийн гомдол байна.",
        choices:[{t:"I'll deal with it first thing tomorrow and follow up with the client afterwards.",best:true,mn:"Би маргааш хамгийн түрүүнд шийдвэрлээд, дараа нь үйлчлүүлэгчтэй холбогдож мөрдөнө."},{t:"I'll deal it with first thing tomorrow and follow up the client.",best:false,fix:"WRONG → DEAL WITH IT and FOLLOW UP WITH the client."}]},
      {ruby:"And the branch launch we discussed?", pron:"энд зэ бранч лонч ви дискаст?", mn:"Бидний ярьсан салбарын нээлт яах вэ?",
        choices:[{t:"We're on track to set it up by Q3, once the audit is carried out.",best:true,mn:"Аудит хийгдсэний дараа гурав дахь улирал гэхэд байгуулах хугацаандаа явж байна."},{t:"We're on track to set up it by Q3, once the audit is carried on.",best:false,fix:"WRONG → SET IT UP and the audit is CARRIED OUT."}]}
    ]}
  },
  {
    id:'b2m9l9', title:"9.9 Дипломат хэл", level:"B2 · М9",
    blurb:"It may be worth reconsidering — hedging & diplomacy ⭐⭐",
    rule:{
      h:"Зөөлрүүлэх хэл: hedging, diplomacy, эелдэг эсэргүүцэл",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Мэргэжлийн орчинд <b>шүүмж, санал зөрөлдөөн, татгалзлыг эелдэг, болгоомжтой</b> илэрхийлэх.<br><br>
        <b>1. Модаль зөөлрүүлэгч (could / might / would):</b>
        <div style="margin:12px 0"><span class="tag">This COULD perhaps be improved. (= This is bad ✗ хатуу)</span><span class="tag">It MIGHT be worth reconsidering the timeline.</span><span class="tag">I WOULD tend to disagree with that approach.</span></div>
        <b>2. Хязгаарлагч үг (hedges):</b>
        <div style="margin:12px 0"><span class="tag">to some extent · in a sense · relatively · fairly · arguably · seemingly</span><span class="tag">Sales are somewhat disappointing. (= bad-ийг зөөлрүүлэв)</span></div>
        <b>3. Эелдэг эсэргүүцэл (softened disagreement):</b>
        <div style="margin:12px 0"><span class="tag">I see your point, BUT have we considered…? · I'm not entirely convinced that… · With respect, I'd suggest a different angle.</span></div>
        <b>4. Санал болгох болгоомжтой хэлбэр:</b>
        <div style="margin:12px 0"><span class="tag">It may be worth + -ing: It may be worth revisiting the budget.</span><span class="tag">Perhaps we could…? · Would it be possible to…? · One option might be to…</span></div>
        <b>5. Сөрөг мэдээг зөөлрүүлэх:</b>
        <div style="margin:12px 0"><span class="tag">I'm afraid there's been a slight delay. · Unfortunately, we're not quite there yet.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        diplomatic /ˌdɪpləˈmætɪk/ — эвсэг · tactful /ˈtæktfl/ — ааштай · tentative /ˈtentətɪv/ — болгоомжтой<br>
        reconsider /ˌriːkənˈsɪdər/ — дахин бодох · concede /kənˈsiːd/ — зөвшөөрөх · reservation /ˌrezərˈveɪʃn/ — эргэлзээ<br>
        constructive /kənˈstrʌktɪv/ — бүтээлч · nuance /ˈnuːɑːns/ — нарийн ялгаа · compromise /ˈkɒmprəmaɪz/ — буулт хийх<br>
        acknowledge /əkˈnɒlɪdʒ/ — хүлээн зөвшөөрөх · rephrase /ˌriːˈfreɪz/ — өөрөөр хэлэх · mitigate /ˈmɪtɪɡeɪt/ — зөөлрүүлэх<br>
        cautious /ˈkɔːʃəs/ — болгоомжтой · candid /ˈkændɪd/ — шулуухан · perceive /pərˈsiːv/ — ойлгож хүлээж авах</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Your plan is wrong» — хэт хатуу; <b>«I'm not entirely convinced the plan will work»</b> ✓. «It may be worth to reconsider» ✗ → <b>worth reconsiderING</b> ✓ (worth + -ing). Хэт олон hedge хийвэл санаа бүрхэг болно — <b>тодорхой + эелдэг</b> тэнцвэр хэрэгтэй.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Хатуу «No / You're wrong»-ыг <b>«I'm not entirely sure… / It might be worth…»</b> болгож зөөлрүүл. Модаль + hedge = дипломат.</p>`
    },
    phrases:[
      {en:"It might be worth reconsidering the current deadline.", pron:"ит майт би вөрс риконсидэринг зэ каррэнт дэдлайн.", mn:"Одоогийн эцсийн хугацааг дахин бодож үзэх нь зүйтэй байж магадгүй."},
      {en:"I'm not entirely convinced this is the best approach.", pron:"айм нот интайэрли кэнвинст зис из зэ бэст эпроуч.", mn:"Энэ хамгийн зөв арга гэдэгт би бүрэн итгэлтэй биш байна."},
      {en:"With respect, I'd tend to suggest a different angle.", pron:"виз риспэкт, айд тэнд ту сэжэст э дифрэнт энгл.", mn:"Хүндэтгэлтэйгээр хэлэхэд би арай өөр өнцгийг санал болгох байсан."},
      {en:"I'm afraid there's been a slight delay with the report.", pron:"айм эфрэйд зэрз бийн э слайт дилэй виз зэ рипорт.", mn:"Харамсалтай нь тайлан жаахан хойшилсон байна."},
      {en:"Perhaps we could revisit the figures before deciding.", pron:"пөрхэпс ви күд ривизит зэ фигэрз бифор дисайдинг.", mn:"Шийдэхээсээ өмнө тоо баримтыг дахин харвал зүгээр болов уу."}
    ],
    exercises:[
      {q:"Зөөлрүүлэх:", parts:["This plan ", " be worth reconsidering."], opts:["might","must"], a:0, fix:"Дипломат → might (must = хатуу албадлага)."},
      {q:"worth + хэлбэр:", parts:["It may be worth ", " the budget again."], opts:["reviewing","to review"], a:0, fix:"worth + -ing → reviewing."},
      {q:"Эелдэг эсэргүүцэл:", parts:["I'm not ", " convinced this will succeed."], opts:["entirely","completely wrong"], a:0, fix:"Зөөлрүүлэх → not entirely convinced."},
      {q:"Hedge:", parts:["The results are ", " disappointing, to be honest."], opts:["somewhat","totally"], a:0, fix:"Зөөлрүүлэгч → somewhat."}
    ],
    speak:{ scene:'Санал зөрөлдөөнтэй хэлэлцүүлэг', turns:[
      {ruby:"I think we should launch next week. Thoughts?", pron:"ай синк ви шүд лонч нэкст вийк. соотс?", mn:"Ирэх долоо хоногт эхлүүлэх ёстой гэж бодож байна. Санал?",
        choices:[{t:"I see your point, but I'm not entirely convinced the product is ready.",best:true,mn:"Санааг тань ойлгож байна, гэхдээ бүтээгдэхүүн бэлэн гэдэгт бүрэн итгэлтэй биш байна."},{t:"No, you're wrong, the product is not ready at all.",best:false,fix:"WRONG (хэт хатуу) → I'm not entirely convinced the product is ready."}]},
      {ruby:"But delaying could upset the client.", pron:"бат дилэйинг күд апсэт зэ клайэнт?", mn:"Гэхдээ хойшлуулбал үйлчлүүлэгчийг бухимдуулж магадгүй.",
        choices:[{t:"That's fair. It might be worth offering them a short extension with a clear reason.",best:true,mn:"Зөв. Тодорхой шалтгаантайгаар богино хугацааны сунгалт санал болгох нь зүйтэй байж магадгүй."},{t:"That's fair. It might be worth to offer them an extension.",best:false,fix:"WRONG → worth OFFERING (worth + -ing)."}]},
      {ruby:"So you'd rather we postponed?", pron:"соу юд разэр ви поустпоунд?", mn:"Тэгэхээр чи хойшлуулах нь дээр гэж үзэж байна уу?",
        choices:[{t:"I'd tend to, yes. Perhaps we could set a firmer date once testing is complete.",best:true,mn:"Тийм, тэгэх талтай. Тест дуусмагц илүү баттай огноо тогтоовол зүгээр болов уу."},{t:"Yes obviously, we postpone, testing is not done so it's clear.",best:false,fix:"WRONG (хатуу) → I'd tend to, yes. Perhaps we could set a firmer date."}]}
    ]}
  },
  {
    id:'b2m9l10', title:"9.10 Модулийн төсөл", level:"B2 · М9",
    blurb:"🏆 Мэргэжил, карьерын тухай эссэ бичих — Модуль 9-ийн нэгтгэл",
    rule:{
      h:"Давтлага: B2 Модуль 9-ийн бүх бүтэц нэг эссэд",
      html:`<b>🎯 Зорилго:</b> Модуль 9-ийн бүх дүрмийг нэгтгэн, карьер ба ажлын ирээдүйн тухай <b>жинхэнэ B2 түвшний маргаант эссэ</b> (discursive essay) бичих.<br><br>
        <b>Модуль 9-ийн дүрмүүд (эссэдээ ашигла!):</b>
        <div style="margin:12px 0"><span class="tag">She must have prepared / I should have researched (modality) ⭐⭐⭐</span><span class="tag">Had I known, I would have chosen differently (inverted conditional) ⭐⭐⭐</span><span class="tag">It is her vision that matters / What we need is… (cleft) ⭐⭐</span><span class="tag">The implementation resulted in a reduction (nominalisation) ⭐⭐⭐</span><span class="tag">According to research, it is argued that… (reporting) ⭐⭐⭐</span><span class="tag">Firstly… subsequently… ultimately (cohesion) ⭐⭐</span><span class="tag">meet a deadline / take responsibility (collocation) ⭐⭐</span><span class="tag">take on, carry out, deal with (phrasal verbs) ⭐⭐⭐</span><span class="tag">It might be worth reconsidering (hedging) ⭐⭐</span></div>
        <b>🏆 Төсөл — «Will automation replace human workers?» маргаант эссэ (bulk 4 догол мөр):</b>
        <p style="margin-top:8px"><b>Загвар B2 догол мөр:</b><br>
        <i>The question of whether automation will replace human workers is increasingly debated. According to several economists, it is argued that repetitive roles are most at risk, whereas jobs requiring empathy and judgement are far harder to automate. What is often overlooked, however, is that new technologies also create entirely new professions. Firstly, previous industrial shifts suggest that displacement is rarely permanent; subsequently, workers who upskill tend to move into more rewarding roles. Had earlier generations refused to adapt, entire industries would have collapsed. In my view, the real challenge is not technology itself but how quickly institutions carry out retraining. It might therefore be worth investing heavily in lifelong learning. Ultimately, it is our capacity to adapt — rather than the machines themselves — that will determine the future of work.</i></p>
        <p style="margin-top:8px">Дээрх загвараар өөрийн байр суурьтай <b>4 догол мөр (introduction → 2 body → conclusion)</b> бичээд Ruby-д засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> B2 эссэний бүтэц: <b>Танилцуулга</b> (According to…, it is argued that…) → <b>Талын нотолгоо</b> (Firstly… nominalisation… cleft) → <b>Эсрэг тал + нөхцөл</b> (Had… would have…) → <b>Дүгнэлт</b> (In my view… ultimately… it is X that…).</p>`
    },
    phrases:[
      {en:"According to several economists, repetitive roles are most at risk.", pron:"экординг ту сэврэл иконэмистс, рипэтэтив роулз ар моуст эт риск.", mn:"Хэд хэдэн эдийн засагчийн үзэж буйгаар давтагдмал ажлууд хамгийн эрсдэлтэй."},
      {en:"What is often overlooked is that technology creates new professions.", pron:"вот из офн оувэрлүкт из зэт тэкнолэжи криэйтс нью прэфэшнз.", mn:"Ихэвчлэн орхигддог зүйл бол технологи шинэ мэргэжлүүдийг бий болгодог явдал."},
      {en:"Had earlier generations refused to adapt, whole industries would have collapsed.", pron:"хэд өрлиэр жэнэрэйшнз рифюзд ту эдэпт, хоул индэстриз вүд хэв кэлэпст.", mn:"Хэрэв өмнөх үеийнхэн дасан зохицохоос татгалзсан бол бүхэл салбарууд нуран унах байсан."},
      {en:"It might be worth investing heavily in lifelong learning.", pron:"ит майт би вөрс инвэстинг хэвили ин лайфлонг лөрнинг.", mn:"Насан туршийн боловсролд ихээхэн хөрөнгө оруулах нь зүйтэй байж магадгүй."},
      {en:"Ultimately, it is our capacity to adapt that will shape the future of work.", pron:"алтимэтли, ит из аур кэпэсити ту эдэпт зэт вил шэйп зэ фьючэр ов вөрк.", mn:"Эцсийн эцэст ажлын ирээдүйг тодорхойлох нь бидний дасан зохицох чадвар юм."}
    ],
    exercises:[
      {q:"Давтлага (reporting):", parts:["", " research, automation will reshape many jobs."], opts:["According to","According with"], a:0, fix:"According TO research."},
      {q:"Давтлага (inverted cond.):", parts:["", " I known the risks, I would have retrained earlier."], opts:["Had","If had"], a:0, fix:"Эргүүлсэн → Had I known."},
      {q:"Давтлага (cleft):", parts:["", " our adaptability that matters most."], opts:["It is","There is"], a:0, fix:"Онцлох cleft → It is … that."},
      {q:"Давтлага (hedging):", parts:["It might be worth ", " in retraining programmes."], opts:["investing","to invest"], a:0, fix:"worth + -ing → investing."}
    ],
    speak:{ scene:'🏆 Төсөл: Ажлын ирээдүйн тухай маргаан', turns:[
      {ruby:"Do you believe automation will destroy jobs?", pron:"ду ю билийв отэмэйшн вил дистрой жобз?", mn:"Автоматжуулалт ажлын байрыг устгана гэж бодож байна уу?",
        choices:[{t:"According to most studies, it is argued that automation shifts jobs rather than simply destroying them.",best:true,mn:"Ихэнх судалгааны үзэж буйгаар автоматжуулалт ажлыг устгахаас илүү шилжүүлдэг гэж үздэг."},{t:"According to me, automation destroy jobs simply.",best:false,fix:"WRONG → According to most STUDIES, it is argued that… (өөрийн санаа бол «In my view»)."}]},
      {ruby:"But many workers will still lose their roles.", pron:"бат мэни вөркэрз вил стил лууз зэйр роулз?", mn:"Гэхдээ олон ажилтан ажлаа алдах болно шүү дээ.",
        choices:[{t:"True. Had companies invested in retraining earlier, fewer people would have been laid off.",best:true,mn:"Үнэн. Хэрэв компаниуд дахин сургалтад эрт хөрөнгө оруулсан бол цөөн хүн ажлаас чөлөөлөгдөх байсан."},{t:"True. If companies would invest in retraining, fewer people were laid off.",best:false,fix:"WRONG → HAD companies invested…, fewer would HAVE BEEN laid off."}]},
      {ruby:"So what's your overall conclusion?", pron:"соу вотс ёр оувэрол кэнклюжн?", mn:"Тэгэхээр таны ерөнхий дүгнэлт юу вэ?",
        choices:[{t:"Ultimately, it is our ability to adapt that will decide the future — and it might be worth investing in that now.",best:true,mn:"Эцсийн эцэст ирээдүйг шийдэх нь бидний дасан зохицох чадвар бөгөөд одооноос үүнд хөрөнгө оруулах нь зүйтэй байж магадгүй."},{t:"Ultimately, is our ability to adapt what decide the future, invest now obviously.",best:false,fix:"WRONG → it IS our ability to adapt THAT will decide… it MIGHT BE WORTH investing."}]}
    ]}
  },
  {
    id:'b2m10l1', title:"10.1 Цаг хугацаа", level:"B2 · М10",
    blurb:"By the time I wake, the world will have changed — the whole tense & aspect system ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Цаг ба аспектийн бүрэн систем",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн бүх цагийг <b>нэг өгүүлэмжид</b> зөв сүлжих — энгийн/үргэлжлэх/төгс/төгс-үргэлжлэх бүх аспект.<br><br>
        <b>Аспектийн эсрэгцэл (тухайн мөчид АЛ утга):</b>
        <div style="margin:12px 0"><span class="tag">I live here. (баримт)</span><span class="tag">I'm living here for now. (түр, өөрчлөгдөж буй)</span><span class="tag">I've lived here for years. (үр дүн одоо)</span><span class="tag">I've been living here since May. (үргэлжилсэн үйл)</span></div>
        <b>Өнгөрсний давхаргалал (нэг түүхэнд):</b>
        <div style="margin:12px 0"><span class="tag">By the time she ARRIVED, we HAD BEEN WAITING for an hour and the meeting HAD already STARTED.</span></div>
        <b>Ирээдүйн бүх сүүдэр:</b>
        <div style="margin:12px 0"><span class="tag">This time tomorrow I'll BE FLYING.</span><span class="tag">By 2035 I'll HAVE SAVED enough.</span><span class="tag">By then I'll HAVE BEEN WORKING here for a decade.</span></div>
        <b>Тайлбарлагч аспект (шүүмжлэл, тайлбар):</b>
        <div style="margin:12px 0"><span class="tag">You're ALWAYS losing your keys! (бухимдал)</span><span class="tag">I'm forever forgetting names. (давтагдах зуршил + сэтгэл хөдлөл)</span></div>
        <b>Өгүүлэмжийн урсгал (narrative):</b>
        <div style="margin:12px 0"><span class="tag">The sun WAS SETTING as I WALKED home; I HAD NEVER FELT so free.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        aspiration /ˌæspəˈreɪʃn/ — эрмэлзэл · destiny /ˈdestəni/ — хувь заяа · vision /ˈvɪʒn/ — алсын хараа<br>
        journey /ˈdʒɜːrni/ — аялал (замнал) · turning point /ˈtɜːrnɪŋ pɔɪnt/ — эргэлтийн цэг · phase /feɪz/ — үе шат<br>
        momentum /moʊˈmentəm/ — түрэлт · perseverance /ˌpɜːrsəˈvɪrəns/ — тэвчээр · breakthrough /ˈbreɪkθruː/ — том дэвшил<br>
        legacy /ˈleɡəsi/ — өв уламжлал · unfold /ʌnˈfoʊld/ — өрнөх · evolve /ɪˈvɑːlv/ — хувьсан хөгжих<br>
        anticipate /ænˈtɪsɪpeɪt/ — урьдчилан харах · reflect /rɪˈflekt/ — эргэцүүлэх · culminate /ˈkʌlmɪneɪt/ — оргилдоо хүрэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «By the time she arrived, we waited an hour» ✗ → <b>we HAD BEEN WAITING</b> ✓. «Since 2020 I work here» ✗ → <b>I've been working / I've worked</b> ✓ (since → төгс цаг).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Аспект = <b>«ямар өнцгөөс харж байна»</b>: дууссан үр дүн (HAVE+V3), үргэлжилсэн үйл (HAVE BEEN +ing), тухайн мөчийн зураг (BE +ing).</p>`
    },
    phrases:[
      {en:"By the time I graduate, I'll have been studying English for a decade.", pron:"бай зэ тайм ай грэжуэйт, айл хэв бийн стадиинг инглиш фор э дэкэйд.", mn:"Төгсөх үедээ би англи хэлийг арван жил сурсан байх болно."},
      {en:"The sun was setting as I finally reached the summit.", pron:"зэ сан воз сэттинг эз ай файнэли рийчт зэ саммит.", mn:"Оргилд эцэст нь хүрэхэд нар жаргаж байлаа."},
      {en:"She's always chasing new goals — it's what drives her.", pron:"шиз олвэйз чэйсинг ню гоулз — итс вот драйвз хөр.", mn:"Тэр байнга шинэ зорилго хөөдөг — энэ нь түүнийг хөтөлдөг."},
      {en:"By then, our little startup will have evolved into a real company.", pron:"бай зэн, аур литл стартап вил хэв ивалвд инту э риал кампэни.", mn:"Тэр үед манай жижиг стартап жинхэнэ компани болон хувирсан байна."},
      {en:"Looking back, I realise every phase had been shaping me.", pron:"лүүкинг бэк, ай риэлайз эври фэйз хэд бийн шэйпинг ми.", mn:"Эргэн харахад үе шат бүр намайг төлөвшүүлж байсныг ойлгодог."}
    ],
    exercises:[
      {q:"Өнгөрсний давхарга:", parts:["By the time she arrived, we ", " for an hour."], opts:["had been waiting","waited"], a:0, fix:"By the time + өнгөрсөн → had been waiting."},
      {q:"Ирээдүйн төгс-үргэлжлэх:", parts:["By June, I'll ", " here for ten years."], opts:["have been working","be working"], a:0, fix:"«for ten years» + by → will HAVE BEEN working."},
      {q:"Тайлбарлагч аспект:", parts:["You're ", " your keys — so annoying!"], opts:["always losing","always lose"], a:0, fix:"Бухимдлын зуршил → BE always + -ing."},
      {q:"Since + цаг:", parts:["I ", " here since 2020."], opts:["'ve lived","live"], a:0, fix:"since → present perfect (have lived)."}
    ],
    speak:{ scene:'Замналаа эргэцүүлэх', turns:[
      {ruby:"How long have you been learning English?", pron:"хау лонг хэв ю бийн лөрнинг инглиш?", mn:"Та англи хэлийг хэдэн жил сурч байна вэ?",
        choices:[{t:"By the end of this year, I'll have been studying it for five years.",best:true,mn:"Энэ жилийн эцэс гэхэд би таван жил сурсан байх болно."},{t:"By the end of this year, I study it for five years.",best:false,fix:"by + for → I'LL HAVE BEEN STUDYING."}]},
      {ruby:"Was there a turning point for you?", pron:"воз зэр э төрнинг пойнт фор ю?", mn:"Танд эргэлтийн цэг байсан уу?",
        choices:[{t:"Yes. By the time I moved abroad, I had already been practising for years.",best:true,mn:"Тийм. Гадаадад нүүх үедээ би аль хэдийн олон жил дадлага хийсэн байсан."},{t:"Yes. When I moved abroad, I practise for years.",best:false,fix:"had ALREADY BEEN PRACTISING (өнгөрсний өмнөх үргэлжлэл)."}]},
      {ruby:"Where do you see this journey going?", pron:"вэр ду ю сий зис жөрни гоуинг?", mn:"Энэ замнал хаашаа чиглэж байна гэж бодож байна?",
        choices:[{t:"This time next year, I'll be working entirely in English — my vision is finally unfolding.",best:true,mn:"Ирэх жилийн энэ үед би бүрэн англиар ажиллаж байх болно — алсын хараа минь эцэст нь өрнөж байна."},{t:"This time next year, I work entirely in English.",best:false,fix:"Тэр мөчид үргэлжилнэ → I'LL BE WORKING."}]}
    ]}
  },
  {
    id:'b2m10l2', title:"10.2 Модаль", level:"B2 · М10",
    blurb:"She must have known — the whole modal system, present & past ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Модаль үйл үгийн бүрэн систем",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Модаль үйл үгийн <b>бүх утга</b> — таамаг, үүрэг, зөвлөгөө, шүүмж — одоо ба өнгөрсөн цагт.<br><br>
        <b>Таамаг (итгэлийн зэрэг):</b>
        <div style="margin:12px 0"><span class="tag">She MUST be tired. (99% тийм)</span><span class="tag">He CAN'T be serious. (99% үгүй)</span><span class="tag">It MIGHT/COULD rain. (боломж)</span></div>
        <b>Өнгөрсний таамаг (modal + HAVE + V3):</b>
        <div style="margin:12px 0"><span class="tag">She MUST HAVE forgotten. (лавтай мартсан)</span><span class="tag">He CAN'T HAVE known. (мэдээгүй нь лавтай)</span><span class="tag">They MIGHT HAVE left already.</span></div>
        <b>Үүрэг ба шаардлагагүй байдал:</b>
        <div style="margin:12px 0"><span class="tag">You MUST wear a helmet. / You MUSTN'T smoke.</span><span class="tag">You DON'T HAVE TO come. (шаардлагагүй)</span></div>
        <b>Өнгөрсний шүүмж ба харамсал:</b>
        <div style="margin:12px 0"><span class="tag">You SHOULD HAVE told me! (хэлэх ёстой байсан)</span><span class="tag">You NEEDN'T HAVE paid. (төлөх шаардлагагүй байсан — гэвч төлсөн)</span><span class="tag">I SHOULDN'T HAVE said that.</span></div>
        <b>Итгэлтэй ирээдүй ба чадвар:</b>
        <div style="margin:12px 0"><span class="tag">This is bound to work. / She's certain to pass.</span><span class="tag">I managed to finish. (чадсан — нэг удаагийн амжилт)</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        conviction /kənˈvɪkʃn/ — итгэл үнэмшил · likelihood /ˈlaɪklihʊd/ — магадлал · assumption /əˈsʌmpʃn/ — таамаглал<br>
        obligation /ˌɑːblɪˈɡeɪʃn/ — үүрэг · commitment /kəˈmɪtmənt/ — амлалт · resolve /rɪˈzɑːlv/ — шийдэмгий байдал<br>
        inevitable /ɪnˈevɪtəbl/ — зайлшгүй · plausible /ˈplɔːzəbl/ — үнэмшилтэй · doubtful /ˈdaʊtfl/ — эргэлзээтэй<br>
        deserve /dɪˈzɜːrv/ — зохих · regret /rɪˈɡret/ — харамсах · dare /der/ — зориглох<br>
        destined /ˈdestɪnd/ — заяагдсан · worthwhile /ˌwɜːrθˈwaɪl/ — үнэ цэнтэй · attainable /əˈteɪnəbl/ — хүрэхүйц</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She must forgot» ✗ → <b>She MUST HAVE forgotten</b> ✓. «You didn't have to tell me!» (=шаардлагагүй байсан) vs «You SHOULDN'T HAVE told me!» (=буруу хийсэн) — утга ЯЛГААТАЙ. «mustn't = хориотой» ≠ «don't have to = шаардлагагүй».</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Өнгөрсний таамаг = <b>modal + HAVE + V3</b>. «must have» лавтай, «can't have» лавгүй, «might have» магадгүй.</p>`
    },
    phrases:[
      {en:"She must have been dreaming about this for years.", pron:"ши маст хэв бийн дриминг эбаут зис фор йирз.", mn:"Тэр үүнийг олон жил мөрөөдсөн байх ёстой."},
      {en:"You can't have forgotten your own dream so quickly.", pron:"ю кант хэв фэготтэн ёр оун дрийм соу квикли.", mn:"Чи өөрийнхөө мөрөөдлийг ийм хурдан мартсан байх боломжгүй."},
      {en:"I should have chased this goal a long time ago.", pron:"ай шүд хэв чэйст зис гоул э лонг тайм эгоу.", mn:"Би энэ зорилгодоо аль эрт хөөцөлдөх ёстой байсан."},
      {en:"You needn't have doubted yourself — you were always capable.", pron:"ю нийднт хэв дауттид ёрсэлф — ю вөр олвэйз кэйпэбл.", mn:"Чи өөрийгөө эргэлзэх шаардлагагүй байсан — чи үргэлж чадвартай байсан."},
      {en:"With this much resolve, she's bound to succeed.", pron:"виз зис мач ризолв, шиз баунд ту сэксийд.", mn:"Ийм их шийдэмгий байвал тэр амжилтад хүрэх нь зайлшгүй."}
    ],
    exercises:[
      {q:"Өнгөрсний таамаг:", parts:["The lights are off — they ", " gone to bed."], opts:["must have","must"], a:0, fix:"Өнгөрсний лавтай таамаг → must HAVE gone."},
      {q:"Лавгүй:", parts:["He ", " passed — he never studied!"], opts:["can't have","mustn't have"], a:0, fix:"«боломжгүй» → can't have."},
      {q:"Харамсал:", parts:["I ", " given up — I regret it now."], opts:["shouldn't have","needn't have"], a:0, fix:"Буруу хийсэн харамсал → shouldn't have."},
      {q:"Шаардлагагүй байсан:", parts:["You ", " worried — it all worked out."], opts:["needn't have","mustn't have"], a:0, fix:"«хэрэггүй байсан» → needn't have."}
    ],
    speak:{ scene:'Мөрөөдлөө хамгаалах', turns:[
      {ruby:"Your friend gave up on her dream. What happened?", pron:"ёр фрэнд гэйв ап он хөр дрийм. вот хэпэнд?", mn:"Найз чинь мөрөөдлөө орхисон. Юу болсон бэ?",
        choices:[{t:"She must have lost her confidence — she shouldn't have listened to the doubters.",best:true,mn:"Тэр өөртөө итгэх итгэлээ алдсан байх — эргэлзэгчдийг сонсох ёсгүй байсан."},{t:"She must lost her confidence — she shouldn't listened to them.",best:false,fix:"must HAVE lost; shouldn't HAVE listened."}]},
      {ruby:"Do you think she could still succeed?", pron:"ду ю синк ши күд стил сэксийд?", mn:"Тэр одоо ч гэсэн амжих боломжтой гэж бодож байна уу?",
        choices:[{t:"Absolutely. With her talent, she's bound to make it if she tries again.",best:true,mn:"Мэдээж. Авьяастай учир дахин оролдвол амжих нь гарцаагүй."},{t:"Absolutely. With her talent, she must make it.",best:false,fix:"«гарцаагүй» → she's BOUND TO make it."}]},
      {ruby:"What would you say to her?", pron:"вот вүд ю сэй ту хөр?", mn:"Та түүнд юу гэж хэлэх вэ?",
        choices:[{t:"You needn't have doubted yourself. You've always been capable of great things.",best:true,mn:"Чи өөрийгөө эргэлзэх хэрэггүй байсан. Чи үргэлж агуу зүйл хийх чадвартай байсан."},{t:"You didn't need doubt yourself. You always capable of great things.",best:false,fix:"You NEEDN'T HAVE DOUBTED; you've always BEEN capable."}]}
    ]}
  },
  {
    id:'b2m10l3', title:"10.3 Нөхцөл", level:"B2 · М10",
    blurb:"Had I known, I'd have chased it — all conditionals, mixed & inverted ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Нөхцөлт өгүүлбэрийн бүрэн систем",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Нөхцөлийн БҮХ төрөл — тэг, эхний, хоёр дахь, гурав дахь, <b>холимог</b> ба <b>урвуу</b>.<br><br>
        <b>Дөрвөн үндсэн төрөл:</b>
        <div style="margin:12px 0"><span class="tag">0: If you heat ice, it melts. (баримт)</span><span class="tag">1: If I save enough, I'll travel. (бодит ирээдүй)</span><span class="tag">2: If I had wings, I'd fly. (одоогийн төсөөлөл)</span><span class="tag">3: If I had known, I'd have acted. (өнгөрсний төсөөлөл)</span></div>
        <b>Холимог нөхцөл (2 цаг холилдоно):</b>
        <div style="margin:12px 0"><span class="tag">If I HAD studied medicine, I'D BE a doctor now. (өнгөрсөн→одоо)</span><span class="tag">If I WEREN'T so shy, I'D HAVE spoken up then. (одоо→өнгөрсөн)</span></div>
        <b>Урвуу нөхцөл (if-гүй, албан ёсны):</b>
        <div style="margin:12px 0"><span class="tag">HAD I known, I would have helped. (= If I had known)</span><span class="tag">WERE I you, I'd take the chance. (= If I were you)</span><span class="tag">SHOULD you need help, call me. (= If you should need)</span></div>
        <b>Бусад холбоос:</b>
        <div style="margin:12px 0"><span class="tag">unless (= if not) · provided that · as long as · otherwise · but for your help</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        opportunity /ˌɑːpərˈtuːnəti/ — боломж · circumstance /ˈsɜːrkəmstæns/ — нөхцөл байдал · outcome /ˈaʊtkʌm/ — үр дүн<br>
        alternative /ɔːlˈtɜːrnətɪv/ — өөр хувилбар · consequence /ˈkɑːnsəkwens/ — үр дагавар · scenario /səˈnærioʊ/ — тохиолдол<br>
        hypothetical /ˌhaɪpəˈθetɪkl/ — таамаг · regret /rɪˈɡret/ — харамсал · fate /feɪt/ — хувь тавилан<br>
        seize /siːz/ — атгах (боломж) · risk /rɪsk/ — эрсдэл · hesitate /ˈhezɪteɪt/ — эргэлзэх<br>
        counterfactual /ˌkaʊntərˈfæktʃuəl/ — бодит бусын · leap /liːp/ — үсрэлт · pivotal /ˈpɪvətl/ — эргэлтийн</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «If I would have known» ✗ → <b>If I HAD known</b> ✓ (if талд would ✗). «Had I knew» ✗ → <b>Had I KNOWN</b> ✓. «Unless you don't hurry» ✗ → <b>Unless you hurry</b> ✓ (unless дотор аль хэдийн үгүйсгэл).</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Урвуу = <b>«Had / Were / Should»-ийг өгүүлбэрийн эхэнд гарга, if-ийг ав</b>. Холимог = «нөхцөл нэг цагт, үр дүн өөр цагт».</p>`
    },
    phrases:[
      {en:"Had I known how much I'd love this, I would have started years ago.", pron:"хэд ай ноун хау мач айд лав зис, ай вүд хэв стартид йирз эгоу.", mn:"Үүнд ийм их дурлана гэж мэдсэн бол олон жилийн өмнө эхлэх байсан."},
      {en:"If I weren't so afraid of failing, I'd have taken the leap already.", pron:"иф ай вөрнт соу эфрэйд ов фэйлинг, айд хэв тэйкн зэ лийп олрэди.", mn:"Бүтэлгүйтэхээс ийм их айдаггүй бол би аль хэдийн үсрэлт хийчихсэн байх байсан."},
      {en:"Were I in your position, I'd seize this opportunity.", pron:"вөр ай ин ёр позишн, айд сийз зис опөтюнити.", mn:"Би таны байранд байсан бол энэ боломжийг атгах байсан."},
      {en:"Should you ever doubt yourself, remember how far you've come.", pron:"шүд ю эвэр даут ёрсэлф, римэмбэр хау фар юв кам.", mn:"Хэрэв та өөрийгөө эргэлзвэл хэр хол ирснээ санаарай."},
      {en:"But for that one decision, my whole life would be different.", pron:"бат фор зэт ван дисижн, май хоул лайф вүд би дифрэнт.", mn:"Тэр нэг шийдвэр байгаагүй бол миний бүх амьдрал өөр байх байсан."}
    ],
    exercises:[
      {q:"Урвуу (3-р нөхцөл):", parts:["", " I known, I'd have helped."], opts:["Had","If had"], a:0, fix:"Урвуу → Had I known (if-гүй)."},
      {q:"Холимог (өнгөрсөн→одоо):", parts:["If I'd studied law, I ", " a lawyer now."], opts:["'d be","'d have been"], a:0, fix:"Одоогийн үр дүн → I'D BE now."},
      {q:"unless:", parts:["You won't grow ", " you leave your comfort zone."], opts:["unless","if"], a:0, fix:"«үгүй бол» → unless (= if not)."},
      {q:"if талд would ✗:", parts:["If I ", " known, I would have called."], opts:["had","would have"], a:0, fix:"if талд would хэрэглэхгүй → had."}
    ],
    speak:{ scene:'Амьдралын эргэлтийн цэгүүд', turns:[
      {ruby:"Do you have any regrets about your choices?", pron:"ду ю хэв эни ригрэтс эбаут ёр чойсиз?", mn:"Сонголтуудынхаа талаар харамсдаг уу?",
        choices:[{t:"A few. Had I been braver, I would have moved abroad sooner.",best:true,mn:"Хэдэн ширхэг. Илүү зоригтой байсан бол би эрт гадаадад нүүх байсан."},{t:"A few. If I would have been braver, I moved abroad sooner.",best:false,fix:"HAD I been braver, I WOULD HAVE MOVED (if талд would ✗)."}]},
      {ruby:"But your life is good now, isn't it?", pron:"бат ёр лайф из гүд нау, изнт ит?", mn:"Гэхдээ одоо амьдрал чинь сайхан биз дээ?",
        choices:[{t:"It is. If I hadn't taken that risk, I wouldn't be this happy today.",best:true,mn:"Тийм ээ. Тэр эрсдэлийг хийгээгүй бол би өнөөдөр ийм жаргалтай байхгүй байсан."},{t:"It is. If I didn't take that risk, I am not this happy today.",best:false,fix:"Холимог → If I HADN'T TAKEN..., I WOULDN'T BE happy today."}]},
      {ruby:"What advice would you give a hesitant person?", pron:"вот эдвайс вүд ю гив э хезитэнт пөрсн?", mn:"Эргэлздэг хүнд ямар зөвлөгөө өгөх вэ?",
        choices:[{t:"Were I you, I'd seize the chance. Should you fail, you'll still have learned.",best:true,mn:"Би чиний оронд байсан бол боломжийг атгана. Бүтэлгүйтсэн ч сургамж авна."},{t:"If I am you, I seize the chance. If you fail, you still learned.",best:false,fix:"WERE I you, I'D seize; SHOULD you fail, you'll HAVE LEARNED."}]}
    ]}
  },
  {
    id:'b2m10l4', title:"10.4 Идэвхгүй ба дам", level:"B2 · М10",
    blurb:"It is said that dreams shape us — all passives & reported speech ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Идэвхгүй хэв ба дам яриа",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Идэвхгүй хэвийн БҮХ цаг, <b>идэвхгүй дам мэдээлэл</b> ба дам ярианы үйл үгс.<br><br>
        <b>Идэвхгүй хэв бүх цагт:</b>
        <div style="margin:12px 0"><span class="tag">The plan is being finalised. (одоо үргэлжлэх)</span><span class="tag">It has been approved. (төгс)</span><span class="tag">It will have been completed by June.</span><span class="tag">It should have been done sooner. (modal passive)</span></div>
        <b>Идэвхгүй дам мэдээлэл (2 хэлбэр):</b>
        <div style="margin:12px 0"><span class="tag">It is said that she is a genius. (эхлэл: It + passive)</span><span class="tag">She is said to be a genius. (subject + passive + to inf.)</span><span class="tag">He is believed to have left. (өнгөрсөн → to have + V3)</span></div>
        <b>Дам яриа (цаг ухрах, төлөөний үг):</b>
        <div style="margin:12px 0"><span class="tag">"I'll win." → She said she WOULD win.</span><span class="tag">"I'm tired." → He said he WAS tired.</span></div>
        <b>Дам ярианы үйл үгс (баялаг):</b>
        <div style="margin:12px 0"><span class="tag">She admitted MAKING a mistake.</span><span class="tag">He offered TO help.</span><span class="tag">They warned me NOT to give up.</span><span class="tag">She insisted ON paying.</span><span class="tag">He accused me OF lying.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        recognition /ˌrekəɡˈnɪʃn/ — хүлээн зөвшөөрөл · reputation /ˌrepjuˈteɪʃn/ — нэр хүнд · acclaim /əˈkleɪm/ — магтаал<br>
        rumour /ˈruːmər/ — цуу яриа · claim /kleɪm/ — нотлолт · statement /ˈsteɪtmənt/ — мэдэгдэл<br>
        pledge /pledʒ/ — тангараг · declare /dɪˈkler/ — тунхаглах · acknowledge /əkˈnɑːlɪdʒ/ — хүлээн зөвшөөрөх<br>
        endorse /ɪnˈdɔːrs/ — дэмжих · reveal /rɪˈviːl/ — илчлэх · attribute /əˈtrɪbjuːt/ — тооцох (учир)<br>
        aspire /əˈspaɪər/ — эрмэлзэх · fulfil /fʊlˈfɪl/ — биелүүлэх · renowned /rɪˈnaʊnd/ — алдартай</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «She is said that she is clever» ✗ → <b>She is said TO BE clever</b> эсвэл <b>IT is said that she is clever</b> ✓. «He said me» ✗ → <b>He TOLD me / said TO me</b> ✓. «admitted to make» ✗ → <b>admitted MAKING</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Идэвхгүй дам = хоёр загвар: <b>«It is said THAT...»</b> эсвэл <b>«Subject is said TO...»</b>. Өнгөрсөн бол «to HAVE + V3».</p>`
    },
    phrases:[
      {en:"She is said to have inspired an entire generation.", pron:"ши из сэд ту хэв инспайрд эн интайр жэнэрэйшн.", mn:"Тэрээр бүхэл бүтэн үеийг урамшуулсан гэдэг."},
      {en:"It is widely believed that dreams shape who we become.", pron:"ит из вайдли биливд зэт дриймз шэйп ху ви бикам.", mn:"Мөрөөдөл бидний хэн болохыг тодорхойлдог гэж өргөнөөр үздэг."},
      {en:"The award will have been presented by the time we arrive.", pron:"зи эворд вил хэв бийн призэнтид бай зэ тайм ви эрайв.", mn:"Бид ирэх үед шагналыг гардуулж дууссан байна."},
      {en:"He admitted doubting himself, but he never gave up.", pron:"хи эдмиттид даутинг химсэлф, бат хи нэвэр гэйв ап.", mn:"Тэр өөртөө эргэлздэг байснаа хүлээсэн ч хэзээ ч бууж өгөөгүй."},
      {en:"They warned me not to let others define my success.", pron:"зэй ворнд ми нот ту лэт азэрз дифайн май сэксэс.", mn:"Тэд бусдыг миний амжилтыг тодорхойлохыг бүү зөвшөөр гэж сэрэмжлүүлсэн."}
    ],
    exercises:[
      {q:"Subject passive report:", parts:["She ", " to be a genius."], opts:["is said","is said that"], a:0, fix:"Subject + is said + TO be."},
      {q:"Өнгөрсний дам passive:", parts:["He is believed ", " left already."], opts:["to have","to"], a:0, fix:"Өнгөрсөн → to HAVE left."},
      {q:"tell vs say:", parts:["She ", " me she'd win."], opts:["told","said"], a:0, fix:"объекттой → TOLD me."},
      {q:"Дам ярианы үйл:", parts:["He admitted ", " a mistake."], opts:["making","to make"], a:0, fix:"admit + -ing → making."}
    ],
    speak:{ scene:'Алдартай мөрөөдөгчийн тухай', turns:[
      {ruby:"Tell me about someone you admire.", pron:"тэл ми эбаут самван ю эдмайр.", mn:"Биширдэг нэг хүнийхээ тухай хэлээч.",
        choices:[{t:"There's a scientist who is said to have changed the way we see the universe.",best:true,mn:"Орчлонг харах өнцгийг маань өөрчилсөн гэдэг нэг эрдэмтэн бий."},{t:"There's a scientist who is said that changed the universe.",best:false,fix:"is said TO HAVE CHANGED (subject passive report)."}]},
      {ruby:"What is she known for?", pron:"вот из ши ноун фор?", mn:"Тэр юугаараа алдартай вэ?",
        choices:[{t:"It is widely believed that her ideas were decades ahead of her time.",best:true,mn:"Түүний санаанууд цагаасаа хэдэн арван жилээр түрүүлж байсан гэж өргөнөөр үздэг."},{t:"She is widely believed that her ideas were ahead.",best:false,fix:"IT is believed THAT... эсвэл She is believed TO HAVE BEEN ahead."}]},
      {ruby:"Did she ever doubt herself?", pron:"дид ши эвэр даут хөрсэлф?", mn:"Тэр хэзээ нэгэн цагт өөрийгөө эргэлздэг байсан уу?",
        choices:[{t:"She once admitted feeling like a failure, but she refused to give up.",best:true,mn:"Тэр нэг удаа бүтэлгүйтсэн мэт санагддаг байснаа хүлээсэн ч бууж өгөхөөс татгалзсан."},{t:"She once admitted to feel like a failure, but she refused giving up.",best:false,fix:"admitted FEELING; refused TO GIVE UP."}]}
    ]}
  },
  {
    id:'b2m10l5', title:"10.5 Тодотгол ба причасти", level:"B2 · М10",
    blurb:"A dream worth chasing, whatever it costs — relative & participle clauses ⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Тодотгол ба причастийн бүтэц",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Тодотгол өгүүлбэр (defining/non-defining) ба <b>причастийн богиносгол</b>-ыг чөлөөтэй ашиглах.<br><br>
        <b>Хоёр төрлийн тодотгол:</b>
        <div style="margin:12px 0"><span class="tag">The goal THAT I set inspires me. (defining — таслалгүй)</span><span class="tag">My biggest dream, WHICH I've had since childhood, is real. (non-defining — таслалтай)</span></div>
        <b>Угтвар + which/whom (албан ёсны):</b>
        <div style="margin:12px 0"><span class="tag">The mentor TO WHOM I owe everything...</span><span class="tag">The city IN WHICH I grew up...</span></div>
        <b>Причастийн богиносгол (тодотголыг богиносгох):</b>
        <div style="margin:12px 0"><span class="tag">The people WORKING here = who are working (идэвхтэй → -ing)</span><span class="tag">A dream SHARED by millions = which is shared (идэвхгүй → V3)</span></div>
        <b>Причастийн гишүүн өгүүлбэр (нэгэн зэрэг/шалтгаан):</b>
        <div style="margin:12px 0"><span class="tag">FEELING inspired, I began. (= Because I felt)</span><span class="tag">HAVING finished, she rested. (= After she had finished)</span><span class="tag">EXHAUSTED but happy, we celebrated.</span></div>
        <b>whatever / whoever / no matter:</b>
        <div style="margin:12px 0"><span class="tag">Whatever it takes, I'll do it. · Whoever you are, dream big.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        purpose /ˈpɜːrpəs/ — эрхэм зорилго · passion /ˈpæʃn/ — хүсэл тэмүүлэл · calling /ˈkɔːlɪŋ/ — дуудлага<br>
        mentor /ˈmentɔːr/ — зөвлөгч · inspiration /ˌɪnspəˈreɪʃn/ — урам зориг · drive /draɪv/ — тэмүүлэл<br>
        dedication /ˌdedɪˈkeɪʃn/ — үнэнч зүтгэл · devotion /dɪˈvoʊʃn/ — гүн хайр · endeavour /ɪnˈdevər/ — оролдлого<br>
        cherish /ˈtʃerɪʃ/ — эрхэмлэх · nurture /ˈnɜːrtʃər/ — тэтгэн хөгжүүлэх · embody /ɪmˈbɑːdi/ — тодотгон илэрхийлэх<br>
        wholehearted /ˌhoʊlˈhɑːrtɪd/ — бүх сэтгэлээр · relentless /rɪˈlentləs/ — уйгагүй · profound /prəˈfaʊnd/ — гүн гүнзгий</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «My dream, that I've had for years,» ✗ → non-defining талд <b>which/who</b> (that ✗). «The people who working» ✗ → <b>who ARE working</b> эсвэл <b>working</b> ✓. «Having finished the work, the tea was nice» ✗ (subject таарахгүй) → <b>Having finished, I enjoyed the tea</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Причасти: идэвхтэй → <b>-ing</b>, идэвхгүй → <b>V3</b>, аль хэдийн болсон → <b>Having + V3</b>. Гол өгүүлэгдэхүүн ижил байх ёстой!</p>`
    },
    phrases:[
      {en:"A dream worth chasing is one that scares you a little.", pron:"э дрийм вөрс чэйсинг из ван зэт скэйрз ю э литл.", mn:"Хөөх нь зохих мөрөөдөл гэдэг чамайг бага зэрэг айлгадаг мөрөөдөл юм."},
      {en:"Having overcome so much, she felt ready for anything.", pron:"хэвинг оувэкам соу мач, ши фэлт рэди фор энисинг.", mn:"Ийм олон зүйлийг даван туулсны дараа тэр юунд ч бэлэн боллоо."},
      {en:"The mentor to whom I owe everything believed in me first.", pron:"зэ мэнтор ту хум ай оу эврисинг биливд ин ми фөрст.", mn:"Бүх зүйлээрээ өртэй зөвлөгч маань намайг анх итгэсэн хүн."},
      {en:"Driven by a deep sense of purpose, she never looked back.", pron:"дривн бай э дийп сэнс ов пөрпэс, ши нэвэр лүүкт бэк.", mn:"Гүн эрхэм зорилгын мэдрэмжид хөтлөгдөн тэр хэзээ ч эргэж хараагүй."},
      {en:"Whatever it takes, I'll nurture this passion of mine.", pron:"вотэвэр ит тэйкс, айл нөрчэр зис пэшн ов майн.", mn:"Юу ч болсон би энэ хүсэл тэмүүлэлээ тэтгэн хөгжүүлнэ."}
    ],
    exercises:[
      {q:"non-defining:", parts:["My dream, ", " I've had since childhood, is real."], opts:["which","that"], a:0, fix:"Таслалтай non-defining → which (that ✗)."},
      {q:"Причасти (идэвхтэй):", parts:["The people ", " here are volunteers."], opts:["working","worked"], a:0, fix:"Идэвхтэй → working (= who work)."},
      {q:"Причасти (идэвхгүй):", parts:["A dream ", " by millions unites us."], opts:["shared","sharing"], a:0, fix:"Идэвхгүй → shared (= which is shared)."},
      {q:"Having + V3:", parts:["", " finished, she finally rested."], opts:["Having","Have"], a:0, fix:"Аль хэдийн болсон → Having finished."}
    ],
    speak:{ scene:'Дуудлагаа олох нь', turns:[
      {ruby:"How did you find your true calling?", pron:"хау дид ю файнд ёр труу колинг?", mn:"Жинхэнэ дуудлагаа яаж олсон бэ?",
        choices:[{t:"There was a teacher whose passion, which was contagious, changed my whole path.",best:true,mn:"Халдварладаг хүсэл тэмүүлэлтэй нэг багш байсан нь миний бүх замыг өөрчилсөн."},{t:"There was a teacher which passion changed my path.",best:false,fix:"WHOSE passion, WHICH was contagious (эзэмшил → whose)."}]},
      {ruby:"Was it hard to commit to it?", pron:"воз ит хард ту камит ту ит?", mn:"Түүнд өөрийгөө зориулах хэцүү байсан уу?",
        choices:[{t:"Having doubted myself for years, I finally embraced it wholeheartedly.",best:true,mn:"Олон жил өөрийгөө эргэлзсэний эцэст би түүнийг бүх сэтгэлээрээ хүлээн авсан."},{t:"Having doubted myself for years, it was finally embraced.",best:false,fix:"Subject таарах ёстой → Having doubted myself, I embraced it."}]},
      {ruby:"What keeps you going now?", pron:"вот кийпс ю гоуинг нау?", mn:"Одоо чамайг юу тэтгэж байна вэ?",
        choices:[{t:"A purpose worth living for. Whatever obstacles come, I'll keep going.",best:true,mn:"Амьдрах учир бүхий эрхэм зорилго. Ямар ч саад тотгор ирсэн би үргэлжлүүлнэ."},{t:"A purpose worth to live for. Whatever obstacles come, I keep going.",best:false,fix:"worth LIVING for (worth + -ing)."}]}
    ]}
  },
  {
    id:'b2m10l6', title:"10.6 Урвуу дэс ба онцлох", level:"B2 · М10",
    blurb:"Never have I felt so alive — inversion, cleft & fronting for emphasis ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Урвуу дэс дараалал ба онцлолт",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Хүчтэй сэтгэгдэл төрүүлэх <b>урвуу дэс</b>, <b>cleft</b> болон <b>fronting</b> бүтцийг эзэмших.<br><br>
        <b>Үгүйсгэлт үйл үг өгүүлбэрийн эхэнд → урвуу дэс:</b>
        <div style="margin:12px 0"><span class="tag">NEVER HAVE I felt so alive. (= I have never felt)</span><span class="tag">NOT ONLY DID she win, but she also inspired us.</span><span class="tag">NO SOONER HAD I arrived THAN it began.</span><span class="tag">RARELY DO we get such a chance.</span></div>
        <b>«Only» + урвуу дэс:</b>
        <div style="margin:12px 0"><span class="tag">ONLY THEN DID I understand my true purpose.</span><span class="tag">ONLY BY working hard WILL you succeed.</span></div>
        <b>Cleft өгүүлбэр (онцлох хэсгийг тусгаарлах):</b>
        <div style="margin:12px 0"><span class="tag">IT WAS her belief THAT changed everything. (It-cleft)</span><span class="tag">WHAT I really want IS to make a difference. (Wh-cleft)</span><span class="tag">ALL I need IS one chance.</span></div>
        <b>Fronting (гишүүнийг урагшлуулж онцлох):</b>
        <div style="margin:12px 0"><span class="tag">SO determined WAS she that nothing stopped her.</span><span class="tag">Such WAS his passion that we all believed.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        triumph /ˈtraɪʌmf/ — ялалт · milestone /ˈmaɪlstoʊn/ — гол үе шат · pinnacle /ˈpɪnəkl/ — оргил<br>
        courage /ˈkɜːrɪdʒ/ — эр зориг · boldness /ˈboʊldnəs/ — зоримог байдал · determination /dɪˌtɜːrmɪˈneɪʃn/ — шийдэмгий байдал<br>
        remarkable /rɪˈmɑːrkəbl/ — гайхалтай · extraordinary /ɪkˈstrɔːrdəneri/ — онцгой · exceptional /ɪkˈsepʃənl/ — гарамгай<br>
        conquer /ˈkɑːŋkər/ — байлдан дагуулах · surpass /sərˈpæs/ — давах · defy /dɪˈfaɪ/ — эсэргүүцэн давах<br>
        soar /sɔːr/ — дүүлэн нисэх · thrive /θraɪv/ — цэцэглэн хөгжих · exhilarating /ɪɡˈzɪləreɪtɪŋ/ — сэтгэл догдлуулам</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Never I have felt» ✗ → <b>Never HAVE I felt</b> ✓ (туслах үйл өмнө). «No sooner I arrived» ✗ → <b>No sooner HAD I arrived THAN...</b> ✓ (when ✗, than ✓). «What I want is to making» ✗ → <b>is TO MAKE</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Урвуу дэс = <b>«Үгүйсгэлт үг урагшлавал асуулт шиг эргэ»</b> (aux + subject). Cleft = «It was X that...» эсвэл «What... is...».</p>`
    },
    phrases:[
      {en:"Never have I been so proud of how far I've come.", pron:"нэвэр хэв ай бийн соу прауд ов хау фар айв кам.", mn:"Хэр хол ирснээрээ би хэзээ ч ийм бахархаж байгаагүй."},
      {en:"Not only did she reach her goal, but she lifted others too.", pron:"нот оунли дид ши рийч хөр гоул, бат ши лифтид азэрз туу.", mn:"Тэр зорилгодоо хүрсэн ч зогсохгүй бусдыг ч мөн өргөсөн."},
      {en:"It was one small dream that started this whole adventure.", pron:"ит воз ван смол дрийм зэт стартид зис хоул эдвэнчэр.", mn:"Энэ бүх адал явдлыг эхлүүлсэн нь нэг жижиг мөрөөдөл байлаа."},
      {en:"What truly matters is the courage to keep going.", pron:"вот труули мэтэрз из зэ кэридж ту кийп гоуинг.", mn:"Үнэхээр чухал нь үргэлжлүүлэх эр зориг юм."},
      {en:"Only by daring to fail did I finally learn to soar.", pron:"оунли бай дэйринг ту фэйл дид ай файнэли лөрн ту сор.", mn:"Бүтэлгүйтэхээс айлгүй байснаараа л би эцэст нь дүүлэн нисэхийг сурсан."}
    ],
    exercises:[
      {q:"Урвуу дэс:", parts:["Never ", " felt so alive."], opts:["have I","I have"], a:0, fix:"Үгүйсгэл эхэнд → Never HAVE I."},
      {q:"No sooner ... than:", parts:["No sooner had I started ", " everything changed."], opts:["than","when"], a:0, fix:"No sooner ... THAN (when ✗)."},
      {q:"It-cleft:", parts:["It ", " her belief that changed us."], opts:["was","is were"], a:0, fix:"It WAS her belief that..."},
      {q:"Wh-cleft:", parts:["What I want ", " to make a difference."], opts:["is","are"], a:0, fix:"What I want IS to..."}
    ],
    speak:{ scene:'Ялалтаа тэмдэглэх', turns:[
      {ruby:"You finally achieved your dream — how does it feel?", pron:"ю файнэли эчийвд ёр дрийм — хау даз ит фийл?", mn:"Чи эцэст нь мөрөөдлөө биелүүлсэн — ямар мэдрэмж төрж байна?",
        choices:[{t:"Never have I felt so alive! Not only did I reach it, but I grew along the way.",best:true,mn:"Би хэзээ ч ийм амьд мэт санагдаж байгаагүй! Хүрсэн ч зогсохгүй замдаа өссөн."},{t:"Never I have felt so alive! Not only I reached it, but I grew.",best:false,fix:"Never HAVE I; Not only DID I reach (урвуу дэс)."}]},
      {ruby:"What made the biggest difference?", pron:"вот мэйд зэ бигэст дифрэнс?", mn:"Юу нь хамгийн их нөлөөлсөн бэ?",
        choices:[{t:"It was my mentor's belief that gave me the courage to keep going.",best:true,mn:"Намайг үргэлжлүүлэх эр зориг өгсөн нь зөвлөгчийн минь итгэл байлаа."},{t:"Was my mentor's belief gave me courage.",best:false,fix:"IT WAS my mentor's belief THAT gave me courage (It-cleft)."}]},
      {ruby:"What would you tell your younger self?", pron:"вот вүд ю тэл ёр янгэр сэлф?", mn:"Залуу насныхаа өөртөө юу гэж хэлэх вэ?",
        choices:[{t:"Only by daring to try will you ever discover how far you can go.",best:true,mn:"Оролдохоос айлгүй байснаараа л та хэр хол явж чадахаа мэдэх болно."},{t:"Only by daring to try you will discover how far you go.",best:false,fix:"Only by ... WILL YOU discover (урвуу дэс)."}]}
    ]}
  },
  {
    id:'b2m10l7', title:"10.7 Холбоос ба уялдаа", level:"B2 · М10",
    blurb:"Despite the odds, I persevered — connectors, concession & cohesion ⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Холбоос ба текстийн уялдаа",
      html:`<b>🎯 Зорилго:</b> ⭐⭐ Санааг гулгамтгай холбох <b>зөвшөөрөл, шалтгаан-үр дагавар, ярианы тэмдэглэгээ</b>-г эзэмших.<br><br>
        <b>Зөвшөөрөл (гэсэн хэдий ч):</b>
        <div style="margin:12px 0"><span class="tag">DESPITE / IN SPITE OF the risks, I went for it. (+ нэр үг/-ing)</span><span class="tag">ALTHOUGH / EVEN THOUGH it was hard, I stayed. (+ өгүүлбэр)</span><span class="tag">Hard as it was, I didn't quit.</span><span class="tag">I was tired; NEVERTHELESS, I carried on.</span></div>
        <b>Шалтгаан ба үр дагавар:</b>
        <div style="margin:12px 0"><span class="tag">Owing to / Due to her effort, she thrived.</span><span class="tag">She worked hard; CONSEQUENTLY, she succeeded.</span><span class="tag">It was SO inspiring THAT we all joined.</span><span class="tag">SUCH was the impact THAT it spread fast.</span></div>
        <b>Зорилго ба нөхцөл:</b>
        <div style="margin:12px 0"><span class="tag">She trained hard SO AS TO qualify. · ... IN ORDER TO win.</span><span class="tag">Take notes IN CASE you forget. · PROVIDED you try, you'll grow.</span></div>
        <b>Ярианы тэмдэглэгээ (гулгамтгай яриа):</b>
        <div style="margin:12px 0"><span class="tag">On the whole · As a matter of fact · That said · Having said that · In other words · All things considered</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        obstacle /ˈɑːbstəkl/ — саад тотгор · setback /ˈsetbæk/ — бэрхшээл · adversity /ədˈvɜːrsəti/ — зовлон бэрхшээл<br>
        resilience /rɪˈzɪliəns/ — тэсвэр хатуужил · optimism /ˈɑːptɪmɪzəm/ — өөдрөг үзэл · gratitude /ˈɡrætɪtuːd/ — талархал<br>
        overcome /ˌoʊvərˈkʌm/ — даван туулах · endure /ɪnˈdʊr/ — тэвчих · withstand /wɪðˈstænd/ — тэсэн гарах<br>
        flourish /ˈflɜːrɪʃ/ — цэцэглэх · sustain /səˈsteɪn/ — тогтвортой байлгах · persist /pərˈsɪst/ — тууштай байх<br>
        wholesome /ˈhoʊlsəm/ — эрүүл сайхан · fulfilment /fʊlˈfɪlmənt/ — сэтгэл ханамж · momentous /moʊˈmentəs/ — түүхэн ач холбогдолтой</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «Despite of the rain» ✗ → <b>Despite the rain / In spite OF the rain</b> ✓. «Although hard work, I stayed» ✗ → <b>Although IT WAS hard / DESPITE hard work</b> ✓ (although + өгүүлбэр; despite + нэр үг). «Because of she tried» ✗ → <b>Because SHE tried / Because OF her effort</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> <b>Despite + нэр үг/-ing</b>, <b>Although + бүтэн өгүүлбэр</b>. Ижил утга, өөр бүтэц!</p>`
    },
    phrases:[
      {en:"Despite every setback, I refused to abandon my dream.", pron:"диспайт эври сэтбэк, ай рифюзд ту эбэндэн май дрийм.", mn:"Бүхий л бэрхшээлийг үл харгалзан би мөрөөдлөө орхихоос татгалзсан."},
      {en:"It was so hard that most people would have given up; nevertheless, I persisted.", pron:"ит воз соу хард зэт моуст пийпл вүд хэв гивн ап; нэвэзэлэс, ай пөрсистид.", mn:"Ихэнх хүн бууж өгөх байсан тийм хэцүү байсан ч би тууштай байсан."},
      {en:"Owing to sheer resilience, she turned failure into fuel.", pron:"оуинг ту шийр ризилиэнс, ши төрнд фэйлюр инту фюэл.", mn:"Гагцхүү тэсвэр хатуужлынхаа ачаар тэр бүтэлгүйтлийг түлш болгосон."},
      {en:"That said, none of it would have mattered without gratitude.", pron:"зэт сэд, нан ов ит вүд хэв мэтэрд визаут грэтитюд.", mn:"Гэсэн хэдий ч талархалгүйгээр эдгээрийн аль нь ч ач холбогдолгүй байх байсан."},
      {en:"I kept a journal so as to remember how far I'd come.", pron:"ай кэпт э жөрнэл соу эз ту римэмбэр хау фар айд кам.", mn:"Хэр хол ирснээ санахын тулд би тэмдэглэл хөтөлдөг байсан."}
    ],
    exercises:[
      {q:"despite + нэр үг:", parts:["", " the risks, I went for it."], opts:["Despite","Although"], a:0, fix:"Нэр үгийн өмнө → Despite (Although + өгүүлбэр)."},
      {q:"although + өгүүлбэр:", parts:["", " it was hard, I stayed."], opts:["Although","Despite"], a:0, fix:"Бүтэн өгүүлбэр → Although."},
      {q:"so ... that:", parts:["It was so inspiring ", " we all joined."], opts:["that","as"], a:0, fix:"so + тэмдэг + THAT."},
      {q:"in spite OF:", parts:["In spite ", " the odds, she won."], opts:["of","-"], a:0, fix:"in spite OF (of заавал)."}
    ],
    speak:{ scene:'Бэрхшээлийг даван туулах', turns:[
      {ruby:"Your journey wasn't easy, was it?", pron:"ёр жөрни воznt ийзи, воз ит?", mn:"Замнал чинь амар байгаагүй биз дээ?",
        choices:[{t:"Not at all. Despite countless setbacks, I kept moving forward.",best:true,mn:"Огт үгүй. Тоо томшгүй бэрхшээлийг үл харгалзан би урагшилсаар байсан."},{t:"Not at all. Despite of countless setbacks, I kept forward.",best:false,fix:"Despite (of ✗) countless setbacks."}]},
      {ruby:"How did you stay motivated?", pron:"хау дид ю стэй моутивэйтид?", mn:"Яаж урам зоригтой байж чадсан бэ?",
        choices:[{t:"Although the road was long, my gratitude kept me going; consequently, I never quit.",best:true,mn:"Зам урт байсан ч талархал маань намайг тэтгэсэн тул би хэзээ ч больсонгүй."},{t:"Despite the road was long, my gratitude kept me going, so I never quit.",best:false,fix:"ALTHOUGH the road was long (despite + өгүүлбэр ✗)."}]},
      {ruby:"What's your advice for others?", pron:"вотс ёр эдвайс фор азэрз?", mn:"Бусдад ямар зөвлөгөө өгөх вэ?",
        choices:[{t:"All things considered, persist. Hard as it gets, every setback teaches you something.",best:true,mn:"Бүгдийг бодоход тууштай бай. Хичнээн хэцүү ч бэрхшээл бүр чамд юм заана."},{t:"All things considered, persist. As hard it gets, every setback teach you.",best:false,fix:"HARD AS it gets; every setback TEACHES you."}]}
    ]}
  },
  {
    id:'b2m10l8', title:"10.8 Үйлийн загвар", level:"B2 · М10",
    blurb:"I look forward to succeeding — verb patterns & dependent prepositions ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: Үйл үгийн загвар ба хамаарлын угтвар",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ Үйл үгийн дараах <b>gerund/infinitive</b> сонголт, <b>хамаарлын угтвар</b>, verb+object бүтцийг эзэмших.<br><br>
        <b>Gerund vs infinitive (утга өөрчлөгддөг!):</b>
        <div style="margin:12px 0"><span class="tag">I stopped TO rest. (амрахаар зогссон) ≠ I stopped RESTING. (амрахаа больсон)</span><span class="tag">I remember MEETING her. (өнгөрсөн дурсамж) ≠ Remember TO call. (ирээдүйн үүрэг)</span><span class="tag">I regret TELLING you. (харамссан) ≠ I regret TO inform you. (албан ёсны мэдэгдэл)</span></div>
        <b>Загвараар нь:</b>
        <div style="margin:12px 0"><span class="tag">-ing: enjoy, avoid, consider, mind, risk, admit, deny, imagine</span><span class="tag">to: decide, hope, offer, refuse, manage, afford, promise, agree</span><span class="tag">objecttoй: want SB to, expect SB to, allow SB to</span></div>
        <b>Хамаарлын угтвар (тогтсон):</b>
        <div style="margin:12px 0"><span class="tag">look forward TO · succeed IN · insist ON · rely ON · dream OF · believe IN · aim FOR · result IN</span></div>
        <b>Угтвар + gerund (угтварын дараа ЗААВАЛ -ing):</b>
        <div style="margin:12px 0"><span class="tag">I look forward TO SEEING you. (to see ✗)</span><span class="tag">She's good AT SOLVING problems.</span><span class="tag">There's no point IN GIVING up.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        ambition /æmˈbɪʃn/ — амбиц · determination /dɪˌtɜːrmɪˈneɪʃn/ — шийдэмгий байдал · initiative /ɪˈnɪʃətɪv/ — санаачилга<br>
        strive /straɪv/ — чармайх · attempt /əˈtempt/ — оролдох · undertake /ˌʌndərˈteɪk/ — үүрэг хүлээх<br>
        commit to /kəˈmɪt/ — амлах · devote to /dɪˈvoʊt/ — зориулах · engage in /ɪnˈɡeɪdʒ/ — оролцох<br>
        succeed in /səkˈsiːd/ — амжилтад хүрэх · aim for /eɪm/ — зорих · long for /lɔːŋ/ — тэсэн ядах<br>
        yearn /jɜːrn/ — эрмэлзэх · venture /ˈventʃər/ — зориглон оролдох · accomplish /əˈkʌmplɪʃ/ — гүйцэлдүүлэх</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> «I look forward to see you» ✗ → <b>to SEEING you</b> ✓ (to энд угтвар!). «I enjoy to read» ✗ → <b>enjoy READING</b> ✓. «I succeeded to pass» ✗ → <b>succeeded IN passing</b> ✓. «I'm interested to learn» → <b>interested IN learning</b> ✓.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Угтварын дараа <b>ҮРГЭЛЖ -ing</b>. «look forward TO» дахь «to» бол угтвар, инфинитив биш → seeING.</p>`
    },
    phrases:[
      {en:"I look forward to finally accomplishing my biggest dream.", pron:"ай лүүк форвэд ту файнэли экамплишинг май бигэст дрийм.", mn:"Хамгийн том мөрөөдлөө эцэст нь биелүүлэхийг тэсэн ядан хүлээж байна."},
      {en:"She succeeded in turning her passion into a career.", pron:"ши сэксийдид ин төрнинг хөр пэшн инту э кэрийр.", mn:"Тэр хүсэл тэмүүлэлээ мэргэжил болгож чадсан."},
      {en:"I've decided to devote myself to this cause completely.", pron:"айв дисайдид ту дивоут майсэлф ту зис коз кэмплийтли.", mn:"Би энэ зорилгод өөрийгөө бүрэн зориулахаар шийдсэн."},
      {en:"Never stop dreaming, but remember to take action too.", pron:"нэвэр стоп дриминг, бат римэмбэр ту тэйк экшн туу.", mn:"Хэзээ ч мөрөөдөхөө бүү боль, гэхдээ бас арга хэмжээ авахаа санаарай."},
      {en:"There's no point in waiting for the perfect moment.", pron:"зэрз ноу пойнт ин вэйтинг фор зэ пөрфэкт моумэнт.", mn:"Төгс мөчийг хүлээгээд утгагүй."}
    ],
    exercises:[
      {q:"look forward TO + -ing:", parts:["I look forward ", " you soon."], opts:["to seeing","to see"], a:0, fix:"look forward TO + -ing → to seeing."},
      {q:"enjoy + -ing:", parts:["I really enjoy ", " new challenges."], opts:["tackling","to tackle"], a:0, fix:"enjoy + -ing → tackling."},
      {q:"succeed IN:", parts:["She succeeded ", " passing the exam."], opts:["in","to"], a:0, fix:"succeed IN + -ing."},
      {q:"decide + to:", parts:["He decided ", " his dream."], opts:["to pursue","pursuing"], a:0, fix:"decide + TO инфинитив."}
    ],
    speak:{ scene:'Мөрөөдлөө үйлдэл болгох', turns:[
      {ruby:"So what's the plan for next year?", pron:"соу вотс зэ плэн фор нэкст йир?", mn:"Тэгэхээр ирэх жилийн төлөвлөгөө юу вэ?",
        choices:[{t:"I've decided to commit fully to launching my own project.",best:true,mn:"Өөрийн төслөө эхлүүлэхэд бүрэн зориулахаар шийдсэн."},{t:"I've decided committing fully to launch my own project.",best:false,fix:"decided TO COMMIT; commit to LAUNCHING."}]},
      {ruby:"Aren't you afraid of failing?", pron:"арнт ю эфрэйд ов фэйлинг?", mn:"Бүтэлгүйтэхээс айхгүй байна уу?",
        choices:[{t:"A little, but there's no point in dwelling on it. I look forward to trying.",best:true,mn:"Багахан, гэхдээ түүнд гацаад утгагүй. Оролдохыг тэсэн ядан хүлээж байна."},{t:"A little, but there's no point in dwell on it. I look forward to try.",best:false,fix:"no point in DWELLING; look forward to TRYING."}]},
      {ruby:"What keeps you so motivated?", pron:"вот кийпс ю соу моутивэйтид?", mn:"Юу чамайг ийм урамтай байлгадаг вэ?",
        choices:[{t:"I've always dreamed of making a difference, and I refuse to give up now.",best:true,mn:"Би үргэлж өөрчлөлт хийхийг мөрөөддөг байсан, одоо бууж өгөхөөс татгалзаж байна."},{t:"I've always dreamed to make a difference, and I refuse giving up now.",best:false,fix:"dreamed OF MAKING; refuse TO GIVE up."}]}
    ]}
  },
  {
    id:'b2m10l9', title:"10.9 B2 нэгдсэн давталт", level:"B2 · М10",
    blurb:"Had I only known then what I know now — the hardest of all B2 combined ⭐⭐⭐",
    rule:{
      h:"Нэгдсэн давталт: B2-ийн бүх системийн холимог",
      html:`<b>🎯 Зорилго:</b> ⭐⭐⭐ B2-ийн <b>хамгийн хүнд бүтцүүдийг</b> нэг өгүүлбэрт зэрэг ажиллуулж, эзэмшлээ шалгах.<br><br>
        <b>Урвуу нөхцөл + холимог + модаль:</b>
        <div style="margin:12px 0"><span class="tag">HAD I known then what I know now, I WOULDN'T BE hesitating today.</span></div>
        <b>Идэвхгүй дам + төгс инфинитив:</b>
        <div style="margin:12px 0"><span class="tag">She is thought TO HAVE BEEN pursuing this dream in secret for years.</span></div>
        <b>Урвуу дэс + причасти + cleft:</b>
        <div style="margin:12px 0"><span class="tag">NOT ONLY HAD she, HAVING overcome so much, kept going — it was her resilience THAT inspired us all.</span></div>
        <b>Модаль төгс + зөвшөөрөл + аспект:</b>
        <div style="margin:12px 0"><span class="tag">Despite what people say, she MUST HAVE BEEN preparing for this; she COULDN'T HAVE succeeded by luck alone.</span></div>
        <b>Verb pattern + нөхцөл + ирээдүйн төгс:</b>
        <div style="margin:12px 0"><span class="tag">Provided I keep striving, by this time next year I'll HAVE succeeded IN building the life I dream OF.</span></div>
        <p style="margin-top:12px"><b>📚 Үгийн сан (15):</b></p>
        <div style="font-size:14px;line-height:2">
        mastery /ˈmæstəri/ — эзэмшил · fluency /ˈfluːənsi/ — чөлөөт байдал · competence /ˈkɑːmpɪtəns/ — чадвар<br>
        confidence /ˈkɑːnfɪdəns/ — өөртөө итгэх итгэл · progress /ˈprɑːɡres/ — ахиц · achievement /əˈtʃiːvmənt/ — амжилт<br>
        milestone /ˈmaɪlstoʊn/ — гол үе шат · dedication /ˌdedɪˈkeɪʃn/ — зүтгэл · discipline /ˈdɪsəplɪn/ — сахилга бат<br>
        transform /trænsˈfɔːrm/ — өөрчлөх · empower /ɪmˈpaʊər/ — эрх мэдэл олгох · elevate /ˈelɪveɪt/ — өргөх<br>
        aspiration /ˌæspəˈreɪʃn/ — эрмэлзэл · potential /pəˈtenʃl/ — боломж · limitless /ˈlɪmɪtləs/ — хязгааргүй</div>
        <p style="margin-top:12px"><b>⚠️ Түгээмэл алдаа:</b> Хэд хэдэн бүтэц нэг өгүүлбэрт орохоор ямар нэг нь мартагддаг: урвуу дэсний <b>туслах үйл</b>, холимог нөхцөлийн <b>цагийн зөрүү</b>, угтварын дараах <b>-ing</b>, идэвхгүй дамын <b>TO HAVE + V3</b> — эдгээрийг нэг бүрчлэн шалга.</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Хүнд өгүүлбэрийг <b>давхаргаар нь задал</b>: (1) үндсэн цаг/аспект, (2) модаль эсэх, (3) нөхцөл/урвуу, (4) угтвар+үйл. Давхарга бүрийг тусад нь шалга.</p>`
    },
    phrases:[
      {en:"Had I known then what I know now, I'd have started chasing this years ago.", pron:"хэд ай ноун зэн вот ай ноу нау, айд хэв стартид чэйсинг зис йирз эгоу.", mn:"Одоо мэдэж байгаагаа тэр үед мэдсэн бол би үүнийг олон жилийн өмнө хөөж эхлэх байсан."},
      {en:"She's believed to have been quietly working toward this all along.", pron:"шиз биливд ту хэв бийн квайэтли вөркинг тувөрд зис ол элонг.", mn:"Тэр үүний төлөө анхнаасаа чимээгүйхэн зүтгэсэн гэж үздэг."},
      {en:"Not only did she persevere, but it was her courage that changed everything.", pron:"нот оунли дид ши пөрсэвийр, бат ит воз хөр кэридж зэт чэйнжд эврисинг.", mn:"Тэр тэвчсэн ч зогсохгүй, бүх зүйлийг өөрчилсөн нь түүний эр зориг байлаа."},
      {en:"Provided I keep going, by next year I'll have succeeded in transforming my life.", pron:"провайдид ай кийп гоуинг, бай нэкст йир айл хэв сэксийдид ин трансформинг май лайф.", mn:"Үргэлжлүүлбэл ирэх жил гэхэд би амьдралаа өөрчилж чадсан байх болно."},
      {en:"She must have been dreaming of this moment for as long as she can remember.", pron:"ши маст хэв бийн дриминг ов зис моумэнт фор эз лонг эз ши кэн римэмбэр.", mn:"Тэр санаж чадах цагаасаа хойш энэ мөчийг мөрөөдөж байсан байх."}
    ],
    exercises:[
      {q:"Урвуу + холимог:", parts:["Had I known, I ", " hesitating now."], opts:["wouldn't be","wouldn't have been"], a:0, fix:"Одоогийн үр дүн → wouldn't BE now."},
      {q:"Passive report + төгс инф.:", parts:["She is thought ", " been working on it for years."], opts:["to have","to having"], a:0, fix:"өнгөрсөн → to HAVE been."},
      {q:"Урвуу дэс:", parts:["Not only ", " persevere, she inspired us."], opts:["did she","she did"], a:0, fix:"Not only + урвуу дэс → did she."},
      {q:"Модаль төгс үргэлжлэх:", parts:["She must ", " dreaming of this for years."], opts:["have been","been"], a:0, fix:"must HAVE BEEN + -ing."}
    ],
    speak:{ scene:'Мэдлэгээ бүрэн шалгах', turns:[
      {ruby:"Looking at everything, would you change your path?", pron:"лүүкинг эт эврисинг, вүд ю чэйнж ёр пэс?", mn:"Бүхнийг харахад замаа өөрчлөх үү?",
        choices:[{t:"Had I known then what I know now, I might have started sooner — but I wouldn't change a thing.",best:true,mn:"Одоогийнхоо мэдлэгийг тэр үед мэдсэн бол эрт эхлэх байсан ч би юу ч өөрчлөхгүй."},{t:"If I would have known then, I might started sooner, but I don't change a thing.",best:false,fix:"HAD I KNOWN then, I MIGHT HAVE STARTED sooner."}]},
      {ruby:"People say your success came out of nowhere.", pron:"пийпл сэй ёр сэксэс кэйм аут ов ноувэр.", mn:"Хүмүүс чиний амжилт хаанаас ч юм гарч ирсэн гэдэг.",
        choices:[{t:"Hardly. I'm thought to have got lucky, but only by working relentlessly did I get here.",best:true,mn:"Тийм биш. Намайг азтай байсан гэж боддог ч зөвхөн уйгагүй хөдөлмөрлөснөөрөө л би энд ирсэн."},{t:"Hardly. I'm thought to got lucky, but only by working I got here.",best:false,fix:"thought TO HAVE GOT lucky; only by working ... DID I GET here."}]},
      {ruby:"So what does the future hold?", pron:"соу вот даз зэ фьючэр хоулд?", mn:"Тэгэхээр ирээдүй юу авчрах вэ?",
        choices:[{t:"Provided I keep striving, by this time next year I'll have achieved even more.",best:true,mn:"Хичээсээр байвал ирэх жилийн энэ үед би бүр илүү ихийг хийсэн байх болно."},{t:"Provided I keep striving, by next year I achieve even more.",best:false,fix:"by next year I'LL HAVE ACHIEVED (ирээдүйн төгс)."}]}
    ]}
  },
  {
    id:'b2m10l10', title:"10.10 B2 төгсгөлийн шалгалт", level:"B2 · М10",
    blurb:"🏆 B2 төгсгөлийн ярилцлага — a proud graduation & the road to C1 🎓",
    rule:{
      h:"🎓 B2 ТӨГСГӨЛ: Бүх B2 курсийн гол бүтцүүд",
      html:`<b>🎯 Зорилго:</b> 🏆🎓 Баяр хүргэе! Та B2 курсээ дуусгаж байна. Энэ бол <b>төгсөлтийн ярилцлага</b> — B2-д сурсан бүх бүтцээ нэг бахархалтай яриа/эссэд сүлжье.<br><br>
        <b>🎓 B2 курсийн гол бүтцүүд (бүгдийг давт!):</b>
        <div style="margin:12px 0">
        <span class="tag">Perfect aspect: I've been building this for years</span><span class="tag">Narrative tenses: The sun was setting as I had finally arrived</span><span class="tag">Future perfect: By 2030 I'll have qualified</span><span class="tag">Modal deduction: She must have known</span><span class="tag">Past criticism: You should have told me / needn't have worried</span><span class="tag">All conditionals + mixed: If I'd studied, I'd be a doctor now</span><span class="tag">Inverted conditionals: Had I known / Were I you / Should you need</span><span class="tag">Passive (all tenses): It has been approved</span><span class="tag">Passive reporting: She is said to have inspired us</span><span class="tag">Reported speech + reporting verbs: He admitted making a mistake</span><span class="tag">Relative clauses: the mentor to whom I owe everything</span><span class="tag">Participle clauses: Having overcome so much, she thrived</span><span class="tag">Inversion: Never have I felt so alive</span><span class="tag">Cleft sentences: It was her belief that changed me</span><span class="tag">Concession: Despite the odds / Although it was hard</span><span class="tag">Cause & effect: so inspiring that we all joined</span><span class="tag">Verb patterns: I look forward to succeeding</span><span class="tag">Dependent prepositions: succeed in, dream of, insist on</span>
        </div>
        <b>🎤 Загвар эссэ — «Миний B2 замнал» (олон бүтэц сүлжсэн):</b>
        <div style="margin:12px 0"><i>When I first started learning English, I could barely introduce myself. Little did I know how far this journey would take me. Had someone told me back then that I'd be having a whole conversation in English, I wouldn't have believed them. It has not been easy. There were nights when, having studied for hours, I still felt lost. I must have wanted to quit a hundred times. But despite every setback, I kept going. What kept me motivated was a simple dream: to open doors that had always seemed closed. Now, looking back, I realise that every mistake was teaching me something. Not only have I learned a language — I've learned that I'm capable of far more than I once believed. By this time next year, I'll have started using English at work. And this is only the beginning.</i></div>
        <b>🚀 C1-рүү чиглэсэн урам зориг:</b>
        <div style="margin:12px 0"><i>B2 бол таны эрх чөлөөний гэрчилгээ — та одоо санаагаа нарийвчлан, өнгө аясаа эзэмшин илэрхийлж чадна. C1-д таныг илүү нарийн ялгаа, өвөрмөц хэлц, ур чадвартай илэрхийлэл хүлээж байна. Хэл сурах нь хэзээ ч дуусдаггүй аялал — гэхдээ хамгийн хэцүү өгсүүрийг та даван гарлаа. Бахархаарай. 🎓 Дараагийн үсрэлт хийхэд бэлэн үү?</i></div>
        <p style="margin-top:12px"><b>🏆 Даалгавар:</b> Дээрх эссэ шиг өөрийн B2 замналаа 15+ өгүүлбэрээр бич — дор хаяж 6 өөр бүтэц (нөхцөл, урвуу дэс, модаль төгс, идэвхгүй, причасти, cleft) ашигла. Дараа нь Ruby-д уншуулж засуулаарай!</p>
        <p style="margin-top:8px"><b>🧠 Санах арга:</b> Агуу илтгэгч бүтэц бүрийг <b>санаагаа онцлоход</b> ашигладаг: урвуу дэс — драм, cleft — анхаарал, модаль төгс — таамаг, нөхцөл — төсөөлөл. Дүрэм бол таны <b>дуу хоолой</b>. Одоо C1 рүү! 🚀</p>`
    },
    phrases:[
      {en:"Little did I know how far this journey would take me.", pron:"литл дид ай ноу хау фар зис жөрни вүд тэйк ми.", mn:"Энэ аялал намайг хэр хол авч явахыг би огт мэдээгүй."},
      {en:"Not only have I learned a language — I've learned to believe in myself.", pron:"нот оунли хэв ай лөрнд э лэнгвиж — айв лөрнд ту билийв ин майсэлф.", mn:"Би зөвхөн хэл сураад зогсоогүй — өөртөө итгэхийг сурсан."},
      {en:"Despite every setback, I kept going, and it changed my life.", pron:"диспайт эври сэтбэк, ай кэпт гоуинг, энд ит чэйнжд май лайф.", mn:"Бүхий л бэрхшээлийг үл харгалзан би үргэлжлүүлсэн нь амьдралыг маань өөрчилсөн."},
      {en:"By this time next year, I'll have started a whole new chapter.", pron:"бай зис тайм нэкст йир, айл хэв стартид э хоул ню чэптэр.", mn:"Ирэх жилийн энэ үед би огт шинэ бүлгийг эхлүүлсэн байх болно."},
      {en:"This isn't the end — it's the beginning of the road to C1.", pron:"зис изнт зи энд — итс зэ бигининг ов зэ роуд ту сий ван.", mn:"Энэ бол төгсгөл биш — C1 рүү тэмүүлэх замын эхлэл юм."}
    ],
    exercises:[
      {q:"Урвуу дэс (Little):", parts:["Little ", " I know how hard it would be."], opts:["did","do"], a:0, fix:"Урвуу дэс + өнгөрсөн → did I know."},
      {q:"Not only + урвуу:", parts:["Not only ", " I learned a language, but I grew."], opts:["have","did"], a:0, fix:"Present perfect → HAVE I learned."},
      {q:"Урвуу нөхцөл:", parts:["", " I known, I'd have started sooner."], opts:["Had","If had"], a:0, fix:"Урвуу → Had I known (if-гүй)."},
      {q:"Ирээдүйн төгс:", parts:["By next year, I'll ", " a new chapter."], opts:["have started","start"], a:0, fix:"by + ирээдүй → will HAVE started."}
    ],
    speak:{ scene:'🎓 B2 төгсгөлийн ярилцлага', turns:[
      {ruby:"Congratulations on finishing B2! How does it feel?", pron:"кэнгрэтюлэйшнз он финишинг би туу! хау даз ит фийл?", mn:"B2 төгсөж байгаад баяр хүргэе! Ямар мэдрэмж төрж байна?",
        choices:[{t:"Never have I been so proud. Little did I know how much I'd grow when I started.",best:true,mn:"Би хэзээ ч ийм бахархаж байгаагүй. Эхлэхдээ хэр их өснө гэдгээ огт мэдээгүй."},{t:"Never I have been so proud. Little I knew how much I'd grow.",best:false,fix:"Never HAVE I been; Little DID I know (урвуу дэс)."}]},
      {ruby:"What was the hardest part of the journey?", pron:"вот воз зэ хардэст парт ов зэ жөрни?", mn:"Замналын хамгийн хэцүү хэсэг нь юу байсан бэ?",
        choices:[{t:"Despite countless setbacks, I kept going. Had I given up, I wouldn't be here now.",best:true,mn:"Тоо томшгүй бэрхшээлийг үл харгалзан би үргэлжлүүлсэн. Бууж өгсөн бол би одоо энд байхгүй байсан."},{t:"Despite of countless setbacks, I kept going. If I would give up, I am not here now.",best:false,fix:"Despite (of ✗); HAD I GIVEN UP, I WOULDN'T BE here now."}]},
      {ruby:"And what comes next, now that you've reached C1's doorstep?", pron:"энд вот камз нэкст, нау зэт юв рийчт сий ванз дорстэп?", mn:"C1-ийн босгонд ирсэн одоо дараа нь юу вэ?",
        choices:[{t:"This is only the beginning. By this time next year, I'll have started mastering C1.",best:true,mn:"Энэ бол зөвхөн эхлэл. Ирэх жилийн энэ үед би C1-ийг эзэмшиж эхэлсэн байх болно."},{t:"This is only the beginning. By next year, I master C1.",best:false,fix:"I'LL HAVE STARTED mastering (ирээдүйн төгс)."}]}
    ]}
  },
];

LEVEL_INFO.b2 = { name:'B2 бүтэн курс 🎓', sub:'100 хичээл бүрэн ✓ — Модуль 1-10' };

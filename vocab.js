// ============================================================
//  AURA — ҮГИЙН ӨГӨГДӨЛ (vocab.js)
//  Агуулга: VOCAB (үгийн багцууд) · ALPHA (цагаан толгой) · EXTRA_DICT (толь бичиг)
//  ⚠️ Энэ файлыг index.html-ийн ӨМНӨ ачаална.
// ============================================================

const VOCAB = [
  {
    id:'greetings', title:"Мэндчилгээ", level:"A1", icon:"👋",
    words:[
      {ic:"👋", en:"Hello", pron:"хэлоу", mn:"Сайн уу", ex:{en:"Hello, how are you?", pron:"хэлоу, хау а ю?", mn:"Сайн уу, юу байна?"}},
      {ic:"👋", en:"Goodbye", pron:"гүдбай", mn:"Баяртай", ex:{en:"Goodbye, see you tomorrow.", pron:"гүдбай, сий ю тумороу.", mn:"Баяртай, маргааш уулзъя."}},
      {ic:"🙏", en:"Please", pron:"плийз", mn:"Гуйя", ex:{en:"Can I have water, please?", pron:"кэн ай хэв вотэр, плийз?", mn:"Ус авч болох уу?"}},
      {ic:"🙏", en:"Thank you", pron:"сэнк ю", mn:"Баярлалаа", ex:{en:"Thank you very much.", pron:"сэнк ю вэри мач.", mn:"Маш их баярлалаа."}},
      {ic:"😔", en:"Sorry", pron:"сори", mn:"Уучлаарай", ex:{en:"Sorry, I'm late.", pron:"сори, айм лэйт.", mn:"Уучлаарай, хоцорлоо."}},
      {ic:"✅", en:"Yes", pron:"ес", mn:"Тийм", ex:{en:"Yes, I agree.", pron:"ес, ай эгрий.", mn:"Тийм, зөвшөөрч байна."}},
      {ic:"❌", en:"No", pron:"ноу", mn:"Үгүй", ex:{en:"No, thank you.", pron:"ноу, сэнк ю.", mn:"Үгүй, баярлалаа."}},
      {ic:"🙋", en:"Excuse me", pron:"икскюз ми", mn:"Өршөөгөөрэй", ex:{en:"Excuse me, where is the bank?", pron:"икскюз ми, вэр из зэ бэнк?", mn:"Өршөөгөөрэй, банк хаана байдаг вэ?"}}
    ]
  },
  {
    id:'family', title:"Гэр бүл", level:"A1", icon:"👨‍👩‍👧",
    words:[
      {ic:"👩", en:"Mother", pron:"мазэр", mn:"Ээж", ex:{en:"My mother is a teacher.", pron:"май мазэр из э тийчэр.", mn:"Миний ээж багш."}},
      {ic:"👨", en:"Father", pron:"фазэр", mn:"Аав", ex:{en:"My father works hard.", pron:"май фазэр вөркс хард.", mn:"Аав минь шаргуу ажилладаг."}},
      {ic:"👦", en:"Brother", pron:"бразэр", mn:"Ах / дүү (эр)", ex:{en:"I have one brother.", pron:"ай хэв ван бразэр.", mn:"Надад нэг ах бий."}},
      {ic:"👧", en:"Sister", pron:"систэр", mn:"Эгч / дүү (эм)", ex:{en:"My sister is younger.", pron:"май систэр из янгэр.", mn:"Миний дүү надаас бага."}},
      {ic:"👦", en:"Son", pron:"сан", mn:"Хүү", ex:{en:"They have a son.", pron:"зэй хэв э сан.", mn:"Тэд хүүтэй."}},
      {ic:"👧", en:"Daughter", pron:"дотэр", mn:"Охин", ex:{en:"Her daughter is five.", pron:"хёр дотэр из файв.", mn:"Түүний охин таван настай."}},
      {ic:"👵", en:"Grandmother", pron:"грэндмазэр", mn:"Эмээ", ex:{en:"My grandmother cooks well.", pron:"май грэндмазэр кукс вэл.", mn:"Эмээ маань сайхан хоол хийдэг."}},
      {ic:"👨‍👩‍👧", en:"Family", pron:"фэмили", mn:"Гэр бүл", ex:{en:"I love my family.", pron:"ай лав май фэмили.", mn:"Би гэр бүлдээ хайртай."}}
    ]
  },
  {
    id:'food', title:"Хоол хүнс", level:"A1", icon:"🍎",
    words:[
      {ic:"💧", en:"Water", pron:"вотэр", mn:"Ус", ex:{en:"I drink water every day.", pron:"ай дринк вотэр эври дэй.", mn:"Би өдөр бүр ус уудаг."}},
      {ic:"🍞", en:"Bread", pron:"брэд", mn:"Талх", ex:{en:"I eat bread for breakfast.", pron:"ай ийт брэд фор брэкфаст.", mn:"Би өглөө талх иддэг."}},
      {ic:"🍎", en:"Apple", pron:"эппл", mn:"Алим", ex:{en:"This apple is sweet.", pron:"зис эппл из свийт.", mn:"Энэ алим чихэрлэг."}},
      {ic:"🍚", en:"Rice", pron:"райс", mn:"Будаа", ex:{en:"We eat rice with meat.", pron:"ви ийт райс виз мийт.", mn:"Бид махтай будаа иддэг."}},
      {ic:"🍖", en:"Meat", pron:"мийт", mn:"Мах", ex:{en:"I don't eat meat.", pron:"ай доунт ийт мийт.", mn:"Би мах иддэггүй."}},
      {ic:"🥛", en:"Milk", pron:"милк", mn:"Сүү", ex:{en:"Milk is good for you.", pron:"милк из гүд фор ю.", mn:"Сүү бие махбодод сайн."}},
      {ic:"☕", en:"Tea", pron:"тий", mn:"Цай", ex:{en:"Would you like some tea?", pron:"вүд ю лайк сам тий?", mn:"Цай уух уу?"}},
      {ic:"🥚", en:"Egg", pron:"эг", mn:"Өндөг", ex:{en:"I want two eggs.", pron:"ай вонт ту эгз.", mn:"Би хоёр өндөг авъя."}}
    ]
  },
  {
    id:'travel', title:"Аялал", level:"A2", icon:"✈️",
    words:[
      {ic:"✈️", en:"Airport", pron:"эйрпорт", mn:"Нисэх онгоцны буудал", ex:{en:"The airport is far.", pron:"зэ эйрпорт из фар.", mn:"Буудал хол байна."}},
      {ic:"🎫", en:"Ticket", pron:"тикэт", mn:"Тасалбар", ex:{en:"I bought a ticket.", pron:"ай бот э тикэт.", mn:"Би тасалбар авсан."}},
      {ic:"🛂", en:"Passport", pron:"паспорт", mn:"Паспорт", ex:{en:"Where is my passport?", pron:"вэр из май паспорт?", mn:"Паспорт минь хаана байна?"}},
      {ic:"🏨", en:"Hotel", pron:"хоутэл", mn:"Зочид буудал", ex:{en:"The hotel is nice.", pron:"зэ хоутэл из найс.", mn:"Зочид буудал гоё."}},
      {ic:"🗺️", en:"Map", pron:"мэп", mn:"Газрын зураг", ex:{en:"I need a map.", pron:"ай нийд э мэп.", mn:"Надад газрын зураг хэрэгтэй."}},
      {ic:"🧳", en:"Luggage", pron:"лагэж", mn:"Ачаа тээш", ex:{en:"My luggage is heavy.", pron:"май лагэж из хэви.", mn:"Ачаа минь хүнд."}},
      {ic:"🚆", en:"Train", pron:"трэйн", mn:"Галт тэрэг", ex:{en:"The train is late.", pron:"зэ трэйн из лэйт.", mn:"Галт тэрэг хоцорч байна."}},
      {ic:"🚕", en:"Taxi", pron:"тэкси", mn:"Такси", ex:{en:"Let's take a taxi.", pron:"летс тэйк э тэкси.", mn:"Такси барьцгаая."}}
    ]
  },
  {
    id:'weather', title:"Цаг агаар", level:"A2", icon:"☀️",
    words:[
      {ic:"☀️", en:"Sunny", pron:"сани", mn:"Нартай", ex:{en:"It's sunny today.", pron:"итс сани тудэй.", mn:"Өнөөдөр нартай."}},
      {ic:"🌧️", en:"Rain", pron:"рэйн", mn:"Бороо", ex:{en:"I don't like rain.", pron:"ай доунт лайк рэйн.", mn:"Би бороонд дургүй."}},
      {ic:"❄️", en:"Snow", pron:"сноу", mn:"Цас", ex:{en:"Snow is beautiful.", pron:"сноу из бьютифул.", mn:"Цас үзэсгэлэнтэй."}},
      {ic:"🥶", en:"Cold", pron:"коулд", mn:"Хүйтэн", ex:{en:"It's very cold.", pron:"итс вэри коулд.", mn:"Их хүйтэн байна."}},
      {ic:"🥵", en:"Hot", pron:"хот", mn:"Халуун", ex:{en:"Summer is hot.", pron:"саммэр из хот.", mn:"Зун халуун."}},
      {ic:"💨", en:"Wind", pron:"винд", mn:"Салхи", ex:{en:"The wind is strong.", pron:"зэ винд из стронг.", mn:"Салхи хүчтэй."}},
      {ic:"☁️", en:"Cloudy", pron:"клауди", mn:"Үүлтэй", ex:{en:"The sky is cloudy.", pron:"зэ скай из клауди.", mn:"Тэнгэр үүлтэй."}},
      {ic:"🌤️", en:"Warm", pron:"ворм", mn:"Дулаан", ex:{en:"Spring is warm.", pron:"спринг из ворм.", mn:"Хавар дулаан."}}
    ]
  },
  {
    id:'feelings', title:"Мэдрэмж", level:"B1", icon:"😊",
    words:[
      {ic:"😊", en:"Happy", pron:"хэпи", mn:"Аз жаргалтай", ex:{en:"I feel happy today.", pron:"ай фийл хэпи тудэй.", mn:"Өнөөдөр баяртай байна."}},
      {ic:"😢", en:"Sad", pron:"сэд", mn:"Гунигтай", ex:{en:"She looks sad.", pron:"ши лүкс сэд.", mn:"Тэр гунигтай харагдаж байна."}},
      {ic:"😴", en:"Tired", pron:"тайрд", mn:"Ядарсан", ex:{en:"I'm very tired.", pron:"айм вэри тайрд.", mn:"Би их ядарсан."}},
      {ic:"🤩", en:"Excited", pron:"иксайтид", mn:"Догдолсон", ex:{en:"I'm excited about the trip.", pron:"айм иксайтид эбаут зэ трип.", mn:"Аялалдаа догдолж байна."}},
      {ic:"😠", en:"Angry", pron:"энгри", mn:"Уурласан", ex:{en:"Don't be angry.", pron:"доунт би энгри.", mn:"Бүү уурла."}},
      {ic:"😨", en:"Scared", pron:"скэрд", mn:"Айсан", ex:{en:"I'm scared of dogs.", pron:"айм скэрд оф догз.", mn:"Би нохойноос айдаг."}},
      {ic:"😑", en:"Bored", pron:"борд", mn:"Уйдсан", ex:{en:"I'm bored at home.", pron:"айм борд эт хоум.", mn:"Гэртээ уйдаж байна."}},
      {ic:"😌", en:"Proud", pron:"прауд", mn:"Бахархсан", ex:{en:"I'm proud of you.", pron:"айм прауд оф ю.", mn:"Би чамаараа бахархаж байна."}}
    ]
  },
  {
    id:'numbers', title:"Тоо", level:"A1", icon:"🔢",
    words:[
      {ic:"1️⃣", en:"One", pron:"ван", mn:"Нэг", ex:{en:"I have one book.", pron:"ай хэв ван бүк.", mn:"Надад нэг ном бий."}},
      {ic:"2️⃣", en:"Two", pron:"ту", mn:"Хоёр", ex:{en:"Two coffees, please.", pron:"ту кофиз, плийз.", mn:"Хоёр кофе, гуйя."}},
      {ic:"3️⃣", en:"Three", pron:"срий", mn:"Гурав", ex:{en:"Three days ago.", pron:"срий дэйз эгоу.", mn:"Гурван хоногийн өмнө."}},
      {ic:"5️⃣", en:"Five", pron:"файв", mn:"Тав", ex:{en:"It's five o'clock.", pron:"итс файв эклок.", mn:"Таван цаг болж байна."}},
      {ic:"🔟", en:"Ten", pron:"тэн", mn:"Арав", ex:{en:"I have ten fingers.", pron:"ай хэв тэн фингэрз.", mn:"Надад арван хуруу бий."}},
      {ic:"💯", en:"Hundred", pron:"хандрэд", mn:"Зуу", ex:{en:"A hundred dollars.", pron:"э хандрэд доларз.", mn:"Зуун доллар."}},
      {ic:"🥇", en:"First", pron:"фөрст", mn:"Нэгдүгээр", ex:{en:"This is my first time.", pron:"зис из май фөрст тайм.", mn:"Энэ миний анхны удаа."}},
      {ic:"🔢", en:"Number", pron:"намбэр", mn:"Тоо / дугаар", ex:{en:"What's your number?", pron:"вотс ёр намбэр?", mn:"Дугаар чинь хэд вэ?"}}
    ]
  },
  {
    id:'colors', title:"Өнгө", level:"A1", icon:"🎨",
    words:[
      {ic:"🔴", en:"Red", pron:"рэд", mn:"Улаан", ex:{en:"I like red apples.", pron:"ай лайк рэд эпплз.", mn:"Би улаан алимд дуртай."}},
      {ic:"🔵", en:"Blue", pron:"блю", mn:"Цэнхэр", ex:{en:"The sky is blue.", pron:"зэ скай из блю.", mn:"Тэнгэр цэнхэр."}},
      {ic:"🟢", en:"Green", pron:"грийн", mn:"Ногоон", ex:{en:"Grass is green.", pron:"грас из грийн.", mn:"Өвс ногоон."}},
      {ic:"🟡", en:"Yellow", pron:"елоу", mn:"Шар", ex:{en:"The sun is yellow.", pron:"зэ сан из елоу.", mn:"Нар шар."}},
      {ic:"⚫", en:"Black", pron:"блэк", mn:"Хар", ex:{en:"I have black hair.", pron:"ай хэв блэк хэйр.", mn:"Би хар үстэй."}},
      {ic:"⚪", en:"White", pron:"вайт", mn:"Цагаан", ex:{en:"Snow is white.", pron:"сноу из вайт.", mn:"Цас цагаан."}},
      {ic:"🌸", en:"Pink", pron:"пинк", mn:"Ягаан", ex:{en:"She likes pink.", pron:"ши лайкс пинк.", mn:"Тэр ягаанд дуртай."}},
      {ic:"🎨", en:"Color", pron:"калэр", mn:"Өнгө", ex:{en:"What's your favorite color?", pron:"вотс ёр фэйворит калэр?", mn:"Дуртай өнгө чинь юу вэ?"}}
    ]
  },
  {
    id:'body', title:"Бие", level:"A1", icon:"🧍",
    words:[
      {ic:"🧠", en:"Head", pron:"хэд", mn:"Толгой", ex:{en:"My head hurts.", pron:"май хэд хөртс.", mn:"Толгой минь өвдөж байна."}},
      {ic:"✋", en:"Hand", pron:"хэнд", mn:"Гар", ex:{en:"Wash your hands.", pron:"вош ёр хэндз.", mn:"Гараа угаа."}},
      {ic:"👁️", en:"Eye", pron:"ай", mn:"Нүд", ex:{en:"She has blue eyes.", pron:"ши хэз блю айз.", mn:"Тэр цэнхэр нүдтэй."}},
      {ic:"🦶", en:"Foot", pron:"фүт", mn:"Хөл (тавхай)", ex:{en:"My foot is cold.", pron:"май фүт из коулд.", mn:"Хөл минь хүйтэн байна."}},
      {ic:"👄", en:"Mouth", pron:"мауз", mn:"Ам", ex:{en:"Open your mouth.", pron:"оупэн ёр мауз.", mn:"Амаа ангай."}},
      {ic:"💇", en:"Hair", pron:"хэйр", mn:"Үс", ex:{en:"Her hair is long.", pron:"хёр хэйр из лонг.", mn:"Түүний үс урт."}},
      {ic:"❤️", en:"Heart", pron:"харт", mn:"Зүрх", ex:{en:"My heart beats fast.", pron:"май харт битс фаст.", mn:"Зүрх минь хурдан цохилж байна."}},
      {ic:"🙂", en:"Face", pron:"фэйс", mn:"Нүүр", ex:{en:"Wash your face.", pron:"вош ёр фэйс.", mn:"Нүүрээ угаа."}}
    ]
  },
  {
    id:'animals', title:"Амьтад", level:"A1", icon:"🐶",
    words:[
      {ic:"🐶", en:"Dog", pron:"дог", mn:"Нохой", ex:{en:"I have a dog.", pron:"ай хэв э дог.", mn:"Надад нохой бий."}},
      {ic:"🐱", en:"Cat", pron:"кэт", mn:"Муур", ex:{en:"The cat is sleeping.", pron:"зэ кэт из слийпинг.", mn:"Муур унтаж байна."}},
      {ic:"🐴", en:"Horse", pron:"хорс", mn:"Морь", ex:{en:"Mongolians love horses.", pron:"монголианз лав хорсиз.", mn:"Монголчууд морь хайрладаг."}},
      {ic:"🐦", en:"Bird", pron:"бөрд", mn:"Шувуу", ex:{en:"The bird is singing.", pron:"зэ бөрд из сингинг.", mn:"Шувуу жиргэж байна."}},
      {ic:"🐟", en:"Fish", pron:"фиш", mn:"Загас", ex:{en:"I eat fish.", pron:"ай ийт фиш.", mn:"Би загас иддэг."}},
      {ic:"🐑", en:"Sheep", pron:"шийп", mn:"Хонь", ex:{en:"We have many sheep.", pron:"ви хэв мэни шийп.", mn:"Бид олон хоньтой."}},
      {ic:"🐮", en:"Cow", pron:"кау", mn:"Үхэр", ex:{en:"The cow gives milk.", pron:"зэ кау гивз милк.", mn:"Үхэр сүү өгдөг."}},
      {ic:"🐾", en:"Animal", pron:"энимал", mn:"Амьтан", ex:{en:"I love animals.", pron:"ай лав энималз.", mn:"Би амьтдад хайртай."}}
    ]
  },
  {
    id:'jobs', title:"Ажил мэргэжил", level:"A2", icon:"💼",
    words:[
      {ic:"👩‍🏫", en:"Teacher", pron:"тийчэр", mn:"Багш", ex:{en:"She is a teacher.", pron:"ши из э тийчэр.", mn:"Тэр багш."}},
      {ic:"👨‍⚕️", en:"Doctor", pron:"доктор", mn:"Эмч", ex:{en:"My father is a doctor.", pron:"май фазэр из э доктор.", mn:"Аав минь эмч."}},
      {ic:"🚗", en:"Driver", pron:"драйвэр", mn:"Жолооч", ex:{en:"He is a taxi driver.", pron:"хи из э тэкси драйвэр.", mn:"Тэр таксины жолооч."}},
      {ic:"👷", en:"Engineer", pron:"энжиниэр", mn:"Инженер", ex:{en:"I want to be an engineer.", pron:"ай вонт ту би эн энжиниэр.", mn:"Би инженер болмоор байна."}},
      {ic:"👨‍🍳", en:"Cook", pron:"күк", mn:"Тогооч", ex:{en:"The cook is busy.", pron:"зэ күк из бизи.", mn:"Тогооч завгүй байна."}},
      {ic:"🧑‍🌾", en:"Farmer", pron:"фармэр", mn:"Тариаланч / малчин", ex:{en:"The farmer works early.", pron:"зэ фармэр вөркс өрли.", mn:"Тариаланч эрт ажилладаг."}},
      {ic:"👩‍⚕️", en:"Nurse", pron:"нөрс", mn:"Сувилагч", ex:{en:"The nurse is kind.", pron:"зэ нөрс из кайнд.", mn:"Сувилагч сайхан сэтгэлтэй."}},
      {ic:"💼", en:"Job", pron:"жоб", mn:"Ажил", ex:{en:"I have a new job.", pron:"ай хэв э ню жоб.", mn:"Надад шинэ ажил бий."}}
    ]
  },
  {
    id:'clothes', title:"Хувцас", level:"A2", icon:"👕",
    words:[
      {ic:"👕", en:"Shirt", pron:"шөрт", mn:"Цамц", ex:{en:"This shirt is nice.", pron:"зис шөрт из найс.", mn:"Энэ цамц гоё."}},
      {ic:"👖", en:"Trousers", pron:"траузэрз", mn:"Өмд", ex:{en:"I need new trousers.", pron:"ай нийд ню траузэрз.", mn:"Надад шинэ өмд хэрэгтэй."}},
      {ic:"👟", en:"Shoes", pron:"шүз", mn:"Гутал", ex:{en:"Your shoes are dirty.", pron:"ёр шүз а дөрти.", mn:"Гутал чинь бохир."}},
      {ic:"👗", en:"Dress", pron:"дрэс", mn:"Даашинз", ex:{en:"She has a red dress.", pron:"ши хэз э рэд дрэс.", mn:"Тэр улаан даашинзтай."}},
      {ic:"🧥", en:"Jacket", pron:"жэкэт", mn:"Хүрэм", ex:{en:"Take your jacket.", pron:"тэйк ёр жэкэт.", mn:"Хүрэмээ ав."}},
      {ic:"🧢", en:"Hat", pron:"хэт", mn:"Малгай", ex:{en:"I like your hat.", pron:"ай лайк ёр хэт.", mn:"Малгай чинь гоё."}},
      {ic:"🧦", en:"Socks", pron:"сокс", mn:"Оймс", ex:{en:"Where are my socks?", pron:"вэр а май сокс?", mn:"Оймс минь хаана байна?"}},
      {ic:"👚", en:"Clothes", pron:"клоуз", mn:"Хувцас", ex:{en:"I buy new clothes.", pron:"ай бай ню клоуз.", mn:"Би шинэ хувцас авдаг."}}
    ]
  },
  {
    id:'places', title:"Хотын газрууд", level:"A2", icon:"🏙️",
    words:[
      {ic:"🏫", en:"School", pron:"скүл", mn:"Сургууль", ex:{en:"The school is big.", pron:"зэ скүл из биг.", mn:"Сургууль том."}},
      {ic:"🏥", en:"Hospital", pron:"хоспитал", mn:"Эмнэлэг", ex:{en:"Where is the hospital?", pron:"вэр из зэ хоспитал?", mn:"Эмнэлэг хаана байна?"}},
      {ic:"🏦", en:"Bank", pron:"бэнк", mn:"Банк", ex:{en:"The bank is closed.", pron:"зэ бэнк из клоузд.", mn:"Банк хаалттай."}},
      {ic:"🏪", en:"Shop", pron:"шоп", mn:"Дэлгүүр", ex:{en:"I go to the shop.", pron:"ай гоу ту зэ шоп.", mn:"Би дэлгүүр явна."}},
      {ic:"🍽️", en:"Restaurant", pron:"рэсторонт", mn:"Ресторан", ex:{en:"Let's go to a restaurant.", pron:"летс гоу ту э рэсторонт.", mn:"Ресторан явцгаая."}},
      {ic:"🌳", en:"Park", pron:"парк", mn:"Цэцэрлэгт хүрээлэн", ex:{en:"We walk in the park.", pron:"ви волк ин зэ парк.", mn:"Бид хүрээлэнгээр алхдаг."}},
      {ic:"🚉", en:"Station", pron:"стэйшн", mn:"Буудал / өртөө", ex:{en:"The station is near.", pron:"зэ стэйшн из нийр.", mn:"Буудал ойрхон."}},
      {ic:"🛣️", en:"Street", pron:"стрийт", mn:"Гудамж", ex:{en:"This street is quiet.", pron:"зис стрийт из квайэт.", mn:"Энэ гудамж нам гүм."}}
    ]
  },
  {
    id:'technology', title:"Технологи", level:"B1", icon:"💻",
    words:[
      {ic:"💻", en:"Computer", pron:"компьютэр", mn:"Компьютер", ex:{en:"I work on a computer.", pron:"ай вөрк он э компьютэр.", mn:"Би компьютер дээр ажилладаг."}},
      {ic:"📱", en:"Phone", pron:"фоун", mn:"Утас", ex:{en:"My phone is dead.", pron:"май фоун из дэд.", mn:"Утас минь цэнэггүй болсон."}},
      {ic:"🌐", en:"Internet", pron:"интэрнэт", mn:"Интернэт", ex:{en:"The internet is slow.", pron:"зэ интэрнэт из слоу.", mn:"Интернэт удаан."}},
      {ic:"🔒", en:"Password", pron:"пасворд", mn:"Нууц үг", ex:{en:"I forgot my password.", pron:"ай форгот май пасворд.", mn:"Нууц үгээ мартсан."}},
      {ic:"🖥️", en:"Screen", pron:"скрийн", mn:"Дэлгэц", ex:{en:"The screen is bright.", pron:"зэ скрийн из брайт.", mn:"Дэлгэц гэрэлтэй."}},
      {ic:"📧", en:"Email", pron:"имэйл", mn:"И-мэйл", ex:{en:"I sent you an email.", pron:"ай сэнт ю эн имэйл.", mn:"Би чам руу и-мэйл илгээсэн."}},
      {ic:"📲", en:"App", pron:"эпп", mn:"Апп", ex:{en:"This app is useful.", pron:"зис эпп из юсфул.", mn:"Энэ апп хэрэгтэй."}},
      {ic:"⬇️", en:"Download", pron:"даунлоуд", mn:"Татаж авах", ex:{en:"Download the file.", pron:"даунлоуд зэ файл.", mn:"Файлыг татаж ав."}}
    ]
  },
  {
    id:'time', title:"Өдөр ба цаг", level:"A1", icon:"📅",
    words:[
      {ic:"📅", en:"Monday", pron:"мандэй", mn:"Даваа гараг", ex:{en:"I work on Monday.", pron:"ай вөрк он мандэй.", mn:"Би Даваа гарагт ажилладаг."}},
      {ic:"📆", en:"Today", pron:"тудэй", mn:"Өнөөдөр", ex:{en:"Today is sunny.", pron:"тудэй из сани.", mn:"Өнөөдөр нартай."}},
      {ic:"➡️", en:"Tomorrow", pron:"тумороу", mn:"Маргааш", ex:{en:"See you tomorrow.", pron:"сий ю тумороу.", mn:"Маргааш уулзъя."}},
      {ic:"⬅️", en:"Yesterday", pron:"естэрдэй", mn:"Өчигдөр", ex:{en:"I was busy yesterday.", pron:"ай воз бизи естэрдэй.", mn:"Өчигдөр завгүй байсан."}},
      {ic:"🗓️", en:"Week", pron:"вийк", mn:"Долоо хоног", ex:{en:"I have a busy week.", pron:"ай хэв э бизи вийк.", mn:"Завгүй долоо хоногтой байна."}},
      {ic:"🌅", en:"Morning", pron:"морнинг", mn:"Өглөө", ex:{en:"I run in the morning.", pron:"ай ран ин зэ морнинг.", mn:"Би өглөө гүйдэг."}},
      {ic:"🌙", en:"Night", pron:"найт", mn:"Шөнө", ex:{en:"Good night!", pron:"гүд найт!", mn:"Сайхан амраарай!"}},
      {ic:"⏰", en:"Hour", pron:"аур", mn:"Цаг", ex:{en:"Wait one hour.", pron:"вэйт ван аур.", mn:"Нэг цаг хүлээ."}}
    ]
  },
  {
    id:'home', title:"Гэр ахуй", level:"A1", icon:"🏠",
    words:[
      {ic:"🏠", en:"House", pron:"хаус", mn:"Байшин", ex:{en:"This is my house.", pron:"зис из май хаус.", mn:"Энэ миний байшин."}},
      {ic:"🚪", en:"Room", pron:"рүм", mn:"Өрөө", ex:{en:"My room is small.", pron:"май рүм из смол.", mn:"Миний өрөө жижиг."}},
      {ic:"🚪", en:"Door", pron:"дор", mn:"Хаалга", ex:{en:"Close the door.", pron:"клоуз зэ дор.", mn:"Хаалгаа хаа."}},
      {ic:"🪟", en:"Window", pron:"виндоу", mn:"Цонх", ex:{en:"Open the window.", pron:"оупэн зэ виндоу.", mn:"Цонхоо онгойлго."}},
      {ic:"🪑", en:"Table", pron:"тэйбл", mn:"Ширээ", ex:{en:"Books are on the table.", pron:"букс а он зэ тэйбл.", mn:"Номнууд ширээн дээр байна."}},
      {ic:"🛏️", en:"Bed", pron:"бэд", mn:"Ор", ex:{en:"I go to bed at ten.", pron:"ай гоу ту бэд эт тэн.", mn:"Би 10 цагт унтдаг."}},
      {ic:"🍳", en:"Kitchen", pron:"кичэн", mn:"Гал тогоо", ex:{en:"She is in the kitchen.", pron:"ши из ин зэ кичэн.", mn:"Тэр гал тогоонд байна."}},
      {ic:"🪑", en:"Chair", pron:"чэйр", mn:"Сандал", ex:{en:"Sit on the chair.", pron:"сит он зэ чэйр.", mn:"Сандал дээр суу."}}
    ]
  },
  {
    id:'drinks', title:"Ундаа", level:"A1", icon:"🥤",
    words:[
      {ic:"☕", en:"Coffee", pron:"кофи", mn:"Кофе", ex:{en:"I need a coffee.", pron:"ай нийд э кофи.", mn:"Надад кофе хэрэгтэй."}},
      {ic:"🧃", en:"Juice", pron:"жүс", mn:"Жүүс", ex:{en:"Orange juice, please.", pron:"ориндж жүс, плийз.", mn:"Жүрж жүүс, гуйя."}},
      {ic:"💧", en:"Water", pron:"вотэр", mn:"Ус", ex:{en:"A glass of water.", pron:"э глас оф вотэр.", mn:"Нэг аяга ус."}},
      {ic:"🍺", en:"Beer", pron:"биэр", mn:"Шар айраг", ex:{en:"He drinks beer.", pron:"хи дринкс биэр.", mn:"Тэр шар айраг уудаг."}},
      {ic:"🍷", en:"Wine", pron:"вайн", mn:"Дарс", ex:{en:"Red wine is nice.", pron:"рэд вайн из найс.", mn:"Улаан дарс гоё."}},
      {ic:"🥤", en:"Soda", pron:"соуда", mn:"Ундаа (хийтэй)", ex:{en:"I don't drink soda.", pron:"ай доунт дринк соуда.", mn:"Би хийтэй ундаа уудаггүй."}},
      {ic:"🧊", en:"Ice", pron:"айс", mn:"Мөс", ex:{en:"With ice, please.", pron:"виз айс, плийз.", mn:"Мөстэй, гуйя."}},
      {ic:"🍶", en:"Drink", pron:"дринк", mn:"Ундаа / уух", ex:{en:"What would you like to drink?", pron:"вот вүд ю лайк ту дринк?", mn:"Юу уумаар байна?"}}
    ]
  },
  {
    id:'verbs', title:"Үйл үг", level:"A2", icon:"🏃",
    words:[
      {ic:"🏃", en:"Run", pron:"ран", mn:"Гүйх", ex:{en:"I run every morning.", pron:"ай ран эври морнинг.", mn:"Би өглөө бүр гүйдэг."}},
      {ic:"🍽️", en:"Eat", pron:"ийт", mn:"Идэх", ex:{en:"Let's eat together.", pron:"летс ийт тугэзэр.", mn:"Хамт идье."}},
      {ic:"😴", en:"Sleep", pron:"слийп", mn:"Унтах", ex:{en:"I sleep eight hours.", pron:"ай слийп эйт аурз.", mn:"Би найман цаг унтдаг."}},
      {ic:"📖", en:"Read", pron:"рийд", mn:"Унших", ex:{en:"I read every night.", pron:"ай рийд эври найт.", mn:"Би шөнө бүр уншдаг."}},
      {ic:"✍️", en:"Write", pron:"райт", mn:"Бичих", ex:{en:"Write your name.", pron:"райт ёр нэйм.", mn:"Нэрээ бич."}},
      {ic:"🛒", en:"Buy", pron:"бай", mn:"Худалдаж авах", ex:{en:"I want to buy bread.", pron:"ай вонт ту бай брэд.", mn:"Би талх авмаар байна."}},
      {ic:"🗣️", en:"Speak", pron:"спийк", mn:"Ярих", ex:{en:"I speak two languages.", pron:"ай спийк ту лэнгвижиз.", mn:"Би хоёр хэлээр ярьдаг."}},
      {ic:"🚶", en:"Walk", pron:"волк", mn:"Алхах", ex:{en:"Let's walk to the park.", pron:"летс волк ту зэ парк.", mn:"Цэцэрлэг рүү алхъя."}}
    ]
  },
  {
    id:'sports', title:"Спорт", level:"A2", icon:"🏀",
    words:[
      {ic:"⚽", en:"Football", pron:"футбол", mn:"Хөл бөмбөг", ex:{en:"I play football.", pron:"ай плэй футбол.", mn:"Би хөл бөмбөг тоглодог."}},
      {ic:"🏀", en:"Basketball", pron:"баскетбол", mn:"Сагсан бөмбөг", ex:{en:"He loves basketball.", pron:"хи лавз баскетбол.", mn:"Тэр сагсан бөмбөгт дуртай."}},
      {ic:"🏊", en:"Swimming", pron:"свиминг", mn:"Усанд сэлэлт", ex:{en:"Swimming is fun.", pron:"свиминг из фан.", mn:"Усанд сэлэх хөгжилтэй."}},
      {ic:"🏃", en:"Running", pron:"раннинг", mn:"Гүйлт", ex:{en:"Running is healthy.", pron:"раннинг из хэлси.", mn:"Гүйлт эрүүл мэндэд сайн."}},
      {ic:"🤼", en:"Wrestling", pron:"рэслинг", mn:"Бөх", ex:{en:"Wrestling is popular in Mongolia.", pron:"рэслинг из попьюлар ин Монголиа.", mn:"Монголд бөх түгээмэл."}},
      {ic:"🏐", en:"Ball", pron:"бол", mn:"Бөмбөг", ex:{en:"Throw the ball.", pron:"сроу зэ бол.", mn:"Бөмбөгийг шидээрэй."}},
      {ic:"👥", en:"Team", pron:"тийм", mn:"Баг", ex:{en:"My team won.", pron:"май тийм вон.", mn:"Манай баг хожсон."}},
      {ic:"🏆", en:"Win", pron:"вин", mn:"Хожих", ex:{en:"We want to win.", pron:"ви вонт ту вин.", mn:"Бид хожихыг хүсч байна."}}
    ]
  },
  {
    id:'money', title:"Мөнгө", level:"A2", icon:"💰",
    words:[
      {ic:"💰", en:"Money", pron:"мани", mn:"Мөнгө", ex:{en:"I have no money.", pron:"ай хэв ноу мани.", mn:"Надад мөнгө алга."}},
      {ic:"🏷️", en:"Price", pron:"прайс", mn:"Үнэ", ex:{en:"What's the price?", pron:"вотс зэ прайс?", mn:"Үнэ нь хэд вэ?"}},
      {ic:"🪙", en:"Cheap", pron:"чийп", mn:"Хямд", ex:{en:"This is cheap.", pron:"зис из чийп.", mn:"Энэ хямд."}},
      {ic:"💸", en:"Expensive", pron:"икспэнсив", mn:"Үнэтэй", ex:{en:"That's too expensive.", pron:"зэтс тү икспэнсив.", mn:"Тэр хэтэрхий үнэтэй."}},
      {ic:"💳", en:"Pay", pron:"пэй", mn:"Төлөх", ex:{en:"I'll pay now.", pron:"айл пэй нау.", mn:"Би одоо төлье."}},
      {ic:"💳", en:"Card", pron:"кард", mn:"Карт", ex:{en:"Can I pay by card?", pron:"кэн ай пэй бай кард?", mn:"Картаар төлж болох уу?"}},
      {ic:"💵", en:"Cash", pron:"кэш", mn:"Бэлэн мөнгө", ex:{en:"I only have cash.", pron:"ай оунли хэв кэш.", mn:"Надад зөвхөн бэлэн мөнгө бий."}},
      {ic:"🪙", en:"Change", pron:"чэйнж", mn:"Хариулт мөнгө", ex:{en:"Keep the change.", pron:"кийп зэ чэйнж.", mn:"Хариултаа аваад үлдээрэй."}}
    ]
  },
  {
    id:'health', title:"Эрүүл мэнд", level:"B1", icon:"🩺",
    words:[
      {ic:"💊", en:"Medicine", pron:"мэдсин", mn:"Эм", ex:{en:"Take your medicine.", pron:"тэйк ёр мэдсин.", mn:"Эмээ уу."}},
      {ic:"🤕", en:"Pain", pron:"пэйн", mn:"Өвдөлт", ex:{en:"I have a pain here.", pron:"ай хэв э пэйн хийр.", mn:"Энд өвдөж байна."}},
      {ic:"🌡️", en:"Fever", pron:"фийвэр", mn:"Халуурал", ex:{en:"She has a fever.", pron:"ши хэз э фийвэр.", mn:"Тэр халуурч байна."}},
      {ic:"😷", en:"Cough", pron:"коф", mn:"Ханиалга", ex:{en:"I have a bad cough.", pron:"ай хэв э бэд коф.", mn:"Би хүчтэй ханиалгатай."}},
      {ic:"🥗", en:"Healthy", pron:"хэлси", mn:"Эрүүл", ex:{en:"Stay healthy!", pron:"стэй хэлси!", mn:"Эрүүл байгаарай!"}},
      {ic:"🤒", en:"Sick", pron:"сик", mn:"Өвчтэй", ex:{en:"I feel sick.", pron:"ай фийл сик.", mn:"Би өвчтэй байна."}},
      {ic:"🛌", en:"Rest", pron:"рэст", mn:"Амрах", ex:{en:"You need rest.", pron:"ю нийд рэст.", mn:"Чамд амралт хэрэгтэй."}},
      {ic:"💪", en:"Better", pron:"бэтэр", mn:"Дээрдэх", ex:{en:"I feel better now.", pron:"ай фийл бэтэр нау.", mn:"Одоо дээрдэж байна."}}
    ]
  },
  {
    id:'personality', title:"Зан чанар", level:"B1", icon:"🧠",
    words:[
      {ic:"😇", en:"Kind", pron:"кайнд", mn:"Эелдэг", ex:{en:"She is very kind.", pron:"ши из вэри кайнд.", mn:"Тэр их сайхан сэтгэлтэй."}},
      {ic:"😄", en:"Funny", pron:"фани", mn:"Хөгжилтэй", ex:{en:"He is so funny.", pron:"хи из соу фани.", mn:"Тэр их хөгжилтэй."}},
      {ic:"🤝", en:"Honest", pron:"онэст", mn:"Шударга", ex:{en:"Be honest with me.", pron:"би онэст виз ми.", mn:"Надтай шударга бай."}},
      {ic:"😳", en:"Shy", pron:"шай", mn:"Ичимхий", ex:{en:"I was shy as a child.", pron:"ай воз шай эз э чайлд.", mn:"Би багадаа ичимхий байсан."}},
      {ic:"🦁", en:"Brave", pron:"брэйв", mn:"Зоригтой", ex:{en:"You are very brave.", pron:"ю а вэри брэйв.", mn:"Чи их зоригтой."}},
      {ic:"😪", en:"Lazy", pron:"лэйзи", mn:"Залхуу", ex:{en:"Don't be lazy.", pron:"доунт би лэйзи.", mn:"Бүү залхуур."}},
      {ic:"🧠", en:"Clever", pron:"клэвэр", mn:"Ухаантай", ex:{en:"She is clever.", pron:"ши из клэвэр.", mn:"Тэр ухаантай."}},
      {ic:"🤗", en:"Friendly", pron:"фрэндли", mn:"Найрсаг", ex:{en:"The people are friendly.", pron:"зэ пийпл а фрэндли.", mn:"Хүмүүс найрсаг."}}
    ]
  },
  {
    id:'fruitveg', title:"Жимс & ногоо", level:"A1", icon:"🍇",
    words:[
      {ic:"🍌", en:"Banana", pron:"бэнана", mn:"Гадил"},
      {ic:"🍊", en:"Orange", pron:"ориндж", mn:"Жүрж"},
      {ic:"🍇", en:"Grape", pron:"грэйп", mn:"Усан үзэм"},
      {ic:"🥔", en:"Potato", pron:"потэйтоу", mn:"Төмс"},
      {ic:"🍅", en:"Tomato", pron:"тумэйтоу", mn:"Улаан лооль"},
      {ic:"🥕", en:"Carrot", pron:"кэррот", mn:"Лууван"},
      {ic:"🧅", en:"Onion", pron:"аньон", mn:"Сонгино"},
      {ic:"🍋", en:"Lemon", pron:"лэмон", mn:"Нимбэг"},
      {ic:"🍉", en:"Watermelon", pron:"вотэрмэлон", mn:"Тарвас"},
      {ic:"🍄", en:"Mushroom", pron:"машрүм", mn:"Мөөг"}
    ]
  },
  {
    id:'tableware', title:"Гал тогооны хэрэгсэл", level:"A1", icon:"🍴",
    words:[
      {ic:"🍽️", en:"Plate", pron:"плэйт", mn:"Таваг"},
      {ic:"☕", en:"Cup", pron:"кап", mn:"Аяга"},
      {ic:"🥄", en:"Spoon", pron:"спүн", mn:"Халбага"},
      {ic:"🍴", en:"Fork", pron:"форк", mn:"Сэрээ"},
      {ic:"🔪", en:"Knife", pron:"найф", mn:"Хутга"},
      {ic:"🥣", en:"Bowl", pron:"боул", mn:"Гүн таваг"},
      {ic:"🍾", en:"Bottle", pron:"ботл", mn:"Шил"},
      {ic:"🍳", en:"Pan", pron:"пэн", mn:"Хайруулын таваг"},
      {ic:"🍲", en:"Pot", pron:"пот", mn:"Тогоо"},
      {ic:"🧻", en:"Napkin", pron:"нэпкин", mn:"Салфетка"}
    ]
  },
  {
    id:'nature', title:"Байгаль", level:"A2", icon:"🌳",
    words:[
      {ic:"🌳", en:"Tree", pron:"трий", mn:"Мод"},
      {ic:"🌸", en:"Flower", pron:"флауэр", mn:"Цэцэг"},
      {ic:"⛰️", en:"Mountain", pron:"маунтэн", mn:"Уул"},
      {ic:"🏞️", en:"River", pron:"ривэр", mn:"Гол"},
      {ic:"🌊", en:"Sea", pron:"сий", mn:"Далай"},
      {ic:"🌌", en:"Sky", pron:"скай", mn:"Тэнгэр"},
      {ic:"⭐", en:"Star", pron:"стар", mn:"Од"},
      {ic:"🌙", en:"Moon", pron:"мүн", mn:"Сар"},
      {ic:"☀️", en:"Sun", pron:"сан", mn:"Нар"},
      {ic:"🌿", en:"Grass", pron:"грас", mn:"Өвс"}
    ]
  },
  {
    id:'transport', title:"Тээвэр", level:"A1", icon:"🚗",
    words:[
      {ic:"🚗", en:"Car", pron:"кар", mn:"Машин"},
      {ic:"🚌", en:"Bus", pron:"бас", mn:"Автобус"},
      {ic:"🚲", en:"Bike", pron:"байк", mn:"Дугуй"},
      {ic:"✈️", en:"Plane", pron:"плэйн", mn:"Онгоц"},
      {ic:"🚢", en:"Ship", pron:"шип", mn:"Хөлөг онгоц"},
      {ic:"⛵", en:"Boat", pron:"боут", mn:"Завь"},
      {ic:"🚚", en:"Truck", pron:"трак", mn:"Ачааны машин"},
      {ic:"🛣️", en:"Road", pron:"роуд", mn:"Зам"},
      {ic:"🌉", en:"Bridge", pron:"бридж", mn:"Гүүр"},
      {ic:"🚇", en:"Subway", pron:"сабвэй", mn:"Метро"}
    ]
  },
  {
    id:'verbs2', title:"Үйл үг 2", level:"A2", icon:"🔁",
    words:[
      {ic:"🔓", en:"Open", pron:"оупэн", mn:"Нээх"},
      {ic:"🔒", en:"Close", pron:"клоуз", mn:"Хаах"},
      {ic:"▶️", en:"Start", pron:"старт", mn:"Эхлэх"},
      {ic:"⏹️", en:"Stop", pron:"стоп", mn:"Зогсох"},
      {ic:"🆘", en:"Help", pron:"хэлп", mn:"Туслах"},
      {ic:"📖", en:"Learn", pron:"лөрн", mn:"Суралцах"},
      {ic:"👩‍🏫", en:"Teach", pron:"тийч", mn:"Заах"},
      {ic:"💡", en:"Understand", pron:"андэрстэнд", mn:"Ойлгох"},
      {ic:"🧠", en:"Remember", pron:"римэмбэр", mn:"Санах"},
      {ic:"🌫️", en:"Forget", pron:"форгет", mn:"Мартах"}
    ]
  },
  {
    id:'adjectives', title:"Тэмдэг нэр", level:"A2", icon:"⚖️",
    words:[
      {ic:"🔵", en:"Big", pron:"биг", mn:"Том"},
      {ic:"🔹", en:"Small", pron:"смол", mn:"Жижиг"},
      {ic:"✨", en:"New", pron:"ню", mn:"Шинэ"},
      {ic:"📿", en:"Old", pron:"оулд", mn:"Хуучин"},
      {ic:"⚡", en:"Fast", pron:"фаст", mn:"Хурдан"},
      {ic:"🐢", en:"Slow", pron:"слоу", mn:"Удаан"},
      {ic:"👍", en:"Easy", pron:"ийзи", mn:"Хялбар"},
      {ic:"🧱", en:"Hard", pron:"хард", mn:"Хэцүү"},
      {ic:"🧼", en:"Clean", pron:"клийн", mn:"Цэвэрхэн"},
      {ic:"🧹", en:"Dirty", pron:"дөрти", mn:"Бохир"}
    ]
  },
  {
    id:'time2', title:"Цаг хугацаа 2", level:"A1", icon:"🕐",
    words:[
      {ic:"☀️", en:"Day", pron:"дэй", mn:"Өдөр"},
      {ic:"🗓️", en:"Month", pron:"манс", mn:"Сар (хугацаа)"},
      {ic:"📅", en:"Year", pron:"йир", mn:"Жил"},
      {ic:"⏱️", en:"Minute", pron:"минит", mn:"Минут"},
      {ic:"⏲️", en:"Second", pron:"сэконд", mn:"Секунд"},
      {ic:"🏖️", en:"Weekend", pron:"викэнд", mn:"Амралтын өдрүүд"},
      {ic:"🎉", en:"Holiday", pron:"холидэй", mn:"Амралт / баяр"},
      {ic:"🎂", en:"Birthday", pron:"бөрсдэй", mn:"Төрсөн өдөр"},
      {ic:"🕐", en:"Clock", pron:"клок", mn:"Цаг (хэрэгсэл)"},
      {ic:"📆", en:"Calendar", pron:"кэлэндэр", mn:"Хуанли"}
    ]
  },
  {
    id:'emotions2', title:"Сэтгэл хөдлөл 2", level:"B1", icon:"😰",
    words:[
      {ic:"😟", en:"Worried", pron:"варид", mn:"Санаа зовсон"},
      {ic:"😬", en:"Nervous", pron:"нөрвэс", mn:"Сандарсан"},
      {ic:"😌", en:"Calm", pron:"кам", mn:"Тайван"},
      {ic:"😒", en:"Jealous", pron:"жэлэс", mn:"Атаархсан"},
      {ic:"😞", en:"Lonely", pron:"лоунли", mn:"Ганцаардсан"},
      {ic:"😎", en:"Confident", pron:"конфидэнт", mn:"Итгэлтэй"},
      {ic:"🤔", en:"Curious", pron:"кюриэс", mn:"Сониуч"},
      {ic:"🙏", en:"Grateful", pron:"грэйтфул", mn:"Талархсан"},
      {ic:"😳", en:"Embarrassed", pron:"имбэрэст", mn:"Ичсэн"},
      {ic:"🌟", en:"Hopeful", pron:"хоупфул", mn:"Найдвартай"}
    ]
  },
  {
    id:'study', title:"Сургууль & хичээл", level:"A2", icon:"📚",
    words:[
      {ic:"🖊️", en:"Pen", pron:"пэн", mn:"Үзэг"},
      {ic:"✏️", en:"Pencil", pron:"пэнсл", mn:"Харандаа"},
      {ic:"📄", en:"Paper", pron:"пэйпэр", mn:"Цаас"},
      {ic:"📓", en:"Notebook", pron:"ноутбүк", mn:"Дэвтэр"},
      {ic:"🪑", en:"Desk", pron:"дэск", mn:"Ширээ (сургуулийн)"},
      {ic:"📖", en:"Lesson", pron:"лэсн", mn:"Хичээл"},
      {ic:"📝", en:"Homework", pron:"хоумвөрк", mn:"Гэрийн даалгавар"},
      {ic:"🎓", en:"Exam", pron:"игзэм", mn:"Шалгалт"},
      {ic:"❓", en:"Question", pron:"квэсчэн", mn:"Асуулт"},
      {ic:"✅", en:"Answer", pron:"ансэр", mn:"Хариулт"}
    ]
  },
  {
    id:'food2', title:"Хоол 2", level:"A1", icon:"🍲",
    words:[
      {ic:"🍲", en:"Soup", pron:"сүп", mn:"Шөл"},
      {ic:"🥗", en:"Salad", pron:"сэлэд", mn:"Салат"},
      {ic:"🧀", en:"Cheese", pron:"чийз", mn:"Бяслаг"},
      {ic:"🧈", en:"Butter", pron:"батэр", mn:"Цөцгийн тос"},
      {ic:"🍬", en:"Sugar", pron:"шүгэр", mn:"Элсэн чихэр"},
      {ic:"🧂", en:"Salt", pron:"солт", mn:"Давс"},
      {ic:"🍗", en:"Chicken", pron:"чикэн", mn:"Тахианы мах"},
      {ic:"🍜", en:"Noodle", pron:"нүдл", mn:"Гоймон"},
      {ic:"🍰", en:"Cake", pron:"кэйк", mn:"Бялуу"},
      {ic:"🍪", en:"Cookie", pron:"куки", mn:"Жигнэмэг"}
    ]
  },
  {
    id:'directions', title:"Зүг чиг", level:"A1", icon:"🧭",
    words:[
      {ic:"⬅️", en:"Left", pron:"лэфт", mn:"Зүүн"},
      {ic:"➡️", en:"Right", pron:"райт", mn:"Баруун"},
      {ic:"⬆️", en:"Up", pron:"ап", mn:"Дээш"},
      {ic:"⬇️", en:"Down", pron:"даун", mn:"Доош"},
      {ic:"📍", en:"Near", pron:"нийр", mn:"Ойрхон"},
      {ic:"🔭", en:"Far", pron:"фар", mn:"Хол"},
      {ic:"📌", en:"Here", pron:"хийр", mn:"Энд"},
      {ic:"🗺️", en:"There", pron:"зэр", mn:"Тэнд"},
      {ic:"🔜", en:"Front", pron:"франт", mn:"Урд"},
      {ic:"🔙", en:"Back", pron:"бэк", mn:"Ард"}
    ]
  },
  {
    id:'weather2', title:"Цаг агаар 2", level:"A2", icon:"🌦️",
    words:[
      {ic:"🌩️", en:"Storm", pron:"сторм", mn:"Шуурга"},
      {ic:"🌫️", en:"Fog", pron:"фог", mn:"Манан"},
      {ic:"⛈️", en:"Thunder", pron:"сандэр", mn:"Аянга (дуу)"},
      {ic:"⚡", en:"Lightning", pron:"лайтнинг", mn:"Аянга (гэрэл)"},
      {ic:"🌈", en:"Rainbow", pron:"рэйнбоу", mn:"Солонго"},
      {ic:"🌡️", en:"Temperature", pron:"тэмпрэчэр", mn:"Температур"},
      {ic:"🔆", en:"Degree", pron:"дигрий", mn:"Хэм / градус"},
      {ic:"🏜️", en:"Dry", pron:"драй", mn:"Хуурай"},
      {ic:"💦", en:"Wet", pron:"вэт", mn:"Нойтон"},
      {ic:"🍂", en:"Season", pron:"сийзн", mn:"Улирал"}
    ]
  },
  {
    id:'cookverbs', title:"Хоол хийх үйл", level:"A2", icon:"🍳",
    words:[
      {ic:"👨‍🍳", en:"Cook", pron:"күк", mn:"Хоол хийх"},
      {ic:"🔪", en:"Cut", pron:"кат", mn:"Хэрчих"},
      {ic:"🥣", en:"Mix", pron:"микс", mn:"Хутгах / хольдох"},
      {ic:"♨️", en:"Boil", pron:"бойл", mn:"Буцалгах"},
      {ic:"🍳", en:"Fry", pron:"фрай", mn:"Шарах"},
      {ic:"🥐", en:"Bake", pron:"бэйк", mn:"Жигнэх"},
      {ic:"🚰", en:"Wash", pron:"вош", mn:"Угаах"},
      {ic:"🫗", en:"Pour", pron:"пор", mn:"Асгах / хийх"},
      {ic:"👅", en:"Taste", pron:"тэйст", mn:"Амтлах"},
      {ic:"🍽️", en:"Serve", pron:"сөрв", mn:"Тавьж өгөх"}
    ]
  },
  {
    id:'body2', title:"Бие 2", level:"A2", icon:"🦵",
    words:[
      {ic:"💪", en:"Arm", pron:"арм", mn:"Гар (шуу)"},
      {ic:"🦵", en:"Leg", pron:"лэг", mn:"Хөл"},
      {ic:"☝️", en:"Finger", pron:"фингэр", mn:"Хуруу"},
      {ic:"🦿", en:"Knee", pron:"ний", mn:"Өвдөг"},
      {ic:"🤷", en:"Shoulder", pron:"шоулдэр", mn:"Мөр"},
      {ic:"🧣", en:"Neck", pron:"нэк", mn:"Хүзүү"},
      {ic:"🔙", en:"Back", pron:"бэк", mn:"Нуруу"},
      {ic:"🍽️", en:"Stomach", pron:"стамэк", mn:"Гэдэс"},
      {ic:"🦷", en:"Tooth", pron:"түс", mn:"Шүд"},
      {ic:"👂", en:"Ear", pron:"иэр", mn:"Чих"}
    ]
  },
  {
    id:'family2', title:"Гэр бүл 2", level:"A2", icon:"👪",
    words:[
      {ic:"🤵", en:"Husband", pron:"хазбэнд", mn:"Нөхөр"},
      {ic:"👰", en:"Wife", pron:"вайф", mn:"Эхнэр"},
      {ic:"👨", en:"Uncle", pron:"анкл", mn:"Авга / нагац ах"},
      {ic:"👩", en:"Aunt", pron:"ант", mn:"Авга / нагац эгч"},
      {ic:"🧑", en:"Cousin", pron:"казн", mn:"Үеэл / бүл"},
      {ic:"👦", en:"Nephew", pron:"нэфью", mn:"Зээ / ач хүү"},
      {ic:"👧", en:"Niece", pron:"нийс", mn:"Зээ / ач охин"},
      {ic:"👪", en:"Parent", pron:"пэрэнт", mn:"Эцэг эх"},
      {ic:"🧒", en:"Child", pron:"чайлд", mn:"Хүүхэд"},
      {ic:"👨‍👩‍👧‍👦", en:"Relative", pron:"рэлэтив", mn:"Хамаатан"}
    ]
  },
  {
    id:'adj2', title:"Тэмдэг нэр 2", level:"A2", icon:"🌟",
    words:[
      {ic:"😍", en:"Beautiful", pron:"бьютифул", mn:"Үзэсгэлэнтэй"},
      {ic:"🙈", en:"Ugly", pron:"агли", mn:"Муухай"},
      {ic:"💰", en:"Rich", pron:"рич", mn:"Баян"},
      {ic:"🪙", en:"Poor", pron:"пур", mn:"Ядуу"},
      {ic:"💪", en:"Strong", pron:"стронг", mn:"Хүчтэй"},
      {ic:"🥀", en:"Weak", pron:"вийк", mn:"Сул дорой"},
      {ic:"👶", en:"Young", pron:"янг", mn:"Залуу"},
      {ic:"📏", en:"Tall", pron:"тол", mn:"Өндөр"},
      {ic:"📐", en:"Short", pron:"шорт", mn:"Богино / намхан"},
      {ic:"🏋️", en:"Heavy", pron:"хэви", mn:"Хүнд"}
    ]
  },
  {
    id:'adj3', title:"Тэмдэг нэр 3", level:"B1", icon:"🎚️",
    words:[
      {ic:"⭐", en:"Important", pron:"импортэнт", mn:"Чухал"},
      {ic:"🧩", en:"Difficult", pron:"дификалт", mn:"Хэцүү"},
      {ic:"✅", en:"Possible", pron:"посибл", mn:"Боломжтой"},
      {ic:"⚠️", en:"Dangerous", pron:"дэйнжэрэс", mn:"Аюултай"},
      {ic:"🛡️", en:"Safe", pron:"сэйф", mn:"Аюулгүй"},
      {ic:"🧐", en:"Careful", pron:"кэрфул", mn:"Болгоомжтой"},
      {ic:"🤫", en:"Quiet", pron:"квайэт", mn:"Нам гүм"},
      {ic:"🔊", en:"Loud", pron:"лауд", mn:"Чанга"},
      {ic:"💡", en:"Bright", pron:"брайт", mn:"Гэрэлтэй"},
      {ic:"🌑", en:"Dark", pron:"дарк", mn:"Харанхуй"}
    ]
  },
  {
    id:'dailyverbs', title:"Өдөр тутмын үйл", level:"A2", icon:"🔄",
    words:[
      {ic:"⏰", en:"Wake", pron:"вэйк", mn:"Сэрэх"},
      {ic:"🚿", en:"Wash", pron:"вош", mn:"Угаах"},
      {ic:"👔", en:"Dress", pron:"дрэс", mn:"Хувцаслах"},
      {ic:"🚗", en:"Drive", pron:"драйв", mn:"Жолоодох"},
      {ic:"🧹", en:"Clean", pron:"клийн", mn:"Цэвэрлэх"},
      {ic:"📺", en:"Watch", pron:"воч", mn:"Үзэх"},
      {ic:"🎧", en:"Listen", pron:"лисн", mn:"Сонсох"},
      {ic:"📞", en:"Call", pron:"кол", mn:"Залгах"},
      {ic:"⏳", en:"Wait", pron:"вэйт", mn:"Хүлээх"},
      {ic:"🤝", en:"Meet", pron:"мийт", mn:"Уулзах"}
    ]
  },
  {
    id:'mindverbs', title:"Сэтгэхүйн үйл", level:"B1", icon:"💭",
    words:[
      {ic:"🤔", en:"Think", pron:"синк", mn:"Бодох"},
      {ic:"🧠", en:"Know", pron:"ноу", mn:"Мэдэх"},
      {ic:"🙏", en:"Believe", pron:"билийв", mn:"Итгэх"},
      {ic:"✔️", en:"Decide", pron:"дисайд", mn:"Шийдэх"},
      {ic:"🌈", en:"Hope", pron:"хоуп", mn:"Найдах"},
      {ic:"🤝", en:"Agree", pron:"эгрий", mn:"Зөвшөөрөх"},
      {ic:"💬", en:"Explain", pron:"иксплэйн", mn:"Тайлбарлах"},
      {ic:"📝", en:"Describe", pron:"дискрайб", mn:"Дүрслэх"},
      {ic:"🤞", en:"Promise", pron:"промис", mn:"Амлах"},
      {ic:"💡", en:"Suggest", pron:"сэгжэст", mn:"Санал болгох"}
    ]
  },
  {
    id:'business', title:"Бизнес", level:"B1", icon:"💼",
    words:[
      {ic:"👥", en:"Meeting", pron:"мийтинг", mn:"Уулзалт"},
      {ic:"📊", en:"Report", pron:"рипорт", mn:"Тайлан"},
      {ic:"📁", en:"Project", pron:"прожэкт", mn:"Төсөл"},
      {ic:"⏰", en:"Deadline", pron:"дэдлайн", mn:"Эцсийн хугацаа"},
      {ic:"👔", en:"Manager", pron:"мэнэжэр", mn:"Менежер"},
      {ic:"💵", en:"Salary", pron:"сэлэри", mn:"Цалин"},
      {ic:"📜", en:"Contract", pron:"контракт", mn:"Гэрээ"},
      {ic:"🛍️", en:"Customer", pron:"кастэмэр", mn:"Үйлчлүүлэгч"},
      {ic:"🏢", en:"Company", pron:"кампэни", mn:"Компани"},
      {ic:"🏢", en:"Office", pron:"офис", mn:"Оффис"}
    ]
  },
  {
    id:'socialverbs', title:"Мэдрэмжийн үйл", level:"B1", icon:"💗",
    words:[
      {ic:"❤️", en:"Love", pron:"лав", mn:"Хайрлах"},
      {ic:"💔", en:"Hate", pron:"хэйт", mn:"Үзэн ядах"},
      {ic:"👍", en:"Like", pron:"лайк", mn:"Дуртай байх"},
      {ic:"😊", en:"Enjoy", pron:"энджой", mn:"Таашаах"},
      {ic:"🥺", en:"Miss", pron:"мис", mn:"Санагалзах"},
      {ic:"😟", en:"Worry", pron:"вари", mn:"Санаа зовох"},
      {ic:"😌", en:"Relax", pron:"рилэкс", mn:"Тайвшрах"},
      {ic:"🙂", en:"Smile", pron:"смайл", mn:"Инээмсэглэх"},
      {ic:"😢", en:"Cry", pron:"край", mn:"Уйлах"},
      {ic:"😂", en:"Laugh", pron:"лаф", mn:"Инээх"}
    ]
  },
  {
    id:'citybuild', title:"Хот & барилга", level:"A2", icon:"🏙️",
    words:[
      {ic:"🏙️", en:"City", pron:"сити", mn:"Хот"},
      {ic:"🏘️", en:"Town", pron:"таун", mn:"Тосгон / хот"},
      {ic:"🏡", en:"Village", pron:"вилэж", mn:"Хөдөө / тосгон"},
      {ic:"🏢", en:"Building", pron:"билдинг", mn:"Барилга"},
      {ic:"⛪", en:"Church", pron:"чөрч", mn:"Сүм"},
      {ic:"🏛️", en:"Museum", pron:"мьюзиэм", mn:"Музей"},
      {ic:"📚", en:"Library", pron:"лайбрэри", mn:"Номын сан"},
      {ic:"🛒", en:"Market", pron:"маркэт", mn:"Зах"},
      {ic:"🎬", en:"Cinema", pron:"синэма", mn:"Кино театр"},
      {ic:"🏭", en:"Factory", pron:"фэктори", mn:"Үйлдвэр"}
    ]
  },
  {
    id:'frequency', title:"Давтамж", level:"A2", icon:"🔁",
    words:[
      {ic:"♾️", en:"Always", pron:"олвэйз", mn:"Үргэлж"},
      {ic:"🔁", en:"Usually", pron:"южуэли", mn:"Ихэвчлэн"},
      {ic:"📊", en:"Often", pron:"офн", mn:"Байнга"},
      {ic:"🔀", en:"Sometimes", pron:"самтаймз", mn:"Заримдаа"},
      {ic:"🚫", en:"Never", pron:"нэвэр", mn:"Хэзээ ч үгүй"},
      {ic:"🌅", en:"Early", pron:"өрли", mn:"Эрт"},
      {ic:"🌙", en:"Late", pron:"лэйт", mn:"Оройтсон"},
      {ic:"⏭️", en:"Soon", pron:"сүн", mn:"Удахгүй"},
      {ic:"✔️", en:"Already", pron:"олрэди", mn:"Аль хэдийн"},
      {ic:"⏸️", en:"Still", pron:"стил", mn:"Одоо хэр"}
    ]
  },
  {
    id:'household', title:"Гэрийн эд хогшил", level:"A2", icon:"🛋️",
    words:[
      {ic:"🛋️", en:"Sofa", pron:"соуфа", mn:"Буйдан"},
      {ic:"💡", en:"Lamp", pron:"лэмп", mn:"Чийдэн"},
      {ic:"🪞", en:"Mirror", pron:"миррор", mn:"Толь"},
      {ic:"🕐", en:"Clock", pron:"клок", mn:"Цаг (ханын)"},
      {ic:"🪟", en:"Curtain", pron:"кёртн", mn:"Хөшиг"},
      {ic:"🧶", en:"Carpet", pron:"карпэт", mn:"Хивс"},
      {ic:"📚", en:"Shelf", pron:"шэлф", mn:"Тавиур"},
      {ic:"🧊", en:"Fridge", pron:"фридж", mn:"Хөргөгч"},
      {ic:"🔥", en:"Stove", pron:"стоув", mn:"Зуух"},
      {ic:"🚰", en:"Sink", pron:"синк", mn:"Угаалтуур"}
    ]
  },
  {
    id:'numbers2', title:"Тоо 2", level:"A1", icon:"🔢",
    words:[
      {ic:"4️⃣", en:"Four", pron:"фор", mn:"Дөрөв"},
      {ic:"6️⃣", en:"Six", pron:"сикс", mn:"Зургаа"},
      {ic:"7️⃣", en:"Seven", pron:"сэвн", mn:"Долоо"},
      {ic:"8️⃣", en:"Eight", pron:"эйт", mn:"Найм"},
      {ic:"9️⃣", en:"Nine", pron:"найн", mn:"Ес"},
      {ic:"🔟", en:"Eleven", pron:"илэвн", mn:"Арван нэг"},
      {ic:"🔢", en:"Twelve", pron:"твэлв", mn:"Арван хоёр"},
      {ic:"🔢", en:"Twenty", pron:"твэнти", mn:"Хорь"},
      {ic:"🔢", en:"Thousand", pron:"сауз энд", mn:"Мянга"},
      {ic:"🔢", en:"Million", pron:"миллён", mn:"Сая"}
    ]
  },
  {
    id:'travel2', title:"Аялал 2", level:"A2", icon:"🧳",
    words:[
      {ic:"🧭", en:"Journey", pron:"жөрни", mn:"Аялал (урт зам)"},
      {ic:"🎒", en:"Trip", pron:"трип", mn:"Аялал (богино)"},
      {ic:"📸", en:"Tourist", pron:"турист", mn:"Жуулчин"},
      {ic:"🗺️", en:"Guide", pron:"гайд", mn:"Хөтөч"},
      {ic:"🏖️", en:"Beach", pron:"бийч", mn:"Далайн эрэг"},
      {ic:"⛺", en:"Camp", pron:"кэмп", mn:"Отог / буудаллах"},
      {ic:"⛺", en:"Tent", pron:"тэнт", mn:"Майхан"},
      {ic:"🎒", en:"Backpack", pron:"бэкпэк", mn:"Үүргэвч"},
      {ic:"🛂", en:"Visa", pron:"виза", mn:"Виз"},
      {ic:"🎁", en:"Souvenir", pron:"сүвэниэр", mn:"Дурсгалын зүйл"}
    ]
  },
  {
    id:'health2', title:"Эрүүл мэнд 2", level:"B1", icon:"🏥",
    words:[
      {ic:"🦷", en:"Dentist", pron:"дэнтист", mn:"Шүдний эмч"},
      {ic:"🚑", en:"Ambulance", pron:"эмбюлэнс", mn:"Түргэн тусламж"},
      {ic:"🤕", en:"Injury", pron:"инжэри", mn:"Гэмтэл"},
      {ic:"🤧", en:"Allergy", pron:"элэржи", mn:"Харшил"},
      {ic:"🩹", en:"Bandage", pron:"бэндэж", mn:"Боолт"},
      {ic:"💊", en:"Pill", pron:"пил", mn:"Эм (шахмал)"},
      {ic:"🛏️", en:"Patient", pron:"пэйшэнт", mn:"Өвчтөн"},
      {ic:"🔪", en:"Surgery", pron:"сөржэри", mn:"Мэс засал"},
      {ic:"💪", en:"Recovery", pron:"рикавэри", mn:"Эдгэрэлт"},
      {ic:"🩺", en:"Checkup", pron:"чекап", mn:"Эмнэлгийн үзлэг"}
    ]
  },
  {
    id:'animals2', title:"Амьтад 2", level:"A2", icon:"🐘",
    words:[
      {ic:"🐘", en:"Elephant", pron:"элэфэнт", mn:"Заан"},
      {ic:"🦁", en:"Lion", pron:"лайон", mn:"Арслан"},
      {ic:"🐯", en:"Tiger", pron:"тайгэр", mn:"Бар"},
      {ic:"🐻", en:"Bear", pron:"бэр", mn:"Баавгай"},
      {ic:"🐺", en:"Wolf", pron:"вулф", mn:"Чоно"},
      {ic:"🦊", en:"Fox", pron:"фокс", mn:"Үнэг"},
      {ic:"🐰", en:"Rabbit", pron:"рэбит", mn:"Туулай"},
      {ic:"🦌", en:"Deer", pron:"диэр", mn:"Буга"},
      {ic:"🐒", en:"Monkey", pron:"манки", mn:"Сармагчин"},
      {ic:"🐍", en:"Snake", pron:"снэйк", mn:"Могой"}
    ]
  },
  {
    id:'birdsinsects', title:"Шувуу & шавж", level:"A2", icon:"🦅",
    words:[
      {ic:"🦅", en:"Eagle", pron:"игл", mn:"Бүргэд"},
      {ic:"🦉", en:"Owl", pron:"аул", mn:"Шар шувуу"},
      {ic:"🦆", en:"Duck", pron:"дак", mn:"Нугас"},
      {ic:"🦢", en:"Goose", pron:"гүс", mn:"Галуу"},
      {ic:"🐝", en:"Bee", pron:"бий", mn:"Зөгий"},
      {ic:"🐜", en:"Ant", pron:"ант", mn:"Шоргоолж"},
      {ic:"🪰", en:"Fly", pron:"флай", mn:"Ялаа"},
      {ic:"🕷️", en:"Spider", pron:"спайдэр", mn:"Аалз"},
      {ic:"🦋", en:"Butterfly", pron:"батэрфлай", mn:"Эрвээхэй"},
      {ic:"🦟", en:"Mosquito", pron:"москито", mn:"Шумуул"}
    ]
  },
  {
    id:'tech2', title:"Технологи 2", level:"B1", icon:"🔌",
    words:[
      {ic:"⌨️", en:"Keyboard", pron:"кийборд", mn:"Гар (компьютерийн)"},
      {ic:"🖱️", en:"Mouse", pron:"маус", mn:"Хулгана"},
      {ic:"🔌", en:"Charger", pron:"чаржэр", mn:"Цэнэглэгч"},
      {ic:"🔋", en:"Battery", pron:"бэтэри", mn:"Батарей"},
      {ic:"📶", en:"Wifi", pron:"вайфай", mn:"Вайфай"},
      {ic:"💾", en:"Software", pron:"софтвэр", mn:"Программ хангамж"},
      {ic:"📄", en:"File", pron:"файл", mn:"Файл"},
      {ic:"📁", en:"Folder", pron:"фолдэр", mn:"Хавтас"},
      {ic:"🖱️", en:"Click", pron:"клик", mn:"Дарах"},
      {ic:"🔄", en:"Update", pron:"апдэйт", mn:"Шинэчлэх"}
    ]
  },
  {
    id:'nature2', title:"Байгаль 2", level:"A2", icon:"🏞️",
    words:[
      {ic:"🌲", en:"Forest", pron:"форэст", mn:"Ой"},
      {ic:"🏜️", en:"Desert", pron:"дэзэрт", mn:"Цөл"},
      {ic:"🏝️", en:"Island", pron:"айлэнд", mn:"Арал"},
      {ic:"🏞️", en:"Lake", pron:"лэйк", mn:"Нуур"},
      {ic:"⛰️", en:"Hill", pron:"хил", mn:"Толгод"},
      {ic:"🏞️", en:"Valley", pron:"вэли", mn:"Хөндий"},
      {ic:"🕳️", en:"Cave", pron:"кэйв", mn:"Агуй"},
      {ic:"💦", en:"Waterfall", pron:"вотэрфол", mn:"Хүрхрээ"},
      {ic:"☁️", en:"Cloud", pron:"клауд", mn:"Үүл"},
      {ic:"🌊", en:"Wave", pron:"вэйв", mn:"Давалгаа"}
    ]
  },
  {
    id:'abstract', title:"Хийсвэр нэр 1", level:"B1", icon:"💭",
    words:[
      {ic:"💡", en:"Idea", pron:"айдиа", mn:"Санаа"},
      {ic:"❗", en:"Problem", pron:"проблэм", mn:"Асуудал"},
      {ic:"🎲", en:"Chance", pron:"чанс", mn:"Боломж / аз"},
      {ic:"🧩", en:"Reason", pron:"рийзн", mn:"Шалтгаан"},
      {ic:"✔️", en:"Truth", pron:"трүс", mn:"Үнэн"},
      {ic:"💭", en:"Dream", pron:"дрийм", mn:"Мөрөөдөл / зүүд"},
      {ic:"📌", en:"Fact", pron:"фэкт", mn:"Баримт"},
      {ic:"🎯", en:"Goal", pron:"гоул", mn:"Зорилго"},
      {ic:"🔀", en:"Choice", pron:"чойс", mn:"Сонголт"},
      {ic:"🌟", en:"Experience", pron:"икспириэнс", mn:"Туршлага"}
    ]
  },
  {
    id:'abstract2', title:"Хийсвэр нэр 2", level:"B1", icon:"🌀",
    words:[
      {ic:"🕊️", en:"Freedom", pron:"фрийдэм", mn:"Эрх чөлөө"},
      {ic:"⚡", en:"Power", pron:"пауэр", mn:"Хүч / эрх мэдэл"},
      {ic:"☮️", en:"Peace", pron:"пийс", mn:"Энх тайван"},
      {ic:"⚠️", en:"Danger", pron:"дэйнжэр", mn:"Аюул"},
      {ic:"🏆", en:"Success", pron:"сэксэс", mn:"Амжилт"},
      {ic:"💥", en:"Failure", pron:"фэйлюр", mn:"Бүтэлгүйтэл"},
      {ic:"🍀", en:"Luck", pron:"лак", mn:"Аз"},
      {ic:"🔮", en:"Future", pron:"фьючэр", mn:"Ирээдүй"},
      {ic:"⏮️", en:"Past", pron:"паст", mn:"Өнгөрсөн"},
      {ic:"🔄", en:"Change", pron:"чэйнж", mn:"Өөрчлөлт"}
    ]
  },
  {
    id:'phrasal2', title:"Хэлц үйл 2", level:"B1", icon:"🔗",
    words:[
      {ic:"⏰", en:"Wake up", pron:"вэйк ап", mn:"Сэрэх"},
      {ic:"🛏️", en:"Get up", pron:"гет ап", mn:"Босох"},
      {ic:"💡", en:"Turn on", pron:"төрн он", mn:"Асаах"},
      {ic:"🌑", en:"Turn off", pron:"төрн оф", mn:"Унтраах"},
      {ic:"👕", en:"Put on", pron:"пут он", mn:"Өмсөх"},
      {ic:"🧥", en:"Take off", pron:"тэйк оф", mn:"Тайлах"},
      {ic:"🔍", en:"Look for", pron:"лүк фор", mn:"Хайх"},
      {ic:"💡", en:"Find out", pron:"файнд аут", mn:"Олж мэдэх"},
      {ic:"🔙", en:"Come back", pron:"кам бэк", mn:"Буцаж ирэх"},
      {ic:"🪑", en:"Sit down", pron:"сит даун", mn:"Суух"}
    ]
  },
  {
    id:'food3', title:"Хоол 3", level:"A2", icon:"🍔",
    words:[
      {ic:"🍕", en:"Pizza", pron:"питса", mn:"Пицца"},
      {ic:"🍔", en:"Burger", pron:"бөргэр", mn:"Бургер"},
      {ic:"🥪", en:"Sandwich", pron:"сэндвич", mn:"Сэндвич"},
      {ic:"🍟", en:"Fries", pron:"фрайз", mn:"Шарсан төмс"},
      {ic:"🥞", en:"Pancake", pron:"пэнкэйк", mn:"Тавган боов"},
      {ic:"🍯", en:"Honey", pron:"хани", mn:"Зөгийн бал"},
      {ic:"🍓", en:"Jam", pron:"жэм", mn:"Чанамал"},
      {ic:"🥛", en:"Yogurt", pron:"йогэрт", mn:"Тараг"},
      {ic:"🌾", en:"Flour", pron:"флауэр", mn:"Гурил"},
      {ic:"🛢️", en:"Oil", pron:"ойл", mn:"Тос"}
    ]
  },
  {
    id:'accessories', title:"Гоёл & хэрэгсэл", level:"A2", icon:"👜",
    words:[
      {ic:"👜", en:"Bag", pron:"бэг", mn:"Цүнх"},
      {ic:"🥋", en:"Belt", pron:"бэлт", mn:"Бүс"},
      {ic:"🧣", en:"Scarf", pron:"скарф", mn:"Ороолт"},
      {ic:"🧤", en:"Gloves", pron:"главз", mn:"Бээлий"},
      {ic:"💍", en:"Ring", pron:"ринг", mn:"Бөгж"},
      {ic:"⌚", en:"Watch", pron:"воч", mn:"Цаг (гарын)"},
      {ic:"👓", en:"Glasses", pron:"гласиз", mn:"Нүдний шил"},
      {ic:"☂️", en:"Umbrella", pron:"амбрэла", mn:"Шүхэр"},
      {ic:"👛", en:"Wallet", pron:"волэт", mn:"Түрийвч"},
      {ic:"🥾", en:"Boots", pron:"бүтс", mn:"Гутал (өндөр)"}
    ]
  },
  {
    id:'materials', title:"Материал", level:"A2", icon:"🧱",
    words:[
      {ic:"🥃", en:"Glass", pron:"глас", mn:"Шил (материал)"},
      {ic:"⚙️", en:"Metal", pron:"мэтл", mn:"Металл / төмөр"},
      {ic:"🪵", en:"Wood", pron:"вүд", mn:"Мод (материал)"},
      {ic:"♻️", en:"Plastic", pron:"плэстик", mn:"Хуванцар"},
      {ic:"🪨", en:"Stone", pron:"стоун", mn:"Чулуу"},
      {ic:"🥇", en:"Gold", pron:"гоулд", mn:"Алт"},
      {ic:"🥈", en:"Silver", pron:"силвэр", mn:"Мөнгө (металл)"},
      {ic:"🧵", en:"Cotton", pron:"котн", mn:"Хөвөн"},
      {ic:"🧳", en:"Leather", pron:"лэзэр", mn:"Арьс"},
      {ic:"🧱", en:"Brick", pron:"брик", mn:"Тоосго"}
    ]
  },
  {
    id:'moveverbs', title:"Хөдөлгөөний үйл", level:"A2", icon:"🏃",
    words:[
      {ic:"⬆️", en:"Jump", pron:"жамп", mn:"Үсрэх"},
      {ic:"🧗", en:"Climb", pron:"клайм", mn:"Авирах"},
      {ic:"⬇️", en:"Fall", pron:"фол", mn:"Унах"},
      {ic:"🎯", en:"Throw", pron:"сроу", mn:"Шидэх"},
      {ic:"🧤", en:"Catch", pron:"кэтч", mn:"Барих"},
      {ic:"➡️", en:"Push", pron:"пуш", mn:"Түлхэх"},
      {ic:"⬅️", en:"Pull", pron:"пул", mn:"Татах"},
      {ic:"📦", en:"Carry", pron:"кэрри", mn:"Зөөх"},
      {ic:"🐎", en:"Ride", pron:"райд", mn:"Унах (морь/дугуй)"},
      {ic:"🦵", en:"Kick", pron:"кик", mn:"Өшиглөх"}
    ]
  },
  {
    id:'quantity', title:"Хэмжээ & тоо хэмжээ", level:"A2", icon:"⚖️",
    words:[
      {ic:"➗", en:"Half", pron:"хаф", mn:"Тал"},
      {ic:"🔢", en:"Quarter", pron:"квортэр", mn:"Дөрөвний нэг"},
      {ic:"✖️", en:"Double", pron:"дабл", mn:"Хоёр дахин"},
      {ic:"🔅", en:"Few", pron:"фью", mn:"Цөөн"},
      {ic:"🔢", en:"Many", pron:"мэни", mn:"Олон"},
      {ic:"➕", en:"Some", pron:"сам", mn:"Хэдэн / зарим"},
      {ic:"💯", en:"All", pron:"ол", mn:"Бүгд"},
      {ic:"🚫", en:"None", pron:"нан", mn:"Нэг ч биш"},
      {ic:"🔂", en:"Each", pron:"ийч", mn:"Тус бүр"},
      {ic:"👥", en:"Both", pron:"боус", mn:"Хоёул"}
    ]
  },
  {
    id:'countries', title:"Улс & дэлхий", level:"A2", icon:"🌍",
    words:[
      {ic:"🏳️", en:"Country", pron:"кантри", mn:"Улс"},
      {ic:"🌍", en:"World", pron:"вөрлд", mn:"Дэлхий"},
      {ic:"🚩", en:"Flag", pron:"флэг", mn:"Туг"},
      {ic:"🛂", en:"Border", pron:"бордэр", mn:"Хил"},
      {ic:"🏛️", en:"Capital", pron:"кэпитл", mn:"Нийслэл"},
      {ic:"🌐", en:"Foreign", pron:"форин", mn:"Гадаад"},
      {ic:"🗣️", en:"Language", pron:"лэнгвиж", mn:"Хэл"},
      {ic:"🎭", en:"Culture", pron:"калчэр", mn:"Соёл"},
      {ic:"🗺️", en:"Continent", pron:"континэнт", mn:"Тив"},
      {ic:"📍", en:"Region", pron:"рийжэн", mn:"Бүс нутаг"}
    ]
  },
  {
    id:'nationalities', title:"Хэл & үндэстэн", level:"A2", icon:"🗣️",
    words:[
      {ic:"🇬🇧", en:"English", pron:"инглиш", mn:"Англи (хэл)"},
      {ic:"🇨🇳", en:"Chinese", pron:"чайнийз", mn:"Хятад"},
      {ic:"🇷🇺", en:"Russian", pron:"рашн", mn:"Орос"},
      {ic:"🇲🇳", en:"Mongolian", pron:"монголиан", mn:"Монгол"},
      {ic:"🇺🇸", en:"American", pron:"эмэрикэн", mn:"Америк"},
      {ic:"🇯🇵", en:"Japanese", pron:"жэпэнийз", mn:"Япон"},
      {ic:"🇰🇷", en:"Korean", pron:"корийн", mn:"Солонгос"},
      {ic:"🇩🇪", en:"German", pron:"жөрмэн", mn:"Герман"},
      {ic:"🇫🇷", en:"French", pron:"фрэнч", mn:"Франц"},
      {ic:"🇪🇸", en:"Spanish", pron:"спэниш", mn:"Испани"}
    ]
  },
  {
    id:'musicart', title:"Хөгжим & урлаг", level:"A2", icon:"🎵",
    words:[
      {ic:"🎵", en:"Music", pron:"мьюзик", mn:"Хөгжим"},
      {ic:"🎶", en:"Song", pron:"сонг", mn:"Дуу"},
      {ic:"🎤", en:"Singer", pron:"сингэр", mn:"Дуучин"},
      {ic:"🎸", en:"Guitar", pron:"гитар", mn:"Гитар"},
      {ic:"🎹", en:"Piano", pron:"пиано", mn:"Төгөлдөр хуур"},
      {ic:"🥁", en:"Drum", pron:"драм", mn:"Бөмбөр"},
      {ic:"🎨", en:"Art", pron:"арт", mn:"Урлаг"},
      {ic:"🖼️", en:"Painting", pron:"пэйнтинг", mn:"Зураг"},
      {ic:"👨‍🎨", en:"Artist", pron:"артист", mn:"Уран бүтээлч"},
      {ic:"💃", en:"Dance", pron:"данс", mn:"Бүжиг"}
    ]
  },
  {
    id:'sports2', title:"Спорт 2", level:"A2", icon:"🏅",
    words:[
      {ic:"🎾", en:"Tennis", pron:"тэнис", mn:"Теннис"},
      {ic:"⛳", en:"Golf", pron:"голф", mn:"Гольф"},
      {ic:"🥊", en:"Boxing", pron:"боксинг", mn:"Бокс"},
      {ic:"🚴", en:"Cycling", pron:"сайклинг", mn:"Дугуйн спорт"},
      {ic:"⛷️", en:"Skiing", pron:"скиинг", mn:"Цанаар гулгах"},
      {ic:"🏋️", en:"Gym", pron:"жим", mn:"Фитнес заал"},
      {ic:"📋", en:"Coach", pron:"коуч", mn:"Дасгалжуулагч"},
      {ic:"⚽", en:"Match", pron:"мэтч", mn:"Тэмцээн"},
      {ic:"🔢", en:"Score", pron:"скор", mn:"Оноо"},
      {ic:"🏅", en:"Medal", pron:"мэдл", mn:"Медаль"}
    ]
  },
  {
    id:'holidays', title:"Баяр ёслол", level:"B1", icon:"🎉",
    words:[
      {ic:"🎪", en:"Festival", pron:"фэстивл", mn:"Наадам / баяр"},
      {ic:"🎉", en:"Celebration", pron:"сэлэбрэйшн", mn:"Тэмдэглэл"},
      {ic:"📿", en:"Tradition", pron:"трэдишн", mn:"Уламжлал"},
      {ic:"🎁", en:"Gift", pron:"гифт", mn:"Бэлэг"},
      {ic:"🕯️", en:"Candle", pron:"кэндл", mn:"Лаа"},
      {ic:"🎆", en:"Fireworks", pron:"файэрвөркс", mn:"Салют"},
      {ic:"🎗️", en:"Ceremony", pron:"сэрэмони", mn:"Ёслол"},
      {ic:"🧑", en:"Guest", pron:"гэст", mn:"Зочин"},
      {ic:"⭐", en:"Wish", pron:"виш", mn:"Хүсэл ерөөл"},
      {ic:"🥳", en:"Party", pron:"парти", mn:"Үдэшлэг"}
    ]
  },
  {
    id:'education', title:"Боловсрол", level:"B1", icon:"🎓",
    words:[
      {ic:"🎒", en:"Student", pron:"стюдэнт", mn:"Оюутан / сурагч"},
      {ic:"🏛️", en:"University", pron:"юнивөрсити", mn:"Их сургууль"},
      {ic:"🏫", en:"College", pron:"колэж", mn:"Коллеж"},
      {ic:"📜", en:"Degree", pron:"дигрий", mn:"Зэрэг"},
      {ic:"📚", en:"Subject", pron:"сабжэкт", mn:"Хичээл / сэдэв"},
      {ic:"💯", en:"Grade", pron:"грэйд", mn:"Дүн"},
      {ic:"🔬", en:"Science", pron:"сайэнс", mn:"Шинжлэх ухаан"},
      {ic:"📜", en:"History", pron:"хистори", mn:"Түүх"},
      {ic:"🌍", en:"Geography", pron:"жиогрэфи", mn:"Газарзүй"},
      {ic:"🧠", en:"Knowledge", pron:"нолиж", mn:"Мэдлэг"}
    ]
  },
  {
    id:'politics', title:"Улс төр", level:"B1", icon:"🏛️",
    words:[
      {ic:"🏛️", en:"Government", pron:"гавэрнмэнт", mn:"Засгийн газар"},
      {ic:"👔", en:"President", pron:"прэзидэнт", mn:"Ерөнхийлөгч"},
      {ic:"⚖️", en:"Law", pron:"ло", mn:"Хууль"},
      {ic:"🗳️", en:"Vote", pron:"воут", mn:"Санал өгөх"},
      {ic:"🗳️", en:"Election", pron:"илэкшн", mn:"Сонгууль"},
      {ic:"🎖️", en:"Leader", pron:"лийдэр", mn:"Удирдагч"},
      {ic:"📋", en:"Policy", pron:"полиси", mn:"Бодлого"},
      {ic:"🎌", en:"Party", pron:"парти", mn:"Нам"},
      {ic:"👤", en:"Minister", pron:"министэр", mn:"Сайд"},
      {ic:"🧑", en:"Citizen", pron:"ситизн", mn:"Иргэн"}
    ]
  },
  {
    id:'economy', title:"Эдийн засаг", level:"B1", icon:"💹",
    words:[
      {ic:"💹", en:"Economy", pron:"иконэми", mn:"Эдийн засаг"},
      {ic:"🤝", en:"Trade", pron:"трэйд", mn:"Худалдаа"},
      {ic:"🧾", en:"Tax", pron:"тэкс", mn:"Татвар"},
      {ic:"📈", en:"Profit", pron:"профит", mn:"Ашиг"},
      {ic:"💰", en:"Cost", pron:"кост", mn:"Зардал"},
      {ic:"📊", en:"Invest", pron:"инвэст", mn:"Хөрөнгө оруулах"},
      {ic:"📒", en:"Budget", pron:"бажэт", mn:"Төсөв"},
      {ic:"💵", en:"Income", pron:"инкам", mn:"Орлого"},
      {ic:"🏦", en:"Loan", pron:"лоун", mn:"Зээл"},
      {ic:"📉", en:"Debt", pron:"дэт", mn:"Өр"}
    ]
  },
  {
    id:'science', title:"Шинжлэх ухаан", level:"B1", icon:"🔬",
    words:[
      {ic:"🧪", en:"Experiment", pron:"икспэримэнт", mn:"Туршилт"},
      {ic:"⚡", en:"Energy", pron:"энэржи", mn:"Эрчим хүч"},
      {ic:"🌍", en:"Gravity", pron:"грэвити", mn:"Таталцал"},
      {ic:"⚛️", en:"Atom", pron:"этом", mn:"Атом"},
      {ic:"🔬", en:"Cell", pron:"сэл", mn:"Эс"},
      {ic:"🧪", en:"Chemical", pron:"кэмикл", mn:"Хими бодис"},
      {ic:"🪐", en:"Planet", pron:"плэнэт", mn:"Гараг"},
      {ic:"🚀", en:"Space", pron:"спэйс", mn:"Сансар"},
      {ic:"💨", en:"Gas", pron:"гэс", mn:"Хий"},
      {ic:"💧", en:"Liquid", pron:"ликвид", mn:"Шингэн"}
    ]
  },
  {
    id:'adj4', title:"Тэмдэг нэр 4", level:"B1", icon:"🎭",
    words:[
      {ic:"🤩", en:"Wonderful", pron:"вандэрфул", mn:"Гайхалтай"},
      {ic:"😱", en:"Terrible", pron:"тэрибл", mn:"Аймшигтай"},
      {ic:"😐", en:"Serious", pron:"сириэс", mn:"Ноцтой"},
      {ic:"🤨", en:"Strange", pron:"стрэйнж", mn:"Хачин"},
      {ic:"🙂", en:"Normal", pron:"нормал", mn:"Хэвийн"},
      {ic:"⭐", en:"Special", pron:"спэшл", mn:"Онцгой"},
      {ic:"🌿", en:"Natural", pron:"нэчрэл", mn:"Байгалийн"},
      {ic:"🏙️", en:"Modern", pron:"модэрн", mn:"Орчин үеийн"},
      {ic:"🏺", en:"Ancient", pron:"эйншэнт", mn:"Эртний"},
      {ic:"🛋️", en:"Comfortable", pron:"комфортэбл", mn:"Тухтай"}
    ]
  },
  {
    id:'verbs6', title:"Үйл үг 6", level:"B1", icon:"🔨",
    words:[
      {ic:"✨", en:"Create", pron:"криэйт", mn:"Бүтээх"},
      {ic:"🏗️", en:"Build", pron:"билд", mn:"Барих"},
      {ic:"💥", en:"Destroy", pron:"дистрой", mn:"Устгах"},
      {ic:"🛡️", en:"Protect", pron:"протэкт", mn:"Хамгаалах"},
      {ic:"💾", en:"Save", pron:"сэйв", mn:"Хадгалах / аврах"},
      {ic:"🗑️", en:"Waste", pron:"вэйст", mn:"Дэмий үрэх"},
      {ic:"📈", en:"Improve", pron:"импрүв", mn:"Сайжруулах"},
      {ic:"📉", en:"Reduce", pron:"ридьюс", mn:"Бууруулах"},
      {ic:"⬆️", en:"Increase", pron:"инкрийс", mn:"Нэмэгдүүлэх"},
      {ic:"🌱", en:"Develop", pron:"дивэлоп", mn:"Хөгжүүлэх"}
    ]
  },
  {
    id:'commverbs', title:"Харилцааны үйл", level:"B1", icon:"🗨️",
    words:[
      {ic:"❓", en:"Ask", pron:"аск", mn:"Асуух"},
      {ic:"🗣️", en:"Tell", pron:"тэл", mn:"Хэлэх"},
      {ic:"💬", en:"Say", pron:"сэй", mn:"Хэлэх / өгүүлэх"},
      {ic:"🗨️", en:"Talk", pron:"ток", mn:"Ярих"},
      {ic:"👥", en:"Discuss", pron:"дискас", mn:"Хэлэлцэх"},
      {ic:"😤", en:"Argue", pron:"аргью", mn:"Маргах"},
      {ic:"😠", en:"Complain", pron:"комплэйн", mn:"Гомдоллох"},
      {ic:"🙇", en:"Apologize", pron:"эположайз", mn:"Уучлалт гуйх"},
      {ic:"💭", en:"Mention", pron:"мэншн", mn:"Дурдах"},
      {ic:"↩️", en:"Reply", pron:"риплай", mn:"Хариулах"}
    ]
  },
  {
    id:'feelings3', title:"Сэтгэл хөдлөл 3", level:"B1", icon:"😲",
    words:[
      {ic:"😲", en:"Surprised", pron:"сэрпрайзд", mn:"Гайхсан"},
      {ic:"😞", en:"Disappointed", pron:"дисэпойнтид", mn:"Урам хугарсан"},
      {ic:"😊", en:"Satisfied", pron:"сэтисфайд", mn:"Сэтгэл хангалуун"},
      {ic:"😤", en:"Frustrated", pron:"фрастрэйтид", mn:"Бухимдсан"},
      {ic:"🤩", en:"Amazed", pron:"эмэйзд", mn:"Гайхширсан"},
      {ic:"😳", en:"Ashamed", pron:"эшэймд", mn:"Ичсэн"},
      {ic:"😌", en:"Relieved", pron:"рилийвд", mn:"Санаа амарсан"},
      {ic:"😒", en:"Annoyed", pron:"эннойд", mn:"Ядаргаатай"},
      {ic:"😄", en:"Delighted", pron:"дилайтид", mn:"Баясан"},
      {ic:"😢", en:"Upset", pron:"апсэт", mn:"Гомдсон"}
    ]
  },
  {
    id:'shapes', title:"Дүрс", level:"A1", icon:"🔷",
    words:[
      {ic:"⭕", en:"Circle", pron:"сөркл", mn:"Тойрог"},
      {ic:"⬜", en:"Square", pron:"сквэр", mn:"Дөрвөлжин"},
      {ic:"🔺", en:"Triangle", pron:"трайэнгл", mn:"Гурвалжин"},
      {ic:"▭", en:"Rectangle", pron:"рэктэнгл", mn:"Тэгш өнцөгт"},
      {ic:"➖", en:"Line", pron:"лайн", mn:"Шугам"},
      {ic:"〰️", en:"Curve", pron:"көрв", mn:"Муруй"},
      {ic:"🔷", en:"Shape", pron:"шэйп", mn:"Хэлбэр"},
      {ic:"⚪", en:"Round", pron:"раунд", mn:"Дугуй"},
      {ic:"📃", en:"Flat", pron:"флэт", mn:"Хавтгай"},
      {ic:"📐", en:"Edge", pron:"эж", mn:"Ирмэг"}
    ]
  },
  {
    id:'relationships', title:"Харилцаа холбоо", level:"B1", icon:"💞",
    words:[
      {ic:"💞", en:"Relationship", pron:"рилэйшншип", mn:"Харилцаа"},
      {ic:"💍", en:"Marriage", pron:"мэрриж", mn:"Гэрлэлт"},
      {ic:"👫", en:"Couple", pron:"капл", mn:"Хос"},
      {ic:"🤝", en:"Partner", pron:"партнэр", mn:"Хамтрагч"},
      {ic:"💐", en:"Date", pron:"дэйт", mn:"Болзоо"},
      {ic:"🤲", en:"Trust", pron:"траст", mn:"Итгэлцэл"},
      {ic:"🙏", en:"Respect", pron:"риспэкт", mn:"Хүндлэл"},
      {ic:"💗", en:"Care", pron:"кэр", mn:"Халамж"},
      {ic:"🫂", en:"Support", pron:"сэпорт", mn:"Дэмжлэг"},
      {ic:"👭", en:"Friendship", pron:"фрэндшип", mn:"Нөхөрлөл"}
    ]
  },
  {
    id:'character', title:"Зан төлөв", level:"B1", icon:"🎭",
    words:[
      {ic:"🎁", en:"Generous", pron:"жэнэрэс", mn:"Өгөөмөр"},
      {ic:"🙄", en:"Selfish", pron:"сэлфиш", mn:"Хувиа хичээсэн"},
      {ic:"🎩", en:"Polite", pron:"полайт", mn:"Эелдэг"},
      {ic:"😠", en:"Rude", pron:"рүд", mn:"Бүдүүлэг"},
      {ic:"😄", en:"Cheerful", pron:"чиэрфул", mn:"Хөгжөөнтэй"},
      {ic:"🦅", en:"Independent", pron:"индипэндэнт", mn:"Бие даасан"},
      {ic:"🎯", en:"Ambitious", pron:"эмбишэс", mn:"Эрмэлзэлтэй"},
      {ic:"✅", en:"Reliable", pron:"рилайэбл", mn:"Найдвартай"},
      {ic:"🐂", en:"Stubborn", pron:"стабэрн", mn:"Зөрүүд"},
      {ic:"🕊️", en:"Gentle", pron:"жэнтл", mn:"Зөөлөн"}
    ]
  },
  {
    id:'psychology', title:"Сэтгэл зүй", level:"B2", icon:"🧩",
    words:[
      {ic:"💭", en:"Thought", pron:"сот", mn:"Бодол"},
      {ic:"💗", en:"Feeling", pron:"фийлинг", mn:"Мэдрэмж"},
      {ic:"🎭", en:"Emotion", pron:"имоушн", mn:"Сэтгэл хөдлөл"},
      {ic:"🧠", en:"Memory", pron:"мэмори", mn:"Дурсамж / ой"},
      {ic:"🚶", en:"Behavior", pron:"бихэйвьёр", mn:"Зан авир"},
      {ic:"😏", en:"Attitude", pron:"этитюд", mn:"Хандлага"},
      {ic:"🔥", en:"Motivation", pron:"мотивэйшн", mn:"Урам зориг"},
      {ic:"😰", en:"Stress", pron:"стрэс", mn:"Стресс"},
      {ic:"😨", en:"Fear", pron:"фиэр", mn:"Айдас"},
      {ic:"🌟", en:"Desire", pron:"дизайэр", mn:"Хүсэл эрмэлзэл"}
    ]
  },
  {
    id:'selfdev', title:"Хувь хүний хөгжил", level:"B2", icon:"🌱",
    words:[
      {ic:"🌱", en:"Growth", pron:"гроус", mn:"Өсөлт / хөгжил"},
      {ic:"🎯", en:"Discipline", pron:"дисиплин", mn:"Сахилга бат"},
      {ic:"🔍", en:"Focus", pron:"фоукэс", mn:"Анхаарал төвлөрүүлэлт"},
      {ic:"💪", en:"Confidence", pron:"конфидэнс", mn:"Өөртөө итгэх итгэл"},
      {ic:"💦", en:"Effort", pron:"эфорт", mn:"Хүч чармайлт"},
      {ic:"📈", en:"Progress", pron:"прогрэс", mn:"Ахиц"},
      {ic:"🌟", en:"Potential", pron:"потэншл", mn:"Чадавх"},
      {ic:"🧠", en:"Mindset", pron:"майндсэт", mn:"Сэтгэлгээ"},
      {ic:"🧭", en:"Purpose", pron:"пөрпэс", mn:"Зорилго"},
      {ic:"⚖️", en:"Balance", pron:"бэлэнс", mn:"Тэнцвэр"}
    ]
  },
  {
    id:'comm2', title:"Харилцаа 2", level:"B1", icon:"📢",
    words:[
      {ic:"💬", en:"Conversation", pron:"конвэрсэйшн", mn:"Яриа"},
      {ic:"📩", en:"Message", pron:"мэсэж", mn:"Мессеж"},
      {ic:"💡", en:"Advice", pron:"эдвайс", mn:"Зөвлөгөө"},
      {ic:"🗯️", en:"Opinion", pron:"опиньон", mn:"Санал бодол"},
      {ic:"🤝", en:"Agreement", pron:"эгриймэнт", mn:"Тохиролцоо"},
      {ic:"😤", en:"Argument", pron:"аргюмэнт", mn:"Маргаан"},
      {ic:"🤫", en:"Silence", pron:"сайлэнс", mn:"Чимээгүй байдал"},
      {ic:"🗣️", en:"Gossip", pron:"госип", mn:"Хов жив"},
      {ic:"😂", en:"Joke", pron:"жоук", mn:"Хошигнол"},
      {ic:"👂", en:"Rumor", pron:"рүмэр", mn:"Цуурхал"}
    ]
  },
  {
    id:'work2', title:"Ажил 2", level:"B1", icon:"🏢",
    words:[
      {ic:"👷", en:"Employee", pron:"эмплойи", mn:"Ажилтан"},
      {ic:"👔", en:"Boss", pron:"бос", mn:"Дарга"},
      {ic:"🧑‍🤝‍🧑", en:"Colleague", pron:"колийг", mn:"Хамт ажиллагч"},
      {ic:"📈", en:"Career", pron:"кэриэр", mn:"Ажил мэргэжлийн зам"},
      {ic:"🎙️", en:"Interview", pron:"интэрвью", mn:"Ярилцлага"},
      {ic:"🛠️", en:"Skill", pron:"скил", mn:"Ур чадвар"},
      {ic:"✅", en:"Task", pron:"таск", mn:"Даалгавар"},
      {ic:"🤝", en:"Teamwork", pron:"тиймвөрк", mn:"Багийн ажиллагаа"},
      {ic:"⬆️", en:"Promotion", pron:"промоушн", mn:"Албан тушаал ахилт"},
      {ic:"🚪", en:"Resign", pron:"ризайн", mn:"Ажлаас гарах"}
    ]
  },
  {
    id:'cooking2', title:"Хоол хийх 2", level:"A2", icon:"🍳",
    words:[
      {ic:"📖", en:"Recipe", pron:"рэсипи", mn:"Жор"},
      {ic:"🧂", en:"Ingredient", pron:"ингрийдиэнт", mn:"Орц"},
      {ic:"🍽️", en:"Meal", pron:"мийл", mn:"Хоол"},
      {ic:"🍳", en:"Breakfast", pron:"брэкфаст", mn:"Өглөөний хоол"},
      {ic:"🥪", en:"Lunch", pron:"ланч", mn:"Өдрийн хоол"},
      {ic:"🍲", en:"Dinner", pron:"диннэр", mn:"Оройн хоол"},
      {ic:"🍿", en:"Snack", pron:"снэк", mn:"Зууш"},
      {ic:"🍛", en:"Dish", pron:"диш", mn:"Таваг хоол"},
      {ic:"📋", en:"Menu", pron:"мэню", mn:"Цэс"},
      {ic:"🍰", en:"Dessert", pron:"дизөрт", mn:"Амттан"}
    ]
  },
  {
    id:'time3', title:"Цаг хугацаа 3", level:"A2", icon:"⏳",
    words:[
      {ic:"⏱️", en:"Moment", pron:"моумэнт", mn:"Агшин"},
      {ic:"📅", en:"Period", pron:"пириэд", mn:"Үе / хугацаа"},
      {ic:"🏛️", en:"Century", pron:"сэнчэри", mn:"Зуун"},
      {ic:"🔟", en:"Decade", pron:"дэкэйд", mn:"Арван жил"},
      {ic:"🌞", en:"Noon", pron:"нүн", mn:"Үд"},
      {ic:"🌃", en:"Midnight", pron:"миднайт", mn:"Шөнө дунд"},
      {ic:"🌆", en:"Evening", pron:"ийвнинг", mn:"Орой"},
      {ic:"🌤️", en:"Afternoon", pron:"афтэрнүн", mn:"Үдээс хойш"},
      {ic:"🌙", en:"Tonight", pron:"тунайт", mn:"Өнөө орой"},
      {ic:"🌅", en:"Dawn", pron:"дон", mn:"Үүр цайх"}
    ]
  },
  {
    id:'verbs7', title:"Үйл үг 7", level:"A2", icon:"✋",
    words:[
      {ic:"🎁", en:"Give", pron:"гив", mn:"Өгөх"},
      {ic:"✋", en:"Take", pron:"тэйк", mn:"Авах"},
      {ic:"📦", en:"Bring", pron:"бринг", mn:"Авчрах"},
      {ic:"📤", en:"Send", pron:"сэнд", mn:"Илгээх"},
      {ic:"📥", en:"Receive", pron:"рисийв", mn:"Хүлээн авах"},
      {ic:"🔐", en:"Keep", pron:"кийп", mn:"Хадгалах / байлгах"},
      {ic:"❌", en:"Lose", pron:"лүз", mn:"Алдах"},
      {ic:"🔍", en:"Find", pron:"файнд", mn:"Олох"},
      {ic:"👀", en:"Show", pron:"шоу", mn:"Үзүүлэх"},
      {ic:"✔️", en:"Choose", pron:"чүз", mn:"Сонгох"}
    ]
  },
  {
    id:'verbs8', title:"Үйл үг 8", level:"B1", icon:"🔧",
    words:[
      {ic:"🔧", en:"Fix", pron:"фикс", mn:"Засах"},
      {ic:"💥", en:"Break", pron:"брэйк", mn:"Эвдэх"},
      {ic:"🔄", en:"Turn", pron:"төрн", mn:"Эргүүлэх"},
      {ic:"📦", en:"Move", pron:"мүв", mn:"Хөдлөх / зөөх"},
      {ic:"🛠️", en:"Use", pron:"юз", mn:"Ашиглах"},
      {ic:"🙏", en:"Need", pron:"нийд", mn:"Хэрэгтэй байх"},
      {ic:"🌟", en:"Want", pron:"вонт", mn:"Хүсэх"},
      {ic:"👍", en:"Prefer", pron:"прифөр", mn:"Илүүд үзэх"},
      {ic:"🚫", en:"Avoid", pron:"эвойд", mn:"Зайлсхийх"},
      {ic:"✅", en:"Allow", pron:"элау", mn:"Зөвшөөрөх"}
    ]
  },
  {
    id:'adj5', title:"Тэмдэг нэр 5", level:"A2", icon:"🎨",
    words:[
      {ic:"🙂", en:"Nice", pron:"найс", mn:"Сайхан"},
      {ic:"💕", en:"Lovely", pron:"лавли", mn:"Хөөрхөн"},
      {ic:"🌸", en:"Pretty", pron:"прити", mn:"Гоё"},
      {ic:"🥰", en:"Cute", pron:"кьют", mn:"Өхөөрдөм"},
      {ic:"😎", en:"Cool", pron:"күл", mn:"Гоё"},
      {ic:"🤩", en:"Awesome", pron:"осэм", mn:"Гайхалтай"},
      {ic:"😴", en:"Boring", pron:"боринг", mn:"Уйтгартай"},
      {ic:"🧐", en:"Interesting", pron:"интрэстинг", mn:"Сонирхолтой"},
      {ic:"🎉", en:"Exciting", pron:"иксайтинг", mn:"Догдлуулам"},
      {ic:"✨", en:"Amazing", pron:"эмэйзинг", mn:"Гайхамшигтай"}
    ]
  },
  {
    id:'adverbs', title:"Дайвар үг", level:"B1", icon:"⏩",
    words:[
      {ic:"⚡", en:"Quickly", pron:"квикли", mn:"Хурдан"},
      {ic:"🐢", en:"Slowly", pron:"слоули", mn:"Удаан"},
      {ic:"🧐", en:"Carefully", pron:"кэрфули", mn:"Болгоомжтой"},
      {ic:"👍", en:"Easily", pron:"ийзили", mn:"Хялбархан"},
      {ic:"😓", en:"Hardly", pron:"хардли", mn:"Бараг үгүй"},
      {ic:"⚡", en:"Suddenly", pron:"садэнли", mn:"Гэнэт"},
      {ic:"🏁", en:"Finally", pron:"файнали", mn:"Эцэст нь"},
      {ic:"🤔", en:"Probably", pron:"пробэбли", mn:"Магадгүй"},
      {ic:"🎯", en:"Exactly", pron:"игзэктли", mn:"Яг"},
      {ic:"⭐", en:"Especially", pron:"испэшэли", mn:"Ялангуяа"}
    ]
  },
  {
    id:'elements', title:"Байгалийн үзэгдэл", level:"A2", icon:"🔥",
    words:[
      {ic:"🔥", en:"Fire", pron:"файэр", mn:"Гал"},
      {ic:"🌍", en:"Earth", pron:"өрс", mn:"Газар / дэлхий"},
      {ic:"💨", en:"Air", pron:"эйр", mn:"Агаар"},
      {ic:"💡", en:"Light", pron:"лайт", mn:"Гэрэл"},
      {ic:"🌑", en:"Shadow", pron:"шэдоу", mn:"Сүүдэр"},
      {ic:"💨", en:"Smoke", pron:"смоук", mn:"Утаа"},
      {ic:"🌫️", en:"Dust", pron:"даст", mn:"Тоос"},
      {ic:"🟤", en:"Mud", pron:"мад", mn:"Шавар"},
      {ic:"🏖️", en:"Sand", pron:"сэнд", mn:"Элс"},
      {ic:"🪨", en:"Rock", pron:"рок", mn:"Хад"}
    ]
  },
  {
    id:'relverbs', title:"Харилцааны үйл", level:"B1", icon:"💗",
    words:[
      {ic:"🙏", en:"Forgive", pron:"форгив", mn:"Уучлах"},
      {ic:"🤗", en:"Hug", pron:"хаг", mn:"Тэвэрэх"},
      {ic:"💋", en:"Kiss", pron:"кис", mn:"Үнсэх"},
      {ic:"💍", en:"Marry", pron:"мэрри", mn:"Гэрлэх"},
      {ic:"💔", en:"Divorce", pron:"диворс", mn:"Салах (гэр бүл)"},
      {ic:"🤝", en:"Share", pron:"шэр", mn:"Хуваалцах"},
      {ic:"🙏", en:"Thank", pron:"сэнк", mn:"Талархах"},
      {ic:"👋", en:"Greet", pron:"грийт", mn:"Мэндлэх"},
      {ic:"💌", en:"Invite", pron:"инвайт", mn:"Урих"},
      {ic:"🚪", en:"Visit", pron:"визит", mn:"Зочлох"}
    ]
  },
  {
    id:'fruits2', title:"Жимс 2", level:"A2", icon:"🍑",
    words:[
      {ic:"🍐", en:"Pear", pron:"пэр", mn:"Лийр"},
      {ic:"🍑", en:"Peach", pron:"пийч", mn:"Тоор"},
      {ic:"🍒", en:"Cherry", pron:"чэрри", mn:"Интоор"},
      {ic:"🍓", en:"Strawberry", pron:"стробэрри", mn:"Гүзээлзгэнэ"},
      {ic:"🍍", en:"Pineapple", pron:"пайнэпл", mn:"Хан боргоцой"},
      {ic:"🥭", en:"Mango", pron:"мэнго", mn:"Манго"},
      {ic:"🥥", en:"Coconut", pron:"коконат", mn:"Кокос"},
      {ic:"🥝", en:"Kiwi", pron:"киви", mn:"Киви"},
      {ic:"🫐", en:"Plum", pron:"плам", mn:"Чавга"},
      {ic:"🍈", en:"Melon", pron:"мэлон", mn:"Амтат гуа"}
    ]
  },
  {
    id:'veg2', title:"Хүнсний ногоо 2", level:"A2", icon:"🥦",
    words:[
      {ic:"🥒", en:"Cucumber", pron:"кьюкамбэр", mn:"Өргөст хэмх"},
      {ic:"🥬", en:"Cabbage", pron:"кэбиж", mn:"Байцаа"},
      {ic:"🧄", en:"Garlic", pron:"гарлик", mn:"Сармис"},
      {ic:"🌶️", en:"Pepper", pron:"пэпэр", mn:"Чинжүү"},
      {ic:"🌽", en:"Corn", pron:"корн", mn:"Эрдэнэ шиш"},
      {ic:"🫘", en:"Bean", pron:"бийн", mn:"Шош"},
      {ic:"🟢", en:"Pea", pron:"пий", mn:"Вандуй"},
      {ic:"🎃", en:"Pumpkin", pron:"памкин", mn:"Хулуу"},
      {ic:"🥬", en:"Spinach", pron:"спинэч", mn:"Бууцай"},
      {ic:"🥗", en:"Lettuce", pron:"лэтис", mn:"Салатны навч"}
    ]
  },
  {
    id:'animals3', title:"Амьтад 3", level:"A2", icon:"🐾",
    words:[
      {ic:"🐷", en:"Pig", pron:"пиг", mn:"Гахай"},
      {ic:"🐐", en:"Goat", pron:"гоут", mn:"Ямаа"},
      {ic:"🫏", en:"Donkey", pron:"донки", mn:"Илжиг"},
      {ic:"🐫", en:"Camel", pron:"кэмл", mn:"Тэмээ"},
      {ic:"🐀", en:"Rat", pron:"рэт", mn:"Харх"},
      {ic:"🐸", en:"Frog", pron:"фрог", mn:"Мэлхий"},
      {ic:"🐢", en:"Turtle", pron:"төртл", mn:"Яст мэлхий"},
      {ic:"🐬", en:"Dolphin", pron:"долфин", mn:"Далайн гахай"},
      {ic:"🐋", en:"Whale", pron:"вэйл", mn:"Халим"},
      {ic:"🐊", en:"Crocodile", pron:"крокодайл", mn:"Матар"}
    ]
  },
  {
    id:'jobs2', title:"Мэргэжил 2", level:"A2", icon:"💼",
    words:[
      {ic:"⚖️", en:"Lawyer", pron:"лоер", mn:"Хуульч"},
      {ic:"🍽️", en:"Waiter", pron:"вэйтэр", mn:"Зөөгч"},
      {ic:"👨‍🍳", en:"Chef", pron:"шэф", mn:"Тогооч (ахлах)"},
      {ic:"✈️", en:"Pilot", pron:"пайлот", mn:"Нисгэгч"},
      {ic:"🪖", en:"Soldier", pron:"солжэр", mn:"Цэрэг"},
      {ic:"🔬", en:"Scientist", pron:"сайэнтист", mn:"Эрдэмтэн"},
      {ic:"💃", en:"Dancer", pron:"дансэр", mn:"Бүжигчин"},
      {ic:"✍️", en:"Writer", pron:"райтэр", mn:"Зохиолч"},
      {ic:"🎬", en:"Actor", pron:"эктэр", mn:"Жүжигчин"},
      {ic:"📷", en:"Photographer", pron:"фотогрэфэр", mn:"Гэрэл зурагчин"}
    ]
  },
  {
    id:'tools', title:"Багаж хэрэгсэл", level:"A2", icon:"🔨",
    words:[
      {ic:"🔨", en:"Hammer", pron:"хэмэр", mn:"Алх"},
      {ic:"📌", en:"Nail", pron:"нэйл", mn:"Хадаас"},
      {ic:"🔩", en:"Screw", pron:"скрү", mn:"Шураг"},
      {ic:"🪚", en:"Saw", pron:"со", mn:"Хөрөө"},
      {ic:"🛠️", en:"Drill", pron:"дрил", mn:"Өрөм"},
      {ic:"🪢", en:"Rope", pron:"роуп", mn:"Олс"},
      {ic:"📏", en:"Tape", pron:"тэйп", mn:"Скоч / тууз"},
      {ic:"🖌️", en:"Brush", pron:"браш", mn:"Бийр / сойз"},
      {ic:"🪜", en:"Ladder", pron:"лэдэр", mn:"Шат (зөөврийн)"},
      {ic:"🧴", en:"Glue", pron:"глү", mn:"Цавуу"}
    ]
  },
  {
    id:'bathroom', title:"Угаалгын өрөө", level:"A2", icon:"🚿",
    words:[
      {ic:"🚽", en:"Toilet", pron:"тойлэт", mn:"Жорлон"},
      {ic:"🚿", en:"Shower", pron:"шауэр", mn:"Шүршүүр"},
      {ic:"🧼", en:"Soap", pron:"соуп", mn:"Саван"},
      {ic:"🧺", en:"Towel", pron:"тауэл", mn:"Алчуур"},
      {ic:"🪥", en:"Toothbrush", pron:"түсбраш", mn:"Шүдний сойз"},
      {ic:"🧴", en:"Toothpaste", pron:"түспэйст", mn:"Шүдний оо"},
      {ic:"🧴", en:"Shampoo", pron:"шэмпү", mn:"Шампунь"},
      {ic:"💈", en:"Comb", pron:"коум", mn:"Сам"},
      {ic:"🪒", en:"Razor", pron:"рэйзэр", mn:"Сахлын хутга"},
      {ic:"🧻", en:"Tissue", pron:"тишю", mn:"Салфетка"}
    ]
  },
  {
    id:'bedroom', title:"Унтлагын өрөө", level:"A2", icon:"🛏️",
    words:[
      {ic:"🛏️", en:"Pillow", pron:"пилоу", mn:"Дэр"},
      {ic:"🧣", en:"Blanket", pron:"блэнкэт", mn:"Хөнжил"},
      {ic:"🛏️", en:"Sheet", pron:"шийт", mn:"Дэвсгэр"},
      {ic:"🚪", en:"Wardrobe", pron:"вордроуб", mn:"Хувцасны шүүгээ"},
      {ic:"🗄️", en:"Drawer", pron:"дроэр", mn:"Шургуулга"},
      {ic:"🛋️", en:"Cushion", pron:"кушн", mn:"Дэвсгэр дэр"},
      {ic:"🧶", en:"Rug", pron:"раг", mn:"Бяцхан хивс"},
      {ic:"🏺", en:"Vase", pron:"ваз", mn:"Ваар"},
      {ic:"🖼️", en:"Frame", pron:"фрэйм", mn:"Хүрээ"},
      {ic:"⏰", en:"Alarm", pron:"эларм", mn:"Сэрүүлэг"}
    ]
  },
  {
    id:'studyverbs', title:"Сурах үйл", level:"B1", icon:"📖",
    words:[
      {ic:"📚", en:"Study", pron:"стади", mn:"Судлах"},
      {ic:"🔁", en:"Practice", pron:"прэктис", mn:"Дадлагажих"},
      {ic:"🔍", en:"Review", pron:"ривью", mn:"Давтах"},
      {ic:"🧠", en:"Memorize", pron:"мэморайз", mn:"Цээжлэх"},
      {ic:"📝", en:"Test", pron:"тэст", mn:"Шалгах"},
      {ic:"✅", en:"Pass", pron:"пас", mn:"Тэнцэх"},
      {ic:"❌", en:"Fail", pron:"фэйл", mn:"Унах (шалгалтад)"},
      {ic:"🎓", en:"Graduate", pron:"грэжуэйт", mn:"Төгсөх"},
      {ic:"📖", en:"Revise", pron:"ривайз", mn:"Нягтлах / давтах"},
      {ic:"🎯", en:"Concentrate", pron:"консэнтрэйт", mn:"Анхаарлаа төвлөрүүлэх"}
    ]
  },
  {
    id:'verbs10', title:"Үйл үг 10", level:"B1", icon:"🔁",
    words:[
      {ic:"▶️", en:"Begin", pron:"бигин", mn:"Эхлэх"},
      {ic:"⏹️", en:"End", pron:"энд", mn:"Дуусгах"},
      {ic:"⏭️", en:"Continue", pron:"континю", mn:"Үргэлжлүүлэх"},
      {ic:"🏁", en:"Finish", pron:"финиш", mn:"Дуусгах"},
      {ic:"🔁", en:"Repeat", pron:"рипийт", mn:"Давтах"},
      {ic:"👣", en:"Follow", pron:"фолоу", mn:"Дагах"},
      {ic:"🎖️", en:"Lead", pron:"лийд", mn:"Удирдах"},
      {ic:"➕", en:"Join", pron:"жойн", mn:"Нэгдэх"},
      {ic:"🚪", en:"Leave", pron:"лийв", mn:"Орхих / гарах"},
      {ic:"↩️", en:"Return", pron:"ритөрн", mn:"Буцах"}
    ]
  },
  {
    id:'business2', title:"Бизнес 2", level:"B2", icon:"📊",
    words:[
      {ic:"♟️", en:"Strategy", pron:"стрэтэжи", mn:"Стратеги"},
      {ic:"🏷️", en:"Brand", pron:"брэнд", mn:"Брэнд"},
      {ic:"📦", en:"Product", pron:"продакт", mn:"Бүтээгдэхүүн"},
      {ic:"🛎️", en:"Service", pron:"сөрвис", mn:"Үйлчилгээ"},
      {ic:"⭐", en:"Quality", pron:"кволити", mn:"Чанар"},
      {ic:"💰", en:"Sales", pron:"сэйлз", mn:"Борлуулалт"},
      {ic:"📢", en:"Advertisement", pron:"эдвөртисмэнт", mn:"Зар сурталчилгаа"},
      {ic:"🏆", en:"Competition", pron:"компэтишн", mn:"Өрсөлдөөн"},
      {ic:"🚚", en:"Supplier", pron:"сэплайэр", mn:"Нийлүүлэгч"},
      {ic:"📈", en:"Demand", pron:"димэнд", mn:"Эрэлт"}
    ]
  },
  {
    id:'finance', title:"Санхүү", level:"B1", icon:"💳",
    words:[
      {ic:"💵", en:"Earn", pron:"өрн", mn:"Олох (мөнгө)"},
      {ic:"🛍️", en:"Spend", pron:"спэнд", mn:"Зарцуулах"},
      {ic:"🤲", en:"Borrow", pron:"бороу", mn:"Зээлж авах"},
      {ic:"🫴", en:"Lend", pron:"лэнд", mn:"Зээлдүүлэх"},
      {ic:"📉", en:"Owe", pron:"оу", mn:"Өртэй байх"},
      {ic:"💰", en:"Afford", pron:"эфорд", mn:"Хүрэлцэх (мөнгө)"},
      {ic:"🎗️", en:"Donate", pron:"доунэйт", mn:"Хандивлах"},
      {ic:"🏠", en:"Rent", pron:"рэнт", mn:"Түрээслэх"},
      {ic:"💸", en:"Refund", pron:"рифанд", mn:"Мөнгө буцаах"},
      {ic:"🏷️", en:"Discount", pron:"дискаунт", mn:"Хямдрал"}
    ]
  },
  {
    id:'lawcrime', title:"Хууль & гэмт хэрэг", level:"B2", icon:"⚖️",
    words:[
      {ic:"🚔", en:"Crime", pron:"крайм", mn:"Гэмт хэрэг"},
      {ic:"👮", en:"Police", pron:"полийс", mn:"Цагдаа"},
      {ic:"🦹", en:"Thief", pron:"сийф", mn:"Хулгайч"},
      {ic:"⛓️", en:"Prison", pron:"призн", mn:"Шорон"},
      {ic:"👨‍⚖️", en:"Judge", pron:"жаж", mn:"Шүүгч"},
      {ic:"⚖️", en:"Guilty", pron:"гилти", mn:"Гэм буруутай"},
      {ic:"😇", en:"Innocent", pron:"инэсэнт", mn:"Гэм зэмгүй"},
      {ic:"🔨", en:"Punishment", pron:"панишмэнт", mn:"Шийтгэл"},
      {ic:"👁️", en:"Witness", pron:"витнэс", mn:"Гэрч"},
      {ic:"🏛️", en:"Court", pron:"корт", mn:"Шүүх"}
    ]
  },
  {
    id:'media', title:"Хэвлэл мэдээлэл", level:"B1", icon:"📰",
    words:[
      {ic:"📰", en:"News", pron:"нюз", mn:"Мэдээ"},
      {ic:"🗞️", en:"Newspaper", pron:"нюзпэйпэр", mn:"Сонин"},
      {ic:"📖", en:"Magazine", pron:"мэгэзийн", mn:"Сэтгүүл"},
      {ic:"📄", en:"Article", pron:"артикл", mn:"Нийтлэл"},
      {ic:"🎙️", en:"Journalist", pron:"жөрнэлист", mn:"Сэтгүүлч"},
      {ic:"📺", en:"Channel", pron:"чэнл", mn:"Суваг"},
      {ic:"📺", en:"Program", pron:"програм", mn:"Нэвтрүүлэг"},
      {ic:"🔠", en:"Headline", pron:"хэдлайн", mn:"Гарчиг"},
      {ic:"🌐", en:"Media", pron:"мийдиа", mn:"Хэвлэл мэдээлэл"},
      {ic:"📡", en:"Broadcast", pron:"бродкаст", mn:"Дамжуулах"}
    ]
  },
  {
    id:'abstract3', title:"Хийсвэр нэр 3", level:"B2", icon:"🌀",
    words:[
      {ic:"💎", en:"Value", pron:"вэлью", mn:"Үнэ цэнэ"},
      {ic:"📖", en:"Meaning", pron:"мийнинг", mn:"Утга"},
      {ic:"➡️", en:"Effect", pron:"ифэкт", mn:"Нөлөө"},
      {ic:"🎯", en:"Cause", pron:"коз", mn:"Шалтгаан"},
      {ic:"🏁", en:"Result", pron:"ризалт", mn:"Үр дүн"},
      {ic:"✅", en:"Benefit", pron:"бэнэфит", mn:"Ашиг тус"},
      {ic:"⚠️", en:"Risk", pron:"риск", mn:"Эрсдэл"},
      {ic:"🚪", en:"Opportunity", pron:"опортюнити", mn:"Боломж"},
      {ic:"👍", en:"Advantage", pron:"эдвантиж", mn:"Давуу тал"},
      {ic:"👎", en:"Disadvantage", pron:"дисэдвантиж", mn:"Сул тал"}
    ]
  },
  {
    id:'meat', title:"Мах", level:"A2", icon:"🥩",
    words:[
      {ic:"🥩", en:"Beef", pron:"бийф", mn:"Үхрийн мах"},
      {ic:"🥓", en:"Pork", pron:"порк", mn:"Гахайн мах"},
      {ic:"🐑", en:"Lamb", pron:"лэм", mn:"Хурганы мах"},
      {ic:"🌭", en:"Sausage", pron:"сосэж", mn:"Хиам"},
      {ic:"🥓", en:"Bacon", pron:"бэйкэн", mn:"Гахайн өөх мах"},
      {ic:"🍖", en:"Ham", pron:"хэм", mn:"Гахайн гуяны мах"},
      {ic:"🥩", en:"Steak", pron:"стэйк", mn:"Стейк"},
      {ic:"🦐", en:"Seafood", pron:"сийфүд", mn:"Далайн хоол"},
      {ic:"🦐", en:"Shrimp", pron:"шримп", mn:"Сам хорхой"},
      {ic:"🦃", en:"Turkey", pron:"төрки", mn:"Цацар тахиа"}
    ]
  },
  {
    id:'drinks2', title:"Ундаа 2", level:"A2", icon:"🥤",
    words:[
      {ic:"🍋", en:"Lemonade", pron:"лэмонэйд", mn:"Нимбэгний ундаа"},
      {ic:"🥤", en:"Milkshake", pron:"милкшэйк", mn:"Сүүн коктейль"},
      {ic:"🥤", en:"Smoothie", pron:"смүзи", mn:"Смузи"},
      {ic:"☕", en:"Espresso", pron:"эспрэссо", mn:"Эспрессо"},
      {ic:"☕", en:"Latte", pron:"латте", mn:"Латте"},
      {ic:"🍹", en:"Cocktail", pron:"коктэйл", mn:"Коктейль"},
      {ic:"🥃", en:"Whiskey", pron:"виски", mn:"Виски"},
      {ic:"🍾", en:"Champagne", pron:"шампэйн", mn:"Шампан"},
      {ic:"🥤", en:"Cola", pron:"коула", mn:"Кола"},
      {ic:"🍏", en:"Cider", pron:"сайдэр", mn:"Сидр"}
    ]
  },
  {
    id:'appliances', title:"Цахилгаан хэрэгсэл", level:"A2", icon:"🔌",
    words:[
      {ic:"🔥", en:"Oven", pron:"авэн", mn:"Зуух (пийшин)"},
      {ic:"📻", en:"Microwave", pron:"майкровэйв", mn:"Богино долгионы зуух"},
      {ic:"🥤", en:"Blender", pron:"блэндэр", mn:"Блендер"},
      {ic:"🍞", en:"Toaster", pron:"тоустэр", mn:"Талх шарагч"},
      {ic:"♨️", en:"Kettle", pron:"кэтл", mn:"Данх (цахилгаан)"},
      {ic:"🍽️", en:"Dishwasher", pron:"дишвошэр", mn:"Аяга угаагч"},
      {ic:"🧊", en:"Freezer", pron:"фрийзэр", mn:"Хөлдөөгч"},
      {ic:"🍖", en:"Grill", pron:"грил", mn:"Грил"},
      {ic:"🥣", en:"Mixer", pron:"миксэр", mn:"Холигч"},
      {ic:"🍳", en:"Cooker", pron:"күкэр", mn:"Зуух"}
    ]
  },
  {
    id:'clothes3', title:"Хувцас 3", level:"A2", icon:"👗",
    words:[
      {ic:"🧶", en:"Sweater", pron:"свэтэр", mn:"Свитер"},
      {ic:"👖", en:"Jeans", pron:"жийнз", mn:"Жинс"},
      {ic:"🩳", en:"Shorts", pron:"шортс", mn:"Богино өмд"},
      {ic:"👗", en:"Skirt", pron:"скөрт", mn:"Юбка"},
      {ic:"🧥", en:"Coat", pron:"коут", mn:"Пальто"},
      {ic:"🤵", en:"Suit", pron:"сют", mn:"Костюм"},
      {ic:"👔", en:"Tie", pron:"тай", mn:"Зангиа"},
      {ic:"🎽", en:"Uniform", pron:"юниформ", mn:"Дүрэмт хувцас"},
      {ic:"🩲", en:"Pajamas", pron:"пажамаз", mn:"Унтлагын хувцас"},
      {ic:"🩱", en:"Swimsuit", pron:"свимсют", mn:"Усны хувцас"}
    ]
  },
  {
    id:'colors2', title:"Өнгө 2", level:"A1", icon:"🎨",
    words:[
      {ic:"🟤", en:"Brown", pron:"браун", mn:"Бор"},
      {ic:"⚪", en:"Gray", pron:"грэй", mn:"Саарал"},
      {ic:"🟣", en:"Purple", pron:"пөрпл", mn:"Нил ягаан"},
      {ic:"💜", en:"Violet", pron:"вайолэт", mn:"Нил"},
      {ic:"🔵", en:"Navy", pron:"нэйви", mn:"Хар хөх"},
      {ic:"🟫", en:"Beige", pron:"бэйж", mn:"Цайвар шаргал"},
      {ic:"🩵", en:"Turquoise", pron:"төркойз", mn:"Ногоон цэнхэр"},
      {ic:"🟥", en:"Maroon", pron:"мэрүн", mn:"Бор улаан"},
      {ic:"🤍", en:"Cream", pron:"крийм", mn:"Цөцгий өнгө"},
      {ic:"❤️", en:"Scarlet", pron:"скарлэт", mn:"Час улаан"}
    ]
  },
  {
    id:'senseverbs', title:"Мэдрэхүйн үйл", level:"A2", icon:"👀",
    words:[
      {ic:"👁️", en:"See", pron:"сий", mn:"Харах"},
      {ic:"👂", en:"Hear", pron:"хиэр", mn:"Сонсох"},
      {ic:"👃", en:"Smell", pron:"смэл", mn:"Үнэрлэх"},
      {ic:"✋", en:"Touch", pron:"тач", mn:"Хүрэх"},
      {ic:"💗", en:"Feel", pron:"фийл", mn:"Мэдрэх"},
      {ic:"👀", en:"Look", pron:"лүк", mn:"Харах / ажиглах"},
      {ic:"🔊", en:"Sound", pron:"саунд", mn:"Сонсогдох"},
      {ic:"💡", en:"Notice", pron:"ноутис", mn:"Анзаарах"},
      {ic:"🔍", en:"Observe", pron:"обзөрв", mn:"Ажиглах"},
      {ic:"😳", en:"Stare", pron:"стэр", mn:"Ширтэх"}
    ]
  },
  {
    id:'motionverbs', title:"Хөдөлгөөний үйл 2", level:"B1", icon:"🚶",
    words:[
      {ic:"🛬", en:"Arrive", pron:"эрайв", mn:"Ирэх"},
      {ic:"🛫", en:"Depart", pron:"дипарт", mn:"Хөдлөх / явах"},
      {ic:"🚪", en:"Enter", pron:"энтэр", mn:"Орох"},
      {ic:"🚪", en:"Exit", pron:"эгзит", mn:"Гарах"},
      {ic:"➡️", en:"Cross", pron:"крос", mn:"Гатлах"},
      {ic:"🏃", en:"Pass", pron:"пас", mn:"Өнгөрөх"},
      {ic:"🏃", en:"Chase", pron:"чэйс", mn:"Хөөх"},
      {ic:"🏃", en:"Escape", pron:"искэйп", mn:"Зугтах"},
      {ic:"🚶", en:"Wander", pron:"вондэр", mn:"Тэнэх"},
      {ic:"🥁", en:"March", pron:"марч", mn:"Жагсах / алхах"}
    ]
  },
  {
    id:'adj6', title:"Тэмдэг нэр 6", level:"A2", icon:"📏",
    words:[
      {ic:"🐘", en:"Huge", pron:"хьюж", mn:"Асар том"},
      {ic:"🐜", en:"Tiny", pron:"тайни", mn:"Жаахан"},
      {ic:"↔️", en:"Wide", pron:"вайд", mn:"Өргөн"},
      {ic:"⏸️", en:"Narrow", pron:"нэроу", mn:"Нарийн"},
      {ic:"📏", en:"Thick", pron:"сик", mn:"Зузаан"},
      {ic:"📄", en:"Thin", pron:"син", mn:"Нимгэн"},
      {ic:"🌊", en:"Deep", pron:"дийп", mn:"Гүн"},
      {ic:"💧", en:"Shallow", pron:"шэлоу", mn:"Гүехэн"},
      {ic:"🫙", en:"Empty", pron:"эмпти", mn:"Хоосон"},
      {ic:"🈵", en:"Full", pron:"фул", mn:"Дүүрэн"}
    ]
  },
  {
    id:'adj7', title:"Амт & мэдрэмж", level:"A2", icon:"👅",
    words:[
      {ic:"🍬", en:"Sweet", pron:"свийт", mn:"Чихэрлэг"},
      {ic:"🍋", en:"Sour", pron:"сауэр", mn:"Исгэлэн"},
      {ic:"😖", en:"Bitter", pron:"битэр", mn:"Гашуун"},
      {ic:"🧂", en:"Salty", pron:"солти", mn:"Давслаг"},
      {ic:"🌶️", en:"Spicy", pron:"спайси", mn:"Халуун ногоотой"},
      {ic:"🥬", en:"Fresh", pron:"фрэш", mn:"Шинэхэн"},
      {ic:"🤢", en:"Rotten", pron:"ротн", mn:"Ялзарсан"},
      {ic:"🧸", en:"Soft", pron:"софт", mn:"Зөөлөн"},
      {ic:"🪞", en:"Smooth", pron:"смүз", mn:"Гөлгөр"},
      {ic:"🪨", en:"Rough", pron:"раф", mn:"Барзгар"}
    ]
  },
  {
    id:'seasons', title:"Улирал", level:"A1", icon:"🍂",
    words:[
      {ic:"🌸", en:"Spring", pron:"спринг", mn:"Хавар"},
      {ic:"☀️", en:"Summer", pron:"саммэр", mn:"Зун"},
      {ic:"🍂", en:"Autumn", pron:"отэм", mn:"Намар"},
      {ic:"❄️", en:"Winter", pron:"винтэр", mn:"Өвөл"},
      {ic:"🌨️", en:"Snowy", pron:"сноуи", mn:"Цастай"},
      {ic:"🌧️", en:"Rainy", pron:"рэйни", mn:"Бороотой"},
      {ic:"💨", en:"Windy", pron:"винди", mn:"Салхитай"},
      {ic:"🌩️", en:"Stormy", pron:"сторми", mn:"Шуургатай"},
      {ic:"🌫️", en:"Foggy", pron:"фоги", mn:"Манантай"},
      {ic:"💦", en:"Humid", pron:"хьюмид", mn:"Чийглэг"}
    ]
  },
  {
    id:'body3', title:"Бие 3 (эрхтэн)", level:"B1", icon:"🫀",
    words:[
      {ic:"🧠", en:"Brain", pron:"брэйн", mn:"Тархи"},
      {ic:"🫁", en:"Lung", pron:"ланг", mn:"Уушги"},
      {ic:"🩸", en:"Liver", pron:"ливэр", mn:"Элэг"},
      {ic:"🫘", en:"Kidney", pron:"кидни", mn:"Бөөр"},
      {ic:"🦴", en:"Bone", pron:"боун", mn:"Яс"},
      {ic:"💪", en:"Muscle", pron:"масл", mn:"Булчин"},
      {ic:"🧴", en:"Skin", pron:"скин", mn:"Арьс"},
      {ic:"⚡", en:"Nerve", pron:"нөрв", mn:"Мэдрэл"},
      {ic:"🩸", en:"Vein", pron:"вэйн", mn:"Судас"},
      {ic:"🦿", en:"Joint", pron:"жойнт", mn:"Үе мөч"}
    ]
  },
  {
    id:'health3', title:"Эрүүл мэнд 3", level:"B1", icon:"🤒",
    words:[
      {ic:"🤕", en:"Headache", pron:"хэдэйк", mn:"Толгой өвдөх"},
      {ic:"🤢", en:"Stomachache", pron:"стамэкэйк", mn:"Гэдэс өвдөх"},
      {ic:"🤧", en:"Flu", pron:"флү", mn:"Томуу"},
      {ic:"🦠", en:"Infection", pron:"инфэкшн", mn:"Халдвар"},
      {ic:"🏥", en:"Disease", pron:"дизийз", mn:"Өвчин"},
      {ic:"🦠", en:"Virus", pron:"вайрэс", mn:"Вирус"},
      {ic:"💉", en:"Vaccine", pron:"вэксин", mn:"Вакцин"},
      {ic:"📋", en:"Symptom", pron:"симптэм", mn:"Шинж тэмдэг"},
      {ic:"🩺", en:"Diagnosis", pron:"дайэгноусис", mn:"Оношлогоо"},
      {ic:"💊", en:"Treatment", pron:"трийтмэнт", mn:"Эмчилгээ"}
    ]
  },
  {
    id:'feelings4', title:"Сэтгэл хөдлөл 4", level:"B1", icon:"💫",
    words:[
      {ic:"😌", en:"Content", pron:"контэнт", mn:"Сэтгэл ханамжтай"},
      {ic:"🤗", en:"Eager", pron:"игэр", mn:"Тэсэн ядсан"},
      {ic:"😟", en:"Anxious", pron:"энкшэс", mn:"Түгшүүртэй"},
      {ic:"🔥", en:"Passionate", pron:"пэшэнэт", mn:"Хүсэл тэмүүлэлтэй"},
      {ic:"🤩", en:"Thrilled", pron:"срилд", mn:"Баясгалантай"},
      {ic:"😫", en:"Miserable", pron:"мизэрэбл", mn:"Зовлонтой"},
      {ic:"☮️", en:"Peaceful", pron:"пийсфул", mn:"Амар амгалан"},
      {ic:"😡", en:"Furious", pron:"фьюриэс", mn:"Уур хилэнтэй"},
      {ic:"😄", en:"Joyful", pron:"жойфул", mn:"Баяр хөөртэй"},
      {ic:"💔", en:"Heartbroken", pron:"хартброукэн", mn:"Зүрх шархалсан"}
    ]
  },
  {
    id:'stationery', title:"Бичгийн хэрэгсэл", level:"A2", icon:"✂️",
    words:[
      {ic:"✂️", en:"Scissors", pron:"сизэрз", mn:"Хайч"},
      {ic:"📎", en:"Stapler", pron:"стэйплэр", mn:"Үдэгч"},
      {ic:"📏", en:"Ruler", pron:"рүлэр", mn:"Шугам"},
      {ic:"🧽", en:"Eraser", pron:"ирэйзэр", mn:"Баллуур"},
      {ic:"🖊️", en:"Marker", pron:"маркэр", mn:"Маркер"},
      {ic:"✉️", en:"Envelope", pron:"энвэлоуп", mn:"Дугтуй"},
      {ic:"📮", en:"Stamp", pron:"стэмп", mn:"Марк / тамга"},
      {ic:"🔢", en:"Calculator", pron:"кэлкюлэйтэр", mn:"Тооны машин"},
      {ic:"📎", en:"Clip", pron:"клип", mn:"Хавчаар"},
      {ic:"📋", en:"Board", pron:"борд", mn:"Самбар"}
    ]
  }
];

const ALPHA = [
  {L:'A', name:'эй', vowel:true, sounds:[
    {s:'э', ex:{en:'cat', pron:'кэт', mn:'муур'}},
    {s:'эй', ex:{en:'cake', pron:'кэйк', mn:'бялуу'}},
    {s:'а', ex:{en:'car', pron:'кар', mn:'машин'}}
  ], note:'Ихэвчлэн «э», эсвэл нэрийнхээ адил «эй» гэж дуудна.'},
  {L:'B', name:'бий', vowel:false, sounds:[{s:'б', ex:{en:'ball', pron:'бол', mn:'бөмбөг'}}]},
  {L:'C', name:'сий', vowel:false, sounds:[
    {s:'к', ex:{en:'cat', pron:'кэт', mn:'муур'}},
    {s:'с', ex:{en:'city', pron:'сити', mn:'хот'}}
  ], note:'«e, i, y»-ийн өмнө «с» болно, бусад үед «к». (cat=к, city=с)'},
  {L:'D', name:'дий', vowel:false, sounds:[{s:'д', ex:{en:'dog', pron:'дог', mn:'нохой'}}]},
  {L:'E', name:'ий', vowel:true, sounds:[
    {s:'э', ex:{en:'bed', pron:'бэд', mn:'ор'}},
    {s:'ий', ex:{en:'he', pron:'хи', mn:'тэр'}}
  ], note:'Богино «э» (bed), эсвэл урт «ий» (he).'},
  {L:'F', name:'эф', vowel:false, sounds:[{s:'ф', ex:{en:'fish', pron:'фиш', mn:'загас'}}]},
  {L:'G', name:'жий', vowel:false, sounds:[
    {s:'г', ex:{en:'go', pron:'гоу', mn:'явах'}},
    {s:'ж', ex:{en:'giraffe', pron:'жираф', mn:'анааш'}}
  ], note:'Ихэвчлэн «г». «e, i, y»-ийн өмнө заримдаа «ж» (giraffe).'},
  {L:'H', name:'эйч', vowel:false, sounds:[{s:'х', ex:{en:'hat', pron:'хэт', mn:'малгай'}}]},
  {L:'I', name:'ай', vowel:true, sounds:[
    {s:'и', ex:{en:'sit', pron:'сит', mn:'суух'}},
    {s:'ай', ex:{en:'like', pron:'лайк', mn:'дуртай'}}
  ], note:'Богино «и» (sit), эсвэл «ай» (like).'},
  {L:'J', name:'жэй', vowel:false, sounds:[{s:'ж', ex:{en:'jump', pron:'жамп', mn:'үсрэх'}}]},
  {L:'K', name:'кэй', vowel:false, sounds:[{s:'к', ex:{en:'key', pron:'кий', mn:'түлхүүр'}}], note:'«kn»-ээр эхэлбэл k чимээгүй: knife = «найф».'},
  {L:'L', name:'эл', vowel:false, sounds:[{s:'л', ex:{en:'lion', pron:'лайон', mn:'арслан'}}]},
  {L:'M', name:'эм', vowel:false, sounds:[{s:'м', ex:{en:'moon', pron:'мүн', mn:'сар'}}]},
  {L:'N', name:'эн', vowel:false, sounds:[{s:'н', ex:{en:'nose', pron:'ноуз', mn:'хамар'}}]},
  {L:'O', name:'оу', vowel:true, sounds:[
    {s:'о', ex:{en:'dog', pron:'дог', mn:'нохой'}},
    {s:'оу', ex:{en:'go', pron:'гоу', mn:'явах'}},
    {s:'а', ex:{en:'son', pron:'сан', mn:'хүү'}}
  ], note:'«о», «оу» эсвэл «а» гэж янз бүр дуудагдана.'},
  {L:'P', name:'пий', vowel:false, sounds:[{s:'п', ex:{en:'pen', pron:'пэн', mn:'үзэг'}}], note:'«ph» бол «ф» болно: phone = «фоун».'},
  {L:'Q', name:'кью', vowel:false, sounds:[{s:'кв', ex:{en:'queen', pron:'квийн', mn:'хатан'}}], note:'Үргэлж «u»-тай хамт: «qu» = «кв» (queen).'},
  {L:'R', name:'ар', vowel:false, sounds:[{s:'р', ex:{en:'red', pron:'рэд', mn:'улаан'}}]},
  {L:'S', name:'эс', vowel:false, sounds:[
    {s:'с', ex:{en:'sun', pron:'сан', mn:'нар'}},
    {s:'з', ex:{en:'rose', pron:'роуз', mn:'сарнай'}}
  ], note:'Ихэвчлэн «с». Эгшгийн хооронд заримдаа «з» (rose).'},
  {L:'T', name:'тий', vowel:false, sounds:[{s:'т', ex:{en:'tree', pron:'трий', mn:'мод'}}], note:'«th» бол «с» эсвэл «з» болно: think=«синк», this=«зис».'},
  {L:'U', name:'ю', vowel:true, sounds:[
    {s:'а', ex:{en:'cup', pron:'кап', mn:'аяга'}},
    {s:'ю', ex:{en:'music', pron:'мьюзик', mn:'хөгжим'}},
    {s:'у', ex:{en:'put', pron:'пут', mn:'тавих'}}
  ], note:'«а», «ю» эсвэл «у» гэж дуудагдана.'},
  {L:'V', name:'вий', vowel:false, sounds:[{s:'в', ex:{en:'van', pron:'вэн', mn:'ачааны машин'}}]},
  {L:'W', name:'дабл-ю', vowel:false, sounds:[{s:'в', ex:{en:'water', pron:'вотэр', mn:'ус'}}], note:'Уруулаа бөөрөнхийлж хэлдэг зөөлөн «в». «wh» = «в»: what=«вот».'},
  {L:'X', name:'экс', vowel:false, sounds:[{s:'кс', ex:{en:'box', pron:'бокс', mn:'хайрцаг'}}], note:'Ихэвчлэн «кс». Үгийн эхэнд заримдаа «з» (xylophone).'},
  {L:'Y', name:'вай', vowel:false, sounds:[
    {s:'й', ex:{en:'yes', pron:'ес', mn:'тийм'}},
    {s:'ай', ex:{en:'my', pron:'май', mn:'миний'}},
    {s:'и', ex:{en:'happy', pron:'хэпи', mn:'аз жаргалтай'}}
  ], note:'Эхэнд «й» (yes). Төгсгөлд «ай» (my) эсвэл «и» (happy).'},
  {L:'Z', name:'зий', vowel:false, sounds:[{s:'з', ex:{en:'zoo', pron:'зү', mn:'амьтны хүрээлэн'}}]}
];

const EXTRA_DICT = {
  // артикль ба заах үг
  "the":["зэ","(тодорхой артикль)"], "a":["э","нэг (үл тодорхой артикль)"], "an":["эн","нэг (эгшгийн өмнө)"],
  "this":["зис","энэ"], "that":["зэт","тэр"], "these":["зийз","эдгээр"], "those":["зоуз","тэдгээр"],
  // төлөөний үг
  "i":["ай","би"], "you":["ю","чи / та"], "he":["хи","тэр (эр)"], "she":["ши","тэр (эм)"],
  "it":["ит","энэ / тэр (юм)"], "we":["ви","бид"], "they":["зэй","тэд"],
  "me":["ми","намайг / надад"], "him":["хим","түүнийг (эр)"], "her":["хёр","түүний / түүнийг (эм)"],
  "us":["ас","биднийг"], "them":["зэм","тэднийг"],
  "my":["май","миний"], "your":["ёр","таны"], "his":["хиз","түүний (эр)"],
  "its":["итс","үүний"], "our":["ауэр","бидний"], "their":["зэр","тэдний"],
  "mine":["майн","минийх"], "yours":["ёрз","таных"], "hers":["хёрз","түүнийх (эм)"],
  "ours":["ауэрз","биднийх"], "theirs":["зэрз","тэднийх"],
  "myself":["майсэлф","өөрийгөө"], "yourself":["ёрсэлф","өөрийгөө (та)"],
  // be
  "is":["из","байна (тэр)"], "am":["эм","байна (би)"], "are":["а","байна (чи/бид/тэд)"],
  "was":["воз","байсан (ганц)"], "were":["вөр","байсан (олон)"], "be":["би","байх"], "been":["бийн","байсан"],
  "isn't":["изнт","биш (тэр)"], "aren't":["арнт","биш (олон)"], "wasn't":["вознт","байгаагүй"], "weren't":["вөрнт","байгаагүй (олон)"],
  // have / do
  "have":["хэв","байх / -тай"], "has":["хэз","байх (тэр)"], "had":["хэд","байсан"],
  "do":["ду","хийх / (туслах)"], "does":["даз","хийх (тэр)"], "did":["дид","хийсэн / (өнгөрсний туслах)"], "done":["дан","хийсэн"],
  "don't":["доунт","-даггүй"], "doesn't":["дазнт","-даггүй (тэр)"], "didn't":["диднт","-аагүй"],
  "haven't":["хэвнт","-аагүй"], "hasn't":["хэзнт","-аагүй (тэр)"],
  // модаль
  "will":["вил","болно (ирээдүй)"], "won't":["воунт","болохгүй"], "would":["вүд","-х байсан"],
  "can":["кэн","чадна"], "can't":["кант","чадахгүй"], "could":["күд","чадна (эелдэг)"], "couldn't":["күднт","чадаагүй"],
  "should":["шүд","-вал зүгээр"], "shouldn't":["шүднт","-вал таарахгүй"],
  "must":["маст","заавал"], "mustn't":["маснт","хориотой"], "may":["мэй","болж магадгүй"], "might":["майт","магадгүй"],
  "shall":["шэл","-уу? (санал)"], "let's":["летс","-цгаая"],
  // асуулт
  "what":["вот","юу"], "who":["хү","хэн"], "where":["вэр","хаана"], "when":["вэн","хэзээ"],
  "why":["вай","яагаад"], "how":["хау","яаж"], "which":["вич","аль"], "whose":["хүз","хэний"],
  // холбоос
  "and":["энд","ба, бас"], "but":["бат","гэхдээ"], "or":["ор","эсвэл"], "so":["соу","тиймээс"],
  "because":["бикоз","учир нь"], "if":["иф","хэрэв"], "than":["зэн","-аас (харьцуулах)"],
  "also":["олсоу","бас"], "too":["ту","бас / хэтэрхий"], "then":["зэн","дараа нь"],
  // угтвар
  "in":["ин","дотор / -д"], "on":["он","дээр / -нд"], "at":["эт","-д (цэг)"], "to":["ту","руу"],
  "from":["фром","-аас"], "of":["ов","-ийн"], "for":["фор","-д зориулж"], "with":["виз","-тай хамт"],
  "without":["визаут","-гүйгээр"], "about":["эбаут","тухай / орчим"], "by":["бай","-аар"],
  "near":["нийр","ойрхон"], "under":["андэр","доор"], "over":["оувэр","дээгүүр"],
  "between":["битвийн","хооронд"], "through":["срү","дундуур"], "into":["инту","дотогш"],
  "along":["элонг","дагаж"], "past":["паст","өнгөрөөд"], "across":["экрос","хөндлөн"],
  "before":["бифор","өмнө"], "after":["афтэр","дараа"], "until":["антил","хүртэл"], "during":["дюринг","хугацаанд"],
  "up":["ап","дээш"], "down":["даун","доош"], "out":["аут","гадагш"], "off":["оф","салгах / тайлах"],
  "above":["эбав","дээгүүр"], "below":["билоу","доогуур"], "opposite":["опозит","эсрэг талд"], "inside":["инсайд","дотор"],
  "outside":["аутсайд","гадаа"], "next":["нэкст","дараагийн / хажууд"], "ago":["эгоу","-ийн өмнө"],
  // тоо хэмжээ
  "some":["сам","хэдэн, жаахан"], "any":["эни","ямар нэг"], "many":["мэни","олон"], "much":["мач","их"],
  "few":["фью","цөөн"], "little":["литл","жаахан"], "all":["ол","бүгд"], "both":["боус","хоёул"],
  "each":["ийч","тус бүр"], "every":["эври","бүр"], "no":["ноу","үгүй"], "none":["нан","нэг ч биш"],
  "more":["мор","илүү"], "most":["моуст","хамгийн"], "less":["лэс","бага"], "enough":["инаф","хангалттай"],
  "lot":["лот","их"], "half":["хаф","хагас"], "one":["ван","нэг / нь"], "ones":["ванз","нь (олон)"],
  // дайвар
  "very":["вэри","маш"], "really":["риали","үнэхээр"], "always":["олвэйз","үргэлж"], "usually":["южуэли","ихэвчлэн"],
  "often":["офн","байнга"], "sometimes":["самтаймз","заримдаа"], "never":["нэвэр","хэзээ ч үгүй"],
  "now":["нау","одоо"], "today":["тудэй","өнөөдөр"], "tomorrow":["тумороу","маргааш"], "yesterday":["йестэрдэй","өчигдөр"],
  "here":["хийр","энд"], "there":["зэр","тэнд / байна"], "again":["эгэн","дахин"], "still":["стил","одоо хэр"],
  "already":["олрэди","аль хэдийн"], "just":["жаст","дөнгөж / зүгээр"], "only":["оунли","зөвхөн"],
  "well":["вэл","сайн (үйлдэл)"], "together":["тугэзэр","хамтдаа"], "soon":["сүн","удахгүй"],
  "later":["лэйтэр","дараа"], "maybe":["мэйби","магадгүй"], "probably":["пробэбли","магадгүй"],
  "please":["плийз","-на уу"], "yes":["ес","тийм"], "not":["нот","үгүй"], "ever":["эвэр","хэзээ нэгэн цагт"],
  "quite":["квайт","нэлээд"], "almost":["олмоуст","бараг"], "perfectly":["пөрфэктли","төгс"],
  // тодорхойгүй үгс
  "something":["самсинг","ямар нэг юм"], "anything":["энисинг","юм"], "nothing":["насинг","юу ч үгүй"],
  "everything":["эврисинг","бүх юм"], "someone":["самван","хэн нэгэн"], "anyone":["эниван","хэн нэгэн"],
  "everyone":["эвриван","хүн бүр"], "nobody":["ноубоди","хэн ч үгүй"], "somebody":["самбоди","хэн нэгэн"],
  "anybody":["энибоди","хэн нэгэн"], "everybody":["эврибоди","хүн бүр"],
  // онцгой өнгөрсөн хэлбэрүүд
  "went":["вэнт","явсан (go)"], "bought":["бот","авсан (buy)"], "paid":["пэйд","төлсөн (pay)"],
  "saw":["со","харсан (see)"], "got":["гот","авсан (get)"], "made":["мэйд","хийсэн (make)"],
  "took":["түк","авсан (take)"], "found":["фаунд","олсон (find)"], "spent":["спэнт","зарцуулсан (spend)"],
  "said":["сэд","хэлсэн (say)"], "came":["кэйм","ирсэн (come)"], "ate":["эйт","идсэн (eat)"],
  "drank":["дрэнк","уусан (drink)"], "wrote":["роут","бичсэн (write)"], "slept":["слэпт","унтсан (sleep)"],
  "ran":["рэн","гүйсэн (run)"], "sat":["сэт","суусан (sit)"], "stood":["стүд","зогссон (stand)"],
  "gave":["гэйв","өгсөн (give)"], "knew":["ню","мэдсэн (know)"], "thought":["сот","бодсон (think)"],
  "told":["тоулд","хэлсэн (tell)"], "felt":["фэлт","мэдэрсэн (feel)"], "left":["лэфт","явсан (leave)"],
  "met":["мэт","уулзсан (meet)"], "began":["бигэн","эхэлсэн (begin)"], "chose":["чоуз","сонгосон (choose)"],
  "brought":["брот","авчирсан (bring)"], "sent":["сэнт","илгээсэн (send)"], "wore":["вор","өмссөн (wear)"],
  "forgot":["форгот","мартсан (forget)"], "heard":["хөрд","сонссон (hear)"], "read":["рэд","уншсан (read)"],
  "put":["пут","тавьсан (put)"], "cut":["кат","хэрчсэн (cut)"], "cost":["кост","өртсөн (cost)"],
  "hurt":["хөрт","өвдөх / өвдсөн"], "fitted":["фитид","таарсан (fit)"],
  // бусад түгээмэл
  "thanks":["сэнкс","баярлалаа"], "thank":["сэнк","талархах"], "sorry":["сори","уучлаарай"],
  "excuse":["икскьюз","уучлаарай (анхаарал татах)"], "welcome":["вэлкам","тавтай морил"],
  "sure":["шүр","мэдээж"], "okay":["оукэй","за"], "hello":["хэлоу","сайн уу"], "hi":["хай","сайн уу"],
  "bye":["бай","баяртай"], "goodbye":["гүдбай","баяртай"], "afraid":["эфрэйд","харамсалтай нь"],
  "born":["борн","төрсөн"], "going":["гоуинг","явж буй / -х гэж буй"], "getting":["гетинг","авч буй"],
  "need":["нийд","хэрэгтэй"], "want":["вонт","хүсэх"], "like":["лайк","дуртай / шиг"],
  "let":["лет","зөвшөөрөх"], "make":["мэйк","хийх"], "take":["тэйк","авах"], "get":["гет","авах"],
  "give":["гив","өгөх"], "go":["гоу","явах"], "come":["кам","ирэх"], "see":["сий","харах"],
  "know":["ноу","мэдэх"], "think":["синк","бодох"], "say":["сэй","хэлэх"], "tell":["тэл","хэлэх"],
  "ask":["аск","асуух"], "look":["лүк","харах"], "find":["файнд","олох"], "put":["пут","тавих"],
  "day":["дэй","өдөр"], "time":["тайм","цаг"], "thing":["синг","юм"], "people":["пийпл","хүмүүс"],
  "person":["пөрсн","хүн"], "man":["мэн","эр хүн"], "woman":["вумэн","эмэгтэй"], "men":["мэн","эрчүүд"],
  "women":["вимин","эмэгтэйчүүд"], "children":["чилдрэн","хүүхдүүд"], "child":["чайлд","хүүхэд"],
  "name":["нэйм","нэр"], "year":["йир","жил"], "old":["оулд","настай / хуучин"], "new":["ню","шинэ"],
  "good":["гүд","сайн"], "bad":["бэд","муу"], "big":["биг","том"], "small":["смол","жижиг"],
  "great":["грэйт","гайхалтай"], "nice":["найс","сайхан"], "long":["лонг","урт"], "short":["шорт","богино"],
  "buuz":["бууз","бууз"], "tugrik":["төгрөг","төгрөг"], "key":["кий","түлхүүр"],
  "yet":["ет","хараахан (үгүйсгэл/асуултад)"], "place":["плэйс","газар"],
  "cancel":["кэнсл","цуцлах"], "delay":["дилэй","саатуулах / саатал"], "extra":["экстра","нэмэлт"],
  "gate":["гэйт","гарц / хаалга"], "included":["инклүдид","багтсан"], "include":["инклүд","багтаах"],
  "instead":["инстэд","оронд нь"], "insurance":["иншүрэнс","даатгал"], "lift":["лифт","цахилгаан шат"],
  "local":["лоукл","нутгийн"], "queue":["кью","дараалал"], "reception":["рисэпшн","хүлээн авах хэсэг"],
  "roundabout":["раундэбаут","эргэх тойрог"], "ruins":["руинз","балгас"], "suitcase":["сюткэйс","чемодан"],
  "anywhere":["энивэр","хаана ч"], "somewhere":["самвэр","хаа нэгтээ"], "everywhere":["эвривэр","хаа сайгүй"],
  "nowhere":["ноувэр","хаана ч үгүй"], "advance":["эдванс","урьдчилан"], "ok":["оукэй","за"],
  "gobi":["Гоби","Говь"], "paris":["Пэрис","Парис"], "louvre":["Лувр","Лувр (музей)"],
  // товчилсон (нэмэлт)
  "we'll":["вил","бид -нэ (we will)"], "you'll":["юл","та -нэ (you will)"],
  "he'll":["хил","тэр -нэ (he will)"], "she'll":["шил","тэр -нэ (she will)"],
  "they'll":["зэйл","тэд -нэ (they will)"], "it'll":["итл","энэ -нэ (it will)"],
  "we've":["вив","бид -сан (we have)"], "they've":["зэйв","тэд -сан (they have)"],
  "you've":["юв","та -сан (you have)"], "she's":["шиз","тэр (she is/has)"],
  "haven't":["хэвнт","-аагүй"], "hasn't":["хэзнт","-аагүй (тэр)"], "hadn't":["хэднт","-аагүй байсан"],
  "couldn't":["күднт","чадаагүй"], "wouldn't":["вүднт","-хгүй байсан"], "mightn't":["майтнт","магадгүй үгүй"],
  "since":["синс","-аас хойш"], "such":["сач","ийм (нэр үгтэй)"],
  "able":["эйбл","чадах"], "manage":["мэнэж","чадах (хүндрэлтэй) / удирдах"],
  "basic":["бэйсик","суурь"], "course":["корс","сургалт"], "daily":["дэйли","өдөр тутмын"],
  "weekly":["викли","долоо хоног тутмын"], "monthly":["мансли","сар тутмын"],
  "either":["айзэр","аль нэг нь"], "neither":["найзэр","аль нь ч биш"], "nor":["нор","мөн ... ч биш"],
  "event":["ивэнт","арга хэмжээ"], "fluently":["флүэнтли","чөлөөтэй"], "fluent":["флүэнт","чөлөөтэй"],
  "helpful":["хэлпфул","тустай"], "useful":["юсфул","хэрэгтэй"], "mistake":["мистэйк","алдаа"],
  "online":["онлайн","онлайн"], "organize":["органайз","зохион байгуулах"],
  "overtime":["оувэртайм","илүү цаг"], "responsible":["риспонсэбл","хариуцлагатай"],
  "submit":["сэбмит","өгөх / илгээх"], "saraa":["Сараа","Сараа (нэр)"],
  "progress":["прогрэс","ахиц"], "effort":["эфорт","хүчин чармайлт"], "decision":["дисижн","шийдвэр"],
  "note":["ноут","тэмдэглэл"], "research":["рисөрч","судалгаа"], "revise":["ривайз","давтах"],
  "concentrate":["консэнтрэйт","төвлөрөх"], "habit":["хэбит","зуршил"], "regularly":["рэгюлэрли","тогтмол"],
  "skill":["скил","ур чадвар"], "ability":["эбилити","чадвар"], "succeed":["сэксийд","амжилтад хүрэх"],
  "fail":["фэйл","бүтэлгүйтэх"], "experienced":["икспириэнст","туршлагатай"],
  "confident":["конфидэнт","өөртөө итгэлтэй"], "advanced":["эдванст","гүнзгий"], "train":["трэйн","сургах"],
  "duty":["дюти","үүрэг"], "task":["таск","даалгавар"], "deliver":["диливэр","хүргэх"],
  "handle":["хэндл","шийдвэрлэх"], "deadline":["дэдлайн","эцсийн хугацаа"],
  "shift":["шифт","ээлж"], "lunchtime":["ланчтайм","үдийн завсарлага"], "flexible":["флэксэбл","уян хатан"],
  "department":["дипартмэнт","хэлтэс"], "position":["пэзишн","албан тушаал"], "staff":["стаф","ажилтнууд"],
  "branch":["брэнч","салбар"], "candidate":["кэндидэт","нэр дэвшигч"], "apply":["эплай","өргөдөл гаргах"],
  "application":["эпликэйшн","өргөдөл"], "hire":["хайэр","ажилд авах"], "salary":["сэлэри","цалин"],
  "strength":["стрэнгс","давуу тал"], "weakness":["викнэс","сул тал"], "suitable":["сютэбл","тохирсон"],
  "offer":["офэр","санал"], "accept":["эксэпт","хүлээн авах"], "education":["эджукэйшн","боловсрол"],
  "degree":["дигрий","зэрэг"], "graduate":["грэжуэйт","төгсөх"], "reference":["рэфрэнс","тодорхойлолт"],
  "achievement":["эчийвмэнт","амжилт"], "reliable":["рилайэбл","найдвартай"],
  "hardworking":["хардвөркинг","хөдөлмөрч"], "creative":["криэйтив","бүтээлч"],
  "teamwork":["тиймвөрк","багийн ажиллагаа"], "support":["сэпорт","дэмжих"],
  "discuss":["дискас","хэлэлцэх"], "agree":["эгрий","санал нийлэх"], "disagree":["дисэгрий","санал зөрөх"],
  "trust":["траст","итгэх"], "relationship":["рилэйшншип","харилцаа"], "stress":["стрэс","стресс"],
  "pressure":["прэшэр","дарамт"], "workload":["вөрклоуд","ажлын ачаалал"],
  "complain":["комплэйн","гомдоллох"], "argue":["аргью","маргах"], "solve":["солв","шийдэх"],
  "apologize":["эположайз","уучлалт гуйх"], "exhausted":["игзостид","ядарсан"],
  "annoyed":["энойд","бухимдсан"], "patient":["пэйшнт","тэвчээртэй / өвчтөн"],
  "fell":["фэл","унасан (fall)"], "felt":["фэлт","мэдэрсэн (feel)"], "kept":["кэпт","үргэлжлүүлсэн (keep)"],
  "keep":["кийп","үргэлжлүүлэх / хадгалах"], "cried":["крайд","уйлсан"], "cry":["край","уйлах"],
  "appreciate":["эприщиэйт","үнэлэх / талархах"], "confuse":["кэнфьюз","эргэлзүүлэх"],
  "confused":["кэнфьюзд","эргэлзсэн"], "confusing":["кэнфьюзинг","эргэлзүүлэм"],
  "fancy":["фэнси","сонирхох / хүсэх"], "fault":["фолт","буруу"], "fall":["фол","унах"],
  "horror":["хоррор","аймшиг"], "interrupt":["интэрапт","таслах"], "mean":["мийн","санаархах / утга"],
  "mind":["майнд","дургүйцэх / оюун"], "psychology":["сайколоджи","сэтгэл судлал"],
  "rely":["рилай","найдах"], "shout":["шаут","хашгирах"], "situation":["ситюэйшн","нөхцөл байдал"],
  "true":["трү","үнэн"], "truth":["трүс","үнэн"], "way":["вэй","зам / арга"],
  // М4 сэтгэл хөдлөл
  "emotion":["имоушн","сэтгэл хөдлөл"], "mood":["мүд","сэтгэл санаа"], "relaxed":["рилэкст","тайвширсан"],
  "frustrated":["фрастрэйтид","бухимдсан"], "disappointed":["дисэпойнтид","урам хугарсан"],
  "friendship":["фрэндшип","нөхөрлөл"], "loyal":["лойэл","үнэнч"], "proud":["прауд","бахархсан"],
  "jealous":["жэлэс","атаархсан"], "honest":["онист","шударга"], "selfish":["сэлфиш","хувиа хичээсэн"],
  "generous":["жэнэрэс","өгөөмөр"], "opinion":["опиньон","санал бодол"], "believe":["билийв","итгэх"],
  "conflict":["конфликт","зөрчил"], "argument":["аргюмэнт","маргаан"], "blame":["блэйм","буруутгах"],
  "ignore":["игнор","үл тоох"], "forgive":["форгив","уучлах"], "regret":["ригрэт","харамсах"],
  "promise":["промис","амлах"], "admit":["эдмит","хүлээн зөвшөөрөх"], "excuse":["икскьюс","шалтаг"],
  "imagine":["имэжин","төсөөлөх"], "consider":["кэнсидэр","эргэцүүлэх"], "choice":["чойс","сонголт"],
  "invite":["инвайт","урих"], "join":["жойн","нэгдэх"], "occasion":["экэйжн","тохиолдол"],
  "host":["хоуст","гэрийн эзэн"], "refuse":["рифьюз","татгалзах"], "grateful":["грэйтфул","талархсан"],
  "kindness":["кайнднэс","эелдэг байдал"], "favour":["фэйвэр","тусламж"], "pleasure":["плэжэр","таашаал"],
  "owe":["оу","өртэй байх"], "deserve":["дизөрв","зохих"], "repay":["рипэй","хариулах"],
  "text":["тэкст","бичих (мессеж)"], "reply":["риплай","хариулах"], "forward":["форвөрд","дамжуулах"],
  "anyway":["энивэй","ямар ч байсан"], "specially":["спэшэли","тусгайлан"], "especially":["эспэшэли","ялангуяа"],
  "documentary":["докюмэнтри","баримтат кино"], "concert":["консэрт","тоглолт"],
  "ill":["ил","өвчтэй"], "diet":["дайэт","хоолны дэглэм"], "plenty":["плэнти","хангалттай их"],
  "regular":["рэгюлэр","тогтмол"], "routine":["рутийн","дэглэм"], "difference":["дифрэнс","ялгаа"],
  "warning":["ворнинг","сануулга"], "warn":["ворн","сануулах"], "worth":["вөрс","үнэ цэнэтэй"],
  "bedtime":["бэдтайм","унтах цаг"], "antibiotic":["энтибайотик","антибиотик"],
  "capsule":["кэпсюл","капсул"], "chew":["чү","зажлах"], "store":["стор","хадгалах / дэлгүүр"],
  "swallow":["своулоу","залгих"], "swollen":["своулэн","хавдсан"], "swell":["свэл","хавдах"],
  // М5 эрүүл мэнд
  "unhealthy":["анхэлси","эрүүл бус"], "vitamin":["вайтэмин","витамин"], "protein":["проутийн","уураг"],
  "balanced":["бэлэнст","тэнцвэртэй"], "portion":["поршн","хэмжээ"], "workout":["вөркаут","дасгалжилт"],
  "gym":["жим","фитнес заал"], "stretch":["стрэтч","сунгах"], "jog":["жог","гүйх"],
  "muscle":["масл","булчин"], "energy":["энэржи","эрч хүч"], "asleep":["эслийп","унтсан"],
  "awake":["эвэйк","сэрүүн"], "insomnia":["инсомниа","нойргүйдэл"], "nap":["нэп","бага зэрэг унтах"],
  "snore":["снор","хурхирах"], "alarm":["эларм","сэрүүлэг"], "deep":["дийп","гүн"],
  "pain":["пэйн","өвдөлт"], "injury":["инжэри","гэмтэл"], "burn":["бөрн","түлэх"],
  "bruise":["брүз","хөх толбо"], "symptom":["симптэм","шинж тэмдэг"], "sneeze":["снийз","найтаах"],
  "examine":["игзэмин","үзэх"], "diagnose":["дайэгноуз","оношлох"], "prescription":["прискрипшн","жор"],
  "treatment":["трийтмэнт","эмчилгээ"], "recover":["рикавэр","эдгэрэх"], "infection":["инфэкшн","халдвар"],
  "instruction":["инструкшн","заавар"], "dose":["доус","тун"], "label":["лэйбл","шошго"],
  "expire":["икспайэр","хугацаа дуусах"], "smoke":["смоук","тамхи татах"], "alcohol":["элкэхол","архи"],
  "weight":["вэйт","жин"], "fitness":["фитнэс","чийрэгжилт"], "lifestyle":["лайфстайл","амьдралын хэв маяг"],
  "balance":["бэлэнс","тэнцвэр"], "goal":["гоул","зорилго"], "motivate":["моутивэйт","урамшуулах"],
  "gradually":["грэжуэли","аажмаар"], "advise":["эдвайз","зөвлөх"], "prevent":["привэнт","сэргийлэх"],
  "risk":["риск","эрсдэл"], "careless":["кэрлэс","хайхрамжгүй"], "obviously":["обвиэсли","илэрхий"],
  "unfortunately":["анфорчэнэтли","харамсалтай нь"], "slightly":["слайтли","бага зэрэг"],
  "compare":["кэмпэр","харьцуулах"], "inspire":["инспайэр","урам өгөх"], "follower":["фолоуэр","дагагч"],
  "result":["ризалт","үр дүн"], "share":["шэр","хуваалцах"], "post":["поуст","нийтлэл / шуудан"],
  "unless":["анлэс","хэрэв ... үгүй бол"], "other":["азэр","бусад / нөгөө"],
  "absolutely":["эбсэлютли","туйлын"], "definitely":["дэфинэтли","гарцаагүй"], "honestly":["онистли","үнэнийг хэлэхэд"],
  "awful":["офл","аймшигтай"], "amazing":["эмэйзинг","гайхалтай"], "huge":["хьюж","асар том"],
  "disappointing":["дисэпойнтинг","урам хугалам"], "recommend":["рэкэмэнд","зөвлөх"],
  "account":["экаунт","бүртгэл / данс"], "password":["пасвөрд","нууц үг"], "log":["лог","нэвтрэх (бүртгэл)"],
  "sign":["сайн","бүртгүүлэх / тэмдэг"], "button":["батн","товч"], "press":["прэс","дарах"],
  "select":["силэкт","сонгох"], "delete":["дилийт","устгах"], "edit":["эдит","засварлах"],
  "save":["сэйв","хадгалах / аврах"], "code":["коуд","код"], "link":["линк","холбоос"],
  "video":["видио","видео"], "laptop":["лэптоп","зөөврийн компьютер"], "screen":["скрийн","дэлгэц"],
  "keyboard":["кийборд","гар (компьютер)"], "plug":["плаг","залгуур"], "socket":["сокит","розетк"],
  "charge":["чарж","цэнэглэх"], "charger":["чаржэр","цэнэглэгч"], "battery":["бэтэри","батарей"],
  "signal":["сигнэл","дохио"], "connection":["кэнэкшн","холболт"], "depend":["дипэнд","хамаарах"],
  "connect":["кэнэкт","холбох"], "install":["инстол","суулгах"], "update":["апдэйт","шинэчлэх"],
  "version":["вөржн","хувилбар"], "feature":["фийчэр","боломж"], "notification":["ноутификэйшн","мэдэгдэл"],
  "device":["дивайс","төхөөрөмж"], "headphones":["хэдфоунз","чихэвч"], "switch":["свич","унтраалга"],
  "crash":["крэш","унах (систем)"], "freeze":["фрийз","гацах"], "crack":["крэк","хагарал"],
  "repair":["рипэр","засах"], "replace":["риплэйс","солих"], "damage":["дэмиж","гэмтээх"],
  "damaged":["дэмиджд","гэмтсэн"], "warranty":["вөрэнти","баталгаа"], "guarantee":["гэрэнтий","баталгаа"],
  "technician":["тэкнишн","техникч"], "service":["сөрвис","үйлчилгээ"], "wrong":["ронг","буруу"],
  "hack":["хэк","халдах"], "virus":["вайрэс","вирус"], "scam":["скэм","луйвар"], "fake":["фэйк","хуурамч"],
  "private":["прайвэт","хувийн"], "personal":["пөрсэнл","хувийн"], "secure":["сикьюр","найдвартай"],
  "protect":["протэкт","хамгаалах"], "suspicious":["сэспишэс","сэжигтэй"], "information":["информэйшн","мэдээлэл"],
  "parcel":["парсл","илгээмж"], "receipt":["рисийт","баримт"], "complaint":["комплэйнт","гомдол"],
  "refund":["рифанд","мөнгө буцаалт"], "exchange":["иксчэйнж","солих"], "seller":["сэлэр","худалдагч"],
  "delivery":["диливэри","хүргэлт"], "track":["трэк","хянах"], "viral":["вайрэл","вирус мэт тархсан"],
  "profile":["проуфайл","профайл"], "content":["контэнт","контент"], "influencer":["инфлюэнсэр","нөлөөлөгч"],
  "follow":["фолоу","дагах"], "tag":["тэг","тэмдэглэх"], "comment":["комэнт","сэтгэгдэл"],
  "review":["ривью","шүүмж"], "rate":["рэйт","үнэлэх"], "instagram":["Инстаграм","Инстаграм"],
  "dial":["дайэл","дугаар цохих"], "voicemail":["войсмэйл","дуут шуудан"], "urgent":["өржэнт","яаралтай"],
  "restart":["ристарт","дахин эхлүүлэх"], "confirm":["кэнфөрм","баталгаажуулах"], "complete":["кэмплийт","дуусгах"],
  "step":["стэп","алхам"], "setting":["сэтинг","тохиргоо"], "enter":["энтэр","оруулах"],
  "nature":["нэйчэр","байгаль"], "environment":["инвайрэнмэнт","орчин"], "natural":["нэчрэл","байгалийн"],
  "likely":["лайкли","магадлалтай"], "unlikely":["анлайкли","магадлал багатай"],
  "according":["экординг","-ийн дагуу"], "act":["экт","үйлдэх / жүжиглэх"], "beauty":["бьюти","гоо үзэсгэлэн"],
  "campaign":["кэмпэйн","кампанит ажил"], "climate":["клаймэт","уур амьсгал"], "cloth":["клос","даавуу"],
  "coal":["коул","нүүрс"], "electric":["илэктрик","цахилгаан"], "electricity":["илэктрисити","цахилгаан"],
  "endangered":["индэйнжэрд","ховордсон"], "extinct":["икстинкт","устсан"], "farm":["фарм","ферм"],
  "flood":["флад","үер"], "drought":["драут","ган"], "habitat":["хэбитэт","амьдрах орчин"],
  "human":["хьюмэн","хүн"], "leopard":["лэпэрд","ирвэс"], "matter":["мэтэр","чухал байх / асуудал"],
  "melt":["мэлт","хайлах"], "ice":["айс","мөс"], "petition":["пэтишн","өргөдөл"],
  "plant":["плэнт","тарих / ургамал"], "pollute":["полют","бохирдуулах"], "polluted":["полютид","бохирдсон"],
  "pollution":["полюшн","бохирдол"], "predict":["придикт","таамаглах"], "produce":["продьюс","үйлдвэрлэх"],
  "recent":["рийснт","саяхны"], "recycle":["рисайкл","дахин боловсруулах"], "reuse":["рийюз","дахин ашиглах"],
  "reusable":["рийюзэбл","дахин ашиглах боломжтой"], "renewable":["ринуэбл","сэргээгдэх"],
  "resource":["рисорс","нөөц"], "responsibility":["риспонсэбилити","хариуцлага"],
  "rubbish":["рабиш","хог"], "waste":["вэйст","хаягдал / үрэх"], "litter":["литэр","хог хаях"],
  "separate":["сэпэрэйт","ялгах"], "solar":["соулэр","нарны"], "species":["спийшийз","зүйл (амьтан)"],
  "survive":["сөрвайв","амьд үлдэх"], "disappear":["дисэпиэр","алга болох"], "destroy":["дистрой","сүйтгэх"],
  "tap":["тэп","цорго"], "voice":["войс","дуу хоолой"], "volunteer":["волэнтиэр","сайн дурын"],
  "wild":["вайлд","зэрлэг"], "wildlife":["вайлдлайф","зэрлэг ан амьтан"], "hunt":["хант","агнах"],
  "rare":["рэр","ховор"], "population":["попюлэйшн","тоо толгой"], "fuel":["фьюэл","түлш"],
  "supply":["сэплай","нийлүүлэлт"], "reduce":["ридьюс","багасгах"], "increase":["инкрийс","нэмэгдэх"],
  "decrease":["дикрийс","буурах"], "amount":["эмаунт","хэмжээ"], "level":["лэвл","түвшин"],
  "effect":["ифэкт","нөлөө"], "affect":["эфэкт","нөлөөлөх"], "fewer":["фьюэр","цөөн"],
  "double":["дабл","хоёр дахин"], "rapidly":["рэпидли","хурдацтай"], "certain":["сөртн","итгэлтэй"],
  "possible":["посэбл","боломжтой"], "impossible":["импосэбл","боломжгүй"], "scientist":["сайэнтист","эрдэмтэн"],
  "data":["дэйтэ","өгөгдөл"], "generation":["жэнэрэйшн","үе"], "donate":["доунэйт","хандивлах"],
  "organization":["органайзэйшн","байгууллага"], "awareness":["эвэрнэс","мэдлэг ойлголт"],
  "action":["экшн","үйл ажиллагаа"], "spread":["спрэд","түгээх"], "raise":["рэйз","өсгөх / цуглуулах"],
  "forest":["форэст","ой"], "grassland":["грасленд","тал хээр"], "packaging":["пэкижинг","сав баглаа"],
  "bin":["бин","хогийн сав"], "plastic":["плэстик","хуванцар"], "warming":["ворминг","дулаарал"],
  "suppose":["сэпоуз","таамаглах"], "supposed":["сэпоузд","-ах ёстой (be supposed to)"],
  "unlike":["анлайк","-аас ялгаатай"], "whereas":["вэрэз","харин"], "similar":["симэлэр","төстэй"],
  "different":["дифрэнт","өөр"], "differ":["дифэр","ялгаатай байх"], "unique":["юнийк","өвөрмөц"],
  "you'd":["юд","та -х байсан / -сан нь дээр"], "we'd":["вид","бид -х байсан"],
  "he'd":["хид","тэр -х байсан"], "she'd":["шид","тэр -х байсан"], "they'd":["зэйд","тэд -х байсан"],
  "custom":["кастэм","ёс заншил"], "tradition":["трэдишн","уламжлал"], "traditional":["трэдишнл","уламжлалт"],
  "ceremony":["сэрэмони","ёслол"], "elder":["элдэр","ахмад"], "gather":["гэзэр","цуглах"],
  "decorate":["дэкэрэйт","чимэглэх"], "national":["нэшнл","үндэсний"], "ancient":["эйншэнт","эртний"],
  "grandparents":["грэндпэрэнтс","өвөө эмээ"], "grandmother":["грэндмазэр","эмээ"], "grandfather":["грэндфазэр","өвөө"],
  "bow":["бау","бөхийх"], "shake":["шэйк","сэгсрэх / гар барих"], "point":["пойнт","заах / цэг"],
  "polite":["полайт","эелдэг"], "impolite":["имполайт","эелдэг бус"], "rude":["рүд","бүдүүлэг"],
  "behave":["бихэйв","биеэ авч явах"], "manners":["мэнэрз","зан суртахуун"], "appropriate":["эпроуприэт","тохиромжтой"],
  "dairy":["дэри","сүүн бүтээгдэхүүн"], "dish":["диш","таваг хоол"], "flavour":["флэйвэр","амт"],
  "ingredient":["ингрийдиэнт","орц"], "serve":["сөрв","тавьж өгөх"], "boiled":["бойлд","чанасан"],
  "fried":["фрайд","шарсан"], "dried":["драйд","хатаасан"], "ger":["гэр","гэр"],
  "khuushuur":["хуушуур","хуушуур"], "buuz":["бууз","бууз"],
  "performance":["пөрформэнс","тоглолт"], "talented":["тэлэнтид","авьяастай"], "audience":["одиэнс","үзэгчид"],
  "lyrics":["лирикс","дууны үг"], "melody":["мэлэди","аялгуу"], "instrument":["инструмэнт","хөгжмийн зэмсэг"],
  "prize":["прайз","шагнал"], "director":["дэрэктэр","найруулагч"], "plot":["плот","үйл явдал"],
  "scene":["сийн","үзэгдэл"], "base":["бэйс","үндэслэх / суурь"], "based":["бэйст","үндэслэсэн"],
  "set":["сэт","байрлуулах / олонлог"], "subtitle":["сабтайтл","хадмал"], "realistic":["риэлистик","бодитой"],
  "touching":["тачинг","сэтгэл хөдөлгөм"], "novel":["новл","роман"], "author":["озэр","зохиолч"],
  "chapter":["чэптэр","бүлэг"], "cover":["кавэр","хавтас"], "translate":["трэнслэйт","орчуулах"],
  "translated":["трэнслэйтид","орчуулагдсан"], "fiction":["фикшн","уран зохиол"], "poetry":["поуэтри","яруу найраг"],
  "library":["лайбрэри","номын сан"], "bestseller":["бэстсэлэр","шилдэг борлуулалттай"],
  "culture":["калчэр","соёл"], "attitude":["этитюд","хандлага"], "value":["вэлью","үнэт зүйл"],
  "society":["сэсайэти","нийгэм"], "adapt":["эдэпт","дасан зохицох"], "shock":["шок","цочрол"],
  "alive":["элайв","амьд"], "expect":["икспэкт","хүлээх"], "example":["игзэмпл","жишээ"],
  "instance":["инстэнс","тохиолдол"], "conclusion":["кэнклюжн","дүгнэлт"], "firstly":["фөрстли","нэгдүгээрт"],
  "secondly":["сэкэндли","хоёрдугаарт"], "thirdly":["сөрдли","гуравдугаарт"], "summary":["самэри","товчлол"],
  "presentation":["призэнтэйшн","илтгэл"], "introduce":["интродьюс","танилцуулах"], "topic":["топик","сэдэв"],
  "compliment":["комплимэнт","магтаал"], "celebrate":["сэлэбрэйт","тэмдэглэх"],
  "rather":["разэр","илүү (would rather)"], "actually":["экчуэли","үнэндээ"],
  "apparently":["эпэрэнтли","гэнэ лээ"], "seem":["сийм","санагдах"], "seems":["сиймз","санагдаж байна"],
  "possibly":["посэбли","боломжтой бол"], "available":["эвэйлэбл","боломжтой / сул"],
  "dear":["диэр","хүндэт"], "sir":["сөр","эрхэм ноён"], "madam":["мэдэм","хатагтай"],
  "mr":["мистэр","ноён"], "ms":["миз","хатагтай"], "mrs":["мисиз","хатагтай (гэрлэсэн)"],
  "sincerely":["синсиэрли","чин сэтгэлээсээ"], "faithfully":["фэйсфэли","үнэнчээр"],
  "inform":["информ","мэдэгдэх"], "request":["рикуэст","хүсэлт"], "enquiry":["инкуайэри","лавлагаа"],
  "regarding":["ригардинг","-ийн талаар"], "respond":["риспонд","хариулах"], "attach":["этэтч","хавсаргах"],
  "formal":["формл","албан ёсны"], "informal":["информл","албан бус"], "grateful":["грэйтфул","талархсан"],
  "due":["ду","-аас болсон (due to)"], "therefore":["зэрфор","иймээс"], "reason":["рийзн","шалтгаан"],
  "circumstance":["сөркэмстэнс","нөхцөл байдал"], "inconvenience":["инкэнвиниэнс","таагүй байдал"],
  "misunderstanding":["мисандэрстэндинг","үл ойлголцол"], "misunderstand":["мисандэрстэнд","буруу ойлгох"],
  "noisy":["нойзи","чимээ шуугиантай"], "faulty":["фолти","гэмтэлтэй"], "undercooked":["андэркүкт","болоогүй"],
  "overcooked":["оувэркүкт","хэт болсон"], "option":["опшн","сонголт"], "proof":["прүф","нотолгоо"],
  "purchase":["пөрчэс","худалдан авалт"], "policy":["полиси","журам"], "voucher":["ваучэр","эрхийн бичиг"],
  "unused":["анюзд","хэрэглээгүй"], "original":["эрижинл","эх / анхны"], "credit":["крэдит","зээл"],
  "transfer":["трэнсфөр","шилжүүлэх"], "deposit":["дипозит","хийх (мөнгө)"], "withdraw":["виздро","авах (мөнгө)"],
  "form":["форм","маягт"], "ahead":["эхэд","урагш (go ahead)"], "engaged":["ингэйжд","завгүй (утас)"],
  "extension":["икстэншн","дотуур дугаар"], "arrange":["эрэйнж","зохион байгуулах"],
  "envelope":["энвэлоуп","дугтуй"], "stamp":["стэмп","марк"], "weigh":["вэй","жинлэх"],
  "registered":["рэжистэрд","баталгаат"], "express":["икспрэс","шуурхай"], "fragile":["фрэжайл","эмзэг"],
  "insure":["иншүр","даатгуулах"], "reception":["рисэпшн","хүлээн авах"], "view":["вью","үзэмж"],
  "heating":["хийтинг","халаалт"], "upgrade":["апгрэйд","сайжруулах"], "badly":["бэдли","муугаар"],
  "high":["хай","өндөр"], "higher":["хайэр","илүү өндөр"], "fourteen":["фортийн","арван дөрөв"],
  "rule":["рүл","дүрэм"], "tone":["тоун","өнгө аяс"], "phrase":["фрэйз","хэллэг"],
  "greeting":["гриитинг","мэндчилгээ"], "client":["клайэнт","үйлчлүүлэгч"], "style":["стайл","хэв маяг"],
  "context":["контэкст","агуулга"], "guess":["гэс","таах"], "word":["вөрд","үг"],
  "useless":["юслэс","хэрэггүй"], "careless":["кэрлэс","хайхрамжгүй"], "careful":["кэрфул","болгоомжтой"],
  "prefix":["прийфикс","угтвар"], "suffix":["сафикс","дагавар"], "root":["рүт","үндэс"],
  "meaning":["мийнинг","утга"], "skim":["ским","гүйлгэн унших"], "scan":["скэн","хайж унших"],
  "paragraph":["пэрэграф","догол мөр"], "title":["тайтл","гарчиг"], "accent":["эксэнт","аялга"],
  "speed":["спийд","хурд"], "catch":["кэтч","барих / сонсоод авах"], "focus":["фоукэс","төвлөрөх"],
  "sound":["саунд","дуу авиа"], "hear":["хийр","сонсох"], "chat":["чэт","чалчих"],
  "stuff":["стаф","юмс"], "certainly":["сөртнли","гарцаагүй"], "hope":["хоуп","найдах"],
  "lately":["лэйтли","сүүлийн үед"], "recently":["рийснтли","саяхан"],
  "forty":["форти","дөч"], "sixty":["сиксти","жар"], "seventy":["сэвнти","дал"],
  "ninety":["найнти","ер"], "twenty":["твэнти","хорь"], "hundred":["хандрэд","зуу"],
  "thousand":["саузэнд","мянга"], "million":["мильон","сая"],
  // ---- B1 М2 нэмэлт ----
  "despite":["диспайт","үл харгалзан"], "spite":["спайт","(in spite of = үл харгалзан)"],
  "moreover":["морэоувэр","түүнээс гадна"], "furthermore":["фөрзэрмор","цаашилбал"],
  "nevertheless":["нэвэрзэлэс","гэсэн хэдий ч"], "otherwise":["азэрвайз","эсрэгээр / өөрөөр"],
  "method":["мэсэд","арга"], "approach":["эпроуч","хандлага"], "technique":["тэкник","техник"],
  "memorise":["мэмэрайз","цээжлэх"], "memorize":["мэмэрайз","цээжлэх"], "revise":["ривайз","давтах"],
  "highlight":["хайлайт","тодруулах"], "summarise":["самэрайз","товчлох"], "repetition":["рэпэтишн","давталт"],
  "effective":["ифэктив","үр дүнтэй"], "retain":["ритэйн","санах ойд хадгалах"], "absorb":["эбзорб","шингээх"],
  "distraction":["дистрэкшн","сарниулагч"], "dictionary":["дикшэнэри","толь бичиг"],
  "platform":["плэтформ","платформ"], "enrol":["инроул","бүртгүүлэх"], "module":["модьюл","модуль"],
  "lecture":["лекчэр","лекц"], "tutor":["тютэр","багш / зөвлөх"], "assignment":["эсайнмэнт","даалгавар"],
  "certificate":["сөртификэйт","гэрчилгээ"], "interactive":["интэрэктив","интерактив"],
  "paced":["пэйст","хурдтай"], "self":["сэлф","өөрөө"], "alone":["элоун","дангаараа"],
  "prepare":["припэр","бэлдэх"], "prepared":["припэрд","бэлдсэн"], "essential":["исэншл","зайлшгүй чухал"],
  "praise":["прэйз","магтах"], "criticise":["критисайз","шүүмжлэх"], "criticism":["критисизм","шүүмжлэл"],
  "constructive":["кэнстрактив","бүтээлч"], "strict":["стрикт","хатуу"], "supportive":["сэпортив","дэмжигч"],
  "demonstrate":["дэмэнстрэйт","үзүүлэх"], "remind":["римайнд","сануулах"], "reminded":["римайндид","сануулсан"],
  "encourage":["инкаридж","зоригжуулах"], "grade":["грэйд","үнэлгээ"], "mark":["марк","оноо / тэмдэг"],
  "resit":["рийсит","дахин өгөх"], "cheat":["чийт","хуурах"], "pressure":["прэшэр","дарамт"],
  "evidence":["эвидэнс","нотолгоо"], "prove":["прүв","батлах"], "analyse":["энэлайз","задлан шинжлэх"],
  "source":["сорс","эх сурвалж"], "claim":["клэйм","мэдэгдэх"], "estimate":["эстимэйт","тооцоолох"],
  "significant":["сигнификэнт","ач холбогдолтой"], "survey":["сөрвэй","санал асуулга"],
  "slide":["слайд","слайд"], "outline":["аутлайн","тойм"], "handout":["хэндаут","тараах материал"],
  "visual":["вижуэл","үзүүлэн"], "chart":["чарт","график"], "illustrate":["илэстрэйт","жишээгээр харуулах"],
  "emphasise":["эмфэсайз","онцлох"], "engage":["ингэйж","татан оролцуулах"], "rehearse":["рихөрс","бэлтгэл хийх"],
  "feedback":["фийдбэк","санал шүүмж"], "suggestion":["сэгжэсчэн","санал"], "shorten":["шортн","богиносгох"],
  "defensive":["дифэнсив","өөрийгөө хамгаалсан"], "valid":["вэлид","үндэслэлтэй"],
  "behind":["бихайнд","ард / хойно"], "contact":["контэкт","харилцаа / холбогдох"],
  "convenience":["кэнвиниэнс","тохиромжтой байдал"], "classroom":["класрум","анги танхим"],
  "group":["грүп","бүлэг"], "essay":["эсэй","эсээ"], "argument":["аргюмэнт","үндэслэл / маргаан"],
  "viewpoint":["вьюпойнт","үзэл бодол"], "introduction":["интрэдакшн","оршил"], "thesis":["сийсис","гол санаа"],
  "objective":["эбжэктив","бодитой / зорилт"], "balanced":["бэлэнст","тэнцвэртэй"],
  "technology":["тэкнолэжи","технологи"], "oxford":["Оксфорд","Оксфорд"],

  // ---- B1 нэмэлт ----
  "become":["бикам","болох"], "became":["бикэйм","болсон (become)"],
  "wake":["вэйк","сэрэх"], "woke":["воук","сэрсэн (wake)"], "woken":["воукн","сэрсэн (V3)"],
  "forgotten":["форготн","мартсан (V3)"], "given":["гивн","өгсөн (V3)"], "thought":["сот","бодсон (think)"],
  "plan":["плэн","төлөвлөх / төлөвлөгөө"], "practise":["прэктис","дадлага хийх"],
  "procrastinate":["прокрэстинэйт","хойшлуулах"], "rush":["раш","яарах"], "hesitate":["хэзитэйт","эргэлзэх"],
  "needn't":["ниднт","хэрэггүй"], "determined":["дитөрминд","шийдэмгий"], "overwhelmed":["оувэрвэлмд","дарамттай"],
  "own":["оун","өөрийн / эзэмших"], "same":["сэйм","ижил"], "low":["лоу","бага / гутарсан"],
  "term":["төрм","хугацаа / нэр томьёо"], "crazy":["крэйзи","галзуу"], "automatic":["отэмэтик","автомат"],
  "hindsight":["хайндсайт","эргэн харах"], "setback":["сэтбэк","саад"], "struggle":["страгл","тэмцэх"],
  // B1 М1 үгийн сан
  "aim":["эйм","зорилт"], "target":["таргит","тавьсан хэмжээ"], "accomplish":["экомплиш","гүйцэлдүүлэх"],
  "pursue":["пөрсью","эрэлхийлэх"], "ambitious":["эмбишэс","амбицтай"], "milestone":["майлстоун","гол үе шат"],
  "commit":["кэмит","амлалт өгөх"], "potential":["потэншл","боломж"], "discipline":["дисиплин","сахилга бат"],
  "consistent":["кэнсистэнт","тогтвортой"], "maintain":["мэйнтэйн","хадгалах"], "drive":["драйв","хөшүүрэг / жолоодох"],
  "passion":["пэшн","хүсэл тэмүүлэл"], "enthusiasm":["инсюзиэзм","урам зориг"], "encourage":["инкаридж","зоригжуулах"],
  "discourage":["дискаридж","урам хугалах"], "persistent":["пөрсистэнт","тэвчээртэй"],
  "priority":["прайорити","тэргүүлэх ач холбогдол"], "postpone":["поустпоун","хойшлуулах"],
  "efficient":["ифишнт","үр ашигтай"], "productive":["продактив","бүтээмжтэй"],
  "dedication":["дэдикэйшн","зүтгэл"], "sacrifice":["сэкрифайс","золиос"], "recognition":["рэкэгнишн","хүлээн зөвшөөрөл"],
  "consequence":["консикуэнс","үр дагавар"], "anxious":["энкшэс","түгшсэн"], "calm":["кам","тайван"],
  "brave":["брэйв","зоригтой"], "doubt":["даут","эргэлзэх"], "fear":["фиэр","айдас"],
  "alternative":["олтөрнэтив","өөр хувилбар"], "unnecessary":["аннэсэсэри","шаардлагагүй"],
  "pointless":["пойнтлэс","утгагүй"], "develop":["дивэлэп","хөгжих"], "steadily":["стэдили","тогтвортой"],
  "breakthrough":["брэйксрү","эрс ахиц"], "eventually":["ивэнчуэли","эцэст нь"], "patience":["пэйшнс","тэвчээр"],
  "overcome":["оувэркам","даван туулах"], "degree":["дигрий","зэрэг / хэм"],

  // ---- A2 нэмэлт ----
  "although":["олзоу","хэдийгээр ... ч"], "however":["хауэвэр","гэвч"], "while":["вайл","байхад"],
  "award":["эворд","шагнал"], "temple":["тэмпл","сүм"], "view":["вью","үзэмж"],
  "letter":["лэтэр","үсэг / захидал"], "game":["гэйм","тоглоом"], "toy":["той","тоглоом"],
  "surprising":["сэрпрайзинг","гэнэтийн"], "unforgettable":["анфоргетэбл","мартагдашгүй"],
  "unlucky":["анлаки","азгүй"], "lucky":["лаки","азтай"], "happen":["хэпэн","тохиолдох"],
  "land":["лэнд","газардах / газар"], "clap":["клэп","алга ташах"], "shine":["шайн","гэрэлтэх"],
  "stop":["стоп","зогсох"], "drop":["дроп","унагаах"], "notice":["ноутис","анзаарах"],
  "realize":["риэлайз","ойлгох"], "arrive":["эрайв","ирэх"], "leave":["лийв","явах"],
  "suddenly":["садэнли","гэнэт"], "luckily":["лакили","азаар"], "ring":["ринг","дуугарах / бөгж"],
  "camp":["кэмп","отоглох"], "peaceful":["пийсфл","амар амгалан"], "whole":["хоул","бүтэн"],
  "childhood":["чайлдхүд","бага нас"], "climb":["клайм","авирах"], "naughty":["ноти","тоглоомтой"],
  "journey":["жөрни","аялал"], "abroad":["эброд","гадаадад"], "airport":["эрпорт","нисэх буудал"],
  "flight":["флайт","нислэг"], "luggage":["лагиж","ачаа тээш"], "passport":["паспорт","паспорт"],
  "guide":["гайд","хөтөч"], "souvenir":["сүвэниэр","дурсгалын зүйл"], "biography":["байогрэфи","намтар"],
  "leader":["лийдэр","удирдагч"], "writer":["райтэр","зохиолч"], "invent":["инвэнт","зохион бүтээх"],
  "discover":["дискавэр","нээх"], "publish":["паблиш","хэвлүүлэх"], "achieve":["эчийв","амжилт гаргах"],
  "empire":["эмпайэр","эзэнт гүрэн"], "character":["кэрэктэр","дүр"], "beginning":["бигининг","эхлэл"],
  "ending":["эндинг","төгсгөл"], "sudden":["садн","гэнэтийн"], "immediately":["имийдиэтли","тэр дороо"],
  "meanwhile":["мийнвайл","тэр хооронд"], "afterwards":["афтэрвөрдз","дараа нь"],
  "interview":["интэрвью","ярилцлага"], "cause":["коз","шалтгаан"], "explain":["иксплэйн","тайлбарлах"],
  "wonder":["вандэр","гайхах"], "curious":["кюриэс","сониуч"], "detail":["дийтэйл","дэлгэрэнгүй"],
  "exactly":["игзэктли","яг"], "reunion":["рийюньон","уулзалт"], "coincidence":["коуинсидэнс","тохиолдол"],
  // онцгой V2/V3 хэлбэрүүд
  "taught":["тот","заасан (teach)"], "sang":["сэнг","дуулсан (sing)"], "swam":["свэм","сэлсэн (swim)"],
  "spoke":["споук","ярьсан (speak)"], "broke":["броук","эвдсэн (break)"], "caught":["кот","барьсан (catch)"],
  "rang":["рэнг","дуугарсан (ring)"], "drank":["дрэнк","уусан (drink)"], "flew":["флү","нисэсэн (fly)"],
  "wore":["вор","өмссөн (wear)"], "won":["ван","ялсан (win)"], "built":["билт","барьсан (build)"],
  "written":["ритн","бичигдсэн (write V3)"], "given":["гивн","өгсөн (give V3)"], "known":["ноун","мэдэгдсэн (know V3)"],
  "taken":["тэйкн","авсан (take V3)"], "spoken":["споукн","ярьсан (speak V3)"], "broken":["броукн","эвдэрсэн (break V3)"],
  "eaten":["ийтн","идсэн (eat V3)"], "seen":["сийн","харсан (see V3)"], "done":["дан","хийсэн (do V3)"],
  "gone":["гон","явсан (go V3)"], "begun":["биган","эхэлсэн (begin V3)"], "chosen":["чоузн","сонгосон (choose V3)"],
  // ---- нэмэлт: хичээлийн дасгалд гардаг үгс ----
  "add":["эд","нэмэх"], "address":["эдрэс","хаяг"], "adult":["эдалт","насанд хүрсэн"],
  "another":["эназэр","өөр нэг"], "apartment":["эпартмэнт","орон сууц"], "appointment":["эпойнтмэнт","цаг товлолт"],
  "avenue":["эвэню","өргөн чөлөө"], "baby":["бэйби","нялх хүүхэд"], "bathroom":["басрум","угаалгын өрөө"],
  "beautifully":["бьютифули","сайхнаар"], "bedroom":["бэдрум","унтлагын өрөө"], "best":["бэст","хамгийн сайн"],
  "bigger":["бигэр","илүү том"], "bill":["бил","тооцоо"], "bit":["бит","жаахан"], "block":["блок","квартал"],
  "book":["бүк","ном / захиалах"], "busy":["бизи","завгүй"], "cashmere":["кэшмиэр","ноолуур"],
  "celebrate":["сэлэбрэйт","тэмдэглэх"], "center":["сэнтэр","төв"], "check":["чэк","шалгах"],
  "chess":["чэс","шатар"], "class":["клас","хичээл / анги"], "clear":["клийр","цэлмэг / тодорхой"],
  "closer":["клоусэр","илүү ойр"], "congratulations":["конгрэчулэйшнз","баяр хүргэе"],
  "countryside":["кантрисайд","хөдөө"], "dad":["дэд","аав"], "delicious":["дэлишэс","амттай"],
  "district":["дистрикт","дүүрэг"], "dizzy":["дизи","толгой эргэсэн"], "dollar":["долар","доллар"],
  "drawing":["дроинг","зурах / зураг"], "eighty":["эйти","наян"], "entrance":["энтрэнс","орц"],
  "exercise":["эксэрсайз","дасгал"], "famous":["фэймэс","алдартай"], "favorite":["фэйворит","дуртай"],
  "fifteen":["фифтийн","арван тав"], "fifth":["фифс","тавдугаар"], "fifty":["фифти","тавь"],
  "film":["филм","кино"], "fine":["файн","сайн"], "fit":["фит","таарах"], "fitting":["фитинг","тохирох"],
  "floor":["флор","шал / давхар"], "food":["фүд","хоол"], "forecast":["форкаст","таамаглал"],
  "fourth":["форс","дөрөвдүгээр"], "free":["фрий","үнэгүй / чөлөөтэй"], "freezing":["фрийзинг","хөлдмөөр хүйтэн"],
  "friend":["фрэнд","найз"], "fun":["фан","хөгжилтэй"], "hang":["хэнг","өлгөх"], "health":["хэлс","эрүүл мэнд"],
  "hobby":["хоби","хобби"], "hold":["хоулд","барих"], "home":["хоум","гэр"], "hungry":["хангри","өлссөн"],
  "interested":["интрэстид","сонирхсон"], "introduce":["интродюс","танилцуулах"], "kilo":["кийло","килограмм"],
  "kindergarten":["киндэргартн","цэцэрлэг"], "knitting":["нитинг","сүлжих"], "knives":["найвз","хутганууд"],
  "knock":["нок","тогших"], "larger":["ларжэр","илүү том"], "last":["ласт","өнгөрсөн / сүүлчийн"],
  "life":["лайф","амьдрал"], "live":["лив","амьдрах"], "lives":["ливз","амьдардаг / амьдрал (олон)"],
  "living":["ливинг","амьдрах / зочны (өрөө)"], "lost":["лост","төөрсөн / алдсан"],
  "middle":["мидл","гол"], "minus":["майнэс","хасах"], "mom":["мом","ээж"],
  "neighbor":["нэйбэр","хөрш"], "neighborhood":["нэйбэрхүд","хороолол"], "nicer":["найсэр","илүү гоё"],
  "north":["норс","хойд"], "o'clock":["оклок","цаг (бүтэн)"], "once":["ванс","нэг удаа"],
  "order":["ордэр","захиалах"], "pack":["пэк","ачаа боох / багц"], "pair":["пэр","хос"],
  "pet":["пэт","тэжээвэр амьтан"], "pharmacy":["фармэси","эмийн сан"], "photo":["фото","зураг"],
  "photography":["фотогрэфи","гэрэл зураг"], "picture":["пикчэр","зураг"], "piece":["пийс","хэсэг"],
  "play":["плэй","тоглох"], "post":["поуст","шуудан"], "prescription":["прискрипшн","жор"],
  "quicker":["квикэр","илүү хурдан"], "quietly":["квайэтли","намуухан"], "rise":["райз","өсөх"],
  "shopping":["шопинг","дэлгүүр хэсэх"], "sing":["синг","дуулах"], "single":["сингл","нэг талын / ганц"],
  "sit":["сит","суух"], "size":["сайз","хэмжээ"], "smart":["смарт","ухаантай"], "sore":["сор","өвдөж буй"],
  "spell":["спэл","үсэглэх"], "stay":["стэй","байх / үлдэх"], "story":["стори","түүх"],
  "straight":["стрэйт","чигээрээ"], "sunglasses":["сангласиз","нарны шил"], "swim":["свим","сэлэх"],
  "tablet":["тэблэт","шахмал"], "tasty":["тэйсти","амттай"], "teeth":["тийс","шүднүүд"],
  "third":["сөрд","гуравдугаар"], "thirsty":["сөрсти","цангасан"], "thirteen":["сөртийн","арван гурав"],
  "thirty":["сөрти","гуч"], "throat":["сроут","хоолой"], "top":["топ","дээд тал"],
  "total":["тоутл","нийт"], "traditional":["трэдишнл","уламжлалт"], "traffic":["трэфик","замын хөдөлгөөн"],
  "travel":["трэвл","аялах"], "try":["трай","оролдох / өмсөж үзэх"], "tried":["трайд","оролдсон"],
  "tv":["тиви","зурагт"], "twelfth":["твэлфс","арван хоёрдугаар"], "twice":["твайс","хоёр удаа"],
  "vegetable":["вэжтэбл","хүнсний ногоо"], "wall":["вол","хана"], "wear":["вэр","өмсөх"],
  "weather":["вэзэр","цаг агаар"], "wooden":["вүдн","модон"], "wool":["вүл","ноос"],
  "work":["вөрк","ажил / ажиллах"], "worst":["вөрст","хамгийн муу"], "yoga":["йога","иог"],
  "foot":["фүт","хөл"], "feet":["фийт","хөл (олон)"], "wives":["вайвз","эхнэрүүд"],
  "loaves":["лоувз","талхнууд"], "shelves":["шэлвз","тавиурууд"], "leaves":["лийвз","навчнууд"],
  // товчилсон хэлбэрүүд
  "i'm":["айм","би байна (I am)"], "i'd":["айд","би -х байсан (I would)"], "i'll":["айл","би -нэ (I will)"],
  "i've":["айв","би -сан (I have)"], "it's":["итс","энэ бол (it is)"], "that's":["зэтс","тэр бол (that is)"],
  "he's":["хиз","тэр бол (he is)"], "she's":["шиз","тэр бол (she is)"], "we're":["виэр","бид (we are)"],
  "they're":["зэйр","тэд (they are)"], "you're":["юр","та (you are)"], "there's":["зэрз","байна (there is)"],
  "what's":["вотс","юу вэ (what is)"], "let's":["летс","-цгаая (let us)"],
  // газар / нэр
  "mongolia":["Монголиа","Монгол"], "ulaanbaatar":["Улаанбаатар","Улаанбаатар"],
  "darkhan":["Дархан","Дархан"], "kharkhorin":["Хархорин","Хархорин"], "bayangol":["Баянгол","Баянгол"],
  "japan":["Жэпэн","Япон"], "tsagaan":["Цагаан","Цагаан (сар)"], "sar":["Сар","сар (баяр)"],
  "naadam":["Наадам","Наадам"], "bat":["Бат","Бат (нэр)"], "enkhmaa":["Энхмаа","Энхмаа (нэр)"],
  // сар ба гараг
  "january":["жэнюэри","1-р сар"], "february":["фэбруэри","2-р сар"], "march":["марч","3-р сар"],
  "april":["эйприл","4-р сар"], "may":["мэй","5-р сар"], "june":["жүн","6-р сар"],
  "july":["жулай","7-р сар"], "august":["огэст","8-р сар"], "september":["сэптэмбэр","9-р сар"],
  "october":["октоубэр","10-р сар"], "november":["новэмбэр","11-р сар"], "december":["дисэмбэр","12-р сар"],
  "monday":["мандэй","Даваа"], "tuesday":["тюздэй","Мягмар"], "wednesday":["вэнздэй","Лхагва"],
  "thursday":["сөрздэй","Пүрэв"], "friday":["фрайдэй","Баасан"], "saturday":["сэтэрдэй","Бямба"],
  "sunday":["сандэй","Ням"]
};

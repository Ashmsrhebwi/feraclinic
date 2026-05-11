export interface GoogleReview {
  id: string;
  author: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  };
  authorImage?: string;
  rating: number;
  date: string;
  text: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  };
  lang: string;
  source: 'google';
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  // --- EN / ES Pinned ---
  {
    id: "en-1",
    author: {
      en: "Eren MUCO",
      ar: "إيرين موكو",
      tr: "Eren MUCO",
      fr: "Eren MUCO",
      es: "Eren MUCO",
      ru: "Эрен Муко"
    },
    authorImage: "/images/fera-clinic/reviews/eren-muco.webp",
    rating: 5,
    date: "2024-05-10",
    text: {
      en: "I recommend your place to everyone who has toothache because all of the operations were professional. The dentist I seen was so companionable and skillful in his job.",
      ar: "أنصح الجميع بزيارة هذا المكان لكل من يعاني من ألم في الأسنان، لأن جميع العمليات كانت احترافية. طبيب الأسنان الذي عاينني كان ودودًا للغاية وماهرًا في عمله.",
      tr: "Diş ağrısı çeken herkese burayı tavsiye ediyorum çünkü tüm operasyonlar profesyonelceydi. Gördüğüm diş hekimi işinde çok cana yakın ve becerikliydi.",
      fr: "Je recommande cet endroit à tous ceux qui ont mal aux dents car toutes les opérations étaient professionnelles. Le dentiste que j'ai vu était très sociable et compétent dans son travail.",
      es: "Recomiendo este lugar a todos los que tengan dolor de muelas porque todas las operaciones fueron profesionales. El dentista que me atendió fue muy amable y hábil en su trabajo.",
      ru: "Я рекомендую это место всем, у кого болят зубы, потому что все операции были профессиональными. Стоматолог, у которого я был, был очень общительным и мастером своего дела."
    },
    lang: "en",
    source: "google"
  },
  {
    id: "en-2",
    author: {
      en: "Maxim Sasha Khranovskyi",
      ar: "ماكسيم ساشا خرانوفسكي",
      tr: "Maxim Sasha Khranovskyi",
      fr: "Maxim Sasha Khranovskyi",
      es: "Maxim Sasha Khranovskyi",
      ru: "Максим Саша Храновский"
    },
    authorImage: "/images/fera-clinic/reviews/maxim-sasha-khranovskyi.webp",
    rating: 5,
    date: "2024-04-05",
    text: {
      en: "An excellent dental clinic in Istanbul! Professional doctors, modern equipment, and attentive patient care. High-quality treatment and excellent results. I was very satisfied. ♥️",
      ar: "عيادة أسنان ممتازة في اسطنبول! أطباء محترفون، ومعدات حديثة، ورعاية واهتمام بالمرضى. علاج عالي الجودة ونتائج ممتازة. لقد كنت راضياً جداً. ♥️",
      tr: "İstanbul'da mükemmel bir diş kliniği! Profesyonel doktorlar, modern ekipmanlar ve özenli hasta bakımı. Yüksek kaliteli tedavi ve mükemmel sonuçlar. Çok memnun kaldım. ♥️",
      fr: "Une excellente clinique dentaire à Istanbul ! Des médecins professionnels, des équipements modernes et des soins attentifs aux patients. Un traitement de haute qualité et d'excellents résultats. J'ai été très satisfait. ♥️",
      es: "¡Una excelente clínica dental en Estambul! Médicos profesionales, equipamiento moderno y atención personalizada al paciente. Tratamiento de alta calidad y excelentes resultados. Quedé muy satisfecho. ♥️",
      ru: "♥️ Отличная стоматологическая клиника в Стамбуле! Профессиональные врачи, современное оборудование, внимательное отношение к пациентам. Качественное лечение и прекрасный результат. Осталась очень довольна♥️"
    },
    lang: "en",
    source: "google"
  },
  {
    id: "en-3",
    author: {
      en: "Zuziwe Ndovela",
      ar: "زوزيوي ندوفيلا",
      tr: "Zuziwe Ndovela",
      fr: "Zuziwe Ndovela",
      es: "Zuziwe Ndovela",
      ru: "Зузиве Ндовела"
    },
    authorImage: "/images/fera-clinic/reviews/zuziwe-ndovela.webp",
    rating: 5,
    date: "2024-03-01",
    text: {
      en: "Professional doctors, caring staff and perfect results. Fera Clinic made me feel comfortable and confident throughout the entire process. Thank you for everything.",
      ar: "أطباء محترفون، وطاقم عمل مهتم، ونتائج مثالية. جعلتني عيادة فيرا أشعر بالراحة والثقة طوال العملية بأكملها. شكراً لكم على كل شيء.",
      tr: "Profesyonel doktorlar, ilgili personel ve mükemmel sonuçlar. Fera Clinic, tüm süreç boyunca kendimi rahat ve güvende hissetmemi sağladı. Her şey için teşekkürler.",
      fr: "Des médecins professionnels, un personnel attentionné et des résultats parfaits. La clinique Fera m'a permis de me sentir à l'aise et en confiance tout au long du processus. Merci pour tout.",
      es: "Médicos profesionales, personal atento y resultados perfectos. Fera Clinic me hizo sentir cómodo y seguro durante todo el proceso. Gracias por todo.",
      ru: "Профессиональные врачи, заботливый персонал и идеальные результаты. Клиника Fera позволила мне чувствовать себя комфортно и уверенно на протяжении всего процесса. Спасибо за все."
    },
    lang: "en",
    source: "google"
  },

  // --- TR ---
  {
    id: "tr-1",
    author: {
      en: "Cemil Akici",
      ar: "جميل أكجي",
      tr: "Cemil Akıcı",
      fr: "Cemil Akici",
      es: "Cemil Akici",
      ru: "Джемиль Акыджы"
    },
    rating: 5,
    date: "2024-05-15",
    text: {
      en: "Professionalism, attentiveness, and hygiene all in one. I recommend it to everyone.",
      ar: "الاحترافية والاهتمام والنظافة كلها في مكان واحد. أنصح بها الجميع.",
      tr: "Profesyonellik, ilgi ve hijyen bir arada. Herkese tavsiye ederim.",
      fr: "Professionnalisme, attention et hygiène, tout en un. Je le recommande à tout le monde.",
      es: "Profesionalismo, atención e higiene, todo en uno. Lo recomiendo a todo el mundo.",
      ru: "Профессионализм, внимательность и гигиена — все в одном. Рекомендую всем."
    },
    lang: "tr",
    source: "google"
  },
  {
    id: "tr-2",
    author: {
      en: "Sumeyue Pakdemir",
      ar: "سمية باكديمير",
      tr: "Sumeyue Pakdemir",
      fr: "Sumeyue Pakdemir",
      es: "Sumeyue Pakdemir",
      ru: "Сюмейе Пакдемир"
    },
    authorImage: "/images/fera-clinic/reviews/review-sumeyue-pakdemir.png",
    rating: 5,
    date: "2024-05-01",
    text: {
      en: "I was really very pleased. I felt very comfortable both in terms of hygiene and the care I received. My doctor kept me informed at every stage and was very kind.",
      ar: "لقد كنت سعيدة للغاية حقاً. شعرت براحة كبيرة من حيث النظافة والرعاية التي تلقيتها. أبقاني طبيبي على اطلاع في كل مرحلة وكان لطيفاً جداً.",
      tr: "Gerçekten çok memnun kaldım. Hem hijyen hem de ilgi açısından içim çok rahat etti. Doktorum her aşamada bilgilendirdi ve çok nazikti. Dişle ilgili korkusu olanlara gönül rahatlığıyla öneririm.",
      fr: "J'ai été vraiment très satisfait. Je me suis senti très à l'aise tant au niveau de l'hygiène que des soins reçus. Mon médecin m'a tenu informé à chaque étape et a été très gentil.",
      es: "Quedé realmente muy satisfecho. Me sentí muy cómodo tanto en términos de higiene como de la atención recibida. Mi médico me mantuvo informado en cada etapa y fue muy amable.",
      ru: "Я действительно осталась очень довольна. Мне было очень комфортно как с точки зрения гигиены, так и с точки зрения ухода. Мой врач информировал меня на каждом этапе и был очень добр."
    },
    lang: "tr",
    source: "google"
  },
  {
    id: "tr-3",
    author: {
      en: "Busra Yilmaz",
      ar: "بشرى يلماز",
      tr: "Büşra Yılmaz",
      fr: "Busra Yilmaz",
      es: "Busra Yilmaz",
      ru: "Бушра Йылмаз"
    },
    rating: 5,
    date: "2024-04-28",
    text: {
      en: "They were very nice and attentive.",
      ar: "لقد كانوا لطيفين للغاية ومهتمين.",
      tr: "Çok güzel çok güzel ilgilendiler.",
      fr: "Ils étaient très gentils et attentifs.",
      es: "Fueron muy amables y atentos.",
      ru: "Они были очень милы и внимательны."
    },
    lang: "tr",
    source: "google"
  },

  // --- RU ---
  {
    id: "ru-1",
    author: {
      en: "Maxim Sasha Khranovskyi",
      ar: "ماكسيم ساشا خرانوفسكي",
      tr: "Maxim Sasha Khranovskyi",
      fr: "Maxim Sasha Khranovskyi",
      es: "Maxim Sasha Khranovskyi",
      ru: "Максим Саша Храновский"
    },
    authorImage: "/images/fera-clinic/reviews/maxim-sasha-khranovskyi.webp",
    rating: 5,
    date: "2024-04-05",
    text: {
      en: "An excellent dental clinic in Istanbul! Professional doctors, modern equipment, and attentive patient care. High-quality treatment and excellent results. I was very satisfied. ♥️",
      ar: "عيادة أسنان ممتازة في اسطنبول! أطباء محترفون، ومعدات حديثة، ورعاية واهتمام بالمرضى. علاج عالي الجودة ونتائج ممتازة. لقد كنت راضياً جداً. ♥️",
      tr: "İstanbul'da mükemmel bir diş kliniği! Profesyonel doktorlar, modern ekipmanlar ve özenli hasta bakımı. Yüksek kaliteli tedavi ve mükemmel sonuçlar. Çok memnun kaldım. ♥️",
      fr: "Une excellente clinique dentaire à Istanbul ! Des médecins professionnels, des équipements modernes et des soins attentifs aux patients. Un traitement de haute qualité et d'excellents résultats. J'ai été très satisfait. ♥️",
      es: "¡Una excelente clínica dental en Estambul! Médicos profesionales, equipamiento moderno y atención personalizada al paciente. Tratamiento de alta calidad y excelentes resultados. Quedé muy satisfecho. ♥️",
      ru: "♥️ Отличная стоматологическая клиника в Стамбуле! Профессиональные врачи, современное оборудование, внимательное отношение к пациентам. Качественное лечение и прекрасный результат. Осталась очень довольна♥️"
    },
    lang: "ru",
    source: "google"
  },
  {
    id: "ru-2",
    author: {
      en: "Rod Bradford",
      ar: "رود برادفورد",
      tr: "Rod Bradford",
      fr: "Rod Bradford",
      es: "Rod Bradford",
      ru: "Род Брэдфорд"
    },
    rating: 5,
    date: "2024-03-20",
    text: {
      en: "I am very satisfied with the work done. Everything was done neatly and professionally. The color and shape of the teeth are 100% what I wanted.",
      ar: "أنا راضٍ جداً عن العمل المنجز. تم كل شيء بدقة واحترافية. لون وشكل الأسنان هو تماماً ما أردته بنسبة 100%.",
      tr: "Yapılan işten çok memnunum. Her şey temiz ve profesyonelce yapıldı. Dişlerin rengi ve şekli %100 istediğim gibi oldu.",
      fr: "Je suis très satisfait du travail accompli. Tout a été fait avec soin et professionnalisme. La couleur et la forme des dents sont à 100% ce que je voulais.",
      es: "Estoy muy satisfecho con el trabajo realizado. Todo se hizo de forma prolija y profesional. El color y la forma de los dientes son 100% lo que quería.",
      ru: "Очень доволен проделанной работой. Сделали всё аккуратно и профессионально. Цвет и форма зубов — на 100% то, что я хотел."
    },
    lang: "ru",
    source: "google"
  },
  {
    id: "ru-3",
    author: {
      en: "Arnold Fellows",
      ar: "أرنولد فيلوز",
      tr: "Arnold Fellows",
      fr: "Arnold Fellows",
      es: "Arnold Fellows",
      ru: "Арнольд Феллоуз"
    },
    rating: 5,
    date: "2024-03-15",
    text: {
      en: "I am delighted with the result. The teeth look very natural, the color is perfectly matched, the shape is exactly as I wanted. Thank you very much!",
      ar: "أنا سعيد جداً بالنتيجة. تبدو الأسنان طبيعية جداً، واللون متناسق تماماً، والشكل هو بالضبط ما أردته. شكراً جزيلاً لكم!",
      tr: "Sonuçtan çok memnunum. Dişler çok doğal görünüyor, rengi mükemmel uyumlu, şekli tam istediğim gibi. Çok teşekkür ederim!",
      fr: "Je suis ravi du résultat. Les dents ont l'air très naturelles, la couleur est parfaitement assortie, la forme est exactement comme je le voulais. Merci beaucoup !",
      es: "Estoy encantado con el resultado. Los dientes se ven muy naturales, el color combina perfectamente, la forma es exactamente como la quería. ¡Muchas gracias!",
      ru: "Я в восторге от результата. Зубы выглядят очень естественно, цвет подобран идеально, форма именно такая, как я хотел. Большое спасибо!"
    },
    lang: "ru",
    source: "google"
  },

  // --- FR ---
  {
    id: "fr-1",
    author: {
      en: "Corinne Socquet",
      ar: "كورين سوكيه",
      tr: "Corinne Socquet",
      fr: "Corinne Socquet",
      es: "Corinne Socquet",
      ru: "Корин Соке"
    },
    rating: 5,
    date: "2024-04-10",
    text: {
      en: "Professional, clean, kind and helpful. Fera Clinic was a perfect choice for my dental care, I recommend this clinic to everyone looking for dental treatment.",
      ar: "محترفة، نظيفة، لطيفة ومتعاونة. كانت عيادة فيرا خياراً مثالياً لرعايتي السنية، أنصح بهذه العيادة لكل من يبحث عن علاج للأسنان.",
      tr: "Profesyonel, temiz, nazik ve yardımsever. Fera Clinic diş bakımı için mükemmel bir seçimdi, diş tedavisi arayan herkese bu kliniği tavsiye ederim.",
      fr: "Professionnel, propre, gentil et serviable. La clinique Fera a été un choix parfait pour réaliser mes soins dentaires, je recommande cette clinique à toutes les personnes recherchant un traitement dentaire, merci clinique Fera",
      es: "Profesional, limpia, amable y servicial. Fera Clinic fue una elección perfecta para mi cuidado dental, recomiendo esta clínica a todos los que busquen tratamiento dental.",
      ru: "Профессионально, чисто, вежливо и полезно. Клиника Fera была идеальным выбором для моего стоматологического ухода, я рекомендую эту клинику всем, кто ищет лечение зубов."
    },
    lang: "fr",
    source: "google"
  },
  {
    id: "fr-2",
    author: {
      en: "Ameur Khemisti",
      ar: "عامر خميستي",
      tr: "Ameur Khemisti",
      fr: "Ameur Khemisti",
      es: "Ameur Khemisti",
      ru: "Амер Хемисти"
    },
    rating: 5,
    date: "2024-03-25",
    text: {
      en: "The surgeon and his assistants are a good team. Very professional. The surgery, which consisted of placing 12 high-quality implants, went very well.",
      ar: "الجراح ومساعدوه فريق جيد. محترفون جداً. الجراحة، التي تضمنت وضع 12 زرعة عالية الجودة، تمت بشكل جيد للغاية.",
      tr: "Cerrah ve asistanları iyi bir ekip. Çok profesyoneller. 12 adet yüksek kaliteli implant yerleştirilmesinden oluşan cerrahi işlem çok iyi geçti.",
      fr: "Le chirurgien et ses assistants sont une bonne équipe. Très professionnels. L’intervention chirurgicale qui consistait à me placer 12 implants de haute qualité, c’est très bien passée. Je n’ai rien senti et la cicatrisation est en cours. La visite post opératoire diligente par le chirurgien m’a soulagé.. l’équipe est au top et une deuxième visite m’attend dans trois mois… Respect à l’équipe médicale.. Sami l’assistant traducteur joue son rôle pleinement dans l’équipe… À bientôt",
      es: "El cirujano y sus asistentes son un buen equipo. Muy profesionales. La cirugía, que consistió en colocar 12 implantes de alta calidad, salió muy bien.",
      ru: "Хирург и его ассистенты — отличная команда. Очень профессионально. Операция, заключавшаяся в установке 12 высококачественных имплантатов, прошла очень хорошо."
    },
    lang: "fr",
    source: "google"
  },
  {
    id: "fr-3",
    author: {
      en: "Fernando Hars",
      ar: "فرناندو هارس",
      tr: "Fernando Hars",
      fr: "Fernando Hars",
      es: "Fernando Hars",
      ru: "Фернандо Харс"
    },
    rating: 5,
    date: "2024-02-15",
    text: {
      en: "I am satisfied with my first intervention with a reassuring team. I will return with confidence for the follow-up. Thank you to you and see you soon.",
      ar: "أنا راضٍ عن تدخلي الأول مع فريق مطمئن. سأعود بكل ثقة للمتابعة. شكراً لكم وإلى اللقاء قريباً.",
      tr: "Güven veren bir ekiple yaptığım ilk müdahaleden memnunum. Takip için güvenle geri döneceğim. Size teşekkürler ve yakında görüşmek üzere.",
      fr: "Sincèrement je suis satisfait de ma première intervention avec une équipe rassurante , je rentre dans mon pays une attente jusqu' en Mai et j.y retourne avec confiance surtout pour la suite qui me donnera le courage en janvier 2026 de faire la dentition inférieure dans cette clinic , merci à vous et à bientôt en mai",
      es: "Estoy satisfecho con mi primera intervención con un equipo que transmite confianza. Volveré con seguridad para el seguimiento. Gracias y hasta pronto.",
      ru: "Я доволен своим первым вмешательством с командой, внушающей доверие. Я вернусь с уверенностью для продолжения. Спасибо вам и до скорой встречи."
    },
    lang: "fr",
    source: "google"
  },

  // --- AR ---
  {
    id: "ar-1",
    author: {
      en: "Abd Allojia",
      ar: "عبد اللوجيا",
      tr: "Abd Allojia",
      fr: "Abd Allojia",
      es: "Abd Allojia",
      ru: "Абд Аллоджиа"
    },
    rating: 5,
    date: "2024-05-01",
    text: {
      en: "Thank you to everyone, the services were very good. I was received at the airport and followed up by the doctor. The implants were done very well. I want to thank everyone.",
      ar: "شكرا للجميع كانت للخدمات جيد جدا فقد تم استقبال من المطار و متابعة حالاتي من قبل الدكتور و تم عمل الزرعات بشكل جيد جدا اود شكر الجميع لكي ا انساه أحد موافقين",
      tr: "Herkese teşekkürler, hizmetler çok iyiydi. Havaalanında karşılandım ve doktor tarafından takip edildim. İmplantlar çok iyi yapıldı. Herkese teşekkür etmek istiyorum.",
      fr: "Merci à tous, les services étaient très bons. J'ai été reçu à l'aéroport et suivi par le médecin. Les implants ont été très bien faits. Je tiens à remercier tout le monde.",
      es: "Gracias a todos, los servicios fueron muy buenos. Fui recibido en el aeropuerto y seguido por el médico. Los implantes se hicieron muy bien. Quiero agradecer a todos.",
      ru: "Спасибо всем, услуги были очень хорошими. Меня встретили в аэропорту и наблюдали у врача. Имплантация была сделана очень хорошо. Хочу поблагодарить всех."
    },
    lang: "ar",
    source: "google"
  },
  {
    id: "ar-2",
    author: {
      en: "Wafa Lord",
      ar: "وفاء لورد",
      tr: "Wafa Lord",
      fr: "Wafa Lord",
      es: "Wafa Lord",
      ru: "Вафа Лорд"
    },
    rating: 5,
    date: "2024-04-15",
    text: {
      en: "The clinic is very excellent and the treatment of the medical staff is more than wonderful. I wish you progress and success.",
      ar: "العيادة كتير ممتازة والتعامل الكادر الطبي اكتر من رائع اتمنى التقدم والنجاح يارب",
      tr: "Klinik çok mükemmel ve tıbbi personelin yaklaşımı harikadan da öte. Size ilerleme ve başarılar dilerim.",
      fr: "La clinique est excellente et le traitement du personnel médical est plus que merveilleux. Je vous souhaite progrès et succès.",
      es: "La clínica es excelente y el trato del personal médico es más que maravilloso. Les deseo progreso y éxito.",
      ru: "Клиника просто отличная, а отношение медицинского персонала более чем замечательное. Желаю вам прогресса и успехов."
    },
    lang: "ar",
    source: "google"
  },
  {
    id: "ar-3",
    author: {
      en: "Ahmad Jendi",
      ar: "أحمد جندي",
      tr: "Ahmad Jendi",
      fr: "Ahmad Jendi",
      es: "Ahmad Jendi",
      ru: "Ахмад Дженди"
    },
    rating: 5,
    date: "2024-03-20",
    text: {
      en: "All respect and appreciation in Istanbul Fera Clinic. Best service and very good treatment. I recommend Fera Clinic.",
      ar: "كل الاحترام والتقدير في اسطنبول fera clinic افضل خدمة والتعامل كتير جيد وشكراً للاستاذ ادم اوصي ب fera clinic",
      tr: "İstanbul Fera Clinic'e tüm saygı ve takdirlerimle. En iyi hizmet ve çok iyi muamele. Fera Clinic'i tavsiye ederim.",
      fr: "Tout mon respect et mon appréciation à la clinique Fera d'Istanbul. Meilleur service et très bon traitement. Je recommande la clinique Fera.",
      es: "Todo mi respeto y aprecio a Fera Clinic en Estambul. El mejor servicio y muy buen trato. Recomiendo Fera Clinic.",
      ru: "Все мое уважение и признательность клинике Fera в Стамбуле. Лучший сервис и очень хорошее отношение. Рекомендую клинику Fera."
    },
    lang: "ar",
    source: "google"
  }
];

export const GOOGLE_REVIEW_LINK = "https://g.page/r/CecRcyst1LmcEAE/review";

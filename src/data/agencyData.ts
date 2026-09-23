import { ServiceItem, DestinationItem, PackageItem, StepItem, WhyItem } from '../types';

export const AGENCY_CONFIG = {
  name: 'وكالة الصادق للسفريات والسياحة',
  shortName: 'الصادق',
  subTitle: 'للسفريات والسياحة',
  phone: '+967 777 940 008',
  phoneClean: '967777940008',
  whatsappUrl: 'https://wa.me/967777940008',
  instagram: '@sadeq_travel',
  instagramUrl: 'https://instagram.com/sadeq_travel',
  facebookUrl: 'https://facebook.com/sadeqtravel',
  xUrl: 'https://x.com/sadeq_travel',
  address: {
    governorate: 'حضرموت',
    city: 'المكلا',
    area: 'فوه — المساكن',
    street: 'الشارع العام',
    landmark: 'بجانب مركز جامعة حضرموت لطب الأسرة',
    fullText: 'حضرموت — المكلا، فوه — المساكن، الشارع العام، بجانب مركز جامعة حضرموت لطب الأسرة',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=جامعة+حضرموت+طب+الأسرة+المكلا+فوه'
  },
  branches: [
    {
      id: 'main',
      title: 'المركز الرئيسي — المكلا',
      location: 'حضرموت — المكلا، فوه — المساكن، الشارع العام، بجانب مركز جامعة حضرموت لطب الأسرة',
      status: 'مفتوح لاستقبال العملاء',
      phone: '+967 777 940 008'
    },
    {
      id: 'wadi',
      title: 'فرع الوادي — حريضة',
      location: 'حضرموت — الوادي / حريضة',
      status: 'قيد التحديث والاعتماد الرسمي',
      phone: '+967 777 940 008'
    }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'visas',
    number: '01',
    title: 'التأشيرات',
    description: 'نساعدك في إجراءات التأشيرات السياحية والعلاجية والزيارة والعمل والدراسة، بحسب الوجهة والمتطلبات المتاحة.',
    features: ['تأشيرات سياحية وزيارة', 'تأشيرات علاجية ودراسية', 'متابعة المتطلبات الرسمية']
  },
  {
    id: 'flights',
    number: '02',
    title: 'حجوزات الطيران',
    description: 'خيارات حجز الرحلات الجوية ومساعدتك في ترتيب خط سير الرحلة.',
    features: ['مقارنة أفضل مسارات السفر', 'مرونة في التوقيت والوجهات', 'دعم تعديل وتأكيد الحجوزات']
  },
  {
    id: 'hotels',
    number: '03',
    title: 'حجز الفنادق',
    description: 'خيارات إقامة مناسبة لرحلتك مع تنظيم تفاصيل السكن.',
    features: ['فنادق عائلية وتجارية', 'خيارات قرب الحرم في مكة والمدينة', 'تأكيد فوري وترتيبات مسبقة']
  },
  {
    id: 'transport',
    number: '04',
    title: 'النقل',
    description: 'خدمات النقل الدولي والداخلي المرتبطة بالرحلة والبرامج السياحية.',
    features: ['استقبال وتوديع في المطارات', 'نقل بري مريح بين المدن', 'سيارات خاصة وحافلات حديثة']
  },
  {
    id: 'umrah',
    number: '05',
    title: 'العمرة والزيارة',
    description: 'برامج وخدمات مرتبطة بالعمرة والزيارة تشمل التأشيرة والسكن والنقل بحسب البرنامج.',
    features: ['إصدار تأشيرات العمرة والزيارة', 'سكن بمستويات متعددة', 'إشراف ومتابعة طوال الرحلة']
  },
  {
    id: 'tours',
    number: '06',
    title: 'الرحلات والبرامج السياحية',
    description: 'برامج سياحية ورحلات موسمية إلى وجهات مختارة.',
    features: ['جداول سفر مدروسة بعناية', 'رحلات فردية وعائلية', 'وجهات طبيعية وثقافية مختارة']
  }
];

export const DESTINATIONS_LIST: DestinationItem[] = [
  {
    id: 'saudi',
    name: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    category: 'عمرة، زيارة، عمل وسياحة',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1200&auto=format&fit=crop',
    highlight: 'برامج العمرة وزيارة الحرمين الشريفين والمدن الرئيسية'
  },
  {
    id: 'oman',
    name: 'سلطنة عُمان',
    nameEn: 'Sultanate of Oman',
    category: 'طبيعة، سياحة وأعمال',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg/1280px-Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg',
    highlight: 'صلالة، مسقط ومناظر الجبال والواحات الساحلية'
  },
  {
    id: 'uae',
    name: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    category: 'سياحة، تسوق وتجارة',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    highlight: 'دبي وأبوظبي، معالم عالمية وأنشطة عائلية متكاملة'
  },
  {
    id: 'india',
    name: 'جمهورية الهند',
    nameEn: 'India',
    category: 'علاج، دراسة وسياحة',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
    highlight: 'مستشفيات رائدة ومراكز تعليمية ومعالم تاريخية'
  },
  {
    id: 'qatar',
    name: 'دولة قطر',
    nameEn: 'State of Qatar',
    category: 'سياحة وزيارات',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Doha%2C_Qatar.JPG/1280px-Doha%2C_Qatar.JPG',
    highlight: 'الدوحة، كورنيش الواجهة البحرية والمتاحف الثقافية'
  },
  {
    id: 'bahrain',
    name: 'مملكة البحرين',
    nameEn: 'Kingdom of Bahrain',
    category: 'سياحة عائلية وقصيرة',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Manama%2C_Bahrain_Decembre_2014.jpg/1280px-Manama%2C_Bahrain_Decembre_2014.jpg',
    highlight: 'المنامة، الأسواق العريقة والمنتجعات الساحلية'
  },
  {
    id: 'seychelles',
    name: 'جزر سيشل',
    nameEn: 'Seychelles',
    category: 'استجمام وشواطئ طبيعية',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    highlight: 'مياه فيروزية وجزر استوائية للاسترخاء التام'
  },
  {
    id: 'more',
    name: 'وجهات دولية أخرى',
    nameEn: 'International Destinations',
    category: 'استفسارات مخصصة',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    highlight: 'نوفر متابعة وتنسيق للوجهات العالمية حسب الاشتراطات'
  }
];

export const PACKAGES_LIST: PackageItem[] = [
  {
    id: 'seasonal',
    number: '01',
    title: 'رحلات موسمية',
    description: 'رحلات مبرمجة في المواسم السياحية والإجازات لأفضل الوجهات الملائمة للأجواء والأنشطة.',
    included: ['تنسيق الطيران والإقامة', 'مرونة في المدة الزمنية', 'دعم وتوجيه كامل طوال الرحلة'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'tourism',
    number: '02',
    title: 'برامج سياحية',
    description: 'خطط سفر مصممة للاستمتاع بالطبيعة والمعالم الثقافية والاسترخاء للأفراد والعائلات.',
    included: ['خيارات فنادق مريحة ومجربة', 'نقل محلي منظم', 'اقتراحات مسارات وأنشطة مميزة'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'custom',
    number: '03',
    title: 'رحلات مخصصة',
    description: 'صمم رحلتك حسب تفضيلاتك وميزانيتك من اختيار الوجهة ونوع السكن إلى وسائل النقل.',
    included: ['تخصيص كامل للمسار والتواريخ', 'حلول مرنة للمجموعات والعائلات', 'استشارة شخصية مع فريق الوكالة'],
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop'
  }
];

export const WHY_US_ITEMS: WhyItem[] = [
  {
    number: '01',
    title: 'خدمات متعددة في مكان واحد',
    description: 'تأشيرة، طيران، فنادق، نقل وبرامج سفر منظمة لتوفير وقتك وجهدك.'
  },
  {
    number: '02',
    title: 'معرفة بإجراءات السفر',
    description: 'نساعدك على فهم المتطلبات والخطوات المرتبطة بالرحلة وفق أحدث الأنظمة.'
  },
  {
    number: '03',
    title: 'خدمات للأفراد والعائلات',
    description: 'حلول سفر مرنة تناسب احتياجات مختلفة مع مراعاة راحة وخصوصية العائلة.'
  },
  {
    number: '04',
    title: 'تواصل مباشر',
    description: 'يمكنك التواصل مع الوكالة للاستفسار عن التفاصيل والبرامج المتاحة في أي وقت.'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'اختر وجهتك',
    description: 'حدد الدولة أو نوع الرحلة التي ترغب بها سواء كانت تأشيرة، عمرة، علاج أو استجمام.'
  },
  {
    number: '02',
    title: 'تواصل معنا مباشرة',
    description: 'شاركنا تفاصيل رحلتك عبر محادثة واتساب المباشرة أو الاتصال الهاتفي السريع مع الفريق.'
  },
  {
    number: '03',
    title: 'نرتب التفاصيل',
    description: 'نتولى تجهيز متطلبات التأشيرة، تذاكر الطيران، حجوزات الإقامة وبرامج النقل.'
  },
  {
    number: '04',
    title: 'تستعد للرحلة',
    description: 'تستلم مستندات السفر وجدولك بوضوح تام وتنطلق في رحلتك باطمئنان وراحة بال.'
  }
];

export const SERVICE_OPTIONS = [
  { value: 'visa', label: 'تأشيرة' },
  { value: 'flight', label: 'حجز طيران' },
  { value: 'hotel', label: 'فندق' },
  { value: 'transport', label: 'نقل' },
  { value: 'umrah', label: 'عمرة' },
  { value: 'visit', label: 'زيارة' },
  { value: 'tour', label: 'رحلة سياحية' },
  { value: 'general', label: 'استفسار عام' }
];

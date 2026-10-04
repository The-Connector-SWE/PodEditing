function copy(ar) {
    const I = {
      film: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4M3 12h18',
      phone: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM10 9l5 3-5 3z',
      wave: 'M2 12h2M6 8v8M10 4v16M14 7v10M18 10v4M22 12h-1',
      cc: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM6 14h4M13 14h5M6 10h8M16 10h2',
      img: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM21 15l-5-5L5 21M9 7a2 2 0 1 0 0 4a2 2 0 1 0 0-4z',
      layers: 'M12 2l10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5',
      upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
      cut: 'M6 3a3 3 0 1 0 0 6a3 3 0 1 0 0-6zM6 15a3 3 0 1 0 0 6a3 3 0 1 0 0-6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12',
      review: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9 10l2 2 4-4',
      send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z',
      book: 'M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 13l2 2 4-4'
    };
    if (!ar) return {
      draft: 'Internal preview · prices proposed, pending approval',
      brandTag: 'Pod Editing',
      nav1: 'Services', nav2: 'How it works', nav3: 'Pricing', nav4: 'Handover', nav5: 'FAQ',
      ctaShort: 'Get started', ctaMain: 'Start your project', ctaPricing: 'See pricing',
      heroEyebrow: 'Pod Editing · Remote · EN / AR',
      heroTitle1: 'You record.', heroTitle2: 'We make it a show.',
      heroSub: 'Remote editing & post-production',
      heroLead: 'The same editing team behind PodMedia studios, now for every creator, wherever you record. Send raw footage; get back a broadcast-ready episode, reels and captions in Arabic and English.',
      chips: ['Multi-cam', 'Audio post', 'Reels'], chipMore: '+3 more',
      stats: [ { label: 'First edit', value: '3 business days' }, { label: 'Feedback', value: '2 rounds included' }, { label: 'Languages', value: 'Arabic · English' }, { label: 'Markets', value: '8 cities' } ],
      watch: 'Watch example', exSoon: 'Example coming soon', exSoonSub: 'We’re cutting a sample for this service. Ask us for recent work in the meantime.', exClose: 'Close',
      s1k: 'Services', s1t: 'Everything after the record button', s1l: 'Edited by PodMedia’s in-house team, the same editors behind our studio productions.',
      services: [
        { ex: 'edit', icon: I.film, tag: 'Edit', name: 'Full episode edit', desc: 'Multi-cam switching, cuts, filler removal, colour, mix and master.' },
        { ex: 'audio', icon: I.wave, tag: 'Audio', name: 'Audio post', desc: 'Noise cleanup, levelling and masters ready for Spotify and Apple.' },
        { ex: 'reels', icon: I.phone, tag: 'Social', name: 'Reels & shorts', desc: 'Vertical cuts with a hook, burned-in captions and a CTA end card.' },
        { ex: 'captions', icon: I.cc, tag: 'Language', name: 'Captions & subtitles', desc: 'Accurate Arabic and English subtitles, burned-in or as SRT files.' },
        { ex: 'packaging', icon: I.img, tag: 'Packaging', name: 'Thumbnails & show notes', desc: 'YouTube thumbnails, titles, chapters and episode descriptions.' },
        { ex: 'graphics', icon: I.layers, tag: 'Brand', name: 'Show graphics', desc: 'Lower thirds, title cards and transitions in your show’s brand.' }
      ],
      s2k: 'How it works', s2t: 'From raw footage to a published episode', s2l: 'Five steps on a fixed timeline. The clock starts once your complete materials reach us. Business days are Sunday to Thursday, excluding public holidays.',
      steps: [
        { num: 'Step 01', icon: I.book, name: 'Book', desc: 'Send the form. We confirm your package and share your show\u2019s Dropbox folder within 24 hours.' },
        { num: 'Step 02', icon: I.upload, name: 'Hand over', desc: 'Upload to the shared folder, or drop your hard drive at the PodMedia studio in your city.' },
        { num: 'Step 03', icon: I.cut, name: 'We edit', desc: 'Your first edit arrives in 3 business days, or 5 for 4K.' },
        { num: 'Step 04', icon: I.review, name: 'Review', desc: 'Two feedback rounds, 3 business days each. Recommended reel drafts arrive with V2 of your episode.' },
        { num: 'Step 05', icon: I.layers, name: 'Finish & deliver', desc: 'We add your branding and subtitles, then deliver the final episode and reels.' }
      ],
      s3k: 'Pricing', s3t: 'Pay per episode, or plan for the season', s3l: 'Start with one episode, or move to a monthly plan when you publish on a schedule.',
      tabSingle: 'Single projects', tabPlans: 'Monthly plans', recommended: 'Recommended', sar: 'SAR', perMonth: '/ month',
      single: [
        { name: 'Episode Edit', for: 'One episode', price: '800', usd: '215', save: '', feats: ['1 full episode, up to 60 min of raw footage', 'Multi-cam, colour, mix and master', '1080p delivery (4K +SAR 200)'], cta: 'Start your project' },
        { name: 'Episode + Reels', for: 'Full publish kit', price: '1,750', usd: '465', save: 'Save 10%', featured: true, feats: ['Episode Edit', '4 reels with captions', 'Thumbnail', 'Chapters and show notes'], cta: 'Start your project' },
        { name: 'Reels Pack', for: 'Clips only', price: '800', usd: '215', save: '', feats: ['4 reels from one episode', 'Captions in Arabic or English', 'Hooks and CTA end cards'], cta: 'Start your project' }
      ],
      plans: [
        { name: 'Starter', for: 'Every 2 weeks', price: '2,900', usd: '775', save: 'Save 9%', feats: ['2 episodes + 8 reels a month', 'Reels with captions', 'Same turnaround as single projects'], cta: 'Start a plan' },
        { name: 'Growth', for: 'Weekly shows', price: '7,500', usd: '2,000', save: 'Save 17%', featured: true, feats: ['4 episodes + 16 reels a month', '4 thumbnails + 4 teasers', 'Chapters and show notes'], cta: 'Start a plan' },
        { name: 'Studio-grade', for: 'Several shows', price: '14,500', usd: '3,870', save: 'Save 20%+', feats: ['8 episodes + 32 reels a month', 'Everything in Growth, for 8 episodes', 'Show graphics kit in month 1', 'Dedicated account manager', 'Priority: first edit in 2 business days'], cta: 'Start a plan' }
      ],
      footSingle: 'Prices in SAR, excluding VAT · USD for reference at SAR 3.75 = USD 1',
      footPlans: 'Prices in SAR per month, excluding VAT · 3-month minimum · unused episodes roll over one month',
      addTitle: 'Add-ons', addSub: 'Add to any project or plan',
      addons: [
        { name: '4K delivery', note: 'Episode master in 4K', price: '+ SAR 200' },
        { name: 'Extra raw time', note: 'Each additional 30 min', price: '+ SAR 250' },
        { name: 'Audio-only edit', note: 'Mix and master for Spotify and Apple', price: 'SAR 400' },
        { name: 'Extra reel', note: 'Vertical cut with captions', price: 'SAR 200' },
        { name: 'Subtitles', note: 'SRT + burned-in, per language', price: 'SAR 450' },
        { name: 'Thumbnail', note: 'YouTube thumbnail', price: 'SAR 200' },
        { name: 'Chapters & show notes', note: 'Title, chapters, description', price: 'SAR 150' },
        { name: 'Episode teaser', note: 'Up to 60 s', price: 'SAR 300' },
        { name: 'Season trailer', note: '60 to 90 s', price: 'SAR 1,500' },
        { name: 'Show graphics kit', note: 'One-time, in your show’s brand', price: 'SAR 2,000' },
        { name: 'Extra revision round', note: 'Beyond the 2 included', price: 'SAR 150' },
        { name: 'Rush delivery', note: 'First edit in 1 business day', price: '+ 20%' }
      ],
      s4k: 'Handover', s4t: 'Send it right, get it back faster', s4l: 'We share a Dropbox folder for your show once you book. Upload each episode in this structure, or drop your hard drive at the PodMedia studio in your city.',
      hoRules: ['One folder per camera: C1, C2, C3', 'One WAV file per audio track: Track 1, Track 2', 'Original files, all in the same resolution: 4K or 1080p', 'Raw footage is kept for one month after delivery', 'Can\u2019t upload? Drop your hard drive at our studio in your city'],
      hoWarn: 'The turnaround clock starts only when complete materials reach us, in Dropbox or on a drive at our studio.',
      s5k: 'Markets', s5t: 'Remote by design, in every market', s5l: 'Pod Editing works across every PodMedia market, with no studio booking needed.',
      cities: [ { n: '01', name: 'Riyadh' }, { n: '02', name: 'Jeddah' }, { n: '03', name: 'Manama' }, { n: '04', name: 'Dubai' }, { n: '05', name: 'Cairo' }, { n: '06', name: 'Beirut' }, { n: '07', name: 'Zurich' }, { n: '08', name: 'London' } ],
      trustTitle: 'Brands that work with PodMedia', trustStats: '45+ brands · 120+ projects · 500+ podcast hours', logoSlot: 'Client logo',
      s6k: 'FAQ', s6t: 'Before you ask',
      faqs: [
        { q: 'What footage do you need?', a: 'Original camera files in 4K or 1080p, one folder per camera (C1, C2, C3), plus one WAV file per audio track (Track 1, Track 2).' },
        { q: 'What if I can\u2019t upload my footage?', a: 'Drop your hard drive at the PodMedia studio in your city and we take it from there.' },
        { q: 'When does the clock start?', a: 'Once your complete materials reach us, in Dropbox or on a drive at our studio. Your first edit follows in 3 business days, or 5 for 4K.' },
        { q: 'How many revisions are included?', a: 'Two feedback rounds per episode and two per reel batch. Extra rounds are SAR 150 each.' },
        { q: 'Can I get it faster?', a: 'Yes. Rush delivery returns your first edit in 1 business day, for an extra 20%.' },
        { q: 'How long do you keep my footage?', a: 'Raw footage stays on Dropbox for one month after delivery.' }
      ],
      ctKick: 'Start your project', ctTitle: 'We reply within 24 hours', ctLead: 'Tell us about your show. We come back with your timeline, the right package and your Dropbox folder.',
      ctEmail: 'Email', ctPhone: 'Phone',
      fName: 'Full name', fEmail: 'Email', fPhone: 'Phone / WhatsApp', fShow: 'Show name', fMarket: 'Market', fPlan: 'Package or plan', fDropbox: 'Dropbox link', fNotes: 'Anything we should know?', fSubmit: 'Send my request',
      planOptions: ['Episode Edit', 'Reels Pack', 'Episode + Reels', 'Starter plan', 'Growth plan', 'Studio-grade plan']
    };
    return {
      draft: 'نسخة داخلية للمراجعة · الأسعار مقترحة وبانتظار الاعتماد',
      brandTag: 'بود إيديتنج',
      nav1: 'الخدمات', nav2: 'آلية العمل', nav3: 'الأسعار', nav4: 'تسليم المواد', nav5: 'أسئلة شائعة',
      ctaShort: 'ابدأ الآن', ctaMain: 'ابدأ مشروعك', ctaPricing: 'اطّلع على الأسعار',
      heroEyebrow: 'بود إيديتنج · عن بُعد · عربي / إنجليزي',
      heroTitle1: 'أنت تسجّل.', heroTitle2: 'ونحن نصنع العرض.',
      heroSub: 'مونتاج وما بعد الإنتاج عن بُعد',
      heroLead: 'فريق المونتاج نفسه الذي يقف خلف استوديوهات بود ميديا، متاح الآن لكل صانع محتوى أينما سجّل. أرسل المواد الخام، واستلم حلقة جاهزة للبث مع الريلز والترجمة بالعربية والإنجليزية.',
      chips: ['تعدد الكاميرات', 'هندسة الصوت', 'ريلز'], chipMore: '+3 خدمات',
      stats: [ { label: 'أول نسخة', value: '3 أيام عمل' }, { label: 'الملاحظات', value: 'جولتان مشمولتان' }, { label: 'اللغات', value: 'عربي · إنجليزي' }, { label: 'الأسواق', value: '8 مدن' } ],
      watch: 'شاهد مثالاً', exSoon: 'المثال قريباً', exSoonSub: 'نجهّز عيّنة لهذه الخدمة. اطلب منا أحدث أعمالنا في الأثناء.', exClose: 'إغلاق',
      s1k: 'الخدمات', s1t: 'كل ما بعد زر التسجيل', s1l: 'بأيدي فريق بود ميديا الداخلي، المحرّرين أنفسهم الذين يقفون خلف إنتاجات استوديوهاتنا.',
      services: [
        { ex: 'edit', icon: I.film, tag: 'مونتاج', name: 'مونتاج الحلقة كاملة', desc: 'تبديل الكاميرات، القص، حذف الحشو، تصحيح الألوان، المكساج والماستر.' },
        { ex: 'audio', icon: I.wave, tag: 'صوت', name: 'هندسة الصوت', desc: 'تنقية الضوضاء وموازنة المستويات وماستر جاهز لسبوتيفاي وأبل.' },
        { ex: 'reels', icon: I.phone, tag: 'سوشال', name: 'ريلز ومقاطع قصيرة', desc: 'مقاطع عمودية ببداية جاذبة وترجمة على الشاشة وخاتمة بدعوة لاتخاذ إجراء.' },
        { ex: 'captions', icon: I.cc, tag: 'لغة', name: 'الترجمة والنصوص', desc: 'ترجمة دقيقة بالعربية والإنجليزية، مدمجة في الفيديو أو بملف SRT.' },
        { ex: 'packaging', icon: I.img, tag: 'تغليف', name: 'الصور المصغّرة والوصف', desc: 'صور مصغّرة ليوتيوب وعناوين وفصول ووصف الحلقة.' },
        { ex: 'graphics', icon: I.layers, tag: 'هوية', name: 'رسومات البرنامج', desc: 'أشرطة الأسماء وبطاقات العناوين والانتقالات بهوية برنامجك.' }
      ],
      s2k: 'آلية العمل', s2t: 'من المواد الخام إلى حلقة منشورة', s2l: 'خمس خطوات وفق جدول زمني ثابت. يبدأ احتساب المدة عند وصول موادك كاملة إلينا. أيام العمل من الأحد إلى الخميس، باستثناء العطل الرسمية.',
      steps: [
        { num: 'الخطوة 01', icon: I.book, name: 'احجز', desc: 'أرسل النموذج، ونؤكد باقتك ونشارك معك مجلد برنامجك على Dropbox خلال 24 ساعة.' },
        { num: 'الخطوة 02', icon: I.upload, name: 'سلّم المواد', desc: 'ارفعها إلى المجلد المشترك، أو سلّم القرص الصلب في استوديو بود ميديا في مدينتك.' },
        { num: 'الخطوة 03', icon: I.cut, name: 'نحرّر', desc: 'تصلك أول نسخة خلال 3 أيام عمل، أو 5 أيام لدقة 4K.' },
        { num: 'الخطوة 04', icon: I.review, name: 'المراجعة', desc: 'جولتان من الملاحظات، 3 أيام عمل لكل جولة. ومسودات الريلز المقترحة تصلك مع النسخة الثانية من الحلقة.' },
        { num: 'الخطوة 05', icon: I.layers, name: 'اللمسات الأخيرة والتسليم', desc: 'نضيف هوية برنامجك والترجمة، ثم نسلّمك الحلقة النهائية والريلز.' }
      ],
      s3k: 'الأسعار', s3t: 'ادفع لكل حلقة، أو اشترك للموسم', s3l: 'ابدأ بحلقة واحدة، أو انتقل إلى باقة شهرية عندما تنشر بانتظام.',
      tabSingle: 'مشاريع فردية', tabPlans: 'باقات شهرية', recommended: 'موصى بها', sar: 'ر.س', perMonth: '/ شهرياً',
      single: [
        { name: 'مونتاج حلقة', for: 'حلقة واحدة', price: '800', usd: '215', save: '', feats: ['حلقة كاملة حتى 60 دقيقة من المواد الخام', 'تعدد الكاميرات، الألوان، المكساج والماستر', 'تسليم بدقة 1080p (‏4K بإضافة 200 ر.س)'], cta: 'ابدأ مشروعك' },
        { name: 'حلقة + ريلز', for: 'كل ما تحتاجه للنشر', price: '1,750', usd: '465', save: 'وفّر 10%', featured: true, feats: ['مونتاج الحلقة', '4 ريلز مع ترجمة', 'صورة مصغّرة', 'الفصول ووصف الحلقة'], cta: 'ابدأ مشروعك' },
        { name: 'باقة الريلز', for: 'مقاطع فقط', price: '800', usd: '215', save: '', feats: ['4 ريلز من حلقة واحدة', 'ترجمة بالعربية أو الإنجليزية', 'بدايات جاذبة وخاتمة بدعوة لإجراء'], cta: 'ابدأ مشروعك' }
      ],
      plans: [
        { name: 'البداية', for: 'كل أسبوعين', price: '2,900', usd: '775', save: 'وفّر 9%', feats: ['حلقتان + 8 ريلز شهرياً', 'ريلز مع ترجمة', 'مدد التسليم نفسها للمشاريع الفردية'], cta: 'ابدأ الباقة' },
        { name: 'النمو', for: 'برامج أسبوعية', price: '7,500', usd: '2,000', save: 'وفّر 17%', featured: true, feats: ['4 حلقات + 16 ريلز شهرياً', '4 صور مصغّرة + 4 مقاطع تشويقية', 'الفصول ووصف الحلقات'], cta: 'ابدأ الباقة' },
        { name: 'الاستوديو', for: 'عدة برامج', price: '14,500', usd: '3,870', save: 'وفّر 20%+', feats: ['8 حلقات + 32 ريلز شهرياً', 'كل مزايا باقة النمو لـ 8 حلقات', 'حزمة رسومات البرنامج في الشهر الأول', 'مدير حساب مخصص', 'أولوية: أول نسخة خلال يومي عمل'], cta: 'ابدأ الباقة' }
      ],
      footSingle: 'الأسعار بالريال السعودي ولا تشمل ضريبة القيمة المضافة · الدولار للاسترشاد (3.75 ر.س = 1 دولار)',
      footPlans: 'الأسعار بالريال السعودي شهرياً ولا تشمل ضريبة القيمة المضافة · حد أدنى 3 أشهر · الحلقات غير المستخدمة تُرحّل شهراً واحداً',
      addTitle: 'خدمات إضافية', addSub: 'تُضاف إلى أي مشروع أو باقة',
      addons: [
        { name: 'تسليم بدقة 4K', note: 'نسخة الحلقة النهائية بدقة 4K', price: '+ 200 ر.س' },
        { name: 'مدة خام إضافية', note: 'لكل 30 دقيقة إضافية', price: '+ 250 ر.س' },
        { name: 'مونتاج صوتي فقط', note: 'مكساج وماستر لسبوتيفاي وأبل', price: '400 ر.س' },
        { name: 'ريل إضافي', note: 'مقطع عمودي مع ترجمة', price: '200 ر.س' },
        { name: 'ترجمة', note: 'ملف SRT + مدمجة، لكل لغة', price: '450 ر.س' },
        { name: 'صورة مصغّرة', note: 'ليوتيوب', price: '200 ر.س' },
        { name: 'الفصول ووصف الحلقة', note: 'العنوان والفصول والوصف', price: '150 ر.س' },
        { name: 'مقطع تشويقي للحلقة', note: 'حتى 60 ثانية', price: '300 ر.س' },
        { name: 'إعلان الموسم', note: 'من 60 إلى 90 ثانية', price: '1,500 ر.س' },
        { name: 'حزمة رسومات البرنامج', note: 'لمرة واحدة، بهوية برنامجك', price: '2,000 ر.س' },
        { name: 'جولة تعديل إضافية', note: 'بعد الجولتين المشمولتين', price: '150 ر.س' },
        { name: 'تسليم مستعجل', note: 'أول نسخة خلال يوم عمل', price: '+ 20%' }
      ],
      s4k: 'تسليم المواد', s4t: 'سلّم موادك بالترتيب، واستلمها أسرع', s4l: 'نشارك معك مجلداً على Dropbox لبرنامجك بعد الحجز. ارفع كل حلقة بهذا الترتيب، أو سلّم القرص الصلب في استوديو بود ميديا في مدينتك.',
      hoRules: ['مجلد لكل كاميرا: C1 و C2 و C3', 'ملف WAV لكل مسار صوتي: Track 1 و Track 2', 'الملفات الأصلية بدقة موحّدة: 4K أو 1080p', 'نحتفظ بالمواد الخام شهراً واحداً بعد التسليم', 'لا تستطيع الرفع؟ سلّم القرص الصلب في استوديو بود ميديا في مدينتك'],
      hoWarn: 'يبدأ احتساب مدة التسليم فقط عند وصول المواد كاملة إلينا، على Dropbox أو على قرص في الاستوديو.',
      s5k: 'الأسواق', s5t: 'خدمة عن بُعد في كل أسواقنا', s5l: 'بود إيديتنج متاحة في كل أسواق بود ميديا دون الحاجة لحجز استوديو.',
      cities: [ { n: '01', name: 'الرياض' }, { n: '02', name: 'جدة' }, { n: '03', name: 'المنامة' }, { n: '04', name: 'دبي' }, { n: '05', name: 'القاهرة' }, { n: '06', name: 'بيروت' }, { n: '07', name: 'زيورخ' }, { n: '08', name: 'لندن' } ],
      trustTitle: 'علامات تعمل مع بود ميديا', trustStats: '+45 علامة تجارية · +120 مشروعاً · +500 ساعة بودكاست', logoSlot: 'شعار عميل',
      s6k: 'أسئلة شائعة', s6t: 'قبل أن تسأل',
      faqs: [
        { q: 'ما المواد التي تحتاجونها؟', a: 'الملفات الأصلية للكاميرات بدقة 4K أو 1080p، مجلد لكل كاميرا (C1 و C2 و C3)، وملف WAV لكل مسار صوتي (Track 1 و Track 2).' },
        { q: 'ماذا لو لم أستطع رفع المواد؟', a: 'سلّم القرص الصلب في استوديو بود ميديا في مدينتك، ونتولى الباقي.' },
        { q: 'متى يبدأ احتساب المدة؟', a: 'عند وصول موادك كاملة إلينا، على Dropbox أو على قرص في الاستوديو. تصلك أول نسخة خلال 3 أيام عمل، أو 5 أيام لدقة 4K.' },
        { q: 'كم جولة تعديل مشمولة؟', a: 'جولتان من الملاحظات لكل حلقة، وجولتان لكل دفعة ريلز. الجولة الإضافية بـ 150 ر.س.' },
        { q: 'هل يمكن التسليم بشكل أسرع؟', a: 'نعم. التسليم المستعجل يعيد أول نسخة خلال يوم عمل واحد مقابل 20% إضافية.' },
        { q: 'كم مدة الاحتفاظ بموادي؟', a: 'نحتفظ بالمواد الخام على Dropbox لمدة شهر واحد بعد التسليم.' }
      ],
      ctKick: 'ابدأ مشروعك', ctTitle: 'نرد خلال 24 ساعة', ctLead: 'أخبرنا عن برنامجك، وسنعود إليك بالجدول الزمني والباقة المناسبة ومجلد Dropbox الخاص بك.',
      ctEmail: 'البريد الإلكتروني', ctPhone: 'الهاتف',
      fName: 'الاسم الكامل', fEmail: 'البريد الإلكتروني', fPhone: 'الهاتف / واتساب', fShow: 'اسم البرنامج', fMarket: 'السوق', fPlan: 'الخدمة أو الباقة', fDropbox: 'رابط Dropbox', fNotes: 'هل هناك ما تود إخبارنا به؟', fSubmit: 'أرسل طلبي',
      planOptions: ['مونتاج حلقة', 'باقة الريلز', 'حلقة + ريلز', 'باقة البداية', 'باقة النمو', 'باقة الاستوديو']
    };
  }

// Example video per service. Paste a YouTube link/ID or a path to an .mp4/.webm file (e.g. 'assets/examples/reels.mp4').
// Empty entries show a "coming soon" card in the player.
const PLAY = 'M8 5v14l11-7z';
const EXAMPLES = { edit: '', audio: '', reels: '', captions: '', packaging: '', graphics: '' };
const ytId = (v) => { const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : (/^[\w-]{11}$/.test(v) ? v : ''); };
function player(src, t) {
  if (/\.(mp4|webm)(\?|$)/i.test(src)) return `<video src="${esc(src)}" controls autoplay playsinline></video>`;
  const id = ytId(src);
  if (id) return `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${esc(t.watch)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  return `<div class="ex-soon"><div class="tile">${icon(PLAY, 26, '#FFFFFF')}</div><span class="hv" style="font-size:24px">${esc(t.exSoon)}</span><p class="body" style="max-width:420px">${esc(t.exSoonSub)}</p><a class="btn btn-line" href="#contact" data-close>${esc(t.ctaMain)}</a></div>`;
}

const state = { lang: (new URLSearchParams(location.search).get('lang') === 'ar') ? 'ar' : 'en', mode: 'single', faq: 1, ex: null };
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (d, size, stroke) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"></path></svg>`;
const marker = (n, label) => `<div class="marker"><span class="mono red">${n}</span><span class="marker-line"></span><span class="mono" style="color:#B5B5B5">${esc(label)}</span></div>`;
const H1 = [6,10,16,9,20,14,7,18,22,12,8,15,19,11,6,13,21,17,9,14,10,18,7,16,20,12,9,15,11,19,8,14,22,10,16,7,13,18,9,12];
const H2 = [9,14,7,12,18,10,15,6,11,20,16,9,13,7,17,12,8,19,14,10,6,15,11,18,9,13,20,8,16,12,7,14,10,19,11,15,8,17,12,9];
const clip = (l, w, red) => `<div class="clip${red ? ' clip-red' : ''}" style="left:${l}%;width:${w}%"></div>`;

function render() {
  const ar = state.lang === 'ar';
  const t = copy(ar);
  const single = state.mode === 'single';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  document.body.className = ar ? 'ar' : 'en';
  document.title = ar ? 'بود إيديتنج — بود ميديا' : 'Pod Editing — PodMedia Network';
  const cards = single ? t.single : t.plans;
  const tracks = [['C1', [clip(0,22), clip(46,18), clip(80,20)]], ['C2', [clip(22,24,1), clip(64,16,1)]], ['C3', [clip(8,10), clip(34,14), clip(70,12)]]];

  document.getElementById('app').innerHTML = `
<header class="nav">
  <div class="wrap nav-row">
    <div class="nav-left">
      <a href="#top" aria-label="PodMedia Network home"><img src="assets/podmedia-logo.png" alt="PodMedia Network" class="logo"></a>
      <span class="hide-sm divider"></span>
      <span class="hide-sm mono red">${esc(t.brandTag)}</span>
    </div>
    <nav class="navlinks" aria-label="Sections">
      <a class="navlink" href="#services">${esc(t.nav1)}</a><a class="navlink" href="#how">${esc(t.nav2)}</a><a class="navlink" href="#pricing">${esc(t.nav3)}</a><a class="navlink" href="#handover">${esc(t.nav4)}</a><a class="navlink" href="#faq">${esc(t.nav5)}</a>
    </nav>
    <div class="nav-right">
      <div role="group" aria-label="Language" class="seg seg-sm">
        <button type="button" data-lang="en" aria-pressed="${!ar}" class="${!ar ? 'on' : ''}">EN</button>
        <button type="button" data-lang="ar" aria-pressed="${ar}" class="${ar ? 'on' : ''}">عربي</button>
      </div>
      <a class="btn btn-red hide-sm nav-cta" href="#contact">${esc(t.ctaShort)}</a>
    </div>
  </div>
</header>

<section id="top" class="hero grid-bg">
  <div class="hero-glow ${ar ? 'glow-left' : 'glow-right'}" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <div class="hero-row">
      <div class="hero-copy">
        <div class="eyebrow"><span class="dot"></span><span class="mono" style="color:#D8D8D8">${esc(t.heroEyebrow)}</span></div>
        <h1 class="hv h1"><span>${esc(t.heroTitle1)}</span><span style="color:#E31B23">${esc(t.heroTitle2)}</span></h1>
        <div class="hero-sub">${esc(t.heroSub)}</div>
        <p class="hero-lead">${esc(t.heroLead)}</p>
        <div class="chips">${t.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}<span class="chip chip-red">${esc(t.chipMore)}</span></div>
        <div class="btn-row"><a class="btn btn-red" href="#contact">${esc(t.ctaMain)}</a><a class="btn btn-dark" href="#pricing">${esc(t.ctaPricing)}</a></div>
      </div>
      <div class="hero-vis" aria-hidden="true" dir="ltr">
        <div class="editor">
          <div class="editor-bar"><span class="mono red" style="font-size:10px">● Video editing</span><span class="mono" style="font-size:10px;color:#777">EP01_FINAL.prproj</span></div>
          <div class="editor-preview">
            <img src="assets/studio-ksa.jpg" alt="">
            <div class="editor-shade"></div>
            <span class="mono preview-l">Program · C2 · 00:14:32:08</span>
            <span class="mono red preview-r">REC 4K</span>
          </div>
          <div class="tracks">
            <div class="playhead"></div>
            ${tracks.map(([n, cl]) => `<div class="track"><span class="mono tname">${n}</span><div class="lane">${cl.join('')}</div></div>`).join('')}
            ${[['A1', H1], ['A2', H2]].map(([n, h]) => `<div class="track"><span class="mono tname">${n}</span><div class="lane wave">${h.map((x) => `<span style="height:${x}px"></span>`).join('')}</div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="stats">
      <div class="strip">${t.stats.map((s) => `<div class="cell"><span class="mono red" style="font-size:11px">${esc(s.label)}</span><span class="stat-v">${esc(s.value)}</span></div>`).join('')}</div>
      <div class="stats-foot"><a class="btn btn-line" href="#contact">${esc(t.ctaMain)}</a></div>
    </div>
  </div>
</section>

<section id="services" class="sec bg-a"><div class="wrap">
  ${marker('00:01', t.s1k)}
  <div class="g2 head-2"><h2 class="hv h2">${esc(t.s1t)}</h2><p class="lead">${esc(t.s1l)}</p></div>
  <div class="g3">${t.services.map((s) => `<div class="card svc"><div class="tile">${icon(s.icon, 26, '#FFFFFF')}</div><span class="mono red" style="font-size:11px;margin-top:10px">${esc(s.tag)}</span><h3 class="hv" style="font-size:27px;line-height:1.15">${esc(s.name)}</h3><p class="body">${esc(s.desc)}</p><button type="button" class="watch" data-ex="${s.ex}"><span class="watch-ic">${icon(PLAY, 14, '#FFFFFF')}</span><span class="mono">${esc(t.watch)}</span></button></div>`).join('')}</div>
</div></section>

<section id="how" class="sec bg-b"><div class="wrap">
  ${marker('00:02', t.s2k)}
  <h2 class="hv h2" style="max-width:900px">${esc(t.s2t)}</h2>
  <p class="lead" style="margin-top:24px;max-width:720px;font-size:21px">${esc(t.s2l)}</p>
  <div class="g5" style="margin-top:72px">${t.steps.map((s, i) => `<div class="step"><div class="step-line"><span class="step-dot${i === 0 ? ' first' : ''}"></span><span class="step-rail"></span></div><span class="mono" style="color:#fff;font-weight:700">${esc(s.num)}</span><div class="card step-card"><div class="tile tile-sm">${icon(s.icon, 22, '#FFFFFF')}</div><h3 class="hv" style="font-size:22px;line-height:1.2">${esc(s.name)}</h3><p class="body" style="font-size:16px">${esc(s.desc)}</p></div></div>`).join('')}</div>
</div></section>

<section id="pricing" class="sec bg-a"><div class="wrap">
  ${marker('00:03', t.s3k)}
  <div class="price-head">
    <div style="max-width:760px"><h2 class="hv h2">${esc(t.s3t)}</h2><p class="lead" style="margin-top:24px">${esc(t.s3l)}</p></div>
    <div role="group" aria-label="${esc(t.s3k)}" class="seg"><button type="button" class="mono${single ? ' on' : ''}" data-mode="single" aria-pressed="${single}">${esc(t.tabSingle)}</button><button type="button" class="mono${!single ? ' on' : ''}" data-mode="plans" aria-pressed="${!single}">${esc(t.tabPlans)}</button></div>
  </div>
  <div class="g3">${cards.map((c) => `<div class="price${c.featured ? ' featured' : ''}">
    <div class="price-top"><span class="mono red" style="font-size:11px">${esc(c.for)}</span>${c.featured ? `<span class="mono badge">${esc(t.recommended)}</span>` : ''}</div>
    <h3 class="hv" style="font-size:30px;line-height:1.15;margin-top:14px">${esc(c.name)}</h3>
    <div class="amount"><span class="mono" style="color:#9A9A9A">${esc(t.sar)}</span><span class="num">${esc(c.price)}</span><span class="per">${single ? '' : esc(t.perMonth)}</span></div>
    <div class="amount-sub"><span class="mono" style="font-size:11px;color:#8A8A8A">≈ USD ${esc(c.usd)}</span>${c.save ? `<span class="mono red" style="font-size:11px">${esc(c.save)}</span>` : ''}</div>
    <div class="rule"></div>
    <div class="feats">${c.feats.map((f) => `<div class="li"><span class="ring"></span><span>${esc(f)}</span></div>`).join('')}</div>
    <a class="btn ${c.featured ? 'btn-red' : 'btn-dark'}" href="#contact" style="margin-top:36px;width:100%">${esc(c.cta)}</a>
  </div>`).join('')}</div>
  <p class="mono foot">${esc(single ? t.footSingle : t.footPlans)}</p>
  <div class="card addons-card">
    <div class="addons-head"><h3 class="hv" style="font-size:30px">${esc(t.addTitle)}</h3><span class="mono" style="font-size:11px;color:#8A8A8A">${esc(t.addSub)}</span></div>
    <div class="addons">${t.addons.map((a) => `<div class="addon"><div><div class="addon-n">${esc(a.name)}</div><div class="addon-d">${esc(a.note)}</div></div><span class="mono addon-p">${esc(a.price)}</span></div>`).join('')}</div>
  </div>
</div></section>

<section id="handover" class="sec bg-b"><div class="wrap">
  ${marker('00:04', t.s4k)}
  <div class="g2" style="gap:64px;align-items:start">
    <div class="stack">
      <h2 class="hv h2">${esc(t.s4t)}</h2>
      <p class="lead">${esc(t.s4l)}</p>
      <div class="feats">${t.hoRules.map((r) => `<div class="li" style="font-size:17px"><span class="ring"></span><span>${esc(r)}</span></div>`).join('')}</div>
      <div class="warn">${icon('M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01', 22, '#F2333B')}<span>${esc(t.hoWarn)}</span></div>
    </div>
    <div class="ho-media">
      <img src="assets/studio-brick.jpg" alt="A PodMedia studio set with four microphones">
      <div class="ho-shade"></div>
      <div class="folder" dir="ltr">
        <div class="folder-head">
          <div class="folder-brand"><span class="up">${icon('M20 16.6A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25M12 12v9M8 16l4-4 4 4', 18, '#FFFFFF')}</span><span class="stack-sm"><span class="mono" style="font-size:11px;color:#fff">Upload</span><span class="mono red" style="font-size:10px">Dropbox · shared folder</span></span></div>
          <span class="mono" style="font-size:10px;color:#8A8A8A">or hard drive → studio</span>
        </div>
<pre class="tree"><b>Client_Show/EP01_2026-10-04/</b>
  <i>C1/</i>          camera 1 · 4K or 1080p
  <i>C2/</i>          camera 2
  <i>C3/</i>          camera 3
  <b>Audio/</b>
    <i>Track1.wav</i>  mic 1
    <i>Track2.wav</i>  mic 2
  <b>Notes/</b>       brief, timestamps</pre>
      </div>
    </div>
  </div>
</div></section>

<section class="sec bg-a"><div class="wrap">
  ${marker('00:05', t.s5k)}
  <div class="g2 head-2" style="margin-bottom:56px"><h2 class="hv h2">${esc(t.s5t)}</h2><p class="lead">${esc(t.s5l)}</p></div>
  <div class="panel"><div class="strip8">${t.cities.map((c) => `<div class="cell"><span class="mono red" style="font-size:11px">${c.n}</span><span class="city">${esc(c.name)}</span></div>`).join('')}</div></div>
  <div class="sep"></div>
  <div class="addons-head" style="margin-bottom:24px"><span class="mono" style="color:#B5B5B5">${esc(t.trustTitle)}</span><span class="mono red" style="font-size:11px">${esc(t.trustStats)}</span></div>
  <div class="logos">${[1,2,3,4,5,6].map(() => `<div class="logo-slot"><span class="mono">${esc(t.logoSlot)}</span></div>`).join('')}</div>
</div></section>

<section id="faq" class="sec bg-b"><div class="wrap">
  ${marker('00:06', t.s6k)}
  <h2 class="hv h2" style="margin-bottom:56px">${esc(t.s6t)}</h2>
  <div class="faq">${t.faqs.map((f, i) => { const open = state.faq === i; return `<div class="faq-item">
    <button type="button" data-faq="${i}" aria-expanded="${open}"><span class="mono red" style="font-size:11px;flex:none">${String(i + 1).padStart(2, '0')}</span><span class="hv faq-q">${esc(f.q)}</span><span class="faq-icon${open ? ' open' : ''}">${open ? '−' : '+'}</span></button>
    ${open ? `<p class="faq-a">${esc(f.a)}</p>` : ''}</div>`; }).join('')}</div>
</div></section>

<section id="contact" class="contact">
  <img src="assets/studio-brick.jpg" alt="" class="contact-bg">
  <div class="contact-shade"></div>
  <div class="wrap g2" style="position:relative;align-items:start;gap:72px">
    <div class="stack">
      <span class="mono red">${esc(t.ctKick)}</span>
      <h2 class="hv h2">${esc(t.ctTitle)}</h2>
      <p class="lead" style="font-size:21px">${esc(t.ctLead)}</p>
      <div class="contacts">
        <div><span class="mono">${esc(t.ctEmail)}</span><a href="mailto:contact@podmedia.network">contact@podmedia.network</a></div>
        <div><span class="mono">${esc(t.ctPhone)}</span><a href="tel:+966533746410" dir="ltr">+966 533 746 410</a></div>
        <div><span class="mono">WhatsApp</span><a href="https://wa.me/966506097285" dir="ltr">+966 50 609 7285</a></div>
      </div>
    </div>
    <form class="card form" id="lead-form">
      <label class="lab"><span class="mono">${esc(t.fName)} *</span><input class="inp" type="text" name="name" autocomplete="name" required></label>
      <label class="lab"><span class="mono">${esc(t.fEmail)} *</span><input class="inp" type="email" name="email" autocomplete="email" required></label>
      <div class="g2" style="gap:20px">
        <label class="lab"><span class="mono">${esc(t.fPhone)}</span><input class="inp" type="tel" name="phone" autocomplete="tel"></label>
        <label class="lab"><span class="mono">${esc(t.fShow)}</span><input class="inp" type="text" name="show"></label>
      </div>
      <div class="g2" style="gap:20px">
        <label class="lab"><span class="mono">${esc(t.fMarket)}</span><select class="inp" name="market">${t.cities.map((c) => `<option>${esc(c.name)}</option>`).join('')}</select></label>
        <label class="lab"><span class="mono">${esc(t.fPlan)}</span><select class="inp" name="plan">${t.planOptions.map((p) => `<option>${esc(p)}</option>`).join('')}</select></label>
      </div>
      <label class="lab"><span class="mono">${esc(t.fNotes)}</span><textarea class="inp" name="notes" rows="3"></textarea></label>
      <button type="submit" class="btn btn-red" style="width:100%;margin-top:6px">${esc(t.fSubmit)}</button>
    </form>
  </div>
</section>

<footer class="footer"><div class="wrap footer-row">
  <img src="assets/podmedia-logo.png" alt="PodMedia Network" style="height:34px;width:auto">
  <span class="mono" style="font-size:11px;color:#8A8A8A">PodMedia · Pod Editing</span>
  <span class="mono" dir="ltr" style="font-size:11px;color:#8A8A8A;text-transform:none;letter-spacing:.08em">podmedia.network/pod-editing · © 2026</span>
</div></footer>
${state.ex ? `<div class="ex-modal" role="dialog" aria-modal="true" aria-label="${esc(t.services.find((x) => x.ex === state.ex)?.name || t.watch)}" data-close>
  <div class="ex-box">
    <div class="ex-head"><span class="mono red">${esc(t.services.find((x) => x.ex === state.ex)?.tag || '')} · <span style="color:#fff">${esc(t.services.find((x) => x.ex === state.ex)?.name || '')}</span></span><button type="button" class="ex-x" aria-label="${esc(t.exClose)}" data-close>×</button></div>
    <div class="ex-frame">${player(EXAMPLES[state.ex] || '', t)}</div>
  </div>
</div>` : ''}`;
  if (state.ex) document.querySelector('.ex-x').focus();
}

const closeEx = (back) => { const k = state.ex; state.ex = null; render(); if (back) document.querySelector(`[data-ex="${k}"]`)?.focus(); };
document.addEventListener('click', (e) => {
  if (state.ex && (e.target.matches('[data-close]') || e.target.closest('.ex-x, a[data-close]'))) { closeEx(!e.target.closest('a')); return; }
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.lang) { state.lang = b.dataset.lang; render(); }
  else if (b.dataset.mode) { state.mode = b.dataset.mode; render(); }
  else if (b.dataset.ex) { state.ex = b.dataset.ex; render(); }
  else if (b.dataset.faq !== undefined) { const i = Number(b.dataset.faq); state.faq = state.faq === i ? -1 : i; render(); }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.ex) closeEx(true); });
document.addEventListener('submit', (e) => {
  if (e.target.id !== 'lead-form') return;
  e.preventDefault();
  // TODO: connect to the lead inbox (contact@podmedia.network) or a form backend before launch.
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = state.lang === 'ar' ? 'تم الإرسال — سنرد خلال 24 ساعة' : 'Sent — we reply within 24 hours';
  btn.disabled = true;
});
render();

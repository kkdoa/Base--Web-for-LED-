// Get a reference to the header element
const header = document.querySelector('header');

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Language data for internationalization. Each key represents a language code (e.g., 'en' for English, 'zh-CN' for Simplified Chinese),
// and its value is an object containing key-value pairs for text snippets used throughout the website.
// The `data-lang-key` attribute in HTML elements is used to dynamically update content based on the selected language.
const langData = {
    // 'zh-CN': {
    //    // 'homeTitle': '欢迎来到我们的公司',
    //   //  'homeText': '这里是您公司的简介或Slogan。旨在提供高质量的产品和卓越的服务。',
    //   //  'productsTitle': '我们的产品',
    //    // 'productsText': '在这里，您可以介绍您的主要产品系列。可以添加产品图片、描述和链接。',
    //   //  'product1Title': '产品系列一',
    //   //  'product1Text': '这是产品系列一的详细描述。介绍其特点和优势。',
    //  //  'product2Title': '产品系列二',
    //  //  'product2Text': '这是产品系列二的详细描述。介绍其特点和优势。',
    //    // 'aboutTitle': '关于我们',
    //     //'aboutText': '在这里，您可以介绍公司的历史、愿景、使命和核心价值观。可以添加团队照片和公司里程碑。',
    //     //'historyTitle': '公司历史',
    //    // 'historyText': '您的公司成立于XXXX年，一直致力于XXXX领域。多年来，我们取得了许多成就。',
    //    // 'visionTitle': '公司愿景',
    //    // 'visionText': '我们的愿景是成为XXXX行业的领导者，为客户提供最优质的解决方案。',
    //    // 'contactTitle': '联系我们',
    //    // 'contactText': '如果您有任何疑问或需要帮助，请随时联系我们。',
    //    // 'email': '邮箱：your_email@example.com',
    //    // 'phone': '电话：+86 XXXX-XXXXXXX',
    //    // 'address': '地址：您的公司地址',
    //    // 'footer': '',
    //    // 'navHome': '主页',
    //    // 'navProducts': '产品',
    //    // 'navAbout': '关于我们',
    //    // 'navContact': '联系我们',
    //    // 'navProductCases': '产品案例',
    //    // 'langDisplay': '中文',
    //    // 'carouselTitle': '中国风光', // Add for carousel
    //    // 'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
    //    // 'learnMoreButton': '了解更多' // Add for carousel
    // },
    'en': {
        'homeTitle': 'Welcome to Our Company',
        'homeText': 'This is your company\'s introduction or slogan. Aiming to provide high-quality products and excellent services.',
        'productsTitle': 'Our Products',
        'productsText': 'Here, you can introduce your main product lines. You can add product images, descriptions, and links.',
        'product1Title': 'Product Series One',
        'product1Text': 'This is a detailed description of Product Series One. It introduces its features and advantages.',
        'product2Title': 'Product Series Two',
        'product2Text': 'This is a detailed description of Product Series Two. It introduces its features and advantages.',
        'aboutTitle': 'About Us',
        'aboutText': 'Here, you can introduce your company\'s history, vision, mission, and core values. You can add team photos and company milestones.',
        'historyTitle': 'Company History',
        'historyText': 'Your company was founded in XXXX, and has been committed to the XXXX field. Over the years, we have achieved many accomplishments.',
        'visionTitle': 'Company Vision',
        'visionText': 'Our vision is to become a leader in the XXXX industry, providing the best quality solutions for our customers.',
        'contactTitle': 'Contact Us',
        'contactText': 'If you have any questions or need help, please feel free to contact us.',
        'email': 'Email: your_email@example.com',
        'phone': 'Phone: +86 XXXX-XXXXXXX',
        'address': 'Address: Your Company Address',
        'footer': '© 2024 Your Company Name. All Rights Reserved.',
        'navHome': 'Home',
        'navProducts': 'Products',
        'navAbout': 'About Us',
        'navContact': 'Contact Us',
        'navProductCases': 'Product Cases',
        'langDisplay': 'English',
        'carouselTitle': 'China Landscape', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'Learn More' // Add for carousel
    },
    'de': {
        'homeTitle': 'Willkommen in unserem Unternehmen',
        'homeText': 'Dies ist die Einführung oder der Slogan Ihres Unternehmens. Wir bemühen uns, qualitativ hochwertige Produkte und exzellente Dienstleistungen anzubieten.',
        'productsTitle': 'Unsere Produkte',
        'productsText': 'Hier können Sie Ihre Hauptproduktlinien vorstellen. Sie können Produktbilder, Beschreibungen und Links hinzufügen.',
        'product1Title': 'Produktreihe Eins',
        'product1Text': 'Dies ist eine detaillierte Beschreibung der Produktreihe Eins. Sie stellt ihre Merkmale und Vorteile vor.',
        'product2Title': 'Produktreihe Zwei',
        'product2Text': 'Dies ist eine detaillierte Beschreibung der Produktreihe Zwei. Sie stellt ihre Merkmale und Vorteile vor。',
        'aboutTitle': 'Über Uns',
        'aboutText': 'Hier können Sie die Geschichte, Vision, Mission und Kernwerte Ihres Unternehmens vorstellen. Sie können Teamfotos und Meilensteine des Unternehmens hinzufügen。',
        'historyTitle': 'Unternehmensgeschichte',
        'historyText': 'Ihr Unternehmen wurde im Jahr XXXX gegründet und engagiert sich seitdem im Bereich XXXX. Im Laufe der Jahre haben wir viele Erfolge erzielt。',
        'visionTitle': 'Unternehmensvision',
        'visionText': 'Unsere Vision ist es, ein führendes Unternehmen in der XXXX-Branche zu werden und unseren Kunden die besten Qualitätslösungen anzubieten。',
        'contactTitle': 'Kontakt',
        'contactText': 'Wenn Sie Fragen haben oder Hilfe benötigen, zögern Sie bitte nicht, uns zu kontaktieren。',
        'email': 'E-Mail: your_email@example.com',
        'phone': 'Telefon: +86 XXXX-XXXXXXX',
        'address': 'Adresse: Ihre Firmenadresse',
        'footer': '© 2024 Ihr Firmenname. Alle Rechte vorbehalten。',
        'navHome': 'Startseite',
        'navProducts': 'Produkte',
        'navAbout': 'Über Uns',
        'navContact': 'Kontakt',
        'navProductCases': 'Produktbeispiele',
        'langDisplay': 'Deutsch',
        'carouselTitle': 'Chinesische Landschaft', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'Mehr erfahren' // Add for carousel
    },
    'fr': {
        'homeTitle': 'Bienvenue dans notre entreprise',
        'homeText': 'Ceci est la présentation ou le slogan de votre entreprise. Nous visons à fournir des produits de haute qualité et d\'excellents services.',
        'productsTitle': 'Nos produits',
        'productsText': 'Ici, vous pouvez présenter vos principales gammes de produits. Vous pouvez ajouter des images, des descriptions et des liens de produits.',
        'product1Title': 'Série de produits un',
        'product1Text': 'Ceci est une description détaillée de la série de produits un. Elle présente ses caractéristiques et ses avantages.',
        'product2Title': 'Série de produits deux',
        'product2Text': 'Ceci est une description détaillée de la série de produits deux. Elle présente ses caractéristiques et ses avantages.',
        'aboutTitle': 'À propos de nous',
        'aboutText': 'Ici, vous pouvez présenter l\'histoire, la vision, la mission et les valeurs fondamentales de votre entreprise. Vous pouvez ajouter des photos d\'équipe et les étapes importantes de l\'entreprise.',
        'historyTitle': 'Historique de l\'entreprise',
        'historyText': 'Votre entreprise a été fondée en XXXX, et s\'est engagée dans le domaine XXXX. Au fil des ans, nous avons réalisé de nombreuses réalisations.',
        'visionTitle': 'Vision de l\'entreprise',
        'visionText': 'Notre vision est de devenir un leader dans l\'industrie XXXX, en fournissant les meilleures solutions de qualité à nos clients.',
        'contactTitle': 'Contactez-nous',
        'contactText': 'Si vous avez des questions ou avez besoin d\'aide, n\'hésitez pas à nous contacter.',
        'email': 'Email : your_email@example.com',
        'phone': 'Téléphone : +86 XXXX-XXXXXXX',
        'address': 'Adresse : Votre adresse de société',
        'footer': '© 2024 Nom de votre entreprise. Tous droits réservés.',
        'navHome': 'Accueil',
        'navProducts': 'Produits',
        'navAbout': 'À propos',
        'navContact': 'Contact',
        'navProductCases': 'Cas de Produits',
        'langDisplay': 'Français',
        'carouselTitle': 'Paysage Chinois', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'En savoir plus' // Add for carousel
    },
    'it': {
        'homeTitle': 'Benvenuti nella nostra azienda',
        'homeText': 'Questa è l\'introduzione o lo slogan della vostra azienda. L\'obiettivo è fornire prodotti di alta qualità e servizi eccellenti.',
        'productsTitle': 'I nostri prodotti',
        'productsText': 'Qui potete presentare le vostre principali linee di prodotti. Potete aggiungere immagini, descrizioni e link dei prodotti.',
        'product1Title': 'Serie di prodotti uno',
        'product1Text': 'Questa è una descrizione dettagliata della Serie di prodotti uno. Presenta le sue caratteristiche e i suoi vantaggi.',
        'product2Title': 'Serie di prodotti due',
        'product2Text': 'Questa è una descrizione dettagliata della Serie di prodotti due. Presenta le sue caratteristiche e i suoi vantaggi.',
        'aboutTitle': 'Chi siamo',
        'aboutText': 'Qui potete presentare la storia, la visione, la missione e i valori fondamentali della vostra azienda. Potete aggiungere foto del team e pietre miliari dell\'azienda.',
        'historyTitle': 'Storia dell\'azienda',
        'historyText': 'La vostra azienda è stata fondata nel XXXX e si è impegnata nel settore XXXX. Nel corso degli anni, abbiamo raggiunto molti traguardi.',
        'visionTitle': 'Visione dell\'azienda',
        'visionText': 'La nostra visione è diventare un leader nel settore XXXX, fornendo le migliori soluzioni di qualità ai nostri clienti.',
        'contactTitle': 'Contattaci',
        'contactText': 'Se avete domande o bisogno di aiuto, non esitate a contattarci.',
        'email': 'Email: your_email@example.com',
        'phone': 'Telefono: +86 XXXX-XXXXXXX',
        'address': 'Indirizzo: Il vostro indirizzo aziendale',
        'footer': '© 2024 Nome della vostra azienda. Tutti i diritti riservati.',
        'navHome': 'Home',
        'navProducts': 'Prodotti',
        'navAbout': 'Chi siamo',
        'navContact': 'Contattaci',
        'navProductCases': 'Casi di Prodotto',
        'langDisplay': 'Italiano',
        'carouselTitle': 'Paesaggio Cinese', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'Scopri di più' // Add for carousel
    },
    'hi': {
        'homeTitle': 'हमारी कंपनी में आपका स्वागत है',
        'homeText': 'यह आपकी कंपनी का परिचय या नारा है। इसका उद्देश्य उच्च गुणवत्ता वाले उत्पाद और उत्कृष्ट सेवाएँ प्रदान करना है।',
        'productsTitle': 'हमारे उत्पाद',
        'productsText': 'यहां, आप अपनी मुख्य उत्पाद श्रृंखलाओं का परिचय दे सकते हैं। आप उत्पाद चित्र, विवरण और लिंक जोड़ सकते हैं।',
        'product1Title': 'उत्पाद श्रृंखला एक',
        'product1Text': 'यह उत्पाद श्रृंखला एक का विस्तृत विवरण है। यह इसकी विशेषताओं और लाभों का परिचय देता है।',
        'product2Title': 'उत्पाद श्रृंखला दो',
        'product2Text': 'यह उत्पाद श्रृंखला दो का विस्तृत विवरण है। यह इसकी विशेषताओं और लाभों का परिचय देता है।',
        'aboutTitle': 'हमारे बारे में',
        'aboutText': 'यहां, आप अपनी कंपनी का इतिहास, दृष्टि, मिशन और मूल मूल्य प्रस्तुत कर सकते हैं। आप टीम की तस्वीरें और कंपनी के मील के पत्थर जोड़ सकते हैं।',
        'historyTitle': 'कंपनी का इतिहास',
        'historyText': 'आपकी कंपनी की स्थापना XXXX में हुई थी, और यह XXXX क्षेत्र में प्रतिबद्ध रही है। इन वर्षों में, हमने कई उपलब्धियाँ हासिल की हैं।',
        'visionTitle': 'कंपनी की दृष्टि',
        'visionText': 'हमारी दृष्टि XXXX उद्योग में एक अग्रणी बनना है, जो हमारे ग्राहकों को सर्वोत्तम गुणवत्ता वाले समाधान प्रदान करता है।',
        'contactTitle': 'हमसे संपर्क करें',
        'contactText': 'यदि आपके कोई प्रश्न हैं या सहायता की आवश्यकता है, तो कृपया बेझिझक हमसे संपर्क करें।',
        'email': 'ईमेल: your_email@example.com',
        'phone': 'फोन: +86 XXXX-XXXXXXX',
        'address': 'पता: आपकी कंपनी का पता',
        'footer': '© 2024 आपकी कंपनी का नाम। सर्वाधिकार सुरक्षित।',
        'navHome': 'होम',
        'navProducts': 'उत्पाद',
        'navAbout': 'हमारे बारे में',
        'navContact': 'संपर्क करें',
        'navProductCases': 'उत्पाद मामले',
        'langDisplay': 'हिन्दी',
        'carouselTitle': 'चीन का परिदृश्य', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'और जानें' // Add for carousel
    },
    'ar': {
        'homeTitle': 'مرحبًا بكم في شركتنا',
        'homeText': 'هذا هو مقدمة أو شعار شركتك. تهدف إلى تقديم منتجات عالية الجودة وخدمات ممتازة.',
        'productsTitle': 'منتجاتنا',
        'productsText': 'هنا، يمكنك تقديم خطوط منتجاتك الرئيسية. يمكنك إضافة صور المنتجات والأوصاف والروابط.',
        'product1Title': 'سلسلة المنتجات الأولى',
        'product1Text': 'هذا وصف تفصيلي لسلسلة المنتجات الأولى. يقدم ميزاتها ومزاياها.',
        'product2Title': 'سلسلة المنتجات الثانية',
        'product2Text': 'هذا وصف تفصيلي لسلسلة المنتجات الثانية. يقدم ميزاتها ومزاياها.',
        'aboutTitle': 'عنا',
        'aboutText': 'هنا، يمكنك تقديم تاريخ شركتك ورؤيتها ورسالتها وقيمها الأساسية. يمكنك إضافة صور الفريق ومعالم الشركة.',
        'historyTitle': 'تاريخ الشركة',
        'historyText': 'تأسست شركتك في عام XXXX، وقد التزمت بمجال XXXX. على مر السنين， حققنا العديد من الإنجازات.',
        'visionTitle': 'رؤية الشركة',
        'visionText': 'تتمثل رؤيتنا في أن نصبح شركة رائدة في صناعة XXXX، وتقديم أفضل الحلول عالية الجودة لعملائنا.',
        'contactTitle': 'اتصل بنا',
        'contactText': 'إذا كان لديك أي أسئلة أو كنت بحاجة إلى مساعدة، فلا تتردد في الاتصال بنا.',
        'email': 'البريد الإلكتروني: your_email@example.com',
        'phone': 'الهاتف: +86 XXXX-XXXXXXX',
        'address': 'العنوان: عنوان شركتك',
        'footer': '© 2024 اسم شركتك. جميع الحقوق محفوظة.',
        'navHome': 'الرئيسية',
        'navProducts': 'المنتجات',
        'navAbout': 'عنا',
        'navContact': 'اتصل بنا',
        'navProductCases': 'حالات المنتجات',
        'langDisplay': 'العربية',
        'carouselTitle': 'مناظر طبيعية صينية', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': 'تعلم المزيد' // Add for carousel
    },
    'ja': {
        'homeTitle': '私たちの会社へようこそ',
        'homeText': 'これはあなたの会社の紹介やスローガンです。高品質な製品と優れたサービスを提供することを目指しています。',
        'productsTitle': '当社の製品',
        'productsText': 'ここでは、主要な製品ラインを紹介できます。製品の画像、説明、リンクを追加できます。',
        'product1Title': '製品シリーズ1',
        'product1Text': 'これは製品シリーズ1の詳細な説明です。その特徴と利点を紹介します。',
        'product2Title': '製品シリーズ2',
        'product2Text': 'これは製品シリーズ2の詳細な説明です。その特徴と利点を紹介します。',
        'aboutTitle': '会社概要',
        'aboutText': 'ここでは、会社の歴史、ビジョン、ミッション、およびコアバリューを紹介できます。チームの写真や会社の節目を追加できます。',
        'historyTitle': '会社の歴史',
        'historyText': 'あなたの会社はXXXX年に設立され、XXXX分野に力を入れています。長年にわたり、多くの成果を上げてきました。',
        'visionTitle': '会社のビジョン',
        'visionText': '私たちのビジョンは、XXXX業界のリーダーとなり、お客様に最高品質のソリューションを提供することです。',
        'contactTitle': 'お問い合わせ',
        'contactText': 'ご質問やご不明な点がございましたら、お気軽にお問い合わせください。',
        'email': 'Eメール：your_email@example.com',
        'phone': '電話：+86 XXXX-XXXXXXX',
        'address': '住所：あなたの会社住所',
        'footer': '© 2024 あなたの会社名。すべての権利を保有。',
        'navHome': 'ホーム',
        'navProducts': '製品',
        'navAbout': '会社概要',
        'navContact': 'お問い合わせ',
        'navProductCases': '製品事例',
        'langDisplay': '日本語',
        'carouselTitle': '中国の風景', // Add for carousel
        'carouselDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris euismod, bibendum tellus vel, efficitur tellus.', // Add for carousel
        'learnMoreButton': '詳細はこちら' // Add for carousel
    }
};

const languageSwitcher = document.querySelector('.language-switcher');
const languageDropdown = document.querySelector('.language-dropdown');
const languageDisplay = document.querySelector('[data-lang-key="languageDisplay"]');

languageSwitcher.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
});

languageDropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (event) => {
        const lang = event.target.dataset.lang;
        setLanguage(lang);
        languageDropdown.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('zh-CN'); // Default language
    const quickCustomizeButton = document.getElementById('quick-customize-button-float');
    const floatingActionButton = document.querySelector('.floating-action-button');
    const customizeCard = document.getElementById('customize-card');

    if (floatingActionButton && customizeCard) {
        floatingActionButton.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认的跳转行为
            customizeCard.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

});


function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.dataset.langKey;
        if (langData[lang] && langData[lang][key]) {
            element.textContent = langData[lang][key];
        }
    });
    // Update language display
    if (langData[lang] && langData[lang].langDisplay) {
        languageDisplay.textContent = `语言: ${langData[lang].langDisplay} | ${lang === 'zh-CN' ? 'English' : '中文'}`;
    }
}

setLanguage('zh-CN');


// Carousel Functionality
const carousel = document.querySelector('.product-carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselTitle = document.querySelector('.info-text-overlay h1');
const carouselDescription = document.querySelector('.info-text-overlay p');
const carouselBackground = document.querySelector('.carousel-background');

// Check if carousel elements exist before initializing functionality
if (carousel && carouselInner && prevButton && nextButton && carouselTitle && carouselDescription && carouselBackground) {
    let currentIndex = 0;

    const images = [
        { src: 'image/IMG_20240825_094406.jpg', carouselTitle: '中国风光 06', description: '通过数字媒介创造的视觉奇观。' },
        { src: 'image/凌波丽.jpg', carouselTitle: '中国风光 07', description: '通过数字媒介创造的视觉奇观。' },
        { src: 'image/明日香.jpg', carouselTitle: '中国风光 08', description: '通过数字媒介创造的视觉奇观。' },
        { src: 'image/星野爱.jpg', carouselTitle: '中国风光 09', description: '通过数字媒介创造的视觉奇观。' },
        { src: 'image/米山舞.jpg', carouselTitle: '中国风光 10', description: '通过数字媒介创造的视觉奇观。' }
    ];

    function createCarouselItem(image) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.carouselTitle;
        item.appendChild(img);
        return item;
    }

    // Populate carousel
    images.forEach(image => {
        carouselInner.appendChild(createCarouselItem(image));
    });

    const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    const totalItems = carouselItems.length;

    function updateInfoOverlay() {
        const currentImage = images[currentIndex];
        carouselTitle.textContent = currentImage.carouselTitle;
        carouselDescription.textContent = currentImage.description;
    }

    function updateCarousel() {
        // Update background image
        if (carouselBackground && images[currentIndex]) {
            carouselBackground.style.backgroundImage = `url('${images[currentIndex].src}')`;
        }

        carouselItems.forEach((item, index) => {
            let offset = index - currentIndex;
            if (offset > totalItems / 2) {
                offset -= totalItems;
            } else if (offset < -totalItems / 2) {
                offset += totalItems;
            }
            
            const scale = 1 - Math.abs(offset) * 0.15; // Adjusted scale for a more pronounced effect
            const translateX = offset * 16; // Changed to 16vw for better responsive spacing
            const rotateY = offset * 15; // Slightly increased rotation
            const zIndex = totalItems - Math.abs(offset); // Corrected z-index for layering
            const opacity = 1 - Math.abs(offset) * 0.3; // Adjusted opacity for a smoother fade

            item.style.transform = `translateX(${translateX}vw) rotateY(${rotateY}deg) scale(${scale})`;
            item.style.zIndex = zIndex;
            item.style.opacity = opacity;
            item.style.position = 'absolute'; // Ensure absolute positioning for layering
            item.style.left = '50%';
            item.style.top = '50%';
            item.style.transform += 'translate(-50%, -50%)'; // Center the item after transformations
        });
        updateInfoOverlay();
    }

    function goToSlide(index) {
        currentIndex = (index + totalItems) % totalItems;
        updateCarousel();
    }

    function goToNext() {
        goToSlide(currentIndex + 1);
    }

    function goToPrev() {
        goToSlide(currentIndex - 1);
    }

    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);

    // Initial load
    updateCarousel();

    // Auto-scrolling
    let autoScrollInterval;
    function startAutoScroll() {
        stopAutoScroll(); // Clear any existing interval
        autoScrollInterval = setInterval(goToNext, 3000); // Change slide every 3 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

    // Start auto-scroll on initial load
    startAutoScroll();
}

// Accordion Gallery functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        accordionItems.forEach(accItem => accItem.classList.remove('active'));

        // Add active class to the clicked item
        item.classList.add('active');
    });
});

// Set the first item as active by default on load
if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
} 

// Vue 3 应用
//const { createApp } = Vue;

//createApp({
//    data() {
 //       return {
 //           message: 'Hello Vue 3!'
 //       }
//    },
//    template: `
 //       <div style="text-align: center; margin-top: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
 //           <h2>{{ message }}</h2>
 //           <p>这是一个从 Vue 3 渲染的简单消息！</p>
  //      </div>
    
//}).mount('#app'); 


// Check for saved theme preference and update icon
document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('customize-modal');
    console.log('Modal Overlay Element:', modalOverlay); // DEBUG
    const closeButton = modalOverlay ? modalOverlay.querySelector('.close-button') : null; // Check for null before querySelector
    console.log('Close Button Element:', closeButton); // DEBUG

    // Select both customization buttons
    const navbarCustomizeButton = document.getElementById('navbar-customize-button');
    console.log('Navbar Customize Button Element:', navbarCustomizeButton); // DEBUG
    const quickCustomizeButtonFloat = document.getElementById('quick-customize-button-float');
    console.log('Quick Customize Button Element:', quickCustomizeButtonFloat); // DEBUG

    function openModal() {
        console.log('openModal function called.'); // DEBUG
        if (modalOverlay) {
            modalOverlay.style.display = 'flex';
            modalOverlay.classList.remove('hidden');
        }
    }

    function closeModal() {
        console.log('closeModal function called.'); // DEBUG
        if (modalOverlay) {
            modalOverlay.classList.add('hidden');
            modalOverlay.addEventListener('animationend', function handler() {
                modalOverlay.style.display = 'none';
                modalOverlay.removeEventListener('animationend', handler);
            });
        }
    }

    // Add event listener for the navbar customization button
    if (navbarCustomizeButton) {
        navbarCustomizeButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page jump
            console.log('Navbar Customize Button clicked.'); // DEBUG
            openModal();
        });
    }

    // Add event listener for the floating quick customization button
    if (quickCustomizeButtonFloat) {
        quickCustomizeButtonFloat.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page jump
            console.log('Quick Customize Button clicked.'); // DEBUG
            openModal();
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                console.log('Modal Overlay clicked (outside content).'); // DEBUG
                closeModal();
            }
        });
    }

    // Theme toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    console.log('Theme Toggle Element:', themeToggle); // DEBUG
    const body = document.body;
    const lightbulbIcon = document.querySelector('#theme-toggle .lightbulb-icon');
    console.log('Lightbulb Icon Element:', lightbulbIcon); // DEBUG

    // Function to update the lightbulb icon based on theme
    function updateLightbulbIcon() {
        if (body.classList.contains('night-mode')) {
            lightbulbIcon.src = 'image/月亮.png';
            lightbulbIcon.alt = 'Moon';
        } else {
            lightbulbIcon.src = 'image/太阳.png';
            lightbulbIcon.alt = 'Sun';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        body.classList.add('night-mode');
    }
    updateLightbulbIcon(); // Set initial icon based on theme
    console.log('DOM Content Loaded. Initial theme set.'); // DEBUG

    if (themeToggle) { // Ensure themeToggle exists before adding event listener
        themeToggle.addEventListener('click', () => {
            console.log('Theme Toggle clicked.'); // DEBUG
            body.classList.toggle('night-mode');

            if (body.classList.contains('night-mode')) {
                localStorage.setItem('theme', 'night');
            } else {
                localStorage.setItem('theme', 'day');
            }

            updateLightbulbIcon(); // Update icon after theme change

            // Add and remove a class to trigger the animation
            lightbulbIcon.classList.add('rotate-animation');
            lightbulbIcon.addEventListener('animationend', function handler() {
                lightbulbIcon.classList.remove('rotate-animation');
            }, { once: true });
        });
    } else {
        console.error('Theme toggle element not found!'); // DEBUG
    }

}); 
:root {
    --primary-color-dark: #1a1111;
    --secondary-bg-dark: #211818;
    --card-bg-dark: #2c1f1f;
    --neon-dark-red: #4a0000;
    --neon-medium-red: #8e2d2d;
    --neon-light-red: #e50000;
    --neon-vibrant-red: #ff1010;
    --text-main: #e0d8d8;
    --text-highlight: #ff6a6a;
    --shadow-color-dark: rgba(0, 0, 0, 0.5);
    --border-color-dark: #3a2a2a;
    --glow-light: rgba(255, 0, 0, 0.1);
    --neon-dark-red-rgb: 74, 0, 0;
    --neon-medium-red-rgb: 142, 45, 45;
    --neon-light-red-rgb: 229, 0, 0;
    --neon-vibrant-red-rgb: 255, 16, 16;
}

body {
    font-family: 'Cairo', sans-serif;
    margin: 0;
    padding: 0;
    color: var(--text-main);
    direction: rtl;
    text-align: right;
    background-color: var(--primary-color-dark);
    transition: background-color 0.5s ease, color 0.5s ease;
    overflow-x: hidden;
    font-size: 15px; /* قللنا الفونت الأساسي شوية */
}

body.dark-mode {
    background-color: var(--primary-color-dark);
    color: var(--text-main);
}

body.light-mode {
    background-color: #ffebeb;
    color: #330000;
}

body.light-mode :root {
    --primary-color-dark: #ffffff;
    --secondary-bg-dark: #ffe0e0;
    --card-bg-dark: #ffffff;
    --neon-dark-red: #800000;
    --neon-medium-red: #b03a3a;
    --neon-light-red: #ff4d4d;
    --neon-vibrant-red: #ff0000;
    --text-main: #330000;
    --text-highlight: #e04a4a;
    --shadow-color-dark: rgba(0, 0, 0, 0.15);
    --border-color-dark: #ffb3b3;
    --glow-light: rgba(255, 0, 0, 0.05);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* قللنا البادينج هنا عشان متلزقش أوي */
}

a {
    text-decoration: none;
    color: inherit;
}

.btn {
    padding: 12px 25px; /* قللنا حجم الزرار شوية */
    border-radius: 25px;
    font-size: 0.95em; /* قللنا الفونت فيه */
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary-neon {
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
    color: #ffffff;
    box-shadow: 0 5px 15px rgba(var(--neon-vibrant-red-rgb), 0.5);
    border: 1px solid var(--neon-vibrant-red);
}

.btn-primary-neon:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 7px 20px rgba(var(--neon-vibrant-red-rgb), 0.8);
    background: linear-gradient(90deg, var(--neon-light-red), var(--neon-vibrant-red));
}

.btn-secondary-neon {
    background: transparent;
    color: var(--neon-light-red);
    border: 2px solid var(--neon-light-red);
    box-shadow: 0 3px 10px rgba(var(--neon-light-red-rgb), 0.3);
}

.btn-secondary-neon:hover {
    transform: translateY(-3px) scale(1.01);
    background-color: rgba(var(--neon-light-red-rgb), 0.1);
    box-shadow: 0 5px 15px rgba(var(--neon-light-red-rgb), 0.6);
}

.fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
}

.fade-in-up.delay-1 {
    animation-delay: 0.2s;
}

.fade-in-up.delay-2 {
    animation-delay: 0.4s;
}

.fade-in-up.delay-3 {
    animation-delay: 0.6s;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-in-right {
    opacity: 0;
    transform: translateX(20px);
    animation: slideInRight 0.8s ease-out forwards;
    animation-play-state: paused;
}

.slide-in-left {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.8s ease-out forwards;
    animation-play-state: paused;
}

.fade-in-right {
    opacity: 0;
    transform: translateX(20px);
    animation: fadeInRight 0.8s ease-out forwards;
    animation-play-state: paused;
}


@keyframes slideInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.glow-effect {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.glow-effect::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(var(--neon-vibrant-red-rgb), 0.6) 0%, transparent 70%);
    transform: rotate(0deg);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    z-index: -1;
}

.glow-effect:hover::before {
    transform: rotate(360deg);
    opacity: 1;
}

.bounce-effect {
    transition: transform 0.3s ease;
}

.bounce-effect:hover {
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-6px);
    }
}

.hero-section {
    position: relative;
    width: 100%;
    min-height: 90vh; /* قللنا الارتفاع شوية */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-main);
    padding: 80px 0; /* قللنا البادينج هنا برضه */
    overflow: hidden;
    background: linear-gradient(135deg, var(--primary-color-dark) 0%, var(--secondary-bg-dark) 100%);
    box-shadow: 0 8px 25px var(--shadow-color-dark);
}

#interactive-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    background: radial-gradient(circle at center, rgba(var(--neon-medium-red-rgb), 0.05) 0%, transparent 70%);
    opacity: 0.6;
}

#interactive-grid canvas {
    display: block;
    background-color: var(--primary-color-dark);
}

.top-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 15px 20px; /* قللنا البادينج شوية */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    width: 100%;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
}

.top-bar i {
    font-size: 1.6em; /* قللنا حجم الأيقونات */
    cursor: pointer;
    color: var(--text-main);
    transition: color 0.3s ease;
}

.top-bar i:hover {
    color: var(--neon-light-red);
}

.auth-buttons {
    display: flex;
    gap: 12px; /* قللنا المسافة بين الأزرار */
    align-items: center;
}

.auth-buttons .btn-auth {
    background: linear-gradient(90deg, var(--neon-medium-red), var(--neon-light-red));
    color: #ffffff;
    box-shadow: 0 3px 10px rgba(var(--neon-medium-red-rgb), 0.4);
    padding: 8px 18px; /* قللنا حجم الأزرار دي */
    font-size: 0.9em; /* قللنا الفونت فيها */
    border: none;
}

.auth-buttons .btn-auth:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(var(--neon-medium-red-rgb), 0.7);
}

.auth-buttons .btn-auth-secondary {
    background: transparent;
    color: var(--text-highlight);
    border: 1px solid var(--text-highlight);
    padding: 8px 18px; /* قللنا حجم الأزرار دي */
    font-size: 0.9em; /* قللنا الفونت فيها */
}

.auth-buttons .btn-auth-secondary:hover {
    transform: translateY(-2px);
    background-color: rgba(var(--text-highlight-rgb), 0.1);
}

.auth-buttons p {
    font-size: 0.85em; /* قللنا الفونت هنا كمان */
    color: var(--text-main);
    margin: 0;
    opacity: 0.7;
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px; /* قللنا أقصى عرض للمحتوى */
    padding: 0 20px;
    padding-top: 60px; /* قللنا البادينج العلوي */
}

.hero-content h1 {
    font-size: 3em; /* قللنا حجم العنوان الرئيسي */
    font-weight: 700;
    margin-bottom: 18px; /* قللنا المسافة اللي تحت العنوان */
    color: var(--neon-light-red);
    text-shadow: 0 0 12px rgba(var(--neon-light-red-rgb), 0.8);
    line-height: 1.2;
    font-family: 'Cairo', sans-serif;
    color: #ffffff;
    text-shadow: 0 0 8px rgba(var(--neon-light-red-rgb), 0.6), 0 0 12px rgba(var(--neon-vibrant-red-rgb), 0.4);
}

.hero-content h1 .highlight {
    color: var(--neon-vibrant-red);
    text-shadow: 0 0 18px rgba(var(--neon-vibrant-red-rgb), 1);
}

.hero-content p {
    font-size: 1.1em; /* قللنا حجم البراجراف هنا */
    line-height: 1.6;
    margin-bottom: 35px; /* قللنا المسافة اللي تحته */
    opacity: 0.9;
    max-width: 650px; /* قللنا أقصى عرض للبراجراف */
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    color: var(--text-main);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px; /* قللنا المسافة بين الزرارين */
}

.section {
    padding: 70px 0; /* قللنا بادينج الأقسام */
    background-color: var(--secondary-bg-dark);
    border-top: 1px solid var(--border-color-dark);
    border-bottom: 1px solid var(--border-color-dark);
    transition: background-color 0.5s ease;
    position: relative;
    overflow: hidden;
}

.stats-banner-section {
    background-color: var(--secondary-bg-dark);
    padding: 25px 0; /* قللنا البادينج هنا */
    border-bottom: 1px solid var(--border-color-dark);
    box-shadow: 0 3px 12px var(--shadow-color-dark);
}

.stats-banner-section .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 15px; /* قللنا المسافة بين الـ stats */
}

.stats-banner-section .stat-item {
    text-align: center;
    color: var(--text-main);
    flex: 1;
    min-width: 120px; /* قللنا أقل عرض للعنصر */
    max-width: 200px; /* قللنا أقصى عرض للعنصر */
    padding: 10px; /* قللنا البادينج الداخلي */
    border-radius: 8px;
    background-color: var(--card-bg-dark);
    box-shadow: 0 2px 8px var(--shadow-color-dark);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stats-banner-section .stat-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 15px rgba(var(--neon-vibrant-red-rgb), 0.4);
}

.stats-banner-section .stat-number {
    font-size: 2.5em; /* قللنا حجم الرقم */
    font-weight: 700;
    color: var(--neon-light-red);
    text-shadow: 0 0 7px rgba(var(--neon-light-red-rgb), 0.6);
    margin-bottom: 2px;
}

.stats-banner-section p {
    font-size: 0.95em; /* قللنا حجم الكلام اللي تحت الرقم */
    color: var(--text-main);
    margin: 0;
}

.about-section {
    padding: 70px 0; /* قللنا البادينج */
    background: linear-gradient(135deg, var(--primary-color-dark), #100b0b);
    color: var(--text-main);
}

.about-section .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse; /* خليناها wrap-reverse عشان الصورة تيجي قبل الكلام في الموبايل */
    gap: 30px; /* قللنا المسافة بين الصورة والكلام */
    /* شلت align-content: stretch; لأنها ممكن تعمل مشاكل في بعض الحالات */
}

.about-content {
    flex: 1;
    min-width: 260px;
    max-width: 500px; /* قللنا أقصى عرض للمحتوى */
    text-align: right;
    /* تأكدت إنها مش بتختفي بسبب الـ flexbox */
}

.about-image {
    flex: 1;
    min-width: 260px;
    max-width: 400px; /* قللنا أقصى عرض للصورة */
    position: relative;
    padding: 12px; /* قللنا البادينج حول الصورة */
    border-radius: 12px;
    background: linear-gradient(135deg, var(--neon-dark-red), var(--neon-medium-red));
    box-shadow: 0 7px 25px rgba(var(--neon-medium-red-rgb), 0.6);
}

.about-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
    filter: saturate(1.1) brightness(1.05);
}

.section-title {
    font-family: 'Cairo', sans-serif;
    font-size: 2.5em; /* قللنا حجم عنوان القسم */
    color: var(--neon-vibrant-red);
    text-align: center;
    margin-bottom: 50px; /* قللنا المسافة اللي تحته */
    position: relative;
    padding-bottom: 12px; /* قللنا البادينج السفلي */
    text-shadow: 0 0 12px rgba(var(--neon-vibrant-red-rgb), 0.7);
    color: var(--neon-vibrant-red);
    margin-bottom: 20px;
    padding-bottom: 10px;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px; /* قللنا عرض الخط اللي تحت العنوان */
    height: 4px; /* قللنا سمك الخط */
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(var(--neon-vibrant-red-rgb), 0.6);
    /* شلت right: 50%; لأنها بتلغي left: 50%; */
    width: 70px; /* قللنا العرض هنا كمان */
    height: 3px; /* قللنا السمك */
    border-radius: 2px;
}

.about-section p {
    font-size: 1.1em; /* قللنا حجم الكلام هنا */
    line-height: 1.6;
    color: var(--text-main);
    max-width: 650px; /* قللنا أقصى عرض */
    margin-bottom: 25px;
}

.services-section {
    padding: 70px 0;
    background-color: var(--secondary-bg-dark);
    text-align: center;
}

.services-section p {
    font-size: 1.1em;
    margin-bottom: 40px; /* قللنا المسافة */
    color: var(--text-main);
    max-width: 700px; /* قللنا أقصى عرض */
    margin-left: auto;
    margin-right: auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* قللنا أقل عرض للكارد */
    gap: 25px; /* قللنا المسافة بين الكروت */
    margin-top: 35px;
}

.service-card {
    background: linear-gradient(145deg, var(--card-bg-dark), #1d1414);
    padding: 25px; /* قللنا البادينج الداخلي */
    border-radius: 12px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid var(--border-color-dark);
    position: relative;
    overflow: hidden;
    text-align: center;
}

.service-card::before {
    content: '';
    position: absolute;
    top: -40%;
    left: -40%;
    width: 180%;
    height: 180%;
    background: radial-gradient(circle, rgba(var(--neon-medium-red-rgb), 0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease-out;
    transform: scale(0);
    border-radius: 50%;
}

.service-card:hover::before {
    opacity: 0.8;
    transform: scale(1);
}

.service-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 9px 30px rgba(var(--neon-dark-red-rgb), 0.5);
    border-color: var(--neon-light-red);
}

.service-card i {
    font-size: 3em; /* قللنا حجم الأيقونات */
    color: var(--neon-light-red);
    margin-bottom: 18px;
    text-shadow: 0 0 8px rgba(var(--neon-light-red-rgb), 0.8);
}

.service-card h3 {
    font-size: 1.6em; /* قللنا حجم العنوان الفرعي */
    color: var(--text-highlight);
    margin-bottom: 12px;
    text-shadow: 0 0 5px rgba(var(--neon-vibrant-red-rgb), 0.3);
}

.service-card p {
    font-size: 0.95em; /* قللنا حجم البراجراف */
    color: var(--text-main);
    line-height: 1.5;
    margin-bottom: 0;
}

.portfolio-section {
    padding: 70px 0;
    background: linear-gradient(135deg, #1d1414, var(--primary-color-dark));
    text-align: center;
}

.portfolio-section p {
    font-size: 1.1em;
    margin-bottom: 40px;
    color: var(--text-main);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* قللنا أقل عرض للكارد */
    gap: 25px;
    margin-top: 35px;
}

.portfolio-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: var(--card-bg-dark);
    border: 1px solid var(--border-color-dark);
}

.portfolio-item:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 9px 30px rgba(var(--neon-light-red-rgb), 0.5);
    border-color: var(--neon-vibrant-red);
}

.portfolio-item img {
    width: 100%;
    height: 250px; /* قللنا ارتفاع الصورة */
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
    filter: brightness(0.9);
}

.portfolio-item:hover img {
    transform: scale(1.03);
    filter: brightness(0.7);
}

.portfolio-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--neon-medium-red-rgb), 0.85), rgba(var(--neon-dark-red-rgb), 0.8));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    padding: 18px; /* قللنا البادينج */
    box-sizing: border-box;
    text-align: center;
}

.portfolio-item:hover .overlay {
    opacity: 1;
}

.overlay h3 {
    color: #ffffff;
    font-size: 1.8em; /* قللنا حجم العنوان */
    margin-bottom: 10px;
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.5);
}

.overlay p {
    color: var(--text-main);
    font-size: 0.95em; /* قللنا حجم البراجراف */
    margin-bottom: 20px;
}

.view-project-btn {
    display: inline-block;
    background: linear-gradient(90deg, var(--neon-light-red), var(--neon-vibrant-red));
    color: #ffffff;
    padding: 10px 22px; /* قللنا حجم الزرار */
    border-radius: 22px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95em; /* قللنا الفونت فيه */
    transition: all 0.3s ease;
    box-shadow: 0 3px 12px rgba(var(--neon-light-red-rgb), 0.5);
    border: none;
}

.view-project-btn:hover {
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
    transform: scale(1.03);
    box-shadow: 0 5px 18px rgba(var(--neon-vibrant-red-rgb), 0.7);
}

.call-to-action-section {
    background: linear-gradient(135deg, var(--secondary-bg-dark) 0%, #1a1111 100%);
    color: var(--text-main);
    padding: 70px 0;
    text-align: center;
    box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.4);
}

.call-to-action-section .section-title {
    color: var(--neon-light-red);
    text-shadow: 0 0 7px rgba(var(--neon-light-red-rgb), 0.7);
}

.call-to-action-section .section-title::after {
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
}

.call-to-action-section p {
    font-size: 1.15em; /* قللنا حجم الكلام */
    margin-bottom: 35px;
    font-weight: 300;
    color: var(--text-main);
}

footer {
    background-color: #100b0b;
    color: var(--text-main);
    padding: 20px 0; /* قللنا البادينج */
    text-align: center;
    font-size: 0.85em; /* قللنا الفونت */
    transition: background-color 0.5s ease;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3);
    border-top: 1px solid var(--border-color-dark);
}

footer .social-links {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 12px;
}

footer .social-links a {
    color: var(--text-main);
    font-size: 1.2em; /* قللنا حجم الأيقونات */
    transition: color 0.3s ease, transform 0.3s ease;
}

footer .social-links a:hover {
    color: var(--neon-vibrant-red);
    transform: translateY(-2px) scale(1.05);
}

/* المودالز (Nodals) */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-out, visibility 0.3s ease-out; /* قللنا سرعة الانتقال */
}

.modal.show {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: linear-gradient(135deg, #2c1f1f, #1a1111);
    margin: auto;
    padding: 25px; /* قللنا البادينج */
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(var(--neon-medium-red-rgb), 0.3);
    width: 90%;
    max-width: 400px; /* قللنا أقصى عرض للمودال */
    position: relative;
    transform: scale(0.8) translateY(-25px); /* قللنا التحرك الأولي */
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.4s ease;
    border: 1px solid var(--neon-dark-red);
}

.modal.show .modal-content {
    transform: scale(1) translateY(0);
}

.close-button {
    color: var(--text-main);
    font-size: 2em; /* قللنا حجم الـ X */
    position: absolute;
    top: 12px;
    left: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
    text-shadow: 0 0 7px rgba(var(--neon-light-red-rgb), 0.5);
}

.close-button:hover,
.close-button:focus {
    color: var(--neon-vibrant-red);
    transform: rotate(180deg) scale(1.03);
    text-shadow: 0 0 8px rgba(var(--neon-vibrant-red-rgb), 0.8);
}

.auth-container .auth-title {
    font-family: 'Cairo', sans-serif;
    font-size: 2.2em; /* قللنا حجم العنوان هنا */
    color: var(--neon-light-red);
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 12px;
    text-shadow: 0 0 8px rgba(var(--neon-light-red-rgb), 0.7);
}

.auth-container .auth-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 60px; /* قللنا العرض */
    height: 3px; /* قللنا السمك */
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
    border-radius: 2px;
}

.auth-container .auth-form .form-group {
    margin-bottom: 18px;
    text-align: right;
}

.auth-container .auth-form label {
    display: block;
    font-size: 1em; /* قللنا حجم الليبل */
    color: var(--text-main);
    margin-bottom: 6px;
    font-weight: 600;
}

.auth-container .auth-form input[type="email"],
.auth-container .auth-form input[type="password"],
.auth-container .auth-form input[type="text"] {
    width: calc(100% - 20px); /* قللنا العرض شوية */
    padding: 10px; /* قللنا البadينج */
    border: 1px solid var(--border-color-dark);
    border-radius: 6px;
    font-size: 0.95em; /* قللنا الفونت */
    direction: rtl;
    text-align: right;
    background-color: var(--primary-color-dark);
    color: var(--text-main);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.5s ease, color 0.5s ease;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
    font-family: 'cairo', sans-serif;
}

.auth-container .auth-form input[type="email"]:focus,
.auth-container .auth-form input[type="password"]:focus,
.auth-container .auth-form input[type="text"]:focus {
    border-color: var(--neon-light-red);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--neon-light-red-rgb), 0.3), inset 0 1px 3px rgba(0, 0, 0, 0.4);
}

.auth-container .auth-form .btn {
    width: 100%;
    font-family: 'Cairo', sans-serif;
    margin-top: 25px;
    padding: 12px; /* قللنا البادينج هنا */
    font-size: 1.1em; /* قللنا الفونت هنا */
    box-shadow: 0 7px 20px rgba(var(--neon-vibrant-red-rgb), 0.6);
}

.auth-container .auth-form .btn:hover {
    transform: translateY(-2px) scale(1.01);
}

.auth-container .auth-switch {
    margin-top: 20px;
    font-size: 0.95em; /* قللنا الفونت */
    color: var(--text-main);
}

.auth-container .auth-switch a {
    color: var(--neon-light-red);
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.auth-container .auth-switch a:hover {
    color: var(--neon-vibrant-red);
    text-shadow: 0 0 5px rgba(var(--neon-vibrant-red-rgb), 0.6);
}

/* التعديلات على أحجام الخطوط في الـ dashboard لو موجودة */
.dashboard-body {
    background-color: var(--primary-color-dark);
    transition: background-color 0.5s ease, color 0.5s ease;
    color: var(--text-main);
}

.navbar {
    background-color: var(--secondary-bg-dark);
    padding: 12px 0; /* قللنا البادينج */
    box-shadow: 0 3px 12px var(--shadow-color-dark);
    transition: background-color 0.5s ease;
}

.navbar-brand {
    color: var(--neon-vibrant-red);
    font-family: 'Cairo', sans-serif;
    font-size: 1.6em; /* قللنا الفونت */
    font-weight: 700;
    text-shadow: 0 0 7px rgba(var(--neon-vibrant-red-rgb), 0.6);
}

.navbar-nav a {
    color: var(--text-main);
    font-size: 0.95em; /* قللنا الفونت */
    position: relative;
}

.navbar-nav a:hover,
.navbar-nav a.active {
    color: var(--neon-light-red);
    text-shadow: 0 0 5px rgba(var(--neon-light-red-rgb), 0.5);
}

.navbar-nav a::after {
    background: linear-gradient(90deg, var(--neon-vibrant-red), var(--neon-light-red));
    height: 2px;
}

.navbar-nav .logout-btn {
    background: linear-gradient(90deg, #dc3545, #c82333);
    padding: 7px 15px; /* قللنا البادينج */
    border-radius: 18px;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(220, 53, 69, 0.4);
    font-size: 0.9em; /* قللنا الفونت */
}

.navbar-nav .logout-btn:hover {
    background: linear-gradient(90deg, #c82333, #dc3545);
    transform: translateY(-1px) scale(1.01);
    box-shadow: 0 3px 12px rgba(220, 53, 69, 0.6);
}

.dashboard-content {
    padding: 30px 20px; /* قللنا البادينج */
    background-color: var(--card-bg-dark);
    margin-top: 25px;
    border-radius: 12px;
    box-shadow: 0 7px 20px var(--shadow-color-dark);
    transition: background-color 0.5s ease;
    border: 1px solid var(--border-color-dark);
}

.dashboard-title {
    font-family: 'Cairo', sans-serif;
    font-size: 2.4em; /* قللنا الفونت */
    color: var(--neon-light-red);
    margin-bottom: 18px;
    text-shadow: 0 0 8px rgba(var(--neon-light-red-rgb), 0.7);
}

.dashboard-welcome-text {
    font-size: 1em; /* قللنا الفونت */
    color: var(--text-main);
    text-align: center;
    margin-bottom: 35px;
    line-height: 1.5;
}

.dashboard-stats-grid {
    gap: 25px; /* قللنا المسافات */
}

.stat-card {
    background: linear-gradient(45deg, var(--neon-dark-red) 0%, var(--neon-medium-red) 100%);
    color: #ffffff;
    padding: 20px; /* قللنا البادينج */
    border-radius: 10px;
    box-shadow: 0 5px 18px rgba(var(--neon-medium-red-rgb), 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--neon-vibrant-red);
}

.stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 20px rgba(var(--neon-vibrant-red-rgb), 0.7);
}

.stat-card i {
    font-size: 2.8em; /* قللنا حجم الأيقونة */
    margin-bottom: 12px;
    color: var(--neon-light-red);
    text-shadow: 0 0 8px rgba(var(--neon-light-red-rgb), 0.8);
}

.stat-card h3 {
    font-size: 1.5em; /* قللنا حجم العنوان */
    margin-bottom: 8px;
    font-weight: 600;
}

.stat-card p {
    font-size: 1.2em; /* قللنا حجم الرقم */
    font-weight: 700;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.recent-activity {
    background-color: var(--primary-color-dark);
    padding: 20px; /* قللنا البادينج */
    border-radius: 10px;
    box-shadow: 0 3px 12px var(--shadow-color-dark);
    transition: background-color 0.5s ease;
    border: 1px solid var(--border-color-dark);
}

.recent-activity h3 {
    font-family: 'Cairo', sans-serif;
    font-size: 1.8em; /* قللنا الفونت */
    color: var(--neon-vibrant-red);
    margin-bottom: 18px;
    border-bottom: 1px solid var(--border-color-dark);
    padding-bottom: 10px;
    text-shadow: 0 0 7px rgba(var(--neon-vibrant-red-rgb), 0.6);
}

.recent-activity ul li {
    padding: 10px 0;
    border-bottom: 1px dashed var(--border-color-dark);
    color: var(--text-main);
    font-size: 0.95em; /* قللنا الفونت */
}

/* Media Queries (تعديلات عشان الشاشات الصغيرة تبقى في المعقول برضه) */
@media (max-width: 992px) {
    .hero-section {
        padding-top: 80px; /* قللنا البادينج هنا */
        min-height: 80vh; /* قللنا الارتفاع كمان */
    }
    .hero-content h1 {
        font-size: 2.8em; /* قللنا حجم العنوان */
    }
    .hero-content p {
        font-size: 1em; /* قللنا حجم البراجراف */
    }
    .hero-buttons {
        flex-direction: column;
        gap: 12px;
    }
    .about-section .container {
        flex-direction: column;
        text-align: center;
        /* هنا تأكدنا إن ترتيب العناصر مظبوط للموبايل */
        flex-wrap: wrap-reverse; /* الصورة أولاً ثم المحتوى في الموبايل */
    }
    .about-content {
        order: 2; /* خلي المحتوى يجي بعد الصورة في الموبايل */
    }
    .about-image {
        order: 1; /* خلي الصورة تيجي الأول في الموبايل */
    }
    .section-title, .auth-title, .dashboard-title {
        font-size: 2.4em; /* قللنا الفونت */
    }
    .services-grid, .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* قللنا أقل عرض */
        gap: 18px;
    }
    .service-card, .portfolio-item {
        padding: 22px;
    }
    .portfolio-item img {
        height: 200px; /* قللنا ارتفاع الصورة */
    }
    .stats-banner-section .stat-number {
        font-size: 2.2em; /* قللنا الفونت */
    }
    .stats-banner-section p {
        font-size: 0.9em; /* قللنا الفونت */
    }
}

@media (max-width: 768px) {
    body {
        font-size: 14px; /* قللنا الفونت الأساسي أكتر */
    }
    .hero-content h1 {
        font-size: 2.2em; /* قللنا حجم العنوان */
    }
    .hero-content p {
        font-size: 0.9em; /* قللنا حجم البراجراف */
    }
    .btn {
        padding: 10px 20px;
        font-size: 0.85em;
    }
    .section-title, .auth-title, .dashboard-title {
        font-size: 2em;
    }
    .top-bar {
        flex-direction: column;
        gap: 8px;
        padding-top: 8px;
    }
    .auth-buttons {
        flex-direction: column;
        gap: 6px;
    }
    .auth-buttons .btn {
        width: 100%;
        text-align: center;
    }
    .modal-content {
        padding: 20px;
        border-radius: 10px;
    }
    .close-button {
        font-size: 1.8em;
    }
    .auth-container .auth-title {
        font-size: 1.8em;
    }
    .auth-container .auth-form input {
        padding: 8px;
        font-size: 0.85em;
    }
    .auth-container .auth-form .btn {
        padding: 10px;
        font-size: 1em;
    }
}

@media (max-width: 480px) {
    body {
        font-size: 13px; /* قللنا الفونت الأساسي أكتر وأكتر */
    }
    .hero-content h1 {
        font-size: 1.8em;
        margin-bottom: 10px;
    }
    .hero-content p {
        font-size: 0.8em;
        margin-bottom: 20px;
    }
    .btn {
        padding: 8px 15px;
        font-size: 0.8em;
    }
    .section-title, .auth-title, .dashboard-title {
        font-size: 1.6em;
    }
    .stats-banner-section .stat-item {
        min-width: 90px;
        padding: 8px;
    }
    .stats-banner-section .stat-number {
        font-size: 2em;
    }
    .stats-banner-section p {
        font-size: 0.8em;
    }
    .service-card, .portfolio-item {
        padding: 18px;
    }
    .service-card h3, .overlay h3 {
        font-size: 1.4em;
    }
    .service-card p, .overlay p {
        font-size: 0.85em;
    }
    .portfolio-item img {
        height: 150px;
    }
    .modal-content {
        padding: 18px;
    }
    .close-button {
        font-size: 1.6em;
        top: 8px;
        left: 8px;
    }
    .auth-container .auth-title {
        font-size: 1.6em;
    }
    .auth-container .auth-form input {
        padding: 7px;
        font-size: 0.8em;
    }
    .auth-container .auth-form .btn {
        padding: 8px;
        font-size: 0.9em;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sayed's Creative Nexus Loaded! Embracing the new style! ✨🎨");

    const data = PERSONAL_DATA;

    // Header Links
    document.getElementById('header-github').href = data.socialLinks.github;
    document.getElementById('header-linkedin').href = data.socialLinks.linkedin;

    // Hero Section
    const heroProfilePic = document.getElementById('hero-profile-pic');
    if (heroProfilePic) {
        heroProfilePic.src = data.profilePic;
    }
    document.getElementById('hero-intro-text').textContent = data.aboutHero;
    document.getElementById('hero-main-title').textContent = data.mainTitle;
    document.getElementById('hero-sub-title').textContent = data.subTitle;

    // About Me Section
    const aboutMeProfilePic = document.getElementById('about-me-profile-pic');
    if (aboutMeProfilePic) {
        aboutMeProfilePic.src = data.profilePic;
    }
    document.getElementById('about-me-full-text').textContent = data.aboutMe;
    document.getElementById('about-email').textContent = data.socialLinks.email.replace('mailto:', '');

    // My Skills Section
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        data.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <i class="${skill.iconClass}"></i>
                <p>${skill.name}</p>
            `;
            skillsGrid.appendChild(skillItem);
        });
    }

    // Portfolio Section (Creative Works)
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <h4>${project.title}</h4>
                <p>${project.category}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="view-link" target="_blank">View Project <i class="fas fa-arrow-right"></i></a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Featured Works Section (Signature Creations)
    const featuredWorksGrid = document.getElementById('featured-works-grid');
    if (featuredWorksGrid) {
        featuredWorksGrid.innerHTML = '';
        data.signatureWorks.forEach(work => {
            const workCard = document.createElement('div');
            workCard.className = 'featured-work-card';
            workCard.innerHTML = `
                <img src="${work.img}" alt="${work.title}">
                <h4>${work.title}</h4>
                <p>${work.description}</p>
                <a href="${work.link}" class="view-link" target="_blank">Explore <i class="fas fa-arrow-right"></i></a>
            `;
            featuredWorksGrid.appendChild(workCard);
        });
    }

    // Insights Section
    const insightsGrid = document.getElementById('insights-grid');
    if (insightsGrid) {
        insightsGrid.innerHTML = '';
        data.insights.forEach(insight => {
            const insightCard = document.createElement('div');
            insightCard.className = 'insight-card';
            insightCard.innerHTML = `
                <img src="${insight.img}" alt="${insight.title}">
                <h4>${insight.title}</h4>
                <p>${insight.description}</p>
            `;
            insightsGrid.appendChild(insightCard);
        });
    }

    // Contact Section
    document.getElementById('contact-email').textContent = data.socialLinks.email.replace('mailto:', '');
    document.getElementById('contact-github').textContent = data.socialLinks.github.split('/').pop() || 'N/A';
    document.getElementById('contact-linkedin').textContent = data.socialLinks.linkedin.split('/').pop() || 'N/A';
    document.getElementById('contact-discord').textContent = data.socialLinks.discord.split('/').pop() || 'N/A';

    // Footer Socials
    document.getElementById('footer-github').href = data.socialLinks.github;
    document.getElementById('footer-linkedin').href = data.socialLinks.linkedin;
    document.getElementById('footer-twitter').href = data.socialLinks.twitter;
    document.getElementById('footer-discord').href = data.socialLinks.discord;


    // ===== Liquid Blob Canvas Background =====
    const canvas = document.getElementById('liquid-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    const blobs = [];
    const numBlobs = 6;
    const blobColors = [
        'rgba(255, 69, 0, 0.2)',
        'rgba(255, 192, 0, 0.15)',
        'rgba(139, 0, 0, 0.25)',
        'rgba(255, 69, 0, 0.1)',
        'rgba(204, 153, 0, 0.1)'
    ];

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Blob {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * (height / 4) + (height / 8);
            this.color = blobColors[Math.floor(Math.random() * blobColors.length)];
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.oscillationSpeed = Math.random() * 0.05 + 0.01;
            this.oscillationAmplitude = Math.random() * 20 + 10;
            this.oscillationOffset = Math.random() * Math.PI * 2;
            this.blur = Math.random() * 80 + 50;
        }

        draw() {
            ctx.filter = `blur(${this.blur}px)`;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            this.x += Math.sin(Date.now() * this.oscillationSpeed + this.oscillationOffset) * this.oscillationAmplitude * 0.01;
            this.y += Math.cos(Date.now() * this.oscillationSpeed + this.oscillationOffset) * this.oscillationAmplitude * 0.01;

            if (this.x - this.radius < 0 || this.x + this.radius > width) {
                this.vx *= -1;
            }
            if (this.y - this.radius < 0 || this.y + this.radius > height) {
                this.vy *= -1;
            }
        }
    }

    for (let i = 0; i < numBlobs; i++) {
        blobs.push(new Blob());
    }

    function animateBlobs() {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.globalAlpha = 0.8;
        for (const blob of blobs) {
            blob.update();
            blob.draw();
        }
        ctx.restore();
        requestAnimationFrame(animateBlobs);
    }
    animateBlobs();

    // ===== Glowing Effect for CTA Buttons (Fixed: no transform scale) =====
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        let glowInterval;
        let isGlowing = false;

        const startGlow = () => {
            if (!isGlowing) {
                isGlowing = true;
                glowInterval = setInterval(() => {
                    const opacity = Math.random() * (1 - 0.7) + 0.7;
                    const spread = Math.random() * (15 - 5) + 5;
                    const color = button.classList.contains('primary-cta') ? 'var(--neon-fire)' : 'var(--neon-gold-subtle)';
                    button.style.boxShadow = `0 0 ${spread}px ${color}, 0 0 ${spread * 1.5}px ${color}`;
                    button.style.opacity = opacity;
                }, 700);
            }
        };

        const stopGlow = () => {
            clearInterval(glowInterval);
            isGlowing = false;
            if (button.classList.contains('primary-cta')) {
                button.style.boxShadow = `0 0.3125rem 0.9375rem rgba(255, 69, 0, 0.4)`;
            } else {
                button.style.boxShadow = `0 0.3125rem 0.9375rem rgba(204, 153, 0, 0.4)`;
            }
            button.style.opacity = 1;
        };

        startGlow();

        button.addEventListener('mouseenter', () => {
            stopGlow();
            const color = button.classList.contains('primary-cta') ? 'var(--neon-fire)' : 'var(--neon-gold-subtle)';
            button.style.boxShadow = `0 0 20px ${color}, 0 0 30px ${color}`;
            button.style.opacity = 1;
        });

        button.addEventListener('mouseleave', () => {
            startGlow();
        });
        
        const ripple = document.createElement('span'); // Define ripple for all CTA buttons
        ripple.classList.add('ripple');

        button.addEventListener('click', (e) => {
            const newRipple = ripple.cloneNode(); // Clone for each click
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            newRipple.style.width = newRipple.style.height = `${size}px`;
            newRipple.style.left = `${x}px`;
            newRipple.style.top = `${y}px`;
            button.appendChild(newRipple);

            newRipple.addEventListener('animationend', () => {
                newRipple.remove();
            });
        });
    });

    // ===== Mouse Glow Trail Effect =====
    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        document.body.appendChild(particle);

        const colors = ['var(--neon-fire)', 'var(--neon-gold-subtle)', 'rgba(255,100,100,0.5)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = randomColor;
        particle.style.boxShadow = `0 0 0.625rem ${randomColor}, 0 0 1.25rem ${randomColor}`;
        particle.style.transform = `scale(${Math.random() * (1 - 0.5) + 0.5})`;

        particle.animate([
            { opacity: 1, transform: `scale(${Math.random() * (1 - 0.5) + 0.5})` },
            { opacity: 0, transform: `scale(0)` }
        ], {
            duration: 800 + Math.random() * 500,
            easing: 'ease-out',
            fill: 'forwards'
        }).onfinish = () => particle.remove();
    };

    document.addEventListener('mousemove', (e) => {
        createParticle(e.clientX + window.scrollX, e.clientY + window.scrollY);
    });

    // ===== Smooth Scroll for Navigation =====
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== System Uptime Display (Focus Duration) =====
    const systemUptimeElement = document.getElementById('system-uptime');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function updateUptime() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        const format = (num) => String(num).padStart(2, '0');
        if (systemUptimeElement) {
            systemUptimeElement.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
        }
    }
    setInterval(updateUptime, 1000);

    // ===== Current Time Display =====
    const currentTimeElement = document.getElementById('current-time');
    function updateCurrentTime() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        if (currentTimeElement) {
            currentTimeElement.textContent = now.toLocaleTimeString('en-US', options);
        }
    }
    setInterval(updateCurrentTime, 1000);
    updateCurrentTime();

    // ===== Typewriter Effect for Hero Main Title =====
    const heroMainTitleElement = document.getElementById('hero-main-title');
    const originalHeroMainTitle = heroMainTitleElement ? heroMainTitleElement.textContent : '';
    if (heroMainTitleElement) {
        heroMainTitleElement.textContent = '';
        let i = 0;
        const speed = 70;

        function typeWriter() {
            if (i < originalHeroMainTitle.length) {
                heroMainTitleElement.textContent += originalHeroMainTitle.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // ===== Typewriter Effect for Hero Intro Text =====
    const heroIntroTextElement = document.getElementById('hero-intro-text');
    const originalHeroIntroText = heroIntroTextElement ? heroIntroTextElement.textContent : '';
    if (heroIntroTextElement) {
        heroIntroTextElement.textContent = '';
        let j = 0;
        const introSpeed = 50;

        function typeWriterIntro() {
            if (j < originalHeroIntroText.length) {
                heroIntroTextElement.textContent += originalHeroIntroText.charAt(j);
                j++;
                setTimeout(typeWriterIntro, introSpeed);
            }
        }
        setTimeout(typeWriterIntro, 100);
    }
});

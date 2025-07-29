function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up, .slide-in-right, .slide-in-left, .fade-in-right');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.style.animationPlayState = 'running';
        } else {
            element.style.animationPlayState = 'paused';
            element.style.opacity = 0;
            if (element.classList.contains('slide-in-right')) {
                element.style.transform = 'translateX(50px)';
            } else if (element.classList.contains('slide-in-left')) {
                element.style.transform = 'translateX(-50px)';
            } else if (element.classList.contains('fade-in-right')) {
                element.style.transform = 'translateX(30px)';
            } else {
                element.style.transform = 'translateY(30px)';
            }
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

const showLoginBtn = document.getElementById('showLogin');
const showRegisterBtn = document.getElementById('showRegister');
const showRegisterFromLoginLink = document.getElementById('showRegisterFromLogin');
const showLoginFromRegisterLink = document.getElementById('showLoginFromRegister');

const closeButtons = document.querySelectorAll('.modal .close-button');


function openModal(modalElement) {
    modalElement.style.display = 'flex'; 
    setTimeout(() => { 
        modalElement.classList.add('show');
        document.body.style.overflow = 'hidden'; 
    }, 50);
}


function closeModal(modalElement) {
    modalElement.classList.remove('show');
    setTimeout(() => { 
        modalElement.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 500); 
}



if (showLoginBtn) {
    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal); 
        openModal(loginModal);
    });
}

if (showRegisterBtn) {
    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal); 
        openModal(registerModal);
    });
}

if (showRegisterFromLoginLink) {
    showRegisterFromLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        setTimeout(() => {
            openModal(registerModal);
        }, 300); 
    });
}

if (showLoginFromRegisterLink) {
    showLoginFromRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        setTimeout(() => {
            openModal(loginModal);
        }, 300);
    });
}


closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        closeModal(e.target.closest('.modal')); 
    });
});


window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal(loginModal);
    }
    if (e.target === registerModal) {
        closeModal(registerModal);
    }
});


document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (form.closest('#loginModal')) {
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;

            if (email === "test@test.com" && password === "123") {
                alert('تسجيل الدخول بنجاح! جاري التوجيه للوحة التحكم.');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                alert('خطأ في البريد الإلكتروني أو كلمة المرور. الرجاء المحاولة مرة أخرى.');
            }
        } else if (form.closest('#registerModal')) {
            alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
            closeModal(registerModal); 
            openModal(loginModal); 
        }
    });
});

document.querySelectorAll('.logout-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('جاري تسجيل الخروج...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});


const interactiveGrid = document.getElementById('interactive-grid');

if (interactiveGrid) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    interactiveGrid.appendChild(canvas);

    let width = interactiveGrid.offsetWidth;
    let height = interactiveGrid.offsetHeight;
    let particles = [];
    let mouse = { x: undefined, y: undefined };
    const maxDistance = 150;
    const particleCount = (width * height) / 9000; 


    window.addEventListener('resize', () => {
        width = interactiveGrid.offsetWidth;
        height = interactiveGrid.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    });


    interactiveGrid.addEventListener('mousemove', (e) => {
        mouse.x = e.x - interactiveGrid.getBoundingClientRect().left;
        mouse.y = e.y - interactiveGrid.getBoundingClientRect().top;
    });


    interactiveGrid.addEventListener('mouseleave', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });


    // ... الكود اللي قبل الـ Particle class ...

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // *** ركز هنا يا أبو السيد، الـ update() method دي هي اللي هنحط جواها الكود الجديد بالظبط ***
    update() {
        // جزء التحقق من حدود الشاشة (هيفضل زي ما هو)
        if (this.x + this.size > width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }

        // *** الكود الجديد اللي بيدي إحساس الـ AI هيتحط هنا بالظبط يا قلبي ***
        if (mouse.x !== undefined && mouse.y !== undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // لو الماوس قريب (داخل دائرة الـ 150 بكسل حوالين الجسيم)
            if (distance < maxDistance) { 
                let attractionForce = (maxDistance - distance) / maxDistance * 0.05; // قوة جذب بسيطة
                let repelForce = (distance < 50) ? (50 - distance) / 50 * 0.5 : 0; // قوة تنافر قوية لو قريب أوي

                this.x += dx * attractionForce; 
                this.y += dy * attractionForce;

                if (repelForce > 0) {
                    this.x -= dx * repelForce;
                    this.y -= dy * repelForce;
                }

                this.directionX *= 0.98; 
                this.directionY *= 0.98;
            } else { 
                // لو الماوس بعيد، يرجع لحركته الطبيعية
                this.x += this.directionX;
                this.y += this.directionY;
            }
        } else {
            // لو الماوس مش موجود، يرجع لحركته الطبيعية
            this.x += this.directionX;
            this.y += this.directionY;
        }
        // *** لحد هنا نهاية الكود الجديد اللي بيدي إحساس الـ AI ***

        this.draw(); // دي لازم تكون آخر حاجة في الـ update() method
    }
}

// ... باقي الكود زي ما هو ...


    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            let size = (Math.random() * 3) + 1;
            let x = (Math.random() * ((width - size * 2) - size * 2) + size * 2);
            let y = (Math.random() * ((height - size * 2) - size * 2) + size * 2);
            let directionX = (Math.random() * 0.8) - 0.4; 
            let directionY = (Math.random() * 0.8) - 0.4; 
            let color = 'rgba(255, 255, 255, 0.6)'; 
            particles.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }


    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + 
                                ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                if (distance < (maxDistance * maxDistance)) {
                    opacityValue = 1 - (distance / (maxDistance * maxDistance));
                    ctx.strokeStyle = `rgba(255, 16, 16, ${opacityValue})`; 
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }


    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        connectParticles(); 
    }

    canvas.width = width;
    canvas.height = height;
    initParticles();
    animate();

} else {
    console.warn("Element with id 'interactive-grid' not found. Particle animation will not initialize.");
}

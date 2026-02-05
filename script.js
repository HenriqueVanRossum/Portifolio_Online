// Smooth reveal animations on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animationPlayState = 'running';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.project-card');
	cards.forEach((card) => {
		card.style.animationPlayState = 'paused';
		observer.observe(card);
	});
});

// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
	const cards = document.querySelectorAll('.project-card');
	const mouseX = e.clientX / window.innerWidth;
	const mouseY = e.clientY / window.innerHeight;

	cards.forEach((card, index) => {
		const speed = (index + 1) * 0.5;
		const x = (mouseX - 0.5) * speed;
		const y = (mouseY - 0.5) * speed;

		card.style.transform = `translate(${x}px, ${y}px)`;
	});
});

// Reset transform on hover
document.querySelectorAll('.project-card').forEach((card) => {
	card.addEventListener('mouseenter', function () {
		this.style.transform = 'translateY(-8px)';
	});

	card.addEventListener('mouseleave', function () {
		this.style.transform = '';
	});
});

// Add ripple effect on card click
document.querySelectorAll('.card-link').forEach((link) => {
	link.addEventListener('click', function (e) {
		const ripple = document.createElement('span');
		const rect = this.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

		this.appendChild(ripple);

		setTimeout(() => ripple.remove(), 600);
	});
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animate numbers on scroll
function animateNumber(element) {
	const target = parseInt(element.textContent);
	const duration = 1000;
	const step = target / (duration / 16);
	let current = 0;

	const timer = setInterval(() => {
		current += step;
		if (current >= target) {
			current = target;
			clearInterval(timer);
		}
		element.textContent = Math.floor(current).toString().padStart(2, '0');
	}, 16);
}

// Observe card numbers
const numberObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const number = entry.target.querySelector('.card-number');
				if (number && !number.dataset.animated) {
					number.dataset.animated = 'true';
					animateNumber(number);
				}
			}
		});
	},
	{threshold: 0.5},
);

document.querySelectorAll('.project-card').forEach((card) => {
	numberObserver.observe(card);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
	konamiCode.push(e.key);
	konamiCode = konamiCode.slice(-konamiSequence.length);

	if (konamiCode.join(',') === konamiSequence.join(',')) {
		document.body.style.animation = 'rainbow 2s infinite';
		setTimeout(() => {
			document.body.style.animation = '';
		}, 5000);
	}
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Log a message in console
console.log('%cOlá, curioso(a)! ', 'font-size: 20px; font-weight: bold; color: #ff3366;');
console.log('%cSe você está vendo isso, provavelmente gosta de código. Vamos conversar!', 'font-size: 14px; color: #a0a0a0;');

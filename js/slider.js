const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');
const auto = true;
const interval = 5000;
let initSlide;

next.addEventListener('click', function(){
	nextSlide();
	clearInterval(initSlide);
	initSlide = setInterval(nextSlide, interval); //to reset timeout
});

prev.addEventListener('click', function(){
	prevSlide();
	clearInterval(initSlide);
	initSlide = setInterval(nextSlide, interval); //to reset timeout
});

const nextSlide = () => {
	let current = document.querySelector('.current');
	current.classList.remove('current');

	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	}
	else{
		slides[0].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
	let current = document.querySelector('.current');
	current.classList.remove('current');

	if (current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	}
	else{
		slides[slides.length - 1].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
}

// Autoplay
if (auto) {
	initSlide = setInterval(nextSlide, interval);
}
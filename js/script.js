// Burger menu

const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.body;

function topFunction() {
	body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

if (burger && menu) {
	burger.addEventListener('click', () => {
		topFunction();
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}

// Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter');

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}

// Popular slider

const swiper = new Swiper('.swiper', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		992: {
			slidesPerView: 3,
		},
		662: {
			slidesPerView: 2,
		}
	}
});
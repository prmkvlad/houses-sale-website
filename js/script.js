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

/*=================smooth scroll=================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})

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

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
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

// Reviews slider

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	}
});

// Gallery

const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
	let delay = 5000; // начальное значение задержки

	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: delay,
			},
			effect: 'fade',
		});

		// увеличиваем задержку для следующего слайдера
		delay += 300; // увеличиваем задержку на 0.3 секунды
	});
}
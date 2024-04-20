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

	// Закрытие всех выпадающих списков при клике вне фильтра или на кнопку
	document.addEventListener('click', event => {
		if (!event.target.closest('.filter') || event.target.closest('.filter__btn')) {
			closeAllDropdowns();
		}
	});

	items.forEach(item => {
		item.addEventListener('click', event => {
			const dropdown = item.querySelector('.block-filter__dropdown');
			const icon = item.querySelector('.block-filter__icon');
			const isActive = dropdown.classList.contains('_active');

			// Проверка, был ли клик на элементе списка
			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;

				// Закрытие выпадающего списка после выбора элемента
				dropdown.classList.remove('_active');
				icon.classList.remove('_active');
			} else {
				// Закрытие всех других выпадающих списков при открытии текущего
				closeAllDropdowns();

				// Переключение классов для текущего элемента
				if (!isActive) {
					dropdown.classList.toggle('_active');
					icon.classList.toggle('_active');
				}
			}
		});
	});

	function closeAllDropdowns() {
		items.forEach(item => {
			item.querySelector('.block-filter__dropdown').classList.remove('_active');
			item.querySelector('.block-filter__icon').classList.remove('_active');
		});
	}
}

// Popular slider and showAll button

document.addEventListener('DOMContentLoaded', () => {
	const popularSection = document.getElementById('popular');
	const showAllButton = document.getElementById('showAll');
	const sliderContainer = document.querySelector('.popular__slider');
	const sliderButtonsContainer = document.querySelector('.slider-buttons');
	let isSliderShown = true; // Flag to track the current state
	let popularSlider = createSwiper(); // Creating the initial Swiper instance

	if (showAllButton) {
		showAllButton.addEventListener('click', () => {
			if (isSliderShown) {
				// Destroying the Swiper
				popularSlider.destroy(true, true);

				// Hiding navigation buttons
				sliderButtonsContainer.style.display = 'none';

				// Applying the grid mode class
				sliderContainer.classList.add('_grid-mode');

				// Changing the button text
				showAllButton.textContent = 'Hide all';

				// Updating the state flag
				isSliderShown = false;
			} else {
				// Creating a new Swiper instance
				popularSlider = createSwiper();

				// Showing navigation buttons
				sliderButtonsContainer.style.display = 'flex';

				// Removing the grid mode class
				sliderContainer.classList.remove('_grid-mode');

				// Changing the button text
				showAllButton.textContent = 'View all';

				// Updating the state flag
				isSliderShown = true;

				// Goto slider
				popularSection.scrollIntoView();
			}
		});
	}
});

function createSwiper() {
	return new Swiper('.popular-slider', {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: '.popular-slider-next',
			prevEl: '.popular-slider-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			662: {
				slidesPerView: 2,
			}
		}
	});
}

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
	let delay = 5000; // initial delay value

	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: delay,
			},
			effect: 'fade',
		});

		delay += 300; // increase delay by 0.3 seconds
	});
}
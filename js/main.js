// new Swiper('.swiper-container', {
// 	loop: true,
// 	navigation: {
// 		nextEl: '.arrow',
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 20
// 		},
// 		541: {
// 			slidesPerView: 2,
// 			spaceBetween: 40
// 		}
// 	}
// });

// const menuButton = document.querySelector('.menu-button');
// const menu = document.querySelector('.header');
// menuButton.addEventListener('click', function () {
// 	menuButton.classList.toggle('menu-button-active');
// 	menu.classList.toggle('header-active');
// });

const getElement = (tagName, classNames, attributes) => {
	const element = document.createElement(tagName);
	if (classNames) {
		element.classList.add(classNames);
	}
	if (attributes) {
		for (const attribute in attributes) {
			element[attribute] = attributes[attribute];
		}
	}
	return element;
}

const createLogo = (logoAttributes) => {
	const logo = getElement('img', 'header__logo', logoAttributes);
	return logo;
}

const createNav = (params) => {
	const nav = getElement('nav', 'nav');
	const navList = getElement('ul', 'nav__list');
	nav.append(navList);
	const navItems = params.map(item => {
		const navItem = getElement('li', 'nav__item');
		const navLink = getElement('a', 'nav__link', {
			href: item.link,
			target: '_blank',
			textContent: item.content,
		});
		navItem.append(navLink);
		return navItem;
	});
	navList.append(...navItems);
	return nav;
}

const createSocials = (params) => {
	const social = getElement('ul', 'social');
	const socials = params.map(item => {
		const socialItem = getElement('li', 'social__item');
		const socialLink = getElement('a', 'social__link', {
			href: item.link,
			target: '_blank'
		});
		socialItem.append(socialLink);
		const socialIcon = getElement('img', 'social__icon', {
			src: item.src,
			alt: item.alt
		});
		socialLink.append(socialIcon);
		return socialItem;
	});
	social.append(...socials);
	return social;
}

const createHeader = (params) => {
	const header = getElement('header', 'header');
	if (params.logo) {
		header.append(createLogo(params.logo));
	}
	if (params.nav) {
		header.append(createNav(params.nav));
	}
	if (params.social) {
		header.append(createSocials(params.social));
	}
	return header;
}

const movieConstructor = (selector, options) => {
	const app = document.querySelector(selector);
	app.classList.add('body-app');
	if (options.title) {
		document.title = options.title;
	}
	if (options.header) {
		app.append(createHeader(options.header));
	}
}

movieConstructor('#app', {
	title: 'Ведьмак - официальный сайт сериала',
	header: {
		logo: {
			src: 'image/witcher/logo.png',
			alt: 'Ведьмак'
		},
		nav: [
			{
				content: 'Описание',
				link: 'https:/ya.ru',
			},
			{
				content: 'Трейлер',
				link: 'https:/ya.ru',
			},
			{
				content: 'Отзывы',
				link: 'https:/ya.ru',
			},
		],
		social: [
			{
				alt: 'Twitter',
				src: 'image/social/twitter.svg',
				link: 'https://twitter.com',
			},
			{
				alt: 'Instagram',
				src: 'image/social/instagram.svg',
				link: 'https://instagram.com',
			},
			{
				alt: 'Facebook',
				src: 'image/social/facebook.svg',
				link: 'https://facebook.com',
			},
		]
	}
});
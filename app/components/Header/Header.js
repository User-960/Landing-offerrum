class Header {
	handlerOpenMobileMenu() {
		const ROOT_BTN_MOBILE = document.querySelector('.header__btn-mobile')
		const ROOT_BTN_MENU_MOBILE = document.querySelector('.menu__mobile')
		const ROOT_LOGO = document.querySelector('.header__logo')

		if (ROOT_BTN_MOBILE.classList.contains('opened')) {
			ROOT_BTN_MOBILE.classList.remove('opened')
			ROOT_BTN_MENU_MOBILE.classList.remove('opened')
			ROOT_LOGO.classList.remove('opened')
		} else {
			ROOT_BTN_MOBILE.classList.add('opened')
			ROOT_BTN_MENU_MOBILE.classList.add('opened')
			ROOT_LOGO.classList.add('opened')
		}
	}

	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <a href="#">
            <img class="header__logo" src="../../images/header/logo.svg" alt="logo"/>
          </a>

          <menu class="menu">
            <ul class="menu__list">
              <li class="menu__list-item">
                <a class="menu__list-link" href="#top">Главная</a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#benefits">Что даст обучение</a>
              </li>
            </ul>

            <button class="menu__btn">Личный кабинет</button>
          </menu>

          <menu class="menu__mobile">
            <img class="menu__mobile-logo" src="../../images/header/logo.svg" alt="logo"/>
            <ul class="menu__list menu__mobile-list">
              <li class="menu__list-item">
                <a class="menu__list-link" href="#top">Главная</a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#benefits">Что даст обучение</a>
              </li>
            </ul>

            <button class="menu__btn">Личный кабинет</button>
          </menu>

          <button class="header__btn-mobile" onclick='headerPage.handlerOpenMobileMenu()'></button>
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

const headerPage = new Header()

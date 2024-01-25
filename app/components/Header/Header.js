class Header {
	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <img class="logo__img" src="../../images/logo.svg" alt="logo"/>

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
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

const headerPage = new Header()

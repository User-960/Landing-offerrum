class Form {
	handlerClearForm() {
		ROOT_FORM.innerHTML = ''
	}

	handlerOpenForm() {
		form.render()
	}

	handlerClearError() {
		ROOT_ERROR.innerHTML = ''
	}

	handlerSubmit(event) {
		event.preventDefault()
		const ROOT_INPUT = document.querySelector('.form__input')
		const ROOT_ERROR = document.querySelector('.form__error')
		const ROOT_BTN = document.querySelector('.form__btn')

		const toggleErrorDisplay = () => {
			if (ROOT_ERROR.style.display === 'none' && !ROOT_INPUT.value) {
				ROOT_ERROR.style.display = 'block'
				ROOT_BTN.classList.add('btnNonActive')
			}

			if (
				ROOT_ERROR.style.display === 'block' &&
				ROOT_INPUT.value &&
				ROOT_INPUT.value.includes('@')
			) {
				ROOT_ERROR.style.display = 'none'
				ROOT_BTN.classList.remove('btnNonActive')
			}
		}

		if (!ROOT_INPUT.value) {
			ROOT_INPUT.addEventListener('input', toggleErrorDisplay)
		}

		if (ROOT_INPUT.value && ROOT_INPUT.value.includes('@')) {
			ROOT_ERROR.style.display = 'none'
			ROOT_INPUT.removeEventListener('input', toggleErrorDisplay)

			form.handlerClearForm()
			alert(`Мы выслали письмо на email: ${ROOT_INPUT.value}`)
		}

		if (!ROOT_INPUT.value && !ROOT_INPUT.value.includes('@')) {
			toggleErrorDisplay()
		}

		if (ROOT_INPUT.value && !ROOT_INPUT.value.includes('@')) {
			toggleErrorDisplay()
		}
	}

	render() {
		const html = `
    <div class="form__inner" onclick="form.handlerClearForm();"></div>
      <form class="form__box" onclick="form.handlerSubmit(event);">
        <div class="form__close" onclick="form.handlerClearForm();"></div>
        <h4 class="form__title">Начни прямо сейчас!</h4>
        <p class="form__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
        <input class="form__input" type="email" placeholder="Ваш email" required />
        <p class="form__error" style="display:none;">Поле ввода e-mail должно включать символ "@"</p>
        <button class="form__btn shadow">Оплатить</button>
      </form>
    `

		ROOT_FORM.innerHTML = html
	}
}

const form = new Form()
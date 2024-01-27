function render() {
	headerPage.render()
	benefitsList.render()
}

spinnerPage.render()

ROOT_TOP_BTN.addEventListener('click', () => {
	form.handlerOpenForm()
})

setTimeout(() => {
	spinnerPage.handlerClear()
	render()
}, 2000)

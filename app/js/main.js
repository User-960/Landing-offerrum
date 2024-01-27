function render() {
	headerPage.render()
	benefitsList.render()
}

ROOT_TOP_BTN.addEventListener('click', () => {
	form.handlerOpenForm()
})

render()

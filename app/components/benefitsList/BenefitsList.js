class BenefitsList {
	render() {
		let htmlBenefitsList = ''

		BENEFITS_ARRAY.forEach(({ id, icon, text }) => {
			htmlBenefitsList += `
        <li class="benefits__item">
            <img class="benefits__item-img" src="${icon}" alt="benefit ${id}"/>
            <p class="benefits__item-text">
              ${text}
            </p>
            <div class="benefits__item-box"></div>
        </li>
    `
		})

		const html = `
      <ul class="benefits__list">
        ${htmlBenefitsList}
      </ul>
    `

		ROOT_BENEFITS.innerHTML = html
	}
}

const benefitsList = new BenefitsList()

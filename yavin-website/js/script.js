function userScroll() {
	const navbar = document.querySelector('.navbar')
	const toTopBtn = document.getElementById('to-top')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('navbar-sticky')
			toTopBtn.classList.add('show-btn')
		} else {
			navbar.classList.remove('navbar-sticky')
			toTopBtn.classList.remove('show-btn')
		}
	})
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}

function incrementStats() {
	const stats = document.querySelectorAll('#stat-number')

	stats.forEach(item => {
		item.textContent = 0

		const updateCounter = () => {
			const target = Number(item.dataset.number)
			const increment = target / 200
			let updatedNumber = Number(item.textContent)

			if (updatedNumber < target) {
				item.textContent = Math.ceil(updatedNumber + increment)
				setTimeout(updateCounter, 5)
			} else {
				item.textContent = target
			}
		}

		updateCounter()
	})
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll)
document.addEventListener('DOMContentLoaded', incrementStats)
document.getElementById('to-top').addEventListener('click', scrollToTop)

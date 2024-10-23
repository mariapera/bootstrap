const navbar = document.querySelector('.navbar')

function scrollUser() {
	window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
	navbar.classList.add('bg-dark')
	navbar.classList.add('navbar-sticky')
} else {
	navbar.classList.remove('bg-dark')
	navbar.classList.remove('navbar-sticky')
}
	})
	
}

document.addEventListener('DOMContentLoaded', scrollUser)

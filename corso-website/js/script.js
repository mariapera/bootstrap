function scrollUser() {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('sticky-top')
        } else {
             navbar.classList.remove('sticky-top')
        }
    })

}

// Event Listener
document.addEventListener('DOMContentLoaded', scrollUser)
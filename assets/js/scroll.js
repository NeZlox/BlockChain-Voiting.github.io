const header = document.querySelector('.header')
document.addEventListener('click', (item) => {
    if (item.target.classList.contains('header_nav--link')) {
        const dataAttribute = item.target.getAttribute('data-id')
        const idItem = document.getElementById(dataAttribute)
        window.scrollTo({
            top: idItem.offsetTop-header.clientHeight,
            behavior: "smooth",
        })
    }
})

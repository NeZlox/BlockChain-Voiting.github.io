let header = document.querySelector('.header')
document.addEventListener('click', (item) => {
    if (item.target.classList.contains('header_nav--link')) {
        let dataAttribute = item.target.getAttribute('data-id')
        let idItem = document.getElementById(dataAttribute)
        window.scrollTo({
            top: idItem.offsetTop-header.clientHeight,
            behavior: "smooth",
        })
    }
})

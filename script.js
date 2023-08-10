window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function scrollTrigger(selector) {
    let element = document.querySelectorAll(selector)
    element = Array.from(element)
    element.forEach(el => {
        addObserver(el)
    })
}
function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        })
    })
    observer.observe(el)
}
scrollTrigger('.section-img')
scrollTrigger('.text-animation')
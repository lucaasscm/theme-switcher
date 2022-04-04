const switcher = document.querySelector('.switcher')
const body = document.querySelector('body')

switcher.addEventListener('click', () => {
    /*if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
    } else {
        body.classList.add('dark')
    }*/
    body.classList.toggle('dark')
    switcher.classList.toggle('switcher-transition')
})
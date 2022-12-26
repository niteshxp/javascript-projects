const images = document.querySelectorAll("img")
images.forEach((image => {
    image.addEventListener('click', () => {
        removeActiveClasses()
        image.classList.add('active')
    })
}))

function removeActiveClasses(){
    images.forEach(image =>{
        image.classList.remove('active')
    })
}
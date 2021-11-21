let index = 0
setInterval(() => {
    let box = document.querySelector(`[data-index='${index}']`)
    box.classList.add('bg-black')
    index += 1
}, 1);
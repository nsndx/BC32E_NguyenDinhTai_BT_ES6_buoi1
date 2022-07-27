const text = document.querySelector('.heading').innerHTML
const arrayText = [...text]
const arrayTextRender = arrayText.filter((text) => text !== ' ')

const render = () => {
    let html = ''
    arrayTextRender.forEach(text => html += `<span>${text}</span>`)
    document.querySelector('.heading').innerHTML = html
}
render()
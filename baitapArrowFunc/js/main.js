const dom = (selector) => document.querySelector(selector)
const doms = (selector) => document.querySelectorAll(selector)

const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']
const loadButton = () => {
    let html = `<button class="color-button ${colorList[0]} active"></button>`
    for (let i = 1; i < colorList.length; i++) {
        html += `<button class="color-button ${colorList[i]}"></button>`
    }
    dom('#colorContainer').innerHTML = html
}
loadButton()

const buttonList = doms('#colorContainer button')
buttonList.forEach(buttonList_i => {
    buttonList_i.onclick = () => {
        const classColor = buttonList_i.classList[1]
        buttonList.forEach(buttonList_ii => buttonList_ii.classList.remove('active'))
        buttonList_i.classList.add('active')
        dom('#house').className = `house ${classColor}`
    }
});


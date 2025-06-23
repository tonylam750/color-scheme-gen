
const getSchemeBtn = document.getElementById("get-scheme-btn")
const colorPicker = document.getElementById("seed-picker")
const getScheme = document.getElementById("colour-scheme")

let modesArr = ["monochrome", "monochrome-dark", "monochrome-light",
                "analogic", "complement", "analogic-complement", "triad", "quad"]

let options = ""
modesArr.forEach(scheme =>{
    options+= `<option value=${scheme}>${scheme}</option>`
})

document.getElementById("colour-scheme").innerHTML = options

function renderScheme(){
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.replace('#', '')}&mode=${getScheme.value}&count=5`)
    .then(response => response.json())
    .then(data => {
        const schemeColors = data.colors
        console.log(data.colors)
        let displayColoursSchemes = ""
        let displaySchemeHex = ""
        schemeColors.forEach((colour) =>{
            displayColoursSchemes+= `<div class="colour" style="background:${colour.hex.value}"></div>`
            displaySchemeHex += `<div>${colour.hex.value}</div>`
        })
        document.getElementById("palette").innerHTML = displayColoursSchemes
        document.getElementById("footer").innerHTML = displaySchemeHex
     })
}

getSchemeBtn.addEventListener("click", renderScheme)

window.addEventListener("DOMContentLoaded",renderScheme)



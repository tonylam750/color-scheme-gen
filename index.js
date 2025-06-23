
const getSchemeBtn = document.getElementById("get-scheme-btn")
const colorPicker = document.getElementById("color-picker")
const getScheme = document.getElementById("color-scheme")

let modesArr = ["monochrome", "monochrome-dark", "monochrome-light",
                "analogic", "complement", "analogic-complement", "triad", "quad"]

let options = ""
modesArr.forEach(scheme =>{
    options+= `<option value=${scheme}>${scheme}</option>`
})
document.getElementById("color-scheme").innerHTML = options

function copyToClipBoard(){
        document.querySelectorAll(".copy-hex").forEach(span =>{
            span.addEventListener("click", function(){
                navigator.clipboard.writeText(this.getAttribute("data-hex"))
                .then(() =>{
                    this.style.background ="rgba(24, 148, 197, 0.5)"
                    setTimeout(() =>{
                        this.style.background = ""
                    }, 300)

                })
            })
        })
    }

function renderScheme(){
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.replace('#', '')}&mode=${getScheme.value}&count=5`)
    .then(response => response.json())
    .then(data => {
        const schemeColors = data.colors
        console.log(data.colors)
        let displayColoursSchemes = ""
        let displaySchemeHex = ""
        schemeColors.forEach((color) =>{
            displayColoursSchemes+= `<div class="color" style="background:${color.hex.value}"></div>`
            displaySchemeHex += `
            <div>
                <span class="copy-hex" data-hex="${color.hex.value}" style="cursor:pointer">${color.hex.value}</span>
            </div>`
        })
        document.getElementById("palette").innerHTML = displayColoursSchemes
        document.getElementById("footer").innerHTML = displaySchemeHex
        copyToClipBoard()
    })
}

getSchemeBtn.addEventListener("click", renderScheme)

window.addEventListener("DOMContentLoaded",renderScheme)




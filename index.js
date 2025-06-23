
const getSchemeBtn = document.getElementById()

let modesArr = ["monochrome", "monochrome-dark", "monochrome-light",
                "analogic", "complement", "analogic-complement", "triad", "quad"]

let options = ""
modesArr.forEach(scheme =>{
    options+= `<option value=${scheme}>${scheme}</option>`
})

document.getElementById("colour-scheme").innerHTML = options


colorPicker = document.getElementById("seed-picker")


colorPicker,addEventListener("input", ()=>{
    console.log(colorPicker.value)
})


fetch("https://www.thecolorapi.com/scheme?mode=monochrome")
    .then(response => response.json())
    .then(data => console.log(data))
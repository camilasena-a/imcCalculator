const form = window.document.querySelector("form")
let inputWeight = window.document.querySelector("#weight")
let inputHeight = window.document.querySelector("#height")
let submitButton = window.document.querySelector("#submit-button")
let modalButton = window.document.querySelector("#close-button")
let modalBoard = window.document.querySelector(".modal-wrapper")
let textResult = window.document.querySelector("#textResult")


function addModal() {
    modalBoard.classList.toggle("open")
}


submitButton.addEventListener('click', addModal())


// function IMCCalculator(weight, height) {
//     let imc = (weight/((height/100)**2)).toFixed(2);
//     return imc;
// }



// form.onsubmit = (event) => {
//     event.preventDefault()
//     const weight = inputWeight.value;
//     const height = inputHeight.value;

//     const result = IMCCalculator(weight,height)
//     addModal(result)
// }


// function closeModal() {
//     modalBoard.classList.remove("open")
// }
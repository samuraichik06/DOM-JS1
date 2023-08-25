let idPerson = document.getElementById('idPerson')
let seymur = document.getElementById("seymur")
let what = document.getElementById("what")
let changeIt = document.getElementById("changeIt")
let buttonChangeSecond = document.getElementById("buttonChangeSecond")
var Debt1 = document.getElementById("Debt1")
let inputChangeDebt = document.getElementById("inputChangeDebt")
let inputChangeWhat = document.getElementById("inputChangeWhat")
let debt11
let debt12



inputChangeDebt.addEventListener('input' , (e) =>{
    debt11 = e.target.value
})
inputChangeWhat.addEventListener('input' , (e) =>{
    debt12 = e.target.value
})
buttonChangeSecond.addEventListener('click' , func)
function func() {
    Debt1.innerHTML = debt11
}
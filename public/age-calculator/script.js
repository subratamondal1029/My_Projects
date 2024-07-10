const dayField = document.getElementById('day')
const monthField = document.getElementById('month')
const yearField = document.getElementById('year')

const calcBtn = document.getElementById('calcAgeBtn')
let haveError = true
calcBtn.addEventListener('click', () =>{
    const day = Number(dayField.value.trim())
    const month = Number(monthField.value.trim()) -1
    const year = Number(yearField.value.trim())

    const lastDayOfMonth = new Date(year, month+1, 0).getDate()

    const inputField = document.querySelectorAll('.inputField')

    inputField.forEach((field) =>{
        if (!field.value.trim()) {
            onErorr(field, "This field is required")
        }else if(day > lastDayOfMonth){
            onErorr(dayField, "Must be a valid day")
        }else if(month > 11 || month < 0){
            onErorr(monthField, "Must be a valid month")
        }else if(year > new Date().getFullYear()){
            onErorr(yearField, "Must be a in past")
        }else {
            removeError(field)
            haveError = false
        }
    })

    if (!haveError) {
        const age = calculateAge(year, month, day)
        printAge(age)
    }
})


function calculateAge(year, month, day){
    const today = new Date()
    const dateOfBirth = new Date(year, month, day)

   
    let ageInYear = today.getFullYear() - dateOfBirth.getFullYear()
    let ageInMonth = today.getMonth() - dateOfBirth.getMonth()
    if (ageInMonth < 0 || (ageInMonth === 0 && today.getDate() < dateOfBirth.getDate())) {
        ageInYear--
        ageInMonth += 12
    }

    let ageInDay = today.getDate() - dateOfBirth.getDate()
    if (ageInDay < 0) {
        ageInMonth--
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
        ageInDay += lastDayOfMonth
    }

    return [ageInYear, ageInMonth, ageInDay]
}

function onErorr(elm, massage){
    const parent = elm.parentElement
    const errorField = parent.querySelector('.error')
    errorField.textContent = massage

    parent.classList.add('giveErr')
    haveError = true
}
function removeError(elm){
    const parent = elm.parentElement
    parent.classList.remove('giveErr')
}

async function printAge(age){
    document.getElementById('resultContainer').classList.add('complete')
    const resultYear = document.getElementById('yearResult')
    const resultMonth = document.getElementById('monthResult')
    const resultDay = document.getElementById('dayResult')

    const resultFields = [resultYear, resultMonth, resultDay]
    let nextIn = await printing(0)
    nextIn = await printing(nextIn)
    nextIn = await printing(nextIn)
   


   async function printing(i){
       return new Promise((res, rej) =>{
           let number = 0
           const printingInterVal = setInterval(()=>{
               if (age[i] >= number) {
                   resultFields[i].textContent = number
                   number++
               }else{
                   clearInterval(printingInterVal)
                   res(i+1)
               }
           }, 20)
       })
   }
}

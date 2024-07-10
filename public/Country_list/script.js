const themeChangerBtn = document.querySelector('#themeContainer ion-icon')
themeChangerBtn.addEventListener('click', () =>{
  if (themeChangerBtn.name === "moon-outline") {
    localStorage.setItem('theme', "dark")
    changeTheme()
  }else{
    localStorage.setItem('theme', "light")
    changeTheme()
  }
})

// const list = [
//   {
//     "name": "India",
//     "topLevelDomain": [".in"],
//     "alpha2Code": "IN",
//     "alpha3Code": "IND",
//     "callingCodes": ["91"],
//     "capital": "New Delhi",
//     "altSpellings": ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
//     "subregion": "Southern Asia",
//     "region": "Asia",
//     "population": 1380004385,
//     "latlng": [20, 77],
//     "demonym": "Indian",
//     "area": 3287590,
//     "gini": 35.7,
//     "timezones": ["UTC+05:30"],
//     "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
//     "nativeName": "भारत",
//     "numericCode": "356",
//     "flags": {
//       "svg": "https://flagcdn.com/in.svg",
//       "png": "https://flagcdn.com/w320/in.png"
//     },
//     "currencies": [
//       {
//         "code": "INR",
//         "name": "Indian rupee",
//         "symbol": "₹"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "hi",
//         "iso639_2": "hin",
//         "name": "Hindi",
//         "nativeName": "हिन्दी"
//       },
//       {
//         "iso639_1": "en",
//         "iso639_2": "eng",
//         "name": "English",
//         "nativeName": "English"
//       }
//     ],
//     "translations": {
//       "br": "India",
//       "pt": "Índia",
//       "nl": "India",
//       "hr": "Indija",
//       "fa": "هند",
//       "de": "Indien",
//       "es": "India",
//       "fr": "Inde",
//       "ja": "インド",
//       "it": "India",
//       "hu": "India"
//     },
//     "flag": "https://flagcdn.com/in.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "SAARC",
//         "name": "South Asian Association for Regional Cooperation"
//       }
//     ],
//     "cioc": "IND",
//     "independent": true
//   },
//   {
//     "name": "Indonesia",
//     "topLevelDomain": [".id"],
//     "alpha2Code": "ID",
//     "alpha3Code": "IDN",
//     "callingCodes": ["62"],
//     "capital": "Jakarta",
//     "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"],
//     "subregion": "South-Eastern Asia",
//     "region": "Asia",
//     "population": 273523621,
//     "latlng": [-5, 120],
//     "demonym": "Indonesian",
//     "area": 1904569,
//     "gini": 38.2,
//     "timezones": ["UTC+07:00", "UTC+08:00", "UTC+09:00"],
//     "borders": ["TLS", "MYS", "PNG"],
//     "nativeName": "Indonesia",
//     "numericCode": "360",
//     "flags": {
//       "svg": "https://flagcdn.com/id.svg",
//       "png": "https://flagcdn.com/w320/id.png"
//     },
//     "currencies": [
//       {
//         "code": "IDR",
//         "name": "Indonesian rupiah",
//         "symbol": "Rp"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "id",
//         "iso639_2": "ind",
//         "name": "Indonesian",
//         "nativeName": "Bahasa Indonesia"
//       }
//     ],
//     "translations": {
//       "br": "Indonezia",
//       "pt": "Indonésia",
//       "nl": "Indonesië",
//       "hr": "Indonezija",
//       "fa": "اندونزی",
//       "de": "Indonesien",
//       "es": "Indonesia",
//       "fr": "Indonésie",
//       "ja": "インドネシア",
//       "it": "Indonesia",
//       "hu": "Indonézia"
//     },
//     "flag": "https://flagcdn.com/id.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "ASEAN",
//         "name": "Association of Southeast Asian Nations"
//       }
//     ],
//     "cioc": "INA",
//     "independent": true
//   },
//   {
//     "name": "Ivory Coast",
//     "topLevelDomain": [".ci"],
//     "alpha2Code": "CI",
//     "alpha3Code": "CIV",
//     "callingCodes": ["225"],
//     "capital": "Yamoussoukro",
//     "altSpellings": [
//       "CI",
//       "Ivory Coast",
//       "Republic of Côte d'Ivoire",
//       "République de Côte d'Ivoire"
//     ],
//     "subregion": "Western Africa",
//     "region": "Africa",
//     "population": 26378275,
//     "latlng": [8, -5],
//     "demonym": "Ivorian",
//     "area": 322463,
//     "gini": 41.5,
//     "timezones": ["UTC"],
//     "borders": ["BFA", "GHA", "GIN", "LBR", "MLI"],
//     "nativeName": "Côte d'Ivoire",
//     "numericCode": "384",
//     "flags": {
//       "svg": "https://flagcdn.com/ci.svg",
//       "png": "https://flagcdn.com/w320/ci.png"
//     },
//     "currencies": [
//       {
//         "code": "XOF",
//         "name": "West African CFA franc",
//         "symbol": "Fr"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "fr",
//         "iso639_2": "fra",
//         "name": "French",
//         "nativeName": "français"
//       }
//     ],
//     "translations": {
//       "br": "Aod an Olifant",
//       "pt": "Costa do Marfim",
//       "nl": "Ivoorkust",
//       "hr": "Obala Bjelokosti",
//       "fa": "ساحل عاج",
//       "de": "Elfenbeinküste",
//       "es": "Costa de Marfil",
//       "fr": "Côte d'Ivoire",
//       "ja": "コートジボワール",
//       "it": "Costa D'Avorio",
//       "hu": "Elefántcsontpart"
//     },
//     "flag": "https://flagcdn.com/ci.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "AU",
//         "name": "African Union",
//         "otherNames": [
//           "الاتحاد الأفريقي",
//           "Union africaine",
//           "União Africana",
//           "Unión Africana",
//           "Umoja wa Afrika"
//         ]
//       }
//     ],
//     "cioc": "CIV",
//     "independent": true
//   },
//   {
//     "name": "Iran (Islamic Republic of)",
//     "topLevelDomain": [".ir"],
//     "alpha2Code": "IR",
//     "alpha3Code": "IRN",
//     "callingCodes": ["98"],
//     "capital": "Tehran",
//     "altSpellings": [
//       "IR",
//       "Islamic Republic of Iran",
//       "Jomhuri-ye Eslāmi-ye Irān"
//     ],
//     "subregion": "Southern Asia",
//     "region": "Asia",
//     "population": 83992953,
//     "latlng": [32, 53],
//     "demonym": "Iranian",
//     "area": 1648195,
//     "gini": 42,
//     "timezones": ["UTC+03:30"],
//     "borders": ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
//     "nativeName": "ایران",
//     "numericCode": "364",
//     "flags": {
//       "svg": "https://flagcdn.com/ir.svg",
//       "png": "https://flagcdn.com/w320/ir.png"
//     },
//     "currencies": [
//       {
//         "code": "IRR",
//         "name": "Iranian rial",
//         "symbol": "﷼"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "fa",
//         "iso639_2": "fas",
//         "name": "Persian (Farsi)",
//         "nativeName": "فارسی"
//       }
//     ],
//     "translations": {
//       "br": "Iran",
//       "pt": "Irão",
//       "nl": "Iran",
//       "hr": "Iran",
//       "fa": "ایران",
//       "de": "Iran",
//       "es": "Iran",
//       "fr": "Iran",
//       "ja": "イラン・イスラム共和国",
//       "it": "Iran (Islamic Republic of)",
//       "hu": "Irán"
//     },
//     "flag": "https://flagcdn.com/ir.svg",
//     "cioc": "IRI",
//     "independent": true
//   },
//   {
//     "name": "Iraq",
//     "topLevelDomain": [".iq"],
//     "alpha2Code": "IQ",
//     "alpha3Code": "IRQ",
//     "callingCodes": ["964"],
//     "capital": "Baghdad",
//     "altSpellings": ["IQ", "Republic of Iraq", "Jumhūriyyat al-‘Irāq"],
//     "subregion": "Western Asia",
//     "region": "Asia",
//     "population": 40222503,
//     "latlng": [33, 44],
//     "demonym": "Iraqi",
//     "area": 438317,
//     "gini": 29.5,
//     "timezones": ["UTC+03:00"],
//     "borders": ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
//     "nativeName": "العراق",
//     "numericCode": "368",
//     "flags": {
//       "svg": "https://flagcdn.com/iq.svg",
//       "png": "https://flagcdn.com/w320/iq.png"
//     },
//     "currencies": [
//       {
//         "code": "IQD",
//         "name": "Iraqi dinar",
//         "symbol": "ع.د"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "ar",
//         "iso639_2": "ara",
//         "name": "Arabic",
//         "nativeName": "العربية"
//       },
//       {
//         "iso639_1": "ku",
//         "iso639_2": "kur",
//         "name": "Kurdish",
//         "nativeName": "Kurdî"
//       }
//     ],
//     "translations": {
//       "br": "Irak",
//       "pt": "Iraque",
//       "nl": "Irak",
//       "hr": "Irak",
//       "fa": "عراق",
//       "de": "Irak",
//       "es": "Irak",
//       "fr": "Irak",
//       "ja": "イラク",
//       "it": "Iraq",
//       "hu": "Irak"
//     },
//     "flag": "https://flagcdn.com/iq.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "AL",
//         "name": "Arab League",
//         "otherNames": [
//           "جامعة الدول العربية",
//           "Jāmiʻat ad-Duwal al-ʻArabīyah",
//           "League of Arab States"
//         ]
//       }
//     ],
//     "cioc": "IRQ",
//     "independent": true
//   },
// ]
//     printCard(list)
//     activeSortField()
//     activeSearchfield()

// get data from data.json file
let list;

  fetch('data.json')
  .then((res) => res.json())
  .then((data) =>{
    list = data

    printCard(list)
    activeSortField()
    activeSearchfield()
  })


// sortByField function
  function activeSortField(){
    const sortByField = document.getElementById('sortByField')
    sortByField.addEventListener('click', (e) =>{
        const sortOptions = document.getElementById('sortOptions')
    
        
    
        if (e.target.className.includes('option')) {
            const option = e.target.textContent
            sortByField.querySelector('p').textContent = option
            sortOptions.classList.remove('showOption')
            filterByRegion(option)
        }else{
            sortOptions.classList.toggle("showOption")
        }
    
    }, true)
  }

  function filterByRegion(option){
    const regionFilter = list.filter((country) => country.region === option)
    printCard(regionFilter)
  }

  // seatchField function
  function activeSearchfield(){
    const search = document.getElementById('search')
    search.addEventListener('input', () =>{
      const countryName = search.value.trim().toLowerCase()
      if (countryName) {
       const countries = list.filter((country) => {
         if (country.name.toLowerCase().includes(countryName)) return country.name
       })
       printCard(countries)
      }else printCard(list)
    })
  }


  function changeTheme(){
        const contries = document.querySelectorAll('.country')
        const header = document.querySelector('header')
        const inputField = document.getElementById('inputField')
        const sortByField = document.getElementById('sortByField')
        const sortOptions = document.getElementById('sortOptions')
        const borderCountries = document.querySelectorAll('.borderCountry')
        const backBtn = document.getElementById('backBtn')
        const changableTheme = [...contries, ...borderCountries, header, inputField, sortByField, sortOptions, backBtn]
        
        
        const theme = localStorage.getItem('theme')
        changableTheme.forEach((changableItem) =>{

                if (theme === "dark") {
                    document.body.classList.add('mainDark')
                    changableItem.classList.add('darkMode')
                    themeChangerBtn.setAttribute('name', "moon")
                    themeChangerBtn.nextElementSibling.textContent = "Light Mode"
                }else{
                    document.body.classList.remove('mainDark')
                    changableItem.classList.remove('darkMode')
                     themeChangerBtn.setAttribute('name', "moon-outline")
                    themeChangerBtn.nextElementSibling.textContent = "Dark Mode"
                }
            
        })
    }



function printCard(List){
  const countryContainer = document.getElementById("countryContainer")
  countryContainer.innerHTML = ""

    List.forEach((country) =>{
        countryContainer.innerHTML += ` <div class="country">
                    <img src="${country.flag}" alt="${country.name}">
                    <div class="countryDetails">
                        <h5 class="countryName">${country.name}</h5>
                        <div>
                            <div class="otherDetails">Population: <span class="otherValue">${country.population}</span></div>
                            <div class="otherDetails">Region: <span class="otherValue">${country.region}</span></div>
                            <div class="otherDetails">Capital: <span class="otherValue">${country.capital}</span></div>
                        </div>
                    </div>
                </div>`
    })

    document.querySelectorAll('.country').forEach((country, i) =>{
      country.addEventListener('click', () => printDetails(List[i]))
    })

    changeTheme()
}


// detail page preview function
const homeContainer = document.getElementById('homeContainer')
const detailsContainer = document.getElementById('detailsContainer')
function printDetails(country){
    homeContainer.style.display = "none"
    detailsContainer.style.display = "block"

    const languages = country.languages.map((lang) => lang.name)
    const currencies = country.currencies.map((cur) => cur.name)
    const borderCountries = getCountry(country.borders)

    const countryDetailsCon = document.getElementById('countryDetailsCon')
    countryDetailsCon.innerHTML = `<img src="${country.flag}" alt="${country.name}">

                <div class="countryDetails">
                    <h5 class="countryName">${country.name}</h5>
                    <div id="otherDetailsCon">
                        <div>
                            <div class="otherDetails">Native Name: <span class="otherValue">${country.nativeName}</span></div>
                            <div class="otherDetails">Population: <span class="otherValue">${country.population}</span></div>
                            <div class="otherDetails">Region: <span class="otherValue">${country.region}</span></div>
                            <div class="otherDetails">Sub Region: <span class="otherValue">${country.subregion}</span></div>
                            <div class="otherDetails">Capital: <span class="otherValue">${country.capital}</span></div>
                        </div>
                        <div>
                            <div class="otherDetails">Top Level Domain: <span class="otherValue">${country.topLevelDomain.join(', ')}</span></div>
                            <div class="otherDetails">Currencies: <span class="otherValue">${currencies.join(', ')}</span></div>
                            <div class="otherDetails">Languages: <span class="otherValue">${languages.join(', ')}</span></div>
                        </div>
                    </div>

                    <div id="borderContainer">
                        <div class="otherDetails">Border Countries: </div>
                        ${borderCountries.join("")}
                    </div>
                </div>`



    activeSwitchDetailsPage()
    changeTheme()
    activeBackBtn()
}

function getCountry(codes){
  let countries = []

  if (codes) {
    for (let i = 0; i < list.length; i++) {
     const country = list[i];
     
     if(codes.includes(country.alpha3Code)){
       const borderCountry = `<button class="borderCountry">${country.name}</button>`
       countries.push(borderCountry)
       continue;
     }
    }
  }

  return countries
 }

// back from detail page function 
function activeBackBtn(){
    document.getElementById('backBtn').addEventListener('click', () =>{
        homeContainer.style.display = "block"
        detailsContainer.style.display = "none"
    })
}


// switch detail page onclick border name
function activeSwitchDetailsPage(){
  const borderCountries = document.querySelectorAll('.borderCountry')

  borderCountries.forEach((border) =>{
    border.addEventListener('click', () =>{
      const borderName = border.textContent
  
    const countryList =  list.filter((country) => country.name === borderName)
      printDetails(countryList[0])
    })
  })
}
let country = document.getElementById('country');
let btn = document.getElementById('btn');
let after = document.getElementById('after');



async function getData(){
    try{
        let test = country.value;
        let api = `https://restcountries.com/v3.1/name/${test}?fullText=true`;
        let response = await fetch(api);
        let data = await response.json();
        console.log(data);
        after.style.display = 'block';
        let lang = Object.values(data[0].languages);
        lang.forEach(element => console.log(element));
        console.log(lang);
        after.innerHTML = `
                <img src="${data[0].flags.svg}" alt="">
                <h1>${data[0].name.common}</h1>
                <div>
                    <p>Capital : <span>${data[0].capital[0]}</span></p>
                    <p>Continent : <span>${data[0].continents[0]}</span></p>
                    <p>Population : <span>${data[0].population}</span></p>
                    <p>Currency : <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span></p>
                    <p>languages : <span>${lang.map(element => `${element}`)}</span></p>
                    <p>Fifa : <span>${data[0].fifa}</span></p>    
                </div>
        `
    }
    catch(error){
        if(country == null){
            after.innerHTML =`
            
            <p>Please Enter A country</p>
            `
        }else{
            after.innerHTML =`
            <p style="color: rgb(215, 75, 75);">You type the name of the country incorrectly Try again Please</p>
            `
        }
    }
    
 
}
country.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      getData();
    }
  });
btn.addEventListener('click', getData);



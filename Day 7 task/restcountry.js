// a) Get all the countries from Asia continent /region using Filter method

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
        }
    })
    console.log(asia);}

// b)Get all the countries with a population of less than 2 lakhs using Filter method

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
const populate=countryData.filter((element)=>{

    return element.population<200000;
})
console.log(populate);}

// c)Print the following details name, capital, flag using forEach method
 var request=new XMLHttpRequest();
 request.open('GET','https://restcountries.com/v3.1/all','true');
 request.send();
 request.onload=function (){
     var countryData=JSON.parse(this.response);
     countryData.forEach((element)=>{
        
        console.log(element.name,element.capital,element.flag);
     })}

//  d)Print the total population of countries using reduce method
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
const population=countryData.reduce((acc,element)=>{
    return acc+element.population;
})
console.log(population);}

// e)Print the country which use US Dollars as currency
var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.com/v3.1/all', 'true')
request.send();
request.onload = function () {
var data = JSON.parse(this.response);
for(i=0;i<data.length;i++){
     if(data[i].currencies[0].code==="USD")
    {
        console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
    }
  }
 }
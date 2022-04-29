// 4 steps involed here
//Need:this will create a new object which will have
//the interaction with servers via api
//step 04: takes two parameters: "HTTP METHOD","API URL"

var request=new XMLHttpRequest();                                                                                   //step 01:create a XHR object
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");     //step 02: opening a request
request.send();                                                                                                     //step 03: sending a request
request.onload=function(){                                                                                          
    var data=JSON.parse(request.response); 
 
 
 
    // a. Get all the countries from Asia continent /region using Filter function
  var AConti = data.filter(function(e){
    if(e.subregion == "Southern Asia" || e.subregion == "Eastern Asia" || e.subregion == "Western Asia" || e.subregion == "South-Eastern Asia")
    return e.subregion
  });
  console.log(AConti);

  
      // b. Get all the countries with a population of less than 2 lakhs using Filter function

            let population = data.filter(function(e){
                return e.population < 200000;
            })

            console.log(population);


    // c. Print name, capital, flag using forEach function
    
    data.forEach(function(data){
        console.log(`${data.name}  ${data.capital}  ${data.flag}`);
});




   
// d. Print the total population of countries using reduce function

let TotalPopulation = data.reduce(function(accum,total){
    return accum+total.population;
})
    console.log(TotalPopulation);


     
    
    // e. Print the country which uses US Dollars as currency
        
     for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code == 'USD'){
            console.log(data[i].name);
        }
    }
 
   
    }


   

        
    

    
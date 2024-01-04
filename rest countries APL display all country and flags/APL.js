
// 2 // county name and flags

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result =JSON.parse(request.response);
    console.log(result)
    for (var a in result){
        console.log(result[a].name["common"],result[a].flags["png"]);
  
    }
        
    
}

// 3 // counry name, region, sub_region and population

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result =JSON.parse(request.response);
    console.log(result)
    for (var a in result){
        console.log("Name : ",result[a].name["common"]);
        console.log("Region : ",result[a].region);
        console.log("Subregion : ",result[a].subregion);
        console.log("Population : ",result[a].population);
        
    }
        
    
}







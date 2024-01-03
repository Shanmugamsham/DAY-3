var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result =JSON.parse(request.response);
    console.log(result)
    for (var i in result){
        console.log(i,result[i]);
        // i can only bring all datas
        // i can't bring result specific data i don't know how to bring result 
        // i tried manyways please alternate 
    } 
}

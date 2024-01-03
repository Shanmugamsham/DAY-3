
//how to commpare json have same properties without order


let obj1= {
    Name: "person 1",
    age:5
}
let obj2= { 
    age:5,
    Name: "person 1"
}

name_1=obj1["Name"]
name_2=obj2["Name"]
age_1=obj1["age"]
age_2=obj2["age"]

if(name_1==name_2) {
    console.log("both name are same")
}
else{
    console.log("both name are not same")
}

if(age_1==age_2) {
    console.log("both age are same")
}
else{
    console.log("both age are not same")
}

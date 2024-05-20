var lang = ["java" , "css" , "html"]
//var num = [10,20,30]

//methods

//var h = num.concat(lang)
//console.log(h)
var person={
    name: "Khizar",
    age: 19,
    height: 6,
    sleep: function(){
        console.log("sleeping....." + this.age)
    }
}
 
for(let getVal in person){
    console.log(person[getVal])
}
var users = [
    {
        id : 02,
        name : "shariq",
        age : 17,
        course : "adse"
    },
    {
        id : 03,
        name : "sharjeel",
        age : 19,
        course : "adse"
    },
    {
        id : 04,
        name : "muzammil",
        age : 18,
        course : "adse"
    },
]
for(var i = 0; i < users.length; i++){
    const value = users[i];
    var div = document.getElementById("parent");
    div.innerHTML += `<div>
    <h3>${users[i].name}</h4>
    <h4>${users[i].age}</h>
    <p></p>
</div>`
}
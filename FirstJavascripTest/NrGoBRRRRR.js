let add = document.getElementById("increment");
let remove = document.getElementById("decreament");

let int = document.getElementById("number");
let integer = 0;

add.addEventListener("click", function()
{
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener("click", function()
{
    integer -= 1;
    int.innerHTML = integer;
})
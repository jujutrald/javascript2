let botao = document.getElementById('botao');
let botao2 = document.getElementById('botao2');
let numero = 0;

botao.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero++
    
    count.innerHTML = numero;
})
botao2.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero--
    
    count.innerHTML = numero;
})
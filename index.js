var elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle ("ativa")
        duvida.children[1].classList.toggle("imagem")
    })

})

// function nome(argumento){
    //conteúdo da função
// }
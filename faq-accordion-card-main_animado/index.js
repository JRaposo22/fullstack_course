//var numLoops = document.querySelectorAll(".accordion-content").length;


// for (i = 0; i < numLoops; i++) {                                    /*Também podemos fazer um for loop*/

// document.querySelectorAll(".accordion-header")[i].addEventListener("click", function () {
//       this.classList.toggle("accordion-header-active");
//     })


//  }

//Funciona das duas maneiras, sendo que não é necessário fazer um for loop,podemos utilizar o forEach//
const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("accordion-header-active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;                /*Colocar o próximo elemento irmão numa constante*/

        if (accordionItemHeader.classList.contains("accordion-header-active")) {        /*Verificar se a classe está ativa*/
                                                                                        
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"; /*Caso esteja ativa colocamos a altura de acordo com o tamanho do texto*/
        } else {
                                                                                        /*Scroll Height dá a altura de um elemento em pixels*/
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


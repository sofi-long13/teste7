const imagensContainer = document.querySelector(".imagens");
const imagens = document.querySelectorAll(".imagens img");
const totalImagens = imagens.length

let indiceAtual = 0;

function avancarCarrossel(){
    indiceAtual = (indiceAtual + 1) % totalImagens;

    const larguraImagem = imagens[0] .clientWidth;

    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}

setInterval(avancarCarrossel, 4000)


function mudaTema(){
    document.body.classList.toggle("dark-theme")
}
function githubGabriel(){
    window.open("https://github.com/Gabriel-Dev-1")
}

function linkedinGabriel(){
    window.open("https://www.linkedin.com/in/gabriel-alves-bastos-7877b4330/")
}
function githubMalu(){
    window.open("https://github.com/mahtrash")
}

function linkedinMalu(){
    window.open("https://www.linkedin.com/in/maria-luiza-da-silva-silveira-5b73a026a/")
}
function githubNalanda(){
    window.open("https://github.com/NalandaD")
}

function linkedinNalanda(){
    window.open("https://www.linkedin.com/in/nalanda-deporte-6672a2312/")
}
function githubSofi(){
    window.open("https://github.com/sofi-long13")
}

function linkedinSofi(){
    window.open("https://www.linkedin.com/in/sofia-longaray-573344268/")
}



// ------------------------------------------------------------mobile------------------------------
// const mobileButton = document.getElementById("mobile_button")
// const mobileMenu = document.getElementById("mobile_menu")

// mobileButton.addEventListenerAll("click", () => {
//     mobileMenu.classList.toggle("active")
// })

$(document).ready(function(){
    $("#mobile_button").click(function(){
        $("#mobile_menu").toggleClass("active")
    })
});
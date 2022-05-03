//Node-fetch
/*const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));*/
let idName = 91;
let numPosition = 1;

function PokemonQuery(id, num) {
    while (idName < 101 & numPosition < 11) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
                response.json()
                    .then(function (pokemon) {
                        let pokeName = pokemon.name;
                        document.querySelector('#poke' + num + '_name').innerHTML = pokeName;
                        let pokeImg = document.querySelector('#poke' + num + '_img')
                        pokeImg.setAttribute("src", pokemon.sprites.front_default)
                        //console.log(pokemon.name)
                    })
            })
        idName = idName + 1;
        numPosition = numPosition + 1;
        PokemonQuery(idName, numPosition);
    }
}

PokemonQuery(idName, numPosition);


//Menu Mobile
function mMobile() {
    document.querySelector(".menu").style.display = "block";
    document.querySelector("#mMobile").style.display = "none";
    document.querySelector("#closeBtn").style.display = "block";
}
function menu() {
    document.querySelector(".menu").style.display = "none";
    document.querySelector("#mMobile").style.display = "block";
    document.querySelector("#closeBtn").style.display = "none";
}




// const POKEAPIURL = "https://pokeapi.co/api/v2/pokemon/";

function acionarPesquisa(){
    if (validarNomePokemon()){
        const pokemon=document.querySelector("input").value;
        obterInfosDaAPI(pokemon);
        }else{
            alert ("Preencha com o nome do Pokemon!")
        }
}

function validarNomePokemon(){
    return (document.querySelector("input").value !== "")
}

function obterInfosDaAPI(pokemon){
    console.log(pokemon)
    // console.log(POKEAPIURL+pokemon)
    const promise = axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemon)
    console.log(promise)
    promise.then(renderizarCard)
    promise.catch(exibirErro)
}

function renderizarCard(resposta){
    console.log(resposta.data)
    const respostaPokemon = resposta.data
    const ul = document.querySelector("ul");
    ul.querySelector(".nome").innerHTML = respostaPokemon.name;
    ul.querySelector(".numero").innerHTML = respostaPokemon.id;
    ul.querySelector(".hp").innerHTML = respostaPokemon.stats[0].base_stat;
    ul.querySelector(".ataque").innerHTML = respostaPokemon.stats[1].base_stat;
    ul.querySelector(".defesa").innerHTML = respostaPokemon.stats[2].base_stat;
    ul.querySelector(".ataque-especial").innerHTML = respostaPokemon.stats[3].base_stat;
    ul.querySelector(".defesa-especial").innerHTML = respostaPokemon.stats[4].base_stat;
    ul.querySelector(".speed").innerHTML = respostaPokemon.stats[5].base_stat;
    document.querySelector("img").setAttribute("src", respostaPokemon.sprites.front_default);
    
    console.log(respostaPokemon.moves[sortearAtaque(respostaPokemon.moves.length)])
}

function sortearAtaque(maximo){
    return Math.floor(Math.random() * maximo);
}

function exibirErro(erro){
    alert(`Erro: ${erro.response.status}`)

}
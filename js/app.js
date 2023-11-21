let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    //TO-DO: verificar nomes repetidos mesmo escritos diferente. Ex.: ana e Ana
    if(amigos.includes(amigo.value) && amigo.value == '') {
        alert('Nome do amigo inválido ou já existente!');
    } else {
        amigos.push(amigo.value);

        if(lista.textContent == '') {
            lista.textContent = amigo.value;
        } else {
            lista.textContent += `, ${amigo.value}`;
        }

        amigo.value = '';        
    }
}

function sortear() {
    if(amigos.length >= 4) {
        let sorteio = document.getElementById('lista-sorteio');

        embaralha(amigos);

        for(let i = 0; i < amigos.length-1; i++) {
            let amigoEscolhido = (i == amigos.length) ? amigos[0] : amigos[i+1];

            sorteio.innerHTML += `${amigos[i]} --> ${amigoEscolhido}<br>`;
        }
    } else {
        alert('Sorteio só pode ser realizado 4 integrantes ou mais!');
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}
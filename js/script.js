function verificarEstoque(linha)
{
    let valorQuantidade = Number(linha.children[2].textContent );
    if (valorQuantidade <= 60)
    {
        linha.children[4].innerHTML = "<span class='vermelho'>Comprar</span>";
    }
    else
    {
        linha.children[4].innerHTML = "Regular";
    }
}

const linhasProdutos = document.querySelectorAll('.linha-produto');

for (let i = 0; i < linhasProdutos.length; i++) {
    verificarEstoque( linhasProdutos[i]);
}

const botaoNovo = document.querySelector ("#btnNovo");
botaoNovo.addEventListener("click", ClicouBotaoNovo);

function ClicouBotaoNovo (event) {

    event.preventDefault();

    const tela = document.querySelector(".areaNovoProduto")
    const bloqueio = document.querySelector(".block")
    tela.classList.remove("escondido")
    bloqueio.classList.remove("escondido")

}

const botaoCancelar = document.querySelector ("#btnCancelar");
botaoCancelar.addEventListener("click", ClicouBotaoCancelar);

function ClicouBotaoCancelar (event) {

    event.preventDefault();

    const tela = document.querySelector(".areaNovoProduto")
    const bloqueio = document.querySelector(".block")
    tela.classList.add("escondido")
    bloqueio.classList.add("escondido")

}

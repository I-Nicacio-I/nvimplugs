function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
 
  campoPesquisa = campoPesquisa.toLowerCase()
  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    // Filta para o item pesquisado no campo pesquisa.
    if( titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) ||
	tags.includes(campoPesquisa)
      ){
        // Constrói o HTML para cada resultado da pesquisa, formatando os dados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
    }

    

    // Se a pesquisa for vaiza.
    if( !campoPesquisa ){ 
        resultados = `
            <div class="item-resultado">
                  <h2>
	             Caixa de pesquisa vaiza!!! 
                  </h2>
            </div>
            ` 
    }
  }

     // Se nada for encontrado.
    if( !resultados ){ 
        resultados = `
            <div class="item-resultado">
                   <h2>
	              Não encontrei nada  :-/ 
                   </h2>
            </div>
        ` 
    }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}

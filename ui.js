import { Jogos } from "./lib.js"

let jogos = Jogos.carregarJogos()

Jogos.salvarJogos(jogos)

const output = document.getElementById('output')  // Área de exibição de resultados
const forms = document.getElementById('forms')     // Área onde formulários aparecem dinamicamente
const buttons = document.getElementById('buttons')

// Nova função auxiliar para renderizar os jogos com imagens da API
const renderizarJogosComImagens = async (listaDeJogos) => {
  output.innerHTML = 'Carregando jogos...'

  const promises = listaDeJogos.map(async (jogo) => {
    try {
      const resultadosAPI = await Jogos.buscarJogoRAWG(jogo.Nome);
      const jogoComImagem = resultadosAPI[0] || {}
      const imagemURL = jogoComImagem.background_image || 'https://via.placeholder.com/250x350.png?text=Sem+Capa'
      return `
        <div class="disquete">
          <img src="${imagemURL}" alt="Capa do jogo ${jogo.Nome}" class="game-cover">
          <h3>${jogo.Nome}</h3>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      `;
    } catch (error) {
      console.error(`Erro ao buscar imagem para ${jogo.Nome}:`, error);
      return `
        <div class="disquete">
          <h3>${jogo.Nome}</h3>
          <p>Erro ao carregar imagem.</p>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      `;
    }
  });

  const listaHTML = await Promise.all(promises)
  output.innerHTML = `<div class="disquete-container">${listaHTML.join('')}</div>`
}

const renderizarJogoComImagem = async (jogo) => {
  output.innerHTML = 'Carregando jogo...'

  try {
    const resultadosAPI = await Jogos.buscarJogoRAWG(jogo.Nome)
    const jogoComImagem = resultadosAPI[0] || {}
    const imagemURL = jogoComImagem.background_image || 'https://via.placeholder.com/250x350.png?text=Sem+Capa'

    output.innerHTML = `
      <div class="disquete-container-aleatorio">
        <div class="disquete">
          <img src="${imagemURL}" alt="Capa do jogo ${jogo.Nome}" class="game-cover">
          <h3>${jogo.Nome}</h3>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      </div>
    `
  } catch (error) {
    console.error(`Erro ao buscar imagem para ${jogo.Nome}:, error`)

    output.innerHTML = `
      <div class="disquete-container-aleatorio">
        <div class="disquete">
          <h3>${jogo.Nome}</h3>
          <p>Erro ao carregar imagem.</p>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      </div>
    `
  }
}

function MostrarAdd() {
  forms.innerHTML = `
    <h3>Adicionar Jogos</h3>
    <form id="addForm" class="estiloI">
      <input type="text" id="addNome" placeholder="Nome" required />
      <input type="text" id="addGenero" placeholder="Genero" required />
      <input type="number" id="addCopias" placeholder="Copias Vendidas" required />
      <input type="text" id="addPlat" placeholder="Plataforma" required />
      <input type="text" id="addDev" placeholder="Desenvolvedora" required /> 
      <input type="text" id="addPersc" placeholder="Perspectiva" required />
      <button type="submit">Adicionar</button>
    </form>
  `
  // Quando o formulário é enviado
  document.getElementById('addForm').addEventListener('submit', e => {
    e.preventDefault()
    const novoJogo = {
      Nome: document.getElementById('addNome').value.trim(),
      Genero: document.getElementById('addGenero').value.trim().toLowerCase(),
      Copias: Number(document.getElementById('addCopias').value),
      Plataforma: document.getElementById('addPlat').value.trim(),
      Desenvolvedora: document.getElementById('addDev').value.trim(),
      Perspectiva: document.getElementById('addPersc').value.trim().toLowerCase(),
    }
    jogos = Jogos.adicionarJogos(jogos, novoJogo); // Chama a função da lib
    Jogos.salvarJogos(jogos); // Salva no localStorage
    forms.innerHTML = '' // Limpa o formulário
    output.textContent = 'Jogo adicionado!';
  })
}

// --- Formulário de atualizar jogo ---
function MostrarMudarCopias() {
  forms.innerHTML = `
    <h3>Atualizar Copias</h3>
    <form id="updateForm" class="estiloI">
      <input type="text" id="updateNome" placeholder="Nome" required />
      <input type="number" id="updateCopias" placeholder="Copias" required /> 
      <button type="submit">Atualizar</button>
    </form>
  `
  document.getElementById('updateForm').addEventListener('submit', e => {
    e.preventDefault()
    const nome = document.getElementById('updateNome').value
    const copias = document.getElementById('updateCopias').value
    const updates = {}
    if(nome) updates.Nome = nome
    if(copias) updates.Copias = Number(copias)
    jogos = Jogos.atualizarJogos(jogos, nome, updates) // Atualiza dados
    Jogos.salvarJogos(jogos)
    forms.innerHTML = ''
    output.textContent = 'Jogo atualizado!'
  });
}

// --- Formulário de remover jogo ---
function MostarRemover() {
  forms.innerHTML = `
    <h3>Remover Jogo</h3>
    <form id="removerForm" class="estiloI">
      <input type="text" id="removerNome" placeholder="Nome do Jogo" required />
      <button type="submit">Remover Jogo</button>
    </form>
  `
  document.getElementById('removerForm').addEventListener('submit', e => {
    e.preventDefault()
    const nome = document.getElementById('removerNome').value;
    jogos = Jogos.apagarJogos(jogos, nome) // Remove
    Jogos.salvarJogos(jogos)
    forms.innerHTML = ''
    output.textContent = 'Jogo removido!'
  })
}
// --- Formulario para  listar jogo por genero ----
function MostrarListarPorGenero() {
  forms.innerHTML = `
    <h3>Listar Jogos por Gênero</h3>
    <form id="generoForm" class="estiloS">
      <label for="generoSelect">Escolha o gênero:</label>
      <select id="generoSelect" required>
        <option value="">-- Selecione --</option>
      </select>
      <button type="submit">Listar</button>
    </form>
    `
  const select = document.getElementById('generoSelect')

  //Preenche o select com as perpectivas
Jogos.filtrarTodosGeneros(jogos).forEach(p => {
  const option = document.createElement("option")
  option.value = p
  option.textContent = p
  select.appendChild(option)
})

document.getElementById('generoForm').addEventListener('submit', (e) => {
      e.preventDefault()
      const genero = select.value
      const jogosFiltrados = jogos.filter(jogo => jogo.Genero.toLowerCase() === genero.toLowerCase())
      renderizarJogosComImagens(jogosFiltrados) 
    })
  }

// Formulário para filtrar jogos por perspectiva
function MostrarListarPorPerspectiva() {

  // Monta o formulário com o select vazio (apenas a primeira opção padrão)
  forms.innerHTML = `
    <h3>Listar Jogos por Perspectiva</h3>
    <form id="perspectivaForm" class="estiloS">
      <label for="perspectivaSelect">Escolha a perspectiva:</label>
      <select id="perspectivaSelect" required>
        <option value="">-- Selecione --</option>
      </select>
      <button type="submit">Listar</button>
    </form>
  `

  // Referência ao select
  const select = document.getElementById('perspectivaSelect')

  // Preenche o select com as perspectivas únicas
    Jogos.filtrartodasperspectivas(jogos).forEach(p => {
    const option = document.createElement("option");
    option.value = p
    option.textContent = p
    select.appendChild(option)
  });

  // Listener para o formulário
document.getElementById('perspectivaForm').addEventListener('submit', (e) => {
      e.preventDefault()
      const perspectiva = select.value
      const jogosFiltrados = jogos.filter(jogo => jogo.Perspectiva.toLowerCase() === perspectiva.toLowerCase())
      renderizarJogosComImagens(jogosFiltrados) // Usa a nova função
    });
  }


// --- Formulário para pesquisar jogo ---
function MostrarPesquisarJogo() {
  forms.innerHTML = `
    <h3>Pesquisar Jogo</h3>
    <form id="pesquisaForm" class="estiloI">
      <input type="search" id="searchJogo" name="q" placeholder="Nome do jogo" />
      <button type="submit">Procurar</button>
    </form>
  `

  document.getElementById('pesquisaForm').addEventListener('submit', async e => {
    e.preventDefault()
    const nome = document.getElementById('searchJogo').value.trim()
    const encontrados = jogos.filter(jogo =>
      jogo.Nome.toLowerCase().includes(nome.toLowerCase())
    )

    if (encontrados.length === 0) {
      output.innerHTML = "Nenhum jogo encontrado!"
      return;
    }

    const promises = encontrados.map(async (jogo) => {
      try {
        const resultadosAPI = await Jogos.buscarJogoRAWG(jogo.Nome);
        const jogoComImagem = resultadosAPI[0] || {}
        const imagemURL = jogoComImagem.background_image || 'https://via.placeholder.com/250x350.png?text=Sem+Capa'
        const gameID = jogoComImagem.id || null
        return `
          <div class="disquete-search search-result-disquete">
            <img src="${imagemURL}" alt="Capa do jogo ${jogo.Nome}" class="game-cover">
            <h3>${jogo.Nome}</h3>
            <p><strong>Gênero:</strong> ${jogo.Genero}</p>
            <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
            <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
            <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
            <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
            <div class="button-container"> 
                ${gameID ? `<button class="btn-api" data-id="${gameID}">Mais informações</button>` : `<p>Informações da API não disponíveis.</p>`}
            </div>
          </div>
        `
      } catch (error) {
        console.error(`Erro ao buscar imagem para ${jogo.Nome}:`, error)
        return `
          <div class="disquete-search search-result-disquete">
            <h3>${jogo.Nome}</h3>
            <p>Erro ao carregar imagem.</p>
            <p><strong>Gênero:</strong> ${jogo.Genero}</p>
            <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
            <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
            <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
            <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
            <div class="button-container">
                <p>Informações da API não disponíveis.</p>
            </div>
          </div>
        `
      }
    })

    const listaHTML = await Promise.all(promises)
    output.innerHTML = `<div class="disquete-container-search">${listaHTML.join('')}</div>`
    document.querySelectorAll(".btn-api").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        const gameId = e.target.dataset.id
        const disqueteElement = e.target.closest('.disquete-search'); // CORREÇÃO AQUI
        const infoAPIElement = disqueteElement.querySelector('.rawg-info-container')
        
        if (infoAPIElement) {
          infoAPIElement.remove();
          e.target.textContent = "Mais informações"
          return;
        }

        e.target.textContent = "Carregando..."
        const detalhes = await Jogos.buscarDetalhesRAWG(gameId)
        if (!detalhes) {
          e.target.textContent = "Erro!"
          return
        }

        // Reorganização das informações para exibir a sinopse por último
        const infoHTML = `
          <div class="rawg-info-container">
            <hr>
            <h4>Informações da RAWG:</h4>
            <p style="margin-bottom: 15px;"><strong>Lançamento:</strong> ${detalhes.released || 'N/A'}</p>
            <p style="margin-bottom: 15px;"><strong>Plataformas:</strong> ${detalhes.platforms ? detalhes.platforms.map(p => p.platform.name).join(", ") : "N/A"}</p>
            <p style="margin-bottom: 15px;"><strong>Gêneros:</strong> ${detalhes.genres ? detalhes.genres.map(g => g.name).join(", ") : "N/A"}</p>
            <p style="margin-bottom: 15px;"><strong>Tags:</strong> ${detalhes.tags ? detalhes.tags.map(t => t.name).join(", ") : "N/A"}</p>
            <p style="margin-bottom: 15px;"><strong>Desenvolvedoras:</strong> ${detalhes.developers ? detalhes.developers.map(d => d.name).join(", ") : "N/A"}</p>
            <p style="margin-bottom: 15px;"><strong>Distribuidoras:</strong> ${detalhes.publishers ? detalhes.publishers.map(p => p.name).join(", ") : "N/A"}</p>
            <p style="margin-bottom: 15px;"><strong>Metacrítica:</strong> ${detalhes.metacritic || 'N/A'}</p>
            <p style="margin-bottom: 15px;"><strong>Avaliação ESRB:</strong> ${detalhes.esrb_rating ? detalhes.esrb_rating.name : 'N/A'}</p>
            <p style="margin-bottom: 15px;"><strong>Lojas:</strong> ${detalhes.stores ? detalhes.stores.map(s => s.store.name).join(", ") : "N/A"}</p>
            <p><strong>Avaliação Geral:</strong> ${detalhes.rating || 'N/A'}</p>
            <p><strong>Sinopse:</strong> ${detalhes.description_raw || 'N/A'}</p>
          </div>
        `
        disqueteElement.insertAdjacentHTML('beforeend', infoHTML)
        e.target.textContent = "Ocultar informações"
      })
    })
  })
}



function MostrarJogoAleatorio() {
  const jogo = Jogos.jogoAleatorio(jogos)

  return renderizarJogoComImagem(jogo)
}

async function MostrarPesquisarRAWG() {
  forms.innerHTML = `
    <h3>Pesquisar Jogo na RAWG</h3>
    <form id="pesquisaRAWGForm" class="estiloI">
      <input type="search" id="searchRAWG" placeholder="Nome do jogo" />
      <button type="submit">Procurar</button>
    </form>
  `

  document.getElementById("pesquisaRAWGForm").addEventListener("submit", async e => {
    e.preventDefault()
    const nome = document.getElementById("searchRAWG").value;
    const resultados = await Jogos.buscarJogoRAWG(nome);

    if(resultados.length === 0) {
      output.textContent = "Nenhum jogo encontrado!"
      return;
    }

    output.innerHTML = resultados.map(j => `
      <h4>${j.name}</h4>
      <p>Gênero: ${j.genres.map(g => g.name).join(", ")}</p>
      <p>Plataforma: ${j.platforms ? j.platforms.map(p => p.platform.name).join(", ") : "N/A"}</p>
      <p>Data de lançamento: ${j.released}</p>
      <img src="${j.background_image}" width="200"/>
    `).join("<hr>")
  })
}

// ===== Gráfico de copias vendidas por jogo =====
// ADD ESSA FUNCAO
function mostraGraficoCopias() {
  // Cria um canvas para o gráfico
  forms.innerHTML = `<canvas id="authorChart"></canvas>`;
  output.textContent = ''

  // Ordena do menor para o maior
  const sortedJogos = [...jogos].sort((a, b) => a.Copias - b.Copias)

  // Extrai rótulos (nomes) e valores (vendas)
  const labels = sortedJogos.map(jogo => jogo.Nome)
  const data = sortedJogos.map(jogo => jogo.Copias)

  // Cria o gráfico de barras horizontais usando Chart.js
  const colors = labels.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`)

  // Cria o gráfico de barras horizontais usando Chart.js
  const ctx = document.getElementById('authorChart').getContext('2d')
  new Chart(ctx, {
    type: 'bar', 
    data: {      
      labels: labels,
      datasets: [{
        label: 'Cópias Vendidas',
        data: data,
        backgroundColor: colors
      }]
    },
    options: { 
    
      indexAxis: 'y', 
      plugins: { 
        legend: {
           display: false 
          } 
        },
      scales: { 
        x: {
           beginAtZero: true 
          },
           y: {
            ticks: {
              autoSkip: false
            }
          }
       }
    }
  })
}


// ===== Actions =====
// Dicionário que associa cada ação a uma função
const actions = {
  init: () => {
    jogos = Jogos.resetarJogos()
    output.textContent = "Biblioteca com Jogos padrão iniciada!"
    forms.innerHTML = ""
  },
  listar: () => { forms.innerHTML = ''; output.innerHTML = Jogos.listarJogos(jogos); },
  adicionar: () => MostrarAdd(),
  atualizar: () => MostrarMudarCopias(),
  remover: () => MostarRemover(),
  listarGenero: () => MostrarListarPorGenero(),
  listarPerspectiva: () => MostrarListarPorPerspectiva(),
  pesquisaJogo: () => MostrarPesquisarJogo(),
  aleatorio: () => MostrarJogoAleatorio(),
  graficoVendas : () => mostraGraficoCopias() // <- ADD ISSO AQUI
};

actions.listar = async () => {
  forms.innerHTML = ''
  output.innerHTML = 'Carregando jogos...' // Mensagem de carregamento

  const promises = jogos.map(async (jogo) => {
    try {
      const resultadosAPI = await Jogos.buscarJogoRAWG(jogo.Nome)
      const jogoComImagem = resultadosAPI[0] || {}
      const imagemURL = jogoComImagem.background_image || 'https://via.placeholder.com/250x350.png?text=Sem+Capa'
      return `
        <div class="disquete">
          <img src="${imagemURL}" alt="Capa do jogo ${jogo.Nome}" class="game-cover">
          <h3>${jogo.Nome}</h3>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      `
    } catch (error) {
      console.error(`Erro ao buscar imagem para ${jogo.Nome}:`, error);
      return `
        <div class="disquete">
          <h3>${jogo.Nome}</h3>
          <p>Erro ao carregar imagem.</p>
          <p><strong>Gênero:</strong> ${jogo.Genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.Plataforma}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.Desenvolvedora}</p>
          <p><strong>Perspectiva:</strong> ${jogo.Perspectiva}</p>
          <p><strong>Cópias vendidas:</strong> ${jogo.Copias.toLocaleString()}</p>
        </div>
      `
    }
  })

  const listaHTML = await Promise.all(promises)
  output.innerHTML = `<div class="disquete-container">${listaHTML.join('')}</div>`
}

// ===== Event listener =====
// Captura cliques nos botões do menu e chama a ação correspondente
buttons.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON') {
    forms.innerHTML = '' // Ao apertar em outro botão retira a lista do outro da tela
    output.innerHTML = ''
    const action = e.target.dataset.action; // Lê o "data-action" do botão
    if(action && actions[action]) actions[action](); // Executa a função correspondente
  }
});

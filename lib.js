// Chave do localStorage
const STORAGE_KEY = "biblioteca::jogos"

// Salva no localStorage
const salvarJogos = (lista) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista))
}

// Carrega do localStorage
const carregarJogos = () => {
  return localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : []
}
//restaura a lista de jogos para a inicial
const resetarJogos = () => {
const jogos = [
{
    "Nome": "The Last of Us Part II",
    "Genero": "Ação/Aventura",
    "Copias": 10000000,
    "Plataforma": "PlayStation",
    "Desenvolvedora": "Naughty Dog",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Minecraft",
    "Genero": "Sandbox / Sobrevivência",
    "Copias": 300000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Mojang Studios",
    "Perspectiva": "Primeira e Terceira pessoa"
  },
  {
    "Nome": "The Legend of Zelda: Breath of the Wild",
    "Genero": "Ação/RPG",
    "Copias": 30000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "Nintendo EPD",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "GTA V",
    "Genero": "Ação/Aventura",
    "Copias": 195000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Rockstar North",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "God of War (2018)",
    "Genero": "Ação/Aventura",
    "Copias": 23000000,
    "Plataforma": "PlayStation",
    "Desenvolvedora": "Santa Monica Studio",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Elden Ring",
    "Genero": "RPG/Ação",
    "Copias": 25000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "FromSoftware",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Red Dead Redemption 2",
    "Genero": "Ação/Aventura",
    "Copias": 64000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Rockstar Games",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Fortnite",
    "Genero": "Battle Royale",
    "Copias": 500000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Epic Games",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "League of Legends",
    "Genero": "MOBA",
    "Copias": 150000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Riot Games",
    "Perspectiva": "Visão isométrica"
  },
  {
    "Nome": "Counter-Strike: Global Offensive",
    "Genero": "FPS",
    "Copias": 40000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Valve",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Overwatch",
    "Genero": "FPS",
    "Copias": 50000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Blizzard Entertainment",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Super Mario Odyssey",
    "Genero": "Plataforma",
    "Copias": 26000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "Nintendo EPD",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Horizon Zero Dawn",
    "Genero": "Ação/RPG",
    "Copias": 30000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Guerrilla Games",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Cyberpunk 2077",
    "Genero": "RPG/Ação",
    "Copias": 30000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "CD Projekt Red",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "The Witcher 3: Wild Hunt",
    "Genero": "RPG",
    "Copias": 50000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "CD Projekt Red",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Among Us",
    "Genero": "Party Game",
    "Copias": 500000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "InnerSloth",
    "Perspectiva": "2D Vista superior"
  },
  {
    "Nome": "Call of Duty: Modern Warfare II",
    "Genero": "FPS",
    "Copias": 30000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Infinity Ward",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Dark Souls III",
    "Genero": "RPG/Ação",
    "Copias": 10000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "FromSoftware",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Sekiro: Shadows Die Twice",
    "Genero": "Ação/Aventura",
    "Copias": 10000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "FromSoftware",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "FIFA 23",
    "Genero": "Esporte",
    "Copias": 10000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "EA Sports",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Street Fighter V",
    "Genero": "Luta",
    "Copias": 6000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Capcom",
    "Perspectiva": "2D lateral"
  },
  {
    "Nome": "Mortal Kombat 11",
    "Genero": "Luta",
    "Copias": 12000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "NetherRealm Studios",
    "Perspectiva": "2D lateral"
  },
  {
    "Nome": "Persona 5",
    "Genero": "RPG",
    "Copias": 8000000,
    "Plataforma": "PlayStation",
    "Desenvolvedora": "Atlus",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Animal Crossing: New Horizons",
    "Genero": "Simulação",
    "Copias": 42000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "Nintendo EPD",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Splatoon 3",
    "Genero": "Shooter",
    "Copias": 10000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "Nintendo EPD",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Metroid Dread",
    "Genero": "Ação/Plataforma",
    "Copias": 3000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "MercurySteam",
    "Perspectiva": "2D lateral"
  },
  {
    "Nome": "Pokémon Scarlet and Violet",
    "Genero": "RPG",
    "Copias": 24000000,
    "Plataforma": "Nintendo",
    "Desenvolvedora": "Game Freak",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Halo Infinite",
    "Genero": "FPS",
    "Copias": 20000000,
    "Plataforma": "Xbox",
    "Desenvolvedora": "343 Industries",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Forza Horizon 5",
    "Genero": "Corrida",
    "Copias": 30000000,
    "Plataforma": "Xbox",
    "Desenvolvedora": "Playground Games",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "Gran Turismo 7",
    "Genero": "Corrida",
    "Copias": 5000000,
    "Plataforma": "PlayStation",
    "Desenvolvedora": "Polyphony Digital",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Doom Eternal",
    "Genero": "FPS",
    "Copias": 8000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "id Software",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Skyrim",
    "Genero": "RPG",
    "Copias": 60000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Bethesda",
    "Perspectiva": "Primeira e Terceira pessoa"
  },
  {
    "Nome": "Fallout 4",
    "Genero": "RPG",
    "Copias": 13000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Bethesda",
    "Perspectiva": "Primeira e Terceira pessoa"
  },
  {
    "Nome": "Destiny 2",
    "Genero": "FPS/MMO",
    "Copias": 50000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Bungie",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Apex Legends",
    "Genero": "Battle Royale",
    "Copias": 130000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Respawn Entertainment",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Valorant",
    "Genero": "FPS",
    "Copias": 30000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Riot Games",
    "Perspectiva": "Primeira pessoa"
  },
  {
    "Nome": "Dota 2",
    "Genero": "MOBA",
    "Copias": 11000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Valve",
    "Perspectiva": "Visão isométrica"
  },
  {
    "Nome": "World of Warcraft",
    "Genero": "MMORPG",
    "Copias": 120000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Blizzard Entertainment",
    "Perspectiva": "Terceira pessoa"
  },
  {
    "Nome": "StarCraft II",
    "Genero": "RTS",
    "Copias": 6000000,
    "Plataforma": "PC",
    "Desenvolvedora": "Blizzard Entertainment",
    "Perspectiva": "Visão isométrica"
  },
  {
    "Nome": "Diablo III",
    "Genero": "RPG",
    "Copias": 30000000,
    "Plataforma": "Multiplataforma",
    "Desenvolvedora": "Blizzard Entertainment",
    "Perspectiva": "Visão isométrica"
}]

  salvarJogos(jogos) // salva a biblioteca de jogos no localStorage
  console.log("Jogos inciais salvos.")
  return jogos            // retorna a biblioteca de jogos
}

// C R U D 

//Adiciona um novo jogo a biblioteca
const adicionarJogos = (jogos, novojogo) => [...jogos, novojogo]

// Atualiza um jogo
const atualizarJogos = (jogos, nome, updates) =>
  jogos.map(jogo => (jogo.Nome === nome ? { ...jogo, ...updates } : jogo))


// Apaga Jogos
const apagarJogos = (jogos, nome) =>
  jogos.filter(jogo => jogo.Nome !== nome)


// Lista Jogos
const listarJogos = jogos => jogos.map(jogo => `${jogo.Nome} — ${jogo.Copias} cópias — ${jogo.Desenvolvedora}`).join("<br>")

// Lista os jogos por genero

const listarJogosPorGenero = (jogos, genero) => {
const filtroGenero = jogos.filter(jogo => jogo.Genero.toLowerCase() === genero.toLowerCase())
  return filtroGenero.map(jogo => `${jogo.Nome} — ${jogo.Copias} cópias — ${jogo.Desenvolvedora}`).join("<br>")}

const filtrarTodosGeneros = ([x, ...xs]) => {
  if (x === undefined) return []
  else {
    const filtro = xs.filter(per => per.Genero.toLowerCase() !== x.Genero.toLowerCase())
    return [x.Genero, ...filtrarTodosGeneros(filtro)]
  }
}

// Mostra tudo do Jogo, menos tolerante 
const listarTudoJogo = (jogos, nome) => {
const tolerancia = nome.trim().toLowerCase()
const filtroNome = jogos.filter(jogo => jogo.Nome.toLowerCase().includes(tolerancia))
  return filtroNome.map(jogo => `${jogo.Nome} | Genero: ${jogo.Genero} | Plataforma: ${jogo.Plataforma}
| Desenvolvedora: ${jogo.Desenvolvedora} | Perspectiva: ${jogo.Perspectiva} | Cópias: ${jogo.Copias}`).join("<br>")}

// Filtra os Jogos por perspectiva
const filtrarperspectiva = (lista, perspectiva) => {
  const filtro = lista.filter((jogo) => jogo.Perspectiva.toLowerCase() === perspectiva.toLowerCase())
  return filtro.map((jogo) => `${jogo.Nome}`).join("<br>") //GUSTAVO mudei p n mostrar mais a perspectiva
}

const filtrartodasperspectivas = ([x, ...xs]) => {
  if (x === undefined) return []
  else {
    const filtro = xs.filter(per => per.Perspectiva.toLowerCase() !== x.Perspectiva.toLowerCase())
    return [x.Perspectiva, ...filtrartodasperspectivas(filtro)]
  }
}


// ... (código existente)

// API RAWG
const buscarJogoRAWG = async (nome) => {
  const apiKey = "1ccec18c13bb4f04a50b3b5c385ad52d"
  const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${nome}`
  
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar jogo:", error)
    return []
  }
}

const buscarDetalhesRAWG = async (id) => {
  const apiKey = "1ccec18c13bb4f04a50b3b5c385ad52d"
  const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`
  
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar detalhes do jogo:", error)
    return null
  }
}




// Pega um jogo aleatorio
const jogoAleatorio = (lista) => {
  if (lista.length === 0) return undefined
  const random_game = Math.floor(Math.random() * lista.length)
  return lista[random_game]
}




export const Jogos ={
  carregarJogos, resetarJogos, salvarJogos,
  //CRUD
  adicionarJogos, atualizarJogos, apagarJogos,
  // Listar
  listarTudoJogo, listarJogos, listarJogos, listarJogosPorGenero, jogoAleatorio,
  filtrarTodosGeneros,
  //filtros
  filtrarperspectiva, filtrartodasperspectivas,
  //api
  buscarJogoRAWG, buscarDetalhesRAWG
}
  



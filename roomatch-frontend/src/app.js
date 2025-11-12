const app = document.getElementById('app')


const routes = {
  '/inicio': {
    html: 'pages/inicio/index.html',
    css: 'pages/inicio/style.css',
    js: 'pages/inicio/script.js'
  },
  '/login': {
    html: 'pages/login/index.html',
    css: 'pages/login/style.css',
    js: 'pages/login/script.js'
  },
  '/': {
    html: 'pages/cadastrar-usuario/index.html',
    css: 'pages/cadastrar-usuario/style.css',
    js: 'pages/cadastrar-usuario/script.js'
  },
  '/chat': {
    html: 'pages/chat/index.html',
    css: 'pages/chat/style.css',
    js: 'pages/chat/script.js'
  },
  '/cadastrar-imovel': {
    html: 'pages/cadastrar-imovel/index.html',
    css: 'pages/cadastrar-imovel/style.css',
    js: 'pages/cadastrar-imovel/script.js'
  },
  '/detalhe': {
    html: 'pages/detalhe/index.html',
    css: 'pages/detalhe/style.css',
    js: 'pages/detalhe/script.js'
  },
  '/perfil-locador':{
    html: 'pages/perfil-locador/index.html',
    css: 'pages/perfil-locador/style.css',
    js: 'pages/perfil-locador/script.js'
  },
  '/perfil-locatario':{
    html: 'pages/perfil-locatario/index.html',
    css: 'pages/perfil-locatario/style.css',
    js: 'pages/perfil-locatario/script.js'
  },
}

const irPara = (path) => {
  window.location.hash = path
}

const managePageCSS = (newCSSPath) => {
  const oldLink = document.getElementById('page-specific-style')
  if (oldLink) oldLink.remove()

  if (newCSSPath) {
    const newLink = document.createElement('link')
    newLink.id = 'page-specific-style'
    newLink.rel = 'stylesheet'
    newLink.href = newCSSPath
    document.head.appendChild(newLink)
  }
}


const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (!src) return resolve()
    const oldScript = document.getElementById('page-specific-script')
    if (oldScript) oldScript.remove()

    const s = document.createElement('script')
    s.id = 'page-specific-script'
    s.src = src
    s.defer = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })

const router = async () => {
  const path = (window.location.hash.replace('#', '') || '/').split('?')[0]
  const route = routes[path]

  if (!route) {
    app.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>'
    managePageCSS(null)
    await loadScript(null)
    return
  }

  try {

    const response = await fetch(route.html, { cache: 'no-cache' })
    if (!response.ok) throw new Error(`Erro ao carregar: ${route.html}`)
    const html = await response.text()

    app.innerHTML = html

    managePageCSS(route.css)

    await loadScript(route.js)

    const mountFnName = path === '/inicio' ? 'mountInicio'
                  : path === '/detalhe' ? 'mountDetalhe'
                  : null;

    if (mountFnName && typeof window[mountFnName] === 'function') window[mountFnName]();

    } catch (error) {
    console.error(error)
    app.innerHTML = '<h1>Erro</h1><p>Não foi possível carregar a página.</p>'
    managePageCSS(null)
    await loadScript(null)
  }
}

window.database = {
  acomodacoes: [
    {
      id: 1,
      tipo: 'acomodacao',
      img: 'https://www.quintoandar.com.br/img/1200x800/original894907444-191.8289243765069sala1.1.jpeg',


      titulo: 'Apartamento em ssa',
      descricao: 'Excelente apartamento em Salvador, com suíte confortável e climatizada para garantir praticidade e bem-estar no dia a dia. O imóvel conta ainda com lavanderia funcional e ambientes bem planejados. O condomínio oferece uma infraestrutura completa, com piscina, sala de jogos e academia, proporcionando lazer e comodidade para toda a família.',
      preco: 'R$2500,00'
    },

    {
      id: 2,
      tipo: 'acomodacao',
      img: 'https://www.quintoandar.com.br/img/1200x800/original894885242-341.478554223613301.jpg',
      titulo: 'Apartamento em ssa',
      descricao: 'Excelente apartamento em Salvador, com suíte confortável e climatizada para garantir praticidade e bem-estar no dia a dia. O imóvel conta ainda com lavanderia funcional e ambientes bem planejados. O condomínio oferece uma infraestrutura completa, com piscina, sala de jogos e academia, proporcionando lazer e comodidade para toda a família.',
      preco: 'R$2500,00'
    },

    {
      id: 3,
      tipo: 'acomodacao',
      img: 'https://www.quintoandar.com.br/img/1200x800/original894907444-191.8289243765069sala1.1.jpeg',
      titulo: 'Apartamento em ssa',
      descricao: 'Excelente apartamento em Salvador, com suíte confortável e climatizada para garantir praticidade e bem-estar no dia a dia. O imóvel conta ainda com lavanderia funcional e ambientes bem planejados. O condomínio oferece uma infraestrutura completa, com piscina, sala de jogos e academia, proporcionando lazer e comodidade para toda a família.',
      preco: 'R$2500,00'
    },

    {
      id: 4,
      tipo: 'acomodacao',
      img: 'https://www.quintoandar.com.br/img/1200x800/original894885242-341.478554223613301.jpg',
      titulo: 'Apartamento em ssa',
      descricao: 'Excelente apartamento em Salvador, com suíte confortável e climatizada para garantir praticidade e bem-estar no dia a dia. O imóvel conta ainda com lavanderia funcional e ambientes bem planejados. O condomínio oferece uma infraestrutura completa, com piscina, sala de jogos e academia, proporcionando lazer e comodidade para toda a família.',
      preco: 'R$2500,00'
    },

    // {
    //   id: 5,
    //   tipo: 'acomodacao',
    //   img: 'https://www.quintoandar.com.br/img/1200x800/original894885242-341.478554223613301.jpg',
    //   titulo: 'Apartamento em ssa',
    //   descricao: 'Excelente apartamento em Salvador, com suíte confortável e climatizada para garantir praticidade e bem-estar no dia a dia. O imóvel conta ainda com lavanderia funcional e ambientes bem planejados. O condomínio oferece uma infraestrutura completa, com piscina, sala de jogos e academia, proporcionando lazer e comodidade para toda a família.',
    //   preco: 'R$2500,00'
    // },

  ],
  quartos: [
    {
      id: 1,
      tipo: 'quarto',
      img: 'https://photos.webquarto.com.br/property_ads/normal/2025-10/36625_ZzHrcT4a1Me3MBEJ.jpg',
      descricao: 'Quarto bom bonito e barato, no precinho e acessivel a qualquer estudante interessado',
      titulo: 'quarto em republica',
      preco: 'R$500,00'
    },

    {
      id: 2,
      tipo: 'quarto',
      img: 'https://photos.webquarto.com.br/property_ads/thumb/2024-06/82312_uMZW5QA5SngdJCAv.jpg',
      descricao: 'Quarto bom bonito e barato, no precinho e acessivel a qualquer estudante interessado',
      titulo: 'quarto em republica',
      preco: 'R$500,00'
    },


    {
      id: 3,
      tipo: 'quarto',
      img: 'https://photos.webquarto.com.br/property_ads/normal/2025-10/36625_ZzHrcT4a1Me3MBEJ.jpg',
      descricao: 'Quarto bom bonito e barato, no precinho e acessivel a qualquer estudante interessado',
      titulo: 'quarto em republica',
      preco: 'R$500,00'
    },


    {
      id: 4,
      tipo: 'quarto',
      img: 'https://photos.webquarto.com.br/property_ads/thumb/2024-06/82312_uMZW5QA5SngdJCAv.jpg',
      descricao: 'Quarto bom bonito e barato, no precinho e acessivel a qualquer estudante interessado',
      titulo: 'quarto em republica',
      preco: 'R$500,00'
    },

    // {
    //   id: 5,
    //   tipo: 'quarto',
    //   img: 'https://photos.webquarto.com.br/property_ads/normal/2025-10/36625_ZzHrcT4a1Me3MBEJ.jpg',
    //   descricao: 'Quarto bom bonito e barato, no precinho e acessivel a qualquer estudante interessado',
    //   titulo: 'quarto em republica',
    //   preco: 'R$500,00'
    // },

  ]
};


window.addEventListener('hashchange', router)
window.addEventListener('load', router)
window.irPara = irPara

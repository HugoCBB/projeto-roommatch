
const matchesPool = [
  {
    name: "Carlos Roberto",
    age: 19,
    photo: "https://imgs.search.brave.com/PWEQCgqN25hpbjfi7BXOPh9M-AvD-dzACvbD6JazlBQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM5L2Nj/LzExLzM5Y2MxMTNk/MmQ4M2YyODlmNzNk/M2RhZDk4NjA0MmIz/LmpwZw",
    desc: "Universitário, tranquilo e reservado. Não fuma, gosta de cachorros e prefere passar o tempo em casa, em ambientes calmos e acolhedores.",
    samples: [
      "Oi! Curti seu anúncio, podemos combinar de visitar?",
      "Trabalho de manhã e estudo à noite. Rola dividir?",
      "Gosto de manter a casa organizada. Tudo bem pra você?"
    ]
  },
  {
    name: "Isabel Souza",
    age: 24,
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=620&auto=format&fit=crop",
    desc: "Publicitária, ama plantas e café. Procura um lar aconchegante com boa iluminação natural.",
    samples: [
      "Amei o apê, pega sol pela manhã?",
      "Sou tranquila e curto cozinhar 🍝",
      "Você aceita pets pequenos?"
    ]
  },
  {
    name: "Joana Lima",
    age: 26,
    photo: "https://imgs.search.brave.com/44sWRw_AwM_PEBBH6tm-kFh_j8sgEKkE-_iZeY9EPbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmLzAy/LzAxLzNmMDIwMWVh/MWU4MmQ0ZWFmZDc1/ODY2YTY3YTkyMDQ0/LmpwZw",
    desc: "Mestranda, trabalha remoto 3x/semana. Prefere silêncio e rotina organizada.",
    samples: [
      "Oi! Seu anúncio parece perfeito pra mim!",
      "Costumo ficar em casa à tarde, tudo bem?",
      "Tem mercado perto?"
    ]
  },
  {
    name: "Ricardo Alves",
    age: 28,
    photo: "https://imgs.search.brave.com/tgn6icryR2JiG4F1wykJul-zAu0XSIGFDufk3M2AJao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2hvbWVtLWxvdWNv/LWV4cHJlc3Nhby10/cmlzdGVfMTE5NC00/NzY4LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    desc: "Engenheiro e ciclista de fim de semana. Gosta de manter tudo em ordem.",
    samples: [
      "Olá! Vaga ainda está disponível?",
      "Posso levar minha bike? Guardo direitinho.",
      "Tenho horários regrados, facilita a convivência."
    ]
  },
  {
    name: "Elton Figueiredo",
    age: 23,
    photo: "https://sindadosba.org.br/wp-content/uploads/2023/04/elton.jpg",
    desc: "Mestre em engenharia de software, fã de gatos e tirar ponto dos meus alunos.",
    samples: [
      "Curti muito a localização!",
      "Trabalho remoto, prometo silêncio nas calls 😅",
      "Você se importa com um gato bem comportado?"
    ]
  },
  {
    name: "Pedro Henrique",
    age: 27,
    photo: "https://imgs.search.brave.com/TNk290OZW-au1aEwZrz2WhJLP6Gn4Lsbx6JRqijC-V4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzI5/Lzc1LzY5Mjk3NWVl/NTNkZTNiNjNmM2Mz/OWM1ZTI1ZTIxMDhj/LmpwZw",
    desc: "Jogador de free-fire.",
    samples: [
      "Tudo bem? Vi seu anúncio e queria mais detalhes.",
      "Tenho rotina so de capa no fogarel gratis, sem barulho nem rage em casa.",
      "Podemos marcar uma visita?"
    ]
  }
];

const contactsData = [
  {
    id: "michael",
    name: "Michael",
    initial: "M",
    status: "online",
    messages: [
      { from: "them", text: "Oi! Vi que o apartamento que você alugou tá disponível" },
      { from: "me", text: "Oi! Sim, decidi fazer um roommate." },
      { from: "them", text: "Você toparia dividir comigo?" },
      { from: "me", text: "Talvez. Me passa mais sobre você!" },
      { from: "them", text: "Tenho 29 anos, trabalho de manhã e estudo à noite" },
      { from: "me", text: "Legal, parece que vai dar certo." },
      { from: "them", text: "Ótimo! Vamos marcar pra ver o imóvel?" }
    ]
  },
  {
    id: "ricardo",
    name: "Ricardo",
    initial: "R",
    status: "visto há 2h",
    messages: [{ from: "them", text: "Fala! Bora jogar amanhã?" }]
  },
  {
    id: "pedro",
    name: "Pedro",
    initial: "P",
    status: "ocupado",
    messages: [
      { from: "them", text: "Enviei os arquivos do projeto." },
      { from: "me", text: "Recebi. Vou revisar hoje." }
    ]
  }
];


const contacts = document.getElementById("contacts");
const messages = document.getElementById("messages");
const form = document.getElementById("composer");
const input = document.getElementById("messageInput");
const peerName = document.getElementById("peerName");
const peerStatus = document.getElementById("peerStatus");
const peerAvatar = document.getElementById("peerAvatar");
const toggleSidebar = document.getElementById("toggleSidebar");
const newContactBtn = document.getElementById("novoContatoBtn");

const matchOverlay = document.getElementById("matchOverlay");
const mcPhoto = document.getElementById("mcPhoto");
const mcName = document.getElementById("mcName");
const mcAge = document.getElementById("mcAge");
const mcDesc = document.getElementById("mcDesc");
const mcAccept = document.getElementById("mcAccept");
const mcReject = document.getElementById("mcReject");
const mcClose = document.getElementById("mcClose");

let activeId = null;
let currentProfile = null;


const renderContacts = () => {
  contacts.innerHTML = "";
  contactsData.forEach((c, idx) => {
    const li = document.createElement("li");
    li.className = "contact";
    li.id = "c-" + c.id;
    li.setAttribute("role", "option");
    li.setAttribute("tabindex", "0");
    li.setAttribute("aria-selected", c.id === activeId ? "true" : "false");

    const avatarInner = c.photo
      ? `<img src="${c.photo}" alt="${c.name}">`
      : `${c.initial || "?"}`;

    li.innerHTML = `
      <div class="avatar">${avatarInner}</div>
      <div class="meta">
        <strong>${c.name}</strong>
        <span>${c.status || ""}</span>
      </div>
    `;

    li.addEventListener("click", () => openChat(c.id));
    li.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") openChat(c.id);
    });

    contacts.appendChild(li);
    if (activeId === null && idx === 0) openChat(c.id);
  });
};


const openChat = (id) => {
  activeId = id;
  const contact = contactsData.find(c => c.id === id);
  if (!contact) return;

  peerName.textContent = contact.name;
  peerStatus.textContent = contact.status || "";
  peerAvatar.innerHTML = contact.photo
    ? `<img src="${contact.photo}" alt="${contact.name}">`
    : (contact.initial || "?");

  messages.innerHTML = "";
  contact.messages.forEach(addMessage);

  [...contacts.children].forEach(li =>
    li.setAttribute("aria-selected", li.id === "c-" + id ? "true" : "false")
  );

  document.querySelector(".sidebar")?.classList.remove("open");
  input.focus();
};


const addMessage = ({ from, text }) => {
  const row = document.createElement("div");
  row.className = "row" + (from === "me" ? " me" : "");
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text || !activeId) return;

  const contact = contactsData.find(c => c.id === activeId);
  contact.messages.push({ from: "me", text });

  addMessage({ from: "me", text });
  input.value = "";

  setTimeout(() => {
    const reply = { from: "them", text: "👍" };
    contact.messages.push(reply);
    addMessage(reply);
  }, 500);
});


toggleSidebar?.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});


const pickRandomProfile = () => {
  currentProfile = matchesPool[Math.floor(Math.random() * matchesPool.length)];

  mcPhoto.src = currentProfile.photo;
  mcName.textContent = currentProfile.name;
  mcAge.textContent = `${currentProfile.age} anos`;
  mcDesc.textContent = currentProfile.desc;
}

function openMatchOverlay() {
  pickRandomProfile();
  matchOverlay.classList.add("open");
  matchOverlay.setAttribute("aria-hidden", "false");
}

function closeMatchOverlay() {
  matchOverlay.classList.remove("open");
  matchOverlay.setAttribute("aria-hidden", "true");
  currentProfile = null;
}


newContactBtn.addEventListener("click", openMatchOverlay);

mcReject.addEventListener("click", closeMatchOverlay);
mcClose.addEventListener("click", closeMatchOverlay);

mcAccept.addEventListener("click", () => {
  if (!currentProfile) return;
  const hello = currentProfile.samples[Math.floor(Math.random() * currentProfile.samples.length)];
  const id = currentProfile.name.toLowerCase().replace(/\s+/g, "-") + "-" + Math.floor(Math.random() * 999);

  const novoMatch = {
    id,
    name: currentProfile.name,
    initial: currentProfile.name[0].toUpperCase(),
    photo: currentProfile.photo,
    status: "✨ Deu match!",
    messages: [
      { from: "them", text: `É um match! Sou ${currentProfile.name}.` },
      { from: "them", text: currentProfile.desc },
      { from: "them", text: hello }
    ]
  };

  contactsData.unshift(novoMatch);
  renderContacts();
  openChat(novoMatch.id);
  closeMatchOverlay();
});


renderContacts();

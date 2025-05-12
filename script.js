const translations = {
  en: {
    mainTitle: "Web Systems Portfolio",
    mainSubtitle: "Showcasing my best web projects and skills",
    projectsTitle: "Featured Projects",
    skillsTitle: "Skills",
    footerText: "© 2024 Maycon Rocha. All rights reserved.",
    langBtn: "PT-BR",
    projects: [
      {
        title: "Curriculum Management System",
        desc: 'A robust platform for managing résumés and professional profiles. <a href="https://www.sistemasage.com.br" target="_blank">Visit</a>'
      },
      {
        title: "Class Management System",
        desc: 'A complete solution for educational class scheduling and management. <a href="https://paebeducacional.com.br" target="_blank">Visit</a>'
      },
      {
        title: "Academic Records Management",
        desc: "System for managing academic processes and student records."
      },
      {
        title: "Student Meal Management",
        desc: "Platform for managing student meal distribution and records."
      },
      {
        title: "Warehouse Management",
        desc: "System for inventory and supply management."
      },
      {
        title: "Raffle & Key Control",
        desc: "Tools for managing raffles, key access, and computer lab entry."
      }
    ]
  },
  pt: {
    mainTitle: "Portfólio de Sistemas Web",
    mainSubtitle: "Apresentando meus melhores projetos e habilidades em web",
    projectsTitle: "Projetos em Destaque",
    skillsTitle: "Habilidades",
    footerText: "© 2024 Maycon Rocha. Todos os direitos reservados.",
    langBtn: "EN",
    projects: [
      {
        title: "Sistema de Gerenciamento de Currículos",
        desc: 'Plataforma robusta para gestão de currículos e perfis profissionais. <a href="https://www.sistemasage.com.br" target="_blank">Visitar</a>'
      },
      {
        title: "Sistema de Gerenciamento de Aulas",
        desc: 'Solução completa para agendamento e gestão de aulas. <a href="https://paebeducacional.com.br" target="_blank">Visitar</a>'
      },
      {
        title: "Gestão de Processos Acadêmicos",
        desc: "Sistema para gerenciamento de processos e registros acadêmicos."
      },
      {
        title: "Gestão de Alimentação Estudantil",
        desc: "Plataforma para controle de distribuição e registros de alimentação estudantil."
      },
      {
        title: "Gestão de Almoxarifado",
        desc: "Sistema para controle de estoque e suprimentos."
      },
      {
        title: "Sorteio & Controle de Chaves",
        desc: "Ferramentas para sorteios, controle de chaves e acesso a laboratórios."
      }
    ]
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById('mainTitle').textContent = t.mainTitle;
  document.getElementById('mainSubtitle').textContent = t.mainSubtitle;
  document.getElementById('projectsTitle').textContent = t.projectsTitle;
  document.getElementById('skillsTitle').textContent = t.skillsTitle;
  document.getElementById('footerText').textContent = t.footerText;
  document.getElementById('langBtn').textContent = t.langBtn;

  // Atualiza os projetos
  const cards = document.querySelectorAll('.card');
  t.projects.forEach((proj, i) => {
    if (cards[i]) {
      cards[i].querySelector('.card-title').textContent = proj.title;
      cards[i].querySelector('.card-text').innerHTML = proj.desc;
    }
  });
}

document.getElementById('langBtn').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  setLanguage(currentLang);
});

// Inicializa com inglês
setLanguage('en'); 
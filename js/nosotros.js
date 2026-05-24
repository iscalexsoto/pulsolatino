const FALLBACK_CONTENT = {
  site: {
    whatsappPhone: "529994195286",
    whatsappDefaultMessage: "Hola! Me gustaría información sobre las clases de Pulso Latino",
    footer: {
      whatsappText: "WhatsApp: 999 419 5286",
      locationText: "Av. Madero · Pacabtún · Mérida, Yucatán",
      copyrightText: "© 2026 Pulso Latino · Estudio de Danza y Baile Latino",
      socials: [
        { icon: "fa-brands fa-facebook-f", label: "PulsoLatinoMid", href: "https://www.facebook.com/PulsoLatinoMid" },
        { icon: "fa-brands fa-instagram", label: "@pulso_latino", href: "https://www.instagram.com/pulso_latino/" }
      ]
    },
    floatingWhatsapp: {
      label: "Escríbenos",
      message: "Hola! Me gustaría información sobre las clases de Pulso Latino"
    }
  },
  about: {
    hero: {
      tagline: "El lugar donde tus sueños encuentran el ritmo",
      title: "PULSO LATINO"
    },
    about: {
      sectionLabel: "Pulso Latino Estudio",
      sectionTitle: "Quiénes somos",
      paragraphs: [
        "En PULSO LATINO ESTUDIO creemos que la danza es más que movimiento: es pasión, crecimiento y conexión. Somos un estudio dedicado a la enseñanza y promoción del baile latino, en ritmos como SALSA, BACHATA, CUMBIA, MERENGUE Y CHACHACHÁ creando un espacio donde jóvenes y adultos pueden interactuar en un ambiente de respeto, desarrollar su talento, confianza y amor por la danza",
        "Nuestro compromiso es brindar una formación dancística de calidad en un ambiente dinámico, inclusivo y motivador, guiamos a cada estudiante en su crecimiento personal y dancístico. Buscamos inspirar valores como trabajo en equipo, amistad y respeto a todos, porque todos son capaces de aprender no importando la edad.",
        "En PULSO, cada clase es una experiencia llena de energía, aprendizaje y diversión, porque creemos que los sueños también se bailan."
      ],
      quote: "El lugar donde tus sueños encuentran el ritmo."
    },
    director: {
      sectionLabel: "Liderazgo",
      sectionTitle: "Nuestro director",
      name: "David Sinué Zalapa Requena",
      bio: "Director de Pulso Latino Estudio, impulsando con pasión la formación dancística, el crecimiento personal y la conexión de la comunidad a través del ritmo latino.",
      image: "assets/images/david_zalapa.png",
      imageAlt: "David Sinué Zalapa Requena, director de Pulso Latino Estudio"
    },
    history: {
      sectionLabel: "Nuestra trayectoria",
      sectionTitle: "Historia",
      items: [
        {
          title: "Inicio del sueño",
          description: "Pulso Latino Estudio se inaugura un 26 de enero 2016, por el Mtro. David Zalapa Requena después de 7 años de haber iniciado su carrera en el mundo de la danza, estuvo tomando clases y curso en disciplinas como ballet, Jazz, hawaiano, Hip hop y posteriormente salsa."
        },
        {
          title: "Competencias nacionales",
          description: "En el 2012, 2013 y 2014 participó en múltiples competencias a nivel nacional obteniendo primeros lugares en competencias como...",
          bullets: ["Mérida baila", "Euroson Latino", "Entre otras competencias locales y nacionales"]
        },
        {
          title: "Impacto en Mérida",
          description: "También ha sido coreógrafo de personalidades en Mérida como Malena Barquín conductora destacada en el estado, fue creador de UNIDOS X LA DANZA una de las demostraciones dancísticas en Mérida más impresionantes donde combina baile, música y circo."
        },
        {
          title: "Consolidación de Pulso",
          description: "Los inicios de la academia fueron en la Col. Bojórquez lugar perteneciente a unas grandes personalidades de la salsa \"LOS PADRINOS\" la cual apoyaron mucho para el inicio de este sueño así como otras personas confiaron en mi trabajo, hoy la academia tiene 10 años de haber iniciado y se consolida como una de las academias con más años activa."
        }
      ]
    },
    values: {
      sectionLabel: "Nuestra esencia",
      sectionTitle: "Valores",
      items: [
        {
          name: "Pasión",
          description: "Vivimos y enseñamos el baile con energía, amor y entrega en cada clase y presentación."
        },
        {
          name: "Excelencia",
          description: "Buscamos siempre ofrecer enseñanza de calidad y formar bailarines seguros, preparados e inspiradores."
        },
        {
          name: "Respeto",
          description: "Valoramos a cada persona, promoviendo un ambiente inclusivo, amable y de trabajo en equipo."
        },
        {
          name: "Creatividad",
          description: "Impulsamos la expresión artística, la innovación y el desarrollo del estilo propio en cada alumno."
        },
        {
          name: "Disciplina",
          description: "Fomentamos el compromiso, la constancia y el esfuerzo como base del crecimiento dancístico y personal.",
          wide: true
        }
      ]
    },
    missionVision: {
      sectionLabel: "Mirando al futuro",
      sectionTitle: "Misión y Visión",
      missionTitle: "Misión",
      missionText: "Brindar enseñanza de danza y baile latino con pasión, disciplina y creatividad, creando un espacio donde las personas desarrollen su talento, confianza y amor por el baile en un ambiente inclusivo y motivador.",
      visionTitle: "Visión",
      visionText: "Ser un estudio de danza reconocido por formar bailarines y bailadores con excelencia artística y humana, inspirando a la comunidad a vivir el ritmo latino como una forma de expresión, crecimiento y felicidad."
    },
    finalCta: {
      title: "Vive Pulso con nosotros",
      description: "Estamos listos para acompañarte en tu camino dancístico, con clases llenas de energía y una comunidad que te impulsa a crecer.",
      buttonLabel: "Escríbenos por WhatsApp",
      buttonHref: "https://wa.me/529994195286?text=Hola%2C%20me%20gustaria%20informacion%20sobre%20Pulso%20Latino%20Estudio"
    }
  }
};

let revealObserver;

function getRenderers() {
  if (!window.PulsoRenderers) {
    throw new Error("PulsoRenderers no está disponible.");
  }
  return window.PulsoRenderers;
}

async function fetchJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("status " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.warn("[content] using fallback for " + path, error);
    return fallback;
  }
}

function initRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

function initMobileMenu() {
  const nav = document.querySelector("nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!nav || !toggle || !links) return;

  const setOpen = (isOpen) => {
    nav.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("nav-open"));
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  });
}

async function boot() {
  const [site, about] = await Promise.all([
    fetchJson("content/site.json", FALLBACK_CONTENT.site),
    fetchJson("content/nosotros.json", FALLBACK_CONTENT.about)
  ]);

  const renderers = getRenderers();
  renderers.renderSharedSite(document, site);
  renderers.renderAboutContent(document, about);

  initRevealObserver();
  initMobileMenu();
}

boot();

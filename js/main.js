const FALLBACK_CONTENT = {
  site: {
    whatsappPhone: "529994195286",
    navLinks: [
      { label: "Nosotros", href: "nosotros.html", icon: "fa-solid fa-users" },
      { label: "Horarios", href: "#horarios", icon: "fa-solid fa-clock" },
      { label: "Precios", href: "#precios", icon: "fa-solid fa-coins" },
      { label: "Ubicación", href: "#ubicacion", icon: "fa-solid fa-location-dot" },
      { label: "Eventos", href: "#eventos", icon: "fa-solid fa-calendar-day" }
    ],
    hero: {
      tagline: "El lugar donde tus suenos encuentran el ritmo",
      headlinePrefix: "Aprende a",
      headlineHighlight: "Bailar",
      subheadline: "Salsa · Bachata · Cumbia<br>2 sucursales en Merida, Yucatan",
      primaryCtaLabel: "Informes por WhatsApp",
      primaryCtaHref: "https://wa.me/529994195286?text=Hola!%20Me%20gustaria%20informacion%20sobre%20las%20clases%20de%20Pulso%20Latino",
      secondaryCtaLabel: "Empieza a bailar hoy ↓",
      secondaryCtaHref: "#about-teaser"
    },
    schedulesSection: {
      label: "Nuestras clases",
      title: "HORARIOS",
      branches: [
        {
          id: "madero",
          label: "Av. Madero",
          icon: "fa-solid fa-location-dot",
          ctaLabel: "Agenda tu clase",
          ctaHref: "https://wa.me/529994195286?text=Hola%2C%20me%20gustaria%20informacion%20sobre%20las%20clases%20en%20Av.%20Madero"
        },
        {
          id: "pacabtun",
          label: "Pacabtun",
          icon: "fa-solid fa-location-dot",
          ctaLabel: "Agenda tu clase",
          ctaHref: "https://wa.me/529994195286?text=Hola%2C%20me%20gustaria%20informacion%20sobre%20las%20clases%20en%20Pacabtun"
        }
      ]
    },
    pricesSection: {
      label: "Sin inscripcion para nuevos alumnos",
      title: "PRECIOS",
      ctaLabel: "Pregunta por nuestras promociones",
      ctaHref: "https://wa.me/529994195286?text=Hola%2C%20me%20gustaria%20informacion%20acerca%20de%20promociones"
    },
    eventsSection: {
      label: "Flyers y promociones",
      title: "EVENTOS"
    },
    footer: {
      locationText: "Av. Madero · Pacabtun · Merida, Yucatan",
      whatsappText: "WhatsApp: 999 419 5286",
      copyrightText: "© 2025 Pulso Latino · Estudio de Danza y Baile Latino"
    },
    floatingWhatsapp: {
      label: "Escribenos",
      href: "https://wa.me/529994195286?text=Hola!%20Me%20gustaria%20informacion%20sobre%20las%20clases%20de%20Pulso%20Latino"
    }
  },
  schedules: {
    branches: [
      {
        id: "madero",
        dayGroups: [
          {
            dayTitle: "Martes y Jueves",
            classes: [
              { time: "7:15 PM", style: "cumbia", name: "Cumbia" },
              { time: "8:15 PM", style: "salsa", name: "Salsa desde cero", area: "Area 1" },
              { time: "8:15 PM", style: "salsa", name: "Salsa Iniciados 3", area: "Area 2" },
              { time: "9:15 PM", style: "bachata", name: "Bachata" }
            ]
          }
        ]
      },
      {
        id: "pacabtun",
        dayGroups: [
          {
            dayTitle: "Lunes, Miercoles y Viernes",
            classes: [{ time: "8:00 AM", style: "cardio", name: "Cardio Baile Ritmos Latinos" }]
          },
          {
            dayTitle: "Lunes y Miercoles",
            classes: [
              { time: "10:00 AM", style: "bachata", name: "Bachata desde cero" },
              { time: "7:15 PM", style: "salsa", name: "Salsa desde cero" },
              { time: "8:15 PM", style: "salsa", name: "Salsa nivel 2" },
              { time: "9:15 PM", style: "bachata", name: "Bachata" }
            ]
          },
          {
            dayTitle: "Martes y Jueves",
            classes: [
              { time: "8:00 AM", style: "bachata", name: "Bachata Ladies" },
              { time: "9:00 AM", style: "salsa", name: "Salsa nivel 1" },
              { time: "10:00 AM", style: "salsa", name: "Salsa desde cero" }
            ]
          },
          {
            dayTitle: "Viernes y Sabados",
            classes: [
              { time: "7:00 PM", style: "salsa", name: "Salsa desde cero" },
              { time: "8:00 PM", style: "bachata", name: "Bachata entrenamiento" },
              { time: "9:00 PM", style: "cumbia", name: "Cumbia intensivo" }
            ]
          }
        ]
      }
    ]
  },
  prices: {
    promoHtml: "<i class=\"fa-solid fa-sparkles\" aria-hidden=\"true\"></i><strong>Promocion nuevo ingreso:</strong> Sin inscripcion + <strong>$350/mes los primeros 2 meses</strong> (individual, 1 ritmo)",
    individualTitle: "INDIVIDUAL",
    individualPlans: [
      { icon: "fa-solid fa-person", name: "1 Ritmo", description: "Salsa, Bachata o Cumbia nocturno", amount: "$400", suffix: "/mes" },
      { icon: "fa-solid fa-person-running", name: "2 Ritmos", description: "Cualquier combinacion por sucursal", amount: "$600", suffix: "/mes" },
      { icon: "fa-solid fa-star", name: "3 Ritmos", description: "Salsa, Bachata y Cumbia · 2 sucursales", amount: "$800", suffix: "/mes" },
      { icon: "fa-solid fa-sun", name: "Full Morning", description: "Solo clases matutinas", amount: "$750", suffix: "/mes" },
      { icon: "fa-solid fa-crown", name: "Pase Completo", description: "Todas las clases · Madero y Pacabtun · Todos los horarios", amount: "$1,000", suffix: "/mes", featured: true, badge: "FULL" }
    ],
    coupleTitle: "EN PAREJA",
    couplePlans: [
      { icon: "fa-solid fa-heart", name: "1 Ritmo", description: "Promo primeros 2 meses: $550 x pareja", amount: "$700", suffix: "/mes" },
      { icon: "fa-solid fa-user-group", name: "2 Ritmos", description: "Promo primeros 2 meses: $900 x pareja", amount: "$1,200", suffix: "/mes" },
      { icon: "fa-solid fa-trophy", name: "3 Ritmos", description: "La experiencia completa en pareja", amount: "$1,500", suffix: "/mes" }
    ],
    finePrint: "* Precios respetados para familia, antiguedad y permanencia activa de mas de un ano. La clase de Ritmos Latinos matutina es $450/mes (3 veces por semana)."
  },
  events: {
    items: [
      { image: "assets/flyers/flyer-aniversario.png", alt: "10 Aniversario Pulso Latino Conexiones" },
      { image: "assets/flyers/flyer-precios-conexiones.png", alt: "Precios Conexiones" },
      { image: "assets/flyers/flyer-cumbia-pacabtun.png", alt: "Cumbia Pacabtun" },
      { image: "assets/flyers/flyer-madero-noche.png", alt: "Noche en Sucursal Madero" },
      { image: "assets/flyers/flyer-mananas-pacabtun.png", alt: "Mananas Pacabtun" },
      { image: "assets/flyers/flyer-precios-individual.png", alt: "Precios Individual" },
      { image: "assets/flyers/flyer-precios-pareja.png", alt: "Precios Pareja" }
    ]
  }
};

let revealObserver;

function getRenderers() {
  if (!window.PulsoRenderers) {
    throw new Error("PulsoRenderers no está disponible.");
  }
  return window.PulsoRenderers;
}

function switchTab(id) {
  getRenderers().switchTab(document, id);
}

function openLightbox(src, alt) {
  const image = document.getElementById("lightbox-img");
  const lightbox = document.getElementById("lightbox");
  if (!image || !lightbox) return;

  image.src = src;
  image.alt = alt || "";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
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

function initSmoothAnchorScroll() {
  const clearHashFromUrl = () => {
    const cleanUrl = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", cleanUrl);
  };

  const animateScrollTo = (targetTop, durationMs = 500) => {
    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    if (Math.abs(distance) < 2) {
      clearHashFromUrl();
      return;
    }

    const startTime = performance.now();
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeInOut(progress);

      window.scrollTo(0, startTop + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        clearHashFromUrl();
      }
    };

    requestAnimationFrame(step);
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      event.preventDefault();

      if (href === "#top") {
        animateScrollTo(0);
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      const nav = document.querySelector("nav");
      const navOffset = nav ? nav.offsetHeight + 12 : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

      animateScrollTo(targetTop);
    });
  });
}

function scrollToSectionFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const sectionId = params.get("go");
  if (!sectionId) return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  const nav = document.querySelector("nav");
  const navOffset = nav ? nav.offsetHeight + 12 : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth"
  });

  const cleanUrl = window.location.pathname + (window.location.hash || "");
  window.history.replaceState(null, "", cleanUrl);
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
    const nextState = !nav.classList.contains("nav-open");
    setOpen(nextState);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

window.switchTab = switchTab;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

async function boot() {
  const [site, schedules, prices, events] = await Promise.all([
    fetchJson("content/site.json", FALLBACK_CONTENT.site),
    fetchJson("content/schedules.json", FALLBACK_CONTENT.schedules),
    fetchJson("content/prices.json", FALLBACK_CONTENT.prices),
    fetchJson("content/events.json", FALLBACK_CONTENT.events)
  ]);

  const renderers = getRenderers();
  renderers.renderLandingSiteContent(document, site);
  renderers.renderSchedules(document, site, schedules);
  renderers.renderPrices(document, prices);
  renderers.renderEvents(document, events, { onSelect: openLightbox });

  initRevealObserver();
  initSmoothAnchorScroll();
  initMobileMenu();
  requestAnimationFrame(() => requestAnimationFrame(scrollToSectionFromQuery));
}

boot();

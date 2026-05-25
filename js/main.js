const FALLBACK_CONTENT = {
  site: {
    whatsappPhone: "529994195286",
    whatsappDefaultMessage: "Hola! Me gustaría información sobre las clases de Pulso Latino",
    hero: {
      tagline: "El lugar donde tus suenos encuentran el ritmo",
      headlinePrefix: "Aprende a",
      headlineHighlight: "Bailar",
      subheadline: "Salsa · Bachata · Cumbia<br>2 sucursales en Merida, Yucatan",
      primaryCtaLabel: "Informes por WhatsApp",
      primaryCtaMessage: "Hola! Me gustaría información sobre las clases de Pulso Latino",
      secondaryCtaLabel: "Empieza a bailar hoy ↓"
    },
    footer: {
      locationText: "Av. Madero · Pacabtun · Merida, Yucatan",
      whatsappText: "WhatsApp: 999 419 5286",
      copyrightText: "© 2025 Pulso Latino · Estudio de Danza y Baile Latino",
      socials: [
        { label: "PulsoLatinoMid", href: "https://www.facebook.com/PulsoLatinoMid" },
        { label: "@pulso_latino", href: "https://www.instagram.com/pulso_latino/" }
      ]
    },
    floatingWhatsapp: {
      label: "Escribenos",
      message: "Hola! Me gustaría información sobre las clases de Pulso Latino"
    }
  },
  schedules: {
    sectionLabel: "Nuestras clases",
    sectionTitle: "HORARIOS",
    branches: [
      {
        id: "madero",
        label: "Av. Madero",
        ctaLabel: "Agenda tu clase",
        ctaMessage: "Hola, me gustaría información sobre las clases en Av. Madero",
        dayGroups: [
          {
            dayTitle: "Martes y Jueves",
            classes: [
              { time: "7:15 PM", color: "amarillo", name: "Cumbia" },
              { time: "8:15 PM", color: "rojo", name: "Salsa desde cero", area: "Area 1" },
              { time: "8:15 PM", color: "rojo", name: "Salsa Iniciados 3", area: "Area 2" },
              { time: "9:15 PM", color: "morado", name: "Bachata" }
            ]
          }
        ]
      },
      {
        id: "pacabtun",
        label: "Pacabtún",
        ctaLabel: "Agenda tu clase",
        ctaMessage: "Hola, me gustaría información sobre las clases en Pacabtún",
        dayGroups: [
          {
            dayTitle: "Lunes, Miercoles y Viernes",
            classes: [{ time: "8:00 AM", color: "verde", name: "Cardio Baile Ritmos Latinos" }]
          },
          {
            dayTitle: "Lunes y Miercoles",
            classes: [
              { time: "10:00 AM", color: "morado", name: "Bachata desde cero" },
              { time: "7:15 PM", color: "rojo", name: "Salsa desde cero" },
              { time: "8:15 PM", color: "rojo", name: "Salsa nivel 2" },
              { time: "9:15 PM", color: "morado", name: "Bachata" }
            ]
          },
          {
            dayTitle: "Martes y Jueves",
            classes: [
              { time: "8:00 AM", color: "morado", name: "Bachata Ladies" },
              { time: "9:00 AM", color: "rojo", name: "Salsa nivel 1" },
              { time: "10:00 AM", color: "rojo", name: "Salsa desde cero" }
            ]
          },
          {
            dayTitle: "Viernes y Sabados",
            classes: [
              { time: "7:00 PM", color: "rojo", name: "Salsa desde cero" },
              { time: "8:00 PM", color: "morado", name: "Bachata entrenamiento" },
              { time: "9:00 PM", color: "amarillo", name: "Cumbia intensivo" }
            ]
          }
        ]
      }
    ]
  },
  prices: {
    sectionLabel: "Sin inscripción para nuevos alumnos",
    sectionTitle: "PRECIOS",
    ctaLabel: "Pregunta por nuestras promociones",
    ctaMessage: "Hola, me gustaría información acerca de promociones",
    promoHtml: "<i class=\"fa-solid fa-sparkles\" aria-hidden=\"true\"></i><strong>Promocion nuevo ingreso:</strong> Sin inscripcion + <strong>$350/mes los primeros 2 meses</strong> (individual, 1 ritmo)",
    sections: [
      {
        title: "INDIVIDUAL",
        packages: [
          { iconImage: "", name: "1 Ritmo", description: "Salsa, Bachata o Cumbia nocturno", amount: "$400", suffix: "/mes" },
          { iconImage: "", name: "2 Ritmos", description: "Cualquier combinacion por sucursal", amount: "$600", suffix: "/mes" },
          { iconImage: "", name: "3 Ritmos", description: "Salsa, Bachata y Cumbia · 2 sucursales", amount: "$800", suffix: "/mes" },
          { iconImage: "", name: "Full Morning", description: "Solo clases matutinas", amount: "$750", suffix: "/mes" },
          { iconImage: "", name: "Pase Completo", description: "Todas las clases · Madero y Pacabtun · Todos los horarios", amount: "$1,000", suffix: "/mes", featured: true, badge: "FULL" }
        ]
      },
      {
        title: "EN PAREJA",
        packages: [
          { iconImage: "", name: "1 Ritmo", description: "Promo primeros 2 meses: $550 x pareja", amount: "$700", suffix: "/mes" },
          { iconImage: "", name: "2 Ritmos", description: "Promo primeros 2 meses: $900 x pareja", amount: "$1,200", suffix: "/mes" },
          { iconImage: "", name: "3 Ritmos", description: "La experiencia completa en pareja", amount: "$1,500", suffix: "/mes" }
        ]
      }
    ],
    finePrint: "* Precios respetados para familia, antiguedad y permanencia activa de mas de un ano. La clase de Ritmos Latinos matutina es $450/mes (3 veces por semana)."
  },
  announcements: {
    sectionLabel: "Flyers y promociones",
    sectionTitle: "EVENTOS",
    announcements: [
      { image: "/assets/flyers/flyer-aniversario.png", title: "10 Aniversario Pulso Latino Conexiones", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-precios-conexiones.png", title: "Precios Conexiones", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-cumbia-pacabtun.png", title: "Cumbia Pacabtun", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-madero-noche.png", title: "Noche en Sucursal Madero", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-mananas-pacabtun.png", title: "Mananas Pacabtun", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-precios-individual.png", title: "Precios Individual", linkText: "", link: "" },
      { image: "/assets/flyers/flyer-precios-pareja.png", title: "Precios Pareja", linkText: "", link: "" }
    ]
  },
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

function normalizeAnnouncementLink(rawLink) {
  const value = String(rawLink || "").trim();
  if (!value) return "";
  const lower = value.toLowerCase();
  if (lower.startsWith("http://") || lower.startsWith("https://") || lower.startsWith("mailto:") || lower.startsWith("tel:")) {
    return value;
  }
  if (value.startsWith("#") || value.startsWith("/")) return "";
  if (lower.startsWith("www.")) return "https://" + value;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(value)) return "https://" + value;
  return "";
}

function openLightbox(src, title, linkText, link) {
  const image = document.getElementById("lightbox-img");
  const lightbox = document.getElementById("lightbox");
  const titleNode = document.getElementById("lightbox-title");
  const linkNode = document.getElementById("lightbox-link");
  if (!image || !lightbox) return;

  image.src = src;
  image.alt = title || "";

  if (titleNode) {
    titleNode.textContent = title || "";
    titleNode.hidden = !title;
  }

  if (linkNode) {
    const normalizedLink = normalizeAnnouncementLink(link);
    const hasLink = Boolean(normalizedLink);
    const label = String(linkText || "").trim() || "Ir a la publicación";
    linkNode.textContent = label;
    if (hasLink) {
      linkNode.setAttribute("href", normalizedLink);
    } else {
      linkNode.removeAttribute("href");
    }
    linkNode.hidden = !hasLink;
  }

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
  const [site, schedules, prices, announcements] = await Promise.all([
    fetchJson("content/site.json", FALLBACK_CONTENT.site),
    fetchJson("content/schedules.json", FALLBACK_CONTENT.schedules),
    fetchJson("content/prices.json", FALLBACK_CONTENT.prices),
    fetchJson("content/announcements.json", FALLBACK_CONTENT.announcements)
  ]);

  const renderers = getRenderers();
  renderers.renderLandingSiteContent(document, site);
  renderers.renderSchedules(document, schedules, site);
  renderers.renderPrices(document, prices, site);
  renderers.renderAnnouncements(document, announcements, { onSelect: openLightbox });

  initRevealObserver();
  initSmoothAnchorScroll();
  initMobileMenu();
  requestAnimationFrame(() => requestAnimationFrame(scrollToSectionFromQuery));
}

boot();

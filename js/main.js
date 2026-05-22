const FALLBACK_CONTENT = {
  site: {
    whatsappPhone: "529994195286",
    navLinks: [
      { label: "Horarios", href: "#horarios", icon: "fa-solid fa-clock" },
      { label: "Precios", href: "#precios", icon: "fa-solid fa-coins" },
      { label: "Eventos", href: "#eventos", icon: "fa-solid fa-calendar-day" },
      { label: "Nosotros", href: "nosotros.html", icon: "fa-solid fa-users" }
    ],
    hero: {
      tagline: "El lugar donde tus suenos encuentran el ritmo",
      headlinePrefix: "Aprende a",
      headlineHighlight: "Bailar",
      subheadline: "Salsa · Bachata · Cumbia<br>2 sucursales en Merida, Yucatan",
      primaryCtaLabel: "Informes por WhatsApp",
      primaryCtaHref: "https://wa.me/529994195286?text=Hola!%20Me%20gustaria%20informacion%20sobre%20las%20clases%20de%20Pulso%20Latino",
      secondaryCtaLabel: "Ver horarios ↓",
      secondaryCtaHref: "#horarios"
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

function textById(id, value) {
  const node = document.getElementById(id);
  if (node && typeof value === "string") {
    node.textContent = value;
  }
}

function htmlById(id, value) {
  const node = document.getElementById(id);
  if (node && typeof value === "string") {
    node.innerHTML = value;
  }
}

function setHrefById(id, href) {
  const node = document.getElementById(id);
  if (node && href) {
    node.setAttribute("href", href);
  }
}

function buildPriceCard(plan) {
  const featuredClass = plan.featured ? " featured" : "";
  const badge = plan.badge ? `<div class="precio-badge">${plan.badge}</div>` : "";
  return `
    <div class="precio-card${featuredClass}">
      ${badge}
      <div class="precio-icon"><i class="${plan.icon}" aria-hidden="true"></i></div>
      <div class="precio-name">${plan.name}</div>
      <div class="precio-desc">${plan.description}</div>
      <div class="precio-amount">${plan.amount} <span>${plan.suffix || ""}</span></div>
    </div>
  `;
}

function buildSchedulePanel(branchMeta, scheduleBranch, isActive) {
  const groups = (scheduleBranch?.dayGroups || [])
    .map((group) => {
      const classes = (group.classes || [])
        .map((item) => {
          const area = item.area ? `<span class="class-area">${item.area}</span>` : "";
          return `
            <div class="class-row">
              <span class="class-time">${item.time || ""}</span>
              <span class="class-dot dot-${item.style || "salsa"}"></span>
              <span class="class-name">${item.name || ""}</span>
              ${area}
            </div>
          `;
        })
        .join("");

      return `
        <div class="schedule-day">
          <div class="day-header">${group.dayTitle || ""}</div>
          ${classes}
        </div>
      `;
    })
    .join("");

  return `
    <div class="tab-content${isActive ? " active" : ""}" id="tab-${branchMeta.id}">
      <div class="schedule-grid">${groups}</div>
      <div class="section-whatsapp-cta">
        <a class="btn-primary" href="${branchMeta.ctaHref || "#"}" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          ${branchMeta.ctaLabel || "Agenda tu clase"}
        </a>
      </div>
    </div>
  `;
}

function switchTab(id) {
  document.querySelectorAll("#schedules-tabs .tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.branchId === id);
  });

  document.querySelectorAll("#schedules-panels .tab-content").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${id}`);
  });
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
      throw new Error(`status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`[content] using fallback for ${path}`, error);
    return fallback;
  }
}

function renderSiteContent(site) {
  const navContainer = document.getElementById("nav-links");
  if (navContainer && Array.isArray(site.navLinks)) {
    navContainer.innerHTML = site.navLinks
      .map(
        (item) => `
          <li>
            <a href="${item.href || "#"}" aria-label="${item.label || ""}">
              <i class="${item.icon || ""} nav-link-icon" aria-hidden="true"></i>
              <span class="nav-link-text">${item.label || ""}</span>
            </a>
          </li>
        `
      )
      .join("");
  }

  textById("hero-tagline", site.hero?.tagline);
  htmlById("hero-headline", `${site.hero?.headlinePrefix || ""}<br><span>${site.hero?.headlineHighlight || ""}</span>`);
  htmlById("hero-subheadline", site.hero?.subheadline);
  textById("hero-primary-cta-label", site.hero?.primaryCtaLabel);
  setHrefById("hero-primary-cta", site.hero?.primaryCtaHref);
  textById("hero-secondary-cta", site.hero?.secondaryCtaLabel);
  setHrefById("hero-secondary-cta", site.hero?.secondaryCtaHref);

  textById("schedules-label", site.schedulesSection?.label);
  textById("schedules-title", site.schedulesSection?.title);
  textById("prices-label", site.pricesSection?.label);
  textById("prices-title", site.pricesSection?.title);
  textById("prices-cta-label", site.pricesSection?.ctaLabel);
  setHrefById("prices-cta", site.pricesSection?.ctaHref);
  textById("events-label", site.eventsSection?.label);
  textById("events-title", site.eventsSection?.title);

  htmlById(
    "footer-location",
    `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/mQiw4jJ8Ey9rUZYV7" target="_blank" rel="noopener">Av. Madero</a> &nbsp;·&nbsp; <i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/N61xFc7rp7NcSdeZ7" target="_blank" rel="noopener">Pacabtún</a> · Mérida, Yucatán`
  );
  textById("footer-whatsapp", site.footer?.whatsappText);
  setHrefById("footer-whatsapp", `https://wa.me/${site.whatsappPhone || "529994195286"}`);
  textById("footer-copyright", site.footer?.copyrightText);

  textById("floating-whatsapp-label", site.floatingWhatsapp?.label);
  setHrefById("floating-whatsapp", site.floatingWhatsapp?.href);
}

function renderSchedules(site, schedules) {
  const branchesMeta = site.schedulesSection?.branches || [];
  const branchesData = schedules.branches || [];

  const tabsContainer = document.getElementById("schedules-tabs");
  const panelsContainer = document.getElementById("schedules-panels");
  if (!tabsContainer || !panelsContainer || branchesMeta.length === 0) return;

  tabsContainer.innerHTML = branchesMeta
    .map(
      (branch, index) => `
        <button class="tab-btn${index === 0 ? " active" : ""}" data-branch-id="${branch.id}">
          <i class="${branch.icon || "fa-solid fa-location-dot"}" aria-hidden="true"></i>${branch.label || ""}
        </button>
      `
    )
    .join("");

  panelsContainer.innerHTML = branchesMeta
    .map((branch, index) => {
      const scheduleBranch = branchesData.find((item) => item.id === branch.id);
      return buildSchedulePanel(branch, scheduleBranch, index === 0);
    })
    .join("");

  tabsContainer.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.branchId));
  });
}

function renderPrices(prices) {
  htmlById("prices-promo", prices.promoHtml || "");
  textById("prices-individual-title", prices.individualTitle);
  textById("prices-couple-title", prices.coupleTitle);
  textById("prices-fineprint", prices.finePrint);

  const individualGrid = document.getElementById("prices-individual-grid");
  if (individualGrid) {
    individualGrid.innerHTML = (prices.individualPlans || []).map(buildPriceCard).join("");
  }

  const coupleGrid = document.getElementById("prices-couple-grid");
  if (coupleGrid) {
    coupleGrid.innerHTML = (prices.couplePlans || []).map(buildPriceCard).join("");
  }
}

function renderEvents(events) {
  const grid = document.getElementById("events-grid");
  if (!grid) return;

  grid.innerHTML = (events.items || [])
    .map(
      (item) => `
        <div class="evento-card" data-image="${item.image || ""}" data-alt="${item.alt || ""}">
          <img src="${item.image || ""}" alt="${item.alt || ""}" loading="lazy" />
        </div>
      `
    )
    .join("");

  grid.querySelectorAll(".evento-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(card.dataset.image, card.dataset.alt));
  });
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
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
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

  const cleanUrl = `${window.location.pathname}${window.location.hash || ""}`;
  window.history.replaceState(null, "", cleanUrl);
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

  renderSiteContent(site);
  renderSchedules(site, schedules);
  renderPrices(prices);
  renderEvents(events);
  initRevealObserver();
  initSmoothAnchorScroll();
  requestAnimationFrame(() => requestAnimationFrame(scrollToSectionFromQuery));
}

boot();

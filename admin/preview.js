(function () {
  "use strict";

  if (!window.CMS || !window.PulsoRenderers || !window.createClass || !window.h) {
    return;
  }

  const CMS = window.CMS;
  const h = window.h;
  const createClass = window.createClass;
  const renderers = window.PulsoRenderers;

  CMS.registerPreviewStyle("/css/styles.css");
  CMS.registerPreviewStyle("/css/nosotros.css");
  CMS.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
  CMS.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;900&family=Dancing+Script:wght@700&family=Asap+Condensed:wght@500;700;900&display=swap");

  function entryToObject(entry) {
    if (!entry || typeof entry.getIn !== "function") return {};
    const data = entry.getIn(["data"]);
    return data && typeof data.toJS === "function" ? data.toJS() : {};
  }

  function revealAll(root) {
    root.querySelectorAll(".reveal").forEach(function (node) {
      node.classList.add("visible");
    });
  }

  function resolveImage(value, getAsset) {
    if (!value) return "";
    if (typeof value === "string") {
      if (typeof getAsset === "function") {
        const asset = getAsset(value);
        if (asset && typeof asset.toString === "function") {
          return asset.toString();
        }
      }
      return value;
    }
    if (typeof value === "object" && typeof value.path === "string") {
      return value.path;
    }
    return "";
  }

  function buildLandingShell() {
    return `
      <div id="top">
        <nav>
          <a class="nav-logo" href="#top" aria-label="Ir al inicio">
            <img src="/assets/logos/logo-pulso.png" alt="Pulso Latino" />
          </a>
          <ul class="nav-links" id="nav-links"></ul>
        </nav>

        <div class="hero" style="padding-top:5rem;">
          <img class="hero-logo" src="/assets/logos/logo-pulso.png" alt="Pulso Latino" />
          <p class="hero-tagline" id="hero-tagline"></p>
          <h1 class="hero-headline" id="hero-headline"></h1>
          <p class="hero-sub" id="hero-subheadline"></p>
          <div class="hero-cta">
            <a class="btn-primary" id="hero-primary-cta" href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span id="hero-primary-cta-label"></span>
            </a>
            <a class="btn-secondary" id="hero-secondary-cta" href="#about-teaser"></a>
          </div>
        </div>

        <section id="horarios">
          <span class="section-label" id="schedules-label"></span>
          <h2 class="section-title reveal" id="schedules-title"></h2>
          <div class="divider"></div>
          <div class="tabs reveal" id="schedules-tabs"></div>
          <div id="schedules-panels"></div>
        </section>

        <section id="precios" class="precios-section" style="max-width:100%; padding: 4rem 1.5rem;">
          <div style="max-width:900px; margin:0 auto;">
            <span class="section-label" id="prices-label"></span>
            <h2 class="section-title reveal" id="prices-title"></h2>
            <div class="divider"></div>
            <div class="promo-banner reveal" id="prices-promo"></div>
            <h3 id="prices-individual-title" style="font-family:'Bebas Neue',sans-serif; font-size:1.3rem; letter-spacing:1px; margin-bottom:1rem; color:var(--text-muted);"></h3>
            <div class="precios-grid reveal" id="prices-individual-grid"></div>
            <h3 id="prices-couple-title" style="font-family:'Bebas Neue',sans-serif; font-size:1.3rem; letter-spacing:1px; margin: 2rem 0 1rem; color:var(--text-muted);"></h3>
            <div class="precios-grid reveal" id="prices-couple-grid"></div>
            <p id="prices-fineprint" style="margin-top:1rem; font-size:0.75rem; color:var(--text-muted); line-height:1.6;"></p>
            <div class="section-whatsapp-cta">
              <a class="btn-primary" id="prices-cta" href="#" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                <span id="prices-cta-label"></span>
              </a>
            </div>
          </div>
        </section>

        <section id="eventos">
          <span class="section-label" id="events-label"></span>
          <h2 class="section-title reveal" id="events-title"></h2>
          <div class="divider"></div>
          <div class="eventos-grid reveal" id="events-grid"></div>
        </section>

        <footer>
          <img src="/assets/logos/logo-pulso.png" alt="Pulso Latino" />
          <p id="footer-location"></p>
          <p style="margin-top:0.5rem;">
            <a id="footer-whatsapp" href="#" target="_blank" rel="noopener"></a>
          </p>
          <p id="footer-copyright" style="margin-top:1rem; opacity:0.4;"></p>
        </footer>

        <a class="wa-float" id="floating-whatsapp" href="#" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          <span id="floating-whatsapp-label"></span>
        </a>
      </div>
    `;
  }

  function buildSiteShell() {
    return `
      <div id="top">
        <div class="hero" style="padding-top:5rem; min-height:auto;">
          <img class="hero-logo" src="/assets/logos/logo-pulso.png" alt="Pulso Latino" />
          <p class="hero-tagline" id="hero-tagline"></p>
          <h1 class="hero-headline" id="hero-headline"></h1>
          <p class="hero-sub" id="hero-subheadline"></p>
          <div class="hero-cta">
            <a class="btn-primary" id="hero-primary-cta" href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span id="hero-primary-cta-label"></span>
            </a>
            <a class="btn-secondary" id="hero-secondary-cta" href="#"></a>
          </div>
        </div>

        <section>
          <span class="section-label" id="schedules-label"></span>
          <h2 class="section-title reveal" id="schedules-title"></h2>
          <div class="divider"></div>
        </section>

        <section>
          <span class="section-label" id="prices-label"></span>
          <h2 class="section-title reveal" id="prices-title"></h2>
          <div class="divider"></div>
          <div class="section-whatsapp-cta">
            <a class="btn-primary" id="prices-cta" href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span id="prices-cta-label"></span>
            </a>
          </div>
        </section>

        <section>
          <span class="section-label" id="events-label"></span>
          <h2 class="section-title reveal" id="events-title"></h2>
          <div class="divider"></div>
        </section>

        <section>
          <span class="section-label">Contacto</span>
          <div class="copy-card">
            <p id="footer-location"></p>
            <p><a id="footer-whatsapp" href="#" target="_blank" rel="noopener"></a></p>
            <p id="footer-copyright"></p>
            <div class="section-whatsapp-cta">
              <a class="btn-primary" id="floating-whatsapp" href="#" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                <span id="floating-whatsapp-label"></span>
              </a>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function buildAboutShell() {
    return `
      <div id="top">
        <header class="hero-small">
          <p class="hero-tagline" id="about-hero-tagline"></p>
          <h1 class="hero-title" id="about-hero-title"></h1>
        </header>

        <section class="reveal">
          <span class="section-label" id="about-section-label"></span>
          <h2 class="section-title" id="about-section-title"></h2>
          <div class="divider"></div>
          <article class="copy-card">
            <div id="about-paragraphs"></div>
            <p class="quote"><span class="quote-stars" aria-hidden="true">✦</span>“<span id="about-quote"></span>” <span class="quote-stars" aria-hidden="true">✦</span></p>
          </article>
        </section>

        <section class="reveal">
          <span class="section-label" id="director-section-label"></span>
          <h2 class="section-title" id="director-section-title"></h2>
          <div class="divider"></div>
          <article class="director-card">
            <figure class="director-photo-wrap">
              <img class="director-photo" id="director-image" src="" alt="" />
            </figure>
            <div class="director-content">
              <h3 id="director-name"></h3>
              <p id="director-bio"></p>
            </div>
          </article>
        </section>

        <section class="reveal">
          <span class="section-label" id="history-section-label"></span>
          <h2 class="section-title" id="history-section-title"></h2>
          <div class="divider"></div>
          <div class="timeline" id="history-items"></div>
        </section>

        <section class="reveal">
          <span class="section-label" id="values-section-label"></span>
          <h2 class="section-title" id="values-section-title"></h2>
          <div class="divider"></div>
          <div class="values-grid" id="values-items"></div>
        </section>

        <section class="reveal">
          <span class="section-label" id="mv-section-label"></span>
          <h2 class="section-title" id="mv-section-title"></h2>
          <div class="divider"></div>
          <div class="mv-stack">
            <article class="mv-card">
              <h3 id="mission-title"></h3>
              <p id="mission-text"></p>
            </article>
            <article class="mv-card">
              <h3 id="vision-title"></h3>
              <p id="vision-text"></p>
            </article>
          </div>
        </section>

        <section class="final-cta reveal">
          <article class="cta-card">
            <h3 id="final-cta-title"></h3>
            <p id="final-cta-description"></p>
            <a class="btn-primary" id="final-cta-button" href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span id="final-cta-button-label"></span>
            </a>
          </article>
        </section>
      </div>
    `;
  }

  function buildSchedulesShell() {
    return `
      <section id="horarios">
        <span class="section-label" id="schedules-label"></span>
        <h2 class="section-title reveal" id="schedules-title"></h2>
        <div class="divider"></div>
        <div class="tabs reveal" id="schedules-tabs"></div>
        <div id="schedules-panels"></div>
      </section>
    `;
  }

  function buildPricesShell() {
    return `
      <section id="precios" class="precios-section" style="max-width:100%; padding: 4rem 1.5rem;">
        <div style="max-width:900px; margin:0 auto;">
          <span class="section-label" id="prices-label"></span>
          <h2 class="section-title reveal" id="prices-title"></h2>
          <div class="divider"></div>
          <div class="promo-banner reveal" id="prices-promo"></div>
          <h3 id="prices-individual-title" style="font-family:'Bebas Neue',sans-serif; font-size:1.3rem; letter-spacing:1px; margin-bottom:1rem; color:var(--text-muted);"></h3>
          <div class="precios-grid reveal" id="prices-individual-grid"></div>
          <h3 id="prices-couple-title" style="font-family:'Bebas Neue',sans-serif; font-size:1.3rem; letter-spacing:1px; margin: 2rem 0 1rem; color:var(--text-muted);"></h3>
          <div class="precios-grid reveal" id="prices-couple-grid"></div>
          <p id="prices-fineprint" style="margin-top:1rem; font-size:0.75rem; color:var(--text-muted); line-height:1.6;"></p>
          <div class="section-whatsapp-cta">
            <a class="btn-primary" id="prices-cta" href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span id="prices-cta-label"></span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function buildEventsShell() {
    return `
      <section id="eventos">
        <span class="section-label" id="events-label"></span>
        <h2 class="section-title reveal" id="events-title"></h2>
        <div class="divider"></div>
        <div class="eventos-grid reveal" id="events-grid"></div>
      </section>
    `;
  }

  function createStaticPreview(renderFn) {
    return createClass({
      componentDidMount: function () {
        this.paint();
      },
      componentDidUpdate: function () {
        this.paint();
      },
      paint: function () {
        if (!this.rootEl) return;
        renderFn(this.rootEl, this.props);
      },
      render: function () {
        return h("div", {
          ref: (node) => {
            this.rootEl = node;
          }
        });
      }
    });
  }

  const sitePreview = createStaticPreview(function (rootEl, props) {
    rootEl.innerHTML = buildSiteShell();
    const site = entryToObject(props.entry);
    renderers.renderLandingSiteContent(rootEl, site);
    revealAll(rootEl);
  });

  let siteDataPromise;
  function getSiteData() {
    if (!siteDataPromise) {
      siteDataPromise = fetch("/content/site.json", { cache: "no-store" })
        .then(function (response) {
          if (!response.ok) throw new Error("status " + response.status);
          return response.json();
        })
        .catch(function () {
          return {};
        });
    }
    return siteDataPromise;
  }

  function buildSchedulesMetaFallback(schedulesEntry) {
    const branches = Array.isArray(schedulesEntry && schedulesEntry.branches) ? schedulesEntry.branches : [];
    const defaults = {
      icon: "fa-solid fa-location-dot",
      ctaLabel: "Agenda tu clase",
      ctaHref: "#"
    };

    return {
      schedulesSection: {
        label: "Nuestras clases",
        title: "HORARIOS",
        branches: branches.map(function (branch) {
          const id = branch && branch.id ? branch.id : "sucursal";
          const normalizedId = String(id).trim();
          const labelById = {
            madero: "Av. Madero",
            pacabtun: "Pacabtún"
          };

          return {
            id: normalizedId,
            label: labelById[normalizedId.toLowerCase()] || normalizedId,
            icon: defaults.icon,
            ctaLabel: defaults.ctaLabel,
            ctaHref: defaults.ctaHref
          };
        })
      }
    };
  }

  function getEffectiveSchedulesSiteData(siteData, schedulesEntry) {
    const metaBranches =
      siteData &&
      siteData.schedulesSection &&
      Array.isArray(siteData.schedulesSection.branches) &&
      siteData.schedulesSection.branches.length > 0;

    if (metaBranches) {
      return siteData;
    }

    return buildSchedulesMetaFallback(schedulesEntry);
  }

  function getEffectivePricesSiteData(siteData) {
    const hasPricesMeta =
      siteData &&
      siteData.pricesSection &&
      (siteData.pricesSection.label || siteData.pricesSection.title || siteData.pricesSection.ctaLabel);

    if (hasPricesMeta) {
      return siteData;
    }

    return {
      pricesSection: {
        label: "Sin inscripción para nuevos alumnos",
        title: "PRECIOS",
        ctaLabel: "Pregunta por nuestras promociones",
        ctaHref: "#"
      }
    };
  }

  function getEffectiveEventsSiteData(siteData) {
    const hasEventsMeta =
      siteData &&
      siteData.eventsSection &&
      (siteData.eventsSection.label || siteData.eventsSection.title);

    if (hasEventsMeta) {
      return siteData;
    }

    return {
      eventsSection: {
        label: "Flyers y promociones",
        title: "EVENTOS"
      }
    };
  }

  const schedulesPreview = createClass({
    componentDidMount: function () {
      this._mounted = true;
      this.paint();
    },
    componentDidUpdate: function () {
      this.paint();
    },
    componentWillUnmount: function () {
      this._mounted = false;
    },
    paint: function () {
      if (!this.rootEl) return;
      const schedules = entryToObject(this.props.entry);
      this.rootEl.innerHTML = buildSchedulesShell();
      const self = this;

      getSiteData().then(function (siteData) {
        if (!self._mounted || !self.rootEl) return;
        const effectiveSiteData = getEffectiveSchedulesSiteData(siteData || {}, schedules || {});
        const sectionData = effectiveSiteData.schedulesSection || {};

        renderers.textById(self.rootEl, "schedules-label", sectionData.label || "Nuestras clases");
        renderers.textById(self.rootEl, "schedules-title", sectionData.title || "HORARIOS");
        renderers.renderSchedules(self.rootEl, effectiveSiteData, schedules || {}, { bindEvents: true });
        revealAll(self.rootEl);
      });
    },
    render: function () {
      return h("div", {
        ref: (node) => {
          this.rootEl = node;
        }
      });
    }
  });

  const pricesPreview = createStaticPreview(function (rootEl, props) {
    rootEl.innerHTML = buildPricesShell();
    const prices = entryToObject(props.entry);

    getSiteData().then(function (siteData) {
      const effectiveSiteData = getEffectivePricesSiteData(siteData || {});
      renderers.renderLandingSiteContent(rootEl, effectiveSiteData);
      renderers.renderPrices(rootEl, prices || {});
      revealAll(rootEl);
    });
  });

  const eventsPreview = createStaticPreview(function (rootEl, props) {
    rootEl.innerHTML = buildEventsShell();
    const events = entryToObject(props.entry);
    const items = Array.isArray(events.items) ? events.items : [];
    events.items = items.map(function (item) {
      return {
        image: resolveImage(item.image, props.getAsset),
        alt: item.alt || ""
      };
    });

    getSiteData().then(function (siteData) {
      const effectiveSiteData = getEffectiveEventsSiteData(siteData || {});
      renderers.renderLandingSiteContent(rootEl, effectiveSiteData);
      renderers.renderEvents(rootEl, events);
      revealAll(rootEl);
    });
  });

  const aboutPreview = createClass({
    componentDidMount: function () {
      this._mounted = true;
      this.paint();
    },
    componentDidUpdate: function () {
      this.paint();
    },
    componentWillUnmount: function () {
      this._mounted = false;
    },
    paint: function () {
      if (!this.rootEl) return;
      const about = entryToObject(this.props.entry);
      this.rootEl.innerHTML = buildAboutShell();
      const self = this;

      if (about.director) {
        about.director.image = resolveImage(about.director.image, this.props.getAsset);
      }
      if (!self._mounted || !self.rootEl) return;
      renderers.renderAboutContent(self.rootEl, about || {});
      revealAll(self.rootEl);
    },
    render: function () {
      return h("div", {
        ref: (node) => {
          this.rootEl = node;
        }
      });
    }
  });

  CMS.registerPreviewTemplate("site", sitePreview);
  CMS.registerPreviewTemplate("schedules", schedulesPreview);
  CMS.registerPreviewTemplate("prices", pricesPreview);
  CMS.registerPreviewTemplate("events", eventsPreview);
  CMS.registerPreviewTemplate("about", aboutPreview);
})();

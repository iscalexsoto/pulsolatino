(function (global) {
  "use strict";

  function findById(root, id) {
    if (!root || !id) return null;
    if (typeof root.getElementById === "function") {
      const node = root.getElementById(id);
      if (node) return node;
    }
    if (typeof root.querySelector === "function") {
      return root.querySelector("#" + id);
    }
    return null;
  }

  function textById(root, id, value) {
    const node = findById(root, id);
    if (node && typeof value === "string") {
      node.textContent = value;
    }
  }

  function htmlById(root, id, value) {
    const node = findById(root, id);
    if (node && typeof value === "string") {
      node.innerHTML = value;
    }
  }

  function setHrefById(root, id, href) {
    const node = findById(root, id);
    if (node && href) {
      node.setAttribute("href", href);
    }
  }

  function setAttrById(root, id, attr, value) {
    const node = findById(root, id);
    if (node && typeof value === "string") {
      node.setAttribute(attr, value);
    }
  }

  function navHrefForAboutPage(href) {
    if (!href) return "#";
    if (href.startsWith("#")) {
      return "index.html?go=" + href.slice(1);
    }
    return href;
  }

  function normalizeSimpleList(list, keyName) {
    if (!Array.isArray(list)) return [];
    return list
      .map(function (item) {
        if (typeof item === "string") return item;
        if (item && typeof item === "object" && typeof item[keyName] === "string") return item[keyName];
        return "";
      })
      .filter(Boolean);
  }

  function buildPriceCard(plan) {
    const featuredClass = plan.featured ? " featured" : "";
    const badge = plan.badge ? '<div class="precio-badge">' + plan.badge + "</div>" : "";
    return (
      '\n    <div class="precio-card' +
      featuredClass +
      '">\n      ' +
      badge +
      '\n      <div class="precio-icon"><i class="' +
      (plan.icon || "") +
      '" aria-hidden="true"></i></div>\n      <div class="precio-name">' +
      (plan.name || "") +
      '</div>\n      <div class="precio-desc">' +
      (plan.description || "") +
      '</div>\n      <div class="precio-amount">' +
      (plan.amount || "") +
      " <span>" +
      (plan.suffix || "") +
      "</span></div>\n    </div>\n  "
    );
  }

  function buildSchedulePanel(branchMeta, scheduleBranch, isActive) {
    const groups = (scheduleBranch && scheduleBranch.dayGroups ? scheduleBranch.dayGroups : [])
      .map(function (group) {
        const classes = (group.classes || [])
          .map(function (item) {
            const area = item.area ? '<span class="class-area">' + item.area + "</span>" : "";
            return (
              '\n            <div class="class-row">\n              <span class="class-time">' +
              (item.time || "") +
              '</span>\n              <span class="class-dot dot-' +
              (item.style || "salsa") +
              '"></span>\n              <span class="class-name">' +
              (item.name || "") +
              "</span>\n              " +
              area +
              "\n            </div>\n          "
            );
          })
          .join("");

        return (
          '\n        <div class="schedule-day">\n          <div class="day-header">' +
          (group.dayTitle || "") +
          "</div>\n          " +
          classes +
          "\n        </div>\n      "
        );
      })
      .join("");

    return (
      '\n    <div class="tab-content' +
      (isActive ? " active" : "") +
      '" id="tab-' +
      branchMeta.id +
      '">\n      <div class="schedule-grid">' +
      groups +
      '</div>\n      <div class="section-whatsapp-cta">\n        <a class="btn-primary" href="' +
      (branchMeta.ctaHref || "#") +
      '" target="_blank" rel="noopener">\n          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>\n          ' +
      (branchMeta.ctaLabel || "Agenda tu clase") +
      "\n        </a>\n      </div>\n    </div>\n  "
    );
  }

  function switchTab(root, id) {
    if (!root || !id) return;

    root.querySelectorAll("#schedules-tabs .tab-btn").forEach(function (button) {
      button.classList.toggle("active", button.dataset.branchId === id);
    });

    root.querySelectorAll("#schedules-panels .tab-content").forEach(function (panel) {
      panel.classList.toggle("active", panel.id === "tab-" + id);
    });
  }

  function renderLandingSiteContent(root, site) {
    const navContainer = findById(root, "nav-links");
    if (navContainer && Array.isArray(site.navLinks)) {
      navContainer.innerHTML = site.navLinks
        .map(function (item) {
          return '\n          <li>\n            <a href="' + (item.href || "#") + '" aria-label="' + (item.label || "") + '">\n              ' + (item.label || "") + "\n            </a>\n          </li>\n        ";
        })
        .join("");
    }

    textById(root, "hero-tagline", site.hero && site.hero.tagline);
    htmlById(
      root,
      "hero-headline",
      (site.hero && site.hero.headlinePrefix ? site.hero.headlinePrefix : "") +
        "<br><span>" +
        (site.hero && site.hero.headlineHighlight ? site.hero.headlineHighlight : "") +
        "</span>"
    );
    htmlById(root, "hero-subheadline", site.hero && site.hero.subheadline);
    textById(root, "hero-primary-cta-label", site.hero && site.hero.primaryCtaLabel);
    setHrefById(root, "hero-primary-cta", site.hero && site.hero.primaryCtaHref);
    textById(root, "hero-secondary-cta", site.hero && site.hero.secondaryCtaLabel);
    setHrefById(root, "hero-secondary-cta", site.hero && site.hero.secondaryCtaHref);

    textById(root, "schedules-label", site.schedulesSection && site.schedulesSection.label);
    textById(root, "schedules-title", site.schedulesSection && site.schedulesSection.title);
    textById(root, "prices-label", site.pricesSection && site.pricesSection.label);
    textById(root, "prices-title", site.pricesSection && site.pricesSection.title);
    textById(root, "prices-cta-label", site.pricesSection && site.pricesSection.ctaLabel);
    setHrefById(root, "prices-cta", site.pricesSection && site.pricesSection.ctaHref);
    textById(root, "events-label", site.eventsSection && site.eventsSection.label);
    textById(root, "events-title", site.eventsSection && site.eventsSection.title);

    htmlById(
      root,
      "footer-location",
      '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/mQiw4jJ8Ey9rUZYV7" target="_blank" rel="noopener">Av. Madero</a> &nbsp;·&nbsp; <i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/N61xFc7rp7NcSdeZ7" target="_blank" rel="noopener">Pacabtún</a> · Mérida, Yucatán'
    );
    textById(root, "footer-whatsapp", site.footer && site.footer.whatsappText);
    setHrefById(root, "footer-whatsapp", "https://wa.me/" + (site.whatsappPhone || "529994195286"));
    textById(root, "footer-copyright", site.footer && site.footer.copyrightText);
    textById(root, "floating-whatsapp-label", site.floatingWhatsapp && site.floatingWhatsapp.label);
    setHrefById(root, "floating-whatsapp", site.floatingWhatsapp && site.floatingWhatsapp.href);
  }

  function renderSchedules(root, site, schedules, options) {
    const branchesMeta = (site.schedulesSection && site.schedulesSection.branches) || [];
    const branchesData = schedules.branches || [];
    const opts = options || {};
    const tabsContainer = findById(root, "schedules-tabs");
    const panelsContainer = findById(root, "schedules-panels");

    if (!tabsContainer || !panelsContainer || branchesMeta.length === 0) return;

    tabsContainer.innerHTML = branchesMeta
      .map(function (branch, index) {
        return '\n        <button class="tab-btn' + (index === 0 ? " active" : "") + '" data-branch-id="' + branch.id + '">\n          <i class="' + (branch.icon || "fa-solid fa-location-dot") + '" aria-hidden="true"></i>' + (branch.label || "") + "\n        </button>\n      ";
      })
      .join("");

    panelsContainer.innerHTML = branchesMeta
      .map(function (branch, index) {
        const scheduleBranch = branchesData.find(function (item) {
          return item.id === branch.id;
        });
        return buildSchedulePanel(branch, scheduleBranch, index === 0);
      })
      .join("");

    if (opts.bindEvents !== false) {
      tabsContainer.querySelectorAll(".tab-btn").forEach(function (button) {
        button.addEventListener("click", function () {
          switchTab(root, button.dataset.branchId);
        });
      });
    }
  }

  function renderPrices(root, prices) {
    htmlById(root, "prices-promo", prices.promoHtml || "");
    textById(root, "prices-individual-title", prices.individualTitle);
    textById(root, "prices-couple-title", prices.coupleTitle);
    textById(root, "prices-fineprint", prices.finePrint);

    const individualGrid = findById(root, "prices-individual-grid");
    if (individualGrid) {
      individualGrid.innerHTML = (prices.individualPlans || []).map(buildPriceCard).join("");
    }

    const coupleGrid = findById(root, "prices-couple-grid");
    if (coupleGrid) {
      coupleGrid.innerHTML = (prices.couplePlans || []).map(buildPriceCard).join("");
    }
  }

  function renderEvents(root, events, options) {
    const grid = findById(root, "events-grid");
    const opts = options || {};
    if (!grid) return;

    grid.innerHTML = (events.items || [])
      .map(function (item) {
        return '\n        <div class="evento-card" data-image="' + (item.image || "") + '" data-alt="' + (item.alt || "") + '">\n          <img src="' + (item.image || "") + '" alt="' + (item.alt || "") + '" loading="lazy" />\n        </div>\n      ';
      })
      .join("");

    if (typeof opts.onSelect === "function") {
      grid.querySelectorAll(".evento-card").forEach(function (card) {
        card.addEventListener("click", function () {
          opts.onSelect(card.dataset.image, card.dataset.alt);
        });
      });
    }
  }

  function renderAboutNav(root, site) {
    const navContainer = findById(root, "nav-links");
    if (!navContainer || !Array.isArray(site.navLinks)) return;

    navContainer.innerHTML = site.navLinks
      .map(function (item) {
        const href = navHrefForAboutPage(item.href);
        const isActive = item.href === "nosotros.html" ? ' class="active"' : "";
        return '<li><a href="' + href + '"' + isActive + ">" + (item.label || "") + "</a></li>";
      })
      .join("");
  }

  function renderSharedSite(root, site) {
    renderAboutNav(root, site);

    htmlById(
      root,
      "footer-location",
      '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/mQiw4jJ8Ey9rUZYV7" target="_blank" rel="noopener">Av. Madero</a> &nbsp;·&nbsp; <i class="fa-solid fa-location-dot" aria-hidden="true"></i> <a class="footer-location-link" href="https://maps.app.goo.gl/N61xFc7rp7NcSdeZ7" target="_blank" rel="noopener">Pacabtún</a> · Mérida, Yucatán'
    );

    textById(root, "footer-whatsapp", site.footer && site.footer.whatsappText);
    setHrefById(root, "footer-whatsapp", "https://wa.me/" + (site.whatsappPhone || "529994195286"));
    textById(root, "footer-copyright", site.footer && site.footer.copyrightText);
    textById(root, "floating-whatsapp-label", site.floatingWhatsapp && site.floatingWhatsapp.label);
    setHrefById(root, "floating-whatsapp", site.floatingWhatsapp && site.floatingWhatsapp.href);
  }

  function renderAboutContent(root, content) {
    textById(root, "about-hero-tagline", content.hero && content.hero.tagline);
    textById(root, "about-hero-title", content.hero && content.hero.title);
    textById(root, "about-section-label", content.about && content.about.sectionLabel);
    textById(root, "about-section-title", content.about && content.about.sectionTitle);

    const aboutParagraphs = findById(root, "about-paragraphs");
    if (aboutParagraphs) {
      const paragraphs = normalizeSimpleList(content.about && content.about.paragraphs, "paragraph");
      aboutParagraphs.innerHTML = paragraphs.map(function (paragraph) {
        return "<p>" + paragraph + "</p>";
      }).join("");
    }

    textById(root, "about-quote", content.about && content.about.quote);
    textById(root, "director-section-label", content.director && content.director.sectionLabel);
    textById(root, "director-section-title", content.director && content.director.sectionTitle);
    textById(root, "director-name", content.director && content.director.name);
    textById(root, "director-bio", content.director && content.director.bio);
    setAttrById(root, "director-image", "src", content.director && content.director.image);
    setAttrById(root, "director-image", "alt", content.director && content.director.imageAlt);
    textById(root, "history-section-label", content.history && content.history.sectionLabel);
    textById(root, "history-section-title", content.history && content.history.sectionTitle);

    const historyItems = findById(root, "history-items");
    if (historyItems) {
      historyItems.innerHTML = (content.history && content.history.items ? content.history.items : [])
        .map(function (item) {
          const bulletsList = normalizeSimpleList(item.bullets, "bullet");
          const bullets = bulletsList.length
            ? "<ul>" +
              bulletsList
                .map(function (bullet) {
                  return '<li><i class="fa-solid fa-trophy" aria-hidden="true"></i><span>' + bullet + "</span></li>";
                })
                .join("") +
              "</ul>"
            : "";

          return (
            '\n          <article class="timeline-item">\n            <h3>' +
            (item.title || "") +
            "</h3>\n            <p>" +
            (item.description || "") +
            "</p>\n            " +
            bullets +
            "\n          </article>\n        "
          );
        })
        .join("");
    }

    textById(root, "values-section-label", content.values && content.values.sectionLabel);
    textById(root, "values-section-title", content.values && content.values.sectionTitle);

    const valuesItems = findById(root, "values-items");
    if (valuesItems) {
      valuesItems.innerHTML = (content.values && content.values.items ? content.values.items : [])
        .map(function (item) {
          const wide = item.wide ? " wide" : "";
          return (
            '\n          <article class="value-card' +
            wide +
            '">\n            <h3 class="value-name">' +
            (item.name || "") +
            "</h3>\n            <p>" +
            (item.description || "") +
            "</p>\n          </article>\n        "
          );
        })
        .join("");
    }

    textById(root, "mv-section-label", content.missionVision && content.missionVision.sectionLabel);
    textById(root, "mv-section-title", content.missionVision && content.missionVision.sectionTitle);
    textById(root, "mission-title", content.missionVision && content.missionVision.missionTitle);
    textById(root, "mission-text", content.missionVision && content.missionVision.missionText);
    textById(root, "vision-title", content.missionVision && content.missionVision.visionTitle);
    textById(root, "vision-text", content.missionVision && content.missionVision.visionText);
    textById(root, "final-cta-title", content.finalCta && content.finalCta.title);
    textById(root, "final-cta-description", content.finalCta && content.finalCta.description);
    textById(root, "final-cta-button-label", content.finalCta && content.finalCta.buttonLabel);
    setHrefById(root, "final-cta-button", content.finalCta && content.finalCta.buttonHref);
  }

  global.PulsoRenderers = {
    normalizeSimpleList: normalizeSimpleList,
    navHrefForAboutPage: navHrefForAboutPage,
    textById: textById,
    htmlById: htmlById,
    setHrefById: setHrefById,
    setAttrById: setAttrById,
    buildPriceCard: buildPriceCard,
    buildSchedulePanel: buildSchedulePanel,
    switchTab: switchTab,
    renderLandingSiteContent: renderLandingSiteContent,
    renderSchedules: renderSchedules,
    renderPrices: renderPrices,
    renderEvents: renderEvents,
    renderAboutNav: renderAboutNav,
    renderSharedSite: renderSharedSite,
    renderAboutContent: renderAboutContent
  };
})(window);

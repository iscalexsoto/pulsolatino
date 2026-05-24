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

  function buildWhatsAppUrl(phone, message, defaultMessage) {
    const normalizedPhone = String(phone || "").replace(/\D/g, "");
    if (!normalizedPhone) return "#";

    const customMessage = typeof message === "string" ? message.trim() : "";
    const fallbackMessage = typeof defaultMessage === "string" ? defaultMessage.trim() : "";
    const finalMessage = customMessage || fallbackMessage;

    if (!finalMessage) {
      return "https://wa.me/" + normalizedPhone;
    }

    return "https://wa.me/" + normalizedPhone + "?text=" + encodeURIComponent(finalMessage);
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

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildIconsIndex(iconLibrary) {
    const source = Array.isArray(iconLibrary) ? iconLibrary : Array.isArray(iconLibrary && iconLibrary.icons) ? iconLibrary.icons : [];
    const index = {};
    source.forEach(function (iconItem) {
      if (!iconItem || typeof iconItem.id !== "string") return;
      const id = iconItem.id.trim();
      if (!id) return;
      index[id] = iconItem;
    });
    return index;
  }

  function buildIconMarkup(entity, iconsIndex, options) {
    const opts = options || {};
    const iconId = entity && typeof entity.iconId === "string" ? entity.iconId.trim() : "";
    const fallbackClass = opts.fallbackClass || (entity && typeof entity.icon === "string" ? entity.icon : "");
    const className = opts.className ? " " + opts.className : "";
    const iconFromLibrary = iconId && iconsIndex ? iconsIndex[iconId] : null;
    const svgPath = iconFromLibrary && typeof iconFromLibrary.svg === "string" ? iconFromLibrary.svg.trim() : "";

    if (svgPath) {
      return (
        '<img src="' +
        escapeAttr(svgPath) +
        '" alt="" aria-hidden="true" class="cms-icon' +
        className +
        '" loading="lazy" decoding="async" />'
      );
    }

    if (fallbackClass) {
      return '<i class="' + escapeAttr(fallbackClass) + className + '" aria-hidden="true"></i>';
    }

    return "";
  }

  function buildPriceCard(plan, iconsIndex) {
    const featuredClass = plan.featured ? " featured" : "";
    const badge = plan.badge ? '<div class="precio-badge">' + plan.badge + "</div>" : "";
    const iconMarkup = buildIconMarkup(plan, iconsIndex, {
      fallbackClass: plan.icon || "fa-solid fa-circle",
      className: "cms-icon-price"
    });
    return (
      '\n    <div class="precio-card' +
      featuredClass +
      '">\n      ' +
      badge +
      '\n      <div class="precio-icon">' +
      iconMarkup +
      '</div>\n      <div class="precio-name">' +
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

  function renderLandingSiteContent(root, site, options) {
    const opts = options || {};
    const iconsIndex = buildIconsIndex(opts.icons);
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
    setHrefById(
      root,
      "hero-primary-cta",
      buildWhatsAppUrl(site.whatsappPhone, site.hero && site.hero.primaryCtaMessage, site.whatsappDefaultMessage)
    );
    textById(root, "hero-secondary-cta", site.hero && site.hero.secondaryCtaLabel);
    setHrefById(root, "hero-secondary-cta", "#about-teaser");

    textById(root, "footer-location", site.footer && site.footer.locationText);
    textById(root, "footer-whatsapp", site.footer && site.footer.whatsappText);
    setHrefById(root, "footer-whatsapp", buildWhatsAppUrl(site.whatsappPhone, "", ""));
    textById(root, "footer-copyright", site.footer && site.footer.copyrightText);

    const socialsContainer = findById(root, "footer-socials");
    if (socialsContainer && Array.isArray(site.footer && site.footer.socials)) {
      socialsContainer.innerHTML = site.footer.socials
        .map(function (social) {
          const iconMarkup = buildIconMarkup(social, iconsIndex, {
            fallbackClass: social.icon || "fa-solid fa-link",
            className: "cms-icon-social"
          });
          return (
            '<p class="footer-social-link"><a href="' +
            (social.href || "#") +
            '" target="_blank" rel="noopener">' +
            iconMarkup +
            (social.label || "") +
            "</a></p>"
          );
        })
        .join("");
    }

    textById(root, "floating-whatsapp-label", site.floatingWhatsapp && site.floatingWhatsapp.label);
    setHrefById(
      root,
      "floating-whatsapp",
      buildWhatsAppUrl(site.whatsappPhone, site.floatingWhatsapp && site.floatingWhatsapp.message, site.whatsappDefaultMessage)
    );
  }

  function renderSchedules(root, schedules, site, options) {
    const branchesData = Array.isArray(schedules.branches) ? schedules.branches : [];
    const phone = site && site.whatsappPhone;
    const defaultMessage = site && site.whatsappDefaultMessage;
    const opts = options || {};
    const iconsIndex = buildIconsIndex(opts.icons);
    const tabsContainer = findById(root, "schedules-tabs");
    const panelsContainer = findById(root, "schedules-panels");

    textById(root, "schedules-label", schedules.sectionLabel || "Nuestras clases");
    textById(root, "schedules-title", schedules.sectionTitle || "HORARIOS");
    if (!tabsContainer || !panelsContainer || branchesData.length === 0) return;

    tabsContainer.innerHTML = branchesData
      .map(function (branch, index) {
        const iconMarkup = buildIconMarkup(branch, iconsIndex, {
          fallbackClass: branch.icon || "fa-solid fa-location-dot",
          className: "cms-icon-tab"
        });
        return (
          '\n        <button class="tab-btn' +
          (index === 0 ? " active" : "") +
          '" data-branch-id="' +
          (branch.id || "") +
          '">\n          ' +
          iconMarkup +
          " " +
          (branch.label || branch.id || "") +
          "\n        </button>\n      "
        );
      })
      .join("");

    panelsContainer.innerHTML = branchesData
      .map(function (branch, index) {
        const meta = {
          id: branch.id,
          ctaLabel: branch.ctaLabel || "Agenda tu clase",
          ctaHref: buildWhatsAppUrl(phone, branch.ctaMessage, defaultMessage)
        };
        return buildSchedulePanel(meta, branch, index === 0);
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

  function renderPrices(root, prices, site, options) {
    const opts = options || {};
    const iconsIndex = buildIconsIndex(opts.icons);
    textById(root, "prices-label", prices.sectionLabel || "Sin inscripción para nuevos alumnos");
    textById(root, "prices-title", prices.sectionTitle || "PRECIOS");
    htmlById(root, "prices-promo", prices.promoHtml || "");
    textById(root, "prices-individual-title", prices.individualTitle);
    textById(root, "prices-couple-title", prices.coupleTitle);
    textById(root, "prices-fineprint", prices.finePrint);
    textById(root, "prices-cta-label", prices.ctaLabel || "Pregunta por nuestras promociones");
    setHrefById(
      root,
      "prices-cta",
      buildWhatsAppUrl(site && site.whatsappPhone, prices.ctaMessage, site && site.whatsappDefaultMessage)
    );

    const individualGrid = findById(root, "prices-individual-grid");
    if (individualGrid) {
      individualGrid.innerHTML = (prices.individualPlans || [])
        .map(function (plan) {
          return buildPriceCard(plan, iconsIndex);
        })
        .join("");
    }

    const coupleGrid = findById(root, "prices-couple-grid");
    if (coupleGrid) {
      coupleGrid.innerHTML = (prices.couplePlans || [])
        .map(function (plan) {
          return buildPriceCard(plan, iconsIndex);
        })
        .join("");
    }
  }

  function renderEvents(root, events, options) {
    textById(root, "events-label", events.sectionLabel || "Flyers y promociones");
    textById(root, "events-title", events.sectionTitle || "EVENTOS");
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

  function renderSharedSite(root, site, options) {
    const opts = options || {};
    const iconsIndex = buildIconsIndex(opts.icons);
    textById(root, "footer-location", site.footer && site.footer.locationText);
    textById(root, "footer-whatsapp", site.footer && site.footer.whatsappText);
    setHrefById(root, "footer-whatsapp", buildWhatsAppUrl(site.whatsappPhone, "", ""));
    textById(root, "footer-copyright", site.footer && site.footer.copyrightText);
    const socialsContainer = findById(root, "footer-socials");
    if (socialsContainer && Array.isArray(site.footer && site.footer.socials)) {
      socialsContainer.innerHTML = site.footer.socials
        .map(function (social) {
          const iconMarkup = buildIconMarkup(social, iconsIndex, {
            fallbackClass: social.icon || "fa-solid fa-link",
            className: "cms-icon-social"
          });
          return (
            '<p class="footer-social-link"><a href="' +
            (social.href || "#") +
            '" target="_blank" rel="noopener">' +
            iconMarkup +
            (social.label || "") +
            "</a></p>"
          );
        })
        .join("");
    }
    textById(root, "floating-whatsapp-label", site.floatingWhatsapp && site.floatingWhatsapp.label);
    setHrefById(
      root,
      "floating-whatsapp",
      buildWhatsAppUrl(site.whatsappPhone, site.floatingWhatsapp && site.floatingWhatsapp.message, site.whatsappDefaultMessage)
    );
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
    buildWhatsAppUrl: buildWhatsAppUrl,
    buildIconsIndex: buildIconsIndex,
    buildIconMarkup: buildIconMarkup,
    normalizeSimpleList: normalizeSimpleList,
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
    renderSharedSite: renderSharedSite,
    renderAboutContent: renderAboutContent
  };
})(window);

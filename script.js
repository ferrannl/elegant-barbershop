/* -------------------------------------------------------
   Elegant Barbershop – JS
   - i18n + language handling
   - language gate overlay
   - parallax
   - basic interactions
-------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- i18n dictionaries ---------- */

  const I18N = {
    nl: {
      hero_title: "Knap kapsel, chill vibe.",
      notice_intro: "Let op onze openingstijden",
      notice_more: "Klik hier voor meer info over ons!",

      d_mon: "Maandag",   h_mon: "12:00–18:00",
      d_tue: "Dinsdag",   h_tue: "09:00–18:00",
      d_wed: "Woensdag",  h_wed: "09:00–18:00",
      d_thu: "Donderdag", h_thu: "09:00–18:00",
      d_fri: "Vrijdag",   h_fri: "09:00–18:00",
      d_sat: "Zaterdag",  h_sat: "09:00–18:00",
      d_sun: "Zondag",    h_sun: "Gesloten",

      s1_title: "Knippen & Style",
      s1_text: "Modern, klassiek of skin fade — wij fixen ’t netjes met advies op maat en premium styling.",
      s2_title: "Kom direct langs — afspraak niet nodig",
      s2_text: "Gewoon binnenlopen tijdens openingstijden. We helpen je op volgorde van binnenkomst. Makkelijk.",
      s3_title: "Chill & Play",
      s3_text: "Neem een cola, pak de PlayStation-controller, hang op de bank en chill.",
      s4_title: "Hygiëne & Kwaliteit",
      s4_text: "Schone tools, aandacht voor detail en constante kwaliteit. Jij zit lekker; wij doen de rest.",

      cta_book: "Kom langs",

      pitch_title: "Op zoek naar een frisse look?",
      pitch_sub: "Kom langs bij Elegant Barbershop in ’s-Hertogenbosch.",
      pitch_body:
        "Prijslijst (vanaf): Knippen €28 • Skin Fade €32 • Baard €18 • Hot Towel Shave €25 • Combi €42.",

      booking_title: "Contact",
      booking_whatsapp: "WhatsApp",
      booking_call: "Bel 073 123 4567",

      loc_title: "Je vindt ons hier",
      loc_360_title: "Kijk even rond in de straat",
      loc_360_sub: "Sleep, zoom en draai de 360°-view voor een betere indruk van de omgeving.",

      footer_privacy: "Privacy",
      footer_terms: "Voorwaarden",
      footer_copy: "©"
    },
    en: {
      hero_title: "Clean cuts. Chill vibes.",
      notice_intro: "Opening hours",
      notice_more: "Click here for more info about us!",

      d_mon: "Monday",    h_mon: "12:00–18:00",
      d_tue: "Tuesday",   h_tue: "09:00–18:00",
      d_wed: "Wednesday", h_wed: "09:00–18:00",
      d_thu: "Thursday",  h_thu: "09:00–18:00",
      d_fri: "Friday",    h_fri: "09:00–18:00",
      d_sat: "Saturday",  h_sat: "09:00–18:00",
      d_sun: "Sunday",    h_sun: "Closed",

      s1_title: "Haircuts & Style",
      s1_text: "Modern, classic or skin fade — tailored advice and premium styling.",
      s2_title: "Walk in — no appointment needed",
      s2_text: "Just drop by during opening hours. First come, first served — easy.",
      s3_title: "Chill & Play",
      s3_text: "Grab a cola, pick up the PlayStation controller, lounge on the sofa and chill.",
      s4_title: "Hygiene & Quality",
      s4_text: "Clean tools, detail focus and consistent results. You relax, we got you.",

      cta_book: "Come by",

      pitch_title: "Need a fresh look?",
      pitch_sub: "Visit Elegant Barbershop in ’s-Hertogenbosch.",
      pitch_body:
        "Price list (from): Cut €28 • Skin Fade €32 • Beard €18 • Hot Towel Shave €25 • Combo €42.",

      booking_title: "Contact",
      booking_whatsapp: "WhatsApp",
      booking_call: "Call 073 123 4567",

      loc_title: "Find us here",
      loc_360_title: "Take a look around the street",
      loc_360_sub: "Drag, zoom and rotate the 360° view to get a better feel for the area.",

      footer_privacy: "Privacy",
      footer_terms: "Terms",
      footer_copy: "©"
    },
    pl: {
      hero_title: "Czyste cięcia. Spokojny klimat.",
      notice_intro: "Godziny otwarcia",
      notice_more: "Kliknij po więcej informacji o nas!",

      d_mon: "Poniedziałek",  h_mon: "12:00–18:00",
      d_tue: "Wtorek",        h_tue: "09:00–18:00",
      d_wed: "Środa",         h_wed: "09:00–18:00",
      d_thu: "Czwartek",      h_thu: "09:00–18:00",
      d_fri: "Piątek",        h_fri: "09:00–18:00",
      d_sat: "Sobota",        h_sat: "09:00–18:00",
      d_sun: "Niedziela",     h_sun: "Zamknięte",

      s1_title: "Strzyżenie & Styl",
      s1_text: "Nowocześnie, klasycznie lub skin fade — doradztwo i stylizacja premium.",
      s2_title: "Wejdź od razu — bez rezerwacji",
      s2_text:
        "Wpadnij w godzinach otwarcia. Najpierw obsługujemy tych, którzy przyszli wcześniej — prosto i bez stresu.",
      s3_title: "Chill & Play",
      s3_text:
        "Weź colę, chwyć kontroler PlayStation, rozsiądź się na kanapie i wyluzuj.",
      s4_title: "Higiena & Jakość",
      s4_text: "Czyste narzędzia, dbałość o detale i stała jakość.",

      cta_book: "Wpadnij",

      pitch_title: "Potrzebujesz świeżego looku?",
      pitch_sub: "Zapraszamy do Elegant Barbershop w ’s-Hertogenbosch.",
      pitch_body:
        "Ceny od: Strzyżenie €28 • Skin Fade €32 • Broda €18 • Hot Towel Shave €25 • Zestaw €42.",

      booking_title: "Kontakt",
      booking_whatsapp: "WhatsApp",
      booking_call: "Zadzwoń 073 123 4567",

      loc_title: "Tu nas znajdziesz",
      loc_360_title: "Rozejrzyj się po ulicy",
      loc_360_sub:
        "Przeciągaj, przybliżaj i obracaj widok 360°, żeby lepiej poczuć okolicę.",

      footer_privacy: "Prywatność",
      footer_terms: "Regulamin",
      footer_copy: "©"
    },
    ar: {
      hero_title: "ستايل نظيف. أجواء هادئة.",
      notice_intro: "مواعيد العمل",
      notice_more: "اضغط هنا لمزيد من المعلومات عنا!",

      d_mon: "الاثنين",   h_mon: "12:00–18:00",
      d_tue: "الثلاثاء",  h_tue: "09:00–18:00",
      d_wed: "الأربعاء",  h_wed: "09:00–18:00",
      d_thu: "الخميس",    h_thu: "09:00–18:00",
      d_fri: "الجمعة",    h_fri: "09:00–18:00",
      d_sat: "السبت",     h_sat: "09:00–18:00",
      d_sun: "الأحد",     h_sun: "مغلق",

      s1_title: "قصّات وشَكل",
      s1_text: "حديث، كلاسيك أو Skin Fade — نصيحة على مزاجك وستايلينغ ممتاز.",
      s2_title: "تعال مباشرة — بدون موعد",
      s2_text:
        "مرّ علينا في مواعيد الدوام. الخدمة حسب أسبقية الحضور — بكل بساطة.",
      s3_title: "استرخاء ولعب",
      s3_text: "خذ علبة كولا، امسك يدّ تحكّم بلايستيشن، تمدّد على الكنبة وارتاح.",
      s4_title: "نظافة وجودة",
      s4_text:
        "أدوات نظيفة، اهتمام بالتفاصيل ونتيجة ثابتة. ريّح بالك، وإحنا نضبطها.",

      cta_book: "مرّ علينا",

      pitch_title: "تبي لوك جديد؟",
      pitch_sub: "تعال Elegant Barbershop في دن بوش.",
      pitch_body:
        "الأسعار (ابتداءً من): قصّة €28 • Skin Fade €32 • لحية €18 • Hot Towel €25 • باكيدج €42.",

      booking_title: "تواصل",
      booking_whatsapp: "واتساب",
      booking_call: "اتصل 073 123 4567",

      loc_title: "تلاقينا هنا",
      loc_360_title: "لفّة سريعة في الشارع",
      loc_360_sub:
        "اسحب وقرّب ولفّ عرض 360° عشان تاخذ فكرة أحسن عن المنطقة.",

      footer_privacy: "الخصوصية",
      footer_terms: "الشروط",
      footer_copy: "©"
    }
  };

  /* ---------- helpers ---------- */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- language + i18n ---------- */

  const params = new URLSearchParams(location.search);
  const defaultLang = "nl";
  const LANG_STORAGE_KEY = "lang";
  const LANG_GATE_SEEN_KEY = "ebLangGateSeen";

  let currentLang =
    (params.get("lang") || localStorage.getItem(LANG_STORAGE_KEY) || defaultLang).toLowerCase();

  if (!I18N[currentLang]) currentLang = defaultLang;

  const langSelect = $("#lang");

  function applyDirLang(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.title =
      lang === "ar" ? "إيليغِنت باربرز | دن بوش" : "Elegant Barbershop | Den Bosch";
  }

  function applyTranslations(lang) {
    const dict = I18N[lang];
    if (!dict) return;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
  }

  function setLang(lang, pushURL = true) {
    if (!I18N[lang]) return;
    currentLang = lang;
    applyDirLang(lang);
    applyTranslations(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);

    if (langSelect) langSelect.value = lang;

    if (pushURL) {
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.toString());
    }
  }

  // initial set
  setLang(currentLang, false);

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      setLang(e.target.value);
    });
  }

  /* ---------- language gate ---------- */

  const langGate = $("#langGate");
  const gateButtons = $$(".btn-lang");
  const gateSeen = localStorage.getItem(LANG_GATE_SEEN_KEY) === "1";

  if (langGate) {
    if (gateSeen) {
      langGate.style.display = "none";
    } else {
      langGate.style.display = "flex";
    }

    gateButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;

        setLang(lang);
        localStorage.setItem(LANG_GATE_SEEN_KEY, "1");

        langGate.classList.add("lang-gate-hide");
        setTimeout(() => {
          langGate.style.display = "none";
        }, 250);
      });
    });
  }

  /* ---------- footer year ---------- */

  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- tiny parallax ---------- */

  (function () {
    const img = document.querySelector(".hero-bg");
    if (!img) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    function onScroll() {
      if (reduce.matches) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const shift = Math.max(-40, Math.min(40, y * 0.15));
        img.style.setProperty("--heroParallax", shift + "px");
        ticking = false;
      });
    }

    img.style.transform = "translateY(var(--heroParallax,0px))";
    window.addEventListener("scroll", onScroll, { passive: true });
  })();

  /* ---------- smooth scroll ---------- */

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || id.length <= 1) return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- (optional) booking form fake submit ---------- */

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    const statusEl = document.getElementById("form-status");

    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!bookingForm.checkValidity()) {
        if (statusEl) {
          statusEl.textContent = "Controleer de verplichte velden.";
          statusEl.className = "form-status error";
        }
        bookingForm.reportValidity();
        return;
      }

      const formData = new FormData(bookingForm);
      const payload = Object.fromEntries(formData.entries());

      try {
        await new Promise((r) => setTimeout(r, 600));

        if (statusEl) {
          statusEl.textContent =
            "Bedankt! We hebben je aanvraag ontvangen. We nemen snel contact op om te bevestigen.";
          statusEl.className = "form-status success";

          const message = encodeURIComponent(
            `Hallo Elegant Barbers, ik wil graag boeken:\n` +
              `Naam: ${payload.name}\n` +
              `Telefoon: ${payload.phone}\n` +
              `Datum/Tijd: ${payload.date} ${payload.time}\n` +
              `Dienst: ${payload.service}\n` +
              `Opmerking: ${payload.message || "-"}`
          );
          const waLink = `https://wa.me/31731234567?text=${message}`;
          statusEl.insertAdjacentHTML(
            "beforeend",
            ` <a class="btn btn-outline" style="margin-left:8px" href="${waLink}" target="_blank" rel="noopener">Bevestig via WhatsApp</a>`
          );
        }

        bookingForm.reset();
      } catch (err) {
        if (statusEl) {
          statusEl.textContent =
            "Er ging iets mis. Probeer het opnieuw of neem telefonisch contact op.";
          statusEl.className = "form-status error";
        }
      }
    });
  }
});

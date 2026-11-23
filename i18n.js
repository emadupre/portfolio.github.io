(function () {
  var EN = {
    CV: "Resume",
    Inicio: "Home",
    "Ver todas las habilidades": "See all skills",
    "Ver experiencia anterior": "See earlier experience",
    "Ver más proyectos": "See more projects",
    "Proyecto Transversal": "Transversal Project",
    "PHP · JavaScript · MySQL · APIs REST":
      "PHP · JavaScript · MySQL · REST APIs",
    "Grupo Slots · Desarrollador Full Stack":
      "Grupo Slots · Full Stack Developer",
    "Olimpia Capital · Desarrollador Full Stack":
      "Olimpia Capital · Full Stack Developer",
    "Sep – Dic 2025": "Sep – Dec 2025",
    "Dic 2024 – Ene 2025": "Dec 2024 – Jan 2025",
    "Desarrollé una plataforma web responsive de sorteos de fin de año, con más de 100.000 usuarios.":
      "Built a responsive web platform for end-of-year prize draws, with over 100,000 users.",
    "Mejoré el rendimiento en dispositivos móviles y construí 2 APIs para consultas del backend.":
      "Improved performance on mobile devices and built 2 APIs for backend queries.",
    "Migré la base de datos de más de 100.000 usuarios sin tiempo de inactividad.":
      "Migrated a database of over 100,000 users with zero downtime.",
    "Diseñé y desarrollé desde cero una landing page financiera que creció hasta ser una plataforma con APIs de criptomonedas, casas de cambio y dólar MEP.":
      "Designed and built a financial landing page from scratch that grew into a platform with cryptocurrency, currency exchange and MEP dollar APIs.",
    "Llegó a más de 50 usuarios activos en 12 empresas.":
      "Reached over 50 active users across 12 companies.",
    "APIs REST": "REST APIs",
    "Desde 2025": "Since 2025",
    "Desde 2022": "Since 2022",
    "Tecnicatura en Desarrollo de Software · Universidad de La Punta":
      "Software Development Technical Degree · Universidad de La Punta",
    "Programador Universitario en Sistemas · Univ. Nacional de Villa Mercedes":
      "University Systems Programmer · Univ. Nacional de Villa Mercedes",
    "Responsive Web Design · freeCodeCamp (certificación)":
      "Responsive Web Design · freeCodeCamp (certification)",
    "Jesús Emanuel Dupré · Desarrollador Full Stack":
      "Jesús Emanuel Dupré · Full Stack Developer",
    "Portfolio de Jesús Emanuel Dupre, desarrollador full stack de Villa Mercedes, San Luis, Argentina.":
      "Portfolio of Jesús Emanuel Dupre, full stack developer from Villa Mercedes, San Luis, Argentina.",
    "Desarrollador Full Stack": "Full Stack Developer",
    "Descargar CV": "Download resume",
    "Creador de programas eficientes,": "Builder of efficient software,",
    "aplicando mi conocimiento y aprendizaje en distintos rubros para cumplir un objetivo.":
      "applying my knowledge and learning across different fields to reach a goal.",
    "Sobre mí": "About me",
    "Soy desarrollador y analista de sistemas. Trabajo con PHP, Laravel, Node.js y JavaScript, y me interesa el diseño de bases de datos, las APIs REST y el rendimiento web en celulares. Estudio la Tecnicatura en Desarrollo de Software, participé en el NASA Space Apps Challenge y sigo aprendiendo con proyectos propios y en equipo.":
      "I’m a developer and systems analyst. I work with PHP, Laravel, Node.js and JavaScript, and I care about database design, REST APIs and web performance on mobile. I’m studying the Software Development technical degree, took part in the NASA Space Apps Challenge, and keep learning through personal and team projects.",
    Experiencia: "Experience",
    Proyectos: "Projects",
    "Ver demo": "Live demo",
    Código: "Code",
    "Prototipo web bilingüe para el desafío Interplanetary Survival Guide: Martian Map. Planifica una caminata espacial en Marte con mapas reales de NASA y USGS, rutas que evitan pendientes de más de 18° y control de radiación.":
      "Bilingual web prototype for the Interplanetary Survival Guide: Martian Map challenge. It plans a spacewalk on Mars using real NASA and USGS maps, routes that avoid slopes steeper than 18°, and radiation control.",
    "Proyecto final · Laboratorio de Programación II · 2026":
      "Final project · Programming Lab II · 2026",
    "Sistema de punto de venta para un kiosco 24 horas con tres turnos: ventas con carrito y código de barras, compras a proveedores, stock auditable y caja por turno con arqueo. Incluye una Web API REST con JWT.":
      "Point-of-sale system for a 24-hour kiosk with three shifts: sales with a cart and barcode search, supplier purchases, auditable stock and per-shift cash register reconciliation. Includes a REST Web API with JWT.",
    "Proyecto final · Programación Web II · 2026":
      "Final project · Web Programming II · 2026",
    "Plataforma para compartir fotografías con licencias, marcas de agua, valoraciones, colecciones, seguimiento entre usuarios y panel de moderación.":
      "Photo-sharing platform with licenses, watermarks, ratings, collections, user following and a moderation panel.",
    "Proyecto personal educativo · 2026": "Personal learning project · 2026",
    "Test de velocidad de tipeo que hice para aprender Vue 3 y practicar el manejo de estado y rutas.":
      "Typing speed test I built to learn Vue 3 and practice state management and routing.",
    "Proyecto en equipo · Laboratorio 2": "Team project · Lab 2",
    "Sistema de alquileres temporarios con propietarios, inquilinos, inmuebles, reservas, pagos, mapas y roles de usuario.":
      "Short-term rental system with owners, tenants, properties, bookings, payments, maps and user roles.",
    "Equipo de seis · Universidad de La Punta · 2025":
      "Team of six · Universidad de La Punta · 2025",
    "Sistema de gestión universitaria: alta, baja y modificación de alumnos y materias, inscripciones y registro de calificaciones.":
      "University management system: create, edit and delete students and courses, enrollments and grade recording.",
    "Otros proyectos": "Other projects",
    "Gestor para cine": "Cinema management system",
    "Votación electrónica": "Electronic voting",
    "ABM de personas": "People CRUD",
    "ABM de tienda": "Store CRUD",
    Cafetería: "Coffee shop",
    "Landing pages de estética": "Beauty salon landing pages",
    "Ver todos los repositorios en GitHub": "See all repositories on GitHub",
    Habilidades: "Skills",
    Datos: "Data",
    Herramientas: "Tools",
    Aprendiendo: "Learning",
    Estudios: "Education",
    "Tecnicatura en Desarrollo de Software":
      "Software Development Technical Degree",
    "Programador Universitario en Sistemas": "University Systems Programmer",
    "Certificación de freeCodeCamp": "freeCodeCamp certification",
    "Idiomas: español nativo, inglés B1.":
      "Languages: native Spanish, B1 English.",
    Contacto: "Contact",
    "Copiar correo": "Copy email",
    Copiado: "Copied",
    "Desarrollado por y para Emanuel Dupre ❤️":
      "Built by and for Emanuel Dupre ❤️",
  };
  var CV = {
    es: "./src/CV-Jesus-Emanuel-Garcia.pdf",
    en: "./src/CV-Jesus-Emanuel-Garcia-EN.pdf",
  };
  var norm = function (s) {
    return s.replace(/\s+/g, " ").trim();
  };
  var items = [],
    tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        return /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ||
          !norm(n.nodeValue)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    });
  while (tw.nextNode())
    items.push({ n: tw.currentNode, es: tw.currentNode.nodeValue });
  var meta = document.querySelector('meta[name="description"]'),
    esDesc = meta ? meta.content : "",
    esTitle = document.title;
  var cv = document.getElementById("cv"),
    btns = document.querySelectorAll("[data-lang]");
  function apply(lang, save) {
    var en = lang === "en";
    items.forEach(function (o) {
      var t = en && EN[norm(o.es)];
      o.n.nodeValue = t
        ? o.es.match(/^\s*/)[0] + t + o.es.match(/\s*$/)[0]
        : o.es;
    });
    document.title = (en && EN[esTitle]) || esTitle;
    if (meta) meta.content = (en && EN[esDesc]) || esDesc;
    document.documentElement.lang = lang;
    if (cv) cv.href = CV[lang];
    btns.forEach(function (b) {
      b.setAttribute(
        "aria-pressed",
        String(b.getAttribute("data-lang") === lang),
      );
    });
    if (save) {
      try {
        localStorage.setItem("lang", lang);
      } catch (e) {}
    }
  }
  var saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch (e) {}
  var lang =
    saved === "es" || saved === "en"
      ? saved
      : (navigator.language || "es").slice(0, 2) === "es"
        ? "es"
        : "en";
  apply(lang, false);
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.getAttribute("data-lang"), true);
    });
  });
})();

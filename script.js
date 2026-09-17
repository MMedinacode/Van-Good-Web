/* ============================================================
   CAFETERÍA VAN GOOD — datos y lógica
   ============================================================
   ✅ CARTA ACTUALIZADA 15-09-2026: precios reales sacados de su cuenta en
   Rappi (https://www.rappi.cl/restaurantes/900119573-cafeteria-van-good).
   Ojo: son precios de delivery, pueden variar un poco de los del local.
   Se mantienen además "Café con naranja" y "Chocolate caliente", verificados
   antes con fotos propias del local y reseñas, aunque Rappi no los
   liste con ese nombre — por eso quedan sin precio ("Consultar").
   ============================================================ */

const MENU = {
  "frias": {
    "label": "Bebidas Frías",
    "items": [
      { "n": "Café helado", "d": "Expreso doble con helado de vainilla y crema chantilly.", "p": 4890 },
      { "n": "Jugo natural de frutas", "d": "Elaborado con la selección de frutas del día.", "p": 3200 },
      { "n": "Latte frío vainilla", "d": "Expreso doble con hielo, leche y syrup de vainilla.", "p": 3490 },
      { "n": "Latte frío caramelo", "d": "Expreso doble con hielo, leche y syrup de caramelo.", "p": 3490 },
      { "n": "Latte frío", "d": "Espresso con leche vaporizada y una fina capa de espuma, servido frío.", "p": 3900 },
      { "n": "Cappuccino frío", "d": "Café espresso con leche vaporizada y espuma de leche, servido frío.", "p": 3800 },
      { "n": "Bebida en lata", "d": "Bebida en lata carbonatada.", "p": 2000 },
      { "n": "Café con naranja", "d": "Bebida fría de espresso sobre jugo de naranja — fotografiada en el local", "img": "noche-estrellada.jpg" }
    ]
  },
  "cafe": {
    "label": "Té y Café",
    "items": [
      { "n": "Espresso", "d": "Café concentrado, preparado con agua caliente y granos finamente molidos.", "p": 2700 },
      { "n": "Americano", "d": "Café espresso diluido con agua caliente.", "p": 2900 },
      { "n": "Cortado", "d": "Café espresso con una pequeña cantidad de leche caliente y espuma.", "p": 3200 },
      { "n": "Cappuccino", "d": "Café espresso con leche vaporizada y una capa de espuma de leche.", "p": 3500 },
      { "n": "Latte", "d": "Café espresso con leche vaporizada y una fina capa de espuma.", "p": 3700 },
      { "n": "Mocaccino", "d": "Espresso con leche vaporizada, espuma y sirope de chocolate.", "p": 4200 },
      { "n": "Latte chai", "d": "Espresso doble con leche texturizada con syrup de té chai.", "p": 3690 },
      { "n": "Té (variedades)", "d": "Infusión de hojas disponible en diversas variedades.", "p": 2500 },
      { "n": "Chocolate caliente", "d": "\"El chocolate muy bueno\", dice una reseña. Va con cacao espolvoreado y malvaviscos", "img": "chocolate.jpg" }
    ]
  },
  "sandwiches": {
    "label": "Sándwiches",
    "items": [
      { "n": "Clásico Molde", "d": "Pan masa madre, jamón, queso, lechuga y tomate.", "p": 3990 },
      { "n": "Clásico Ciabatta", "d": "Jamón, queso, lechuga, tomate, pepinillos y aceitunas.", "p": 4290 },
      { "n": "Clásico Croissant", "d": "Croissant con jamón y queso.", "p": 4290 },
      { "n": "Barros Luco Molde", "d": "Pan masa madre con churrasco premium y queso fundido.", "p": 4890 },
      { "n": "Barros Luco Croissant", "d": "Croissant con churrasco premium y queso fundido.", "p": 4990 },
      { "n": "Barros Luco Ciabatta", "d": "Pan ciabatta con churrasco premium y queso fundido.", "p": 5290 },
      { "n": "Napolitano Molde", "d": "Pan masa madre con jamón, queso, tomate cherry, aceitunas y orégano.", "p": 6490 },
      { "n": "Napolitano Croissant", "d": "Croissant con jamón, queso, tomate cherry, aceitunas y orégano.", "p": 6690 },
      { "n": "Napolitano Ciabatta", "d": "Pan ciabatta con jamón, queso, tomate cherry, aceitunas y orégano.", "p": 6790 },
      { "n": "Napolitano (Vegetariano)", "d": "Salsa de tomate, queso derretido y hierbas.", "p": 5700 },
      { "n": "Brasileño Molde", "d": "Carne laminada, cebolla caramelizada y queso derretido.", "p": 6400 },
      { "n": "Brasileño Croissant", "d": "Croissant con churrasco premium, queso y palta.", "p": 6690 },
      { "n": "Brasileño Ciabatta", "d": "Pan ciabatta con churrasco premium, queso y palta.", "p": 6890 }
    ]
  },
  "dulces": {
    "label": "Dulces",
    "items": [
      { "n": "Donut", "d": "Bollo dulce frito con forma de anillo ondulado y glaseado.", "p": 2500 },
      { "n": "Muffin", "d": "Panecillo dulce horneado con cobertura de crumble y caramelo.", "p": 2800 },
      { "n": "Queque de la casa", "d": "Queque casero, con forma de rosca.", "p": 1990 },
      { "n": "Kuchen de Nuez", "d": "Kuchen individual artesanal con nueces seleccionadas.", "p": 3290 },
      { "n": "Kuchen de manzana", "d": "Kuchen individual con cubierta de masa tipo rejilla.", "p": 3490 },
      { "n": "Pie de Limón", "d": "Con merengue y rodajas de limón.", "p": 3290 },
      { "n": "Tartaleta sureña", "d": "Relleno de arándanos y crumble, espolvoreada con azúcar flor.", "p": 3490 },
      { "n": "Tartaleta maracuyá", "d": "Crema de maracuyá sin lactosa.", "p": 3290 },
      { "n": "Porción de torta", "d": "Porción individual de tarta.", "p": 4200 },
      { "n": "Croissant de Chocolate", "d": "Relleno de chocolate de avellana, manjar y crema chantilly.", "p": 3990 },
      { "n": "Croissant Pistacho", "d": "Crema de pistacho, pistacho molido, manjar y crema chantilly.", "p": 3990 },
      { "n": "Cheesecake Chocolate", "d": "Horneado, queso crema americano con base de galleta.", "p": 4890 },
      { "n": "Cheesecake Frutos del bosque", "d": "Horneado, queso crema americano con capa de frutos rojos.", "p": 4890 }
    ]
  },
  "pizzas": {
    "label": "Pizzas",
    "items": [
      { "n": "Pizza Margarita", "d": "Salsa de tomate de la casa, queso mozzarella y albahaca. Tamaño mediano.", "p": 12990 },
      { "n": "Pizza Pepperoni", "d": "Salsa de tomate de la casa, queso mozzarella y pepperoni. Tamaño mediano.", "p": 12990 },
      { "n": "Pizza Napolitana", "d": "Salsa de tomate de la casa, queso mozzarella, jamón y aceitunas. Tamaño mediano.", "p": 12990 },
      { "n": "Pizza Vegetariana", "d": "Salsa de tomate de la casa, queso mozzarella, pimentón y champiñones.", "p": 13990 }
    ]
  },
  "desayunos": {
    "label": "Desayunos",
    "items": [
      { "n": "Girasoles", "d": "Pan masa madre, con huevo revuelto y palta.", "p": 5890 },
      { "n": "Cipreses", "d": "Tostada de pan masa madre con huevo revuelto y tocino.", "p": 5890 },
      { "n": "Almendro en flor", "d": "Omelette de queso y jamón con palta y galletas de trigo.", "p": 5990 },
      { "n": "Amapola", "d": "Omelette de zanahoria con tomate cherry y galletas de trigo.", "p": 5990 }
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl   = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

Object.keys(MENU).forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = MENU[key].label;
  tab.dataset.key = key;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.addEventListener('click', () => showTab(key));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  MENU[key].items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item reveal';

    if (item.img) {
      // La clase cf-thumb la necesita el grid de .menu-item para ubicarla en
      // su columna; sin ella la miniatura caia fuera de las areas y abria
      // una fila extra.
      const cont = document.createElement('div');
      cont.className = 'cf-thumb';
      const im = document.createElement('img');
      im.src = 'fotos/' + item.img; im.alt = item.n; im.loading = 'lazy';
      im.style.cssText = 'width:58px;height:58px;object-fit:cover;border-radius:12px;';
      cont.appendChild(im);
      row.appendChild(cont);
    }

    const texto = document.createElement('div');
    texto.className = 'menu-item-text';
    const nombre = document.createElement('span');
    nombre.className = 'name';
    nombre.textContent = item.n;
    texto.appendChild(nombre);

    if (item.d) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = item.d;
      texto.appendChild(desc);
    }

    // Sin precio publicado: "Consultar", nunca un monto inventado.
    const precio = document.createElement('div');
    precio.className = 'price';
    precio.textContent = item.p ? money(item.p) : 'Consultar';

    row.appendChild(texto);
    row.appendChild(precio);
    grid.appendChild(row);
  });

  panel.appendChild(grid);
  panelsEl.appendChild(panel);
});

function showTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const activo = t.dataset.key === key;
    t.classList.toggle('active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  initScrollReveal();
}

/* ---------- NAVEGACIÓN POR PESTAÑAS ---------- */
const navLinks = document.getElementById('navLinks');

function goToTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tabPanel === tabId);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tabId);
  });
  navLinks.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); goToTab(el.dataset.tab); });
});

document.getElementById('navToggle').addEventListener('click', function () {
  const abierto = navLinks.classList.toggle('open');
  this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* ---------- INDICADOR ABIERTO / CERRADO ----------
   ⚠️ Google confirma que CIERRA a las 20:00. La hora de apertura NO está publicada: se asume 10:00 como estimación y así se declara en Visítanos. */
function horarioDeHoy() {
  return [10 * 60, 20 * 60];
}

function actualizarEstado(dotId, textId) {
  const dot  = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if (!dot || !text) return;
  const ahora   = new Date();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();
  const h       = horarioDeHoy();
  if (!h) {
    // Sin horario publicado: se esconde la pildora entera en vez de
    // afirmar que esta cerrado, cosa que no nos consta.
    const caja = text.closest('.pill, .status-line') || text.parentElement;
    if (caja) caja.hidden = true;
    return;
  }
  const abierto = minutos >= h[0] && minutos < h[1];
  text.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !abierto);
}

actualizarEstado('statusDot', 'statusText');
actualizarEstado('statusDot2', 'statusText2');
actualizarEstado('statusDot3', 'statusText3');

/* ---------- SCROLL REVEAL (con red de seguridad) ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 55) + 'ms';
    io.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}
initScrollReveal();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 320);
});

// Marca en la lista de horario el día de hoy. La lista es estática en el
// HTML a propósito: si el JS falla, el horario igual se lee.
function marcarDiaDeHoy() {
  const hoy = new Date().getDay();
  document.querySelectorAll('.horario-semana li[data-dia]').forEach(function (li) {
    li.classList.toggle('hs-hoy', Number(li.dataset.dia) === hoy);
  });
}
marcarDiaDeHoy();

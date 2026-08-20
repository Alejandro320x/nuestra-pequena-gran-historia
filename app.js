// Este archivo genera la página. No necesitas editarlo para cambiar tus recuerdos.
document.title = SITE.pestana;
document.querySelector('#hero-eyebrow').textContent = SITE.etiqueta;
document.querySelector('#hero-title').innerHTML = SITE.titulo;
document.querySelector('#hero-intro').textContent = SITE.introduccion;
document.querySelector('#timeline-title').textContent = SITE.tituloLinea;
document.querySelector('#timeline-intro').textContent = SITE.introduccionLinea;
document.querySelector('#ending-text').textContent = SITE.despedida;

const timeline = document.querySelector('#timeline');
// Encuadre revisado para cada portada, en el orden de los recuerdos.
const PORTADAS_POSICION = ['50% 55%', '50% 48%', '50% 43%', '50% 47%', '50% 53%', '50% 50%', '50% 45%', '50% 50%', '50% 45%', '50% 50%', '50% 50%', '50% 46%', '50% 47%', '50% 53%', '50% 42%', '50% 45%'];
timeline.innerHTML = RECUERDOS.map((recuerdo, indice) => `
  <article class="memory" style="--tilt:${indice % 2 ? '2deg' : '-2deg'}"><button data-index="${indice}" aria-label="Abrir recuerdo: ${recuerdo.titulo}"><div class="photo"><img src="${recuerdo.foto}" alt="" style="object-position:${recuerdo.posicion || PORTADAS_POSICION[indice] || 'center'}"></div><span class="date">${recuerdo.fecha}</span><h3>${recuerdo.titulo}</h3><p>${recuerdo.resumen}</p></button></article>`).join('');

function adaptarMarco(imagen) {
  const marco = imagen.closest('.photo');
  if (!marco || !imagen.naturalWidth || !imagen.naturalHeight) return;
  marco.style.aspectRatio = `${imagen.naturalWidth} / ${imagen.naturalHeight}`;
}

document.querySelectorAll('.photo img').forEach((imagen) => {
  if (imagen.complete) adaptarMarco(imagen);
  imagen.addEventListener('load', () => adaptarMarco(imagen));
});

const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const again = document.querySelector('#again');
let selectedIndex; let revealTimer;
const music = document.querySelector('#background-music');

// Arranca al cargar y vuelve a intentarlo con la primera interacción si el navegador bloquea audio automático.
function reproducirMusica() { music.play().catch(() => {}); }
window.addEventListener('load', reproducirMusica);
document.addEventListener('pointerdown', reproducirMusica, { once: true });
function cargarRecuerdo(recuerdo) { document.querySelector('#modal-image').src = recuerdo.foto; document.querySelector('#modal-image').alt = recuerdo.titulo; document.querySelector('#reveal-title').textContent = recuerdo.titulo; document.querySelector('#modal-date').textContent = recuerdo.fecha; document.querySelector('#modal-title').textContent = recuerdo.titulo; document.querySelector('#modal-description').textContent = recuerdo.descripcion; document.querySelector('#modal-quote').textContent = recuerdo.frase; const rotaciones = ['-5deg', '2deg', '5deg', '-3deg', '3deg']; const fotos = (recuerdo.fotos?.length ? recuerdo.fotos : [recuerdo.foto, recuerdo.foto, recuerdo.foto, recuerdo.foto, recuerdo.foto]).slice(0, 5); const tarjeta = (foto, indice) => `<figure class="collage-photo" style="--rotation:${rotaciones[indice]}"><img src="${foto}" alt="Foto ${indice + 1} de ${recuerdo.titulo}"></figure>`; const collage = document.querySelector('#photo-collage'); collage.innerHTML = `<div class="collage-row collage-row-top">${fotos.slice(0, 3).map(tarjeta).join('')}</div><div class="collage-row collage-row-bottom">${fotos.slice(3, 5).map((foto, indice) => tarjeta(foto, indice + 3)).join('')}</div>`; }
function reproducirAnimacion() { clearTimeout(revealTimer); modal.classList.remove('show-detail'); const progress = document.querySelector('.reveal-progress'); progress.replaceWith(progress.cloneNode(true)); revealTimer = setTimeout(() => modal.classList.add('show-detail'), 2650); }
function abrirRecuerdo(indice) { selectedIndex = indice; cargarRecuerdo(RECUERDOS[indice]); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); reproducirAnimacion(); close.focus(); }
function cerrarRecuerdo() { clearTimeout(revealTimer); modal.classList.remove('open', 'show-detail'); modal.setAttribute('aria-hidden', 'true'); document.querySelector(`[data-index="${selectedIndex}"]`)?.focus(); }
timeline.addEventListener('click', (event) => { const button = event.target.closest('button[data-index]'); if (button) abrirRecuerdo(Number(button.dataset.index)); });
close.addEventListener('click', cerrarRecuerdo); again.addEventListener('click', reproducirAnimacion); modal.addEventListener('click', (event) => { if (event.target === modal) cerrarRecuerdo(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('open')) cerrarRecuerdo(); });

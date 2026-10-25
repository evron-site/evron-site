const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); if (toggle) toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quoteForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`EVRON web sitesi — ${data.get('type')}`);
  const body = encodeURIComponent(`Ad soyad: ${data.get('name')}\nE-posta: ${data.get('email')}\nTalep türü: ${data.get('type')}\n\nMesaj:\n${data.get('message')}`);
  document.getElementById('formStatus').textContent = 'E-posta uygulaman açılırsa taslağı kontrol edip gönderebilirsin.';
  window.location.href = `mailto:info@evron.com.tr?subject=${subject}&body=${body}`;
});

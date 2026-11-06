// Hors Champ — Drop 01
// Envoi du formulaire « accès anticipé » vers Netlify Forms, sans recharger la page.

const form = document.getElementById('form-acces');
const status = document.getElementById('form-status');
const email = document.getElementById('email');

const MESSAGES = {
  ok: 'Merci. Tu recevras les prochaines informations du drop.',
  invalid: 'Adresse email invalide. Vérifie-la puis réessaie.',
  sending: 'Envoi…',
  error: "Envoi impossible pour l'instant. Le formulaire fonctionne une fois le site publié sur Netlify ; réessaie dans un instant."
};

function setStatus(text, ok = false) {
  status.textContent = text;
  status.classList.toggle('is-ok', ok);
}

email.addEventListener('input', () => {
  email.removeAttribute('aria-invalid');
  setStatus('');
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!email.checkValidity()) {
    email.setAttribute('aria-invalid', 'true');
    setStatus(MESSAGES.invalid);
    email.focus();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  setStatus(MESSAGES.sending);

  try {
    const body = new URLSearchParams(new FormData(form)).toString();
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.classList.add('is-done');
    setStatus(MESSAGES.ok, true);
  } catch (err) {
    console.warn('Formulaire non envoyé :', err);
    setStatus(MESSAGES.error);
    button.disabled = false;
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

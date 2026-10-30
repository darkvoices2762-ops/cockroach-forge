/* First-run welcome screen; this is not an authentication or security boundary. */
function initGatePage() {
  const btnUnlock = document.getElementById('btnUnlock');
  if (!btnUnlock || btnUnlock.dataset.initialized === 'true') return;
  btnUnlock.dataset.initialized = 'true';
  btnUnlock.addEventListener('click', async () => {
    btnUnlock.textContent = 'Opening Cockroach Forge…';
    btnUnlock.disabled = true;
    try {
      await fetch('/api/verify', { method: 'POST' });
      localStorage.setItem('cockroachforge_verified', 'true');
      showToast('Welcome to Cockroach Forge!', 'success');
    } catch {
      localStorage.setItem('cockroachforge_verified', 'true');
    }
    setTimeout(showApp, 250);
  });
}

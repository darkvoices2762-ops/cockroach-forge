function initNavbar() {
 const nav=document.getElementById('navbar');if(!nav)return;
 nav.innerHTML='<div class="nav-brand"><img src="/static/assets/logo.svg" width="28" alt="Cockroach Forge logo"><span class="nav-title">Cockroach Forge</span></div><div class="nav-tabs">'+[['studio','Studio'],['voices','Voices'],['clone','Clone'],['batch','Batch']].map(([id,label])=>'<button type="button" class="nav-tab" data-page="'+id+'">'+label+'</button>').join('')+'</div><div class="nav-badge"><span class="badge-dot"></span> Pocket TTS · Azaad &amp; Usman</div>';
 nav.querySelectorAll('.nav-tab').forEach(tab=>tab.addEventListener('click',()=>navigateTo(tab.dataset.page)));
}
function setActiveTab(page){document.querySelectorAll('.nav-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.page===page));}

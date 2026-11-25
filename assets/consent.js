(function(){
  var KEY='tb-consent', GTM_ID='GTM-PMDKPZ6G';
  function read(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function write(v){ try{ if(v) localStorage.setItem(KEY,v); else localStorage.removeItem(KEY); }catch(e){} }
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  function loadAnalytics(){
    if(window.__tbAnalytics) return;
    window.__tbAnalytics = true;
    gtag('js', new Date());
    var s=document.createElement('script');
    s.async=true;
    s.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;
    document.head.appendChild(s);
  }
  var bar=document.querySelector('.cookie');
  function hide(){ if(bar) bar.classList.remove('show'); }
  var v=read();
  if(v==='granted') loadAnalytics();
  else if(!v && bar) bar.classList.add('show');
  document.addEventListener('click', function(e){
    var t=e.target.closest ? e.target.closest('[data-consent]') : null;
    if(!t) return;
    var a=t.getAttribute('data-consent');
    if(a==='accept'){ write('granted'); loadAnalytics(); hide(); }
    else if(a==='decline'){ write('denied'); hide(); }
    else if(a==='reset'){ write(null); location.reload(); }
  });
})();

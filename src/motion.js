export function initAnimations(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  document.documentElement.classList.add('js');
  var els=document.querySelectorAll('.head,.aboutpic,.about p,.facts,.job,.p,.sk,.cred li,.refs,.contact h2,.contact p,.contact .btns');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);
      setTimeout(function(){t.classList.remove('reveal','in');t.style.transitionDelay=''},1200)}})},{threshold:.15});
  els.forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
  document.querySelectorAll('.stats b').forEach(function(b){
    var t=b.textContent,n=parseInt(t,10),s=t.replace(/[0-9]/g,'');b.textContent='0'+s;
    var o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();
      var st=performance.now();(function f(now){var p=Math.min((now-st)/1200,1);
        b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)},{threshold:.6});
    o.observe(b)});
}
export function initExtras(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
  function onScroll(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;bar.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  var role=document.querySelector('.hero .role');
  if(role){var ty=document.createElement('div');ty.className='typed';ty.setAttribute('aria-hidden','true');ty.innerHTML='<span></span><i></i>';role.after(ty);
    var words=['Manual and automated testing','Playwright and API testing','Bug hunting with JIRA','Audit-minded and ISO 27001 trained'],span=ty.firstChild,w=0,c=0,del=false;
    (function tick(){var word=words[w],d=del?35:70;span.textContent=word.slice(0,c);
      if(!del&&c===word.length){del=true;d=1400}else if(del&&c===0){del=false;w=(w+1)%words.length;d=350}
      c+=del?-1:1;setTimeout(tick,d)})();}
  var st=document.querySelector('.statswrap');
  if(st){var names=[];document.querySelectorAll('.sk .chip').forEach(function(x){if(names.indexOf(x.textContent)<0)names.push(x.textContent)});
    var tk=document.createElement('div');tk.className='ticker';tk.setAttribute('aria-hidden','true');
    var html=names.map(function(n){return '<span>'+n+'</span>'}).join('');
    tk.innerHTML='<div class="track">'+html+html+'</div>';st.after(tk)}
  var links={};document.querySelectorAll('nav ul a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)Object.keys(links).forEach(function(k){links[k].classList.toggle('active',k===e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(links).forEach(function(k){var s=document.getElementById(k);if(s)so.observe(s)});
  if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.p,.sk').forEach(function(el){
    el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      el.style.transform='perspective(800px) rotateX('+(-y*6)+'deg) rotateY('+(x*6)+'deg) translateY(-4px)'});
    el.addEventListener('mouseleave',function(){el.style.transform=''})});
}

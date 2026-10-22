(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
var f=document.getElementById('booking');if(f){f.addEventListener('submit',function(e){var ep=f.getAttribute('data-endpoint');var d=new FormData(f);
if(ep){e.preventDefault();fetch(ep,{method:'POST',body:d,headers:{'Accept':'application/json'}}).then(function(r){if(!r.ok)throw 0;f.innerHTML='<p class="ab"><strong>已收到您的預約！</strong>門市人員將盡快以電話與您聯繫。</p>'}).catch(function(){alert('送出失敗，請改用電話 0800-580-731 或 LINE 預約。')});return}
e.preventDefault();var lines=[];d.forEach(function(v,k){lines.push(k+'：'+v)});location.href='mailto:'+f.getAttribute('data-mail')+'?subject='+encodeURIComponent('預約免費聽力檢查')+'&body='+encodeURIComponent(lines.join('\n'));});}
})();

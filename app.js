// swicth hanlde UI
const switchs = document.querySelectorAll('.switch');

for(let i = 0; i < switchs.length; i++) {
  switchs[i].addEventListener('click', switchClick);
}

function switchClick(e) {
  const ctx = e.target;
  if(ctx.classList.contains('active')) {
    ctx.classList.remove('active');
  }else {
    ctx.classList.add('active');
  }
}

import { sendDataByField } from './heplerFirebase.js'

// swicth hanlde UI
const switchs = document.querySelectorAll(".switch");

function switchClick(e) {
  const ctx = e.target;
  const getField = !!ctx.getAttribute('field-data') ? '/' + ctx.getAttribute('field-data') : '';
  const getTypeDevice = !!ctx.getAttribute('device-type') ? '/' + ctx.getAttribute('device-type') : '';
  const getLogic = !!ctx.getAttribute('logic') ? '/' + ctx.getAttribute('logic') : '';
  const path = 'devices' + getTypeDevice + getLogic + getField;
  if(getField && getTypeDevice && getLogic) {
    if (ctx.classList.contains("active")) {
      sendDataByField(path, true);
      ctx.classList.remove("active");
      if(ctx.previousElementSibling) {
        ctx.previousElementSibling.innerHTML = 'mở';
      }
    } else {
      sendDataByField(path, false);
      ctx.classList.add("active");
      if(ctx.previousElementSibling) {
        ctx.previousElementSibling.innerHTML = 'tắt';
      }
    }
  }else {
    console.log(`Element must have field:${!getField ? ' field-data' : ''}${!getTypeDevice ? ' device-type' : ''}${!getLogic ? ' logic' : ''}`);
  }
}

for (let i = 0; i < switchs.length; i++) {
  switchs[i].addEventListener("click", switchClick);
}

// toggle menu
const btnToggleMenu = document.querySelector('.welcome');
const menu = document.querySelector('.menu');

btnToggleMenu.addEventListener('click', function() {
  const ctx = menu;
  if (!ctx.classList.contains("active")) {
    anime({
      targets: menu,
      width: '100%',
      translateX: 0,
      easing: 'easeInOutExpo',
      duration: 500,
    });
    ctx.classList.add("active");
  } else {
    anime({
      targets: menu,
      translateX: '-100%',
      easing: 'easeOutExpo',
      duration: 500,
      complete: function() {
        anime({
          targets: menu,
          width: '0px',
          easing: 'easeOutExpo',
          duration: 200,
        });
      }
    });
    ctx.classList.remove("active");
  }
})

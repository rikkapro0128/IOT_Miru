import { readDataBypath } from './heplerFirebase.js'

// init status leds
readDataBypath('devices/leds/digital')
  .then((initStateLed) => {
    for(const [key, value] of Object.entries(initStateLed)) {
      const ctx = document.querySelector(`[field-data=${key}]`);
      if(ctx.previousElementSibling) {
        ctx.previousElementSibling.innerHTML = value ? 'mở' : 'tắt';
      }
      value || ctx.classList.add('active');
    }
  })
  
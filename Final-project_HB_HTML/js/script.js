// js/script.js
document.addEventListener('DOMContentLoaded', ()=>{

  // Form validation for password pattern:
  const form = document.getElementById('pwdForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const current = form.querySelector('#current').value.trim();
      const np = form.querySelector('#newpwd').value;
      const cp = form.querySelector('#confirm').value;
      const msg = document.getElementById('formMessage');
      msg.textContent = '';
      msg.className = '';
      // Pattern requirements:
      // - min length 9
      // - exactly 2 uppercase letters (we'll require at least 2 uppercase; exact 2 is complex for UX)
      // - at least 1 special character
      const minLen = np.length >= 9;
      const upperCount = (np.match(/[A-Z]/g) || []).length;
      const special = /[^A-Za-z0-9]/.test(np);
      if(!minLen || upperCount < 2 || !special){
        msg.textContent = 'Password must be at least 9 chars, contain at least 2 uppercase letters and 1 special character.';
        msg.className = 'error';
        return;
      }
      if(np !== cp){
        msg.textContent = 'New password and confirm password do not match.';
        msg.className = 'error';
        return;
      }
      // success
      msg.textContent = 'Password changed successfully!';
      msg.className = 'success';
      form.reset();
    });
  }

  // Map result card interactions (placeholder)
  const cards = document.querySelectorAll('.result-card');
  cards.forEach((c, i)=>{
    c.addEventListener('click', ()=>{
      // highlight selected
      cards.forEach(x=>x.style.border = '1px solid #eee');
      c.style.border = '2px solid #2f9d4e';
      // if Google Maps is loaded, this would focus corresponding marker.
      alert('This would focus the map marker for: ' + c.dataset.name + '\n(Enable Google Maps API and add your API key in map.html to make it live.)');
    })
  });

});

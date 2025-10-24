
/* main.js - máscaras, validação, toasts e pequenas interações */
document.addEventListener('DOMContentLoaded', function(){
  // Simple CPF mask: 000.000.000-00
  function cpfMask(v){
    v = v.replace(/\D/g,"");
    v = v.replace(/(\d{3})(\d)/,"$1.$2");
    v = v.replace(/(\d{3})(\d)/,"$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;
  }

  document.querySelectorAll('input[data-mask="cpf"]').forEach(function(input){
    input.addEventListener('input', function(e){
      var v = e.target.value;
      e.target.value = cpfMask(v);
    });
  });

  // Simple email validation on submit + required fields
  document.querySelectorAll('form').forEach(function(form){
    form.addEventListener('submit', function(e){
      var valid = true;
      var firstInvalid = null;
      form.querySelectorAll('[required]').forEach(function(field){
        field.classList.remove('invalid');
        if(!field.value || field.value.trim()===''){
          valid = false;
          field.classList.add('invalid');
          if(!firstInvalid) firstInvalid = field;
        }
        if(field.type === 'email' && field.value){
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(!re.test(field.value)){
            valid = false;
            field.classList.add('invalid');
            toast('E-mail inválido', 'danger');
            if(!firstInvalid) firstInvalid = field;
          }
        }
      });
      if(!valid){
        e.preventDefault();
        toast('Preencha corretamente os campos obrigatórios', 'danger');
        firstInvalid && firstInvalid.focus();
      } else {
        // Show success toast and allow default submit (or prevent if you want to demo)
        e.preventDefault(); // remove this line to allow real submission
        toast('Formulário enviado com sucesso!', 'success');
        form.reset();
      }
    });
  });

  // Toast system
  var toastArea = document.createElement('div');
  toastArea.setAttribute('aria-live','polite');
  toastArea.style.position = 'fixed';
  toastArea.style.right = '16px';
  toastArea.style.bottom = '16px';
  toastArea.style.zIndex = 2000;
  document.body.appendChild(toastArea);

  window.toast = function(message, kind){
    var t = document.createElement('div');
    t.className = 'toast shadow-sm';
    t.style.padding = '12px 16px';
    t.style.marginTop = '8px';
    t.style.borderRadius = '8px';
    t.style.color = '#062a2a';
    t.style.minWidth = '200px';
    t.style.fontWeight = '600';
    if(kind === 'success'){ t.style.background = '#e9fbe9'; }
    else if(kind === 'danger'){ t.style.background = '#ffecec'; }
    else { t.style.background = '#e6f6ff'; }
    t.textContent = message;
    toastArea.appendChild(t);
    setTimeout(function(){ t.style.transition = 'opacity 400ms, transform 400ms'; t.style.opacity='0'; t.style.transform='translateY(8px)'; }, 2500);
    setTimeout(function(){ t.remove(); }, 3000);
  };

  // Modal open/close (for .modal with data-modal-target attributes)
  document.querySelectorAll('[data-modal-open]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var id = btn.getAttribute('data-modal-open');
      var modal = document.querySelector('[data-modal="'+id+'"]');
      if(modal) modal.setAttribute('open','');
    });
  });
  document.querySelectorAll('.modal').forEach(function(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal || e.target.closest('[data-modal-close]')){
        modal.removeAttribute('open');
      }
    });
  });

  // small reveal-on-scroll animation
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in-view'); }
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.card').forEach(function(c){ observer.observe(c); });
});

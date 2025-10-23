document.addEventListener('DOMContentLoaded',()=>{
  const cpf=document.getElementById('cpf');
  if(cpf){cpf.addEventListener('input',()=>{
    cpf.value=cpf.value.replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  });}
});
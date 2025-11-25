// Espera o DOM carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão do menu e o menu mobile
  const toggleBtn = document.querySelector('.navbar_toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  // Verifica se os elementos existem antes de adicionar o evento
  if (toggleBtn && mobileMenu) {
    const icon = toggleBtn.querySelector('ion-icon');
    
    // Ao clicar no botão, adiciona/remove a classe "active"
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');

      // Troca o ícone do botão
      if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('name', 'close-outline');
        toggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        icon.setAttribute('name', 'menu-outline');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Fecha o menu ao clicar em qualquer link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        icon.setAttribute('name', 'menu-outline');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        icon.setAttribute('name', 'menu-outline');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
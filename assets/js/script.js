// Espera o DOM carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão do menu e o menu mobile
  const toggleBtn = document.querySelector('.navbar_toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  // Verifica se os elementos existem antes de adicionar o evento
  if (toggleBtn && mobileMenu) {
    // Ao clicar, adiciona/remove a classe "active"
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');

      // Troca o ícone do botão
      const icon = toggleBtn.querySelector('ion-icon');
      if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('name', 'close-outline'); // ícone de fechar
      } else {
        icon.setAttribute('name', 'menu-outline'); // ícone de abrir
      }
    });
  }
});
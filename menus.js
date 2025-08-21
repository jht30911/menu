document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll('.menu_list li');
  const sections = document.querySelectorAll('.service');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const page = item.getAttribute('data-page');
      menuItems.forEach(i => i.classList.remove('choice'));
      item.classList.add('choice');

      sections.forEach(sec => {
        sec.classList.remove('show');
        if (sec.id === page) sec.classList.add('show');
      });
    });
  });
});

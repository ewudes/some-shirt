(function () {
  const elem = document.querySelector(`.products__list`);
  // eslint-disable-next-line no-undef
  const iso = new Isotope(elem, {
    itemSelector: `.products__item`,
  });

  const controlls = document.querySelectorAll(`.filter__link`);
  const activeClass = `filter__item--active`;
  controlls.forEach(function (control) {
    control.addEventListener(`click`, function (e) {
      e.preventDefault();

      const filterName = control.getAttribute(`data-filter`);

      // eslint-disable-next-line max-nested-callbacks
      controlls.forEach(function (link) {
        link.closest(`.filter__item`).classList.remove(activeClass);
      });
      control.closest(`.filter__item`).classList.add(activeClass);
      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();

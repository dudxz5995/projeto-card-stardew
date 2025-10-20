document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.map-container');
  const img = document.getElementById('map-image');
  const pins = document.querySelectorAll('.pin');

  function placePins() {
    const rect = container.getBoundingClientRect();
    pins.forEach(pin => {
      const left = parseFloat(pin.dataset.left);
      const top = parseFloat(pin.dataset.top);
      pin.style.left = left + '%';
      pin.style.top = top + '%';
    });
  }

  function showTooltip(pin) {
    const id = pin.dataset.tooltip;
    const tip = document.getElementById(id);
    if (!tip) return;

    tip.classList.add('active');

    const cRect = container.getBoundingClientRect();
    const pinRect = pin.getBoundingClientRect();

    const left = pinRect.left - cRect.left + pinRect.width/2;
    const top = pinRect.top - cRect.top;

    tip.style.left = left + 'px';
    tip.style.top = (top - 10) + 'px';
    const tipRect = tip.getBoundingClientRect();
    const overflowRight = tipRect.right - cRect.right;
    const overflowLeft = cRect.left - tipRect.left;
    if (overflowRight > 0) {
      tip.style.left = (left - overflowRight - 8) + 'px';
    } else if (overflowLeft > 0) {
      tip.style.left = (left + overflowLeft + 8) + 'px';
    }
  }

  function hideTooltip(pin) {
    const id = pin.dataset.tooltip;
    const tip = document.getElementById(id);
    if (!tip) return;
    tip.classList.remove('active');
  }

  pins.forEach(pin => {
    pin.addEventListener('mouseenter', () => showTooltip(pin));
    pin.addEventListener('mouseleave', () => hideTooltip(pin));
    pin.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const already = document.getElementById(pin.dataset.tooltip);
      document.querySelectorAll('.tooltip.active').forEach(t => t.classList.remove('active'));
      showTooltip(pin);
    });
  });

  window.addEventListener('resize', placePins);
  img.addEventListener('load', placePins);
  placePins();
});

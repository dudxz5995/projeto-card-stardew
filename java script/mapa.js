document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    const container = document.querySelector('.map-container');

    areas.forEach(area => {
        const tooltipId = area.dataset.tooltipId;
        const tooltip = document.getElementById(tooltipId);
        if (!tooltip) return;

        area.addEventListener('mouseover', function() {
            tooltip.classList.add('active');
        });

        area.addEventListener('mouseout', function() {
            tooltip.classList.remove('active');
        });
        area.addEventListener('mousemove', function(e) {
            const containerRect = container.getBoundingClientRect();

            let x = e.clientX - containerRect.left;
            let y = e.clientY - containerRect.top;

            tooltip.style.left = x + 15 + 'px';
            tooltip.style.top = y + 15 + 'px';
        });
    });
});
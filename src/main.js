(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-open-btn"),
        closeModalBtn: document.querySelector(".mobile-menu-close-btn"),
        mobilemenu: document.querySelector(".mobile-menu"),
    };
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.mobilemenu.classList.toggle("is-open");
    }
    /**
     * Scroll to section
     */
    function scrollToSection() {
        function smoothScroll(targetEl, duration) {
            let target = document.querySelector(targetEl);
            if (!target) {
                console.log('елемент куди скролити не знайдено:', targetEl);
                return;
            }
            let targetPosition = target.getBoundingClientRect().top;
            let startPosition = window.pageYOffset;
            let startTime = null;
            const ease = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
            const animation = function (currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);
        };
        const links = document.querySelectorAll('a.scroll-to');
        if (links) {
            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const currentTarget = this.getAttribute('href');
                    refs.mobilemenu.classList.contains("is-open") ? refs.mobilemenu.classList.remove("is-open") : null;
                    smoothScroll(currentTarget, 1000);
                });
            });
        }
    }
    scrollToSection();
})();
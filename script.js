document.addEventListener("DOMContentLoaded", function () {
    const boldFont = document.querySelector('.bold-font');
    const iconsContainer = document.querySelector('.icons-container');

    function startAnimation() {
        boldFont.classList.remove('animate');
        void boldFont.offsetWidth;
        boldFont.classList.add('animate');
    }

    function resetAnimation() {
        boldFont.classList.remove('animate');
        void boldFont.offsetWidth;
        boldFont.style.animation = 'none';
        void boldFont.offsetWidth;
        boldFont.classList.add('animate');
    }

    function showIcons() {
        iconsContainer.style.opacity = '1';
        const icons = document.querySelectorAll('.icons-container img');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.opacity = '1';
            }, index * 300);
        });
    }

    // Параллельно запускаем анимации текста и иконок
    boldFont.style.animation = 'writeText 3s steps(6) forwards, blinkDuringWrite 0.5s infinite, colorChange 6s infinite';
    boldFont.style.opacity = '1';

    iconsContainer.style.animation = 'fadeInIcons 2s forwards';
    showIcons();

    // Запускаем анимацию каждые 10 секунд
    setInterval(function () {
        resetAnimation();
        // Параллельно запускаем анимации текста и иконок
        boldFont.style.animation = 'writeText 3s steps(6) forwards, blinkDuringWrite 0.5s infinite, colorChange 6s infinite';
        boldFont.style.opacity = '1';

        iconsContainer.style.animation = 'fadeInIcons 2s forwards';
        showIcons();
    }, 10000);

    // Добавляем скрипт мигания title
    blinkTitle("👻 M1nz1k - Python", "🌟 M1nz1k - Developer", 500);

    function blinkTitle(message, title, delay, notifyOffPage) {
        let hold;

        if (notifyOffPage) {
            hold = setInterval(function () {
                if (document.hidden) blink();
            }, delay);
        } else {
            hold = setInterval(function () {
                blink();
            }, delay);
        }

        function blink() {
            document.title === title ?
                document.title = message :
                document.title = title;
        }
    }

    function blinkTitleStop() {
        clearInterval(hold);
    }
});

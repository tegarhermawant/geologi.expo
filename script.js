document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainMenu = document.querySelector('.main-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
        });
    }

    // 2. Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-area');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 3. Countdown Timer to Registration Deadline: Feb 25, 2026
    const countDate = new Date('Feb 25, 2026 23:59:59').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        if (document.getElementById('days')) {
            document.getElementById('days').innerText = String(textDay).padStart(2, '0');
            document.getElementById('hours').innerText = String(textHour).padStart(2, '0');
            document.getElementById('minutes').innerText = String(textMinute).padStart(2, '0');
            document.getElementById('seconds').innerText = String(textSecond).padStart(2, '0');
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately

    // 4. Tab Switching
    window.openTab = (evt, tabName) => {
        // Hide all tab content
        const tabContents = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }

        // Remove active class from all buttons
        const tabLinks = document.getElementsByClassName("tab-btn");
        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }

        // Show current tab and add active class to button
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    };
});

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('start-countdown').addEventListener('click', () => {
    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = new Date(document.getElementById('event-date').value);
    const eventTitle = document.getElementById('event-title');
    const countdown = document.getElementById('countdown');

    if (!eventName || isNaN(eventDate.getTime())) {
        alert('Please enter a valid event name and date.');
        return;
    }

    eventTitle.textContent = eventName;
    countdown.style.display = 'block';

    const updateCountdown = () => {
        const now = new Date();
        const timeDiff = eventDate - now;

        if (timeDiff <= 0) {
            countdown.innerHTML = `<h2>${eventName} has started!</h2>`;
            clearInterval(interval);
	    console.log(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    };

    updateCountdown(); // Update immediately
    const interval = setInterval(updateCountdown, 1000);
});
});


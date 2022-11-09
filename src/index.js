import './style.css';

document.addEventListener('DOMContentLoaded', function() {
    const yearContainer = document.getElementById('years');
    yearContainer.innerText = (new Date).getFullYear() - yearContainer.dataset.yearStart - yearContainer.dataset.gapYear;
});
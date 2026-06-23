import { getProjectData } from './data.js';
import { logTimestamp } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const data = getProjectData();
    
    const titleEl = document.getElementById('welcome-title');
    const descEl = document.getElementById('welcome-desc');
    const btnEl = document.getElementById('action-btn');

    // Initialize UI Text elements from module data
    titleEl.textContent = data.title;
    descEl.textContent = data.description;

    // Click handler interaction
    btnEl.addEventListener('click', () => {
        logTimestamp('User Button Clicked');
        
        titleEl.classList.toggle('text-blue-400');
        titleEl.classList.toggle('text-purple-400');
        
        alert('Event fired successfully! Check console logs for build parameters.');
    });
});

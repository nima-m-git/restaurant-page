import { pageLoad, body } from "./pageLoad.js";
import { contactTab} from './contact.js';
import { menuTab} from './menu.js';
import { aboutTab } from './about.js';

window.contactTab = contactTab;
window.menuTab = menuTab;
window.aboutTab = aboutTab;

pageLoad();

const content = document.getElementById('content');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        activeButton(button);
        content.innerHTML = '';
        window[button.value]();
        content.style.display = 'none';
        window.setTimeout(function() {
            content.style.display='block';
        }, 500);
    })
});

const activeButton = (button) => button.className = 'active';







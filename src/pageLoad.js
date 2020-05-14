const content = document.getElementById('content');
const header = document.querySelector('header');
const body = document.querySelector('body');

function addToHTML(childType, parent, text=null) {
    let child = document.createElement(childType);
    if (text) child.textContent = text;
    parent.appendChild(child);
}

const pageLoad = () => {
    addToHTML('h1', header, 'Best Restaurante');
    addToHTML('p', content, 'This restaurante so good we thought it was sent from the godzio');
    document.querySelector('body').style.backgroundImage = "url('static/restaurant.jpg')";
}

export {pageLoad}
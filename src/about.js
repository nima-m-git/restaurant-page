const about = `This ristorante was founded in 15 BC and it's delicate recipes 
              passed down through many generations.`

export const aboutTab = () => {
    let aboutDiv = document.createElement('div');
    aboutDiv.id = 'about';
    aboutDiv.innerHTML = about;
    document.querySelector('#content').appendChild(aboutDiv);
}


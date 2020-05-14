const contacts = `<b>Ristorante Amazinginio</b><br>
                1234 Imaginario Strada<br>
                Pompinio, Italia<br>
                +39 05 230 1930 <br>
                ristorante.imaginario@panzerotti.it`

export const contactTab = () => {
    let contactDiv = document.createElement('div');
    contactDiv.id = 'contact';
    contactDiv.innerHTML = contacts;
    document.querySelector('#content').appendChild(contactDiv);
}


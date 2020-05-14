const menu = `<u>Pizza</u><br>
                Margharita<br>
                Napoli<br>
                Veggie<br>
                Scicili<br>
                <br><br>
                <u>Pasta</u><br>
                Alfredo<br>
                Penne<br>
                Meatball<br>
                Pesce<br>
                Fetuccine<br>
                <br><br>
                <u>Vino</u><br>
                Pinoit Grigio<br>
                Savagne Blanc<br>
                Rosso<br>
                <br><br>
                <u>Dolce</u><br>
                Gelato<br>
                Tiramisu<br>
                `

export const menuTab = () => {
    let menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    menuDiv.innerHTML = menu;

    document.querySelector('#content').appendChild(menuDiv);
}
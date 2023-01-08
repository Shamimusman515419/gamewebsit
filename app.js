document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());



    console.log(cardArray);

    var grid = document.querySelector(".grid");

    var divbar = document.querySelector(".divbar");

    function craedBorad() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
            card.addEventListener("click", filpcard);

        }
    }
    craedBorad();


    var cardchosenID = [];
    var cardsChosine = [];

    var cardwon = [];

    function chackMatch() {

        const cards = document.querySelectorAll('img');

        if (cardchosenID[0] == cardchosenID[1]) {
            alert('you have clck same imgaes');
        }

        if (cardsChosine[0] === cardsChosine[1]) {

            alert('you found a match');
            cards[cardchosenID[0]].setAttribute('src', 'images/white.png');
            cards[cardchosenID[1]].setAttribute('src', 'images/white.png');
            cards[cardchosenID[0]].removeEventListener('click', filpcard)
            cards[cardchosenID[1]].removeEventListener('click', filpcard)
            cardwon.push(cardsChosine);
        } else {
            cards[cardchosenID[1]].setAttribute('src', 'images/blank.png');
            cards[cardchosenID[0]].setAttribute('src', 'images/blank.png');
            alert(' sorry tay agine');

        }

        if (cardwon.length == cardArray.length / 2) {
            congratulation();


        }
        console.log(cards);
        cardchosenID = [];
        cardsChosine = [];
    }

    function filpcard() {

        const cardId = this.getAttribute('data-id');

        cardchosenID.push(cardId);
        console.log(cardchosenID);
        cardsChosine.push(cardArray[cardId].name);
        let cardimg = this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosine.length === 2) {
            setTimeout(chackMatch, 500)
        }


    }

})


function congratulation() {
    let imgsrc = ["images/a214fd70b8647f01a85ecda12249eee6.jpg"];

    var mandv = document.querySelector(".divbar");
    let button = document.createElement('button');
    let img = document.createElement('img');

    button.innerHTML = 'Re Start';
    img.setAttribute('src', imgsrc);
    mandv.appendChild(button);
    mandv.appendChild(img);
    mandv.style.display = 'block';
    button.addEventListener('click', function () {
        location.reload();
    })

}



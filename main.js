const diceButton = document.querySelector('.rollDice');

function dice() {
    return Math.trunc(Math.random() * 6) + 1;
}

function removeInvisibleClass(param) {
    const removeInvisible = document.querySelectorAll(param);

    removeInvisible.forEach(dot => {
        dot.classList.remove('invisible')
    });
}

diceButton.addEventListener('click', function () {

    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.add('invisible');
    });

    const keyframes = [
        { transform: 'rotate(0deg) translate(0, 0)' },
        { transform: 'rotate(200deg) translate(5px, 5px)' },
        { transform: 'rotate(0deg) translate(0, 0)' }
    ];


    const options = {
        duration: 500, // 1000 is 1 second
        easing: 'ease-in-out'
    };

    document.querySelector('.dice').animate(keyframes, options);

    let rollDice;

    setTimeout(() => {
        rollDice = dice();
        console.log(rollDice);

        switch (rollDice) {
            case 1:
                removeInvisibleClass('.middleRow .dot:nth-child(2)');
                break;
            case 2:
                removeInvisibleClass('.topRow .dot:nth-child(1), .bottomRow .dot:nth-child(3)');
                break;
            case 3:
                removeInvisibleClass('.middleRow .dot:nth-child(2), .topRow .dot:nth-child(1), .bottomRow .dot:nth-child(3)');
                break;
            case 4:
                removeInvisibleClass('.topRow .dot:nth-child(1), .topRow .dot:nth-child(3), .bottomRow .dot:nth-child(1), .bottomRow .dot:nth-child(3)');
                break;
            case 5:
                removeInvisibleClass('.middleRow .dot:nth-child(2), .topRow .dot:nth-child(1), .topRow .dot:nth-child(3), .bottomRow .dot:nth-child(1), .bottomRow .dot:nth-child(3)');
                break;
            case 6:
                removeInvisibleClass('.topRow .dot:nth-child(1), .topRow .dot:nth-child(3), .middleRow .dot:nth-child(1), .middleRow .dot:nth-child(3), .bottomRow .dot:nth-child(1), .bottomRow .dot:nth-child(3)');
                break;
            default:
                console.log('There has been an unexpected error');
                break;
        }
    }, 400);
})
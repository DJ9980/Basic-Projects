document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display')
    const buttons = Array.from(document.querySelectorAll('input[type = button]'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;

            switch(value) {
                case 'C':
                    display.value = '';
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
            }
        });
    });
});
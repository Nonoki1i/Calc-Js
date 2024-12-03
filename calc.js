let a = '';
let b = '';
let sing = '';
let finish = false;
const lenght = 6;

// экран
const out = document.querySelector('.cals-screen p');

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '00'];

const act = ['-', '+', 'X', '/', '%'];

function ClearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = ClearAll;

document.querySelector('.buttons').onclick = (event) => {
    //если нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // если нажата ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
// проверка на нажатую кнопку
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            if (a.length > lenght) {a = a.slice(0, lenght);}
            if(key === '.' && a.indexOf('.')) {a = a.slice(0,2);}
            a += key;
            out.textContent = a;
            console.log(a, b, sing);
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            if (b.length > lenght) {b = b.slice(0, lenght);}
            if(key === '.' && b.indexOf('.')) {b = b.slice(0, 2);}
            b += key;
            out.textContent = b;
            console.log(a, b, sing);
        }
    }
    // если нажата удалить один символ
    if (event.target.classList.contains('del'))
    {
        if (sing===''){
            a = a.slice(0, -1);
            out.textContent = a || '0';
            console.log(a, b ,sing);
        }
        else {
            b = b.slice(0, -1);
            out.textContent = b || '0';
        }
    }
    // добавление 00
/*    if (event.target.classList.contains('none'))
    {
        if (sing===''){
            a = a*100;
            out.textContent = a;
            console.log(a, b ,sing);
        }
        else {
            b = b*100;
            out.textContent =  b;
        }
    }*/
    //знак
    if (act.includes(key)) {
        sing = key;
        out.textContent = sing;
        console.log(sing);
        return;
    }
    //вычесления
    if (key === '=') {
        if (b === '') {b = a;}
        switch (sing) {
            case "+":
                a = (+a)+(+b);
                break;
            case "-":
                a = a-b;
                break;
            case "X":
                a = a*b;
                break;
            case "/":
                if (b === '0')
                {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a/b;
                break;
            case "%":
                a = (a/100)*b;
                break;
        }

    finish = true;
    out.textContent = a.toFixed(5);
    console.log(a, b, sing);
    }
}

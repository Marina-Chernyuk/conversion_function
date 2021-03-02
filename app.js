'use strict';

/**
 * Пользователь вводит любое число в диапазоне [0, 999]
 * Веденое число присваевается переменной let obj, потом введёное значение "улетает" в     функцию function NumToObj(num) где проверяется на количества знаков. Если знаков более 3, происходит выход из программы с выводом на консоль NULL.
 * @param {*} num проверяется на предмет принадлежности к объектам 'сотни', 'десятки' и 'единицы'.
 * Если число из одной цифры, оно попадает в массив +arrNumber[2]; если из двух, то  +arrNumber[1]; если из трёх --  +arrNumber[0].
 * Соответствуующий массив выводится в консоль.
 */

function NumToObj(num)
{
    let arrNumber = num.split('');
    while (arrNumber.length < 3)
    {
    	arrNumber.unshift(0);
    }
    let objNumber = {};
    if (arrNumber.length > 3)
    {
    	return null;
    }
    else
    {
    	objNumber['сотни'] = +arrNumber[0]; 
    	objNumber['десятки'] = +arrNumber[1]; 
    	objNumber['единицы'] = +arrNumber[2];
        return objNumber;
    }
}
let number = prompt("Введите число");
let obj = NumToObj(number);
if (obj == null)
{
	console.log("NULL");
}
else
{
console.log(obj);
}

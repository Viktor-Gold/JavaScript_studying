import './style.css'

//! 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// let x = prompt("Enter your name: ")
// alert("Your name: " + x)

//! 2. Запросите у пользователя год его рождения, посчитайте,
//! сколько ему лет и выведите результат. Текущий год укажите
//! в коде как константу.

// const year = 2025
// let user_old = +prompt("Enter your year of birth: ")
// alert("Your are " + (year - user_old) + " years old")

//! 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// let d = +prompt("Enter the of square side: ")
// let P = d*4
// alert("square P = " + P)

//! 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// let r = +prompt("Enter the radius circle: ")
// let S = Math.PI*r**2
// alert("circle S = " + S)

//! 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он
//! хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// let s = +prompt("Введите расстояние между городами (в км): ")
// let t = +prompt("За сколько часов вы хотите преодолеть это расстояние?: ")
// let u = s/t
// alert("Чтобы преодолеть расстояние " + s + "км" + " за " + t + " часов, вам необходимо двигаться со скоростью: " + u + "км/ч")

//! 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
//! Курс валюты храните в константе.

// const usd_eur = 0.95
// let user_money = +prompt("Сколько $ в € вы хотите обменять?: ")
// alert("Вы получите: " + user_money*usd_eur + " евро")

//! 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько 
//! файлов размером в 820 Мб помещается на флешку.

// let user_usb = Number(prompt("Укажите объем флешки в Гб: ")) //! Не менял тип данных - отработало корректно
// let user_file = parseInt(prompt("Укажите размер файла в Мб")) //! Не менял тип данных - отработало корректно
// let usb = user_usb*1024
// alert(parseInt(usb/user_file) + " файлов размером в " + user_file + "Мб поместятся на флешку объемом в " + user_usb + "Гб")

//! 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит 
//! сколько шоколадок может купить пользователь и сколько сдачи у него останется.

// let user_money = prompt("Введите количество денежных средств в вашем кошелье (в рублях): ");
// let price_chocolate = prompt("Введите цену одной шоколадки, которую вы желаете купить: ");
// let sale_choco = parseInt(user_money/price_chocolate);
// let money_after = user_money - sale_choco * price_chocolate;
// alert("На сумму: " + user_money + " рублей вы сможете купить - " + sale_choco + " шоколадок. При этом у вас останется: " + money_after + " рублей");


// let testId = document.querySelector('#JS_urok1')
// testId.style.color = 'red'


//! Urok 2 

//! 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран

// let num_1 = prompt("Введите число, которое нужно возвести во 2-ую степень: ");
// alert("Результат: " + (num_1**2));
//! 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let num_1 = +prompt("Введите первое число: ");
// let num_2 = +prompt("Введите второе число: ");
// let average = (num_1 + num_2) / 2;
// alert("Среднее арифмитическое числа " + num_1 + " и " + num_2 + " = " + average);

//! 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let side_square = prompt("Введите длинну одной стороны квадрата: ");
// alert("Площадь квадрата равна: " + (side_square*4));

//! 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа 
//! выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу

// let kilometer = prompt("Введите количество километров: ")
// const mili = kilometer * 0.621371
// alert(kilometer + "км = " + mili + "миль")

//! 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа а выводит 
//! результаты действий + - * / между этими числами.

// let num_1 = Number(prompt("Введите первое число: "));
// let num_2 = Number(prompt("Введите первое число: "));
// let result = null;
// let operator = prompt("Выберите действие: (+; -; *; /)");

// if (operator == "+") {
//     alert("Ваше число: " + (result = num_1 + num_2));
// }

// if (operator == "-") {
//     alert("Ваше число: " + (result = num_1 - num_2));

// }

// if (operator == "*") {
//     alert("Ваше число: " + (result = num_1 * num_2));
// }

// if (operator == "/") {
//     alert("Ваше число: " + (result = num_1 / num_2));
// }

//! 6. Пользователь вводит значения a и b для формулы a * x + b = 0,
//! а программа считает и выводит значение x.

// let a = +prompt("Чтобы найти значение 'x' в уравнении: a*x+b=0 сначала введите значение 'a': ")
// let b = +prompt("Теперь введите значение 'b': ")
// let x = -b / a
// alert("'x' = " + x)

//! 7. Запросите у пользователя текущее время (часы и минуты) и выведите, 
//! сколько часов и минут осталось до следующего дня.

// let hours = Number(prompt("Введите часы: "))
// let minutes = Number(prompt("Введите минуты: "))
// alert("До следующего дня осталось: " + (23 - hours) + (" часа и ") + (60 - minutes) + " минут")


//! Urok 3 dz 1

//! 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
//! подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let user_age = Number(prompt("Укажите возраст человека: "))
// if(user_age >= 1 && user_age <= 11){
//     alert("Это возраст ребенка!")
// }

// else if(user_age >= 12 && user_age <= 17){
//     alert("Это возраст несовершеннолетнего подростка")
// }

// else if(user_age >= 18 && user_age <= 60){
//     alert("Это возраст полноценной личности")
// }

// else if(user_age >= 61 && user_age <= 100){
//     alert("Это пенсионный возраст")
// }

// else (alert("Введите корректный возраст!!!"))

//! 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
//! который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let symbol = prompt("Укажите цифру от (0 до 9), чтобы узнать какой под ней символ находится на клавиатуре: ")
// switch (symbol) {
//     case "0":
//         alert("Под цифрой: " + symbol + " находится символ: ')'")
//         break;

//     case "1":
//         alert("Под цифрой: " + symbol + " находится символ: '!'")
//         break;

//     case "2":
//         alert("Под цифрой: " + symbol + " находится символ: '@'")
//         break;
        
//     case "3":
//         alert("Под цифрой: " + symbol + " находится символ: '#'")
//         break;

//     case "4":
//         alert("Под цифрой: " + symbol + " находится символ: '$'")
//         break;

//     case "5":
//         alert("Под цифрой: " + symbol + " находится символ: '%'")
//         break;

//     case "6":
//         alert("Под цифрой: " + symbol + " находится символ: '^'")
//         break;

//     case "7":
//         alert("Под цифрой: " + symbol + " находится символ: '&'")
//         break;

//     case "8":
//         alert("Под цифрой: " + symbol + " находится символ: '*'")
//         break;

//     case "9":
//         alert("Под цифрой: " + symbol + " находится символ: '('")
//         break;

//     default:
//         alert("Что-то не так! Введите цифру от 0 до 9!!! Чтобы повторить, перезагрузите страницу!")
//         break;
// }

//! 4. Запросить у пользователя год и проверить, високосный он или нет. 
//! Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = Number(prompt("Введите год, чтобы узнать високонсый он или нет: "))
// if(year <= 0){
//     alert("Введите корректный год!!!")
// }

// else if(year%400==0){
//     alert("Год високосный")
// }

// else if(year%4==0){
//     alert("Год високосный")
// }

// else if(year%100!=0){
//     alert("Год не високосный")
// }

// else(alert("Введите корректный год!!!"))

//! 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую 
//! валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let userValue1 = prompt("Введите валюту, которую хотите обменять ' RUB; USD; EUR; UAH; AZN ': ")
// let userValue2 = prompt("Введите валюту, которую хотите получить ' RUB; USD; EUR; UAH; AZN ': ")
// let user_money

// // От рубля к другим валютам
// if (userValue1 == "RUB" || userValue1 == "rub") {
//     user_money = prompt("Сколько рублей у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 90) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 100) + " евро")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 2) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 50) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От доллара к другим валютам
// else if(userValue1 == "USD" || userValue1 == "usd"){
//     user_money = prompt("Сколько долларов у вас есть?: ")
//     if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 90) + " рублей")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 0.9) + " евро")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 40) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 1.7) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От евро к другим валютам
// else if(userValue1 == "EUR" || userValue1 == "eur"){
//     user_money = prompt("Сколько евро у вас есть?: ")
//     if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 95) + " рублей")
//     }
//     else if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 1.1) + " долларов")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 45) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 1.8) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От гривны к другим валютам
// else if(userValue1 == "UAH" || userValue1 == "uah"){
//     user_money = prompt("Сколько гривн у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.025) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.02) + " евро")
//     }
//     else if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 2) + " рублей")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.04) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От Маната к другим валютам
// else if(userValue1 == "AZN" || userValue1 == "azn"){
//     user_money = prompt("Сколько манатов у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.6) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.5) + " евро")
//     }
//     else if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 50) + " рублей")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.25) + " гривен")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }
// // Не верное название первой валюты
// else(alert("Введите ПЕРВУЮ валюту корректно и на английском языке!!!"))

//! 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//! от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. 

// let price = Number(prompt("Введите сумму чека, чтобы увидеть итоговую сумму со скидкой"))
// if (price >= 200 && price <= 299) {
//     alert("Итоговая сумма: " + (price - price*0.03) + " рублей со скидкой - 3%")
// }
// else if (price >= 300 && price <= 499){
//     alert("Итоговая сумма: " + (price - price*0.05) + " рублей со скидкой - 5%")
// }
// else if (price >= 500){
//     alert("Итоговая сумма: " + (price - price*0.05) + " рублей со скидкой - 7%")
// }
// else if (price < 200) {
//     alert("Скидка применяется от суммы 200р")
// }
// else (alert("Введите число!"))

//! 8. Запросить у пользователя длину окружности и периметр квадрата. 
//! Определить, может ли такая окружность поместиться в указанный квадрат. 

// let perimeter
// let circle = prompt("Введите длину окружности: ")
// let side_square
// let diameter

// if (circle > 0) {
//     perimeter = prompt("Введите периметр кввадрата: ")

//     if (perimeter > 0) {
//         side_square = perimeter / 4
//         diameter = circle / Math.PI
//         if (side_square > diameter) {
//             alert("Окружность длиной: " + circle + " С легкостью вмещается в квадрат с периметром: " + perimeter)
//         }
//         else(alert("Окружность длинной " + circle + " Слишком велика для квадарата с перимтром: " + perimeter))
//     }

//     else if (perimeter == 0) {
//         alert("Поле не может быть пустым!")
//     }
//     else if (typeof perimeter === "string") {
//         alert("Введите число!")
//     }

// }
// else if (circle == 0) {
//     alert("Поле не может быть пустым!")
// }
// else if (typeof circle === "string") {
//     alert("Введите число!")
// }

//! 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//! За каждый правильный ответ начисляется 2 балла. 
//! После вопросов выведите пользователю количество набранных баллов.

// let score = 0
// let quest1 = Number(prompt("В каком году основан JavaScript?: 1990; 1995; 1999?"));
// let quest2
// let quest3

// if (quest1 == 1995) {
//     score += 2
//     quest2 = prompt("Укажите год выхода языка CSS: 1994; 1996; 2000")
//     if (quest2 == 1996) {
//         score += 2
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     // Второй неверный ответ
//     else if (quest2 == 1994 || quest2 == 2000){
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     else (alert("Выберите один из трех вариантов: 1994; 1995; 2000"))
// }

// // Первый неверный ответ
// else if (quest1 == 1990 || quest1 == 1999){
//     quest2 = prompt("Укажите год выхода языка CSS: 1994; 1996; 2000")
//     if (quest2 == 1996) {
//         score += 2
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     // Второй неверный ответ 
//     else if (quest2 == 1994 || quest2 == 2000){
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     else (alert("Выберите один из трех вариантов: 1994; 1995; 2000"))
// }

// else (alert("Выберите один из трех вариантов: 1990; 1995; 1999"))

//! 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
//! Учтите возможность перехода на следующий месяц, год, а также високосный год.

// let day = Number(prompt("Введите день (цифра): "))
// let month = 0
// let year = 0

// // let month_name
// // switch (month) {
// //     case 1:
// //         month_name =" января"
// //         break;
// //     case 2:
// //         month_name =" февраля"
// //         break;
// //     case 3:
// //         month_name =" марта"
// //         break;
// //     case 4:
// //         month_name =" апреля"
// //         break;
// //     case 5:
// //         month_name =" мая"
// //         break;
// //     case 6:
// //         month_name =" июня"
// //         break;
// //     case 7:
// //         month_name =" июля"
// //         break;
// //     case 8:
// //         month_name =" августа"
// //         break;
// //     case 9:
// //         month_name =" сентября"
// //         break;
// //     case 10:
// //         month_name =" октября"
// //         break;
// //     case 11:
// //         month_name =" ноября"
// //         break;
// //     case 12:
// //         month_name =" декабря"
// //         break;
// // }


// if (day <= 0){
//     alert("Введите корректное цифру: ") //! Нулевой или отрицательный день
// }

// //! Последний день февраля високосного и не високосного года 
// else if (day == 28){
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         year = Number(prompt("Введите год: "))
//         if (year %4!=0){
//             day = 1
//             month = 3
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else if (year %4==0){
//             day += 1
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
// }

// //! Последний день 30-дневных месяцев
// else if (day == 30) {
//     day = 1
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         alert("В феврале не может быть больше 29 дней")
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11) { //! Новый месяц
//         month += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month >= 1 && month <= 12) { //! Все календарные дни
//         day = 31
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }  
//     else (alert("Введите корректны месяц"))
// }

// else if (day <= 30){
//     month = Number(prompt("Введите месяц (цифра): "))

//     if (month == 2 && day >= 30){
//         alert("В феврале не может быть больше 29 дней")
//     }

//     else if (day == 29 && month == 2) {
//         year = Number(prompt("Введите год: ")) //! Високосный год
//         if (year%4==0) {
//             day = 1
//             month = 3
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else if (year <=0) {
//             alert("Введите корректный год")
//         }
//         else (alert("В " + year + " году в феврале 28 дней!"))
//     }

//     else if (month >= 1 && month <= 12 && day <= 30) { //! Все календарные дни
//         day += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }  
//     else (alert("Введите корректный месяц"))
// }

// //! Последний день 31-дневных месяцев
// else if (day == 31) {
//     day = 1
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         alert("В феврале не может быть больше 29 дней")
//     }
//     else if (month == 12) {
//         year = Number(prompt("Введите год: ")) //! Новый год
//         if (year > 0){
//             year += 1
//             month = 1
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) { //! Новый месяц
//         month += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
//         alert("В этом месяце 30 дней!")
//     }
//     else (alert("Введите корректны месяц"))
// }
// else (alert("Введите корректное число: "))


//! Urok 3 dz 2

//! 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль

// let user_num = Number(prompt("Введите число: "))
// if (user_num > 0) {
//     alert("Число положительное")
// }
// else if (user_num < 0) {
//     alert("Число отрицательное")
// }
// else if (user_num == 0){
//     alert("Число равно нулю")
// }
// else (alert("Введите число!!!"))

//! 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// let year_user = Number(prompt("Сколько вам лет?: "))
// if (year_user >= 1 && year_user <= 120){
//     alert("Данные корректны")
// }
// else (alert("Данные не корректны!"))

//! 3. Запросить у пользователя число и вывести его модуль
//! (|7| = 7, |-7| = 7).

// let number = Number(prompt("Введите число: "));
// let modul = Math.abs(number)
// alert("Моудль числа " + number + " = " + modul)

//! 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных
// let hours = Number(prompt("Введите часы: "))
// let minutes = 0
// let seconds = 0
// if (hours <= 23 && hours >= 0) {
//     minutes = Number(prompt("Введите минуты: "))
//     if (minutes <= 59 && minutes >= 0) {
//         seconds = Number(prompt("Введите секунды: "))
//         if (seconds <= 59 && seconds >= 0) {
//             alert("Ваше время: " + hours + ":" + minutes + ":" + seconds)
//         }
//         else(alert("Данные не корректны: "))
//     }
//     else(alert("Данные не корректны: "))
// }
// else(alert("Данные не корректны: "))

//! 5. Запросить координаты точки (x, y) и определить номерчетверти, в которую попала эта точка. 
//! Необходимо учесть случаи попадания точки на оси X или Y или в начало координат

// let x = Number(prompt("Введите координат Х"))
// let y = Number(prompt("Введите координат У"))
// if (x < 0 && y > 0) {
//     alert("Точка пересечения Х, Y - находится в ПЕРВОЙ четверти графика")
// }
// else if (x > 0 && y > 0) {
//     alert("Точка пересечения Х, Y - находится во ВТОРОЙ четверти графика")
// }
// else if (x > 0 && y < 0) {
//     alert("Точка пересечения Х, Y - находится в ТРЕТЬЕЙ четверти графика")
// }
// else if (x < 0 && y < 0) {
//     alert("Точка пересечения Х, Y - находится в ЧЕТВЕРТОЙ четверти графика")
// }
// else if (x ==0 || y == 0) {
//     alert("Для определения точки в конкректной четверти графика значение Х и Y не могут быть равны 0")
// }
// else("Не корректные данные")

//! 6. Запросить у пользователя номер месяца и вывести на экран его название.

// let num_months = Number(prompt("Введите номер месяца: "))
// switch (num_months) {
//     case 1:
//         alert("Это - январь")
//         break;
//     case 2:
//         alert("Это - февраль")
//         break;
//     case 3:
//         alert("Это - март")
//         break;
//     case 4:
//         alert("Это - апрель")
//         break;
//     case 5:
//         alert("Это - май")
//         break;
//     case 6:
//         alert("Это - июнь")
//         break;
//     case 7:
//         alert("Это - июль")
//         break;
//     case 8:
//         alert("Это - август")
//         break;
//     case 9:
//         alert("Это - сентябрь")
//         break;
//     case 10:
//         alert("Это - октябрь")
//         break;
//     case 11:
//         alert("Это - ноябрь")
//         break;
//     case 12:
//         alert("Это - декабрь")
//         break;
// }

//! 2. Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). 
//! В зависимости от введенного знака решить пример и вывести результат.

// let num_1 = +prompt("Введите первое число: ");
// let num_2 = +prompt("Введите второе число: ");
// let result = null;
// let operator = prompt("Выберите действие: (+; -; *; /)");

// if (operator == "+") {
//     alert("Ваше число: " + (result = num_1 + num_2));
// }

// if (operator == "-") {
//     alert("Ваше число: " + (result = num_1 - num_2));
// }

// if (operator == "*") {
//     alert("Ваше число: " + (result = num_1 * num_2));
// }

//  if (operator == "/") {
//     alert("Ваше число: " + (result = num_1 / num_2));
// }


// ! Тернарный оператор
// let num_1 = 5
// let num_2 = 7
// console.log(num_1>num_2 ? num_1 : num_2);

// let h = 12
// h%5==0 ? console.log("Число " + h + " кратно 5") : console.log("Число " + h + " не кратно 5");

// ! Циклы
// let i = 0
// console.log(i);

// while (i<5) {
//     console.log(i);
//     i++  
// }

// console.log("================");

// let y = 5
// while (y > 0) {
//     console.log(y);
//     y--
    
// }

// do while (condition) {
    
// }

//  (  Началo; условие; шаг)
// for (let i = 0; i < 10; i++) {
//     if (i%2==1) {
//         console.log(i);
//     }
// }

// let number = 123
// console.log(number.toString().length);

//! 1 task
let num = 10
let str = ""
while (num>0) {
    num--
    str += "#"
}
console.log(str);

//! 2 task
let user_num = 10;
let diapazone = ""
while (user_num >= 0) {
    diapazone += user_num
    console.log(diapazone);
    user_num--
}

//! 3 task
let num_3 = 5
let pow = 3

while (pow>0) {
    num_3**pow
    console.log(num_3**pow);
    pow--
}

//! 4 task
console.clear()
let num_4 = 25
let num_5 = 10
let devider = num_5
while (devider>0) {
    if (num_4 % devider == 0 && num_5 % devider == 0){
        console.log(devider);
    }
    devider--
}

//! 5 task
let num6 = 5
let factorial = 1
while (num6>0) {
    factorial *= num6
    console.log(factorial);
    num6--
}
console.clear()
//1*5 5*4 20*3 60*2 120*1 

// Числа от 0 до 100 кратные числу введенные пользователем
// let n = 5
// for (let i = 0; i < 100;  i++) {
//     if (i%n == 0) {
//         console.log(i);
//     }
// }

// task 4
// let minNum = 10
// let maxNum = 50
// let string = ""

// for (let i = minNum; i < maxNum; i+=4) {
//     console.log(i);
// }

// task 5
 let y = 49
 let count = 0
 for (let i = 2; i < y; i++) {
    if (y%i==0){
        console.log(i);
        console.log("Число простое");
    }
    else {
        count++
        console.log("else");
    }
 }


// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:
// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют (не мутируют) 
// исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

//us

const getSortedUniqueSkills = (array) => {
    const arr = [...array];
    
    let skillsList = arr.map( ({skills}) => 
        skills) // тут я получил массив массивов со скилами
        .reduce(function(acc, cur){ 
            return acc.concat(cur);
        }, []) // тут я получаю массив со всеми скиллами (1 мерный)        
        .reduce(function(acc, cur) { //А вот сдесь непонятная мистика - ожидаю массив только с уникальными скилами, а он мне отдаёт массив с объектом
            console.log(acc);
            console.log(cur);
            if (acc.indexOf(cur) === -1) {
                acc[acc.lenght] = cur; //push нельзя
            } 
            return acc
        }, []);

        console.log("skillsList >>", skillsList);

        //Рабочий вариант
    //let uniqeSkills = Array.from(new Set(skillsList));
       
    // console.log("uniqeSkills >>", uniqeSkills);

    // return uniqeSkills
    //     .sort((a,b) => { 
    //         if (a < b) {
    //             return -1;
    //         } 
    //         if (a > b) 
    //             return 1;
    //         return 0
    //     })
}



export default getSortedUniqueSkills
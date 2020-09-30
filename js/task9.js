// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный массив, то следует сделать
// копию массива и сортировать уже копию, а не исходный массив.

const getNamesSortedByFriendsCount = (array) => {
    let arr1 = [...array];
    return arr1.sort((cur, next) => cur.friends.length - next.friends.length).map(({name}) => name) 
}


// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
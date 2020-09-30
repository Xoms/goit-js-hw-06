// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email 
// тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).
const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age >= min && age <= max)   
 .map(({name, email}) => ({name, email})); 
const reducer = (acc, {balance}) => acc + balance;

const calculateTotalBalance = array => array.reduce(reducer, 0);
    
    // (acc, {balance}) => {
    // console.log("current ballance >>", balance);
    // console.log("current acc >>", acc);
    // acc + balance }, array[0].balance);
export default calculateTotalBalance;
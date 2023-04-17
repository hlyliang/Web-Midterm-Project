var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];



var startDate = new Date();
var startDate = new Date();

function setInitialDate(dateString) {
    let year = dateString.substring(0, 4);
    let month = dateString.substring(5, 7);
    let day = dateString.substring(8, 10);
    setMonthAndDay(parseInt(month), parseInt(day), parseInt(year));
}

function setMonthAndDay(month, day, year) {
    startDate.setFullYear(year, month - 1, day);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


    //setMonthAndDay(2, 28);


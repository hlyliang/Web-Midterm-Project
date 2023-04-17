let imageURL_Array = [
    "images/拉麵.jpg",
    "images/滷肉飯.jpg",
    "images/水餃.jpg"
];

var buffer = 3;
$(function goRandom() {
    $("input").on("click", function () {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        while (buffer == randomChildNumber) {
            randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        }
        buffer = randomChildNumber;
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src", imageURL_Array[randomChildNumber]);
    });
});


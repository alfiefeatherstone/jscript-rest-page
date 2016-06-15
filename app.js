var tape = $('#content');

tape.append("<h1>What a restaurant</h1>");
tape.append("<button id='a'>Marvel</button><button id='b'>Gravel</button><button id='c'>Gable</button>");
tape.append("<div id='holder'></div>")

var a = $("#a");
var b = $("#b");
var c = $("#c");
var d = $("#holder");
d.css("margin", "2vh 0 0 0");
$("button").css({
    "margin": "0 10px 0 0",
})



a.on("click", function(){
    d.empty();
    d.append("<img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpsnSAlSXDL5RMePZ7PDH-Xjks4joXS7ZlpDf2Zbs9jXtGW1xYyQ'><p>Burbelbrbaubukjhfdkljfhkjdhaldjfkdfjlkdjf</p>")
})
b.on("click", function(){
    d.empty();
    d.append("<img src='http://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg'><p>Burbeldashfdkljfhdffefsaklfjlsdjkvnjkldsb.kzxjdbnvjklfldhnfliaehjlaiejfpioejff</p>")
})
c.on("click", function(){
    d.empty();
    d.append("<img src='https://upload.wikimedia.org/wikipedia/commons/9/9c/2007feb-sushi-odaiba-manytypes.jpg'><p>Bfsdkljfhkjdhaldjfkdfjlkdjf</p>")
})
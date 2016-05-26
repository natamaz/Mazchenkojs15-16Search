$(document).ready(function() {
    $("#button").click(function(){
        search();
    });
    $("body").append('<div id="result"></div>');
    $(window).keypress(function(enter){
        switch (enter.keyCode) {
            case 13:
                search();
                break;
        };
    });
});
function search(){
    var value = document.getElementById('inquiry').value;
    $.getJSON('http://api.riffsy.com/v1/search?tag=' + value + '&limit=10',
        function(data){
            $("#result").empty();
            $.each(data.results, function(i, results){
                $("#result").append('<h1>' + 'Запрос : ' + '<span>' + results.title + '</span>'+ '</h1>');
                $("<img/>").attr("src", results.itemurl).appendTo("#result");
                $("#result").append('<p>' + 'Перейти по ссылке: ' + '<a>' + results.url + '</a>' + '<p>');
                $("a").attr("href", results.url);

            });
        });
};/**
 * Created by НАФТУСЯ on 26.05.2016.
 */

/**
 * Created by aditya on 9/8/16.
 */
var ans=[];
var slideIndex = 1;
var name1;
$(document).ready(function () {
        var c;
    name1=sessionStorage.getItem("name");

    $.get('/showdata?name='+name1,function (data, status) {
        var i = 0;
        for (i = 0; i < data.length; i++)
            ans[i] = 0;
        console.log(data.length+"cjvh");
        for (i = 0; i < data.length; i++) {
            $(".slideshow-container").append(
                '<div class="mySlides fade">' + '<div class="numbertext">' +
                '<p> Q-' + (i + 1) + ' . ' + data[i].q + '</p>' +
                '<button onclick="action(\'' + '1' + '\',\'' + data[i].answer + '\',\'' + i + '\')"> ' + 'A. ' + data[i].option1 + '</button>' + '<br>' +
                '<button onclick="action(\'' + '2' + '\',\'' + data[i].answer + '\',\'' + i + '\')"> ' + 'B. ' + data[i].option2 + '</button>' + '<br>' +
                '<button onclick="action(\'' + '3' + '\',\'' + data[i].answer + '\',\'' + i + '\')"> ' + 'C. ' + data[i].option3 + '</button>' + '<br>' +
                '<button onclick="action(\'' + '4' + '\',\'' + data[i].answer + '\',\'' + i + '\')"> ' + 'D. ' + data[i].option4 + '</button>' + '<br>' +
                '</div>' + '</div>'
            );
            $(".slideshow-container").append(
                '<div class="mySlides fade">' + '<div class="numbertext">' +
                '<p>' + ' Answer is ' + data[i].answer + '</p>' +
                 '<button onclick="plusSlides(1)">Next question</button>'+
                '</div>' + '</div>'
            )
        }
        showSlides(slideIndex);
    });

});



function action(a,b,c) {
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);

    if(a==b)
    {
        ans[c]=10;
    }
    else
        ans[c]=0;
    console.log(a==b);
    console.log(ans);
    setTimeout(function () {
        plusSlides(1);
    },200);


}
function call() {
    console.log("feds");

}
/**
 * Created by aditya on 14/8/16.
 */
/**
 * Created by aditya on 14/8/16.
 */
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("clo")[0];
function call(item) {
    sessionStorage.setItem("name",item);
    modal.style.display = "block";

}
span.onclick = function() {
    modal.style.display = "none";
}

function go()
{
    window.location.href="/show";
}




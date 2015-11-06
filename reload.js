/**
 * Created by jeroen on 11/6/2015.
 */


var loadtxt = function(){
    $("#section3").load("slide1.txt");
}

setInterval(function(){
    console.log("timerticks");
    loadtxt();
},200)
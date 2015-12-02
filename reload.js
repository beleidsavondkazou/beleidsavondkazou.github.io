/**
 * Created by jeroen on 11/6/2015.
 */


    var loadtxt = function(){
        $("#slide11").load("slide1.0VV.txt");
        $("#slide21").load("slide1.2VV.txt");
        $("#slide31").load("slide1.3VV.txt");
        $("#slide21bis").load("slide2.0Vorming.txt");
        $("#slide22").load("slide2.1Vorming.txt");
        $("#slide23").load("slide2.2Vorming.txt");
        $("#slide24").load("slide2.3Vorming.txt");
        $("#slide31bis").load("slide3.0Cafe.txt");
        $("#slide32").load("slide3.1Cafe.txt");
        $("#slide33").load("slide4vragen.txt");





    }

    setInterval(function(){
        console.log("timerticks");
        loadtxt();
    },200)


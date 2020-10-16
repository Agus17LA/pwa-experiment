import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";

ReactDOM.render(<App/>,document.getElementById("root"));

$("#fourth").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".fourth").offset().top
    }, 2000);
});

$("#first").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#primero").offset().top
    }, 2000);
});
$("#second").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#segundo").offset().top
    }, 2000);
});
$("#third").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".third").offset().top
    }, 2000);
});
$("#index").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".first").offset().top
    }, 2000);
});
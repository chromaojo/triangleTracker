let num1Str =prompt("Enter first side");
let num2Str = prompt("Enter the second length");
let num3Str = prompt("Enter the length of the third side");
let num1=parseFloat(num1Str);
let num2=parseFloat(num2Str);
let num3=parseFloat(num3Str);


$(document).ready(function () {
    if (num1Str, num1Str=0 || num1Str.length, num2Str.length, num3Str.length===0) {
        $(".err").text("There is an error with the value entered. Zero or empty isn't a Number");
        $(".equilateral").hide();
        $(".isocceless").hide();
        $(".scalene").hide();
    } else if (num1 === num2 && num2 === num3) {
        $(".equ").text("Three sides are equal");
        $(".isocceless").hide();
        $(".equilateral").toggle();
        $(".scalene").hide();
    } else if (num1 === num2 || num1 == num3 || num2 === num3) {
        $(".scale").text("2 sides are equal");
        $(".equilateral").hide();
        $(".isocceless").hide();
        $(".scalene").toggle();
    } else if (num1 !== num2 || num1 !== num3 || num2 != num3) {
        $(".iso").text(" No sides are equal");
        $(".equilateral").hide();
        $(".isocceless").toggle();
        $(".scalene").hide();
    }
     

})
var result_exame = prompt("Please, choose a number between 1 and 10 for introduce the value of your exame :");


if (result_exame <= 5) {

    alert("Sorry, you didn't pass the exame!");

} else if (result_exame >= 5 && result_exame <= 10) {
    alert("Compliments, you passed the exame with the value of:" + " " + result_exame);

} else {

    alert("Wrong, you have to introduce the right number between 1 and 10!");
}
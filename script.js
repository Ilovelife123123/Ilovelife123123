function myFunction() {
    if (confirm("Are you sure?")) {
        document.getElementById("text").innerHTML = 'You press "Ok"♥';
    }
    else {
        var blok = document.getElementById("text")
        blok.innerHTML = 'Are you seriosly? Please press "Ok" no "Cancel"';
    }
}

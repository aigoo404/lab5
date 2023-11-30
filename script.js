function generate() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    if (from < to) {
        var result = Math.floor(Math.random() * (to - from + 1)) + parseInt(from);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Invalid range";
    }
}
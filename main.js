function change() {
    let f = document.getElementById("value").value;
    let c = (f-32)/1.8;
    document.getElementById("result").innerHTML = c ;
}
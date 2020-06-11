function f1() {
    var p;
    p = document.getElementById('out');
    //Заданное количество повторений
    //i++  i=i+1
    for ( var i = 1; i<=50; i = i+2){
        p.innerHTML += i+' ';
    }
}
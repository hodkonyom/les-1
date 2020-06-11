function f1() {
    var p, p1;
    p = document.getElementById('out');
    p1 = document.getElementById('out1');
    var i=0; //счетчик цикла
    while (i<50){//цикл с предусловием
        i++;
        p.innerHTML+=i+' ';
        // i=i+1;
        
    }

    var j=100;
    do {
        p1.innerHTML+=j + " ";
        // j--; // j--   j=j-1;
        j=j-2;
    }
    while (j>0); //цикл с постусловием
}
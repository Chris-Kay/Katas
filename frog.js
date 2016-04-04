function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
    return 5;
}
function six() {}
function seven(mathsCallback) {
    if(mathsCallback) {
        return mathsCallback(7);
    }
    return 7;
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times(int, int) {
    int * int
}
function dividedBy() {}

Test.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);
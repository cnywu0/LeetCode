function createCounter(n) {
    let contador = n;
    return function() {
        return contador++;
    };
}
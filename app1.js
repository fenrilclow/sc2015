function Human(name) {    // 1
    this.name = name;
}
Human.prototype.greet = function() {    //2
    console.log(�gHello! My name is �h + this.name);
}
var takagi = new Human(�gTomoharu�h);    // 3
takagi.greet(); // Hello! My name is Tomoharu.    // 4

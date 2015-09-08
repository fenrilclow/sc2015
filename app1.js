function Human(name) {    // 1
    this.name = name;
}
Human.prototype.greet = function() {    //2
    console.log(ÅgHello! My name is Åh + this.name);
}
var takagi = new Human(ÅgTomoharuÅh);    // 3
takagi.greet(); // Hello! My name is Tomoharu.    // 4

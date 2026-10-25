// function student(prenom, age) {
//   this.prenom = prenom;
//   this.age = age;
// }

class student {
  prenom;
  age;

  constructor(prenom, age) {
    this.prenom = prenom;
    this.age = age;
  }
}

let e1 = new student("Adem", 25);
e1.section = "ISIDS";

let e2 = new student("Nidhal", 45);
delete e2.age;
console.log(e1, e2);

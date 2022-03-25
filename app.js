class Vaisius {
  constructor() {
    this.dydis = this.rand(5, 25);
    this.id = this.rand(1000000, 9999999);
    this.prakastas = false;
  }
  prakasti() {
    this.prakastas = true;
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class Krepšys {
  static vaisiai = [];
  static pripildyti() {
    while (this.vaisiai.length < 20) {
      this.vaisiai.push(new Vaisius());
    }
    this.vaisiai.sort((a, b) => b.dydis - a.dydis);
  }
  static isimti() {
    const biggest = this.vaisiai[0];
    this.vaisiai.shift();
    biggest.prakasti();
    grauztukai.set(biggest.id, biggest);;
    return biggest;
  }
}

const grauztukai = new Map();

Krepšys.pripildyti();
console.log(JSON.stringify(Krepšys.vaisiai));
console.log(Krepšys.isimti());
console.log(Krepšys.isimti());
console.log(JSON.stringify(Krepšys.vaisiai));
Krepšys.pripildyti();
console.log(Krepšys.vaisiai);
console.log(grauztukai);


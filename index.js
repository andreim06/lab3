// JavaScript

class Lista {
  constructor(elemente, tip) {
    this.elemente = elemente;
    this.tip = tip;
  }

  // Metoda
  elLi(inf) {
    let text = inf.charAt(0).toUpperCase() + inf.slice(1);
    return `<li>${text}</li>`;
  }

  lista() {
    let el = this.elemente.map((element) => this.elLi(element));
    let rez = `<${this.tip}>` + el.join(" ") + `</${this.tip}>`;
    return rez;
  }
}

//  Acum pot utiliza clasa Lista
//  ============================

const e = ["mere", "pere", "mure"];

//  Creez un obiect din clasa Lista
const oLista = new Lista(e, "ul");

// Pun apelez metoda lista() si pun rezultatul in index.html
document.querySelector("#cod").innerHTML = oLista.lista();

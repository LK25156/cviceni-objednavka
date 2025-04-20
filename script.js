const formular = document.querySelector("form"); //vybrán HTML prvek <form> pomocí metody querySelector
formular.addEventListener("submit", (event) => { //přidán posluchač události jakmile posluchač uděla submit na tlačítko, spustí se funkce, formulář se odešle
  event.preventDefault();
  formular.innerHTML = `           //po odeslání formuláře se obsah HTML nahradí jiným textem, zobrazí se nadpis hotovo, objednávka odeslána ke zpracování
  <h1>Hotovo</h1>
  <p>Objednávka odeslána ke zpracování.</p>
  `;
});

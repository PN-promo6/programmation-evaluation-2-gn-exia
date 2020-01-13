let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Aulopiformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

function display(array) {
  let names = ["Ordre", "Famille", "Nom vernaculaire", "Nom binominal"];
  let table = document.createElement("table");
  document.body.appendChild(table);
  table.style.border = "1px solid black";
  let tableHead = document.createElement("thead");
  table.appendChild(tableHead);
  let tableRow = document.createElement("tr");
  tableHead.appendChild(tableRow)
  let i = 0;
  let currentElement;
  while (i < names.length) {
    currentElement = names[i];
    nameRow = document.createElement("th");
    tableRow.appendChild(nameRow);
    nameRow.style.color = "red"
    nameRow.textContent = currentElement;
    i++;
  }
  let body = document.createElement("tbody");
  table.appendChild(body);
  let currentElement2;
  let j = 0;
  while (j < array.length) {
    currentElement2 = array[j];
    let bodyRow = document.createElement("tr");
    body.appendChild(bodyRow);
    bodyRow.style.border = "1px solid black";
    let k = 0;
    let currentElement3;
    while (k < currentElement2.length) {
      currentElement3 = currentElement2[k];
      let bodyData = document.createElement("td");
      bodyData.textContent = currentElement3;
      bodyRow.appendChild(bodyData);
      k++;
    }
    j++;
  }
}

display(fishList)

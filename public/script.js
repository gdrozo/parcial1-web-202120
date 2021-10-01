const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tb = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  event.preventDefault();
  alert('Implementar lógica del button submit');
  i = document.querySelector('#inputText')
  v = i.value
  console.log(v)
  getresults(i);
  
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`http://localhost:3000/api/${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data[0]);
  let tb = document.querySelector('tbody')
  removeAllChildNodes(tb)
  body = ''
  data.forEach((element, i) => {
    body += `<tr>
                <td>${i}</td>
                <td>${element.first_name}</td>
            </tr>
            `
    console.log(body)
  });

  tb.innerHTML = body
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

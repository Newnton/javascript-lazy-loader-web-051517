"use strict";
function formatCars(carsJSON) {
  return `<div class="row"><div class="col-md-4 car"><h2>${carsJSON[0].Make}</h2><p><strong>Model:</strong> ${carsJSON[0].Model}</p><p><strong>Year:</strong> ${carsJSON[0].Year}</p></div><div class="col-md-4 car"><h2>${carsJSON[1].Make}</h2><p><strong>Model:</strong> ${carsJSON[1].Model}</p><p><strong>Year:</strong> ${carsJSON[1].Year}</p></div><div class="col-md-4 car"><h2>${carsJSON[2].Make}</h2><p><strong>Model:</strong> ${carsJSON[2].Model}</p><p><strong>Year:</strong> ${carsJSON[2].Year}</p></div></div>`
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON))
}

let i = 2
function fetchJSON() {
  i++
  $.get(`http://mimeocarlisting.azurewebsites.net/api/cars/${i}/3`, function(data) {
    addCarsToDOM(data)
  })
}

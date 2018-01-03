dataPairings = document.getElementById("dataPairings")
let makeListOfData = () => {
  years = data.map((entry) => {
    return "<tr><td>"+ entry.year + "</td>" + "<td>"+ entry.nyc_consumption_million_gallons_per_day + "</td></tr>"
  })
  entryString = years.join("")
  //document.body.innerHTML += entryString
  dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" + entryString
}
window.onload = () => {
makeListOfData(data);
}

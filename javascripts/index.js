dataPairings = document.getElementById("dataPairings")
let makeListOfData = (data) => {
  years = data.map((entry) => {
    return "<tr><td>"+ entry.year + "</td>" + "<td>"+ entry.nyc_consumption_million_gallons_per_day + "</td></tr>"
  })
  entryString = years.join("")
  dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" + entryString
}



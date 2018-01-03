var start = 1979
var end = 2016
var options = ""
for(var year = start; year <=end; year++){
	options += "<option>"+year+"</option>"
}
options = "<option> All years </option>" + options
document.getElementById("year").innerHTML = options

dataPairings = document.getElementById("dataPairings")
let makeListOfData = (data) => {
  years = data.map((entry) => {
    return "<tr><td>"+ entry.year + "</td>" + "<td>"+ entry.nyc_consumption_million_gallons_per_day + "</td></tr>"
  })
  entryString = years.join("")
  dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" + entryString
}

submitEl = document.getElementById("submit")
submitEl.onclick = () => {
  value = document.getElementById("year").value
  
}

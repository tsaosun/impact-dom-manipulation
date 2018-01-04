var start = 1979
var end = 2016
var options = ""
for(var year = start; year <=end; year++){
	options += "<option>"+year+"</option>"
}
options = "<option> All years </option>" + options
document.getElementById("year").innerHTML = options
let dataV = null
dataPairings = document.getElementById("dataPairings")
let makeListOfData = (data) => {
	dataV = data
  years = data.map((entry) => {
    return "<tr onMouseOver=\"this.bgColor = '#C0C0C0'\"  onMouseOut =\"this.bgColor = '#FFFFFF'\"><td align=\"center\">"+ entry.year + "</td>" + "<td align=\"center\">"+ entry.nyc_consumption_million_gallons_per_day + "</td></tr>"
  })
  entryString = years.join("")
  dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" + entryString
}
submitEl = document.getElementById("submit")
submitEl.onclick = () => {
  value = document.getElementById("year").value
	if(value == "All years"){
		makeListOfData(dataV)
	} else {
	index = -1
	for(i = 0; i< dataV.length; i++){
		if(dataV[i].year == value) index = i
	}
	if(index > 0) {
		dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" +"<tr onMouseOver=\"this.bgColor = '#C0C0C0'\"  onMouseOut =\"this.bgColor = '#FFFFFF'\"><td align=\"center\">"+ dataV[index].year + "</td>" + "<td align=\"center\">"+ dataV[index].nyc_consumption_million_gallons_per_day + "</td></tr>"
	}}
}

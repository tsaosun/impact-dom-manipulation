//welcome message

//data manipulation shows the year of consumption
//with nyc_consumption_million_gallons_per_day
//let dataArray = dataAPI;
/*const renderData = (data) => {
  data.forEach((data) => {
  let year = data.year
  let consumption = data.nyc_consumption_million_gallons_per_day
  let listOfNames = "<li>"+ year + ": " + consumption  + "</li>"
  //domString = listOfNames.join("")
  //document.body.innerHTML += domString;
})
}*/
dataPairings = document.getElementById("dataPairings")
let makeListOfData = () => {
  years = dataAPI.data.map((entry) => {
    return "<tr><td>"+ entry.year + "</td>" + "<td>"+ entry.nyc_consumption_million_gallons_per_day + "</td></tr>"
  })
  entryString = years.join("")
  //document.body.innerHTML += entryString
  dataPairings.innerHTML = "<tr><th>Year</th><th>Consumption (million gallons per day)</th></tr>" + entryString
}
window.onload = () => {
makeListOfData(dataAPI.data);
}

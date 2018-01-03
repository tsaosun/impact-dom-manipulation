fetch('https://data.cityofnewyork.us/resource/waf7-5gvc.json')
.then((response) => response.json())
.then((data) => makeListOfData(data))

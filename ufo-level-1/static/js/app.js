var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function(report) {
    console.log(report);
    var row = tbody.append("tr");
    Object.entries(report).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    rows = d3.selectAll("tr"); 
    rows.remove()

    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(report => report.datetime === inputValue);
  
    console.log(filteredData);


    
    filteredData.forEach(function(report) {
        console.log(report);
        var row = tbody.append("tr");
        Object.entries(report).forEach(function([key, value]) {
          console.log(key, value);

          var cell = row.append("td");
          cell.text(value);
        });
      });

  };
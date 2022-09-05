// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// for debugging, to avoid asynchronous console.log
function reallog(stuff){
  console.log(JSON.parse(JSON.stringify(stuff)));
}

function buildTable(dataFP) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  dataFP.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
//  datetime, city, state, country, shape. 
var filters = {};


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let newFilter = d3.event.target;

    // 4b. Save the value that was changed as a variable.
    let newValue = newFilter.value;


    // 4c. Save the id of the filter that was changed as a variable.
    let newId = newFilter.id;

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (newValue) {
      filters[newId]=newValue;
    } else {
      delete(filters[newId]);
    }; 

    // debug
    reallog(filters);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();

  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach( filt => {
      filteredData = filteredData.filter(row => row[filt[0]] === filt[1]);
    });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  

  // function handleClick() {
  //   let date = d3.select("#datetime").property("value");
  //   let filteredData = tableData;
  //   if (date) {
  //       filteredData = filteredData.filter(row => row.datetime === date);
  //   };
  //   buildTable(filteredData);
  // };


  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  // or mybe just d3.selectAll("#datetime,#city,#state,#country,#shape") ?

  // Build the table when the page loads
  buildTable(tableData);

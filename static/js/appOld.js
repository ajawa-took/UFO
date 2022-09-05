// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// same name for function parameter, global variable sounds bad
// so i changed the function parameter "data" to "dataFP"
function buildTable(dataFP) {
    // next line "clears data" in "the table", or somesuch
    tbody.html("");
    // now we gonna display them rows in the table on the webpage?
    // next line: loop through objects in the list passed as input,
    //  hopefully, from data.js via tableData
    dataFP.forEach((dataRow) => {
        //next line: append table-row "row" to table-body
        let row = tbody.append("tr");
        //next line: loop through attributes of current object
        Object.values(dataRow).forEach((val) => {
            // next line: append table-data "cell" to the table-row "row"
            let cell = row.append("td");
            // put val as the text in this cell
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}

// next line: listens for clicks?
// run handleClick() when the button whose id is filter-btn is clicked
// so, the html gonna need to make that button with that id
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);




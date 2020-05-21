// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create a function to build a table
function buildTable(data) {

    // Clear any existing data
    tbody.html("");

    // Loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create function to handle mouseclicks
function handleClick() {

    // Get the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter data using it
    if (date) {
        // Apply "filter" to the table data to only keep the rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // If no date was entered, filteredData will be the original table
    buildTable(filteredData);
}

// Attach an event to listen for the filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

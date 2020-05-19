// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = df.select("tbody");

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
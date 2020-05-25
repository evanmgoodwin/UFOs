# UFOs
## Challenge Summary

For this challenge, we updated our javascript and html code to inlcude more filter options. To be able to have multiple filters, we created an empty dictionary named "filters". Next, we created a function called "updateFilters". Inside this function, we grabbed the input data using d3.select. Once we gathered all the data input, we went through each field and added available data to the "filters" dictionary. Our next step was to call the filterTable function. This function uses a forEach loop to loop through the filters dictionary and and keeps data value that match filter values. We then use our "buildTable" function to build a new table based on the filtered data values.

There were two other keys in the data.js objects that we didn't include in the filtered table: duration and comments. To filter by comments would be rather complicated, but we could add the duration values as another filter. Also, the table values for city, state and shape are all lowercase. One enhancement we could make to the code is to add proper uppercasing to the values. We could also add extra code to allow site users to search by both lowercase and uppercase values.

// Sample data
const data = [
    {firstname: "Elnaz", lastname: "Doe", email: "john@example.com"},
    {firstname: "Mehrdad", lastname: "Moe", email: "mary@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
    {firstname: "Simon", lastname: "Dooley", email: "july@example.com"},
];

function showTable(){

    if(!document.getElementById("myTable")){
            // Create table element
        const table = document.createElement("table");
        table.id = "myTable";
        table.classList.add("table", "table-striped");

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        const headerTexts = ["Firstname", "Lastname", "Email"];
        headerTexts.forEach((headerText) => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");

          // Create table body rows
        data.forEach((item) => {
            const row = document.createElement("tr");
            const columns = ["firstname", "lastname", "email"];
            columns.forEach((value) => {
                const td = document.createElement("td");
                td.textContent = item[value];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });


        // Append thead and tbody to the table
        table.appendChild(thead);
        table.appendChild(tbody);


        // Append the table to the body or another container element
        const dataTableSection = document.getElementById("data-table");
        dataTableSection.appendChild(table);
    }
};

function hideTable(){

    document.getElementById("myTable").remove();
}
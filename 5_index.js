// Sample data
const data = [
  { firstname: "Elnaz", lastname: "Doe", email: "john@example.com" },
  { firstname: "Mehrdad", lastname: "Moe", email: "mary@example.com" },
  { firstname: "Simon", lastname: "Dooley", email: "july@example.com" },
];

function showTable() {
  if (!document.getElementById("myTable")) {
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
}

function hideTable() {
  document.getElementById("myTable").remove();
}

// Adding fuctionallity to
document.getElementById("reg-btn").addEventListener("click", validateAndSubmit);

function validateAndSubmit() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  // Simple validation
  if (!firstName || !lastName || !isValidEmail(email)) {
    // Display validation error messages
    if (!firstName) {
      document.getElementById("firstName").classList.add("is-invalid");
    } else {
      // Clear existing validation classes
      document.getElementById("firstName").classList.remove("is-invalid");
    }

    if (!lastName) {
      document.getElementById("lastName").classList.add("is-invalid");
    } else {
      document.getElementById("lastName").classList.remove("is-invalid");
    }

    if (!isValidEmail(email)) {
      document.getElementById("email").classList.add("is-invalid");
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    // Prevent form submission if validation fails
    return;
  }

  // Form is valid, you can submit the form or perform other actions here
  console.log("Form submitted successfully!");
  showTable();
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// JavaScript form reset
function resetForm() {
  document.getElementById("registrationForm").reset();

  // Clear existing validation classes
  document.getElementById("firstName").classList.remove("is-invalid");
  document.getElementById("lastName").classList.remove("is-invalid");
  document.getElementById("email").classList.remove("is-invalid");
}

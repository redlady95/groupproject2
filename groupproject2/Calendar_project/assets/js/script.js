
var today = new Date();
var cMonth = today.getMonth();
var cYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");



var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var monthYear = document.getElementById("monthYear");
show(cMonth, cYear);

function previous() {
    cYear = (cMonth === 0) ? cYear - 1 : cYear;
    cMonth = (cMonth === 0) ? 11 : cMonth - 1;
    show(cMonth, cYear);
}

function nexts() {
    cYear = (cMonth === 11) ? cYear + 1 : cYear;
    cMonth = (cMonth + 1) % 12;
    show(cMonth, cYear);
}

function jump() {
    cYear = parseInt(selectYear.value);
    cMonth = parseInt(selectMonth.value);
    show(cMonth, cYear);
}

function show(month, year) {

    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    monthYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    var date = 1;
    for (let i = 0; i < 6; i++) {

        var getRow = document.createElement("tr");


        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                getRow.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText);
                getRow.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(getRow);
    }

}
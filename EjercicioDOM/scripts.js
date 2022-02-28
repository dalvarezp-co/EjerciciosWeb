

const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";
var events = document.getElementsByClassName("events-data");
var squirrel = document.getElementsByClassName("squirrel-data");
var table = document.querySelector("table");
var tbody = document.querySelector("tbody");
var body = document.getElementsByTagName("body")[0];

fetch(url)
  .then(response => response.json())
  .then(data => {
        for(var i = 0; i < data.length; i++){
            var row = document.createElement("tr");

            var col1 = document.createElement("th");
            var textCell = document.createTextNode(i);
            col1.appendChild(textCell);

            var col2 = document.createElement("td");
            textCell = document.createTextNode(data[i].events);
            col2.appendChild(textCell);

            var col3 = document.createElement("td");
            textCell = document.createTextNode(data[i].squirrel);
            col3.appendChild(textCell);
            
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);

            if(data[i].squirrel == true){
              row.style.background = "rgb(255,0,0,0.5)";
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        body.appendChild(table);
  }) ;

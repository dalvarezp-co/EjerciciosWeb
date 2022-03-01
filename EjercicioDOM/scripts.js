

const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";
var events = document.getElementsByClassName("events-data");
var squirrel = document.getElementsByClassName("squirrel-data");
var tableEvents = document.querySelector("table-events");
var tbody = document.querySelector("tbody");
var body = document.getElementsByTagName("body")[0];


//Filling the Events table
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
        tableEvents.appendChild(tbody);
        body.appendChild(table);
  }) ;


var StronglyTypedArray=function(){
      this.values=[];
      this.push=function(value){
      if(value===0||parseInt(value)>0) this.values.push(value);
      else return;//throw exception
     };
     this.get=function(index){
        return this.values[index]
     }
   }

var words = [];
var truesWords = [];
var falsesWords = [];
var mcc = [];
//Filling the Correlation of Events table
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for(var i = 0; i < data.length; i++){

        //Converting objects to string
        var ev = JSON.stringify(data[i].events);
        //Spliting the events by ","
        var value = ev.split(",");
        //Iterating over the events individually
        for(var v in value){
          //Cleaning strings
          value[v] = value[v].replace('"','');
          value[v] = value[v].replace('[','');
          value[v] = value[v].replace(']','');
          value[v] = value[v].replace('"','');

          if(!words.includes(value[v])){
            words.push(value[v]);
            if(data[i].squirrel == true){
              truesWords.push(1);
              falsesWords.push(0);
            }
            else{
              truesWords.push(0);
              falsesWords.push(1);
            }
            
          }
          else {
            if(data[i].squirrel == true){
              truesWords[words.indexOf(value[v])] += 1;
            }
            else{
              falsesWords[words.indexOf(value[v])] += 1;
            }
          }
        }
      }

      console.log(words);
      console.log("Trues");
      console.log(truesWords);
      console.log("Falses");
      console.log(falsesWords);


    })
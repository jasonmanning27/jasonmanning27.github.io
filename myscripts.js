 // Define an array of doctors.  Could be expanded or replaced by a dataset. 
 var doctorsArray =[
  {id:1, name: 'Dr. Alex', specialty: 'orthopedic', location: "New York", rating:5},
  {id:2, name: 'Dr. Ben', specialty: 'pediatric', location: "Vermont", rating:5},
  {id:3, name: 'Dr. Cal', specialty: 'orthopedic', location: "Texas", rating:4},
  {id:4, name: 'Dr. Dan', specialty: 'orthopedic', location: "Virginia", rating:2},
  {id:5, name: 'Dr. Ed', specialty: 'pediatric', location: "North Carolina", rating:3},
  {id:6, name: 'Dr. Frank', specialty: 'orthopedic', location: "Oregon", rating:5},
  {id:7, name: 'Dr. Gerald', specialty: 'pediatric', location: "Arizona", rating:4},
  {id:8, name: 'Dr. Hank', specialty: 'orthopedic', location: "California", rating:1}
]

$(document).ready(function() {
$('#doctorsList').on('change', function() {

  var x = this.value;

var html = "</br><div> Doctors with the same specialty are shown below and sorted by rating.<br> </div>";

html += '<table id="table" border = 1|1>';
html += "<tr> <td>NAME</td> <td>SPECIALTY</td><td>LOCATION</TD> <td>RATING/5</td> </tr>";

//alert("value: " + x);
doctorsArray.sort(function(a,b) { return b.rating - a.rating });

for(var i=0; i<doctorsArray.length; i++) {

 
  if(doctorsArray[x].specialty == doctorsArray[i].specialty) {
      html+= '<tr';
      if(x==doctorsArray[i].id) {
          html += ' id="highlight"'
      }
      html+='>';
      html+= '<td>' + doctorsArray[i].name; + '</td>';
      html+= '<td>' + doctorsArray[i].specialty; + '</td>';
      html+= '<td>' + doctorsArray[i].location; + '</td>';
      html+= '<td>' + doctorsArray[i].rating; + '</td>';
      html+= '</tr>';
  }
}
html+= '</table>';
document.getElementById("tableHolder").innerHTML = html; 
});
});

function displayOptions() {
var html = "";
for(var i=0; i<doctorsArray.length; i++) {
  html+= '<option value="'+doctorsArray[i].id+'">';
  html+= doctorsArray[i].name;
  html+= ' - ';
  html+= doctorsArray[i].specialty;
  html+= '</option>';
}
document.getElementById("doctorsList").innerHTML = html;
}
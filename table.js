var drawTable= function(employees)
{
    var rows= d3.select("table tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")

     rows.append("td")
    .text(function(employee)
{
   return employee.names   
  });
     
    rows.append("td")
    .text(function(employee)
{
   return employee.title   
  });
    
         rows.append("td")
    .text(function(employee)
{
   return employee.email
});   
    
}
var employeePromise = d3.csv("staffxml.json")

var successFCN = function(employees)
{
    console.log("employees",employees)
    setBanner("Welcome Students");
    drawTable(employees)
}

var failureFCN = function(error)
{
    console.log("error",error)
    setBanner("Not Found")
}


var setBanner= function(message)
{
    d3.select("banner")
    .text(message);
}

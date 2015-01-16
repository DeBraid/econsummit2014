function checkFilled () {

  var myVal = document.getElementById("searchBox").value,
      inputVal = myVal.toString(),
      cities = [];

  var circleId = d3.select("#" + inputVal + "");

  d3.selectAll("circle").each(function(d,i){
    
    var myId = d3.select(this).attr("id");
    
    cities.push(myId);
  
  });
  

  cities.forEach(function ( city ) {
  
    inputVal = inputVal.substring(0,3);
    city = city.substring(0,3);

    if ( inputVal == city ){

          circleId
            .transition().duration(1500)
            .style({
                "fill": "tomato",
                "stroke-width": "8px"
            })
            .transition().duration(500)
            .style({
                "stroke-width": "1px"
            });  
      }
  })
  
}
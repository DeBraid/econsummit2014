d3.select('#redraw').on("click", function () {


  var headers = ['Hamilton', 'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Halifax', 'Winnipeg', 'Edmonton', 'Kitchener', 'London'];

  var legend = svg.selectAll(".legend")
    .data(headers.slice())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(-20," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", 60)
        .attr("width", 18)
        .attr("height", 18)
        .attr("id", function (d) { return d; });

    legend.append("text")
          .attr("x", 135)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d;  });

    

  customHammerLabel();
  customFills();

});

var customHammerLabel = function () {
  var hammer = d3.select("circle#Hamilton.dot"); 
  var hammerLeg = d3.select("rect#Hamilton"); 

  hammer.style({
    "fill": "yellow", 
    "stroke-width": "6px"
  });

  hammerLeg.style({
    "stroke": "black", 
    "stroke-width": "2px"
  });


};

function customFills () {

  var fillData = [
    {"city": "Hamilton", "fill": "yellow"},
    {"city": "Toronto", "fill": "rgb(174, 199, 232)"},
    {"city": "Vancouver", "fill": "rgb(255, 127, 14)"},
    {"city": "Montreal", "fill": "rgb(255, 187, 120)"},
    {"city": "Calgary", "fill": "rgb(44, 160, 44)"},
    {"city": "Halifax", "fill": "rgb(152, 223, 138)"},
    {"city": "Winnipeg", "fill": "rgb(154, 29, 40)"},
    {"city": "Edmonton", "fill": "rgb(255, 152, 150)"},
    {"city": "Kitchener", "fill": "rgb(148, 103, 189)"},
    {"city": "London", "fill": "rgb(197, 176, 213)"},
  ];
  

  fillData.forEach(function (obj) {
      
    var selectedLabel = d3.selectAll("#" + obj.city); 

      selectedLabel
        .style({
          "fill": "rgb(0, 174, 157)"
        })
        .transition().duration(2500)
        .style({
          "fill": obj.fill
        })
  
  })
};

'use strict';

 angular.module('itemDetails.directive', [])
 .directive('barVisualization', function () {

  // constants
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;
	
	var x = d3.scale.ordinal()
	    .rangeRoundBands([0, width], .1);
	
	var y = d3.scale.linear()
	    .range([height, 0]);
	
	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");
    
	var yTextValue = "";

  return {
    restrict: 'E',
    terminal: true,
    scope: {
      val: '=',
      ytext: "="
    },
    link: function (scope, element, attrs) {
    
    scope.$watch('ytext', function (newVal, oldVal) {
    	yTextValue = newVal;
    });

	var svg = d3.select(element[0]).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  	.append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	    
      scope.$watch('val', function (newVal, oldVal) {
      
        // clear the elements inside of the directive
        svg.selectAll('*').remove();

        // if 'val' is undefined, exit
        if (!newVal) {
          return;
        }
		
		newVal.forEach(function(d) {
		    d.value = parseInt(d.value);
		  });
        
		x.domain(newVal.map(function(d) { return d.name; }));
		y.domain([0, d3.max(newVal, function(d) { return d.value; })]);
        
	  svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);
	
	  svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text(yTextValue);
	
	  svg.selectAll(".bar")
	      .data(newVal)
	    .enter().append("rect")
	      .attr("class", "bar")
	      .attr("x", function(d) { return x(d.name); })
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d.value); })
	      .attr("height", function(d) { return height - y(d.value); });
   
		})
    }
  }
});
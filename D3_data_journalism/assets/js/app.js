// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function(demoData) {

    // Parse Data/Cast as numbers
    // ==============================
    // parse data
    demoData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.healthcare = +data.healthcare;
    });

    // Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(demoData, d => d.poverty)-0.5, d3.max(demoData, d => d.poverty)+2])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(demoData, d => d.healthcare)-1, d3.max(demoData, d => d.healthcare)+2])
        .range([height, 0]);

    // Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);
    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);
    // Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
      .data(demoData)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.poverty))
      .attr("cy", d => yLinearScale(d.healthcare))
      .attr("r", "14")
      .attr("fill", "lightblue")
      .attr("opacity", "0.6");
    
    // Create Circles Labels
    var gdots =  svg.selectAll("g.dot")
            .data(demoData)
            .enter().append('g');
    
    gdots.append("circle")
        .attr("class", "dot")
        .attr("r", function (d) {
            return d.r;
        })
        .attr("cx", function (d) {
            return xLinearScale(d.poverty);
        })
        .attr("cy", function (d) {
            return yLinearScale(d.healthcare);
        })
        .style("fill", function (d) {
            return d.c;
        });
    gdots.append("text").text(function(d){
                return d.abbr;
            })
            .attr("x", function (d) {
                return xLinearScale(d.poverty);
            })
            .attr("y", function (d) {
                return yLinearScale(d.healthcare);
            });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .attr("text-anchor", "middle")
      .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .attr("text-anchor", "middle")
      .text("In Poverty (%)");
  }).catch(function(error) {
    console.log(error);
  });

# Data Journalism and D3

Data and instructions provided by UC Berkeley Extension Data Analytics Bootcamp.

# Introduction 

The goal of this assignment is to use my newfound knowledge and skills on javascript's D3 and SVG libraries to create dynamic visualizations using a set of data.

# Technologies/Libraries

- HTML

- JavaScript

- SVG

- D3.js

- CSS

# Detailed Instructions/Assignment Background

### Background

    Welcome to the newsroom! You've just accepted a data visualization position for a major metro paper. You're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.
    
    The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.
    
    The data set included with the assignment is based on 2014 ACS 1-year estimates from the US Census Bureau, but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."
    
### Core Assignment: D3 Dabbler (Required)

You need to create a scatter plot between two of the data variables such as Healthcare vs. Poverty or Smokers vs. Age.

Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. Your scatter plot should ultimately appear like the image at the top of this section.

    - Include state abbreviations in the circles.

    - Create and situate your axes and labels to the left and bottom of the chart.

    - Note: You'll need to use python -m http.server to run the visualization. This will host the page at localhost:8000 in your web browser.

### Bonus: Impress the Boss (Optional Assignment)

    1. More Data, More Dynamics
    
    - You're going to include more demographics and more risk factors. Place additional labels in your scatter plot and give them click events so that your users can decide which data to display. Animate the transitions for your circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis. (I created three for the x-axis).

    - Hint: Try binding all of the CSV data to your circles. This will let you easily determine their x or y values when you click the labels.


    2. Incorporate d3-tip
    
    - While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the d3-tip.js plugin developed by Justin Palmer—we've already included this plugin in your assignment directory.

# Files

    - D3_data_journalism folder
        - index.html
        - assets folder
            - CSS folder for the styling
            - data folder contains the data.csv
            - js contains app.js where my codes are

    - D3_data_journalism_BONUS folder
        - index.html
        - assets folder
            - CSS folder for the styling
            - data folder contains the data.csv
            - js contains app.js where my codes are

# Process and Credits

My first assignment working with D3 and SVG to create graphs. I used class materials and outside resources for reference. 

Here are the outside resources that I used for this assignment (as well as attempts):

    - https://www.xspdf.com/resolution/30193723.html
    - https://bl.ocks.org/mbostock/1628131
    - http://embed.plnkr.co/Rlz6NF/
    - http://www.d3noob.org/2016/08/changing-text-size-for-axes-in-d3js-v4.html
    - https://richardbrath.wordpress.com/2018/11/24/using-font-attributes-with-d3-js/
    - https://stackoverflow.com/questions/36954426/adding-label-on-a-d3-scatter-plot-circles

    

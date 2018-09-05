$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1P-JsP2LcKwqkTzKtyqmpQGkALbLg3Q59hiI_xZ9jeXw',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'area'
    },
    // colors: ['#4D6E79', '#303D43', '#907561', '#781F30', '#EC382A', '#61884D', '#C9AC4D', '#52496D', '#5AA992', '#887295', '#2576CE', '#aa266a'],
    // Chart Title and Subtitle
    title: {
      text: "Global ODA Spending By Category"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Special Task Force on the Global Forced Migration Crisis | Source: NAME"
    },
    // Chart Legend
    legend: {
      title: {
        text: '<span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Billions of Dollars"
      },
    },
    // Additional Plot Options
    plotOptions:
    {
      area: {
        // stacking: null, // Normal bar graph
        stacking: "normal", // Stacked bar graph
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    }
  });
});

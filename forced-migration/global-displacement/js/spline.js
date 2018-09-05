
$(function() {
  $('#hcContainer').highcharts({
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1x48glCS0NQfb-UboZk9gRme01Tb76r-VYCvY-VJVw3k',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'spline'
    },
    // Chart Title and Subtitle
    title: {
      text: "Projected Global Displacement Scenarios By Millions of People"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Special Task Force on the Global Migration Crisis"
    },
    // Chart Legend
    legend: {
      title: {
        text: 'Percentage Changes <br/><span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Millions of People"
      }
    },
    // Additional Plot Options
    plotOptions:
    {
      spline: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3
        },
        lineWidth: 3
      }
    }
  });
});


$(function() {
  $('#hcContainer').highcharts({
    data: {
      googleSpreadsheetKey: '1x48glCS0NQfb-UboZk9gRme01Tb76r-VYCvY-VJVw3k',
      googleSpreadsheetWorksheet: 1
    },
    chart: {
      zoomType: 'x',
      type: 'spline'
    },
    title: {
      text: "Projected Global Displacement Scenarios By Millions Of People"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Special Task Force on the Global Migration Crisis"
    },
    legend: {
      title: {
        text: '<span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    yAxis: {
      title: {
        text: "Millions of People"
      }
    },
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

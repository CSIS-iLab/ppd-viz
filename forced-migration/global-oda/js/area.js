Highcharts.chart('hcContainer', {
    data: {
      googleSpreadsheetKey: '1P-JsP2LcKwqkTzKtyqmpQGkALbLg3Q59hiI_xZ9jeXw',
      googleSpreadsheetWorksheet: 1
    },
    chart: {
      zoomType: 'x',
      type: 'area'
    },
    color: ['#4D6E79', '#303D43', '#907561', '#781F30', '#EC382A', '#61884D', '#C9AC4D', '#52496D', '#5AA992', '#887295', '#2576CE', '#aa266a'],
    title: {
      text: "Global ODA Spending By Category"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Special Task Force on the Global Forced Migration Crisis"
    },
    legend: {
      title: {
        text: '<span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    xAxis: {
        allowDecimals: false
    },
    yAxis: {
      title: {
        text: "Billions of Dollars"
      },
    },
    tooltip: {
       valueDecimals: 0,
       pointFormat: "{point.y:,.0f}"
    },
    plotOptions:
    {
      area: {
        stacking: "normal",
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    }

})

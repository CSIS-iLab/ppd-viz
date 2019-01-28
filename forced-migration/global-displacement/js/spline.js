Highcharts.chart('hcContainer', {
  data: {
    googleSpreadsheetKey: '1x48glCS0NQfb-UboZk9gRme01Tb76r-VYCvY-VJVw3k',
    googleSpreadsheetWorksheet: 1
  },
  chart: {
    zoomType: 'x',
    type: 'spline',
    renderTo: 'hcContainer'
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
  xAxis: {
    allowDecimals: false,
    // tickAmount: 6,
    min: 2018
  },
  yAxis: {
    title: {
      text: null
    },
    min: 0,
    endOnTick: false,
    labels: {
      formatter: function() {
          var value = Math.abs(this.value);
          if (value >= 1000000) {
              value = (value/1000000) + ' MILLION'
          };
          return value;
      }
    }
  },
  tooltip: {
    valueDecimals: 0,
    pointFormat: "{point.y:,.0f} People"
  },
  plotOptions: {
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

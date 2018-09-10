/**
 * CSIS PPD (Project on Prosperity and Development) HighCharts Theme
 *
 */

Highcharts.setOptions({
  lang: {
    thousandsSep: ","
  }
});

Highcharts.theme = {
  colors: [
    '#F3E6C6',
    '#94B7C4',
    '#0F1518',
    '#DD8265',
    '#416984',
    '#757061',
    '#5B997DV'
  ],
  chart: {
    backgroundColor: null,
    border: 'none',
    color: '#0F1518',
    style: {
      fontFamily: 'proxima-nova',
    }
  },
  labels: {
    style: {
        // color: '#666',
        fontSize: '14px',
        // fontFamily: '"expo-serif-pro",serif'
    },
  },
  title: {
    style: {
      color: '#0F1518',
      font: '70px',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }
  },
  tooltip: {
    style: {
      fontSize: "13px",
    },
    headerFormat: "<span style=\"font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: 'Source Sans Pro', arial, sans-serif;\">{point.key}</span><br/>"
  },
  xAxis: {
    tickLength: 0
  },
  yAxis: {
    gridLineDashStyle: 'longdash'
  }
}

Highcharts.setOptions(Highcharts.theme);

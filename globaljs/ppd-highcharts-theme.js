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
    backgroundColor: 'none',
    border: 'none',
    color: '#0F1518',
    style: {
      fontFamily: 'proxima-nova',
    }
  },
  title: {
    style: {
      color: '#0F1518',
      fontSize: '25px',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }
  },
  credits: {
    style: {
      cursor: "default",
      fontSize: '10px'
    }
  },
  tooltip: {
    style: {
      fontSize: "13px",
    },
    headerFormat: "<span style=\"font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;\">{point.key}</span><br/>"
  },
  xAxis: {
    tickLength: 0,
    lineColor: '#0F1518'
  },
  yAxis: {
    gridLineDashStyle: 'longdash',
    gridLineColor: '#0F1518',
    showFirstLabel: false,
    title: {
        style: {
            color: '#0F1518',
            textTransform: 'uppercase'
        }
    }
  },
  legend: {
    title: {
      text: null
    },
    itemStyle: {
      color: '#0F1518',
      fontSize: '14px',
      textOverflow: null,
      fontWeight: 'normal'
    },
    margin: 30
  },

}

Highcharts.setOptions(Highcharts.theme);

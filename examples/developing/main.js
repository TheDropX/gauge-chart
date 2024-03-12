import { gaugeChart } from '../../dist/bundle.mjs'

const element = document.querySelector('#gaugeArea')

const gaugeOptions = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 10,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: [],
  arcDelimiters: [10, 60, 90],
  arcPadding: 3,
  arcPaddingColor: 'white',
  arcColors: ['#FF4560', '#FEB019', '#00E396'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  rangeLabel: ['0', '350'],
  centralLabel: '175',
  rangeLabelFontSize: false,
  // labelsFont: 'Consolas',
  enableTooltips: true,
  tooltipLabels: [
    'Beneden gemiddelde',
    'Gemiddeld',
    'Boven gemiddelde',
    'Boven max gemiddeelde',
  ],
}

gaugeChart(element, 225, gaugeOptions).updateNeedle(50)

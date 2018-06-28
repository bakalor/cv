/*
  Current type definition is not completed
  (labels.outer.format: "none" option does not exist)
*/
export const pieOptions = {
  size: {
    canvasWidth: 320,
    canvasHeight: 320,
    pieOuterRadius: 150,
    pieInnerRadius: 20
  },
  labels: {
    outer: {
      format: 'none'
    },
    percentage: {
      color: 'white',
      fontSize: 14
    },
  },
  effects: {
    load: {
      effect: 'default', // none / default
      speed: 1000
    },
    pullOutSegmentOnClick: {
      effect: 'bounce', // none / linear / bounce / elastic / back
      speed: 300,
      size: 10
    },
    highlightSegmentOnMouseover: true,
    highlightLuminosity: -0.2
  },
  data: {
    sortOrder: 'none',
    content: [
      { label: 'Linear Programmer', value: 35, color: '#00838f' },
      { label: 'Dealer', value: 35, color: '#1976d2' },
      { label: 'Business Bullshitter', value: 20, color: '#01579b' },
      { label: 'Rockstar', value: 10, color: '#0d47a1' },
    ]
  },
  tooltips: {
    enabled: true,
    type: 'placeholder',
    string: '{label}: {percentage}%',
    styles: {
      fadeInSpeed: 172,
      backgroundOpacity: 0.7,
      fontSize: 14,
      padding: 12,
      top: 20
    }
  },
};

let type = this.vis.params.type
if ( type == 'pie') {
    chart.setAttribute('geopiechart', {
      legend: true,   // legend
      data: data      // data
    });
    chart.setAttribute('position', { x: 0, y: 2, z: -4 });
    chart.setAttribute('rotation', { x: 90, y: -20, z: 0 });
  } else if (type == 'simple_bar') {
    chart.setAttribute('geosimplebarchart', {
      legend: true,   // legend
      axis: true,     // axis
      data: data      // data
    });
    chart.setAttribute('position', { x: -2, y: 0, z: -5 });
    chart.setAttribute('rotation', { x: 0, y: 0, z: 0 });
}
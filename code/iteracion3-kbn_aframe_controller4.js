    var chart = document.createElement('a-entity');
    chart.setAttribute('geopiechart', {
      legend: true,   // legend
      axis: true,       // axis
      data: data_json      // data
    });
    chart.setAttribute('position', { x: 0, y: 2, z: -4 });
    chart.setAttribute('rotation', { x: 90, y: -20, z: 0 });
    escena.appendChild(chart);
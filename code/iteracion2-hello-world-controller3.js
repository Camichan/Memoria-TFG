      //render metric in vis
      metrics.forEach((metric, i) => {
        const metricDiv = document.createElement('div');
        metricDiv.className = 'myvis-metric-div';
        metricDiv.innerHTML = `<b>${metric.name}:</b> 
        ${metric.value}`;
        metricDiv.setAttribute('style', `font-size: 
        ${this.vis.params.fontSize}pt`);
        this.container.appendChild(metricDiv);
      });
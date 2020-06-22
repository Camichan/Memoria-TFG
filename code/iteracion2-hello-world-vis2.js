    schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'x-axis',
          title: 'X-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 
          'cardinality', 'std_dev']
        },
        {
          group: AggGroupNames.Metrics,
          name: 'y-axis',
          title: 'Y-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 
          'cardinality', 'std_dev']
        },
        {
          group: AggGroupNames.Metrics,
          name: 'z-axis',
          title: 'Z-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 
          'cardinality', 'std_dev']
        }
    ]),
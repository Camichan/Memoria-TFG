    editorConfig: {
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'Slice size',
          min: 1,
          max: 1,
          aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
          defaults: [{ schema: 'metric', type: 'count' }],
        },
        {
          group: AggGroupNames.Buckets,
          name: 'segment',
          title: 'Split slices',
          min: 0,
          max: 1,
          aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
        },
      ]),
    }
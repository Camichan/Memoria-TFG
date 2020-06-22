export const bubbleDefinition = {

    name: 'bubble_chart',
    title: 'VR Bubble 3D',
    icon: 'heatmap',
    description: 'Bubbles with data (VR Chart).',
    visualization: VisController,

    visConfig: {
      defaults: {
        type: 'bubble',
      },
    },

    editorConfig: {
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'Y-axis',
          min: 2,
          max: 2,
          aggFilter: ['sum', 'count', 'cardinality',                    'top_hits'],
          defaults: [{ schema: 'metric', type: 'count' }],
        },
        {
          group: AggGroupNames.Buckets,
          name: 'segment',
          title: 'Split Chart',
          min: 2,
          max: 2,
          aggFilter: ['!geohash_grid', '!geotile_grid',                     '!filter'],
        },

      ]),
    }
};
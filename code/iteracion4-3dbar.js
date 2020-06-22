export const geo3dBarDefinition = {

    name: '3dbar_chart',
    title: 'VR Vertical Bar 3D',
    icon: 'visBarVertical',
    description: 'Assign a continuous variable to each axis 
                (VR Chart).',
    visualization: VisController,

    visConfig: {
      defaults: {
        type: '3d_bar',
      },
    },

    editorConfig: {
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'Y-axis',
          min: 1,
          max: 1,
          aggFilter: ['sum', 'count', 'cardinality',
                    'top_hits'],
          defaults: [{ schema: 'metric', type: 'count' }],
        },
        {
          group: AggGroupNames.Buckets,
          name: 'segment',
          title: 'Split Chart',
          min: 2,
          max: 2,
          aggFilter: ['!geohash_grid', '!geotile_grid', 
                    '!filter'],
        },
      ]),
    }
 };
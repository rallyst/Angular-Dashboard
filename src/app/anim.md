 query(':enter', [
          style({
            background: 'wheat',
            display: 'block',
            height: '100%' 
          }),
          animate(1000, style({
            background: '*'
          })),
        ], { optional: true }),
        style({
          background: 'blue'
        }),
        animate(1000, style({
          background: 'violet'
        })),
        animate(1000, )
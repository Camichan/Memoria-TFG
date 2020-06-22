     const table = visData;
     const metrics = [];

      //get metrics
      table.columns.forEach((column, i) => {
        var value;
        const name = column.name;
        const id = column.id;
        table.rows.forEach(row => {
          if (row[id]){
            value = Math.round(row[id]*100)/100;
          }
        });

       metrics.push({
          name: name,
          value: value
        });
      });
    if ((!old_data)||(old_data != visData)){
    
      this.container.innerHTML = '';
      old_data = visData;
      const table = visData;
      const metrics = [];
    
      var id = [];
      //get metrics
      table.columns.forEach((column, i) => {
          var name = column.name;
          id.push(column.id);
       });
    
       table.rows.forEach(row => {
         let values = [];
         id.forEach(id => {
            if (row[id]){
               values.push(row[id]);
             };
          });
          // push metrics
          metrics.push({
             "key": values[0],
             "size": values[1]
          });
       });
    }
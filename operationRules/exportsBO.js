const excel = require('node-excel-export');


class Exports {


  // exporta o excel 
  async export(callback) {
    console.debug('exportBO.export')

    // stilo do excel 
    const styles = {
      headerDark: {
        fill: {
          fgColor: {
            rgb: 'FF000000'
          }
        },
        font: {
          color: {
            rgb: 'FFFFFFFF'
          },
          sz: 14,
          bold: true,
          underline: false
        }
      },
      cellPink: {
        fill: {
          fgColor: {
            rgb: 'FFFFCCFF'
          }
        }
      },
      cellGreen: {
        fill: {
          fgColor: {
            rgb: 'FF00FF00'
          }
        }
      }
    };


    // array de objetos do header
    // const heading = [
    //   [{ value: 'a1', style: styles.headerDark },
    //   { value: 'b1', style: styles.headerDark },
    //   { value: 'c1', style: styles.headerDark }],
    //   ['a2', 'b2', 'c2'] // <-- It can be only values
    // ];

    // espeficicação do excel
    const specification = {
      customer_name: { // <- the key should match the actual data key
        displayName: 'Customer', // <- Here you specify the column header
        headerStyle: styles.headerDark, // <- Header style
        // cellStyle: function (value, row) { // <- style renderer function
        //   // if the status is 1 then color in green else color in red
        //   // Notice how we use another cell value to style the current one
        //   return (row.status_id == 1) ? styles.cellGreen 
        //   : { fill: { fgColor: { rgb: 'FFFF0000' } } }; // <- Inline cell style is possible 
        // },
        width: 120 // <- width in pixels
      },
      status_id: {
        displayName: 'Status',
        headerStyle: styles.headerDark,
        cellFormat: function (value, row) { // <- Renderer function, you can access also any row.property
          return (value == 1) ? 'Active' : 'Inactive';
        },
        width: '10' // <- width in chars (when the number is passed as string)
      },
      note: {
        displayName: 'Description',
        headerStyle: styles.headerDark,
        //cellStyle: styles.cellPink, // <- Cell style
        width: 220 // <- width in pixels
      }
    }


    // data set
    const dataset = [
      { customer_name: 'IBM', status_id: 1, note: 'some note', misc: 'not shown' },
      { customer_name: 'HP', status_id: 0, note: 'some note' },
      { customer_name: 'MS', status_id: 0, note: 'some note', misc: 'not shown' }
    ];

    // juntando as colunas 
    // const merges = [
    //   { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } },
    //   { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
    //   { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
    // ];

    // Criando o excel do relatorio 
    const report = excel.buildExport(
      [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
        {
          name: 'Report', // <- Specify sheet name (optional)
          //heading: heading, // <- Raw heading array (optional)
          // merges: merges, // <- Merge cell ranges
          specification: specification, // <- Report specification
          data: dataset // <-- Report data
        }
      ]
    );

    return callback(report);
  }


}


module.exports = Exports;
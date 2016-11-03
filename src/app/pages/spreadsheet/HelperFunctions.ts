export function toTable(spreadsheetData: Array<any>): Array<any> {

  var numberOfColumns = getNumberOfColumns(spreadsheetData);
  var numberOfRows = getNumberOfRows(spreadsheetData);

  return spreadsheetData.slice(0, numberOfRows + 1)
    .map(row => {
      if(row.length === numberOfColumns)
        return row;
      else
        return toRowOfLengthN(row, numberOfColumns)
    })
}

function createNullArray(n: number): Array<any> {
  var emptyArray = [];

  for(var i = 0; i < n; i++)
    emptyArray.push(null)

  return emptyArray;
}

function toRowOfLengthN(row: Array<any>, n: number): Array<any> {
  return createNullArray(n)
    .map((element, index) => {
          if(row[index])
            return row[index];
          else
            return element;
     })
}

function getNumberOfColumns(spreadsheetData: Array<any>): number {
  return spreadsheetData.reduce((longestRowLength, row) => {
    return row.length > longestRowLength ? row.length : longestRowLength
  }, 0);
}

function getNumberOfRows(spreadsheetData: Array<any>): number {
  return spreadsheetData.reduce((lastRow, row, index) => {
    return row.length ? index : lastRow;
  }, -1)
}

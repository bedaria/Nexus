import { Component } from '@angular/core';
import { SpreadsheetService } from './spreadsheet.service';
import { toTable } from './HelperFunctions';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css'],
  providers: [ SpreadsheetService ]
})

export class SpreadsheetComponent {
  columns: Array<number> = [1, 2, 3, 4];
  rows: Array<number> = [1, 2, 3, 4];
  data: Array<any> = [[], [], [], []];

  constructor(private spreadsheetService: SpreadsheetService) {};

  displayTable(arg): void{
    console.log(toTable(this.data))
    this.saveTable();

  }

  addColumn(): void {
    this.columns.push(this.columns.length + 1)
  }

  addRow(): void {
    this.rows.push(this.rows.length + 1)
    this.data.push([])
  }

  saveTable(): void {
    //nameTable

    //can table be saved?
    var table = toTable(this.data)
    var tableData = {name: "tableName", data: table, id: 1}
    this.spreadsheetService.saveTable(tableData)
      .subscribe(d => console.log("table saved"));
  }


  //show all rows/columns from database, from displayed file names
  //update/delete
  //readIn csv file
}

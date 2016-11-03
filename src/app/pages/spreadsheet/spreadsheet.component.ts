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
  tableName: string;

  constructor(private spreadsheetService: SpreadsheetService) {};

  addColumn(): void {
    this.columns.push(this.columns.length + 1)
  }

  addRow(): void {
    this.rows.push(this.rows.length + 1)
    this.data.push([])
  }

  saveTable(): void {
    if(!this.tableName)
      alert("Please name your table!")
    else {
      var table = toTable(this.data)
      var tableData = {name: this.tableName, data: table, id: 1}
      this.spreadsheetService.saveTable(tableData)
        .subscribe(data => alert("Table Saved!"));
    }
  }
}

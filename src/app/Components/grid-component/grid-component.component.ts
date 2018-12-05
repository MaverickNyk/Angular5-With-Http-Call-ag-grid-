import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {GridService} from "./grid.service"
import {Http} from '@angular/http';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
  
})
export class GridComponentComponent implements OnInit {

  private today = new Date();
  private response;
  private gridOptions =<GridOptions>{
  animateRows: true,
  enableSorting: true,
  suppressDragLeaveHidesColumns :true,
  groupDefaultExpanded: 1,
  enableFilter:true,
  pagination: true,
  paginationAutoPageSize: true,
  colWidth:130,
  };

  
  constructor(private http:Http, private service:GridService) {
    this.gridOptions.columnDefs=[
      {
        headerName:"ENV",
        field:"env",
        width:250
        
      },
      {
        headerName:"Branch",
        field:"branch",
        width:250
      },
      {
        headerName:"Build Number",
        field:"buildNumber",
        width:250
      },
  
    ];
    this.gridOptions.rowData =[{
      "env": "ARM07",
      "branch": "DevMain",
      "buildNumber": "LAST=446"
      }];


      

   }

  ngOnInit() {
    
    this.service.getbuildInfo().subscribe(
      (response:any) =>{
        this.gridOptions.rowData =[{
          "env": "ARM07",
          "branch": "DevMain",
          "buildNumber": "LAST=446"
          }];
        console.log( this.gridOptions.rowData );
    });
    
  }

}

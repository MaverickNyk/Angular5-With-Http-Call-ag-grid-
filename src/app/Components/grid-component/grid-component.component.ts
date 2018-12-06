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

  gridApi:any;
  columnApi:any;
  gridOptions =<GridOptions>{
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
         }

   OnGridReady(params){
    this.gridApi=params.api;
    this.columnApi = params.columnApi;
  }

  ngOnInit() {
    
    this.service.getbuildInfo().subscribe(
      data =>{

        this.gridApi.setRowData([]);
        var newData=Array.from(data.json());
        this.gridApi.updateRowData({add:newData});
    })
    
  }


}

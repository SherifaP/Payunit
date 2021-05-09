import { Component, OnInit, ViewChild } from '@angular/core';
import { validateUserData, PayunitData  } from '../payunit-data';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
let validData = validateUserData
const status: string[] = [
 'darkgreen','teal','rgb(192, 31, 31)', 
 'darkgreen','teal','rgb(192, 31, 31)', 
 'darkgreen','teal','rgb(192, 31, 31)', 
 'darkgreen','teal', 
 
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [ 'useName','id', 'amount',  'paymentMethod', 'status', 'morevert'];
  dataSource: MatTableDataSource<PayunitData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: validData.length}, (_, k) => createNewUser(k));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

const name = validData.map((data)=>{
  return data.userName
})
const userId = validData.map((data)=>{
  return data.userIds
})

const paymentMethod = validData.map((data)=>{
  return data.paymentMethod
})

const amount = validData.map((data)=>{
  return data.amount
})

const LastName = validData.map((data)=>{
  return data.LastName
})





/** Builds and returns a new User. */
function createNewUser(id: number): PayunitData {
  return {
    userId:userId[id],
    name: name[id],
    LastName: LastName[id],
    paymentMethod: paymentMethod[id],
    status: status[id],
    amount: amount[id]

  }

}





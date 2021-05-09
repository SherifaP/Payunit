import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
    
  }

  highcharts = Highcharts;
   chartOptions:any = {   
      chart: {
         type: "area"
      },
      title: {
         text: 'Area chart with negative values'
      },
      xAxis:{
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits:{
        enabled: false
      },
      series: [
         {
            name: 'John',
            data: [5, 3, 4, 7, 2]
         }, 
         {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
         }, 
         {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
         }
      ]
   };

}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-three-d',
  templateUrl: './chart-three-d.component.html',
  styleUrls: ['./chart-three-d.component.css']
})
export class ChartThreeDComponent implements OnInit {
  ngOnInit(): void {
   
  }

  highcharts = Highcharts;
  chartOptions:any = {   
     chart : {
        type:'pie',
        options3d: {
           enabled: true,
           alpha: 45,
           beta: 0
        }
     },
     title : {
        text: 'Browser market shares at a specific website, 2014'   
     },
     tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions : {
        pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           depth: 35,
           dataLabels: {
              enabled: true,
              format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
              style: {
                 color: 
                 'black'
              }
           }
        }

     },
     credits:{
        enabled: false
      },
     series : [{
        type: 'pie',
        name: 'Browser share',
        data: [
           ['Firefox',   45.0],
           ['IE',       26.8],
           {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
           },
           ['Safari',    8.5],
           ['Opera',     6.2],
           ['Others',      0.7]
        ]
     }]
  };

}

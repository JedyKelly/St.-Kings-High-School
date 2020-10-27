import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      label: {
        fontSize: 800,
        fontColor: "#EA9C28",
      },
    },
  };
  barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "bottom",
      label: {
        fontSize: 800,
        fontColor: "#EA9C28",
      },
    },
  };
  diagnosisChartData = [
    {
      data: [250, 300],
      backgroundColor: ["#FEE0E6", "#D7ECFA"],
      borderColor: ["#F4B382", "#4ABC96"],
      borderWidth: 2,
    },
  ];
  diagnosisChartLabels = ["Positive", "Negative"];
  financeChartLabels = ["Paid", "Pending"];
  financeChartData = [
    {
      data: [280, 40],
      backgroundColor: ["#FEE0E6", "#D7ECFA"],
      borderColor: ["#FD9FB3", "#5EB3EC"],
      borderWidth: 1,
    },
  ];
  diagnosis = {
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    chartType: "bar",
    chartLegend: true,
    chartData: [
      {
        data: [0, 0, 0, 4, 6, 10, 4],
        label: "Allowance",
        backgroundColor: "#edcccc",
      },
      {
        data: [0, 0, 10, 90, 86, 14, 40],
        label: "Deduction",
        backgroundColor: "#32658B",
      },
    ],
    totalPositive: 24,
    totalNegative: 240,
    total: 244,
  };
  constructor() {}

  ngOnInit() {}
}

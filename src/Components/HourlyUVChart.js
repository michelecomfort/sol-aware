import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import '../Styles/HourlyUVChart.css'
import Chart from 'chart.js/auto'

const HourlyUVChart = ({ uvData }) => {
    const uvValues = uvData.map(hour => {
        return hour.UV_VALUE
    }).slice(3, 14)
    
    const barColors = []
    for(var i = 0; i < uvValues.length; i++) {
        if (uvValues[i] <= 2){barColors.push('#4FBF68')}
        if (uvValues[i] > 2 && uvValues[i] <= 5){barColors.push('#F6FE98')}
        if (uvValues[i] > 5 && uvValues[i] <= 7){barColors.push('#F9CD77')}
        if (uvValues[i] > 7 && uvValues[i <= 10]){barColors.push('#FA7272')}
        if (uvValues[i] > 10){barColors.push('#CDA4F5')}
    }
    console.log(barColors)
    const chartData = {
        labels: ['8', '9', '10','11', '12', '1', '2', '3', '4', '5', '6'],
        datasets: [
        {
            label: 'Hour',
            backgroundColor: barColors,
            borderColor: barColors,
            borderWidth: 2,
            data: uvValues
        }
        ]
    };
    console.log(barColors)
        return (
            <div className='hourly-chart-container'>
                <div className='chart'>
                    <Bar
                        data={chartData}
                        
                        options={{
                            maintainAspectRatio: true,
                        plugins: {
                            title: {
                            display: true,
                            text: "Hourly UV Index"
                            },
                            legend: {
                            display: true,
                            position: "bottom"
                        }
                        }
                        }}
                    />

                </div>
            </div>
        )


}

export default HourlyUVChart
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Charts = (props) => {
    return (
        <>
            <Bar
                width={'100%'}
                height={'auto'}
                style={{ maxHeight: '500px' }}
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            id: 1,
                            label: `${props.fruit1}`,
                            data: [5, 6, 7],
                        },
                        {
                            id: 2,
                            label: `${props.fruit2}`,
                            data: [3, 2, 1],
                        },
                    ],
                }}
            />
        </>
    )
}

export default Charts

import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Charts = (props) => {
    const { fruit1, fruit2 } = props;
    const label = ["carbohydrates", "protein", "fat", "calories", "sugar"]

    // get neutrino data from given fruit array 
    const getData = (fruit) => {
        let data = [];
        for (const key in fruit[1]) {
            data.push(fruit[1][key])
        }
        return data;
    }

    return (
        <>
            <Bar
                width={'100%'}
                height={'auto'}
                style={{ maxHeight: '500px' }}
                datasetIdKey='id'
                data={{
                    labels: label,
                    datasets: [
                        {
                            id: 1,
                            label: `${fruit1[0]}`,
                            data: getData(fruit1),
                            backgroundColor: '#30006C',
                        },
                        {
                            id: 2,
                            label: `${fruit2[0]}`,
                            data: getData(fruit2),
                            backgroundColor: '#FC700C',
                        },
                    ],
                }}
            />
        </>
    )
}

export default Charts

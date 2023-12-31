import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { formatCurrency, formatDate, formatPercentage } from 'src/utils';
import { IPerformanceData } from './CompositeDetails';

interface IChartDetails {
    data: IPerformanceData[]
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const marketValueOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: { display: true, text: 'Market Value By Period' }
    },
    scales: {
        y: {
            ticks: {
                callback: (value: any ) => formatCurrency(value)
            }
        }
    }
};

const returnOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: { display: true, text: 'Asset Weighted Returns %' }
    },
    scales: {
        y: {
            ticks: {
                stepSize: 0.1,
                count: 40
            }
        }
    }
};

export default function ChartDetails({ data }: IChartDetails) {

    const sortedData = data.sort((b, a) => {
        const timeA = new Date(`${a.PerfDate}z`);
        const timeB = new Date(`${b.PerfDate}z`);

        return timeB.getTime() - timeA.getTime()
    })

    const labels = sortedData.map((d) => formatDate(d.PerfDate))

    const marketValuedata = {
        labels,
        datasets: [
            {
                label: 'Beginning Market Value',
                data: sortedData.map((d: any) => d.bop_mv),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'End Market Value',
                data: sortedData.map((d: any) => d.eop_mv),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const returnData = {
        labels,
        datasets: [
            {
                label: 'Gross Return',
                data: sortedData.map((d: any) => formatPercentage(d.awr_gr)),
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgba(0, 128, 0, 0.5)',
            },
            {
                label: 'Net Return',
                data: sortedData.map((d: any) => formatPercentage(d.awr_nr)),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <Line options={marketValueOptions} data={marketValuedata} />

            <Line options={returnOptions} data={returnData} />
        </>
    )
}

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
import { formatDate } from 'src/utils';
interface IChartDetails {
    // Todo: remove any type
    data: any;
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
    title: { display: true, text: 'Market Value By Period' },
    },
};

const returnOptions = {
    responsive: true,
    plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Asset Weighted Returns %' },
    },
};

export default function ChartDetails({ data }: IChartDetails) {

    // TODO: Remove Any type
    const sortedData = data.sort((b: any, a: any) => {
        const timeA = new Date(`${a.PerfDate}z`);
        const timeB = new Date(`${b.PerfDate}z`);

        return timeB.getTime() - timeA.getTime()
    })

    // TODO: Remove Any type
    const labels = sortedData.map((d: any) => formatDate(d.PerfDate))

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
                data: sortedData.map((d: any) => d.awr_gr),
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgba(0, 128, 0, 0.5)',
            },
            {
                label: 'Net Return',
                data: sortedData.map((d: any) => d.awr_nr),
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

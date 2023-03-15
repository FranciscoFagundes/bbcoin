import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from "react-native-chart-kit";

type ChartProps = {
    readonly priceChange7d: number;
}

const Chart: React.FC<ChartProps> = ({ priceChange7d }) => {
    const screenWidth = Dimensions.get("window").width;
    
    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        datasets: [
            {
                data: priceChange7d,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };



    return (
        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                withDots={false}
            />
        </View>
    )
}

export default Chart
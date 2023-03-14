import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { LineChart } from "react-native-chart-kit";


type ChartProps = {
    readonly name: string,
    readonly symbol: string,
    readonly currentPrice: number,
    readonly priceChangePercentage7d: number,
    readonly logoUrl: string,
    readonly sparkLine: string
}

const data = {
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
};

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("window").width;

const Chart: React.FC<ChartProps> = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, sparkLine }) => {
    return (
        <View style={styles.chartWrapper}>
            <View style={styles.titlesWrapper}>
                <View style={styles.upperTitles}>
                    <View style={styles.upperLeftTitle}>
                        <Image source={{ uri: logoUrl }} style={styles.image} />
                        <Text style={styles.subtitle}>{name} ({symbol})</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>7d</Text>
            </View>
            <View style={styles.lowerTitles}>
                <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                <Text style={styles.title}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>

            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    chartWrapper: {
        margin: 16,
    },
    titlesWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upperLeftTitle: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4
    },
    subtitle: {
        fontSize: 14,
        color: "lightgrey"
    },
    lowerTitles: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boldTitle: {
        fontSize: 24,
        color: "black",
        fontWeight: "bold"
    },
    title: {

    }

});
export default Chart
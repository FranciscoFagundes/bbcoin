import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

type CryptoProps = {
    readonly name: string,
    readonly symbol: string,
    readonly currentPrice: number,
    readonly priceChangePercentage7d: number,
    readonly logoUrl: string,
    readonly onPress: () => void;
}

const ListItem: React.FC<CryptoProps> = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
    
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.itemWrapper}>

                {/* lado esquerdo */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: logoUrl }} style={styles.image} resizeMode="cover"/>
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                {/* lado direito */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[styles.subtitle, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1"
    },
    rightWrapper: {
        alignItems: "flex-end"
    },
})
export default ListItem
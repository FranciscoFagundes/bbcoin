import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

type ItemDetailsProps = {
    readonly name: string,
    readonly symbol: string,
    readonly currentPrice: number,
    readonly priceChangePercentage7d: number,
    readonly logoUrl: string
}

const ItemDetails: React.FC<ItemDetailsProps> = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
    
    return (
        <View style={styles.itemWrapper}>
            {/* lado esquerdo */}
            <View style={styles.leftWrapper}>
                <Image source={{ uri: logoUrl }} style={styles.image} resizeMode="cover" />
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>

            {/* lado direito */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                <Text style={[styles.subtitle, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>
        </View>
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
        height: 24,
        width: 24,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 14
    },
    subtitle: {
        marginTop: 4,
        fontSize: 12,
        color: "#A9ABB1"
    },
    rightWrapper: {
        alignItems: "flex-end"
    },
});

export default ItemDetails
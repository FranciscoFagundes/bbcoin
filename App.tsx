import { } from 'react-native-gesture-handler';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import ListItem from './src/components/ListItem';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { SAMPLE_DATA } from "./assets/data/sampleData";
import Chart from './src/components/Chart';
import ItemDetails from './src/components/ItemDetails';

const ListHeader = (): JSX.Element => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Mercado</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const App = (): JSX.Element => {

  const [selectCoinData, setSelectCoinData] = useState(null);
  const [clicked, setClicked] = useState(false);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectCoinData(item);
    if (clicked) {
      bottomSheetModalRef.current.present();
      setClicked(false);
    } else {
      bottomSheetModalRef.current.close();
      setClicked(true);
    }
  }


  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={() => openModal(item)}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        enablePanDownToClose
      >
        {
          selectCoinData ?
          <View style={styles.contentContainer}>
          <ItemDetails 
             name={selectCoinData.name}
             symbol={selectCoinData.symbol}
             currentPrice={selectCoinData.current_price} 
             priceChangePercentage7d={selectCoinData.price_change_percentage_7d_in_currency}
             logoUrl={selectCoinData.image}
          />
         </View> : null
        }
        
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerWrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginHorizontal: 16,
    marginTop: 16,
  },
  contentContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bottomSheet: {
    shadowColor: "#black",
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 5
  }
});

export default App;

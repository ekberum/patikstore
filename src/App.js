import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList
} from 'react-native';
import urun_data from './urunler.json';
import ProductsCard from './ProductsCard';

const App =  () => {
  const urunler = ({item}) => <ProductsCard urun = {item} />;

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.logo_title}>PATIKASTORE</Text>
      <TextInput
      style={styles.search_input}
      placeholder="Ara..."/>
      <FlatList
        data={urun_data}
        renderItem={urunler}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // İki sütunlu gösterim için numColumns prop'unu kullanın
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Conontainer: {
    flex: 1,
    margin: 10,
  },
  logo_title: {
  color: '#800080',
  fontSize: 50,
  fontWeight: 'bold',
  margin:10
  },
  search_input: {
  fontSize: 18,
  backgroundColor: '#e0dae0',
  margin: 10,
  border: 5,
  borderRadius: 15
  
  },
});

export default App;

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductsCard.stlye';

const ProductsCard = ({urun}) => {
    const stokDurumu = urun.inStock ? urun.inStock : 'Stok Yok';
return (
    <View style={styles.urun_card}>
        <TouchableOpacity>
            <Image style={styles.urun_resim} source={{uri: urun.imgURL}}/>           
            <Text style={styles.urun_baslik}>{urun.title}</Text>
            <Text style={styles.urun_fiyat}>{urun.price}</Text>
            <Text style={styles.urun_stok_durumu}>{stokDurumu}</Text>
        </TouchableOpacity>
    </View>

    )}

    export default ProductsCard
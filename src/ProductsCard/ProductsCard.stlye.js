import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
urun_card:{
    flex : 1,
    backgroundColor: '#e0dae0',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    maxWidth : 200,
},
urun_resim:{
    resizeMode : 'stretch',
    margin: 10,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,

},
urun_baslik:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
},
urun_fiyat: {
    fontSize: 15,
    fontWeight: 'bold',
},
urun_stok_durumu: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
},

})
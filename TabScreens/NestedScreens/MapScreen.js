import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = ({route}) => {

    console.log(route.params)
    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}}></MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

})



export default MapScreen;

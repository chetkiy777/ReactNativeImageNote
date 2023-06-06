import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = ({route}) => {

    console.log(route.params)
    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: 50.44476436284783,
                longitude: 30.417073066012357,
                latitudeDelta: 0.001,
                longitudeDelta: 0.006
            }}>
                <Marker coordinate={{
                    latitude: 50.44476436284783,
                    longitude: 30.417073066012357
                }} title='home' />
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})



export default MapScreen;

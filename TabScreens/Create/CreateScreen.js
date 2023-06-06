import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Camera} from 'expo-camera';
import { useState, useEffect } from 'react';
import * as Location from "expo-location";

const CreateScreen = ({navigation}) => {

    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [location, setLocation] = useState('');

    const takePhoto = async () => {

        let photo = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        setPhoto(photo.uri)
        setLocation(location)
    }

    const sendPhoto = () => {

        navigation.navigate('DefaultScreen', {photo, location})
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>

                { photo && <View style={styles.takePhotoContainer}>
                        <Image source={{uri: photo}} style={{height: 200, width: 200}} />
                    </View> 
                }

                <TouchableOpacity style={styles.snapButton} onPress={takePhoto}>
                    <Text style={styles.snapText}>SNAP</Text>
                </TouchableOpacity>
            </Camera>

            { photo && <View>
                    <TouchableOpacity style={styles.sendBtn} onPress={sendPhoto}>
                        <Text style={styles.sendText}>SEND</Text>
                    </TouchableOpacity>
                </View>
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height: '70%',
        marginHorizontal: 2,
        marginTop: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    snapButton: {
        color: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    snapText: {
        color: '#fff'
    },
    takePhotoContainer: {
        position: 'absolute',
        top: 30,
        left: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10
    },
    sendBtn: {
        height: 70,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
    sendText: {
        fontSize: 22,
        fontWeight: 500
    }

})



export default CreateScreen;



import {View, StyleSheet, Image, SafeAreaView, FlatList, StatusBar, Button} from 'react-native';
import { useState, useEffect } from 'react';



const Item = ({photo, navigation}) => (
    <View style={styles.item}>
        <Image source={{uri: photo}} style={styles.img}/>
        <Button title='go to Map' onPress={() => navigation.navigate('Map')} />
        <Button title='go to Comments' onPress={() => navigation.navigate('Comments')} />
    </View>
);


const DefaultPostsScreen = ({route, navigation}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }
    }, [route.params]);


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx}
                renderItem={({item}) => <Item photo={item.photo} navigation={navigation} />}
                
            />
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        paddingTop: 10,
        marginHorizontal: 10,
        
    },
    img: {
        height: 200,
        width: 350,
    }
})


export default DefaultPostsScreen;




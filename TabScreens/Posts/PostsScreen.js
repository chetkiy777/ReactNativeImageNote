import {View, StyleSheet, Image, SafeAreaView, FlatList, StatusBar, Text, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';



const Item = ({photo}) => (
    <View style={styles.item}>
        <Image source={{uri: photo}} style={styles.img}/>
    </View>
);


const PostsScreen = ({route, navigation}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }
    }, [route.params]);

    console.log(posts);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Item photo={item.photo} />}
                keyExtractor={(item, indx) => indx}
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MapScreen', {posts})}>
                <Text style={styles.sendText}>Go to Map</Text>
            </TouchableOpacity>
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


export default PostsScreen;



import {View, Text, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import { useState, useEffect } from 'react';



const PostsScreen = ({route}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }
    }, [route.params]);

    console.log(posts);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList   
                    data={posts}    
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={({item}) => {
                        <View style={styles.imgThumb}>
                            <Image source={{uri: item.photo}} style={{height: 200, width: 350}} />
                        </View> 
                    }} 
                />
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imgThumb: {
        marginHorizontal: 10,
        
    },
    img: {
        height: 200,
        width: 350,
    }


})


export default PostsScreen;



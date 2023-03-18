import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})



export default MainScreen;


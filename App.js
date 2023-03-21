import { StyleSheet, View} from 'react-native';
import { useCallback } from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from './router';


SplashScreen.preventAutoHideAsync()


export default function App() {

  const routing = useRoute({});

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          {routing}
        </NavigationContainer>
      </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AppNavigator } from './src/navigator/AppNavigator';
import { NavigationContextProvider } from './contexts/NavigationContext';
import { AccountContextProvider } from './contexts/AccountContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AccountContextProvider>
      <NavigationContextProvider>
        <ThemeContextProvider>
          <AppNavigator />
        </ThemeContextProvider>
      </NavigationContextProvider>
      </AccountContextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

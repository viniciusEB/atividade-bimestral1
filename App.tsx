import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Sobre from './src/screens/Sobre/Sobre';
import { ThemeProvider, useTheme } from './src/ThemeContext';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Content() {
  const { colors, isLight } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
      <StatusBar style={isLight ? 'dark' : 'light'} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
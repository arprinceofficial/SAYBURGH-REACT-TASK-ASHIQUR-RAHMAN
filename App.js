import Home from './screens/Home';
import Detail from './screens/Detail';
import MoreMovies from './screens/MoreMovies';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native'
// import ignoreWarns from 'ignore-warnings';
const ignoreWarns = [
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
];
const warn = console.warn;
console.warn = (...arg) => {
    for (let i = 0; i < ignoreWarns.length; i++) {
        if (arg[0].startsWith(ignoreWarns[i])) return;
    }
    warn(...arg);
};

LogBox.ignoreLogs(ignoreWarns);


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    // --------------------- Navigation Bar ---------------------
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Details' }} />
        <Stack.Screen name="MoreMovies" component={MoreMovies} options={{ title: 'More Movies' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Registrar' 
    screenOptions={{headerShown:false, tabBarStyle: {backgroundColor:'black'}}}>
      <Tab.Screen name="Registrar" component={Screen1} />
      <Tab.Screen name="Ver" component={Screen2} />
      <Tab.Screen name="Gestionar" component={Screen3} />
      <Tab.Screen name="Lista" component={Screen4} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerTintColor: 'white',headerStyle: { backgroundColor: 'black' },}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="BottomTab" component={MyTabs} options={{title: 'Bienvenidos'}}/>
    </Stack.Navigator>
  );
}

export default function Navigator(){
    return(
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
    )
  }
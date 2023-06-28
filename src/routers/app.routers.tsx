import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';
const Stack = createNativeStackNavigator();

export function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
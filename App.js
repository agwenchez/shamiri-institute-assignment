import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/Tabs';
import PersonalDashboard from './components/PersonalDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        //<View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Dashboard" component={PersonalDashboard} />
                    <Stack.Screen name="Details" component={Tabs} />
                </Stack.Navigator>
            </NavigationContainer>

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

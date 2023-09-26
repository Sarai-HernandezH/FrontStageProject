import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from './StackNavigator';
import CartNavigator from './CartNavigator';
import Entypo from '@expo/vector-icons/Entypo'
import OrdersNavigator from './OrdersNavigator';

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTab.Screen
                name='Shop'
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            size={24} name={"shop"}
                            color={focused ? colors.red : colors.white}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name='CartNav'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name={"shopping-cart"}
                            size={24}
                            color={focused ? colors.red : colors.white}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name='OrdersNav'
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name={"add-to-list"}
                            size={24}
                            color={focused ? colors.red : colors.white}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>)
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.black,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
});
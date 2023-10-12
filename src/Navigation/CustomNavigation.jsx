import { CommonActions } from '@react-navigation/native';

export const navigateToBottomTabNavigator = () => {
    return CommonActions.navigate({
        name: 'BottomTabNavigator', 
    });
};

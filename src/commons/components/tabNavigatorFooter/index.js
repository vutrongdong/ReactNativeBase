import React from 'react';
import Categories from '../../screens/categories';
import Home from '../../screens/homes';
import Carts from '../../screens/carts';
import Profiles from '../../screens/profiles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const getIconName = (route, color, size) => {
    let iconName;
    switch (route.name) {
        case 'Home':
            iconName = 'rocket'
            break;
        case 'Categories':
            iconName = 'rocket'
            break;
        case 'Carts':
            iconName = 'rocket'
            break;
        case 'Profiles':
            iconName = 'rocket'
            break;
        default:
            break;
    }

    return <Icon name={iconName} size={size} color={color} />;
}

const TabNavigatorFooter = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => getIconName(route, color, size)
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Carts" component={Carts} />
        <Tab.Screen name="Profiles" component={Profiles} />
      </Tab.Navigator>
    )
}

export default TabNavigatorFooter;
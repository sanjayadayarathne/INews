import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/home/Home';
import {CompassIcons} from '../icons/Compass';
import {Favorite} from '../screens/favorite/Favorite';
import {BookmarkIcon} from '../icons/Bookmark';
import {PlaneIcons} from '../icons/Plane';
import {LatestNews} from '../screens/LatestNews/LatestNews';

export type TabNavigatorParamList = {
  Home: undefined;
  Latest: undefined;
  Favorite: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarIcon: CompassIcons,
        }}
      />

      <Tab.Screen
        name="Latest"
        component={LatestNews}
        options={{
          headerShown: false,
          tabBarLabel: 'Latest',
          tabBarIcon: PlaneIcons,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarLabel: 'Bookmark',
          tabBarIcon: BookmarkIcon,
        }}
      />
    </Tab.Navigator>
  );
};

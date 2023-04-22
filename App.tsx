/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/home/index';
import Setting from './src/pages/setting/index';
import Statistics from './src/pages/statistics/index';
import Color from './src/config/style/color';

// 创建底部导航器
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.primary,
          headerStyle: {
            backgroundColor: Color.primary,
            height: 42,
          },
          headerTintColor: Color.white,
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen name="Index" component={Home} options={{title: '记账本'}} />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{title: '统计'}}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{title: '设置'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

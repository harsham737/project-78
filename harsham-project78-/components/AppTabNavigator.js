import React from 'react';
import {View , Text , Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateItem from '../screens/DonateItem';
import RequestItem from '../screens/RequestItem';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        screen:DonateItem,
        navigationOptions :{
            tabBarIcon : <Image source={require("../donate-icon-H2J31K.jpg")} style={{width:20, height:20}}/>,
            tabBarLabel : "Donate Books",
          }

 
        },
        BookRequest: {
          screen: RequestItem,
          navigationOptions :{
            tabBarIcon : <Image source={require("../reqqq.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Book Request",
          }
        }
      });
      
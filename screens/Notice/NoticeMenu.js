import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";
import {createStackNavigator} from 'react-navigation'


class NoticeListScreen extends React.Component{
    render(){
        return(<View></View>);
    } 
}

class NoticeDetailsScreen extends React.Component{
    render(){
        return(<View></View>);
    }
}


export const NoticeMenuNavigator = createStackNavigator(
    {
      NoticeList: { screen: NoticeListScreen,
                    navigationOptions: () => ({
                        header:null,
                        
                    }),
                 },
      NoticeDetails: { screen: NoticeDetailsScreen ,
                        navigationOptions: () => ({
                            
                            headerStyle:{height:30}
                        }),
                    },
     
},
   
  );
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";
import {createStackNavigator} from 'react-navigation'


class AttendanceListScreen extends React.Component{
    render(){
        return(<View></View>);
    }
}

class AttendanceDetailsScreen extends React.Component{
    render(){
        return(<View></View>);
    } 
}


export const AttendanceMenuNavigator = createStackNavigator(
    {
        AttendanceList: { screen: AttendanceListScreen,
                    navigationOptions: () => ({
                        header:null,
                        
                    }),
                 },
                 AttendanceDetails: { screen: AttendanceDetailsScreen ,
                        navigationOptions: () => ({
                            
                            headerStyle:{height:30}
                        }),
                    },
     
},
   
  );
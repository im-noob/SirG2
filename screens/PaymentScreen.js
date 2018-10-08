import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export default class PaymentScreen extends Component {
    static navigatonOptions={
        drawerIcon:({tintColor}) =>(
          <Icon name = "home" style = {{ fontSize:23, color:tintColor}}/>
        )
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>PaymentScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
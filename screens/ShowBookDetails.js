import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export default class ShowBookDetails extends Component {
    static navigationOptions={
        header:null,
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>ShowBookDetails</Text>
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
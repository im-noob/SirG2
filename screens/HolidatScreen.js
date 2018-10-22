import React, { Component } from "react";
import { 
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner, CardItem, Text,} from 'native-base';

export default class HolidayScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    
    render() {
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <CardItem header>
                        <Text style={{fontWeight:'700',fontSize:25}}>Holiday List</Text>
                    </CardItem>
                    <WebView
                            source={{uri: 'http://cgpay.in/wp-content/uploads/2018/03/341.png'}}
                            scalesPageToFit={true}
                        />
                    <CardItem footer>
                        <Text style={{fontWeight:'500',fontSize:15}}>**User two fingures to adjust Image.</Text>
                    </CardItem>
                </Container>
            );
        }else{
            return (
                <View style={styles.loder}>
                <Spinner  color='blue'/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    loder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
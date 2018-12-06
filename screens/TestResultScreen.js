import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
    ScrollView
} from "react-native";
import { Container, Spinner, Button, Text,Content,Card,CardItem,Body,List,ListItem} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TestResultScreen extends Component {
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
                    <Content style={{marginVertical:10}}>
                    {/* <ScrollView style={{padding:10}}> */}
                        <Card padder style={{padding:10,margin:10}}>
                            <CardItem header bordered>
                            <Text>Score Card</Text>
                            </CardItem>
                            <CardItem bordered>
                            <Body>
                                <Text style={{fontWeight:'800'}}>Test Name : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>No of question : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Test Type : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Duration : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Full Marks : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>negative Marking : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Attemept Question : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Corrent Question : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Wrong Queston : </Text><Text></Text>
                                <Text style={{fontWeight:'800'}}>Marks Obtained : </Text><Text></Text>                             
                            </Body>
                            </CardItem>
                            <CardItem footer bordered>
                            <Text>Best Wishes for your next Exam!!!</Text>
                            </CardItem>
                        </Card>
                        <Button bordered dark >
                            <Text>Back To Home</Text>
                        </Button>
                    </Content>
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
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
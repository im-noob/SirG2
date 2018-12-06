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
        var items = [
            {name:'Test Name',value:''},
            {name:'No of question',value:''},
            {name:'Test Type',value:''},
            {name:'Duration',value:''},
            {name:'Full Marks',value:''},
            {name:'negative Marking',value:''},
            {name:'Attemept Question',value:''},
            {name:'Corrent Question',value:''},
            {name:'Wrong Queston',value:''},
            {name:'Marks Obtained',value:''},


          ];
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
                                <List dataArray={items}
                                    renderRow={(item) =>
                                    <ListItem>
                                        <Text style={{fontWeight:'800'}}>{item.name} : </Text><Text>{item.value}</Text>
                                    </ListItem>
                                    }>
                                </List>
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
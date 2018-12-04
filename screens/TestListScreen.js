import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner,List,ListItem, Text,Content,Left,Right,Body,Button, Header} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TestListScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    startTest = (testID) =>{
        alert("start Test"+testID);
    }

    render() {
        const {renderCoponentFlag} = this.state;
        // Data
        var items = [
            {testID:'1', testName:'IMO Mock',testType:'Mock',testStatus:'attempt'},
            {testID:'2', testName:'NSO Mock',testType:'Mock',testStatus:'attempt'},
            {testID:'3', testName:'NSTSE Mock',testType:'Mock',testStatus:'attempt'},
            {testID:'4', testName:'IJSO Mock',testType:'Mock',testStatus:'attempt'},
          ];
        if(renderCoponentFlag){
            return(
                <Container>
                    <Header/>
                    <Content>
                        <List dataArray={items}
                            renderRow={(item) =>
                                <ListItem avatar>
                                    <Body>
                                        <Text style={{fontSize:17,fontWeight:'800'}}>{item.testName}</Text>
                                        <Text note>{item.testType}</Text>
                                    </Body>
                                    <Right>
                                        {
                                            item.testStatus == 'attempt'? 
                                            <Button info style={{borderRadius: 10,}} onPress={()=>{this.startTest(item.testID)}}><Text> Attempt </Text></Button>:
                                            <Button success style={{borderRadius: 10,}} onPress={()=>{this.startTest(item.testID)}}><Text> Analysis </Text></Button>  

                                        } 
                                    </Right>
                                </ListItem>
                            }>
                        </List>
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
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
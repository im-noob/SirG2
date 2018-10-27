import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner, Card, Text,Content, CardItem} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar, } from 'react-native-calendars';


export default class AttendenceScreen extends Component {
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
                    <Content>
                    <Calendar
                        // Collection of dates that have to be marked. Default = {}
                        markedDates={{
                            '2018-10-16': { marked: true, dotColor: 'red'},
                            '2018-10-17': { marked: true, dotColor: '#49ac43'},
                            '2018-10-18': { marked: true, dotColor: 'red'},
                            '2018-10-19': { marked: true, dotColor: '#49ac43'},
                            '2018-10-20': { marked: true, dotColor: '#49ac43'},
                            '2018-10-21': { marked: true, dotColor: '#49ac43'},
                            '2018-10-22': { marked: true, dotColor: 'red'},
                            '2018-10-24': { marked: true, dotColor: '#49ac43'},
                            '2018-10-25': { marked: true, dotColor: 'red'},
                            '2018-10-28': { marked: true, dotColor: 'red'},
                            '2018-10-29': { marked: true, dotColor: 'red'},
                            '2018-11-01': { marked: true, dotColor: '#49ac43'},
                            '2018-11-02': { marked: true, dotColor: '#49ac43'},
                            '2018-11-04': { marked: true, dotColor: '#49ac43'},
                            '2018-11-05': { marked: true, dotColor: '#49ac43'},



                        }}
                    />
                    <Card>
                        <CardItem style={{flexDirection:'row',alignContent:'space-around'}}>
                            <Text style={{fontSize:20,flex:1}}><Icon name="square" style={{color:'#49ac43', fontSize:20}}/> Present  </Text> 
                            <Text style={{fontSize:20,flex:1}}><Icon name="square" style={{color:'red', fontSize:20}}/> Absent  </Text> 
                            
                        </CardItem>
                    </Card>
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
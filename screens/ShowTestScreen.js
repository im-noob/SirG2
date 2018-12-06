import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import {Body, Container, Spinner, Button,Header, Text,Content,Card,CardItem, Right,List,ListItem, Left,Radio} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const {height,width} = Dimensions.get('window');
export default class ShowTestScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
            testData_set:{
                testName:'PDO Mock',
                fullMarks:'20',
                noOfQuestion:'5',
                duration:'5',
                quenstion_set:[
                    [
                        {optionNO:'Q',content:'Grand Central Terminal, Park Avenue, New York is the world\'s',type:'text'},
                        {optionNO:'1.',content:'largest railway station',type:'text'},
                        {optionNO:'2.',content:'highest railway station',type:'text'},
                        {optionNO:'3.',content:'longest railway station',type:'text'},
                        {optionNO:'4.',content:'None of the above',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Entomology is the science that studies',type:'text'},
                        {optionNO:'1.',content:'Behavior of human beings',type:'text'},
                        {optionNO:'2.',content:'Insects',type:'text'},
                        {optionNO:'3.',content:'The origin and history of technical and scientific terms',type:'text'},
                        {optionNO:'4.',content:'The formation of rocks',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',type:'text'},
                        {optionNO:'1.',content:'Asia',type:'text'},
                        {optionNO:'2.',content:'Africa',type:'text'},
                        {optionNO:'3.',content:'Europe',type:'text'},
                        {optionNO:'4.',content:'Australia',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Garampani sanctuary is located at',type:'text'},
                        {optionNO:'1.',content:'Junagarh, Gujarat',type:'text'},
                        {optionNO:'2.',content:'Diphu, Assam',type:'text'},
                        {optionNO:'3.',content:'Kohima, Nagaland',type:'text'},
                        {optionNO:'4.',content:'Gangtok, Sikkim',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'For which of the following disciplines is Nobel Prize awarded?',type:'text'},
                        {optionNO:'1.',content:'Physics and Chemistry',type:'text'},
                        {optionNO:'2.',content:'Physiology or Medicine',type:'text'},
                        {optionNO:'3.',content:'Literature, Peace and Economics',type:'text'},
                        {optionNO:'4.',content:'All of the above',type:'text'},
                    ],
                ]    
            },
            question_active_no:0,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    changeQuestion = (input) =>{
        let question_active_no = this.state.question_active_no
        if(input == 'prev'){
            if(question_active_no == 0){
                ToastAndroid.show("This is First Question",ToastAndroid.LONG);
                return;
            }
            this.setState({
                question_active_no: question_active_no -1
            });
        }else if(input == 'next'){
            if(question_active_no == this.state.testData_set.quenstion_set.length-1){
                ToastAndroid.show("This is Last Question",ToastAndroid.LONG);
                return;
            }
            this.setState({
                question_active_no: question_active_no + 1
            });
        }
    }
    render() {
        var items = this.state.testData_set.quenstion_set[this.state.question_active_no];
        const {renderCoponentFlag} = this.state;
        console.log(height);
        console.log(width);
        if(renderCoponentFlag){
            return(
                <Container>
                    <Header/>
                    <View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{height:height-100,backgroundColor:'#fafafa'}}>
                                <Card>
                                    <CardItem>
                                        <Icon name="timer" style={{fontSize:20}}/><Text > 00:00:05</Text>
                                    </CardItem>
                                </Card>
                                <ScrollView>
                                    <Card>
                                        <CardItem>
                                            <Left><Text> Q. {this.state.question_active_no + 1}</Text></Left>
                                            {/* <Right style={{flexDirection: 'row'}}>
                                                <Radio selected={false} />
                                                <Text style={{alignSelf:'flex-end'}}> Review Later</Text>
                                            </Right> */}
                                        </CardItem>
                                        <CardItem>
                                            <ScrollView>
                                                <List dataArray={items}
                                                    renderRow={(item) =>
                                                    <View>
                                                        <ListItem>
                                                            {
                                                                item.optionNO=='Q'?
                                                                <Text>{item.content}</Text>:
                                                                <TouchableOpacity>
                                                                     <Text>{item.optionNO} {item.content}</Text>
                                                                </TouchableOpacity>
                                                            }
                                                        </ListItem>
                                                    </View>
                                                    }>
                                                </List>
                                            </ScrollView>
                                        </CardItem>
                                    </Card>
                                </ScrollView>
                            </View>
                            <View style={{height:20,}}>
                                <View style={{flexDirection:'row',}}>
                                    <TouchableOpacity style={{backgroundColor:'#000',flex:1,alignContent:'center',alignSelf:'center',alignItems:'center'}} onPress={()=>{this.changeQuestion('prev')}}>
                                        <Text style={{paddingVertical: 5,fontSize:25,color:'white',alignSelf:'center',alignItems:'center',alignContent:'center'}}><Icon name="less-than" style={{fontSize:30}}/> PREV</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:'#0a60ff',flex:1,alignContent:'center',alignSelf:'center',alignItems:'center'}} onPress={()=>{this.changeQuestion('next')}}>
                                        <Text style={{paddingVertical: 5,fontSize:25,color:'white',alignSelf:'center',alignItems:'center',alignContent:'center'}}>NEXT<Icon name="greater-than" style={{fontSize:30}}/></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
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
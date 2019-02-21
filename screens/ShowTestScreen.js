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
var timerInterval = null;
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
                question_set:[]    
            },
            timer:'00:05:00',
            question_active_no:0,
            answerArr:[],
            selectedCicked:false,
        }
    }
    timerController = () =>{
        timer = this.state.timer;
        arrtimer = timer.split(":");
        hh = parseInt(arrtimer[0]);
        mm = parseInt(arrtimer[1]);
        ss = parseInt(arrtimer[2]);

        console.log(hh+":"+mm+":"+ss);

        if(hh == 0 && mm == 0 && ss == 0){
            clearInterval(timerInterval);
            timer = "00:00:00";
            this.setState({
                timer:timer
            });
            this.props.navigation.navigate('showResultScreen',{
                TestName:this.state.testData_set.testName,
                NoOfQuestion:this.state.testData_set.noOfQuestion,
                TestType:this.state.testData_set.testType,
                Duration:this.state.testData_set.duration,
                FullMarks:this.state.testData_set.fullMarks,
                NegativeMarking:this.state.testData_set.negativeMarkPerWrongQustion,
                answerArr:this.state.answerArr,
                PositiveMarking:this.state.testData_set.PositiveMarkPerRightQustion,
                CorrectanswerArr:this.state.testData_set.CorrectanswerArr,                
            });
            // alert("");
            ToastAndroid.show("Time UP!!! Auto-submiting...",ToastAndroid.LONG);
            return;
        }
        if(ss==0){
            ss = 59;
            mm-=1;
        }
        if(mm==0 && ss ==0){
            mm = 59;
            hh-=1;
        }
        console.log(hh+":"+mm+":"+ss);
        ss-=1;
        // adding 0
        if(ss<10){
            strss = "0"+ss;
        }else{
            strss = String(ss);
        }

        if(mm<10){
            strmm = "0"+mm;
        }else{
            strmm = String(mm);
        }

        if(hh<10){
            strhh = "0"+hh;
        }else{
            strhh = String(hh);
        }

        timer = strhh+":"+strmm+":"+strss;
        this.setState({
            timer:timer
        });
        
        console.log(timer);
        
    }
    componentDidMount() {
        setTimeout(() => {this.loadQuestion(); this.setState({renderCoponentFlag: true})}, 0);
        timerInterval = setInterval(this.timerController, 1000);
        
    }
    loadQuestion = async () =>{
        testData_set = {
            testName:'IMO Mock',
            fullMarks:'20',
            noOfQuestion:'5',
            duration:'00:01:30',
            testType:'GK',
            negativeMarkPerWrongQustion:'1',
            PositiveMarkPerRightQustion:'4',
            CorrectanswerArr:['1.','1.','1.','1.','1.'],
            question_set:[
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
        };
        
        var testID = this.props.navigation.getParam('testID', 0);
        console.log("testid:",testID);
        if(testID == 2){
            testData_set = {
                testName:'NSO Mock',
                fullMarks:'20',
                noOfQuestion:'5',
                duration:'00:01:00',
                testType:'GK',
                negativeMarkPerWrongQustion:'1',
                PositiveMarkPerRightQustion:'4',
                CorrectanswerArr:['2.','2.','2.','2.','2.'],
                question_set:[
                    [
                        {optionNO:'Q',content:'Brass gets discoloured in air because of the presence of which of the following gases in air?',type:'text'},
                        {optionNO:'1.',content:'Oxygen',type:'text'},
                        {optionNO:'2.',content:'Hydrogen sulphide',type:'text'},
                        {optionNO:'3.',content:'Carbon dioxide',type:'text'},
                        {optionNO:'4.',content:'Nitrogen',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Which of the following is a non metal that remains liquid at room temperature?',type:'text'},
                        {optionNO:'1.',content:'Phosphorous',type:'text'},
                        {optionNO:'2.',content:'Bromine',type:'text'},
                        {optionNO:'3.',content:'Chlorine',type:'text'},
                        {optionNO:'4.',content:'Helium',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Chlorophyll is a naturally occurring chelate compound in which central metal is',type:'text'},
                        {optionNO:'1.',content:'copper',type:'text'},
                        {optionNO:'2.',content:'magnesium',type:'text'},
                        {optionNO:'3.',content:'iron',type:'text'},
                        {optionNO:'4.',content:'calcium',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Which of the following is used in pencils?',type:'text'},
                        {optionNO:'1.',content:'Graphite',type:'text'},
                        {optionNO:'2.',content:'Silicon',type:'text'},
                        {optionNO:'3.',content:'Charcoal',type:'text'},
                        {optionNO:'4.',content:'Phosphorous',type:'text'},
                    ],
                    [
                        {optionNO:'Q',content:'Which of the following metals forms an amalgam with other metals?',type:'text'},
                        {optionNO:'1.',content:'Tin',type:'text'},
                        {optionNO:'2.',content:'Mercury',type:'text'},
                        {optionNO:'3.',content:'Lead',type:'text'},
                        {optionNO:'4.',content:'Zinc',type:'text'},
                    ],
                ]
            };
        }
        answerArr = new Array(testData_set.question_set.length).fill(0);
        this.setState({
            testData_set:testData_set,
            answerArr:answerArr,
            timer:testData_set.duration,
        })
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
            if(question_active_no == this.state.testData_set.question_set.length-1){
                ToastAndroid.show("This is Last Question",ToastAndroid.LONG);
                return;
            }
            this.setState({
                question_active_no: question_active_no + 1
            });
        }
    }
    selectAnswer = (question_active_no,optionNO) => {
        this.changeQuestion("next");
        answerArr = this.state.answerArr;        
        console.log("question no :",question_active_no);
        console.log("option seletedg",optionNO);
        console.log(answerArr);
        answerArr[question_active_no] = optionNO;
        this.setState({
            answerArr:answerArr,
            selectedCicked:true
        });
        console.log(answerArr);
    }
    render() {
        console.log("redngin start");
        var items = this.state.testData_set.question_set[this.state.question_active_no];
        const {renderCoponentFlag} = this.state;
        // console.log(height);
        // console.log(width);
        if(renderCoponentFlag){
            return(
                <Container>
                    {/* <Header/> */}
                    <View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{height:height-120,backgroundColor:'#fafafa'}}>
                                <Card>
                                    <CardItem>
                                        <Icon name="timer" style={{fontSize:20}}/><Text >{this.state.timer}</Text>
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
                                                                <TouchableOpacity onPress={()=>{this.selectAnswer(this.state.question_active_no,item.optionNO)} }>
                                                                     <Text>{item.optionNO} {item.content} 
                                                                     {console.log("htis is under render",this.state.answerArr[this.state.question_active_no],item.optionNO)}
                                                                     {
                                                                         
                                                                         (this.state.answerArr[this.state.question_active_no] == item.optionNO) && this.state.selectedCicked?
                                                                         <Icon name="checkbox-marked-circle-outline"  style={{fontSize:25,color:"#04c94d"}}/>:
                                                                         <Icon name="checkbox-marked-circle-outline"  style={{fontSize:0,color:"#04c94d"}}/>
                                                                         
                                                                     }
                                                                     </Text>
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
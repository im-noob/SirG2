import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
    ScrollView
} from "react-native";
import { Container, Spinner, Button, Text,Content,Card,CardItem,Body,List,ListItem} from 'native-base';
// import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
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
        const { navigation } = this.props;
        console.log(navigation);
        const TestName = navigation.getParam('TestName', 'TestName');
        const NoOfQuestion = navigation.getParam('NoOfQuestion', 'NoOfQuestion');
        const TestType = navigation.getParam('TestType', 'TestType');
        const Duration = navigation.getParam('Duration', 'Duration');
        const FullMarks = navigation.getParam('FullMarks', 'FullMarks');
        const NegativeMarking = navigation.getParam('NegativeMarking', 'NegativeMarking');
        const PositiveMarking = navigation.getParam('PositiveMarking', 'PositiveMarking');
        const answerArr = navigation.getParam('answerArr', []);
        const CorrectanswerArr = navigation.getParam('CorrectanswerArr', []);
        // console.log();
        // calculating
        var AttemptQuestion = 0 ;
        var CorrectQuestion = 0 ;
        var WrongQuestion = 0 ; 
        var MarksObtained = 0 ;
        for(var i = 0 ; i < answerArr.length ; i ++){
            if(answerArr[i] != 0 )
                AttemptQuestion++;
            if(answerArr[i] == CorrectQuestion[i])
                CorrectQuestion++;
        }
        WrongQuestion = AttemptQuestion - CorrectQuestion;
        console.log(CorrectQuestion,WrongQuestion);
        MarksObtained = CorrectQuestion * PositiveMarking - WrongQuestion*NegativeMarking;
        var {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <Content style={{marginHorizontal:10}}>
                    {/* <ScrollView style={{padding:10}}> */}
                        <Card padder style={{padding:10,margin:10}}>
                            <CardItem header bordered>
                            <Text>Score Card</Text>
                            </CardItem>
                            <CardItem bordered>
                            <Body>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Test Name : </Text><Text>{TestName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>No of question : </Text><Text>{NoOfQuestion}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Test Type : </Text><Text>{TestType}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Duration : </Text><Text>{Duration}</Text>                            
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Full Marks : </Text><Text>{FullMarks}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>negative Marking: </Text><Text>{NegativeMarking} per Wrong Question</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>PositiveMarking : </Text><Text>{PositiveMarking} per right Question</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Attemept Question : </Text><Text>{AttemptQuestion}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Corrent Question : </Text><Text>{CorrectQuestion}</Text>
                                </View>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Wrong Queston : </Text><Text>{WrongQuestion}</Text>
                                </View>
                                
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{fontWeight:'800'}}>Marks Obtained : </Text><Text>{MarksObtained}</Text>                             
                                </View>
                            </Body>
                            </CardItem>
                            <CardItem footer bordered>
                            <Text>Best Wishes for your next Exam!!!</Text>
                            </CardItem>
                        </Card>
                        <Button bordered dark onPress={()=>{ this.props.navigation.navigate('Home');}}>
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
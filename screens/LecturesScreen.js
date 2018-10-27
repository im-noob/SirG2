import React, { Component } from "react";
import { 
    View,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";

import { Container, ListItem,Button,Separator,List, Spinner, Text, Content, Card, CardItem,  } from 'native-base';

export default class LecturesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
            lession:'English',
            date:'1',
            teacher:'Select the Lecture From the list',
            selected:'1',
            data:[{'id':'1','l_name':'English','teacher':'Randhari Singh','Time':'09:00-11:00','date':'5 Nov',exercise:'Read Lession 5',homework:'Write a notes on Postman'},
            {'id':'2','l_name':'History','teacher':'Randhari Singh Raghav','Time':'10:00-11:00','date':'5 Nov',exercise:'Do exercise 5',homework:'Write a leave application to the principle  '},
            {'id':'3','l_name':'Mathematics','teacher':'Deepak Rohani','Time':'11:00-12:00','date':'5 Nov',exercise:'Read Lession 6',homework:'Complete Exercise 4.6'},
            {'id':'4','l_name':'Physics','teacher':'Madhav Bhagat','Time':'12:00-01:00','date':'5 Nov',exercise:'Do exercise 6 All question',homework:'No homework'},
            {'id':'5','l_name':'Geography','teacher':'Pramila Roshani','Time':'01:00-02:00','date':'5 Nov',exercise:'Read Lession 7',homework:'Study Leave'}],
        }
    }
    selectItem(item){
        console.log(item.id);
        this.setState({selected:item.id});
        this.setState({date:item.date});
        this.setState({teacher:item.teacher});
        this.setState({lession:item.l_name});
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }

    render() {
        console.log('Selected : ',this.state.selected)
        showItem = (item) =>{
            //console.log(item);
            //console.log((this.state.selected == item.id));
            return(
                    
                
                    
                        <Button  dark onPress={() => this.selectItem(item)} style={{ margin:2 }}><Text>{item.l_name}</Text><Text> {item.Time}</Text></Button>
                            
                  
            );
        }

        showValue = (data) =>{
            console.log(data);
            return(
                <TouchableOpacity>
                    <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
                        <Text style={styles.Text}>{data.l_name}</Text>
                    </View>
                </TouchableOpacity>
                );
        }

        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <Content padder>
                        <ScrollView
                        >   
                            <FlatList 
                                data = {this.state.data}
                                renderItem={({item}) =>showItem(item)}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            >
                            </FlatList>
                            <Card>
                            <CardItem>
                                <Text>scroll horizontally for more lecture ---></Text>
                            </CardItem>
                        </Card>
                        </ScrollView>
                        <Card >
                            <CardItem header bordered style={{height:20}}>
                                <Text style={{textAlign:'center',color:'#0a60ff'}}>Teacher</Text>
                            </CardItem>
                            <CardItem>
                                <Text>{this.state.teacher}</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered style={{height:20}}>
                                <Text style={{textAlign:'center',color:'#0a60ff'}}>Remarks</Text>
                            </CardItem>
                            <CardItem>
                                <Text >No Remarks</Text>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header bordered style={{backgroundColor:'#5d5e5e',height:20}}>
                                <Text style={{textAlign:'center',color:'white'}}>Dairy</Text>
                            </CardItem>
                            <List>
                                <Separator bordered>
                                    <Text>Lession</Text>
                                </Separator>
                                <ListItem >
                                <Text> ({this.state.exercise})</Text>
                                </ListItem>
                                <Separator bordered>
                                    <Text>Homework</Text>
                                </Separator>
                                <ListItem>
                                <Text>({this.state.homework})</Text>
                                </ListItem>
                            </List>
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
    },
    Text:{
        textAlign:'center',
        fontSize:20,
    },
    vertical:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
    },
    tab:{
        margin:2,
        padding:5,
        borderColor:'black',
        borderWidth:1,
    },
    myStyle: {
        padding:0,
        transform: [{ rotate: '90deg'}],
    },
    Top1:{
        height:'15%',
        margin:1
    },
    Bottom:{
        margin:10,
        height:'85%'
    }
});
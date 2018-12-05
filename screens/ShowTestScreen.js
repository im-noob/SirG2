import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity
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
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }

    render() {
        var items = [
            {optionNO:'Q',content:'Grand Central Terminal, Park Avenue, New York is the world\'s',type:'text'},
            {optionNO:'1.',content:'largest railway station',type:'text'},
            {optionNO:'2.',content:'highest railway station',type:'text'},
            {optionNO:'3.',content:'longest railway station',type:'text'},
            {optionNO:'4.',content:'None of the above',type:'text'},
          ];
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
                                            <Left><Text> Q. 1</Text></Left>
                                            <Right style={{flexDirection: 'row'}}>
                                                <Radio selected={false} />
                                                <Text style={{alignSelf:'flex-end'}}> Review Later</Text>
                                            </Right>
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
                                    <TouchableOpacity style={{backgroundColor:'#000',flex:1,alignContent:'center',alignSelf:'center',alignItems:'center'}}>
                                        <Text style={{paddingVertical: 5,fontSize:25,color:'white',alignSelf:'center',alignItems:'center',alignContent:'center'}}><Icon name="less-than" style={{fontSize:30}}/> PREV</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:'#0a60ff',flex:1,alignContent:'center',alignSelf:'center',alignItems:'center'}}>
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
import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    ScrollView,
    View,
    Dimensions
} from "react-native";
import {Body, Container, Spinner, Button,Header, Text,Content,Card,CardItem, Right,List,ListItem, Left,Radio} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const {WINDOW_HEIGHT,WINDOW_WIDTH} = Dimensions.get('window');
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
            'Simon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon Mignolet',
            'Nathaniel ClynSimon MignoletSimon MignoletSimon MignoletSimon Mignolete',
            'Dejan LovrenSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon Mignolet',
            'Mama SakhoSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon MignoletSimon Mignolet',
            'Emre Can'
          ];
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <Header/>
                    <View>
                        <View style={{}}>
                        {/* //flex: 1, backgroundColor: '#F5FCFF',justifyContent:'space-between' */}
                            <View style={{}}>
                            {/* //flex:1 */}
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
                                                            <Text>{item}</Text> 
                                                        </ListItem>
                                                    </View>
                                                    }>
                                                </List>
                                            </ScrollView>
                                        </CardItem>
                                    </Card>
                                </ScrollView>
                            </View>
                            <View style={{height: 100}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{flex:1,backgroundColor:'#879f99'}}> Q. 1</Text>
                                    <Text style={{flex:1,backgroundColor:'#5a9f92'}}> Q. 1</Text>
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
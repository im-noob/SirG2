import React, { Component } from "react";
import { 
    View,
    FlatList,
    StyleSheet,
} from "react-native";
import { Container, ListItem,Spinner,Tab, Tabs,List, TabHeading, Left, Right, Text, Content, Card, CardItem,  } from 'native-base';

export default class GradeScreen extends Component {
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
                    <Content >
                        <Tabs>
                            <Tab heading={ <TabHeading><Text>English</Text></TabHeading>}>
                                <Tab1 id={'1'} subjectName={'English'}/>
                            </Tab>
                            <Tab heading={ <TabHeading><Text>Physics</Text></TabHeading>}>
                                <Tab1 id={'5'} subjectName={'Physics'}/>
                            </Tab>
                            <Tab heading={ <TabHeading><Text>Mathematics</Text></TabHeading>}>
                                <Tab1 id={'2'} subjectName={'Mathematics'}/>
                            </Tab>
                            <Tab heading={ <TabHeading><Text>History</Text></TabHeading>}>
                                <Tab1 id={'4'} subjectName={'History'}/>
                            </Tab>
                        </Tabs>
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
class Tab1 extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            renderCoponentFlagForTab1: false,
            subject:this.props.id,
            record:[
            {'H_id':'1','id':'1','l_name':'2 Jun','Time':'11/20'},
            {'H_id':'2','id':'1','l_name':'6 Jun','Time':'12/20'},
            {'H_id':'3','id':'2','l_name':'8 Jun','Time':'15/20'},
            {'H_id':'4','id':'3','l_name':'16 Jun','Time':'16/20'},
            {'H_id':'5','id':'4','l_name':'17 Jun','Time':'17/20'},
            {'H_id':'6','id':'5','l_name':'1 Jun','Time':'15/20'},
            {'H_id':'7','id':'5','l_name':'1 Jun','Time':'17/20'},
            {'H_id':'8','id':'1','l_name':'18 Jun','Time':'5/20'},
            {'H_id':'9','id':'1','l_name':'10 Jun','Time':'10/20'},
            {'H_id':'10','id':'2','l_name':'12 Jun','Time':'11/20'},
            {'H_id':'11','id':'3','l_name':'13 Jun','Time':'18/20'},
            {'H_id':'12','id':'4','l_name':'1 Jun','Time':'13/20'},
            {'H_id':'13','id':'5','l_name':'1 may','Time':'15/20'},
            {'H_id':'14','id':'5','l_name':'2 may','Time':'12/20'},
        ],
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlagForTab1: true})}, 0);
    }
    
    render(){
        const {renderCoponentFlagForTab1} = this.state;
        const items = this.state.record.filter(value => {      
            const itemData = `${value.id.toUpperCase()}`;
             const textData = this.state.subject.toUpperCase();
             return itemData.indexOf(textData) > -1;    
        });
    
        
        viewData =(item) =>{
            return(
                <CardItem bordered>
                    <Left>
                        <Text>{item.l_name}</Text>    
                    </Left>
                    <Right>
                        <Text>{item.Time}</Text>
                    </Right>
                </CardItem>
            );
        }
        if(renderCoponentFlagForTab1){
            return(
                <Container>
                    <Content >
                        <Card>
                            <CardItem header bordered style={{backgroundColor:'#61c0d8',height:20}}>
                                    <Text style={{textAlign:'center'}}>Practical</Text>
                            </CardItem>
                            <FlatList 
                                    data = {items}
                                    renderItem={({item}) =>viewData(item)}
                                    keyExtractor={item => item.H_id}
                                >
                            </FlatList>   
                        </Card>
                    </Content>
                    <Content style={{marginTop:4}}>
                        <Tabs>
                            <Tab  heading={ <TabHeading><Text>min 10.0/100.0</Text></TabHeading>}>
                                <Tab2 />
                            </Tab>
                            <Tab  heading={ <TabHeading><Text>max 20.0/100.0</Text></TabHeading>}>
                                <Tab2 />
                            </Tab>
                        </Tabs>
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

class Tab2 extends React.Component{
    render(){
        var data = [
            '1st January         17/20',
            '2st January         15/20',
            '4st January         10/20',
          ];
        return(
            <Container>
            <Content >
                <List dataArray={data}
                    renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                    }>
                </List>
            </Content>
            </Container>
        );
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
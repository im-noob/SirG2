import React, { Component } from "react";
import {
    StyleSheet,
    ToastAndroid ,
    View,
    Linking
} from "react-native";
import { Container, Content, List, ListItem, Button, Label, Accordion,Text , Card,Header,Form,Item,Spinner,CheckBox,Left,Right,Body } from 'native-base'
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NotesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }

    // rendiring books
    _renderContent(content) {
        
        console.log("rader prob");
        console.log(content.content);
        return (
            <List dataArray={content.content}
                renderRow={(item) =>
                    <ListItem avatar>
                        <Left>
                            <Icon active name="file-pdf" style={{fontSize:35,color:'#b50706'}}/>
                        </Left>
                        <Body>
                            <Text>{item.title}</Text>
                            <Text note>{item.content}</Text>
                            <Text note style={{color:'blue'}}>{item.date}</Text>

                        </Body>
                        <Right>
                            <Button iconLeft bordered primary onPress={()=>{Linking.openURL(item.url); ToastAndroid.show('Download will start Automatically !', ToastAndroid.LONG);}}>
                                <Icon name='download' style={{color:'#1167ea', fontSize:35}}/>
                            </Button>
                        </Right>
                    </ListItem>
                }>
            </List>
        );
    }
    render() {
        const {renderCoponentFlag} = this.state;
          
        const dataArray = [
            { title: "English Books", content: [
                    {title:'Grammar-Ebook-Level-2',content:'Start your English journey with 2.0',date:'10 Dec 2018 10:35 AM',url:"http://www.espressoenglish.net/wp-content/uploads/2012/07/Free-Grammar-Ebook-Level-2.pdf"},
                    {title:'Spoken-english-laerning-quikly',content:'Pro Level English for you',date:'2 Dec 2018 2:35 AM',url:"https://saidnazulfiqar.files.wordpress.com/2008/04/spoken-english-laerning-quikly.pdf"},
                    {title:'Learn_English_Now',content:'Comman Mistakes you made in English.',date:'28 Nov 2018 11:24 AM',url:"https://www.lds.org/bc/content/ldsorg/seminary-institute/education/Pilot_Learn_English_Now_Eng.pdf"},            
                ] 
            },
            { title: "Motivational Books", content: [
                    {title:'The-31-Best-Motivational-Books-Ever-Written',content:'What motivation is?',date:'13 Dec 2018 10:35 AM',url:"http://fourminutebooks.com/wp-content/uploads/2016/06/Four-Minute-Books-The-31-Best-Motivational-Books-Ever-Written.pdf"},
                    {title:'The-success-principles',content:'Motivational Kick-start with saurav sir.',date:'1 Dec 2018 2:35 AM',url:"http://jackcanfield.com/images/stories/the-success-principles-2-chapters.pdf"},
                    {title:'100-ways-to-motivate-yourself',content:'How to become a good speeker.',date:'24 Nov 2018 11:24 AM',url:"http://mindguruindia.com/wp-content/uploads/2014/06/MP018_100-ways-to-motivate-yourself.pdf"},
                    {title:'little-book-of-big-motivational-quotes',content:'What about your Goal.',date:'22 Nov 2018 2:38 PM',url:"https://sidsavara.com/wp-content/uploads/2009/09/-sidsavara-com.pdf"},
            
                ] 
            },
            
        ];
        if(renderCoponentFlag){
            return(
                <Container>
                    <Content>
                        {/* Notes List:start */}
                        <List>
                            <ListItem itemDivider>
                                <Text>Pick type of book you want...</Text>
                            </ListItem>                    
                            <Accordion
                                dataArray={dataArray}
                                renderContent={this._renderContent}
                                expanded={1}
                            />
                        </List>
                        {/* Notes List:end */}
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
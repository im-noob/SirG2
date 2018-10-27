import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner,List,ListItem, Text,Content,Left,Right,Body} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NoticeScreen extends Component {
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
        // Data
        var items = [
            {title:'Class Suspend',content:'All classes will remain suspended due to heavy Rain',date:'10 Dec 2018 10:35 AM'},
            {title:'Parent\'s Metting',content:'We are going to organize a metting for parents tomorrow.',date:'2 Dec 2018 2:35 AM'},
            {title:'Due Fee',content:'Your fee is due (2000) please cleaar your dues.',date:'28 Nov 2018 11:24 AM'},
            {title:'Happy Durga Puja',content:'Our Team wishing you Happy Durga puja and Dashahra.',date:'25 Nov 2018 2:38 PM'},
          ];
        if(renderCoponentFlag){
            return(
                <Container>
                    <Content>
                        <List dataArray={items}
                            renderRow={(item) =>
                                <ListItem avatar>
                                    <Left>
                                        <Icon active name="bell-outline" style={{fontSize:65,backgroundColor:'#e45744',color:'white',borderRadius:5}}/>
                                    </Left>
                                    <Body>
                                        <Text>{item.title}</Text>
                                        <Text note>{item.content}</Text>
                                        <Text note style={{color:'#3679e5'}}>{item.date}</Text>

                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
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
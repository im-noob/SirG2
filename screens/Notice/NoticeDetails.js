import React, { Component } from "react";
import { 
    View,
   
    StyleSheet,
} from "react-native";
import { Container, Header, Content,Title,Subtitle, List, ListItem, Thumbnail, Text, Left, Body,Right, Button } from 'native-base';
 

export default class NoticeDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{key:'A',title:'Schoole Holiday till 450',dis:'Holiday lkjljasdlfl jafodshhfio ajlkds ijhanf a inafhihanfk njainak ji anajjp due to kthi is jf jjsajjf ak ',date:'4-12-2018'}

        }
    }

    render(){
        return( <Container>
             <Header>
                
                <Body>
                    <Title>{this.state.data.title}</Title>
                    <Subtitle>{this.state.data.date}</Subtitle>
                </Body>
               
                </Header>
            <Content>
             
                 
                  <Body>
                    <Text>{this.state.data.dis}</Text>
                   
                  </Body>
                 
               
            </Content>
          </Container>)
    }
}
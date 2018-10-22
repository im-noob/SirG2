import React, { Component } from "react";
import { 
    View,
    AsyncStorage,
    StyleSheet,
    FlatList, 

} from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body,Right, Button } from 'native-base';
 

export default class NoticeList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{key:'A',title:'Schoole Holiday till 450',dis:'Holiday lkjljasdlfl jafodshhfio ajlkds ijhanf a inafhihanfk njainak ji anajjp due to kthi is jf jjsajjf ak ',date:'4-12-2018'}
                ,{key:'B',title:'Scholl',dis:'jdafask',date:'7-09-2018'}],
            process:false,
        }
    }
    
                    

    _renderItems =({item})=>{
        return(
              <List>
                <ListItem thumbnail>
                 <Left>
                     <Text>{item.date}</Text>
                 </Left>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.dis}</Text>
                  </Body>
                  <Right>
                    <Button onPress={()=>{this._storeData(item.key)}} transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
          );
    }

    _storeData =async(value)=>{
        AsyncStorage.setItem('selectNotice',value);
        this.props.navigation.navigate('NoticeDetails')
    }

    render(){
        return(<View>

                     <FlatList 
                        data={this.state.data}
                        renderItem={this._renderItems}
                        ItemSeparatorComponent={()=>{return(<View style={{borderRadius:5,borderColor:'#012160'}}><Text></Text></View>)}}
                        ListEmptyComponent={()=>{
                        if(this.state.process)
                        return(<View style={{justifyContent:'center'}}>
                                <ActivityIndicator size="large" color="#0000ff" />
                                <Text>Wait List is Loading.....</Text>

                            </View>);
                        else
                        return(<View style={{justifyContent:'center'}}>
                                <Text>List is empty or Connection problem......</Text>

                                </View>)}}
                    
                    
                    />
                    
                </View>)
    }
}
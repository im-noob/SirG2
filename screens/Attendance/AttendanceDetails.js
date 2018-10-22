import React, { Component } from "react";
import { 
    View,
   FlatList,
    StyleSheet,
    Button,
    ActivityIndicator,
} from "react-native";
import { Container, Header,CheckBox, Content,Title,Subtitle, List, ListItem, Thumbnail, Text, Left, Body,Right, } from 'native-base';

 
export default class AttendanceDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{key:'A',title:'Batch A',dis:'Batch time :12:00 ',date:'Batch Time : 12:00 '},
            studentData:[{key:'A',name:'Nishant kumar'},{key:'B',name:'Aarav kumar'},{key:'C',name:'Beeru kumar'}],
            process:false,
        }
    }

    
    _renderItems =({item})=>{
        return(
              <View style={{flexDirection:'row',height:30,justifyContent:'space-between',flex:1,paddingHorizontal:10}}>
                
                 <View>
                     <Text>{item.key}</Text>
                 </View>
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={{paddingRight:10}}>
                    <CheckBox checked={false} color="green"/>  
                  </View>
               
              </View>
          );
    }

    render(){
        return( <View style={{flex:1}}>
             <Header>
                
                <Body>
                    <Title>{this.state.data.title}</Title>
                    <Subtitle>{this.state.data.date}</Subtitle>
                </Body>
               
                </Header>
            
             
                 
                 
                    <Text>{this.state.data.dis}</Text>
                      
                    <FlatList 
                    data={this.state.studentData}
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
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Button title=" Submit " onPress={()=>{}}/>
                    <Button title=" Reset " onPress={()=>{}}/>
                    <Button title=" Cancel " onPress={()=>{}}/>
                  
                    </View>
                 
                
               
            
          </View>)
    }
}
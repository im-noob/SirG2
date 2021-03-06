import React, { Component } from "react";
import { StyleSheet, View, Dimensions ,Image,Linking} from 'react-native';
import {Content, Card, CardItem, Grid, Text, Button, Spinner, Body, Right ,Container, List,ListItem} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');
export default class ShowBookDetails extends Component {
    static navigationOptions={
        header:null,
    }
    constructor(props){

      super(props);
      this.state = {
        renderCoponentFlag:false,
      }
      
    }
    componentDidMount() {
      setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    render() {
    const {renderCoponentFlag} = this.state;

    const { navigation } = this.props;
    const key = navigation.getParam('key', 'key');
    const rating = navigation.getParam('rating', 'rating');
    const real_price = navigation.getParam('real_price', 'real_price');
    const offer_price = navigation.getParam('offer_price', 'offer_price');
    const reviews_count = navigation.getParam('reviews_count', 'reviews_count');
    const title = navigation.getParam('title', 'title');
    const image = navigation.getParam('image', 'image');
    const rating_count = navigation.getParam('rating_count', 'rating_count');
    const rate_5 = navigation.getParam('rate_5', 'rate_5');
    const rate_4 = navigation.getParam('rate_4', 'rate_4');
    const rate_3 = navigation.getParam('rate_3', 'rate_3');
    const rate_2 = navigation.getParam('rate_2', 'rate_2');
    const rate_1 = navigation.getParam('rate_1', 'rate_1');
    const Author = navigation.getParam('Author', 'Author');
    const Description = navigation.getParam('Description', 'Description');;
    var details = navigation.getParam('details', 'details');;
    if(renderCoponentFlag){
        return (
          <Container>
              <Content>
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Body>
                      <Image source={{uri: image}} style={{height: height*(1/2), width: (height*(1/2) )*(330/499), flex: 1,alignSelf:'center'}}/>
                    </Body>
                  </CardItem>
                  <Text style={{paddingHorizontal:15,marginVertical:2,fontWeight:'500',fontSize:19}}>{title}</Text>
                  
                  <Grid style={{paddingHorizontal:8,marginVertical:2,flexDirection:'row'}}>
                    <Text style={{fontWeight:'700',fontSize:29,}}><Icon name="currency-inr" size={29}/>{offer_price}</Text>
                    <Text style={{paddingHorizontal:8,marginTop:10 ,color:'#8b8b8b',fontSize:19,textDecorationLine: 'line-through'}}>{real_price}</Text>
                    <Text style={{paddingHorizontal:8,marginTop:10 ,color:'#4bb550',fontSize:19}}>{parseInt(((real_price-offer_price)*100)/real_price)}% off</Text>
                  </Grid>
                  <Grid style={{paddingHorizontal:15,marginVertical:4,flexDirection:'row'}}>
                    <Text style={{fontWeight:'500',fontSize:19,backgroundColor:'#26a541',color:'white',borderRadius:5,paddingHorizontal:5}}>{rating}<Icon name="star" size={15}/></Text>
                    <Text style={{paddingHorizontal:4 ,color:'#8b8b8b',fontSize:19,}}>({reviews_count}) reviews</Text>
                    <Right>
                      <Text style={{paddingHorizontal:4 ,color:'#4bb550',fontSize:29,}}><Icon name="checkbox-marked-circle-outline" style={{color:'#26a541'}} size={25}/></Text>
                    </Right>
                  </Grid>
                  <Button full dark button onPress={() => {Linking.openURL('https://razorpay.com/demo/');}}>
                    <Text>Buy Now</Text>
                  </Button>  
                </Card>


                  {/* Deatails section:start  */}
                  <Card style={{flex: 0}}>
                    <CardItem style={{borderBottomColor:'#d2d1d1',borderBottomWidth:1}}>
                        <Body>
                          <Text style={{fontSize:20,fontWeight:'600'}}>Details</Text>
                        </Body>
                    </CardItem>

                    {/* Author */}
                    <CardItem>
                      <Body style={{flexDirection:'row'}}>
                        <Text style={{fontSize:17,fontWeight:'500'}}>Author: </Text>
                        <Text style={{color:'#2874ed',fontWeight:'500'}}>{Author}</Text>
                      </Body>
                    </CardItem>
                    {/* Author section:end */}

                    {/* highlights */}
                    <CardItem>
                      <Body>
                        <Text style={{fontSize:17,fontWeight:'500'}}>
                          Highlights
                        </Text>
                        <List dataArray={details}
                          renderRow={(items) =>
                            <ListItem>
                              <Text style={{fontSize:15, fontWeight:'400'}}>
                                  <Icon name="arrow-right-bold" style={{alignItems:'center'}} size={15}/>{items.item}: {items.value}
                              </Text>
                            </ListItem>
                          }>  
                      </List>
                      </Body>
                    </CardItem>
                    {/* highlights section end */}

                    {/* Description:section  */}
                    <CardItem>
                      <Body>
                        <Text style={{fontSize:17,fontWeight:'500'}}>
                          Highlights
                        </Text>
                        <ListItem>
                            <Text style={{fontSize:15, fontWeight:'400'}}>
                                <Icon name="arrow-right-bold" style={{alignItems:'center'}} size={15}/>{Description}
                            </Text>
                        </ListItem>
                      </Body>
                    </CardItem>
                    {/* Description section:end */}
                  </Card>
                  {/* details section:end */}

                  {/* ratting and reviews section  */}
                  <Card style={{flex: 0}}>
                    <CardItem style={{borderBottomColor:'#d2d1d1',borderBottomWidth:1}}>
                        <Body>
                          <Text style={{fontSize:20,fontWeight:'600'}}>Ratings & Reviews</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{flexDirection:'row'}}>
                      <View style={{flexDirection:'column',borderRightColor:'#d2d1d1',borderRightWidth:1,flex:0.4}}>
                          <Text style={{fontSize:35,alignSelf:'center'}}>{rating}<Icon name="star" size={35}/></Text>
                          <Text style={{color:'#919394',alignSelf:'center',fontSize:12}}>{rating_count} rating and</Text>
                          <Text style={{color:'#919394',alignSelf:'center',fontSize:12}}>{reviews_count} reviews</Text>
                      </View>
                      <View style={{flexDirection:'column',flex:0.6}}>
                          <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text>5</Text>
                              <Icon name='star' size={20}/>
                              <View style={{flexDirection:'row'}}>
                                  <View style={{backgroundColor: '#26a541', width:100, height: 10,alignSelf:'center',borderRadius:5 }} />
                                  <View style={{backgroundColor: '#e4e4e4',  width:0, height: 10, alignSelf:'center',borderRadius:5 }} />    
                              </View>
                            <Right><Text>  {rate_5}</Text></Right>
                            
                          </View>
                          <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text>4</Text>
                              <Icon name='star' size={20}/>
                              <View style={{flexDirection:'row'}}>
                                  <View style={{backgroundColor: '#26a541', width:45, height: 10,alignSelf:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} />
                                  <View style={{backgroundColor: '#e4e4e4',  width:55, height: 10, alignSelf:'center',borderTopRightRadius:5,borderBottomRightRadius:5 }} />    
                              </View>
                              <Right><Text>  {rate_4}</Text></Right>
                            
                          </View><View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text>3</Text>
                              <Icon name='star' size={20}/>
                              <View style={{flexDirection:'row'}}>
                                  <View style={{backgroundColor: '#26a541', width:20, height: 10,alignSelf:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} />
                                  <View style={{backgroundColor: '#e4e4e4',  width:80, height: 10, alignSelf:'center',borderTopRightRadius:5,borderBottomRightRadius:5 }} />    
                              </View>
                              <Right><Text>  {rate_3}</Text></Right>
                            
                          </View><View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text>2</Text>
                              <Icon name='star' size={20}/>
                              <View style={{flexDirection:'row'}}>
                                  <View style={{backgroundColor: '#ff9f00', width:8, height: 10,alignSelf:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} />
                                  <View style={{backgroundColor: '#e4e4e4',  width:92, height: 10, alignSelf:'center',borderTopRightRadius:5,borderBottomRightRadius:5 }} />    
                              </View>
                              <Right><Text>  {rate_2}</Text></Right>
                            
                          </View><View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text>1</Text>
                              <Icon name='star' size={20}/>
                              <View style={{flexDirection:'row'}}>
                                  <View style={{backgroundColor: '#ff4343', width:12, height: 10,alignSelf:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} />
                                  <View style={{backgroundColor: '#e4e4e4',  width:90, height: 10, alignSelf:'center',borderTopRightRadius:5,borderBottomRightRadius:5 }} />    
                              </View>
                              <Right><Text>  {rate_1}</Text></Right>
                            
                          </View>
                      </View>
                    </CardItem>
                  </Card>
                  {/* ratting and review section:end */}
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
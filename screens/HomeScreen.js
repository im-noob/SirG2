import React, { Component } from "react";
import { StyleSheet, View, FlatList, Dimensions ,Image,Linking} from 'react-native';
import { Col, Row, Content, Card, CardItem, Grid, Text, Button, Left, Body, Right } from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import ShowBookDetails from "./ShowBookDetails";

// const data = [
//                 { key: 'A' ,rating:'3.5', real_price:'150', offer_price:'70',  reviews_count:'3,151', title:'Think and Grow Rich', image:'https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg' }, 
//                 { key: 'B' ,rating:'4.0', real_price:'199', offer_price:'129', reviews_count:'235',   title:'The Girl in Room 105', image:'https://images-na.ssl-images-amazon.com/images/I/417NSfZZIWL._SX328_BO1,204,203,200_.jpg' }, 
//                 { key: 'C' ,rating:'3.5', real_price:'499', offer_price:'298', reviews_count:'834',   title:'The Subtle Art of N..', image:'https://images-na.ssl-images-amazon.com/images/I/51r9XYcHP%2BL._SX331_BO1,204,203,200_.jpg' }, 
//                 { key: 'D' ,rating:'4.0', real_price:'30',  offer_price:'18',  reviews_count:'311',   title:'General Knowledge ..', image:'https://images-na.ssl-images-amazon.com/images/I/41Cme4Z%2B8cL._SX316_BO1,204,203,200_.jpg' }, 
//                 { key: 'E' ,rating:'4.5', real_price:'299', offer_price:'155', reviews_count:'1028',  title:'Inner Engineering: ..', image:'https://images-na.ssl-images-amazon.com/images/I/51tEI%2BnAhdL._SX310_BO1,204,203,200_.jpg' }, 
//                 { key: 'F' ,rating:'5.0', real_price:'250', offer_price:'158', reviews_count:'166',   title:'Life\'s Amazing Secr..', image:'https://images-na.ssl-images-amazon.com/images/I/410oZGDHQgL._SX324_BO1,204,203,200_.jpg' }, 
//                 { key: 'G' ,rating:'4.8', real_price:'199', offer_price:'123', reviews_count:'219',   title:'The Perfect Us', image:'https://images-na.ssl-images-amazon.com/images/I/41ch88E5cCL._SX324_BO1,204,203,200_.jpg' }, 
//                 { key: 'H' ,rating:'4.0', real_price:'245', offer_price:'184', reviews_count:'259',   title:'The Art of War', image:'https://images-na.ssl-images-amazon.com/images/I/51WVsB5j8CL._SX302_BO1,204,203,200_.jpg' }, 
//                 { key: 'I' ,rating:'4.0', real_price:'199', offer_price:'149', reviews_count:'5',     title:'Self-Help', image:'https://images-na.ssl-images-amazon.com/images/I/51k7d7w7ybL._SX320_BO1,204,203,200_.jpg' }, 
//                 { key: 'J' ,rating:'4.5', real_price:'399', offer_price:'180', reviews_count:'3126',  title:'Rich Dad Poor Dad', image:'https://images-na.ssl-images-amazon.com/images/I/518zZZFEYNL._SX331_BO1,204,203,200_.jpg' },
// ];
const data = [
                { key: 'A' ,rating:'3.5', real_price:'150', offer_price:'70', reviews_count:'3,151', title:'Think and Grow Rich', image:'https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg' }, 
                { key: 'B' ,rating:'4.0', real_price:'199', offer_price:'129', reviews_count:'235', title:'The Girl in Room 105', image:'https://images-na.ssl-images-amazon.com/images/I/417NSfZZIWL._SX328_BO1,204,203,200_.jpg' }, 
                { key: 'C' ,rating:'3.5', real_price:'499', offer_price:'298', reviews_count:'834', title:'The Subtle Art of Not Giving a F*ck', image:'https://images-na.ssl-images-amazon.com/images/I/51r9XYcHP%2BL._SX331_BO1,204,203,200_.jpg' }, 
                { key: 'D' ,rating:'4.0', real_price:'30', offer_price:'18', reviews_count:'311', title:'General Knowledge 2019', image:'https://images-na.ssl-images-amazon.com/images/I/41Cme4Z%2B8cL._SX316_BO1,204,203,200_.jpg' }, 
                { key: 'E' ,rating:'4.5', real_price:'299', offer_price:'155', reviews_count:'1028', title:'Inner Engineering: A Yogi’s Guide to Joy', image:'https://images-na.ssl-images-amazon.com/images/I/51tEI%2BnAhdL._SX310_BO1,204,203,200_.jpg' }, 
                { key: 'F' ,rating:'5.0', real_price:'250', offer_price:'158', reviews_count:'166', title:'Life\'s Amazing Secrets: How to Find Balance and Purpose in Your Life', image:'https://images-na.ssl-images-amazon.com/images/I/410oZGDHQgL._SX324_BO1,204,203,200_.jpg' }, 
                { key: 'G' ,rating:'4.8', real_price:'199', offer_price:'123', reviews_count:'219', title:'The Perfect Us', image:'https://images-na.ssl-images-amazon.com/images/I/41ch88E5cCL._SX324_BO1,204,203,200_.jpg' }, 
                { key: 'H' ,rating:'4.0', real_price:'245', offer_price:'184', reviews_count:'259', title:'The Art of War', image:'https://images-na.ssl-images-amazon.com/images/I/51WVsB5j8CL._SX302_BO1,204,203,200_.jpg' }, 
                { key: 'I' ,rating:'4.0', real_price:'199', offer_price:'149', reviews_count:'5', title:'Self-Help: With Illustrations of Conduct and Perseverance', image:'https://images-na.ssl-images-amazon.com/images/I/51k7d7w7ybL._SX320_BO1,204,203,200_.jpg' }, 
                { key: 'J' ,rating:'4.5', real_price:'399', offer_price:'180', reviews_count:'3126', title:'Rich Dad Poor Dad: What the Rich Teach their Kids About Money that the Poor and Middle Class Do Not! (With Updates for Today\'s World)', image:'https://images-na.ssl-images-amazon.com/images/I/518zZZFEYNL._SX331_BO1,204,203,200_.jpg' },
];


const {height,width} = Dimensions.get('window');

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
class HomeScreen extends Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      
        <Content>
          <Card style={{flex: 0}}>
            <CardItem button onPress={() => {this.props.navigation.navigate('ShowBookDetails',{
               key: item.key ,rating:item.rating, real_price:item.real_price, offer_price:item.offer_price,  reviews_count:item.reviews_count, title:item.title, image:item.image
            })}}>
              <Body>
                <Image source={{uri: item.image}} style={{height: 200, width: "100%", flex: 1}}/>
              </Body>
            </CardItem>
            <Text style={{paddingHorizontal:8,marginVertical:2,fontWeight:'500'}}>{item.title}</Text>
            
            <Grid style={{paddingHorizontal:8,marginVertical:2,flexDirection:'row'}}>
              <Text style={{fontWeight:'500',fontSize:18,}}><Icon name="currency-inr" size={18}/>{item.offer_price}</Text>
              <Text style={{paddingHorizontal:4 ,color:'#8b8b8b',fontSize:15,textDecorationLine: 'line-through'}}>{item.real_price}</Text>
              <Text style={{paddingHorizontal:4 ,color:'#4bb550',fontSize:15}}>{parseInt(((item.real_price-item.offer_price)*100)/item.real_price)}% off</Text>
            </Grid>
            <Grid style={{paddingHorizontal:8,marginVertical:2,flexDirection:'row'}}>
              <Text style={{fontWeight:'500',fontSize:15,backgroundColor:'#26a541',color:'white',borderRadius:5,paddingHorizontal:5}}>{item.rating}<Icon name="star" size={15}/></Text>
              <Text style={{paddingHorizontal:4 ,color:'#8b8b8b',fontSize:15,}}>({item.reviews_count})</Text>
              <Right>
                <Text style={{paddingHorizontal:4 ,color:'#4bb550',fontSize:25,}}><Icon name="checkbox-marked-circle-outline" style={{color:'#26a541'}} size={25}/></Text>
              </Right>
            </Grid>
            <Button full dark button onPress={() => {Linking.openURL('https://razorpay.com/demo/');}}>
              <Text>Buy Now</Text>
            </Button>
            
          </Card>
        </Content>
        
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default class Home extends Component {
  render(){
    return(
      <HomeStack/>
    );
  }
}

const HomeStack = createStackNavigator({
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        header:null,
      }
    },
    ShowBookDetails:{
      screen:ShowBookDetails,
      navigationOptions:{
        header:null,
      }
    }
});
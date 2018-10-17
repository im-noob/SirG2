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
                { key: 'A' ,rating:'3.5', real_price:'150', offer_price:'70', reviews_count:'209', title:'Think and Grow Rich', image:'https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg',rating_count:'1,667',rate_1:'1091',rate_2:'382',rate_3:'112',rate_4:'35',rate_5:'47',Author:'',Description:'',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:' Amazing Reads'},
                  {item:'Genre',value:'FICTION'},
                  {item:'ISBN',value:'9788192910918, 8192910918'},
                  {item:'Edition',value:'1,2014'},
                  {item:'Pages',value:'250'},
            
                ] }, 
                { key: 'B' ,rating:'4.0', real_price:'199', offer_price:'129', reviews_count:'62 ', title:'The Girl in Room 105', image:'https://images-na.ssl-images-amazon.com/images/I/417NSfZZIWL._SX328_BO1,204,203,200_.jpg' ,rating_count:'782',rate_1:'548',rate_2:'176',rate_3:'39',rate_4:'6',rate_5:'13',Author:'Chetan Bhagat',Description:'Hi, Im Keshav, and my life is screwed. I hate my job and my girlfriend left me. Ah, the beautiful Zara. Zara is from Kashmir. She is a Muslim. And did I tell you my family is a bit, well, traditional? Anyway, leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I called, messaged, and stalked her on social media. She just ignored me. However, that night, on the eve of her birthday, Zara messaged me. She called me over, like old times, to her hostel room 105. I shouldnt have gone, but I did and my life changed forever. This is not a love story. It is an unlove story. From the author of Five Point Someone and 2 States, comes a fast-paced, funny and unputdownable thriller about obsessive love and finding purpose in life against the backdrop of contemporary India.',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Westland'},
                  {item:'Genre',value:'FICTION'},
                  {item:'ISBN',value:'9781542040464, 1542040469'},
                  {item:'Edition',value:'2018'},
                  {item:'Pages',value:'312'},
            
                ]}, 
                { key: 'C' ,rating:'3.5', real_price:'499', offer_price:'298', reviews_count:'413', title:'The Subtle Art of Not Giving a F*ck', image:'https://images-na.ssl-images-amazon.com/images/I/51r9XYcHP%2BL._SX331_BO1,204,203,200_.jpg' ,rating_count:'6285',rate_1:'4398',rate_2:'1313',rate_3:'327',rate_4:'83',rate_5:'164',Author:'Mark Manson',Description:'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people. For decades, weve been told that positive thinking is the key to a happy, rich life. Fuck positivity, Mark Manson says. Lets be honest, shit is fucked and we have to live with it. In his wildly popular Internet blog, Manson doesnt sugarcoat or equivocate. He tells it like it is-a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving his antidote to the coddling, lets-all-feel-good mindset that has infected. American society and spoiled a generation, rewarding them with gold medals just for showing up. Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited - not everybody can be extraordinary, there are winners and losers in society and some of it is not fair or your fault. Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity and forgiveness we seek. There are only so many things we can give a fuck about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience. A much needed grab you by the shoulders and look you in the eye moment of realtalk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a a refreshing slap for a generation to help them truly lead contented, grounded lives.',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'HarperCollins'},
                  {item:'Genre',value:'Self-Help'},
                  {item:'ISBN',value:'9780062641540, 0062641549'},
                  {item:'Edition',value:'2017'},
                  {item:'Pages',value:'224'},
            
                ]}, 
                { key: 'D' ,rating:'4.0', real_price:'30', offer_price:'18', reviews_count:'596', title:'General Knowledge 2019', image:'https://images-na.ssl-images-amazon.com/images/I/41Cme4Z%2B8cL._SX316_BO1,204,203,200_.jpg' ,rating_count:'4602',rate_1:'2812',rate_2:'1068',rate_3:'392',rate_4:'135',rate_5:'195',Author:'Manohar Pandey',Description:'General Knowledge is the steady awareness towards the progress of one’s surroundings. Building knowledge of all significant events and happenings requires consistency in learning on day to day basis and has also become essential for success in all competitions. General knowledge 2019 by Manohar Pandey comes as a comprehensive assimilation of factual information which proves useful for the aspirants of SSC, Bank, Railway, Police, NDA/CDS & Other Exams. With extensive coverage on current affairs, the book presents facts and figures with appropriate use of pictograms, graphics and tables for Simplified Learning and Easy Grasping. The syllabus for General Knowledge is broad & undefined and requires accurate, complete, topical coverage of facts from all walks of life. Covered in 5 chapters, one for each discipline, the book is a reliable and recommended source of information for anyone appearing in the forthcoming competitive exams.',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'ARIHANT'},
                  {item:'Genre',value:'Entrance Exams Preparation'},
                  {item:'ISBN',value:'9789312147306, 9312147307'},
                  {item:'Edition',value:'2018'},
                  {item:'Pages',value:'128'},
            
                ]}, 
                { key: 'E' ,rating:'4.5', real_price:'299', offer_price:'155', reviews_count:'350', title:'Inner Engineering: A Yogi’s Guide to Joy', image:'https://images-na.ssl-images-amazon.com/images/I/51tEI%2BnAhdL._SX310_BO1,204,203,200_.jpg' ,rating_count:'3400',rate_1:'2511',rate_2:'619',rate_3:'167',rate_4:'42',rate_5:'61',Author:'Sadhguru',Description:'Inner Engineering is a fascinating read, rich with Sadhguru\'s insights and his teachings. If you are ready, it is a tool to help awaken your own inner intelligence, the ultimate and supreme genius that mirrors the wisdom of the cosmos\'-Deepak Chopra',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'PENGUIN'},
                  {item:'ISBN',value:'9780143428848, 0143428845'},
                  {item:'Edition',value:'1,2016'},
                  {item:'Pages',value:'300'},
            
                ]}, 
                { key: 'F' ,rating:'5.0', real_price:'250', offer_price:'158', reviews_count:'181', title:'Life\'s Amazing Secrets: How to Find Balance and Purpose in Your Life', image:'https://images-na.ssl-images-amazon.com/images/I/410oZGDHQgL._SX324_BO1,204,203,200_.jpg' ,rating_count:'1405',rate_1:'1127',rate_2:'212',rate_3:'45',rate_4:'8',rate_5:'13',Author:'Gaur Gopal Das',Description:'Stop going through life, Start growing through life!',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Penguin Random House India Pvt. Ltd'},
                  {item:'Genre',value:'Self-Help'},
                  {item:'ISBN',value:'9780143442295, 0143442295'},
            
                ]}, 
                { key: 'G' ,rating:'4.8', real_price:'199', offer_price:'123', reviews_count:'92', title:'The Perfect Us', image:'https://images-na.ssl-images-amazon.com/images/I/41ch88E5cCL._SX324_BO1,204,203,200_.jpg' ,rating_count:'931',rate_1:'721',rate_2:'152',rate_3:'37',rate_4:'8',rate_5:'13',Author:'Datta, Durjoy',Description:'Love is: not having to hold back . . . but will she ever truly let him in? Avantika is an investment banker, an ambitious go-getter and the exact opposite of Deb-a corporate professional turned failed writer, turned scripter of saas-bahu serials. They\'ve been together for ten years, surviving rave parties, college and annoying best friends, including Shrey, who has no respect for personal boundaries, and Vernita and Tanmay-the enviable and annoying \'it\' couple who seem to have it all. And marriage. But now, Avantika wants to take the next step. Will Deb be able to catch up? Or will it rip them apart? As much as he might try to prove that he\'s the one for her, Deb is still not good enough. Not as long as Avantika is broken and her past looms in the background-pushing her, troubling her, goading her to question if their love is enough. Will Deb be able to find their perfect place? The Perfect Us is love\'s struggle to find the happily ever after. . .',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Penguin Random House India Pvt. Ltd'},
                  {item:'Genre',value:'FICTION'},
                  {item:'ISBN',value:'9780143426592, 0143426591'},
            
                ]}, 
                { key: 'H' ,rating:'4.0', real_price:'245', offer_price:'184', reviews_count:'38', title:'The Art of War', image:'https://images-na.ssl-images-amazon.com/images/I/51WVsB5j8CL._SX302_BO1,204,203,200_.jpg' ,rating_count:'441',rate_1:'260',rate_2:'100',rate_3:'46',rate_4:'16',rate_5:'19',Author:'Sun Tzu',Description:'Discover the teachings of one of the greatest generals to have walked the planet, Sun Tzu. The Art of War is one of the most famous and most informative texts on warfare.',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Fingerprint Publishing'},
                  {item:'Genre',value:'FICTION'},
                  {item:'ISBN',value:'9788172345242, 8172345240'},
                  {item:'Edition',value:'2014'},
                  {item:'Pages',value:'104'},
            
                ]}, 
                { key: 'I' ,rating:'4.0', real_price:'199', offer_price:'165', reviews_count:'5', title:'Self-Help: With Illustrations of Conduct and Perseverance', image:'https://images-na.ssl-images-amazon.com/images/I/51k7d7w7ybL._SX320_BO1,204,203,200_.jpg' ,rating_count:'2436',rate_1:'1377',rate_2:'515',rate_3:'266',rate_4:'120',rate_5:'158',Author:'Samuel Smiles',Description:'“The poor man with rich spirit is in all ways superior to the rich man with a poor spirit.” From promoting thrift while criticizing materialism to asserting the importance of character, morality, hard work and perseverance in achieving success, Samuel Smile’s Self-Help instils in its readers, a desire to succeed',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Fingerprint! Publishing; Latest edition'},
                  {item:'ISBN',value:'8175993464, 8175993464'},
                  {item:'Edition',value:'2,2016'},
                  {item:'Pages',value:'360'},
            
                ]}, 
                { key: 'J' ,rating:'4.5', real_price:'399', offer_price:'180', reviews_count:'121', title:'Rich Dad Poor Dad: What the Rich Teach their Kids About Money that the Poor and Middle Class Do Not! (With Updates for Today\'s World)', image:'https://images-na.ssl-images-amazon.com/images/I/518zZZFEYNL._SX331_BO1,204,203,200_.jpg' ,rating_count:'1008',rate_1:'602',rate_2:'228',rate_3:'90',rate_4:'26',rate_5:'62',Author:'Robert T. Kiyosaki',Description:'Rich Dad Poor Dad : What the Rich Teach Their Kids About Money - That The Poor And Middle Class Do Not!',details:[
                  {item:'Language',value:'English'},
                  {item:'Binding',value:'Paperback'},
                  {item:'Publisher',value:'Plata Publishing'},
                  {item:'Genre',value:'Parenting'},
                  {item:'ISBN',value:'9783456113128, 3456366744'},
                  {item:'Edition',value:'Revised Edition'},
            
                ]},
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
  constructor(props){
    super(props);
    this.state = {
      bookName:"kd"
    }
  }
  shortName(input){
    let name = '';
    console.log(input.length)
    if(input.length>21){
      name = input.substring(0,19)+"..";
    }else{
      name = input;
    }
    return(name);
  }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      
        <Content>
          <Card style={{flex: 0}}>
            <CardItem button onPress={() => {  console.log("bookd clicked"); this.props.navigation.navigate('ShowBookDetails',{
               key: item.key ,rating:item.rating, real_price:item.real_price, offer_price:item.offer_price,  reviews_count:item.reviews_count, title:item.title, image:item.image,rating_count:item.rating_count,rate_1:item.rate_1,rate_2:item.rate_2,rate_3:item.rate_3,rate_4:item.rate_4,rate_5:item.rate_5,Author:item.Author,Description:item.Description,details:item.details
            }); console.log("bookd navigaiton done ");}}>
              <Body>
                <Image source={{uri: item.image}} style={{height: 200, width: "100%", flex: 1}}/>
              </Body>
            </CardItem>
            <Text style={{paddingHorizontal:8,marginVertical:2,fontWeight:'500'}}>{this.shortName(item.title)}</Text>
            
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
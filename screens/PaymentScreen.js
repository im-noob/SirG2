import React, { Component } from "react";
import { 
    StyleSheet,
    Linking,
    ScrollView,
    View 
} from "react-native";
import { Container, Spinner, Content, Card, CardItem, Text, Button ,Right,Form,Item,Label,Input} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PaymentScreen extends Component {
    static navigatonOptions={
        drawerIcon:({tintColor}) =>(
            <Icon name = "home" style = {{ fontSize:23, color:tintColor}}/>
        )
        };
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    payNow = () => {
        Linking.openURL('https://razorpay.com/demo/');
    }
    render() {
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return (
                <ScrollView>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Icon name="label-variant-outline" size={20}/>
                                    <Text>Total Amount</Text>
                                    <Right>
                                        <Text style={{fontWeight:'400'}}><Icon name="currency-inr" size={15}/>5200</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Icon name="label-variant-outline" size={20}/>
                                    <Text>Amount Paid</Text>
                                    <Right>
                                        <Button bordered success>
                                            <Text  style={{fontWeight:'800', color:'#42a984'}}><Icon name="currency-inr" size={15}/>1200</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Icon name="label-variant-outline" size={20}/>
                                    <Text >Due Amount</Text>
                                    <Right>
                                        <Button bordered danger>
                                        <Text style={{fontWeight:'800', color:'#9f4b53'}}><Icon name="currency-inr" size={15}/>4000</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
    
                            <Card>
                                <CardItem header>
                                    <Text>Pay Now?</Text>
                                </CardItem>
                                <Form>
                                    <Item inlineLabel>
                                        <Label>Amount: <Icon name="currency-inr" size={15}/></Label>
                                        <Input style={{borderColor: '#2196F3',
                                                        borderRadius: 10 ,
                                                        paddingLeft: 3,
                                                        borderWidth:1,
                                                        backgroundColor:'#eaf1f4',}}
                                        />
                                    </Item>
                                </Form>
                                <Button primary full onPress={() => this.payNow()}>
                                    <Text>Proceed To Pay  <Icon name="arrow-right-drop-circle-outline" size={20}/></Text>
                                </Button>
                            </Card>
                        </Content>
                    </Container>
                </ScrollView>
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
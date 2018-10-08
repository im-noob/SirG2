import React from 'react';
import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity } from 'react-native';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import LecturesScreen from '../screens/LecturesScreen';
import AttendenceScreen from '../screens/AttendenceScreen';
import GradeScreen from '../screens/GradeScreen';
import HolidayScreen from '../screens/HolidatScreen';
import NoticeScreen from '../screens/NoticeScreen';
import NotesScreen from '../screens/NotesScreen';
import PaymentScreen from '../screens/PaymentScreen';

export default class MainTabNavigator extends React.Component{
  render(){
    return(
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  
	<SafeAreaView style={{flex:1,backgroundColor:'#0962f5'}} forceInset={{ top: 'always', horizontal: 'never' }}>
		<View style={{height:150, backgroundColor:'#0962f5',alignItems:'center',justifyContent:'center'}}>
			<Image source={require('../assets/images/icon.png')} style={{height:120,width:120,borderRadius:60}}/>
		</View>
		
		<ScrollView style={{backgroundColor:'#FFF'}}>
			<DrawerItems {...props} />
		</ScrollView>
		
	</SafeAreaView>
  
);
const MenuButton = (obj) =>(
	<View style={{backgroundColor:"#2874f0"}}>
		<TouchableOpacity onPress={() => { obj.toggleDrawer() } }>
			<Icon name="menu" style={{color: 'white', padding: 10, marginLeft:5, fontSize: 35}}/>
		</TouchableOpacity>
	</View>
);
const HeaderTitle = (<Text style={{color:"#fff",padding: 10, marginLeft:5, fontSize: 20 , fontWeight:"400"}}>SirG2</Text>);

/* stack navigator */
const HomeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: <MenuButton obj={this.props.navigation}  />,
    }),
  }
);
const LecturesScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: LecturesScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);

const NoticeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: NoticeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);

const AttendenceScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: AttendenceScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);
const GradeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: GradeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);
const NotesScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: NotesScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);
const PaymentScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: PaymentScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);

const HolidayScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HolidayScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
			headerTitle: HeaderTitle,
			headerStyle: {
				backgroundColor: '#2874f0'
			},
			headerLeft: MenuButton,
    }),
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Home:{
		screen:HomeScreenStack,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (<Icon name="home-outline" size={24} style={{ color: tintColor }} />),
		}
	},
	Lectures: {
		screen: LecturesScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="theater" size={24} style={{ color: tintColor }} />),
		}
	},
	Notice: {
		screen: NoticeScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="bell-outline" size={24} style={{ color: tintColor }} />),
		}
	},
	Attendance: {
		screen: AttendenceScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="account-check" size={24} style={{ color: tintColor }} />),
		}
	},
	Grades: {
		screen: GradeScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="format-annotation-plus" size={24} style={{ color: tintColor }} />),
		}
	},
	Notes: {
		screen: NotesScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="file-pdf-box" size={24} style={{ color: tintColor }} />),
		}
	},
	Payment: {
		screen: PaymentScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="currency-inr" size={24} style={{ color: tintColor }} />),
		}
	},
	Holiday: {
		screen: HolidayScreenStack,
		navigationOptions: {
				drawerIcon: ({ tintColor }) => (<Icon name="umbrella-outline" size={24} style={{ color: tintColor }} />),
		}
	}, 
},{
	contentComponent:CustomDrawerContentComponent,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

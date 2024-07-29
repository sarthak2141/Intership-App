import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import TreandingInternship from '../Components/TrendingInternship';
import Services from '../Components/Services';
import FotterCard from '../Components/FotterCard';

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: 'header' },
    { id: 'cards' },
    { id: 'internship' },
    { id: 'trending' },
    { id: 'services' },
  ];

  const renderItem = ({ item }) => {
    switch (item.id) {
      case 'header':
        return (
          <View>
            <Header navigation={navigation}  />
          </View>
        );
      case 'cards':
        return (
          <View style={styles.cardContaainer}>
            <View style={styles.Hiringcard}>
              <Image source={require('../assets/images/hiring.jpg')} style={styles.CardImg} />
              <TouchableOpacity>
                <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', fontWeight: '600' }}>
                  Hire Now
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.findjobCard}>
              <Image source={require('../assets/images/find-job.jpg')} style={styles.CardImg} />
              <TouchableOpacity>
                <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', fontWeight: '600' }}>
                  Find Job
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'internship':
        return (
          <View style={styles.IntershipCOntainer}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 13 }}>
                <Text style={styles.internText1}>CheckOut</Text>
                <Text style={styles.internText2}>Letest</Text>
                <Text style={styles.internText3}>Interships</Text>
              </View>
              <Image source={require('../assets/images/inershipImg.png')} style={styles.intershipImg} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
              <View style={{ marginLeft:13,flex:1 }}>
                <Text style={{ fontSize: 17, color: '#fff', fontWeight: '500', marginTop: 3, }}>
                  Find Your Perfect Internship Now
                </Text>
                <Text style={{ fontSize: 16, color: '#fff',  fontWeight: '500', marginTop: 2 }}>
                  We Take Your Responsibility
                </Text>
              </View>
              <TouchableOpacity style={{ marginTop: 14, backgroundColor: '#fff', borderRadius: 32, alignItems: 'center', padding: 2, marginRight: 15, justifyContent: 'center' }}>
                <Icon name='chevron-right' color='black' size={39} style={{ left: 2 }} />
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'trending':
        return (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', marginLeft: 11 }}>
                Trending Internship
              </Text>
            </View>
            <TreandingInternship />
          </View>
        );
      case 'services':
        return (
          <View style={{ backgroundColor: "#fff", marginLeft: 20, marginRight: 22, marginTop: 11, elevation: 3, paddingBottom: 10, borderRadius: 10, marginBottom: 90, shadowColor: '#000' }}>
            <Services />
            <FotterCard />
          </View>
        );
      default:
        return null;
    }
  };

  return (

<View style={{flex:1,}}>

<StatusBar backgroundColor={'#eff4fd'}/>


 
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#eff4fd" }}
    />


</View>
  );
}












export default HomeScreen

const styles = StyleSheet.create({
    Hiringcard:{
        
        width:'45.5%',
        height:160,
        backgroundColor:"#5A64F5",
        borderRadius:10, 
        marginRight:8,
     
        elevation:5,
        shadowColor:"#000",
        marginVertical:10
    },
    findjobCard:{
      
        width:'45.5%',
        height:160,
        backgroundColor:"#5A64F5",
        borderRadius:10,
       
        marginLeft:8,
        elevation:5,
        shadowColor:"#000",
        marginVertical:10
    },
    CardImg:{
        width:'100%',
        height:120,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    cardContaainer:{
      flex:1,
      marginLeft:10,
      marginRight:10,
        flexDirection:'row',
        justifyContent:'center',
      marginTop:5
    },
    IntershipCOntainer:{
        width:"90.5%",
        backgroundColor:'#5A64F5',
        height:200,
       marginLeft:15,
       marginRight:10,
       marginVertical:8,
       borderRadius:10,
       elevation:5, 
      shadowColor:'#000'
    },
    internText1:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
       
        marginTop:7,
        
    },
    internText2:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
  
        
      
    },
    internText3:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
        
        
    },
    intershipImg:{
      flex:1,
      
        height:122,
        marginLeft:4,
        marginTop:1

    }
})
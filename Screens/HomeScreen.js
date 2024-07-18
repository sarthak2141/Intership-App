import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import TreandingInternship from '../Components/TrendingInternship';
import Services from '../Components/Services';
import FotterCard from '../Components/FotterCard';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView  showsHorizontalScrollIndicator={false} style={{backgroundColor:"#eff4fd",}}>
<View >
<Header navigation={navigation} />
</View>


<View style={styles.cardContaainer}>
    <View style={styles.Hiringcard}>
    <Image source={require('../assets/images/hiring.jpg')} style={styles.CardImg} />
   <TouchableOpacity >
    <Text style={{fontSize:22,color:'white',textAlign:'center',fontWeight:'600'}}>
        Hire Now
    </Text>
    </TouchableOpacity>
    </View>



    <View style={styles.findjobCard}>
    <Image source={require('../assets/images/find-job.jpg')} style={styles.CardImg} />
   <TouchableOpacity >
    <Text style={{fontSize:22,color:'white',textAlign:'center',fontWeight:'600'}}>
        Find Job
    </Text>
    </TouchableOpacity>
    </View>
</View >




<View style={styles.IntershipCOntainer}>
<View style={{ flexDirection:'row'}}>
    <View>
<Text style={styles.internText1}>
    CheckOut
 
</Text>
<Text style={styles.internText2}>
Letest
</Text>
<Text style={styles.internText3}>
Interships
</Text>
</View>

<Image source={require('../assets/images/inershipImg.png')} style={styles.intershipImg}/>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>

<View style={{width:'73%'}}>


<Text style={{fontSize:17,color:'#fff',fontWeight:'500',marginTop:3,marginLeft:3}}>
Find Your Perfect Internship Now

</Text >
<Text style={{fontSize:16,color:'#fff',marginLeft:14,fontWeight:'500',marginTop:2}}>
We Take Your Responsibility
</Text>
</View>

<TouchableOpacity style={{marginTop:14,  backgroundColor:'#fff',borderRadius:32,alignItems:'center',padding:2,marginRight:6,justifyContent:'center'}} >
        <Icon name='chevron-right' color='black' size={39} style={{left:2}} />
        </TouchableOpacity>

</View>
</View>




<View>
    <View style={{flexDirection:'row',alignItems:'center', marginHorizontal:7}}>
   <Text style={{fontSize:20,color:'black',fontWeight:'600' }}>
   Tranding Internship
    </Text>
  <Icon name='clipboard' size={36} color='#f47e7e' style={{marginHorizontal:5 }}/>
  </View>


  


<View>
  <TreandingInternship/>
 
  </View>


<View>
    <Services/>
  </View>


<View>
    <FotterCard/>
</View>
</View>





    </ScrollView>
     
   

  

  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Hiringcard:{
        width:180,
        height:160,
        backgroundColor:"#7547ef",
        borderRadius:23, 
        marginRight:10,
        elevation:8,
        marginVertical:10
    },
    findjobCard:{
        width:180,
        height:160,
        backgroundColor:"#7547ef",
        borderRadius:23,
        marginLeft:10,
        elevation:8,
        marginVertical:10
    },
    CardImg:{
        width:'100%',
        height:120,
        borderTopRightRadius:23,
        borderTopLeftRadius:23,
    },
    cardContaainer:{
        flexDirection:'row',
        justifyContent:'center'
      
    },
    IntershipCOntainer:{
        width:"90%",
        backgroundColor:'#7547ef',
        height:200,
       marginHorizontal:21,
       marginVertical:17,
       borderRadius:23,
       elevation:9,
      
    },
    internText1:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
        marginLeft:14, marginRight:0,
        marginTop:6,
        
    },
    internText2:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
        marginLeft:14,
        
        marginRight:0
    },
    internText3:{
        fontSize:29,
        fontWeight:'700',
        color:'#ffff',
        marginLeft:14,
        marginRight:0
        
    },
    intershipImg:{
        width:220,
        height:120,
        marginLeft:4,

    }
})
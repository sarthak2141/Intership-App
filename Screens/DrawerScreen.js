import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const DrowerData=[
  { id:"01",label:'Home',Icon:'home', color:'#5A64F5' ,navigationTo:'HomeScreen'},
  { id:"02",label:'Internship',Icon:'insert-drive-file',color: '#FFD700',navigationTo:'' },
  { id:"03",label:'Part Time Job',Icon:'favorite',color: 'red' ,navigationTo:'' },
  { id:"04",label:'Career Advice',Icon:'chat', color: '#20b2aa',navigationTo:''},
  { id:"05",label:'Resume',Icon:'person',color: '#4682B4' ,navigationTo:''},
  { id:"06",label:'Certification',Icon:'work', color: '#FF6347' ,navigationTo:''},
  { id:"07",label:'Free Seminar',Icon:'group', color: '#8A2BE2' ,navigationTo:''},
  { id:"08",label:'Premium Services',Icon:'description',color: '#32CD32' ,navigationTo:''},
  { id:"09",label:'LogOut',Icon:'power-settings-new',color: '#FF0000' ,navigationTo:''},
 
 
]





const DrawerScreen = ({navigation}) => {
  return (
    
    <View style={{backgroundColor:'#eff4fd',flex:1,  justifyContent:'flex-start'}}>

    
    <View style={styles.profileContainer}>
     <Image
      source={require('../assets/images/avatar4.jpg')} 
      style={styles.profileImage}
    /> 
    <View style={styles.textContainer}>
    <Text style={styles.greetingText}>Hello,</Text>
      <Text style={styles.userName}>UserName</Text>
    </View>
    </View>

<View>
    <FlatList 
    data={DrowerData}
    keyExtractor={item => item.id.toString()}
    renderItem={({item})=>(
      
      <View >
        <TouchableOpacity style={styles.listContainer} onPress={()=>navigation.navigate(item.navigationTo)}>
        <Icon name={item.Icon} color={item.color} size={26} style={{marginLeft:8}}/>
        <Text style={styles.textList}>
          {item.label}
        </Text>
        </TouchableOpacity>
      </View>

      
    )}
    />



    </View>

    <TouchableOpacity style={styles.bottomView}>
     <Text style={{fontSize:19,fontWeight:'600',color:'#fff'}}>
      Login/SignUp
     </Text>
    </TouchableOpacity>

    </View>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({
  profileContainer:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center'
    
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginLeft:8
    
    
  },
  userName: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },
  greetingText: {
    color: 'black',
    fontSize: 14,
     fontWeight: '500'
  },
  textContainer: {
    flex: 1,
    
    
  },
  listContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
    marginRight:10,
    padding:10,
    backgroundColor:"#fff",
    // borderRadius:10,
    elevation:5,
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  textList:{
    flex:1,
    fontSize:17,
    fontWeight:'600',
    color:'#000',
    marginLeft:5
  },
  
bottomView:{
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#DC143C',
  alignItems: 'center',
  padding: 11,
}
})
import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet,Image,TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const HomeScreen = ({navigation}) => {
    return (
        <ScrollView scrollIndicatorInsets='false'>
        <View style={styles.main }>
            <View style={styles.info}>
            <Text style={styles.detailsaccont}>اطلاعات حساب کاربری</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../img/3.png')} style={styles.image}/>
            </View>
            <TouchableOpacity style={styles.selectimage}>
            <Image source={require('../img/drawable-xxxhdpi/camera.png')} style={styles.camera}/>
             <Text style={styles.selectimgtext}>انتخاب عکس</Text>
            </TouchableOpacity>
            <Text style={styles.phonenumber}>0935176420</Text>
            <Text style={styles.family}>نام و نام خانوادگی</Text>
            <View style={styles.person}>
            <View style={styles.familes}>
             <Image source={require('../img/drawable-xxxhdpi/user-1.png')} style={styles.icon}/>
             <Text style={styles.name}>محمدرضا</Text>
             <Text style={styles.secondname}>نام خانوادگی</Text>
            </View>
            <Text style={styles.textuser}>نام کاربری</Text>
            <View style={styles.accont}>
            <Image source={require('../img/drawable-xxxhdpi/tick.png')} style={styles.icon}/>
                <TextInput placeholder="نام کاربری" style={styles.textinput}/>
                <Image source={require('../img/drawable-xxxhdpi/user.png')} style={styles.usericon}/>
            </View>
            <Text style={styles.textvalid}>موجود است</Text>
            </View>
            <Text style={styles.rols}>با ثبت نام موافقت خود را با مقررات مینار اعلام می نمایم</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={styles.login}>
                <Text style={styles.logintext}>ثبت نام</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
    },
    info:{
        marginTop:20
    },
    detailsaccont:{
        fontFamily:"Vazir"
    },
    img:{
        width:165,
        height:165,
        borderWidth:2,
        borderRadius:90,
        borderStyle:"dashed",
        justifyContent:'center'
    },
    selectimgtext:{ 
        fontFamily:"Vazir",
        marginRight:5
},
    image:{
        borderRadius:90,
        borderWidth:5,
        width:160,
        height:160,
        alignSelf:'center'
    },
    selectimage:{
    width:160,
    height:50,
    backgroundColor:'#54C7EC',
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:180,
    flexDirection:'row-reverse',
    },
    camera:{
        width:30,
        height:25,
    },
    phonenumber:{
        marginTop:20,
        fontFamily:"Vazir"
    },
    person:{
        marginTop:15,
        fontFamily:"Vazir"
    },
    family:{
        direction:'rtl',
        alignSelf:"flex-end",
        fontFamily:"Vazir",
        marginRight:25,
    },
    familes:{
        justifyContent:'center',
        alignItems:'center',
        direction:'rtl',
        flexDirection:'row-reverse',
       width:310,
       height:50,
       borderRadius:15,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 1,
       
    
    },
    icon:{
      borderLeftWidth:3,
      borderColor:"red",
     width:40,
     height:40,
     marginLeft:15
    },
    usericon:{
        width:40,
        height:40,
        marginRight:10
    },
    name:{
        borderLeftWidth:3 ,
        borderRightWidth:3,
        borderColor:"#cccccc",
        fontSize:20,
        color:"#cccccc",
        padding:5,
        fontFamily:"Vazir"
    },
    secondname:{
        fontSize:25,
        color:"#cccccc",
        padding:5,
        fontFamily:"Vazir"
    },
    accont:{
        width:310,
        height:50,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row-reverse',
        borderRadius:15,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 1,
       

    },
    textinput:{
        flex:0.8,
        borderLeftWidth:2,
        borderColor:"#cccccc",
        fontSize:20,
        paddingRight:20,
        fontFamily:"Vazir"
    },
    textuser:{
        fontFamily:"Vazir",
        margin:10,
    },
    iconconfir:{
        width:25,
        height:25,
        borderRadius:90,
        backgroundColor:"#66d9ff",
        marginRight:10

    },
    iconaccont:{
        flex:0.2,
        color:"#ccc",
        marginLeft:10
    },
    textvalid:{
        color:"#66d9ff",
        textAlign:'right',
        marginRight:10,
        marginTop:10,
        fontFamily:"Vazir"
    },
    rols:{
        fontSize:18,
        textAlign:'center',
        fontFamily:"Vazir",
        width:320
    },
    login:{
        width:310,
        height:60,
        backgroundColor:'#336699',
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    logintext:{
        fontFamily:"Vazir",
        
    }

    
})

export default HomeScreen;

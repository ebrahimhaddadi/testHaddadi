import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'


const DetailsScreen = () => {
    const { width, height } = Dimensions.get('window');
    const cursorRadius = 40;

    return (
        <View>
            <View style={styles.header}>

                <TouchableOpacity style={styles.pay}>
                    <Text style={styles.qrcodetext}>پرداخت از طریق بارکد</Text>
                    <Image source={require('../img/drawable-xxxhdpi/qrcode.png')} style={styles.qrcode} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.pay1}>
                    <Text style={styles.usertext}>پرداخت از طریق نام کاربری</Text>
                    <Image source={require('../img/drawable-xxxhdpi/user.png')} style={styles.user} />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Image source={require('../img/drawable-xxxhdpi/Grouploc.png')} style={styles.grouploc} />
                <Text style={styles.locationtext}>
                    سیستم موقعیت یاب شما غیر فعال است
            </Text>
                <Text style={styles.locationtext1}>
                    جهت مشاهده کسب کارهای اطراف خود موقعیت یاب را فعال کنید
            </Text>
                <TouchableOpacity style={styles.enableloc}>
                    <Text style={styles.enableloctext}>فعال سازی</Text>
                </TouchableOpacity>
                <View style={styles.crical}>

                    <Image source={require("../img/drawable-xxxhdpi/Grouppay.png")} style={styles.grouppay} />

                </View>
            </View>

            <View style={styles.footer}>
              
                <View style={{ position: 'relative' }}>
                    <Image source={require('../img/drawable-xxxhdpi/Path.png')} style={styles.path} />
                    <TouchableOpacity style={styles.setting}>
                    <Image source={require('../img/drawable-xxxhdpi/setting.png')} style={styles.settingimg} />
                    <Text style={{fontFamily:'Vazir',fontSize:11}}>تنظیمات</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.check}>
                    <Image source={require('../img/drawable-xxxhdpi/check.png')} style={styles.checkimg} />
                    <Text style={{fontFamily:'Vazir',fontSize:11}}>تراکنش</Text>
                </TouchableOpacity>
                </View>
               
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        width: 360,
        height: 68,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,

    },
    pay: {
        flexDirection: 'row',
        width: 167,
        height: 40,
        backgroundColor: '#5FE4EF',
        borderRadius: 45,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    pay1: {
        flexDirection: 'row',
        width: 167,
        height: 40,
        backgroundColor: '#7F74C7',
        borderRadius: 45,
        marginLeft: 3,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#000"

    },
    main: {
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        width: 360,
        height: 500,
    },
    footer: {
        position: 'relative',

    },
    user: {
        width: 30,
        height: 30
    },
    qrcode: {
        width: 30,
        height: 30,
    },
    qrcodetext: {
        fontFamily: 'BYekan+',
        color: '#fff',
    },
    usertext: {
        fontFamily: 'BYekan+',
        fontSize: 13,
        color: '#fff',
    },
    grouploc: {
        width: 300,
        height: 200,
        marginTop: 10
    },
    locationtext: {
        fontFamily: 'BYekan+',
        fontSize: 23,
        marginTop: 5,
        color: "#C2C3CE"
    },
    locationtext1: {
        fontFamily: 'BYekan+',
        fontSize: 20,
        marginTop: 5,
        color: "#C2C3CE",
        textAlign: 'center'
    },
    enableloc: {
        backgroundColor: '#7F74C7',
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        marginTop: 10,


    },
    crical: {
        position: 'absolute',
        bottom: -38,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    grouppay: {
        width: 100,
        height: 100,
    },
    enableloctext: {
        color: '#fff',
        fontFamily: 'BYekan+',
        fontSize: 20
    },
    path: {
        width: 400,
        height: 68,
        alignSelf: 'center',
        position: "absolute",
        top: -15


    },
    setting: {
        width: 60,
        height: 45,
        alignItems: 'center',
        top: -10,
        right:-30,
    },
    settingimg: {
        width: 35,
        height: 40,
    },
    check: {
        width: 60,
        height: 45,
        alignItems: 'center',
        left: 268,
        top: -45
    },
    checkimg: {
        width: 25,
        height: 30,
        alignSelf: 'center'
    }



})

export default DetailsScreen;

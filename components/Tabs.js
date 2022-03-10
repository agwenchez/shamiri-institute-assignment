import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')
import { AntDesign } from '@expo/vector-icons';
import Svg, { G, Circle } from "react-native-svg";
import Constants from 'expo-constants'
import { Entypo } from '@expo/vector-icons';
import Donut from './Donut';
import BarChart from './BarChart';



const Daily = () => {
    return (
        <View style={{ marginTop: 150 }}>

            <View style={styles.donutWrapper}>

                <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
                    <Donut radius={60} color={"#143029"} percentage={40}/>
                    <Text style={styles.text}>50</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
                    <Donut radius={70} color={"#85BDAF"} percentage={70}/>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
                    <Donut radius={80} color={"#BCD9D1"} percentage={20}/>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
                    <Donut radius={90} color={"#E3A89F"} percentage={60}/>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
                    <Donut radius={100} color={"#F6E9E7"} percentage={80}/>
                </View>
            </View>


            <View style={{ marginTop: 10, paddingBottom: 20, }}>
                <View style={{ width: width * 0.85, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 5 }}>
                        <Text style={{ color: "black" }}>Mental Health</Text>
                        <Text style={{ color: "black" }}>8/10</Text>
                    </View>
                    <View style={{ width: width * 0.85, }}>
                        <View style={{ backgroundColor: "#F6E9E7", height: 17, borderRadius: 20, width: width * 0.85 * 0.8 - 15, }} ></View>
                    </View>
                </View>

                <View style={{ width: width * 0.85, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 5 }}>
                        <Text style={{ color: "black" }}>Satisfaction</Text>
                        <Text style={{ color: "black" }}>2.5/10</Text>
                    </View>
                    <View style={{ width: width * 0.85, }}>
                        <View style={{ backgroundColor: "#E3A89F", height: 17, borderRadius: 20, width: width * 0.85 * 0.25 - 15, }} ></View>
                    </View>
                </View>

                <View style={{ width: width * 0.85, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 5 }}>
                        <Text style={{ color: "black" }}>Social/Family Support</Text>
                        <Text style={{ color: "black" }}>4.5/10</Text>
                    </View>
                    <View style={{ width: width * 0.85, }}>
                        <View style={{ backgroundColor: "#BCD9D1", height: 17, borderRadius: 20, width: width * 0.85 * 0.45 - 15, }} ></View>
                    </View>
                </View>

                <View style={{ width: width * 0.85, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 5 }}>
                        <Text style={{ color: "black" }}>Work</Text>
                        <Text style={{ color: "black" }}>6/10</Text>
                    </View>
                    <View style={{ width: width * 0.85, }}>
                        <View style={{ backgroundColor: "#85BDAF", height: 17, borderRadius: 20, width: width * 0.85 * 0.6 - 15, }} ></View>
                    </View>
                </View>

                <View style={{ width: width * 0.85, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 5 }}>
                        <Text style={{ color: "black" }}>Sense of Purpose</Text>
                        <Text style={{ color: "black" }}>4/10</Text>
                    </View>
                    <View style={{ width: width * 0.85, }}>
                        <View style={{ backgroundColor: "#143029", height: 17, borderRadius: 20, width: width * 0.85 * 0.4 - 15, }} ></View>
                    </View>
                </View>

            </View>
        </View>
    )
}

const Weekly = () => {
    return (
        <View style={{ width: width }} >
            <View style={{ marginTop: 40, paddingHorizontal: 40 }} >
                <Text style={{ textAlign: "left", fontWeight: 'bold', fontSize: 18 }} >Mental Health</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20, paddingHorizontal: 40 }} >
                <View style={{ flexDirection: 'column', marginRight: 30, }}>
                    <Text style={{ fontSize: 14, color: "gray" }}>Weekly Average</Text>
                    <Text style={{ fontSize: 30, color: "#E3A89F", textAlign: "center" }}>6</Text>
                </View>

                <View style={{ flexDirection: 'column', marginRight: 30 }}>
                    <Text style={{ fontSize: 14, color: "gray" }}>Week-over-week</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <AntDesign name="arrowdown" size={24} color="#E3A89F" />
                        <Text style={{ fontSize: 30, color: "#E3A89F", }}>20%</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', }}>
                    <Text style={{ fontSize: 14, color: "gray" }}>Goal</Text>
                    <Text style={{ fontSize: 30, color: "#E3A89F", textAlign: "center" }}>8</Text>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop:0 }}>
                <BarChart height={height / 4.2} width={width * 0.8}/>
            </View>

            <View style={{ backgroundColor: "#C4C4C4", height: 1.5, width: width, marginBottom: 10, marginTop: 10 }} ></View>
            <Text style={{ textAlign: "left", fontWeight: 'bold', fontSize: 18, marginBottom:20, marginLeft:40 }} >Recommendation</Text>
            <Image
                style={{ height: 160, width: width-60, borderTopRightRadius:10, borderTopLeftRadius:10,alignSelf:"center" }}
                source={{
                    uri: 'https://www.timedoctor.com/blog/images/2020/04/Remote-One-on-One-Meetings.png',
                }}
            />
            <Text style={{ marginLeft:30, color:"gray" }} >One-on-One sessions</Text>
            <Text style={{ marginLeft:30, marginBottom:0 }} >Talk to our therapists about employee burnout</Text>
        </View>


    )
}


const Tabs = ({navigation}) => {

    const [daily, setDaily] = React.useState(true)
    const [weekly, setWeekly] = React.useState(false)

    const handleToggleDaily = () => {
        daily === false && setDaily(true)
        weekly === true && setWeekly(false)
    }

    const handleToggleWeekly = () => {
        weekly === false && setWeekly(true)
        daily === true && setDaily(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={daily ? { left: -80 } : { left: -62 }} onPress={()=>navigation.navigate("Dashboard")}>
                    <Entypo name="chevron-left" size={30} color="#C4C4C4" />
                </TouchableOpacity>
               
                {daily && <Text style={{ fontSize: 22, marginBottom: 15 }}>Wed Jan 16, 2022</Text>}
                {weekly && <Text style={{ fontSize: 22, marginBottom: 15 }}>Jan 13 - Jan 19, 2022</Text>}

            </View>
            <View style={{ backgroundColor: "#C4C4C4", height: 1.5, width: width, marginBottom: 30 }} ></View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity activeOpacity={.6} onPress={handleToggleDaily}>
                    <Text style={[styles.tabText, daily && styles.active, { marginLeft: 6 }]}>Daily</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.6} onPress={handleToggleWeekly}>
                    <Text style={[styles.tabText, weekly && styles.active, { marginRight: 6 }]}>Weekly</Text>
                </TouchableOpacity>
            </View>

            <View>
                {daily && <Daily />}
                {weekly && <Weekly />}
            </View>

        </SafeAreaView>
    )
}

export default Tabs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        //marginTop:Constants.statusBarHeight + 10
    },
    tabsContainer: {
        backgroundColor: '#F6E9E7',
        borderRadius: 20,
        width: width * 0.86,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        alignItems: 'center',
    },
    tabText: {
        //backgroundColor:'white',
        padding: 3,
        borderRadius: 20,
        width: width * 0.4,
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    dailyContainer: {
        flexDirection: "column"
    },
    active: {
        backgroundColor: 'white',
    },
    donutWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        //marginTop:30,
        //paddingTop:-90,
        marginBottom: 130,
        //flex:.5
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 48,
        color: "black",
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
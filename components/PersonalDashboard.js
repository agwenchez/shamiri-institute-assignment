import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Donut from './Donut';
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants'



const { width, height } = Dimensions.get('window')

const PersonalDashboard = ({ navigation }) => {

    const [open, setOpen] = React.useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <View style={styles.container} >
            <View style={open ? { flex: 2.1, overflow: "hidden", borderBottomLeftRadius: 50, } : { flex: 0.65, overflow: "hidden", borderBottomLeftRadius: 50, }}>
                <View style={{ flex: 1, backgroundColor: '#85BDAF', width: width, borderBottomLeftRadius: 60, paddingTop: Constants.statusBarHeight + 10, }}>
                    <Text style={{ color: "white", fontSize: 28, marginLeft: 40 }} >FOR YOU</Text>
                    <Text style={{ color: "white", fontSize: 18, marginLeft: 40, }} >Jan 18 2022, Friday</Text>

                    <View style={open ? { backgroundColor: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", height: height * 0.48, width: width * 0.85, justifyContent: "center", alignSelf: "center", marginTop: 20, borderRadius: 15 } : { backgroundColor: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", height: height * 0.19, width: width * 0.85, justifyContent: "center", alignSelf: "center", marginTop: 20, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", }} >
                            <Entypo name="chevron-left" size={28} color="white" />
                            {open ? <Text style={{ alignSelf: "center", color: "white", fontSize: 16, fontWeight: "bold" }} >January 2022</Text> : <Text style={{ alignSelf: "center", color: "white", fontSize: 16, fontWeight: "bold" }} >Jan 13 - Jan 19, 2022</Text>}
                            <Entypo name="chevron-right" size={28} color="white" />
                        </View>


                        {open ? (
                            <>
                                {/* Full Calender */}
                                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingHorizontal: 20, marginTop: 15, marginBottom: 0 }} >
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >S</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} ></Text>
                                        <View style={{ height: 25, width: 25, color: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >6</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >13</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >20</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >27</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>

                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >M</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} ></Text>
                                        <View style={{ height: 25, width: 25, color: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >7</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>


                                        <Text style={{ color: "white", fontWeight: "bold" }} >14</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >21</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >28</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >1</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10, marginLeft: -5 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >8</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >15</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >22</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >29</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", marginLeft: -3 }} >W</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >2</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >9</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >16</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >23</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >30</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >3</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >10</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >17</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >24</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >31</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >F</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >4</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >11</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >18</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >25</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} ></Text>
                                        <View style={{ height: 25, width: 25, color: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>

                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >S</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >5</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >12</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >19</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} >26</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>

                                        <Text style={{ color: "white", fontWeight: "bold" }} ></Text>
                                        <View style={{ height: 25, width: 25, color: "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                </View>

                            </>
                        ) : (

                            <>
                                {/* Half calender */}
                                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingHorizontal: 20, marginTop: 15, marginBottom: 0 }} >
                                    
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >S</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >13</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>

                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", }} >M</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >14</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >15</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >W</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >16</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >17</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >F</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >18</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>

                                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >S</Text>
                                        <Text style={{ color: "white", fontWeight: "bold" }} >19</Text>
                                        <View style={{ height: 25, width: 25, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 20, alignSelf: "center", marginTop: 5, marginBottom: 10 }} ></View>
                                    </View>
                                </View>

                            </>
                        )}



                    </View>

                    <TouchableOpacity onPress={handleToggle} style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingTop: 10, paddingRight: 15, }}>
                        {open ? <Text style={{ fontWeight: "500", color: "white" }} >Show Less</Text> : <Text style={{ fontWeight: "500", color: "white" }} >Show More</Text>}
                        {open ? <Entypo name="chevron-up" size={26} color="white" /> : <Entypo name="chevron-down" size={26} color="white" />}
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ flex: 1, borderTopRightRadius: 50, }}>
                <View style={{ backgroundColor: '#85BDAF', width: width, ...StyleSheet.absoluteFillObject }}>

                </View>


                <ScrollView style={{ flex: 1, backgroundColor: 'white', width: width, borderTopRightRadius: 50 }}>
                    <View style={{ height: height * 0.28, marginTop: 30, marginHorizontal: 15 }}>
                        <Text style={{ color: 'gray', fontSize: 16, marginBottom: 10, marginLeft: 20 }} >TODAY</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={styles.donutWrapper}>
                                <View style={{ position: "absolute", top: 40 }}>
                                    <Donut radius={45} color={"#143029"} />
                                    <Text style={styles.text}>50</Text>
                                </View>

                                <View style={{ position: "absolute", top: 30 }}>
                                    <Donut radius={55} color={"#85BDAF"} />
                                </View>

                                <View style={{ position: "absolute", top: 20 }}>
                                    <Donut radius={65} color={"#BCD9D1"} />
                                </View>
                                <View style={{ position: "absolute", top: 10 }}>
                                    <Donut radius={75} color={"#E3A89F"} />
                                </View>

                                <View style={{ position: "absolute", top: 0 }}>
                                    <Donut radius={85} color={"#F6E9E7"} />
                                </View>
                            </View>

                            <View style={{ flexDirection: "column", justifyContent: 'flex-end', flex: 1 }}>
                                <View style={{ flexDirection: "row", marginLeft: "40%", justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: "#F6E9E7", borderRadius: 5 }} ></View>
                                    <Text style={{ marginLeft: 10, fontSize: 13 }} >Mental Health</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: "37%", justifyContent: "center", alignItems: "center", marginTop: 6 }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: "#E3A89F", borderRadius: 5 }} ></View>
                                    <Text style={{ marginLeft: 10, fontSize: 13 }} >Satisfaction</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: "53%", justifyContent: "center", alignItems: "center", marginTop: 6 }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: "#BCD9D1", borderRadius: 5 }} ></View>
                                    <Text style={{ marginLeft: 10, fontSize: 13 }} >Family/Social Support</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: "25%", justifyContent: "center", alignItems: "center", marginTop: 6 }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: "#85BDAF", borderRadius: 5 }} ></View>
                                    <Text style={{ marginLeft: 10, fontSize: 13 }} >Work</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: "45%", justifyContent: "center", alignItems: "center", marginTop: 6 }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: "#143029", borderRadius: 5 }} ></View>
                                    <Text style={{ marginLeft: 10, fontSize: 13 }} >Sense of Purpose</Text>
                                </View>


                                <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{ marginLeft: '75%', paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontWeight: "500", color: "gray" }} >More</Text>
                                    <Entypo name="chevron-right" size={25} color="#C4C4C4" />
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                    <View style={{ height: height * 0.28, marginTop: 10, marginHorizontal: 30 }}>
                        <Text style={{ color: 'gray', fontSize: 16, marginBottom: 20, marginLeft: 20 }} >Your wellness plan</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                            <ImageBackground
                                style={{ height: 170, width: width / 3.3, alignSelf: "center" }}
                                imageStyle={{ borderRadius: 20, }}
                                source={{
                                    uri: 'https://www.timedoctor.com/blog/images/2020/04/Remote-One-on-One-Meetings.png',
                                }}
                            >
                                <View style={{ position: "absolute", backgroundColor: "#53A08C", opacity: 0.6, height: 50, width: width / 3.3, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 0 }} >
                                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", marginTop: 5 }} >Sunhera A.</Text>
                                    <Text style={{ textAlign: "center", color: "white", fontSize: 8, fontWeight: "bold" }} >Shamiri licensed Counselor</Text>
                                </View>

                            </ImageBackground>

                            <ImageBackground
                                style={{ height: 170, width: width / 3.3, alignSelf: "center" }}
                                imageStyle={{ borderRadius: 20, }}
                                source={{
                                    uri: 'https://www.timedoctor.com/blog/images/2020/04/Remote-One-on-One-Meetings.png',
                                }}
                            >
                                <View style={{ position: "absolute", backgroundColor: "#53A08C", opacity: 0.6, height: 50, width: width / 3.3, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 0 }} >
                                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", marginTop: 5 }} >Veronica N.</Text>
                                    <Text style={{ textAlign: "center", color: "white", fontSize: 8, fontWeight: "bold" }} >Shamiri licensed Counselor</Text>
                                </View>

                            </ImageBackground>

                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
                                <Text style={{ fontWeight: "500", color: "gray", marginBottom: 5 }} >More</Text>
                                <Entypo name="chevron-right" size={25} color="#C4C4C4" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

export default PersonalDashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    donutWrapper: {
        //alignSelf: "center",
        alignItems: "center",
        position: "absolute",
        left: 90,
        flex: 1
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 42,
        top: 15,
        left: 20,
        color: "black",
    },
});

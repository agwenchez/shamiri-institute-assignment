import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import Svg, { Circle, G } from 'react-native-svg'

const Donut = ({
    percentage = 75,
    radius ,
    strokeWidth = 10,
    duration = 500,
    delay = 0,
    max = 100,
    textColor,
    color
}) => {

    const halfCircle = radius + strokeWidth
    const circleCircumference = 2 * Math.PI * radius
    return (
        <View>
            <Svg 
                width={radius * 2} 
                height={radius * 2} 
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <G rotation={-180} origin={`${halfCircle}, ${halfCircle}`} >
                    <Circle
                        cy="50%"
                        cx="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.3}
                    />

                     <Circle
                        cy="50%"
                        cx="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference/2}
                        strokeLinecap="square"
                    />
                    
                </G>
            </Svg>
        </View>
    )
}

export default Donut

const styles = StyleSheet.create({})
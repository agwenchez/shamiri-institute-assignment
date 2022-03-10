import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from 'victory-native'


const data = [
    {day:"S", output:6}, 
    {day:"M", output:7}, 
    {day:"T", output:5},
    {day:"W", output:8},
    {day:"T", output:6},
    {day:"F", output:7},
    {day:"S", output:7}
]

const BarChart = ({height, width}) => {
  return (
    <>
      <VictoryChart domainPadding={{ x: 20, }} height={height} width={width} theme={VictoryTheme.material} >
          <VictoryGroup  >
              <VictoryBar 
                data={data}
                x="day"
                y="output"
                style={{
                    data:{
                        fill:"#F6E9E7"
                    }
                }}
                animate={{
                    onExit: {
                      duration: 500,
                      before: () => ({
                        _y: 0,
                        fill: "#F6E9E7",
                        //label: "BYE"
                      })
                    }
                  }}
              />
              
          </VictoryGroup>
      </VictoryChart>
    </>
  )
}

export default BarChart

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
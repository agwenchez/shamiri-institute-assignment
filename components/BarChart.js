import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from 'victory-native'


const data = [
    {x:"S", y:6}, 
    {x:"M", y:7}, 
    {x:"T", y:5},
    {x:"W", y:8},
    {x:"T", y:6},
    {x:"F", y:7},
    {x:"S", y:7}
]

const BarChart = ({height, width}) => {
  return (
    <View>
      <VictoryChart domainPadding={{ x: 20, }} height={height} width={width}  theme={VictoryTheme.material}>
          <VictoryGroup  >
              <VictoryBar 
                data={data}
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
    </View>
  )
}

export default BarChart

const styles = StyleSheet.create({})
import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { searchStyles } from '../styles/searchStyle'

const ListItem = ({item, deleteItem}) => {
    return (
        <View style={searchStyles.itemOut}>
            <View style={searchStyles.itemIn}>
                <View style={{ width: '45%' }}>
                    <Text style={searchStyles.countryText}>{item.country}</Text>
                    <Text style={searchStyles.confirmText}>Current: {item.current}</Text>
                </View>

                <View style={{ width: '45%' }}>
                    <Text style={searchStyles.recoveredText}>Recovered: {item.recovered}</Text>
                    <Text style={searchStyles.deathsText}>Deaths: {item.deaths}</Text>
                </View>
                <View style={{ width: '10%', justifyContent: 'center' }}>
                    <MaterialIcons name='delete' size={24} color='darkgray' onPress={() => deleteItem(item)} />
                </View>
            </View>

            <View style={searchStyles.horizontalSeperator}></View>
        </View>
    )
}

export default ListItem

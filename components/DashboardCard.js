import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from '../styles/homeStyle'

const DashboardCard = ({ textColor, num, name }) => {
    return (
        <View style={homeStyles.infoCard}>
            <Text style={{ ...homeStyles.upCardText, color: textColor }}>{num}</Text>
            <Text style={homeStyles.downCardText}>{name}</Text>
        </View>
    )
}

export default DashboardCard

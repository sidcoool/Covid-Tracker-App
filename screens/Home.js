import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { homeStyles } from '../styles/homeStyle'
import axios from 'axios'
import DashboardCard from '../components/DashboardCard'
import convertNum from '../functions/convertNum'

const Home = () => {

    const [dasboard, setDasboard] = useState({})

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/all").then((res) => {
            // console.log(res.data)
            setDasboard(res.data)
            
        })
    }, [])


    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.top}>
                <Text style={homeStyles.topText}>Dashboard</Text>
                <View style={homeStyles.topBox}>
                    <View style={homeStyles.insideTopBoxView}>
                        <Image source={require('../assets/world_flag.png')} style={homeStyles.flagImg}></Image>
                    </View>

                    <View style={{ ...homeStyles.insideTopBoxView, padding: 20 }}>
                        <Text style={homeStyles.worldText}>
                            World
                        </Text>
                        <Text> Total Cases: {convertNum(dasboard.cases)} </Text>
                    </View>
                </View>
            </View>

            <View style={homeStyles.bottom}>
                <ScrollView style={homeStyles.infoView}>
                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='orange' num={convertNum(dasboard.todayCases)} name='Cases Today'></DashboardCard>
                        <DashboardCard textColor='orange' num={convertNum(dasboard.cases)} name='Total Cases'></DashboardCard>

                    </View>

                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='red' num={convertNum(dasboard.todayDeaths)} name='Deaths Today'></DashboardCard>
                        <DashboardCard textColor='red' num={convertNum(dasboard.deaths)} name='Total Deaths'></DashboardCard>
                    </View>

                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='green' num={convertNum(dasboard.todayRecovered)} name='Recovered Today'></DashboardCard>
                        <DashboardCard textColor='green' num={convertNum(dasboard.recovered)} name='Total Recovered'></DashboardCard>
                    </View>

                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='red' num={convertNum(dasboard.active)} name='Active Cases'></DashboardCard>
                        <DashboardCard textColor='red' num={convertNum(dasboard.critical)} name='Critical Cases'></DashboardCard>
                    </View>

                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='orange' num={convertNum(dasboard.casesPerOneMillion)} name='Cases/Million'></DashboardCard>
                        <DashboardCard textColor='red' num={convertNum(dasboard.deathsPerOneMillion)} name='Deaths/Million'></DashboardCard>
                    </View>

                    <View style={homeStyles.infoViewRow}>
                        <DashboardCard textColor='red' num={convertNum(dasboard.activePerOneMillion)} name='Active/Million'></DashboardCard>
                        <DashboardCard textColor='green' num={convertNum(dasboard.recoveredPerOneMillion)} name='Recovered/Million'></DashboardCard>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home



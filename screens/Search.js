import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, FlatList, TouchableNativeFeedback, Button } from 'react-native'
import axios from 'axios'
import { MaterialIcons } from '@expo/vector-icons'
import { searchStyles } from '../styles/searchStyle'
import ListItem from '../components/ListItem'
import convertNum from '../functions/convertNum'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Search = () => {

    const [list, setList] = useState([
        // { key: '1', country: "India", current: '20292', recovered: '222', deaths: '867' },
    ])

    useEffect(() => {
        AsyncStorage.getItem('countries').then((value) => {
            if (value !== null) {
                // console.log(value)
                axios.get(`https://corona.lmao.ninja/v2/countries/${value}`).then((res) => {
                    // console.log(Array.isArray(res.data))

                    setList((prevList) => {

                        if (Array.isArray(res.data))
                            return (
                                res.data.map((item, i) => {
                                    return {
                                        key: (i + 1).toString(),
                                        country: item.country,
                                        current: convertNum(item.cases),
                                        recovered: convertNum(item.recovered),
                                        deaths: convertNum(item.deaths),
                                    }
                                })
                            )
                        else
                            return (
                                [{
                                    key: (1).toString(),
                                    country: res.data.country,
                                    current: convertNum(res.data.cases),
                                    recovered: convertNum(res.data.recovered),
                                    deaths: convertNum(res.data.deaths),
                                }])
                    })
                }).catch((e) => console.log(e))
            }
        }).catch((e) => console.log(e))    

    }, [])




const [searchText, setSearchText] = useState('')



const fetchList = async () => {
    // console.log(searchText)

    if (searchText)
        axios.get(`https://corona.lmao.ninja/v2/countries/${searchText}?yesterday&query`).then(async (res) => {

            res = res.data

            try {
                let value = await AsyncStorage.getItem('countries')
                if (value !== null) {
                    value = value + res.country + ','
                }
                else {
                    value = res.country + ','
                }
                // console.log(value)
                try {
                    await AsyncStorage.setItem('countries', value)
                } catch (e) {
                    // saving error
                    console.log(e)
                }

            } catch (e) {
                // error reading value
                console.log(e)
            }

            setList((prevList) => {
                // console.log(res.data.name)
                // console.log(res.country, res.cases, res.recovered, res.deaths)

                return (
                    [...prevList,
                    {
                        key: (prevList.length + 1).toString(),
                        country: res.country,
                        current: convertNum(res.cases),
                        recovered: convertNum(res.recovered),
                        deaths: convertNum(res.deaths),
                    }
                    ])
            })

            setSearchText('')
        }).catch((err) => {
            alert("Check country name !")
        })
}

const deleteItem = async (deleteItem) => {
    setList((pItem) => pItem.filter((item) => {
        return item.key != deleteItem.key
    }))

    try {
        let value = await AsyncStorage.getItem('countries')
        if (value !== null) {
            let countries = value.split(',')
            countries = countries.filter((item) => {
                return item != deleteItem.country
            })

            value = countries.join()
            // console.log(value)

            try {
                await AsyncStorage.setItem('countries', value)
            } catch (e) {
                // saving error
                console.log(e)
            }
        }

    } catch (e) {
        // error reading value
        console.log(e)
    }

}

// const clicked = async () => {
//     try {
//         await AsyncStorage.removeItem('countries')
//     } catch (e) {
//         // saving error
//         console.log(e)
//     }
// }


return (
    <View style={searchStyles.container}>
        <View style={searchStyles.top}>
            <Text style={searchStyles.topText}>Search Here...</Text>

            <View style={searchStyles.searchView}>
                <TextInput style={searchStyles.topInput} value={searchText} placeholder="Eg: India or IN" onChangeText={(text) => setSearchText(text)}>

                </TextInput>
                <TouchableNativeFeedback
                    onPress={fetchList}
                    background={TouchableNativeFeedback.Ripple('#afb0ae', false)}
                >
                    <View style={searchStyles.searchIcon}>
                        <MaterialIcons name='search' size={20} color='#8e8f8d'></MaterialIcons>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>

        <View style={searchStyles.bottom}>
            {/* <View style={{ marginTop: 60 }}> */}
                {/* <Button title='Click' onPress={clicked}></Button> */}
                {/* <Button title='Click2' color='orange' onPress={clicked2}></Button> */}

            {/* </View> */}
            <FlatList
                data={list}
                style={searchStyles.flatList}
                renderItem={({ item }) => {
                    return (
                        <ListItem item={item} deleteItem={deleteItem}> </ListItem>
                    )
                }}
            >
            </FlatList>
        </View>
    </View>
)
            }


export default Search

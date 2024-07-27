import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useRef} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

const SearchBar = () => (

    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons name="search" size={24} color="gray" />
                <TextInput style={styles.input} placeholder="Restaurants, groceries, dishes..."></TextInput>
            </View>

            <TouchableOpacity style={styles.optionsButton}>
                <Ionicons name="options-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>


        </View>

    </View>

)

const CustomHeader = () => {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.bike} source={require('@/assets/images/bike.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>Delivery . Now</Text>
                <View style={styles.locationName}>
                    <Text style={styles.subtitle}>Berlin</Text>
                    <Ionicons name="chevron-down" size={20} color={Colors.primary} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name="person-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>
        </View> 
        <SearchBar/>        


    </SafeAreaView>    
    </>
)
}


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:21
      },
      container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      bike: {
        width: 30,
        height: 30,
      },
      titleContainer: {
        flex: 1,
      },
      title: {
        fontSize: 14,
        color: Colors.medium,
      },
      locationName: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      profileButton:{
        backgroundColor:Colors.grey,
        padding:10,
        borderRadius:50,
      },
      searchContainer:{
        height:60,
        backgroundColor:'#fff'
      },
      searchSection:{
        flexDirection:'row',
        gap:10,
        flex:1,
        paddingHorizontal:20,
        alignItems:'center'
      },
      searchField: {
        flex:1,
        backgroundColor:Colors.lightGray,
        borderRadius:9,
        flexDirection:'row',
        alignItems:'center'
      },
      input:{
        padding:10,
        color:Colors.mediumDark
      },
      searchIcon:{
        paddingLeft:10
      },
      optionsButton:{
        padding:10,
        borderRadius:50
      }















})



export default CustomHeader
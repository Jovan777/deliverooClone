import { View, Text, TouchableOpacity, StyleSheet, Image, SectionList, ListRenderItem, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxScrollView from './../components/ParallaxScrollView'
import { Link, useNavigation } from 'expo-router'
import {Colors} from './../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { restaurant } from '@/assets/data/restaurant'




const Details = () => {


    const DATA = restaurant.food.map((item, index)=>({
        title:item.category,
        data:item.meals,
        index
    }))
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: Colors.primary, 
            headerLeft:()=>(
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.roundButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.primary} />
                </TouchableOpacity>
            ),
            headerRight:()=>(
                <View style={styles.bar}>
                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="share-outline" size={24} color={Colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="search-outline" size={24} color={Colors.primary} />
                    </TouchableOpacity>
                </View>

            )
        })
    }, []);


    const renderItem: ListRenderItem<any> = ({item, index})=>(
        <Link href={'/'} asChild>
            <TouchableOpacity style={styles.item}>
                <View style={{flex:1}}>
                    <Text style={styles.dish}>{item.name}</Text>
                    <Text style={styles.dishText}>{item.info}</Text>
                    <Text style={styles.dishText}>${item.price}</Text>
                </View>
                <Image source={item.img} style={styles.dishImage}></Image>
            </TouchableOpacity>
        </Link>



    )

  return (
    <>
    <ParallaxScrollView 
        backgroundColor={'#fff'} 
        style={{flex: 1}} 
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={()=>(
            <Image source={restaurant.img} style={{height:300, width:'100%'}}/>
        )}
        contentBackgroungColor={Colors.lightGrey}
        renderStickyHeader={()=>(
            <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{restaurant.name}</Text>
            </View>
        )}
    >

        <View style={styles.detailsContainer}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantDescription}>
            {restaurant.delivery} · {restaurant.tags.map((tag, index) => `${tag}${index < restaurant.tags.length - 1 ? ' · ' : ''}`)}
            </Text>
            <Text style={styles.restaurantDescription}>
                {restaurant.about}
            </Text>
            <SectionList
            contentContainerStyle ={{paddingBottom:50}}
            sections={DATA}
            keyExtractor={(item, index)=>`${item.id+index}`}
            scrollEnabled={false}
            renderItem={renderItem}
            ItemSeparatorComponent={()=> <View 
                style={{marginHorizontal:15, height:1, backgroundColor:Colors.grey}}
            />}
            SectionSeparatorComponent={()=><View style={{height:1, backgroundColor:Colors.grey}}/>}
            renderSectionHeader={({section: {title, index}})=><Text style={styles.sectionHeader}>{title}</Text>}
            
            />



        </View>
    </ParallaxScrollView>


    {/* Sticky Segment */}

    </>
  )
}

const styles=StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
      },
      stickySection: {
        backgroundColor: '#fff',
        marginLeft: 70,
        height: 100,
        justifyContent: 'flex-end',
      },
      roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      },
      stickySectionText: {
        fontSize: 20,
        margin: 10,
      },
      restaurantName: {
        fontSize: 30,
        margin: 16,
      },
      restaurantDescription: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,
        color: Colors.medium,
      },
      sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        margin: 16,
      },
      item:{
        backgroundColor: "#fff",
        padding:15,
        flexDirection: 'row'
      },
      dishImage:{
        height:80, 
        width:80,
        borderRadius:5
      },
      dish:{
        fontSize:15,
        fontWeight:'bold'
      },
      dishText:{
        fontSize:15,
        color:Colors.mediumDark,
        paddingVertical:4
      }



})

export default Details
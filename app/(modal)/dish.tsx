import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getDishById } from '@/assets/data/restaurant';
import {Colors} from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import useBasketStore from '@/store/basketStore';

const Dish = () => {

    const { id } = useLocalSearchParams();
    const item = getDishById(+id)!;
    const router = useRouter()

    const {addProduct} = useBasketStore()

    const addToCart = () => {
        addProduct(item)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        router.back()
    }


  return (

    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}} edges={['bottom']}>
        <View style={styles.container}>
            <Animated.Image entering={FadeIn.duration(400).delay(200)}
            source={item?.img} style={styles.image}
            />
            <View style={{padding:21}}>
                <Animated.Text entering={FadeInLeft.duration(400).delay(200)} style={styles.dishName}>
                    {item?.name}
                </Animated.Text>
                <Animated.Text entering={FadeInLeft.duration(400).delay(200)} style={styles.dishInfo}>
                    {item?.info}
                </Animated.Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.fullButton} onPress={addToCart}>
                    <Text style={styles.footerText}>Add for ${item?.price}</Text>
                </TouchableOpacity>

            </View>

        </View>

    </SafeAreaView>


  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }, 
    image:{
        width:'100%',
        height:300
    }, 
    dishName:{
        fontSize:24, 
        fontWeight:'bold',
        marginBottom:9
    },
    dishInfo:{
        fontSize:15, 
        color:Colors.mediumDark
    },
    footer:{
        position:"absolute",
        backgroundColor:'#fff',
        bottom:0,
        left:0,
        width:'100%',
        padding:10,
        elevation:10,
        shadowColor:"#000",
        shadowOffset:{width:0, height:-10},
        shadowOpacity:0.1,
        shadowRadius:10,
        paddingTop:21
    },
    fullButton:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:9,
        alignItems:'center'
    },
    footerText:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:15
    }



})

export default Dish
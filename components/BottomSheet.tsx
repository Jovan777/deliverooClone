import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../constants/Colors'


export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
  const { dismiss } = useBottomSheetModal(); 
  
  return (
    <BottomSheetModal 
        ref={ref} 
        snapPoints={snapPoints}
        handleIndicatorStyle={{display:'none'}}
        backgroundStyle={{backgroundColor:Colors.lightGrey}}
        overDragResistanceFactor={0}
        backdropComponent={renderBackdrop}
        >
      <View style={styles.contentContainer}>

        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>
              Pickup
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.subheader}>Your Location</Text>
        <Link href={'/(modal)/location-search'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="location-outline" size={20} color={Colors.medium} />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
            <Text style={{flex:1}}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>




      </View>
    </BottomSheetModal>


  )
})

const styles=StyleSheet.create({

  contentContainer:{
    flex:1,
  },
  toggle:{
    flexDirection:'row',
    justifyContent:'center',
    gap:10,
    marginBottom:32
  },
  toggleActive:{
    backgroundColor:Colors.primary,
    padding:8,
    borderRadius:33,
    paddingHorizontal:30

  },
  toggleInactive:{
    padding:8,
    borderRadius:33,
    paddingHorizontal:30
  },
  activeText:{
    color:"#fff",
    fontWeight:'700',
  },
  inactiveText:{
    color:Colors.primary

  },
  subheader:{
    fontSize:18,
    fontWeight:'600',
    margin:15
  },
  item:{
    flexDirection:"row",
    gap:8,
    alignItems:'center',
    backgroundColor:Colors.grey,
    padding:15,
    borderColor:Colors.mediumDark,

  },
  button:{
    backgroundColor:Colors.primary,
    padding:15,
    margin:15,
    borderRadius:6,
    alignItems:"center"
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold'
  }




})


export default BottomSheet
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
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <View>
        <Text>Bottom Sheet</Text>
      </View>
    </BottomSheetModal>


  )
})


export default BottomSheet
import { useRouter } from 'expo-router';
import  React,{useEffect, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Page() {
    const [code, setCode] = useState<number[]>([]);
    const codeLength = Array(6).fill(0);
    const router = useRouter();

    useEffect(() => {
        if(code.length === 6){
            // Add to do here!!
        }
    },[code])

    const onNumbersPress = (number: number) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setCode([...code, number]);
    }

    const onumberBackSpace = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setCode(code.slice(0, -1));
    }

    const onBiometricPress = () => {};

    return (
        <SafeAreaView>
           <Text style={styles.greetings}>Welcome back, William</Text>
           <View style={styles.codeView}>
            {codeLength.map((_, index) => (
                <View key={index} style={[styles.codeEmpty,
                    {
                       backgroundColor: code[index] ? '#3D38ED' : '#D8DCE2' 
                    }
                ]}>

                </View>
            ))}
           </View>

           <View style={styles.numbersView}>
            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                {[1, 2, 3].map((number)=> (
                    <TouchableOpacity key={number} onPress={()=> onNumbersPress(number)}>
                        <Text style={styles.number}>
                        {number}
                        </Text>
                    </TouchableOpacity>
                    
                ))}
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                {[4, 5, 6].map((number)=> (
                    <TouchableOpacity key={number} onPress={()=> onNumbersPress(number)}>
                        <Text style={styles.number}>
                        {number}
                        </Text>
                    </TouchableOpacity>
                    
                ))}
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                {[7, 8, 9].map((number)=> (
                    <TouchableOpacity key={number} onPress={()=> onNumbersPress(number)}>
                        <Text style={styles.number}>
                        {number}
                        </Text>
                    </TouchableOpacity>
                    
                ))}
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between', 
                alignItems:'center'
            }}>
                <TouchableOpacity onPress={onBiometricPress}>
                    <MaterialCommunityIcons name='face-recognition' size={26} color='black'/>
                </TouchableOpacity>
            </View>
           </View>
  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    greetings: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        alignSelf:'center'
    },
    codeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginVertical: 100
    },
    codeEmpty: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    numbersView: {
        marginHorizontal: 80,
        gap: 60,
    },
    number: {
        fontSize: 32
    }
})


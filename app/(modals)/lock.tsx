import { useRouter } from 'expo-router';
import  React,{useEffect, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';


export default function Page() {
    const [code, setCode] = useState<number[]>([]);
    const codeLength = Array(6).fill(0);
    const router = useRouter();

    useEffect(() => {
        if(code.length === 6){
            // Add to do here!!
        }
    },[code])

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
  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    greetings: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80,
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


import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function FavouritesScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favourited Poems</Text>
            <Text>Initial version of favorite poems page.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'bold', 
    },

});
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Switch } from 'react-native'

const HomeScreen = () => {
    const [mode, setMode] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>

            <Switch value={mode} onValueChange={() => setMode((value) => !value)} />

            <View style={styles.button}>
                <Button title='View Profile' />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20,
    },
    button: {
        paddingTop: 20,
    },
})

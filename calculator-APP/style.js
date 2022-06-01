import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 25,
    },
    input: {
        backgroundColor: '#000',
        margin: 10,
        borderWidth: 1,
        borderColor: '#a4a4a4',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        color: '#fff',
        fontSize: 23, 
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#41aef4',
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
    }
})
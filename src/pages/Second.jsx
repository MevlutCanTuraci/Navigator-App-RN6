import { SafeAreaView, Text, StyleSheet, Button } from "react-native"

const Second = ({navigation, route}) => {

    const { userName } = route.params;

    const handleBackToFirstPage = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>
                Hello Second Page!
            </Text>

            <Text>
                Hi, {userName}
            </Text>

            <Button title = "Go to back"  onPress={handleBackToFirstPage}/>

        </SafeAreaView>
    )

}

export default Second;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 35,
        fontWeight: 'bold',
    }
});
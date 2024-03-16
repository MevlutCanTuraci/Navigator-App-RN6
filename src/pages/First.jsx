import { SafeAreaView, StyleSheet, Text, Button } from "react-native"

const First = ({navigation}) => {

    const handleNavigateToPage = () => {
        navigation.navigate("SecondScreen", {
            userName: "Mevlüt Can"
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello First Page!
            </Text>

            <Button title = "Go to second page"  onPress={handleNavigateToPage}/>

        </SafeAreaView>
    )

}

export default First;

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
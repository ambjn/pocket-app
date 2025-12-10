import { COLORS } from '@/utils/Colors'
import { Image, StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native-keyboard-controller'

const Page = () => {
    // return <Redirect href={'/(tabs)/(saves)'} />
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image source={require('@/assets/images/pocket-logo.png')} style={styles.logoIcon} />
                </View>
                <Text style={styles.title}>Log In</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        paddingTop: 80,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 30
    },
    logoIcon: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.textDark,
    },
})

export default Page
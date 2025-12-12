import { COLORS } from '@/utils/Colors';
import { useSSO } from '@clerk/clerk-expo';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

const Page = () => {
    const { startSSOFlow } = useSSO();

    const openLink = () => {
        WebBrowser.openBrowserAsync('https://www.google.com');
    };

    const handleSocialLogin = async (strategy: 'oauth_google' | 'oauth_apple') => {
        try {
            // Start the authentication process by calling `startSSOFlow()`
            const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
                strategy: strategy,
            })

            if (createdSessionId) {
                setActive!({
                    session: createdSessionId,
                    navigate: async ({ session }) => {
                        // router.replace('/(tabs)/(home)');
                    },
                })
            } else {
                // If there is no `createdSessionId`,
                // there are missing requirements, such as MFA
            }
        } catch (err) {
            // See https://clerk.com/docs/guides/development/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2))
        }
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={400}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image source={require('@/assets/images/pocket-logo.png')} style={styles.logoIcon} />
                </View>
                <Text style={styles.title}>Log In</Text>
            </View>

            {/* Button */}
            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button}
                    onPress={() => handleSocialLogin("oauth_apple")}>
                    <AntDesign name="apple" size={20} color="#000" />
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => handleSocialLogin("oauth_google")}>
                    <AntDesign name="google" size={24} color="#000" />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
            {/* Divider */}
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>
            {/* Email */}
            <View style={styles.emailSection}>
                <TextInput
                    placeholder="Email"
                    style={styles.emailInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.nextButton}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                <Link href={'/(tabs)/(home)'} asChild replace>
                    <TouchableOpacity style={{ marginTop: 16, alignSelf: 'center' }}
                    >
                        <Text style={{ color: '#4A90E2', fontWeight: 'bold' }}>Skip for now</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            {/* Legal */}
            <View style={styles.footer}>
                <Text style={styles.termsText}>
                    By proceeding, you agree to:{'\n'}
                    Pocket's{' '}
                    <Text style={styles.link} onPress={() => openLink()}>
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={() => openLink()}>
                        Privacy Notice
                    </Text>
                    .{'\n'}
                    Mozilla Accounts{' '}
                    <Text style={styles.link} onPress={() => openLink()}>
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={() => openLink()}>
                        Privacy Notice
                    </Text>
                    .
                </Text>
                <Button
                    title="Test Sentry"
                    onPress={() => { }}
                />
            </View>
        </KeyboardAvoidingView >
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
    buttonSection: {
        gap: 12,
    },
    button: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        borderColor: COLORS.border,
    },
    buttonText: {
        fontSize: 16,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
        gap: 8
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    orText: {
        color: COLORS.textLight,
        fontSize: 14
    },
    emailSection: {
        marginBottom: 30,
    },
    emailInput: {
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
    },
    nextButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 20,
    },
    termsText: {
        fontSize: 12,
        color: COLORS.textGray,
        textAlign: 'center',
        lineHeight: 18,
    },
    link: {
        color: COLORS.primary,
        textDecorationLine: 'underline',
    },
})

export default Page
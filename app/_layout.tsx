import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from 'expo-router';
import { KeyboardProvider } from "react-native-keyboard-controller";

const RootStack = () => {
    const { isSignedIn } = useAuth();
    return (
        <Stack>
            <Stack.Protected guard={!isSignedIn}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}

const RootLayout = () => {
    return (
        <ClerkProvider tokenCache={tokenCache}>
            <ClerkLoaded>
                <KeyboardProvider>
                    <RootStack />
                </KeyboardProvider>
            </ClerkLoaded>
        </ClerkProvider>
    )
}

export default RootLayout
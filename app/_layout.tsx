import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

import { Stack } from 'expo-router';
import { KeyboardProvider } from "react-native-keyboard-controller";

const RootLayout = () => {
    return (
        <ClerkProvider tokenCache={tokenCache}>
            <ClerkLoaded>
                <KeyboardProvider>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    </Stack>
                </KeyboardProvider>
            </ClerkLoaded>
        </ClerkProvider>
    )
}

export default RootLayout
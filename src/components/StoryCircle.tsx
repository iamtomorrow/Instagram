import { View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme"

export const StoryCircle = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <LinearGradient colors={["#0044F4", "#5200FF"]} 
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                padding: 2,
                marginLeft: 6,
                marginRight: 6,
            }}>
            <View style={{
                width: "100%",
                height: "100%",
                borderRadius: 50,
                backgroundColor: theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor
            }}>
                
            </View>
        </LinearGradient>

        /* <View style={{
            width: 100,
            height: 100,
            padding: 20,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "blue",
            marginLeft: 10,
            marginRight: 10,
        }}>
            <View style={{
                width: "100%",
                height: "100%",
            }}>

            </View>
        </View> */
    )
}
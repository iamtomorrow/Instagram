
import { MaterialIcons } from "@expo/vector-icons"
import { useContext } from "react"
import { Pressable, View, Image } from "react-native"
import { ThemeContext } from "../../contexts/ThemeContext"
import { StatusBar } from "react-native"
import { Theme } from "../../theme/theme"

export const Header = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View style={{
            marginTop: StatusBar.currentHeight,
            width: "100%",
            height: 70,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor,
        }}>
            <Pressable style={{
                width: 38,
                height: 38,
                borderRadius: 20,
                // backgroundColor: "green",
                padding: 6,
            }}>
                <MaterialIcons 
                    name="camera-alt" 
                    size={26}
                    color={ theme === "dark-mode" ? Theme.darkTheme.primary.iconColor : Theme.lightTheme.primary.iconColor} />
            </Pressable>

            <View style={{
                width: "60%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "yellow"
            }}>
            {
                theme !== "dark-mode"
                ? <Image style={{
                    width: 120,
                    height: 50,
                }} source={require("../../assets/images/logo-light.jpg")} />
                : <Image style={{
                    width: 120,
                    height: 50,
                }}
                source={require("../../assets/images/logo-dark.jpg")} />
            }
            </View>
            <Pressable style={{
                width: 38,
                height: 38,
                borderRadius: 20,
                // backgroundColor: "green",
                padding: 6,
            }}>
                <MaterialIcons 
                    name="send" 
                    size={26}
                    color={ theme === "dark-mode" ? Theme.darkTheme.primary.iconColor : Theme.lightTheme.primary.iconColor} />
            </Pressable>
        </View>
    )
}
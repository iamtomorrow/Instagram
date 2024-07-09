import { View, Text } from "react-native"
import { Header } from "../components/Header"
import { CustomBar } from "../components/CustomBar"
import { Theme } from "../../theme/theme"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export const Reels = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            // backgroundColor: "red"
            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor,
        }}>
            <Header />
            <Text>Search</Text>

            <CustomBar />
        </View>
    )
}
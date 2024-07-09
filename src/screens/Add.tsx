import { View, Text } from "react-native"
import { Theme } from "../../theme/theme"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { CustomBar } from "../components/CustomBar"

export const Add = ( ) => {
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
            <Text>Add</Text>

            <CustomBar />
        </View>
    )
}
import { useContext } from "react"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NavigationContext } from "../../contexts/NavigationContext";
import { MaterialIcons } from "@expo/vector-icons";
import { TabButton } from "./TabButton";

interface CustomBarProps {
    route: string,
    icon: any
}

const router = [
    { route: "Home", icon: "home" },
    { route: "Search", icon: "search" },
    { route: "Add", icon: "add" },
    { route: "Reels", icon: "smart-display" },
    { route: "Account", icon: "person" },
]

export const CustomBar = () => {
    const { theme } = useContext( ThemeContext );

    return (
        <View style={{
            width: "96%",
            height: 70,
            borderRadius: 35,
            position: "absolute",
            bottom: 16,
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "space-around",
            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.secondary.backgroundColor : Theme.lightTheme.secondary.backgroundColor,

            elevation: 6,
            shadowRadius: 20,
            shadowOffset: { width: 10, height: 20 },
            shadowColor: "rgba(0, 0, 0, 0.4)",
        }}>
            {
                router.map((item, index) => (
                    <TabButton
                        route={ item.route }
                        iconName={ item.icon }
                    />
                ))
            }
        </View>
    )
}
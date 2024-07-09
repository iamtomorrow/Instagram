import { TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Theme } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { ThemeContext } from "../../contexts/ThemeContext"

interface TabButtonProps {
    route: string,
    iconName: any,
}

export const TabButton = ({ route, iconName }: TabButtonProps ) => {
    const navigation = useNavigation( );
    const NavigationContxt = useContext( NavigationContext );
    const { theme } = useContext( ThemeContext );
    
    const updateContextAndNavigate = ( route: string ) => {
        console.log(route, ">>> ", NavigationContxt?.currentRoute)
        NavigationContxt?.updateRoute( route );
        navigation.navigate({ name: route } as never );
    }

    return (
        <TouchableOpacity 
        key={route}
        onPress={ ( ) => updateContextAndNavigate( route ) }
        style={{
            width:  NavigationContxt?.currentRoute === route ? 90 : 54,
            height: 54,
            borderRadius: 10,
            display: "flex",
            flexDirection: NavigationContxt?.currentRoute === route ? "row" : "column",
            alignItems: "center",
            padding: 6,
            justifyContent:  NavigationContxt?.currentRoute === route ? "space-around" :  "center",
            // backgroundColor: NavigationContxt?.currentRoute === route ? "rgba(0, 0, 0, 0.08)" :  "rgba(0, 0, 0,0)",
        }}>
            <MaterialIcons 
                name={ iconName as any }
                color={ theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }
                size={28}
            />
            <Text style={{
                fontSize: 12,
                color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
            }}>{ route }</Text>
        </TouchableOpacity>
    )
}
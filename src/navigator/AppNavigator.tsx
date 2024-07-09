import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";
import { Theme } from "../../theme/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Preload } from "../screens/Preload";
import { Search } from "../screens/Search";
import { Add } from "../screens/Add";
import { Reels } from "../screens/Reels";
import { Account } from "../screens/Account";

const Stack = createNativeStackNavigator( );
const Tabs = createBottomTabNavigator( );

const HomeStack = ( ) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Preload" component={ Preload }/>
            <Stack.Screen name="Home" component={ Home }/>
            <Stack.Screen name="Login" component={ Login }/>
        </Stack.Navigator>
    )
}

export const AppNavigator = ( ) => {
    const NavigationContxt = useContext( NavigationContext );
    const { theme } = useContext( ThemeContext );

    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 
                    NavigationContxt?.currentRoute === "Login" ||
                    NavigationContxt?.currentRoute === "Preload"
                    ? 0
                    : 0,
                    // backgroundColor: "red",
                    backgroundColor: theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor,
                    borderTopColor: "transparent",
                    paddingBottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                },
                tabBarIcon: ( ) => {
                    let iconName: any;

                    if ( route.name === "Home" ) {
                        iconName = "home";
                    } else if ( route.name === "Login") {
                        iconName = "person"
                    } else if ( route.name === "Search") {
                        iconName = "search"
                    } else if ( route.name === "Add") {
                        iconName = "add"
                    } else if ( route.name === "Account") {
                        iconName = "person"
                    } else if ( route.name === "Reels") {
                        iconName = "smart-display"
                    }

                    return <MaterialIcons 
                        name={ iconName } 
                        color={ theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }
                        size={26} />
                }
            })}>
                <Tabs.Screen 
                    name="HomeStack" 
                    component={ HomeStack } 
                    options={{ tabBarLabelStyle: { fontSize: 0, color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }}} />
                <Tabs.Screen 
                    name="Search" 
                    component={ Search } 
                    options={{ tabBarLabelStyle: { fontSize: 0, color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }}} />
                <Tabs.Screen 
                    name="Add" 
                    component={ Add } 
                    options={{ tabBarLabelStyle: { fontSize: 0, color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }}} />
                <Tabs.Screen 
                    name="Reels" 
                    component={ Reels } 
                    options={{ tabBarLabelStyle: { fontSize: 0, color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }}} />
                <Tabs.Screen 
                    name="Account" 
                    component={ Account } 
                    options={{ tabBarLabelStyle: { fontSize: 0, color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }}} />

                <Tabs.Screen 
                    name="Login" 
                    component={ Login } 
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        }
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

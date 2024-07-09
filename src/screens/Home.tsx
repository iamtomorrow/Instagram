
import { useContext, useEffect } from "react"
import { View, Text, StatusBar } from "react-native"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme"
import { NavigationContext } from "../../contexts/NavigationContext"
import { Header } from "../components/Header"
import { StoriesBar } from "../components/StoriesBar"
import { CustomBar } from "../components/CustomBar"
import { PostGrid } from "../components/PostGrid"
import { ScrollView } from "react-native-gesture-handler"



export const Home = ( ) => {
    const { theme } = useContext( ThemeContext );
    const NavigationContxt = useContext( NavigationContext );

    useEffect(( ) => {
        NavigationContxt?.updateRoute("Home");
        StatusBar.setBackgroundColor(theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor );
        StatusBar.setBarStyle(theme === "dark-mode" ? "light-content" : "dark-content", true);
        StatusBar.setTranslucent(true);
        StatusBar.setHidden(false);
    });

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
            
            <ScrollView style={{
                width: "100%",
                height: "auto"
            }}>
                <StoriesBar />
                <PostGrid />
            </ScrollView>

            <CustomBar />
        </View>
    )
}
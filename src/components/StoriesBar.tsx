import { useContext } from "react"
import { Pressable, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme"
import { StoryCircle } from "./StoryCircle"

export const StoriesBar = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View style={{
            width: "100%",
            height: 160,
            // backgroundColor: "green",
        }}>
            <View style={{
                width: "100%",
                height: 40,
                display:"flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                // backgroundColor: "red"
            }}>
                <Pressable>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: theme === "dark-mode" ? Theme.darkTheme.primary.iconColor : Theme.lightTheme.primary.iconColor
                    }}>Stories</Text>
                </Pressable>
                <Pressable>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: theme === "dark-mode" ? Theme.darkTheme.primary.iconColor : Theme.lightTheme.primary.iconColor
                    }}>Play all</Text>
                </Pressable>
            </View>
            <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
                // backgroundColor:"red",
                padding: 10,
            }}>
                <StoryCircle />
                <StoryCircle />
                <StoryCircle />
                <StoryCircle />
                <StoryCircle />
                <StoryCircle />
                <StoryCircle />

            </ScrollView>
        </View>
    )
}
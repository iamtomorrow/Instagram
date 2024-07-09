import { View, Text, Image, Pressable } from "react-native"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Theme } from "../../theme/theme";
import { MaterialIcons } from "@expo/vector-icons";

export const PostCard = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View style={{
            width: "100%",
            height: "auto",
        }}>
            <View style={{
                width: "100%",
                height: 50,
            }}>
                <Pressable style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 10,
                    // backgroundColor: "blue"
                }}>
                    <Image 
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}
                        source={{ uri: "https://i.pinimg.com/736x/91/f9/aa/91f9aa793a7b8bd0e6cfa11b964f1410.jpg" }} 
                    />
                    <Text style={{
                        fontSize: 18,
                        marginLeft: 10,
                        fontWeight: "600",
                        color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor
                    }}>nasa</Text>
                </Pressable>
            </View>

            <View style={{
                width: "100%",
                height: 500,
            }}>
                <Image 
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    source={{ uri: "https://www.nasa.gov/wp-content/uploads/2022/11/foo-02.jpg?w=1920"}}
                />
            </View>

            <View style={{
                width: "100%",
                height: 60,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // backgroundColor: "violet"
            }}>
                <MaterialIcons
                    style={{
                        marginRight: 6,
                        marginLeft: 6
                    }}
                    name="favorite-border"
                    size={30}
                    color={ theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }
                />
                <MaterialIcons
                    style={{
                        marginRight: 6,
                        marginLeft: 6
                    }}
                    name="chat-bubble-outline"
                    size={30}
                    color={ theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }
                />
                <MaterialIcons
                    style={{
                        marginRight: 6,
                        marginLeft: 6                    
                    }}
                    name="send"
                    size={30}
                    color={ theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor }
                />
            </View>

            <View style={{
                width: "100%",
                height: "auto",
                padding: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    marginLeft: 10,
                    fontWeight: "400",
                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor
                }}>
                NASA's unique mission provides benefits in big and small ways. Dollars spent for space exploration create jobs, jumpstart businesses, and grow the economy. Our innovations improve daily life, advance medical research, support disaster response, and more. We’re constantly evolving and finding new ways to add value.
                NASA's economic impact is nationwide, extending to all 50 states and the District of Columbia.
                </Text>
            </View>
        </View>
    )
}
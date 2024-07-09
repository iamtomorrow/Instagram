
import { View, Text, Image } from "react-native"
import { Header } from "../components/Header"
import { CustomBar } from "../components/CustomBar"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme"
import { MaterialIcons } from "@expo/vector-icons"

export const Account = ( ) => {
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

            <View style={{
                width: "100%",
                height: "100%",
                display: "flex",
                padding: 12,
                flexDirection: "column",
                // backgroundColor: "red"
            }}>
                <View style={{
                    width: "100%",
                    height: "auto",
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 10,
                    borderTopLeftRadius : 20,
                    borderTopRightRadius: 20,
                    backgroundColor: theme === "dark-mode" ? Theme.darkTheme.secondary.backgroundColor : Theme.lightTheme.secondary.backgroundColor,
                    /// backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <View style={{
                        width: "100%",
                        height: 80,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // backgroundColor: "red"
                    }}>
                        <View style={{
                            width: 120,
                            height: 120,
                            borderRadius: 80,
                            // backgroundColor: "green",
                            padding: 10,
                        }}>
                        <Image
                            source={{ uri: "https://i.pinimg.com/736x/91/f9/aa/91f9aa793a7b8bd0e6cfa11b964f1410.jpg" }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 50,
                            }}/>
                        </View>

                        <View style={{
                            width: "70%",
                            height: "50%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            // backgroundColor: "blue",
                            marginTop: 0,
                        }}>
                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 4,
                                flexDirection: "column",
                                // marginLeft: 30
                            }}>
                                <Text style={{
                                    fontSize:  20,
                                    fontWeight: "600",
                                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    2.4k
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    marginLeft: 5,
                                    color: theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    posts
                                </Text>
                            </View>

                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 4,
                                flexDirection: "column",
                                // backgroundColor: "violet"
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: "600",
                                    // backgroundColor: "green",
                                    padding: 0,
                                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    15M
                                    </Text>
                                <Text style={{
                                    marginLeft: 5,
                                    fontSize: 12,
                                    color: theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    followers
                                </Text>
                            </View>

                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 4,
                                flexDirection: "column",
                                // marginLeft: 30
                            }}>
                                <Text style={{
                                    fontSize:  20,
                                    fontWeight: "600",
                                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    452
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    marginLeft: 5,
                                    color: theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.primary.textColor,
                                }}>
                                    following
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        width: "100%",
                        height: "auto",
                        // backgroundColor: "yellow"
                    }}> 
                        <View style={{
                            width: "100%",
                            height: 26,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "red"
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                            }}>NASA</Text>
                        </View>
                        <View style={{
                            width: "100%",
                            height: "auto"
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                            }}>
                            🚀 🌎 Exploring the universe and our home planet. Verification: nasa.gov/socialmedia
                            </Text>
                        </View>
                        <View style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "green",
                        }}> 
                            <MaterialIcons 
                                name="attachment" 
                                size={16} 
                                color={"#0085FF"} 
                                style={{
                                    transform: [{ rotate: "-45deg" }]
                                }}
                            />
                            <Text style={{
                                color: "#0085FF",
                                fontSize: 16,
                                marginLeft: 4,
                            }}>https://www.nasa.gov/</Text>
                        </View>
                    </View>
                    </View>
                </View>
            <CustomBar />
        </View>
    )
}

/*

                            <View style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "50%"
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop: 10,
                                    fontWeight: "500",
                                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                                    }}>Nasa</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.secondary.textColor,
                                }}>@nasa</Text>
                            </View>
*/
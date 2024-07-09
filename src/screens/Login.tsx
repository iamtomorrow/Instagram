
import { useContext, useState } from "react"
import { Image, Pressable, Text, TextInput, View, Alert } from "react-native"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Theme } from "../../theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Auth } from "../../api/auth";
import { AnimatedBar } from "../components/AnimatedBar";
import { AccountContext } from "../../contexts/AccountContext";
import { useNavigation } from "@react-navigation/native";

export const Login = ( ) => {
    const [ authorized, setAuthorized ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ tokenBar, setTokenBar ] = useState<boolean>(false);
    const [ token, setToken ] = useState<string>("");
    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const { theme } = useContext( ThemeContext ); 
    const navigation = useNavigation( );

    const AccountContxt = useContext( AccountContext );

    const authenticateToken = async ( tkn: string ) => {
        if ( tkn !== "" ) {
            setLoading(true);
            let result = await Auth.authenticateToken( tkn );
            setLoading(false);
    
            if ( result ) {
                AccountContxt?.updateToken( tkn );
                navigation.reset({ index: 1, routes: [{ name: "Home" } as never ]})
                setAuthorized(true);
            } else {
                setAuthorized(false);
                Alert.alert("Invalid token", `Your token ${token} is not valid. Go to github.com/wearedesk for additional information and get your access token.`, [
                    { text: "Ok", onPress: () => {} },
                    { text: "Try again", onPress: ( ) => navigation.reset({ index: 1, routes: [{ name: "Preload"} as never ]}) }
                ]
                );
            }
        } else {
            Alert.alert("Invalid token", "Please, you need to enter a token before continue. If you need a token contact us at github.com/wearedesk and get your access token.");
        }
    }

    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.backgroundColor : Theme.lightTheme.backgroundColor,
        }}>
            <View style={{
                width: "100%",
                height: "10%",
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "yellow"
            }}>
            {
                theme !== "dark-mode"
                ? <Image style={{
                    width: 160,
                    height: 80,
                }} source={require("../../assets/images/logo-blue.jpg")} />
                : <Image style={{
                    width: 160,
                    height: 80,
                }}
                source={require("../../assets/images/logo-dark.jpg")} />
            }
            </View>

            <View style={{
                width: "100%",
                height: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor: "blue"
            }}>
                <View style={{
                    width: "70%",
                    height: 16,
                    padding: 20,
                    // backgroundColor: 
                }}>
                    { loading && <AnimatedBar /> }
                </View>
                { !tokenBar 
                ? <View style={{
                    width: "80%",
                    height: "45%",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // backgroundColor: "blue"
                }}>
                    <TextInput
                        style={{
                            height: 50,
                            width: "90%",
                            borderRadius: 10,
                            paddingLeft: 10,
                            color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.secondary.backgroundColor : Theme.lightTheme.secondary.backgroundColor
                        }}
                        placeholderTextColor={ theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.secondary.textColor }
                        placeholder="Username or email"
                        value={ username }
                        onChangeText={ (t) => setUsername(t)}>

                    </TextInput>
                    <TextInput
                        style={{
                            height: 50,
                            width: "90%",
                            borderRadius: 10,
                            paddingLeft: 10,
                            color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.secondary.backgroundColor : Theme.lightTheme.secondary.backgroundColor
                        }}
                        placeholderTextColor={ theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.secondary.textColor }
                        placeholder="Password"
                        value={ password }
                        onChangeText={ (t) => setPassword(t) }
                        secureTextEntry={true}>
                    </TextInput>
                    <View style={{
                        width: "100%",
                        height: 50,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                    <Pressable 
                    onPress={ () => setTokenBar( prev => !prev )}
                    style={{
                        width: "50%",
                        height: 46,
                        borderRadius: 24,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme === "dark-mode" ? Theme.lightTheme.secondary.backgroundColor : Theme.darkTheme.backgroundColor
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 16,
                            color: theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor,
                        }}>I have a token</Text>
                        {/* MaterialIcons name="keyboard-arrow-right" color={ theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor } size={24} /> */}
                    </Pressable>
                    <Pressable style={{
                        width: 46, 
                        height: 46,
                        borderRadius: 25,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme === "dark-mode" ? Theme.lightTheme.secondary.backgroundColor : Theme.darkTheme.backgroundColor
                    }}>
                        <MaterialIcons name="keyboard-arrow-right" color={ theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor } size={24} />
                    </Pressable>
                    </View>
                </View>
                : <View style={{
                    width: "80%",
                    height: "45%",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // backgroundColor: "blue"
                }}>
                    <TextInput
                        style={{
                            height: 50,
                            width: "90%",
                            borderRadius: 10,
                            paddingLeft: 10,
                            color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                            backgroundColor: theme === "dark-mode" ? Theme.darkTheme.secondary.backgroundColor : Theme.lightTheme.secondary.backgroundColor
                        }}
                        placeholderTextColor={ theme === "dark-mode" ? Theme.darkTheme.secondary.textColor : Theme.lightTheme.secondary.textColor }
                        placeholder="Enter the token"
                        value={ token }
                        onChangeText={ (t) => setToken(t)}>

                    </TextInput>

                    <View style={{
                        width: "100%",
                        height: 50,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                    <Pressable 
                    onPress={ () => setTokenBar(prev => !prev)}
                    style={{
                        width: "50%",
                        height: 46,
                        borderRadius: 24,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme === "dark-mode" ? Theme.lightTheme.secondary.backgroundColor : Theme.darkTheme.backgroundColor
                    }}>
                        {/* <MaterialIcons name="keyboard-arrow-left" color={ theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor } size={24} /> */}
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 16,
                            color: theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor,
                        }}>Sign in</Text>
                    </Pressable>
                    <Pressable 
                    onPress={ () => authenticateToken(token) }
                    style={{
                        width: 46, 
                        height: 46,
                        borderRadius: 25,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme === "dark-mode" ? Theme.lightTheme.secondary.backgroundColor : Theme.darkTheme.backgroundColor
                    }}>
                        <MaterialIcons name="keyboard-arrow-right" color={ theme === "dark-mode" ? Theme.lightTheme.primary.textColor : Theme.darkTheme.primary.textColor } size={24} />
                    </Pressable>
                    </View>
                </View>
                }

                <View style={{
                    width: "100%",
                    height: 50,
                    // backgroundColor: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                    }}>Already have an account? Sign up</Text>
                </View>
            </View>
        </View>
    )
}


import { useContext, useEffect } from "react"
import { View, Text, Image } from "react-native"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useNavigation } from "@react-navigation/native";
import { NavigationContext } from "../../contexts/NavigationContext";
import { Auth } from "../../api/auth";
import { Theme } from "../../theme/theme";
import { AnimatedBar  } from "../components/AnimatedBar";

export const Preload = ( ) => {
    const { theme } = useContext( ThemeContext );
    const navigation = useNavigation( );
    const NavigationContxt = useContext( NavigationContext );

    useEffect(( ) => {
        const checkToken = async ( ) => {
            const token = await Auth.getToken();

            if ( token ) {
                let authToken = await Auth.authenticateToken( token );

                if ( authToken ) {
                    NavigationContxt?.updateRoute("Home");
                    navigation.reset({ index: 1, routes: [{ name: "Home" } as never ]});
                } else  {
                    NavigationContxt?.updateRoute("Login");
                    Auth.vanishToken();
                    navigation.reset({ index: 1, routes: [{ name: "Login" } as never] });
                }
            } else {
                NavigationContxt?.updateRoute("Login");
                navigation.reset({ index: 1, routes: [{ name: "Login" } as never] });
            }
        }
        checkToken();
    }, []);

    return (
        <View style={{
            // marginTop: StatusBar.currentHeight,
            marginTop: 0,
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
                }} source={require("../../assets/images/logo-light.jpg")} />
                : <Image style={{
                    width: 160,
                    height: 80,
                }}
                source={require("../../assets/images/logo-dark.jpg")} />
            }
            </View>
            <Text style={{
                fontSize: 26,
                fontWeight: "500",
                color: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
            }}>
                Authenticating your token...
            </Text>
            <View style={{
                width: "70%",
                height: 16,
                padding: 20,
                // backgroundColor: 
            }}>
                <AnimatedBar />
            </View>
        </View>
    )
}
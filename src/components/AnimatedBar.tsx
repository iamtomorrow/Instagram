
import { View, Animated } from "react-native"
import { useRef, useEffect, useContext } from "react";
import { Theme } from "../../theme/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export const AnimatedBar = ( ) => {
    const { theme } = useContext( ThemeContext );

    const animations = {
        one: useRef(new Animated.Value(0)).current,
    }
    
    useEffect(( ) => {
        const loopAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(animations.one, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true,
                } as any ),
                Animated.timing(animations.one, {
                    toValue: 3,
                    duration: 250,
                    useNativeDriver: true,
                } as any ),
                Animated.timing(animations.one, {
                    toValue: 2.5,
                    duration: 500,
                    useNativeDriver: true,
                } as any ),
                Animated.timing(animations.one, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true,
                } as any ),
                
            ])
        )
        loopAnimation.start();
    }, []);

    const translateX = animations.one.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 75],
      });

    return (
        <View style={{
            width: "100%",
            height: 10,
        }}>
            <Animated.View style={{
                width: 50,
                height: 3,
                borderRadius: 3,
                backgroundColor: theme === "dark-mode" ? Theme.darkTheme.primary.textColor : Theme.lightTheme.primary.textColor,
                transform: [{ translateX }]
            }}></Animated.View>
        </View>
    )
}

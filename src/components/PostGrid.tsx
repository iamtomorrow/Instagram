import { ScrollView } from "react-native-gesture-handler"
import { PostCard } from "./PostCard"
import { View } from "react-native"

export const PostGrid = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "auto",
            // backgroundColor: "yellow"
        }}>
            <PostCard />
            <PostCard />

        </View>
    )
}
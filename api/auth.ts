
import AsyncStorage from "@react-native-async-storage/async-storage"

const TOKEN = "jh4dZsBhwCKXYZJFS4kj8XMutXTllal3Qe8hDbjjWAWQZfAeZpaPoY7dmtzCHvyFhoEsBX5KIG"

export const Auth ={
    getToken: async ( ) => {
        const token = await AsyncStorage.getItem("token");
        return token ? token : "";
    },

    vanishToken: async ( ) => {
        await AsyncStorage.removeItem("token");
    },

    authenticateToken: async ( token: string ) => {
        if ( token === TOKEN ) {
            return true;
        }
        return false;
    }
}
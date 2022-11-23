import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground, StyleSheet } from "react-native";
import Profile from "./Profile";
import Train from "./Train";
import Statistics from "./Statistics";
import { COLORS } from "../assets/colors/colors";


const Tab = createBottomTabNavigator()

export default NavigationBar = () => {
    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false // Потом поменять
            }}>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Train" component={Train}/>
                <Tab.Screen name="Statistics" component={Statistics}/>
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        height: 90
    }
})
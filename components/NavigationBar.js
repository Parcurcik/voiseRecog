import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Profile from "./Profile";
import Train from "./Train";
import Statistics from "./Statistics";
import { COLORS } from "../assets/colors/colors";


const Tab = createBottomTabNavigator()

export default NavigationBar = () => {
    return (

            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    position:'absolute',
                    backgroundColor: 'transparent',
                    elevation: 0,
                },
                tabBarLabelStyle: {color: '#000000'}
            }}
            tabBarOptions={{
                showLabel: false,
            }}>
                <Tab.Screen name="Train" component={Train} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                            source={focused ? require('../assets/images/train_use.png') : require('../assets/images/train.png') }
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            resizeMode='contain'/>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Statistics" component={Statistics} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                            source={focused ? require('../assets/images/statistic_use.png') : require('../assets/images/statistic.png') }
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            resizeMode='contain'/>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image
                        source={focused ? require('../assets/images/profile_use.png') : require('../assets/images/profile.png') }
                        style={{
                            width: 50,
                            height: 50,
                        }}
                        resizeMode='contain'/>
                    </View>
                ),
                }}/>
            </Tab.Navigator>  
    )
}

const styles = StyleSheet.create({
    img_bg: {
        width: 412,
        height: 80
    },

    img_profile: {
    }
})
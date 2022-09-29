import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { elevation } from "../styles"
import {withNavigation} from "react-navigation"



function RestaurantItem({restaurant, navigation}) {
    return (
        <TouchableOpacity 
        onPress={(() => navigation.navigate("Restaurant", {id: restaurant.id}) )}>
            <View style={[styles.container, elevation]}>
                <Image source={{uri: restaurant.image_url}}  style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.header}>{restaurant.name}</Text>
                    <View style={styles.priceRating}>
                        <Text style={styles.rating}>{restaurant.rating}</Text>
                        <Text style={styles.money}>{restaurant.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: "white",
        height: 100,
        alignSelf: "stretch",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width:75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
    },
    info: {
        flex:1,
        paddingHorizontal: 10,
    },
    header: {
        fontSize:18,
        fontWeight: "bold",
        marginBottom:4

    },
    priceRating : {
        flexDirection: "row"

    },
    rating: {
        marginRight:20

    },
    money:{
        color: "gold"

    }

})

export default withNavigation(RestaurantItem);
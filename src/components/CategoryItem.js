import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../styles";



export default function CategoryItem({name, imageUrl, index, active, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.container, elevation, 
                    index === 0 ? {marginLeft: 25} : {marginLeft: 15},
                    active ? {backgroundColor: "gold"} : {backgroundColor: "white"}
                    ]}
                    >
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={styles.image} />
                </View>
                <Text style={styles.header}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    image: {
        width:35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height:50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    },
    header:{
        fontWeight: "bold"
    }
})
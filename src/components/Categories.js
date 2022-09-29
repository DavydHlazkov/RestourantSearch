import { FlatList, View } from "react-native"
import CategoryItem from "./CategoryItem"


export default function Categories({commonCategories, setTerm, term}) {
    return(
      <View>
          <FlatList 
          data={commonCategories}
          renderItem ={({item, index}) => {
          return(
            <CategoryItem name={item.name} imageUrl={item.imageUrl} index={index} 
                active={item.name === term}
                onPress={() => setTerm(item.name)}
                />
          )} }
          horizontal
          showsHorizontalScrollIndicator= {false}
          keyExtractor={(category)=> category.name}
        />
      </View>

    )
}
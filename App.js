


import React, { useState, useEffect } from "react";
import { Text, View, FlatList,  Image, StyleSheet, ScrollView, TextInput } from "react-native";


const App = () => {

    const [Search, setSearch] = useState("");
    // console.log(Search)


    



    const [Data, setData] = useState([]);
    const [loaded, setLoaded] = useState(true);




    async function fetchData() {
        setLoaded(false);
        const API = `https://pixabay.com/api/?key=31422245-3aaef51dfc81d975659f460fb&q=${Search}&image_type=photo`



        try {
            const response = await fetch(API);

            const Imgdata = await response.json();
            setData(Imgdata.hits);

            setLoaded(true);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData('yellow+flowers');
        // console.log(Data);
        // console.log(Search);
    }, [Search])





    return (
        <View style={styles.mainContainer}>
            {/* <Text>hello</Text> */}
               <View style={styles.Header}>
                     <TextInput
                        style={styles.inputStyle}
                        placeholder="Search Color"
                        value={Search}
                        onChangeText={(text)=>{
                        setSearch(text)}}
                     />
               </View>
            <FlatList data={Data}
            numColumns={2}
                renderItem={({ item }) => {
                    // console.log(element)
                    return (<View >
                        <ScrollView>
                        <View style={{}}>
                            <Image
                                style={styles.imgStyle}
                                resizeMode="contain"
                                source={{ uri: item.webformatURL }}


                            />
                            </View>
                            
                            <Image
                                style={styles.img2style}
                                resizeMode="contain"
                                source={{ uri: item.previewURL }}
                            />

                        </ScrollView>
                       
                    </View>)



                }} />




             </View>

       
    );
}









const styles = StyleSheet.create({

    mainContainer: {
       
        borderWidth:10,
        borderColor:"#101820FF",
        backgroundColor: '#fff',
      
        paddingVertical: 20,
        
        alignItems:"center",

},

    imgStyle: {
        width: 150, 
        height: 200,
        width:"140%",

       },
    img2style: {
        width:170,
        height: 170,
        },
        Header:{paddingHorizontal:30,
            paddingTop:30,
            backgroundColor:"#e0ffff",
            width:380,height:100

        },
        inputStyle: {borderWidth:4,
            fontSize:18,
            borderColor:"orange",
            paddingHorizontal:15,paddingVertical:7,borderRadius:4}

});

export default App;



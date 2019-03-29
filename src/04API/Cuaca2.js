import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableHighlight, ActivityIndicator, } from 'react-native'; 
 
export default class Cuaca2 extends React.Component {   
        constructor(props){
        super(props)
        this.state = {
        city: '',
        forecast: {
            main: '',
            description: '',
            temp: '',
            sunrise: '',
            sunset: '',
            pressure: '',
            humidity: '',
            sea_level: '',
            grnd_level: '',
            speed: '',
            loading: false,
        }
    };
}
async getWeather() {

    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=fb53da86ce47a2abe501035d4cedca3c&units=metric'
        );

        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level,
                speed: responseJson.wind.speed
            }
        });
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }
}
    render() {     
        return (
            <View style={styles.vMain} >
                <View style={styles.vHeader}>
                    <Text style={styles.txtHeader1}>Prakiraan Cuaca</Text>
                </View>
                <View style={styles.box1}>
                    <View style={styles.box2}>
                    <Text style={styles.txtbox2}>Masukan Nama Kota</Text>
                        <TextInput style={styles.txtInput}
                            placeholder="Masukan nama kota"  
                                onChangeText={
                                (city)=>
                                this.setState({city})
                                }
                        />
                    <TouchableHighlight onPress={()=> this.getWeather()}>
                    {
                        this.state.loading ? <ActivityIndicator color="#81C784" size="small" animating />
                        :<Text style={styles.txtbox3}> Lihat</Text>
                     }
                    </TouchableHighlight>
                    </View>
                <View style={styles.box3}>
                    <View style={styles.boxkecil}> 
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/temp.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Temp :{this.state.forecast.temp}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/des.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Desc :{this.state.forecast.description}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/main.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Main :{this.state.forecast.main}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/sunset.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Sunset :{this.state.forecast.sunset}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/sunrise.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Sunrise :{this.state.forecast.sunrise}{"\n"}</Text>
                        </View>
                    </View>
                    <View style={styles.boxkecil1}> 
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/presure.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Pressure :{this.state.forecast.pressure}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/humadity.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Humadity :{this.state.forecast.humidity}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/sea.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Sea :{this.state.forecast.sea_level}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/ground.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Ground :{this.state.forecast.grnd_level}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./icon/speed.png")} style={styles.foto} />  
                            </View>
                        <Text style={styles.txtbox4}>Speed :{this.state.forecast.speed}{"\n"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.txtbox5}>@copyRightFingkyAgustin</Text>
                </View>
                </View>

            </View>
        );   
    } 
}   

   const styles = StyleSheet.create({
   vMain: {
        flex: 1,
    },
    vHeader: {
        flex: 0.5,
        backgroundColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center',
    },
    foto:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        width: 30,
    },
    box1: {
        flex: 5,
        backgroundColor: '#98FB98',
    },
    box2: {
        flex: 0.3,
        backgroundColor: '#2E8B57',
        margin: 10,
    },
    box3: {
        flex: 0.6,
        backgroundColor: '#2E8B57',
        margin: 10,
        flexDirection: 'row'

    },
    box4: {
        flex: 0.1,
        backgroundColor: '#2E8B57',
    },
    textInput: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        height: 45,
        width: 155,
        marginTop: 15,
        borderRadius: 5,
    },
    txtbox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,
        marginLeft:80

    },
    boxkecil:{
        flex:0.7,
        backgroundColor: '#2E8B57',
        width: 40,
        height:40,
        margin:5,
      
    },
    boxkecil1:{
        flex:0.7,
        backgroundColor: '#2E8B57',
        width: 40,
        height:40,
        margin:5,
        marginLeft:10,
    },
    txtbox3: {
        color: 'black',
        alignItems: 'center',
        fontSize: 20,
        marginLeft:140,
        marginRight:140,
        marginTop:10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    txtbox4: {
        color: 'black',
        alignItems: 'center',
        fontSize: 10,
        margin:10,
        marginTop:20,

    },
    txtbox5: {
        color: 'black',
        alignItems: 'center',
        fontSize: 15,
        marginTop:15,
        marginLeft:100,

    },
    txtInput: {
        flex: 0.7,
        height: 20,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        fontSize:18,
        marginTop:20,
        marginRight:60,
        marginLeft:70,
        borderRadius: 5,
    },
    txtHeader1: {
        color: 'white',
        alignItems: 'center',
        fontSize: 20

    },
    txtHeader2: {
        color: 'white',
        fontSize: 18
    }
});


import { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import BackIcon from '../../assets/images/arrow-left.svg';

export default function MapScreen({ navigation }) {
    
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
        }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "contents",
                paddingHorizontal: 75,
            },
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.backBtn}
                    onPress={() => navigation.navigate('DefaultScreen')}
                >
                    <BackIcon width={24} height={24}/>
                </TouchableOpacity>
                <Text style={styles.screenTitle}>
                    Карта
                </Text>
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    longitude: 36.11779326576379,
                    latitude: 49.96430913922404,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.006,
                }}
            >
                <Marker
                    coordinate={{
                        longitude: 36.11779326576379,
                        latitude: 49.96430913922404,
                    }}
                />
            </MapView>        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: 88,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8',
    },
    screenTitle: {
        marginLeft: 131,
        marginRight: 'auto',
        paddingBottom: 11,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        lineHeight: 22,
    },
    backBtn: {
        paddingBottom: 10,
    },
})
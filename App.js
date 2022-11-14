import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import { geoService } from "./geoService";


export default function App() {

    const coordinates =
        [
            {latitude: 49.924526, longitude: 19.001017},
            {latitude: 49.924602, longitude: 19.000607},
            {latitude: 49.925192, longitude: 19.000564},
            {latitude: 49.924937, longitude: 18.997775},
        ];

    const xd = geoService.getCoordinates();

    const initialRegion = {
        latitude: coordinates[0].latitude,
        longitude: coordinates[0].longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
    };

  return (
      <View style={styles.container}>
          <MapView
              style={styles.map}
              initialRegion={initialRegion}
          >
              <Marker
                  coordinate={initialRegion}
                  title={"Checkpoint 1"}
                  description={"Pytanie: Dokad noca tupta jez? Odpowiedz: Do lasu"}
                  pinColor="green"
              />
              <Marker
                  coordinate={{
                        latitude: coordinates[1].latitude,
                        longitude: coordinates[1].longitude,
                  }}
                  title={"Checkpoint 2"}
                  description={"Pytanie: Jakie zwierze ma na szyi GPS?? Odpowiedz: Pies"}
                  pinColor="orange"
              />
          </MapView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

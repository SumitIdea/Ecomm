import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function Wave() {
  return (
    <View style={styles.container}>
      <View style={styles.svgCurve}>

        <View style={{ backgroundColor: '#5000ca', height: 60 }}>
          <Svg
            height={200}
            width={Dimensions.get('screen').width}
            viewBox="00 0 1440 320"
            style={{ position: 'absolute', top: 0 }}
          >
            <Path
              fill="#5000ca"
              d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
      </View>

      <View style={styles.bottom}>

        <View style={{ backgroundColor: '#5000ca', height: 50 }}>
          <Svg
            height={150}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', bottom: 0 }}
          >
            <Path fill="#5000ca" fill-opacity="1"
              d="M0,224L24,218.7C48,213,96,203,144,176C192,149,
                240,107,288,80C336,53,384,43,432,58.7C480,75,528,
                117,576,112C624,107,672,53,720,48C768,43,816,85,
                864,106.7C912,128,960,128,1008,128C1056,128,1104,
                128,1152,117.3C1200,107,1248,85,1296,85.3C1344,85,
                1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,
                320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,
                320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,
                320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,
                320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
            </Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  bottom: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom:0
  },
});
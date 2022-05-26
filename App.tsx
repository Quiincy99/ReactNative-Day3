/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Modal from 'react-native-modal/dist/modal';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [ModalVisible, setModalVisible] = useState(false)

  const [ModalPosition, setModalPosition]:any = useState([])

  const [CurrentPosition, setCurrentPosition] = useState({"x":15,"y":15})

  return (
    <SafeAreaView>
      <ScrollView>

        <Modal
          isVisible={ModalVisible}
          onBackdropPress={() => setModalVisible(!ModalVisible)}
          animationIn='fadeIn'  
        >
          <View style={{
            flex:1,
            // flexDirection: 'row-reverse',
            // flexWrap: 'wrap',
            position: 'absolute',
            top: CurrentPosition.y + 45,
            left: CurrentPosition.x - 20
            }}>
          <TouchableOpacity 
                style={styles.modalcontent}
                onPress={() => {
                  // setModalVisible(!ModalVisible)
                }}
              >
                <Text>Hello</Text>
              </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.container}>
          {Array(10)
            .fill(0)
            .map((e, index) => (
              <TouchableOpacity
                onLayout={(e) => {
                  let x = e.nativeEvent.layout.x
                  let y = e.nativeEvent.layout.y
                  setModalPosition([...ModalPosition, {"x":x, "y":y}])
                }}
                style={styles.block}
                onPress={() => {
                  setCurrentPosition({"x": ModalPosition[index].x, "y": ModalPosition[index].y})
                  setModalVisible(!ModalVisible)
                }}
              ></TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  block: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    margin: 10,
  },
  modalcontent: {
    height:60,
    width:60,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default App;

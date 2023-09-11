import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleModal}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50, // Utilisez la moitié de la largeur/hauteur pour obtenir un cercle
              overflow: 'hidden', // Cache tout contenu dépassant du cercle
            }}
          >
            <Image
              source={{ uri: 'URL_DE_VOTRE_IMAGE' }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} onRequestClose={toggleModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={{ uri: 'URL_DE_VOTRE_IMAGE' }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

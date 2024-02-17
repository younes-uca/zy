import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {globalStyle} from "../../../../../../shared/globalStyle";

import ProduitTabNavigation from "../../../../../../navigation/drawer/elements/commun/ProduitTabNavigation";

const ProduitAdmin = () => {
  return (
    <SafeAreaView style={globalStyle.myContainer}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }} >
        <ProduitTabNavigation />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProduitAdmin;

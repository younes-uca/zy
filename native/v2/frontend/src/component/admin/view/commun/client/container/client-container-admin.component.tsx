import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {globalStyle} from "../../../../../../shared/globalStyle";

import ClientTabNavigation from "../../../../../../navigation/drawer/elements/commun/ClientTabNavigation";

const ClientAdmin = () => {
  return (
    <SafeAreaView style={globalStyle.myContainer}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }} >
        <ClientTabNavigation />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ClientAdmin;

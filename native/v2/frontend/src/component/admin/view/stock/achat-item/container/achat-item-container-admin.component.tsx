import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {globalStyle} from "../../../../../../shared/globalStyle";

import AchatItemTabNavigation from "../../../../../../navigation/drawer/elements/stock/AchatItemTabNavigation";

const AchatItemAdmin = () => {
  return (
    <SafeAreaView style={globalStyle.myContainer}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }} >
        <AchatItemTabNavigation />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AchatItemAdmin;

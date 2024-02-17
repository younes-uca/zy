import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {globalStyle} from "../../../../../../shared/globalStyle";

import AchatTabNavigation from "../../../../../../navigation/drawer/elements/stock/AchatTabNavigation";

const AchatAdmin = () => {
  return (
    <SafeAreaView style={globalStyle.myContainer}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }} >
        <AchatTabNavigation />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AchatAdmin;

mimport { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AchatAdminCard = ({ reference ,dateAchat ,total ,totalPaye ,description ,clientName , onPressDelete, onUpdate, onDetails }) =>{

return (

    <SafeAreaView>
        <TouchableOpacity onPress={onDetails} style={globalStyle.card}>
            <ScrollView horizontal>
                <View style={globalStyle.contentContainer}>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Reference: </Text>
                        <Text style={globalStyle.value}>{truncateText(reference)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Date achat: </Text>
                        <Text style={globalStyle.value}>{truncateText(dateAchat)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Total: </Text>
                        <Text style={globalStyle.value}>{truncateText(total)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Total paye: </Text>
                        <Text style={globalStyle.value}>{truncateText(totalPaye)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Description: </Text>
                        <Text style={globalStyle.value}>{truncateText(description)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>- Client: </Text>
                        <Text style={globalStyle.value}>{truncateText(clientName)}</Text>
                    </View>

                </View>
    </ScrollView>
    <View style={globalStyle.buttonsContainer}>
        <TouchableOpacity onPress={onPressDelete} style={globalStyle.button}>
            <Ionicons name="trash" size={25} color={'red'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onUpdate} style={globalStyle.button}>
            <Ionicons name="create" size={25} color={'green'} />
        </TouchableOpacity>
    </View>
</TouchableOpacity>
</SafeAreaView>
);
};

export default AchatAdminCard;

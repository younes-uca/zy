mimport { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AchatItemAdminCard = ({ produitName ,prixUnitaire ,prixVente ,quantite ,quantiteAvoir ,remise ,achatName , onPressDelete, onUpdate, onDetails }) =>{

return (

    <SafeAreaView>
        <TouchableOpacity onPress={onDetails} style={globalStyle.card}>
            <ScrollView horizontal>
                <View style={globalStyle.contentContainer}>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>- Produit: </Text>
                        <Text style={globalStyle.value}>{truncateText(produitName)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Prix unitaire: </Text>
                        <Text style={globalStyle.value}>{truncateText(prixUnitaire)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Prix vente: </Text>
                        <Text style={globalStyle.value}>{truncateText(prixVente)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Quantite: </Text>
                        <Text style={globalStyle.value}>{truncateText(quantite)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Quantite avoir: </Text>
                        <Text style={globalStyle.value}>{truncateText(quantiteAvoir)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>Remise: </Text>
                        <Text style={globalStyle.value}>{truncateText(remise)}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={globalStyle.label}>- Achat: </Text>
                        <Text style={globalStyle.value}>{truncateText(achatName)}</Text>
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

    </SafeAreaView>
);
};

export default AchatItemAdminCard;

import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from "../../../../../../shared/globalStyle";

import  {AchatItemDto}  from '../../../../../../controller/model/stock/AchatItem.model';

type AchatItemViewScreenRouteProp = RouteProp<{ AchatItemDetails: { achatItem : AchatItemDto } }, 'AchatItemDetails'>;

type Props = { route: AchatItemViewScreenRouteProp; };

const AchatItemAdminView: React.FC<Props> = ({ route }) => {

    const { achatItem } = route.params;
    const [isAchatItemCollapsed, setIsAchatItemCollapsed] = useState(false);



    const achatItemCollapsible = () => {
        setIsAchatItemCollapsed(!isAchatItemCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={achatItemCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Achat item</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isAchatItemCollapsed}>

                <View style={globalStyle.itemCard}>

                    <View>

                        <Text style={globalStyle.infos}>Id: {achatItem.id}</Text>
                        <Text style={globalStyle.infos}>Produit: {achatItem?.produit?.reference}</Text>
                        <Text style={globalStyle.infos}>Prix unitaire: {achatItem.prixUnitaire}</Text>
                        <Text style={globalStyle.infos}>Prix vente: {achatItem.prixVente}</Text>
                        <Text style={globalStyle.infos}>Quantite: {achatItem.quantite}</Text>
                        <Text style={globalStyle.infos}>Quantite avoir: {achatItem.quantiteAvoir}</Text>
                        <Text style={globalStyle.infos}>Remise: {achatItem.remise}</Text>
                        <Text style={globalStyle.infos}>Achat: {achatItem?.achat?.reference}</Text>

                    </View>

                </View>

            </Collapsible>


        </ScrollView>

    </View>
);
};

export default AchatItemAdminView;

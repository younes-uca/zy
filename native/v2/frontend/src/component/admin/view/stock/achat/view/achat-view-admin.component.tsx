import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from "../../../../../../shared/globalStyle";

import  {AchatDto}  from '../../../../../../controller/model/stock/Achat.model';

type AchatViewScreenRouteProp = RouteProp<{ AchatDetails: { achat : AchatDto } }, 'AchatDetails'>;

type Props = { route: AchatViewScreenRouteProp; };

const AchatAdminView: React.FC<Props> = ({ route }) => {

    const { achat } = route.params;
    const [isAchatCollapsed, setIsAchatCollapsed] = useState(false);

    const [isAchatItemsCollapsed, setIsAchatItemsCollapsed] = useState(true);

    const achatItemsCollapsible = () => {
        setIsAchatItemsCollapsed(!isAchatItemsCollapsed);
    };

    const achatCollapsible = () => {
        setIsAchatCollapsed(!isAchatCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={achatCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Achat</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isAchatCollapsed}>

                <View style={globalStyle.itemCard}>

                    <View>

                        <Text style={globalStyle.infos}>Id: {achat.id}</Text>
                        <Text style={globalStyle.infos}>Reference: {achat.reference}</Text>
                        <Text style={globalStyle.infos}>Date achat: {achat.dateAchat}</Text>
                        <Text style={globalStyle.infos}>Total: {achat.total}</Text>
                        <Text style={globalStyle.infos}>Total paye: {achat.totalPaye}</Text>
                        <Text style={globalStyle.infos}>Description: {achat.description}</Text>
                        <Text style={globalStyle.infos}>Client: {achat?.client?.nom}</Text>

                    </View>

                </View>

            </Collapsible>

            <TouchableOpacity onPress={achatItemsCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Achat items</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isAchatItemsCollapsed}>

                {achat.achatItems && achat.achatItems.length > 0 ? ( achat.achatItems.map((item, index) => (
                    <View key={index} style={globalStyle.itemCard}>
                        <View>
                            <Text style={globalStyle.infos}>Produit: {item?.produit?.reference}</Text>
                            <Text style={globalStyle.infos}>Prix unitaire : {item.prixUnitaire}</Text>
                            <Text style={globalStyle.infos}>Prix vente : {item.prixVente}</Text>
                            <Text style={globalStyle.infos}>Quantite : {item.quantite}</Text>
                            <Text style={globalStyle.infos}>Quantite avoir : {item.quantiteAvoir}</Text>
                            <Text style={globalStyle.infos}>Remise : {item.remise}</Text>

                        </View>
                    </View>
                    )) ) : (
                    <View style={globalStyle.itemCard}>
                        <Text style={globalStyle.infos}>No achat items</Text>
                    </View>
                )}

            </Collapsible>

        </ScrollView>

    </View>
);
};

export default AchatAdminView;

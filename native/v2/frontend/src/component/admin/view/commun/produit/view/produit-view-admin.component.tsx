import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from "../../../../../../shared/globalStyle";

import  {ProduitDto}  from '../../../../../../controller/model/commun/Produit.model';

type ProduitViewScreenRouteProp = RouteProp<{ ProduitDetails: { produit : ProduitDto } }, 'ProduitDetails'>;

type Props = { route: ProduitViewScreenRouteProp; };

const ProduitAdminView: React.FC<Props> = ({ route }) => {

    const { produit } = route.params;
    const [isProduitCollapsed, setIsProduitCollapsed] = useState(false);



    const produitCollapsible = () => {
        setIsProduitCollapsed(!isProduitCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={produitCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Produit</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isProduitCollapsed}>

                <View style={globalStyle.itemCard}>

                    <View>

                        <Text style={globalStyle.infos}>Id: {produit.id}</Text>
                        <Text style={globalStyle.infos}>Reference: {produit.reference}</Text>
                        <Text style={globalStyle.infos}>Libelle: {produit.libelle}</Text>
                        <Text style={globalStyle.infos}>Barcode: {produit.barcode}</Text>
                        <Text style={globalStyle.infos}>Discription: {produit.discription}</Text>
                        <Text style={globalStyle.infos}>Prix achat moyen: {produit.prixAchatMoyen}</Text>
                        <Text style={globalStyle.infos}>Quantite: {produit.quantite}</Text>
                        <Text style={globalStyle.infos}>Seuil alert: {produit.seuilAlert}</Text>

                    </View>

                </View>

            </Collapsible>


        </ScrollView>

    </View>
);
};

export default ProduitAdminView;

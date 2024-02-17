import {Keyboard, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';

import {ProduitAdminService} from '../../../../../../controller/service/admin/commun/ProduitAdminService.service';
import  {ProduitDto}  from '../../../../../../controller/model/commun/Produit.model';


type ProduitUpdateScreenRouteProp = RouteProp<{ ProduitUpdate: { produit: ProduitDto } }, 'ProduitUpdate'>;

type Props = { route: ProduitUpdateScreenRouteProp; };

const ProduitAdminEdit: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<any>>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { produit } = route.params;



    const service = new ProduitAdminService();


    const { control, handleSubmit } = useForm<ProduitDto>({
        defaultValues: {
            id: produit.id ,
            reference: produit.reference ,
            libelle: produit.libelle ,
            barcode: produit.barcode ,
            discription: produit.discription ,
            prixAchatMoyen: produit.prixAchatMoyen ,
            quantite: produit.quantite ,
            seuilAlert: produit.seuilAlert ,
        },
    });





    useEffect(() => {
    }, []);



    const handleUpdate = async (item: ProduitDto) => {
        Keyboard.dismiss();
        console.log('Data to be updated:', item);
        try {
            await service.update(item);
            navigation.navigate('Produit');
        } catch (error) {
            console.error('Error saving produit:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={globalStyle.safeAreaViewEdit}>

        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

            <Text style={globalStyle.textHeaderEdit} >Update Produit</Text>

            <CustomInput control={control} name={'reference'} placeholder={'Reference'} keyboardT="default" />
            <CustomInput control={control} name={'libelle'} placeholder={'Libelle'} keyboardT="default" />
            <CustomInput control={control} name={'barcode'} placeholder={'Barcode'} keyboardT="default" />
            <CustomInput control={control} name={'discription'} placeholder={'Discription'} keyboardT="default" />

            <CustomButton onPress={handleSubmit(handleUpdate)} text={"Update Produit"} bgColor={'#ffa500'} fgColor={'white'} />

        </ScrollView>

        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on updating'} iconColor={'red'} />


    </SafeAreaView>
);
};

export default ProduitAdminEdit;

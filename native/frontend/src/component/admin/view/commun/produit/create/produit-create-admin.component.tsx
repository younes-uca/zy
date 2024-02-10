import { View, Text, StyleSheet, SafeAreaView, Keyboard, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { AxiosResponse } from 'axios';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';
import Collapsible from 'react-native-collapsible';
import FilterModal from '../../../../../../zynerator/FilterModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ProduitAdminService} from '../../../../../../controller/service/admin/commun/ProduitAdminService.service';
import  {ProduitDto}  from '../../../../../../controller/model/commun/Produit.model';


const ProduitAdminCreate = () => {

    const [showSavedModal, setShowSavedModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isProduitCollapsed, setIsProduitCollapsed] = useState(true);



    const service = new ProduitAdminService();


    const { control, handleSubmit, reset } = useForm<ProduitDto>({
        defaultValues: {
        reference: '' ,
        libelle: '' ,
        barcode: '' ,
        discription: '' ,
        prixAchatMoyen: null ,
        quantite: null ,
        seuilAlert: null ,
        },
    });

    const produitCollapsible = () => {
        setIsProduitCollapsed(!isProduitCollapsed);
    };



    useEffect(() => {
    }, []);




    const handleSave = async (item: ProduitDto) => {
        Keyboard.dismiss();
        try {
            await service.save( item );
            reset();
            setShowSavedModal(true);
            setTimeout(() => setShowSavedModal(false), 1500);
        } catch (error) {
            console.error('Error saving produit:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e8fa' }} >
        <ScrollView style={{ margin: 20, marginBottom: 80 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }} >Create Produit</Text>

            <TouchableOpacity onPress={produitCollapsible} style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Produit</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isProduitCollapsed}>
                            <CustomInput control={control} name={'reference'} placeholder={'Reference'} keyboardT="default" />
                            <CustomInput control={control} name={'libelle'} placeholder={'Libelle'} keyboardT="default" />
                            <CustomInput control={control} name={'barcode'} placeholder={'Barcode'} keyboardT="default" />
                            <CustomInput control={control} name={'discription'} placeholder={'Discription'} keyboardT="default" />
            </Collapsible>
        <CustomButton onPress={handleSubmit(handleSave)} text={"Save Produit"} bgColor={'#000080'} fgColor={'white'} />
        </ScrollView>
        <SaveFeedbackModal isVisible={showSavedModal} icon={'checkmark-done-sharp'} message={'saved successfully'} iconColor={'#32cd32'} />
        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on saving'} iconColor={'red'} />
    </SafeAreaView>
);
};
export default ProduitAdminCreate;

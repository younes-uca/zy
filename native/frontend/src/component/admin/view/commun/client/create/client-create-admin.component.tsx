import {Keyboard, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';
import Collapsible from 'react-native-collapsible';

import {ClientAdminService} from '../../../../../../controller/service/admin/commun/ClientAdminService.service';
import {ClientDto} from '../../../../../../controller/model/commun/Client.model';
import {globalStyle} from "../../../../../../shared/globalStyle";

const ClientAdminCreate = () => {

    const [showSavedModal, setShowSavedModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isClientCollapsed, setIsClientCollapsed] = useState(true);



    const service = new ClientAdminService();


    const { control, handleSubmit, reset } = useForm<ClientDto>({
        defaultValues: {
        cin: '' ,
        nom: '' ,
        tel: '' ,
        email: '' ,
        adresse: '' ,
        description: '' ,
        creance: null ,
        },
    });

    const clientCollapsible = () => {
        setIsClientCollapsed(!isClientCollapsed);
    };



    useEffect(() => {
    }, []);




    const handleSave = async (item: ClientDto) => {
        Keyboard.dismiss();
        try {
            await service.save( item );
            reset();
            setShowSavedModal(true);
            setTimeout(() => setShowSavedModal(false), 1500);
        } catch (error) {
            console.error('Error saving client:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={globalStyle.safeAreaViewCreate} >
        <ScrollView style={globalStyle.scrolllViewCreate} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
            <Text style={globalStyle.textHeaderCreate} >Create Client</Text>

            <TouchableOpacity onPress={clientCollapsible} style={globalStyle.touchableOpacityCreate}>
                <Text style={globalStyle.touchableOpacityButtonCreate}>Client</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isClientCollapsed}>
                            <CustomInput control={control} name={'cin'} placeholder={'Cin'} keyboardT="default" />
                            <CustomInput control={control} name={'nom'} placeholder={'Nom'} keyboardT="default" />
                            <CustomInput control={control} name={'tel'} placeholder={'Tel'} keyboardT="default" />
                            <CustomInput control={control} name={'email'} placeholder={'Email'} keyboardT="default" />
                            <CustomInput control={control} name={'adresse'} placeholder={'Adresse'} keyboardT="default" />
                            <CustomInput control={control} name={'description'} placeholder={'Description'} keyboardT="default" />
            </Collapsible>
        <CustomButton onPress={handleSubmit(handleSave)} text={"Save Client"} bgColor={'#000080'} fgColor={'white'} />
        </ScrollView>
        <SaveFeedbackModal isVisible={showSavedModal} icon={'checkmark-done-sharp'} message={'saved successfully'} iconColor={'#32cd32'} />
        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on saving'} iconColor={'red'} />
    </SafeAreaView>
);
};
export default ClientAdminCreate;

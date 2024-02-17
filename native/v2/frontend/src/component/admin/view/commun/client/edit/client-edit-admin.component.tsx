import {Keyboard, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';

import {ClientAdminService} from '../../../../../../controller/service/admin/commun/ClientAdminService.service';
import  {ClientDto}  from '../../../../../../controller/model/commun/Client.model';


type ClientUpdateScreenRouteProp = RouteProp<{ ClientUpdate: { client: ClientDto } }, 'ClientUpdate'>;

type Props = { route: ClientUpdateScreenRouteProp; };

const ClientAdminEdit: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<any>>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { client } = route.params;



    const service = new ClientAdminService();


    const { control, handleSubmit } = useForm<ClientDto>({
        defaultValues: {
            id: client.id ,
            cin: client.cin ,
            nom: client.nom ,
            tel: client.tel ,
            email: client.email ,
            adresse: client.adresse ,
            description: client.description ,
            creance: client.creance ,
        },
    });





    useEffect(() => {
    }, []);



    const handleUpdate = async (item: ClientDto) => {
        Keyboard.dismiss();
        console.log('Data to be updated:', item);
        try {
            await service.update(item);
            navigation.navigate('Client');
        } catch (error) {
            console.error('Error saving client:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={globalStyle.safeAreaViewEdit}>

        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

            <Text style={globalStyle.textHeaderEdit} >Update Client</Text>

            <CustomInput control={control} name={'cin'} placeholder={'Cin'} keyboardT="default" />
            <CustomInput control={control} name={'nom'} placeholder={'Nom'} keyboardT="default" />
            <CustomInput control={control} name={'tel'} placeholder={'Tel'} keyboardT="default" />
            <CustomInput control={control} name={'email'} placeholder={'Email'} keyboardT="default" />
            <CustomInput control={control} name={'adresse'} placeholder={'Adresse'} keyboardT="default" />
            <CustomInput control={control} name={'description'} placeholder={'Description'} keyboardT="default" />

            <CustomButton onPress={handleSubmit(handleUpdate)} text={"Update Client"} bgColor={'#ffa500'} fgColor={'white'} />

        </ScrollView>

        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on updating'} iconColor={'red'} />


    </SafeAreaView>
);
};

export default ClientAdminEdit;

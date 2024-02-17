import {ScrollView, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import ConfirmDeleteModal from '../../../../../../zynerator/ConfirmDeleteModal';
import {AxiosResponse} from 'axios';

import {ClientAdminService} from '../../../../../../controller/service/admin/commun/ClientAdminService.service';
import  {ClientDto}  from '../../../../../../controller/model/commun/Client.model';
import ClientAdminCard from "../card/client-card-admin.component";


const ClientAdminList: React.FC = () =>  {

    const [clients, setClients] = useState<ClientDto[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    type ClientResponse = AxiosResponse<ClientDto[]>;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [clientId, setClientId] = useState(0);

    const service = new ClientAdminService();

    const handleDeletePress = (id: number) => {
        setClientId(id);
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await service.delete(clientId);
            setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting client:', error);
            setIsDeleteModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const [clientResponse] = await Promise.all<ClientResponse>([
            service.getList(),
            ]);
            setClients(clientResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    const handleFetchAndUpdate = async (id: number) => {
        try {
            const clientResponse = await service.find(id);
            const clientData = clientResponse.data;
            navigation.navigate('ClientAdminUpdate', { client: clientData });
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    };

    const handleFetchAndDetails = async (id: number) => {
        try {
            const clientResponse = await service.find(id);
            const clientData = clientResponse.data;
            navigation.navigate('ClientAdminDetails', { client: clientData });
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    };

return(
    <ScrollView showsVerticalScrollIndicator={false} style={globalStyle.scrollViewList}>

        <Text style={globalStyle.textHeaderList} >Client List</Text>

        <View style={{ marginBottom: 100 }}>
            {clients && clients.length > 0 ? ( clients.map((client) => (
                <ClientAdminCard key={client.id}
                    cin = {client.cin}
                    nom = {client.nom}
                    tel = {client.tel}
                    email = {client.email}
                    adresse = {client.adresse}
                    description = {client.description}
                    creance = {client.creance}
                    onPressDelete={() => handleDeletePress(client.id)}
                    onUpdate={() => handleFetchAndUpdate(client.id)}
                    onDetails={() => handleFetchAndDetails(client.id)}
                />
                )) ) : (
                <Text style={globalStyle.textNotFound}>No clients found.</Text>
            )}
        </View>

        <ConfirmDeleteModal isVisible={isDeleteModalVisible} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete} name={'Client'} />

    </ScrollView>

);
};

export default ClientAdminList;

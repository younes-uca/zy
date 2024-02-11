import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from "../../../../../../shared/globalStyle";

import {ClientDto} from '../../../../../../controller/model/commun/Client.model';

type ClientViewScreenRouteProp = RouteProp<{ ClientDetails: { client: ClientDto } }, 'ClientDetails'>;

type Props = { route: ClientViewScreenRouteProp; };

const ClientAdminView: React.FC<Props> = ({route}) => {

    const {client} = route.params;
    const [isClientCollapsed, setIsClientCollapsed] = useState(false);


    const clientCollapsible = () => {
        setIsClientCollapsed(!isClientCollapsed);
    };

    return (
        <View style={{padding: 20}}>

            <ScrollView>

                <TouchableOpacity onPress={clientCollapsible} style={{
                    backgroundColor: '#ffd700',
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 5
                }}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Client</Text>
                </TouchableOpacity>

                <Collapsible collapsed={isClientCollapsed}>

                    <View style={globalStyle.itemCard}>

                        <View>

                            <Text style={globalStyle.infos}>Id: {client.id}</Text>
                            <Text style={globalStyle.infos}>Cin: {client.cin}</Text>
                            <Text style={globalStyle.infos}>Nom: {client.nom}</Text>
                            <Text style={globalStyle.infos}>Tel: {client.tel}</Text>
                            <Text style={globalStyle.infos}>Email: {client.email}</Text>
                            <Text style={globalStyle.infos}>Adresse: {client.adresse}</Text>
                            <Text style={globalStyle.infos}>Description: {client.description}</Text>
                            <Text style={globalStyle.infos}>Creance: {client.creance}</Text>

                        </View>

                    </View>

                </Collapsible>


            </ScrollView>

        </View>
    );
};

export default ClientAdminView;

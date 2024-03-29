import {Keyboard, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';
import Collapsible from 'react-native-collapsible';

import {AchatAdminService} from '../../../../../../controller/service/admin/stock/AchatAdminService.service';
import  {AchatDto}  from '../../../../../../controller/model/stock/Achat.model';

import {AchatItemDto} from '../../../../../../controller/model/stock/AchatItem.model';
import {AchatItemAdminService} from '../../../../../../controller/service/admin/stock/AchatItemAdminService.service';
import {ClientDto} from '../../../../../../controller/model/commun/Client.model';
import {ClientAdminService} from '../../../../../../controller/service/admin/commun/ClientAdminService.service';
import {ProduitDto} from '../../../../../../controller/model/commun/Produit.model';
import {ProduitAdminService} from '../../../../../../controller/service/admin/commun/ProduitAdminService.service';

const AchatAdminCreate = () => {

    const [showSavedModal, setShowSavedModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isAchatCollapsed, setIsAchatCollapsed] = useState(true);


    const emptyProduit = new ProduitDto();
    const [produits, setProduits] = useState<ProduitDto[]>([]);
    const [produitModalVisible, setProduitModalVisible] = useState(false);
    const [selectedProduit, setSelectedProduit] = useState<ProduitDto>(emptyProduit);

    const emptyClient = new ClientDto();
    const [clients, setClients] = useState<ClientDto[]>([]);
    const [clientModalVisible, setClientModalVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState<ClientDto>(emptyClient);


    const service = new AchatAdminService();
    const achatItemAdminService = new AchatItemAdminService();
    const clientAdminService = new ClientAdminService();
    const produitAdminService = new ProduitAdminService();

    const [achatItemsElements, setAchatItemsElements] = useState<AchatItemDto[]>([]);
    const [achatItems, setAchatItems] = useState<AchatItemDto>(new AchatItemDto());
    const [isEditModeAchatItems, setIsEditModeAchatItems] = useState(false);
    const [editIndexAchatItems, setEditIndexAchatItems] = useState(null);

    const [isAchatItemsElementCollapsed, setIsAchatItemsElementCollapsed] = useState(true);
    const [isAchatItemsElementsCollapsed, setIsAchatItemsElementsCollapsed] = useState(true);
    const [isAchatItems, setIsAchatItems] = useState(false);
    const [isEditAchatItemsMode, setIsEditAchatItemsMode] = useState(false);


    const { control, handleSubmit, reset } = useForm<AchatDto>({
        defaultValues: {
        reference: '' ,
        total: null ,
        totalPaye: null ,
        description: '' ,
        client: undefined,
        },
    });

    const achatCollapsible = () => {
        setIsAchatCollapsed(!isAchatCollapsed);
    };

    const handleCloseProduitModal = () => {
        setProduitModalVisible(false);
    };

    const onProduitSelect = (item) => {
        console.log('Selected Item:', item);
        setSelectedProduit(item);
        setProduitModalVisible(false);
    };
    const handleCloseClientModal = () => {
        setClientModalVisible(false);
    };

    const onClientSelect = (item) => {
        console.log('Selected Item:', item);
        setSelectedClient(item);
        setClientModalVisible(false);
    };


    useEffect(() => {
        clientAdminService.getList().then(({data}) => setClients(data)).catch(error => console.log(error));

        produitAdminService.getList().then(({data}) => setProduits(data)).catch(error => console.log(error));
    }, []);


    const { control: itemControl, handleSubmit: handleItemSubmit, reset: resetItem } = useForm<AchatItemDto>({
        defaultValues: {
            produit: undefined,
            prixUnitaire: null ,
            prixVente: null ,
            quantite: null ,
            quantiteAvoir: null ,
            remise: null ,
            achat: undefined,
        },
    });

    const achatItemsElementCollapsible = () => {
        setIsAchatItemsElementCollapsed(!isAchatItemsElementCollapsed);
    };

    const achatItemsElementsCollapsible = () => {
        setIsAchatItemsElementsCollapsed(!isAchatItemsElementsCollapsed);
    };

    const handleAddAchatItems = (data: AchatItemDto) => {
        if (data) {
            const newAchatItem: AchatItemDto = { id: null  , produit: selectedProduit, prixUnitaire: data.prixUnitaire ,prixVente: data.prixVente ,quantite: data.quantite ,quantiteAvoir: data.quantiteAvoir ,remise: data.remise ,achat: undefined , };
            setAchatItemsElements((prevItems) => [...prevItems, newAchatItem]);
            resetItem({prixUnitaire: null ,prixVente: null ,quantite: null ,quantiteAvoir: null ,remise: null ,});
                setSelectedProduit(emptyProduit);
        }
    };

    const handleDeleteAchatItems = (index) => {
        const updatedItems = achatItemsElements.filter((item, i) => i !== index);
        setAchatItemsElements(updatedItems);
    };

    const handleUpdateAchatItems = (data: AchatItemDto) => {
        if (data) {
            achatItemsElements.map((item, i) => {
                if (i === editIndexAchatItems) {
                    produit: undefined ;
                    item.produit = selectedProduit;
                    item.prixUnitaire = data.prixUnitaire;
                    item.prixVente = data.prixVente;
                    item.quantite = data.quantite;
                    item.quantiteAvoir = data.quantiteAvoir;
                    item.remise = data.remise;
                }
            });
            resetItem({prixUnitaire: null ,prixVente: null ,quantite: null ,quantiteAvoir: null ,remise: null ,});
            setSelectedProduit(emptyProduit);
            setIsEditModeAchatItems(false);
        }
        setIsAchatItemsElementCollapsed(!isAchatItemsElementCollapsed);
        setIsAchatItemsElementsCollapsed(!isAchatItemsElementsCollapsed);
    }

    const updateFormDefaultValuesAchatItems = (index: number) => {
        let updatedAchatItem: AchatItemDto;
        setEditIndexAchatItems(index);
        setIsEditModeAchatItems(true);
        achatItemsElements.map((item, i) => {
            if (i === index) {
                updatedAchatItem = item;
            }
        });
        resetItem({prixUnitaire: updatedAchatItem.prixUnitaire ,prixVente: updatedAchatItem.prixVente ,quantite: updatedAchatItem.quantite ,quantiteAvoir: updatedAchatItem.quantiteAvoir ,remise: updatedAchatItem.remise ,});
        setSelectedProduit(updatedAchatItem.produit);
        setIsAchatItemsElementCollapsed(!isAchatItemsElementCollapsed);
        setIsAchatItemsElementsCollapsed(!isAchatItemsElementsCollapsed);
    };


    const handleSave = async (item: AchatDto) => {
        item.client = selectedClient;
        item.achatItems = achatItemsElements;
        Keyboard.dismiss();
        try {
            await service.save( item );
            reset();
            setSelectedClient(emptyClient);
            setShowSavedModal(true);
            setTimeout(() => setShowSavedModal(false), 1500);
            item.achatItems = achatItemsElements;
            setAchatItemsElements([]);
        } catch (error) {
            console.error('Error saving achat:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={globalStyle.safeAreaViewCreate} >
        <ScrollView style={globalStyle.scrolllViewCreate} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
            <Text style={globalStyle.textHeaderCreate} >Create Achat</Text>

            <TouchableOpacity onPress={achatCollapsible} style={globalStyle.touchableOpacityCreate}>
                <Text style={globalStyle.touchableOpacityButtonCreate}>Achat</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isAchatCollapsed}>
                            <CustomInput control={control} name={'reference'} placeholder={'Reference'} keyboardT="default" />
                            <CustomInput control={control} name={'dateAchat'} placeholder={'Date achat'} keyboardT="numeric" />
                            <CustomInput control={control} name={'description'} placeholder={'Description'} keyboardT="default" />
                        <TouchableOpacity onPress={() => setClientModalVisible(true)} style={globalStyle.placeHolder} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{selectedClient.nom}</Text>
                                <Ionicons name="caret-down-outline" size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
            </Collapsible>
            <TouchableOpacity onPress={achatItemsElementCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Add Achat items</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isAchatItemsElementCollapsed}>
                <TouchableOpacity onPress={() => setProduitModalVisible(true)} style={globalStyle.placeHolder} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>{selectedProduit.reference}</Text>
                        <Ionicons name="caret-down-outline" size={22} color={'black'} />
                    </View>
                </TouchableOpacity>
                            <CustomInput control={itemControl} name={'prixUnitaire'} placeholder={'Prix unitaire'} keyboardT="numeric" />
                            <CustomInput control={itemControl} name={'prixVente'} placeholder={'Prix vente'} keyboardT="numeric" />
                            <CustomInput control={itemControl} name={'quantite'} placeholder={'Quantite'} keyboardT="numeric" />
                            <CustomInput control={itemControl} name={'quantiteAvoir'} placeholder={'Quantite avoir'} keyboardT="numeric" />
                            <CustomInput control={itemControl} name={'remise'} placeholder={'Remise'} keyboardT="numeric" />
                <TouchableOpacity onPress={ isEditAchatItemsMode ? handleItemSubmit((data) => { handleUpdateAchatItems(data); }) : handleItemSubmit(handleAddAchatItems) } style={{ backgroundColor: '#32cd32', borderRadius: 10, marginBottom: 5, width: '20%', paddingVertical: 10, marginLeft: '80%', marginTop: 10 }} >
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                    {isEditModeAchatItems ? <Ionicons name="pencil-outline" size={25} color={'blue'} /> : '+' }
                    </Text>
                </TouchableOpacity>

            </Collapsible>
            <TouchableOpacity onPress={achatItemsElementsCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>List Achat items</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isAchatItemsElementsCollapsed}>
                { achatItems && achatItemsElements.length > 0 ? ( achatItemsElements.map((item, index) => (
                    <View key={index} style={globalStyle.itemCard}>
                        <View>
                            <Text style={globalStyle.infos}>'Produit: {item.produit.reference}</Text>
                            <Text style={globalStyle.infos}>'Prix unitaire: {item.prixUnitaire}</Text>
                            <Text style={globalStyle.infos}>'Prix vente: {item.prixVente}</Text>
                            <Text style={globalStyle.infos}>'Quantite: {item.quantite}</Text>
                            <Text style={globalStyle.infos}>'Quantite avoir: {item.quantiteAvoir}</Text>
                            <Text style={globalStyle.infos}>'Remise: {item.remise}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => handleDeleteAchatItems(index)}>
                                <Ionicons name="trash-outline" size={22} color={'red'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => updateFormDefaultValuesAchatItems(index)}>
                                <Ionicons name="pencil-outline" size={22} color={'blue'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) ) : (
                    <View style={globalStyle.itemCard}>
                        <Text style={globalStyle.infos}>No achat items yet.</Text>
                    </View>
                )}
            </Collapsible>
        <CustomButton onPress={handleSubmit(handleSave)} text={"Save Achat"} bgColor={'#000080'} fgColor={'white'} />
        </ScrollView>
        <SaveFeedbackModal isVisible={showSavedModal} icon={'checkmark-done-sharp'} message={'saved successfully'} iconColor={'#32cd32'} />
        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on saving'} iconColor={'red'} />
        {produits !== null && produits.length > 0 ? ( <FilterModal visibility={produitModalVisible} placeholder={"Select a Produit"} onItemSelect={onProduitSelect} items={produits} onClose={handleCloseProduitModal} variable={'reference'} /> ) : null}
        {clients !== null && clients.length > 0 ? ( <FilterModal visibility={clientModalVisible} placeholder={"Select a Client"} onItemSelect={onClientSelect} items={clients} onClose={handleCloseClientModal} variable={'nom'} /> ) : null}
    </SafeAreaView>
);
};
export default AchatAdminCreate;

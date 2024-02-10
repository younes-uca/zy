import {Column} from 'primereact/column';
import {TabPanel, TabView} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import React from 'react';
import {Calendar} from 'primereact/calendar';
import {InputSwitch} from 'primereact/inputswitch';
import {TFunction} from "i18next";

import  {UserDto}  from '@/controller/model/security/User.model';

import useViewHook from "@/utils/zyhook/useViewhook";

type UserViewAdminType = {
    visible: boolean,
    onClose: () => void,
    selectedItem: UserDto,
    t: TFunction
}

const View: React.FC<UserViewAdminType> = ({visible,onClose,selectedItem, t}) => {

    const {
    onTabChange,
    hideDialog,
    itemDialogFooter,
    formateDate,
    parse,
    parseToIsoFormat,
    adaptDate,
    activeIndex
    } = useViewHook<UserDto>({selectedItem, onClose})

        return(
<Dialog visible={visible} style={{width: '70vw'}} header={t("user.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header={t("user.tabPan")}>
    <div className="formgrid grid">

        <div className="field col-6">
            <div  className="label-inputswitch">
                    <label htmlFor="credentialsNonExpired">{t("user.credentialsNonExpired")}</label>
                    <span className="p-float-label">
                        <InputSwitch  id="credentialsNonExpired" checked={selectedItem?.credentialsNonExpired} disabled />
                    </span>
            </div>
            </div>

        <div className="field col-6">
            <div  className="label-inputswitch">
                    <label htmlFor="enabled">{t("user.enabled")}</label>
                    <span className="p-float-label">
                        <InputSwitch  id="enabled" checked={selectedItem?.enabled} disabled />
                    </span>
            </div>
            </div>

            <div className="field col-6">
                <label htmlFor="email">{t("user.email")}</label>
                <InputText id="email" value={selectedItem?.email} disabled   />
            </div>

        <div className="field col-6">
            <div  className="label-inputswitch">
                    <label htmlFor="accountNonExpired">{t("user.accountNonExpired")}</label>
                    <span className="p-float-label">
                        <InputSwitch  id="accountNonExpired" checked={selectedItem?.accountNonExpired} disabled />
                    </span>
            </div>
            </div>

        <div className="field col-6">
            <div  className="label-inputswitch">
                    <label htmlFor="accountNonLocked">{t("user.accountNonLocked")}</label>
                    <span className="p-float-label">
                        <InputSwitch  id="accountNonLocked" checked={selectedItem?.accountNonLocked} disabled />
                    </span>
            </div>
            </div>

            <div className="field col-6">
                <label htmlFor="username">{t("user.username")}</label>
                <InputText id="username" value={selectedItem?.username} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="password">{t("user.password")}</label>
                <InputText id="password" value={selectedItem?.password} disabled   />
            </div>

        <div className="field col-6">
            <div  className="label-inputswitch">
                    <label htmlFor="passwordChanged">{t("user.passwordChanged")}</label>
                    <span className="p-float-label">
                        <InputSwitch  id="passwordChanged" checked={selectedItem?.passwordChanged} disabled />
                    </span>
            </div>
            </div>

            <div className="field col-6">
                <label htmlFor="lastName">{t("user.lastName")}</label>
                <InputText id="lastName" value={selectedItem?.lastName} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="firstName">{t("user.firstName")}</label>
                <InputText id="firstName" value={selectedItem?.firstName} disabled   />
            </div>

            <div className="field col-6">
                <label htmlFor="phone">{t("user.phone")}</label>
                <InputText id="phone" value={selectedItem?.phone} disabled   />
            </div>

        </div>
</TabPanel>
    <TabPanel header={t("user.modelPermissionUsers")}>
                <div className="card">
                    <DataTable value={selectedItem?.modelPermissionUsers} tableStyle={{minWidth: '50rem'}} dataKey="id">
                                <Column field="value" header={t("modelPermissionUser.value")}   ></Column>
                                <Column field="subAttribute" header={t("modelPermissionUser.subAttribute")}   ></Column>
                                <Column field="actionPermission.id" header={t("modelPermissionUser.actionPermission")}></Column>
                                <Column field="modelPermission.id" header={t("modelPermissionUser.modelPermission")}></Column>
                    </DataTable>
                </div>
        </TabPanel>
</TabView>
</Dialog>
);
};
export default View;

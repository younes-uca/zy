import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dropdown, DropdownChangeEvent} from 'primereact/dropdown';
import {TabView, TabPanel} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputNumber, InputNumberChangeEvent} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'primereact/calendar';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { InputSwitch } from 'primereact/inputswitch';
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';


import {MessageService} from '@/utils/zynerator/service/MessageService';


import {TFunction} from "i18next";
import {Toast} from "primereact/toast";

import useEditHook from "@/utils/zyhook/useEdit.hook";


import {UserAdminService} from '@/controller/service/admin/security/UserAdminService.service';
import  {UserDto}  from '@/controller/model/security/User.model';
import {UserCriteria} from "@/controller/criteria/security/UserCriteria.model";


import {RoleDto} from '@/controller/model/security/Role.model';
import {RoleAdminService} from '@/controller/service/admin/security/RoleAdminService.service';
import {ModelPermissionUserDto} from '@/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserAdminService} from '@/controller/service/admin/security/ModelPermissionUserAdminService.service';
import {ModelPermissionDto} from '@/controller/model/security/ModelPermission.model';
import {ModelPermissionAdminService} from '@/controller/service/admin/security/ModelPermissionAdminService.service';
import {RoleUserDto} from '@/controller/model/security/RoleUser.model';
import {RoleUserAdminService} from '@/controller/service/admin/security/RoleUserAdminService.service';
import {ActionPermissionDto} from '@/controller/model/security/ActionPermission.model';
import {ActionPermissionAdminService} from '@/controller/service/admin/security/ActionPermissionAdminService.service';


type UserEditAdminType = {
    visible: boolean,
    onClose: () => void,
    showToast: React.Ref<Toast>,
    selectedItem: UserDto
    update: (item: UserDto) => void,
    list: UserDto[],
    service: UserAdminService,
    t: TFunction
}
const Edit: React.FC<UserEditAdminType> = ({visible, onClose, showToast, selectedItem, update, list, service, t}) => {


    const isFormValid = () => {
    let errorMessages = new Array<string>();
        return errorMessages.length == 0 ;
    }
    const emptyItem = new UserDto();


    const {
        item,
        setItem,
        submitted,
        setSubmitted,
        activeIndex,
        setActiveIndex,
        activeTab,
        setActiveTab,
        onInputTextChange,
        onInputDateChange,
        onInputNumerChange,
        onMultiSelectChange,
        onBooleanInputChange,
        onDropdownChange,
        onTabChange,
        hideDialog,
        editItem,
        formateDate,
        parseToIsoFormat,
        adaptDate
        } = useEditHook<UserDto, UserCriteria>({list, selectedItem, onClose, update, showToast,service, t, isFormValid})

    const [roles, setRoles] = useState<RoleDto[]>([]);
    const [modelPermissions, setModelPermissions] = useState<ModelPermissionDto[]>([]);
    const [actionPermissions, setActionPermissions] = useState<ActionPermissionDto[]>([]);

    const [roleUsers, setRoleUsers] = useState<RoleUserDto>(new RoleUserDto());
    const [modelPermissionUsers, setModelPermissionUsers] = useState<ModelPermissionUserDto>(new ModelPermissionUserDto());

    const roleAdminService = new RoleAdminService();
    const modelPermissionUserAdminService = new ModelPermissionUserAdminService();
    const modelPermissionAdminService = new ModelPermissionAdminService();
    const roleUserAdminService = new RoleUserAdminService();
    const actionPermissionAdminService = new ActionPermissionAdminService();
    useEffect(() => {

    roleAdminService.getList().then(({data}) => {
        const RoleUsers = data?.map(prepareRoleUser)
        setRoleUsers(roleUsers)
    })


    actionPermissionAdminService.getList().then(({data}) => setActionPermissions(data)).catch(error => console.log(error));
    modelPermissionAdminService.getList().then(({data}) => setModelPermissions(data)).catch(error => console.log(error));

        }, []);



    const prepareRoleUser = (role: RoleDto) => {
        const roleUser = new RoleUserDto();
        roleUser.role = role;
        return roleUser;
    }



    const addModelPermissionUsers = () => {
        setSubmitted(true);
        if( item.modelPermissionUsers == null )
        item.modelPermissionUsers = new Array<ModelPermissionUserDto>();
        let _item = modelPermissionUsers;
        if (!_item.id) {
            item.modelPermissionUsers.push(_item);
            MessageService.showSuccess(showToast, 'ModelPermissionUsers Created');
            setItem((prevState :any) => ({...prevState, modelPermissionUsers: item.modelPermissionUsers }));
        } else {
            const updatedItems = item.modelPermissionUsers.map((item) => item.id === modelPermissionUsers.id ? {...modelPermissionUsers} : item);
            MessageService.showSuccess(showToast, 'ModelPermissionUsers Updated');
            setItem((prevState :any) => ({ ...prevState, modelPermissionUsers: updatedItems}));
        }
        setModelPermissionUsers(new ModelPermissionUserDto());
    };

    const deleteModelPermissionUsers = (rowData: any) => {
        const updatedItems = item.modelPermissionUsers.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState as any, modelPermissionUsers: updatedItems }));
        setModelPermissionUsers(new ModelPermissionUserDto());
        MessageService.showSuccess(showToast, 'UserItem Deleted');
    };

    const editModelPermissionUsers = (rowData: any) => {
        setActiveTab(0);
        setModelPermissionUsers(rowData);
    };

    const onInputNumerChangeModelPermissionUsers = (e: any, name: string) => {
        const val = e.value || 0;
        setModelPermissionUsers((prevModelPermissionUsers) => ({ ...prevModelPermissionUsers  as any, [name]: val, }));
    };

    const onDropdownChangeModelPermissionUsers = (e: any, field: string) => {
        setModelPermissionUsers((prevState) => ({ ...prevState  as any, [field]: e.value}));
    };


    const onMultiSelectChangeModelPermissionUsers = (e: any, field: string) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map((option  : any) => option && option.value);
            setModelPermissionUsers(prevState => ({ ...prevState as any, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeModelPermissionUsers = (e: any, name: string) => {
        const val = e.value;
        setModelPermissionUsers((prevItem) => ({ ...prevItem as any, [name]: val, }));
    };

    const onInputDateChangeModelPermissionUsers = (e: any, name: string) => {
        const val = e.value || '';
        setModelPermissionUsers({ ...modelPermissionUsers  as any, [name]:val})
    };

    const onInputTextChangeModelPermissionUsers = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        setModelPermissionUsers({ ...modelPermissionUsers  as any, [name]:val})
    };

    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" onClick={editItem} /> </>
    );



    return(
    <Dialog visible={visible} style={{width: '70vw'}} header={t("user.tabPan")} modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header={t("user.tabPan")}>
                <div className="formgrid grid">
                    <div className="field col-6">
                        <div  className="label-inputswitch">
                            <label htmlFor="credentialsNonExpired">{t("user.credentialsNonExpired")}</label>
                            <span className="p-float-label">
                                <InputSwitch  id="credentialsNonExpired" checked={item.credentialsNonExpired} onChange={(e) => onBooleanInputChange(e, 'credentialsNonExpired')} />
                            </span>
                        </div>
                    </div>
                    <div className="field col-6">
                        <div  className="label-inputswitch">
                            <label htmlFor="enabled">{t("user.enabled")}</label>
                            <span className="p-float-label">
                                <InputSwitch  id="enabled" checked={item.enabled} onChange={(e) => onBooleanInputChange(e, 'enabled')} />
                            </span>
                        </div>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="email">{t("user.email")}</label>
                        <InputText id="email" value={item ? item.email : ''} onChange={(e) => onInputTextChange(e, 'email')} required className={classNames({'p-invalid': submitted && !item.email})} />
                        {submitted && !item.email && <small className="p-invalid">Email is required.</small>}
                    </div>
                    <div className="field col-6">
                        <div  className="label-inputswitch">
                            <label htmlFor="accountNonExpired">{t("user.accountNonExpired")}</label>
                            <span className="p-float-label">
                                <InputSwitch  id="accountNonExpired" checked={item.accountNonExpired} onChange={(e) => onBooleanInputChange(e, 'accountNonExpired')} />
                            </span>
                        </div>
                    </div>
                    <div className="field col-6">
                        <div  className="label-inputswitch">
                            <label htmlFor="accountNonLocked">{t("user.accountNonLocked")}</label>
                            <span className="p-float-label">
                                <InputSwitch  id="accountNonLocked" checked={item.accountNonLocked} onChange={(e) => onBooleanInputChange(e, 'accountNonLocked')} />
                            </span>
                        </div>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="username">{t("user.username")}</label>
                        <InputText id="username" value={item ? item.username : ''} onChange={(e) => onInputTextChange(e, 'username')} required className={classNames({'p-invalid': submitted && !item.username})} />
                        {submitted && !item.username && <small className="p-invalid">Username is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="password">{t("user.password")}</label>
                        <InputText id="password" value={item ? item.password : ''} onChange={(e) => onInputTextChange(e, 'password')} required className={classNames({'p-invalid': submitted && !item.password})} />
                        {submitted && !item.password && <small className="p-invalid">Password is required.</small>}
                    </div>
                    <div className="field col-6">
                        <div  className="label-inputswitch">
                            <label htmlFor="passwordChanged">{t("user.passwordChanged")}</label>
                            <span className="p-float-label">
                                <InputSwitch  id="passwordChanged" checked={item.passwordChanged} onChange={(e) => onBooleanInputChange(e, 'passwordChanged')} />
                            </span>
                        </div>
                    </div>
                    <div className="field col-6">
                        <label htmlFor="lastName">{t("user.lastName")}</label>
                        <InputText id="lastName" value={item ? item.lastName : ''} onChange={(e) => onInputTextChange(e, 'lastName')} required className={classNames({'p-invalid': submitted && !item.lastName})} />
                        {submitted && !item.lastName && <small className="p-invalid">LastName is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="firstName">{t("user.firstName")}</label>
                        <InputText id="firstName" value={item ? item.firstName : ''} onChange={(e) => onInputTextChange(e, 'firstName')} required className={classNames({'p-invalid': submitted && !item.firstName})} />
                        {submitted && !item.firstName && <small className="p-invalid">FirstName is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="phone">{t("user.phone")}</label>
                        <InputText id="phone" value={item ? item.phone : ''} onChange={(e) => onInputTextChange(e, 'phone')} required className={classNames({'p-invalid': submitted && !item.phone})} />
                        {submitted && !item.phone && <small className="p-invalid">Phone is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="roleUsers">{t("roleUser.role")}</label>
                        {/*
                        <MultiSelect value={item ? item.roleUsers : ''} options={roleUsers}  optionLabel="role.authority" display="chip" placeholder="Select role"  maxSelectedLabels={3}  onChange={(e) => onMultiSelectChange(e, 'roleUsers')} />
                        */}
                    </div>
                </div>
            </TabPanel>
            <TabPanel header={t("user.modelPermissionUsers")}>
                        <div className="grid">
                            <div className="field col-6">
                                <label htmlFor="value">{t("modelPermissionUser.value")}</label>
                                <span className="p-float-label">
                                    <InputSwitch  id="value" checked={modelPermissionUsers.value} onChange={(e) => onBooleanInputChangeModelPermissionUsers(e, 'value')} />
                                </span>
                            </div>
                            <div className="field col-6">
                                <label htmlFor="subAttribute">{t("modelPermissionUser.subAttribute")}</label>
                                <InputText id="subAttribute" value={modelPermissionUsers.subAttribute} onChange={(e) => onInputTextChangeModelPermissionUsers(e, 'subAttribute')} required className={classNames({'p-invalid': submitted && !item.modelPermissionUsers})}/>
                            </div>
                            <div className="field col-6">
                                <label htmlFor="actionPermission">{t("modelPermissionUser.actionPermission")}</label>
                                <Dropdown id="actionPermissionDropdown" value={modelPermissionUsers.actionPermission} options={actionPermissions} onChange={(e) => onDropdownChangeModelPermissionUsers(e, 'actionPermission')} placeholder="Sélectionnez un actionPermission" filter  filterPlaceholder="Rechercher un actionPermission"  optionLabel="id" showClear />
                            </div>
                            <div className="field col-6">
                                <label htmlFor="modelPermission">{t("modelPermissionUser.modelPermission")}</label>
                                <Dropdown id="modelPermissionDropdown" value={modelPermissionUsers.modelPermission} options={modelPermissions} onChange={(e) => onDropdownChangeModelPermissionUsers(e, 'modelPermission')} placeholder="Sélectionnez un modelPermission" filter  filterPlaceholder="Rechercher un modelPermission"  optionLabel="id" showClear />
                            </div>

                            <div className="field col-1">
                                <Button icon="pi pi-plus" label="OK" className="mt-4" onClick={addModelPermissionUsers} />
                            </div>
                        </div>
                        <div className="p-col">
                        <div className="card">
                            <DataTable value={item.modelPermissionUsers} tableStyle={{minWidth: '50rem'}} dataKey="id">
                                <Column field="value" header={t("modelPermissionUser.value")} ></Column>
                                <Column field="subAttribute" header={t("modelPermissionUser.subAttribute")} ></Column>
                                <Column field="actionPermission.id" header={t("modelPermissionUser.actionPermission")}></Column>
                                <Column field="modelPermission.id" header={t("modelPermissionUser.modelPermission")}></Column>
                                <Column header="Actions" body={(rowData) => (
                                    <div>
                                        <Button icon="pi pi-times" rounded severity="warning" className="mr-2 p-button-danger" onClick={()=> deleteModelPermissionUsers(rowData)} />
                                        <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={()=> editModelPermissionUsers(rowData)} />
                                    </div>
                                )}></Column>
                            </DataTable>
                        </div>
                        </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Edit;



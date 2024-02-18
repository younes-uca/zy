import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {AppLayoutComponent} from "./app.layout.component";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/controller/service/Auth.service";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../zynerator/security/controller/service/User.service";
import {UserDto} from "../zynerator/security/controller/model/User.model";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{
    roleAdmin = false;
    editDialog = false ;
    languages: any[] | undefined;

    selectedLanguage: string | undefined;




    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    public async edit(dto: UserDto) {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });

    }
    public editUser(){
        this.userService.edit().subscribe(data => this.authenticatedUser = data);
        this.authService.loadInfos();
        this.editDialog = false;
    }

    public hideEditDialog() {
        this.editDialog = false;
    }



    constructor(public  layoutService:LayoutService ,public app: AppComponent, public appMain: AppLayoutComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService) {
    }

    useLanguage(language: string): void {
        this.translateService.use(language);
    }
    ngOnInit(): void {
        this.authService.loadInfos();
        if ( this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_ADMIN') {
            this.roleAdmin = true;
        }
        this.languages = [
            { name: 'Arabic', code: 'ar' },
            { name: 'Francais', code: 'fr' },
            { name: 'English', code: 'en' },
            { name: 'Egypt', code: 'EG' }
        ];
    }

    logout(){
        this.authService.logout();
    }
    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }
    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }
    set authenticatedUser(userDto: UserDto){
        this.authService.authenticatedUser = userDto;
    }


}

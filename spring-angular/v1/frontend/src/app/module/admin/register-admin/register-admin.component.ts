import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {AuthService} from 'src/app/zynerator/security/controller/service/Auth.service';
import {UserDto} from 'src/app/zynerator/security/controller/model/User.model';
import {RoleDto} from 'src/app/zynerator/security/controller/model/Role.model';
import {RoleUserDto} from 'src/app/zynerator/security/controller/model/RoleUser.model';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerForm = new FormGroup({
    prenom : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.registerForm.value;
    const {prenom, nom, userName, password, email} = formValues;
    const role = new RoleDto();
    role.authority = 'ROLE_Admin' ;
    const roleUser = new RoleUserDto();
    roleUser.role = role;
    this.user.prenom = prenom;
    this.user.nom = nom;
    this.user.username = userName;
    this.user.password = password;
    this.user.email = email;
    this.user.roleUsers = [roleUser] ;
    this.authService.registerAdmin();

  }
  get user(): UserDto {
    return this.authService.user;
  }

  set user(value: UserDto) {
    this.authService.user = value;
  }

}

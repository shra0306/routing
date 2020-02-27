import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()

export class AuthenticationService implements CanActivate,CanActivateChild{
    canActivate(){
      return true;
    }
    canActivateChild(){
        return false;
    }
    

}
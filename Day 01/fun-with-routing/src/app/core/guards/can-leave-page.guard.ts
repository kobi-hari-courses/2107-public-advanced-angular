import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogsService } from '../services/dialogs.service';
import { IsDirty } from './is-dirty.model';

@Injectable({
  providedIn: 'root'
})
export class CanLeavePageGuard implements CanDeactivate<IsDirty> {
  constructor(private dialogs: DialogsService){}

  async canDeactivate(
    component: IsDirty,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Promise<boolean> {
    if (component.getIsDirty()) {
      const doesUserAllow = await this.dialogs.confirm('Are you sure you want to exit the page?');
      return doesUserAllow;
    }
    else {
      return true;
    }
  }

}

import {Component} from "@angular/core";

declare var angular: angular.IAngularStatic;
import {Phone, PhoneData} from '../core/phone/phone.service';
import {downgradeComponent} from '@angular/upgrade/static';
import {RouteParams} from "../ajs-upgraded-providers";


@Component({
    selector: 'phone-detail',
    templateUrl: './phone-detail.template.html',
})

export class PhoneDetailComponent {
    phone: PhoneData;
    mainImageUrl: string;

    constructor(routeParams: RouteParams, phone: Phone) {
        phone.get(routeParams['phoneId']).subscribe(phone => {
            this.phone = phone;
            this.setImage(phone.images[0]);
        });
    }

    setImage(imageUrl: string) {

        this.mainImageUrl = imageUrl;
        console.log(this.mainImageUrl)
    }

}

angular.module('phoneDetail')
    .directive(
        'phoneDetail',
        downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
    );
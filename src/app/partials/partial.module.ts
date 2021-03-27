import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimaryCardComponentComponent } from './primary-card-component/primary-card-component.component';

@NgModule({
    declarations: [
        PrimaryCardComponentComponent
    ],
    exports: [
        PrimaryCardComponentComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PartialsModule { }
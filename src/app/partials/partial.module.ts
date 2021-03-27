import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimaryCardComponentComponent } from './primary-card-component/primary-card-component.component';
import { SecondaryCardComponent } from './secondary-card/secondary-card.component';

@NgModule({
    declarations: [
        PrimaryCardComponentComponent,
        SecondaryCardComponent
    ],
    exports: [
        PrimaryCardComponentComponent,
        SecondaryCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PartialsModule { }
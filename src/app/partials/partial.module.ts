import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimaryCardComponentComponent } from './primary-card-component/primary-card-component.component';
import { SecondaryCardComponent } from './secondary-card/secondary-card.component';
import { NewCardComponent } from './new-card/new-card.component';

@NgModule({
    declarations: [
        PrimaryCardComponentComponent,
        SecondaryCardComponent,
        NewCardComponent
    ],
    exports: [
        PrimaryCardComponentComponent,
        SecondaryCardComponent,
        NewCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PartialsModule { }
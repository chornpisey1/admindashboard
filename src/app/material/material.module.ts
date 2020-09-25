import {  NgModule } from '@angular/core';
// import module material
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    LayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatTreeModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatTooltipModule,
];

@NgModule({
    imports: [
        MaterialComponents,
    ],
    exports: [
        MaterialComponents,
    ]
})
export class MaterialModule { }

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { About } from './about/about';
import { Products } from './products/products';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'employee-directory', component: EmployeeDirectory},
    {path: 'about', component: About},
    {path: 'products', component: Products},
    {path: '**', component: Pagenotfound}
];

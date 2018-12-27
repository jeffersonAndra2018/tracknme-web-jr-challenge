import { Teste2Component } from './pages/teste2/teste2.component';
import { Teste1Component } from './pages/teste1/teste1.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    
    { path: 'teste1', component: Teste1Component },
    { path: 'teste2', component: Teste2Component },
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

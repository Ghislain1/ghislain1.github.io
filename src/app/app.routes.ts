import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Experience } from './experience/experience';
import { NotFound } from './not-found/not-found';
import { Home } from './home/home';
import { Technology } from './technology/technology';
import { Education } from './education/education';
import { Connect } from './connect/connect';
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'home',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'profile',
        component: Profile,
        title: 'Profile Page',
    },
    {
        path: 'experience',
        component: Experience,
        title: 'Experience Page',
    },
    {
        path: 'technology',
        component: Technology,
        title: 'Technology Page',
    },
    {
        path: 'education',
        component: Education,
        title: 'Education Page',
    },
    {
        path: 'connect',
        component: Connect,
        title: 'Connect Page',
    },
    { path: '**', component: NotFound } // Wildcard - always last
];

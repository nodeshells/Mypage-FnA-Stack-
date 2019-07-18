import {Routes} from '@angular/router';
import {TopComponent} from './top/top.component';
import {ProfilePreviewComponent} from './profile/preview/preview.component';
import {ProfileEditComponent} from './profile/edit/edit.component';
import {SkillPreviewComponent} from './skill/preview/preview.component';
import {SkillEditComponent} from './skill/edit/edit.component';
import {ProfiletopComponent} from './profile/profiletop/profiletop.component';
import {SkilltopComponent} from './skill/skilltop/skilltop.component';
import {BlogtopComponent} from './blog/blogtop/blogtop.component';
import {BlogsearchComponent} from './blog/blogsearch/blogsearch.component';
import {BlogpreviewComponent} from './blog/blogpreview/blogpreview.component';
import {BlogeditComponent} from './blog/blogedit/blogedit.component';
import {BlogmanagerComponent} from './blog/blogmanager/blogmanager.component';
import {BlogPageModule} from '../blog/blog.module';
import {BlogpostComponent} from './blog/blogpost/blogpost.component';

export const myRoutes: Routes = [
  {
    path: '',
    children: [
      {path: 'top', component: TopComponent}
    ]
  },
  {
    path: 'profile',
    component: ProfiletopComponent,
    children: [
      {path: 'preview', component: ProfilePreviewComponent},
      {path: 'edit', component: ProfileEditComponent}
    ]
  },
  {
    path: 'skill',
    component: SkilltopComponent,
    children: [
      {path: 'preview', component: SkillPreviewComponent},
      {path: 'edit', component: SkillEditComponent}
    ]
  },
  {
    path: 'blog',
    component: BlogtopComponent,
    children: [
      {path: 'post', component: BlogpostComponent},
      {path: 'manager', component: BlogmanagerComponent},
      {path: 'search', component: BlogsearchComponent},
      {path: 'preview', component: BlogpreviewComponent},
      {path: 'edit', component: BlogeditComponent}
    ]
  }
];

export class AdminRoutingModule {
}

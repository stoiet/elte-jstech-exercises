import angular from 'angular';
import { ApplicationComponent, EditorComponent, SourceEditorComponent,
  SaveButtonComponent, LinkListComponent, LinkItemComponent, SourceLinksComponent } from './components';
import { SourceService } from './services';
import { SourceStore } from './stores';

const applicationModule = angular.module('application', []);

applicationModule

  .component('application', ApplicationComponent.create())
  .component('editor', EditorComponent.create())
  .component('linkItem', LinkItemComponent.create())
  .component('linkList', LinkListComponent.create())
  .component('saveButton', SaveButtonComponent.create())
  .component('sourceLinks', SourceLinksComponent.create())
  .component('sourceEditor', SourceEditorComponent.create())

  .service('sourceService', SourceService.create())

  .service('sourceStore', SourceStore.create())

  .config(['$httpProvider', $httpProvider => {
    $httpProvider.defaults.headers.common['Authorization'] = window.config.token;
  }])

  .run(['sourceService', sourceService => {
    sourceService.fetch();
  }]);


export const boostrap = element => {
  angular.bootstrap(element, [applicationModule.name], { strictDi: true });
};

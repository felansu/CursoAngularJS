angular
    .module('pdCurso', [
        'ngMessages',
        'ngAnimate',
        'toastr',
        'ui.grid',
        'ui.grid.selection',
        'ngMaterial'
    ]).config(function ($compileProvider) {

    // Corre��o de incompatibilidade angularjs 1.6
    $compileProvider.preAssignBindingsEnabled(true);
});
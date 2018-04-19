(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorListaPreAlerta', controladorListaPreAlerta);
  controladorListaPreAlerta.$inject = ['$state','$stateParams','$location','servicioUsuarios','servicioArticulos'];

  function controladorListaPreAlerta($state,$stateParams,$location,servicioUsuarios,servicioArticulos) {
    let vm = this;
   
   vm.listaPaquetes = servicioUsuarios.getPaquete();
   
    vm.listaArticulos = servicioArticulos.getArticulo();

    vm.editPrealerta = (pPaquete)=>{
     $state.go('main.editarPreAlerta', {objPaqueteTemp : JSON.stringify(pPaquete)});
     };



  }
   
})();
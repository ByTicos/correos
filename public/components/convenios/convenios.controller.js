(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorConvenios', controladorConvenios);
  controladorConvenios.$inject = ['$stateParams', '$state', 'servicioEntidades']
  function controladorConvenios($stateParams, $state, servicioEntidades) {
    let vm = this;
    
    vm.nuevoConvenio = {};
    vm.listaEntidades = servicioEntidades.getEntidades();
    vm.listaConvenios = servicioEntidades.getConvenios();

    vm.registrarConvenio = (pNuevoConvenio) => {
      
      let objNuevoConvenio = new Convenio(pNuevoConvenio.nombre, pNuevoConvenio.tipoTramite);
      let registro = servicioEntidades.addConvenio(objNuevoConvenio);

      if (registro == true) {
        swal("Registro exitoso", "El convenio ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
  }
})();
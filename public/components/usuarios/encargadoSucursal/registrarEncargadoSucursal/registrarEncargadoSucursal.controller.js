(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarEncargadoSucursal', controladorRegistrarEncargadoSucursal);
    
    controladorRegistrarEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios', 'servicioSucursales'];

  function controladorRegistrarEncargadoSucursal($state, $stateParams, $location, servicioUsuarios, servicioSucursales) {
    let vm = this;

    vm.nuevoUsuario = {};
    servicioSucursales.listarSucursalesJson();
    vm.listaSucursales = servicioSucursales.getSucursal();
    console.log('Prueba', servicioSucursales.getSucursal());

    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito,pNuevoUsuario.direccionExacta, '2',pNuevoUsuario.sucursalAsignada, pNuevoUsuario.puesto);

      let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

      if (registro == true) {
        swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
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

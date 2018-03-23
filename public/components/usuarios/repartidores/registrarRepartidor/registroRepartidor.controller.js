(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRepartidores', controladorRepartidores);
    
    controladorRepartidores.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorRepartidores($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaRepartidores = listarRepartidores();
    vm.nuevoRepartidor = {};
    // vm.agregarLicencia = agregarLicencia();
    // vm.listarLicencias = listaLicencia();
    
    vm.editRepartidor = (pUsuario) =>{
      $state.go('editRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});

    };


    vm.registrarRepartidor = (pNuevoUsuario) => {
      let objLicencia = new Licencia(pNuevoUsuario.numLicencia,
        pNuevoUsuario.licencia, pNuevoUsuario.vencimientoLicencia)

      pNuevoUsuario.licencias = new Array(objLicencia);
      console.log(pNuevoUsuario.licencias[0].numLicencia + ' Num Licencia');
      console.log(pNuevoUsuario.licencias[0].tipoLicencia + ' tipo Licencia');
      

      let objNuevoRepartidor = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, 'repartidor', pNuevoUsuario.sucursalAsignada, ' ',pNuevoUsuario.vehiculo, objLicencia);

      let registro = servicioUsuarios.addUsuario(objNuevoRepartidor);

      if (registro == true) {
        swal("Registro exitoso", "El repartidor se registró correctamente", "success", {
          button: "Aceptar",
        });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Inténtelo nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'repartidor') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    }

    // vm.agregarLicencia = (pNuevaLicencia) => {

    //   let objNuevaLicencia = new Licencia(pNuevaLicencia.numLicencia, pNuevaLicencia.tipoLicencia, pNuevaLicencia.vencimiento);
    //   let listaRepartidores = servicioUsuarios.getRepartidores()
    // }
    // function listaLicencia(){
    //   let listaRepartidores = servicioUsuarios.getLicencias();
      
    // }

    
  }
})();



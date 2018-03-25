(()=>{

  'use strict';
  angular
  .module('correos')
  .controller('controladorEditarTarjetas', controladorEditarTarjetas);
  
  controladorEditarTarjetas.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorEditarTarjetas($http,$state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
  
    vm.editarTarjeta = {};
  
    let objTarjetaAEditar = JSON.parse($stateParams.objPaqueteTemp);
    
  
    let objNuevaTarjeta = new Tarjeta(objTarjetaAEditar.id,objTarjetaAEditar.nombre, objTarjetaAEditar.numero, objTarjetaAEditar.expiracion, objTarjetaAEditar.cvv,);
  
    vm.editarTarjeta.id = objNuevaTarjeta.id;
    vm.editarTarjeta.nombre = objNuevaTarjeta.nombre;
    vm.editarTarjeta.numero = objNuevaTarjeta.numero;
    vm.editarTarjeta.expiracion = objNuevaTarjeta.expiracion;
    vm.editarTarjeta.cvv = objNuevaTarjeta.cvv;
  
    vm.cambiarEstadoTarjeta = (pTarjeta) =>{
      let listaTarjeta = servicioUsuarios.getTarjeta();
  
      listaTarjeta.forEach(objTarjetas =>{
        if (objTarjetas.id == objNuevoPaquete.id) {
          objTarjetas.cambiarEstadoDeActividadTarjeta(pTarjeta);
        }
        servicioUsuarios.actualizartarjeta(objTarjetas);
      });
      $state.go('main.tarjetas');
    };
  
  
  
   vm.editTarjeta = (pTarjeta)=>{
    let listaTarjeta = servicioUsuarios.getTarjeta();
  
    listaTarjeta.forEach(objTarjeta =>{
    if(objTarjeta.id == objNuevoPaquete.id){
     objTarjeta.id = pTarjeta.id;
     objTarjeta.nombre = pTarjeta.nombre;
     objTarjeta.numero = pTarjeta.numero;
     objTarjeta.expiracion = pTarjeta.expiracion;
     objTarjeta.cvv = pTarjeta.cvv;
      
     servicioUsuarios.actualizarPaquete(objTarjeta);
    }
    });
    swal("Edición exitosa", "Tarjeta editada correctamente", "success", {
          button: "Aceptar",
        }); 
  $state.go ('main.listartarjetas');
  
  };
  }
  
  })();
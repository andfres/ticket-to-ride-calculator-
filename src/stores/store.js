import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    jugadores: [
      { id: 0, nombre: "Jugador 1", color: "#ff0000", vagones: crearVagones(), vagonesUsados:0, puntosEstaciones: 0, objetivos: [], puntosTotales: 0},
      { id: 1, nombre: "Jugador 2", color: "#0015ff", vagones: crearVagones(), vagonesUsados:0, puntosEstaciones: 0, objetivos: [], puntosTotales: 0},
      { id: 2, nombre: "Jugador 3", color: "#fbff00", vagones: crearVagones(), vagonesUsados:0, puntosEstaciones: 0, objetivos: [], puntosTotales: 0},
      { id: 3, nombre: "Jugador 4", color: "#00ff00", vagones: crearVagones(), vagonesUsados:0, puntosEstaciones: 0, objetivos: [], puntosTotales: 0},
      { id: 4, nombre: "Jugador 5", color: "#000000", vagones: crearVagones(), vagonesUsados:0, puntosEstaciones: 0, objetivos: [], puntosTotales: 0},
    ]
  }),


    actions: {

      addVagon(jugadoriD, vagoniD) {
        const vagon = this.jugadores[jugadoriD].vagones[vagoniD]; 
        vagon.puntosTotales += vagon.puntos;
        vagon.cantidad += 1;
       //this.jugadores[jugador].puntosTotales += vagon.puntos;
    },

      quitarVagon(jugadoriD, vagoniD) {
        const vagon = this.jugadores[jugadoriD].vagones[vagoniD];
        vagon.puntosTotales -= vagon.puntos;
        vagon.cantidad -= 1;
      //this.jugadores[jugador].puntosTotales += vagon.puntos;
    },



 


    addObjetivo(jugador, num_objetivo, cantidad) {
      const objetivos = this.jugadores[jugador].objetivos;
      objetivos[num_objetivo] = cantidad;
    },

  }, //fin actions
});

// const crearVagones = () => {
//   const array = [];
//   for (let i = 0; i < 7; i++) {
//     array.push({ puntos: 0, cantidad: 0 });
//   }
//   return array;
// };


const crearVagones = () => {
  return [
    { id: 0, num_vagones: 1, puntos: 1,  cantidad: 0, puntosTotales: 0 },
    { id: 1, num_vagones: 2, puntos: 2,  cantidad: 0, puntosTotales: 0 },
    { id: 2, num_vagones: 3, puntos: 4,  cantidad: 0, puntosTotales: 0 },
    { id: 3, num_vagones: 4, puntos: 7,  cantidad: 0, puntosTotales: 0 },
    { id: 4, num_vagones: 5, puntos: 10, cantidad: 0, puntosTotales: 0 },
    { id: 5, num_vagones: 6, puntos: 15, cantidad: 0, puntosTotales: 0 },
    { id: 6, num_vagones: 8, puntos: 21, cantidad: 0, puntosTotales: 0 },
  ];
};





// const colors = ["#ff0000", "#0015ff", "#fbff00", "#00ff00", "#000000"];
// const coloresDisponibles = [];

// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
// })

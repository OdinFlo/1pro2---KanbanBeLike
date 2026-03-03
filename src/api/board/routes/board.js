'use strict';

module.exports = {
  routes: [
    // Lister tous les boards
    {
      method: 'GET',
      path: '/boards',
      handler: 'board.find',
    },
    // Récupérer un board par ID
    {
      method: 'GET',
      path: '/boards/:id',
      handler: 'board.findOne',
      config: {
        policies: ['api::board.is-owner'],
      },
    },
    // Créer un nouveau board
    {
      method: 'POST',
      path: '/boards',
      handler: 'board.create',
    },
    // Mettre à jour un board existant
    {
      method: 'PUT',
      path: '/boards/:id',
      handler: 'board.update',
      config: {
        policies: ['api::board.is-owner'],
      },
    },
    // Supprimer un board
    {
      method: 'DELETE',
      path: '/boards/:id',
      handler: 'board.delete',
      config: {
        policies: ['api::board.is-owner'],
      },
    },
  ],
};

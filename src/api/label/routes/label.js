'use strict';

module.exports = {
  routes: [
    // Lister tous les labels
    {
      method: 'GET',
      path: '/labels',
      handler: 'label.find',
    },
    // Récupérer un label par ID
    {
      method: 'GET',
      path: '/labels/:id',
      handler: 'label.findOne',
      config: {
        policies: ['api::label.is-owner-label'],
      },
    },
    // Créer un label
    {
      method: 'POST',
      path: '/labels',
      handler: 'label.create',
    },
    // Mettre à jour un label
    {
      method: 'PUT',
      path: '/labels/:id',
      handler: 'label.update',
      config: {
        policies: ['api::label.is-owner-label'],
      },
    },
    // Supprimer un label
    {
      method: 'DELETE',
      path: '/labels/:id',
      handler: 'label.delete',
      config: {
        policies: ['api::label.is-owner-label'],
      },
    },
  ],
};


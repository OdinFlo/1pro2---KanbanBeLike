'use strict';

module.exports = {
  routes: [
    // Lister toutes les colonnes
    {
      method: 'GET',
      path: '/colonnes',
      handler: 'colonne.find',
    },
    // Récupérer une colonne par ID
    {
      method: 'GET',
      path: '/colonnes/:id',
      handler: 'colonne.findOne',
      config: {
        policies: ['api::colonne.is-owner-colonne'],
      },
    },
    // Créer une colonne
    {
      method: 'POST',
      path: '/colonnes',
      handler: 'colonne.create',
    },
    // Mettre à jour une colonne
    {
      method: 'PUT',
      path: '/colonnes/:id',
      handler: 'colonne.update',
      config: {
        policies: ['api::colonne.is-owner-colonne'],
      },
    },
    // Supprimer une colonne
    {
      method: 'DELETE',
      path: '/colonnes/:id',
      handler: 'colonne.delete',
      config: {
        policies: ['api::colonne.is-owner-colonne'],
      },
    },
  ],
};


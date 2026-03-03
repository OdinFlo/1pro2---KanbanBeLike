'use strict';

module.exports = {
  routes: [
    // Lister toutes les cartes
    {
      method: 'GET',
      path: '/cards',
      handler: 'card.find',
    },
    // Récupérer une carte par ID
    {
      method: 'GET',
      path: '/cards/:id',
      handler: 'card.findOne',
      config: {
        policies: ['api::card.is-owner-card'],
      },
    },
    // Créer une carte
    {
      method: 'POST',
      path: '/cards',
      handler: 'card.create',
    },
    // Mettre à jour une carte
    {
      method: 'PUT',
      path: '/cards/:id',
      handler: 'card.update',
      config: {
        policies: ['api::card.is-owner-card'],
      },
    },
    // Supprimer une carte
    {
      method: 'DELETE',
      path: '/cards/:id',
      handler: 'card.delete',
      config: {
        policies: ['api::card.is-owner-card'],
        },

    },
  ],
};


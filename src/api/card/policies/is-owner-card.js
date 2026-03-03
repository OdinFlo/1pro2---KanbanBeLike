'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  if (!user) return false;

  const cardId = policyContext.params.id;
  if (!cardId) return false;

  const card = await strapi.entityService.findOne(
    'api::card.card',
    cardId,
    {
      populate: {
        colonne: {
          populate: {
            board: {
              populate: ['owner'],
            },
          },
        },
      },
    }
  );

  if (
    !card ||
    !card.colonne ||
    !card.colonne.board ||
    !card.colonne.board.owner
  ) {
    return false;
  }

  return card.colonne.board.owner.id === user.id;
};
'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  if (!user) return false;

  const colonneId = policyContext.params.id;
  if (!colonneId) return false;

  const colonne = await strapi.entityService.findOne(
    'api::colonne.colonne',
    colonneId,
    {
      populate: {
        board: {
          populate: ['owner'],
        },
      },
    }
  );

  if (!colonne || !colonne.board || !colonne.board.owner) return false;

  return colonne.board.owner.id === user.id;
};

'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  if (!user) return false;

  const boardId = policyContext.params.id;
  if (!boardId) return false;

  const board = await strapi.entityService.findOne(
    'api::board.board',
    boardId,
    { populate: ['owner'] }
  );

  if (!board || !board.owner) return false;

  return board.owner.id === user.id;
};

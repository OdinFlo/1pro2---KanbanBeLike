'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  if (!user) return false;

  const labelId = policyContext.params.id;
  if (!labelId) return false;

  const label = await strapi.entityService.findOne(
    'api::label.label',
    labelId,
    {
      populate: {
        board: {
          populate: ['owner'],
        },
      },
    }
  );

  if (!label || !label.board || !label.board.owner) return false;

  return label.board.owner.id === user.id;
};

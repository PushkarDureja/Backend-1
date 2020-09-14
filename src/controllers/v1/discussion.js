const create = require('../create');
const Discussion = require('../../models/Discussion');

module.exports = {
  getDiscussionById: create(async (req, res) => {
    const { id } = req.params;

    const discussion = await Discussion.findById(id)
      .populate('userId', Discussion.getUserFields().join(' '))
      .select(Discussion.getDiscussionFields().join(' '));

    res.json({ data: discussion });
  }),
};

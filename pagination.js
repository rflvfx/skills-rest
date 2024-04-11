// Offset pagination helper
const paginate = (items, { page = 1, limit = 20 }) => {
  const start = (page - 1) * limit;
  return {
    data: items.slice(start, start + limit),
    meta: { page, limit, total: items.length },
  };
};
module.exports = { paginate };

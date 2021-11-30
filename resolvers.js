const VideoData = require("./Model/video");

const resolvers = {
  Query: {
    getdata: async (parent, args, context, info) => {
      const result = await VideoData.find();
      return result;
    },
  },
};

module.exports = resolvers;

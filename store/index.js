import client from "~/plugins/contentful";

export const state = () => ({
  collections: null
});

export const mutations = {
  updateCollections: (state, collections) => {
    state.collections = collections;
  }
};

export const actions = {
  async getCollections({ commit, dispatch }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "collections"
      });
      if (response.items.length > 0) {
        const getImg = obj => {
          return obj.map(i => {
            return [
              i.fields.file.url,
              i.fields.title == "thumb" ? true : false
            ];
          });
        };
        let collections = response.items.map((c, index) => {
          return {
            title: c.fields.title,
            shortDescription: c.fields.shortDescription,
            description: c.fields.description,
            slug: c.fields.slug,
            gallery: getImg(c.fields.gallery),
            id: index + 1
          };
        });
        commit("updateCollections", collections);
      }
    } catch (err) {
      console.error(err);
    }

}


};

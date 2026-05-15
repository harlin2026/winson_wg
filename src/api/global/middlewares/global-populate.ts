const mediaFields = {
  fields: ['name', 'url', 'alternativeText', 'width', 'height'],
};

const linkPopulate = {
  fields: ['href', 'label', 'isExternal', 'isImageLink'],
  populate: {
    image: mediaFields,
  },
};

const globalPopulate = {
  header: {
    populate: {
      logomark: mediaFields,

      logo: linkPopulate,

      navitems: linkPopulate,
    },
  },

  footer: {
    fields: ['copyrightText', 'companyName'],
    populate: {
      footerMenus: {
        fields: ['title'],
        populate: {
          href: linkPopulate,
        },
      },

      logo: linkPopulate,

      copyrightLink: linkPopulate,

      socialLink: linkPopulate,

      contactItems: {
        fields: ['text'],
        populate: {
          icon: mediaFields,
        },
      },
    },
  },
};

export default (config: any, { strapi }: any) => {
  return async (ctx: any, next: any) => {
    ctx.query = {
      ...ctx.query,
      populate: globalPopulate,
    };

    await next();
  };
};
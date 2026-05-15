import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    contactItems: Schema.Attribute.Component<'shared.contact-item', true>;
    copyrightLink: Schema.Attribute.Component<'shared.link', true>;
    copyrightText: Schema.Attribute.String;
    footerMenus: Schema.Attribute.Component<'shared.footer-column', true>;
    logo: Schema.Attribute.Component<'shared.link', false>;
    socialLink: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.link', false>;
    logomark: Schema.Attribute.Media<'images'>;
    navitems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedContactItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_items';
  info: {
    displayName: 'ContactItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {
    href: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isImageLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.contact-item': SharedContactItem;
      'shared.footer-column': SharedFooterColumn;
      'shared.link': SharedLink;
    }
  }
}

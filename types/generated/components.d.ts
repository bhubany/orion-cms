import type { Schema, Struct } from '@strapi/strapi';

export interface PagePropertiesContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_properties_content_blocks';
  info: {
    displayName: 'ContentBlock';
    icon: 'dashboard';
  };
  attributes: {
    hero: Schema.Attribute.String;
  };
}

export interface PagePropertiesTags extends Struct.ComponentSchema {
  collectionName: 'components_page_properties_tags';
  info: {
    displayName: 'tags';
    icon: 'hashtag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-properties.content-block': PagePropertiesContentBlock;
      'page-properties.tags': PagePropertiesTags;
    }
  }
}

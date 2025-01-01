import type { Struct, Schema } from '@strapi/strapi';

export interface MultiMulti extends Struct.ComponentSchema {
  collectionName: 'components_multi_multi_s';
  info: {
    displayName: 'Multi ';
  };
  attributes: {
    Mu_Name: Schema.Attribute.String & Schema.Attribute.Required;
    Mu_Family: Schema.Attribute.String & Schema.Attribute.Required;
    Mu_Moblie: Schema.Attribute.String & Schema.Attribute.Required;
    Mu_Tel: Schema.Attribute.String & Schema.Attribute.Required;
    Mu_Description: Schema.Attribute.RichText;
    Mu_Title: Schema.Attribute.String & Schema.Attribute.Required;
    Mu_Pic: Schema.Attribute.Media<'images' | 'files', true>;
    Mu_Video: Schema.Attribute.Media<'files' | 'videos', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'multi.multi': MultiMulti;
    }
  }
}

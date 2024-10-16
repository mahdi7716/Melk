import type { Struct, Schema } from '@strapi/strapi';

export interface PricePrice extends Struct.ComponentSchema {
  collectionName: 'components_price_prices';
  info: {
    displayName: 'Price';
    description: '';
  };
  attributes: {
    Sale_amount: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0645\u0628\u0644\u063A \u0641\u0631\u0648\u0634'>;
    buy_amount: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0645\u0628\u0644\u063A \u062E\u0631\u06CC\u062F '>;
  };
}

export interface PersonPerson extends Struct.ComponentSchema {
  collectionName: 'components_person_people';
  info: {
    displayName: 'Person';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Family: Schema.Attribute.String & Schema.Attribute.Required;
    Mobile: Schema.Attribute.String & Schema.Attribute.Required;
    Tel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'price.price': PricePrice;
      'person.person': PersonPerson;
    }
  }
}

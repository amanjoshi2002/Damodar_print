// lib/constants/siteConfig.ts

export interface SiteInfo {
    name: string;
    address: string;
    mobileNo: string;
    email: string;
    socialMedia: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    businessHours: {
      monday: string;
      tuesday: string;
      // Add more days as needed
    };
  }
  
  export const siteInfo: SiteInfo = {
    name: 'Damodar Print Zone',
    address: 'Shop No 30, 1st Floor, Fr Jos Vaz road, Vasco Da Gama, Goa - 403802 (Near Damodar Xerox, Apna Bazaar)',
    mobileNo: '9623451932',
    email: 'damodarprintzone@gmail.com',
    socialMedia: {
      facebook: 'https://facebook.com/yourprintingshop',
      instagram: 'https://instagram.com/yourprintingshop',
      twitter: 'https://twitter.com/yourprintingshop',
    },
    businessHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      // Add business hours for other days
    },
  };
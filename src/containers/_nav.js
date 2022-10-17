import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Management']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Posts',
    to: '/Posts',
    icon: 'cil-puzzle',

  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Shipping Offers',
  //   to: '/ShippingOffers',

  //   icon: 'cil-puzzle',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Website Information',
    to: '/Settings',

    icon: 'cil-puzzle',
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Companies',
  //   route: '/companies',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'All Companies',
  //       to: '/companies/companies',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Add New Company',
  //       to: '/companies/AddNewCompany',
  //     },


  //   ],
  // },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Users',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New User',
        to: '/users/AddNewUser',
      },
    ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Reciepients',
  //   route: '/Reciepients',
  //   icon: 'cil-user',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'All Reciepients',
  //       to: '/Reciepients/AllReciepients',
  //     },
  //     // {
  //     //   _tag: 'CSidebarNavItem',
  //     //   name: 'إضافة مستلم جديد',
  //     //   to: '/Reciepients/AddNewReciepient',
  //     // },
  //   ],
  // },





  {
    _tag: 'CSidebarNavDropdown',
    name: 'Property Types',
    route: '/PropertyTypes',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Property Types',
        to: '/PropertyTypes/PropertyTypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Property Type',
        to: '/PropertyTypes/AddNewPropertyType',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Sub Property Types',
        to: '/PropertyTypes/SubPropertyTypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Sub Property Type',
        to: '/PropertyTypes/AddNewSubPropertyType',
      },
    ],
  },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Amenities',
    route: '/PropertySites',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Amenities',
        to: '/PropertySites/PropertySites',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Amenity',
        to: '/PropertySites/AddNewPropertySite',
      },
    ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Offers Types',
  //   route: '/OffersTypes',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'All Offers Types',
  //       to: '/OffersTypes/OffersTypes',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Add New Offer Type',
  //       to: '/OffersTypes/AddNewOfferType',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pricing Options',
    route: '/PricingOptions',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Pricing Options',
        to: '/PricingOptions/PricingOptions',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Pricing Option',
        to: '/PricingOptions/AddNewPricingOption',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Categories',
    route: '/Categories',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Categories',
        to: '/Categories/AllCategories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Category',
        to: '/Categories/AddNewCategory',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tags',
    route: '/Tags',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Tags',
        to: '/Tags/AllTags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Tag',
        to: '/Tags/AddNewTag',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pre-Defined Images',
    route: '/PreImages',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Images',
        to: '/PreImages/AllPreImages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Images',
        to: '/PreImages/AddNewPreImages',
      },
    ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Packages Types',
  //   route: '/Packages',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'All Packages Types',
  //       to: '/Packages/AllPackagesTypes',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Add New Pakage Type',
  //       to: '/Packages/AddNewPakageType',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/DynamicPages',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Pages',
        to: '/DynamicPages/AllPages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Page',
        to: '/DynamicPages/AddNewPage',
      },
    ],
  },



  {
    _tag: 'CSidebarNavDropdown',
    name: 'Countries',
    route: '/Countries',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Countries',
        to: '/Countries/AllCountries',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Country',
        to: '/Countries/AddNewCountry',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Areas',
    route: '/Areas',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Areas',
        to: '/Areas/AllAreas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Area',
        to: '/Areas/AddNewArea',
      },
    ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Cities',
  //   route: '/Cities',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'All Cities',
  //       to: '/Cities/AllCities',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Add New City',
  //       to: '/Cities/AddNewCity'
  //     },
  //   ],
  // },





  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'المواقع',
  //   route: '/Locations',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'الدول',
  //       to: '/Locations/Countries',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'المدن',
  //       to: '/Locations/Cities',
  //     },

  //   ],
  // },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Contact Us',
    route: '/ContactUs',
    icon: 'cil-phone',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Messages',
        to: '/ContactUs/messages',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Replies',
      //   to: '/ContactUs/Replies',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Roles',
    to: '/Roles',
    icon: 'cil-puzzle',
  },

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'FAQs',
  //   to: '/FAQs',
  //   icon: 'cil-align-center',
  // },



  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav

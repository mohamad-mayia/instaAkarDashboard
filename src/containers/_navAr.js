import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'داشبورد',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['إدارة']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'المنشورات',
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
    name: 'معلومات الشركة',
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
    name: 'المستخدمين',
    route: '/users',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل المستخدمين',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة مستخدم جديد',
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
    name: 'أنواع العقارات',
    route: '/PropertyTypes',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الأنواع',
        to: '/PropertyTypes/PropertyTypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة نوع جديد',
        to: '/PropertyTypes/AddNewPropertyType',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'الانواع الفرعية',
        to: '/PropertyTypes/SubPropertyTypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة نوع فرعي',
        to: '/PropertyTypes/AddNewSubPropertyType',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'الميزات',
    route: '/PropertySites',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الميزات',
        to: '/PropertySites/PropertySites',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة ميزة جديدة',
        to: '/PropertySites/AddNewPropertySite',
      },
    ],
  },
  ,
  {
    _tag: 'CSidebarNavDropdown',
    name: 'أنواع العروض',
    route: '/OffersTypes',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل أنواع العروض',
        to: '/OffersTypes/OffersTypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة نوع عرض جديد',
        to: '/OffersTypes/AddNewOfferType',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'خيارت التسعير',
    route: '/PricingOptions',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل خيارات التسعير',
        to: '/PricingOptions/PricingOptions',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة خيار جديد',
        to: '/PricingOptions/AddNewPricingOption',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'التصنيفات',
    route: '/Categories',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل التصنيفات',
        to: '/Categories/AllCategories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة تصنيف جديد',
        to: '/Categories/AddNewCategory',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'الوسوم',
    route: '/Tags',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الوسوم',
        to: '/Tags/AllTags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة وسم جديد',
        to: '/Tags/AddNewTag',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'صور المنشورات',
    route: '/PreImages',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الصور',
        to: '/PreImages/AllPreImages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة صور جديدة',
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
    name: 'الصفحات',
    route: '/DynamicPages',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الصفحات',
        to: '/DynamicPages/AllPages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة صفحة جديدة',
        to: '/DynamicPages/AddNewPage',
      },
    ],
  },



  {
    _tag: 'CSidebarNavDropdown',
    name: 'الدول',
    route: '/Countries',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل الدول',
        to: '/Countries/AllCountries',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة دولة جديدة',
        to: '/Countries/AddNewCountry',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'المناطق',
    route: '/Areas',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'كل المناطق',
        to: '/Areas/AllAreas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'إضافة منطقة جديدة',
        to: '/Areas/AddNewArea',
      },
    ],
  },





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
    name: 'الاتصال بنا',
    route: '/ContactUs',
    icon: 'cil-phone',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'الرسائل',
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
    name: 'الأدوار',
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

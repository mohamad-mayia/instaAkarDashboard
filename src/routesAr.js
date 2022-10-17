import React, { useState } from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
const Purchases = React.lazy(() => import('./views/purchases/purchases'));
const ContactUs = React.lazy(() => import('./views/contactUs/contactUs'));
const UserDetails = React.lazy(() => import('./views/users/User'));
const AdminRegister = React.lazy(() => import('./views/adminRegister/adminRegister'));
const AdminProfile = React.lazy(() => import('./views/adminProfile/adminProfile'));
const FAQs = React.lazy(() => import('./views/faqs/faqs'));
// const Settings = React.lazy(() => import('./views/settings/settings/settings'));
const PrivacyPolicy = React.lazy(() => import('./views/settings/privacyPolicy/privacyPolicy'));
const PrivacyPolicyAr = React.lazy(() => import('./views/settings/privacyPolicyAr/privacyPolicy'));
const Terms = React.lazy(() => import('./views/settings/terms/termsAndConditions'));
const TermsAr = React.lazy(() => import('./views/settings/termsAr/termsAndConditions'));
const HowToUse = React.lazy(() => import('./views/settings/howToUse/howToUse'));
const HowToUseAr = React.lazy(() => import('./views/settings/howToUseAr/howToUse'));
const AboutUs = React.lazy(() => import('./views/settings/aboutUs/aboutUs'));
const AboutUsAr = React.lazy(() => import('./views/settings/aboutUsAr/aboutUs'));
const APIKey = React.lazy(() => import('./views/settings/apiKey/apiKey'));
const AllServices = React.lazy(() => import('./views/services/allServices/allServices'));
const StoredServices = React.lazy(() => import('./views/services/storedServices/storedServices'));
// const AddNewOffer = React.lazy(() => import('./views/offers/addNewOffer/addNewOffer'));
// const Offers = React.lazy(() => import('./views/offers/offers/offres'));
const Offer = React.lazy(() => import('./views/offers/offer/offre'));
const Slider = React.lazy(() => import('./views/slider/slider'));


const AddNewCompany = React.lazy(() => import('./views/companies/addNewCompany/addNewCompany'));
const Companies = React.lazy(() => import('./views/companies/companies/companies'));
const Company = React.lazy(() => import('./views/companies/company/company'));
const Users = React.lazy(() => import('./views/users/Users'));
const AddNewUser = React.lazy(() => import('./views/users/addNewUser/addNewUser'));
const UserUpdate = React.lazy(() => import('./views/users/userUpdate/userUpdate'));
const Countries = React.lazy(() => import('./views/countries/countries'));
const AddNewCountry = React.lazy(() => import('./views/countries/AddNewCountry/AddNewCountry'));
const UpdateCountry = React.lazy(() => import('./views/countries/countryUpdate/countryUpdate'));
const Cities = React.lazy(() => import('./views/cities/cities'));
const AddNewCity = React.lazy(() => import('./views/cities/AddNewCity/AddNewCity'));
const UpdateCity = React.lazy(() => import('./views/cities/cityUpdate/cityUpdate'));
const Areas = React.lazy(() => import('./views/areas/areas'));
const AddNewArea = React.lazy(() => import('./views/areas/AddNewArea/AddNewArea'));
const UpdateArea = React.lazy(() => import('./views/areas/areaUpdate/areaUpdate'));
const Departments = React.lazy(() => import('./views/departments/Departments'));
const AddNewDepartment = React.lazy(() => import('./views/departments/AddNewDepartment/AddNewDepartment'));
const UpdateDepartment = React.lazy(() => import('./views/departments/DepartmentUpdate/DepartmentUpdate'));
const Types = React.lazy(() => import('./views/TicketTypes/Types'));
const AddNewType = React.lazy(() => import('./views/TicketTypes/AddNewType/AddNewType'));
const TypeUpdate = React.lazy(() => import('./views/TicketTypes/TypeUpdate/TypeUpdate'));
const Statuses = React.lazy(() => import('./views/TicketStatuses/Statuses'));
const AddNewStatus = React.lazy(() => import('./views/TicketStatuses/AddNewStatus/AddNewStatus'));
const StatusUpdate = React.lazy(() => import('./views/TicketStatuses/StatusUpdate/StatusUpdate'));

const AddNewPriority = React.lazy(() => import('./views/TicketPriorities/AddNewPriority/AddNewPriority'));
const Priorities = React.lazy(() => import('./views/TicketPriorities/Priorities'));
const UpdatePriority = React.lazy(() => import('./views/TicketPriorities/UpdatePriority/UpdatePriority'));
const Customers = React.lazy(() => import('./views/Customers/Customers'));
const Tickets = React.lazy(() => import('./views/Tickets/Tickets'));

const PropertyTypes = React.lazy(() => import('./views/PropertyTypes/PropertyTypes'));
const AddNewPropertyType = React.lazy(() => import('./views/PropertyTypes/AddNewPropertyType/AddNewPropertyType'));
const PropertyTypeUpdate = React.lazy(() => import('./views/PropertyTypes/PropertyTypeUpdate/PropertyTypeUpdate'));
const SubPropertyTypes = React.lazy(() => import('./views/SubPropertyTypes/SubPropertyTypes'));
const AddNewSubPropertyType = React.lazy(() => import('./views/SubPropertyTypes/AddNewSubPropertyType/AddNewSubPropertyType'));
const SubPropertyTypeUpdate = React.lazy(() => import('./views/SubPropertyTypes/SubPropertyTypeUpdate/SubPropertyTypeUpdate'));

const PropertySites = React.lazy(() => import('./views/PropertySites/PropertySites'));
const AddNewPropertySite = React.lazy(() => import('./views/PropertySites/AddNewPropertySite/AddNewPropertySite'));
const PropertySiteUpdate = React.lazy(() => import('./views/PropertySites/PropertySiteUpdate/PropertySiteUpdate'));

const OffersTypes = React.lazy(() => import('./views/OffersTypes/OffersTypes'));
const AddNewOfferType = React.lazy(() => import('./views/OffersTypes/AddNewOfferType/AddNewOfferType'));
const OfferTypeUpdate = React.lazy(() => import('./views/OffersTypes/OfferTypeUpdate/OfferTypeUpdate'));

const PricingOptions = React.lazy(() => import('./views/PricingOptions/PricingOptions'));
const AddNewPricingOption = React.lazy(() => import('./views/PricingOptions/AddNewPricingOption/AddNewPricingOption'));
const PricingOptionUpdate = React.lazy(() => import('./views/PricingOptions/PricingOptionUpdate/PricingOptionUpdate'));


const Categories = React.lazy(() => import('./views/Categories/Categories'));
const AddNewCategory = React.lazy(() => import('./views/Categories/AddNewCategory/AddNewCategory'));
const CategoryUpdate = React.lazy(() => import('./views/Categories/CategoryUpdate/CategoryUpdate'));
const Tags = React.lazy(() => import('./views/Tags/Tags'));
const AddNewTag = React.lazy(() => import('./views/Tags/AddNewTag/AddNewTag'));
const TagUpdate = React.lazy(() => import('./views/Tags/TagUpdate/TagUpdate'));
const Replies = React.lazy(() => import('./views/contactUs/Replies'));
const DynamicPages = React.lazy(() => import('./views/DynamicPages/DynamicPages'));
const AddNewPage = React.lazy(() => import('./views/DynamicPages/AddNewPage/AddNewPage'));
const UpdatePage = React.lazy(() => import('./views/DynamicPages/UpdatePage/UpdatePage'));

const LocationsCountries = React.lazy(() => import('./views/Locations/countries/countries'));
const LocationsCities = React.lazy(() => import('./views/Locations/cities/cities'));
const LocationsOffices = React.lazy(() => import('./views/Locations/offices/offices'));

const Reciepients = React.lazy(() => import('./views/reciepients/Reciepients'));
const AddNewReciepient = React.lazy(() => import('./views/reciepients/AddNewReciepient/AddNewReciepient'));
const ReciepientUpdate = React.lazy(() => import('./views/reciepients/ReciepientUpdate/ReciepientUpdate'));

const ChangePassword = React.lazy(() => import('./views/ChangePassword/ChangePassword'));
const Settings = React.lazy(() => import('./views/ShippingSettings/ShippingSettings'));

const PreImages = React.lazy(() => import('./views/PreImages/PreImages'));
const AddNewPreImages = React.lazy(() => import('./views/PreImages/AddNewPreImages/addNewPreImages'));

const Posts = React.lazy(() => import('./views/Posts/Posts'));
const Post = React.lazy(() => import('./views/Posts/Post'));
const SettingsUpdate = React.lazy(() => import('./views/ShippingSettings/ShippingSettingsUpdate/ShippingSettingsUpdate'));

const Packages = React.lazy(() => import('./views/PakageTypes/PakageTypes'));
const AddNewPakageType = React.lazy(() => import('./views/PakageTypes/AddNewPakageType/AddNewPakageType'));
const PakageTypeUpdate = React.lazy(() => import('./views/PakageTypes/PakageTypeUpdate/PakageTypeUpdate'));

const ShippingOffers = React.lazy(() => import('./views/ShippingOffers/ShippingOffers'));
const ShippingOffer = React.lazy(() => import('./views/ShippingOffers/offer/ShippingOffer'));
const Roles = React.lazy(() => import('./views/Roles/Roles'));
const RoleUpdate = React.lazy(() => import('./views/Roles/RoleUpdate/RoleUpdate'));
const routes = [
  { path: '/', exact: true, name: 'الرئيسية' },
  { path: '/dashboard', name: 'داشبورد', component: Dashboard },
  // Dashboard
  { path: '/AdminRegister', name: 'Admin Register', component: AdminRegister },
  { path: '/AdminProfile', name: 'Admin Profile', component: AdminProfile },

  { path: '/Slider', name: 'Slider', component: Slider },

  // { path: '/Settings', name: 'Settings', component: Settings, exact: true },
  // { path: '/Settings/APIKey', name: 'API Key', component: APIKey },
  // { path: '/Settings/Settings', name: 'Settings', component: Settings },
  // { path: '/Settings/PrivacyPolicy', name: 'Privacy Policy', component: PrivacyPolicy },
  // { path: '/Settings/PrivacyPolicyArabic', name: 'Privacy Policy Arabic', component: PrivacyPolicyAr },
  // { path: '/Settings/TermsAndConditions', name: 'Terms and Conditions', component: Terms },
  // { path: '/Settings/TermsAndConditionsArabic', name: 'Terms and Conditions Arabic', component: TermsAr },
  // { path: '/Settings/HowToUse', name: 'How To Use', component: HowToUse },
  // { path: '/Settings/HowToUseArabic', name: 'How To Use Arabic', component: HowToUseAr },
  // { path: '/Settings/AboutUS', name: 'About Us', component: AboutUs },
  // { path: '/Settings/AboutUSArabic', name: 'About Us Arabic', component: AboutUsAr },
  { path: '/Services', name: 'Services', component: AllServices, exact: true },
  { path: '/Services/AllServices', name: 'All Services', component: AllServices },
  { path: '/Services/StoredServices', name: 'Stored Services', component: StoredServices },
  // { path: '/Offers', name: 'Offers', component: Offers, exact: true },
  // { path: '/Offers/Offers', name: 'Offers', component: Offers },
  // { path: '/Offers/AddNewOffer', name: 'Add New Offer', component: AddNewOffer },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/Purchases', exact: true, name: 'Purchases', component: Purchases },
  // { path: '/Offer/:id', exact: true, name: 'Offer Details', component: Offer },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
  // routes for Crm Arabic
  { path: '/companies', name: 'Companies', component: Companies, exact: true },
  { path: '/companies/companies', name: 'All Companies', component: Companies },
  { path: '/companies/AddNewCompany', name: 'AddNewCompany', component: AddNewCompany },
  { path: '/companies/Company/:id', name: 'Company Details', component: Company },
  { path: '/users', exact: true, name: 'المستخدمين', component: Users },
  { path: '/users/Update/:id', name: 'تعديل مستخدم', component: UserUpdate },
  { path: '/users/Details/:id', name: 'تفاصيل مستخدم', component: UserDetails },
  { path: '/users/AddNewUser', name: 'إضافة مستخدم', component: AddNewUser },
  { path: '/Countries', exact: true, name: 'الدول', component: Countries },
  { path: '/Countries/AllCountries', name: 'كل الدول', component: Countries },
  { path: '/Countries/AddNewCountry', name: 'إضافة دولة جديدة', component: AddNewCountry },
  { path: '/Country/Update/:id', name: 'تعديل دولة', component: UpdateCountry },
  { path: '/Cities', exact: true, name: 'Cities', component: Cities },
  { path: '/Cities/AllCities', name: 'All Cities', component: Cities },
  { path: '/Cities/AddNewCity', name: 'Add New City', component: AddNewCity },
  { path: '/Country/:CountryId/CityUpdate/:id', name: 'Update City', component: UpdateCity },
  { path: '/Areas', exact: true, name: 'المناطق', component: Areas },
  { path: '/Areas/AllAreas', name: 'كل المناطق', component: Areas },
  { path: '/Areas/AddNewArea', name: 'إضافة منطقة جديدة', component: AddNewArea },
  { path: '/Areas/:CountryId/AreaUpdate/:id', name: 'تعديل منطقة', component: UpdateArea },


  { path: '/PropertyTypes', exact: true, name: 'الأنواع', component: PropertyTypes },
  { path: '/PropertyTypes/PropertyTypes', name: 'كل الأنواع', component: PropertyTypes },
  { path: '/PropertyTypes/AddNewPropertyType', name: 'إضافة نوع جديد', component: AddNewPropertyType },
  { path: '/PropertyTypes/Update/:id', name: 'تعديل نوع', component: PropertyTypeUpdate },

  { path: '/PropertyTypes/SubPropertyTypes', name: 'كل الأنواع الفرعية', component: SubPropertyTypes },
  { path: '/PropertyTypes/AddNewSubPropertyType', name: 'إضافة نوع فرعي جديد', component: AddNewSubPropertyType },
  { path: '/PropertyTypes/SubUpdate/:type/:id', name: 'تعديل نوع فرعي', component: SubPropertyTypeUpdate },

  { path: '/PropertySites', exact: true, name: 'الميزات', component: PropertySites },
  { path: '/PropertySites/PropertySites', name: 'كل الميزات', component: PropertySites },
  { path: '/PropertySites/AddNewPropertySite', name: 'إضافة ميزة جديدة', component: AddNewPropertySite },
  { path: '/PropertySites/Update/:id', name: 'تعديل ميزة', component: PropertySiteUpdate },

  { path: '/OffersTypes', exact: true, name: 'أنواع العروض', component: OffersTypes },
  { path: '/OffersTypes/OffersTypes', name: 'كل انواع العروض', component: OffersTypes },
  { path: '/OffersTypes/AddNewOfferType', name: 'اضافة نوع عرض جديد', component: AddNewOfferType },
  { path: '/OffersTypes/Update/:id', name: 'تعديل نوع عرض', component: OfferTypeUpdate },

  { path: '/PricingOptions', exact: true, name: 'خيارات التسعير', component: PricingOptions },
  { path: '/PricingOptions/PricingOptions', name: 'كل خيارات التسعير', component: PricingOptions },
  { path: '/PricingOptions/AddNewPricingOption', name: 'اضافة خيار تسعير', component: AddNewPricingOption },
  { path: '/PricingOptions/Update/:offer/:id', name: 'تعديل خيار تسعير', component: PricingOptionUpdate },

  { path: '/Posts', exact: true, name: 'المنشورات', component: Posts },
  { path: '/Posts/Posts', name: 'كل المنشورات', component: Posts },
  { path: '/Posts/Post/:id', name: 'تفاصيل منشور', component: Post },



  { path: '/ChangePassword', exact: true, name: 'تغيير كلمة المرور', component: ChangePassword },

  { path: '/Categories', exact: true, name: 'التصنيفات', component: Categories },
  { path: '/Categories/AllCategories', name: 'كل التصنيفات', component: Categories },
  { path: '/Categories/AddNewCategory', name: 'إضافة تصنيف جديد', component: AddNewCategory },
  { path: '/Categories/Update/:id', name: 'تعديل تصنيف', component: CategoryUpdate },

  { path: '/PreImages', exact: true, name: 'صور المنشورات', component: PreImages },
  { path: '/PreImages/AllPreImages', name: 'كل الصور', component: PreImages },
  { path: '/PreImages/AddNewPreImages', name: 'إضافة صور جديدة', component: AddNewPreImages },

  { path: '/Tags', exact: true, name: 'الوسوم', component: Tags },
  { path: '/Tags/AllTags', name: 'كل الوسوم', component: Tags },
  { path: '/Tags/AddNewTag', name: 'أضافة وسم جديد', component: AddNewTag },
  { path: '/Tags/Update/:id', name: 'تعديل وسم', component: TagUpdate },
  { path: '/ContactUs', name: 'اتصل بنا', exact: true, component: ContactUs },
  { path: '/ContactUs/messages', name: 'الرسائل', component: ContactUs },
  { path: '/ContactUs/Replies', name: 'Replies', component: Replies },
  { path: '/Faqs', name: 'FAQs', component: FAQs },
  { path: '/DynamicPages', exact: true, name: 'الصفحات', component: DynamicPages },
  { path: '/DynamicPages/AllPages', name: 'كل الصفحات', component: DynamicPages },
  { path: '/DynamicPages/AddNewPage', name: 'إضافة صفحة', component: AddNewPage },
  { path: '/DynamicPages/Update/:id', name: 'تعديل صفحة', component: UpdatePage },

  // { path: '/Locations', exact: true, name: 'المواقع', component: LocationsCountries },
  // { path: '/Locations/Countries', name: 'الدول', component: LocationsCountries },
  // { path: '/Locations/Cities', name: 'المدن', component: LocationsCities },
  // { path: '/Locations/Offices/:code', name: 'المكاتب', component: LocationsOffices },

  { path: '/Reciepients', exact: true, name: 'Reciepients', component: Reciepients },
  { path: '/Reciepients/AllReciepients', name: 'All Recipients', component: Reciepients },
  { path: '/Reciepients/Update/:id', name: 'Update Reciepient', component: ReciepientUpdate },
  { path: '/Reciepients/AddNewReciepient', name: 'Add New Reciepient', component: AddNewReciepient },

  { path: '/Settings', name: 'معلومات الموقع', component: Settings, exact: true },
  { path: '/Settings/Update', name: 'تعديل المعلومات', component: SettingsUpdate },


  { path: '/Packages', exact: true, name: 'Packages Types', component: Packages },
  { path: '/Packages/AllPackagesTypes', name: 'All Packages Types', component: Packages },
  { path: '/Packages/Update/:id', name: 'Pakage Type Update', component: PakageTypeUpdate },
  { path: '/Packages/AddNewPakageType', name: 'Add New Pakage Type', component: AddNewPakageType },


  { path: '/ShippingOffers', exact: true, name: 'Shipping Offers', component: ShippingOffers },
  { path: '/ShippingOffers/ShippingOffer/:id', name: 'Shipping Offer Details', component: ShippingOffer },
  { path: '/Roles', exact: true, name: 'الأدوار', component: Roles },
  { path: '/Roles/AllRoles', name: 'كل الأدوار', component: Roles },
  { path: '/Roles/Update/:id', name: 'تعديل دور', component: RoleUpdate },

];

export default routes;

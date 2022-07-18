export interface MenuItemAdmin {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  expanded?: boolean;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  notify?:boolean
}

export const MENUAdmin: MenuItemAdmin[] = [

  {
    label: 'Appliction setup',
    icon: 'tool',
    link: '/admin',
    notify:false
  },
  {
    label: 'Modules',
    icon: 'server',
    notify:true,
    subItems: [
      {
        label: 'External',
        link: 'Inbound',
      },
      {
        label: 'Internal',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Organizations',
    icon: 'map',
    notify:true,
    subItems: [
      {
        label: 'Add Organization',
        link: 'creatOraginaze',
      },
      {
        label: 'All organization',
        link: 'allOraginaze',
      },
    ]
  },
  {
    label: 'Users',
    icon: 'user',
    notify:true,
    subItems: [
      {
        label: 'Add User',
        link: 'creatOraginaze',
      },
      {
        label: 'All Users',
        link: 'allOraginaze',
      },
    ]
  },
  {
    label: 'User Group',
    icon: 'users',
    notify:true,
    subItems: [
      {
        label: 'Add User',
        link: 'creatOraginaze',
      },
      {
        label: 'All Users',
        link: 'allOraginaze',
      },
    ]
  },
  {
    label: 'Access Rights',
    icon: 'inbox',
    notify:true,
    subItems: [
      {
        label: 'add permission',
        link: '/apps/email/inbox',
      },
      {
        label: 'all permission',
        link: '/apps/email/read'
      },
    ]
  },









];

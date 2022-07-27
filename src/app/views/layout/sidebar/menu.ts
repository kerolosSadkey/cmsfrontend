import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Home',
    icon: 'home',
    link: '/dashboard',
    notify:false
  },
  {
    label: 'Capturing',
    icon: 'layers',
    subItems: [
      {
        label: 'Add File',
        link: 'Inbound',
        notify:true
      },
      {
        label: 'Uplode Bulk Files',
        link: '/apps/email/read',
        notify:false
      },
      {
        label: 'Emails',
        link: '/apps/email/read',
        notify:false
      },
      {
        label: 'Scan',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Inbound',
    icon: 'mail',
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
    label: 'Outbound',
    icon: 'inbox',
    notify:true,
    subItems: [
      {
        label: 'External',
        link: '/apps/email/inbox',
      },
      {
        label: 'Internal',
        link: '/apps/email/read'
      },
    ]
  },

  {
    label: 'Calendar',
    icon: 'calendar',
    notify:true,
    link: 'apps/calendar',
    badge: {
      variant: 'primary',
      text: 'Event',
    }
  },
  {
    label: 'Task List',
    icon: 'list',
    link: '/tasklist',
    notify:true,

  },
   {
    label: 'Committees',
    icon: 'git-commit',
    link: '/apps/calendar',
    notify:true,

  },
  {
    label: 'Case Mangenment',
    icon: 'briefcase',
    link: '/apps/chat',
    notify:true,
  },
  {
    label: 'Work Places',
    icon: 'columns',
    link: '/apps/chat',
    notify:true,
  },


  {
    label: 'Reports',
    icon: 'layout',
    notify:true,
    subItems: [
      {
        label: 'Report 1',
        link: '/tables/basic-table',
      },
      {
        label: 'Report 2',
        link: '/tables/data-table',
      },
      {
        label: 'Report 3',
        link: '/tables/ngx-datatable'
      }
    ]
  },
  {
    label: 'Appliction Setup',
    icon: 'tool',
    link: '/admin',
    notify:false,
  },


];

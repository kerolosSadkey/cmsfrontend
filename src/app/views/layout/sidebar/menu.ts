import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Web Apps',
    isTitle: true
  },
  {
    label: 'Inbound',
    icon: 'mail',
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
    link: '/apps/calendar',
    badge: {
      variant: 'primary',
      text: 'Event',
    }
  },
  {
    label: 'Task List',
    icon: 'list',
    link: '/tasklist',

  },
   {
    label: 'Committees',
    icon: 'git-commit',
    link: '/apps/calendar',

  },
  {
    label: 'Case Mangenment',
    icon: 'briefcase',
    link: '/apps/chat',
  },
  {
    label: 'Work Places',
    icon: 'columns',
    link: '/apps/chat',
  },

  {
    label: 'Roports',
    isTitle: true
  },
  {
    label: 'Reports',
    icon: 'layout',
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



];

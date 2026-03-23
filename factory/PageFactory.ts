import { CreateAccountsPage } from '../page-objects/CreateAccountsPage';
import { CreateContactsPage } from '../page-objects/CreateContactsPage';
import { CreateOpportunitiesPage } from '../page-objects/CreateOpportunitiesPage';
import { CreateLeadsPage } from '../page-objects/CreateLeadsPage';
import { CreateDocumentsPage } from '../page-objects/CreateDocumentsPage';
import { CreateCallsPage } from '../page-objects/CreateCallsPage';
import { CreateTasksPage } from '../page-objects/CreateTasksPage';

export const createPageFactory = {
  'Create Accounts': CreateAccountsPage,
  'Create Contacts': CreateContactsPage,
  'Create Opportunities': CreateOpportunitiesPage,
  'Create Leads': CreateLeadsPage,
  'Create Documents': CreateDocumentsPage,
  'Create Calls': CreateCallsPage,
  'Create Tasks': CreateTasksPage,
} as const;

export type CreateOption = keyof typeof createPageFactory;

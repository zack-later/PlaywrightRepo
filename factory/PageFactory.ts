import {
  CreateAccountsPage,
  //CreateContactsPage,
  //CreateOpportunitiesPage,
  //CreateLeadsPage,
 // CreateDocumentsPage,
  //CreateCallsPage,
  //CreateTasksPage,
} from '../page-objects/CreateAccountsPage';

// factory/PageFactory.ts
export const createPageFactory = {
  'Create Accounts': CreateAccountsPage,
} as const;

export type CreateOption = keyof typeof createPageFactory;


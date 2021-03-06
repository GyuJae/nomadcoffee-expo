

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount {
  ok: boolean;
  error: string | null;
}

export interface createAccount {
  createAccount: createAccount_createAccount;
}

export interface createAccountVariables {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeCoffeeShops
// ====================================================

export interface seeCoffeeShops_seeCoffeeShops_shops {
  id: number;
  name: string;
}

export interface seeCoffeeShops_seeCoffeeShops {
  ok: boolean;
  error: string | null;
  shops: (seeCoffeeShops_seeCoffeeShops_shops | null)[] | null;
}

export interface seeCoffeeShops {
  seeCoffeeShops: seeCoffeeShops_seeCoffeeShops;
}

export interface seeCoffeeShopsVariables {
  page: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  username: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
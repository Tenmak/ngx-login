export interface Account {
  account: {
    email: string;
    password: string;
  };
}

export interface Login extends Account {
  account: {
    email: string;
    password: string;
    rememberMe: boolean;
  };
}

export interface ForgotPassword {
  email: string;
}



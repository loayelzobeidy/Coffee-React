export interface UserState {
    user: { name: string; email: string } | null;
    isAuthenticated: boolean;
    isAdmin:boolean;
  }
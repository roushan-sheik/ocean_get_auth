export interface LoginResponse {
  token: string;
}

export interface UserData {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export interface ApiError {
  error: string;
}

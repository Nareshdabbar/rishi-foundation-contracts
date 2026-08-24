export type LoginRequest = {
    email: string;
    password: string;
};
export type AuthRole = {
    id: string;
    name: string;
    description: string | null;
};
export type AuthenticatedUser = {
    id: string;
    email: string;
    roles: AuthRole[];
    permissions: string[];
};
export type LoginResponse = {
    success: true;
    data: {
        user: AuthenticatedUser;
        token: string;
    };
    message: string;
};
export type MeResponse = {
    success: true;
    data: AuthenticatedUser;
};

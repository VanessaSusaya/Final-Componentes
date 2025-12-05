export type Role = 'admin' | 'profesor' | 'estudiante';

export interface User {
    id: number;
    nombre: string;
    email: string;
    role: Role;
}

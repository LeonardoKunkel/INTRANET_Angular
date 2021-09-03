export interface Auth {
    uid?    : string;
    ok      : boolean;
    correo  : string;
    usuario : string;
    rol?    : string;
    status? : boolean;
    empresa?: string;
    token?: string;
}

export interface User {
    nombre?: string;
    uid?: string;
}

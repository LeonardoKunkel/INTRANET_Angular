export interface Welcome {
    total?:    number;
    usuarios: Usuario[];
}

export interface Usuario {
    calle?:     string;
    cel?:       number;
    colonia?:   string;
    correo:     string;
    cp?:        number;
    curp?:      string;
    edo?:       string;
    empresa?:   Empresa;
    estado?:    Estado;
    fecha?:     string;
    genero?:    Genero;
    img?:       string;
    municipio?: string;
    nombre:     string;
    password?:  string;
    puesto?:    string;
    rol?:       Rol;
    status?:    boolean;
    uid?:       string;
}

export enum Rol {
    adminRole = "ADMIN_ROLE",
    userRole = "USER_ROLE",
}

export enum Empresa {
    kepler = "Kepler Oil & Gas",
    ace = "ACE Engineering",
    soft = "Softoil",
    etc = "Energy Training Center"
}

export enum Genero {
    hombre = "Hombre",
    mujer = "Mujer",
    otro = "Otro"
}

export enum Estado {
    casado = "Casado",
    soltero = "Soltero"
}

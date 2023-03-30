
export interface User {
    active?: boolean;
    uID: string;
    apellido_materno?: string;
    apellido_paterno?: string;
    full_name: string;
    name: string;
    nick_or_name?: string;
    nickname?: string;
    avatar?: {
      categoria_id?: number;
      descripcion?: string;
      exclusive?: number;
      filename?: string;
      id?: number;
      nombre?: string;
      uuid?: string;
      visible?: boolean;
    };
    avatar_id?: number;
    id?: number;
    birthday?: string;
    created_at?: Date;
    deleted_at?: Date;
    email?: string;
    pais?: Object;
    pais_id?: number;
    rango?: {
      filename: string;
      next_level: number;
      puntaje: number;
      value: string;
    };
    role_id?: number;
    role_name?: string;
    roleuser?: Object;
    updated_at?: Date;
    user_avatar?: string;
  }

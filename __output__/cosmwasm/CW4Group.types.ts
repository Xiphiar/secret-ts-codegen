/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  admin?: string | null;
  members: Member[];
}
export interface Member {
  addr: string;
  weight: number;
}
export type ExecuteMsg = {
  update_admin: {
    admin?: string | null;
  };
} | {
  update_members: {
    add: Member[];
    remove: string[];
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
};
export type QueryMsg = {
  admin: {};
} | {
  total_weight: {};
} | {
  list_members: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  member: {
    addr: string;
    at_height?: number | null;
  };
} | {
  hooks: {};
};
export type QueryResponse = {
  admin: AdminResponse;
} | {
  total_weight: TotalWeightResponse;
} | {
  list_members: MemberListResponse;
} | {
  member: MemberResponse;
} | {
  hooks: HooksResponse;
};
export interface AdminResponse {
  admin?: string | null;
}
export interface TotalWeightResponse {
  weight: number;
}
export interface MemberListResponse {
  members: Member[];
}
export interface MemberResponse {
  weight?: number | null;
}
export interface HooksResponse {
  hooks: string[];
}
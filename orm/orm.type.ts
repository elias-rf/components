export type Association = {
  [association: string]: {
    select: (string | Association)[];
    from: string;
    source: string | string[];
    target: string | string[];
    type: "hasOne" | "hasMany";
  };
};

export type Query = {
  select?: (string | Association)[] | { raw: [string, any?] };
  first?: string[];
  from?: string | { raw: [string, any?] };
  join?: [string, string, string, any?][];
  orderBy?: [string, "asc" | "desc"][];
  offset?: number;
  limit?: number;
  count?: string;
  min?: string;
  max?: string;
  sum?: string;
  avg?: string;
  groupBy?: string[];
  having?: ([string, any?, any?] | { raw: [string, any?] })[];
  del?: true;
  insert?: Record<string, any>;
  update?: Record<string, any>;
  increment?: [string, number];
  returning?: string[];
  where?: ([string, any?, any?] | { raw: [string, any?] })[];
  whereNot?: [string, any?, any?][];
  raw?: [string, any?];
};

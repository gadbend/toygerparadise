export interface Kitten {
  id: string;
  created_at: string;
  name: string;
  breed: "Toyger" | "Bengal";
  images: string[];
  description?: string;
  price?: string;
  age?: string;
  gender?: "Male" | "Female" | undefined;
}

export type Database = {
  public: {
    Tables: {
      kittens: {
        Row: Kitten;
        Insert: Omit<Kitten, "id" | "created_at">;
        Update: Partial<Omit<Kitten, "id" | "created_at">>;
      };
    };
  };
};

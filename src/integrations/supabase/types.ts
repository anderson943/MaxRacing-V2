export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      brands: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          subject: string | null
          bike: string | null
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          subject?: string | null
          bike?: string | null
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          subject?: string | null
          bike?: string | null
          message?: string
        }
        Relationships: []
      }
      dealer_applications: {
        Row: {
          id: string
          created_at: string
          company_name: string
          website: string | null
          country: string
          city_state: string
          full_name: string
          email: string
          phone: string
          business_type: string
          years_in_business: string | null
          sales_channels: string[] | null
          current_brands: string | null
          monthly_volume: string | null
          countries_served: string
          intents: string[] | null
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          company_name: string
          website?: string | null
          country: string
          city_state: string
          full_name: string
          email: string
          phone: string
          business_type: string
          years_in_business?: string | null
          sales_channels?: string[] | null
          current_brands?: string | null
          monthly_volume?: string | null
          countries_served: string
          intents?: string[] | null
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          company_name?: string
          website?: string | null
          country?: string
          city_state?: string
          full_name?: string
          email?: string
          phone?: string
          business_type?: string
          years_in_business?: string | null
          sales_channels?: string[] | null
          current_brands?: string | null
          monthly_volume?: string | null
          countries_served?: string
          intents?: string[] | null
          message?: string
        }
        Relationships: []
      }
      faq_categories: {
        Row: {
          id: string
          title: string
          description: string | null
          display_order: number
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          display_order?: number
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          display_order?: number
        }
        Relationships: []
      }
      faqs: {
        Row: {
          id: string
          category_id: string
          question: string
          answer: string
          display_order: number
        }
        Insert: {
          id?: string
          category_id: string
          question: string
          answer: string
          display_order?: number
        }
        Update: {
          id?: string
          category_id?: string
          question?: string
          answer?: string
          display_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "faqs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "faq_categories"
            referencedColumns: ["id"]
          }
        ]
      }
      installation_sections: {
        Row: {
          id: string
          guide_id: string
          label: string
          content_html: string | null
          icon: string | null
          display_order: number
        }
        Insert: {
          id?: string
          guide_id: string
          label: string
          content_html?: string | null
          icon?: string | null
          display_order?: number
        }
        Update: {
          id?: string
          guide_id?: string
          label?: string
          content_html?: string | null
          icon?: string | null
          display_order?: number
        }
        Relationships: []
      }
      installation_tools: {
        Row: {
          id: string
          guide_id: string
          name: string
          display_order: number
        }
        Insert: {
          id?: string
          guide_id: string
          name: string
          display_order?: number
        }
        Update: {
          id?: string
          guide_id?: string
          name?: string
          display_order?: number
        }
        Relationships: []
      }
      motorcycles: {
        Row: {
          id: string
          brand_id: string
          model: string
          slug: string
          segment: string
        }
        Insert: {
          id?: string
          brand_id: string
          model: string
          slug: string
          segment: string
        }
        Update: {
          id?: string
          brand_id?: string
          model?: string
          slug?: string
          segment?: string
        }
        Relationships: [
          {
            foreignKeyName: "motorcycles_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          }
        ]
      }
      torque_recommendations: {
        Row: {
          id: string
          bolt_size: string
          torque_nm: string
          application: string
        }
        Insert: {
          id?: string
          bolt_size: string
          torque_nm: string
          application: string
        }
        Update: {
          id?: string
          bolt_size?: string
          torque_nm?: string
          application?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "applicants" */
export type Applicants = {
  __typename?: 'applicants';
  apply_date?: Maybe<Scalars['timestamptz']>;
  audition_id: Scalars['Int'];
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "applicants" */
export type Applicants_Aggregate = {
  __typename?: 'applicants_aggregate';
  aggregate?: Maybe<Applicants_Aggregate_Fields>;
  nodes: Array<Applicants>;
};

/** aggregate fields of "applicants" */
export type Applicants_Aggregate_Fields = {
  __typename?: 'applicants_aggregate_fields';
  avg?: Maybe<Applicants_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Applicants_Max_Fields>;
  min?: Maybe<Applicants_Min_Fields>;
  stddev?: Maybe<Applicants_Stddev_Fields>;
  stddev_pop?: Maybe<Applicants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Applicants_Stddev_Samp_Fields>;
  sum?: Maybe<Applicants_Sum_Fields>;
  var_pop?: Maybe<Applicants_Var_Pop_Fields>;
  var_samp?: Maybe<Applicants_Var_Samp_Fields>;
  variance?: Maybe<Applicants_Variance_Fields>;
};


/** aggregate fields of "applicants" */
export type Applicants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Applicants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "applicants" */
export type Applicants_Aggregate_Order_By = {
  avg?: Maybe<Applicants_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Applicants_Max_Order_By>;
  min?: Maybe<Applicants_Min_Order_By>;
  stddev?: Maybe<Applicants_Stddev_Order_By>;
  stddev_pop?: Maybe<Applicants_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Applicants_Stddev_Samp_Order_By>;
  sum?: Maybe<Applicants_Sum_Order_By>;
  var_pop?: Maybe<Applicants_Var_Pop_Order_By>;
  var_samp?: Maybe<Applicants_Var_Samp_Order_By>;
  variance?: Maybe<Applicants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "applicants" */
export type Applicants_Arr_Rel_Insert_Input = {
  data: Array<Applicants_Insert_Input>;
  on_conflict?: Maybe<Applicants_On_Conflict>;
};

/** aggregate avg on columns */
export type Applicants_Avg_Fields = {
  __typename?: 'applicants_avg_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "applicants" */
export type Applicants_Avg_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "applicants". All fields are combined with a logical 'AND'. */
export type Applicants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Applicants_Bool_Exp>>>;
  _not?: Maybe<Applicants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Applicants_Bool_Exp>>>;
  apply_date?: Maybe<Timestamptz_Comparison_Exp>;
  audition_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "applicants" */
export enum Applicants_Constraint {
  /** unique or primary key constraint */
  ApplicantsPkey = 'applicants_pkey'
}

/** input type for incrementing integer column in table "applicants" */
export type Applicants_Inc_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "applicants" */
export type Applicants_Insert_Input = {
  apply_date?: Maybe<Scalars['timestamptz']>;
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Applicants_Max_Fields = {
  __typename?: 'applicants_max_fields';
  apply_date?: Maybe<Scalars['timestamptz']>;
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "applicants" */
export type Applicants_Max_Order_By = {
  apply_date?: Maybe<Order_By>;
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Applicants_Min_Fields = {
  __typename?: 'applicants_min_fields';
  apply_date?: Maybe<Scalars['timestamptz']>;
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "applicants" */
export type Applicants_Min_Order_By = {
  apply_date?: Maybe<Order_By>;
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "applicants" */
export type Applicants_Mutation_Response = {
  __typename?: 'applicants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Applicants>;
};

/** input type for inserting object relation for remote table "applicants" */
export type Applicants_Obj_Rel_Insert_Input = {
  data: Applicants_Insert_Input;
  on_conflict?: Maybe<Applicants_On_Conflict>;
};

/** on conflict condition type for table "applicants" */
export type Applicants_On_Conflict = {
  constraint: Applicants_Constraint;
  update_columns: Array<Applicants_Update_Column>;
  where?: Maybe<Applicants_Bool_Exp>;
};

/** ordering options when selecting data from "applicants" */
export type Applicants_Order_By = {
  apply_date?: Maybe<Order_By>;
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "applicants" */
export type Applicants_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "applicants" */
export enum Applicants_Select_Column {
  /** column name */
  ApplyDate = 'apply_date',
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "applicants" */
export type Applicants_Set_Input = {
  apply_date?: Maybe<Scalars['timestamptz']>;
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Applicants_Stddev_Fields = {
  __typename?: 'applicants_stddev_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "applicants" */
export type Applicants_Stddev_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Applicants_Stddev_Pop_Fields = {
  __typename?: 'applicants_stddev_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "applicants" */
export type Applicants_Stddev_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Applicants_Stddev_Samp_Fields = {
  __typename?: 'applicants_stddev_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "applicants" */
export type Applicants_Stddev_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Applicants_Sum_Fields = {
  __typename?: 'applicants_sum_fields';
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "applicants" */
export type Applicants_Sum_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "applicants" */
export enum Applicants_Update_Column {
  /** column name */
  ApplyDate = 'apply_date',
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Applicants_Var_Pop_Fields = {
  __typename?: 'applicants_var_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "applicants" */
export type Applicants_Var_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Applicants_Var_Samp_Fields = {
  __typename?: 'applicants_var_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "applicants" */
export type Applicants_Var_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Applicants_Variance_Fields = {
  __typename?: 'applicants_variance_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "applicants" */
export type Applicants_Variance_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "audition" */
export type Audition = {
  __typename?: 'audition';
  /** An array relationship */
  applicants: Array<Applicants>;
  /** An aggregated array relationship */
  applicants_aggregate: Applicants_Aggregate;
  /** An array relationship */
  audition_tags: Array<Audition_Tag>;
  /** An aggregated array relationship */
  audition_tags_aggregate: Audition_Tag_Aggregate;
  /** An object relationship */
  audition_type: Audition_Type;
  audition_type_id: Scalars['Int'];
  /** An object relationship */
  city: City;
  city_id: Scalars['Int'];
  company_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  posted_by: User;
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregated array relationship */
  roles_aggregate: Role_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};


/** columns and relationships of "audition" */
export type AuditionApplicantsArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** columns and relationships of "audition" */
export type AuditionApplicants_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** columns and relationships of "audition" */
export type AuditionAudition_TagsArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** columns and relationships of "audition" */
export type AuditionAudition_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** columns and relationships of "audition" */
export type AuditionRolesArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** columns and relationships of "audition" */
export type AuditionRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

/** aggregated selection of "audition" */
export type Audition_Aggregate = {
  __typename?: 'audition_aggregate';
  aggregate?: Maybe<Audition_Aggregate_Fields>;
  nodes: Array<Audition>;
};

/** aggregate fields of "audition" */
export type Audition_Aggregate_Fields = {
  __typename?: 'audition_aggregate_fields';
  avg?: Maybe<Audition_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Audition_Max_Fields>;
  min?: Maybe<Audition_Min_Fields>;
  stddev?: Maybe<Audition_Stddev_Fields>;
  stddev_pop?: Maybe<Audition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audition_Stddev_Samp_Fields>;
  sum?: Maybe<Audition_Sum_Fields>;
  var_pop?: Maybe<Audition_Var_Pop_Fields>;
  var_samp?: Maybe<Audition_Var_Samp_Fields>;
  variance?: Maybe<Audition_Variance_Fields>;
};


/** aggregate fields of "audition" */
export type Audition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Audition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "audition" */
export type Audition_Aggregate_Order_By = {
  avg?: Maybe<Audition_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Audition_Max_Order_By>;
  min?: Maybe<Audition_Min_Order_By>;
  stddev?: Maybe<Audition_Stddev_Order_By>;
  stddev_pop?: Maybe<Audition_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Audition_Stddev_Samp_Order_By>;
  sum?: Maybe<Audition_Sum_Order_By>;
  var_pop?: Maybe<Audition_Var_Pop_Order_By>;
  var_samp?: Maybe<Audition_Var_Samp_Order_By>;
  variance?: Maybe<Audition_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "audition" */
export type Audition_Arr_Rel_Insert_Input = {
  data: Array<Audition_Insert_Input>;
  on_conflict?: Maybe<Audition_On_Conflict>;
};

/** aggregate avg on columns */
export type Audition_Avg_Fields = {
  __typename?: 'audition_avg_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "audition" */
export type Audition_Avg_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audition". All fields are combined with a logical 'AND'. */
export type Audition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Audition_Bool_Exp>>>;
  _not?: Maybe<Audition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Audition_Bool_Exp>>>;
  applicants?: Maybe<Applicants_Bool_Exp>;
  audition_tags?: Maybe<Audition_Tag_Bool_Exp>;
  audition_type?: Maybe<Audition_Type_Bool_Exp>;
  audition_type_id?: Maybe<Int_Comparison_Exp>;
  city?: Maybe<City_Bool_Exp>;
  city_id?: Maybe<Int_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posted_by?: Maybe<User_Bool_Exp>;
  roles?: Maybe<Role_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "audition" */
export enum Audition_Constraint {
  /** unique or primary key constraint */
  AuditionPkey = 'audition_pkey'
}

/** input type for incrementing integer column in table "audition" */
export type Audition_Inc_Input = {
  audition_type_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "audition" */
export type Audition_Insert_Input = {
  applicants?: Maybe<Applicants_Arr_Rel_Insert_Input>;
  audition_tags?: Maybe<Audition_Tag_Arr_Rel_Insert_Input>;
  audition_type?: Maybe<Audition_Type_Obj_Rel_Insert_Input>;
  audition_type_id?: Maybe<Scalars['Int']>;
  city?: Maybe<City_Obj_Rel_Insert_Input>;
  city_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posted_by?: Maybe<User_Obj_Rel_Insert_Input>;
  roles?: Maybe<Role_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Audition_Max_Fields = {
  __typename?: 'audition_max_fields';
  audition_type_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "audition" */
export type Audition_Max_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Audition_Min_Fields = {
  __typename?: 'audition_min_fields';
  audition_type_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "audition" */
export type Audition_Min_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "audition" */
export type Audition_Mutation_Response = {
  __typename?: 'audition_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Audition>;
};

/** input type for inserting object relation for remote table "audition" */
export type Audition_Obj_Rel_Insert_Input = {
  data: Audition_Insert_Input;
  on_conflict?: Maybe<Audition_On_Conflict>;
};

/** on conflict condition type for table "audition" */
export type Audition_On_Conflict = {
  constraint: Audition_Constraint;
  update_columns: Array<Audition_Update_Column>;
  where?: Maybe<Audition_Bool_Exp>;
};

/** ordering options when selecting data from "audition" */
export type Audition_Order_By = {
  applicants_aggregate?: Maybe<Applicants_Aggregate_Order_By>;
  audition_tags_aggregate?: Maybe<Audition_Tag_Aggregate_Order_By>;
  audition_type?: Maybe<Audition_Type_Order_By>;
  audition_type_id?: Maybe<Order_By>;
  city?: Maybe<City_Order_By>;
  city_id?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posted_by?: Maybe<User_Order_By>;
  roles_aggregate?: Maybe<Role_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "audition" */
export type Audition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "audition" */
export enum Audition_Select_Column {
  /** column name */
  AuditionTypeId = 'audition_type_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "audition" */
export type Audition_Set_Input = {
  audition_type_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Audition_Stddev_Fields = {
  __typename?: 'audition_stddev_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "audition" */
export type Audition_Stddev_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audition_Stddev_Pop_Fields = {
  __typename?: 'audition_stddev_pop_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "audition" */
export type Audition_Stddev_Pop_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audition_Stddev_Samp_Fields = {
  __typename?: 'audition_stddev_samp_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "audition" */
export type Audition_Stddev_Samp_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Audition_Sum_Fields = {
  __typename?: 'audition_sum_fields';
  audition_type_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "audition" */
export type Audition_Sum_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "audition_tag" */
export type Audition_Tag = {
  __typename?: 'audition_tag';
  /** An object relationship */
  audition: Audition;
  audition_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  tag: Tag;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "audition_tag" */
export type Audition_Tag_Aggregate = {
  __typename?: 'audition_tag_aggregate';
  aggregate?: Maybe<Audition_Tag_Aggregate_Fields>;
  nodes: Array<Audition_Tag>;
};

/** aggregate fields of "audition_tag" */
export type Audition_Tag_Aggregate_Fields = {
  __typename?: 'audition_tag_aggregate_fields';
  avg?: Maybe<Audition_Tag_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Audition_Tag_Max_Fields>;
  min?: Maybe<Audition_Tag_Min_Fields>;
  stddev?: Maybe<Audition_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Audition_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audition_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Audition_Tag_Sum_Fields>;
  var_pop?: Maybe<Audition_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Audition_Tag_Var_Samp_Fields>;
  variance?: Maybe<Audition_Tag_Variance_Fields>;
};


/** aggregate fields of "audition_tag" */
export type Audition_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Audition_Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "audition_tag" */
export type Audition_Tag_Aggregate_Order_By = {
  avg?: Maybe<Audition_Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Audition_Tag_Max_Order_By>;
  min?: Maybe<Audition_Tag_Min_Order_By>;
  stddev?: Maybe<Audition_Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Audition_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Audition_Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Audition_Tag_Sum_Order_By>;
  var_pop?: Maybe<Audition_Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Audition_Tag_Var_Samp_Order_By>;
  variance?: Maybe<Audition_Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "audition_tag" */
export type Audition_Tag_Arr_Rel_Insert_Input = {
  data: Array<Audition_Tag_Insert_Input>;
  on_conflict?: Maybe<Audition_Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Audition_Tag_Avg_Fields = {
  __typename?: 'audition_tag_avg_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "audition_tag" */
export type Audition_Tag_Avg_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audition_tag". All fields are combined with a logical 'AND'. */
export type Audition_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Audition_Tag_Bool_Exp>>>;
  _not?: Maybe<Audition_Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Audition_Tag_Bool_Exp>>>;
  audition?: Maybe<Audition_Bool_Exp>;
  audition_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "audition_tag" */
export enum Audition_Tag_Constraint {
  /** unique or primary key constraint */
  AuditionTagPkey = 'audition_tag_pkey'
}

/** input type for incrementing integer column in table "audition_tag" */
export type Audition_Tag_Inc_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "audition_tag" */
export type Audition_Tag_Insert_Input = {
  audition?: Maybe<Audition_Obj_Rel_Insert_Input>;
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Audition_Tag_Max_Fields = {
  __typename?: 'audition_tag_max_fields';
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "audition_tag" */
export type Audition_Tag_Max_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Audition_Tag_Min_Fields = {
  __typename?: 'audition_tag_min_fields';
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "audition_tag" */
export type Audition_Tag_Min_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "audition_tag" */
export type Audition_Tag_Mutation_Response = {
  __typename?: 'audition_tag_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Audition_Tag>;
};

/** input type for inserting object relation for remote table "audition_tag" */
export type Audition_Tag_Obj_Rel_Insert_Input = {
  data: Audition_Tag_Insert_Input;
  on_conflict?: Maybe<Audition_Tag_On_Conflict>;
};

/** on conflict condition type for table "audition_tag" */
export type Audition_Tag_On_Conflict = {
  constraint: Audition_Tag_Constraint;
  update_columns: Array<Audition_Tag_Update_Column>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};

/** ordering options when selecting data from "audition_tag" */
export type Audition_Tag_Order_By = {
  audition?: Maybe<Audition_Order_By>;
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "audition_tag" */
export type Audition_Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "audition_tag" */
export enum Audition_Tag_Select_Column {
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "audition_tag" */
export type Audition_Tag_Set_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Audition_Tag_Stddev_Fields = {
  __typename?: 'audition_tag_stddev_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "audition_tag" */
export type Audition_Tag_Stddev_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audition_Tag_Stddev_Pop_Fields = {
  __typename?: 'audition_tag_stddev_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "audition_tag" */
export type Audition_Tag_Stddev_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audition_Tag_Stddev_Samp_Fields = {
  __typename?: 'audition_tag_stddev_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "audition_tag" */
export type Audition_Tag_Stddev_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Audition_Tag_Sum_Fields = {
  __typename?: 'audition_tag_sum_fields';
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "audition_tag" */
export type Audition_Tag_Sum_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "audition_tag" */
export enum Audition_Tag_Update_Column {
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id'
}

/** aggregate var_pop on columns */
export type Audition_Tag_Var_Pop_Fields = {
  __typename?: 'audition_tag_var_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "audition_tag" */
export type Audition_Tag_Var_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audition_Tag_Var_Samp_Fields = {
  __typename?: 'audition_tag_var_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "audition_tag" */
export type Audition_Tag_Var_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Audition_Tag_Variance_Fields = {
  __typename?: 'audition_tag_variance_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "audition_tag" */
export type Audition_Tag_Variance_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** columns and relationships of "audition_type" */
export type Audition_Type = {
  __typename?: 'audition_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "audition_type" */
export type Audition_Type_Aggregate = {
  __typename?: 'audition_type_aggregate';
  aggregate?: Maybe<Audition_Type_Aggregate_Fields>;
  nodes: Array<Audition_Type>;
};

/** aggregate fields of "audition_type" */
export type Audition_Type_Aggregate_Fields = {
  __typename?: 'audition_type_aggregate_fields';
  avg?: Maybe<Audition_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Audition_Type_Max_Fields>;
  min?: Maybe<Audition_Type_Min_Fields>;
  stddev?: Maybe<Audition_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Audition_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audition_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Audition_Type_Sum_Fields>;
  var_pop?: Maybe<Audition_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Audition_Type_Var_Samp_Fields>;
  variance?: Maybe<Audition_Type_Variance_Fields>;
};


/** aggregate fields of "audition_type" */
export type Audition_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Audition_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "audition_type" */
export type Audition_Type_Aggregate_Order_By = {
  avg?: Maybe<Audition_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Audition_Type_Max_Order_By>;
  min?: Maybe<Audition_Type_Min_Order_By>;
  stddev?: Maybe<Audition_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Audition_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Audition_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Audition_Type_Sum_Order_By>;
  var_pop?: Maybe<Audition_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Audition_Type_Var_Samp_Order_By>;
  variance?: Maybe<Audition_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "audition_type" */
export type Audition_Type_Arr_Rel_Insert_Input = {
  data: Array<Audition_Type_Insert_Input>;
  on_conflict?: Maybe<Audition_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Audition_Type_Avg_Fields = {
  __typename?: 'audition_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "audition_type" */
export type Audition_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audition_type". All fields are combined with a logical 'AND'. */
export type Audition_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Audition_Type_Bool_Exp>>>;
  _not?: Maybe<Audition_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Audition_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "audition_type" */
export enum Audition_Type_Constraint {
  /** unique or primary key constraint */
  AuditionTypeNameUnique = 'audition_type_name_unique',
  /** unique or primary key constraint */
  AuditionTypePkey = 'audition_type_pkey'
}

/** input type for incrementing integer column in table "audition_type" */
export type Audition_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "audition_type" */
export type Audition_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Audition_Type_Max_Fields = {
  __typename?: 'audition_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "audition_type" */
export type Audition_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Audition_Type_Min_Fields = {
  __typename?: 'audition_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "audition_type" */
export type Audition_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "audition_type" */
export type Audition_Type_Mutation_Response = {
  __typename?: 'audition_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Audition_Type>;
};

/** input type for inserting object relation for remote table "audition_type" */
export type Audition_Type_Obj_Rel_Insert_Input = {
  data: Audition_Type_Insert_Input;
  on_conflict?: Maybe<Audition_Type_On_Conflict>;
};

/** on conflict condition type for table "audition_type" */
export type Audition_Type_On_Conflict = {
  constraint: Audition_Type_Constraint;
  update_columns: Array<Audition_Type_Update_Column>;
  where?: Maybe<Audition_Type_Bool_Exp>;
};

/** ordering options when selecting data from "audition_type" */
export type Audition_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "audition_type" */
export type Audition_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "audition_type" */
export enum Audition_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "audition_type" */
export type Audition_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Audition_Type_Stddev_Fields = {
  __typename?: 'audition_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "audition_type" */
export type Audition_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audition_Type_Stddev_Pop_Fields = {
  __typename?: 'audition_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "audition_type" */
export type Audition_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audition_Type_Stddev_Samp_Fields = {
  __typename?: 'audition_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "audition_type" */
export type Audition_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Audition_Type_Sum_Fields = {
  __typename?: 'audition_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "audition_type" */
export type Audition_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "audition_type" */
export enum Audition_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Audition_Type_Var_Pop_Fields = {
  __typename?: 'audition_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "audition_type" */
export type Audition_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audition_Type_Var_Samp_Fields = {
  __typename?: 'audition_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "audition_type" */
export type Audition_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Audition_Type_Variance_Fields = {
  __typename?: 'audition_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "audition_type" */
export type Audition_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "audition" */
export enum Audition_Update_Column {
  /** column name */
  AuditionTypeId = 'audition_type_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Audition_Var_Pop_Fields = {
  __typename?: 'audition_var_pop_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "audition" */
export type Audition_Var_Pop_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audition_Var_Samp_Fields = {
  __typename?: 'audition_var_samp_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "audition" */
export type Audition_Var_Samp_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Audition_Variance_Fields = {
  __typename?: 'audition_variance_fields';
  audition_type_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "audition" */
export type Audition_Variance_Order_By = {
  audition_type_id?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "body_type" */
export type Body_Type = {
  __typename?: 'body_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "body_type" */
export type Body_Type_Aggregate = {
  __typename?: 'body_type_aggregate';
  aggregate?: Maybe<Body_Type_Aggregate_Fields>;
  nodes: Array<Body_Type>;
};

/** aggregate fields of "body_type" */
export type Body_Type_Aggregate_Fields = {
  __typename?: 'body_type_aggregate_fields';
  avg?: Maybe<Body_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Body_Type_Max_Fields>;
  min?: Maybe<Body_Type_Min_Fields>;
  stddev?: Maybe<Body_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Body_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Body_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Body_Type_Sum_Fields>;
  var_pop?: Maybe<Body_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Body_Type_Var_Samp_Fields>;
  variance?: Maybe<Body_Type_Variance_Fields>;
};


/** aggregate fields of "body_type" */
export type Body_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Body_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "body_type" */
export type Body_Type_Aggregate_Order_By = {
  avg?: Maybe<Body_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Body_Type_Max_Order_By>;
  min?: Maybe<Body_Type_Min_Order_By>;
  stddev?: Maybe<Body_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Body_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Body_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Body_Type_Sum_Order_By>;
  var_pop?: Maybe<Body_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Body_Type_Var_Samp_Order_By>;
  variance?: Maybe<Body_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "body_type" */
export type Body_Type_Arr_Rel_Insert_Input = {
  data: Array<Body_Type_Insert_Input>;
  on_conflict?: Maybe<Body_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Body_Type_Avg_Fields = {
  __typename?: 'body_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "body_type" */
export type Body_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "body_type". All fields are combined with a logical 'AND'. */
export type Body_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Body_Type_Bool_Exp>>>;
  _not?: Maybe<Body_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Body_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "body_type" */
export enum Body_Type_Constraint {
  /** unique or primary key constraint */
  BodyTypeNameUnique = 'body_type_name_unique',
  /** unique or primary key constraint */
  BodyTypePkey = 'body_type_pkey'
}

/** input type for incrementing integer column in table "body_type" */
export type Body_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "body_type" */
export type Body_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Body_Type_Max_Fields = {
  __typename?: 'body_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "body_type" */
export type Body_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Body_Type_Min_Fields = {
  __typename?: 'body_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "body_type" */
export type Body_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "body_type" */
export type Body_Type_Mutation_Response = {
  __typename?: 'body_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Body_Type>;
};

/** input type for inserting object relation for remote table "body_type" */
export type Body_Type_Obj_Rel_Insert_Input = {
  data: Body_Type_Insert_Input;
  on_conflict?: Maybe<Body_Type_On_Conflict>;
};

/** on conflict condition type for table "body_type" */
export type Body_Type_On_Conflict = {
  constraint: Body_Type_Constraint;
  update_columns: Array<Body_Type_Update_Column>;
  where?: Maybe<Body_Type_Bool_Exp>;
};

/** ordering options when selecting data from "body_type" */
export type Body_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "body_type" */
export type Body_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "body_type" */
export enum Body_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "body_type" */
export type Body_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Body_Type_Stddev_Fields = {
  __typename?: 'body_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "body_type" */
export type Body_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Body_Type_Stddev_Pop_Fields = {
  __typename?: 'body_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "body_type" */
export type Body_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Body_Type_Stddev_Samp_Fields = {
  __typename?: 'body_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "body_type" */
export type Body_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Body_Type_Sum_Fields = {
  __typename?: 'body_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "body_type" */
export type Body_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "body_type" */
export enum Body_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Body_Type_Var_Pop_Fields = {
  __typename?: 'body_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "body_type" */
export type Body_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Body_Type_Var_Samp_Fields = {
  __typename?: 'body_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "body_type" */
export type Body_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Body_Type_Variance_Fields = {
  __typename?: 'body_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "body_type" */
export type Body_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "city" */
export type City = {
  __typename?: 'city';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "city" */
export type City_Aggregate = {
  __typename?: 'city_aggregate';
  aggregate?: Maybe<City_Aggregate_Fields>;
  nodes: Array<City>;
};

/** aggregate fields of "city" */
export type City_Aggregate_Fields = {
  __typename?: 'city_aggregate_fields';
  avg?: Maybe<City_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<City_Max_Fields>;
  min?: Maybe<City_Min_Fields>;
  stddev?: Maybe<City_Stddev_Fields>;
  stddev_pop?: Maybe<City_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<City_Stddev_Samp_Fields>;
  sum?: Maybe<City_Sum_Fields>;
  var_pop?: Maybe<City_Var_Pop_Fields>;
  var_samp?: Maybe<City_Var_Samp_Fields>;
  variance?: Maybe<City_Variance_Fields>;
};


/** aggregate fields of "city" */
export type City_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<City_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "city" */
export type City_Aggregate_Order_By = {
  avg?: Maybe<City_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<City_Max_Order_By>;
  min?: Maybe<City_Min_Order_By>;
  stddev?: Maybe<City_Stddev_Order_By>;
  stddev_pop?: Maybe<City_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<City_Stddev_Samp_Order_By>;
  sum?: Maybe<City_Sum_Order_By>;
  var_pop?: Maybe<City_Var_Pop_Order_By>;
  var_samp?: Maybe<City_Var_Samp_Order_By>;
  variance?: Maybe<City_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "city" */
export type City_Arr_Rel_Insert_Input = {
  data: Array<City_Insert_Input>;
  on_conflict?: Maybe<City_On_Conflict>;
};

/** aggregate avg on columns */
export type City_Avg_Fields = {
  __typename?: 'city_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "city" */
export type City_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "city". All fields are combined with a logical 'AND'. */
export type City_Bool_Exp = {
  _and?: Maybe<Array<Maybe<City_Bool_Exp>>>;
  _not?: Maybe<City_Bool_Exp>;
  _or?: Maybe<Array<Maybe<City_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "city" */
export enum City_Constraint {
  /** unique or primary key constraint */
  CityNameUnique = 'city_name_unique',
  /** unique or primary key constraint */
  CityPkey = 'city_pkey'
}

/** input type for incrementing integer column in table "city" */
export type City_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "city" */
export type City_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type City_Max_Fields = {
  __typename?: 'city_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "city" */
export type City_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type City_Min_Fields = {
  __typename?: 'city_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "city" */
export type City_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "city" */
export type City_Mutation_Response = {
  __typename?: 'city_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<City>;
};

/** input type for inserting object relation for remote table "city" */
export type City_Obj_Rel_Insert_Input = {
  data: City_Insert_Input;
  on_conflict?: Maybe<City_On_Conflict>;
};

/** on conflict condition type for table "city" */
export type City_On_Conflict = {
  constraint: City_Constraint;
  update_columns: Array<City_Update_Column>;
  where?: Maybe<City_Bool_Exp>;
};

/** ordering options when selecting data from "city" */
export type City_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "city" */
export type City_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "city" */
export enum City_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "city" */
export type City_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type City_Stddev_Fields = {
  __typename?: 'city_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "city" */
export type City_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type City_Stddev_Pop_Fields = {
  __typename?: 'city_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "city" */
export type City_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type City_Stddev_Samp_Fields = {
  __typename?: 'city_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "city" */
export type City_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type City_Sum_Fields = {
  __typename?: 'city_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "city" */
export type City_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "city" */
export enum City_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type City_Var_Pop_Fields = {
  __typename?: 'city_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "city" */
export type City_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type City_Var_Samp_Fields = {
  __typename?: 'city_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "city" */
export type City_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type City_Variance_Fields = {
  __typename?: 'city_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "city" */
export type City_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "ethnicity" */
export type Ethnicity = {
  __typename?: 'ethnicity';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "ethnicity" */
export type Ethnicity_Aggregate = {
  __typename?: 'ethnicity_aggregate';
  aggregate?: Maybe<Ethnicity_Aggregate_Fields>;
  nodes: Array<Ethnicity>;
};

/** aggregate fields of "ethnicity" */
export type Ethnicity_Aggregate_Fields = {
  __typename?: 'ethnicity_aggregate_fields';
  avg?: Maybe<Ethnicity_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ethnicity_Max_Fields>;
  min?: Maybe<Ethnicity_Min_Fields>;
  stddev?: Maybe<Ethnicity_Stddev_Fields>;
  stddev_pop?: Maybe<Ethnicity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ethnicity_Stddev_Samp_Fields>;
  sum?: Maybe<Ethnicity_Sum_Fields>;
  var_pop?: Maybe<Ethnicity_Var_Pop_Fields>;
  var_samp?: Maybe<Ethnicity_Var_Samp_Fields>;
  variance?: Maybe<Ethnicity_Variance_Fields>;
};


/** aggregate fields of "ethnicity" */
export type Ethnicity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ethnicity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ethnicity" */
export type Ethnicity_Aggregate_Order_By = {
  avg?: Maybe<Ethnicity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ethnicity_Max_Order_By>;
  min?: Maybe<Ethnicity_Min_Order_By>;
  stddev?: Maybe<Ethnicity_Stddev_Order_By>;
  stddev_pop?: Maybe<Ethnicity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ethnicity_Stddev_Samp_Order_By>;
  sum?: Maybe<Ethnicity_Sum_Order_By>;
  var_pop?: Maybe<Ethnicity_Var_Pop_Order_By>;
  var_samp?: Maybe<Ethnicity_Var_Samp_Order_By>;
  variance?: Maybe<Ethnicity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ethnicity" */
export type Ethnicity_Arr_Rel_Insert_Input = {
  data: Array<Ethnicity_Insert_Input>;
  on_conflict?: Maybe<Ethnicity_On_Conflict>;
};

/** aggregate avg on columns */
export type Ethnicity_Avg_Fields = {
  __typename?: 'ethnicity_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ethnicity" */
export type Ethnicity_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ethnicity". All fields are combined with a logical 'AND'. */
export type Ethnicity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ethnicity_Bool_Exp>>>;
  _not?: Maybe<Ethnicity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ethnicity_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ethnicity" */
export enum Ethnicity_Constraint {
  /** unique or primary key constraint */
  EthnicityNameUnique = 'ethnicity_name_unique',
  /** unique or primary key constraint */
  EthnicityPkey = 'ethnicity_pkey'
}

/** input type for incrementing integer column in table "ethnicity" */
export type Ethnicity_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ethnicity" */
export type Ethnicity_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ethnicity_Max_Fields = {
  __typename?: 'ethnicity_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ethnicity" */
export type Ethnicity_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ethnicity_Min_Fields = {
  __typename?: 'ethnicity_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ethnicity" */
export type Ethnicity_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "ethnicity" */
export type Ethnicity_Mutation_Response = {
  __typename?: 'ethnicity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ethnicity>;
};

/** input type for inserting object relation for remote table "ethnicity" */
export type Ethnicity_Obj_Rel_Insert_Input = {
  data: Ethnicity_Insert_Input;
  on_conflict?: Maybe<Ethnicity_On_Conflict>;
};

/** on conflict condition type for table "ethnicity" */
export type Ethnicity_On_Conflict = {
  constraint: Ethnicity_Constraint;
  update_columns: Array<Ethnicity_Update_Column>;
  where?: Maybe<Ethnicity_Bool_Exp>;
};

/** ordering options when selecting data from "ethnicity" */
export type Ethnicity_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "ethnicity" */
export type Ethnicity_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ethnicity" */
export enum Ethnicity_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ethnicity" */
export type Ethnicity_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ethnicity_Stddev_Fields = {
  __typename?: 'ethnicity_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ethnicity" */
export type Ethnicity_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ethnicity_Stddev_Pop_Fields = {
  __typename?: 'ethnicity_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ethnicity" */
export type Ethnicity_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ethnicity_Stddev_Samp_Fields = {
  __typename?: 'ethnicity_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ethnicity" */
export type Ethnicity_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ethnicity_Sum_Fields = {
  __typename?: 'ethnicity_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ethnicity" */
export type Ethnicity_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "ethnicity" */
export enum Ethnicity_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Ethnicity_Var_Pop_Fields = {
  __typename?: 'ethnicity_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ethnicity" */
export type Ethnicity_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ethnicity_Var_Samp_Fields = {
  __typename?: 'ethnicity_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ethnicity" */
export type Ethnicity_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ethnicity_Variance_Fields = {
  __typename?: 'ethnicity_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ethnicity" */
export type Ethnicity_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "eye_color" */
export type Eye_Color = {
  __typename?: 'eye_color';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "eye_color" */
export type Eye_Color_Aggregate = {
  __typename?: 'eye_color_aggregate';
  aggregate?: Maybe<Eye_Color_Aggregate_Fields>;
  nodes: Array<Eye_Color>;
};

/** aggregate fields of "eye_color" */
export type Eye_Color_Aggregate_Fields = {
  __typename?: 'eye_color_aggregate_fields';
  avg?: Maybe<Eye_Color_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Eye_Color_Max_Fields>;
  min?: Maybe<Eye_Color_Min_Fields>;
  stddev?: Maybe<Eye_Color_Stddev_Fields>;
  stddev_pop?: Maybe<Eye_Color_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eye_Color_Stddev_Samp_Fields>;
  sum?: Maybe<Eye_Color_Sum_Fields>;
  var_pop?: Maybe<Eye_Color_Var_Pop_Fields>;
  var_samp?: Maybe<Eye_Color_Var_Samp_Fields>;
  variance?: Maybe<Eye_Color_Variance_Fields>;
};


/** aggregate fields of "eye_color" */
export type Eye_Color_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Eye_Color_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "eye_color" */
export type Eye_Color_Aggregate_Order_By = {
  avg?: Maybe<Eye_Color_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eye_Color_Max_Order_By>;
  min?: Maybe<Eye_Color_Min_Order_By>;
  stddev?: Maybe<Eye_Color_Stddev_Order_By>;
  stddev_pop?: Maybe<Eye_Color_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eye_Color_Stddev_Samp_Order_By>;
  sum?: Maybe<Eye_Color_Sum_Order_By>;
  var_pop?: Maybe<Eye_Color_Var_Pop_Order_By>;
  var_samp?: Maybe<Eye_Color_Var_Samp_Order_By>;
  variance?: Maybe<Eye_Color_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "eye_color" */
export type Eye_Color_Arr_Rel_Insert_Input = {
  data: Array<Eye_Color_Insert_Input>;
  on_conflict?: Maybe<Eye_Color_On_Conflict>;
};

/** aggregate avg on columns */
export type Eye_Color_Avg_Fields = {
  __typename?: 'eye_color_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "eye_color" */
export type Eye_Color_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eye_color". All fields are combined with a logical 'AND'. */
export type Eye_Color_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Eye_Color_Bool_Exp>>>;
  _not?: Maybe<Eye_Color_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Eye_Color_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "eye_color" */
export enum Eye_Color_Constraint {
  /** unique or primary key constraint */
  EyeColorNameUnique = 'eye_color_name_unique',
  /** unique or primary key constraint */
  EyeColorPkey = 'eye_color_pkey'
}

/** input type for incrementing integer column in table "eye_color" */
export type Eye_Color_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "eye_color" */
export type Eye_Color_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Eye_Color_Max_Fields = {
  __typename?: 'eye_color_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "eye_color" */
export type Eye_Color_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Eye_Color_Min_Fields = {
  __typename?: 'eye_color_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "eye_color" */
export type Eye_Color_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "eye_color" */
export type Eye_Color_Mutation_Response = {
  __typename?: 'eye_color_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Eye_Color>;
};

/** input type for inserting object relation for remote table "eye_color" */
export type Eye_Color_Obj_Rel_Insert_Input = {
  data: Eye_Color_Insert_Input;
  on_conflict?: Maybe<Eye_Color_On_Conflict>;
};

/** on conflict condition type for table "eye_color" */
export type Eye_Color_On_Conflict = {
  constraint: Eye_Color_Constraint;
  update_columns: Array<Eye_Color_Update_Column>;
  where?: Maybe<Eye_Color_Bool_Exp>;
};

/** ordering options when selecting data from "eye_color" */
export type Eye_Color_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "eye_color" */
export type Eye_Color_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "eye_color" */
export enum Eye_Color_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "eye_color" */
export type Eye_Color_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Eye_Color_Stddev_Fields = {
  __typename?: 'eye_color_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "eye_color" */
export type Eye_Color_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Eye_Color_Stddev_Pop_Fields = {
  __typename?: 'eye_color_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "eye_color" */
export type Eye_Color_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Eye_Color_Stddev_Samp_Fields = {
  __typename?: 'eye_color_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "eye_color" */
export type Eye_Color_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Eye_Color_Sum_Fields = {
  __typename?: 'eye_color_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "eye_color" */
export type Eye_Color_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "eye_color" */
export enum Eye_Color_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Eye_Color_Var_Pop_Fields = {
  __typename?: 'eye_color_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "eye_color" */
export type Eye_Color_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Eye_Color_Var_Samp_Fields = {
  __typename?: 'eye_color_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "eye_color" */
export type Eye_Color_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Eye_Color_Variance_Fields = {
  __typename?: 'eye_color_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "eye_color" */
export type Eye_Color_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "gender" */
export type Gender = {
  __typename?: 'gender';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "gender" */
export type Gender_Aggregate = {
  __typename?: 'gender_aggregate';
  aggregate?: Maybe<Gender_Aggregate_Fields>;
  nodes: Array<Gender>;
};

/** aggregate fields of "gender" */
export type Gender_Aggregate_Fields = {
  __typename?: 'gender_aggregate_fields';
  avg?: Maybe<Gender_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Gender_Max_Fields>;
  min?: Maybe<Gender_Min_Fields>;
  stddev?: Maybe<Gender_Stddev_Fields>;
  stddev_pop?: Maybe<Gender_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gender_Stddev_Samp_Fields>;
  sum?: Maybe<Gender_Sum_Fields>;
  var_pop?: Maybe<Gender_Var_Pop_Fields>;
  var_samp?: Maybe<Gender_Var_Samp_Fields>;
  variance?: Maybe<Gender_Variance_Fields>;
};


/** aggregate fields of "gender" */
export type Gender_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gender_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gender" */
export type Gender_Aggregate_Order_By = {
  avg?: Maybe<Gender_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Gender_Max_Order_By>;
  min?: Maybe<Gender_Min_Order_By>;
  stddev?: Maybe<Gender_Stddev_Order_By>;
  stddev_pop?: Maybe<Gender_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Gender_Stddev_Samp_Order_By>;
  sum?: Maybe<Gender_Sum_Order_By>;
  var_pop?: Maybe<Gender_Var_Pop_Order_By>;
  var_samp?: Maybe<Gender_Var_Samp_Order_By>;
  variance?: Maybe<Gender_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gender" */
export type Gender_Arr_Rel_Insert_Input = {
  data: Array<Gender_Insert_Input>;
  on_conflict?: Maybe<Gender_On_Conflict>;
};

/** aggregate avg on columns */
export type Gender_Avg_Fields = {
  __typename?: 'gender_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gender" */
export type Gender_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gender". All fields are combined with a logical 'AND'. */
export type Gender_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Gender_Bool_Exp>>>;
  _not?: Maybe<Gender_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Gender_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gender" */
export enum Gender_Constraint {
  /** unique or primary key constraint */
  GenderNameUnique = 'gender_name_unique',
  /** unique or primary key constraint */
  GenderPkey = 'gender_pkey'
}

/** input type for incrementing integer column in table "gender" */
export type Gender_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "gender" */
export type Gender_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Gender_Max_Fields = {
  __typename?: 'gender_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "gender" */
export type Gender_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gender_Min_Fields = {
  __typename?: 'gender_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "gender" */
export type Gender_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "gender" */
export type Gender_Mutation_Response = {
  __typename?: 'gender_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Gender>;
};

/** input type for inserting object relation for remote table "gender" */
export type Gender_Obj_Rel_Insert_Input = {
  data: Gender_Insert_Input;
  on_conflict?: Maybe<Gender_On_Conflict>;
};

/** on conflict condition type for table "gender" */
export type Gender_On_Conflict = {
  constraint: Gender_Constraint;
  update_columns: Array<Gender_Update_Column>;
  where?: Maybe<Gender_Bool_Exp>;
};

/** ordering options when selecting data from "gender" */
export type Gender_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "gender" */
export type Gender_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "gender" */
export enum Gender_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "gender" */
export type Gender_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Gender_Stddev_Fields = {
  __typename?: 'gender_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gender" */
export type Gender_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gender_Stddev_Pop_Fields = {
  __typename?: 'gender_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gender" */
export type Gender_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gender_Stddev_Samp_Fields = {
  __typename?: 'gender_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gender" */
export type Gender_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Gender_Sum_Fields = {
  __typename?: 'gender_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gender" */
export type Gender_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "gender" */
export enum Gender_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Gender_Var_Pop_Fields = {
  __typename?: 'gender_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gender" */
export type Gender_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gender_Var_Samp_Fields = {
  __typename?: 'gender_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gender" */
export type Gender_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Gender_Variance_Fields = {
  __typename?: 'gender_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gender" */
export type Gender_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "hair_color" */
export type Hair_Color = {
  __typename?: 'hair_color';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "hair_color" */
export type Hair_Color_Aggregate = {
  __typename?: 'hair_color_aggregate';
  aggregate?: Maybe<Hair_Color_Aggregate_Fields>;
  nodes: Array<Hair_Color>;
};

/** aggregate fields of "hair_color" */
export type Hair_Color_Aggregate_Fields = {
  __typename?: 'hair_color_aggregate_fields';
  avg?: Maybe<Hair_Color_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hair_Color_Max_Fields>;
  min?: Maybe<Hair_Color_Min_Fields>;
  stddev?: Maybe<Hair_Color_Stddev_Fields>;
  stddev_pop?: Maybe<Hair_Color_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hair_Color_Stddev_Samp_Fields>;
  sum?: Maybe<Hair_Color_Sum_Fields>;
  var_pop?: Maybe<Hair_Color_Var_Pop_Fields>;
  var_samp?: Maybe<Hair_Color_Var_Samp_Fields>;
  variance?: Maybe<Hair_Color_Variance_Fields>;
};


/** aggregate fields of "hair_color" */
export type Hair_Color_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hair_Color_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hair_color" */
export type Hair_Color_Aggregate_Order_By = {
  avg?: Maybe<Hair_Color_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Hair_Color_Max_Order_By>;
  min?: Maybe<Hair_Color_Min_Order_By>;
  stddev?: Maybe<Hair_Color_Stddev_Order_By>;
  stddev_pop?: Maybe<Hair_Color_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hair_Color_Stddev_Samp_Order_By>;
  sum?: Maybe<Hair_Color_Sum_Order_By>;
  var_pop?: Maybe<Hair_Color_Var_Pop_Order_By>;
  var_samp?: Maybe<Hair_Color_Var_Samp_Order_By>;
  variance?: Maybe<Hair_Color_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hair_color" */
export type Hair_Color_Arr_Rel_Insert_Input = {
  data: Array<Hair_Color_Insert_Input>;
  on_conflict?: Maybe<Hair_Color_On_Conflict>;
};

/** aggregate avg on columns */
export type Hair_Color_Avg_Fields = {
  __typename?: 'hair_color_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hair_color" */
export type Hair_Color_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hair_color". All fields are combined with a logical 'AND'. */
export type Hair_Color_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hair_Color_Bool_Exp>>>;
  _not?: Maybe<Hair_Color_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hair_Color_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hair_color" */
export enum Hair_Color_Constraint {
  /** unique or primary key constraint */
  HairColorNameUnique = 'hair_color_name_unique',
  /** unique or primary key constraint */
  HairColorPkey = 'hair_color_pkey'
}

/** input type for incrementing integer column in table "hair_color" */
export type Hair_Color_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "hair_color" */
export type Hair_Color_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hair_Color_Max_Fields = {
  __typename?: 'hair_color_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "hair_color" */
export type Hair_Color_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hair_Color_Min_Fields = {
  __typename?: 'hair_color_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "hair_color" */
export type Hair_Color_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "hair_color" */
export type Hair_Color_Mutation_Response = {
  __typename?: 'hair_color_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hair_Color>;
};

/** input type for inserting object relation for remote table "hair_color" */
export type Hair_Color_Obj_Rel_Insert_Input = {
  data: Hair_Color_Insert_Input;
  on_conflict?: Maybe<Hair_Color_On_Conflict>;
};

/** on conflict condition type for table "hair_color" */
export type Hair_Color_On_Conflict = {
  constraint: Hair_Color_Constraint;
  update_columns: Array<Hair_Color_Update_Column>;
  where?: Maybe<Hair_Color_Bool_Exp>;
};

/** ordering options when selecting data from "hair_color" */
export type Hair_Color_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "hair_color" */
export type Hair_Color_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "hair_color" */
export enum Hair_Color_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "hair_color" */
export type Hair_Color_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Hair_Color_Stddev_Fields = {
  __typename?: 'hair_color_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hair_color" */
export type Hair_Color_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hair_Color_Stddev_Pop_Fields = {
  __typename?: 'hair_color_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hair_color" */
export type Hair_Color_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hair_Color_Stddev_Samp_Fields = {
  __typename?: 'hair_color_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hair_color" */
export type Hair_Color_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Hair_Color_Sum_Fields = {
  __typename?: 'hair_color_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hair_color" */
export type Hair_Color_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "hair_color" */
export enum Hair_Color_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Hair_Color_Var_Pop_Fields = {
  __typename?: 'hair_color_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hair_color" */
export type Hair_Color_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hair_Color_Var_Samp_Fields = {
  __typename?: 'hair_color_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hair_color" */
export type Hair_Color_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Hair_Color_Variance_Fields = {
  __typename?: 'hair_color_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hair_color" */
export type Hair_Color_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "highlight" */
export type Highlight = {
  __typename?: 'highlight';
  highlight_type_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  source_url?: Maybe<Scalars['String']>;
  user_id: Scalars['Int'];
};

/** aggregated selection of "highlight" */
export type Highlight_Aggregate = {
  __typename?: 'highlight_aggregate';
  aggregate?: Maybe<Highlight_Aggregate_Fields>;
  nodes: Array<Highlight>;
};

/** aggregate fields of "highlight" */
export type Highlight_Aggregate_Fields = {
  __typename?: 'highlight_aggregate_fields';
  avg?: Maybe<Highlight_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Highlight_Max_Fields>;
  min?: Maybe<Highlight_Min_Fields>;
  stddev?: Maybe<Highlight_Stddev_Fields>;
  stddev_pop?: Maybe<Highlight_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Highlight_Stddev_Samp_Fields>;
  sum?: Maybe<Highlight_Sum_Fields>;
  var_pop?: Maybe<Highlight_Var_Pop_Fields>;
  var_samp?: Maybe<Highlight_Var_Samp_Fields>;
  variance?: Maybe<Highlight_Variance_Fields>;
};


/** aggregate fields of "highlight" */
export type Highlight_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Highlight_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "highlight" */
export type Highlight_Aggregate_Order_By = {
  avg?: Maybe<Highlight_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Highlight_Max_Order_By>;
  min?: Maybe<Highlight_Min_Order_By>;
  stddev?: Maybe<Highlight_Stddev_Order_By>;
  stddev_pop?: Maybe<Highlight_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Highlight_Stddev_Samp_Order_By>;
  sum?: Maybe<Highlight_Sum_Order_By>;
  var_pop?: Maybe<Highlight_Var_Pop_Order_By>;
  var_samp?: Maybe<Highlight_Var_Samp_Order_By>;
  variance?: Maybe<Highlight_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "highlight" */
export type Highlight_Arr_Rel_Insert_Input = {
  data: Array<Highlight_Insert_Input>;
  on_conflict?: Maybe<Highlight_On_Conflict>;
};

/** aggregate avg on columns */
export type Highlight_Avg_Fields = {
  __typename?: 'highlight_avg_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "highlight" */
export type Highlight_Avg_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "highlight". All fields are combined with a logical 'AND'. */
export type Highlight_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Highlight_Bool_Exp>>>;
  _not?: Maybe<Highlight_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Highlight_Bool_Exp>>>;
  highlight_type_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  source_url?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "highlight" */
export enum Highlight_Constraint {
  /** unique or primary key constraint */
  HighlightPkey = 'highlight_pkey'
}

/** input type for incrementing integer column in table "highlight" */
export type Highlight_Inc_Input = {
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "highlight" */
export type Highlight_Insert_Input = {
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Highlight_Max_Fields = {
  __typename?: 'highlight_max_fields';
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "highlight" */
export type Highlight_Max_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Highlight_Min_Fields = {
  __typename?: 'highlight_min_fields';
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "highlight" */
export type Highlight_Min_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "highlight" */
export type Highlight_Mutation_Response = {
  __typename?: 'highlight_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Highlight>;
};

/** input type for inserting object relation for remote table "highlight" */
export type Highlight_Obj_Rel_Insert_Input = {
  data: Highlight_Insert_Input;
  on_conflict?: Maybe<Highlight_On_Conflict>;
};

/** on conflict condition type for table "highlight" */
export type Highlight_On_Conflict = {
  constraint: Highlight_Constraint;
  update_columns: Array<Highlight_Update_Column>;
  where?: Maybe<Highlight_Bool_Exp>;
};

/** ordering options when selecting data from "highlight" */
export type Highlight_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "highlight" */
export type Highlight_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "highlight" */
export enum Highlight_Select_Column {
  /** column name */
  HighlightTypeId = 'highlight_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SourceUrl = 'source_url',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "highlight" */
export type Highlight_Set_Input = {
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Highlight_Stddev_Fields = {
  __typename?: 'highlight_stddev_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "highlight" */
export type Highlight_Stddev_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Highlight_Stddev_Pop_Fields = {
  __typename?: 'highlight_stddev_pop_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "highlight" */
export type Highlight_Stddev_Pop_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Highlight_Stddev_Samp_Fields = {
  __typename?: 'highlight_stddev_samp_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "highlight" */
export type Highlight_Stddev_Samp_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Highlight_Sum_Fields = {
  __typename?: 'highlight_sum_fields';
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "highlight" */
export type Highlight_Sum_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "highlight_type" */
export type Highlight_Type = {
  __typename?: 'highlight_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "highlight_type" */
export type Highlight_Type_Aggregate = {
  __typename?: 'highlight_type_aggregate';
  aggregate?: Maybe<Highlight_Type_Aggregate_Fields>;
  nodes: Array<Highlight_Type>;
};

/** aggregate fields of "highlight_type" */
export type Highlight_Type_Aggregate_Fields = {
  __typename?: 'highlight_type_aggregate_fields';
  avg?: Maybe<Highlight_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Highlight_Type_Max_Fields>;
  min?: Maybe<Highlight_Type_Min_Fields>;
  stddev?: Maybe<Highlight_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Highlight_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Highlight_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Highlight_Type_Sum_Fields>;
  var_pop?: Maybe<Highlight_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Highlight_Type_Var_Samp_Fields>;
  variance?: Maybe<Highlight_Type_Variance_Fields>;
};


/** aggregate fields of "highlight_type" */
export type Highlight_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Highlight_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "highlight_type" */
export type Highlight_Type_Aggregate_Order_By = {
  avg?: Maybe<Highlight_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Highlight_Type_Max_Order_By>;
  min?: Maybe<Highlight_Type_Min_Order_By>;
  stddev?: Maybe<Highlight_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Highlight_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Highlight_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Highlight_Type_Sum_Order_By>;
  var_pop?: Maybe<Highlight_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Highlight_Type_Var_Samp_Order_By>;
  variance?: Maybe<Highlight_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "highlight_type" */
export type Highlight_Type_Arr_Rel_Insert_Input = {
  data: Array<Highlight_Type_Insert_Input>;
  on_conflict?: Maybe<Highlight_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Highlight_Type_Avg_Fields = {
  __typename?: 'highlight_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "highlight_type" */
export type Highlight_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "highlight_type". All fields are combined with a logical 'AND'. */
export type Highlight_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Highlight_Type_Bool_Exp>>>;
  _not?: Maybe<Highlight_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Highlight_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "highlight_type" */
export enum Highlight_Type_Constraint {
  /** unique or primary key constraint */
  HighlightTypeNameUnique = 'highlight_type_name_unique',
  /** unique or primary key constraint */
  HighlightTypePkey = 'highlight_type_pkey'
}

/** input type for incrementing integer column in table "highlight_type" */
export type Highlight_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "highlight_type" */
export type Highlight_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Highlight_Type_Max_Fields = {
  __typename?: 'highlight_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "highlight_type" */
export type Highlight_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Highlight_Type_Min_Fields = {
  __typename?: 'highlight_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "highlight_type" */
export type Highlight_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "highlight_type" */
export type Highlight_Type_Mutation_Response = {
  __typename?: 'highlight_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Highlight_Type>;
};

/** input type for inserting object relation for remote table "highlight_type" */
export type Highlight_Type_Obj_Rel_Insert_Input = {
  data: Highlight_Type_Insert_Input;
  on_conflict?: Maybe<Highlight_Type_On_Conflict>;
};

/** on conflict condition type for table "highlight_type" */
export type Highlight_Type_On_Conflict = {
  constraint: Highlight_Type_Constraint;
  update_columns: Array<Highlight_Type_Update_Column>;
  where?: Maybe<Highlight_Type_Bool_Exp>;
};

/** ordering options when selecting data from "highlight_type" */
export type Highlight_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "highlight_type" */
export type Highlight_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "highlight_type" */
export enum Highlight_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "highlight_type" */
export type Highlight_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Highlight_Type_Stddev_Fields = {
  __typename?: 'highlight_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "highlight_type" */
export type Highlight_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Highlight_Type_Stddev_Pop_Fields = {
  __typename?: 'highlight_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "highlight_type" */
export type Highlight_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Highlight_Type_Stddev_Samp_Fields = {
  __typename?: 'highlight_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "highlight_type" */
export type Highlight_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Highlight_Type_Sum_Fields = {
  __typename?: 'highlight_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "highlight_type" */
export type Highlight_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "highlight_type" */
export enum Highlight_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Highlight_Type_Var_Pop_Fields = {
  __typename?: 'highlight_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "highlight_type" */
export type Highlight_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Highlight_Type_Var_Samp_Fields = {
  __typename?: 'highlight_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "highlight_type" */
export type Highlight_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Highlight_Type_Variance_Fields = {
  __typename?: 'highlight_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "highlight_type" */
export type Highlight_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "highlight" */
export enum Highlight_Update_Column {
  /** column name */
  HighlightTypeId = 'highlight_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SourceUrl = 'source_url',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Highlight_Var_Pop_Fields = {
  __typename?: 'highlight_var_pop_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "highlight" */
export type Highlight_Var_Pop_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Highlight_Var_Samp_Fields = {
  __typename?: 'highlight_var_samp_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "highlight" */
export type Highlight_Var_Samp_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Highlight_Variance_Fields = {
  __typename?: 'highlight_variance_fields';
  highlight_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "highlight" */
export type Highlight_Variance_Order_By = {
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "knex_migrations" */
export type Knex_Migrations = {
  __typename?: 'knex_migrations';
  batch?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "knex_migrations" */
export type Knex_Migrations_Aggregate = {
  __typename?: 'knex_migrations_aggregate';
  aggregate?: Maybe<Knex_Migrations_Aggregate_Fields>;
  nodes: Array<Knex_Migrations>;
};

/** aggregate fields of "knex_migrations" */
export type Knex_Migrations_Aggregate_Fields = {
  __typename?: 'knex_migrations_aggregate_fields';
  avg?: Maybe<Knex_Migrations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Knex_Migrations_Max_Fields>;
  min?: Maybe<Knex_Migrations_Min_Fields>;
  stddev?: Maybe<Knex_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Knex_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Knex_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Knex_Migrations_Sum_Fields>;
  var_pop?: Maybe<Knex_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Knex_Migrations_Var_Samp_Fields>;
  variance?: Maybe<Knex_Migrations_Variance_Fields>;
};


/** aggregate fields of "knex_migrations" */
export type Knex_Migrations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Knex_Migrations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "knex_migrations" */
export type Knex_Migrations_Aggregate_Order_By = {
  avg?: Maybe<Knex_Migrations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Knex_Migrations_Max_Order_By>;
  min?: Maybe<Knex_Migrations_Min_Order_By>;
  stddev?: Maybe<Knex_Migrations_Stddev_Order_By>;
  stddev_pop?: Maybe<Knex_Migrations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Knex_Migrations_Stddev_Samp_Order_By>;
  sum?: Maybe<Knex_Migrations_Sum_Order_By>;
  var_pop?: Maybe<Knex_Migrations_Var_Pop_Order_By>;
  var_samp?: Maybe<Knex_Migrations_Var_Samp_Order_By>;
  variance?: Maybe<Knex_Migrations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "knex_migrations" */
export type Knex_Migrations_Arr_Rel_Insert_Input = {
  data: Array<Knex_Migrations_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};

/** aggregate avg on columns */
export type Knex_Migrations_Avg_Fields = {
  __typename?: 'knex_migrations_avg_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "knex_migrations" */
export type Knex_Migrations_Avg_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "knex_migrations". All fields are combined with a logical 'AND'. */
export type Knex_Migrations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Knex_Migrations_Bool_Exp>>>;
  _not?: Maybe<Knex_Migrations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Knex_Migrations_Bool_Exp>>>;
  batch?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  migration_time?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "knex_migrations" */
export enum Knex_Migrations_Constraint {
  /** unique or primary key constraint */
  KnexMigrationsPkey = 'knex_migrations_pkey'
}

/** input type for incrementing integer column in table "knex_migrations" */
export type Knex_Migrations_Inc_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "knex_migrations" */
export type Knex_Migrations_Insert_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "knex_migrations_lock" */
export type Knex_Migrations_Lock = {
  __typename?: 'knex_migrations_lock';
  index: Scalars['Int'];
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate = {
  __typename?: 'knex_migrations_lock_aggregate';
  aggregate?: Maybe<Knex_Migrations_Lock_Aggregate_Fields>;
  nodes: Array<Knex_Migrations_Lock>;
};

/** aggregate fields of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_Fields = {
  __typename?: 'knex_migrations_lock_aggregate_fields';
  avg?: Maybe<Knex_Migrations_Lock_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Knex_Migrations_Lock_Max_Fields>;
  min?: Maybe<Knex_Migrations_Lock_Min_Fields>;
  stddev?: Maybe<Knex_Migrations_Lock_Stddev_Fields>;
  stddev_pop?: Maybe<Knex_Migrations_Lock_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Knex_Migrations_Lock_Stddev_Samp_Fields>;
  sum?: Maybe<Knex_Migrations_Lock_Sum_Fields>;
  var_pop?: Maybe<Knex_Migrations_Lock_Var_Pop_Fields>;
  var_samp?: Maybe<Knex_Migrations_Lock_Var_Samp_Fields>;
  variance?: Maybe<Knex_Migrations_Lock_Variance_Fields>;
};


/** aggregate fields of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_Order_By = {
  avg?: Maybe<Knex_Migrations_Lock_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Knex_Migrations_Lock_Max_Order_By>;
  min?: Maybe<Knex_Migrations_Lock_Min_Order_By>;
  stddev?: Maybe<Knex_Migrations_Lock_Stddev_Order_By>;
  stddev_pop?: Maybe<Knex_Migrations_Lock_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Knex_Migrations_Lock_Stddev_Samp_Order_By>;
  sum?: Maybe<Knex_Migrations_Lock_Sum_Order_By>;
  var_pop?: Maybe<Knex_Migrations_Lock_Var_Pop_Order_By>;
  var_samp?: Maybe<Knex_Migrations_Lock_Var_Samp_Order_By>;
  variance?: Maybe<Knex_Migrations_Lock_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Arr_Rel_Insert_Input = {
  data: Array<Knex_Migrations_Lock_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};

/** aggregate avg on columns */
export type Knex_Migrations_Lock_Avg_Fields = {
  __typename?: 'knex_migrations_lock_avg_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Avg_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "knex_migrations_lock". All fields are combined with a logical 'AND'. */
export type Knex_Migrations_Lock_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Knex_Migrations_Lock_Bool_Exp>>>;
  _not?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Knex_Migrations_Lock_Bool_Exp>>>;
  index?: Maybe<Int_Comparison_Exp>;
  is_locked?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Constraint {
  /** unique or primary key constraint */
  KnexMigrationsLockPkey = 'knex_migrations_lock_pkey'
}

/** input type for incrementing integer column in table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Inc_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Insert_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Knex_Migrations_Lock_Max_Fields = {
  __typename?: 'knex_migrations_lock_max_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Max_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Knex_Migrations_Lock_Min_Fields = {
  __typename?: 'knex_migrations_lock_min_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Min_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** response of any mutation on the table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Mutation_Response = {
  __typename?: 'knex_migrations_lock_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Knex_Migrations_Lock>;
};

/** input type for inserting object relation for remote table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Obj_Rel_Insert_Input = {
  data: Knex_Migrations_Lock_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};

/** on conflict condition type for table "knex_migrations_lock" */
export type Knex_Migrations_Lock_On_Conflict = {
  constraint: Knex_Migrations_Lock_Constraint;
  update_columns: Array<Knex_Migrations_Lock_Update_Column>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};

/** ordering options when selecting data from "knex_migrations_lock" */
export type Knex_Migrations_Lock_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** primary key columns input for table: "knex_migrations_lock" */
export type Knex_Migrations_Lock_Pk_Columns_Input = {
  index: Scalars['Int'];
};

/** select columns of table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  IsLocked = 'is_locked'
}

/** input type for updating data in table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Set_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Knex_Migrations_Lock_Stddev_Fields = {
  __typename?: 'knex_migrations_lock_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Knex_Migrations_Lock_Stddev_Pop_Fields = {
  __typename?: 'knex_migrations_lock_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Knex_Migrations_Lock_Stddev_Samp_Fields = {
  __typename?: 'knex_migrations_lock_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Knex_Migrations_Lock_Sum_Fields = {
  __typename?: 'knex_migrations_lock_sum_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Sum_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** update columns of table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Update_Column {
  /** column name */
  Index = 'index',
  /** column name */
  IsLocked = 'is_locked'
}

/** aggregate var_pop on columns */
export type Knex_Migrations_Lock_Var_Pop_Fields = {
  __typename?: 'knex_migrations_lock_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Knex_Migrations_Lock_Var_Samp_Fields = {
  __typename?: 'knex_migrations_lock_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Knex_Migrations_Lock_Variance_Fields = {
  __typename?: 'knex_migrations_lock_variance_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Variance_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Knex_Migrations_Max_Fields = {
  __typename?: 'knex_migrations_max_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "knex_migrations" */
export type Knex_Migrations_Max_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Knex_Migrations_Min_Fields = {
  __typename?: 'knex_migrations_min_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "knex_migrations" */
export type Knex_Migrations_Min_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "knex_migrations" */
export type Knex_Migrations_Mutation_Response = {
  __typename?: 'knex_migrations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Knex_Migrations>;
};

/** input type for inserting object relation for remote table "knex_migrations" */
export type Knex_Migrations_Obj_Rel_Insert_Input = {
  data: Knex_Migrations_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};

/** on conflict condition type for table "knex_migrations" */
export type Knex_Migrations_On_Conflict = {
  constraint: Knex_Migrations_Constraint;
  update_columns: Array<Knex_Migrations_Update_Column>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};

/** ordering options when selecting data from "knex_migrations" */
export type Knex_Migrations_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "knex_migrations" */
export type Knex_Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "knex_migrations" */
export enum Knex_Migrations_Select_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  Id = 'id',
  /** column name */
  MigrationTime = 'migration_time',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "knex_migrations" */
export type Knex_Migrations_Set_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Knex_Migrations_Stddev_Fields = {
  __typename?: 'knex_migrations_stddev_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Knex_Migrations_Stddev_Pop_Fields = {
  __typename?: 'knex_migrations_stddev_pop_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Pop_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Knex_Migrations_Stddev_Samp_Fields = {
  __typename?: 'knex_migrations_stddev_samp_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Samp_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Knex_Migrations_Sum_Fields = {
  __typename?: 'knex_migrations_sum_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "knex_migrations" */
export type Knex_Migrations_Sum_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "knex_migrations" */
export enum Knex_Migrations_Update_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  Id = 'id',
  /** column name */
  MigrationTime = 'migration_time',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Knex_Migrations_Var_Pop_Fields = {
  __typename?: 'knex_migrations_var_pop_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "knex_migrations" */
export type Knex_Migrations_Var_Pop_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Knex_Migrations_Var_Samp_Fields = {
  __typename?: 'knex_migrations_var_samp_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "knex_migrations" */
export type Knex_Migrations_Var_Samp_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Knex_Migrations_Variance_Fields = {
  __typename?: 'knex_migrations_variance_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "knex_migrations" */
export type Knex_Migrations_Variance_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "applicants" */
  delete_applicants?: Maybe<Applicants_Mutation_Response>;
  /** delete single row from the table: "applicants" */
  delete_applicants_by_pk?: Maybe<Applicants>;
  /** delete data from the table: "audition" */
  delete_audition?: Maybe<Audition_Mutation_Response>;
  /** delete single row from the table: "audition" */
  delete_audition_by_pk?: Maybe<Audition>;
  /** delete data from the table: "audition_tag" */
  delete_audition_tag?: Maybe<Audition_Tag_Mutation_Response>;
  /** delete single row from the table: "audition_tag" */
  delete_audition_tag_by_pk?: Maybe<Audition_Tag>;
  /** delete data from the table: "audition_type" */
  delete_audition_type?: Maybe<Audition_Type_Mutation_Response>;
  /** delete single row from the table: "audition_type" */
  delete_audition_type_by_pk?: Maybe<Audition_Type>;
  /** delete data from the table: "body_type" */
  delete_body_type?: Maybe<Body_Type_Mutation_Response>;
  /** delete single row from the table: "body_type" */
  delete_body_type_by_pk?: Maybe<Body_Type>;
  /** delete data from the table: "city" */
  delete_city?: Maybe<City_Mutation_Response>;
  /** delete single row from the table: "city" */
  delete_city_by_pk?: Maybe<City>;
  /** delete data from the table: "ethnicity" */
  delete_ethnicity?: Maybe<Ethnicity_Mutation_Response>;
  /** delete single row from the table: "ethnicity" */
  delete_ethnicity_by_pk?: Maybe<Ethnicity>;
  /** delete data from the table: "eye_color" */
  delete_eye_color?: Maybe<Eye_Color_Mutation_Response>;
  /** delete single row from the table: "eye_color" */
  delete_eye_color_by_pk?: Maybe<Eye_Color>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<Gender_Mutation_Response>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<Gender>;
  /** delete data from the table: "hair_color" */
  delete_hair_color?: Maybe<Hair_Color_Mutation_Response>;
  /** delete single row from the table: "hair_color" */
  delete_hair_color_by_pk?: Maybe<Hair_Color>;
  /** delete data from the table: "highlight" */
  delete_highlight?: Maybe<Highlight_Mutation_Response>;
  /** delete single row from the table: "highlight" */
  delete_highlight_by_pk?: Maybe<Highlight>;
  /** delete data from the table: "highlight_type" */
  delete_highlight_type?: Maybe<Highlight_Type_Mutation_Response>;
  /** delete single row from the table: "highlight_type" */
  delete_highlight_type_by_pk?: Maybe<Highlight_Type>;
  /** delete data from the table: "knex_migrations" */
  delete_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** delete single row from the table: "knex_migrations" */
  delete_knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** delete data from the table: "knex_migrations_lock" */
  delete_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** delete single row from the table: "knex_migrations_lock" */
  delete_knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** delete data from the table: "physical_attribute" */
  delete_physical_attribute?: Maybe<Physical_Attribute_Mutation_Response>;
  /** delete single row from the table: "physical_attribute" */
  delete_physical_attribute_by_pk?: Maybe<Physical_Attribute>;
  /** delete data from the table: "requirement" */
  delete_requirement?: Maybe<Requirement_Mutation_Response>;
  /** delete single row from the table: "requirement" */
  delete_requirement_by_pk?: Maybe<Requirement>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "role_type" */
  delete_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** delete single row from the table: "role_type" */
  delete_role_type_by_pk?: Maybe<Role_Type>;
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<Tag_Mutation_Response>;
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_type" */
  delete_user_type?: Maybe<User_Type_Mutation_Response>;
  /** delete single row from the table: "user_type" */
  delete_user_type_by_pk?: Maybe<User_Type>;
  /** delete data from the table: "voice_attribute" */
  delete_voice_attribute?: Maybe<Voice_Attribute_Mutation_Response>;
  /** delete single row from the table: "voice_attribute" */
  delete_voice_attribute_by_pk?: Maybe<Voice_Attribute>;
  /** delete data from the table: "voice_type" */
  delete_voice_type?: Maybe<Voice_Type_Mutation_Response>;
  /** delete single row from the table: "voice_type" */
  delete_voice_type_by_pk?: Maybe<Voice_Type>;
  /** insert data into the table: "applicants" */
  insert_applicants?: Maybe<Applicants_Mutation_Response>;
  /** insert a single row into the table: "applicants" */
  insert_applicants_one?: Maybe<Applicants>;
  /** insert data into the table: "audition" */
  insert_audition?: Maybe<Audition_Mutation_Response>;
  /** insert a single row into the table: "audition" */
  insert_audition_one?: Maybe<Audition>;
  /** insert data into the table: "audition_tag" */
  insert_audition_tag?: Maybe<Audition_Tag_Mutation_Response>;
  /** insert a single row into the table: "audition_tag" */
  insert_audition_tag_one?: Maybe<Audition_Tag>;
  /** insert data into the table: "audition_type" */
  insert_audition_type?: Maybe<Audition_Type_Mutation_Response>;
  /** insert a single row into the table: "audition_type" */
  insert_audition_type_one?: Maybe<Audition_Type>;
  /** insert data into the table: "body_type" */
  insert_body_type?: Maybe<Body_Type_Mutation_Response>;
  /** insert a single row into the table: "body_type" */
  insert_body_type_one?: Maybe<Body_Type>;
  /** insert data into the table: "city" */
  insert_city?: Maybe<City_Mutation_Response>;
  /** insert a single row into the table: "city" */
  insert_city_one?: Maybe<City>;
  /** insert data into the table: "ethnicity" */
  insert_ethnicity?: Maybe<Ethnicity_Mutation_Response>;
  /** insert a single row into the table: "ethnicity" */
  insert_ethnicity_one?: Maybe<Ethnicity>;
  /** insert data into the table: "eye_color" */
  insert_eye_color?: Maybe<Eye_Color_Mutation_Response>;
  /** insert a single row into the table: "eye_color" */
  insert_eye_color_one?: Maybe<Eye_Color>;
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<Gender_Mutation_Response>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<Gender>;
  /** insert data into the table: "hair_color" */
  insert_hair_color?: Maybe<Hair_Color_Mutation_Response>;
  /** insert a single row into the table: "hair_color" */
  insert_hair_color_one?: Maybe<Hair_Color>;
  /** insert data into the table: "highlight" */
  insert_highlight?: Maybe<Highlight_Mutation_Response>;
  /** insert a single row into the table: "highlight" */
  insert_highlight_one?: Maybe<Highlight>;
  /** insert data into the table: "highlight_type" */
  insert_highlight_type?: Maybe<Highlight_Type_Mutation_Response>;
  /** insert a single row into the table: "highlight_type" */
  insert_highlight_type_one?: Maybe<Highlight_Type>;
  /** insert data into the table: "knex_migrations" */
  insert_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** insert data into the table: "knex_migrations_lock" */
  insert_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** insert a single row into the table: "knex_migrations_lock" */
  insert_knex_migrations_lock_one?: Maybe<Knex_Migrations_Lock>;
  /** insert a single row into the table: "knex_migrations" */
  insert_knex_migrations_one?: Maybe<Knex_Migrations>;
  /** insert data into the table: "physical_attribute" */
  insert_physical_attribute?: Maybe<Physical_Attribute_Mutation_Response>;
  /** insert a single row into the table: "physical_attribute" */
  insert_physical_attribute_one?: Maybe<Physical_Attribute>;
  /** insert data into the table: "requirement" */
  insert_requirement?: Maybe<Requirement_Mutation_Response>;
  /** insert a single row into the table: "requirement" */
  insert_requirement_one?: Maybe<Requirement>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "role_type" */
  insert_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** insert a single row into the table: "role_type" */
  insert_role_type_one?: Maybe<Role_Type>;
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<Tag_Mutation_Response>;
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_type" */
  insert_user_type?: Maybe<User_Type_Mutation_Response>;
  /** insert a single row into the table: "user_type" */
  insert_user_type_one?: Maybe<User_Type>;
  /** insert data into the table: "voice_attribute" */
  insert_voice_attribute?: Maybe<Voice_Attribute_Mutation_Response>;
  /** insert a single row into the table: "voice_attribute" */
  insert_voice_attribute_one?: Maybe<Voice_Attribute>;
  /** insert data into the table: "voice_type" */
  insert_voice_type?: Maybe<Voice_Type_Mutation_Response>;
  /** insert a single row into the table: "voice_type" */
  insert_voice_type_one?: Maybe<Voice_Type>;
  /** perform the action: "signup" */
  signup?: Maybe<SignupOutput>;
  /** update data of the table: "applicants" */
  update_applicants?: Maybe<Applicants_Mutation_Response>;
  /** update single row of the table: "applicants" */
  update_applicants_by_pk?: Maybe<Applicants>;
  /** update data of the table: "audition" */
  update_audition?: Maybe<Audition_Mutation_Response>;
  /** update single row of the table: "audition" */
  update_audition_by_pk?: Maybe<Audition>;
  /** update data of the table: "audition_tag" */
  update_audition_tag?: Maybe<Audition_Tag_Mutation_Response>;
  /** update single row of the table: "audition_tag" */
  update_audition_tag_by_pk?: Maybe<Audition_Tag>;
  /** update data of the table: "audition_type" */
  update_audition_type?: Maybe<Audition_Type_Mutation_Response>;
  /** update single row of the table: "audition_type" */
  update_audition_type_by_pk?: Maybe<Audition_Type>;
  /** update data of the table: "body_type" */
  update_body_type?: Maybe<Body_Type_Mutation_Response>;
  /** update single row of the table: "body_type" */
  update_body_type_by_pk?: Maybe<Body_Type>;
  /** update data of the table: "city" */
  update_city?: Maybe<City_Mutation_Response>;
  /** update single row of the table: "city" */
  update_city_by_pk?: Maybe<City>;
  /** update data of the table: "ethnicity" */
  update_ethnicity?: Maybe<Ethnicity_Mutation_Response>;
  /** update single row of the table: "ethnicity" */
  update_ethnicity_by_pk?: Maybe<Ethnicity>;
  /** update data of the table: "eye_color" */
  update_eye_color?: Maybe<Eye_Color_Mutation_Response>;
  /** update single row of the table: "eye_color" */
  update_eye_color_by_pk?: Maybe<Eye_Color>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<Gender_Mutation_Response>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<Gender>;
  /** update data of the table: "hair_color" */
  update_hair_color?: Maybe<Hair_Color_Mutation_Response>;
  /** update single row of the table: "hair_color" */
  update_hair_color_by_pk?: Maybe<Hair_Color>;
  /** update data of the table: "highlight" */
  update_highlight?: Maybe<Highlight_Mutation_Response>;
  /** update single row of the table: "highlight" */
  update_highlight_by_pk?: Maybe<Highlight>;
  /** update data of the table: "highlight_type" */
  update_highlight_type?: Maybe<Highlight_Type_Mutation_Response>;
  /** update single row of the table: "highlight_type" */
  update_highlight_type_by_pk?: Maybe<Highlight_Type>;
  /** update data of the table: "knex_migrations" */
  update_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** update single row of the table: "knex_migrations" */
  update_knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** update data of the table: "knex_migrations_lock" */
  update_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** update single row of the table: "knex_migrations_lock" */
  update_knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** update data of the table: "physical_attribute" */
  update_physical_attribute?: Maybe<Physical_Attribute_Mutation_Response>;
  /** update single row of the table: "physical_attribute" */
  update_physical_attribute_by_pk?: Maybe<Physical_Attribute>;
  /** update data of the table: "requirement" */
  update_requirement?: Maybe<Requirement_Mutation_Response>;
  /** update single row of the table: "requirement" */
  update_requirement_by_pk?: Maybe<Requirement>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "role_type" */
  update_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** update single row of the table: "role_type" */
  update_role_type_by_pk?: Maybe<Role_Type>;
  /** update data of the table: "tag" */
  update_tag?: Maybe<Tag_Mutation_Response>;
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_type" */
  update_user_type?: Maybe<User_Type_Mutation_Response>;
  /** update single row of the table: "user_type" */
  update_user_type_by_pk?: Maybe<User_Type>;
  /** update data of the table: "voice_attribute" */
  update_voice_attribute?: Maybe<Voice_Attribute_Mutation_Response>;
  /** update single row of the table: "voice_attribute" */
  update_voice_attribute_by_pk?: Maybe<Voice_Attribute>;
  /** update data of the table: "voice_type" */
  update_voice_type?: Maybe<Voice_Type_Mutation_Response>;
  /** update single row of the table: "voice_type" */
  update_voice_type_by_pk?: Maybe<Voice_Type>;
};


/** mutation root */
export type Mutation_RootDelete_ApplicantsArgs = {
  where: Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Applicants_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_AuditionArgs = {
  where: Audition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audition_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Audition_TagArgs = {
  where: Audition_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audition_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Audition_TypeArgs = {
  where: Audition_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audition_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Body_TypeArgs = {
  where: Body_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Body_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CityArgs = {
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_City_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EthnicityArgs = {
  where: Ethnicity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ethnicity_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Eye_ColorArgs = {
  where: Eye_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Eye_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GenderArgs = {
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gender_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Hair_ColorArgs = {
  where: Hair_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hair_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_HighlightArgs = {
  where: Highlight_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Highlight_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Highlight_TypeArgs = {
  where: Highlight_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Highlight_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Knex_MigrationsArgs = {
  where: Knex_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_LockArgs = {
  where: Knex_Migrations_Lock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Physical_AttributeArgs = {
  where: Physical_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Physical_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RequirementArgs = {
  where: Requirement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Requirement_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Role_TypeArgs = {
  where: Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_TypeArgs = {
  where: User_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Voice_AttributeArgs = {
  where: Voice_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voice_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Voice_TypeArgs = {
  where: Voice_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voice_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ApplicantsArgs = {
  objects: Array<Applicants_Insert_Input>;
  on_conflict?: Maybe<Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applicants_OneArgs = {
  object: Applicants_Insert_Input;
  on_conflict?: Maybe<Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AuditionArgs = {
  objects: Array<Audition_Insert_Input>;
  on_conflict?: Maybe<Audition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audition_OneArgs = {
  object: Audition_Insert_Input;
  on_conflict?: Maybe<Audition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audition_TagArgs = {
  objects: Array<Audition_Tag_Insert_Input>;
  on_conflict?: Maybe<Audition_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audition_Tag_OneArgs = {
  object: Audition_Tag_Insert_Input;
  on_conflict?: Maybe<Audition_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audition_TypeArgs = {
  objects: Array<Audition_Type_Insert_Input>;
  on_conflict?: Maybe<Audition_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audition_Type_OneArgs = {
  object: Audition_Type_Insert_Input;
  on_conflict?: Maybe<Audition_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Body_TypeArgs = {
  objects: Array<Body_Type_Insert_Input>;
  on_conflict?: Maybe<Body_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Body_Type_OneArgs = {
  object: Body_Type_Insert_Input;
  on_conflict?: Maybe<Body_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CityArgs = {
  objects: Array<City_Insert_Input>;
  on_conflict?: Maybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_City_OneArgs = {
  object: City_Insert_Input;
  on_conflict?: Maybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EthnicityArgs = {
  objects: Array<Ethnicity_Insert_Input>;
  on_conflict?: Maybe<Ethnicity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ethnicity_OneArgs = {
  object: Ethnicity_Insert_Input;
  on_conflict?: Maybe<Ethnicity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eye_ColorArgs = {
  objects: Array<Eye_Color_Insert_Input>;
  on_conflict?: Maybe<Eye_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eye_Color_OneArgs = {
  object: Eye_Color_Insert_Input;
  on_conflict?: Maybe<Eye_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenderArgs = {
  objects: Array<Gender_Insert_Input>;
  on_conflict?: Maybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gender_OneArgs = {
  object: Gender_Insert_Input;
  on_conflict?: Maybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hair_ColorArgs = {
  objects: Array<Hair_Color_Insert_Input>;
  on_conflict?: Maybe<Hair_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hair_Color_OneArgs = {
  object: Hair_Color_Insert_Input;
  on_conflict?: Maybe<Hair_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HighlightArgs = {
  objects: Array<Highlight_Insert_Input>;
  on_conflict?: Maybe<Highlight_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Highlight_OneArgs = {
  object: Highlight_Insert_Input;
  on_conflict?: Maybe<Highlight_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Highlight_TypeArgs = {
  objects: Array<Highlight_Type_Insert_Input>;
  on_conflict?: Maybe<Highlight_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Highlight_Type_OneArgs = {
  object: Highlight_Type_Insert_Input;
  on_conflict?: Maybe<Highlight_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_MigrationsArgs = {
  objects: Array<Knex_Migrations_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_LockArgs = {
  objects: Array<Knex_Migrations_Lock_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_Lock_OneArgs = {
  object: Knex_Migrations_Lock_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_OneArgs = {
  object: Knex_Migrations_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Physical_AttributeArgs = {
  objects: Array<Physical_Attribute_Insert_Input>;
  on_conflict?: Maybe<Physical_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Physical_Attribute_OneArgs = {
  object: Physical_Attribute_Insert_Input;
  on_conflict?: Maybe<Physical_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RequirementArgs = {
  objects: Array<Requirement_Insert_Input>;
  on_conflict?: Maybe<Requirement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Requirement_OneArgs = {
  object: Requirement_Insert_Input;
  on_conflict?: Maybe<Requirement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_TypeArgs = {
  objects: Array<Role_Type_Insert_Input>;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Type_OneArgs = {
  object: Role_Type_Insert_Input;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input;
  on_conflict?: Maybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_TypeArgs = {
  objects: Array<User_Type_Insert_Input>;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Type_OneArgs = {
  object: User_Type_Insert_Input;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voice_AttributeArgs = {
  objects: Array<Voice_Attribute_Insert_Input>;
  on_conflict?: Maybe<Voice_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voice_Attribute_OneArgs = {
  object: Voice_Attribute_Insert_Input;
  on_conflict?: Maybe<Voice_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voice_TypeArgs = {
  objects: Array<Voice_Type_Insert_Input>;
  on_conflict?: Maybe<Voice_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voice_Type_OneArgs = {
  object: Voice_Type_Insert_Input;
  on_conflict?: Maybe<Voice_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile_picture: Scalars['String'];
  user_type_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootUpdate_ApplicantsArgs = {
  _inc?: Maybe<Applicants_Inc_Input>;
  _set?: Maybe<Applicants_Set_Input>;
  where: Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Applicants_By_PkArgs = {
  _inc?: Maybe<Applicants_Inc_Input>;
  _set?: Maybe<Applicants_Set_Input>;
  pk_columns: Applicants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AuditionArgs = {
  _inc?: Maybe<Audition_Inc_Input>;
  _set?: Maybe<Audition_Set_Input>;
  where: Audition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audition_By_PkArgs = {
  _inc?: Maybe<Audition_Inc_Input>;
  _set?: Maybe<Audition_Set_Input>;
  pk_columns: Audition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audition_TagArgs = {
  _inc?: Maybe<Audition_Tag_Inc_Input>;
  _set?: Maybe<Audition_Tag_Set_Input>;
  where: Audition_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audition_Tag_By_PkArgs = {
  _inc?: Maybe<Audition_Tag_Inc_Input>;
  _set?: Maybe<Audition_Tag_Set_Input>;
  pk_columns: Audition_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audition_TypeArgs = {
  _inc?: Maybe<Audition_Type_Inc_Input>;
  _set?: Maybe<Audition_Type_Set_Input>;
  where: Audition_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audition_Type_By_PkArgs = {
  _inc?: Maybe<Audition_Type_Inc_Input>;
  _set?: Maybe<Audition_Type_Set_Input>;
  pk_columns: Audition_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Body_TypeArgs = {
  _inc?: Maybe<Body_Type_Inc_Input>;
  _set?: Maybe<Body_Type_Set_Input>;
  where: Body_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Body_Type_By_PkArgs = {
  _inc?: Maybe<Body_Type_Inc_Input>;
  _set?: Maybe<Body_Type_Set_Input>;
  pk_columns: Body_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CityArgs = {
  _inc?: Maybe<City_Inc_Input>;
  _set?: Maybe<City_Set_Input>;
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_City_By_PkArgs = {
  _inc?: Maybe<City_Inc_Input>;
  _set?: Maybe<City_Set_Input>;
  pk_columns: City_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EthnicityArgs = {
  _inc?: Maybe<Ethnicity_Inc_Input>;
  _set?: Maybe<Ethnicity_Set_Input>;
  where: Ethnicity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ethnicity_By_PkArgs = {
  _inc?: Maybe<Ethnicity_Inc_Input>;
  _set?: Maybe<Ethnicity_Set_Input>;
  pk_columns: Ethnicity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Eye_ColorArgs = {
  _inc?: Maybe<Eye_Color_Inc_Input>;
  _set?: Maybe<Eye_Color_Set_Input>;
  where: Eye_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Eye_Color_By_PkArgs = {
  _inc?: Maybe<Eye_Color_Inc_Input>;
  _set?: Maybe<Eye_Color_Set_Input>;
  pk_columns: Eye_Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GenderArgs = {
  _inc?: Maybe<Gender_Inc_Input>;
  _set?: Maybe<Gender_Set_Input>;
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_By_PkArgs = {
  _inc?: Maybe<Gender_Inc_Input>;
  _set?: Maybe<Gender_Set_Input>;
  pk_columns: Gender_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hair_ColorArgs = {
  _inc?: Maybe<Hair_Color_Inc_Input>;
  _set?: Maybe<Hair_Color_Set_Input>;
  where: Hair_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hair_Color_By_PkArgs = {
  _inc?: Maybe<Hair_Color_Inc_Input>;
  _set?: Maybe<Hair_Color_Set_Input>;
  pk_columns: Hair_Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HighlightArgs = {
  _inc?: Maybe<Highlight_Inc_Input>;
  _set?: Maybe<Highlight_Set_Input>;
  where: Highlight_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Highlight_By_PkArgs = {
  _inc?: Maybe<Highlight_Inc_Input>;
  _set?: Maybe<Highlight_Set_Input>;
  pk_columns: Highlight_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Highlight_TypeArgs = {
  _inc?: Maybe<Highlight_Type_Inc_Input>;
  _set?: Maybe<Highlight_Type_Set_Input>;
  where: Highlight_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Highlight_Type_By_PkArgs = {
  _inc?: Maybe<Highlight_Type_Inc_Input>;
  _set?: Maybe<Highlight_Type_Set_Input>;
  pk_columns: Highlight_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_MigrationsArgs = {
  _inc?: Maybe<Knex_Migrations_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Set_Input>;
  where: Knex_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_By_PkArgs = {
  _inc?: Maybe<Knex_Migrations_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Set_Input>;
  pk_columns: Knex_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_LockArgs = {
  _inc?: Maybe<Knex_Migrations_Lock_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Lock_Set_Input>;
  where: Knex_Migrations_Lock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_Lock_By_PkArgs = {
  _inc?: Maybe<Knex_Migrations_Lock_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Lock_Set_Input>;
  pk_columns: Knex_Migrations_Lock_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Physical_AttributeArgs = {
  _inc?: Maybe<Physical_Attribute_Inc_Input>;
  _set?: Maybe<Physical_Attribute_Set_Input>;
  where: Physical_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Physical_Attribute_By_PkArgs = {
  _inc?: Maybe<Physical_Attribute_Inc_Input>;
  _set?: Maybe<Physical_Attribute_Set_Input>;
  pk_columns: Physical_Attribute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RequirementArgs = {
  _inc?: Maybe<Requirement_Inc_Input>;
  _set?: Maybe<Requirement_Set_Input>;
  where: Requirement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Requirement_By_PkArgs = {
  _inc?: Maybe<Requirement_Inc_Input>;
  _set?: Maybe<Requirement_Set_Input>;
  pk_columns: Requirement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_TypeArgs = {
  _inc?: Maybe<Role_Type_Inc_Input>;
  _set?: Maybe<Role_Type_Set_Input>;
  where: Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Type_By_PkArgs = {
  _inc?: Maybe<Role_Type_Inc_Input>;
  _set?: Maybe<Role_Type_Set_Input>;
  pk_columns: Role_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: Maybe<Tag_Inc_Input>;
  _set?: Maybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _inc?: Maybe<Tag_Inc_Input>;
  _set?: Maybe<Tag_Set_Input>;
  pk_columns: Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_TypeArgs = {
  _inc?: Maybe<User_Type_Inc_Input>;
  _set?: Maybe<User_Type_Set_Input>;
  where: User_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Type_By_PkArgs = {
  _inc?: Maybe<User_Type_Inc_Input>;
  _set?: Maybe<User_Type_Set_Input>;
  pk_columns: User_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Voice_AttributeArgs = {
  _inc?: Maybe<Voice_Attribute_Inc_Input>;
  _set?: Maybe<Voice_Attribute_Set_Input>;
  where: Voice_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voice_Attribute_By_PkArgs = {
  _inc?: Maybe<Voice_Attribute_Inc_Input>;
  _set?: Maybe<Voice_Attribute_Set_Input>;
  pk_columns: Voice_Attribute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Voice_TypeArgs = {
  _inc?: Maybe<Voice_Type_Inc_Input>;
  _set?: Maybe<Voice_Type_Set_Input>;
  where: Voice_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voice_Type_By_PkArgs = {
  _inc?: Maybe<Voice_Type_Inc_Input>;
  _set?: Maybe<Voice_Type_Set_Input>;
  pk_columns: Voice_Type_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "physical_attribute" */
export type Physical_Attribute = {
  __typename?: 'physical_attribute';
  age: Scalars['Int'];
  body_type_id: Scalars['Int'];
  ethnicity_id: Scalars['Int'];
  eye_color_id: Scalars['Int'];
  gender_id: Scalars['Int'];
  hair_color_id: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "physical_attribute" */
export type Physical_Attribute_Aggregate = {
  __typename?: 'physical_attribute_aggregate';
  aggregate?: Maybe<Physical_Attribute_Aggregate_Fields>;
  nodes: Array<Physical_Attribute>;
};

/** aggregate fields of "physical_attribute" */
export type Physical_Attribute_Aggregate_Fields = {
  __typename?: 'physical_attribute_aggregate_fields';
  avg?: Maybe<Physical_Attribute_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Physical_Attribute_Max_Fields>;
  min?: Maybe<Physical_Attribute_Min_Fields>;
  stddev?: Maybe<Physical_Attribute_Stddev_Fields>;
  stddev_pop?: Maybe<Physical_Attribute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Physical_Attribute_Stddev_Samp_Fields>;
  sum?: Maybe<Physical_Attribute_Sum_Fields>;
  var_pop?: Maybe<Physical_Attribute_Var_Pop_Fields>;
  var_samp?: Maybe<Physical_Attribute_Var_Samp_Fields>;
  variance?: Maybe<Physical_Attribute_Variance_Fields>;
};


/** aggregate fields of "physical_attribute" */
export type Physical_Attribute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Physical_Attribute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "physical_attribute" */
export type Physical_Attribute_Aggregate_Order_By = {
  avg?: Maybe<Physical_Attribute_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Physical_Attribute_Max_Order_By>;
  min?: Maybe<Physical_Attribute_Min_Order_By>;
  stddev?: Maybe<Physical_Attribute_Stddev_Order_By>;
  stddev_pop?: Maybe<Physical_Attribute_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Physical_Attribute_Stddev_Samp_Order_By>;
  sum?: Maybe<Physical_Attribute_Sum_Order_By>;
  var_pop?: Maybe<Physical_Attribute_Var_Pop_Order_By>;
  var_samp?: Maybe<Physical_Attribute_Var_Samp_Order_By>;
  variance?: Maybe<Physical_Attribute_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "physical_attribute" */
export type Physical_Attribute_Arr_Rel_Insert_Input = {
  data: Array<Physical_Attribute_Insert_Input>;
  on_conflict?: Maybe<Physical_Attribute_On_Conflict>;
};

/** aggregate avg on columns */
export type Physical_Attribute_Avg_Fields = {
  __typename?: 'physical_attribute_avg_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "physical_attribute" */
export type Physical_Attribute_Avg_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "physical_attribute". All fields are combined with a logical 'AND'. */
export type Physical_Attribute_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Physical_Attribute_Bool_Exp>>>;
  _not?: Maybe<Physical_Attribute_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Physical_Attribute_Bool_Exp>>>;
  age?: Maybe<Int_Comparison_Exp>;
  body_type_id?: Maybe<Int_Comparison_Exp>;
  ethnicity_id?: Maybe<Int_Comparison_Exp>;
  eye_color_id?: Maybe<Int_Comparison_Exp>;
  gender_id?: Maybe<Int_Comparison_Exp>;
  hair_color_id?: Maybe<Int_Comparison_Exp>;
  height?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "physical_attribute" */
export enum Physical_Attribute_Constraint {
  /** unique or primary key constraint */
  PhysicalAttributePkey = 'physical_attribute_pkey'
}

/** input type for incrementing integer column in table "physical_attribute" */
export type Physical_Attribute_Inc_Input = {
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "physical_attribute" */
export type Physical_Attribute_Insert_Input = {
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Physical_Attribute_Max_Fields = {
  __typename?: 'physical_attribute_max_fields';
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "physical_attribute" */
export type Physical_Attribute_Max_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Physical_Attribute_Min_Fields = {
  __typename?: 'physical_attribute_min_fields';
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "physical_attribute" */
export type Physical_Attribute_Min_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "physical_attribute" */
export type Physical_Attribute_Mutation_Response = {
  __typename?: 'physical_attribute_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Physical_Attribute>;
};

/** input type for inserting object relation for remote table "physical_attribute" */
export type Physical_Attribute_Obj_Rel_Insert_Input = {
  data: Physical_Attribute_Insert_Input;
  on_conflict?: Maybe<Physical_Attribute_On_Conflict>;
};

/** on conflict condition type for table "physical_attribute" */
export type Physical_Attribute_On_Conflict = {
  constraint: Physical_Attribute_Constraint;
  update_columns: Array<Physical_Attribute_Update_Column>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};

/** ordering options when selecting data from "physical_attribute" */
export type Physical_Attribute_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "physical_attribute" */
export type Physical_Attribute_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "physical_attribute" */
export enum Physical_Attribute_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  BodyTypeId = 'body_type_id',
  /** column name */
  EthnicityId = 'ethnicity_id',
  /** column name */
  EyeColorId = 'eye_color_id',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  HairColorId = 'hair_color_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "physical_attribute" */
export type Physical_Attribute_Set_Input = {
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Physical_Attribute_Stddev_Fields = {
  __typename?: 'physical_attribute_stddev_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "physical_attribute" */
export type Physical_Attribute_Stddev_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Physical_Attribute_Stddev_Pop_Fields = {
  __typename?: 'physical_attribute_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "physical_attribute" */
export type Physical_Attribute_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Physical_Attribute_Stddev_Samp_Fields = {
  __typename?: 'physical_attribute_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "physical_attribute" */
export type Physical_Attribute_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Physical_Attribute_Sum_Fields = {
  __typename?: 'physical_attribute_sum_fields';
  age?: Maybe<Scalars['Int']>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "physical_attribute" */
export type Physical_Attribute_Sum_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "physical_attribute" */
export enum Physical_Attribute_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  BodyTypeId = 'body_type_id',
  /** column name */
  EthnicityId = 'ethnicity_id',
  /** column name */
  EyeColorId = 'eye_color_id',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  HairColorId = 'hair_color_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Physical_Attribute_Var_Pop_Fields = {
  __typename?: 'physical_attribute_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "physical_attribute" */
export type Physical_Attribute_Var_Pop_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Physical_Attribute_Var_Samp_Fields = {
  __typename?: 'physical_attribute_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "physical_attribute" */
export type Physical_Attribute_Var_Samp_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Physical_Attribute_Variance_Fields = {
  __typename?: 'physical_attribute_variance_fields';
  age?: Maybe<Scalars['Float']>;
  body_type_id?: Maybe<Scalars['Float']>;
  ethnicity_id?: Maybe<Scalars['Float']>;
  eye_color_id?: Maybe<Scalars['Float']>;
  gender_id?: Maybe<Scalars['Float']>;
  hair_color_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "physical_attribute" */
export type Physical_Attribute_Variance_Order_By = {
  age?: Maybe<Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "applicants" */
  applicants: Array<Applicants>;
  /** fetch aggregated fields from the table: "applicants" */
  applicants_aggregate: Applicants_Aggregate;
  /** fetch data from the table: "applicants" using primary key columns */
  applicants_by_pk?: Maybe<Applicants>;
  /** fetch data from the table: "audition" */
  audition: Array<Audition>;
  /** fetch aggregated fields from the table: "audition" */
  audition_aggregate: Audition_Aggregate;
  /** fetch data from the table: "audition" using primary key columns */
  audition_by_pk?: Maybe<Audition>;
  /** fetch data from the table: "audition_tag" */
  audition_tag: Array<Audition_Tag>;
  /** fetch aggregated fields from the table: "audition_tag" */
  audition_tag_aggregate: Audition_Tag_Aggregate;
  /** fetch data from the table: "audition_tag" using primary key columns */
  audition_tag_by_pk?: Maybe<Audition_Tag>;
  /** fetch data from the table: "audition_type" */
  audition_type: Array<Audition_Type>;
  /** fetch aggregated fields from the table: "audition_type" */
  audition_type_aggregate: Audition_Type_Aggregate;
  /** fetch data from the table: "audition_type" using primary key columns */
  audition_type_by_pk?: Maybe<Audition_Type>;
  /** fetch data from the table: "body_type" */
  body_type: Array<Body_Type>;
  /** fetch aggregated fields from the table: "body_type" */
  body_type_aggregate: Body_Type_Aggregate;
  /** fetch data from the table: "body_type" using primary key columns */
  body_type_by_pk?: Maybe<Body_Type>;
  /** fetch data from the table: "city" */
  city: Array<City>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: City_Aggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<City>;
  /** fetch data from the table: "ethnicity" */
  ethnicity: Array<Ethnicity>;
  /** fetch aggregated fields from the table: "ethnicity" */
  ethnicity_aggregate: Ethnicity_Aggregate;
  /** fetch data from the table: "ethnicity" using primary key columns */
  ethnicity_by_pk?: Maybe<Ethnicity>;
  /** fetch data from the table: "eye_color" */
  eye_color: Array<Eye_Color>;
  /** fetch aggregated fields from the table: "eye_color" */
  eye_color_aggregate: Eye_Color_Aggregate;
  /** fetch data from the table: "eye_color" using primary key columns */
  eye_color_by_pk?: Maybe<Eye_Color>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table: "hair_color" */
  hair_color: Array<Hair_Color>;
  /** fetch aggregated fields from the table: "hair_color" */
  hair_color_aggregate: Hair_Color_Aggregate;
  /** fetch data from the table: "hair_color" using primary key columns */
  hair_color_by_pk?: Maybe<Hair_Color>;
  /** fetch data from the table: "highlight" */
  highlight: Array<Highlight>;
  /** fetch aggregated fields from the table: "highlight" */
  highlight_aggregate: Highlight_Aggregate;
  /** fetch data from the table: "highlight" using primary key columns */
  highlight_by_pk?: Maybe<Highlight>;
  /** fetch data from the table: "highlight_type" */
  highlight_type: Array<Highlight_Type>;
  /** fetch aggregated fields from the table: "highlight_type" */
  highlight_type_aggregate: Highlight_Type_Aggregate;
  /** fetch data from the table: "highlight_type" using primary key columns */
  highlight_type_by_pk?: Maybe<Highlight_Type>;
  /** fetch data from the table: "knex_migrations" */
  knex_migrations: Array<Knex_Migrations>;
  /** fetch aggregated fields from the table: "knex_migrations" */
  knex_migrations_aggregate: Knex_Migrations_Aggregate;
  /** fetch data from the table: "knex_migrations" using primary key columns */
  knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** fetch data from the table: "knex_migrations_lock" */
  knex_migrations_lock: Array<Knex_Migrations_Lock>;
  /** fetch aggregated fields from the table: "knex_migrations_lock" */
  knex_migrations_lock_aggregate: Knex_Migrations_Lock_Aggregate;
  /** fetch data from the table: "knex_migrations_lock" using primary key columns */
  knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** fetch data from the table: "physical_attribute" */
  physical_attribute: Array<Physical_Attribute>;
  /** fetch aggregated fields from the table: "physical_attribute" */
  physical_attribute_aggregate: Physical_Attribute_Aggregate;
  /** fetch data from the table: "physical_attribute" using primary key columns */
  physical_attribute_by_pk?: Maybe<Physical_Attribute>;
  /** fetch data from the table: "requirement" */
  requirement: Array<Requirement>;
  /** fetch aggregated fields from the table: "requirement" */
  requirement_aggregate: Requirement_Aggregate;
  /** fetch data from the table: "requirement" using primary key columns */
  requirement_by_pk?: Maybe<Requirement>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_type" */
  role_type: Array<Role_Type>;
  /** fetch aggregated fields from the table: "role_type" */
  role_type_aggregate: Role_Type_Aggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  role_type_by_pk?: Maybe<Role_Type>;
  /** perform the action: "signin" */
  signin?: Maybe<SigninActionOutput>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_type" */
  user_type: Array<User_Type>;
  /** fetch aggregated fields from the table: "user_type" */
  user_type_aggregate: User_Type_Aggregate;
  /** fetch data from the table: "user_type" using primary key columns */
  user_type_by_pk?: Maybe<User_Type>;
  /** fetch data from the table: "voice_attribute" */
  voice_attribute: Array<Voice_Attribute>;
  /** fetch aggregated fields from the table: "voice_attribute" */
  voice_attribute_aggregate: Voice_Attribute_Aggregate;
  /** fetch data from the table: "voice_attribute" using primary key columns */
  voice_attribute_by_pk?: Maybe<Voice_Attribute>;
  /** fetch data from the table: "voice_type" */
  voice_type: Array<Voice_Type>;
  /** fetch aggregated fields from the table: "voice_type" */
  voice_type_aggregate: Voice_Type_Aggregate;
  /** fetch data from the table: "voice_type" using primary key columns */
  voice_type_by_pk?: Maybe<Voice_Type>;
};


/** query root */
export type Query_RootApplicantsArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** query root */
export type Query_RootApplicants_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** query root */
export type Query_RootApplicants_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootAuditionArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootAudition_TagArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootAudition_TypeArgs = {
  distinct_on?: Maybe<Array<Audition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Type_Order_By>>;
  where?: Maybe<Audition_Type_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Type_Order_By>>;
  where?: Maybe<Audition_Type_Bool_Exp>;
};


/** query root */
export type Query_RootAudition_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBody_TypeArgs = {
  distinct_on?: Maybe<Array<Body_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Body_Type_Order_By>>;
  where?: Maybe<Body_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBody_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Body_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Body_Type_Order_By>>;
  where?: Maybe<Body_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBody_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCityArgs = {
  distinct_on?: Maybe<Array<City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<City_Order_By>>;
  where?: Maybe<City_Bool_Exp>;
};


/** query root */
export type Query_RootCity_AggregateArgs = {
  distinct_on?: Maybe<Array<City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<City_Order_By>>;
  where?: Maybe<City_Bool_Exp>;
};


/** query root */
export type Query_RootCity_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootEthnicityArgs = {
  distinct_on?: Maybe<Array<Ethnicity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ethnicity_Order_By>>;
  where?: Maybe<Ethnicity_Bool_Exp>;
};


/** query root */
export type Query_RootEthnicity_AggregateArgs = {
  distinct_on?: Maybe<Array<Ethnicity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ethnicity_Order_By>>;
  where?: Maybe<Ethnicity_Bool_Exp>;
};


/** query root */
export type Query_RootEthnicity_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootEye_ColorArgs = {
  distinct_on?: Maybe<Array<Eye_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eye_Color_Order_By>>;
  where?: Maybe<Eye_Color_Bool_Exp>;
};


/** query root */
export type Query_RootEye_Color_AggregateArgs = {
  distinct_on?: Maybe<Array<Eye_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eye_Color_Order_By>>;
  where?: Maybe<Eye_Color_Bool_Exp>;
};


/** query root */
export type Query_RootEye_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGenderArgs = {
  distinct_on?: Maybe<Array<Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gender_Order_By>>;
  where?: Maybe<Gender_Bool_Exp>;
};


/** query root */
export type Query_RootGender_AggregateArgs = {
  distinct_on?: Maybe<Array<Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gender_Order_By>>;
  where?: Maybe<Gender_Bool_Exp>;
};


/** query root */
export type Query_RootGender_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootHair_ColorArgs = {
  distinct_on?: Maybe<Array<Hair_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hair_Color_Order_By>>;
  where?: Maybe<Hair_Color_Bool_Exp>;
};


/** query root */
export type Query_RootHair_Color_AggregateArgs = {
  distinct_on?: Maybe<Array<Hair_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hair_Color_Order_By>>;
  where?: Maybe<Hair_Color_Bool_Exp>;
};


/** query root */
export type Query_RootHair_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootHighlightArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** query root */
export type Query_RootHighlight_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** query root */
export type Query_RootHighlight_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootHighlight_TypeArgs = {
  distinct_on?: Maybe<Array<Highlight_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Type_Order_By>>;
  where?: Maybe<Highlight_Type_Bool_Exp>;
};


/** query root */
export type Query_RootHighlight_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Type_Order_By>>;
  where?: Maybe<Highlight_Type_Bool_Exp>;
};


/** query root */
export type Query_RootHighlight_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootKnex_MigrationsArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootKnex_Migrations_LockArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_Lock_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** query root */
export type Query_RootPhysical_AttributeArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** query root */
export type Query_RootPhysical_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** query root */
export type Query_RootPhysical_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRequirementArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** query root */
export type Query_RootRequirement_AggregateArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** query root */
export type Query_RootRequirement_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRole_TypeArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** query root */
export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


/** query root */
export type Query_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


/** query root */
export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_TypeArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootVoice_AttributeArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};


/** query root */
export type Query_RootVoice_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};


/** query root */
export type Query_RootVoice_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootVoice_TypeArgs = {
  distinct_on?: Maybe<Array<Voice_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Type_Order_By>>;
  where?: Maybe<Voice_Type_Bool_Exp>;
};


/** query root */
export type Query_RootVoice_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Voice_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Type_Order_By>>;
  where?: Maybe<Voice_Type_Bool_Exp>;
};


/** query root */
export type Query_RootVoice_Type_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "requirement" */
export type Requirement = {
  __typename?: 'requirement';
  id: Scalars['Int'];
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "requirement" */
export type Requirement_Aggregate = {
  __typename?: 'requirement_aggregate';
  aggregate?: Maybe<Requirement_Aggregate_Fields>;
  nodes: Array<Requirement>;
};

/** aggregate fields of "requirement" */
export type Requirement_Aggregate_Fields = {
  __typename?: 'requirement_aggregate_fields';
  avg?: Maybe<Requirement_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Requirement_Max_Fields>;
  min?: Maybe<Requirement_Min_Fields>;
  stddev?: Maybe<Requirement_Stddev_Fields>;
  stddev_pop?: Maybe<Requirement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Requirement_Stddev_Samp_Fields>;
  sum?: Maybe<Requirement_Sum_Fields>;
  var_pop?: Maybe<Requirement_Var_Pop_Fields>;
  var_samp?: Maybe<Requirement_Var_Samp_Fields>;
  variance?: Maybe<Requirement_Variance_Fields>;
};


/** aggregate fields of "requirement" */
export type Requirement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Requirement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "requirement" */
export type Requirement_Aggregate_Order_By = {
  avg?: Maybe<Requirement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Requirement_Max_Order_By>;
  min?: Maybe<Requirement_Min_Order_By>;
  stddev?: Maybe<Requirement_Stddev_Order_By>;
  stddev_pop?: Maybe<Requirement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Requirement_Stddev_Samp_Order_By>;
  sum?: Maybe<Requirement_Sum_Order_By>;
  var_pop?: Maybe<Requirement_Var_Pop_Order_By>;
  var_samp?: Maybe<Requirement_Var_Samp_Order_By>;
  variance?: Maybe<Requirement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "requirement" */
export type Requirement_Arr_Rel_Insert_Input = {
  data: Array<Requirement_Insert_Input>;
  on_conflict?: Maybe<Requirement_On_Conflict>;
};

/** aggregate avg on columns */
export type Requirement_Avg_Fields = {
  __typename?: 'requirement_avg_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "requirement" */
export type Requirement_Avg_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "requirement". All fields are combined with a logical 'AND'. */
export type Requirement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Requirement_Bool_Exp>>>;
  _not?: Maybe<Requirement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Requirement_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  physical_attribute_id?: Maybe<Int_Comparison_Exp>;
  voice_attribute_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "requirement" */
export enum Requirement_Constraint {
  /** unique or primary key constraint */
  RequirementPkey = 'requirement_pkey'
}

/** input type for incrementing integer column in table "requirement" */
export type Requirement_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "requirement" */
export type Requirement_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Requirement_Max_Fields = {
  __typename?: 'requirement_max_fields';
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "requirement" */
export type Requirement_Max_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Requirement_Min_Fields = {
  __typename?: 'requirement_min_fields';
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "requirement" */
export type Requirement_Min_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "requirement" */
export type Requirement_Mutation_Response = {
  __typename?: 'requirement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Requirement>;
};

/** input type for inserting object relation for remote table "requirement" */
export type Requirement_Obj_Rel_Insert_Input = {
  data: Requirement_Insert_Input;
  on_conflict?: Maybe<Requirement_On_Conflict>;
};

/** on conflict condition type for table "requirement" */
export type Requirement_On_Conflict = {
  constraint: Requirement_Constraint;
  update_columns: Array<Requirement_Update_Column>;
  where?: Maybe<Requirement_Bool_Exp>;
};

/** ordering options when selecting data from "requirement" */
export type Requirement_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "requirement" */
export type Requirement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "requirement" */
export enum Requirement_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PhysicalAttributeId = 'physical_attribute_id',
  /** column name */
  VoiceAttributeId = 'voice_attribute_id'
}

/** input type for updating data in table "requirement" */
export type Requirement_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Requirement_Stddev_Fields = {
  __typename?: 'requirement_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "requirement" */
export type Requirement_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Requirement_Stddev_Pop_Fields = {
  __typename?: 'requirement_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "requirement" */
export type Requirement_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Requirement_Stddev_Samp_Fields = {
  __typename?: 'requirement_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "requirement" */
export type Requirement_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Requirement_Sum_Fields = {
  __typename?: 'requirement_sum_fields';
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "requirement" */
export type Requirement_Sum_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** update columns of table "requirement" */
export enum Requirement_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PhysicalAttributeId = 'physical_attribute_id',
  /** column name */
  VoiceAttributeId = 'voice_attribute_id'
}

/** aggregate var_pop on columns */
export type Requirement_Var_Pop_Fields = {
  __typename?: 'requirement_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "requirement" */
export type Requirement_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Requirement_Var_Samp_Fields = {
  __typename?: 'requirement_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "requirement" */
export type Requirement_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Requirement_Variance_Fields = {
  __typename?: 'requirement_variance_fields';
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "requirement" */
export type Requirement_Variance_Order_By = {
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  audition_id: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id: Scalars['Int'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role" */
export type Role_Aggregate_Order_By = {
  avg?: Maybe<Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Max_Order_By>;
  min?: Maybe<Role_Min_Order_By>;
  stddev?: Maybe<Role_Stddev_Order_By>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Order_By>;
  sum?: Maybe<Role_Sum_Order_By>;
  var_pop?: Maybe<Role_Var_Pop_Order_By>;
  var_samp?: Maybe<Role_Var_Samp_Order_By>;
  variance?: Maybe<Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "role" */
export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "role" */
export type Role_Avg_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  audition_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  requirement_id?: Maybe<Int_Comparison_Exp>;
  role_type_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RolePkey = 'role_pkey'
}

/** input type for incrementing integer column in table "role" */
export type Role_Inc_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  audition_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "role" */
export type Role_Max_Order_By = {
  audition_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  audition_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "role" */
export type Role_Min_Order_By = {
  audition_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** ordering options when selecting data from "role" */
export type Role_Order_By = {
  audition_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "role" */
export type Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RequirementId = 'requirement_id',
  /** column name */
  RoleTypeId = 'role_type_id'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  audition_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "role" */
export type Role_Stddev_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "role" */
export type Role_Stddev_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "role" */
export type Role_Stddev_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  audition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "role" */
export type Role_Sum_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "role_type" */
export type Role_Type = {
  __typename?: 'role_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "role_type" */
export type Role_Type_Aggregate = {
  __typename?: 'role_type_aggregate';
  aggregate?: Maybe<Role_Type_Aggregate_Fields>;
  nodes: Array<Role_Type>;
};

/** aggregate fields of "role_type" */
export type Role_Type_Aggregate_Fields = {
  __typename?: 'role_type_aggregate_fields';
  avg?: Maybe<Role_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Type_Max_Fields>;
  min?: Maybe<Role_Type_Min_Fields>;
  stddev?: Maybe<Role_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Type_Sum_Fields>;
  var_pop?: Maybe<Role_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Type_Var_Samp_Fields>;
  variance?: Maybe<Role_Type_Variance_Fields>;
};


/** aggregate fields of "role_type" */
export type Role_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role_type" */
export type Role_Type_Aggregate_Order_By = {
  avg?: Maybe<Role_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Type_Max_Order_By>;
  min?: Maybe<Role_Type_Min_Order_By>;
  stddev?: Maybe<Role_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Role_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Role_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Role_Type_Sum_Order_By>;
  var_pop?: Maybe<Role_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Role_Type_Var_Samp_Order_By>;
  variance?: Maybe<Role_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "role_type" */
export type Role_Type_Arr_Rel_Insert_Input = {
  data: Array<Role_Type_Insert_Input>;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Role_Type_Avg_Fields = {
  __typename?: 'role_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "role_type" */
export type Role_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_type". All fields are combined with a logical 'AND'. */
export type Role_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Type_Bool_Exp>>>;
  _not?: Maybe<Role_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_type" */
export enum Role_Type_Constraint {
  /** unique or primary key constraint */
  RoleTypeNameUnique = 'role_type_name_unique',
  /** unique or primary key constraint */
  RoleTypePkey = 'role_type_pkey'
}

/** input type for incrementing integer column in table "role_type" */
export type Role_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role_type" */
export type Role_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Type_Max_Fields = {
  __typename?: 'role_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "role_type" */
export type Role_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Type_Min_Fields = {
  __typename?: 'role_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "role_type" */
export type Role_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "role_type" */
export type Role_Type_Mutation_Response = {
  __typename?: 'role_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role_Type>;
};

/** input type for inserting object relation for remote table "role_type" */
export type Role_Type_Obj_Rel_Insert_Input = {
  data: Role_Type_Insert_Input;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};

/** on conflict condition type for table "role_type" */
export type Role_Type_On_Conflict = {
  constraint: Role_Type_Constraint;
  update_columns: Array<Role_Type_Update_Column>;
  where?: Maybe<Role_Type_Bool_Exp>;
};

/** ordering options when selecting data from "role_type" */
export type Role_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "role_type" */
export type Role_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "role_type" */
export enum Role_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "role_type" */
export type Role_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Role_Type_Stddev_Fields = {
  __typename?: 'role_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "role_type" */
export type Role_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Type_Stddev_Pop_Fields = {
  __typename?: 'role_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "role_type" */
export type Role_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Type_Stddev_Samp_Fields = {
  __typename?: 'role_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "role_type" */
export type Role_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Role_Type_Sum_Fields = {
  __typename?: 'role_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "role_type" */
export type Role_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "role_type" */
export enum Role_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Role_Type_Var_Pop_Fields = {
  __typename?: 'role_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "role_type" */
export type Role_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Type_Var_Samp_Fields = {
  __typename?: 'role_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "role_type" */
export type Role_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Type_Variance_Fields = {
  __typename?: 'role_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "role_type" */
export type Role_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  AuditionId = 'audition_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RequirementId = 'requirement_id',
  /** column name */
  RoleTypeId = 'role_type_id'
}

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "role" */
export type Role_Var_Pop_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "role" */
export type Role_Var_Samp_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  audition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  requirement_id?: Maybe<Scalars['Float']>;
  role_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "role" */
export type Role_Variance_Order_By = {
  audition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type_id?: Maybe<Order_By>;
};

export type SigninActionOutput = {
  __typename?: 'signinActionOutput';
  id: Scalars['String'];
};

export type SignupOutput = {
  __typename?: 'signupOutput';
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "applicants" */
  applicants: Array<Applicants>;
  /** fetch aggregated fields from the table: "applicants" */
  applicants_aggregate: Applicants_Aggregate;
  /** fetch data from the table: "applicants" using primary key columns */
  applicants_by_pk?: Maybe<Applicants>;
  /** fetch data from the table: "audition" */
  audition: Array<Audition>;
  /** fetch aggregated fields from the table: "audition" */
  audition_aggregate: Audition_Aggregate;
  /** fetch data from the table: "audition" using primary key columns */
  audition_by_pk?: Maybe<Audition>;
  /** fetch data from the table: "audition_tag" */
  audition_tag: Array<Audition_Tag>;
  /** fetch aggregated fields from the table: "audition_tag" */
  audition_tag_aggregate: Audition_Tag_Aggregate;
  /** fetch data from the table: "audition_tag" using primary key columns */
  audition_tag_by_pk?: Maybe<Audition_Tag>;
  /** fetch data from the table: "audition_type" */
  audition_type: Array<Audition_Type>;
  /** fetch aggregated fields from the table: "audition_type" */
  audition_type_aggregate: Audition_Type_Aggregate;
  /** fetch data from the table: "audition_type" using primary key columns */
  audition_type_by_pk?: Maybe<Audition_Type>;
  /** fetch data from the table: "body_type" */
  body_type: Array<Body_Type>;
  /** fetch aggregated fields from the table: "body_type" */
  body_type_aggregate: Body_Type_Aggregate;
  /** fetch data from the table: "body_type" using primary key columns */
  body_type_by_pk?: Maybe<Body_Type>;
  /** fetch data from the table: "city" */
  city: Array<City>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: City_Aggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<City>;
  /** fetch data from the table: "ethnicity" */
  ethnicity: Array<Ethnicity>;
  /** fetch aggregated fields from the table: "ethnicity" */
  ethnicity_aggregate: Ethnicity_Aggregate;
  /** fetch data from the table: "ethnicity" using primary key columns */
  ethnicity_by_pk?: Maybe<Ethnicity>;
  /** fetch data from the table: "eye_color" */
  eye_color: Array<Eye_Color>;
  /** fetch aggregated fields from the table: "eye_color" */
  eye_color_aggregate: Eye_Color_Aggregate;
  /** fetch data from the table: "eye_color" using primary key columns */
  eye_color_by_pk?: Maybe<Eye_Color>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table: "hair_color" */
  hair_color: Array<Hair_Color>;
  /** fetch aggregated fields from the table: "hair_color" */
  hair_color_aggregate: Hair_Color_Aggregate;
  /** fetch data from the table: "hair_color" using primary key columns */
  hair_color_by_pk?: Maybe<Hair_Color>;
  /** fetch data from the table: "highlight" */
  highlight: Array<Highlight>;
  /** fetch aggregated fields from the table: "highlight" */
  highlight_aggregate: Highlight_Aggregate;
  /** fetch data from the table: "highlight" using primary key columns */
  highlight_by_pk?: Maybe<Highlight>;
  /** fetch data from the table: "highlight_type" */
  highlight_type: Array<Highlight_Type>;
  /** fetch aggregated fields from the table: "highlight_type" */
  highlight_type_aggregate: Highlight_Type_Aggregate;
  /** fetch data from the table: "highlight_type" using primary key columns */
  highlight_type_by_pk?: Maybe<Highlight_Type>;
  /** fetch data from the table: "knex_migrations" */
  knex_migrations: Array<Knex_Migrations>;
  /** fetch aggregated fields from the table: "knex_migrations" */
  knex_migrations_aggregate: Knex_Migrations_Aggregate;
  /** fetch data from the table: "knex_migrations" using primary key columns */
  knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** fetch data from the table: "knex_migrations_lock" */
  knex_migrations_lock: Array<Knex_Migrations_Lock>;
  /** fetch aggregated fields from the table: "knex_migrations_lock" */
  knex_migrations_lock_aggregate: Knex_Migrations_Lock_Aggregate;
  /** fetch data from the table: "knex_migrations_lock" using primary key columns */
  knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** fetch data from the table: "physical_attribute" */
  physical_attribute: Array<Physical_Attribute>;
  /** fetch aggregated fields from the table: "physical_attribute" */
  physical_attribute_aggregate: Physical_Attribute_Aggregate;
  /** fetch data from the table: "physical_attribute" using primary key columns */
  physical_attribute_by_pk?: Maybe<Physical_Attribute>;
  /** fetch data from the table: "requirement" */
  requirement: Array<Requirement>;
  /** fetch aggregated fields from the table: "requirement" */
  requirement_aggregate: Requirement_Aggregate;
  /** fetch data from the table: "requirement" using primary key columns */
  requirement_by_pk?: Maybe<Requirement>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_type" */
  role_type: Array<Role_Type>;
  /** fetch aggregated fields from the table: "role_type" */
  role_type_aggregate: Role_Type_Aggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  role_type_by_pk?: Maybe<Role_Type>;
  /** perform the action: "signin" */
  signin?: Maybe<SigninActionOutput>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_type" */
  user_type: Array<User_Type>;
  /** fetch aggregated fields from the table: "user_type" */
  user_type_aggregate: User_Type_Aggregate;
  /** fetch data from the table: "user_type" using primary key columns */
  user_type_by_pk?: Maybe<User_Type>;
  /** fetch data from the table: "voice_attribute" */
  voice_attribute: Array<Voice_Attribute>;
  /** fetch aggregated fields from the table: "voice_attribute" */
  voice_attribute_aggregate: Voice_Attribute_Aggregate;
  /** fetch data from the table: "voice_attribute" using primary key columns */
  voice_attribute_by_pk?: Maybe<Voice_Attribute>;
  /** fetch data from the table: "voice_type" */
  voice_type: Array<Voice_Type>;
  /** fetch aggregated fields from the table: "voice_type" */
  voice_type_aggregate: Voice_Type_Aggregate;
  /** fetch data from the table: "voice_type" using primary key columns */
  voice_type_by_pk?: Maybe<Voice_Type>;
};


/** subscription root */
export type Subscription_RootApplicantsArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplicants_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicants_Order_By>>;
  where?: Maybe<Applicants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplicants_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootAuditionArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootAudition_TagArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootAudition_TypeArgs = {
  distinct_on?: Maybe<Array<Audition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Type_Order_By>>;
  where?: Maybe<Audition_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Type_Order_By>>;
  where?: Maybe<Audition_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAudition_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBody_TypeArgs = {
  distinct_on?: Maybe<Array<Body_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Body_Type_Order_By>>;
  where?: Maybe<Body_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBody_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Body_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Body_Type_Order_By>>;
  where?: Maybe<Body_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBody_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCityArgs = {
  distinct_on?: Maybe<Array<City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<City_Order_By>>;
  where?: Maybe<City_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCity_AggregateArgs = {
  distinct_on?: Maybe<Array<City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<City_Order_By>>;
  where?: Maybe<City_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCity_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootEthnicityArgs = {
  distinct_on?: Maybe<Array<Ethnicity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ethnicity_Order_By>>;
  where?: Maybe<Ethnicity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEthnicity_AggregateArgs = {
  distinct_on?: Maybe<Array<Ethnicity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ethnicity_Order_By>>;
  where?: Maybe<Ethnicity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEthnicity_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootEye_ColorArgs = {
  distinct_on?: Maybe<Array<Eye_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eye_Color_Order_By>>;
  where?: Maybe<Eye_Color_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEye_Color_AggregateArgs = {
  distinct_on?: Maybe<Array<Eye_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eye_Color_Order_By>>;
  where?: Maybe<Eye_Color_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEye_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGenderArgs = {
  distinct_on?: Maybe<Array<Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gender_Order_By>>;
  where?: Maybe<Gender_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGender_AggregateArgs = {
  distinct_on?: Maybe<Array<Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gender_Order_By>>;
  where?: Maybe<Gender_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGender_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootHair_ColorArgs = {
  distinct_on?: Maybe<Array<Hair_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hair_Color_Order_By>>;
  where?: Maybe<Hair_Color_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHair_Color_AggregateArgs = {
  distinct_on?: Maybe<Array<Hair_Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hair_Color_Order_By>>;
  where?: Maybe<Hair_Color_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHair_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootHighlightArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHighlight_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHighlight_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootHighlight_TypeArgs = {
  distinct_on?: Maybe<Array<Highlight_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Type_Order_By>>;
  where?: Maybe<Highlight_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHighlight_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Type_Order_By>>;
  where?: Maybe<Highlight_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHighlight_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootKnex_MigrationsArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootKnex_Migrations_LockArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_Lock_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPhysical_AttributeArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhysical_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhysical_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRequirementArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRequirement_AggregateArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRequirement_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRole_TypeArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_TypeArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootVoice_AttributeArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVoice_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVoice_Attribute_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootVoice_TypeArgs = {
  distinct_on?: Maybe<Array<Voice_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Type_Order_By>>;
  where?: Maybe<Voice_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVoice_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Voice_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Type_Order_By>>;
  where?: Maybe<Voice_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVoice_Type_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag';
  /** An array relationship */
  audition_tags: Array<Audition_Tag>;
  /** An aggregated array relationship */
  audition_tags_aggregate: Audition_Tag_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "tag" */
export type TagAudition_TagsArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagAudition_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Tag_Order_By>>;
  where?: Maybe<Audition_Tag_Bool_Exp>;
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: 'tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tag" */
export type Tag_Aggregate_Order_By = {
  avg?: Maybe<Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Max_Order_By>;
  min?: Maybe<Tag_Min_Order_By>;
  stddev?: Maybe<Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Sum_Order_By>;
  var_pop?: Maybe<Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag" */
export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tag" */
export type Tag_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  _not?: Maybe<Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  audition_tags?: Maybe<Audition_Tag_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  TagNameUnique = 'tag_name_unique',
  /** unique or primary key constraint */
  TagPkey = 'tag_pkey'
}

/** input type for incrementing integer column in table "tag" */
export type Tag_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  audition_tags?: Maybe<Audition_Tag_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tag" */
export type Tag_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tag" */
export type Tag_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  __typename?: 'tag_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** on conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns: Array<Tag_Update_Column>;
  where?: Maybe<Tag_Bool_Exp>;
};

/** ordering options when selecting data from "tag" */
export type Tag_Order_By = {
  audition_tags_aggregate?: Maybe<Audition_Tag_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "tag" */
export type Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tag" */
export type Tag_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tag" */
export type Tag_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tag" */
export type Tag_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tag" */
export type Tag_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tag" */
export type Tag_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tag" */
export type Tag_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tag" */
export type Tag_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  city_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_type_id: Scalars['Int'];
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  city_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  physical_attribute_id?: Maybe<Int_Comparison_Exp>;
  profile_picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_type_id?: Maybe<Int_Comparison_Exp>;
  voice_attribute_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailUnique = 'user_email_unique',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  city_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  PhysicalAttributeId = 'physical_attribute_id',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserTypeId = 'user_type_id',
  /** column name */
  VoiceAttributeId = 'voice_attribute_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  city_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** columns and relationships of "user_type" */
export type User_Type = {
  __typename?: 'user_type';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "user_type" */
export type User_TypeUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "user_type" */
export type User_TypeUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "user_type" */
export type User_Type_Aggregate = {
  __typename?: 'user_type_aggregate';
  aggregate?: Maybe<User_Type_Aggregate_Fields>;
  nodes: Array<User_Type>;
};

/** aggregate fields of "user_type" */
export type User_Type_Aggregate_Fields = {
  __typename?: 'user_type_aggregate_fields';
  avg?: Maybe<User_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Type_Max_Fields>;
  min?: Maybe<User_Type_Min_Fields>;
  stddev?: Maybe<User_Type_Stddev_Fields>;
  stddev_pop?: Maybe<User_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Type_Stddev_Samp_Fields>;
  sum?: Maybe<User_Type_Sum_Fields>;
  var_pop?: Maybe<User_Type_Var_Pop_Fields>;
  var_samp?: Maybe<User_Type_Var_Samp_Fields>;
  variance?: Maybe<User_Type_Variance_Fields>;
};


/** aggregate fields of "user_type" */
export type User_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_type" */
export type User_Type_Aggregate_Order_By = {
  avg?: Maybe<User_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Type_Max_Order_By>;
  min?: Maybe<User_Type_Min_Order_By>;
  stddev?: Maybe<User_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Type_Sum_Order_By>;
  var_pop?: Maybe<User_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Type_Var_Samp_Order_By>;
  variance?: Maybe<User_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_type" */
export type User_Type_Arr_Rel_Insert_Input = {
  data: Array<User_Type_Insert_Input>;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Type_Avg_Fields = {
  __typename?: 'user_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_type" */
export type User_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_type". All fields are combined with a logical 'AND'. */
export type User_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Type_Bool_Exp>>>;
  _not?: Maybe<User_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "user_type" */
export enum User_Type_Constraint {
  /** unique or primary key constraint */
  UserTypeNameUnique = 'user_type_name_unique',
  /** unique or primary key constraint */
  UserTypePkey = 'user_type_pkey'
}

/** input type for incrementing integer column in table "user_type" */
export type User_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_type" */
export type User_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Type_Max_Fields = {
  __typename?: 'user_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_type" */
export type User_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Type_Min_Fields = {
  __typename?: 'user_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_type" */
export type User_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_type" */
export type User_Type_Mutation_Response = {
  __typename?: 'user_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Type>;
};

/** input type for inserting object relation for remote table "user_type" */
export type User_Type_Obj_Rel_Insert_Input = {
  data: User_Type_Insert_Input;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};

/** on conflict condition type for table "user_type" */
export type User_Type_On_Conflict = {
  constraint: User_Type_Constraint;
  update_columns: Array<User_Type_Update_Column>;
  where?: Maybe<User_Type_Bool_Exp>;
};

/** ordering options when selecting data from "user_type" */
export type User_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: "user_type" */
export type User_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_type" */
export enum User_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_type" */
export type User_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Type_Stddev_Fields = {
  __typename?: 'user_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_type" */
export type User_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Type_Stddev_Pop_Fields = {
  __typename?: 'user_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_type" */
export type User_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Type_Stddev_Samp_Fields = {
  __typename?: 'user_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_type" */
export type User_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Type_Sum_Fields = {
  __typename?: 'user_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_type" */
export type User_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user_type" */
export enum User_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type User_Type_Var_Pop_Fields = {
  __typename?: 'user_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_type" */
export type User_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Type_Var_Samp_Fields = {
  __typename?: 'user_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_type" */
export type User_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Type_Variance_Fields = {
  __typename?: 'user_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_type" */
export type User_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  PhysicalAttributeId = 'physical_attribute_id',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserTypeId = 'user_type_id',
  /** column name */
  VoiceAttributeId = 'voice_attribute_id'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  physical_attribute_id?: Maybe<Scalars['Float']>;
  user_type_id?: Maybe<Scalars['Float']>;
  voice_attribute_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  city_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute_id?: Maybe<Order_By>;
};


/** columns and relationships of "voice_attribute" */
export type Voice_Attribute = {
  __typename?: 'voice_attribute';
  id: Scalars['Int'];
  voice_type_id: Scalars['Int'];
};

/** aggregated selection of "voice_attribute" */
export type Voice_Attribute_Aggregate = {
  __typename?: 'voice_attribute_aggregate';
  aggregate?: Maybe<Voice_Attribute_Aggregate_Fields>;
  nodes: Array<Voice_Attribute>;
};

/** aggregate fields of "voice_attribute" */
export type Voice_Attribute_Aggregate_Fields = {
  __typename?: 'voice_attribute_aggregate_fields';
  avg?: Maybe<Voice_Attribute_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Voice_Attribute_Max_Fields>;
  min?: Maybe<Voice_Attribute_Min_Fields>;
  stddev?: Maybe<Voice_Attribute_Stddev_Fields>;
  stddev_pop?: Maybe<Voice_Attribute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Voice_Attribute_Stddev_Samp_Fields>;
  sum?: Maybe<Voice_Attribute_Sum_Fields>;
  var_pop?: Maybe<Voice_Attribute_Var_Pop_Fields>;
  var_samp?: Maybe<Voice_Attribute_Var_Samp_Fields>;
  variance?: Maybe<Voice_Attribute_Variance_Fields>;
};


/** aggregate fields of "voice_attribute" */
export type Voice_Attribute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voice_Attribute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "voice_attribute" */
export type Voice_Attribute_Aggregate_Order_By = {
  avg?: Maybe<Voice_Attribute_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Voice_Attribute_Max_Order_By>;
  min?: Maybe<Voice_Attribute_Min_Order_By>;
  stddev?: Maybe<Voice_Attribute_Stddev_Order_By>;
  stddev_pop?: Maybe<Voice_Attribute_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Voice_Attribute_Stddev_Samp_Order_By>;
  sum?: Maybe<Voice_Attribute_Sum_Order_By>;
  var_pop?: Maybe<Voice_Attribute_Var_Pop_Order_By>;
  var_samp?: Maybe<Voice_Attribute_Var_Samp_Order_By>;
  variance?: Maybe<Voice_Attribute_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "voice_attribute" */
export type Voice_Attribute_Arr_Rel_Insert_Input = {
  data: Array<Voice_Attribute_Insert_Input>;
  on_conflict?: Maybe<Voice_Attribute_On_Conflict>;
};

/** aggregate avg on columns */
export type Voice_Attribute_Avg_Fields = {
  __typename?: 'voice_attribute_avg_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "voice_attribute" */
export type Voice_Attribute_Avg_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "voice_attribute". All fields are combined with a logical 'AND'. */
export type Voice_Attribute_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Voice_Attribute_Bool_Exp>>>;
  _not?: Maybe<Voice_Attribute_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Voice_Attribute_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  voice_type_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "voice_attribute" */
export enum Voice_Attribute_Constraint {
  /** unique or primary key constraint */
  VoiceAttributePkey = 'voice_attribute_pkey'
}

/** input type for incrementing integer column in table "voice_attribute" */
export type Voice_Attribute_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voice_attribute" */
export type Voice_Attribute_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Voice_Attribute_Max_Fields = {
  __typename?: 'voice_attribute_max_fields';
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "voice_attribute" */
export type Voice_Attribute_Max_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Voice_Attribute_Min_Fields = {
  __typename?: 'voice_attribute_min_fields';
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "voice_attribute" */
export type Voice_Attribute_Min_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "voice_attribute" */
export type Voice_Attribute_Mutation_Response = {
  __typename?: 'voice_attribute_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Voice_Attribute>;
};

/** input type for inserting object relation for remote table "voice_attribute" */
export type Voice_Attribute_Obj_Rel_Insert_Input = {
  data: Voice_Attribute_Insert_Input;
  on_conflict?: Maybe<Voice_Attribute_On_Conflict>;
};

/** on conflict condition type for table "voice_attribute" */
export type Voice_Attribute_On_Conflict = {
  constraint: Voice_Attribute_Constraint;
  update_columns: Array<Voice_Attribute_Update_Column>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};

/** ordering options when selecting data from "voice_attribute" */
export type Voice_Attribute_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "voice_attribute" */
export type Voice_Attribute_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voice_attribute" */
export enum Voice_Attribute_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  VoiceTypeId = 'voice_type_id'
}

/** input type for updating data in table "voice_attribute" */
export type Voice_Attribute_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Voice_Attribute_Stddev_Fields = {
  __typename?: 'voice_attribute_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "voice_attribute" */
export type Voice_Attribute_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Voice_Attribute_Stddev_Pop_Fields = {
  __typename?: 'voice_attribute_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "voice_attribute" */
export type Voice_Attribute_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Voice_Attribute_Stddev_Samp_Fields = {
  __typename?: 'voice_attribute_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "voice_attribute" */
export type Voice_Attribute_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Voice_Attribute_Sum_Fields = {
  __typename?: 'voice_attribute_sum_fields';
  id?: Maybe<Scalars['Int']>;
  voice_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "voice_attribute" */
export type Voice_Attribute_Sum_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** update columns of table "voice_attribute" */
export enum Voice_Attribute_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  VoiceTypeId = 'voice_type_id'
}

/** aggregate var_pop on columns */
export type Voice_Attribute_Var_Pop_Fields = {
  __typename?: 'voice_attribute_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "voice_attribute" */
export type Voice_Attribute_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Voice_Attribute_Var_Samp_Fields = {
  __typename?: 'voice_attribute_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "voice_attribute" */
export type Voice_Attribute_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Voice_Attribute_Variance_Fields = {
  __typename?: 'voice_attribute_variance_fields';
  id?: Maybe<Scalars['Float']>;
  voice_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "voice_attribute" */
export type Voice_Attribute_Variance_Order_By = {
  id?: Maybe<Order_By>;
  voice_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "voice_type" */
export type Voice_Type = {
  __typename?: 'voice_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "voice_type" */
export type Voice_Type_Aggregate = {
  __typename?: 'voice_type_aggregate';
  aggregate?: Maybe<Voice_Type_Aggregate_Fields>;
  nodes: Array<Voice_Type>;
};

/** aggregate fields of "voice_type" */
export type Voice_Type_Aggregate_Fields = {
  __typename?: 'voice_type_aggregate_fields';
  avg?: Maybe<Voice_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Voice_Type_Max_Fields>;
  min?: Maybe<Voice_Type_Min_Fields>;
  stddev?: Maybe<Voice_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Voice_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Voice_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Voice_Type_Sum_Fields>;
  var_pop?: Maybe<Voice_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Voice_Type_Var_Samp_Fields>;
  variance?: Maybe<Voice_Type_Variance_Fields>;
};


/** aggregate fields of "voice_type" */
export type Voice_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voice_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "voice_type" */
export type Voice_Type_Aggregate_Order_By = {
  avg?: Maybe<Voice_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Voice_Type_Max_Order_By>;
  min?: Maybe<Voice_Type_Min_Order_By>;
  stddev?: Maybe<Voice_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Voice_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Voice_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Voice_Type_Sum_Order_By>;
  var_pop?: Maybe<Voice_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Voice_Type_Var_Samp_Order_By>;
  variance?: Maybe<Voice_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "voice_type" */
export type Voice_Type_Arr_Rel_Insert_Input = {
  data: Array<Voice_Type_Insert_Input>;
  on_conflict?: Maybe<Voice_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Voice_Type_Avg_Fields = {
  __typename?: 'voice_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "voice_type" */
export type Voice_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "voice_type". All fields are combined with a logical 'AND'. */
export type Voice_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Voice_Type_Bool_Exp>>>;
  _not?: Maybe<Voice_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Voice_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "voice_type" */
export enum Voice_Type_Constraint {
  /** unique or primary key constraint */
  VoiceTypeNameUnique = 'voice_type_name_unique',
  /** unique or primary key constraint */
  VoiceTypePkey = 'voice_type_pkey'
}

/** input type for incrementing integer column in table "voice_type" */
export type Voice_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voice_type" */
export type Voice_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Voice_Type_Max_Fields = {
  __typename?: 'voice_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "voice_type" */
export type Voice_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Voice_Type_Min_Fields = {
  __typename?: 'voice_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "voice_type" */
export type Voice_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "voice_type" */
export type Voice_Type_Mutation_Response = {
  __typename?: 'voice_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Voice_Type>;
};

/** input type for inserting object relation for remote table "voice_type" */
export type Voice_Type_Obj_Rel_Insert_Input = {
  data: Voice_Type_Insert_Input;
  on_conflict?: Maybe<Voice_Type_On_Conflict>;
};

/** on conflict condition type for table "voice_type" */
export type Voice_Type_On_Conflict = {
  constraint: Voice_Type_Constraint;
  update_columns: Array<Voice_Type_Update_Column>;
  where?: Maybe<Voice_Type_Bool_Exp>;
};

/** ordering options when selecting data from "voice_type" */
export type Voice_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "voice_type" */
export type Voice_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voice_type" */
export enum Voice_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "voice_type" */
export type Voice_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Voice_Type_Stddev_Fields = {
  __typename?: 'voice_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "voice_type" */
export type Voice_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Voice_Type_Stddev_Pop_Fields = {
  __typename?: 'voice_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "voice_type" */
export type Voice_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Voice_Type_Stddev_Samp_Fields = {
  __typename?: 'voice_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "voice_type" */
export type Voice_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Voice_Type_Sum_Fields = {
  __typename?: 'voice_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "voice_type" */
export type Voice_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "voice_type" */
export enum Voice_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Voice_Type_Var_Pop_Fields = {
  __typename?: 'voice_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "voice_type" */
export type Voice_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Voice_Type_Var_Samp_Fields = {
  __typename?: 'voice_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "voice_type" */
export type Voice_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Voice_Type_Variance_Fields = {
  __typename?: 'voice_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "voice_type" */
export type Voice_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type AuditionCardFragment = (
  { __typename?: 'audition' }
  & Pick<Audition, 'name' | 'created_at'>
  & { city: (
    { __typename?: 'city' }
    & Pick<City, 'name'>
  ), audition_tags: Array<(
    { __typename?: 'audition_tag' }
    & { tag: (
      { __typename?: 'tag' }
      & Pick<Tag, 'name'>
    ) }
  )> }
);

export type AuditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuditionsQuery = (
  { __typename?: 'query_root' }
  & { audition: Array<(
    { __typename?: 'audition' }
    & AuditionCardFragment
  )> }
);

export type SignInUserQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInUserQuery = (
  { __typename?: 'query_root' }
  & { signin?: Maybe<(
    { __typename?: 'signinActionOutput' }
    & Pick<SigninActionOutput, 'id'>
  )> }
);

export const AuditionCardFragmentDoc = gql`
    fragment AuditionCard on audition {
  name
  city {
    name
  }
  created_at
  audition_tags {
    tag {
      name
    }
  }
}
    `;
export const AuditionsDocument = gql`
    query Auditions {
  audition(limit: 5, order_by: {created_at: desc}) {
    ...AuditionCard
  }
}
    ${AuditionCardFragmentDoc}`;

/**
 * __useAuditionsQuery__
 *
 * To run a query within a React component, call `useAuditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuditionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuditionsQuery(baseOptions?: Apollo.QueryHookOptions<AuditionsQuery, AuditionsQueryVariables>) {
        return Apollo.useQuery<AuditionsQuery, AuditionsQueryVariables>(AuditionsDocument, baseOptions);
      }
export function useAuditionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuditionsQuery, AuditionsQueryVariables>) {
          return Apollo.useLazyQuery<AuditionsQuery, AuditionsQueryVariables>(AuditionsDocument, baseOptions);
        }
export type AuditionsQueryHookResult = ReturnType<typeof useAuditionsQuery>;
export type AuditionsLazyQueryHookResult = ReturnType<typeof useAuditionsLazyQuery>;
export type AuditionsQueryResult = Apollo.QueryResult<AuditionsQuery, AuditionsQueryVariables>;
export const SignInUserDocument = gql`
    query SignInUser($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    id
  }
}
    `;

/**
 * __useSignInUserQuery__
 *
 * To run a query within a React component, call `useSignInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignInUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInUserQuery(baseOptions?: Apollo.QueryHookOptions<SignInUserQuery, SignInUserQueryVariables>) {
        return Apollo.useQuery<SignInUserQuery, SignInUserQueryVariables>(SignInUserDocument, baseOptions);
      }
export function useSignInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignInUserQuery, SignInUserQueryVariables>) {
          return Apollo.useLazyQuery<SignInUserQuery, SignInUserQueryVariables>(SignInUserDocument, baseOptions);
        }
export type SignInUserQueryHookResult = ReturnType<typeof useSignInUserQuery>;
export type SignInUserLazyQueryHookResult = ReturnType<typeof useSignInUserLazyQuery>;
export type SignInUserQueryResult = Apollo.QueryResult<SignInUserQuery, SignInUserQueryVariables>;
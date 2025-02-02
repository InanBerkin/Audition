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

/** columns and relationships of "applicant" */
export type Applicant = {
  __typename?: 'applicant';
  apply_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  role: Role;
  role_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "applicant" */
export type Applicant_Aggregate = {
  __typename?: 'applicant_aggregate';
  aggregate?: Maybe<Applicant_Aggregate_Fields>;
  nodes: Array<Applicant>;
};

/** aggregate fields of "applicant" */
export type Applicant_Aggregate_Fields = {
  __typename?: 'applicant_aggregate_fields';
  avg?: Maybe<Applicant_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Applicant_Max_Fields>;
  min?: Maybe<Applicant_Min_Fields>;
  stddev?: Maybe<Applicant_Stddev_Fields>;
  stddev_pop?: Maybe<Applicant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Applicant_Stddev_Samp_Fields>;
  sum?: Maybe<Applicant_Sum_Fields>;
  var_pop?: Maybe<Applicant_Var_Pop_Fields>;
  var_samp?: Maybe<Applicant_Var_Samp_Fields>;
  variance?: Maybe<Applicant_Variance_Fields>;
};


/** aggregate fields of "applicant" */
export type Applicant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Applicant_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "applicant" */
export type Applicant_Aggregate_Order_By = {
  avg?: Maybe<Applicant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Applicant_Max_Order_By>;
  min?: Maybe<Applicant_Min_Order_By>;
  stddev?: Maybe<Applicant_Stddev_Order_By>;
  stddev_pop?: Maybe<Applicant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Applicant_Stddev_Samp_Order_By>;
  sum?: Maybe<Applicant_Sum_Order_By>;
  var_pop?: Maybe<Applicant_Var_Pop_Order_By>;
  var_samp?: Maybe<Applicant_Var_Samp_Order_By>;
  variance?: Maybe<Applicant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "applicant" */
export type Applicant_Arr_Rel_Insert_Input = {
  data: Array<Applicant_Insert_Input>;
  on_conflict?: Maybe<Applicant_On_Conflict>;
};

/** aggregate avg on columns */
export type Applicant_Avg_Fields = {
  __typename?: 'applicant_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "applicant" */
export type Applicant_Avg_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "applicant". All fields are combined with a logical 'AND'. */
export type Applicant_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Applicant_Bool_Exp>>>;
  _not?: Maybe<Applicant_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Applicant_Bool_Exp>>>;
  apply_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Role_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "applicant" */
export enum Applicant_Constraint {
  /** unique or primary key constraint */
  ApplicantPkey = 'applicant_pkey',
  /** unique or primary key constraint */
  ApplicantUserIdRoleIdUnique = 'applicant_user_id_role_id_unique'
}

/** input type for incrementing integer column in table "applicant" */
export type Applicant_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "applicant" */
export type Applicant_Insert_Input = {
  apply_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Role_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Applicant_Max_Fields = {
  __typename?: 'applicant_max_fields';
  apply_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "applicant" */
export type Applicant_Max_Order_By = {
  apply_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Applicant_Min_Fields = {
  __typename?: 'applicant_min_fields';
  apply_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "applicant" */
export type Applicant_Min_Order_By = {
  apply_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "applicant" */
export type Applicant_Mutation_Response = {
  __typename?: 'applicant_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Applicant>;
};

/** input type for inserting object relation for remote table "applicant" */
export type Applicant_Obj_Rel_Insert_Input = {
  data: Applicant_Insert_Input;
  on_conflict?: Maybe<Applicant_On_Conflict>;
};

/** on conflict condition type for table "applicant" */
export type Applicant_On_Conflict = {
  constraint: Applicant_Constraint;
  update_columns: Array<Applicant_Update_Column>;
  where?: Maybe<Applicant_Bool_Exp>;
};

/** ordering options when selecting data from "applicant" */
export type Applicant_Order_By = {
  apply_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Role_Order_By>;
  role_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "applicant" */
export type Applicant_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "applicant" */
export enum Applicant_Select_Column {
  /** column name */
  ApplyDate = 'apply_date',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "applicant" */
export type Applicant_Set_Input = {
  apply_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Applicant_Stddev_Fields = {
  __typename?: 'applicant_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "applicant" */
export type Applicant_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Applicant_Stddev_Pop_Fields = {
  __typename?: 'applicant_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "applicant" */
export type Applicant_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Applicant_Stddev_Samp_Fields = {
  __typename?: 'applicant_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "applicant" */
export type Applicant_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Applicant_Sum_Fields = {
  __typename?: 'applicant_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "applicant" */
export type Applicant_Sum_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "applicant" */
export enum Applicant_Update_Column {
  /** column name */
  ApplyDate = 'apply_date',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Applicant_Var_Pop_Fields = {
  __typename?: 'applicant_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "applicant" */
export type Applicant_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Applicant_Var_Samp_Fields = {
  __typename?: 'applicant_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "applicant" */
export type Applicant_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Applicant_Variance_Fields = {
  __typename?: 'applicant_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "applicant" */
export type Applicant_Variance_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "audition" */
export type Audition = {
  __typename?: 'audition';
  address: Scalars['String'];
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
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregated array relationship */
  roles_aggregate: Role_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
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
  address?: Maybe<String_Comparison_Exp>;
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
  roles?: Maybe<Role_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
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
  address?: Maybe<Scalars['String']>;
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
  roles?: Maybe<Role_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Audition_Max_Fields = {
  __typename?: 'audition_max_fields';
  address?: Maybe<Scalars['String']>;
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
  address?: Maybe<Order_By>;
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
  address?: Maybe<Scalars['String']>;
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
  address?: Maybe<Order_By>;
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
  address?: Maybe<Order_By>;
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
  roles_aggregate?: Maybe<Role_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "audition" */
export type Audition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "audition" */
export enum Audition_Select_Column {
  /** column name */
  Address = 'address',
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
  address?: Maybe<Scalars['String']>;
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
  /** An array relationship */
  auditions: Array<Audition>;
  /** An aggregated array relationship */
  auditions_aggregate: Audition_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "audition_type" */
export type Audition_TypeAuditionsArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** columns and relationships of "audition_type" */
export type Audition_TypeAuditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
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
  auditions?: Maybe<Audition_Bool_Exp>;
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
  auditions?: Maybe<Audition_Arr_Rel_Insert_Input>;
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
  auditions_aggregate?: Maybe<Audition_Aggregate_Order_By>;
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
  Address = 'address',
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
  /** An array relationship */
  physical_attributes: Array<Physical_Attribute>;
  /** An aggregated array relationship */
  physical_attributes_aggregate: Physical_Attribute_Aggregate;
};


/** columns and relationships of "body_type" */
export type Body_TypePhysical_AttributesArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** columns and relationships of "body_type" */
export type Body_TypePhysical_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Arr_Rel_Insert_Input>;
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
  physical_attributes_aggregate?: Maybe<Physical_Attribute_Aggregate_Order_By>;
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
  /** An array relationship */
  auditions: Array<Audition>;
  /** An aggregated array relationship */
  auditions_aggregate: Audition_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "city" */
export type CityAuditionsArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** columns and relationships of "city" */
export type CityAuditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** columns and relationships of "city" */
export type CityUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "city" */
export type CityUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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
  auditions?: Maybe<Audition_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
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
  auditions?: Maybe<Audition_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
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
  auditions_aggregate?: Maybe<Audition_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
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
  /** An array relationship */
  physical_attributes: Array<Physical_Attribute>;
  /** An aggregated array relationship */
  physical_attributes_aggregate: Physical_Attribute_Aggregate;
};


/** columns and relationships of "ethnicity" */
export type EthnicityPhysical_AttributesArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** columns and relationships of "ethnicity" */
export type EthnicityPhysical_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Arr_Rel_Insert_Input>;
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
  physical_attributes_aggregate?: Maybe<Physical_Attribute_Aggregate_Order_By>;
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
  /** An array relationship */
  physical_attributes: Array<Physical_Attribute>;
  /** An aggregated array relationship */
  physical_attributes_aggregate: Physical_Attribute_Aggregate;
};


/** columns and relationships of "eye_color" */
export type Eye_ColorPhysical_AttributesArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** columns and relationships of "eye_color" */
export type Eye_ColorPhysical_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Arr_Rel_Insert_Input>;
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
  physical_attributes_aggregate?: Maybe<Physical_Attribute_Aggregate_Order_By>;
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
  /** An array relationship */
  physical_attributes: Array<Physical_Attribute>;
  /** An aggregated array relationship */
  physical_attributes_aggregate: Physical_Attribute_Aggregate;
};


/** columns and relationships of "gender" */
export type GenderPhysical_AttributesArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** columns and relationships of "gender" */
export type GenderPhysical_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Arr_Rel_Insert_Input>;
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
  physical_attributes_aggregate?: Maybe<Physical_Attribute_Aggregate_Order_By>;
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
  /** An array relationship */
  physical_attributes: Array<Physical_Attribute>;
  /** An aggregated array relationship */
  physical_attributes_aggregate: Physical_Attribute_Aggregate;
};


/** columns and relationships of "hair_color" */
export type Hair_ColorPhysical_AttributesArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
};


/** columns and relationships of "hair_color" */
export type Hair_ColorPhysical_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Physical_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Physical_Attribute_Order_By>>;
  where?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Bool_Exp>;
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
  physical_attributes?: Maybe<Physical_Attribute_Arr_Rel_Insert_Input>;
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
  physical_attributes_aggregate?: Maybe<Physical_Attribute_Aggregate_Order_By>;
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
  /** An object relationship */
  highlight_type: Highlight_Type;
  highlight_type_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  source_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: User;
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
  highlight_type?: Maybe<Highlight_Type_Bool_Exp>;
  highlight_type_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  source_url?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
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
  highlight_type?: Maybe<Highlight_Type_Obj_Rel_Insert_Input>;
  highlight_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
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
  highlight_type?: Maybe<Highlight_Type_Order_By>;
  highlight_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
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
  /** An array relationship */
  highlights: Array<Highlight>;
  /** An aggregated array relationship */
  highlights_aggregate: Highlight_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "highlight_type" */
export type Highlight_TypeHighlightsArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** columns and relationships of "highlight_type" */
export type Highlight_TypeHighlights_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
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
  highlights?: Maybe<Highlight_Bool_Exp>;
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
  highlights?: Maybe<Highlight_Arr_Rel_Insert_Input>;
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
  highlights_aggregate?: Maybe<Highlight_Aggregate_Order_By>;
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

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  receiver_id: Scalars['Int'];
  sender_id: Scalars['Int'];
  /** An object relationship */
  userByReceiverId: User;
  /** An object relationship */
  userBySenderId: User;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  avg?: Maybe<Messages_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
  stddev?: Maybe<Messages_Stddev_Order_By>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>;
  sum?: Maybe<Messages_Sum_Order_By>;
  var_pop?: Maybe<Messages_Var_Pop_Order_By>;
  var_samp?: Maybe<Messages_Var_Samp_Order_By>;
  variance?: Maybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  receiver_id?: Maybe<Int_Comparison_Exp>;
  sender_id?: Maybe<Int_Comparison_Exp>;
  userByReceiverId?: Maybe<User_Bool_Exp>;
  userBySenderId?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer column in table "messages" */
export type Messages_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  userByReceiverId?: Maybe<User_Obj_Rel_Insert_Input>;
  userBySenderId?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Messages>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
  userByReceiverId?: Maybe<User_Order_By>;
  userBySenderId?: Maybe<User_Order_By>;
};

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields';
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id'
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "applicant" */
  delete_applicant?: Maybe<Applicant_Mutation_Response>;
  /** delete single row from the table: "applicant" */
  delete_applicant_by_pk?: Maybe<Applicant>;
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
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
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
  /** insert data into the table: "applicant" */
  insert_applicant?: Maybe<Applicant_Mutation_Response>;
  /** insert a single row into the table: "applicant" */
  insert_applicant_one?: Maybe<Applicant>;
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
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
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
  /** update data of the table: "applicant" */
  update_applicant?: Maybe<Applicant_Mutation_Response>;
  /** update single row of the table: "applicant" */
  update_applicant_by_pk?: Maybe<Applicant>;
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
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
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
export type Mutation_RootDelete_ApplicantArgs = {
  where: Applicant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Applicant_By_PkArgs = {
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
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_ApplicantArgs = {
  objects: Array<Applicant_Insert_Input>;
  on_conflict?: Maybe<Applicant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applicant_OneArgs = {
  object: Applicant_Insert_Input;
  on_conflict?: Maybe<Applicant_On_Conflict>;
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
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
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
export type Mutation_RootUpdate_ApplicantArgs = {
  _inc?: Maybe<Applicant_Inc_Input>;
  _set?: Maybe<Applicant_Set_Input>;
  where: Applicant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Applicant_By_PkArgs = {
  _inc?: Maybe<Applicant_Inc_Input>;
  _set?: Maybe<Applicant_Set_Input>;
  pk_columns: Applicant_Pk_Columns_Input;
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
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
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
  age?: Maybe<Scalars['Int']>;
  /** An object relationship */
  body_type?: Maybe<Body_Type>;
  body_type_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  ethnicity?: Maybe<Ethnicity>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  eye_color?: Maybe<Eye_Color>;
  eye_color_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  gender?: Maybe<Gender>;
  gender_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  hair_color?: Maybe<Hair_Color>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An array relationship */
  requirements: Array<Requirement>;
  /** An aggregated array relationship */
  requirements_aggregate: Requirement_Aggregate;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "physical_attribute" */
export type Physical_AttributeRequirementsArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** columns and relationships of "physical_attribute" */
export type Physical_AttributeRequirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** columns and relationships of "physical_attribute" */
export type Physical_AttributeUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "physical_attribute" */
export type Physical_AttributeUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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
  body_type?: Maybe<Body_Type_Bool_Exp>;
  body_type_id?: Maybe<Int_Comparison_Exp>;
  ethnicity?: Maybe<Ethnicity_Bool_Exp>;
  ethnicity_id?: Maybe<Int_Comparison_Exp>;
  eye_color?: Maybe<Eye_Color_Bool_Exp>;
  eye_color_id?: Maybe<Int_Comparison_Exp>;
  gender?: Maybe<Gender_Bool_Exp>;
  gender_id?: Maybe<Int_Comparison_Exp>;
  hair_color?: Maybe<Hair_Color_Bool_Exp>;
  hair_color_id?: Maybe<Int_Comparison_Exp>;
  height?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  requirements?: Maybe<Requirement_Bool_Exp>;
  users?: Maybe<User_Bool_Exp>;
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
  body_type?: Maybe<Body_Type_Obj_Rel_Insert_Input>;
  body_type_id?: Maybe<Scalars['Int']>;
  ethnicity?: Maybe<Ethnicity_Obj_Rel_Insert_Input>;
  ethnicity_id?: Maybe<Scalars['Int']>;
  eye_color?: Maybe<Eye_Color_Obj_Rel_Insert_Input>;
  eye_color_id?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender_Obj_Rel_Insert_Input>;
  gender_id?: Maybe<Scalars['Int']>;
  hair_color?: Maybe<Hair_Color_Obj_Rel_Insert_Input>;
  hair_color_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  requirements?: Maybe<Requirement_Arr_Rel_Insert_Input>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
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
  body_type?: Maybe<Body_Type_Order_By>;
  body_type_id?: Maybe<Order_By>;
  ethnicity?: Maybe<Ethnicity_Order_By>;
  ethnicity_id?: Maybe<Order_By>;
  eye_color?: Maybe<Eye_Color_Order_By>;
  eye_color_id?: Maybe<Order_By>;
  gender?: Maybe<Gender_Order_By>;
  gender_id?: Maybe<Order_By>;
  hair_color?: Maybe<Hair_Color_Order_By>;
  hair_color_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  requirements_aggregate?: Maybe<Requirement_Aggregate_Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
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
  /** fetch data from the table: "applicant" */
  applicant: Array<Applicant>;
  /** fetch aggregated fields from the table: "applicant" */
  applicant_aggregate: Applicant_Aggregate;
  /** fetch data from the table: "applicant" using primary key columns */
  applicant_by_pk?: Maybe<Applicant>;
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
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
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
  signin?: Maybe<SigninOutput>;
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
export type Query_RootApplicantArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** query root */
export type Query_RootApplicant_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** query root */
export type Query_RootApplicant_By_PkArgs = {
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
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
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
  /** An object relationship */
  physical_attribute?: Maybe<Physical_Attribute>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregated array relationship */
  roles_aggregate: Role_Aggregate;
  /** An object relationship */
  voice_attribute?: Maybe<Voice_Attribute>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "requirement" */
export type RequirementRolesArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** columns and relationships of "requirement" */
export type RequirementRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
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
  physical_attribute?: Maybe<Physical_Attribute_Bool_Exp>;
  physical_attribute_id?: Maybe<Int_Comparison_Exp>;
  roles?: Maybe<Role_Bool_Exp>;
  voice_attribute?: Maybe<Voice_Attribute_Bool_Exp>;
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
  physical_attribute?: Maybe<Physical_Attribute_Obj_Rel_Insert_Input>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  roles?: Maybe<Role_Arr_Rel_Insert_Input>;
  voice_attribute?: Maybe<Voice_Attribute_Obj_Rel_Insert_Input>;
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
  physical_attribute?: Maybe<Physical_Attribute_Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  roles_aggregate?: Maybe<Role_Aggregate_Order_By>;
  voice_attribute?: Maybe<Voice_Attribute_Order_By>;
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
  /** An array relationship */
  applicants: Array<Applicant>;
  /** An aggregated array relationship */
  applicants_aggregate: Applicant_Aggregate;
  /** An object relationship */
  audition: Audition;
  audition_id: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  requirement?: Maybe<Requirement>;
  requirement_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  role_type: Role_Type;
  role_type_id: Scalars['Int'];
};


/** columns and relationships of "role" */
export type RoleApplicantsArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** columns and relationships of "role" */
export type RoleApplicants_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
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
  applicants?: Maybe<Applicant_Bool_Exp>;
  audition?: Maybe<Audition_Bool_Exp>;
  audition_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  requirement?: Maybe<Requirement_Bool_Exp>;
  requirement_id?: Maybe<Int_Comparison_Exp>;
  role_type?: Maybe<Role_Type_Bool_Exp>;
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
  applicants?: Maybe<Applicant_Arr_Rel_Insert_Input>;
  audition?: Maybe<Audition_Obj_Rel_Insert_Input>;
  audition_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  requirement?: Maybe<Requirement_Obj_Rel_Insert_Input>;
  requirement_id?: Maybe<Scalars['Int']>;
  role_type?: Maybe<Role_Type_Obj_Rel_Insert_Input>;
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
  applicants_aggregate?: Maybe<Applicant_Aggregate_Order_By>;
  audition?: Maybe<Audition_Order_By>;
  audition_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  requirement?: Maybe<Requirement_Order_By>;
  requirement_id?: Maybe<Order_By>;
  role_type?: Maybe<Role_Type_Order_By>;
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
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregated array relationship */
  roles_aggregate: Role_Aggregate;
};


/** columns and relationships of "role_type" */
export type Role_TypeRolesArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** columns and relationships of "role_type" */
export type Role_TypeRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
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
  roles?: Maybe<Role_Bool_Exp>;
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
  roles?: Maybe<Role_Arr_Rel_Insert_Input>;
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
  roles_aggregate?: Maybe<Role_Aggregate_Order_By>;
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

export type SigninOutput = {
  __typename?: 'signinOutput';
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "applicant" */
  applicant: Array<Applicant>;
  /** fetch aggregated fields from the table: "applicant" */
  applicant_aggregate: Applicant_Aggregate;
  /** fetch data from the table: "applicant" using primary key columns */
  applicant_by_pk?: Maybe<Applicant>;
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
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
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
  signin?: Maybe<SigninOutput>;
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
export type Subscription_RootApplicantArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplicant_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplicant_By_PkArgs = {
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
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
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
  /** An array relationship */
  applicants: Array<Applicant>;
  /** An aggregated array relationship */
  applicants_aggregate: Applicant_Aggregate;
  /** An array relationship */
  auditions: Array<Audition>;
  /** An aggregated array relationship */
  auditions_aggregate: Audition_Aggregate;
  /** An object relationship */
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  highlights: Array<Highlight>;
  /** An aggregated array relationship */
  highlights_aggregate: Highlight_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  messagesByReceiverId: Array<Messages>;
  /** An aggregated array relationship */
  messagesByReceiverId_aggregate: Messages_Aggregate;
  /** An array relationship */
  messagesBySenderId: Array<Messages>;
  /** An aggregated array relationship */
  messagesBySenderId_aggregate: Messages_Aggregate;
  name: Scalars['String'];
  password: Scalars['String'];
  /** An object relationship */
  physical_attribute?: Maybe<Physical_Attribute>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_type: User_Type;
  user_type_id: Scalars['Int'];
  /** An object relationship */
  voice_attribute?: Maybe<Voice_Attribute>;
  voice_attribute_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "user" */
export type UserApplicantsArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserApplicants_AggregateArgs = {
  distinct_on?: Maybe<Array<Applicant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applicant_Order_By>>;
  where?: Maybe<Applicant_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAuditionsArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAuditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Audition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Audition_Order_By>>;
  where?: Maybe<Audition_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserHighlightsArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserHighlights_AggregateArgs = {
  distinct_on?: Maybe<Array<Highlight_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Highlight_Order_By>>;
  where?: Maybe<Highlight_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessagesByReceiverIdArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessagesByReceiverId_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessagesBySenderIdArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessagesBySenderId_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
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
  applicants?: Maybe<Applicant_Bool_Exp>;
  auditions?: Maybe<Audition_Bool_Exp>;
  city?: Maybe<City_Bool_Exp>;
  city_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  highlights?: Maybe<Highlight_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  messagesByReceiverId?: Maybe<Messages_Bool_Exp>;
  messagesBySenderId?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  physical_attribute?: Maybe<Physical_Attribute_Bool_Exp>;
  physical_attribute_id?: Maybe<Int_Comparison_Exp>;
  profile_picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_type?: Maybe<User_Type_Bool_Exp>;
  user_type_id?: Maybe<Int_Comparison_Exp>;
  voice_attribute?: Maybe<Voice_Attribute_Bool_Exp>;
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
  applicants?: Maybe<Applicant_Arr_Rel_Insert_Input>;
  auditions?: Maybe<Audition_Arr_Rel_Insert_Input>;
  city?: Maybe<City_Obj_Rel_Insert_Input>;
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  highlights?: Maybe<Highlight_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  messagesByReceiverId?: Maybe<Messages_Arr_Rel_Insert_Input>;
  messagesBySenderId?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  physical_attribute?: Maybe<Physical_Attribute_Obj_Rel_Insert_Input>;
  physical_attribute_id?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type?: Maybe<User_Type_Obj_Rel_Insert_Input>;
  user_type_id?: Maybe<Scalars['Int']>;
  voice_attribute?: Maybe<Voice_Attribute_Obj_Rel_Insert_Input>;
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
  applicants_aggregate?: Maybe<Applicant_Aggregate_Order_By>;
  auditions_aggregate?: Maybe<Audition_Aggregate_Order_By>;
  city?: Maybe<City_Order_By>;
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  highlights_aggregate?: Maybe<Highlight_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  messagesByReceiverId_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  messagesBySenderId_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  physical_attribute?: Maybe<Physical_Attribute_Order_By>;
  physical_attribute_id?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_type?: Maybe<User_Type_Order_By>;
  user_type_id?: Maybe<Order_By>;
  voice_attribute?: Maybe<Voice_Attribute_Order_By>;
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
  /** An array relationship */
  requirements: Array<Requirement>;
  /** An aggregated array relationship */
  requirements_aggregate: Requirement_Aggregate;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
  /** An object relationship */
  voice_type?: Maybe<Voice_Type>;
  voice_type_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "voice_attribute" */
export type Voice_AttributeRequirementsArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** columns and relationships of "voice_attribute" */
export type Voice_AttributeRequirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Requirement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Requirement_Order_By>>;
  where?: Maybe<Requirement_Bool_Exp>;
};


/** columns and relationships of "voice_attribute" */
export type Voice_AttributeUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "voice_attribute" */
export type Voice_AttributeUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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
  requirements?: Maybe<Requirement_Bool_Exp>;
  users?: Maybe<User_Bool_Exp>;
  voice_type?: Maybe<Voice_Type_Bool_Exp>;
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
  requirements?: Maybe<Requirement_Arr_Rel_Insert_Input>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
  voice_type?: Maybe<Voice_Type_Obj_Rel_Insert_Input>;
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
  requirements_aggregate?: Maybe<Requirement_Aggregate_Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
  voice_type?: Maybe<Voice_Type_Order_By>;
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
  /** An array relationship */
  voice_attributes: Array<Voice_Attribute>;
  /** An aggregated array relationship */
  voice_attributes_aggregate: Voice_Attribute_Aggregate;
};


/** columns and relationships of "voice_type" */
export type Voice_TypeVoice_AttributesArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
};


/** columns and relationships of "voice_type" */
export type Voice_TypeVoice_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Voice_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voice_Attribute_Order_By>>;
  where?: Maybe<Voice_Attribute_Bool_Exp>;
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
  voice_attributes?: Maybe<Voice_Attribute_Bool_Exp>;
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
  voice_attributes?: Maybe<Voice_Attribute_Arr_Rel_Insert_Input>;
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
  voice_attributes_aggregate?: Maybe<Voice_Attribute_Aggregate_Order_By>;
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
  & Pick<Audition, 'id' | 'name' | 'description' | 'address' | 'created_at'>
  & { city: (
    { __typename?: 'city' }
    & Pick<City, 'name'>
  ), audition_type: (
    { __typename?: 'audition_type' }
    & Pick<Audition_Type, 'name'>
  ), roles: Array<(
    { __typename?: 'role' }
    & Pick<Role, 'name'>
    & { role_type: (
      { __typename?: 'role_type' }
      & Pick<Role_Type, 'name'>
    ) }
  )>, audition_tags: Array<(
    { __typename?: 'audition_tag' }
    & { tag: (
      { __typename?: 'tag' }
      & Pick<Tag, 'name'>
    ) }
  )> }
);

export type AuditionDetailsFragment = (
  { __typename?: 'audition' }
  & Pick<Audition, 'id' | 'user_id' | 'name' | 'description' | 'created_at' | 'company_name'>
  & { user: (
    { __typename?: 'user' }
    & TalentCardFragment
  ), city: (
    { __typename?: 'city' }
    & Pick<City, 'name'>
  ), audition_type: (
    { __typename?: 'audition_type' }
    & Pick<Audition_Type, 'name'>
  ), audition_tags: Array<(
    { __typename?: 'audition_tag' }
    & { tag: (
      { __typename?: 'tag' }
      & Pick<Tag, 'name'>
    ) }
  )>, roles: Array<(
    { __typename?: 'role' }
    & RoleDetailsFragment
  )> }
);

export type PhysicalAttributesFragment = (
  { __typename?: 'physical_attribute' }
  & Pick<Physical_Attribute, 'age' | 'height'>
  & { body_type?: Maybe<(
    { __typename?: 'body_type' }
    & Pick<Body_Type, 'name'>
  )>, ethnicity?: Maybe<(
    { __typename?: 'ethnicity' }
    & Pick<Ethnicity, 'name'>
  )>, eye_color?: Maybe<(
    { __typename?: 'eye_color' }
    & Pick<Eye_Color, 'name'>
  )>, gender?: Maybe<(
    { __typename?: 'gender' }
    & Pick<Gender, 'id' | 'name'>
  )>, hair_color?: Maybe<(
    { __typename?: 'hair_color' }
    & Pick<Hair_Color, 'name'>
  )> }
);

export type RoleDetailsFragment = (
  { __typename?: 'role' }
  & Pick<Role, 'id' | 'name' | 'description'>
  & { did_user_applied: Array<(
    { __typename?: 'applicant' }
    & Pick<Applicant, 'user_id'>
  )>, role_type: (
    { __typename?: 'role_type' }
    & Pick<Role_Type, 'name'>
  ) }
  & RoleRequirementsFragment
);

export type RoleRequirementsFragment = (
  { __typename?: 'role' }
  & { requirement?: Maybe<(
    { __typename?: 'requirement' }
    & { physical_attribute?: Maybe<(
      { __typename?: 'physical_attribute' }
      & Pick<Physical_Attribute, 'age' | 'height'>
      & { body_type?: Maybe<(
        { __typename?: 'body_type' }
        & Pick<Body_Type, 'name'>
      )>, ethnicity?: Maybe<(
        { __typename?: 'ethnicity' }
        & Pick<Ethnicity, 'name'>
      )>, eye_color?: Maybe<(
        { __typename?: 'eye_color' }
        & Pick<Eye_Color, 'name'>
      )>, gender?: Maybe<(
        { __typename?: 'gender' }
        & Pick<Gender, 'name'>
      )>, hair_color?: Maybe<(
        { __typename?: 'hair_color' }
        & Pick<Hair_Color, 'name'>
      )> }
    )> }
  )> }
);

export type TalentCardFragment = (
  { __typename?: 'user' }
  & Pick<User, 'id' | 'name' | 'profile_picture'>
  & { user_type: (
    { __typename?: 'user_type' }
    & Pick<User_Type, 'name'>
  ) }
);

export type UserProfileFragment = (
  { __typename?: 'user' }
  & Pick<User, 'name' | 'created_at' | 'profile_picture'>
  & { city?: Maybe<(
    { __typename?: 'city' }
    & Pick<City, 'name'>
  )>, user_type: (
    { __typename?: 'user_type' }
    & Pick<User_Type, 'name'>
  ), physical_attribute?: Maybe<(
    { __typename?: 'physical_attribute' }
    & PhysicalAttributesFragment
  )> }
);

export type ApplyAuditionMutationVariables = Exact<{
  applicant_input: Applicant_Insert_Input;
}>;


export type ApplyAuditionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_applicant_one?: Maybe<(
    { __typename?: 'applicant' }
    & Pick<Applicant, 'id'>
  )> }
);

export type CreateAuditionMutationVariables = Exact<{
  audition_input: Audition_Insert_Input;
}>;


export type CreateAuditionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_audition_one?: Maybe<(
    { __typename?: 'audition' }
    & Pick<Audition, 'id'>
  )> }
);

export type SendMessageMutationVariables = Exact<{
  sender_id: Scalars['Int'];
  receiver_id: Scalars['Int'];
  content: Scalars['String'];
}>;


export type SendMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_messages_one?: Maybe<(
    { __typename?: 'messages' }
    & Pick<Messages, 'id' | 'content'>
  )> }
);

export type ApplicantsByRoleIdQueryVariables = Exact<{
  role_id: Scalars['Int'];
}>;


export type ApplicantsByRoleIdQuery = (
  { __typename?: 'query_root' }
  & { role: Array<(
    { __typename?: 'role' }
    & Pick<Role, 'id'>
    & { applicants: Array<(
      { __typename?: 'applicant' }
      & { user: (
        { __typename?: 'user' }
        & TalentCardFragment
      ) }
    )> }
  )> }
);

export type AppliedAuditionsQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type AppliedAuditionsQuery = (
  { __typename?: 'query_root' }
  & { audition: Array<(
    { __typename?: 'audition' }
    & AuditionCardFragment
  )> }
);

export type AuditionByIdQueryVariables = Exact<{
  id: Scalars['Int'];
  user_id: Scalars['Int'];
}>;


export type AuditionByIdQuery = (
  { __typename?: 'query_root' }
  & { audition_by_pk?: Maybe<(
    { __typename?: 'audition' }
    & AuditionDetailsFragment
  )> }
);

export type GetAuditionTypeCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuditionTypeCountQuery = (
  { __typename?: 'query_root' }
  & { audition_type: Array<(
    { __typename?: 'audition_type' }
    & Pick<Audition_Type, 'name'>
    & { auditions_aggregate: (
      { __typename?: 'audition_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'audition_aggregate_fields' }
        & Pick<Audition_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type AuditionsQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type AuditionsQuery = (
  { __typename?: 'query_root' }
  & { audition: Array<(
    { __typename?: 'audition' }
    & AuditionCardFragment
  )> }
);

export type MessagesQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type MessagesQuery = (
  { __typename?: 'query_root' }
  & { user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & { messagesBySenderId: Array<(
      { __typename?: 'messages' }
      & Pick<Messages, 'receiver_id'>
      & { userByReceiverId: (
        { __typename?: 'user' }
        & TalentCardFragment
      ) }
    )>, messagesByReceiverId: Array<(
      { __typename?: 'messages' }
      & Pick<Messages, 'sender_id'>
      & { userBySenderId: (
        { __typename?: 'user' }
        & TalentCardFragment
      ) }
    )> }
  )> }
);

export type PostedAuditionsQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type PostedAuditionsQuery = (
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
    { __typename?: 'signinOutput' }
    & Pick<SigninOutput, 'id'>
  )> }
);

export type TalentsQueryVariables = Exact<{
  filter?: Maybe<User_Bool_Exp>;
}>;


export type TalentsQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & TalentCardFragment
  )> }
);

export type UserByIdQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type UserByIdQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & UserProfileFragment
  )> }
);

export type UserNameByIdQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type UserNameByIdQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'name' | 'profile_picture'>
  )> }
);

export type ConversationSubscriptionVariables = Exact<{
  uid: Scalars['Int'];
  other_uid: Scalars['Int'];
}>;


export type ConversationSubscription = (
  { __typename?: 'subscription_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & Pick<Messages, 'sender_id' | 'content' | 'created_at'>
  )> }
);

export const AuditionCardFragmentDoc = gql`
    fragment AuditionCard on audition {
  id
  name
  description
  address
  city {
    name
  }
  audition_type {
    name
  }
  roles {
    name
    role_type {
      name
    }
  }
  created_at
  audition_tags {
    tag {
      name
    }
  }
}
    `;
export const TalentCardFragmentDoc = gql`
    fragment TalentCard on user {
  id
  name
  profile_picture
  user_type {
    name
  }
}
    `;
export const RoleRequirementsFragmentDoc = gql`
    fragment RoleRequirements on role {
  requirement {
    physical_attribute {
      age
      body_type {
        name
      }
      ethnicity {
        name
      }
      eye_color {
        name
      }
      gender {
        name
      }
      hair_color {
        name
      }
      height
    }
  }
}
    `;
export const RoleDetailsFragmentDoc = gql`
    fragment RoleDetails on role {
  id
  name
  description
  did_user_applied: applicants(where: {user_id: {_eq: $user_id}}) {
    user_id
  }
  role_type {
    name
  }
  ...RoleRequirements
}
    ${RoleRequirementsFragmentDoc}`;
export const AuditionDetailsFragmentDoc = gql`
    fragment AuditionDetails on audition {
  id
  user_id
  user {
    ...TalentCard
  }
  name
  description
  created_at
  company_name
  city {
    name
  }
  audition_type {
    name
  }
  audition_tags {
    tag {
      name
    }
  }
  roles {
    ...RoleDetails
  }
}
    ${TalentCardFragmentDoc}
${RoleDetailsFragmentDoc}`;
export const PhysicalAttributesFragmentDoc = gql`
    fragment PhysicalAttributes on physical_attribute {
  age
  body_type {
    name
  }
  ethnicity {
    name
  }
  eye_color {
    name
  }
  gender {
    id
    name
  }
  hair_color {
    name
  }
  height
}
    `;
export const UserProfileFragmentDoc = gql`
    fragment UserProfile on user {
  name
  created_at
  city {
    name
  }
  profile_picture
  user_type {
    name
  }
  physical_attribute {
    ...PhysicalAttributes
  }
}
    ${PhysicalAttributesFragmentDoc}`;
export const ApplyAuditionDocument = gql`
    mutation ApplyAudition($applicant_input: applicant_insert_input!) {
  insert_applicant_one(object: $applicant_input) {
    id
  }
}
    `;
export type ApplyAuditionMutationFn = Apollo.MutationFunction<ApplyAuditionMutation, ApplyAuditionMutationVariables>;

/**
 * __useApplyAuditionMutation__
 *
 * To run a mutation, you first call `useApplyAuditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyAuditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyAuditionMutation, { data, loading, error }] = useApplyAuditionMutation({
 *   variables: {
 *      applicant_input: // value for 'applicant_input'
 *   },
 * });
 */
export function useApplyAuditionMutation(baseOptions?: Apollo.MutationHookOptions<ApplyAuditionMutation, ApplyAuditionMutationVariables>) {
        return Apollo.useMutation<ApplyAuditionMutation, ApplyAuditionMutationVariables>(ApplyAuditionDocument, baseOptions);
      }
export type ApplyAuditionMutationHookResult = ReturnType<typeof useApplyAuditionMutation>;
export type ApplyAuditionMutationResult = Apollo.MutationResult<ApplyAuditionMutation>;
export type ApplyAuditionMutationOptions = Apollo.BaseMutationOptions<ApplyAuditionMutation, ApplyAuditionMutationVariables>;
export const CreateAuditionDocument = gql`
    mutation CreateAudition($audition_input: audition_insert_input!) {
  insert_audition_one(object: $audition_input) {
    id
  }
}
    `;
export type CreateAuditionMutationFn = Apollo.MutationFunction<CreateAuditionMutation, CreateAuditionMutationVariables>;

/**
 * __useCreateAuditionMutation__
 *
 * To run a mutation, you first call `useCreateAuditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuditionMutation, { data, loading, error }] = useCreateAuditionMutation({
 *   variables: {
 *      audition_input: // value for 'audition_input'
 *   },
 * });
 */
export function useCreateAuditionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuditionMutation, CreateAuditionMutationVariables>) {
        return Apollo.useMutation<CreateAuditionMutation, CreateAuditionMutationVariables>(CreateAuditionDocument, baseOptions);
      }
export type CreateAuditionMutationHookResult = ReturnType<typeof useCreateAuditionMutation>;
export type CreateAuditionMutationResult = Apollo.MutationResult<CreateAuditionMutation>;
export type CreateAuditionMutationOptions = Apollo.BaseMutationOptions<CreateAuditionMutation, CreateAuditionMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($sender_id: Int!, $receiver_id: Int!, $content: String!) {
  insert_messages_one(object: {sender_id: $sender_id, receiver_id: $receiver_id, content: $content}) {
    id
    content
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      sender_id: // value for 'sender_id'
 *      receiver_id: // value for 'receiver_id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const ApplicantsByRoleIdDocument = gql`
    query ApplicantsByRoleId($role_id: Int!) {
  role(where: {id: {_eq: $role_id}}) {
    id
    applicants {
      user {
        ...TalentCard
      }
    }
  }
}
    ${TalentCardFragmentDoc}`;

/**
 * __useApplicantsByRoleIdQuery__
 *
 * To run a query within a React component, call `useApplicantsByRoleIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicantsByRoleIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicantsByRoleIdQuery({
 *   variables: {
 *      role_id: // value for 'role_id'
 *   },
 * });
 */
export function useApplicantsByRoleIdQuery(baseOptions?: Apollo.QueryHookOptions<ApplicantsByRoleIdQuery, ApplicantsByRoleIdQueryVariables>) {
        return Apollo.useQuery<ApplicantsByRoleIdQuery, ApplicantsByRoleIdQueryVariables>(ApplicantsByRoleIdDocument, baseOptions);
      }
export function useApplicantsByRoleIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplicantsByRoleIdQuery, ApplicantsByRoleIdQueryVariables>) {
          return Apollo.useLazyQuery<ApplicantsByRoleIdQuery, ApplicantsByRoleIdQueryVariables>(ApplicantsByRoleIdDocument, baseOptions);
        }
export type ApplicantsByRoleIdQueryHookResult = ReturnType<typeof useApplicantsByRoleIdQuery>;
export type ApplicantsByRoleIdLazyQueryHookResult = ReturnType<typeof useApplicantsByRoleIdLazyQuery>;
export type ApplicantsByRoleIdQueryResult = Apollo.QueryResult<ApplicantsByRoleIdQuery, ApplicantsByRoleIdQueryVariables>;
export const AppliedAuditionsDocument = gql`
    query AppliedAuditions($uid: Int!) {
  audition(where: {roles: {applicants: {user_id: {_eq: $uid}}}}) {
    ...AuditionCard
  }
}
    ${AuditionCardFragmentDoc}`;

/**
 * __useAppliedAuditionsQuery__
 *
 * To run a query within a React component, call `useAppliedAuditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppliedAuditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppliedAuditionsQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useAppliedAuditionsQuery(baseOptions?: Apollo.QueryHookOptions<AppliedAuditionsQuery, AppliedAuditionsQueryVariables>) {
        return Apollo.useQuery<AppliedAuditionsQuery, AppliedAuditionsQueryVariables>(AppliedAuditionsDocument, baseOptions);
      }
export function useAppliedAuditionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppliedAuditionsQuery, AppliedAuditionsQueryVariables>) {
          return Apollo.useLazyQuery<AppliedAuditionsQuery, AppliedAuditionsQueryVariables>(AppliedAuditionsDocument, baseOptions);
        }
export type AppliedAuditionsQueryHookResult = ReturnType<typeof useAppliedAuditionsQuery>;
export type AppliedAuditionsLazyQueryHookResult = ReturnType<typeof useAppliedAuditionsLazyQuery>;
export type AppliedAuditionsQueryResult = Apollo.QueryResult<AppliedAuditionsQuery, AppliedAuditionsQueryVariables>;
export const AuditionByIdDocument = gql`
    query AuditionById($id: Int!, $user_id: Int!) {
  audition_by_pk(id: $id) {
    ...AuditionDetails
  }
}
    ${AuditionDetailsFragmentDoc}`;

/**
 * __useAuditionByIdQuery__
 *
 * To run a query within a React component, call `useAuditionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuditionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuditionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAuditionByIdQuery(baseOptions?: Apollo.QueryHookOptions<AuditionByIdQuery, AuditionByIdQueryVariables>) {
        return Apollo.useQuery<AuditionByIdQuery, AuditionByIdQueryVariables>(AuditionByIdDocument, baseOptions);
      }
export function useAuditionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuditionByIdQuery, AuditionByIdQueryVariables>) {
          return Apollo.useLazyQuery<AuditionByIdQuery, AuditionByIdQueryVariables>(AuditionByIdDocument, baseOptions);
        }
export type AuditionByIdQueryHookResult = ReturnType<typeof useAuditionByIdQuery>;
export type AuditionByIdLazyQueryHookResult = ReturnType<typeof useAuditionByIdLazyQuery>;
export type AuditionByIdQueryResult = Apollo.QueryResult<AuditionByIdQuery, AuditionByIdQueryVariables>;
export const GetAuditionTypeCountDocument = gql`
    query GetAuditionTypeCount {
  audition_type {
    name
    auditions_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useGetAuditionTypeCountQuery__
 *
 * To run a query within a React component, call `useGetAuditionTypeCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditionTypeCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditionTypeCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuditionTypeCountQuery(baseOptions?: Apollo.QueryHookOptions<GetAuditionTypeCountQuery, GetAuditionTypeCountQueryVariables>) {
        return Apollo.useQuery<GetAuditionTypeCountQuery, GetAuditionTypeCountQueryVariables>(GetAuditionTypeCountDocument, baseOptions);
      }
export function useGetAuditionTypeCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditionTypeCountQuery, GetAuditionTypeCountQueryVariables>) {
          return Apollo.useLazyQuery<GetAuditionTypeCountQuery, GetAuditionTypeCountQueryVariables>(GetAuditionTypeCountDocument, baseOptions);
        }
export type GetAuditionTypeCountQueryHookResult = ReturnType<typeof useGetAuditionTypeCountQuery>;
export type GetAuditionTypeCountLazyQueryHookResult = ReturnType<typeof useGetAuditionTypeCountLazyQuery>;
export type GetAuditionTypeCountQueryResult = Apollo.QueryResult<GetAuditionTypeCountQuery, GetAuditionTypeCountQueryVariables>;
export const AuditionsDocument = gql`
    query Auditions($uid: Int!) {
  audition(limit: 5, order_by: {created_at: desc}, where: {user_id: {_neq: $uid}}) {
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
 *      uid: // value for 'uid'
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
export const MessagesDocument = gql`
    query Messages($uid: Int!) {
  user_by_pk(id: $uid) {
    messagesBySenderId(distinct_on: receiver_id) {
      receiver_id
      userByReceiverId {
        ...TalentCard
      }
    }
    messagesByReceiverId(distinct_on: sender_id) {
      sender_id
      userBySenderId {
        ...TalentCard
      }
    }
  }
}
    ${TalentCardFragmentDoc}`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, baseOptions);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, baseOptions);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const PostedAuditionsDocument = gql`
    query PostedAuditions($uid: Int!) {
  audition(where: {user_id: {_eq: $uid}}, order_by: {created_at: desc}) {
    ...AuditionCard
  }
}
    ${AuditionCardFragmentDoc}`;

/**
 * __usePostedAuditionsQuery__
 *
 * To run a query within a React component, call `usePostedAuditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostedAuditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostedAuditionsQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function usePostedAuditionsQuery(baseOptions?: Apollo.QueryHookOptions<PostedAuditionsQuery, PostedAuditionsQueryVariables>) {
        return Apollo.useQuery<PostedAuditionsQuery, PostedAuditionsQueryVariables>(PostedAuditionsDocument, baseOptions);
      }
export function usePostedAuditionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostedAuditionsQuery, PostedAuditionsQueryVariables>) {
          return Apollo.useLazyQuery<PostedAuditionsQuery, PostedAuditionsQueryVariables>(PostedAuditionsDocument, baseOptions);
        }
export type PostedAuditionsQueryHookResult = ReturnType<typeof usePostedAuditionsQuery>;
export type PostedAuditionsLazyQueryHookResult = ReturnType<typeof usePostedAuditionsLazyQuery>;
export type PostedAuditionsQueryResult = Apollo.QueryResult<PostedAuditionsQuery, PostedAuditionsQueryVariables>;
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
export const TalentsDocument = gql`
    query Talents($filter: user_bool_exp) {
  user(where: {user_type_id: {_lt: 5}, _and: [$filter]}) {
    ...TalentCard
  }
}
    ${TalentCardFragmentDoc}`;

/**
 * __useTalentsQuery__
 *
 * To run a query within a React component, call `useTalentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTalentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTalentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTalentsQuery(baseOptions?: Apollo.QueryHookOptions<TalentsQuery, TalentsQueryVariables>) {
        return Apollo.useQuery<TalentsQuery, TalentsQueryVariables>(TalentsDocument, baseOptions);
      }
export function useTalentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TalentsQuery, TalentsQueryVariables>) {
          return Apollo.useLazyQuery<TalentsQuery, TalentsQueryVariables>(TalentsDocument, baseOptions);
        }
export type TalentsQueryHookResult = ReturnType<typeof useTalentsQuery>;
export type TalentsLazyQueryHookResult = ReturnType<typeof useTalentsLazyQuery>;
export type TalentsQueryResult = Apollo.QueryResult<TalentsQuery, TalentsQueryVariables>;
export const UserByIdDocument = gql`
    query UserById($uid: Int!) {
  user(where: {id: {_eq: $uid}}) {
    ...UserProfile
  }
}
    ${UserProfileFragmentDoc}`;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;
export const UserNameByIdDocument = gql`
    query UserNameById($uid: Int!) {
  user(where: {id: {_eq: $uid}}) {
    name
    profile_picture
  }
}
    `;

/**
 * __useUserNameByIdQuery__
 *
 * To run a query within a React component, call `useUserNameByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNameByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNameByIdQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useUserNameByIdQuery(baseOptions?: Apollo.QueryHookOptions<UserNameByIdQuery, UserNameByIdQueryVariables>) {
        return Apollo.useQuery<UserNameByIdQuery, UserNameByIdQueryVariables>(UserNameByIdDocument, baseOptions);
      }
export function useUserNameByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserNameByIdQuery, UserNameByIdQueryVariables>) {
          return Apollo.useLazyQuery<UserNameByIdQuery, UserNameByIdQueryVariables>(UserNameByIdDocument, baseOptions);
        }
export type UserNameByIdQueryHookResult = ReturnType<typeof useUserNameByIdQuery>;
export type UserNameByIdLazyQueryHookResult = ReturnType<typeof useUserNameByIdLazyQuery>;
export type UserNameByIdQueryResult = Apollo.QueryResult<UserNameByIdQuery, UserNameByIdQueryVariables>;
export const ConversationDocument = gql`
    subscription Conversation($uid: Int!, $other_uid: Int!) {
  messages(where: {_or: [{_and: [{sender_id: {_eq: $uid}}, {receiver_id: {_eq: $other_uid}}]}, {_and: [{sender_id: {_eq: $other_uid}}, {receiver_id: {_eq: $uid}}]}]}, order_by: {created_at: asc}) {
    sender_id
    content
    created_at
  }
}
    `;

/**
 * __useConversationSubscription__
 *
 * To run a query within a React component, call `useConversationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConversationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationSubscription({
 *   variables: {
 *      uid: // value for 'uid'
 *      other_uid: // value for 'other_uid'
 *   },
 * });
 */
export function useConversationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ConversationSubscription, ConversationSubscriptionVariables>) {
        return Apollo.useSubscription<ConversationSubscription, ConversationSubscriptionVariables>(ConversationDocument, baseOptions);
      }
export type ConversationSubscriptionHookResult = ReturnType<typeof useConversationSubscription>;
export type ConversationSubscriptionResult = Apollo.SubscriptionResult<ConversationSubscription>;
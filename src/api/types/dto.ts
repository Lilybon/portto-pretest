export interface Pagination {
  limit: number
  offset: number
}

export interface MemberListDTO extends Pagination {
  format: string
  owner: string
}
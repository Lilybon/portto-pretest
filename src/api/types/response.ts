export interface MemberListRES {
  assets: MemberDetailRES[]
}

export interface MemberDetailRES {
  id: number
  token_id: string
  image_url: string
  name: string
  description: string
  permalink: string,
  collection: Collection
  asset_contract: AssetContract
  [key: string]: any
}

interface Collection {
  name: string
  [key: string]: any
}

interface AssetContract {
  address: string
  [key: string]: any
}
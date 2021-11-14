import axios from 'axios';
import {
  MemberListDTO,
  MemberDetailRES
} from '@/api/types';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_SCHEME + process.env.VUE_APP_BASE_API_HOST + process.env.VUE_APP_BASE_API,
});

instance.interceptors.response.use(response => response.data);

const fetchAssetList = (params: MemberListDTO): Promise<MemberDetailRES[]> => instance.get('/v1/assets/', { params });

const fetchAssetDetail = (contractAddress: string, tokenId: string): Promise<MemberDetailRES> => instance.get(`/v1/asset/${contractAddress}/${tokenId}`);

export default {
  fetchAssetList,
  fetchAssetDetail
};
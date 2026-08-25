import { Injectable } from '@nestjs/common';
import { CiCdModel } from '../domain/ci_cd_model';
import axios from 'axios';

@Injectable()
export class CiCdRepository {
  async getCiCdInfo(): Promise<CiCdModel> {
    const response = await axios.get('https://api.example.com/ci_cd_info');
    return response.data;
  }
}
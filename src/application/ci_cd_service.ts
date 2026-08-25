import { Injectable } from '@nestjs/common';
import { CiCdModel } from '../domain/ci_cd_model';
import { CiCdRepository } from '../infrastructure/ci_cd_repository';

@Injectable()
export class CiCdService {
  constructor(private readonly ciCdRepository: CiCdRepository) {}

  async getCiCdInfo(): Promise<CiCdModel> {
    return this.ciCdRepository.getCiCdInfo();
  }
}
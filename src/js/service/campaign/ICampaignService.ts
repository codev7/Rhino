import { CampaignDto } from '../../model/dto/CampaignDto';
import { Service } from '../Service';

export interface ICampaignService extends Service {
    readCampaignList(): CampaignDto[];
}
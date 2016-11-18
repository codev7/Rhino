import CrudService from './CrudServiceZ';
import ScraperUserAgentDto from '../model/dtoZ/scraperUserAgent/ScraperUserAgentDto';
import * as http from './HttpUtil';

class ScraperUserAgentService extends CrudService<ScraperUserAgentDto, any> {
    constructor() {
        super('scraper-user-agents');
    }

    public async getSuggestions(): Promise<{ scraper_user_agents: ScraperUserAgentDto[] }> {
        return http.get<{ scraper_user_agents: ScraperUserAgentDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default ScraperUserAgentService;
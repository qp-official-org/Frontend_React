import {
    Api
} from './common.controller';

class questionApi extends Api {

    test = async () => {

        return this.get('/questions/test');
    }

    findOne = async (id) => {
        
        return this.get(`/report/question/${id}`, { content_type: 'application/json' });
    }
}

export const QuestionApi = new questionApi();
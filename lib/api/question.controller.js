import {
    Api
} from './common.controller';

class questionApi extends Api {

    test = async () => {

        return this.get('/questions/test');
    }

    // 단일질문조회
    findOne = async (id) => {
        
        return this.get(`/questions/${id}`, { content_type: 'application/w-www-form-urlencoded' });
    }

    // 질문목록조회
    findAll = async () => {
        return this.get('/questions', { content_type: 'application/w-www-form-urlencoded' });
    }

    uploadQuestion = async (data) => {
        return this.post('/questions', { data, content_type: 'multipart/form-data' });
    }
}

export const QuestionApi = new questionApi();
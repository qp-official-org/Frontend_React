// @ts-nocheck

import { Api } from "./common.controller";

class questionApi extends Api {

    test = async () => {

        return this.get('/questions/test');
    }

    // 단일질문조회
    findOne = async (id) => {

        return this.get(`/questions/${id}`, { content_type: 'application/w-www-form-urlencoded' });
    }

    // 질문목록조회
    findAll = async (page, size) => {
        return this.get(`/questions?page=${page}&size=${size}`, { content_type: 'application/w-www-form-urlencoded' });
    }

    uploadQuestion = async (data) => {
        console.log(data)
        return this.post('/questions', { data, content_type: 'application/json' });
    }
    //답변조회
    findParentAnswer = async (id, page, size) => {
        return this.get(`/answers/questions/${id}?page=${page}&size=${size}`, { content_type: "application/json" });
    }
}

export const QuestionApi = new questionApi();
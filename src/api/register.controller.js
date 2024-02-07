// @ts-nocheck

import { Api } from "./common.controller";

class registerApi extends Api {

    test = async () => {

        return this.get('/questions/test');
    }
    //해시태그조회
    findHashtag = async (data) => {

        return this.get('/hashtag/', { data, content_type: 'application/json' })
    }
    //해시태그업로드
    uploadHashtag = async (hashtag) => {

        return this.post('/hashtag/', { hashtag, content_type: 'application/json' })
    }
}

export const RegisterApi = new registerApi();
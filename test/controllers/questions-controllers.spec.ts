import request from 'supertest';
import { HttpStatus } from '../../utils/http_status';

import app from "../../app";
const GET_QUESTIONS_ROUTE = '/api/questions';

describe('Questions Controller', () => {
    describe('get questions screen', () => {
        it('/api/questions (GET) => 200', () => {
            return request(app).get(`${GET_QUESTIONS_ROUTE}/`).expect(HttpStatus.OK);
        });

    });
});
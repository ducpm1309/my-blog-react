import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();
// http://localhost:5000/posts

router.get('/', getPosts);

router.post('/', createPost);

router.post('/update', updatePost);

export default router;

// Express là framework của nodejs nó giúp cho chúng ta tạo các routing cho ứng dụng
// Mongoose tạo các model
// Nodemon giúp k cần khởi động lại server khi có sự thay đổi trong file js
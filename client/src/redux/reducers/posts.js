import { INIT_STATE } from '../../constant';
import { getPosts, getType, createPost, updatePost } from '../actions';

export default function postsReducers(state = INIT_STATE.posts, action) {    // function reducers luôn có 2 tham số là state và action
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,   // Giữ lại cái state trc đó
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,  // dữ liệu truyền dô action getPostSuccess
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}

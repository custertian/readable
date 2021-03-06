import * as ActionType from '../actions/constants'

/**
 * reducer 将指定我们 store 的形状，我们将初始状态粘贴到这里
 * 当 dispatch ALL_POSTS action 时，我们的 store 的状态如何变化
 */

const AllPostsReducer = (state=[], action) => {
  // const { data } = action

  switch (action.type) {
    case ActionType.ALL_POSTS:
      // console.log('$$ all posts', action.posts)
      // return {
      //   ...state, // 对象扩展语法，与之前的状态相同
      //   data,     // 修改状态
      // }
      // return action.posts
      return action.posts.data.filter(post=>post.deleted===false)

    case ActionType.ADD_NEW_POST:
      return Object.assign({}, state, action.newPost)

    case ActionType.DELETE_POST:
      // console.log('$$ delete posts', state)
      return Object.assign({}, state, {deleted: true})
      // return state.data.filter((post) => {
      //   return post.id !== action.postId
      // })

    case ActionType.VOTE:
      console.log('$$ reducer posts')
      const newState = { ...state }
      if(action.option==='upVote'){
        newState[action.postId]['voteScore'] = ++newState[action.postId]['voteScore']
      }else if(action.option==='downVote'){
        newState[action.postId]['voteScore'] = --newState[action.postId]['voteScore']
      }
      return newState

    case ActionType.CATEGORY_POSTS:
      return action.categoryPosts

    default:
      return state
  }
}

export default AllPostsReducer

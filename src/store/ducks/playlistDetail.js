export const Types = {
  GET_REQUEST: "playlistDetail/GET_REQUEST",
  GET_SUCCESS: "playlistDetail/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function playlistDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}

export const Creators = {
  getPlayListDetailRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getPlayListDetailSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};

export function state () {
  return {
    currentPage: '/'
  }
}

export const mutations = {
  SET_CURRENT_PAGE (state, page) {
    state.currentPage = page
  }
}

var initNavigation = {
  tab: 'TabOne'
}
const navigation = (state=initNavigation,action) => {
  switch (action.type) {
    case 'SWITCH_TAB':
      return {
        ...state,
        tab: action.tab
      }
    default:
      return initNavigation
  }
}

export default navigation

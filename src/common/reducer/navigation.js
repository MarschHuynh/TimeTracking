var initNavigation = {
  tab: 'TimeLine'
}
const navigation = (state=initNavigation,action) => {

  switch (action.type) {
    case 'SWITCH_TAB':
      return {
        tab: action.tab
      }
    default:
      return state
  }
}

export default navigation

var initTimeLine = {
  size = 3,
  data = [
    {"id":1,title:"First",time:"12:10",content:"This is a first timeline item",}
    {"id":2,title:"Second",time:"13:10",content:"This is a second timeline item",}
    {"id":3,title:"third",time:"14:10",content:"This is a third timeline item",}
  ]
}
const timeline = (state = initTimeLine, action) =>{
  switch action.type {
    case "ADD_ITEM":
      return {
        ...state,
        {id,'title':action.title,'time':action.time,'content':action.content}
      }
  }
}

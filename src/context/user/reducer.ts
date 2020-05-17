export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SAMPLE':
      return {
        ...state,
      }

    default:
      return state
  }
}

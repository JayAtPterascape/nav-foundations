import { isArray, reduce } from 'lodash'

const screens = [
  'Main',
  [
    ['Auth', ['Login', 'Create_Account']],
    'Calendar',
    'Event',
    ['Household', ['Display', 'Add_Member', 'Edit', 'Member_Profile']],
    'MenuScreen',
    'Messages',
    ['OnBoard', ['1', '2', '3']],
    ['Profile', ['Display', 'Edit', 'Other_Household']],
    'Referee',
    [
      'Teams',
      [
        'Teams',
        ['Team', ['Team', 'Calendar', 'Messages', 'Members']],
        'Member_Profile',
        'Conversation'
      ]
    ]
  ]
]

// A stack in this sense is a navigator, or group of screens,
// regardless of whether its behavior is a stack, drawer, tabs, etc.
// A screen is an entry in the stack.

const reduceStackOfScreens = (stackOfScreens, initialObj) => {
  const [stackName, subScreens] = stackOfScreens
  return reduce(
    subScreens,
    (obj, subScreen) => {
      const isNested = isArray(subScreen)
      const screenName = isNested ? subScreen[0] : subScreen
      const value = `${stackName}_${screenName}`
      const result = {
        ...obj,
        [value.toUpperCase()]: value
      }
      return isNested ? reduceStackOfScreens(subScreen, result) : result
    },
    initialObj
  )
}

export const screenNames = reduceStackOfScreens(screens, {})

console.log('screenNames', screenNames)

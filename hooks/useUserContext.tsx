import { useState, useCallback } from 'react'
import { userContextProps, USER_STATE_DEFAULT } from '../context/UserContext'
import { set, COOKIE_NAME_LANGUAGE, COOKIE_NAME_ADULT_FILTER, COOKIE_NAME_NEW_TAB, COOKIE_NAME_SEARCH_COUNT } from '../helpers/_cookies'

const cookiesName = {
  numOfSearches: COOKIE_NAME_SEARCH_COUNT,
  language: COOKIE_NAME_LANGUAGE,
  adultContentFilter: COOKIE_NAME_ADULT_FILTER,
  openInNewTab: COOKIE_NAME_NEW_TAB,
}

export const useUserContext = (): userContextProps => {
  const [userState, setUserContext] = useState(USER_STATE_DEFAULT)

  const setNextUserState = useCallback((nextState): void => {
    setUserContext((prevState) => {
      const newState = {
        ...prevState,
        ...nextState,
      }

      for (const key in nextState) {
        set(cookiesName[key], prevState[key])
      }

      return newState
    })
  }, [])

  return {
    userState,
    setNextUserState,
  }
}

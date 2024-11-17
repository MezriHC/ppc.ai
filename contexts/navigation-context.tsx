"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

type NavigationState = {
  currentPath: string
  currentSection: string
  currentSubSection: string
}

type NavigationContextType = NavigationState & {
  updateNavigation: (path: string, section: string, subSection: string) => void
  isReady: boolean
}

const defaultState: NavigationState = {
  currentPath: '',
  currentSection: '',
  currentSubSection: '',
}

// Load initial state from localStorage if available
const getInitialState = (): NavigationState => {
  if (typeof window === 'undefined') {
    return defaultState
  }

  try {
    const savedState = localStorage.getItem('navigationState')
    if (savedState) {
      const parsed = JSON.parse(savedState)
      return {
        currentPath: parsed.currentPath || '',
        currentSection: parsed.currentSection || '',
        currentSubSection: parsed.currentSubSection || '',
      }
    }
  } catch (error) {
    console.error('Error loading navigation state:', error)
  }

  return defaultState
}

export const NavigationContext = React.createContext<NavigationContextType>({
  ...defaultState,
  updateNavigation: () => {},
  isReady: false,
})

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<NavigationState>(defaultState)
  const [isReady, setIsReady] = React.useState(false)

  // Initialize state from localStorage on mount
  React.useEffect(() => {
    const initialState = getInitialState()
    setState(initialState)
    setIsReady(true)
  }, [])

  // Update localStorage when state changes
  React.useEffect(() => {
    if (isReady && state.currentPath && typeof window !== 'undefined') {
      try {
        localStorage.setItem('navigationState', JSON.stringify(state))
      } catch (error) {
        console.error('Error saving navigation state:', error)
      }
    }
  }, [state, isReady])

  const updateNavigation = React.useCallback((path: string, section: string, subSection: string) => {
    if (
      path !== state.currentPath ||
      section !== state.currentSection ||
      subSection !== state.currentSubSection
    ) {
      setState({
        currentPath: path,
        currentSection: section,
        currentSubSection: subSection,
      })
    }
  }, [state])

  const value = React.useMemo(
    () => ({
      ...state,
      updateNavigation,
      isReady,
    }),
    [state, updateNavigation, isReady]
  )

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = React.useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}

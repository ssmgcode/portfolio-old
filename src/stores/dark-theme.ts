import { writable } from 'svelte/store'

const darkThemeStore = () => {
  const { subscribe, update } = writable<boolean>(getStorageDarkTheme())

  return {
    subscribe,
    toggleDarkModeTheme: () => {
      update((isDarkThemeTurnedOn) => {
        setStorageDarkTheme(!isDarkThemeTurnedOn)
        return !isDarkThemeTurnedOn
      })
    },
  }
}

/**
 * Saves the is dark theme turned on status to Local Storage
 * @param {boolean} isDarkThemeTurnedOn boolean that determines if dark mode is turned on or turned off
 * @returns {void}
 */
const setStorageDarkTheme = (isDarkThemeTurnedOn: boolean): void => {
  localStorage.setItem('dark-theme', JSON.stringify(isDarkThemeTurnedOn))
}

/**
 * Gets last dark theme status from Local Storage
 * @returns {boolean} Returns a boolean that determines if dark theme was turned on last time
 */
const getStorageDarkTheme = (): boolean => {
  const wasDarkThemeTurnedOnLastTime = localStorage.getItem('dark-theme')
  const isDarkThemeTurnedOn: boolean =
    JSON.parse(wasDarkThemeTurnedOnLastTime) || false

  return isDarkThemeTurnedOn
}

const isDarkModeTurnedOn = darkThemeStore()

export default isDarkModeTurnedOn

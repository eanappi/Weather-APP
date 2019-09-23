const useBackgroundTimeOfDay = () => {
  const hours = new Date().getHours()

  const timeOfDayClass = (
    hours <= 12 ? 'has-dawn-background'
    :
    hours <= 16 ? 'has-midday-background'
    :
    hours <= 20 ? 'has-afternoon-background'
    :
    hours <= 0 ? 'has-night-background' : ''
  )

  return timeOfDayClass
}

export default useBackgroundTimeOfDay()
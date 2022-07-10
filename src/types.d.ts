export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'poor' | 'good' | 'ok'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/**
 * Los dos tipos de datos abajo son los más utiles de typescript
 * porque nos permiten omitir informacion sensible sin tener que
 * duplicar tipos
 *
 * Con uno seleccionamos los datos que queremos
 * Con el otro seleccionamos los datos que no queremos
 */
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))
}

export const addEntry = (): undefined => undefined

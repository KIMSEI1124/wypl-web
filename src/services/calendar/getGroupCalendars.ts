import { axiosWithAccessToken } from '../axios';

import { API_PATH } from '@/constants/Path.ts';

export interface GetGroupCalendarsParams {
  calendarType: CalenderType;
  groupId: number;
  date: string;
}

export const getGroupCalendars = async ({ calendarType, groupId, date }: GetGroupCalendarsParams) => {
  const { data } = await axiosWithAccessToken.get<CalendarsResponse>(`${API_PATH.CALENDAR.BASE}/${calendarType}/${groupId}`, {
    params: { date },
  });

  return data;
};
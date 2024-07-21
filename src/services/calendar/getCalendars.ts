import { API_PATH } from '@/constants/Path.ts';
import { axiosWithAccessToken } from '@/services/axios';

export interface GetCalendarsParams {
  date: string;
}

export const getCalendars = async (calendarType: CalenderType, params: GetCalendarsParams) => {
  const { data } = await axiosWithAccessToken.get<BaseResponse<CalendarsResponse>>(`${API_PATH.CALENDAR.BASE}/${calendarType}`, { params });

  return data.body;
};
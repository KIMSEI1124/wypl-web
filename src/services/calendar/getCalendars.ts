import { API_PATH } from '@/constants/Path.ts';
import { axiosWithAccessToken } from '@/services/axios';

export interface GetCalendarsParams {
  calendarType: CalenderType;
  date: string;
}

export const getCalendars = async ({ calendarType, date }: GetCalendarsParams) => {
  const { data } = await axiosWithAccessToken.get<BaseResponse<CalendarsResponse>>(`${API_PATH.CALENDAR.BASE}/${calendarType}`, {
    params: {
      date,
    },
  });

  return data.body;
};
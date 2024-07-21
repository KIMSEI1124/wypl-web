import { axiosWithAccessToken } from '@/services/axios';

export const getCalendars = async (type: 'DAY' | 'WEEK' | 'MONTH', params: string) => {
  const { data } = await axiosWithAccessToken.get<CalendarsResponse>(`/calendar/v1/calendars/${type}`, { params });

  return data;
};
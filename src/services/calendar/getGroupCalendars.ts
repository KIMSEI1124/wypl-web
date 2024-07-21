import { axiosWithAccessToken } from '../axios';

export const getGroupCalendars = async (type: string, groupId: number, date: string) => {
  const { data } = await axiosWithAccessToken.get<CalendarsResponse>(`/calendar/v1/calendars/${type}/${groupId}?date=${date}`);

  return data;
};
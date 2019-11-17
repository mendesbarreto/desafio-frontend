import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const dateFormat = timestamp => {
  let weekday = format(new Date(timestamp * 1000), 'eeee', {
    locale: pt,
  });
  weekday =
    weekday.charAt(0).toUpperCase() + weekday.slice(1).replace(/-feira/g, '');
  return weekday;
};

import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function dateFormatter(dateString) {
    const date = new Date(dateString);
    return format(date, "dd MMMM yyyy HH:mm 'WIB'", { locale: id });
}

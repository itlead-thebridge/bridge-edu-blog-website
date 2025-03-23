import { parseISO, format } from "date-fns";

type LongDateFormatterProperties={
  dateString: string;
};

export default function LongDateFormatter(props:LongDateFormatterProperties) {
  const date = parseISO(props.dateString);
  return <time dateTime={props.dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};
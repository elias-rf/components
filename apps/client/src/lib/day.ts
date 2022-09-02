import day from "dayjs";
import "dayjs/locale/pt-br";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

day.extend(customParseFormat);
day.extend(advancedFormat);
day.extend(utc);
day.locale("pt-br");

export { day };

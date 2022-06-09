import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt-br";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.locale("pt-br");

export default dayjs;

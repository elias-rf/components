import advancedFormat from "dayjs/plugin/advancedFormat.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import "dayjs/locale/pt-br.js";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.locale("pt-br");

export default dayjs;

import useListener from "../../lib/hooks/use-listener";
import useEmit from "../../lib/hooks/use-emit";
import knexRequests from "../../lib/knex/knex-request";

interface DbAdapterProps {
  db: string;
  name: string;
  cache?: boolean;
}

export default function DbAdapter({ db, name, cache = true }: DbAdapterProps) {
  const emitter = useEmit(name);
  useListener(name, ({ key, query, noCache }) => {
    knexRequests(db, query, noCache || !cache).then((data) => {
      emitter({ key, data });
    });
  });

  return null;
}

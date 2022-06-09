import React from "react";
import knexRequest from "../../lib/knex/knex-request";
import Page from "@/features/ui/page";
import PageTitle from "@/features/ui/page-title";
import { Textbox, Button } from "@/features/ui/form";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/pt";

export default function Sql() {
  const [db, setDb] = React.useState("oftalmo");
  const [sql, setSql] = React.useState({ from: "", limit: 100 });
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    const dbStor = localStorage.getItem("db");
    const sqlStor = localStorage.getItem("sql");
    if (dbStor) {
      setDb(dbStor);
    }
    if (sqlStor) {
      setSql(JSON.parse(sqlStor));
    }
  }, []);

  async function handleRequest() {
    console.log(db, sql);
    const res = await knexRequest(db, sql);
    setResponse(res);
  }

  function handleDb(e: any) {
    setDb(e.value);
    localStorage.setItem("db", e.value);
  }

  function handleSql(e: any) {
    setSql(e.jsObject);
    localStorage.setItem("sql", JSON.stringify(e.jsObject));
  }

  return (
    <Page>
      <PageTitle title="SQL" />
      <hr />
      <label>
        BD <Textbox field={"db"} value={db} onChange={handleDb} />
      </label>
      <br />
      <label>SQL</label>
      <JSONInput
        height="550px"
        width="100%"
        style={{ body: { fontSize: "1rem" } }}
        locale={locale}
        placeholder={sql}
        onChange={handleSql}
      />
      <br />
      <Button onClick={handleRequest}>Run</Button>
      <JSONInput
        height="550px"
        width="100%"
        style={{ body: { fontSize: "1rem" } }}
        locale={locale}
        placeholder={response}
      />
    </Page>
  );
}

/*
{"from":"phonebook"}
*/

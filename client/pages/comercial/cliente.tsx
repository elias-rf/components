import React from "react";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Tab, Tabs } from "../../components/tabs";
import { TTabsEvent } from "../../components/tabs/tabs.types";
import { ClienteForm } from "../../features/cliente/cliente_form";
import {
  ClienteList,
  TClienteListEvent,
} from "../../features/cliente/cliente_list";
import { ClienteQuantidade } from "../../features/cliente/cliente_quantidade";
import { ClienteValor } from "../../features/cliente/cliente_valor";
import { ClienteValorMedio } from "../../features/cliente/cliente_valor_medio";

export default function Cliente() {
  const [tabActive, setTabActive] = React.useState("form");
  const [selected, setSelected] = React.useState([]);
  const [where, setWhere] = React.useState([]);
  const [order, setOrder] = React.useState([]);

  function handleEvent(event: TClienteListEvent) {
    if (event.event === "onSelectEvent") {
      setSelected(event.value);
    }
    if (event.event === "onWhereEvent") {
      setWhere(event.value);
    }
    if (event.event === "onOrderEvent") {
      setOrder(event.value);
    }
  }
  function handleOnChangeTabs(event: TTabsEvent) {
    console.log(event);
    setTabActive(event.value);
  }

  return (
    <Page>
      <PageTitle title="Cliente" />
      <hr />
      <section className="flex flex-col gap-2">
        <Tabs
          active={tabActive}
          onChangeEvent={handleOnChangeTabs}
        >
          <Tab
            id="form"
            title="Cadastro"
          >
            <ClienteForm selected={selected} />
          </Tab>
          <Tab
            id="quantidade"
            title="Quantidade"
          >
            <ClienteQuantidade id={selected} />
          </Tab>
          <Tab
            id="faturamento"
            title="Faturamento"
          >
            <ClienteValor id={selected} />
          </Tab>
          <Tab
            id="preco"
            title="Preço Médio"
          >
            <ClienteValorMedio id={selected} />
          </Tab>
        </Tabs>
        <div className="mt-4">
          <ClienteList
            selected={selected}
            where={where}
            order={order}
            onSelectEvent={handleEvent}
            onWhereEvent={handleEvent}
            onOrderEvent={handleEvent}
          />
        </div>
      </section>
    </Page>
  );
}

import CreateForm from "./create-form";
import classNames from "classnames";

export default async function CreateTicket() {
  return (
    <main>
      <h2 className={classNames('text-center')}>Open a New Ticket</h2>
      <CreateForm/>
    </main>
  )
}

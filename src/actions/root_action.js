import { getContacts, createContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
  }

  export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts };
  }
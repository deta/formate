import { j as json, e as error } from './index2-bebb4fa4.js';
import { d as db } from './database-0f0c5388.js';
import 'deta';

const GET = async () => {
  const forms = await db.forms.fetch();
  return json({ forms: forms.items });
};
const POST = async ({ request }) => {
  const data = await request.json();
  if (!data)
    throw error(400, { message: "Body is not specified" });
  const form = await db.forms.insert(data);
  return json({ success: true, form });
};

export { GET, POST };
//# sourceMappingURL=_server.ts-59bc1693.js.map

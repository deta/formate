import { j as json, e as error } from './index2-bebb4fa4.js';
import { d as db } from './database-0f0c5388.js';
import 'deta';

const GET = async ({ params }) => {
  const key = params.key;
  const form = await db.forms.get(key);
  return json({ form });
};
const PUT = async ({ request, params }) => {
  const key = params.key;
  const data = await request.json();
  if (!data)
    throw error(400, { message: "Body is not specified" });
  await db.forms.delete(key);
  const form = await db.forms.insert(data, key);
  return json({ form });
};
const DELETE = async ({ params }) => {
  await db.forms.delete(params.key);
  return json({ success: true });
};

export { DELETE, GET, PUT };
//# sourceMappingURL=_server.ts-dd45f2eb.js.map

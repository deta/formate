import { Deta } from 'deta';

const DETA_PROJECT_KEY = "a0x3WWxY2FyE_uzAW6fi8YjBhPHxkg7idRxPY1dVgqPzY";
const deta = Deta(process.env.DETA_PROJECT_KEY || DETA_PROJECT_KEY);
const db = {
  forms: deta.Base("forms"),
  publications: deta.Base("publications"),
  submissions: deta.Base("submissions")
};

export { db as d };
//# sourceMappingURL=database-0f0c5388.js.map

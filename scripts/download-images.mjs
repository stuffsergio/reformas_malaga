import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const dest = path.join(process.cwd(), "public", "images");
await mkdir(dest, { recursive: true });

const files = {
  "hero.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcLVXOvqFtaSjDjVzLea7g2a3bhRcUlSvJ3Dyj1SWwhJ430JEBTEWe0iBERiokUXqOsOZzYv4zt5mG5RAaCT6fg9w4876FPXLzdwOcmVvAV08CpItmNs8HI_V7bUwkzIS_GnnNJxaWGFUBJNElMsUFqVRLqzmnBKcL8e19jgS-8XEh2UmL8HAjQJMdRf77z6n7PTpf04gPB4CF9rsWK144_0GtZgPhlnC58C49KSs",
  "tipo-vivienda.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAd9qKvZpldzKiEEPFYROO_76Q5H8w2HXiVlf7muye6pSPsd-_3Ft7idXtX6okhoohlmQ8wJbF_jKeAsQ1NP0YNhddhTjADr5ZM0NoIXSKsmJnZSd-L7Lp-_z1vPamtSa8M7TbP0YaPlRgtHB_puo03Naysrj4gNXksVgWDxgex78qkMDwdYvKiRqnmlbuy6cHmdZQkshD1Vz1coVbkN_yayBqdoUZGNB_p9zt3Dn4",
  "tipo-fachada.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu0qu_exPLNFbHAudu3kq4Jj-wIFYJQDH_SUdMobx3eymLt4sU_hgxvdo6mDh21IEYrFuS0c43VxM_f5mmYqO79bT2TcFiGU0NcPNS039U7AWvBlWrSRiXtJM-PVzZwBjIXPLXqCjXG3PqEYv2TN69TmhgrWhVnqi_0YzMEcOiLzM_gXA9NeswPxi5107x_O6RW0XC0rMHVBuSw6fV60UfgJ8OwgS-VwV2EguAQ8",
  "tipo-cubierta.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgQ-bdhea3QDpxRu1pHnNRp6hiIZOav-vuC1yFhrTsAm8IEO_4DobiGPVFvK_OsBSM0WyP2fSrhauU5cZVw6kaK-gzCtZGZKlKKsu6bo1HLkYO2uZLd4rqs-HBWHY7TXu5oA8ZoH0j4C_Toh0LOqKIl8rcPl4hxTk7AIKxIIJ4ehL5G46Tdp2Wwt9ihz9iy6mSrQkYGOlKZ5HLBfjU6C4fxM5un2j67IayjS4Xfm4",
  "tipo-comunidad.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FEnELt1F2v8C6yOy0IL_zsvKIJD_KuDvsdz41Weh5kOOS5ZlFv5eOakBlub65RKi-jtr7zN31NZ6KhcCQlE1FR_PszPR9l61J8a3Qv62M4i_CTUcnX_lBWwNiGP98Z7mnIxj4In_T7_v0HD9svTcgiVyJkeBoRSNm5fH-gdixZeZWYFkieC5FgLbznZE9fusMU-WorddEDjLl4bCCrQssh_aHc09Ro1pWyanMt8",
  "tipo-nave.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAC69RPOpdh3sMh6_XjKqReLXuIValz14cA3nj-Zf5giG511cUt9RES1jMCleRAUbFrYdqeV7Zi7XlggCvecY7dGkJix6luZB44iPCrWsmPmVSkMXltM4g3JKHwKBP9k1QuLz_1rApu1bvzPUyvWgumYI2zlBl2TI4y_BEgAElPqSeMwk_mp07Ccp0ZtK-Czx2AQBgni52sU-G-SkvP8lxy_hLZnYVi1_FXm8DIK88",
  "malagueta-despues.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1M07XYebWiNmbMQZ2mw48Vog6-WxF44g8RMLplSYnOIJ5aAh-Z2csreRpCcUuEAZHCtwQqiRwkeze2OB-4JYhL_Jbj9nlJbOuRg7gXEixbbJuNOi_Io628MN06DhzychgmPZTiz__ktk73RqfvwudX08LfzwBvDe18DNCTXjVqPKTxHcTFGPdaXRGLJxlnaVpvGs9ulCxXM4TgRgOxwKVCPJrfu-F3vrKKxVLv8",
  "malagueta-antes.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAebOZPTQec_u07lrifv7fASBnSnzYIpWtyTV1rs5Wh0W7uv3tLETqbmGXQKT_AGO91yHBRDkhyOvmopoHCKXQeNoCk2jJ4MTgkHEaUgztXvpEnJ-aeGWTM3Z4DLsne8gt5400Bv0jRZmwoZqEl3fgyYY2OGa9JvY5CSa4iCASaV6NSIpx9hr-d20Pn5MyRnOgNJ2BLt7NEiidUuYiNwQBG66qOcb5eD3k8XveKgds",
  "centro-despues.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC16UxLyU3kIKWyKfn46K582yvqu3N30pF5IeggvRKosA-F5Ra-iNAsccmYCddfgLLRY47vRo7VvaGNDo7don_QB9LT3W3oP0YJgcw_P725xDCQFpnuLZMjloXLvI_2XXUCoCbSfwSWE08BMvclfRDVU8A3a1E7hAvhBQryZ0F9ScDZtPVh3jTmkuGs86CqZFZGXhR1r_qudOuuPKeKyjw_6IoxgwGhbPPi8urEJkw",
  "centro-antes.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoU3Pd2MnhjhmJ_fF4fOfGxPyRVteG5-Q74IYr9hP_lU2PSuVntKZCIwPdSrkpgi7GeiFjAwUFKDbXCcZX2n8sfY_kYfG8OH02fnOGvzkKhnotvSUYCn_7_7Ryyai78tDbrP9iNLKfpEzz96p7yDWCkvyRkRUdT9XUAwMiUowQVFDM_nI2zVLeoLKMLLF6t7mbOPUHFEnHLojKcCZ7YCIgiDZrSXqsRprQAfHUYU",
  "limonar-despues.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-_C3YXW2F5pSdw4q-_JE-ZwDln-KOLzk2dUNi4rRS3cwE-DGfcUqGDFWR30A6UtlW9oy5rq_RVRUrThbYcs4RsbADgQjPUdhlgIsnmC59wJqrEoCUsroibgYsNdl2A1yuQqk0pZnWakBgwzZfHXCUdTsrqjbN7jRzfUnj_oZXSg5jZJNjJYLPmYVu5EUnFOtXKFB4Vuc4zsVch7Dzfq9rwg0Y9Q0myUeIzP9q-TY",
  "limonar-antes.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Kd7Jq2AQq4Zndo_REQxgrch64RavRv3bfDB8eZJHuySIJdJ0s3XktzofGn0OS0h36kZPgT6dVmFcYKrCQtVm3Dmz8vSCDOjbxViytefTXexnewCuHAF8ww-J7uWZaWVl4ulKFKBAMreSEUjg7T52P3DbbiKgW775nsFAkS0585M9kX7zzcIytalziGO1qxU55nTbbDiZuIe8bjuSXd9D1UxZs8_AZThPSd3jdcE",
  "testimonio.jpg":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQbl1ezRuuZ45nrkghqDk2vTyrBEYkdoxE3HmmfAs9wZ6it2X2P4oeWKRs-n9VdLzjmwKiWQkGGF3HjmIQjtmto4iJgK-TnzHjbs63nC895QdXHigS2jhPm6A9xNNrgJ9f_5Rz1E0MgSPTm24BnlVvOYI2Ws6pAjqucjmsQRMyOMie3g2T2bQxufymoXeMTrclGTD6yN3xcwCZdYmebXntJnQul82Dtxbc8VGgwWk",
};

for (const [name, url] of Object.entries(files)) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) throw new Error(`${name} ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(dest, name), buf);
  console.log(name, buf.length);
}

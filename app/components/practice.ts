async function getJSON<T extends {id:number}>(url: string): Promise<T> {
  const res = await fetch(url); // ① fetch
  return res.json();            // ② type flows out
}

type User = { id: string; name: string };

const user = await getJSON<User>("/api/user"); // ③ typed response
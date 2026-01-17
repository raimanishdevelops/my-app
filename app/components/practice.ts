type Success = { data: string };
type Failure = { error: string };

async function fetchData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // ② always fresh data (real-world pattern)
  });
  return res.json();
}



function handleResponse(res: Success | Failure) {
  if ("data" in res) {
    return res.data;
  }
  return res.error;
}


async function main() {
  const res = await fetchData();
  console.log(handleResponse(res));
}
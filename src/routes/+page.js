/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  console.log(params)
  const res = await fetch('http://10.0.0.50:5000')
  const data = await res.json()

  return data
}
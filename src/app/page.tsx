import Button from "@/components/ui/Button";
import { db } from "@/lib/db";


export default async function Home() {
  await db.set('hello', 'hello')


  return (
    <div>
      <h1>Hello World</h1>
      <Button>Press ME</Button>
    </div>

  )
}
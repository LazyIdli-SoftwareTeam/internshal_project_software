/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f7ssRG2Hfgp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-background rounded-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Leaderboard</h2>
          <Button onClick={() => setIsAddScoreOpen(true)}>Add Score</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground">
            <thead className="text-xs uppercase bg-muted">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Player
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">1</td>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4 text-right font-medium">10,000</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">2</td>
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4 text-right font-medium">9,500</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">3</td>
                <td className="px-6 py-4">Bob Johnson</td>
                <td className="px-6 py-4 text-right font-medium">9,000</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">4</td>
                <td className="px-6 py-4">Alice Williams</td>
                <td className="px-6 py-4 text-right font-medium">8,800</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">5</td>
                <td className="px-6 py-4">Tom Davis</td>
                <td className="px-6 py-4 text-right font-medium">8,600</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">6</td>
                <td className="px-6 py-4">Sarah Lee</td>
                <td className="px-6 py-4 text-right font-medium">8,400</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">7</td>
                <td className="px-6 py-4">Michael Chen</td>
                <td className="px-6 py-4 text-right font-medium">8,200</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">8</td>
                <td className="px-6 py-4">Emily Nguyen</td>
                <td className="px-6 py-4 text-right font-medium">8,000</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">9</td>
                <td className="px-6 py-4">David Kim</td>
                <td className="px-6 py-4 text-right font-medium">7,800</td>
              </tr>
              <tr className="bg-background hover:bg-muted transition-colors">
                <td className="px-6 py-4 font-medium">10</td>
                <td className="px-6 py-4">Jessica Patel</td>
                <td className="px-6 py-4 text-right font-medium">7,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-muted rounded-lg p-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm text-muted-foreground">
            <span className="pr-8">Congratulations to the top players! Keep up the great work.</span>
            <span className="pr-8">Join the leaderboard and show off your skills!</span>
            <span className="pr-8">New high scores added daily. Check back often for updates.</span>
          </div>
        </div>
      </div>
      <div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="score">Score</Label>
            <Input id="score" type="number" min="0" required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}
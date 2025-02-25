import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Login } from "../Login/Login"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Register } from "../Register/Register"


const DialogBox = () => {
  return (
    <div className="space-y-2">
     <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>
          <Tabs defaultValue="" className="w-full">
            <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">Sign Up</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login /></TabsContent>
  <TabsContent value="signup"><Register /></TabsContent>
</Tabs>
          </DialogTitle>
          
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  )
}
export default DialogBox
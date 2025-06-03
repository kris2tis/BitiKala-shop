import {Button} from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export default function UserDashboradDetails({ userName }) {
    const navigate = useNavigate()

    const logOutHandler = () => {
        sessionStorage.removeItem("auth")

        navigate("/")
    }

  return (
      <div className="w-full flex-col gap-y-3 flex justify-center items-center">
          <h1 className="text-lg">سلام {userName}</h1>
          <p className="mt-8">میخوای از حسابت خارج بشی ؟</p>
          <div className="flex gap-x-3">
              <Button onClick={logOutHandler} className="bg-[#a14a4a]">آره</Button>
              <Button className="bg-[#46a563]">نه</Button>
          </div>
      </div>
  );
}

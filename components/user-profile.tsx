import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";
import { UserCircle } from "lucide-react";
import type { UserProfile } from "~/types/product";

interface UserProfileProps {
  profile: UserProfile;
}

export function UserProfile({ profile, currentView, setCurrentView }: UserProfileProps & { currentView: 'cart' | 'history', setCurrentView: (view: 'cart' | 'history') => void }) {
  return (
    <div className="bg-[#F0E1DC]  w-full mb-8">
      <div className="flex flex-col md:flex-row justify-between md:p-12 p-6 items-start">
        <div className="flex md:gap-4 flex-col gap-6 ">
          <div className="flex gap-2 items-center ">
            <UserCircle className="h-8 w-8 text-rose-700" />
            <h1 className="text-lg font-semibold text-[#983A42]">{profile.name}</h1>
          </div>

          <div className="space-y-4 flex flex-col md:flex-row md:gap-6">
            <div className="space-y-1 text-black">
              <h2 className="text-sm font-medium text-[#983A42]">Contact</h2>
              <p className="text-sm ">{profile.email}</p>
              <p className="text-sm ">{profile.phone}</p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-[#983A42]">Address</h2>
              <p className="text-sm ">{profile.address.street}</p>
              <p className="text-sm">{profile.address.city}</p>
              <p className="text-sm">{profile.address.postalCode}</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 md:w-2xs w-full mt-2 md:mt-0">
        <Button 
              className={`w-full ${currentView === 'cart' ? 'bg-[#C77179] text-white' : ' bg-transparent border text-rose-700'} `}
              onClick={() => setCurrentView('cart')}
            >
              My Cart
            </Button>
            <Button 
              className={`w-full ${currentView === 'history' ? 'bg-[#C77179] text-white' : ' bg-transparent border text-rose-700'}`}
              onClick={() => setCurrentView('history')}
            >
              Order History
            </Button>
            <Button className="w-full bg-transparent border hover:bg-rose-400 text-rose-700">
              Logout
            </Button>
        </div>
      </div>
    </div>
  );
}

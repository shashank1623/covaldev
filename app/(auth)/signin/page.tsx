
import Auth from "@/components/Auth"

export default function Signin() {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Auth mode='signin'/>
        </div>
    )
}
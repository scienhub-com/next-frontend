
import { MainNav } from "./nav"

export function Header() {
    return (
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-wrapper">
                <div className="flex h-14 items-center">
                    <MainNav />
                </div>
            </div>
        </header>
    )
}
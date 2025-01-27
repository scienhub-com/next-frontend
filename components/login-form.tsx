import { Icon } from '@iconify/react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="#"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                <Icon icon="noto-v1:letter-s" fontSize={30} />
                            </div>
                            <span className="sr-only">ScienHub</span>
                        </a>
                        <h1 className="text-xl font-bold">Welcome to ScienHub.</h1>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="/register" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="contact@scienhub.com"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                    </div>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            Or
                        </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Button variant="outline" className="w-full">
                            <Icon icon="uiw:github" />Continue with GitHub
                        </Button>
                        <Button variant="outline" className="w-full">
                            <Icon icon="devicon:google" />Continue with Google
                        </Button>
                    </div>
                </div>
            </form>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="/legal/terms">Terms of Service</a>{" "}
                and <a href="/legal/privacy">Privacy Policy</a>.
            </div>
        </div>
    )
}

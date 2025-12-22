'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme/theme-toggle';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useConversation } from '@/hooks/useConversation';
import { useNavigation } from '@/hooks/useNavigation'
import { UserButton } from '@clerk/clerk-react';
import Link from 'next/link';
import React from 'react'

const MobileNav = () => {
    const paths = useNavigation();

    const { isActive } = useConversation();

    if (isActive) return null;

    return (
        <Card className='fixed bottom-4 left-4 right-4
    flex items-center justify-center
    h-16 p-2 lg:hidden z-50
    backdrop-blur-md bg-card/95 border-border/50'>
            <nav className='w-full'>
                <ul className='flex justify-evenly
            items-center'>{
                        paths.map((path, id) => {
                            return (<li key={id}
                                className='relative'>
                                <Link href={path.href}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className='relative inline-block'>
                                                <Button
                                                    size="icon"
                                                    variant={path.active ? "default" : "outline"}
                                                    className="min-h-[44px] min-w-[44px] transition-all active:scale-95"
                                                >
                                                    {path.icon}
                                                </Button>
                                                {
                                                    path.count ?
                                                        <Badge className='absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs'>
                                                            {path.count}
                                                        </Badge>
                                                        : null
                                                }
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{path.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Link>
                            </li>
                            )
                        })}
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <UserButton />
                    </li>
                </ul>
            </nav>
        </Card>
    )
}

export default MobileNav
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react';
import React from 'react'

const ConversationSkeleton = () => {
    return (
        <div className="w-full space-y-2 animate-pulse p-2">
            {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="flex gap-3 md:gap-4 p-2 md:p-3">
                    <div className="rounded-full bg-muted w-10 h-10 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-1/3" />
                        <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default ConversationSkeleton;

'use client'
import ItemList from '@/components/shared/item-list/ItemList'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { MessageSquare } from 'lucide-react'
import DMConversationItem from './_components/DMConversationItem'
import CreateGroupDialog from './_components/CreateGroupDialog'
import GroupConversationItem from './_components/GroupConversationItem'
import ConversationSkeleton from '@/components/shared/item-list/ConversationSkeleton'

type Props = {
  children: React.ReactNode;
}

const ConversationLayout = ({ children }: Props) => {
  const conversations = useQuery(api.conversations.get)
  return (
    <>
      <ItemList title='Conversations' action={<CreateGroupDialog />}>{
        conversations ? (conversations.length === 0 ?
          (<div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
            <MessageSquare className="h-16 w-16 text-muted-foreground opacity-50" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">No conversations yet</h3>
              <p className="text-sm text-muted-foreground max-w-[250px]">
                Start chatting by adding friends or creating a group
              </p>
            </div>
          </div>
          ) : conversations.map((conversations) => {
            return conversations.conversation.isGroup ?
              (
                <GroupConversationItem
                  key={conversations.conversation._id}
                  id={conversations.conversation._id}
                  name={conversations.conversation.name || ""}
                  lastMessageContent={conversations.lastMessage?.content}
                  lastMessageSender={conversations.lastMessage?.sender}
                />
              ) :
              (
                <DMConversationItem
                  key={conversations.conversation._id}
                  id={conversations.conversation._id}
                  username={conversations.otherMember?.username || ""}
                  imageUrl={conversations.otherMember?.imageUrl || ""}
                  lastMessageContent={conversations.lastMessage?.content}
                  lastMessageSender={conversations.lastMessage?.sender}
                />
              )
          })

        ) : (
          <ConversationSkeleton />

        )}
      </ItemList>
      {children}
    </>
  )
}

export default ConversationLayout
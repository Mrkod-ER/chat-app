import { ConvexError } from "convex/values";
import { query } from "./_generated/server";
import { getUserByClerkId } from "./_utils";

export const get = query({args: {},
handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if(!identity) {
        // If unauthenticated, gracefully return an empty list instead of throwing.
        return [];
    }

    const currentUser = await getUserByClerkId({
        ctx, clerkId: identity.subject
    })

    if(!currentUser) {
        throw new ConvexError("user not found");
    }

    const requests = await ctx.db.query("requests").withIndex("by_receiver", (q) => q.eq("receiver", currentUser._id))
    .collect();

    const requestsWithSender = await Promise.all(requests.map(
        async request => {
            const sender = await ctx.db.get(request.sender);

            if(!sender) {
                throw new ConvexError("Request sender could not be found");
            }

            return {sender, request };
        }
    ));

    return requestsWithSender;
    },
})

export const count = query({
    args: {},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

    if(!identity) {
        // If unauthenticated, report zero pending requests.
        return 0;
    }

    const currentUser = await getUserByClerkId({
        ctx, clerkId: identity.subject
    })

    if(!currentUser) {
        throw new ConvexError("user not found");
    }

    const requests = await ctx.db.query("requests").withIndex("by_receiver", (q) => q.eq("receiver", currentUser._id))
    .collect();

    return requests.length;
    }
})
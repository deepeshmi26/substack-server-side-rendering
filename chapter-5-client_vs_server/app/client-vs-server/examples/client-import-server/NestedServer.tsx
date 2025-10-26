import InstructionBlock from "@/components/InstructionBlock";

// This is a nested server component that attempts to be imported by a client component
export default function NestedServerComponent() {
  return (
    <div className="space-y-4">
      <InstructionBlock
        title="Server Component Import Rules"
        instructions="Server components can only be imported by other server components. Client components cannot import server components directly because server components require server-side context to execute."
        note="This is a fundamental Next.js architecture rule that maintains the clear boundary between server and client code. If you need server functionality in a client component, consider moving the data fetching to an API route or a parent server component."
      />
    </div>
    
  );
}

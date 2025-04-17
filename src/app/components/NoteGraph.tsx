import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
  ConnectionMode,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Note } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface NoteWithChildren extends Note {
  children: NoteWithChildren[];
}

interface NoteGraphProps {
  notes: NoteWithChildren[];
}

const NoteGraph: React.FC<NoteGraphProps> = ({ notes }) => {
  const router = useRouter();

  // Convert notes to graph nodes and edges
  const createNodesAndEdges = (notes: NoteWithChildren[]) => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    const processNote = (note: NoteWithChildren, position: { x: number; y: number }, level: number) => {
      // Create node with source/target handles
      nodes.push({
        id: note.id,
        position,
        data: { label: note.title },
        type: 'noteNode',
        draggable: false,
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
      });

      // Create edges to children
      note.children.forEach((child, index) => {
        // Position children in a semi-circle below parent
        const childrenCount = note.children.length;
        const angleStep = Math.PI / Math.max(childrenCount + 1, 2);
        const angle = -Math.PI / 2 + angleStep * (index + 1);
        const radius = 200;
        const childX = position.x + radius * Math.cos(angle);
        const childY = position.y + radius * Math.sin(angle) + 200;

        edges.push({
          id: `${note.id}-${child.id}`,
          source: note.id,
          target: child.id,
          type: 'default',
          animated: true,
          style: { 
            stroke: '#3b82f6',
            strokeWidth: 2,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#3b82f6',
            width: 20,
            height: 20,
          },
        });

        processNote(child, { x: childX, y: childY }, level + 1);
      });
    };

    // Process root notes with more horizontal spacing
    const rootCount = notes.length;
    const totalWidth = (rootCount - 1) * 300;
    notes.forEach((note, index) => {
      const x = -totalWidth / 2 + index * 300;
      processNote(note, { x, y: 0 }, 0);
    });

    return { nodes, edges };
  };

  const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(notes);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Custom node component
  const NoteNode = ({ data }: { data: { label: string } }) => (
    <div
      className="px-4 py-2 shadow-lg rounded-lg bg-white border-2 border-gray-200 hover:border-blue-500 transition-colors min-w-[150px] text-center"
    >
      <div className="font-medium text-sm text-gray-800">{data.label}</div>
    </div>
  );

  const nodeTypes = {
    noteNode: NoteNode,
  };

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    router.push(`/notes/${node.id}`);
  }, [router]);

  return (
    <div className="w-full h-[600px] bg-gray-50 rounded-lg border border-gray-200">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: 'default',
          animated: true,
          style: { stroke: '#3b82f6', strokeWidth: 2 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#3b82f6',
            width: 20,
            height: 20,
          },
        }}
      >
        <Background color="#94a3b8" gap={16} />
        <Controls />
        <MiniMap 
          nodeColor="#3b82f6"
          maskColor="rgba(241, 245, 249, 0.6)"
        />
      </ReactFlow>
    </div>
  );
};

export default NoteGraph; 
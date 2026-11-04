import { useBoards } from '@/boards/useBoards';
import CreateBoardDialog from './CreateBoardDialog';
import BoardCard from './BoardCard';

export default function BoardsPage() {
  const { boards, addBoards, removeBoard } = useBoards();

  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-semibold">Kanban</h1>
        <CreateBoardDialog onCreate={addBoards}/>
      </header>
      {(boards.length === 0) ? (
        <div className="flex h-screen items-center justify-center">
          <p>You have no boards yet.</p>
        </div>
      ) : (
        <main className="grid grid-cols-4 gap-4 overflow-x-auto p-6">
          {boards.map(board => (
            <BoardCard key={board.id} board={board} onRemove={removeBoard}/>
          ))}
        </main>
      )}
    </div>
  )
}
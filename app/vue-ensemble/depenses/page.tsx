export default function Depenses() {
  return (
    <div className="grid gap-5">
      <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
        {/* Slot colonne 1 */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 1 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 2 */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 1 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 2 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 3 */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 1 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 2 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 3 */}
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          {/* Slot colonne 4 */}
        </div>
      </div>
    </div>
  )
}

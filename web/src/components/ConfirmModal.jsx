const ConfirmModal = ({ book, onClose, onDelete }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-md p-6">
          <p className="text-lg font-medium mb-4">
            Tem certeza que deseja excluir o livro "{book.title}"?
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white rounded px-4 py-2 mr-2"
              onClick={onDelete}
            >
              Excluir
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white rounded px-4 py-2"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default ConfirmModal;
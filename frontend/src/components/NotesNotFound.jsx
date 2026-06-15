import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-2xl font-bold text-base-content mb-2">No notes yet</h2>
      <p className="text-base-content/70 mb-6">
        Create your first note and it will show up here.
      </p>
      <Link to="/create" className="btn btn-primary">
        <PlusIcon className="size-5" />
        New Note
      </Link>
    </div>
  );
};

export default NotesNotFound;

import useMutations from "../../hooks/useMutations";
import milsetoneService from "./milsetoneService";

const milestonesMutations = () => {

    const { createOne, deleteOne, updateOne } = milsetoneService();

    // Base mutations
    const { handleAdd, handleDelete, handleUpdate } = useMutations("MILESTONES-DATA", createOne, deleteOne, updateOne);

    return { handleAdd, handleDelete, handleUpdate }
}

export default milestonesMutations
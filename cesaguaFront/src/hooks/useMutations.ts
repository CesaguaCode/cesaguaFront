import { useMutation, useQueryClient } from "react-query";

const useMutations = (moduleName:any, addFunction:any, deleteFunction:any, updateFunction:any) => {
    const queryClient = useQueryClient();

    // Invalidate data and refetch
    const revalidateQuery = () => {
        queryClient.invalidateQueries(moduleName);
    }

    // Mutation when data is added
    const addMutation = useMutation(addFunction, {
        onSuccess: revalidateQuery,
    });

    // Mutation when data is deleted
    const deleteMutation = useMutation(deleteFunction, {
        onSuccess: revalidateQuery
    });

    // Mutation when data is updated
    const updateMutation = useMutation(updateFunction, {
        onSuccess: revalidateQuery
    });


    const handleAdd = (userData:any) => {
        addMutation.mutate(userData);
    };

    const handleDelete = (userId:any, success:any, error:any) => {
        deleteMutation.mutate(userId);
    };

    const handleUpdate = (userId:any) => {
        updateMutation.mutate(userId);
    };

    return { handleAdd, handleDelete, handleUpdate }
}

export default useMutations
import { toast } from 'react-toastify';
import { adminInstance } from '../../axiosInstance/admin';

export const approveAdminRequest = async (pendingAdminId) => {
    try {
        const response = await adminInstance.post(`/admin/approve/${pendingAdminId}`);
        toast.success(response.data.message, { position: 'top-center' });
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to approve admin request.', { position: 'top-right' });
    }
};

export const rejectAdminRequest = async (pendingAdminId) => {
    try {
        const response = await adminInstance.delete(`/admin/reject/${pendingAdminId}`);
        toast.success(response.data.message, { position: 'top-center' });
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to reject admin request.', { position: 'top-right' });
    }
};
